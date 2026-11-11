/// Contenus du site officiel de ZASPR Kit.
library;

const siteName = 'ZASPR Kit';
const siteVersion = '0.1.0';
const siteTagline = 'Du CSS utilitaire, écrit en Dart.';
const siteHeadline = 'Construisez vos interfaces Jaspr avec du CSS utilitaire';
const siteDescription =
    'ZASPR Kit compile des classes comme md:hover:bg:blue en CSS, directement à partir '
    'de vos composants Jaspr. Un parseur, un thème et une CLI, entièrement en Dart.';

/// Commande mise en avant dans l'en-tête.
const heroCommand = 'dart run jx_cli:jx build';

/// Annonce affichée au-dessus du titre.
const announcement = (
  label: 'Nouveau : utilitaires de formulaires',
  href: '/docs/utilitaires/formulaires',
);

const navItems = [
  (label: 'Démarrer', href: '#demarrer'),
  (label: 'Syntaxe', href: '#syntaxe'),
  (label: 'Bac à sable', href: '#bac-a-sable'),
  (label: 'Référence', href: '#reference'),
  (label: 'Architecture', href: '#architecture'),
];

/// Classe disséquée dans l'en-tête.
const anatomyClass = 'md:hover:bg:blue!';

const anatomyParts = [
  (
    color: 'variant',
    label: 'Variantes',
    sample: 'md: hover:',
    text:
        'Breakpoints et états, cumulables. Les pseudo-éléments se placent toujours en fin de sélecteur.',
  ),
  (
    color: 'ident',
    label: 'Identifiant',
    sample: 'bg',
    text: 'La propriété, en abrégé : bg, p, fs, cols, ring…',
  ),
  (
    color: 'value',
    label: 'Valeur',
    sample: 'blue',
    text: 'Un token du thème, un mot-clé ou une valeur arbitraire entre crochets.',
  ),
  (
    color: 'bang',
    label: 'Importance',
    sample: '!',
    text: 'Facultatif : ajoute !important à la déclaration.',
  ),
];

/// Exemples de la section Syntaxe, compilés par le moteur au rendu.
const syntaxExamples = [
  (title: 'Classe simple', raw: 'flex'),
  (title: 'Token du thème', raw: 'p:4'),
  (title: 'Valeur arbitraire', raw: 'w:[calc(100%_-_2rem)]'),
  (title: 'Valeur négative', raw: '-mt:2'),
  (title: 'État', raw: 'focus-visible:ring:2'),
  (title: 'Breakpoint', raw: 'lg:cols:3'),
  (title: 'Pseudo-élément', raw: 'placeholder:c:gray'),
  (title: 'Importance', raw: 'c:red!'),
];

/// Packages du monorepo, dans l'ordre du pipeline.
const packages = [
  (
    name: 'jx_core',
    role: 'Contrats et modèles partagés : jetons de classe, règles CSS, configuration.',
  ),
  (
    name: 'jx_parser',
    role:
        'Analyse la syntaxe [variantes:]identifiant[:valeur][!] et rejette les classes invalides.',
  ),
  (
    name: 'jx_theme',
    role: 'Tokens du thème (couleurs, espacements, breakpoints…), extensibles par configuration.',
  ),
  (
    name: 'jx_rules',
    role: 'Le catalogue des utilitaires et leur registre : chaque règle produit des déclarations.',
  ),
  (
    name: 'jx_engine',
    role: 'Orchestre le pipeline et applique les variantes, en tri mobile-first.',
  ),
  (
    name: 'jx_generator',
    role: 'Sérialise le CSS, minifié ou non, précédé du preflight.',
  ),
  (
    name: 'jx_cli',
    role: 'jx build et jx init : extraction des classes des fichiers Dart, mode watch.',
  ),
];

const jxYamlExample = '''# jx.yaml
content:
  - lib
extensions: [dart]
output: web/jx.css
minify: false
reset: true

theme:
  extend:
    colors:
      brand: '#2DD4BF'
    breakpoints:
      3xl: 1920px''';

const cliCommands = [
  (command: 'dart run jx_cli:jx init', text: 'Crée un jx.yaml commenté à la racine du projet.'),
  (command: 'dart run jx_cli:jx build', text: 'Extrait les classes des sources et écrit le CSS.'),
  (command: 'dart run jx_cli:jx build -w', text: 'Reconstruit à chaque modification des sources.'),
  (command: 'dart run jx_cli:jx build -m', text: 'Produit un CSS minifié pour la production.'),
  (
    command: 'dart run jx_cli:jx build -i "p:4 c:blue"',
    text: 'Compile une expression directement, sans scan.',
  ),
];

const pubspecExample = '''dev_dependencies:
  jx_cli: ^0.1.0''';
