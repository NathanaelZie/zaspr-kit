import 'package:jx_core/jx_core.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:jx_rules/jx_rules.dart';
import 'package:jx_theme/jx_theme.dart';
import 'package:test/test.dart';

const _parser = JxParser();
final _theme = JxTheme.defaultTheme();
final _registry = JxRuleRegistry.withPreset();

void main() {
  group('Seconde barrière : tokens construits sans le parseur', () {
    JxClassToken forged(String identifier, String inner) => JxClassToken(
      raw: '$identifier:[x]',
      identifier: identifier,
      value: '[$inner]',
    );

    test('JxValueRule refuse une valeur dangereuse', () {
      for (final inner in [
        'red;}body{display:none',
        'url(javascript:alert(1))',
        '</style>',
      ]) {
        final token = forged('c', inner);
        final rule = _registry.findMatchingRule(token)!;
        expect(
          () => rule.generate(token, _theme),
          throwsA(
            isA<JxRuleException>().having(
              (e) => e.message,
              'message',
              contains('Arbitrary value rejected'),
            ),
          ),
          reason: inner,
        );
      }
    });

    test('JxDynamicRule refuse une valeur dangereuse', () {
      final token = forged('clamp', '3;}x{');
      final rule = _registry.findMatchingRule(token)!;
      expect(
        () => rule.generate(token, _theme),
        throwsA(isA<JxRuleException>()),
      );
    });

    test('une valeur saine passe toujours', () {
      final token = forged('c', 'rgb(0_0_0_/_0.5)');
      final rule = _registry.findMatchingRule(token)!;
      expect(
        rule.generate(token, _theme).single.declarations.single.value,
        'rgb(0 0 0 / 0.5)',
      );
    });
  });

  group('Grammaire stricte du parseur', () {
    test('tous les tokens du thème restent utilisables', () {
      final rejected = <String>[];
      for (final category in JxDefaultTokens.all.entries) {
        for (final key in category.value.keys) {
          if (_parser.parseToken('x:$key') == null) {
            rejected.add('${category.key}/$key');
          }
        }
      }
      expect(rejected, isEmpty);
    });

    test('tous les mots-clés et classes des règles restent utilisables', () {
      final rejected = <String>[];
      for (final rule in _registry.allRules) {
        final classes = switch (rule) {
          JxStaticRule(:final classes) => classes.keys,
          JxValueRule(:final properties, :final keywords) => [
            for (final id in properties.keys)
              for (final keyword in keywords.keys) '$id:$keyword',
          ],
          JxKeywordRule(:final identifiers, :final values) => [
            for (final id in identifiers)
              for (final value in values.keys) '$id:$value',
          ],
          _ => const <String>[],
        };
        for (final raw in classes) {
          final token = _parser.parseToken(raw);
          if (token == null || !rule.matches(token)) rejected.add(raw);
        }
      }
      expect(rejected, isEmpty);
    });
  });
}
