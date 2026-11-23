import { describe, expect, it } from 'vitest'
import { handle } from './api'
import { harmonizeTask } from './domains/harmony/task'
import { line, twoVoiceTask } from './testing/fixtures'
import { twoVoiceSolution } from './domains/counterpoint/task'

/** Several domains on one piece of music, through the single entry point — each with its own rulebook, none merged. */
describe('Wave D — liên lĩnh vực', () => {
  it('một bài phối hoà âm: hoà âm (luật Rimsky), giai điệu, tiết tấu, kết cấu cùng chạy; mỗi mô-đun nói theo sổ luật / phương pháp của nó', async () => {
    const t = harmonizeTask('x', line('E5:4 D5:4 C5:4 G5:4 | E5:4 F5:4 D5:4 B4:4 | C5:4'))
    const solved = await handle({ op: 'solve', task: t, options: { timeMs: 8000, maxSolutions: 1 } })
    if (solved.op !== 'solve') throw new Error('op')
    const s = solved.result.solutions[0].score
    const r = await handle({ op: 'analyze', score: s, context: { task: t }, modules: ['harmony.progression', 'melody.line', 'rhythm.meter', 'texture.voices'] })
    if (r.op !== 'analyze') throw new Error('op')
    expect(r.result.modules.map((m) => m.status)).toEqual(['COMPLETED', 'COMPLETED', 'COMPLETED', 'COMPLETED'])
    // the solution is valid: no hard rule-check finding; the connections are facts with Rimsky citations
    expect(r.result.findings.filter((f) => f.kind === 'rule-check' && f.topic === 'luật bắt buộc')).toEqual([])
    expect(r.result.findings.some((f) => f.module === 'harmony.progression' && f.topic === 'nối hợp âm' && f.citations?.length)).toBe(true)
    // four voices striking together: homophony
    expect(r.result.findings.find((f) => f.topic === 'loại kết cấu')!.value).toBe('chủ điệu (các bè đi cùng nhịp)')
  }, 60_000)
  it('ràng buộc phức điệu và hoà âm trên cùng hai bè: mỗi sổ luật kết luận riêng, không trộn', async () => {
    const t = twoVoiceTask('C4:4 | D4:4 | F4:4 | E4:4 | D4:4 | C4:4')
    const s = twoVoiceSolution(t, line('G4:4 | A4:4 | F4:4 | G4:4 | F4:4 | E4:4'))
    const cp = await handle({ op: 'analyze', score: s, context: { task: t }, modules: ['counterpoint.check', 'harmony.progression', 'texture.voices'] })
    if (cp.op !== 'analyze') throw new Error('op')
    const byModule = Object.fromEntries(cp.result.modules.map((m) => [m.module, m.status]))
    // the counterpoint rulebook finds the parallel fifths; the harmony module refuses a task that is not its own
    expect(byModule['counterpoint.check']).toBe('COMPLETED')
    expect(cp.result.findings.some((f) => f.ruleIds?.includes('parallel'))).toBe(true)
    expect(byModule['harmony.progression']).toBe('INSUFFICIENT_DATA')
    expect(cp.result.status).toBe('PARTIAL')
  }, 60_000)
})
