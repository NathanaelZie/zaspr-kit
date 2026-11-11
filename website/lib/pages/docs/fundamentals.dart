import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_engine/jx_engine.dart';
import 'package:jx_theme/jx_theme.dart';

import '../../components/doc_kit.dart';
import '../../components/docs_layout.dart';
import '../../components/ui.dart';
import '../../data/site.dart';

/// Pages « Fondamentaux » : syntaxe, variantes et thème.

class SyntaxPage extends StatelessComponent {
  const SyntaxPage({super.key});

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/syntaxe',
      title: 'Syntaxe des classes',
      lead: 'Une classe JX se lit de gauche à droite : variantes, identifiant, valeur, importance.',
      toc: const [
        (id: 'anatomie', label: 'Anatomie'),
        (id: 'tokens', label: 'Valeurs du thème'),
        (id: 'arbitraires', label: 'Valeurs arbitraires'),
        (id: 'negatives', label: 'Valeurs négatives'),
        (id: 'importance', label: 'Importance'),
        (id: 'erreurs', label: 'Classes invalides'),
      ],
      children: [
        docH2('anatomie', 'Anatomie'),
        div(classes: '$panel p:6 md:p:8 mb:6', [
          const ClassCode(anatomyClass, classes: 'fs:[clamp(1.5rem,5vw,2.5rem)] fw:bold'),
          div(classes: 'grid cols:1 sm:cols:2 gap:5 mt:6', [
            for (final part in anatomyParts)
              div([
                p(classes: 'fw:semibold c:snow', [.text(part.label)]),
                p(classes: 'mt:1 fs:sm lh:relaxed c:haze', [.text(part.text)]),
              ]),
          ]),
        ]),
        para(
          'La forme générale est `[variantes:]identifiant[:valeur][!]`. Seul l\'identifiant est obligatoire :',
        ),
        examples(['flex', 'p:4', 'md:p:8', 'c:red!']),
        docH2('tokens', 'Valeurs du thème'),
        para(
          'Une valeur simple est cherchée dans la catégorie du thème associée à l\'identifiant : '
          '`p:4` lit l\'échelle d\'espacement, `c:teal-700` la palette, `fs:lg` les tailles de texte.',
        ),
        examples(['p:4', 'c:teal-700', 'fs:lg', 'br:xl']),
        docH2('arbitraires', 'Valeurs arbitraires'),
        para(
          'Entre crochets, la valeur est reprise telle quelle. Le caractère `_` remplace l\'espace, '
          'interdit dans un nom de classe.',
        ),
        examples(['w:[calc(100%_-_2rem)]', 'bg:[#0B0D12]', 'cols:[200px_minmax(0,1fr)]']),
        docH2('negatives', 'Valeurs négatives'),
        para(
          'Les règles qui l\'acceptent prennent un signe moins, devant la classe ou devant la valeur :',
        ),
        examples(['-mt:2', 'mt:-2', '-ty:1']),
        docH2('importance', 'Importance'),
        para('Un `!` final ajoute `!important` à chaque déclaration produite.'),
        examples(['c:red!', 'md:hover:bg:blue!']),
        docH2('erreurs', 'Classes invalides'),
        para(
          'Une classe qui ne respecte pas la syntaxe, ou dont la valeur n\'existe pas, est rejetée '
          'avec un avertissement. Elle ne produit aucun CSS :',
        ),
        _warnings(['p:huge', 'c:', 'hover:']),
      ],
    );
  }

  Component _warnings(List<String> raws) {
    final engine = JxEngine();
    return dataTable(
      ['Classe', 'Résultat'],
      [
        for (final raw in raws)
          [
            ic(raw),
            .text(() {
              final result = engine.compile(raw);
              return result.warnings.isEmpty ? 'Aucun CSS' : result.warnings.join(' ');
            }()),
          ],
      ],
    );
  }
}

class VariantsPage extends StatelessComponent {
  const VariantsPage({super.key});

