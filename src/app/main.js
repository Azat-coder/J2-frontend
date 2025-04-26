import { createApp } from 'vue';
import App from './App.vue';
import { pinia, router } from './providers';
import VueDraggableGrid from '@noction/vue-draggable-grid'
import '@noction/vue-draggable-grid/styles'

import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import './assets/styles.scss';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(VueDraggableGrid)
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
