# Contribuer à ZASPR Kit

[English version](CONTRIBUTING.md)

Merci de vouloir améliorer ZASPR Kit. Signalements de bugs, corrections de documentation, nouveaux utilitaires et nouveaux composants sont les bienvenus.

En participant, vous acceptez de respecter le [code de conduite](CODE_OF_CONDUCT.fr.md).

## Signaler un bug ou proposer une fonctionnalité

Ouvrez une [issue](https://github.com/NathanaelZie/zaspr-kit/issues) et indiquez :

- la version de `jx_cli`, celle de Dart (`dart --version`) et celle de Jaspr ;
- les classes, le `jx.yaml` ou le composant qui montrent le problème ;
- ce que vous attendiez et ce qui s'est passé.

Ne signalez pas une faille de sécurité dans une issue publique : suivez [SECURITY.fr.md](SECURITY.fr.md).

## Installer le projet

Prérequis : SDK Dart `>= 3.10.7`.

```bash
git clone https://github.com/NathanaelZie/zaspr-kit.git
cd zaspr-kit
dart pub get
```

Tout le code se trouve dans `packages/jx_cli`.

## Avant d'ouvrir une pull request

Lancez les mêmes vérifications que la CI, depuis `packages/jx_cli` :

```bash
dart format .
dart analyze --fatal-infos
dart test
```

- Ajoutez ou mettez à jour les tests pour tout changement de comportement. Un correctif de sécurité s'accompagne d'un test de non-régression.
- Ajoutez une ligne dans [packages/jx_cli/CHANGELOG.md](packages/jx_cli/CHANGELOG.md) sous la prochaine version.
- Un seul sujet par pull request, avec une description de ce qui change pour les utilisateurs.

## Conventions

- Fichiers en `snake_case`, types en `PascalCase` avec le préfixe `Jx` pour l'API publique, membres en `camelCase`.
- Les messages de commit suivent [Conventional Commits](https://www.conventionalcommits.org/fr/) : `feat:`, `fix:`, `docs:`, `test:`, `chore:`, avec une portée facultative comme `fix(security):`.
- L'API publique est documentée par des commentaires `///`.
- Les composants restent accessibles : clavier, rôles et libellés ARIA, focus visible.

## Licence

ZASPR Kit est publié sous [licence MIT](LICENSE). En proposant une contribution, vous acceptez qu'elle soit publiée sous la même licence.
