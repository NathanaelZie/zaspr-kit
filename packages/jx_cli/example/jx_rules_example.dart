import 'package:jx_cli/rules.dart';

void main() {
  final registry = JxRuleRegistry()..registerPreset(const JxDefaultPreset());
  print('Règles disponibles : ${registry.count}');
}
