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

  test('JxModal is a labelled dialog with a close command', () async {
    final html = await render(
      JxModal(
        id: 'confirm',
        title: 'Delete it?',
        description: 'This cannot be undone.',
        size: JxModalSize.sm,
        actions: [
          JxButton(const [
            Component.text('Cancel'),
          ], attributes: JxModal.closeAttributes('confirm')),
        ],
        const [],
      ),
    );
    expect(html, contains('<dialog'));
    expect(html, contains('id="confirm"'));
    expect(html, contains('aria-labelledby="confirm-title"'));
    expect(html, contains('id="confirm-title"'));
    expect(html, contains('aria-describedby="confirm-description"'));
    expect(html, contains('closedby="any"'));
    expect(html, contains('command="close"'));
    expect(html, contains('commandfor="confirm"'));
    expect(html, contains('aria-label="Close"'));
    expect(html, contains('mw:[24rem]'));
    expect(html, contains('Cancel'));
  });

  test('JxModal not dismissible closes only on request', () async {
    final html = await render(
      const JxModal(id: 'm', title: 'T', dismissible: false, []),
    );
    expect(html, contains('closedby="closerequest"'));
    expect(html, isNot(contains('aria-describedby')));
  });

  test('JxModalTrigger opens the target dialog', () async {
    final html = await render(
      const JxModalTrigger(target: 'confirm', [Component.text('Open')]),
    );
    expect(html, contains('command="show-modal"'));
    expect(html, contains('commandfor="confirm"'));
    expect(html, contains('aria-haspopup="dialog"'));
  });

  test('JxDataTable renders caption, headers, numeric cells', () async {
    final html = await render(
      JxDataTable(
        caption: 'Invoices',
        columns: const [
          JxColumn('Client', sortable: true),
          JxColumn('Amount', numeric: true),
        ],
        rows: const [
          [Component.text('Acme'), Component.text('120')],
        ],
        sortColumn: 0,
        sortAscending: false,
        onSort: (_) {},
        stickyHeader: true,
      ),
    );
    expect(html, contains('<caption'));
    expect(html, contains('Invoices'));
    expect(html, contains('scope="col"'));
    expect(html, contains('aria-sort="descending"'));
    expect(html, contains('<button'));
    expect(html, contains('tabular-nums'));
    expect(html, contains('sticky'));
    expect(html, contains('even:bg:gray-100'));
  });

  test(
    'JxDataTable without rows shows the empty text across columns',
    () async {
      final html = await render(
        const JxDataTable(
          columns: [JxColumn('A'), JxColumn('B'), JxColumn('C')],
          rows: [],
          emptyText: 'Nothing here',
        ),
      );
      expect(html, contains('colspan="3"'));
      expect(html, contains('Nothing here'));
      expect(html, isNot(contains('aria-sort')));
    },
  );

  test('JxPagination.visiblePages windows around the current page', () {
    expect(JxPagination.visiblePages(1, 1), [1]);
    expect(JxPagination.visiblePages(1, 5), [1, 2, null, 5]);
    expect(JxPagination.visiblePages(5, 10), [1, null, 4, 5, 6, null, 10]);
    expect(JxPagination.visiblePages(3, 10), [1, 2, 3, 4, null, 10]);
    expect(JxPagination.visiblePages(10, 10), [1, null, 9, 10]);
  });

  test(
    'JxPagination with href renders links and marks the current page',
    () async {
      final html = await render(
        JxPagination(page: 1, pageCount: 3, href: (p) => '?page=$p'),
      );
      expect(html, contains('aria-label="Pagination"'));
      expect(html, contains('aria-current="page"'));
      expect(html, contains('href="?page=2"'));
      expect(html, contains('aria-disabled="true"'));
      expect(html, contains('Next'));
    },
  );
}
