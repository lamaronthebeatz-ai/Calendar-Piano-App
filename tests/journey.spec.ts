import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('hành trình: tạo nhân vật, vào cảnh, đọc bài rồi quay lại đúng câu hỏi, trả lời đúng thì nhận thẻ', async ({ page }) => {
  await page.goto('/#/hanh-trinh')
  await page.getByRole('radio').nth(2).click()
  await page.getByLabel('Tên nhân vật').fill('Minh')
  await page.getByRole('button', { name: 'Bắt đầu hành trình' }).click()
  // a chapter opens on its history, a few panels, then the map
  await expect(page.locator('.jr-prologue-panel h2')).toHaveText('Người trả tiền cho âm nhạc')
  for (let i = 0; i < 4; i++) await page.getByRole('button', { name: 'Tiếp' }).click()
  await page.getByRole('button', { name: 'Vào bản đồ chương I' }).click()
  await expect(page.locator('.jr-atlas-intro')).toContainText('Minh mở mắt')

  await page.locator('.jr-stop-row.is-next').click()
  const scene = page.locator('.jr-scene')
  // tap through the title card and every line
  for (let i = 0; i < 12 && !(await page.locator('.jr-quest').isVisible()); i++) await scene.click({ position: { x: 20, y: 160 } })
  await expect(page.locator('.jr-ask')).toContainText('Thánh ca Gregorian')

  // the answer is in the library: open the article, come back, the question is still there
  await page.locator('.jr-read').click()
  await expect(page).toHaveURL(/#\/theory\/thanh-ca-gregorian/)
  await page.goBack()
  await expect(page.locator('.jr-ask')).toContainText('Thánh ca Gregorian')

  await page.locator('.jr-choice').nth(1).click()
  await expect(page.locator('.jr-hint')).toBeVisible()
  await page.locator('.jr-choice').nth(0).click()
  await expect(page.locator('.jr-ev h3')).toHaveText('Thánh ca đơn âm')
  await page.getByRole('button', { name: /Lên đường/ }).click()
  await expect(page.locator('.jr-player-meta')).toContainText('1/10 chặng · 1 thẻ chứng cứ')
})
