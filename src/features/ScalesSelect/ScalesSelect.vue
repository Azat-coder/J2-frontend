<template>
  <section class="flex align-items-center justify-content-between surface-border">
    <span class="text-xl font-semibold mr-4">Размер шрифта</span>
    <div
      class="flex align-items-center gap-2 border-1 surface-border py-1 px-2"
      style="border-radius: 30px"
    >
      <Button
        icon="pi pi-minus"
        text
        rounded
        :disabled="layoutConfig.scale.value === scales[0]"
        @click="decrementScale"
      />
      <i
        v-for="s in scales"
        :key="s"
        :class="[
          'pi pi-circle-fill text-sm text-200',
          { 'text-lg text-primary': s === layoutConfig.scale.value },
        ]"
      />
      <Button
        icon="pi pi-plus"
        text
        rounded
        :disabled="layoutConfig.scale.value === scales[scales.length - 1]"
        @click="incrementScale"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Button from 'primevue/button';
  import { ref } from 'vue';
  import { useLayout } from '@/shared/composables/useLayout';
  import type { scaleValues } from '@/shared/model';

  const { setScale, layoutConfig } = useLayout();
  const scales = ref<scaleValues[]>([12, 13, 14, 15, 16]);

  const decrementScale = () => {
    setScale((layoutConfig.scale.value - 1) as scaleValues);
    applyScale();
  };
  const incrementScale = () => {
    setScale((layoutConfig.scale.value + 1) as scaleValues);
    applyScale();
  };
  const applyScale = () => {
    document.documentElement.style.fontSize = layoutConfig.scale.value + 'px';
  };
</script>
