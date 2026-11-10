import 'theme_category.dart';

/// Tokens du thème par défaut de JX CSS, indexés par catégorie puis par clé.
///
/// L'ordre d'insertion est significatif : il est conservé pour la génération
/// des variables CSS (et pour l'ordre des breakpoints).
abstract final class JxDefaultTokens {
  /// Couleurs spéciales + palette nommée.
  ///
  /// Chaque famille expose les nuances `100`, `300`, `500`, `700`, `900`
  /// (ex. `blue-700`) ; le nom seul (ex. `blue`) est un alias de la nuance 500.
  static final Map<String, String> colors = _buildColors();

  /// Échelle d'espacement : `0` à `16` (pas de 0.25rem), `px` et `auto`.
  static final Map<String, String> spacing = {
    '0': '0px',
    'px': '1px',
    for (var i = 1; i <= 16; i++) '$i': _rem(i * 0.25),
    'auto': 'auto',
  };

  /// Breakpoints responsives (mobile-first, `min-width`).
  static const Map<String, String> breakpoints = {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  };

  static const Map<String, String> fontSize = {
    'xs': '0.75rem',
    'sm': '0.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  };

  static const Map<String, String> fontWeight = {
    'thin': '100',
    'extralight': '200',
    'light': '300',
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
    'extrabold': '800',
    'black': '900',
  };

  static const Map<String, String> lineHeight = {
    'none': '1',
    'tight': '1.25',
    'snug': '1.375',
    'normal': '1.5',
    'relaxed': '1.625',
    'loose': '2',
  };

  static const Map<String, String> borderRadius = {
    'none': '0px',
    'sm': '0.125rem',
    'md': '0.375rem',
    'lg': '0.5rem',
    'xl': '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    'full': '9999px',
  };

  static const Map<String, String> borderWidth = {
    '0': '0px',
    '1': '1px',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  };

  /// Opacité : `0` à `100` par pas de 10, plus `5` et `95`.
  static final Map<String, String> opacity = {
    '0': '0',
    '5': '0.05',
    for (var i = 10; i <= 90; i += 10) '$i': '${i / 100}',
    '95': '0.95',
    '100': '1',
  };

  /// Ombres portées (`sh:`).
  static const Map<String, String> shadow = {
    'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    'none': 'none',
  };

  /// Ensemble des catégories du thème par défaut.
  static Map<String, Map<String, String>> get all => {
    JxThemeCategory.colors: colors,
    JxThemeCategory.spacing: spacing,
    JxThemeCategory.breakpoints: breakpoints,
    JxThemeCategory.fontSize: fontSize,
    JxThemeCategory.fontWeight: fontWeight,
    JxThemeCategory.lineHeight: lineHeight,
    JxThemeCategory.borderRadius: borderRadius,
    JxThemeCategory.borderWidth: borderWidth,
    JxThemeCategory.opacity: opacity,
    JxThemeCategory.shadow: shadow,
  };

  static const Map<String, List<String>> _palette = {
    //          100        300        500        700        900
    'gray': ['#f3f4f6', '#d1d5db', '#6b7280', '#374151', '#111827'],
    'red': ['#fee2e2', '#fca5a5', '#ef4444', '#b91c1c', '#7f1d1d'],
    'orange': ['#ffedd5', '#fdba74', '#f97316', '#c2410c', '#7c2d12'],
    'yellow': ['#fef9c3', '#fde047', '#eab308', '#a16207', '#713f12'],
    'green': ['#dcfce7', '#86efac', '#22c55e', '#15803d', '#14532d'],
    'teal': ['#ccfbf1', '#5eead4', '#14b8a6', '#0f766e', '#134e4a'],
    'blue': ['#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8', '#1e3a8a'],
    'indigo': ['#e0e7ff', '#a5b4fc', '#6366f1', '#4338ca', '#312e81'],
    'purple': ['#f3e8ff', '#d8b4fe', '#a855f7', '#7e22ce', '#581c87'],
    'pink': ['#fce7f3', '#f9a8d4', '#ec4899', '#be185d', '#831843'],
  };

  static const List<String> _shades = ['100', '300', '500', '700', '900'];

  static Map<String, String> _buildColors() {
    final colors = <String, String>{
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
    };
    for (final entry in _palette.entries) {
      colors[entry.key] = entry.value[2];
      for (var i = 0; i < _shades.length; i++) {
        colors['${entry.key}-${_shades[i]}'] = entry.value[i];
      }
    }
    return colors;
  }

  static String _rem(double value) {
    final text = value == value.truncateToDouble()
        ? value.toInt().toString()
        : value.toString();
    return '${text}rem';
  }
}
