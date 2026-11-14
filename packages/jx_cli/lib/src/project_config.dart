import 'dart:io';

import 'package:jx_core/jx_core.dart';
import 'package:jx_engine/jx_engine.dart';
import 'package:jx_theme/jx_theme.dart';
import 'package:yaml/yaml.dart';

/// Configuration d'un projet JX CSS, chargée depuis `jx.yaml`.
///
/// ```yaml
/// content: [lib, web]          # fichiers ou dossiers à scanner
/// extensions: [dart, html]     # extensions prises en compte
/// exclude: [generated]         # noms de dossiers ignorés (en plus des défauts)
/// output: build/jx.css
/// minify: false
/// reset: true                  # inclut le preflight
/// dark_mode: media             # ou `class` : `dark:` actif sous `.dark`
/// theme:
///   extend:                    # fusionné avec le thème par défaut
///     colors:
///       brand: '#0ea5e9'
///     breakpoints:
///       3xl: 1920px
///   override:                  # remplace entièrement une catégorie
///     font-size:
///       body: 1rem
/// ```
final class JxProjectConfig {
  /// Nom du fichier de configuration recherché par défaut.
  static const fileName = 'jx.yaml';

  static const defaultContent = ['lib', 'web'];
  static const defaultExtensions = ['dart', 'html'];
  static const defaultExclude = ['build', '.dart_tool', '.git', 'node_modules'];
  static const defaultOutput = 'build/jx.css';

  /// Fichiers ou dossiers à scanner, relatifs à la racine du projet.
  final List<String> content;

  /// Extensions de fichiers prises en compte (sans le point).
  final List<String> extensions;

  /// Noms de dossiers ignorés lors du scan.
  final List<String> exclude;

  /// Chemin du fichier CSS généré.
  final String output;

  /// Minifie la sortie.
  final bool minify;

  /// Inclut la feuille de réinitialisation (preflight).
  final bool reset;

  /// Mode de la variante `dark:` : `media` (préférence système) ou `class`
  /// (classe `dark` sur un ancêtre, typiquement `<html>`).
  final String darkMode;

  /// Tokens fusionnés avec le thème par défaut (`catégorie -> clé -> valeur`).
  final Map<String, Map<String, String>> themeExtend;

  /// Catégories remplaçant entièrement celles du thème par défaut.
  final Map<String, Map<String, String>> themeOverride;

  const JxProjectConfig({
    this.content = defaultContent,
    this.extensions = defaultExtensions,
    this.exclude = defaultExclude,
    this.output = defaultOutput,
    this.minify = false,
    this.reset = true,
    this.darkMode = 'media',
    this.themeExtend = const {},
    this.themeOverride = const {},
  });

  static const _knownKeys = {
    'content',
    'extensions',
    'exclude',
    'output',
    'minify',
    'reset',
    'dark_mode',
    'theme',
  };

  /// Analyse le contenu YAML d'un fichier `jx.yaml`.
  ///
  /// Lève une [JxConfigException] si le document est invalide.
  factory JxProjectConfig.fromYaml(String source) {
    final Object? document;
    try {
      document = loadYaml(source);
    } on YamlException catch (e) {
      throw JxConfigException('Invalid YAML: ${e.message}', e);
    }
    if (document == null) return const JxProjectConfig();
    if (document is! YamlMap) {
      throw const JxConfigException(
        'The root of jx.yaml must be a map.',
      );
    }

    for (final key in document.keys) {
      if (!_knownKeys.contains(key)) {
        throw JxConfigException('Unknown key in jx.yaml: "$key".');
      }
    }

    final theme = document['theme'];
    if (theme != null && theme is! YamlMap) {
      throw const JxConfigException('"theme" must be a map.');
    }
    if (theme is YamlMap) {
      for (final key in theme.keys) {
        if (key != 'extend' && key != 'override') {
          throw JxConfigException(
            'Unknown key under "theme": "$key" (expected: extend, override).',
          );
        }
      }
    }

    return JxProjectConfig(
      content: _stringList(document, 'content') ?? defaultContent,
      extensions:
          _stringList(
            document,
            'extensions',
          )?.map((e) => e.startsWith('.') ? e.substring(1) : e).toList() ??
          defaultExtensions,
      exclude: [...defaultExclude, ...?_stringList(document, 'exclude')],
      output: _string(document, 'output') ?? defaultOutput,
      minify: _bool(document, 'minify') ?? false,
      reset: _bool(document, 'reset') ?? true,
      darkMode: _darkMode(_string(document, 'dark_mode')),
      themeExtend: _tokens(theme is YamlMap ? theme['extend'] : null, 'extend'),
      themeOverride: _tokens(
        theme is YamlMap ? theme['override'] : null,
        'override',
      ),
    );
  }

