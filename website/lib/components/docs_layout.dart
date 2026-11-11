import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../data/docs.dart';
import '../data/site.dart';
import 'nav_bar.dart';
import 'site_footer.dart';
import 'ui.dart';

/// Une entrée de « Sur cette page ».
typedef TocEntry = ({String id, String label});

/// Gabarit des pages de documentation : navigation latérale, contenu,
/// sommaire de la page et pagination.
class DocsLayout extends StatelessComponent {
  const DocsLayout({
    required this.path,
    required this.title,
    required this.lead,
    required this.children,
    this.toc = const [],
    super.key,
  });

  final String path;
  final String title;
  final String lead;
  final List<TocEntry> toc;
  final List<Component> children;

  @override
  Component build(BuildContext context) {
    final index = docsPages.indexWhere((page) => page.path == path);
    final previous = index > 0 ? docsPages[index - 1] : null;
    final next = index >= 0 && index < docsPages.length - 1 ? docsPages[index + 1] : null;

    return div(classes: 'ff:text c:snow bg:abyss mnh:[100vh]', [
      Document.head(title: '$title : documentation $siteName', meta: {'description': lead}),
      NavBar(current: path),
      div(
        classes:
            'mw:[90rem] mx:auto px:5 md:px:8 grid cols:1 lg:cols:[15rem_minmax(0,1fr)] '
            'xl:cols:[15rem_minmax(0,1fr)_13rem] gap:10',
        [
          aside(
            classes: 'hidden lg:block sticky top:[4rem] h:[calc(100vh_-_4rem)] ovy:auto py:10 pr:2',
            [DocsSidebar(current: path)],
          ),
          main_(classes: 'mnw:0 py:8 lg:py:12', [
            div(classes: 'lg:hidden mb:8', [DocsMobileNav(current: path)]),
            article(classes: 'mw:[48rem]', [
              p(classes: 'fs:sm fw:semibold c:beam mb:3', [
                .text(sectionOf(path) ?? 'Documentation'),
              ]),
              h1(classes: 'fs:[clamp(2rem,4vw,2.75rem)] fw:extrabold lh:[1.1] ls:tight c:snow', [
                .text(title),
              ]),
              p(classes: 'mt:4 fs:lg md:fs:xl lh:relaxed c:haze', [.text(lead)]),
              div(classes: 'mt:10', children),
            ]),
            nav(
              classes: 'mw:[48rem] grid cols:1 sm:cols:2 gap:4 mt:16 pt:8 bwt:1 bc:edge',
              attributes: {'aria-label': 'Pages précédente et suivante'},
              [
                if (previous != null)
                  _pagerLink(previous, 'Précédent', alignEnd: false)
                else
                  div([]),
                if (next != null) _pagerLink(next, 'Suivant', alignEnd: true),
              ],
            ),
          ]),
          if (toc.isNotEmpty)
            aside(
              classes: 'hidden xl:block sticky top:[4rem] h:[calc(100vh_-_4rem)] ovy:auto py:12',
              [
                nav(
                  attributes: {'aria-label': 'Sur cette page'},
                  [
                    p(classes: 'fs:sm fw:semibold c:snow mb:3', [.text('Sur cette page')]),
                    ul(classes: 'flex fd:col gap:2 bwl:1 bc:edge', [
                      for (final entry in toc)
                        li([
                          a(
                            href: '#${entry.id}',
                            classes:
                                'block pl:4 -ml:px bwl:1 bc:transparent fs:sm c:haze tr:colors hover:c:snow hover:bc:haze $focusRing',
                            [.text(entry.label)],
                          ),
                        ]),
                    ]),
                  ],
                ),
              ],
            )
          else
            div(classes: 'hidden xl:block', []),
        ],
      ),
      const SiteFooter(),
    ]);
  }

  Component _pagerLink(DocLink link, String label, {required bool alignEnd}) {
    return a(
      href: link.path,
      classes: [
        'flex fd:col gap:1 p:5 br:xl bw:1 bc:edge tr:all hover:bc:[rgba(126,162,255,0.5)] hover:bg:deep $focusRing',
        if (alignEnd) 'ai:end ta:right',
      ].join(' '),
      [
        span(classes: 'fs:sm c:haze', [.text(label)]),
        span(classes: 'fw:semibold c:beam', [.text(link.title)]),
      ],
    );
  }
}

/// Navigation latérale, groupée par section.
class DocsSidebar extends StatelessComponent {
  const DocsSidebar({required this.current, super.key});

  final String current;

  @override
  Component build(BuildContext context) {
    return nav(
      attributes: {'aria-label': 'Documentation'},
      [
        for (final section in docsNav)
          div(classes: 'mb:8', [
            p(classes: 'mb:2 px:3 fs:sm fw:semibold c:snow', [.text(section.title)]),
            ul(classes: 'flex fd:col gap:px', [
              for (final link in section.links)
                li([
                  a(
                    href: link.path,
                    classes: [
                      'block px:3 py:[0.4rem] br:md fs:sm tr:colors $focusRing',
                      if (link.path == current)
                        'c:snow fw:medium bg:[rgba(59,108,240,0.16)]'
                      else
                        'c:haze hover:c:snow hover:bg:[rgba(255,255,255,0.04)]',
                    ].join(' '),
                    attributes: {if (link.path == current) 'aria-current': 'page'},
                    [.text(link.title)],
                  ),
                ]),
            ]),
          ]),
      ],
    );
  }
}

/// Navigation de la documentation repliable, pour les petits écrans.
@client
class DocsMobileNav extends StatefulComponent {
  const DocsMobileNav({required this.current, super.key});

  final String current;

  @override
  State<DocsMobileNav> createState() => DocsMobileNavState();
}

class DocsMobileNavState extends State<DocsMobileNav> {
  bool open = false;

  @override
  Component build(BuildContext context) {
    final page = docsPages.where((page) => page.path == component.current).firstOrNull;

    return div(classes: panel, [
      button(
        classes:
            'flex ai:center jc:between w:full px:5 py:3 mnh:[48px] br:2xl fs:sm fw:semibold c:snow $focusRing',
        attributes: {'aria-expanded': '$open', 'aria-controls': 'docs-menu'},
        onClick: () => setState(() => open = !open),
        [
          span([
            .text('Documentation'),
            span(classes: 'c:haze fw:normal', [.text(' / ${page?.title ?? ''}')]),
          ]),
          span(classes: 'c:haze', [.text(open ? 'Fermer' : 'Ouvrir')]),
        ],
      ),
      if (open)
        div(id: 'docs-menu', classes: 'px:2 pt:4 pb:2 bwt:1 bc:edge', [
          DocsSidebar(current: component.current),
        ]),
    ]);
  }
}
