import 'package:jx_cli/core.dart';
import 'package:jx_cli/theme.dart';

import 'rule_types.dart';

// ---------------------------------------------------------------------------
// Résolveurs de valeurs
// ---------------------------------------------------------------------------

final RegExp _integer = RegExp(r'^[0-9]+$');

String? _hexColor(String value) =>
    RegExp(
      r'^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$',
    ).hasMatch(value)
    ? value
    : null;

String? _px(String value) => _integer.hasMatch(value) ? '${value}px' : null;

String? _deg(String value) => _integer.hasMatch(value) ? '${value}deg' : null;

String? _ms(String value) => _integer.hasMatch(value) ? '${value}ms' : null;

String? _int(String value) => _integer.hasMatch(value) ? value : null;

/// `50` -> `0.5`, `100` -> `1`, `125` -> `1.25`.
String? _ratio(String value) {
  if (!_integer.hasMatch(value)) return null;
  final n = int.parse(value);
  final whole = n ~/ 100;
  final rest = (n % 100)
      .toString()
      .padLeft(2, '0')
      .replaceAll(RegExp(r'0+$'), '');
  return rest.isEmpty ? '$whole' : '$whole.$rest';
}

/// `16/9` -> `16 / 9`.
String? _aspect(String value) {
  final match = RegExp(r'^([0-9]+)/([0-9]+)$').firstMatch(value);
  return match == null ? null : '${match.group(1)} / ${match.group(2)}';
}

const Map<String, String> _positions = {
  'center': 'center',
  'top': 'top',
  'bottom': 'bottom',
  'left': 'left',
  'right': 'right',
  'top-left': 'top left',
  'top-right': 'top right',
  'bottom-left': 'bottom left',
  'bottom-right': 'bottom right',
};

const Map<String, String> _alignContent = {
  'start': 'flex-start',
  'end': 'flex-end',
  'center': 'center',
  'between': 'space-between',
  'around': 'space-around',
  'evenly': 'space-evenly',
  'stretch': 'stretch',
  'normal': 'normal',
};

const Map<String, String> _alignItems = {
  'start': 'start',
  'end': 'end',
  'center': 'center',
  'stretch': 'stretch',
  'baseline': 'baseline',
};

// ---------------------------------------------------------------------------
// Transformations
// ---------------------------------------------------------------------------

/// `skx:` et `sky:` se combinent dans `transform`.
const _skew = 'skewX(var(--jx-skew-x, 0)) skewY(var(--jx-skew-y, 0))';

/// Rotation, inclinaison et origine : `rot:`, `skx:`, `sky:`, `origin:`.
const List<JxRuleContract> jxRotateSkewRules = [
  JxValueRule(
    'rotate',
    properties: {
      'rot': ['rotate'],
    },
    keywords: {'none': 'none'},
    allowNegative: true,
    fallback: _deg,
  ),
  JxValueRule(
    'skew',
    properties: {
      'skx': ['--jx-skew-x'],
      'sky': ['--jx-skew-y'],
    },
    allowNegative: true,
    fallback: _deg,
    extra: {'transform': _skew},
  ),
  JxValueRule(
    'transform-origin',
    properties: {
      'origin': ['transform-origin'],
    },
    keywords: _positions,
  ),
];

// ---------------------------------------------------------------------------
// Filtres
// ---------------------------------------------------------------------------

/// Chaîne des filtres composables : chaque utilitaire renseigne sa variable.
const _filter =
    'var(--jx-blur,) var(--jx-brightness,) var(--jx-contrast,) '
    'var(--jx-grayscale,) var(--jx-hue-rotate,) var(--jx-invert,) '
    'var(--jx-saturate,) var(--jx-sepia,) var(--jx-drop-shadow,)';

const _backdrop =
    'var(--jx-bd-blur,) var(--jx-bd-brightness,) var(--jx-bd-contrast,) '
    'var(--jx-bd-grayscale,) var(--jx-bd-saturate,)';

const Map<String, String> _blurScale = {
  'none': '0',
  'sm': '4px',
  'md': '8px',
  'lg': '16px',
  'xl': '24px',
  '2xl': '40px',
  '3xl': '64px',
};

JxValueRule _filterRule(
  String id,
  String identifier,
  String variable,
  String function, {
  Map<String, String> keywords = const {},
  JxValueFallback? fallback,
  bool allowNegative = false,
  bool backdrop = false,
}) => JxValueRule(
  id,
  properties: {
    identifier: [variable],
  },
  keywords: keywords,
  fallback: fallback,
  allowNegative: allowNegative,
  template: '$function({})',
  extra: backdrop
      ? const {
          '-webkit-backdrop-filter': _backdrop,
          'backdrop-filter': _backdrop,
        }
      : const {'filter': _filter},
);

