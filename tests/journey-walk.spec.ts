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
  await expect(player(page)).toHaveAttribute('data-state', 'talk')
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
  await expect(player(page)).toHaveAttribute('data-state', 'examine')
  await expect(look).toContainText('Đã ghi vào sổ chứng cứ')
  await look.getByRole('button', { name: 'Xong' }).click()
  await idle(page)
  const s = await save(page)
  expect(s.inventory).toContain('item:bt/trang-ban-thao')
  expect(s.quests['q:bt/ban-thao'].stage).toBe('doc')
  await expect(page.getByRole('button', { name: 'Xem: Giá sách phía sau' })).toHaveCount(0)

  // the rail: holding → stops short of it, with a note
  await page.getByRole('button', { name: 'Đi sang phải' }).dispatchEvent('pointerdown', { pointerId: 1 })
  await expect(page.getByRole('status')).toContainText('Không đi qua được', { timeout: 15_000 })
  await expect.poll(() => x(page), { timeout: 15_000 }).toBeGreaterThan(1600)
  await idle(page)
  expect(await x(page)).toBeLessThan(1690)

  // reload: the story state stays, the scene opens again on it
  await page.reload()
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
const use = (page: Page, name: string | RegExp) => page.getByRole('button', { name }).evaluate((b: HTMLElement) => b.click())

test('chuyển cảnh: thư viện → phòng chép sách → thư viện, xuất hiện đúng chỗ, cửa phòng họp đóng theo tuyến', async ({ page }) => {
  await page.goto(URL + '&w=1')
  await idle(page)
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien')

  // the council-room door: shut until the arc opens the place — says why, nothing moves
  await use(page, /^Vào: Cửa phòng họp/)
  await expect(page.getByRole('status')).toContainText('Cửa phòng họp đang đóng', { timeout: 15_000 })
  await idle(page)
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien')

  // through the passage: the scriptorium loads, the figure stands at its spawn by the door
  await use(page, 'Đi: Hành lang sang phòng chép sách')
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
  await use(page, 'Đi: Hành lang về thư viện')
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien', { timeout: 15_000 })
  await idle(page)
  expect(await x(page)).toBe(190)

  // reload: same scene, the figure where it stood (screen state kept for the tab, progress in the save)
  await page.mouse.click(...(await (async () => { const b = (await page.getByTestId('walk-stage').boundingBox())!; return [b.x + b.width * 0.75, b.y + b.height * 0.6] as const })()))
  await idle(page)
  const before = await x(page)
  await page.reload()
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
  // retry: a fresh import (Chromium) or, where the failed import stays cached for the page (WebKit), a reload
  await page.getByRole('button', { name: 'Thử lại' }).click()
  await expect(scene(page)).toBeVisible({ timeout: 20_000 })
  await idle(page)
  await expect(scene(page)).toHaveAttribute('data-scene', 'sc:bt/thu-vien')
})

test('địa chỉ khung cảnh không có → màn danh sách của nơi đó', async ({ page }) => {
  await page.goto(URL + '&w=sc%3Akhong-co')
  await expect(page.getByRole('button', { name: 'Nói chuyện với Thầy quản thư' })).toBeVisible()
})
