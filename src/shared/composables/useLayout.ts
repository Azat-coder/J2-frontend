import { toRefs, reactive, computed } from 'vue';
import type { ToRefs, ComputedRef } from 'vue';
import { type scaleValues, type ILayoutConfig, type ILayoutState } from '../model';

interface IUseLayout {
  layoutConfig: ToRefs<ILayoutConfig>;
  layoutState: ToRefs<ILayoutState>;
  setScale: (scale: scaleValues) => void;
  toggleSidebar: () => void;
  isSidebarActive: ComputedRef<boolean>;
  isDarkTheme: ComputedRef<boolean>;
  setActiveMenuItem: (item: string) => void;
}

const layoutConfig = reactive<ILayoutConfig>({
  darkTheme: false,
  inputStyle: 'outlined',
  menuMode: 'static',
  theme: 'aura-light-green',
  scale: 14,
  activeMenuItem: null,
});

const layoutState = reactive<ILayoutState>({
  staticMenuDesktopInactive: false,
  overlayMenuActive: false,
  profileSidebarVisible: false,
  configSidebarVisible: false,
  staticMenuMobileActive: false,
  menuHoverActive: false,
});

export function useLayout(): IUseLayout {
  const setScale = (scale: scaleValues) => {
    layoutConfig.scale = scale;
  };

  const setActiveMenuItem = (item: string) => {
    layoutConfig.activeMenuItem = item;
  };

  const toggleSidebar = () => {
    if (layoutConfig.menuMode === 'overlay') {
      layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
    }

    if (window.innerWidth > 991) {
      layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
    } else {
      layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
    }
  };

  const isSidebarActive = computed<boolean>(
    () => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive
  );

  const isDarkTheme = computed<boolean>(() => layoutConfig.darkTheme);

  return {
    layoutConfig: toRefs(layoutConfig),
    layoutState: toRefs(layoutState),
    setScale,
    toggleSidebar,
    isSidebarActive,
    isDarkTheme,
    setActiveMenuItem,
  };
}
