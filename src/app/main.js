import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import Aura from '@primevue/themes/aura';
import { pinia, router } from './providers';
import './index.css';
import { i18n } from '@/shared/lib/localization';

createApp(App)
  .use(pinia)
  .use(i18n)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.app-dark',
        cssLayer: false,
      },
    },
  })
  .mount('#app');
