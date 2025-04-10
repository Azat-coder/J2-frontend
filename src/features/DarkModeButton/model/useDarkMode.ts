import { useLocalStorage } from '@vueuse/core';

import { watchEffect, type Ref } from 'vue';

interface IUseDarkMode {
  isDarkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

export function useDarkMode(): IUseDarkMode {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = useLocalStorage('isDarkMode', prefersDark);

  const toggleDarkMode = () => {
    if (!document.startViewTransition) {
      executeDarkModeToggle();

      return;
    }

    document.startViewTransition(() => executeDarkModeToggle());
  };

  const executeDarkModeToggle = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  watchEffect(() => {
    if (isDarkMode.value) {
      document.documentElement?.classList.add('app-dark');
    } else {
      document.documentElement?.classList.remove('app-dark');
    }
  });

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
