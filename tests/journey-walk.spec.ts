import { expect, test, type Page } from '@playwright/test'

/**
 * The side-view walk through the Pomposa library (ui/walk): walk, approach, talk (moving locked), examine a thing
 * that gives an item and evidence, the rail that cannot be passed — all written to the same Journey save, read from an
 * old v1 save, and the list screen of the same place still works.
 */
const URL = '/#/hanh-trinh?c=trung-co&v=arc&a=ban-thao&l=loc%3Abt%2Fthu-vien'

test.beforeEach(async ({ page }, info) => {
  if (info.project.name.startsWith('webkit')) await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    sessionStorage.setItem('journey:clip-off', '1')
    localStorage.setItem('onboarding-done', '1')
    // an old (v1) save: the walk view reads it through the same migration as every other screen
    if (!localStorage.getItem('journey:v1')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'], done: ['trung-co/phong-chep-sach', 'trung-co/neume'] }))
  })
})

const player = (page: Page) => page.getByTestId('walk-player')
const x = async (page: Page) => Number((await player(page).getAttribute('style'))?.match(/translate3d\(([-\d.]+)px/)?.[1])
const idle = (page: Page) => expect(player(page)).toHaveAttribute('data-state', 'idle', { timeout: 10_000 })
const save = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('journey:v2') ?? '{}'))

test('đi vào khung cảnh từ màn danh sách, đi, nói chuyện, xem giá sách, vấp rào', async ({ page }) => {
  test.slow() // a walk across the room and a reload; WebKit on a busy CI shard
  await page.goto(URL)
  await page.getByRole('button', { name: 'Đi vào khung cảnh' }).click()
  await expect(page).toHaveURL(/w=sc%3Abt%2Fthu-vien/)
  await idle(page)

  // walk: tap the floor to the right of the figure
  const start = await x(page)
  const st = (await page.getByTestId('walk-stage').boundingBox())!
  await page.mouse.click(st.x + st.width * 0.8, st.y + st.height * 0.6)
  await idle(page)
  expect(await x(page)).toBeGreaterThan(start + 40)

  // the shelf is not usable yet: the quest that sends you there has not started
  await expect(page.getByRole('button', { name: 'Xem: Giá sách phía sau' })).toHaveCount(0)

  // talk: walks up, locks moving, the arc's own dialogue runs
  await page.getByRole('button', { name: 'Nói chuyện với Thầy quản thư' }).evaluate((b: HTMLElement) => b.click())
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  // the player listens to the narrator / the librarian, talks when it is their line
  await expect(player(page)).toHaveAttribute('data-state', /^(talk|listen)$/)
  // moving is locked: the controls are put away and the arrow keys do nothing
  await expect(page.getByRole('button', { name: 'Đi sang phải' })).toBeHidden()
  const before = await x(page)
  await page.keyboard.down('ArrowRight')
  await page.waitForTimeout(400)
  await page.keyboard.up('ArrowRight')
  expect(await x(page)).toBe(before)
  for (let i = 0; i < 20 && (await dialog.isVisible()); i++) {
    const c = dialog.getByRole('button', { name: 'Trang ấy lạ thế nào?' })
    if (await c.isVisible()) await c.click()
    else await dialog.getByRole('button', { name: /^(Tiếp →|Xong)$/ }).click()
  }
  await expect(dialog).toBeHidden()
  await idle(page)
  expect((await save(page)).quests['q:bt/ban-thao'].status).toBe('active')

  // examine: the shelf now holds the page — item and evidence go into the save
  // off-screen on a phone: activated like a screen reader would, the figure still walks there itself
  await page.getByRole('button', { name: 'Xem: Giá sách phía sau' }).evaluate((b: HTMLElement) => b.click())
  const look = page.getByRole('dialog', { name: 'Xem: Giá sách phía sau' })
  await expect(look).toBeVisible({ timeout: 15_000 })
  await expect(player(page)).toHaveAttribute('data-state', 'inspect')
  await expect(player(page)).toHaveAttribute('data-clip', 'read')
  await expect(look).toContainText('Đã ghi vào sổ chứng cứ')
  await look.getByRole('button', { name: 'Xong' }).click()
  await idle(page)
  const s = await save(page)
  expect(s.inventory).toContain('item:bt/trang-ban-thao')
  expect(s.quests['q:bt/ban-thao'].stage).toBe('doc')
  await expect(page.getByRole('button', { name: 'Xem: Giá sách phía sau' })).toHaveCount(0)

  // the rail: holding → stops short of it, with a note
  await page.getByRole('button', { name: 'Đi sang phải' }).dispatchEvent('pointerdown', { pointerId: 1 })
  await expect(page.locator('.wk-note')).toContainText('Không đi qua được', { timeout: 15_000 })
  await expect.poll(() => x(page), { timeout: 15_000 }).toBeGreaterThan(1600)
  await idle(page)
  expect(await x(page)).toBeLessThan(1690)

  // reload: the story state stays, the scene opens again on it
  await page.reload({ waitUntil: 'domcontentloaded' })
  await idle(page)
  await expect(page.getByRole('button', { name: 'Xem: Giá sách phía sau' })).toHaveCount(0)
  await page.getByRole('button', { name: '← Danh sách' }).click()
  await expect(page.getByRole('button', { name: 'Nói chuyện với Thầy quản thư' })).toBeVisible()
})

