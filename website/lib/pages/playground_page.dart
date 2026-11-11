import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

import '../components/nav_bar.dart';
import '../components/playground_section.dart';
import '../components/site_footer.dart';
import '../components/ui.dart';
import '../data/site.dart';

/// Page du bac à sable.
class PlaygroundPage extends StatelessComponent {
  const PlaygroundPage({super.key});

  @override
  Component build(BuildContext context) {
    return div(classes: 'ff:text c:snow bg:abyss', [
      Document.head(title: 'Bac à sable : $siteName'),
      const NavBar(current: '/bac-a-sable'),
      main_(classes: '$container py:12 md:py:16', [
        div(classes: 'mb:10 mw:[46rem]', [
          div(
            classes:
                'flex ai:center jc:center w:12 h:12 br:xl mb:6 c:ident bg:[rgba(45,212,191,0.14)]',
            [
              glyph('zap', classes: 'w:6 h:6'),
            ],
          ),
          h1(classes: 'fs:[clamp(2rem,4vw,2.75rem)] fw:extrabold lh:[1.1] ls:tight c:snow', [
            .text('Bac à sable'),
          ]),
          p(classes: 'mt:4 fs:lg md:fs:xl lh:relaxed c:haze', [
            .text(
              'Le moteur JX compilé en JavaScript, avec le thème par défaut. Saisissez des '
              'classes : le CSS se met à jour à chaque frappe. Les variantes (hover:, md:…) '
              'apparaissent dans le CSS mais pas dans l\'aperçu.',
            ),
          ]),
        ]),
        const Playground(),
      ]),
      const SiteFooter(),
    ]);
  }
}
