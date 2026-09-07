import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { defineConfig } from 'vite'

// Standalone single-file build used to publish the app as a Claude Artifact.
// No PWA/service-worker (irrelevant inside a sandboxed iframe) and every
// asset is inlined into one HTML file.
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: 'dist-artifact',
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    rollupOptions: {
      input: 'artifact.html',
    },
  },
})
