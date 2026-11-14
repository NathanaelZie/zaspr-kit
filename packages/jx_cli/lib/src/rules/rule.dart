import 'package:jx_cli/core.dart';

/// Classe de base abstraite facilitant la création de règles CSS utilitaires.
abstract base class JxRule implements JxRuleContract {
  @override
  final String id;

  const JxRule(this.id);

  @override
  bool matches(JxClassToken token);

  @override
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme);

  static final RegExp _safeChar = RegExp(r'[a-zA-Z0-9_-]');

  /// Échappe les caractères spéciaux pour former un sélecteur de classe CSS valide.
  ///
  /// Tout caractère hors `[a-zA-Z0-9_-]` est précédé d'un antislash
  /// (ex. `c:[#ff0000]` -> `.c\:\[\#ff0000\]`). Un chiffre en tête est encodé
  /// en séquence hexadécimale (ex. `2xl:p:4` -> `.\32 xl\:p\:4`).
  String escapeSelector(String rawClassName) {
    final buffer = StringBuffer('.');
    for (var i = 0; i < rawClassName.length; i++) {
      final char = rawClassName[i];
      final isLeadingDigit =
          RegExp(r'[0-9]').hasMatch(char) &&
          (i == 0 || (i == 1 && rawClassName[0] == '-'));
      if (isLeadingDigit) {
        buffer.write('\\${char.codeUnitAt(0).toRadixString(16)} ');
      } else if (_safeChar.hasMatch(char)) {
        buffer.write(char);
      } else {
        buffer.write('\\$char');
      }
    }
    return buffer.toString();
  }
}
