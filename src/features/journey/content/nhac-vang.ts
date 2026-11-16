import type { ArcDef } from '../engine/types'

/**
 * Hành trình Việt Nam, Chương V — "Một cái tên màu vàng": vì sao gọi là nhạc vàng? Sự kiện lấy từ nhac-vang-bolero
 * (các cách giải thích, Gibbs, nhiều tên gọi), tan-nhac-mien-nam-1954-1975, tan-nhac-mien-bac-1954-1975, nhac-trinh,
 * nhac-cach-mang và cac-thoi-ky-am-nhac-viet-nam. Bà chủ tiệm đĩa, anh biên tập đài và cô sinh viên là nhân vật hư cấu.
 */
const SAI_GON = { lat: 10.776, lon: 106.7 }
const HA_NOI = { lat: 21.03, lon: 105.85 }

export const nhacVang: ArcDef = {
  id: 'nhac-vang',
  chapter: 'vn-hai-mien',
  title: 'Một cái tên màu vàng',
  year: '1955 – nay',
  intro: 'Cùng một kho bài hát, người này gọi là nhạc vàng, người kia gọi là nhạc trước 1975, có người gọi là nhạc sến hay bolero. Mỗi cái tên mang một thái độ. Nhưng chữ "vàng" từ đâu ra? {ten} hỏi từ một tiệm đĩa ở Sài Gòn tới một đài phát thanh ở Hà Nội.',
  opens: { quest: 'q:vn-hai-mien/vn-phong-tra', is: 'done' },
  main: 'q:nv/nhac-vang',
  music: 'vn-phong-tra',
  period: 'a:am-nhac-viet-nam-1945-1975',

  locations: [
    {
      id: 'loc:nv/tiem-dia',
      name: 'Một tiệm đĩa ở Sài Gòn',
      ...SAI_GON,
      year: '1965',
      bg: 'vn-sai-gon',
      present: [{ npc: 'npc:nv/ba-chu', dialogue: 'dlg:nv/ba-chu' }],
      objects: [
        { id: 'bia-dia', label: 'Bìa đĩa đề chữ "nhạc vàng"', when: { all: [{ quest: 'q:nv/nhac-vang', is: 'active' }, { not: { item: 'item:nv/bia-dia' } }] }, effects: [{ give: 'item:nv/bia-dia' }, { evidence: 'ev:nv/bia-dia' }, { discover: 'a:nhac-vang-bolero' }] },
        { id: 'dong-nhac', label: 'Các dòng nhạc trên kệ', when: { item: 'item:nv/bia-dia' }, puzzle: 'pz:nv/dong-nhac' },
      ],
    },
    {
      id: 'loc:nv/dai',
      name: 'Một đài phát thanh ở Hà Nội',
      ...HA_NOI,
      year: '1965',
      bg: 'vn-nha-hat-lon',
      hidden: true,
      present: [{ npc: 'npc:nv/bien-tap', dialogue: 'dlg:nv/bien-tap' }],
      objects: [
        { id: 'dac-diem', label: 'Ba lối viết bài hát', when: { met: 'npc:nv/bien-tap' }, puzzle: 'pz:nv/dac-diem' },
        { id: 'moc', label: 'Số phận của một kho bài', when: { met: 'npc:nv/bien-tap' }, effects: [{ startQuest: 'q:nv/so-phan' }], puzzle: 'pz:nv/moc' },
      ],
    },
    {
      id: 'loc:nv/thu-vien',
      name: 'Một thư viện, ngày nay',
      ...SAI_GON,
      year: 'ngày nay',
      bg: 'vn-sai-gon',
      focus: '70% 50%',
      hidden: true,
      present: [{ npc: 'npc:nv/thu', dialogue: 'dlg:nv/thu' }],
      objects: [{ id: 'ai-noi', label: 'Ai giải thích thế nào?', when: { evidence: 'ev:nv/nhieu-cach' }, puzzle: 'pz:nv/ai-noi' }],
    },
    {
      id: 'loc:nv/phong-hop',
      name: 'Tiệm đĩa, lúc đóng cửa',
      ...SAI_GON,
      year: '1965',
      bg: 'vn-sai-gon',
      focus: '30% 50%',
      hidden: true,
      present: [{ npc: 'npc:nv/ba-chu', dialogue: 'dlg:nv/ket-luan' }],
      objects: [
        { id: 'tranh-luan', label: 'Cuộc tranh luận: vì sao "vàng"?', when: { topic: 'ket-luan', with: 'npc:nv/ba-chu' }, effects: [{ startQuest: 'q:nv/tranh-luan' }], puzzle: 'pz:nv/tranh-luan' },
        { id: 'ban', label: 'Đặt chứng cứ lên bàn', when: { met: 'npc:nv/ba-chu' }, puzzle: 'pz:nv/ket-luan' },
      ],
    },
  ],

  characters: [
    { id: 'npc:nv/ba-chu', name: 'Bà chủ tiệm đĩa', status: 'fictional', role: 'Người bán đĩa nhạc ở Sài Gòn', sources: [] },
    { id: 'npc:nv/bien-tap', name: 'Anh biên tập đài', status: 'fictional', role: 'Biên tập viên âm nhạc ở Hà Nội', sources: [] },
    { id: 'npc:nv/thu', name: 'Cô sinh viên Thư', status: 'fictional', role: 'Sinh viên làm luận văn về tân nhạc, ngày nay', sources: [] },
  ],

  dialogues: [
    {
      id: 'dlg:nv/ba-chu',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Sài Gòn, năm 1965. Tiệm đĩa chật kín người, loa phát một bài bolero chậm.', effects: [{ remember: 'gap', with: 'npc:nv/ba-chu' }], next: 'n1' },
        n1: { speaker: 'npc:nv/ba-chu', voice: 'fiction', text: '{ten}, nhạc vàng là vì nó quý như vàng đó cưng! Ai mà không biết.', effects: [{ evidence: 'ev:nv/loi-ba-chu' }], next: 'n2' },
        n2: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Nhạc vàng là những bài nào?', when: { not: { topic: 'dinh-nghia', with: 'npc:nv/ba-chu' } }, next: 'n3' },
            { text: 'Tôi sẽ đi hỏi thêm', next: 'n4' },
          ],
        },
        n3: { speaker: 'narrator', voice: 'narration', text: 'Nhạc vàng là ca khúc đại chúng của Quốc gia Việt Nam và Việt Nam Cộng hoà, đặt đối lập với nhạc đỏ được chính quyền miền Bắc cổ vũ. Từ cuối thập niên 1950 bài hát chủ yếu viết theo nhịp boléro, rumba, habanera, pha chất dân ca Nam Bộ.', refs: ['a:nhac-vang-bolero'], effects: [{ remember: 'dinh-nghia', with: 'npc:nv/ba-chu' }], next: 'n2' },
        n4: { speaker: 'npc:nv/ba-chu', voice: 'fiction', text: 'Cầm cái bìa đĩa này đi. Ra ngoài Bắc người ta gọi khác cho coi.', effects: [{ startQuest: 'q:nv/nhac-vang' }], end: true },
      },
    },
    {
      id: 'dlg:nv/bien-tap',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Hà Nội, năm 1965. Ở đài phát thanh, ca khúc cách mạng là dòng chính.', refs: ['a:tan-nhac-mien-bac-1954-1975'], effects: [{ remember: 'gap', with: 'npc:nv/bien-tap' }], next: 'n1' },
        n1: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Ở đây có phát những bài nhạc vàng không?', when: { not: { evidence: 'ev:nv/khong-phat' } }, next: 'n2' },
            { text: 'Ở đây người ta gọi chữ "vàng" thế nào?', when: { not: { evidence: 'ev:nv/miet-thi' } }, next: 'n3' },
            { text: 'Cảm ơn anh', next: 'n4' },
          ],
        },
        n2: { speaker: 'narrator', voice: 'narration', text: '(Lời người biên soạn.) Tình ca tiền chiến và "nhạc vàng" không được phổ biến trên sóng phát thanh miền Bắc; nhưng văn bản cấm cụ thể ở miền Bắc đến nay chưa tìm thấy.', refs: ['a:tan-nhac-mien-bac-1954-1975', 'a:cac-thoi-ky-am-nhac-viet-nam'], effects: [{ evidence: 'ev:nv/khong-phat' }], next: 'n1' },
        n3: { speaker: 'narrator', voice: 'narration', text: 'Với những người làm cách mạng, "nhạc vàng" là một từ miệt thị.', refs: ['a:nhac-vang-bolero'], effects: [{ evidence: 'ev:nv/miet-thi' }], next: 'n1' },
        n4: { speaker: 'npc:nv/bien-tap', voice: 'fiction', text: 'Ở hai đầu đất nước, cùng một chữ, hai nghĩa.', end: true },
      },
    },
    {
      id: 'dlg:nv/thu',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Ngày nay. Cô sinh viên Thư đang đọc các nghiên cứu của Jason Gibbs.', effects: [{ remember: 'gap', with: 'npc:nv/thu' }], next: 'n1' },
        n1: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Có bao nhiêu cách giải thích chữ "vàng"?', when: { not: { evidence: 'ev:nv/nhieu-cach' } }, next: 'n2' },
            { text: 'Jason Gibbs nghĩ sao?', when: { not: { evidence: 'ev:nv/gibbs' } }, next: 'n3' },
            { text: 'Cùng kho bài ấy còn được gọi là gì?', when: { not: { evidence: 'ev:nv/nhieu-ten' } }, next: 'n4' },
            { text: 'Tôi đủ chứng cứ rồi', next: 'n5' },
          ],
        },
        n2: { speaker: 'npc:nv/thu', voice: 'reconstructed', text: 'Ít nhất bốn: một từ miệt thị của người làm cách mạng; một nhãn hiệu tích cực của vài người bán đĩa ở Sài Gòn; màu cờ miền Nam, theo Wikipedia; và gốc Trung Quốc. Chưa có cách nào được thống nhất.', refs: ['a:nhac-vang-bolero'], effects: [{ evidence: 'ev:nv/nhieu-cach' }], next: 'n1' },
        n3: { speaker: 'npc:nv/thu', voice: 'reconstructed', text: 'Gibbs truy về chữ huangse yinyue — "nhạc màu vàng" — của Trung Quốc thập niên 1930.', refs: ['a:nhac-vang-bolero'], effects: [{ evidence: 'ev:nv/gibbs' }], next: 'n1' },
        n4: { speaker: 'npc:nv/thu', voice: 'reconstructed', text: 'Tân nhạc, nhạc trước 1975, nhạc sến, bolero — một bài nghiên cứu nói mỗi tên mang một hàm ý chính trị khác nhau.', refs: ['a:nhac-vang-bolero'], effects: [{ evidence: 'ev:nv/nhieu-ten' }], next: 'n1' },
        n5: { speaker: 'narrator', voice: 'narration', text: 'Bốn lời giải thích, nhiều cái tên, và một kho bài vẫn còn được hát.', end: true },
      },
    },
    {
      id: 'dlg:nv/ket-luan',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Trở lại tiệm đĩa. Bà chủ đang kéo cửa sắt.', effects: [{ remember: 'ket-luan', with: 'npc:nv/ba-chu' }], next: 'n1' },
        n1: { speaker: 'npc:nv/ba-chu', voice: 'fiction', text: 'Sao, tui nói đúng hông? Bày chứng cứ ra coi.', end: true },
      },
    },
  ],

  quests: [
    {
      id: 'q:nv/nhac-vang',
      chapter: 'vn-hai-mien',
      title: 'Một cái tên màu vàng',
      summary: 'Vì sao gọi là nhạc vàng? Từ tiệm đĩa Sài Gòn, đài phát thanh Hà Nội tới một luận văn hôm nay.',
      kind: 'main',
      stages: [
        { id: 'tiem', text: 'Ở tiệm đĩa: cầm bìa đĩa, phân biệt các dòng nhạc trên kệ.', objectives: [{ talk: 'npc:nv/ba-chu' }, { collect: 'item:nv/bia-dia' }, { solve: 'pz:nv/dong-nhac' }], onDone: [{ unlock: 'loc:nv/dai' }, { xp: 20, skill: 'history' }] },
        { id: 'dai', text: 'Ở đài phát thanh Hà Nội: nghe chữ "vàng" ở phía bên kia, phân biệt ba lối viết bài hát.', objectives: [{ talk: 'npc:nv/bien-tap' }, { solve: 'pz:nv/dac-diem' }], onDone: [{ unlock: 'loc:nv/thu-vien' }, { xp: 30, skill: 'analysis' }] },
        { id: 'nguon', text: 'Ngày nay: tìm các cách giải thích và các tên gọi.', objectives: [{ talk: 'npc:nv/thu' }, { solve: 'pz:nv/ai-noi' }], onDone: [{ unlock: 'loc:nv/phong-hop' }, { xp: 30, skill: 'sources' }] },
        { id: 'ket-luan', text: 'Trở lại tiệm đĩa: đặt chứng cứ lên bàn.', objectives: [{ solve: 'pz:nv/ket-luan' }], onDone: [{ xp: 50, skill: 'research' }] },
      ],
      rewards: [{ xp: 40, skill: 'history' }],
      links: ['a:nhac-vang-bolero'],
    },
    {
      id: 'q:nv/so-phan',
      chapter: 'vn-hai-mien',
      title: 'Số phận của một kho bài',
      summary: 'Từ Duyên quê đến Nghị định 144: xếp các mốc.',
      kind: 'side',
      stages: [{ id: 'moc', text: 'Xếp các mốc theo thời gian.', objectives: [{ solve: 'pz:nv/moc' }] }],
      rewards: [{ xp: 30, skill: 'history' }],
      links: ['a:nhac-vang-bolero', 'a:am-nhac-viet-nam-sau-1975'],
    },
    {
      id: 'q:nv/tranh-luan',
      chapter: 'vn-hai-mien',
      title: 'Ba lời ở tiệm đĩa',
      summary: 'Ba người, ba ý. Đáp lại bằng chứng cứ.',
      kind: 'academic',
      stages: [{ id: 'tranh-luan', text: 'Đáp lại từng lượt.', objectives: [{ solve: 'pz:nv/tranh-luan' }] }],
      rewards: [{ xp: 30, skill: 'research' }],
      links: ['a:nhac-vang-bolero'],
    },
  ],

  puzzles: [
    {
      id: 'pz:nv/ai-noi',
      type: 'match',
      difficulty: 2,
      title: 'Ai giải thích thế nào?',
      instructions: 'Mỗi cách giải thích chữ "vàng" đến từ ai?',
      content: {
        ask: 'Ghép cách giải thích với người đưa ra.',
        left: [
          { id: 'miet-thi', text: 'Một từ miệt thị' },
          { id: 'nhan-hieu', text: 'Một nhãn hiệu tích cực' },
          { id: 'mau-co', text: 'Màu cờ miền Nam' },
          { id: 'trung-quoc', text: 'Gốc "huangse yinyue" của Trung Quốc thập niên 1930' },
        ],
        right: [
          { id: 'cach-mang', text: 'Những người làm cách mạng' },
          { id: 'ban-dia', text: 'Vài người bán đĩa ở Sài Gòn' },
          { id: 'wiki', text: 'Wikipedia' },
          { id: 'gibbs', text: 'Jason Gibbs' },
        ],
      },
      answer: { 'miet-thi': 'cach-mang', 'nhan-hieu': 'ban-dia', 'mau-co': 'wiki', 'trung-quoc': 'gibbs' },
      hints: ['Đọc mục "Định nghĩa và tên gọi" trong bài Nhạc vàng và bolero.'],
      explanation: 'Mỗi lời giải thích có một người nói, và người nói nằm ở một phía. Biết ai nói giúp ta hiểu vì sao họ nói vậy — nhưng chưa cho biết ai đúng.',
      skills: ['sources'],
      links: ['a:nhac-vang-bolero'],
    },
    {
      id: 'pz:nv/dong-nhac',
      type: 'match',
      difficulty: 2,
      title: 'Các dòng nhạc trên kệ',
      instructions: 'Ghép mỗi dòng nhạc miền Nam với một tác giả tiêu biểu.',
      content: {
        ask: 'Ghép dòng nhạc với tác giả.',
        left: [
          { id: 'vang', text: 'Nhạc vàng – bolero' },
          { id: 'tinh-ca', text: 'Tình ca nối dòng tiền chiến' },
          { id: 'du-ca', text: 'Du ca' },
          { id: 'tre', text: 'Nhạc trẻ, rock' },
        ],
        right: [
          { id: 'lam-phuong', text: 'Lam Phương' },
          { id: 'vu-thanh-an', text: 'Vũ Thành An' },
          { id: 'nguyen-duc-quang', text: 'Nguyễn Đức Quang' },
          { id: 'phuong-hoang', text: 'Phượng Hoàng (Lê Hựu Hà, Nguyễn Trung Cang)' },
        ],
      },
      answer: { vang: 'lam-phuong', 'tinh-ca': 'vu-thanh-an', 'du-ca': 'nguyen-duc-quang', tre: 'phuong-hoang' },
      hints: ['Đọc bảng "Các dòng nhạc" trong bài Tân nhạc miền Nam.'],
      explanation: 'Lam Phương — nhạc vàng; Vũ Thành An (Tình khúc thứ nhất) — tình ca; Nguyễn Đức Quang — du ca; Phượng Hoàng — nhạc trẻ. Ranh giới các dòng là quy ước về sau, nhiều khi mang màu chính trị.',
      skills: ['history'],
      links: ['a:tan-nhac-mien-nam-1954-1975'],
    },
    {
      id: 'pz:nv/dac-diem',
      type: 'classify',
      difficulty: 3,
      title: 'Ba lối viết bài hát',
      instructions: 'Mỗi đặc điểm thuộc dòng nhạc nào?',
      content: {
        ask: 'Xếp từng đặc điểm.',
        items: [
          { id: 'bolero', text: 'Nhịp boléro, rumba, habanera; chậm, pha dân ca Nam Bộ' },
          { id: 'hanh-khuc', text: 'Hành khúc, ca khúc quần chúng, đồng ca và hợp xướng' },
          { id: 'slow-rock', text: 'Slow rock, boston, ballad; giai điệu ít nhảy, lời là trung tâm' },
        ],
        labels: [
          { id: 'vang', text: 'Nhạc vàng' },
          { id: 'cach-mang', text: 'Nhạc cách mạng' },
          { id: 'trinh', text: 'Nhạc Trịnh Công Sơn' },
        ],
      },
      answer: { bolero: 'vang', 'hanh-khuc': 'cach-mang', 'slow-rock': 'trinh' },
      hints: ['Một lối dành cho nhiều người cùng hát, một lối chậm và buồn, một lối nhường chỗ cho lời.'],
      explanation: 'Nhạc vàng: boléro, rumba, habanera, chậm, pha dân ca Nam Bộ. Nhạc cách mạng: hành khúc, ca khúc quần chúng, đồng ca, hợp xướng, nhiều chất liệu dân ca. Nhạc Trịnh: slow rock, boston, ballad, lời là trung tâm.',
      skills: ['analysis'],
      links: ['a:nhac-vang-bolero', 'a:tan-nhac-mien-bac-1954-1975', 'a:nhac-trinh'],
    },
    {
      id: 'pz:nv/moc',
      type: 'order',
      difficulty: 3,
      title: 'Số phận của một kho bài',
      instructions: 'Xếp theo thời gian, sớm nhất trước.',
      content: {
        ask: 'Từ sớm đến muộn.',
        items: [
          { id: 'nd144', text: 'Nghị định 144/2020 có hiệu lực: bỏ cấp phép ca khúc trước 1975' },
          { id: 'duyen-que', text: 'Duyên quê của Hoàng Thi Thơ' },
          { id: 'cam', text: 'Nhạc vàng bị cấm, băng đĩa bị tịch thu' },
          { id: 'noi', text: 'Bắt đầu nới lỏng' },
          { id: 'thu-hoi', text: 'Năm bài đã cấp phép bị tạm dừng rồi Cục xin lỗi, thu hồi quyết định' },
        ],
      },
      answer: ['duyen-que', 'cam', 'noi', 'thu-hoi', 'nd144'],
      hints: ['1955 – 1956, sau 1975, 1986, 2017, 1/2/2021.'],
      explanation: '1955 – 1956 Duyên quê → sau 1975 bị cấm → từ 1986 nới lỏng → 2017 tạm dừng rồi thu hồi quyết định → 1/2/2021 bỏ cấp phép (các danh sách bài bị cấm vẫn còn hiệu lực).',
      skills: ['history'],
      links: ['a:nhac-vang-bolero', 'a:am-nhac-viet-nam-sau-1975'],
    },
    {
      id: 'pz:nv/tranh-luan',
      type: 'debate',
      difficulty: 3,
      title: 'Ba lời ở tiệm đĩa',
      instructions: 'Chọn câu đáp có căn cứ cho từng lượt — đồng ý cũng là một câu đáp, nếu điều họ nói đứng được.',
      content: {
        topic: 'Chữ "vàng" trong nhạc vàng',
        turns: [
          {
            id: 't1',
            speaker: 'Bà chủ tiệm đĩa',
            text: '"Vàng" là vì quý như vàng, ai cũng biết.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'nhieu-cach', text: 'Đó chỉ là một trong nhiều cách giải thích — vài người bán đĩa dùng chữ ấy như nhãn tích cực; chưa có cách giải thích nào được thống nhất.' },
              { id: 'buon', text: 'Không, vì nhạc này buồn.' },
            ],
          },
          {
            id: 't2',
            speaker: 'Anh biên tập đài',
            text: 'Ngoài Bắc chắc chắn có văn bản cấm nhạc vàng.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'chua-tim', text: 'Nhạc vàng không được phát trên sóng, nhưng văn bản cấm cụ thể ở miền Bắc đến nay chưa tìm thấy.' },
              { id: 'khong-co', text: 'Không, miền Bắc chưa từng hạn chế nhạc vàng.' },
            ],
          },
          {
            id: 't3',
            speaker: 'Cô sinh viên Thư',
            text: 'Gibbs nói gốc Trung Quốc, vậy chuyện đã xong.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'de-xuat', text: 'Đó là một đề xuất có nghiên cứu, đáng tin hơn lời đồn — nhưng bài thư viện vẫn ghi chưa có cách giải thích thống nhất.' },
              { id: 'ngoai-quoc', text: 'Không, vì Gibbs là người nước ngoài.' },
            ],
          },
        ],
      },
      answer: { t1: 'nhieu-cach', t2: 'chua-tim', t3: 'de-xuat' },
      hints: ['Phân biệt "không được phát" với "có văn bản cấm".'],
      feedback: [
        { key: 't1:dong-y', text: 'Đó chỉ là một cách giải thích trong nhiều cách.' },
        { key: 't1:buon', text: 'Đoán theo cảm giác, không theo nguồn.' },
        { key: 't2:dong-y', text: 'Chưa ai tìm thấy văn bản ấy.' },
        { key: 't2:khong-co', text: 'Quá tay: nhạc vàng không được phát trên sóng miền Bắc.' },
        { key: 't3:dong-y', text: 'Một đề xuất tốt chưa phải là kết luận được thống nhất.' },
        { key: 't3:ngoai-quoc', text: 'Quốc tịch không phải lý do để bác bỏ.' },
      ],
      explanation: 'Chữ "vàng" có ít nhất bốn cách giải thích, chưa thống nhất; Gibbs đề xuất gốc Trung Quốc. Ở miền Bắc nhạc vàng không được phát trên sóng, nhưng văn bản cấm cụ thể chưa tìm thấy.',
      skills: ['research', 'sources'],
      links: ['a:nhac-vang-bolero'],
    },
    {
      id: 'pz:nv/ket-luan',
      type: 'investigation',
      difficulty: 4,
      title: 'Vì sao "vàng"?',
      instructions: 'Chọn một kết luận và đặt lên bàn ít nhất hai chứng cứ đỡ nó. Chứng cứ yếu đặt làm chỗ dựa sẽ bị bác.',
      content: {
        question: 'Có thể nói chắc "nhạc vàng" được gọi như vậy vì một lý do duy nhất không?',
        conclusions: [
          { id: 'quy', text: 'Có — vì nó quý như vàng.' },
          { id: 'nhieu-cach', text: 'Không: có nhiều cách giải thích (từ miệt thị, nhãn tích cực, màu cờ, gốc Trung Quốc theo Gibbs) và chưa cách nào được thống nhất; cùng kho bài còn mang nhiều tên khác.' },
          { id: 'mau-co', text: 'Có — chắc chắn vì màu cờ miền Nam.' },
        ],
        evidence: ['ev:nv/nhieu-cach', 'ev:nv/gibbs', 'ev:nv/nhieu-ten', 'ev:nv/miet-thi', 'ev:nv/khong-phat', 'ev:nv/loi-ba-chu', 'ev:nv/bia-dia'],
        min: 2,
      },
      answer: { conclusion: 'nhieu-cach', support: ['ev:nv/nhieu-cach', 'ev:nv/gibbs'], reject: ['ev:nv/loi-ba-chu', 'ev:nv/bia-dia'] },
      explanation: 'Kết luận vững nhất: chữ "vàng" có ít nhất bốn cách giải thích — từ miệt thị của người làm cách mạng, nhãn tích cực của người bán đĩa, màu cờ miền Nam (Wikipedia), gốc "huangse yinyue" Trung Quốc (Gibbs) — và chưa cách nào được thống nhất. Cùng kho bài còn được gọi là tân nhạc, nhạc trước 1975, nhạc sến, bolero.',
      hints: ['Kết luận nào để ngỏ đúng chỗ các nguồn để ngỏ?', 'Lời bà chủ tiệm và một bìa đĩa trong truyện không đỡ được kết luận.'],
      feedback: [
        { key: 'ket-luan:quy', text: 'Đó là một lời giải thích trong nhiều lời, không phải điều đã chứng minh.' },
        { key: 'ket-luan:mau-co', text: 'Màu cờ là cách giải thích của Wikipedia — một trong nhiều cách, chưa phải duy nhất.' },
        { key: 'yeu:ev:nv/loi-ba-chu', text: 'Lời bà chủ tiệm là điều cần kiểm.' },
        { key: 'yeu:ev:nv/bia-dia', text: 'Bìa đĩa là vật trong truyện.' },
        { key: 'thieu', text: 'Đúng hướng, nhưng cần cả danh sách cách giải thích lẫn đề xuất có nghiên cứu của Gibbs.' },
      ],
      skills: ['research', 'sources'],
      links: ['a:nhac-vang-bolero'],
      sources: ['a:nhac-vang-bolero'],
    },
  ],

  evidence: [
    { id: 'ev:nv/bia-dia', title: 'Bìa đĩa đề chữ "nhạc vàng"', text: 'Một bìa đĩa trong tiệm. Vật trong truyện.', kind: 'fiction', reliability: 'Tình tiết hư cấu của game.', verification: 'library' },
    { id: 'ev:nv/loi-ba-chu', title: 'Lời bà chủ tiệm', text: '"Vàng là vì quý như vàng." Lời nhân vật trong truyện.', kind: 'anecdote', source: 'a:nhac-vang-bolero', reliability: 'Bài thư viện ghi đây là một trong nhiều cách giải thích.', verification: 'library' },
    { id: 'ev:nv/nhieu-cach', title: 'Nhiều cách giải thích', text: 'Từ miệt thị của người làm cách mạng; nhãn tích cực của vài người bán đĩa Sài Gòn; màu cờ miền Nam (Wikipedia); gốc Trung Quốc (Gibbs). Chưa có cách giải thích thống nhất.', kind: 'secondary', source: 'a:nhac-vang-bolero', reliability: 'Bài thư viện tổng hợp các nguồn.', verification: 'library' },
    { id: 'ev:nv/gibbs', title: 'Đề xuất của Jason Gibbs', text: 'Chữ "nhạc vàng" truy về huangse yinyue ("nhạc màu vàng") của Trung Quốc thập niên 1930.', kind: 'interpretation', source: 'a:nhac-vang-bolero', reliability: 'Đề xuất có nghiên cứu, chưa phải kết luận chung.', verification: 'library' },
    { id: 'ev:nv/nhieu-ten', title: 'Nhiều tên cho một kho bài', text: 'Tân nhạc, nhạc trước 1975, nhạc sến, bolero — mỗi tên mang một hàm ý chính trị khác nhau.', kind: 'secondary', source: 'a:nhac-vang-bolero', reliability: 'Theo một bài nghiên cứu học thuật bài thư viện dẫn.', verification: 'library' },
    { id: 'ev:nv/miet-thi', title: 'Ở miền Bắc', text: 'Với những người làm cách mạng, "nhạc vàng" là một từ miệt thị.', kind: 'secondary', source: 'a:nhac-vang-bolero', reliability: 'Bài thư viện, theo các nguồn ghi ở bài.', verification: 'library' },
    { id: 'ev:nv/khong-phat', title: 'Không phát nhưng chưa thấy văn bản cấm', text: 'Nhạc vàng không được phổ biến trên sóng phát thanh miền Bắc; văn bản cấm cụ thể chưa tìm thấy.', kind: 'secondary', source: 'a:tan-nhac-mien-bac-1954-1975', reliability: 'Ghi rõ giới hạn của nguồn.', verification: 'library' },
  ],

  items: [{ id: 'item:nv/bia-dia', name: 'Bìa đĩa', kind: 'record', text: 'Bìa đĩa đề chữ "nhạc vàng". (Vật trong truyện.)', links: ['a:nhac-vang-bolero'] }],

  claims: [],
  completion: { quest: 'q:nv/nhac-vang', is: 'done' },
}
