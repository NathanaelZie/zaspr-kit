/// build_runner entry point for JX CSS.
///
/// Enable it in the project's `build.yaml`; `jaspr serve` and `jaspr build`
/// then generate `web/jx.css` from the classes found in the project:
///
/// ```yaml
/// targets:
///   $default:
///     builders:
///       jx_cli:jx_css:
///         enabled: true
/// ```
///
/// It is off by default so projects that write `web/jx.css` with `jx build`
/// keep working: build_runner refuses to overwrite a source file.
library;

import 'package:build/build.dart';

import 'src/builder/jx_css_builder.dart';

export 'src/builder/jx_css_builder.dart' show JxCssBuilder, JxPackageLister;

/// Factory referenced by `build.yaml`.
Builder jxCssBuilder(BuilderOptions options) => JxCssBuilder(options);
