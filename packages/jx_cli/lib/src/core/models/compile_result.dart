import 'class_token.dart';
import 'css_rule.dart';

/// Résultat produit lors d'une passe de compilation du moteur JX CSS.
final class JxCompileResult {
  /// Feuille de style CSS finale générée.
  final String css;

  /// Liste des règles CSS produites.
  final List<JxCssRule> rules;

  /// Tokens ayant été reconnus et convertis en règles CSS.
  final List<JxClassToken> matchedTokens;

  /// Classes brutes non reconnues ou ignorées par le moteur.
  final List<String> unmatchedTokens;

  /// Avertissements éventuels émis pendant la compilation.
  final List<String> warnings;

  /// Durée de l'opération de compilation.
  final Duration duration;

  const JxCompileResult({
    required this.css,
    required this.rules,
    this.matchedTokens = const [],
    this.unmatchedTokens = const [],
    this.warnings = const [],
    this.duration = Duration.zero,
  });

  /// Nombre total de règles CSS générées.
  int get ruleCount => rules.length;

  /// Indique si la compilation a produit du CSS non vide.
  bool get hasOutput => css.trim().isNotEmpty;

  /// Indique si des avertissements ont été levés.
  bool get hasWarnings => warnings.isNotEmpty;

  @override
  String toString() =>
      'JxCompileResult(rules: $ruleCount, cssLength: ${css.length}, matched: ${matchedTokens.length}, unmatched: ${unmatchedTokens.length}, duration: ${duration.inMilliseconds}ms)';
}
