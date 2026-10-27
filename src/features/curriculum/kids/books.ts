import initialCover from '../../../assets/covers/piano-tre-em-initial.webp'
import type { ExamSpec, KidsBook, Score } from '../types'

/**
 * Piano cho Trẻ em: the children's course split into one volume per ABRSM grade (Initial – Grade 5).
 * Theory chapters are library articles written for the books (content/kids-*.ts); the pieces at the back
 * are engraved in full from music/tp/<id>.ly (scripts/sheets/build.py) and their sources are listed on the
 * last page. Exam requirements are copied from ABRSM's Piano Practical Grades Qualification Specification
 * 2027 & 2028 (in force from 1 January 2027).
 */
export const ABRSM_SPEC = 'https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf'
const SPEC_NOTE = 'theo đặc tả ABRSM Piano Practical Grades 2027 & 2028'

export const KIDS_EXAM: Record<string, ExamSpec> = {
  initial: {
    scales: `Thuộc lòng, liền tiếng, đều (${SPEC_NOTE}). Âm giai Đô trưởng và Rê thứ (tự nhiên, hoà âm hoặc giai điệu — tuỳ chọn), 1 quãng tám, từng tay. Âm giai ngược chiều Đô trưởng, tầm một quãng 5, hai tay cùng bắt đầu từ âm chủ. Hợp âm rải Đô trưởng, Rê thứ, tầm một quãng 5, từng tay.`,
    sightReading: 'Bài 4 ô nhịp, nhịp 4/4, giọng Đô trưởng hoặc Rê thứ; mỗi tay chơi riêng trong vị trí năm ngón (từ âm chủ đến âm át); có thể có câu legato, staccato, f và p. Có nửa phút xem và chơi thử.',
    aural: 'A: vỗ theo phách một đoạn nhạc. B: vỗ lại tiết tấu hai câu hai ô (nhịp ba hoặc bốn). C: hát lại hai câu một ô nhịp 4/4, giọng trưởng, trong khoảng âm chủ – bậc ba. D: trả lời về một đặc điểm — to/nhỏ hoặc liền/tách tiếng.',
    theory: 'Chưa có thi nhạc lý ở cấp này. Sách dạy trường độ, ô nhịp, khuông, khoá Sol – Fa — phần đầu của nhạc lý ABRSM Grade 1.',
  },
}

const own = (note?: string): Score['source'] => ({ name: 'Người biên soạn (Lamar) viết cho giáo trình', license: 'Bản quyền của người biên soạn', note })
const arr = (tune: string): Score['source'] => ({ name: 'Bản phối của người biên soạn (Lamar)', license: `Giai điệu thuộc phạm vi công cộng — ${tune}` })

