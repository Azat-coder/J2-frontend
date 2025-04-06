<template>
  <button
    class="node-btn"
    type="button"
    @click.stop="handleClick"
  >
    <MinusIcon v-if="isOpen" />
    <PlusIcon v-else />
  </button>
</template>

<script setup lang="ts">
  import PlusIcon from '@/shared/assets/icons/PlusIcon.vue';
  import MinusIcon from '@/shared/assets/icons/MinusIcon.vue';
  import type { IProps } from './types.ts';

  const props = defineProps<IProps>();

  const emit = defineEmits(['click']);

  const handleClick = () => {
    if (!props.isEmpty) {
      emit('click');
    }
  };
</script>

<style scoped lang="scss">
  @import './style';
</style>
