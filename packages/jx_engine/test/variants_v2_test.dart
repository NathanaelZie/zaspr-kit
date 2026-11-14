import 'package:jx_core/jx_core.dart';
import 'package:jx_engine/jx_engine.dart';
import 'package:test/test.dart';

void main() {
  final engine = JxEngine();

  JxCssRule single(String classes, [JxEngine? custom]) {
    final result = (custom ?? engine).compile(classes);
    expect(result.warnings, isEmpty, reason: result.warnings.join('\n'));
    return result.rules.single;
  }

  group('Variantes de média', () {
    test('dark, motion, print', () {
      expect(
        single('dark:bg:gray-900').mediaQuery,
        '@media (prefers-color-scheme: dark)',
      );
      expect(
        single('motion-reduce:anim:none').mediaQuery,
        '@media (prefers-reduced-motion: reduce)',
      );
      expect(single('print:hidden').mediaQuery, '@media print');
    });

    test('combinaison avec un breakpoint, type de média en tête', () {
      expect(
        single('md:dark:p:4').mediaQuery,
        '@media (min-width: 768px) and (prefers-color-scheme: dark)',
      );
      expect(
        single('md:print:hidden').mediaQuery,
        '@media print and (min-width: 768px)',
      );
    });

    test('dark en mode classe', () {
      final classMode = JxEngine(config: JxEngineConfig(darkSelector: '.dark'));
      final rule = single('dark:hover:c:white', classMode);
      expect(rule.mediaQuery, isNull);
      expect(rule.fullSelector, '.dark .dark\\:hover\\:c\\:white:hover');
    });
  });

  group('Groupes et pairs', () {
    test('group-hover et peer-checked', () {
      expect(
        single('group-hover:c:blue').fullSelector,
        '.group:hover .group-hover\\:c\\:blue',
      );
      expect(
        single('peer-checked:bg:teal').fullSelector,
        '.peer:checked ~ .peer-checked\\:bg\\:teal',
      );
    });

    test('cumul avec breakpoint et pseudo-classe', () {
      final rule = single('md:group-hover:focus:c:red');
      expect(rule.mediaQuery, '@media (min-width: 768px)');
      expect(rule.selectorPrefix, '.group:hover ');
      expect(rule.pseudoSelector, ':focus');
    });

    test('pseudo-classe inconnue refusée', () {
      final result = engine.compile('group-wat:c:red');
      expect(result.unmatchedTokens, ['group-wat:c:red']);
    });
  });

  group('Règles @property et @keyframes', () {
    test('ajoutées uniquement si utilisées', () {
      expect(engine.compile('p:4').css, isNot(contains('@property')));
      final css = engine.compile('blur:md anim:spin anim:spin').css;
      expect(
        css,
        contains(
          '@property --jx-blur {\n  syntax: "*";\n  inherits: false;\n}',
        ),
      );
      expect(
        css,
        contains('@keyframes jx-spin {\n  to {\n    rotate: 360deg;\n  }\n}'),
      );
      expect('@keyframes jx-spin'.allMatches(css), hasLength(1));
      expect(css, isNot(contains('jx-pulse')));
    });

    test('version minifiée', () {
      final minified = JxEngine(
        config: JxEngineConfig(config: const JxConfig(minify: true)),
      ).compile('anim:pulse tx:2');
      expect(
        minified.css,
        contains('@property --jx-tx{syntax:"*";inherits:false;}'),
      );
      expect(minified.css, contains('@keyframes jx-pulse{50%{opacity:0.5;}}'));
    });
  });

  group('Suggestions', () {
    test('identifiant inconnu', () {
      final result = engine.compile('pd:4 hover:bgg:blue! texte');
      expect(result.warnings, [
        'Unknown class "pd:4": did you mean "p:4"?',
        'Unknown class "hover:bgg:blue!": did you mean "hover:bg:blue!"?',
      ]);
    });

    test('valeur inconnue', () {
      final warning = engine.compile('c:bleu').warnings.single;
      expect(warning, contains('Did you mean "c:blue"?'));
    });
  });
}
