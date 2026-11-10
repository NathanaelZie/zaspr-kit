# jx_core

Package central du framework **JX CSS** contenant les modèles de données fondamentaux, les interfaces et contrats d'architecture, ainsi que les exceptions standards.

## Responsabilités

- **Modèles de données** : `JxCssDeclaration`, `JxCssRule`, `JxClassToken`, `JxCompileResult`, `JxConfig`.
- **Contrats & Interfaces** :
  - `JxParserContract` : interface pour l'analyse syntaxique.
  - `JxRuleContract` : interface pour la déclaration de règles utilitaires.
  - `JxThemeContract` : interface pour la résolution de tokens et variables de thème.
  - `JxGeneratorContract` : interface pour la génération et le formatage CSS.
  - `JxEngineContract` : interface pour le moteur de compilation.
- **Erreurs & Exceptions** : `JxException`, `JxParseException`, `JxRuleException`, `JxThemeException`, `JxConfigException`.

Ce package ne dépend d'aucun autre package interne du monorepo.
