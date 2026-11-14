import '../models/class_token.dart';
import '../models/compile_result.dart';

/// Contrat du moteur d'orchestration de compilation JX CSS.
abstract interface class JxEngineContract {
  /// Compile une chaîne de classes utility et produit le résultat CSS complet.
  JxCompileResult compile(String classNames);

  /// Compile une liste de tokens déjà analysés.
  JxCompileResult compileTokens(List<JxClassToken> tokens);
}
