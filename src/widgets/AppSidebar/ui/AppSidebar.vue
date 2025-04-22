<script setup>
import { AppMenu } from '@/features/AppMenu';
import { useDashboardConfiguratorStore } from '@/shared/stores/useDashboardConfiguratorStore';
import { DashboardConfigurator } from '@/features/DashboardConfigurator';
import { computed } from "vue";

const dashboardConfiguratorStore = useDashboardConfiguratorStore();
const sidebarWidth = computed(() =>
  dashboardConfiguratorStore.isDashboardOpened ? '45rem' : '20rem'
);
</script>

<template>
    <div class="layout-sidebar" :style="{ width: sidebarWidth }">
        <div v-if="dashboardConfiguratorStore.isDashboardOpened">
            <h3 class="text-center">Режим редактирования</h3>
            <DashboardConfigurator />
        </div>
        <app-menu v-else></app-menu>
    </div>
</template>

<style lang="scss" scoped>
.layout-sidebar {
    position: fixed;
    height: calc(100vh - 8rem);
    z-index: 999;
    overflow-y: auto;
    user-select: none;
    top: 6rem;
    left: 2rem;
    transition:
        transform var(--layout-section-transition-duration),
        left var(--layout-section-transition-duration),
        width var(--layout-section-transition-duration);
    background-color: var(--surface-overlay);
    border-radius: var(--content-border-radius);
    padding: 0.5rem 1.5rem;
}
</style>
