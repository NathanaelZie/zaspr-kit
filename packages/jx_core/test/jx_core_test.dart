import 'package:jx_core/jx_core.dart';
import 'package:test/test.dart';

void main() {
  group('JxCssDeclaration', () {
    test('produit une déclaration CSS standard', () {
      const dec = JxCssDeclaration(property: 'color', value: '#ff0000');
      expect(dec.toCss(), equals('color: #ff0000;'));
      expect(dec.isImportant, isFalse);
    });

    test('supporte le modificateur important', () {
      const dec = JxCssDeclaration(
        property: 'display',
        value: 'flex',
        isImportant: true,
      );
      expect(dec.toCss(), equals('display: flex !important;'));
      expect(dec.isImportant, isTrue);
    });

    test('respecte l\'égalité par valeur et le hashCode', () {
      const a = JxCssDeclaration(property: 'margin', value: '1rem');
      const b = JxCssDeclaration(property: 'margin', value: '1rem');
      const c = JxCssDeclaration(property: 'margin', value: '2rem');

      expect(a, equals(b));
      expect(a.hashCode, equals(b.hashCode));
      expect(a, isNot(equals(c)));
    });
  });

  group('JxCssRule', () {
    test('gère correctement les sélecteurs et déclarations', () {
      const rule = JxCssRule(
        selector: '.btn',
        declarations: [JxCssDeclaration(property: 'cursor', value: 'pointer')],
      );

      expect(rule.selector, equals('.btn'));
      expect(rule.hasDeclarations, isTrue);
      expect(rule.hasMediaQuery, isFalse);
    });

    test('gère les media queries et pseudo-sélecteurs', () {
      const rule = JxCssRule(
        selector: '.btn:hover',
        mediaQuery: '@media (min-width: 640px)',
        pseudoSelector: ':hover',
        declarations: [JxCssDeclaration(property: 'opacity', value: '0.8')],
      );

      expect(rule.hasMediaQuery, isTrue);
      expect(rule.pseudoSelector, equals(':hover'));
      expect(rule.toString(), contains('@media (min-width: 640px)'));
      expect(rule.toString(), contains('opacity: 0.8;'));
    });
  });

  group('JxClassToken', () {
    test('stocke les composants analysés d\'une classe', () {
      const token = JxClassToken(
        raw: 'hover:c:primary!',
        identifier: 'c',
        value: 'primary',
        variants: ['hover'],
        isImportant: true,
      );

      expect(token.raw, equals('hover:c:primary!'));
      expect(token.identifier, equals('c'));
      expect(token.value, equals('primary'));
      expect(token.hasVariants, isTrue);
      expect(token.hasValue, isTrue);
      expect(token.isImportant, isTrue);
      expect(token.variants, equals(['hover']));
    });
  });

  group('JxCompileResult', () {
    test('fournit les métriques et indicateurs de compilation', () {
      const result = JxCompileResult(
        css: '.test { color: red; }',
        rules: [
          JxCssRule(
            selector: '.test',
            declarations: [JxCssDeclaration(property: 'color', value: 'red')],
          ),
        ],
        matchedTokens: [
          JxClassToken(raw: 'c:red', identifier: 'c', value: 'red'),
        ],
        warnings: ['Warning sample'],
        duration: Duration(milliseconds: 12),
      );

      expect(result.ruleCount, equals(1));
      expect(result.hasOutput, isTrue);
      expect(result.hasWarnings, isTrue);
      expect(result.matchedTokens.length, equals(1));
    });
  });

  group('JxConfig', () {
    test('instancie avec les valeurs par défaut et supporte copyWith', () {
      const config = JxConfig();
      expect(config.prefix, isEmpty);
      expect(config.minify, isFalse);
      expect(config.includeReset, isFalse);

      final updated = config.copyWith(minify: true, prefix: 'jx-');
      expect(updated.minify, isTrue);
      expect(updated.prefix, equals('jx-'));
      expect(updated.includeReset, isFalse);
    });
  });

  group('JxException', () {
    test('hiérarchie des exceptions JX CSS', () {
      const parseEx = JxParseException('Syntax error');
      const ruleEx = JxRuleException('Unknown rule');
      const themeEx = JxThemeException('Missing token');
      const configEx = JxConfigException('Invalid config');

      expect(parseEx, isA<JxException>());
      expect(ruleEx, isA<JxException>());
      expect(themeEx, isA<JxException>());
      expect(configEx, isA<JxException>());
      expect(parseEx.toString(), contains('Syntax error'));
    });
  });
}
