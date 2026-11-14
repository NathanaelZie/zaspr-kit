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
///
/// L'extracteur traite les sources comme une entrée non fiable : son temps
/// d'exécution est linéaire, les candidats trop longs sont écartés et la
/// profondeur des interpolations Dart analysées est bornée.
final class JxClassExtractor {
  /// Longueur maximale d'un candidat par défaut.
  static const int defaultMaxCandidateLength = 512;

  /// Longueur au-delà de laquelle un candidat est écarté.
  final int maxCandidateLength;

  const JxClassExtractor({this.maxCandidateLength = defaultMaxCandidateLength});

  /// Blanc ou guillemet : ferme toujours un candidat.
  static bool _isHardBreak(int code) =>
      code <= 0x20 ||
      code == 0xA0 ||
      code == 0x22 ||
      code == 0x27 ||
      code == 0x60;

  /// Délimiteurs supplémentaires hors crochets : `< > = { } ; ,`.
  static bool _isSoftBreak(int code) =>
      code == 0x3C ||
      code == 0x3E ||
      code == 0x3D ||
      code == 0x7B ||
      code == 0x7D ||
      code == 0x3B ||
      code == 0x2C;

  /// Retourne les candidats uniques, dans l'ordre de première apparition.
  List<String> extract(String content) {
    final seen = <String>{};
    var depth = 0;
    var start = -1; // Début du candidat en cours, ou -1.

    void flush(int end) {
      if (start < 0) return;
      // Un candidat trop long n'est jamais une classe : inutile de le copier.
      if (end - start <= maxCandidateLength) {
        final candidate = _trim(content.substring(start, end));
        if (candidate.isNotEmpty) seen.add(candidate);
      }
      start = -1;
    }

    for (var i = 0; i < content.length; i++) {
      final code = content.codeUnitAt(i);
      if (code == 0x5B) {
        depth++;
      } else if (code == 0x5D && depth > 0) {
        depth--;
      }

      // Dans des crochets, seuls les blancs et guillemets ferment le candidat
      // (les virgules, `=` ou `;` restent permis : `[rgb(0,0,0)]`).
      final isBreak = _isHardBreak(code) || (depth == 0 && _isSoftBreak(code));

      if (isBreak) {
        flush(i);
        depth = 0;
      } else if (start < 0) {
        start = i;
      }
    }
    flush(content.length);

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
    var end = candidate.length;
    while (end > 0) {
      final code = candidate.codeUnitAt(end - 1);
      if (code != 0x2E && code != 0x29) break; // `.` ou `)`
      end--;
    }
    return end == candidate.length ? candidate : candidate.substring(0, end);
  }
}

/// Collecteur des littéraux de chaîne d'un source Dart.
final class _DartStringCollector {
  /// Profondeur maximale d'interpolations imbriquées analysées. Au-delà, le
  /// reste est lu comme du texte : aucune source réelle n'approche cette
  /// limite, et elle évite un dépassement de pile sur une entrée hostile.
  static const int _maxDepth = 32;

  final String source;
  final List<String> _strings = [];
  int _i = 0;
  int _depth = 0;

  static bool _isIdentifierChar(int code) =>
      (code >= 0x30 && code <= 0x39) ||
      (code >= 0x41 && code <= 0x5A) ||
      (code >= 0x61 && code <= 0x7A) ||
      code == 0x5F ||
      code == 0x24;

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
            (_i < 2 || !_isIdentifierChar(source.codeUnitAt(_i - 2)));
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
      } else if (!raw && _startsWith(r'${') && _depth < _maxDepth) {
        _i += 2;
        buffer.write(' ');
        _depth++;
        _scanCode(nested: true);
        _depth--;
      } else if (!raw && char == r'$') {
        // Interpolation simple `$name` : séparateur.
        _i++;
        while (_i < source.length &&
            _isIdentifierChar(source.codeUnitAt(_i)) &&
            source.codeUnitAt(_i) != 0x24) {
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
