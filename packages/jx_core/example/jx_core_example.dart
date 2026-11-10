import 'package:jx_core/jx_core.dart';

void main() {
  // Exemple de création de modèles fondamentaux JX CSS.
  const declaration = JxCssDeclaration(
    property: 'color',
    value: '#2563eb',
  );

  const rule = JxCssRule(
    selector: '.c-primary',
    declarations: [declaration],
  );

  print('Déclaration : ${declaration.toCss()}');
  print('Règle CSS : $rule');
}
