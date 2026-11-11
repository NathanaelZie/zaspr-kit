import 'package:jx_core/jx_core.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:jx_rules/jx_rules.dart';
import 'package:jx_theme/jx_theme.dart';
import 'package:test/test.dart';

const _parser = JxParser();
final _theme = JxTheme.defaultTheme();
final _registry = JxRuleRegistry.withPreset();

/// Génère les déclarations `propriété -> valeur` pour une classe.
Map<String, String> css(String raw) {
  final token = _parser.parseToken(raw)!;
  final rule = _registry.findMatchingRule(token);
  if (rule == null) throw StateError('Aucune règle pour "$raw"');
  final rules = rule.generate(token, _theme);
  return {
    for (final d in rules.single.declarations)
      d.property: d.isImportant ? '${d.value} !important' : d.value,
  };
}

Matcher throwsRule = throwsA(isA<JxRuleException>());

void main() {
  group('Display', () {
    test('d:*', () {
      expect(css('d:flex'), {'display': 'flex'});
      expect(css('d:none'), {'display': 'none'});
      expect(css('d:grid'), {'display': 'grid'});
      expect(css('d:block'), {'display': 'block'});
    });

    test('standalone', () {
      expect(css('flex'), {'display': 'flex'});
      expect(css('block'), {'display': 'block'});
      expect(css('hidden'), {'display': 'none'});
      expect(css('grid'), {'display': 'grid'});
    });

    test('valeur inconnue', () {
      expect(() => css('d:wobble'), throwsRule);
    });
  });

  group('Spacing', () {
    test('padding', () {
      expect(css('p:4'), {'padding': '1rem'});
      expect(css('px:2'), {
        'padding-left': '0.5rem',
        'padding-right': '0.5rem',
      });
      expect(css('py:1'), {
        'padding-top': '0.25rem',
        'padding-bottom': '0.25rem',
      });
      expect(css('pt:0'), {'padding-top': '0px'});
      expect(css('pr:px'), {'padding-right': '1px'});
      expect(css('pb:16'), {'padding-bottom': '4rem'});
      expect(css('pl:[3px]'), {'padding-left': '3px'});
    });

    test('padding refuse auto et le négatif', () {
      expect(() => css('p:auto'), throwsRule);
      expect(_registry.findMatchingRule(_parser.parseToken('p:-4')!), isNull);
    });

    test('margin', () {
      expect(css('m:8'), {'margin': '2rem'});
      expect(css('mx:auto'), {'margin-left': 'auto', 'margin-right': 'auto'});
      expect(css('my:2'), {'margin-top': '0.5rem', 'margin-bottom': '0.5rem'});
      expect(css('mt:1'), {'margin-top': '0.25rem'});
      expect(css('mr:1'), {'margin-right': '0.25rem'});
      expect(css('mb:1'), {'margin-bottom': '0.25rem'});
      expect(css('ml:1'), {'margin-left': '0.25rem'});
    });

    test('margin négative', () {
      expect(css('m:-4'), {'margin': '-1rem'});
      expect(css('-m:4'), {'margin': '-1rem'});
      expect(css('-mt:[10px]'), {'margin-top': '-10px'});
      expect(css('-m:0'), {'margin': '0px'});
      expect(css('-m:[calc(1px_+_2px)]'), {
        'margin': 'calc(-1 * calc(1px + 2px))',
      });
      expect(() => css('-m:auto'), throwsRule);
    });

    test('valeur hors échelle', () {
      expect(() => css('p:99'), throwsRule);
    });
  });

  group('Colors', () {
    test('tokens du thème', () {
      expect(css('c:red'), {'color': '#ef4444'});
      expect(css('c:blue-700'), {'color': '#1d4ed8'});
      expect(css('bg:white'), {'background-color': '#ffffff'});
      expect(css('bg:transparent'), {'background-color': 'transparent'});
      expect(css('c:current'), {'color': 'currentColor'});
    });

    test('hexadécimal et arbitraire', () {
      expect(css('c:#abc'), {'color': '#abc'});
      expect(css('c:[#ff0000]'), {'color': '#ff0000'});
      expect(css('bg:[rgb(0,0,0)]'), {'background-color': 'rgb(0,0,0)'});
    });

    test('dégradés et images -> background-image', () {
      expect(css('bg:[linear-gradient(180deg,#fff,#000)]'), {
        'background-image': 'linear-gradient(180deg,#fff,#000)',
      });
      expect(css('bg:[radial-gradient(circle,red,blue)]'), {
        'background-image': 'radial-gradient(circle,red,blue)',
      });
      expect(css('bg:[url(/img/hero.png)]'), {
        'background-image': 'url(/img/hero.png)',
      });
      expect(css('bg:[rgb(0,0,0)]'), {'background-color': 'rgb(0,0,0)'});
    });

    test('important', () {
      expect(css('c:black!'), {'color': '#000000 !important'});
    });

    test('couleur inconnue', () {
      expect(() => css('c:nope'), throwsRule);
      expect(() => css('c:#ggg'), throwsRule);
    });
  });

  group('Typography', () {
    test('font-size', () {
      expect(css('fs:lg'), {'font-size': '1.125rem'});
      expect(css('fs:[13px]'), {'font-size': '13px'});
    });

    test('font-weight', () {
      expect(css('fw:bold'), {'font-weight': '700'});
      expect(css('fw:600'), {'font-weight': '600'});
      expect(() => css('fw:650'), throwsRule);
    });

    test('line-height', () {
      expect(css('lh:tight'), {'line-height': '1.25'});
      expect(css('lh:1.4'), {'line-height': '1.4'});
    });

    test('vertical-align / list-style', () {
      expect(css('va:middle'), {'vertical-align': 'middle'});
      expect(css('va:[-2px]'), {'vertical-align': '-2px'});
      expect(css('lst:disc'), {'list-style-type': 'disc'});
      expect(css('lst:[lower-roman]'), {'list-style-type': 'lower-roman'});
      expect(css('lsp:inside'), {'list-style-position': 'inside'});
      expect(() => css('lsp:[x]'), throwsRule);
    });

    test('text-align', () {
      expect(css('ta:center'), {'text-align': 'center'});
      expect(css('ta:justify'), {'text-align': 'justify'});
      expect(() => css('ta:middle'), throwsRule);
    });
  });

  group('Typographie (compléments)', () {
    test('famille, interlettrage, soulignement, blancs', () {
      expect(css('ff:mono')['font-family'], startsWith('ui-monospace'));
      expect(css('ff:[Georgia,serif]'), {'font-family': 'Georgia,serif'});
      expect(css('ls:tighter'), {'letter-spacing': '-0.05em'});
      expect(css('ls:[0.2em]'), {'letter-spacing': '0.2em'});
      expect(css('td:underline'), {'text-decoration-line': 'underline'});
      expect(css('tdc:blue'), {'text-decoration-color': '#3b82f6'});
      expect(css('tdt:2'), {'text-decoration-thickness': '2px'});
      expect(css('tuo:4'), {'text-underline-offset': '4px'});
      expect(css('ws:pre'), {'white-space': 'pre'});
      expect(() => css('ff:comic'), throwsRule);
    });

    test('largeur de police et contour', () {
      expect(css('fst:expanded'), {'font-stretch': '125%'});
      expect(css('fst:[112%]'), {'font-stretch': '112%'});
      expect(css('ol:2'), {'outline': '2px solid'});
      expect(css('ol:none'), {'outline': 'none'});
      expect(css('olc:blue'), {'outline-color': '#3b82f6'});
      expect(css('olo:4'), {'outline-offset': '4px'});
      expect(css('olo:-2'), {'outline-offset': '-2px'});
      expect(css('bgs:cover'), {'background-size': 'cover'});
      expect(css('bgs:[16px_16px]'), {'background-size': '16px 16px'});
    });
  });

  group('Sizing', () {
    test('width / height', () {
      expect(css('w:4'), {'width': '1rem'});
      expect(css('w:full'), {'width': '100%'});
      expect(css('w:1/2'), {'width': '50%'});
      expect(css('w:screen'), {'width': '100vw'});
      expect(css('h:screen'), {'height': '100vh'});
      expect(css('h:auto'), {'height': 'auto'});
      expect(css('w:[200px]'), {'width': '200px'});
    });

    test('max-width / max-height', () {
      expect(css('mw:none'), {'max-width': 'none'});
      expect(css('mw:full'), {'max-width': '100%'});
      expect(css('mh:screen'), {'max-height': '100vh'});
      expect(() => css('mw:auto'), throwsRule);
    });

    test('min-width / min-height', () {
      expect(css('mnw:0'), {'min-width': '0px'});
      expect(css('mnw:full'), {'min-width': '100%'});
      expect(css('mnh:[8rem]'), {'min-height': '8rem'});
      expect(css('mnh:screen'), {'min-height': '100vh'});
      expect(() => css('mnh:auto'), throwsRule);
    });
  });

  group('Borders', () {
    test('border-width', () {
      expect(css('bw:2'), {'border-width': '2px'});
      expect(css('bw:0'), {'border-width': '0px'});
    });

    test('border-radius', () {
      expect(css('br:lg'), {'border-radius': '0.5rem'});
      expect(css('br:full'), {'border-radius': '9999px'});
      expect(css('br:[3px]'), {'border-radius': '3px'});
    });
  });

  group('Flexbox', () {
    test('align-items / justify-content', () {
      expect(css('ai:center'), {'align-items': 'center'});
      expect(css('ai:start'), {'align-items': 'flex-start'});
      expect(css('jc:between'), {'justify-content': 'space-between'});
      expect(css('jc:evenly'), {'justify-content': 'space-evenly'});
    });

    test('flex-direction / gap', () {
      expect(css('fd:col'), {'flex-direction': 'column'});
      expect(css('fd:row-reverse'), {'flex-direction': 'row-reverse'});
      expect(css('gap:4'), {'gap': '1rem'});
      expect(() => css('gap:auto'), throwsRule);
    });
  });

  group('Position', () {
    test('pos:* et standalone', () {
      expect(css('pos:absolute'), {'position': 'absolute'});
      expect(css('relative'), {'position': 'relative'});
      expect(css('absolute'), {'position': 'absolute'});
      expect(css('fixed'), {'position': 'fixed'});
      expect(css('sticky'), {'position': 'sticky'});
    });
  });

  group('Opacity', () {
    test('o:*', () {
      expect(css('o:50'), {'opacity': '0.5'});
      expect(css('o:0'), {'opacity': '0'});
      expect(css('o:100'), {'opacity': '1'});
      expect(css('o:[0.33]'), {'opacity': '0.33'});
      expect(() => css('o:42'), throwsRule);
    });
  });

  group('Sélecteurs', () {
    test('échappement des caractères spéciaux', () {
      String selector(String raw) {
        final token = _parser.parseToken(raw)!;
        return _registry
            .findMatchingRule(token)!
            .generate(token, _theme)
            .single
            .selector;
      }

      expect(selector('c:red'), r'.c\:red');
      expect(selector('p:4!'), r'.p\:4\!');
      expect(selector('c:[#ff0000]'), r'.c\:\[\#ff0000\]');
      expect(selector('w:1/2'), r'.w\:1\/2');
      expect(selector('lh:1.4'), r'.lh\:1\.4');
      expect(selector('2xl:p:4'), r'.\32 xl\:p\:4');
    });
  });

  group('JxDefaultPreset', () {
    test('ids uniques et enregistrement complet', () {
      final rules = const JxDefaultPreset().rules;
      final ids = rules.map((r) => r.id).toSet();
      expect(ids.length, rules.length);
      expect(_registry.count, rules.length);
    });

    test('clear vide aussi l\'index par id', () {
      final registry = JxRuleRegistry.withPreset()..clear();
      expect(registry.count, 0);
      expect(registry.getById('padding'), isNull);
    });
  });
}
