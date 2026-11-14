import 'package:jx_core/jx_core.dart';

/// Raison pour laquelle une classe a été refusée par le parseur.
enum JxParseErrorCode {
  /// Classe vide, ou réduite à `!`.
  empty,

  /// Classe plus longue que la limite du parseur.
  tooLong,

  /// Espace ou caractère de contrôle dans la classe.
  invalidCharacter,

  /// Segment vide : `c:`, `:red`, `hover::red`.
  emptySegment,

  /// Crochets `[` `]` non équilibrés.
  unbalancedBrackets,

  /// Plus de variantes que la limite du parseur.
  tooManyVariants,

  /// Variante mal formée.
  invalidVariant,

  /// Variante répétée : `hover:hover:c:red`.
  duplicateVariant,

  /// Signe `-` mal employé : `-flex`, `-m:-4`, `m:--4`.
  invalidNegative,

  /// Identifiant mal formé.
  invalidIdentifier,

  /// Valeur mal formée ou vide.
  invalidValue,

  /// Valeur arbitraire refusée pour des raisons de sécurité
  /// (`c:[red;}body{…]`, `bg:[url(javascript:…)]`).
  unsafeValue,
}

/// Détail d'une classe refusée par le parseur.
final class JxParseFailure {
  /// Classe d'origine (tronquée à 80 caractères).
  final String raw;

  /// Catégorie de l'erreur.
  final JxParseErrorCode code;

  /// Explication lisible, sans majuscule ni point final.
  final String message;

  const JxParseFailure({
    required this.raw,
    required this.code,
    required this.message,
  });

  /// Indique si la classe a été refusée pour des raisons de sécurité.
  bool get isSecurityRelated => code == JxParseErrorCode.unsafeValue;

  @override
  String toString() => 'Invalid class "$raw": $message.';
}

/// Résultat de l'analyse d'une classe : un [token] ou une [failure].
final class JxParseOutcome {
  /// Token produit, ou `null` si la classe est invalide.
  final JxClassToken? token;

  /// Raison du refus, ou `null` si la classe est valide.
  final JxParseFailure? failure;

  const JxParseOutcome.success(JxClassToken this.token) : failure = null;

  const JxParseOutcome.failure(JxParseFailure this.failure) : token = null;

  /// Indique si la classe est valide.
  bool get isValid => token != null;
}

/// Résultat de l'analyse d'une liste de classes.
final class JxParseReport {
  /// Tokens des classes valides, dans l'ordre d'apparition.
  final List<JxClassToken> tokens;

  /// Classes refusées, dans l'ordre d'apparition.
  final List<JxParseFailure> failures;

  const JxParseReport({required this.tokens, required this.failures});

  /// Indique si toutes les classes sont valides.
  bool get isValid => failures.isEmpty;

  /// Classes refusées pour des raisons de sécurité.
  List<JxParseFailure> get securityFailures => [
    for (final failure in failures)
      if (failure.isSecurityRelated) failure,
  ];
}
