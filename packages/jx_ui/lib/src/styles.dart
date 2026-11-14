/// Every JX class used by `jx_ui`, written in full so `jx build` and
/// `jx_builder` find them when the package is listed under `packages:`.
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
    'inline-flex ai:center px:2 py:[2px] br:full fs:xs fw:medium lh:none ws:nowrap';

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
