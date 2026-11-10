# jx_cli

Interface en ligne de commande pour le framework **JX CSS**.

## Responsabilités

- Point d'entrée exécutable `bin/jx.dart`.
- Analyse des arguments CLI (`JxCliRunner`) avec `args`.
- Déclenchement de la compilation via `jx_engine`.

## Dépendances

- `jx_core` (interne)
- `jx_engine` (interne)
- `args` (externe)
