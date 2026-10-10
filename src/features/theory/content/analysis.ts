import type { Article } from '../wiki'

/** Phân tích các tác phẩm hay được dạy. Nguồn ghi trong `refs`. */
export const analysis: Article[] = [
  {
    slug: 'phuong-phap-phan-tich-tac-pham',
    title: 'Phân tích tác phẩm: phương pháp và lộ trình',
    category: 'analysis',
    also: ['form'],
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
Định nghĩa thường được trích dẫn của **Ian Bent** (từ điển *New Grove*, 1980): phân tích là việc **tách một [[lo-trinh-hinh-thuc|cấu trúc âm nhạc]] thành các thành phần tương đối đơn giản hơn**, rồi **tìm hiểu chức năng** của các thành phần ấy trong cấu trúc. Định nghĩa này nhấn mạnh **cấu trúc**; các xu hướng sau này bổ sung câu hỏi về **ý nghĩa**, **bối cảnh lịch sử** và **biểu diễn** (xem [[lich-su-phan-tich-am-nhac]]).

Với người chơi và người dạy đàn, phân tích trả lời ba câu hỏi: **cái gì** đang xảy ra trong bản nhạc, **vì sao** nó tác động đến người nghe, và **điều đó gợi ý gì** cho cách chơi (xem [[phan-tich-va-bieu-dien]]).

## Phân tích ở ba tầng
Theo cách chia của Jan LaRue (xem [[phan-tich-phong-cach]]), mỗi yếu tố được xét ở ba tầng:
| Tầng | Câu hỏi | Ví dụ với hoà âm |
|---|---|---|
| **Lớn** | Cả tác phẩm, cả chương | Kế hoạch các giọng của cả bài |
| **Vừa** | Một đoạn, một phần lớn | Chuyển giọng trong một phần |
| **Nhỏ** | Một câu, vài [[so-chi-nhip|ô nhịp]] | [[vong-hop-am|Tiến trình hợp âm]] trong một câu |
Nên đi **từ lớn đến nhỏ**: biết bản đồ trước rồi mới xem chi tiết — nhưng chi tiết có thể buộc ta sửa lại bản đồ.

## Quy trình phân tích từng bước
1. **Bối cảnh và văn bản**: tác giả, năm, thể loại, mục đích; chọn ấn bản đáng tin (xem [[an-ban-urtext]], [[the-loai]], [[cac-thoi-ky]]).
2. **Nghe toàn bài** vài lần, ghi lại ấn tượng — những chỗ gây bất ngờ thường là chỗ đáng phân tích (xem [[nghe-nhac-chu-dong]], [[ky-vong-am-nhac]]).
3. **Hình thức lớn**: tìm các [[cau-ket|kết]], các chỗ [[chuyen-giong|đổi giọng]], chỗ chủ đề quay lại → vẽ sơ đồ phần (A, B, A′…) có số ô nhịp (xem [[hinh-thuc-am-nhac]]).
4. **Câu nhạc và chức năng**: chia câu, nhận ra period hay sentence, mỗi phần đóng vai trò mở đầu, giữa hay kết thúc (xem [[cau-nhac]], [[chuc-nang-hinh-thuc]]).
5. **Hoà âm**: ghi số La Mã, xác định giọng và các [[hop-am-ba|hợp âm]] đặc biệt (xem [[phan-tich-hoa-am]]).
6. **Giai điệu và motif**: đường nét, đỉnh, motif và cách nó biến đổi (xem [[giai-dieu]], [[motif]]).
7. **[[tiet-tau|Nhịp điệu]]**: nhịp, [[dao-phach|đảo phách]], nhóm ô nhịp ở tầng cao hơn (xem [[sieu-nhip]]).
8. **Kết cấu và âm thanh**: số bè, vai trò các bè, [[cao-do|âm vực]], [[cuong-do|cường độ]] (xem [[ket-cau]]).
9. **Ý nghĩa biểu đạt**: các "chủ đề" phong cách mà tác phẩm gợi tới (xem [[ly-thuyet-chu-de]]).
10. **Tổng hợp**: các yếu tố phối hợp với nhau ra sao để tạo **đường đi** của tác phẩm; rút ra hệ quả cho biểu diễn.

## Các công cụ lý thuyết cần học trước
| Công cụ | Bài |
|---|---|
| Hoà âm [[dieu-tinh|điệu tính]] | [[giao-trinh-hoa-am]] (đặc biệt Chương 4–7) |
| Hình thức | [[hinh-thuc-am-nhac]], [[cau-nhac]], [[hinh-thuc-sonata]], [[rondo]], [[bien-tau]], [[fugue]] |
| Lý thuyết hình thức hiện đại | [[chuc-nang-hinh-thuc]], [[luoc-do-galant]] |
| Phân tích nhiều tầng | [[phan-tich-schenker]] |
| Nhịp điệu tầng cao | [[sieu-nhip]] |
| Ý nghĩa và phong cách | [[ly-thuyet-chu-de]], [[phan-tich-phong-cach]] |
| Nhạc [[thoi-ky-the-ky-20|thế kỷ 20]] | [[neo-riemann]], [[tap-hop-cao-do]], [[ky-thuat-12-am]] |
| Bản thu | [[so-sanh-ban-thu]] |

## Thứ tự đọc các bài phân tích mẫu
Xếp từ dễ đến khó — cả về bản nhạc lẫn khái niệm phân tích:
| # | Bài | Học được gì |
|---|---|---|
| 1 | [[phan-tich-minuet-sol-truong]] | Câu nhạc, bốn kết, hai đoạn |
| 2 | [[phan-tich-canon-pachelbel]] | Bè trầm lặp, biến tấu |
| 3 | [[phan-tich-wilder-reiter]] | Ba đoạn, giai điệu ở tay trái |
| 4 | [[phan-tich-prelude-la-truong-op28-so7]] | Đoạn nhạc 8 + 8, [[hop-am-at-phu|hợp âm át phụ]] |
| 5 | [[phan-tich-prelude-do-truong]] | Một khuôn hình rải, chỉ đọc hoà âm |
| 6 | [[phan-tich-gymnopedie-so1]] | Hai hợp âm xen kẽ, [[hoa-am-dieu-thuc|hoà âm điệu thức]] |
| 7 | [[phan-tich-sonatina-clementi-op36-1]] | Hình thức sonata thu nhỏ |
| 8 | [[phan-tich-fur-elise]] | Rondo |
| 9 | [[phan-tich-invention-so-1]] | Motif, đảo, [[doi-am|mô phỏng]] hai bè |
| 10 | [[phan-tich-traumerei]] | Câu nhạc và hoà âm [[thoi-ky-lang-man|Lãng mạn]] |
| 11 | [[phan-tich-sonata-k545]] | Hình thức sonata đầy đủ |
| 12 | [[phan-tich-prelude-mi-thu-op28-so4]] | [[dan-giong|Dẫn giọng]] nửa cung, [[bac-am-giai|chủ âm]] trì hoãn |
| 13 | [[phan-tich-rondo-alla-turca]] | Rondo và chủ đề biểu đạt "Thổ Nhĩ Kỳ" |
| 14 | [[phan-tich-prelude-do-thu-bwv847]] | [[mo-tien-hoa-am|Mô tiến]] [[vong-quang-nam|vòng quãng 5]], [[bass-ngan|bass ngân]], kết kiểu [[cadenza|cadenza]] |
| 15 | [[phan-tich-anh-trang-chuong-1]] | [[hop-am-napoli|Hợp âm Napoli]], bass ngân át, ba lớp âm thanh |
| 16 | [[phan-tich-pathetique-chuong-2]] | Rondo chậm, đổi tên [[trung-am|trùng âm]] |
| 17 | [[phan-tich-nocturne-op9-so2]] | Giai điệu trang trí, nhịp 12/8 |
| 18 | [[phan-tich-golliwogg-cakewalk]] | Đảo phách, trích dẫn và giễu nhại |
| 19 | [[phan-tich-clair-de-lune]] | [[an-tuong|Hoà âm ấn tượng]] |
| 20 | [[phan-tich-giant-steps]] | Jazz: đổi giọng theo quãng 3 trưởng, [[ii-v-i|ii – V – I]] ở nhịp độ nhanh |

## Viết một bài phân tích
Một bài phân tích tốt (gợi ý cấu trúc):
- **Luận điểm**: một câu nêu điều quan trọng nhất về tác phẩm (ví dụ "cả bài được xây từ một motif ba nốt").
- **Bằng chứng**: dẫn **số ô nhịp** cụ thể, sơ đồ hình thức, ví dụ nhạc.
- **Phân biệt** điều chắc chắn (có trong bản nhạc) với điều là **diễn giải** (cách nghe của người phân tích).
- **Kết luận**: điều đó thay đổi cách nghe và cách chơi thế nào.

Phân tích một solo jazz: [[phan-tich-solo-jazz]].
`,
  },
  {
    slug: 'lich-su-phan-tich-am-nhac',
    title: 'Lịch sử phân tích âm nhạc',
    category: 'analysis',
    also: ['philosophy'],
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
Biết lịch sử giúp hiểu rằng mỗi [[phuong-phap-phan-tich-tac-pham|phương pháp phân tích]] **sinh ra để trả lời một câu hỏi** của thời đại nó — và có giới hạn riêng.

## Thế kỷ 17: phân tích như tu từ học
**Joachim Burmeister**, ở chương cuối khảo luận *Musica poetica* (**1606**), phân tích một [[motet|motet]] của **Orlando di Lasso** để dạy người mới học sáng tác cách học từ tác phẩm mẫu. Ông dùng khái niệm của **tu từ học** (nghệ thuật hùng biện): bản nhạc được chia như một bài diễn văn, với các "hình thái" (figure) âm nhạc tương ứng các hình thái tu từ. Đây thường được coi là một trong những bài phân tích tác phẩm sớm nhất; cách hiểu nó hiện nay vẫn còn tranh luận.

## Thế kỷ 18: câu nhạc như dấu câu
- **Joseph Riepel** (*Anfangsgründe*, từ 1752) và **Heinrich Christoph Koch** (*Versuch einer Anleitung zur Composition*, 3 tập, **1782–1793**) là hai khảo luận lớn của thế kỷ 18 bàn về [[cau-nhac|câu nhạc]] và [[hinh-thuc-am-nhac|hình thức]].
- Koch mô tả cách ghép các **đoạn nhỏ, câu, đoạn** có các loại kết khác nhau thành tác phẩm lớn ([[the-loai|giao hưởng]], sonata, [[hinh-thuc-concerto|concerto]]) — giống như **dấu câu** trong một bài văn: các chỗ ngắt và kết chia nhạc thành từng đơn vị. Các học giả gọi đây là **"hình thức dấu câu"**. Koch hay lấy ví dụ từ nhạc [[Haydn]].
- Từ thập niên 1970, các học giả (Dahlhaus, Ratner, Baker, Sisman…) khôi phục Koch làm cơ sở cho phân tích **"theo đúng lịch sử"** nhạc thế kỷ 18. Cách tiếp cận theo khuôn mẫu của [[luoc-do-galant|lược đồ galant]] cũng đi theo hướng này.

## Thế kỷ 19: Formenlehre và "hình thức sonata"
- **Anton Reicha** (1826) và **[[carl-czerny|Carl Czerny]]** (1848) mô tả hình thức sonata; **Adolf Bernhard Marx**, trong bộ *Die Lehre von der musikalischen Komposition* (4 tập, 1837–1847; tập 3 năm 1845), xây dựng một **hệ thống các hình thức** đi từ hình thức bài hát đơn giản đến chương sonata, minh hoạ bằng [[sonata-the-loai|sonata piano]] của [[Beethoven]].
- Marx **có thể** là người đặt ra thuật ngữ **"hình thức sonata"**, và thuật ngữ **"Formenlehre"** (học thuyết hình thức) cũng bắt nguồn từ ông. Lối dạy hình thức như những **khuôn mẫu** này ảnh hưởng đến giáo trình hình thức suốt thế kỷ 19–20 (xem [[hinh-thuc-sonata]]).
- Song song là các bài **phân tích dạng ghi chú chương trình** cho người nghe hoà nhạc — truyền thống mà Donald Tovey (Anh) về sau tiêu biểu.

## Đầu thế kỷ 20: tìm sự thống nhất bên dưới
- **Heinrich Schenker**: phân tích nhiều tầng, coi tác phẩm là sự kéo dài của một cấu trúc nền (xem [[phan-tich-schenker]]).
- **[[arnold-schoenberg|Arnold Schoenberg]]**: Grundgestalt và [[bien-tau|biến tấu]] phát triển (xem [[motif]]).
- **Rudolph Réti** (*The Thematic Process in Music*, 1951): tìm các **"tế bào" [[cao-do|cao độ]]** ẩn chung giữa các chủ đề tương phản, cho phép cả đảo, nghịch hành và **đổi thứ tự** nốt. Phương pháp bị phê bình nhiều vì **quá lỏng** — tìm "liên hệ" ở đâu cũng được, bỏ qua vai trò hoà âm của các nốt — nhưng sách vẫn được trích dẫn rất thường xuyên.

## Nửa sau thế kỷ 20 đến nay
- Lý thuyết **tập hợp cao độ** cho nhạc [[phi-dieu-tinh|phi điệu tính]] ([[cuong-do|Forte]], 1973 — xem [[tap-hop-cao-do]]).
- **Phân tích phong cách** của Jan LaRue (1970 — xem [[phan-tich-phong-cach]]).
- **Lý thuyết chủ đề biểu đạt** của Leonard Ratner (1980 — xem [[ly-thuyet-chu-de]]).
- Lý thuyết nhịp và nhóm của Lerdahl và Jackendoff (1983 — xem [[sieu-nhip]]).
- **Chức năng hình thức** của William Caplin (1998) và **Lý thuyết Sonata** của Hepokoski – Darcy (2006) (xem [[chuc-nang-hinh-thuc]]).
- **Neo-Riemann** cho [[hoa-am-cromatic|hoà âm cromatic]] (xem [[neo-riemann]]).
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
| **S — Âm thanh** (Sound) | [[am-sac|Âm sắc]], [[cao-do|âm vực]], [[ket-cau|kết cấu]], [[cuong-do|cường độ]] |
| **H — Hoà âm** (Harmony) | [[hop-am-ba|Hợp âm]], tiến trình, giọng, [[chuyen-giong|chuyển giọng]], cả [[doi-am|đối âm]] |
| **M — [[giai-dieu|Giai điệu]]** (Melody) | Âm vực, đường nét, bước đi, [[motif]] |
| **R — [[tiet-tau|Nhịp điệu]]** (Rhythm) | Nhịp, [[nhip-do|nhịp độ]], tiết tấu, [[nhip-dieu-hoa-am|nhịp điệu hoà âm]] |
| **G — Sự phát triển** (Growth) | **Kết quả** của bốn yếu tố trên: chuyển động và hình dạng của tác phẩm |
Bốn yếu tố đầu **cộng lại** tạo nên **G**. LaRue phân biệt hai mặt của G: **chuyển động** (những gì hướng sự chú ý vào dòng chảy theo thời gian) và **hình dạng** (những mốc, khối, "kiến trúc" mà ta nhận ra — tức là [[hinh-thuc-am-nhac|hình thức]]).

## Ba tầng
Mỗi yếu tố được xét ở ba tầng **lớn – vừa – nhỏ**. Ví dụ với hoà âm: tầng nhỏ là tiến trình trong một câu; tầng vừa là kế hoạch chuyển giọng trong một phần; tầng lớn là tổ chức giọng của cả tác phẩm.

## Dùng SHMRG như một bảng kiểm
| | Lớn | Vừa | Nhỏ |
|---|---|---|---|
| **S** | Âm vực và mật độ cả bài thay đổi ra sao? | Mỗi phần có kết cấu riêng? | Cách xếp nốt, [[ban-dap|pedal]] trong một ô |
| **H** | Giọng chính và các giọng phụ | Chuyển giọng giữa các phần | Hợp âm đặc biệt, [[cau-ket|kết]] |
| **M** | Đỉnh cao của cả bài ở đâu? | Chủ đề quay lại thế nào? | Motif, [[quang|quãng]] đặc trưng |
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
    also: ['form'],
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
- **Mở đầu**: thiết lập giọng chủ ([[hop-am-ba|hợp âm]] chủ được kéo dài), ý nhạc rõ ràng; [[giai-dieu|giai điệu]] đi lên hoặc xoay quanh các nốt chính.
- **Ở giữa**: chia nhỏ ý nhạc, [[mo-tien-hoa-am|mô tiến]], hoà âm thay đổi nhanh hơn, giọng không ổn định.
- **Kết thúc**: tiến trình [[cau-ket|kết]]; giai điệu thường đi **xuống** về bậc 1 (kết chính) hoặc bậc 2, bậc 7 (kết nửa).
Một nghiên cứu về giai điệu ở chỗ kết (MTO) xác nhận các tín hiệu giai điệu này **bổ sung** cho, chứ không thay thế, tiêu chí hoà âm.

## Chặt chẽ và lỏng
Caplin còn phân biệt cách tổ chức **chặt chẽ** (các đơn vị gắn chặt, cân đối, ổn định giọng — điển hình của chủ đề chính) và **lỏng** (mở rộng, kéo dài, kém ổn định hơn — điển hình của đoạn chuyển và chủ đề phụ). Đây là công cụ tốt để giải thích **vì sao** chủ đề phụ thường dài và "lưỡng lự" hơn chủ đề chính.

## Hai trường phái hình thức sonata hiện nay
- **Caplin**: hướng tới **chức năng** của từng đơn vị, đi từ dưới lên.
- **Hepokoski và Darcy** (*Elements of Sonata Theory*, 2006): so sánh tác phẩm với các **chuẩn mực** [[the-loai|thể loại]] — điểm ngắt giữa (MC), điểm kết của phần trình bày (EEC), các lần "xoay vòng" chất liệu — xem [[hinh-thuc-sonata]].
Hai cách nhìn bổ sung cho nhau; giáo trình hiện đại thường giới thiệu cả hai.

## Với người chơi đàn
Biết một đoạn mang chức năng **ở giữa** (bất ổn) hay **kết thúc** (khép lại) gợi ý cách tạo hướng đi: căng dần ở đoạn chuyển, nhấn kết ở cuối chủ đề phụ, thả lỏng ở coda (xem [[phan-tich-va-bieu-dien]]).
`,
  },
  {
    slug: 'sieu-nhip',
    title: 'Siêu nhịp',
    category: 'analysis',
    also: ['form'],
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
| Đơn vị | **Phách** — những điểm thời gian, không có độ dài | **Nhóm** — các đoạn có độ dài ([[motif|motif]], câu, phần) |
| Đều đặn? | Có xu hướng đều | **Không cần** đều |
| Ví dụ | Ô 1 – 2 – 3 – 4 với ô 1 và 3 mạnh | Câu 5 ô, đoạn 3 câu |
Theo hai tác giả, ở tầng **trên ô nhịp**, nhịp **dần nhường chỗ cho nhóm**: ở tầng rất cao, ta nghe cấu trúc nhịp trong bối cảnh cấu trúc nhóm, vốn hiếm khi đều. Họ không nêu rõ nhịp "biến mất" ở tầng nào; các nhà lý thuyết khác (như Jonathan Kramer) không đồng ý về việc nhịp kéo dài lên tới đâu.

## Cone: phách mạnh cấu trúc và biểu diễn
**Edward T. Cone** (*[[hinh-thuc-am-nhac|Musical Form]] and Musical Performance*, 1968) cho rằng một biểu diễn đúng đắn trước hết phụ thuộc vào việc **cảm nhận và truyền đạt đời sống [[tiet-tau|nhịp điệu]]** của tác phẩm.
- Ông nói về **"phách mạnh cấu trúc"**: điểm đến của cả một câu hay một phần, thường ở chỗ kết.
- Ông phân biệt các loại điểm mạnh: **điểm mạnh mở đầu**, **điểm mạnh kết**, và các điểm ở giữa.
- **Phê bình**: Carl Schachter chỉ ra rằng chỗ kết thường rơi vào ô **nhẹ** của siêu nhịp, nên không nhất thiết mang "tính chất phách mạnh". Wallace Berry thì lo rằng nhấn "phách mạnh cuối" một cách máy móc sẽ làm cách chơi cứng nhắc.

## Siêu nhịp không đều
- **Mở rộng**: một câu 4 ô bị kéo thành 5–6 ô (lặp kết, kéo dài [[hop-am-ba|hợp âm]]).
- **Chồng ô** ([[mo-rong-cau-nhac|elision]]): ô cuối của câu này **đồng thời** là ô đầu của câu sau — ô mạnh của nhóm mới "nuốt" ô nhẹ của nhóm cũ.
- **[[hemiola|Hemiola]]** ở tầng ô nhịp: hai ô 3/4 nghe như một ô 3/2 (xem [[da-nhip]]).
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
    also: ['form', 'philosophy'],
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
Người nghe thế kỷ 18 sống giữa nhiều loại âm nhạc mang **ý nghĩa xã hội**: hành khúc của quân đội, tiếng tù và đi săn, vũ khúc trong cung đình, nhạc nhà thờ… Khi một bản [[hinh-thuc-sonata|sonata]] **gợi** đến những âm thanh đó, người nghe thời ấy hiểu ngay ý nghĩa. Lý thuyết **chủ đề biểu đạt** (topic theory) giúp người nghe ngày nay đọc lại các tín hiệu đó.

## Ratner và khái niệm "chủ đề"
**Leonard Ratner**, trong *Classic Music: Expression, Form, and Style* (1980), định nghĩa chủ đề là **"đề tài cho diễn ngôn âm nhạc"** và chia thành hai nhóm:
- **Loại hình** (types): những [[the-loai|thể loại]] trọn vẹn như **vũ khúc** ([[minuet-va-trio|minuet]], [[to-khuc-baroque|gavotte]]…) và **hành khúc**.
- **Phong cách** (styles): những "màu" được mượn vào tác phẩm khác — **quân hành**, **săn bắn**, **Thổ Nhĩ Kỳ**…
Ranh giới không cứng: minuet là một thể loại hoàn chỉnh, nhưng cũng có thể là một "phong cách" xuất hiện trong bản nhạc khác.

## Một số chủ đề thường gặp
| Chủ đề | Dấu hiệu âm nhạc thường được mô tả | Gợi liên tưởng |
|---|---|---|
| **Quân hành, hành khúc** | Nhịp chẵn, [[tiet-tau|tiết tấu]] [[cham-doi-dau-noi|chấm dôi]], hình kèn hiệu | Uy nghi, nghi lễ |
| **Săn bắn** | Nhịp 6/8, hình **tù và** (horn call) | Ngoài trời, quý tộc |
| **Đồng quê** (pastoral) | [[bass-ngan|Bass ngân]] như kèn túi, nhịp chậm đung đưa | Thanh bình |
| **Thổ Nhĩ Kỳ** (alla turca) | Bè trầm dồn dập mô phỏng trống, [[ky-hieu-hoa-my|nốt hoa mỹ]] | Ngoại lai, náo nhiệt — xem [[phan-tich-rondo-alla-turca]] |
| **Phong cách bác học** (learned) | [[doi-am]] mô phỏng, [[fugue|fugato]] | Nhà thờ, truyền thống |
| **Ombra** | Chậm, [[am-giai-cromatic|cromatic]], hoà âm tối | Siêu nhiên, chết chóc |
| **Tempesta** | Nhanh, kịch tính, [[ky-hieu-nang-cao|tremolo]] | Bão tố, giận dữ |
Lưu ý: nhãn **"Sturm und Drang"** từng được dùng như một chủ đề; Clive McClelland cho rằng nó **không còn phù hợp** và đề xuất dùng **tempesta** — đối trọng **nhanh** của **ombra** (chậm).

## Sau Ratner
- **Kofi Agawu** (*Playing with Signs*, 1991) kết hợp chủ đề biểu đạt với [[phan-tich-schenker|phân tích Schenker]], cho thấy **ý nghĩa** (bề mặt) và **cấu trúc** (bên dưới) gắn với nhau trong nhạc [[joseph-haydn|Haydn]], [[wolfgang-amadeus-mozart|Mozart]], [[ludwig-van-beethoven|Beethoven]]; mở đường cho **[[y-nghia-am-nhac|ký hiệu học âm nhạc]]** (Robert Hatten, Raymond Monelle).
- *The Oxford Handbook of Topic Theory* (Danuta Mirka chủ biên, 2014): cuốn sách đầu tiên mang tên "lý thuyết chủ đề", nhấn mạnh rằng chủ đề là **dấu hiệu âm nhạc** của "thế kỷ 18 dài", có gốc trong lý thuyết và thẩm [[triet-hoc-am-nhac|mỹ học]] thời đó.

## Với người dạy và người chơi
- Hỏi học trò: [[cau-nhac|đoạn nhạc]] này **gợi** điều gì — một đoàn quân, một vũ hội, một nhà thờ? Câu trả lời gợi ý ngay về [[cach-dien-tau|cách diễn tấu]], [[nhip-do|nhịp độ]], [[am-sac|âm sắc]].
- Trong một tác phẩm Cổ điển, chủ đề có thể **đổi sau vài [[so-chi-nhip|ô nhịp]]**; nhận ra những lần chuyển đó giúp chơi có **tính cách** rõ ràng cho từng đoạn.
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
- Từ đầu [[thoi-ky-the-ky-20|thế kỷ 20]], Riemann và [[phan-tich-schenker|Schenker]] đều quan tâm sâu đến biểu diễn; sau đó, trong vài thập kỷ, lý thuyết âm nhạc xa rời các vấn đề thực hành, rồi quay lại từ cuối thập niên 1980.

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
- Viết cho **ba violin và [[bass-so|basso continuo]]**, đi kèm một [[to-khuc-baroque|gigue]].
- Là một **[[doi-am-kep|canon đồng âm]] ba bè**: ba violin chơi cùng một [[giai-dieu|giai điệu]], lần lượt vào sau nhau. Bè thứ tư là **bè trầm lặp** (basso ostinato / ground bass) suốt bài — xem [[ostinato]]. Bài cũng mang yếu tố của chaconne.

## Bè trầm và vòng hợp âm
Bè trầm 8 [[not-lap-lai|nốt lặp]] lại tạo nên vòng hợp âm nổi tiếng **D – A – Bm – F♯m – G – D – G – A** (trong Đô trưởng: C – G – Am – Em – F – C – F – G), dùng trong vô số bài hát — xem [[vong-hop-am]] và [[mo-tien-hoa-am|mô tiến quãng 3 đi xuống]].

::keyboard D4 F#4 A4 | Hợp âm chủ Rê trưởng — hoá biểu 2 dấu thăng (F♯, C♯)

## Lịch sử
| Mốc | Sự kiện |
|---|---|
| 1680–1706? | Thời điểm sáng tác **không rõ** |
| 1838–1842 | Bản chép tay cổ nhất còn lại |
| 1919 | Gustav Beckmann công bố bản tổng phổ trong một bài nghiên cứu về [[nhac-thinh-phong|nhạc thính phòng]] của Pachelbel |
| 1929 | Max Seiffert xuất bản một bản chuyển soạn |
| 1940 | Bản thu của Boston Pops (Arthur Fiedler) — có thể là bản thu đầu tiên, ít được chú ý |
| 1968 | Bản thu của dàn nhạc thính phòng **Jean-François Paillard**: chậm hơn, phong cách [[thoi-ky-lang-man|Lãng mạn]], thêm các bè tự viết — thay đổi số phận bài nhạc |

Từ thập niên 1970, [[doi-am|Canon]] được thu âm bởi rất nhiều nhóm nhạc. Xem [[Pachelbel]].

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Ba violin đồng âm và basso continuo; kết cấu dày dần khi các bè canon lần lượt vào |
| **Hoà âm** | Một vòng 8 [[hop-am-ba|hợp âm]] lặp suốt bài: I – V – vi – iii – IV – I – IV – V |
| **Giai điệu** | Ba bè chơi cùng một giai điệu, vào sau nhau — [[doi-am-kep|canon]] |
| **[[tiet-tau|Nhịp điệu]]** | Bè trầm lặp đều; các biến thể ở bè trên dày dần về tiết tấu |
| **Phát triển** | [[hinh-thuc-am-nhac|Hình thức]] biến tấu trên bè trầm lặp ([[ostinato]], [[bien-tau]]) — sự phát triển nằm ở bè trên, không ở hoà âm |

Liên hệ phương pháp: bè trầm của vòng này là dạng nhảy của lược đồ **Romanesca** — xem [[luoc-do-galant]].

## Gợi ý khi dạy
- Tay trái chơi bè trầm 8 nốt, tay phải lần lượt các biến thể — bài tập tốt về [[dem-hat-piano|đệm]] và [[the-dao-hop-am|thể đảo]].
- Dùng vòng hợp âm này để tập [[ngau-hung-piano|ngẫu hứng]] trên [[am-giai|âm giai]] Rê trưởng.
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
Bài mở đầu của tập 1 **[[toccata-prelude-fugue|Clavier bình quân]]** ([[Bach]], 1722 — xem [[luat-binh-quan]], [[fugue]]). Dài **35 [[so-chi-nhip|ô nhịp]]**, gần như toàn bộ là **[[luyen-hop-am-rai|hợp âm rải]]** theo cùng một khuôn, và kết thúc bằng một [[hop-am-ba|hợp âm]] Đô trưởng khối.

## Khuôn hợp âm rải
Mỗi ô nhịp là **một hợp âm**, rải theo cùng một mẫu (lặp lại hai lần mỗi ô). Vì kết cấu không đổi, toàn bộ sự hấp dẫn nằm ở **hoà âm** và **[[dan-giong|dẫn giọng]]**: các bè chỉ dịch chuyển từng bậc nhỏ từ hợp âm này sang hợp âm kia.

::staff treble C4+E4+G4+C5+E5 C4+D4+A4+D5+F5 B3+D4+G4+D5+F5 C4+E4+G4+C5+E5 | Bốn ô nhịp đầu: C – Dm7/C – G7/B – C (I – ii7 – V7 – I)

Bốn ô đầu đã là một vòng [[chuc-nang-hoa-am|chủ – hạ át – át – chủ]] trọn vẹn, với bè trầm C – C – B – C gần như đứng yên. Phần giữa đi xa hơn với nhiều [[hop-am-at-phu|át phụ]] và [[hop-am-bay-giam|hợp âm 7 giảm]].

## Hai bass ngân ở cuối bài
- **Ô 23** gợi ý rất mạnh hợp âm át nhưng Bach **trì hoãn** nó; hợp âm G7 chỉ đến ở **ô 24**.
- **Ô 24–31**: nốt **G** ([[bac-am-giai|át âm]]) giữ ở bè trầm suốt **8 ô nhịp** — một [[bass-ngan|bass ngân át âm]] dẫn tới cao trào.
- **Từ ô 32**: biến thể cuối cùng của vòng **[[ii-v-i|ii – V – I]]** trên **bass ngân chủ âm C**, rồi hợp âm Đô trưởng khối kết bài.

Số ô nhịp tính theo bản 35 ô (không có "ô Schwencke" — xem dưới); [[an-ban-urtext|ấn bản]] có ô chèn thêm sẽ lệch một ô.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Một khuôn hợp âm rải duy nhất suốt 35 ô; kết bằng hợp âm khối |
| **Hoà âm** | Mỗi ô một hợp âm; mở bằng I – ii7 – V7 – I; phần giữa có át phụ và hợp âm 7 giảm; cuối bài bass ngân át (ô 24–31) rồi bass ngân chủ |
| **[[giai-dieu|Giai điệu]]** | Không có giai điệu nổi bật — "giai điệu" là đường đi của các bè bên trong khuôn rải ([[dan-giong]]) |
| **[[tiet-tau|Nhịp điệu]]** | Tiết tấu không đổi; nhịp điệu hoà âm đều một hợp âm mỗi ô ([[nhip-dieu-hoa-am]]) |
| **Phát triển** | Đường căng – chùng do hoà âm tạo ra: đi xa khỏi chủ, căng nhất trên bass ngân át, rồi khép lại trên bass ngân chủ |

Liên hệ phương pháp: đây là ví dụ kinh điển cho [[phan-tich-schenker|phân tích nhiều tầng]] — khi kết cấu không đổi, chỉ còn hoà âm và dẫn giọng gánh cấu trúc; hai bass ngân cuối bài mang [[chuc-nang-hinh-thuc|chức năng]] chuẩn bị và khép lại.

## "Ô nhịp Schwencke"
Ô 22 có F♯ ở bè trầm, sang ô 23 nhảy lên A♭ — một [[quang|quãng 3 giảm]]. Một số ấn bản (trong đó có ấn bản Gounod dùng) **chèn thêm một ô** với G ở bè trầm để "làm mượt". Ô này không có trong bản chép tay năm 1725 của học trò Bach, Heinrich Gerber, và đã bị Franz Kroll (1862), August Halm (1905) đặt nghi vấn.

## Ave Maria của Gounod
[[charles-gounod|Charles Gounod]] viết một giai điệu **đặt chồng lên** [[the-loai|Prelude]] (hầu như không sửa đổi): bản cho violin năm 1853, và bản cho giọng hát với lời Latin "Ave Maria" năm 1859 — bản trở nên nổi tiếng.

## Gợi ý luyện tập
- Chơi **hợp âm khối** từng ô trước để nghe hoà âm và tìm [[ngon-bam|ngón bấm]] (xem [[the-dao-hop-am]]).
- Giữ các nốt chung giữa hai ô nhịp cùng một ngón.
- Dùng [[ban-dap|pedal]] đổi theo từng ô, hoặc chơi không pedal và giữ ngón ([[ky-thuat-cham-phim|legato ngón]]).
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

Cả hai đều chứa **F♯** — nốt chung giữ hai [[hop-am-ba|hợp âm]] gắn kết và tạo màu u buồn đặc trưng. Toàn bộ trang đầu chỉ dùng hai hợp âm này: hoà âm **không tiến triển** theo [[chuc-nang-hoa-am|chức năng]] mà như một màu sắc tĩnh — gần với [[an-tuong|hoà âm ấn tượng]] và là tiền thân của [[toi-gian|âm nhạc tối giản]].

Về sau hoà âm hướng tới Rê thứ và La thứ, với [[bass-ngan|bass ngân]] D trầm bên dưới các [[hop-am-bay|hợp âm 7]] xen kẽ.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Kết cấu thưa: nốt trầm – hợp âm ở tay trái, một [[giai-dieu|giai điệu]] đơn ở tay phải; chỉ dẫn "Lent et douloureux" |
| **Hoà âm** | Hai hợp âm 7 trưởng Gmaj7 – Dmaj7 luân phiên, chung nốt F♯; không tiến triển theo chức năng; về sau nghiêng sang Rê thứ, La thứ |
| **Giai điệu** | Đơn giản, vào ở phách 2 |
| **[[tiet-tau|Nhịp điệu]]** | Nhịp 3/4 chậm, đệm đều |
| **Phát triển** | Gần như tĩnh — sự thay đổi rất nhỏ trở nên nổi bật; tiền thân của [[toi-gian|nhạc tối giản]] |

Liên hệ phương pháp: so sánh với [[hoa-am-dieu-thuc]] và [[an-tuong]] — hoà âm như màu sắc thay vì cú pháp T – PD – D.

## Gợi ý khi dạy
- Bài tốt để luyện **[[buoc-nhay-xa|bước nhảy]] tay trái**: nốt trầm ở phách 1, hợp âm ở phách 2.
- Giai điệu bắt đầu ở phách 2 — đếm kỹ để không vào sớm.
- Pedal đổi mỗi [[so-chi-nhip|ô nhịp]], tiếng đàn mềm, đều — xem [[ban-dap]], [[cuong-do]].

Lưu ý: [[ky-hieu-hop-am|tên hợp âm]] lấy từ một phân tích; các [[an-ban-urtext|ấn bản]] có thể ghi cách xếp nốt khác.
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
| **Âm thanh** | [[giai-dieu|Giai điệu]] chia giữa hai tay, tay trái rải hợp âm; đoạn C dày và căng hơn |
| **Hoà âm** | La thứ; đoạn B sang Fa trưởng rồi Đô trưởng; đoạn C dùng chuỗi hợp âm 7 giảm trên nốt A lặp ở bè trầm |
| **Giai điệu** | Nét nhận diện: dao động nửa cung E – D♯ (nốt thêu quanh át âm) |
| **[[tiet-tau|Nhịp điệu]]** | Nhịp 3/8, bắt đầu bằng nốt lấy đà; đoạn B có chuỗi móc ba |
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
[[Mozart]] ghi tác phẩm vào danh mục năm **1788** với lời chú "**dành cho người mới học**" — vì vậy có tên "Sonata facile" (sonata dễ). Ba chương: [[nhip-do|Allegro]] (Đô trưởng) – Andante (Sol trưởng) – [[rondo|Rondo]] (Đô trưởng).

## Chương 1: hình thức sonata
Xem lý thuyết ở [[hinh-thuc-sonata]].
| Phần | Nội dung |
|---|---|
| **Trình bày** | Chủ đề 1 ở Đô trưởng ([[giai-dieu|giai điệu]] trên bass Alberti) → đoạn nối bằng [[luyen-am-giai|âm giai]] → Chủ đề 2 ở **Sol trưởng** (giọng át) |
| **Phát triển** | Ngắn, đi qua các [[am-giai-thu|giọng thứ]]; kết bằng [[cau-ket|kết trọn]] ở Fa trưởng |
| **Tái hiện** | Chủ đề 1 trở lại ở **Fa trưởng** (ô 42) — giọng **hạ át**, không phải giọng chính! Đoạn nối được mở rộng để quay về Đô; Chủ đề 2 ở **Đô trưởng** |

::staff treble C5 E5 G5 B4 C5 D5 C5 | Cao độ câu mở đầu: rải hợp âm C rồi [[not-ngoai-hop-am|nốt thêu]] quanh C

## Vì sao tái hiện ở Fa trưởng là đặc biệt?
- Charles Rosen cho rằng việc bắt đầu tái hiện ở giọng hạ át là "**hiếm** vào thời điểm đó"; về sau [[Schubert]] dùng cách này. Một phân tích khác lưu ý: không có ví dụ nào khác trong các [[sonata-the-loai|sonata piano]] của Mozart, nhưng có trong các sonata kiểu cũ hơn.
- Nếu chép nguyên phần trình bày dịch xuống Fa, đoạn nối sẽ dẫn tới **Đô** (át của Fa) chứ không phải Sol. Vì vậy Mozart **viết lại đoạn nối** với thêm [[mo-tien-hoa-am|mô tiến]] để chủ đề 2 về đúng Đô trưởng — một bài học về [[chuyen-giong]].

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Giai điệu trên bass Alberti; các đoạn [[am-giai|âm giai]] |
| **Hoà âm** | Đô trưởng → Sol trưởng (trình bày); các giọng thứ (phát triển); tái hiện bắt đầu ở Fa trưởng |
| **Giai điệu** | Câu mở đầu rải [[hop-am-ba|hợp âm]] C rồi thêu quanh C |
| **[[tiet-tau|Nhịp điệu]]** | Bass Alberti đều; các chuỗi âm giai tạo đà |
| **Phát triển** | Hình thức sonata: trình bày – phát triển – tái hiện |

Liên hệ phương pháp — đọc theo [[chuc-nang-hinh-thuc|chức năng hình thức]] của Caplin: trong phần trình bày, **chủ đề 1** (Đô trưởng) mang chức năng **mở đầu**, đoạn nối bằng âm giai mang chức năng **ở giữa**, **chủ đề 2** (Sol trưởng) mang chức năng **kết thúc**. Việc Mozart phải viết lại đoạn nối ở phần tái hiện cho thấy rõ vai trò "dẫn đường" của chức năng ở giữa.

## Gợi ý khi dạy
- Bass Alberti tay trái phải **nhẹ và đều** — xem [[dem-hat-piano]], [[lam-noi-giai-dieu]].
- Các đoạn âm giai dùng [[ngon-bam|ngón bấm]] chuẩn ([[luyen-am-giai]]) và luyện bằng [[kiem-soat-toc-do|bậc thang tốc độ]].
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
- Chương 3 (Alla turca – Allegretto) của **[[hinh-thuc-sonata|Sonata]] La trưởng K. 331** ([[Mozart]]). Cả ba chương đều ở **La trưởng hoặc La thứ** (cùng âm chủ — xem [[giong-song-song|giọng cùng tên]]).
- Thời gian, địa điểm sáng tác **không chắc chắn**; khả năng cao nhất là Vienna hoặc Salzburg khoảng **1783**, Artaria xuất bản năm **1784**.

## "Alla turca"
Chương nhạc [[doi-am|mô phỏng]] âm thanh của **ban nhạc Janissary** (quân đội Ottoman) — rất được ưa chuộng ở Vienna lúc bấy giờ. Một số [[dan-piano|đàn piano]] thời đó có **"Turkish stop"** — bộ phận tạo tiếng chuông, trống — và chương này đôi khi được biểu diễn trên những cây đàn như vậy (xem [[lich-su-piano]]).

## Hình thức
Là một **[[rondo]]**, nhưng các phân tích **chia đoạn khác nhau**. Bản chi tiết nhất ghi: **A – B – C – D – E – C – A – B – C – coda**, mỗi đoạn (trừ coda) đều nhắc lại.
| Đoạn | Nội dung | Giọng |
|---|---|---|
| **A** | 8 ô: hình móc kép đi lên rồi móc đơn đi xuống, trên đệm móc đơn ngắt tiếng | La thứ |
| **B** | Chất liệu mới đi bằng [[quang|quãng]] 3, rồi [[bien-tau|biến tấu]] A với [[cuong-do|crescendo]], trở về nhỏ | |
| **C** | Hành khúc **forte** bằng **quãng 8** trên đệm [[ky-hieu-nang-cao|hợp âm rải]] — đoạn "Thổ Nhĩ Kỳ" nổi tiếng | **La trưởng** |
| **D** | Chuỗi móc kép liên tục, nhỏ, trên đệm [[luyen-hop-am-rai|hợp âm rải]] | Fa♯ thứ |
| **E** | Chủ đề forte dạng [[am-giai|âm giai]], rồi biến thể của D | |
| **Coda** | [[hop-am-ba|Hợp âm]] và quãng 8 forte, chen một lần nhắc chủ đề nhỏ; kết bằng các quãng 8 A và C♯ xen kẽ rồi hai hợp âm La trưởng | La trưởng |

Một nghiên cứu khác gộp lại thành A – B – C – B – A – B′ – coda; một nguồn nữa mô tả các đoạn hai phần có tái hiện ghép thành cấu trúc ba đoạn lớn. Khi dạy, hãy cùng học trò đánh dấu các lần đoạn C quay lại trên bản nhạc.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Mô phỏng ban nhạc Janissary: đoạn C forte bằng quãng 8 trên hợp âm rải nhanh ở tay trái |
| **Hoà âm** | Xoay quanh La thứ và La trưởng (cùng âm chủ); một đoạn ở Fa♯ thứ (theo một nguồn) |
| **[[giai-dieu|Giai điệu]]** | Chủ đề mở đầu là chuỗi nốt thêu móc kép |
| **[[tiet-tau|Nhịp điệu]]** | Nhịp hành khúc 2/4; đệm ngắt tiếng |
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
**Kinderszenen** ("Cảnh tuổi thơ") Op. 15 gồm **13 [[the-loai|tiểu phẩm]]**, [[Schumann]] viết năm **1838**, Breitkopf & Härtel xuất bản năm **1839**. **Träumerei** ("Mơ mộng") là bài **số 7**, ở giọng **Fa trưởng**. Schumann ban đầu gọi tập này là những bài dễ, và về sau nói rằng các tên bài **chỉ là "gợi ý tinh tế cho cách thể hiện"**, không phải một câu chuyện có chương trình.

## Hình thức
Theo teoria.com, Träumerei là ví dụ của **[[hinh-thuc-am-nhac|hình thức ba đoạn]]**: đoạn A gồm **hai câu nhạc**; khi A trở lại thì **ngắn hơn và có biến đổi nhỏ** (A′). Xem [[cau-nhac]].

::keyboard F4 A4 C5 | Hợp âm chủ Fa trưởng (hoá biểu 1 dấu giáng — B♭)

## Gợi ý khi dạy
- [[giai-dieu|Giai điệu]] nằm ở bè trên nhưng các bè giữa cũng có đường nét riêng — luyện [[lam-noi-giai-dieu|làm nổi giai điệu]] và nghe từng bè ([[dan-giong]], [[doi-am]]).
- [[nhip-do|Nhịp độ]] chậm, uốn câu theo hình vòm và chậm nhẹ ở cuối câu ([[dien-dat-cau-nhac]]).
- Pedal đổi theo [[hop-am-ba|hợp âm]], giữ cho các bè không bị nhoè ([[ban-dap]]).

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Nhiều bè có đường nét riêng, không chỉ [[ket-cau|giai điệu và đệm]] |
| **Hoà âm** | Fa trưởng; kết cuối dùng hợp âm át 9 với nốt 9 đi lên ("Dream Cadence") |
| **Giai điệu** | Ngắn gọn, đặt ở bè trên |
| **[[tiet-tau|Nhịp điệu]]** | Chậm, co giãn theo câu |
| **Phát triển** | Ba đoạn A – B – A′, 24 ô; A′ ngắn hơn và biến đổi nhẹ |

Liên hệ phương pháp: "Dream Cadence" là một trường hợp **làm trái kỳ vọng** giải quyết đi xuống — xem [[ky-vong-am-nhac]]; khi biểu diễn, chỗ chậm lại trước kết chính là nơi người chơi "dàn dựng" kỳ vọng ấy ([[phan-tich-va-bieu-dien]]).

## "Kết giấc mơ"
Bài dài **24 [[so-chi-nhip|ô nhịp]]**. Kết cuối cùng ở **ô 24** đặc biệt đến mức nhà lý thuyết Julien Despois (2025) đặt tên cho cả một kiểu kết theo bài này — **"Dream Cadence"**: một [[hop-am-mo-rong|hợp âm át 9]] trong đó nốt 9 **đi lên** từng bậc (bậc 6 – 7 – 1) để giải quyết, thay vì đi xuống như thường lệ; nốt 9 thường được nhấn biểu cảm hoặc chậm lại (rallentando) trước [[cau-ket|kết trọn]]. Đây là chỗ đáng dừng lại khi dạy.

Cùng thể loại [[tieu-pham-piano|tiểu phẩm]] cho người học: [[phan-tich-wilder-reiter|Album cho tuổi trẻ]] Op. 68 (xem [[lo-trinh-tac-pham]]). Ranh giới chính xác (theo số ô) của các phần A – B – A′ vẫn cần đối chiếu trên bản nhạc.
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
[[Chopin]] viết bộ ba [[tieu-pham-piano|Nocturne]] Op. 9 khoảng **1830–1832**, khi mới khoảng 20 tuổi, đề tặng **Marie Pleyel** — một nghệ sĩ piano trẻ tài năng. Thể loại nocturne học từ [[John Field]] (xem [[the-loai]]).

## Nhịp 12/8
12 phách nhỏ chia thành **bốn nhóm 3** ([[so-chi-nhip|nhịp kép]], giống cảm giác [[dieu-dem-pho-bien|slow rock 12/8]]). Tay trái đệm kiểu **nốt trầm – [[hop-am-ba|hợp âm]] – hợp âm** trong mỗi nhóm ba, gợi nhịp valse — xem [[dem-hat-piano]] và [[buoc-nhay-xa]].

::keyboard Eb4 G4 Bb4 | Hợp âm chủ Mi♭ trưởng (E♭ – G – B♭); hoá biểu 3 dấu giáng

## Hình thức
Dài **34 ô nhịp**, thường được phân tích là **hai đoạn có tái hiện**: A – A – B – A – B – A, cộng **coda** (một nghiên cứu năm 2025 chia chi tiết hơn: A – B – A′ – coda – coda′ – [[cadenza|cadenza]]).
- Mỗi lần A và B trở lại, [[giai-dieu|giai điệu]] được **trang trí phong phú hơn**: láy rền kéo dài, chuỗi nốt nhỏ — xem [[ky-hieu-hoa-my]].
- Đoạn B có hoà âm "lang thang", bè trầm đi xuống [[cung-nua-cung|nửa cung]] rồi về IV – I — mang dấu ấn [[ngau-hung-piano|ngẫu hứng]] của Chopin.
- Gần cuối, chỉ dẫn **senza [[nhip-do|tempo]]** (không theo nhịp) cho phép một đoạn rất tự do trước khi kết.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Giai điệu "hát" trên đệm nốt trầm – hợp âm – hợp âm |
| **Hoà âm** | Mi♭ trưởng; đoạn B "lang thang", bè trầm đi xuống nửa cung rồi về IV – I |
| **Giai điệu** | Mỗi lần trở lại được trang trí phong phú hơn |
| **[[tiet-tau|Nhịp điệu]]** | 12/8 (bốn nhóm ba); đoạn senza tempo gần cuối |
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
- Chương thứ 3 trong 4 chương của **Suite bergamasque** của [[Debussy]], giọng **Rê♭ trưởng** (5 [[dau-hoa|dấu giáng]] — xem [[hoa-bieu]]).
- Bộ [[to-khuc-baroque|tổ khúc]] được bắt đầu khoảng **1890**, hoàn chỉnh và xuất bản năm **1905**. Bản thảo gốc của Clair de lune đã mất; năm 1890 dựa trên lời của chính Debussy khi xuất bản.
- Các chương khác — Prélude, [[minuet-va-trio|Menuet]], Passepied — là phiên bản hiện đại của các chương [[the-loai|tổ khúc Baroque]]; **Clair de lune là chương duy nhất có tên mô tả**.

## Verlaine
Tên bài gắn với bài thơ "Clair de lune" của **Paul Verlaine** — Debussy cũng phổ nhạc bài thơ này trong tập ca khúc *Fêtes galantes* đầu tiên (1890). Chương 3 của tổ khúc ban đầu dự định mang tên "Promenade sentimentale" — cũng là tên một bài thơ của Verlaine.

## Ngôn ngữ âm nhạc
Bài viết ở nhịp **9/8**, nhóm **3 + 3 + 3** ([[so-chi-nhip|nhịp kép]]) — cảm giác như một điệu [[tieu-pham-piano|valse]] rất chậm, mỗi phách lại chia ba; các chỗ [[dao-phach|đảo phách]] đến từ những nhóm nhịp kiểu [[hemiola]].

[[hinh-thuc-am-nhac|Hình thức]] **ba đoạn A – B – A′** dài **72 ô nhịp** (theo một phân tích dùng thuật ngữ của Caplin: khoảng 26 – 24 – 22 ô): A là một [[cau-nhac|đoạn nhạc]] kép mở rộng, B gồm ba đoạn nhạc đều đặn, A′ là sự trở lại có biến đổi kèm coda. Cuối A nối liền vào đầu B quanh **ô 27**, nên ranh giới chỉ mang tính gần đúng.
 Các đặc điểm của [[an-tuong|hoà âm ấn tượng]] — [[hoa-am-song-song|hợp âm trượt]] song song, [[hop-am-mo-rong|hợp âm mở rộng]], màu sắc hơn chức năng — thể hiện rõ, cùng các đoạn [[luyen-hop-am-rai|hợp âm rải]] trải rộng ở phần giữa.

## Tóm tắt theo khung phân tích
Bảng tổng hợp lại các phần trên theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Rất nhỏ, [[cao-do|âm vực]] rộng; hợp âm rải trải rộng ở phần giữa |
| **Hoà âm** | Rê♭ trưởng; hợp âm trượt song song, hợp âm mở rộng — màu sắc hơn chức năng |
| **[[giai-dieu|Giai điệu]]** | Gắn với hình ảnh thơ Verlaine |
| **[[tiet-tau|Nhịp điệu]]** | 9/8 (3 + 3 + 3), nhóm kiểu hemiola tạo cảm giác lơ lửng |
| **Phát triển** | Ba đoạn A – B – A′ (khoảng 26 – 24 – 22 ô), ranh giới A – B nối liền |

Liên hệ phương pháp: các nhóm nhịp lệch phách là chỗ tốt để bàn về [[sieu-nhip]] và cấu trúc nhóm; hình thức đã được phân tích bằng thuật ngữ của [[chuc-nang-hinh-thuc|Caplin]].

## Gợi ý khi dạy
- [[am-tiet-nhip|Đếm nhịp]] 9/8 cẩn thận, nhất là các chỗ nhóm 2 nốt ([[lien-ba|liên hai]]) chồng lên phách chia ba (xem [[da-nhip]]).
- [[ban-dap|Pedal]] đổi theo hoà âm để giữ tiếng trong trẻo; có thể kết hợp pedal una corda ở các đoạn rất nhỏ.
- Chơi rất nhỏ (pp) mà vẫn rõ — luyện [[lam-noi-giai-dieu]] ở mức [[cuong-do|cường độ]] thấp.
`,
  },  {
    slug: 'phan-tich-minuet-sol-truong',
    title: 'Phân tích: Minuet Sol trưởng BWV Anh. 114 (Petzold)',
    category: 'analysis',
    aliases: ['Minuet Sol trưởng', 'Minuet in G', 'BWV Anh. 114', 'Minuet Petzold', 'Petzold', 'Minuet in G major'],
    summary: 'Minuet Sol trưởng trong Sổ tay Anna Magdalena Bach (1725), nay được xác định là của Christian Petzold: 32 ô, hai đoạn có nhắc lại, Sol trưởng → Rê trưởng → Sol trưởng — bài phân tích đầu tiên lý tưởng cho người học piano.',
    wiki: 'Minuets_in_G_major_and_G_minor',
    refs: [
      ['Mutopia Project — BWV Anh. 114 (theo Bach-Gesellschaft), dùng để kiểm số ô', 'https://www.mutopiaproject.org'],
      ['Milne Open Textbooks — Fundamentals, Function, and Form, ch. 36: Binary Form', 'https://milnepublishing.geneseo.edu/fundamentals-function-form/chapter/36-binary-form/'],
      ['Wikipedia — Minuets in G major and G minor', 'https://en.wikipedia.org/wiki/Minuets_in_G_major_and_G_minor'],
    ],
    body: `
## Tổng quan
Minuet **Sol trưởng** BWV Anh. 114 và Minuet Sol thứ BWV Anh. 115 nằm trong *Sổ tay cho [[lo-trinh-tac-pham|Anna Magdalena]] Bach* (1725) nên lâu nay được gán cho [[johann-sebastian-bach|Bach]]. Thực ra cả hai đến từ một [[the-loai|tổ khúc]] harpsichord của **Christian Petzold** (1677–1733), nhạc sĩ organ ở Dresden (các nguồn ghi thời điểm xác định lại tác giả là những năm 1970). Bài ở nhịp **3/4**, dài **32 ô**, hai nửa đều có [[dau-nhac-lai|dấu nhắc lại]]. Bối cảnh vũ điệu: [[minuet-va-trio]].

## Hình thức hai đoạn
::form A_(Sol):16 B_(Sol_→_Rê_→_Sol):16 | Hai đoạn ‖: A :‖: B :‖ (số dưới mỗi khối là số ô)
| Ô | Nội dung | Kết |
|---|---|---|
| 1–8 | Câu nhạc dựng từ một motif lặp và [[dich-giong|dịch giọng]] | [[cau-ket|Kết nửa]] trên V (ô 8) |
| 9–16 | Câu đáp, mở đầu giống câu 1 | Kết hoàn toàn ở Sol (ô 16) — ô 1–16 là một **[[cau-nhac|đoạn song song]]** |
| 17–24 | Chuyển sang **Rê trưởng** (giọng át): C♯ xuất hiện từ ô 20 | Kết hoàn toàn ở Rê (ô 24) |
| — | Cuối ô 24, tay trái có **C♮**: Rê trưởng thành V7 của Sol, dẫn về giọng chính | |
| 25–28 | Về Sol; ô 25 gợi lại đường nét của ô 1 nhưng không nhắc lại nguyên văn | Dừng nhẹ trên V (ô 28) |
| 29–32 | Chất liệu kết mới | Kết hoàn toàn ở Sol (ô 32) |
Đây là **hai đoạn đơn**, không phải [[hinh-thuc-am-nhac|hai đoạn có tái hiện]]: ô 25 chỉ "vọng" lại khởi đầu (nốt D rồi G), còn nhịp điệu và nốt khác hẳn ô 1.

::staff treble D5 G4 A4 B4 C5 | Ô 1 (tay phải): D5 nốt đen rồi bốn móc đơn G – A – B – C
::grand C#5/A3=V D5/D3=I | Kết ở Rê trưởng (ô 23–24, rút gọn): giai điệu C♯ → D trên bè trầm A → D — V – I của giọng át
::staff treble D5 G4 F#4 G4 / E5 G4 F#4 G4 | Ô 25–26: gợi lại đường nét ô 1 (D rồi G, rồi E cao) nhưng không phải tái hiện nguyên văn

## Gợi ý khi dạy
- **Đánh dấu bốn kết** (ô 8, 16, 24, 32) trên bản nhạc trước khi tập: học trò thấy bài gồm bốn câu 8 ô.
- Nghe sự khác biệt giữa **kết nửa** (ô 8) và **kết hoàn toàn** (ô 16) — bài học đầu tiên về [[cau-nhac|câu hỏi – câu đáp]].
- Tìm nốt **C♯** (ô 20) và **C♮** (cuối ô 24): hai nốt cho biết giọng đổi rồi đổi lại — [[chuyen-giong]] ở dạng đơn giản nhất.
- Đây là nhạc khiêu vũ 3/4: phách 1 nhẹ, nhóm hai ô (xem [[minuet-va-trio]], [[sieu-nhip]]).

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Hai bè: giai điệu và bè trầm |
| **Hoà âm** | Sol → (ô 17–24) Rê → Sol |
| **Giai điệu** | Motif lặp và dịch giọng; câu 8 ô |
| **[[tiet-tau|Nhịp điệu]]** | 3/4, [[truong-do|nốt đen]] và móc đơn |
| **Phát triển** | Hai đoạn 16 + 16, bốn câu 8 ô |
`,
  },
  {
    slug: 'phan-tich-giant-steps',
    title: 'Phân tích: Giant Steps (John Coltrane)',
    category: 'analysis',
    also: ['jazz'],
    aliases: ['Giant Steps', 'Giant Steps (composition)', 'phân tích Giant Steps', 'John Coltrane Giant Steps'],
    summary: '"Giant Steps" (thu 5/5/1959): 16 ô với 26 hợp âm, ba giọng Si – Sol – Mi giáng cách nhau quãng 3 trưởng, nhịp độ khoảng 290 phách/phút. Nửa đầu đi xuống theo quãng 3 trưởng qua các hợp âm át; nửa sau dẫn vào từng giọng bằng ii – V – I. Bài phân tích bảng hợp âm, nguồn gốc ý tưởng, câu chuyện phòng thu và cách luyện trên piano.',
    wiki: 'Giant_Steps_(composition)',
    refs: [
      ['The Jazz Piano Site — Coltrane Changes Explained', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/coltrane-changes/'],
      ['The Jazz Piano Site — How to Practice Playing Jazz', 'https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-chord-progressions/how-to-practice-playing-jazz/'],
      ['Wikipedia — Giant Steps (album)', 'https://en.wikipedia.org/wiki/Giant_Steps'],
      ['Wikipedia — Coltrane changes', 'https://en.wikipedia.org/wiki/Coltrane_changes'],
      ['Library of Congress — National Recording Registry essay: Giant Steps', 'https://www.loc.gov/static/programs/national-recording-preservation-board/documents/GiantSteps.pdf'],
      ['All About Jazz — Cedar Walton on Giant Steps', 'https://news.allaboutjazz.com/cedar-walton-on-giant-steps.php'],
      ['Wikipedia — Giant Steps (Tommy Flanagan album)', 'https://en.wikipedia.org/wiki/Giant_Steps_(Tommy_Flanagan_album)'],
      ['Wikipedia — Countdown (John Coltrane song)', 'https://en.wikipedia.org/wiki/Countdown_(John_Coltrane_song)'],
      ['Wikipedia — 26-2', 'https://en.wikipedia.org/wiki/26-2'],
    ],
    body: `
Bài này áp lý thuyết [[vong-coltrane]] vào chính tác phẩm đã làm nó nổi tiếng. The Jazz Piano Site (TJPS) không có bài phân tích riêng "Giant Steps", chỉ có bài "Coltrane Changes"; các chi tiết khác lấy từ Wikipedia, Thư viện Quốc hội Mỹ và các nguồn ghi ở cuối trang. Giai điệu còn bản quyền nên ở đây chỉ phân tích **hoà âm**; hãy nghe bản thu gốc khi đọc.

## Bối cảnh
| Mục | Chi tiết |
|---|---|
| Thu âm | Bản chính (master) thu ngày **5/5/1959** tại Atlantic Studios, New York (album thu 4–5/5/1959) |
| Nhóm | John Coltrane (saxophone tenor), Tommy Flanagan (piano), Paul Chambers (bass), Art Taylor (trống) |
| Phát hành | Album *Giant Steps*, Atlantic SD 1311, đầu năm 1960 (các nguồn ghi tháng 1 hoặc tháng 2) — album đầu tiên Coltrane làm trưởng nhóm cho Atlantic |
| Nhịp độ | Khoảng **290 phách/phút** (đo trên bản thu; các nguồn ghi 290–292) |
| Ghi danh | Năm 2004 được đưa vào Sổ đăng ký bản thu quốc gia của Thư viện Quốc hội Mỹ |
Trước đó có một buổi thử với Cedar Walton chơi piano (Walton nhớ là 1/4/1959, nguồn khác ghi 26/3/1959); bản này chỉ được phát hành sau khi Coltrane mất.

## Bảng hợp âm (16 ô)
Ô có hai hợp âm thì mỗi hợp âm **hai phách**; tổng cộng **26 hợp âm trong 16 ô**.
| | Ô thứ nhất | Ô thứ hai | Ô thứ ba | Ô thứ tư |
|---|---|---|---|---|
| **Ô 1 – 4** | Bmaj7 D7 | Gmaj7 B♭7 | E♭[[hop-am-bay|maj7]] | Am7 D7 |
| **Ô 5 – 8** | Gmaj7 B♭7 | E♭maj7 F♯7 | Bmaj7 | Fm7 B♭7 |
| **Ô 9 – 12** | E♭maj7 | Am7 D7 | Gmaj7 | C♯m7 F♯7 |
| **Ô 13 – 16** | Bmaj7 | Fm7 B♭7 | E♭maj7 | C♯m7 F♯7 |
Đọc theo hàng, từ trái sang phải; cách đọc ký hiệu xem [[ky-hieu-hop-am]].
::pc-clock 11 7 3 | Ba trung tâm giọng: B (11), G (7), E♭ (3) — chia vòng 12 nốt thành ba phần bằng nhau, tức một [[hop-am-ba-tang|hợp âm ba tăng]]

## Hai nửa của bài
::form Đi_xuống_quãng_3:8 ii–V–I_vào_từng_giọng:8 | Hai nửa của "Giant Steps" (ô 8 là ô nối)
- **Ô 1 – 8**: các giọng **đi xuống quãng 3 trưởng** (B → G → E♭ …), mỗi giọng mới chỉ được dẫn vào bằng **một hợp âm át** (D7 → G, B♭7 → E♭, F♯7 → B). Ô 4 dùng một cặp ii – V (Am7 D7) để quay lại G.
- **Ô 8 – 16**: mỗi giọng được dẫn vào bằng **trọn một [[ii-v-i]]**: Fm7 B♭7 → E♭, Am7 D7 → G, C♯m7 F♯7 → B. [[nhip-dieu-hoa-am|Nhịp điệu hoà âm]] đều hơn: một ô ii – V, một ô hợp âm chủ.
- Ô 16 (C♯m7 F♯7) là ii – V về **Bmaj7** để quay lại ô 1 — một [[turnaround-jazz|turnaround]].
::staff treble B3+D#4+F#4+A#4=Bmaj7 A3+C4+D4+F#4=D7 G3+B3+D4+F#4=Gmaj7 Ab3+Bb3+D4+F4=B♭7 G3+Bb3+D4+Eb4=E♭maj7 | Ô 1 – 3: Bmaj7 – D7 – Gmaj7 – B♭7 – E♭maj7, xếp gần để thấy bè trong đi mượt dù giọng đổi liên tục (minh hoạ, xem [[xep-hop-am]])
Vì sao khó: trong 16 ô có **10 lần đổi giọng** nhưng chỉ giữa **ba giọng**; mỗi giọng chỉ đứng 2 – 4 phách ở nhịp độ rất nhanh. Người chơi không có thời gian "nghĩ âm giai" — phải **thuộc sẵn** các mẫu nốt cho từng hợp âm.

## Ý tưởng đến từ đâu?
| Giả thuyết | Mức chắc chắn |
|---|---|
| Đoạn [[hinh-thuc-ca-khuc-32|bridge]] của "Have You Met Miss Jones?" (Rodgers & Hart, 1937) đi qua các giọng cách nhau quãng 3 trưởng (B♭ – G♭ – D) | Wikipedia chỉ nói "Giant Steps" và "Countdown" **có thể** lấy chu trình từ đây — một giả thuyết |
| Sách *Thesaurus of Scales and Melodic Patterns* (1947) của Nicolas Slonimsky | Bài viết của Thư viện Quốc hội Mỹ cho rằng nửa sau được lấy "trực tiếp từ một đoạn" trong sách; Lewis Porter (nhà nghiên cứu Coltrane) nghiêng về Slonimsky hơn "Miss Jones"; Quincy Jones cũng nói vậy (phỏng vấn 2018). Không rõ chính xác trang nào |
TJPS: Coltrane **không phát minh** ra ý tưởng đổi giọng theo quãng 3 trưởng, nhưng là người **đầu tiên dùng nó một cách có hệ thống**.

## Câu chuyện của người chơi piano
- Trong bản chính, Tommy Flanagan phải [[ngau-hung-piano|ngẫu hứng]] trên [[vong-hop-am|vòng hợp âm]] này gần như **không có chuẩn bị**. Wikipedia mô tả solo của ông "đứt quãng", và về cuối ông chuyển sang chỉ chơi các hợp âm.
- Cedar Walton (buổi thu thử) sau này nói ông "lẽ ra nên làm như Flanagan đã làm".
- Năm 1982 Flanagan thu cả một album *Giant Steps: In Memory of John Coltrane* (Enja), với George Mraz (bass) và Al Foster (trống) — như một lời đáp sau 23 năm.
Bài học cho học trò: ngay cả nghệ sĩ hàng đầu cũng cần **luyện trước** một vòng hợp âm lạ. Xem [[phuong-phap-luyen-ngau-hung]].

## Coltrane solo thế nào
- Coltrane dùng nhiều **mẫu 1 – 2 – 3 – 5** (bốn nốt: gốc, 2, 3, 5 của hợp âm) cho mỗi hợp âm — một mẫu nốt thuộc sẵn, chuyển nhanh theo từng hợp âm (xem [[mau-lap-chu-ky]], [[lick-va-trich-dan]]).
::staff treble B4=1 C#5=2 D#5=3 F#5=5 / D5=1 E5=2 F#5=3 A5=5 / G4=1 A4=2 B4=3 D5=5 / Bb4=1 C5=2 D5=3 F5=5 | Mẫu 1 – 2 – 3 – 5 trên Bmaj7, D7, Gmaj7, B♭7 (minh hoạ cách luyện, không chép từ bản solo)
- Bản chép đầy đủ solo có trong *Coltrane Omnibook*. Phong cách giai đoạn này nối tiếp [[sheets-of-sound|"sheets of sound"]].

## Luyện "Giant Steps" trên piano
1. **Chậm**: tay trái chơi nốt gốc, tay phải chơi [[not-dan-huong|nốt 3 và 7]] của từng hợp âm, ở nhịp độ thật chậm với máy đếm nhịp ([[kiem-soat-toc-do]]).
2. **Nhìn theo ba giọng**: tô màu bảng hợp âm theo B, G, E♭ để thấy vòng lặp.
3. **Mẫu 1 – 2 – 3 – 5** cho từng hợp âm, rồi đảo chiều (5 – 3 – 2 – 1).
4. TJPS: muốn chơi được những bài như "Giant Steps" thì phải **thoải mái ở mọi giọng** — tập một bài chuẩn đơn giản ở cả 12 giọng (kèm [[bass-di-jazz|bass đi]]), rồi ngẫu hứng và tái hoà âm.
5. Tăng nhịp độ từng chút; chỉ tăng khi chơi sạch.

## Các bài cùng họ
Coltrane dùng cùng chu trình để [[tai-hoa-am|tái hoà âm]] các bài có sẵn: "**Countdown**" (trên "Tune Up"), "**26-2**" (trên "Confirmation" của Charlie Parker), "**Satellite**" (trên "How High the Moon") — các contrafact (xem [[rhythm-changes]], [[sang-tac-jazz]]). Lý thuyết đầy đủ: [[vong-coltrane]]; quan hệ với [[he-thong-hoa-am-co-dien|hoà âm cổ điển]]: [[trung-am-cromatic]], [[neo-riemann]].
`,
  },
  {
    slug: 'phan-tich-wilder-reiter',
    title: 'Phân tích: Wilder Reiter (Schumann, Op. 68 số 8)',
    category: 'analysis',
    aliases: ['Wilder Reiter', 'Kỵ sĩ hoang dã', 'The Wild Horseman', 'Op. 68 số 8', 'Album für die Jugend', 'Album cho tuổi trẻ'],
    summary: '"Kỵ sĩ hoang dã", bài số 8 trong Album cho tuổi trẻ Op. 68 (1848): ba đoạn La thứ – Fa trưởng – La thứ, trong đó giai điệu chuyển xuống tay trái ở đoạn giữa. Kèm các "quy tắc cho nhạc sĩ trẻ" mà Schumann in cùng tập nhạc.',
    wiki: 'Album_for_the_Young',
    refs: [
      ['Mutopia Project — Op. 68 No. 8 (theo ấn bản Peters), dùng để kiểm số ô', 'https://www.mutopiaproject.org'],
      ['PTNA Piano Encyclopedia — Wilder Reiter', 'https://enc.piano.or.jp/en/musics/21617'],
      ['Henle — Album für die Jugend Op. 68, lời tựa', 'https://www.henle.de/media/4b/28/8a/1690886075/0046-1690886075-sync.pdf'],
      ['Schumann — Musikalische Haus- und Lebensregeln (Wikisource, tiếng Đức)', 'https://de.wikisource.org/wiki/Musikalische_Haus-_und_Lebensregeln'],
      ['Schumann — Advice to Young Musicians, bản dịch Pierson 1860 (public domain, Project Gutenberg #28219)', 'https://www.gutenberg.org/ebooks/28219'],
    ],
    body: `
## Tổng quan
*Album für die Jugend* ("Album cho tuổi trẻ") Op. 68 bắt đầu từ tám bài [[robert-schumann|Schumann]] tặng con gái Marie nhân sinh nhật lần thứ 7 (1/9/1848); bản in hoàn chỉnh có **43 bài**. Theo nhật ký của [[clara-schumann|Clara]] (dẫn trong lời tựa Henle), Robert quyết định viết vì những bài trẻ em thường học "quá tệ". **Wilder Reiter** ("Kỵ sĩ hoang dã") là bài số 8: **La thứ**, nhịp **6/8**, một nốt lấy đà rồi **24 ô** (theo [[an-ban-urtext|ấn bản]] viết đầy đủ; các ấn bản khác dùng [[dau-nhac-lai|dấu nhắc lại]] nên số ô in ra có thể khác).

## Hình thức ba đoạn
::form A_(La_thứ):8 B_(Fa_trưởng):8 A_(La_thứ):8 | [[hinh-thuc-am-nhac|Ba đoạn]] A – B – A (số dưới mỗi khối là số ô)
| Ô | Phần | Nội dung |
|---|---|---|
| 1–8 | A | Giai điệu móc đơn **staccato** ở tay phải, tay trái đánh hợp âm; [[cau-ket|kết nửa]] ở ô 4, kết hoàn toàn ở ô 8 |
| 9–16 | B | **Fa trưởng** (bậc VI); **giai điệu chuyển xuống tay trái** — chính giai điệu A dịch xuống một quãng 3 trưởng; tay phải đánh hợp âm ngắt |
| 17–24 | A | Giống ô 1–8 |
- Không có đoạn [[chuyen-giong|chuyển giọng]]: một nốt lấy đà E đưa thẳng từ Fa trưởng về La thứ.
- Các dấu nhấn *sf* rơi vào ô thứ 2 và 3 của mỗi câu 4 ô (ô 2, 3, 6, 7) — "cú thúc ngựa".

::rhythm 6/8 e / e-e-e e-e-e / e-e-e q // | Mạch móc đơn đều của nhịp 6/8 — hai phách lớn mỗi ô (xem [[so-chi-nhip]])

## Schumann dặn người học gì?
Cùng tập nhạc (từ lần in thứ hai, 1851), Schumann in kèm ***Musikalische Haus- und Lebensregeln*** — "Quy tắc trong nhà và trong đời cho nhạc sĩ". Một số câu (dịch từ bản tiếng Anh năm 1860, thuộc phạm vi công cộng):
- "Hãy chơi **đúng nhịp**! Lối chơi của nhiều nghệ sĩ bậc thầy giống dáng đi của người say." — và "kéo lê hay vội vàng đều là lỗi như nhau" (xem [[kiem-soat-toc-do]]).
- "Hãy cố chơi **những bài dễ cho hay** và thanh lịch; như thế tốt hơn chơi tồi những bài khó."
- "Bạn cần **ngân nga được giai điệu** mà không cần đàn… nhớ được không chỉ giai điệu mà cả hoà âm đi kèm" (xem [[luyen-tai]], [[hoc-thuoc-bai]]).
- "Hãy luôn chơi như thể có **một bậc thầy đang nghe**."

## Gợi ý khi dạy
- Giữ **mạch 6/8 đều** (đúng lời dặn "chơi đúng nhịp").
- Đoạn B: tay trái **hát** giai điệu, tay phải chơi hợp âm **nhẹ** — bài tập [[lam-noi-giai-dieu]] ở tay trái hiếm có cho người mới.
- Phân biệt **staccato** với các cặp nốt **luyến** (ô 2–3) — xem [[cach-dien-tau]].
- Đặt các *sf* đúng chỗ, không nhấn mọi phách.

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Giai điệu + hợp âm; đổi tay ở đoạn B |
| **Hoà âm** | La thứ – Fa trưởng (VI) – La thứ, không chuyển tiếp |
| **Giai điệu** | Một giai điệu, ở đoạn B dịch xuống quãng 3 trưởng |
| **[[tiet-tau|Nhịp điệu]]** | 6/8 móc đơn staccato, *sf* ở ô 2–3 mỗi câu |
| **Phát triển** | Ba đoạn 8 + 8 + 8 |
`,
  },
  {
    slug: 'phan-tich-prelude-la-truong-op28-so7',
    title: 'Phân tích: Prelude La trưởng Op. 28 số 7 (Chopin)',
    category: 'analysis',
    aliases: ['Prelude La trưởng', 'Op. 28 số 7', 'Prelude in A major', 'Chopin prelude số 7'],
    summary: 'Prelude ngắn nhất của Chopin (16 ô): một nhịp điệu kiểu mazurka lặp tám lần, hoà âm chỉ xoay quanh V7 và I cho đến hợp âm F♯7 (V7/ii) ở ô 12 — một ví dụ hoàn hảo về đoạn nhạc 8 + 8 ô và hợp âm át phụ.',
    wiki: 'Preludes_(Chopin)',
    refs: [
      ['Humdrum (Craig Sapp) — bản mã hoá Op. 28 số 7, dùng để kiểm số ô và hợp âm', 'https://raw.githubusercontent.com/craigsapp/chopin-preludes/master/kern/prelude28-07.krn'],
      ['Cuộc thi Chopin Quốc tế (Warszawa) — Prelude in A major Op. 28 No. 7', 'https://www.chopincompetition.pl/compositions/200'],
      ['Craig Sapp (CCRMA, Stanford) — Keyscape: Chopin Op. 28 No. 7', 'https://ccrma.stanford.edu/~craig/keyscape/chopin-op28no7'],
      ['Wikipedia — Variations on a Theme of Chopin (Mompou)', 'https://en.wikipedia.org/wiki/Variations_on_a_Theme_of_Chopin_(Mompou)'],
      ['Huneker (1900), Chopin: The Man and His Music (public domain, Project Gutenberg)', 'https://www.gutenberg.org/ebooks/4939'],
    ],
    body: `
## Tổng quan
Số 7 trong 24 [[the-loai|Prelude]] Op. 28 (in 1839 — xem [[phan-tich-prelude-mi-thu-op28-so4]] về cả tập): **La trưởng**, nhịp **3/4**, **Andantino**, một nốt lấy đà rồi **16 ô** — chơi chưa đến một phút, là prelude ngắn nhất của tập. Nhịp điệu gợi điệu **[[tieu-pham-piano|mazurka]]** (vũ điệu Ba Lan).

## Một nhịp điệu, tám lần
::rhythm 3/4 q / e.-s q q / h q // | Mỗi nhóm hai ô có cùng nhịp điệu: móc đơn chấm dôi – móc kép – hai nốt đen – nốt trắng (cộng nốt lấy đà)
Cả bài là **tám lần** lặp lại cùng một khuôn nhịp điệu hai ô — một bài học rõ ràng về [[motif]] tiết tấu và [[nhip-lay-da]].

## Hoà âm và câu nhạc
::form V7:2 I:2 V7:2 I:2 V7:2 I:1 V7/ii:1 ii:1 V9:1 I:2 | Hoà âm theo ô (số dưới mỗi khối là số ô)
| Ô | Hợp âm |
|---|---|
| 1–2 | V7 |
| 3–4 | I (ô 3 có [[not-ngoai-hop-am|nốt dựa]] B♯) |
| 5–6 | V7 |
| 7–8 | I |
| 9–10 | V7 (như ô 1–2) |
| 11 | I |
| **12** | **F♯7 = V7/ii** ([[hop-am-at-phu|át phụ]] của Si thứ) — cao trào, âm vực rộng nhất, A♯ ở đỉnh |
| 13 | ii (Si thứ) |
| 14 | V9 (E7 thêm F♯) |
| 15–16 | I |
- **Hai câu 8 ô** (1–8, 9–16) bắt đầu giống nhau → **[[cau-nhac|đoạn nhạc song song]]**. Câu đầu kết ở I chứ không phải [[cau-ket|kết nửa]] điển hình.
- Câu hai đổi hướng ở ô 12 rồi kết **V9 → I** (ô 14–15).
- Bài **bắt đầu trên hợp âm át**; phần cuối đi theo [[vong-quang-nam|vòng quãng 5]]: F♯ – B – E – A.

::staff treble F#4+A#4+C#5+E5=V7/ii B4+D5+F#5=ii E4+G#4+B4+D5+F#5=V9 A4+C#5+E5=I | Bốn hợp âm cuối (rút gọn, một thế bấm): F♯7 – Bm – E9 – A

## Gợi ý khi dạy
- Bài hoàn hảo để **giới thiệu hợp âm át phụ**: cho học trò chơi ô 11–13 với F♯ thường (F♯ thứ) rồi với F♯7, nghe sự khác biệt.
- Nhịp điệu mazurka: [[cham-doi-dau-noi|nốt chấm dôi]] nhẹ, nhấn nhẹ phách 2 của ô đầu mỗi nhóm; giữ [[rubato]] trong khuôn khổ.
- Ô 12 cần **cân bằng các bè** trong một hợp âm rộng — để nốt A♯ ở đỉnh hát.
- Bài này truyền cảm hứng cho *[[bien-tau|Biến tấu]] trên một chủ đề [[frederic-chopin|Chopin]]* của Federico Mompou (bắt đầu 1938, hoàn thành 1957). (Biến tấu Op. 22 của [[sergei-rachmaninoff|Rachmaninoff]] dựa trên Prelude **số 20**, không phải số 7.)

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Hợp âm nhẹ, ô 12 mở rộng âm vực |
| **Hoà âm** | V7 – I xen kẽ; V7/ii ở ô 12; kết V9 – I |
| **Giai điệu** | Ngắn, theo khuôn nhịp điệu lặp |
| **[[tiet-tau|Nhịp điệu]]** | Một khuôn mazurka lặp tám lần |
| **Phát triển** | Đoạn song song 8 + 8; đổi hướng ở ô 12 |
`,
  },
  {
    slug: 'phan-tich-sonatina-clementi-op36-1',
    title: 'Phân tích: Sonatina Op. 36 số 1 của Clementi (chương 1)',
    category: 'analysis',
    aliases: ['Sonatina Op. 36 số 1', 'Clementi Op. 36', 'Sonatina Đô trưởng', 'Six Progressive Sonatinas', 'Clementi sonatina'],
    summary: 'Chương 1 sonatina Đô trưởng Op. 36 số 1 (in năm 1797): hình thức sonata thu nhỏ trong 38 ô — trình bày (Đô → Sol), phát triển 8 ô, tái hiện chuyển chất liệu giọng át về giọng chủ. Mô hình dễ thấy nhất của hình thức sonata cho người học.',
    wiki: 'Muzio_Clementi',
    refs: [
      ['Mutopia Project — Op. 36 No. 1 (theo G. Schirmer, Sonatina Album 1893), dùng để kiểm số ô', 'https://raw.githubusercontent.com/MutopiaProject/MutopiaProject/master/ftp/ClementiM/O36/sonatina-1/sonatina-1.ly'],
      ['Henle — Clementi: 6 Sonatinas Op. 36, lời tựa và ghi chú nguồn', 'https://www.henle.de/media/8e/32/32/1690886062/0848-1690886062-sync.pdf'],
      ['Robert Estrin — Clementi Sonatina Op. 36 No. 1', 'https://www.virtualsheetmusic.com/experts/robert/clementi-sonatina-1'],
    ],
    body: `
## Tổng quan
*Six Progressive Sonatinas* Op. 36 của [[muzio-clementi|Clementi]] được in ở London năm **1797** (Longman & Broderip); sáu bài xếp theo độ khó tăng dần. [[an-ban-urtext|Ấn bản]] Henle theo bản in đầu tiên và giữ [[ngon-bam|ngón bấm]] của chính Clementi. Chương 1 của số 1 ở **Đô trưởng**, nhịp **2/2**, dài **38 ô**, hai nửa đều có [[dau-nhac-lai|dấu nhắc lại]]. (Chỉ dẫn nhịp độ khác nhau giữa các ấn bản: G. Schirmer in *Spiritoso*; nên xem ấn bản dựa trên bản in gốc.)

## Hình thức sonata thu nhỏ
::form Trình_bày:15 Phát_triển:8 Tái_hiện:15 | Ba phần của [[hinh-thuc-sonata|hình thức sonata]] (số dưới mỗi khối là số ô)
**Trình bày (ô 1–15)**
- **Chủ đề 1 (ô 1–4)**: hợp âm Đô trưởng rải, kết nửa trên V ở ô 4 (bè trầm đi xuống G – F – E – D).
- **Ô 5–7**: chủ đề bắt đầu lại rồi **[[chuyen-giong|chuyển giọng]]** — F♯ xuất hiện ở bè trầm ô 6.
- **Vùng giọng át (ô 8–15)**: Sol trưởng, gồm âm giai đi lên và [[not-lap-lai|nốt lặp]]; [[cau-ket|kết hoàn toàn]] ở Sol trưởng ở ô 15. Không có "chủ đề 2" trữ tình tương phản — vùng giọng thứ hai được dựng từ hình âm giai và nốt lặp.

::staff treble C5 E5 C5 G4 / B4 D5 B4 G4 / C5 Eb5 C5 G4 | Motif mở đầu (ô 1); ở phát triển: trên G với bè trầm F (ô 16), rồi sang Đô thứ (ô 17)

**Phát triển (ô 16–23)** — chỉ 8 ô:
- Ô 16: motif trên G (với F ở bè trầm: V4/2); **ô 17 sang Đô thứ** — một [[hop-am-muon|màu mượn]] từ [[giong-song-song|giọng cùng tên]].
- Ô 20–21: tay phải lặp các quãng 8 G — một **[[bass-ngan|nốt ngân át]]** ở bè trên.
- Ô 23: kết nửa trên G, cùng bè trầm G – F – E – D như ô 4 — chuẩn bị tái hiện.

**Tái hiện (ô 24–38)**
- Ô 24–27 nhắc lại nguyên ô 1–4.
- Ô 28–30 được viết lại để **ở lại Đô**.
- **Ô 31–38 là ô 8–15 dịch lên một quãng 4**, về giọng Đô; kết V – I ở ô 37–38.

## Gợi ý khi dạy
- Đặt ô 8–15 cạnh ô 31–38: học trò thấy ngay ý nghĩa của "tái hiện chuyển chất liệu giọng át về giọng chủ" — điều Robert Estrin cũng nhấn mạnh khi giảng bài này.
- Phần phát triển rất ngắn (Estrin: "ngắn gọn hơn của [[ludwig-van-beethoven|Beethoven]]") — dịp tốt để giới thiệu khái niệm [[chuc-nang-hinh-thuc|chức năng hình thức]] trước khi học [[phan-tich-sonata-k545|Sonata K. 545]].
- Kỹ thuật: [[luyen-am-giai|âm giai]] và [[luyen-hop-am-rai|hợp âm rải]] trong khuôn khổ một tác phẩm thật.

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Giai điệu tay phải, tay trái đệm mỏng |
| **Hoà âm** | Đô → Sol (ô 8–15) → thoáng Đô thứ (ô 17) → Đô |
| **Giai điệu** | Hợp âm rải, âm giai, nốt lặp |
| **[[tiet-tau|Nhịp điệu]]** | 2/2, rõ ràng, nhiều móc đơn |
| **Phát triển** | Sonata thu nhỏ 15 + 8 + 15 ô |
`,
  },
  {
    slug: 'phan-tich-invention-so-1',
    title: 'Phân tích: Invention số 1 Đô trưởng BWV 772',
    category: 'analysis',
    aliases: ['Invention số 1', 'Invention 1', 'BWV 772', 'Invention in C', 'Invention Đô trưởng', 'Inventionen und Sinfonien'],
    summary: 'Invention hai bè đầu tiên của Bach (bản chép sạch 1723): cả bài được dựng từ một motif bảy nốt, nó đảo ngược và mô tiến; đi qua Sol trưởng và La thứ rồi về Đô — bài học kinh điển về đối âm hai bè.',
    wiki: 'Inventions_and_Sinfonias_(Bach)',
    refs: [
      ['Humdrum (Bach-Gesellschaft) — bản mã hoá Invention số 1, dùng để kiểm số ô', 'https://raw.githubusercontent.com/humdrum-tools/inventions/main/kern/inven01.krn'],
      ['teoria.com — Analysis of Bach Invention No. 1, BWV 772', 'https://teoria.com/en/articles/BWV772/01-03.php'],
      ['CCARH — trang tiêu đề bản chép 1723 (Bach)', 'https://esf.ccarh.org/MuseData-Ed-202003/baroque/bach/rasmuss/doc/title'],
      ["Tomita (Queen's University Belfast) — Bach's Inventions and Sinfonias", 'https://www.qub.ac.uk/tomita/essay/inventions.html'],
      ['Bärenreiter — lời tựa ấn bản Inventions (Dadelsen)', 'https://www.barenreiter.co.uk/prefaces/9790006465811_Innenansicht.pdf'],
      ['PTNA Piano Encyclopedia — Invention No. 1', 'https://enc.piano.or.jp/en/musics/22484'],
    ],
    body: `
## Tổng quan
**15 Invention hai bè** và **15 Sinfonia ba bè** được [[johann-sebastian-bach|Bach]] chép sạch năm **1723**, xếp theo các giọng đi lên (C, c, D, d, E♭, E, e, F, f, G, g, A, a, B♭, b). Bản sớm hơn của Invention số 1 nằm trong *Sổ tay cho [[wilhelm-friedemann-bach|Wilhelm Friedemann Bach]]* (bắt đầu năm 1720) dưới tên "Praeambulum". Bài ở **Đô trưởng**, nhịp **4/4**, dài **22 [[so-chi-nhip|ô nhịp]]**.

## Bach nói gì về mục đích của tập nhạc
Trang tiêu đề năm 1723 (văn bản gốc thuộc phạm vi công cộng) nói đây là một "**hướng dẫn chân thành**" giúp người yêu đàn phím, nhất là người ham học:
- học chơi **sạch sẽ hai bè**, rồi khi tiến bộ hơn thì xử lý đúng **ba bè**;
- không chỉ có được những **ý nhạc hay** (*inventiones*) mà còn **phát triển** chúng cho tốt;
- **trên hết là đạt được lối chơi hát** (*cantable Art im Spielen*) và có được "một sự nếm trước mạnh mẽ về sáng tác".
Câu cuối giải thích vì sao Invention vừa là bài tập [[choi-phuc-dieu|chơi phức điệu]], vừa là bài học [[doi-am|đối âm]] và sáng tác.

## Chất liệu: một motif bảy nốt
::staff treble C4 D4 E4 F4 D4 E4 C4 | Motif (chủ đề) ở ô 1, tay phải: bảy nốt móc kép sau một dấu lặng móc kép
- **Ô 1**: tay phải nêu motif; tay trái **mô phỏng ở quãng 8 thấp hơn** vào phách 3, trong khi tay phải chơi một hình móc đơn đối lại. **Ô 2** nhắc lại ô 1 cao hơn một [[quang|quãng 5]] (trên G). teoria.com gọi ô 1–2 là phần **trình bày**.
- **Ô 3–4**: tay phải chơi **motif đảo ngược** (các bước đi lên thành đi xuống) theo [[mo-tien-hoa-am|mô tiến]] đi xuống.
- Toàn bộ bài là các biến dạng của motif này: nguyên dạng, đảo, mô tiến, đổi tay — đúng tinh thần "phát triển ý nhạc" trong lời tựa.

## Hình thức và đường đi của giọng
::form Đô_→_Sol:6 Sol_→_La_thứ:8 La_thứ_→_Đô:8 | Ba phần thường được chia: ô 1–7, 7–15, 15–22 (số dưới mỗi khối là số ô, gần đúng)
| Ô | Sự kiện |
|---|---|
| 1–2 | Trình bày motif ở Đô trưởng, mô phỏng giữa hai tay |
| 3–6 | Motif đảo, mô tiến; F♯ xuất hiện — hướng sang Sol trưởng |
| **7** (phách 1) | [[cau-ket|Kết hoàn toàn]] ở **Sol trưởng** (giọng át) |
| 7–8 | **Hai tay đổi vai**: tay trái dẫn motif ở Sol, tay phải đáp |
| 9–10 | Motif đảo ở cả hai tay, mô tiến |
| 11–12 | Đi qua Rê thứ (C♯, B♭) rồi La thứ (F♯, G♯) |
| **15** (phách 1) | Kết hoàn toàn ở **La thứ** (giọng song song) |
| 15–18 | Motif đảo mô tiến đi xuống, các nốt ngân nối tạo [[not-ngoai-hop-am|nốt trễ]] |
| 18–21 | B♭ xuất hiện, nghiêng về hạ át (Fa); ô 19 motif trở lại ở Đô trong tay phải |
| **21–22** | Kết hoàn toàn cuối cùng ở Đô |
Lộ trình **I → V → vi → I** là khung giọng điển hình của một chương nhạc [[thoi-ky-baroque|Baroque]] [[am-giai-truong|giọng trưởng]] (xem [[chuyen-giong]], [[giong-song-song]]).

## Gợi ý khi dạy
- Lời tựa đòi hỏi lối chơi **hát**: mỗi bè là một giai điệu. Theo lời tựa ấn bản Bärenreiter (Dadelsen), phương tiện là [[cach-dien-tau|cách diễn tấu]] — luyến những nốt thuộc về nhau, nhấn các nốt giai điệu chính; vài dấu luyến trong bản chép 1723 có lẽ được thêm khi dạy, không có hệ thống.
- Tập **từng tay riêng** cho đến khi mỗi bè tự "hát" được, rồi ghép (xem [[phoi-hop-hai-tay]]).
- Cho học trò **tô màu** mọi lần motif xuất hiện (nguyên dạng / đảo) trên bản nhạc — cách nhanh nhất để thấy cấu trúc.
- Các [[ky-hieu-hoa-my|dấu hoa mỹ]] ở ô 5, 6, 13 khác nhau giữa các ấn bản; nên đối chiếu một [[an-ban-urtext|ấn bản Urtext]].

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Hai bè ngang hàng, [[ket-cau|phức điệu]] |
| **Hoà âm** | Đô → Sol (ô 7) → La thứ (ô 15) → Đô (ô 22) |
| **Giai điệu** | Một motif bảy nốt, dùng nguyên dạng và đảo |
| **[[tiet-tau|Nhịp điệu]]** | Móc kép chạy liên tục, chuyền giữa hai tay |
| **Phát triển** | Mô phỏng, đảo, mô tiến; 22 ô, ba phần |

Bước tiếp theo: các Sinfonia ba bè và [[fugue]]. Lý thuyết nền: [[doi-am-kep]].
`,
  },
  {
    slug: 'phan-tich-prelude-mi-thu-op28-so4',
    title: 'Phân tích: Prelude Mi thứ Op. 28 số 4 (Chopin)',
    category: 'analysis',
    aliases: ['Prelude Mi thứ', 'Op. 28 số 4', 'Prelude in E minor', 'Chopin prelude số 4'],
    summary: 'Prelude Mi thứ Op. 28 số 4 (in năm 1839): giai điệu gần như chỉ hai nốt B – C trên các hợp âm tay trái trượt từng nửa cung; hai nửa song song, cao trào ở ô 16–17, một khoảng lặng trước kết, và hợp âm chủ nguyên vị chỉ xuất hiện ở ô cuối.',
    wiki: 'Prelude,_Op._28,_No._4_(Chopin)',
    refs: [
      ['Humdrum (Craig Sapp) — bản mã hoá Op. 28 số 4, dùng để kiểm số ô và hợp âm', 'https://raw.githubusercontent.com/craigsapp/chopin-preludes/master/kern/prelude28-04.krn'],
      ['Wikipedia — Preludes (Chopin)', 'https://en.wikipedia.org/wiki/Preludes_(Chopin)'],
      ['University of Tennessee — Music Theory Materials: Chopin Prelude No. 4 (bản nhạc có chú giải)', 'https://musictheorymaterials.utk.edu/wp-content/uploads/2018/07/Chopin-Prelude-4-1.pdf'],
      ['Paris.fr — buổi hoà nhạc tưởng niệm tang lễ Chopin ở nhà thờ Madeleine (1849)', 'https://www.paris.fr/evenements/concert-commemoratif-des-funerailles-de-chopin-a-la-madeleine-1849-23336'],
      ['Huneker (1900), Chopin: The Man and His Music — chương "Moods in Miniature: The Preludes" (public domain, Project Gutenberg)', 'https://www.gutenberg.org/ebooks/4939'],
      ['Niecks (1888), Frederick Chopin as a Man and Musician (public domain, Project Gutenberg)', 'https://www.gutenberg.org/ebooks/4973'],
    ],
    body: `
## Tổng quan
24 [[the-loai|Prelude]] Op. 28 của [[frederic-chopin|Chopin]] in năm **1839**, phần lớn hoàn thành ở Valldemossa (Majorca) mùa đông 1838–39. Các bài đi theo [[vong-quang-nam|vòng quãng 5]], mỗi [[am-giai-truong|giọng trưởng]] theo sau là [[giong-song-song|giọng thứ song song]] (C, a, G, e…) — một "tập [[prelude-ung-tac|prelude]]" qua đủ 24 giọng như [[luat-binh-quan|Clavier bình quân]] của [[johann-sebastian-bach|Bach]]. Chopin **không đặt tên** cho từng bài; các biệt danh đều do người sau.

Số 4: **Mi thứ**, **[[nhip-do|Largo]]**, dài **25 ô** (cộng một nốt lấy đà). Bài được chơi (trên organ, cùng số 6) trong tang lễ Chopin ở nhà thờ Madeleine, Paris, ngày 30/10/1849.

## Hình thức: hai nửa song song
::form Nửa_đầu:12 Nửa_sau:13 | Hai nửa: ô 1–12 kết nửa trên V7; ô 13 bắt đầu lại như ô 1 (số dưới mỗi khối là số ô)
- **Ô 1–12**: tay phải giữ nốt **B** và thêu lên **C** (bậc 5 – 6 của Mi thứ) trên các hợp âm móc đơn tay trái. **Ô 12**: một hợp âm **B7 (V7)** đứng riêng rồi một nét chạy — [[cau-ket|kết nửa]].
- **Ô 13** lặp lại ô 1: hai nửa bắt đầu giống nhau ([[cau-nhac|đoạn song song]]).
- **Ô 16–17: cao trào** — hợp âm có A♯, bè trầm xuống quãng 8 B thấp, nốt cao nhất của bài (C6) ở ô 17. Các [[an-ban-urtext|ấn bản]] đặt chữ *stretto* (dồn) quanh ô 16, *smorzando* (lịm dần) quanh ô 19–20 — vị trí chính xác hơi khác nhau giữa các bản.
- **Ô 23**: một hợp âm duy nhất (âm thanh kiểu 7 – [[hop-am-sau-tang|6 tăng]]) rồi **[[dau-lang|dấu lặng]] có [[cach-dien-tau|dấu ngân]]** — khoảng lặng nổi tiếng.
- **Ô 24–25**: V → i. Hợp âm chủ **nguyên vị** đầu tiên của cả bài chỉ đến ở **ô 25**; ô 1 bắt đầu bằng i ở [[the-dao-hop-am|thể đảo 1]].

## Hoà âm tay trái: trượt từng nửa cung
::staff bass G3+B3+E4=ô_1 F#3+A3+E4=ô_2 F#3+A3+Eb4 F3+A3+Eb4=ô_3 F3+A3+D4 F3+G#3+D4 E3+G#3+D4=ô_4 E3+G3+D4 E3+G3+C#4 | Các hợp âm tay trái ô 1–4: mỗi lần thường chỉ một bè đi xuống nửa cung
Thay vì đi theo [[chuc-nang-hoa-am|chức năng]] rõ ràng, các hợp âm tay trái **trượt [[am-giai-cromatic|cromatic]] đi xuống**, thường mỗi lần chỉ một nốt đổi — một ví dụ đẹp về [[dan-giong|dẫn giọng]] nửa cung tạo ra những hợp âm "lơ lửng" (xem [[hoa-am-cromatic]]). Nghiên cứu học thuật kinh điển: Carl Schachter, "The Prelude in E minor, Op. 28, No. 4: Autograph Sources and Interpretation", *Chopin Studies 2* (Cambridge, 1994).

## Gợi ý khi dạy
- Tay trái: giữ các hợp âm **rất nhẹ và đều**, nhưng để **bè đang đổi** nghe ra — đó là "giai điệu ẩn".
- Tay phải: giai điệu ít nốt phải **hát qua** các hợp âm lặp (nghĩ về độ tắt dần của âm piano — [[am-sac]]).
- Khoảng lặng ô 23 là **một phần của âm nhạc**: đếm đủ, không vội vào kết.
- Đọc thêm (public domain): chương về các prelude trong sách của Huneker (1900) và Niecks (1888) — ghi chép của thế hệ đầu tiên viết về Chopin.

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Giai điệu đơn trên hợp âm móc đơn lặp; cao trào ô 16–17 |
| **Hoà âm** | [[hoa-am-song-song|Hợp âm trượt]] nửa cung; V7 ô 12; chủ nguyên vị chỉ ở ô 25 |
| **Giai điệu** | Xoay quanh B – C (bậc 5 – 6) |
| **[[tiet-tau|Nhịp điệu]]** | Largo, móc đơn đều ở tay trái |
| **Phát triển** | Hai nửa song song 12 + 13 ô; nửa sau phá vỡ đối xứng |
`,
  },
  {
    slug: 'phan-tich-prelude-do-thu-bwv847',
    title: 'Phân tích: Prelude Đô thứ BWV 847',
    category: 'analysis',
    aliases: ['Prelude Đô thứ', 'BWV 847', 'Prelude in C minor', 'Bình quân tập 1 số 2', 'WTC I số 2'],
    summary: 'Prelude số 2 trong tập 1 "Clavier bình quân": một khuôn hình móc kép chạy suốt 24 ô qua chuỗi hợp âm theo vòng quãng 5, một đoạn bass ngân trên át, rồi ba đoạn đổi nhịp độ (Presto – Adagio – Allegro) như một cadenza, kết bằng hợp âm Đô trưởng.',
    wiki: 'Prelude_and_Fugue_in_C_minor,_BWV_847',
    refs: [
      ['Mutopia Project — BWV 847 (theo Breitkopf & Härtel 1866), dùng để kiểm số ô', 'https://raw.githubusercontent.com/MutopiaProject/MutopiaProject/master/ftp/BachJS/BWV847/bwv847a/bwv847a.ly'],
      ["Barolsky & Martens (2012), Music Theory Online 18.1 — Gould and the Performance of Bach's C-minor Prelude", 'https://mtosmt.org/issues/mto.12.18.1/mto.12.18.1.barolsky_martens.html'],
      ['Wikipedia — Klavierbüchlein für Wilhelm Friedemann Bach', 'https://en.wikipedia.org/wiki/Klavierb%C3%BCchlein_f%C3%BCr_Wilhelm_Friedemann_Bach'],
      ['pianolibrary.org — Well-Tempered Clavier I: nguồn và các phiên bản', 'https://www.pianolibrary.org/composers/bach/well-tempered-clavier-1-846-869/index.html'],
    ],
    body: `
## Tổng quan
[[the-loai|Prelude]] **Đô thứ**, số 2 trong tập 1 *[[toccata-prelude-fugue|Clavier bình quân]]* ([[luat-binh-quan]]) của [[johann-sebastian-bach|Bach]] — bản tự ký năm 1722. Một phiên bản sớm hơn nằm trong *Sổ tay cho [[wilhelm-friedemann-bach|Wilhelm Friedemann Bach]]* (bắt đầu 1720). Bài dài **38 ô**, nhịp 4/4. Cùng kiểu "prelude khuôn hình" với [[phan-tich-prelude-do-truong|Prelude Đô trưởng BWV 846]] ngay trước nó, nhưng **cả hai tay** cùng chạy và có một phần kết kịch tính.

## Hình thức
::form Khuôn_hình:20 Bass_ngân_át:7 Presto:6 Adagio:1 Allegro:4 | Năm đoạn của bài (số dưới mỗi khối là số ô)
| Ô | Nội dung |
|---|---|
| 1–4 | Trên bass ngân C: i – iv – vii°7 – i |
| 5–10 | **Chuỗi [[mo-tien-hoa-am|mô tiến]] theo [[vong-quang-nam|vòng quãng 5]]**: các [[hop-am-bay|hợp âm 7 át]] phụ ở [[the-dao-hop-am|thể đảo 3]] (V4/2) giải quyết vào hợp âm đảo 1 |
| 11–14 | Tới **Mi giáng trưởng** ([[giong-song-song|giọng song song]] trưởng) ở ô 11, nhưng không có kết mạnh |
| 15–20 | Hợp âm [[hop-am-bay-giam|7 giảm]] đưa về Đô thứ; ô 20 là vii°7/V |
| **21–28** | **[[bass-ngan|Bass ngân]] trên G** (át); từ ô 25 hai tay đan nhau |
| 28–33 | **[[nhip-do|Presto]]**: tay phải chạy một mình trên G ngân, tay trái vào ở ô 29 nhắc lại tay phải một quãng 8 thấp hơn |
| 34 | **Adagio**: [[luyen-hop-am-rai|hợp âm rải]] và những nốt chạy tự do như hát kể (recitativo) |
| 35–38 | **Allegro** trên bass ngân C (có hợp âm [[hop-am-napoli|Napoli]] D♭ ở ô 36); kết bằng hợp âm **Đô trưởng** (quãng 3 Picardy) |
Các chỉ dẫn Presto – Adagio – Allegro có trong [[an-ban-urtext|ấn bản]] Breitkopf 1866; chưa xác minh được chúng có trong bản tự ký hay không.

::grand Eb4+G4/C3=i F4+Ab4/C3=iv F4+Ab4+B3/C3=vii°7 Eb4+G4/C3=i | Khung hoà âm (rút gọn) của ô 1–4 trên bass ngân C; mỗi ô thực tế là một khuôn hình móc kép lặp hai lần

## Gợi ý khi dạy
- Mỗi ô 1–24 là **một khuôn hình lặp hai lần**: tập bằng cách **đánh khối** mỗi ô thành hợp âm để đọc hoà âm (giống cách tập [[phan-tich-prelude-do-truong|BWV 846]]).
- Nhận ra **chuỗi quãng 5** ở ô 5–11 và **bass ngân át** ở ô 21–28 — hai mục tiêu nghe dễ nhất.
- Phần Presto – Adagio – Allegro có tính **[[ngau-hung-ung-tac|ứng tác]]**, gần với [[cadenza]] và [[prelude-ung-tac|prelude ứng tác]]: chơi tự do hơn về thời gian nhưng giữ khung hoà âm.
- Bài phân tích của Barolsky và Martens (*Music Theory Online*, 2012) bàn về cách [[glenn-gould|Glenn Gould]] làm cho chuỗi khuôn hình "đơn điệu" này trở nên thuyết phục — đọc thêm ở [[phan-tich-va-bieu-dien]].

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Hai tay cùng chạy móc kép; phần kết đổi kết cấu liên tục |
| **Hoà âm** | Đô thứ → Mi giáng trưởng (ô 11) → bass ngân át (21–28) → kết Đô trưởng |
| **Giai điệu** | Ẩn trong khuôn hình; lộ ra ở Adagio |
| **[[tiet-tau|Nhịp điệu]]** | Móc kép đều; ba lần đổi nhịp độ ở cuối |
| **Phát triển** | Mô tiến vòng quãng 5; kịch tính tăng dần đến phần kết kiểu cadenza |
`,
  },
  {
    slug: 'phan-tich-anh-trang-chuong-1',
    title: 'Phân tích: Sonata "Ánh trăng" Op. 27 số 2, chương 1',
    category: 'analysis',
    aliases: ['Ánh trăng', 'Moonlight Sonata', 'Sonata Ánh trăng', 'Op. 27 số 2', 'Mondscheinsonate', 'Sonata quasi una fantasia'],
    summary: 'Chương 1 (Adagio sostenuto) của sonata Đô thăng thứ Op. 27 số 2 (1801): giai điệu chậm trên nền liên ba không dứt, hợp âm Napoli ngay ô 3, một đoạn bass ngân át dài, 69 ô "chơi không giảm âm". Tên "Ánh trăng" do nhà phê bình Rellstab đặt sau khi Beethoven mất.',
    wiki: 'Piano_Sonata_No._14_(Beethoven)',
    refs: [
      ['Humdrum (Craig Sapp) — bản mã hoá Op. 27 số 2/i, dùng để kiểm số ô', 'https://raw.githubusercontent.com/craigsapp/beethoven-piano-sonatas/master/kern/sonata14-1.krn'],
      ['Beethoven-Haus Bonn — bản tự ký BH 60', 'https://www.beethoven.de/en/media/view/6442239777570816/scan/0'],
      ['PTNA Piano Encyclopedia — Sonata Op. 27 No. 2', 'https://enc.piano.or.jp/en/musics/6554'],
      ['Britannica — Moonlight Sonata', 'https://www.britannica.com/topic/Moonlight-Sonata'],
      ['musictheory.net — Neapolitan chords (ví dụ ô 49–51)', 'https://www.musictheory.net/lessons/122'],
      ['Living Pianos — How slowly should the Moonlight Sonata be played?', 'https://livingpianos.com/how-slowly-should-beethovens-moonlight-sonata-be-played/'],
    ],
    body: `
## Tổng quan
[[ludwig-van-beethoven|Beethoven]] viết sonata **Đô thăng thứ** Op. 27 số 2 năm **1801**, in ở Vienna năm 1802 (Cappi), đề tặng nữ học trò **Giulietta Guicciardi**. Tên do chính ông đặt là ***Sonata quasi una fantasia*** ("sonata gần như một [[toccata-prelude-fugue|fantasia]]") — chương chậm đặt ở **đầu** thay vì chương nhanh. Tên "**Ánh trăng**" do nhà thơ – nhà phê bình **Ludwig Rellstab** đặt (thường ghi năm 1832, sau khi Beethoven mất) khi so sánh chương này với ánh trăng trên hồ Lucerne.

Chương 1: **[[nhip-do|Adagio]] sostenuto**, nhịp **2/2** (alla breve — không phải 4/4 như nhiều bản phổ thông), dài **69 ô**. Đầu bài có lời dặn: *"Si deve suonare tutto questo pezzo delicatissimamente e senza sordino"* — "Cả chương phải chơi thật tinh tế và **không giảm âm**".

## Hình thức
::form Mở_đầu:4 A:23 Bass_ngân_át:14 A′:18 Coda:10 | Các phần của chương (số dưới mỗi khối là số ô)
| Ô | Nội dung |
|---|---|
| 1–4 | Mở đầu: [[lien-ba|liên ba]] trên bè trầm quãng 8 đi xuống; ô 3 có **[[hop-am-napoli|hợp âm Napoli]]** (Rê trưởng, bass F♯) dẫn vào V ở ô 4 |
| 5–27 | Giai điệu vào ở ô 5 (nốt G♯ [[cham-doi-dau-noi|chấm dôi]] lặp lại); đi qua Mi trưởng và Si thứ |
| **28–41** | **[[bass-ngan|Bass ngân]] trên G♯** (át) gần như suốt các ô 28–40; liên ba rải lên xuống |
| 42–59 | Giai điệu trở lại ở **Đô thăng thứ** (ô 42); ô 49–50 lại có hợp âm Napoli trước V |
| 60–69 | Coda: bè trầm luân phiên C♯ – G♯, giai điệu xuống trầm; kết pp (ô 69 ghi *attacca* — vào ngay chương 2) |
Các tác giả gọi hình thức này khác nhau: có người thấy một **[[hinh-thuc-sonata|hình thức sonata]] thu gọn** (trình bày – đoạn bass ngân như phát triển – tái hiện), có người gọi là **ba đoạn tự do** kiểu fantasia. Cả hai cách nhìn đều dựa trên cùng mốc: đoạn bass ngân át dài và sự trở lại ở ô 42.

::grand G#3+C#4+E4/C#3=i G#3+C#4+E4/B2=i_(bass_B) A3+C#4+E4/A2=VI A3+D4+F#4/F#2=N6 G#3+B#3+D#4/G#2=V | Khung hoà âm (rút gọn) của bốn ô mở đầu: bè trầm (thực tế là quãng 8) đi xuống C♯ – B – A – F♯ – G♯; hợp âm Napoli (N6) ở nửa sau ô 3

## "Senza sordino" và bàn đạp
- *Sordino* ở đây là **[[bo-may-piano|bộ giảm âm]]** (damper): "senza sordino" = **nhấn [[ban-dap|pedal vang]]**, không phải pedal nhỏ (*una corda*).
- Trên đàn thời Beethoven, giữ pedal lâu bị nhoè ít hơn đàn hiện đại; vì vậy phần lớn người chơi ngày nay **đổi pedal theo hợp âm**, còn một số giữ pedal lâu hơn theo nghĩa đen. Đây là một tranh luận thực sự về [[tinh-xac-thuc-bieu-dien|tính xác thực]] — xem [[phong-cach-dien-tau]].

## Gợi ý khi dạy
- **Đếm theo hai phách** (nốt trắng), không đếm bốn — đếm nốt đen dễ làm bài lê thê.
- Ba lớp âm thanh: bè trầm quãng 8, liên ba **pp** ở giữa, giai điệu ở ngón 5 tay phải — luyện [[lam-noi-giai-dieu|làm nổi giai điệu]] trên nền liên ba đều.
- Nghe kỹ hai lần hợp âm Napoli (ô 3, ô 50): chỗ màu sắc thay đổi đột ngột nhất.
- [[carl-czerny|Czerny]] (học trò Beethoven) mô tả chương này như **một cảnh đêm với giọng than vãn vọng lại từ xa** — câu này được dẫn lại nhiều, nhưng chưa đối chiếu được nguyên văn.

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Ba lớp: bè trầm quãng 8, liên ba, giai điệu; pedal vang |
| **Hoà âm** | Đô thăng thứ; Napoli ở ô 3 và ô 50; bass ngân át ô 28–41 |
| **Giai điệu** | Ít nốt, nhiều [[not-lap-lai|nốt lặp]], nhịp chấm dôi |
| **[[tiet-tau|Nhịp điệu]]** | Liên ba móc đơn không dứt, nhịp 2/2 |
| **Phát triển** | 69 ô; trở lại ở ô 42; coda trên bè trầm chủ – át |
`,
  },
  {
    slug: 'phan-tich-pathetique-chuong-2',
    title: 'Phân tích: Sonata "Pathétique" Op. 13, chương 2',
    category: 'analysis',
    aliases: ['Pathétique chương 2', 'Adagio cantabile', 'Op. 13 chương 2', 'Sonata Bi tráng chương 2', 'Grande sonate pathétique'],
    summary: 'Chương 2 (Adagio cantabile, La giáng trưởng) của sonata Op. 13 (in năm 1799): rondo A – B – A – C – A + coda trong 73 ô; giai điệu "hát" trên nền đệm như một tứ tấu đàn dây, đoạn xen thứ hai đi qua La giáng thứ và Mi trưởng.',
    wiki: 'Piano_Sonata_No._8_(Beethoven)',
    refs: [
      ['Humdrum (Craig Sapp) — bản mã hoá Op. 13/ii, dùng để kiểm số ô', 'https://raw.githubusercontent.com/craigsapp/beethoven-piano-sonatas/master/kern/sonata08-2.krn'],
      ['Beethoven-Haus Bonn — Op. 13', 'https://www.beethoven.de/en/work/view/6166636289589248'],
      ['Beethoven-Haus Bonn — danh mục bổ sung 2021 (bản in đầu tiên Hoffmeister 1799)', 'https://internet.beethoven.de/pdf-web/Neuerwerbungsliste-2021-1.pdf'],
      ['PTNA Piano Encyclopedia — Sonata Op. 13', 'https://enc.piano.or.jp/en/musics/6558'],
      ['learnmusictheory.net — Rondo examples', 'https://learnmusictheory.net/PDFs/pdffiles/05%2D12%2DRondoExamples.pdf'],
    ],
    body: `
## Tổng quan
[[hinh-thuc-sonata|Sonata]] **Đô thứ** Op. 13 được in ở Vienna (Hoffmeister) với tên ***Grande sonate pathétique***, quảng cáo trên báo *Wiener Zeitung* tháng 12/1799, đề tặng Hoàng thân Karl Lichnowsky (Beethoven-Haus ghi thời gian sáng tác 1797–1799). Việc ai đặt chữ "pathétique" — [[ludwig-van-beethoven|Beethoven]] hay nhà xuất bản — các nguồn nói khác nhau.

Chương 2: **Adagio cantabile**, **La giáng trưởng** (giọng [[bac-am-giai|hạ trung âm]] của Đô thứ), nhịp **2/4**, dài **73 ô**.

## Hình thức rondo
::form A:16 B:12 A:8 C:14 A:16 Coda:7 | [[rondo|Rondo]] A – B – A – C – A + coda (số dưới mỗi khối là số ô)
| Ô | Phần | Giọng và nội dung |
|---|---|---|
| 1–16 | **A** | Chủ đề La giáng trưởng ở âm vực giữa (ô 1–8), nhắc lại cao hơn một quãng 8 (ô 9–16) |
| 17–28 | **B** | Đoạn xen thứ nhất: Fa thứ, đi tới Mi giáng (át) để quay về |
| 29–36 | **A** | Chủ đề trở lại, chỉ 8 ô |
| 37–50 | **C** | Đoạn xen thứ hai: bắt đầu **La giáng thứ** ([[giong-song-song|giọng cùng tên]] — [[hop-am-muon|màu mượn]]), đệm [[lien-ba|liên ba]]; ô 42–47 đi sang **Mi trưởng** (ghi bằng [[dau-hoa|dấu thăng]] — tương đương F♭, bậc ♭VI) nhờ [[trung-am|đổi tên trùng âm]] |
| 51–66 | **A** | Chủ đề lần cuối, đệm bằng **liên ba** lấy từ đoạn C |
| 67–73 | Coda | Bè trầm luân phiên E♭ – A♭ (V – I) |
Đoạn xen C là chỗ hoà âm đi xa nhất — một ví dụ [[trung-am-cromatic|quan hệ trung âm cromatic]] thời Beethoven.

## Gợi ý khi dạy
- Nghĩ kết cấu như **[[the-loai|tứ tấu]] đàn dây**: giai điệu là violin 1, móc kép ở giữa là viola (rất nhẹ), bè trầm là cello. Một tay thường phải chơi cả giai điệu lẫn một phần đệm — luyện [[lam-noi-giai-dieu|làm nổi giai điệu]] trong cùng một tay.
- *[[thuat-ngu|Cantabile]]* = như hát: luyện [[ky-thuat-cham-phim|legato]] và [[dien-dat-cau-nhac|câu nhạc]] dài 4 ô.
- Beethoven không ghi số [[nhip-do|máy đếm nhịp]]; các con số trong [[an-ban-urtext|ấn bản]] là của người biên tập.
- So sánh: chương 3 cũng là rondo (bảy phần) — xem [[rondo]].

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Ba lớp như [[nhac-thinh-phong|tứ tấu]]; liên ba thêm vào ở lần A cuối |
| **Hoà âm** | La giáng trưởng; Fa thứ (B); La giáng thứ → Mi trưởng (C) |
| **Giai điệu** | Chủ đề hát, câu 4 ô |
| **[[tiet-tau|Nhịp điệu]]** | 2/4 chậm; đệm từ móc kép sang liên ba |
| **Phát triển** | Rondo 16 + 12 + 8 + 14 + 16 + 7 = 73 ô |
`,
  },
  {
    slug: 'phan-tich-golliwogg-cakewalk',
    title: "Phân tích: Golliwogg's Cakewalk (Debussy)",
    category: 'analysis',
    aliases: ["Golliwogg's Cakewalk", "Golliwog's Cakewalk", "Children's Corner", 'Góc trẻ thơ'],
    summary: 'Bài cuối của Children\'s Corner (in năm 1908): Debussy viết theo nhịp cakewalk – ragtime với nhiều đảo phách, rồi chèn vào đoạn giữa một câu trích nhại phần mở đầu Tristan und Isolde của Wagner, mỗi lần bị "cắt ngang" bằng tiếng đàn banjo giễu cợt.',
    wiki: 'Children%27s_Corner',
    refs: [
      ["UT Austin — Tristan und Isolde: Debussy's Golliwogg's Cakewalk", 'https://laits.utexas.edu/tristan/DebBerg.php'],
      ["PTNA Piano Encyclopedia — Golliwogg's Cakewalk (Hayashikawa)", 'https://enc.piano.or.jp/en/musics/22406'],
      ["de Martelly (2010), Current Musicology 90 — Signification, Objectification, and the Mimetic Uncanny in Debussy's Golliwogg's Cakewalk", 'https://academiccommons.columbia.edu/doi/10.7916/D8154FNG'],
      ['Indiana University — Musical Borrowing database: Caddy (2007), "Parisian Cake Walks"', 'https://chmtl.indiana.edu/borrowing/records/2153'],
      ["Musopen — Children's Corner", 'https://musopen.org/music/4550-childrens-corner/'],
    ],
    body: `
## Tổng quan
*Children's Corner* ("Góc trẻ thơ") gồm sáu bài [[claude-debussy|Debussy]] viết 1906–08, Durand in năm 1908, đề tặng con gái Claude-Emma ("Chouchou", khi ấy 3 tuổi): *"Gửi Chouchou bé bỏng thân yêu, cùng lời xin lỗi dịu dàng của Cha về những gì sắp tới."* Harold Bauer chơi lần đầu ở Paris ngày 18/12/1908. **Golliwogg's Cakewalk** là bài cuối, ở Mi giáng trưởng.

## Cakewalk và ragtime
**Cakewalk** là điệu nhảy gốc từ các đồn điền miền Nam nước Mỹ, cùng thời và cùng họ với **[[phong-cach-jazz|ragtime]]** (xem [[scott-joplin|Scott Joplin]], [[dao-phach]]); đầu [[thoi-ky-the-ky-20|thế kỷ 20]] nó thành mốt ở Paris. Debussy dùng các hình nhịp **đảo phách** và kiểu đệm "bước nhảy" của ragtime.
::rhythm 2/4 e q e / e-e q // | Hình đảo phách móc đơn – đen – móc đơn, đặc trưng của cakewalk và ragtime (minh hoạ chung, không phải trích bản nhạc)

## Câu trích Tristan
- Theo trang Tristan của Đại học Texas (UT Austin), sau khoảng **61 ô**, nhạc ragtime **đột ngột dừng** và vang lên một [[cau-nhac|câu nhạc]] dài, liền tiếng: motif **"Khát khao"** mở đầu *Tristan und Isolde* của [[richard-wagner|Wagner]] — nhưng **không có hợp âm Tristan**, được hoà âm lại bằng các hợp âm khác.
- Debussy ghi *Cédez* (chậm lại) và ***avec une grande émotion*** ("với xúc động lớn") — một lời đùa: câu nhạc lãng mạn nhất của Wagner được đặt giữa điệu nhảy của con búp bê. Motif xuất hiện **bốn lần**, mỗi lần bị "trả lời" bằng các [[truong-do|nốt móc đơn]] [[cach-dien-tau|staccato]] nhại tiếng **banjo**.
- PTNA cho biết hoà âm ở đầu chủ đề chính đã có quan hệ [[trung-am|trùng âm]] với hợp âm Tristan; Bauer kể Debussy dặn ông "chú ý đến câu trích Wagner", và trong cuộn piano tự thu, Debussy chơi chậm và cường điệu mỗi lần trích.
- Bối cảnh: thái độ của Debussy với Wagner — từ ngưỡng mộ đến chống đối — là một chủ đề lớn của nhạc Pháp đầu thế kỷ 20 (xem [[an-tuong]], [[hoa-am-cromatic]]).
Số ô chính xác của từng lần trích cần đối chiếu trên bản in Durand (IMSLP).

## Một lưu ý khi dạy
"Golliwog" là một **hình búp bê mang tính phân biệt chủng tộc** (biếm hoạ người da đen) rất phổ biến ở châu Âu thời đó; cakewalk cũng có nguồn gốc từ đời sống nô lệ ở đồn điền. Các nghiên cứu của Davinia Caddy (2007) và Elizabeth de Martelly (*Current Musicology*, 2010) phân tích tác phẩm trong bối cảnh này. Khi dạy, nên giải thích nguồn gốc tên gọi thay vì bỏ qua.

## Gợi ý khi dạy
- Tiết tấu **gọn, khô, đúng nhịp** — ngược với lối pedal mù mờ thường gán cho Debussy.
- Chỗ trích Tristan: chơi **thật biểu cảm** như lời dặn, để sự tương phản với tiếng banjo trở nên buồn cười.
- Bài nối ba chủ đề của kho: [[dao-phach|đảo phách]], [[an-tuong|Debussy]] và [[y-nghia-am-nhac|ý nghĩa âm nhạc]] (trích dẫn để giễu nhại).

## Tóm tắt theo khung phân tích
Bảng tổng hợp theo [[phan-tich-phong-cach|năm yếu tố của LaRue]]; quy trình chung ở [[phuong-phap-phan-tich-tac-pham]].
| Yếu tố | Tóm tắt |
|---|---|
| **Âm thanh** | Khô, staccato; đoạn trích Tristan liền tiếng, biểu cảm |
| **Hoà âm** | Mi giáng trưởng; câu trích Wagner được hoà âm lại |
| **Giai điệu** | Chủ đề cakewalk; motif "Khát khao" của Tristan |
| **[[tiet-tau|Nhịp điệu]]** | Đảo phách kiểu ragtime |
| **Phát triển** | Ba đoạn; đoạn giữa xen câu trích và lời "đáp" banjo |
`,
  },

]
