/// Exceptions fondamentales du framework JX CSS.
base class JxException implements Exception {
  /// Message d'erreur explicatif.
  final String message;

  /// Contexte ou cause sous-jacente facultative.
  final Object? cause;

  const JxException(this.message, [this.cause]);

  @override
  String toString() {
    if (cause != null) {
      return '$runtimeType: $message (Cause: $cause)';
    }
    return '$runtimeType: $message';
  }
}

/// Exception levée lors d'une erreur d'analyse syntaxique des classes.
final class JxParseException extends JxException {
  const JxParseException(super.message, [super.cause]);
}

/// Exception levée lors d'une erreur de définition ou d'évaluation de règle CSS.
final class JxRuleException extends JxException {
  const JxRuleException(super.message, [super.cause]);
}

/// Exception levée lors d'un problème de résolution de thème ou de token.
final class JxThemeException extends JxException {
  const JxThemeException(super.message, [super.cause]);
}

/// Exception levée en cas de configuration invalide.
final class JxConfigException extends JxException {
  const JxConfigException(super.message, [super.cause]);
}
