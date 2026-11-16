import type { ArcDef } from '../engine/types'

/**
 * Hành trình Việt Nam, Chương I — "Hai bản nhạc lễ": vì sao vua theo Lương Đăng mà không theo Nguyễn Trãi?
 * Sự kiện lấy từ am-nhac-co-trung-dai-viet-nam (mục 3: biểu của Nguyễn Trãi, đoạn Toàn thư báo chí trích, năm 1437
 * chưa có nguồn ghi thẳng, nhận định đời sau), viet-nam-giu-nuoc-938-1802 và giai-thoai-am-nhac-viet-nam.
 * Cậu học trò Đông và bà giữ đền là nhân vật hư cấu; Nguyễn Trãi chỉ nói điều bài thư viện ghi.
 */
const DONG_KINH = { lat: 21.03, lon: 105.85 }

export const nhacLe: ArcDef = {
  id: 'nhac-le',
  chapter: 'vn-co-dai',
  title: 'Hai bản nhạc lễ',
  year: 'thập niên 1430',
  intro: 'Đông Kinh, những năm 1430. Vua giao cho hai người cùng định nhạc lễ triều đình: Nguyễn Trãi và Lương Đăng. Phép tắc hai người soạn khác nhau, và vua theo Lương Đăng. Sáu trăm năm sau, người ta vẫn kể rằng vua "không hiểu" Nguyễn Trãi. Chuyện ấy đến từ đâu?',
  opens: { quest: 'q:vn-co-dai/vn-nguyen-trai', is: 'done' },
  main: 'q:nl/nhac-le',
  music: 'vn-nguyen-trai',
  period: 'a:am-nhac-co-trung-dai-viet-nam',

  locations: [
    {
      id: 'loc:nl/van-mieu',
      name: 'Nhà học ở Đông Kinh',
      ...DONG_KINH,
      year: 'thập niên 1430',
      bg: 'vn-van-mieu',
      present: [{ npc: 'npc:nl/dong', dialogue: 'dlg:nl/dong' }],
      objects: [
        { id: 'ban-chep', label: 'Bản chép tay một tờ biểu', when: { all: [{ quest: 'q:nl/nhac-le', is: 'active' }, { not: { item: 'item:nl/ban-chep' } }] }, effects: [{ give: 'item:nl/ban-chep' }, { evidence: 'ev:nl/ban-chep' }, { discover: 'a:am-nhac-co-trung-dai-viet-nam' }] },
        { id: 'moc', label: 'Sáu mốc trên vách', when: { item: 'item:nl/ban-chep' }, puzzle: 'pz:nl/moc' },
      ],
    },
    {
      id: 'loc:nl/cung',
      name: 'Triều đình Đông Kinh',
      ...DONG_KINH,
      year: 'thập niên 1430',
      bg: 'vn-thang-long',
      hidden: true,
      present: [{ npc: 'npc:nl/nguyen-trai', dialogue: 'dlg:nl/nguyen-trai' }],
      objects: [
        { id: 'nghe', label: 'Ba thứ âm thanh trong kinh thành', when: { met: 'npc:nl/nguyen-trai' }, puzzle: 'pz:nl/nghe' },
        { id: 'loai', label: 'Hiện vật, chính sử hay truyền thuyết?', when: { met: 'npc:nl/nguyen-trai' }, effects: [{ startQuest: 'q:nl/hien-vat' }], puzzle: 'pz:nl/hien-vat' },
      ],
    },
    {
      id: 'loc:nl/den',
      name: 'Một ngôi đền, nhiều thế kỷ sau',
      ...DONG_KINH,
      year: 'thế kỷ 21',
      bg: 'vn-van-mieu',
      focus: '70% 50%',
      hidden: true,
      present: [{ npc: 'npc:nl/ba-giu-den', dialogue: 'dlg:nl/ba-giu-den' }],
      objects: [{ id: 'chung-cu', label: 'Phân loại chứng cứ', when: { all: [{ evidence: 'ev:nl/toan-thu' }, { evidence: 'ev:nl/nam-1437' }] }, puzzle: 'pz:nl/phan-loai' }],
    },
    {
      id: 'loc:nl/phong-hop',
      name: 'Nhà học, buổi tối',
      ...DONG_KINH,
      year: 'thập niên 1430',
      bg: 'vn-van-mieu',
      focus: '30% 50%',
      hidden: true,
      present: [{ npc: 'npc:nl/dong', dialogue: 'dlg:nl/ket-luan' }],
      objects: [
        { id: 'tranh-luan', label: 'Cuộc tranh luận: vua có hiểu Nguyễn Trãi?', when: { topic: 'ket-luan', with: 'npc:nl/dong' }, effects: [{ startQuest: 'q:nl/tranh-luan' }], puzzle: 'pz:nl/tranh-luan' },
        { id: 'ban', label: 'Đặt chứng cứ lên bàn', when: { met: 'npc:nl/dong' }, puzzle: 'pz:nl/ket-luan' },
      ],
    },
  ],

  characters: [
    { id: 'npc:nl/dong', name: 'Cậu học trò Đông', status: 'fictional', role: 'Học trò ở Đông Kinh', sources: [] },
    { id: 'npc:nl/nguyen-trai', name: 'Nguyễn Trãi', status: 'historical', person: 'a:am-nhac-co-trung-dai-viet-nam', role: 'Người được giao định nhạc lễ triều Lê', sources: ['a:am-nhac-co-trung-dai-viet-nam', 'a:viet-nam-giu-nuoc-938-1802'] },
    { id: 'npc:nl/ba-giu-den', name: 'Bà giữ đền', status: 'fictional', role: 'Người kể chuyện cho khách thập phương', sources: [] },
  ],

  dialogues: [
    {
      id: 'dlg:nl/dong',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Đông Kinh, những năm 1430. Năm 1428 Lê Lợi lên ngôi; giờ là triều vua Lê Thái Tông.', refs: ['a:viet-nam-giu-nuoc-938-1802'], effects: [{ remember: 'gap', with: 'npc:nl/dong' }], next: 'n1' },
        n1: { speaker: 'npc:nl/dong', voice: 'fiction', text: '{ten} ơi, người ta bảo vua không hiểu ông Nguyễn Trãi nên mới theo ông Lương Đăng! Thầy con nói vậy đấy.', effects: [{ evidence: 'ev:nl/loi-don' }], next: 'n2' },
        n2: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Hai người được giao việc gì?', when: { not: { topic: 'viec', with: 'npc:nl/dong' } }, next: 'n3' },
            { text: 'Ta sẽ đi hỏi cho rõ', next: 'n4' },
          ],
        },
        n3: { speaker: 'narrator', voice: 'narration', text: 'Vua Lê Thái Tông giao cho Nguyễn Trãi và Lương Đăng soạn nhạc lễ triều đình.', refs: ['a:am-nhac-co-trung-dai-viet-nam'], effects: [{ remember: 'viec', with: 'npc:nl/dong' }], next: 'n2' },
        n4: { speaker: 'npc:nl/dong', voice: 'fiction', text: 'Con có chép được bản biểu của ông ấy, để trên án thư kia. Thầy cầm đi.', effects: [{ startQuest: 'q:nl/nhac-le' }], end: true },
      },
    },
    {
      id: 'dlg:nl/nguyen-trai',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Triều đình Đông Kinh. Nguyễn Trãi — người viết Bình Ngô đại cáo — đang soạn một tờ biểu.', refs: ['a:viet-nam-giu-nuoc-938-1802'], effects: [{ remember: 'gap', with: 'npc:nl/nguyen-trai' }], next: 'n1' },
        n1: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Ông khuyên vua điều gì?', when: { not: { evidence: 'ev:nl/bieu' } }, next: 'n2' },
            { text: 'Phép tắc của ông và Lương Đăng khác nhau chỗ nào?', when: { not: { evidence: 'ev:nl/toan-thu' } }, next: 'n3' },
            { text: 'Cảm ơn ông', next: 'n4' },
          ],
        },
        n2: { speaker: 'npc:nl/nguyen-trai', voice: 'quote', quote: { source: 'a:am-nhac-co-trung-dai-viet-nam' }, text: 'Hoà bình là gốc của nhạc, thanh âm là văn của nhạc.', refs: ['a:am-nhac-co-trung-dai-viet-nam'], effects: [{ evidence: 'ev:nl/bieu' }], next: 'n2b' },
        n2b: { speaker: 'narrator', voice: 'narration', text: 'Ông khuyên vua thương dân, để xóm làng không có tiếng oán hận — rồi xin rút.', refs: ['a:am-nhac-co-trung-dai-viet-nam'], next: 'n1' },
        n3: { speaker: 'narrator', voice: 'narration', text: 'Theo đoạn Toàn thư được báo chí trích, với lời bàn của Ngô Sĩ Liên: phép tắc hai người khác nhau nhiều chỗ, cả kích thước, trọng lượng và cao độ nhạc khí. Nguyễn Trãi xin thôi; vua theo ý Lương Đăng.', refs: ['a:am-nhac-co-trung-dai-viet-nam'], effects: [{ evidence: 'ev:nl/toan-thu' }], next: 'n1' },
        n4: { speaker: 'npc:nl/nguyen-trai', voice: 'fiction', text: 'Hãy nghe kinh thành này, rồi hẵng phán xét.', end: true },
      },
    },
    {
      id: 'dlg:nl/ba-giu-den',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Nhiều thế kỷ sau. Một ngôi đền, khách thập phương đứng nghe bà giữ đền kể chuyện xưa.', effects: [{ remember: 'gap', with: 'npc:nl/ba-giu-den' }], next: 'n1' },
        n1: { speaker: 'npc:nl/ba-giu-den', voice: 'fiction', text: 'Năm 1437, vua nghe lời Lương Đăng, một hoạn quan chỉ thích bắt chước phương Bắc. Ai cũng biết vậy.', next: 'n2' },
        n2: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn kiểm điều gì?)',
          choices: [
            { text: 'Năm 1437 có nguồn nào ghi không?', when: { not: { evidence: 'ev:nl/nam-1437' } }, next: 'n3' },
            { text: '"Lương Đăng là hoạn quan, thích bắt chước" — ai nói vậy?', when: { not: { evidence: 'ev:nl/doi-sau' } }, next: 'n4' },
            { text: 'Tôi sẽ xếp lại chứng cứ', next: 'n5' },
          ],
        },
        n3: { speaker: 'narrator', voice: 'narration', text: '(Lời người biên soạn.) Năm 1437 thường được nêu, nằm trong niên hiệu Thiệu Bình (1434 – 1439), nhưng chưa nguồn nào đã tra ghi trực tiếp năm này.', refs: ['a:am-nhac-co-trung-dai-viet-nam'], effects: [{ evidence: 'ev:nl/nam-1437' }], next: 'n2' },
        n4: { speaker: 'narrator', voice: 'narration', text: '(Lời người biên soạn.) Việc Lương Đăng là hoạn quan, và cách kể "Đăng thích bắt chước Trung Hoa, vua không hiểu Trãi", là nhận định của người đời sau, chưa đối chiếu với sử liệu.', refs: ['a:am-nhac-co-trung-dai-viet-nam'], effects: [{ evidence: 'ev:nl/doi-sau' }], next: 'n2' },
        n5: { speaker: 'narrator', voice: 'narration', text: 'Một tờ biểu, một đoạn sử, một năm không ai ghi, và một lời bàn của đời sau.', end: true },
      },
    },
    {
      id: 'dlg:nl/ket-luan',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Trở lại nhà học. Đèn dầu đã thắp.', effects: [{ remember: 'ket-luan', with: 'npc:nl/dong' }], next: 'n1' },
        n1: { speaker: 'npc:nl/dong', voice: 'fiction', text: 'Thầy tìm ra chưa? Vua có hiểu ông Nguyễn Trãi không?', end: true },
      },
    },
  ],

  quests: [
    {
      id: 'q:nl/nhac-le',
      chapter: 'vn-co-dai',
      title: 'Hai bản nhạc lễ',
      summary: 'Vì sao vua theo Lương Đăng? Từ tờ biểu của Nguyễn Trãi tới những lời kể nhiều thế kỷ sau.',
      kind: 'main',
      stages: [
        { id: 'bieu', text: 'Ở nhà học: cầm bản chép tờ biểu, xếp các mốc trên vách.', objectives: [{ talk: 'npc:nl/dong' }, { collect: 'item:nl/ban-chep' }, { solve: 'pz:nl/moc' }], onDone: [{ unlock: 'loc:nl/cung' }, { xp: 20, skill: 'history' }] },
        { id: 'trieu', text: 'Ở triều đình: hỏi Nguyễn Trãi, nghe âm thanh của kinh thành.', objectives: [{ talk: 'npc:nl/nguyen-trai' }, { solve: 'pz:nl/nghe' }], onDone: [{ unlock: 'loc:nl/den' }, { xp: 30, skill: 'aural' }] },
        { id: 'loi-ke', text: 'Nhiều thế kỷ sau: kiểm năm 1437 và lời bàn của đời sau, phân loại chứng cứ.', objectives: [{ talk: 'npc:nl/ba-giu-den' }, { solve: 'pz:nl/phan-loai' }], onDone: [{ unlock: 'loc:nl/phong-hop' }, { xp: 30, skill: 'sources' }] },
        { id: 'ket-luan', text: 'Trở lại nhà học: đặt chứng cứ lên bàn.', objectives: [{ solve: 'pz:nl/ket-luan' }], onDone: [{ xp: 50, skill: 'research' }] },
      ],
      rewards: [{ xp: 40, skill: 'history' }],
      links: ['a:am-nhac-co-trung-dai-viet-nam'],
    },
    {
      id: 'q:nl/hien-vat',
      chapter: 'vn-co-dai',
      title: 'Hiện vật, chính sử, truyền thuyết',
      summary: 'Bốn điều về âm nhạc cổ Việt Nam — mỗi điều dựa trên một loại bằng chứng khác.',
      kind: 'side',
      stages: [{ id: 'loai', text: 'Xếp từng điều theo loại bằng chứng.', objectives: [{ solve: 'pz:nl/hien-vat' }] }],
      rewards: [{ xp: 30, skill: 'sources' }],
      links: ['a:am-nhac-co-trung-dai-viet-nam', 'a:giai-thoai-am-nhac-viet-nam'],
    },
    {
      id: 'q:nl/tranh-luan',
      chapter: 'vn-co-dai',
      title: 'Ba lời trong nhà học',
      summary: 'Ba người, ba ý. Đáp lại bằng chứng cứ.',
      kind: 'academic',
      stages: [{ id: 'tranh-luan', text: 'Đáp lại từng lượt.', objectives: [{ solve: 'pz:nl/tranh-luan' }] }],
      rewards: [{ xp: 30, skill: 'research' }],
      links: ['a:am-nhac-co-trung-dai-viet-nam'],
    },
  ],

  puzzles: [
    {
      id: 'pz:nl/moc',
      type: 'order',
      difficulty: 2,
      title: 'Sáu mốc trên vách',
      instructions: 'Xếp theo thời gian, sớm nhất trước.',
      content: {
        ask: 'Từ sớm đến muộn.',
        items: [
          { id: 'trong-cham', text: 'Trống Chăm vào dàn nhạc triều Lý' },
          { id: 'bach-dang-1', text: 'Ngô Quyền thắng ở Bạch Đằng' },
          { id: 'le-loi', text: 'Lê Lợi lên ngôi' },
          { id: 'bach-dang-2', text: 'Trần Hưng Đạo thắng ở Bạch Đằng' },
          { id: 'lam-son', text: 'Lê Lợi dựng cờ ở Lam Sơn' },
          { id: 'tay-son', text: 'Phong trào Tây Sơn nổi lên' },
        ],
      },
      answer: ['bach-dang-1', 'trong-cham', 'bach-dang-2', 'lam-son', 'le-loi', 'tay-son'],
      hints: ['938, 1060, 1288, 1418, 1428, 1771.'],
      explanation: '938 Bạch Đằng → 1060 trống Chăm → 1288 Bạch Đằng lần hai → 1418 Lam Sơn → 1428 Lê Lợi lên ngôi → 1771 Tây Sơn. Cuộc tranh luận về nhạc lễ diễn ra ngay sau mười năm chiến tranh.',
      skills: ['history'],
      links: ['a:viet-nam-giu-nuoc-938-1802', 'a:am-nhac-co-trung-dai-viet-nam'],
    },
    {
      id: 'pz:nl/nghe',
      type: 'aural',
      difficulty: 2,
      title: 'Ba thứ âm thanh',
      instructions: 'Ba bản thu thật — không bản nào thu ở thế kỷ 15, nhưng mỗi bản thuộc một truyền thống. Xếp đúng loại.',
      content: {
        ask: 'Mỗi đoạn là loại nào?',
        mode: 'classify',
        clips: [
          { id: 'a', track: 'vn-nguyen', start: 10, end: 20, caption: 'Đoạn A' },
          { id: 'b', track: 'vn-trong-cham', start: 30, end: 40, caption: 'Đoạn B' },
          { id: 'c', track: 'vn-bac-lieu', start: 30, end: 40, caption: 'Đoạn C' },
        ],
        labels: [
          { id: 'kinh', text: 'Tụng kinh Phật giáo' },
          { id: 'le', text: 'Nhạc lễ cung đình' },
          { id: 'san-khau', text: 'Sân khấu ca kịch' },
        ],
      },
      answer: { a: 'le', b: 'kinh', c: 'san-khau' },
      hints: ['Một giọng đọc đều, nhiều giọng đồng thanh, hay một vai đang hát trên sân khấu?'],
      explanation: 'Đoạn A: Đăng đàn cung, nhạc lễ cung đình Huế (bản dựng lại). Đoạn B: tụng kinh Phật giáo — Phật giáo ảnh hưởng lớn tới âm nhạc trung đại. Đoạn C: đĩa cải lương khoảng 1928. Âm nhạc của thế kỷ 15 không còn bản thu nào; ta chỉ nghe được những truyền thống đi tiếp từ đó.',
      skills: ['aural'],
      links: ['a:am-nhac-co-trung-dai-viet-nam', 'a:ca-hue-nha-nhac', 'a:cai-luong'],
    },
    {
      id: 'pz:nl/hien-vat',
      type: 'classify',
      difficulty: 3,
      title: 'Hiện vật, chính sử hay truyền thuyết?',
      instructions: 'Mỗi điều dựa trên loại bằng chứng nào?',
      content: {
        ask: 'Xếp từng điều.',
        items: [
          { id: 'trong-dong', text: 'Trống đồng Đông Sơn có cảnh người múa, chim, hươu, thuyền' },
          { id: 'dan-da', text: 'Bộ đàn đá Ndut Liêng Krak, đào được năm 1949' },
          { id: 'thi-phuong', text: 'Đàn bầu do tiên cho nàng Thị Phương' },
          { id: 'trai-dang', text: 'Phép tắc nhạc lễ của Nguyễn Trãi và Lương Đăng khác nhau' },
        ],
        labels: [
          { id: 'hien-vat', text: 'Hiện vật khảo cổ' },
          { id: 'chinh-su', text: 'Sử liệu (qua đoạn trích)' },
          { id: 'truyen-thuyet', text: 'Truyền thuyết' },
        ],
      },
      answer: { 'trong-dong': 'hien-vat', 'dan-da': 'hien-vat', 'thi-phuong': 'truyen-thuyet', 'trai-dang': 'chinh-su' },
      hints: ['Cái gì cầm được trong tay? Cái gì có trong sách sử? Cái gì chỉ được kể?'],
      explanation: 'Trống đồng và đàn đá là hiện vật. Chuyện Nguyễn Trãi – Lương Đăng có trong Toàn thư (ta mới đọc qua đoạn báo chí trích). Chuyện Thị Phương là truyền thuyết dân gian.',
      skills: ['sources'],
      links: ['a:am-nhac-co-trung-dai-viet-nam', 'a:giai-thoai-am-nhac-viet-nam'],
    },
    {
      id: 'pz:nl/phan-loai',
      type: 'classify',
      difficulty: 3,
      title: 'Phân loại chứng cứ',
      instructions: 'Mỗi điều thuộc loại nào?',
      content: {
        ask: 'Xếp từng điều theo loại.',
        items: [
          { id: 'bieu', text: '"Hoà bình là gốc của nhạc, thanh âm là văn của nhạc"' },
          { id: 'toan-thu', text: 'Đoạn Toàn thư: phép tắc hai người khác nhau, vua theo Lương Đăng' },
          { id: 'doi-sau', text: '"Đăng thích bắt chước Trung Hoa, vua không hiểu Trãi"' },
          { id: 'nam-1437', text: 'Năm 1437' },
        ],
        labels: [
          { id: 'van-ban', text: 'Lời của chính người trong cuộc' },
          { id: 'su-lieu', text: 'Sử liệu, đọc qua đoạn trích' },
          { id: 'nhan-dinh', text: 'Nhận định của người đời sau' },
          { id: 'chua-nguon', text: 'Chưa nguồn nào ghi thẳng' },
        ],
      },
      answer: { bieu: 'van-ban', 'toan-thu': 'su-lieu', 'doi-sau': 'nhan-dinh', 'nam-1437': 'chua-nguon' },
      hints: ['Ai viết, khi nào, và ta đọc nó qua tay ai?'],
      explanation: 'Câu "Hoà bình là gốc của nhạc" là lời trong biểu của Nguyễn Trãi. Đoạn Toàn thư là sử liệu, nhưng ta đọc qua báo chí trích. Chuyện "vua không hiểu Trãi" là nhận định đời sau. Năm 1437 chưa nguồn nào đã tra ghi thẳng.',
      skills: ['sources'],
      links: ['a:am-nhac-co-trung-dai-viet-nam', 'a:phuong-phap-su-hoc-am-nhac'],
    },
    {
      id: 'pz:nl/tranh-luan',
      type: 'debate',
      difficulty: 3,
      title: 'Ba lời trong nhà học',
      instructions: 'Chọn câu đáp có căn cứ cho từng lượt — đồng ý cũng là một câu đáp, nếu điều họ nói đứng được.',
      content: {
        topic: 'Nguyễn Trãi, Lương Đăng và nhạc lễ',
        turns: [
          {
            id: 't1',
            speaker: 'Cậu học trò Đông',
            text: 'Vua theo Lương Đăng vì vua không hiểu Nguyễn Trãi.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'doi-sau', text: 'Sử chỉ ghi phép tắc hai người khác nhau và vua theo Lương Đăng; "vua không hiểu Trãi" là nhận định của người đời sau.' },
              { id: 'tre', text: 'Không, vì vua còn trẻ.' },
            ],
          },
          {
            id: 't2',
            speaker: 'Bà giữ đền',
            text: 'Chuyện xảy ra năm 1437, sách nào cũng ghi.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'thieu-binh', text: 'Năm 1437 thường được nêu, nằm trong niên hiệu Thiệu Bình, nhưng chưa nguồn nào đã tra ghi thẳng năm ấy.' },
              { id: 'sai', text: 'Sai, chuyện xảy ra năm 938.' },
            ],
          },
          {
            id: 't3',
            speaker: 'Một vị quan',
            text: 'Vậy Nguyễn Trãi chẳng nói gì về âm nhạc cả.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'bieu', text: 'Không: biểu của ông có câu "Hoà bình là gốc của nhạc, thanh âm là văn của nhạc", khuyên vua thương dân.' },
              { id: 'binh-ngo', text: 'Không, ông viết Bình Ngô đại cáo.' },
            ],
          },
        ],
      },
      answer: { t1: 'doi-sau', t2: 'thieu-binh', t3: 'bieu' },
      hints: ['Tách điều sử ghi khỏi điều người đời sau kể.'],
      feedback: [
        { key: 't1:dong-y', text: 'Đó là nhận định của đời sau, chưa đối chiếu sử liệu.' },
        { key: 't1:tre', text: 'Tuổi của vua không phải lý do sử ghi.' },
        { key: 't2:dong-y', text: '"Sách nào cũng ghi" — nhưng chưa nguồn nào đã tra ghi thẳng năm 1437.' },
        { key: 't2:sai', text: 'Năm 938 là trận Bạch Đằng của Ngô Quyền.' },
        { key: 't3:dong-y', text: 'Quá tay: câu trong biểu của ông còn được trích mãi.' },
        { key: 't3:binh-ngo', text: 'Đúng là ông viết Bình Ngô đại cáo, nhưng đó không phải điều ông nói về âm nhạc.' },
      ],
      explanation: 'Điều sử ghi: hai người được giao định nhạc lễ, phép tắc khác nhau, vua theo Lương Đăng; Nguyễn Trãi có biểu nói "hoà bình là gốc của nhạc". Năm 1437 và chuyện "vua không hiểu" là phần người đời sau thêm vào.',
      skills: ['research', 'sources'],
      links: ['a:am-nhac-co-trung-dai-viet-nam'],
    },
    {
      id: 'pz:nl/ket-luan',
      type: 'investigation',
      difficulty: 4,
      title: 'Vua có hiểu Nguyễn Trãi?',
      instructions: 'Chọn một kết luận và đặt lên bàn ít nhất hai chứng cứ đỡ nó. Chứng cứ yếu đặt làm chỗ dựa sẽ bị bác.',
      content: {
        question: 'Có thể nói "năm 1437, vua không hiểu Nguyễn Trãi nên theo Lương Đăng" không?',
        conclusions: [
          { id: 'co', text: 'Có — sử sách đều chép như vậy.' },
          { id: 'mot-phan', text: 'Sử chỉ ghi phép tắc hai người khác nhau và vua theo Lương Đăng; năm 1437 chưa nguồn nào ghi thẳng, còn "vua không hiểu Trãi" là nhận định của đời sau.' },
          { id: 'khong-co', text: 'Chuyện Nguyễn Trãi định nhạc lễ là truyền thuyết.' },
        ],
        evidence: ['ev:nl/toan-thu', 'ev:nl/nam-1437', 'ev:nl/doi-sau', 'ev:nl/bieu', 'ev:nl/loi-don', 'ev:nl/ban-chep'],
        min: 2,
      },
      answer: { conclusion: 'mot-phan', support: ['ev:nl/toan-thu', 'ev:nl/nam-1437'], reject: ['ev:nl/loi-don', 'ev:nl/ban-chep'] },
      explanation: 'Kết luận vững nhất tách ba lớp: điều sử ghi (phép tắc khác nhau, vua theo Lương Đăng — qua đoạn Toàn thư báo chí trích), điều chưa có nguồn (năm 1437), và điều đời sau thêm (vua "không hiểu", Đăng "thích bắt chước").',
      hints: ['Kết luận nào nói đúng đến chỗ sử liệu dừng lại?', 'Lời đồn của cậu học trò và một bản chép trong truyện không đỡ được kết luận.'],
      feedback: [
        { key: 'ket-luan:co', text: '"Sử sách đều chép" — nhưng năm 1437 chưa nguồn nào ghi thẳng, và "không hiểu" là lời đời sau.' },
        { key: 'ket-luan:khong-co', text: 'Quá tay: việc hai người được giao định nhạc lễ có trong đoạn Toàn thư.' },
        { key: 'yeu:ev:nl/loi-don', text: 'Lời đồn của cậu học trò là điều cần kiểm.' },
        { key: 'yeu:ev:nl/ban-chep', text: 'Bản chép tay là vật trong truyện.' },
        { key: 'thieu', text: 'Đúng hướng, nhưng cần cả đoạn sử liệu lẫn việc năm 1437 chưa có nguồn.' },
      ],
      skills: ['research', 'sources'],
      links: ['a:am-nhac-co-trung-dai-viet-nam'],
      sources: ['a:am-nhac-co-trung-dai-viet-nam'],
    },
  ],

  evidence: [
    { id: 'ev:nl/ban-chep', title: 'Bản chép tay tờ biểu', text: 'Bản chép của cậu học trò. Vật trong truyện.', kind: 'fiction', reliability: 'Tình tiết hư cấu của game.', verification: 'library' },
    { id: 'ev:nl/loi-don', title: 'Lời đồn trong nhà học', text: '"Vua không hiểu ông Nguyễn Trãi nên mới theo Lương Đăng." Lời nhân vật trong truyện.', kind: 'anecdote', source: 'a:am-nhac-co-trung-dai-viet-nam', reliability: 'Bài thư viện ghi đây là nhận định đời sau.', verification: 'library' },
    { id: 'ev:nl/bieu', title: 'Biểu của Nguyễn Trãi', text: '"Hoà bình là gốc của nhạc, thanh âm là văn của nhạc"; khuyên vua thương dân rồi xin rút.', kind: 'primary', source: 'a:am-nhac-co-trung-dai-viet-nam', reliability: 'Câu được trích nhiều; bài thư viện chưa đối chiếu nguyên văn chữ Hán.', verification: 'library' },
    { id: 'ev:nl/toan-thu', title: 'Đoạn Toàn thư', text: 'Phép tắc của Lương Đăng và Nguyễn Trãi khác nhau nhiều chỗ (kích thước, trọng lượng, cao độ nhạc khí); Trãi xin thôi, vua theo Đăng.', kind: 'secondary', source: 'a:am-nhac-co-trung-dai-viet-nam', reliability: 'Sử liệu, đọc qua đoạn báo chí trích, có lời bàn của Ngô Sĩ Liên.', verification: 'library' },
    { id: 'ev:nl/nam-1437', title: 'Năm 1437', text: 'Thường được nêu, trong niên hiệu Thiệu Bình (1434 – 1439), nhưng chưa nguồn nào đã tra ghi thẳng.', kind: 'secondary', source: 'a:am-nhac-co-trung-dai-viet-nam', reliability: 'Ghi chú của người biên soạn về giới hạn của nguồn.', verification: 'library' },
    { id: 'ev:nl/doi-sau', title: 'Lời bàn của đời sau', text: 'Lương Đăng là hoạn quan, "thích bắt chước Trung Hoa, vua không hiểu Trãi".', kind: 'interpretation', source: 'a:am-nhac-co-trung-dai-viet-nam', reliability: 'Nhận định của người đời sau, chưa đối chiếu sử liệu.', verification: 'library' },
  ],

  items: [{ id: 'item:nl/ban-chep', name: 'Bản chép tờ biểu', kind: 'document', text: 'Bản chép của cậu học trò. (Vật trong truyện.)', links: ['a:am-nhac-co-trung-dai-viet-nam'] }],

  claims: [],
  completion: { quest: 'q:nl/nhac-le', is: 'done' },
}
