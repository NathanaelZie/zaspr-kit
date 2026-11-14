# jx_builder example

```yaml
# pubspec.yaml
dev_dependencies:
  build_runner: ^2.10.0
  jaspr_builder: ^0.22.4
  jx_builder: ^0.3.0
```

```dart
// lib/app.dart
div(classes: 'flex ai:center gap:3 p:4 br:lg bg:white sh:md', [
  p(classes: 'fw:semibold c:gray-900', [.text('Hello JX')]),
])
```

```bash
jaspr serve   # web/jx.css is generated and rebuilt on every save
```
