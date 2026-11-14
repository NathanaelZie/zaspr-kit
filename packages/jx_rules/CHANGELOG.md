## 0.0.1

- Version aligned with the JX CSS 0.0.1 release (`jx_builder`, `jx_ui`, `jx migrate`).

## 0.2.1

- Rule error messages and value hints are now in English.
- README and package description in English.

## 0.2.0

- Transformations : `rot:`, `skx:`, `sky:`, `origin:` ; `tx:` et `ty:` se combinent désormais.
- Filtres composables : `blur:`, `bri:`, `con:`, `gs:`, `hue:`, `sat:`, `dsh:`, `grayscale`, `invert`, `sepia`, `filter-none`, et `bblur:`, `bbri:`, `bcon:`, `bgray:`, `bsat:` pour `backdrop-filter`.
- Dégradés : `grad:to-r` (ou un angle), `grad-radial`, `grad-conic`, `from:`, `via:`, `to:`.
- Animations : `anim:spin|ping|pulse|bounce|fade-in|fade-out|slide-up|slide-down|zoom-in`, `adur:`, `adelay:`, `delay:` ; images clés exposées par `jxKeyframes`.
- Médias et fonds : `ar:`, `obf:`, `obp:`, `bgp:`, `bgr:`, `mix:`, `bs:` (style de bordure).
- Alignement : `ac:`, `pc:`, `ji:`, `pi:`, `js:`, `order:`, `basis:`.
- Texte : `uppercase`, `lowercase`, `capitalize`, `italic`, `truncate`, `sr-only`, `visible`, `invisible`, `antialiased`, `tabular-nums`, `tw:balance`, `wb:`, `clamp:3`…
- Nouveau type de règle `JxDynamicRule`, option `extra` de `JxValueRule`, `JxRuleRegistry.identifiers` et `closestMatch`.
- Les erreurs de valeur suggèrent la valeur la plus proche et listent les valeurs possibles.
- **Sécurité** : toute valeur arbitraire est revalidée avant génération (`checkedArbitraryValue`), y compris pour les tokens construits sans le parseur.

## 0.1.0

Première version publiée.

- Utilitaires d'affichage, d'espacement, de couleurs, de typographie, de dimensions, de bordures, de flexbox, de grille, de position, d'effets et de formulaires.
- Registre de règles et preset par défaut `JxDefaultPreset`.
