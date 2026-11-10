import 'package:jx_core/jx_core.dart';

/// Classe de base abstraite facilitant la création de règles CSS utilitaires.
abstract base class JxRule implements JxRuleContract {
  @override
  final String id;

  const JxRule(this.id);

  @override
  bool matches(JxClassToken token);

  @override
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme);

  /// Échappe les caractères spéciaux pour former un sélecteur de classe CSS valide.
  String escapeSelector(String rawClassName) {
    return '.${rawClassName.replaceAll(':', '\\:').replaceAll('!', '\\!').replaceAll('/', '\\/')}';
  }
}
