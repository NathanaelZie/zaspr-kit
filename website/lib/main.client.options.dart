// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/client.dart';

import 'package:zaspr_site/components/docs_layout.dart'
    deferred as _docs_layout;
import 'package:zaspr_site/components/nav_bar.dart' deferred as _nav_bar;
import 'package:zaspr_site/components/playground_section.dart'
    deferred as _playground_section;
import 'package:zaspr_site/components/reference_section.dart'
    deferred as _reference_section;
import 'package:zaspr_site/components/ui.dart' deferred as _ui;

/// Default [ClientOptions] for use with your Jaspr project.
///
/// Use this to initialize Jaspr **before** calling [runApp].
///
/// Example:
/// ```dart
/// import 'main.client.options.dart';
///
/// void main() {
///   Jaspr.initializeApp(
///     options: defaultClientOptions,
///   );
///
///   runApp(...);
/// }
/// ```
ClientOptions get defaultClientOptions => ClientOptions(
  clients: {
    'docs_layout': ClientLoader(
      (p) => _docs_layout.DocsMobileNav(current: p['current'] as String),
      loader: _docs_layout.loadLibrary,
    ),
    'nav_bar': ClientLoader(
      (p) => _nav_bar.NavBar(current: p['current'] as String),
      loader: _nav_bar.loadLibrary,
    ),
    'playground_section': ClientLoader(
      (p) => _playground_section.Playground(),
      loader: _playground_section.loadLibrary,
    ),
    'reference_section': ClientLoader(
      (p) => _reference_section.ReferenceSearch(),
      loader: _reference_section.loadLibrary,
    ),
    'ui': ClientLoader(
      (p) => _ui.CopyCommand(p['command'] as String),
      loader: _ui.loadLibrary,
    ),
  },
);
