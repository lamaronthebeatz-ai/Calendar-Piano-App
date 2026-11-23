import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
})

test('Phân tích: khối UMRE đóng mặc định; mở ra chạy trong worker, ba mức xem, xuất báo cáo', async ({ page }) => {
  test.setTimeout(120_000)
  await page.goto('/#/analyze/bach-bwv269')
  await expect(page.locator('.an-report')).toBeVisible({ timeout: 60_000 })
  const panel = page.locator('.um-panel')
  await expect(panel).toBeVisible()
  await expect(panel.locator('.um-module')).toHaveCount(0)
  await panel.locator('summary').click()
  await expect(panel.locator('.um-module')).toHaveCount(6, { timeout: 60_000 })
  await expect(panel).toContainText('Giọng chính: G trưởng')
  await expect(panel).toContainText('Kết cấu: chủ điệu')
  await panel.getByRole('radio', { name: 'Học thuật' }).click()
  await expect(panel.locator('.um-meta')).toContainText('dấu vân')
  await expect(panel).toContainText('Diễn giải: ')
  await expect(panel).toContainText('Cơ sở độ tin cậy')
  const download = page.waitForEvent('download')
  await panel.getByRole('button', { name: 'Xuất báo cáo (.md)' }).click()
  const d = await download
  expect(d.suggestedFilename()).toMatch(/^phan-tich-umre-.*\.md$/)
})

test('Lý thuyết: bài phức điệu có khối "Luật trong bộ máy UMRE" với nguồn, trang và mức kiểm chứng', async ({ page }) => {
  await page.goto('/#/theory/doi-vi-don-gian-hai-be')
  const box = page.locator('[data-umre-rules]')
  await expect(box).toBeVisible({ timeout: 30_000 })
  await box.locator('summary').click()
  await expect(box).toContainText('Song song quãng hoàn toàn')
  await expect(box).toContainText('tr. 9–10')
  await expect(box).toContainText('chưa chuyên gia duyệt')
})

test('Soạn nhạc: phối hoà âm bốn bè giai điệu khuông 1 qua UMRE, mở phương án thành bản mới', async ({ page }) => {
  test.setTimeout(90_000)
  const notes = [[2, 5], [3, 5], [2, 5], [1, 5], [0, 5]] // Mi Fa Mi Rê Đô, one whole note per bar
  await page.addInitScript((ns) => {
    const staves = [ns.map(([step, oct], i) => ({ id: `n${i}`, start: i * 960, dur: 960, notes: [{ step, oct, alter: 0 }] }))]
    localStorage.setItem('compose:scores', JSON.stringify([{ id: 'melody', title: 'Giai điệu thử', clefs: ['treble'], key: 0, time: [4, 4], tempo: 80, measures: 5, attrs: {}, staves, spans: [], updated: 1, v: 2 }]))
    localStorage.setItem('compose:current', 'melody')
  }, notes)
  await page.goto('/#/compose')
  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  const box = page.locator('[data-umre-harmonize]')
  await expect(box).toBeVisible({ timeout: 20_000 })
  await box.getByRole('button', { name: 'Phối hoà âm' }).click()
  await expect(box.locator('li').first()).toContainText('I–IV–I–V–I', { timeout: 40_000 })
  await expect(box.locator('li').first()).toContainText('kiểm độc lập ✓')
  await box.locator('li').first().getByRole('button', { name: 'Mở thành bản mới' }).click()
  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores') ?? '[]')[0]?.staves.length)).toBe(4)
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores') ?? '[]')[0].title)).toBe('Giai điệu thử — phối hoà âm 1')
})
