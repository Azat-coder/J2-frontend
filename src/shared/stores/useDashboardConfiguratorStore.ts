import { defineStore } from "pinia";
import { ref } from "vue";

export const useDashboardConfiguratorStore = defineStore('dashboardConfigurator', () => {
    const isDashboardOpened = ref(false);

    const open = () => {
        isDashboardOpened.value = true;
    };
    const close = () => isDashboardOpened.value = false;
    const toggle = () => isDashboardOpened.value = !isDashboardOpened.value;

    return {
        isDashboardOpened,
        open,
        close,
        toggle
    };
});