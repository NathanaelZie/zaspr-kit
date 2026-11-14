## 0.2.0

- `JxCssRule.selectorPrefix` : préfixe de sélecteur (variantes `group-*`, `peer-*`, `dark:` en mode classe).
- `JxCssValue` : décodage (`decodeArbitrary`) et validation de sécurité (`unsafeReason`, `isSafe`) des valeurs arbitraires.
- `JxClassToken.arbitraryValue` conserve les `_` d'un `url(…)` et décode `\_` en `_` ; ajout de `copyWith`.

## 0.1.0

Première version publiée.

- Modèles `JxCssDeclaration`, `JxCssRule`, `JxClassToken`, `JxCompileResult`.
- Contrats du parseur, des règles, du thème, du générateur et du moteur.
- Hiérarchie d'exceptions `JxException`.