  /// Charge `jx.yaml` s'il existe dans [directory], sinon la configuration
  /// par défaut.
  static JxProjectConfig loadFrom(Directory directory) {
    final file = File('${directory.path}${Platform.pathSeparator}$fileName');
    return file.existsSync() ? load(file) : const JxProjectConfig();
  }

  /// Charge un fichier de configuration explicite.
  static JxProjectConfig load(File file) {
    if (!file.existsSync()) {
      throw JxConfigException(
        'Configuration file not found: ${file.path}',
      );
    }
    return JxProjectConfig.fromYaml(file.readAsStringSync());
  }

  /// Copie la configuration en surchargeant les champs spécifiés.
  JxProjectConfig copyWith({
    List<String>? content,
    String? output,
    bool? minify,
    bool? reset,
  }) {
    return JxProjectConfig(
      content: content ?? this.content,
      extensions: extensions,
      exclude: exclude,
      output: output ?? this.output,
      minify: minify ?? this.minify,
      reset: reset ?? this.reset,
      darkMode: darkMode,
      themeExtend: themeExtend,
      themeOverride: themeOverride,
    );
  }

  /// Construit le thème : défaut, puis catégories remplacées, puis extensions.
  JxTheme buildTheme() {
    final raw = <String, Map<String, String>>{
      for (final entry in JxDefaultTokens.all.entries)
        entry.key: Map.of(entry.value),
    };
    themeOverride.forEach((category, tokens) => raw[category] = Map.of(tokens));
    themeExtend.forEach(
      (category, tokens) => raw.putIfAbsent(category, () => {}).addAll(tokens),
    );
    return JxTheme(name: 'project', data: JxThemeData.fromMap(raw));
  }

  /// Construit un moteur configuré pour ce projet.
  JxEngine buildEngine() {
    return JxEngine(
      config: JxEngineConfig(
        config: JxConfig(
          minify: minify,
          includeReset: reset,
          outputPath: output,
        ),
        theme: buildTheme(),
        darkSelector: darkMode == 'class' ? '.dark' : null,
      ),
    );
  }

  // -------------------------------------------------------------------------

  static List<String>? _stringList(YamlMap map, String key) {
    final value = map[key];
    if (value == null) return null;
    if (value is String) return [value];
    if (value is YamlList) return [for (final item in value) '$item'];
    throw JxConfigException('"$key" must be a list of strings.');
  }

  static String? _string(YamlMap map, String key) {
    final value = map[key];
    if (value == null) return null;
    if (value is String) return value;
    throw JxConfigException('"$key" must be a string.');
  }

  static String _darkMode(String? value) {
    if (value == null) return 'media';
    if (value == 'media' || value == 'class') return value;
    throw JxConfigException(
      '"dark_mode" must be "media" or "class" (got "$value").',
    );
  }

  static bool? _bool(YamlMap map, String key) {
    final value = map[key];
    if (value == null) return null;
    if (value is bool) return value;
    throw JxConfigException('"$key" must be a boolean.');
  }

  static Map<String, Map<String, String>> _tokens(Object? node, String name) {
    if (node == null) return const {};
    if (node is! YamlMap) {
      throw JxConfigException('"theme.$name" must be a map.');
    }
    final result = <String, Map<String, String>>{};
    for (final entry in node.entries) {
      final tokens = entry.value;
      if (tokens is! YamlMap) {
        throw JxConfigException(
          '"theme.$name.${entry.key}" must be a key -> value map.',
        );
      }
      result['${entry.key}'] = {
        for (final token in tokens.entries) '${token.key}': '${token.value}',
      };
    }
    return result;
  }
}
