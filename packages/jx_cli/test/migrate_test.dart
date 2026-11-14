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

  String read(String relative) =>
      File(p.join(root.path, relative)).readAsStringSync();

  Future<(int, String)> run(List<String> args) async {
    final out = StringBuffer();
    final code = await JxCliRunner(
      out: out,
      err: out,
      workingDirectory: root,
    ).run(args);
    return (code, out.toString());
  }

  setUp(() => root = Directory.systemTemp.createTempSync('jx_migrate_test'));
  tearDown(() => root.deleteSync(recursive: true));

  group('JxMigrator', () {
    test('rewrites Dart classes: arguments only', () {
      final result = JxMigrator().migrateSource('a.dart', '''
div(classes: 'flex items-center p-4', [
  p(classes: "text-sm hover:text-blue-500", [.text('items-center')]),
  span(classes: 'flex p:4', []),
  span(classes: 'p-\$size', []),
])''');
      expect(result.changes, hasLength(2));
      expect(result.migrated, contains("classes: 'flex ai:center p:4'"));
      expect(result.migrated, contains('classes: "fs:sm hover:c:blue-500"'));
      // Free text, JX classes and interpolated strings are left alone.
      expect(result.migrated, contains(".text('items-center')"));
      expect(result.migrated, contains("classes: 'flex p:4'"));
      expect(result.migrated, contains(r"classes: 'p-$size'"));
      expect(result.changes.first.line, 1);
      expect(result.changes.last.line, 2);
    });

    test('rewrites HTML class attributes', () {
      final result = JxMigrator().migrateSource(
        'index.html',
        '<div class="grid grid-cols-3 gap-6"><p class=\'font-bold\'>x</p></div>',
      );
      expect(
        result.migrated,
        '<div class="grid cols:3 gap:6"><p class=\'fw:bold\'>x</p></div>',
      );
    });
  });

  group('jx migrate', () {
    test('--input prints the conversion and the notes', () async {
      final (code, out) = await run([
        'migrate',
        '-i',
        'px-4 bg-sky-500 space-x-2',
      ]);
      expect(code, 0);
      expect(out, startsWith('px:4 bg:blue-500 space-x-2\n'));
      expect(out, contains('~ bg-sky-500 -> bg:blue-500'));
      expect(out, contains('! space-x-2 kept'));
    });

    test('lists changes without writing, then writes with --write', () async {
      const source = "div(classes: 'flex justify-center')";
      write('lib/app.dart', source);

      final (code, out) = await run(['migrate']);
      expect(code, 0);
      expect(out, contains('flex jc:center'));
      expect(out, contains('Run again with --write'));
      expect(read('lib/app.dart'), source);

      final (writeCode, writeOut) = await run(['migrate', '--write']);
      expect(writeCode, 0);
      expect(writeOut, contains('Migrated 1 attribute(s) in 1 file(s).'));
      expect(read('lib/app.dart'), "div(classes: 'flex jc:center')");

      final (_, again) = await run(['migrate']);
      expect(again, contains('No Tailwind classes found'));
    });
  });
}
