/**
 * The rule checker for two-voice strict counterpoint and its vertical-shifting versions (Iv).
 * Every rule quotes the library's "Phức điệu nghiêm khắc" articles; `ref` is the article slug.
 * A combination is valid when the original (NT) and every version (BT) obey the simple two-voice rules
 * (doi-vi-chuyen-dong-chieu-doc: "cả nguyên thể lẫn biến thể đều phải đúng luật đối vị đơn giản"),
 * so the Iv preparation tables follow from checking each version on its own.
 */
import {
  barQ, consonant, interval, isPerfect, makeVersion, melodicOk, notesOf, perfectClass, strength, upperLower,
  type Interval, type Key, type Meter, type Motion, type Note, type Seg, type Shift, type Version,
} from './model'

export type VersionSpec = { shift: Shift; motion: Motion; label: string }
export type Problem = {
  key: Key
  meter: Meter
  /** the given voice (đề) */
  given: Seg[]
  /** whether the given voice is voice I (upper) or II (lower) in the original */
  givenIs: 'I' | 'II'
  /** times (in quarters) where the original must sound a dissonance (✱) */
  stars: number[]
  /** biến thể to satisfy besides the original */
  versions: VersionSpec[]
  /** strong-beat dissonances in the original only where ✱ asks for them */
  starsOnly: boolean
  /** a teacher's allowance the book does not make: a quarter note may prepare (and be tied into) a suspension */
  quarterPrep?: boolean
}

export type RuleId =
  | 'crossing' | 'dis-both' | 'dis-strong' | 'dis-weak' | 'suspension' | 'star' | 'star-extra' | 'parallel' | 'final'
  | 'leap' | 'leap-response' | 'leap3-response' | 'two-leaps' | 'repeat3' | 'seg-place' | 'tie' | 'rhythm-change' | 'end' | 'first'
  | 'hidden' | 'perfects' | 'unison' | 'upper-neighbor' | 'tritone-line' | 'repeat' | 'range' | 'cadence-step' | 'same-rhythm' | 'strong-perfect'

