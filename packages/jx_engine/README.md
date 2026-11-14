# jx_engine

The JX CSS compilation engine: it turns a string of utility classes into CSS, sorted mobile-first. It runs on the Dart VM and in the browser.

> This package is part of **JX CSS** (ZASPR Kit), a utility-first CSS framework written in Dart.
> To style an application, install [`jx_cli`](https://pub.dev/packages/jx_cli) instead.

## Installation

```bash
dart pub add jx_engine
```

## Usage

```dart
import 'package:jx_engine/jx_engine.dart';

void main() {
  final result = JxEngine().compile('p:4 md:p:8 hover:bg:blue-700 c:red!');
  print(result.css);       // generated stylesheet
  print(result.ruleCount); // number of rules
  print(result.warnings);  // rejected classes, with suggestions
}
```

Supported variants are exposed by `JxVariantResolver`: `defaultBreakpoints`, `defaultPseudoClasses`, `defaultPseudoElements` and `defaultMediaVariants` (`dark`, `motion-safe`, `motion-reduce`, `print`…), plus the relational `group-*` and `peer-*` variants.

## The JX CSS family

| Package | Role |
| :--- | :--- |
| [`jx_cli`](https://pub.dev/packages/jx_cli) | Command line: `jx init`, `jx build`. **Entry point for most projects.** |
| [`jx_engine`](https://pub.dev/packages/jx_engine) | Compilation engine, usable as a library. |
| [`jx_rules`](https://pub.dev/packages/jx_rules) | Utility catalog and rule registry. |
| [`jx_theme`](https://pub.dev/packages/jx_theme) | Design tokens and default theme. |
| [`jx_parser`](https://pub.dev/packages/jx_parser) | Class syntax parser. |
| [`jx_generator`](https://pub.dev/packages/jx_generator) | CSS serialization and preflight. |
| [`jx_core`](https://pub.dev/packages/jx_core) | Shared models, contracts and exceptions. |

Documentation: https://nathanaelzie.github.io/zaspr-kit/

## License

MIT.
