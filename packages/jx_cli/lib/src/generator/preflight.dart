import 'package:jx_cli/core.dart';

/// Feuille de réinitialisation (preflight) de JX CSS.
///
/// Normalise les écarts entre navigateurs et prépare le terrain pour les
/// utilitaires : `box-sizing: border-box`, marges supprimées, bordures
/// `solid` d'épaisseur nulle (pour que `bw:2` suffise à afficher une bordure),
/// médias en bloc, contrôles de formulaire héritant de la typographie
/// (placeholders lisibles, `textarea` redimensionnable verticalement,
/// `fieldset` sans marge, curseur neutre sur les champs désactivés).
abstract final class JxPreflight {
  static JxCssRule _rule(String selector, Map<String, String> declarations) =>
      JxCssRule(
        selector: selector,
        declarations: [
          for (final entry in declarations.entries)
            JxCssDeclaration(property: entry.key, value: entry.value),
        ],
      );

  /// Règles du preflight, à placer avant toute règle utilitaire.
  static final List<JxCssRule> rules = List.unmodifiable([
    _rule('*, ::before, ::after', {
      'box-sizing': 'border-box',
      'border-width': '0',
      'border-style': 'solid',
      'border-color': 'currentColor',
    }),
    _rule('html', {
      'line-height': '1.5',
      '-webkit-text-size-adjust': '100%',
      'tab-size': '4',
      'font-family':
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    }),
    _rule('body', {'margin': '0', 'line-height': 'inherit'}),
    _rule('h1, h2, h3, h4, h5, h6, p, blockquote, figure, pre, hr, dl, dd', {
      'margin': '0',
    }),
    _rule('h1, h2, h3, h4, h5, h6', {
      'font-size': 'inherit',
      'font-weight': 'inherit',
    }),
    _rule('ol, ul, menu', {
      'list-style': 'none',
      'margin': '0',
      'padding': '0',
    }),
    _rule('a', {'color': 'inherit', 'text-decoration': 'inherit'}),
    _rule('img, svg, video, canvas, audio, iframe, embed, object', {
      'display': 'block',
      'vertical-align': 'middle',
    }),
    _rule('img, video', {'max-width': '100%', 'height': 'auto'}),
    _rule('button, input, optgroup, select, textarea', {
      'font': 'inherit',
      'color': 'inherit',
      'margin': '0',
      'padding': '0',
      'background-color': 'transparent',
    }),
    _rule('button, [role="button"]', {'cursor': 'pointer'}),
    // Champs de formulaire
    _rule('button, select', {'text-transform': 'none'}),
    _rule('button, [type="button"], [type="reset"], [type="submit"]', {
      '-webkit-appearance': 'button',
      'background-image': 'none',
    }),
    _rule('input::placeholder, textarea::placeholder', {
      'opacity': '1',
      'color': '#9ca3af',
    }),
    _rule('textarea', {'resize': 'vertical'}),
    _rule('fieldset', {'margin': '0', 'padding': '0', 'min-width': '0'}),
    _rule('legend', {'padding': '0'}),
    _rule('[type="search"]', {
      '-webkit-appearance': 'textfield',
      'outline-offset': '-2px',
    }),
    _rule('::-webkit-search-decoration', {'-webkit-appearance': 'none'}),
    _rule('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
      'height': 'auto',
    }),
    _rule(':disabled', {'cursor': 'default'}),
    _rule('table', {'border-collapse': 'collapse', 'text-indent': '0'}),
    _rule('[hidden]', {'display': 'none'}),
  ]);
}
