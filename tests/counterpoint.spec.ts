import { test, expect } from '@playwright/test'

/**
 * The counterpoint solver on Lamar's exercise (Iv = −7 with two variants, five ✱): by the book's rules the ✱ of bar 5
 * cannot hold a lawful dissonance, and the page must say so; allowing a quarter-note preparation (the teacher's
 * option) must then give answers.
 */
test('giải phức điệu: chứng minh bế tắc ở ô 5, rồi ra lời giải khi cho phép nốt đen chuẩn bị', async ({ page }) => {
  test.setTimeout(60_000)
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    localStorage.removeItem('counterpoint:v1')
  })
  await page.goto('/#/counterpoint')
  await page.locator('.cp-go').click()
  const fail = page.locator('.cp-fail')
  await expect(fail).toContainText('Không có lời giải', { timeout: 20_000 })
  await expect(fail).toContainText('ô 5, phách 1')
  await page.locator('.cp-check input').check()
  await page.locator('.cp-go').click()
  await expect(page.locator('.cp-sols button').first()).toBeVisible({ timeout: 25_000 })
  await expect(page.locator('.cp-ver')).toHaveCount(4)
})
