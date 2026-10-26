/**
 * Music under the opening: the start of the finale of Dvořák's Symphony No. 9, up to its famous horn and trumpet
 * theme. It rises as the app opens on the lock screen and fades away once the code is right.
 *
 * Browsers only let sound start after a gesture, so when autoplay is refused the music waits for the first tap or
 * key on the lock screen. The volume goes through Web Audio, because iOS ignores `audio.volume`.
 */
const BASE = `${import.meta.env.BASE_URL}media/intro-dvorak9`
const MUTED = 'intro:muted'
// Touch screens only unlock sound when the finger lifts (touchend, pointerup, click), not when it lands;
// every candidate is tried and the wait ends only once sound is really running.
const GESTURES = ['pointerdown', 'pointerup', 'touchend', 'click', 'keydown'] as const

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
  for (const g of GESTURES) removeEventListener(g, onGesture, true)
}

/** Lets the lock screen show "tap for music" while the browser holds the sound back. */
function announce(state: 'waiting' | 'playing' | 'off') {
  dispatchEvent(new CustomEvent('intro-music', { detail: state }))
}
export const introMusicWaiting = () => waiting
let startedAt = 0
/** True right after a tap started the music, so that same tap on the speaker button doesn't mute it again. */
export const introMusicJustStarted = () => performance.now() - startedAt < 1000

let begun = false

/**
 * On a tap or key: build the Web Audio route (needed for fades on iOS, which ignores `audio.volume`), resume it
 * and play. If the browser didn't count this event as a real activation the context stays suspended and the
 * music would run silent, so the listeners stay on and the next event tries again.
 */
function onGesture() {
  const el = audio
  if (!el || stopped || begun) return
  startedAt = performance.now()
  if (!ctx) {
    try {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (AC) {
        ctx = new AC()
        gain = ctx.createGain()
        gain.gain.value = 0
        ctx.createMediaElementSource(el).connect(gain).connect(ctx.destination)
        el.volume = 1
      }
    } catch {
      ctx = gain = null
    }
  }
  const c = ctx
  Promise.all([c ? c.resume() : Promise.resolve(), el.play()])
    .then(() => {
      if (begun || stopped || el !== audio || (c && c.state !== 'running')) return
      begun = true
      unhook()
      // Start the theme from the top, whatever ran silently before.
      el.currentTime = 0
      announce('playing')
      ramp(1, 250)
    })
    .catch(() => undefined)
}

/** Starts the opening music. Where the browser allows sound without a tap it plays at once, straight from the
 * element (fading with `audio.volume`); otherwise it waits for the first tap or key. Muted or Save-Data: nothing. */
export function startIntroMusic() {
  if (audio || introMuted() || saveData()) return
  stopped = false
  begun = false
  audio = new Audio()
  // AAC where it plays (Safari, Chrome); Opus otherwise.
  audio.src = audio.canPlayType('audio/mp4; codecs="mp4a.40.2"') ? `${BASE}.m4a` : `${BASE}.ogg`
  audio.preload = 'auto'
  audio.volume = 0
  // Missing or unplayable file: give up quietly instead of retrying on every tap.
  audio.addEventListener('error', () => {
    stopped = true
    unhook()
    announce('off')
  })
  // Started from a tap (the speaker button): take the Web Audio route straight away, so iOS can fade it too.
  if ((navigator as Navigator & { userActivation?: { isActive: boolean } }).userActivation?.isActive) {
    waiting = true
    for (const g of GESTURES) addEventListener(g, onGesture, true)
    onGesture()
    return
  }
  audio
    .play()
    .then(() => {
      announce('playing')
      ramp(1, 250)
    })
    .catch(() => {
      if (stopped) return
      waiting = true
      announce('waiting')
      for (const g of GESTURES) addEventListener(g, onGesture, true)
    })
}

/** Fades the music down and releases it. */
export function stopIntroMusic(ms = 1800) {
  stopped = true
  unhook()
  const el = audio
  const c = ctx
  if (!el) return
  announce('off')
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
