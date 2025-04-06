<template>
  <Teleport to="body">
    <div
      ref="popup"
      class="app-popup"
      :style="popupPositionStyles"
      @click.stop
    >
      <header
        v-if="$slots.header"
        class="app-popup__header"
      >
        <slot name="header" />
      </header>
      <main class="app-popup__main">
        <slot />
      </main>
      <footer
        v-if="$slots.footer"
        class="app-popup__footer"
      >
        <slot name="footer" />
      </footer>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import { ref, reactive, watchEffect, computed, onMounted, onBeforeUnmount } from 'vue';
  import { useElementBounding, useWindowSize } from '@vueuse/core';
  import type { IProps } from './types.ts';

  const popupGap = 14;

  const visible = defineModel<boolean>({ default: false });
  const props = withDefaults(defineProps<IProps>(), {
    xPosition: 'right',
    yPosition: 'bottom',
  });
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const popup = ref<HTMLElement>();
  const position = reactive({
    x: props.xPosition,
    y: props.yPosition,
  });

  const parentParams = computed(() => useElementBounding(props.parent));
  const parentLeft = computed(() => parentParams.value.left.value);
  const popupParams = computed(() => useElementBounding(popup.value));
  const popupLeftOffsetByParent = computed(
    () => parentLeft.value - (popupParams.value.width.value - parentParams.value.width.value)
  );
  const popupTopOffsetByParent = computed(
    () => parentParams.value.top.value - popupParams.value.height.value
  );
  const popupPositionStyles = computed(() => {
    const left =
      position.x === 'right' ? `${parentLeft.value}px` : `${popupLeftOffsetByParent.value}px`;

    const top =
      position.y === 'bottom'
        ? `${parentParams.value.bottom.value + popupGap}px`
        : `${popupTopOffsetByParent.value - popupGap}px`;

    return { left, top };
  });

  // dynamic change left/right, top/bottom when some popup border is outside viewport
  watchEffect(() => {
    const reserve = 10;

    if (props.xPosition === 'right') {
      position.x =
        parentLeft.value + popupParams.value.width.value + reserve > windowWidth.value
          ? 'left'
          : 'right';
    }

    if (props.xPosition === 'left') {
      position.x = popupLeftOffsetByParent.value - reserve < 0 ? 'right' : 'left';
    }

    if (props.yPosition === 'bottom') {
      position.y =
        parentParams.value.bottom.value + popupParams.value.height.value + popupGap + reserve >
        windowHeight.value
          ? 'top'
          : 'bottom';
    }

    if (props.yPosition === 'top') {
      position.y = popupTopOffsetByParent.value - reserve < 0 ? 'bottom' : 'top';
    }
  });

  const hidePopup = () => {
    visible.value = false;
  };

  onMounted(() => {
    if (props.closable) {
      // без таймаута сразу обрабатывает клик и скрывает элемент
      setTimeout(() => {
        document.addEventListener('click', hidePopup);
      });
    }
  });

  onBeforeUnmount(() => {
    if (props.closable) {
      document.removeEventListener('click', hidePopup);
    }
  });
</script>

<style scoped lang="scss">
  @import './style';
</style>
