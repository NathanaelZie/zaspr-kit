# jx_cli

La ligne de commande de **JX CSS** (ZASPR Kit), le framework CSS utilitaire écrit en Dart et pensé pour Jaspr.

`jx` lit vos fichiers Dart, repère les classes utilitaires écrites dans vos composants et génère une feuille de style qui ne contient que ce que vous utilisez. Aucun Node.js, aucun JavaScript à l'exécution.

```dart
div(classes: 'flex ai:center gap:3 p:4 br:lg bg:white sh:md md:p:8', [
  p(classes: 'fw:semibold c:gray-900 hover:c:blue', [.text('Bonjour JX')]),
])
```

## Installation

Dans un projet (recommandé) :

```bash
dart pub add dev:jx_cli
```

Ou en commande globale :

```bash
dart pub global activate jx_cli
```

## Démarrage

```bash
dart run jx_cli:jx init       # crée jx.yaml
dart run jx_cli:jx build      # génère la feuille de style
dart run jx_cli:jx build -w   # reconstruit à chaque modification
dart run jx_cli:jx build -m   # CSS minifié pour la production
```

Avec l'installation globale, remplacez `dart run jx_cli:jx` par `jx`.

Liez ensuite la feuille produite dans votre `Document` Jaspr :

```dart
Document(
  head: [link(rel: 'stylesheet', href: '/jx.css')],
  body: App(),
)
```

## Configuration

```yaml
# jx.yaml
content: [lib, web]        # fichiers ou dossiers à scanner
extensions: [dart, html]
output: web/jx.css
minify: false
reset: true                # inclut le preflight
dark_mode: media           # ou class : dark: actif sous .dark

theme:
  extend:                  # fusionné avec le thème par défaut
    colors:
      brand: '#3B6CF0'
  override:                # remplace une catégorie entière
    font-family:
      sans: 'Inter, system-ui, sans-serif'
```

## Commandes

| Commande | Rôle |
| :--- | :--- |
| `jx init [-f]` | Crée un `jx.yaml` commenté (`-f` écrase l'existant). |
| `jx build` | Extrait les classes et écrit le CSS. |
| `-c, --config` | Fichier de configuration. |
| `-i, --input` | Compile une expression sans scanner les fichiers. |
| `--content` | Fichiers ou dossiers à scanner. |
| `-o, --output` | Fichier CSS généré. |
| `-m, --minify` | Minifie la sortie. |
| `--[no-]reset` | Inclut ou non le preflight. |
| `-w, --watch` | Reconstruit à chaque modification. |

## Syntaxe en bref

`[variantes:]identifiant[:valeur][!]`

- `p:4`, `c:teal-700` : valeurs du thème.
- `w:[calc(100%_-_2rem)]` : valeur arbitraire (`_` = espace).
- `-mt:2` : valeur négative.
- `md:hover:bg:blue` : breakpoint et état.
- `dark:bg:gray-900` : mode sombre (`dark_mode: class` pour l'activer via une classe `.dark`).
- `group-hover:c:blue`, `peer-checked:bg:teal` : état d'un parent `group` ou d'un frère `peer`.
- `motion-reduce:anim:none`, `print:hidden` : préférences et impression.
- `c:red!` : `!important`.

## Quelques utilitaires

| Besoin | Classes |
| :--- | :--- |
| Mise en page | `flex`, `grid`, `cols:3`, `gap:4`, `ai:center`, `jc:between`, `pi:center`, `order:first` |
| Espacement, tailles | `p:4`, `mx:auto`, `w:full`, `mw:[40rem]`, `ar:video`, `basis:1/2` |
| Texte | `fs:xl`, `fw:bold`, `c:gray-700`, `uppercase`, `truncate`, `clamp:3`, `tw:balance` |
| Fonds, bordures | `bg:white`, `grad:to-r from:blue to:teal`, `bw:1`, `bs:dashed`, `br:lg`, `sh:md` |
| Effets | `o:50`, `blur:md`, `bri:110`, `bblur:lg` (verre dépoli), `mix:multiply` |
| Mouvement | `tr:all`, `dur:300`, `tx:2`, `rot:45`, `sc:105`, `anim:spin`, `anim:fade-in` |
| Accessibilité | `sr-only`, `focus-visible:ring:2`, `motion-reduce:anim:none` |

Une classe mal écrite est signalée avec une suggestion :

```
Avertissement: Classe "pd:4" inconnue : vouliez-vous dire "p:4" ?
```

Écrivez toujours les classes en entier : une classe construite par interpolation ne peut pas être détectée.

## La famille JX CSS

| Package | Rôle |
| :--- | :--- |
| [`jx_cli`](https://pub.dev/packages/jx_cli) | Ligne de commande : `jx init`, `jx build`. **Point d'entrée pour la plupart des projets.** |
| [`jx_engine`](https://pub.dev/packages/jx_engine) | Moteur de compilation, utilisable comme bibliothèque. |
| [`jx_rules`](https://pub.dev/packages/jx_rules) | Catalogue des utilitaires et registre de règles. |
| [`jx_theme`](https://pub.dev/packages/jx_theme) | Tokens de design et thème par défaut. |
| [`jx_parser`](https://pub.dev/packages/jx_parser) | Parseur de la syntaxe des classes. |
| [`jx_generator`](https://pub.dev/packages/jx_generator) | Sérialisation du CSS et preflight. |
| [`jx_core`](https://pub.dev/packages/jx_core) | Modèles, contrats et exceptions partagés. |

## Licence

MIT.
