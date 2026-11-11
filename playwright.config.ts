import { defineConfig, devices } from '@playwright/test'

/**
 * Smoke tests of the built app (docs/roadmap.md, stage 1): every main page on a phone and a desktop, in Chromium and
 * WebKit (Safari's engine — the iPhone bugs came from there). Run after `npm run build`:
 *   npx playwright test                         (all four projects; WebKit needs `npx playwright install webkit`)
 *   npx playwright test --project='chromium-*'  (what a machine without WebKit can run)
 */
const phone = { viewport: { width: 393, height: 852 }, hasTouch: true, isMobile: true }
const desktop = { viewport: { width: 1280, height: 820 } }

export default defineConfig({
  testDir: 'tests',
  timeout: 45_000,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 3 : 4, // CI runners have 4 cores; the four test jobs run side by side (deploy-pages.yml)
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: 'http://localhost:4173', serviceWorkers: 'allow' },
  projects: [
    { name: 'chromium-phone', use: { ...devices['Desktop Chrome'], ...phone } },
    { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'], ...desktop } },
    // the chord-ear test launches with Chromium's fake-microphone flags, which WebKit refuses to start with
    { name: 'webkit-phone', use: { ...devices['Desktop Safari'], ...phone }, testIgnore: /chord-ear/ },
    { name: 'webkit-desktop', use: { ...devices['Desktop Safari'], ...desktop }, testIgnore: /chord-ear/ },
  ],
  webServer: { command: 'npx vite preview --port 4173 --strictPort', url: 'http://localhost:4173', reuseExistingServer: !process.env.CI, timeout: 60_000 },
})
