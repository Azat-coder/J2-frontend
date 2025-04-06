<template>
  <label
    class="app-checkbox"
    :class="{ 'app-checkbox_checked': checked, 'app-checkbox_disabled': disabled }"
  >
    <CheckIcon v-if="modelValue" />
    <input
      :id="id"
      v-model="checked"
      :disabled="disabled"
      class="app-checkbox__input"
      type="checkbox"
      name="app-checkbox"
    />
  </label>
</template>

<script setup lang="ts">
  import CheckIcon from '@/shared/assets/icons/CheckIcon.vue';
  import type { IProps } from './types';

  defineProps<IProps>();
  const checked = defineModel<boolean>();
</script>

<style scoped lang="scss">
  @import './style';
</style>
