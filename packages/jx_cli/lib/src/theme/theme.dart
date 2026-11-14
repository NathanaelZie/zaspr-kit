import 'package:jx_cli/core.dart';

import 'default_tokens.dart';
import 'theme_data.dart';

/// Implémentation standard du contrat de thème JX CSS.
final class JxTheme implements JxThemeContract {
  @override
  final String name;

  /// Préfixe utilisé pour générer les variables CSS (défaut: `jx`).
  final String prefix;

  /// Données de tokens associées au thème.
  final JxThemeData data;

  JxTheme({required this.name, this.prefix = 'jx', JxThemeData? data})
    : data = data ?? JxThemeData();

  /// Crée le thème par défaut du framework (palette, espacements,
  /// breakpoints, typographie, rayons, bordures et opacités).
  factory JxTheme.defaultTheme() {
    return JxTheme(
      name: 'default',
      data: JxThemeData.fromMap(JxDefaultTokens.all),
    );
  }

  @override
  String? resolveToken(String category, String key) {
    return data.getValue(category, key);
  }

  @override
  Map<String, String> getCssVariables() {
    final variables = <String, String>{};
    for (final token in data.getAllTokens()) {
      variables[token.toCssVariableName(prefix: prefix)] = token.value;
    }
    return variables;
  }
}
