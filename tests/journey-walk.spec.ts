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
  await expect(page).toHaveURL(/w=1/)
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
  await page.getByRole('button', { name: 'Nói chuyện với Thầy quản thư' }).click()
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
  await expect(look).toBeVisible()
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
  await expect(page.getByRole('status')).toContainText('Rào gỗ', { timeout: 15_000 })
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
