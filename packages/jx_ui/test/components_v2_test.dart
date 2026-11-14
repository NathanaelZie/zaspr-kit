import 'dart:convert';

import 'package:jaspr/server.dart';
import 'package:jx_ui/jx_ui.dart';
import 'package:test/test.dart';

Future<String> render(Component component) async {
  final response = await renderComponent(component, standalone: true);
  return utf8.decode(response.body);
}

void main() {
  setUpAll(Jaspr.initializeApp);

  test('JxButton loading disables it and shows a decorative spinner', () async {
    final html = await render(
      const JxButton([Component.text('Save')], loading: true, fullWidth: true),
    );
    expect(html, contains('aria-busy="true"'));
    expect(html, contains('disabled'));
    expect(html, contains('anim:spin'));
    expect(html, contains('w:full'));
    expect(html, isNot(contains('role="status"')));
  });

  test('JxCard renders description and footer', () async {
    final html = await render(
      const JxCard(
        title: 'Plan',
        description: 'Billed monthly',
        footer: [
          JxButton([Component.text('Upgrade')]),
        ],
        [],
      ),
    );
    expect(html, contains('Billed monthly'));
    expect(html, contains('bwt:1'));
    expect(html, contains('Upgrade'));
  });

  test('JxTextArea and JxSelect link label, control and message', () async {
    final area = await render(
      const JxTextArea(id: 'bio', label: 'Bio', error: 'Too long'),
    );
    expect(area, contains('<textarea'));
    expect(area, contains('for="bio"'));
    expect(area, contains('aria-describedby="bio-message"'));
    expect(area, contains('aria-invalid="true"'));

    final select = await render(
      const JxSelect(
        id: 'plan',
        label: 'Plan',
        value: 'pro',
        placeholder: 'Choose',
        options: [(value: 'free', label: 'Free'), (value: 'pro', label: 'Pro')],
      ),
    );
    expect(select, contains('<select'));
    expect(select, contains('Choose'));
    expect(
      RegExp(r'<option[^>]*value="pro"[^>]*selected').hasMatch(select),
      isTrue,
    );
  });

  test('JxCheckbox, JxSwitch and JxRadioGroup', () async {
    final checkbox = await render(
      const JxCheckbox(
        id: 'terms',
        label: 'I agree',
        description: 'Required to continue',
        checked: true,
      ),
    );
    expect(checkbox, contains('type="checkbox"'));
    expect(checkbox, contains('aria-describedby="terms-description"'));
    expect(checkbox, contains('checked'));

    final toggle = await render(const JxSwitch(id: 'wifi', label: 'Wi-Fi'));
    expect(toggle, contains('role="switch"'));
    expect(toggle, contains('peer-checked:tx:5'));

    final radios = await render(
      const JxRadioGroup(
        name: 'size',
        legend: 'Size',
        value: 'm',
        options: [(value: 's', label: 'Small'), (value: 'm', label: 'Medium')],
      ),
    );
    expect(radios, contains('<fieldset'));
    expect(radios, contains('<legend'));
    expect(radios, contains('id="size-m"'));
    expect('type="radio"'.allMatches(radios), hasLength(2));
  });

  test('JxSpinner, JxProgress, JxSkeleton and JxEmptyState', () async {
    expect(await render(const JxSpinner()), contains('role="status"'));
    final progress = await render(
      const JxProgress(value: 30, max: 60, label: 'Upload'),
    );
    expect(progress, contains('role="progressbar"'));
    expect(progress, contains('aria-valuenow="30"'));
    expect(progress, contains('50%'));
    expect(await render(const JxSkeleton()), contains('aria-hidden="true"'));
    expect(
      await render(const JxEmptyState(title: 'No results', text: 'Try again')),
      contains('No results'),
    );
  });

  test('JxAvatar, JxTooltip, JxKbd, JxBreadcrumbs and JxDivider', () async {
    expect(JxAvatar.initials('ada  lovelace byron'), 'AL');
    final avatar = await render(const JxAvatar(name: 'Ada Lovelace'));
    expect(avatar, contains('aria-label="Ada Lovelace"'));
    expect(avatar, contains('AL'));
    expect(
      await render(const JxAvatar(name: 'Ada', src: '/ada.png')),
      contains('alt="Ada"'),
    );
    expect(
      await render(
        const JxTooltip(text: 'Copy', child: JxButton([Component.text('C')])),
      ),
      contains('role="tooltip"'),
    );
    expect(await render(const JxKbd('Ctrl')), contains('<kbd'));
    final crumbs = await render(
      const JxBreadcrumbs([
        (label: 'Home', href: '/'),
        (label: 'Docs', href: '/docs'),
        (label: 'Button', href: null),
      ]),
    );
    expect(crumbs, contains('aria-label="Breadcrumb"'));
    expect(crumbs, contains('aria-current="page"'));
    expect('<a '.allMatches(crumbs), hasLength(2));
    expect(await render(const JxDivider()), contains('<hr'));
    expect(
      await render(const JxDivider(label: 'or')),
      contains('role="separator"'),
    );
  });
}
