/// build_runner entry point for JX CSS.
///
/// Add `jx_builder` to `dev_dependencies`: `jaspr serve` and `jaspr build`
/// then generate `web/jx.css` from the classes found in the project.
library;

import 'package:build/build.dart';

import 'src/jx_css_builder.dart';

export 'src/jx_css_builder.dart' show JxCssBuilder, JxPackageLister;

/// Factory referenced by `build.yaml`.
Builder jxCssBuilder(BuilderOptions options) => JxCssBuilder(options);
