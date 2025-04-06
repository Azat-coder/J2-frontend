<template>
  <li
    :class="{
      'layout-root-menuitem': root,
      'active-menuitem': isActiveMenu,
    }"
  >
    <div
      v-if="root && item.visible !== false"
      class="layout-menuitem-root-text"
    >
      {{ item.label }}
    </div>
    <a
      v-if="(!item.to || item.items) && item.visible !== false"
      :href="item.url"
      :class="item.class"
      :target="item.target"
      tabindex="0"
      @click="itemClick($event, item)"
    >
      <i
        :class="item.icon"
        class="layout-menuitem-icon"
      ></i>
      <span class="layout-menuitem-text">{{ item.label }}</span>
      <i
        v-if="item.items"
        class="pi pi-fw pi-angle-down layout-submenu-toggler"
      ></i>
    </a>
    <router-link
      v-if="item.to && !item.items && item.visible !== false"
      :class="[item.class, { 'active-route': checkActiveRoute(item) }]"
      tabindex="0"
      :to="item.to"
      @click="itemClick($event, item)"
    >
      <i
        :class="item.icon"
        class="layout-menuitem-icon"
      ></i>
      <span class="layout-menuitem-text">{{ item.label }}</span>
      <i
        v-if="item.items"
        class="pi pi-fw pi-angle-down layout-submenu-toggler"
      />
      <span
        v-if="item.removable"
        class="pl-4"
        >x</span
      >
    </router-link>
    <Transition
      v-if="item.items && item.visible !== false"
      name="layout-submenu"
    >
      <ul
        v-show="root ? true : isActiveMenu"
        class="layout-submenu"
      >
        <app-menu-item
          v-for="(child, i) in item.items"
          :key="`${child.label + i}`"
          :index="i"
          :item="child"
          :parent-item-key="itemKey"
          :root="false"
        />
      </ul>
    </Transition>
  </li>
</template>

<script setup lang="ts">
  import type { IAppMenuItem } from '../model';
  import { ref, onBeforeMount, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useLayout } from '@/shared/composables/useLayout';

  interface Props {
    item: IAppMenuItem;
    index: number;
    root: boolean;
    parentItemKey: string | null;
  }

  const props = withDefaults(defineProps<Props>(), {
    item: () => ({ label: '', items: [{ label: '', icon: '', to: '' }] }),
    index: 0,
    root: true,
    parentItemKey: '',
  });

  const route = useRoute();
  const { layoutConfig, layoutState, setActiveMenuItem, toggleSidebar } = useLayout();
  const { overlayMenuActive, staticMenuMobileActive } = layoutState;

  const isActiveMenu = ref(false);
  const itemKey = ref<string | null>(null);

  onBeforeMount(() => {
    itemKey.value = props.parentItemKey
      ? props.parentItemKey + '-' + props.index
      : String(props.index);

    const activeItem = layoutConfig.activeMenuItem.value;

    isActiveMenu.value =
      activeItem === itemKey.value || activeItem
        ? activeItem.startsWith(itemKey.value + '-')
        : false;
  });

  watch(
    () => layoutConfig.activeMenuItem.value,
    (newVal) => {
      if (newVal) {
        isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
      }
    }
  );

  const itemClick = (event: MouseEvent, item: IAppMenuItem) => {
    const element = event.target as HTMLAnchorElement;
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if ((item.to || item.url) && (staticMenuMobileActive.value || overlayMenuActive.value)) {
      toggleSidebar();
    }

    const foundItemKey = item.items
      ? isActiveMenu.value
        ? props.parentItemKey
        : itemKey.value
      : itemKey.value;

    foundItemKey ? setActiveMenuItem(foundItemKey) : null;

    if (element?.classList.contains('pl-4')) {
      item.visible = false;
    }
  };

  const checkActiveRoute = (item: IAppMenuItem) => {
    return route.path === item.to;
  };
</script>

<style lang="scss">
  .layout-submenu-enter-from,
  .layout-submenu-leave-to {
    max-height: 0;
  }
  .layout-submenu-enter-to,
  .layout-submenu-leave-from {
    max-height: 1000px;
  }
  .layout-submenu-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
  }
  .layout-submenu-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
  }
</style>
