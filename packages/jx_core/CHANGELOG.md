## 0.0.1

- Version aligned with the JX CSS 0.0.1 release (`jx_builder`, `jx_ui`, `jx migrate`).

## 0.2.1

- `JxCssValue.unsafeReason` messages are now in English.
- README and package description in English.

## 0.2.0

- `JxCssRule.selectorPrefix` : préfixe de sélecteur (variantes `group-*`, `peer-*`, `dark:` en mode classe).
- `JxCssValue` : décodage (`decodeArbitrary`) et validation de sécurité (`unsafeReason`, `isSafe`) des valeurs arbitraires.
- `JxClassToken.arbitraryValue` conserve les `_` d'un `url(…)` et décode `\_` en `_` ; ajout de `copyWith`.

## 0.1.0

Première version publiée.

- Modèles `JxCssDeclaration`, `JxCssRule`, `JxClassToken`, `JxCompileResult`.
- Contrats du parseur, des règles, du thème, du générateur et du moteur.
- Hiérarchie d'exceptions `JxException`.
