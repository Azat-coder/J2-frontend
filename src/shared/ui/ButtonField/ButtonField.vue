<template>
  <button
    type="button"
    class="button-field"
    :disabled="disabled"
    :class="{ invalid }"
    @click="onClick"
  >
    <span
      v-if="title"
      class="button-field__content"
    >
      {{ title }}
    </span>
    <span
      v-else
      class="button-field__placeholder"
    >
      {{ placeholder }}
    </span>
    <PlusIcon />
  </button>
</template>

<script lang="ts" setup>
  import PlusIcon from '@/shared/assets/icons/PlusIcon.vue';
  import type { IProps } from './types';

  withDefaults(defineProps<IProps>(), {
    title: '',
    placeholder: 'Выберите значение',
  });
  const emit = defineEmits(['onClick', 'update']);

  const onClick = () => {
    emit('onClick');
  };
</script>

<style scoped lang="scss">
  @import './style';
</style>
