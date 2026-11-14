# jx_cli

The command line of **JX CSS** (ZASPR Kit), the utility-first CSS framework written in Dart and built for Jaspr.

`jx` reads your Dart files, finds the utility classes written in your components and generates a stylesheet that contains only what you use. No Node.js, no JavaScript at runtime.

```dart
div(classes: 'flex ai:center gap:3 p:4 br:lg bg:white sh:md md:p:8', [
  p(classes: 'fw:semibold c:gray-900 hover:c:blue', [.text('Hello JX')]),
])
```

## Installation

In a project (recommended):

```bash
dart pub add dev:jx_cli
```

Or as a global command:

```bash
dart pub global activate jx_cli
```

## Getting started

```bash
dart run jx_cli:jx init       # creates jx.yaml
dart run jx_cli:jx build      # generates the stylesheet
dart run jx_cli:jx build -w   # rebuilds on every change
dart run jx_cli:jx build -m   # minified CSS for production
```

With the global install, replace `dart run jx_cli:jx` with `jx`.

Then link the generated stylesheet in your Jaspr `Document`:

```dart
Document(
  head: [link(rel: 'stylesheet', href: '/jx.css')],
  body: App(),
)
```

## Configuration

```yaml
# jx.yaml
content: [lib, web]        # files or folders to scan
extensions: [dart, html]
output: web/jx.css
minify: false
reset: true                # include the preflight reset
dark_mode: media           # or class: dark: applies under .dark

theme:
  extend:                  # merged with the default theme
    colors:
      brand: '#3B6CF0'
  override:                # replaces a whole category
    font-family:
      sans: 'Inter, system-ui, sans-serif'
```

## Commands

| Command | Role |
| :--- | :--- |
| `jx init [-f]` | Creates a commented `jx.yaml` (`-f` overwrites an existing one). |
| `jx build` | Extracts the classes and writes the CSS. |
| `-c, --config` | Configuration file. |
| `-i, --input` | Compiles an expression without scanning files. |
| `--content` | Files or folders to scan. |
| `-o, --output` | Generated CSS file. |
| `-m, --minify` | Minifies the output. |
| `--[no-]reset` | Includes the preflight or not. |
| `-w, --watch` | Rebuilds on every change. |

## Syntax at a glance

`[variants:]utility[:value][!]`

- `p:4`, `c:teal-700`: theme values.
- `w:[calc(100%_-_2rem)]`: arbitrary value (`_` = space).
- `-mt:2`: negative value.
- `md:hover:bg:blue`: breakpoint and state.
- `dark:bg:gray-900`: dark mode (`dark_mode: class` to drive it with a `.dark` class).
- `group-hover:c:blue`, `peer-checked:bg:teal`: state of a `group` parent or a `peer` sibling.
- `motion-reduce:anim:none`, `print:hidden`: user preferences and print.
- `c:red!`: `!important`.

## Some utilities

| Need | Classes |
| :--- | :--- |
| Layout | `flex`, `grid`, `cols:3`, `gap:4`, `ai:center`, `jc:between`, `pi:center`, `order:first` |
| Spacing, sizing | `p:4`, `mx:auto`, `w:full`, `mw:[40rem]`, `ar:video`, `basis:1/2` |
| Text | `fs:xl`, `fw:bold`, `c:gray-700`, `uppercase`, `truncate`, `clamp:3`, `tw:balance` |
| Backgrounds, borders | `bg:white`, `grad:to-r from:blue to:teal`, `bw:1`, `bs:dashed`, `br:lg`, `sh:md` |
| Effects | `o:50`, `blur:md`, `bri:110`, `bblur:lg` (frosted glass), `mix:multiply` |
| Motion | `tr:all`, `dur:300`, `tx:2`, `rot:45`, `sc:105`, `anim:spin`, `anim:fade-in` |
| Accessibility | `sr-only`, `focus-visible:ring:2`, `motion-reduce:anim:none` |

A misspelled class is reported with a suggestion, offered only when the fix compiles (`pd:4` → `p:4`).

Always write classes in full: a class built by interpolation cannot be detected.

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
