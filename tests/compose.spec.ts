import { test, expect, type Page } from '@playwright/test'

/**
 * The score editor: white paper from Verovio, a tap on the staff writes the note at that pitch, undo, Sibelius-like
 * letter keys, a held note opens the ring (slide right = sharp), and the score is still there after a reload.
 * The mouse drives the same pointer path as a finger, so this runs on WebKit too.
 */
async function open(page: Page) {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
  await page.goto('/#/compose')
  await page.evaluate(() => localStorage.removeItem('compose:scores'))
  await page.reload()
  await expect(page.locator('.cmp-svg > svg')).toBeVisible({ timeout: 40_000 })
}
const stored = (page: Page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores') ?? '[]')[0]?.staves[0].filter((e: { notes: unknown[] }) => e.notes.length).length ?? 0)

test('soạn nhạc: chạm đặt nốt, hoàn tác, phím tắt, nhấn giữ để thăng, lưu lại', async ({ page }) => {
  test.setTimeout(90_000)
  await open(page)
  // the top staff of measure 1: a click one step below the bottom line writes Re4 (D4) on the first beat
  const g = await page.evaluate(() => {
    const st = document.querySelector('[data-id="m0"] > [data-class="staff"]')!
    const ls = [...st.querySelectorAll(':scope > path')].slice(0, 5).map((x) => x.getBoundingClientRect())
    const m = document.querySelector('[data-id="m0"]')!.getBoundingClientRect()
    return { bottom: (ls[4].top + ls[4].bottom) / 2, space: (ls[4].top - ls[0].top) / 4, x: m.left + m.width * 0.42 }
  })
  await page.mouse.click(g.x, g.bottom + g.space / 2)
  await expect(page.locator('.cmp-svg [data-class="note"]')).toHaveCount(1)
  await expect.poll(() => stored(page)).toBe(1)

  await page.getByRole('button', { name: 'Hoàn tác' }).click()
  await expect(page.locator('.cmp-svg [data-class="note"]')).toHaveCount(0)

  for (const k of ['c', 'd', 'e']) await page.keyboard.press(k)
  await expect(page.locator('.cmp-svg [data-class="note"]')).toHaveCount(3)

  // hold the second note, slide right, let go: it becomes sharp
  const n = (await page.locator('.cmp-svg [data-class="note"]').nth(1).locator('[data-class="notehead"]').boundingBox())!
  const cx = n.x + n.width / 2
  const cy = n.y + n.height / 2
  await page.mouse.move(cx, cy)
  await page.mouse.down()
  await expect(page.locator('.cmp-radial-hub')).toBeVisible({ timeout: 2000 })
  await page.mouse.move(cx + 40, cy, { steps: 4 })
  await page.mouse.move(cx + 80, cy, { steps: 4 })
  await page.mouse.up()
  await expect(page.locator('.cmp-status')).toContainText(/Rê♯\d/)
  await expect(page.locator('.cmp-svg .is-sel')).not.toHaveCount(0)

  await page.reload()
  await expect(page.locator('.cmp-svg [data-class="note"]')).toHaveCount(3, { timeout: 40_000 })
})

test('soạn nhạc: đổi số chỉ nhịp và giọng từ bảng công cụ', async ({ page }) => {
  test.setTimeout(90_000)
  await open(page)
  await page.getByRole('tab', { name: 'Khoá · Giọng · Nhịp' }).click()
  await page.getByRole('button', { name: 'Nhịp 3/4' }).click()
  await page.locator('.cmp-select select').selectOption('-2')
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0])
  expect(s.time).toEqual([3, 4])
  expect(s.key).toBe(-2)
  await expect(page.locator('.cmp-svg [data-class="keySig"]').first()).toBeVisible()
})
