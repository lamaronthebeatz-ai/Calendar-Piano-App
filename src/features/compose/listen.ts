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
    onPitch(detectPitch(data.subarray(data.length - 2048), ctx.sampleRate))
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
