# jx_core

The models, contracts and exceptions shared by every JX CSS package. This package has no dependencies.

> This package is part of **JX CSS** (ZASPR Kit), a utility-first CSS framework written in Dart.
> To style an application, install [`jx_cli`](https://pub.dev/packages/jx_cli) instead.

## Installation

```bash
dart pub add jx_core
```

## Usage

```dart
import 'package:jx_core/jx_core.dart';

void main() {
  const rule = JxCssRule(
    selector: '.c-primary',
    declarations: [JxCssDeclaration(property: 'color', value: '#2563eb')],
  );
  print(rule);

  print(JxCssValue.isSafe('calc(100% - 2rem)'));    // true
  print(JxCssValue.unsafeReason('red;}body{x:y'));  // why it is rejected
}
```

Contracts: `JxParserContract`, `JxRuleContract`, `JxThemeContract`, `JxGeneratorContract`, `JxEngineContract`. Exceptions: `JxParseException`, `JxRuleException`, `JxThemeException`, `JxConfigException`. Value validation: `JxCssValue`.

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
