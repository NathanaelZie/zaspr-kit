import 'package:jx_core/jx_core.dart';

void main() {
  const rule = JxCssRule(
    selector: '.c-primary',
    declarations: [JxCssDeclaration(property: 'color', value: '#2563eb')],
  );
  print(rule);
}
