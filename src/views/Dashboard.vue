<script setup>
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
import StatsWidget from '@/components/dashboard/StatsWidget.vue';
import { createSwapy } from 'swapy';
import { onMounted, onUnmounted, ref } from 'vue';

const swapy = ref(null);
const container = ref();

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
        <StatsWidget />
        <div class="col-span-12 xl:col-span-6" data-swapy-slot="1">
            <RecentSalesWidget data-swapy-item="a" />
        </div>
        <div class="col-span-12 xl:col-span-6" data-swapy-slot="2">
            <BestSellingWidget data-swapy-item="b" />
        </div>
        <div class="col-span-12 xl:col-span-6" data-swapy-slot="3">
            <RevenueStreamWidget data-swapy-item="c" />
        </div>
        <div class="col-span-12 xl:col-span-6" data-swapy-slot="4">
            <NotificationsWidget data-swapy-item="d" />
        </div>
    </div>
</template>
