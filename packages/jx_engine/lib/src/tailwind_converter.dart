import 'engine.dart';

/// Result of converting one Tailwind class.
class JxTailwindConversion {
  const JxTailwindConversion(this.source, this.result, [this.notes = const []]);

  /// The Tailwind class, as written.
  final String source;

  /// The JX class(es), separated by spaces, or `null` when there is no
  /// equivalent.
  final String? result;

  /// Approximations made, or the reason the class was not converted.
  final List<String> notes;

  /// `true` when the class was converted.
  bool get converted => result != null;

  /// `true` when the class was converted without approximation.
  bool get exact => result != null && notes.isEmpty;

  @override
  String toString() => result == null
      ? '$source -> (not converted: ${notes.join('; ')})'
      : '$source -> $result${notes.isEmpty ? '' : ' (${notes.join('; ')})'}';
}

/// Result of converting a string of Tailwind classes.
class JxTailwindReport {
  const JxTailwindReport(this.items);

  final List<JxTailwindConversion> items;

  /// The converted classes. Classes without an equivalent are kept as is so
  /// nothing is lost.
  String get output =>
      [for (final item in items) item.result ?? item.source].join(' ');

  /// Classes converted with an approximation.
  List<JxTailwindConversion> get approximated => [
    for (final item in items)
      if (item.converted && !item.exact) item,
  ];

  /// Classes that could not be converted.
  List<JxTailwindConversion> get unconverted => [
    for (final item in items)
      if (!item.converted) item,
  ];
}

/// Converts Tailwind CSS classes (v3 and v4 syntax) to JX classes.
///
/// Every converted class is compiled by a [JxEngine] before being returned:
/// a conversion that would not produce CSS in JX is reported instead of
/// being guessed.
///
/// ```dart
/// final report = JxTailwindConverter().convert('md:hover:bg-blue-500 px-4');
/// print(report.output); // md:hover:bg:blue-500 px:4
/// ```
class JxTailwindConverter {
  JxTailwindConverter({JxEngine? engine}) : _engine = engine ?? JxEngine();

  final JxEngine _engine;

  /// Converts a whitespace-separated string of classes.
  JxTailwindReport convert(String classes) => JxTailwindReport([
    for (final raw in classes.split(RegExp(r'\s+')))
      if (raw.isNotEmpty) convertClass(raw),
  ]);

  /// Converts a single class.
  JxTailwindConversion convertClass(String source) {
    final parts = _splitTopLevel(source);
    var utility = parts.removeLast();
    final variants = <String>[];
    variants.addAll(parts);

    var important = false;
    if (utility.startsWith('!')) {
      important = true;
      utility = utility.substring(1);
    } else if (utility.endsWith('!')) {
      important = true;
      utility = utility.substring(0, utility.length - 1);
    }
    var negative = false;
    if (utility.startsWith('-')) {
      negative = true;
      utility = utility.substring(1);
    }

    if (_markers.contains(utility) && variants.isEmpty && !important) {
      return JxTailwindConversion(source, utility);
    }

    final notes = <String>[];
    final mapped = _mapUtility(utility, notes);
    if (mapped == null) {
      return JxTailwindConversion(
        source,
        null,
        notes.isEmpty ? const ['no JX equivalent'] : notes,
      );
    }

    final prefix = variants.isEmpty ? '' : '${variants.join(':')}:';
    final classes = [
      for (final jx in mapped)
        '$prefix${negative ? '-' : ''}$jx${important ? '!' : ''}',
    ];
    for (final jx in classes) {
      final result = _engine.compile(jx);
      if (result.warnings.isNotEmpty || result.ruleCount == 0) {
        return JxTailwindConversion(source, null, [
          if (result.warnings.isNotEmpty)
            'no JX equivalent ("$jx": ${result.warnings.first})'
          else
            'no JX equivalent ("$jx" produces no CSS)',
        ]);
      }
    }
    return JxTailwindConversion(source, classes.join(' '), notes);
  }

