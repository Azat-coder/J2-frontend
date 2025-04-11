<script setup>
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
import { createSwapy } from 'swapy';
import { onMounted, onUnmounted, ref } from 'vue';

const swapy = ref(null);
const container = ref();
const dashboardItems = ref([
    {
        id: 'a',
        slot: 1,
        component: RecentSalesWidget,
        cols: 'col-span-12 xl:col-span-6'
    },
    {
        id: 'b',
        slot: 2,
        component: BestSellingWidget,
        cols: 'col-span-12 xl:col-span-6'
    },
    {
        id: 'c',
        slot: 3,
        component: RevenueStreamWidget,
        cols: 'col-span-12 xl:col-span-6'
    },
    {
        id: 'd',
        slot: 4,
        component: NotificationsWidget,
        cols: 'col-span-12 xl:col-span-6'
    }
]);

onMounted(() => {
    if (container.value) {
        swapy.value = createSwapy(container.value);

        swapy.value.onSwap((event) => {
            console.log('swap', event);
        });
    }
});

onUnmounted(() => {
    swapy.value?.destroy();
    container.value = null;
});
</script>

<template>
    <div class="grid grid-cols-12 gap-8" ref="container">
        <div v-for="item in dashboardItems" :key="item.id" :class="item.cols" :data-swapy-slot="item.slot">
            <component :is="item.component" :data-swapy-item="item.id" />
        </div>
    </div>
</template>
