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

  group('package folders', () {
    late Directory app;

    setUp(() {
      write('deps/jx_cli/lib/src/ui/styles.dart', "const m = 'w:full';");
      write('deps/jx_cli/lib/src/engine/engine.dart', "const e = 'h:full';");
      write(
        'app/.dart_tool/package_config.json',
        jsonEncode({
          'configVersion': 2,
          'packages': [
            {'name': 'kit', 'rootUri': '../../deps/kit', 'packageUri': 'lib/'},
            {
              'name': 'jx_cli',
              'rootUri': '../../deps/jx_cli',
              'packageUri': 'lib/',
            },
          ],
        }),
      );
      app = Directory(p.join(root.path, 'app'));
    });

    test('jx_cli/ui resolves to lib/src/ui', () {
      final resolved = const JxPackageResolver().resolve(app, [
        'jx_cli/ui',
        'kit/src',
      ]);
      final lib = p.normalize(p.join(root.path, 'deps', 'jx_cli', 'lib'));
      expect(resolved.libraries['jx_cli/ui'], p.join(lib, 'src', 'ui'));
      expect(resolved.roots['jx_cli/ui'], lib);
      expect(
        resolved.libraries['kit/src'],
        p.normalize(p.join(root.path, 'deps', 'kit', 'lib', 'src')),
      );
      expect(resolved.missing, isEmpty);
    });

    test('jx_ui falls back to jx_cli/ui when not installed', () {
      final resolved = const JxPackageResolver().resolve(app, ['jx_ui']);
      expect(
        resolved.libraries['jx_ui'],
        p.normalize(p.join(root.path, 'deps', 'jx_cli', 'lib', 'src', 'ui')),
      );
    });

    test('jx build scans only the listed folder', () {
      final css = JxBuilder(
        root: app,
        config: JxProjectConfig.fromYaml(
          'content: [lib]\npackages: [jx_cli/ui]\nreset: false',
        ),
      ).build().result.css;
      expect(css, contains('width: 100%'));
      expect(css, isNot(contains('height: 100%')));
    });
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
