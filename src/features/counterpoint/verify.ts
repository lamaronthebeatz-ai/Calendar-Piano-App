/**
 * An independent checker of the hard rules, written apart from rules.ts on a quarter-note grid, so no answer is
 * accepted on the word of the code that searched for it. It shares only the data types and the version builder
 * (an exact transposition) with the rest; the rule list it follows is docs/notes/counterpoint.md.
 */
import { isOriginal, makeVersion, upperLower, type Pitch, type Seg } from './model'
import type { Problem } from './rules'

export type Fault = { rule: string; t: number; version: string }
type Cell = { p: Pitch; start: number; end: number }

const WHITE = [0, 2, 4, 5, 7, 9, 11]

/** Taneyev number (upper − lower in steps) and consonance class of two pitches. */
function judge(up: Pitch, lo: Pitch, fourthOk = false) {
  const n = up.step - lo.step
  const simple = ((n % 7) + 7) % 7
  const q = up.midi - lo.midi - 12 * Math.floor(n / 7) - WHITE[simple]
  const perfect = (simple === 0 || simple === 4) && q === 0
  const imperfect = (simple === 2 || simple === 5) && (q === 0 || q === -1)
  // an upper pair of three or four voices takes the perfect fourth as a consonance
  const fourth = fourthOk && simple === 3 && q === 0
  return { n, simple, perfect, consonant: perfect || imperfect || fourth, octaveClass: simple === 0 }
}

/** A melodic step the book allows: repeat, m2/M2, m3/M3, P4, P5, m6/M6, P8 (giai điệu §2). */
function stepAllowed(a: Pitch, b: Pitch): boolean {
  if (a.step === b.step) return a.midi === b.midi
  const [lo, hi] = b.step > a.step ? [a, b] : [b, a]
  const n = hi.step - lo.step
  if (n > 7 || n === 6) return false
  const q = hi.midi - lo.midi - WHITE[n % 7] - (n === 7 ? 12 : 0)
  if (n === 1 || n === 2 || n === 5) return q === 0 || q === -1
  return q === 0
}

function cellsOf(segs: Seg[]): Cell[] {
  const out: Cell[] = []
  for (const s of segs) {
    const prev = out[out.length - 1]
    if (s.tied && prev && prev.end === s.start && prev.p.midi === s.p.midi) prev.end += s.dur
    else out.push({ p: s.p, start: s.start, end: s.start + s.dur })
  }
  return out
}

