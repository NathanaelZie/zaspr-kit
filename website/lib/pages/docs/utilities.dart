import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_core/jx_core.dart';
import 'package:jx_rules/jx_rules.dart';
import 'package:jx_theme/jx_theme.dart';

import '../../components/doc_kit.dart';
import '../../components/docs_layout.dart';
import '../../components/reference_section.dart';
import '../../components/ui.dart';
import '../../data/docs.dart';

/// Vue d'ensemble des utilitaires, avec recherche.
class UtilitiesOverviewPage extends StatelessComponent {
  const UtilitiesOverviewPage({super.key});

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/utilitaires',
      title: 'Utilitaires',
      lead:
          'Les $ruleTotal règles du preset par défaut, réparties en ${utilityGroups.length} familles. '
          'Cherchez une classe ou une propriété CSS, puis ouvrez la page détaillée.',
      children: [
        div(classes: 'grid cols:1 sm:cols:2 gap:3 mb:12', [
          for (final group in utilityGroups)
            a(
              href: '/docs/utilitaires/${group.slug}',
              classes:
                  'flex ai:center jc:between gap:3 px:4 py:3 br:lg bw:1 bc:edge bg:deep tr:all '
                  'hover:bc:[rgba(126,162,255,0.5)] $focusRing',
              [
                span(classes: 'fw:semibold c:snow', [.text(group.title)]),
                span(classes: 'ff:code fs:xs c:haze', [.text('${group.rules.length}')]),
              ],
            ),
        ]),
        const ReferenceSearch(),
      ],
    );
  }
}

/// Page détaillée d'une famille d'utilitaires.
class UtilityGroupPage extends StatelessComponent {
  const UtilityGroupPage(this.group, {super.key});

  final UtilityGroup group;

  static final JxTheme _theme = JxTheme.defaultTheme();

  @override
  Component build(BuildContext context) {
    return DocsLayout(
      path: '/docs/utilitaires/${group.slug}',
      title: group.title,
      lead: group.lead,
      toc: [for (final rule in group.rules) (id: rule.id, label: rule.id)],
      children: [
        for (final rule in group.rules) ..._rule(rule),
      ],
    );
  }

  List<Component> _rule(JxRuleContract rule) {
    final entry = describeRule(rule);
    final samples = _samples(rule).where((raw) => compileCss(raw).isNotEmpty).take(3).toList();

    return [
      docH2(rule.id, rule.id),
      if (entry != null)
        div(classes: 'flex wrap gap:2 mb:4', [
          for (final c in entry.classes)
            code(classes: 'ff:code fs:sm px:2 py:1 br:md c:ident bg:[rgba(45,212,191,0.1)]', [
              .text(c),
            ]),
        ]),
      ..._details(rule),
      if (samples.isNotEmpty) examples(samples),
    ];
  }

  /// Valeurs acceptées par la règle.
  List<Component> _details(JxRuleContract rule) {
    switch (rule) {
      case JxStaticRule(:final classes):
        return [
          dataTable(
            ['Classe', 'Déclarations'],
            [
              for (final e in classes.entries) [ic(e.key), _declarations(e.value)],
            ],
          ),
        ];
      case JxKeywordRule(:final identifiers, :final values):
        return [
          dataTable(
            ['Valeur', 'Déclarations'],
            [
              for (final e in values.entries)
                [ic('${identifiers.first}:${e.key}'), _declarations(e.value)],
            ],
          ),
        ];
      case JxValueRule(
        :final properties,
        :final themeCategory,
        :final keywords,
        :final allowArbitrary,
        :final allowNegative,
      ):
        return [
          dataTable(
            ['Classe', 'Propriétés CSS'],
            [
              for (final e in properties.entries)
                [
                  ic('${e.key}:'),
                  span(classes: 'ff:code fs:xs', [.text(e.value.join(', '))]),
                ],
            ],
          ),
          ul(classes: 'mb:6 flex fd:col gap:2 fs:sm c:[#C5CCD8]', [
            if (themeCategory != null)
              li([
                .text('Tokens du thème : '),
                a(href: '/docs/theme#$themeCategory', classes: textLink, [.text(themeCategory)]),
              ]),
            if (keywords.isNotEmpty)
              li(classes: 'lh:[1.9]', [
                .text('Mots-clés : '),
                for (final k in keywords.keys) ...[ic(k), .text(' ')],
              ]),
            li([.text('Valeurs arbitraires : ${allowArbitrary ? 'oui, entre crochets' : 'non'}')]),
            if (allowNegative) li([.text('Valeurs négatives : oui')]),
          ]),
        ];
      default:
        return [];
    }
  }

  Component _declarations(Map<String, String> declarations) => span(classes: 'ff:code fs:xs', [
    .text(declarations.entries.map((d) => '${d.key}: ${d.value}').join('; ')),
  ]);

  /// Classes d'exemple déduites de la règle : premier mot-clé, un token
  /// du thème, une valeur arbitraire.
  Iterable<String> _samples(JxRuleContract rule) sync* {
    switch (rule) {
      case JxStaticRule(:final classes):
        yield* classes.keys.take(2);
      case JxKeywordRule(:final identifiers, :final values):
        yield* values.keys.take(2).map((v) => '${identifiers.first}:$v');
      case JxValueRule(
        :final properties,
        :final themeCategory,
        :final keywords,
        :final allowArbitrary,
      ):
        final id = properties.keys.first;
        if (keywords.isNotEmpty) yield '$id:${keywords.keys.first}';
        if (themeCategory != null) {
          final tokens = _theme.data.getCategory(themeCategory).keys.toList();
          if (tokens.isNotEmpty) {
            final pick = themeCategory == JxThemeCategory.colors && tokens.contains('blue')
                ? 'blue'
                : tokens[tokens.length ~/ 2];
            yield '$id:$pick';
          }
        }
        if (properties.length > 1) {
          yield '${properties.keys.elementAt(1)}:${keywords.keys.firstOrNull ?? '4'}';
        }
        if (allowArbitrary && themeCategory == null && keywords.isEmpty) yield '$id:[1px]';
      default:
        return;
    }
  }
}
