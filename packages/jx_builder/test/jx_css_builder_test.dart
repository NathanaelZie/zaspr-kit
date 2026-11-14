import 'package:build/build.dart';
import 'package:build_test/build_test.dart';
import 'package:jx_builder/jx_builder.dart';
import 'package:test/test.dart';

void main() {
  group('JxCssBuilder', () {
    test('writes web/jx.css from the classes used in lib/ and web/', () async {
      await testBuilder(
        jxCssBuilder(BuilderOptions.empty),
        {
          'app|lib/app.dart': "div(classes: 'p:4 md:p:8', [])",
          'app|web/index.html': '<div class="c:red"></div>',
          'app|jx.yaml': 'reset: false',
        },
        rootPackage: 'app',
        outputs: {
          'app|web/jx.css': decodedMatches(
            allOf(
              contains('padding: 1rem'),
              contains('@media (min-width: 768px)'),
              contains('color: #ef4444'),
              isNot(contains('box-sizing')),
            ),
          ),
        },
      );
    });

    test('follows content, minify option and excludes', () async {
      await testBuilder(
        jxCssBuilder(const BuilderOptions({'minify': true})),
        {
          'app|lib/app.dart': "div(classes: 'p:4')",
          'app|lib/generated/x.dart': "div(classes: 'c:blue')",
          'app|jx.yaml': 'content: [lib]\nexclude: [generated]\nreset: false',
        },
        rootPackage: 'app',
        outputs: {
          'app|web/jx.css': decodedMatches(
            allOf(contains(r'.p\:4{padding:1rem;}'), isNot(contains('blue'))),
          ),
        },
      );
    });

    test('works without jx.yaml', () async {
      await testBuilder(
        jxCssBuilder(BuilderOptions.empty),
        {'app|lib/app.dart': "div(classes: 'flex')"},
        rootPackage: 'app',
        outputs: {'app|web/jx.css': decodedMatches(contains('display: flex'))},
      );
    });

    test('scans the packages listed in jx.yaml', () async {
      await testBuilder(
        JxCssBuilder(
          BuilderOptions.empty,
          (packages) => (
            [
              for (final name in packages)
                if (name == 'kit') AssetId('kit', 'lib/src/button.dart'),
            ],
            [
              for (final name in packages)
                if (name != 'kit') name,
            ],
          ),
        ),
        {
          'app|lib/app.dart': "div(classes: 'flex')",
          'app|jx.yaml': 'packages: [kit, nope]\nreset: false',
          'kit|lib/src/button.dart': "const b = 'c:teal';",
        },
        rootPackage: 'app',
        outputs: {
          'app|web/jx.css': decodedMatches(
            allOf(contains('display: flex'), contains('color:')),
          ),
        },
      );
    });
  });
}