  /// Splits on `:` outside brackets and parentheses.
  static List<String> _splitTopLevel(String source) {
    final parts = <String>[];
    var depth = 0;
    var start = 0;
    for (var i = 0; i < source.length; i++) {
      final char = source[i];
      if (char == '[' || char == '(') depth++;
      if (char == ']' || char == ')') depth--;
      if (char == ':' && depth == 0) {
        parts.add(source.substring(start, i));
        start = i + 1;
      }
    }
    parts.add(source.substring(start));
    return parts;
  }

  /// Marker classes that produce no CSS but are kept as is.
  static const _markers = {'group', 'peer', 'dark'};

  static const _statics = {
    'flex': 'flex',
    'grid': 'grid',
    'block': 'block',
    'inline': 'inline',
    'inline-block': 'inline-block',
    'inline-flex': 'inline-flex',
    'inline-grid': 'inline-grid',
    'contents': 'contents',
    'hidden': 'hidden',
    'static': 'static',
    'relative': 'relative',
    'absolute': 'absolute',
    'fixed': 'fixed',
    'sticky': 'sticky',
    'uppercase': 'uppercase',
    'lowercase': 'lowercase',
    'capitalize': 'capitalize',
    'normal-case': 'normal-case',
    'italic': 'italic',
    'not-italic': 'not-italic',
    'truncate': 'truncate',
    'antialiased': 'antialiased',
    'tabular-nums': 'tabular-nums',
    'sr-only': 'sr-only',
    'not-sr-only': 'not-sr-only',
    'visible': 'visible',
    'invisible': 'invisible',
    'isolate': 'isolate',
    'grayscale': 'grayscale',
    'invert': 'invert',
    'sepia': 'sepia',
    'filter-none': 'filter-none',
    'scroll-smooth': 'scroll-smooth',
    'flex-wrap': 'wrap',
    'flex-nowrap': 'nowrap',
    'flex-wrap-reverse': 'wrap-reverse',
    'flex-row': 'fd:row',
    'flex-row-reverse': 'fd:row-reverse',
    'flex-col': 'fd:col',
    'flex-col-reverse': 'fd:col-reverse',
    'flex-1': 'fl:1',
    'flex-auto': 'fl:auto',
    'flex-initial': 'fl:initial',
    'flex-none': 'fl:none',
    'grow': 'grow:1',
    'grow-0': 'grow:0',
    'flex-grow': 'grow:1',
    'flex-grow-0': 'grow:0',
    'shrink': 'shrink:1',
    'shrink-0': 'shrink:0',
    'flex-shrink': 'shrink:1',
    'flex-shrink-0': 'shrink:0',
    'underline': 'td:underline',
    'line-through': 'td:line-through',
    'no-underline': 'td:none',
    'transition': 'tr:default',
    'transition-all': 'tr:all',
    'transition-colors': 'tr:colors',
    'transition-opacity': 'tr:opacity',
    'transition-shadow': 'tr:shadow',
    'transition-transform': 'tr:transform',
    'transition-none': 'tr:none',
    'border': 'bw:1',
    'border-t': 'bwt:1',
    'border-r': 'bwr:1',
    'border-b': 'bwb:1',
    'border-l': 'bwl:1',
    'border-x': 'bwx:1',
    'border-y': 'bwy:1',
    'rounded': 'br:[0.25rem]',
    'outline-none': 'ol:none',
    'outline': 'ol:1',
    'ring': 'ring:[3px]',
    'resize': 'rsz:both',
    'break-words': 'wb:words',
    'break-normal': 'wb:normal',
    'text-wrap': 'tw:wrap',
    'text-nowrap': 'tw:nowrap',
    'text-balance': 'tw:balance',
    'text-pretty': 'tw:pretty',
    'list-inside': 'lsp:inside',
    'list-outside': 'lsp:outside',
    'aspect-auto': 'ar:auto',
    'aspect-square': 'ar:square',
    'aspect-video': 'ar:video',
    'pointer-events-none': 'pe:none',
    'pointer-events-auto': 'pe:auto',
    'appearance-none': 'app:none',
    'appearance-auto': 'app:auto',
  };

