/**
 * Music under the opening: the start of the finale of Dvořák's Symphony No. 9, up to its famous horn and trumpet
 * theme. It rises as the app opens on the lock screen and fades away once the code is right.
 *
 * Browsers only let sound start after a gesture, so when autoplay is refused the music waits for the first tap or
 * key on the lock screen. The volume goes through Web Audio, because iOS ignores `audio.volume`.
 */
const SRC = `${import.meta.env.BASE_URL}media/intro-dvorak9.m4a`
const MUTED = 'intro:muted'
const GESTURES = ['pointerdown', 'keydown', 'touchend'] as const

let audio: HTMLAudioElement | null = null
let ctx: AudioContext | null = null
let gain: GainNode | null = null
let waiting = false
let stopped = false

export function introMuted() {
  try {
    return localStorage.getItem(MUTED) === '1'
  } catch {
    return false
  }
}

const saveData = () => !!(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData

function ramp(to: number, ms: number) {
  if (ctx && gain) {
    const t = ctx.currentTime
    gain.gain.cancelScheduledValues(t)
    gain.gain.setValueAtTime(gain.gain.value, t)
    gain.gain.linearRampToValueAtTime(to, t + ms / 1000)
  } else if (audio) {
    // No Web Audio: step the element volume (works everywhere but iOS).
    const el = audio
    const from = el.volume
    const t0 = performance.now()
    const step = () => {
      const p = Math.min(1, (performance.now() - t0) / ms)
      el.volume = from + (to - from) * p
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
}

function unhook() {
  waiting = false
  for (const g of GESTURES) removeEventListener(g, play, true)
}

function play() {
  if (!audio || stopped) return
  unhook()
  ctx?.resume().catch(() => undefined)
  audio
    .play()
    .then(() => ramp(1, 1200))
    .catch(() => {
      // Refused without a gesture: try again on the first tap or key.
      if (stopped || waiting) return
      waiting = true
      for (const g of GESTURES) addEventListener(g, play, true)
    })
}

/** Starts (or arms) the opening music. Does nothing when muted or on Save-Data. */
export function startIntroMusic() {
  if (audio || introMuted() || saveData()) return
  stopped = false
  audio = new Audio(SRC)
  audio.preload = 'auto'
  // Missing or unplayable file: give up quietly instead of retrying on every tap.
  audio.addEventListener('error', () => {
    stopped = true
    unhook()
  })
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (AC) {
      ctx = new AC()
      gain = ctx.createGain()
      gain.gain.value = 0
      ctx.createMediaElementSource(audio).connect(gain).connect(ctx.destination)
    } else audio.volume = 0
  } catch {
    ctx = gain = null
    audio.volume = 0
  }
  play()
}

/** Fades the music down and releases it. */
export function stopIntroMusic(ms = 1800) {
  stopped = true
  unhook()
  const el = audio
  const c = ctx
  if (!el) return
  ramp(0, ms)
  setTimeout(() => {
    el.pause()
    el.removeAttribute('src')
    el.load()
    c?.close().catch(() => undefined)
  }, ms + 100)
  audio = null
  ctx = gain = null
}

/** The lock screen's speaker button: mute fades the music out, unmute starts it again. */
export function setIntroMuted(muted: boolean) {
  try {
    localStorage.setItem(MUTED, muted ? '1' : '0')
  } catch {
    // Not remembered; applies to this visit only.
  }
  if (muted) stopIntroMusic(600)
  else startIntroMusic()
}
