/// Noms canoniques des catégories de tokens du thème JX CSS.
///
/// Les noms sont en kebab-case afin de produire des variables CSS lisibles
/// (ex. `--jx-font-size-lg`).
abstract final class JxThemeCategory {
  static const colors = 'colors';
  static const spacing = 'spacing';
  static const breakpoints = 'breakpoints';
  static const fontSize = 'font-size';
  static const fontWeight = 'font-weight';
  static const lineHeight = 'line-height';
  static const borderRadius = 'border-radius';
  static const borderWidth = 'border-width';
  static const opacity = 'opacity';
  static const shadow = 'shadow';
}