  /// Approximations of Tailwind classes JX has no exact token for.
  static const _approximations = {
    'shadow': ('sh:sm', 'Tailwind "shadow" is slightly stronger than sh:sm'),
    'blur': ('blur:md', 'Tailwind "blur" is 8px'),
    'backdrop-blur': ('bblur:md', 'Tailwind "backdrop-blur" is 8px'),
  };

  static const _unsupported = {
    'space-x': 'use gap: on a flex or grid parent',
    'space-y': 'use gap: on a flex or grid parent',
    'divide-x': 'no divide utility; use borders on the children',
    'divide-y': 'no divide utility; use borders on the children',
    'container': 'no container utility; use mw:… mx:auto',
    'prose': 'no typography plugin',
  };

  List<String>? _mapUtility(String u, List<String> notes) {
    final fixed = _statics[u];
    if (fixed != null) return [fixed];
    final approx = _approximations[u];
    if (approx != null) {
      notes.add(approx.$2);
      return [approx.$1];
    }
    for (final entry in _unsupported.entries) {
      if (u == entry.key || u.startsWith('${entry.key}-')) {
        notes.add(entry.value);
        return null;
      }
    }

    for (final (prefix, handler) in _prefixes) {
      if (u.startsWith(prefix)) {
        final value = u.substring(prefix.length);
        if (value.isEmpty) continue;
        return handler(value, notes);
      }
    }
    return null;
  }

