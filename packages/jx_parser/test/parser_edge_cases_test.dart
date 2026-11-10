import 'package:jx_parser/jx_parser.dart';
import 'package:test/test.dart';

void main() {
  const parser = JxParser();

  group('Valeurs arbitraires', () {
    test('c:[#ff0000]', () {
      final token = parser.parseToken('c:[#ff0000]')!;
      expect(token.identifier, 'c');
      expect(token.value, '[#ff0000]');
      expect(token.isArbitrary, isTrue);
      expect(token.arbitraryValue, '#ff0000');
    });

    test('w:[200px] avec important', () {
      final token = parser.parseToken('w:[200px]!')!;
      expect(token.arbitraryValue, '200px');
      expect(token.isImportant, isTrue);
    });

    test('les deux-points entre crochets ne découpent pas la classe', () {
      final token = parser.parseToken('hover:bg:[url(a:b)]')!;
      expect(token.variants, ['hover']);
      expect(token.identifier, 'bg');
      expect(token.arbitraryValue, 'url(a:b)');
    });

    test('les underscores deviennent des espaces', () {
      final token = parser.parseToken('w:[calc(100%_-_1rem)]')!;
      expect(token.arbitraryValue, 'calc(100% - 1rem)');
    });

    test('crochets non équilibrés ou vides -> null', () {
      expect(parser.parseToken('c:[#fff'), isNull);
      expect(parser.parseToken('c:#fff]'), isNull);
      expect(parser.parseToken('c:[]'), isNull);
    });
  });

  group('Valeurs négatives', () {
    test('m:-4', () {
      final token = parser.parseToken('m:-4')!;
      expect(token.identifier, 'm');
      expect(token.value, '4');
      expect(token.isNegative, isTrue);
    });

    test('-m:4', () {
      final token = parser.parseToken('-m:4')!;
      expect(token.identifier, 'm');
      expect(token.value, '4');
      expect(token.isNegative, isTrue);
    });

    test('md:-mt:2', () {
      final token = parser.parseToken('md:-mt:2')!;
      expect(token.variants, ['md']);
      expect(token.identifier, 'mt');
      expect(token.isNegative, isTrue);
    });

    test('double négation et signe seul refusés', () {
      expect(parser.parseToken('-m:-4'), isNull);
      expect(parser.parseToken('m:-'), isNull);
    });
  });

  group('Classes standalone et variantes', () {
    test('md:hidden -> variante + standalone', () {
      final token = parser.parseToken('md:hidden')!;
      expect(token.variants, ['md']);
      expect(token.identifier, 'hidden');
      expect(token.value, isNull);
    });

    test('hover:md:flex -> deux variantes + standalone', () {
      final token = parser.parseToken('hover:md:flex')!;
      expect(token.variants, ['hover', 'md']);
      expect(token.identifier, 'flex');
    });

    test('variantes personnalisées', () {
      const custom = JxParser(variants: {'dark'});
      final token = custom.parseToken('dark:hidden')!;
      expect(token.variants, ['dark']);
      expect(token.identifier, 'hidden');
      // `md` n'est plus connu : interprété comme identifiant:valeur.
      expect(custom.parseToken('md:hidden')!.identifier, 'md');
    });
  });

  group('Robustesse', () {
    test('segments vides refusés', () {
      for (final raw in ['c:', ':red', 'hover::red', '!', '::']) {
        expect(parser.parseToken(raw), isNull, reason: raw);
      }
    });

    test('identifiants invalides refusés', () {
      expect(parser.parseToken('1abc'), isNull);
      expect(parser.parseToken('c@:red'), isNull);
    });

    test('valeurs avec caractères interdits refusées', () {
      expect(parser.parseToken('c:re{d'), isNull);
      expect(parser.parseToken('c:red;'), isNull);
    });

    test(
      'parse ignore les classes invalides et gère les espaces multiples',
      () {
        final tokens = parser.parse('  flex \n\t c: p:4   ');
        expect(tokens.map((t) => t.raw), ['flex', 'p:4']);
      },
    );

    test('valeurs fractionnaires et hexadécimales', () {
      expect(parser.parseToken('w:1/2')!.value, '1/2');
      expect(parser.parseToken('c:#fff')!.value, '#fff');
    });
  });
}
