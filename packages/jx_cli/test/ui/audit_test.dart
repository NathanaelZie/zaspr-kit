import 'dart:convert';

import 'package:jaspr/server.dart';
import 'package:jx_cli/ui.dart';
import 'package:test/test.dart';

Future<String> render(Component component) async {
  final response = await renderComponent(component, standalone: true);
  return utf8.decode(response.body);
}

void main() {
  setUpAll(Jaspr.initializeApp);

  group('JxButton as a link', () {
    test('disabled: no href, aria-disabled, not clickable', () async {
      final html = await render(
        const JxButton([Component.text('Docs')], href: '/docs', disabled: true),
      );
      expect(html, contains('<a'));
      expect(html, isNot(contains('href=')));
      expect(html, contains('aria-disabled="true"'));
      expect(html, contains('role="link"'));
      expect(html, contains('pe:none'));
    });

    test('loading: inactive too, with aria-busy', () async {
      final html = await render(
        const JxButton([Component.text('Docs')], href: '/docs', loading: true),
      );
      expect(html, isNot(contains('href=')));
      expect(html, contains('aria-busy="true"'));
    });

    test('enabled: a plain link', () async {
      final html = await render(
        const JxButton([Component.text('Docs')], href: '/docs'),
      );
      expect(html, contains('href="/docs"'));
      expect(html, isNot(contains('aria-disabled')));
    });
  });

  test('JxCard titleLevel picks the heading, clamped to h2-h6', () async {
    expect(
      await render(const JxCard(title: 'Plan', titleLevel: 2, [])),
      contains('<h2'),
    );
    expect(await render(const JxCard(title: 'Plan', [])), contains('<h3'));
    expect(
      await render(const JxCard(title: 'Plan', titleLevel: 9, [])),
      contains('<h6'),
    );
  });

  test('JxTextField keeps its markup on the shared field helper', () async {
    final html = await render(
      const JxTextField(
        id: 'email',
        label: 'Email',
        placeholder: 'you@example.com',
        required: true,
        error: 'Required',
      ),
    );
    expect(html, contains('for="email"'));
    expect(html, contains('placeholder="you@example.com"'));
    expect(html, contains('required'));
    expect(html, contains('aria-invalid="true"'));
    expect(html, contains('aria-describedby="email-message"'));
    expect(html, contains('id="email-message"'));
  });

  group('JxAccordion', () {
    test('renders details and summary, open state and exclusivity', () async {
      final html = await render(
        const JxAccordion(name: 'faq', exclusive: true, [
          JxAccordionItem(
            title: 'Is it free?',
            open: true,
            children: [Component.text('Yes, MIT.')],
          ),
          JxAccordionItem(
            title: 'Does it need JavaScript?',
            children: [Component.text('No.')],
          ),
        ]),
      );
      expect('<details'.allMatches(html), hasLength(2));
      expect('<summary'.allMatches(html), hasLength(2));
      expect('name="faq"'.allMatches(html), hasLength(2));
      expect(html, contains('open'));
      expect(html, contains('group-open:rot:180'));
      expect(html, contains('aria-hidden="true"'));
    });

    test('not exclusive: no name attribute', () async {
      final html = await render(
        const JxAccordion([JxAccordionItem(title: 'A', children: [])]),
      );
      expect(html, isNot(contains('name=')));
    });
  });

  test('JxDrawer is a labelled dialog that slides from its side', () async {
    final html = await render(
      const JxDrawer(
        id: 'filters',
        title: 'Filters',
        description: 'Narrow the list.',
        side: JxDrawerSide.left,
        actions: [
          JxButton([Component.text('Apply')]),
        ],
        [],
      ),
    );
    expect(html, contains('<dialog'));
    expect(html, contains('id="filters"'));
    expect(html, contains('aria-labelledby="filters-title"'));
    expect(html, contains('aria-describedby="filters-description"'));
    expect(html, contains('open:anim:slide-in-left'));
    expect(html, contains('command="close"'));
    expect(html, contains('commandfor="filters"'));
    expect(html, contains('Apply'));
  });

  test('JxModal still renders its close button', () async {
    final html = await render(const JxModal(id: 'm', title: 'T', []));
    expect(html, contains('aria-label="Close"'));
    expect(html, contains('commandfor="m"'));
  });
}
