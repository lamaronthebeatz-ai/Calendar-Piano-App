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
    // these tests drive the full palette; a phone starts with it folded away
    localStorage.setItem('compose:palette-open2', 'true')
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
  await page.locator('.cmp-palette').getByRole('button', { name: 'Móc đơn', exact: true }).click()
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

test('soạn nhạc: tứ tấu đàn dây — tiếng dây thật, đổi nhạc cụ, MusicXML ghi nhạc cụ', async ({ page }) => {
  test.setTimeout(90_000)
  const fetched: string[] = []
  page.on('request', (r) => r.url().includes('/media/instruments/') && fetched.push(r.url()))
  await open(page)
  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  await page.getByRole('button', { name: 'Tứ tấu đàn dây' }).click()
  await expect(page.locator('.cmp-svg [data-class="label"]')).toHaveCount(4, { timeout: 20_000 })
  // the samples of the three instruments come as the score opens
  await expect.poll(() => new Set(fetched.map((u) => u.split('/media/instruments/')[1].split('/')[0])).size).toBe(3)
  await page.keyboard.press('c')
  await page.getByRole('button', { name: 'Nghe' }).click()
  await expect(page.getByRole('button', { name: 'Dừng' })).toBeVisible({ timeout: 15_000 })
  await page.getByRole('button', { name: 'Dừng' }).click()
  // the cello becomes a double bass: name, clef stay bass, sound an octave down
  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  await page.getByLabel('Nhạc cụ khuông 4').selectOption('contrabass')
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0])
  expect(s.instruments).toEqual(['violin', 'violin', 'viola', 'contrabass'])
  expect(s.labels[3]).toBe('Contrabass')
  expect(s.clefs).toEqual(['treble', 'treble', 'alto', 'bass'])
  const [xml] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'MusicXML', exact: true }).click()])
  const text = (await import('node:fs')).readFileSync((await xml.path())!, 'utf8')
  expect(text).toContain('<midi-program>41</midi-program>')
  expect(text).toContain('<octave-change>-1</octave-change>')
})

test('soạn nhạc: kèn gỗ, kèn đồng và dàn nhạc — đúng nhạc cụ, tải tiếng thật, phát được', async ({ page }) => {
  test.setTimeout(120_000)
  const fetched = new Set<string>()
  page.on('request', (r) => r.url().includes('/media/instruments/') && fetched.add(r.url().split('/media/instruments/')[1].split('/')[0]))
  await open(page)
  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  await page.getByRole('button', { name: 'Ngũ tấu kèn đồng' }).click()
  await expect(page.locator('.cmp-svg [data-class="label"]')).toHaveCount(5, { timeout: 20_000 })
  await expect.poll(() => [...fetched].sort().join()).toBe('horn,trombone,trumpet,tuba')
  await page.keyboard.press('c')
  await page.getByRole('button', { name: 'Nghe' }).click()
  await expect(page.getByRole('button', { name: 'Dừng' })).toBeVisible({ timeout: 15_000 })
  await page.getByRole('button', { name: 'Dừng' }).click()

  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  await page.getByRole('button', { name: 'Ngũ tấu kèn gỗ' }).click()
  await expect.poll(() => ['flute', 'oboe', 'clarinet', 'bassoon'].every((i) => fetched.has(i))).toBe(true)
  await page.getByRole('button', { name: 'Bản nhạc và tuỳ chọn' }).click()
  await page.getByRole('button', { name: 'Dàn nhạc (13 bè)' }).click()
  await expect(page.locator('.cmp-svg [data-class="label"]')).toHaveCount(13, { timeout: 20_000 })
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0])
  expect(s.instruments).toEqual(['flute', 'oboe', 'clarinet', 'bassoon', 'horn', 'trumpet', 'trombone', 'tuba', 'violin', 'violin', 'viola', 'cello', 'contrabass'])
  expect(s.clefs[3]).toBe('bass')
})

test('soạn nhạc: thanh nhập nhanh — phím đàn, đổi trường độ, chọn một ô, nhân đôi, sang khuông dưới', async ({ page }) => {
  test.setTimeout(90_000)
  await open(page)
  const key = (n: string) => page.locator(`.cmp-keys button[aria-label="${n}"]`).first().click()
  for (const n of ['Đô4', 'Rê4', 'Mi4', 'Fa4']) await key(n)
  await page.getByRole('toolbar', { name: 'Thanh nhập nhanh' }).getByRole('button', { name: 'Trắng', exact: true }).click()
  await key('Sol4')
  // drag across bar 1 only (the second system lies right under it), then ×2
  const m = (await page.locator('[data-id="m0"]').boundingBox())!
  const mid = await page.evaluate(() => {
    const ls = [...document.querySelector('[data-id="m0"] > [data-class="staff"]')!.querySelectorAll(':scope > path')].slice(0, 5).map((x) => x.getBoundingClientRect())
    return (ls[0].top + ls[4].bottom) / 2
  })
  await page.mouse.move(m.x + 30, mid)
  await page.mouse.down()
  await page.mouse.move(m.x + m.width - 4, mid, { steps: 8 })
  await page.mouse.up()
  await page.getByRole('button', { name: 'Nhân đôi đoạn chọn' }).click()
  await expect(page.locator('.cmp-status')).toContainText('đè lên 1 nốt')
  const treble = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0].staves[0].filter((e: { notes: unknown[] }) => e.notes.length).map((e: { notes: { step: number }[] }) => 'CDEFGAB'[e.notes[0].step]).join(''))
  expect(treble).toBe('CDEFCDEF')
  // the bass staff starts where it was left: empty, so at the beginning
  await page.getByRole('button', { name: 'Sang khuông khác' }).click()
  await key('Đô3')
  const bass = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0].staves[1].find((e: { notes: unknown[] }) => e.notes.length))
  expect(bass.start).toBe(0)
})

