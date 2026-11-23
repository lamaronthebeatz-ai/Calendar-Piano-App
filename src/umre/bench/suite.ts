import { fromMusicXml } from '../../features/compose/exchange'
import { solveMany } from '../../features/counterpoint/solver'
import { analysisModules, handle } from '../api'
import { runAnalysis } from '../analysis/run'
import { renderExplanation } from '../explain/explain'
import { createEngine } from '../engine'
import { fromCompose, toCompose } from '../repr/adapters/compose'
import { counterpointRulebook } from '../rulebook/counterpoint'
import { harmonyRulebook } from '../rulebook/harmony'
import { evaluate } from '../rules/lang'
import { COUNTERPOINT_RULES, consonanceOf } from '../rules/counterpoint'
import { textureQueries } from '../rules/queries'
import { search } from '../search/search'
import { twoVoiceModel } from '../domains/counterpoint/csp'
import { confirmForPage } from '../domains/counterpoint/page'
import { toProblem, twoVoiceSolution } from '../domains/counterpoint/task'
import { harmonizeTask } from '../domains/harmony/task'
import { line, multiTask, twoVoiceTask } from '../testing/fixtures'
import { multiVoiceValidator, twoVoiceValidator } from '../validation/counterpoint'
import { harmonyValidator } from '../validation/harmony'
import type { Score } from '../repr/score'
import { fromQuarters } from '../repr/rational'

/**
 * The benchmark suite: fixed inputs, fixed configuration, one case per component and domain. Each case returns a
 * small summary of its RESULT (status, counts, digests) so a run also checks that a change did not alter what the
 * engine computes — speed is never measured on a result that changed. Run by scripts/umre/bench.mjs.
 */
export type BenchCase = {
  readonly id: string
  readonly component: string
  readonly size: string
  readonly runs: number
  /** builds inputs once (not timed) */
  readonly setup: () => Promise<unknown> | unknown
  /** timed; returns a summary of the result */
  readonly run: (input: never) => Promise<unknown> | unknown
}

const CF6 = 'C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4'
const CF11 = 'C4:4 | D4:4 | E4:4 | F4:4 | G4:4 | A4:4 | G4:4 | F4:4 | E4:4 | D4:4 | C4:4'
const xml = (f: string, read: (p: string) => string) => fromMusicXml(read(`public/analyze/${f}.musicxml`))

