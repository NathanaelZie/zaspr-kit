import 'package:jx_core/jx_core.dart';

/// Implémentation du parseur de syntaxe de classes pour le framework JX CSS.
///
/// Analyse les classes utilitaires selon la syntaxe propriétaire de JX CSS :
/// `[variantes:]identifiant[:valeur][!]`
/// Exemples :
/// - `flex` -> id: `flex`, value: null
/// - `c:red` -> id: `c`, value: `red`
/// - `hover:bg:blue` -> variants: `['hover']`, id: `bg`, value: `blue`
/// - `p:4!` -> id: `p`, value: `4`, important: true
final class JxParser implements JxParserContract {
  const JxParser();

  @override
  List<JxClassToken> parse(String classNames) {
    final trimmed = classNames.trim();
    if (trimmed.isEmpty) return const [];

    final rawTokens = trimmed.split(RegExp(r'\s+'));
    final results = <JxClassToken>[];

    for (final raw in rawTokens) {
      final token = parseToken(raw);
      if (token != null) {
        results.add(token);
      }
    }

    return results;
  }

  @override
  JxClassToken? parseToken(String rawClassName) {
    final raw = rawClassName.trim();
    if (raw.isEmpty) return null;

    var working = raw;
    var isImportant = false;

    // Détection du modificateur d'importance (ex: `!`)
    if (working.endsWith('!')) {
      isImportant = true;
      working = working.substring(0, working.length - 1);
    }

    if (working.isEmpty) return null;

    final segments = working.split(':');
    if (segments.isEmpty) return null;

    final variants = <String>[];
    String identifier;
    String? value;

    if (segments.length == 1) {
      // Classe simple sans modificateur ni valeur (ex: `flex`, `hidden`)
      identifier = segments.first;
    } else if (segments.length == 2) {
      // Cas simple utilitaire:valeur (ex: `c:red`, `p:4`)
      identifier = segments[0];
      value = segments[1];
    } else {
      // Cas avec variantes (ex: `hover:bg:blue`, `md:hover:p:4`)
      variants.addAll(segments.sublist(0, segments.length - 2));
      identifier = segments[segments.length - 2];
      value = segments.last;
    }

    return JxClassToken(
      raw: raw,
      identifier: identifier,
      value: value,
      variants: List.unmodifiable(variants),
      isImportant: isImportant,
    );
  }
}
