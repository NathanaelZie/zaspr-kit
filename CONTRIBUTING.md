# Contributing to ZASPR Kit

[Version française](CONTRIBUTING.fr.md)

Thank you for helping improve ZASPR Kit. Bug reports, documentation fixes, new utilities and new components are all welcome.

By taking part, you agree to follow the [code of conduct](CODE_OF_CONDUCT.md).

## Report a bug or suggest a feature

For a question about how to do something, use [Discussions](https://github.com/NathanaelZie/zaspr-kit/discussions/categories/q-a) instead: see [SUPPORT.md](SUPPORT.md).

Open an [issue](https://github.com/NathanaelZie/zaspr-kit/issues) and include:

- the `jx_cli` version, the Dart version (`dart --version`) and the Jaspr version;
- the classes, the `jx.yaml` or the component that shows the problem;
- what you expected and what happened instead.

Do not report security issues in a public issue: follow [SECURITY.md](SECURITY.md).

## Set up the project

Requirements: Dart SDK `>= 3.10.7`.

```bash
git clone https://github.com/NathanaelZie/zaspr-kit.git
cd zaspr-kit
dart pub get
```

All the code lives in `packages/jx_cli`.

## Before you open a pull request

Run the same checks as the CI, from `packages/jx_cli`:

```bash
dart format .
dart analyze --fatal-infos
dart test
```

- Add or update tests for every behavior change. A security fix comes with a regression test.
- Add a line to [packages/jx_cli/CHANGELOG.md](packages/jx_cli/CHANGELOG.md) under the next version.
- Keep one topic per pull request, and describe what changes for users.

## Conventions

- Files in `snake_case`, types in `PascalCase` with a `Jx` prefix for the public API, members in `camelCase`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `test:`, `chore:`, with an optional scope such as `fix(security):`.
- Public API comes with a `///` doc comment.
- Components stay accessible: keyboard support, ARIA roles and labels, visible focus.

## License

ZASPR Kit is released under the [MIT license](LICENSE). By submitting a contribution, you agree that it is released under the same license.
