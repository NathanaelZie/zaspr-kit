import 'package:jx_cli/engine.dart';
import 'package:test/test.dart';

void main() {
  final converter = JxTailwindConverter();
  String jx(String tw) => converter.convert(tw).output;

  group('Tailwind converter', () {
    test('spacing, layout and variants', () {
      expect(
        jx('flex items-center justify-between gap-4 p-4 md:px-8'),
        'flex ai:center jc:between gap:4 p:4 md:px:8',
      );
      expect(jx('md:hover:bg-blue-500'), 'md:hover:bg:blue-500');
      expect(
        jx('grid grid-cols-1 lg:grid-cols-3 col-span-2'),
        'grid cols:1 lg:cols:3 span:2',
      );
    });

    test('values beyond the JX scale become arbitrary values', () {
      expect(jx('p-20 w-64 mt-0.5'), 'p:[5rem] w:[16rem] mt:[0.125rem]');
      expect(jx('max-w-md text-7xl'), 'mw:[28rem] fs:[4.5rem]');
    });

    test('negative values and importance', () {
      expect(jx('-mt-2'), '-mt:2');
      expect(jx('!p-4'), 'p:4!');
      expect(jx('p-4!'), 'p:4!');
    });

    test('text-, bg- and border- are disambiguated', () {
      expect(
        jx('text-sm text-center text-gray-700'),
        'fs:sm ta:center c:gray-700',
      );
      expect(
        jx('bg-cover bg-center bg-no-repeat bg-white'),
        'bgs:cover bgp:center bgr:none bg:white',
      );
      expect(
        jx('border border-2 border-dashed border-red-500 border-t-4'),
        'bw:1 bw:2 bs:dashed bc:red-500 bwt:4',
      );
    });

    test('arbitrary values pass through', () {
      expect(
        jx('w-[calc(100%_-_2rem)] bg-[#0B0D12]'),
        'w:[calc(100%_-_2rem)] bg:[#0B0D12]',
      );
    });

    test('shades and families are approximated, with a note', () {
      final report = converter.convert('bg-blue-600 text-slate-500');
      expect(report.output, 'bg:blue-700 c:gray-500');
      expect(report.approximated, hasLength(2));
      expect(report.approximated.first.notes.single, contains('blue-700'));
    });

    test('classes without an equivalent are kept and reported', () {
      final report = converter.convert('space-x-4 rounded-tl-lg my-widget');
      expect(report.output, 'space-x-4 rounded-tl-lg my-widget');
      expect(report.unconverted, hasLength(3));
      expect(report.unconverted.first.notes.single, contains('gap:'));
    });

    test('markers are kept', () {
      expect(jx('group peer'), 'group peer');
      expect(jx('group-hover:text-blue-500'), 'group-hover:c:blue-500');
    });

    test('every converted class compiles', () {
      final report = converter.convert(
        'inline-flex rounded-lg shadow-md transition-colors duration-300 '
        'hover:opacity-75 focus-visible:ring-2 ring-blue-300 size-10 '
        'bg-gradient-to-r from-blue-500 to-teal-500 animate-spin '
        'backdrop-blur-lg leading-relaxed tracking-tight font-semibold',
      );
      expect(report.unconverted, isEmpty, reason: '${report.unconverted}');
      final result = JxEngine().compile(report.output);
      expect(result.warnings, isEmpty);
    });
  });
}