export function verify(p: Problem, cp: Seg[]): Fault[] {
  const bar = p.meter.num * (4 / p.meter.den)
  const beat = 4 / p.meter.den
  const level = (t: number) => (t % bar === 0 ? 3 : (t % bar) % beat === 0 ? 2 : 1)
  const end = p.total ?? Math.max(...p.given.map((s) => s.start + s.dur))
  const fourthOk = !!p.pair?.fourthOk
  const out: Fault[] = []
  const fault = (rule: string, t: number, version = 'Nguyên thể') => out.push({ rule, t, version })
  const minPrep = p.quarterPrep ? 1 : 2

  /* ---- the counterpoint as a line ---- */
  if (!p.noLine) lineFaults()
  function lineFaults() {
  // a voice may enter late (a canon's follower); after that it runs without gaps
  let clock = cp.length ? cp[0].start : 0
  for (let i = 0; i < cp.length; i++) {
    const s = cp[i]
    if (s.start !== clock) fault('gap', s.start)
    clock = s.start + s.dur
    const off = s.start % bar
    const fits = off + s.dur <= bar
    const placed =
      s.dur === 1 || (s.dur === 2 || s.dur === 3 ? off % 2 === 0 : s.dur === 4 ? off % 2 === 0 && (bar !== 8 || off % 4 === 0) : (s.dur === 6 || s.dur === 8) && off === 0)
    if (!fits || !placed) fault('seg-place', s.start)
    if (s.tied) {
      const a = cp[i - 1]
      const lawful = a && a.p.midi === s.p.midi && a.start + a.dur === s.start && (a.dur >= 2 || !!p.quarterPrep) && (a.dur >= s.dur || (a.dur === 2 && s.dur === 4))
      if (!lawful) fault('tie', s.start)
      // a teacher-allowed tied quarter only prepares a suspension: over the bar line into a dissonance
      else if (a.dur === 1) {
        const g = p.given.find((x) => x.start <= s.start && s.start < x.start + x.dur)
        const j = g && (p.givenIs === 'II' ? judge(s.p, g.p) : judge(g.p, s.p))
        if (s.start % bar !== 0 || !j || j.consonant) fault('tie', s.start)
      }
    }
  }
  if (clock !== end) fault('end', clock)
  const line = cellsOf(cp)
  for (let i = 1; i < line.length; i++) {
    const a = line[i - 1]
    const b = line[i]
    if (!stepAllowed(a.p, b.p)) fault('leap', b.start)
    if (b.start % bar === 0 && b.end - b.start < a.end - a.start) fault('rhythm-change', b.start)
    if (i >= 2 && line[i - 2].p.midi === a.p.midi && a.p.midi === b.p.midi) fault('repeat3', b.start)
    if (i >= 2) {
      const leap = a.p.step - line[i - 2].p.step
      const next = b.p.step - a.p.step
      if (Math.abs(leap) >= 2 && !(next !== 0 && Math.sign(next) !== Math.sign(leap))) fault('leap-response', b.start)
    }
  }
  }

  /* ---- every version, vertically ---- */
  const I = p.givenIs === 'I' ? p.given : cp
  const II = p.givenIs === 'I' ? cp : p.given
  const specs = [{ shift: { I: 0, II: 0 }, motion: 'near' as const, label: 'Nguyên thể' }, ...p.versions]
  for (const sp of specs) {
    const v = makeVersion(p.key, I, II, sp.shift, sp.label, sp.motion, { ih: sp.ih, mirror: sp.mirror })
    const { upper, lower } = upperLower(v)
    const U = cellsOf(upper)
    const L = cellsOf(lower)
    const nt = isOriginal(sp)
    const at = (cs: Cell[], t: number) => cs.find((c) => c.start <= t && t < c.end)
    const times = [...new Set([...U, ...L].map((c) => c.start))].filter((t) => t < end).sort((a, b) => a - b)
    type On = { t: number; u: Cell; l: Cell; hitU: boolean; hitL: boolean; j: ReturnType<typeof judge> }
    const ons: On[] = []
    for (const t of times) {
      const u = at(U, t)
      const l = at(L, t)
      if (u && l) ons.push({ t, u, l, hitU: u.start === t, hitL: l.start === t, j: judge(u.p, l.p, fourthOk) })
    }
    const onAt = (t: number) => ons.find((o) => o.t === t)
    const anyBetween = (a: number, b: number) => ons.some((o) => o.t > a && o.t < b)
    const nextCell = (cs: Cell[], c: Cell) => cs.find((x) => x.start === c.end)
    const prevCell = (cs: Cell[], c: Cell) => cs.find((x) => x.end === c.start)

    if (nt) for (const t of p.stars) if (t < end && !onAt(t)) fault('star', t, sp.label)

    /** The held voice's note is a lawful suspension at onset k. */
    const suspended = (k: number, heldUp: boolean): boolean => {
      const o = ons[k]
      if (level(o.t) === 1) return false
      const h = heldUp ? o.u : o.l
      const cs = heldUp ? U : L
      if (o.t - h.start < minPrep || h.end - o.t > o.t - h.start) return false
      const entry = onAt(h.start)
      if (!entry || !entry.j.consonant) return false
      if (k === 0 || !ons[k - 1].j.consonant) return false
      // where the dissonant note sits: 2 below only; 7 above; 11, 14 above (Sơ đồ 2)
      const n = o.j.n
      if (n === 1 && heldUp) return false
      if (o.j.simple === 6 && !heldUp) return false
      if (o.j.simple === 3 && n >= 10 && !heldUp) return false
      if (h.end >= end || anyBetween(o.t, h.end)) return false
      const r = onAt(h.end)
      const a1 = nextCell(cs, h)
      if (!r || !a1) return false
      const twoStep = (want: number) => {
        const a2 = nextCell(cs, a1)
        if (!a2 || a2.p.step !== want || anyBetween(a1.start, a2.start)) return false
        const o2 = onAt(a2.start)
        return !!o2 && o2.j.consonant
      }
      if (a1.p.step === h.p.step - 1) return r.j.consonant || (a1.end - a1.start <= 2 && twoStep(a1.p.step - 1))
      return r.j.consonant && a1.end - a1.start === 1 && twoStep(h.p.step - 1)
    }
    /** The moving voice's note at onset k is a passing, neighbour, cambiata or anticipation note. */
    const ornament = (k: number, up: boolean): boolean => {
      const o = ons[k]
      const cs = up ? U : L
      const x = up ? o.u : o.l
      const a = prevCell(cs, x)
      const b = nextCell(cs, x)
      if (k === 0 || !a || !b || k + 1 >= ons.length) return false
      const before = ons[k - 1]
      const afterSuspension = !before.j.consonant && a.start < before.t && x.p.step === a.p.step - 1
      if (!before.j.consonant && !afterSuspension) return false
      if (!ons[k + 1].j.consonant) return false
      const D = x.p.step - a.p.step
      const E = b.p.step - x.p.step
      if (Math.abs(D) !== 1) return false
      return E === D || E === -D || (D === -1 && E === -2) || E === 0
    }

    for (let k = 0; k < ons.length; k++) {
      const o = ons[k]
      if (o.j.n < 0) fault('crossing', o.t, sp.label)
      if (nt && p.stars.includes(o.t) && o.j.consonant) fault('star', o.t, sp.label)
      if (!o.j.consonant) {
        if (nt && p.starsOnly && level(o.t) === 3 && !p.stars.includes(o.t)) fault('star-extra', o.t, sp.label)
        let ok: boolean
        if (o.hitU && o.hitL) ok = level(o.t) < 3 && (ornament(k, true) || ornament(k, false))
        else ok = suspended(k, !o.hitU) || (level(o.t) < 3 && ornament(k, o.hitU))
        if (!ok) fault('dissonance', o.t, sp.label)
      }
      if (k > 0) {
        const a = ons[k - 1]
        const du = o.hitU ? Math.sign(o.u.p.step - a.u.p.step) : 0
        const dl = o.hitL ? Math.sign(o.l.p.step - a.l.p.step) : 0
        const movedU = o.hitU && o.u.p.midi !== a.u.p.midi
        const movedL = o.hitL && o.l.p.midi !== a.l.p.midi
        if (movedU && movedL && du === dl && a.j.perfect && o.j.perfect && a.j.octaveClass === o.j.octaveClass) fault('parallel', o.t, sp.label)
        else if (movedU && movedL && du === dl && o.j.perfect && (p.pair?.hiddenHard || (p.pair?.outer && Math.abs(o.u.p.step - a.u.p.step) >= 2))) fault('hidden-hard', o.t, sp.label)
        if (k > 1 && ons[k - 2].j.perfect && a.j.perfect && o.j.perfect) fault('perfects3', o.t, sp.label)
      }
    }
  }
  return out
}
