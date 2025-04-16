import { defineStore } from 'pinia';
import { ref, markRaw } from 'vue';

import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';

export const useDashboardStore = defineStore('dashboard', () => {
    const dashboardItemsList = ref([
        {
            id: 'girlsbyage',
            component: markRaw(RecentSalesWidget),
            cols: 'col-span-12 xl:col-span-6',
            slot: 1,
        },
        {
            id: 'girlsbynationality',
            component: markRaw(BestSellingWidget),
            cols: 'col-span-12 xl:col-span-6',
            slot: 2,
        },
        {
            id: 'c',
            component: markRaw(RevenueStreamWidget),
            cols: 'col-span-12 xl:col-span-6',
            slot: 3,
        },
        {
            id: 'girlsbyweight',
            component: markRaw(NotificationsWidget),
            cols: 'col-span-12 xl:col-span-6',
            slot: 4,
        }
    ]);
    const dashboardItems = ref([
        {
            id: 'c',
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
    
        // Собираем все элементы по ID
        [...dashboardItems.value, ...newItems].forEach(item => {
            allItemsMap.set(item.id, item);
        });
    
        // Используем сохранённый порядок, если он есть
        let ordered = [];
    
        if (currentSlotMap.value.length) {
            // Те, что есть в сохранённой карте
            ordered = currentSlotMap.value
                .map(slot => allItemsMap.get(slot.item))
                .filter(Boolean);
        }
    
        // Добавляем отсутствующие (новые)
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
});
