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

  group('tones in dark mode', () {
    test('badges and alerts have dark variants', () async {
      expect(
        await render(const JxBadge('Paid', tone: JxTone.success)),
        contains('dark:bg:green-900'),
      );
      expect(
        await render(const JxAlert([Component.text('x')], tone: JxTone.danger)),
        contains('dark:bc:red-700'),
      );
    });
  });

  group('required marker', () {
    test('text fields show a hidden asterisk and keep required', () async {
      final html = await render(
        const JxTextField(id: 'company', label: 'Company', required: true),
      );
      expect(html, contains('*'));
      expect(html, contains('aria-hidden="true"'));
      expect(html, contains('required'));
    });

    test('no marker when optional', () async {
      final html = await render(const JxTextField(id: 'c', label: 'Company'));
      expect(html, isNot(contains('c:red-700')));
    });
  });

  group('choices', () {
    test('checkbox error is linked and marks the input invalid', () async {
      final html = await render(
        const JxCheckbox(
          id: 'terms',
          label: 'I accept the terms',
          description: 'Required to continue.',
          error: 'Accept the terms to continue.',
          required: true,
        ),
      );
      expect(html, contains('aria-describedby="terms-description terms-error"'));
      expect(html, contains('aria-invalid="true"'));
      expect(html, contains('id="terms-error"'));
      expect(html, contains('Accept the terms to continue.'));
    });

    test('radio group hint and error', () async {
      final hinted = await render(
        const JxRadioGroup(
          name: 'size',
          legend: 'Size',
          hint: 'You can change it later.',
          options: [(value: 's', label: 'Small')],
        ),
      );
      expect(hinted, contains('aria-describedby="size-message"'));
      expect(hinted, contains('You can change it later.'));
      expect(hinted, isNot(contains('aria-invalid')));

      final invalid = await render(
        const JxRadioGroup(
          name: 'size',
          legend: 'Size',
          error: 'Choose a size.',
          required: true,
          options: [(value: 's', label: 'Small'), (value: 'l', label: 'Large')],
        ),
      );
      expect('aria-invalid="true"'.allMatches(invalid), hasLength(2));
      expect(invalid, contains('Choose a size.'));
      expect(invalid, isNot(contains('You can change')));
    });
  });

  group('JxProgress', () {
    test('indeterminate without a value', () async {
      final html = await render(const JxProgress(label: 'Uploading'));
      expect(html, contains('anim:indeterminate'));
      expect(html, contains('aria-busy="true"'));
      expect(html, isNot(contains('aria-valuenow')));
      expect(html, isNot(contains('%')));
    });

    test('determinate keeps its values', () async {
      final html = await render(const JxProgress(value: 40, label: 'Upload'));
      expect(html, contains('aria-valuenow="40"'));
      expect(html, contains('40%'));
    });

    test('the indeterminate animation compiles with its keyframes', () {
      final css = JxEngine().compile('anim:indeterminate').css;
      expect(css, contains('jx-indeterminate'));
      expect(css, contains('@keyframes'));
    });
  });

  test('JxTooltip can be referenced by the element it describes', () async {
    final html = await render(
      JxTooltip(
        id: 'copy-tip',
        text: 'Copy the link',
        child: JxButton(
          const [Component.text('Copy')],
          attributes: JxTooltip.describedBy('copy-tip'),
        ),
      ),
    );
    expect(html, contains('id="copy-tip"'));
    expect(html, contains('aria-describedby="copy-tip"'));
  });

  group('JxTabs', () {
    test('tablist, roving tabindex and hidden panels', () async {
      final html = await render(
        const JxTabs(id: 'settings', label: 'Settings', initialIndex: 1, [
          JxTab(label: 'Profile', children: [Component.text('Profile panel')]),
          JxTab(label: 'Billing', children: [Component.text('Billing panel')]),
          JxTab(label: 'Danger', disabled: true, children: []),
        ]),
      );
      expect(html, contains('role="tablist"'));
      expect(html, contains('aria-label="Settings"'));
      expect('role="tab"'.allMatches(html), hasLength(3));
      expect('role="tabpanel"'.allMatches(html), hasLength(3));
      expect(html, contains('aria-controls="settings-panel-1"'));
      expect(html, contains('aria-labelledby="settings-tab-0"'));
      expect('aria-selected="true"'.allMatches(html), hasLength(1));
      expect('tabindex="-1"'.allMatches(html), hasLength(2));
      // Two hidden panels: Profile and Danger.
      expect(RegExp(r'role="tabpanel"[^>]*hidden').allMatches(html), hasLength(2));
      expect(html, contains('Billing panel'));
    });

    test('initialIndex is clamped', () async {
      final html = await render(
        const JxTabs(id: 't', initialIndex: 9, [
          JxTab(label: 'A', children: []),
          JxTab(label: 'B', children: []),
        ]),
      );
      expect(html, contains('id="t-tab-1"'));
      expect(
        RegExp(r'id="t-tab-1"[^>]*aria-selected="true"|aria-selected="true"[^>]*id="t-tab-1"')
            .hasMatch(html),
        isTrue,
      );
    });
  });

  group('JxDropdownMenu', () {
    test('details, summary styled as a button, links and actions', () async {
      final html = await render(
        JxDropdownMenu(
          id: 'account',
          label: 'Account',
          align: JxMenuAlign.end,
          items: [
            const JxMenuItem(label: 'Profile', href: '/profile'),
            const JxMenuItem(label: 'Billing', href: '/billing', disabled: true),
            const JxMenuItem.separator(),
            JxMenuItem(label: 'Sign out', danger: true, onSelect: () {}),
          ],
        ),
      );
      expect(html, contains('<details'));
      expect(html, contains('id="account"'));
      expect(html, contains('<summary'));
      expect(html, contains('href="/profile"'));
      expect(html, isNot(contains('href="/billing"')));
      expect(html, contains('aria-disabled="true"'));
      expect(html, contains('role="separator"'));
      expect(html, contains('right:0'));
      expect(html, contains('c:red-700'));
      expect(html, contains('type="button"'));
    });
  });

  group('JxToast', () {
    test('tone picks the role; dismiss button is named', () async {
      final urgent = await render(
        JxToast('Payment failed.', tone: JxTone.danger, onDismiss: () {}),
      );
      expect(urgent, contains('role="alert"'));
      expect(urgent, contains('aria-label="Dismiss"'));

      final calm = await render(const JxToast('Saved.', title: 'Done', tone: JxTone.success));
      expect(calm, contains('role="status"'));
      expect(calm, isNot(contains('aria-label="Dismiss"')));
      expect(calm, contains('Done'));
    });

    test('region is a named landmark in its corner', () async {
      final html = await render(
        const JxToastRegion([JxToast('Saved.')], position: JxToastPosition.topStart),
      );
      expect(html, contains('<section'));
      expect(html, contains('aria-label="Notifications"'));
      expect(html, contains('top:4 left:4'));
    });
  });

  test('JxCombobox links the input to its datalist', () async {
    final html = await render(
      const JxCombobox(
        id: 'city',
        label: 'City',
        suggestions: ['Paris', 'Lyon'],
        hint: 'Type to search.',
        required: true,
      ),
    );
    expect(html, contains('list="city-suggestions"'));
    expect(html, contains('<datalist id="city-suggestions"'));
    expect(html, contains('value="Paris"'));
    expect(html, contains('aria-describedby="city-message"'));
    expect(html, contains('for="city"'));
  });
}
