import 'package:jx_core/jx_core.dart';

/// Registre central conservant et interrogeant les règles CSS utilitaires enregistrées.
final class JxRuleRegistry {
  final Map<String, JxRuleContract> _rulesById = {};
  final List<JxRuleContract> _rules = [];

  JxRuleRegistry();

  /// Enregistre une nouvelle règle. Remplace toute règle existante avec le même id.
  void register(JxRuleContract rule) {
    if (_rulesById.containsKey(rule.id)) {
      _rules.removeWhere((r) => r.id == rule.id);
    }
    _rulesById[rule.id] = rule;
    _rules.add(rule);
  }

  /// Enregistre une collection de règles.
  void registerAll(Iterable<JxRuleContract> rules) {
    for (final rule in rules) {
      register(rule);
    }
  }

  /// Supprime une règle par son identifiant.
  bool unregister(String id) {
    final removed = _rulesById.remove(id);
    if (removed != null) {
      _rules.removeWhere((r) => r.id == id);
      return true;
    }
    return false;
  }

  /// Récupère une règle par son identifiant.
  JxRuleContract? getById(String id) => _rulesById[id];

  /// Recherche la première règle qui prend en charge le token donné.
  JxRuleContract? findMatchingRule(JxClassToken token) {
    for (final rule in _rules) {
      if (rule.matches(token)) {
        return rule;
      }
    }
    return null;
  }

  /// Retourne toutes les règles correspondant au token.
  List<JxRuleContract> findAllMatchingRules(JxClassToken token) {
    return _rules.where((rule) => rule.matches(token)).toList();
  }

  /// Liste de toutes les règles enregistrées.
  List<JxRuleContract> get allRules => List.unmodifiable(_rules);

  /// Nombre total de règles enregistrées.
  int get count => _rules.length;

  /// Réinitialise l'ensemble des règles enregistrées.
  void clear() {
    _rulesById.clear;
    _rules.clear();
  }
}
