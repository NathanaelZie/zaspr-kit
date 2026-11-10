import 'package:jx_core/jx_core.dart';

import 'theme_data.dart';
import 'token_value.dart';

/// Implémentation standard du contrat de thème JX CSS.
final class JxTheme implements JxThemeContract {
  @override
  final String name;

  /// Préfixe utilisé pour générer les variables CSS (défaut: `jx`).
  final String prefix;

  /// Données de tokens associées au thème.
  final JxThemeData data;

  JxTheme({
    required this.name,
    this.prefix = 'jx',
    JxThemeData? data,
  }) : data = data ?? JxThemeData();

  /// Crée un thème minimal par défaut pour initialiser le framework.
  factory JxTheme.defaultTheme() {
    final themeData = JxThemeData();
    // Tokens de base génériques
    themeData.setToken(const JxTokenValue(
      category: 'colors',
      key: 'transparent',
      value: 'transparent',
    ));
    themeData.setToken(const JxTokenValue(
      category: 'colors',
      key: 'current',
      value: 'currentColor',
    ));
    themeData.setToken(const JxTokenValue(
      category: 'spacing',
      key: '0',
      value: '0px',
    ));
    themeData.setToken(const JxTokenValue(
      category: 'spacing',
      key: '1',
      value: '0.25rem',
    ));
    return JxTheme(name: 'default', data: themeData);
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
