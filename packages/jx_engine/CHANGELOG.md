## 0.0.2

- New variants: `open:` (`[open]`, for `<details>` and `<dialog>`), `group-open:`, `peer-open:`, `modal:` (`:modal`) and `backdrop:` (`::backdrop`).
- Requires `jx_rules` 0.0.2 for the table utilities.

## 0.0.1

- `JxTailwindConverter`: converts Tailwind classes to JX. Every result is checked by compiling it; approximations and unsupported classes are reported.

## 0.2.1

- Warnings and suggestions are now in English (`Unknown class "pd:4": did you mean "p:4"?`).
- README and package description in English.

## 0.2.0

- Variantes `dark:` (préférence système ou classe `.dark` via `JxEngineConfig.darkSelector`), `motion-safe:`, `motion-reduce:`, `print:`, `contrast-more:`, `portrait:`, `landscape:`.
- Variantes `group-*` et `peer-*` pour toutes les pseudo-classes (`group-hover:`, `peer-checked:`…).
- Émission automatique des `@keyframes` utilisées et de `@property` pour les variables `--jx-*` (non héritées).
- Suggestion de correction pour les identifiants inconnus (`pd:4` -> `p:4`).
- Les avertissements de syntaxe donnent la raison du refus : `Syntaxe de classe invalide : "c:" (segment vide…)`.

## 0.1.0

Première version publiée.

- Pipeline parseur, règles, thème, générateur.
- Variantes : breakpoints, pseudo-classes (dont états de formulaire) et pseudo-éléments.
- Tri mobile-first et avertissements pour les classes rejetées.
