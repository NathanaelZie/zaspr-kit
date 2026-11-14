# Politique de sécurité

## Versions prises en charge

Seule la dernière version publiée de chaque package `jx_*` reçoit des correctifs de sécurité.

## Signaler une vulnérabilité

N'ouvrez pas d'issue publique. Utilisez le signalement privé de GitHub :
[Security > Report a vulnerability](https://github.com/NathanaelZie/zaspr-kit/security/advisories/new).

Indiquez la version concernée, une classe ou un fichier qui reproduit le problème, et l'effet observé.

## Modèle de menace

JX CSS lit des fichiers sources et écrit une feuille de style. Les classes peuvent provenir de contenus que vous ne contrôlez pas (CMS, texte saisi par un utilisateur, compilation à l'exécution dans le navigateur). Elles sont donc traitées comme des entrées non fiables.

| Risque | Protection |
| :--- | :--- |
| Injection CSS par une valeur arbitraire (`c:[red;}body{…]`) | `;`, `{`, `}`, `<`, `\`, `!`, commentaires et caractères de contrôle refusés ; parenthèses et guillemets équilibrés exigés |
| Chargement de code (`url(javascript:…)`, `expression()`, `@import`) | motifs refusés sans tenir compte de la casse ; `data:` limité aux images et polices |
| Sortie d'une balise `<style>` | `<` refusé dans toute valeur |
| Sélecteur malformé | tout caractère hors `[a-zA-Z0-9_-]` est échappé |
| Déni de service (entrée géante ou très imbriquée) | longueurs et nombre de variantes bornés, analyse linéaire, profondeur d'interpolation bornée |

La validation est faite deux fois : par le parseur (`jx_parser`), puis par les règles (`jx_rules`) au moment de générer le CSS.

Hors périmètre : le contenu de `jx.yaml` (thème, breakpoints) est considéré comme fiable, car il est écrit par le développeur du projet.