export const RULES: Record<RuleId, { text: string; ref: string }> = {
  crossing: { text: 'Hai bè chéo nhau (ở biến thể: khoảng cách ở nguyên thể vượt giới hạn của Iv)', ref: 'doi-vi-chuyen-dong-chieu-doc' },
  'dis-both': { text: 'Quãng nghịch mà cả hai bè cùng đánh nốt mới — quãng nghịch phải có một bè giữ nốt', ref: 'doi-vi-don-gian-hai-be' },
  'dis-strong': { text: 'Quãng nghịch ở phách mạnh phải là nốt lưu: chuẩn bị bằng quãng thuận, giải quyết xuống liền bậc', ref: 'doi-vi-don-gian-hai-be' },
  'dis-weak': { text: 'Quãng nghịch ở phách nhẹ chỉ được là nốt lướt, nốt thêu, nốt sớm hay nốt thoát, trước và sau là quãng thuận', ref: 'doi-vi-don-gian-hai-be' },
  suspension: { text: 'Nốt lưu sai luật', ref: 'doi-vi-don-gian-hai-be' },
  star: { text: 'Chỗ ✱ phải là quãng nghịch', ref: 'doi-vi-don-gian-hai-be' },
  'star-extra': { text: 'Quãng nghịch ở phách mạnh nằm ngoài các chỗ ✱', ref: 'doi-vi-don-gian-hai-be' },
  parallel: { text: 'Quãng thuận hoàn toàn đi song song (bị cấm)', ref: 'doi-vi-don-gian-hai-be' },
  final: { text: 'Kết phải là quãng thuận hoàn toàn', ref: 'doi-vi-don-gian-hai-be' },
  leap: { text: 'Bước nhảy cấm: quãng 7, quãng tăng – giảm, rộng hơn quãng 8', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  'leap-response': { text: 'Sau bước nhảy (từ quãng 4) phải có phản hồi: đi ngược hướng', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  'leap3-response': { text: 'Sau bước nhảy quãng 3 nên phản hồi ngược hướng', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  'two-leaps': { text: 'Hai bước nhảy liên tiếp cùng hướng (nên tránh)', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  repeat3: { text: 'Nhắc một nốt ba lần liền', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  'seg-place': { text: 'Trường độ đặt lệch phách (đảo phách)', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  tie: { text: 'Nối nốt sai: không nối nốt đen, không nối nốt ngắn sang nốt dài hơn (trừ trắng sang tròn)', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  'rhythm-change': { text: 'Đổi sang nốt ngắn hơn ở phách mạnh mà không chuẩn bị bằng nốt lưu', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  end: { text: 'Bè đối vị phải kéo dài đến hết bài', ref: 'doi-vi-don-gian-hai-be' },
  first: { text: 'Mở đầu bằng quãng thuận hoàn toàn thì tốt hơn', ref: 'doi-vi-don-gian-hai-be' },
  hidden: { text: 'Vào quãng thuận hoàn toàn bằng cùng hướng (nên hạn chế)', ref: 'doi-vi-don-gian-hai-be' },
  perfects: { text: 'Nhiều quãng thuận hoàn toàn liền nhau (nên tránh)', ref: 'doi-vi-don-gian-hai-be' },
  unison: { text: 'Đồng âm ở giữa bài tạo cảm giác ngưng đọng (nên tránh)', ref: 'doi-vi-don-gian-hai-be' },
  'strong-perfect': { text: 'Quãng thuận hoàn toàn ở phách mạnh giữa bài (nên đặt ở phách nhẹ)', ref: 'doi-vi-don-gian-hai-be' },
  'upper-neighbor': { text: 'Nốt thêu trên — lối nghiêm khắc thường dùng thêu dưới', ref: 'doi-vi-don-gian-hai-be' },
  'tritone-line': { text: 'Đoạn liền bậc mang âm hưởng ba cung (không nên)', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  repeat: { text: 'Nhắc lại một nốt (không nên)', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  range: { text: 'Âm vực bè đối vị quá rộng', ref: 'giai-dieu-phuc-dieu-nghiem-khac' },
  'cadence-step': { text: 'Nên vào nốt kết bằng liền bậc', ref: 'doi-vi-don-gian-hai-be' },
  'same-rhythm': { text: 'Hai bè cùng tiết tấu (giảm đối tỉ)', ref: 'doi-vi-don-gian-hai-be' },
}
/** Soft rules and their cost; every other rule is hard. */
const SOFT: Partial<Record<RuleId, number>> = {
  first: 2, 'leap3-response': 4, 'two-leaps': 6, hidden: 3, perfects: 2, unison: 6, 'strong-perfect': 2, 'upper-neighbor': 2, 'tritone-line': 8, repeat: 3, range: 4, 'cadence-step': 5, 'same-rhythm': 1,
}
export const isSoft = (r: RuleId) => r in SOFT

export type Violation = { rule: RuleId; t: number; version: string; detail?: string }
export type Report = { hard: Violation[]; soft: Violation[]; penalty: number }

export const totalOf = (p: Problem) => Math.max(...p.given.map((s) => s.start + s.dur))

/** All the versions (the original first) for a given counterpoint. */
export function versionsOf(p: Problem, cp: Seg[]): Version[] {
  const I = p.givenIs === 'I' ? p.given : cp
  const II = p.givenIs === 'I' ? cp : p.given
  return [
    makeVersion(p.key, I, II, { I: 0, II: 0 }, 'Nguyên thể', 'near'),
    ...p.versions.map((v) => makeVersion(p.key, I, II, v.shift, v.label, v.motion)),
  ]
}

type Onset = { t: number; up: Note; lo: Note; atkUp: boolean; atkLo: boolean; iv: Interval }

/** Allowed duration at an offset inside the bar (no syncopation: notes start on their own grid). */
export function placeOk(m: Meter, offset: number, dur: number): boolean {
  const B = barQ(m)
  if (offset + dur > B) return false
  if (dur === 1) return true
  if (dur === 2) return offset % 2 === 0
  if (dur === 3) return offset % 2 === 0 // a dotted half on a beat (the đề itself uses one on beat 2)
  if (dur === 4) return offset % 2 === 0 && (B !== 8 || offset % 4 === 0)
  if (dur === 6) return offset === 0
  if (dur === 8) return offset === 0
  return false
}

/**
 * Check a counterpoint known up to `horizon` (quarters). Rules that need notes after the horizon are skipped,
 * so the solver can call this on partial lines; with `horizon = total` every rule runs.
 * `stopAtHard` returns at the first hard violation (fast pruning).
 */
export function check(p: Problem, cp: Seg[], horizon: number, stopAtHard = false): Report {
  const total = totalOf(p)
  const H = Math.min(horizon, total)
  const out: Report = { hard: [], soft: [], penalty: 0 }
  const add = (rule: RuleId, t: number, version: string, detail?: string) => {
    const v = { rule, t, version, detail }
    if (isSoft(rule)) {
      out.soft.push(v)
      out.penalty += SOFT[rule]!
    } else out.hard.push(v)
  }
  const done = () => stopAtHard && out.hard.length > 0

  /* ----- the counterpoint line itself (same in every version) ----- */
  const cpNotes = notesOf(cp)
  const B = barQ(p.meter)
  for (let i = 0; i < cp.length; i++) {
    const s = cp[i]
    if (!placeOk(p.meter, s.start % B, s.dur)) add('seg-place', s.start, 'Nguyên thể')
    if (s.tied) {
      const prev = cp[i - 1]
      const ok = prev && prev.p.midi === s.p.midi && prev.start + prev.dur === s.start && (prev.dur >= 2 || p.quarterPrep) && (prev.dur >= s.dur || (prev.dur === 2 && s.dur === 4))
      if (!ok) add('tie', s.start, 'Nguyên thể')
      // even when the teacher allows it, a tied quarter is only a suspension's preparation: over the bar line, into a dissonance
      else if (prev.dur === 1) {
        const g = notesOf(p.given).find((n) => n.start <= s.start && s.start < n.start + n.dur)
        const iv = g && (p.givenIs === 'II' ? interval(s.p, g.p) : interval(g.p, s.p))
        if (s.start % B !== 0 || !iv || consonant(iv)) add('tie', s.start, 'Nguyên thể', 'nốt đen chỉ được nối khi làm nốt chuẩn bị cho nốt lưu ở phách mạnh')
      }
    }
    if (done()) return out
  }
  for (let i = 1; i < cpNotes.length; i++) {
    const a = cpNotes[i - 1]
    const b = cpNotes[i]
    const m = melodicOk(a.p, b.p)
    if (!m.ok) add('leap', b.start, 'Nguyên thể', m.why)
    if (strength(p.meter, b.start) === 3 && b.dur < a.dur) add('rhythm-change', b.start, 'Nguyên thể')
    if (b.p.midi === a.p.midi) {
      add('repeat', b.start, 'Nguyên thể')
      if (i >= 2 && cpNotes[i - 2].p.midi === a.p.midi) add('repeat3', b.start, 'Nguyên thể')
    }
    if (i >= 2) {
      const z = cpNotes[i - 2]
      const leap = a.p.step - z.p.step
      const next = b.p.step - a.p.step
      const answered = next !== 0 && Math.sign(next) === -Math.sign(leap)
      if (Math.abs(leap) >= 3 && !answered) add('leap-response', b.start, 'Nguyên thể')
      else if (Math.abs(leap) === 2 && !answered) add('leap3-response', b.start, 'Nguyên thể')
      if (Math.abs(leap) >= 2 && Math.abs(next) >= 2 && Math.sign(next) === Math.sign(leap)) add('two-leaps', b.start, 'Nguyên thể')
    }
    if (i >= 3) {
      const w = [cpNotes[i - 3], cpNotes[i - 2], cpNotes[i - 1], b].map((n) => n.p)
      const d = w.slice(1).map((x, k) => x.step - w[k].step)
      if (d.every((x) => x === d[0] && Math.abs(x) === 1)) {
        const hi = d[0] > 0 ? w[3] : w[0]
        const lo = d[0] > 0 ? w[0] : w[3]
        if (hi.midi - lo.midi === 6) add('tritone-line', b.start, 'Nguyên thể')
      }
    }
    if (done()) return out
  }
  if (cpNotes.length) {
    const steps = cpNotes.map((n) => n.p.step)
    if (Math.max(...steps) - Math.min(...steps) > 9) add('range', 0, 'Nguyên thể')
  }
  const cpEnd = cp.length ? cp[cp.length - 1].start + cp[cp.length - 1].dur : 0
  if (H >= total && cpEnd !== total) add('end', cpEnd, 'Nguyên thể')
  if (H >= total && cpNotes.length >= 2) {
    const a = cpNotes[cpNotes.length - 2]
    const b = cpNotes[cpNotes.length - 1]
    if (Math.abs(b.p.step - a.p.step) !== 1) add('cadence-step', b.start, 'Nguyên thể')
  }
  if (done()) return out

  /* ----- every version ----- */
  for (const v of versionsOf(p, cp)) {
    const { upper, lower } = upperLower(v)
    const up = notesOf(upper)
    const lo = notesOf(lower)
    const upAt = new Map(up.map((n) => [n.start, n]))
    const loAt = new Map(lo.map((n) => [n.start, n]))
    const times = [...new Set([...up.map((n) => n.start), ...lo.map((n) => n.start)])].filter((t) => t < H).sort((a, b) => a - b)
    const findAt = (ns: Note[], t: number) => ns.find((n) => n.start <= t && t < n.start + n.dur)
    const ons: Onset[] = []
    for (const t of times) {
      const u = findAt(up, t)
      const l = findAt(lo, t)
      if (!u || !l) continue
      ons.push({ t, up: u, lo: l, atkUp: upAt.has(t), atkLo: loAt.has(t), iv: interval(u.p, l.p) })
    }
    const isNT = v.shift.I === 0 && v.shift.II === 0
    // a ✱ where neither voice sounds a new note cannot hold a dissonance
    if (isNT) for (const t of p.stars) if (t < H && !ons.some((o) => o.t === t)) add('star', t, v.label, 'không có nốt nào vào ở chỗ ✱')
    const nextOnset = (i: number) => ons[i + 1]

    for (let i = 0; i < ons.length; i++) {
      const o = ons[i]
      if (o.iv.n < 0) add('crossing', o.t, v.label)
      const st = strength(p.meter, o.t)
      if (isNT && p.stars.includes(o.t) && consonant(o.iv)) add('star', o.t, v.label)
      if (!consonant(o.iv)) {
        if (isNT && p.starsOnly && st === 3 && !p.stars.includes(o.t)) add('star-extra', o.t, v.label)
        const why = dissonanceOk(o, i)
        if (why) add(why.rule, o.t, v.label, why.detail)
      } else if (isPerfect(o.iv)) {
        const last = H >= total && i === ons.length - 1
        if (o.iv.n === 0 && i > 0 && !last) add('unison', o.t, v.label)
        if (st === 3 && i > 0 && !last) add('strong-perfect', o.t, v.label)
      }
      if (i > 0) {
        const a = ons[i - 1]
        const movedU = o.atkUp && o.up.p.midi !== a.up.p.midi
        const movedL = o.atkLo && o.lo.p.midi !== a.lo.p.midi
        const c1 = perfectClass(a.iv)
        const c2 = perfectClass(o.iv)
        if (movedU && movedL && c1 && c1 === c2) add('parallel', o.t, v.label, `${a.iv.name} → ${o.iv.name}`)
        else if (movedU && movedL && c2 && Math.sign(o.up.p.step - a.up.p.step) === Math.sign(o.lo.p.step - a.lo.p.step)) add('hidden', o.t, v.label)
        if (c1 && c2) add('perfects', o.t, v.label)
      } else if (!isPerfect(o.iv)) add('first', o.t, v.label)
      if (done()) return out
    }
    // the last sound of the piece
    if (H >= total && ons.length) {
      const f = ons[ons.length - 1]
      if (!(isPerfect(f.iv) && f.iv.n % 7 === 0) && !(isPerfect(f.iv) && f.iv.n % 7 === 4)) add('final', f.t, v.label, f.iv.name)
    }
    if (done()) return out

    /** Why a dissonant onset is not allowed, or null when it is (or cannot be judged yet). */
    function dissonanceOk(o: Onset, i: number): { rule: RuleId; detail?: string } | null {
      if (o.atkUp && o.atkLo) return { rule: 'dis-both' }
      const heldIsUp = !o.atkUp
      const held = heldIsUp ? o.up : o.lo
      const moving = heldIsUp ? o.lo : o.up
      const st = strength(p.meter, o.t)
      // 1) suspension: the held note is the dissonance
      const sus = suspension(o, i, held, heldIsUp)
      if (sus === 'ok' || sus === 'later') return null
      // 2) a melodic dissonance in the moving voice, on a weak beat
      if (st === 3) return { rule: 'dis-strong', detail: sus }
      const mel = melodic(o, i, moving, !heldIsUp)
      if (mel === 'ok' || mel === 'later') return null
      if (mel === 'upper') {
        add('upper-neighbor', o.t, v.label)
        return null
      }
      return { rule: 'dis-weak', detail: `${mel}; ${sus}` }
    }

    function suspension(o: Onset, i: number, h: Note, heldIsUp: boolean): 'ok' | 'later' | string {
      if (strength(p.meter, o.t) === 1) return 'nốt lưu chỉ đặt ở phách'
      const prep = o.t - h.start
      const r = h.start + h.dur
      if (prep < 2 && !p.quarterPrep) return 'nốt chuẩn bị không được là nốt đen'
      if (prep < 1) return 'nốt lưu không có nốt chuẩn bị'
      for (let k = i - 1; k >= 0 && ons[k].t >= h.start; k--) if (!consonant(ons[k].iv)) return 'nốt chuẩn bị phải là quãng thuận'
      if (prep < r - o.t) return 'nốt chuẩn bị ngắn hơn nốt lưu'
      // position of the dissonant note (doi-vi-don-gian-hai-be: 1 dưới · 3 trên/dưới · 6 trên · 8 dưới/trên · 10 trên · 13 trên)
      const n = o.iv.n
      const s = n % 7
      if (s === 1 && n === 1 && heldIsUp) return 'quãng 2: nốt nghịch phải ở bè dưới'
      if (s === 6 && !heldIsUp) return `quãng ${n + 1}: nốt nghịch phải ở bè trên`
      if (s === 3 && n >= 10 && !heldIsUp) return `quãng ${n + 1}: nốt nghịch phải ở bè trên`
      if (r >= total) return 'nốt lưu không được giải quyết'
      if (r >= H) return 'later'
      const nx = nextOnset(i)
      if (nx && nx.t < r) return 'bè tự do không được đánh nốt mới trước khi nốt lưu giải quyết'
      const res = ons.find((x) => x.t === r)
      if (!res) return 'không tìm thấy nốt giải quyết'
      const after = heldIsUp ? res.up : res.lo
      if (after.p.step !== h.p.step - 1) return 'nốt lưu phải giải quyết xuống liền bậc'
      if (!consonant(res.iv)) return 'nốt giải quyết phải là quãng thuận'
      return 'ok'
    }

    function melodic(o: Onset, i: number, x: Note, xIsUp: boolean): 'ok' | 'later' | 'upper' | string {
      const st = strength(p.meter, o.t)
      if (i === 0 || !consonant(ons[i - 1].iv)) return 'trước quãng nghịch phải là quãng thuận'
      const voice = xIsUp ? up : lo
      const k = voice.indexOf(x)
      const a = voice[k - 1]
      const b = voice[k + 1]
      if (!a || a.start + a.dur !== x.start) return 'nốt nghịch không có nốt đứng trước'
      const D = x.p.step - a.p.step
      if (Math.abs(D) !== 1) return 'nốt nghịch phải đến bằng liền bậc'
      if (x.dur > 2 || (x.dur === 2 && st !== 2)) return 'nốt nghịch ở phách nhẹ phải ngắn (nốt đen, hoặc nốt trắng lướt ở phách)'
      const nx = nextOnset(i)
      const xEnd = x.start + x.dur
      if (!b) return xEnd >= total ? 'nốt nghịch ở cuối bài' : xEnd >= H ? 'later' : 'nốt nghịch không có nốt đi tiếp'
      if (!nx) return 'later'
      if (!consonant(nx.iv)) return 'sau quãng nghịch phải là quãng thuận'
      const E = b.p.step - x.p.step
      if (E === D) return 'ok' // nốt lướt
      if (st === 2) return 'ở phách, nốt nghịch chỉ được là nốt lướt'
      if (E === -D) return D === -1 ? 'ok' : 'upper' // nốt thêu (dưới / trên)
      if (D === -1 && E === -2) return 'ok' // nốt thoát
      if (E === 0 && x.dur === 1) return 'ok' // nốt sớm
      return 'không phải nốt lướt, thêu, sớm hay thoát'
    }
  }
  // same-rhythm (rhythmic contrast) and the line count once
  const giv = notesOf(p.given)
  for (const n of cpNotes) {
    const g = giv.find((x) => x.start === n.start)
    if (g && g.dur === n.dur && n.start < H) add('same-rhythm', n.start, 'Nguyên thể')
  }
  return out
}
