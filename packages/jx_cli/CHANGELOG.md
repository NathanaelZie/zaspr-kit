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
