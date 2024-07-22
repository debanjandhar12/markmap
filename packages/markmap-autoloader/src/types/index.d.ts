import { JSItem, CSSItem } from '@debanjandhar12/markmap-common';
import { ITransformPlugin } from '@debanjandhar12/markmap-lib';

export interface AutoLoaderOptions {
  onReady?: () => void;
  transformPlugins?: Array<ITransformPlugin | (() => ITransformPlugin)>;
  baseJs: (string | JSItem)[];
  baseCss: (string | CSSItem)[];
  manual: boolean;
  toolbar: boolean;
  provider?: string | ((path: string) => string);
}
