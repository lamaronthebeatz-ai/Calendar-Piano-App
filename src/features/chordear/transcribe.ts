/**
 * Polyphonic transcription with Spotify's Basic Pitch (Apache-2.0), loaded only when the analysis mode runs.
 * The model lives in public/models/basic-pitch/ and is cached on first use, not precached.
 */
import { addPitchBendsToNoteEvents, BasicPitch, noteFramesToTime, outputToNotesPoly } from '@spotify/basic-pitch'
import type { Note } from './segment'

let model: BasicPitch | null = null

/** Basic Pitch wants mono audio at 22 050 Hz. */
async function resample(buf: AudioBuffer): Promise<Float32Array> {
  const rate = 22050
  const off = new OfflineAudioContext(1, Math.ceil(buf.duration * rate), rate)
  const src = off.createBufferSource()
  src.buffer = buf
  src.connect(off.destination)
  src.start()
  const out = await off.startRendering()
  return out.getChannelData(0)
}

export async function transcribe(buf: AudioBuffer, onProgress: (p: number) => void): Promise<Note[]> {
  model ??= new BasicPitch(`${import.meta.env.BASE_URL}models/basic-pitch/model.json`)
  const pcm = await resample(buf)
  const frames: number[][] = []
  const onsets: number[][] = []
  const contours: number[][] = []
  await model.evaluateModel(
    pcm,
    (f, o, c) => {
      frames.push(...f)
      onsets.push(...o)
      contours.push(...c)
    },
    onProgress,
  )
  // thresholds chosen for piano: stricter onsets than the library demo, notes at least ~120 ms
  const events = noteFramesToTime(addPitchBendsToNoteEvents(contours, outputToNotesPoly(frames, onsets, 0.5, 0.3, 11)))
  return events.map((e) => ({ m: e.pitchMidi, t: e.startTimeSeconds, d: e.durationSeconds, a: e.amplitude }))
}
