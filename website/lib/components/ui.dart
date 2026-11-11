import 'dart:async';

import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:universal_web/js_interop.dart';
import 'package:universal_web/web.dart' as web;

/// Conteneur centré.
const container = 'mw:[76rem] mx:auto px:5 md:px:8';

/// Contour visible au clavier.
const focusRing = 'focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4';

/// Action principale.
const primaryAction =
    'inline-flex ai:center jc:center gap:2 px:6 py:3 mnh:[48px] br:lg fw:semibold c:white bg:brand '
    'sh:lg tr:all hover:bg:[#4E7CF5] hover:-ty:1 $focusRing';

/// Action secondaire.
const secondaryAction =
    'inline-flex ai:center jc:center gap:2 px:6 py:3 mnh:[48px] br:lg fw:semibold c:snow '
    'bg:[rgba(255,255,255,0.06)] tr:all hover:bg:[rgba(255,255,255,0.12)] $focusRing';

/// Lien texte.
const textLink =
    'c:beam td:underline tdt:1 tuo:4 tdc:[rgba(126,162,255,0.4)] '
    'tr:colors hover:c:snow hover:tdc:snow $focusRing';

/// Bloc de code.
const codeBlock =
    'ff:code fs:sm lh:relaxed p:5 br:xl ov:auto ws:pre '
    'bg:[#07090D] bw:1 bc:edge c:[#C9D1DE]';

/// Panneau de contenu.
const panel = 'br:2xl bw:1 bc:edge bg:deep';

/// Champ de saisie.
const field =
    'w:full px:4 py:3 br:lg c:snow bg:[#07090D] bw:1 bc:edge '
    'app:none caret:beam placeholder:c:[#6B7385] tr:all '
    'focus:ol:none focus:bc:brand focus:ring:4 ringc:[rgba(59,108,240,0.25)]';