  // Prefix handlers, longest prefixes first.
  late final List<(String, List<String>? Function(String, List<String>))>
  _prefixes = [
    for (final side in const ['x', 'y', 't', 'r', 'b', 'l', ''])
      ('p$side-', (v, n) => _one('p$side', _spacing(v))),
    for (final side in const ['x', 'y', 't', 'r', 'b', 'l', ''])
      ('m$side-', (v, n) => _one('m$side', _spacing(v))),
    ('gap-x-', (v, n) => _one('gx', _spacing(v))),
    ('gap-y-', (v, n) => _one('gy', _spacing(v))),
    ('gap-', (v, n) => _one('gap', _spacing(v))),
    ('min-w-', (v, n) => _one('mnw', _size(v))),
    ('min-h-', (v, n) => _one('mnh', _size(v))),
    ('max-w-', (v, n) => _one('mw', _maxWidth(v))),
    ('max-h-', (v, n) => _one('mh', _size(v))),
    ('size-', (v, n) => _pair('w', 'h', _size(v))),
    ('w-', (v, n) => _one('w', _size(v))),
    ('h-', (v, n) => _one('h', _size(v))),
    ('inset-x-', (v, n) => _pair('left', 'right', _spacing(v))),
    ('inset-y-', (v, n) => _pair('top', 'bottom', _spacing(v))),
    for (final side in const ['inset', 'top', 'right', 'bottom', 'left'])
      ('$side-', (v, n) => _one(side, _spacing(v))),
    ('translate-x-', (v, n) => _one('tx', _spacing(v))),
    ('translate-y-', (v, n) => _one('ty', _spacing(v))),
    ('scale-', (v, n) => _one('sc', v)),
    ('rotate-', (v, n) => _one('rot', v)),
    ('skew-x-', (v, n) => _one('skx', v)),
    ('skew-y-', (v, n) => _one('sky', v)),
    ('origin-', (v, n) => _one('origin', v)),
    ('z-', (v, n) => _one('z', v)),
    ('order-', (v, n) => _one('order', v)),
    ('basis-', (v, n) => _one('basis', _spacing(v))),
    ('grid-cols-', (v, n) => _one('cols', v)),
    ('grid-rows-', (v, n) => _one('rows', v)),
    ('col-span-', (v, n) => _one('span', v)),
    ('row-span-', (v, n) => _one('rspan', v)),
    ('items-', (v, n) => _one('ai', v)),
    ('justify-items-', (v, n) => _one('ji', v)),
    ('justify-self-', (v, n) => _one('js', v)),
    ('justify-', (v, n) => _one('jc', v)),
    ('self-', (v, n) => _one('as', v)),
    ('place-content-', (v, n) => _one('pc', v)),
    ('place-items-', (v, n) => _one('pi', v)),
    ('content-', (v, n) => _one('ac', v)),
    ('overflow-x-', (v, n) => _one('ovx', v)),
    ('overflow-y-', (v, n) => _one('ovy', v)),
    ('overflow-', (v, n) => _one('ov', v)),
    ('opacity-', (v, n) => _one('o', _opacity(v))),
    ('cursor-', (v, n) => _one('cur', v)),
    ('duration-', (v, n) => _one('dur', v)),
    ('delay-', (v, n) => _one('delay', v)),
    ('ease-', (v, n) => _one('ease', v)),
    ('animate-', (v, n) => _one('anim', v)),
    ('object-', (v, n) => _one(_fits.contains(v) ? 'obf' : 'obp', v)),
    ('mix-blend-', (v, n) => _one('mix', v)),
    ('aspect-', (v, n) => _one('ar', v)),
    ('leading-', (v, n) => _one('lh', _leading(v))),
    ('tracking-', (v, n) => _one('ls', v == 'widest' ? '[0.1em]' : v)),
    ('font-', (v, n) => _one(_fontFamilies.contains(v) ? 'ff' : 'fw', v)),
    ('text-', _text),
    ('bg-gradient-', (v, n) => _one('grad', v)),
    ('bg-linear-', (v, n) => _one('grad', v)),
    ('bg-', _background),
    ('border-', _border),
    ('rounded-', _rounded),
    ('shadow-', (v, n) => _one('sh', v)),
    (
      'ring-',
      (v, n) => _isNumber(v) || v.startsWith('[')
          ? _one('ring', v)
          : _one('ringc', _color(v, n)),
    ),
    ('outline-offset-', (v, n) => _one('olo', v)),
    (
      'outline-',
      (v, n) => _isNumber(v) ? _one('ol', v) : _one('olc', _color(v, n)),
    ),
    ('underline-offset-', (v, n) => _one('tuo', v)),
    (
      'decoration-',
      (v, n) => _isNumber(v) ? _one('tdt', v) : _one('tdc', _color(v, n)),
    ),
    ('from-', (v, n) => _one('from', _color(v, n))),
    ('via-', (v, n) => _one('via', _color(v, n))),
    ('to-', (v, n) => _one('to', _color(v, n))),
    ('backdrop-blur-', (v, n) => _one('bblur', v)),
    ('backdrop-brightness-', (v, n) => _one('bbri', v)),
    ('backdrop-contrast-', (v, n) => _one('bcon', v)),
    ('backdrop-grayscale-', (v, n) => _one('bgray', v)),
    ('backdrop-saturate-', (v, n) => _one('bsat', v)),
    ('blur-', (v, n) => _one('blur', v)),
    ('brightness-', (v, n) => _one('bri', v)),
    ('contrast-', (v, n) => _one('con', v)),
    ('grayscale-', (v, n) => _one('gs', v)),
    ('hue-rotate-', (v, n) => _one('hue', v)),
    ('saturate-', (v, n) => _one('sat', v)),
    ('drop-shadow-', (v, n) => _one('dsh', v)),
    ('accent-', (v, n) => _one('accent', _color(v, n))),
    ('caret-', (v, n) => _one('caret', _color(v, n))),
    ('align-', (v, n) => _one('va', v)),
    ('scroll-mt-', (v, n) => _one('smt', _spacing(v))),
    ('resize-', (v, n) => _one('rsz', v)),
    ('whitespace-', (v, n) => _one('ws', v)),
    ('line-clamp-', (v, n) => _one('clamp', v)),
    ('list-', (v, n) => _one('lst', v)),
    ('select-', (v, n) => _one('us', v)),
    ('pointer-events-', (v, n) => _one('pe', v)),
  ];

