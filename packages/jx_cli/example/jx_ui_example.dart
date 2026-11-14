import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_cli/ui.dart';

/// A sign-up card built from jx_ui components.
class SignUpCard extends StatelessComponent {
  const SignUpCard({super.key});

  @override
  Component build(BuildContext context) {
    return const JxCard(title: 'Newsletter', classes: 'mw:[24rem]', [
      JxAlert([
        Component.text('We send one email per month.'),
      ], tone: JxTone.success),
      JxTextField(
        id: 'email',
        label: 'Email',
        type: InputType.email,
        placeholder: 'you@example.com',
      ),
      div(classes: 'flex gap:2', [
        JxButton([Component.text('Subscribe')]),
        JxButton([Component.text('Later')], variant: JxButtonVariant.ghost),
      ]),
    ]);
  }
}
