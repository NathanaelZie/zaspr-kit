## 0.2.0

- Variantes `dark:` (préférence système ou classe `.dark` via `JxEngineConfig.darkSelector`), `motion-safe:`, `motion-reduce:`, `print:`, `contrast-more:`, `portrait:`, `landscape:`.
- Variantes `group-*` et `peer-*` pour toutes les pseudo-classes (`group-hover:`, `peer-checked:`…).
- Émission automatique des `@keyframes` utilisées et de `@property` pour les variables `--jx-*` (non héritées).
- Suggestion de correction pour les identifiants inconnus (`pd:4` -> `p:4`).

## 0.1.0

Première version publiée.

- Pipeline parseur, règles, thème, générateur.
- Variantes : breakpoints, pseudo-classes (dont états de formulaire) et pseudo-éléments.
- Tri mobile-first et avertissements pour les classes rejetées.