  static List<String>? _one(String id, String? value) =>
      value == null ? null : ['$id:$value'];

  static List<String>? _pair(String a, String b, String? value) =>
      value == null ? null : ['$a:$value', '$b:$value'];

  static final _number = RegExp(r'^\d+(\.\d+)?$');
  static bool _isNumber(String v) => _number.hasMatch(v);

  /// Spacing values the JX theme defines.
  static const _jxSpacing = {
    '0', 'px', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', //
    '11', '12', '13', '14', '15', '16', 'auto',
  };

  /// A Tailwind spacing value: the same scale (1 = 0.25rem), extended with
  /// arbitrary values beyond the JX theme.
  static String? _spacing(String v) {
    if (v.startsWith('[') || _jxSpacing.contains(v)) return v;
    if (v.contains('/') ||
        const {'full', 'screen', 'min', 'max', 'fit'}.contains(v)) {
      return v;
    }
    if (_isNumber(v)) return '[${_rem(double.parse(v) / 4)}]';
    return null;
  }

  static String? _size(String v) {
    if (v == 'svh' || v == 'dvh' || v == 'lvh') return '[100$v]';
    if (v == 'svw' || v == 'dvw') return '[100$v]';
    return _spacing(v);
  }

  static const _containerWidths = {
    'xs': '20rem',
    'sm': '24rem',
    'md': '28rem',
    'lg': '32rem',
    'xl': '36rem', //
    '2xl': '42rem', '3xl': '48rem', '4xl': '56rem', '5xl': '64rem',
    '6xl': '72rem', '7xl': '80rem', 'prose': '65ch',
    'screen-sm': '640px', 'screen-md': '768px', 'screen-lg': '1024px',
    'screen-xl': '1280px', 'screen-2xl': '1536px',
  };

  static String? _maxWidth(String v) {
    final width = _containerWidths[v];
    if (width != null) return '[$width]';
    return _spacing(v);
  }

  static String _rem(double value) {
    var text = value.toStringAsFixed(4);
    text = text
        .replaceFirst(RegExp(r'0+$'), '')
        .replaceFirst(RegExp(r'\.$'), '');
    return '${text}rem';
  }

  static String? _opacity(String v) {
    if (v.startsWith('[')) return v;
    if (!_isNumber(v)) return null;
    if (const {
      '0',
      '5',
      '10',
      '20',
      '30',
      '40',
      '50',
      '60',
      '70',
      '80',
      '90',
      '95',
      '100',
    }.contains(v)) {
      return v;
    }
    return '[${double.parse(v) / 100}]';
  }

  static String? _leading(String v) {
    if (v.startsWith('[') || !_isNumber(v)) return v;
    return '[${_rem(double.parse(v) / 4)}]';
  }

  static const _fontFamilies = {'sans', 'serif', 'mono'};
  static const _fits = {'contain', 'cover', 'fill', 'none', 'scale-down'};
  static const _aligns = {'left', 'center', 'right', 'justify', 'start', 'end'};
  static const _jxFontSizes = {
    'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', //
  };
  static const _extraFontSizes = {
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  };
  static final _length = RegExp(r'^\[[\d.]+(px|r?em|%|vw|vh|ch|pt)\]$');

  List<String>? _text(String v, List<String> notes) {
    if (_aligns.contains(v)) return _one('ta', v);
    if (_jxFontSizes.contains(v)) return _one('fs', v);
    final extra = _extraFontSizes[v];
    if (extra != null) return _one('fs', '[$extra]');
    if (v.startsWith('[') && (_length.hasMatch(v) || v.startsWith('[clamp('))) {
      return _one('fs', v);
    }
    if (v == 'ellipsis' || v == 'clip') {
      notes.add('use truncate for an ellipsis');
      return null;
    }
    return _one('c', _color(v, notes));
  }

