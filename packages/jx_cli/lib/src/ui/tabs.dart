import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:universal_web/web.dart' as web;

import 'styles.dart' as s;
import 'utils.dart';

/// Direction of a [JxTabs] list.
enum JxTabsOrientation { horizontal, vertical }

/// One tab of a [JxTabs]: its label and its panel.
class JxTab {
  const JxTab({
    required this.label,
    required this.children,
    this.disabled = false,
  });

  final String label;
  final List<Component> children;
  final bool disabled;
}

/// Tabs following the ARIA tabs pattern: a `tablist` of buttons, one
/// `tabpanel` each.
///
/// The selected tab is the only one in the tab order; the arrow keys (Left
/// and Right, or Up and Down when [orientation] is vertical), Home and End
/// move between tabs and select them. It keeps its own state, so it
/// works as soon as it runs in the browser (inside a `@client` component).
/// Every panel is rendered; hidden ones carry the `hidden` attribute.
class JxTabs extends StatefulComponent {
  const JxTabs(
    this.tabs, {
    required this.id,
    this.label,
    this.initialIndex = 0,
    this.orientation = JxTabsOrientation.horizontal,
    this.onChange,
    this.classes,
    super.key,
  });

  final List<JxTab> tabs;

  /// Vertical tabs sit beside their panel on wide screens.
  final JxTabsOrientation orientation;

  bool get vertical => orientation == JxTabsOrientation.vertical;

  /// Prefix of the tab and panel ids. Unique on the page.
  final String id;

  /// Accessible name of the tab list, such as "Account settings".
  final String? label;

  /// Tab selected on first render.
  final int initialIndex;

  /// Called with the index of the newly selected tab.
  final ValueChanged<int>? onChange;
  final String? classes;

  String tabId(int index) => '$id-tab-$index';
  String panelId(int index) => '$id-panel-$index';

  @override
  State<JxTabs> createState() => JxTabsState();
}

class JxTabsState extends State<JxTabs> {
  late int selected = component.tabs.isEmpty
      ? 0
      : component.initialIndex.clamp(0, component.tabs.length - 1);

  void _select(int index, {bool focus = false}) {
    if (component.tabs[index].disabled) return;
    if (index != selected) {
      setState(() => selected = index);
      component.onChange?.call(index);
    }
    if (focus) {
      (web.document.getElementById(component.tabId(index)) as web.HTMLElement?)
          ?.focus();
    }
  }

  /// Next enabled tab from [from] in [step] direction, wrapping around.
  int _next(int from, int step) {
    final count = component.tabs.length;
    var index = from;
    for (var i = 0; i < count; i++) {
      index = (index + step) % count;
      if (index < 0) index += count;
      if (!component.tabs[index].disabled) return index;
    }
    return from;
  }

  void _onKeyDown(web.Event event) {
    final key = (event as web.KeyboardEvent).key;
    final count = component.tabs.length;
    final vertical = component.vertical;
    final target = switch (key) {
      'ArrowRight' when !vertical => _next(selected, 1),
      'ArrowLeft' when !vertical => _next(selected, -1),
      'ArrowDown' when vertical => _next(selected, 1),
      'ArrowUp' when vertical => _next(selected, -1),
      'Home' => _next(count - 1, 1),
      'End' => _next(0, -1),
      _ => null,
    };
    if (target == null) return;
    event.preventDefault();
    _select(target, focus: true);
  }

  @override
  Component build(BuildContext context) {
    final tabs = component.tabs;
    final vertical = component.vertical;
    return div(
      classes: jxJoin([vertical ? s.tabsVertical : s.tabs, component.classes]),
      [
        div(
          classes: vertical ? s.tabListVertical : s.tabList,
          attributes: {
            'role': 'tablist',
            'aria-label': ?component.label,
            if (vertical) 'aria-orientation': 'vertical',
          },
          [
            for (final (i, tab) in tabs.indexed)
              button(
                id: component.tabId(i),
                type: ButtonType.button,
                disabled: tab.disabled,
                classes: jxJoin([
                  s.tabBase,
                  vertical ? s.tabVertical : s.tabHorizontal,
                  i == selected ? s.tabSelected : s.tabIdle,
                ]),
                attributes: {
                  'role': 'tab',
                  'aria-selected': '${i == selected}',
                  'aria-controls': component.panelId(i),
                  'tabindex': i == selected ? '0' : '-1',
                },
                events: {'keydown': _onKeyDown},
                onClick: () => _select(i),
                [.text(tab.label)],
              ),
          ],
        ),
        for (final (i, tab) in tabs.indexed)
          div(
            id: component.panelId(i),
            classes: jxJoin([s.tabPanel, if (vertical) s.tabPanelVertical]),
            attributes: {
              'role': 'tabpanel',
              'aria-labelledby': component.tabId(i),
              'tabindex': '0',
              if (i != selected) 'hidden': '',
            },
            tab.children,
          ),
      ],
    );
  }
}
