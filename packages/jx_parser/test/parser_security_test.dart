import 'package:jx_parser/jx_parser.dart';
import 'package:test/test.dart';

void main() {
  const parser = JxParser();

  JxParseErrorCode? codeOf(String raw) => parser.analyze(raw).failure?.code;

  group('Sécurité des valeurs arbitraires', () {
    test('injection CSS refusée', () {
      for (final raw in [
        'c:[red;}body{display:none]',
        'c:[red}*{color:blue]',
        'bg:[url(javascript:alert(1))]',
        'c:[expression(alert(1))]',
        'c:[red/**/]',
        'c:[</style><script>alert(1)</script>]',
        'c:[@import_url(x)]',
        'c:[red_!important]',
        'c:[red\u0000]',
        r'c:[re\64 ]',
      ]) {
        expect(parser.parseToken(raw), isNull, reason: raw);
        expect(
          codeOf(raw),
          anyOf(
            JxParseErrorCode.unsafeValue,
            JxParseErrorCode.invalidCharacter,
          ),
          reason: raw,
        );
      }
    });

    test('la raison du refus est fournie', () {
      final failure = parser.analyze('c:[red;}x{]').failure!;
      expect(failure.isSecurityRelated, isTrue);
      expect(failure.message, contains('";"'));
      expect('$failure', startsWith('Classe "c:[red;}x{]" invalide :'));
    });

    test('valeurs arbitraires légitimes acceptées', () {
      expect(
        parser.parseToken('bg:[url(/img/my_file.png)]')!.arbitraryValue,
        'url(/img/my_file.png)',
      );
      expect(
        parser.parseToken(r'ff:[Open\_Sans]')!.arbitraryValue,
        'Open_Sans',
      );
      expect(
        parser.parseToken('cols:[[a]_1fr_[b]]')!.arbitraryValue,
        '[a] 1fr [b]',
      );
      expect(
        parser.parseToken('bg:[linear-gradient(135deg,#fff,rgba(0,0,0,0.2))]'),
        isNotNull,
      );
    });
  });

  group('Limites', () {
    test('classe trop longue', () {
      final raw = 'c:[${'a' * 600}]';
      final failure = parser.analyze(raw).failure!;
      expect(failure.code, JxParseErrorCode.tooLong);
      expect(failure.raw.length, lessThanOrEqualTo(80));
    });

    test('trop de variantes', () {
      const variants = [
        'hover',
        'focus',
        'active',
        'md',
        'dark',
        'first',
        'last',
        'odd',
        'even',
      ];
      expect(
        codeOf('${variants.join(':')}:c:red'),
        JxParseErrorCode.tooManyVariants,
      );
      expect(
        parser.parseToken('${variants.take(8).join(':')}:c:red'),
        isNotNull,
      );
    });

    test('limites configurables', () {
      const strict = JxParser(maxClassLength: 10, maxVariants: 1);
      expect(strict.parseToken('c:red'), isNotNull);
      expect(strict.parseToken('c:gray-900-x'), isNull);
      expect(strict.parseToken('md:hover:p:4'), isNull);
    });

    test('entrée hostile traitée en temps borné', () {
      final watch = Stopwatch()..start();
      parser.analyze('${'hover:' * 50000}c:red');
      parser.analyze('c:${'[' * 100000}');
      parser.analyzeAll('p:4 ' * 20000);
      expect(watch.elapsed, lessThan(const Duration(seconds: 2)));
    });
  });

  group('Diagnostics', () {
    test('code d\'erreur par cas', () {
      const cases = {
        '': JxParseErrorCode.empty,
        '!': JxParseErrorCode.empty,
        'c:': JxParseErrorCode.emptySegment,
        ':c:red': JxParseErrorCode.emptySegment,
        'c::red': JxParseErrorCode.emptySegment,
        'c:[#fff': JxParseErrorCode.unbalancedBrackets,
        'c:#fff]': JxParseErrorCode.unbalancedBrackets,
        'hover:hover:c:red': JxParseErrorCode.duplicateVariant,
        'a_b:c:red': JxParseErrorCode.invalidVariant,
        '-flex': JxParseErrorCode.invalidNegative,
        '-m:-4': JxParseErrorCode.invalidNegative,
        'm:--4': JxParseErrorCode.invalidNegative,
        'm:-': JxParseErrorCode.invalidNegative,
        '1abc': JxParseErrorCode.invalidIdentifier,
        'c@:red': JxParseErrorCode.invalidIdentifier,
        'a--b:red': JxParseErrorCode.invalidIdentifier,
        'c:red!!': JxParseErrorCode.invalidValue,
        'c:re{d': JxParseErrorCode.invalidValue,
        'c:[a]b': JxParseErrorCode.invalidValue,
        'c:[]': JxParseErrorCode.invalidValue,
        'c:[_]': JxParseErrorCode.invalidValue,
        'p:1..5': JxParseErrorCode.invalidValue,
        'w:/': JxParseErrorCode.invalidValue,
        'w:1//2': JxParseErrorCode.invalidValue,
        'c:#': JxParseErrorCode.invalidValue,
        'p:4-': JxParseErrorCode.invalidValue,
        'p:.5': JxParseErrorCode.invalidValue,
      };
      cases.forEach((raw, code) {
        expect(codeOf(raw), code, reason: '"$raw"');
        expect(parser.parseToken(raw), isNull, reason: '"$raw"');
      });
    });

    test('valeurs simples acceptées', () {
      for (final raw in [
        'p:4',
        'p:0.5',
        'w:1/2',
        'c:teal-700',
        'c:#fff',
        'c:#11223344',
        'fs:2xl',
        'w:50%',
        'ar:16/9',
        'grad:to-tr',
        'md:hidden',
        '2xl:p:4',
        'group-hover:c:red',
        'inline-flex',
        'sr-only',
      ]) {
        expect(parser.analyze(raw).isValid, isTrue, reason: raw);
      }
    });

    test('analyzeAll sépare tokens et refus', () {
      final report = parser.analyzeAll('flex c: p:4 c:[a;b]');
      expect(report.tokens.map((t) => t.raw), ['flex', 'p:4']);
      expect(report.failures.map((f) => f.raw), ['c:', 'c:[a;b]']);
      expect(report.isValid, isFalse);
      expect(report.securityFailures.single.raw, 'c:[a;b]');
      expect(parser.analyzeAll('  ').isValid, isTrue);
    });
  });

  group('Importance', () {
    test('suffixe ou préfixe', () {
      final suffix = parser.parseToken('hover:p:4!')!;
      final prefix = parser.parseToken('!hover:p:4')!;
      expect(suffix.isImportant, isTrue);
      expect(prefix.isImportant, isTrue);
      expect(prefix.variants, ['hover']);
      expect(prefix.identifier, 'p');
      expect(prefix.raw, '!hover:p:4');
    });

    test('"!" ailleurs refusé', () {
      expect(parser.parseToken('!p:4!'), isNull);
      expect(parser.parseToken('p!:4'), isNull);
      expect(parser.parseToken('hover:!p:4'), isNull);
    });
  });

  group('Extracteur', () {
    const extractor = JxClassExtractor();

    test('interpolations imbriquées sans dépassement de pile', () {
      final hostile = "'\${" * 20000;
      expect(() => extractor.extractFromDart(hostile), returnsNormally);
    });

    test('candidat géant écarté, les autres conservés', () {
      final found = extractor.extract('flex ${'x' * 5000} p:4');
      expect(found, ['flex', 'p:4']);
    });

    test('temps linéaire sur une entrée hostile', () {
      final watch = Stopwatch()..start();
      extractor.extract('[' * 500000);
      extractor.extract('a:' * 250000);
      extractor.extractFromDart('"' * 200000);
      expect(watch.elapsed, lessThan(const Duration(seconds: 3)));
    });

    test('interpolation et chaînes brutes', () {
      const source = r'''
        final a = 'flex ${ok ? 'p:4' : 'p:2'} gap:2';
        final b = r'c:[#fff] $notVar';
        // 'commentaire:ignoré'
      ''';
      expect(
        extractor.extractFromDart(source),
        containsAll(['flex', 'p:4', 'p:2', 'gap:2', 'c:[#fff]']),
      );
      expect(
        extractor.extractFromDart(source),
        isNot(contains('commentaire:ignoré')),
      );
    });
  });
}
