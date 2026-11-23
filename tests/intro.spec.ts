import { test, expect } from '@playwright/test'

/** A fresh launch: Lamar's clip first (portrait cut on a phone held upright), then the lock screen. */
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('onboarding-done', '1'))
})

test('mở app: clip mở đầu đúng khổ, bỏ qua được, rồi tới màn mật khẩu', async ({ page }, info) => {
  await page.goto('/')
  const intro = page.locator('.intro')
  await expect(intro).toBeVisible()
  await expect(intro).toHaveAttribute('data-cut', info.project.name.endsWith('phone') ? 'portrait' : 'landscape')
  await intro.getByRole('button', { name: 'Bỏ qua' }).click()
  await expect(intro).toHaveCount(0)
  await expect(page.locator('.lk-time')).toBeVisible()
  // once per session: a reload goes straight to the lock screen
  await page.reload()
  await expect(page.locator('.intro')).toHaveCount(0)
})

test('clip không tải được (ngoại tuyến): màn mật khẩu hiện ngay, không treo', async ({ page }) => {
  await page.route('**/media/intro-*', (r) => r.abort())
  await page.goto('/')
  await expect(page.locator('.intro')).toHaveCount(0, { timeout: 4000 })
  await expect(page.locator('.lk-time')).toBeVisible()
})
