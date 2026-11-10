import 'package:jx_core/jx_core.dart';
import 'package:jx_theme/jx_theme.dart';

/// Applique les variantes d'un token (pseudo-classes, breakpoints) aux règles
/// CSS générées par une règle utilitaire.
///
/// - Pseudo-classe : `hover:bg:blue` -> `.hover\:bg\:blue:hover { … }`
/// - Breakpoint : `md:p:8` -> `@media (min-width: 768px) { .md\:p\:8 { … } }`
///
/// Les variantes se cumulent : `md:hover:c:red` produit la pseudo-classe
/// `:hover` sous la media query `md`.
final class JxVariantResolver {
  /// Pseudo-classes supportées par défaut.
  static const Map<String, String> defaultPseudoClasses = {
    'hover': ':hover',
    'focus': ':focus',
    'active': ':active',
    'visited': ':visited',
    'disabled': ':disabled',
    'checked': ':checked',
    'focus-within': ':focus-within',
    'focus-visible': ':focus-visible',
    'first': ':first-child',
    'last': ':last-child',
    'odd': ':nth-child(odd)',
    'even': ':nth-child(even)',
  };

  /// Breakpoints supportés par défaut, du plus petit au plus grand.
  /// Leurs valeurs sont lues dans la catégorie `breakpoints` du thème.
  static const List<String> defaultBreakpoints = [
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
  ];

  /// Thème utilisé pour résoudre les breakpoints.
  final JxThemeContract theme;

  /// Table `variante -> pseudo-classe CSS`.
  final Map<String, String> pseudoClasses;

  /// Noms des breakpoints, dans l'ordre croissant (détermine l'ordre de sortie).
  final List<String> breakpoints;

  const JxVariantResolver({
    required this.theme,
    this.pseudoClasses = defaultPseudoClasses,
    this.breakpoints = defaultBreakpoints,
  });

  /// Ensemble des variantes reconnues (à transmettre au parseur).
  Set<String> get knownVariants => {...pseudoClasses.keys, ...breakpoints};

  /// Indique si la variante est prise en charge.
  bool supports(String variant) =>
      pseudoClasses.containsKey(variant) || breakpoints.contains(variant);

  /// Media query associée à un breakpoint (ex. `@media (min-width: 768px)`).
  String mediaQueryFor(String breakpoint) {
    final width = theme.resolveToken(JxThemeCategory.breakpoints, breakpoint);
    if (width == null) {
      throw JxRuleException(
        'Breakpoint "$breakpoint" absent du thème "${theme.name}".',
      );
    }
    return '@media (min-width: $width)';
  }

  /// Applique les [variants] à [rule] et retourne la règle transformée.
  ///
  /// Lève une [JxRuleException] si une variante n'est pas supportée.
  JxCssRule apply(JxCssRule rule, List<String> variants) {
    if (variants.isEmpty) return rule;

    final pseudo = StringBuffer(rule.pseudoSelector ?? '');
    final conditions = <String>[
      if (rule.hasMediaQuery) _stripMedia(rule.mediaQuery!),
    ];

    for (final variant in variants) {
      final pseudoClass = pseudoClasses[variant];
      if (pseudoClass != null) {
        pseudo.write(pseudoClass);
      } else if (breakpoints.contains(variant)) {
        conditions.add(_stripMedia(mediaQueryFor(variant)));
      } else {
        throw JxRuleException('Variante "$variant" non supportée.');
      }
    }

    return JxCssRule(
      selector: rule.selector,
      declarations: rule.declarations,
      pseudoSelector: pseudo.isEmpty ? null : pseudo.toString(),
      mediaQuery: conditions.isEmpty
          ? null
          : '@media ${conditions.join(' and ')}',
    );
  }

  /// Rang de tri d'une media query : `0` sans media query, puis l'ordre des
  /// [breakpoints] (mobile-first). Les media queries composées ou inconnues
  /// sont placées en dernier.
  int mediaRank(String? mediaQuery) {
    if (mediaQuery == null || mediaQuery.isEmpty) return 0;
    for (var i = 0; i < breakpoints.length; i++) {
      final width = theme.resolveToken(
        JxThemeCategory.breakpoints,
        breakpoints[i],
      );
      if (width != null && mediaQuery == '@media (min-width: $width)') {
        return i + 1;
      }
    }
    return breakpoints.length + 1;
  }

  static String _stripMedia(String query) =>
      query.startsWith('@media ') ? query.substring(7).trim() : query.trim();
}