/// Icônes au trait (24 × 24), dessinées pour le site.
const icons = <String, List<String>>{
  'terminal': ['M4 17l6-6-6-6', 'M12 19h8'],
  'code': ['M16 18l6-6-6-6', 'M8 6l-6 6 6 6'],
  'zap': ['M13 2 3 14h9l-1 8 10-12h-9l1-8z'],
  'book': [
    'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
    'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  ],
  'layers': ['M12 2 2 7l10 5 10-5-10-5z', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5'],
  'copy': ['M9 9h11v11H9z', 'M5 15H4V4h11v1'],
  'check': ['M20 6 9 17l-5-5'],
  'arrow': ['M5 12h14', 'M12 5l7 7-7 7'],
};

/// Icône décorative ; le libellé est porté par le texte voisin.
Component glyph(String name, {String classes = 'w:5 h:5'}) {
  return svg(
    viewBox: '0 0 24 24',
    classes: 'shrink:0 $classes',
    attributes: {
      'fill': 'none',
      'stroke': 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'aria-hidden': 'true',
    },
    [for (final d in icons[name]!) path([], d: d)],
  );
}

/// Logo : un « Z » sur le dégradé de marque.
Component logoMark({String classes = 'w:8 h:8 br:lg fs:base'}) {
  return span(
    classes:
        'flex ai:center jc:center shrink:0 c:white ff:code fw:extrabold '
        'bg:[linear-gradient(135deg,#3B6CF0,#2DD4BF)] $classes',
    attributes: {'aria-hidden': 'true'},
    [.text('Z')],
  );
}

/// Teintes des tuiles d'icône : littéraux complets pour l'extracteur JX.
const _tones = {
  'brand': 'c:beam bg:[rgba(59,108,240,0.16)]',
  'variant': 'c:variant bg:[rgba(255,181,71,0.14)]',
  'ident': 'c:ident bg:[rgba(45,212,191,0.14)]',
  'value': 'c:value bg:[rgba(125,211,252,0.14)]',
  'bang': 'c:bang bg:[rgba(251,113,133,0.14)]',
};

/// Section de présentation : tuile d'icône, grand titre, chapeau, lien.
class PageSection extends StatelessComponent {
  const PageSection({
    required this.id,
    required this.icon,
    required this.tone,
    required this.title,
    required this.lead,
    required this.children,
    this.link,
    this.classes = '',
    super.key,
  });

  final String id;
  final String icon;
  final String tone;
  final String title;
  final String lead;
  final ({String label, String href})? link;
  final String classes;
  final List<Component> children;

  @override
  Component build(BuildContext context) {
    return section(id: id, classes: 'smt:16 py:[4.5rem] md:py:[6rem] $classes', [
      div(classes: container, [
        div(classes: 'mb:12 mw:[48rem]', [
          div(
            classes: 'flex ai:center jc:center w:12 h:12 br:xl mb:6 ${_tones[tone]!}',
            [glyph(icon, classes: 'w:6 h:6')],
          ),
          h2(classes: 'fs:[clamp(2rem,4.2vw,3rem)] fw:extrabold lh:[1.1] ls:tight c:snow', [
            .text(title),
          ]),
          p(classes: 'mt:5 fs:lg md:fs:xl lh:relaxed c:haze', [.text(lead)]),
          if (link case final link?)
            a(href: link.href, classes: 'inline-flex ai:center gap:2 mt:6 fw:semibold $textLink', [
              .text(link.label),
              glyph('arrow', classes: 'w:4 h:4'),
            ]),
        ]),
        ...children,
      ]),
    ]);
  }
}

/// Commande à copier en un clic.
@client
class CopyCommand extends StatefulComponent {
  const CopyCommand(this.command, {super.key});

  final String command;

  @override
  State<CopyCommand> createState() => CopyCommandState();
}

class CopyCommandState extends State<CopyCommand> {
  bool copied = false;
  Timer? _reset;

  Future<void> _copy() async {
    try {
      await web.window.navigator.clipboard.writeText(component.command).toDart;
    } catch (_) {
      return; // Presse-papiers refusé : rien à confirmer.
    }
    _reset?.cancel();
    setState(() => copied = true);
    _reset = Timer(const Duration(seconds: 2), () => setState(() => copied = false));
  }

  @override
  void dispose() {
    _reset?.cancel();
    super.dispose();
  }

  @override
  Component build(BuildContext context) {
    return div(
      classes:
          'flex ai:center jc:between gap:3 pl:5 pr:1 py:1 mnh:[48px] br:lg bg:[#07090D] bw:1 bc:edge '
          'ff:code fs:sm c:snow ta:left',
      [
        code(classes: 'mnw:0 ws:nowrap ovx:auto', [
          span(classes: 'c:haze', attributes: {'aria-hidden': 'true'}, [.text('\$ ')]),
          .text(component.command),
        ]),
        button(
          classes: [
            'flex ai:center jc:center w:10 h:10 br:md tr:all $focusRing',
            if (copied) 'c:ident' else 'c:haze hover:c:snow hover:bg:[rgba(255,255,255,0.08)]',
          ].join(' '),
          attributes: {
            'type': 'button',
            'aria-label': copied ? 'Commande copiée' : 'Copier la commande',
            'title': copied ? 'Copié' : 'Copier',
          },
          onClick: _copy,
          [glyph(copied ? 'check' : 'copy', classes: 'w:4 h:4')],
        ),
      ],
    );
  }
}

/// Affiche une classe JX colorée selon sa structure, analysée par le
/// véritable parseur : variantes, identifiant, valeur, importance.
class ClassCode extends StatelessComponent {
  const ClassCode(this.raw, {this.classes = '', super.key});

  final String raw;
  final String classes;

  static const _parser = JxParser();

  @override
  Component build(BuildContext context) {
    final token = _parser.parseToken(raw);
    if (token == null) {
      return code(classes: 'ff:code c:bang $classes', [.text(raw)]);
    }
    return code(classes: 'inline-flex wrap ff:code $classes', [
      for (final variant in token.variants) ...[
        span(classes: 'c:variant', [.text(variant)]),
        span(classes: 'c:haze', [.text(':')]),
      ],
      if (token.isNegative && raw.startsWith('-')) span(classes: 'c:value', [.text('-')]),
      span(classes: 'c:ident', [.text(token.identifier)]),
      if (token.value != null) ...[
        span(classes: 'c:haze', [.text(':')]),
        span(classes: 'c:value', [
          .text('${token.isNegative && !raw.startsWith('-') ? '-' : ''}${token.value}'),
        ]),
      ],
      if (token.isImportant) span(classes: 'c:bang', [.text('!')]),
    ]);
  }
}
