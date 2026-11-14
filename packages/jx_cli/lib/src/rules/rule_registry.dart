import 'package:jx_cli/core.dart';

import 'preset.dart';
import 'rule_types.dart';

/// Registre central conservant et interrogeant les règles CSS utilitaires enregistrées.
final class JxRuleRegistry {
  final Map<String, JxRuleContract> _rulesById = {};
  final List<JxRuleContract> _rules = [];

  JxRuleRegistry();

  /// Crée un registre pré-rempli avec le preset fourni
  /// (par défaut [JxDefaultPreset]).
  factory JxRuleRegistry.withPreset([
    JxPreset preset = const JxDefaultPreset(),
  ]) {
    return JxRuleRegistry()..registerPreset(preset);
  }

  /// Enregistre toutes les règles d'un preset.
  void registerPreset(JxPreset preset) => registerAll(preset.rules);

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

  /// Identifiants de classe reconnus par les règles enregistrées (`p`, `flex`,
  /// `bg`…), utilisés pour suggérer une correction.
  Set<String> get identifiers => {
    for (final rule in _rules)
      ...switch (rule) {
        JxStaticRule(:final classes) => classes.keys,
        JxValueRule(:final properties) => properties.keys,
        JxKeywordRule(:final identifiers) => identifiers,
        JxDynamicRule(:final identifiers) => identifiers,
        _ => const <String>[],
      },
  };

  /// Nombre total de règles enregistrées.
  int get count => _rules.length;

  /// Réinitialise l'ensemble des règles enregistrées.
  void clear() {
    _rulesById.clear();
    _rules.clear();
  }
}
