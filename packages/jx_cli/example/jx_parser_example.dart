import 'package:jx_cli/parser.dart';

void main() {
  const parser = JxParser();

  // Tokens des classes valides.
  for (final token in parser.parse(
    'md:hover:bg:blue! w:[calc(100%_-_2rem)] -mt:2',
  )) {
    print('${token.variants} ${token.identifier} ${token.value}');
  }

  // Diagnostic d'une classe refusée.
  final outcome = parser.analyze('c:[red;}body{display:none]');
  print(outcome.isValid); // false
  print(outcome.failure!.code); // JxParseErrorCode.unsafeValue
  print(outcome.failure);

  // Rapport complet d'une liste de classes.
  final report = parser.analyzeAll('flex c: p:4');
  print('${report.tokens.length} valides, ${report.failures.length} refusée');
}
