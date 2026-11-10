import 'package:jx_core/jx_core.dart';
import 'package:jx_theme/jx_theme.dart';

import 'rule_types.dart';

// ---------------------------------------------------------------------------
// Aides
// ---------------------------------------------------------------------------

/// `n -> repeat(n, minmax(0, 1fr))` pour n = 1..max, plus `none`.
Map<String, String> _tracks(int max) => {
  for (var i = 1; i <= max; i++) '$i': 'repeat($i, minmax(0, 1fr))',
  'none': 'none',
};

/// Mots-clés de position partagés par `top:`, `left:`, `inset:`…
const Map<String, String> _insetKeywords = {
  'full': '100%',
  '1/2': '50%',
  'auto': 'auto',
};

String? _durationFallback(String value) {
  final ms = int.tryParse(value);
  return ms == null ? null : '${ms}ms';
}

const _easing = 'cubic-bezier(0.4, 0, 0.2, 1)';

Map<String, String> _transition(String property) => {
  'transition-property': property,
  'transition-timing-function': _easing,
  'transition-duration': '150ms',
};

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

/// Grid : `cols:`, `rows:`, `span:`, `rspan:`, `gx:`, `gy:`
/// (à combiner avec `grid` ou `d:grid`).
final List<JxRuleContract> jxGridRules = [
  JxValueRule(
    'grid-template-columns',
    properties: {
      'cols': ['grid-template-columns'],
    },
    keywords: _tracks(12),
  ),
  JxValueRule(
    'grid-template-rows',
    properties: {
      'rows': ['grid-template-rows'],
    },
    keywords: _tracks(6),
  ),
  JxValueRule(
    'grid-column',
    properties: {
      'span': ['grid-column'],
    },
    keywords: {
      for (var i = 1; i <= 12; i++) '$i': 'span $i / span $i',
      'full': '1 / -1',
    },
  ),
  JxValueRule(
    'grid-row',
    properties: {
      'rspan': ['grid-row'],
    },
    keywords: {
      for (var i = 1; i <= 6; i++) '$i': 'span $i / span $i',
      'full': '1 / -1',
    },
  ),
  const JxValueRule(
    'gap-axis',
    properties: {
      'gx': ['column-gap'],
      'gy': ['row-gap'],
    },
    themeCategory: JxThemeCategory.spacing,
    disallowed: {'auto'},
  ),
];

// ---------------------------------------------------------------------------
// Flex (compléments)
// ---------------------------------------------------------------------------

const Map<String, String> _wrapValues = {
  'wrap': 'wrap',
  'nowrap': 'nowrap',
  'wrap-reverse': 'wrap-reverse',
};

/// Flex : `wrap`/`nowrap` (standalone), `flw:`, `fl:`, `grow:`, `shrink:`, `as:`.
final List<JxRuleContract> jxFlexRules = [
  JxStaticRule('flex-wrap-standalone', {
    for (final entry in _wrapValues.entries)
      entry.key: {'flex-wrap': entry.value},
  }),
  const JxValueRule(
    'flex-wrap',
    properties: {
      'flw': ['flex-wrap'],
    },
    keywords: {'wrap': 'wrap', 'nowrap': 'nowrap', 'reverse': 'wrap-reverse'},
    allowArbitrary: false,
  ),
  const JxValueRule(
    'flex',
    properties: {
      'fl': ['flex'],
    },
    keywords: {
      '1': '1 1 0%',
      'auto': '1 1 auto',
      'initial': '0 1 auto',
      'none': 'none',
    },
  ),
  const JxValueRule(
    'flex-grow-shrink',
    properties: {
      'grow': ['flex-grow'],
      'shrink': ['flex-shrink'],
    },
    keywords: {'0': '0', '1': '1'},
  ),
  const JxValueRule(
    'align-self',
    properties: {
      'as': ['align-self'],
    },
    keywords: {
      'auto': 'auto',
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'stretch': 'stretch',
      'baseline': 'baseline',
    },
    allowArbitrary: false,
  ),
];

// ---------------------------------------------------------------------------
// Effets : ombres, transitions, curseur
// ---------------------------------------------------------------------------

