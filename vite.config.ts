import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        // The theory library's text is ~2 MB; one chunk per content file keeps each under the
        // service worker's precache limit and lets the browser fetch them in parallel.
        codeSplitting: {
          groups: [
            {
              name: (id: string) => /\/theory\/content\/([\w-]+)\.ts$/.exec(id)?.[1].replace(/^/, 'content-') ?? null,
              test: /\/theory\/content\//,
            },
          ],
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*.png'],
      manifest: {
        name: 'Trung tâm lý thuyết âm nhạc học by Lamar',
        short_name: 'Lý thuyết Lamar',
        description: 'Thư viện lý thuyết âm nhạc, tủ sách giáo trình và sổ tay dạy piano · Bản quyền thuộc về Lamar',
        lang: 'vi',
        theme_color: '#f6f3ed',
        background_color: '#f6f3ed',
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
        globPatterns: ['**/*.{js,css,html,svg,png,webp,ico,woff2}'],
        // Scanned music examples (thousands of small images) load on demand and are cached as they are seen.
        globIgnores: ['scans/**'],
        navigateFallbackDenylist: [/^\/api\//],
        // Theory pages: Wikipedia image lookups, Wikimedia images and web fonts keep working offline once seen.
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.includes('/scans/'),
            handler: 'CacheFirst',
            options: { cacheName: 'book-scans', expiration: { maxEntries: 3000, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
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
            // YouTube thumbnails for the listening examples (the player itself always needs the network).
            urlPattern: ({ url }) => url.hostname === 'i.ytimg.com',
            handler: 'CacheFirst',
            options: { cacheName: 'yt-thumbs', expiration: { maxEntries: 400, maxAgeSeconds: 60 * 60 * 24 * 90 }, cacheableResponse: { statuses: [0, 200] } },
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
