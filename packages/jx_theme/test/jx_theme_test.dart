import 'package:jx_theme/jx_theme.dart';
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
      data.setToken(const JxTokenValue(
        category: 'spacing',
        key: '4',
        value: '1rem',
      ));

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
}
