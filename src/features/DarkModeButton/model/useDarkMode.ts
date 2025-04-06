import { useLocalStorage } from '@vueuse/core';

import { watchEffect, type Ref } from 'vue';

interface IUseDarkMode {
  isDarkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

export function useDarkMode(): IUseDarkMode {
  const isDarkMode = useLocalStorage('isDarkMode', false);

  const toggleDarkMode = () => {
    // @ts-expect-error The ViewTransition api is still a "Candidate recommandation", so it's not embedded in TSs' definition yet.
    if (!document.startViewTransition) {
      executeDarkModeToggle();

      return;
    }
    // @ts-expect-error The ViewTransition api is still a "Candidate recommandation", so it's not embedded in TSs' definition yet.
    document.startViewTransition(() => executeDarkModeToggle(event));
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
