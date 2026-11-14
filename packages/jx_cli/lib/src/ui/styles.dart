/// Every JX class used by the UI components, written in full so `jx build`
/// and the builder find them when `jx_cli/ui` is listed under `packages:`.
library;

/// Visible keyboard focus shared by interactive components.
const focusRing =
    'focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2';

const buttonBase =
    'inline-flex ai:center jc:center gap:2 fw:semibold br:lg bw:1 '
    'cur:pointer us:none tr:all dur:150 td:none '
    'disabled:o:50 disabled:cur:not-allowed '
    'focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2';

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
    'flex fd:col gap:3 p:6 br:xl bw:1 bc:gray-100 bg:white sh:sm '
    'c:gray-900 dark:bg:gray-900 dark:bc:gray-700 dark:c:gray-100';

const cardTitle = 'fs:lg fw:semibold lh:tight';

const badgeBase =
    'inline-flex as:start ai:center px:2 py:[2px] br:full fs:xs fw:medium lh:none ws:nowrap';

const badgeTones = {
  'neutral': 'c:gray-700 bg:gray-100 dark:c:gray-100 dark:bg:gray-700',
  'info': 'c:blue-900 bg:blue-100',
  'success': 'c:green-900 bg:green-100',
  'warning': 'c:yellow-900 bg:yellow-100',
  'danger': 'c:red-900 bg:red-100',
};

const alertBase = 'flex fd:col gap:1 p:4 br:lg bw:1 bwl:4 fs:sm';

const alertTones = {
  'info': 'c:blue-900 bg:blue-100 bc:blue-300',
  'success': 'c:green-900 bg:green-100 bc:green-300',
  'warning': 'c:yellow-900 bg:yellow-100 bc:yellow-300',
  'danger': 'c:red-900 bg:red-100 bc:red-300',
};

const alertTitle = 'fw:semibold';

const fieldWrapper = 'flex fd:col gap:1';

const fieldLabel = 'fs:sm fw:medium c:gray-900 dark:c:gray-100';

const fieldInput =
    'w:full px:3 py:2 mnh:[40px] br:lg bw:1 bc:gray-300 bg:white c:gray-900 '
    'fs:sm tr:colors placeholder:c:gray-500 '
    'focus:ol:none focus:bc:blue-500 focus:ring:2 focus:ringc:blue-300 '
    'disabled:o:50 disabled:cur:not-allowed '
    'dark:bg:gray-900 dark:bc:gray-700 dark:c:gray-100';

const fieldInputInvalid = 'bc:red-500 focus:bc:red-500 focus:ringc:red-300';

const fieldHint = 'fs:xs c:gray-500';

const fieldError = 'fs:xs c:red-700';

const buttonFullWidth = 'w:full';

const cardDescription = 'fs:sm lh:relaxed c:gray-500';

const cardFooter =
    'flex wrap ai:center jc:end gap:2 pt:4 mt:1 bwt:1 bc:gray-100 dark:bc:gray-700';

const textArea = 'rsz:y mnh:[96px] lh:relaxed';

const selectWrapper = 'relative';

const selectInput = 'app:none pr:10 cur:pointer';

const selectChevron =
    'absolute top:0 right:0 flex ai:center h:full px:3 pe:none c:gray-500';

const choiceLabel =
    'flex ai:start gap:3 cur:pointer fs:sm c:gray-900 dark:c:gray-100';

const choiceInput =
    'shrink:0 w:4 h:4 mt:[2px] accent:blue-700 cur:pointer '
    'disabled:cur:not-allowed focus-visible:ol:2 focus-visible:olc:blue-500 '
    'focus-visible:olo:2';

const choiceText = 'flex fd:col gap:[2px]';

const choiceDescription = 'fs:xs c:gray-500';

const radioGroup = 'flex fd:col gap:3 bw:0 p:0 m:0';

const radioLegend = 'mb:1 fs:sm fw:medium c:gray-900 dark:c:gray-100';

const switchLabel =
    'inline-flex ai:center gap:3 cur:pointer fs:sm c:gray-900 dark:c:gray-100';

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

const progressHeader =
    'flex jc:between fs:sm fw:medium c:gray-900 dark:c:gray-100';

const progressTrack =
    'w:full h:2 br:full bg:gray-100 ov:hidden dark:bg:gray-700';

const progressBar = 'h:full br:full bg:blue-700 tr:all dur:300';

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
    'inline-flex ai:center px:2 py:[1px] br:md bw:1 bwb:2 bc:gray-300 '
    'bg:gray-100 ff:mono fs:xs fw:medium c:gray-900 '
    'dark:bg:gray-700 dark:bc:gray-500 dark:c:gray-100';

