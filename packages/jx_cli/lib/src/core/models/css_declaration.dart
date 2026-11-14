/// Représentation immuable d'une déclaration CSS (propriété et valeur).
final class JxCssDeclaration {
  /// Nom de la propriété CSS (ex. `display`, `color`, `margin-top`).
  final String property;

  /// Valeur associée à la propriété CSS (ex. `flex`, `#ff0000`, `1rem`).
  final String value;

  /// Indique si la déclaration comporte le modificateur `!important`.
  final bool isImportant;

  const JxCssDeclaration({
    required this.property,
    required this.value,
    this.isImportant = false,
  });

  /// Sérialise la déclaration sous forme de chaîne CSS standard.
  String toCss() {
    final suffix = isImportant ? ' !important' : '';
    return '$property: $value$suffix;';
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is JxCssDeclaration &&
          runtimeType == other.runtimeType &&
          property == other.property &&
          value == other.value &&
          isImportant == other.isImportant;

  @override
  int get hashCode => Object.hash(property, value, isImportant);

  @override
  String toString() => toCss();
}
