<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <transition>
    <div
      v-if="isVisible"
      class="app-modal__wrapper"
      :class="[`y-${positionY}`, `x-${positionX}`]"
      @click.self="closeModal"
    >
      <div
        class="app-modal"
        :style="{ minWidth }"
      >
        <header class="app-modal__header">
          <p class="app-modal__title">{{ modalTitle }}</p>
          <button
            v-if="closeButton && closable"
            type="button"
            class="app-modal__close-btn"
            @click="closeModal"
          >
            <CrossIcon />
          </button>
        </header>
        <main
          class="app-modal__main"
          :class="{ separated: sectionSeparated }"
        >
          <slot name="main" />
        </main>
        <footer
          v-if="$slots.footer"
          class="app-modal__footer"
        >
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { watch } from 'vue';
  import CrossIcon from '@/shared/assets/icons/CrossIcon.vue';
  import type { IProps } from './types';

  const isVisible = defineModel<boolean>({ default: false });
  const props = withDefaults(defineProps<IProps>(), {
    closable: true,
    modalTitle: 'Закрыть модальное окно',
    positionY: 'center',
    positionX: 'center',
    minWidth: '30%',
  });
  const emit = defineEmits(['onOpen', 'onClose']);

  const closeModal = () => {
    if (props.closable) {
      isVisible.value = false;
    }
  };

  watch(isVisible, (newValue) => {
    if (newValue) {
      emit('onOpen');
    } else {
      emit('onClose');
    }
  });
</script>

<style scoped lang="scss">
  @import './style';
</style>
