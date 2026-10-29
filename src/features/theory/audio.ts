/**
 * The piano and click of the playable diagrams and the Solfège page: one shared AudioContext, created on the first
 * user gesture (browsers refuse to start audio before one). Notes are played from samples of a real grand piano
 * (Salamander Grand Piano V3, Alexander Holm, CC BY 3.0: C, D♯, F♯ and A from C2 to C7 at two velocities, in
 * public/media/piano), each retuned to equal temperament at A4 = 440 Hz; until a sample has loaded — or offline
 * before it was ever fetched — the note falls back to a small synthesised piano.
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
    loadPiano(ctx)
  }
  if (shared.ctx.state === 'suspended') void shared.ctx.resume()
  return shared
}

const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12)

type Voice = { stop: (at: number) => void }

/* ---------- sampled piano ---------- */

const SAMPLE_NOTES = [36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96]
const LAYERS = [6, 13] as const
/** Cents to add to each sample so it sounds in equal temperament at A4 = 440 Hz (measured from the recordings). */
const RETUNE: Record<string, number> = {
  '36-6': 11.6, '36-13': 11.6, '39-6': 6.3, '39-13': 6.6, '42-6': 4.1, '42-13': 4.1, '45-6': -1.7, '45-13': -1.5,
  '48-6': 12.9, '48-13': 12.9, '51-6': 1.8, '51-13': 1.8, '54-6': 5.5, '54-13': 5, '57-6': -1, '57-13': -0.7,
  '60-6': -0.8, '60-13': -0.8, '63-6': -1.7, '63-13': -1.6, '66-6': 3.5, '66-13': 3.6, '69-6': -0.2, '69-13': -0.1,
  '72-6': -4.7, '72-13': -4.6, '75-6': -2.5, '75-13': -2.4, '78-6': -2.2, '78-13': -5.1, '81-6': -7.8, '81-13': -7.7,
  '84-6': -6.3, '84-13': -6.1, '87-6': -9.6, '87-13': -9.5, '90-6': -13.9, '90-13': -13.7, '93-6': -15.6, '93-13': -13.8,
  '96-6': -23.7, '96-13': -23.6,
}
const buffers = new Map<string, AudioBuffer>()
let loading = false

/** Fetch and decode every sample once, in the background (Opus where the browser plays it, AAC otherwise). */
function loadPiano(ctx: AudioContext) {
  if (loading) return
  loading = true
  const ext = typeof Audio !== 'undefined' && new Audio().canPlayType('audio/ogg; codecs=opus') ? 'ogg' : 'm4a'
  // nearest the middle of the keyboard first: those are the notes most often played
  const order = [...SAMPLE_NOTES].sort((a, b) => Math.abs(a - 66) - Math.abs(b - 66))
  for (const m of order)
    for (const v of LAYERS) {
      const key = `${m}-${v}`
      fetch(`${import.meta.env.BASE_URL}media/piano/${key}.${ext}`)
        .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(r.status)))
        .then((b) => ctx.decodeAudioData(b))
        .then((buf) => buffers.set(key, buf))
        .catch(() => {
          /* that note keeps the synthesised sound */
        })
    }
}

/** A sampled note: both velocity layers mixed by `vel`, pitched from the nearest sample, damped when it ends. */
function sampled({ ctx, out }: Ctx, midi: number, at: number, dur: number, vel: number): Voice | null {
  const base = SAMPLE_NOTES.reduce((a, b) => (Math.abs(b - midi) < Math.abs(a - midi) ? b : a))
  const soft = buffers.get(`${base}-6`)
  const loud = buffers.get(`${base}-13`)
  if (!soft || !loud || Math.abs(base - midi) > 2) return null
  const w = Math.min(1, Math.max(0, (vel - 0.55) / 0.4))
  const env = ctx.createGain()
  env.connect(out)
  const level = 1.35
  env.gain.setValueAtTime(level, at)
  const end = at + Math.max(0.35, dur)
  env.gain.setValueAtTime(level, end)
  env.gain.exponentialRampToValueAtTime(0.001, end + 0.35)
  const srcs = ([[soft, 1 - w, '6'], [loud, w, '13']] as const)
    .filter(([, g]) => g > 0.02)
    .map(([buf, g, layer]) => {
      const src = ctx.createBufferSource()
      src.buffer = buf
      src.playbackRate.value = 2 ** ((midi - base + (RETUNE[`${base}-${layer}`] ?? 0) / 100) / 12)
      const pg = ctx.createGain()
      pg.gain.value = g
      src.connect(pg).connect(env)
      src.start(at)
      src.stop(end + 0.4)
      return src
    })
  return {
    stop: (t) => {
      env.gain.cancelScheduledValues(t)
      env.gain.setTargetAtTime(0, t, 0.04)
      srcs.forEach((src) => {
        try {
          src.stop(t + 0.2)
        } catch {
          /* already stopped */
        }
      })
    },
  }
}

/** A struck string: a few partials through a closing low-pass, fast attack and a long exponential decay. */
function strike(c: Ctx, midi: number, at: number, dur: number, vel: number): Voice {
  return sampled(c, midi, at, dur, vel) ?? synth(c, midi, at, dur, vel)
}

function synth({ ctx, out }: Ctx, midi: number, at: number, dur: number, vel: number): Voice {
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
