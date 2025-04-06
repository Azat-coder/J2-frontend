<template>
  <div class="layout-topbar">
    <router-link
      to="/"
      class="layout-topbar-logo"
    >
      <span>Автозаказ</span>
    </router-link>

    <button
      type="button"
      class="p-link layout-menu-button layout-topbar-button"
      @click="toggleSidebar"
    >
      <i class="pi pi-bars" />
    </button>

    <button
      type="button"
      class="p-link layout-topbar-menu-button layout-topbar-button"
      @click="onTopBarMenuButton"
    >
      <i class="pi pi-ellipsis-v" />
    </button>

    <div
      class="layout-topbar-menu"
      :class="topbarMenuClasses"
    >
      <div class="flex items-center justify-center hover:bg-slate-50 layout-topbar-button">
        <div class="flex items-center justify-center scale-75">
          <DarkModeButton />
        </div>
        <span>Темная тема</span>
      </div>
      <button
        type="button"
        class="p-link layout-topbar-button"
        @click="onTopBarMenuButton()"
      >
        <i class="pi pi-calendar" />
        <span>Календарь</span>
      </button>
      <button
        type="button"
        class="p-link layout-topbar-button"
        @click="onTopBarMenuButton()"
      >
        <i class="pi pi-user"></i>
        <span>Профиль</span>
      </button>
      <button
        type="button"
        class="p-link layout-topbar-button"
        @click="onSettingsClick()"
      >
        <i class="pi pi-cog"></i>
        <span>Настройки</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  import { useRouter } from 'vue-router';
  import { useLayout } from '@/shared/composables/useLayout';
  import DarkModeButton from '@/features/DarkModeButton/DarkModeButton.vue';

  const { toggleSidebar } = useLayout();

  const outsideClickListener = ref<((event: MouseEvent) => void) | null>(null);
  const topbarMenuActive = ref(false);
  const router = useRouter();

  onMounted(() => {
    bindOutsideClickListener();
  });

  onBeforeUnmount(() => {
    unbindOutsideClickListener();
  });

  const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
  };
  const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/settings');
  };
  const topbarMenuClasses = computed(() => {
    return {
      'layout-topbar-menu-mobile-active': topbarMenuActive.value,
    };
  });

  const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
      outsideClickListener.value = (event: MouseEvent) => {
        if (isOutsideClicked(event)) {
          topbarMenuActive.value = false;
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
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(
      sidebarEl === (event.target as Node) ||
      sidebarEl?.contains(event.target as Node) ||
      topbarEl === (event.target as Node) ||
      topbarEl?.contains(event.target as Node)
    );
  };
</script>

<style lang="scss" scoped>
  @import './style';
</style>
