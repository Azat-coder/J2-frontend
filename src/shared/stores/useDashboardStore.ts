import { defineStore } from 'pinia';
import { ref, markRaw } from 'vue';

import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
import OrdersWidget from '@/components/dashboard/OrdersWidget.vue';
import RevenueWidget from '@/components/dashboard/RevenueWidget.vue';
import CommentsWidget from '@/components/dashboard/CommentsWidget.vue';
import ClientsWidget from '@/components/dashboard/ClientsWidget.vue';

export const useDashboardStore = defineStore('dashboard', () => {
    const dashboardItemsList = ref([
        {
            id: 'girlsbyage',
            component: markRaw(RecentSalesWidget),
            cols: 'col-span-12 xl:col-span-6',
        },
        {
            id: 'girlsbynationality',
            component: markRaw(BestSellingWidget),
            cols: 'col-span-12 xl:col-span-6',
        },
        {
            id: 'ccdf',
            component: markRaw(RevenueStreamWidget),
            cols: 'col-span-12 xl:col-span-6',
        },
        {
            id: 'girlsbyweight',
            component: markRaw(NotificationsWidget),
            cols: 'col-span-12 xl:col-span-6',
        },
        {
            id: 'orders',
            component: markRaw(OrdersWidget),
            cols: 'col-span-12 lg:col-span-6 xl:col-span-3',
        },
        {
            id: 'revenue',
            component: markRaw(RevenueWidget),
            cols: 'col-span-12 lg:col-span-6 xl:col-span-3',
        },
        {
            id: 'comments',
            component: markRaw(CommentsWidget),
            cols: 'col-span-12 lg:col-span-6 xl:col-span-3',
        },
        {
            id: 'clients',
            component: markRaw(ClientsWidget),
            cols: 'col-span-12 lg:col-span-6 xl:col-span-3',
        },
    ]);
    const dashboardItems = ref([
        {
            id: 'ccdf',
            component: markRaw(RevenueStreamWidget),
            cols: 'col-span-12 xl:col-span-6',
        },
        {
            id: 'girlsbyweight',
            component: markRaw(NotificationsWidget),
            cols: 'col-span-12 xl:col-span-6',
        }
    ]);

    const currentSlotMap = ref([]);

    const updateItems = (e) => {
        currentSlotMap.value = e.newSlotItemMap.asArray;
    };

    const setItems = (newItems) => {
        const allItemsMap = new Map();
    
        newItems.forEach(item => {
            allItemsMap.set(item.id, item);
        });
    
        let ordered = [];
    
        if (currentSlotMap.value.length) {
            ordered = currentSlotMap.value
                .map(slot => allItemsMap.get(slot.item))
                .filter(Boolean);
        }
    
        const existingIds = new Set(ordered.map(i => i.id));
        const remaining = Array.from(allItemsMap.values()).filter(i => !existingIds.has(i.id));

        dashboardItems.value = [...ordered, ...remaining];
    };

    return {
        dashboardItems,
        dashboardItemsList,
        currentSlotMap,
        setItems,
        updateItems
    };
},
{
    persist: true,
});
