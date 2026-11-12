/**
 * Recording from a microphone or a line input for the score editor: the raw samples (for Basic Pitch afterwards) and,
 * while playing, the pitch heard right now (one note at a time, for the grey draft on the staff).
 */

/** A microphone or a line input; the browser's voice processing off, so the piano is heard as it is. */
export async function openInput(deviceId?: string): Promise<MediaStream> {
  return navigator.mediaDevices.getUserMedia({
    audio: { deviceId: deviceId ? { exact: deviceId } : undefined, echoCancellation: false, noiseSuppression: false, autoGainControl: false, channelCount: 1 },
  })
}

/** The audio inputs (names show once the page has been allowed to use one). */
export async function audioInputs(): Promise<{ id: string; label: string }[]> {
  const all = await navigator.mediaDevices.enumerateDevices()
  return all.filter((d) => d.kind === 'audioinput').map((d, i) => ({ id: d.deviceId, label: d.label || `Cổng vào ${i + 1}` }))
}

/**
 * Pitch of a short window by YIN (de Cheveigné & Kawahara, 2002): the lag with the lowest cumulative-mean-normalised
 * difference under a threshold, refined by a parabola. MIDI number, or null for silence or noise.
 */
export function detectPitch(x: Float32Array, rate: number): number | null {
  const n = x.length
  let rms = 0
  for (let i = 0; i < n; i++) rms += x[i] * x[i]
  if (Math.sqrt(rms / n) < 0.012) return null
  const maxLag = Math.min(Math.floor(rate / 50), n >> 1)
  const minLag = Math.max(2, Math.floor(rate / 4200))
  const w = n - maxLag
  // difference function, then each lag divided by the running mean (so lag 0's trivial match does not win)
  const cmnd = new Float32Array(maxLag + 1)
  let run = 0
  cmnd[0] = 1
  for (let lag = 1; lag <= maxLag; lag++) {
    let sum = 0
    for (let i = 0; i < w; i++) {
      const v = x[i] - x[i + lag]
      sum += v * v
    }
    run += sum
    cmnd[lag] = run ? (sum * lag) / run : 1
  }
  let lag = minLag
  while (lag <= maxLag && cmnd[lag] >= 0.15) lag++
  if (lag > maxLag) return null
  while (lag + 1 <= maxLag && cmnd[lag + 1] < cmnd[lag]) lag++
  // parabola through the dip for a lag between samples
  const a = cmnd[lag - 1] ?? cmnd[lag]
  const c = cmnd[lag + 1] ?? cmnd[lag]
  const den = a - 2 * cmnd[lag] + c
  const exact = den ? lag + (a - c) / (2 * den) : lag
  return Math.round(69 + 12 * Math.log2(rate / exact / 440))
}

/**
 * Collects the input's samples and reports the pitch about twelve times a second. `startedAt` is the audio-clock
 * time of the first sample kept (the recording is placed on the bars by it).
 */
export function startCapture(ctx: AudioContext, stream: MediaStream, onPitch: (midi: number | null) => void) {
  const rate = ctx.sampleRate
  const src = ctx.createMediaStreamSource(stream)
  // ScriptProcessor rather than an AudioWorklet: it runs in every browser this app targets, iOS included
  const node = ctx.createScriptProcessor(4096, 1, 1)
  const mute = ctx.createGain()
  mute.gain.value = 0
  const parts: Float32Array[] = []
  let startedAt = -1
  node.onaudioprocess = (e) => {
    const data = e.inputBuffer.getChannelData(0)
    if (startedAt < 0) startedAt = ctx.currentTime - data.length / ctx.sampleRate
    parts.push(new Float32Array(data))
    const m = detectPitch(data.subarray(data.length - 2048), rate)
    // the whole 4096-sample frame (about 85 ms) is long enough to see a low note's partials apart
    onPitch(m === null ? null : m + octaveFix(spectrum(data, rate, 8192), m))
  }
  src.connect(node)
  node.connect(mute).connect(ctx.destination)
  return {
    stop() {
      node.onaudioprocess = null
      src.disconnect()
      node.disconnect()
      stream.getTracks().forEach((t) => t.stop())
      const pcm = new Float32Array(parts.reduce((n, p) => n + p.length, 0))
      let o = 0
      for (const p of parts) {
        pcm.set(p, o)
        o += p.length
      }
      return { pcm, rate: ctx.sampleRate, startedAt }
    },
  }
}

/* ---------- octave errors ---------- */

/** Magnitude spectrum of a window (Hann, zero-padded to a power of two), with the width of one bin in Hz. */
export function spectrum(x: Float32Array, rate: number, size = 8192): { mag: Float32Array; hz: number } {
  const n = size
  const re = new Float32Array(n)
  const im = new Float32Array(n)
  const len = Math.min(x.length, n)
  for (let i = 0; i < len; i++) re[i] = x[i] * (0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (len - 1)))
  // iterative radix-2 FFT
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1
    for (; j & bit; bit >>= 1) j ^= bit
    j ^= bit
    if (i < j) {
      ;[re[i], re[j]] = [re[j], re[i]]
      ;[im[i], im[j]] = [im[j], im[i]]
    }
  }
  for (let size2 = 2; size2 <= n; size2 <<= 1) {
    const ang = (-2 * Math.PI) / size2
    for (let i = 0; i < n; i += size2)
      for (let k = 0; k < size2 / 2; k++) {
        const wr = Math.cos(ang * k)
        const wi = Math.sin(ang * k)
        const a = i + k
        const b = a + size2 / 2
        const tr = re[b] * wr - im[b] * wi
        const ti = re[b] * wi + im[b] * wr
        re[b] = re[a] - tr
        im[b] = im[a] - ti
        re[a] += tr
        im[a] += ti
      }
  }
  const mag = new Float32Array(n / 2)
  for (let i = 0; i < n / 2; i++) mag[i] = Math.hypot(re[i], im[i])
  return { mag, hz: rate / n }
}

