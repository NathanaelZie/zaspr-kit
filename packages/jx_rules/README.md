# jx_rules

Le catalogue des utilitaires de JX CSS et le registre qui les indexe. Chaque règle décrit les classes qu'elle accepte et les déclarations qu'elle produit.

> Ce package fait partie de **JX CSS** (ZASPR Kit), un framework CSS utilitaire écrit en Dart.
> Pour styler une application, installez plutôt [`jx_cli`](https://pub.dev/packages/jx_cli).

## Installation

```bash
dart pub add jx_rules
```

## Utilisation

```dart
import 'package:jx_rules/jx_rules.dart';

void main() {
  final registry = JxRuleRegistry()..registerPreset(const JxDefaultPreset());
  print('Règles disponibles : ${registry.count}');
}
```

Trois types de règles servent à définir vos propres utilitaires : `JxStaticRule` (classes sans valeur), `JxValueRule` (valeur du thème, mot-clé ou arbitraire) `JxKeywordRule` (mots-clés à plusieurs déclarations) et `JxDynamicRule` (déclarations calculées).

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