test('phím mũi tên và E: đi tới thầy quản thư rồi mở hội thoại; Esc đóng và trả lại điều khiển', async ({ page }) => {
  await page.goto(URL + '&w=1')
  await idle(page)
  await page.keyboard.down('ArrowRight')
  // release as soon as the librarian is in reach (polled every frame, so it does not overshoot)
  await page.waitForFunction(() => Number(document.querySelector<HTMLElement>('[data-testid=walk-player]')!.style.transform.match(/\(([-\d.]+)px/)?.[1]) > 600, null, { polling: 'raf', timeout: 10_000 })
  await page.keyboard.up('ArrowRight')
  await idle(page)
  await expect(page.getByRole('button', { name: /^Nói chuyện · Thầy quản thư$/ })).toBeVisible()
  await page.keyboard.press('e')
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toBeHidden()
  await idle(page)
  await expect(page.getByRole('button', { name: 'Đi sang trái' })).toBeEnabled()
})

test('điện thoại dọc: khung cảnh, nút điều khiển không chồng lên nhau và không tràn ngang', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 })
  await page.goto(URL + '&w=1')
  await idle(page)
  const stage = (await page.getByTestId('walk-stage').boundingBox())!
  const right = (await page.getByRole('button', { name: 'Đi sang phải' }).boundingBox())!
  expect(right.y).toBeGreaterThanOrEqual(stage.y + stage.height - 1)
  expect(right.x + right.width).toBeLessThanOrEqual(393)
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(393)
})

const scene = (page: Page) => page.locator('[data-scene]')
const press = (page: Page, name: string | RegExp) => page.getByRole('button', { name }).evaluate((b: HTMLElement) => b.click())

test('chuyển cảnh: thư viện → phòng chép sách → thư viện, xuất hiện đúng chỗ, cửa phòng họp đóng theo tuyến', async ({ page }) => {
  test.slow() // two scene loads, a reload and walks across both rooms
  await page.goto(URL + '&w=1')
  await idle(page)
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien')

  // the council-room door: shut until the arc opens the place — says why, nothing moves
  await press(page, /^Vào: Cửa phòng họp/)
  await expect(page.locator('.wk-note')).toContainText('Cửa phòng họp đang đóng', { timeout: 15_000 })
  await idle(page)
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien')

  // through the passage: the scriptorium loads, the figure stands at its spawn by the door
  await press(page, 'Đi: Hành lang sang phòng chép sách')
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/phong-chep', { timeout: 15_000 })
  // the spawn is used once, then dropped from the address (a reload keeps where the figure stood)
  await expect(page).not.toHaveURL(/sp=/)
  await idle(page)
  expect(await x(page)).toBe(160)
  expect((await save(page)).visited).toEqual(expect.arrayContaining(['loc:bt/thu-vien', 'loc:bt/phong-chep']))
  await expect(page.getByRole('button', { name: 'Nói chuyện với Thầy Rinaldo' })).toBeAttached()

  // the desk is solid: walking right stops in front of it
  await page.getByRole('button', { name: 'Đi sang phải' }).dispatchEvent('pointerdown', { pointerId: 1 })
  await expect.poll(() => x(page), { timeout: 15_000 }).toBeGreaterThan(700)
  await idle(page)
  expect(await x(page)).toBeLessThanOrEqual(758)

  // and back: the library, at the spawn by the passage
  await press(page, 'Đi: Hành lang về thư viện')
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien', { timeout: 15_000 })
  await idle(page)
  expect(await x(page)).toBe(190)

  // reload: same scene, the figure where it stood (screen state kept for the tab, progress in the save)
  await page.mouse.click(...(await (async () => { const b = (await page.getByTestId('walk-stage').boundingBox())!; return [b.x + b.width * 0.75, b.y + b.height * 0.6] as const })()))
  await idle(page)
  const before = await x(page)
  await page.reload({ waitUntil: 'domcontentloaded' })
  await idle(page)
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien')
  expect(Math.abs((await x(page)) - before)).toBeLessThanOrEqual(1)
})

