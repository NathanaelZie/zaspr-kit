import 'package:jx_cli/jx_cli.dart';
import 'package:test/test.dart';

void main() {
  group('JxCliRunner', () {
    test('affiche la version avec --version', () async {
      final out = StringBuffer();
      final err = StringBuffer();
      final runner = JxCliRunner(out: out, err: err);

      final code = await runner.run(['--version']);
      expect(code, equals(0));
      expect(out.toString(), contains('JX CSS CLI version ${JxCliRunner.version}'));
    });

    test('affiche l\'aide avec --help', () async {
      final out = StringBuffer();
      final err = StringBuffer();
      final runner = JxCliRunner(out: out, err: err);

      final code = await runner.run(['--help']);
      expect(code, equals(0));
      expect(out.toString(), contains('Usage: jx <commande> [options]'));
      expect(out.toString(), contains('--help'));
    });

    test('exécute la sous-commande build', () async {
      final out = StringBuffer();
      final err = StringBuffer();
      final runner = JxCliRunner(out: out, err: err);

      final code = await runner.run(['build', '--input', '']);
      expect(code, equals(0));
      expect(out.toString(), contains('Compilation réussie'));
    });

    test('renvoie une erreur en cas d\'option inconnue', () async {
      final out = StringBuffer();
      final err = StringBuffer();
      final runner = JxCliRunner(out: out, err: err);

      final code = await runner.run(['--invalid-flag']);
      expect(code, equals(1));
      expect(err.toString(), contains('Erreur d\'arguments'));
    });
  });
}
