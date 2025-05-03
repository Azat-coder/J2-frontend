import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

export const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory('/J2-frontend/'), // Для деплоя на gh-pages
  routes,
});