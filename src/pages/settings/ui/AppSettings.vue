<template>
  <h2 class="text-center">Настройки приложения</h2>
  <div class="grid gap-2">
    <div class="col-12 md:col-6">
      <Card class="card p-fluid flex gap-8 flex-wrap">
        <template #content>
          <dark-mode-button />
          <scales-select />
        </template>
      </Card>
      <div class="card p-fluid"></div>
    </div>
    <div class="col-12 md:col-6">
      <Card class="card p-fluid h-full"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Card from 'primevue/card';
  import { DarkModeButton } from '@/features/DarkModeButton';
  import { ScalesSelect } from '@/features/ScalesSelect';
</script>
