import 'package:jx_core/jx_core.dart';

import 'generator_options.dart';

/// Générateur et formateur de feuille de style CSS pour le framework JX CSS.
final class JxGenerator implements JxGeneratorContract {
  /// Options de configuration du générateur.
  final JxGeneratorOptions options;

  const JxGenerator({this.options = const JxGeneratorOptions()});

  @override
  String generate(List<JxCssRule> rules) {
    if (rules.isEmpty) return '';

    final buffer = StringBuffer();
    final nl = options.minify ? '' : '\n';
    final space = options.minify ? '' : ' ';
    final indent = options.minify ? '' : options.indent;

    // Séparation des règles standard et des règles sous media queries
    final standardRules = rules.where((r) => !r.hasMediaQuery).toList();
    final mediaRules = rules.where((r) => r.hasMediaQuery).toList();

    // 1. Génération des règles standard
    for (final rule in standardRules) {
      _writeRule(buffer, rule, indent: '', space: space, nl: nl);
      buffer.write(nl);
    }

    // 2. Génération des règles sous @media
    final groupedMedia = <String, List<JxCssRule>>{};
    for (final rule in mediaRules) {
      groupedMedia.putIfAbsent(rule.mediaQuery!, () => []).add(rule);
    }

    for (final entry in groupedMedia.entries) {
      final media = entry.key;
      final rulesForMedia = entry.value;

      buffer.write('$media$space{$nl');
      for (final rule in rulesForMedia) {
        _writeRule(
          buffer,
          rule,
          indent: options.minify ? '' : indent,
          space: space,
          nl: nl,
        );
        buffer.write(nl);
      }
      buffer.write('}$nl');
    }

    return buffer.toString().trim();
  }

  /// Génère le bloc `:root` contenant les variables CSS issues d'un thème.
  String generateRootVariables(Map<String, String> variables) {
    if (variables.isEmpty) return '';

    final buffer = StringBuffer();
    final nl = options.minify ? '' : '\n';
    final space = options.minify ? '' : ' ';
    final indent = options.minify ? '' : options.indent;

    buffer.write(':root$space{$nl');
    for (final entry in variables.entries) {
      buffer.write('$indent${entry.key}:$space${entry.value};$nl');
    }
    buffer.write('}');

    return buffer.toString();
  }

  void _writeRule(
    StringBuffer buffer,
    JxCssRule rule, {
    required String indent,
    required String space,
    required String nl,
  }) {
    final innerIndent = options.minify ? '' : '$indent${options.indent}';
    buffer.write('$indent${rule.fullSelector}$space{$nl');

    for (final dec in rule.declarations) {
      final important = dec.isImportant ? '$space!important' : '';
      buffer.write(
        '$innerIndent${dec.property}:$space${dec.value}$important;$nl',
      );
    }

    buffer.write('$indent}');
  }
}
