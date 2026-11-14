import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'feedback.dart';
import 'field.dart';
import 'styles.dart' as s;
import 'utils.dart';

const _join = jxJoin;

/// Visual style of a [JxButton].
enum JxButtonVariant { primary, secondary, outline, ghost, danger }

/// Size of a [JxButton].
enum JxButtonSize { sm, md, lg }

/// Color of a [JxBadge] or [JxAlert].
enum JxTone { neutral, info, success, warning, danger }

/// A button, or a link styled as a button when [href] is set.
class JxButton extends StatelessComponent {
  const JxButton(
    this.children, {
    this.variant = JxButtonVariant.primary,
    this.size = JxButtonSize.md,
    this.onClick,
    this.href,
    this.type = ButtonType.button,
    this.disabled = false,
    this.loading = false,
    this.fullWidth = false,
    this.classes,
    this.attributes,
    super.key,
  });

  final List<Component> children;
  final JxButtonVariant variant;
  final JxButtonSize size;
  final VoidCallback? onClick;

  /// Renders an `<a>` instead of a `<button>`.
  final String? href;
  final ButtonType type;
  final bool disabled;

  /// Shows a spinner, disables the button and sets `aria-busy`.
  final bool loading;

  /// Stretches the button to the width of its container.
  final bool fullWidth;

  /// Extra JX classes, appended last.
  final String? classes;
  final Map<String, String>? attributes;

  @override
  Component build(BuildContext context) {
    final classNames = _join([
      s.buttonBase,
      s.buttonVariants[variant.name],
      s.buttonSizes[size.name],
      if (fullWidth) s.buttonFullWidth,
      classes,
    ]);
    final content = [
      if (loading) const JxSpinner(size: JxSpinnerSize.sm, label: null),
      ...children,
    ];
    final attrs = {...?attributes, if (loading) 'aria-busy': 'true'};
    if (href case final href?) {
      // A link cannot be disabled: drop the href so it no longer navigates,
      // and say so to assistive technology.
      if (disabled || loading) {
        return Component.element(
          tag: 'a',
          classes: _join([classNames, s.buttonInactiveLink]),
          attributes: {...attrs, 'role': 'link', 'aria-disabled': 'true'},
          children: content,
        );
      }
      return a(
        content,
        href: href,
        onClick: onClick,
        classes: classNames,
        attributes: attrs,
      );
    }
    return button(
      content,
      type: type,
      disabled: disabled || loading,
      onClick: onClick,
      classes: classNames,
      attributes: attrs,
    );
  }
}

/// A surface grouping related content, with an optional heading,
/// description and footer (usually actions).
class JxCard extends StatelessComponent {
  const JxCard(
    this.children, {
    this.title,
    this.description,
    this.footer,
    this.titleLevel = 3,
    this.classes,
    super.key,
  });

  final List<Component> children;
  final String? title;

  /// Heading level of [title], 2 to 6, to fit the outline of the page.
  final int titleLevel;
  final String? description;

  /// Shown under a separator, aligned to the end.
  final List<Component>? footer;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return div(classes: _join([s.card, classes]), [
      if (title case final title?)
        Component.element(
          tag: 'h${titleLevel.clamp(2, 6)}',
          classes: s.cardTitle,
          children: [.text(title)],
        ),
      if (description case final description?)
        p(classes: s.cardDescription, [.text(description)]),
      ...children,
      if (footer case final footer? when footer.isNotEmpty)
        div(classes: s.cardFooter, footer),
    ]);
  }
}

/// A short status label.
class JxBadge extends StatelessComponent {
  const JxBadge(
    this.label, {
    this.tone = JxTone.neutral,
    this.classes,
    super.key,
  });

  final String label;
  final JxTone tone;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return span(
      classes: _join([s.badgeBase, s.badgeTones[tone.name], classes]),
      [.text(label)],
    );
  }
}

/// A message banner. `danger` and `warning` are announced immediately
/// (`role="alert"`), the other tones politely (`role="status"`).
class JxAlert extends StatelessComponent {
  const JxAlert(
    this.children, {
    this.tone = JxTone.info,
    this.title,
    this.classes,
    super.key,
  });

  final List<Component> children;
  final JxTone tone;
  final String? title;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final urgent = tone == JxTone.danger || tone == JxTone.warning;
    return div(
      classes: _join([
        s.alertBase,
        s.alertTones[tone.name] ?? s.alertTones['info'],
        classes,
      ]),
      attributes: {'role': urgent ? 'alert' : 'status'},
      [
        if (title case final title?) p(classes: s.alertTitle, [.text(title)]),
        ...children,
      ],
    );
  }
}

/// A labelled text input with an optional hint and error message.
class JxTextField extends StatelessComponent {
  const JxTextField({
    required this.id,
    required this.label,
    this.type = InputType.text,
    this.name,
    this.value,
    this.placeholder,
    this.hint,
    this.error,
    this.required = false,
    this.disabled = false,
    this.onInput,
    this.classes,
    super.key,
  });

  /// Links the label, the hint and the error to the input.
  final String id;
  final String label;
  final InputType type;
  final String? name;
  final String? value;
  final String? placeholder;
  final String? hint;

  /// Marks the field invalid and replaces the hint.
  final String? error;
  final bool required;
  final bool disabled;
  final ValueChanged<String>? onInput;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final onInput = this.onInput;
    return jxField(
      id: id,
      label: label,
      hint: hint,
      error: error,
      classes: classes,
      control: (aria) => input(
        id: id,
        type: type,
        name: name,
        value: value,
        disabled: disabled,
        onInput: onInput == null ? null : (v) => onInput('$v'),
        classes: _join([s.fieldInput, if (error != null) s.fieldInputInvalid]),
        attributes: {
          'placeholder': ?placeholder,
          if (required) 'required': '',
          ...aria,
        },
      ),
    );
  }
}
