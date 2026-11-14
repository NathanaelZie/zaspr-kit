import 'dart:convert';
import 'dart:io';

import 'package:jx_cli/jx_cli.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  late Directory root;

  void write(String relative, String content) {
    final file = File(p.join(root.path, relative));
    file.parent.createSync(recursive: true);
    file.writeAsStringSync(content);
  }

  setUp(() {
    root = Directory.systemTemp.createTempSync('jx_packages_test');
    write('deps/kit/lib/src/button.dart', "const b = 'px:4 c:teal';");
    write('app/lib/main.dart', "div(classes: 'flex')");
    write(
      'app/.dart_tool/package_config.json',
      jsonEncode({
        'configVersion': 2,
        'packages': [
          {'name': 'kit', 'rootUri': '../../deps/kit', 'packageUri': 'lib/'},
          {'name': 'app', 'rootUri': '../', 'packageUri': 'lib/'},
        ],
      }),
    );
  });
  tearDown(() => root.deleteSync(recursive: true));

  test('resolves lib folders from package_config.json', () {
    final app = Directory(p.join(root.path, 'app'));
    final resolved = const JxPackageResolver().resolve(app, ['kit', 'nope']);
    expect(
      resolved.libraries['kit'],
      p.normalize(p.join(root.path, 'deps', 'kit', 'lib')),
    );
    expect(resolved.missing, ['nope']);
  });

  test('jx build scans the listed packages', () {
    final app = Directory(p.join(root.path, 'app'));
    final report = JxBuilder(
      root: app,
      config: JxProjectConfig.fromYaml(
        'content: [lib]\npackages: [kit, nope]\nreset: false',
      ),
    ).build();
    expect(report.result.css, contains('display: flex'));
    expect(report.result.css, contains('padding-left: 1rem'));
    expect(report.result.css, contains('color:'));
    expect(report.warnings.join(), contains('Package "nope"'));
  });
}
