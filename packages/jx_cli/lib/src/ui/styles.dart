/// Every JX class used by the UI components, written in full so `jx build`
/// and the builder find them when `jx_cli/ui` is listed under `packages:`.
library;

// Shared groups, interpolated into the constants below. Each one is a
// literal of its own, so the CLI and the builder still find its classes.

/// Visible keyboard focus shared by interactive components.
const focusRing =
    'focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2';

/// Main text color, in light and dark mode.
const textStrong = 'c:gray-900 dark:c:gray-100';

/// Hairline border of surfaces (cards, tables, dialogs).
const surfaceBorder = 'bw:1 bc:gray-100 dark:bc:gray-700';

const buttonBase =
    '$focusRing inline-flex ai:center jc:center gap:2 fw:semibold br:lg bw:1 cur:pointer us:none tr:all dur:150 td:none disabled:o:50 disabled:cur:not-allowed';

const buttonVariants = {
  'primary':
      'c:white bg:blue-700 bc:blue-700 hover:bg:blue-900 '
      'hover:bc:blue-900 active:sc:95',
  'secondary':
      'c:gray-900 bg:gray-100 bc:gray-100 hover:bg:gray-300 '
      'hover:bc:gray-300 active:sc:95 '
      'dark:c:gray-100 dark:bg:gray-700 dark:bc:gray-700',
  'outline':
      'c:gray-900 bg:transparent bc:gray-300 hover:bg:gray-100 '
      'active:sc:95 dark:c:gray-100 dark:bc:gray-500 dark:hover:bg:gray-700',
  'ghost':
      'c:gray-900 bg:transparent bc:transparent hover:bg:gray-100 '
      'dark:c:gray-100 dark:hover:bg:gray-700',
  'danger':
      'c:white bg:red-700 bc:red-700 hover:bg:red-900 '
      'hover:bc:red-900 active:sc:95',
};

const buttonSizes = {
  'sm': 'fs:sm px:3 py:1 mnh:[32px]',
  'md': 'fs:sm px:4 py:2 mnh:[40px]',
  'lg': 'fs:base px:6 py:3 mnh:[48px]',
};

const card =
    '$textStrong $surfaceBorder flex fd:col gap:3 p:6 br:xl bg:white sh:sm dark:bg:gray-900';

const cardTitle = 'fs:lg fw:semibold lh:tight';

const badgeBase =
    'inline-flex as:start ai:center px:2 py:[2px] br:full fs:xs fw:medium lh:none ws:nowrap';

const badgeTones = {
  'neutral': 'c:gray-700 bg:gray-100 dark:c:gray-100 dark:bg:gray-700',
  'info': 'c:blue-900 bg:blue-100 dark:c:blue-100 dark:bg:blue-900',
  'success': 'c:green-900 bg:green-100 dark:c:green-100 dark:bg:green-900',
  'warning': 'c:yellow-900 bg:yellow-100 dark:c:yellow-100 dark:bg:yellow-900',
  'danger': 'c:red-900 bg:red-100 dark:c:red-100 dark:bg:red-900',
};

const alertBase = 'flex fd:col gap:1 p:4 br:lg bw:1 bwl:4 fs:sm';

const alertTones = {
  'info':
      'c:blue-900 bg:blue-100 bc:blue-300 dark:c:blue-100 dark:bg:blue-900 dark:bc:blue-700',
  'success':
      'c:green-900 bg:green-100 bc:green-300 dark:c:green-100 dark:bg:green-900 dark:bc:green-700',
  'warning':
      'c:yellow-900 bg:yellow-100 bc:yellow-300 dark:c:yellow-100 dark:bg:yellow-900 dark:bc:yellow-700',
  'danger':
      'c:red-900 bg:red-100 bc:red-300 dark:c:red-100 dark:bg:red-900 dark:bc:red-700',
};

const alertTitle = 'fw:semibold';

const fieldWrapper = 'flex fd:col gap:1';

const fieldLabel = '$textStrong fs:sm fw:medium';

const fieldInput =
    '$textStrong w:full px:3 py:2 mnh:[40px] br:lg bw:1 bc:gray-300 bg:white fs:sm tr:colors placeholder:c:gray-500 focus:ol:none focus:bc:blue-500 focus:ring:2 focus:ringc:blue-300 disabled:o:50 disabled:cur:not-allowed dark:bg:gray-900 dark:bc:gray-700';

const fieldInputInvalid = 'bc:red-500 focus:bc:red-500 focus:ringc:red-300';

const fieldHint = 'fs:xs c:gray-500';

