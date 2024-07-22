declare interface Window {
  mm: import('@debanjandhar12/markmap-view').Markmap;
  markmap: typeof import('@debanjandhar12/markmap-toolbar') &
    typeof import('@debanjandhar12/markmap-view');
}
