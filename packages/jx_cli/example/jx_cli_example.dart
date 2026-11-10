import 'package:jx_cli/jx_cli.dart';

Future<void> main() async {
  final runner = JxCliRunner();
  await runner.run(['--version']);
}
