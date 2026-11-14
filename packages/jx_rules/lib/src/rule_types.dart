import 'package:jx_core/jx_core.dart';
import 'package:jx_theme/jx_theme.dart';

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
      throw JxRuleException('Unknown class "${token.identifier}" for "$id".');
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

  /// Déclarations fixes ajoutées après celles de la valeur (ex.
  /// `filter: var(--jx-blur,) …` pour les filtres composables).
  final Map<String, String> extra;

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
    this.extra = const {},
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
        'Utility "${token.identifier}" is not handled by "$id".',
      );
    }

    var value = resolveValue(token, theme);
    if (value == null || disallowed.contains(value)) {
      throw JxRuleException(
        'Invalid value "${token.value}" for "${token.identifier}".'
        '${describeAccepted(token, theme)}',
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
          for (final entry in extra.entries)
            JxCssDeclaration(
              property: entry.key,
              value: entry.value,
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
      return checkedArbitraryValue(token);
    }
    final raw = token.value!;
    final category = themeCategory;
    if (category != null) {
      final fromTheme = theme.resolveToken(category, raw);
      if (fromTheme != null) return fromTheme;
    }
    return keywords[raw] ?? fallback?.call(raw);
  }

  /// Valeurs acceptées par la règle, pour les messages d'erreur : suggestion
  /// la plus proche puis aperçu des valeurs possibles.
  String describeAccepted(JxClassToken token, JxThemeContract theme) {
    final category = themeCategory;
    final candidates = <String>[
      if (category != null && theme is JxTheme)
        ...theme.data.getCategory(category).keys,
      ...keywords.keys,
    ].where((v) => !disallowed.contains(v)).toList();
    final hints = <String>[];
    final raw = token.isArbitrary ? null : token.value;
    final closest = raw == null ? null : closestMatch(raw, candidates);
    if (closest != null) {
      hints.add('did you mean "${token.identifier}:$closest"?');
    }
    if (candidates.isNotEmpty) {
      final preview = candidates.take(12).join(', ');
      hints.add(
        'accepted values: $preview${candidates.length > 12 ? '…' : ''}',
      );
    }
    if (allowArbitrary) hints.add('or an arbitrary value in brackets');
    if (hints.isEmpty) return '';
    final text = hints.join('; ');
    return ' ${text[0].toUpperCase()}${text.substring(1)}.';
  }

  static final RegExp _zero = RegExp(r'^0([a-z%]*)$');

  String _negate(String value, JxClassToken token) {
    if (_zero.hasMatch(value)) return value;
    if (RegExp(r'^[0-9.]').hasMatch(value)) return '-$value';
    if (value.startsWith('-')) return value.substring(1);
    if (value.startsWith('calc(') || value.startsWith('var(')) {
      return 'calc(-1 * $value)';
    }
    throw JxRuleException('Value "$value" cannot be negative (${token.raw}).');
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
        'Invalid value "${token.value}" for "${token.identifier}".',
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

/// Calcule les déclarations d'une [JxDynamicRule] à partir de la valeur du
/// token (`null` pour une classe sans valeur). Retourne `null` si la valeur
/// est invalide.
typedef JxDeclarationBuilder =
    Map<String, String>? Function(
      String? value,
      JxClassToken token,
      JxThemeContract theme,
    );

/// Règle libre : un constructeur calcule les déclarations à partir de la
/// valeur. Sert aux utilitaires qui produisent plusieurs propriétés
/// différentes (filtres composables, `clamp:3`…).
///
/// [identifiers] liste les identifiants acceptés. Si [standalone] est vrai,
/// la classe s'utilise sans valeur (`truncate`), sinon avec (`blur:4`).
final class JxDynamicRule extends JxRule {
  /// Identifiants acceptés.
  final Set<String> identifiers;

  /// Indique si la règle s'applique aux classes sans valeur.
  final bool standalone;

  /// Autorise les valeurs négatives.
  final bool allowNegative;

  /// Constructeur des déclarations.
  final JxDeclarationBuilder build;

  const JxDynamicRule(
    super.id, {
    required this.identifiers,
    required this.build,
    this.standalone = false,
    this.allowNegative = false,
  });

  @override
  bool matches(JxClassToken token) =>
      token.hasValue != standalone &&
      (allowNegative || !token.isNegative) &&
      identifiers.contains(token.identifier);

  @override
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme) {
    final value = token.isArbitrary
        ? checkedArbitraryValue(token)
        : token.value;
    final declarations = build(value, token, theme);
    if (declarations == null || declarations.isEmpty) {
      throw JxRuleException(
        'Invalid value "${token.value}" for "${token.identifier}".',
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

/// Valeur arbitraire décodée de [token], après contrôle de sécurité.
///
/// Lève une [JxRuleException] si la valeur pourrait sortir de sa déclaration
/// CSS (`;`, `{`, `}`, `<`…) ou charger du code (`javascript:`…). Ce contrôle
/// double celui du parseur : il protège aussi les tokens construits à la main.
String checkedArbitraryValue(JxClassToken token) {
  final value = token.arbitraryValue!.trim();
  final reason = JxCssValue.unsafeReason(value);
  if (reason != null) {
    throw JxRuleException(
      'Arbitrary value rejected for "${token.raw}": $reason.',
    );
  }
  return value;
}

/// Retourne le candidat le plus proche de [input] (distance de Levenshtein
/// d'au plus 2, et inférieure à la longueur de [input]), ou `null`.
///
/// À distance égale, un candidat commençant par la même lettre l'emporte.
String? closestMatch(String input, Iterable<String> candidates) =>
    closestMatches(input, candidates).firstOrNull;

/// Candidats proches de [input], du plus au moins ressemblant (mêmes
/// critères que [closestMatch]).
List<String> closestMatches(String input, Iterable<String> candidates) {
  if (input.isEmpty) return const [];
  final scored = <(int, String)>[];
  for (final candidate in candidates) {
    if (candidate == input || candidate.isEmpty) continue;
    final d = _levenshtein(input, candidate);
    if (d > 2 || d >= input.length) continue;
    scored.add((d * 2 + (candidate[0] == input[0] ? 0 : 1), candidate));
  }
  // Tri stable : à score égal, l'ordre des candidats est conservé.
  final indexed = [for (var i = 0; i < scored.length; i++) (scored[i], i)];
  indexed.sort((a, b) {
    final byScore = a.$1.$1.compareTo(b.$1.$1);
    return byScore != 0 ? byScore : a.$2.compareTo(b.$2);
  });
  return [for (final entry in indexed) entry.$1.$2];
}

int _levenshtein(String a, String b) {
  var previous = List<int>.generate(b.length + 1, (i) => i);
  for (var i = 0; i < a.length; i++) {
    final current = List<int>.filled(b.length + 1, 0)..[0] = i + 1;
    for (var j = 0; j < b.length; j++) {
      final cost = a[i] == b[j] ? 0 : 1;
      current[j + 1] = [
        current[j] + 1,
        previous[j + 1] + 1,
        previous[j] + cost,
      ].reduce((x, y) => x < y ? x : y);
    }
    previous = current;
  }
  return previous[b.length];
}
