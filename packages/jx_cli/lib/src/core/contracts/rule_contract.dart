import '../models/class_token.dart';
import '../models/css_rule.dart';
import 'theme_contract.dart';

/// Contrat d'une règle utilitaire CSS JX.
abstract interface class JxRuleContract {
  /// Identifiant unique de la règle (ex. `color`, `padding`, `display`).
  String get id;

  /// Vérifie si la règle prend en charge le token donné.
  bool matches(JxClassToken token);

  /// Génère les règles CSS correspondantes au token en utilisant le thème fourni.
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme);
}
