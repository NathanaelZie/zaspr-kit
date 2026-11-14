# JX Components: audit, inventory and roadmap

Audit of `package:jx_cli/ui.dart` (formerly the `jx_ui` package), done on the
`feat/single-package` branch, November 2026.

Status labels used below:

- **Available**: published on pub.dev (jx_ui 0.0.1 or 0.0.2).
- **In development**: on this branch, ships with jx_cli 0.0.3, not published yet.
- **Planned**: not started. Nothing in this state can be installed.

## Inventory

24 components. Each one has its own documentation page at
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
| `JxAvatar` | Data display | Available | 0.0.2 | `<img>` or `role=img` |
| `JxTooltip` | Data display | Available | 0.0.2 | `role=tooltip` |
| `JxKbd` | Data display | Available | 0.0.2 | `<kbd>` |
| `JxDataTable` | Data display | Available | 0.0.2 | `<table>` with `aria-sort` |
| `JxBreadcrumbs` | Navigation | Available | 0.0.2 | `<nav>` + `<ol>` |
| `JxPagination` | Navigation | Available | 0.0.2 | `<nav>`, links or buttons |
| `JxModal` + `JxModalTrigger` | Overlays | Available | 0.0.2 | `<dialog>` + command buttons |
| `JxDrawer` | Overlays | In development | 0.0.3 | `<dialog>` + command buttons |

## Findings and fixes

Fixed on this branch:

| Finding | Fix |
| --- | --- |
| The focus ring was copied in eight style constants and had drifted. | Shared tokens `focusRing`, `textStrong`, `surfaceBorder` in `styles.dart`, interpolated everywhere. |
| A disabled or loading `JxButton(href:)` still navigated. | It renders an `<a>` without `href`, with `role=link`, `aria-disabled` and `pe:none`. |
| `JxCard` always rendered an `h3`, breaking page outlines. | New `titleLevel` (2 to 6, default 3). |
| Text field, text area and select duplicated the label, hint and error markup. | Shared internal helper `jxField`. |
| No disclosure or side panel component. | New `JxAccordion` and `JxDrawer`, both native and JavaScript-free. |

Still open (documented as limitations on each page):

- Badge and alert tones have no dark-mode variants.
- `JxTooltip` is not linked with `aria-describedby`, and Escape does not dismiss it.
- `JxCheckbox` and `JxRadioGroup` have no hint or error message.
- Required fields have no visual marker.
- No indeterminate `JxProgress`.
- Modals and drawers depend on Invoker Commands (`command`, `commandfor`) and
  `closedby`, available in current browsers only.

## Missing components

| Component | Category | Why it is not there yet |
| --- | --- | --- |
| Tabs | Navigation | Needs arrow-key handling (roving focus): a client component. |
| Dropdown menu | Overlays | Planned on the Popover API once CSS anchor positioning is widely available. |
| Toast | Feedback | Needs a client-side queue and a live region. |
| Combobox | Forms | Text field with suggestions, for long option lists. |
| Indeterminate progress | Feedback | `JxProgress` without a value. |
| Errors on choices | Forms | Hint and error messages on checkboxes and radio groups. |

## Roadmap

1. **0.0.3** (this branch): single package, accordion, drawer, shared tokens,
   documentation per component, gallery and playground.
2. **Next**: dark variants for tones, tooltip `aria-describedby` and Escape,
   hint and error on choices, required marker, indeterminate progress.
3. **Later**: tabs, toast, dropdown menu, combobox.

## Quality checks

- `packages/jx_cli/test/ui/jx_ui_test.dart`: every class used by the
  components compiles with the default theme, and the core components render
  the expected markup and ARIA.
- `packages/jx_cli/test/ui/audit_test.dart`: the fixes above (link button,
  card heading level, shared field markup, accordion, drawer, modal close).
- The documentation site renders every preview with the real components, so a
  broken component breaks the site build.
