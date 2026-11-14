import 'dart:async';
import 'dart:io';

import 'package:jx_core/jx_core.dart';
import 'package:jx_engine/jx_engine.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:path/path.dart' as p;

import 'project_config.dart';

/// Résultat d'une passe de build.
final class JxBuildReport {
  /// Fichiers sources scannés.
  final List<String> files;

  /// Nombre de candidats extraits (avant filtrage par les règles).
  final int candidateCount;

  /// Résultat de compilation.
  final JxCompileResult result;

  /// Chemin absolu du CSS écrit.
  final String outputPath;

  /// Avertissements du scan (fichiers illisibles…).
  final List<String> scanWarnings;

  const JxBuildReport({
    required this.files,
    required this.candidateCount,
    required this.result,
    required this.outputPath,
    this.scanWarnings = const [],
  });

  /// Tous les avertissements (scan + compilation).
  List<String> get warnings => [...scanWarnings, ...result.warnings];
}

/// Scanne les sources d'un projet, compile les classes trouvées et écrit la
/// feuille de style.
final class JxBuilder {
  /// Racine du projet (chemins de la configuration relatifs à celle-ci).
  final Directory root;

  /// Configuration du projet.
  final JxProjectConfig config;

  final JxEngine engine;
  final JxClassExtractor extractor;

  JxBuilder({
    required this.root,
    required this.config,
    JxEngine? engine,
    this.extractor = const JxClassExtractor(),
  }) : engine = engine ?? config.buildEngine();

  /// Chemin absolu du fichier de sortie.
  String get outputPath => p.normalize(p.absolute(root.path, config.output));

  /// Liste triée des fichiers sources à scanner.
  List<File> sourceFiles() {
    final extensions = config.extensions.map((e) => '.$e').toSet();
    final excluded = config.exclude.toSet();
    final files = <String, File>{};

    bool isExcluded(String path) {
      final relative = p.relative(path, from: root.path);
      return p.split(relative).any(excluded.contains);
    }

    for (final entry in config.content) {
      final path = p.normalize(p.absolute(root.path, entry));
      final type = FileSystemEntity.typeSync(path);
      if (type == FileSystemEntityType.file) {
        files[path] = File(path);
      } else if (type == FileSystemEntityType.directory) {
        for (final entity in Directory(path).listSync(recursive: true)) {
          if (entity is! File) continue;
          final filePath = p.normalize(entity.path);
          if (!extensions.contains(p.extension(filePath))) continue;
          if (isExcluded(filePath) || filePath == outputPath) continue;
          files[filePath] = entity;
        }
      }
    }

    final sorted = files.keys.toList()..sort();
    return [for (final path in sorted) files[path]!];
  }

  /// Extrait les candidats d'un fichier selon son type.
  List<String> extractFrom(String path, String content) {
    return p.extension(path) == '.dart'
        ? extractor.extractFromDart(content)
        : extractor.extract(content);
  }

  /// Exécute un build complet et écrit le CSS.
  JxBuildReport build() {
    final files = sourceFiles();
    final scanWarnings = <String>[];
    final candidates = <String>{};

    for (final file in files) {
      try {
        candidates.addAll(extractFrom(file.path, file.readAsStringSync()));
      } on FileSystemException catch (e) {
        scanWarnings.add('Lecture impossible de ${file.path} : ${e.message}');
      }
    }

    // Seuls les candidats syntaxiquement valides sont transmis au moteur ;
    // les mots ordinaires non reconnus par une règle sont ignorés en silence.
    // Exception : une valeur arbitraire refusée pour raison de sécurité est
    // signalée, car elle ressemble trop à une classe pour être un hasard.
    final parser = engine.parser;
    final tokens = <JxClassToken>[];
    for (final candidate in candidates) {
      if (parser is JxParser) {
        final outcome = parser.analyze(candidate);
        if (outcome.token case final token?) {
          tokens.add(token);
        } else if (outcome.failure!.isSecurityRelated) {
          scanWarnings.add('${outcome.failure}');
        }
      } else if (parser.parseToken(candidate) case final token?) {
        tokens.add(token);
      }
    }
    final result = engine.compileTokens(tokens);

    final output = File(outputPath);
    output.parent.createSync(recursive: true);
    output.writeAsStringSync(result.css.isEmpty ? '' : '${result.css}\n');

    return JxBuildReport(
      files: [for (final f in files) f.path],
      candidateCount: candidates.length,
      result: result,
      outputPath: outputPath,
      scanWarnings: scanWarnings,
    );
  }

  /// Surveille les sources et relance [build] à chaque modification.
  ///
  /// Le build initial est exécuté immédiatement. [onBuild] reçoit chaque
  /// rapport ; [onError] chaque erreur de build. La surveillance s'arrête
  /// lorsque [until] se termine (jamais par défaut).
  Future<void> watch({
    required void Function(JxBuildReport report) onBuild,
    void Function(Object error)? onError,
    Future<void>? until,
    Duration debounce = const Duration(milliseconds: 150),
  }) async {
    void runBuild() {
      try {
        onBuild(build());
      } catch (e) {
        onError?.call(e);
      }
    }

    runBuild();

    final extensions = config.extensions.map((e) => '.$e').toSet();
    final subscriptions = <StreamSubscription<FileSystemEvent>>[];
    Timer? timer;

    for (final entry in config.content) {
      final path = p.normalize(p.absolute(root.path, entry));
      final type = FileSystemEntity.typeSync(path);
      final Stream<FileSystemEvent> events;
      if (type == FileSystemEntityType.directory) {
        events = Directory(path).watch(recursive: true);
      } else if (type == FileSystemEntityType.file) {
        events = File(path).watch();
      } else {
        continue;
      }
      subscriptions.add(
        events.listen((event) {
          final changed = p.normalize(event.path);
          if (changed == outputPath) return;
          if (type == FileSystemEntityType.directory &&
              !extensions.contains(p.extension(changed))) {
            return;
          }
          timer?.cancel();
          timer = Timer(debounce, runBuild);
        }),
      );
    }

    await (until ?? Completer<void>().future);
    timer?.cancel();
    for (final subscription in subscriptions) {
      await subscription.cancel();
    }
  }
}
