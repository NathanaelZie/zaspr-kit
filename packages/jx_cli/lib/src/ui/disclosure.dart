import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'styles.dart' as s;
import 'utils.dart';

/// One section of a [JxAccordion].
class JxAccordionItem {
  const JxAccordionItem({
    required this.title,
    required this.children,
    this.open = false,
  });

  /// Text of the clickable header.
  final String title;
  final List<Component> children;

  /// Expanded on first render.
  final bool open;
}

/// Sections that expand and collapse, built on `<details>` and `<summary>`.
///
/// It works without JavaScript: the browser handles the click, Enter and
/// Space, and tells assistive technology whether each section is expanded.
/// With [exclusive], opening a section closes the others (`<details name>`).
class JxAccordion extends StatelessComponent {
  const JxAccordion(
    this.items, {
    this.name,
    this.exclusive = false,
    this.classes,
    super.key,
  }) : assert(
         !exclusive || name != null,
         'An exclusive accordion needs a name shared by its sections.',
       );

  final List<JxAccordionItem> items;

  /// Group name, required when [exclusive] is true. Use one per accordion.
  final String? name;

  /// Only one section open at a time.
  final bool exclusive;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return div(classes: jxJoin([s.accordion, classes]), [
      for (final item in items)
        Component.element(
          tag: 'details',
          classes: s.accordionItem,
          attributes: {if (item.open) 'open': '', if (exclusive) 'name': name!},
          children: [
            Component.element(
              tag: 'summary',
              classes: s.accordionSummary,
              children: [
                span([.text(item.title)]),
                const svg(
                  viewBox: '0 0 20 20',
                  classes: s.accordionChevron,
                  attributes: {'fill': 'currentColor', 'aria-hidden': 'true'},
                  [
                    path(
                      d:
                          'M5.2 7.2a.75.75 0 0 1 1.06 0L10 10.94l3.74-3.74a.75.75 0 1 1 '
                          '1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.26a.75.75 0 0 1 0-1.06z',
                      [],
                    ),
                  ],
                ),
              ],
            ),
            div(classes: s.accordionPanel, item.children),
          ],
        ),
    ]);
  }
}