/// Effets : `sh:`, `tr:`, `dur:`, `ease:`, `cur:`.
final List<JxRuleContract> jxEffectRules = [
  const JxValueRule(
    'box-shadow',
    properties: {
      'sh': ['box-shadow'],
    },
    themeCategory: JxThemeCategory.shadow,
  ),
  JxKeywordRule(
    'transition',
    identifiers: const {'tr'},
    values: {
      'none': const {'transition-property': 'none'},
      'all': _transition('all'),
      'colors': _transition(
        'color, background-color, border-color, text-decoration-color, fill, stroke',
      ),
      'opacity': _transition('opacity'),
      'shadow': _transition('box-shadow'),
      'transform': _transition('transform, translate, scale, rotate'),
      'default': _transition(
        'color, background-color, border-color, opacity, box-shadow, transform, translate, scale',
      ),
    },
  ),
  const JxValueRule(
    'transition-duration',
    properties: {
      'dur': ['transition-duration'],
    },
    fallback: _durationFallback,
  ),
  const JxValueRule(
    'transition-timing-function',
    properties: {
      'ease': ['transition-timing-function'],
    },
    keywords: {
      'linear': 'linear',
      'in': 'cubic-bezier(0.4, 0, 1, 1)',
      'out': 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': _easing,
    },
  ),
  const JxValueRule(
    'cursor',
    properties: {
      'cur': ['cursor'],
    },
    keywords: {
      'auto': 'auto',
      'default': 'default',
      'pointer': 'pointer',
      'text': 'text',
      'move': 'move',
      'wait': 'wait',
      'grab': 'grab',
      'not-allowed': 'not-allowed',
    },
    allowArbitrary: false,
  ),
];

// ---------------------------------------------------------------------------
// Transformations
// ---------------------------------------------------------------------------

/// Transformations : `tx:`, `ty:` (propriété `translate`) et `sc:` (`scale`).
///
/// Les propriétés individuelles `translate` / `scale` se combinent sans
/// s'écraser (`hover:-ty:1 hover:sc:105`).
const List<JxRuleContract> jxTransformRules = [
  JxValueRule(
    'translate-x',
    properties: {
      'tx': ['translate'],
    },
    themeCategory: JxThemeCategory.spacing,
    keywords: _insetKeywords,
    disallowed: {'auto'},
    allowNegative: true,
    template: '{} 0',
  ),
  JxValueRule(
    'translate-y',
    properties: {
      'ty': ['translate'],
    },
    themeCategory: JxThemeCategory.spacing,
    keywords: _insetKeywords,
    disallowed: {'auto'},
    allowNegative: true,
    template: '0 {}',
  ),
  JxValueRule(
    'scale',
    properties: {
      'sc': ['scale'],
    },
    keywords: {
      '0': '0',
      '50': '0.5',
      '75': '0.75',
      '90': '0.9',
      '95': '0.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
    },
  ),
];

// ---------------------------------------------------------------------------
// Positionnement : z-index, inset, overflow
// ---------------------------------------------------------------------------

/// Positionnement : `z:`, `top:`, `right:`, `bottom:`, `left:`, `inset:`,
/// `ov:`, `ovx:`, `ovy:`.
const List<JxRuleContract> jxLayoutRules = [
  JxValueRule(
    'z-index',
    properties: {
      'z': ['z-index'],
    },
    keywords: {
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      'auto': 'auto',
    },
    allowNegative: true,
  ),
  JxValueRule(
    'inset',
    properties: {
      'top': ['top'],
      'right': ['right'],
      'bottom': ['bottom'],
      'left': ['left'],
      'inset': ['inset'],
    },
    themeCategory: JxThemeCategory.spacing,
    keywords: _insetKeywords,
    allowNegative: true,
  ),
  JxValueRule(
    'scroll-margin-top',
    properties: {
      'smt': ['scroll-margin-top'],
    },
    themeCategory: JxThemeCategory.spacing,
    disallowed: {'auto'},
  ),
  JxValueRule(
    'overflow',
    properties: {
      'ov': ['overflow'],
      'ovx': ['overflow-x'],
      'ovy': ['overflow-y'],
    },
    keywords: {
      'auto': 'auto',
      'hidden': 'hidden',
      'clip': 'clip',
      'visible': 'visible',
      'scroll': 'scroll',
    },
    allowArbitrary: false,
  ),
];
