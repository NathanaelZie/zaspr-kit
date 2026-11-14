import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'field.dart';
import 'styles.dart' as s;
import 'utils.dart';

// Fields named `label` shadow the element inside the classes.
const _labelElement = label.new;
const _legendElement = legend.new;

/// One choice of a [JxSelect] or a [JxRadioGroup].
typedef JxOption = ({String value, String label});

/// A labelled multi-line text input.
class JxTextArea extends StatelessComponent {
  const JxTextArea({
    required this.id,
    required this.label,
    this.name,
    this.value,
    this.placeholder,
    this.rows = 4,
    this.hint,
    this.error,
    this.required = false,
    this.disabled = false,
    this.onInput,
    this.classes,
    super.key,
  });

  final String id;
  final String label;
  final String? name;
  final String? value;
  final String? placeholder;
  final int rows;
  final String? hint;
  final String? error;
  final bool required;
  final bool disabled;
  final ValueChanged<String>? onInput;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return jxField(
      id: id,
      label: label,
      hint: hint,
      error: error,
      classes: classes,
      required: required,
      control: (aria) => textarea(
        id: id,
        name: name,
        rows: rows,
        placeholder: placeholder,
        required: required,
        disabled: disabled,
        onInput: onInput,
        classes: jxJoin([
          s.fieldInput,
          s.textArea,
          if (error != null) s.fieldInputInvalid,
        ]),
        attributes: aria,
        [.text(value ?? '')],
      ),
    );
  }
}

/// A labelled drop-down list.
class JxSelect extends StatelessComponent {
  const JxSelect({
    required this.id,
    required this.label,
    required this.options,
    this.name,
    this.value,
    this.placeholder,
    this.hint,
    this.error,
    this.required = false,
    this.disabled = false,
    this.onChange,
    this.classes,
    super.key,
  });

  final String id;
  final String label;
  final List<JxOption> options;
  final String? name;

  /// Value of the selected option.
  final String? value;

  /// First, empty option shown when nothing is selected.
  final String? placeholder;
  final String? hint;
  final String? error;
  final bool required;
  final bool disabled;
  final ValueChanged<String>? onChange;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final onChange = this.onChange;
    return jxField(
      id: id,
      label: label,
      hint: hint,
      error: error,
      classes: classes,
      required: required,
      control: (aria) => div(classes: s.selectWrapper, [
        select(
          id: id,
          name: name,
          required: required,
          disabled: disabled,
          onChange: onChange == null
              ? null
              : (values) => onChange(values.isEmpty ? '' : values.first),
          classes: jxJoin([
            s.fieldInput,
            s.selectInput,
            if (error != null) s.fieldInputInvalid,
          ]),
          attributes: aria,
          [
            if (placeholder case final placeholder?)
              option(value: '', selected: value == null, [.text(placeholder)]),
            for (final o in options)
              option(value: o.value, selected: o.value == value, [
                .text(o.label),
              ]),
          ],
        ),
        const span(
          classes: s.selectChevron,
          attributes: {'aria-hidden': 'true'},
          [
            svg(
              viewBox: '0 0 20 20',
              classes: 'w:4 h:4',
              attributes: {'fill': 'currentColor'},
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
      ]),
    );
  }
}

/// A checkbox with its label and an optional description.
class JxCheckbox extends StatelessComponent {
  const JxCheckbox({
    required this.id,
    required this.label,
    this.description,
    this.error,
    this.name,
    this.value,
    this.checked = false,
    this.required = false,
    this.disabled = false,
    this.onChange,
    this.classes,
    super.key,
  });

  final String id;
  final String label;
  final String? description;

  /// Marks the checkbox invalid and shows the message under it.
  final String? error;
  final String? name;
  final String? value;
  final bool checked;

  /// Native `required`, with a visual marker after the label.
  final bool required;
  final bool disabled;
  final ValueChanged<bool>? onChange;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return _choice(
      id: id,
      type: InputType.checkbox,
      label: label,
      description: description,
      error: error,
      name: name,
      value: value,
      checked: checked,
      required: required,
      disabled: disabled,
      onChange: onChange,
      classes: classes,
    );
  }
}

/// An on/off toggle: a checkbox with `role="switch"`, drawn as a track and a
/// thumb. It stays focusable and is toggled with the space key.
class JxSwitch extends StatelessComponent {
  const JxSwitch({
    required this.id,
    required this.label,
    this.name,
    this.checked = false,
    this.disabled = false,
    this.onChange,
    this.classes,
    super.key,
  });

  final String id;
  final String label;
  final String? name;
  final bool checked;
  final bool disabled;
  final ValueChanged<bool>? onChange;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final onChange = this.onChange;
    return _labelElement(
      htmlFor: id,
      classes: jxJoin([s.switchLabel, classes]),
      [
        span(classes: s.switchControl, [
          input<bool?>(
            id: id,
            type: InputType.checkbox,
            name: name,
            checked: checked,
            disabled: disabled,
            onChange: onChange == null ? null : (v) => onChange(v ?? false),
            classes: s.switchInput,
            attributes: const {'role': 'switch'},
          ),
          const span(
            classes: s.switchTrack,
            attributes: {'aria-hidden': 'true'},
            [],
          ),
          const span(
            classes: s.switchThumb,
            attributes: {'aria-hidden': 'true'},
            [],
          ),
        ]),
        span([.text(label)]),
      ],
    );
  }
}

