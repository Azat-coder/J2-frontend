import { defineStore } from 'pinia'
import { ref, markRaw } from 'vue'

import BestSellingWidget from '@/entities/dashboard/BestSellingWidget.vue'
import NotificationsWidget from '@/entities/dashboard/NotificationsWidget.vue'
import RecentSalesWidget from '@/entities/dashboard/RecentSalesWidget.vue'
import RevenueStreamWidget from '@/entities/dashboard/RevenueStreamWidget.vue'
import OrdersWidget from '@/entities/dashboard/OrdersWidget.vue'
import RevenueWidget from '@/entities/dashboard/RevenueWidget.vue'
import CommentsWidget from '@/entities/dashboard/CommentsWidget.vue'
import ClientsWidget from '@/entities/dashboard/ClientsWidget.vue'

const allWidgets = [
    { id: 'girlsbyage', component: markRaw(RecentSalesWidget), initialSizes: { w: 4, h: 11 } },
    { id: 'girlsbynationality', component: markRaw(BestSellingWidget), initialSizes: { w: 4, h: 11 } },
    { id: 'ccdf', component: markRaw(RevenueStreamWidget), initialSizes: { w: 4, h: 11 } },
    { id: 'girlsbyweight', component: markRaw(NotificationsWidget), initialSizes: { w: 8, h: 17 } },
    { id: 'orders', component: markRaw(OrdersWidget), initialSizes: { w: 4, h: 4 } },
    { id: 'revenue', component: markRaw(RevenueWidget), initialSizes: { w: 4, h: 4 } },
    { id: 'comments', component: markRaw(CommentsWidget), initialSizes: { w: 4, h: 4 } },
    { id: 'clients', component: markRaw(ClientsWidget), initialSizes: { w: 4, h: 4 } },
]

export const useDashboardStore = defineStore('dashboard', () => {
    const dashboardItems = ref(allWidgets)

    const dashboardLayout = ref([
        { id: 'girlsbyage', x: 0, y: 0, w: 4, h: 2 },
        { id: 'girlsbynationality', x: 4, y: 0, w: 4, h: 2 },
        { id: 'ccdf', x: 8, y: 0, w: 4, h: 2 },
        { id: 'girlsbyweight', x: 0, y: 2, w: 6, h: 2 },
    ])

    return {
        dashboardItems,
        dashboardLayout,
    }
})