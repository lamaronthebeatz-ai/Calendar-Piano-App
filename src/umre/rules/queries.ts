import { diatonic, midi } from '../repr/pitch'
import { toQuarters, type Rational } from '../repr/rational'
import { soundingNotes, type Score, type SoundingNote } from '../repr/score'
import { consonance, intervalClass, metricPosition, verticals, type ConsonanceDef, type Vertical } from '../repr/texture'
import type { Item, Queries } from './lang'

/**
 * Queries over a two-or-more-voice texture, for rules written in the rule language. They compute FACTS (durations in
 * quarter notes, steps, interval classes, which voice holds, what comes before and after); every judgement — what is
 * allowed — is in the rules. Consonance comes from the rulebook's table, per pair (an upper pair may count the fourth).
 * Only the original is examined: versions of a combination are not built here.
 */
export type TextureContext = {
  readonly score: Score
  /** voices whose LINE is judged (the free voices), by index */
  readonly lines: readonly number[]
  /** pairs judged vertically, upper voice first */
  readonly pairs: readonly (readonly [number, number])[]
  readonly end: Rational
  readonly consonance: (pair: readonly [number, number]) => ConsonanceDef
  /** roles of a pair in three or four voices */
  readonly role?: (pair: readonly [number, number]) => { outer: boolean; outerSomewhere: boolean }
  readonly stars?: readonly number[]
  readonly starsOnly?: boolean
}

const q = (r: Rational) => toQuarters(r)
const level = (ctx: TextureContext, at: Rational) => metricPosition(ctx.score, at).level

/** Note values that mark metric positions in a bar, strongest first: the bar, beat multiples dividing it, the beat, subdivisions. */
function grid(barQ: number, beatQ: number): number[] {
  const out = [barQ]
  for (let v = beatQ * 2; v < barQ; v *= 2) if (barQ % v === 0) out.push(v)
  out.sort((a, b) => b - a)
  for (let v = beatQ; v >= beatQ / 8; v /= 2) if (!out.includes(v)) out.push(v)
  return out
}

