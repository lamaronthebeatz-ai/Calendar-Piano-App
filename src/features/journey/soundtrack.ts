import { useSyncExternalStore } from 'react'
import type { Track } from './music'

/**
 * One background track at a time, crossfaded. Gain goes through Web Audio because iOS ignores `audio.volume`; the
 * Commons transcodes allow any origin, and if Web Audio is missing the element plays at full volume instead.
 * Browsers only start sound after a tap, so every tap in the game calls `nudge()` to retry a blocked start.
 */
const LEVEL = 0.5
const MUTE_KEY = 'journey:mute'

type Voice = { el: HTMLAudioElement; gain?: GainNode; source?: MediaElementAudioSourceNode; track: Track }
let ctx: AudioContext | undefined
let voice: Voice | undefined
let muted = (() => {
  try {
    return localStorage.getItem(MUTE_KEY) === '1'
  } catch {
    return false
  }
})()
let playing: Track | undefined
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

function audioContext() {
  if (ctx) return ctx
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (AC) ctx = new AC()
  return ctx
}

function fade(v: Voice, to: number, seconds: number) {
  if (!v.gain || !ctx) return
  const g = v.gain.gain
  g.cancelScheduledValues(ctx.currentTime)
  g.setValueAtTime(g.value, ctx.currentTime)
  g.linearRampToValueAtTime(to, ctx.currentTime + seconds)
}

function release(v: Voice) {
  fade(v, 0, 1.4)
  window.setTimeout(() => {
    v.el.pause()
    v.el.removeAttribute('src')
    v.el.load()
    // a scene changes the track: without this every old track stayed wired into the audio graph for the whole visit
    v.source?.disconnect()
    v.gain?.disconnect()
  }, 1500)
}

/** Play this track (crossfading from the last), or nothing. The same track keeps playing across scenes. */
export function playTrack(track: Track | undefined) {
  if (voice?.track.src === track?.src) return
  if (voice) release(voice)
  voice = undefined
  playing = track
  emit()
  if (!track) return
  const el = new Audio()
  el.crossOrigin = 'anonymous'
  el.loop = true
  el.preload = 'auto'
  el.src = track.src
  const ac = audioContext()
  let gain: GainNode | undefined
  let source: MediaElementAudioSourceNode | undefined
  if (ac) {
    try {
      gain = ac.createGain()
      gain.gain.value = 0
      source = ac.createMediaElementSource(el)
      source.connect(gain).connect(ac.destination)
    } catch {
      gain = source = undefined
    }
  }
  voice = { el, gain, source, track }
  if (!muted) start(voice)
}

function start(v: Voice) {
  void ctx?.resume()
  v.el.play().then(
    () => fade(v, LEVEL, 2.5),
    () => {
      // blocked until the next tap: nudge() retries
    },
  )
}

/** Called from taps: browsers allow sound to start inside a gesture. */
export function nudge() {
  if (voice && !muted && voice.el.paused) start(voice)
}

export function setMuted(m: boolean) {
  muted = m
  try {
    localStorage.setItem(MUTE_KEY, m ? '1' : '0')
  } catch {
    // remembered for this visit only
  }
  if (voice) {
    if (m) {
      fade(voice, 0, 0.6)
      window.setTimeout(() => muted && voice?.el.pause(), 650)
    } else start(voice)
  }
  emit()
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}
const snapshot = () => (muted ? 'm' : '') + (playing?.src ?? '')
/** What is playing and whether sound is off, for the on-screen control. */
export function useSoundtrack() {
  useSyncExternalStore(subscribe, snapshot, snapshot)
  return { track: playing, muted }
}
