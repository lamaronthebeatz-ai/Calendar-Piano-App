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