test('bảng khu vực: nơi trong khu vực và các khu vực, khoá theo tuyến; chọn nơi có khung cảnh thì đi tới đó', async ({ page }) => {
  await page.goto(URL + '&w=1')
  await idle(page)
  await page.getByRole('button', { name: 'Khu vực' }).click()
  const panel = page.getByRole('dialog', { name: 'Khu vực và thế giới' })
  await expect(panel).toContainText('Tu viện Pomposa')
  await expect(panel.getByRole('button', { name: /Thư viện tu viện Pomposa/ })).toBeDisabled() // here
  await expect(panel.getByRole('button', { name: /Nơi chưa mở/ })).toBeDisabled() // council room, locked
  await expect(panel.getByRole('button', { name: /Khu vực chưa mở/ })).toBeDisabled() // Arezzo
  await panel.getByRole('button', { name: /Phòng chép sách/ }).click()
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/phong-chep', { timeout: 15_000 })
})

test('lỗi tải tranh của cảnh: báo lỗi, thử lại được, về danh sách được', async ({ page }) => {
  let block = true
  await page.route(/\/assets\/pomposa-[^/]*\.js$/, (r) => (block ? r.abort() : r.continue()))
  await page.goto(URL + '&w=1')
  await expect(page.getByRole('alert')).toContainText('Không mở được khung cảnh', { timeout: 15_000 })
  block = false
  // retry: a fresh import (Chromium) or a reload. WebKit may keep the failed chunk even across the reload (seen on CI):
  // then the error screen must still stand, with its way back to the list screen working
  await page.getByRole('button', { name: 'Thử lại' }).click()
  const alert = page.getByRole('alert')
  await expect(scene(page).or(alert)).toBeVisible({ timeout: 20_000 })
  if (await scene(page).isVisible()) {
    await idle(page)
    await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien')
  } else {
    await expect(alert.getByRole('button', { name: 'Thử lại' })).toBeVisible()
    await alert.getByRole('button', { name: '← Danh sách' }).click()
    await expect(page.getByRole('button', { name: 'Nói chuyện với Thầy quản thư' })).toBeVisible()
  }
})

test('địa chỉ khung cảnh không có → màn danh sách của nơi đó', async ({ page }) => {
  await page.goto(URL + '&w=sc%3Akhong-co')
  await expect(page.getByRole('button', { name: 'Nói chuyện với Thầy quản thư' })).toBeVisible()
})

test('nhân vật và hoạt ảnh: nói/nghe theo câu, nét mặt, NPC chỉ đường sau hội thoại, người đi ngang, với tay lấy đồ', async ({ page }) => {
  await page.goto(URL + '&w=1')
  await idle(page)
  const npc = page.getByTestId('walk-npc-librarian')
  await expect(npc).toHaveAttribute('data-clip', 'read') // his own resting clip
  await press(page, 'Nói chuyện với Thầy quản thư')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible({ timeout: 15_000 })
  // the narrator's line: both listen; then the librarian's line: he talks, thoughtful, the player listens
  await expect(npc).toHaveAttribute('data-state', 'listen')
  await dialog.getByRole('button', { name: 'Tiếp →' }).click()
  await expect(npc).toHaveAttribute('data-state', 'talk')
  await expect(npc).toHaveAttribute('data-clip', 'talk')
  await expect(npc).toHaveAttribute('data-mood', 'thoughtful')
  await expect(player(page)).toHaveAttribute('data-state', 'listen')
  // he faces the player (the player stands to his left)
  await expect(npc.locator('.ch-flip')).toHaveAttribute('style', /scaleX\(-1\)/)
  for (let i = 0; i < 20 && (await dialog.isVisible()); i++) {
    const c = dialog.getByRole('button', { name: 'Trang ấy lạ thế nào?' })
    if (await c.isVisible()) await c.click()
    else await dialog.getByRole('button', { name: /^(Tiếp →|Xong)$/ }).click()
  }
  await expect(dialog).toBeHidden()
  // the quest is on: he turns to the shelf and points, says so, then rests; the player is free again
  await expect(page.locator('.wk-note')).toContainText('chỉ về giá sách', { timeout: 15_000 })
  await idle(page)
  await expect(npc).toHaveAttribute('data-state', 'idle')

  // walking toward the shelf: a lay brother crosses with his books, then leaves through the council door
  await press(page, 'Xem: Giá sách phía sau')
  await expect(page.locator('[data-testid^="walk-npc-extra:"]')).toBeAttached({ timeout: 15_000 })
  await expect(player(page)).toHaveAttribute('data-clip', /^(reach|read)$/, { timeout: 15_000 })
  await expect(page.getByRole('dialog', { name: 'Xem: Giá sách phía sau' })).toBeVisible({ timeout: 15_000 })
  await expect(player(page)).toHaveAttribute('data-clip', 'read')
  await page.getByRole('dialog').getByRole('button', { name: 'Xong' }).click()
  await idle(page)
  await expect(page.locator('[data-testid^="walk-npc-extra:"]')).toHaveCount(0, { timeout: 15_000 })
})

