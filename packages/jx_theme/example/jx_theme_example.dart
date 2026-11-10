import 'package:jx_theme/jx_theme.dart';

void main() {
  final theme = JxTheme.defaultTheme();
  print('Theme name: ${theme.name}');

  final color = theme.resolveToken('colors', 'current');
  print('Resolved color current: $color');

  final vars = theme.getCssVariables();
  print('Variables CSS générées: ${vars.length}');
}
