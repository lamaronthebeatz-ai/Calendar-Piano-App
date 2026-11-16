import { expect, test, type Page } from '@playwright/test'
import { banThao } from '../src/features/journey/content/ban-thao'
import type { PuzzleDef } from '../src/features/journey/engine/types'

/**
 * "Bản thảo thất lạc", played through the screens from the first conversation to the conclusion: talking (choices),
 * picking things up, every kind of puzzle answered through its own controls, a wrong conclusion first, then reload.
 * The answers come from the content file, so the test follows the content as it changes.
 */
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    if (!localStorage.getItem('journey:v1')) localStorage.setItem('journey:v1', JSON.stringify({ name: 'Minh', portrait: 'p-durer', seen: ['trung-co'], done: ['trung-co/phong-chep-sach', 'trung-co/neume'] }))
  })
})

const puzzle = (id: string) => banThao.puzzles.find((p) => p.id === id) as PuzzleDef<string, never, never>

/** Through a conversation: take the first listed choice on offer, otherwise go on, until it closes. */
async function talk(page: Page, who: string, prefer: string[]) {
  await page.getByRole('button', { name: `Nói chuyện với ${who}` }).click()
  const dialog = page.getByRole('dialog')
  for (let i = 0; i < 30 && (await dialog.isVisible()); i++) {
    let took = false
    for (const t of prefer) {
      const b = dialog.getByRole('button', { name: t, exact: true })
      if (await b.isVisible()) {
        await b.click()
        took = true
        break
      }
    }
    if (took) continue
    const on = dialog.getByRole('button', { name: /^(Tiếp →|Xong)$/ })
    if (await on.isVisible()) await on.click()
    else break
  }
  await expect(dialog).toBeHidden()
}

const textOf = (items: { id: string; text: string }[], id: string) => items.find((x) => x.id === id)!.text

/** Moves rows with the ↑ buttons until they stand in `target` order. */
async function order(page: Page, target: string[]) {
  const rows = page.locator('.ar-order li')
  await expect(rows).toHaveCount(target.length)
  for (let guard = 0; guard < 30; guard++) {
    const texts = await rows.locator('.ar-order-t').allInnerTexts()
    const i = target.findIndex((t, k) => !texts[k].includes(t))
    if (i < 0) break
    const j = texts.findIndex((t) => t.includes(target[i]))
    await rows.nth(j).getByRole('button', { name: 'Lên' }).click()
    // wait for the row to move before reading the list again
    await expect(rows.nth(j - 1).locator('.ar-order-t')).toContainText(target[i])
  }
  await page.getByRole('button', { name: 'Kiểm tra' }).click()
}

async function selects(page: Page, picks: [string, string][]) {
  for (const [row, option] of picks) await page.locator('.ar-rows li', { hasText: row }).locator('select').selectOption({ label: option })
  await page.getByRole('button', { name: 'Kiểm tra' }).click()
}

async function solve(page: Page, thing: string, id: string) {
  await page.getByRole('button', { name: new RegExp(`^${thing}`) }).click()
  const p = puzzle(id)
  const c = p.content as Record<string, never>
  const a = p.answer as never
  if (p.type === 'classify' || p.type === 'match') {
    const rows = (c.items ?? c.left) as { id: string; text: string }[]
    const opts = (c.labels ?? c.right) as { id: string; text: string }[]
    await selects(page, rows.map((r) => [r.text, textOf(opts, (a as Record<string, string>)[r.id])]))
  } else if (p.type === 'order') await order(page, (a as string[]).map((x) => textOf(c.items, x)))
  else if (p.type === 'neume') {
    for (const [i, n] of (a as string[]).entries()) await page.getByLabel(`Tên nốt ${i + 1}`).selectOption(n)
    await page.getByRole('button', { name: 'Kiểm tra' }).click()
  } else if (p.type === 'blank') {
    for (const [k, v] of Object.entries(a as Record<string, string>)) await page.getByLabel(`Ô ${k}`).fill(v)
    await page.getByRole('button', { name: 'Kiểm tra' }).click()
  } else if (p.type === 'hexachord') {
    const items = (c as unknown as { items: { id: string; note: string }[] }).items
    for (const it of items) await page.locator('.ar-rows li', { hasText: new RegExp(`^${it.note} trong`) }).locator('select').selectOption((a as Record<string, string>)[it.id])
    await page.getByRole('button', { name: 'Kiểm tra' }).click()
  } else if (p.type === 'aural') {
    const clips = (c as unknown as { clips: { id: string }[]; mode: string; labels: { id: string; text: string }[] })
    const label = (id: string) => `Đoạn ${'ABCDEFGH'[clips.clips.findIndex((x) => x.id === id)]}`
    if (clips.mode === 'order') await order(page, (a as string[]).map(label))
    else await selects(page, clips.clips.map((x) => [label(x.id), textOf(clips.labels, (a as Record<string, string>)[x.id])]))
  }
  await expect(page.locator('.ar-explain')).toContainText(p.explanation.slice(0, 40))
  await page.getByRole('button', { name: 'Tiếp tục →' }).click()
}

