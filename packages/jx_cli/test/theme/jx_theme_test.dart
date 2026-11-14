import 'package:jx_cli/theme.dart';
import 'package:test/test.dart';

void main() {
  group('JxTokenValue', () {
    test('formate correctement les noms et déclarations de variables CSS', () {
      const token = JxTokenValue(
        category: 'colors',
        key: 'primary',
        value: '#2563eb',
      );

      expect(token.toCssVariableName(), equals('--jx-colors-primary'));
      expect(
        token.toCssVariableDeclaration(),
        equals('--jx-colors-primary: #2563eb;'),
      );
    });
  });

  group('JxThemeData', () {
    test('stocke et extrait des tokens par catégorie', () {
      final data = JxThemeData();
      data.setToken(
        const JxTokenValue(category: 'spacing', key: '4', value: '1rem'),
      );

      expect(data.getValue('spacing', '4'), equals('1rem'));
      expect(data.getValue('spacing', 'unknown'), isNull);
    });
  });

  group('JxTheme', () {
    test('résout les tokens via l\'interface JxThemeContract', () {
      final theme = JxTheme.defaultTheme();

      expect(theme.name, equals('default'));
      expect(theme.resolveToken('colors', 'current'), equals('currentColor'));
      expect(theme.resolveToken('spacing', '0'), equals('0px'));
    });

    test('génère la table des variables CSS', () {
      final theme = JxTheme.defaultTheme();
      final vars = theme.getCssVariables();

      expect(vars, containsPair('--jx-colors-current', 'currentColor'));
      expect(vars, containsPair('--jx-spacing-0', '0px'));
    });
  });

  group('Thème par défaut enrichi', () {
    final theme = JxTheme.defaultTheme();
    String? t(String c, String k) => theme.resolveToken(c, k);

    test('palette de couleurs', () {
      expect(t(JxThemeCategory.colors, 'black'), '#000000');
      expect(t(JxThemeCategory.colors, 'white'), '#ffffff');
      expect(
        t(JxThemeCategory.colors, 'blue'),
        t(JxThemeCategory.colors, 'blue-500'),
      );
      expect(t(JxThemeCategory.colors, 'red-900'), isNotNull);
    });

    test('espacement 0 à 16 + auto', () {
      expect(t(JxThemeCategory.spacing, '4'), '1rem');
      expect(t(JxThemeCategory.spacing, '16'), '4rem');
      expect(t(JxThemeCategory.spacing, '3'), '0.75rem');
      expect(t(JxThemeCategory.spacing, 'auto'), 'auto');
      expect(t(JxThemeCategory.spacing, '17'), isNull);
    });

    test('breakpoints, typographie, rayons, opacité', () {
      expect(t(JxThemeCategory.breakpoints, 'md'), '768px');
      expect(t(JxThemeCategory.breakpoints, '2xl'), '1536px');
      expect(t(JxThemeCategory.fontSize, 'base'), '1rem');
      expect(t(JxThemeCategory.fontWeight, 'bold'), '700');
      expect(t(JxThemeCategory.lineHeight, 'normal'), '1.5');
      expect(t(JxThemeCategory.borderRadius, 'full'), '9999px');
      expect(t(JxThemeCategory.borderWidth, '2'), '2px');
      expect(t(JxThemeCategory.opacity, '30'), '0.3');
      expect(t(JxThemeCategory.opacity, '95'), '0.95');
    });

    test('ordre des breakpoints conservé', () {
      expect(theme.data.getCategory(JxThemeCategory.breakpoints).keys, [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
      ]);
    });

    test('variables CSS en kebab-case', () {
      expect(
        theme.getCssVariables(),
        containsPair('--jx-font-size-lg', '1.125rem'),
      );
    });
  });
}
