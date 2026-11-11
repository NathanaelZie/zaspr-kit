import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import 'data/docs.dart';
import 'pages/docs/architecture_page.dart';
import 'pages/docs/fundamentals.dart';
import 'pages/docs/getting_started.dart';
import 'pages/docs/utilities.dart';
import 'pages/home_page.dart';
import 'pages/playground_page.dart';

/// Racine du site : une page statique par route. Les parties interactives
/// (menus, bac à sable, recherche, copie) sont des composants `@client`.
class App extends StatelessComponent {
  const App({super.key});

  @override
  Component build(BuildContext context) {
    return Router(
      routes: [
        Route(path: '/', builder: (context, state) => const HomePage()),
        Route(path: '/bac-a-sable', builder: (context, state) => const PlaygroundPage()),
        Route(path: '/docs', builder: (context, state) => const IntroductionPage()),
        Route(path: '/docs/introduction', builder: (context, state) => const IntroductionPage()),
        Route(path: '/docs/installation', builder: (context, state) => const InstallationPage()),
        Route(path: '/docs/configuration', builder: (context, state) => const ConfigurationPage()),
        Route(path: '/docs/cli', builder: (context, state) => const CliPage()),
        Route(path: '/docs/jaspr', builder: (context, state) => const JasprPage()),
        Route(path: '/docs/syntaxe', builder: (context, state) => const SyntaxPage()),
        Route(path: '/docs/variantes', builder: (context, state) => const VariantsPage()),
        Route(path: '/docs/theme', builder: (context, state) => const ThemePage()),
        Route(
          path: '/docs/utilitaires',
          builder: (context, state) => const UtilitiesOverviewPage(),
        ),
        for (final group in utilityGroups)
          Route(
            path: '/docs/utilitaires/${group.slug}',
            builder: (context, state) => UtilityGroupPage(group),
          ),
        Route(path: '/docs/architecture', builder: (context, state) => const ArchitecturePage()),
      ],
    );
  }
}
