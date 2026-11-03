import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('tìm trong thân bài tải vài mảnh nhỏ và ra đúng bài', async ({ page }) => {
  const shards: string[] = []
  page.on('request', (r) => r.url().includes('/content/search/') && shards.push(r.url()))
  await page.goto('/#/theory')
  await page.locator('#theory-search').fill('passacaglia chaconne')
  await expect(page.locator('main a[href="#/theory/passacaglia-va-chaconne"]').first()).toBeVisible({ timeout: 10_000 })
  expect(shards.length).toBeGreaterThan(0)
  expect(shards.length).toBeLessThanOrEqual(2)
})

test('lưu một mục rồi đọc khi mất mạng', async ({ page, context, browserName }) => {
  test.skip(browserName !== 'chromium', 'service worker + offline đo trên Chromium')
  await page.goto('/#/theory')
  await page.waitForFunction(() => navigator.serviceWorker?.ready.then(() => true))
  await page.reload() // now controlled by the worker
  await page.goto('/#/theory?c=organ')
  const save = page.locator('.offline-save')
  await save.click()
  await expect(save).toHaveText(/Đã lưu/, { timeout: 30_000 })
  const href = await page.locator('main a[href^="#/theory/"]').nth(2).getAttribute('href')
  await context.setOffline(true)
  await page.goto('/' + href)
  await expect(page.locator('h1').first()).toBeVisible()
  expect((await page.locator('main').innerText()).length).toBeGreaterThan(500)
})