test.describe('soạn nhạc trên tablet', () => {
  test.use({ viewport: { width: 834, height: 1194 }, hasTouch: true, isMobile: true })
  test('phím đàn phủ hết chiều ngang, công cụ gom vào dải trên phím đàn', async ({ page }) => {
    test.setTimeout(90_000)
    await open(page)
    // no floating panel: one band with the tabs, "Nhanh" first
    await expect(page.locator('.cmp-palette.is-docked')).toBeVisible()
    await expect(page.locator('.cmp-fab')).toHaveCount(0)
    await expect(page.getByRole('tab', { name: 'Nhanh' })).toHaveAttribute('aria-selected', 'true')
    const k = await page.evaluate(() => ({ row: document.querySelector('.cmp-keys-row')!.getBoundingClientRect().width, vw: innerWidth }))
    expect(k.row).toBeGreaterThan(k.vw - 24)
    await page.locator('.cmp-keys button[aria-label="Đô5"]').first().tap()
    await page.getByRole('tab', { name: 'Sắc thái' }).tap()
    await page.getByRole('button', { name: 'ff', exact: true }).tap()
    await expect(page.locator('.cmp-svg [data-class="dynam"]')).toHaveCount(1)
  })
})

test('soạn nhạc: phím tắt như MuseScore 4', async ({ page }) => {
  test.skip(test.info().project.name.endsWith('phone'), 'bàn phím máy tính')
  test.setTimeout(90_000)
  await open(page)
  const notes = () => page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0].staves[0].filter((e: { notes: unknown[] }) => e.notes.length))
  await page.keyboard.press('5') // quarter
  for (const k of ['c', 'e', 'g']) await page.keyboard.press(k)
  await page.keyboard.press('Shift+C') // C above the G: G5 + C6
  await page.keyboard.press('Alt+Digit3') // a third above the top: E6
  let n = await notes()
  expect(n.length).toBe(3)
  expect(n[2].notes.map((x: { step: number; oct: number }) => 'CDEFGAB'[x.step] + x.oct)).toEqual(['G5', 'C6', 'E6'])
  // select the first note, a semitone up, an octave up
  await page.keyboard.press('Control+ArrowLeft')
  await page.keyboard.press('ArrowUp')
  n = await notes()
  expect(n[0].notes[0]).toMatchObject({ step: 0, oct: 5, alter: 1 })
  await page.keyboard.press('Control+ArrowUp')
  n = await notes()
  expect(n[0].notes[0]).toMatchObject({ step: 0, oct: 6, alter: 1 })
  // J: C♯ is D♭
  await page.keyboard.press('j')
  n = await notes()
  expect(n[0].notes[0]).toMatchObject({ step: 1, oct: 6, alter: -1 })
  // Shift+S staccato, W doubles the value of the selection
  await page.keyboard.press('Shift+S')
  await page.keyboard.press('w')
  n = await notes()
  expect(n[0].artic).toEqual(['stacc'])
  expect(n[0].dur).toBe(480)
  // the half note took the second beat's note (writing overwrites): two left; Ctrl+A, then R repeats them after
  expect(n.length).toBe(2)
  await page.keyboard.press('Control+a')
  await page.keyboard.press('r')
  n = await notes()
  expect(n.length).toBe(4)
})

