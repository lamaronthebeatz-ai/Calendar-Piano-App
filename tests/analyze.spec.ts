import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('phân tích hợp xướng Bach: nhãn hợp âm trên bản nhạc, bấm ra giải thích, văn bản nối thư viện và tô ô nhịp', async ({ page }) => {
  await page.goto('/#/analyze/bach-bwv269')
  const harm = page.locator('.an-svg .harm')
  await expect(harm.first()).toBeVisible({ timeout: 60_000 })
  expect(await harm.count()).toBeGreaterThan(30)
  // the first chord of the chorale is the tonic
  await expect(harm.first()).toHaveText(/^\s*T\s*$/)
  await harm.nth(2).click()
  await expect(page.getByRole('complementary', { name: 'Hợp âm đã chọn' })).toContainText(/Sol trưởng/)
  // the notation switch rewrites the labels
  await page.getByRole('radio', { name: 'Quốc tế' }).click()
  await expect(harm.first()).toHaveText(/^\s*I\s*$/)
  // the report: key plan and cadences, terms are library links, bar references light the score
  const report = page.locator('.an-report')
  await expect(report).toContainText('Giọng chính: Sol trưởng')
  await expect(report.getByRole('link', { name: 'câu kết' })).toHaveAttribute('href', /#\/theory\/cau-ket/)
  await report.locator('.an-barref').first().click()
  await expect(page.locator('.an-svg .measure.is-focus').first()).toBeAttached()
})

test('nhập MusicXML từ máy: bản nhạc vào danh sách của bạn và được phân tích', async ({ page }) => {
  await page.goto('/#/analyze')
  const xml = await (await page.request.get('/analyze/mozart-k545-1.musicxml')).text()
  await page.locator('input[type=file]').setInputFiles({ name: 'k545.musicxml', mimeType: 'application/xml', buffer: Buffer.from(xml) })
  await expect(page).toHaveURL(/#\/analyze\/ps-/)
  await expect(page.locator('.an-svg .harm').first()).toBeVisible({ timeout: 60_000 })
  await page.goto('/#/analyze')
  await expect(page.locator('.src-list').getByText('Nhập từ tệp', { exact: false }).first()).toBeVisible()
})