const place = async (page: Page, name: string) => {
  await page.getByRole('button', { name: /^← Bản thảo thất lạc/ }).click()
  await page.locator('.ar-places').getByRole('button', { name: new RegExp(name) }).click()
  await expect(page.locator('.ar-place-title')).toHaveText(name)
}

test('Bản thảo thất lạc: chơi trọn tuyến chính qua giao diện, kết luận cần chứng cứ, mở lại vẫn còn', async ({ page }) => {
  test.setTimeout(120_000)
  await page.goto('/#/hanh-trinh?c=trung-co')
  await page.getByRole('button', { name: /✦ Bản thảo thất lạc/ }).click()
  await expect(page.locator('.ar-objective')).toContainText('Bắt đầu')

  await page.locator('.ar-places').getByRole('button', { name: /Thư viện tu viện Pomposa/ }).click()
  await talk(page, 'Thầy quản thư', ['Pomposa từng có thầy dạy hát nào nổi tiếng?', 'Trang ấy lạ thế nào?'])
  await page.getByRole('button', { name: /^Giá sách phía sau/ }).click()

  await place(page, 'Phòng chép sách')
  await talk(page, 'Thầy Rinaldo', ['Đưa trang bản thảo', 'Thử đọc vài nốt'])
  // a wrong answer is marked and explained nowhere yet; the hint opens; then the right one
  await page.getByRole('button', { name: /^Cuốn sách nốt vuông của bạn/ }).click()
  for (let i = 1; i <= 6; i++) await page.getByLabel(`Tên nốt ${i}`).selectOption('Đô')
  await page.getByRole('button', { name: 'Kiểm tra' }).click()
  await expect(page.locator('.ar-wrong')).toBeVisible()
  await page.getByRole('button', { name: /^Gợi ý/ }).click()
  await expect(page.locator('.ar-hints')).toContainText('dòng có khoá Đô')
  await page.getByRole('button', { name: '← Quay lại' }).click()
  await solve(page, 'Cuốn sách nốt vuông của bạn', 'pz:bt/doc-khoa-do')
  await solve(page, 'Bàn chép: hai lối ghi', 'pz:bt/hai-loi-ghi')

  await place(page, 'Nhà thờ chính toà Arezzo')
  await expect(page.locator('.ar-act.is-talk')).toContainText('nhân vật lịch sử')
  await talk(page, "Guido d'Arezzo", ['Tôi sẽ thử bài tập của ông', 'Làm sao hát được bài chưa từng nghe?'])
  await solve(page, 'Nghe ca đoàn hát Ut queant laxis', 'pz:bt/nghe-ut-queant')
  await solve(page, 'Bảng sáp: sáu nửa câu', 'pz:bt/dien-am-tiet')
  await solve(page, 'Ba khuôn sáu âm', 'pz:bt/luc-am')

  await place(page, 'Nhà ca trưởng, một thế kỷ sau')
  await talk(page, 'Ca trưởng Gualtiero', ['Có văn bản nào ghi như thế không?', 'Hình vẽ trong sách này có từ bao giờ?', 'Cảm ơn thầy'])
  await solve(page, 'Xếp các mốc ký âm', 'pz:bt/nien-dai')
  await solve(page, 'Phân loại chứng cứ', 'pz:bt/phan-loai-chung-cu')
  await solve(page, 'Bốn văn bản của Guido', 'pz:bt/tac-pham-guido')

  await place(page, 'Phòng họp tu viện Pomposa')
  await talk(page, 'Thầy quản thư', [])
  await page.getByRole('button', { name: /^Đặt chứng cứ lên bàn/ }).click()
  // the popular answer, propped up by hearsay: refused, with the reason
  await page.getByLabel(/Có — chính Guido vẽ cả bàn tay/).check()
  await page.getByLabel(/Lời ca trưởng/).check()
  await page.getByLabel(/Lời kể của Sigebert/).check()
  await page.getByRole('button', { name: 'Kiểm tra' }).click()
  await expect(page.locator('.ar-wrong')).toContainText('Không chứng cứ nào cho thấy chính Guido vẽ bàn tay')
  await page.getByLabel(/Guido mô tả hexachord; chuyện dạy/).check()
  await page.getByLabel(/Lời ca trưởng/).uncheck()
  await page.getByLabel(/Văn bản của chính Guido/).check()
  await page.getByLabel(/Hình bàn tay đầy đủ/).check()
  await page.getByRole('button', { name: 'Kiểm tra' }).click()
  await expect(page.locator('.ar-explain')).toContainText('Kết luận vững nhất')
  await page.getByRole('button', { name: 'Tiếp tục →' }).click()

  await page.getByRole('button', { name: /^← Bản thảo thất lạc/ }).click()
  await expect(page.locator('.ar-objective')).toContainText('Đã khép lại')
  await page.getByRole('button', { name: 'Sổ hành trình' }).click()
  await page.getByRole('button', { name: 'Chứng cứ' }).click()
  await expect(page.locator('.ar-book')).toContainText('Lời kể của Sigebert')
  await page.getByRole('button', { name: 'Codex' }).click()
  await expect(page.locator('.ar-book')).toContainText('Hexachord và bàn tay Guido')

  // the save outlives the page: a fresh page of the same browser reads it back. (Not page.reload(): Playwright's WebKit
  // crashes reloading after pushState → back → pushState, even on a bare page — see workflow.md § Bẫy.)
  const again = await page.context().newPage()
  await again.goto('/#/hanh-trinh?c=trung-co&v=arc&a=ban-thao')
  await expect(again.locator('.ar-objective')).toContainText('Đã khép lại')
  await again.goto('/#/hanh-trinh?c=trung-co')
  await expect(again.getByRole('button', { name: /✦ Bản thảo thất lạc ✓/ })).toBeVisible()
})

test('nhiệm vụ phụ nghe một bè hay nhiều bè (đoạn thu thật) vào sổ; chưa có trang bản thảo thì phòng chép chưa mở thử thách', async ({ page }) => {
  await page.goto('/#/hanh-trinh?c=trung-co&v=arc&a=ban-thao')
  await page.locator('.ar-places').getByRole('button', { name: /Thư viện tu viện Pomposa/ }).click()
  await solve(page, 'Hộp nhạc của lữ khách', 'pz:bt/don-am-nhieu-be')
  await place(page, 'Phòng chép sách')
  await talk(page, 'Thầy Rinaldo', ['Chào thầy'])
  // without the page from the library, Rinaldo has nothing to look at yet: the reading table stays closed
  await expect(page.getByRole('button', { name: /^Cuốn sách nốt vuông/ })).toHaveCount(0)
  await page.getByRole('button', { name: /^← Bản thảo thất lạc/ }).click()
  await page.getByRole('button', { name: 'Sổ hành trình' }).click()
  await expect(page.locator('.ar-book')).toContainText('Một bè hay nhiều bè')
  await expect(page.locator('.ar-book')).toContainText('xong')
})