const fieldError = 'fs:xs c:red-700 dark:c:red-300';

/// Visual marker of a required field; the input carries `required` itself.
const fieldRequired = 'ml:1 c:red-700 dark:c:red-300';

const buttonFullWidth = 'w:full';

/// A disabled or loading button rendered as a link.
const buttonInactiveLink = 'o:50 cur:not-allowed pe:none';

const cardDescription = 'fs:sm lh:relaxed c:gray-500';

const cardFooter =
    'flex wrap ai:center jc:end gap:2 pt:4 mt:1 bwt:1 bc:gray-100 dark:bc:gray-700';

const textArea = 'rsz:y mnh:[96px] lh:relaxed';

const selectWrapper = 'relative';

const selectInput = 'app:none pr:10 cur:pointer';

const selectChevron =
    'absolute top:0 right:0 flex ai:center h:full px:3 pe:none c:gray-500';

const choiceLabel = '$textStrong flex ai:start gap:3 cur:pointer fs:sm';

const choiceInput =
    '$focusRing shrink:0 w:4 h:4 mt:[2px] accent:blue-700 cur:pointer disabled:cur:not-allowed';

const choiceText = 'flex fd:col gap:[2px]';

const choiceDescription = 'fs:xs c:gray-500';

const radioGroup = 'flex fd:col gap:3 bw:0 p:0 m:0';

const radioLegend = '$textStrong mb:1 fs:sm fw:medium';

const switchLabel = '$textStrong inline-flex ai:center gap:3 cur:pointer fs:sm';

const switchControl = 'relative inline-flex shrink:0 w:11 h:6';

const switchInput = 'peer sr-only';

const switchTrack =
    'absolute inset:0 br:full bg:gray-300 tr:colors dur:200 '
    'peer-checked:bg:blue-700 peer-disabled:o:50 '
    'peer-focus-visible:ol:2 peer-focus-visible:olc:blue-500 '
    'peer-focus-visible:olo:2 dark:bg:gray-700';

const switchThumb =
    'absolute top:[2px] left:[2px] w:5 h:5 br:full bg:white sh:sm pe:none '
    'tr:all dur:200 peer-checked:tx:5 motion-reduce:tr:none';

const spinner = 'inline-block shrink:0 anim:spin motion-reduce:anim:none';

const spinnerSizes = {'sm': 'w:4 h:4', 'md': 'w:5 h:5', 'lg': 'w:8 h:8'};

const progressWrapper = 'flex fd:col gap:1 w:full';

const progressHeader = '$textStrong flex jc:between fs:sm fw:medium';

const progressTrack =
    'w:full h:2 br:full bg:gray-100 ov:hidden dark:bg:gray-700';

const progressBar = 'h:full br:full bg:blue-700 tr:all dur:300';

/// Bar of a progress without a value: a third of the track, sliding.
const progressIndeterminate =
    'h:full w:1/3 br:full bg:blue-700 anim:indeterminate motion-reduce:anim:pulse';

const skeleton =
    'block br:md bg:gray-100 anim:pulse motion-reduce:anim:none dark:bg:gray-700';

const skeletonDefault = 'h:4 w:full';

const avatarBase =
    'inline-flex ai:center jc:center shrink:0 br:full ov:hidden fw:semibold '
    'us:none c:blue-900 bg:blue-100';

const avatarSizes = {
  'sm': 'w:8 h:8 fs:xs',
  'md': 'w:10 h:10 fs:sm',
  'lg': 'w:14 h:14 fs:lg',
};

const avatarImage = 'w:full h:full obf:cover';

const tooltipWrapper = 'group relative inline-flex';

const tooltipBubble =
    'absolute bottom:full left:1/2 -tx:1/2 mb:2 z:10 px:2 py:1 br:md fs:xs '
    'fw:medium ws:nowrap c:white bg:gray-900 sh:md pe:none invisible o:0 '
    'tr:all dur:150 group-hover:visible group-hover:o:100 '
    'group-focus-within:visible group-focus-within:o:100 dark:bg:gray-700';

const kbd =
    '$textStrong inline-flex ai:center px:2 py:[1px] br:md bw:1 bwb:2 bc:gray-300 bg:gray-100 ff:mono fs:xs fw:medium dark:bg:gray-700 dark:bc:gray-500';

const breadcrumbList = 'flex wrap ai:center gap:2 fs:sm lst:none p:0 m:0';

const breadcrumbItem = 'inline-flex ai:center gap:2';

