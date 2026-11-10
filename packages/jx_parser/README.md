# jx_parser

Package d'analyse et d'interprétation de la syntaxe des classes pour le framework **JX CSS**.

## Responsabilités

- Analyse lexicale et tokenisation des classes CSS.
- Prise en charge de la syntaxe propriétaire JX CSS (`variante:identifiant:valeur!`).
- Découpage et extraction sécurisée des modificateurs, utilitaires, arguments et marqueurs d'importance.
- Implémentation du contrat `JxParserContract` (`JxParser`).

## Dépendances

- `jx_core` (interne)
