import 'package:jx_parser/jx_parser.dart';

void main() {
  const parser = JxParser();
  final tokens = parser.parse('c:red hover:bg:blue p:4!');

  for (final token in tokens) {
    print('Token: ${token.raw} -> id: ${token.identifier}, val: ${token.value}');
  }
}
