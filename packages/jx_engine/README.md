# jx_engine

Package d'orchestration du moteur de compilation pour le framework **JX CSS**.

## Responsabilités

- Coordination du pipeline de compilation :
  1. Tokenisation via `JxParserContract` (`jx_parser`).
  2. Recherche et association des règles via `JxRuleRegistry` (`jx_rules`).
  3. Résolution des tokens de thème via `JxThemeContract` (`jx_theme`).
  4. Génération du CSS via `JxGeneratorContract` (`jx_generator`).
- Suivi des métriques (durée, tokens reconnus / non reconnus, alertes).
- Implémentation du contrat `JxEngineContract` (`JxEngine`).

## Dépendances

- `jx_core` (interne)
- `jx_parser` (interne)
- `jx_theme` (interne)
- `jx_rules` (interne)
- `jx_generator` (interne)
