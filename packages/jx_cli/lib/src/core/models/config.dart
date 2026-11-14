/// Configuration générale du compilateur et de l'environnement JX CSS.
final class JxConfig {
  /// Préfixe optionnel ajouté aux classes générées.
  final String prefix;

  /// Active la minification du CSS produit.
  final bool minify;

  /// Indique si les styles de réinitialisation (reset / preflight) doivent être inclus.
  final bool includeReset;

  /// Répertoire de sortie par défaut pour la CLI.
  final String outputPath;

  const JxConfig({
    this.prefix = '',
    this.minify = false,
    this.includeReset = false,
    this.outputPath = 'build/jx.css',
  });

  /// Copie la configuration en surchargeant les champs spécifiés.
  JxConfig copyWith({
    String? prefix,
    bool? minify,
    bool? includeReset,
    String? outputPath,
  }) {
    return JxConfig(
      prefix: prefix ?? this.prefix,
      minify: minify ?? this.minify,
      includeReset: includeReset ?? this.includeReset,
      outputPath: outputPath ?? this.outputPath,
    );
  }
}
