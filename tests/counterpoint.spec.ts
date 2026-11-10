import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    localStorage.removeItem('counterpoint:v1')
  })
})

/**
 * Lamar's exercise (Iv = −7 with two variants, five ✱): by the book's rules the ✱ of bar 5 cannot hold a lawful
 * dissonance. The page must say so, offer ways out that keep the đề note for note, and give answers once the teacher's
 * option (a quarter-note preparation) is on.
 */
test('giải phức điệu: bế tắc ở ô 5, cách gỡ giữ nguyên đề, rồi lời giải khi cho nốt đen chuẩn bị', async ({ page }) => {
  test.setTimeout(90_000)
  await page.goto('/#/counterpoint')
  await page.getByLabel(/Khoá đề của thầy/).check()
  await expect(page.locator('.cp-kb')).toHaveCount(0)
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('counterpoint:v1')!).given)
  await page.locator('.cp-go').first().click()
  const fail = page.locator('.cp-fail')
  await expect(fail).toContainText('Không có lời giải', { timeout: 20_000 })
  await expect(fail).toContainText('ô 5, phách 1')
  await fail.getByRole('button', { name: /Tìm cách gỡ/ }).click()
  await expect(page.getByText('Cách gỡ — đề của thầy giữ nguyên')).toBeVisible({ timeout: 25_000 })
  await expect(page.getByRole('button', { name: /ô 5, phách 1 để thuận/ })).toBeVisible()
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('counterpoint:v1')!).given)
  expect(after).toEqual(before)
  await page.getByLabel(/Cho phép nốt đen làm nốt chuẩn bị/).check()
  await page.locator('.cp-actions .cp-go').first().click()
  await expect(page.locator('.cp-sols button').first()).toBeVisible({ timeout: 25_000 })
  // every split I + II = −7 is offered, and each is decided
  await expect(page.locator('.cp-splits button')).toHaveCount(8)
  await page.getByRole('button', { name: 'Xét mọi BT' }).click()
  await expect(page.locator('.cp-splits button.is-ok')).toHaveCount(8, { timeout: 25_000 })
})

test('sinh đề có lời giải, luyện từng nốt với gợi ý', async ({ page }) => {
  test.setTimeout(90_000)
  await page.goto('/#/counterpoint')
  await page.locator('.cp-gen').getByRole('button', { name: 'Dễ' }).click()
  await expect(page.getByText('Đề máy sinh · sửa tự do')).toBeVisible({ timeout: 20_000 })
  await page.getByRole('button', { name: 'Xem đáp án' }).click()
  await expect(page.locator('.cp-ver').first()).toBeVisible()
  await page.getByRole('button', { name: 'Gợi ý nốt tiếp' }).click()
  const ok = page.locator('.cp-hints button.is-ok').first()
  await expect(ok).toBeVisible({ timeout: 15_000 })
  await ok.click()
  await expect(page.locator('.cp-live p')).toContainText('✓')
})
