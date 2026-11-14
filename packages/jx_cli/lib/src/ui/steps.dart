import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'styles.dart' as s;
import 'utils.dart';

/// One step of a [JxSteps].
class JxStep {
  const JxStep({required this.label, this.description});

  final String label;
  final String? description;
}

/// Where the user is in a flow of several steps (checkout, onboarding).
///
/// Steps before [current] are complete, [current] is the step in progress,
/// the next ones are upcoming. An ordered list with `aria-current="step"`;
/// vertical on phones, horizontal from the `md` breakpoint.
class JxSteps extends StatelessComponent {
  const JxSteps(
    this.steps, {
    required this.current,
    this.label = 'Progress',
    this.completeLabel = 'completed',
    this.classes,
    super.key,
  });

  final List<JxStep> steps;

  /// Index of the step in progress. `steps.length` marks every step complete.
  final int current;

  /// Accessible name of the list.
  final String label;

  /// Read after the label of each complete step.
  final String completeLabel;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return ol(
      classes: jxJoin([s.stepsList, classes]),
      attributes: {'aria-label': label},
      [
        for (final (i, step) in steps.indexed)
          _step(
            i,
            step,
            i < current
                ? 'complete'
                : i == current
                ? 'current'
                : 'upcoming',
            last: i == steps.length - 1,
          ),
      ],
    );
  }

  Component _step(int index, JxStep step, String status, {required bool last}) {
    return li(
      classes: s.stepItem,
      attributes: {if (status == 'current') 'aria-current': 'step'},
      [
        span(
          classes: jxJoin([s.stepMarker, s.stepMarkerStates[status]]),
          attributes: const {'aria-hidden': 'true'},
          [
            if (status == 'complete')
              const svg(
                viewBox: '0 0 24 24',
                classes: 'w:4 h:4',
                attributes: {
                  'fill': 'none',
                  'stroke': 'currentColor',
                  'stroke-width': '3',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                },
                [path(d: 'M20 6 9 17l-5-5', [])],
              )
            else
              Component.text('${index + 1}'),
          ],
        ),
        span(classes: s.stepText, [
          span(classes: s.stepLabelStates[status], [
            .text(step.label),
            if (status == 'complete')
              span(classes: 'sr-only', [.text(', $completeLabel')]),
          ]),
          if (step.description case final description?)
            span(classes: s.stepDescription, [.text(description)]),
        ]),
        if (!last)
          span(
            classes: status == 'complete'
                ? s.stepConnectorDone
                : s.stepConnectorIdle,
            attributes: const {'aria-hidden': 'true'},
            [],
          ),
      ],
    );
  }
}
