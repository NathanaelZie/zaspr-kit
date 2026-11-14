import 'package:jx_cli/parser.dart';
import 'package:test/test.dart';

void main() {
  const extractor = JxClassExtractor();

  group('extract (générique / HTML)', () {
    test('attributs class HTML', () {
      final found = extractor.extract(
        '<div class="flex p:4 hover:bg:blue"><span class=\'c:red\'>x</span></div>',
      );
      expect(found, containsAll(['flex', 'p:4', 'hover:bg:blue', 'c:red']));
    });

    test('valeurs arbitraires avec virgules, parenthèses et deux-points', () {
      final found = extractor.extract(
        '<p class="bg:[rgb(0,0,0)] w:[calc(100%_-_1rem)] bg:[url(a:b)]">',
      );
      expect(
        found,
        containsAll([
          'bg:[rgb(0,0,0)]',
          'w:[calc(100%_-_1rem)]',
          'bg:[url(a:b)]',
        ]),
      );
    });

    test('ponctuation finale retirée, doublons supprimés, ordre conservé', () {
      final found = extractor.extract('Use flex. Then p:4, p:4 and (grid).');
      expect(found.where((c) => c == 'p:4'), hasLength(1));
      expect(found, contains('flex'));
      expect(found.indexOf('flex'), lessThan(found.indexOf('p:4')));
    });
  });

  group('extractFromDart', () {
    test('seuls les littéraux de chaîne sont lus', () {
      const source = '''
// flex dans un commentaire
/* hidden aussi */
class Card extends StatelessComponent {
  static const fixed = 1;
  Iterable<Component> build(BuildContext context) sync* {
    yield div(classes: 'grid gap:4 md:p:8', [text("c:[#ff0000]")]);
  }
}
''';
      final found = extractor.extractFromDart(source);
      expect(found, containsAll(['grid', 'gap:4', 'md:p:8', 'c:[#ff0000]']));
      expect(found, isNot(contains('flex')));
      expect(found, isNot(contains('hidden')));
      expect(found, isNot(contains('static')));
      expect(found, isNot(contains('fixed')));
    });

    test('interpolations imbriquées', () {
      const source =
          r"final c = 'flex ${active ? 'bg:blue' : 'bg:gray'} $extra p:2';";
      final found = extractor.extractFromDart(source);
      expect(found, containsAll(['flex', 'bg:blue', 'bg:gray', 'p:2']));
      expect(found, isNot(contains('extra')));
    });

    test('chaînes triples et brutes', () {
      const source = """
final a = '''
  block
  m:-4
''';
final b = r'pos:absolute \$notInterpolated';
""";
      final found = extractor.extractFromDart(source);
      expect(found, containsAll(['block', 'm:-4', 'pos:absolute']));
    });
  });
}
