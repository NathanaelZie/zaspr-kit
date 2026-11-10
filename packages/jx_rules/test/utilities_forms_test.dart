import 'package:jx_core/jx_core.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:jx_rules/jx_rules.dart';
import 'package:jx_theme/jx_theme.dart';
import 'package:test/test.dart';

const _parser = JxParser();
final _theme = JxTheme.defaultTheme();
final _registry = JxRuleRegistry.withPreset();

Map<String, String> css(String raw) {
  final token = _parser.parseToken(raw)!;
  final rule = _registry.findMatchingRule(token);
  if (rule == null) throw StateError('Aucune règle pour "$raw"');
  return {
    for (final d in rule.generate(token, _theme).single.declarations)
      d.property: d.value,
  };
}

final Matcher throwsRule = throwsA(isA<JxRuleException>());

void main() {
  group('Champs de formulaire', () {
    test('appearance avec préfixe WebKit', () {
      expect(css('app:none'), {
        '-webkit-appearance': 'none',
        'appearance': 'none',
      });
      expect(css('app:auto')['appearance'], 'auto');
      expect(() => css('app:[button]'), throwsRule);
    });

    test('accent-color et caret-color', () {
      expect(css('accent:blue'), {'accent-color': '#3b82f6'});
      expect(css('accent:#ff0000'), {'accent-color': '#ff0000'});
      expect(css('accent:auto'), {'accent-color': 'auto'});
      expect(css('caret:transparent'), {'caret-color': 'transparent'});
      expect(css('caret:[rgb(0,0,0)]'), {'caret-color': 'rgb(0,0,0)'});
      expect(() => css('accent:nope'), throwsRule);
    });

    test('resize et field-sizing', () {
      expect(css('rsz:none'), {'resize': 'none'});
      expect(css('rsz:y'), {'resize': 'vertical'});
      expect(css('rsz:x'), {'resize': 'horizontal'});
      expect(css('rsz:both'), {'resize': 'both'});
      expect(css('fsz:content'), {'field-sizing': 'content'});
      expect(() => css('rsz:z'), throwsRule);
    });

    test('pointer-events et user-select', () {
      expect(css('pe:none'), {'pointer-events': 'none'});
      expect(css('us:none'), {
        '-webkit-user-select': 'none',
        'user-select': 'none',
      });
      expect(css('us:all')['user-select'], 'all');
    });

    test('anneau de focus', () {
      expect(css('ring:2'), {
        'box-shadow': '0 0 0 2px var(--jx-ring-color, currentColor)',
      });
      expect(css('ring:[3px]'), {
        'box-shadow': '0 0 0 3px var(--jx-ring-color, currentColor)',
      });
      expect(css('ringc:blue'), {jxRingColorProperty: '#3b82f6'});
      expect(css('ringc:[rgba(0,0,255,0.4)]'), {
        jxRingColorProperty: 'rgba(0,0,255,0.4)',
      });
      expect(() => css('ring:3'), throwsRule);
    });

    test('les variantes de formulaire sont reconnues par le parseur', () {
      for (final raw in [
        'placeholder:c:gray',
        'file:bg:blue',
        'invalid:bc:red',
        'user-invalid:bc:red',
        'read-only:o:50',
        'placeholder-shown:bc:gray',
        'autofill:bg:white',
      ]) {
        final token = _parser.parseToken(raw)!;
        expect(token.variants, hasLength(1), reason: raw);
        expect(_registry.findMatchingRule(token), isNotNull, reason: raw);
      }
    });
  });
}