/** a conversation through the scene: take each wanted line once when offered, else go on, until it closes */
async function converse(page: Page, who: string, picks: string[]) {
  await press(page, `Nói chuyện với ${who}`)
  const d = page.getByRole('dialog')
  // the figure walks up and greets first: slow on WebKit under CI load
  await expect(d).toBeVisible({ timeout: 30_000 })
  const left = [...picks]
  for (let i = 0; i < 30 && (await d.isVisible()); i++) {
    const wanted = []
    for (const t of left) if (await d.getByRole('button', { name: t, exact: true }).isVisible()) wanted.push(t)
    if (wanted.length) {
      await d.getByRole('button', { name: wanted[0], exact: true }).click()
      left.splice(left.indexOf(wanted[0]), 1)
      continue
    }
    const on = d.getByRole('button', { name: /^(Tiếp →|Xong)$/ })
    if (await on.isVisible()) await on.click()
    else break
  }
  await expect(d).toBeHidden()
  await idle(page)
}
const journal = async (page: Page) => {
  // pressed directly: WebKit on a loaded CI machine may never report the header button 'stable'
  await page.locator('.wk-top').getByRole('button', { name: 'Sổ tay', exact: true }).evaluate((b: HTMLElement) => b.click())
  const book = page.getByRole('dialog', { name: 'Sổ hành trình' })
  await expect(book).toBeVisible()
  const text = await book.locator('.st-journal').innerText()
  await book.getByRole('button', { name: 'Đóng sổ' }).click()
  return text
}

test('tuyến "Ghi chú bên lề": khảo sát trang sách, hỏi, chọn điều tra, lời kể thứ hai, nhật ký, tải lại', async ({ page }) => {
  test.slow() // three conversations, a document, a reload and a scene change
  await page.goto(URL + '&w=1')
  await idle(page)
  await converse(page, 'Thầy quản thư', ['Trang ấy lạ thế nào?'])
  // the beat is recorded in the save (its short on-screen line may already have faded on a slow machine)
  await expect.poll(async () => (await save(page)).flags, { timeout: 15_000 }).toContain('beat:bt:sach-mo')

  // the open book on the lectern: looked over spot by spot (not one text box)
  await press(page, 'Khảo sát: Sách ca trên bục đọc')
  const doc = page.getByRole('dialog', { name: /^Khảo sát:/ })
  await expect(doc).toBeVisible({ timeout: 15_000 })
  await expect(doc.getByRole('button', { name: /Ghi chú bên lề/ })).toHaveCount(0) // not noticed yet
  await doc.getByRole('button', { name: /Xem kỹ: Dòng kẻ và chữ khoá/ }).click()
  await expect(doc).toContainText('Dữ kiện có nguồn')
  await expect(doc).toContainText('Neume trên dòng kẻ') // the evidence it rests on
  await doc.getByRole('button', { name: /Xem kỹ: Chỗ giấy da bị cạo/ }).click()
  await expect(doc).toContainText('Hư cấu')
  await doc.getByRole('button', { name: /Xem kỹ: Ghi chú bên lề/ }).click()
  await expect.poll(async () => (await save(page)).flags, { timeout: 15_000 }).toContain('beat:bt:chu-r')
  await doc.getByRole('button', { name: 'Xong' }).click()
  await idle(page)

  // the librarian's account, then the decision: ask Rinaldo first
  await converse(page, 'Thầy quản thư', ['Ai đã cạo trang sách ca trên bục đọc?', 'Con muốn hỏi thầy Rinaldo trước đã.'])
  let j = await journal(page)
  expect(j).toContain('Giả thuyết')
  expect(j).toContain('bạn muốn nghe thầy Rinaldo trước khi tin')
  expect(j).not.toContain('chính thầy nhận') // nothing told before it is found

  // reload: the story stands where it was
  await page.reload({ waitUntil: 'domcontentloaded' })
  await idle(page)
  j = await journal(page)
  expect(j).toContain('bạn muốn nghe thầy Rinaldo trước khi tin')

  // the second account: Rinaldo, in the scriptorium
  await press(page, 'Đi: Hành lang sang phòng chép sách')
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/phong-chep', { timeout: 15_000 })
  await idle(page)
  await converse(page, 'Thầy Rinaldo', ['Thầy có cạo một trang sách ca trong thư viện không?'])
  j = await journal(page)
  expect(j).toContain('Đã xác nhận')
  expect(j).toContain('chính thầy nhận')
  expect(j).toContain('Một trang, hai lời kể')
  const s = await save(page)
  expect(s.inventory).toContain('item:bt/manh-cu')
  expect(s.quests['q:bt/ghi-chu']).toMatchObject({ status: 'active', stage: 'doi-chieu' })
})
