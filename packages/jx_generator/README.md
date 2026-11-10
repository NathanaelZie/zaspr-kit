# jx_generator

Package de génération et de formatage de feuilles de style CSS pour le framework **JX CSS**.

## Responsabilités

- Sérialisation des règles CSS (`JxCssRule`) et déclarations (`JxCssDeclaration`).
- Formatage standard ou minifié (`JxGeneratorOptions`).
- Regroupement des règles déclarées sous `@media`.
- Génération du bloc `:root` pour l'injection des variables CSS du thème.
- Implémentation du contrat `JxGeneratorContract` (`JxGenerator`).

## Dépendances

- `jx_core` (interne)
- `jx_theme` (interne)
