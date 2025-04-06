<template>
  <button
    type="button"
    class="app-button"
    :class="[
      buttonClasses,
      { invalid, 'app-button_rounded': rounded, 'app-button_minified': minified },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { IProps } from './types';

  const props = withDefaults(defineProps<IProps>(), {
    type: 'primary',
    size: 'small',
  });

  const emit = defineEmits(['click']);

  const buttonClasses = computed(() => `app-button_${props.size} app-button_${props.type}`);
  const handleClick = () => emit('click');
</script>

<style scoped lang="scss">
  @import './style';
</style>
