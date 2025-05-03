import { fileURLToPath, URL } from 'node:url';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite';

export default defineConfig({
    // base: '/J2-frontend/',  // <== обязательно для GitHub Pages!
    optimizeDeps: {
      noDiscovery: true
    },
    plugins: [
      vue(),
      Components({
        resolvers: [PrimeVueResolver()]
      }),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Jarvis',
          short_name: 'Jarvis',
          start_url: '.',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#42b883',
          icons: [
            {
              src: '/src/app/assets/web-app-manifest-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/src/app/assets/web-app-manifest-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  });