import 'dart:io';

import 'package:jx_cli/engine.dart';
import 'package:path/path.dart' as p;

/// One class attribute rewritten by [JxMigrator].
class JxMigrationChange {
  const JxMigrationChange({
    required this.line,
    required this.before,
    required this.after,
    required this.report,
  });

  /// 1-based line number.
  final int line;
  final String before;
  final String after;
  final JxTailwindReport report;
}

/// Changes found in one file.
class JxMigrationFile {
  const JxMigrationFile(this.path, this.changes, this.migrated);

  final String path;
  final List<JxMigrationChange> changes;

  /// File content after migration.
  final String migrated;
}

/// Finds Tailwind classes in source files and converts them to JX.
///
/// Only class attributes are rewritten, never free text:
/// - Dart: `classes: '…'` and `classes: "…"` string literals without
///   interpolation;
/// - HTML and other markup: `class="…"` and `class='…'`.
class JxMigrator {
  JxMigrator({JxTailwindConverter? converter})
    : _converter = converter ?? JxTailwindConverter();

  final JxTailwindConverter _converter;

  static final _dartPattern = RegExp(
    r'''(\bclasses:\s*)(['"])([^'"\n$\\]*)\2''',
  );
  static final _markupPattern = RegExp(r'''(\bclass=)(['"])([^'"\n]*)\2''');

  /// Migrates [source]; [isDart] selects the attribute pattern.
  JxMigrationFile migrateSource(String path, String source, {bool? isDart}) {
    final dart = isDart ?? p.extension(path) == '.dart';
    final pattern = dart ? _dartPattern : _markupPattern;
    final changes = <JxMigrationChange>[];
    final migrated = source.replaceAllMapped(pattern, (match) {
      final before = match[3]!;
      final report = _converter.convert(before);
      final after = report.output;
      if (after == before.trim().split(RegExp(r'\s+')).join(' ')) {
        return match[0]!;
      }
      changes.add(
        JxMigrationChange(
          line: '\n'.allMatches(source.substring(0, match.start)).length + 1,
          before: before,
          after: after,
          report: report,
        ),
      );
      return '${match[1]}${match[2]}$after${match[2]}';
    });
    return JxMigrationFile(path, changes, migrated);
  }

  /// Migrates every matching file under [paths] (files or folders).
  List<JxMigrationFile> migrateFiles(
    Directory root,
    List<String> paths, {
    Set<String> extensions = const {'dart', 'html'},
    Set<String> exclude = const {'build', '.dart_tool', '.git', 'node_modules'},
  }) {
    final files = <File>[];
    for (final entry in paths) {
      final path = p.normalize(p.absolute(root.path, entry));
      if (FileSystemEntity.isFileSync(path)) {
        files.add(File(path));
      } else if (FileSystemEntity.isDirectorySync(path)) {
        for (final entity in Directory(path).listSync(recursive: true)) {
          if (entity is! File) continue;
          final relative = p.split(p.relative(entity.path, from: path));
          if (relative.any(exclude.contains)) continue;
          final ext = p.extension(entity.path).replaceFirst('.', '');
          if (extensions.contains(ext)) files.add(entity);
        }
      }
    }
    files.sort((a, b) => a.path.compareTo(b.path));
    return [
      for (final file in files)
        if (migrateSource(file.path, file.readAsStringSync()) case final result
            when result.changes.isNotEmpty)
          result,
    ];
  }
}
