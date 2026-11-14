# jx_parser

The JX CSS class syntax parser: `[variants:]utility[:value][!]`, with bracketed arbitrary values, negative values and `!important`.

> This package is part of **JX CSS** (ZASPR Kit), a utility-first CSS framework written in Dart.
> To style an application, install [`jx_cli`](https://pub.dev/packages/jx_cli) instead.

## Installation

```bash
dart pub add jx_parser
```

## Usage

```dart
import 'package:jx_parser/jx_parser.dart';

void main() {
  const parser = JxParser();

  // Tokens of the valid classes.
  for (final token in parser.parse('md:hover:bg:blue! w:[calc(100%_-_2rem)] -mt:2')) {
    print('${token.variants} ${token.identifier} ${token.value}');
  }

  // Why a class was rejected.
  final outcome = parser.analyze('c:[red;}body{display:none]');
  print(outcome.isValid);          // false
  print(outcome.failure!.code);    // JxParseErrorCode.unsafeValue
}
```

## Syntax

`[variants:]utility[:value][!]`

| Part | Examples | Rule |
| :--- | :--- | :--- |
| Variants | `md:`, `hover:`, `dark:`, `group-hover:` | at most 8, no repetition |
| Utility | `p`, `bg`, `inline-flex` | letters, digits, single dashes |
| Plain value | `4`, `1.5`, `1/2`, `teal-700`, `#fff`, `50%` | words separated by `.`, `-` or `/` |
| Arbitrary value | `[calc(100%_-_2rem)]`, `[url(/img/a_b.png)]` | in brackets, see below |
| Negative | `-mt:2`, `mt:-2` | a single negation, with a value |
| Important | `p:4!`, `!p:4` | `!` at the end or the start of the class |

In an arbitrary value, `_` is a space, `\_` a literal `_`, and the `_` inside `url(…)` are kept.

## Diagnostics

| Method | Returns |
| :--- | :--- |
| `parseToken(raw)` | the token, or `null` |
| `parse(classes)` | the valid tokens |
| `analyze(raw)` | `JxParseOutcome`: `token` or `failure` (code + message) |
| `analyzeAll(classes)` | `JxParseReport`: `tokens`, `failures`, `securityFailures` |

`JxParseErrorCode` values: `empty`, `tooLong`, `invalidCharacter`, `emptySegment`, `unbalancedBrackets`, `tooManyVariants`, `invalidVariant`, `duplicateVariant`, `invalidNegative`, `invalidIdentifier`, `invalidValue`, `unsafeValue`.

## Security

The parser treats every input as untrusted.

- **CSS injection**: an arbitrary value cannot close its declaration or open another one. `;`, `{`, `}`, `<`, `\`, `!`, comments and control characters are rejected outside quoted strings, as are unclosed parentheses or quotes.
- **Code loading**: `javascript:`, `vbscript:`, `expression()`, `@import`, `-moz-binding` and `data:` URLs other than images or fonts are rejected, regardless of case.
- **Denial of service**: a class is limited to 512 characters, an arbitrary value to 512, and 8 variants at most (`maxClassLength`, `maxVariants`). Parsing and extraction are linear; the Dart extractor bounds interpolation depth.

Validation is exposed by `JxCssValue.unsafeReason` (package `jx_core`) and applied a second time by the rules in `jx_rules`, for tokens built without the parser.

## Extracting classes from sources

```dart
const extractor = JxClassExtractor();
extractor.extract('<div class="flex p:4">');            // HTML, Markdown…
extractor.extractFromDart("div(classes: 'flex p:4')");  // Dart string literals
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
