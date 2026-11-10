import 'package:jx_core/jx_core.dart';

/// Implémentation du parseur de syntaxe de classes pour le framework JX CSS.
///
/// Analyse les classes utilitaires selon la syntaxe propriétaire de JX CSS :
/// `[variante1:variante2:]identifiant[:valeur][!]`
///
/// Exemples :
/// - `flex` -> id: `flex`, value: null
/// - `c:red` -> id: `c`, value: `red`
/// - `hover:bg:blue` -> variants: `['hover']`, id: `bg`, value: `blue`
/// - `md:hidden` -> variants: `['md']`, id: `hidden`
/// - `p:4!` -> id: `p`, value: `4`, important: true
/// - `c:[#ff0000]` -> id: `c`, value: `[#ff0000]` (valeur arbitraire)
/// - `m:-4` / `-m:4` -> id: `m`, value: `4`, negative: true
///
/// Les classes syntaxiquement invalides (segment vide, crochets non
/// équilibrés, identifiant invalide…) produisent `null`.
final class JxParser implements JxParserContract {
  /// Variantes connues par défaut (pseudo-classes, pseudo-éléments et
  /// breakpoints).
  static const Set<String> defaultVariants = {
    // Pseudo-classes
    'hover', 'focus', 'active', 'visited', 'disabled', 'checked',
    'focus-within', 'focus-visible', 'first', 'last', 'odd', 'even',
    // États des champs de formulaire
    'enabled', 'required', 'optional', 'valid', 'invalid', 'user-valid',
    'user-invalid', 'read-only', 'placeholder-shown', 'autofill',
    'indeterminate',
    // Pseudo-éléments
    'placeholder', 'file',
    // Breakpoints
    'sm', 'md', 'lg', 'xl', '2xl',
  };

  /// Variantes reconnues. Elles permettent de lever l'ambiguïté entre
  /// `md:hidden` (variante + classe standalone) et `c:red` (identifiant + valeur).
  final Set<String> variants;

  const JxParser({this.variants = defaultVariants});

  static final RegExp _identifierPattern = RegExp(r'^[a-zA-Z][a-zA-Z0-9-]*$');
  static final RegExp _variantPattern = RegExp(r'^[a-zA-Z0-9][a-zA-Z0-9-]*$');
  static final RegExp _valuePattern = RegExp(r'^[a-zA-Z0-9.#%/-]+$');

  @override
  List<JxClassToken> parse(String classNames) {
    final trimmed = classNames.trim();
    if (trimmed.isEmpty) return const [];

    final results = <JxClassToken>[];
    for (final raw in trimmed.split(RegExp(r'\s+'))) {
      final token = parseToken(raw);
      if (token != null) results.add(token);
    }
    return results;
  }

  @override
  JxClassToken? parseToken(String rawClassName) {
    final raw = rawClassName.trim();
    if (raw.isEmpty) return null;

    var working = raw;
    var isImportant = false;

    // Modificateur d'importance (`!` final).
    if (working.endsWith('!')) {
      isImportant = true;
      working = working.substring(0, working.length - 1);
    }
    if (working.isEmpty) return null;

    final segments = _splitSegments(working);
    if (segments == null || segments.any((s) => s.isEmpty)) return null;

    // Consommation des variantes connues en tête, en laissant au moins un
    // segment pour l'identifiant.
    var index = 0;
    while (index < segments.length - 1 && variants.contains(segments[index])) {
      index++;
    }

    final rest = segments.sublist(index);
    final variantList = segments.sublist(0, index);
    String identifier;
    String? value;

    if (rest.length == 1) {
      identifier = rest.first;
    } else {
      // Les segments inconnus en surplus sont traités comme des variantes ;
      // le moteur signalera ensuite les variantes non supportées.
      variantList.addAll(rest.sublist(0, rest.length - 2));
      identifier = rest[rest.length - 2];
      value = rest.last;
    }

    if (!variantList.every(_variantPattern.hasMatch)) return null;

    // Gestion des valeurs négatives : `-m:4` ou `m:-4`.
    var isNegative = false;
    if (value != null && identifier.startsWith('-')) {
      isNegative = true;
      identifier = identifier.substring(1);
    }
    if (value != null && value.startsWith('-')) {
      if (isNegative) return null; // Double négation (`-m:-4`) refusée.
      isNegative = true;
      value = value.substring(1);
      if (value.isEmpty) return null;
    }

    if (!_identifierPattern.hasMatch(identifier)) return null;
    if (value != null && !_isValidValue(value)) return null;

    return JxClassToken(
      raw: raw,
      identifier: identifier,
      value: value,
      variants: List.unmodifiable(variantList),
      isImportant: isImportant,
      isNegative: isNegative,
    );
  }

  /// Découpe la classe sur `:` en ignorant les `:` situés entre crochets.
  /// Retourne `null` si les crochets ne sont pas équilibrés.
  List<String>? _splitSegments(String input) {
    final segments = <String>[];
    final buffer = StringBuffer();
    var depth = 0;

    for (final char in input.split('')) {
      if (char == '[') {
        depth++;
      } else if (char == ']') {
        depth--;
        if (depth < 0) return null;
      }

      if (char == ':' && depth == 0) {
        segments.add(buffer.toString());
        buffer.clear();
      } else {
        buffer.write(char);
      }
    }

    if (depth != 0) return null;
    segments.add(buffer.toString());
    return segments;
  }

  bool _isValidValue(String value) {
    if (value.startsWith('[')) {
      // Valeur arbitraire : crochets englobants, contenu non vide, sans
      // crochets imbriqués non équilibrés (déjà vérifiés au découpage).
      return value.length > 2 && value.endsWith(']');
    }
    return _valuePattern.hasMatch(value);
  }
}
