import type { Book } from './types'

/**
 * Nhạc lý cơ bản, hai quyển. Mỗi chương là một bài sẵn có của thư viện (giữ nguyên slug), xếp lại theo
 * thứ tự học; phần mở đầu, lời dẫn từng phần và bài tập cuối phần được viết riêng cho sách.
 * Quyển 1 ứng với nhạc lý khoảng ABRSM Grade 1 – 3, Quyển 2 với Grade 4 – 5 và các nền tảng hoà âm, hình thức.
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

## Sách được biên soạn thế nào
Mỗi chương là một bài trong thư viện Lý thuyết, được **xếp lại theo thứ tự học** — từ âm thanh và ký hiệu, đến trường độ, quãng, âm giai, rồi hợp âm và ký hiệu diễn tấu. Đường dẫn của từng chương giữ nguyên như trong thư viện, nên một chương đọc ở đây cũng là bài đó ở mục Lý thuyết. Lời dẫn mỗi phần, phần "Trọng tâm" ở đầu chương và bài tập cuối phần được viết riêng cho sách.

Trình tự bám theo chương trình nhạc lý phổ biến (ABRSM Grade 1 – 3), đối chiếu ở bài [[chuong-trinh-nhac-ly-abrsm]]; ai học theo lộ trình piano của thư viện có thể đọc song song với giáo trình ở mục Giáo trình.

## Cách đọc
1. Đọc theo thứ tự. Mỗi phần dựa trên phần trước.
2. Mỗi chương đọc **hai lần**: lần đầu đọc lướt phần "Trọng tâm" và các tiêu đề, lần sau đọc kỹ và **chơi thử trên đàn** mọi ví dụ.
3. Làm bài tập cuối phần trước khi sang phần mới. Bấm **Đánh dấu đã học** ở cuối chương để theo dõi tiến độ.
4. Chữ in màu là liên kết: chương có trong sách sẽ mở ngay trong sách, bài khác mở ở thư viện.

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
        intro: 'Phần cuối của Quyển 1 ghép các nốt thành hợp âm, giới thiệu các loại kết — "dấu câu" của âm nhạc — và những ký hiệu cho biết chơi thế nào: cường độ, cách diễn tấu, dấu nhắc lại, dấu luyến, hoa mỹ, thuật ngữ. Chương cuối là bài ôn theo chương trình nhạc lý cấp 1 – 2.',
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

## Sách được biên soạn thế nào
Như Quyển 1, mỗi chương là một bài của thư viện Lý thuyết, giữ nguyên đường dẫn, được xếp lại theo thứ tự học. Lời dẫn mỗi phần, phần "Trọng tâm" và bài tập cuối phần được viết riêng cho sách. Trình tự bám theo chương trình nhạc lý cấp 3 – 5 (xem [[chuong-trinh-nhac-ly-abrsm]]) và phần đầu của giáo trình hoà âm ([[giao-trinh-hoa-am]]) và hình thức ([[lo-trinh-hinh-thuc]]).

## Cách đọc
1. Ôn lại Quyển 1 nếu một chương nhắc đến khái niệm còn mơ hồ — liên kết sẽ mở đúng chương đó.
2. Ở các phần hoà âm và hình thức, **chơi mọi ví dụ trên đàn** và nghe bản thu được gợi ý; nhạc lý ở mức này phải nghe được, không chỉ đọc được.
3. Làm bài tập cuối phần và đánh dấu đã học từng chương.

Sau Quyển 2, đường đi tiếp là [[giao-trinh-hoa-am]] (hoà âm bốn bè đầy đủ), [[lo-trinh-hinh-thuc]] và [[phuong-phap-phan-tich-tac-pham]].
`,
    parts: [
      {
        title: 'Nhịp nâng cao',
        intro: 'Quyển 1 dừng ở nhịp đơn, nhịp kép 6/8 và liên ba. Phần này mở rộng sang nhịp lấy đà, nhịp hỗn hợp (5/8, 7/8), hemiola, đa nhịp và nhạc không có vạch nhịp.',
        chapters: [
          { slug: 'nhip-lay-da', focus: 'Ô lấy đà và cách tính ô cuối.' },
          { slug: 'nhip-hon-hop', focus: 'Nhóm 2 + 3 và 3 + 2 + 2; đếm bằng phách không đều.' },
          { slug: 'hemiola', focus: 'Ba phách 2 trong không gian hai phách 3.' },
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
          'Đặt hợp âm cho một giai điệu dân ca 8 ô theo quy trình trong chương cuối phần, rồi đệm bằng tay trái.',
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
]
