import { test, expect } from '@playwright/test'
import { writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

/**
 * Recording from a microphone into the score: a synthesised piano melody (C5 E5 G5 C6, one per beat at ♩ = 120) is
 * fed to Chromium's fake microphone after the bar the click counts in; Basic Pitch hears it, the preview shows, and
 * "Ghi vào bản nhạc" writes the four notes in order. Chromium only (WebKit has no fake audio capture).
 */
const SR = 22050
function melody(chords: number[][], lead: number, beat: number, weakBelow = 0) {
  const out: number[] = new Array(Math.round(SR * lead)).fill(0)
  for (const ch of chords) {
    const n = Math.round(SR * beat)
    for (let i = 0; i < n; i++) {
      const t = i / SR
      let v = 0
      for (const m of ch) {
        const f = 440 * 2 ** ((m - 69) / 12)
        // a phone's microphone hears almost nothing of a low note's fundamental
        for (let k = 1; k <= 6; k++) v += ((k === 1 && m < weakBelow ? 0.05 : 1) / k ** 1.1) * Math.exp(-t * (1.2 + 0.4 * k)) * Math.sin(2 * Math.PI * f * k * t + k)
      }
      out.push(i < n - SR * 0.04 ? v * Math.min(1, t / 0.004) : 0)
    }
  }
  for (let i = 0; i < SR * 2; i++) out.push(0)
  const peak = out.reduce((a, v) => Math.max(a, Math.abs(v)), 0)
  const buf = Buffer.alloc(44 + out.length * 2)
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + out.length * 2, 4); buf.write('WAVEfmt ', 8)
  buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22); buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 2, 28)
  buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(out.length * 2, 40)
  out.forEach((v, i) => buf.writeInt16LE(Math.round((v / peak) * 0.5 * 32767), 44 + i * 2))
  return buf
}
const wav = join(tmpdir(), 'compose-mic-low-test.wav')
// the click counts in one bar of 4/4 at 120 (2 s) before the first recorded beat
writeFileSync(wav, melody([[48, 76], [43, 74], [48, 72]], 2.05, 0.5, 55))
test.use({ launchOptions: { args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-audio-capture=${wav}%noloop`] } })

test('soạn nhạc: thu bằng micro — nốt trầm thiếu âm cơ bản (micro điện thoại) vẫn đúng quãng tám, tách hai tay', async ({ page }) => {
  test.setTimeout(150_000)
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
    localStorage.setItem('compose:rec', JSON.stringify({ tempo: 120, grid: 240, method: 'mic' }))
  })
  await page.goto('/#/compose')
  await expect(page.locator('.cmp-svg > svg')).toBeVisible({ timeout: 40_000 })
  await page.getByRole('button', { name: 'Thu', exact: true }).click()
  await page.getByRole('dialog', { name: 'Thu', exact: true }).getByRole('button', { name: '● Bắt đầu thu' }).click()
  await expect(page.locator('.cmp-status')).toContainText('Đang thu bằng micro', { timeout: 6000 })
  await page.waitForTimeout(4000)
  await page.getByRole('button', { name: 'Dừng thu' }).click()
  const review = page.getByRole('dialog', { name: 'Xem trước bản thu' })
  await expect(review).toBeVisible({ timeout: 90_000 })
  await review.getByRole('button', { name: 'Ghi vào bản nhạc' }).click()
  const s = await page.evaluate(() => JSON.parse(localStorage.getItem('compose:scores')!)[0])
  const names = (i: number) => s.staves[i].filter((e: { notes: unknown[] }) => e.notes.length).map((e: { notes: { step: number; oct: number }[] }) => e.notes.map((n) => 'CDEFGAB'[n.step] + n.oct).join('+'))
  expect(names(0)).toEqual(['E5', 'D5', 'C5'])
  expect(names(1)).toEqual(['C3', 'G2', 'C3'])
})
