# JX CSS

> A utility-first CSS framework written entirely in Dart, built for [Jaspr](https://jaspr.site). No Node.js, no Tailwind binary, no JavaScript at runtime.

[![CI](https://github.com/NathanaelZie/zaspr-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/NathanaelZie/zaspr-kit/actions/workflows/ci.yml)
[![Dart](https://img.shields.io/badge/Dart-3.10+-0175C2?logo=dart)](https://dart.dev)
[![pub](https://img.shields.io/pub/v/jx_cli.svg)](https://pub.dev/packages/jx_cli)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Documentation:** https://nathanaelzie.github.io/zaspr-kit/ · [Version française](README.fr.md)

```dart
div(classes: 'flex ai:center gap:3 p:4 br:lg bg:white sh:md md:p:8', [
  p(classes: 'fw:semibold c:gray-900 hover:c:blue', [.text('Hello JX')]),
])
```

`jx` scans your Dart files, finds the utility classes used in your components and writes a stylesheet that contains only those.

## Why JX

- **Pure Dart.** The whole toolchain is a Dart package: `dart pub add dev:jx_cli` and you are done.
- **Made for Jaspr.** Only string literals in `.dart` files are scanned (interpolations included), so keywords like `static` or `final` never produce CSS.
- **Readable syntax.** `[variants:]utility[:value][!]`: `md:hover:bg:blue`, `p:4!`, `w:[calc(100%_-_2rem)]`.
- **Safe by default.** Arbitrary values are validated before reaching the stylesheet: no CSS injection, no `javascript:` URLs.
- **Helpful errors.** A misspelled class is reported with a fix that is known to compile (`pd:4` → `p:4`).
- **Runs anywhere Dart runs.** The engine works on the VM and in the browser, for runtime compilation.

## Quick start

```bash
dart pub add dev:jx_cli
dart run jx_cli:jx init       # creates jx.yaml
dart run jx_cli:jx build      # writes the stylesheet
dart run jx_cli:jx build -w   # rebuilds on every change
dart run jx_cli:jx build -m   # minified CSS for production
```

Or let `jaspr serve` and `jaspr build` generate it, with no extra command:

```bash
dart pub add dev:jx_builder
jaspr serve                   # web/jx.css is rebuilt on every save
```

Then link the stylesheet in your Jaspr `Document`:

```dart
Document(
  head: [link(rel: 'stylesheet', href: '/jx.css')],
  body: App(),
)
```

## Components

`jx_ui` ships accessible Jaspr components (`JxButton`, `JxCard`, `JxBadge`, `JxAlert`, `JxTextField`) styled with JX classes. Add `packages: [jx_ui]` to `jx.yaml` so their classes are compiled into your stylesheet.

```dart
JxCard(title: 'Newsletter', [
  const JxTextField(id: 'email', label: 'Email', type: InputType.email),
  JxButton([.text('Subscribe')], onClick: subscribe),
])
```

## Coming from Tailwind

`jx migrate` rewrites Tailwind classes in `classes: '…'` and `class="…"` attributes. Approximations (closest shade, unsupported utilities) are reported line by line.

```bash
dart run jx_cli:jx migrate -i "flex items-center px-4 hover:bg-sky-500"
# flex ai:center px:4 hover:bg:blue-500
dart run jx_cli:jx migrate            # lists the changes in the content folders
dart run jx_cli:jx migrate --write    # applies them
```

## Configuration

```yaml
# jx.yaml
content: [lib, web]        # files or folders to scan
extensions: [dart, html]
exclude: [generated]       # on top of build, .dart_tool, .git, node_modules
packages: [jx_ui]          # dependencies whose lib/ folder is scanned
output: web/jx.css
minify: false
reset: true                # include the preflight reset
dark_mode: media           # or class: dark: applies under .dark

theme:
  extend:                  # merged with the default theme
    colors:
      brand: '#3B6CF0'
    breakpoints:
      3xl: 1920px
  override:                # replaces a whole category
    font-family:
      sans: 'Inter, system-ui, sans-serif'
```

## Class syntax

`[variant1:variant2:]utility[:value][!]`

| Class | CSS |
| --- | --- |
| `flex` | `display: flex` |
| `c:red` | `color: #ef4444` (theme token) |
| `p:4` | `padding: 1rem` (spacing scale) |
| `hover:bg:blue` | `.hover\:bg\:blue:hover { background-color: … }` |
| `md:p:8` | `@media (min-width: 768px) { … padding: 2rem }` |
| `dark:bg:gray-900` | dark mode, from the system preference or a `.dark` class |
| `group-hover:c:blue` | state of a parent marked `group` (`peer-*` for siblings) |
| `c:[#ff0000]` | `color: #ff0000` (arbitrary value, `_` = space) |
| `m:-4` / `-m:4` | `margin: -1rem` |
| `p:4!` | `padding: 1rem !important` |

| Need | Classes |
| :--- | :--- |
| Layout | `flex`, `grid`, `cols:3`, `gap:4`, `ai:center`, `jc:between`, `pi:center`, `order:first` |
| Spacing, sizing | `p:4`, `mx:auto`, `w:full`, `mw:[40rem]`, `ar:video`, `basis:1/2` |
| Text | `fs:xl`, `fw:bold`, `c:gray-700`, `uppercase`, `truncate`, `clamp:3`, `tw:balance` |
| Backgrounds, borders | `bg:white`, `grad:to-r from:blue to:teal`, `bw:1`, `bs:dashed`, `br:lg`, `sh:md` |
| Effects | `o:50`, `blur:md`, `bri:110`, `bblur:lg` (frosted glass), `mix:multiply` |
| Motion | `tr:all`, `dur:300`, `tx:2`, `rot:45`, `sc:105`, `anim:spin`, `anim:fade-in` |
| Accessibility | `sr-only`, `focus-visible:ring:2`, `motion-reduce:anim:none` |

Always write classes in full: a class built by interpolation cannot be detected.

The full reference is on the [documentation site](https://nathanaelzie.github.io/zaspr-kit/docs/introduction).

## Packages

This repository is a [Melos](https://melos.invertase.dev) monorepo.

| Package | Role | Depends on |
| :--- | :--- | :--- |
| [`jx_cli`](https://pub.dev/packages/jx_cli) | Command line: `jx init`, `jx build`, `jx migrate`. **Start here.** | `jx_core`, `jx_engine` |
| [`jx_builder`](https://pub.dev/packages/jx_builder) | build_runner integration: CSS generated by `jaspr serve` / `jaspr build`. | `jx_cli` |
| [`jx_ui`](https://pub.dev/packages/jx_ui) | Accessible Jaspr components styled with JX (`packages: [jx_ui]`). | `jaspr` |
| [`jx_engine`](https://pub.dev/packages/jx_engine) | Compilation pipeline and Tailwind converter. | all below |
| [`jx_rules`](https://pub.dev/packages/jx_rules) | Utility catalog and rule registry. | `jx_core`, `jx_theme` |
| [`jx_theme`](https://pub.dev/packages/jx_theme) | Design tokens, default theme, `--jx-*` variables. | `jx_core` |
| [`jx_parser`](https://pub.dev/packages/jx_parser) | Class syntax parser, diagnostics and source extraction. | `jx_core` |
| [`jx_generator`](https://pub.dev/packages/jx_generator) | CSS serialization, media query grouping, preflight. | `jx_core`, `jx_theme` |
| [`jx_core`](https://pub.dev/packages/jx_core) | Shared models, contracts, exceptions and value validation. | — |

## Contributing

Requirements: Dart SDK `>= 3.10.7` and Melos (`dart pub global activate melos`).

```bash
melos bootstrap        # resolve and link the packages
melos run analyze      # static analysis
melos run test         # test suite
melos run format:fix   # format the code
```

Conventions: `snake_case` files, `PascalCase` types with a `Jx` prefix for public API, `camelCase` members.

Security issues: see [SECURITY.md](SECURITY.md).

## License

MIT.
