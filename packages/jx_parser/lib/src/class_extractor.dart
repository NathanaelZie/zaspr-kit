/// Extrait les classes candidates d'un contenu source quelconque
/// (Dart/Jaspr, HTML, Markdown…).
///
/// L'extraction est volontairement agnostique du langage : le contenu est
/// découpé sur les délimiteurs qui ne peuvent pas apparaître dans une classe
/// JX hors crochets (espaces, guillemets, chevrons, `=`, accolades, `;`,
/// virgules). Les candidats sont ensuite filtrés par le parseur puis par le
/// registre de règles : un mot ordinaire (`final`, `return`…) ne produit donc
/// aucun CSS.
///
/// Exemple : `div(classes: 'flex p:4 hover:bg:blue', [...])`
/// -> `div(classes:`, `flex`, `p:4`, `hover:bg:blue`, `[...])` ; seules les
/// trois classes valides seront retenues en aval.
final class JxClassExtractor {
  const JxClassExtractor();

  /// Délimiteurs hors crochets.
  static final RegExp _delimiter = RegExp(r'''[\s"'`<>={};,]''');

  /// Retourne les candidats uniques, dans l'ordre de première apparition.
  List<String> extract(String content) {
    final seen = <String>{};
    final buffer = StringBuffer();
    var depth = 0;

    void flush() {
      if (buffer.isEmpty) return;
      final candidate = _trim(buffer.toString());
      buffer.clear();
      if (candidate.isNotEmpty) seen.add(candidate);
    }

    for (var i = 0; i < content.length; i++) {
      final char = content[i];
      if (char == '[') {
        depth++;
      } else if (char == ']' && depth > 0) {
        depth--;
      }

      // Dans des crochets, seuls les blancs et guillemets ferment le candidat
      // (les virgules, `=` ou `;` restent permis : `[rgb(0,0,0)]`).
      final isBreak = depth > 0
          ? RegExp(r'''[\s"'`]''').hasMatch(char)
          : _delimiter.hasMatch(char);

      if (isBreak) {
        flush();
        depth = 0;
      } else {
        buffer.write(char);
      }
    }
    flush();

    return seen.toList();
  }

  /// Extraction spécialisée pour le code Dart : seuls les contenus des
  /// littéraux de chaîne sont analysés (y compris dans les interpolations
  /// `${cond ? 'p:4' : 'p:2'}`), ce qui évite les faux positifs liés aux
  /// mots-clés du langage (`static`, `final`…) et aux commentaires.
  List<String> extractFromDart(String content) {
    final strings = _DartStringCollector(content).collect();
    final seen = <String>{};
    for (final text in strings) {
      seen.addAll(extract(text));
    }
    return seen.toList();
  }

  /// Retire la ponctuation finale (`.`, `)`) héritée du texte environnant
  /// (`flex.` en fin de phrase, `Text(flex)`), sauf après une valeur
  /// arbitraire `[...]`.
  static String _trim(String candidate) {
    var result = candidate;
    while (result.isNotEmpty &&
        '.)'.contains(result[result.length - 1]) &&
        !result.endsWith(']')) {
      result = result.substring(0, result.length - 1);
    }
    return result;
  }
}

/// Collecteur des littéraux de chaîne d'un source Dart.
final class _DartStringCollector {
  final String source;
  final List<String> _strings = [];
  int _i = 0;

  _DartStringCollector(this.source);

  List<String> collect() {
    _scanCode(nested: false);
    return _strings;
  }

  bool _startsWith(String pattern) => source.startsWith(pattern, _i);

  /// Parcourt du code jusqu'à la fin du source, ou jusqu'à l'accolade fermante
  /// d'une interpolation lorsque [nested] est vrai.
  void _scanCode({required bool nested}) {
    var depth = 0;
    while (_i < source.length) {
      final char = source[_i];
      if (_startsWith('//')) {
        final end = source.indexOf('\n', _i);
        _i = end == -1 ? source.length : end + 1;
      } else if (_startsWith('/*')) {
        final end = source.indexOf('*/', _i + 2);
        _i = end == -1 ? source.length : end + 2;
      } else if (char == "'" || char == '"') {
        final isRaw =
            _i > 0 &&
            source[_i - 1] == 'r' &&
            (_i < 2 || !RegExp(r'[A-Za-z0-9_$]').hasMatch(source[_i - 2]));
        _scanString(raw: isRaw);
      } else if (nested && char == '{') {
        depth++;
        _i++;
      } else if (nested && char == '}') {
        _i++;
        if (depth == 0) return;
        depth--;
      } else {
        _i++;
      }
    }
  }

  void _scanString({required bool raw}) {
    final quote = source[_i];
    final triple = _startsWith(quote * 3);
    final delimiter = triple ? quote * 3 : quote;
    _i += delimiter.length;

    final buffer = StringBuffer();
    while (_i < source.length) {
      final char = source[_i];
      if (_startsWith(delimiter)) {
        _i += delimiter.length;
        break;
      }
      if (!triple && char == '\n') {
        _i++;
        break; // Chaîne non terminée : on s'arrête à la fin de ligne.
      }
      if (!raw && char == r'\') {
        _i += 2;
        buffer.write(' ');
      } else if (!raw && _startsWith(r'${')) {
        _i += 2;
        buffer.write(' ');
        _scanCode(nested: true);
      } else if (!raw && char == r'$') {
        // Interpolation simple `$name` : séparateur.
        _i++;
        while (_i < source.length &&
            RegExp(r'[A-Za-z0-9_]').hasMatch(source[_i])) {
          _i++;
        }
        buffer.write(' ');
      } else {
        buffer.write(char);
        _i++;
      }
    }
    _strings.add(buffer.toString());
  }
}
