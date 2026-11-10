import 'dart:io';

import 'package:jx_cli/jx_cli.dart';

Future<void> main(List<String> arguments) async {
  final runner = JxCliRunner();
  final exitCode = await runner.run(arguments);
  exit(exitCode);
}
