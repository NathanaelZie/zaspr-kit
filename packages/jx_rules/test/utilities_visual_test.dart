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
  group('Transformations', () {
    test('rotation, inclinaison, origine', () {
      expect(css('rot:45'), {'rotate': '45deg'});
      expect(css('-rot:90'), {'rotate': '-90deg'});
      expect(css('rot:[0.5turn]'), {'rotate': '0.5turn'});
      expect(css('skx:6')['--jx-skew-x'], '6deg');
      expect(css('sky:3')['transform'], contains('skewY(var(--jx-skew-y, 0))'));
      expect(css('origin:top-left'), {'transform-origin': 'top left'});
      expect(() => css('rot:abc'), throwsRule);
    });
  });

  group('Filtres', () {
    test('valeurs et chaîne composable', () {
      final blur = css('blur:md');
      expect(blur['--jx-blur'], 'blur(8px)');
      expect(
        blur['filter'],
        startsWith('var(--jx-blur,) var(--jx-brightness,)'),
      );
      expect(css('blur:3')['--jx-blur'], 'blur(3px)');
      expect(css('bri:150')['--jx-brightness'], 'brightness(1.5)');
      expect(css('con:75')['--jx-contrast'], 'contrast(0.75)');
      expect(css('gs:100')['--jx-grayscale'], 'grayscale(1)');
      expect(css('-hue:90')['--jx-hue-rotate'], 'hue-rotate(-90deg)');
      expect(css('dsh:lg')['--jx-drop-shadow'], startsWith('drop-shadow('));
      expect(css('grayscale')['--jx-grayscale'], 'grayscale(1)');
      expect(css('filter-none'), {'filter': 'none'});
    });

    test('arrière-plan (backdrop-filter)', () {
      final glass = css('bblur:lg');
      expect(glass['--jx-bd-blur'], 'blur(16px)');
      expect(glass['backdrop-filter'], contains('var(--jx-bd-blur,)'));
      expect(glass['-webkit-backdrop-filter'], glass['backdrop-filter']);
      expect(css('bsat:180')['--jx-bd-saturate'], 'saturate(1.8)');
    });
  });

  group('Dégradés', () {
    test('direction, angle et couleurs', () {
      expect(
        css('grad:to-r')['background-image'],
        'linear-gradient(to right, var(--jx-from, transparent), '
        'var(--jx-via,) var(--jx-to, transparent))',
      );
      expect(
        css('grad:45')['background-image'],
        startsWith('linear-gradient(45deg,'),
      );
      expect(
        css('grad:[135deg]')['background-image'],
        startsWith('linear-gradient(135deg,'),
      );
      expect(
        css('grad-radial')['background-image'],
        startsWith('radial-gradient('),
      );
      expect(css('from:blue'), {'--jx-from': '#3b82f6'});
      expect(css('to:[#123456]'), {'--jx-to': '#123456'});
      expect(css('via:white'), {'--jx-via': '#ffffff,'});
      expect(() => css('from:nope'), throwsRule);
    });
  });

  group('Animations', () {
    test('prédéfinies et réglages', () {
      expect(css('anim:spin'), {'animation': 'jx-spin 1s linear infinite'});
      expect(css('anim:none'), {'animation': 'none'});
      expect(css('anim:[wiggle_1s_infinite]'), {
        'animation': 'wiggle 1s infinite',
      });
      expect(css('adur:500'), {'animation-duration': '500ms'});
      expect(css('delay:150'), {'transition-delay': '150ms'});
      for (final value in [
        'spin',
        'ping',
        'pulse',
        'bounce',
        'fade-in',
        'slide-up',
      ]) {
        final name = css('anim:$value')['animation']!.split(' ').first;
        expect(jxKeyframes, contains(name));
      }
    });
  });

  group('Médias, fonds et bordures', () {
    test('valeurs', () {
      expect(css('ar:video'), {'aspect-ratio': '16 / 9'});
      expect(css('ar:4/3'), {'aspect-ratio': '4 / 3'});
      expect(css('obf:cover'), {'object-fit': 'cover'});
      expect(css('obp:top'), {'object-position': 'top'});
      expect(css('bgp:bottom-right'), {'background-position': 'bottom right'});
      expect(css('bgr:none'), {'background-repeat': 'no-repeat'});
      expect(css('mix:multiply'), {'mix-blend-mode': 'multiply'});
      expect(css('bs:dashed'), {'border-style': 'dashed'});
      expect(() => css('obf:[x]'), throwsRule);
    });
  });

  group('Alignement', () {
    test('valeurs', () {
      expect(css('ac:between'), {'align-content': 'space-between'});
      expect(css('pi:center'), {'place-items': 'center'});
      expect(css('js:end'), {'justify-self': 'end'});
      expect(css('order:last'), {'order': '9999'});
      expect(css('-order:1'), {'order': '-1'});
      expect(css('basis:1/2'), {'flex-basis': '50%'});
      expect(css('basis:4'), {'flex-basis': '1rem'});
    });
  });

  group('Texte', () {
    test('classes autonomes et valeurs', () {
      expect(css('uppercase'), {'text-transform': 'uppercase'});
      expect(css('italic'), {'font-style': 'italic'});
      expect(css('truncate')['text-overflow'], 'ellipsis');
      expect(css('sr-only')['clip'], 'rect(0, 0, 0, 0)');
      expect(css('invisible'), {'visibility': 'hidden'});
      expect(css('tw:balance'), {'text-wrap': 'balance'});
      expect(css('wb:words'), {'overflow-wrap': 'break-word'});
      expect(css('clamp:3')['-webkit-line-clamp'], '3');
      expect(css('clamp:none')['display'], 'block');
      expect(() => css('clamp:x'), throwsRule);
    });
  });

  group('Messages et registre', () {
    test('valeur invalide : suggestion et valeurs possibles', () {
      expect(
        () => css('fw:blod'),
        throwsA(
          isA<JxRuleException>().having(
            (e) => e.message,
            'message',
            allOf(contains('"fw:bold"'), contains('valeurs possibles')),
          ),
        ),
      );
    });

    test('closestMatch privilégie la même initiale', () {
      expect(closestMatch('pd', ['d', 'p', 'pt']), 'p');
      expect(closestMatch('xyz', ['p', 'm']), isNull);
    });

    test('identifiants connus', () {
      expect(
        _registry.identifiers,
        containsAll(['p', 'flex', 'blur', 'grad', 'clamp']),
      );
    });
  });
}
