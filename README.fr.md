# JX CSS

> Un framework CSS utility-first écrit entièrement en Dart, conçu pour [Jaspr](https://jaspr.site). Pas de Node.js, pas de binaire Tailwind, pas de JavaScript à l'exécution.

[![CI](https://github.com/NathanaelZie/zaspr-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/NathanaelZie/zaspr-kit/actions/workflows/ci.yml)
[![pub](https://img.shields.io/pub/v/jx_cli.svg)](https://pub.dev/packages/jx_cli)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Documentation :** https://nathanaelzie.github.io/zaspr-kit/ · [English version](README.md)

```dart
div(classes: 'flex ai:center gap:3 p:4 br:lg bg:white sh:md md:p:8', [
  p(classes: 'fw:semibold c:gray-900 hover:c:blue', [.text('Bonjour JX')]),
])
```

`jx` parcourt vos fichiers Dart, trouve les classes utilitaires de vos composants et écrit une feuille de style qui ne contient que celles-ci.

## Un seul package

`dart pub add jx_cli` installe tout : la commande `jx`, le moteur, le builder build_runner et les composants. Chaque partie a son import :

| Import | Rôle |
| :--- | :--- |
| commande `jx` | `jx init`, `jx build`, `jx migrate`. |
| `package:jx_cli/ui.dart` | Composants Jaspr accessibles stylés avec JX. |
| `package:jx_cli/builder.dart` | Builder build_runner : CSS généré par `jaspr serve` / `jaspr build`. |
| `package:jx_cli/engine.dart` | Pipeline de compilation et convertisseur Tailwind, sur la VM ou dans le navigateur. |
| `package:jx_cli/rules.dart`, `theme.dart`, `parser.dart`, `generator.dart`, `core.dart` | Règles, thème, parseur, générateur et modèles partagés. |

Les anciens packages `jx_ui`, `jx_builder`, `jx_engine`, `jx_rules`, `jx_theme`, `jx_parser`, `jx_generator` et `jx_core` sont remplacés par `jx_cli` ; leurs versions publiées continuent de fonctionner.

## Démarrage rapide

```bash
dart pub add jx_cli:^0.0.3
dart run jx_cli:jx init       # crée jx.yaml
dart run jx_cli:jx build      # écrit la feuille de style
dart run jx_cli:jx build -w   # reconstruit à chaque modification
dart run jx_cli:jx build -m   # CSS minifié pour la production
```

Ou laissez `jaspr serve` et `jaspr build` la générer, en activant le builder dans `build.yaml` :

```yaml
targets:
  $default:
    builders:
      jx_cli:jx_css:
        enabled: true
```

Supprimez d'abord un `web/jx.css` écrit par `jx build` : build_runner n'écrase pas les fichiers sources.

Puis liez la feuille de style dans votre `Document` Jaspr :

```dart
Document(
  head: [link(rel: 'stylesheet', href: '/jx.css')],
  body: App(),
)
```

## Composants

```dart
import 'package:jx_cli/ui.dart';

JxCard(title: 'Newsletter', [
  const JxTextField(id: 'email', label: 'Email', type: InputType.email),
  JxButton([.text("S'abonner")], onClick: subscribe),
])
```

Boutons, cartes, champs, interrupteurs, modales, tableaux de données, pagination, alertes, avatars, infobulles… Ajoutez `packages: [jx_cli/ui]` dans `jx.yaml` pour que leurs classes soient compilées.

## Venir de Tailwind

```bash
dart run jx_cli:jx migrate -i "flex items-center px-4 hover:bg-sky-500"
# flex ai:center px:4 hover:bg:blue-500
dart run jx_cli:jx migrate --write
```

## Syntaxe

`[variantes:]utilitaire[:valeur][!]` : `md:hover:bg:blue`, `p:4!`, `w:[calc(100%_-_2rem)]`, `dark:bg:gray-900`, `group-hover:c:blue`.

La référence complète est sur le [site de documentation](https://nathanaelzie.github.io/zaspr-kit/docs/introduction).

## Contribuer

```bash
dart pub get
cd packages/jx_cli
dart analyze --fatal-infos
dart test
```

## Licence

MIT.
