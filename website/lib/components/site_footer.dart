import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../data/docs.dart';
import '../data/site.dart';
import 'ui.dart';

/// Pied de page commun à toutes les pages.
class SiteFooter extends StatelessComponent {
  const SiteFooter({super.key});

  @override
  Component build(BuildContext context) {
    return footer(classes: 'bwt:1 bc:edge bg:[#090B0F]', [
      div(
        classes:
            'mw:[90rem] mx:auto px:5 md:px:8 grid cols:1 sm:cols:2 lg:cols:[2fr_1fr_1fr_1fr] gap:10 py:16',
        [
          div(classes: 'flex fd:col gap:4 mw:[22rem]', [
            a(href: '/', classes: 'inline-flex ai:center gap:3 fw:bold c:snow $focusRing', [
              logoMark(),
              .text(siteName),
            ]),
            p(classes: 'fs:sm lh:relaxed c:haze', [
              .text('Framework CSS utilitaire pour Dart et Jaspr, conçu et testé en Dart.'),
            ]),
            p(classes: 'fs:sm lh:relaxed c:haze', [
              .text('Ce site est construit avec Jaspr et stylé uniquement avec '),
              const ClassCode('jx:css', classes: 'fs:sm'),
              .text('.'),
            ]),
            p(classes: 'ff:code fs:xs c:haze', [.text('Version $siteVersion')]),
          ]),
          _column('Premiers pas', docsNav[0].links),
          _column('Fondamentaux', [...docsNav[1].links, ...docsNav[3].links]),
          _column('Outils', [
            (title: 'Bac à sable', path: '/bac-a-sable'),
            (title: 'Référence des utilitaires', path: '/docs/utilitaires'),
            (title: 'Thème par défaut', path: '/docs/theme'),
          ]),
        ],
      ),
    ]);
  }

  Component _column(String title, List<DocLink> links) {
    return div([
      h2(classes: 'fs:sm fw:semibold c:snow mb:4', [.text(title)]),
      ul(classes: 'flex fd:col gap:3 fs:sm', [
        for (final link in links)
          li([
            a(href: link.path, classes: 'c:haze tr:colors hover:c:snow $focusRing', [
              .text(link.title),
            ]),
          ]),
      ]),
    ]);
  }
}
