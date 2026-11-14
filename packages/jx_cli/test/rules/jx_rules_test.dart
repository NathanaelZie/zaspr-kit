import 'package:jx_cli/core.dart';
import 'package:jx_cli/rules.dart';
import 'package:test/test.dart';

final class _MockTheme implements JxThemeContract {
  @override
  String get name => 'mock';

  @override
  String? resolveToken(String category, String key) {
    if (category == 'colors' && key == 'primary') return '#2563eb';
    return null;
  }

  @override
  Map<String, String> getCssVariables() => {};
}

final class _SampleColorRule extends JxRule {
  const _SampleColorRule() : super('sample_color');

  @override
  bool matches(JxClassToken token) => token.identifier == 'c' && token.hasValue;

  @override
  List<JxCssRule> generate(JxClassToken token, JxThemeContract theme) {
    final color = theme.resolveToken('colors', token.value!) ?? token.value!;
    return [
      JxCssRule(
        selector: escapeSelector(token.raw),
        declarations: [
          JxCssDeclaration(
            property: 'color',
            value: color,
            isImportant: token.isImportant,
          ),
        ],
      ),
    ];
  }
}

void main() {
  group('JxRuleRegistry', () {
    test('enregistre et retrouve des règles', () {
      final registry = JxRuleRegistry();
      const rule = _SampleColorRule();

      expect(registry.count, equals(0));
      registry.register(rule);

      expect(registry.count, equals(1));
      expect(registry.getById('sample_color'), equals(rule));
    });

    test('recherche la règle adéquate pour un token', () {
      final registry = JxRuleRegistry();
      registry.register(const _SampleColorRule());

      const matchingToken = JxClassToken(
        raw: 'c:primary',
        identifier: 'c',
        value: 'primary',
      );
      const unknownToken = JxClassToken(
        raw: 'unknown:val',
        identifier: 'unknown',
        value: 'val',
      );

      final match = registry.findMatchingRule(matchingToken);
      expect(match, isNotNull);
      expect(match?.id, equals('sample_color'));

      final noMatch = registry.findMatchingRule(unknownToken);
      expect(noMatch, isNull);
    });

    test('génère la règle CSS correspondante avec résolution de thème', () {
      const rule = _SampleColorRule();
      final theme = _MockTheme();
      const token = JxClassToken(
        raw: 'c:primary',
        identifier: 'c',
        value: 'primary',
      );

      final rules = rule.generate(token, theme);
      expect(rules.length, equals(1));
      expect(rules.first.selector, equals('.c\\:primary'));
      expect(rules.first.declarations.first.property, equals('color'));
      expect(rules.first.declarations.first.value, equals('#2563eb'));
    });
  });
}
