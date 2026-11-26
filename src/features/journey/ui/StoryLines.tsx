import type { StoryLine } from './useStory'

/** The story's short lines over any screen: a thought (italic), a narrator's line, a note that the journal grew. Tap to dismiss. */
export function StoryLines({ lines, dismiss }: { lines: StoryLine[]; dismiss: (id: number) => void }) {
  if (!lines.length) return null
  return (
    <div className="st-lines" role="status" aria-live="polite">
      {lines.map((l) => (
        <button key={l.id} className={`st-line is-${l.style}`} onClick={() => dismiss(l.id)}>
          {l.style === 'journal' ? `📔 ${l.text}` : l.text}
        </button>
      ))}
    </div>
  )
}
