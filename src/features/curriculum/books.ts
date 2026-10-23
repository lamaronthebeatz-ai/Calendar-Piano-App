import harmonyCover from '../../assets/covers/hoa-am-co-dien.webp'
import polyphonyCover from '../../assets/covers/phuc-dieu-nghiem-khac.webp'
import fuxCover from '../../assets/covers/doi-am-fux.webp'
import albrechtsbergerCover from '../../assets/covers/albrechtsberger.webp'
import type { Book } from './types'

/**
 * Nhạc lý cơ bản, hai quyển. Mỗi chương là một bài sẵn có của thư viện (giữ nguyên slug), xếp lại theo
 * thứ tự học; phần mở đầu, lời dẫn từng phần và bài tập cuối phần được viết riêng cho sách.
 * Quyển 1 ứng với nhạc lý khoảng ABRSM Grade 1 – 3, Quyển 2 với Grade 4 – 5 và các nền tảng hoà âm, hình thức.
 * Hoà Âm Cổ Điển theo thứ tự chủ đề của sách bốn tác giả (trường phái Nga – Xô viết).
 * Phức Điệu Nghiêm Khắc theo hệ thống Taneyev và giáo trình Nhạc viện Hà Nội (Phạm Tú Hương, 1991).
 */
export const BOOKS: Book[] = [
  {
    id: 'nhac-ly-co-ban-1',
    title: 'Nhạc Lý Cơ Bản',
    volume: 'Quyển 1',
    subtitle: 'Âm thanh, ký hiệu, trường độ, quãng, âm giai và hợp âm ba — đọc và hiểu được bản nhạc.',
    author: 'Lamar',
    audience: 'Người mới học · mọi lứa tuổi',
    hue: 70,
    glyph: '𝄞',
    preface: `
Cuốn sách này dành cho người **bắt đầu học nhạc lý**: học sinh piano, người lớn tự học, giáo viên cần một trình tự dạy. Mục tiêu là sau khi đọc xong, người học **đọc được bản nhạc**, hiểu nốt nào, dài bao lâu, thuộc giọng gì, hợp âm nào đang vang lên.

## Cấu trúc sách
Mỗi bài trong sách là một bài của thư viện Lý thuyết, được **xếp lại theo thứ tự học** — từ âm thanh và ký hiệu, đến trường độ, quãng, âm giai, rồi hợp âm và ký hiệu diễn tấu. Đường dẫn của từng bài giữ nguyên như trong thư viện. Lời dẫn mỗi phần, phần "Mục tiêu bài học" ở đầu bài và bài tập cuối phần được viết riêng cho sách.

Trình tự bám theo chương trình nhạc lý phổ biến (ABRSM Grade 1 – 3), đối chiếu ở bài [[chuong-trinh-nhac-ly-abrsm]]; ai học theo lộ trình piano của thư viện có thể đọc song song với giáo trình ở mục Giáo trình.

## Cách đọc
1. Đọc theo thứ tự. Mỗi phần dựa trên phần trước.
2. Mỗi bài đọc **hai lần**: lần đầu đọc lướt phần "Mục tiêu bài học" và các tiêu đề, lần sau đọc kỹ và **chơi thử trên đàn** mọi ví dụ.
3. Làm bài tập ôn tập cuối phần trước khi sang phần mới. Đánh dấu "đã học xong" ở cuối bài để theo dõi tiến độ; câu hỏi ôn tập cuối bài có đáp án ở cuối sách.
4. Chữ gạch chân là liên kết; nếu có ghi "(Bài n)" thì bài đó nằm trong sách và mở ngay trong sách, còn lại mở ở thư viện.

## Về nguồn
Các bài trong thư viện đều ghi nguồn ở cuối; chỗ nào nguồn chưa đối chiếu hoặc mâu thuẫn được ghi ngay trong bài. Sách giữ nguyên cách làm đó.

Quyển 2 tiếp tục với nhịp nâng cao, điệu thức, hợp âm bảy và chức năng hoà âm, giai điệu và hình thức.
`,
    parts: [
      {
        title: 'Âm thanh và ký hiệu',
        intro: 'Âm nhạc là âm thanh có tổ chức. Phần này đi từ cao độ — đặc tính đầu tiên của một âm — đến cách ghi nó lên giấy: nốt, khuông, khoá, bàn phím, tên nốt và dấu hoá. Đây là "bảng chữ cái" của mọi phần sau.',
        chapters: [
          { slug: 'nhac-ly-co-ban', focus: 'Đọc như bản đồ của cả sách: các mảng của nhạc lý và thứ tự học.' },
          { slug: 'cao-do', focus: 'Cao độ là gì; vì sao một nốt "cao" hay "thấp".' },
          { slug: 'not-nhac', focus: 'Hình nốt, tên nốt, Đô giữa (C4).' },
          { slug: 'khuong-nhac', focus: '5 dòng 4 khe, dòng kẻ phụ, vạch nhịp.' },
          { slug: 'khoa-nhac', focus: 'Ba loại khoá và vì sao cần nhiều khoá.' },
          { slug: 'khoa-sol', focus: 'Thuộc các nốt trên dòng và khe khoá Sol.' },
          { slug: 'khoa-fa', focus: 'Thuộc các nốt khoá Fa; vị trí Đô giữa.' },
          { slug: 'khoa-do', focus: 'Đọc để nhận ra; chưa cần đọc nhanh.' },
          { slug: 'ban-phim', focus: 'Tìm mọi nốt trên đàn nhờ nhóm 2 và 3 phím đen.' },
          { slug: 'ten-not-va-he-thong-xuong-am', focus: 'Tên Đô – Rê – Mi và C – D – E; Đô cố định và Đô di động.' },
          { slug: 'ky-hieu-cao-do-c4-helmholtz-midi', focus: 'Đọc ký hiệu C4, c′ và số MIDI.' },
          { slug: 'cung-nua-cung', focus: 'Cung và nửa cung trên bàn phím.' },
          { slug: 'dau-hoa', focus: 'Thăng, giáng, bình; phạm vi tác dụng trong ô nhịp.' },
        ],
        exercises: [
          'Viết tên 20 nốt ngẫu nhiên trên khoá Sol và 20 nốt trên khoá Fa, bấm giờ; lặp lại mỗi ngày đến khi dưới 1 giây mỗi nốt.',
          'Trên bàn phím, chơi mọi nốt Đô từ trầm lên cao và gọi tên theo ký hiệu C1 … C8.',
          'Chỉ ra 5 cặp nửa cung tự nhiên (không cần phím đen) trên bàn phím.',
          'Viết một nốt rồi thêm dấu thăng, giáng, bình; chơi và gọi tên cả ba.',
        ],
      },
      {
        title: 'Trường độ và nhịp',
        intro: 'Nếu cao độ cho biết "nốt nào", trường độ cho biết "bao lâu". Phần này dạy các hình nốt và dấu lặng, chấm dôi và dấu nối, số chỉ nhịp, cách ghép đuôi nốt, nhịp độ, liên ba và đảo phách — đủ để đọc tiết tấu của phần lớn bản nhạc cho người mới.',
        chapters: [
          { slug: 'tiet-tau', focus: 'Phân biệt phách, nhịp và tiết tấu.' },
          { slug: 'truong-do', focus: 'Quan hệ gấp đôi giữa các hình nốt.' },
          { slug: 'dau-lang', focus: 'Mỗi hình nốt có dấu lặng tương ứng.' },
          { slug: 'cham-doi-dau-noi', focus: 'Chấm dôi cộng thêm một nửa; dấu nối nối hai nốt cùng cao độ.' },
          { slug: 'so-chi-nhip', focus: 'Nhịp đơn 2/4, 3/4, 4/4 và nhịp kép 6/8.' },
          { slug: 'cam-nhan-phach', focus: 'Đếm to và vận động theo phách.' },
          { slug: 'quy-tac-ghep-duoi-va-chia-nhom-not', focus: 'Ghép đuôi để lộ ra phách.' },
          { slug: 'vach-nhip-va-trinh-bay-ban-nhac', focus: 'Đọc vạch kép, vạch kết, ô lấy đà.' },
          { slug: 'nhip-do', focus: 'Thuật ngữ nhịp độ và số metronome.' },
          { slug: 'lien-ba', focus: 'Ba nốt trong thời gian của hai.' },
          { slug: 'dao-phach', focus: 'Nhận ra trọng âm rơi vào phách yếu.' },
        ],
        exercises: [
          'Vỗ và đếm to 8 ô nhịp 4/4 có nốt trắng chấm dôi, nốt đen, móc đơn và dấu lặng.',
          'Viết lại một đoạn ghép đuôi sai thành đúng theo phách (nhịp 4/4 và 6/8).',
          'Chơi một âm giai với máy nhịp ở 60, rồi đổi sang liên ba móc đơn.',
          'Nghe một bài nhạc pop, gõ phách và chỉ ra chỗ có đảo phách.',
        ],
      },
      {
        title: 'Quãng',
        intro: 'Quãng là khoảng cách giữa hai nốt — đơn vị đo của giai điệu và hoà âm. Phần này dạy gọi tên quãng theo số và tính chất, đảo quãng, thuận và nghịch âm, và những quãng "trùng âm" viết khác nhau mà nghe như nhau.',
        chapters: [
          { slug: 'quang', focus: 'Đếm số, rồi xác định tính chất (đúng, trưởng, thứ, tăng, giảm).' },
          { slug: 'quang-dao', focus: 'Quy tắc 9 và đổi tính chất khi đảo.' },
          { slug: 'thuan-nghich', focus: 'Nghe sự khác nhau giữa thuận và nghịch.' },
          { slug: 'trung-am', focus: 'Cùng phím, khác tên: vì sao tên nốt quan trọng.' },
          { slug: 'ky-hieu-quang-tam', focus: 'Ký hiệu 8va, 8vb, 15ma.' },
        ],
        exercises: [
          'Gọi tên 20 quãng viết sẵn (cả số và tính chất); kiểm tra bằng cách đếm nửa cung.',
          'Viết quãng đảo của mỗi quãng trên.',
          'Hát hoặc chơi các quãng 2, 3, 4, 5, 8 từ nốt Đô và gắn mỗi quãng với một câu hát quen.',
        ],
      },
      {
        title: 'Âm giai và giọng',
        intro: 'Âm giai là "vật liệu" của một bản nhạc; giọng là trung tâm mà mọi nốt hướng về. Phần này dạy âm giai trưởng và thứ, tên các bậc, hoá biểu, vòng quãng 5, giọng song song, ngũ cung và cromatic, và cách xác định giọng của một bản nhạc.',
        chapters: [
          { slug: 'am-giai', focus: 'Âm giai là gì; vì sao có nhiều loại.' },
          { slug: 'am-giai-truong', focus: 'Công thức cung – nửa cung của trưởng.' },
          { slug: 'am-giai-thu', focus: 'Ba dạng thứ: tự nhiên, hoà âm, giai điệu.' },
          { slug: 'bac-am-giai', focus: 'Tên và vai trò của các bậc (chủ, át, hạ át, âm dẫn).' },
          { slug: 'hoa-bieu', focus: 'Thứ tự dấu thăng và giáng; đọc nhanh hoá biểu.' },
          { slug: 'vong-quang-nam', focus: 'Thuộc vòng quãng 5 theo cả hai chiều.' },
          { slug: 'giong-song-song', focus: 'Mỗi giọng trưởng có một giọng thứ cùng hoá biểu.' },
          { slug: 'am-giai-ngu-cung', focus: 'Năm nốt không có nửa cung; gần với dân ca Việt.' },
          { slug: 'am-giai-cromatic', focus: 'Mười hai nửa cung và cách viết đi lên, đi xuống.' },
          { slug: 'xac-dinh-giong-cua-ban-nhac', focus: 'Ba bước: hoá biểu, nốt đầu – nốt cuối, dấu hoá bất thường.' },
        ],
        exercises: [
          'Viết các âm giai trưởng đến 3 dấu thăng và 3 dấu giáng, có hoá biểu và không hoá biểu.',
          'Viết La thứ, Mi thứ, Rê thứ ở cả ba dạng.',
          'Vẽ vòng quãng 5 từ trí nhớ, ghi giọng song song bên trong.',
          'Chọn 3 bài trong mục Phân tích tác phẩm, xác định giọng trước khi đọc bài phân tích, rồi kiểm tra.',
        ],
      },
      {
        title: 'Hợp âm ba, kết và ký hiệu diễn tấu',
        intro: 'Phần cuối của Quyển 1 ghép các nốt thành hợp âm, giới thiệu các loại kết — "dấu câu" của âm nhạc — và những ký hiệu cho biết chơi thế nào: cường độ, cách diễn tấu, dấu nhắc lại, dấu luyến, hoa mỹ, thuật ngữ. Bài cuối là bài ôn theo chương trình nhạc lý cấp 1 – 2.',
        chapters: [
          { slug: 'hop-am-ba', focus: 'Bốn loại hợp âm ba; dựng hợp âm trên mọi bậc.' },
          { slug: 'the-dao-hop-am', focus: 'Thế gốc, đảo 1, đảo 2 và ký hiệu.' },
          { slug: 'ky-hieu-hop-am', focus: 'Đọc ký hiệu chữ (C, Am), hợp âm sus và ký hiệu gạch chéo (G/B).' },
          { slug: 'cau-ket', focus: 'Các loại kết, kết với I6/4 và các kết đặc biệt.' },
          { slug: 'cuong-do', focus: 'Từ pp đến ff; crescendo, diminuendo.' },
          { slug: 'cach-dien-tau', focus: 'Legato, staccato, tenuto, accent.' },
          { slug: 'dau-luyen-dau-noi-va-dau-cau', focus: 'Phân biệt dấu luyến, dấu nối, dấu câu.' },
          { slug: 'dau-nhac-lai', focus: 'Đọc đúng đường đi của D.C., D.S., coda.' },
          { slug: 'ky-hieu-hoa-my', focus: 'Các ký hiệu hoa mỹ; láy rền bắt đầu từ nốt nào tuỳ phong cách.' },
          { slug: 'thuat-ngu', focus: 'Các thuật ngữ Ý hay gặp nhất.' },
          { slug: 'nhac-ly-cap-1-2', focus: 'Ôn toàn bộ Quyển 1 theo chương trình nhạc lý cấp 1 – 2.' },
        ],
        exercises: [
          'Dựng hợp âm ba trên 7 bậc của Đô trưởng và La thứ hoà âm; ghi loại từng hợp âm.',
          'Viết bốn loại kết ở Sol trưởng; chơi và nghe sự khác nhau.',
          'Lấy một bản nhạc đang tập, đánh dấu mọi ký hiệu diễn tấu và giải thích từng cái.',
          'Làm một đề nhạc lý cấp 1 hoặc 2 (ABRSM hoặc trường nhạc) trong 90 phút.',
        ],
      },
    ],
  },
  {
    id: 'nhac-ly-co-ban-2',
    title: 'Nhạc Lý Cơ Bản',
    volume: 'Quyển 2',
    subtitle: 'Nhịp nâng cao, điệu thức, hợp âm bảy, chức năng hoà âm, chuyển giọng, giai điệu và hình thức.',
    author: 'Lamar',
    audience: 'Đã học xong Quyển 1',
    hue: 32,
    glyph: '𝄢',
    preface: `
Quyển 2 dành cho người đã nắm Quyển 1: đọc được nốt, nhịp, quãng, âm giai và hợp âm ba. Ở đây nhạc lý chuyển từ **ký hiệu** sang **cấu trúc**: vì sao các hợp âm nối với nhau như vậy, một giai điệu được xây thế nào, một bản nhạc chia thành những phần nào.

## Cấu trúc sách
Như Quyển 1, mỗi bài trong sách là một bài của thư viện Lý thuyết, giữ nguyên đường dẫn, được xếp lại theo thứ tự học. Lời dẫn mỗi phần, phần "Mục tiêu bài học" và bài tập cuối phần được viết riêng cho sách. Trình tự bám theo chương trình nhạc lý cấp 3 – 5 (xem [[chuong-trinh-nhac-ly-abrsm]]) và phần đầu của giáo trình hoà âm ([[giao-trinh-hoa-am]]) và hình thức ([[lo-trinh-hinh-thuc]]).

## Cách đọc
1. Ôn lại Quyển 1 nếu một bài nhắc đến khái niệm còn mơ hồ.
2. Ở các phần hoà âm và hình thức, **chơi mọi ví dụ trên đàn** và nghe bản thu được gợi ý; nhạc lý ở mức này phải nghe được, không chỉ đọc được.
3. Làm bài tập ôn tập cuối mỗi phần và đánh dấu đã học từng bài.

Sau Quyển 2, đường đi tiếp là [[giao-trinh-hoa-am]] (hoà âm bốn bè đầy đủ), [[lo-trinh-hinh-thuc]] và [[phuong-phap-phan-tich-tac-pham]].
`,
    parts: [
      {
        title: 'Nhịp nâng cao',
        intro: 'Quyển 1 dừng ở nhịp đơn, nhịp kép 6/8 và liên ba. Phần này mở rộng sang nhịp lấy đà, nhịp hỗn hợp (5/8, 7/8), hemiola, đa nhịp và nhạc không có vạch nhịp.',
        chapters: [
          { slug: 'nhip-lay-da', focus: 'Ô lấy đà và cách tính ô cuối.' },
          { slug: 'nhip-hon-hop', focus: 'Nhóm 2 + 3 và 3 + 2 + 2; đếm bằng phách không đều.' },
          { slug: 'hemiola', focus: 'Ba nhóm hai phách đặt vào khoảng thời gian của hai nhóm ba phách.' },
          { slug: 'da-nhip', focus: 'Hai nhịp cùng lúc; tập 2 chọi 3 trên đàn.' },
          { slug: 'nhip-tu-do-va-ky-hieu-khong-nhip', focus: 'Đọc nhạc không vạch nhịp.' },
        ],
        exercises: [
          'Vỗ các nhóm 5/8 (2 + 3, 3 + 2) và 7/8 (2 + 2 + 3), đếm to.',
          'Tập 2 chọi 3 rồi 3 chọi 4 trên đàn, hai tay hai nốt khác nhau.',
          'Tìm hemiola ở cuối một bài minuet hoặc courante Baroque.',
        ],
      },
      {
        title: 'Âm giai, điệu thức và giọng',
        intro: 'Ngoài trưởng và thứ còn các điệu thức cổ, âm giai toàn cung, và những câu hỏi gốc rễ: điệu tính là gì, vì sao 12 nửa cung lại "bằng nhau". Phần này cũng dạy dịch giọng — kỹ năng hằng ngày của người đệm đàn.',
        chapters: [
          { slug: 'dieu-thuc', focus: 'Các điệu thức nhà thờ: cách nghĩ thực hành và màu sắc từng điệu.' },
          { slug: 'dieu-tinh', focus: 'Trung tâm, sức hút và vai trò của âm dẫn.' },
          { slug: 'am-giai-toan-cung', focus: 'Sáu nốt cách đều; màu ấn tượng.' },
          { slug: 'dich-giong', focus: 'Dịch theo quãng và theo bậc; dịch hoá biểu.' },
          { slug: 'chuoi-boi-am', focus: 'Nền âm học của quãng 8, 5, 3.' },
          { slug: 'luat-binh-quan', focus: 'Vì sao piano chia quãng 8 thành 12 nửa cung bằng nhau.' },
        ],
        exercises: [
          'Chơi bảy điệu thức bắt đầu từ Rê (Rê Dorian, Rê Phrygian…), ghi công thức cung – nửa cung.',
          'Dịch một bài hát thiếu nhi từ Đô trưởng sang Fa, Sol và Rê trưởng, viết ra và chơi.',
          'Trên đàn, tìm các bồi âm 2 – 6 của nốt Đô 2 (C2).',
        ],
      },
      {
        title: 'Hợp âm bảy và chức năng hoà âm',
        intro: 'Phần trung tâm của Quyển 2: hợp âm bảy, ba chức năng chủ – hạ át – át, nốt ngoài hợp âm, hợp âm át phụ, chuyển giọng, nhịp điệu hoà âm, dẫn giọng và cách đặt hợp âm cho một giai điệu.',
        chapters: [
          { slug: 'hop-am-bay', focus: 'Hợp âm 7 át (V7), quy tắc giải quyết nốt 7, các hợp âm 7 trong giọng trưởng.' },
          { slug: 'chuc-nang-hoa-am', focus: 'Ba nhóm chức năng và vòng T – S – D – T.' },
          { slug: 'vong-hop-am', focus: 'Những vòng hợp âm hay gặp nhất.' },
          { slug: 'dan-giong', focus: 'Nối hợp âm gần nhất; tránh song song quãng 5, quãng 8.' },
          { slug: 'not-ngoai-hop-am', focus: 'Nốt lướt, nốt thêu, nốt chờ, nốt luyến.' },
          { slug: 'hop-am-at-phu', focus: 'V/V, V/vi: nhận ra qua dấu hoá bất thường.' },
          { slug: 'chuyen-giong', focus: 'Chuyển sang giọng gần qua hợp âm chung.' },
          { slug: 'nhip-dieu-hoa-am', focus: 'Tốc độ đổi hợp âm, nhanh dần về kết.' },
          { slug: 'phoi-hoa-am-giai-dieu', focus: 'Quy trình đặt hợp âm cho giai điệu.' },
        ],
        exercises: [
          'Viết V7 ở mọi giọng trưởng đến 4 dấu, cả ba thế đảo, và giải quyết về I.',
          'Phân tích hợp âm 8 ô đầu một sonatina (ví dụ Clementi op. 36 số 1) bằng số La Mã.',
          'Đặt hợp âm cho một giai điệu dân ca 8 ô theo quy trình trong bài cuối phần, rồi đệm bằng tay trái.',
          'Tìm một hợp âm át phụ và một chỗ chuyển giọng trong bài đang tập.',
        ],
      },
      {
        title: 'Giai điệu và hình thức',
        intro: 'Nhạc lý không dừng ở hợp âm: một bản nhạc được xây từ motif, câu, đoạn, rồi các khuôn hình thức. Phần này đi từ ý nhạc nhỏ nhất đến hình thức hai đoạn, ba đoạn, biến tấu và rondo — đủ để nhìn ra "kiến trúc" của hầu hết bài piano ở trình độ trung cấp.',
        chapters: [
          { slug: 'giai-dieu', focus: 'Đường nét, đi bậc và nhảy, đỉnh giai điệu.' },
          { slug: 'motif', focus: 'Ý nhạc nhỏ nhất và cách biến đổi nó.' },
          { slug: 'cau-nhac', focus: 'Câu, đoạn; câu hỏi – câu đáp; sentence và period.' },
          { slug: 'hinh-thuc-am-nhac', focus: 'Các tầng của hình thức; chữ cái A, B.' },
          { slug: 'hinh-thuc-hai-doan', focus: 'Hai đoạn đơn và hai đoạn có tái hiện.' },
          { slug: 'hinh-thuc-ba-doan', focus: 'ABA và tái hiện.' },
          { slug: 'bien-tau', focus: 'Giữ cái gì, đổi cái gì qua các lần biến tấu.' },
          { slug: 'rondo', focus: 'ABACA: chủ đề quay lại.' },
        ],
        exercises: [
          'Chia câu và đoạn cho 3 bài piano đang tập; ghi kết ở cuối mỗi câu.',
          'Vẽ sơ đồ hình thức (A, B, A′…) cho một minuet và một rondo.',
          'Viết một giai điệu 8 ô kiểu câu hỏi – câu đáp, kết nửa ở ô 4 và kết trọn ở ô 8.',
        ],
      },
      {
        title: 'Ký âm nâng cao và tổng ôn',
        intro: 'Phần cuối chuẩn bị cho việc đọc nhạc ngoài piano: nhạc cụ dịch giọng và tổng phổ, bè trầm số, giản phổ, các ký hiệu ít gặp — và hai chương ôn theo chương trình nhạc lý cấp 3 – 4 và cấp 5.',
        chapters: [
          { slug: 'nhac-cu-dich-giong-va-doc-tong-pho', focus: 'Đọc bè clarinet, horn; thứ tự nhạc cụ trong tổng phổ.' },
          { slug: 'bass-so', focus: 'Đọc các số cơ bản 6, 6/4, 7, 6/5.' },
          { slug: 'gian-pho-ky-am-so', focus: 'Đọc và chuyển giản phổ sang khuông nhạc.' },
          { slug: 'ky-hieu-nang-cao', focus: 'Nhận ra các ký hiệu đặc biệt.' },
          { slug: 'nhac-ly-cap-3-4', focus: 'Ôn theo chương trình cấp 3 – 4.' },
          { slug: 'nhac-ly-cap-5', focus: 'Ôn theo chương trình cấp 5.' },
        ],
        exercises: [
          'Viết lại một giai điệu cho clarinet Si♭ và horn Fa (giọng viết).',
          'Chơi một bè trầm số 8 ô có 6 và 6/4 trên đàn.',
          'Làm trọn một đề nhạc lý cấp 5 trong 2 giờ, tự chấm theo đáp án.',
        ],
      },
    ],
  },
  {
    id: 'hoa-am-co-dien',
    title: 'Hoà Âm Cổ Điển',
    volume: 'Trường phái Nga – Xô viết',
    subtitle: 'Hoà âm bốn bè theo hệ thống chức năng của sách giáo khoa bốn tác giả (Dubovsky – Evseev – Sposobin – Sokolov): hợp âm ba chính, kết, thể đảo, nhóm át và hạ át, lệch giọng và chuyển giọng.',
    author: 'Lamar',
    audience: 'Đã học xong Nhạc Lý Cơ Bản',
    hue: 55,
    glyph: '𝄋',
    coverImage: harmonyCover,
    preface: `
Cuốn này dạy **hoà âm cổ điển** — hoà âm của thời kỳ thông dụng, khoảng 1650 – 1900 — theo cách mà các nhạc viện Nga – Xô viết, và nhiều trường nhạc chịu ảnh hưởng của họ, vẫn dạy: **hệ thống chức năng** T – S – D và **luyện viết bốn bè** từ dễ đến khó.

## Hệ thống của sách
Trình tự các bài bám theo thứ tự chủ đề của *Учебник гармонии* (Giáo trình hoà âm) của **I. Dubovsky, S. Evseev, I. Sposobin, V. Sokolov** — thường gọi là "sách giáo khoa bốn tác giả", in lần đầu ở Moskva năm 1937 – 38. Mỗi bài ghi rõ chủ đề tương ứng trong sách đó ở phần "Mục tiêu bài học"; số thứ tự chủ đề theo các bản in gần đây (2005 – 2012), lệch khoảng hai số so với bản 1965, và vài số ở giữa còn mâu thuẫn giữa các nguồn. Lịch sử, gốc lý thuyết (Riemann qua Catoire) và đặc trưng của sách được trình bày ở bài đầu tiên của Phần I.

Lưu ý về tên gọi: hệ thống **Taneyev** (S. I. Taneyev, *Đối vị di động của lối viết nghiêm khắc*, 1909) là hệ thống của môn **phức điệu**, không phải của môn hoà âm — xem cuốn *Phức Điệu Nghiêm Khắc* trong tủ sách và bài [[phuc-dieu-nghiem-khac]]. Cuốn sách này theo hệ thống hoà âm của sách bốn tác giả.

## Cách đọc
1. Cần nắm trước: quãng, âm giai, hoá biểu, hợp âm ba và hợp âm bảy — tức là hai quyển *Nhạc Lý Cơ Bản*.
2. Mỗi bài: đọc, **chơi mọi ví dụ trên đàn**, rồi làm bài tập viết bốn bè. Hoà âm học bằng tay và tai, không chỉ bằng mắt.
3. Ở những chỗ hai trường phái giải thích khác nhau, bài có mục **"Hai trường phái"**; bảng đối chiếu đầy đủ ở Phần VI.
4. Làm bài tập ôn tập cuối mỗi phần trước khi sang phần mới.
`,
    parts: [
      {
        title: 'Nhập môn: hai trường phái và hệ chức năng',
        intro: 'Trước khi viết hợp âm đầu tiên, cần biết mình đang học theo truyền thống nào và đọc ký hiệu ra sao. Phần này giới thiệu sách bốn tác giả, so nó với truyền thống phương Tây, và hệ ký hiệu chức năng T – S – D mà cả cuốn sách dùng.',
        chapters: [
          { slug: 'hoa-am-truong-phai-nga-xo-viet', focus: 'Sách bốn tác giả: tác giả, lịch sử, gốc Riemann – Catoire, thứ tự các chủ đề.' },
          { slug: 'hai-truong-phai-hoa-am', focus: 'Hai truyền thống dạy hoà âm và vì sao thư viện trình bày song song.' },
          { slug: 'ky-hieu-chuc-nang-truong-phai-nga', focus: 'Đọc và viết ký hiệu T, S, D, K64, SII, TSVI, DVII7, DD.' },
          { slug: 'he-thong-hoa-am-co-dien', focus: 'Bức tranh chung: hoà âm cổ điển hình thành thế nào (Rameau, Weber, Riemann).' },
        ],
        exercises: [
          'Ghi ký hiệu chức năng cho các hợp âm ba trên bảy bậc của Đô trưởng và La thứ hoà âm.',
          'Viết lại một chuỗi số La Mã (I – IV – V – I, I – ii6 – V7 – I) bằng ký hiệu chức năng kiểu Nga.',
        ],
      },
      {
        title: 'Hợp âm ba chính và kết cấu bốn bè',
        intro: 'Tương ứng các chủ đề 1 – 4 và 8 của sách bốn tác giả: hợp âm ba trưởng và thứ trong kết cấu bốn bè, hệ chức năng của ba hợp âm chính, ba cách nối hợp âm (nối hoà thanh, nối giai điệu, nhảy quãng 3) và phối hoà âm giai điệu bằng ba hợp âm chính.',
        chapters: [
          { slug: 'hop-am-ba', focus: 'Chủ đề 1: hợp âm ba trưởng, thứ; sắp xếp gần và xa.' },
          { slug: 'luat-hoa-am-bon-be', focus: 'Chủ đề 1: kết cấu bốn bè — tầm âm, khoảng cách, nhân đôi, chuyển động bị cấm.' },
          { slug: 'chuc-nang-hoa-am', focus: 'Chủ đề 2: hệ chức năng của các hợp âm ba chính.' },
          { slug: 'noi-hop-am', focus: 'Chủ đề 3 và 8: nối hoà thanh, nối giai điệu, nhảy quãng 3.' },
          { slug: 'dan-giong', focus: 'Dẫn giọng: đi gần nhất, giữ nốt chung, tránh song song quãng 5 – 8.' },
          { slug: 'phoi-hoa-am-giai-dieu', focus: 'Chủ đề 4: phối hoà âm giai điệu bằng T, S, D.' },
        ],
        exercises: [
          'Viết bốn bè chuỗi T – S – D – T ở Đô, Sol, Fa trưởng và La, Mi, Rê thứ, mỗi giọng cả ba cách sắp xếp ban đầu.',
          'Nối T – S và S – D bằng nối hoà thanh, nối giai điệu, rồi bằng nhảy quãng 3; chơi và nghe sự khác nhau.',
          'Phối hoà âm bốn bè cho một giai điệu 8 ô chỉ dùng T, S, D.',
        ],
      },
      {
        title: 'Kết, câu nhạc và các thể đảo',
        intro: 'Tương ứng các chủ đề 9 – 14: kết và câu nhạc, hợp âm bốn sáu kết (K64), hợp âm sáu của các hợp âm chính, nối hai hợp âm sáu, hợp âm bốn sáu lướt và thêu — những công cụ làm cho bè trầm biết "hát".',
        chapters: [
          { slug: 'cau-ket', focus: 'Chủ đề 9 và 20: kết trọn, kết nửa, kết plagal, kết ngắt.' },
          { slug: 'cau-nhac', focus: 'Chủ đề 9: câu nhạc và đoạn nhạc — nơi đặt kết.' },
          { slug: 'hop-am-sau-bon', focus: 'Chủ đề 10 và 14: K64, bốn sáu lướt, bốn sáu thêu.' },
          { slug: 'the-dao-hop-am', focus: 'Chủ đề 11 và 13: hợp âm sáu của T, S, D; nối hai hợp âm sáu.' },
          { slug: 'nhip-dieu-hoa-am', focus: 'Đổi hợp âm ở đâu trong ô nhịp; nhịp điệu hoà âm dồn về kết.' },
        ],
        exercises: [
          'Viết kết trọn có K64 ở năm giọng trưởng và năm giọng thứ.',
          'Phối hoà âm cho một bè trầm cho sẵn có T6, S6, D6 và một hợp âm bốn sáu lướt.',
          'Chia câu và đánh dấu kết trong một chorale bốn bè của Bach.',
        ],
      },
      {
        title: 'Nhóm át và hạ át mở rộng',
        intro: 'Tương ứng các chủ đề 15 – 26: hợp âm bảy át D7 và các thể đảo, hợp âm bậc II (SII, SII6) và trưởng hoà âm, hợp âm bậc VI và kết ngắt, SII7, hợp âm bảy cảm âm DVII7, hợp âm chín át, nốt ngoài hợp âm và mô tiến diatonic.',
        chapters: [
          { slug: 'hop-am-bay', focus: 'Chủ đề 15 – 17: D7, các thể đảo D65, D43, D2 và cách giải quyết.' },
          { slug: 'truong-hoa-am', focus: 'Chủ đề 19: trưởng hoà âm (hạ bậc VI) và hai cách giải thích.' },
          { slug: 'hop-am-cam-am', focus: 'Chủ đề 21 – 22: DVII7 — hợp âm bảy cảm âm, nửa giảm và giảm.' },
          { slug: 'hop-am-mo-rong', focus: 'Chủ đề 23: hợp âm chín át D9 và các hợp âm mở rộng.' },
          { slug: 'not-ngoai-hop-am', focus: 'Nốt lướt, nốt thêu, nốt chờ, nốt luyến trong bốn bè.' },
          { slug: 'mo-tien-hoa-am', focus: 'Chủ đề 26: mô tiến diatonic.' },
        ],
        exercises: [
          'Viết D7 và ba thể đảo ở bốn giọng, giải quyết về T đúng quy tắc nốt 7 và âm dẫn.',
          'Phối hoà âm một giai điệu có SII6 trước K64 ở kết.',
          'Viết một mô tiến diatonic bốn khâu theo vòng quãng 5.',
        ],
      },
      {
        title: 'Hoà âm cromatic: lệch giọng và chuyển giọng',
        intro: 'Tương ứng các chủ đề 33 trở đi: hệ cromatic, lệch giọng bằng hợp âm át phụ, chuyển giọng sang các giọng họ hàng mức một, âm ngân, rồi chuyển giọng xa qua hợp âm Napoli, qua giọng cùng tên và chuyển giọng trùng âm qua hợp âm bảy giảm.',
        chapters: [
          { slug: 'hoa-am-cromatic', focus: 'Bức tranh chung của hoà âm cromatic.' },
          { slug: 'hop-am-at-phu', focus: 'Chủ đề 33 – 34: lệch giọng (отклонение) bằng át phụ, DD.' },
          { slug: 'chuyen-giong', focus: 'Chủ đề 36: chuyển giọng sang giọng họ hàng mức một qua hợp âm chung.' },
          { slug: 'bass-ngan', focus: 'Chủ đề 49: âm ngân (органный пункт).' },
          { slug: 'hop-am-muon', focus: 'Hợp âm của giọng cùng tên; chuyển giọng qua giọng cùng tên.' },
          { slug: 'hop-am-napoli', focus: 'Chủ đề 52 – 59: hợp âm Napoli và chuyển giọng qua Napoli.' },
          { slug: 'hop-am-sau-tang', focus: 'Các hợp âm sáu tăng trước D.' },
          { slug: 'hop-am-bay-giam', focus: 'Hợp âm bảy giảm và chuyển giọng trùng âm.' },
          { slug: 'hop-am-not-chung', focus: 'Hợp âm nốt chung.' },
          { slug: 'hop-am-ba-tang', focus: 'Hợp âm ba tăng.' },
          { slug: 'trung-am-cromatic', focus: 'Quan hệ trung âm cromatic — cầu sang hoà âm thế kỷ 19.' },
        ],
        exercises: [
          'Viết một câu 8 ô ở Đô trưởng có lệch giọng sang Rê thứ và Sol trưởng bằng át phụ.',
          'Chuyển giọng từ Đô trưởng sang năm giọng họ hàng mức một, mỗi lần qua một hợp âm chung khác nhau.',
          'Viết kết có hợp âm Napoli và kết có hợp âm sáu tăng ở La thứ.',
          'Dùng một hợp âm bảy giảm để chuyển từ Đô thứ sang ba giọng khác nhau.',
        ],
      },
      {
        title: 'Phân tích, đối chiếu và tổng ôn',
        intro: 'Phần cuối đưa hoà âm vào tác phẩm thật: cách phân tích hoà âm, bảng đối chiếu hai trường phái cho từng điểm, toàn bộ công thức trên một trang, bảng thuật ngữ, và kỹ năng hoà âm trên đàn phím.',
        chapters: [
          { slug: 'phan-tich-hoa-am', focus: 'Quy trình phân tích hoà âm một tác phẩm.' },
          { slug: 'so-sanh-hai-truong-phai-hoa-am', focus: 'Đối chiếu từng điểm giữa trường phái Nga – Xô viết và phương Tây.' },
          { slug: 'meo-va-cong-thuc-hoa-am', focus: 'Toàn bộ công thức và mẹo nhớ để ôn thi.' },
          { slug: 'thuat-ngu-hoa-am', focus: 'Bảng thuật ngữ hoà âm Việt – Anh (và tên Nga ở các bài liên quan).' },
          { slug: 'ky-nang-dan-phim-chuc-nang', focus: 'Đưa hoà âm lên đàn: chuỗi kết, phối hoà âm, dịch giọng khi đọc.' },
        ],
        exercises: [
          'Phân tích hoà âm bằng ký hiệu chức năng toàn bộ một chorale của Bach và chương 2 một sonatina Cổ điển.',
          'Chơi trên đàn chuỗi T – S – K64 – D7 – T ở mọi giọng đến 4 dấu.',
          'Làm một đề thi hoà âm viết (giai điệu và bè trầm cho sẵn) trong 3 giờ.',
        ],
      },
    ],
  },
  {
    id: 'phuc-dieu-nghiem-khac',
    title: 'Phức Điệu Nghiêm Khắc',
    volume: 'Sergei Taneev',
    subtitle: 'Phức điệu nghiêm khắc theo hệ thống Taneyev và giáo trình Nhạc viện Hà Nội: giai điệu, đối vị đơn giản và phức tạp (chỉ số Iv, Ih), đảo ảnh, ba – bốn bè, mô phỏng, canon và hình thức.',
    author: 'Lamar',
    audience: 'Đã học xong Nhạc Lý Cơ Bản · song song Hoà Âm Cổ Điển',
    hue: 75,
    glyph: '♮',
    coverImage: polyphonyCover,
    preface: `
Cuốn này dạy **phức điệu nghiêm khắc** — lối viết nhiều bè của thanh nhạc nhà thờ thế kỷ 14 – 16 (Palestrina, Lassus, Josquin), được giản lược thành một môn học có quy tắc chặt về giai điệu và về cách kết hợp các giai điệu.

## Hệ thống của sách
- **Sergei Ivanovich Taneyev** (1856 – 1915; tên còn được phiên là Taneev) toán học hoá việc đổi chỗ các bè trong cuốn *Đối vị di động của lối viết nghiêm khắc* (Leipzig, 1909; bản tiếng Anh 1962): mọi trường hợp đối vị phức tạp được tính bằng các chỉ số **Iv** (chiều dọc) và **Ih** (chiều ngang).
- Ở Việt Nam, giáo trình *Phức điệu nghiêm khắc* của **Phạm Tú Hương** (Nhạc viện Hà Nội, 1991; hiệu đính Nguyễn Thụy Loan) trình bày theo hệ thống này. Trình tự các phần của sách — giai điệu, phức điệu tương phản, phức điệu mô phỏng, hình thức — bám theo trình tự đó, như trình bày ở bài đầu tiên của Phần I.
- Cuốn sách chỉ trình bày hệ thống Taneyev. Phương pháp năm loại của **Fux** là một cuốn riêng trong tủ sách: *Những Bước Lên Đỉnh Parnassus*.
- Phần VI gom bảng công thức và thuật ngữ.

## Cách đọc
1. Cần nắm trước: quãng, quãng đảo, thuận – nghịch, điệu thức — tức là hai quyển *Nhạc Lý Cơ Bản*. Có thể học song song *Hoà Âm Cổ Điển*.
2. **Hát một bè, chơi bè kia trên đàn**; phức điệu phải nghe được từng giai điệu riêng.
3. Với đối vị phức tạp, **nghĩ bằng con số**: đổi quãng sang số, cộng chỉ số Iv, rồi tra xem quãng nào đổi tính chất.
4. Làm bài tập ôn tập cuối mỗi phần; câu hỏi ôn tập cuối bài có đáp án ở cuối sách.
`,
    parts: [
      {
        title: 'Nhập môn: khái niệm và quy ước',
        intro: 'Phần mở đầu của giáo trình: phức điệu và đối vị là gì, ba dạng phức điệu (tương phản, mô phỏng, bè tòng), và hệ ký hiệu dùng suốt cuốn sách — ghi quãng bằng số theo Taneyev, ký hiệu bè bằng số La Mã với dấu ±, các chữ viết tắt NT, BT, Iv, Ih, P, R.',
        chapters: [
          { slug: 'phuc-dieu-nghiem-khac', focus: 'Nghiêm khắc và tự do; trường phái Nga – Việt Nam; lộ trình theo giáo trình Nhạc viện Hà Nội.' },
          { slug: 'khai-niem-va-quy-uoc-phuc-dieu', focus: 'Ba dạng phức điệu; ghi quãng bằng số (hệ Taneyev); ký hiệu bè, dấu ± và chữ viết tắt.' },
        ],
        exercises: [
          'Đổi 12 quãng (quãng 2 đến quãng 12, cả thuận và nghịch) sang cách ghi bằng số của Taneyev và ngược lại.',
          'Nghe một đoạn thánh lễ của Palestrina, chỉ ra chỗ phức điệu tương phản và chỗ mô phỏng.',
        ],
      },
      {
        title: 'Giai điệu',
        intro: 'Phần 1 của giáo trình: một giai điệu viết theo lối nghiêm khắc phải đúng ba nhóm quy định — điệu thức diatonic cổ, tiến hành cao độ (liền bậc là chính, nhảy xong phải phản hồi) và tiết tấu (nhịp lớn, không đảo phách). Viết đúng giai điệu là nền của mọi phần sau.',
        chapters: [
          { slug: 'giai-dieu-phuc-dieu-nghiem-khac', focus: 'Điệu thức, tiến hành cao độ và tiết tấu của giai điệu nghiêm khắc.' },
        ],
        exercises: [
          'Viết 4 giai điệu 8 – 12 nhịp ở điệu thức Dorian, Phrygian, Mixolydian và Aeolian, đúng mọi quy định về bước nhảy và phản hồi.',
          'Tự kiểm tra từng giai điệu: đánh dấu mọi bước nhảy và nốt phản hồi, tìm âm hưởng ba cung và mô tiến (phải tránh).',
        ],
      },
      {
        title: 'Phức điệu tương phản: đối vị đơn giản và phức tạp',
        intro: 'Phần 2 của giáo trình — trung tâm của hệ thống Taneyev: đối vị đơn giản hai bè (quãng thuận, quãng nghịch, nốt lưu), rồi đối vị phức tạp với nguyên thể và biến thể, chuyển động chiều dọc (Iv), chiều ngang (Ih), đảo ảnh, tăng thêm quãng bán thuận, và đối vị ba – bốn bè.',
        chapters: [
          { slug: 'doi-vi-don-gian-hai-be', focus: 'Đối tỉ tiết tấu và hướng đi; quãng thuận, quãng nghịch; nốt lưu, lướt, thêu, sớm, thoát.' },
          { slug: 'doi-vi-phuc-tap', focus: 'Nguyên thể – biến thể; ba loại đối vị phức tạp theo giáo trình Việt Nam.' },
          { slug: 'doi-vi-chuyen-dong-chieu-doc', focus: 'Chỉ số Iv: chuyển chỗ, chuyển gần, chuyển xa ở quãng 8, 12, 10; Iv tổng hợp.' },
          { slug: 'doi-vi-chuyen-dong-chieu-ngang', focus: 'Chỉ số Ih; phương pháp bè canon giả; đối vị ngang – dọc.' },
          { slug: 'doi-vi-dao-anh', focus: 'Đảo ảnh (soi gương) và tăng thêm quãng bán thuận.' },
          { slug: 'doi-am-ba-bon-be', focus: 'Ba bè là ba cặp hai bè; Iv1 + Iv2 = Iv3; tam trùng và tứ trùng đối vị.' },
        ],
        exercises: [
          'Viết đối vị đơn giản hai bè (8 – 10 nhịp) trên một giai điệu cho sẵn, có ít nhất hai nốt lưu đúng sơ đồ chuẩn bị – giải quyết.',
          'Viết một nguyên thể dùng được cho biến thể Iv = −7 (chuyển chỗ quãng 8); viết biến thể và kiểm tra mọi quãng đổi tính chất.',
          'Lặp lại với Iv = −11 (chuyển chỗ quãng 12) và Iv = −9 (chuyển chỗ quãng 10).',
          'Viết đối vị ba bè từ một khung hai bè; kiểm tra lần lượt cặp trên, cặp dưới, cặp ngoài.',
        ],
      },
      {
        title: 'Phức điệu mô phỏng: mô phỏng và canon',
        intro: 'Phần 3 của giáo trình: cùng một giai điệu xuất hiện lần lượt ở các bè. Từ mô phỏng đơn giản (P và R, bảy hình thức mô phỏng) đến canon hai bè (canon vô tận, canon mô tiến — chọn quãng bằng công thức Iv) và canon ba, bốn bè với sáu cách xuất phát.',
        chapters: [
          { slug: 'mo-phong-don-gian', focus: 'P và R; bảy hình thức mô phỏng đơn giản; mô phỏng ba – bốn bè và mô phỏng kép.' },
          { slug: 'canon-hai-be', focus: 'Canon vô tận (Iv = 2x) và canon mô tiến (Iv = x + y), loại I và loại II.' },
          { slug: 'canon-ba-bon-be', focus: 'Sáu cách xuất phát; loại và kiểu; cặp bè cần đối vị phức tạp.' },
        ],
        exercises: [
          'Viết mô phỏng đơn giản hai bè ở quãng 5 và ở quãng 8, mỗi bài 8 nhịp, có phần tự do sau khi mô phỏng dừng.',
          'Viết một canon vô tận hai bè ở quãng 8; tính Iv và kiểm tra chỗ nối vòng.',
          'Viết một canon mô tiến hai bè, chỉ rõ x, y và hướng mô tiến.',
        ],
      },
      {
        title: 'Hình thức',
        intro: 'Phần 4 của giáo trình: các kỹ thuật được ghép thành hình thức — đoạn nhạc phức điệu (không chia câu, kết khi mọi bè cùng dừng), thể hai đoạn tương phản và mô phỏng, thể ba đoạn với đoạn giữa tương phản và tái hiện bằng một biến thể; các dạng bốn bè là mầm mống của fugue.',
        chapters: [
          { slug: 'hinh-thuc-phuc-dieu-nghiem-khac', focus: 'Đoạn nhạc phức điệu; thể hai đoạn; thể ba đoạn; mầm mống fugue.' },
        ],
        exercises: [
          'Viết một thể hai đoạn tương phản: đoạn 1 là đối vị hai bè, đoạn 2 là biến thể Iv của đoạn 1.',
          'Viết một thể ba đoạn ngắn ba bè: đoạn 2 chuyển sang giọng át, đoạn 3 tái hiện bằng một biến thể.',
        ],
      },
      {
        title: 'Tra cứu và đối chiếu',
        intro: 'Phần cuối gom những gì cần mở lại nhiều lần khi làm bài: bảng công thức của hệ Taneyev và thuật ngữ Việt – Anh – Nga – Ý.',
        chapters: [
          { slug: 'cong-thuc-phuc-dieu', focus: 'Quãng bằng số, nốt lưu, mọi công thức Iv – Ih và câu kiểm tra trên một trang.' },
          { slug: 'thuat-ngu-phuc-dieu', focus: 'Đối chiếu thuật ngữ Việt – Anh – Nga – Ý của giáo trình.' },
        ],
        exercises: [
          'Dùng mười hai câu kiểm tra để rà lại mọi bài tập đã làm trong sách.',
          'Lập bảng tra Iv cho cả ba trường hợp chuyển chỗ quãng 8, 10, 12 và đánh dấu những quãng đổi tính chất.',
        ],
      },
    ],
  },
  {
    id: 'doi-am-fux',
    title: 'Những Bước Lên Đỉnh Parnassus',
    volume: 'Johann Joseph Fux',
    subtitle: 'Hướng dẫn thực hành nghệ thuật đối âm theo phong cách Palestrina — đọc từ nguyên văn Gradus ad Parnassum (1725): năm loại đối âm, ba – bốn bè, mô phỏng, fugue, đối âm kép và các nguyên tắc sáng tác phức điệu.',
    author: 'Lamar',
    audience: 'Đã học xong Nhạc Lý Cơ Bản · song song Hoà Âm Cổ Điển',
    hue: 25,
    glyph: '𝄞',
    coverImage: fuxCover,
    preface: `
*Gradus ad Parnassum* — "những bậc thang lên núi Parnassus", nơi ở của các nàng thơ — là sách dạy đối âm của **Johann Joseph Fux** (1660 – 1741), nhạc trưởng triều đình Vienna, in năm 1725. Ba thế kỷ nay nó là con đường học đối âm kinh điển của phương Tây.

## Hệ thống của sách
- Sách đọc theo **bản dịch Anh thế kỷ 18** *Practical Rules for Learning Composition* — bản rút gọn bỏ hình thức đối thoại, giữ quy tắc và ví dụ. Năm in của bản dịch chưa chắc (thư mục Thư viện Quốc hội Mỹ ghi [1791?]); chi tiết ở bài đầu tiên.
- Trình tự các phần bám theo trình tự của Fux: đối âm hai bè qua **năm loại** trên cantus firmus, rồi ba bè, bốn bè, mô phỏng, fugue, đối âm kép, fugue nhiều chủ đề, đáp đề và phong cách *a cappella*.
- Mỗi loại có hai lớp bài: **bài luyện tập** (quy tắc, ví dụ đã kiểm, quy trình viết theo các giáo trình hiện đại) và **bài nguyên văn** (những gì chính Fux nói, kể cả chỗ khác giáo trình hiện đại — ghi rõ trong bài).
- Phương pháp của trường phái Nga – Việt Nam (Taneyev) là một cuốn riêng: *Phức Điệu Nghiêm Khắc*.

## Cách đọc
1. Cần nắm trước: quãng, quãng đảo, thuận – nghịch, điệu thức — tức là hai quyển *Nhạc Lý Cơ Bản*.
2. **Đi đúng thứ tự các loại**; mỗi loại viết ít nhất hai bài: đối âm ở trên và ở dưới cantus.
3. **Hát một bè, chơi bè kia trên đàn** — Fux luôn đặt giai điệu đẹp lên trên quy tắc.
4. Làm bài tập ôn tập cuối mỗi phần; câu hỏi ôn tập cuối bài có đáp án ở cuối sách.
`,
    parts: [
      {
        title: 'Nhập môn: Fux và phong cách Palestrina',
        intro: 'Cuốn Gradus ad Parnassum (1725), bản dịch Anh thế kỷ 18 mà sách này đọc theo, thuật ngữ cổ – hiện đại; đối âm là gì, phương pháp năm loại ra đời và được truyền lại thế nào; và phong cách Palestrina — mẫu mực mà Fux muốn học trò đạt tới.',
        chapters: [
          { slug: 'he-thong-fux-gradus-ad-parnassum', focus: 'Nguồn, ấn bản, cấu trúc năm chương; thuật ngữ cổ – hiện đại; các mốc của truyền thống; lộ trình.' },
          { slug: 'doi-am', focus: 'Đối âm là gì: tên gọi, lịch sử, các kiểu chuyển động.' },
          { slug: 'doi-am-5-loai', focus: 'Bối cảnh lịch sử của phương pháp năm loại và vì sao nó sống ba thế kỷ.' },
          { slug: 'phong-cach-palestrina', focus: 'Phong cách thật của thế kỷ 16 mà Fux lấy làm mẫu, theo Jeppesen.' },
        ],
        exercises: [
          'Lập bảng thuật ngữ của bản dịch thế kỷ 18 (concord, discord, minum, crotchet, mi against fa, formal cadence…) với nghĩa hiện nay và tiếng Việt, rồi tự kiểm lại bằng bài mở đầu.',
          'Nghe một Kyrie của Palestrina, ghi lại năm đặc điểm giai điệu (liền bậc, bước nhảy có bù, đỉnh duy nhất…) mà sách sẽ biến thành quy tắc.',
        ],
      },
      {
        title: 'Đối âm hai bè: năm loại',
        intro: 'Chương I của Fux: quãng và chuyển động, cantus firmus, sáu quy tắc chung, rồi năm loại đối âm hai bè trên cantus firmus — nốt chọi nốt, hai nốt, bốn nốt, nối lệch phách, hoa mỹ — đúng con đường mà Haydn, Mozart, Beethoven đã đi.',
        chapters: [
          { slug: 'quang-va-chuyen-dong-doi-am', focus: 'Phân loại quãng, bốn kiểu chuyển động, quãng 5/8 song song và ẩn.' },
          { slug: 'cantus-firmus', focus: 'Viết và kiểm tra giai điệu cho sẵn.' },
          { slug: 'quy-tac-chung-fux', focus: 'Sáu quy tắc chung của Fux; ba điểm của đối âm nốt chọi nốt; nốt áp chót 6 trưởng – 3 thứ.' },
          { slug: 'doi-am-loai-1', focus: 'Luyện loại 1: mở bài, phần giữa, kết; quy trình viết từng bước.' },
          { slug: 'doi-am-loai-2', focus: 'Luyện loại 2: nốt lướt ở phách nhẹ, bước nhảy chỉ giữa thuận âm.' },
          { slug: 'doi-am-loai-3', focus: 'Luyện loại 3: bốn nốt đen, nốt thêu, nota cambiata.' },
          { slug: 'doi-am-loai-4', focus: 'Luyện loại 4: chuẩn bị – treo – giải quyết; các nốt treo được phép.' },
          { slug: 'doi-am-loai-5', focus: 'Luyện loại 5: trộn bốn loại, cặp móc đơn, trang trí nốt treo.' },
          { slug: 'nam-loai-hai-be-fux', focus: 'Những gì Fux nói thêm ở từng loại: ô áp chót, nhịp ba, lấp quãng 3, nốt treo là sự trì hoãn của thuận âm.' },
        ],
        exercises: [
          'Trên cantus Dorian của Fux (D – F – E – D – G – F – A – G – F – E – D), viết đủ năm loại, mỗi loại hai lần: đối âm ở trên và ở dưới.',
          'Với mỗi bài loại 4, bỏ hết dấu nối rồi kiểm chuỗi thuận âm còn lại — đúng như cách Fux chứng minh nốt treo chỉ là sự trì hoãn.',
          'Tìm và sửa mọi quãng 5 / 8 ẩn trong các bài đã làm bằng cách điền nốt trung gian vào các bước nhảy cùng chiều.',
        ],
      },
      {
        title: 'Ba và bốn bè',
        intro: 'Fux coi ba bè là kết cấu hoàn hảo nhất vì chứa trọn hợp âm ba; bè thứ tư chỉ là bè nhân đôi. Phần này đi qua năm loại ở ba bè (cantus lần lượt ở bè trên, giữa, dưới) và ở bốn bè: chọn nốt nhân đôi, thứ tự quãng 5 dưới – quãng 3 trên, đi kèm nốt treo, những ngoại lệ Fux tự giải thích.',
        chapters: [
          { slug: 'doi-am-ba-be-fux', focus: 'Hợp âm ba ở mỗi ô; chừa chỗ cho chuyển động ngược chiều; từng loại ở ba bè; quãng 5 được che bởi nốt treo chỉ ở bè giữa.' },
          { slug: 'doi-am-bon-be-fux', focus: 'Bè nhân đôi; phép chia điều hoà; thuận âm đi kèm giữ nguyên khi giải quyết; nhân đôi quãng 2 hơn quãng 4.' },
        ],
        exercises: [
          'Viết loại 1 ba bè trên cantus Dorian ba lần — cantus ở bè trên, giữa, dưới — và đánh dấu những ô không đủ hợp âm ba, kèm lý do.',
          'Viết loại 4 bốn bè trên cùng cantus; ở mỗi nốt treo, ghi thuận âm đi kèm và kiểm nó còn nguyên khi giải quyết.',
        ],
      },
      {
        title: 'Mô phỏng, fugue và đối âm kép',
        intro: 'Nửa sau sách của Fux: mô phỏng và luật giọng của fugue, phương pháp viết fugue hai bè theo từng bước, bè thứ ba – thứ tư và các loại kết, đối âm kép ở quãng 8, 10, 12 cùng hai kiểu đảo ngược chiều, fugue có đối đề và nhiều chủ đề, quy tắc đáp đề, trang trí và phong cách a cappella.',
        chapters: [
          { slug: 'mo-phong-va-fugue-hai-be-fux', focus: 'Mô phỏng và fugue khác nhau thế nào; giọng giới hạn bởi quãng 5 và quãng 4; sáu bước viết fugue hai bè.' },
          { slug: 'fugue-ba-bon-be-fux', focus: 'Đưa bè thứ ba vào bằng hợp âm ba hay nốt treo; kết chính thức, kết giả, tránh kết; thứ tự vào bè bốn bè.' },
          { slug: 'doi-am-kep-fux', focus: 'Bảng đổi quãng và quy tắc ở quãng 8, 10, 12; biến hai bè thành trio, quatuor; đảo ngược chiều đơn và nghiêm.' },
          { slug: 'doi-am-kep', focus: 'Đối âm kép và canon trong nhạc Bach — nơi các quy tắc của Fux trở thành tác phẩm.' },
          { slug: 'fugue-doi-de-va-nhieu-chu-de-fux', focus: 'Đối đề đổi chỗ ở quãng 8; fugue trên cantus firmus; chủ đề cromatic; fugue ba chủ đề.' },
          { slug: 'dap-de-va-trang-tri-fux', focus: 'Bốn quy tắc đáp đề; giai điệu trọng hơn giọng; diminution, nốt sớm; nốt treo theo nhịp; stile a cappella.' },
          { slug: 'fugue', focus: 'Fugue sau Fux: cấu trúc trình bày – đoạn nối – stretto và các kiệt tác của Bach, Beethoven, Shostakovich.' },
        ],
        exercises: [
          'Viết một fugue hai bè ở giọng Rê theo đúng sáu bước của Fux: kết thứ nhất ở bậc V, thứ hai ở bậc III, stretto sau một ô rồi kết cuối.',
          'Viết 8 ô đối âm kép ở quãng 8 (tránh quãng 5, không nhảy vào quãng 8), đảo lại và kiểm; rồi thử biến thành trio bằng cách thêm bè dịch xuống quãng 10.',
          'Đảo ngược chiều nghiêm một giai điệu Đô trưởng theo bảng C ↔ E, D ↔ D, F ↔ B; so với đảo ngược chiều đơn và nhận xét giai điệu nào hay hơn.',
          'Lập đáp đề cho ba chủ đề ở giọng Rê: một chủ đề mở bằng bước nhảy Rê – La, một chủ đề mở bằng La – Rê, một chủ đề cromatic — áp dụng bốn quy tắc đáp đề.',
        ],
      },
      {
        title: 'Tra cứu',
        intro: 'Toàn bộ quy tắc của phương pháp năm loại trên một trang, để mở lại khi làm bài.',
        chapters: [
          { slug: 'cong-thuc-doi-am-fux', focus: 'Bảng quãng, ma trận chuyển động, từng loại, nốt treo, đảo ở quãng 8 – 10 – 12, mười hai câu kiểm tra.' },
        ],
        exercises: [
          'Dùng mười hai câu kiểm tra để rà lại mọi bài tập đã làm trong sách.',
          'Viết từ đầu một bài loại 5 trên cantus mới, chỉ nhìn bảng tra, rồi so với các quy tắc nguyên văn ở Phần II.',
        ],
      },
    ],
  },
  {
    id: 'albrechtsberger',
    title: 'Bass Đi Liên Tục, Hoà Âm và Sáng Tác',
    volume: 'J. G. Albrechtsberger',
    subtitle: 'Tuyển tập ba tập của Albrechtsberger do học trò Seyfried biên tập, dùng để tự học: bass liên tục và hoà âm, năm loại sáng tác nghiêm khắc từ hai đến năm bè, mô phỏng, fugue, đối âm kép, canon, cùng phụ lục về phong cách, nhạc cụ và đọc tổng phổ.',
    author: 'Lamar',
    audience: 'Đã học xong Nhạc Lý Cơ Bản · đọc được khoá Sol và khoá Fa',
    hue: 40,
    glyph: '𝄢',
    coverImage: albrechtsbergerCover,
    preface: `
**Johann Georg Albrechtsberger** (1736 – 1809), nghệ sĩ organ cung đình và nhạc trưởng nhà thờ St. Stephen ở Vienna, là thầy dạy đối âm của Beethoven và Hummel. Cuốn sách này đọc theo tuyển tập ba tập các bài viết của ông, do học trò **Ignaz von Seyfried** biên tập, theo bản dịch Anh của Sabilla Novello (London, 1855).

## Hệ thống của sách
- **Phần I – IV** theo Tập I của bộ sách: bass liên tục và hoà âm — quãng, hợp âm, chuyển động, nghịch âm, quãng ngầm định của từng chữ số, đệm trên bàn phím, sáu tiến hành nguy hiểm, hoà âm thuần khiết, chuyển giọng và kết. Theo lời tựa, Tập I phần lớn do **Seyfried** soạn.
- **Phần V – VIII** theo Tập II và III, là bản thảo của **chính Albrechtsberger**: năm loại sáng tác nghiêm khắc theo phương pháp của Fux ở hai, ba, bốn, năm bè, lối tự do, mô phỏng, đảo, fugue, đối âm kép ở quãng 8 – 10 – 12, fugue kép và canon.
- **Phần IX** là phụ lục về phong cách, nhạc cụ và đọc tổng phổ — chủ yếu lời người biên tập. **Phần X** để tra nhanh.
- Mọi quy tắc ghi theo sách, kèm số trang. Chỗ bản in tự mâu thuẫn, in nhầm, thiếu trang hay OCR chưa đọc chắc đều ghi rõ trong bài.
- Đây là một hệ riêng: không trộn với *Hoà Âm Cổ Điển* (trường phái Nga – Xô viết) hay *Những Bước Lên Đỉnh Parnassus* (Fux), chỉ có liên kết để đối chiếu.

## Cách đọc
1. Học Phần I – IV **trên bàn phím**: mỗi bảng chữ số, mỗi luật nhân đôi phải được chơi ở mọi giọng, như sách dặn.
2. Phần V – VIII học như sách gốc: viết trên một chorale, mỗi loại cả đối âm trên lẫn dưới, tự chấm lỗi theo các danh sách lỗi của Albrechtsberger.
3. Đừng ngại những chỗ sách khác cách dạy hiện nay (mọi quãng 4 là nghịch, hợp âm 11 – 13 trên chủ âm, "kết ngắt" và "kết đánh lừa"…): bài nào cũng chỉ ra chỗ khác và dẫn sang bài tương ứng của thư viện.
4. Làm bài tập ôn tập cuối mỗi phần; câu hỏi ôn tập cuối bài có đáp án ở cuối sách.
`,
    parts: [
      {
        title: 'Nhập môn: bộ sách và người viết',
        intro: 'Bộ sách ba tập ra đời thế nào, ai viết phần nào, cấu trúc và thuật ngữ cổ của bản dịch 1855, tiểu sử Albrechtsberger theo lời sách, và chỗ đứng của ông trong dòng hoà âm Vienna.',
        chapters: [
          { slug: 'he-thong-albrechtsberger', focus: 'Ấn bản, lời tựa của Seyfried, ba tập, thuật ngữ, tiểu sử, lộ trình.' },
          { slug: 'hoa-am-truong-phai-phuong-tay', focus: 'Albrechtsberger trong dòng Vienna: từ bass số đến lý thuyết bậc và sách giáo khoa Mỹ.' },
        ],
        exercises: [
          'Lập bảng thuật ngữ của bản dịch 1855 (thorough-bass, grade, fundamental note, common chord, changing note, class, Inganni…) với nghĩa trong loạt bài, rồi tự kiểm bằng bài mở đầu.',
          'Tóm tắt trong năm câu: phần nào của bộ sách là của Albrechtsberger, phần nào của Seyfried, và vì sao điều đó quan trọng khi trích dẫn.',
        ],
      },
      {
        title: 'Quãng, hợp âm và nghịch âm',
        intro: 'Tập I, §I – XIII và §LVIII – LXI: quãng và các loại, thuận – nghịch, hợp âm hoàn toàn, không hoàn toàn và nghịch, năm loại hợp âm chính, chỗ ngồi của hợp âm trong giọng; bốn kiểu chuyển động, luật nối hợp âm, ba cách dùng nghịch âm, nốt treo và nghịch âm không chuẩn bị.',
        chapters: [
          { slug: 'quang-va-hop-am-albrechtsberger', focus: 'Quãng, thuận – nghịch, quãng 4 thuận và nghịch, hợp âm 7 – 9 – 11 – 13 sinh bằng nốt thêm phía dưới.' },
          { slug: 'chuyen-dong-va-nghich-am-albrechtsberger', focus: 'Sáu luật nối hợp âm; nốt lướt, nốt đổi, nốt treo; chuẩn bị – đánh – giải quyết; anticipation.' },
        ],
        exercises: [
          'Viết và chơi hợp âm 9, 11, 13 theo đúng cách sách sinh ra chúng (thêm nốt quãng 3, 5, 7 dưới hợp âm 7) ở ba giọng; ghi nốt nào thường bị bỏ khi đệm bốn bè.',
          'Với mỗi nghịch âm 2, 4, 4 tăng, 5 giảm, 7, 7 trưởng có quãng 4, 9: chỉ ra nốt nào là nốt nghịch và nó giải quyết đi đâu, rồi chơi trên đàn.',
        ],
      },
      {
        title: 'Bass liên tục trên bàn phím',
        intro: 'Tập I, phần thực hành: quãng ngầm định của từng chữ số và cách ghi số, hợp âm ba ở ba vị trí, nhân đôi, đệm âm giai, số hợp âm mỗi ô, sáu tiến hành nguy hiểm, hợp âm 7 và các dẫn xuất, bài tập và đệm chia hai tay.',
        chapters: [
          { slug: 'bass-so-albrechtsberger', focus: 'Bảng một số và hai số; từng chữ số; dấu ghi; đường cong Telemann.' },
          { slug: 'dem-bass-so-albrechtsberger', focus: 'Ba vị trí, bốn luật nối hợp âm ba, nhân đôi, đệm âm giai, hợp âm mỗi ô, đệm chia hai tay.' },
          { slug: 'sau-tien-hanh-nguy-hiem', focus: 'Sáu chỗ dễ phạm quãng 5 – 8 liền và cách sửa; nối hợp âm 7 và các dẫn xuất.' },
        ],
        exercises: [
          'Đệm âm giai Đô trưởng và La thứ đi lên, đi xuống theo bảng số của sách, ở cả ba vị trí, rồi dịch sang Sol trưởng, Rê thứ, Fa trưởng.',
          'Tự viết một bè bass số 12 ô có đủ sáu tiến hành nguy hiểm, đệm sai từng chỗ rồi sửa theo cách sách chỉ.',
          'Chơi một câu bass số theo kiểu đệm thường rồi theo kiểu đệm chia hai tay ở ba vị trí hoà âm rải.',
        ],
      },
      {
        title: 'Hoà âm thuần khiết, chuyển giọng và kết',
        intro: 'Tập I, §LXXXIV – CXXIV: hoà âm thuần khiết không có quãng 4 thuận, chỗ ngồi và cách dùng mọi quãng tăng – giảm; chuyển giọng sang năm giọng họ hàng và mọi giọng qua hợp âm 7 giảm; bốn loại kết và các kết đánh lừa Inganni.',
        chapters: [
          { slug: 'hoa-am-thuan-khiet-albrechtsberger', focus: 'Vì sao loại quãng 4 thuận; cách xếp hợp âm; bảng quãng tăng – giảm.' },
          { slug: 'chuyen-giong-va-ket-albrechtsberger', focus: 'Năm giọng họ hàng; các con đường chuyển giọng; kết hoàn toàn, không hoàn toàn, ngắt, đánh lừa.' },
        ],
        exercises: [
          'Viết một thánh ca bốn bè 8 ô bằng hoà âm thuần khiết: kiểm từng hợp âm để không có quãng 4 nào giữa các bè trên.',
          'Từ hợp âm Đô trưởng, chuyển sang 6 giọng khác nhau bằng hợp âm 7 giảm và các dạng trùng âm của nó; chơi trên đàn.',
          'Viết ba kết đánh lừa từ Đô trưởng, mỗi kết qua một loại hợp âm khác nhau theo bảng của sách.',
        ],
      },
      {
        title: 'Sáng tác nghiêm khắc hai bè',
        intro: 'Tập II, §CXXVI – CXXXVII — phần chính tay Albrechtsberger viết: điệu thức và giọng, lối nghiêm khắc (stilo alla capella) và lối tự do, rồi năm loại trên chorale với mười luật của loại 1 và các bài mẫu được chấm từng lỗi.',
        chapters: [
          { slug: 'nen-tang-sang-tac-albrechtsberger', focus: 'Thuận – nghịch, chuyển động, điệu thức, giọng gần, âm giai bè nền, nghiêm khắc và tự do.' },
          { slug: 'nam-loai-hai-be-albrechtsberger', focus: 'Mười luật loại 1; loại 2 – 5; nốt đổi của Fux; nốt treo dài – ngắn; những chỗ khác Fux.' },
        ],
        exercises: [
          'Trên một chorale 10 – 12 nốt ở Đô trưởng, viết đủ năm loại, mỗi loại cả đối âm trên và dưới; tự chấm theo mười luật và các danh sách lỗi của sách.',
          'Viết lại một bài loại 1 ở Mi thứ, đánh dấu mọi chỗ Mi contra Fa có thể xảy ra và cách tránh.',
        ],
      },
      {
        title: 'Ba, bốn và năm bè',
        intro: 'Tập II, §CXXXVIII – CXLVII: quãng đi kèm mỗi quãng, năm loại ở ba và bốn bè, bảng đi kèm từng nốt treo, Quarta fundata, chuyển từ lối nghiêm khắc sang lối tự do, và luật nhân đôi khi viết năm bè.',
        chapters: [
          { slug: 'ba-be-albrechtsberger', focus: 'Bảng quãng đi kèm; quãng ẩn được phép; loại 1 – 5 ở ba bè; hợp âm 6/4 rải.' },
          { slug: 'bon-va-nam-be-albrechtsberger', focus: 'Đối âm đều – không đều; Quarta fundata; nốt treo 9, 7, 4, 2 bốn bè; lối tự do; năm bè.' },
        ],
        exercises: [
          'Viết loại 1 và loại 4 ba bè trên cùng chorale, đặt chorale lần lượt ở bè trên, giữa, dưới.',
          'Viết loại 5 bốn bè, rồi viết lại ở lối tự do với ít nhất một nghịch âm không chuẩn bị và một đoạn cromatic, ghi rõ giấy phép nào được dùng.',
        ],
      },
      {
        title: 'Mô phỏng, đảo và fugue',
        intro: 'Tập II, §CXLVIII – CLI: mô phỏng ở mọi quãng và bảy mô phỏng khoa học, bốn loại đảo, rồi fugue — thuật ngữ, đáp đề với bảng đổi quãng, kế hoạch fugue hai bè, luật cho ba bè trở lên, trang trí chủ đề, thứ tự vào bè, ricercata.',
        chapters: [
          { slug: 'mo-phong-va-dao-albrechtsberger', focus: 'Tám mô phỏng đơn; bảy mô phỏng khoa học; đảo đơn, nghiêm, ngược dòng, ngược dòng ngược chiều.' },
          { slug: 'fugue-albrechtsberger', focus: 'Dux – Comes, đáp đề, kế hoạch hai bè, kết đánh lừa trước bè thứ ba, trang trí, thứ tự vào bè.' },
          { slug: 'fugue', focus: 'Fugue sau Albrechtsberger: cấu trúc và kiệt tác của Bach, Beethoven, Shostakovich.' },
        ],
        exercises: [
          'Lấy một chủ đề 4 ô, viết các dạng đảo đơn, đảo nghiêm (bắt đầu trên quãng 7, 6, 3 trưởng), ngược dòng và ngược dòng ngược chiều; giải thích vì sao chủ đề có nốt chấm dôi không hợp với hai dạng sau.',
          'Viết một fugue hai bè ở Fa trưởng theo đúng sáu bước của sách: nửa kết ở V, nửa stretto, nửa kết ở III, stretto, kết.',
          'Lập đáp đề cho ba chủ đề dùng bảng bảy cách đổi quãng.',
        ],
      },
      {
        title: 'Đối âm kép, fugue kép và canon',
        intro: 'Tập III, §CLII – CLVII: fugue trên chorale; đối âm kép ở quãng 8, 10, 12 với các luật và cách thêm bè; fugue hai, ba, bốn chủ đề với đối âm ba – bốn lần; canon — "mô phỏng nghiêm nhất" — từ hai bè đến Inventio ba bè và canon câu đố.',
        chapters: [
          { slug: 'fugue-chorale-va-doi-am-kep-albrechtsberger', focus: 'Fugue chorale; bảng đảo và luật của đối âm kép ở quãng 8, 10, 12.' },
          { slug: 'fugue-kep-va-canon-albrechtsberger', focus: 'Bốn luật đối âm ba lần; các cách đổi chỗ; các loại canon; viết Inventio; ghi canon bằng số.' },
        ],
        exercises: [
          'Viết 8 ô đối âm kép ở quãng 8 theo bốn luật, đảo lại và kiểm; rồi thêm quãng 3 song song để thành ba bè và ghi những chỗ hỏng.',
          'Thử cùng một bài hai bè ở quãng 10 và quãng 12: đánh dấu mọi quãng 3, 6 liền (cấm ở quãng 10) và mọi quãng 6 vào bằng bước nhảy (cấm ở quãng 12).',
          'Viết một Inventio ba bè cùng khoá rồi chuyển thành canon đồng âm vô hạn, có dấu nhắc đúng chỗ.',
        ],
      },
      {
        title: 'Phụ lục: phong cách, nhạc cụ, tổng phổ',
        intro: 'Phụ lục Tập III, phần lớn là lời người biên tập Seyfried: ba phong cách nhà thờ, thính phòng, sân khấu; mô tả nhạc cụ đầu thế kỷ 19; hướng dẫn chơi tổng phổ trên đàn phím và học phối khí.',
        chapters: [
          { slug: 'phu-luc-albrechtsberger', focus: 'Ba phong cách và lạm dụng trong nhạc nhà thờ; nhạc cụ, khoá, kèn chuyển giọng; thứ tự tổng phổ.' },
        ],
        exercises: [
          'Chọn một tổng phổ cổ điển ngắn (một chương Mozart hay Haydn), xếp lại thứ tự nhạc cụ theo đề xuất của sách và rút gọn 8 ô cho piano theo các lời dặn.',
          'So sánh mô tả của sách về viola, trombone, clarinet với sách phối khí hiện đại; ghi ba điểm đã thay đổi.',
        ],
      },
      {
        title: 'Tra cứu',
        intro: 'Các luật chính của cả ba tập trên một trang, kèm số trang để mở lại sách gốc.',
        chapters: [
          { slug: 'tra-cuu-albrechtsberger', focus: 'Bảng luật hoà âm, bass số, năm loại, fugue, đối âm kép và thuật ngữ.' },
        ],
        exercises: [
          'Dùng bảng tra để chấm lại mọi bài tập đã làm trong sách.',
          'Tự viết một bảng so sánh: những chỗ Albrechtsberger nói rõ là khác Fux, và những chỗ ông giữ nguyên.',
        ],
      },
    ],
  },
]

