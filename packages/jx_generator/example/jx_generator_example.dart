import 'package:jx_core/jx_core.dart';
import 'package:jx_generator/jx_generator.dart';

void main() {
  const generator = JxGenerator();
  print(generator.generate([
    const JxCssRule(
      selector: '.c-primary',
      declarations: [JxCssDeclaration(property: 'color', value: '#2563eb')],
    ),
  ]));
}
