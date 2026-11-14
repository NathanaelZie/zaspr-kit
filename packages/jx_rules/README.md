# jx_rules

The JX CSS utility catalog and the registry that indexes it. Each rule describes the classes it accepts and the declarations it produces.

> This package is part of **JX CSS** (ZASPR Kit), a utility-first CSS framework written in Dart.
> To style an application, install [`jx_cli`](https://pub.dev/packages/jx_cli) instead.

## Installation

```bash
dart pub add jx_rules
```

## Usage

```dart
import 'package:jx_rules/jx_rules.dart';

void main() {
  final registry = JxRuleRegistry()..registerPreset(const JxDefaultPreset());
  print('Available rules: ${registry.count}');
}
```

Four rule types let you define your own utilities: `JxStaticRule` (classes without a value), `JxValueRule` (theme value, keyword or arbitrary value), `JxKeywordRule` (keywords with several declarations) and `JxDynamicRule` (computed declarations).

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
