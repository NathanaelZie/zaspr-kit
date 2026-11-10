import 'token_value.dart';

/// Structure de stockage regroupant l'ensemble des tokens d'un thème.
final class JxThemeData {
  /// Tokens indexés par catégorie puis par clé.
  final Map<String, Map<String, JxTokenValue>> _categories;

  JxThemeData([Map<String, Map<String, JxTokenValue>>? categories])
      : _categories = categories ?? {};

  /// Récupère un token spécifique dans une catégorie.
  JxTokenValue? getToken(String category, String key) {
    return _categories[category]?[key];
  }

  /// Récupère la valeur d'un token ou `null` s'il n'existe pas.
  String? getValue(String category, String key) {
    return getToken(category, key)?.value;
  }

  /// Ajoute ou remplace un token dans le thème.
  void setToken(JxTokenValue token) {
    final categoryMap = _categories.putIfAbsent(token.category, () => {});
    categoryMap[token.key] = token;
  }

  /// Retourne toutes les catégories de tokens enregistrées.
  Iterable<String> get categories => _categories.keys;

  /// Retourne la liste de tous les tokens du thème.
  List<JxTokenValue> getAllTokens() {
    final list = <JxTokenValue>[];
    for (final map in _categories.values) {
      list.addAll(map.values);
    }
    return list;
  }
}
