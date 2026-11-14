import 'package:jx_core/jx_core.dart';
import 'package:jx_theme/jx_theme.dart';

/// Applique les variantes d'un token (pseudo-classes, breakpoints) aux règles
/// CSS générées par une règle utilitaire.
///
/// - Pseudo-classe : `hover:bg:blue` -> `.hover\:bg\:blue:hover { … }`
/// - Breakpoint : `md:p:8` -> `@media (min-width: 768px) { .md\:p\:8 { … } }`
///
/// - Média : `dark:bg:gray-900` -> `@media (prefers-color-scheme: dark) { … }`
/// - Groupe : `group-hover:c:blue` -> `.group:hover .group-hover\:c\:blue`
/// - Pair : `peer-checked:bg:blue` -> `.peer:checked ~ .peer-checked\:bg\:blue`
///
/// Les variantes se cumulent : `md:hover:c:red` produit la pseudo-classe
/// `:hover` sous la media query `md`. Toute pseudo-classe peut être préfixée
/// par `group-` ou `peer-`.
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
    // États des champs de formulaire
    'enabled': ':enabled',
    'required': ':required',
    'optional': ':optional',
    'valid': ':valid',
    'invalid': ':invalid',
    'user-valid': ':user-valid',
    'user-invalid': ':user-invalid',
    'read-only': ':read-only',
    'placeholder-shown': ':placeholder-shown',
    'autofill': ':autofill',
    'indeterminate': ':indeterminate',
  };

  /// Pseudo-éléments supportés par défaut. Toujours placés en fin de
  /// sélecteur, quel que soit l'ordre d'écriture des variantes :
  /// `placeholder:focus:c:gray` -> `.…:focus::placeholder`.
  static const Map<String, String> defaultPseudoElements = {
    'placeholder': '::placeholder',
    'file': '::file-selector-button',
  };

  /// Variantes de préférences et de média (mode sombre, mouvement réduit,
  /// impression…). Une valeur sans parenthèse est un type de média.
  static const Map<String, String> defaultMediaVariants = {
    'dark': '(prefers-color-scheme: dark)',
    'motion-safe': '(prefers-reduced-motion: no-preference)',
    'motion-reduce': '(prefers-reduced-motion: reduce)',
    'contrast-more': '(prefers-contrast: more)',
    'portrait': '(orientation: portrait)',
    'landscape': '(orientation: landscape)',
    'print': 'print',
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

  /// Table `variante -> pseudo-élément CSS`.
  final Map<String, String> pseudoElements;

  /// Noms des breakpoints, dans l'ordre croissant (détermine l'ordre de sortie).
  final List<String> breakpoints;

  /// Table `variante -> condition de média`.
  final Map<String, String> mediaVariants;

  /// Sélecteur activant `dark:` (ex. `.dark`). `null` : préférence système
  /// (`prefers-color-scheme`).
  final String? darkSelector;

  const JxVariantResolver({
    required this.theme,
    this.pseudoClasses = defaultPseudoClasses,
    this.pseudoElements = defaultPseudoElements,
    this.breakpoints = defaultBreakpoints,
    this.mediaVariants = defaultMediaVariants,
    this.darkSelector,
  });

  /// Crée un résolveur dont les breakpoints sont tous ceux déclarés dans la
  /// catégorie `breakpoints` du [theme], triés par largeur croissante.
  ///
  /// Permet d'ajouter un breakpoint personnalisé (ex. `3xl: 1920px`) par
  /// simple configuration du thème.
  factory JxVariantResolver.forTheme(
    JxTheme theme, {
    Map<String, String> pseudoClasses = defaultPseudoClasses,
    Map<String, String> pseudoElements = defaultPseudoElements,
    Map<String, String> mediaVariants = defaultMediaVariants,
    String? darkSelector,
  }) {
    final entries = theme.data
        .getCategory(JxThemeCategory.breakpoints)
        .entries
        .toList();
    final indexed = [
      for (var i = 0; i < entries.length; i++)
        (index: i, name: entries[i].key, width: _widthOf(entries[i].value)),
    ];
    indexed.sort((a, b) {
      final byWidth = a.width.compareTo(b.width);
      return byWidth != 0 ? byWidth : a.index.compareTo(b.index);
    });
    return JxVariantResolver(
      theme: theme,
      pseudoClasses: pseudoClasses,
      pseudoElements: pseudoElements,
      breakpoints: [for (final e in indexed) e.name],
      mediaVariants: mediaVariants,
      darkSelector: darkSelector,
    );
  }

  /// Largeur approximative en pixels (`px`, `em`/`rem` à 16px).
  static double _widthOf(String value) {
    final match = RegExp(r'^([0-9.]+)(px|r?em)?$').firstMatch(value.trim());
    if (match == null) return double.infinity;
    final number = double.tryParse(match.group(1)!) ?? double.infinity;
    return match.group(2) == null || match.group(2) == 'px'
        ? number
        : number * 16;
  }

  /// Ensemble des variantes reconnues (à transmettre au parseur).
  Set<String> get knownVariants => {
    ...pseudoClasses.keys,
    for (final key in pseudoClasses.keys) ...['group-$key', 'peer-$key'],
    ...pseudoElements.keys,
    ...breakpoints,
    ...mediaVariants.keys,
  };

  /// Indique si la variante est prise en charge.
  bool supports(String variant) =>
      pseudoClasses.containsKey(variant) ||
      pseudoElements.containsKey(variant) ||
      breakpoints.contains(variant) ||
      mediaVariants.containsKey(variant) ||
      _relationalPrefix(variant) != null;

  /// Préfixe de sélecteur d'une variante `group-*` ou `peer-*`, ou `null`.
  String? _relationalPrefix(String variant) {
    if (variant == 'dark' && darkSelector != null) return '$darkSelector ';
    for (final (marker, combinator) in const [
      ('group-', ' '),
      ('peer-', ' ~ '),
    ]) {
      if (!variant.startsWith(marker)) continue;
      final pseudo = pseudoClasses[variant.substring(marker.length)];
      if (pseudo == null) return null;
      final name = marker.substring(0, marker.length - 1);
      return '.$name$pseudo$combinator';
    }
    return null;
  }

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
  /// Lève une [JxRuleException] si une variante n'est pas supportée, ou si
  /// plusieurs pseudo-éléments sont combinés (interdit en CSS).
  JxCssRule apply(JxCssRule rule, List<String> variants) {
    if (variants.isEmpty) return rule;

    final pseudo = StringBuffer(rule.pseudoSelector ?? '');
    final prefix = StringBuffer(rule.selectorPrefix ?? '');
    String? pseudoElement;
    final mediaTypes = <String>[];
    final conditions = <String>[
      if (rule.hasMediaQuery) _stripMedia(rule.mediaQuery!),
    ];

    for (final variant in variants) {
      final pseudoClass = pseudoClasses[variant];
      final element = pseudoElements[variant];
      final relational = _relationalPrefix(variant);
      final media = relational == null ? mediaVariants[variant] : null;
      if (pseudoClass != null) {
        pseudo.write(pseudoClass);
      } else if (element != null) {
        if (pseudoElement != null) {
          throw JxRuleException(
            'Un seul pseudo-élément par classe : "$variant" en plus de '
            '"$pseudoElement".',
          );
        }
        pseudoElement = element;
      } else if (breakpoints.contains(variant)) {
        conditions.add(_stripMedia(mediaQueryFor(variant)));
      } else if (relational != null) {
        prefix.write(relational);
      } else if (media != null) {
        // Un type de média (`print`) doit précéder les conditions.
        (media.startsWith('(') ? conditions : mediaTypes).add(media);
      } else {
        throw JxRuleException('Variante "$variant" non supportée.');
      }
    }
    // Le pseudo-élément clôt toujours le sélecteur.
    if (pseudoElement != null) pseudo.write(pseudoElement);

    return JxCssRule(
      selector: rule.selector,
      declarations: rule.declarations,
      pseudoSelector: pseudo.isEmpty ? null : pseudo.toString(),
      selectorPrefix: prefix.isEmpty ? null : prefix.toString(),
      mediaQuery: mediaTypes.isEmpty && conditions.isEmpty
          ? null
          : '@media ${[...mediaTypes, ...conditions].join(' and ')}',
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