const breadcrumbLink =
    '$focusRing c:gray-500 td:none br:sm hover:c:gray-900 hover:td:underline dark:hover:c:gray-100';

const breadcrumbCurrent = '$textStrong fw:medium';

const breadcrumbSeparator = 'c:gray-300 dark:c:gray-500';

const divider = 'w:full h:px bw:0 m:0 bg:gray-100 dark:bg:gray-700';

const dividerLabelled = 'flex ai:center gap:3 fs:xs fw:medium c:gray-500';

const dividerLine = 'grow:1 h:px bg:gray-100 dark:bg:gray-700';

const emptyState =
    'flex fd:col ai:center ta:center gap:3 px:6 py:10 br:xl bw:1 bs:dashed '
    'bc:gray-300 dark:bc:gray-700';

const emptyStateTitle = '$textStrong fs:base fw:semibold';

const emptyStateText = 'fs:sm lh:relaxed c:gray-500 mw:[28rem]';

const modal =
    '$textStrong $surfaceBorder m:auto w:[calc(100%_-_2rem)] mh:[85vh] p:0 br:xl bg:white sh:2xl ov:auto backdrop:bg:[rgba(15,23,42,0.6)] backdrop:bblur:sm open:anim:fade-in motion-reduce:anim:none dark:bg:gray-900';

const modalSizes = {'sm': 'mw:[24rem]', 'md': 'mw:[32rem]', 'lg': 'mw:[48rem]'};

const modalBody = 'flex fd:col gap:4 p:6';

const modalHeader = 'flex ai:start jc:between gap:4';

const modalTitle = 'fs:lg fw:semibold lh:tight';

const modalDescription = 'fs:sm lh:relaxed c:gray-500';

const modalClose =
    '$focusRing inline-flex ai:center jc:center shrink:0 w:8 h:8 -mt:1 -mr:2 br:md bw:0 bg:transparent c:gray-500 cur:pointer tr:colors hover:bg:gray-100 hover:c:gray-900 dark:hover:bg:gray-700 dark:hover:c:gray-100';

const modalFooter = 'flex wrap ai:center jc:end gap:2 pt:2';

const tableWrapper =
    '$surfaceBorder w:full ovx:auto br:xl bg:white dark:bg:gray-900';

const tableWrapperSticky = 'mh:[28rem] ovy:auto';

const table = '$textStrong w:full bcol:collapse fs:sm ta:left';

const tableCaption = '$textStrong cap:top px:4 py:3 ta:left fs:sm fw:semibold';

const tableHead = 'bg:gray-100 dark:bg:gray-700';

const tableHeaderCell =
    'px:4 py:3 fs:xs fw:semibold ws:nowrap c:gray-700 dark:c:gray-100';

const tableHeaderSticky = 'sticky top:0 z:10 bg:gray-100 dark:bg:gray-700';

const tableSortButton =
    '$focusRing inline-flex ai:center gap:1 p:0 bw:0 bg:transparent c:current fw:semibold cur:pointer br:sm hover:c:gray-900 dark:hover:c:white';

const tableRow = 'bwt:1 bc:gray-100 dark:bc:gray-700';

const tableRowStriped =
    'even:bg:gray-100 dark:even:bg:[rgba(255,255,255,0.04)]';

/// Row hover: the row is the group and its cells take the color, so the
/// highlight paints above the stripes whatever the rule order.
const tableRowHover = 'group';

const tableCellHover =
    'tr:colors group-hover:bg:blue-100 dark:group-hover:bg:gray-700';

/// Cell padding: use one of [tableCell] or [tableCellDense], never both.
const tableCell = 'px:4 py:3 va:middle ws:nowrap';

const tableCellDense = 'px:3 py:2 va:middle ws:nowrap';

const tableNumeric = 'ta:right tabular-nums';

const tableEmpty = 'px:4 py:10 ta:center c:gray-500';

const pagination = 'flex wrap ai:center gap:1 fs:sm lst:none p:0 m:0';

const paginationItem =
    '$focusRing inline-flex ai:center jc:center mnw:[36px] h:9 px:2 br:md bw:1 td:none cur:pointer tr:colors';

/// Colors of a page that is not the current one (exclusive with
/// [paginationCurrent], so the two never compete in the stylesheet).
const paginationIdle =
    'bc:transparent c:gray-700 bg:transparent hover:bg:gray-100 '
    'dark:c:gray-100 dark:hover:bg:gray-700';

const paginationCurrent = 'c:white bg:blue-700 bc:blue-700';

const paginationDisabled = 'o:50 pe:none';

