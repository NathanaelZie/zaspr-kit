/// Contrat du gestionnaire de thème et de tokens.
abstract interface class JxThemeContract {
  /// Nom identifiant le thème (ex. `default`, `dark`).
  String get name;

  /// Résout la valeur d'un token à partir de sa catégorie et de sa clé.
  ///
  /// Par exemple: `resolveToken('colors', 'primary')` -> `'#2563eb'`.
  String? resolveToken(String category, String key);

  /// Retourne l'ensemble des variables CSS déclarées par le thème.
  Map<String, String> getCssVariables();
}
