import type { MusicDatum, SequenceDef } from '../engine/academic'
import type { EvidenceDef, PuzzleDef } from '../engine/types'

/**
 * Academic gameplay of "Ghi chú bên lề" (content/story-ban-thao.ts).
 *
 * FICTION — the recopied page's line and the directions of the scraped neumes are made up for the game (labelled
 * so in the game); the comparison puzzle is graded on that data. FACT — the listening clips are the arc's public-domain
 * recording of Ut queant laxis (music.ts, Wikimedia Commons) at the half-line openings the arc already uses
 * (pz:bt/nghe-ut-queant, source a:hexachord-va-ban-tay-guido); the sources puzzle sorts the arc's sourced evidence by
 * the kind each evidence card records — its answer is that data (tested), not a new claim.
 */
export const BAN_THAO_MUSIC: MusicDatum[] = [
  {
    id: 'mu:bt/trang-chep-lai',
    title: 'Dòng giai điệu chép lại trên dòng kẻ',
    basis: 'fiction',
    note: 'Dòng nhạc trong truyện, chép bằng ký âm ngày nay để khảo sát. Thánh ca không có ô nhịp: ô ở đây chỉ để dễ tìm chỗ.',
    clef: 'treble',
    time: [4, 4],
    notes: [
      [1, 4], [3, 4], [4, 4], [5, 4], [4, 4], [3, 4], [4, 4], [5, 4], [0, 5], [6, 4], [5, 4], [4, 4],
    ].map(([step, oct], i) => ({ id: `n${i + 1}`, step, oct, alter: 0, dur: 240 })),
    // the scraped neumes: directions only (unheighted neumes record no intervals) — one move differs from the copy
    old: { label: 'Vết neume cũ trên mảnh cạo', dirs: ['up', 'up', 'up', 'down', 'down', 'up', 'up', 'down', 'down', 'down', 'down'] },
  },
]

