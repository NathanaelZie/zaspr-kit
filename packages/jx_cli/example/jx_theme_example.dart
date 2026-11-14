import 'package:jx_cli/theme.dart';

void main() {
  final theme = JxTheme.defaultTheme();
  print(theme.resolveToken(JxThemeCategory.colors, 'teal-700')); // #0f766e
  print(theme.data.getCategory(JxThemeCategory.breakpoints));
}
