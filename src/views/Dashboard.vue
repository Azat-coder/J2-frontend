<script setup>
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
import OrdersWidget from '@/components/dashboard/OrdersWidget.vue';
import RevenueWidget from '@/components/dashboard/RevenueWidget.vue';
import CommentsWidget from '@/components/dashboard/CommentsWidget.vue';
import ClientsWidget from '@/components/dashboard/ClientsWidget.vue';
import { ref, markRaw } from 'vue'

const layout = ref([
  { h: 12, id: 0, w: 4, x: 0, y: 0, component: markRaw(RecentSalesWidget) },
  { h: 12, id: 1, w: 4, x: 2, y: 0, component: markRaw(BestSellingWidget) },
  { h: 10, id: 2, w: 4, x: 4, y: 0, component: markRaw(RevenueStreamWidget) },
  { h: 15, id: 3, w: 6, x: 0, y: 2, component: markRaw(NotificationsWidget) },
  { h: 4, id: 4, w: 4, x: 2, y: 2, component: markRaw(OrdersWidget) },
  { h: 4, id: 5, w: 4, x: 4, y: 2, component: markRaw(RevenueWidget) },
  { h: 4, id: 6, w: 4, x: 0, y: 4, component: markRaw(CommentsWidget) },
  { h: 4, id: 7, w: 4, x: 2, y: 4, component: markRaw(ClientsWidget) },
])
</script>

<template>
  <grid-layout
    v-model:layout="layout"
    :col-num="12"
    :row-height="30"
  >
    <template #default="{ gridItemProps }">
      <grid-item
        v-for="item in layout"
        v-bind="gridItemProps"
        :id="item.id"
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
      >
        <component :is="item.component" />
      </grid-item>
    </template>
  </grid-layout>
</template>