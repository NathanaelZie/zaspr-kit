import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'components.dart';
import 'styles.dart' as s;
import 'utils.dart';

/// Corner of the screen where a [JxToastRegion] stacks its toasts.
enum JxToastPosition { bottomEnd, bottomStart, topEnd, topStart }

/// A short notification, usually shown in a [JxToastRegion].
///
/// `warning` and `danger` toasts are `role="alert"` (announced at once),
/// the others `role="status"` (announced politely). You own the list of
/// toasts: remove one from your state in [onDismiss] or after a delay.
class JxToast extends StatelessComponent {
  const JxToast(
    this.message, {
    this.title,
    this.tone = JxTone.neutral,
    this.action,
    this.onDismiss,
    this.dismissLabel = 'Dismiss',
    this.classes,
    super.key,
  });

  final String message;
  final String? title;
  final JxTone tone;

  /// Usually a small [JxButton], such as "Undo".
  final Component? action;

  /// Shows a close button that calls it.
  final VoidCallback? onDismiss;

  /// Accessible name of the close button.
  final String dismissLabel;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final urgent = tone == JxTone.warning || tone == JxTone.danger;
    final onDismiss = this.onDismiss;
    return div(
      classes: jxJoin([s.toast, s.toastTones[tone.name], classes]),
      attributes: {'role': urgent ? 'alert' : 'status'},
      [
        div(classes: s.toastBody, [
          if (title case final title?) p(classes: s.toastTitle, [.text(title)]),
          p(classes: s.toastText, [.text(message)]),
          if (action case final action?) div(classes: 'mt:2', [action]),
        ]),
        if (onDismiss != null)
          button(
            type: ButtonType.button,
            classes: s.modalClose,
            attributes: {'aria-label': dismissLabel},
            onClick: onDismiss,
            [
              const svg(
                viewBox: '0 0 24 24',
                classes: 'w:4 h:4',
                attributes: {
                  'fill': 'none',
                  'stroke': 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'aria-hidden': 'true',
                },
                [path(d: 'M18 6 6 18M6 6l12 12', [])],
              ),
            ],
          ),
      ],
    );
  }
}

/// Fixed corner of the screen where toasts stack, newest last.
///
/// Render it once, empty, when the page loads: screen readers only announce
/// toasts added to a region that already exists.
class JxToastRegion extends StatelessComponent {
  const JxToastRegion(
    this.toasts, {
    this.position = JxToastPosition.bottomEnd,
    this.label = 'Notifications',
    this.classes,
    super.key,
  });

  final List<Component> toasts;
  final JxToastPosition position;

  /// Accessible name of the region.
  final String label;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return section(
      classes: jxJoin([s.toastRegion, s.toastPositions[position.name], classes]),
      attributes: {'aria-label': label},
      toasts,
    );
  }
}
