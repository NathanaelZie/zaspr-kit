import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:universal_web/web.dart' as web;

import 'field.dart';
import 'forms.dart';
import 'styles.dart' as s;
import 'utils.dart';

const _labelElement = label.new;
const _legendElement = legend.new;

/// Value of the input that fired [event], as a string.
String _valueOf(web.Event event) =>
    (event.target as web.HTMLInputElement).value;

/// A row of mutually exclusive options drawn as a single control, such as
/// "Day / Week / Month". Native radios in a `<fieldset>`: arrow keys move
/// between options.
class JxSegmentedControl extends StatelessComponent {
  const JxSegmentedControl({
    required this.name,
    required this.legend,
    required this.options,
    this.value,
    this.hideLegend = false,
    this.disabled = false,
    this.onChange,
    this.classes,
    super.key,
  });

  /// Shared `name` of the radios; also prefixes their ids.
  final String name;
  final String legend;
  final List<JxOption> options;
  final String? value;

  /// Keeps the legend for screen readers only.
  final bool hideLegend;
  final bool disabled;
  final ValueChanged<String>? onChange;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final onChange = this.onChange;
    return fieldset(
      disabled: disabled,
      classes: jxJoin([s.radioGroup, classes]),
      [
        _legendElement(classes: hideLegend ? 'sr-only' : s.radioLegend, [
          .text(legend),
        ]),
        div(classes: s.segmentedTrack, [
          for (final o in options)
            _labelElement(
              htmlFor: '$name-${o.value}',
              classes: s.segmentLabel,
              [
                input<bool?>(
                  id: '$name-${o.value}',
                  type: InputType.radio,
                  name: name,
                  value: o.value,
                  checked: o.value == value,
                  disabled: disabled,
                  onChange: onChange == null
                      ? null
                      : (selected) {
                          if (selected ?? false) onChange(o.value);
                        },
                  classes: s.segmentInput,
                ),
                span(classes: s.segmentText, [.text(o.label)]),
              ],
            ),
        ]),
      ],
    );
  }
}

/// A labelled range input with its current value.
class JxSlider extends StatelessComponent {
  const JxSlider({
    required this.id,
    required this.label,
    required this.value,
    this.min = 0,
    this.max = 100,
    this.step = 1,
    this.name,
    this.unit = '',
    this.showValue = true,
    this.showBounds = false,
    this.hint,
    this.disabled = false,
    this.onInput,
    this.classes,
    super.key,
  });

  final String id;
  final String label;
  final num value;
  final num min;
  final num max;
  final num step;
  final String? name;

  /// Appended to the displayed value, such as `%` or ` px`.
  final String unit;
  final bool showValue;

  /// Shows [min] and [max] under the track.
  final bool showBounds;
  final String? hint;
  final bool disabled;

  /// Called while the thumb moves.
  final ValueChanged<num>? onInput;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final onInput = this.onInput;
    final hintId = hint == null ? null : '$id-message';
    final shown = '${_format(value)}$unit';
    return div(classes: jxJoin([s.fieldWrapper, classes]), [
      div(classes: s.sliderHeader, [
        _labelElement(htmlFor: id, classes: s.fieldLabel, [.text(label)]),
        if (showValue)
          Component.element(
            tag: 'output',
            classes: s.sliderValue,
            attributes: {'for': id},
            children: [.text(shown)],
          ),
      ]),
      input(
        id: id,
        type: InputType.range,
        name: name,
        value: '$value',
        disabled: disabled,
        classes: s.sliderInput,
        attributes: {
          'min': '$min',
          'max': '$max',
          'step': '$step',
          if (unit.isNotEmpty) 'aria-valuetext': shown,
          'aria-describedby': ?hintId,
        },
        events: onInput == null
            ? null
            : {'input': (event) => onInput(num.parse(_valueOf(event)))},
      ),
      if (showBounds)
        div(
          classes: s.sliderBounds,
          attributes: const {'aria-hidden': 'true'},
          [
            span([.text('${_format(min)}$unit')]),
            span([.text('${_format(max)}$unit')]),
          ],
        ),
      if (hint case final hint?)
        p(id: hintId, classes: s.fieldHint, [.text(hint)]),
    ]);
  }

  static String _format(num n) =>
      n == n.roundToDouble() ? '${n.round()}' : '$n';
}

/// Kind of value a [JxDateField] picks.
enum JxDateType { date, time, dateTime, month, week }

/// A labelled date or time input, on the native picker of the browser and
/// the system: keyboard, screen readers and phones handled for you.
///
/// Values are strings in the HTML formats: `2026-11-14`, `14:30`,
/// `2026-11-14T14:30`, `2026-11`, `2026-W46`.
class JxDateField extends StatelessComponent {
  const JxDateField({
    required this.id,
    required this.label,
    this.type = JxDateType.date,
    this.name,
    this.value,
    this.min,
    this.max,
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
  final JxDateType type;
  final String? name;
  final String? value;

  /// Earliest and latest accepted values, in the same format as [value].
  final String? min;
  final String? max;
  final String? hint;
  final String? error;
  final bool required;
  final bool disabled;

  /// Called with the new value, or an empty string when cleared.
  final ValueChanged<String>? onInput;
  final String? classes;

  static const _types = {
    JxDateType.date: InputType.date,
    JxDateType.time: InputType.time,
    JxDateType.dateTime: InputType.dateTimeLocal,
    JxDateType.month: InputType.month,
    JxDateType.week: InputType.week,
  };

  @override
  Component build(BuildContext context) {
    final onInput = this.onInput;
    return jxField(
      id: id,
      label: label,
      hint: hint,
      error: error,
      classes: classes,
      required: required,
      control: (aria) => input(
        id: id,
        type: _types[type],
        name: name,
        value: value,
        disabled: disabled,
        classes: jxJoin([
          s.fieldInput,
          s.dateInput,
          if (error != null) s.fieldInputInvalid,
        ]),
        attributes: {
          'min': ?min,
          'max': ?max,
          if (required) 'required': '',
          ...aria,
        },
        events: onInput == null
            ? null
            : {'input': (event) => onInput(_valueOf(event))},
      ),
    );
  }
}
