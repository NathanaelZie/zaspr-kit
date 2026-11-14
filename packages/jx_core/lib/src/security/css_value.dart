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

  /// Motifs refusés où qu'ils apparaissent (comparaison sans casse ni blancs).
  static const Map<String, String> _forbidden = {
    'expression(': 'la fonction expression() est interdite',
    'javascript:': 'le schéma javascript: est interdit',
    'vbscript:': 'le schéma vbscript: est interdit',
    '-moz-binding': '-moz-binding est interdit',
    'behavior:': 'behavior est interdit',
    '@import': '@import est interdit',
    '@charset': '@charset est interdit',
  };

  /// Retourne la raison pour laquelle [value] ne peut pas être écrite dans
  /// une déclaration CSS, ou `null` si elle est sûre.
  ///
  /// [value] est la valeur décodée (voir [decodeArbitrary]).
  static String? unsafeReason(String value) {
    if (value.trim().isEmpty) return 'valeur vide';
    if (value.length > maxLength) {
      return 'valeur trop longue (plus de $maxLength caractères)';
    }

    int? quote;
    var parens = 0;
    // Profondeur de parenthèses à laquelle un `url(` est ouvert, ou -1. Un
    // `;` y est permis : il fait partie de l'URL (`data:image/png;base64,…`).
    var urlAt = -1;
    for (var i = 0; i < value.length; i++) {
      final code = value.codeUnitAt(i);
      if (code < 0x20 || code == 0x7F) return 'caractère de contrôle interdit';
      if (code == _backslash) return 'caractère "\\" interdit';
      if (code == 0x3C) return 'caractère "<" interdit';
      if (code == 0x2F &&
          i + 1 < value.length &&
          value.codeUnitAt(i + 1) == 0x2A) {
        return 'commentaire CSS interdit';
      }
      if (code == 0x2A &&
          i + 1 < value.length &&
          value.codeUnitAt(i + 1) == 0x2F) {
        return 'commentaire CSS interdit';
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
          if (urlAt < 0 && i >= 3 && _startsUrl(value, i - 3)) urlAt = parens;
        case _closeParen:
          if (parens == urlAt) urlAt = -1;
          if (--parens < 0) return 'parenthèses non équilibrées';
        case 0x3B: // ;
          if (urlAt < 0) return 'caractère ";" interdit';
        case 0x7B || 0x7D: // { }
          return 'accolades interdites';
        case 0x21: // !
          return 'caractère "!" interdit (utilisez le suffixe ! de la classe)';
      }
    }
    if (quote != null) return 'guillemets non fermés';
    if (parens != 0) return 'parenthèses non équilibrées';

    final compact = value.toLowerCase().replaceAll(RegExp(r'\s+'), '');
    if (compact.startsWith('@')) return 'règle @ interdite';
    for (final entry in _forbidden.entries) {
      if (compact.contains(entry.key)) return entry.value;
    }
    // `data:` n'est accepté que pour des images et des polices.
    var index = compact.indexOf('data:');
    while (index != -1) {
      final rest = compact.substring(index + 5);
      if (!rest.startsWith('image/') && !rest.startsWith('font/')) {
        return 'seules les URL data: d\'image ou de police sont acceptées';
      }
      index = compact.indexOf('data:', index + 5);
    }
    return null;
  }

  /// Indique si [value] peut être écrite telle quelle dans une déclaration.
  static bool isSafe(String value) => unsafeReason(value) == null;
}
