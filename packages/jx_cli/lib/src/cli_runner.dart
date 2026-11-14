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
  static const String version = '0.2.1';

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
      help: 'Shows this help message.',
    );
    argParser.addFlag(
      'version',
      abbr: 'v',
      negatable: false,
      help: 'Shows the JX CSS CLI version.',
    );

    final buildParser = ArgParser()
      ..addOption(
        'config',
        abbr: 'c',
        help: 'Configuration file (default: ./jx.yaml when it exists).',
      )
      ..addOption(
        'input',
        abbr: 'i',
        help:
            'Class expression to compile directly (no scan). '
            'The CSS is printed unless --output is given.',
      )
      ..addMultiOption(
        'content',
        help: 'Files or folders to scan (replaces "content" from jx.yaml).',
      )
      ..addOption(
        'output',
        abbr: 'o',
        help: 'Path of the generated CSS file (default: build/jx.css).',
      )
      ..addFlag(
        'minify',
        abbr: 'm',
        negatable: false,
        help: 'Minifies the output CSS.',
      )
      ..addFlag(
        'reset',
        defaultsTo: null,
        help: 'Includes the reset stylesheet (preflight).',
      )
      ..addFlag(
        'watch',
        abbr: 'w',
        negatable: false,
        help: 'Rebuilds on every change to the sources.',
      );
    argParser.addCommand('build', buildParser);

    argParser.addCommand(
      'init',
      ArgParser()..addFlag(
        'force',
        abbr: 'f',
        negatable: false,
        help: 'Overwrites an existing jx.yaml.',
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
        'Unknown command. Use --help to see the available commands.',
      );
      return 1;
    } on FormatException catch (e) {
      err.writeln('Argument error: ${e.message}');
      return 1;
    } on JxException catch (e) {
      err.writeln('Error: ${e.message}');
      return 1;
    } catch (e) {
      err.writeln('Error: $e');
      return 1;
    }
  }

  void _printUsage() {
    out.writeln('JX CSS - utility-first CSS framework for Dart\n');
    out.writeln('Usage: jx <command> [options]\n');
    out.writeln('Commands:');
    out.writeln('  build   Scans the sources and generates the stylesheet.');
    out.writeln('  init    Creates a jx.yaml file.\n');
    out.writeln(argParser.usage);
    out.writeln('\nbuild options:');
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
        'Watching ${config.content.join(', ')}… (Ctrl+C to quit)',
      );
      await builder.watch(
        onBuild: _report,
        onError: (e) => err.writeln('Error: $e'),
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
      err.writeln('Warning: $warning');
    }

    if (command.wasParsed('output')) {
      final file = File(p.absolute(workingDirectory.path, config.output));
      file.parent.createSync(recursive: true);
      file.writeAsStringSync(result.css.isEmpty ? '' : '${result.css}\n');
      out.writeln(
        'Build succeeded: ${result.ruleCount} rule(s) generated -> ${file.path}',
      );
    } else {
      if (result.hasOutput) out.writeln(result.css);
      out.writeln(
        'Build succeeded: ${result.ruleCount} rule(s) generated.',
      );
    }
    return 0;
  }

  void _report(JxBuildReport report) {
    final result = report.result;
    for (final warning in report.warnings) {
      err.writeln('Warning: $warning');
    }
    out.writeln(
      'Build succeeded: ${result.ruleCount} rule(s) generated '
      'from ${report.files.length} file(s) '
      '[${result.matchedTokens.length} class(es) used] '
      'in ${result.duration.inMilliseconds} ms -> ${report.outputPath}',
    );
  }

  int _init(ArgResults command) {
    final file = File(p.join(workingDirectory.path, JxProjectConfig.fileName));
    if (file.existsSync() && !(command['force'] as bool)) {
      err.writeln('jx.yaml already exists (use --force to overwrite it).');
      return 1;
    }
    file.writeAsStringSync(defaultConfigTemplate);
    out.writeln('Created: ${file.path}');
    return 0;
  }

  /// Contenu écrit par `jx init`.
  static const defaultConfigTemplate = '''
# JX CSS configuration
# Files or folders scanned to find the classes in use.
content:
  - lib
  - web

# Extensions to read (.dart: only string literals are read).
extensions: [dart, html]

# Folders ignored on top of build, .dart_tool, .git and node_modules.
exclude: []

output: build/jx.css
minify: false

# Reset stylesheet (preflight) at the top of the CSS.
reset: true

# dark: variant: "media" follows the system preference, "class" applies
# when an ancestor (usually <html>) carries the "dark" class.
dark_mode: media

theme:
  # Tokens added or redefined on top of the default theme.
  extend:
    colors:
      brand: '#0ea5e9'
  # Categories replaced entirely (uncomment to use).
  # override:
  #   font-size:
  #     sm: 0.875rem
  #     base: 1rem
''';
}