export const BAN_THAO_ACADEMIC_PUZZLES: PuzzleDef[] = [
  {
    id: 'pz:bt/nghe-ca-vien',
    type: 'aural',
    difficulty: 2,
    title: 'Ca viên tập hát dưới sân',
    instructions: 'Ba đoạn là đầu ba nửa câu của Ut queant laxis, đã bị xáo trộn. Nghe (nghe lại bao nhiêu lần cũng được) rồi xếp từ thấp lên cao.',
    content: {
      ask: 'Xếp các đầu câu từ thấp lên cao.',
      mode: 'order',
      clips: [
        { id: 'la', track: 'arezzo', start: 27.1, end: 28.5 },
        { id: 'ut', track: 'arezzo', start: 2.3, end: 3.7 },
        { id: 'mi', track: 'arezzo', start: 9.95, end: 11.4 },
      ],
    },
    answer: ['ut', 'mi', 'la'],
    hints: ['Mỗi nửa câu bắt đầu cao hơn nửa câu trước một bậc.', 'So từng cặp: đoạn nào bắt đầu cao hơn?'],
    explanation: 'Trong bản thu, các nửa câu bắt đầu lần lượt ở ut, re, mi, fa, sol, la; ba đoạn ở đây là đầu câu 1 (ut), 3 (mi) và 6 (la). Hát theo âm tiết đầu câu giúp ca viên nhớ cao độ — điều thầy Rinaldo nói về lối mới.',
    skills: ['aural'],
    links: ['a:hexachord-va-ban-tay-guido'],
    sources: ['a:hexachord-va-ban-tay-guido'],
  },
  {
    id: 'pz:bt/so-huong',
    type: 'choice',
    difficulty: 3,
    title: 'So hai bản chép',
    instructions: 'Vết neume cũ chỉ ghi hướng đi (lên, xuống, giữ). Chạm vào nốt của bản chép lại mà ở đó giai điệu rẽ khác hướng với neume cũ.',
    content: { ask: 'Nốt nào rẽ khác hướng?', choices: ['Nốt 1', 'Nốt 2', 'Nốt 3', 'Nốt 4', 'Nốt 5', 'Nốt 6', 'Nốt 7', 'Nốt 8', 'Nốt 9', 'Nốt 10', 'Nốt 11', 'Nốt 12'] },
    answer: 8,
    hints: ['Đi từng bước: từ nốt trước tới nốt này, bản chép lại đi lên hay xuống? Neume cũ ở bước ấy thì sao?', 'Chỉ có một bước hai bên không khớp.'],
    explanation:
      'Từ nốt 8 (La4) tới nốt 9 (Đô5) bản chép lại đi lên, còn neume cũ ở bước ấy đi xuống; mọi bước khác hai bên khớp hướng. Giới hạn: neume không dòng kẻ chỉ ghi hướng, không ghi quãng — nên dữ liệu này cho biết có một chỗ đã đổi, không cho biết bản nào "đúng". (Dữ liệu trang và mảnh cạo là hư cấu của game.)',
    skills: ['theory', 'sources'],
    links: ['a:lich-su-ky-am', 'a:ky-am-binh-ca-gregorian'],
  },
  {
    id: 'pz:bt/loai-nguon',
    type: 'classify',
    difficulty: 2,
    title: 'Tập ghi chép về thầy Guido',
    instructions: 'Thầy quản thư gom các mẩu ghi chép về Guido. Xếp mỗi mẩu vào loại tư liệu của nó.',
    content: {
      ask: 'Mỗi mẩu thuộc loại nào?',
      items: [
        { id: 'micrologus', text: 'Guido tự mô tả lối học sáu âm trong Micrologus và trong bức thư Epistola de ignoto cantu (1025 hoặc 1026).' },
        { id: 'sigebert', text: 'Khoảng 1105 – 1110, Sigebert xứ Gembloux viết rằng Guido dạy bằng các khớp ngón tay.' },
        { id: 'loi-ca-truong', text: '"Chính tay Guido vẽ cả bàn tay" — lời truyền miệng của một ca trưởng.' },
        { id: 'ban-tay-the-ky-12', text: 'Hình bàn tay đầy đủ, chép trong sách từ thế kỷ 12.' },
      ],
      labels: [
        { id: 'primary', text: 'Nguồn sơ cấp' },
        { id: 'secondary', text: 'Nguồn thứ cấp' },
        { id: 'anecdote', text: 'Giai thoại' },
        { id: 'artifact', text: 'Hiện vật' },
      ],
    },
    // = the `kind` of the arc's evidence cards ev:bt/<id> (checked by a test): the data decides, not this file
    answer: { micrologus: 'primary', sigebert: 'secondary', 'loi-ca-truong': 'anecdote', 'ban-tay-the-ky-12': 'artifact' },
    hints: ['Ai viết, và viết khi nào so với Guido?', 'Một vật được chép ra cũng là tư liệu — nhưng là loại khác lời kể.'],
    explanation:
      'Văn bản của chính Guido là nguồn sơ cấp; Sigebert viết sau Guido gần một thế kỷ — nguồn thứ cấp; lời truyền miệng không có văn bản kèm là giai thoại; hình vẽ bàn tay trong sách là hiện vật, và chỉ có từ thế kỷ 12. Xếp loại không nói nguồn nào đúng: nó nói nên tin mỗi loại tới đâu.',
    skills: ['sources'],
    links: ['a:guido-d-arezzo', 'a:hexachord-va-ban-tay-guido'],
    sources: ['a:hexachord-va-ban-tay-guido', 'a:guido-d-arezzo'],
  },
]

export const BAN_THAO_ACADEMIC_EVIDENCE: EvidenceDef[] = [
  { id: 'ev:bt/so-huong', title: 'Hai bản chép, một chỗ rẽ', text: 'Bản chép lại giữ hướng đi của neume cũ ở mọi bước, trừ bước tới nốt thứ 9. (Tình tiết hư cấu.)', kind: 'fiction', reliability: 'Dữ liệu hư cấu của game; neume cũ chỉ ghi hướng, không ghi quãng.', verification: 'library' },
]

