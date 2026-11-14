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

  /// Sélecteur activant la variante `dark:` (ex. `.dark`, posé sur `<html>`).
  /// `null` : `dark:` suit la préférence système (`prefers-color-scheme`).
  final String? darkSelector;

  /// Crée une configuration.
  ///
  /// Sans [registry] explicite, le registre est pré-rempli avec
  /// [JxDefaultPreset] sauf si [includeDefaultPreset] vaut `false`.
  JxEngineConfig({
    this.config = const JxConfig(),
    JxThemeContract? theme,
    JxRuleRegistry? registry,
    bool includeDefaultPreset = true,
    this.darkSelector,
  }) : theme = theme ?? JxTheme.defaultTheme(),
       registry =
           registry ??
           (includeDefaultPreset
               ? JxRuleRegistry.withPreset()
               : JxRuleRegistry());
}
