import 'dart:io';

import 'package:args/args.dart';
import 'package:jx_core/jx_core.dart';
import 'package:jx_engine/jx_engine.dart';
import 'package:path/path.dart' as p;

import 'builder.dart';
import 'project_config.dart';

/// Gestionnaire d'exécution de la ligne de commande JX CSS.
///
/// Commandes :
/// - `jx build` : scanne les sources du projet et écrit la feuille de style ;
/// - `jx build --watch` : idem, puis reconstruit à chaque modification ;
/// - `jx build -i "flex p:4"` : compile une expression et l'affiche ;
/// - `jx init` : crée un fichier `jx.yaml` commenté.
final class JxCliRunner {
  static const String version = '0.2.0';

  final ArgParser argParser;
  final StringSink out;
  final StringSink err;

  /// Moteur utilisé pour `build --input` (le build de projet construit le
  /// sien à partir de `jx.yaml`).
  final JxEngine? _engine;

  /// Répertoire de travail (racine du projet par défaut).
  final Directory workingDirectory;

  /// Signal d'arrêt du mode `--watch` (utile pour les tests).
  final Future<void>? watchUntil;

  JxCliRunner({
    JxEngine? engine,
    StringSink? out,
    StringSink? err,
    Directory? workingDirectory,
    this.watchUntil,
  }) : _engine = engine,
       out = out ?? stdout,
       err = err ?? stderr,
       workingDirectory = workingDirectory ?? Directory.current,
       argParser = ArgParser() {
    _setupArgs();
  }

  void _setupArgs() {
    argParser.addFlag(
      'help',
      abbr: 'h',
      negatable: false,
      help: 'Affiche ce message d\'aide.',
    );
    argParser.addFlag(
      'version',
      abbr: 'v',
      negatable: false,
      help: 'Affiche la version de JX CSS CLI.',
    );

    final buildParser = ArgParser()
      ..addOption(
        'config',
        abbr: 'c',
        help: 'Fichier de configuration (défaut : ./jx.yaml s\'il existe).',
      )
      ..addOption(
        'input',
        abbr: 'i',
        help:
            'Expression de classes à compiler directement (sans scan). '
            'Le CSS est affiché sauf si --output est fourni.',
      )
      ..addMultiOption(
        'content',
        help: 'Fichiers ou dossiers à scanner (remplace "content" de jx.yaml).',
      )
      ..addOption(
        'output',
        abbr: 'o',
        help: 'Chemin du fichier CSS généré (défaut : build/jx.css).',
      )
      ..addFlag(
        'minify',
        abbr: 'm',
        negatable: false,
        help: 'Minifie le CSS de sortie.',
      )
      ..addFlag(
        'reset',
        defaultsTo: null,
        help: 'Inclut la feuille de réinitialisation (preflight).',
      )
      ..addFlag(
        'watch',
        abbr: 'w',
        negatable: false,
        help: 'Reconstruit à chaque modification des sources.',
      );
    argParser.addCommand('build', buildParser);

    argParser.addCommand(
      'init',
      ArgParser()..addFlag(
        'force',
        abbr: 'f',
        negatable: false,
        help: 'Écrase un jx.yaml existant.',
      ),
    );
  }

  /// Exécute la CLI avec les arguments fournis et retourne un code de sortie.
  Future<int> run(List<String> arguments) async {
    try {
      final results = argParser.parse(arguments);

      if (results['version'] as bool) {
        out.writeln('JX CSS CLI version $version');
        return 0;
      }

      final command = results.command;
      if (results['help'] as bool || command == null && arguments.isEmpty) {
        _printUsage();
        return 0;
      }

      switch (command?.name) {
        case 'build':
          return await _build(command!);
        case 'init':
          return _init(command!);
      }

      err.writeln(
        'Commande inconnue. Utilisez --help pour voir les commandes disponibles.',
      );
      return 1;
    } on FormatException catch (e) {
      err.writeln('Erreur d\'arguments: ${e.message}');
      return 1;
    } on JxException catch (e) {
      err.writeln('Erreur: ${e.message}');
      return 1;
    } catch (e) {
      err.writeln('Erreur: $e');
      return 1;
    }
  }

