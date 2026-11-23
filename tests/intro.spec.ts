import { test, expect } from '@playwright/test'

/** A fresh launch: Lamar's clip first (portrait cut on a phone held upright), whole and with sound, then the lock screen. */
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('onboarding-done', '1'))
})

test('mở app: clip mở đầu đúng khổ, có tiếng, không bỏ qua được, xem hết rồi tới màn mật khẩu', async ({ page }, info) => {
  test.setTimeout(60_000)
  await page.goto('/')
  const intro = page.locator('.intro')
  await expect(intro).toBeVisible()
  await expect(intro).toHaveAttribute('data-cut', info.project.name.endsWith('phone') ? 'portrait' : 'landscape')
  await expect(intro.getByRole('button', { name: /Bỏ qua|Tắt tiếng|Bật tiếng/ })).toHaveCount(0)
  // a browser that refuses sound before a touch asks for one tap — the refusal can come a moment after load
  const tap = intro.getByRole('button', { name: 'Chạm để bắt đầu' })
  await expect
    .poll(async () => {
      if (await tap.isVisible().catch(() => false)) await tap.click().catch(() => {})
      return page.evaluate(() => { const v = document.querySelector('video'); return v ? !v.muted && v.currentTime > 0 : false })
    }, { timeout: 15_000 })
    .toBe(true)
  // still there half way through
  await page.waitForTimeout(5000)
  await expect(intro).toBeVisible()
  await expect(page.locator('.lk-time')).toBeVisible({ timeout: 15_000 })
  await expect(intro).toHaveCount(0)
  // once per session: a reload goes straight to the lock screen
  await page.reload()
  await expect(page.locator('.intro')).toHaveCount(0)
})

test('clip không tải được (ngoại tuyến): màn mật khẩu hiện ngay, không ai bị kẹt ngoài app', async ({ page }) => {
  await page.route('**/media/intro-*', (r) => r.abort())
  await page.goto('/')
  await expect(page.locator('.intro')).toHaveCount(0, { timeout: 4000 })
  await expect(page.locator('.lk-time')).toBeVisible()
})