/// Filtres composables : `blur:`, `bri:`, `con:`, `gs:`, `hue:`, `sat:`,
/// `dsh:`, `grayscale`, `invert`, `sepia`, `filter-none`, et leurs
/// équivalents d'arrière-plan `bblur:`, `bbri:`, `bcon:`, `bgray:`, `bsat:` (préfixe
/// `b`, via `backdrop-filter`).
final List<JxRuleContract> jxFilterRules = [
  _filterRule(
    'blur',
    'blur',
    '--jx-blur',
    'blur',
    keywords: _blurScale,
    fallback: _px,
  ),
  _filterRule(
    'brightness',
    'bri',
    '--jx-brightness',
    'brightness',
    fallback: _ratio,
  ),
  _filterRule('contrast', 'con', '--jx-contrast', 'contrast', fallback: _ratio),
  _filterRule(
    'grayscale',
    'gs',
    '--jx-grayscale',
    'grayscale',
    fallback: _ratio,
  ),
  _filterRule(
    'hue-rotate',
    'hue',
    '--jx-hue-rotate',
    'hue-rotate',
    fallback: _deg,
    allowNegative: true,
  ),
  _filterRule('saturate', 'sat', '--jx-saturate', 'saturate', fallback: _ratio),
  _filterRule(
    'drop-shadow',
    'dsh',
    '--jx-drop-shadow',
    'drop-shadow',
    keywords: {
      'sm': '0 1px 1px rgb(0 0 0 / 0.05)',
      'md': '0 3px 3px rgb(0 0 0 / 0.12)',
      'lg': '0 8px 10px rgb(0 0 0 / 0.15)',
      'xl': '0 16px 24px rgb(0 0 0 / 0.18)',
      'none': '0 0 #0000',
    },
  ),
  const JxStaticRule('filter-standalone', {
    'grayscale': {'--jx-grayscale': 'grayscale(1)', 'filter': _filter},
    'invert': {'--jx-invert': 'invert(1)', 'filter': _filter},
    'sepia': {'--jx-sepia': 'sepia(1)', 'filter': _filter},
    'filter-none': {'filter': 'none'},
  }),
  _filterRule(
    'backdrop-blur',
    'bblur',
    '--jx-bd-blur',
    'blur',
    keywords: _blurScale,
    fallback: _px,
    backdrop: true,
  ),
  _filterRule(
    'backdrop-brightness',
    'bbri',
    '--jx-bd-brightness',
    'brightness',
    fallback: _ratio,
    backdrop: true,
  ),
  _filterRule(
    'backdrop-contrast',
    'bcon',
    '--jx-bd-contrast',
    'contrast',
    fallback: _ratio,
    backdrop: true,
  ),
  _filterRule(
    'backdrop-grayscale',
    'bgray',
    '--jx-bd-grayscale',
    'grayscale',
    fallback: _ratio,
    backdrop: true,
  ),
  _filterRule(
    'backdrop-saturate',
    'bsat',
    '--jx-bd-saturate',
    'saturate',
    fallback: _ratio,
    backdrop: true,
  ),
];

// ---------------------------------------------------------------------------
// Dégradés
// ---------------------------------------------------------------------------

const _stops =
    'var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent)';

/// Dégradés : `grad:to-r` (ou un angle, `grad:45`, `grad:[135deg]`),
/// `grad-radial`, `grad-conic`, et les couleurs `from:`, `via:`, `to:`.
const List<JxRuleContract> jxGradientRules = [
  JxValueRule(
    'linear-gradient',
    properties: {
      'grad': ['background-image'],
    },
    keywords: {
      'to-t': 'to top',
      'to-tr': 'to top right',
      'to-r': 'to right',
      'to-br': 'to bottom right',
      'to-b': 'to bottom',
      'to-bl': 'to bottom left',
      'to-l': 'to left',
      'to-tl': 'to top left',
    },
    fallback: _deg,
    template: 'linear-gradient({}, $_stops)',
  ),
  JxStaticRule('gradient-standalone', {
    'grad-radial': {'background-image': 'radial-gradient($_stops)'},
    'grad-conic': {'background-image': 'conic-gradient($_stops)'},
  }),
  JxValueRule(
    'gradient-stops',
    properties: {
      'from': ['--jx-from'],
      'to': ['--jx-to'],
    },
    themeCategory: JxThemeCategory.colors,
    keywords: {'transparent': 'transparent', 'current': 'currentColor'},
    fallback: _hexColor,
  ),
  JxValueRule(
    'gradient-via',
    properties: {
      'via': ['--jx-via'],
    },
    themeCategory: JxThemeCategory.colors,
    keywords: {'transparent': 'transparent', 'current': 'currentColor'},
    fallback: _hexColor,
    template: '{},',
  ),
];

