export type HTMLElementEvent<T extends HTMLElement> = Event & { target: T };
export type scaleValues = 12 | 13 | 14 | 15 | 16;

export interface ILayoutConfig {
  darkTheme: boolean;
  inputStyle: string;
  menuMode: string;
  theme: string;
  scale: scaleValues;
  activeMenuItem: string | null;
}

export interface ILayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}