export const BAN_THAO_SEQUENCES: SequenceDef[] = [
  {
    id: 'seq:bt/so-ban-chep',
    title: 'Bàn so bản chép',
    basis: 'fiction',
    note: 'Trang chép lại và mảnh neume cạo ra là vật trong truyện. Bản thu Ut queant laxis là bản thu thật (phạm vi công cộng).',
    when: { item: 'item:bt/manh-cu' },
    steps: [
      {
        id: 'ac:bt/nghe-ca-vien',
        kind: 'listening',
        title: 'Nghe ca viên tập hát',
        aim: 'Nghe ra đầu mỗi nửa câu cao dần lên một bậc.',
        context: 'Thầy Rinaldo nói ca viên đọc lối mới nhanh hơn. Dưới sân, họ đang tập Ut queant laxis.',
        knowledge: ['a:hexachord-va-ban-tay-guido'],
        puzzle: 'pz:bt/nghe-ca-vien',
      },
      {
        id: 'ac:bt/khao-sat-trang',
        kind: 'score',
        title: 'Khảo sát trang chép lại',
        aim: 'Đọc từng nốt của dòng chép lại: tên nốt, độ dài, vị trí.',
        context: 'Mảnh cạo ra và trang chép lại nằm cạnh nhau trên bàn.',
        knowledge: ['a:ky-am-binh-ca-gregorian'],
        music: 'mu:bt/trang-chep-lai',
        minNotes: 3,
      },
      {
        id: 'ac:bt/phan-tich-giai-dieu',
        kind: 'analysis',
        title: 'Phân tích giai điệu',
        aim: 'Biết dòng chép lại đi trong âm vực nào, đi bậc hay nhảy, đường nét ra sao.',
        context: 'Trước khi so với neume cũ, cần biết dòng mới đi thế nào.',
        knowledge: ['a:ky-am-binh-ca-gregorian', 'a:lich-su-ky-am'],
        music: 'mu:bt/trang-chep-lai',
        reasoning: { op: 'analyze', modules: ['melody.line'], why: 'Mô-đun giai điệu của UMRE tính dữ kiện (âm vực, quãng, đường nét, mẫu lặp) từ chính các nốt; ranh giới câu nó nêu là giả thuyết. Không dùng phân tích hoà âm: thánh ca một bè không có hợp âm để phân tích.' },
      },
      {
        id: 'ac:bt/so-huong',
        kind: 'puzzle',
        title: 'So với neume cũ',
        aim: 'Tìm chỗ hai bản chép không cùng hướng — và hiểu dữ liệu ấy cho biết được gì, không biết được gì.',
        context: 'Thầy quản thư nói trang chép hỏng; thầy Rinaldo nói chỉ chép lại theo lối mới.',
        music: 'mu:bt/trang-chep-lai',
        puzzle: 'pz:bt/so-huong',
        onDone: [{ evidence: 'ev:bt/so-huong' }, { xp: 20, skill: 'theory' }],
      },
    ],
  },
  {
    id: 'seq:bt/nguon-guido',
    title: 'Tập ghi chép về thầy Guido',
    basis: 'fact',
    note: 'Các mẩu ghi chép là chứng cứ có nguồn của tuyến (bài thư viện về Guido và hexachord).',
    when: { topic: 'guido', with: 'npc:bt/quan-thu' },
    steps: [
      {
        id: 'ac:bt/loai-nguon',
        kind: 'history',
        title: 'Xếp loại tư liệu',
        aim: 'Phân biệt nguồn sơ cấp, nguồn thứ cấp, giai thoại và hiện vật.',
        context: 'Thầy quản thư vừa kể về Guido; đây là những gì thư viện còn ghi lại về thầy.',
        knowledge: ['a:guido-d-arezzo', 'a:hexachord-va-ban-tay-guido'],
        puzzle: 'pz:bt/loai-nguon',
        onDone: [{ xp: 15, skill: 'sources' }],
      },
    ],
  },
]
