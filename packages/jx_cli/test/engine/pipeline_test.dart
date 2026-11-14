import 'package:jx_cli/core.dart';
import 'package:jx_cli/engine.dart';
import 'package:jx_cli/theme.dart';
import 'package:test/test.dart';

void main() {
  group('Pipeline complet (preset par défaut)', () {
    final engine = JxEngine();

    test('exemples de la convention de syntaxe', () {
      final result = engine.compile(
        'flex c:red p:4 hover:bg:blue md:p:8 c:[#ff0000] p:4!',
      );

      expect(result.unmatchedTokens, isEmpty);
      expect(result.warnings, isEmpty);
      expect(result.matchedTokens.length, 7);

      final css = result.css;
      expect(css, contains('.flex {\n  display: flex;\n}'));
      expect(css, contains('.c\\:red {\n  color: #ef4444;\n}'));
      expect(css, contains('.p\\:4 {\n  padding: 1rem;\n}'));
      expect(
        css,
        contains('.hover\\:bg\\:blue:hover {\n  background-color: #3b82f6;\n}'),
      );
      expect(
        css,
        contains(
          '@media (min-width: 768px) {\n  .md\\:p\\:8 {\n    padding: 2rem;\n  }\n}',
        ),
      );
      expect(css, contains('.c\\:\\[\\#ff0000\\] {\n  color: #ff0000;\n}'));
      expect(css, contains('.p\\:4\\! {\n  padding: 1rem !important;\n}'));
    });

    test('règles de base avant les media queries, triées mobile-first', () {
      final result = engine.compile('xl:p:1 md:p:2 sm:p:3 p:4 lg:p:5');
      final media = result.rules.map((r) => r.mediaQuery).toList();
      expect(media, [
        null,
        '@media (min-width: 640px)',
        '@media (min-width: 768px)',
        '@media (min-width: 1024px)',
        '@media (min-width: 1280px)',
      ]);
      expect(
        result.css.indexOf('640px'),
        lessThan(result.css.indexOf('1280px')),
      );
    });

    test('classes inconnues, invalides et valeurs non résolues', () {
      final result = engine.compile('flex foo c: p:99 hover:wat:c:red');
      expect(result.matchedTokens.map((t) => t.raw), ['flex']);
      expect(
        result.unmatchedTokens,
        containsAll(['foo', 'c:', 'p:99', 'hover:wat:c:red']),
      );
      expect(result.warnings, hasLength(3)); // c:, p:99, variante wat
    });

    test('les doublons ne génèrent qu\'une règle', () {
      final result = engine.compile('p:4 p:4 p:4');
      expect(result.ruleCount, 1);
      expect(result.matchedTokens, hasLength(1));
    });

    test('minification', () {
      final minified = JxEngine(
        config: JxEngineConfig(config: const JxConfig(minify: true)),
      );
      expect(
        minified.compile('flex md:hidden').css,
        '.flex{display:flex;}@media (min-width: 768px){.md\\:hidden{display:none;}}',
      );
    });

    test('preset désactivable', () {
      final bare = JxEngine(
        config: JxEngineConfig(includeDefaultPreset: false),
      );
      expect(bare.compile('flex').unmatchedTokens, ['flex']);
    });
  });

  group('JxVariantResolver', () {
    final resolver = JxVariantResolver(theme: JxTheme.defaultTheme());
    const base = JxCssRule(
      selector: '.x',
      declarations: [JxCssDeclaration(property: 'color', value: 'red')],
    );

    test('pseudo-classe', () {
      final rule = resolver.apply(base, ['hover']);
      expect(rule.pseudoSelector, ':hover');
      expect(rule.fullSelector, '.x:hover');
      expect(rule.mediaQuery, isNull);
    });

    test('breakpoint', () {
      final rule = resolver.apply(base, ['md']);
      expect(rule.mediaQuery, '@media (min-width: 768px)');
      expect(rule.pseudoSelector, isNull);
    });

    test('combinaison breakpoint + pseudo-classes', () {
      final rule = resolver.apply(base, ['lg', 'hover', 'focus']);
      expect(rule.mediaQuery, '@media (min-width: 1024px)');
      expect(rule.fullSelector, '.x:hover:focus');
    });

    test('pseudo-classes structurelles', () {
      expect(resolver.apply(base, ['first']).pseudoSelector, ':first-child');
      expect(resolver.apply(base, ['odd']).pseudoSelector, ':nth-child(odd)');
    });

    test('variante inconnue', () {
      expect(
        () => resolver.apply(base, ['nope']),
        throwsA(isA<JxRuleException>()),
      );
    });

    test('breakpoint personnalisé via le thème', () {
      final theme = JxTheme.defaultTheme();
      theme.data.setToken(
        const JxTokenValue(
          category: 'breakpoints',
          key: '3xl',
          value: '1920px',
        ),
      );
      final custom = JxVariantResolver(
        theme: theme,
        breakpoints: [...JxVariantResolver.defaultBreakpoints, '3xl'],
      );
      final engine = JxEngine(
        config: JxEngineConfig(theme: theme),
        variantResolver: custom,
      );
      final result = engine.compile('3xl:hidden');
      expect(result.unmatchedTokens, isEmpty);
      expect(result.rules.single.mediaQuery, '@media (min-width: 1920px)');
    });
  });

  group('Preflight', () {
    test('ajouté en tête si includeReset, absent de result.rules', () {
      final engine = JxEngine(
        config: JxEngineConfig(config: const JxConfig(includeReset: true)),
      );
      final result = engine.compile('flex');
      expect(result.css, startsWith('*, ::before, ::after {'));
      expect(result.css, contains('border-style: solid'));
      expect(result.rules, hasLength(1));
    });

    test('absent par défaut', () {
      expect(JxEngine().compile('flex').css, isNot(contains('box-sizing')));
    });

    test('réinitialise les champs de formulaire', () {
      final engine = JxEngine(
        config: JxEngineConfig(config: const JxConfig(includeReset: true)),
      );
      final css = engine.compile('flex').css;
      expect(css, contains('input::placeholder, textarea::placeholder {'));
      expect(css, contains('resize: vertical'));
      expect(css, contains(':disabled {\n  cursor: default;\n}'));
    });
  });

  group('Formulaires', () {
    final resolver = JxVariantResolver(theme: JxTheme.defaultTheme());
    const base = JxCssRule(
      selector: '.x',
      declarations: [JxCssDeclaration(property: 'color', value: 'red')],
    );
    final engine = JxEngine();

    test('pseudo-classes d\'état', () {
      expect(resolver.apply(base, ['invalid']).fullSelector, '.x:invalid');
      expect(
        resolver.apply(base, ['user-invalid']).fullSelector,
        '.x:user-invalid',
      );
      expect(
        resolver.apply(base, ['placeholder-shown']).fullSelector,
        '.x:placeholder-shown',
      );
      expect(resolver.apply(base, ['read-only']).fullSelector, '.x:read-only');
    });

    test('le pseudo-élément clôt toujours le sélecteur', () {
      expect(
        resolver.apply(base, ['placeholder']).fullSelector,
        '.x::placeholder',
      );
      expect(
        resolver.apply(base, ['placeholder', 'focus']).fullSelector,
        '.x:focus::placeholder',
      );
      expect(
        resolver.apply(base, ['md', 'file', 'hover']).fullSelector,
        '.x:hover::file-selector-button',
      );
    });

    test('deux pseudo-éléments sont refusés', () {
      expect(
        () => resolver.apply(base, ['placeholder', 'file']),
        throwsA(isA<JxRuleException>()),
      );
      final result = engine.compile('placeholder:file:c:red');
      expect(result.rules, isEmpty);
      expect(result.warnings.single, contains('Only one pseudo-element'));
    });

    test('champ complet compilé de bout en bout', () {
      final result = engine.compile(
        'app:none w:full px:4 py:2 br:md bw:1 bc:gray accent:blue caret:blue '
        'placeholder:c:gray focus:ol:none focus-visible:ring:2 ringc:blue '
        'user-invalid:bc:red disabled:o:50 rsz:none fsz:content',
      );
      expect(result.unmatchedTokens, isEmpty);
      expect(result.warnings, isEmpty);

      final css = result.css;
      expect(
        css,
        contains(
          '.app\\:none {\n  -webkit-appearance: none;\n  appearance: none;\n}',
        ),
      );
      expect(css, contains('.placeholder\\:c\\:gray::placeholder {'));
      expect(
        css,
        contains(
          '.focus-visible\\:ring\\:2:focus-visible {\n'
          '  box-shadow: 0 0 0 2px var(--jx-ring-color, currentColor);\n}',
        ),
      );
      expect(css, contains('.ringc\\:blue {\n  --jx-ring-color: #3b82f6;\n}'));
      expect(css, contains('.user-invalid\\:bc\\:red:user-invalid {'));
      expect(css, contains('.fsz\\:content {\n  field-sizing: content;\n}'));
    });
  });
}
