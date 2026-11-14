import 'package:jx_cli/core.dart';
import 'package:jx_cli/parser.dart';
import 'package:jx_cli/rules.dart';
import 'package:jx_cli/theme.dart';
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
  group('Grid', () {
    test('cols / rows', () {
      expect(css('cols:3'), {
        'grid-template-columns': 'repeat(3, minmax(0, 1fr))',
      });
      expect(css('cols:[200px_1fr]'), {'grid-template-columns': '200px 1fr'});
      expect(css('rows:2'), {
        'grid-template-rows': 'repeat(2, minmax(0, 1fr))',
      });
      expect(() => css('cols:13'), throwsRule);
    });

    test('span / rspan / gx / gy', () {
      expect(css('span:2'), {'grid-column': 'span 2 / span 2'});
      expect(css('span:full'), {'grid-column': '1 / -1'});
      expect(css('rspan:3'), {'grid-row': 'span 3 / span 3'});
      expect(css('gx:4'), {'column-gap': '1rem'});
      expect(css('gy:2'), {'row-gap': '0.5rem'});
    });
  });

  group('Flex', () {
    test('wrap standalone et flw:', () {
      expect(css('wrap'), {'flex-wrap': 'wrap'});
      expect(css('nowrap'), {'flex-wrap': 'nowrap'});
      expect(css('flw:reverse'), {'flex-wrap': 'wrap-reverse'});
    });

    test('fl / grow / shrink / as', () {
      expect(css('fl:1'), {'flex': '1 1 0%'});
      expect(css('fl:none'), {'flex': 'none'});
      expect(css('grow:1'), {'flex-grow': '1'});
      expect(css('shrink:0'), {'flex-shrink': '0'});
      expect(css('as:center'), {'align-self': 'center'});
    });
  });

  group('Effets', () {
    test('ombres', () {
      expect(css('sh:md')['box-shadow'], startsWith('0 4px 6px -1px'));
      expect(css('sh:none'), {'box-shadow': 'none'});
      expect(css('sh:[0_0_0_3px_#01589B]'), {
        'box-shadow': '0 0 0 3px #01589B',
      });
    });

    test('transitions', () {
      expect(css('tr:colors'), {
        'transition-property':
            'color, background-color, border-color, text-decoration-color, fill, stroke',
        'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'transition-duration': '150ms',
      });
      expect(css('tr:none'), {'transition-property': 'none'});
      expect(css('dur:300'), {'transition-duration': '300ms'});
      expect(css('ease:out'), {
        'transition-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
      });
      expect(() => css('tr:wobble'), throwsRule);
    });

    test('curseur', () {
      expect(css('cur:pointer'), {'cursor': 'pointer'});
    });
  });

  group('Transformations', () {
    test('translate et scale', () {
      const translate = 'var(--jx-tx, 0) var(--jx-ty, 0)';
      expect(css('ty:1'), {'--jx-ty': '0.25rem', 'translate': translate});
      expect(css('-ty:1'), {'--jx-ty': '-0.25rem', 'translate': translate});
      expect(css('tx:full'), {'--jx-tx': '100%', 'translate': translate});
      expect(css('ty:[3px]'), {'--jx-ty': '3px', 'translate': translate});
      expect(css('sc:105'), {'scale': '1.05'});
    });
  });

  group('Positionnement', () {
    test('z-index', () {
      expect(css('z:50'), {'z-index': '50'});
      expect(css('-z:10'), {'z-index': '-10'});
      expect(css('z:[999]'), {'z-index': '999'});
    });

    test('inset', () {
      expect(css('top:0'), {'top': '0px'});
      expect(css('-left:4'), {'left': '-1rem'});
      expect(css('inset:0'), {'inset': '0px'});
      expect(css('right:1/2'), {'right': '50%'});
    });

    test('scroll-margin-top', () {
      expect(css('smt:16'), {'scroll-margin-top': '4rem'});
      expect(css('smt:[72px]'), {'scroll-margin-top': '72px'});
    });

    test('overflow', () {
      expect(css('ov:hidden'), {'overflow': 'hidden'});
      expect(css('ovx:auto'), {'overflow-x': 'auto'});
    });
  });

  group('Bordures (compléments)', () {
    test('côtés et couleur', () {
      expect(css('bwb:1'), {'border-bottom-width': '1px'});
      expect(css('bwx:2'), {
        'border-left-width': '2px',
        'border-right-width': '2px',
      });
      expect(css('bc:gray-300'), {'border-color': '#d1d5db'});
      expect(css('bc:[rgba(0,0,0,0.1)]'), {'border-color': 'rgba(0,0,0,0.1)'});
    });
  });
}