const paginationGap =
    'inline-flex ai:center jc:center mnw:[36px] h:9 c:gray-500';

const accordion =
    '$surfaceBorder flex fd:col br:xl ov:hidden bg:white dark:bg:gray-900';

const accordionItem = 'group bwt:1 bc:gray-100 first:bwt:0 dark:bc:gray-700';

const accordionSummary =
    '$focusRing $textStrong flex ai:center jc:between gap:4 px:5 py:4 fw:semibold cur:pointer lst:none us:none tr:colors hover:bg:gray-100 dark:hover:bg:gray-700';

const accordionChevron =
    'shrink:0 w:4 h:4 c:gray-500 tr:all dur:200 group-open:rot:180 motion-reduce:tr:none';

const accordionPanel = 'px:5 pb:5 fs:sm lh:relaxed c:gray-700 dark:c:gray-300';

const drawer =
    '$textStrong $surfaceBorder fixed my:0 p:0 w:[min(24rem,100%)] mw:full h:[100dvh] mh:[100dvh] bg:white sh:2xl ov:auto backdrop:bg:[rgba(15,23,42,0.6)] backdrop:bblur:sm motion-reduce:anim:none dark:bg:gray-900';

const drawerSides = {
  'right': 'ml:auto mr:0 bwr:0 bwt:0 bwb:0 open:anim:slide-in-right',
  'left': 'ml:0 mr:auto bwl:0 bwt:0 bwb:0 open:anim:slide-in-left',
};

const drawerBody = 'flex fd:col gap:4 p:6 mnh:full';

const drawerFooter = 'flex wrap ai:center jc:end gap:2 mt:auto pt:4';

const tabs = 'flex fd:col gap:4';

const tabList =
    'flex ai:end gap:1 bwb:1 bc:gray-100 ovx:auto dark:bc:gray-700';

const tabBase =
    '$focusRing inline-flex ai:center gap:2 shrink:0 px:4 py:2 mnh:[40px] -mb:px bw:0 bwb:2 bg:transparent fs:sm fw:medium ws:nowrap cur:pointer tr:colors disabled:o:50 disabled:cur:not-allowed';

/// Tab colors: one of [tabIdle] or [tabSelected], never both.
const tabIdle =
    'bc:transparent c:gray-500 hover:c:gray-900 hover:bc:gray-300 dark:hover:c:gray-100';

const tabSelected = 'bc:blue-700 c:blue-700 dark:c:blue-300 dark:bc:blue-300';

const tabPanel = '$focusRing br:md fs:sm lh:relaxed';

const menu = 'group relative inline-block';

const menuSummary = 'lst:none';

const menuList =
    '$surfaceBorder absolute z:20 top:full mt:2 flex fd:col mnw:[12rem] p:1 br:lg bg:white sh:lg lst:none m:0 group-open:anim:fade-in motion-reduce:anim:none dark:bg:gray-900';

const menuAlign = {'start': 'left:0', 'end': 'right:0'};

const menuItem =
    '$focusRing flex ai:center gap:2 w:full px:3 py:2 br:md bw:0 bg:transparent fs:sm ta:left td:none cur:pointer tr:colors hover:bg:gray-100 dark:hover:bg:gray-700 disabled:o:50 disabled:cur:not-allowed';

const menuItemTones = {
  'normal': 'c:gray-900 dark:c:gray-100',
  'danger': 'c:red-700 dark:c:red-300',
};

const menuSeparator = 'h:px my:1 bg:gray-100 dark:bg:gray-700';

const toastRegion =
    'fixed z:50 flex fd:col gap:3 w:[min(24rem,calc(100%_-_2rem))] pe:none';

const toastPositions = {
  'bottomEnd': 'bottom:4 right:4',
  'bottomStart': 'bottom:4 left:4',
  'topEnd': 'top:4 right:4',
  'topStart': 'top:4 left:4',
};

const toast =
    '$textStrong $surfaceBorder flex ai:start gap:3 p:4 br:lg bwl:4 bg:white sh:lg fs:sm pe:auto anim:slide-up motion-reduce:anim:none dark:bg:gray-900';

const toastTones = {
  'neutral': 'bc:gray-300',
  'info': 'bc:blue-500',
  'success': 'bc:green-500',
  'warning': 'bc:yellow-500',
  'danger': 'bc:red-500',
};

const toastBody = 'flex fd:col gap:1 grow:1 mnw:0';

const toastTitle = 'fw:semibold';

const toastText = 'lh:relaxed c:gray-700 dark:c:gray-300';