export function textureQueries(ctx: TextureContext): Queries {
  const s = ctx.score
  const m = s.meters[0].meter
  const barQ = (m.num * 4) / m.den
  const beatQ = 4 / m.den
  const G = grid(barQ, beatQ)
  const weightOf = (t: number) => G.find((v) => ((t % barQ) + 1e-9) % v < 1e-6) ?? 0
  const sn = s.voices.map((v) => soundingNotes(v))
  const vert = new Map<string, Vertical[]>()
  const V = (p: readonly [number, number]) => {
    const k = p.join(',')
    if (!vert.has(k)) vert.set(k, verticals(s.voices[p[0]], s.voices[p[1]], ctx.end))
    return vert.get(k)!
  }
  const cons = (p: readonly [number, number], x: Vertical | undefined) => (x ? consonance(x.interval, ctx.consonance(p)) : null)
  const perfectCls = (p: readonly [number, number], x: Vertical | undefined) => {
    if (!x || cons(p, x) !== 'perfect') return null
    const k = intervalClass(x.interval).steps
    return k === 0 ? 'octave' : k === 4 ? 'fifth' : 'other'
  }
  const vAt = (p: readonly [number, number], t: Rational) => V(p).find((x) => toQuarters(x.at) === q(t))

  return {
    'line.events': () =>
      ctx.lines.flatMap((i) => {
        const evs = s.voices[i].events
        let clock = evs.length ? q(evs[0].onset) : 0
        return evs.map((e) => {
          const item: Item = { at: q(e.onset), voices: [i], ids: [e.id], facts: { kind: e.kind, gapBefore: q(e.onset) !== clock } }
          clock = Math.max(clock, q(e.onset) + q(e.duration))
          return item
        })
      }),
    'line.end': () =>
      ctx.lines.map((i) => {
        const evs = s.voices[i].events
        const endsAt = evs.length ? Math.max(...evs.map((e) => q(e.onset) + q(e.duration))) : 0
        return { at: endsAt, voices: [i], facts: { endsAt, pieceEnd: q(ctx.end) } }
      }),
    'line.segments': () =>
      ctx.lines.flatMap((i) =>
        s.voices[i].events.filter((e) => e.kind === 'note').map((e) => {
          const start = q(e.onset)
          const end = start + q(e.duration)
          const w = weightOf(start)
          const stronger = G.filter((v) => v > w).some((v) => Math.floor(start / v + 1e-9) * v + v < end - 1e-9)
          const barEnd = Math.floor(start / barQ + 1e-9) * barQ + barQ
          return { at: start, voices: [i], ids: [e.id], facts: { crossesStronger: stronger, crossesBar: end > barEnd + 1e-9 } }
        }),
      ),
    'line.ties': () =>
      ctx.lines.flatMap((i) => {
        const evs = s.voices[i].events
        return evs.flatMap((e, k) => {
          if (e.kind !== 'note' || (e.tie !== 'stop' && e.tie !== 'continue')) return []
          const a = evs[k - 1]
          const at = e.onset
          const other = ctx.pairs.filter((p) => p.includes(i))
          const intoDissonance = other.some((p) => cons(p, vAt(p, at)) === 'dissonant')
          return [{
            at: q(at), voices: [i], ids: [a?.id ?? '', e.id],
            facts: { prevDur: a ? q(a.duration) : 0, dur: q(e.duration), samePitch: a?.kind === 'note' && midi(a.pitch) === midi(e.pitch), overBar: level(ctx, at) === 3, intoDissonance },
          }]
        })
      }),
    'line.steps': () =>
      ctx.lines.flatMap((i) =>
        sn[i].slice(1).map((b, k) => {
          const a = sn[i][k]
          const st = diatonic(b.pitch) - diatonic(a.pitch)
          const iv = { steps: st, semitones: midi(b.pitch) - midi(a.pitch) }
          return {
            at: q(b.onset), voices: [i], ids: [...a.ids, ...b.ids],
            facts: { steps: st, absSteps: Math.abs(st), semitones: iv.semitones, quality: intervalClass(st < 0 ? { steps: -st, semitones: -iv.semitones } : iv).quality, aDur: q(a.duration), bDur: q(b.duration), bLevel: level(ctx, b.onset) },
          }
        }),
      ),
    'line.triples': () =>
      ctx.lines.flatMap((i) =>
        sn[i].slice(2).map((b, k) => {
          const z = sn[i][k]
          const a = sn[i][k + 1]
          return { at: q(b.onset), voices: [i], ids: [...a.ids, ...b.ids], facts: { leap: diatonic(a.pitch) - diatonic(z.pitch), next: diatonic(b.pitch) - diatonic(a.pitch), zMidi: midi(z.pitch), aMidi: midi(a.pitch), bMidi: midi(b.pitch) } }
        }),
      ),
    'pair.verticals': () =>
      ctx.pairs.flatMap((p) =>
        V(p).map((x, k, all) => {
          const a = all[k - 1]
          const role = ctx.role?.(p) ?? { outer: false, outerSomewhere: false }
          return {
            at: q(x.at), voices: [...p], ids: [...x.u.ids, ...x.l.ids],
            facts: {
              steps: x.interval.steps, cons: cons(p, x), cls: perfectCls(p, x), prevCls: perfectCls(p, a), prevPrevCls: perfectCls(p, all[k - 2]),
              movedU: !!a && x.hitU && midi(x.u.pitch) !== midi(a.u.pitch), movedL: !!a && x.hitL && midi(x.l.pitch) !== midi(a.l.pitch),
              dirU: a ? Math.sign(diatonic(x.u.pitch) - diatonic(a.u.pitch)) : 0, dirL: a ? Math.sign(diatonic(x.l.pitch) - diatonic(a.l.pitch)) : 0,
              upperLeap: a ? Math.abs(diatonic(x.u.pitch) - diatonic(a.u.pitch)) : 0,
              level: level(ctx, x.at), star: !!ctx.stars?.includes(q(x.at)), starsOnly: !!ctx.starsOnly, outer: role.outer, outerSomewhere: role.outerSomewhere,
            },
          }
        }),
      ),
    'pair.dissonances': () => ctx.pairs.flatMap((p) => dissonances(ctx, p, V(p), sn, (x) => cons(p, x), (t) => vAt(p, t))),
    'pair.stars': () =>
      ctx.pairs.flatMap((p) => (ctx.stars ?? []).map((t) => ({ at: t, voices: [...p], facts: { sounding: V(p).some((x) => toQuarters(x.at) === t) } }))),
  }
}

