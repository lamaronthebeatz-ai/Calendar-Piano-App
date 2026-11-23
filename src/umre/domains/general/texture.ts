import type { AnalysisModule, Finding } from '../../analysis/types'
import { diatonic } from '../../repr/pitch'
import { scoreEnd, type Score } from '../../repr/score'
import { verticals, type Motion } from '../../repr/texture'
import { lineOf, q, voiceName } from './common'

/**
 * Texture and voice interaction. FACTS: how many voices sound over time, how often voices strike together (onset
 * synchrony), the motion between every pair (parallel / similar / contrary / oblique) from repr/texture.ts, crossings.
 * INTERPRETATION (with its basis): the texture type — monophony, homophony / homorhythm, polyphony — from synchrony and
 * contrary/oblique motion; a melody-plus-accompaniment reading when one voice is rhythmically freer than the rest.
 */
const ID = 'texture.voices'
const MOTION_VI: Record<Motion, string> = { parallel: 'song song', similar: 'cùng chiều', contrary: 'ngược chiều', oblique: 'chéo', static: 'đứng yên' }

export const textureModule: AnalysisModule = {
  descriptor: {
    id: ID, version: '1.0.0', domain: 'texture', kind: 'analytical',
    method: 'đếm bè vang, độ đồng bộ điểm đánh, chuyển động từng cặp bè (repr/texture.ts), chéo bè; loại kết cấu suy từ các số đó',
    limits: ['bè = bè ghi trong bản nhạc; một bè piano chứa nhiều giọng không được tách', 'loại kết cấu là diễn giải theo ngưỡng của người biên soạn'],
  },
  checkInput: (input) => (input.score.voices.filter((v) => lineOf(v).length).length ? [] : ['không có nốt']),
  analyze(input) {
    const s = input.score as Score
    const lines = s.voices.map(lineOf)
    const active = lines.map((l, i) => (l.length ? i : -1)).filter((i) => i >= 0)
    const f: Finding[] = []
    const onsets = active.map((i) => new Set(lines[i].map((n) => q(n.onset))))
    const allOnsets = new Set(onsets.flatMap((x) => [...x]))
    const shared = [...allOnsets].filter((t) => onsets.filter((o) => o.has(t)).length >= Math.min(2, active.length)).length
    const sync = active.length > 1 ? shared / allOnsets.size : 1
    f.push({
      id: `${ID}#voices`, module: ID, kind: 'fact', topic: 'số bè', value: { voices: active.length, synchrony: Math.round(sync * 100) / 100 },
      text: { basic: `${active.length} bè; ${Math.round(sync * 100)}% điểm đánh có từ hai bè cùng đánh`, technical: `synchrony ${sync.toFixed(2)} trên ${allOnsets.size} điểm đánh` },
      evidence: active.map((i) => `${voiceName(s, i)}: ${lines[i].length} nốt`),
    })
    const motionTotals: Record<Motion, number> = { parallel: 0, similar: 0, contrary: 0, oblique: 0, static: 0 }
    let crossings = 0
    const end = scoreEnd(s)
    for (let a = 0; a < active.length; a++)
      for (let b = a + 1; b < active.length; b++) {
        const vs = verticals(s.voices[active[a]], s.voices[active[b]], end)
        const counts: Record<Motion, number> = { parallel: 0, similar: 0, contrary: 0, oblique: 0, static: 0 }
        for (const x of vs) if (x.motion) counts[x.motion]++
        const cross = vs.filter((x) => diatonic(x.u.pitch) < diatonic(x.l.pitch)).length
        crossings += cross
        for (const k of Object.keys(counts) as Motion[]) motionTotals[k] += counts[k]
        const moving = counts.parallel + counts.similar + counts.contrary + counts.oblique
        if (!moving) continue
        f.push({
          id: `${ID}#pair-${active[a] + 1}-${active[b] + 1}`, module: ID, kind: 'fact', topic: 'tương tác bè', voices: [active[a], active[b]], value: { ...counts, crossings: cross },
          text: { basic: `${voiceName(s, active[a])} – ${voiceName(s, active[b])}: ${Math.round((100 * (counts.contrary + counts.oblique)) / moving)}% ngược chiều hoặc chéo`, technical: (Object.keys(counts) as Motion[]).map((k) => `${MOTION_VI[k]} ${counts[k]}`).join(', ') + (cross ? `; chéo bè ${cross}` : '') },
          evidence: [`${vs.length} lát dọc`],
        })
      }
    const moving = motionTotals.parallel + motionTotals.similar + motionTotals.contrary + motionTotals.oblique
    const independence = moving ? (motionTotals.contrary + motionTotals.oblique) / moving : 0
    // per voice: attacks per beat, and pitch recurrence (share of notes whose pitch class is among the three before it —
    // high for an Alberti bass or an oom-pah, low for a tune or a scale run)
    const m = s.meters[0]?.meter ?? { num: 4, den: 4 }
    const beat = 4 / m.den
    const span = Math.max(1e-9, ...active.map((i) => q(lines[i][lines[i].length - 1].onset) + q(lines[i][lines[i].length - 1].duration)))
    const density = active.map((i) => lines[i].length / (span / beat))
    // beat-level synchrony: of the beats where some voice attacks on the beat, how many have two or more voices attacking
    const beatsHit = new Map<number, number>()
    for (const k of active.keys()) for (const t of onsets[k]) if (Math.abs(t / beat - Math.round(t / beat)) < 1e-6) beatsHit.set(t, (beatsHit.get(t) ?? 0) + 1)
    const beatSync = beatsHit.size ? [...beatsHit.values()].filter((n) => n >= 2).length / beatsHit.size : 0
    // imitation: an interval pattern of seven notes that one voice states and another restates later
    const imitations: { voices: [number, number]; at: [number, number]; intervals: number[] }[] = []
    const stepsOf = (i: number) => lines[i].slice(1).map((n, k) => diatonic(n.pitch) - diatonic(lines[i][k].pitch))
    // six intervals (seven notes) with at least one leap: shorter or purely stepwise matches happen by chance in any texture
    const L = 6
    for (let a = 0; a < active.length && imitations.length < 20; a++)
      for (let b = 0; b < active.length; b++) {
        if (a === b) continue
        const A = stepsOf(active[a]), Bs = stepsOf(active[b])
        const idx = new Map<string, number>()
        for (let i = 0; i + L <= A.length; i++) if (A.slice(i, i + L).some((x) => Math.abs(x) >= 2)) idx.set(A.slice(i, i + L).join(','), idx.get(A.slice(i, i + L).join(',')) ?? i)
        for (let j = 0; j + L <= Bs.length; j++) {
          const i = idx.get(Bs.slice(j, j + L).join(','))
          if (i === undefined) continue
          const ta = q(lines[active[a]][i].onset), tb = q(lines[active[b]][j].onset)
          if (tb > ta && !imitations.some((x) => x.voices[0] === a && x.voices[1] === b)) imitations.push({ voices: [a, b], at: [ta, tb], intervals: Bs.slice(j, j + L) })
        }
      }
    const ds = density
    const maxD = Math.max(...ds), minD = Math.min(...ds)
    let type: string, basis: string, conf: number, open = false
    if (active.length === 1) [type, basis, conf] = ['đơn âm (một bè)', 'chỉ một bè có nốt', 1]
    else if (imitations.length) [type, basis, conf] = ['phức điệu mô phỏng', `${imitations.length} chỗ một bè nhắc lại mẫu ${L + 1} nốt của bè khác muộn hơn (đầu tiên: ${voiceName(s, active[imitations[0].voices[0]])} @${imitations[0].at[0]} → ${voiceName(s, active[imitations[0].voices[1]])} @${imitations[0].at[1]})`, Math.min(1, 0.6 + 0.05 * imitations.length)]
    else if (beatSync >= 0.8 && maxD / Math.max(1e-9, minD) <= 1.6) [type, basis, conf] = ['chủ điệu (các bè đi cùng nhịp)', `${Math.round(beatSync * 100)}% phách có nhiều bè cùng đánh, mật độ các bè gần nhau (${minD.toFixed(1)}–${maxD.toFixed(1)} nốt/phách)`, beatSync]
    else {
      ;[type, basis, conf] = ['nhiều lớp — chưa phân định', `không thấy mô phỏng; ${Math.round(beatSync * 100)}% phách cùng đánh, mật độ ${minD.toFixed(1)}–${maxD.toFixed(1)} nốt/phách: số đo không tách được giai điệu + đệm với phức điệu tự do`, 0.4]
      open = true
    }
    f.push({
      id: `${ID}#type`, module: ID, kind: 'interpretation', topic: 'loại kết cấu', value: type,
      text: { basic: `Kết cấu: ${type}`, technical: `beat sync ${beatSync.toFixed(2)}, onset sync ${sync.toFixed(2)}, independence ${independence.toFixed(2)}, density ${density.map((x) => x.toFixed(1)).join('/')}, imitations ${imitations.length}, crossings ${crossings}` },
      confidence: { value: Math.round(conf * 100) / 100, basis: `${basis}; ngưỡng là quy ước của người biên soạn` },
      alternatives: open ? [{ value: 'melody-accompaniment', text: `giai điệu + đệm (${voiceName(s, active[0])} dẫn)` }, { value: 'free-polyphony', text: 'phức điệu tự do (không mô phỏng)' }] : type.startsWith('chủ điệu') ? [{ value: 'polyphony', text: 'phức điệu đồng tiết tấu (nếu các bè độc lập về đường nét)' }] : [],
      evidence: [`${active.length} bè`, `${moving} chuyển động hai bè`, ...imitations.slice(0, 3).map((x) => `mô phỏng @${x.at[0]}→@${x.at[1]}: ${x.intervals.join(' ')}`)],
    })
    return { status: open ? 'AMBIGUOUS' : 'COMPLETED', statusReason: open ? 'loại kết cấu chưa phân định' : `${active.length} bè`, findings: f }
  },
}
