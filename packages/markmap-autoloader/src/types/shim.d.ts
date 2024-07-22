declare interface Window {
  markmap: typeof import('@debanjandhar12/markmap-lib') &
    typeof import('@debanjandhar12/markmap-view') &
    typeof import('@debanjandhar12/markmap-toolbar') & {
      autoLoader?: Partial<import('.').AutoLoaderOptions>;
    };
}
