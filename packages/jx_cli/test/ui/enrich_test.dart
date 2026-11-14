import 'dart:convert';

import 'package:jaspr/server.dart';
import 'package:jx_cli/engine.dart';
import 'package:jx_cli/ui.dart';
import 'package:test/test.dart';

Future<String> render(Component component) async {
  final response = await renderComponent(component, standalone: true);
  return utf8.decode(response.body);
}

void main() {
  setUpAll(Jaspr.initializeApp);

  test('scheme: sets color-scheme', () {
    final engine = JxEngine();
    expect(engine.compile('scheme:dark').css, contains('color-scheme: dark'));
    expect(engine.compile('scheme:light-dark').css, contains('color-scheme: light dark'));
    expect(engine.compile('scheme:[red]').warnings, isNotEmpty);
  });

  group('JxTabs vertical', () {
    test('orientation and side borders', () async {
      final html = await render(
        const JxTabs(id: 'v', orientation: JxTabsOrientation.vertical, [
          JxTab(label: 'A', children: []),
          JxTab(label: 'B', children: []),
        ]),
      );
      expect(html, contains('aria-orientation="vertical"'));
      expect(html, contains('bwr:2'));
      expect(html, isNot(contains('bwb:2')));
      expect(html, contains('md:fd:row'));
    });

    test('horizontal keeps the bottom border and no orientation', () async {
      final html = await render(
        const JxTabs(id: 'h', [JxTab(label: 'A', children: [])]),
      );
      expect(html, isNot(contains('aria-orientation')));
      expect(html, contains('bwb:2'));
    });
  });

  test('JxDropdownMenu is marked for the outside-click listener', () async {
    final html = await render(
      const JxDropdownMenu(id: 'm', label: 'Menu', items: [JxMenuItem(label: 'A', href: '/a')]),
    );
    expect(html, contains('data-jx-menu'));
  });

  group('JxSteps', () {
    test('statuses, aria-current and connectors', () async {
      final html = await render(
        const JxSteps(current: 1, [
          JxStep(label: 'Cart'),
          JxStep(label: 'Shipping', description: 'Address and speed'),
          JxStep(label: 'Payment'),
        ]),
      );
      expect(html, contains('<ol'));
      expect(html, contains('aria-label="Progress"'));
      expect('aria-current="step"'.allMatches(html), hasLength(1));
      expect(html, contains(', completed'));
      expect(html, contains('Address and speed'));
      // Two connectors: one done (after Cart), one idle (after Shipping).
      expect(html, contains('bg:blue-700'));
      expect('h:[2px]'.allMatches(html), hasLength(2));
      // Upcoming step shows its number.
      expect(html, contains('>3<'));
    });

    test('current past the end: every step complete, no current', () async {
      final html = await render(
        const JxSteps(current: 2, [JxStep(label: 'A'), JxStep(label: 'B')]),
      );
      expect(html, isNot(contains('aria-current')));
      expect(', completed'.allMatches(html), hasLength(2));
    });
  });

  group('JxStat', () {
    test('label and value in a dl, trend read aloud', () async {
      final html = await render(
        const JxStat(
          label: 'Revenue',
          value: r'$48,200',
          change: '+12%',
          trend: JxTrend.up,
          description: 'vs last month',
        ),
      );
      expect(html, contains('<dl'));
      expect(html, contains('<dt'));
      expect(html, contains(r'$48,200'));
      expect(html, contains('Increase: '));
      expect(html, contains('c:green-700'));
      expect(html, contains('vs last month'));
    });

    test('neutral change has no arrow nor announced trend', () async {
      final html = await render(
        const JxStat(label: 'Users', value: '1,204', change: '0%'),
      );
      expect(html, isNot(contains('<svg')));
      expect(html, isNot(contains('Increase')));
    });
  });

  test('JxSegmentedControl renders radios under a legend', () async {
    final html = await render(
      const JxSegmentedControl(
        name: 'range',
        legend: 'Range',
        hideLegend: true,
        value: 'week',
        options: [(value: 'day', label: 'Day'), (value: 'week', label: 'Week')],
      ),
    );
    expect(html, contains('<fieldset'));
    expect(html, contains('class="sr-only"'));
    expect('type="radio"'.allMatches(html), hasLength(2));
    expect('name="range"'.allMatches(html), hasLength(2));
    expect(html, contains('peer-checked:bg:white'));
    expect(html, contains('checked'));
  });

  group('JxSlider', () {
    test('range input with bounds, value and unit', () async {
      final html = await render(
        const JxSlider(
          id: 'volume',
          label: 'Volume',
          value: 40,
          unit: '%',
          showBounds: true,
          hint: 'Applies to every device.',
        ),
      );
      expect(html, contains('type="range"'));
      expect(html, contains('min="0"'));
      expect(html, contains('max="100"'));
      expect(html, contains('<output'));
      expect(html, contains('40%'));
      expect(html, contains('aria-valuetext="40%"'));
      expect(html, contains('100%'));
      expect(html, contains('aria-describedby="volume-message"'));
    });

    test('no unit: no aria-valuetext', () async {
      final html = await render(const JxSlider(id: 's', label: 'Size', value: 2.5, step: 0.5));
      expect(html, isNot(contains('aria-valuetext')));
      expect(html, contains('2.5'));
    });
  });

  group('JxDateField', () {
    test('maps types and keeps min, max and the field wiring', () async {
      final html = await render(
        const JxDateField(
          id: 'start',
          label: 'Start date',
          min: '2026-01-01',
          max: '2026-12-31',
          required: true,
          error: 'Pick a date in 2026.',
        ),
      );
      expect(html, contains('type="date"'));
      expect(html, contains('min="2026-01-01"'));
      expect(html, contains('max="2026-12-31"'));
      expect(html, contains('aria-invalid="true"'));
      expect(html, contains('dark:scheme:dark'));
      expect(html, contains('for="start"'));
    });

    test('time, date and time, month and week', () async {
      for (final (type, html) in [
        (JxDateType.time, 'type="time"'),
        (JxDateType.dateTime, 'type="datetime-local"'),
        (JxDateType.month, 'type="month"'),
        (JxDateType.week, 'type="week"'),
      ]) {
        expect(await render(JxDateField(id: 'd', label: 'D', type: type)), contains(html));
      }
    });
  });
}
