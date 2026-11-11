/// Point d'entrée **serveur** : pré-rendu statique du site.
library;

import 'package:jaspr/dom.dart';
import 'package:jaspr/server.dart';

import 'app.dart';
import 'data/site.dart';

// Généré automatiquement par Jaspr, ne pas modifier.
import 'main.server.options.dart';

void main() {
  Jaspr.initializeApp(options: defaultServerOptions);

  // Aucune ressource externe : polices système et feuille `web/jx.css`
  // générée par `dart run jx_cli:jx build`.
  runApp(
    Document(
      title: '$siteName : $siteTagline',
      lang: 'fr',
      meta: {'description': siteDescription},
      head: [
        link(rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml'),
        link(rel: 'stylesheet', href: '/jx.css'),
      ],
      body: App(),
    ),
  );
}
