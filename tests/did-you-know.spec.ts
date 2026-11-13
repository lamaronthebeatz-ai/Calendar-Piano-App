import { test, expect } from '@playwright/test'

/** "Có thể bạn chưa biết" on the theory home: a fact from an article, a button into it, and "Điều khác" turns the card. */
test('có thể bạn chưa biết: hiện một điều thú vị, mở được bài, đổi được điều khác', async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
  await page.goto('/#/theory')
  // the page may still be arriving behind the Lamar curtain (and mount again): read the card once it has settled
  await expect(page.locator('.pc-root')).toHaveCount(0, { timeout: 20_000 })
  const card = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Có thể bạn chưa biết' }) })
  await card.scrollIntoViewIfNeeded()
  const read = card.getByRole('link', { name: /Đọc bài/ })
  await expect(read).toHaveAttribute('href', /#\/theory\/[a-z0-9-]+$/)
  const first = await read.getAttribute('href')
  await card.getByRole('button', { name: 'Điều khác' }).click()
  await expect(read).not.toHaveAttribute('href', first!)
  await read.click()
  await expect(page).toHaveURL(/#\/theory\/[a-z0-9-]+$/)
})
