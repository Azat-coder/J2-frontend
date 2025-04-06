import { defineAsyncComponent } from 'vue';

const MainLayout = defineAsyncComponent(() => import('@/shared/ui/layouts/MainLayout'));

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home'),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/calendars',
    children: [
      {
        path: '',
        name: 'Calendars main',
        component: () => import('@/pages/Calendars/Main'),
        meta: {
          layout: MainLayout,
        },
      },
      {
        path: 'catalog',
        name: 'Calendars catalog',
        component: () => import('@/pages/Calendars/Catalog'),
        meta: {
          layout: MainLayout,
        },
      },
      {
        path: 'register',
        name: 'Calendars register',
        component: () => import('@/pages/Calendars/Register'),
        meta: {
          layout: MainLayout,
        },
      },
    ],
  },
  {
    path: '/chains',
    name: 'Chains',
    component: () => import('@/pages/chains'),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('@/pages/notifications'),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/pages/orders'),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/policies',
    name: 'Policies',
    component: () => import('@/pages/policies'),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/pages/products'),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/promos',
    name: 'Promos',
    component: () => import('@/pages/promos'),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/replenishment-plan',
    name: 'ReplenishmentPlan',
    component: () => import('@/pages/replenishmentPlan'),
    meta: {
      layout: MainLayout,
    },
  },
  {
    path: '/warehouses',
    name: 'Warehouses',
    component: () => import('@/pages/warehouses'),
    meta: {
      layout: MainLayout,
    },
  },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: () => import('@/pages/settings'),
  //   meta: {
  //     layout: MainLayout,
  //   },
  // },
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/' },
];
