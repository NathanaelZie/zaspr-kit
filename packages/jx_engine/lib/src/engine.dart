import 'package:jx_core/jx_core.dart';
import 'package:jx_generator/jx_generator.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:jx_rules/jx_rules.dart';

import 'engine_config.dart';
import 'variant_resolver.dart';

/// Orchestrateur principal du moteur de compilation JX CSS.
///
/// Pipeline : analyse -> correspondance de règle -> génération -> application
/// des variantes -> tri (règles de base puis media queries mobile-first) ->
/// sérialisation CSS.
final class JxEngine implements JxEngineContract {
  /// Configuration du moteur.
  final JxEngineConfig config;

  /// Parseur de classes.
  final JxParserContract parser;

  /// Générateur CSS.
  final JxGeneratorContract generator;

  /// Résolveur de variantes (pseudo-classes et breakpoints).
  final JxVariantResolver variantResolver;

  /// Registre des règles.
  JxRuleRegistry get registry => config.registry;

  /// Thème actif.
  JxThemeContract get theme => config.theme;

  const JxEngine._(
    this.config,
    this.parser,
    this.generator,
    this.variantResolver,
  );

  factory JxEngine({
    JxEngineConfig? config,
    JxParserContract? parser,
    JxGeneratorContract? generator,
    JxVariantResolver? variantResolver,
  }) {
    final cfg = config ?? JxEngineConfig();
    final resolver = variantResolver ?? JxVariantResolver(theme: cfg.theme);
    return JxEngine._(
      cfg,
      parser ?? JxParser(variants: resolver.knownVariants),
      generator ??
          JxGenerator(options: JxGeneratorOptions(minify: cfg.config.minify)),
      resolver,
    );
  }

  @override
  JxCompileResult compile(String classNames) {
    final stopwatch = Stopwatch()..start();
    final tokens = <JxClassToken>[];
    final invalid = <String>[];

    final trimmed = classNames.trim();
    if (trimmed.isNotEmpty) {
      for (final raw in trimmed.split(RegExp(r'\s+'))) {
        final token = parser.parseToken(raw);
        if (token == null) {
          invalid.add(raw);
        } else {
          tokens.add(token);
        }
      }
    }

    return _compileTokensInternal(tokens, stopwatch, invalid: invalid);
  }

  @override
  JxCompileResult compileTokens(List<JxClassToken> tokens) {
    final stopwatch = Stopwatch()..start();
    return _compileTokensInternal(tokens, stopwatch);
  }

  JxCompileResult _compileTokensInternal(
    List<JxClassToken> tokens,
    Stopwatch stopwatch, {
    List<String> invalid = const [],
  }) {
    final matchedTokens = <JxClassToken>[];
    final unmatchedTokens = <String>[];
    final warnings = <String>[];
    final generatedRules = <JxCssRule>[];
    final seen = <String>{};

    for (final raw in invalid) {
      unmatchedTokens.add(raw);
      warnings.add('Syntaxe de classe invalide : "$raw".');
    }

    for (final token in tokens) {
      // Une classe répétée ne génère qu'une seule fois sa règle.
      if (!seen.add(token.raw)) continue;

      final rule = registry.findMatchingRule(token);
      if (rule == null) {
        unmatchedTokens.add(token.raw);
        continue;
      }

      try {
        final cssRules = [
          for (final cssRule in rule.generate(token, theme))
            variantResolver.apply(cssRule, token.variants),
        ];
        generatedRules.addAll(cssRules);
        matchedTokens.add(token);
      } on JxException catch (e) {
        unmatchedTokens.add(token.raw);
        warnings.add('"${token.raw}" ignorée : ${e.message}');
      } catch (e) {
        unmatchedTokens.add(token.raw);
        warnings.add('Erreur lors de la génération pour "${token.raw}": $e');
      }
    }

    final orderedRules = _sortByMedia(generatedRules);
    final cssOutput = generator.generate(orderedRules);
    stopwatch.stop();

    return JxCompileResult(
      css: cssOutput,
      rules: List.unmodifiable(orderedRules),
      matchedTokens: List.unmodifiable(matchedTokens),
      unmatchedTokens: List.unmodifiable(unmatchedTokens),
      warnings: List.unmodifiable(warnings),
      duration: stopwatch.elapsed,
    );
  }

  /// Tri stable : règles sans media query d'abord, puis par breakpoint croissant.
  List<JxCssRule> _sortByMedia(List<JxCssRule> rules) {
    final indexed = [
      for (var i = 0; i < rules.length; i++)
        (index: i, rank: variantResolver.mediaRank(rules[i].mediaQuery)),
    ];
    indexed.sort((a, b) {
      final byRank = a.rank.compareTo(b.rank);
      return byRank != 0 ? byRank : a.index.compareTo(b.index);
    });
    return [for (final entry in indexed) rules[entry.index]];
  }
}
