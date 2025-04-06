<template>
  <input
    v-model="localValue"
    :type="type"
    :disabled="disabled"
    :maxlength="maxLength"
    class="app-input"
    :class="[inputClasses, { invalid }]"
    @input="handleInputEvent"
  />
</template>

<script setup lang="ts">
  import { computed, toRefs, watch } from 'vue';
  import type { IProps } from './types';

  const localValue = defineModel<string | number>({ default: '' });

  const props = withDefaults(defineProps<IProps>(), {
    size: 'large',
    type: 'text',
  });
  const { size, type, integerMaxLength, fractionalMaxLength } = toRefs(props);

  const emit = defineEmits(['onInput']);

  const inputClasses = computed(() => `app-input_${size.value}`);

  const handleInputEvent = () => {
    emit('onInput');
  };

  watch(localValue, (newValue) => {
    const tempValue = `${newValue}`;

    if (type.value === 'number') {
      localValue.value = integerMaxLength.value
        ? tempValue.slice(0, integerMaxLength.value)
        : tempValue;

      if (tempValue.includes('.')) {
        let [start, end] = String(localValue.value).split('.');
        start = integerMaxLength.value ? start.slice(0, integerMaxLength.value) : start;
        end = end && fractionalMaxLength ? end.slice(0, fractionalMaxLength.value) : '';
        localValue.value = `${start}.${end}`;
      }
    }
  });
</script>

<style scoped lang="scss">
  @import './style';
</style>
