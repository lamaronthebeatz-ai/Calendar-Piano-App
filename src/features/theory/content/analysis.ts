import type { Article } from '../wiki'

/** Phân tích các tác phẩm hay được dạy. Nguồn ghi trong `refs`. */
export const analysis: Article[] = [
  {
    slug: 'phuong-phap-phan-tich-tac-pham',
    title: 'Phân tích tác phẩm: phương pháp và lộ trình',
    category: 'analysis',
    aliases: ['phân tích tác phẩm', 'phương pháp phân tích', 'music analysis', 'musical analysis', 'phân tích âm nhạc', 'cách phân tích một bản nhạc', 'quy trình phân tích', 'báo cáo phân tích'],
    summary: 'Bài tổng quan của mục: phân tích tác phẩm là gì, phân tích ở những tầng nào, quy trình phân tích từng bước, các công cụ lý thuyết cần học trước và thứ tự đọc các bài phân tích mẫu.',
    wiki: 'Musical_analysis',
    refs: [
      ['Wikipedia — Musical analysis', 'https://en.wikipedia.org/wiki/Musical_analysis'],
      ['Wikipedia — Ian Bent (Grove "Analysis", 1980; book with Drabkin, 1987)', 'https://en.wikipedia.org/wiki/Ian_Bent'],
      ['Symposium — review of Bent & Drabkin, Analysis, and Dunsby & Whittall, Music Analysis in Theory and Practice', 'https://symposium.music.org/volume-28/reviews-1752877059/analysis-by-ian-bent-with-william-drabkin-music-analysis-in-theory-and-practice-by-jonathan-dunsby-and-arnold-whittall'],
      ['Ericsams.org — review of LaRue, Guidelines for Style Analysis', 'https://ericsams.org/index.php/music-reviews/history-and-aesthetics-of-music/665-guidelines-for-style-analysis-by-jan-larue'],
      ['Open Music Theory 2e (Gotham et al.)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)'],
    ],
    body: `
## Phân tích là gì?
Định nghĩa thường được trích dẫn của **Ian Bent** (từ điển *New Grove*, 1980): phân tích là việc **tách một cấu trúc âm nhạc thành các thành phần tương đối đơn giản hơn**, rồi **tìm hiểu chức năng** của các thành phần ấy trong cấu trúc. Định nghĩa này nhấn mạnh **cấu trúc**; các xu hướng sau này bổ sung câu hỏi về **ý nghĩa**, **bối cảnh lịch sử** và **biểu diễn** (xem [[lich-su-phan-tich-am-nhac]]).

Với người chơi và người dạy đàn, phân tích trả lời ba câu hỏi: **cái gì** đang xảy ra trong bản nhạc, **vì sao** nó tác động đến người nghe, và **điều đó gợi ý gì** cho cách chơi (xem [[phan-tich-va-bieu-dien]]).

## Phân tích ở ba tầng
Theo cách chia của Jan LaRue (xem [[phan-tich-phong-cach]]), mỗi yếu tố được xét ở ba tầng:
| Tầng | Câu hỏi | Ví dụ với hoà âm |
|---|---|---|
| **Lớn** | Cả tác phẩm, cả chương | Kế hoạch các giọng của cả bài |
| **Vừa** | Một đoạn, một phần lớn | Chuyển giọng trong một phần |
| **Nhỏ** | Một câu, vài ô nhịp | Tiến trình hợp âm trong một câu |
Nên đi **từ lớn đến nhỏ**: biết bản đồ trước rồi mới xem chi tiết — nhưng chi tiết có thể buộc ta sửa lại bản đồ.

## Quy trình phân tích từng bước
1. **Bối cảnh và văn bản**: tác giả, năm, thể loại, mục đích; chọn ấn bản đáng tin (xem [[an-ban-urtext]], [[the-loai]], [[cac-thoi-ky]]).
2. **Nghe toàn bài** vài lần, ghi lại ấn tượng — những chỗ gây bất ngờ thường là chỗ đáng phân tích (xem [[nghe-nhac-chu-dong]], [[ky-vong-am-nhac]]).
3. **Hình thức lớn**: tìm các [[cau-ket|kết]], các chỗ [[chuyen-giong|đổi giọng]], chỗ chủ đề quay lại → vẽ sơ đồ phần (A, B, A′…) có số ô nhịp (xem [[hinh-thuc-am-nhac]]).
4. **Câu nhạc và chức năng**: chia câu, nhận ra period hay sentence, mỗi phần đóng vai trò mở đầu, giữa hay kết thúc (xem [[cau-nhac]], [[chuc-nang-hinh-thuc]]).
5. **Hoà âm**: ghi số La Mã, xác định giọng và các hợp âm đặc biệt (xem [[phan-tich-hoa-am]]).
6. **Giai điệu và motif**: đường nét, đỉnh, motif và cách nó biến đổi (xem [[giai-dieu]], [[motif]]).
7. **Nhịp điệu**: nhịp, đảo phách, nhóm ô nhịp ở tầng cao hơn (xem [[sieu-nhip]]).
8. **Kết cấu và âm thanh**: số bè, vai trò các bè, âm vực, cường độ (xem [[ket-cau]]).
9. **Ý nghĩa biểu đạt**: các "chủ đề" phong cách mà tác phẩm gợi tới (xem [[ly-thuyet-chu-de]]).
10. **Tổng hợp**: các yếu tố phối hợp với nhau ra sao để tạo **đường đi** của tác phẩm; rút ra hệ quả cho biểu diễn.

## Các công cụ lý thuyết cần học trước
| Công cụ | Bài |
|---|---|
| Hoà âm điệu tính | [[giao-trinh-hoa-am]] (đặc biệt Chương 4–7) |
| Hình thức | [[hinh-thuc-am-nhac]], [[cau-nhac]], [[hinh-thuc-sonata]], [[rondo]], [[bien-tau]], [[fugue]] |
| Lý thuyết hình thức hiện đại | [[chuc-nang-hinh-thuc]], [[luoc-do-galant]] |
| Phân tích nhiều tầng | [[phan-tich-schenker]] |
| Nhịp điệu tầng cao | [[sieu-nhip]] |
| Ý nghĩa và phong cách | [[ly-thuyet-chu-de]], [[phan-tich-phong-cach]] |
| Nhạc thế kỷ 20 | [[neo-riemann]], [[tap-hop-cao-do]], [[ky-thuat-12-am]] |
| Bản thu | [[so-sanh-ban-thu]] |

## Thứ tự đọc các bài phân tích mẫu
Sắp từ cấu trúc đơn giản đến phức tạp (gợi ý dạy học):
1. [[phan-tich-canon-pachelbel]] — bè trầm lặp, biến tấu.
2. [[phan-tich-prelude-do-truong]] — một khuôn hình rải, chỉ đọc hoà âm.
3. [[phan-tich-gymnopedie-so1]] — hai hợp âm xen kẽ, hoà âm điệu thức.
4. [[phan-tich-fur-elise]] — rondo.
5. [[phan-tich-sonata-k545]] — hình thức sonata.
6. [[phan-tich-rondo-alla-turca]] — rondo và chủ đề biểu đạt "Thổ Nhĩ Kỳ".
7. [[phan-tich-traumerei]] — câu nhạc và hoà âm Lãng mạn.
8. [[phan-tich-nocturne-op9-so2]] — giai điệu trang trí, nhịp 12/8.
9. [[phan-tich-clair-de-lune]] — hoà âm ấn tượng.

## Viết một bài phân tích
Một bài phân tích tốt (gợi ý cấu trúc):
- **Luận điểm**: một câu nêu điều quan trọng nhất về tác phẩm (ví dụ "cả bài được xây từ một motif ba nốt").
- **Bằng chứng**: dẫn **số ô nhịp** cụ thể, sơ đồ hình thức, ví dụ nhạc.
- **Phân biệt** điều chắc chắn (có trong bản nhạc) với điều là **diễn giải** (cách nghe của người phân tích).
- **Kết luận**: điều đó thay đổi cách nghe và cách chơi thế nào.
`,
  },
  {
    slug: 'lich-su-phan-tich-am-nhac',
    title: 'Lịch sử phân tích âm nhạc',
    category: 'analysis',
    aliases: ['lịch sử phân tích', 'history of music analysis', 'Burmeister', 'Koch', 'punctuation form', 'hình thức dấu câu', 'Formenlehre', 'A. B. Marx', 'Réti', 'Kerman', 'phân tích hùng biện'],
    summary: 'Từ phân tích theo tu từ học của Burmeister (1606), lý thuyết câu nhạc của Koch (1782–1793), Formenlehre của A. B. Marx, đến Schenker, Réti, các lý thuyết thế kỷ 20 và những phê phán đối với phân tích hình thức thuần tuý.',
    wiki: 'Musical_analysis',
    refs: [
      ["Barros (2020), Música Hodie — Burmeister's analysis of a Lassus motet", 'https://revistas.ufg.br/musica/article/download/63270/37540/309650'],
      ["Diergarten (2008), Music Theory Online — Heinrich Christoph Koch's polemic against Joseph Haydn", 'https://mtosmt.org/issues/mto.08.14.1/mto.08.14.1.diergarten.html'],
      ['Wikipedia — Adolf Bernhard Marx', 'https://en.wikipedia.org/wiki/Adolf_Bernhard_Marx'],
      ['Deutsche Biographie — Marx, Adolph Bernhard', 'https://www.deutsche-biographie.de/119065290.html'],
      ['Wikipedia — Sonata form', 'https://en.wikipedia.org/wiki/Sonata_form'],
      ['Wikipedia — Rudolph Reti', 'https://en.wikipedia.org/wiki/Rudolph_Reti'],
      ['Kerman (1980), Critical Inquiry — How we got into analysis, and how to get out', 'https://www.journals.uchicago.edu/doi/10.1086/448075'],
      ['Wikipedia — Joseph Kerman', 'https://en.wikipedia.org/wiki/Joseph_Kerman'],
      ['Wikipedia — Ian Bent', 'https://en.wikipedia.org/wiki/Ian_Bent'],
    ],
    body: `
Biết lịch sử giúp hiểu rằng mỗi phương pháp phân tích **sinh ra để trả lời một câu hỏi** của thời đại nó — và có giới hạn riêng.

## Thế kỷ 17: phân tích như tu từ học
**Joachim Burmeister**, ở chương cuối khảo luận *Musica poetica* (**1606**), phân tích một motet của **Orlando di Lasso** để dạy người mới học sáng tác cách học từ tác phẩm mẫu. Ông dùng khái niệm của **tu từ học** (nghệ thuật hùng biện): bản nhạc được chia như một bài diễn văn, với các "hình thái" (figure) âm nhạc tương ứng các hình thái tu từ. Đây thường được coi là một trong những bài phân tích tác phẩm sớm nhất; cách hiểu nó hiện nay vẫn còn tranh luận.

## Thế kỷ 18: câu nhạc như dấu câu
- **Joseph Riepel** (*Anfangsgründe*, từ 1752) và **Heinrich Christoph Koch** (*Versuch einer Anleitung zur Composition*, 3 tập, **1782–1793**) là hai khảo luận lớn của thế kỷ 18 bàn về câu nhạc và hình thức.
- Koch mô tả cách ghép các **đoạn nhỏ, câu, đoạn** có các loại kết khác nhau thành tác phẩm lớn (giao hưởng, sonata, concerto) — giống như **dấu câu** trong một bài văn: các chỗ ngắt và kết chia nhạc thành từng đơn vị. Các học giả gọi đây là **"hình thức dấu câu"**. Koch hay lấy ví dụ từ nhạc [[Haydn]].
- Từ thập niên 1970, các học giả (Dahlhaus, Ratner, Baker, Sisman…) khôi phục Koch làm cơ sở cho phân tích **"theo đúng lịch sử"** nhạc thế kỷ 18. Cách tiếp cận theo khuôn mẫu của [[luoc-do-galant|lược đồ galant]] cũng đi theo hướng này.

## Thế kỷ 19: Formenlehre và "hình thức sonata"
- **Anton Reicha** (1826) và **Carl Czerny** (1848) mô tả hình thức sonata; **Adolf Bernhard Marx**, trong bộ *Die Lehre von der musikalischen Komposition* (4 tập, 1837–1847; tập 3 năm 1845), xây dựng một **hệ thống các hình thức** đi từ hình thức bài hát đơn giản đến chương sonata, minh hoạ bằng sonata piano của [[Beethoven]].
- Marx **có thể** là người đặt ra thuật ngữ **"hình thức sonata"**, và thuật ngữ **"Formenlehre"** (học thuyết hình thức) cũng bắt nguồn từ ông. Lối dạy hình thức như những **khuôn mẫu** này ảnh hưởng đến giáo trình hình thức suốt thế kỷ 19–20 (xem [[hinh-thuc-sonata]]).
- Song song là các bài **phân tích dạng ghi chú chương trình** cho người nghe hoà nhạc — truyền thống mà Donald Tovey (Anh) về sau tiêu biểu.

## Đầu thế kỷ 20: tìm sự thống nhất bên dưới
- **Heinrich Schenker**: phân tích nhiều tầng, coi tác phẩm là sự kéo dài của một cấu trúc nền (xem [[phan-tich-schenker]]).
- **Arnold Schoenberg**: Grundgestalt và biến tấu phát triển (xem [[motif]]).
- **Rudolph Réti** (*The Thematic Process in Music*, 1951): tìm các **"tế bào" cao độ** ẩn chung giữa các chủ đề tương phản, cho phép cả đảo, nghịch hành và **đổi thứ tự** nốt. Phương pháp bị phê bình nhiều vì **quá lỏng** — tìm "liên hệ" ở đâu cũng được, bỏ qua vai trò hoà âm của các nốt — nhưng sách vẫn được trích dẫn rất thường xuyên.

## Nửa sau thế kỷ 20 đến nay
- Lý thuyết **tập hợp cao độ** cho nhạc phi điệu tính (Forte, 1973 — xem [[tap-hop-cao-do]]).
- **Phân tích phong cách** của Jan LaRue (1970 — xem [[phan-tich-phong-cach]]).
- **Lý thuyết chủ đề biểu đạt** của Leonard Ratner (1980 — xem [[ly-thuyet-chu-de]]).
- Lý thuyết nhịp và nhóm của Lerdahl và Jackendoff (1983 — xem [[sieu-nhip]]).
- **Chức năng hình thức** của William Caplin (1998) và **Lý thuyết Sonata** của Hepokoski – Darcy (2006) (xem [[chuc-nang-hinh-thuc]]).
- **Neo-Riemann** cho hoà âm cromatic (xem [[neo-riemann]]).
- **Phân tích biểu diễn và bản thu** (xem [[phan-tich-va-bieu-dien]], [[so-sanh-ban-thu]]).

## Phê phán: "Ta đã đi vào phân tích thế nào, và làm sao để ra"
Bài luận nổi tiếng của nhà âm nhạc học **Joseph Kerman** (*Critical Inquiry*, **1980**) — *How We Got into Analysis, and How to Get Out* — phê phán việc phân tích tập trung vào cấu trúc kỹ thuật mà tách khỏi lịch sử, bối cảnh và **phê bình** (đánh giá, diễn giải ý nghĩa). Bài luận thường được coi là một khởi điểm của các tranh luận dẫn tới "âm nhạc học mới" ở thập niên 1980–1990. Bài học cho người dạy: phân tích là **phương tiện để hiểu và chơi hay hơn**, không phải mục đích tự thân.
`,
  },
  {
    slug: 'phan-tich-phong-cach',
    title: 'Phân tích phong cách (LaRue)',
    category: 'analysis',
    aliases: ['phân tích phong cách', 'style analysis', 'LaRue', 'SHMRG', 'Guidelines for Style Analysis', 'âm thanh hoà âm giai điệu nhịp điệu phát triển'],
    summary: 'Khung phân tích của Jan LaRue (Guidelines for Style Analysis, 1970): xét năm yếu tố — Âm thanh, Hoà âm, Giai điệu, Nhịp điệu và Sự phát triển (SHMRG) — ở ba tầng lớn, vừa, nhỏ; một bảng kiểm giúp phân tích không bỏ sót.',
    refs: [
      ['CiNii — LaRue, Guidelines for Style Analysis (Norton, 1970), catalogue record', 'https://ci.nii.ac.jp/ncid/BA23921310'],
      ['Ericsams.org — review of LaRue, Guidelines for Style Analysis', 'https://ericsams.org/index.php/music-reviews/history-and-aesthetics-of-music/665-guidelines-for-style-analysis-by-jan-larue'],
      ['Holy Cross Library — table of contents of Guidelines for Style Analysis', 'https://library.holycross.edu/Record/b1634467/TOC'],
      ['York University — Jazz recordings by Ed Bickert and problems of stylistic analysis (thesis using LaRue)', 'https://yorkspace.library.yorku.ca/items/2e06c705-535e-4b02-93da-5a007d5a2bb2'],
    ],
    body: `
Nhà âm nhạc học **Jan LaRue**, trong *Guidelines for Style Analysis* (W. W. Norton, **1970**; bản mở rộng 2011), đề xuất một khung phân tích có hệ thống để **không bỏ sót** yếu tố nào. Khung này được dùng rộng rãi trong giảng dạy, từ nhạc cổ điển đến jazz.

## Năm yếu tố: S – H – M – R – G
| Yếu tố | Gồm những gì (ví dụ) |
|---|---|
| **S — Âm thanh** (Sound) | Âm sắc, âm vực, [[ket-cau|kết cấu]], [[cuong-do|cường độ]] |
| **H — Hoà âm** (Harmony) | Hợp âm, tiến trình, giọng, [[chuyen-giong|chuyển giọng]], cả đối âm |
| **M — Giai điệu** (Melody) | Âm vực, đường nét, bước đi, [[motif]] |
| **R — Nhịp điệu** (Rhythm) | Nhịp, nhịp độ, tiết tấu, nhịp điệu hoà âm |
| **G — Sự phát triển** (Growth) | **Kết quả** của bốn yếu tố trên: chuyển động và hình dạng của tác phẩm |
Bốn yếu tố đầu **cộng lại** tạo nên **G**. LaRue phân biệt hai mặt của G: **chuyển động** (những gì hướng sự chú ý vào dòng chảy theo thời gian) và **hình dạng** (những mốc, khối, "kiến trúc" mà ta nhận ra — tức là [[hinh-thuc-am-nhac|hình thức]]).

## Ba tầng
Mỗi yếu tố được xét ở ba tầng **lớn – vừa – nhỏ**. Ví dụ với hoà âm: tầng nhỏ là tiến trình trong một câu; tầng vừa là kế hoạch chuyển giọng trong một phần; tầng lớn là tổ chức giọng của cả tác phẩm.

## Dùng SHMRG như một bảng kiểm
| | Lớn | Vừa | Nhỏ |
|---|---|---|---|
| **S** | Âm vực và mật độ cả bài thay đổi ra sao? | Mỗi phần có kết cấu riêng? | Cách xếp nốt, pedal trong một ô |
| **H** | Giọng chính và các giọng phụ | Chuyển giọng giữa các phần | Hợp âm đặc biệt, [[cau-ket|kết]] |
| **M** | Đỉnh cao của cả bài ở đâu? | Chủ đề quay lại thế nào? | Motif, quãng đặc trưng |
| **R** | Nhịp độ các phần | [[sieu-nhip|Nhóm ô nhịp]], nhịp điệu hoà âm | Tiết tấu, [[dao-phach]] |
| **G** | Hình thức tổng thể | Cách mỗi phần được xây | Cách một câu đẩy tới kết |

## Điểm mạnh và giới hạn
- **Mạnh**: trung tính về phong cách, dùng được cho mọi thời kỳ; buộc người phân tích xét cả những yếu tố hay bị bỏ qua (âm thanh, nhịp điệu).
- **Giới hạn**: đây là **bảng kiểm mô tả**, không phải lý thuyết giải thích; nó không cho biết **vì sao** một tác phẩm vận hành như thế. Nên kết hợp với các lý thuyết chuyên sâu ([[chuc-nang-hinh-thuc]], [[phan-tich-schenker]], [[ly-thuyet-chu-de]]).

Quy trình phân tích chung: [[phuong-phap-phan-tich-tac-pham]].
`,
  },
  {
    slug: 'chuc-nang-hinh-thuc',
    title: 'Chức năng hình thức',
    category: 'analysis',
    aliases: ['chức năng hình thức', 'formal function', 'formal functions', 'Caplin', 'Classical Form', 'chủ đề chính', 'chủ đề phụ', 'đoạn chuyển', 'chặt chẽ và lỏng', 'tight-knit', 'loose', 'trước khi bắt đầu', 'sau khi kết thúc'],
    summary: 'Lý thuyết của William Caplin (Classical Form, 1998): mỗi phần của tác phẩm Cổ điển không chỉ là một "khối" A, B mà mang một chức năng theo thời gian — mở đầu, ở giữa, kết thúc, trước khi bắt đầu, sau khi kết thúc.',
    wiki: 'William_Caplin',
    refs: [
      ['Caplin — What are formal functions? (PDF, McGill)', 'https://www.music.mcgill.ca/~caplin/what-are-formal-functions.pdf'],
      ['Music Theory Online — review of Caplin, Classical Form (1998)', 'https://www.mtosmt.org/issues/mto.98.4.6/mto.98.4.6.grave.php'],
      ['Music Theory Online — Cadential melodies: form-functional taxonomy and the role of the upper voice', 'https://www.mtosmt.org/ojs/index.php/mto/article/view/842/192'],
      ['Music Theory Online — Review of Caplin, Analyzing Classical Form (Aziz, 2014)', 'https://www.mtosmt.org/issues/mto.14.20.1/mto.14.20.1.aziz.html'],
      ['Wikipedia — William Caplin', 'https://en.wikipedia.org/wiki/William_Caplin'],
      ['Oxford Academic — Hepokoski & Darcy, Elements of Sonata Theory (2006)', 'https://academic.oup.com/book/4770'],
    ],
    body: `
Sơ đồ chữ cái (A – B – A) cho biết **phần nào giống phần nào**, nhưng không cho biết **mỗi phần làm gì**. **William Caplin** (*Classical Form*, Oxford, 1998), dựa trên truyền thống của [[Schoenberg]] và Erwin Ratz, đề xuất phân tích theo **chức năng hình thức**: vai trò của mỗi phần trong **dòng thời gian** của tác phẩm.

## Năm chức năng thời gian
| Chức năng | Ý nghĩa | Ví dụ ở tầng cả chương sonata |
|---|---|---|
| **Trước khi bắt đầu** | Chuẩn bị | Mở đầu chậm (introduction) |
| **Mở đầu** | Thiết lập | Phần trình bày |
| **Ở giữa** | Bất ổn, phát triển | Phần phát triển |
| **Kết thúc** | Khép lại | Phần tái hiện |
| **Sau khi kết thúc** | Dư âm, xác nhận | Coda |
Cùng logic này lặp lại ở tầng nhỏ hơn. Trong **phần trình bày** sonata: **chủ đề chính** mang chức năng mở đầu, **đoạn chuyển** mang chức năng ở giữa, **chủ đề phụ** mang chức năng kết thúc. Trong một **chủ đề**: ví dụ sentence có phần trình bày (mở đầu), tiếp nối (giữa) và kết (kết thúc) — xem [[cau-nhac]].

## Nhận ra chức năng bằng tai
- **Mở đầu**: thiết lập giọng chủ (hợp âm chủ được kéo dài), ý nhạc rõ ràng; giai điệu đi lên hoặc xoay quanh các nốt chính.
- **Ở giữa**: chia nhỏ ý nhạc, [[mo-tien-hoa-am|mô tiến]], hoà âm thay đổi nhanh hơn, giọng không ổn định.
- **Kết thúc**: tiến trình [[cau-ket|kết]]; giai điệu thường đi **xuống** về bậc 1 (kết chính) hoặc bậc 2, bậc 7 (kết nửa).
Một nghiên cứu về giai điệu ở chỗ kết (MTO) xác nhận các tín hiệu giai điệu này **bổ sung** cho, chứ không thay thế, tiêu chí hoà âm.

## Chặt chẽ và lỏng
Caplin còn phân biệt cách tổ chức **chặt chẽ** (các đơn vị gắn chặt, cân đối, ổn định giọng — điển hình của chủ đề chính) và **lỏng** (mở rộng, kéo dài, kém ổn định hơn — điển hình của đoạn chuyển và chủ đề phụ). Đây là công cụ tốt để giải thích **vì sao** chủ đề phụ thường dài và "lưỡng lự" hơn chủ đề chính.

## Hai trường phái hình thức sonata hiện nay
- **Caplin**: hướng tới **chức năng** của từng đơn vị, đi từ dưới lên.
- **Hepokoski và Darcy** (*Elements of Sonata Theory*, 2006): so sánh tác phẩm với các **chuẩn mực** thể loại — điểm ngắt giữa (MC), điểm kết của phần trình bày (EEC), các lần "xoay vòng" chất liệu — xem [[hinh-thuc-sonata]].
Hai cách nhìn bổ sung cho nhau; giáo trình hiện đại thường giới thiệu cả hai.

## Với người chơi đàn
Biết một đoạn mang chức năng **ở giữa** (bất ổn) hay **kết thúc** (khép lại) gợi ý cách tạo hướng đi: căng dần ở đoạn chuyển, nhấn kết ở cuối chủ đề phụ, thả lỏng ở coda (xem [[phan-tich-va-bieu-dien]]).
`,
  },
  {
    slug: 'sieu-nhip',
    title: 'Siêu nhịp',
    category: 'analysis',
    aliases: ['siêu nhịp', 'hypermeter', 'hypermeasure', 'siêu ô nhịp', 'phách mạnh cấu trúc', 'structural downbeat', 'nhóm ô nhịp', 'metrical structure', 'grouping structure', 'Lerdahl Jackendoff', 'GTTM'],
    summary: 'Nhịp ở tầng cao hơn ô nhịp: các ô nhịp nhóm thành "siêu ô nhịp" (thường 2 hoặc 4 ô) với ô mạnh và ô nhẹ. Từ "phách mạnh cấu trúc" của Edward Cone (1968) đến lý thuyết của Lerdahl và Jackendoff (1983).',
    wiki: 'Hypermeter',
    refs: [
      ['Wikipedia — Hypermeter', 'https://en.wikipedia.org/wiki/Hypermeter'],
      ['Lerdahl & Jackendoff — A Generative Theory of Tonal Music, excerpt (PDF)', 'https://www.midside.com/pdf/eastman/fall06/th581/lerdahl_jackendoff.pdf'],
      ['GMTH — on Cone, Musical Form and Musical Performance', 'https://www.gmth.de/zeitschrift/artikel/521.aspx'],
      ['Symposium — Patterning beyond hypermeter', 'https://symposium.music.org/volume-32/articles-1752877061/patterning-beyond-hypermeter'],
      ['Schachter — Unfoldings (excerpt, PDF)', 'https://www.midside.com/pdf/eastman/fall06/th581/schachter_unfoldings.pdf'],
      ['Wikipedia — Edward T. Cone', 'https://en.wikipedia.org/wiki/Edward_T._Cone'],
    ],
    body: `
Trong một ô nhịp có phách mạnh và phách nhẹ (xem [[so-chi-nhip]]). **Siêu nhịp** là ý tưởng rằng **các ô nhịp** cũng nhóm lại theo mẫu mạnh – nhẹ: ví dụ trong một câu 4 ô, ô 1 là "phách mạnh" của nhóm, ô 3 là phách mạnh phụ. Nhóm ô nhịp như vậy gọi là **siêu ô nhịp**.

## Hai cấu trúc khác nhau: nhịp và nhóm
**Fred Lerdahl** và **Ray Jackendoff** (*A Generative Theory of Tonal Music*, 1983) tách bạch hai thứ thường bị lẫn:
| | Cấu trúc nhịp (meter) | Cấu trúc nhóm (grouping) |
|---|---|---|
| Đơn vị | **Phách** — những điểm thời gian, không có độ dài | **Nhóm** — các đoạn có độ dài (motif, câu, phần) |
| Đều đặn? | Có xu hướng đều | **Không cần** đều |
| Ví dụ | Ô 1 – 2 – 3 – 4 với ô 1 và 3 mạnh | Câu 5 ô, đoạn 3 câu |
Theo hai tác giả, ở tầng **trên ô nhịp**, nhịp **dần nhường chỗ cho nhóm**: ở tầng rất cao, ta nghe cấu trúc nhịp trong bối cảnh cấu trúc nhóm, vốn hiếm khi đều. Họ không nêu rõ nhịp "biến mất" ở tầng nào; các nhà lý thuyết khác (như Jonathan Kramer) không đồng ý về việc nhịp kéo dài lên tới đâu.

## Cone: phách mạnh cấu trúc và biểu diễn
**Edward T. Cone** (*Musical Form and Musical Performance*, 1968) cho rằng một biểu diễn đúng đắn trước hết phụ thuộc vào việc **cảm nhận và truyền đạt đời sống nhịp điệu** của tác phẩm.
- Ông nói về **"phách mạnh cấu trúc"**: điểm đến của cả một câu hay một phần, thường ở chỗ kết.
- Ông phân biệt các loại điểm mạnh: **điểm mạnh mở đầu**, **điểm mạnh kết**, và các điểm ở giữa.
- **Phê bình**: Carl Schachter chỉ ra rằng chỗ kết thường rơi vào ô **nhẹ** của siêu nhịp, nên không nhất thiết mang "tính chất phách mạnh". Wallace Berry thì lo rằng nhấn "phách mạnh cuối" một cách máy móc sẽ làm cách chơi cứng nhắc.

## Siêu nhịp không đều
- **Mở rộng**: một câu 4 ô bị kéo thành 5–6 ô (lặp kết, kéo dài hợp âm).
- **Chồng ô** (elision): ô cuối của câu này **đồng thời** là ô đầu của câu sau — ô mạnh của nhóm mới "nuốt" ô nhẹ của nhóm cũ.
- **Hemiola** ở tầng ô nhịp: hai ô 3/4 nghe như một ô 3/2 (xem [[da-nhip]]).
Những chỗ "lệch" này thường là chỗ nhà soạn nhạc tạo **bất ngờ** (xem [[ky-vong-am-nhac]]).

## Cách tìm siêu nhịp
1. Tìm chỗ **bắt đầu câu** và **chỗ kết** ([[cau-nhac]]).
2. Thử đánh số ô theo nhóm 1 – 2 – 3 – 4 từ đầu câu; nghe xem ô "1" có thực sự mạnh (hợp âm mới, nốt trầm mới, trọng âm) không.
3. Đánh dấu chỗ nhóm bị kéo dài hay chồng lên nhau.

## Với người chơi
Siêu nhịp giúp tránh lối chơi "ô nào cũng nặng như nhau": hướng câu nhạc về ô mạnh của nhóm, thả nhẹ ô yếu (xem [[dien-dat-cau-nhac]], [[phan-tich-va-bieu-dien]]).
`,
  },
  {
    slug: 'ly-thuyet-chu-de',
    title: 'Lý thuyết chủ đề biểu đạt',
    category: 'analysis',
    aliases: ['lý thuyết chủ đề', 'topic theory', 'topoi', 'chủ đề biểu đạt', 'musical topic', 'Ratner', 'Agawu', 'phong cách săn bắn', 'phong cách quân hành', 'pastoral', 'phong cách Thổ Nhĩ Kỳ', 'ombra', 'tempesta', 'phong cách bác học', 'learned style'],
    summary: 'Âm nhạc thế kỷ 18 dùng những "chủ đề" quen thuộc mà người nghe thời đó nhận ra ngay — vũ khúc, hành khúc, tiếng tù và săn, đồng quê, phong cách Thổ Nhĩ Kỳ, phong cách bác học… Lý thuyết của Leonard Ratner (1980) giúp đọc ý nghĩa biểu đạt của nhạc Cổ điển.',
    wiki: 'Topic_(music)',
    refs: [
      ['Mirka (ed.), The Oxford Handbook of Topic Theory (2014)', 'https://academic.oup.com/edited-volume/34564'],
      ['Mirka — Introduction to the Oxford Handbook of Topic Theory (PDF)', 'https://music.arts.uci.edu/abauer/4.3/readings/Oxford_handbook_of_topic_theory_Mirka_Intro.pdf'],
      ['Wikipedia — Leonard Ratner', 'https://en.wikipedia.org/wiki/Leonard_Ratner'],
      ['McClelland — papers on ombra and tempesta (Leeds)', 'https://leeds.academia.edu/CMcClelland'],
      ['Koozin — Study scores: semiotics and topics (University of Houston)', 'https://www.uh.edu/~tkoozin/semiotics/StudyScores.html'],
    ],
    body: `
Người nghe thế kỷ 18 sống giữa nhiều loại âm nhạc mang **ý nghĩa xã hội**: hành khúc của quân đội, tiếng tù và đi săn, vũ khúc trong cung đình, nhạc nhà thờ… Khi một bản sonata **gợi** đến những âm thanh đó, người nghe thời ấy hiểu ngay ý nghĩa. Lý thuyết **chủ đề biểu đạt** (topic theory) giúp người nghe ngày nay đọc lại các tín hiệu đó.

## Ratner và khái niệm "chủ đề"
**Leonard Ratner**, trong *Classic Music: Expression, Form, and Style* (1980), định nghĩa chủ đề là **"đề tài cho diễn ngôn âm nhạc"** và chia thành hai nhóm:
- **Loại hình** (types): những thể loại trọn vẹn như **vũ khúc** (minuet, gavotte…) và **hành khúc**.
- **Phong cách** (styles): những "màu" được mượn vào tác phẩm khác — **quân hành**, **săn bắn**, **Thổ Nhĩ Kỳ**…
Ranh giới không cứng: minuet là một thể loại hoàn chỉnh, nhưng cũng có thể là một "phong cách" xuất hiện trong bản nhạc khác.

## Một số chủ đề thường gặp
| Chủ đề | Dấu hiệu âm nhạc thường được mô tả | Gợi liên tưởng |
|---|---|---|
| **Quân hành, hành khúc** | Nhịp chẵn, tiết tấu chấm dôi, hình kèn hiệu | Uy nghi, nghi lễ |
| **Săn bắn** | Nhịp 6/8, hình **tù và** (horn call) | Ngoài trời, quý tộc |
| **Đồng quê** (pastoral) | Bass ngân như kèn túi, nhịp chậm đung đưa | Thanh bình |
| **Thổ Nhĩ Kỳ** (alla turca) | Bè trầm dồn dập mô phỏng trống, nốt hoa mỹ | Ngoại lai, náo nhiệt — xem [[phan-tich-rondo-alla-turca]] |
| **Phong cách bác học** (learned) | [[doi-am]] mô phỏng, [[fugue|fugato]] | Nhà thờ, truyền thống |
| **Ombra** | Chậm, cromatic, hoà âm tối | Siêu nhiên, chết chóc |
| **Tempesta** | Nhanh, kịch tính, tremolo | Bão tố, giận dữ |
Lưu ý: nhãn **"Sturm und Drang"** từng được dùng như một chủ đề; Clive McClelland cho rằng nó **không còn phù hợp** và đề xuất dùng **tempesta** — đối trọng **nhanh** của **ombra** (chậm).

## Sau Ratner
- **Kofi Agawu** (*Playing with Signs*, 1991) kết hợp chủ đề biểu đạt với phân tích Schenker, cho thấy **ý nghĩa** (bề mặt) và **cấu trúc** (bên dưới) gắn với nhau trong nhạc Haydn, Mozart, Beethoven; mở đường cho **ký hiệu học âm nhạc** (Robert Hatten, Raymond Monelle).
- *The Oxford Handbook of Topic Theory* (Danuta Mirka chủ biên, 2014): cuốn sách đầu tiên mang tên "lý thuyết chủ đề", nhấn mạnh rằng chủ đề là **dấu hiệu âm nhạc** của "thế kỷ 18 dài", có gốc trong lý thuyết và thẩm mỹ học thời đó.

## Với người dạy và người chơi
- Hỏi học trò: đoạn nhạc này **gợi** điều gì — một đoàn quân, một vũ hội, một nhà thờ? Câu trả lời gợi ý ngay về [[cach-dien-tau|cách diễn tấu]], nhịp độ, âm sắc.
- Trong một tác phẩm Cổ điển, chủ đề có thể **đổi sau vài ô nhịp**; nhận ra những lần chuyển đó giúp chơi có **tính cách** rõ ràng cho từng đoạn.
- Áp dụng chủ yếu cho nhạc **thế kỷ 18 – đầu thế kỷ 19**; với các thời kỳ khác cần thận trọng.
`,
  },
  {
    slug: 'phan-tich-va-bieu-dien',
    title: 'Phân tích và biểu diễn',
    category: 'analysis',
    aliases: ['phân tích và biểu diễn', 'analysis and performance', "performer's analysis", 'phân tích của người chơi', 'Rink', 'Cone', 'Berry', 'Rothstein', 'biểu diễn như phân tích'],
    summary: 'Phân tích giúp gì cho người chơi đàn? Từ quan điểm "phân tích quyết định cách chơi" (Cone 1968, Berry 1989) đến "phân tích của người chơi" (Rink) và quan điểm coi bản thân biểu diễn là một cách phân tích (Cook).',
    refs: [
      ['Cambridge — Rink, Performance and analysis: interaction and interpretation (The Practice of Performance, 1995)', 'https://www.cambridge.org/core/books/abs/practice-of-performance/performance-and-analysis-interaction-and-interpretation/036AA1CBD96D11DCFE0472E2E6F64034'],
      ['Holy Cross Library — Rink (ed.), Musical Performance: A Guide to Understanding (2002), contents', 'https://library.holycross.edu/Record/b1441957/Details'],
      ['Cook — Analysing performance (PDF)', 'https://posgrado.unam.mx/musica/lecturas/interpretacion/complementarias/perspectivasTeoricas/Cook%20ANALYSING%20PERFORMANCE%5B1%5D.pdf'],
      ['Music Theory Online — Schmalfeldt, response to the 2004 SMT session "Performance and Analysis"', 'https://mtosmt.org/issues/mto.05.11.1/mto.05.11.1.schmalfeldt.php'],
      ['Revista Música (USP) — In respect of performance: the view from musicology', 'https://revistas.usp.br/revistamusica/en/article/view/55105'],
      ['GMTH — on Cone, Musical Form and Musical Performance', 'https://www.gmth.de/zeitschrift/artikel/521.aspx'],
      ['Universidad de Alcalá — Rothstein, "Analysis and the act of performance", Spanish translation (2002)', 'https://ebuah.uah.es/xmlui/handle/10017/36529'],
    ],
    body: `
## Ba quan điểm
| Quan điểm | Đại diện | Ý chính |
|---|---|---|
| **Phân tích dẫn dắt biểu diễn** | Edward Cone (1968), Wallace Berry (*Musical Structure and Performance*, 1989) | Hiểu cấu trúc trước, rồi biểu diễn để **làm rõ** cấu trúc ấy |
| **Phân tích của người chơi** | John Rink (1995, 2002) | Người chơi phân tích **theo cách riêng**, gắn với việc tập luyện và nghe, không nhất thiết theo các phương pháp lý thuyết hàn lâm |
| **Biểu diễn là một cách phân tích** | Nicholas Cook (1999 trở đi) | Biểu diễn tự nó **tạo ra ý nghĩa**; nghiên cứu bản thu cho thấy những gì bản nhạc không ghi (xem [[so-sanh-ban-thu]]) |

## Phê bình hướng "từ phân tích đến biểu diễn"
- Cook chỉ ra rằng sách của Berry đặt biểu diễn vào khung lý thuyết sẵn có, với ảnh hưởng **chỉ đi một chiều** — từ nhà phân tích đến người chơi. Ông đề nghị coi **biểu diễn là nguồn ý nghĩa riêng**.
- Rink nhắc lại quan điểm của Donald Tovey rằng phân tích giúp người chơi, nhưng nhấn mạnh phân tích có ích cho biểu diễn khi nó **xuất phát từ nhu cầu của người chơi**: tìm đường đi của câu, chỗ căng – chùng, chỗ đỉnh.
- Từ đầu thế kỷ 20, Riemann và Schenker đều quan tâm sâu đến biểu diễn; sau đó, trong vài thập kỷ, lý thuyết âm nhạc xa rời các vấn đề thực hành, rồi quay lại từ cuối thập niên 1980.

## Phân tích cho người chơi: những câu hỏi hữu ích
| Câu hỏi | Công cụ |
|---|---|
| Câu nhạc dài bao nhiêu, đi về đâu? | [[cau-nhac]], [[sieu-nhip]] |
| Đỉnh của câu, của cả bài ở đâu? | [[giai-dieu]], [[phan-tich-phong-cach]] |
| Chỗ nào căng nhất về hoà âm? | [[phan-tich-hoa-am]], [[hoa-am-cromatic]] |
| Đoạn này mở đầu, chuyển tiếp hay kết thúc? | [[chuc-nang-hinh-thuc]] |
| Đoạn này mang tính cách gì? | [[ly-thuyet-chu-de]] |
| Bè nào quan trọng nhất? | [[ket-cau]], [[lam-noi-giai-dieu]] |
| Người khác chơi đoạn này thế nào? | [[so-sanh-ban-thu]] |

## Thận trọng
- Một kết quả phân tích **không tự động** cho ra một cách chơi: cùng một cấu trúc có thể được thể hiện bằng nhiều cách (nhấn mạnh, hay cố tình làm mờ).
- Phân tích giúp **học thuộc** vững hơn (trí nhớ phân tích — xem [[hoc-thuoc-bai]]) và **tập trong đầu** (xem [[tap-trong-dau]]).
- Mục tiêu cuối cùng vẫn là âm thanh: hãy kiểm tra mọi kết luận phân tích **bằng tai, trên đàn** (xem [[dien-dat-cau-nhac]]).
`,
  },
  {
    slug: 'phan-tich-canon-pachelbel',
    title: 'Phân tích: Canon cung Rê của Pachelbel',
    category: 'analysis',
    aliases: ['Canon in D', 'Canon cung Rê', 'Pachelbel Canon', 'Canon Pachelbel'],
    summary: 'Canon ba violin đồng âm trên một bè trầm lặp (ground bass), kèm một gigue; bị lãng quên gần 200 năm và trở nên nổi tiếng sau bản thu của Jean-François Paillard năm 1968.',
    wiki: 'Pachelbel%27s_Canon',
    refs: [
      ['Wikipedia — Pachelbel\'s Canon', 'https://en.wikipedia.org/wiki/Pachelbel%27s_Canon'],
      ['University of Richmond — Arachnophonia: Pachelbel\'s Canon in D', 'https://create.richmond.edu/parsons/?p=5020'],
    ],
    body: `
## Cấu trúc
- Viết cho **ba violin và [[bass-so|basso continuo]]**, đi kèm một gigue.
- Là một **[[doi-am-kep|canon đồng âm]] ba bè**: ba violin chơi cùng một giai điệu, lần lượt vào sau nhau. Bè thứ tư là **bè trầm lặp** (basso ostinato / ground bass) suốt bài — xem [[ostinato]]. Bài cũng mang yếu tố của chaconne.

## Bè trầm và vòng hợp âm
Bè trầm 8 nốt lặp lại tạo nên vòng hợp âm nổi tiếng **D – A – Bm – F♯m – G – D – G – A** (trong Đô trưởng: C – G – Am – Em – F – C – F – G), dùng trong vô số bài hát — xem [[vong-hop-am]] và [[mo-tien-hoa-am|mô tiến quãng 3 đi xuống]].

::keyboard D4 F#4 A4 | Hợp âm chủ Rê trưởng — hoá biểu 2 dấu thăng (F♯, C♯)

## Lịch sử
| Mốc | Sự kiện |
|---|---|
| 1680–1706? | Thời điểm sáng tác **không rõ** |
| 1838–1842 | Bản chép tay cổ nhất còn lại |
| 1919 | Gustav Beckmann công bố bản tổng phổ trong một bài nghiên cứu về nhạc thính phòng của Pachelbel |
| 1929 | Max Seiffert xuất bản một bản chuyển soạn |
| 1940 | Bản thu của Boston Pops (Arthur Fiedler) — có thể là bản thu đầu tiên, ít được chú ý |
| 1968 | Bản thu của dàn nhạc thính phòng **Jean-François Paillard**: chậm hơn, phong cách Lãng mạn, thêm các bè tự viết — thay đổi số phận bài nhạc |

Từ thập niên 1970, Canon được thu âm bởi rất nhiều nhóm nhạc. Xem [[Pachelbel]].

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Ba violin đồng âm và basso continuo; kết cấu dày dần khi các bè canon lần lượt vào |
| **Hoà âm** | Một vòng 8 hợp âm lặp suốt bài: I – V – vi – iii – IV – I – IV – V |
| **Giai điệu** | Ba bè chơi cùng một giai điệu, vào sau nhau — [[doi-am-kep|canon]] |
| **Nhịp điệu** | Bè trầm lặp đều; các biến thể ở bè trên dày dần về tiết tấu |
| **Phát triển** | Hình thức biến tấu trên bè trầm lặp ([[ostinato]], [[bien-tau]]) — sự phát triển nằm ở bè trên, không ở hoà âm |

Liên hệ phương pháp: bè trầm của vòng này là dạng nhảy của lược đồ **Romanesca** — xem [[luoc-do-galant]].

## Gợi ý khi dạy
- Tay trái chơi bè trầm 8 nốt, tay phải lần lượt các biến thể — bài tập tốt về [[dem-hat-piano|đệm]] và [[the-dao-hop-am|thể đảo]].
- Dùng vòng hợp âm này để tập [[ngau-hung-piano|ngẫu hứng]] trên âm giai Rê trưởng.
`,
  },
  {
    slug: 'phan-tich-prelude-do-truong',
    title: 'Phân tích: Prelude Đô trưởng BWV 846',
    category: 'analysis',
    aliases: ['Prelude số 1', 'Prelude Đô trưởng', 'BWV 846', 'Prelude in C major', 'Ave Maria Gounod'],
    summary: 'Bài mở đầu tập 1 Clavier bình quân của Bach: 35 ô nhịp hợp âm rải theo một khuôn duy nhất — một bài học hoà âm và dẫn giọng thu nhỏ.',
    wiki: 'Prelude_and_Fugue_in_C_major,_BWV_846',
    refs: [
      ['Wikipedia — Prelude and Fugue in C major, BWV 846', 'https://en.wikipedia.org/wiki/Prelude_and_Fugue_in_C_major,_BWV_846'],
      ['Wikipedia — Ave Maria (Bach/Gounod)', 'https://en.wikipedia.org/wiki/Ave_Maria_(Bach/Gounod)'],
      ['Research Catalogue — Prolonged pedal point (BWV 846)', 'https://researchcatalogue.net/view/231816/357695'],
      ['teoria.com — BWV 846: last measures', 'https://www.teoria.com/en/articles/2017/BWV846/final.php'],
    ],
    body: `
## Tổng quan
Bài mở đầu của tập 1 **Clavier bình quân** ([[Bach]], 1722 — xem [[luat-binh-quan]], [[fugue]]). Dài **35 ô nhịp**, gần như toàn bộ là **[[luyen-hop-am-rai|hợp âm rải]]** theo cùng một khuôn, và kết thúc bằng một hợp âm Đô trưởng khối.

## Khuôn hợp âm rải
Mỗi ô nhịp là **một hợp âm**, rải theo cùng một mẫu (lặp lại hai lần mỗi ô). Vì kết cấu không đổi, toàn bộ sự hấp dẫn nằm ở **hoà âm** và **[[dan-giong|dẫn giọng]]**: các bè chỉ dịch chuyển từng bậc nhỏ từ hợp âm này sang hợp âm kia.

::staff treble C4+E4+G4+C5+E5 C4+D4+A4+D5+F5 B3+D4+G4+D5+F5 C4+E4+G4+C5+E5 | Bốn ô nhịp đầu: C – Dm7/C – G7/B – C (I – ii7 – V7 – I)

Bốn ô đầu đã là một vòng [[chuc-nang-hoa-am|chủ – hạ át – át – chủ]] trọn vẹn, với bè trầm C – C – B – C gần như đứng yên. Phần giữa đi xa hơn với nhiều [[hop-am-at-phu|át phụ]] và [[hop-am-bay-giam|hợp âm 7 giảm]].

## Hai bass ngân ở cuối bài
- **Ô 23** gợi ý rất mạnh hợp âm át nhưng Bach **trì hoãn** nó; hợp âm G7 chỉ đến ở **ô 24**.
- **Ô 24–31**: nốt **G** (át âm) giữ ở bè trầm suốt **8 ô nhịp** — một [[bass-ngan|bass ngân át âm]] dẫn tới cao trào.
- **Từ ô 32**: biến thể cuối cùng của vòng **ii – V – I** trên **bass ngân chủ âm C**, rồi hợp âm Đô trưởng khối kết bài.

Số ô nhịp tính theo bản 35 ô (không có "ô Schwencke" — xem dưới); ấn bản có ô chèn thêm sẽ lệch một ô.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Một khuôn hợp âm rải duy nhất suốt 35 ô; kết bằng hợp âm khối |
| **Hoà âm** | Mỗi ô một hợp âm; mở bằng I – ii7 – V7 – I; phần giữa có át phụ và hợp âm 7 giảm; cuối bài bass ngân át (ô 24–31) rồi bass ngân chủ |
| **Giai điệu** | Không có giai điệu nổi bật — "giai điệu" là đường đi của các bè bên trong khuôn rải ([[dan-giong]]) |
| **Nhịp điệu** | Tiết tấu không đổi; nhịp điệu hoà âm đều một hợp âm mỗi ô ([[nhip-dieu-hoa-am]]) |
| **Phát triển** | Đường căng – chùng do hoà âm tạo ra: đi xa khỏi chủ, căng nhất trên bass ngân át, rồi khép lại trên bass ngân chủ |

Liên hệ phương pháp: đây là ví dụ kinh điển cho [[phan-tich-schenker|phân tích nhiều tầng]] — khi kết cấu không đổi, chỉ còn hoà âm và dẫn giọng gánh cấu trúc; hai bass ngân cuối bài mang [[chuc-nang-hinh-thuc|chức năng]] chuẩn bị và khép lại.

## "Ô nhịp Schwencke"
Ô 22 có F♯ ở bè trầm, sang ô 23 nhảy lên A♭ — một [[quang|quãng 3 giảm]]. Một số ấn bản (trong đó có ấn bản Gounod dùng) **chèn thêm một ô** với G ở bè trầm để "làm mượt". Ô này không có trong bản chép tay năm 1725 của học trò Bach, Heinrich Gerber, và đã bị Franz Kroll (1862), August Halm (1905) đặt nghi vấn.

## Ave Maria của Gounod
Charles Gounod viết một giai điệu **đặt chồng lên** Prelude (hầu như không sửa đổi): bản cho violin năm 1853, và bản cho giọng hát với lời Latin "Ave Maria" năm 1859 — bản trở nên nổi tiếng.

## Gợi ý luyện tập
- Chơi **hợp âm khối** từng ô trước để nghe hoà âm và tìm ngón bấm (xem [[the-dao-hop-am]]).
- Giữ các nốt chung giữa hai ô nhịp cùng một ngón.
- Dùng [[ban-dap|pedal]] đổi theo từng ô, hoặc chơi không pedal và giữ ngón (legato ngón).
`,
  },
  {
    slug: 'phan-tich-gymnopedie-so1',
    title: 'Phân tích: Gymnopédie số 1',
    category: 'analysis',
    aliases: ['Gymnopédie', 'Gymnopedie', 'Gymnopédie No. 1', 'Lent et douloureux'],
    summary: 'Tiểu phẩm 3/4 của Satie (1888): hai hợp âm 7 trưởng xen kẽ Gmaj7 – Dmaj7 dưới một giai điệu đơn giản, tạo nên không khí tĩnh lặng, u buồn.',
    wiki: 'Gymnopédies',
    refs: [
      ['Pianist Musings — What makes Gymnopédie No. 1 so special?', 'https://pianistmusings.com/2019/06/14/what-makes-gymnopedie-no-1-so-special/'],
      ['Piano Street — Satie: Gymnopédie No. 1', 'https://www.pianostreet.com/satie-sheet-music/gymnopedies/gymnopedie-1-d-major.htm'],
      ['Dartmouth — Satie analysis project (PDF)', 'https://gauss.dartmouth.edu/~m5f10/proj/Hopkins.pdf'],
    ],
    body: `
## Tổng quan
Bộ ba Gymnopédie của [[Satie]] hoàn thành ngày **2/4/1888**; cả ba đều ở nhịp **3/4**. Bài số 1 ở giọng **Rê trưởng**, đoạn giữa nghiêng sang Rê thứ. Chỉ dẫn "**Lent et douloureux**" (chậm và đau buồn) có trong bản in; bản viết tay ghi "Très lent". [[Debussy]] sau này phối khí cho dàn nhạc bài số 1 và số 3.

## Hai hợp âm xen kẽ
Phần mở đầu chỉ luân phiên **hai hợp âm 7 trưởng**:

::keyboard G3 B3 D4 F#4 | Gmaj7: G – B – D – F♯
::keyboard D3 F#3 A3 C#4 | Dmaj7: D – F♯ – A – C♯

Cả hai đều chứa **F♯** — nốt chung giữ hai hợp âm gắn kết và tạo màu u buồn đặc trưng. Toàn bộ trang đầu chỉ dùng hai hợp âm này: hoà âm **không tiến triển** theo [[chuc-nang-hoa-am|chức năng]] mà như một màu sắc tĩnh — gần với [[an-tuong|hoà âm ấn tượng]] và là tiền thân của [[toi-gian|âm nhạc tối giản]].

Về sau hoà âm hướng tới Rê thứ và La thứ, với [[bass-ngan|bass ngân]] D trầm bên dưới các [[hop-am-bay|hợp âm 7]] xen kẽ.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Kết cấu thưa: nốt trầm – hợp âm ở tay trái, một giai điệu đơn ở tay phải; chỉ dẫn "Lent et douloureux" |
| **Hoà âm** | Hai hợp âm 7 trưởng Gmaj7 – Dmaj7 luân phiên, chung nốt F♯; không tiến triển theo chức năng; về sau nghiêng sang Rê thứ, La thứ |
| **Giai điệu** | Đơn giản, vào ở phách 2 |
| **Nhịp điệu** | Nhịp 3/4 chậm, đệm đều |
| **Phát triển** | Gần như tĩnh — sự thay đổi rất nhỏ trở nên nổi bật; tiền thân của [[toi-gian|nhạc tối giản]] |

Liên hệ phương pháp: so sánh với [[hoa-am-dieu-thuc]] và [[an-tuong]] — hoà âm như màu sắc thay vì cú pháp T – PD – D.

## Gợi ý khi dạy
- Bài tốt để luyện **[[buoc-nhay-xa|bước nhảy]] tay trái**: nốt trầm ở phách 1, hợp âm ở phách 2.
- Giai điệu bắt đầu ở phách 2 — đếm kỹ để không vào sớm.
- Pedal đổi mỗi ô nhịp, tiếng đàn mềm, đều — xem [[ban-dap]], [[cuong-do]].

Lưu ý: tên hợp âm lấy từ một phân tích; các ấn bản có thể ghi cách xếp nốt khác.
`,
  },
  {
    slug: 'phan-tich-fur-elise',
    title: 'Phân tích: Für Elise',
    category: 'analysis',
    aliases: ['Für Elise', 'Fur Elise', 'WoO 59', 'Bagatelle La thứ', 'Elise'],
    summary: 'Bagatelle La thứ WoO 59 của Beethoven: hình thức rondo A – B – A – C – A, phác thảo 1808–1810, chỉ được in năm 1867 — và "Elise" là ai vẫn còn là bí ẩn.',
    wiki: 'Für_Elise',
    refs: [
      ['Wikipedia — Für Elise', 'https://en.wikipedia.org/wiki/F%C3%BCr_Elise'],
      ['G. Henle Verlag — Critical report (PDF)', 'https://www.henle.de/download/KB_ausfuehrlich/2207_2_153-155.pdf'],
      ['Piano Composer Teacher London — Für Elise: complete analysis', 'https://www.piano-composer-teacher-london.co.uk/post/fur-elise'],
      ['PTNA Piano Encyclopedia — Für Elise WoO 59', 'https://enc.piano.or.jp/en/musics/446'],
    ],
    body: `
## Lịch sử
- [[Beethoven]] phác thảo từ **1808**, viết bản đầy đủ hơn năm **1810** (Ludwig Nohl cho biết bản viết tay ghi ngày 27/4/1810), và sửa lại năm **1822** cho một lần in không thành.
- Bản in đầu tiên chỉ xuất hiện năm **1867**, sau khi Beethoven mất, trong sách của Nohl (Stuttgart). Bản viết tay mà Nohl dựa vào đã **thất lạc**; có học giả còn nghi nó chưa từng tồn tại, trong khi Barry Cooper (1984) chỉ ra một phác thảo còn lại rất gần bản in.

## "Elise" là ai?
Chưa có lời giải. Các giả thuyết: **Therese Malfatti** (học trò mà Beethoven được cho là đã cầu hôn năm 1810 — có thể Nohl chép nhầm "Therese" thành "Elise"), ca sĩ **Elisabeth Röckel**, hoặc cô bé **Elise Barensfeld**.

## Hình thức
Thường được phân tích là **[[rondo]] A – B – A – C – A** (cũng có ý kiến coi là hai đoạn có tái hiện):
| Đoạn | Nội dung |
|---|---|
| **A** | Chủ đề La thứ nổi tiếng, nhịp 3/8, mở đầu bằng [[nhip-lay-da|nốt lấy đà]] E – D♯ |
| **B** | Bắt đầu ở ô 23, giọng **Fa trưởng** (bậc 6 của La thứ), rồi chuyển sang **Đô trưởng** với các chuỗi nốt móc ba lặp lại một vòng kết |
| **A** | Chủ đề trở lại |
| **C** | Đoạn căng thẳng nhất về hoà âm: một chuỗi **[[hop-am-bay-giam|hợp âm 7 giảm]]**; nhiều phân tích mô tả nốt **A lặp lại ở bè trầm** như một [[bass-ngan|bass ngân]] |
| **A** | Chủ đề trở lại lần cuối; từ ô 59 kết thúc trên một **bass ngân chủ âm** |

Chủ đề A xoay quanh dao động giữa **E (át âm) và D♯** — đó là nét nhận diện của bài. Giọng của đoạn C được các nguồn ghi khác nhau (một nguồn ghi Rê thứ nhưng chưa được nguồn đáng tin xác nhận), nên bài không khẳng định.

::staff treble E5 D#5 E5 D#5 E5 B4 D5 C5 A4 | Cao độ của câu mở đầu (chưa thể hiện trường độ): E–D♯ dao động [[cung-nua-cung|nửa cung]] rồi đi xuống về A

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Giai điệu chia giữa hai tay, tay trái rải hợp âm; đoạn C dày và căng hơn |
| **Hoà âm** | La thứ; đoạn B sang Fa trưởng rồi Đô trưởng; đoạn C dùng chuỗi hợp âm 7 giảm trên nốt A lặp ở bè trầm |
| **Giai điệu** | Nét nhận diện: dao động nửa cung E – D♯ (nốt thêu quanh át âm) |
| **Nhịp điệu** | Nhịp 3/8, bắt đầu bằng nốt lấy đà; đoạn B có chuỗi móc ba |
| **Phát triển** | Rondo A – B – A – C – A: chủ đề quay lại như điểm tựa giữa các đoạn tương phản |

Liên hệ phương pháp: theo [[chuc-nang-hinh-thuc|chức năng hình thức]], mỗi lần A trở lại mang chức năng **khép lại** sau một đoạn tương phản; đoạn C với bass ngân là chỗ **căng nhất** trước lần trở về cuối.

## Điểm cần chú ý khi dạy
- Chủ đề A là giai điệu chia giữa hai tay: tay trái rải [[hop-am-ba|hợp âm]] Am và E nối tiếp tay phải — luyện [[lam-noi-giai-dieu|làm nổi giai điệu]] và [[ban-dap|pedal]] đổi theo hợp âm.
- Nốt D♯ là [[bac-am-giai|cảm âm]] của La thứ hoà âm (xem [[am-giai-thu]]); dao động E – D♯ chính là [[not-ngoai-hop-am|nốt thêu]] quanh nốt E.
- Mỗi lần A trở lại là một [[cau-ket|kết]] — "thở" ở cuối câu ([[dien-dat-cau-nhac]]).
`,
  },
  {
    slug: 'phan-tich-sonata-k545',
    title: 'Phân tích: Sonata Đô trưởng K. 545',
    category: 'analysis',
    aliases: ['K. 545', 'K545', 'Sonata facile', 'Sonata semplice', 'Sonata số 16 Mozart', 'Sonata cho người mới học'],
    summary: 'Sonata "dành cho người mới học" của Mozart (1788). Chương 1 là hình thức sonata mẫu mực — với một điểm bất thường: phần tái hiện bắt đầu ở giọng Fa trưởng.',
    wiki: 'Piano_Sonata_No._16_(Mozart)',
    refs: [
      ['San Francisco Conservatory — Sonata form: the recapitulation (PDF)', 'https://sfcm.edu/sites/default/files/sfcm-theory/analysis_lectures/19_sonata_form_recap/sonata_form_recapitulation.pdf'],
      ['PTNA Piano Encyclopedia — Mozart K. 545', 'https://enc.piano.or.jp/en/musics/300'],
      ['Wikipedia — Piano Sonata No. 16 (Mozart)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._16_(Mozart)'],
    ],
    body: `
## Tổng quan
[[Mozart]] ghi tác phẩm vào danh mục năm **1788** với lời chú "**dành cho người mới học**" — vì vậy có tên "Sonata facile" (sonata dễ). Ba chương: Allegro (Đô trưởng) – Andante (Sol trưởng) – Rondo (Đô trưởng).

## Chương 1: hình thức sonata
Xem lý thuyết ở [[hinh-thuc-sonata]].
| Phần | Nội dung |
|---|---|
| **Trình bày** | Chủ đề 1 ở Đô trưởng (giai điệu trên bass Alberti) → đoạn nối bằng [[luyen-am-giai|âm giai]] → Chủ đề 2 ở **Sol trưởng** (giọng át) |
| **Phát triển** | Ngắn, đi qua các giọng thứ; kết bằng [[cau-ket|kết trọn]] ở Fa trưởng |
| **Tái hiện** | Chủ đề 1 trở lại ở **Fa trưởng** (ô 42) — giọng **hạ át**, không phải giọng chính! Đoạn nối được mở rộng để quay về Đô; Chủ đề 2 ở **Đô trưởng** |

::staff treble C5 E5 G5 B4 C5 D5 C5 | Cao độ câu mở đầu: rải hợp âm C rồi [[not-ngoai-hop-am|nốt thêu]] quanh C

## Vì sao tái hiện ở Fa trưởng là đặc biệt?
- Charles Rosen cho rằng việc bắt đầu tái hiện ở giọng hạ át là "**hiếm** vào thời điểm đó"; về sau [[Schubert]] dùng cách này. Một phân tích khác lưu ý: không có ví dụ nào khác trong các sonata piano của Mozart, nhưng có trong các sonata kiểu cũ hơn.
- Nếu chép nguyên phần trình bày dịch xuống Fa, đoạn nối sẽ dẫn tới **Đô** (át của Fa) chứ không phải Sol. Vì vậy Mozart **viết lại đoạn nối** với thêm [[mo-tien-hoa-am|mô tiến]] để chủ đề 2 về đúng Đô trưởng — một bài học về [[chuyen-giong]].

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Giai điệu trên bass Alberti; các đoạn âm giai |
| **Hoà âm** | Đô trưởng → Sol trưởng (trình bày); các giọng thứ (phát triển); tái hiện bắt đầu ở Fa trưởng |
| **Giai điệu** | Câu mở đầu rải hợp âm C rồi thêu quanh C |
| **Nhịp điệu** | Bass Alberti đều; các chuỗi âm giai tạo đà |
| **Phát triển** | Hình thức sonata: trình bày – phát triển – tái hiện |

Liên hệ phương pháp — đọc theo [[chuc-nang-hinh-thuc|chức năng hình thức]] của Caplin: trong phần trình bày, **chủ đề 1** (Đô trưởng) mang chức năng **mở đầu**, đoạn nối bằng âm giai mang chức năng **ở giữa**, **chủ đề 2** (Sol trưởng) mang chức năng **kết thúc**. Việc Mozart phải viết lại đoạn nối ở phần tái hiện cho thấy rõ vai trò "dẫn đường" của chức năng ở giữa.

## Gợi ý khi dạy
- Bass Alberti tay trái phải **nhẹ và đều** — xem [[dem-hat-piano]], [[lam-noi-giai-dieu]].
- Các đoạn âm giai dùng ngón bấm chuẩn ([[luyen-am-giai]]) và luyện bằng [[kiem-soat-toc-do|bậc thang tốc độ]].
- Trước khi tập, cho học trò tìm ranh giới trình bày – phát triển – tái hiện trên bản nhạc: hiểu cấu trúc giúp [[hoc-thuoc-bai|học thuộc]] nhanh hơn.
`,
  },
  {
    slug: 'phan-tich-rondo-alla-turca',
    title: 'Phân tích: Rondo alla Turca',
    category: 'analysis',
    aliases: ['Rondo alla Turca', 'Hành khúc Thổ Nhĩ Kỳ', 'Turkish March', 'K. 331', 'Sonata K. 331', 'Alla turca'],
    summary: 'Chương 3 Sonata La trưởng K. 331 của Mozart (khoảng 1783): một rondo mô phỏng âm thanh ban nhạc quân đội Janissary của Thổ Nhĩ Kỳ — "mốt" của Vienna thời đó.',
    wiki: 'Piano_Sonata_No._11_(Mozart)',
    refs: [
      ['Wikipedia — Piano Sonata No. 11 (Mozart)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._11_(Mozart)'],
      ['Hoffman Academy — Rondo alla turca (form note)', 'https://hoffmanacademy.com/store/sheet-music/rondo-alla-turca-k-331-3rd-movement'],
      ['Ekspresi (ISI Padangpanjang) — Rondo alla Turca structure analysis', 'https://journal.isi-padangpanjang.ac.id/index.php/Ekspresi/article/download/3118/1289'],
    ],
    body: `
## Tổng quan
- Chương 3 (Alla turca – Allegretto) của **Sonata La trưởng K. 331** ([[Mozart]]). Cả ba chương đều ở **La trưởng hoặc La thứ** (cùng âm chủ — xem [[giong-song-song|giọng cùng tên]]).
- Thời gian, địa điểm sáng tác **không chắc chắn**; khả năng cao nhất là Vienna hoặc Salzburg khoảng **1783**, Artaria xuất bản năm **1784**.

## "Alla turca"
Chương nhạc mô phỏng âm thanh của **ban nhạc Janissary** (quân đội Ottoman) — rất được ưa chuộng ở Vienna lúc bấy giờ. Một số đàn piano thời đó có **"Turkish stop"** — bộ phận tạo tiếng chuông, trống — và chương này đôi khi được biểu diễn trên những cây đàn như vậy (xem [[lich-su-piano]]).

## Hình thức
Là một **[[rondo]]**, nhưng các phân tích **chia đoạn khác nhau**. Bản chi tiết nhất ghi: **A – B – C – D – E – C – A – B – C – coda**, mỗi đoạn (trừ coda) đều nhắc lại.
| Đoạn | Nội dung | Giọng |
|---|---|---|
| **A** | 8 ô: hình móc kép đi lên rồi móc đơn đi xuống, trên đệm móc đơn ngắt tiếng | La thứ |
| **B** | Chất liệu mới đi bằng quãng 3, rồi biến tấu A với crescendo, trở về nhỏ | |
| **C** | Hành khúc **forte** bằng **quãng 8** trên đệm [[ky-hieu-nang-cao|hợp âm rải]] — đoạn "Thổ Nhĩ Kỳ" nổi tiếng | **La trưởng** |
| **D** | Chuỗi móc kép liên tục, nhỏ, trên đệm hợp âm rải | Fa♯ thứ |
| **E** | Chủ đề forte dạng âm giai, rồi biến thể của D | |
| **Coda** | Hợp âm và quãng 8 forte, chen một lần nhắc chủ đề nhỏ; kết bằng các quãng 8 A và C♯ xen kẽ rồi hai hợp âm La trưởng | La trưởng |

Một nghiên cứu khác gộp lại thành A – B – C – B – A – B′ – coda; một nguồn nữa mô tả các đoạn hai phần có tái hiện ghép thành cấu trúc ba đoạn lớn. Khi dạy, hãy cùng học trò đánh dấu các lần đoạn C quay lại trên bản nhạc.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Mô phỏng ban nhạc Janissary: đoạn C forte bằng quãng 8 trên hợp âm rải nhanh ở tay trái |
| **Hoà âm** | Xoay quanh La thứ và La trưởng (cùng âm chủ); một đoạn ở Fa♯ thứ (theo một nguồn) |
| **Giai điệu** | Chủ đề mở đầu là chuỗi nốt thêu móc kép |
| **Nhịp điệu** | Nhịp hành khúc 2/4; đệm ngắt tiếng |
| **Phát triển** | Rondo, các phân tích chia đoạn khác nhau; đoạn C quay lại nhiều lần |

Liên hệ phương pháp: đây là ví dụ tiêu biểu của **chủ đề biểu đạt "Thổ Nhĩ Kỳ"** (alla turca) trong [[ly-thuyet-chu-de|lý thuyết chủ đề]] của Ratner — người nghe Vienna thời đó nhận ra ngay âm thanh của ban nhạc quân đội Ottoman.

## Gợi ý khi dạy
- Chủ đề mở đầu là chuỗi [[not-ngoai-hop-am|nốt thêu]] móc kép: luyện [[kiem-soat-toc-do|tăng tốc từng bậc]] và [[phuong-phap-luyen-tap|biến thể tiết tấu]].
- Hợp âm rải nhanh ở tay trái: rải gọn từ dưới lên, không làm chậm phách.
- Đoạn quãng 8 tay phải: xem [[ky-thuat-quang-tam]].

Lưu ý: giọng La thứ và Fa♯ thứ của đoạn A, D chỉ thấy ở một nguồn — nên đối chiếu bản nhạc khi trích dẫn.
`,
  },
  {
    slug: 'phan-tich-traumerei',
    title: 'Phân tích: Träumerei',
    category: 'analysis',
    aliases: ['Träumerei', 'Traumerei', 'Mơ mộng', 'Kinderszenen', 'Cảnh tuổi thơ', 'Op. 15 số 7'],
    summary: 'Bài số 7 trong "Cảnh tuổi thơ" Op. 15 của Schumann (1838): giai điệu Fa trưởng ngắn gọn, hình thức ba đoạn, được biết đến như một trong những tiểu phẩm piano nổi tiếng nhất.',
    wiki: 'Kinderszenen',
    refs: [
      ['teoria.com — Ternary form: Schumann, Träumerei', 'https://teoria.com/en/tutorials/forms/ternary/03-schumann.php'],
      ['PTNA Piano Encyclopedia — Kinderszenen Op. 15', 'https://enc.piano.or.jp/en/musics/65'],
      ['Despois (2025), Intégral — The Dream Cadence: a Romantic gesture of the ascending ninth', 'https://theory.esm.rochester.edu/integral/38-2025/despois/'],
    ],
    body: `
## Tổng quan
**Kinderszenen** ("Cảnh tuổi thơ") Op. 15 gồm **13 tiểu phẩm**, [[Schumann]] viết năm **1838**, Breitkopf & Härtel xuất bản năm **1839**. **Träumerei** ("Mơ mộng") là bài **số 7**, ở giọng **Fa trưởng**. Schumann ban đầu gọi tập này là những bài dễ, và về sau nói rằng các tên bài **chỉ là "gợi ý tinh tế cho cách thể hiện"**, không phải một câu chuyện có chương trình.

## Hình thức
Theo teoria.com, Träumerei là ví dụ của **[[hinh-thuc-am-nhac|hình thức ba đoạn]]**: đoạn A gồm **hai câu nhạc**; khi A trở lại thì **ngắn hơn và có biến đổi nhỏ** (A′). Xem [[cau-nhac]].

::keyboard F4 A4 C5 | Hợp âm chủ Fa trưởng (hoá biểu 1 dấu giáng — B♭)

## Gợi ý khi dạy
- Giai điệu nằm ở bè trên nhưng các bè giữa cũng có đường nét riêng — luyện [[lam-noi-giai-dieu|làm nổi giai điệu]] và nghe từng bè ([[dan-giong]], [[doi-am]]).
- Nhịp độ chậm, uốn câu theo hình vòm và chậm nhẹ ở cuối câu ([[dien-dat-cau-nhac]]).
- Pedal đổi theo hợp âm, giữ cho các bè không bị nhoè ([[ban-dap]]).

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Nhiều bè có đường nét riêng, không chỉ giai điệu và đệm |
| **Hoà âm** | Fa trưởng; kết cuối dùng hợp âm át 9 với nốt 9 đi lên ("Dream Cadence") |
| **Giai điệu** | Ngắn gọn, đặt ở bè trên |
| **Nhịp điệu** | Chậm, co giãn theo câu |
| **Phát triển** | Ba đoạn A – B – A′, 24 ô; A′ ngắn hơn và biến đổi nhẹ |

Liên hệ phương pháp: "Dream Cadence" là một trường hợp **làm trái kỳ vọng** giải quyết đi xuống — xem [[ky-vong-am-nhac]]; khi biểu diễn, chỗ chậm lại trước kết chính là nơi người chơi "dàn dựng" kỳ vọng ấy ([[phan-tich-va-bieu-dien]]).

## "Kết giấc mơ"
Bài dài **24 ô nhịp**. Kết cuối cùng ở **ô 24** đặc biệt đến mức nhà lý thuyết Julien Despois (2025) đặt tên cho cả một kiểu kết theo bài này — **"Dream Cadence"**: một [[hop-am-mo-rong|hợp âm át 9]] trong đó nốt 9 **đi lên** từng bậc (bậc 6 – 7 – 1) để giải quyết, thay vì đi xuống như thường lệ; nốt 9 thường được nhấn biểu cảm hoặc chậm lại (rallentando) trước [[cau-ket|kết trọn]]. Đây là chỗ đáng dừng lại khi dạy.

Cùng thể loại tiểu phẩm cho người học: Album cho tuổi trẻ Op. 68 (xem [[lo-trinh-tac-pham]]). Ranh giới chính xác (theo số ô) của các phần A – B – A′ vẫn cần đối chiếu trên bản nhạc.
`,
  },
  {
    slug: 'phan-tich-nocturne-op9-so2',
    title: 'Phân tích: Nocturne Op. 9 số 2',
    category: 'analysis',
    aliases: ['Nocturne Op. 9 No. 2', 'Nocturne Mi giáng trưởng', 'Op. 9 số 2', 'Chopin Nocturne'],
    summary: 'Nocturne Mi♭ trưởng của Chopin (1830–1832): nhịp 12/8, hình thức hai đoạn có tái hiện — mỗi lần giai điệu trở lại được trang trí hoa mỹ phong phú hơn.',
    wiki: 'Nocturnes,_Op._9_(Chopin)',
    refs: [
      ['Wikipedia — Nocturnes, Op. 9 (Chopin)', 'https://en.wikipedia.org/wiki/Nocturnes,_Op._9_(Chopin)'],
      ['PTNA Piano Encyclopedia — Chopin Nocturne Op. 9-2', 'https://enc.piano.or.jp/en/musics/21883'],
      ['Schachter & Siegel — Structural momentum and closure in Chopin\'s Nocturne Op. 9 No. 2 (Schenker Studies 2)', 'https://www.cambridge.org/core/books/schenker-studies-2/structural-momentum-and-closure-in-chopins-nocturne-op-9-no-2/62A040B19DE1E60948923A19C67FB7D8'],
    ],
    body: `
## Tổng quan
[[Chopin]] viết bộ ba Nocturne Op. 9 khoảng **1830–1832**, khi mới khoảng 20 tuổi, đề tặng **Marie Pleyel** — một nghệ sĩ piano trẻ tài năng. Thể loại nocturne học từ [[John Field]] (xem [[the-loai]]).

## Nhịp 12/8
12 phách nhỏ chia thành **bốn nhóm 3** ([[so-chi-nhip|nhịp kép]], giống cảm giác [[dieu-dem-pho-bien|slow rock 12/8]]). Tay trái đệm kiểu **nốt trầm – hợp âm – hợp âm** trong mỗi nhóm ba, gợi nhịp valse — xem [[dem-hat-piano]] và [[buoc-nhay-xa]].

::keyboard Eb4 G4 Bb4 | Hợp âm chủ Mi♭ trưởng (E♭ – G – B♭); hoá biểu 3 dấu giáng

## Hình thức
Dài **34 ô nhịp**, thường được phân tích là **hai đoạn có tái hiện**: A – A – B – A – B – A, cộng **coda** (một nghiên cứu năm 2025 chia chi tiết hơn: A – B – A′ – coda – coda′ – cadenza).
- Mỗi lần A và B trở lại, giai điệu được **trang trí phong phú hơn**: láy rền kéo dài, chuỗi nốt nhỏ — xem [[ky-hieu-hoa-my]].
- Đoạn B có hoà âm "lang thang", bè trầm đi xuống nửa cung rồi về IV – I — mang dấu ấn ngẫu hứng của Chopin.
- Gần cuối, chỉ dẫn **senza tempo** (không theo nhịp) cho phép một đoạn rất tự do trước khi kết.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Giai điệu "hát" trên đệm nốt trầm – hợp âm – hợp âm |
| **Hoà âm** | Mi♭ trưởng; đoạn B "lang thang", bè trầm đi xuống nửa cung rồi về IV – I |
| **Giai điệu** | Mỗi lần trở lại được trang trí phong phú hơn |
| **Nhịp điệu** | 12/8 (bốn nhóm ba); đoạn senza tempo gần cuối |
| **Phát triển** | Hai đoạn có tái hiện A – A – B – A – B – A + coda; sự phát triển nằm ở **trang trí** hơn là ở chất liệu mới |

Liên hệ phương pháp: vì sự khác biệt chủ yếu nằm ở hoa mỹ và rubato, bài rất hợp để [[so-sanh-ban-thu|so sánh nhiều bản thu]]; phân tích Schenker của Schachter và Siegel là ví dụ cho [[phan-tich-schenker|phân tích nhiều tầng]].

## Gợi ý khi dạy
- Giai điệu tay phải phải **hát**: dùng trọng lượng cánh tay, tay trái thật nhẹ ([[lam-noi-giai-dieu]]).
- Chuỗi nốt hoa mỹ: phân nhóm theo phách tay trái trước, rồi mới thả tự do theo [[rubato]] ([[dien-dat-cau-nhac]]).
- [[ban-dap|Pedal]] đổi theo từng nốt trầm của tay trái.

Phân tích Schenker về bài này (Schachter & Siegel) chỉ ra nhiều điểm "khó hiểu" trong cách phân bố trọng tâm cấu trúc — xem [[phan-tich-schenker]].
`,
  },
  {
    slug: 'phan-tich-clair-de-lune',
    title: 'Phân tích: Clair de lune',
    category: 'analysis',
    aliases: ['Clair de lune', 'Ánh trăng Debussy', 'Suite bergamasque', 'Suite bergamasque Debussy'],
    summary: 'Chương 3 của Suite bergamasque (Debussy): giọng Rê♭ trưởng, Debussy ghi năm sáng tác 1890 nhưng chỉ xuất bản năm 1905; tên gọi gắn với thơ Verlaine.',
    wiki: 'Suite_bergamasque',
    refs: [
      ['College Music Symposium — Review of Bhogal, Claude Debussy\'s Clair de lune', 'https://symposium.music.org/volume-59-no-1/book-reviews-1752877061/claude-debussy-s-clair-de-lune-by-gurminder-kaur-bhogal'],
      ['University of Kansas — dissertation on Suite bergamasque', 'https://kuscholarworks.ku.edu/entities/publication/b2f715bb-3983-442a-9052-9360e5691c33'],
      ['Piano Composer Teacher London — Clair de lune: complete analysis', 'https://www.piano-composer-teacher-london.co.uk/clair-de-lune-by-debussy-complete-analysis-2/'],
      ['Ethan Hein — Clair de lune', 'https://ethanhein.com/wp/2020/clair-de-lune/'],
    ],
    body: `
## Tổng quan
- Chương thứ 3 trong 4 chương của **Suite bergamasque** của [[Debussy]], giọng **Rê♭ trưởng** (5 dấu giáng — xem [[hoa-bieu]]).
- Bộ tổ khúc được bắt đầu khoảng **1890**, hoàn chỉnh và xuất bản năm **1905**. Bản thảo gốc của Clair de lune đã mất; năm 1890 dựa trên lời của chính Debussy khi xuất bản.
- Các chương khác — Prélude, Menuet, Passepied — là phiên bản hiện đại của các chương [[the-loai|tổ khúc Baroque]]; **Clair de lune là chương duy nhất có tên mô tả**.

## Verlaine
Tên bài gắn với bài thơ "Clair de lune" của **Paul Verlaine** — Debussy cũng phổ nhạc bài thơ này trong tập ca khúc *Fêtes galantes* đầu tiên (1890). Chương 3 của tổ khúc ban đầu dự định mang tên "Promenade sentimentale" — cũng là tên một bài thơ của Verlaine.

## Ngôn ngữ âm nhạc
Bài viết ở nhịp **9/8**, nhóm **3 + 3 + 3** ([[so-chi-nhip|nhịp kép]]) — cảm giác như một điệu valse rất chậm, mỗi phách lại chia ba; các chỗ [[dao-phach|đảo phách]] đến từ những nhóm nhịp kiểu [[hemiola]].

Hình thức **ba đoạn A – B – A′** dài **72 ô nhịp** (theo một phân tích dùng thuật ngữ của Caplin: khoảng 26 – 24 – 22 ô): A là một [[cau-nhac|đoạn nhạc]] kép mở rộng, B gồm ba đoạn nhạc đều đặn, A′ là sự trở lại có biến đổi kèm coda. Cuối A nối liền vào đầu B quanh **ô 27**, nên ranh giới chỉ mang tính gần đúng.
 Các đặc điểm của [[an-tuong|hoà âm ấn tượng]] — hợp âm trượt song song, [[hop-am-mo-rong|hợp âm mở rộng]], màu sắc hơn chức năng — thể hiện rõ, cùng các đoạn [[luyen-hop-am-rai|hợp âm rải]] trải rộng ở phần giữa.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Rất nhỏ, âm vực rộng; hợp âm rải trải rộng ở phần giữa |
| **Hoà âm** | Rê♭ trưởng; hợp âm trượt song song, hợp âm mở rộng — màu sắc hơn chức năng |
| **Giai điệu** | Gắn với hình ảnh thơ Verlaine |
| **Nhịp điệu** | 9/8 (3 + 3 + 3), nhóm kiểu hemiola tạo cảm giác lơ lửng |
| **Phát triển** | Ba đoạn A – B – A′ (khoảng 26 – 24 – 22 ô), ranh giới A – B nối liền |

Liên hệ phương pháp: các nhóm nhịp lệch phách là chỗ tốt để bàn về [[sieu-nhip]] và cấu trúc nhóm; hình thức đã được phân tích bằng thuật ngữ của [[chuc-nang-hinh-thuc|Caplin]].

## Gợi ý khi dạy
- Đếm nhịp 9/8 cẩn thận, nhất là các chỗ nhóm 2 nốt ([[lien-ba|liên hai]]) chồng lên phách chia ba (xem [[da-nhip]]).
- [[ban-dap|Pedal]] đổi theo hoà âm để giữ tiếng trong trẻo; có thể kết hợp pedal una corda ở các đoạn rất nhỏ.
- Chơi rất nhỏ (pp) mà vẫn rõ — luyện [[lam-noi-giai-dieu]] ở mức cường độ thấp.
`,
  },
]