const hzOf = (midi: number) => 440 * 2 ** ((midi - 69) / 12)
/** Semitones from a note to its partials 2 to 8 (octave, twelfth, two octaves, 17th, 19th, ♭21st, three octaves). */
export const PARTIALS = [12, 19, 24, 28, 31, 34, 36]

/**
 * Is a heard note an octave off? A tone at f has partials at f, 2f, 3f… If the note really sounds an octave lower
 * (f/2), there is energy at 1.5f and 2.5f — the commonest error with a phone's microphone, which hears little of a low
 * note's fundamental. If it really sounds an octave higher (2f), the odd places f, 3f, 5f are nearly empty. Places that
 * the other notes sounding at the same time explain (a fifth above in a C major chord, the partials of a played octave)
 * are left out, so a chord is not "corrected". Returns −12, 0 or +12.
 */
export function octaveFix(sp: { mag: Float32Array; hz: number }, midi: number, others: number[] = []): -12 | 0 | 12 {
  const f = hzOf(midi)
  const top = sp.mag.length * sp.hz
  const at = (hz: number) => {
    if (hz >= top) return 0
    let m = 0
    for (let b = Math.floor((hz * 0.985) / sp.hz); b <= Math.ceil((hz * 1.015) / sp.hz); b++) m = Math.max(m, sp.mag[b] ?? 0)
    return m
  }
  const explained = (hz: number) => others.some((o) => o !== midi && Array.from({ length: 12 }, (_, k) => hzOf(o) * (k + 1)).some((p) => Math.abs(p - hz) / hz < 0.02))
  const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0)
  const ref = mean([at(f), at(2 * f)])
  if (!ref) return 0
  // an octave lower?
  const low = [1.5 * f, 2.5 * f].filter((h) => !explained(h)).map(at)
  // not below F1: close chords at the very bottom (C2–E♭2–G2) blur there, and a phone hears nothing of C1 anyway
  if (midi - 12 >= 29 && low.length && mean(low) / ref > 0.25) return -12
  // an octave higher?
  const odd = [f, 3 * f].filter((h) => !explained(h)).map(at)
  const even = mean([at(2 * f), at(4 * f)])
  if (midi + 12 <= 108 && odd.length === 2 && even && mean(odd) / even < 0.12) return 12
  return 0
}

/**
 * Basic Pitch's notes checked against the recording itself: each one's spectrum (from just after its attack, up to
 * 0.3 s) tested by `octaveFix` with the notes sounding with it; then a note found twice at the same time is kept once.
 */
export function fixOctaves<T extends { m: number; t: number; d: number; a: number }>(notes: T[], pcm: Float32Array, rate: number): T[] {
  const fixed = notes.map((n) => {
    if (n.d < 0.08) return n
    const from = Math.floor((n.t + 0.03) * rate)
    const len = Math.min(Math.floor(Math.min(n.d - 0.03, 0.3) * rate), 16384)
    if (len < 1024 || from + len > pcm.length) return n
    const others = notes.filter((o) => o !== n && o.t < n.t + 0.3 && o.t + o.d > n.t + 0.03).map((o) => o.m)
    return { ...n, m: n.m + octaveFix(spectrum(pcm.subarray(from, from + len), rate, 16384), n.m, others) }
  })
  const once = fixed.filter((n, i) => !fixed.some((o, j) => j !== i && o.m === n.m && Math.abs(o.t - n.t) < 0.06 && (o.a > n.a || (o.a === n.a && j < i))))
  return once.filter((n) => {
    const b = once.find((o) => o.m === n.m - 12 && Math.abs(o.t - n.t) < 0.07)
    if (!b || b.d < 0.08) return true
    const from = Math.floor((b.t + 0.03) * rate)
    const len = Math.min(Math.floor(Math.min(b.d - 0.03, 0.3) * rate), 16384)
    if (len < 1024 || from + len > pcm.length) return true
    // only the notes sounding then may explain a partial (a note a beat later once kept every ghost)
    // nor a note that is itself one of the lower note's partials (a ghost twelfth would vouch for a ghost octave)
    const others = once.filter((o) => o !== n && o !== b && o.t < b.t + 0.3 && o.t + o.d > b.t + 0.03 && !PARTIALS.includes(o.m - b.m)).map((o) => o.m)
    return octaveDoubled(spectrum(pcm.subarray(from, from + len), rate, 16384), b.m, others)
  })
}

/**
 * A note an octave above another that starts with it: played, or only the lower note's second partial heard as a note
 * (which happens most when the lower note's fundamental is weak, as through a phone)? Played, the octave adds its own
 * fundamental at the lower note's 2f, so 2f stands well above 3f (three to five times, less when the two beat); a lone
 * note's 2f is at most about one and a half times its 3f, less through a phone. When another note explains 3f the test cannot tell, and the note is kept.
 */
export function octaveDoubled(sp: { mag: Float32Array; hz: number }, lower: number, others: number[] = []): boolean {
  const f = hzOf(lower)
  if (others.some((o) => Array.from({ length: 12 }, (_, k) => hzOf(o) * (k + 1)).some((p) => Math.abs(p - 3 * f) / (3 * f) < 0.02))) return true
  const at = (hz: number) => {
    let m = 0
    for (let b = Math.floor((hz * 0.985) / sp.hz); b <= Math.ceil((hz * 1.015) / sp.hz); b++) m = Math.max(m, sp.mag[b] ?? 0)
    return m
  }
  const third = at(3 * f)
  return !third || at(2 * f) / third > 2.2
}
