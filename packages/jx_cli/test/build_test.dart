import 'dart:async';
import 'dart:io';

import 'package:jx_cli/jx_cli.dart';
import 'package:jx_core/jx_core.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  late Directory root;

  void write(String relative, String content) {
    final file = File(p.join(root.path, relative));
    file.parent.createSync(recursive: true);
    file.writeAsStringSync(content);
  }

  String readOutput([String relative = 'build/jx.css']) =>
      File(p.join(root.path, relative)).readAsStringSync();

  setUp(() => root = Directory.systemTemp.createTempSync('jx_build_test'));
  tearDown(() => root.deleteSync(recursive: true));

  group('JxProjectConfig', () {
    test('valeurs par défaut sans fichier', () {
      final config = JxProjectConfig.loadFrom(root);
      expect(config.content, ['lib', 'web']);
      expect(config.output, 'build/jx.css');
      expect(config.reset, isTrue);
    });

    test('lecture complète de jx.yaml', () {
      final config = JxProjectConfig.fromYaml('''
content: [src]
extensions: [.dart, html, md]
exclude: [generated]
output: public/app.css
minify: true
reset: false
theme:
  extend:
    colors: {brand: '#0ea5e9'}
    breakpoints: {3xl: 1920px}
  override:
    font-size: {body: 15px}
''');
      expect(config.content, ['src']);
      expect(config.extensions, ['dart', 'html', 'md']);
      expect(config.exclude, containsAll(['build', 'generated']));
      expect(config.output, 'public/app.css');
      expect(config.minify, isTrue);
      expect(config.reset, isFalse);

      final theme = config.buildTheme();
      expect(theme.resolveToken('colors', 'brand'), '#0ea5e9');
      expect(theme.resolveToken('colors', 'red'), isNotNull);
      expect(theme.resolveToken('font-size', 'body'), '15px');
      expect(theme.resolveToken('font-size', 'lg'), isNull);
    });

    test('erreurs de configuration', () {
      final fails = throwsA(isA<JxConfigException>());
      expect(() => JxProjectConfig.fromYaml('unknown: 1'), fails);
      expect(() => JxProjectConfig.fromYaml('minify: yes please'), fails);
      expect(() => JxProjectConfig.fromYaml('theme: {colours: {}}'), fails);
      expect(() => JxProjectConfig.fromYaml('content: [a'), fails);
      expect(() => JxProjectConfig.fromYaml('- a'), fails);
      expect(() => JxProjectConfig.fromYaml('dark_mode: auto'), fails);
    });

    test('dark_mode : media par défaut, class sur demande', () {
      expect(JxProjectConfig.fromYaml('minify: false').darkMode, 'media');
      final engine = JxProjectConfig.fromYaml('dark_mode: class').buildEngine();
      final rule = engine.compile('dark:c:white').rules.single;
      expect(rule.mediaQuery, isNull);
      expect(rule.fullSelector, r'.dark .dark\:c\:white');
    });
  });

  group('JxBuilder', () {
    test('scanne Dart et HTML, ignore build/ et les mots ordinaires', () {
      write('lib/app.dart', '''
class App {
  static final x = div(classes: 'flex p:4 hover:bg:blue', []);
}
''');
      write('web/index.html', '<body class="md:hidden c:[#123456]"></body>');
      write('lib/notes.txt', 'grid'); // extension non prise en compte
      write('web/build/old.html', '<p class="grid">'); // dossier exclu

      final builder = JxBuilder(
        root: root,
        config: const JxProjectConfig(reset: false),
      );
      final report = builder.build();

      expect(report.files.map((f) => p.basename(f)), [
        'app.dart',
        'index.html',
      ]);
      expect(
        report.result.matchedTokens.map((t) => t.raw),
        unorderedEquals([
          'flex',
          'p:4',
          'hover:bg:blue',
          'md:hidden',
          'c:[#123456]',
        ]),
      );

      final css = readOutput();
      expect(css, contains('.hover\\:bg\\:blue:hover'));
      expect(css, contains('@media (min-width: 768px)'));
      expect(css, isNot(contains('position: static')));
      expect(css, isNot(contains('.grid')));
    });

    test('preflight inclus par défaut, avant les utilitaires', () {
      write('web/index.html', '<div class="flex">');
      JxBuilder(root: root, config: const JxProjectConfig()).build();
      final css = readOutput();
      expect(css, startsWith('*, ::before, ::after {'));
      expect(css.indexOf('box-sizing'), lessThan(css.indexOf('.flex')));
    });

    test('thème étendu : couleur et breakpoint personnalisés', () {
      write('web/index.html', '<div class="c:brand 3xl:p:4 sm:p:2">');
      final config = JxProjectConfig.fromYaml('''
reset: false
theme:
  extend:
    colors: {brand: '#0ea5e9'}
    breakpoints: {3xl: 1920px}
''');
      final report = JxBuilder(root: root, config: config).build();
      expect(report.warnings, isEmpty);
      expect(report.result.matchedTokens, hasLength(3));
      final css = readOutput();
      expect(css, contains('color: #0ea5e9'));
      expect(css.indexOf('640px'), lessThan(css.indexOf('1920px')));
    });

    test('watch reconstruit après modification', () async {
      write('web/index.html', '<div class="flex">');
      final builder = JxBuilder(
        root: root,
        config: const JxProjectConfig(reset: false),
      );
      final stop = Completer<void>();
      final builds = StreamController<JxBuildReport>();

      final watching = builder.watch(
        onBuild: builds.add,
        until: stop.future,
        debounce: const Duration(milliseconds: 50),
      );
      final reports = StreamIterator(builds.stream);

      expect(await reports.moveNext(), isTrue);
      expect(reports.current.result.matchedTokens.single.raw, 'flex');

      // Laisse le watcher s'installer avant de modifier le fichier.
      await Future<void>.delayed(const Duration(milliseconds: 200));
      write('web/index.html', '<div class="grid p:4">');

      expect(
        await reports.moveNext().timeout(const Duration(seconds: 10)),
        isTrue,
      );
      expect(
        reports.current.result.matchedTokens.map((t) => t.raw),
        unorderedEquals(['grid', 'p:4']),
      );

      await reports.cancel();
      stop.complete();
      await watching.timeout(const Duration(seconds: 5));
    });
  });

  group('CLI', () {
    JxCliRunner runner(StringBuffer out, StringBuffer err) =>
        JxCliRunner(out: out, err: err, workingDirectory: root);

    test('build -i affiche le CSS sans écrire de fichier', () async {
      final out = StringBuffer();
      final code = await runner(
        out,
        StringBuffer(),
      ).run(['build', '-i', 'flex p:4']);
      expect(code, 0);
      expect(out.toString(), contains('.flex {'));
      expect(out.toString(), isNot(contains('box-sizing')));
      expect(File(p.join(root.path, 'build/jx.css')).existsSync(), isFalse);
    });

    test('build scanne le projet avec jx.yaml', () async {
      write(
        'jx.yaml',
        'content: [src]\noutput: out/style.css\nminify: true\nreset: false\n',
      );
      write('src/page.html', '<p class="ta:center">');
      final out = StringBuffer();
      final code = await runner(out, StringBuffer()).run(['build']);
      expect(code, 0);
      expect(out.toString(), contains('1 fichier(s)'));
      expect(readOutput('out/style.css'), '.ta\\:center{text-align:center;}\n');
    });

    test('options en ligne de commande prioritaires', () async {
      write('pages/a.html', '<p class="o:50">');
      final code = await runner(
        StringBuffer(),
        StringBuffer(),
      ).run(['build', '--content', 'pages', '-o', 'dist/x.css', '--no-reset']);
      expect(code, 0);
      expect(readOutput('dist/x.css'), contains('opacity: 0.5'));
      expect(readOutput('dist/x.css'), isNot(contains('box-sizing')));
    });

    test('jx.yaml invalide -> code 1', () async {
      write('jx.yaml', 'nope: true');
      final err = StringBuffer();
      final code = await runner(StringBuffer(), err).run(['build']);
      expect(code, 1);
      expect(err.toString(), contains('Clé inconnue'));
    });

    test('init crée jx.yaml et refuse d\'écraser sans --force', () async {
      final err = StringBuffer();
      expect(await runner(StringBuffer(), err).run(['init']), 0);
      final created = File(p.join(root.path, 'jx.yaml'));
      expect(created.existsSync(), isTrue);
      expect(
        () => JxProjectConfig.fromYaml(created.readAsStringSync()),
        returnsNormally,
      );
      expect(await runner(StringBuffer(), err).run(['init']), 1);
      expect(await runner(StringBuffer(), err).run(['init', '--force']), 0);
    });
  });
}
