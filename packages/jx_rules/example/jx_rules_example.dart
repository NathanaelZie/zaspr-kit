import 'package:jx_rules/jx_rules.dart';

void main() {
  final registry = JxRuleRegistry()..registerPreset(const JxDefaultPreset());
  print('Règles disponibles : ${registry.count}');
}
