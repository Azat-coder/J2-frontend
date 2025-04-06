import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/app',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  publicDir: path.resolve(__dirname, 'public'),
  envDir: path.resolve(__dirname, ''),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [vue()],
  server: {
    open: '/',
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/app/styles/index.scss" as *;`,
      },
    },
  },
});
