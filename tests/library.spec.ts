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

test('thư mục: một công trình gom mọi bài dùng nó, có trích dẫn', async ({ page }) => {
  await page.goto('/#/sources/sposobin-1984')
  await expect(page.locator('h2').first()).toHaveText('Музыкальная форма')
  await expect(page.locator('.src-cite-text')).toContainText('Способин')
  expect(await page.locator('article ul a[href^="#/theory/"]').count()).toBeGreaterThan(20)
})

test('bài viết dẫn sang thư mục và có cách trích dẫn bài', async ({ page }) => {
  await page.goto('/#/theory/passacaglia-va-chaconne')
  await expect(page.locator('a[href^="#/sources/wp-"]').first()).toBeVisible()
  await expect(page.locator('.src-cite-text')).toContainText('Passacaglia')
})

test('tìm bằng tên tiếng Nga / Đức ra đúng bài, đầu bài hiện tên năm thứ tiếng', async ({ page }) => {
  await page.goto('/#/theory')
  await page.locator('#theory-search').fill('фуга')
  await expect(page.locator('main a[href^="#/theory/"]').first()).toHaveAttribute('href', '#/theory/fugue')
  await page.goto('/#/theory/fugue')
  await expect(page.locator('.term-names')).toContainText('Fuge')
})

test('mạng tri thức: hồ sơ Bach nối nơi chốn, hành trình, khái niệm; lọc theo thời kỳ', async ({ page }) => {
  await page.goto('/#/explore?p=johann-sebastian-bach')
  await expect(page.getByText('Leipzig').first()).toBeVisible()
  await expect(page.locator('a[href^="#/musicology/ban-do?j="]')).toBeVisible()
  await expect(page.locator('a[href="#/theory/fugue"]')).toBeVisible()
  await page.goto('/#/explore')
  await page.locator('select').first().selectOption('bar')
  await expect(page.locator('.src-row').first()).toContainText('Baroque')
})
