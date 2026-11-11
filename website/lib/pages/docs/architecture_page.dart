import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../../components/doc_kit.dart';
import '../../components/docs_layout.dart';
import '../../components/ui.dart';
import '../../data/site.dart';

/// Architecture du monorepo et pipeline de compilation.
class ArchitecturePage extends StatelessComponent {
  const ArchitecturePage({super.key});

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/architecture',
      title: 'Architecture',
      lead:
          'Sept packages Dart indépendants et testés, chacun responsable d\'une étape du pipeline. '
          'Utilisez le moteur seul, remplacez le thème ou ajoutez vos propres règles.',
      toc: const [
        (id: 'pipeline', label: 'Le pipeline'),
        (id: 'packages', label: 'Les packages'),
        (id: 'tri', label: 'Ordre des règles'),
      ],
      children: [
        docH2('pipeline', 'Le pipeline'),
        para(
          'Une chaîne de classes traverse quatre étapes : le parseur la découpe en jetons, le '
          'registre trouve la règle de chaque identifiant, le thème résout les valeurs nommées et '
          'le générateur écrit le CSS.',
        ),
        codeSample('''"md:hover:bg:blue!"
  -> jx_parser     jeton : variantes [md, hover], bg, blue, important
  -> jx_rules      règle background-color
  -> jx_theme      blue = #3b82f6
  -> jx_engine     sélecteur .md\\:hover\\:bg\\:blue\\!:hover dans @media (min-width: 768px)
  -> jx_generator  CSS final'''),
        examples([anatomyClass]),
        docH2('packages', 'Les packages'),
        ol(classes: 'flex fd:col gap:3 mb:8', [
          for (final (i, pkg) in packages.indexed)
            li(classes: 'grid cols:[2.5rem_minmax(0,1fr)] gap:4 p:5 $panel', [
              span(classes: 'ff:code fs:sm c:haze pt:px', [.text('0${i + 1}')]),
              div([
                code(classes: 'ff:code fw:semibold c:ident', [.text(pkg.name)]),
                p(classes: 'mt:1 fs:sm lh:relaxed c:haze', [.text(pkg.role)]),
              ]),
            ]),
        ]),
        docH2('tri', 'Ordre des règles'),
        para(
          'Le moteur trie la feuille en mobile-first : les règles sans requête média d\'abord, puis '
          'les breakpoints par largeur croissante. Une classe `md:` l\'emporte donc toujours sur la '
          'même propriété sans variante.',
        ),
        callout(
          'Les décisions de conception (pseudo-éléments en fin de sélecteur, anneau de focus par '
          'propriété personnalisée…) sont documentées dans `docs/architecture.md` du dépôt.',
        ),
      ],
    );
  }
}
