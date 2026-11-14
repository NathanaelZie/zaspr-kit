## 0.2.0

- Variantes reconnues par défaut : `dark`, `motion-safe`, `motion-reduce`, `contrast-more`, `portrait`, `landscape`, `print`, `group-*` et `peer-*`.
- **Sécurité** : les valeurs arbitraires pouvant injecter du CSS ou charger du code sont refusées (`c:[red;}body{…]`, `url(javascript:…)`, `expression()`, `</style>`…).
- **Sécurité** : limites `maxClassLength` (512) et `maxVariants` (8) ; l'extracteur Dart ne dépasse plus la pile sur des interpolations imbriquées et écarte les candidats géants.
- Diagnostics : `analyze` et `analyzeAll` retournent la raison de chaque refus (`JxParseFailure`, `JxParseErrorCode`, `JxParseReport`).
- Importance en préfixe : `!p:4` équivaut à `p:4!`.
- Corrections : `url(/img/my_file.png)` garde ses `_` ; `\_` donne un `_` littéral ; `m:--4`, `-flex` et les variantes répétées (`hover:hover:`) sont refusés.
- Grammaire plus stricte des valeurs simples : `1..5`, `/`, `#`, `4-`, `.5` sont refusés (utilisez `0.5` ou des crochets).
- Extraction en temps linéaire, sans expression régulière créée à chaque caractère.

## 0.1.0

Première version publiée.

- Syntaxe `[variantes:]identifiant[:valeur][!]`.
- Valeurs arbitraires entre crochets (`_` pour l'espace), valeurs négatives, importance.
