// UMRE benchmark (Wave D, GĐ11). Every case runs in its own node process so its peak memory (maxRSS) is its own.
//   node scripts/umre/bench.mjs                 → all cases, writes docs/umre/BENCHMARKS.md + docs/umre/bench.json
//   node scripts/umre/bench.mjs --only search   → cases whose id contains "search" (prints, writes nothing)
//   node scripts/umre/bench.mjs --check         → compares result summaries with docs/umre/bench.json (exit 1 if one changed)
// Numbers are measurements on the machine that ran it (recorded with the results), never targets.
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const args = process.argv.slice(2)

async function load() {
  const { createServer } = await import('vite')
  const { Window } = await import('happy-dom')
  globalThis.DOMParser = new Window().DOMParser
  const server = await createServer({ root, configFile: false, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error', optimizeDeps: { noDiscovery: true } })
  const mod = await server.ssrLoadModule('/src/umre/bench/suite.ts')
  const version = await server.ssrLoadModule('/src/umre/version.ts')
  return { server, cases: mod.suite((p) => fs.readFileSync(path.join(root, p), 'utf8')), version: version.UMRE_ENGINE_VERSION }
}

const q = (xs, p) => {
  const s = [...xs].sort((a, b) => a - b)
  return s[Math.min(s.length - 1, Math.ceil(p * s.length) - 1)]
}

// child: run one case, print one JSON line
if (args[0] === '--case') {
  const { server, cases, version } = await load()
  const c = cases.find((x) => x.id === args[1])
  const input = await c.setup()
  const baseRss = process.resourceUsage().maxRSS
  global.gc?.()
  const heap0 = process.memoryUsage().heapUsed
  const times = []
  let summary = null
  for (let i = 0; i < c.runs; i++) {
    const t = performance.now()
    const r = await c.run(input)
    times.push(performance.now() - t)
    const s = JSON.stringify(r)
    if (summary !== null && s !== summary) summary = `NONDETERMINISTIC: ${summary} / ${s}`
    else summary ??= s
  }
  global.gc?.()
  const retained = process.memoryUsage().heapUsed - heap0
  await server.close()
  console.log(JSON.stringify({ id: c.id, version, runs: c.runs, median: q(times, 0.5), p95: c.runs >= 20 ? q(times, 0.95) : null, min: Math.min(...times), max: Math.max(...times), peakRssMB: process.resourceUsage().maxRSS / 1024, setupRssMB: baseRss / 1024, retainedKB: Math.round(retained / 1024), summary }))
  process.exit(0)
}

// parent
const { server, cases, version } = await load()
await server.close()
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null
const pick = cases.filter((c) => !only || c.id.includes(only))
const rows = []
for (const c of pick) {
  const r = spawnSync(process.execPath, ['--expose-gc', fileURLToPath(import.meta.url), '--case', c.id], { cwd: root, encoding: 'utf8', maxBuffer: 1 << 24 })
  const line = r.stdout.trim().split('\n').pop()
  if (r.status !== 0 || !line?.startsWith('{')) {
    rows.push({ id: c.id, error: (r.stderr || r.stdout).slice(-400) })
    console.error(`✗ ${c.id}`)
    continue
  }
  const x = { ...JSON.parse(line), component: c.component, size: c.size }
  rows.push(x)
  console.log(`${x.id.padEnd(48)} median ${x.median.toFixed(1)} ms${x.p95 !== null ? ` · p95 ${x.p95.toFixed(1)}` : ''} · peak ${x.peakRssMB.toFixed(0)} MB · ${x.summary}`)
}
const env = { node: process.version, cpu: os.cpus()[0]?.model ?? '?', cores: os.cpus().length, platform: `${os.platform()} ${os.release()}`, date: new Date().toISOString().slice(0, 10), engine: version }
const jsonPath = path.join(root, 'docs/umre/bench.json')

if (args.includes('--check')) {
  const old = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  let bad = 0
  for (const r of rows) {
    const o = old.rows.find((x) => x.id === r.id)
    if (o && o.summary !== r.summary) {
      bad++
      console.error(`KẾT QUẢ ĐỔI ${r.id}: ${o.summary} → ${r.summary}`)
    }
  }
  console.log(bad ? `${bad} ca đổi kết quả` : 'mọi kết quả giống lần đo chuẩn')
  process.exit(bad ? 1 : 0)
}
if (only) process.exit(0)

fs.writeFileSync(jsonPath, JSON.stringify({ env, rows }, null, 1) + '\n')
const md = [
  '# UMRE — số đo hiệu năng (sinh bởi `node scripts/umre/bench.mjs`)',
  '',
  `Môi trường: Node ${env.node}, ${env.cpu} (${env.cores} lõi), ${env.platform}; máy UMRE ${env.engine}; ngày ${env.date}.`,
  '',
  'Mỗi ca chạy trong một tiến trình riêng (`--expose-gc`). **Trung vị / p95** tính trên số lần chạy ghi ở cột *n* (p95 chỉ khi n ≥ 20). **Đỉnh RSS** là bộ nhớ đỉnh của cả tiến trình (gồm ~nền vite + mã nguồn); **giữ lại** là heap còn sau khi gom rác so với trước vòng đo (dấu hiệu rò). Cột *kết quả* là tóm tắt kết quả của ca — `--check` so nó với lần đo chuẩn để chắc tối ưu không đổi kết quả. Đây là số đo trên máy ghi trên, không phải mục tiêu; máy khác (điện thoại) sẽ chậm hơn.',
  '',
  '| Ca | Thành phần | Quy mô | n | Trung vị (ms) | p95 (ms) | Đỉnh RSS (MB) | Giữ lại (KB) | Kết quả |',
  '|---|---|---|---|---|---|---|---|---|',
  ...rows.map((r) => (r.error ? `| \`${r.id}\` | ${r.component ?? ''} | | | LỖI | | | | ${r.error.replace(/\|/g, '/').replace(/\n/g, ' ').slice(0, 120)} |` : `| \`${r.id}\` | ${r.component} | ${r.size} | ${r.runs} | ${r.median.toFixed(1)} | ${r.p95 === null ? '—' : r.p95.toFixed(1)} | ${r.peakRssMB.toFixed(0)} | ${r.retainedKB} | \`${r.summary.replace(/\|/g, '/')}\` |`)),
  '',
]
// only the measured block is rewritten: the notes around it (before / after an optimization) are kept
const mdPath = path.join(root, 'docs/umre/BENCHMARKS.md')
const block = `<!-- bench -->\n${md.slice(2).join('\n')}\n<!-- /bench -->`
const old = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : ''
fs.writeFileSync(mdPath, /<!-- bench -->[\s\S]*<!-- \/bench -->/.test(old) ? old.replace(/<!-- bench -->[\s\S]*<!-- \/bench -->/, block) : `${md[0]}\n\n${block}\n`)
console.log('→ docs/umre/BENCHMARKS.md, docs/umre/bench.json')