/** "Về tác giả", shared by every book and course. */
export const ABOUT_AUTHOR = `
**Lamar** — tên thật là **Trần Lâm**.

- Tốt nghiệp **Piano** hệ trung cấp dài hạn 11 năm tại **Nhạc viện TP. Hồ Chí Minh**.
- Tốt nghiệp đại học chuyên ngành **Âm nhạc học** tại Nhạc viện TP. Hồ Chí Minh.
- Cố vấn và quản lý âm nhạc.
- Nhà sản xuất âm nhạc.
- Nhà nghiên cứu theo hướng **âm nhạc học hệ thống** (*systematic musicology*) — ngành nối lý thuyết âm nhạc với âm học, tâm lý học âm nhạc, khoa học biểu diễn và âm nhạc học tính toán; xem [[am-nhac-hoc-he-thong]].

Các sách và giáo trình trong tủ sách này do Lamar biên soạn và tổng hợp từ thư viện Lý thuyết của Lịch Dạy Piano.
`

/** Opening of every foreword: who compiled the book, how, and what it aims for. */
export const foreword = (title: string) => `
**${title}** do **Lamar** biên soạn và tổng hợp. Nội dung các bài lấy từ thư viện Lý thuyết của Lịch Dạy Piano — nơi Lamar viết và đối chiếu từng bài với nguồn — rồi được sắp xếp lại thành một trình tự học, có lời dẫn, mục tiêu, câu hỏi và bài tập riêng cho sách.

## Lamar hướng đến
- **Một bộ giáo trình tiếng Việt có hệ thống**: mỗi cuốn là một con đường học rõ ràng, từ dễ đến khó, nối với các cuốn khác thay vì là những bài rời rạc.
- **Kiến thức có nguồn**: mỗi bài ghi tài liệu tham khảo; chỗ nào nguồn chưa đối chiếu hoặc mâu thuẫn được ghi rõ ngay trong bài.
- **Học bằng tai và tay**: mọi khái niệm đều được nghe, chơi trên đàn và tìm lại trong tác phẩm thật.
- **Nhìn âm nhạc rộng hơn lý thuyết sách vở**: theo tinh thần âm nhạc học hệ thống, nối lý thuyết với âm học, tâm lý nghe, khoa học biểu diễn và lịch sử — để người học hiểu vì sao, không chỉ nhớ luật.
- **Phục vụ người dạy lẫn người tự học**: giáo viên có trình tự dạy, người học có thể tự đi một mình.
`
