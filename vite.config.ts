import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*.png'],
      manifest: {
        name: 'Lịch Dạy Piano',
        short_name: 'Lịch Dạy Piano',
        description: 'Ứng dụng quản lý dạy piano cá nhân',
        lang: 'vi',
        theme_color: '#f7f5f2',
        background_color: '#f7f5f2',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '.',
        scope: './',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        navigateFallbackDenylist: [/^\/api\//],
        // Theory pages: Wikipedia image lookups, Wikimedia images and web fonts keep working offline once seen.
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.hostname === 'en.wikipedia.org' && url.pathname === '/w/api.php',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'wiki-api', expiration: { maxEntries: 800, maxAgeSeconds: 60 * 60 * 24 * 90 } },
          },
          {
            urlPattern: ({ url }) => url.hostname === 'upload.wikimedia.org' || url.hostname === 'commons.wikimedia.org',
            handler: 'CacheFirst',
            options: { cacheName: 'wiki-images', expiration: { maxEntries: 800, maxAgeSeconds: 60 * 60 * 24 * 180 }, cacheableResponse: { statuses: [0, 200] } },
          },
          {
            urlPattern: ({ url }) => url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com',
            handler: 'CacheFirst',
            options: { cacheName: 'fonts', expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 }, cacheableResponse: { statuses: [0, 200] } },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
