import 'package:jx_core/jx_core.dart';
import 'package:jx_generator/jx_generator.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:jx_rules/jx_rules.dart';
import 'package:jx_theme/jx_theme.dart';

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
    final theme = cfg.theme;
    final resolver =
        variantResolver ??
        (theme is JxTheme
            ? JxVariantResolver.forTheme(theme, darkSelector: cfg.darkSelector)
            : JxVariantResolver(theme: theme, darkSelector: cfg.darkSelector));
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
        final hint = _suggest(token);
        if (hint != null) warnings.add(hint);
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
    // Le preflight précède les utilitaires mais n'apparaît pas dans `rules`.
    final utilities = generator.generate([
      if (config.config.includeReset) ...JxPreflight.rules,
      ...orderedRules,
    ]);
    final atRules = _atRules(orderedRules);
    final cssOutput = atRules.isEmpty
        ? utilities
        : utilities.isEmpty
        ? atRules
        : '$utilities${_minify ? '' : '\n\n'}$atRules';
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

  bool get _minify => config.config.minify;

  /// Suggestion pour une classe dont l'identifiant est inconnu (`pd:4` ->
  /// `p:4`). Seules les classes avec valeur ou variantes sont concernées, pour
  /// ne pas signaler les mots ordinaires trouvés dans les sources.
  String? _suggest(JxClassToken token) {
    if (!token.hasValue && !token.hasVariants) return null;
    final closest = closestMatch(token.identifier, registry.identifiers);
    if (closest == null) return null;
    final suggestion = [
      ...token.variants,
      '${token.isNegative ? '-' : ''}$closest',
      if (token.hasValue) token.value!,
    ].join(':');
    return 'Classe "${token.raw}" inconnue : vouliez-vous dire "$suggestion${token.isImportant ? '!' : ''}" ?';
  }

  /// Règles `@property` (variables `--jx-*` non héritées) et `@keyframes`
  /// des animations prédéfinies utilisées par les règles générées.
  String _atRules(List<JxCssRule> rules) {
    final properties = <String>{};
    final keyframes = <String>{};
    final animation = RegExp(r'jx-[a-z-]+');
    for (final rule in rules) {
      for (final declaration in rule.declarations) {
        if (declaration.property.startsWith('--jx-')) {
          properties.add(declaration.property);
        }
        if (declaration.property == 'animation') {
          for (final match in animation.allMatches(declaration.value)) {
            if (jxKeyframes.containsKey(match.group(0))) {
              keyframes.add(match.group(0)!);
            }
          }
        }
      }
    }
    if (properties.isEmpty && keyframes.isEmpty) return '';

    final nl = _minify ? '' : '\n';
    final sp = _minify ? '' : ' ';
    final indent = _minify ? '' : '  ';
    final blocks = <String>[
      for (final property in properties)
        '@property $property$sp{$nl${indent}syntax:$sp"*";$nl'
            '${indent}inherits:${sp}false;$nl}',
      for (final name in keyframes)
        [
          '@keyframes $name$sp{',
          for (final step in jxKeyframes[name]!.entries) ...[
            '$indent${step.key}$sp{',
            for (final d in step.value.entries)
              '$indent$indent${d.key}:$sp${d.value};',
            '$indent}',
          ],
          '}',
        ].join(nl),
    ];
    return blocks.join(_minify ? '' : '\n');
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
