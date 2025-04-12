import { defineStore } from 'pinia';
import { ref, markRaw } from 'vue';

import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';

export const useDashboardStore = defineStore('dashboard', () => {
    const dashboardItems = ref([
        {
            id: 'a',
            slot: 1,
            component: markRaw(RecentSalesWidget),
            cols: 'col-span-12 xl:col-span-6'
        },
        {
            id: 'b',
            slot: 2,
            component: markRaw(BestSellingWidget),
            cols: 'col-span-12 xl:col-span-6'
        },
        {
            id: 'c',
            slot: 3,
            component: markRaw(RevenueStreamWidget),
            cols: 'col-span-12 xl:col-span-6'
        },
        {
            id: 'd',
            slot: 4,
            component: markRaw(NotificationsWidget),
            cols: 'col-span-12 xl:col-span-6'
        }
    ]);

    const updateItemSlot = (id, newSlot) => {
        const item = dashboardItems.value.find((i) => i.id === id);
        if (item) item.slot = newSlot;
    };

    const setItems = (items) => {
        dashboardItems.value = items;
    };

    return {
        dashboardItems,
        updateItemSlot,
        setItems
    };
});
