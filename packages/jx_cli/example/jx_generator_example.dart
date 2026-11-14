import 'package:jx_cli/core.dart';
import 'package:jx_cli/generator.dart';

void main() {
  const generator = JxGenerator();
  print(
    generator.generate([
      const JxCssRule(
        selector: '.c-primary',
        declarations: [JxCssDeclaration(property: 'color', value: '#2563eb')],
      ),
    ]),
  );
}
