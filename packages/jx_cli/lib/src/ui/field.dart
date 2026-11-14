import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'styles.dart' as s;
import 'utils.dart';

const _labelElement = label.new;

/// Label, control and hint or error, linked for assistive technology.
///
/// Shared by the text field, text area and select. Internal: not exported.
Component jxField({
  required String id,
  required String label,
  required String? hint,
  required String? error,
  required String? classes,
  required Component Function(Map<String, String> aria) control,
  bool required = false,
}) {
  final message = error ?? hint;
  final messageId = message == null ? null : '$id-message';
  return div(classes: jxJoin([s.fieldWrapper, classes]), [
    _labelElement(htmlFor: id, classes: s.fieldLabel, [
      .text(label),
      if (required) jxRequiredMarker,
    ]),
    control({
      if (error != null) 'aria-invalid': 'true',
      'aria-describedby': ?messageId,
    }),
    if (message != null)
      p(id: messageId, classes: error != null ? s.fieldError : s.fieldHint, [
        .text(message),
      ]),
  ]);
}

/// Red asterisk after the label of a required field. Hidden from assistive
/// technology: the control announces `required` itself.
const Component jxRequiredMarker = span(
  classes: s.fieldRequired,
  attributes: {'aria-hidden': 'true'},
  [Component.text('*')],
);
