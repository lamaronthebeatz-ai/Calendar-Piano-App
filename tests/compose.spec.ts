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

test('soạn nhạc đợt 2: liên ba, staccato, sắc thái, luyến, chữ nhịp độ, Segno – D.S.', async ({ page }) => {
  test.setTimeout(90_000)
  await open(page)
  const tab = (name: string) => page.getByRole('tab', { name }).click()
  // a triplet of eighths: tuplet input on, eighth value, three letters
  await page.getByRole('button', { name: 'Móc đơn', exact: true }).click()
  await tab('Liên kết')
  await page.getByRole('button', { name: /^Liên ba/ }).click()
  for (const k of ['c', 'd', 'e']) await page.keyboard.press(k)
  await expect(page.locator('.cmp-svg [data-class="tuplet"]')).toHaveCount(1)
  await page.getByRole('button', { name: /^Liên ba/ }).click()
  await page.keyboard.press('5') // quarter
  await page.keyboard.press('f')
  // staccato and ff on the note just written
  await tab('Kỹ thuật')
  await page.getByRole('button', { name: 'Staccato', exact: true }).click()
  await tab('Sắc thái')
  await page.getByRole('button', { name: 'ff', exact: true }).click()
  await expect(page.locator('.cmp-svg [data-class="artic"]')).not.toHaveCount(0)
  await expect(page.locator('.cmp-svg [data-class="dynam"]')).toHaveCount(1)
  // a slur over the whole first measure: drag across it, then Luyến
  const m = (await page.locator('[data-id="m0"]').boundingBox())!
  const mid = await page.evaluate(() => {
    const ls = [...document.querySelector('[data-id="m0"] > [data-class="staff"]')!.querySelectorAll(':scope > path')].slice(0, 5).map((x) => x.getBoundingClientRect())
    return (ls[0].top + ls[4].bottom) / 2
  })
  await page.mouse.move(m.x + 30, mid)
  await page.mouse.down()
  await page.mouse.move(m.x + m.width - 4, mid, { steps: 8 })
  await page.mouse.up()
  await tab('Liên kết')
  await page.getByRole('button', { name: 'Dấu luyến' }).click()
  await expect(page.locator('.cmp-svg [data-class="slur"]')).toHaveCount(1)
  // tempo text, segno and D.S. al Fine
  await tab('Chữ')
  await page.getByRole('button', { name: 'Allegro', exact: true }).click()
  await expect(page.locator('.cmp-svg [data-class="tempo"]')).toContainText('Allegro')
  await tab('Vạch nhịp · Nhắc lại')
  await page.getByRole('button', { name: /^Segno/ }).click()
  await page.getByRole('button', { name: /^D\.S\. al Fine/ }).click()
  await expect(page.locator('.cmp-svg [data-class="repeatMark"]')).not.toHaveCount(0)
  await page.reload()
  await expect(page.locator('.cmp-svg [data-class="slur"]')).toHaveCount(1, { timeout: 40_000 })
  await expect(page.locator('.cmp-svg [data-class="tuplet"]')).toHaveCount(1)
})

test('soạn nhạc: bản lưu theo đơn vị cũ (48 tick) tự chuyển khi mở', async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    const old = { id: 'old', title: 'Bản cũ', clefs: ['treble'], key: 0, time: [4, 4], tempo: 80, measures: 2, attrs: {}, updated: 1,
      staves: [[{ id: 'a', start: 0, dur: 48, notes: [{ step: 0, oct: 5, alter: 0 }] }, { id: 'r', start: 48, dur: 336, notes: [] }]] }
    localStorage.setItem('compose:scores', JSON.stringify([old]))
    localStorage.setItem('compose:current', JSON.stringify('old'))
  })
  await page.goto('/#/compose')
  await expect(page.locator('.cmp-svg [data-class="note"]')).toHaveCount(1, { timeout: 40_000 })
  // a quarter note still: it fills one beat, the rest of the two bars is rest
  await expect(page.locator('.cmp-svg [data-class="note"] [data-class="stem"]')).toHaveCount(1)
  const v = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0])
  expect(v.v).toBe(2)
  expect(v.staves[0][0].dur).toBe(240)
})

