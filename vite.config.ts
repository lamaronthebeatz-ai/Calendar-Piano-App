import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { theoryContent } from './scripts/theory-content.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // The library's text ships as one JSON file per article, fetched when read (see the plugin).
    theoryContent(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'icons/*.png'],
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
        globPatterns: ['**/*.{js,css,html,svg,png,webp,ico,woff2,json}'],
        // Scanned music examples and the engraved sheets of the children's books (thousands of small images) load on demand and are cached as they are seen.
        // The full-text search file (several MB) loads on the first search and is cached then.
        globIgnores: ['scans/**', 'sheets/**', 'content/search.*.json'],
        navigateFallbackDenylist: [/^\/api\//],
        // Theory pages: Wikipedia image lookups, Wikimedia images and web fonts keep working offline once seen.
        runtimeCaching: [
          {
            urlPattern: ({ url }) => /\/content\/search\.[\w]+\.json$/.test(url.pathname),
            handler: 'CacheFirst',
            options: { cacheName: 'library-search', expiration: { maxEntries: 2 } },
          },
          {
            // piano samples (theory/audio.ts): fetched on the first played note, then kept for offline use
            urlPattern: ({ url }) => url.pathname.includes('/media/piano/'),
            handler: 'CacheFirst',
            options: { cacheName: 'piano-samples', expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
          {
            urlPattern: ({ url }) => url.pathname.includes('/scans/') || url.pathname.includes('/sheets/'),
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