const breadcrumbList = 'flex wrap ai:center gap:2 fs:sm lst:none p:0 m:0';

const breadcrumbItem = 'inline-flex ai:center gap:2';

const breadcrumbLink =
    'c:gray-500 td:none br:sm hover:c:gray-900 hover:td:underline '
    'dark:hover:c:gray-100 focus-visible:ol:2 focus-visible:olc:blue-500 '
    'focus-visible:olo:2';

const breadcrumbCurrent = 'fw:medium c:gray-900 dark:c:gray-100';

const breadcrumbSeparator = 'c:gray-300 dark:c:gray-500';

const divider = 'w:full h:px bw:0 m:0 bg:gray-100 dark:bg:gray-700';

const dividerLabelled = 'flex ai:center gap:3 fs:xs fw:medium c:gray-500';

const dividerLine = 'grow:1 h:px bg:gray-100 dark:bg:gray-700';

const emptyState =
    'flex fd:col ai:center ta:center gap:3 px:6 py:10 br:xl bw:1 bs:dashed '
    'bc:gray-300 dark:bc:gray-700';

const emptyStateTitle = 'fs:base fw:semibold c:gray-900 dark:c:gray-100';

const emptyStateText = 'fs:sm lh:relaxed c:gray-500 mw:[28rem]';

const modal =
    'm:auto w:[calc(100%_-_2rem)] mh:[85vh] p:0 br:xl bw:1 bc:gray-100 '
    'bg:white c:gray-900 sh:2xl ov:auto '
    'backdrop:bg:[rgba(15,23,42,0.6)] backdrop:bblur:sm '
    'open:anim:fade-in motion-reduce:anim:none '
    'dark:bg:gray-900 dark:bc:gray-700 dark:c:gray-100';

const modalSizes = {'sm': 'mw:[24rem]', 'md': 'mw:[32rem]', 'lg': 'mw:[48rem]'};

const modalBody = 'flex fd:col gap:4 p:6';

const modalHeader = 'flex ai:start jc:between gap:4';

const modalTitle = 'fs:lg fw:semibold lh:tight';

const modalDescription = 'fs:sm lh:relaxed c:gray-500';

const modalClose =
    'inline-flex ai:center jc:center shrink:0 w:8 h:8 -mt:1 -mr:2 br:md bw:0 '
    'bg:transparent c:gray-500 cur:pointer tr:colors hover:bg:gray-100 '
    'hover:c:gray-900 dark:hover:bg:gray-700 dark:hover:c:gray-100 '
    'focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2';

const modalFooter = 'flex wrap ai:center jc:end gap:2 pt:2';

const tableWrapper =
    'w:full ovx:auto br:xl bw:1 bc:gray-100 bg:white dark:bg:gray-900 '
    'dark:bc:gray-700';

const tableWrapperSticky = 'mh:[28rem] ovy:auto';

const table = 'w:full bcol:collapse fs:sm ta:left c:gray-900 dark:c:gray-100';

const tableCaption =
    'cap:top px:4 py:3 ta:left fs:sm fw:semibold c:gray-900 dark:c:gray-100';

const tableHead = 'bg:gray-100 dark:bg:gray-700';

const tableHeaderCell =
    'px:4 py:3 fs:xs fw:semibold ws:nowrap c:gray-700 dark:c:gray-100';

const tableHeaderSticky = 'sticky top:0 z:10 bg:gray-100 dark:bg:gray-700';

const tableSortButton =
    'inline-flex ai:center gap:1 p:0 bw:0 bg:transparent c:current fw:semibold '
    'cur:pointer br:sm hover:c:gray-900 dark:hover:c:white '
    'focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2';

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
    'inline-flex ai:center jc:center mnw:[36px] h:9 px:2 br:md bw:1 '
    'td:none cur:pointer tr:colors '
    'focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2';

/// Colors of a page that is not the current one (exclusive with
/// [paginationCurrent], so the two never compete in the stylesheet).
const paginationIdle =
    'bc:transparent c:gray-700 bg:transparent hover:bg:gray-100 '
    'dark:c:gray-100 dark:hover:bg:gray-700';

const paginationCurrent = 'c:white bg:blue-700 bc:blue-700';

const paginationDisabled = 'o:50 pe:none';

const paginationGap =
    'inline-flex ai:center jc:center mnw:[36px] h:9 c:gray-500';