  @override
  Component build(BuildContext context) {
    final theme = JxTheme.defaultTheme();

    return DocsLayout(
      path: '/docs/variantes',
      title: 'Variantes',
      lead:
          'Les variantes appliquent une classe sous condition : à partir d\'une largeur d\'écran, '
          'dans un état, ou sur un pseudo-élément.',
      toc: const [
        (id: 'breakpoints', label: 'Breakpoints'),
        (id: 'etats', label: 'États'),
        (id: 'pseudo-elements', label: 'Pseudo-éléments'),
        (id: 'combiner', label: 'Combiner les variantes'),
      ],
      children: [
        docH2('breakpoints', 'Breakpoints'),
        para(
          'JX est mobile-first : une classe sans breakpoint s\'applique partout, `md:` à partir de '
          '768 px, et ainsi de suite. Les règles sont triées par largeur croissante.',
        ),
        dataTable(
          ['Variante', 'Largeur minimale', 'Exemple'],
          [
            for (final bp in JxVariantResolver.defaultBreakpoints)
              [
                ic('$bp:'),
                .text(theme.resolveToken(JxThemeCategory.breakpoints, bp) ?? ''),
                ClassCode('$bp:cols:2', classes: 'fs:sm'),
              ],
          ],
        ),
        examples(['cols:1', 'md:cols:2', 'xl:cols:4']),
        docH2('etats', 'États'),
        para('Les pseudo-classes s\'écrivent comme des préfixes. Voici les états reconnus :'),
        div(classes: 'flex wrap gap:2 mb:6', [
          for (final state in JxVariantResolver.defaultPseudoClasses.keys)
            code(classes: 'ff:code fs:sm px:2 py:1 br:md c:variant bg:[rgba(255,181,71,0.1)]', [
              .text('$state:'),
            ]),
        ]),
        examples([
          'hover:bg:blue-700',
          'focus-visible:ring:2',
          'disabled:op:50',
          'user-invalid:bc:red',
        ]),
        docH2('pseudo-elements', 'Pseudo-éléments'),
        para(
          'Un pseudo-élément se place toujours en fin de sélecteur, quel que soit son rang dans la '
          'classe. Une classe n\'en accepte qu\'un seul.',
        ),
        dataTable(
          ['Variante', 'Sélecteur produit'],
          [
            for (final entry in JxVariantResolver.defaultPseudoElements.entries)
              [ic('${entry.key}:'), ic(entry.value)],
          ],
        ),
        examples(['placeholder:c:gray', 'file:bg:blue']),
        docH2('combiner', 'Combiner les variantes'),
        para(
          'Les variantes se cumulent. Le breakpoint produit la requête média, les états complètent le sélecteur :',
        ),
        examples(['md:hover:bg:blue', 'lg:focus:placeholder:c:gray-300']),
      ],
    );
  }
}

class ThemePage extends StatelessComponent {
  const ThemePage({super.key});

  static const _labels = {
    JxThemeCategory.colors: 'Couleurs',
    JxThemeCategory.spacing: 'Espacement',
    JxThemeCategory.breakpoints: 'Breakpoints',
    JxThemeCategory.fontFamily: 'Familles de polices',
    JxThemeCategory.fontSize: 'Tailles de texte',
    JxThemeCategory.fontWeight: 'Graisses',
    JxThemeCategory.lineHeight: 'Interlignage',
    JxThemeCategory.borderRadius: 'Rayons',
    JxThemeCategory.borderWidth: 'Épaisseurs de bordure',
    JxThemeCategory.opacity: 'Opacités',
    JxThemeCategory.shadow: 'Ombres',
  };

  @override
  Component build(BuildContext context) {
    final data = JxTheme.defaultTheme().data;

    return DocsLayout(
      path: '/docs/theme',
      title: 'Thème',
      lead:
          'Les valeurs nommées des utilitaires viennent du thème. Voici les tokens par défaut, '
          'lus directement dans jx_theme.',
      toc: [
        (id: 'personnaliser', label: 'Personnaliser'),
        for (final entry in _labels.entries) (id: entry.key, label: entry.value),
      ],
      children: [
        docH2('personnaliser', 'Personnaliser'),
        para(
          'Ajoutez des tokens avec `theme.extend` ou remplacez une catégorie avec `theme.override` '
          'dans `jx.yaml`. Les noms de catégorie sont ceux des titres ci-dessous.',
        ),
        codeSample(jxYamlExample, title: 'jx.yaml'),
        for (final entry in _labels.entries) ...[
          docH2(entry.key, entry.value),
          para('Catégorie `${entry.key}`.'),
          if (entry.key == JxThemeCategory.colors)
            _palette(data.getCategory(entry.key))
          else
            dataTable(
              ['Token', 'Valeur'],
              [
                for (final token in data.getCategory(entry.key).entries)
                  [
                    ic(token.key),
                    span(classes: 'ff:code fs:xs', [.text(token.value)]),
                  ],
              ],
            ),
        ],
      ],
    );
  }

  Component _palette(Map<String, String> colors) {
    final families = {
      for (final key in colors.keys)
        if (key.contains('-')) key.split('-').first,
    };
    const shades = ['100', '300', '500', '700', '900'];

    return div(classes: 'mb:8', [
      div(classes: 'flex wrap gap:3 mb:6', [
        for (final key in colors.keys.where((k) => !k.contains('-') && !families.contains(k)))
          div(classes: 'flex ai:center gap:2 px:3 py:2 br:md bw:1 bc:edge', [
            span(
              classes: 'block w:4 h:4 br:sm bw:1 bc:edge',
              attributes: {'style': 'background: ${colors[key]}'},
              [],
            ),
            code(classes: 'ff:code fs:xs c:snow', [.text(key)]),
          ]),
      ]),
      div(classes: 'flex fd:col gap:4', [
        for (final family in families)
          div([
            p(classes: 'ff:code fs:sm c:snow mb:2', [
              .text(family),
              span(classes: 'c:haze', [.text('  =  $family-500')]),
            ]),
            div(classes: 'grid cols:5 gap:2', [
              for (final shade in shades)
                div([
                  div(
                    classes: 'h:10 br:md',
                    attributes: {'style': 'background-color: ${colors['$family-$shade']}'},
                    [],
                  ),
                  p(classes: 'mt:1 ff:code fs:xs c:haze', [.text(shade)]),
                ]),
            ]),
          ]),
      ]),
    ]);
  }
}
