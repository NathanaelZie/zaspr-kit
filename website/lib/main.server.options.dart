// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/server.dart';
import 'package:zaspr_site/components/docs_layout.dart' as _docs_layout;
import 'package:zaspr_site/components/nav_bar.dart' as _nav_bar;
import 'package:zaspr_site/components/playground_section.dart'
    as _playground_section;
import 'package:zaspr_site/components/reference_section.dart'
    as _reference_section;
import 'package:zaspr_site/components/ui.dart' as _ui;

/// Default [ServerOptions] for use with your Jaspr project.
///
/// Use this to initialize Jaspr **before** calling [runApp].
///
/// Example:
/// ```dart
/// import 'main.server.options.dart';
///
/// void main() {
///   Jaspr.initializeApp(
///     options: defaultServerOptions,
///   );
///
///   runApp(...);
/// }
/// ```
ServerOptions get defaultServerOptions => ServerOptions(
  clientId: 'main.client.dart.js',
  clients: {
    _docs_layout.DocsMobileNav: ClientTarget<_docs_layout.DocsMobileNav>(
      'docs_layout',
      params: __docs_layoutDocsMobileNav,
    ),
    _nav_bar.NavBar: ClientTarget<_nav_bar.NavBar>(
      'nav_bar',
      params: __nav_barNavBar,
    ),
    _playground_section.Playground:
        ClientTarget<_playground_section.Playground>('playground_section'),
    _reference_section.ReferenceSearch:
        ClientTarget<_reference_section.ReferenceSearch>('reference_section'),
    _ui.CopyCommand: ClientTarget<_ui.CopyCommand>(
      'ui',
      params: __uiCopyCommand,
    ),
  },
);

Map<String, Object?> __docs_layoutDocsMobileNav(_docs_layout.DocsMobileNav c) =>
    {'current': c.current};
Map<String, Object?> __nav_barNavBar(_nav_bar.NavBar c) => {
  'current': c.current,
};
Map<String, Object?> __uiCopyCommand(_ui.CopyCommand c) => {
  'command': c.command,
};
