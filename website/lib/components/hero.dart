import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_engine/jx_engine.dart';

import '../data/site.dart';
import 'ui.dart';

/// En-tête centré : logo, annonce, promesse, commande à copier, puis une
/// classe JX disséquée et le CSS qu'elle produit (compilé au rendu).
class Hero extends StatelessComponent {
  const Hero({super.key});

  @override
  Component build(BuildContext context) {
    final css = JxEngine().compile(anatomyClass).css;

    return section(id: 'top', classes: 'relative ov:hidden', [
      // Halo de couleurs de la marque, fondu vers le fond de page.
      div(
        // Une seule chaîne : l'extracteur JX lit chaque littéral séparément.
        classes: 'absolute inset:0 z:0 $_halo',
        attributes: {'aria-hidden': 'true'},
        [],
      ),
      div(
        classes: 'absolute inset:0 z:0 bg:[linear-gradient(to_bottom,transparent_55%,#0B0D12)]',
        attributes: {'aria-hidden': 'true'},
        [],
      ),
      div(classes: '$container relative z:10 flex fd:col ai:center ta:center pt:16 md:pt:[6.5rem]', [
        logoMark(classes: 'w:[4.5rem] h:[4.5rem] br:2xl fs:4xl sh:2xl'),
        a(
          href: announcement.href,
          classes:
              'inline-flex ai:center gap:2 mt:8 px:4 py:2 br:full fs:sm fw:medium c:variant '
              'bg:[rgba(255,181,71,0.1)] bw:1 bc:[rgba(255,181,71,0.3)] tr:all '
              'hover:bg:[rgba(255,181,71,0.18)] $focusRing',
          [.text(announcement.label), glyph('arrow', classes: 'w:4 h:4')],
        ),
        h1(
          classes:
              'mt:6 fs:[clamp(2.4rem,6vw,4.5rem)] fw:extrabold lh:[1.05] ls:tighter c:snow mw:[18ch]',
          [.text(siteHeadline)],
        ),
        p(classes: 'mt:6 fs:lg md:fs:xl lh:relaxed c:haze mw:[42rem]', [.text(siteDescription)]),
        div(classes: 'flex fd:col md:fd:row ai:stretch gap:3 mt:10 w:full md:w:auto', [
          const CopyCommand(heroCommand),
          a(href: '/docs/introduction', classes: primaryAction, [
            glyph('book'),
            .text('Lire la documentation'),
          ]),
        ]),
        p(classes: 'mt:5 fs:sm c:haze', [
          .text('Version actuelle : v$siteVersion. Dart 3.10 et Jaspr 0.22 minimum.'),
        ]),
      ]),

      // Anatomie d'une classe
      div(classes: '$container relative z:10 pt:16 md:pt:[5rem] pb:8', [
        div(classes: '$panel sh:2xl ov:hidden', [
          div(classes: 'px:5 md:px:10 pt:8 md:pt:10 pb:8', [
            p(classes: 'fs:sm fw:semibold c:haze mb:4', [.text('Anatomie d\'une classe')]),
            const ClassCode(
              anatomyClass,
              classes: 'fs:[clamp(1.6rem,6vw,3.5rem)] fw:bold ls:tight',
            ),
          ]),
          div(classes: 'grid cols:1 sm:cols:2 lg:cols:4 gap:6 px:5 md:px:10 pb:8', [
            for (final part in anatomyParts)
              div(classes: 'pt:4 bwt:2 ${_partBorder[part.color]!}', [
                div(classes: 'flex ai:baseline jc:between gap:3', [
                  h3(classes: 'fw:bold c:snow', [.text(part.label)]),
                  code(classes: 'ff:code fs:sm ${_partText[part.color]}', [.text(part.sample)]),
                ]),
                p(classes: 'mt:2 fs:sm lh:relaxed c:haze', [.text(part.text)]),
              ]),
          ]),
          div(classes: 'p:5 md:px:10 md:py:8 bg:[rgba(0,0,0,0.22)] bwt:1 bc:edge', [
            p(classes: 'fs:sm fw:semibold c:haze mb:3', [.text('CSS produit par le moteur')]),
            pre(classes: 'ff:code fs:sm lh:relaxed ov:auto ws:pre c:[#C9D1DE]', [
              code([.text(css)]),
            ]),
          ]),
        ]),
      ]),
    ]);
  }

  static const _halo =
      'bg:[radial-gradient(42rem_30rem_at_12%_-6%,rgba(59,108,240,0.38),transparent_70%),radial-gradient(38rem_26rem_at_92%_4%,rgba(45,212,191,0.22),transparent_70%),radial-gradient(34rem_22rem_at_55%_62%,rgba(255,181,71,0.1),transparent_70%)]';

  // Littéraux complets pour que l'extracteur JX les trouve.
  static const _partBorder = {
    'variant': 'bc:variant',
    'ident': 'bc:ident',
    'value': 'bc:value',
    'bang': 'bc:bang',
  };
  static const _partText = {
    'variant': 'c:variant',
    'ident': 'c:ident',
    'value': 'c:value',
    'bang': 'c:bang',
  };
}