test('soạn nhạc: nhóm trường độ và gạch nối đuôi theo số chỉ nhịp (4/4, 3/4, 6/8)', async ({ page }) => {
  test.setTimeout(90_000)
  const E = 120
  const score = (id: string, time: number[], evs: number[][]) => ({
    id, title: id, clefs: ['treble'], key: 0, time, tempo: 80, measures: 1, attrs: {}, spans: [], v: 2, updated: 1,
    staves: [evs.map(([s, d], i) => ({ id: `${id}${i}`, start: s, dur: d, notes: [{ step: i % 7, oct: 4, alter: 0 }] }))],
  })
  const cases: [ReturnType<typeof score>, number, number][] = [
    [score('a', [4, 4], [0, 1, 2, 3, 4, 5, 6, 7].map((i) => [i * E, E])), 2, 0], // two groups of four, never across the middle
    [score('b', [3, 4], [0, 1, 2, 3, 4, 5].map((i) => [i * E, E])), 1, 0], // the whole bar
    [score('c', [6, 8], [0, 1, 2, 3, 4, 5].map((i) => [i * E, E])), 2, 0], // by dotted quarter
    [score('d', [4, 4], [[0, 240], [240, 480], [720, 240]]), 0, 1], // a half on beat 2 is two tied quarters
  ]
  await page.addInitScript((all) => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    if (!sessionStorage.getItem('seeded')) {
      localStorage.setItem('compose:scores', JSON.stringify(all))
      sessionStorage.setItem('seeded', '1')
    }
  }, cases.map((c) => c[0]))
  await page.goto('/#/compose')
  for (const [s, beams, ties] of cases) {
    await page.evaluate((id) => localStorage.setItem('compose:current', JSON.stringify(id)), s.id)
    await page.reload()
    await expect(page.locator('.cmp-svg > svg')).toBeVisible({ timeout: 40_000 })
    await expect(page.locator('.cmp-svg [data-class="beam"]')).toHaveCount(beams)
    await expect(page.locator('.cmp-svg [data-class="tie"]')).toHaveCount(ties)
  }
})

test.describe('soạn nhạc trên tablet: mọi ngăn nằm gọn một hàng', () => {
  test.use({ viewport: { width: 834, height: 1194 }, hasTouch: true, isMobile: true })
  test('không ngăn nào tràn khỏi dải công cụ hay đè lên phím đàn', async ({ page }) => {
    test.setTimeout(90_000)
    await open(page)
    const tabs = await page.getByRole('tab').allTextContents()
    for (const name of tabs) {
      await page.getByRole('tab', { name, exact: true }).tap()
      const r = await page.evaluate(() => {
        const pane = document.querySelector('.cmp-pane')!.getBoundingClientRect()
        const keys = document.querySelector('.cmp-keys')!.getBoundingClientRect()
        const kids = [...document.querySelectorAll('.cmp-pane button, .cmp-pane select')].map((e) => e.getBoundingClientRect()).filter((b) => b.width)
        return { out: kids.filter((b) => b.top < pane.top - 1 || b.bottom > pane.bottom + 1).length, overKeys: kids.filter((b) => b.bottom > keys.top + 1).length, n: kids.length }
      })
      expect(r.n, name).toBeGreaterThan(0)
      expect(r.out, `${name}: nút tràn khỏi hàng`).toBe(0)
      expect(r.overKeys, `${name}: đè lên phím đàn`).toBe(0)
    }
  })
})

test('soạn nhạc: thu từ phím đàn theo máy đánh nhịp, làm tròn rồi ghi vào bản nhạc', async ({ page }) => {
  test.setTimeout(90_000)
  await open(page)
  await page.getByRole('button', { name: 'Thu', exact: true }).click()
  // a fast click so the test is short: 240 → a beat is 0.25 s, the bar counted in is 1 s
  const sheet = page.getByRole('dialog', { name: 'Thu', exact: true })
  await sheet.getByRole('radio', { name: /Phím đàn app/ }).click()
  await sheet.getByRole('spinbutton').fill('240')
  await sheet.getByRole('button', { name: 'Móc đơn', exact: true }).click()
  await sheet.getByRole('button', { name: '● Bắt đầu thu' }).click()
  await expect(page.locator('.cmp-status')).toContainText('Đang thu', { timeout: 5000 })
  // two quarter notes on beats 1 and 2 of the first bar (held for most of a beat)
  const key = (n: string) => page.locator(`.cmp-keys button[aria-label="${n}"]`).first()
  for (const n of ['Đô5', 'Mi5']) {
    const b = (await key(n).boundingBox())!
    await page.mouse.move(b.x + b.width / 2, b.y + b.height - 10)
    await page.mouse.down()
    await page.waitForTimeout(200)
    await page.mouse.up()
    await page.waitForTimeout(50)
  }
  await page.getByRole('button', { name: 'Dừng thu' }).click()
  await expect(page.locator('.cmp-status')).toContainText('Đã thu 2 nốt')
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0])
  const notes = s.staves[0].filter((e: { notes: unknown[] }) => e.notes.length)
  expect(notes.map((e: { notes: { step: number; oct: number }[] }) => 'CDEFGAB'[e.notes[0].step] + e.notes[0].oct)).toEqual(['C5', 'E5'])
  // rounded to the eighth grid, in time order, within the first two bars (the test's mouse is not a pianist's hand)
  for (const e of notes) expect([e.start % 120, e.dur % 120]).toEqual([0, 0])
  expect(notes[1].start).toBeGreaterThan(notes[0].start)
  expect(notes[1].start + notes[1].dur).toBeLessThanOrEqual(1920)
})
