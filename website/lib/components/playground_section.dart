import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_engine/jx_engine.dart';

import 'ui.dart';

/// Bac à sable : le moteur JX compile dans le navigateur, à chaque frappe.
///
/// L'aperçu applique les déclarations de base en style en ligne ; les
/// variantes (`hover:`, `md:`…) apparaissent dans le CSS généré.
@client
class Playground extends StatefulComponent {
  const Playground({super.key});

  @override
  State<Playground> createState() => PlaygroundState();
}

class PlaygroundState extends State<Playground> {
  static const examples = [
    (
      label: 'Bouton',
      preview: 'Valider',
      classes: 'px:6 py:3 br:lg bg:teal c:white fw:semibold hover:bg:teal-700 focus-visible:ring:2',
    ),
    (
      label: 'Carte',
      preview: 'Une carte compilée par JX',
      classes: 'p:6 br:xl bg:white c:gray-900 sh:xl mw:[16rem] lh:relaxed',
    ),
    (
      label: 'Champ',
      preview: 'Votre email',
      classes:
          'px:4 py:3 br:md bw:1 bc:gray-300 bg:white c:gray-700 w:[16rem] focus:ring:4 ringc:blue-300',
    ),
    (
      label: 'Titre',
      preview: 'Bonjour JX',
      classes: 'fs:4xl fw:extrabold ls:tight c:teal-300 md:fs:6xl',
    ),
  ];

  static final JxEngine _engine = JxEngine();

  int example = 0;
  late String classes = examples.first.classes;

  @override
  Component build(BuildContext context) {
    final result = _engine.compile(classes);
    final inline = [
      for (final rule in result.rules)
        if (!rule.hasMediaQuery && !rule.hasPseudoSelector)
          for (final d in rule.declarations) '${d.property}: ${d.value}',
    ].join('; ');

    return div([
      div(
        classes: 'flex wrap gap:2 mb:5',
        attributes: {'role': 'group', 'aria-label': 'Exemples'},
        [
          for (final (i, ex) in examples.indexed)
            button(
              classes: [
                'px:4 py:2 mnh:[44px] br:md fs:sm fw:semibold tr:all $focusRing',
                if (i == example)
                  'c:white bg:brand'
                else
                  'c:haze bg:[rgba(255,255,255,0.06)] hover:c:snow hover:bg:[rgba(255,255,255,0.1)]',
              ].join(' '),
              attributes: {'aria-pressed': '${i == example}'},
              onClick: () => setState(() {
                example = i;
                classes = ex.classes;
              }),
              [.text(ex.label)],
            ),
        ],
      ),
      div(classes: 'grid cols:1 lg:cols:2 $panel ov:hidden', [
        div(classes: 'flex fd:col gap:5 p:5 md:p:6', [
          label(classes: 'flex fd:col gap:2', [
            span(classes: 'fs:sm fw:semibold c:snow', [.text('Classes')]),
            textarea(
              key: ValueKey(example),
              rows: 3,
              spellCheck: SpellCheck.isFalse,
              classes: '$field ff:code fs:sm fsz:content rsz:none mnh:[6rem] mh:[12rem]',
              onInput: (value) => setState(() => classes = value),
              [.text(classes)],
            ),
          ]),
          div(classes: 'flex fd:col gap:2', [
            div(classes: 'flex jc:between fs:sm', [
              span(classes: 'fw:semibold c:snow', [.text('CSS généré')]),
              span(classes: 'c:haze', [
                .text('${result.ruleCount} règle${result.ruleCount > 1 ? 's' : ''}'),
              ]),
            ]),
            pre(classes: '$codeBlock mh:[18rem]', [
              code([.text(result.css.isEmpty ? '/* Aucune classe reconnue */' : result.css)]),
            ]),
            if (result.warnings.isNotEmpty)
              ul(
                classes: 'flex fd:col gap:1 fs:sm c:bang',
                attributes: {'role': 'status'},
                [
                  for (final warning in result.warnings) li([.text(warning)]),
                ],
              ),
          ]),
        ]),
        div(
          classes:
              'relative flex ai:center jc:center p:8 mnh:[18rem] bwt:1 lg:bwt:0 lg:bwl:1 bc:edge '
              'bg:[radial-gradient(rgba(155,164,180,0.18)_1px,transparent_1px)] bgs:[18px_18px]',
          [
            span(classes: 'absolute top:4 left:5 fs:sm c:haze', [.text('Aperçu')]),
            div(attributes: {'style': inline}, [.text(examples[example].preview)]),
          ],
        ),
      ]),
    ]);
  }
}
