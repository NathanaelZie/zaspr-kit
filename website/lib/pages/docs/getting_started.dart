import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../../components/doc_kit.dart';
import '../../components/docs_layout.dart';
import '../../components/ui.dart';
import '../../data/docs.dart';
import '../../data/site.dart';

/// Pages « Premiers pas » : introduction, installation, configuration,
/// ligne de commande et intégration Jaspr.

class IntroductionPage extends StatelessComponent {
  const IntroductionPage({super.key});

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/introduction',
      title: 'Introduction',
      lead:
          '$siteName est un framework CSS utilitaire écrit entièrement en Dart. Il lit vos '
          'composants, repère les classes que vous utilisez et génère la feuille de style correspondante.',
      toc: const [
        (id: 'principe', label: 'Le principe'),
        (id: 'exemple', label: 'Un premier exemple'),
        (id: 'pourquoi', label: 'Pourquoi JX'),
        (id: 'suite', label: 'Pour continuer'),
      ],
      children: [
        docH2('principe', 'Le principe'),
        para(
          'Au lieu d\'écrire des sélecteurs et des règles CSS, vous composez le style directement '
          'dans vos composants avec de petites classes : `p:4` pour un padding, `bg:blue` pour un '
          'fond, `md:cols:3` pour trois colonnes à partir de la tablette.',
        ),
        para(
          'La CLI parcourt vos fichiers Dart, extrait ces classes et produit une feuille de style '
          'qui ne contient que ce qui est réellement utilisé. Aucun JavaScript n\'est nécessaire à '
          'l\'exécution et aucun outil Node.js n\'intervient dans la chaîne.',
        ),
        docH2('exemple', 'Un premier exemple'),
        codeSample(
          '''div(classes: 'flex ai:center gap:3 p:4 br:lg bg:white sh:md', [
  img(src: 'avatar.png', classes: 'w:12 h:12 br:full'),
  div([
    p(classes: 'fw:semibold c:gray-900', [.text('Ada Lovelace')]),
    p(classes: 'fs:sm c:gray-500', [.text('Ingénieure')]),
  ]),
])''',
          title: 'lib/components/profile_card.dart',
        ),
        para('Chaque classe correspond à une ou plusieurs déclarations CSS :'),
        examples(['flex', 'ai:center', 'gap:3', 'br:lg', 'sh:md']),
        docH2('pourquoi', 'Pourquoi JX'),
        bullets([
          'Pensé pour Jaspr : les classes s\'écrivent dans l\'attribut `classes` de vos composants, sans fichier CSS à maintenir.',
          'Une syntaxe propre, `[variantes:]identifiant[:valeur][!]`, qui se lit sans ambiguïté et rejette les classes invalides.',
          'Un thème tokenisé : couleurs, espacements et breakpoints se configurent dans `jx.yaml`.',
          'Une feuille minimale, triée mobile-first, qui ne grossit qu\'avec ce que vous utilisez.',
          'Un moteur utilisable comme bibliothèque : ce site compile ses exemples au rendu.',
        ]),
        callout(
          '$siteName est en version $siteVersion : la syntaxe et le catalogue d\'utilitaires '
          'peuvent encore évoluer avant la version 1.0.',
          title: 'Version $siteVersion',
          warning: true,
        ),
        docH2('suite', 'Pour continuer'),
        bullets([
          'Installez la CLI dans votre projet : page Installation.',
          'Apprenez la syntaxe des classes et les variantes.',
          'Parcourez la référence des $ruleTotal règles disponibles.',
        ]),
      ],
    );
  }
}

class InstallationPage extends StatelessComponent {
  const InstallationPage({super.key});

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/installation',
      title: 'Installation',
      lead:
          'Ajoutez la CLI à un projet Jaspr, générez la configuration et liez la feuille produite.',
      toc: const [
        (id: 'prerequis', label: 'Prérequis'),
        (id: 'dependance', label: 'Ajouter la dépendance'),
        (id: 'configuration', label: 'Créer la configuration'),
        (id: 'compiler', label: 'Compiler'),
        (id: 'lier', label: 'Lier la feuille de style'),
      ],
      children: [
        docH2('prerequis', 'Prérequis'),
        bullets([
          'Dart 3.10 ou plus récent.',
          'Un projet Jaspr 0.22 ou plus récent (le CSS produit fonctionne aussi avec du HTML classique).',
        ]),
        docH2('dependance', 'Ajouter la dépendance'),
        para('Ajoutez `jx_cli` en dépendance de développement depuis pub.dev :'),
        div(classes: 'mb:6', [const CopyCommand('dart pub add dev:jx_cli')]),
        para('Ce qui ajoute à votre fichier :'),
        codeSample(pubspecExample, title: 'pubspec.yaml'),
        callout(
          'Pour utiliser `jx` en dehors d\'un projet, installez-la en commande globale avec '
          '`dart pub global activate jx_cli`, puis lancez simplement `jx build`.',
          title: 'Installation globale',
        ),
        docH2('configuration', 'Créer la configuration'),
        para('La commande `jx init` crée un fichier `jx.yaml` commenté à la racine du projet :'),
        div(classes: 'mb:6', [const CopyCommand('dart run jx_cli:jx init')]),
        para(
          'Adaptez au minimum `output` pour écrire la feuille dans un dossier servi par Jaspr, '
          'par exemple `web/jx.css`. Toutes les options sont décrites dans la page Configuration.',
        ),
        docH2('compiler', 'Compiler'),
        para(
          'Lancez une compilation unique, ou laissez la CLI surveiller vos sources pendant le développement :',
        ),
        div(classes: 'flex fd:col gap:3 mb:6', [
          const CopyCommand('dart run jx_cli:jx build'),
          const CopyCommand('dart run jx_cli:jx build -w'),
        ]),
        callout(
          'Pour la production, ajoutez `-m` : le CSS est minifié. Le preflight (feuille de '
          'réinitialisation) est inclus par défaut.',
        ),
        docH2('lier', 'Lier la feuille de style'),
        para('Référencez le fichier généré dans le `Document` de votre application :'),
        codeSample('''Document(
  title: 'Mon application',
  head: [
    link(rel: 'stylesheet', href: '/jx.css'),
  ],
  body: App(),
)''', title: 'lib/main.server.dart'),
      ],
    );
  }
}

