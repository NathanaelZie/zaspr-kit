import '../models/class_token.dart';

/// Contrat du parseur de syntaxe de classes utility.
abstract interface class JxParserContract {
  /// Analyse une chaîne contenant plusieurs classes séparées par des espaces.
  List<JxClassToken> parse(String classNames);

  /// Analyse une classe unique et retourne son token correspondant ou `null`.
  JxClassToken? parseToken(String rawClassName);
}
