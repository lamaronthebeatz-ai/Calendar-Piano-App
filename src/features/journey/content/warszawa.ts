import type { ArcDef } from '../engine/types'

/**
 * Hành trình Việt Nam, Chương VI — "Chuyện ở Warszawa": Martha Argerich rời ban giám khảo cuộc thi Chopin 1980 vì ai?
 * Sự kiện lấy từ giai-thoai-am-nhac-viet-nam (phán định "Sai"), truong-phai-su-pham-nga (Isaac Katz 1974, Nhạc viện
 * Moskva, Natanson, Bashkirov, 10/1980), piano-viet-nam, nghe-si-piano-hien-dai (Seong-Jin Cho 2015) và
 * am-giai-ngu-cung (Étude "Phím đen"). Đặng Thái Sơn còn sống nên không có lời thoại: mọi chặng do nhân vật hư cấu kể.
 */
const WARSZAWA = { lat: 52.23, lon: 21.01, far: true }

export const warszawa: ArcDef = {
  id: 'warszawa',
  chapter: 'vn-sau-1975',
  title: 'Chuyện ở Warszawa',
  year: '1980',
  intro: 'Tháng 10 năm 1980, một chàng trai Việt Nam giành giải nhất cuộc thi Chopin. Cùng kỳ thi ấy, một nữ nghệ sĩ lừng danh bỏ ghế giám khảo. Bốn mươi năm sau, nhiều người vẫn kể hai chuyện như một. {ten} đi tách chúng ra.',
  opens: { quest: 'q:vn-sau-1975/vn-chopin-1980', is: 'done' },
  main: 'q:ws/warszawa',
  music: 'vn-chopin-1980',
  period: 'a:piano-viet-nam',

  locations: [
    {
      id: 'loc:ws/phong-hoa-nhac',
      name: 'Phòng hoà nhạc Quốc gia, Warszawa',
      ...WARSZAWA,
      year: '10/1980',
      bg: 'vn-warszawa',
      present: [{ npc: 'npc:ws/ba-khan-gia', dialogue: 'dlg:ws/ba-khan-gia' }],
      objects: [
        { id: 've', label: 'Tấm vé vòng chung kết', when: { all: [{ quest: 'q:ws/warszawa', is: 'active' }, { not: { item: 'item:ws/ve' } }] }, effects: [{ give: 'item:ws/ve' }, { evidence: 'ev:ws/ve' }, { discover: 'a:piano-viet-nam' }] },
        { id: 'phim-den', label: 'Bản nhạc chỉ chơi trên phím đen', when: { item: 'item:ws/ve' }, puzzle: 'pz:ws/phim-den' },
      ],
    },
    {
      id: 'loc:ws/moskva',
      name: 'Nhạc viện Moskva',
      lat: 55.76,
      lon: 37.6,
      far: true,
      year: 'cuối thập niên 1970',
      bg: 'vn-nha-hat-lon',
      hidden: true,
      present: [{ npc: 'npc:ws/ban-hoc', dialogue: 'dlg:ws/ban-hoc' }],
      objects: [{ id: 'moc', label: 'Con đường tới Warszawa', when: { met: 'npc:ws/ban-hoc' }, puzzle: 'pz:ws/moc' }],
    },
    {
      id: 'loc:ws/toa-soan',
      name: 'Một toà soạn ở Hà Nội, ngày nay',
      lat: 21.03,
      lon: 105.85,
      year: 'ngày nay',
      bg: 'vn-ha-noi-1900',
      hidden: true,
      present: [{ npc: 'npc:ws/nha-bao', dialogue: 'dlg:ws/nha-bao' }],
      objects: [{ id: 'chung-cu', label: 'Phân loại chứng cứ', when: { all: [{ evidence: 'ev:ws/giai-thoai' }, { evidence: 'ev:ws/thang' }] }, puzzle: 'pz:ws/phan-loai' }],
    },
    {
      id: 'loc:ws/phong-hop',
      name: 'Hành lang phòng hoà nhạc, sau buổi trao giải',
      ...WARSZAWA,
      year: '10/1980',
      bg: 'vn-warszawa',
      focus: '30% 50%',
      hidden: true,
      present: [{ npc: 'npc:ws/ba-khan-gia', dialogue: 'dlg:ws/ket-luan' }],
      objects: [
        { id: 'tranh-luan', label: 'Cuộc tranh luận: vì sao bà ấy bỏ đi?', when: { topic: 'ket-luan', with: 'npc:ws/ba-khan-gia' }, effects: [{ startQuest: 'q:ws/tranh-luan' }], puzzle: 'pz:ws/tranh-luan' },
        { id: 'ban', label: 'Đặt chứng cứ lên bàn', when: { met: 'npc:ws/ba-khan-gia' }, puzzle: 'pz:ws/ket-luan' },
      ],
    },
  ],

  characters: [
    { id: 'npc:ws/ba-khan-gia', name: 'Bà khán giả Ba Lan', status: 'fictional', role: 'Người nghe ở cuộc thi Chopin', sources: [] },
    { id: 'npc:ws/ban-hoc', name: 'Anh bạn học người Nga', status: 'fictional', role: 'Sinh viên Nhạc viện Moskva', sources: [] },
    { id: 'npc:ws/nha-bao', name: 'Chị nhà báo', status: 'fictional', role: 'Phóng viên văn hoá, ngày nay', sources: [] },
  ],

  dialogues: [
    {
      id: 'dlg:ws/ba-khan-gia',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Warszawa, tháng 10/1980. Cuộc thi piano Chopin vừa trao giải.', refs: ['a:piano-viet-nam'], effects: [{ remember: 'gap', with: 'npc:ws/ba-khan-gia' }], next: 'n1' },
        n1: { speaker: 'npc:ws/ba-khan-gia', voice: 'fiction', text: '{ten}! Bà Argerich bỏ ban giám khảo rồi — vì cậu Việt Nam thắng đấy! Cả hành lang đang bàn tán.', effects: [{ evidence: 'ev:ws/loi-don' }], next: 'n2' },
        n2: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Cậu ấy đã chơi những gì?', when: { not: { topic: 'choi', with: 'npc:ws/ba-khan-gia' } }, next: 'n3' },
            { text: 'Tôi sẽ tìm hiểu cho rõ', next: 'n4' },
          ],
        },
        n3: { speaker: 'narrator', voice: 'narration', text: 'Đặng Thái Sơn — người châu Á đầu tiên giành giải nhất cuộc thi Chopin. Thư viện ghi các bản thu tiêu biểu của anh là Concerto piano và Nocturne của Chopin.', refs: ['a:piano-viet-nam', 'a:dang-thai-son'], effects: [{ remember: 'choi', with: 'npc:ws/ba-khan-gia' }, { evidence: 'ev:ws/thang' }], next: 'n2' },
        n4: { speaker: 'npc:ws/ba-khan-gia', voice: 'fiction', text: 'Giữ lấy tấm vé này mà làm kỷ niệm. Đêm nay ai cũng có một câu chuyện.', effects: [{ startQuest: 'q:ws/warszawa' }], end: true },
      },
    },
    {
      id: 'dlg:ws/ban-hoc',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Moskva, cuối thập niên 1970. Hành lang nhạc viện vang tiếng đàn từ hàng chục phòng tập.', effects: [{ remember: 'gap', with: 'npc:ws/ban-hoc' }], next: 'n1' },
        n1: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Anh bạn Việt Nam của anh tới đây thế nào?', when: { not: { topic: 'den', with: 'npc:ws/ban-hoc' } }, next: 'n2' },
            { text: 'Cảm ơn anh', next: 'n3' },
          ],
        },
        n2: { speaker: 'narrator', voice: 'narration', text: 'Năm 1974, nghệ sĩ Liên Xô Isaac Katz phát hiện Đặng Thái Sơn. Anh sang học Nhạc viện Moskva — các nguồn ghi năm vào trường là 1976 hoặc 1977 — với Vladimir Natanson rồi Dmitri Bashkirov.', refs: ['a:truong-phai-su-pham-nga'], effects: [{ remember: 'den', with: 'npc:ws/ban-hoc' }, { discover: 'a:truong-phai-su-pham-nga' }], next: 'n1' },
        n3: { speaker: 'npc:ws/ban-hoc', voice: 'fiction', text: 'Cậu ấy tập Chopin tới khuya. Tôi chỉ biết vậy thôi.', end: true },
      },
    },
    {
      id: 'dlg:ws/nha-bao',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Hà Nội, ngày nay. Trên bàn chị nhà báo là một bài viết cũ có tít: "Argerich bỏ đi vì chàng trai Việt Nam".', effects: [{ remember: 'gap', with: 'npc:ws/nha-bao' }], next: 'n1' },
        n1: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Bà Argerich bỏ đi vì sao?', when: { not: { evidence: 'ev:ws/giai-thoai' } }, next: 'n2' },
            { text: 'Vì sao hai chuyện bị ghép vào nhau?', when: { all: [{ evidence: 'ev:ws/giai-thoai' }, { not: { evidence: 'ev:ws/ghep' } }] }, next: 'n3' },
            { text: 'Tôi đủ chứng cứ rồi', next: 'n4' },
          ],
        },
        n2: { speaker: 'npc:ws/nha-bao', voice: 'reconstructed', text: 'Bà bỏ đi vì Ivo Pogorelich bị loại — không liên quan tới chiến thắng của Đặng Thái Sơn. Trang phân định giai thoại ghi chuyện kia là "Sai".', refs: ['a:giai-thoai-am-nhac-viet-nam'], effects: [{ evidence: 'ev:ws/giai-thoai' }], next: 'n1' },
        n3: { speaker: 'npc:ws/nha-bao', voice: 'fiction', text: 'Vì hai chuyện xảy ra cùng một kỳ thi, cùng một thành phố. Kể chung thì nghe hay hơn — nhưng không đúng.', refs: ['a:giai-thoai-am-nhac-viet-nam'], effects: [{ evidence: 'ev:ws/ghep' }], next: 'n1' },
        n4: { speaker: 'narrator', voice: 'narration', text: 'Một chiến thắng có thật, một cuộc bỏ đi có thật — và một sợi dây không có thật nối chúng lại.', end: true },
      },
    },
    {
      id: 'dlg:ws/ket-luan',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Trở lại hành lang phòng hoà nhạc. Khán giả đã về gần hết.', effects: [{ remember: 'ket-luan', with: 'npc:ws/ba-khan-gia' }], next: 'n1' },
        n1: { speaker: 'npc:ws/ba-khan-gia', voice: 'fiction', text: 'Thế nào, tôi nói đúng chứ? Ngài bày chứng cứ ra đi.', end: true },
      },
    },
  ],

  quests: [
    {
      id: 'q:ws/warszawa',
      chapter: 'vn-sau-1975',
      title: 'Chuyện ở Warszawa',
      summary: 'Argerich rời ban giám khảo năm 1980 vì ai? Từ phòng hoà nhạc Warszawa, nhạc viện Moskva tới một toà soạn hôm nay.',
      kind: 'main',
      stages: [
        { id: 'warszawa', text: 'Ở Warszawa: giữ tấm vé, nhận ra bản nhạc chỉ chơi trên phím đen.', objectives: [{ talk: 'npc:ws/ba-khan-gia' }, { collect: 'item:ws/ve' }, { solve: 'pz:ws/phim-den' }], onDone: [{ unlock: 'loc:ws/moskva' }, { xp: 20, skill: 'theory' }] },
        { id: 'moskva', text: 'Ở Moskva: lần lại con đường tới Warszawa.', objectives: [{ talk: 'npc:ws/ban-hoc' }, { solve: 'pz:ws/moc' }], onDone: [{ unlock: 'loc:ws/toa-soan' }, { xp: 30, skill: 'history' }] },
        { id: 'toa-soan', text: 'Ngày nay: tìm lý do thật, phân loại chứng cứ.', objectives: [{ talk: 'npc:ws/nha-bao' }, { solve: 'pz:ws/phan-loai' }], onDone: [{ unlock: 'loc:ws/phong-hop' }, { xp: 30, skill: 'sources' }] },
        { id: 'ket-luan', text: 'Trở lại Warszawa: đặt chứng cứ lên bàn.', objectives: [{ solve: 'pz:ws/ket-luan' }], onDone: [{ xp: 50, skill: 'research' }] },
      ],
      rewards: [{ xp: 40, skill: 'history' }],
      links: ['a:giai-thoai-am-nhac-viet-nam', 'a:piano-viet-nam'],
    },
    {
      id: 'q:ws/tranh-luan',
      chapter: 'vn-sau-1975',
      title: 'Ba lời ở hành lang',
      summary: 'Ba người, ba ý. Đáp lại bằng chứng cứ.',
      kind: 'academic',
      stages: [{ id: 'tranh-luan', text: 'Đáp lại từng lượt.', objectives: [{ solve: 'pz:ws/tranh-luan' }] }],
      rewards: [{ xp: 30, skill: 'research' }],
      links: ['a:giai-thoai-am-nhac-viet-nam'],
    },
  ],

  puzzles: [
    {
      id: 'pz:ws/phim-den',
      type: 'scale',
      difficulty: 3,
      title: 'Bản nhạc chỉ chơi trên phím đen',
      instructions: 'Étude Op. 10 số 5 của Chopin chạy gần như toàn bộ trên phím đen — năm phím đen là một âm giai ngũ cung. Chọn đủ các nốt của từng thang.',
      content: {
        ask: 'Các nốt của từng thang âm.',
        items: [
          { id: 'a', tonic: 'F#', scale: 'penta' },
          { id: 'b', tonic: 'Eb', scale: 'pentam' },
        ],
      },
      answer: { a: ['Fa♯', 'Sol♯', 'La♯', 'Đô♯', 'Rê♯'], b: ['Mi♭', 'Sol♭', 'La♭', 'Si♭', 'Rê♭'] },
      hints: ['Ngũ cung trưởng: bỏ bậc 4 và bậc 7 của âm giai trưởng.', 'Ngũ cung thứ trên Mi♭: chính năm phím đen, gọi bằng tên giáng.'],
      explanation: 'Ngũ cung trưởng trên Fa♯: Fa♯ Sol♯ La♯ Đô♯ Rê♯ — đúng năm phím đen. Ngũ cung thứ trên Mi♭: Mi♭ Sol♭ La♭ Si♭ Rê♭ — vẫn năm phím ấy, gọi bằng tên khác. Không có nửa cung nên mọi nốt chơi cùng nhau đều thuận tai; Chopin chỉ cần một nốt Fa trắng ở ô nhịp 66.',
      skills: ['theory'],
      links: ['a:am-giai-ngu-cung'],
    },
    {
      id: 'pz:ws/moc',
      type: 'order',
      difficulty: 2,
      title: 'Con đường tới Warszawa',
      instructions: 'Xếp theo thời gian, sớm nhất trước.',
      content: {
        ask: 'Từ sớm đến muộn.',
        items: [
          { id: 'cho', text: 'Seong-Jin Cho (Hàn Quốc) cũng giành giải nhất cuộc thi Chopin' },
          { id: 'katz', text: 'Isaac Katz phát hiện Đặng Thái Sơn' },
          { id: 'thang', text: 'Đặng Thái Sơn giành giải nhất cuộc thi Chopin' },
          { id: 'moskva', text: 'Vào Nhạc viện Moskva' },
        ],
      },
      answer: ['katz', 'moskva', 'thang', 'cho'],
      hints: ['1974, 1976 hoặc 1977, 10/1980, 2015.'],
      explanation: '1974 Isaac Katz phát hiện → 1976 hoặc 1977 vào Nhạc viện Moskva (nguồn ghi hai năm) → 10/1980 giải nhất → 2015 Seong-Jin Cho, người châu Á tiếp theo.',
      skills: ['history'],
      links: ['a:truong-phai-su-pham-nga', 'a:nghe-si-piano-hien-dai'],
    },
    {
      id: 'pz:ws/phan-loai',
      type: 'classify',
      difficulty: 3,
      title: 'Phân loại chứng cứ',
      instructions: 'Mỗi điều thuộc loại nào?',
      content: {
        ask: 'Xếp từng điều.',
        items: [
          { id: 'thang', text: 'Đặng Thái Sơn giải nhất, người châu Á đầu tiên (10/1980)' },
          { id: 'pogorelich', text: 'Argerich bỏ đi vì Ivo Pogorelich bị loại' },
          { id: 'don', text: '"Argerich bỏ đi vì cậu Việt Nam thắng"' },
          { id: 'ghep', text: 'Hai chuyện cùng kỳ thi bị ghép làm một' },
        ],
        labels: [
          { id: 'su-kien', text: 'Sự kiện được nhiều nguồn ghi nhận' },
          { id: 'phan-dinh', text: 'Phán định có nguồn' },
          { id: 'sai', text: 'Lời kể sai' },
          { id: 'ly-giai', text: 'Lời giải thích vì sao có lời kể sai' },
        ],
      },
      answer: { thang: 'su-kien', pogorelich: 'phan-dinh', don: 'sai', ghep: 'ly-giai' },
      hints: ['Một lời giải thích vì sao người ta kể sai cũng là một loại chứng cứ.'],
      explanation: 'Chiến thắng năm 1980 được nhiều bài ghi nhận. Lý do Argerich bỏ đi là phán định có nguồn. "Bỏ đi vì cậu Việt Nam" là lời kể sai. Việc hai chuyện bị ghép làm một là cách giải thích vì sao lời kể sai lan đi.',
      skills: ['sources'],
      links: ['a:giai-thoai-am-nhac-viet-nam', 'a:phuong-phap-su-hoc-am-nhac'],
    },
    {
      id: 'pz:ws/tranh-luan',
      type: 'debate',
      difficulty: 3,
      title: 'Ba lời ở hành lang',
      instructions: 'Chọn câu đáp có căn cứ cho từng lượt — đồng ý cũng là một câu đáp, nếu điều họ nói đứng được.',
      content: {
        topic: 'Cuộc thi Chopin năm 1980',
        turns: [
          {
            id: 't1',
            speaker: 'Bà khán giả Ba Lan',
            text: 'Bà Argerich bỏ đi vì cậu Việt Nam thắng.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'pogorelich', text: 'Bà bỏ đi vì Ivo Pogorelich bị loại — không liên quan tới chiến thắng của Đặng Thái Sơn.' },
              { id: 'xa', text: 'Không, vì bà ấy ở xa.' },
            ],
          },
          {
            id: 't2',
            speaker: 'Một người hâm mộ',
            text: 'Vậy chiến thắng của cậu ấy chắc cũng là chuyện bịa.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'that', text: 'Không: chiến thắng có thật — người châu Á đầu tiên giành giải nhất, tháng 10/1980. Chỉ sợi dây nối hai chuyện là sai.' },
              { id: 'tre', text: 'Không, vì cậu ấy còn trẻ.' },
            ],
          },
          {
            id: 't3',
            speaker: 'Chị nhà báo',
            text: 'Kể chung hai chuyện cho hay, có hại gì đâu.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'hai', text: 'Có hại: nó gán cho người thật một lý do họ không có, và làm lu mờ chính chiến thắng có thật.' },
              { id: 'doc-gia', text: 'Không sao, vì độc giả thích.' },
            ],
          },
        ],
      },
      answer: { t1: 'pogorelich', t2: 'that', t3: 'hai' },
      hints: ['Một lời kể sai không làm sự kiện thật thành sai — chỉ có sợi dây nối là sai.'],
      feedback: [
        { key: 't1:dong-y', text: 'Phán định có nguồn: bà bỏ đi vì Pogorelich bị loại.' },
        { key: 't1:xa', text: 'Không phải lý do.' },
        { key: 't2:dong-y', text: 'Quá tay: chiến thắng được nhiều nguồn ghi nhận.' },
        { key: 't2:tre', text: 'Tuổi không liên quan.' },
        { key: 't3:dong-y', text: 'Ghép sai là gán cho người thật một động cơ họ không có.' },
        { key: 't3:doc-gia', text: 'Độc giả thích không làm lời kể thành đúng.' },
      ],
      explanation: 'Hai sự kiện có thật — chiến thắng của Đặng Thái Sơn, việc Argerich bỏ đi — nhưng lý do bỏ đi là Pogorelich bị loại. Sợi dây nối chúng lại là sai.',
      skills: ['research', 'sources'],
      links: ['a:giai-thoai-am-nhac-viet-nam'],
    },
    {
      id: 'pz:ws/ket-luan',
      type: 'investigation',
      difficulty: 4,
      title: 'Vì sao bà ấy bỏ đi?',
      instructions: 'Chọn một kết luận và đặt lên bàn ít nhất hai chứng cứ đỡ nó. Chứng cứ yếu đặt làm chỗ dựa sẽ bị bác.',
      content: {
        question: 'Có thể nói "năm 1980 Martha Argerich bỏ ban giám khảo vì Đặng Thái Sơn thắng" không?',
        conclusions: [
          { id: 'co', text: 'Có — ai ở Warszawa cũng nói vậy.' },
          { id: 'hai-chuyen', text: 'Không: Đặng Thái Sơn thắng là có thật; Argerich bỏ đi vì Ivo Pogorelich bị loại. Hai chuyện cùng kỳ thi đã bị ghép làm một.' },
          { id: 'bia', text: 'Cả hai chuyện đều bịa.' },
        ],
        evidence: ['ev:ws/giai-thoai', 'ev:ws/thang', 'ev:ws/ghep', 'ev:ws/loi-don', 'ev:ws/ve'],
        min: 2,
      },
      answer: { conclusion: 'hai-chuyen', support: ['ev:ws/giai-thoai', 'ev:ws/thang'], reject: ['ev:ws/loi-don', 'ev:ws/ve'] },
      explanation: 'Kết luận vững nhất: chiến thắng của Đặng Thái Sơn (10/1980, người châu Á đầu tiên) là có thật; Argerich bỏ đi vì Ivo Pogorelich bị loại — trang phân định giai thoại ghi chuyện "vì Đặng Thái Sơn thắng" là sai.',
      hints: ['Kết luận nào giữ lại cả hai sự kiện thật, và chỉ bỏ sợi dây nối?', 'Lời đồn ở hành lang và tấm vé trong truyện không đỡ được kết luận.'],
      feedback: [
        { key: 'ket-luan:co', text: '"Ai cũng nói" không thay được phán định có nguồn.' },
        { key: 'ket-luan:bia', text: 'Quá tay: chiến thắng năm 1980 có thật.' },
        { key: 'yeu:ev:ws/loi-don', text: 'Lời đồn ở hành lang là điều cần kiểm.' },
        { key: 'yeu:ev:ws/ve', text: 'Tấm vé là vật trong truyện.' },
        { key: 'thieu', text: 'Đúng hướng, nhưng cần cả lý do thật của Argerich lẫn sự kiện chiến thắng.' },
      ],
      skills: ['research', 'sources'],
      links: ['a:giai-thoai-am-nhac-viet-nam', 'a:piano-viet-nam'],
      sources: ['a:giai-thoai-am-nhac-viet-nam'],
    },
  ],

  evidence: [
    { id: 'ev:ws/ve', title: 'Tấm vé vòng chung kết', text: 'Vé cuộc thi Chopin, Warszawa 1980. Vật trong truyện.', kind: 'fiction', reliability: 'Tình tiết hư cấu của game.', verification: 'library' },
    { id: 'ev:ws/loi-don', title: 'Lời đồn ở hành lang', text: '"Argerich bỏ đi vì cậu Việt Nam thắng." Lời nhân vật trong truyện, lặp lại một chuyện hay được kể.', kind: 'anecdote', source: 'a:giai-thoai-am-nhac-viet-nam', reliability: 'Trang phân định giai thoại ghi: Sai.', verification: 'library' },
    { id: 'ev:ws/thang', title: 'Chiến thắng năm 1980', text: 'Đặng Thái Sơn giành giải nhất cuộc thi Chopin tháng 10/1980 — người châu Á đầu tiên.', kind: 'secondary', source: 'a:piano-viet-nam', date: '10/1980', reliability: 'Nhiều bài thư viện cùng ghi nhận.', verification: 'library' },
    { id: 'ev:ws/giai-thoai', title: 'Lý do Argerich bỏ đi', text: 'Bà bỏ đi vì Ivo Pogorelich bị loại, không liên quan tới chiến thắng của Đặng Thái Sơn.', kind: 'secondary', source: 'a:giai-thoai-am-nhac-viet-nam', reliability: 'Phán định của trang giai thoại, theo các nguồn tìm được.', verification: 'library' },
    { id: 'ev:ws/ghep', title: 'Hai chuyện bị ghép làm một', text: 'Hai sự kiện cùng một kỳ thi bị kể thành nguyên nhân – kết quả của nhau.', kind: 'interpretation', source: 'a:giai-thoai-am-nhac-viet-nam', reliability: 'Cách giải thích vì sao lời kể sai lan đi; không phải dữ kiện mới.', verification: 'library' },
  ],

  items: [{ id: 'item:ws/ve', name: 'Tấm vé vòng chung kết', kind: 'document', text: 'Cuộc thi Chopin, Warszawa 1980. (Vật trong truyện.)', links: ['a:piano-viet-nam'] }],

  claims: [],
  completion: { quest: 'q:ws/warszawa', is: 'done' },
}
