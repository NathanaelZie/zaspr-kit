import 'package:jx_cli/core.dart';
import 'package:jx_cli/theme.dart';

import 'rule_types.dart';

// ---------------------------------------------------------------------------
// Champs de formulaire
// ---------------------------------------------------------------------------

final RegExp _hexColor = RegExp(
  r'^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$',
);

String? _hexColorFallback(String value) =>
    _hexColor.hasMatch(value) ? value : null;

/// Propriété personnalisée portant la couleur de l'anneau de focus.
///
/// `ring:` la lit avec `currentColor` en repli ; `ringc:` la définit. Les deux
/// classes peuvent donc être combinées librement avec des variantes
/// (`focus-visible:ring:2 ringc:blue`).
const String jxRingColorProperty = '--jx-ring-color';

/// Utilitaires dédiés aux champs de formulaire :
///
/// - `app:none|auto` : `appearance` (avec préfixe WebKit) ;
/// - `accent:<couleur>` : `accent-color` (cases à cocher, radios, curseurs) ;
/// - `caret:<couleur>` : `caret-color` (curseur de saisie) ;
/// - `rsz:none|x|y|both` : `resize` ;
/// - `fsz:content|fixed` : `field-sizing` (champ qui grandit avec son contenu) ;
/// - `pe:none|auto` : `pointer-events` ;
/// - `us:none|text|all|auto` : `user-select` (avec préfixe WebKit) ;
/// - `ring:<largeur>` / `ringc:<couleur>` : anneau de focus en `box-shadow`.
const List<JxRuleContract> jxFormRules = [
  JxValueRule(
    'appearance',
    properties: {
      'app': ['-webkit-appearance', 'appearance'],
    },
    keywords: {'none': 'none', 'auto': 'auto'},
    allowArbitrary: false,
  ),
  JxValueRule(
    'accent-color',
    properties: {
      'accent': ['accent-color'],
    },
    themeCategory: JxThemeCategory.colors,
    keywords: {'auto': 'auto'},
    fallback: _hexColorFallback,
  ),
  JxValueRule(
    'caret-color',
    properties: {
      'caret': ['caret-color'],
    },
    themeCategory: JxThemeCategory.colors,
    keywords: {'auto': 'auto', 'transparent': 'transparent'},
    fallback: _hexColorFallback,
  ),
  JxValueRule(
    'resize',
    properties: {
      'rsz': ['resize'],
    },
    keywords: {
      'none': 'none',
      'x': 'horizontal',
      'y': 'vertical',
      'both': 'both',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'field-sizing',
    properties: {
      'fsz': ['field-sizing'],
    },
    keywords: {'content': 'content', 'fixed': 'fixed'},
    allowArbitrary: false,
  ),
  JxValueRule(
    'pointer-events',
    properties: {
      'pe': ['pointer-events'],
    },
    keywords: {'none': 'none', 'auto': 'auto'},
    allowArbitrary: false,
  ),
  JxValueRule(
    'user-select',
    properties: {
      'us': ['-webkit-user-select', 'user-select'],
    },
    keywords: {'none': 'none', 'text': 'text', 'all': 'all', 'auto': 'auto'},
    allowArbitrary: false,
  ),
  JxValueRule(
    'ring',
    properties: {
      'ring': ['box-shadow'],
    },
    keywords: {'0': '0px', '1': '1px', '2': '2px', '4': '4px', '8': '8px'},
    template: '0 0 0 {} var($jxRingColorProperty, currentColor)',
  ),
  JxValueRule(
    'ring-color',
    properties: {
      'ringc': [jxRingColorProperty],
    },
    themeCategory: JxThemeCategory.colors,
    fallback: _hexColorFallback,
  ),
];
