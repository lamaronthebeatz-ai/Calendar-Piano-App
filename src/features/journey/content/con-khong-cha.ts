import type { ArcDef } from '../engine/types'

/**
 * Hành trình Việt Nam, Chương II — "Đứa con không cha": cải lương ra đời năm nào? Sự kiện lấy từ cai-luong (năm mốc
 * theo Trần Nhật Vy, vọng cổ nhịp 2 → 32, chữ của Vương Hồng Sển), hoi-trong-nhac-tai-tu-cai-luong (điệu, hơi, tính
 * chất theo Trần Văn Khê) và don-ca-tai-tu. Cô đào Ba Liên và anh nhà báo Tám Huệ là nhân vật hư cấu.
 */
const MY_THO = { lat: 10.36, lon: 106.36 }
const BAC_LIEU = { lat: 9.29, lon: 105.72 }
const SAI_GON = { lat: 10.78, lon: 106.7 }

export const conKhongCha: ArcDef = {
  id: 'con-khong-cha',
  chapter: 'vn-nguyen',
  title: 'Đứa con không cha',
  year: '1918 – 2018',
  intro: 'Mỹ Tho, năm 1918. Một gánh hát diễn Kim Vân Kiều, và một trăm năm sau người ta làm lễ kỷ niệm "100 năm cải lương". Nhưng một nhà nghiên cứu bảo mốc ấy thiếu cơ sở, và một người khác gọi cải lương là "đứa con không cha". Vậy nó ra đời khi nào?',
  opens: { quest: 'q:vn-nguyen/vn-bac-lieu', is: 'done' },
  main: 'q:cl/con-khong-cha',
  music: 'vn-bac-lieu',
  period: 'a:am-nhac-thoi-nguyen',

  locations: [
    {
      id: 'loc:cl/rap',
      name: 'Rạp thầy Năm Tú, Mỹ Tho',
      ...MY_THO,
      year: '1918',
      bg: 'vn-tai-tu',
      present: [{ npc: 'npc:cl/ba-lien', dialogue: 'dlg:cl/ba-lien' }],
      objects: [
        { id: 'chuong-trinh', label: 'Tờ quảng cáo dán trước rạp', when: { all: [{ quest: 'q:cl/con-khong-cha', is: 'active' }, { not: { item: 'item:cl/to-quang-cao' } }] }, effects: [{ give: 'item:cl/to-quang-cao' }, { evidence: 'ev:cl/to-quang-cao' }, { discover: 'a:cai-luong' }] },
        { id: 'dieu-hoi', label: 'Bảng điệu và hơi của thầy đờn', when: { topic: 'hoi', with: 'npc:cl/ba-lien' }, puzzle: 'pz:cl/dieu-hoi' },
        { id: 'tinh-chat', label: 'Nghe thầy rao từng hơi', when: { solved: 'pz:cl/dieu-hoi' }, effects: [{ startQuest: 'q:cl/sac-thai' }], puzzle: 'pz:cl/tinh-chat' },
      ],
    },
    {
      id: 'loc:cl/bac-lieu',
      name: 'Bạc Liêu',
      ...BAC_LIEU,
      year: 'khoảng 1918 – 1940',
      bg: 'vn-song-nuoc',
      hidden: true,
      present: [{ npc: 'npc:cl/cao-van-lau', dialogue: 'dlg:cl/cao-van-lau' }],
      objects: [{ id: 'nhip', label: 'Bài vọng cổ dài ra qua từng thế hệ', when: { met: 'npc:cl/cao-van-lau' }, puzzle: 'pz:cl/nhip' }],
    },
    {
      id: 'loc:cl/hoi-thao',
      name: 'Hội thảo "100 năm cải lương", Sài Gòn',
      ...SAI_GON,
      year: '2018',
      bg: 'vn-sai-gon',
      hidden: true,
      present: [{ npc: 'npc:cl/tam-hue', dialogue: 'dlg:cl/tam-hue' }],
      objects: [
        { id: 'moc', label: 'Năm mốc trên tấm bảng', when: { met: 'npc:cl/tam-hue' }, puzzle: 'pz:cl/nam-moc' },
        { id: 'chung-cu', label: 'Phân loại chứng cứ', when: { all: [{ evidence: 'ev:cl/tran-nhat-vy' }, { evidence: 'ev:cl/vuong-hong-sen' }] }, puzzle: 'pz:cl/phan-loai' },
      ],
    },
    {
      id: 'loc:cl/phong-hop',
      name: 'Sau buổi diễn ở Mỹ Tho',
      ...MY_THO,
      year: '1918',
      bg: 'vn-tai-tu',
      focus: '70% 50%',
      hidden: true,
      present: [{ npc: 'npc:cl/ba-lien', dialogue: 'dlg:cl/ket-luan' }],
      objects: [
        { id: 'tranh-luan', label: 'Cuộc tranh luận: cải lương sinh năm nào?', when: { topic: 'ket-luan', with: 'npc:cl/ba-lien' }, effects: [{ startQuest: 'q:cl/tranh-luan' }], puzzle: 'pz:cl/tranh-luan' },
        { id: 'ban', label: 'Đặt chứng cứ lên bàn', when: { met: 'npc:cl/ba-lien' }, puzzle: 'pz:cl/ket-luan' },
      ],
    },
  ],

  characters: [
    { id: 'npc:cl/ba-lien', name: 'Cô đào Ba Liên', status: 'fictional', role: 'Đào hát của một gánh ở Mỹ Tho', sources: [] },
    // no biography of his own in the library yet: what is known of him is in the cải lương article
    { id: 'npc:cl/cao-van-lau', name: 'Cao Văn Lầu', status: 'historical', person: 'a:cai-luong', role: 'Nhạc sĩ ở Bạc Liêu, người viết Dạ cổ hoài lang', sources: ['a:cai-luong'] },
    { id: 'npc:cl/tam-hue', name: 'Anh nhà báo Tám Huệ', status: 'fictional', role: 'Phóng viên dự hội thảo, năm 2018', sources: [] },
  ],

  dialogues: [
    {
      id: 'dlg:cl/ba-lien',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Mỹ Tho, năm 1918. Trước rạp thầy Năm Tú, người ta chen nhau mua vé xem Kim Vân Kiều.', refs: ['a:cai-luong'], effects: [{ remember: 'gap', with: 'npc:cl/ba-lien' }], next: 'n1' },
        n1: { speaker: 'npc:cl/ba-lien', voice: 'fiction', text: '{ten} ơi, tối nay là đêm cải lương ra đời đó! Sau này người ta sẽ làm lễ kỷ niệm đêm nay cho coi.', effects: [{ evidence: 'ev:cl/loi-dao' }], next: 'n2' },
        n2: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Cải lương lớn lên từ đâu?', when: { not: { topic: 'goc', with: 'npc:cl/ba-lien' } }, next: 'n3' },
            { text: 'Mấy thầy đờn nói "hơi" là gì?', when: { not: { topic: 'hoi', with: 'npc:cl/ba-lien' } }, next: 'n4' },
            { text: 'Tôi sẽ đi tìm cho rõ', next: 'n5' },
          ],
        },
        n3: { speaker: 'narrator', voice: 'narration', text: 'Cải lương — "sửa đổi cho tốt hơn" — là sân khấu ca nhạc kịch của Nam Bộ, lớn lên từ đờn ca tài tử vào đầu thế kỷ 20.', refs: ['a:cai-luong', 'a:don-ca-tai-tu'], effects: [{ remember: 'goc', with: 'npc:cl/ba-lien' }], next: 'n2' },
        n4: { speaker: 'npc:cl/ba-lien', voice: 'reconstructed', text: 'Điệu Bắc có hơi Bắc, hơi Nhạc, hơi Quảng; điệu Nam có hơi Xuân, hơi Ai, hơi Đảo; còn hơi Oán thì có người xếp vào điệu Nam, có người tách riêng.', refs: ['a:hoi-trong-nhac-tai-tu-cai-luong'], effects: [{ remember: 'hoi', with: 'npc:cl/ba-lien' }, { discover: 'a:hoi-trong-nhac-tai-tu-cai-luong' }], next: 'n2' },
        n5: { speaker: 'npc:cl/ba-lien', voice: 'fiction', text: 'Tờ quảng cáo dán trước cửa kìa. Rồi xuống Bạc Liêu hỏi ông Sáu Lầu — bài của ổng ai cũng ca.', effects: [{ startQuest: 'q:cl/con-khong-cha' }], end: true },
      },
    },
    {
      id: 'dlg:cl/cao-van-lau',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Bạc Liêu. Ông Cao Văn Lầu — Sáu Lầu — viết Dạ cổ hoài lang ở đây, khoảng năm 1918 – 1919.', refs: ['a:cai-luong'], effects: [{ remember: 'gap', with: 'npc:cl/cao-van-lau' }], next: 'n1' },
        n1: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Bài của ông dài bao nhiêu câu?', when: { not: { topic: 'cau', with: 'npc:cl/cao-van-lau' } }, next: 'n2' },
            { text: 'Ông có biết cải lương ra đời năm nào không?', when: { not: { topic: 'nam', with: 'npc:cl/cao-van-lau' } }, next: 'n3' },
            { text: 'Cảm ơn ông', next: 'n4' },
          ],
        },
        n2: { speaker: 'npc:cl/cao-van-lau', voice: 'reconstructed', text: 'Hai mươi câu, nhịp hai. Ban đầu tôi đặt tên là Hoài lang.', refs: ['a:cai-luong'], effects: [{ remember: 'cau', with: 'npc:cl/cao-van-lau' }], next: 'n1' },
        n3: { speaker: 'narrator', voice: 'narration', text: '(Lời người biên soạn.) Phải hơn ba năm sau mới có vở cải lương đầu tiên dùng vọng cổ — năm 1922, theo bảng mốc của Trần Nhật Vy. Bài của Sáu Lầu và sân khấu cải lương lớn lên song song.', refs: ['a:cai-luong'], effects: [{ remember: 'nam', with: 'npc:cl/cao-van-lau' }, { evidence: 'ev:cl/vong-co-1922' }], next: 'n1' },
        n4: { speaker: 'npc:cl/cao-van-lau', voice: 'fiction', text: 'Bài hát của tôi rồi sẽ dài ra theo người ca. Ngài cứ đếm thử.', end: true },
      },
    },
    {
      id: 'dlg:cl/tam-hue',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Sài Gòn, năm 2018. Hội thảo "100 năm cải lương" lấy mốc 1918 – 2018.', refs: ['a:cai-luong'], effects: [{ remember: 'gap', with: 'npc:cl/tam-hue' }], next: 'n1' },
        n1: { speaker: 'npc:cl/tam-hue', voice: 'fiction', text: 'Tôi viết bài về hội thảo mà càng đọc càng rối. Ngài muốn biết gì?', next: 'n2' },
        n2: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Có bao nhiêu mốc được đề xuất?', when: { not: { evidence: 'ev:cl/nam-moc' } }, next: 'n3' },
            { text: 'Nhà nghiên cứu nghĩ sao về mốc 1918?', when: { not: { evidence: 'ev:cl/tran-nhat-vy' } }, next: 'n4' },
            { text: 'Ai gọi cải lương là "đứa con không cha"?', when: { not: { evidence: 'ev:cl/vuong-hong-sen' } }, next: 'n5' },
            { text: 'Tôi sẽ xếp lại các mốc', next: 'n6' },
          ],
        },
        n3: { speaker: 'npc:cl/tam-hue', voice: 'reconstructed', text: 'Theo bài của Trần Nhật Vy, ít nhất năm mốc: 1917, 1918, 1919, 1920 và 1922 — mỗi mốc ứng với một thứ khác nhau.', refs: ['a:cai-luong'], effects: [{ evidence: 'ev:cl/nam-moc' }], next: 'n2' },
        n4: { speaker: 'npc:cl/tam-hue', voice: 'reconstructed', text: 'Ông Trần Nhật Vy cho rằng mốc 1918 thiếu cơ sở lịch sử.', refs: ['a:cai-luong'], effects: [{ evidence: 'ev:cl/tran-nhat-vy' }], next: 'n2' },
        n5: { speaker: 'npc:cl/tam-hue', voice: 'reconstructed', text: 'Cụ Vương Hồng Sển.', refs: ['a:cai-luong'], effects: [{ evidence: 'ev:cl/vuong-hong-sen' }], next: 'n2' },
        n6: { speaker: 'narrator', voice: 'narration', text: 'Năm năm, năm sự kiện, năm cách hiểu chữ "ra đời".', end: true },
      },
    },
    {
      id: 'dlg:cl/ket-luan',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Trở lại Mỹ Tho năm 1918. Buổi diễn vừa tan.', effects: [{ remember: 'ket-luan', with: 'npc:cl/ba-lien' }], next: 'n1' },
        n1: { speaker: 'npc:cl/ba-lien', voice: 'fiction', text: 'Vậy đêm nay có phải đêm cải lương ra đời không? Ngài bày chứng cứ ra coi.', end: true },
      },
    },
  ],

  quests: [
    {
      id: 'q:cl/con-khong-cha',
      chapter: 'vn-nguyen',
      title: 'Đứa con không cha',
      summary: 'Cải lương ra đời năm nào? Từ rạp hát Mỹ Tho năm 1918 tới hội thảo "100 năm" năm 2018.',
      kind: 'main',
      stages: [
        { id: 'rap', text: 'Ở rạp Mỹ Tho: đọc tờ quảng cáo, xếp điệu và hơi của nhạc tài tử.', objectives: [{ talk: 'npc:cl/ba-lien' }, { collect: 'item:cl/to-quang-cao' }, { solve: 'pz:cl/dieu-hoi' }], onDone: [{ unlock: 'loc:cl/bac-lieu' }, { xp: 20, skill: 'theory' }] },
        { id: 'bac-lieu', text: 'Ở Bạc Liêu: hỏi Cao Văn Lầu, xếp các bước vọng cổ dài ra.', objectives: [{ talk: 'npc:cl/cao-van-lau' }, { solve: 'pz:cl/nhip' }], onDone: [{ unlock: 'loc:cl/hoi-thao' }, { xp: 30, skill: 'history' }] },
        { id: 'hoi-thao', text: 'Năm 2018: tìm các mốc được đề xuất và người nghi ngờ mốc 1918, phân loại chứng cứ.', objectives: [{ talk: 'npc:cl/tam-hue' }, { solve: 'pz:cl/nam-moc' }, { solve: 'pz:cl/phan-loai' }], onDone: [{ unlock: 'loc:cl/phong-hop' }, { xp: 30, skill: 'sources' }] },
        { id: 'ket-luan', text: 'Trở lại Mỹ Tho: đặt chứng cứ lên bàn.', objectives: [{ solve: 'pz:cl/ket-luan' }], onDone: [{ xp: 50, skill: 'research' }] },
      ],
      rewards: [{ xp: 40, skill: 'history' }],
      links: ['a:cai-luong'],
    },
    {
      id: 'q:cl/sac-thai',
      chapter: 'vn-nguyen',
      title: 'Sắc thái của từng hơi',
      summary: 'Theo Trần Văn Khê, tiếng rao mở đầu mỗi hơi mang một tính chất. Ghép cho đúng.',
      kind: 'side',
      stages: [{ id: 'ghep', text: 'Ghép hơi với tính chất.', objectives: [{ solve: 'pz:cl/tinh-chat' }] }],
      rewards: [{ xp: 30, skill: 'aural' }],
      links: ['a:hoi-trong-nhac-tai-tu-cai-luong'],
    },
    {
      id: 'q:cl/tranh-luan',
      chapter: 'vn-nguyen',
      title: 'Ba lời sau buổi diễn',
      summary: 'Ba người, ba ý. Đáp lại bằng chứng cứ.',
      kind: 'academic',
      stages: [{ id: 'tranh-luan', text: 'Đáp lại từng lượt.', objectives: [{ solve: 'pz:cl/tranh-luan' }] }],
      rewards: [{ xp: 30, skill: 'research' }],
      links: ['a:cai-luong'],
    },
  ],

  puzzles: [
    {
      id: 'pz:cl/dieu-hoi',
      type: 'classify',
      difficulty: 2,
      title: 'Điệu và hơi',
      instructions: 'Mỗi hơi thuộc điệu nào? (Hơi Oán: có người xếp vào điệu Nam, có người tách riêng — ở đây xếp riêng.)',
      content: {
        ask: 'Xếp từng hơi vào điệu.',
        items: [
          { id: 'bac', text: 'Hơi Bắc' },
          { id: 'nhac', text: 'Hơi Nhạc' },
          { id: 'xuan', text: 'Hơi Xuân' },
          { id: 'ai', text: 'Hơi Ai' },
          { id: 'quang', text: 'Hơi Quảng' },
          { id: 'oan', text: 'Hơi Oán' },
        ],
        labels: [
          { id: 'dieu-bac', text: 'Điệu Bắc' },
          { id: 'dieu-nam', text: 'Điệu Nam' },
          { id: 'rieng', text: 'Oán (xếp riêng)' },
        ],
      },
      answer: { bac: 'dieu-bac', nhac: 'dieu-bac', quang: 'dieu-bac', xuan: 'dieu-nam', ai: 'dieu-nam', oan: 'rieng' },
      hints: ['Điệu Bắc: Bắc, Nhạc, Quảng. Điệu Nam: Xuân, Ai, Đảo.'],
      explanation: 'Điệu Bắc gồm hơi Bắc, Nhạc, Quảng; điệu Nam gồm Xuân, Ai, Đảo. Hơi Oán là chỗ các tác giả không thống nhất — Dạ cổ hoài lang của Cao Văn Lầu viết ở hơi Oán.',
      skills: ['theory'],
      links: ['a:hoi-trong-nhac-tai-tu-cai-luong'],
    },
    {
      id: 'pz:cl/tinh-chat',
      type: 'match',
      difficulty: 2,
      title: 'Nghe thầy rao từng hơi',
      instructions: 'Theo Trần Văn Khê, tiếng rao mở đầu mỗi hơi mang một tính chất. Ghép cho đúng.',
      content: {
        ask: 'Ghép hơi với tính chất.',
        left: [
          { id: 'bac', text: 'Hơi Bắc' },
          { id: 'nhac', text: 'Hơi Nhạc' },
          { id: 'xuan', text: 'Hơi Xuân' },
          { id: 'ai', text: 'Hơi Ai' },
        ],
        right: [
          { id: 'vui', text: 'Vui tươi' },
          { id: 'nghiem', text: 'Trang nghiêm' },
          { id: 'em', text: 'Êm ả' },
          { id: 'buon', text: 'Buồn dịu' },
        ],
      },
      answer: { bac: 'vui', nhac: 'nghiem', xuan: 'em', ai: 'buon' },
      hints: ['Đọc bảng "Điệu và hơi", cột tính chất.'],
      explanation: 'Bắc vui tươi, Nhạc trang nghiêm, Xuân êm ả, Ai buồn dịu; còn Oán thì nỗi buồn "thể hiện rõ nét". Các hơi phân biệt nhau chủ yếu bằng cách rung, nhấn, vuốt, mổ — không chỉ bằng các nốt.',
      skills: ['aural', 'theory'],
      links: ['a:hoi-trong-nhac-tai-tu-cai-luong'],
    },
    {
      id: 'pz:cl/nhip',
      type: 'order',
      difficulty: 3,
      title: 'Bài vọng cổ dài ra qua từng thế hệ',
      instructions: 'Mỗi lần, mỗi câu được giãn ra gấp đôi. Xếp các bước từ sớm đến muộn.',
      content: {
        ask: 'Từ sớm đến muộn.',
        items: [
          { id: '16', text: 'Nhịp 16 — Trần Tấn Trung (Mộng Vân)' },
          { id: '2', text: 'Nhịp 2 — Cao Văn Lầu, 20 câu' },
          { id: '32', text: 'Nhịp 32 — Năm Nhỏ, bài rút còn 6 câu' },
          { id: '8', text: 'Nhịp 8 — Năm Nghĩa' },
          { id: '4', text: 'Nhịp 4 — Trịnh Thiên Tư hoặc Tư Chơi' },
        ],
      },
      answer: ['2', '4', '8', '16', '32'],
      hints: ['k. 1918 – 1919, k. 1927, 1934, 1936 – 1939, k. 1940.'],
      explanation: 'Nhịp 2 (k. 1918 – 1919) → nhịp 4 (k. 1927) → nhịp 8 (1934) → nhịp 16 (1936 – 1939) → nhịp 32 (k. 1940). Tên người và năm khác nhau giữa các nguồn; "nhịp 64" thì chưa nguồn nào xác nhận.',
      skills: ['history', 'theory'],
      links: ['a:cai-luong'],
    },
    {
      id: 'pz:cl/nam-moc',
      type: 'match',
      difficulty: 3,
      title: 'Năm mốc, năm sự kiện',
      instructions: 'Mỗi năm được đề xuất ứng với một sự kiện khác. Ghép cho đúng.',
      content: {
        ask: 'Ghép năm với sự kiện được chọn làm mốc.',
        left: [
          { id: '1917', text: '1917' },
          { id: '1918', text: '1918' },
          { id: '1919', text: '1919' },
          { id: '1922', text: '1922' },
        ],
        right: [
          { id: 'sa-dec', text: 'Vì nghĩa quên nhà của Cải lương kịch xã, Sa Đéc' },
          { id: 'kieu', text: 'Kim Vân Kiều của Trương Duy Toản ở rạp thầy Năm Tú, Mỹ Tho' },
          { id: 'ganh', text: 'Gánh hát đầu tiên — gánh thầy Năm Thận' },
          { id: 'vong-co', text: 'Vở đầu tiên có vọng cổ' },
        ],
      },
      answer: { 1917: 'sa-dec', 1918: 'kieu', 1919: 'ganh', 1922: 'vong-co' },
      hints: ['Đọc bảng "Năm ra đời: một cuộc tranh luận thật".'],
      explanation: '1917: Vì nghĩa quên nhà (Sa Đéc); 1918: Kim Vân Kiều (Mỹ Tho); 1919: gánh thầy Năm Thận; 1920: tên "cải lương" hoặc gánh Tân Thinh; 1922: vở đầu tiên có vọng cổ. Mỗi mốc trả lời một câu hỏi khác: vở đầu, gánh đầu, cái tên, hay bài hát đặc trưng.',
      skills: ['history', 'sources'],
      links: ['a:cai-luong'],
    },
    {
      id: 'pz:cl/phan-loai',
      type: 'classify',
      difficulty: 3,
      title: 'Phân loại chứng cứ',
      instructions: 'Mỗi điều thuộc loại nào?',
      content: {
        ask: 'Xếp từng điều theo loại.',
        items: [
          { id: 'hoi-thao', text: 'Hội thảo "100 năm cải lương" lấy mốc 1918 – 2018' },
          { id: 'tran-nhat-vy', text: 'Trần Nhật Vy: mốc 1918 thiếu cơ sở lịch sử' },
          { id: 'ba-lien', text: 'Cô đào: "đêm nay là đêm cải lương ra đời"' },
          { id: 'vong-co', text: 'Vở đầu tiên có vọng cổ: 1922' },
        ],
        labels: [
          { id: 'quy-uoc', text: 'Quy ước để kỷ niệm' },
          { id: 'nhan-dinh', text: 'Nhận định của nhà nghiên cứu' },
          { id: 'su-kien', text: 'Một sự kiện có niên đại' },
          { id: 'hu-cau', text: 'Lời nhân vật trong truyện' },
        ],
      },
      answer: { 'hoi-thao': 'quy-uoc', 'tran-nhat-vy': 'nhan-dinh', 'ba-lien': 'hu-cau', 'vong-co': 'su-kien' },
      hints: ['Một ngày kỷ niệm có phải là một bằng chứng không?'],
      explanation: 'Lễ kỷ niệm là một quy ước, không chứng minh gì. Ý kiến của Trần Nhật Vy là nhận định của nhà nghiên cứu. Năm 1922 là niên đại của một sự kiện cụ thể. Lời cô đào là lời trong truyện.',
      skills: ['sources'],
      links: ['a:cai-luong', 'a:phuong-phap-su-hoc-am-nhac'],
    },
    {
      id: 'pz:cl/tranh-luan',
      type: 'debate',
      difficulty: 3,
      title: 'Ba lời sau buổi diễn',
      instructions: 'Chọn câu đáp có căn cứ cho từng lượt — đồng ý cũng là một câu đáp, nếu điều họ nói đứng được.',
      content: {
        topic: 'Năm ra đời của cải lương',
        turns: [
          {
            id: 't1',
            speaker: 'Cô đào Ba Liên',
            text: 'Người ta đã làm lễ kỷ niệm 100 năm, vậy 1918 chắc chắn là năm cải lương ra đời.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'quy-uoc', text: 'Kỷ niệm là một quy ước; có ít nhất năm mốc được đề xuất, và Trần Nhật Vy cho rằng mốc 1918 thiếu cơ sở.' },
              { id: 'my-tho', text: 'Không, vì Mỹ Tho quá nhỏ.' },
            ],
          },
          {
            id: 't2',
            speaker: 'Một khán giả',
            text: 'Cải lương có vọng cổ ngay từ đêm đầu tiên.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: '1922', text: 'Dạ cổ hoài lang chỉ mới viết khoảng 1918 – 1919; vở đầu tiên có vọng cổ là năm 1922.' },
              { id: 'khong-hay', text: 'Không, vì vọng cổ không hay.' },
            ],
          },
          {
            id: 't3',
            speaker: 'Anh nhà báo Tám Huệ',
            text: 'Không ai biết năm nào, vậy cải lương chẳng có gốc gác gì.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'tai-tu', text: 'Không biết đúng một năm không có nghĩa là không có gốc: cải lương lớn lên từ đờn ca tài tử, đầu thế kỷ 20.' },
              { id: 'sen', text: 'Đúng, cụ Vương Hồng Sển đã gọi nó là đứa con không cha.' },
            ],
          },
        ],
      },
      answer: { t1: 'quy-uoc', t2: '1922', t3: 'tai-tu' },
      hints: ['Một chữ "ra đời" có thể hiểu theo nhiều cách: vở đầu, gánh đầu, tên gọi, bài hát đặc trưng.'],
      feedback: [
        { key: 't1:dong-y', text: 'Một lễ kỷ niệm không biến một mốc quy ước thành sự kiện đã được chứng minh.' },
        { key: 't1:my-tho', text: 'Quy mô thành phố không liên quan tới câu hỏi niên đại.' },
        { key: 't2:dong-y', text: 'Bảng mốc ghi vở đầu tiên có vọng cổ là năm 1922.' },
        { key: 't2:khong-hay', text: 'Thích hay không không trả lời được câu hỏi khi nào.' },
        { key: 't3:dong-y', text: 'Quá tay: gốc từ đờn ca tài tử thì các nguồn đều ghi.' },
        { key: 't3:sen', text: 'Chữ "đứa con không cha" nói về việc không có một người hay một ngày khai sinh, không phải không có gốc.' },
      ],
      explanation: 'Năm 1918 là mốc quy ước được dùng nhiều nhất, nhưng có ít nhất năm mốc khác nhau tuỳ cách hiểu chữ "ra đời"; vọng cổ chỉ lên sân khấu năm 1922; và cải lương có gốc rõ ràng — đờn ca tài tử.',
      skills: ['research', 'sources'],
      links: ['a:cai-luong'],
    },
    {
      id: 'pz:cl/ket-luan',
      type: 'investigation',
      difficulty: 4,
      title: 'Cải lương sinh năm nào?',
      instructions: 'Chọn một kết luận và đặt lên bàn ít nhất hai chứng cứ đỡ nó. Chứng cứ yếu đặt làm chỗ dựa sẽ bị bác.',
      content: {
        question: 'Có thể nói "cải lương ra đời năm 1918" như một sự kiện đã được chứng minh không?',
        conclusions: [
          { id: 'co', text: 'Có — cả hội thảo 100 năm đã xác nhận.' },
          { id: 'nhieu-moc', text: 'Không: có ít nhất năm mốc từ 1917 đến 1922, mỗi mốc ứng với một cách hiểu chữ "ra đời"; 1918 là mốc quy ước thường dùng, bị nhà nghiên cứu cho là thiếu cơ sở.' },
          { id: 'khong-goc', text: 'Không ai biết gì về thời ấy; cải lương xuất hiện không từ đâu.' },
        ],
        evidence: ['ev:cl/nam-moc', 'ev:cl/tran-nhat-vy', 'ev:cl/vuong-hong-sen', 'ev:cl/vong-co-1922', 'ev:cl/loi-dao', 'ev:cl/to-quang-cao'],
        min: 2,
      },
      answer: { conclusion: 'nhieu-moc', support: ['ev:cl/nam-moc', 'ev:cl/tran-nhat-vy'], reject: ['ev:cl/loi-dao', 'ev:cl/to-quang-cao'] },
      explanation: 'Kết luận vững nhất: "năm ra đời" của cải lương là một câu hỏi còn tranh luận — ít nhất năm mốc từ 1917 đến 1922, tuỳ chọn vở đầu tiên, gánh đầu tiên, cái tên hay vọng cổ; mốc 1918 là quy ước, bị Trần Nhật Vy cho là thiếu cơ sở. Chữ "đứa con không cha" của Vương Hồng Sển nói đúng điều ấy.',
      hints: ['Kết luận nào dám nói "chưa thống nhất" ở chỗ các nguồn chưa thống nhất?', 'Lời cô đào và tờ quảng cáo là vật trong truyện.'],
      feedback: [
        { key: 'ket-luan:co', text: 'Một lễ kỷ niệm là quy ước, không phải bằng chứng; nhà nghiên cứu cho rằng mốc 1918 thiếu cơ sở.' },
        { key: 'ket-luan:khong-goc', text: 'Quá tay: các nguồn đều ghi cải lương lớn lên từ đờn ca tài tử.' },
        { key: 'yeu:ev:cl/loi-dao', text: 'Lời cô đào là điều cần kiểm, không làm chỗ dựa được.' },
        { key: 'yeu:ev:cl/to-quang-cao', text: 'Tờ quảng cáo là vật trong truyện.' },
        { key: 'thieu', text: 'Đúng hướng, nhưng cần cả danh sách các mốc lẫn nhận định về mốc 1918.' },
      ],
      skills: ['research', 'sources'],
      links: ['a:cai-luong'],
      sources: ['a:cai-luong'],
    },
  ],

  evidence: [
    { id: 'ev:cl/to-quang-cao', title: 'Tờ quảng cáo trước rạp', text: 'Quảng cáo vở Kim Vân Kiều ở rạp thầy Năm Tú. Vật trong truyện.', kind: 'fiction', reliability: 'Tình tiết hư cấu của game.', verification: 'library' },
    { id: 'ev:cl/loi-dao', title: 'Lời cô đào', text: '"Đêm nay là đêm cải lương ra đời." Lời nhân vật trong truyện, lặp lại một niềm tin phổ biến.', kind: 'anecdote', source: 'a:cai-luong', reliability: 'Bài thư viện cho thấy mốc 1918 còn bị tranh luận.', verification: 'library' },
    { id: 'ev:cl/nam-moc', title: 'Năm mốc được đề xuất', text: '1917 (Vì nghĩa quên nhà, Sa Đéc), 1918 (Kim Vân Kiều, Mỹ Tho), 1919 (gánh Năm Thận), 1920 (tên "cải lương" hoặc gánh Tân Thinh), 1922 (vở đầu có vọng cổ).', kind: 'secondary', source: 'a:cai-luong', reliability: 'Theo bài của Trần Nhật Vy, bài thư viện dẫn.', verification: 'library' },
    { id: 'ev:cl/tran-nhat-vy', title: 'Nhận định của Trần Nhật Vy', text: 'Mốc 1918 thiếu cơ sở lịch sử.', kind: 'interpretation', source: 'a:cai-luong', reliability: 'Ý kiến của một nhà nghiên cứu; hội thảo "100 năm" vẫn lấy mốc 1918.', verification: 'library' },
    { id: 'ev:cl/vuong-hong-sen', title: '"Đứa con không cha"', text: 'Vương Hồng Sển gọi cải lương là "đứa con không cha".', kind: 'interpretation', source: 'a:cai-luong', reliability: 'Một hình ảnh của nhà nghiên cứu, không phải dữ kiện.', verification: 'library' },
    { id: 'ev:cl/vong-co-1922', title: 'Vọng cổ lên sân khấu', text: 'Dạ cổ hoài lang viết k. 1918 – 1919; vở cải lương đầu tiên có vọng cổ: 1922.', kind: 'secondary', source: 'a:cai-luong', date: '1922', reliability: 'Bài thư viện, theo các nguồn ghi ở bài.', verification: 'library' },
  ],

  items: [{ id: 'item:cl/to-quang-cao', name: 'Tờ quảng cáo', kind: 'document', text: 'Kim Vân Kiều, rạp thầy Năm Tú, Mỹ Tho. (Vật trong truyện.)', links: ['a:cai-luong'] }],

  claims: [],
  completion: { quest: 'q:cl/con-khong-cha', is: 'done' },
}
