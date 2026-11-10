# jx_theme

Package de gestion des thèmes, tokens de design et variables CSS pour le framework **JX CSS**.

## Responsabilités

- Définition des structures de tokens (`JxTokenValue`).
- Agrégation des tokens au sein d'un dictionnaire typé (`JxThemeData`).
- Implémentation du contrat `JxThemeContract` (`JxTheme`).
- Génération et formatage des variables CSS natives (`--jx-*`).

## Dépendances

- `jx_core` (interne)
