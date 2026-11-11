# jx_core

Les modèles, contrats et exceptions partagés par tous les packages de JX CSS. Ce package n'a aucune dépendance.

> Ce package fait partie de **JX CSS** (ZASPR Kit), un framework CSS utilitaire écrit en Dart.
> Pour styler une application, installez plutôt [`jx_cli`](https://pub.dev/packages/jx_cli).

## Installation

```bash
dart pub add jx_core
```

## Utilisation

```dart
import 'package:jx_core/jx_core.dart';

void main() {
  const rule = JxCssRule(
    selector: '.c-primary',
    declarations: [JxCssDeclaration(property: 'color', value: '#2563eb')],
  );
  print(rule);
}
```

Contrats : `JxParserContract`, `JxRuleContract`, `JxThemeContract`, `JxGeneratorContract`, `JxEngineContract`. Exceptions : `JxParseException`, `JxRuleException`, `JxThemeException`, `JxConfigException`.

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