  void _printUsage() {
    out.writeln('JX CSS - Framework CSS Utility-First en Dart\n');
    out.writeln('Usage: jx <commande> [options]\n');
    out.writeln('Commandes :');
    out.writeln('  build   Scanne les sources et génère la feuille de style.');
    out.writeln('  init    Crée un fichier jx.yaml.\n');
    out.writeln(argParser.usage);
    out.writeln('\nOptions de build :');
    out.writeln(argParser.commands['build']!.usage);
  }

  Future<int> _build(ArgResults command) async {
    final configPath = command['config'] as String?;
    final root = configPath == null
        ? workingDirectory
        : File(p.absolute(workingDirectory.path, configPath)).parent;
    var config = configPath == null
        ? JxProjectConfig.loadFrom(workingDirectory)
        : JxProjectConfig.load(
            File(p.absolute(workingDirectory.path, configPath)),
          );

    final contentOverride = command['content'] as List<String>;
    config = config.copyWith(
      content: contentOverride.isEmpty ? null : contentOverride,
      output: command['output'] as String?,
      minify: (command['minify'] as bool) ? true : null,
      reset: command['reset'] as bool?,
    );

    final input = command['input'] as String?;
    if (input != null) return _buildExpression(input, config, command);

    final builder = JxBuilder(root: root, config: config);
    if (command['watch'] as bool) {
      out.writeln(
        'Surveillance de ${config.content.join(', ')}… (Ctrl+C pour quitter)',
      );
      await builder.watch(
        onBuild: _report,
        onError: (e) => err.writeln('Erreur: $e'),
        until: watchUntil,
      );
      return 0;
    }

    _report(builder.build());
    return 0;
  }

  int _buildExpression(
    String input,
    JxProjectConfig config,
    ArgResults command,
  ) {
    // Sans --reset explicite, le preflight n'est pas ajouté à une expression.
    final engine =
        _engine ??
        (command.wasParsed('reset') ? config : config.copyWith(reset: false))
            .buildEngine();
    final result = engine.compile(input);
    for (final warning in result.warnings) {
      err.writeln('Avertissement: $warning');
    }

    if (command.wasParsed('output')) {
      final file = File(p.absolute(workingDirectory.path, config.output));
      file.parent.createSync(recursive: true);
      file.writeAsStringSync(result.css.isEmpty ? '' : '${result.css}\n');
      out.writeln(
        'Compilation réussie: ${result.ruleCount} règle(s) générée(s) -> ${file.path}',
      );
    } else {
      if (result.hasOutput) out.writeln(result.css);
      out.writeln(
        'Compilation réussie: ${result.ruleCount} règle(s) générée(s).',
      );
    }
    return 0;
  }

  void _report(JxBuildReport report) {
    final result = report.result;
    for (final warning in report.warnings) {
      err.writeln('Avertissement: $warning');
    }
    out.writeln(
      'Compilation réussie: ${result.ruleCount} règle(s) générée(s) '
      'depuis ${report.files.length} fichier(s) '
      '[${result.matchedTokens.length} classe(s) utilisée(s)] '
      'en ${result.duration.inMilliseconds} ms -> ${report.outputPath}',
    );
  }

  int _init(ArgResults command) {
    final file = File(p.join(workingDirectory.path, JxProjectConfig.fileName));
    if (file.existsSync() && !(command['force'] as bool)) {
      err.writeln('jx.yaml existe déjà (utilisez --force pour l\'écraser).');
      return 1;
    }
    file.writeAsStringSync(defaultConfigTemplate);
    out.writeln('Fichier créé : ${file.path}');
    return 0;
  }

  /// Contenu écrit par `jx init`.
  static const defaultConfigTemplate = '''
# Configuration JX CSS
# Fichiers ou dossiers scannés pour trouver les classes utilisées.
content:
  - lib
  - web

# Extensions prises en compte (.dart : seuls les littéraux de chaîne sont lus).
extensions: [dart, html]

# Dossiers ignorés en plus de build, .dart_tool, .git et node_modules.
exclude: []

output: build/jx.css
minify: false

# Feuille de réinitialisation (preflight) en tête du CSS.
reset: true

# Variante dark: : "media" suit la préférence système, "class" s'active
# quand un ancêtre (souvent <html>) porte la classe "dark".
dark_mode: media

theme:
  # Tokens ajoutés ou redéfinis par-dessus le thème par défaut.
  extend:
    colors:
      brand: '#0ea5e9'
  # Catégories remplacées entièrement (décommentez pour l'utiliser).
  # override:
  #   font-size:
  #     sm: 0.875rem
  #     base: 1rem
''';
}
