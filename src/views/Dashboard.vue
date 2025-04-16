<script setup>
import { useDashboardSwapy } from '@/shared/composables/useDashboardSwapy';

const { container, slottedItems } = useDashboardSwapy();
</script>

<template>
    <div class="grid grid-cols-12 gap-8" ref="container">
        <div 
            v-for="{ slotId, itemId, item: item } in slottedItems" 
            :key="slotId" 
            :class="item.cols" 
            :data-swapy-slot="slotId"
        >
            <component :is="item.component" :data-swapy-item="itemId" />
        </div>
    </div>
</template>