export function suite(read: (path: string) => string): BenchCase[] {
  const cprb = counterpointRulebook()
  const hrb = harmonyRulebook()
  const t6 = twoVoiceTask(CF6)
  const t11 = twoVoiceTask(CF11)
  const sol6 = () => twoVoiceSolution(t6, line('G4:4 | F4:4 | D4:4 | C4:4 | B3:4 | C4:4'))
  return [
    // A. representation
    // MusicXML parsing itself is the app's (features/compose) and, under node, happy-dom's: measured apart, it is not UMRE
    { id: 'repr.compose-to-umr.joplin', component: 'Biểu diễn', size: 'Maple Leaf Rag, ~1.600 nốt', runs: 20, setup: () => xml('joplin-maple-leaf', read), run: (c: ReturnType<typeof fromMusicXml>) => { const s = fromCompose(c); return { voices: s.voices.length, events: s.voices.reduce((n, v) => n + v.events.length, 0) } } },
    { id: 'repr.umr-to-compose.joplin', component: 'Biểu diễn', size: 'Maple Leaf Rag', runs: 20, setup: () => fromCompose(xml('joplin-maple-leaf', read)), run: (s: Score) => ({ staves: toCompose(s).staves.length }) },
    // B. rulebook
    { id: 'rulebook.build.counterpoint', component: 'Sổ luật', size: '34 luật + 3 cho phép + 6 mơ hồ', runs: 50, setup: () => null, run: () => ({ rules: counterpointRulebook().rules.length }) },
    { id: 'rules.evaluate.counterpoint', component: 'Sổ luật', size: '17 luật cứng, 6 ô', runs: 50, setup: sol6, run: (s: Score) => ({ hits: evaluate(COUNTERPOINT_RULES, textureQueries({ score: s, lines: [0], pairs: [[0, 1]], end: fromQuarters(24), consonance: () => consonanceOf(cprb), stars: [], starsOnly: false }), new Set()).hits.length }) },
    // C. constraint model
    { id: 'constraints.model.two-voice-11', component: 'Ràng buộc', size: '11 ô', runs: 50, setup: () => null, run: () => ({ free: twoVoiceModel(t11, cprb).free.length }) },
    // D. search
    { id: 'search.csp.two-voice-6', component: 'Tìm kiếm', size: '6 ô, 6 lời giải', runs: 10, setup: () => null, run: () => { const r = search(twoVoiceModel(t6, cprb), { timeMs: 30_000, maxSolutions: 6 }); return { status: r.status, nodes: r.nodes, solutions: r.solutions.length } } },
    { id: 'search.csp.two-voice-11', component: 'Tìm kiếm', size: '11 ô, 1 lời giải', runs: 10, setup: () => null, run: () => { const r = search(twoVoiceModel(t11, cprb), { timeMs: 30_000, maxSolutions: 1 }); return { status: r.status, nodes: r.nodes } } },
    // E. validation
    { id: 'validate.two-voice', component: 'Kiểm chứng', size: '6 ô, 3 bộ kiểm', runs: 50, setup: sol6, run: (s: Score) => { const v = twoVoiceValidator.validate(t6, s, cprb); return { status: v.status, checked: v.coverage.checked } } },
    {
      id: 'validate.multi-voice', component: 'Kiểm chứng', size: '3 bè, 4 ô', runs: 30,
      setup: () => { const vs = ['C5:4 | B4:4 | C5:4 | C5:4', 'G4:4 | G4:4 | E4:4 | E4:4', 'C3:4 | D3:4 | C3:4 | C3:4']; const t = multiTask(vs, [true, true, false]); return { t, s: { ...t.score, voices: t.score.voices } } },
      run: ({ t }: { t: ReturnType<typeof multiTask> }) => { const v = multiVoiceValidator.validate(t, t.score, cprb); return { status: v.status } },
    },
    // F. orchestration + explanation
    { id: 'orchestrate.counterpoint.page-solver', component: 'Điều phối + giải thích', size: '6 ô, bộ giải trang phức điệu', runs: 10, setup: () => createEngine(), run: async (e: ReturnType<typeof createEngine>) => { const r = await e.orchestrator.run(t6, { timeMs: 10_000, maxSolutions: 3 }); return { status: r.status, solutions: r.solutions.length, steps: r.trace.steps.length } } },
    { id: 'explain.render-3-levels', component: 'Giải thích', size: 'kết quả 6 ô', runs: 50, setup: async () => ({ r: await createEngine().orchestrator.run(t6, { timeMs: 10_000, maxSolutions: 3 }) }), run: ({ r }: { r: Awaited<ReturnType<ReturnType<typeof createEngine>['orchestrator']['run']>> }) => ({ chars: (['basic', 'technical', 'academic'] as const).map((l) => renderExplanation(r.explanation!, l, cprb.evidence).length) }) },
    // G. domains
    { id: 'domain.counterpoint.page-solve+confirm', component: 'Phức điệu', size: '6 ô, 6 lời giải', runs: 10, setup: () => toProblem(t6), run: (p: ReturnType<typeof toProblem>) => { const r = confirmForPage(p, solveMany(p, 10_000, 6)); return { status: r.status, confirmed: r.umre.confirmed } } },
    { id: 'domain.harmony.harmonize-9', component: 'Hoà âm', size: '9 nốt giai điệu, 4 phương án', runs: 10, setup: () => createEngine(), run: async (e: ReturnType<typeof createEngine>) => { const r = await e.orchestrator.run(harmonizeTask('b', line('E5:4 D5:4 C5:4 G5:4 | E5:4 F5:4 D5:4 B4:4 | C5:4')), { timeMs: 10_000, maxSolutions: 4 }); return { status: r.status, solutions: r.solutions.length } } },
    { id: 'domain.harmony.validate', component: 'Hoà âm', size: '9 hợp âm, 2 bộ kiểm', runs: 30, setup: async () => { const t = harmonizeTask('b', line('E5:4 D5:4 C5:4 G5:4 | E5:4 F5:4 D5:4 B4:4 | C5:4')); const r = await createEngine().orchestrator.run(t, { timeMs: 10_000, maxSolutions: 1 }); return { t, s: r.solutions[0].score } }, run: ({ t, s }: { t: ReturnType<typeof harmonizeTask>; s: Score }) => ({ status: harmonyValidator.validate(t, s, hrb).status }) },
    ...(['harmony.tonal', 'melody.line', 'rhythm.meter', 'texture.voices', 'form.sections', 'style.features'] as const).flatMap((m) =>
      (['bach-bwv269', 'joplin-maple-leaf'] as const).map((f) => ({
        id: `analysis.${m}.${f}`, component: `Phân tích (${m})`, size: f === 'bach-bwv269' ? 'hợp xướng Bach, 4 bè' : 'Maple Leaf Rag, piano', runs: 10,
        setup: () => fromCompose(xml(f, read)),
        // straight to the module runner (the entry point's cache would answer repeats), on a fresh score object each run
        // (the shared /analyze memo is per score object: a run must not reuse the previous run's analysis)
        run: async (s: Score) => { const r = await runAnalysis(analysisModules().filter((x) => x.descriptor.id === m), { score: { ...s } }); return { status: r.status, findings: r.findings.length } },
      })),
    ),
    {
      id: 'analysis.six-modules.joplin', component: 'Phân tích (cả 6 mô-đun)', size: 'Maple Leaf Rag, piano', runs: 5, setup: () => fromCompose(xml('joplin-maple-leaf', read)),
      run: async (s: Score) => { const r = await runAnalysis(analysisModules().filter((x) => ['harmony.tonal', 'melody.line', 'rhythm.meter', 'texture.voices', 'form.sections', 'style.features'].includes(x.descriptor.id)), { score: { ...s } }); return { status: r.status, findings: r.findings.length } },
    },
    {
      id: 'api.cache-hit.analyze', component: 'Đầu mối (cache)', size: 'Bach, mô-đun điệu tính, lần lặp', runs: 30,
      setup: async () => { const s = fromCompose(xml('bach-bwv269', read)); await handle({ op: 'analyze', score: s, modules: ['harmony.tonal'] }); return s },
      run: async (s: Score) => { const r = await handle({ op: 'analyze', score: s, modules: ['harmony.tonal'] }); return { cached: r.meta.cached, op: r.op } },
    },
  ]
}
