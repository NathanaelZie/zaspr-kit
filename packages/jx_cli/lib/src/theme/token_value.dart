/// Représentation générique d'un token de design JX CSS.
final class JxTokenValue {
  /// Catégorie du token (ex. `colors`, `spacing`, `breakpoints`).
  final String category;

  /// Clé identifiante du token (ex. `primary`, `4`, `md`).
  final String key;

  /// Valeur CSS finale associée au token (ex. `#2563eb`, `1rem`, `768px`).
  final String value;

  const JxTokenValue({
    required this.category,
    required this.key,
    required this.value,
  });

  /// Nom de variable CSS correspondant au token (ex. `--jx-colors-primary`).
  String toCssVariableName({String prefix = 'jx'}) {
    return '--$prefix-$category-$key';
  }

  /// Déclaration CSS de la variable (ex. `--jx-colors-primary: #2563eb;`).
  String toCssVariableDeclaration({String prefix = 'jx'}) {
    return '${toCssVariableName(prefix: prefix)}: $value;';
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is JxTokenValue &&
          runtimeType == other.runtimeType &&
          category == other.category &&
          key == other.key &&
          value == other.value;

  @override
  int get hashCode => Object.hash(category, key, value);

  @override
  String toString() => '$category.$key: $value';
}
