import 'package:jx_core/jx_core.dart';
import 'package:jx_generator/jx_generator.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:jx_rules/jx_rules.dart';

import 'engine_config.dart';

/// Orchestrateur principal du moteur de compilation JX CSS.
final class JxEngine implements JxEngineContract {
  /// Configuration du moteur.
  final JxEngineConfig config;

  /// Parseur de classes.
  final JxParserContract parser;

  /// Générateur CSS.
  final JxGeneratorContract generator;

  /// Registre des règles.
  JxRuleRegistry get registry => config.registry;

  /// Thème actif.
  JxThemeContract get theme => config.theme;

  JxEngine({
    JxEngineConfig? config,
    this.parser = const JxParser(),
    JxGeneratorContract? generator,
  }) : config = config ?? JxEngineConfig(),
       generator =
           generator ??
           JxGenerator(
             options: JxGeneratorOptions(
               minify: config?.config.minify ?? false,
             ),
           );

  @override
  JxCompileResult compile(String classNames) {
    final stopwatch = Stopwatch()..start();
    final tokens = parser.parse(classNames);
    final result = _compileTokensInternal(tokens, stopwatch);
    return result;
  }

  @override
  JxCompileResult compileTokens(List<JxClassToken> tokens) {
    final stopwatch = Stopwatch()..start();
    return _compileTokensInternal(tokens, stopwatch);
  }

  JxCompileResult _compileTokensInternal(
    List<JxClassToken> tokens,
    Stopwatch stopwatch,
  ) {
    final matchedTokens = <JxClassToken>[];
    final unmatchedTokens = <String>[];
    final warnings = <String>[];
    final generatedRules = <JxCssRule>[];

    for (final token in tokens) {
      final rule = registry.findMatchingRule(token);
      if (rule != null) {
        try {
          final cssRules = rule.generate(token, theme);
          generatedRules.addAll(cssRules);
          matchedTokens.add(token);
        } catch (e) {
          warnings.add('Erreur lors de la génération pour "${token.raw}": $e');
        }
      } else {
        unmatchedTokens.add(token.raw);
      }
    }

    final cssOutput = generator.generate(generatedRules);
    stopwatch.stop();

    return JxCompileResult(
      css: cssOutput,
      rules: generatedRules,
      matchedTokens: matchedTokens,
      unmatchedTokens: unmatchedTokens,
      warnings: warnings,
      duration: stopwatch.elapsed,
    );
  }
}
