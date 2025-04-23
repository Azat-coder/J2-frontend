import { defineStore } from 'pinia';
import { ref, markRaw, watchEffect } from 'vue';

import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
import OrdersWidget from '@/components/dashboard/OrdersWidget.vue';
import RevenueWidget from '@/components/dashboard/RevenueWidget.vue';
import CommentsWidget from '@/components/dashboard/CommentsWidget.vue';
import ClientsWidget from '@/components/dashboard/ClientsWidget.vue';

const allWidgets = [
    { id: 'girlsbyage', component: markRaw(RecentSalesWidget), cols: 'col-span-12 xl:col-span-6' },
    { id: 'girlsbynationality', component: markRaw(BestSellingWidget), cols: 'col-span-12 xl:col-span-6' },
    { id: 'ccdf', component: markRaw(RevenueStreamWidget), cols: 'col-span-12 xl:col-span-6' },
    { id: 'girlsbyweight', component: markRaw(NotificationsWidget), cols: 'col-span-12 xl:col-span-6' },
    { id: 'orders', component: markRaw(OrdersWidget), cols: 'col-span-12 lg:col-span-6 xl:col-span-3' },
    { id: 'revenue', component: markRaw(RevenueWidget), cols: 'col-span-12 lg:col-span-6 xl:col-span-3' },
    { id: 'comments', component: markRaw(CommentsWidget), cols: 'col-span-12 lg:col-span-6 xl:col-span-3' },
    { id: 'clients', component: markRaw(ClientsWidget), cols: 'col-span-12 lg:col-span-6 xl:col-span-3' },
];

export const useDashboardStore = defineStore('dashboard', () => {
    const dashboardItemsList = ref(allWidgets);
    const dashboardItems = ref([]);
    const currentSlotMap = ref([]);
    const isInitialized = ref(false);

    const updateItems = (e) => {
        currentSlotMap.value = e.newSlotItemMap.asArray;
        saveDashboardState();
    };

    const setItems = (newItems) => {
        const allItemsMap = new Map(newItems.map(item => [item.id, item]));

        const orderedItems = currentSlotMap.value.map(({ item }) => allItemsMap.get(item)).filter(Boolean);
        const orderedIds = new Set(orderedItems.map(i => i.id));
        const remaining = newItems.filter(i => !orderedIds.has(i.id));

        dashboardItems.value = [...orderedItems, ...remaining];
    };

    const saveDashboardState = () => {
        const config = currentSlotMap.value.map(({ slot, item }, index) => ({
            id: item,
            slot,
            order: index,
            visible: true
        }));
        localStorage.setItem('dashboard_config', JSON.stringify(config));
    };

    const loadDashboardState = () => {
        const raw = localStorage.getItem('dashboard_config');
        if (!raw) {
            console.log('[loadDashboardState] Нет сохранённого состояния');
            return;
        }

        try {
            const config = JSON.parse(raw);
            const widgetMap = new Map(allWidgets.map(w => [w.id, w]));

            const visibleWidgets = config
                .filter(w => w.visible)
                .sort((a, b) => a.order - b.order);

            currentSlotMap.value = visibleWidgets.map(w => ({
                slot: w.slot,
                item: w.id
            }));

            dashboardItems.value = visibleWidgets
                .map(w => widgetMap.get(w.id))
                .filter(Boolean);

        } catch (e) {
            console.warn('Ошибка парсинга dashboard_config:', e);
        }
    };

    watchEffect(() => {
        if (!isInitialized.value && dashboardItemsList.value.length) {
            loadDashboardState();
            isInitialized.value = true;
        }
    });

    return {
        dashboardItems,
        dashboardItemsList,
        currentSlotMap,
        setItems,
        updateItems,
        saveDashboardState,
        loadDashboardState
    };
});
