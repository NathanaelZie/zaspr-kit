import 'package:jx_core/jx_core.dart';

import 'rule_types.dart';

/// Table layout utilities:
/// - `bcol:collapse|separate`: `border-collapse`;
/// - `tl:auto|fixed`: `table-layout`;
/// - `cap:top|bottom`: `caption-side`.
const List<JxRuleContract> jxTableRules = [
  JxValueRule(
    'border-collapse',
    properties: {
      'bcol': ['border-collapse'],
    },
    keywords: {'collapse': 'collapse', 'separate': 'separate'},
    allowArbitrary: false,
  ),
  JxValueRule(
    'table-layout',
    properties: {
      'tl': ['table-layout'],
    },
    keywords: {'auto': 'auto', 'fixed': 'fixed'},
    allowArbitrary: false,
  ),
  JxValueRule(
    'caption-side',
    properties: {
      'cap': ['caption-side'],
    },
    keywords: {'top': 'top', 'bottom': 'bottom'},
    allowArbitrary: false,
  ),
];
