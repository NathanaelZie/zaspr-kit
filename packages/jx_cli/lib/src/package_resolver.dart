import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;

/// Dependency packages located by [JxPackageResolver].
final class JxResolvedPackages {
  const JxResolvedPackages(
    this.libraries,
    this.missing, [
    this.roots = const {},
  ]);

  /// Requested entry -> absolute path of the folder to scan: the package's
  /// `lib/` folder, or a folder inside it for `package/folder` entries.
  final Map<String, String> libraries;

  /// Requested entry -> absolute path of its package's `lib/` folder.
  final Map<String, String> roots;

  /// Requested entries that are not dependencies of the project.
  final List<String> missing;

  /// Package name of an entry: `jx_cli/ui` -> `jx_cli`.
  static String packageOf(String entry) => entry.split('/').first;
}

/// Finds the folders to scan for the entries of `packages:` in `jx.yaml`,
/// from the `.dart_tool/package_config.json` written by `dart pub get`.
///
/// An entry is a package name (`my_kit`: its whole `lib/` folder) or a
/// package and a folder (`jx_cli/ui`: `lib/ui`, or `lib/src/ui` when only
/// that one exists). `jx_ui`, the former components package, falls back to
/// `jx_cli/ui` when it is not a dependency itself.
///
/// The file is searched from the project root upward, so packages of a pub
/// workspace are resolved too.
final class JxPackageResolver {
  const JxPackageResolver();

  /// Folder of the JX UI components.
  static const uiEntry = 'jx_cli/ui';

  JxResolvedPackages resolve(Directory root, List<String> names) {
    if (names.isEmpty) return const JxResolvedPackages({}, []);
    final config = _findConfig(root);
    final known = config == null ? const <String, String>{} : _read(config);
    final libraries = <String, String>{};
    final roots = <String, String>{};
    final missing = <String>[];
    for (final name in names) {
      var entry = name;
      if (entry == 'jx_ui' && !known.containsKey('jx_ui')) entry = uiEntry;
      final package = JxResolvedPackages.packageOf(entry);
      final lib = known[package];
      if (lib == null) {
        missing.add(name);
        continue;
      }
      final folder = entry
          .substring(package.length)
          .replaceAll(RegExp(r'^/+|/+$'), '');
      var path = lib;
      if (folder.isNotEmpty) {
        final direct = p.join(lib, folder);
        final inSrc = p.join(lib, 'src', folder);
        path = !Directory(direct).existsSync() && Directory(inSrc).existsSync()
            ? inSrc
            : direct;
      }
      libraries[name] = path;
      roots[name] = lib;
    }
    return JxResolvedPackages(libraries, missing, roots);
  }

  static File? _findConfig(Directory root) {
    var dir = Directory(p.normalize(p.absolute(root.path)));
    while (true) {
      final file = File(p.join(dir.path, '.dart_tool', 'package_config.json'));
      if (file.existsSync()) return file;
      final parent = dir.parent;
      if (parent.path == dir.path) return null;
      dir = parent;
    }
  }

  static Map<String, String> _read(File config) {
    final Object? json;
    try {
      json = jsonDecode(config.readAsStringSync());
    } on FormatException {
      return const {};
    }
    if (json is! Map || json['packages'] is! List) return const {};
    final base = Uri.file(config.path);
    return {
      for (final entry
          in (json['packages'] as List).whereType<Map<String, dynamic>>())
        if (entry['name'] case final String name)
          if (entry['rootUri'] case final String rootUri)
            name: p.normalize(
              base
                  .resolve(rootUri.endsWith('/') ? rootUri : '$rootUri/')
                  .resolve('${entry['packageUri'] ?? 'lib/'}')
                  .toFilePath(),
            ),
    };
  }
}
