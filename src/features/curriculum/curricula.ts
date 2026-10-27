import adultsCover from '../../assets/covers/piano-nguoi-lon.webp'
import type { Curriculum, ExamSpec } from './types'

/**
 * The adults course (the children's course is now one book per ABRSM grade: kids/books.ts). Every lesson is an article of the theory library; the order follows the
 * comparison in 'danh-gia-giao-trinh-piano-va-nhac-ly' (Hood 1982, DiCienzo 2019, Kodály sequence,
 * exam syllabi). Each graded level is mapped to an ABRSM piano grade. Months come from ABRSM's
 * published Total Qualification Time per grade divided by an assumed practice rate (stated in each
 * intro); piece notes name the listing they rely on (ABRSM syllabus year, Henle difficulty level,
 * RCM level) or say that none was found.
 */

/** What each ABRSM practical grade asks for, as far as it could be checked. Low-confidence items say so. */
export const EXAM: Record<string, ExamSpec> = {
  initial: {
    scales: 'Đô trưởng và Rê thứ một quãng 8 từng tay, Đô trưởng ngược chiều và hợp âm rải — theo bản tóm tắt đặc tả ABRSM 2025–26; Lamar chưa đối chiếu bản PDF, hãy kiểm tra trong sách Piano Scales & Arpeggios của ABRSM.',
    sightReading: 'Bài rất ngắn trong vị trí năm ngón. Thông số chính thức in ở bìa sau sách ABRSM "More Piano Sight-Reading" — chưa xác minh.',
    aural: 'Dạng bài cho Initial chưa xác minh; luyện giữ phách, hát lại, nhận ra thay đổi như ở Grade 1.',
    theory: 'Chưa cần thi. Học trường độ, khuông, khoá Sol – Fa — phần đầu của nhạc lý ABRSM Grade 1.',
  },
  g1: {
    scales: 'Các nguồn tóm tắt mâu thuẫn nhau (độ tin cậy thấp): khoảng Đô, Sol, Fa trưởng; La, Rê thứ; Đô trưởng ngược chiều; hợp âm rải một quãng 8. Xem danh sách chính xác trong sách ABRSM (bản sửa 2021, vẫn dùng đến 2028).',
    sightReading: 'Bài ngắn ở giọng ít dấu. Thông số chính thức chưa xác minh.',
    aural: 'Bốn bài (Grade 1 – 3): vỗ phách nhịp 2 hoặc 3, nhấn phách mạnh; hát lại câu ngắn; nhận ra chỗ đổi cao độ hoặc tiết tấu; trả lời câu hỏi về cường độ, cách chơi.',
    theory: 'Nhạc lý ABRSM Grade 1 (thi trực tuyến, trắc nghiệm): tiết tấu, cao độ, giọng và âm giai, quãng, hợp âm, thuật ngữ – ký hiệu, âm nhạc trong ngữ cảnh.',
  },
  g2: {
    scales: 'Có Rê và La trưởng hai quãng 8 từng tay (độ tin cậy thấp). Danh sách đầy đủ xem sách ABRSM.',
    sightReading: 'Thông số chính thức chưa xác minh.',
    aural: 'Như Grade 1 – 3: vỗ phách, hát lại, nhận ra thay đổi, nói về đặc điểm bản nhạc.',
    theory: 'Nhạc lý Grade 2 (theo nguồn thứ ba): nhịp 2/2, 3/2, 4/2, 3/8; liên ba; thứ hoà âm; giọng La, Si♭, Mi♭ trưởng và La, Mi, Rê thứ; hợp âm chủ; quãng theo số.',
  },
  g3: {
    scales: 'Từ 2021 (theo bài tổng hợp thay đổi của một giáo viên, chưa đối chiếu ABRSM): Mi trưởng chỉ chơi ngược chiều; Si♭ và Mi♭ trưởng từng tay; cromatic ngược chiều bắt đầu từ Rê; hợp âm rải Rê trưởng, Mi thứ hai tay.',
    sightReading: 'Đến khoảng 8 ô nhịp (nguồn thứ ba, không phải ABRSM).',
    aural: 'Như Grade 1 – 3, câu hỏi cuối thêm tốc độ, trưởng – thứ, phong cách.',
    theory: 'Nhạc lý Grade 3 (nguồn thứ ba): giọng đến 4 dấu; thứ hoà âm và thứ giai điệu; nhịp kép 6/8, 9/8, 12/8; quãng theo số và tính chất.',
  },
  g4: {
    scales: 'Từ 2021 (bài tổng hợp của một giáo viên, chưa đối chiếu): Si và La♭ trưởng chỉ từng tay; thêm Fa♯ trưởng từng tay; Fa thứ chỉ từng tay.',
    sightReading: 'Khoảng 8 ô nhịp, có thể có 6/8 (nguồn thứ ba).',
    aural: 'Grade 4 – 5: hát hoặc chơi lại một giai điệu từ trí nhớ; hát xướng âm vài nốt từ bản nhạc; nói về cường độ, cách chơi, tốc độ, điệu thức, tính chất, phong cách.',
    theory: 'Nhạc lý Grade 4 (nguồn thứ ba): tên kỹ thuật của các bậc, âm giai cromatic, khoá Đô alto, ký hiệu hoa mỹ.',
  },
  g5: {
    scales: 'Theo trang Grade 5 của ABRSM: âm giai cùng chiều 3 quãng 8; ngược chiều 2 quãng 8 theo một nhóm giọng (Fa, Rê♭/Đô♯ — hoặc Fa♯, Si♭, trưởng và thứ hoà âm); cromatic cùng chiều 3 quãng 8; cromatic ngược chiều 2 quãng 8 bắt đầu từ Rê và La♭; cùng hợp âm rải.',
    sightReading: '8 – 12 ô nhịp; giọng đến 4 dấu trưởng, 3 dấu thứ (nguồn thứ ba).',
    aural: 'Như Grade 4: chơi/hát lại giai điệu, xướng âm từ bản nhạc, nói về đặc điểm và phong cách.',
    theory: 'Nhạc lý Grade 5 — điều kiện bắt buộc trước khi thi Grade 6 – 8 (hoặc Practical Musicianship / Jazz Grade 5): nhịp lẻ (5/4, 7/8), chia phách bất thường, các loại kết, khoá Đô tenor.',
  },
  g6: {
    scales: 'Danh sách chi tiết Grade 6 chưa xác minh — xem sách ABRSM Piano Scales & Arpeggios (bản 2021).',
    sightReading: '12 – 16 ô nhịp, giọng đến 4 dấu cả trưởng lẫn thứ (nguồn thứ ba).',
    aural: 'Grade 6: hát một giai điệu từ bản nhạc có đệm; nhận ra kết hoàn toàn, nửa kết, kết lừa; trả lời về một bản nhạc.',
    theory: 'Nhạc lý Grade 6 (không bắt buộc; nguồn thứ ba): hoà âm trưởng – thứ, đặt hợp âm cho giai điệu, bass số bốn bè.',
  },
  g7: {
    scales: 'Danh sách chi tiết Grade 7 chưa xác minh — xem sách ABRSM.',
    sightReading: '16 – 20 ô nhịp, có thể có nhịp 7/8, 7/4 (nguồn thứ ba).',
    aural: 'Grade 7: như Grade 6, thêm nhận ra chuyển giọng sang át, hạ át, giọng song song.',
    theory: 'Nhạc lý Grade 7 (nguồn thứ ba): bass số có hợp âm bảy và một số hợp âm cromatic.',
  },
  g8: {
    scales: 'Theo bản chép của một giáo viên và đính chính của ABRSM (cần kiểm tra lại): 4 quãng 8 trên Đô, Rê, Si, Fa♯, Fa, Mi♭, La♭, Rê♭; âm giai cách quãng 3 và quãng 6; cromatic cách quãng 3 thứ; âm giai quãng 3 legato (Đô, Si♭ trưởng); âm giai toàn cung; hợp âm rải, bảy át, bảy giảm.',
    sightReading: 'Khoảng một trang; có hợp âm ba nốt ở mỗi tay, hợp âm rải, hoa mỹ đơn giản, đổi tốc độ (đặc tả ABRSM).',
    aural: 'Grade 8: hát từ bản nhạc; nhận ra kết (thêm kết plagal), chuyển giọng, hợp âm; trả lời về một bản nhạc.',
    theory: 'Nhạc lý Grade 8 (nguồn thứ ba): mọi hợp âm diatonic và cromatic thông dụng; viết tiếp trio sonata Baroque có bass số.',
  },
}

