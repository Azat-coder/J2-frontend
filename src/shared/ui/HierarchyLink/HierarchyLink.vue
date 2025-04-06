<template>
  <span
    v-for="(lvl, i) in levels"
    :key="lvl"
    class="hierarchy-link"
    :class="{
      'hierarchy-link__last': isLastLineStyle(i),
      'hierarchy-link__right-line': isRightLineStyle(i),
      'hierarchy-link__hidden': isFirstLinesHidden(i),
    }"
    :style="{ left: `${getOffset(lvl)}px` }"
  />
</template>

<script setup lang="ts">
  import { computed, toRefs } from 'vue';
  import type { IProps } from './types.ts';

  const props = withDefaults(defineProps<IProps>(), {
    level: 0,
  });
  const { level, isLastRowOnLevel, isRestRowsHasNodes } = toRefs(props);

  const levels = computed(() => {
    const res = [];

    for (let i = 0; i < level.value; i += 1) {
      res.push(i + 1);
    }

    return res;
  });

  const getOffset = (lvl: number) => (lvl === 1 ? 15 : lvl * 18 - 3);
  const isLastLineLvl = (index: number) => !levels.value[index + 1];
  const isFirstLinesHidden = (index: number) => isRestRowsHasNodes.value && !isLastLineLvl(index);
  const isLastLineStyle = (index: number) => isLastRowOnLevel.value && isLastLineLvl(index);
  const isRightLineStyle = (index: number) => !isLastRowOnLevel.value && isLastLineLvl(index);
</script>

<style scoped lang="scss">
  @import './style';
</style>
