import 'dart:convert';

import 'package:jaspr/server.dart';
import 'package:jx_engine/jx_engine.dart';
import 'package:jx_ui/jx_ui.dart';
import 'package:jx_ui/src/styles.dart' as s;
import 'package:test/test.dart';

Future<String> render(Component component) async {
  final response = await renderComponent(component, standalone: true);
  return utf8.decode(response.body);
}

void main() {
  setUpAll(Jaspr.initializeApp);

  test('every class in the styles compiles with the default theme', () {
    final groups = [
      s.focusRing,
      s.buttonBase,
      ...s.buttonVariants.values,
      ...s.buttonSizes.values,
      s.card,
      s.cardTitle,
      s.badgeBase,
      ...s.badgeTones.values,
      s.alertBase,
      ...s.alertTones.values,
      s.alertTitle,
      s.fieldWrapper,
      s.fieldLabel,
      s.fieldInput,
      s.fieldInputInvalid,
      s.fieldHint,
      s.fieldError,
    ];
    final engine = JxEngine();
    final failures = <String>[];
    for (final jx in groups.expand((g) => g.split(' '))) {
      if (jx.isEmpty) continue;
      final result = engine.compile(jx);
      if (result.warnings.isNotEmpty || result.ruleCount == 0) {
        failures.add('$jx: ${result.warnings.join('; ')}');
      }
    }
    expect(failures, isEmpty);
  });

  test('JxButton renders a button, or a link with href', () async {
    final html = await render(
      const JxButton([.text('Save')], variant: JxButtonVariant.danger),
    );
    expect(html, contains('type="button"'));
    expect(html, contains('bg:red-700'));
    expect(html, contains('Save'));

    final link = await render(const JxButton([.text('Docs')], href: '/docs'));
    expect(link, contains('href="/docs"'));
  });

  test('JxAlert picks the ARIA role from the tone', () async {
    expect(
      await render(const JxAlert([.text('x')], tone: JxTone.danger)),
      contains('role="alert"'),
    );
    expect(
      await render(const JxAlert([.text('x')], tone: JxTone.success)),
      contains('role="status"'),
    );
  });

  test('JxTextField links label, input and message', () async {
    final html = await render(
      const JxTextField(id: 'email', label: 'Email', error: 'Required'),
    );
    expect(html, contains('for="email"'));
    expect(html, contains('id="email"'));
    expect(html, contains('aria-invalid="true"'));
    expect(html, contains('aria-describedby="email-message"'));
    expect(html, contains('id="email-message"'));
    expect(html, contains('bc:red-500'));
  });

  test('JxCard and JxBadge render their content', () async {
    final html = await render(
      const JxCard(title: 'Plan', [JxBadge('New', tone: JxTone.info)]),
    );
    expect(html, contains('<h3'));
    expect(html, contains('Plan'));
    expect(html, contains('bg:blue-100'));
  });
}
