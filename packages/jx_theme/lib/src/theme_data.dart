import 'token_value.dart';

/// Structure de stockage regroupant l'ensemble des tokens d'un thème.
final class JxThemeData {
  /// Tokens indexés par catégorie puis par clé.
  final Map<String, Map<String, JxTokenValue>> _categories;

  JxThemeData([Map<String, Map<String, JxTokenValue>>? categories])
    : _categories = categories ?? {};

  /// Construit les données de thème à partir d'une table brute
  /// `catégorie -> (clé -> valeur)`.
  factory JxThemeData.fromMap(Map<String, Map<String, String>> raw) {
    final data = JxThemeData();
    for (final category in raw.entries) {
      for (final entry in category.value.entries) {
        data.setToken(
          JxTokenValue(
            category: category.key,
            key: entry.key,
            value: entry.value,
          ),
        );
      }
    }
    return data;
  }

  /// Retourne les paires `clé -> valeur` d'une catégorie, dans l'ordre
  /// d'insertion (vide si la catégorie n'existe pas).
  Map<String, String> getCategory(String category) {
    final tokens = _categories[category];
    if (tokens == null) return const {};
    return {for (final t in tokens.values) t.key: t.value};
  }

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
