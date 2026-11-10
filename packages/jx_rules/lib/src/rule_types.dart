import 'package:jx_core/jx_core.dart';

import 'rule.dart';

/// Règle « standalone » : une classe sans valeur produit des déclarations fixes
/// (ex. `flex` -> `display: flex`, `hidden` -> `display: none`).
final class JxStaticRule extends JxRule {
  /// Table `identifiant -> déclarations (propriété -> valeur)`.
  final Map<String, Map<String, String>> classes;

  const JxStaticRule(super.id, this.classes);

  @override
  bool matches(JxClassToken token) =>
      !token.hasValue &&
      !token.isNegative &&
      classes.containsKey(token.identifier);

  @override
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme) {
    final declarations = classes[token.identifier];
    if (declarations == null) {
      throw JxRuleException(
        'Classe "${token.identifier}" inconnue pour "$id".',
      );
    }
    return [
      JxCssRule(
        selector: escapeSelector(token.raw),
        declarations: [
          for (final entry in declarations.entries)
            JxCssDeclaration(
              property: entry.key,
              value: entry.value,
              isImportant: token.isImportant,
            ),
        ],
      ),
    ];
  }
}

/// Résolveur de repli appelé lorsqu'une valeur n'est ni arbitraire, ni un
/// token du thème, ni un mot-clé. Retourne `null` si la valeur est invalide.
typedef JxValueFallback = String? Function(String value);

/// Sélecteur de propriétés dépendant de la valeur résolue. Retourne `null`
/// pour conserver les propriétés par défaut de l'identifiant.
///
/// Exemple : `bg:[linear-gradient(…)]` doit cibler `background-image` et non
/// `background-color`.
typedef JxPropertySelector = List<String>? Function(String value);

/// Règle à valeur : `identifiant:valeur` -> une ou plusieurs propriétés CSS.
///
/// Ordre de résolution de la valeur :
/// 1. valeur arbitraire `[...]` (si [allowArbitrary]) ;
/// 2. token du thème dans [themeCategory] ;
/// 3. table de [keywords] ;
/// 4. [fallback].
///
/// Une valeur non résolue lève une [JxRuleException].
final class JxValueRule extends JxRule {
  /// Table `identifiant -> propriétés CSS générées` (ex. `px -> [padding-left, padding-right]`).
  final Map<String, List<String>> properties;

  /// Catégorie de thème consultée pour résoudre la valeur.
  final String? themeCategory;

  /// Mots-clés propres à la règle (ex. `center`, `between`).
  final Map<String, String> keywords;

  /// Valeurs refusées après résolution (ex. `auto` pour `padding`).
  final Set<String> disallowed;

  /// Autorise les valeurs arbitraires `[...]`.
  final bool allowArbitrary;

  /// Autorise les valeurs négatives (`m:-4`, `-m:4`).
  final bool allowNegative;

  /// Résolveur de repli optionnel.
  final JxValueFallback? fallback;

  /// Redirection optionnelle vers d'autres propriétés selon la valeur.
  final JxPropertySelector? propertySelector;

  /// Gabarit appliqué à la valeur finale, `{}` étant remplacé par celle-ci
  /// (ex. `translateY({})`, `repeat({}, minmax(0, 1fr))`).
  final String? template;

  const JxValueRule(
    super.id, {
    required this.properties,
    this.themeCategory,
    this.keywords = const {},
    this.disallowed = const {},
    this.allowArbitrary = true,
    this.allowNegative = false,
    this.fallback,
    this.propertySelector,
    this.template,
  });

  @override
  bool matches(JxClassToken token) =>
      token.hasValue &&
      (allowNegative || !token.isNegative) &&
      properties.containsKey(token.identifier);

  @override
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme) {
    final props = properties[token.identifier];
    if (props == null) {
      throw JxRuleException(
        'Identifiant "${token.identifier}" non pris en charge par "$id".',
      );
    }

    var value = resolveValue(token, theme);
    if (value == null || disallowed.contains(value)) {
      throw JxRuleException(
        'Valeur "${token.value}" invalide pour "${token.identifier}".',
      );
    }
    if (token.isNegative) value = _negate(value, token);
    final targets = propertySelector?.call(value) ?? props;
    final rendered = template?.replaceAll('{}', value) ?? value;

    return [
      JxCssRule(
        selector: escapeSelector(token.raw),
        declarations: [
          for (final property in targets)
            JxCssDeclaration(
              property: property,
              value: rendered,
              isImportant: token.isImportant,
            ),
        ],
      ),
    ];
  }

  /// Résout la valeur CSS (sans signe) du token, ou `null` si inconnue.
  String? resolveValue(JxClassToken token, JxThemeContract theme) {
    if (token.isArbitrary) {
      if (!allowArbitrary) return null;
      final arbitrary = token.arbitraryValue!.trim();
      return arbitrary.isEmpty ? null : arbitrary;
    }
    final raw = token.value!;
    final category = themeCategory;
    if (category != null) {
      final fromTheme = theme.resolveToken(category, raw);
      if (fromTheme != null) return fromTheme;
    }
    return keywords[raw] ?? fallback?.call(raw);
  }

  static final RegExp _zero = RegExp(r'^0([a-z%]*)$');

  String _negate(String value, JxClassToken token) {
    if (_zero.hasMatch(value)) return value;
    if (RegExp(r'^[0-9.]').hasMatch(value)) return '-$value';
    if (value.startsWith('-')) return value.substring(1);
    if (value.startsWith('calc(') || value.startsWith('var(')) {
      return 'calc(-1 * $value)';
    }
    throw JxRuleException(
      'La valeur "$value" ne peut pas être négative (${token.raw}).',
    );
  }
}

/// Règle à mots-clés produisant plusieurs déclarations distinctes
/// (ex. `tr:colors` -> `transition-property`, `transition-duration`…).
final class JxKeywordRule extends JxRule {
  /// Identifiants acceptés (ex. `{'tr'}`).
  final Set<String> identifiers;

  /// Table `mot-clé -> (propriété -> valeur)`.
  final Map<String, Map<String, String>> values;

  const JxKeywordRule(
    super.id, {
    required this.identifiers,
    required this.values,
  });

  @override
  bool matches(JxClassToken token) =>
      token.hasValue &&
      !token.isNegative &&
      !token.isArbitrary &&
      identifiers.contains(token.identifier);

  @override
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme) {
    final declarations = values[token.value];
    if (declarations == null) {
      throw JxRuleException(
        'Valeur "${token.value}" invalide pour "${token.identifier}".',
      );
    }
    return [
      JxCssRule(
        selector: escapeSelector(token.raw),
        declarations: [
          for (final entry in declarations.entries)
            JxCssDeclaration(
              property: entry.key,
              value: entry.value,
              isImportant: token.isImportant,
            ),
        ],
      ),
    ];
  }
}