class ConfigurationPage extends StatelessComponent {
  const ConfigurationPage({super.key});

  static const _full = '''# jx.yaml
content: [lib, web]        # fichiers ou dossiers à scanner
extensions: [dart, html]   # extensions prises en compte
exclude: [generated]       # dossiers ignorés, en plus des défauts
output: web/jx.css         # fichier CSS généré
minify: false              # minification
reset: true                # inclut le preflight

theme:
  extend:                  # fusionné avec le thème par défaut
    colors:
      brand: '#3B6CF0'
    breakpoints:
      3xl: 1920px
  override:                # remplace entièrement une catégorie
    font-family:
      sans: 'Inter, system-ui, sans-serif'
''';

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/configuration',
      title: 'Configuration',
      lead:
          'Le fichier jx.yaml décrit les sources à analyser, la sortie et les extensions du thème.',
      toc: const [
        (id: 'fichier', label: 'Le fichier jx.yaml'),
        (id: 'options', label: 'Options'),
        (id: 'theme', label: 'Étendre le thème'),
        (id: 'erreurs', label: 'Validation'),
      ],
      children: [
        docH2('fichier', 'Le fichier jx.yaml'),
        para(
          'La CLI cherche `jx.yaml` dans le dossier courant. Sans fichier, les valeurs par défaut '
          's\'appliquent. Un chemin différent se passe avec `--config`.',
        ),
        codeSample(_full, title: 'jx.yaml'),
        docH2('options', 'Options'),
        dataTable(
          ['Clé', 'Type', 'Défaut', 'Rôle'],
          [
            [
              ic('content'),
              .text('liste'),
              ic('[lib, web]'),
              .text('Fichiers ou dossiers à scanner.'),
            ],
            [
              ic('extensions'),
              .text('liste'),
              ic('[dart, html]'),
              .text('Extensions lues, sans le point.'),
            ],
            [
              ic('exclude'),
              .text('liste'),
              ic('build, .dart_tool, .git, node_modules'),
              .text('Noms de dossiers ignorés, ajoutés aux défauts.'),
            ],
            [ic('output'), .text('chemin'), ic('build/jx.css'), .text('Fichier CSS généré.')],
            [ic('minify'), .text('booléen'), ic('false'), .text('Minifie la sortie.')],
            [
              ic('reset'),
              .text('booléen'),
              ic('true'),
              .text('Inclut le preflight en tête de feuille.'),
            ],
            [ic('theme'), .text('table'), ic('{}'), .text('Clés extend et override.')],
          ],
        ),
        docH2('theme', 'Étendre le thème'),
        para(
          '`theme.extend` ajoute ou remplace des tokens sans toucher aux autres : la couleur '
          '`brand` ci-dessus devient disponible pour `c:`, `bg:`, `bc:`… à côté de la palette par défaut.',
        ),
        para(
          '`theme.override` remplace une catégorie entière : seules les clés déclarées restent '
          'disponibles. Les catégories sont listées dans la page Thème.',
        ),
        examples(['bg:blue-700', 'c:teal-300']),
        docH2('erreurs', 'Validation'),
        para(
          'Une clé inconnue arrête la compilation avec un message explicite, par exemple '
          '`Clé inconnue dans jx.yaml : "ouput".` Sous `theme`, seules `extend` et `override` sont acceptées.',
        ),
      ],
    );
  }
}

