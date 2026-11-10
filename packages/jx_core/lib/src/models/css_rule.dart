import 'css_declaration.dart';

/// Représentation immuable d'une règle CSS complète (sélecteur et déclarations).
final class JxCssRule {
  /// Sélecteur CSS cible (ex. `.c-red`, `.hover\:bg-blue:hover`).
  final String selector;

  /// Liste des déclarations CSS formant le corps de la règle.
  final List<JxCssDeclaration> declarations;

  /// Requête média optionnelle enveloppant cette règle (ex. `@media (min-width: 768px)`).
  final String? mediaQuery;

  /// Pseudo-classe ou pseudo-élément optionnel (ex. `:hover`, `::after`).
  final String? pseudoSelector;

  const JxCssRule({
    required this.selector,
    required this.declarations,
    this.mediaQuery,
    this.pseudoSelector,
  });

  /// Indique si la règle est conditionnée par une media query.
  bool get hasMediaQuery => mediaQuery != null && mediaQuery!.isNotEmpty;

  /// Indique si la règle possède des déclarations.
  bool get hasDeclarations => declarations.isNotEmpty;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is JxCssRule &&
          runtimeType == other.runtimeType &&
          selector == other.selector &&
          mediaQuery == other.mediaQuery &&
          pseudoSelector == other.pseudoSelector &&
          _listEquals(declarations, other.declarations);

  @override
  int get hashCode => Object.hash(
        selector,
        mediaQuery,
        pseudoSelector,
        Object.hashAll(declarations),
      );

  static bool _listEquals(
    List<JxCssDeclaration> a,
    List<JxCssDeclaration> b,
  ) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
    }
    return true;
  }

  @override
  String toString() {
    final buffer = StringBuffer();
    if (hasMediaQuery) {
      buffer.write('$mediaQuery { ');
    }
    buffer.write('$selector { ');
    for (final dec in declarations) {
      buffer.write('${dec.toCss()} ');
    }
    buffer.write('}');
    if (hasMediaQuery) {
      buffer.write(' }');
    }
    return buffer.toString();
  }
}
