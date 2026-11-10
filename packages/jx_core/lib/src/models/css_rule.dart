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

  /// Indique si la règle porte une pseudo-classe ou un pseudo-élément.
  bool get hasPseudoSelector =>
      pseudoSelector != null && pseudoSelector!.isNotEmpty;

  /// Sélecteur complet tel qu'il doit être écrit dans la feuille de style
  /// (sélecteur de base suivi de la pseudo-classe éventuelle).
  String get fullSelector => '$selector${pseudoSelector ?? ''}';

  /// Copie la règle en surchargeant les champs spécifiés.
  JxCssRule copyWith({
    String? selector,
    List<JxCssDeclaration>? declarations,
    String? mediaQuery,
    String? pseudoSelector,
  }) {
    return JxCssRule(
      selector: selector ?? this.selector,
      declarations: declarations ?? this.declarations,
      mediaQuery: mediaQuery ?? this.mediaQuery,
      pseudoSelector: pseudoSelector ?? this.pseudoSelector,
    );
  }

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

  static bool _listEquals(List<JxCssDeclaration> a, List<JxCssDeclaration> b) {
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
    buffer.write('$fullSelector { ');
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
