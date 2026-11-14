import 'package:jx_cli/parser.dart';
import 'package:test/test.dart';

void main() {
  const parser = JxParser();

  group('JxParser', () {
    test('analyse une chaîne vide ou des espaces', () {
      expect(parser.parse(''), isEmpty);
      expect(parser.parse('   '), isEmpty);
      expect(parser.parseToken(''), isNull);
    });

    test('analyse une classe sans valeur (identifiant pur)', () {
      final token = parser.parseToken('flex');
      expect(token, isNotNull);
      expect(token?.raw, equals('flex'));
      expect(token?.identifier, equals('flex'));
      expect(token?.value, isNull);
      expect(token?.variants, isEmpty);
      expect(token?.isImportant, isFalse);
    });

    test('analyse une classe avec valeur séparée par deux-points', () {
      final token = parser.parseToken('c:red');
      expect(token, isNotNull);
      expect(token?.raw, equals('c:red'));
      expect(token?.identifier, equals('c'));
      expect(token?.value, equals('red'));
      expect(token?.variants, isEmpty);
      expect(token?.isImportant, isFalse);
    });

    test('gère le suffixe d\'importance !', () {
      final token = parser.parseToken('p:4!');
      expect(token, isNotNull);
      expect(token?.raw, equals('p:4!'));
      expect(token?.identifier, equals('p'));
      expect(token?.value, equals('4'));
      expect(token?.isImportant, isTrue);
    });

    test('gère les préfixes de variantes multiples', () {
      final token = parser.parseToken('hover:bg:blue');
      expect(token, isNotNull);
      expect(token?.variants, equals(['hover']));
      expect(token?.identifier, equals('bg'));
      expect(token?.value, equals('blue'));

      final multiToken = parser.parseToken('md:hover:p:4!');
      expect(multiToken?.variants, equals(['md', 'hover']));
      expect(multiToken?.identifier, equals('p'));
      expect(multiToken?.value, equals('4'));
      expect(multiToken?.isImportant, isTrue);
    });

    test('analyse plusieurs classes séparées par des espaces', () {
      final tokens = parser.parse('flex c:red hover:bg:blue p:4!');
      expect(tokens.length, equals(4));
      expect(tokens[0].identifier, equals('flex'));
      expect(tokens[1].identifier, equals('c'));
      expect(tokens[2].identifier, equals('bg'));
      expect(tokens[3].identifier, equals('p'));
    });
  });
}
