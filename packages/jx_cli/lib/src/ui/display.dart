import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'styles.dart' as s;
import 'utils.dart';

/// Size of a [JxAvatar].
enum JxAvatarSize { sm, md, lg }

/// A round picture of a person, or their initials when there is no image.
class JxAvatar extends StatelessComponent {
  const JxAvatar({
    required this.name,
    this.src,
    this.size = JxAvatarSize.md,
    this.classes,
    super.key,
  });

  /// Used for the initials and as the accessible name.
  final String name;
  final String? src;
  final JxAvatarSize size;
  final String? classes;

  /// Up to two initials: "Ada Lovelace" -> "AL".
  static String initials(String name) {
    final words = name.trim().split(RegExp(r'\s+')).where((w) => w.isNotEmpty);
    return words
        .take(2)
        .map((w) => String.fromCharCode(w.runes.first).toUpperCase())
        .join();
  }

  @override
  Component build(BuildContext context) {
    final classNames = jxJoin([
      s.avatarBase,
      s.avatarSizes[size.name],
      classes,
    ]);
    if (src case final src?) {
      return span(classes: classNames, [
        img(src: src, alt: name, classes: s.avatarImage),
      ]);
    }
    return span(
      classes: classNames,
      attributes: {'role': 'img', 'aria-label': name},
      [
        span(
          attributes: const {'aria-hidden': 'true'},
          [.text(initials(name))],
        ),
      ],
    );
  }
}

/// A short hint shown above [child] on hover and on keyboard focus.
///
/// The hint stays in the page for screen readers; for an icon-only button,
/// also give the button its own accessible name.
class JxTooltip extends StatelessComponent {
  const JxTooltip({
    required this.text,
    required this.child,
    this.classes,
    super.key,
  });

  final String text;
  final Component child;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return span(classes: jxJoin([s.tooltipWrapper, classes]), [
      child,
      span(
        classes: s.tooltipBubble,
        attributes: const {'role': 'tooltip'},
        [.text(text)],
      ),
    ]);
  }
}

/// A keyboard key, such as `Ctrl` or `K`.
class JxKbd extends StatelessComponent {
  const JxKbd(this.keyLabel, {this.classes, super.key});

  final String keyLabel;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return Component.element(
      tag: 'kbd',
      classes: jxJoin([s.kbd, classes]),
      children: [.text(keyLabel)],
    );
  }
}

/// One step of [JxBreadcrumbs]; the last one is the current page.
typedef JxBreadcrumb = ({String label, String? href});

/// The path to the current page, in a `<nav aria-label="Breadcrumb">`.
class JxBreadcrumbs extends StatelessComponent {
  const JxBreadcrumbs(this.items, {this.classes, super.key});

  final List<JxBreadcrumb> items;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return nav(
      attributes: const {'aria-label': 'Breadcrumb'},
      classes: classes,
      [
        ol(classes: s.breadcrumbList, [
          for (final (i, item) in items.indexed)
            li(classes: s.breadcrumbItem, [
              if (i > 0)
                const span(
                  classes: s.breadcrumbSeparator,
                  attributes: {'aria-hidden': 'true'},
                  [.text('/')],
                ),
              if (i == items.length - 1 || item.href == null)
                span(
                  classes: s.breadcrumbCurrent,
                  attributes: {
                    if (i == items.length - 1) 'aria-current': 'page',
                  },
                  [.text(item.label)],
                )
              else
                a(href: item.href!, classes: s.breadcrumbLink, [
                  .text(item.label),
                ]),
            ]),
        ]),
      ],
    );
  }
}

/// A horizontal separator, with an optional centered label ("or").
class JxDivider extends StatelessComponent {
  const JxDivider({this.label, this.classes, super.key});

  final String? label;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final label = this.label;
    if (label == null) return hr(classes: jxJoin([s.divider, classes]));
    return div(
      classes: jxJoin([s.dividerLabelled, classes]),
      attributes: const {'role': 'separator'},
      [
        const span(
          classes: s.dividerLine,
          attributes: {'aria-hidden': 'true'},
          [],
        ),
        span([.text(label)]),
        const span(
          classes: s.dividerLine,
          attributes: {'aria-hidden': 'true'},
          [],
        ),
      ],
    );
  }
}
