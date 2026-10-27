import initialCover from '../../../assets/covers/piano-tre-em-initial.webp'
import g1Cover from '../../../assets/covers/piano-tre-em-1.webp'
import g2Cover from '../../../assets/covers/piano-tre-em-2.webp'
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
  g1: {
    scales: `Thuộc lòng, liền tiếng, đều (${SPEC_NOTE}). Đô trưởng 1 quãng tám, hai tay cùng lúc. Sol, Fa trưởng; La, Rê thứ (tự nhiên, hoà âm hoặc giai điệu — tuỳ chọn) 2 quãng tám, từng tay. Đô trưởng ngược chiều 1 quãng tám, hai tay từ âm chủ. Hợp âm rải Sol trưởng, La thứ 1 quãng tám, từng tay.`,
    sightReading: 'Đến 6 ô nhịp; nhịp 2/4, 3/4, 4/4; giọng Đô, Sol, Fa trưởng, Rê, La thứ; bất kỳ vị trí năm ngón nào; có thể có nốt trắng chấm dôi, móc đơn, dấu lặng, dấu luyến, dấu nhấn, mf, mp, to dần – nhỏ dần, dấu hoá bất thường (chỉ trong giọng thứ).',
    aural: 'A: vỗ phách, nhấn phách mạnh, nói nhịp hai hay ba. B: hát lại ba câu hai ô, giọng trưởng, âm chủ – bậc ba. C: nhận ra chỗ đổi cao độ (gần đầu hay gần cuối). D: trả lời về cường độ và cách chơi.',
    theory: 'Nhạc lý ABRSM Grade 1 (thi trực tuyến): năm hình nốt và dấu lặng, chấm dôi, dấu nối; nhịp 2/4, 3/4, 4/4; khoá Sol, Fa; dấu hoá; âm giai và hoá biểu Đô, Sol, Rê, Fa trưởng, bậc, quãng trên âm chủ (bằng số), hợp âm chủ; thuật ngữ; câu hỏi về một giai điệu.',
  },
  g2: {
    scales: `Thuộc lòng, liền tiếng, đều (${SPEC_NOTE}). Sol, Fa trưởng; La, Rê thứ (tự nhiên, hoà âm hoặc giai điệu) 2 quãng tám, hai tay cùng lúc. Rê, La trưởng; Mi, Sol thứ 2 quãng tám, từng tay. Đô trưởng ngược chiều 2 quãng tám. Cromatic bắt đầu từ Rê 1 quãng tám, từng tay. Hợp âm rải Rê, La trưởng; Mi, Sol thứ 2 quãng tám, từng tay.`,
    sightReading: 'Như Grade 1, thêm: hai tay chơi cùng lúc; giọng Rê trưởng, Mi và Sol thứ; nốt tròn, nhóm nốt đen chấm dôi – móc đơn, dấu nối, pp.',
    aural: 'A: vỗ phách, nhấn phách mạnh, nói nhịp hai hay ba. B: hát lại ba câu hai ô, giọng trưởng, âm chủ – âm át. C: nhận ra và mô tả chỗ đổi cao độ hoặc tiết tấu. D: trả lời về cường độ hoặc cách chơi, và về tốc độ.',
    theory: 'Nhạc lý ABRSM Grade 2: nhịp 2/2, 3/2, 4/2, 3/8; liên ba; hai dòng kẻ phụ; giọng song song; thứ hoà âm; âm giai và hoá biểu La, Si♭, Mi♭ trưởng và La, Mi, Rê thứ, hợp âm chủ, bậc và quãng trên âm chủ (bằng số); thêm thuật ngữ.',
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

const MUTOPIA = (no: number, by: string, license: string): Score['source'] => ({
  name: `Mutopia Project, bản số ${no} (người khắc: ${by})`,
  url: `https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=${no}`,
  license,
  note: 'khắc lại cho khổ sách (chỉ đổi trình bày)',
})

const g1: KidsBook = {
  id: 'tre-em-g1',
  grade: 'Grade 1',
  title: 'Piano & Nhạc lý cho Trẻ em',
  volume: 'Grade 1',
  subtitle: 'Hai tay cùng lúc, năm hình nốt, bốn giọng trưởng đầu tiên, âm giai thứ — nhạc lý và piano tương đương ABRSM Grade 1.',
  hue: 45,
  coverImage: g1Cover,
  months: [6, 9],
  preface: `Cuốn Grade 1 đi theo đề cương **nhạc lý ABRSM Grade 1** (bản từ 2020) và yêu cầu **piano ABRSM Grade 1** của đặc tả 2027 & 2028. Bạn học đủ năm hình nốt, chấm dôi và dấu nối, ba nhịp đơn, đọc nốt ở hai khoá, dấu hoá, âm giai trưởng và hoá biểu Đô – Sol – Rê – Fa, bậc, quãng và hợp âm chủ, thuật ngữ tiếng Ý; ở đàn, hai tay bắt đầu chơi cùng lúc và âm giai thứ xuất hiện.

**Phần I – III** là lý thuyết và kỹ thuật, mỗi bài có ví dụ nhạc, luyện tập và câu hỏi ôn tập. **Phần IV** in đủ bảy bản nhạc: hai bài học của **Clementi** (1801), bản *Petit prélude à la journée* của **Erik Satie** (1913), canon *Frère Jacques* cho hai tay, và bốn bài viết mới — rock, swing, ngũ cung. Nguồn và giấy phép của từng bản ở trang cuối.

Thời gian gợi ý 6 – 9 tháng với 20 – 30 phút tập mỗi ngày; đây là ước lượng của người biên soạn, không phải số liệu của ABRSM.`,
  parts: [
    {
      title: 'Nhịp và tiết tấu',
      intro: 'Năm hình nốt từ nốt tròn đến móc kép, dấu lặng, chấm dôi và dấu nối; ba nhịp đơn và cách nhóm nốt cho dễ đọc.',
      chapters: [
        { slug: 'tre-em-g1-truong-do', focus: 'Năm hình nốt, dấu lặng, âm tiết ta – ti-ti – ti-ka-ti-ka.' },
        { slug: 'tre-em-g1-cham-doi-va-dau-noi', focus: 'Nốt chấm dôi; dấu nối khác dấu luyến.' },
        { slug: 'tre-em-g1-nhip-va-nhom-not', focus: 'Nhịp 2/4, 3/4, 4/4; nhóm nốt theo phách; nhịp lấy đà.' },
      ],
      exercises: [
        'Vỗ và đọc bằng âm tiết: ta ti-ti | ti-ka-ti-ka ta | ta-i ti ta | ta-a-a.',
        'Viết một ô 3/4 có nốt đen chấm dôi; một ô 4/4 có dấu nối qua vạch nhịp sang ô sau.',
        'Nối gạch đúng cho tám móc đơn trong 4/4 và sáu móc đơn trong 3/4.',
        'Điền dấu lặng cho đủ ô: 4/4 chỉ có một nốt trắng ở phách 1.',
      ],
    },
    {
      title: 'Cao độ, giọng và hợp âm',
      intro: 'Đọc mọi nốt ở hai khoá; dấu thăng, giáng, bình; cung và nửa cung; âm giai trưởng và hoá biểu Đô, Sol, Rê, Fa; bậc, quãng và hợp âm chủ; thuật ngữ thường gặp; đọc hiểu một giai điệu.',
      chapters: [
        { slug: 'tre-em-g1-doc-not-hai-khoa', focus: 'Tên mọi nốt trên khuông; dòng kẻ phụ quanh Đô giữa.' },
        { slug: 'tre-em-g1-dau-hoa-cung-nua-cung', focus: 'Dấu hoá và hiệu lực trong ô nhịp; cung, nửa cung.' },
        { slug: 'tre-em-g1-am-giai-truong', focus: 'Công thức âm giai trưởng; hoá biểu bốn giọng.' },
        { slug: 'tre-em-g1-bac-quang-va-hop-am-chu', focus: 'Bậc, quãng trên âm chủ (bằng số), hợp âm chủ.' },
        { slug: 'tre-em-g1-thuat-ngu-va-ky-hieu', focus: 'Tốc độ, cường độ, cách chơi, nhắc lại.' },
        { slug: 'tre-em-g1-doc-hieu-giai-dieu', focus: 'Trả lời câu hỏi về một giai điệu.' },
      ],
      exercises: [
        'Viết âm giai Sol, Rê, Fa trưởng đi lên ở khoá Fa, có hoá biểu; đánh dấu các nửa cung.',
        'Gọi tên quãng (bằng số) từ âm chủ: Rê – La, Fa – Rê, Sol – Đô, Đô – Si.',
        'Viết hợp âm chủ của bốn giọng ở cả hai khoá.',
        'Dịch nghĩa: Andante, rit., a tempo, cresc., dolce, D.C. al Fine.',
        'Chọn một bài ở Phần IV, đặt và trả lời tám câu hỏi như bài "Đọc hiểu một giai điệu".',
      ],
    },
    {
      title: 'Ở đàn: kỹ thuật, thị tấu và nghe',
      intro: 'Âm giai, ngược chiều và hợp âm rải đúng yêu cầu ABRSM Grade 1; ba dạng âm giai thứ; bài đọc mới và bốn bài nghe.',
      chapters: [
        { slug: 'tre-em-g1-am-giai-va-ky-thuat', focus: 'Đô trưởng hai tay; Sol, Fa, La thứ, Rê thứ hai quãng tám; ngược chiều; hợp âm rải.' },
        { slug: 'tre-em-g1-thi-tau-va-nghe', focus: 'Thông số thị tấu Grade 1; bốn bài nghe.' },
      ],
      exercises: [
        'Thuộc lòng toàn bộ âm giai và hợp âm rải của Grade 1, mỗi ngày chơi hết một lượt.',
        'Mỗi ngày đọc một bài 6 ô nhịp mới ở giọng Sol hoặc Fa trưởng.',
        'Vỗ phách theo ba bản nhạc khác nhau và nói nhịp hai hay ba.',
      ],
    },
  ],
  scores: [
    {
      id: 'g1-clementi-aria', title: 'Aria', composer: 'Muzio Clementi', dates: '1752 – 1832', style: 'classical',
      about: 'Bài học số II trong *Introduction to the Art of Playing on the Piano Forte*, Op. 42 (1801) — cuốn sách dạy đàn Clementi viết cho người mới học; ngón tay theo bản in. Nhịp 2/4, Đô trưởng; tay trái chơi nốt trắng và nốt đen như bè trầm. Đoạn hai có **p** rồi **f**: làm rõ sự tương phản. Mỗi đoạn có dấu nhắc lại.',
      source: MUTOPIA(1938, 'Javier Ruiz-Alma', 'CC BY-SA 4.0'),
    },
    {
      id: 'g1-clementi-away', title: 'Away with Melancholy (giai điệu Mozart)', composer: 'Muzio Clementi soạn theo Mozart', dates: '1801', style: 'classical',
      about: 'Bài học số I của Op. 42: Clementi soạn cho người mới học một giai điệu của Mozart (sách ghi "by Mozart"). Tay phải giai điệu có móc đơn và nốt đen chấm dôi; tay trái giữ nốt trắng. Chú ý ngón tay ghi trên nốt, và hai mức **p** – **f** của hai đoạn.',
      source: MUTOPIA(1938, 'Javier Ruiz-Alma', 'CC BY-SA 4.0'),
    },
    {
      id: 'g1-satie-prelude', title: 'Petit prélude à la journée', composer: 'Erik Satie', dates: '1866 – 1925', style: 'c20',
      about: 'Bài đầu của *Enfantillages pittoresques* ("Trò trẻ con đầy màu sắc", 1913) — một trong ba tập nhạc Satie viết cho trẻ em, xen những câu chữ hóm hỉnh vào bản nhạc: *Se bien lever* (dậy cho đúng giờ), *se bien tenir* (ngồi cho ngay), *se bien coiffer* (chải tóc cho gọn)… Tay phải chỉ có những đôi móc đơn nhẹ như bước chân; tay trái chơi lệch phách. Giữ **p** suốt bài, đều như đồng hồ.',
      source: MUTOPIA(2132, 'Frédéric Dupernay', 'CC BY-SA 4.0'),
    },
    {
      id: 'g1-frere-jacques', title: 'Frère Jacques (canon hai tay)', composer: 'Dân ca Pháp', dates: 'giai điệu in khoảng 1780', style: 'folk',
      about: '**Canon**: tay trái chơi lại đúng giai điệu tay phải nhưng vào muộn hai ô, thấp hơn một quãng tám — hai tay "đuổi nhau". Tập từng tay thật vững trước, rồi ghép; nghe xem hai bè khớp nhau thế nào. Bè tay trái nhỏ hơn (**mp**) để giai điệu tay phải nổi lên.',
      source: arr('dân ca Pháp "Frère Jacques" (in khoảng 1780)'),
    },
    {
      id: 'g1-rock-nho', title: 'Rock nhỏ', composer: 'Lamar', style: 'new',
      about: 'Nhạc rock dựa trên **phách đều** và **dấu nhấn**: tay trái giữ quãng 5 đều từng phách như trống, tay phải nhấn ở phách 1 và phách 3. Đoạn ba (ô 9 – 12) chuyển sang **mf**, đoạn cuối trở lại **f**. Đừng chơi nhanh dần!',
      source: own(),
    },
    {
      id: 'g1-meo-di-dao', title: 'Mèo đi dạo', composer: 'Lamar', style: 'new',
      about: 'Bài **swing** đầu tiên: mỗi đôi móc đơn chơi **dài – ngắn** ("đuung-đa"), như ký hiệu ở đầu bài. Tay trái đi từng nốt đen như bước chân mèo. Thả lỏng, hơi nhún ở phách 2 và 4; dấu ngân ở ô cuối.',
      source: own('Phong cách swing'),
    },
    {
      id: 'g1-trong-hoi', title: 'Trống hội', composer: 'Lamar', style: 'new',
      about: 'Viết trên năm nốt **Sol – La – Si – Rê – Mi** (ngũ cung ở vị trí Sol). Tay trái là "trống" — nhấn nốt đầu mỗi ô; tay phải hát giai điệu. Đoạn ba nhỏ lại (**p**) như tiếng trống xa, rồi trở về **f**. Giai điệu mới, không trích dân ca nào.',
      source: own('Viết trên âm giai ngũ cung'),
    },
  ],
  exam: KIDS_EXAM.g1,
  checkpoint: [
    'Đọc, vỗ và viết đúng năm hình nốt, dấu lặng, chấm dôi, dấu nối trong 2/4, 3/4, 4/4.',
    'Đọc tên mọi nốt trên khuông ở cả hai khoá, kể cả Đô giữa.',
    'Viết âm giai và hoá biểu Đô, Sol, Rê, Fa trưởng; gọi tên bậc và quãng (bằng số) trên âm chủ; viết hợp âm chủ.',
    'Giải nghĩa các thuật ngữ tốc độ, cường độ, cách chơi trong sách.',
    'Chơi thuộc lòng âm giai, ngược chiều, hợp âm rải của Grade 1 đúng ngón.',
    'Chơi ít nhất ba bản ở Phần IV, trong đó một bản cổ điển, một bản thế kỷ XX hoặc mới.',
    'Vỗ phách và nói nhịp hai hay ba; hát lại một câu hai ô nhịp.',
  ],
}

const g2: KidsBook = {
  id: 'tre-em-g2',
  grade: 'Grade 2',
  title: 'Piano & Nhạc lý cho Trẻ em',
  volume: 'Grade 2',
  subtitle: 'Nhịp 2/2 và 3/8, liên ba, giọng thứ hoà âm, ba giọng trưởng mới, âm giai cromatic — nhạc lý và piano tương đương ABRSM Grade 2.',
  hue: 150,
  coverImage: g2Cover,
  months: [8, 12],
  preface: `Cuốn Grade 2 theo đề cương **nhạc lý ABRSM Grade 2** (bản từ 2020) và yêu cầu **piano ABRSM Grade 2** của đặc tả 2027 & 2028. Bạn học các nhịp có phách nốt trắng và phách móc đơn, liên ba, đọc đến hai dòng kẻ phụ, giọng song song và âm giai thứ hoà âm, ba giọng trưởng mới La – Si♭ – Mi♭; ở đàn, âm giai hai quãng tám hai tay, âm giai cromatic và hợp âm rải hai quãng tám.

**Phần IV** in đủ tám bản: hai minuet trong *Sổ tay Anna Magdalena Bach* (1725) — trong đó *Minuet Sol thứ* BWV Anh. 115 có trong danh sách bài thi ABRSM Grade 2 năm 2027 & 2028; hai bài trong *Album cho tuổi trẻ* Op. 68 của **Schumann**; *Berceuse* của **Satie** (1913); và ba bài viết mới — ballad, boogie, ngũ cung. Nguồn và giấy phép ở trang cuối.

Thời gian gợi ý 8 – 12 tháng là ước lượng của người biên soạn, không phải số liệu của ABRSM.`,
  parts: [
    {
      title: 'Nhịp và tiết tấu',
      intro: 'Số dưới của số chỉ nhịp đổi nghĩa: phách nốt trắng (2/2, 3/2, 4/2) và phách móc đơn (3/8); nhóm nốt; liên ba.',
      chapters: [
        { slug: 'tre-em-g2-nhip-moi', focus: 'Nhịp 2/2, 3/2, 4/2, 3/8; nốt tròn kép; cách nhóm nốt.' },
        { slug: 'tre-em-g2-lien-ba', focus: 'Liên ba móc đơn và nốt đen; liên ba có dấu lặng.' },
      ],
      exercises: [
        'Viết lại bốn ô 4/4 bất kỳ sang 2/2 và đếm lại theo phách nốt trắng.',
        'Vỗ xen kẽ "ti-ti" và "tri-o-la" trong 2/4 đến khi đều.',
        'Đặt số chỉ nhịp cho: ba móc đơn; nốt trắng + nốt đen + nốt đen (2/2); ba nốt trắng.',
      ],
    },
    {
      title: 'Cao độ, giọng và hợp âm',
      intro: 'Đọc đến hai dòng kẻ phụ; ba giọng trưởng mới và thứ tự dấu hoá; giọng thứ song song, âm giai thứ hoà âm; thuật ngữ mới; đọc hiểu một giai điệu khoá Fa.',
      chapters: [
        { slug: 'tre-em-g2-dong-ke-phu', focus: 'Hai dòng kẻ phụ trên và dưới mỗi khuông.' },
        { slug: 'tre-em-g2-giong-truong-moi', focus: 'La, Si♭, Mi♭ trưởng; thứ tự dấu thăng, dấu giáng.' },
        { slug: 'tre-em-g2-am-giai-thu', focus: 'Giọng song song; thứ hoà âm La, Mi, Rê; hợp âm chủ.' },
        { slug: 'tre-em-g2-thuat-ngu', focus: 'più, meno, sempre, subito; tính chất; D.S., coda, ngoặc 1 – 2.' },
        { slug: 'tre-em-g2-doc-hieu', focus: 'Đọc hiểu một giai điệu khoá Fa nhịp 2/2.' },
      ],
      exercises: [
        'Viết hoá biểu bảy giọng trưởng đã học ở hai khoá; dưới mỗi hoá biểu ghi giọng thứ song song.',
        'Viết âm giai La, Mi, Rê thứ hoà âm đi lên và đi xuống, có hoá biểu, ghi bậc 7 nâng.',
        'Viết hợp âm chủ của sáu giọng mới ở khoá Fa.',
        'Đọc tên mười nốt có hai dòng kẻ phụ trong các bài ở Phần IV.',
      ],
    },
    {
      title: 'Ở đàn: kỹ thuật, thị tấu và nghe',
      intro: 'Âm giai và hợp âm rải hai quãng tám, cromatic, ngược chiều theo yêu cầu ABRSM Grade 2; đọc bài hai tay; bốn bài nghe.',
      chapters: [
        { slug: 'tre-em-g2-ky-thuat', focus: 'Toàn bộ yêu cầu âm giai – hợp âm rải Grade 2.' },
        { slug: 'tre-em-g2-thi-tau-va-nghe', focus: 'Thị tấu hai tay; bài nghe về tốc độ và chỗ đổi.' },
      ],
      exercises: [
        'Thuộc lòng toàn bộ âm giai, cromatic, hợp âm rải của Grade 2; chơi hết một lượt mỗi ngày.',
        'Mỗi ngày đọc một bài hai tay mới ở giọng Rê trưởng hoặc Mi thứ.',
        'Nghe ba bản nhạc, với mỗi bản nói tốc độ có đổi không và cường độ ra sao.',
      ],
    },
  ],
  scores: [
    {
      id: 'g2-petzold-minuet-g', title: 'Minuet Sol trưởng, BWV Anh. 114', composer: 'Christian Petzold (trước đây gán cho J. S. Bach)', dates: '1677 – 1733', style: 'classical',
      about: 'Một trong những bản nổi tiếng nhất của *Sổ tay Anna Magdalena Bach* (1725). Lâu nay in dưới tên Bach; nay được xác định là của Christian Petzold, nghệ sĩ organ ở Dresden. Hai bè độc lập: tay trái là một giai điệu thứ hai chứ không chỉ đệm. Minuet là điệu nhảy nhịp 3/4 trang nhã — nhấn nhẹ phách 1, chơi móc đơn đều và liền.',
      source: { name: 'Mutopia Project, bản số 75 (người khắc: Allen Garvin)', url: 'https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=75', license: 'Phạm vi công cộng', note: 'khắc lại cho khổ sách (chỉ đổi trình bày)' },
    },
    {
      id: 'g2-petzold-minuet-g-minor', title: 'Minuet Sol thứ, BWV Anh. 115', composer: 'Christian Petzold', dates: '1677 – 1733', style: 'classical',
      about: 'Bản "anh em" giọng thứ đi liền sau Minuet Sol trưởng trong sổ tay — có trong danh sách bài thi ABRSM Grade 2 năm 2027 & 2028 (ghi tên "C. Petzold, Minuet No. 2 in G minor"). Chú ý Fa♯ (bậc 7 nâng của Sol thứ hoà âm) và các dấu láy (*tr*) — ở cấp này có thể chơi đơn giản hoặc bỏ qua. Bản in ở đây không có ngón tay; hãy cùng giáo viên ghi ngón.',
      source: { name: 'Mutopia Project, bản số 76 (người khắc: Allen Garvin)', url: 'https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=76', license: 'Phạm vi công cộng', note: 'khắc lại cho khổ sách (chỉ đổi trình bày)' },
    },
    {
      id: 'g2-schumann-melodie', title: 'Melodie, Op. 68 số 1', composer: 'Robert Schumann', dates: '1810 – 1856', style: 'classical',
      about: 'Bài mở đầu *Album für die Jugend* (Album cho tuổi trẻ, 1848) — tập nhạc Schumann viết cho các con gái. Tay phải hát một giai điệu dài, tay trái đệm móc đơn liền như dòng nước: giữ tay trái **nhỏ hơn** để giai điệu nổi lên. Chữ *pas vite* (bản in Pháp) nghĩa là "không nhanh".',
      source: MUTOPIA(647, 'Mutopia Project', 'CC BY-SA 2.5'),
    },
    {
      id: 'g2-schumann-marsch', title: 'Soldatenmarsch, Op. 68 số 2', composer: 'Robert Schumann', dates: '1810 – 1856', style: 'classical',
      about: 'Hành khúc người lính: hợp âm nảy (staccato) trên nhịp chấm dôi – móc kép, rất đều và "đứng thẳng". Chữ *Gaiement et bien rythmé* nghĩa là "vui vẻ và đúng nhịp". Tập từng tay chậm, giữ dấu lặng thật đủ để nhạc có tiếng "bước chân".',
      source: MUTOPIA(650, 'Mutopia Project', 'CC BY-SA 2.5'),
    },
    {
      id: 'g2-satie-berceuse', title: 'Berceuse', composer: 'Erik Satie', dates: '1866 – 1925', style: 'c20',
      about: 'Bài hát ru trong *Enfantillages pittoresques* (1913). Satie viết lời kể dưới khuông: "Ngày đã hết, Pierrot đi ngủ… Cậu bé đã rất ngoan… Mẹ hôn cậu…" — đừng đọc to khi chơi, nhưng để câu chuyện dẫn cách chơi: rất nhỏ (**pp**), chậm (*Lent*), hợp âm tay phải ngân dài trên tay trái đi đều. *Retenir beaucoup* — chậm lại nhiều; *Reprendre le mouvement* — trở lại tốc độ.',
      source: MUTOPIA(2132, 'Frédéric Dupernay', 'CC BY-SA 4.0'),
    },
    {
      id: 'g2-ballad-mua', title: 'Ballad mưa', composer: 'Lamar', style: 'new',
      about: 'Ballad kiểu nhạc pop: vòng hợp âm **La thứ – Fa – Đô – Sol** quen thuộc của rất nhiều ca khúc. Tay trái rải hợp âm bằng móc đơn đều, tay phải hát giai điệu nốt dài. Chơi chậm, liền, như hát; đoạn ba lên **mf** rồi lắng lại.',
      source: own('Phong cách pop ballad'),
    },
    {
      id: 'g2-boogie', title: 'Boogie nhỏ', composer: 'Lamar', style: 'new',
      about: 'Boogie-woogie dựa trên **tay trái đi bộ** (Đô – Mi – Sol – La – Si♭ – La – Sol – Mi) theo khung 12 ô blues. Tay phải chơi swing (đôi móc đơn dài – ngắn) như ở bài *Mèo đi dạo*. Tập tay trái đến khi tự động rồi mới ghép tay phải.',
      source: own('Khung 12 ô nhịp blues, phong cách boogie-woogie'),
    },
    {
      id: 'g2-do-chieu', title: 'Đò chiều', composer: 'Lamar', style: 'new',
      about: 'Viết trên năm nốt **La – Đô – Rê – Mi – Sol** (ngũ cung La) với **liên ba nốt đen** như nhịp mái chèo. Tay trái giữ quãng 5 ngân. Giai điệu mới, gợi màu sông nước, không trích dân ca nào.',
      source: own('Viết trên âm giai ngũ cung'),
    },
  ],
  exam: KIDS_EXAM.g2,
  checkpoint: [
    'Đếm, vỗ và viết đúng nhịp 2/2, 3/2, 4/2, 3/8 và liên ba.',
    'Đọc nốt đến hai dòng kẻ phụ ở cả hai khoá.',
    'Viết âm giai, hoá biểu, hợp âm chủ của La, Si♭, Mi♭ trưởng và La, Mi, Rê thứ hoà âm; nói giọng song song.',
    'Chơi thuộc lòng toàn bộ âm giai, cromatic, hợp âm rải Grade 2.',
    'Chơi ít nhất ba bản ở Phần IV, trong đó một minuet và một bài thế kỷ XX hoặc mới.',
    'Hát lại câu hai ô trong khoảng âm chủ – âm át; nhận ra chỗ đổi tiết tấu.',
  ],
}

export const KIDS_BOOKS: KidsBook[] = [initial, g1, g2]

/** The volume holding a chapter (old links to the single children's course land there; else the first volume). */
export const kidsBookOf = (slug?: string) => KIDS_BOOKS.find((b) => b.parts.some((p) => p.chapters.some((c) => c.slug === slug)))?.id ?? KIDS_BOOKS[0].id
