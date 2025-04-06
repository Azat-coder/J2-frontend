export interface IAppPageRouteItem {
  label: string;
  icon: string;
  to?: string;
  class?: string;
  url?: string;
  target?: string;
}

export interface IAppMenuItem {
  label: string;
  icon?: string;
  items?: IAppPageRouteItem[];
  disabled?: boolean;
  visible?: boolean;
  to?: string;
  class?: string;
  url?: string;
  target?: string;
  removable?: boolean;
}
