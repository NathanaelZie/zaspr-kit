import '../models/css_rule.dart';

/// Contrat du générateur de feuille de style CSS finale.
abstract interface class JxGeneratorContract {
  /// Transforme une liste de règles CSS en une chaîne CSS valide et formatée.
  String generate(List<JxCssRule> rules);
}