/** Facts about every dissonant vertical: neighbours, which voice holds, the held note's preparation and resolution, the moving notes' approach and departure. */
function dissonances(ctx: TextureContext, p: readonly [number, number], vs: Vertical[], sn: SoundingNote[][], cons: (x: Vertical | undefined) => string | null, vAt: (t: Rational) => Vertical | undefined): Item[] {
  const out: Item[] = []
  const nextOf = (xs: SoundingNote[], n: SoundingNote) => xs.find((y) => q(y.onset) === q(n.onset) + q(n.duration))
  const prevOf = (xs: SoundingNote[], n: SoundingNote) => xs.find((y) => q(y.onset) + q(y.duration) === q(n.onset))
  const d = (a: SoundingNote, b: SoundingNote) => diatonic(b.pitch) - diatonic(a.pitch)
  vs.forEach((x, k) => {
    if (cons(x) !== 'dissonant') return
    const heldVoice = x.hitU && x.hitL ? 'none' : !x.hitU ? 'upper' : 'lower'
    // "nốt nghịch ở bè dưới / trên" is about register: with crossed voices the score's upper voice sounds below
    const crossed = x.interval.steps < 0
    const held = heldVoice === 'none' ? 'none' : crossed ? (heldVoice === 'upper' ? 'lower' : 'upper') : heldVoice
    let number = Math.abs(x.interval.steps)
    while (number > 13) number -= 7
    const facts: Record<string, unknown> = {
      level: level(ctx, x.at), number, held, struckU: x.hitU, struckL: x.hitL,
      prevConsonant: k > 0 && cons(vs[k - 1]) !== 'dissonant', nextConsonant: k + 1 < vs.length && cons(vs[k + 1]) !== 'dissonant',
    }
    if (held !== 'none') {
      const hv = heldVoice === 'upper' ? p[0] : p[1]
      const h = heldVoice === 'upper' ? x.u : x.l
      const a1 = nextOf(sn[hv], h)
      const a2 = a1 && nextOf(sn[hv], a1)
      const hEnd = q(h.onset) + q(h.duration)
      Object.assign(facts, {
        prepDur: q(x.at) - q(h.onset), restDur: hEnd - q(x.at),
        prepConsonant: (cons(vAt(h.onset)) ?? 'dissonant') !== 'dissonant',
        resolutionStep: a1 ? d(h, a1) : null,
        resolutionConsonant: a1 ? (cons(vAt(a1.onset)) ?? 'dissonant') !== 'dissonant' : false,
        freeStrikesBefore: vs.some((y) => q(y.at) > q(x.at) && q(y.at) < hEnd),
        // "nhảy sang nốt thuận với nốt tự do" (tr. 13): the free voice holds still from the dissonance until the resolution
        ornamented: !!(a1 && a2 && d(h, a1) !== -1 && !vs.some((y) => q(y.at) > q(x.at) && q(y.at) < q(a2.onset) && q(y.at) !== q(a1.onset)) && (cons(vAt(a1.onset)) ?? 'dissonant') !== 'dissonant' && diatonic(a2.pitch) === diatonic(h.pitch) - 1 && (cons(vAt(a2.onset)) ?? 'dissonant') !== 'dissonant'),
      })
    }
    for (const [side, struck, note, vi] of [['u', x.hitU, x.u, p[0]], ['l', x.hitL, x.l, p[1]]] as const) {
      if (!struck) continue
      const pr = prevOf(sn[vi], note)
      const nx = nextOf(sn[vi], note)
      facts[`${side}In`] = pr ? d(pr, note) : null
      facts[`${side}Out`] = nx ? d(note, nx) : null
      facts[`${side}Same`] = !!nx && midi(nx.pitch) === midi(note.pitch)
    }
    out.push({ at: q(x.at), voices: [...p], ids: [...x.u.ids, ...x.l.ids], facts })
  })
  return out
}
