import 'dart:io';

import 'package:args/args.dart';
import 'package:jx_engine/jx_engine.dart';

/// Gestionnaire d'exécution de la ligne de commande JX CSS.
final class JxCliRunner {
  static const String version = '0.1.0';

  final ArgParser argParser;
  final JxEngine engine;
  final StringSink out;
  final StringSink err;

  JxCliRunner({
    JxEngine? engine,
    StringSink? out,
    StringSink? err,
  })  : engine = engine ?? JxEngine(),
        out = out ?? stdout,
        err = err ?? stderr,
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

    // Commande build
    final buildParser = ArgParser();
    buildParser.addOption(
      'input',
      abbr: 'i',
      help: 'Fichier ou expression de classes source.',
    );
    buildParser.addOption(
      'output',
      abbr: 'o',
      defaultsTo: 'build/jx.css',
      help: 'Chemin du fichier CSS généré.',
    );
    buildParser.addFlag(
      'minify',
      abbr: 'm',
      negatable: false,
      help: 'Minifie le CSS de sortie.',
    );
    argParser.addCommand('build', buildParser);
  }

  /// Exécute la CLI avec les arguments fournis et retourne un code de sortie.
  Future<int> run(List<String> arguments) async {
    try {
      final results = argParser.parse(arguments);

      if (results['version'] as bool) {
        out.writeln('JX CSS CLI version $version');
        return 0;
      }

      if (results['help'] as bool || results.command == null && arguments.isEmpty) {
        out.writeln('JX CSS - Framework CSS Utility-First en Dart\n');
        out.writeln('Usage: jx <commande> [options]\n');
        out.writeln(argParser.usage);
        return 0;
      }

      final command = results.command;
      if (command != null && command.name == 'build') {
        final input = command['input'] as String? ?? '';
        final result = engine.compile(input);
        out.writeln('Compilation réussie: ${result.ruleCount} règle(s) générée(s).');
        return 0;
      }

      err.writeln('Commande inconnue. Utilisez --help pour voir les commandes disponibles.');
      return 1;
    } on FormatException catch (e) {
      err.writeln('Erreur d\'arguments: ${e.message}');
      return 1;
    } catch (e) {
      err.writeln('Erreur: $e');
      return 1;
    }
  }
}
