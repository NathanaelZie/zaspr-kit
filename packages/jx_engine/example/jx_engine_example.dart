import 'package:jx_engine/jx_engine.dart';

void main() {
  final engine = JxEngine();
  final result = engine.compile('');
  print('Engine initialized successfully. Rule count: ${result.ruleCount}');
}
