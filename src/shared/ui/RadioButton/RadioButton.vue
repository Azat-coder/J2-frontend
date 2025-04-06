<template>
  <label class="radio-btn">
    <input
      :id="`${id}`"
      type="radio"
      :value="value"
      :disabled="disabled"
      :checked="checked"
      :name="name"
      class="radio-btn__input"
      @input="onChange"
    />
    <span
      class="radio-btn__checkmark"
      :class="{ disabled }"
    />
  </label>
</template>

<script lang="ts" setup>
  import type { IProps } from './types';

  defineModel<IProps['value']>();

  withDefaults(defineProps<IProps>(), {
    value: '',
  });
  const emit = defineEmits(['update:modelValue']);

  const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  };
</script>

<style scoped lang="scss">
  @import './style';
</style>