const initial: KidsBook = {
  id: 'tre-em-initial',
  grade: 'Initial',
  title: 'Piano & Nhạc lý cho Trẻ em',
  volume: 'Initial',
  subtitle: 'Cuốn mở đầu: nghe – vận động – tìm đường trên bàn phím, đọc nhạc đầu tiên, vị trí năm ngón — tương đương ABRSM Initial Grade.',
  hue: 25,
  coverImage: initialCover,
  months: [5, 7],
  preface: `Cuốn Initial gộp hai chặng đầu của giáo trình cũ — "Chuẩn bị" và "ABRSM Initial" — thành một năm học đầu tiên. Bạn nhỏ đi theo trình tự **âm thanh trước ký hiệu**: nghe, hát, vỗ, vận động và chơi bằng tai trước, rồi mới đọc trên giấy điều mình đã nghe.

Sách có bốn phần. **Phần I** làm quen âm thanh và cây đàn; **Phần II** học đọc trường độ, ô nhịp, khuông và nốt mốc; **Phần III** chơi ở vị trí năm ngón, cường độ, legato – staccato, âm giai đầu tiên, thị tấu và luyện tai. **Phần IV** in đầy đủ tám bản nhạc của cấp — dân ca thế giới, giai điệu cổ điển soạn dễ và những bài viết mới cho cuốn sách — để học và biểu diễn. Nguồn của từng bản nằm ở trang cuối.

Mỗi bài có ví dụ nhạc khắc riêng cho sách, phần luyện tập và **gợi ý cho phụ huynh và giáo viên**. Trẻ 5 – 8 tuổi nên học cùng người lớn: cha mẹ không cần biết nhạc, chỉ cần ngồi cạnh, hỏi "con nghe thấy gì?" và cùng chơi các trò chơi trong sách.

Yêu cầu kỳ thi ghi ở cuối sách chép theo đặc tả chính thức của ABRSM cho năm 2027 – 2028; các bài thi của ABRSM là tác phẩm còn bản quyền nên không in ở đây — tiết mục trong sách cùng trình độ, dùng để học và biểu diễn.`,
  parts: [
    {
      title: 'Âm thanh và cây đàn',
      intro: 'Nghe các tính chất của âm thanh, giữ phách bằng cơ thể, tìm đường trên bàn phím nhờ các nhóm phím đen, ngồi đúng và biết số ngón; rồi ngẫu hứng trên năm phím đen — nơi không có nốt sai.',
      chapters: [
        { slug: 'tre-em-am-thanh-quanh-ta', focus: 'Phân biệt cao – thấp, dài – ngắn, to – nhỏ, nhanh – chậm bằng tai và trên đàn.' },
        { slug: 'tre-em-phach-va-nhip', focus: 'Giữ phách đều; nhận ra nhịp đi hai và nhịp đi ba.' },
        { slug: 'tre-em-ban-phim', focus: 'Tìm mọi phím Đô, Fa; gọi tên bảy phím trắng.' },
        { slug: 'tre-em-tu-the-va-ngon-tay', focus: 'Ngồi đúng, bàn tay tròn, số ngón hai tay.' },
        { slug: 'tre-em-phim-den-ngu-cung', focus: 'Chơi và ngẫu hứng hỏi – đáp trên năm phím đen.' },
      ],
      exercises: [
        'Chơi "mưa nhỏ – sấm to" ở hai đầu bàn phím, rồi nói đâu là cao, đâu là thấp.',
        'Vỗ phách theo ba bài hát quen; với mỗi bài, dậm – vỗ để tìm xem đó là nhịp đi hai hay đi ba.',
        'Tìm và chơi tất cả phím Đô, rồi tất cả phím Fa, gọi tên to.',
        'Người lớn đọc "tay trái ngón 4", "tay phải ngón 2"… bạn giơ đúng ngón.',
        'Ngẫu hứng hỏi – đáp trên phím đen trong một phút cùng người lớn.',
      ],
    },
    {
      title: 'Đọc nhạc đầu tiên',
      intro: 'Ghi lại điều đã nghe: hình nốt và dấu lặng cho trường độ, vạch nhịp và số chỉ nhịp cho phách mạnh, khuông và khoá cho cao độ — rồi đọc nốt bằng vài nốt mốc và hướng đi của giai điệu.',
      chapters: [
        { slug: 'tre-em-not-den-not-trang', focus: 'Nốt đen, trắng, trắng chấm dôi, tròn và các dấu lặng tương ứng.' },
        { slug: 'tre-em-o-nhip-va-so-chi-nhip', focus: 'Ô nhịp, vạch nhịp, vạch kết; nhịp 2/4, 3/4, 4/4.' },
        { slug: 'tre-em-khuong-nhac-va-khoa', focus: 'Dòng và khe; khoá Sol, khoá Fa; khuông lớn và Đô giữa.' },
        { slug: 'tre-em-not-moc', focus: 'Năm nốt mốc; đọc liền bậc, nhảy bậc, lặp lại.' },
      ],
      exercises: [
        'Đọc bằng âm tiết rồi vỗ: ta ta ta-a | ta-a-a ta | ta-a-a-a.',
        'Viết số chỉ nhịp cho ba ô: nốt trắng chấm dôi; hai nốt đen; nốt trắng và hai nốt đen.',
        'Vẽ khoá Sol và khoá Fa ba lần; đánh dấu nốt Sol (dòng 2) và Fa (dòng 4).',
        'Đọc thật nhanh năm thẻ nốt mốc, rồi chơi đúng phím.',
        'Người lớn chơi hai nốt: bạn nói liền bậc, nhảy bậc hay lặp lại.',
      ],
    },
    {
      title: 'Chơi đàn',
      intro: 'Vị trí năm ngón ở Đô, Đô giữa và Sol; bốn mức to – nhỏ, liền tiếng và nảy tiếng; hai tay lần lượt; âm giai và hợp âm rải của kỳ thi Initial; cách đọc một bài mới và các trò chơi luyện tai.',
      chapters: [
        { slug: 'tre-em-vi-tri-nam-ngon', focus: 'Vị trí Đô, Đô giữa, Sol; gọi tên nốt khi chơi.' },
        { slug: 'tre-em-cuong-do-va-cach-choi', focus: 'p, mp, mf, f; legato và staccato.' },
        { slug: 'tre-em-hai-tay-va-am-giai-dau-tien', focus: 'Hai tay hỏi – đáp; âm giai Đô trưởng, Rê thứ; ngược chiều; hợp âm rải.' },
        { slug: 'tre-em-thi-tau-va-nghe', focus: 'Ba mươi giây chuẩn bị; bốn bài nghe của kỳ thi.' },
      ],
      exercises: [
        'Chơi 1 – 2 – 3 – 4 – 5 – 4 – 3 – 2 – 1 ở vị trí Đô và vị trí Sol, từng tay, hát tên nốt.',
        'Chơi năm nốt vị trí Đô với bốn mức p, mp, mf, f; lần lượt legato rồi staccato.',
        'Âm giai Đô trưởng và Rê thứ một quãng tám, từng tay, thuộc lòng.',
        'Mỗi ngày đọc một bài 4 ô nhịp chưa từng thấy, theo năm câu hỏi chuẩn bị.',
        'Người lớn hát một câu Đô – Rê – Mi, bạn hát lại ngay, đúng phách.',
      ],
    },
  ],
  scores: [
    {
      id: 'i-mua-roi', title: 'Mưa rơi', composer: 'Lamar', style: 'new',
      about: 'Bài mở đầu trên **năm nốt ngũ cung Đô – Rê – Mi – Sol – La**, tay phải ở vị trí Đô (ngón 5 vươn lên La). Tay trái giữ quãng 5 Đô – Sol suốt bài như tiếng mưa đều. Chơi nhẹ (p), liền tiếng; câu thứ ba to dần lên mf rồi lắng lại. Nghe xem bài có "màu" giống những làn điệu Việt quen thuộc không.',
      source: own('Viết trên âm giai ngũ cung'),
    },
    {
      id: 'i-mary', title: 'Mary Had a Little Lamb', composer: 'Đồng dao Mỹ', dates: 'giai điệu in từ thập niên 1830',
      style: 'folk',
      about: 'Ba nốt Mi – Rê – Đô cho tay phải, rồi thêm Sol. Tay trái chỉ chơi nốt tròn Đô và Sol: đếm đủ bốn phách mỗi ô. Hát lời hoặc tên nốt trước khi chơi.',
      source: arr('giai điệu dân gian Mỹ, phổ biến qua ấn bản của Lowell Mason (thập niên 1830)'),
    },
    {
      id: 'i-au-clair', title: 'Au clair de la lune', composer: 'Dân ca Pháp', dates: 'thế kỷ XVIII',
      style: 'folk',
      about: 'Bài hát ru Pháp "Dưới ánh trăng". Câu 1 – 2 tay phải ở vị trí Đô; câu 3 giai điệu chuyển xuống **tay trái** (khuông dưới, ngón 1 trên Rê) — tay phải nghỉ nhưng vẫn đếm; câu 4 tay phải trở lại. Giữ legato mềm như hát.',
      source: arr('dân ca Pháp thế kỷ XVIII'),
    },
    {
      id: 'i-lightly-row', title: 'Lightly Row (Hänschen klein)', composer: 'Dân ca Đức', dates: 'thế kỷ XIX',
      style: 'folk',
      about: 'Giai điệu đi liền bậc và lặp nốt; tay phải ngón 5 bắt đầu trên Sol. Đoạn giữa (ô 9 – 12) chơi **p**, đoạn cuối trở lại **mf**. Tay trái đổi Đô – Sol: nhìn trước để biết ô nào đổi.',
      source: arr('dân ca Đức "Hänschen klein" (lời F. Wiedemann, thế kỷ XIX)'),
    },
    {
      id: 'i-twinkle', title: 'Twinkle, Twinkle, Little Star', composer: 'Giai điệu Pháp "Ah ! vous dirai-je, maman"', dates: 'in năm 1761',
      style: 'folk',
      about: 'Giai điệu mà Mozart dùng cho 12 biến tấu K. 265. Tay phải vươn ngón 5 lên La ở ô 2 rồi trở về. Tay trái có ô chơi hai nốt trắng: đếm "1 – 2, 3 – 4".',
      source: arr('giai điệu Pháp, in lần đầu năm 1761'),
    },
    {
      id: 'i-ode-to-joy', title: 'Khúc hoan ca (Ode to Joy)', composer: 'Ludwig van Beethoven', dates: '1770 – 1827',
      style: 'classical',
      about: 'Chủ đề chương cuối Giao hưởng số 9 (1824), **soạn giản lược** cho cấp Initial: bỏ nốt chấm dôi và móc đơn của nguyên bản. Tay phải gần như toàn liền bậc trong vị trí Đô. Ba mức cường độ mf – p – f kể một câu chuyện: hãy làm rõ sự khác biệt.',
      source: arr('chủ đề của Beethoven, Giao hưởng số 9, chương IV (1824); soạn giản lược'),
    },
    {
      id: 'i-blues', title: 'Blues năm ngón', composer: 'Lamar', style: 'new',
      about: 'Mười hai ô nhịp theo **khung blues** (Đô – Fa – Đô – Sol – Fa – Đô). Tay phải ở vị trí Đô, thêm phím đen **Mi♭** — "nốt xanh" của blues — chơi bằng ngón 2, rồi trượt sang Mi bằng ngón 3. Tay trái giữ quãng 5. Chơi chậm, hơi nhún; thử tự đổi tay phải ở ô 9 – 12 thành câu của riêng bạn.',
      source: own('Khung 12 ô nhịp blues'),
    },
    {
      id: 'i-khuc-ru', title: 'Khúc ru', composer: 'Lamar', style: 'new',
      about: 'Bài ru nhịp 3/4 trên năm nốt **Rê – Fa – Sol – La – Đô** — một màu ngũ cung gần với điệu ru Việt, nhưng là giai điệu mới, không trích dân ca nào. Tay trái đưa nhẹ hai nốt Rê – La như chiếc võng. Nốt trắng chấm dôi giữ đủ ba phách; dấu nối ở ô 7 – 8 nghĩa là giữ nốt qua vạch nhịp.',
      source: own('Viết trên âm giai ngũ cung'),
    },
  ],
  exam: KIDS_EXAM.initial,
  checkpoint: [
    'Vỗ đúng phách theo nhạc và nhận ra nhịp đi hai hay đi ba.',
    'Tìm mọi phím Đô, Fa; gọi tên bảy phím trắng.',
    'Đọc và vỗ nốt đen, trắng, trắng chấm dôi, tròn và các dấu lặng; giải thích 2/4, 3/4, 4/4.',
    'Đọc nốt trong vị trí Đô ở cả khoá Sol và khoá Fa bằng nốt mốc.',
    'Chơi thuộc lòng âm giai Đô trưởng, Rê thứ một quãng tám từng tay, âm giai ngược chiều và hợp âm rải của cấp.',
    'Chơi được ít nhất ba bản ở Phần IV với đúng cường độ và cách chơi ghi trong bản nhạc.',
    'Hát lại một câu ngắn Đô – Rê – Mi người lớn vừa hát.',
  ],
}

export const KIDS_BOOKS: KidsBook[] = [initial]

/** The volume holding a chapter (old links to the single children's course land there; else the first volume). */
export const kidsBookOf = (slug?: string) => KIDS_BOOKS.find((b) => b.parts.some((p) => p.chapters.some((c) => c.slug === slug)))?.id ?? KIDS_BOOKS[0].id
