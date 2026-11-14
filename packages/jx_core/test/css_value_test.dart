import 'package:jx_core/jx_core.dart';
import 'package:test/test.dart';

void main() {
  group('JxCssValue.decodeArbitrary', () {
    test('les underscores deviennent des espaces', () {
      expect(
        JxCssValue.decodeArbitrary('calc(100%_-_1rem)'),
        'calc(100% - 1rem)',
      );
      expect(
        JxCssValue.decodeArbitrary("'Open_Sans',_serif"),
        "'Open Sans', serif",
      );
    });

    test(r'\_ donne un underscore littéral', () {
      expect(JxCssValue.decodeArbitrary(r'my\_font'), 'my_font');
      expect(JxCssValue.decodeArbitrary(r'a\_b_c'), 'a_b c');
    });

    test('les underscores d\'une URL sont conservés', () {
      expect(
        JxCssValue.decodeArbitrary('url(/img/my_file.png)_no-repeat'),
        'url(/img/my_file.png) no-repeat',
      );
      expect(
        JxCssValue.decodeArbitrary('URL(a_b),_url(c_(d)_e)_x_y'),
        'URL(a_b), url(c_(d)_e) x y',
      );
    });
  });

  group('JxCssValue.unsafeReason', () {
    test('valeurs légitimes acceptées', () {
      for (final value in [
        '#ff0000',
        'calc(100% - 2rem)',
        'rgb(0 0 0 / 0.5)',
        'linear-gradient(135deg, #fff, rgba(0,0,0,0.2))',
        'url(/img/hero.png)',
        'url(data:image/png;base64,AAAA)',
        'url("data:font/woff2;base64,AAAA")',
        "'Open Sans', sans-serif",
        'repeat(2, minmax(0, 1fr))',
        '[full-start] 1fr [full-end]',
        'wiggle 1s ease-in-out infinite',
      ]) {
        expect(JxCssValue.unsafeReason(value), isNull, reason: value);
      }
    });

    test('sortie de la déclaration refusée', () {
      for (final value in [
        'red;color:blue',
        'red}body{display:none',
        'red{',
        'red !important',
        'red/**/',
        '*/ x',
        r'red\3b ',
        '</style><script>alert(1)</script>',
        'red\nblue',
        'red\u0000',
        'calc(1px',
        'calc(1px))',
        '"abc',
      ]) {
        expect(JxCssValue.unsafeReason(value), isNotNull, reason: value);
      }
    });

    test('chargement de code refusé, sans tenir compte de la casse', () {
      for (final value in [
        'url(javascript:alert(1))',
        'url(JaVaScRiPt:alert(1))',
        'url(java script:alert(1))',
        'url(vbscript:x)',
        'expression(alert(1))',
        'EXPRESSION (alert(1))',
        '@import url(x)',
        'url(data:text/html,x)',
        'url(data:application/javascript,x)',
        '-moz-binding:url(x)',
      ]) {
        expect(JxCssValue.unsafeReason(value), isNotNull, reason: value);
      }
    });

    test('un point-virgule entre guillemets est accepté', () {
      expect(JxCssValue.unsafeReason('"a;b{c}"'), isNull);
    });

    test('valeur vide ou trop longue', () {
      expect(JxCssValue.unsafeReason('   '), isNotNull);
      expect(
        JxCssValue.unsafeReason('a' * (JxCssValue.maxLength + 1)),
        isNotNull,
      );
      expect(JxCssValue.isSafe('a' * JxCssValue.maxLength), isTrue);
    });
  });

  test('JxClassToken.arbitraryValue et copyWith', () {
    const token = JxClassToken(
      raw: 'bg:[url(a_b)_center]',
      identifier: 'bg',
      value: '[url(a_b)_center]',
    );
    expect(token.arbitraryValue, 'url(a_b) center');
    final copy = token.copyWith(isImportant: true);
    expect(copy.isImportant, isTrue);
    expect(copy.value, token.value);
  });
}
