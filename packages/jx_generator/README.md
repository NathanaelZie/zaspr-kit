# jx_generator

The JX CSS generator: standard or minified serialization, media query grouping and the preflight reset.

> This package is part of **JX CSS** (ZASPR Kit), a utility-first CSS framework written in Dart.
> To style an application, install [`jx_cli`](https://pub.dev/packages/jx_cli) instead.

## Installation

```bash
dart pub add jx_generator
```

## Usage

```dart
import 'package:jx_core/jx_core.dart';
import 'package:jx_generator/jx_generator.dart';

void main() {
  const generator = JxGenerator();
  print(generator.generate([
    const JxCssRule(
      selector: '.c-primary',
      declarations: [JxCssDeclaration(property: 'color', value: '#2563eb')],
    ),
  ]));
}
```

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
