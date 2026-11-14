import 'dart:io';

import 'package:build/build.dart';
import 'package:glob/glob.dart';
import 'package:jx_cli/jx_cli.dart';
import 'package:jx_core/jx_core.dart';
import 'package:jx_parser/jx_parser.dart';
import 'package:path/path.dart' as p;

/// Generates the JX stylesheet of a package from its sources.
///
/// The builder reads `jx.yaml` like `jx build` does (`content`,
/// `extensions`, `exclude`, `minify`, `reset`, `dark_mode`, `theme`), then
/// writes `web/jx.css`. It runs again whenever a scanned source or
/// `jx.yaml` changes.
///
/// Options (in the project's `build.yaml`, under
/// `targets: $default: builders: jx_builder:jx_css: options:`):
/// - `minify`: overrides `minify` from `jx.yaml`, for example in release.
///
/// Packages listed under `packages:` in `jx.yaml` are located through
/// `.dart_tool/package_config.json` and their `lib/` Dart files are read
/// through the build step.
class JxCssBuilder implements Builder {
  JxCssBuilder([
    BuilderOptions options = BuilderOptions.empty,
    JxPackageLister? listPackageFiles,
  ]) : _minify = options.config['minify'] as bool?,
       _listPackageFiles = listPackageFiles ?? _listFromDisk;

  static const outputPath = 'web/jx.css';

  final bool? _minify;
  final JxPackageLister _listPackageFiles;

  @override
  Map<String, List<String>> get buildExtensions => const {
    r'$package$': [outputPath],
  };

  @override
  Future<void> build(BuildStep buildStep) async {
    final package = buildStep.inputId.package;
    var config = await _loadConfig(buildStep, package);
    if (_minify != null) config = config.copyWith(minify: _minify);

    final engine = config.buildEngine();
    const extractor = JxClassExtractor();
    final excluded = {...JxProjectConfig.defaultExclude, ...config.exclude};
    final candidates = <String>{};
    final seen = <AssetId>{};

    for (final glob in _globs(config)) {
      await for (final id in buildStep.findAssets(glob)) {
        if (!seen.add(id) || id.path == outputPath) continue;
        if (id.pathSegments.any(excluded.contains)) continue;
        final content = await buildStep.readAsString(id);
        candidates.addAll(
          id.extension == '.dart'
              ? extractor.extractFromDart(content)
              : extractor.extract(content),
        );
      }
    }

    final (files, missing) = _listPackageFiles(config.packages);
    for (final name in missing) {
      log.warning(
        'Package "$name" listed in packages is not a dependency '
        '(run dart pub get).',
      );
    }
    for (final id in files) {
      if (!await buildStep.canRead(id)) continue;
      candidates.addAll(
        extractor.extractFromDart(await buildStep.readAsString(id)),
      );
    }

    final parser = engine.parser;
    final tokens = <JxClassToken>[];
    for (final candidate in candidates) {
      if (parser is JxParser) {
        final outcome = parser.analyze(candidate);
        if (outcome.token case final token?) {
          tokens.add(token);
        } else if (outcome.failure!.isSecurityRelated) {
          log.warning('${outcome.failure}');
        }
      } else if (parser.parseToken(candidate) case final token?) {
        tokens.add(token);
      }
    }

    final result = engine.compileTokens(tokens);
    for (final warning in result.warnings) {
      log.warning(warning);
    }
    await buildStep.writeAsString(
      AssetId(package, outputPath),
      result.css.isEmpty ? '' : '${result.css}\n',
    );
  }

  /// Reads `jx.yaml`. build_runner only exposes it when it is listed in the
  /// target's `sources`; otherwise it is read from the package root on disk
  /// (build_runner runs there), and a change to it needs a restart.
  static Future<JxProjectConfig> _loadConfig(
    BuildStep buildStep,
    String package,
  ) async {
    final configId = AssetId(package, JxProjectConfig.fileName);
    if (await buildStep.canRead(configId)) {
      return JxProjectConfig.fromYaml(await buildStep.readAsString(configId));
    }
    final file = File(JxProjectConfig.fileName);
    if (file.existsSync()) {
      return JxProjectConfig.fromYaml(file.readAsStringSync());
    }
    return const JxProjectConfig();
  }

  /// Lists the Dart files of [packages] from the package config on disk
  /// (build_runner runs at the package root).
  static (List<AssetId>, List<String>) _listFromDisk(List<String> packages) {
    final resolved = const JxPackageResolver().resolve(
      Directory.current,
      packages,
    );
    final files = <AssetId>[];
    resolved.libraries.forEach((name, library) {
      if (!Directory(library).existsSync()) return;
      for (final entity in Directory(library).listSync(recursive: true)) {
        if (entity is! File || p.extension(entity.path) != '.dart') continue;
        final relative = p.relative(entity.path, from: library);
        files.add(AssetId(name, p.url.joinAll(['lib', ...p.split(relative)])));
      }
    });
    files.sort((a, b) => '$a'.compareTo('$b'));
    return (files, resolved.missing);
  }

  /// One glob per `content` entry: the file itself, or every file with a
  /// scanned extension under the folder.
  static List<Glob> _globs(JxProjectConfig config) {
    final extensions = config.extensions.length == 1
        ? config.extensions.single
        : '{${config.extensions.join(',')}}';
    return [
      for (final entry in config.content)
        if (entry.contains('.') && !entry.endsWith('/'))
          Glob(entry)
        else
          Glob('${entry.replaceAll(RegExp(r'/+$'), '')}/**.$extensions'),
    ];
  }
}

/// Returns the Dart files of the given packages, and the names that could
/// not be resolved.
typedef JxPackageLister =
    (List<AssetId> files, List<String> missing) Function(List<String> packages);
