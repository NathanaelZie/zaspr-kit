import 'dart:math' as math;

import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'styles.dart' as s;
import 'utils.dart';

/// A column of a [JxDataTable].
class JxColumn {
  const JxColumn(this.label, {this.numeric = false, this.sortable = false});

  final String label;

  /// Right-aligned, with tabular digits so values line up.
  final bool numeric;

  /// Shows a sort button in the header (see [JxDataTable.onSort]).
  final bool sortable;
}

/// A data table: caption, column headers, striped rows, numeric alignment,
/// sortable headers, a sticky header and an empty state.
///
/// Rows hold components, so a cell can be text, a [JxBadge] or a button.
/// Sorting and paging are yours: [onSort] reports the clicked column, and
/// [JxPagination] moves between pages.
class JxDataTable extends StatelessComponent {
  const JxDataTable({
    required this.columns,
    required this.rows,
    this.caption,
    this.striped = true,
    this.hover = true,
    this.dense = false,
    this.stickyHeader = false,
    this.sortColumn,
    this.sortAscending = true,
    this.onSort,
    this.emptyText = 'No data',
    this.classes,
    super.key,
  });

  final List<JxColumn> columns;
  final List<List<Component>> rows;

  /// Title of the table, read first by screen readers.
  final String? caption;
  final bool striped;
  final bool hover;
  final bool dense;

  /// Keeps the header visible while the table scrolls (max height 28rem).
  final bool stickyHeader;

  /// Index of the column the rows are sorted by (`aria-sort`).
  final int? sortColumn;
  final bool sortAscending;
  final ValueChanged<int>? onSort;

  /// Shown in a single row when [rows] is empty.
  final String emptyText;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final cell = dense ? s.tableCellDense : s.tableCell;
    return div(
      classes: jxJoin([
        s.tableWrapper,
        if (stickyHeader) s.tableWrapperSticky,
        classes,
      ]),
      [
        table(classes: s.table, [
          if (caption case final caption?)
            Component.element(
              tag: 'caption',
              classes: s.tableCaption,
              children: [.text(caption)],
            ),
          thead(classes: s.tableHead, [
            tr([
              for (final (i, column) in columns.indexed)
                th(
                  classes: jxJoin([
                    cell,
                    s.tableHeaderCell,
                    if (stickyHeader) s.tableHeaderSticky,
                    if (column.numeric) s.tableNumeric,
                  ]),
                  attributes: {
                    'scope': 'col',
                    if (column.sortable && sortColumn == i)
                      'aria-sort': sortAscending ? 'ascending' : 'descending',
                  },
                  [_header(i, column)],
                ),
            ]),
          ]),
          tbody([
            if (rows.isEmpty)
              tr([
                td(
                  classes: s.tableEmpty,
                  attributes: {'colspan': '${columns.length}'},
                  [.text(emptyText)],
                ),
              ])
            else
              for (final row in rows)
                tr(
                  classes: jxJoin([
                    s.tableRow,
                    if (striped) s.tableRowStriped,
                    if (hover) s.tableRowHover,
                  ]),
                  [
                    for (final (i, content) in row.indexed)
                      td(
                        classes: jxJoin([
                          cell,
                          if (hover) s.tableCellHover,
                          if (i < columns.length && columns[i].numeric)
                            s.tableNumeric,
                        ]),
                        [content],
                      ),
                  ],
                ),
          ]),
        ]),
      ],
    );
  }

  Component _header(int index, JxColumn column) {
    final onSort = this.onSort;
    if (!column.sortable || onSort == null) return .text(column.label);
    final active = sortColumn == index;
    return button(
      type: ButtonType.button,
      classes: s.tableSortButton,
      onClick: () => onSort(index),
      [
        .text(column.label),
        svg(
          viewBox: '0 0 16 16',
          classes: active ? 'w:3 h:3' : 'w:3 h:3 o:50',
          attributes: const {'fill': 'currentColor', 'aria-hidden': 'true'},
          [
            path(
              d: !active
                  ? 'M8 2 12 6H4zM8 14 4 10h8z'
                  : sortAscending
                  ? 'M8 4 13 10H3z'
                  : 'M8 12 3 6h10z',
              [],
            ),
          ],
        ),
      ],
    );
  }
}

/// Page links for long lists: previous, numbered pages around the current
/// one, next. Give [href] for links (works without JavaScript) or
/// [onChange] for buttons.
class JxPagination extends StatelessComponent {
  const JxPagination({
    required this.page,
    required this.pageCount,
    this.href,
    this.onChange,
    this.label = 'Pagination',
    this.previousLabel = 'Previous',
    this.nextLabel = 'Next',
    this.classes,
    super.key,
  });

  /// Current page, from 1.
  final int page;
  final int pageCount;
  final String Function(int page)? href;
  final ValueChanged<int>? onChange;
  final String label;
  final String previousLabel;
  final String nextLabel;
  final String? classes;

  /// Pages to show: first, last and current ±1, with `null` for gaps.
  static List<int?> visiblePages(int page, int pageCount) {
    final shown = <int>{
      1,
      pageCount,
      for (
        var p = math.max(1, page - 1);
        p <= math.min(pageCount, page + 1);
        p++
      )
        p,
    }.where((n) => n >= 1 && n <= pageCount).toList()..sort();
    final result = <int?>[];
    for (final p in shown) {
      if (result.isNotEmpty && p - result.last! > 1) {
        result.add(p - result.last! == 2 ? p - 1 : null);
      }
      result.add(p);
    }
    return result;
  }

  @override
  Component build(BuildContext context) {
    final current = math.min(math.max(page, 1), math.max(pageCount, 1));
    return nav(
      classes: classes,
      attributes: {'aria-label': label},
      [
        ul(classes: s.pagination, [
          li([_item(current - 1, previousLabel, disabled: current <= 1)]),
          for (final p in visiblePages(current, pageCount))
            li([
              if (p == null)
                const span(
                  classes: s.paginationGap,
                  attributes: {'aria-hidden': 'true'},
                  [.text('…')],
                )
              else
                _item(p, '$p', current: p == current),
            ]),
          li([_item(current + 1, nextLabel, disabled: current >= pageCount)]),
        ]),
      ],
    );
  }

  Component _item(
    int target,
    String text, {
    bool current = false,
    bool disabled = false,
  }) {
    final classNames = jxJoin([
      s.paginationItem,
      if (current) s.paginationCurrent else s.paginationIdle,
      if (disabled) s.paginationDisabled,
    ]);
    final attributes = {
      if (current) 'aria-current': 'page',
      if (disabled) 'aria-disabled': 'true',
    };
    final href = this.href;
    if (href != null) {
      return a(
        href: disabled ? '#' : href(target),
        classes: classNames,
        attributes: {...attributes, if (disabled) 'tabindex': '-1'},
        [.text(text)],
      );
    }
    final onChange = this.onChange;
    return button(
      type: ButtonType.button,
      disabled: disabled,
      classes: classNames,
      attributes: attributes,
      onClick: onChange == null || current ? null : () => onChange(target),
      [.text(text)],
    );
  }
}
