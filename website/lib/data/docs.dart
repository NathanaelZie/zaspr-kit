/// Structure de la documentation : sections, pages et groupes d'utilitaires.
library;

import 'package:jx_core/jx_core.dart';
import 'package:jx_rules/jx_rules.dart';

typedef DocLink = ({String title, String path});

/// Un groupe d'utilitaires documenté sur sa propre page.
typedef UtilityGroup = ({
  String slug,
  String title,
  String lead,
  List<JxRuleContract> rules,
});

/// Groupes d'utilitaires, construits à partir des listes de règles du preset.
final List<UtilityGroup> utilityGroups = [
  (
    slug: 'affichage',
    title: 'Affichage',
    lead: 'Type de boîte, visibilité et débordement des éléments.',
    rules: jxDisplayRules,
  ),
  (
    slug: 'espacement',
    title: 'Espacement',
    lead: 'Marges internes et externes, sur l\'échelle d\'espacement du thème.',
    rules: jxSpacingRules,
  ),
  (
    slug: 'couleurs',
    title: 'Couleurs',
    lead: 'Couleur du texte, du fond et des bordures, depuis la palette du thème.',
    rules: jxColorRules,
  ),
  (
    slug: 'typographie',
    title: 'Typographie',
    lead: 'Familles, tailles, graisses, interlignage, décorations et espaces du texte.',
    rules: jxTypographyRules,
  ),
  (
    slug: 'dimensions',
    title: 'Dimensions',
    lead: 'Largeurs et hauteurs, minimales et maximales.',
    rules: jxSizingRules,
  ),
  (
    slug: 'bordures',
    title: 'Bordures',
    lead: 'Épaisseur, couleur, style et rayon des bordures.',
    rules: jxBorderRules,
  ),
  (
    slug: 'flexbox',
    title: 'Flexbox',
    lead: 'Direction, alignement, retour à la ligne et dimensionnement des éléments flexibles.',
    rules: [...jxFlexboxRules, ...jxFlexRules],
  ),
  (
    slug: 'grille',
    title: 'Grille',
    lead: 'Colonnes, lignes, placement et espacement des grilles CSS.',
    rules: jxGridRules,
  ),
  (
    slug: 'position',
    title: 'Position et calques',
    lead: 'Positionnement, décalages, empilement et défilement.',
    rules: [...jxPositionRules, ...jxLayoutRules],
  ),
  (
    slug: 'effets',
    title: 'Effets et transitions',
    lead: 'Opacité, ombres, transitions et transformations.',
    rules: [...jxOpacityRules, ...jxEffectRules, ...jxTransformRules],
  ),
  (
    slug: 'formulaires',
    title: 'Formulaires',
    lead: 'Apparence native, curseur, redimensionnement, sélection et anneau de focus.',
    rules: jxFormRules,
  ),
];

/// Navigation latérale de la documentation, dans l'ordre de lecture.
final List<({String title, List<DocLink> links})> docsNav = [
  (
    title: 'Premiers pas',
    links: [
      (title: 'Introduction', path: '/docs/introduction'),
      (title: 'Installation', path: '/docs/installation'),
      (title: 'Configuration', path: '/docs/configuration'),
      (title: 'Ligne de commande', path: '/docs/cli'),
      (title: 'Utilisation avec Jaspr', path: '/docs/jaspr'),
    ],
  ),
  (
    title: 'Fondamentaux',
    links: [
      (title: 'Syntaxe des classes', path: '/docs/syntaxe'),
      (title: 'Variantes', path: '/docs/variantes'),
      (title: 'Thème', path: '/docs/theme'),
    ],
  ),
  (
    title: 'Utilitaires',
    links: [
      (title: 'Vue d\'ensemble', path: '/docs/utilitaires'),
      for (final group in utilityGroups)
        (title: group.title, path: '/docs/utilitaires/${group.slug}'),
    ],
  ),
  (
    title: 'Approfondir',
    links: [
      (title: 'Architecture', path: '/docs/architecture'),
    ],
  ),
];

/// Toutes les pages, à plat, pour la pagination précédent / suivant.
final List<DocLink> docsPages = [for (final section in docsNav) ...section.links];

/// Section de la navigation qui contient [path].
String? sectionOf(String path) {
  for (final section in docsNav) {
    if (section.links.any((l) => l.path == path)) return section.title;
  }
  return null;
}

/// Nombre total de règles du preset par défaut.
final int ruleTotal = utilityGroups.fold(0, (sum, g) => sum + g.rules.length);
