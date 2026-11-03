import type { ArticleMeta } from './wiki'

type CategoryId = ArticleMeta['category']

/** The 27 topics in six families, so the library home shows one family at a time instead of one long list. */
export const TOPIC_GROUPS: { id: string; title: string; ids: CategoryId[] }[] = [
  { id: 'nen-tang', title: 'Nền tảng', ids: ['basics', 'rhythm', 'pitch', 'scales', 'musicianship'] },
  { id: 'hoa-am', title: 'Hoà âm · Phức điệu · Hình thức', ids: ['harmony', 'chromatic', 'polyphony', 'form', 'analysis', 'composition'] },
  { id: 'piano', title: 'Piano & Organ', ids: ['technique', 'instrument', 'expression', 'pianists', 'organ'] },
  { id: 'jazz', title: 'Jazz & Ngẫu hứng', ids: ['jazz', 'improvisation'] },
  { id: 'lich-su', title: 'Lịch sử & Thể loại', ids: ['modern', 'genres', 'composers', 'sacred', 'organology'] },
  { id: 'viet-nam', title: 'Việt Nam & Âm nhạc học', ids: ['vietnam', 'musicology', 'philosophy', 'listening'] },
]

let last: string | undefined
/** The topic opened last from the library home: its tile is where the topic header shrinks back to. */
export const lastTopic = () => last

/**
 * Runs a topic change as a view transition: the tile's picture and title grow into the topic header, or the header
 * shrinks back into its tile. The topic lives in the URL's ?c=, so the router does not start a transition itself.
 */
export function morphTopic(id: string | undefined, _from: Element | null, update: () => void, _ready: () => boolean, after?: () => void) {
  // A plain switch: the view transition started by hand left the page blank on iPhone Safari (11/2026).
  if (id) last = id
  update()
  setTimeout(() => after?.(), 30)
}
