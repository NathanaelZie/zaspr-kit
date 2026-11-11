import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_theme/jx_theme.dart';

import '../components/doc_kit.dart';
import '../components/hero.dart';
import '../components/nav_bar.dart';
import '../components/site_footer.dart';
import '../components/ui.dart';
import '../data/docs.dart';
import '../data/site.dart';

/// Page d'accueil : la promesse, puis un aperçu de chaque partie de la
/// documentation.
class HomePage extends StatelessComponent {
  const HomePage({super.key});

  @override
  Component build(BuildContext context) {
    return div(classes: 'ff:text c:snow bg:abyss', [
      Document.head(title: '$siteName : $siteTagline'),
      const NavBar(current: '/'),
      main_([
        const Hero(),
        _start(),
        _syntax(),
        _theme(),
        _playground(),
        _utilities(),
      ]),
      const SiteFooter(),
    ]);
  }

  Component _start() {
    return PageSection(
      id: 'demarrer',
      icon: 'terminal',
      tone: 'brand',
      title: 'Démarrez en trois étapes',
      lead:
          'Ajoutez la CLI, générez la configuration, lancez la compilation. La feuille produite '
          'ne contient que les classes présentes dans vos sources.',
      link: (label: 'Lire le guide d\'installation', href: '/docs/installation'),
      children: [
        ol(classes: 'grid cols:1 lg:cols:3 gap:6', [
          _step(1, 'Ajouter la dépendance', const CopyCommand('dart pub add dev:jx_cli')),
          _step(2, 'Créer la configuration', const CopyCommand('dart run jx_cli:jx init')),
          _step(3, 'Compiler en continu', const CopyCommand('dart run jx_cli:jx build -w')),
        ]),
      ],
    );
  }

  Component _step(int n, String title, Component body) {
    return li(classes: 'flex fd:col gap:4 mnw:0', [
      div(classes: 'flex ai:center gap:3', [
        span(
          classes:
              'flex ai:center jc:center w:8 h:8 br:full fs:sm fw:bold c:beam bg:[rgba(59,108,240,0.16)]',
          [.text('$n')],
        ),
        h3(classes: 'fs:lg fw:bold c:snow', [.text(title)]),
      ]),
      body,
    ]);
  }

  Component _syntax() {
    return PageSection(
      id: 'syntaxe',
      icon: 'code',
      tone: 'variant',
      title: 'Une syntaxe lisible et prévisible',
      lead:
          'Variantes, identifiant, valeur et importance : chaque classe se lit de gauche à droite. '
          'Le CSS ci-dessous est compilé par le moteur au rendu de cette page.',
      link: (label: 'Découvrir la syntaxe', href: '/docs/syntaxe'),
      children: [
        examples([
          'p:4',
          'md:cols:3',
          'hover:bg:blue-700',
          'w:[calc(100%_-_2rem)]',
          'focus-visible:ring:2',
        ]),
      ],
    );
  }

  Component _theme() {
    final colors = JxTheme.defaultTheme().data.getCategory(JxThemeCategory.colors);
    final families = {
      for (final key in colors.keys)
        if (key.contains('-')) key.split('-').first,
    };

    return PageSection(
      id: 'theme',
      icon: 'layers',
      tone: 'ident',
      title: 'Un thème, vos tokens',
      lead:
          'Couleurs, espacements, typographie et breakpoints sont des tokens. Étendez-les dans '
          'jx.yaml sans rien redéfinir, ou remplacez une catégorie entière.',
      link: (label: 'Explorer le thème', href: '/docs/theme'),
      children: [
        div(classes: 'grid cols:1 lg:cols:2 gap:6 ai:start', [
          codeSample(jxYamlExample, title: 'jx.yaml'),
          div(classes: '$panel p:5 md:p:6', [
            p(classes: 'fs:sm fw:semibold c:haze mb:4', [.text('Palette par défaut')]),
            ul(classes: 'flex fd:col gap:3', [
              for (final family in families)
                li(classes: 'grid cols:[5rem_minmax(0,1fr)] gap:3 ai:center', [
                  code(classes: 'ff:code fs:xs c:haze', [.text(family)]),
                  div(classes: 'grid cols:5 gap:1', [
                    for (final shade in const ['100', '300', '500', '700', '900'])
                      span(
                        classes: 'block h:6 br:sm',
                        attributes: {
                          'style': 'background-color: ${colors['$family-$shade']}',
                          'title': '$family-$shade',
                        },
                        [],
                      ),
                  ]),
                ]),
            ]),
          ]),
        ]),
      ],
    );
  }

  Component _playground() {
    return section(classes: 'py:[3rem]', [
      div(classes: container, [
        div(
          classes:
              'flex fd:col md:fd:row md:ai:center jc:between gap:8 p:8 md:p:12 br:3xl '
              'bg:[linear-gradient(135deg,rgba(59,108,240,0.28),rgba(45,212,191,0.14))] bw:1 bc:edge',
          [
            div(classes: 'mw:[36rem]', [
              div(
                classes:
                    'flex ai:center jc:center w:12 h:12 br:xl mb:6 c:snow bg:[rgba(255,255,255,0.1)]',
                [
                  glyph('zap', classes: 'w:6 h:6'),
                ],
              ),
              h2(
                classes: 'fs:[clamp(1.75rem,3.5vw,2.5rem)] fw:extrabold lh:[1.1] ls:tight c:snow',
                [
                  .text('Le moteur tourne dans votre navigateur'),
                ],
              ),
              p(classes: 'mt:4 fs:lg lh:relaxed c:[#D3DAE6]', [
                .text(
                  'Le même moteur que la CLI, compilé en JavaScript par Jaspr. Saisissez des '
                  'classes et lisez le CSS produit, sans rien installer.',
                ),
              ]),
            ]),
            a(href: '/bac-a-sable', classes: '$primaryAction shrink:0', [
              .text('Ouvrir le bac à sable'),
              glyph('arrow', classes: 'w:4 h:4'),
            ]),
          ],
        ),
      ]),
    ]);
  }

  Component _utilities() {
    return PageSection(
      id: 'utilitaires',
      icon: 'book',
      tone: 'value',
      title: '$ruleTotal règles, onze familles',
      lead:
          'Chaque famille a sa page : propriétés produites, valeurs acceptées et exemples '
          'compilés. La référence est générée à partir du registre de règles.',
      link: (label: 'Parcourir la référence', href: '/docs/utilitaires'),
      children: [
        div(classes: 'grid cols:1 sm:cols:2 lg:cols:3 gap:4', [
          for (final group in utilityGroups)
            a(
              href: '/docs/utilitaires/${group.slug}',
              classes:
                  'flex fd:col gap:2 p:6 br:xl bw:1 bc:edge bg:deep tr:all '
                  'hover:bc:[rgba(126,162,255,0.5)] hover:-ty:1 $focusRing',
              [
                div(classes: 'flex ai:baseline jc:between gap:3', [
                  h3(classes: 'fw:bold c:snow', [.text(group.title)]),
                  span(classes: 'ff:code fs:xs c:haze', [
                    .text('${group.rules.length} règle${group.rules.length > 1 ? 's' : ''}'),
                  ]),
                ]),
                p(classes: 'fs:sm lh:relaxed c:haze', [.text(group.lead)]),
              ],
            ),
        ]),
      ],
    );
  }
}
