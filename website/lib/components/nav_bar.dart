import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../data/site.dart';
import 'ui.dart';

/// Liens principaux du site.
const mainLinks = [
  (label: 'Documentation', href: '/docs/introduction', prefix: '/docs'),
  (label: 'Utilitaires', href: '/docs/utilitaires', prefix: '/docs/utilitaires'),
  (label: 'Bac à sable', href: '/bac-a-sable', prefix: '/bac-a-sable'),
];

/// En-tête collant du site ; menu repliable sur mobile.
@client
class NavBar extends StatefulComponent {
  const NavBar({required this.current, super.key});

  /// Chemin de la page affichée, pour signaler le lien actif.
  final String current;

  @override
  State<NavBar> createState() => NavBarState();
}

class NavBarState extends State<NavBar> {
  bool open = false;

  /// Le lien le plus spécifique qui correspond au chemin courant.
  String? get _active {
    String? best;
    for (final link in mainLinks) {
      if (component.current.startsWith(link.prefix) &&
          (best == null || link.prefix.length > best.length)) {
        best = link.prefix;
      }
    }
    return best;
  }

  @override
  Component build(BuildContext context) {
    final active = _active;

    return header(classes: 'sticky top:0 z:50 bg:[rgba(11,13,18,0.9)] bwb:1 bc:edge', [
      nav(
        classes: 'mw:[90rem] mx:auto px:5 md:px:8 flex ai:center jc:between gap:6 h:[4rem]',
        attributes: {'aria-label': 'Navigation principale'},
        [
          div(classes: 'flex ai:center gap:8', [
            a(href: '/', classes: 'flex ai:center gap:3 br:md fw:bold c:snow $focusRing', [
              logoMark(),
              .text(siteName),
            ]),
            div(classes: 'hidden md:flex ai:center gap:1 fs:sm', [
              for (final link in mainLinks)
                a(
                  href: link.href,
                  classes: [
                    'px:3 py:2 br:md tr:colors $focusRing',
                    if (link.prefix == active) 'c:snow fw:semibold' else 'c:haze hover:c:snow',
                  ].join(' '),
                  attributes: {if (link.prefix == active) 'aria-current': 'page'},
                  [.text(link.label)],
                ),
            ]),
          ]),
          div(classes: 'flex ai:center gap:3', [
            span(
              classes:
                  'hidden sm:inline ff:code fs:xs c:haze px:2 py:1 br:md bg:[rgba(255,255,255,0.06)]',
              [
                .text('v$siteVersion'),
              ],
            ),
            button(
              classes:
                  'md:hidden px:4 py:2 mnh:[44px] br:md fs:sm fw:semibold c:snow '
                  'bg:[rgba(255,255,255,0.06)] $focusRing',
              attributes: {'aria-expanded': '$open', 'aria-controls': 'menu-principal'},
              onClick: () => setState(() => open = !open),
              [.text(open ? 'Fermer' : 'Menu')],
            ),
          ]),
        ],
      ),
      if (open)
        div(id: 'menu-principal', classes: 'md:hidden flex fd:col px:5 pb:4', [
          for (final link in mainLinks)
            a(
              href: link.href,
              classes: 'py:3 bwt:1 bc:edge fw:semibold c:snow $focusRing',
              [.text(link.label)],
            ),
        ]),
    ]);
  }
}
