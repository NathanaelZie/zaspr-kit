import 'package:jx_parser/jx_parser.dart';

void main() {
  const parser = JxParser();
  for (final token in parser.parse(
    'md:hover:bg:blue! w:[calc(100%_-_2rem)] -mt:2',
  )) {
    print(
      '${token.variants} ${token.identifier} ${token.value} ${token.isImportant}',
    );
  }
}
