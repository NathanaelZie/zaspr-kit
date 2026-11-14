import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import 'styles.dart' as s;
import 'utils.dart';

/// Size of a [JxSpinner].
enum JxSpinnerSize { sm, md, lg }

/// A spinning loading indicator that inherits the text color.
///
/// With a [label] (the default), it is announced as a status. With
/// `label: null` it is decorative, for example inside a busy button.
class JxSpinner extends StatelessComponent {
  const JxSpinner({
    this.size = JxSpinnerSize.md,
    this.label = 'Loading',
    this.classes,
    super.key,
  });

  final JxSpinnerSize size;
  final String? label;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final icon = svg(
      viewBox: '0 0 24 24',
      classes: jxJoin([s.spinner, s.spinnerSizes[size.name], classes]),
      attributes: const {'fill': 'none', 'aria-hidden': 'true'},
      [
        const circle(
          cx: '12',
          cy: '12',
          r: '10',
          strokeWidth: '4',
          attributes: {'stroke': 'currentColor', 'opacity': '0.25'},
          [],
        ),
        const path(
          d: 'M22 12a10 10 0 0 0-10-10',
          attributes: {
            'stroke': 'currentColor',
            'stroke-width': '4',
            'stroke-linecap': 'round',
          },
          [],
        ),
      ],
    );
    if (label case final label?) {
      return span(
        classes: 'inline-flex',
        attributes: const {'role': 'status'},
        [
          icon,
          span(classes: 'sr-only', [.text(label)]),
        ],
      );
    }
    return icon;
  }
}

/// A determinate progress bar (`role="progressbar"`).
class JxProgress extends StatelessComponent {
  const JxProgress({
    required this.value,
    required this.label,
    this.max = 100,
    this.showValue = true,
    this.classes,
    super.key,
  });

  final num value;
  final num max;

  /// Accessible name, also shown above the bar.
  final String label;

  /// Shows the percentage next to the label.
  final bool showValue;
  final String? classes;

  @override
  Component build(BuildContext context) {
    final ratio = max <= 0 ? 0.0 : (value / max).clamp(0, 1).toDouble();
    final percent = (ratio * 100).round();
    return div(classes: jxJoin([s.progressWrapper, classes]), [
      div(classes: s.progressHeader, [
        span([.text(label)]),
        if (showValue) span([.text('$percent%')]),
      ]),
      div(
        classes: s.progressTrack,
        attributes: {
          'role': 'progressbar',
          'aria-label': label,
          'aria-valuemin': '0',
          'aria-valuemax': '$max',
          'aria-valuenow': '$value',
        },
        [
          div(
            classes: s.progressBar,
            styles: Styles(width: Unit.percent(ratio * 100)),
            [],
          ),
        ],
      ),
    ]);
  }
}

/// A pulsing placeholder shown while content loads. Size it with [classes],
/// for example `h:10 w:10 br:full` for an avatar.
class JxSkeleton extends StatelessComponent {
  const JxSkeleton({this.classes, super.key});

  final String? classes;

  @override
  Component build(BuildContext context) {
    return span(
      classes: jxJoin([s.skeleton, classes ?? s.skeletonDefault]),
      attributes: const {'aria-hidden': 'true'},
      [],
    );
  }
}

/// What to show when a list or a search has no result: a title, an
/// explanation and an optional action.
class JxEmptyState extends StatelessComponent {
  const JxEmptyState({
    required this.title,
    this.text,
    this.icon,
    this.action,
    this.classes,
    super.key,
  });

  final String title;
  final String? text;

  /// Decorative icon shown above the title.
  final Component? icon;

  /// Usually a [JxButton].
  final Component? action;
  final String? classes;

  @override
  Component build(BuildContext context) {
    return div(classes: jxJoin([s.emptyState, classes]), [
      if (icon case final icon?)
        span(
          classes: 'c:gray-500',
          attributes: const {'aria-hidden': 'true'},
          [icon],
        ),
      p(classes: s.emptyStateTitle, [.text(title)]),
      if (text case final text?) p(classes: s.emptyStateText, [.text(text)]),
      ?action,
    ]);
  }
}