class CliPage extends StatelessComponent {
  const CliPage({super.key});

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/cli',
      title: 'Ligne de commande',
      lead:
          'La CLI jx initialise un projet, compile les classes trouvées et surveille vos sources.',
      toc: const [
        (id: 'init', label: 'jx init'),
        (id: 'build', label: 'jx build'),
        (id: 'expression', label: 'Compiler une expression'),
        (id: 'extraction', label: 'Extraction des classes'),
      ],
      children: [
        para(
          'Toutes les commandes se lancent depuis la racine du projet avec `dart run jx_cli:jx`.',
        ),
        docH2('init', 'jx init'),
        para(
          'Crée un `jx.yaml` commenté. Refuse d\'écraser un fichier existant, sauf avec `--force`.',
        ),
        div(classes: 'mb:6', [const CopyCommand('dart run jx_cli:jx init')]),
        dataTable(
          ['Option', 'Rôle'],
          [
            [ic('-f, --force'), .text('Écrase un jx.yaml existant.')],
          ],
        ),
        docH2('build', 'jx build'),
        para('Analyse les sources, compile les classes trouvées et écrit la feuille de style.'),
        div(classes: 'mb:6', [const CopyCommand('dart run jx_cli:jx build')]),
        dataTable(
          ['Option', 'Rôle'],
          [
            [
              ic('-c, --config'),
              .text('Fichier de configuration (défaut : ./jx.yaml s\'il existe).'),
            ],
            [ic('-i, --input'), .text('Expression de classes à compiler directement, sans scan.')],
            [
              ic('--content'),
              .text('Fichiers ou dossiers à scanner ; remplace content de jx.yaml.'),
            ],
            [ic('-o, --output'), .text('Chemin du fichier CSS généré.')],
            [ic('-m, --minify'), .text('Minifie le CSS de sortie.')],
            [ic('--[no-]reset'), .text('Inclut ou non le preflight.')],
            [ic('-w, --watch'), .text('Reconstruit à chaque modification des sources.')],
          ],
        ),
        docH2('expression', 'Compiler une expression'),
        para(
          'Avec `--input`, la CLI compile les classes données et affiche le CSS, sans lire vos fichiers :',
        ),
        div(classes: 'mb:6', [const CopyCommand('dart run jx_cli:jx build -i "p:4 hover:c:blue"')]),
        codeSample(compileCss('p:4 hover:c:blue'), title: 'Sortie'),
        docH2('extraction', 'Extraction des classes'),
        para(
          'La CLI ne lit que les chaînes de caractères de vos fichiers : chaque mot qui respecte la '
          'syntaxe JX et correspond à une règle devient une classe. Les mots qui ne correspondent '
          'à rien sont ignorés.',
        ),
        callout(
          'Écrivez toujours les classes en entier. Une classe construite par interpolation, comme '
          '`\'c:\${couleur}\'`, ne peut pas être trouvée : utilisez une table de littéraux complets.',
          title: 'Classes dynamiques',
          warning: true,
        ),
      ],
    );
  }
}

class JasprPage extends StatelessComponent {
  const JasprPage({super.key});

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/jaspr',
      title: 'Utilisation avec Jaspr',
      lead: 'Écrire les classes dans les composants, gérer les états et réutiliser des styles.',
      toc: const [
        (id: 'classes', label: 'L\'attribut classes'),
        (id: 'conditions', label: 'Classes conditionnelles'),
        (id: 'reutiliser', label: 'Réutiliser des styles'),
        (id: 'moteur', label: 'Le moteur à l\'exécution'),
      ],
      children: [
        docH2('classes', 'L\'attribut classes'),
        para(
          'Chaque composant HTML de Jaspr accepte une chaîne `classes` : c\'est là que vivent les utilitaires.',
        ),
        codeSample('''button(
  classes: 'px:5 py:3 br:lg fw:semibold c:white bg:blue hover:bg:blue-700',
  onClick: save,
  [.text('Enregistrer')],
)'''),
        docH2('conditions', 'Classes conditionnelles'),
        para(
          'Construisez une liste et joignez-la : chaque branche reste une chaîne littérale que la CLI sait lire.',
        ),
        codeSample('''li(
  classes: [
    'px:3 py:2 br:md',
    if (active) 'c:white bg:blue' else 'c:gray-700 hover:bg:gray-100',
  ].join(' '),
  [.text(label)],
)'''),
        docH2('reutiliser', 'Réutiliser des styles'),
        para(
          'Placez les combinaisons fréquentes dans des constantes. Elles restent des littéraux, donc détectées :',
        ),
        codeSample('''const primaryAction = 'px:5 py:3 br:lg fw:semibold c:white bg:blue';

const tones = {
  'info': 'c:blue-700 bg:blue-100',
  'danger': 'c:red-700 bg:red-100',
};''', title: 'lib/components/ui.dart'),
        docH2('moteur', 'Le moteur à l\'exécution'),
        para(
          'Le package `jx_engine` s\'utilise aussi comme bibliothèque, côté serveur ou dans le '
          'navigateur. Ce site s\'en sert pour compiler ses exemples et pour le bac à sable :',
        ),
        codeSample('''import 'package:jx_engine/jx_engine.dart';

final result = JxEngine().compile('p:4 md:p:8');
print(result.css);       // feuille générée
print(result.ruleCount); // nombre de règles
print(result.warnings);  // classes rejetées'''),
      ],
    );
  }
}