test('soạn nhạc đợt 3: SATB 2 khuông 4 bè, bè 2, lời ca nối âm tiết, tên hợp âm', async ({ page }) => {
  test.setTimeout(90_000)
  await open(page)
  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  await page.getByRole('button', { name: /SATB — 2 khuông/ }).click()
  await expect(page.locator('.cmp-svg [data-class="label"]').first()).toBeVisible({ timeout: 20_000 })
  // soprano: two notes; then voice 2 (alto) on the same staff: one note
  for (const k of ['e', 'd']) await page.keyboard.press(k)
  await page.getByRole('button', { name: /^Bè 2/ }).click()
  await expect(page.locator('.cmp-status')).toContainText('bè 2')
  await page.keyboard.press('c')
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0])
  const count = (i: number) => s.staves[i].filter((e: { notes: unknown[] }) => e.notes.length).length
  expect([count(0), count(1)]).toEqual([2, 1])
  await expect(page.locator('.cmp-svg [data-class="layer"]')).not.toHaveCount(0)
  // lyrics on the soprano: "Ha-" joins to "le"
  await page.getByRole('button', { name: /^Bè 1/ }).click()
  await page.locator('.cmp-svg [data-class="note"]').first().locator('[data-class="notehead"]').click()
  await page.getByRole('tab', { name: 'Lời · Hợp âm' }).click()
  await page.getByRole('button', { name: 'Lời ca', exact: true }).click()
  const box = page.locator('.cmp-entry input')
  await box.pressSequentially('Ha-le ')
  await expect(page.locator('.cmp-svg [data-class="syl"]')).toHaveCount(2)
  await expect(page.locator('.cmp-entry')).toHaveCount(0)
  // a chord symbol on the first soprano note
  await page.locator('.cmp-svg [data-class="note"]').first().locator('[data-class="notehead"]').click()
  await page.getByRole('button', { name: 'Tên hợp âm' }).click()
  await box.fill('Bb7')
  await page.getByRole('button', { name: 'Xong' }).click()
  // Verovio draws the flat as a SMuFL glyph, a private-use character between B and 7
  await expect(page.locator('.cmp-svg [data-class="harm"]')).toContainText(/B[\s\S]*7/)
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0].staves[0][0].harm)).toBe('Bb7')
})

test('soạn nhạc đợt 4: xuất MusicXML rồi mở lại, xuất MIDI, trang in', async ({ page }) => {
  test.setTimeout(90_000)
  await open(page)
  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  await page.getByRole('button', { name: /SATB — 2 khuông/ }).click()
  await expect(page.locator('.cmp-svg [data-class="label"]').first()).toBeVisible({ timeout: 20_000 })
  for (const k of ['e', 'd', 'c']) await page.keyboard.press(k)
  await page.getByRole('button', { name: /^Bè 2/ }).click()
  await page.keyboard.press('a')
  await page.getByRole('button', { name: /^Bè 1/ }).click()
  await page.locator('.cmp-svg [data-class="note"]').first().locator('[data-class="notehead"]').click()
  await page.getByRole('tab', { name: 'Lời · Hợp âm' }).click()
  await page.getByRole('button', { name: 'Lời ca', exact: true }).click()
  await page.locator('.cmp-entry input').pressSequentially('A-men ')
  await page.locator('.cmp-svg [data-class="note"]').first().locator('[data-class="notehead"]').click()
  await page.getByRole('button', { name: 'Tên hợp âm' }).click()
  await page.locator('.cmp-entry input').fill('Bb7')
  await page.getByRole('button', { name: 'Xong' }).click()

  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  const [xml] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'MusicXML', exact: true }).click()])
  // the file is named after the score; headless Chromium under a C locale saves any accented name as "download"
  const path = (await xml.path())!
  const text = (await import('node:fs')).readFileSync(path, 'utf8')
  expect(text).toContain('<syllabic>begin</syllabic><text>A</text>')
  expect(text).toContain('<root-alter>-1</root-alter>')
  const [mid] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'MIDI', exact: true }).click()])
  const head = (await import('node:fs')).readFileSync((await mid.path())!).subarray(0, 4).toString()
  expect(head).toBe('MThd')

  // open the exported file again: a second score with the same notes, voices, lyrics and chord symbol
  await page.locator('.cmp-file input').setInputFiles(path)
  await expect(page.locator('.cmp-status')).toContainText('Đã mở')
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0])
  const notes = (i: number) => s.staves[i].filter((e: { notes: unknown[] }) => e.notes.length)
  expect(s.clefs).toEqual(['treble', 'bass'])
  expect(s.lanes.filter((l: { staff: number }) => l.staff === 0).length).toBe(2)
  expect(notes(0).length).toBe(3)
  expect(notes(0)[0].lyric).toEqual({ text: 'A', hyph: true })
  expect(notes(0)[0].harm).toBe('Bb7')
  await expect(page.locator('.cmp-svg [data-class="syl"]')).toHaveCount(2)

  // print view: engraved A4 pages put in the document for the print dialog
  await page.evaluate(() => (window.print = () => {}))
  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  await page.getByRole('button', { name: 'In / PDF' }).click()
  await expect(page.locator('#score-print svg').first()).toBeAttached()
  await page.emulateMedia({ media: 'print' })
  await expect(page.locator('#score-print')).toBeVisible()
})