// ---------------------------------------------------------------------------
// Animations
// ---------------------------------------------------------------------------

/// Images clés des animations prédéfinies, ajoutées à la feuille seulement
/// si une classe `anim:` les utilise. Nom -> (étape -> déclarations).
const Map<String, Map<String, Map<String, String>>> jxKeyframes = {
  'jx-spin': {
    'to': {'rotate': '360deg'},
  },
  'jx-ping': {
    '75%, 100%': {'scale': '2', 'opacity': '0'},
  },
  'jx-pulse': {
    '50%': {'opacity': '0.5'},
  },
  'jx-bounce': {
    '0%, 100%': {
      'translate': '0 -25%',
      'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
    },
    '50%': {
      'translate': '0 0',
      'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
  'jx-fade-in': {
    'from': {'opacity': '0'},
  },
  'jx-fade-out': {
    'to': {'opacity': '0'},
  },
  'jx-slide-up': {
    'from': {'opacity': '0', 'translate': '0 1rem'},
  },
  'jx-slide-down': {
    'from': {'opacity': '0', 'translate': '0 -1rem'},
  },
  'jx-zoom-in': {
    'from': {'opacity': '0', 'scale': '0.95'},
  },
};

const _enter = 'cubic-bezier(0.16, 1, 0.3, 1)';

/// Animations : `anim:spin`, `anim:fade-in`… (ou `anim:[…]`), avec
/// `adur:`, `adelay:` et `delay:` (délai de transition).
const List<JxRuleContract> jxAnimationRules = [
  JxValueRule(
    'animation',
    properties: {
      'anim': ['animation'],
    },
    keywords: {
      'none': 'none',
      'spin': 'jx-spin 1s linear infinite',
      'ping': 'jx-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      'pulse': 'jx-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'bounce': 'jx-bounce 1s infinite',
      'fade-in': 'jx-fade-in 0.3s ease-out both',
      'fade-out': 'jx-fade-out 0.3s ease-in both',
      'slide-up': 'jx-slide-up 0.4s $_enter both',
      'slide-down': 'jx-slide-down 0.4s $_enter both',
      'zoom-in': 'jx-zoom-in 0.3s $_enter both',
    },
  ),
  JxValueRule(
    'animation-timing',
    properties: {
      'adur': ['animation-duration'],
      'adelay': ['animation-delay'],
    },
    fallback: _ms,
  ),
  JxValueRule(
    'transition-delay',
    properties: {
      'delay': ['transition-delay'],
    },
    fallback: _ms,
  ),
];

// ---------------------------------------------------------------------------
// Médias, fonds et bordures
// ---------------------------------------------------------------------------

/// Médias et fonds : `ar:`, `obf:`, `obp:`, `bgp:`, `bgr:`, `mix:`, `bs:`.
const List<JxRuleContract> jxMediaRules = [
  JxValueRule(
    'aspect-ratio',
    properties: {
      'ar': ['aspect-ratio'],
    },
    keywords: {
      'auto': 'auto',
      'square': '1 / 1',
      'video': '16 / 9',
      'photo': '4 / 3',
      'portrait': '3 / 4',
    },
    fallback: _aspect,
  ),
  JxValueRule(
    'object-fit',
    properties: {
      'obf': ['object-fit'],
    },
    keywords: {
      'contain': 'contain',
      'cover': 'cover',
      'fill': 'fill',
      'none': 'none',
      'scale-down': 'scale-down',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'object-position',
    properties: {
      'obp': ['object-position'],
    },
    keywords: _positions,
  ),
  JxValueRule(
    'background-position',
    properties: {
      'bgp': ['background-position'],
    },
    keywords: _positions,
  ),
  JxValueRule(
    'background-repeat',
    properties: {
      'bgr': ['background-repeat'],
    },
    keywords: {
      'repeat': 'repeat',
      'none': 'no-repeat',
      'x': 'repeat-x',
      'y': 'repeat-y',
      'round': 'round',
      'space': 'space',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'mix-blend-mode',
    properties: {
      'mix': ['mix-blend-mode'],
    },
    keywords: {
      'normal': 'normal',
      'multiply': 'multiply',
      'screen': 'screen',
      'overlay': 'overlay',
      'darken': 'darken',
      'lighten': 'lighten',
      'difference': 'difference',
      'luminosity': 'luminosity',
    },
    allowArbitrary: false,
  ),
  JxValueRule(
    'border-style',
    properties: {
      'bs': ['border-style'],
    },
    keywords: {
      'solid': 'solid',
      'dashed': 'dashed',
      'dotted': 'dotted',
      'double': 'double',
      'none': 'none',
      'hidden': 'hidden',
    },
    allowArbitrary: false,
  ),
];

// ---------------------------------------------------------------------------
// Alignement complémentaire
// ---------------------------------------------------------------------------

/// Alignement : `ac:`, `ji:`, `js:`, `pi:`, `pc:`, `order:`, `basis:`.
const List<JxRuleContract> jxAlignmentRules = [
  JxValueRule(
    'align-content',
    properties: {
      'ac': ['align-content'],
    },
    keywords: _alignContent,
    allowArbitrary: false,
  ),
  JxValueRule(
    'place-content',
    properties: {
      'pc': ['place-content'],
    },
    keywords: _alignContent,
    allowArbitrary: false,
  ),
  JxValueRule(
    'justify-items',
    properties: {
      'ji': ['justify-items'],
      'pi': ['place-items'],
    },
    keywords: _alignItems,
    allowArbitrary: false,
  ),
  JxValueRule(
    'justify-self',
    properties: {
      'js': ['justify-self'],
    },
    keywords: {..._alignItems, 'auto': 'auto'},
    allowArbitrary: false,
  ),
  JxValueRule(
    'order',
    properties: {
      'order': ['order'],
    },
    keywords: {'first': '-9999', 'last': '9999', 'none': '0'},
    allowNegative: true,
    fallback: _int,
  ),
  JxValueRule(
    'flex-basis',
    properties: {
      'basis': ['flex-basis'],
    },
    themeCategory: JxThemeCategory.spacing,
    keywords: {
      'auto': 'auto',
      'full': '100%',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '3/4': '75%',
    },
  ),
];

// ---------------------------------------------------------------------------
// Texte et accessibilité
// ---------------------------------------------------------------------------

/// Texte : `uppercase`, `italic`, `truncate`, `sr-only`, `tw:balance`,
/// `clamp:3`, `wb:`…
final List<JxRuleContract> jxTextRules = [
  const JxStaticRule('text-standalone', {
    'uppercase': {'text-transform': 'uppercase'},
    'lowercase': {'text-transform': 'lowercase'},
    'capitalize': {'text-transform': 'capitalize'},
    'normal-case': {'text-transform': 'none'},
    'italic': {'font-style': 'italic'},
    'not-italic': {'font-style': 'normal'},
    'truncate': {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    },
    'antialiased': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    'tabular-nums': {'font-variant-numeric': 'tabular-nums'},
    'sr-only': {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'padding': '0',
      'margin': '-1px',
      'overflow': 'hidden',
      'clip': 'rect(0, 0, 0, 0)',
      'white-space': 'nowrap',
      'border-width': '0',
    },
    'not-sr-only': {
      'position': 'static',
      'width': 'auto',
      'height': 'auto',
      'padding': '0',
      'margin': '0',
      'overflow': 'visible',
      'clip': 'auto',
      'white-space': 'normal',
    },
    'visible': {'visibility': 'visible'},
    'invisible': {'visibility': 'hidden'},
    'isolate': {'isolation': 'isolate'},
    'scroll-smooth': {'scroll-behavior': 'smooth'},
  }),
  const JxValueRule(
    'text-wrap',
    properties: {
      'tw': ['text-wrap'],
    },
    keywords: {
      'wrap': 'wrap',
      'nowrap': 'nowrap',
      'balance': 'balance',
      'pretty': 'pretty',
    },
    allowArbitrary: false,
  ),
  const JxValueRule(
    'word-break',
    properties: {
      'wb': ['overflow-wrap'],
    },
    keywords: {
      'normal': 'normal',
      'words': 'break-word',
      'anywhere': 'anywhere',
    },
    allowArbitrary: false,
  ),
  JxDynamicRule(
    'line-clamp',
    identifiers: const {'clamp'},
    build: (value, token, theme) {
      if (value == 'none') {
        return const {
          'overflow': 'visible',
          'display': 'block',
          '-webkit-box-orient': 'horizontal',
          '-webkit-line-clamp': 'unset',
        };
      }
      if (value == null || !_integer.hasMatch(value)) return null;
      return {
        'overflow': 'hidden',
        'display': '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': value,
      };
    },
  ),
];
