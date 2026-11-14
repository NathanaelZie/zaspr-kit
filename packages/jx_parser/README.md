# jx_parser

Le parseur de la syntaxe de classes JX CSS : `[variantes:]identifiant[:valeur][!]`, avec valeurs arbitraires entre crochets, valeurs négatives et importance.

> Ce package fait partie de **JX CSS** (ZASPR Kit), un framework CSS utilitaire écrit en Dart.
> Pour styler une application, installez plutôt [`jx_cli`](https://pub.dev/packages/jx_cli).

## Installation

```bash
dart pub add jx_parser
```

## Utilisation

```dart
import 'package:jx_parser/jx_parser.dart';

void main() {
  const parser = JxParser();

  // Tokens des classes valides.
  for (final token in parser.parse('md:hover:bg:blue! w:[calc(100%_-_2rem)] -mt:2')) {
    print('${token.variants} ${token.identifier} ${token.value}');
  }

  // Diagnostic d'une classe refusée.
  final outcome = parser.analyze('c:[red;}body{display:none]');
  print(outcome.isValid);          // false
  print(outcome.failure!.code);    // JxParseErrorCode.unsafeValue
  print(outcome.failure);          // Classe "…" invalide : valeur refusée : caractère ";" interdit.
}
```

## Syntaxe

`[variantes:]identifiant[:valeur][!]`

| Élément | Exemples | Règle |
| :--- | :--- | :--- |
| Variantes | `md:`, `hover:`, `dark:`, `group-hover:` | 8 au plus, sans répétition |
| Identifiant | `p`, `bg`, `inline-flex` | lettres, chiffres, tirets simples |
| Valeur simple | `4`, `1.5`, `1/2`, `teal-700`, `#fff`, `50%` | mots séparés par `.`, `-` ou `/` |
| Valeur arbitraire | `[calc(100%_-_2rem)]`, `[url(/img/a_b.png)]` | entre crochets, voir ci-dessous |
| Négatif | `-mt:2`, `mt:-2` | une seule négation, avec une valeur |
| Important | `p:4!`, `!p:4` | `!` en fin ou en début de classe |

Dans une valeur arbitraire, `_` vaut une espace, `\_` un `_` littéral, et les `_` d'un `url(…)` sont conservés.

## Diagnostics

| Méthode | Retour |
| :--- | :--- |
| `parseToken(raw)` | le token, ou `null` |
| `parse(classes)` | les tokens valides |
| `analyze(raw)` | `JxParseOutcome` : `token` ou `failure` (code + message) |
| `analyzeAll(classes)` | `JxParseReport` : `tokens`, `failures`, `securityFailures` |

`JxParseErrorCode` distingue : `empty`, `tooLong`, `invalidCharacter`, `emptySegment`, `unbalancedBrackets`, `tooManyVariants`, `invalidVariant`, `duplicateVariant`, `invalidNegative`, `invalidIdentifier`, `invalidValue`, `unsafeValue`.

## Sécurité

Le parseur traite toute entrée comme non fiable.

- **Injection CSS** : une valeur arbitraire ne peut pas fermer sa déclaration ni en ouvrir une autre. `;`, `{`, `}`, `<`, `\`, `!`, les commentaires et les caractères de contrôle sont refusés hors chaîne entre guillemets, ainsi que les parenthèses ou guillemets non fermés.
- **Chargement de code** : `javascript:`, `vbscript:`, `expression()`, `@import`, `-moz-binding` et les URL `data:` autres qu'image ou police sont refusés, quelle que soit la casse.
- **Déni de service** : classe limitée à 512 caractères, valeur arbitraire à 512, 8 variantes au plus (`maxClassLength`, `maxVariants`). L'analyse et l'extraction sont linéaires ; l'extracteur Dart borne la profondeur des interpolations.

La validation est exposée par `JxCssValue.unsafeReason` (package `jx_core`) et appliquée une seconde fois par les règles de `jx_rules`, pour les tokens construits sans le parseur.

## Extraction depuis des sources

```dart
const extractor = JxClassExtractor();
extractor.extract('<div class="flex p:4">');            // HTML, Markdown…
extractor.extractFromDart("div(classes: 'flex p:4')");  // littéraux de chaîne Dart
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