  static const _bgSizes = {'auto', 'cover', 'contain'};
  static const _positions = {
    'center', 'top', 'bottom', 'left', 'right', //
    'left-top', 'left-bottom', 'right-top', 'right-bottom',
  };
  static const _repeats = {
    'repeat': 'repeat',
    'no-repeat': 'none',
    'repeat-x': 'x',
    'repeat-y': 'y', //
    'repeat-round': 'round', 'repeat-space': 'space',
  };

  List<String>? _background(String v, List<String> notes) {
    if (_bgSizes.contains(v)) return _one('bgs', v);
    if (_positions.contains(v)) {
      return _one('bgp', v.contains('-') ? v.split('-').reversed.join('-') : v);
    }
    final repeat = _repeats[v];
    if (repeat != null) return _one('bgr', repeat);
    return _one('bg', _color(v, notes));
  }

  static const _borderStyles = {
    'solid',
    'dashed',
    'dotted',
    'double',
    'none',
    'hidden',
  };

  List<String>? _border(String v, List<String> notes) {
    for (final side in const ['x', 'y', 't', 'r', 'b', 'l']) {
      if (v.startsWith('$side-')) {
        final width = v.substring(2);
        if (_isNumber(width) || width.startsWith('['))
          return _one('bw$side', width);
      }
    }
    if (_isNumber(v) || _length.hasMatch(v)) return _one('bw', v);
    if (_borderStyles.contains(v)) return _one('bs', v);
    return _one('bc', _color(v, notes));
  }

  static final _corner = RegExp(r'^(t|r|b|l|tl|tr|bl|br|s|e|ss|se|es|ee)(-|$)');

  List<String>? _rounded(String v, List<String> notes) {
    if (_corner.hasMatch(v)) {
      notes.add('no per-corner radius utility');
      return null;
    }
    if (v == 'DEFAULT') return ['br:[0.25rem]'];
    return _one('br', v);
  }

  static const _familyAliases = {
    'slate': 'gray', 'zinc': 'gray', 'neutral': 'gray', 'stone': 'gray', //
    'amber': 'yellow', 'lime': 'green', 'emerald': 'green', 'cyan': 'teal',
    'sky': 'blue', 'violet': 'purple', 'fuchsia': 'pink', 'rose': 'pink',
  };
  static const _shades = {
    '50': '100', '100': '100', '200': '300', '300': '300', '400': '500', //
    '500': '500', '600': '700', '700': '700', '800': '900', '900': '900',
    '950': '900',
  };
  static const _jxFamilies = {
    'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', //
    'purple', 'pink',
  };

  /// Maps a Tailwind color to the JX palette, approximating shades and
  /// families JX does not define.
  static String? _color(String v, List<String> notes) {
    var value = v;
    final slash = value.lastIndexOf('/');
    if (slash > 0 && !value.startsWith('[')) {
      notes.add('opacity modifier "${value.substring(slash)}" dropped');
      value = value.substring(0, slash);
    }
    if (value.startsWith('[')) return value;
    if (const {'transparent', 'current', 'black', 'white'}.contains(value)) {
      return value;
    }
    if (value == 'inherit') return null;
    final dash = value.lastIndexOf('-');
    if (dash <= 0) return null;
    final family = value.substring(0, dash);
    final shade = value.substring(dash + 1);
    final jxFamily = _jxFamilies.contains(family)
        ? family
        : _familyAliases[family];
    final jxShade = _shades[shade];
    if (jxFamily == null || jxShade == null) return null;
    final result = '$jxFamily-$jxShade';
    if (result != value) notes.add('$value approximated as $result');
    return result;
  }
}
