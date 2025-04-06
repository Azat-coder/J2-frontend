<template>
  <ul class="layout-menu">
    <template
      v-for="(item, i) in model"
      :key="item"
    >
      <AppMenuItem
        :item="item"
        :index="i"
      />
    </template>
  </ul>
</template>

<script setup lang="ts">
  import { type IAppMenuItem } from '@/shared/ui/AppMenuItem';
  import { ref } from 'vue';
  import { AppMenuItem } from '@/shared/ui/AppMenuItem';
  import { menuItems } from '../assets';

  const model = ref<IAppMenuItem[]>(menuItems);
</script>

<style lang="scss">
  @import './style';
</style>
