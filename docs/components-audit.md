# JX Components: audit, inventory and roadmap

Audit of `package:jx_cli/ui.dart` (formerly the `jx_ui` package), done on the
`feat/single-package` branch, November 2026.

Status labels used below:

- **Available**: published on pub.dev (jx_ui 0.0.1 or 0.0.2).
- **In development**: on this branch, ships with jx_cli 0.0.3, not published yet.
- **Planned**: not started. Nothing in this state can be installed.

## Inventory

28 components. Each one has its own documentation page at
`/docs/components/<slug>` with a live preview, visual states, a minimal and a
complete example, the property table, events, customization, responsive
behavior, accessibility notes and limitations.

| Component | Category | Status | Since | Native element |
| --- | --- | --- | --- | --- |
| `JxButton` | Actions | Available | 0.0.1 | `<button>` or `<a>` |
| `JxCard` | Layout | Available | 0.0.1 | `<div>` + heading |
| `JxDivider` | Layout | Available | 0.0.2 | `<hr>` or `role=separator` |
| `JxAccordion` | Layout | In development | 0.0.3 | `<details>` / `<summary>` |
| `JxTextField` | Forms | Available | 0.0.1 | `<input>` |
| `JxCombobox` | Forms | In development | 0.0.3 | `<input list>` + `<datalist>` |
| `JxTextArea` | Forms | Available | 0.0.2 | `<textarea>` |
| `JxSelect` | Forms | Available | 0.0.2 | `<select>` |
| `JxCheckbox` | Forms | Available | 0.0.2 | `<input type=checkbox>` |
| `JxSwitch` | Forms | Available | 0.0.2 | checkbox with `role=switch` |
| `JxRadioGroup` | Forms | Available | 0.0.2 | `<fieldset>` + radios |
| `JxAlert` | Feedback | Available | 0.0.1 | `role=alert` / `role=status` |
| `JxBadge` | Feedback | Available | 0.0.1 | `<span>` |
| `JxSpinner` | Feedback | Available | 0.0.2 | `role=status` |
| `JxProgress` | Feedback | Available | 0.0.2 | `role=progressbar` |
| `JxSkeleton` | Feedback | Available | 0.0.2 | `aria-hidden` block |
| `JxEmptyState` | Feedback | Available | 0.0.2 | `<div>` |
| `JxToast` + `JxToastRegion` | Feedback | In development | 0.0.3 | `role=status` / `alert` in a `<section>` |
| `JxAvatar` | Data display | Available | 0.0.2 | `<img>` or `role=img` |
| `JxTooltip` | Data display | Available | 0.0.2 | `role=tooltip` |
| `JxKbd` | Data display | Available | 0.0.2 | `<kbd>` |
| `JxDataTable` | Data display | Available | 0.0.2 | `<table>` with `aria-sort` |
| `JxBreadcrumbs` | Navigation | Available | 0.0.2 | `<nav>` + `<ol>` |
| `JxPagination` | Navigation | Available | 0.0.2 | `<nav>`, links or buttons |
| `JxTabs` | Navigation | In development | 0.0.3 | `tablist` / `tab` / `tabpanel` |
| `JxModal` + `JxModalTrigger` | Overlays | Available | 0.0.2 | `<dialog>` + command buttons |
| `JxDrawer` | Overlays | In development | 0.0.3 | `<dialog>` + command buttons |
| `JxDropdownMenu` | Overlays | In development | 0.0.3 | `<details>` / `<summary>` |

## Findings and fixes

Fixed on this branch:

| Finding | Fix |
| --- | --- |
| The focus ring was copied in eight style constants and had drifted. | Shared tokens `focusRing`, `textStrong`, `surfaceBorder` in `styles.dart`, interpolated everywhere. |
| A disabled or loading `JxButton(href:)` still navigated. | It renders an `<a>` without `href`, with `role=link`, `aria-disabled` and `pe:none`. |
| `JxCard` always rendered an `h3`, breaking page outlines. | New `titleLevel` (2 to 6, default 3). |
| Text field, text area and select duplicated the label, hint and error markup. | Shared internal helper `jxField`. |
| No disclosure or side panel component. | New `JxAccordion` and `JxDrawer`, both native and JavaScript-free. |
| Badge and alert tones kept their light tint in dark mode. | Dark variants: light text on a deep tint, darker border. |
| Required fields had no visual marker. | Decorative asterisk on text fields, text areas, selects, comboboxes, checkboxes and radio legends. |
| Checkboxes and radio groups had no message. | `JxCheckbox(error:)`, `JxRadioGroup(hint:, error:, required:)`, linked with `aria-describedby`. |
| No indeterminate progress. | `JxProgress` without `value`: sliding bar, `aria-busy`, no value announced. |
| The tooltip was not linked to its element. | `JxTooltip(id:)` and `JxTooltip.describedBy(id)`. |
| Missing tabs, menu, toast and combobox. | `JxTabs`, `JxDropdownMenu`, `JxToast` with `JxToastRegion`, `JxCombobox`. |

Still open (documented as limitations on each page):

- `JxTooltip` is CSS only: Escape does not dismiss it.
- `JxDropdownMenu` does not close on a click outside, and is a disclosure, not an ARIA menu.
- `JxTabs` needs to run in the browser (`@client`) to switch panels.
- Modals and drawers depend on Invoker Commands (`command`, `commandfor`) and
  `closedby`, available in current browsers only.

## Missing components

| Component | Category | Why it is not there yet |
| --- | --- | --- |
| Date picker | Forms | A calendar grid with full keyboard support: needs its own client component. |
| Command palette | Overlays | Search across actions, on top of the combobox and the modal. |
| Popover menu | Overlays | The dropdown on the Popover API, once CSS anchor positioning is in every browser. |
| Custom listbox | Forms | A combobox with a styled list and active-option keyboard handling. |

## Roadmap

1. **0.0.3** (this branch): single package; accordion, drawer, tabs, dropdown
   menu, toast and combobox; dark tones, required markers, errors on choices,
   indeterminate progress, linked tooltips; documentation per component,
   gallery and playground.
2. **Next**: Escape for tooltips, click-outside for the dropdown menu, vertical
   tabs.
3. **Later**: date picker, command palette, popover menu, custom listbox.

## Quality checks

- `packages/jx_cli/test/ui/jx_ui_test.dart`: every class used by the
  components compiles with the default theme, and the core components render
  the expected markup and ARIA.
- `packages/jx_cli/test/ui/audit_test.dart`: the first fixes (link button,
  card heading level, shared field markup, accordion, drawer, modal close).
- `packages/jx_cli/test/ui/roadmap_test.dart`: dark tones, required markers,
  errors on choices, indeterminate progress, tooltip link, tabs, dropdown
  menu, toasts and combobox.
- The documentation site renders every preview with the real components, so a
  broken component breaks the site build.
