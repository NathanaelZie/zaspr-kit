# jx_theme

Les tokens de design de JX CSS : palette, espacements, breakpoints, typographie, rayons, bordures, opacités et ombres, avec leurs variables CSS `--jx-*`.

> Ce package fait partie de **JX CSS** (ZASPR Kit), un framework CSS utilitaire écrit en Dart.
> Pour styler une application, installez plutôt [`jx_cli`](https://pub.dev/packages/jx_cli).

## Installation

```bash
dart pub add jx_theme
```

## Utilisation

```dart
import 'package:jx_theme/jx_theme.dart';

void main() {
  final theme = JxTheme.defaultTheme();
  print(theme.resolveToken(JxThemeCategory.colors, 'teal-700')); // #0f766e
  print(theme.data.getCategory(JxThemeCategory.breakpoints));
}
```

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
