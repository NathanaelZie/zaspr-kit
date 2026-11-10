import 'package:jx_core/jx_core.dart';
import 'package:jx_generator/jx_generator.dart';
import 'package:test/test.dart';

void main() {
  group('JxGenerator', () {
    test('génère une chaîne vide si aucune règle', () {
      const generator = JxGenerator();
      expect(generator.generate([]), isEmpty);
    });

    test('génère du CSS standard lisible avec indentation', () {
      const generator = JxGenerator();
      const rules = [
        JxCssRule(
          selector: '.c-red',
          declarations: [
            JxCssDeclaration(property: 'color', value: '#ff0000'),
          ],
        ),
      ];

      final css = generator.generate(rules);
      expect(css, contains('.c-red {'));
      expect(css, contains('  color: #ff0000;'));
      expect(css, contains('}'));
    });

    test('supporte la minification', () {
      const generator = JxGenerator(
        options: JxGeneratorOptions(minify: true),
      );
      const rules = [
        JxCssRule(
          selector: '.c-red',
          declarations: [
            JxCssDeclaration(property: 'color', value: '#ff0000'),
          ],
        ),
      ];

      final css = generator.generate(rules);
      expect(css, equals('.c-red{color:#ff0000;}'));
    });

    test('regroupe les règles sous media query', () {
      const generator = JxGenerator(
        options: JxGeneratorOptions(minify: true),
      );
      const rules = [
        JxCssRule(
          selector: '.c-red',
          declarations: [
            JxCssDeclaration(property: 'color', value: '#ff0000'),
          ],
        ),
        JxCssRule(
          selector: '.md\\:c-blue',
          mediaQuery: '@media (min-width: 768px)',
          declarations: [
            JxCssDeclaration(property: 'color', value: '#0000ff'),
          ],
        ),
      ];

      final css = generator.generate(rules);
      expect(css, contains('.c-red{color:#ff0000;}'));
      expect(
        css,
        contains('@media (min-width: 768px){.md\\:c-blue{color:#0000ff;}}'),
      );
    });

    test('génère un bloc :root pour les variables CSS', () {
      const generator = JxGenerator();
      final vars = {
        '--jx-colors-primary': '#2563eb',
        '--jx-spacing-4': '1rem',
      };

      final rootBlock = generator.generateRootVariables(vars);
      expect(rootBlock, contains(':root {'));
      expect(rootBlock, contains('  --jx-colors-primary: #2563eb;'));
      expect(rootBlock, contains('  --jx-spacing-4: 1rem;'));
    });
  });
}
