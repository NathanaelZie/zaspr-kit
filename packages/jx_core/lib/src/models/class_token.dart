/// Représentation intermédiaire (token) d'une classe utility analysée.
final class JxClassToken {
  /// Nom brut d'origine de la classe (ex. `hover:c:primary!`, `m:4`).
  final String raw;

  /// Identifiant ou racine de l'utilitaire (ex. `c`, `m`, `p`, `flex`).
  final String identifier;

  /// Valeur associée à l'utilitaire, si applicable (ex. `primary`, `4`, `[#ff0000]`).
  ///
  /// Pour une valeur négative (`m:-4` ou `-m:4`), la valeur est stockée sans
  /// le signe (`4`) et [isNegative] vaut `true`.
  final String? value;

  /// Liste des variantes/modificateurs (ex. `['hover']`, `['md', 'focus']`).
  final List<String> variants;

  /// Indique si la classe est marquée comme importante via un symbole dédié.
  final bool isImportant;

  /// Indique si la valeur est négative (ex. `m:-4`, `-m:4`).
  final bool isNegative;

  const JxClassToken({
    required this.raw,
    required this.identifier,
    this.value,
    this.variants = const [],
    this.isImportant = false,
    this.isNegative = false,
  });

  /// Indique si la classe comporte des variantes conditionnelles.
  bool get hasVariants => variants.isNotEmpty;

  /// Indique si la classe possède une valeur spécifiée.
  bool get hasValue => value != null && value!.isNotEmpty;

  /// Indique si la valeur est arbitraire, c'est-à-dire entourée de crochets
  /// (ex. `[#ff0000]`, `[200px]`).
  bool get isArbitrary =>
      hasValue &&
      value!.length > 2 &&
      value!.startsWith('[') &&
      value!.endsWith(']');

  /// Valeur arbitraire décodée (sans crochets, `_` remplacés par des espaces),
  /// ou `null` si la valeur n'est pas arbitraire.
  ///
  /// Exemple : `[calc(100%_-_1rem)]` -> `calc(100% - 1rem)`.
  String? get arbitraryValue {
    if (!isArbitrary) return null;
    return value!.substring(1, value!.length - 1).replaceAll('_', ' ');
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is JxClassToken &&
          runtimeType == other.runtimeType &&
          raw == other.raw &&
          identifier == other.identifier &&
          value == other.value &&
          isImportant == other.isImportant &&
          isNegative == other.isNegative &&
          _listEquals(variants, other.variants);

  @override
  int get hashCode => Object.hash(
    raw,
    identifier,
    value,
    isImportant,
    isNegative,
    Object.hashAll(variants),
  );

  static bool _listEquals(List<String> a, List<String> b) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
    }
    return true;
  }

  @override
  String toString() =>
      'JxClassToken(raw: $raw, id: $identifier, value: $value, variants: $variants, important: $isImportant, negative: $isNegative)';
}
