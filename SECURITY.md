# Security policy

[Version française](SECURITY.fr.md)

## Supported versions

Only the latest published version of each `jx_*` package receives security fixes.

## Reporting a vulnerability

Do not open a public issue. Use GitHub private reporting:
[Security > Report a vulnerability](https://github.com/NathanaelZie/zaspr-kit/security/advisories/new).

Include the affected version, a class or file that reproduces the problem, and the observed effect.

## Threat model

JX CSS reads source files and writes a stylesheet. Classes can come from content you do not control (a CMS, user input, runtime compilation in the browser), so they are treated as untrusted input.

| Risk | Protection |
| :--- | :--- |
| CSS injection through an arbitrary value (`c:[red;}body{…]`) | `;`, `{`, `}`, `<`, `\`, `!`, comments and control characters rejected; parentheses and quotes must be balanced |
| Code loading (`url(javascript:…)`, `expression()`, `@import`) | patterns rejected regardless of case; `data:` limited to images and fonts |
| Breaking out of a `<style>` tag | `<` rejected in every value |
| Malformed selector | every character outside `[a-zA-Z0-9_-]` is escaped |
| Denial of service (huge or deeply nested input) | bounded lengths and variant count, linear parsing, bounded interpolation depth |

Validation runs twice: in the parser (`jx_parser`), then in the rules (`jx_rules`) when the CSS is generated.

Out of scope: the content of `jx.yaml` (theme, breakpoints) is trusted, since it is written by the project's developer.
