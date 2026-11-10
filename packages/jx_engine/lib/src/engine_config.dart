import 'package:jx_core/jx_core.dart';
import 'package:jx_rules/jx_rules.dart';
import 'package:jx_theme/jx_theme.dart';

/// Configuration d'initialisation du moteur de compilation JX CSS.
final class JxEngineConfig {
  /// Configuration générale JX.
  final JxConfig config;

  /// Thème actif utilisé lors de la compilation.
  final JxThemeContract theme;

  /// Registre des règles CSS utilitaires.
  final JxRuleRegistry registry;

  JxEngineConfig({
    this.config = const JxConfig(),
    JxThemeContract? theme,
    JxRuleRegistry? registry,
  })  : theme = theme ?? JxTheme.defaultTheme(),
        registry = registry ?? JxRuleRegistry();
}
