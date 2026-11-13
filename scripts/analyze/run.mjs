// Print the analysis report of a MusicXML file as text: node scripts/analyze/run.mjs <file.musicxml>
import { createServer } from 'vite'
import { Window } from 'happy-dom'
import fs from 'node:fs'
globalThis.DOMParser = new Window().DOMParser
const server = await createServer({ configFile: false, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error', optimizeDeps: { noDiscovery: true } })
const { fromMusicXml } = await server.ssrLoadModule('/src/features/compose/exchange.ts')
const { analyze } = await server.ssrLoadModule('/src/features/analyze/engine/index.ts')
const { report } = await server.ssrLoadModule('/src/features/analyze/engine/report.ts')
await server.close()
const t0 = Date.now()
const a = analyze(fromMusicXml(fs.readFileSync(process.argv[2], 'utf8')))
console.log('ms', Date.now() - t0)
for (const b of report(a)) { console.log('## ' + b.title); for (const p of b.paras) console.log(p.map((r) => r.t).join('')) }
console.log(a.harmony.slice(0, 16).map((h) => h.reading.ru).join(' '))
