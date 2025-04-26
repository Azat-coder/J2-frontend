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
    { id: 'girlsbyage', component: markRaw(RecentSalesWidget) },
    { id: 'girlsbynationality', component: markRaw(BestSellingWidget) },
    { id: 'ccdf', component: markRaw(RevenueStreamWidget) },
    { id: 'girlsbyweight', component: markRaw(NotificationsWidget) },
    { id: 'orders', component: markRaw(OrdersWidget) },
    { id: 'revenue', component: markRaw(RevenueWidget) },
    { id: 'comments', component: markRaw(CommentsWidget) },
    { id: 'clients', component: markRaw(ClientsWidget) },
];

export const useDashboardStore = defineStore('dashboard', () => {
    const dashboardItems = ref(allWidgets);
    const dashboardLayout = ref([
        { id: 'girlsbyage', x: 0, y: 0, w: 4, h: 2 },
        { id: 'girlsbynationality', x: 4, y: 0, w: 4, h: 2 },
        { id: 'ccdf', x: 8, y: 0, w: 4, h: 2 },
        { id: 'girlsbyweight', x: 0, y: 2, w: 6, h: 2 },
    ]);
    const isInitialized = ref(false);

    const saveDashboardState = () => {
        const config = dashboardLayout.value.map(item => ({
            id: item.id,
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h,
        }));

        console.log('[saveDashboardState] Сохраняем конфиг:', config);
        localStorage.setItem('dashboard_layout', JSON.stringify(config));
    };

    const loadDashboardState = () => {
        const raw = localStorage.getItem('dashboard_layout');
        if (!raw) {
            console.log('[loadDashboardState] Нет сохранённого состояния');
            return;
        }

        try {
            const config = JSON.parse(raw);
            console.log('[loadDashboardState] Загружаем конфиг:', config);

            dashboardLayout.value = config.map(item => ({
                ...item,
            }));

        } catch (e) {
            console.warn('Ошибка парсинга dashboard_layout:', e);
        }
    };

    const updateLayout = (newLayout) => {
        dashboardLayout.value = newLayout;
        saveDashboardState();
    };

    watchEffect(() => {
        if (!isInitialized.value) {
            console.log('[watchEffect] Инициализация');
            loadDashboardState();
            isInitialized.value = true;
        }
    });

    return {
        dashboardItems,
        dashboardLayout,
        updateLayout,
        saveDashboardState,
        loadDashboardState,
    };
});
