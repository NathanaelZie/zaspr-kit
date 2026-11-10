/// Options régissant le formatage et la génération du CSS.
final class JxGeneratorOptions {
  /// Active la minification (suppression des espaces et sauts de ligne superflus).
  final bool minify;

  /// Indentation utilisée en mode non-minifié (ex. 2 espaces).
  final String indent;

  const JxGeneratorOptions({
    this.minify = false,
    this.indent = '  ',
  });
}
