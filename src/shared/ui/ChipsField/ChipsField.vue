<template>
  <div
    class="chips-field"
    :class="{ 'chips-field_invalid': invalid, 'chips-field_disabled': disabled }"
  >
    <div
      v-if="visibleItems && visibleItems.length"
      class="chips-field__row"
    >
      <button
        v-for="item of visibleItems"
        :key="item.id"
        type="button"
        class="chips-field__item"
        :class="{ 'chips-field__item_deleted': item.is_deleted }"
        :title="item.is_deleted ? 'Элемент удален' : ''"
      >
        <span class="chips-field__item-text">{{ getItemValue(item) }}</span>
        <button
          type="button"
          title="Удалить элемент"
          class="chips-field__btn chips-field__close-item-btn"
          :disabled="disabled"
          :class="{ 'chips-field__btn_disabled': disabled }"
          @click="handleItemRemove(item.id)"
        >
          <CrossIcon />
        </button>
      </button>

      <button
        v-if="itemsLengthMoreThanLimit"
        class="chips-field__show-more-btn"
        :disabled="disabled"
        type="button"
        :title="moreButtonTitle"
        @click="fullListVisible = !fullListVisible"
      >
        {{ moreButtonTitle }}
      </button>
    </div>
    <span
      v-else
      class="chips-field__placeholder"
    >
      {{ placeholder }}
    </span>

    <button
      type="button"
      title="Добавить элемент"
      :disabled="disabled"
      class="chips-field__btn chips-field__add-btn"
      :class="{ 'chips-field__btn_disabled': disabled }"
      @click="emit('onInitAdd')"
    >
      <PlusIcon />
    </button>
  </div>
</template>

<script setup lang="ts" generic="T extends Item">
  import { ref, computed } from 'vue';
  import CrossIcon from '@/shared/assets/icons/CrossIcon.vue';
  import PlusIcon from '@/shared/assets/icons/PlusIcon.vue';
  import type { IProps, Item } from './types';

  const items = defineModel<T[]>({ default: [] });
  const props = withDefaults(defineProps<IProps<T>>(), {
    limit: 5,
    placeholder: '',
    getItemValue: (item: T) => item?.name ?? '',
  });
  const emit = defineEmits(['onInitAdd']);

  const handleItemRemove = (id: number | string) => {
    items.value = [...items.value].filter((item) => item.id !== id);
  };

  const fullListVisible = ref(false);
  const itemsLengthMoreThanLimit = computed(() => items.value?.length > props.limit);
  const moreButtonTitle = computed(() => (fullListVisible.value ? 'Скрыть' : 'Показать ещё'));
  const visibleItems = computed(() => {
    return !fullListVisible.value && itemsLengthMoreThanLimit
      ? items.value.slice(0, props.limit)
      : items.value;
  });
</script>

<style scoped lang="scss">
  @import './style';
</style>
