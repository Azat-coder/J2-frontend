import { createDashboardStore } from '@/shared/stores/useDashboardFactory'
import { markRaw } from 'vue'
import BestSellingWidget from '@/entities/dashboard/BestSellingWidget.vue'
import NotificationsWidget from '@/entities/dashboard/NotificationsWidget.vue'
import RecentSalesWidget from '@/entities/dashboard/RecentSalesWidget.vue'
import RevenueStreamWidget from '@/entities/dashboard/RevenueStreamWidget.vue'
import OrdersWidget from '@/entities/dashboard/OrdersWidget.vue'
import RevenueWidget from '@/entities/dashboard/RevenueWidget.vue'
import CommentsWidget from '@/entities/dashboard/CommentsWidget.vue'
import ClientsWidget from '@/entities/dashboard/ClientsWidget.vue'
import GirlsAIPicsWidget from '@/entities/dashboard/GirlsAIPicsWidget.vue'
import MapWidget from '@/entities/MapWidget.vue'
import InteractiveMapWidget from '@/entities/InteractiveMapWidget.vue'
import PolarMapWidget from '@/entities/PolarMapWidget.vue'

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
        { id: 'leafletWorldMap', component: markRaw(MapWidget),initialSizes: {w: 7,h: 27,} },
        { id: 'tripAnalysisWorldMap', component: markRaw(InteractiveMapWidget),initialSizes: {w: 7,h: 27,} },
        { id: 'polarWorldMap', component: markRaw(PolarMapWidget),initialSizes: {w: 7,h: 27,} },
  ]
})