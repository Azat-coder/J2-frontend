import { createDashboardStore } from '@/shared/stores/useDashboardFactory'
import { markRaw } from 'vue'
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue'
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue'
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue'
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue'
import OrdersWidget from '@/components/dashboard/OrdersWidget.vue'
import RevenueWidget from '@/components/dashboard/RevenueWidget.vue'
import CommentsWidget from '@/components/dashboard/CommentsWidget.vue'
import ClientsWidget from '@/components/dashboard/ClientsWidget.vue'
import GirlsAIPicsWidget from '@/components/dashboard/GirlsAIPicsWidget.vue'

export const useMainDashboardStore = createDashboardStore({
  storageKey: 'main_dashboard_layout',
  widgets: [
    { id: 'girlsbyage', component: markRaw(RecentSalesWidget), initialSizes: { w: 4, h: 11 } },
        { id: 'girlsbynationality', component: markRaw(BestSellingWidget), initialSizes: { w: 4, h: 11 } },
        { id: 'ccdf', component: markRaw(RevenueStreamWidget), initialSizes: { w: 4, h: 11 } },
        { id: 'girlsbyweight', component: markRaw(NotificationsWidget), initialSizes: { w: 8, h: 17 } },
        { id: 'orders', component: markRaw(OrdersWidget), initialSizes: { w: 4, h: 4 } },
        { id: 'revenue', component: markRaw(RevenueWidget), initialSizes: { w: 4, h: 4 } },
        { id: 'comments', component: markRaw(CommentsWidget), initialSizes: { w: 4, h: 4 } },
        { id: 'clients', component: markRaw(ClientsWidget), initialSizes: { w: 4, h: 4 } },
        { id: 'girlsAiPics', component: markRaw(GirlsAIPicsWidget),initialSizes: {w: 7,h: 27,} },
  ]
})