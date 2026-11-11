# jx_engine

Le moteur de compilation de JX CSS : il transforme une chaîne de classes utilitaires en CSS, trié mobile-first. Il fonctionne sur la VM Dart comme dans le navigateur.

> Ce package fait partie de **JX CSS** (ZASPR Kit), un framework CSS utilitaire écrit en Dart.
> Pour styler une application, installez plutôt [`jx_cli`](https://pub.dev/packages/jx_cli).

## Installation

```bash
dart pub add jx_engine
```

## Utilisation

```dart
import 'package:jx_engine/jx_engine.dart';

void main() {
  final result = JxEngine().compile('p:4 md:p:8 hover:bg:blue-700 c:red!');
  print(result.css);       // feuille générée
  print(result.ruleCount); // nombre de règles
  print(result.warnings);  // classes rejetées
}
```

Les variantes reconnues sont exposées par `JxVariantResolver` : `defaultBreakpoints`, `defaultPseudoClasses` et `defaultPseudoElements`.

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
