import type { ArcDef } from '../engine/types'

/**
 * Hành trình Việt Nam, Chương III — "Người đầu tiên": ai mở đầu tân nhạc? Sự kiện lấy từ nhac-cai-cach-1938,
 * nguyen-van-tuyen, am-nhac-thoi-phap-thuoc, nhom-sang-tac-tan-nhac-dau-tien, bai-ta-theo-dieu-tay,
 * nhac-vien-vien-dong và cac-thoi-ky-am-nhac-viet-nam. Cậu bé gánh hát Út Lành và cô sinh viên Mai là nhân vật hư cấu;
 * Nguyễn Văn Tuyên chỉ nói điều bài thư viện ghi.
 */
const SAI_GON = { lat: 10.776, lon: 106.7 }
const HA_NOI = { lat: 21.028, lon: 105.852 }

export const nguoiDauTien: ArcDef = {
  id: 'nguoi-dau-tien',
  chapter: 'vn-phap-thuoc',
  title: 'Người đầu tiên',
  year: '1933 – 1939',
  intro: 'Sách nào cũng muốn có một "người đầu tiên": người hát bài tân nhạc đầu tiên, viết bài đầu tiên, lập nhóm đầu tiên. Từ một gánh cải lương ở Sài Gòn tới một buổi diễn ồn ào ở Hà Nội, {ten} đi tìm xem chữ "đầu tiên" có đứng được không.',
  opens: { quest: 'q:vn-phap-thuoc/vn-ngay-nay', is: 'done' },
  main: 'q:tn/nguoi-dau-tien',
  music: 'vn-tuyen-1938',
  period: 'a:am-nhac-thoi-phap-thuoc',

  locations: [
    {
      id: 'loc:tn/ganh-hat',
      name: 'Hậu trường một gánh cải lương, Sài Gòn',
      ...SAI_GON,
      year: 'khoảng 1933 – 1934',
      bg: 'vn-tai-tu',
      present: [{ npc: 'npc:tn/ut-lanh', dialogue: 'dlg:tn/ut-lanh' }],
      objects: [
        { id: 'bai-hat', label: 'Tờ lời Việt chép vội cho một bài Tây', when: { all: [{ quest: 'q:tn/nguoi-dau-tien', is: 'active' }, { not: { item: 'item:tn/to-loi' } }] }, effects: [{ give: 'item:tn/to-loi' }, { evidence: 'ev:tn/to-loi' }, { discover: 'a:bai-ta-theo-dieu-tay' }] },
        { id: 'buoc', label: 'Những bước tới bài hát của chính mình', when: { item: 'item:tn/to-loi' }, puzzle: 'pz:tn/buoc' },
      ],
    },
    {
      id: 'loc:tn/ha-noi',
      name: 'Hà Nội, sau buổi diễn',
      ...HA_NOI,
      year: '1938',
      bg: 'vn-nha-hat-lon',
      hidden: true,
      present: [{ npc: 'npc:tn/tuyen', dialogue: 'dlg:tn/tuyen' }],
      objects: [
        { id: 'nhom', label: 'Các nhóm sáng tác đầu tiên', when: { met: 'npc:tn/tuyen' }, puzzle: 'pz:tn/nhom' },
        { id: 'bai', label: 'Bài nào của nhóm nào?', when: { solved: 'pz:tn/nhom' }, effects: [{ startQuest: 'q:tn/bai-nhom' }], puzzle: 'pz:tn/bai-nhom' },
      ],
    },
    {
      id: 'loc:tn/thu-vien',
      name: 'Một thư viện, ngày nay',
      ...HA_NOI,
      year: 'ngày nay',
      bg: 'vn-van-mieu',
      hidden: true,
      present: [{ npc: 'npc:tn/mai', dialogue: 'dlg:tn/mai' }],
      objects: [{ id: 'chung-cu', label: 'Phân loại chứng cứ', when: { all: [{ evidence: 'ev:tn/gibbs' }, { evidence: 'ev:tn/hoi-tri-tri' }] }, puzzle: 'pz:tn/phan-loai' }],
    },
    {
      id: 'loc:tn/phong-hop',
      name: 'Hậu trường gánh hát, buổi tối',
      ...SAI_GON,
      year: 'khoảng 1934',
      bg: 'vn-tai-tu',
      focus: '70% 50%',
      hidden: true,
      present: [{ npc: 'npc:tn/ut-lanh', dialogue: 'dlg:tn/ket-luan' }],
      objects: [
        { id: 'tranh-luan', label: 'Cuộc tranh luận: ai là người đầu tiên?', when: { topic: 'ket-luan', with: 'npc:tn/ut-lanh' }, effects: [{ startQuest: 'q:tn/tranh-luan' }], puzzle: 'pz:tn/tranh-luan' },
        { id: 'ban', label: 'Đặt chứng cứ lên bàn', when: { met: 'npc:tn/ut-lanh' }, puzzle: 'pz:tn/ket-luan' },
      ],
    },
  ],

  characters: [
    { id: 'npc:tn/ut-lanh', name: 'Út Lành', status: 'fictional', role: 'Cậu bé chạy việc ở một gánh cải lương', sources: [] },
    { id: 'npc:tn/tuyen', name: 'Nguyễn Văn Tuyên', status: 'historical', person: 'a:nguyen-van-tuyen', role: 'Ca sĩ, người cổ động nhạc cải cách', sources: ['a:nguyen-van-tuyen', 'a:nhac-cai-cach-1938'] },
    { id: 'npc:tn/mai', name: 'Mai', status: 'fictional', role: 'Sinh viên âm nhạc học, ngày nay', sources: [] },
  ],

  dialogues: [
    {
      id: 'dlg:tn/ut-lanh',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Sài Gòn, khoảng năm 1933 – 1934. Hậu trường một gánh cải lương, tiếng đờn lẫn tiếng kèn Tây.', effects: [{ remember: 'gap', with: 'npc:tn/ut-lanh' }], next: 'n1' },
        n1: { speaker: 'npc:tn/ut-lanh', voice: 'fiction', text: '{ten}! Ông bầu nói gánh mình là chỗ đầu tiên hát bài Tây lời ta. Chắc chắn luôn!', effects: [{ evidence: 'ev:tn/loi-ut' }], next: 'n2' },
        n2: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Ai đặt lời Việt cho bài Tây ở đây?', when: { not: { topic: 'tu-choi', with: 'npc:tn/ut-lanh' } }, next: 'n3' },
            { text: 'Tôi sẽ đi xem cho rõ', next: 'n4' },
          ],
        },
        n3: { speaker: 'narrator', voice: 'narration', text: 'Theo Wikipedia tiếng Việt, Tư Chơi (Huỳnh Thủ Trung) và Năm Châu đề xướng lối "bài ta theo điệu Tây" khoảng 1933 – 1934; Tư Chơi đặt lời Việt cho Marinella, La Madelon. Nhưng việc đặt lời Việt lẻ tẻ thì đã có từ đầu thế kỷ 20.', refs: ['a:bai-ta-theo-dieu-tay'], effects: [{ remember: 'tu-choi', with: 'npc:tn/ut-lanh' }, { evidence: 'ev:tn/dieu-tay' }], next: 'n2' },
        n4: { speaker: 'npc:tn/ut-lanh', voice: 'fiction', text: 'Tờ lời mới chép kia kìa, cầm theo đi. Ra Hà Nội mà hỏi ông Tuyên!', effects: [{ startQuest: 'q:tn/nguoi-dau-tien' }], end: true },
      },
    },
    {
      id: 'dlg:tn/tuyen',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Hà Nội, năm 1938. Nguyễn Văn Tuyên vừa hát xong.', refs: ['a:nhac-cai-cach-1938'], effects: [{ remember: 'gap', with: 'npc:tn/tuyen' }, { discover: 'a:nguyen-van-tuyen' }], next: 'n1' },
        n1: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Ông bắt đầu thế nào?', when: { not: { topic: 'dau', with: 'npc:tn/tuyen' } }, next: 'n2' },
            { text: 'Ông có phải người đầu tiên?', when: { not: { topic: 'dau-tien', with: 'npc:tn/tuyen' } }, next: 'n3' },
            { text: 'Cảm ơn ông', next: 'n4' },
          ],
        },
        n2: { speaker: 'npc:tn/tuyen', voice: 'reconstructed', text: 'Tôi vào Sài Gòn năm 1936, là hội viên người Việt duy nhất của hội Philharmonique. Năm 1937 tôi phổ thơ Nguyễn Văn Cổn thành Kiếp hoa — bài đầu tay.', refs: ['a:nhac-cai-cach-1938'], effects: [{ remember: 'dau', with: 'npc:tn/tuyen' }], next: 'n1' },
        n3: { speaker: 'narrator', voice: 'narration', text: '(Lời người biên soạn.) Nguyễn Văn Tuyên không nói mình là người đầu tiên. Chữ ấy là của những người viết sử về sau — và họ không thống nhất.', refs: ['a:cac-thoi-ky-am-nhac-viet-nam'], effects: [{ remember: 'dau-tien', with: 'npc:tn/tuyen' }, { evidence: 'ev:tn/tranh-cai' }], next: 'n1' },
        n4: { speaker: 'npc:tn/tuyen', voice: 'fiction', text: 'Khán giả cười giọng Huế của tôi. Nhưng họ đã nghe đến hết.', end: true },
      },
    },
    {
      id: 'dlg:tn/mai',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Ngày nay. Trên bàn của Mai là cuốn sách của Jason Gibbs và một xấp bài in.', effects: [{ remember: 'gap', with: 'npc:tn/mai' }], next: 'n1' },
        n1: { speaker: 'npc:tn/mai', voice: 'fiction', text: 'Mình đang viết luận văn về đúng câu hỏi ấy. Bạn muốn biết các nguồn nói gì?', next: 'n2' },
        n2: {
          speaker: 'me',
          voice: 'fiction',
          text: '(Bạn muốn hỏi gì?)',
          choices: [
            { text: 'Jason Gibbs gọi buổi 9/6/1938 là gì?', when: { not: { evidence: 'ev:tn/gibbs' } }, next: 'n3' },
            { text: 'Có nguồn nào kể khác không?', when: { not: { evidence: 'ev:tn/hoi-tri-tri' } }, next: 'n4' },
            { text: 'Còn nhóm Myosotis?', when: { not: { evidence: 'ev:tn/myosotis' } }, next: 'n5' },
            { text: 'Mình sẽ xếp lại chứng cứ', next: 'n6' },
          ],
        },
        n3: { speaker: 'npc:tn/mai', voice: 'reconstructed', text: '"Lần trình diễn công khai, có phê bình, đầu tiên" của ca khúc sáng tác. Ông viết rất cẩn thận: đầu tiên theo đúng nghĩa ấy.', refs: ['a:nhac-cai-cach-1938'], effects: [{ evidence: 'ev:tn/gibbs' }], next: 'n2' },
        n4: { speaker: 'npc:tn/mai', voice: 'reconstructed', text: 'Wikipedia tiếng Việt kể một buổi nói chuyện tháng 3/1938 ở Hội Trí Tri, rồi các buổi hát ở trường nữ học Hoài Đức và rạp Palace. Có thể đã có nhiều buổi.', refs: ['a:nhac-cai-cach-1938'], effects: [{ evidence: 'ev:tn/hoi-tri-tri' }], next: 'n2' },
        n5: { speaker: 'npc:tn/mai', voice: 'reconstructed', text: 'Có một nguồn gọi Myosotis là nhóm đầu tiên chơi bài của chính mình. Một nghiên cứu trong nước lại coi Nguyễn Văn Tuyên và Nguyễn Xuân Khoát là hai người tiên phong.', refs: ['a:am-nhac-thoi-phap-thuoc'], effects: [{ evidence: 'ev:tn/myosotis' }], next: 'n2' },
        n6: { speaker: 'narrator', voice: 'narration', text: 'Một buổi diễn, nhiều buổi diễn, một nhóm, hai người. Mỗi "đầu tiên" đầu tiên theo một nghĩa.', end: true },
      },
    },
    {
      id: 'dlg:tn/ket-luan',
      start: 'n0',
      nodes: {
        n0: { speaker: 'narrator', voice: 'narration', text: 'Trở lại hậu trường gánh hát. Út Lành ngồi chờ trên chiếc rương đồ diễn.', effects: [{ remember: 'ket-luan', with: 'npc:tn/ut-lanh' }], next: 'n1' },
        n1: { speaker: 'npc:tn/ut-lanh', voice: 'fiction', text: 'Rốt cuộc ai là người đầu tiên? Ông bầu tui nói đúng không?', end: true },
      },
    },
  ],

  quests: [
    {
      id: 'q:tn/nguoi-dau-tien',
      chapter: 'vn-phap-thuoc',
      title: 'Người đầu tiên',
      summary: 'Ai mở đầu tân nhạc? Từ bài Tây lời ta ở Sài Gòn tới buổi diễn năm 1938 ở Hà Nội và những luận văn hôm nay.',
      kind: 'main',
      stages: [
        { id: 'ganh', text: 'Ở gánh hát: cầm tờ lời Việt, xếp các bước tới bài hát của chính mình.', objectives: [{ talk: 'npc:tn/ut-lanh' }, { collect: 'item:tn/to-loi' }, { solve: 'pz:tn/buoc' }], onDone: [{ unlock: 'loc:tn/ha-noi' }, { xp: 20, skill: 'history' }] },
        { id: 'ha-noi', text: 'Ở Hà Nội: hỏi Nguyễn Văn Tuyên, phân biệt các nhóm sáng tác đầu tiên.', objectives: [{ talk: 'npc:tn/tuyen' }, { solve: 'pz:tn/nhom' }], onDone: [{ unlock: 'loc:tn/thu-vien' }, { xp: 30, skill: 'history' }] },
        { id: 'nguon', text: 'Ngày nay: tìm các nguồn nói khác nhau, phân loại chứng cứ.', objectives: [{ talk: 'npc:tn/mai' }, { solve: 'pz:tn/phan-loai' }], onDone: [{ unlock: 'loc:tn/phong-hop' }, { xp: 30, skill: 'sources' }] },
        { id: 'ket-luan', text: 'Trở lại gánh hát: đặt chứng cứ lên bàn.', objectives: [{ solve: 'pz:tn/ket-luan' }], onDone: [{ xp: 50, skill: 'research' }] },
      ],
      rewards: [{ xp: 40, skill: 'history' }],
      links: ['a:nhac-cai-cach-1938', 'a:nhom-sang-tac-tan-nhac-dau-tien'],
    },
    {
      id: 'q:tn/bai-nhom',
      chapter: 'vn-phap-thuoc',
      title: 'Bài nào của nhóm nào?',
      summary: 'Bốn nhóm, bốn bài tiêu biểu. Ghép cho đúng.',
      kind: 'side',
      stages: [{ id: 'ghep', text: 'Ghép bài với nhóm.', objectives: [{ solve: 'pz:tn/bai-nhom' }] }],
      rewards: [{ xp: 30, skill: 'history' }],
      links: ['a:nhom-sang-tac-tan-nhac-dau-tien'],
    },
    {
      id: 'q:tn/tranh-luan',
      chapter: 'vn-phap-thuoc',
      title: 'Ba lời ở hậu trường',
      summary: 'Ba người, ba ý. Đáp lại bằng chứng cứ.',
      kind: 'academic',
      stages: [{ id: 'tranh-luan', text: 'Đáp lại từng lượt.', objectives: [{ solve: 'pz:tn/tranh-luan' }] }],
      rewards: [{ xp: 30, skill: 'research' }],
      links: ['a:nhac-cai-cach-1938'],
    },
  ],

  puzzles: [
    {
      id: 'pz:tn/buoc',
      type: 'order',
      difficulty: 3,
      title: 'Những bước tới bài hát của chính mình',
      instructions: 'Xếp theo thời gian, sớm nhất trước.',
      content: {
        ask: 'Từ sớm đến muộn.',
        items: [
          { id: 'ngay-nay', text: 'Bình minh của Nguyễn Xuân Khoát in trên báo Ngày Nay' },
          { id: 'ghi-am', text: 'Léon Azoulay ghi âm nhạc Việt ở Paris' },
          { id: 'nhac-vien', text: 'Nhạc viện Pháp ở Viễn Đông mở cửa ở Hà Nội' },
          { id: 'dieu-tay', text: 'Tư Chơi, Năm Châu đề xướng "bài ta theo điệu Tây"' },
          { id: 'kiep-hoa', text: 'Nguyễn Văn Tuyên viết Kiếp hoa' },
          { id: 'hieu-sach', text: 'Bản in bài hát được bán ở hiệu sách' },
        ],
      },
      answer: ['ghi-am', 'nhac-vien', 'dieu-tay', 'kiep-hoa', 'ngay-nay', 'hieu-sach'],
      hints: ['1900, 1927, k. 1933 – 1934, 1937, 31/7/1938, đầu 1939.'],
      explanation: '1900 ghi âm → 1927 nhạc viện → k. 1933 – 1934 bài ta theo điệu Tây → 1937 Kiếp hoa → 31/7/1938 Bình minh trên Ngày Nay → đầu 1939 bài hát in được bán. Tân nhạc là một con đường nhiều bước, không phải một đêm.',
      skills: ['history'],
      links: ['a:am-nhac-thoi-phap-thuoc', 'a:bai-ta-theo-dieu-tay', 'a:nhac-cai-cach-1938'],
    },
    {
      id: 'pz:tn/nhom',
      type: 'classify',
      difficulty: 2,
      title: 'Hai hướng của các nhóm đầu tiên',
      instructions: 'Mỗi nhóm nghiêng về hướng nào?',
      content: {
        ask: 'Xếp từng nhóm.',
        items: [
          { id: 'myosotis', text: 'Myosotis (Thẩm Oánh, Dương Thiệu Tước)' },
          { id: 'tricea', text: 'Tricéa (Văn Chung, Lê Yên, Doãn Mẫn)' },
          { id: 'dong-vong', text: 'Đồng Vọng (Hoàng Quý, Văn Cao…)' },
          { id: 'sinh-vien', text: 'Tổng hội Sinh viên (Lưu Hữu Phước)' },
        ],
        labels: [
          { id: 'tru-tinh', text: 'Trữ tình lãng mạn' },
          { id: 'yeu-nuoc', text: 'Yêu nước – thanh niên' },
        ],
      },
      answer: { myosotis: 'tru-tinh', tricea: 'tru-tinh', 'dong-vong': 'yeu-nuoc', 'sinh-vien': 'yeu-nuoc' },
      hints: ['Đọc mục "Hai hướng lớn".'],
      explanation: 'Myosotis và Tricéa trữ tình — về sau gọi là nhạc tiền chiến. Đồng Vọng và Tổng hội Sinh viên yêu nước, hành khúc, sử ca — từ hướng này ra đời Tiến quân ca.',
      skills: ['history', 'analysis'],
      links: ['a:nhom-sang-tac-tan-nhac-dau-tien'],
    },
    {
      id: 'pz:tn/bai-nhom',
      type: 'match',
      difficulty: 3,
      title: 'Bài nào của nhóm nào?',
      instructions: 'Ghép bài tiêu biểu với nhóm.',
      content: {
        ask: 'Ghép bài với nhóm.',
        left: [
          { id: 'myosotis', text: 'Myosotis' },
          { id: 'tricea', text: 'Tricéa' },
          { id: 'dong-vong', text: 'Đồng Vọng' },
          { id: 'sinh-vien', text: 'Tổng hội Sinh viên' },
        ],
        right: [
          { id: 'ngoc-lan', text: 'Ngọc lan' },
          { id: 'bong-ai', text: 'Bóng ai qua thềm' },
          { id: 'co-lang-gieng', text: 'Cô láng giềng' },
          { id: 'len-dang', text: 'Lên đàng' },
        ],
      },
      answer: { myosotis: 'ngoc-lan', tricea: 'bong-ai', 'dong-vong': 'co-lang-gieng', 'sinh-vien': 'len-dang' },
      hints: ['Đọc bảng tổng hợp, cột "Bài tiêu biểu".'],
      explanation: 'Ngọc lan — Myosotis; Bóng ai qua thềm — Tricéa; Cô láng giềng — Đồng Vọng (Hoàng Quý); Lên đàng — Tổng hội Sinh viên (Lưu Hữu Phước).',
      skills: ['history'],
      links: ['a:nhom-sang-tac-tan-nhac-dau-tien'],
    },
    {
      id: 'pz:tn/phan-loai',
      type: 'classify',
      difficulty: 3,
      title: 'Phân loại chứng cứ',
      instructions: 'Mỗi điều thuộc loại nào?',
      content: {
        ask: 'Xếp từng điều theo loại.',
        items: [
          { id: 'gibbs', text: 'Gibbs: 9/6/1938 là "lần trình diễn công khai, có phê bình, đầu tiên"' },
          { id: 'tri-tri', text: 'Wikipedia tiếng Việt: buổi nói chuyện tháng 3/1938 ở Hội Trí Tri' },
          { id: 'myosotis', text: 'Một nguồn: Myosotis là nhóm đầu tiên chơi bài của chính mình' },
          { id: 'ut', text: 'Út Lành: "gánh mình là chỗ đầu tiên, chắc chắn luôn"' },
        ],
        labels: [
          { id: 'nghien-cuu', text: 'Nhận định có giới hạn rõ của nhà nghiên cứu' },
          { id: 'nguon-khac', text: 'Nguồn kể khác về cùng sự kiện' },
          { id: 'mot-nguon', text: 'Chỉ một nguồn' },
          { id: 'don', text: 'Lời quả quyết trong truyện' },
        ],
      },
      answer: { gibbs: 'nghien-cuu', 'tri-tri': 'nguon-khac', myosotis: 'mot-nguon', ut: 'don' },
      hints: ['Ai nói "đầu tiên", và đầu tiên theo nghĩa nào?'],
      explanation: 'Gibbs nói "đầu tiên" với một định nghĩa hẹp và rõ. Wikipedia tiếng Việt kể một buổi khác cùng năm. Chuyện Myosotis chỉ có một nguồn. Lời Út Lành là quả quyết trong truyện.',
      skills: ['sources'],
      links: ['a:nhac-cai-cach-1938', 'a:phuong-phap-su-hoc-am-nhac'],
    },
    {
      id: 'pz:tn/tranh-luan',
      type: 'debate',
      difficulty: 3,
      title: 'Ba lời ở hậu trường',
      instructions: 'Chọn câu đáp có căn cứ cho từng lượt — đồng ý cũng là một câu đáp, nếu điều họ nói đứng được.',
      content: {
        topic: 'Người đầu tiên của tân nhạc',
        turns: [
          {
            id: 't1',
            speaker: 'Út Lành',
            text: 'Gánh cải lương tụi tui hát bài Tây lời ta trước, vậy tụi tui là người đầu tiên của tân nhạc.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'loi-viet', text: 'Đặt lời Việt cho bài Tây là một bước trung gian, và việc đó đã có lẻ tẻ từ đầu thế kỷ 20 — chưa phải bài hát của chính mình.' },
              { id: 'sai-gon', text: 'Không, vì Sài Gòn ở xa Hà Nội.' },
            ],
          },
          {
            id: 't2',
            speaker: 'Một khán giả Hà Nội',
            text: 'Ông Tuyên hát ngày 9/6/1938 — đó là ngày duy nhất, chắc chắn.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'nhieu-buoi', text: 'Đó là mốc được trích nhiều nhất, nhưng Wikipedia tiếng Việt kể một buổi tháng 3/1938; có thể đã có nhiều buổi.' },
              { id: 'giong-hue', text: 'Không, vì ông giọng Huế.' },
            ],
          },
          {
            id: 't3',
            speaker: 'Mai',
            text: 'Vậy chẳng ai đầu tiên cả, khỏi cần mốc nào.',
            options: [
              { id: 'dong-y', text: 'Đồng ý.' },
              { id: 'dinh-nghia', text: 'Mốc vẫn có ích nếu nói rõ "đầu tiên theo nghĩa nào" — như Gibbs: buổi trình diễn công khai có phê bình đầu tiên.' },
              { id: 'gibbs', text: 'Không, vì Gibbs là người nước ngoài.' },
            ],
          },
        ],
      },
      answer: { t1: 'loi-viet', t2: 'nhieu-buoi', t3: 'dinh-nghia' },
      hints: ['Câu hỏi "ai đầu tiên" chỉ trả lời được khi đã nói rõ đầu tiên làm gì.'],
      feedback: [
        { key: 't1:dong-y', text: 'Bài Tây lời ta chưa phải bài hát của chính mình, và việc ấy có từ trước.' },
        { key: 't1:sai-gon', text: 'Khoảng cách không phải lập luận.' },
        { key: 't2:dong-y', text: 'Các nguồn kể nhiều buổi khác nhau trong năm 1938.' },
        { key: 't2:giong-hue', text: 'Giọng hát không liên quan tới niên đại.' },
        { key: 't3:dong-y', text: 'Quá tay: một mốc có định nghĩa rõ vẫn đứng được.' },
        { key: 't3:gibbs', text: 'Quốc tịch của nhà nghiên cứu không phải lý do để bác bỏ.' },
      ],
      explanation: '"Người đầu tiên" chỉ có nghĩa khi nói rõ đầu tiên làm gì: đặt lời Việt (từ đầu thế kỷ), lập nhóm (Myosotis — một nguồn), hay trình diễn công khai có phê bình (Nguyễn Văn Tuyên, 9/6/1938 theo Gibbs).',
      skills: ['research', 'sources'],
      links: ['a:nhac-cai-cach-1938'],
    },
    {
      id: 'pz:tn/ket-luan',
      type: 'investigation',
      difficulty: 4,
      title: 'Ai là người đầu tiên?',
      instructions: 'Chọn một kết luận và đặt lên bàn ít nhất hai chứng cứ đỡ nó. Chứng cứ yếu đặt làm chỗ dựa sẽ bị bác.',
      content: {
        question: 'Có thể nói "Nguyễn Văn Tuyên là người đầu tiên của tân nhạc Việt Nam" không?',
        conclusions: [
          { id: 'co', text: 'Có — ông hát ngày 9/6/1938, chấm hết.' },
          { id: 'theo-nghia', text: 'Chỉ khi nói rõ: buổi diễn của ông (thường lấy ngày 9/6/1938) là lần trình diễn công khai có phê bình đầu tiên theo Gibbs; còn "người đầu tiên" nói chung vẫn tranh cãi giữa các nguồn.' },
          { id: 'tu-1900', text: 'Không — tân nhạc bắt đầu từ năm 1900 với các bản ghi âm.' },
        ],
        evidence: ['ev:tn/gibbs', 'ev:tn/tranh-cai', 'ev:tn/hoi-tri-tri', 'ev:tn/myosotis', 'ev:tn/dieu-tay', 'ev:tn/loi-ut', 'ev:tn/to-loi'],
        min: 2,
      },
      answer: { conclusion: 'theo-nghia', support: ['ev:tn/gibbs', 'ev:tn/tranh-cai'], reject: ['ev:tn/loi-ut', 'ev:tn/to-loi'] },
      explanation: 'Kết luận vững nhất nói rõ nghĩa của chữ "đầu tiên": Gibbs gọi buổi 9/6/1938 là lần trình diễn công khai có phê bình đầu tiên của ca khúc sáng tác; còn ai là "người đầu tiên" của tân nhạc thì các nguồn chưa thống nhất (Myosotis, Nguyễn Xuân Khoát, và các buổi khác năm 1938).',
      hints: ['Kết luận nào gắn chữ "đầu tiên" với một định nghĩa?', 'Lời quả quyết của Út Lành và tờ lời chép vội không đỡ được kết luận.'],
      feedback: [
        { key: 'ket-luan:co', text: '"Chấm hết" là quá chắc: ngay ngày tháng còn có nguồn kể khác, và "người đầu tiên" vẫn còn tranh cãi.' },
        { key: 'ket-luan:tu-1900', text: 'Bản ghi âm năm 1900 là nhạc Việt có sẵn, chưa phải ca khúc sáng tác theo lối Tây.' },
        { key: 'yeu:ev:tn/loi-ut', text: 'Lời Út Lành chính là điều cần kiểm.' },
        { key: 'yeu:ev:tn/to-loi', text: 'Tờ lời chép vội là vật trong truyện.' },
        { key: 'thieu', text: 'Đúng hướng, nhưng cần cả định nghĩa của Gibbs lẫn việc các nguồn chưa thống nhất.' },
      ],
      skills: ['research', 'sources'],
      links: ['a:nhac-cai-cach-1938', 'a:cac-thoi-ky-am-nhac-viet-nam'],
      sources: ['a:nhac-cai-cach-1938'],
    },
  ],

  evidence: [
    { id: 'ev:tn/to-loi', title: 'Tờ lời chép vội', text: 'Lời Việt cho một bài hát Tây ở hậu trường gánh hát. Vật trong truyện.', kind: 'fiction', reliability: 'Tình tiết hư cấu của game.', verification: 'library' },
    { id: 'ev:tn/loi-ut', title: 'Lời Út Lành', text: '"Gánh mình là chỗ đầu tiên, chắc chắn luôn." Lời nhân vật trong truyện.', kind: 'anecdote', source: 'a:cac-thoi-ky-am-nhac-viet-nam', reliability: 'Bài thư viện ghi "ai là người đầu tiên" còn tranh cãi.', verification: 'library' },
    { id: 'ev:tn/dieu-tay', title: 'Bài ta theo điệu Tây', text: 'Đặt lời Việt cho nhạc Tây có lẻ tẻ từ đầu thế kỷ 20; thành phong trào giữa thập niên 1930 (Tư Chơi, Năm Châu k. 1933 – 1934).', kind: 'secondary', source: 'a:bai-ta-theo-dieu-tay', reliability: 'Các nguồn đưa mốc khác nhau; bài thư viện ghi đủ.', verification: 'library' },
    { id: 'ev:tn/gibbs', title: 'Jason Gibbs về buổi 9/6/1938', text: '"Lần trình diễn công khai, có phê bình, đầu tiên" của ca khúc sáng tác; người đương thời thấy chỉ thành công một phần.', kind: 'secondary', source: 'a:nhac-cai-cach-1938', date: '9/6/1938', reliability: 'Nhà nghiên cứu, với một định nghĩa hẹp và rõ.', verification: 'library' },
    { id: 'ev:tn/hoi-tri-tri', title: 'Buổi tháng 3/1938', text: 'Wikipedia tiếng Việt: buổi nói chuyện ở Hội Trí Tri tháng 3/1938, rồi hát ở trường Hoài Đức và rạp Palace.', kind: 'secondary', source: 'a:nhac-cai-cach-1938', date: '3/1938', reliability: 'Nguồn kể khác về cùng năm; có thể có nhiều buổi.', verification: 'library' },
    { id: 'ev:tn/myosotis', title: 'Myosotis và hai người tiên phong', text: 'Một nguồn gọi Myosotis là nhóm đầu tiên chơi bài của chính mình; một nghiên cứu trong nước coi Nguyễn Văn Tuyên và Nguyễn Xuân Khoát là hai người tiên phong.', kind: 'secondary', source: 'a:am-nhac-thoi-phap-thuoc', reliability: 'Mỗi ý chỉ một nguồn.', verification: 'library' },
    { id: 'ev:tn/tranh-cai', title: '"Người đầu tiên" còn tranh cãi', text: 'Bảng các thời kỳ ghi rõ: ai là "người đầu tiên" của tân nhạc còn tranh cãi.', kind: 'secondary', source: 'a:cac-thoi-ky-am-nhac-viet-nam', reliability: 'Tổng hợp của thư viện từ các nguồn đã dẫn.', verification: 'library' },
  ],

  items: [{ id: 'item:tn/to-loi', name: 'Tờ lời chép vội', kind: 'document', text: 'Lời Việt cho một bài Tây. (Vật trong truyện.)', links: ['a:bai-ta-theo-dieu-tay'] }],

  claims: [],
  completion: { quest: 'q:tn/nguoi-dau-tien', is: 'done' },
}
