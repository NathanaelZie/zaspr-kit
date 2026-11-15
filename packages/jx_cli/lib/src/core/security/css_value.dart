/// Décodage et validation des valeurs CSS fournies par l'utilisateur.
///
/// Les valeurs arbitraires (`c:[…]`) sont la seule partie d'une classe JX
/// recopiée telle quelle dans la feuille de style. Elles sont donc traitées
/// comme une entrée non fiable : une valeur ne doit jamais pouvoir fermer sa
/// déclaration (`;`, `}`), ouvrir un bloc (`{`), sortir d'une balise
/// `<style>` (`<`), ni charger du code (`javascript:`, `expression(`…).
abstract final class JxCssValue {
  /// Longueur maximale d'une valeur arbitraire décodée.
  static const int maxLength = 512;

  static const int _backslash = 0x5C;
  static const int _underscore = 0x5F;
  static const int _doubleQuote = 0x22;
  static const int _singleQuote = 0x27;
  static const int _openParen = 0x28;
  static const int _closeParen = 0x29;

  /// Décode le contenu d'une valeur arbitraire (sans ses crochets).
  ///
  /// - `_` devient une espace : `calc(100%_-_1rem)` -> `calc(100% - 1rem)` ;
  /// - `\_` devient un `_` littéral : `Open\_Sans` -> `Open_Sans` ;
  /// - les `_` d'un `url(…)` sont conservés : `url(/img/my_file.png)`.
  static String decodeArbitrary(String inner) {
    final out = StringBuffer();
    var urlDepth = 0; // > 0 : à l'intérieur de `url(`.
    for (var i = 0; i < inner.length; i++) {
      final code = inner.codeUnitAt(i);
      if (code == _backslash &&
          i + 1 < inner.length &&
          inner.codeUnitAt(i + 1) == _underscore) {
        out.writeCharCode(_underscore);
        i++;
        continue;
      }
      if (urlDepth == 0 && _startsUrl(inner, i)) {
        urlDepth = 1;
        out.write(inner.substring(i, i + 4));
        i += 3;
        continue;
      }
      if (urlDepth > 0) {
        if (code == _openParen) urlDepth++;
        if (code == _closeParen) urlDepth--;
        out.writeCharCode(code);
        continue;
      }
      out.writeCharCode(code == _underscore ? 0x20 : code);
    }
    return out.toString();
  }

  static bool _startsUrl(String s, int i) =>
      i + 4 <= s.length && s.substring(i, i + 4).toLowerCase() == 'url(';

  /// Indique si la `(` en position [paren] ouvre la fonction `url(` (et non
  /// `my-url(`).
  static bool _isUrlFunction(String s, int paren) {
    if (paren < 3 || !_startsUrl(s, paren - 3)) return false;
    if (paren == 3) return true;
    final before = s.codeUnitAt(paren - 4);
    final isIdent =
        (before >= 0x30 && before <= 0x39) ||
        (before >= 0x41 && before <= 0x5A) ||
        (before >= 0x61 && before <= 0x7A) ||
        before == 0x2D ||
        before == _underscore ||
        before >= 0x80;
    return !isIdent;
  }

  /// Motifs refusés où qu'ils apparaissent (comparaison sans casse ni blancs).
  static const Map<String, String> _forbidden = {
    'expression(': 'the expression() function is not allowed',
    'javascript:': 'the javascript: scheme is not allowed',
    'vbscript:': 'the vbscript: scheme is not allowed',
    '-moz-binding': '-moz-binding is not allowed',
    'behavior:': 'behavior is not allowed',
    '@import': '@import is not allowed',
    '@charset': '@charset is not allowed',
  };

  /// Retourne la raison pour laquelle [value] ne peut pas être écrite dans
  /// une déclaration CSS, ou `null` si elle est sûre.
  ///
  /// [value] est la valeur décodée (voir [decodeArbitrary]).
  static String? unsafeReason(String value) {
    if (value.trim().isEmpty) return 'empty value';
    if (value.length > maxLength) {
      return 'value too long (more than $maxLength characters)';
    }

    int? quote;
    var parens = 0;
    // `true` dans un `url(` sans guillemets. Le navigateur y lit un seul
    // token qui finit à la première `)`. Un `;` y est permis : il fait
    // partie de l'URL (`data:image/png;base64,…`). Un guillemet, une `(` ou
    // une espace rendent l'URL invalide : le navigateur la coupe alors à la
    // première `)`, et la suite sortirait de la déclaration.
    var rawUrl = false;
    for (var i = 0; i < value.length; i++) {
      final code = value.codeUnitAt(i);
      if (code < 0x20 || code == 0x7F) return 'control character not allowed';
      if (code == _backslash) return 'character "\\" not allowed';
      if (code == 0x3C) return 'character "<" not allowed';
      // Refusées partout, même entre guillemets : une accolade qui
      // échapperait à l'analyse fermerait la règle.
      if (code == 0x7B || code == 0x7D) return 'braces are not allowed';
      if (code == 0x21) {
        return 'character "!" not allowed (use the class ! suffix)';
      }
      if (code == 0x2F &&
          i + 1 < value.length &&
          value.codeUnitAt(i + 1) == 0x2A) {
        return 'CSS comments are not allowed';
      }
      if (code == 0x2A &&
          i + 1 < value.length &&
          value.codeUnitAt(i + 1) == 0x2F) {
        return 'CSS comments are not allowed';
      }
      if (rawUrl) {
        if (code == _closeParen) {
          rawUrl = false;
          parens--;
        } else if (code == _doubleQuote ||
            code == _singleQuote ||
            code == _openParen ||
            code == 0x20) {
          return 'quotes, "(" and spaces are not allowed in an unquoted url()';
        }
        continue;
      }
      if (quote != null) {
        if (code == quote) quote = null;
        continue;
      }
      switch (code) {
        case _doubleQuote || _singleQuote:
          quote = code;
        case _openParen:
          parens++;
          if (_isUrlFunction(value, i)) {
            final next = i + 1 < value.length ? value.codeUnitAt(i + 1) : -1;
            rawUrl = next != _doubleQuote && next != _singleQuote;
          }
        case _closeParen:
          if (--parens < 0) return 'unbalanced parentheses';
        case 0x3B: // ;
          return 'character ";" not allowed';
      }
    }
    if (rawUrl) return 'unbalanced parentheses';
    if (quote != null) return 'unclosed quotes';
    if (parens != 0) return 'unbalanced parentheses';

    final compact = value.toLowerCase().replaceAll(RegExp(r'\s+'), '');
    if (compact.startsWith('@')) return '@ rule not allowed';
    for (final entry in _forbidden.entries) {
      if (compact.contains(entry.key)) return entry.value;
    }
    // `data:` n'est accepté que pour des images et des polices.
    var index = compact.indexOf('data:');
    while (index != -1) {
      final rest = compact.substring(index + 5);
      if (!rest.startsWith('image/') && !rest.startsWith('font/')) {
        return 'only image or font data: URLs are allowed';
      }
      index = compact.indexOf('data:', index + 5);
    }
    return null;
  }

  /// Indique si [value] peut être écrite telle quelle dans une déclaration.
  static bool isSafe(String value) => unsafeReason(value) == null;
}
