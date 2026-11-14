## 0.0.3

- **One package.** `jx_cli` now contains the whole of JX CSS, so `dart pub add jx_cli` installs everything. Each part has its own import:
  - `package:jx_cli/ui.dart` (formerly `jx_ui`): modals, data tables, pagination, forms and the other components;
  - `package:jx_cli/builder.dart` (formerly `jx_builder`);
  - `package:jx_cli/engine.dart`, `rules.dart`, `theme.dart`, `parser.dart`, `generator.dart` and `core.dart` (formerly `jx_engine`, `jx_rules`, `jx_theme`, `jx_parser`, `jx_generator` and `jx_core`).
- `packages:` in `jx.yaml` accepts a package folder: `packages: [jx_cli/ui]`. `jx_ui` still works and points there when the old package is not installed.
- The build_runner builder (`jx_cli:jx_css`) is opt-in: enable it in `build.yaml`. This keeps projects that write `web/jx.css` with `jx build` working.
- The history of the former packages is in `doc/history/`.
- Components:
  - new `JxAccordion` (`<details>`, optionally exclusive) and `JxDrawer` (side panel on `<dialog>`), with the `slide-in-left` and `slide-in-right` animations;
  - new `JxTabs` (ARIA tabs with arrow keys), `JxDropdownMenu` (`<details>`, Escape closes it), `JxToast` with `JxToastRegion`, and `JxCombobox` (`<input list>`);
  - `JxProgress` without `value` is indeterminate (new `anim:indeterminate`);
  - `JxCheckbox(error:, required:)` and `JxRadioGroup(hint:, error:, required:)`;
  - required fields show a decorative asterisk;
  - badge and alert tones have dark-mode variants;
  - `JxTooltip(id:)` and `JxTooltip.describedBy(id)` link the hint to its element;
  - `JxCard(titleLevel:)` picks the heading level of the title;
  - a disabled or loading `JxButton(href:)` no longer navigates (`aria-disabled`, no `href`);
  - focus ring, strong text and surface borders are shared tokens, so every component focuses the same way.

## 0.0.2

- Uses `jx_engine` 0.0.2: `open:`, `modal:`, `backdrop:` variants and the table utilities `bcol:`, `tl:`, `cap:`.

## 0.0.1

- `jx migrate`: converts Tailwind classes to JX in `classes: '…'` and `class="…"` attributes, with a report of approximations (`-i` for a quick conversion, `--write` to apply).
- `packages:` in `jx.yaml`: scans the `lib/` folder of dependencies such as `jx_ui`.
- New `JxMigrator` and `JxPackageResolver` APIs.

## 0.2.1

- CLI output, help, warnings and `jx.yaml` errors are now in English, as is the `jx init` template.
- README and package description in English.

## 0.2.0

- Clé `dark_mode: media|class` dans `jx.yaml` (et dans le modèle de `jx init`).
- Plus de 40 nouveaux utilitaires et les variantes `dark:`, `group-*`, `peer-*`, `motion-*`, `print:` (voir `jx_rules` et `jx_engine`).
- Messages d'avertissement avec suggestions.
- **Sécurité** : une valeur arbitraire dangereuse trouvée dans les sources n'est jamais écrite dans le CSS et produit un avertissement.

## 0.1.0

Première version publiée.

- `jx init` : crée un `jx.yaml` commenté.
- `jx build` : extraction des classes, `--watch`, `--minify`, `--input`, `--content`, `--output`, `--[no-]reset`.
- Configuration `jx.yaml` avec `theme.extend` et `theme.override`.
