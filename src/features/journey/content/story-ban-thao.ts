import type { DocumentDef, NarrativeDef } from '../engine/narrative'

/**
 * "Ghi chú bên lề" — a story arc inside "Bản thảo thất lạc". FICTION (the game's own reconstruction): the page, the
 * scraping, the margin note and both monks' accounts are invented to practise weighing two testimonies. The one
 * historical fact it touches — neumes placed on lines with a letter clef, in Italy around 1000 — is the arc's sourced
 * evidence ev:bt/neume-dong-ke (library article a:lich-su-ky-am), referenced, not restated as new.
 *
 * Flow: the open book on the lectern (setup) → looking it over finds a scraped patch and a margin note (discovery,
 * hypotheses) → the librarian's account (mention) → the player decides: believe it, or ask Rinaldo (decision) →
 * Rinaldo's different account and the scraped fragment (contradiction, the margin note settled) → told back to the
 * librarian, or left closed (outcome). State lives in the save: flags bt:tin-quan-thu / bt:dieu-tra, topics, the
 * quest q:bt/ghi-chu, the item and the evidence.
 */
export const BAN_THAO_DOCUMENTS: DocumentDef[] = [
  {
    id: 'doc:bt/sach-ca',
    title: 'Trang sách ca đang mở trên bục đọc',
    kind: 'Sách ca — trang trong truyện',
    basis: 'fiction',
    note: 'Trang sách là vật trong truyện. Riêng lối ghi neume trên dòng kẻ, chữ cái làm khoá là có thật — xem nguồn ở chi tiết "Dòng kẻ và chữ khoá".',
    art: 'gradual',
    spots: [
      {
        id: 'dong-ke',
        label: 'Dòng kẻ và chữ khoá',
        x: 12, y: 14, w: 76, h: 16,
        text: 'Neume nằm trên các dòng kẻ, đầu dòng có chữ cái làm khoá: nhìn trang giấy là biết mỗi nốt cao bao nhiêu.',
        basis: 'fact',
        refs: ['ev:bt/neume-dong-ke', 'a:lich-su-ky-am'],
      },
      {
        id: 'cao',
        label: 'Chỗ giấy da bị cạo',
        x: 18, y: 44, w: 52, h: 18,
        text: 'Một khoảng giấy da mỏng và nhám hơn hẳn. Dưới nét neume mới còn lờ mờ vết neume cũ — không có dòng kẻ.',
        basis: 'fiction',
      },
      {
        id: 'le',
        label: 'Ghi chú bên lề',
        x: 74, y: 42, w: 22, h: 24,
        text: 'Bên lề, mực đỏ, nét chữ nhỏ: «R. — chép lại theo lối mới». Chữ R. là của ai?',
        basis: 'fiction',
        when: { flag: 'seen:doc:bt/sach-ca/cao' },
      },
    ],
  },
]

