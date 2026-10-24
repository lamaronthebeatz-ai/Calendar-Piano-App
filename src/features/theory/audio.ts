/**
 * A tiny synthesised piano and click for the playable diagrams: one shared AudioContext, created on the
 * first user gesture (browsers refuse to start audio before one), no samples to download.
 */

type Ctx = { ctx: AudioContext; out: GainNode }
let shared: Ctx | null = null

function audio(): Ctx | null {
  if (!shared) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return null
    const ctx = new AC()
    // A gentle compressor keeps chords from clipping.
    const comp = ctx.createDynamicsCompressor()
    comp.threshold.value = -16
    comp.ratio.value = 4
    const out = ctx.createGain()
    out.gain.value = 0.55
    out.connect(comp).connect(ctx.destination)
    shared = { ctx, out }
  }
  if (shared.ctx.state === 'suspended') void shared.ctx.resume()
  return shared
}

const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12)

type Voice = { stop: (at: number) => void }

/** A struck string: a few partials through a closing low-pass, fast attack and a long exponential decay. */
function strike({ ctx, out }: Ctx, midi: number, at: number, dur: number, vel: number): Voice {
  const f = hz(midi)
  const env = ctx.createGain()
  const lp = ctx.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.setValueAtTime(Math.min(12000, f * 9), at)
  lp.frequency.exponentialRampToValueAtTime(Math.max(400, f * 2.2), at + 1.2)
  lp.connect(env).connect(out)
  // Low notes ring longer and softer, as on a real instrument.
  const level = vel * (midi < 48 ? 0.32 : 0.24)
  const tail = Math.max(0.5, dur)
  env.gain.setValueAtTime(0, at)
  env.gain.linearRampToValueAtTime(level, at + 0.006)
  env.gain.exponentialRampToValueAtTime(level * 0.35, at + 0.35)
  env.gain.exponentialRampToValueAtTime(0.0008, at + tail + 0.6)
  const oscs = [
    [1, 'triangle', 1],
    [2, 'sine', 0.35],
    [3, 'sine', 0.12],
  ].map(([mult, type, g]) => {
    const o = ctx.createOscillator()
    o.type = type as OscillatorType
    o.frequency.value = f * (mult as number)
    // Slight detune on the upper partials gives a little shimmer.
    o.detune.value = (mult as number) > 1 ? 3 : 0
    const pg = ctx.createGain()
    pg.gain.value = g as number
    o.connect(pg).connect(lp)
    o.start(at)
    o.stop(at + tail + 0.7)
    return o
  })
  return {
    stop: (t) => {
      env.gain.cancelScheduledValues(t)
      env.gain.setTargetAtTime(0, t, 0.03)
      oscs.forEach((o) => {
        try {
          o.stop(t + 0.15)
        } catch {
          /* already stopped */
        }
      })
    },
  }
}

/** A wood-block tick: short, pitched higher when accented. */
function tick({ ctx, out }: Ctx, at: number, accent: boolean): Voice {
  const o = ctx.createOscillator()
  const env = ctx.createGain()
  o.type = 'square'
  o.frequency.setValueAtTime(accent ? 1650 : 1150, at)
  o.frequency.exponentialRampToValueAtTime(accent ? 900 : 700, at + 0.04)
  env.gain.setValueAtTime(0, at)
  env.gain.linearRampToValueAtTime(accent ? 0.22 : 0.12, at + 0.002)
  env.gain.exponentialRampToValueAtTime(0.0005, at + 0.07)
  o.connect(env).connect(out)
  o.start(at)
  o.stop(at + 0.09)
  return {
    stop: (t) => {
      try {
        o.stop(t)
      } catch {
        /* already stopped */
      }
    },
  }
}

/** Play one note (or chord) now, e.g. when a key is pressed. */
export function playNow(midis: number[], dur = 1.2, roll = 0) {
  const a = audio()
  if (!a) return
  midis.forEach((m, i) => strike(a, m, a.ctx.currentTime + 0.005 + i * roll, dur, 0.8))
}

/** One step of a sequence, in seconds from its start. A step without midis and without a tick is silent (a rest). */
export type Step = { at: number; dur: number; midis?: number[]; tick?: 'accent' | 'beat' }

let current: (() => void) | null = null

/**
 * Schedule a sequence on the audio clock and follow it with requestAnimationFrame, so the visuals stay in time
 * with the sound. Starting a sequence stops the one already playing. Returns a stop function.
 */
export function playSequence(steps: Step[], cb: { onStep?: (i: number) => void; onFrame?: (t: number) => void; onEnd?: () => void }) {
  current?.()
  const a = audio()
  if (!a || !steps.length) {
    cb.onEnd?.()
    return () => {}
  }
  const t0 = a.ctx.currentTime + 0.08
  const voices: Voice[] = []
  for (const s of steps) {
    s.midis?.forEach((m) => voices.push(strike(a, m, t0 + s.at, s.dur, 0.75)))
    if (s.tick) voices.push(tick(a, t0 + s.at, s.tick === 'accent'))
  }
  const last = steps.at(-1)!
  const total = last.at + Math.min(last.dur, 1.2)
  let raf = 0
  let step = -1
  let done = false
  const finish = () => {
    if (done) return
    done = true
    cancelAnimationFrame(raf)
    if (current === stop) current = null
    cb.onStep?.(-1)
    cb.onEnd?.()
  }
  const stop = () => {
    voices.forEach((v) => v.stop(a.ctx.currentTime))
    finish()
  }
  const frame = () => {
    const t = a.ctx.currentTime - t0
    let i = step
    while (i + 1 < steps.length && steps[i + 1].at <= t) i++
    if (i !== step) cb.onStep?.((step = i))
    cb.onFrame?.(Math.max(0, t))
    if (t >= total) finish()
    else raf = requestAnimationFrame(frame)
  }
  raf = requestAnimationFrame(frame)
  current = stop
  return stop
}
