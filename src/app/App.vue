<script setup lang="ts">
  import { computed, ref, watch, type Component } from 'vue';
  import { useRoute } from 'vue-router';
  import { AppTopbar } from '@/widgets/AppTopbar';
  import { AppSidebar } from '@/widgets/AppSidebar';
  import { AppNotifications } from '@/features/AppNotifications';

  const route = useRoute();
  const DynamicLayout = computed(() => route?.meta?.layout as Component | null);

  import { useLayout } from '@/shared/composables/useLayout';
  const { layoutConfig, layoutState, isSidebarActive } = useLayout();
  const outsideClickListener = ref<((event: MouseEvent) => void) | null>(null);

  watch(isSidebarActive, (newVal) => {
    if (newVal) {
      bindOutsideClickListener();
    } else {
      unbindOutsideClickListener();
    }
  });

  const containerClass = computed(() => {
    return {
      'layout-theme-light': layoutConfig.darkTheme.value === false,
      'layout-theme-dark': layoutConfig.darkTheme.value === true,
      'layout-overlay': layoutConfig.menuMode.value === 'overlay',
      'layout-static': layoutConfig.menuMode.value === 'static',
      'layout-static-inactive':
        layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
      'layout-overlay-active': layoutState.overlayMenuActive.value,
      'layout-mobile-active': layoutState.staticMenuMobileActive.value,
    };
  });
  const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
      outsideClickListener.value = (event: MouseEvent) => {
        if (isOutsideClicked(event)) {
          layoutState.overlayMenuActive.value = false;
          layoutState.staticMenuMobileActive.value = false;
          layoutState.menuHoverActive.value = false;
        }
      };
      document.addEventListener('click', outsideClickListener.value);
    }
  };
  const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
      document.removeEventListener('click', outsideClickListener.value);
      outsideClickListener.value = null;
    }
  };
  const isOutsideClicked = (event: MouseEvent) => {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(
      sidebarEl === (event.target as Node) ||
      sidebarEl?.contains(event.target as Node) ||
      topbarEl === (event.target as Node) ||
      topbarEl?.contains(event.target as Node)
    );
  };
</script>

<template>
  <component
    :is="DynamicLayout"
    v-if="DynamicLayout"
    :class="containerClass"
  >
    <template #header>
      <AppTopbar />
    </template>

    <template #sidebar>
      <AppSidebar />
    </template>

    <template #default>
      <router-view />
    </template>
  </component>
  <AppNotifications />
</template>
