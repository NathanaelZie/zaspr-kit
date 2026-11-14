import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'components.dart';
import 'styles.dart' as s;
import 'utils.dart';

/// Width of a [JxModal].
enum JxModalSize { sm, md, lg }

/// A modal dialog built on the native `<dialog>` element.
///
/// It opens and closes without JavaScript, through HTML command buttons:
/// [JxModalTrigger] opens it, and any button carrying
/// [JxModal.closeAttributes] closes it. The browser traps the focus inside,
/// closes it with Escape, makes the rest of the page inert and gives the
/// focus back to the trigger on close. With [dismissible], a click on the
/// backdrop closes it too.
///
/// ```dart
/// JxModalTrigger(target: 'delete', [.text('Delete')]),
/// JxModal(
///   id: 'delete',
///   title: 'Delete this project?',
///   actions: [
///     JxButton([.text('Cancel')], variant: JxButtonVariant.ghost,
///         attributes: JxModal.closeAttributes('delete')),
///     JxButton([.text('Delete')], variant: JxButtonVariant.danger,
///         onClick: delete),
///   ],
///   [p([.text('This cannot be undone.')])],
/// )
/// ```
class JxModal extends StatelessComponent {
  const JxModal(
    this.children, {
    required this.id,
    required this.title,
    this.description,
    this.actions,
    this.size = JxModalSize.md,
    this.dismissible = true,
    this.closeLabel = 'Close',
    this.classes,
    super.key,
  });

  /// Referenced by [JxModalTrigger.target].
  final String id;
  final String title;
  final String? description;
  final List<Component> children;

  /// Buttons shown at the bottom, aligned to the end.
  final List<Component>? actions;
  final JxModalSize size;

  /// Closes on a click outside the dialog (`closedby="any"`).
  final bool dismissible;

  /// Accessible name of the close button in the corner.
  final String closeLabel;
  final String? classes;

  /// Attributes that make a button close the dialog [id].
  static Map<String, String> closeAttributes(String id) => {
    'command': 'close',
    'commandfor': id,
  };

  @override
  Component build(BuildContext context) {
    final titleId = '$id-title';
    final descriptionId = description == null ? null : '$id-description';
    return Component.element(
      tag: 'dialog',
      id: id,
      classes: jxJoin([s.modal, s.modalSizes[size.name], classes]),
      attributes: {
        'aria-labelledby': titleId,
        'aria-describedby': ?descriptionId,
        'closedby': dismissible ? 'any' : 'closerequest',
      },
      children: [
        div(classes: s.modalBody, [
          div(classes: s.modalHeader, [
            h2(id: titleId, classes: s.modalTitle, [.text(title)]),
            _closeButton(id, closeLabel),
          ]),
          if (description case final description?)
            p(id: descriptionId, classes: s.modalDescription, [
              .text(description),
            ]),
          ...children,
          if (actions case final actions? when actions.isNotEmpty)
            div(classes: s.modalFooter, actions),
        ]),
      ],
    );
  }
}

/// A [JxButton] that opens the [JxModal] or [JxDrawer] whose id is
/// [target].
class JxModalTrigger extends StatelessComponent {
  const JxModalTrigger(
    this.children, {
    required this.target,
    this.variant = JxButtonVariant.primary,
    this.size = JxButtonSize.md,
    this.classes,
    super.key,
  });

  final String target;
  final List<Component> children;
  final JxButtonVariant variant;
  final JxButtonSize size;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return JxButton(
      children,
      variant: variant,
      size: size,
      classes: classes,
      attributes: {
        'command': 'show-modal',
        'commandfor': target,
        'aria-haspopup': 'dialog',
      },
    );
  }
}

/// Edge of the screen a [JxDrawer] slides from.
enum JxDrawerSide { left, right }

/// A panel that slides in from the side of the screen, built on the native
/// `<dialog>` like [JxModal]: focus is kept inside, Escape closes it and
/// the page behind is inert. Open it with a [JxModalTrigger] whose target
/// is the drawer [id].
class JxDrawer extends StatelessComponent {
  const JxDrawer(
    this.children, {
    required this.id,
    required this.title,
    this.description,
    this.actions,
    this.side = JxDrawerSide.right,
    this.dismissible = true,
    this.closeLabel = 'Close',
    this.classes,
    super.key,
  });

  final String id;
  final String title;
  final String? description;
  final List<Component> children;

  /// Buttons pinned to the bottom of the panel.
  final List<Component>? actions;
  final JxDrawerSide side;

  /// Closes on a click on the backdrop (`closedby="any"`).
  final bool dismissible;
  final String closeLabel;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final titleId = '$id-title';
    final descriptionId = description == null ? null : '$id-description';
    return Component.element(
      tag: 'dialog',
      id: id,
      classes: jxJoin([s.drawer, s.drawerSides[side.name], classes]),
      attributes: {
        'aria-labelledby': titleId,
        'aria-describedby': ?descriptionId,
        'closedby': dismissible ? 'any' : 'closerequest',
      },
      children: [
        div(classes: s.drawerBody, [
          div(classes: s.modalHeader, [
            h2(id: titleId, classes: s.modalTitle, [.text(title)]),
            _closeButton(id, closeLabel),
          ]),
          if (description case final description?)
            p(id: descriptionId, classes: s.modalDescription, [
              .text(description),
            ]),
          ...children,
          if (actions case final actions? when actions.isNotEmpty)
            div(classes: s.drawerFooter, actions),
        ]),
      ],
    );
  }
}

/// The × button in the corner of a dialog.
Component _closeButton(String id, String label) {
  return button(
    type: ButtonType.button,
    classes: s.modalClose,
    attributes: {...JxModal.closeAttributes(id), 'aria-label': label},
    [
      const svg(
        viewBox: '0 0 24 24',
        classes: 'w:5 h:5',
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
  );
}
