import 'package:jx_core/jx_core.dart';
import 'package:jx_theme/jx_theme.dart';

import 'rule_types.dart';

// ---------------------------------------------------------------------------
// Replis de valeurs
// ---------------------------------------------------------------------------

final RegExp _hexColor = RegExp(
  r'^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$',
);
final RegExp _number = RegExp(r'^\d+(\.\d+)?$');

String? _hexColorFallback(String value) =>
    _hexColor.hasMatch(value) ? value : null;

String? _fontWeightFallback(String value) {
  final weight = int.tryParse(value);
  if (weight == null || weight < 100 || weight > 900 || weight % 100 != 0) {
    return null;
  }
  return value;
}

final RegExp _image = RegExp(
  r'^(repeating-)?(linear|radial|conic)-gradient\(|^url\(|^image-set\(',
);

/// Les dégradés et images d'un `bg:` ciblent `background-image`.
List<String>? _backgroundImageSelector(String value) =>
    _image.hasMatch(value) ? const ['background-image'] : null;

String? _unitlessNumberFallback(String value) =>
    _number.hasMatch(value) ? value : null;

// ---------------------------------------------------------------------------
// Display
// ---------------------------------------------------------------------------

const Map<String, String> _displayValues = {
  'flex': 'flex',
  'block': 'block',
  'grid': 'grid',
  'inline': 'inline',
  'inline-block': 'inline-block',
  'inline-flex': 'inline-flex',
  'inline-grid': 'inline-grid',
  'contents': 'contents',
  'none': 'none',
  'hidden': 'none',
};

/// Display : `d:flex`, `d:none`… et standalone `flex`, `block`, `hidden`, `grid`…
final List<JxRuleContract> jxDisplayRules = [
  const JxValueRule(
    'display',
    properties: {
      'd': ['display'],
    },
    keywords: _displayValues,
    allowArbitrary: false,
  ),
  JxStaticRule('display-standalone', {
    for (final entry in _displayValues.entries)
      if (entry.key != 'none') entry.key: {'display': entry.value},
  }),
];

// ---------------------------------------------------------------------------
// Spacing
// ---------------------------------------------------------------------------

/// Spacing : `p:`, `px:`, `py:`, `pt:`, `pr:`, `pb:`, `pl:` et équivalents `m*:`.
/// Les marges acceptent `auto` et les valeurs négatives.
const List<JxRuleContract> jxSpacingRules = [
  JxValueRule(
    'padding',
    properties: {
      'p': ['padding'],
      'px': ['padding-left', 'padding-right'],
      'py': ['padding-top', 'padding-bottom'],
      'pt': ['padding-top'],
      'pr': ['padding-right'],
      'pb': ['padding-bottom'],
      'pl': ['padding-left'],
    },
    themeCategory: JxThemeCategory.spacing,
    disallowed: {'auto'},
  ),
  JxValueRule(
    'margin',
    properties: {
      'm': ['margin'],
      'mx': ['margin-left', 'margin-right'],
      'my': ['margin-top', 'margin-bottom'],
      'mt': ['margin-top'],
      'mr': ['margin-right'],
      'mb': ['margin-bottom'],
      'ml': ['margin-left'],
    },
    themeCategory: JxThemeCategory.spacing,
    allowNegative: true,
  ),
];

// ---------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------

/// Colors : `c:` (color) et `bg:` (background-color).
/// Accepte les tokens du thème, les couleurs hexadécimales et les valeurs arbitraires.
const List<JxRuleContract> jxColorRules = [
  JxValueRule(
    'color',
    properties: {
      'c': ['color'],
    },
    themeCategory: JxThemeCategory.colors,
    fallback: _hexColorFallback,
  ),
  JxValueRule(
    'background-color',
    properties: {
      'bg': ['background-color'],
    },
    themeCategory: JxThemeCategory.colors,
    fallback: _hexColorFallback,
    propertySelector: _backgroundImageSelector,
  ),
  JxValueRule(
    'background-size',
    properties: {
      'bgs': ['background-size'],
    },
    keywords: {'auto': 'auto', 'cover': 'cover', 'contain': 'contain'},
  ),
];

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

