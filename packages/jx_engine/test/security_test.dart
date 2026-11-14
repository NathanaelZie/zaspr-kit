import 'package:jx_engine/jx_engine.dart';
import 'package:test/test.dart';

void main() {
  final engine = JxEngine();

  group('Injection CSS de bout en bout', () {
    const attacks = [
      'c:[red;}body{display:none]',
      'c:[red}*{color:blue]',
      'bg:[url(javascript:alert(1))]',
      'c:[expression(alert(1))]',
      'c:[</style><script>alert(1)</script>]',
      'grad:[45deg,red);}body{x:(y]',
      'anim:[x;}@import_url(evil)]',
      'hover:w:[1px;position:fixed]',
    ];

    test('aucune règle générée, et un avertissement explicite', () {
      for (final attack in attacks) {
        final result = engine.compile(attack);
        expect(result.css, isEmpty, reason: attack);
        expect(result.rules, isEmpty, reason: attack);
        expect(result.unmatchedTokens, hasLength(1), reason: attack);
        expect(
          result.warnings.single,
          startsWith('Invalid class syntax:'),
          reason: attack,
        );
      }
    });

    test('le CSS d\'un mélange sain / hostile reste bien formé', () {
      final result = engine.compile('p:4 ${attacks.join(' ')} c:[#123456]');
      expect(result.matchedTokens.map((t) => t.raw), ['p:4', 'c:[#123456]']);
      final css = result.css;
      expect('{'.allMatches(css).length, '}'.allMatches(css).length);
      expect(css, isNot(contains('body')));
      expect(css, isNot(contains('script')));
      expect(css, isNot(contains('javascript')));
    });
  });

  test('l\'avertissement donne la raison du refus', () {
    expect(
      engine.compile('hover:hover:c:red').warnings.single,
      contains('repeated'),
    );
    expect(engine.compile('c:').warnings.single, contains('empty segment'));
  });

  test('valeurs arbitraires légitimes inchangées', () {
    final css = engine
        .compile('bg:[url(/img/my_file.png)] w:[calc(100%_-_2rem)] !p:4')
        .css;
    expect(css, contains('background-image: url(/img/my_file.png);'));
    expect(css, contains('width: calc(100% - 2rem);'));
    expect(css, contains('.\\!p\\:4 {\n  padding: 1rem !important;\n}'));
  });
}
