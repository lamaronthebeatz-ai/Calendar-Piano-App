import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Worker } from 'node:worker_threads'
import { build } from 'esbuild'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import type { UmreRequest } from '../api'
import { multiTask, twoVoiceTask } from '../testing/fixtures'
import { UmreHost, type WorkerLike } from './host'

/**
 * Real threads, real engine: the worker entry (serve.ts) is bundled with esbuild and run in a node worker thread —
 * the same message protocol the browser worker uses. No mocks except in the stale-reply test, which needs to send a
 * reply with an old id on purpose.
 */
let bundle = ''
beforeAll(async () => {
  const dir = mkdtempSync(join(tmpdir(), 'umre-worker-'))
  const entry = join(dir, 'entry.ts')
  const serve = fileURLToPath(new URL('./serve.ts', import.meta.url))
  writeFileSync(entry, `import { parentPort } from 'node:worker_threads'\nimport { serve } from ${JSON.stringify(serve)}\nparentPort!.on('message', async (m) => parentPort!.postMessage(await serve(m)))\n`)
  bundle = join(dir, 'worker.mjs')
  await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', outfile: bundle, logLevel: 'silent' })
}, 60_000)

const nodeWorker = (): WorkerLike => {
  const w = new Worker(bundle)
  const x: WorkerLike = { postMessage: (m) => w.postMessage(m), terminate: () => void w.terminate(), onmessage: null, onerror: null }
  w.on('message', (data) => x.onmessage?.({ data }))
  w.on('error', (e) => x.onerror?.(e))
  return x
}
const hosts: UmreHost[] = []
const host = () => {
  const h = new UmreHost(nodeWorker)
  hosts.push(h)
  return h
}
afterAll(() => hosts.forEach((h) => h.dispose()))

const easy: UmreRequest = { op: 'solve', task: twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'), options: { timeMs: 5000, maxSolutions: 3 } }
// the shared CSP on 11 bars, 3 free voices: runs to its own 20 s limit (measured 11/2026)
const long: UmreRequest = {
  op: 'solve', task: multiTask(['', '', '', 'C3:4 | D3:4 | E3:4 | F3:4 | G3:4 | A3:4 | G3:4 | F3:4 | E3:4 | D3:4 | C3:4'], [true, true, true, false]),
  options: { timeMs: 20_000, maxSolutions: 24, solverId: 'umre.csp.counterpoint' },
}

describe('GĐ8 — chạy trong worker: huỷ thật, hết giờ thật, không kết quả cũ, kết quả tất định', () => {
  it('giải trong worker: SOLVED, hai lần chạy cho cùng lời giải (tất định)', async () => {
    const h = host()
    const a = await h.run(easy, { timeMs: 30_000 })
    const b = await h.run(easy, { timeMs: 30_000 })
    expect(a.status).toBe('done')
    if (a.status !== 'done' || b.status !== 'done' || a.response.op !== 'solve' || b.response.op !== 'solve') throw new Error('x')
    expect(a.response.result.status).toBe('SOLVED')
    expect(a.response.result.solutions.map((s) => s.validation.inputDigest)).toEqual(b.response.result.solutions.map((s) => s.validation.inputDigest))
    expect(h.spawned).toBe(1)
  }, 60_000)
  it('huỷ giữa lúc tìm: trả CANCELLED ngay (không chờ bộ giải), worker bị thay, yêu cầu sau vẫn chạy; vòng đời tác vụ được ghi', async () => {
    const events: string[] = []
    const h = new UmreHost(nodeWorker, { onEvent: (e) => events.push(`${e.id}:${e.kind}`) })
    hosts.push(h)
    const ac = new AbortController()
    const p = h.run(long, { timeMs: 60_000, signal: ac.signal })
    await new Promise((r) => setTimeout(r, 1500))
    const t = Date.now()
    ac.abort()
    const o = await p
    expect(o.status).toBe('cancelled')
    expect(Date.now() - t).toBeLessThan(200)
    const next = await h.run(easy, { timeMs: 30_000 })
    expect(next.status).toBe('done')
    expect(h.spawned).toBe(2)
    expect(events).toEqual(['1:start', '1:cancelled', '2:start', '2:done'])
    expect(h.state).toBe('idle')
  }, 60_000)
  it('hết giờ cứng của host (kể cả khi giới hạn của bộ giải dài hơn): TIMEOUT đúng hạn, luồng chính không bị chặn', async () => {
    const h = host()
    let ticks = 0
    const iv = setInterval(() => ticks++, 50)
    const t = Date.now()
    const o = await h.run(long, { timeMs: 2000 })
    clearInterval(iv)
    expect(o.status).toBe('timeout')
    expect(Date.now() - t).toBeLessThan(2500)
    // the main thread kept running timers while the worker searched
    expect(ticks).toBeGreaterThan(25)
  }, 60_000)
  it('yêu cầu mới thay yêu cầu đang chạy: yêu cầu cũ nhận "superseded", không bao giờ nhận kết quả của yêu cầu mới', async () => {
    const h = host()
    const first = h.run(long, { timeMs: 60_000 })
    await new Promise((r) => setTimeout(r, 500))
    const second = h.run(easy, { timeMs: 30_000 })
    expect((await first).status).toBe('superseded')
    const s = await second
    expect(s.status).toBe('done')
  }, 60_000)
  it('trả lời muộn mang mã cũ bị bỏ (chống kết quả cũ)', async () => {
    let fake: WorkerLike | null = null
    const h = new UmreHost(() => (fake = { postMessage: () => {}, terminate: () => {}, onmessage: null, onerror: null }))
    const p = h.run(easy, { timeMs: 1000 })
    fake!.onmessage!({ data: { id: 999, ok: true, res: { op: 'solve', result: null } } })
    fake!.onmessage!({ data: { id: 1, ok: false, error: 'lỗi thật' } })
    expect(await p).toMatchObject({ status: 'error', error: 'lỗi thật' })
  })
  it('lỗi trong worker thành trả lời lỗi có mã (không ném ra), không làm sập host', async () => {
    const h = host()
    const o = await h.run({ op: 'counterpoint.diagnose', task: { ...twoVoiceTask('C4:4'), rulebook: { id: 'không-có', version: '9' } }, timeMs: 100 }, { timeMs: 30_000 })
    expect(o.status === 'done' && o.response.op === 'error' && o.response.error.code).toBe('rulebook-unknown')
    expect((await h.run(easy, { timeMs: 30_000 })).status).toBe('done')
  }, 60_000)
})
