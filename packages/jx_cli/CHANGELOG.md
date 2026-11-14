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
