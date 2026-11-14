/// Joins class strings, skipping null and empty parts.
String jxJoin(List<String?> parts) =>
    parts.where((part) => part != null && part.isNotEmpty).join(' ');
