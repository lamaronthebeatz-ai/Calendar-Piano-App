import { test, expect } from '@playwright/test'
import { writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

/**
 * The chord ear end to end: a synthesized piano (C – G7 – C – Am) is fed to Chromium's fake microphone, and the page
 * must name each chord, light the way taken ("Kết trọn") and never name the cluster and noise that follow.
 * Chromium only: WebKit has no fake audio capture.
 */
const SR = 22050
function synth(chords: number[][], dur = 2.4) {
  const parts: number[] = new Array(Math.round(SR * 0.5)).fill(0)
  let seed = 7
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  for (const ch of chords) {
    const n = Math.round(SR * dur)
    for (let i = 0; i < n; i++) {
      const t = i / SR
      let v = 0
      if (!ch.length) v = (rnd() - 0.5) * 0.6
      for (const m of ch) {
        const f = 440 * 2 ** ((m - 69) / 12)
        for (let k = 1; k <= 8 && f * k < SR / 2 - 300; k++) v += (1 / k ** 1.1) * Math.exp(-t * (0.8 + 0.35 * k)) * Math.sin(2 * Math.PI * f * k * Math.sqrt(1 + 0.0004 * k * k) * t + k)
      }
      parts.push(v * Math.min(1, t / 0.005))
    }
  }
  for (let i = 0; i < SR; i++) parts.push(0)
  const peak = parts.reduce((a, v) => Math.max(a, Math.abs(v)), 0)
  const buf = Buffer.alloc(44 + parts.length * 2)
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + parts.length * 2, 4); buf.write('WAVEfmt ', 8)
  buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22); buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 2, 28)
  buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(parts.length * 2, 40)
  parts.forEach((v, i) => buf.writeInt16LE(Math.round((v / peak) * 0.5 * 32767), 44 + i * 2))
  return buf
}
const wav = join(tmpdir(), 'chord-ear-test.wav')
writeFileSync(wav, synth([[48, 52, 55, 60, 64], [43, 59, 62, 65, 67], [48, 52, 55, 60, 64], [45, 57, 60, 64], [60, 62, 63, 64, 65, 66], []]))

test.use({ launchOptions: { args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-audio-capture=${wav}%noloop`] } })

test('nghe hợp âm: gọi tên, sáng hướng đi, không đoán bừa', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'micro giả chỉ có trên Chromium')
  test.setTimeout(40_000)
  await page.addInitScript(() => {
    sessionStorage.setItem('app:unlocked', '1')
    localStorage.setItem('onboarding-done', '1')
  })
  await page.goto('/#/chord-ear')
  await page.locator('.ce-mic').click()
  const history = page.locator('.ce-history-row')
  await expect(history).toContainText('G7', { timeout: 15_000 })
  await expect(page.locator('.ce-caption')).toContainText('Kết trọn', { timeout: 6_000 })
  await expect(history).toContainText('Am', { timeout: 8_000 })
  await page.waitForTimeout(5_500) // cluster, then noise
  const names = await page.locator('.ce-history-row b').allTextContents()
  expect(names).toEqual(['C', 'G7', 'C', 'Am'])
  await expect(page.locator('.ce-history-row i').first()).toHaveText('T')
})
