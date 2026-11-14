import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;

/// Dependency packages located by [JxPackageResolver].
final class JxResolvedPackages {
  const JxResolvedPackages(this.libraries, this.missing);

  /// Package name -> absolute path of its `lib/` folder.
  final Map<String, String> libraries;

  /// Requested packages that are not dependencies of the project.
  final List<String> missing;
}

/// Finds the `lib/` folder of dependency packages, from the
/// `.dart_tool/package_config.json` written by `dart pub get`.
///
/// The file is searched from the project root upward, so packages of a pub
/// workspace are resolved too.
final class JxPackageResolver {
  const JxPackageResolver();

  JxResolvedPackages resolve(Directory root, List<String> names) {
    if (names.isEmpty) return const JxResolvedPackages({}, []);
    final config = _findConfig(root);
    final known = config == null ? const <String, String>{} : _read(config);
    return JxResolvedPackages(
      {for (final name in names) name: ?known[name]},
      [
        for (final name in names)
          if (!known.containsKey(name)) name,
      ],
    );
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
