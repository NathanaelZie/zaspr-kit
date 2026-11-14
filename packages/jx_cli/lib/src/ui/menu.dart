import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:universal_web/js_interop.dart';
import 'package:universal_web/web.dart' as web;

import 'components.dart';
import 'styles.dart' as s;
import 'utils.dart';

/// Whether the page-wide listener that closes menus on an outside click is
/// installed. One listener serves every [JxDropdownMenu].
bool _outsideListener = false;

/// Closes every open menu that does not contain the pressed element.
void _closeOutside(web.Event event) {
  final target = event.target as web.Node?;
  final open = web.document.querySelectorAll('details[data-jx-menu][open]');
  for (var i = 0; i < open.length; i++) {
    final details = open.item(i) as web.HTMLDetailsElement;
    if (target == null || !details.contains(target)) details.open = false;
  }
}

/// Side of the trigger the menu lines up with.
enum JxMenuAlign { start, end }

/// An entry of a [JxDropdownMenu]: a link ([href]) or an action
/// ([onSelect]), or a separator.
class JxMenuItem {
  const JxMenuItem({
    required this.label,
    this.href,
    this.onSelect,
    this.danger = false,
    this.disabled = false,
  }) : separator = false;

  /// A line between two groups of entries.
  const JxMenuItem.separator()
    : label = '',
      href = null,
      onSelect = null,
      danger = false,
      disabled = false,
      separator = true;

  final String label;
  final String? href;
  final VoidCallback? onSelect;

  /// Red text, for destructive actions.
  final bool danger;
  final bool disabled;
  final bool separator;
}

/// A button that reveals a list of links and actions, built on
/// `<details>` and `<summary>`.
///
/// It opens and closes without JavaScript. In the browser, Escape, a click
/// outside and choosing an action close it; Escape and actions give the
/// focus back to the button.
/// It is a disclosure, not an ARIA `menu`: Tab moves through the entries.
class JxDropdownMenu extends StatelessComponent {
  const JxDropdownMenu({
    required this.id,
    required this.label,
    required this.items,
    this.variant = JxButtonVariant.outline,
    this.size = JxButtonSize.md,
    this.align = JxMenuAlign.start,
    this.classes,
    super.key,
  });

  /// Id of the `<details>` element. Unique on the page.
  final String id;

  /// Text of the trigger button.
  final String label;
  final List<JxMenuItem> items;
  final JxButtonVariant variant;
  final JxButtonSize size;
  final JxMenuAlign align;
  final String? classes;

  web.HTMLDetailsElement? get _details =>
      web.document.getElementById(id) as web.HTMLDetailsElement?;

  void _close() {
    final details = _details;
    if (details == null || !details.open) return;
    details.open = false;
    (details.querySelector('summary') as web.HTMLElement?)?.focus();
  }

  void _onKeyDown(web.Event event) {
    if ((event as web.KeyboardEvent).key == 'Escape') {
      event.preventDefault();
      _close();
    }
  }

  void _onToggle(web.Event event) {
    if (_outsideListener) return;
    _outsideListener = true;
    web.document.addEventListener('pointerdown', _closeOutside.toJS);
  }

  @override
  Component build(BuildContext context) {
    return Component.element(
      tag: 'details',
      id: id,
      classes: jxJoin([s.menu, classes]),
      attributes: const {'data-jx-menu': ''},
      events: {'keydown': _onKeyDown, 'toggle': _onToggle},
      children: [
        Component.element(
          tag: 'summary',
          classes: jxJoin([
            s.buttonBase,
            s.buttonVariants[variant.name],
            s.buttonSizes[size.name],
            s.menuSummary,
          ]),
          children: [
            span([.text(label)]),
            const svg(
              viewBox: '0 0 20 20',
              classes: 'w:4 h:4',
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
        ul(classes: jxJoin([s.menuList, s.menuAlign[align.name]]), [
          for (final item in items)
            if (item.separator)
              const li(
                classes: s.menuSeparator,
                attributes: {'role': 'separator'},
                [],
              )
            else
              li([_entry(item)]),
        ]),
      ],
    );
  }

  Component _entry(JxMenuItem item) {
    final classes = jxJoin([
      s.menuItem,
      s.menuItemTones[item.danger ? 'danger' : 'normal'],
      if (item.disabled && item.href != null) s.buttonInactiveLink,
    ]);
    if (item.href case final href? when !item.disabled) {
      return a(href: href, classes: classes, [.text(item.label)]);
    }
    if (item.href != null) {
      return Component.element(
        tag: 'a',
        classes: classes,
        attributes: const {'role': 'link', 'aria-disabled': 'true'},
        children: [.text(item.label)],
      );
    }
    final onSelect = item.onSelect;
    return button(
      type: ButtonType.button,
      disabled: item.disabled,
      classes: classes,
      onClick: () {
        onSelect?.call();
        _close();
      },
      [.text(item.label)],
    );
  }
}