/// A group of radio buttons in a `<fieldset>`, with a visible legend.
class JxRadioGroup extends StatelessComponent {
  const JxRadioGroup({
    required this.name,
    required this.legend,
    required this.options,
    this.value,
    this.hint,
    this.error,
    this.required = false,
    this.disabled = false,
    this.onChange,
    this.classes,
    super.key,
  });

  /// Shared `name` of the radio inputs; also prefixes their ids.
  final String name;
  final String legend;
  final List<JxOption> options;
  final String? value;

  /// Help text under the options.
  final String? hint;

  /// Marks the group invalid; replaces the hint.
  final String? error;

  /// Native `required` on the radios, with a marker after the legend.
  final bool required;
  final bool disabled;
  final ValueChanged<String>? onChange;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final onChange = this.onChange;
    final message = error ?? hint;
    final messageId = message == null ? null : '$name-message';
    return fieldset(
      disabled: disabled,
      classes: jxJoin([s.radioGroup, classes]),
      attributes: {'aria-describedby': ?messageId},
      [
        _legendElement(classes: s.radioLegend, [
          .text(legend),
          if (required) jxRequiredMarker,
        ]),
        for (final o in options)
          _choice(
            id: '$name-${o.value}',
            type: InputType.radio,
            label: o.label,
            name: name,
            value: o.value,
            checked: o.value == value,
            required: required,
            invalid: error != null,
            disabled: disabled,
            onChange: onChange == null
                ? null
                : (selected) {
                    if (selected) onChange(o.value);
                  },
          ),
        if (message != null)
          p(id: messageId, classes: error != null ? s.fieldError : s.fieldHint, [
            .text(message),
          ]),
      ],
    );
  }
}

Component _choice({
  required String id,
  required InputType type,
  required String label,
  String? description,
  String? error,
  String? name,
  String? value,
  bool checked = false,
  bool required = false,
  bool invalid = false,
  bool disabled = false,
  ValueChanged<bool>? onChange,
  String? classes,
}) {
  final descriptionId = description == null ? null : '$id-description';
  final errorId = error == null ? null : '$id-error';
  final describedBy = [?descriptionId, ?errorId].join(' ');
  // A checkbox shows its own marker; radios share the one of the legend.
  final ownMarker = required && type == InputType.checkbox;
  return _labelElement(htmlFor: id, classes: jxJoin([s.choiceLabel, classes]), [
    input<bool?>(
      id: id,
      type: type,
      name: name,
      value: value,
      checked: checked,
      disabled: disabled,
      onChange: onChange == null ? null : (v) => onChange(v ?? false),
      classes: s.choiceInput,
      attributes: {
        if (describedBy.isNotEmpty) 'aria-describedby': describedBy,
        if (error != null || invalid) 'aria-invalid': 'true',
        if (required) 'required': '',
      },
    ),
    span(classes: s.choiceText, [
      span([.text(label), if (ownMarker) jxRequiredMarker]),
      if (description != null)
        span(id: descriptionId, classes: s.choiceDescription, [
          .text(description),
        ]),
      if (error != null)
        span(id: errorId, classes: s.fieldError, [.text(error)]),
    ]),
  ]);
}

/// A text field with suggestions, on the native `<input list>` and
/// `<datalist>`: the browser filters the list as the user types, and any
/// other value stays accepted.
class JxCombobox extends StatelessComponent {
  const JxCombobox({
    required this.id,
    required this.label,
    required this.suggestions,
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

  final String id;
  final String label;

  /// Values offered while typing.
  final List<String> suggestions;
  final String? name;
  final String? value;
  final String? placeholder;
  final String? hint;
  final String? error;
  final bool required;
  final bool disabled;
  final ValueChanged<String>? onInput;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final onInput = this.onInput;
    final listId = '$id-suggestions';
    return jxField(
      id: id,
      label: label,
      hint: hint,
      error: error,
      classes: classes,
      required: required,
      control: (aria) => Component.fragment([
        input(
          id: id,
          type: InputType.text,
          name: name,
          value: value,
          disabled: disabled,
          onInput: onInput == null ? null : (v) => onInput('$v'),
          classes: jxJoin([s.fieldInput, if (error != null) s.fieldInputInvalid]),
          attributes: {
            'list': listId,
            'autocomplete': 'off',
            'placeholder': ?placeholder,
            if (required) 'required': '',
            ...aria,
          },
        ),
        Component.element(
          tag: 'datalist',
          id: listId,
          children: [
            for (final suggestion in suggestions) option(value: suggestion, []),
          ],
        ),
      ]),
    );
  }
}
