import 'package:jx_core/jx_core.dart';

import 'diagnostics.dart';

/// Implémentation du parseur de syntaxe de classes pour le framework JX CSS.
///
/// Analyse les classes utilitaires selon la syntaxe de JX CSS :
/// `[variante1:variante2:]identifiant[:valeur][!]`
///
/// Exemples :
/// - `flex` -> id: `flex`, value: null
/// - `c:red` -> id: `c`, value: `red`
/// - `hover:bg:blue` -> variants: `['hover']`, id: `bg`, value: `blue`
/// - `md:hidden` -> variants: `['md']`, id: `hidden`
/// - `p:4!` ou `!p:4` -> id: `p`, value: `4`, important: true
/// - `c:[#ff0000]` -> id: `c`, value: `[#ff0000]` (valeur arbitraire)
/// - `m:-4` / `-m:4` -> id: `m`, value: `4`, negative: true
///
/// [parseToken] retourne `null` pour une classe invalide ; [analyze] en donne
/// la raison sous forme de [JxParseFailure].
///
/// Le parseur traite toute entrée comme non fiable : la longueur des classes
/// et le nombre de variantes sont bornés, et une valeur arbitraire qui
/// pourrait injecter du CSS est refusée (voir [JxCssValue.unsafeReason]).
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
    // Préférences et médias
    'dark', 'motion-safe', 'motion-reduce', 'contrast-more', 'portrait',
    'landscape', 'print',
    // Groupes et pairs (`group` / `peer` sur l'élément de référence)
    'group-hover', 'group-focus', 'group-active', 'group-focus-within',
    'group-focus-visible', 'group-disabled', 'group-checked', 'group-invalid',
    'group-first', 'group-last', 'group-odd', 'group-even',
    'peer-hover', 'peer-focus', 'peer-active', 'peer-focus-visible',
    'peer-disabled', 'peer-checked', 'peer-invalid', 'peer-valid',
    'peer-required', 'peer-placeholder-shown', 'peer-user-invalid',
  };

  /// Longueur maximale d'une classe par défaut.
  static const int defaultMaxClassLength = 512;

  /// Nombre maximal de variantes par classe par défaut.
  static const int defaultMaxVariants = 8;

  /// Variantes reconnues. Elles permettent de lever l'ambiguïté entre
  /// `md:hidden` (variante + classe standalone) et `c:red` (identifiant + valeur).
  final Set<String> variants;

  /// Longueur maximale d'une classe ; au-delà, elle est refusée sans analyse.
  final int maxClassLength;

  /// Nombre maximal de variantes cumulées sur une classe.
  final int maxVariants;

  const JxParser({
    this.variants = defaultVariants,
    this.maxClassLength = defaultMaxClassLength,
    this.maxVariants = defaultMaxVariants,
  });

  /// Identifiant : lettres, chiffres et tirets simples (`inline-flex`).
  static final RegExp _identifierPattern = RegExp(
    r'^[a-zA-Z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*$',
  );

  /// Variante : comme un identifiant, mais peut commencer par un chiffre (`2xl`).
  static final RegExp _variantPattern = RegExp(
    r'^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$',
  );

  /// Valeur simple : couleur hexadécimale (`#fff`) ou mots séparés par `.`,
  /// `-` ou `/` (`teal-700`, `1.5`, `1/2`), avec `%` final facultatif.
  static final RegExp _valuePattern = RegExp(
    r'^(?:#[0-9a-fA-F]{3,8}|[a-zA-Z0-9]+(?:[.\-/][a-zA-Z0-9]+)*%?)$',
  );

  static final RegExp _whitespace = RegExp(r'\s+');

  @override
  List<JxClassToken> parse(String classNames) => analyzeAll(classNames).tokens;

  @override
  JxClassToken? parseToken(String rawClassName) => analyze(rawClassName).token;

  /// Analyse une liste de classes séparées par des blancs et retourne les
  /// tokens valides ainsi que le détail de chaque classe refusée.
  JxParseReport analyzeAll(String classNames) {
    final tokens = <JxClassToken>[];
    final failures = <JxParseFailure>[];
    final trimmed = classNames.trim();
    if (trimmed.isNotEmpty) {
      for (final raw in trimmed.split(_whitespace)) {
        final outcome = analyze(raw);
        final token = outcome.token;
        if (token != null) {
          tokens.add(token);
        } else {
          failures.add(outcome.failure!);
        }
      }
    }
    return JxParseReport(
      tokens: List.unmodifiable(tokens),
      failures: List.unmodifiable(failures),
    );
  }

  /// Analyse une classe et retourne son token, ou la raison du refus.
  JxParseOutcome analyze(String rawClassName) {
    final raw = rawClassName.trim();

    JxParseOutcome fail(JxParseErrorCode code, String message) =>
        JxParseOutcome.failure(
          JxParseFailure(raw: _preview(raw), code: code, message: message),
        );

    if (raw.isEmpty) return fail(JxParseErrorCode.empty, 'classe vide');
    if (raw.length > maxClassLength) {
      return fail(
        JxParseErrorCode.tooLong,
        'class too long (more than $maxClassLength characters)',
      );
    }
    for (var i = 0; i < raw.length; i++) {
      final code = raw.codeUnitAt(i);
      if (code <= 0x20 || code == 0x7F) {
        return fail(
          JxParseErrorCode.invalidCharacter,
          'space or control character not allowed',
        );
      }
    }

    // Modificateur d'importance : `!` final (`p:4!`) ou initial (`!p:4`).
    var working = raw;
    var isImportant = false;
    if (working.endsWith('!')) {
      isImportant = true;
      working = working.substring(0, working.length - 1);
    } else if (working.startsWith('!')) {
      isImportant = true;
      working = working.substring(1);
    }
    if (working.isEmpty) {
      return fail(JxParseErrorCode.empty, 'class is only "!"');
    }

    final List<String> segments;
    try {
      segments = _splitSegments(working);
    } on FormatException catch (e) {
      return fail(JxParseErrorCode.unbalancedBrackets, e.message);
    }
    if (segments.any((s) => s.isEmpty)) {
      return fail(
        JxParseErrorCode.emptySegment,
        'empty segment (extra ":" or missing value)',
      );
    }

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

    if (variantList.length > maxVariants) {
      return fail(
        JxParseErrorCode.tooManyVariants,
        'too many variants (maximum $maxVariants)',
      );
    }
    final seen = <String>{};
    for (final variant in variantList) {
      if (!_variantPattern.hasMatch(variant)) {
        return fail(
          JxParseErrorCode.invalidVariant,
          'invalid variant "$variant"',
        );
      }
      if (!seen.add(variant)) {
        return fail(
          JxParseErrorCode.duplicateVariant,
          'repeated variant "$variant"',
        );
      }
    }

    // Valeurs négatives : `-m:4` ou `m:-4`.
    var isNegative = false;
    if (identifier.startsWith('-')) {
      if (value == null) {
        return fail(
          JxParseErrorCode.invalidNegative,
          'the "-" sign needs a value (for example "-m:4")',
        );
      }
      isNegative = true;
      identifier = identifier.substring(1);
    }
    if (value != null && value.startsWith('-')) {
      if (isNegative) {
        return fail(
          JxParseErrorCode.invalidNegative,
          'double negation ("-m:-4")',
        );
      }
      isNegative = true;
      value = value.substring(1);
      if (value.isEmpty || value.startsWith('-')) {
        return fail(
          JxParseErrorCode.invalidNegative,
          'incomplete negative value',
        );
      }
    }

    if (!_identifierPattern.hasMatch(identifier)) {
      return fail(
        JxParseErrorCode.invalidIdentifier,
        identifier.contains('!')
            ? '"!" goes at the start or the end of the class'
            : 'invalid utility "$identifier"',
      );
    }

    if (value != null) {
      final problem = _checkValue(value);
      if (problem != null) return fail(problem.$1, problem.$2);
    }

    return JxParseOutcome.success(
      JxClassToken(
        raw: raw,
        identifier: identifier,
        value: value,
        variants: List.unmodifiable(variantList),
        isImportant: isImportant,
        isNegative: isNegative,
      ),
    );
  }

  /// Découpe la classe sur `:` en ignorant les `:` situés entre crochets.
  /// Lève une [FormatException] si les crochets ne sont pas équilibrés.
  static List<String> _splitSegments(String input) {
    final segments = <String>[];
    var depth = 0;
    var start = 0;

    for (var i = 0; i < input.length; i++) {
      final code = input.codeUnitAt(i);
      if (code == 0x5B) {
        depth++;
      } else if (code == 0x5D) {
        if (--depth < 0) {
          throw const FormatException('"]" without a matching "["');
        }
      } else if (code == 0x3A && depth == 0) {
        segments.add(input.substring(start, i));
        start = i + 1;
      }
    }

    if (depth != 0) throw const FormatException('unclosed "["');
    segments.add(input.substring(start));
    return segments;
  }

  /// Retourne le problème de [value], ou `null` si elle est valide.
  static (JxParseErrorCode, String)? _checkValue(String value) {
    if (!value.startsWith('[')) {
      if (_valuePattern.hasMatch(value)) return null;
      return (
        JxParseErrorCode.invalidValue,
        value.contains('!')
            ? '"!" goes at the start or the end of the class'
            : 'invalid value "${_preview(value)}" '
                  '(use brackets for a free-form value)',
      );
    }
    if (!value.endsWith(']')) {
      return (
        JxParseErrorCode.invalidValue,
        'an arbitrary value ends with "]"',
      );
    }
    final inner = value.substring(1, value.length - 1);
    final decoded = JxCssValue.decodeArbitrary(inner);
    if (decoded.trim().isEmpty) {
      return (JxParseErrorCode.invalidValue, 'empty arbitrary value');
    }
    final reason = JxCssValue.unsafeReason(decoded);
    if (reason != null) {
      return (JxParseErrorCode.unsafeValue, 'value rejected: $reason');
    }
    return null;
  }

  /// Version courte d'une entrée, pour les messages.
  static String _preview(String text) =>
      text.length <= 80 ? text : '${text.substring(0, 77)}…';
}
