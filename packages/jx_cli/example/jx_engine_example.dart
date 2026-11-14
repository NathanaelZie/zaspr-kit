import 'package:jx_cli/engine.dart';

void main() {
  final result = JxEngine().compile('p:4 md:p:8 hover:bg:blue-700 c:red!');
  print(result.css); // feuille générée
  print(result.ruleCount); // nombre de règles
  print(result.warnings); // classes rejetées
}