/// Typography : `fs:`, `fw:`, `lh:`, `ta:`.
const List<JxRuleContract> jxTypographyRules = [
  JxValueRule(
    'font-size',
    properties: {
      'fs': ['font-size'],
    },
    themeCategory: JxThemeCategory.fontSize,
  ),
  JxValueRule(
    'font-weight',
    properties: {
      'fw': ['font-weight'],
    },
    themeCategory: JxThemeCategory.fontWeight,
    fallback: _fontWeightFallback,
  ),
  JxValueRule(
    'line-height',
    properties: {
      'lh': ['line-height'],
    },
    themeCategory: JxThemeCategory.lineHeight,
    fallback: _unitlessNumberFallback,
  ),
  JxValueRule(
    'text-align',
    properties: {
      'ta': ['text-align'],
    },
    keywords: {
      'left': 'left',
      'center': 'center',
      'right': 'right',
      'justify': 'justify',
      'start': 'start',
      'end': 'end',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'font-family',
    properties: {
      'ff': ['font-family'],
    },
    themeCategory: JxThemeCategory.fontFamily,
  ),
  JxValueRule(
    'letter-spacing',
    properties: {
      'ls': ['letter-spacing'],
    },
    keywords: {
      'tighter': '-0.05em',
      'tight': '-0.025em',
      'normal': '0em',
      'wide': '0.025em',
      'wider': '0.05em',
    },
    allowNegative: true,
  ),
  JxValueRule(
    'text-decoration-line',
    properties: {
      'td': ['text-decoration-line'],
    },
    keywords: {
      'underline': 'underline',
      'line-through': 'line-through',
      'none': 'none',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'text-decoration-color',
    properties: {
      'tdc': ['text-decoration-color'],
    },
    themeCategory: JxThemeCategory.colors,
    fallback: _hexColorFallback,
  ),
  JxValueRule(
    'text-decoration-thickness',
    properties: {
      'tdt': ['text-decoration-thickness'],
    },
    keywords: {'1': '1px', '2': '2px', '4': '4px', 'auto': 'auto'},
  ),
  JxValueRule(
    'text-underline-offset',
    properties: {
      'tuo': ['text-underline-offset'],
    },
    keywords: {'1': '1px', '2': '2px', '4': '4px', '8': '8px', 'auto': 'auto'},
  ),
  JxValueRule(
    'white-space',
    properties: {
      'ws': ['white-space'],
    },
    keywords: {
      'normal': 'normal',
      'nowrap': 'nowrap',
      'pre': 'pre',
      'pre-wrap': 'pre-wrap',
      'pre-line': 'pre-line',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'font-stretch',
    properties: {
      'fst': ['font-stretch'],
    },
    keywords: {
      'condensed': '75%',
      'semi-condensed': '87.5%',
      'normal': '100%',
      'semi-expanded': '112.5%',
      'expanded': '125%',
    },
  ),
  // Contour (focus clavier visible, encadrés) : `ol:2` => `outline: 2px solid`.
  JxValueRule(
    'outline',
    properties: {
      'ol': ['outline'],
    },
    keywords: {
      'none': 'none',
      '1': '1px solid',
      '2': '2px solid',
      '4': '4px solid',
    },
  ),
  JxValueRule(
    'outline-color',
    properties: {
      'olc': ['outline-color'],
    },
    themeCategory: JxThemeCategory.colors,
    fallback: _hexColorFallback,
  ),
  JxValueRule(
    'outline-offset',
    properties: {
      'olo': ['outline-offset'],
    },
    keywords: {'0': '0px', '1': '1px', '2': '2px', '4': '4px', '8': '8px'},
    allowNegative: true,
  ),
];

// ---------------------------------------------------------------------------
// Sizing
// ---------------------------------------------------------------------------

const Map<String, String> _sizeKeywords = {
  'full': '100%',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '3/4': '75%',
};

/// Sizing : `w:`, `h:`, `mw:`, `mh:`.
const List<JxRuleContract> jxSizingRules = [
  JxValueRule(
    'width',
    properties: {
      'w': ['width'],
    },
    themeCategory: JxThemeCategory.spacing,
    keywords: {..._sizeKeywords, 'screen': '100vw'},
  ),
  JxValueRule(
    'height',
    properties: {
      'h': ['height'],
    },
    themeCategory: JxThemeCategory.spacing,
    keywords: {..._sizeKeywords, 'screen': '100vh'},
  ),
  JxValueRule(
    'max-width',
    properties: {
      'mw': ['max-width'],
    },
    themeCategory: JxThemeCategory.spacing,
    keywords: {..._sizeKeywords, 'none': 'none', 'screen': '100vw'},
    disallowed: {'auto'},
  ),
  JxValueRule(
    'max-height',
    properties: {
      'mh': ['max-height'],
    },
    themeCategory: JxThemeCategory.spacing,
    keywords: {..._sizeKeywords, 'none': 'none', 'screen': '100vh'},
    disallowed: {'auto'},
  ),
];

// ---------------------------------------------------------------------------
// Borders
// ---------------------------------------------------------------------------

/// Borders : `bw:` (border-width) et `br:` (border-radius).
const List<JxRuleContract> jxBorderRules = [
  JxValueRule(
    'border-width',
    properties: {
      'bw': ['border-width'],
      'bwt': ['border-top-width'],
      'bwr': ['border-right-width'],
      'bwb': ['border-bottom-width'],
      'bwl': ['border-left-width'],
      'bwx': ['border-left-width', 'border-right-width'],
      'bwy': ['border-top-width', 'border-bottom-width'],
    },
    themeCategory: JxThemeCategory.borderWidth,
  ),
  JxValueRule(
    'border-color',
    properties: {
      'bc': ['border-color'],
    },
    themeCategory: JxThemeCategory.colors,
    fallback: _hexColorFallback,
  ),
  JxValueRule(
    'border-radius',
    properties: {
      'br': ['border-radius'],
    },
    themeCategory: JxThemeCategory.borderRadius,
  ),
];

// ---------------------------------------------------------------------------
// Flexbox
// ---------------------------------------------------------------------------

/// Flexbox : `ai:`, `jc:`, `fd:`, `gap:`.
const List<JxRuleContract> jxFlexboxRules = [
  JxValueRule(
    'align-items',
    properties: {
      'ai': ['align-items'],
    },
    keywords: {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'baseline': 'baseline',
      'stretch': 'stretch',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'justify-content',
    properties: {
      'jc': ['justify-content'],
    },
    keywords: {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'between': 'space-between',
      'around': 'space-around',
      'evenly': 'space-evenly',
      'stretch': 'stretch',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'flex-direction',
    properties: {
      'fd': ['flex-direction'],
    },
    keywords: {
      'row': 'row',
      'row-reverse': 'row-reverse',
      'col': 'column',
      'col-reverse': 'column-reverse',
      'column': 'column',
      'column-reverse': 'column-reverse',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'gap',
    properties: {
      'gap': ['gap'],
    },
    themeCategory: JxThemeCategory.spacing,
    disallowed: {'auto'},
  ),
];

// ---------------------------------------------------------------------------
// Position
// ---------------------------------------------------------------------------

const Map<String, String> _positionValues = {
  'static': 'static',
  'relative': 'relative',
  'absolute': 'absolute',
  'fixed': 'fixed',
  'sticky': 'sticky',
};

/// Position : `pos:` et standalone `relative`, `absolute`, `fixed`, `sticky`, `static`.
final List<JxRuleContract> jxPositionRules = [
  const JxValueRule(
    'position',
    properties: {
      'pos': ['position'],
    },
    keywords: _positionValues,
    allowArbitrary: false,
  ),
  JxStaticRule('position-standalone', {
    for (final entry in _positionValues.entries)
      entry.key: {'position': entry.value},
  }),
];

// ---------------------------------------------------------------------------
// Opacity
// ---------------------------------------------------------------------------

/// Opacity : `o:`.
const List<JxRuleContract> jxOpacityRules = [
  JxValueRule(
    'opacity',
    properties: {
      'o': ['opacity'],
    },
    themeCategory: JxThemeCategory.opacity,
  ),
];
