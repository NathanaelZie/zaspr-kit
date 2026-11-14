import 'package:jx_cli/core.dart';
import 'package:jx_cli/engine.dart';
import 'package:jx_cli/rules.dart';
import 'package:test/test.dart';

final class _TestFlexRule extends JxRule {
  const _TestFlexRule() : super('test_flex');

  @override
  bool matches(JxClassToken token) => token.identifier == 'flex';

  @override
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme) {
    return [
      JxCssRule(
        selector: escapeSelector(token.raw),
        declarations: const [
          JxCssDeclaration(property: 'display', value: 'flex'),
        ],
      ),
    ];
  }
}

void main() {
  group('JxEngine', () {
    test('compile une chaîne vide', () {
      final engine = JxEngine();
      final result = engine.compile('');

      expect(result.css, isEmpty);
      expect(result.ruleCount, equals(0));
      expect(result.matchedTokens, isEmpty);
      expect(result.unmatchedTokens, isEmpty);
    });

    test(
      'orchestre l\'analyse, la correspondance de règles et la génération',
      () {
        final config = JxEngineConfig();
        config.registry.register(const _TestFlexRule());

        final engine = JxEngine(config: config);
        final result = engine.compile('flex non_matching');

        expect(result.ruleCount, equals(1));
        expect(result.matchedTokens.length, equals(1));
        expect(result.matchedTokens.first.identifier, equals('flex'));
        expect(result.unmatchedTokens, equals(['non_matching']));
        expect(result.css, contains('.flex {'));
        expect(result.css, contains('display: flex;'));
      },
    );
  });
}