export const CURRICULA: Curriculum[] = [
  {
    id: 'nguoi-lon',
    title: 'Piano & Nhạc lý cho Người lớn',
    subtitle: 'Chín cấp từ Initial đến trình độ tương đương ABRSM Grade 8, cộng ba cấp đệm hát nâng cao.',
    author: 'Lamar',
    audience: 'Người lớn mới học hoặc quay lại',
    hue: 255,
    glyph: '𝄢',
    coverImage: adultsCover,
    intro:
      'Người lớn học vì những lý do rất khác nhau — thực hiện ước mơ, thư giãn, đệm hát cho gia đình — và bỏ học chủ yếu vì thiếu thời gian hoặc buổi học nhàm. Giáo trình vì vậy đưa hợp âm và đệm hát vào sớm, học nhạc lý ngay trên phím đàn, và mỗi cấp tương đương một grade piano ABRSM từ Initial đến Grade 8. Thời lượng lấy từ "tổng thời gian học" (TQT) ABRSM công bố — Initial 40 giờ, Grade 1 60, 2: 90, 3: 120, 4: 150, 5: 180, 6: 220, 7: 270, 8: 320 — chia cho nhịp học giả định 16 – 22 giờ mỗi tháng (một buổi học và 30 – 45 phút tập gần như mỗi ngày). ABRSM gọi đây là ước tính trung bình; việc coi mỗi grade là phần học thêm kể từ grade trước là cách hiểu của Lamar. Muốn thi Grade 6 – 8 phải đậu nhạc lý Grade 5 (hoặc Practical Musicianship, Jazz Grade 5) — vì vậy cấp Grade 5 có chương nhạc lý riêng. ABRSM không có kỳ thi đệm hát; ba cấp đệm hát cuối tham khảo các kỳ thi Rock & Pop của Trinity, Rockschool, bài thi hoà âm đàn phím của LCM và bài lead sheet của RCM, và có thể học song song từ Grade 5.',
    principles: [
      { title: 'Mục tiêu do người học đặt', text: 'Theo nguyên tắc dạy người lớn (andragogy) của Knowles: cùng lập kế hoạch, giáo viên là người hỗ trợ.' },
      { title: 'Hợp âm sớm, đọc nhạc vững', text: 'Đệm hát từ Grade 1 để có thành quả nhanh, nhưng vẫn đọc khuông lớn — vì chưa có nghiên cứu nào cho thấy cách nào hơn.' },
      { title: 'Đủ bốn phần của kỳ thi', text: 'Mỗi cấp có tác phẩm, âm giai, thị tấu, luyện nghe và nhạc lý ứng với grade ABRSM — kể cả khi không định đi thi.' },
      { title: 'Lý thuyết để nghe, không chỉ để viết', text: 'Mỗi khái niệm hoà âm đều được chơi và nghe — khắc phục sự tách rời lý thuyết, nghe và đàn phím mà nhiều nhà sư phạm phê phán.' },
      { title: 'Nhạc phổ thông và nhạc Việt có chỗ đứng', text: 'Hình thức verse – chorus, điệu đệm Việt, ngũ cung đi cùng bản cổ điển.' },
      { title: 'Nhiều buổi ngắn', text: 'Nghiên cứu vận động cho thấy người lớn tuổi hưởng lợi từ luyện phân bổ hơn luyện dồn.' },
    ],
    routine: [
      'Một buổi học (45 – 60 phút) mỗi tuần, hoặc một chương tự học mỗi 1 – 2 tuần.',
      'Tập 30 – 45 phút, 5 – 6 lần một tuần, mỗi buổi chia: khởi động kỹ thuật – bài đang học – đệm hát hoặc thị tấu.',
      'Mỗi chương có một bài "chơi được ngay" để giữ cảm giác thành tựu.',
      'Mỗi tháng ghi âm một bài và nghe lại.',
      'Số tháng của mỗi cấp là ước tính từ số giờ ABRSM công bố — tập ít hơn thì cấp kéo dài hơn, không sao cả.',
    ],
    review: 'danh-gia-giao-trinh-piano-va-nhac-ly',
    goal: 'ABRSM Grade 8 + đệm hát',
    levels: [
      {
        title: 'Nền tảng nhanh',
        subtitle: 'Bàn phím, tư thế, khuông lớn, nốt mốc, trường độ và nhịp; vị trí năm ngón; cách tập của người lớn.',
        grade: 'ABRSM Initial',
        months: [2, 3],
        pieces: [
          { title: 'Ode to Joy — chủ đề Giao hưởng số 9, giai điệu tay phải', composer: 'Ludwig van Beethoven', note: 'Bản soạn lại; không phải bài thi ABRSM.' },
          { title: 'Au clair de la lune', composer: 'Dân ca Pháp', note: 'Vị trí năm ngón Đô.' },
          { title: 'Bắc kim thang trên phím đen', composer: 'Dân ca Nam Bộ', note: 'Chơi bằng tai.' },
          { title: 'Ngẫu hứng ngũ cung trên một nốt trầm ngân', composer: 'Người học', note: 'Bài sáng tạo.' },
        ],
        exam: EXAM.initial,
        checkpoint: ['Đọc mọi nốt trong vị trí Đô ở hai khoá', 'Đếm và chơi đúng nốt tròn, trắng, đen, móc đơn', 'Chơi một bài 8 ô nhịp hai tay luân phiên', 'Lập được kế hoạch tập một tuần cho mình'],
        units: [
          {
            title: 'Trước khi bắt đầu',
            goal: 'Biết mình học để làm gì và tập thế nào.',
            lessons: [
              { slug: 'nguoi-lon-hoc-piano-dong-luc-va-cach-hoc', focus: 'Chọn mục tiêu; ba kiểu người học.' },
              { slug: 'phuong-phap-luyen-tap', focus: 'Luyện phân bổ, có chủ đích.' },
              { slug: 'suc-khoe-nguoi-choi-dan', focus: 'Tránh căng cơ khi bắt đầu muộn.' },
            ],
            practice: ['Viết ra mục tiêu 3 tháng và 1 năm.', 'Lên lịch 5 – 6 buổi tập ngắn trong tuần.'],
          },
          {
            title: 'Bàn phím và tay',
            goal: 'Định hướng bàn phím; tư thế; vị trí năm ngón.',
            lessons: [
              { slug: 'ban-phim' },
              { slug: 'tu-the' },
              { slug: 'ngon-bam' },
              { slug: 'vi-tri-nam-ngon-va-am-giai-nam-not', focus: 'Vị trí Đô, Sol, Fa; âm giai năm nốt.' },
              { slug: 'ky-thuat-cham-phim' },
            ],
            practice: ['1-2-3-4-5-4-3-2-1 ở ba vị trí, hai tay.', 'Ngẫu hứng trên phím đen với một nốt trầm ngân.'],
          },
          {
            title: 'Đọc nhạc',
            goal: 'Đọc khuông lớn bằng nốt mốc và quãng.',
            lessons: [
              { slug: 'nhac-ly-co-ban', focus: 'Bức tranh chung.' },
              { slug: 'khuong-nhac' },
              { slug: 'khoa-sol' },
              { slug: 'khoa-fa' },
              { slug: 'doc-not-nhanh' },
              { slug: 'quang', focus: 'Quãng 2 – 5 trên khuông.' },
            ],
            practice: ['5 phút thẻ nốt mỗi ngày.', 'Đọc nốt mốc rồi đọc quãng tiếp theo.'],
          },
          {
            title: 'Tiết tấu',
            goal: 'Đếm, vỗ và chơi các trường độ cơ bản trong 2/4, 3/4, 4/4.',
            lessons: [
              { slug: 'truong-do' },
              { slug: 'dau-lang' },
              { slug: 'so-chi-nhip' },
              { slug: 'cham-doi-dau-noi' },
              { slug: 'cam-nhan-phach' },
            ],
            practice: ['Đếm to khi chơi.', 'Chơi cùng máy đếm nhịp ở tốc độ chậm.'],
          },
        ],
      },
      {
        title: 'Hợp âm và đệm hát',
        subtitle: 'Cung – nửa cung, âm giai trưởng, hợp âm ba và ký hiệu hợp âm, chức năng I – IV – V, các điệu đệm phổ biến.',
        grade: 'ABRSM Grade 1',
        months: [3, 4],
        pieces: [
          { title: 'Minuet Sol trưởng BWV Anh. 114', composer: 'Christian Petzold', note: 'Henle cấp 1/9. Không tìm thấy trong danh sách thi ABRSM.', slug: 'phan-tich-minuet-sol-truong' },
          { title: 'Melodie, Op. 68 số 1', composer: 'Robert Schumann', note: 'Henle cấp 2.' },
          { title: 'Canon Rê trưởng — vòng hợp âm, bản đơn giản', composer: 'Johann Pachelbel', note: 'Bản soạn lại; không xếp cấp.', slug: 'phan-tich-canon-pachelbel' },
          { title: 'Đệm hát một bài Việt quen thuộc bằng I – IV – V', composer: 'Tự chọn', note: 'Bài kỹ năng đệm; không xếp cấp.' },
        ],
        exam: EXAM.g1,
        checkpoint: ['Dựng hợp âm trưởng, thứ trên bất kỳ nốt nào', 'Đọc ký hiệu C, Am, F/A, G7', 'Đệm một bài hát với hai điệu đệm khác nhau', 'Chơi I – IV – V – I ở Đô, Sol, Fa'],
        units: [
          {
            title: 'Nguyên liệu của hợp âm',
            goal: 'Hiểu cung, nửa cung, dấu hoá và âm giai trưởng.',
            lessons: [
              { slug: 'cung-nua-cung' },
              { slug: 'dau-hoa' },
              { slug: 'am-giai-truong' },
              { slug: 'bac-am-giai' },
            ],
            practice: ['Âm giai Đô, Sol, Fa trưởng một quãng 8.', 'Hát và chơi các bậc của âm giai.'],
          },
          {
            title: 'Hợp âm',
            goal: 'Dựng, đảo và gọi tên hợp âm ba.',
            lessons: [
              { slug: 'hop-am-ba' },
              { slug: 'ky-hieu-hop-am' },
              { slug: 'the-dao-hop-am', focus: 'Dùng thế đảo để chuyển hợp âm mượt.' },
              { slug: 'chuc-nang-hoa-am', focus: 'Chủ – hạ át – át.' },
            ],
            practice: ['Mười hai hợp âm trưởng theo vòng quãng 5.', 'C – F/C – C – G/B – C bằng thế đảo gần nhất.'],
          },
          {
            title: 'Đệm hát',
            goal: 'Đệm một bài hát từ ký hiệu hợp âm với nhiều điệu.',
            lessons: [
              { slug: 'dem-hat-piano' },
              { slug: 'dieu-dem-pho-bien' },
              { slug: 'vong-hop-am' },
              { slug: 'hoa-am-pop', focus: 'I – V – vi – IV và các khuôn quen.' },
            ],
            practice: ['Đệm cùng một bài theo điệu ballad rồi valse.', 'Chơi I – V – vi – IV ở Đô và Sol.'],
          },
        ],
      },
      {
        title: 'Giọng, kỹ thuật và điệu Việt',
        subtitle: 'Hoá biểu, vòng quãng 5, giọng thứ; âm giai, hợp âm rải, pedal; đệm các điệu nhạc Việt và đọc sơ đồ bài hát.',
        grade: 'ABRSM Grade 2',
        months: [4, 6],
        pieces: [
          { title: 'Musette Rê trưởng BWV Anh. 126', composer: 'Khuyết danh (Sổ tay Anna Magdalena Bach)', note: 'ABRSM Grade 2, kỳ 2019 – 2020; Henle cấp 1.' },
          { title: 'Prelude Đô trưởng BWV 846 (Bình quân luật tập 1)', composer: 'Johann Sebastian Bach', note: 'Henle cấp 1 theo bản tóm tắt — Lamar chưa đối chiếu.', slug: 'phan-tich-prelude-do-truong' },
          { title: 'Prelude nhỏ Đô trưởng BWV 939', composer: 'Johann Sebastian Bach', note: 'Henle cấp 2.' },
          { title: 'Đệm một bài bolero và một bài ballad Việt', composer: 'Tự chọn', note: 'Bài kỹ năng đệm; không xếp cấp.' },
        ],
        exam: EXAM.g2,
        checkpoint: ['Đọc hoá biểu đến hai dấu', 'Chơi âm giai và hợp âm rải hai tay ở năm giọng', 'Dùng pedal đổi hợp âm sạch tiếng', 'Đệm một bài theo sơ đồ verse – chorus'],
        units: [
          {
            title: 'Giọng và hoá biểu',
            goal: 'Đọc hoá biểu, hiểu vòng quãng 5 và giọng thứ.',
            lessons: [
              { slug: 'hoa-bieu' },
              { slug: 'vong-quang-nam' },
              { slug: 'am-giai-thu' },
              { slug: 'giong-song-song' },
              { slug: 'dieu-tinh' },
            ],
            practice: ['Âm giai thứ hoà âm La, Mi, Rê.', 'Chơi một câu ở trưởng rồi ở thứ song song.'],
          },
          {
            title: 'Kỹ thuật',
            goal: 'Âm giai, hợp âm rải, pedal và phối hợp hai tay.',
            lessons: [
              { slug: 'luyen-am-giai' },
              { slug: 'luyen-hop-am-rai' },
              { slug: 'ban-dap' },
              { slug: 'phoi-hop-hai-tay' },
            ],
            practice: ['Âm giai hai tay hai quãng 8.', 'Pedal nối: nhả – nhấn ngay sau phách.'],
          },
          {
            title: 'Đệm hát Việt',
            goal: 'Đệm các điệu nhạc Việt thông dụng; biết đang ở đâu trong bài.',
            lessons: [
              { slug: 'dem-dieu-viet-nam', focus: 'Bolero, rumba, slow, valse, boston.' },
              { slug: 'dem-pop-ballad' },
              { slug: 'hinh-thuc-ca-khuc-pho-thong', focus: 'Verse – chorus.' },
            ],
            practice: ['Đệm một bài bolero và một bài ballad.', 'Ghi sơ đồ verse – chorus của bài đang đệm.'],
          },
        ],
      },
      {
        title: 'Biểu cảm và hoà âm',
        subtitle: 'Ký hiệu biểu cảm, câu nhạc, thị tấu hằng ngày; hợp âm bảy, kết, dẫn giọng, nốt ngoài hợp âm; liên ba và nhịp kép.',
        grade: 'ABRSM Grade 3',
        months: [6, 8],
        pieces: [
          { title: 'Sonatina Op. 36 số 1, chương 3 (Vivace)', composer: 'Muzio Clementi', note: 'ABRSM Grade 3 (năm chưa ghi nhận); Henle cấp 3.', slug: 'phan-tich-sonatina-clementi-op36-1' },
          { title: 'Wilder Reiter, Op. 68 số 8', composer: 'Robert Schumann', note: 'Henle cấp 3, nhãn "ABRSM Grade 3".', slug: 'phan-tich-wilder-reiter' },
          { title: 'Gymnopédie số 1', composer: 'Erik Satie', note: 'Không có trong danh sách ABRSM; các ước lượng không chính thức dao động rất rộng (khoảng Grade 3 – 6).', slug: 'phan-tich-gymnopedie-so1' },
          { title: 'Prelude nhỏ Đô thứ BWV 999', composer: 'Johann Sebastian Bach', note: 'Henle cấp 3.' },
        ],
        exam: EXAM.g3,
        checkpoint: ['Chơi chuỗi kết I – IV – I – V7 – I ở ba giọng', 'Thị tấu một bài 8 ô nhịp không dừng', 'Nghe và gọi tên kết hoàn toàn, nửa kết', 'Chơi liên ba đều trên nền phách đơn'],
        units: [
          {
            title: 'Biểu cảm và thị tấu',
            goal: 'Đọc và làm theo ký hiệu biểu cảm; thị tấu mỗi ngày.',
            lessons: [
              { slug: 'cuong-do' },
              { slug: 'cach-dien-tau' },
              { slug: 'thuat-ngu' },
              { slug: 'dien-dat-cau-nhac' },
              { slug: 'thi-tau' },
            ],
            practice: ['Thị tấu 5 phút mỗi ngày.', 'Chơi một câu ba lần với ba sắc thái khác nhau.'],
          },
          {
            title: 'Hoà âm sâu hơn',
            goal: 'Dùng và nghe hợp âm bảy; các loại kết; nối hợp âm mượt.',
            lessons: [
              { slug: 'hop-am-bay' },
              { slug: 'cau-ket' },
              { slug: 'dan-giong', focus: 'Nối hợp âm mượt — ít di chuyển nhất.' },
              { slug: 'not-ngoai-hop-am' },
            ],
            practice: ['Chuỗi kết có V7 ở năm giọng.', 'Nghe một bài pop, ghi lại các kết.'],
          },
          {
            title: 'Tiết tấu nâng cao',
            goal: 'Liên ba, nhịp kép 6/8, đảo phách.',
            lessons: [
              { slug: 'lien-ba' },
              { slug: 'so-chi-nhip', focus: 'Nhịp kép 6/8, 9/8, 12/8.' },
              { slug: 'dao-phach' },
            ],
            practice: ['Vỗ 6/8 nhấn hai phách lớn.', 'Đệm một bài slow rock 12/8.'],
          },
          {
            title: 'Hiểu bản đang chơi',
            goal: 'Đọc phân tích của bản đang học.',
            lessons: [
              { slug: 'phan-tich-gymnopedie-so1' },
              { slug: 'phan-tich-prelude-do-truong' },
              { slug: 'lo-trinh-tac-pham', focus: 'Chọn bài tiếp theo vừa sức.' },
            ],
            practice: ['Ghi tên hợp âm lên bản Prelude Đô trưởng.', 'Chọn bài tiếp theo từ lộ trình tác phẩm.'],
          },
        ],
      },
      {
        title: 'Màu hoà âm và hình thức',
        subtitle: 'Át phụ, hợp âm mượn, chuyển giọng; hai đoạn, ba đoạn, rondo; kỹ năng đàn phím chức năng; nhạc lý Grade 4.',
        grade: 'ABRSM Grade 4',
        months: [7, 9],
        pieces: [
          { title: 'Fröhlicher Landmann, Op. 68 số 10', composer: 'Robert Schumann', note: 'ABRSM Grade 4 (theo trang tiết mục của Graham Fitch; năm chưa rõ).' },
          { title: 'Für Elise, WoO 59', composer: 'Ludwig van Beethoven', note: 'Henle cấp 3; RCM Level 7 (2022). Không tìm thấy năm ABRSM nào chọn.', slug: 'phan-tich-fur-elise' },
          { title: 'Prelude La trưởng Op. 28 số 7', composer: 'Frédéric Chopin', note: 'Henle cấp 4.', slug: 'phan-tich-prelude-la-truong-op28-so7' },
          { title: 'Valse Si thứ Op. 69 số 2', composer: 'Frédéric Chopin', note: 'Henle cấp 4.' },
          { title: 'Invention số 1 Đô trưởng BWV 772', composer: 'Johann Sebastian Bach', note: 'Henle cấp 3. Các invention được ABRSM chọn thường nằm ở Grade 5 – 6.', slug: 'phan-tich-invention-so-1' },
        ],
        exam: EXAM.g4,
        checkpoint: ['Phối hoà âm một giai điệu lạ bằng I, IV, V7', 'Chỉ ra kết, chuyển giọng, hình thức của bản đang chơi', 'Dịch một bài đệm sang giọng khác', 'Chơi âm giai cromatic hai tay'],
        units: [
          {
            title: 'Màu hoà âm',
            goal: 'Nhận ra át phụ, hợp âm mượn, chuyển giọng.',
            lessons: [
              { slug: 'hop-am-at-phu' },
              { slug: 'hop-am-muon' },
              { slug: 'chuyen-giong' },
              { slug: 'phan-tich-hoa-am', focus: 'Ghi số La Mã cho bản đang chơi.' },
            ],
            practice: ['Thêm V/V vào một bài đệm.', 'Chơi bài quen với một hợp âm mượn (iv thay IV).'],
          },
          {
            title: 'Hình thức',
            goal: 'Nghe và đọc cấu trúc bài.',
            lessons: [
              { slug: 'cau-nhac' },
              { slug: 'hinh-thuc-hai-doan' },
              { slug: 'hinh-thuc-ba-doan' },
              { slug: 'rondo' },
              { slug: 'phan-tich-fur-elise' },
            ],
            practice: ['Vẽ sơ đồ hình thức Für Elise trước khi đọc bài phân tích.', 'Nghe một bản rondo, đếm số lần điệp khúc trở lại.'],
          },
          {
            title: 'Kỹ năng đàn phím chức năng',
            goal: 'Phối hoà âm tức thì, dịch giọng, lead sheet.',
            lessons: [
              { slug: 'ky-nang-dan-phim-chuc-nang' },
              { slug: 'phoi-hoa-am-giai-dieu' },
              { slug: 'dich-giong' },
              { slug: 'he-so-nashville-va-lead-sheet', focus: 'Ghi hợp âm bằng số để dịch giọng nhanh.' },
            ],
            practice: ['Mỗi tuần phối hoà âm một giai điệu dân ca.', 'Dịch bài đệm quen lên và xuống một cung.'],
          },
          {
            title: 'Nhạc lý Grade 4',
            goal: 'Âm giai cromatic, tên kỹ thuật các bậc, khoá Đô, hoa mỹ.',
            lessons: [
              { slug: 'am-giai-cromatic' },
              { slug: 'bac-am-giai', focus: 'Đủ bảy tên kỹ thuật.' },
              { slug: 'khoa-do', focus: 'Khoá alto.' },
              { slug: 'ky-hieu-hoa-my' },
            ],
            practice: ['Viết và chơi âm giai cromatic từ ba nốt khác nhau.', 'Chơi các nét hoa mỹ trong bài Bach đang học.'],
          },
        ],
      },
      {
        title: 'Cửa ngõ trung cấp',
        subtitle: 'Nhạc lý Grade 5 (điều kiện để thi Grade 6 – 8); đối âm hai bè; ngẫu hứng, blues và ii – V – I; hoà âm cho giai điệu Việt.',
        grade: 'ABRSM Grade 5',
        months: [8, 11],
        pieces: [
          { title: 'Sonatina Op. 36 số 3, chương 1 (Spiritoso)', composer: 'Muzio Clementi', note: 'ABRSM Grade 5, kỳ 2025 – 2026.' },
          { title: 'Invention số 8 Fa trưởng BWV 779', composer: 'Johann Sebastian Bach', note: 'Henle cấp 4, nhãn "ABRSM Grade 5".' },
          { title: 'Von fremden Ländern und Menschen, Op. 15 số 1', composer: 'Robert Schumann', note: 'Henle cấp 4, nhãn "ABRSM Grade 5".' },
          { title: 'Prelude Mi thứ Op. 28 số 4', composer: 'Frédéric Chopin', note: 'Henle cấp 4.', slug: 'phan-tich-prelude-mi-thu-op28-so4' },
          { title: 'Một bài blues 12 ô tự ngẫu hứng', composer: 'Người học', note: 'Bài sáng tạo; không xếp cấp.' },
        ],
        exam: EXAM.g5,
        checkpoint: ['Đậu (hoặc sẵn sàng thi) nhạc lý Grade 5', 'Chơi Invention với hai bè rõ ràng', 'Ngẫu hứng 12 ô blues trên vòng hợp âm của mình', 'Phối hoà âm một giai điệu ngũ cung không dùng kết át – chủ'],
        units: [
          {
            title: 'Nhạc lý Grade 5',
            goal: 'Đủ kiến thức để đậu nhạc lý Grade 5 — bắt buộc trước Grade 6.',
            lessons: [
              { slug: 'nhip-hon-hop', focus: 'Nhịp 5/4, 7/8.' },
              { slug: 'cau-ket', focus: 'Bốn loại kết, ghi bằng số La Mã.' },
              { slug: 'khoa-do', focus: 'Khoá tenor.' },
              { slug: 'quang', focus: 'Quãng ghép, tăng, giảm.' },
              { slug: 'thi-cap-do', focus: 'Đăng ký thi nhạc lý trực tuyến.' },
            ],
            practice: ['Mỗi tuần một đề trắc nghiệm.', 'Gọi tên kết trong bài Clementi.'],
          },
          {
            title: 'Hai bè độc lập',
            goal: 'Nghe và chơi đối âm hai bè.',
            lessons: [
              { slug: 'doi-am' },
              { slug: 'thoi-ky-baroque' },
              { slug: 'phan-tich-invention-so-1' },
            ],
            practice: ['Hát một bè, chơi bè kia.', 'Tập từng tay thật chắc trước khi ghép.'],
          },
          {
            title: 'Ngẫu hứng',
            goal: 'Ngẫu hứng có cấu trúc.',
            lessons: [
              { slug: 'ngau-hung-piano' },
              { slug: 'phuong-phap-luyen-ngau-hung' },
              { slug: 'blues-12-nhip' },
              { slug: 'am-giai-blues' },
              { slug: 'ii-v-i' },
            ],
            practice: ['Tay trái vòng blues, tay phải âm giai blues.', 'ii – V – I ở Đô, Fa, Si♭.'],
          },
          {
            title: 'Âm nhạc Việt trên piano',
            goal: 'Phối hoà âm cho giai điệu ngũ cung và dân ca.',
            lessons: [
              { slug: 'am-giai-ngu-cung' },
              { slug: 'hoa-am-cho-giai-dieu-ngu-cung' },
              { slug: 'ly-thuyet-am-nhac-co-truyen-viet-nam', focus: 'Hò – xự – xang và vì sao piano không chơi được mọi "hơi".' },
            ],
            practice: ['Phối hoà âm Cò lả bằng hợp âm chồng quãng 4 – 5.', 'So sánh đệm I – IV – V với đệm ngũ cung cho cùng một dân ca.'],
          },
        ],
      },
      {
        title: 'Hình thức sonata và bốn bè',
        subtitle: 'Chương sonata Cổ điển; hoà âm bốn bè và bass số; quãng tám, nốt kép; chơi đúng phong cách từng thời kỳ.',
        grade: 'ABRSM Grade 6',
        months: [10, 14],
        pieces: [
          { title: 'Sonata Đô trưởng K. 545, chương 1 (Allegro)', composer: 'Wolfgang Amadeus Mozart', note: 'ABRSM Grade 6, kỳ 2027 – 2028. Henle xếp riêng chương 1 cấp 4.', slug: 'phan-tich-sonata-k545' },
          { title: 'Sonatina Op. 20 số 1, chương 1 (Allegro)', composer: 'Friedrich Kuhlau', note: 'ABRSM Grade 6, kỳ 2023 – 2024.' },
          { title: 'Invention số 14 Si♭ trưởng BWV 785', composer: 'Johann Sebastian Bach', note: 'ABRSM Grade 6, kỳ 2025 – 2026.' },
          { title: 'Träumerei, Op. 15 số 7', composer: 'Robert Schumann', note: 'Henle cấp 5. Không tìm thấy năm ABRSM piano nào chọn.', slug: 'phan-tich-traumerei' },
          { title: 'Venezianisches Gondellied, Op. 30 số 6', composer: 'Felix Mendelssohn', note: 'Henle cấp 5.' },
        ],
        exam: EXAM.g6,
        checkpoint: ['Phân tích được trình bày – phát triển – tái hiện trong chương sonata đang chơi', 'Viết hoà âm bốn bè cho một bass số ngắn', 'Nghe và gọi tên kết hoàn toàn, nửa kết, kết lừa', 'Chơi bản Baroque và bản Cổ điển với cách chạm phím khác nhau'],
        units: [
          {
            title: 'Hình thức sonata',
            goal: 'Hiểu và nghe chương sonata Cổ điển.',
            lessons: [
              { slug: 'hinh-thuc-sonata' },
              { slug: 'phan-tich-sonata-k545' },
              { slug: 'thoi-ky-co-dien' },
              { slug: 'sonata-rondo-va-cac-loai-rondo' },
            ],
            practice: ['Đánh dấu chủ đề 1, cầu nối, chủ đề 2 trên bản nhạc.', 'Nghe hai bản thu K. 545, so sánh tốc độ.'],
          },
          {
            title: 'Hoà âm bốn bè và bass số',
            goal: 'Viết và chơi hoà âm bốn bè đúng luật.',
            lessons: [
              { slug: 'luat-hoa-am-bon-be' },
              { slug: 'dan-giong' },
              { slug: 'hop-am-sau-bon', focus: 'Hợp âm 6/4 kết (cadential 6/4).' },
              { slug: 'bass-so' },
              { slug: 'phoi-hoa-am-giai-dieu', focus: 'Đặt hợp âm cho giai điệu.' },
            ],
            practice: ['Mỗi tuần một bài bass số 4 – 8 ô.', 'Chơi bài vừa viết trên đàn, nghe lỗi quãng 5 song song.'],
          },
          {
            title: 'Kỹ thuật cấp trung – cao',
            goal: 'Quãng tám, nốt kép, âm giai nhanh và đều.',
            lessons: [
              { slug: 'ky-thuat-quang-tam' },
              { slug: 'not-kep' },
              { slug: 'luyen-am-giai', focus: 'Âm giai ba – bốn quãng 8, nhịp đều.' },
              { slug: 'ky-thuat-piano' },
            ],
            practice: ['Quãng tám staccato từ cổ tay, chậm.', 'Âm giai với nhịp ba và nhịp bốn luân phiên.'],
          },
          {
            title: 'Diễn tấu theo phong cách',
            goal: 'Chơi mỗi thời kỳ một cách; đọc bản gốc.',
            lessons: [
              { slug: 'phong-cach-dien-tau' },
              { slug: 'an-ban-urtext' },
              { slug: 'ky-hieu-hoa-my', focus: 'Hoa mỹ Baroque và Cổ điển.' },
              { slug: 'phan-tich-traumerei' },
            ],
            practice: ['So sánh một ấn bản urtext với một ấn bản có biên tập.', 'Chơi Invention không pedal, Träumerei có pedal.'],
          },
        ],
      },
      {
        title: 'Lãng mạn, ấn tượng và hoà âm cromatic',
        subtitle: 'Hợp âm Napoli, sáu tăng, bảy giảm; rubato và âm thanh Lãng mạn; hoà âm ấn tượng; láy rền, tremolo; nghe chuyển giọng.',
        grade: 'ABRSM Grade 7',
        months: [12, 17],
        pieces: [
          { title: 'Nocturne Đô♯ thứ (op. posth.)', composer: 'Frédéric Chopin', note: 'ABRSM Grade 7, kỳ 2017 – 2018.' },
          { title: 'Golliwogg’s Cakewalk (Children’s Corner)', composer: 'Claude Debussy', note: 'Henle cấp 6, nhãn "ABRSM Grade 7".', slug: 'phan-tich-golliwogg-cakewalk' },
          { title: 'Kind im Einschlummern, Op. 15 số 12', composer: 'Robert Schumann', note: 'Nhãn "ABRSM Grade 7" của Henle.' },
          { title: 'Một chương trong French Suites BWV 812 – 817', composer: 'Johann Sebastian Bach', note: 'Henle xếp tập này vào trang "ABRSM Grade 7"; chương cụ thể chưa xác minh.' },
          { title: 'Nocturne Mi♭ trưởng Op. 9 số 2', composer: 'Frédéric Chopin', note: 'Henle cấp 6. Không tìm thấy năm ABRSM nào chọn.', slug: 'phan-tich-nocturne-op9-so2' },
          { title: 'Clair de lune (Suite bergamasque)', composer: 'Claude Debussy', note: 'Henle cấp 5. Không tìm thấy trong danh sách ABRSM.', slug: 'phan-tich-clair-de-lune' },
        ],
        exam: EXAM.g7,
        checkpoint: ['Nhận ra hợp âm Napoli và sáu tăng khi nghe và trên bản nhạc', 'Nghe và nói giọng đích của một chuyển giọng', 'Dùng rubato mà vẫn giữ nhịp nền ở tay trái', 'Chơi láy rền đều và nhẹ'],
        units: [
          {
            title: 'Hoà âm cromatic',
            goal: 'Nghe, gọi tên và chơi các hợp âm cromatic chính.',
            lessons: [
              { slug: 'hoa-am-cromatic' },
              { slug: 'hop-am-napoli' },
              { slug: 'hop-am-sau-tang' },
              { slug: 'hop-am-bay-giam' },
              { slug: 'hop-am-at-phu', focus: 'Ôn lại: át phụ và bảy giảm phụ.' },
            ],
            practice: ['Chơi kết có N6 và sáu tăng ở ba giọng thứ.', 'Tìm một hợp âm cromatic trong bản Nocturne đang học.'],
          },
          {
            title: 'Âm thanh Lãng mạn',
            goal: 'Rubato, pedal, giai điệu hát trên nền đệm.',
            lessons: [
              { slug: 'thoi-ky-lang-man' },
              { slug: 'rubato' },
              { slug: 'ban-dap', focus: 'Pedal nửa, pedal rung.' },
              { slug: 'phan-tich-nocturne-op9-so2' },
            ],
            practice: ['Hát giai điệu Nocturne trước khi chơi.', 'Tay trái giữ nhịp đều, tay phải tự do.'],
          },
          {
            title: 'Ấn tượng và thế kỷ 20',
            goal: 'Nghe màu hợp âm không chức năng.',
            lessons: [
              { slug: 'an-tuong' },
              { slug: 'phan-tich-clair-de-lune' },
              { slug: 'phan-tich-golliwogg-cakewalk' },
            ],
            practice: ['Chơi chuỗi hợp âm chín song song.', 'Ngẫu hứng trên âm giai toàn cung.'],
          },
          {
            title: 'Kỹ thuật nâng cao',
            goal: 'Láy rền, tremolo, tập trong đầu.',
            lessons: [
              { slug: 'ky-thuat-lay-ren' },
              { slug: 'tremolo-xoay-cang-tay' },
              { slug: 'tap-trong-dau', focus: 'Học thuộc bằng hình dung.' },
            ],
            practice: ['Láy rền bằng ngón 2-3 rồi 3-4, chậm, nhẹ.', 'Đọc bản nhạc không đàn rồi chơi từ trí nhớ.'],
          },
          {
            title: 'Nghe ở trình độ cao',
            goal: 'Nghe kết, chuyển giọng và hợp âm như bài nghe Grade 6 – 8.',
            lessons: [
              { slug: 'tai-hoa-am' },
              { slug: 'chuyen-giong', focus: 'Sang át, hạ át, song song.' },
              { slug: 'luyen-tai' },
            ],
            practice: ['Mỗi ngày nghe 5 chuỗi kết ngẫu nhiên.', 'Hát bè trầm của một bài hợp xướng.'],
          },
        ],
      },
      {
        title: 'Nghệ sĩ trưởng thành',
        subtitle: 'Prelude và fugue; chương sonata lớn của Beethoven; hoà âm thế kỷ 20; xây dựng chương trình biểu diễn trọn vẹn.',
        grade: 'ABRSM Grade 8',
        months: [15, 20],
        pieces: [
          { title: 'Sonata "Pathétique" Op. 13, chương 2 (Adagio cantabile)', composer: 'Ludwig van Beethoven', note: 'ABRSM Grade 8, kỳ 2023 – 2024.', slug: 'phan-tich-pathetique-chuong-2' },
          { title: 'Prelude Đô thứ BWV 847 (Bình quân luật tập 1)', composer: 'Johann Sebastian Bach', note: 'Chưa xác minh được năm ABRSM hay cấp Henle — giáo viên tự cân nhắc.', slug: 'phan-tich-prelude-do-thu-bwv847' },
          { title: 'Sonata "Ánh trăng" Op. 27 số 2, chương 1', composer: 'Ludwig van Beethoven', note: 'Không có trong danh sách ABRSM hiện hành; Henle xếp cả bản sonata cấp 7 (chương 1 dễ hơn hẳn chương 3).', slug: 'phan-tich-anh-trang-chuong-1' },
          { title: 'Rondo alla Turca, Sonata K. 331', composer: 'Wolfgang Amadeus Mozart', note: 'Henle xếp cả bản sonata cấp 6; liên hệ với ABRSM Grade 8 trên trang Henle không rõ ràng.', slug: 'phan-tich-rondo-alla-turca' },
          { title: 'Valse Đô♯ thứ Op. 64 số 2', composer: 'Frédéric Chopin', note: 'Henle cấp 6.' },
          { title: 'Consolation số 3 Rê♭ trưởng', composer: 'Franz Liszt', note: 'Henle cấp 5.' },
        ],
        exam: EXAM.g8,
        checkpoint: ['Chơi một chương trình 3 bài, ba phong cách, liền mạch khoảng 15 – 20 phút', 'Phân tích được fugue: chủ đề, đáp đề, đoạn chen', 'Nhận ra kết plagal, chuyển giọng và hợp âm khi nghe', 'Tự lập kế hoạch học bản mới mà không cần giáo viên'],
        units: [
          {
            title: 'Đối âm và fugue',
            goal: 'Hiểu và chơi prelude – fugue.',
            lessons: [
              { slug: 'fugue' },
              { slug: 'toccata-prelude-fugue' },
              { slug: 'phan-tich-prelude-do-thu-bwv847' },
              { slug: 'sonata-baroque' },
            ],
            practice: ['Tô màu mọi lần chủ đề fugue xuất hiện.', 'Chơi từng bè riêng, rồi từng cặp bè.'],
          },
          {
            title: 'Bản lớn',
            goal: 'Chơi chương sonata Beethoven với hiểu biết về cấu trúc.',
            lessons: [
              { slug: 'phan-tich-pathetique-chuong-2' },
              { slug: 'phan-tich-anh-trang-chuong-1' },
              { slug: 'phan-tich-va-bieu-dien', focus: 'Phân tích giúp gì cho cách chơi.' },
              { slug: 'so-sanh-ban-thu' },
            ],
            practice: ['Nghe ba bản thu Pathétique chương 2, ghi khác biệt.', 'Học thuộc theo từng đoạn hình thức.'],
          },
          {
            title: 'Hoà âm thế kỷ 20',
            goal: 'Nghe và chơi ngôn ngữ ngoài điệu tính.',
            lessons: [
              { slug: 'hoa-am-the-ky-20' },
              { slug: 'phi-dieu-tinh' },
              { slug: 'nhip-hon-hop', focus: 'Nhịp thay đổi.' },
              { slug: 'da-nhip' },
            ],
            practice: ['Vỗ 3 chọi 2 rồi 4 chọi 3.', 'Thị tấu một bài có nhịp thay đổi.'],
          },
          {
            title: 'Biểu diễn và học suốt đời',
            goal: 'Chơi trước người khác; tự học tiếp.',
            lessons: [
              { slug: 'hoc-thuoc-bai' },
              { slug: 'hoi-hop-bieu-dien' },
              { slug: 'thi-cap-do', focus: 'Sau Grade 8: chứng chỉ biểu diễn (diploma).' },
              { slug: 'danh-gia-giao-trinh-piano-va-nhac-ly', focus: 'Chọn tài liệu tiếp theo một cách có phê phán.' },
            ],
            practice: ['Tổ chức một buổi hoà nhạc tại gia trọn chương trình.', 'Lập kế hoạch học 6 tháng tiếp theo.'],
          },
        ],
      },
    ],
    tracks: [
      {
        title: 'Đệm hát',
        subtitle: 'Ba cấp đệm hát, có thể học song song từ Grade 5. ABRSM không có kỳ thi đệm hát; nội dung tham khảo kỳ thi Rock & Pop Keyboards của Trinity (bài hát + kỹ năng session: chơi theo tai hoặc ngẫu hứng), Rockschool Keys, bài hoà âm đàn phím của LCM (phối hợp âm cho giai điệu) và bài lead sheet của RCM. Cách ghép thành ba cấp là đề xuất của Lamar.',
        levels: [
          {
            title: 'Lead sheet và điệu đệm',
            subtitle: 'Đọc ký hiệu hợp âm và hệ số; hợp âm 6, add9, sus; các điệu ballad, slow rock, điệu Việt; sơ đồ bài hát.',
            grade: 'Đệm hát 1',
            months: [3, 4],
            pieces: [
              { title: 'Let It Be', composer: 'Lennon – McCartney (The Beatles, 1970)', note: 'Ballad pop; vòng I – V – vi – IV.' },
              { title: 'Diễm xưa', composer: 'Trịnh Công Sơn', note: 'Đệm từ lead sheet; chọn điệu cùng ca sĩ.' },
              { title: 'Một bài bolero Việt tự chọn', composer: 'Tự chọn', note: 'Điệu bolero tay trái, giai điệu hoặc hợp âm tay phải.' },
            ],
            checkpoint: ['Đệm một bài từ lead sheet lần đầu nhìn thấy, không dừng', 'Chuyển bài sang giọng khác bằng hệ số', 'Chơi cùng một bài ở ba điệu khác nhau', 'Biết đang ở verse, pre-chorus hay chorus'],
            units: [
              {
                title: 'Đọc lead sheet',
                goal: 'Đọc giai điệu và ký hiệu hợp âm, ghi hợp âm bằng số.',
                lessons: [
                  { slug: 'ky-hieu-hop-am' },
                  { slug: 'he-so-nashville-va-lead-sheet' },
                  { slug: 'hop-am-6-va-add' },
                  { slug: 'hinh-thuc-ca-khuc-pho-thong' },
                ],
                practice: ['Chép sơ đồ hợp âm của 3 bài hát bằng hệ số.', 'Chơi tay trái nốt gốc, tay phải hợp âm theo lead sheet.'],
              },
              {
                title: 'Điệu đệm',
                goal: 'Đổi điệu đệm theo thể loại.',
                lessons: [
                  { slug: 'dieu-dem-pho-bien' },
                  { slug: 'dem-pop-ballad' },
                  { slug: 'dem-slow-rock-rock' },
                  { slug: 'dem-dieu-viet-nam' },
                ],
                practice: ['Một bài, ba điệu: ballad, slow rock, bolero.', 'Ghi âm phần đệm, hát theo để kiểm tra.'],
              },
            ],
          },
          {
            title: 'Màu hợp âm và phong cách',
            subtitle: 'Hợp âm mở rộng và cách xếp; ii – V – I; bossa nova, R&B, jazz; phối hợp âm cho giai điệu và dịch giọng tức thì.',
            grade: 'Đệm hát 2',
            months: [4, 6],
            pieces: [
              { title: 'Fly Me to the Moon', composer: 'Bart Howard (1954)', note: 'Vòng quãng 5 và ii – V – I; đệm swing hoặc bossa.' },
              { title: 'Blue Bossa', composer: 'Kenny Dorham', note: 'Điệu bossa nova; ii – V sang giọng mới.' },
              { title: 'Autumn Leaves (Les feuilles mortes)', composer: 'Joseph Kosma', note: 'ii – V – I trưởng và thứ.' },
            ],
            checkpoint: ['Xếp hợp âm bảy, chín không cần nghĩ lâu', 'Đệm bossa nova và swing đúng tiết tấu', 'Phối hợp âm cho một giai điệu lạ ngay tại chỗ', 'Dịch một bài đệm sang giọng ca sĩ yêu cầu'],
            units: [
              {
                title: 'Hợp âm mở rộng',
                goal: 'Dùng và xếp hợp âm 7, 9, 11, 13.',
                lessons: [
                  { slug: 'hop-am-mo-rong' },
                  { slug: 'xep-hop-am' },
                  { slug: 'ii-v-i' },
                ],
                practice: ['ii – V – I mười hai giọng, hai cách xếp.', 'Thay hợp âm ba bằng hợp âm bảy trong bài đã đệm.'],
              },
              {
                title: 'Phong cách',
                goal: 'Đệm đúng chất từng thể loại.',
                lessons: [
                  { slug: 'dem-bossa-nova' },
                  { slug: 'dem-rnb-neo-soul' },
                  { slug: 'dem-jazz' },
                ],
                practice: ['Chơi theo bản thu gốc, bắt chước tiết tấu tay trái.', 'Đệm một bài Việt theo điệu bossa.'],
              },
              {
                title: 'Phối hợp âm và dịch giọng',
                goal: 'Kỹ năng như bài hoà âm đàn phím của LCM và lead sheet của RCM.',
                lessons: [
                  { slug: 'phoi-hoa-am-giai-dieu' },
                  { slug: 'hoa-am-cho-giai-dieu-ngu-cung' },
                  { slug: 'dich-giong' },
                ],
                practice: ['Mỗi tuần phối một giai điệu lạ, chưa nghe bản gốc.', 'Dịch bài đang đệm lên một quãng 3.'],
              },
            ],
          },
          {
            title: 'Cùng ca sĩ và tự do',
            subtitle: 'Đệm cho ca sĩ thật; dạo đầu, nối câu, solo ngẫu hứng; chơi theo tai; phong cách đệm hiện đại.',
            grade: 'Đệm hát 3',
            months: [4, 6],
            pieces: [
              { title: 'Birdland', composer: 'Joe Zawinul', note: 'Có trong sách Trinity Rock & Pop Keyboards Grade 8.' },
              { title: 'Firth of Fifth', composer: 'Genesis', note: 'Có trong sách Trinity Rock & Pop Keyboards Grade 8.' },
              { title: 'Một chương trình 5 bài đệm cho ca sĩ, có dạo đầu và kết tự soạn', composer: 'Người học', note: 'Bài tốt nghiệp của giáo trình.' },
            ],
            checkpoint: ['Đệm cho ca sĩ, theo kịp khi ca sĩ đổi tốc độ hoặc vào sớm', 'Ngẫu hứng dạo đầu 4 – 8 ô và đoạn solo một vòng', 'Chơi lại bằng tai một bài pop sau vài lần nghe', 'Dịch giọng tức thì theo yêu cầu'],
            units: [
              {
                title: 'Đệm cho ca sĩ',
                goal: 'Nghe, thở và đi theo người hát.',
                lessons: [
                  { slug: 'dem-cho-ca-si' },
                  { slug: 'dem-hat-hien-dai' },
                  { slug: 'ky-nang-dan-phim-chuc-nang' },
                ],
                practice: ['Đệm cho một ca sĩ thật mỗi tuần.', 'Tập dạo đầu bằng 4 ô cuối của điệp khúc.'],
              },
              {
                title: 'Tai và ngẫu hứng',
                goal: 'Chơi theo tai (playback) và ngẫu hứng (improvising) — hai lựa chọn kỹ năng session của Trinity.',
                lessons: [
                  { slug: 'tai-hoa-am' },
                  { slug: 'ngau-hung-hop-am' },
                  { slug: 'ngau-hung-piano' },
                ],
                practice: ['Nghe một bài pop, chép vòng hợp âm không nhìn tài liệu.', 'Ngẫu hứng một vòng solo trên vòng hợp âm của bài đang đệm.'],
              },
            ],
          },
        ],
      },
    ],
  },
]
