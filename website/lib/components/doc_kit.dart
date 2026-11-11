import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_engine/jx_engine.dart';

import 'ui.dart';

/// Briques de rédaction de la documentation.

final JxEngine _engine = JxEngine();

/// Compile [raw] avec le thème par défaut : les exemples restent exacts.
String compileCss(String raw) => _engine.compile(raw).css;

/// Code en ligne.
Component ic(String text) => code(
  classes: 'ff:code fs:[0.875em] px:[0.4em] py:[0.15em] br:md c:snow bg:[rgba(255,255,255,0.08)]',
  [.text(text)],
);

/// Texte avec du `code en ligne` entre accents graves.
List<Component> inline(String text) {
  final parts = text.split('`');
  return [
    for (final (i, part) in parts.indexed)
      if (part.isNotEmpty) i.isOdd ? ic(part) : Component.text(part),
  ];
}

/// Paragraphe.
Component para(String text) => p(classes: 'mb:5 lh:[1.75] c:[#C5CCD8]', inline(text));

/// Liste à puces.
Component bullets(List<String> items) =>
    ul(classes: 'mb:6 flex fd:col gap:2 pl:5 lst:disc c:[#C5CCD8]', [
      for (final item in items) li(classes: 'lh:[1.7] pl:1', inline(item)),
    ]);

/// Titre de niveau 2, ancré et repris dans « Sur cette page ».
Component docH2(String id, String text) => h2(
  id: id,
  classes: 'smt:[5.5rem] mt:14 mb:5 pt:2 fs:2xl fw:bold ls:tight c:snow',
  [
    a(
      href: '#$id',
      classes: 'br:sm hover:td:underline tdt:1 tuo:4 tdc:[rgba(255,255,255,0.3)] $focusRing',
      [
        .text(text),
      ],
    ),
  ],
);

/// Titre de niveau 3.
Component docH3(String text, {String? id}) =>
    h3(id: id, classes: 'smt:[5.5rem] mt:10 mb:3 fs:lg fw:semibold c:snow', [.text(text)]);

/// Bloc de code, avec un nom de fichier facultatif.
Component codeSample(String source, {String? title}) {
  if (title == null) {
    return pre(classes: '$codeBlock mb:6', [
      code([.text(source)]),
    ]);
  }
  return figure(classes: 'mb:6 br:xl bw:1 bc:edge ov:hidden', [
    figcaption(classes: 'px:5 py:2 ff:code fs:xs c:haze bg:shelf bwb:1 bc:edge', [.text(title)]),
    pre(classes: 'ff:code fs:sm lh:relaxed p:5 ov:auto ws:pre bg:[#07090D] c:[#C9D1DE]', [
      code([.text(source)]),
    ]),
  ]);
}

/// Encadré d'information.
Component callout(String text, {String title = 'À savoir', bool warning = false}) {
  return div(
    classes: [
      'mb:6 px:5 py:4 br:xl bwl:4',
      if (warning)
        'bc:variant bg:[rgba(255,181,71,0.07)]'
      else
        'bc:brand bg:[rgba(59,108,240,0.08)]',
    ].join(' '),
    attributes: {'role': 'note'},
    [
      p(classes: ['fw:semibold mb:1', if (warning) 'c:variant' else 'c:beam'].join(' '), [
        .text(title),
      ]),
      p(classes: 'lh:relaxed c:[#C5CCD8]', inline(text)),
    ],
  );
}

/// Tableau de données.
Component dataTable(List<String> headers, List<List<Component>> rows) {
  return div(classes: 'mb:8 br:xl bw:1 bc:edge ovx:auto', [
    table(classes: 'w:full fs:sm', [
      thead(classes: 'bg:shelf', [
        tr([
          for (final h in headers)
            th(classes: 'px:4 py:3 ta:left fw:semibold c:snow ws:nowrap', [.text(h)]),
        ]),
      ]),
      tbody([
        for (final row in rows)
          tr(classes: 'bwt:1 bc:edge', [
            for (final cell in row) td(classes: 'px:4 py:3 va:top c:[#C5CCD8] lh:relaxed', [cell]),
          ]),
      ]),
    ]),
  ]);
}

/// Exemples de classes et CSS produit, compilés au rendu de la page.
Component examples(List<String> raws) {
  return div(classes: 'mb:8 $panel ov:hidden', [
    for (final (i, raw) in raws.indexed)
      div(
        classes: [
          'grid cols:1 md:cols:[minmax(0,14rem)_minmax(0,1fr)] gap:3 md:gap:6 px:5 py:4',
          if (i > 0) 'bwt:1 bc:edge',
        ].join(' '),
        [
          div([ClassCode(raw, classes: 'fs:sm fw:semibold')]),
          pre(classes: 'ff:code fs:xs md:fs:sm lh:relaxed c:[#C9D1DE] ov:auto ws:pre', [
            code([.text(compileCss(raw))]),
          ]),
        ],
      ),
  ]);
}
