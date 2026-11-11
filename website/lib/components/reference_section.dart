import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jx_core/jx_core.dart';
import 'package:jx_rules/jx_rules.dart';

import '../data/docs.dart';
import 'ui.dart';

/// Une entrée de la référence, extraite d'une règle du registre.
typedef RefEntry = ({List<String> classes, List<String> properties, String values});

/// Décrit une règle selon son type ; `null` pour un type inconnu.
RefEntry? describeRule(JxRuleContract rule) => switch (rule) {
  JxStaticRule(:final classes) => (
    classes: classes.keys.toList(),
    properties: {for (final d in classes.values) ...d.keys}.toList(),
    values: 'Classe sans valeur',
  ),
  JxValueRule(:final properties, :final themeCategory, :final keywords, :final allowArbitrary) => (
    classes: [for (final id in properties.keys) '$id:'],
    properties: {for (final props in properties.values) ...props}.toList(),
    values: [
      if (themeCategory != null) 'thème : $themeCategory',
      if (keywords.isNotEmpty) _sample(keywords.keys),
      if (allowArbitrary) '[arbitraire]',
    ].join(' ; '),
  ),
  JxKeywordRule(:final identifiers, :final values) => (
    classes: [for (final id in identifiers) '$id:'],
    properties: {for (final d in values.values) ...d.keys}.toList(),
    values: _sample(values.keys),
  ),
  _ => null,
};

String _sample(Iterable<String> keys) {
  final list = keys.toList();
  return list.length <= 6 ? list.join(', ') : '${list.take(6).join(', ')}…';
}

/// Recherche dans toutes les règles du preset, par classe ou propriété CSS.
@client
class ReferenceSearch extends StatefulComponent {
  const ReferenceSearch({super.key});

  @override
  State<ReferenceSearch> createState() => ReferenceSearchState();
}

class ReferenceSearchState extends State<ReferenceSearch> {
  static final List<(UtilityGroup, List<RefEntry>)> reference = [
    for (final group in utilityGroups)
      (group, [for (final rule in group.rules) ?describeRule(rule)]),
  ];

  String query = '';

  bool _matches(RefEntry entry) {
    final q = query.trim().toLowerCase();
    if (q.isEmpty) return true;
    return entry.classes.any((c) => c.toLowerCase().contains(q)) ||
        entry.properties.any((prop) => prop.toLowerCase().contains(q));
  }

  @override
  Component build(BuildContext context) {
    final filtered = [
      for (final (group, entries) in reference) (group, entries.where(_matches).toList()),
    ].where((g) => g.$2.isNotEmpty).toList();
    final count = filtered.fold(0, (sum, g) => sum + g.$2.length);

    return div([
      div(classes: 'flex fd:col sm:fd:row sm:ai:center gap:3 mb:8', [
        div(classes: 'fl:1', [
          input<String>(
            type: InputType.search,
            classes: field,
            attributes: {
              'placeholder': 'Rechercher : bg, grid, ring, padding…',
              'aria-label': 'Rechercher une classe ou une propriété CSS',
            },
            onInput: (v) => setState(() => query = v),
          ),
        ]),
        p(
          classes: 'fs:sm c:haze ws:nowrap',
          attributes: {'role': 'status'},
          [
            .text(query.trim().isEmpty ? '$ruleTotal règles' : '$count résultat(s)'),
          ],
        ),
      ]),
      if (filtered.isEmpty)
        p(classes: 'c:haze', [.text('Aucune règle ne correspond à « ${query.trim()} ».')])
      else
        div(classes: 'flex fd:col gap:10', [
          for (final (group, entries) in filtered)
            section([
              div(classes: 'flex ai:baseline jc:between gap:4 mb:4', [
                h2(classes: 'fs:xl fw:bold c:snow', [.text(group.title)]),
                a(
                  href: '/docs/utilitaires/${group.slug}',
                  classes: 'fs:sm fw:semibold $textLink',
                  [.text('Page détaillée')],
                ),
              ]),
              ul(classes: '$panel ov:hidden', [
                for (final (i, entry) in entries.indexed)
                  li(
                    classes: [
                      'grid cols:1 md:cols:[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)] gap:2 md:gap:6 px:5 py:4',
                      if (i > 0) 'bwt:1 bc:edge',
                    ].join(' '),
                    [
                      div(classes: 'flex wrap gap:2', [
                        for (final c in entry.classes)
                          code(classes: 'ff:code fs:sm c:ident', [.text(c)]),
                      ]),
                      span(classes: 'ff:code fs:xs c:[#C9D1DE] lh:relaxed', [
                        .text(entry.properties.join(', ')),
                      ]),
                      span(classes: 'fs:sm c:haze lh:relaxed', [.text(entry.values)]),
                    ],
                  ),
              ]),
            ]),
        ]),
    ]);
  }
}
