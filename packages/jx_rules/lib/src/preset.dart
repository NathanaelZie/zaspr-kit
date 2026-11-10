import 'package:jx_core/jx_core.dart';

import 'utilities.dart';

/// Ensemble nommé de règles pouvant être enregistré d'un bloc dans un registre.
abstract interface class JxPreset {
  /// Nom du preset (ex. `default`).
  String get name;

  /// Règles fournies par le preset, dans leur ordre de priorité.
  List<JxRuleContract> get rules;
}

/// Preset par défaut regroupant toutes les règles utilitaires de base de JX CSS.
final class JxDefaultPreset implements JxPreset {
  const JxDefaultPreset();

  @override
  String get name => 'default';

  @override
  List<JxRuleContract> get rules => [
    ...jxDisplayRules,
    ...jxSpacingRules,
    ...jxColorRules,
    ...jxTypographyRules,
    ...jxSizingRules,
    ...jxBorderRules,
    ...jxFlexboxRules,
    ...jxPositionRules,
    ...jxOpacityRules,
  ];
}
