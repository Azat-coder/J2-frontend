import { defineStore } from 'pinia'
import { ref, markRaw, watchEffect, watch } from 'vue'

import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue'
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue'
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue'
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue'
import OrdersWidget from '@/components/dashboard/OrdersWidget.vue'
import RevenueWidget from '@/components/dashboard/RevenueWidget.vue'
import CommentsWidget from '@/components/dashboard/CommentsWidget.vue'
import ClientsWidget from '@/components/dashboard/ClientsWidget.vue'

const allWidgets = [
    { id: 'girlsbyage', component: markRaw(RecentSalesWidget), initialSizes: { w: 4,h: 11 }},
    { id: 'girlsbynationality', component: markRaw(BestSellingWidget), initialSizes: {w: 4,h: 11,} },
    { id: 'ccdf', component: markRaw(RevenueStreamWidget), initialSizes: { w: 4,h: 11,} },
    { id: 'girlsbyweight', component: markRaw(NotificationsWidget), initialSizes: {w: 8,h: 17,} },
    { id: 'orders', component: markRaw(OrdersWidget), initialSizes: {w: 4,h: 4,} },
    { id: 'revenue', component: markRaw(RevenueWidget), initialSizes: { w: 4,h: 4,} },
    { id: 'comments', component: markRaw(CommentsWidget), initialSizes: {w: 4,h: 4,} },
    { id: 'clients', component: markRaw(ClientsWidget),initialSizes: {w: 4,h: 4,} },
]

export const useDashboardStore = defineStore('dashboard', () => {
    const dashboardItems = ref(allWidgets)

    const dashboardLayout = ref([
        { id: 'girlsbyage', x: 0, y: 0, w: 4, h: 2 },
        { id: 'girlsbynationality', x: 4, y: 0, w: 4, h: 2 },
        { id: 'ccdf', x: 8, y: 0, w: 4, h: 2 },
        { id: 'girlsbyweight', x: 0, y: 2, w: 6, h: 2 },
    ])

    const isInitialized = ref(false)

    const normalize = (value: number) => Math.round(value);

    const saveDashboardState = () => {
        const config = dashboardLayout.value.map(item => ({
            id: item.id,
            x: normalize(item.x),
            y: normalize(item.y),
            w: normalize(item.w),
            h: normalize(item.h),
        }));

        console.log('[saveDashboardState] Сохраняем нормализованный конфиг:', config);
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
    
        config.forEach(item => {
            console.log(`[loadDashboardState] Элемент:`, item);
        });
    
        dashboardLayout.value = config.map(item => ({
            ...item,
        }));

    } catch (e) {
        console.warn('Ошибка парсинга dashboard_layout:', e);
    }
};

    const updateLayout = (newLayout) => {
        for (const item of newLayout) {
        const existing = dashboardLayout.value.find(i => i.id === item.id)
        if (existing) {
            existing.x = item.x
            existing.y = item.y
            existing.w = item.w
            existing.h = item.h
        }
        }
        saveDashboardState()
    }

    const handleMoveEnd = (e) => {
        const { i, x, y, w, h } = e;
        
        console.log(`[handleMoveEnd] Перед сохранением: ${i}`, {
        x: Math.round(x),
        y: Math.round(y),
        w: Math.round(w),
        h: Math.round(h)
        });
    
        const item = dashboardLayout.value.find(item => item.id === i);
        if (item) {
        item.x = Math.round(x);
        item.y = Math.round(y);
        item.w = Math.round(w);
        item.h = Math.round(h);
        }
    
        // Сохраняем с округлением
        saveDashboardState();
        
        console.log('[handleMoveEnd] После сохранения: ', dashboardLayout.value);
    };

    const resetLayout = () => {
        console.log('[resetLayout] Сброс до дефолта')
        dashboardLayout.value = [
        { id: 'girlsbyage', x: 0, y: 0, w: 4, h: 2 },
        { id: 'girlsbynationality', x: 4, y: 0, w: 4, h: 2 },
        { id: 'ccdf', x: 8, y: 0, w: 4, h: 2 },
        { id: 'girlsbyweight', x: 0, y: 2, w: 6, h: 2 },
        ]
        saveDashboardState()
    }

    watchEffect(() => {
        if (!isInitialized.value) {
        console.log('[watchEffect] Инициализация')
        loadDashboardState()
        isInitialized.value = true
        }
    })

    watch(
        () => dashboardLayout.value,
        () => {
        saveDashboardState()
        },
        { deep: true }
    )

    return {
        dashboardItems,
        dashboardLayout,
        updateLayout,
        saveDashboardState,
        loadDashboardState,
        handleMoveEnd,
        resetLayout,
    }
})