export const BAN_THAO_STORY: NarrativeDef = {
  id: 'n:bt/ghi-chu',
  title: 'Ghi chú bên lề',
  premise: 'Trên bục đọc của thư viện, một trang sách ca vừa được chép lại. Ai đã cạo trang cũ, và vì sao?',
  basis: 'fiction',
  acts: [
    {
      id: 'setup',
      title: 'Cuốn sách trên bục đọc',
      beats: [
        {
          id: 'bt:sach-mo',
          kind: 'setup',
          trigger: { on: 'state' },
          when: { met: 'npc:bt/quan-thu' },
          show: { style: 'thought', text: 'Trên bục đọc có một cuốn sách ca đang mở. Trang này mực còn mới.' },
          journal: { text: 'Trên bục đọc của thư viện có một cuốn sách ca, một trang vừa được chép lại.', knowing: 'known', basis: 'fiction' },
        },
      ],
    },
    {
      id: 'development',
      title: 'Trang bị cạo',
      beats: [
        {
          id: 'bt:dong-ke',
          kind: 'discovery',
          trigger: { on: 'look', doc: 'doc:bt/sach-ca', spot: 'dong-ke' },
          journal: { text: 'Trang sách ca dùng lối ghi neume trên dòng kẻ, chữ cái làm khoá — lối ghi có thật ở Ý quanh năm 1000.', knowing: 'known', basis: 'fact', refs: ['ev:bt/neume-dong-ke'] },
        },
        {
          id: 'bt:cao',
          kind: 'discovery',
          trigger: { on: 'look', doc: 'doc:bt/sach-ca', spot: 'cao' },
          effects: [{ startQuest: 'q:bt/ghi-chu' }],
          show: { style: 'thought', text: 'Có người đã cạo trang này rồi chép đè lên.' },
          journal: { text: 'Trang sách ca bị cạo lối ghi cũ để chép lại trên dòng kẻ. Ai làm, và vì sao?', knowing: 'hypothesis', basis: 'fiction' },
        },
        {
          id: 'bt:chu-r',
          kind: 'discovery',
          trigger: { on: 'look', doc: 'doc:bt/sach-ca', spot: 'le' },
          after: ['bt:cao'],
          show: { style: 'thought', text: 'R.… Thầy Rinaldo?' },
          journal: { text: 'Chữ R. bên lề — có thể là thầy Rinaldo.', knowing: 'hypothesis', basis: 'fiction' },
        },
        {
          id: 'bt:loi-quan-thu',
          kind: 'mention',
          trigger: { on: 'state' },
          when: { topic: 'ghi-chu', with: 'npc:bt/quan-thu' },
          journal: { text: 'Thầy quản thư: trang ấy chép hỏng từ đời trước, nên thầy bảo thầy Rinaldo cạo đi chép lại.', knowing: 'known', basis: 'fiction' },
        },
      ],
    },
    {
      id: 'climax',
      title: 'Hai lời kể',
      beats: [
        {
          id: 'bt:chon-tin',
          kind: 'decision',
          trigger: { on: 'state' },
          when: { flag: 'bt:tin-quan-thu' },
          journal: { text: 'Quyết định: bạn tin lời thầy quản thư và không hỏi thêm.', knowing: 'known', basis: 'fiction' },
        },
        {
          id: 'bt:chon-dieu-tra',
          kind: 'decision',
          trigger: { on: 'state' },
          when: { flag: 'bt:dieu-tra' },
          journal: { text: 'Quyết định: bạn muốn nghe thầy Rinaldo trước khi tin.', knowing: 'known', basis: 'fiction' },
        },
        {
          id: 'bt:loi-rinaldo',
          kind: 'contradiction',
          trigger: { on: 'state' },
          when: { evidence: 'ev:bt/hai-loi-ke' },
          show: { style: 'thought', text: 'Hai lời kể không khớp nhau.' },
          journal: { text: 'Chữ R. là của thầy Rinaldo: chính thầy nhận đã cạo và chép lại trang — không vì chép hỏng, mà vì ca viên đọc lối mới nhanh hơn.', knowing: 'confirmed', basis: 'fiction', settles: 'bt:chu-r' },
        },
        {
          id: 'bt:hai-loi',
          kind: 'contradiction',
          trigger: { on: 'state' },
          after: ['bt:loi-rinaldo'],
          journal: { text: 'Một trang, hai lời kể: chép hỏng (thầy quản thư) hay chép lại theo lối mới (thầy Rinaldo)? Trang sách không tự trả lời; cả hai được ghi lại.', knowing: 'hypothesis', basis: 'fiction' },
        },
        {
          id: 'bt:so-huong',
          kind: 'reveal',
          trigger: { on: 'state' },
          when: { evidence: 'ev:bt/so-huong' },
          show: { style: 'thought', text: 'Chép lại theo lối mới — nhưng có một chỗ đã được sửa.' },
          journal: { text: 'So với vết neume cũ, bản chép lại giữ hướng đi ở mọi bước trừ bước tới nốt thứ 9. Neume cũ không ghi quãng, nên chỉ biết có một chỗ đổi — không biết bản nào đúng.', knowing: 'confirmed', basis: 'fiction' },
        },
        {
          id: 'bt:ca-hai',
          kind: 'turn',
          trigger: { on: 'state' },
          after: ['bt:so-huong', 'bt:hai-loi'],
          journal: { text: 'Có thể cả hai lời kể cùng đúng một phần: trang được chép lại theo lối mới (thầy Rinaldo), và một chỗ được sửa (điều thầy quản thư gọi là chép hỏng).', knowing: 'hypothesis', basis: 'fiction' },
        },
      ],
    },
    {
      id: 'resolution',
      title: 'Khép lại',
      beats: [
        {
          id: 'bt:khep',
          kind: 'outcome',
          trigger: { on: 'state' },
          when: { all: [{ quest: 'q:bt/ghi-chu', is: 'done' }, { flag: 'bt:tin-quan-thu' }] },
          journal: { text: 'Chuyện trang sách ca khép lại theo lời thầy quản thư. Chữ R. bên lề không ai giải thích.', knowing: 'known', basis: 'fiction' },
        },
        {
          id: 'bt:doi-chieu',
          kind: 'outcome',
          trigger: { on: 'state' },
          when: { all: [{ quest: 'q:bt/ghi-chu', is: 'done' }, { flag: 'bt:dieu-tra' }] },
          show: { style: 'narration', text: 'Bạn ghi cả hai lời kể vào sổ, cạnh nhau.' },
          journal: { text: 'Bạn kể lại cả hai lời với thầy quản thư. Thầy nhận rằng một trang có thể bị cạo vì nhiều lẽ; sổ của bạn giữ cả hai.', knowing: 'known', basis: 'fiction' },
        },
      ],
    },
  ],
}
