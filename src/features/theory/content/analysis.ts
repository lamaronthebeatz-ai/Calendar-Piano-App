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
Định nghĩa thường được trích dẫn của **Ian Bent** (từ điển *[[nguon-tra-cuu-am-nhac-hoc|New Grove]]*, 1980): phân tích là việc **tách một [[lo-trinh-hinh-thuc|cấu trúc âm nhạc]] thành các thành phần tương đối đơn giản hơn**, rồi **tìm hiểu chức năng** của các thành phần ấy trong cấu trúc. Định nghĩa này nhấn mạnh **cấu trúc**; các xu hướng sau này bổ sung câu hỏi về **ý nghĩa**, **bối cảnh lịch sử** và **biểu diễn** (xem [[lich-su-phan-tich-am-nhac]]).

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
| 2 | [[phan-tich-canon-pachelbel]] | [[passacaglia-va-chaconne|Bè trầm lặp]], biến tấu |
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

**Phân tích một kho tác phẩm:** 371 [[tai-lieu-su-pham-cua-bach|chorale của Bach]] qua nghiên cứu thống kê và máy học — [[phoi-chorale-kieu-bach]].

**Hình thức để phân tích:** [[hinh-thuc-hai-doan]], [[hinh-thuc-ba-doan]], [[sonata-rondo-va-cac-loai-rondo]]; nghe màu dàn nhạc qua [[phoi-khi-nguyen-ly-co-ban]].
`,
  },
  {
    slug: 'lich-su-phan-tich-am-nhac',
    title: 'Lịch sử phân tích âm nhạc',
    category: 'analysis',
    also: ['philosophy'],
    aliases: ['lịch sử phân tích', 'history of music analysis', 'Burmeister', 'Koch', 'punctuation form', 'hình thức dấu câu', 'Formenlehre', 'A. B. Marx', 'Réti', 'phân tích hùng biện'],
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
- Koch mô tả cách ghép các **đơn vị nhỏ, câu, đoạn** có các loại kết khác nhau thành tác phẩm lớn ([[the-loai|giao hưởng]], sonata, [[hinh-thuc-concerto|concerto]]) — giống như **dấu câu** trong một bài văn: các chỗ ngắt và kết chia nhạc thành từng đơn vị. Các học giả gọi đây là **"hình thức dấu câu"**. Koch hay lấy ví dụ từ nhạc [[Haydn]].
- Từ thập niên 1970, các học giả ([[lich-su-nganh-am-nhac-hoc|Dahlhaus]], Ratner, Baker, Sisman…) khôi phục Koch làm cơ sở cho phân tích **"theo đúng lịch sử"** nhạc thế kỷ 18. Cách tiếp cận theo khuôn mẫu của [[luoc-do-galant|lược đồ galant]] cũng đi theo hướng này.

## Thế kỷ 19: Formenlehre và "hình thức sonata"
- **Anton Reicha** (1826) và **[[carl-czerny|Carl Czerny]]** (1848) mô tả hình thức sonata; **Adolf Bernhard Marx**, trong bộ *Die Lehre von der musikalischen Komposition* (4 tập, 1837–1847; tập 3 năm 1845), xây dựng một **hệ thống các hình thức** đi từ hình thức bài hát đơn giản đến chương sonata, minh hoạ bằng [[sonata-the-loai|sonata piano]] của [[Beethoven]].
- Marx **có thể** là người đặt ra thuật ngữ **"hình thức sonata"**, và thuật ngữ **"Formenlehre"** (học thuyết hình thức) cũng bắt nguồn từ ông. Lối dạy hình thức như những **khuôn mẫu** này ảnh hưởng đến giáo trình hình thức suốt thế kỷ 19–20 (xem [[hinh-thuc-sonata]]).
- Song song là các bài **phân tích dạng ghi chú chương trình** cho người nghe hoà nhạc — truyền thống mà Donald Tovey (Anh) về sau tiêu biểu.

## Đầu thế kỷ 20: tìm sự thống nhất bên dưới
- **Heinrich Schenker**: phân tích nhiều tầng, coi tác phẩm là sự kéo dài của một cấu trúc nền (xem [[phan-tich-schenker]]).
- **[[arnold-schoenberg|Arnold Schoenberg]]**: Grundgestalt và [[bien-tau|biến tấu]] phát triển (xem [[motif]]).
- **Rudolph Réti** (*The Thematic Process in Music*, 1951): tìm các **"tế bào" [[cao-do|cao độ]]** ẩn chung giữa các chủ đề tương phản, cho phép cả đảo, nghịch hành và **đổi thứ tự** nốt. Phương pháp bị phê bình nhiều vì **quá lỏng** — tìm "liên hệ" ở đâu cũng được, bỏ qua vai trò hoà âm của các nốt — nhưng sách vẫn được trích dẫn rất thường xuyên.

## Nửa sau thế kỷ 20 đến nay
- Lý thuyết **tập hợp cao độ** cho nhạc [[phi-dieu-tinh|phi điệu tính]] (Allen Forte, 1973 — xem [[tap-hop-cao-do]]).
- **Phân tích phong cách** của Jan LaRue (1970 — xem [[phan-tich-phong-cach]]).
- **Lý thuyết chủ đề biểu đạt** của Leonard Ratner (1980 — xem [[ly-thuyet-chu-de]]).
- Lý thuyết nhịp và nhóm của Lerdahl và Jackendoff (1983 — xem [[sieu-nhip]]).
- **Chức năng hình thức** của William Caplin (1998) và **Lý thuyết Sonata** của Hepokoski – Darcy (2006) (xem [[chuc-nang-hinh-thuc]]).
- **Neo-Riemann** cho [[hoa-am-cromatic|hoà âm cromatic]] (xem [[neo-riemann]]).
- **Phân tích biểu diễn và bản thu** (xem [[phan-tich-va-bieu-dien]], [[so-sanh-ban-thu]]).

## Phê phán: "Ta đã đi vào phân tích thế nào, và làm sao để ra"
Bài luận nổi tiếng của nhà [[am-nhac-hoc|âm nhạc học]] **Joseph Kerman** (*Critical Inquiry*, **1980**) — *How We Got into Analysis, and How to Get Out* — phê phán việc phân tích tập trung vào cấu trúc kỹ thuật mà tách khỏi lịch sử, bối cảnh và **phê bình** (đánh giá, diễn giải ý nghĩa). Bài luận thường được coi là một khởi điểm của các tranh luận dẫn tới "[[am-nhac-hoc-moi|âm nhạc học mới]]" ở thập niên 1980–1990. Bài học cho người dạy: phân tích là **phương tiện để hiểu và chơi hay hơn**, không phải mục đích tự thân.
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
Nhà [[am-nhac-hoc|âm nhạc học]] **Jan LaRue**, trong *Guidelines for Style Analysis* (W. W. Norton, **1970**; bản mở rộng 2011), đề xuất một khung phân tích có hệ thống để **không bỏ sót** yếu tố nào. Khung này được dùng rộng rãi trong giảng dạy, từ nhạc cổ điển đến jazz.

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
Người nghe thế kỷ 18 sống giữa nhiều loại âm nhạc mang **ý nghĩa xã hội**: hành khúc của quân đội, tiếng [[nhac-cu-tay-nguyen-va-mien-nui|tù và]] đi săn, vũ khúc trong cung đình, nhạc nhà thờ… Khi một bản [[hinh-thuc-sonata|sonata]] **gợi** đến những âm thanh đó, người nghe thời ấy hiểu ngay ý nghĩa. Lý thuyết **chủ đề biểu đạt** (topic theory) giúp người nghe ngày nay đọc lại các tín hiệu đó.

## Ratner và khái niệm "chủ đề"
**Leonard Ratner**, trong *Classic Music: Expression, Form, and Style* (1980), định nghĩa chủ đề là **"đề tài cho diễn ngôn âm nhạc"** và chia thành hai nhóm:
- **Loại hình** (types): những [[the-loai|thể loại]] trọn vẹn như **vũ khúc** ([[minuet-va-trio|minuet]], [[to-khuc-baroque|gavotte]]…) và **hành khúc**.
- **Phong cách** (styles): những "màu" được mượn vào tác phẩm khác — **quân hành**, **săn bắn**, **Thổ Nhĩ Kỳ**…
Ranh giới không cứng: minuet là một thể loại hoàn chỉnh, nhưng cũng có thể là một "phong cách" xuất hiện trong bản nhạc khác.

## Một số chủ đề thường gặp
| Chủ đề | Dấu hiệu âm nhạc thường được mô tả | Gợi liên tưởng |
|---|---|---|
| **Quân hành, hành khúc** | Nhịp chẵn, [[tiet-tau|tiết tấu]] [[cham-doi-dau-noi|chấm dôi]], hình kèn hiệu | Uy nghi, nghi lễ |
| **Săn bắn** | Nhịp 6/8, hình **tù và** ([[kenh-horn|horn]] call) | Ngoài trời, quý tộc |
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
- Viết cho **ba [[violin|violin]] và [[bass-so|basso continuo]]**, đi kèm một [[to-khuc-baroque|gigue]].
- Là một **[[doi-am-kep|canon đồng âm]] ba bè**: ba violin chơi cùng một [[giai-dieu|giai điệu]], lần lượt vào sau nhau. Bè thứ tư là **bè trầm lặp** ([[passacaglia-va-chaconne|basso ostinato]] / ground bass) suốt bài — xem [[ostinato]]. Bài cũng mang yếu tố của chaconne.

## Bè trầm và vòng hợp âm
Bè trầm 8 [[not-lap-lai|nốt lặp]] lại tạo nên vòng hợp âm nổi tiếng **D – A – Bm – F♯m – G – D – G – A** (trong Đô trưởng: C – G – Am – Em – F – C – F – G), dùng trong vô số bài hát — xem [[vong-hop-am]] và [[mo-tien-hoa-am|mô tiến quãng 3 đi xuống]].

::keyboard D4 F#4 A4 | Hợp âm chủ Rê trưởng — hoá biểu 2 dấu thăng (F♯, C♯)

## Lịch sử
| Mốc | Sự kiện |
|---|---|
| 1680–1706? | Thời điểm sáng tác **không rõ** |
| 1838–1842 | Bản chép tay cổ nhất còn lại |
| 1919 | Gustav Beckmann công bố bản tổng phổ trong một bài nghiên cứu về [[nhac-thinh-phong|nhạc thính phòng]] của Pachelbel |
| 1929 | Max Seiffert xuất bản một bản [[phoi-khi-nguyen-ly-co-ban|chuyển soạn]] |
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
[[charles-gounod|Charles Gounod]] viết một giai điệu **đặt chồng lên** [[the-loai|Prelude]] (hầu như không sửa đổi): bản cho [[violin|violin]] năm 1853, và bản cho giọng hát với lời Latin "Ave Maria" năm 1859 — bản trở nên nổi tiếng.

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
Bộ ba Gymnopédie của [[Satie]] hoàn thành ngày **2/4/1888**; cả ba đều ở nhịp **3/4**. Bài số 1 ở giọng **Rê trưởng**, đoạn giữa nghiêng sang Rê thứ. Chỉ dẫn "**Lent et douloureux**" (chậm và đau buồn) có trong bản in; [[van-ban-hoc-am-nhac|bản viết tay]] ghi "Très lent". [[Debussy]] sau này [[dan-nhac-giao-huong|phối khí]] cho dàn nhạc bài số 1 và số 3.

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
- [[Beethoven]] phác thảo từ **1808**, viết bản đầy đủ hơn năm **1810** (Ludwig Nohl cho biết [[van-ban-hoc-am-nhac|bản viết tay]] ghi ngày 27/4/1810), và sửa lại năm **1822** cho một lần in không thành.
- Bản in đầu tiên chỉ xuất hiện năm **1867**, sau khi Beethoven mất, trong sách của Nohl (Stuttgart). Bản viết tay mà Nohl dựa vào đã **thất lạc**; có học giả còn nghi nó chưa từng tồn tại, trong khi Barry Cooper (1984) chỉ ra một phác thảo còn lại rất gần bản in.

## "Elise" là ai?
Chưa có lời giải. Các giả thuyết: **Therese Malfatti** (học trò mà Beethoven được cho là đã cầu hôn năm 1810 — có thể Nohl chép nhầm "Therese" thành "Elise"), ca sĩ **Elisabeth Röckel**, hoặc cô bé **Elise Barensfeld**.

## Hình thức
Thường được phân tích là **[[rondo]] A – B – A – C – A** (cũng có ý kiến coi là [[hinh-thuc-hai-doan|hai đoạn có tái hiện]]):
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

Một nghiên cứu khác gộp lại thành A – B – C – B – A – B′ – coda; một nguồn nữa mô tả các đoạn hai đoạn có tái hiện ghép thành cấu trúc ba đoạn lớn. Khi dạy, hãy cùng học trò đánh dấu các lần đoạn C quay lại trên bản nhạc.

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

Liên hệ phương pháp: "Dream Cadence" là một trường hợp **làm trái kỳ vọng**: nốt 9 không giải quyết đi xuống như thường lệ — xem [[ky-vong-am-nhac]]; khi biểu diễn, chỗ chậm lại trước kết chính là nơi người chơi "dàn dựng" kỳ vọng ấy ([[phan-tich-va-bieu-dien]]).

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
Dài **34 ô nhịp**, thường được phân tích là **[[hinh-thuc-hai-doan|hai đoạn có tái hiện]]**: A – A – B – A – B – A, cộng **coda** (một nghiên cứu năm 2025 chia chi tiết hơn: A – B – A′ – coda – coda′ – [[cadenza|cadenza]]).
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
Minuet **Sol trưởng** BWV Anh. 114 và Minuet Sol thứ BWV Anh. 115 nằm trong *Sổ tay cho [[lo-trinh-tac-pham|Anna Magdalena]] Bach* (1725) nên lâu nay được gán cho [[johann-sebastian-bach|Bach]]. Thực ra cả hai đến từ một [[the-loai|tổ khúc]] harpsichord của **Christian Petzold** (1677–1733), nhạc sĩ [[organ-ong|organ]] ở Dresden (các nguồn ghi thời điểm xác định lại tác giả là những năm 1970). Bài ở nhịp **3/4**, dài **32 ô**, hai nửa đều có [[dau-nhac-lai|dấu nhắc lại]]. Bối cảnh vũ điệu: [[minuet-va-trio]].

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
Đây là **[[hinh-thuc-hai-doan|hai đoạn đơn]]**, không phải [[hinh-thuc-am-nhac|hai đoạn có tái hiện]]: ô 25 chỉ "vọng" lại khởi đầu (nốt D rồi G), còn nhịp điệu và nốt khác hẳn ô 1.

::staff treble D5 G4 A4 B4 C5 | Ô 1 (tay phải): D5 nốt đen rồi bốn móc đơn G – A – B – C
::grand C#5/A3=V D5/D3=I | Kết ở Rê trưởng (ô 23–24, rút gọn): giai điệu C♯ → D trên bè trầm A → D — V – I của giọng át
::staff treble D5 G4 F#4 G4 / E5 G4 F#4 G4 | Ô 25–26: gợi lại đường nét ô 1 (D rồi G, rồi E cao) nhưng không phải tái hiện nguyên văn

## Gợi ý khi dạy
- **Đánh dấu bốn kết** (ô 8, 16, 24, 32) trên bản nhạc trước khi tập: học trò thấy bài gồm bốn câu 8 ô.
- Nghe sự khác biệt giữa **kết nửa** (ô 8) và **kết hoàn toàn** (ô 16) — bài học đầu tiên về [[cau-nhac|câu hỏi – câu đáp]].
- Tìm nốt **C♯** (ô 20) và **C♮** (cuối ô 24): hai nốt cho biết giọng đổi rồi đổi lại — [[chuyen-giong]] ở dạng đơn giản nhất.
- Đây là nhạc khiêu vũ 3/4: nhấn nhẹ phách 1, nhóm hai ô (xem [[minuet-va-trio]], [[sieu-nhip]]).

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
      ['Wikipedia — Giant Steps (album)', 'https://en.wikipedia.org/wiki/Giant_Steps'],
      ['Wikipedia — Coltrane changes', 'https://en.wikipedia.org/wiki/Coltrane_changes'],
      ['Library of Congress — National Recording Registry essay: Giant Steps', 'https://www.loc.gov/static/programs/national-recording-preservation-board/documents/GiantSteps.pdf'],
      ['All About Jazz — Cedar Walton on Giant Steps', 'https://news.allaboutjazz.com/cedar-walton-on-giant-steps.php'],
      ['Wikipedia — Giant Steps (Tommy Flanagan album)', 'https://en.wikipedia.org/wiki/Giant_Steps_(Tommy_Flanagan_album)'],
      ['Wikipedia — Countdown (John Coltrane song)', 'https://en.wikipedia.org/wiki/Countdown_(John_Coltrane_song)'],
      ['Wikipedia — 26-2', 'https://en.wikipedia.org/wiki/26-2'],
    ],
    body: `


16 ô, 26 hợp âm, gần 290 phách mỗi phút: "Giant Steps" có tiếng là bài khó nhất trong kho bài chuẩn. Nhưng đếm giọng thay vì đếm hợp âm, bạn sẽ thấy chỉ có **ba** giọng, và chúng chỉ đổi mười lần. Bài này mổ xẻ chính tác phẩm đã làm cho [[vong-coltrane|vòng Coltrane]] nổi tiếng — đọc chậm, chơi chậm hơn nữa.

Bài này áp lý thuyết [[vong-coltrane]] vào chính tác phẩm đã làm nó nổi tiếng; các chi tiết lịch sử lấy từ Wikipedia, Thư viện Quốc hội Mỹ và các nguồn ghi ở cuối trang. Giai điệu còn bản quyền nên ở đây chỉ phân tích **hoà âm**; hãy nghe bản thu gốc khi đọc.

## Bối cảnh
| Mục | Chi tiết |
|---|---|
| Thu âm | Bản chính (master) thu ngày **5/5/1959** tại Atlantic Studios, New York (album thu 4–5/5/1959) |
| Nhóm | John Coltrane ([[saxophone|saxophone]] tenor), Tommy Flanagan (piano), Paul Chambers (bass), Art Taylor (trống) |
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
Coltrane **không phát minh** ra ý tưởng đổi giọng theo quãng 3 trưởng, nhưng là người **đầu tiên dùng nó một cách có hệ thống**.

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
4. Muốn chơi được những bài như "Giant Steps" thì phải **thoải mái ở mọi giọng** — tập một bài chuẩn đơn giản ở cả 12 giọng (kèm [[bass-di-jazz|bass đi]]), rồi ngẫu hứng và tái hoà âm.
5. Tăng nhịp độ từng chút; chỉ tăng khi chơi sạch.

## Các bài cùng họ
Coltrane dùng cùng chu trình để [[tai-hoa-am|tái hoà âm]] các bài có sẵn: "**Countdown**" (trên "Tune Up"), "**26-2**" (trên "Confirmation" của Charlie Parker), "**Satellite**" (trên "How High the Moon") — các contrafact (xem [[rhythm-changes]], [[sang-tac-jazz]]). Lý thuyết đầy đủ: [[vong-coltrane]]; quan hệ với [[he-thong-hoa-am-co-dien|hoà âm cổ điển]]: [[trung-am-cromatic]], [[neo-riemann]].

## Câu hỏi và bài tập
1. Viết hợp âm của 16 ô "Giant Steps" và tô màu ba giọng B, G, E♭.
2. Chơi bass (nốt gốc) cả bài ở nhịp 100; rồi chơi nốt dẫn hướng 3 – 7.
3. Ứng tác một chorus chậm chỉ bằng ba ngũ cung V (F♯, Rê, B♭).
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
*Six Progressive Sonatinas* Op. 36 của [[muzio-clementi|Clementi]] được in ở London năm **1797** (Longman & Broderip); sáu bài xếp theo độ khó tăng dần. [[an-ban-urtext|Ấn bản]] Henle theo [[van-ban-hoc-am-nhac|bản in đầu tiên]] và giữ [[ngon-bam|ngón bấm]] của chính Clementi. Chương 1 của số 1 ở **Đô trưởng**, nhịp **2/2**, dài **38 ô**, hai nửa đều có [[dau-nhac-lai|dấu nhắc lại]]. (Chỉ dẫn nhịp độ khác nhau giữa các ấn bản: G. Schirmer in *Spiritoso*; nên xem ấn bản dựa trên bản in gốc.)

## Hình thức sonata thu nhỏ
::form Trình_bày:15 Phát_triển:8 Tái_hiện:15 | Ba phần của [[hinh-thuc-sonata|hình thức sonata]] (số dưới mỗi khối là số ô)
**Trình bày (ô 1–15)**
- **Chủ đề 1 (ô 1–4)**: hợp âm Đô trưởng rải, kết nửa trên V ở ô 4 (bè trầm đi xuống G – F – E – D).
- **Ô 5–7**: chủ đề bắt đầu lại rồi **[[chuyen-giong|chuyển giọng]]** — F♯ xuất hiện ở bè trầm ô 6.
- **Vùng giọng át (ô 8–15)**: Sol trưởng, gồm âm giai đi lên và [[not-lap-lai|nốt lặp]]; [[cau-ket|kết hoàn toàn]] ở Sol trưởng (ô 15). Không có "chủ đề 2" trữ tình tương phản — vùng giọng thứ hai được dựng từ hình âm giai và nốt lặp.

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
- Phần phát triển rất ngắn (Estrin: "ngắn gọn hơn so với [[ludwig-van-beethoven|Beethoven]]") — dịp tốt để giới thiệu khái niệm [[chuc-nang-hinh-thuc|chức năng hình thức]] trước khi học [[phan-tich-sonata-k545|Sonata K. 545]].
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
    also: ['polyphony'],
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
- **trên hết là đạt được lối chơi hát** (*cantable Art im Spielen*) và "được nếm trước, một cách đậm đà, hương vị của sáng tác".
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

Số 4: **Mi thứ**, **[[nhip-do|Largo]]**, dài **25 ô** (cộng một nốt lấy đà). Bài được chơi (trên [[organ-ong|organ]], cùng số 6) trong tang lễ Chopin ở nhà thờ Madeleine, Paris, ngày 30/10/1849.

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
- Nghĩ kết cấu như **[[the-loai|tứ tấu]] đàn dây**: giai điệu là [[violin|violin]] 1, móc kép ở giữa là [[viola|viola]] (rất nhẹ), bè trầm là [[cello|cello]]. Một tay thường phải chơi cả giai điệu lẫn một phần đệm — luyện [[lam-noi-giai-dieu|làm nổi giai điệu]] trong cùng một tay.
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
- Theo trang Tristan của Đại học Texas (UT Austin), sau khoảng **61 ô**, nhạc ragtime **đột ngột dừng** và vang lên một [[cau-nhac|câu nhạc]] dài, liền tiếng: motif **"Khát khao"** mở đầu *Tristan und Isolde* của [[richard-wagner|Wagner]] — nhưng **không có hợp âm Tristan**: câu nhạc được hoà âm lại bằng các hợp âm khác.
- Debussy ghi *Cédez* (chậm lại) và ***avec une grande émotion*** ("với xúc động lớn") — một lời đùa: câu nhạc lãng mạn nhất của Wagner được đặt giữa điệu nhảy của con búp bê. Motif xuất hiện **bốn lần**, mỗi lần bị "trả lời" bằng các [[truong-do|nốt móc đơn]] [[cach-dien-tau|staccato]] nhại tiếng **banjo**.
- PTNA cho biết hoà âm ở đầu chủ đề chính đã có quan hệ [[trung-am|trùng âm]] với hợp âm Tristan; Bauer kể Debussy dặn ông "chú ý đến câu trích Wagner", và trong cuộn piano tự thu, Debussy chơi chậm và cường điệu mỗi lần trích.
- Bối cảnh: thái độ của Debussy với Wagner — từ ngưỡng mộ đến chống đối — là một chủ đề lớn của nhạc Pháp đầu thế kỷ 20 (xem [[an-tuong]], [[hoa-am-cromatic]]).
Số ô chính xác của từng lần trích cần đối chiếu trên bản in Durand ([[nguon-tra-cuu-am-nhac-hoc|IMSLP]]).

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
  {
    slug: 'phan-tich-scriabin-sonata-so-2',
    title: 'Thủ pháp hoà âm trong Sonata số 2 Op. 19 của A. Scriabin — Mở đầu',
    category: 'analysis',
    aliases: ['Scriabin Sonata số 2', 'Sonata-fantaisie', 'Sonata-fantasy', 'Op. 19', 'Sonata Sol thăng thứ Scriabin', 'Scriabin Op. 19', 'Sonata số 2 Scriabin'],
    summary: 'Phần mở đầu của tiểu luận về thủ pháp hoà âm trong Sonata số 2 Sol♯ thứ Op. 19 "Sonate-Fantaisie" của Scriabin: lý do chọn đề tài, lịch sử nghiên cứu, mục đích, đối tượng, phạm vi, phương pháp và bố cục.',
    wiki: 'Piano_Sonata_No._2_(Scriabin)',
    refs: [
      ['IMSLP — Piano Sonata No. 2, Op. 19 (Scriabin): bản Belaieff, Leipzig 1898 (tệp #111216), dùng để đọc từng ô', 'https://imslp.org/wiki/Piano_Sonata_No.2,_Op.19_(Scriabin,_Aleksandr)'],
      ['Wikipedia — Piano Sonata No. 2 (Scriabin): bảng hình thức và lịch sử, dẫn Leikin 2011, Ballard & Bengtson 2017, Bowers 1996', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._2_(Scriabin)'],
      ['Google Magenta — bộ dữ liệu MAESTRO v3 (MIDI các bản biểu diễn piano thật, có bốn bản Sonata số 2), dùng để kiểm cao độ', 'https://magenta.tensorflow.org/datasets/maestro'],
      ['Yuhe Wang (2025), An Exploration of the Selected Piano Music of Frederic Chopin and Alexander Scriabin — luận án DMA, University of Maryland', 'https://drum.lib.umd.edu/bitstreams/dc35a0f3-3c1e-4335-a35f-eefd792b9782/download'],
      ['Emily Chialin Chiang (2013), Rubato and Climax Projection in Two Piano Sonatas by Scriabin — luận án DMA, University of Toronto', 'https://tspace.library.utoronto.ca/bitstream/1807/35791/1/Chiang_Emily_CL_201306_DMA_thesis.pdf'],
      ['Kholopov, "Scriabin and the Harmony of the Twentieth Century" (bản dịch tiếng Anh của bài 1993)', 'https://www.scriabin-association.com/yuri-xholopov-scriabin-and-the-harmony-of-the-twentieth-century/'],
      ['Indiana University Press — Modernism in Russian Piano Music: đánh giá mô hình hoà âm Scriabin của Dernova', 'https://publish.iupress.indiana.edu/read/4aeb6a11-b572-42e9-a1d9-c9dd1ceeb44a/section/98f7c02e-844c-4853-8662-4cac540da2b8'],
      ['P. Sabbagh (2003), The Development of Harmony in Scriabin\'s Works — mô tả của nhà phân phối', 'https://imusic.fi/books/9781581125955/peter-sabbagh-2003-the-development-of-harmony-in-scriabins-works-paperback-bog'],
      ['Bae Su-jin (2000), luận văn thạc sĩ về Sonata số 2 của Scriabin, Đại học Nữ Ewha (Hàn Quốc) — chỉ đọc được tóm tắt', 'https://dspace.ewha.ac.kr/handle/2015.oak/184674'],
      ['Cha Min-hee (차민희) (2015), A. Scriabin Piano Sonata Op. 19 No. 2에 관한 분석 연구 — luận văn thạc sĩ, Đại học Chosun (Hàn Quốc), giấy phép CC BY 2.0 KR', 'https://oak.chosun.ac.kr/bitstream/2020.oak/12374/2/A.%20Scriabin%20Piano%20Sonata%20Op.%2019%20No.%202%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B6%84%EC%84%9D%20%EC%97%B0%EA%B5%AC.pdf'],
    ],
    body: `
::wiki Alexander_Scriabin | Alexander Scriabin (1872–1915)

## 1. Lý do chọn đề tài
Trong lịch sử âm nhạc Nga cuối thế kỷ XIX – đầu thế kỷ XX, Alexander Nikolayevich Scriabin (1872 – 1915) là một trong số ít nhà soạn nhạc mà toàn bộ con đường sáng tác có thể đọc như một quá trình biến đổi liên tục của ngôn ngữ hoà âm: từ hoà âm chức năng mang đậm dấu ấn Chopin và Liszt ở các tác phẩm thời trẻ, tới hệ thống hoà âm dựa trên những cấu trúc đối xứng và "hợp âm huyền bí" ở các tác phẩm cuối đời. Mười bản sonata cho piano của ông trải dài gần trọn quá trình ấy, và vì vậy thường được giới nghiên cứu xem như "cuốn nhật ký" của tư duy hoà âm Scriabin.

Sonata số 2 giọng Sol♯ thứ, Op. 19, mang tên *Sonate-Fantaisie*, được Scriabin bắt đầu ở Genova năm 1892, hoàn thành ở Crimea năm 1897 và được nhà Belaieff (Leipzig) xuất bản năm 1898. Về mặt niên đại, tác phẩm đứng giữa Sonata số 1 Op. 6 (1892) — còn gần với ngôn ngữ của Chopin và Liszt — và Sonata số 3 Op. 23 (1897 – 1898), nơi phong cách riêng của Scriabin đã định hình rõ. Vì vị trí ấy, Sonata số 2 thường được nhắc đến như một **sonata chuyển tiếp**. Tuy vậy, nhận định này phần lớn mới dừng ở mức khái quát: người ta chỉ ra rằng tác phẩm "vẫn còn lãng mạn" nhưng "đã có màu sắc riêng", mà ít khi chứng minh cụ thể tính chuyển tiếp ấy nằm ở đâu trong cấu trúc âm nhạc. Chúng tôi chưa xác định được ai là người đầu tiên dùng chữ "chuyển tiếp" cho tác phẩm này; trong tiểu luận, chúng tôi coi đó là một nhận định phổ biến cần được kiểm chứng trên bản phổ.

Theo chúng tôi, hoà âm là bình diện thể hiện rõ nhất tính chuyển tiếp ấy. Trên bề mặt, tác phẩm vẫn vận hành theo logic chức năng chủ – hạ át – át, với kết, ly điệu và chuyển giọng theo đúng các quy tắc của hoà âm cổ điển. Nhưng ở tầng sâu hơn, nhiều hiện tượng đã vượt ra ngoài khuôn khổ ấy: hợp âm át có quãng 5 hạ mang màu sắc toàn cung, hợp âm sáu tăng được viết trùng âm thành hợp âm bảy át của giọng khác, hợp âm thêm nốt và hợp âm quãng 4 treo không giải quyết, những pedal kéo dài làm các chức năng chồng lên nhau. Đây chính là những yếu tố mà về sau sẽ được Scriabin phát triển thành hệ thống riêng.

Bên cạnh đó, hình thức "sonata – fantasia" hai chương của tác phẩm cũng đặt ra những câu hỏi đáng chú ý về quan hệ giữa hình thức và kế hoạch giọng: chương I đặt cả ba chủ đề của phần trình bày ở giọng bậc III, đưa phần tái hiện sang giọng bậc VI và kết thúc ở Mi trưởng, không trở về giọng chủ Sol♯ thứ.

Cuối cùng, qua khảo sát tư liệu (trình bày ở mục 2), chúng tôi chưa tìm thấy công trình nào phân tích hoà âm Sonata số 2 một cách chi tiết, theo từng ô nhịp, bằng hệ thống lý thuyết chức năng của trường phái Nga – Xô viết, là hệ thống đang được giảng dạy trong các nhạc viện ở Việt Nam. Đó là những lý do khiến chúng tôi chọn đề tài **"Thủ pháp hoà âm trong Sonata số 2 Op. 19 của A. Scriabin"**.

## 2. Lịch sử nghiên cứu đề tài
Để có cái nhìn hệ thống, chúng tôi chia các công trình đã khảo sát thành hai nhóm: nhóm thứ nhất gồm những nghiên cứu về **hoà âm của Scriabin nói chung**, được trình bày theo từng thời kỳ; nhóm thứ hai gồm những nghiên cứu **riêng về Sonata số 2**. Trong mỗi nhóm, các công trình được xếp theo trình tự thời gian công bố.

**2.1. Các công trình nghiên cứu hoà âm Scriabin nói chung**

*Thời kỳ trước năm 1917.* Công trình sớm nhất mà chúng tôi biết tới là cuốn *Скрябин* (Moskva, 1916) của Leonid Sabaneev, một nhà phê bình và nhà soạn nhạc có quan hệ gần gũi với Scriabin. Sách mô tả quan niệm âm thanh và các loại hợp âm của Scriabin, chủ yếu thuộc giai đoạn sáng tác cuối đời, từ góc nhìn của người đương thời. Chúng tôi chưa tiếp cận được toàn văn cuốn sách và chỉ biết đến nó qua các nguồn dẫn thứ cấp.

*Thời kỳ Xô viết.* Công trình tiêu biểu nhất của giai đoạn này là cuốn *Гармония Скрябина* (Hoà âm Scriabin, Leningrad) của Varvara Dernova. Các nguồn mà chúng tôi tiếp cận ghi năm công bố khác nhau: phần lớn ghi năm 1968, trong khi một nguồn tiếng Anh ghi đây là luận án năm 1973; chúng tôi chưa đối chiếu được bản gốc. Dernova xây dựng mô hình hoà âm Scriabin trên cơ sở hợp âm át và các biến thể của nó. Theo đánh giá trong một chuyên khảo về âm nhạc piano Nga do Indiana University Press xuất bản, mô hình này có giá trị lớn trong việc lý giải các tác phẩm thời kỳ trưởng thành của Scriabin, nhưng ít giải thích được các tác phẩm cuối đời vốn dựa trên nguyên tắc đối xứng. Cũng trong giai đoạn này, S. Pavchinsky có công trình về các tác phẩm thời kỳ muộn của Scriabin (*Произведения Скрябина позднего периода*, thường được ghi năm 1969), song chúng tôi chưa xác minh được năm xuất bản và nội dung cụ thể.

*Các nghiên cứu phương Tây những năm 1980.* Thập niên 1980 chứng kiến sự quan tâm mạnh mẽ của giới lý luận phương Tây đối với Scriabin. Jay Reise (1983), trong bài "Late Skriabin: Some Principles behind the Style" (*19th-Century Music*, số 6/3), tìm cách xác lập những nguyên tắc cấu tạo hợp âm ở các tác phẩm cuối đời. George Perle (1984), trong bài "Scriabin's Self-Analyses" (*Music Analysis*, số 3/2), dựa trên những ghi chép tự phân tích của chính nhà soạn nhạc để làm sáng tỏ các cấu trúc đối xứng. Công trình đồ sộ nhất của giai đoạn này là chuyên khảo *The Music of Alexander Scriabin* (Yale University Press, 1986) của James Baker, đi từ các tác phẩm có điệu tính tới thời kỳ cuối, kết hợp phương pháp phân tích Schenker với lý thuyết tập hợp âm. Ba công trình này chúng tôi tiếp cận chủ yếu qua các nguồn dẫn thứ cấp.

*Thời kỳ hậu Xô viết và những năm gần đây.* Năm 1993, Yuri Kholopov công bố bài "Скрябин и гармония XX века" (Scriabin và hoà âm thế kỷ XX) trong tập *Учёные записки* số 1 của Bảo tàng Tưởng niệm Scriabin ở Moskva; bài được dịch sang tiếng Anh trong các năm 2006 – 2007. Kholopov khẳng định Scriabin là một trong những người khai mở "hoà âm mới" của thế kỷ XX. Năm 2003, Peter Sabbagh xuất bản cuốn *The Development of Harmony in Scriabin's Works*, với luận điểm rằng hoà âm Scriabin phát triển từng bước, mỗi bước đều có thể suy ra từ bước trước, qua đó nối liền âm nhạc thế kỷ XIX với thế kỷ XX; chúng tôi mới tiếp cận cuốn sách qua phần giới thiệu của nhà phát hành. Gần đây nhất, luận án tiến sĩ nghệ thuật biểu diễn của Yuhe Wang (University of Maryland, 2025) so sánh âm nhạc piano của Chopin và Scriabin, trong đó có nhận xét chung về màu sắc hoà âm và việc sử dụng các giọng xa.

**2.2. Các công trình nghiên cứu riêng về Sonata số 2**

Năm 2000, Bae Su-jin bảo vệ luận văn thạc sĩ về Sonata số 2 tại Đại học Nữ Ewha (Hàn Quốc). Theo phần tóm tắt mà chúng tôi đọc được, tác giả xác định chương I viết theo hình thức sonata, chương II theo hình thức ba đoạn có coda, đồng thời ghi nhận các hiện tượng như hợp âm ba bỏ quãng 3, hợp âm xây theo quãng 4 và chuyển giọng trùng âm. Năm 2007, một luận án tại Đại học Kentucky (Hoa Kỳ) bàn về các sonata của Scriabin, song chúng tôi không truy cập được văn bản. Năm 2013, Emily Chiang bảo vệ luận án tiến sĩ nghệ thuật biểu diễn tại University of Toronto với đề tài về rubato và cách xây dựng cao trào trong hai sonata của Scriabin; đây là một nghiên cứu thuần tuý từ góc độ biểu diễn. Năm 2015, Cha Min-hee bảo vệ luận văn thạc sĩ tại Đại học Chosun (Hàn Quốc), phân tích tác phẩm theo từng đoạn và theo các thủ pháp hình thức, tiết tấu và hoà âm, trên cơ sở bản in Peters năm 1971. Đây là công trình chi tiết nhất về Sonata số 2 mà chúng tôi tiếp cận được.

Ở Việt Nam, qua tra cứu các nguồn mở, chúng tôi chưa tìm thấy tiểu luận, luận văn hay bài nghiên cứu nào về hoà âm Scriabin nói chung cũng như về Sonata số 2 nói riêng. Có thể thư viện các nhạc viện còn lưu giữ những tài liệu chưa được số hoá mà chúng tôi chưa có điều kiện khảo sát.

**2.3. Nhận xét, đánh giá các công trình đi trước**

Các công trình thuộc nhóm thứ nhất tập trung chủ yếu vào giai đoạn sáng tác cuối đời của Scriabin, với các vấn đề như hợp âm huyền bí, cấu trúc đối xứng và sự tan rã của điệu tính. Các tác phẩm thời kỳ đầu và thời kỳ chuyển tiếp thường chỉ được nhắc tới như tiền đề. Tuy vậy, chính những công trình này cung cấp cho chúng tôi khung lý thuyết quan trọng. Mô hình của Dernova, lấy hợp âm át làm gốc của hoà âm Scriabin, đặc biệt phù hợp với đối tượng của tiểu luận, bởi trong Sonata số 2 các biến thể của hợp âm át — hợp âm bảy át quãng 5 hạ, hợp âm chín át, hợp âm át có âm ♭6 — đã xuất hiện với tần suất cao. Các công trình của Kholopov và Sabbagh gợi ý cách nhìn hoà âm Scriabin như một quá trình liên tục từ truyền thống tới cái mới, đúng với hướng tiếp cận "chuyển tiếp" mà tiểu luận theo đuổi.

Các công trình thuộc nhóm thứ hai còn ít và phần lớn được thực hiện ở Hàn Quốc và Bắc Mỹ. Luận án của Chiang nghiêng về biểu diễn; các luận văn của Bae và Cha phân tích tác phẩm theo đoạn và theo thủ pháp, nhưng chưa xác định chức năng của từng hợp âm trong tiến trình hoà âm. Luận văn của Cha Min-hee là tài liệu tham khảo quý giá nhất, song ở một số chỗ cách chia hình thức và cách đọc giọng của tác giả khác với văn bản bản in đầu Belaieff; luận văn cũng có một số lỗi in (những điểm này được chúng tôi trình bày ở chương 4). Không công trình nào sử dụng hệ thống ký hiệu chức năng của trường phái Nga – Xô viết.

**2.4. Kết luận về tình hình nghiên cứu**

Những công trình nói trên đã giúp ích cho chúng tôi rất nhiều trong việc thực hiện tiểu luận: nhóm thứ nhất cung cấp khung lý thuyết về hướng phát triển của hoà âm Scriabin, nhóm thứ hai cung cấp các mốc hình thức và những nhận định để đối chiếu. Qua những tư liệu chúng tôi tìm thấy, không có tư liệu nào trùng với đề tài phân tích thủ pháp hoà âm Sonata số 2 của Scriabin theo từng ô nhịp, bằng hệ thống lý thuyết chức năng của trường phái Nga – Xô viết.

## 3. Mục đích và nhiệm vụ nghiên cứu
Mục đích của tiểu luận là làm sáng tỏ các thủ pháp hoà âm trong Sonata số 2 Op. 19 của Scriabin, qua đó xác định cụ thể tính chuyển tiếp của tác phẩm trong tiến trình phát triển ngôn ngữ hoà âm của nhà soạn nhạc.

Để đạt mục đích đó, tiểu luận đặt ra các nhiệm vụ sau: hệ thống hoá cơ sở lý thuyết về hình thức sonata và về hoà âm chức năng cổ điển cũng như hoà âm cuối thế kỷ XIX – đầu thế kỷ XX; phân tích tiến trình hoà âm của hai chương theo từng ô nhịp; khái quát các thủ pháp hoà âm đặc trưng của tác phẩm và đối chiếu kết quả với các nghiên cứu đi trước.

## 4. Đối tượng và phạm vi nghiên cứu
Đối tượng nghiên cứu của tiểu luận là các thủ pháp hoà âm trong Sonata số 2 giọng Sol♯ thứ Op. 19 của A. Scriabin.

Về phạm vi, tiểu luận khảo sát toàn bộ hai chương của tác phẩm (chương I gồm 136 ô nhịp, chương II gồm 110 ô nhịp), dựa trên văn bản bản in đầu của nhà Belaieff, Leipzig, 1898. Tiểu luận giới hạn trong lĩnh vực hoà âm. Hình thức chỉ được sử dụng làm khung để định vị các hiện tượng hoà âm; các vấn đề tiết tấu, phức điệu và biểu diễn nằm ngoài phạm vi nghiên cứu và chỉ được đề cập khi có liên quan trực tiếp đến hoà âm.

## 5. Phương pháp nghiên cứu
Tiểu luận sử dụng phương pháp tư liệu để thu thập và hệ thống hoá các công trình đi trước, đồng thời xác lập văn bản nghiên cứu. Bản in đầu Belaieff năm 1898 được dùng làm văn bản gốc; cao độ các nốt được đối chiếu thêm với bản ghi MIDI của một buổi biểu diễn thực trong bộ dữ liệu MAESTRO v3. Khi hai nguồn không thống nhất, chúng tôi theo bản phổ.

Phương pháp chủ đạo là phân tích – tổng hợp: tiến trình hoà âm được phân tích theo từng ô nhịp, xác định cấu trúc, bậc và chức năng của từng hợp âm, sau đó tổng hợp thành các thủ pháp đặc trưng của tác phẩm. Phương pháp so sánh – đối chiếu được dùng để so sánh tác phẩm với các quy tắc của hoà âm cổ điển, nhằm phân biệt yếu tố truyền thống với yếu tố mới, và để đối chiếu kết quả phân tích với các nghiên cứu đi trước.

## 6. Đóng góp của tiểu luận
Tiểu luận cung cấp một bản phân tích hoà âm chi tiết theo từng ô nhịp cho cả hai chương của Sonata số 2, sử dụng hệ thống ký hiệu chức năng của trường phái Nga – Xô viết. Trên cơ sở đó, tiểu luận góp phần chứng minh cụ thể nhận định về tính chuyển tiếp của tác phẩm, và có thể làm tài liệu tham khảo cho việc học tập, giảng dạy hoà âm và phân tích tác phẩm ở bậc đại học.

## 7. Bố cục của tiểu luận
Ngoài phần Mở đầu, Kết luận, Tài liệu tham khảo và Phụ lục, nội dung chính của tiểu luận gồm bốn chương:

- [[scriabin-op19-co-so-ly-thuyet|Chương 1. Cơ sở lý luận và khái quát về tác phẩm]]
- [[scriabin-op19-chuong-1|Chương 2. Thủ pháp hoà âm trong chương I (Andante)]]
- [[scriabin-op19-chuong-2|Chương 3. Thủ pháp hoà âm trong chương II (Presto)]]
- [[scriabin-op19-thu-phap|Chương 4. Đặc điểm thủ pháp hoà âm và tính chuyển tiếp của tác phẩm]]
- [[scriabin-op19-ket-luan|Kết luận và tài liệu tham khảo]]
- [[scriabin-op19-phu-luc|Phụ lục. Bảng phân tích hoà âm theo từng ô nhịp]]
`,
  },
  {
    slug: 'scriabin-op19-co-so-ly-thuyet',
    title: 'Chương 1. Cơ sở lý luận và khái quát về tác phẩm',
    category: 'analysis',
    summary: 'Tiểu luận Sonata số 2 Scriabin, chương 1: liên khúc sonata và các dạng hình thức sonata, hệ thống ký hiệu hoà âm, lý thuyết hoà âm chức năng và hoà âm cuối thế kỷ XIX – đầu thế kỷ XX, khái quát về tác phẩm.',
    body: `
## 1.1. Liên khúc sonata và các dạng hình thức sonata
Lý thuyết về liên khúc sonata và hình thức sonata được trình bày có hệ thống trong các giáo trình hình thức âm nhạc của trường phái Xô viết, tiêu biểu là cuốn *Музыкальная форма* (Hình thức âm nhạc) của I. Sposobin, in lần đầu năm 1947 và được tái bản nhiều lần; cuốn *Анализ музыкальных произведений* (Phân tích tác phẩm âm nhạc, 1967) của L. Mazel và V. Zukkerman; cuốn *Музыкальная форма* (1974) của Yu. Tyulin, T. Bershadskaya và I. Pustylnik. Ở Việt Nam, hệ thống này được kế thừa và trình bày trong giáo trình *Phân tích tác phẩm âm nhạc* của PGS. TS Nguyễn Thị Nhung (Nhạc viện Hà Nội, 2006). Tiểu luận dựa trên các giáo trình này để xác lập các khái niệm về hình thức (xem thêm [[ptam-sonata]], [[hinh-thuc-sonata]]).

**Liên khúc sonata** (сонатный цикл) là một chuỗi các chương tương phản về tốc độ, tính chất và giọng điệu, thường gồm ba hoặc bốn chương, trong đó chương thứ nhất, và nhiều khi cả chương cuối, được viết theo hình thức sonata. Các chương liên kết với nhau bằng sự thống nhất về giọng chủ và về ý đồ nghệ thuật chung.

**Hình thức sonata** gồm ba phần chính là trình bày, phát triển và tái hiện, thường có thêm phần mở đầu và coda. Trong phần trình bày, chủ đề chính vang lên ở giọng chính, chủ đề phụ ở một giọng gần, thường là giọng át hoặc giọng song song; giữa hai chủ đề là đoạn nối, sau chủ đề phụ là chủ đề kết. Phần phát triển biến đổi các chất liệu chủ đề qua nhiều giọng khác nhau. Phần tái hiện đưa các chủ đề trở lại, trong đó chủ đề phụ được chuyển về giọng chính. Nguyên tắc thống nhất giọng ở phần tái hiện là một trong những đặc trưng cơ bản của hình thức sonata cổ điển.

**Sonata tự do** hay sonata – fantasia là dạng liên khúc sonata có cấu trúc được rút gọn hoặc thay đổi trật tự các chương, mang tinh thần ngẫu hứng của thể loại fantasia. Tiền lệ trực tiếp và nổi tiếng nhất là hai sonata *quasi una fantasia* Op. 27 của Beethoven, trong đó Sonata số 14 Op. 27 số 2 mở đầu bằng một chương chậm (xem [[phan-tich-anh-trang-chuong-1]]). Sonata số 2 của Scriabin chỉ có hai chương, chậm rồi nhanh, và được chính tác giả đặt tên *Sonate-Fantaisie*.

**Rondo – sonata** là hình thức kết hợp nguyên tắc luân phiên điệp khúc của rondo với nguyên tắc tái hiện có thống nhất giọng của sonata (xem [[ptam-rondo-sonata]]). Hình thức này thường dùng cho chương cuối của liên khúc sonata cổ điển. Chương II của Sonata số 2 không viết theo rondo – sonata mà theo hình thức ba đoạn có coda, như các nhà nghiên cứu Leikin, Bae và Cha đều đã xác định.

## 1.2. Hệ thống ký hiệu hoà âm cổ điển và hiện đại
Trong lý luận âm nhạc hiện nay tồn tại hai hệ thống ký hiệu hoà âm chính. **Hệ thống bậc** của phương Tây dùng chữ số La Mã ghi bậc của âm gốc hợp âm trong giọng; hệ thống này được G. Weber đề xuất từ đầu thế kỷ XIX và được hoàn thiện trong các giáo trình thế kỷ XX, tiêu biểu là *Harmony* (1941) của W. Piston, trong đó chữ hoa chỉ hợp âm trưởng, chữ thường chỉ hợp âm thứ.

**Hệ thống chức năng** do H. Riemann khởi xướng cuối thế kỷ XIX, được G. Catoire đưa vào nước Nga, và được chuẩn hoá trong sách giáo khoa hoà âm của bốn tác giả I. Dubovsky, S. Evseev, I. Sposobin và V. Sokolov (1937 – 1938). Hệ thống này dùng các chữ cái T (chủ), S (hạ át), D (át) để ghi chức năng, kết hợp với chữ số La Mã để ghi bậc và chữ số Ả Rập để ghi thể đảo (xem [[ky-hieu-chuc-nang-truong-phai-nga]], [[hoa-am-truong-phai-nga-xo-viet]]). Đây là hệ thống được giảng dạy trong các nhạc viện Nga – Xô viết và Việt Nam, và được tiểu luận sử dụng xuyên suốt.

Bên cạnh đó, với hoà âm cuối thế kỷ XIX và thế kỷ XX, các nhà nghiên cứu còn dùng **tên hợp âm theo chữ cái** (B7, A♯ø7, E7♭9…) để chỉ âm thanh thực của hợp âm, độc lập với chức năng. Trong tiểu luận, tên chữ cái chỉ được dùng để nêu cấu trúc âm thanh; chức năng và bậc luôn được ghi theo hệ thống Nga – Xô viết.

Phần cơ sở lý thuyết sử dụng đúng hệ thống ký hiệu chức năng của sách bốn tác giả. Riêng trong phần phân tích tác phẩm (chương 2, chương 3, chương 4 và phụ lục), để người đọc dễ theo dõi tiến trình trên bản phổ, chúng tôi ghi các hợp âm phụ và hợp âm biến âm theo **bậc cụ thể trong giọng đang xét**, giữ ký hiệu chức năng cho các trường hợp cơ bản (T, S, D, K64, D7 và các thể đảo). Bảng 1.1 đối chiếu hai cách ghi này với hệ thống phương Tây.

**Bảng 1.1. Hệ thống ký hiệu chức năng Nga – Xô viết và cách ghi trong phần phân tích**
| Ký hiệu Nga – Xô viết | Nghĩa | Tương đương phương Tây | Cách ghi trong phần phân tích |
|---|---|---|---|
| **T, S, D** / **t, s, d** | Chủ, hạ át, át — chữ thường khi hợp âm thứ | I, IV, V / i, iv, v | giữ nguyên |
| **T6, T64, S6, s64…** | Thể đảo: hợp âm sáu, hợp âm bốn sáu | I6, I6/4, IV6, iv6/4 | giữ nguyên |
| **K64** | Hợp âm bốn sáu kết | Cad. 6/4 | giữ nguyên |
| **D7, D65, D43, D2** | Hợp âm bảy át và ba thể đảo | V7, V6/5, V4/3, V4/2 | giữ nguyên |
| **D9, D9♭** | Hợp âm chín át (quãng 9 lớn / nhỏ) | V9, V♭9 | giữ nguyên |
| **D7♭5** | Hợp âm bảy át có quãng 5 hạ | V7♭5 | giữ nguyên |
| **SII, SII7, SII65, SII43** | Hạ át bậc II và các thể của hợp âm bảy bậc II | ii, ii7 (iiø7), ii6/5, ii4/3 | II, II7, II65, II43 |
| **TSVI, DTIII** | Bậc VI (chủ – hạ át), bậc III (át – chủ) | vi / VI, iii / III | VI, III |
| **DVII7, DVII65** | Hợp âm bảy cảm âm (nhỏ hoặc giảm) | viiø7 / vii°7 | VII7, VII65 |
| **DD, DD7** | Át của át | V/V, V7/V | II♯3, II7♯3 (bậc II có quãng 3 nâng) |
| **D7→S, D→x** | Hợp âm át phụ — ly điệu sang bậc x | V7/IV, V/x | D7→IV, D→x |
| **SII♭6 (N)** | Hợp âm sáu Napoli (bậc II hạ) | N6, ♭II6 | II♭6 |
| **DDVII6♭3** | Át của át bậc VII, quãng 3 hạ, hợp âm sáu | It+6 (6 tăng Ý) | IV♯6♭3 |
| **DD43♭5** | Hợp âm bảy át của át, quãng 5 hạ, hợp âm ba bốn | Fr+6 (6 tăng Pháp) | II43♯3♭5 |
| **DDVII65♭3** | Hợp âm bảy cảm âm của át, quãng 3 hạ, hợp âm năm sáu | Ger+6 (6 tăng Đức) | IV♯65♭3 |

Số bậc luôn tính theo giọng đang xét. Tên hợp âm chữ cái (E7, A♯ø7, G♯m…) chỉ âm thanh thực, không chỉ chức năng.

Có thể thấy ba hợp âm sáu tăng, dù mang tên gọi riêng trong hệ thống phương Tây, đều thuộc nhóm hợp âm át của giọng bậc V (nhóm "át kép" theo cách gọi của sách bốn tác giả): chúng có chung hai âm quan trọng là bậc IV nâng và bậc VI hạ, tạo thành quãng 6 tăng cùng hướng về âm át.

## 1.3. Cơ sở lý thuyết hoà âm
**Hoà âm chức năng cổ điển.** Theo sách giáo khoa bốn tác giả, các hợp âm trong giọng được tổ chức thành ba nhóm chức năng: nhóm chủ (T) có tính ổn định, nhóm hạ át (S) và nhóm át (D) có tính không ổn định với mức độ căng khác nhau. Tiến trình hoà âm cơ bản đi theo vòng T – S – D – T và được khép lại bằng các kết: kết trọn (D – T), kết nửa (dừng trên D), kết plagal (S – T) và kết ngắt (D đi tới một hợp âm khác thay cho T, phổ biến nhất là bậc VI). Trong cách gọi của người Việt Nam, kết ngắt còn được gọi là kết tránh hay kết lừa (xem [[chuc-nang-hoa-am]], [[cau-ket]]). Các nguyên tắc nối hợp âm và dẫn giọng bốn bè được tiểu luận đối chiếu thêm với sách giáo khoa hoà âm thực hành của N. Rimsky-Korsakov và giáo trình *Harmony* của W. Piston.

**Ly điệu và chuyển giọng.** Sách bốn tác giả phân biệt rõ hai hiện tượng. Ly điệu (отклонение) là sự chạm qua một giọng khác trong thời gian ngắn, thường bằng hợp âm át của một bậc nào đó trong giọng (hợp âm át phụ), mà không xác lập giọng mới; sau đó tiến trình trở lại giọng chính. Chuyển giọng (модуляция) là sự xác lập một giọng mới, được khẳng định bằng kết ở giọng ấy. Chuyển giọng có thể thực hiện qua hợp âm chung của hai giọng, qua biến âm cromatic, hoặc qua trùng âm. **Chuyển giọng trùng âm** dựa trên việc thay đổi cách viết của một âm hay một hợp âm, qua đó thay đổi chức năng của nó, cho phép chuyển nhanh sang các giọng xa (xem [[hop-am-at-phu]], [[chuyen-giong]], [[trung-am]]).

**Hoà âm cromatic cuối thế kỷ XIX.** Trong âm nhạc lãng mạn muộn, hoà âm chức năng được mở rộng bằng nhiều phương tiện: các hợp âm biến âm thuộc nhóm hạ át và nhóm át của át (hợp âm sáu Napoli, các hợp âm sáu tăng), hợp âm mượn từ điệu thức cùng tên, quan hệ quãng 3 giữa các giọng và hợp âm (trung âm cromatic), các pedal kéo dài trên âm chủ hoặc âm át, các hợp âm thêm nốt (xem [[hoa-am-cromatic]], [[hop-am-sau-tang]], [[hop-am-napoli]], [[trung-am-cromatic]], [[bass-ngan]]). Những phương tiện này làm cho điệu tính trở nên rộng và linh hoạt hơn, nhưng vẫn chưa phá vỡ nền tảng chức năng.

**Hoà âm mới và vô điệu tính.** Từ đầu thế kỷ XX, điệu tính chức năng dần nhường chỗ cho những nguyên tắc tổ chức khác: hợp âm xây theo quãng 4, gam toàn cung, các cấu trúc đối xứng, và cuối cùng là vô điệu tính, nơi không còn một âm chủ làm trung tâm. Ở trường phái Nga, Yu. Kholopov là người hệ thống hoá lý thuyết hoà âm thế kỷ XX trong cuốn *Очерки современной гармонии* (Khảo luận về hoà âm hiện đại, 1974). Sonata số 2 của Scriabin chưa thuộc lĩnh vực vô điệu tính; tuy vậy, như sẽ được chứng minh ở các chương sau, tác phẩm đã chứa những yếu tố báo trước hướng phát triển ấy.

## 1.4. Khái quát về tác phẩm
**Lịch sử sáng tác.** Scriabin bắt đầu viết Sonata số 2 ở Genova năm 1892 và hoàn thành ở Crimea năm 1897. Bản in đầu của nhà Belaieff (Leipzig, 1898) mang tên *Sonate-Fantaisie № 2, en sol dièse mineur*, đầu bản nhạc ghi niên đại "1892–1897". Theo nhà nghiên cứu A. Leikin (2011), chương Presto được viết trước chương đầu khoảng bốn năm. Scriabin biểu diễn tác phẩm lần đầu tại Salle Érard, Paris, ngày 5 tháng 5 năm 1896, khi tác phẩm còn chưa hoàn chỉnh. Theo F. Bowers (1996), tờ chương trình buổi hoà nhạc ấy ghi giọng của tác phẩm là La♭ thay vì Sol♯ — một chi tiết nhỏ nhưng phù hợp một cách thú vị với tư duy trùng âm chi phối toàn bộ tác phẩm. *(Các thông tin trên được chúng tôi dẫn qua bài viết về tác phẩm trên Wikipedia, vốn dẫn Leikin 2011, Ballard và Bengtson 2017, Bowers 1996.)*

**Nội dung hình tượng.** Wikipedia dẫn một chương trình về biển do người viết tiểu sử Yuri Engel ghi lại, theo Leikin: chương I là đêm phương Nam yên tĩnh bên bờ biển, phần phát triển là biển sâu tối và động; đoạn Mi trưởng là ánh trăng vuốt ve sau bóng tối; chương Presto là mặt biển mênh mông nổi sóng. Câu chương trình này có ít nhất hai bản dịch tiếng Anh khác nhau, và chúng tôi chưa đối chiếu được nguyên văn tiếng Nga, vì vậy tiểu luận chỉ dùng nó như một thông tin tham khảo.

**Cấu trúc tổng thể.** Tác phẩm gồm hai chương, chậm rồi nhanh, theo mô hình *sonata quasi una fantasia* của Beethoven. Chương I, Andante (nốt đen = 60), giọng Sol♯ thứ, nhịp 3/4, dài 136 ô nhịp, viết theo hình thức sonata có phần mở đầu và coda. Chương II, Presto (nốt trắng = 96 – 100), giọng Sol♯ thứ, nhịp 3/2, dài 110 ô nhịp, viết theo hình thức ba đoạn có coda. Các mốc hình thức dưới đây được chúng tôi xác định trên bản Belaieff và khớp với cách chia của Leikin.

::form Mở_đầu:12 CĐ1:6 Chuyển:4 CĐ2:14 Chuyển:9 CĐ3:6 Kết:6 Phát_triển:31 CĐ1:6 Chuyển:5 CĐ2:13 Chuyển:9 CĐ3:6 Coda:9 | Sơ đồ 1.1. Chương I — hình thức sonata (số dưới mỗi khối là số ô nhịp)
::form A:16 Xen:8 A:8 Kết:8 Mi♭–Si♭:12 F♯:6 Si♭–Rê♭–Đô♯:12 Về_át:8 A′:14 Coda:18 | Sơ đồ 1.2. Chương II — hình thức ba đoạn có coda: A (ô 1–40), B (ô 41–78), A′ (ô 79–92), coda (ô 93–110)

Điểm đáng chú ý nhất về hình thức là kế hoạch giọng của chương I: cả ba chủ đề của phần trình bày được đặt ở Si trưởng (giọng song song, bậc III), phần tái hiện chuyển cả ba sang Mi trưởng (bậc VI), và chương kết thúc ở Mi trưởng. Như vậy, nguyên tắc thống nhất giọng của tái hiện sonata cổ điển đã được thay bằng một quan hệ quãng 3 giữa trình bày và tái hiện — một đặc điểm mà chúng tôi sẽ phân tích kỹ ở chương 2.

**Văn bản nghiên cứu.** Toàn bộ số ô nhịp và tên nốt trong tiểu luận được đọc trên bản in đầu Belaieff 1898 (lưu trữ tại IMSLP). Chúng tôi tự đếm và xác định chương I có 136 ô, chương II có 110 ô. Cao độ được đối chiếu thêm với bản ghi MIDI của một buổi biểu diễn trong bộ dữ liệu MAESTRO v3; do MIDI ghi lại âm thanh biểu diễn thực, có thể lẫn nốt chơi sai hoặc tiếng pedal nhoè, nên khi hai nguồn khác nhau chúng tôi theo bản phổ. Ví dụ, ở ô 41 chương II, bản ghi MIDI có âm E♮ trong khi bản in ghi E♭.

## Tiểu kết chương 1
Chương 1 đã xác lập cơ sở lý luận của tiểu luận. Về hình thức, các khái niệm liên khúc sonata, hình thức sonata, sonata tự do và rondo – sonata được tiếp nhận theo các giáo trình của trường phái Xô viết và giáo trình của Nguyễn Thị Nhung; theo đó, Sonata số 2 là một liên khúc sonata tự do hai chương, với chương I ở hình thức sonata và chương II ở hình thức ba đoạn có coda. Về ký hiệu, tiểu luận sử dụng hệ thống chức năng của trường phái Nga – Xô viết; riêng trong phần phân tích tác phẩm, các hợp âm phụ và hợp âm biến âm được ghi theo bậc cụ thể trong giọng, đối chiếu ở bảng 1.1. Về hoà âm, tiểu luận dựa trên lý thuyết hoà âm chức năng cổ điển, có đối chiếu với lý thuyết hoà âm cromatic cuối thế kỷ XIX và lý thuyết hoà âm thế kỷ XX, để xác định những yếu tố truyền thống và những yếu tố mới trong tác phẩm.
`,
  },
  {
    slug: 'scriabin-op19-chuong-1',
    title: 'Chương 2. Thủ pháp hoà âm trong chương I (Andante)',
    category: 'analysis',
    summary: 'Tiểu luận Sonata số 2 Scriabin, chương 2: phân tích tiến trình hoà âm chương Andante qua phần mở đầu, trình bày ở Si trưởng, phát triển và tái hiện ở Mi trưởng.',
    body: `
Chương I của Sonata số 2 (Andante, Sol♯ thứ, nhịp 3/4, 136 ô nhịp) viết theo hình thức sonata có phần mở đầu và coda. Trong chương này, chúng tôi lần lượt phân tích tiến trình hoà âm của phần mở đầu, phần trình bày, phần phát triển, phần tái hiện và coda. Các hợp âm được ghi theo bậc trong giọng đang xét; giọng đang xét được nêu rõ ở đầu mỗi đoạn phân tích. Ví dụ nhạc được trích từ bản in đầu Belaieff 1898. Bảng phân tích chi tiết theo từng ô nhịp được trình bày ở [[scriabin-op19-phu-luc|Phụ lục]].

## 2.1. Phần mở đầu (ô 1–12)
Chương I không bắt đầu bằng một hợp âm chủ trọn vẹn mà bằng một motif ba nốt vang trên quãng 5 rỗng G♯ – D♯ (ô lấy đà và ô 1). Hợp âm chủ bị lược bỏ quãng 3 — âm quyết định tính chất trưởng hay thứ — tạo nên một màu sắc "trống" và bất định, được nhấn mạnh thêm bởi dấu lặng ngân ở cuối ô. Ở phách thứ hai của ô 1, Scriabin đặt hợp âm B – D♯ – E♯ – G♯, tức hợp âm bảy nửa giảm bậc VI nâng của Sol♯ thứ giai điệu ở thể năm sáu (VI♯65). Ngay trong ô nhạc đầu tiên, tác giả đã đưa vào một bậc biến âm của điệu thứ giai điệu thay cho các hợp âm chính của giọng.

::scan scriabin2 #1 | Ví dụ 2.1. Ô 1–4: motif quãng 5 rỗng G♯–D♯, hai lần dừng trên dấu ngân; ô 2 dừng trên D2 chưa giải quyết; ô 3–4 có G♯ ở bè trầm

Ô 2 trình bày hợp âm bảy át qua ba thể: D43 (D♯7 với A♯ ở bè trầm), D7 rồi D2 (C♯ ở bè trầm). Theo quy tắc cổ điển, D2 phải giải quyết về T6; nhưng ở đây tiến trình dừng lại trên D2 dưới dấu ngân, để lơ lửng sự căng thẳng của chức năng át. Ô 3 và ô 4 chuyển sang nhóm hạ át: VI64 (E/B), II65, t64, s6, rồi s64 và II43 (A♯ø7 với E ở bè trầm). Điều đáng chú ý là ở các phách mạnh, âm G♯ vẫn được giữ ở bè trầm, khiến toàn bộ các hợp âm nhóm hạ át vang lên trên nền **pedal chủ**. Như vậy, ngay từ những ô nhạc đầu tiên đã xuất hiện hiện tượng chồng chức năng — chức năng hạ át ở các bè trên, chức năng chủ ở bè trầm — một thủ pháp sẽ trở đi trở lại suốt tác phẩm.

::scan scriabin2 #2 | Ví dụ 2.2. Ô 5–10: hợp âm sáu tăng kiểu Ý trên pedal chủ, hợp âm bảy bậc II có quãng 3 nâng (ô 6), bè trầm đi xuống ô 7–9, hợp âm sáu Napoli (ô 9) và hợp âm sáu tăng kiểu Pháp có C𝄪 ở bè trầm (ô 10)

Từ ô 5, nhóm hạ át được đẩy về phía các hợp âm biến âm. Sau chuỗi II65 – t64 – s6, Scriabin đưa vào hợp âm IV♯6♭3 (E – G♯ – C𝄪), tức hợp âm sáu tăng kiểu Ý, vẫn trên pedal chủ G♯. Ở ô 6, hợp âm này nhường chỗ cho hợp âm bảy bậc II có quãng 3 nâng (II7♯3: A♯ – C𝄪 – G♯), tức hợp âm bảy át của giọng bậc V, được nhấn mạnh bằng sắc thái sf; nhưng thay vì giải quyết về hợp âm át, tiến trình lại lùi về IV♯6♭3 ở sắc thái p. Đây là một trường hợp đảo ngược trật tự chức năng thường gặp: hợp âm át của át không tiến về át mà quay về hợp âm sáu tăng, vốn cùng nhóm chức năng với nó.

Các ô 7 – 9 được xây dựng trên một bè trầm đi xuống liền bậc theo kiểu "lament": D – s – (B) – (A♯) – VI64 – G♯. Ở ô 8, bè trầm lặp lại đường đi ấy với hợp âm bảy bậc IV (s7: C♯ – E – G♯ – B). Ô 9 kết thúc chuỗi đi xuống bằng hợp âm sáu bậc II hạ (II♭6: La trưởng với C♯ ở bè trầm), tức hợp âm sáu Napoli, chỉ được chạm qua trong thời gian ngắn rồi trở lại âm chủ. Ô 10 đưa nhóm át của át lên đỉnh điểm bằng hợp âm bảy bậc II có quãng 3 nâng và quãng 5 hạ — hợp âm sáu tăng kiểu Pháp — với cách sắp xếp đặc biệt: âm C𝄪 (quãng 3 nâng của bậc II) nằm ở bè trầm, tạo thành thể năm sáu (II65♯3♭5). Hợp âm này đi về âm chủ G♯ rồi tới hợp âm át ở sắc thái mf.

::scan scriabin2 #3 | Ví dụ 2.3. Ô 11–12: motif mở đầu chuyển lên Rê♯ thứ, dừng trên D2 của Rê♯ thứ; cuối ô 12 lấy đà pp sang chủ đề 1

Ô 11 – 12 nhắc lại motif mở đầu ở giọng bậc V, Rê♯ thứ: quãng 5 rỗng D♯ – A♯, rồi hợp âm bảy nửa giảm bậc VI nâng của Rê♯ thứ (F♯ – A♯ – B♯ – D♯). Ở ô 12, hợp âm bảy át của Rê♯ thứ xuất hiện qua ba thể D43 (A♯7 với E♯ ở bè trầm), D7, D2 (G♯ ở bè trầm), lại dừng dưới dấu ngân. Theo logic cổ điển, D2 của Rê♯ thứ phải giải quyết về t6 của giọng này; nhưng ô 13 lại vào thẳng Si trưởng. Như vậy, phần mở đầu khép lại bằng một sự giải quyết lệch hướng: hợp âm át của giọng bậc V không dẫn về giọng bậc V mà dẫn sang giọng song song.

Tóm lại, phần mở đầu chứa đựng gần như toàn bộ "từ vựng" hoà âm của chương: hợp âm chủ bỏ quãng 3, pedal chủ dưới các hợp âm hạ át, ba loại hợp âm biến âm thuộc nhóm át của át (hợp âm sáu tăng kiểu Ý, kiểu Pháp, hợp âm bảy bậc II có quãng 3 nâng), hợp âm sáu Napoli, và những hợp âm át dừng lại không giải quyết.

## 2.2. Phần trình bày (ô 13–57)
**Chủ đề thứ nhất (ô 13–18).** Chủ đề thứ nhất vang lên ngay ở Si trưởng, giọng song song (bậc III) của Sol♯ thứ, mà không cần đoạn chuyển giọng chuẩn bị. Ô 13 xác lập giọng mới bằng chuỗi T64 – (nốt dựa C♯ trên E) – T – D – T. Ô 14 đặt hợp âm bậc VI của Si trưởng (Sol♯ thứ) có thêm âm E♯ — tức hợp âm thêm nốt sáu nâng — một hợp âm mang sắc thái lưỡng chức năng, vừa là bậc VI của Si trưởng, vừa gợi lại hợp âm chủ của giọng gốc.

::scan scriabin2 #4 | Ví dụ 2.4. Chủ đề 1 ở Si trưởng (ô 13–18); ô 18 có G♮ — hợp âm bảy bậc II mượn từ Si thứ

Ô 15 thực hiện ly điệu sang Rê♯ thứ (bậc III của Si trưởng) bằng chuỗi K64 – D (A♯ – C𝄪 – E♯) – t; âm A♮ ở cuối ô báo trước sự trở lại Si trưởng. Ô 16 dùng hợp âm bảy B7, tức hợp âm bảy át của bậc IV (D7→IV), dẫn tới hợp âm bậc IV (Mi trưởng) ở ô 17. Ô 18 đưa vào hợp âm C♯ – E – G♮ – B: đó là hợp âm bảy bậc II nhưng với âm G♮ thay cho G♯, tức hợp âm bảy nửa giảm bậc II mượn từ Si thứ. Đây là một trường hợp điển hình của hợp âm mượn (xem [[hop-am-muon]]), làm tối màu nhóm hạ át trước khi chủ đề đi vào đoạn nối.

**Đoạn nối (ô 19–22).** Đoạn nối ngắn này chứa một trong những hiện tượng hoà âm quan trọng nhất của tác phẩm. Sau hợp âm T64 ở ô 19, ô 20 vang lên hợp âm F♯ – A♯ – C♮ – E: đây là hợp âm bảy át của Si trưởng với quãng 5 hạ (D7♭5). Về cấu trúc, hợp âm gồm hai quãng 3 trưởng cách nhau một quãng 4 tăng, và về âm thanh, nó trùng với hợp âm sáu tăng kiểu Pháp; bốn âm của nó đều thuộc một gam toàn cung. Ô 21 trở lại hợp âm bậc VI rồi bậc III, với E♯ là âm lướt. Ô 22 nhắc lại hợp âm của ô 20, nhưng lần này Scriabin viết B♯ thay cho C♮ (F♯ – A♯ – B♯ – E).

::scan scriabin2 #5 | Ví dụ 2.5. Ô 19–22: hai lần hợp âm bảy át quãng 5 hạ — viết C♮ ở ô 20, viết B♯ ở ô 22

Hai cách viết cho cùng một âm thanh không phải là sự tuỳ tiện về ký âm. Âm C♮ là quãng 5 hạ của hợp âm át (C♯ hạ xuống), hướng về B; âm B♯ là quãng 4 nâng (B nâng lên), hướng về C♯. Cách viết phản ánh hướng dẫn giọng mà tác giả hình dung, đồng thời cho thấy cùng một tập hợp âm thanh có thể được hiểu theo hai cách khác nhau. Hợp âm át quãng 5 hạ mang màu sắc toàn cung chính là một trong những "mầm" của ngôn ngữ hoà âm Scriabin thời kỳ sau.

**Chủ đề thứ hai (ô 23–36).** Chủ đề thứ hai, ở sắc thái p và với chỉ dẫn rubato, vẫn ở Si trưởng. Ngay hợp âm đầu tiên ở ô 23 là hợp âm chủ có quãng 4 treo thay cho quãng 3 (B – E – F♯); tiếp theo là IV6 và II7. Ở ô 24 và 25, âm G♯ với quãng 4 treo dẫn tới II6 (C♯m/E), VII43 (A♯ø7 với E ở bè trầm) và bậc VI. Quãng 4 treo ở đây không được giải quyết theo quy tắc nốt treo cổ điển mà được duy trì như một thành phần của hợp âm.

::scan scriabin2 #6 | Ví dụ 2.6. Chủ đề 2 (p, rubato): hợp âm chủ có quãng 4 treo (ô 23), B7 trên A♮ ở bè trầm (ô 27), kết trọn ở Si trưởng ô 30

Ô 26 dừng trên hợp âm bảy át (F♯7) có quãng 4 treo. Ô 27 đưa vào hợp âm B7 có quãng 4 treo với âm A♮ ở bè trầm: đó là hợp âm át của bậc IV ở thể hai (D2→IV), giải quyết về IV6 (E/G♯). Ô 28 và 29 tiếp tục nhóm hạ át với hợp âm bảy bậc II (C♯m7) được rải, rồi hợp âm VII65 (A♯ø7 với C♯ ở bè trầm) trên sắc thái cresc. Câu thứ nhất của chủ đề kết thúc ở ô 30 bằng **kết trọn** II65 – D – T ở Si trưởng — kết trọn đầu tiên của chương.

Câu thứ hai của chủ đề (ô 31 – 36) nhắc lại câu đầu với tiết tấu móc kép. Ô 32 có âm G♯ với quãng 4 treo đi tới IV6, kèm nốt thêu dưới cromatic F𝄪. Ô 33 đi II7 – D7. Ô 34 lặp lại hợp âm D2→IV, về T, rồi II7 trên G♯, IV6. Ô 35 đáng chú ý ở chuỗi lướt cromatic đi xuống E – D♯ – D – C♯ – C – B ở bè trên, trên bè trầm G♯ đứng yên: các hợp âm sinh ra từ chuỗi này là hợp âm lướt, không mang chức năng độc lập. Ô 36 khép lại bằng II7 – IV64.

::scan scriabin2 #7 | Ví dụ 2.7. Câu nhắc lại chủ đề 2 với móc kép (ô 31–36)

**Đoạn chuyển và chủ đề thứ ba (ô 37–57).** Đoạn chuyển mở đầu ở ô 37 bằng một bè giai điệu đơn G♯ – A♯ – B – A♯ – G♯, tay trái nghỉ. Từ ô 38, hoà âm luân phiên giữa nhóm át và nhóm hạ át của Si trưởng: D7 (F♯7, với âm treo B về A♯) ở ô 38 và 40, II64 (C♯m/G♯) ở ô 39 và 41. Ô 42 đi qua hợp âm bậc VI (G♯m); ô 43 rải hợp âm bảy bậc VI bằng móc kép trên sắc thái cresc.; ô 44 đi II7 – VII6 – D7, chuẩn bị cho chủ đề thứ ba. Ô 45 xác lập hợp âm chủ Si trưởng trên các âm B rất trầm ở sắc thái mf, mở ra một pedal chủ.

::scan scriabin2 #8 | Ví dụ 2.8. Đoạn chuyển mở bằng một bè (ô 37), luân phiên D7 và II64 ở Si trưởng

Chủ đề thứ ba (ô 46 – 51), với chỉ dẫn "ben marcato il canto", được trình bày hoàn toàn trên **pedal B**. Hoà âm phía trên đi T – II7 – VI7 – T thêm quãng 9, tức gồm toàn những hợp âm bảy và hợp âm thêm nốt, không có hợp âm át. Đoạn kết của phần trình bày (ô 52 – 57) tiếp tục trên pedal B và khép lại ở Si trưởng bằng một hợp âm rải có dấu nhấn ở ô 57. Như vậy, từ ô 45 đến ô 57, tức mười ba ô nhịp, bè trầm hầu như không rời âm chủ của giọng mới: chức năng chủ được kéo dài, còn sự vận động hoà âm diễn ra ở các bè trên.

::scan scriabin2 #9 | Ví dụ 2.9. Chủ đề 3 ("ben marcato il canto") trên pedal B (ô 46–51)

::scan scriabin2 #10 | Ví dụ 2.10. Đoạn kết phần trình bày trên pedal B (ô 52–57)

Tổng quát, phần trình bày đặt cả ba chủ đề ở cùng một giọng — Si trưởng, giọng song song của giọng chủ. Đây là một sự khác biệt căn bản so với hình thức sonata cổ điển, nơi chủ đề chính phải ở giọng chính và chủ đề phụ ở một giọng khác. Sự tương phản giữa các chủ đề vì vậy không dựa trên tương phản giọng mà dựa trên tương phản về tính chất, kết cấu và thủ pháp hoà âm: chủ đề thứ nhất có ly điệu và hợp âm mượn, chủ đề thứ hai có quãng 4 treo và các hợp âm thêm nốt, chủ đề thứ ba đứng trên pedal chủ.

## 2.3. Phần phát triển (ô 58–88)
Phần phát triển mở đầu bằng motif của phần mở đầu, vang ở Si trưởng (ô 58 – 59), rồi được nhắc lại ở **Rê trưởng** (ô 60 – 61). Quan hệ giữa Si trưởng và Rê trưởng là quan hệ quãng 3 thứ đi lên: Rê trưởng là bậc III hạ (III♭) của Si trưởng. Đây là quan hệ trung âm cromatic (xem [[trung-am-cromatic]]), một phương tiện chuyển giọng đặc trưng của hoà âm lãng mạn muộn. Cuối ô 61, hoá biểu năm thăng được xoá.

::scan scriabin2 #11 | Ví dụ 2.11. Đầu phần phát triển: motif ở Si trưởng (ô 58–59) rồi ở Rê trưởng (ô 60–61)

Ô 62 – 66 là một chuỗi mô tiến theo vòng quãng 5 đi xuống: Sol thứ – Đô thứ – Fa thứ, viết bằng dấu giáng (xem [[mo-tien-hoa-am]]). Từ ô 66 đến ô 74, tiến trình đi qua hợp âm Fø7 (hợp âm bảy bậc II của Mi♭ thứ) và B♭7 (hợp âm bảy át của Mi♭ thứ) để xác lập **Mi♭ thứ**. Mi♭ thứ trùng âm với Rê♯ thứ, giọng bậc V của Sol♯ thứ. Như vậy, ở trung tâm của phần phát triển, Scriabin đặt giọng át của giọng chủ nhưng viết nó bằng dấu giáng. Đoạn này xen kẽ những đỉnh cao trào ở sắc thái ff với những đoạn hợp âm rải ở sắc thái p.

::scan scriabin2 #12 | Ví dụ 2.12. Vùng dấu giáng: mô tiến vòng quãng 5 Sol thứ – Đô thứ – Fa thứ (ô 62–69)

::scan scriabin2 #13 | Ví dụ 2.13. Ô 70–75: cao trào ff xen các đoạn p rải; ô 75 trở lại hoá biểu năm thăng

Ở ô 75 – 76, hoá biểu năm thăng trở lại ở sắc thái ff, với hợp âm A♯ø7 — tức hợp âm bảy bậc II của Sol♯ thứ — tiến tới D♯7♭9, tức hợp âm bảy át có quãng 9 nhỏ của Sol♯ thứ. Mi♭ thứ được hiểu lại là Rê♯ thứ, và giọng Rê♯ thứ được hiểu lại là vùng chức năng át của Sol♯ thứ. Đây là một chuyển giọng trùng âm được thực hiện ở tầm cấu trúc lớn: không phải một hợp âm được viết lại, mà cả một vùng giọng được "đổi tên" khi quay về giọng chính.

::scan scriabin2 #14 | Ví dụ 2.14. Ô 76–78: Sol trưởng bất ngờ (ô 77), hợp âm ba tăng và hợp âm sáu tăng kiểu Pháp (ô 78)

Ô 77 bất ngờ đưa vào hợp âm Sol trưởng ở sắc thái p, cách hợp âm trước nửa cung — một sự "trượt" nửa cung đặc trưng. Ô 78 đi từ B7 về E, qua hợp âm ba tăng E – G♯ – B♯ (xem [[hop-am-ba-tang]]), rồi tới hợp âm sáu tăng kiểu Pháp của Sol♯ thứ (II43♯3♭5: E – G♯ – A♯ – C𝄪).

::scan scriabin2 #15 | Ví dụ 2.15. Pedal át D♯ (ô 79–86), cresc. tới ff

Ô 79 – 86 là một **pedal át** dài tám ô nhịp trên âm D♯. Phía trên pedal, hoà âm luân phiên giữa hợp âm sáu tăng kiểu Pháp (II43♯3♭5), hợp âm bảy bậc II có quãng 3 nâng với quãng 9 nhỏ (hợp âm át của bậc V: A♯7♭9) và hợp âm át, với sắc thái tăng dần tới ff. Chức năng át của át và chức năng át chồng lên nhau trên một bè trầm không đổi, tích tụ sức căng chuẩn bị cho phần tái hiện. Ô 87 – 88 nhắc lại motif mở đầu ở Sol♯ thứ, ở sắc thái ff: quãng 5 rỗng G♯ – D♯, rồi D43 – D7 – D2 và dấu ngân, như ô 1 – 2 được phóng to.

## 2.4. Phần tái hiện và coda (ô 89–136)
::scan scriabin2 #16 | Ví dụ 2.16. Ô 88 → 89: sau pedal át, tái hiện vào ở Mi trưởng

Sau pedal át D♯ và motif mở đầu với D2 của Sol♯ thứ, người nghe chờ đợi một sự giải quyết về hợp âm chủ Sol♯ thứ. Nhưng phần tái hiện lại bắt đầu ở **Mi trưởng** (hoá biểu bốn thăng), tức giọng bậc VI. Hợp âm át của Sol♯ thứ dẫn tới bậc VI thay cho bậc I: đây chính là cấu trúc của kết ngắt, nhưng được thực hiện ở tầm hình thức. Chủ đề thứ nhất (ô 89 – 94) là sự dịch giọng của ô 13 – 18 xuống quãng 5, với toàn bộ các thủ pháp hoà âm được giữ nguyên ở giọng mới.

::scan scriabin2 #17 | Ví dụ 2.17. Ô 95–99: hợp âm bảy át quãng 5 hạ của Mi trưởng, tương ứng ô 19–22

Đoạn nối (ô 95 – 99) nhắc lại hợp âm bảy át quãng 5 hạ, nay ở Mi trưởng (B – D♯ – F♮ viết thành E♯ – A), và kéo dài hơn phần trình bày một ô nhịp. Chủ đề thứ hai (ô 100 – 112) được nhắc lại ở Mi trưởng với các hợp âm tương ứng: IV (La trưởng), II7 (F♯m7), VII7 (D♯ø7). Đoạn chuyển (ô 113 – 121) tương ứng ô 37 – 45, với D7 (B7) và bậc VI (C♯m). Chủ đề thứ ba (ô 122 – 127) vang lên ở Mi trưởng trên **pedal E**, một quãng 8 cao hơn.

::scan scriabin2 #18 | Ví dụ 2.18. Coda trên pedal E (ô 127–136); hợp âm cuối là Mi trưởng

Coda (ô 128 – 136) tiếp tục trên pedal E ở âm vực rất trầm. Phía trên pedal, hoà âm đi T – VI7 (C♯m7 với E ở bè trầm) – T thêm quãng 6 và quãng 9, với màu sắc plagal của hợp âm bậc IV (La trưởng). Ô 135 – 136 nhắc lại motif mở đầu ở Mi trưởng: quãng 5 rỗng E – B, rồi hợp âm Mi trưởng với G♯ ở bè trầm và nốt hoa mỹ C♯, ở sắc thái smorzando, kết thúc dưới dấu ngân. Như vậy, chương I khép lại ở Mi trưởng, không trở về giọng chủ Sol♯ thứ. Quãng 5 rỗng của motif mở đầu, vốn để ngỏ tính chất trưởng – thứ của giọng ở đầu chương, nay được "lấp đầy" bằng một hợp âm trưởng của một giọng khác.

## Tiểu kết chương 2
Phân tích chương I cho thấy khung hoà âm của chương vẫn dựa trên các nguyên tắc chức năng cổ điển: các câu nhạc được khép bằng kết trọn, ly điệu được thực hiện bằng hợp âm át phụ, các hợp âm biến âm thuộc nhóm hạ át và nhóm át của át giữ đúng vai trò chuẩn bị cho hợp âm át. Tuy vậy, trong khung ấy, Scriabin đã đưa vào nhiều yếu tố vượt ra ngoài hoà âm cổ điển. Hợp âm chủ bỏ quãng 3 và những hợp âm át dừng lại không giải quyết làm cho giọng chủ trở nên bất định. Hợp âm bảy át quãng 5 hạ, với hai cách viết C♮ và B♯ cho cùng một âm thanh, mang màu sắc toàn cung. Hợp âm quãng 4 treo không giải quyết và các hợp âm thêm nốt làm mờ ranh giới giữa âm hợp âm và âm ngoài hợp âm. Pedal kéo dài làm các chức năng chồng lên nhau. Ở tầm hình thức, kế hoạch giọng Sol♯ thứ – Si trưởng – Mi trưởng dựa trên quan hệ quãng 3, thay cho quan hệ quãng 5 và nguyên tắc thống nhất giọng của tái hiện cổ điển; và cả chương khép lại ở một giọng khác giọng chủ.
`,
  },
  {
    slug: 'scriabin-op19-chuong-2',
    title: 'Chương 3. Thủ pháp hoà âm trong chương II (Presto)',
    category: 'analysis',
    summary: 'Tiểu luận Sonata số 2 Scriabin, chương 3: phân tích tiến trình hoà âm chương Presto, hợp âm sáu tăng trùng âm với hợp âm bảy át, chuyển giọng trùng âm qua các giọng xa.',
    body: `
Chương II của Sonata số 2 (Presto, Sol♯ thứ, nhịp 3/2, 110 ô nhịp) viết theo hình thức ba đoạn có coda: đoạn A (ô 1 – 40), đoạn B (ô 41 – 78), đoạn A′ (ô 79 – 92) và coda (ô 93 – 110). Kết cấu của chương khá thống nhất: tay trái đánh quãng 8 nốt đen hoặc rải móc đơn, tay phải chạy móc đơn liên tục; ở đoạn B xuất hiện thêm một giai điệu nốt dài với chỉ dẫn "ben marcato il canto". Một hình giai điệu gồm các bậc 3 – 2 – 1 – 7 – 1 của đoạn B lần lượt đi qua năm giọng: Mi♭ thứ, Si♭ thứ, Rê♭ trưởng, Đô♯ thứ, rồi trở về Sol♯ thứ ở coda. Do kết cấu móc đơn liên tục, bè trầm (quãng 8 ở tay trái) là nơi thể hiện rõ nhất tiến trình hoà âm của chương, và vì vậy sẽ được chúng tôi đặc biệt chú ý trong phân tích.

## 3.1. Đoạn A (ô 1–40)
**Câu thứ nhất (ô 1–8).** Khác với thông lệ, chương II không mở đầu bằng hợp âm chủ mà bằng chức năng át. Ở ô 1, bè trầm luân phiên D♯ – C♯, tức D và D2; ở bè giữa, các âm G♯ và B vờn quanh F𝄪 và A♯, nghĩa là chất liệu của hợp âm chủ được đặt treo trên nền hợp âm át. Ô 2 chuyển sang hợp âm bậc VI (Mi trưởng), bè trầm E – B, với giai điệu đi xuống theo gam G♯ – F♯ – E – D♯ – C♯. Ô 3 luân phiên hai hợp âm nhóm hạ át: hợp âm bảy bậc IV với âm bảy B ở bè trầm (s2: C♯ – E – G♯ – B) và hợp âm bảy bậc II khi bè trầm xuống A♯ (II7: A♯ – C♯ – E – G♯). Hai hợp âm này có chung ba âm, chỉ khác nhau ở bè trầm; âm B♯ là nốt thêu của C♯. Ô 4 dừng ở hợp âm bậc IV (Đô♯ thứ), bè trầm C♯ – G♯.

::scan scriabin2 #19 | Ví dụ 3.1. Câu 1 (ô 1–8): mở trên chức năng át, bè trầm D♯–C♯; hợp âm sáu tăng kiểu Đức của giọng bậc V với B–G𝄪 ở bè trầm (ô 6); kết nửa trên D9♭ (ô 8)

Ô 5 là một hợp âm năm âm E – G♯ – B – D♯ – F♯, tức hợp âm Mi trưởng có thêm quãng 7 trưởng và quãng 9, với bè trầm B – G♯. Hợp âm này có thể được hiểu theo hai cách: là hợp âm bảy bậc VI có thêm quãng 9, hoặc là hợp âm bảy chủ có thêm âm bậc VI hạ. Tính lưỡng nghĩa này là đặc điểm của các hợp âm thêm nốt trong tác phẩm.

Ô 6 chứa một trong những cách viết đáng chú ý nhất của chương. Hợp âm B – D♯ – F♯ – G𝄪 là hợp âm sáu tăng kiểu Đức của giọng bậc V, Rê♯ thứ (IV♯65♭3 của Rê♯ thứ). Theo cách viết thông thường, quãng 6 tăng B – G𝄪 phải đặt với B ở bè trầm và G𝄪 ở bè trên để hai âm mở rộng về quãng 8 A♯. Nhưng ở đây, bè trầm luân phiên B – G𝄪, tức quãng 6 tăng được đảo thành **quãng 3 giảm**, và cả hai âm cùng đổ về A♯. Ô 7 là hợp âm bảy bậc II có quãng 3 nâng (II7♯3: A♯ – C𝄪 – E♯ – G♯), tức hợp âm bảy át của Rê♯ thứ, kèm âm treo D♯ và âm B (quãng 9 nhỏ); bè giữa đi D♯ – E♯ – F♯ – A♯, và âm E♮ ở cuối ô báo trước quãng 9 nhỏ của hợp âm át. Ô 8 dừng trên hợp âm chín át có quãng 9 nhỏ (D9♭: D♯ – F𝄪 – A♯ – C♯ – E): câu thứ nhất khép lại bằng **kết nửa**.

::grand D#4+F#4+G##4/B2=IV♯65♭3_của_Rê♯ C##4+E#4+G#4/A#2=II7♯3 C#4+E4+F##4+A#4/D#2=D9♭ | Ví dụ 3.2. Ô 6–8 (rút gọn): hợp âm sáu tăng kiểu Đức của giọng bậc V → hợp âm bảy bậc II có quãng 3 nâng → hợp âm chín át — kết nửa. Ở bản phổ, B và G𝄪 nằm ở bè trầm luân phiên (quãng 3 giảm) rồi cùng đổ về A♯

**Câu thứ hai (ô 9–16).** Câu thứ hai bắt đầu như một **mô tiến** của câu thứ nhất lên quãng 4. Ô 9 là hợp âm bảy át của bậc IV (D7→IV: G♯ – B♯ – D♯ – F♯), bè trầm G♯ – F♯, tương ứng ô 1. Ô 10 là hợp âm La trưởng — bậc VI của Đô♯ thứ — bè trầm A – E, tương ứng ô 2. Ô 11 luân phiên hợp âm bảy bậc IV của Đô♯ thứ (F♯m7 với E ở bè trầm) và hợp âm bảy bậc II của Đô♯ thứ (D♯ø7), tương ứng ô 3. Ô 12 là hợp âm bậc IV của Đô♯ thứ (Fa♯ thứ), tương ứng ô 4. Ô 13 là hợp âm La trưởng có thêm quãng 7 và quãng 9, tương ứng ô 5. Điều đáng chú ý là hợp âm La trưởng, vốn là bậc VI của Đô♯ thứ trong mô tiến, đồng thời cũng là hợp âm bậc II hạ (hợp âm Napoli) của Sol♯ thứ.

::scan scriabin2 #20 | Ví dụ 3.3. Câu 2 (ô 9–16): mô tiến câu 1 lên quãng 4; hợp âm sáu tăng kiểu Đức của Sol♯ thứ với E–C𝄪 ở bè trầm (ô 14), kết trọn ô 16

Chính ở điểm này, mô tiến bị "bẻ" về giọng chính. Ô 14 không tiếp tục mô tiến ô 6 mà đưa vào hợp âm sáu tăng kiểu Đức của Sol♯ thứ (IV♯65♭3: E – G♯ – B – C𝄪, có âm A♮ lướt), bè trầm luân phiên E – C𝄪 — một lần nữa là quãng 3 giảm thay cho quãng 6 tăng. Ô 15 là hợp âm chín át có quãng 9 nhỏ với âm G♯ treo (4 – 3), và ô 16 khép lại bằng hợp âm chủ Sol♯ thứ với nốt thêu F𝄪: **kết trọn**. Câu thứ nhất và câu thứ hai tạo thành một đoạn nhạc mười sáu ô (8 + 8).

**Đoạn xen (ô 17–24).** Đoạn xen ở sắc thái dolcissimo, pp, đưa vào một màu sắc hoàn toàn khác. Ô 17 là hợp âm B9 có thêm quãng 13, trên bè trầm B ở âm vực rất trầm, tức hợp âm chín át của Mi trưởng (bậc VI của Sol♯ thứ). Ô 18 là hợp âm bảy át của Mi trưởng (B7) với âm A♮. Ở ô 19, hợp âm B7 được đặt trên bè trầm E giữ bằng pedal: hợp âm át chồng lên âm chủ của Mi trưởng. Ô 20 là hợp âm T64 của Mi trưởng có thêm quãng 6 (âm C♯), tức hợp âm thêm nốt sáu (sixte ajoutée).

::scan scriabin2 #21 | Ví dụ 3.4. Đoạn xen dolcissimo (ô 17–24): B9 trên B, B7 trên bè trầm E, E7 có D♮ (ô 21–23), hợp âm sáu Napoli – s6 – D7 (ô 24)

Ô 21 đưa vào hợp âm E7 với âm D♮, có thêm quãng 9 và quãng 13: đó là hợp âm bảy át của La trưởng. Ô 22 nhắc lại hợp âm này với âm A treo (4 – 3), và ô 23 đặt nó trên bè trầm A — một lần nữa, hợp âm át chồng lên âm chủ của giọng mà nó hướng tới. Ô 24 khép lại đoạn xen bằng chuỗi II♭6 (La trưởng với C♯ ở bè trầm) – s6 (C♯m với E ở bè trầm, có D♮ thêu) – D7 (D♯ – F𝄪 – A♯ – C♯). Ở đây diễn ra một sự đổi vai hoà âm tinh tế: hợp âm La trưởng, vừa được chuẩn bị như giọng đích của hợp âm E7 (tức như hợp âm chủ của một ly điệu), nay trở thành hợp âm sáu Napoli của Sol♯ thứ, dẫn về hợp âm át của giọng chính.

::grand G#4+B4+Dn5/E3=E7_(ô_21) G#4+B4+C##5/E3=IV♯65♭3_(ô_14) F##4+A#4+C#5/D#3=D7_(ô_15) | Ví dụ 3.5. Cùng một âm thanh, hai cách viết: D♮ (E7, hợp âm bảy át của La trưởng) và C𝄪 (hợp âm sáu tăng kiểu Đức của Sol♯ thứ, đổ về D♯)

Ví dụ 3.5 đặt cạnh nhau hai hợp âm có cùng âm thanh trên bàn phím: E7 ở ô 21 (với D♮) và hợp âm sáu tăng kiểu Đức ở ô 14 (với C𝄪). Cách viết D♮ hướng hợp âm về La trưởng; cách viết C𝄪 hướng nó về âm D♯, tức hợp âm át của Sol♯ thứ. Sự trùng âm giữa hợp âm bảy át và hợp âm sáu tăng kiểu Đức là một hiện tượng đã được hoà âm cổ điển biết tới, nhưng ở Scriabin, nó trở thành một nguyên tắc tổ chức chi phối nhiều đoạn của tác phẩm.

**Tái hiện rút gọn và đoạn kết (ô 25–40).** Ô 25 – 28 nhắc lại nguyên văn ô 1 – 4. Ô 29 đưa vào hợp âm Mi thứ có thêm quãng 7 trưởng (E – G♮ – B – D♯), bè trầm B – G♮, ở sắc thái f với rit.: hợp âm bậc VI vốn là trưởng nay được thứ hoá, trong đó âm G♮ trùng âm với F𝄪, âm dẫn của Sol♯ thứ. Ô 30 đi từ hợp âm E – G – B tới hợp âm sáu tăng kiểu Đức (E – G♯ – B – C𝄪), bè trầm B – E, với các bè cromatic G♮ – G♯ và A – A♯. Ô 31 và 32 nhắc lại ô 15 và 16: hợp âm chín át có quãng 4 treo rồi hợp âm chủ. Như vậy, đoạn ô 25 – 32 nén mười sáu ô của đoạn đầu thành tám ô.

::scan scriabin2 #22 | Ví dụ 3.6. Ô 25–32: tái hiện rút gọn; Mi thứ (G♮) ở ô 29, hợp âm sáu tăng kiểu Đức với C𝄪 ở ô 30

Đoạn kết của phần A (ô 33 – 40) xoay quanh nhóm hạ át biến âm. Ô 33 đi từ âm G♯ tới hợp âm bậc II hạ ở thể nguyên vị (La trưởng, II♭), ở sắc thái f có dấu nhấn. Ô 34 đi từ G♯ tới hợp âm bảy giảm bậc VII (VII7: F𝄪 – A♯ – C♯ – E). Ô 35 luân phiên hợp âm chủ (có thêm âm E) và hợp âm sáu Napoli có thêm quãng 6 (A – C♯ – E – F♯, bè trầm C♯), một hợp âm cũng có thể đọc là F♯m7 với C♯ ở bè trầm. Ô 36 khép lại bằng một kết đặc biệt: bè trầm D♯ đặt dưới gam thứ tự nhiên đi xuống, trong đó âm F♯ không được nâng thành F𝄪 — tức kết bằng **hợp âm át thứ** (d), không có âm dẫn.

::scan scriabin2 #23 | Ví dụ 3.7. Ô 33–40: hợp âm Napoli (A♮, ô 33), hợp âm bảy giảm bậc VII có F𝄪 (ô 34), kết bằng hợp âm át thứ (ô 36), Si trưởng (ô 37) và chạy xuống tới A♯ ở ô 40

Ô 37 đưa vào hợp âm Si trưởng (bậc III), với bè trầm G𝄪 đi tới B ở sắc thái f; âm G𝄪 chuẩn bị cho âm A♯ ở ô sau. Ô 38 là hợp âm Rê♯ thứ ở thể bốn sáu (D♯m với A♯ ở bè trầm), với các nốt thêu A♯ – C𝄪 – E♯: về chức năng, đây là hợp âm K64 của Rê♯ thứ. Ô 39 có bè trầm A♯ – F♯ – G♯ – B và hợp âm bảy nửa giảm bậc VI nâng (E♯ – G♯ – B – D♯) với các nốt thêu F𝄪 và B♯. Ô 40 trở về hợp âm chủ Sol♯ thứ ở âm vực rộng, rồi chạy xuống qua E♯ và C𝄪 tới hợp âm bảy át có quãng 9 nhỏ của Rê♯ thứ (A♯7♭9) trên bè trầm A♯. Âm A♯ này, trùng âm với B♭, chính là chiếc cầu nối sang đoạn B.

## 3.2. Đoạn B (ô 41–78)
**Mi♭ thứ (ô 41–48).** Ô 41 mở đầu đoạn B ở **Mi♭ thứ**, với hoá biểu sáu giáng. Giai điệu nốt dài G♭ – F – E♭ – D♮ – E♭ (các bậc 3 – 2 – 1 – 7 – 1) vang trên hợp âm chủ, với âm B♭ ngân ở bè trong. Đây là một **chuyển giọng trùng âm**: giọng Rê♯ thứ, vừa được chuẩn bị bằng hợp âm át của nó ở ô 40, được viết lại thành Mi♭ thứ, trong đó âm chung A♯ = B♭ là điểm chuyển. Về âm thanh, giọng không đổi; về ký âm và về tư duy hoà âm, tác phẩm bước sang thế giới các giọng dấu giáng.

::scan scriabin2 #24 | Ví dụ 3.8. Đoạn B mở ở Mi♭ thứ (hoá biểu sáu giáng): giai điệu G♭–F–E♭–D♮–E♭; ô 44 hợp âm sáu tăng kiểu Pháp C♭–E♭–F–A♮, sff

Ô 42 đi từ hợp âm bảy nửa giảm bậc II ở thể ba bốn (II43: Fø7 với C♭ ở bè trầm) tới **hợp âm át có âm bậc VI hạ** (B♭ – D – G♭), trong đó âm G♭ thay cho quãng 5 F của hợp âm át; bè trầm đi B♭ – A♭ – G♭ bằng liên ba có dấu nhấn. Ô 43 là hợp âm t6 có thêm âm bậc VI nâng (C♮, giai điệu C – D – E♭ theo điệu thứ giai điệu), bè trầm G♭, rồi F – E♭ – D♭. Ô 44 đưa tiến trình tới hợp âm sáu tăng kiểu Pháp của Mi♭ thứ (II43♯3♭5: C♭ – E♭ – F – A♮), ở sắc thái sff. Trong suốt bốn ô 41 – 44, bè trầm đi xuống theo gam Mi♭ thứ từ B♭ tới C♭. Hợp âm sáu tăng kiểu Pháp ở ô 44 đồng thời có thể hiểu là hợp âm bảy át có quãng 5 hạ của âm B♭ — một lần nữa, hai cấu trúc trùng nhau về âm thanh.

::scan scriabin2 #25 | Ví dụ 3.9. Ô 45–48: pedal B♭ rồi bè trầm đi lên cromatic

Từ ô 45, **pedal B♭** (âm át của Mi♭ thứ) được đặt dưới hình hợp âm t64 (E♭ – G♭ – B♭ cùng các âm F, C♭), ở sắc thái p. Từ ô 46, bè trầm bắt đầu đi lên: C♭ ở ô 46, C♮ – D♭ – D♮ – E♭ ở ô 47 dưới hình hợp âm Mi♭ thứ đứng yên. Các hợp âm sinh ra ở đây là **hợp âm lướt**, xuất hiện do sự vận động cromatic của bè trầm chứ không do logic chức năng. Ô 48 đưa bè trầm lên E♮ – F, xác lập hợp âm t64 của Si♭ thứ, rồi hợp âm bảy át có quãng 9 nhỏ của Si♭ thứ (F – A – C – E♭ cùng G♭, D♭).

**Si♭ thứ và Si trưởng (ô 49–62).** Ô 49 – 51 nhắc lại ô 41 – 43 ở **Si♭ thứ** (hoá biểu năm giáng), tức dịch lên quãng 5: giai điệu D♭ – C – B♭ – A – B♭ trên hợp âm chủ; II43 (Cø7 với G♭ ở bè trầm) tới hợp âm át có âm bậc VI hạ (F – A – D♭); rồi t6 có thêm âm bậc VI nâng (G♮).

::scan scriabin2 #26 | Ví dụ 3.10. Ô 49–52: Si♭ thứ; ô 52 hợp âm G♭7 viết với F♭ (hợp âm sáu tăng kiểu Đức của Si♭ thứ), sff

Ô 52 là điểm then chốt của đoạn B. Hợp âm G♭ – B♭ – D♭ – F♭, ở sắc thái sff, về chức năng là hợp âm sáu tăng kiểu Đức của Si♭ thứ (IV♯65♭3), nhưng được Scriabin viết như một hợp âm bảy át của Đô♭ trưởng, với âm F♭ thay cho E♮. Ở ô 53, hoá biểu được xoá và nhạc chuyển sang dấu thăng: hợp âm G♭7 được hiểu lại thành F♯7, tức **hợp âm bảy át của Si trưởng**, trong khi bè trầm G♭ = F♯ vẫn đứng yên. Phía trên bè trầm ấy vang lên hợp âm Si trưởng ở thể bốn sáu có thêm quãng 6, ở sắc thái pp. Đây là chuyển giọng trùng âm thứ hai của chương: hợp âm sáu tăng kiểu Đức của một giọng được viết lại thành hợp âm bảy át của một giọng khác, cách giọng ban đầu nửa cung.

::grand Gb4+Bb4+Db5+Fb5/Gb2=G♭7_(ô_52) F#4+B4+D#5+G#5/F#2=Si:_T64_(ô_53) | Ví dụ 3.11. Chuyển giọng trùng âm ở ô 52–53: G♭7 (hợp âm sáu tăng kiểu Đức của Si♭ thứ) được hiểu thành F♯7 = hợp âm bảy át của Si trưởng; bè trầm G♭ = F♯ đứng yên, phía trên vào hợp âm Si trưởng

::scan scriabin2 #27 | Ví dụ 3.12. Ô 53–58: hoá biểu xoá, pedal F♯; Si trưởng – Sol trưởng – Đô trưởng thêm quãng 6 – F♯7♭9

Trên **pedal F♯** kéo dài từ ô 53 đến ô 58, Scriabin đặt một chuỗi hợp âm theo quan hệ trung âm cromatic. Ô 54 là hợp âm Sol trưởng (Gmaj7 với F♯ ở bè trầm), tức hợp âm bậc VI hạ của Si trưởng (VI♭). Ô 55 là hợp âm Đô trưởng có thêm quãng 6 (C – E – G – A), tức hợp âm bậc II hạ (II♭, hợp âm Napoli) của Si trưởng, đặt trên bè trầm F♯ — cách âm gốc của hợp âm một quãng 4 tăng. Ô 56 là hợp âm F♯7♭9 (F♯ – A♯ – C♯ – E – G♮), tức hợp âm chín át có quãng 9 nhỏ của Si trưởng, với một nhóm chín nốt đi xuống cromatic. Ô 57 là hợp âm G7 trên bè trầm G, tức hợp âm bảy bậc II hạ (II♭7) so với âm F♯. Ô 58 là hợp âm bảy giảm G – A♯ – C♯ – E, tới hợp âm F♯7 ở phách cuối — mà về âm thanh lại chính là G♭7, hợp âm sáu tăng kiểu Đức của Si♭ thứ ở ô 52. Vòng trùng âm khép lại, và tiến trình trở về Si♭ thứ.

::scan scriabin2 #28 | Ví dụ 3.13. Ô 59–62: pedal F rồi bè trầm đi lên cromatic; ô 62 bè trầm B𝄫

Ô 59 – 62 tương ứng ô 45 – 48 dịch lên quãng 5: **pedal F** (âm át của Si♭ thứ) dưới hình hợp âm t64 (B♭ – D♭ – F cùng C, G♭) ở sắc thái pp; bè trầm đi F – C – D♭ – F – G♭ ở ô 60, rồi đi lên cromatic G♮ – A♭ – A♮ – B♭ ở ô 61. Ở ô 62, bè trầm đi xuống B𝄫 rồi A♭, xác lập hợp âm A♭9, tức hợp âm chín át của Rê♭ trưởng. Đáng chú ý là cùng một phím đàn được viết A♮ khi bè trầm đi lên (ô 61) và B𝄫 khi bè trầm đi xuống (ô 62): cách viết luôn tuân theo hướng vận động của bè.

**Rê♭ trưởng, Đô♯ thứ và trở về giọng chính (ô 63–78).** Ô 63 – 66 ở **Rê♭ trưởng**: hình giai điệu 3 – 2 – 1 – 7 – 1 (F – E♭ – D♭ – C – D♭) nay vang ở một giọng trưởng, ở sắc thái f. Hoà âm đứng trên hợp âm chủ, với hợp âm T64 có nốt thêu bậc VI (B♭ – A♭ luân phiên trên bè trầm A♭) ở ô 65 – 66 — một dạng hợp âm thêm nốt sáu.

::scan scriabin2 #29 | Ví dụ 3.14. Ô 63–66: Rê♭ trưởng, giai điệu F–E♭–D♭–C–D♭

::scan scriabin2 #30 | Ví dụ 3.15. Ô 67–69: Đô♯ thứ (hoá biểu năm thăng), giai điệu E–D♯–C♯–B♯–C♯

Ở ô 67, hoá biểu năm thăng trở lại và nhạc chuyển sang **Đô♯ thứ**: giai điệu E – D♯ – C♯ – B♯ – C♯ trên hợp âm chủ, ở sắc thái fp. Rê♭ trưởng và Đô♯ thứ có cùng âm chủ về âm thanh (D♭ = C♯); việc chuyển từ giọng này sang giọng kia vừa là chuyển từ trưởng sang thứ cùng tên, vừa là chuyển giọng trùng âm. Ô 69 – 70 có hợp âm t64 với nốt thêu bậc VI hạ (A – G♯ luân phiên trên G♯). Đô♯ thứ là giọng bậc IV của Sol♯ thứ; tiến trình đã trở lại gần giọng chính.

::scan scriabin2 #31 | Ví dụ 3.16. Ô 70–74: E7 với D♮ ở bè trầm (ô 71), viết lại thành C𝄪 (ô 72) — cùng hợp âm, đổi chức năng tại chỗ

Ô 71 – 74 lặp lại hiện tượng trùng âm của đoạn A ở dạng tập trung nhất. Ở ô 71, hợp âm E7 (E – G♯ – B – D♮) với bè trầm luân phiên G♯ – D, tức D65 và D2 của La trưởng, ở sắc thái p, cresc. Trong Sol♯ thứ, hợp âm này là hợp âm bảy bậc VI. Ở ô 72, âm D♮ ở bè trầm được viết lại thành C𝄪, đi về E: hợp âm E7 được hiểu lại thành hợp âm sáu tăng kiểu Đức của Sol♯ thứ ở thể có âm gốc C𝄪 ở bè trầm (IV♯7♭3), rồi tới s6 (C♯m với E ở bè trầm), ở sắc thái f. Việc đổi cách viết diễn ra ngay tại chỗ, giữa hai ô nhịp kế tiếp, và được lặp lại ở ô 73 – 74.

::scan scriabin2 #32 | Ví dụ 3.17. Ô 75–78: pedal D♯, K64 rồi D9♭ — đoạn A′ vào ngay sau ô 78

Ô 75 – 78 là một **pedal át** trên âm D♯. Ô 75 và 76 đặt hợp âm K64 (G♯m với D♯ ở bè trầm) dưới giai điệu A♯ – G♯ – G♯ – A♯ – B và D♯ – C♯ – B – C♯ – D♯, ở sắc thái mf. Ô 77 đi D (quãng 8 D♯, sf) – VI6 (E/G♯) – D. Ô 78 dừng trên hợp âm chín át có quãng 9 nhỏ, có thêm âm B. Đoạn A′ vào ngay sau đó, trên chức năng át, không có kết.

## 3.3. Đoạn A′ và coda (ô 79–110)
Đoạn A′ (ô 79 – 92) nhắc lại nguyên văn ô 1 – 14, với cùng bè trầm và hợp âm, nhưng sắc thái mạnh hơn (sf, f, cresc.). Như vậy, A′ chỉ nhắc lại câu thứ nhất và phần đầu câu thứ hai, dừng ở hợp âm sáu tăng kiểu Đức của ô 14 (tương ứng ô 92).

::scan scriabin2 #33 | Ví dụ 3.18. Ô 93–94: hợp âm sáu tăng kiểu Đức ngân trên bè trầm C𝄪

Coda (ô 93 – 110) bắt đầu bằng hợp âm sáu tăng kiểu Đức (E – G♯ – B trên bè trầm C𝄪, IV♯7♭3) ngân suốt hai ô ở sắc thái mf, cresc., hợp âm được nhắc ở quãng 8 cao. Ở vị trí mà đoạn A dùng hợp âm át (ô 15), Scriabin phóng to hợp âm sáu tăng.

::scan scriabin2 #34 | Ví dụ 3.19. Ô 95–102: giai điệu đoạn B trở về ở giọng chính trên pedal D♯; kết trọn ô 101–102

Từ ô 95, trên **pedal D♯**, giai điệu của đoạn B trở về ở giọng chính (B – A♯ – G♯ – F𝄪 – G♯), ở sắc thái p, trên hợp âm K64. Đây là sự tổng hợp hai chất liệu tương phản của chương. Ô 96 tương ứng ô 42 ở giọng chính: hợp âm bảy bậc II (A♯ – C♯ – E – G♯) tới hợp âm bảy át có âm bậc VI hạ, trên pedal D♯. Ô 97 tương ứng ô 43: hợp âm t64 có thêm âm bậc VI nâng (E♯; giai điệu E♯ – F𝄪 – G♯), vẫn trên D♯. Ô 98 – 100 luân phiên hợp âm sáu tăng kiểu Đức (E – G♯ – B – C𝄪, ở ô 100 có thêm A♯) và hợp âm K64 trên pedal D♯, với sắc thái tăng từ f tới ff. Ô 101 đi s (C♯m với D♯ ở bè trầm) – D7 (D♯ – F𝄪 – A♯ – C♯), và ô 102 khép lại bằng hợp âm chủ trên bè trầm G♯: **kết trọn** của toàn chương. Giai điệu đoạn B tiếp tục vang trên hợp âm chủ ở sắc thái p, cresc.

::scan scriabin2 #35 | Ví dụ 3.20. Ô 103–110: C𝄪 ở bè trầm (màu hợp âm sáu tăng), D♯–E luân phiên, hợp âm át không có âm dẫn ở ô 108–109, hợp âm chủ cuối ô 110

Phần cuối coda (ô 103 – 110) kéo dài hợp âm chủ. Ở ô 103, bè trầm có nốt thêu C𝄪, gợi màu sắc của hợp âm sáu tăng kiểu Đức; giai điệu đi B tới D♯. Ở ô 104, tay trái luân phiên D♯ – E, tức bậc 5 và bậc 6 hạ trên nền hợp âm chủ, ở sắc thái mf, dim. Ô 105 – 107 lặp lại các hình này, giai điệu lên một quãng 8 ở ô 106. Ở ô 108 – 109, bè trầm luân phiên D♯ – G♯, tức hợp âm át – hợp âm chủ, ở sắc thái pp. Nhưng hợp âm át ở đây chứa các âm G♯, E và B — quãng 4 treo, quãng 9 nhỏ và quãng 13 nhỏ — mà **không có âm dẫn F𝄪**. Kết của chương vì vậy là một kết át – chủ không có âm dẫn. Ô 110 khép lại bằng hợp âm chủ Sol♯ thứ (G♯ – B – D♯) ở sắc thái sf, với pedal.

## Tiểu kết chương 3
Chương II cho thấy rõ hơn chương I sự căng giãn của điệu tính chức năng. Chương mở đầu bằng chức năng át chứ không bằng hợp âm chủ, và đoạn A′ vào ngay trên chức năng át, không có kết. Hợp âm sáu tăng kiểu Đức xuất hiện với tần suất cao và giữ vai trò trung tâm: nó được viết với quãng 3 giảm ở bè trầm (ô 6, 14, 30), được viết lại thành hợp âm bảy át của giọng khác (ô 21 và 14; ô 52 và 53; ô 71 và 72), và được phóng to ở coda thay cho hợp âm át. Kế hoạch giọng của đoạn B đi qua các giọng xa bằng những chuyển giọng trùng âm (Rê♯ thứ → Mi♭ thứ, Si♭ thứ → Si trưởng, Rê♭ trưởng → Đô♯ thứ), với một chuỗi trung âm cromatic trên pedal F♯. Bè trầm đi liền bậc theo gam hoặc cromatic, với cách viết phụ thuộc vào hướng đi, sinh ra những hợp âm lướt không mang chức năng độc lập. Cuối cùng, chương khép lại bằng một kết át – chủ không có âm dẫn. Tuy vậy, khác với chương I, chương II trở về và kết thúc ở giọng chủ Sol♯ thứ, đảm bảo tính thống nhất giọng của cả tác phẩm.
`,
  },
  {
    slug: 'scriabin-op19-thu-phap',
    title: 'Chương 4. Đặc điểm thủ pháp hoà âm và tính chuyển tiếp của tác phẩm',
    category: 'analysis',
    summary: 'Tiểu luận Sonata số 2 Scriabin, chương 4: các thủ pháp kế thừa hoà âm cổ điển, các thủ pháp mới, tính chuyển tiếp của tác phẩm và đối chiếu với luận văn của Cha Min-hee.',
    body: `
Trên cơ sở phân tích chi tiết hai chương ở chương 2 và chương 3, chương này khái quát các thủ pháp hoà âm đặc trưng của Sonata số 2, xác định những yếu tố kế thừa truyền thống và những yếu tố mới, qua đó làm rõ tính chuyển tiếp của tác phẩm. Phần cuối chương đối chiếu kết quả phân tích với luận văn của Cha Min-hee (2015), công trình chi tiết nhất về tác phẩm mà chúng tôi tiếp cận được.

## 4.1. Các thủ pháp hoà âm kế thừa hoà âm chức năng cổ điển
**Kết và ly điệu.** Trong cả hai chương, các câu nhạc vẫn được khép lại bằng những kết chức năng rõ ràng. Kết trọn II65 – D – T ở ô 30 chương I khép câu đầu chủ đề thứ hai; đoạn nhạc mười sáu ô đầu chương II gồm một câu kết nửa trên hợp âm chín át (ô 8) và một câu kết trọn (ô 16), đúng cấu trúc đoạn nhạc cổ điển. Ly điệu được thực hiện bằng hợp âm át phụ theo đúng quy tắc: ly điệu sang bậc III ở ô 15 chương I, hợp âm bảy át của bậc IV ở ô 16, ô 27 chương I và ô 9 chương II.

**Các hợp âm biến âm nhóm hạ át và nhóm át của át.** Hợp âm sáu Napoli xuất hiện ở ô 9 chương I và ô 24, 33, 35 chương II, ô 55 chương II (ở giọng Si trưởng). Ba loại hợp âm sáu tăng đều có mặt: kiểu Ý (IV♯6♭3) ở ô 5 – 6 chương I; kiểu Pháp (II43♯3♭5 và II65♯3♭5) ở ô 10, 78 – 86 chương I và ô 44 chương II; kiểu Đức (IV♯65♭3, IV♯7♭3) ở ô 6, 14, 30, 72, 93 – 100 chương II. Hợp âm bảy bậc II có quãng 3 nâng — hợp âm bảy át của giọng bậc V — xuất hiện ở ô 6 chương I và ô 7 chương II. Trong phần lớn các trường hợp, các hợp âm này vẫn làm nhiệm vụ cổ điển là chuẩn bị cho hợp âm át.

**Hợp âm mượn và mô tiến.** Hợp âm bảy nửa giảm bậc II mượn từ Si thứ ở ô 18 chương I, hợp âm bậc VI thứ hoá ở ô 29 chương II là những hợp âm mượn quen thuộc của hoà âm lãng mạn. Mô tiến được dùng ở phần phát triển chương I (vòng quãng 5 Sol thứ – Đô thứ – Fa thứ, ô 62 – 66) và ở câu thứ hai chương II (mô tiến câu thứ nhất lên quãng 4, ô 9 – 13).

Như vậy, bộ khung hoà âm của tác phẩm vẫn là bộ khung của hoà âm chức năng cuối thế kỷ XIX, gần với Chopin và Liszt, như sách giáo khoa bốn tác giả đã mô tả.

## 4.2. Các thủ pháp hoà âm mới
**Hợp âm bảy át quãng 5 hạ và màu sắc toàn cung.** Hợp âm F♯ – A♯ – C♮ – E ở ô 20, 22 chương I, và hợp âm tương ứng ở ô 95 – 99, là hợp âm bảy át có quãng 5 hạ (D7♭5). Bốn âm của nó thuộc một gam toàn cung, và về âm thanh nó trùng với hợp âm sáu tăng kiểu Pháp. Scriabin viết âm quãng 5 khi là C♮ (hạ), khi là B♯ (quãng 4 nâng), tuỳ theo hướng giải quyết. Hợp âm sáu tăng kiểu Pháp ở ô 44 chương II cũng đồng thời là hợp âm bảy át quãng 5 hạ của âm B♭. Theo chúng tôi, đây là mầm quan trọng nhất của ngôn ngữ hoà âm Scriabin thời kỳ sau, phù hợp với mô hình của Dernova xem hoà âm Scriabin phát triển từ hợp âm át và các biến thể của nó.

**Hợp âm sáu tăng trùng âm với hợp âm bảy át.** Hợp âm sáu tăng kiểu Đức có âm thanh trùng với một hợp âm bảy át. Scriabin khai thác sự trùng âm này một cách có hệ thống: hợp âm E7 với D♮ (ô 21 chương II) và hợp âm sáu tăng kiểu Đức với C𝄪 (ô 14) là cùng một âm thanh với hai chức năng; ở ô 71 – 72, hợp âm được viết lại ngay tại chỗ, D♮ thành C𝄪; ở ô 52 – 53, hợp âm G♭7 (hợp âm sáu tăng kiểu Đức của Si♭ thứ) được viết lại thành F♯7 (hợp âm bảy át của Si trưởng) để chuyển giọng. Quãng 6 tăng còn được đảo thành quãng 3 giảm ở bè trầm (B – G𝄪 ở ô 6, E – C𝄪 ở ô 14 chương II). Hợp âm sáu tăng không còn chỉ là một hợp âm biến âm chuẩn bị cho át, mà trở thành một điểm xoay giữa các giọng.

**Hợp âm thêm nốt và hợp âm quãng 4 treo.** Hợp âm thêm nốt sáu (sixte ajoutée) xuất hiện ở ô 20, 35, 65 chương II; hợp âm thêm quãng 7 trưởng và quãng 9 ở ô 5, 13 chương II; hợp âm chủ có quãng 4 treo không giải quyết ở ô 23 – 27 chương I. Ở các hợp âm này, ranh giới giữa âm hợp âm và âm ngoài hợp âm bị xoá mờ: âm treo không còn đòi hỏi giải quyết mà trở thành một thành phần của âm thanh hợp âm. Chương II còn có những hợp âm át không có âm dẫn ở ô 108 – 109, với quãng 4 treo, quãng 9 nhỏ và quãng 13 nhỏ thay cho quãng 3 dẫn âm (xem [[hop-am-mo-rong]], [[not-ngoai-hop-am]]).

**Pedal và sự chồng chức năng.** Nhiều đoạn dài của tác phẩm được xây dựng trên một bè trầm đứng yên: pedal chủ ở ô 3 – 6, 45 – 57, 122 – 136 chương I; pedal át ở ô 79 – 86 chương I và ô 45 – 46, 59 – 60, 75 – 78, 95 – 101 chương II; pedal F♯ ở ô 53 – 58 chương II. Phía trên pedal là những hợp âm thuộc chức năng khác: nhóm hạ át trên âm chủ, hợp âm át trên âm chủ của giọng đích (ô 19, 23 chương II), hợp âm Napoli trên âm át (ô 55 chương II). Sự chồng chức năng này làm cho tiến trình hoà âm mất đi tính rạch ròi của hoà âm cổ điển (xem [[bass-ngan]]).

**Chuyển giọng trùng âm và quan hệ quãng 3.** Kế hoạch giọng của tác phẩm dựa nhiều vào trùng âm và quan hệ quãng 3. Ở chương I: Mi♭ thứ của phần phát triển được hiểu lại là Rê♯ thứ (ô 66 – 75); quan hệ Si trưởng – Rê trưởng (ô 58 – 61); kế hoạch Sol♯ thứ – Si trưởng – Mi trưởng của toàn chương. Ở chương II: Rê♯ thứ → Mi♭ thứ (ô 40 – 41, qua âm chung A♯ = B♭), Si♭ thứ → Si trưởng (ô 52 – 53), Rê♭ trưởng → Đô♯ thứ (ô 66 – 67), cùng chuỗi Si trưởng – Sol trưởng – Đô trưởng trên pedal F♯ (ô 53 – 55) (xem [[chuyen-giong]], [[trung-am]], [[trung-am-cromatic]]).

**Mở đầu lệch khỏi hợp âm chủ và bè trầm tuyến tính.** Chương I mở đầu bằng quãng 5 rỗng và dừng trên D2 chưa giải quyết; chương II mở đầu bằng chức năng át; đoạn A′ vào ngay sau pedal át mà không có kết. Bè trầm thường đi liền bậc: đi xuống theo gam (ô 7 – 9 chương I; ô 41 – 44 chương II), đi lên cromatic dưới một hình hợp âm đứng yên (ô 46 – 48, 60 – 62 chương II), sinh ra những hợp âm lướt không có chức năng độc lập; cách viết của bè trầm luôn tuân theo hướng đi (A♮ khi đi lên, B𝄫 khi đi xuống).

## 4.3. Tính chuyển tiếp của Sonata số 2
Đặt hai nhóm thủ pháp trên cạnh nhau, có thể thấy tính chuyển tiếp của Sonata số 2 không nằm ở chỗ tác phẩm "pha trộn" cũ và mới một cách ngẫu nhiên, mà ở chỗ các yếu tố mới đều nảy sinh **từ bên trong** các phương tiện của hoà âm chức năng. Hợp âm át quãng 5 hạ là một biến thể của hợp âm át; sự trùng âm giữa hợp âm sáu tăng và hợp âm bảy át vốn đã có trong hoà âm cổ điển; hợp âm thêm nốt và quãng 4 treo bắt nguồn từ âm ngoài hợp âm; pedal và quan hệ quãng 3 là những phương tiện quen thuộc của hoà âm lãng mạn. Điều mới ở Scriabin là những phương tiện ấy được sử dụng với tần suất cao, được đặt vào những vị trí quan trọng của hình thức, và được khai thác vì giá trị màu sắc tự thân của chúng hơn là vì chức năng dẫn tới một hợp âm khác.

Sonata số 2 chưa có "hợp âm huyền bí" và chưa vượt ra khỏi điệu tính: cả tác phẩm vẫn mở đầu và kết thúc ở Sol♯ thứ, các câu nhạc vẫn được khép bằng kết chức năng. Nhưng hầu hết vật liệu của Scriabin thời kỳ sau — hợp âm át quãng 5 hạ, màu sắc toàn cung, hợp âm thêm nốt, quãng 4, pedal kéo dài — đã có mặt trong tác phẩm, ở dạng vẫn còn giải thích được bằng logic chức năng. Kết quả phân tích này phù hợp với luận điểm của Sabbagh rằng hoà âm Scriabin phát triển từng bước, mỗi bước suy ra được từ bước trước, và với nhận định của Kholopov về Scriabin như một trong những người khai mở hoà âm thế kỷ XX.

## 4.4. Đối chiếu với luận văn của Cha Min-hee (2015)
Luận văn thạc sĩ của Cha Min-hee (Đại học Chosun, người hướng dẫn Kim Ji-hyun) sử dụng bản in Peters năm 1971. Đối chiếu với kết quả phân tích của tiểu luận, chúng tôi nhận thấy những điểm thống nhất, những điểm luận văn bổ sung cho tiểu luận, và những điểm khác biệt. Số trang dưới đây là số trang in trong luận văn.

**Những điểm thống nhất.** Cha xác định chương II theo hình thức ba đoạn A (ô 1 – 40) – B (ô 41 – 78) – A′, trong đó A′ chỉ nhắc lại ô 1 – 14 (ô 79 – 92), còn coda (ô 93 – 110) dùng lại giai điệu đoạn B (tr. 35 – 39). Ở ô 40 – 41 chương II, Cha cũng ghi nhận bè trầm A♯ → B♭ và chuyển giọng trùng âm Rê♯ thứ → Mi♭ thứ (tr. 37). Về coda chương II, Cha chỉ ra pedal D♯ từ ô 98 với các hợp âm tầng cao đi lên cromatic C𝄪 – D♯ – E, giai điệu đoạn B được nhắc lên một quãng 8 ở ô 102 – 107 và tay trái chuyển sang quãng 2 thứ D♯ – E luân phiên (tr. 39); điều này thống nhất với phân tích của chúng tôi về hợp âm sáu tăng kiểu Đức trên âm C𝄪, hợp âm K64 trên D♯ và các âm D♯ – E thêu. Ở chương I, Cha ghi nhận bè trong đi lên cromatic G♯ – A – A♯ ở ô 9 – 10 (tương ứng hợp âm Napoli có âm A♮ trong phân tích của chúng tôi), âm E thay cho D♯ trong hợp âm chủ ở ô 23 (tương ứng hợp âm chủ có quãng 4 treo), âm B được nhấn như một pedal ở ô 46 – 56, và sự nối D♭ sang C♯ trùng âm ở ô 74 – 75 để trở về Sol♯ thứ (tr. 23, 25, 28, 31 – 32).

**Những điểm luận văn bổ sung.** Luận văn của Cha chú ý nhiều tới tiết tấu và phức điệu — những lĩnh vực nằm ngoài phạm vi tiểu luận. Cha chỉ ra rằng từ cuối ô 6 chương I, tay phải giữ nhịp 3/4 trong khi tay trái chuyển sang hình nhịp 9/8 (phức nhịp); đoạn kết thứ nhất từ ô 37 dùng giai điệu ô 29 thành canon quãng 8; tay trái chia nhịp ngày càng nhỏ, tạo các tỷ lệ nghịch nhịp 3:4, 4:5, 3:6 rồi 2:3, 6:4, 4:3 ở ô 46 – 56 (tr. 23, 27 – 29). Ở phần phát triển, Cha ghi nhận mô tiến giai điệu ô 23 – 24 cách quãng 4 và quãng 8 từ ô 62, bè trầm đi cromatic C – C♭ – B♭ ở ô 68 – 70 (tr. 30 – 32). Ở chương II, Cha chỉ ra mô tiến của ô 1 – 2 ở ô 3 – 4, và nhóm ba nốt ở bè trầm trải rộng quãng 11 ở ô 19 – 20, được tác giả gọi là "tiếng tù và" và cho là gợi lại motif chương I (tr. 36).

**Những điểm khác biệt.** Thứ nhất, về hình thức chương I: Cha xem ô 1 – 12 là chủ đề thứ nhất ở Sol♯ thứ và ô 13 – 22 là đoạn nối ở Si trưởng, đặt phần tái hiện từ ô 87 và coda từ ô 122 (tr. 22, 33). Chúng tôi, thống nhất với Leikin, xem ô 1 – 12 là phần mở đầu, chủ đề thứ nhất bắt đầu từ ô 13, tái hiện từ ô 89, chủ đề thứ ba ở ô 122 – 127 và coda ở ô 128 – 136. Hai cách chia khác nhau ở cách hiểu vai trò của motif mở đầu: với chúng tôi, motif này mang tính chất mở đầu — không có chủ đề hoàn chỉnh, dừng trên hợp âm át không giải quyết, và trở lại nguyên dạng ở đầu phần phát triển, cuối phần phát triển và cuối coda.

Thứ hai, về giọng của phần phát triển: bảng của Cha ghi "f – g♯" cho ô 62 – 86. Trên bản Belaieff, vùng dấu giáng đi Sol thứ → Đô thứ → Fa thứ, rồi qua B♭7♭9 tới Mi♭ thứ trước khi trở về hoá biểu năm thăng ở ô 75; chúng tôi giữ cách đọc này. Thứ ba, về đoạn B chương II: Cha ghi Mi♭ thứ cho ô 41 – 52, "Si♭ thứ – Si" cho ô 53 – 62 và "Đô – Si♭ thứ – Đô♯ thứ – Sol♯ thứ" cho ô 63 – 78. Trên bản Belaieff, ô 49 – 52 đã ở Si♭ thứ (hoá biểu năm giáng), ô 53 – 58 ở Si trưởng trên pedal F♯, ô 59 – 62 ở Si♭ thứ, ô 63 – 66 ở Rê♭ trưởng (vẫn năm giáng, giai điệu F – E♭ – D♭ – C – D♭), không phải Đô.

Ngoài ra, luận văn có một số lỗi in: các bảng và chú thích ví dụ ghi "Op. 12" thay cho Op. 19; bảng 2 ghi chương I "86 – 136" và A′ "79 – 109"; nhịp chương II được ghi 3/4, trong khi bản Belaieff ghi 3/2. Cha cũng kết luận rằng các hợp âm quãng 4, quãng 5 dày đặc trong tác phẩm là "điềm báo của hợp âm huyền bí" (tr. 25, 42); đây là nhận định của tác giả, không kèm phân tích cấu trúc hợp âm, nên chúng tôi không lấy làm căn cứ.

## Tiểu kết chương 4
Các thủ pháp hoà âm của Sonata số 2 có thể chia thành hai nhóm. Nhóm thứ nhất kế thừa hoà âm chức năng cổ điển: kết, ly điệu, hợp âm Napoli, các hợp âm sáu tăng, hợp âm mượn, mô tiến. Nhóm thứ hai gồm những thủ pháp mới: hợp âm át quãng 5 hạ với màu sắc toàn cung, sự trùng âm có hệ thống giữa hợp âm sáu tăng và hợp âm bảy át, hợp âm thêm nốt và quãng 4 treo, pedal và sự chồng chức năng, chuyển giọng trùng âm và quan hệ quãng 3, mở đầu lệch khỏi hợp âm chủ và bè trầm tuyến tính. Các thủ pháp mới đều nảy sinh từ bên trong các phương tiện của hoà âm chức năng; chính điều đó làm nên tính chuyển tiếp của tác phẩm. Đối chiếu với luận văn của Cha Min-hee cho thấy sự thống nhất ở nhiều nhận định cơ bản, đồng thời giúp chúng tôi xác định rõ hơn những điểm cần đính chính về hình thức và kế hoạch giọng.
`,
  },
  {
    slug: 'scriabin-op19-ket-luan',
    title: 'Kết luận và tài liệu tham khảo',
    category: 'analysis',
    summary: 'Kết luận tiểu luận về thủ pháp hoà âm trong Sonata số 2 của Scriabin, những hạn chế, hướng nghiên cứu tiếp theo và danh mục tài liệu tham khảo.',
    body: `
## Kết luận
Sonata số 2 Op. 19 của Alexander Scriabin, dù là một tác phẩm thời trẻ, đã cho thấy rõ những đặc điểm của một ngôn ngữ hoà âm đang chuyển mình. Qua việc phân tích tiến trình hoà âm của hai chương theo từng ô nhịp, tiểu luận đã làm sáng tỏ nhận định vốn phổ biến về tính chuyển tiếp của tác phẩm, đồng thời chỉ ra cụ thể tính chuyển tiếp ấy được thể hiện ở những phương diện nào.

Trước hết, bộ khung hoà âm của tác phẩm vẫn thuộc hoà âm chức năng có điệu tính cuối thế kỷ XIX. Các câu nhạc được khép bằng kết trọn và kết nửa; ly điệu được thực hiện bằng hợp âm át phụ; hợp âm sáu Napoli, ba loại hợp âm sáu tăng và hợp âm bảy bậc II có quãng 3 nâng giữ vai trò chuẩn bị cho hợp âm át theo đúng các nguyên tắc mà sách giáo khoa bốn tác giả đã hệ thống hoá. Ở phương diện này, Scriabin đứng trong truyền thống của Chopin và Liszt.

Thứ hai, trong bộ khung ấy, các biến thể của hợp âm át đã được đẩy rất xa. Hợp âm bảy át quãng 5 hạ mang màu sắc toàn cung, hợp âm chín át có quãng 9 nhỏ, hợp âm át có âm bậc VI hạ thay cho quãng 5, hợp âm át không có âm dẫn ở cuối tác phẩm — tất cả cho thấy hợp âm át đang dần được nhìn như một âm thanh có giá trị tự thân. Đây đúng là hướng phát triển mà Dernova và các nhà nghiên cứu sau này mô tả khi xem hoà âm Scriabin phát triển từ hợp âm át.

Thứ ba, sự trùng âm giữa hợp âm sáu tăng kiểu Đức và hợp âm bảy át được Scriabin khai thác một cách có hệ thống, biến hợp âm sáu tăng thành điểm xoay giữa các giọng. Cùng với các chuyển giọng trùng âm (Rê♯ thứ → Mi♭ thứ, Si♭ thứ → Si trưởng, Rê♭ trưởng → Đô♯ thứ) và các quan hệ quãng 3 (Sol♯ thứ – Si trưởng – Mi trưởng ở chương I; Si trưởng – Sol trưởng – Đô trưởng trên pedal F♯ ở chương II), điều này tạo nên một kế hoạch giọng rộng và đa dạng, làm điệu tính giãn ra mà chưa mất đi.

Thứ tư, các hợp âm thêm nốt, hợp âm quãng 4 treo không giải quyết và các pedal kéo dài làm mờ ranh giới giữa âm hợp âm với âm ngoài hợp âm, và giữa các chức năng với nhau. Ở tầm hình thức, những phương tiện ấy góp phần tạo nên các giải pháp khác thường: chương I mở đầu bằng hợp âm chủ bỏ quãng 3, đặt cả ba chủ đề trình bày ở giọng song song, đưa phần tái hiện sang giọng bậc VI theo kiểu một kết ngắt ở tầm hình thức, và kết thúc ở Mi trưởng; chương II mở đầu bằng chức năng át và đưa đoạn A′ vào trên chức năng át, không có kết.

Tổng hợp lại, Sonata số 2 chưa có hợp âm huyền bí và chưa vượt ra khỏi điệu tính, nhưng hầu hết vật liệu hoà âm của Scriabin thời kỳ sau đã có mặt, ở dạng vẫn còn giải thích được bằng logic chức năng. Các yếu tố mới không xuất hiện như những yếu tố ngoại lai mà nảy sinh từ bên trong chính các phương tiện của hoà âm chức năng. Theo chúng tôi, chính điều đó làm nên ý nghĩa "chuyển tiếp" của tác phẩm trong tiến trình phát triển ngôn ngữ hoà âm của Scriabin.

Tiểu luận còn những hạn chế nhất định. Mức độ chi tiết của phân tích không đồng đều: các ô 46 – 57 và phần tái hiện, coda của chương I (ô 89 – 136) được phân tích theo đoạn và theo sự tương ứng với phần trình bày, không theo từng ô như các phần khác. Ở một số chỗ, cách gọi tên hợp âm còn có thể hiểu theo nhiều cách: hợp âm ở các ô 5, 13, 83, 91 chương II có thể đọc là hợp âm bảy bậc VI thêm quãng 9 hoặc hợp âm bảy chủ thêm âm bậc VI hạ; hợp âm ở ô 23 chương II có thể xem là một pedal hạ át; các hợp âm ở ô 39 và 47 chương II là hợp âm lướt, khó gán một tên duy nhất; hợp âm ở ô 57 – 58 chương II có thể đọc là át phụ lướt. Một số công trình trong phần lịch sử nghiên cứu chúng tôi mới tiếp cận qua nguồn thứ cấp, và chương trình về biển của tác phẩm chưa được đối chiếu với nguyên văn tiếng Nga.

Trên cơ sở kết quả đạt được, chúng tôi cho rằng hướng nghiên cứu tiếp theo có thể là so sánh thủ pháp hoà âm của Sonata số 2 với Sonata số 1 Op. 6 và Sonata số 3 Op. 23, để xác định chính xác hơn vị trí của tác phẩm trong chuỗi sonata của Scriabin, cũng như mở rộng phân tích sang các bình diện tiết tấu và phức điệu mà luận văn của Cha Min-hee đã gợi mở.

## Tài liệu tham khảo
**Tài liệu tiếng Việt**
1. Nguyễn Thị Nhung (2006), *Phân tích tác phẩm âm nhạc*, Quyển 1, Nhạc viện Hà Nội.

**Tài liệu tiếng Nga**
2. Дубовский И., Евсеев С., Способин И., Соколов В. (1937 – 1938), *Учебник гармонии*, Москва.
3. Дернова В. (1968), *Гармония Скрябина*, Ленинград. (Năm và hình thức công bố chưa được đối chiếu với bản gốc.)
4. Мазель Л., Цуккерман В. (1967), *Анализ музыкальных произведений*, Москва.
5. Павчинский С. (1969), *Произведения Скрябина позднего периода*, Москва. (Chưa đối chiếu.)
6. Римский-Корсаков Н. (1884 – 1886), *Практический учебник гармонии*, Санкт-Петербург.
7. Сабанеев Л. (1916), *Скрябин*, Москва.
8. Способин И. (1947; in lại 1984), *Музыкальная форма*, Москва.
9. Тюлин Ю., Бершадская Т., Пустыльник И. (1974), *Музыкальная форма*, Москва.
10. Холопов Ю. (1974), *Очерки современной гармонии*, Москва.
11. Холопов Ю. (1993), "Скрябин и гармония XX века", *Учёные записки* 1, Москва: Государственный мемориальный музей А. Н. Скрябина.

**Tài liệu tiếng Anh và tiếng Hàn**
12. Bae Su-jin (2000), luận văn thạc sĩ về Sonata số 2 của Scriabin, Đại học Nữ Ewha, Seoul (tiếp cận qua tóm tắt).
13. Baker J. M. (1986), *The Music of Alexander Scriabin*, New Haven: Yale University Press.
14. Ballard L., Bengtson M. (2017), *The Alexander Scriabin Companion*, Lanham: Rowman & Littlefield (dẫn qua Wikipedia).
15. Bowers F. (1996), *Scriabin: A Biography*, 2nd ed., New York: Dover (dẫn qua Wikipedia).
16. Cha Min-hee (2015), luận văn thạc sĩ về Sonata số 2 của Scriabin, Đại học Chosun, Gwangju.
17. Chiang E. C. (2013), *Rubato and Climax Projection in Two Piano Sonatas by Scriabin*, luận án DMA, University of Toronto.
18. Leikin A. (2011), *The Performing Style of Alexander Scriabin*, Farnham: Ashgate (dẫn qua Wikipedia).
19. Perle G. (1984), "Scriabin's Self-Analyses", *Music Analysis* 3/2.
20. Piston W. (1941), *Harmony*, New York: Norton.
21. Reise J. (1983), "Late Skriabin: Some Principles behind the Style", *19th-Century Music* 6/3.
22. Sabbagh P. (2003), *The Development of Harmony in Scriabin's Works*, Universal Publishers.
23. Wang Yuhe (2025), *An Exploration of the Selected Piano Music of Frederic Chopin and Alexander Scriabin*, luận án DMA, University of Maryland.

**Văn bản âm nhạc và dữ liệu**
24. Scriabin A. (1898), *Sonate-Fantaisie № 2, Op. 19*, Leipzig: M. P. Belaieff (bản lưu trữ tại IMSLP).
25. Google Magenta, *MAESTRO Dataset v3* (bản ghi MIDI các buổi biểu diễn piano).
`,
  },
  {
    slug: 'scriabin-op19-phu-luc',
    title: 'Phụ lục. Bảng phân tích hoà âm theo từng ô nhịp',
    category: 'analysis',
    summary: 'Phụ lục tiểu luận Sonata số 2 Scriabin: bảng phân tích hoà âm từng ô nhịp hai chương Andante và Presto, ghi theo bậc trong giọng.',
    body: `
Phụ lục trình bày bảng phân tích hoà âm theo từng ô nhịp của hai chương, làm cơ sở cho phần phân tích ở chương 2 và chương 3. Hợp âm được ghi theo bậc trong giọng đang xét, theo hệ thống ký hiệu ở bảng 1.1 (chương 1). Cột "Hợp âm" ghi tên âm thanh của hợp âm và bè trầm kèm ký hiệu bậc; cột "Chức năng" ghi nhóm chức năng; cột "Thủ pháp" ghi hiện tượng hoà âm đáng chú ý.

## Bảng P.1. Chương I — Andante (136 ô nhịp)

### Trình bày (ô 1–57)
| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| Lấy đà–1 | G♯–D♯ quãng 5 rỗng; phách 2 B–D♯–E♯–G♯ (VI♯65: bậc VI nâng của thứ giai điệu) | T | Chủ âm **bỏ quãng 3** — màu "rỗng" mở đầu; fermata |
| 2 | D43 (D♯7/A♯) → D7 → D2 (bass C♯) | D | Dừng trên D2 chưa giải quyết |
| 3 | E/B → VI – II65 – t64 – s6; phách mạnh có G♯ ở bè trầm | S trên T | Bè trầm đi liền bậc trên **pedal chủ** G♯ |
| 4 | s64 trên pedal G♯; II43 (A♯ø7/E) | S | Fermata |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 5 | II65 – t64 – s6 – **IV♯6♭3** (E–G♯–C𝄪) | S → D của D | 6 tăng Ý trên pedal chủ |
| 6 | **II7♯3** (A♯–C𝄪–G♯), sf → IV♯6♭3 (p) | D của D | Át phụ của át đi lùi về 6 tăng |
| 7 | D – s – bass B, A♯ – VI64 (E/B) – G♯ | D–S–T | Bè trầm đi xuống liền bậc kiểu "lament" |
| 8 | D – s7 (C♯–E–G♯–B) – B – A♯ – VI64 – G♯ | D–S–T | Lặp có biến hoá |
| 9 | s – B – A♯ – VI64 – G♯ – **II♭6 (Napoli)** (La trưởng/C♯, A♮) – G♯ | S | Napoli chạm qua rồi trở lại chủ |
| 10 | **II65♯3♭5** (E–G♯–A♯–C𝄪, C𝄪 ở bè trầm) – G♯ – D (mf) | D của D → D | 6 tăng Pháp **thể đảo** (âm 6 tăng ở bè trầm) |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 11 | Motif mở đầu trên **d** (Rê♯ thứ): D♯–A♯ rỗng; F♯–A♯–B♯–D♯ | D (thứ) | Mô tiến motif lên quãng 5 |
| 12 | A♯7/E♯ (D43 của d) – D7 – D2 (bass G♯), fermata | D của D | Giải quyết lệch sang F♯ ở ô 13 |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 13 | **Si trưởng**: T64 – nốt dựa C♯/E – T – D – T | T của III | Chủ đề 1 vào thẳng giọng song song |
| 14 | G♯m thêm E♯ (VI của Si) | T thay | Hợp âm thêm nốt 6 nâng |
| 15 | Rê♯ thứ (III của Si): K64 – D (A♯–C𝄪–E♯) – t; cuối ô A♮ | D của Si | Ly điệu chạm qua |
| 16 | B7 (D7→IV) | D của IV | Át phụ của S |
| 17 | S (Mi trưởng) | S | |
| 18 | C♯–E–G♮–B = II7 **mượn Si thứ** | S thứ | [[hop-am-muon|Hợp âm mượn]] (G♮) |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 19 | T64 | T (K64) | |
| 20 | F♯–A♯–C♮–E = **D7 quãng 5 hạ** | D biến | Âm hình toàn cung, gần II43♯3♭5 |
| 21 | VI → III (E♯ lướt) | T thay | |
| 22 | như ô 20 nhưng viết **B♯** (F♯–A♯–B♯–E) | D biến | Cùng âm thanh, hai cách viết |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 23 | Chủ đề 2 (p, rubato): B–E–F♯ (T quãng 4 treo) – S6 – II7 | T–S | Nhiều lớp phức điệu |
| 24 | G♯ quãng 4 treo – C♯m/E – A♯ø7/E – VI | T thay–S | |
| 25 | như 24 | | |
| 26 | … F♯7 (D) treo | D | |
| 27 | B7 quãng 4 treo với **A♮ ở bè trầm** (D2 của S) → E/G♯ (S6) | D của IV → S | |
| 28 | như 27 → C♯m7 rải | S | |
| 29 | C♯m7 + A♯ (A♯ø7/C♯), cresc. | S | |
| 30 | II65 – D – T (Si) | S–D–T | [[cau-ket|Kết trọn]] câu đầu chủ đề 2 |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 31 | T — câu nhắc lại, móc kép | T | |
| 32 | G♯ quãng 4 treo → E/G♯, nốt thêu dưới F𝄪 | | [[not-ngoai-hop-am|Nốt thêu]] cromatic |
| 33 | C♯m7 → F♯7 | S–D | |
| 34 | B7 treo/A♮ → T → C♯m7/G♯ → E/G♯ (pp) | | |
| 35 | B7 treo/A♮ → C♯m7/B → chuỗi lướt E–D♯–D–C♯–C–B trên bè trầm G♯ | | Lướt cromatic đi xuống |
| 36 | C♯m7 → E/B | S | |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 37 | Giai điệu đơn G♯–A♯–B–A♯–G♯ (tay trái nghỉ) | — | Đoạn chuyển mở bằng một bè |
| 38 | F♯7 (B treo → A♯) = D7 của Si | D | |
| 39 | C♯m/G♯ | S | |
| 40 | F♯7 | D | |
| 41 | C♯m/G♯ → C♯m/E | S | |
| 42 | VI (G♯m) – D♯ – G♯ – C♯m/E | T thay–S | |
| 43 | G♯m7 rải móc kép, cresc. | | |
| 44 | C♯m7 – A♯°/C♯ – F♯7 | S–D | |
| 45 | T (Si) trên B0–B1, mf | T | Mở pedal chủ cho chủ đề 3 |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 46–51 | Chủ đề 3 ("ben marcato il canto") trên **pedal B**: T – II7 – VI7 – T thêm 9 | T kéo dài | Pedal chủ, hợp âm thêm nốt |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 52–57 | Đoạn kết trên pedal B; ô 57 hợp âm rải nhấn, đóng ở Si trưởng | T | |

### Phát triển (ô 58–88)
| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 58–59 | Motif mở đầu trên Si | | |
| 60–61 | Motif trên **Rê trưởng** (III♭ của Si); cuối ô 61 xoá hoá biểu | | Quan hệ [[trung-am-cromatic|trung âm cromatic]] |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 62–66 | Vòng quãng 5 đi xuống: Sol thứ → Đô thứ → Fa thứ (viết dấu giáng) | | [[mo-tien-hoa-am|Mô tiến]] |
| 66–74 | Fø7 → B♭7 → **Mi♭ thứ** (= Rê♯ thứ, giọng át viết trùng âm); đỉnh ff xen các đoạn p rải | S–D của Mi♭ | Viết giọng át bằng dấu giáng |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 75–76 | Hoá biểu năm thăng trở lại, ff: A♯ø7 (II7) → D♯7♭9 (D7♭9) của Sol♯ thứ | S–D | Mi♭ thứ được hiểu lại là Rê♯ thứ |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 77 | **Sol trưởng** bất ngờ (p) | | Trượt nửa cung |
| 78 | B7 → E; hợp âm ba tăng E–G♯–B♯; rồi II43♯3♭5 | | [[hop-am-ba-tang|Hợp âm ba tăng]] |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 79–86 | **Pedal át D♯**: II43♯3♭5 (E–G♯–A♯–C𝄪) ↔ D7♭9/V (A♯) ↔ D; cresc. tới ff | D của D–D | Pedal át dài trước tái hiện |
| 87–88 | Motif mở đầu ff ở Sol♯ thứ: G♯–D♯ rỗng; D43 – D7 – D2; fermata | D | Như ô 1–2, phóng to |

### Tái hiện và coda (ô 89–136)
| Ô | Hợp âm | Ghi chú |
|---|---|---|
| 89–94 | Chủ đề 1 ở **Mi trưởng** (hoá biểu 4 thăng): T64… | = ô 13–18 dịch **xuống quãng 5**. Sau pedal D♯ (V của Sol♯ thứ), nhạc vào VI (Mi) — một dạng [[cau-ket|kết lừa]] ở tầm hình thức |

| Ô | Hợp âm | Ghi chú |
|---|---|---|
| 95–99 | B–D♯–E♯–A = D7 quãng 5 hạ của Mi | tương ứng ô 19–22 (dài hơn một ô) |
| 100–112 | Chủ đề 2 ở Mi trưởng (A = S, F♯m7 = II7, D♯ø7…) | tương ứng ô 23–36 |
| 113–121 | Đoạn chuyển (B7 … C♯m …) | tương ứng ô 37–45 |
| 122–127 | Chủ đề 3 ở Mi trưởng trên **pedal E**, 8va | tương ứng ô 46–51 |

| Ô | Hợp âm | Ghi chú |
|---|---|---|
| 128–136 | Coda trên pedal E1: T – VI7 (C♯m7/E) – T thêm 6/9 – màu plagal (A); ô 135–136 motif mở đầu ở Mi trưởng: E–B rỗng → E/G♯ có nốt hoa mỹ C♯; smorz., fermata | Kết ở **Mi trưởng** |

## Bảng P.2. Chương II — Presto (110 ô nhịp)

### Đoạn A (ô 1–40), Sol♯ thứ
| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 1 | Bè trầm D♯ – C♯ luân phiên (D – D2); bè giữa vờn G♯ – B quanh F𝄪, A♯ | D (chất liệu T treo trên D) | **Mở chương bằng át**, không bằng chủ |
| 2 | VI (Mi), bè trầm E – B | T/S | Gam đi xuống G♯–F♯–E–D♯–C♯ |
| 3 | s7/B (C♯–E–G♯–B) ↔ II65 (A♯–C♯–E–G♯); bè trầm B – A♯; B♯ thêu C♯ | S | Hai hợp âm S chung ba nốt, chỉ đổi bè trầm |
| 4 | s (Đô♯ thứ), bè trầm C♯ – G♯ | S | |
| 5 | Mi trưởng thêm 7 trưởng và 9 (E–G♯–B–D♯–F♯), bè trầm B – G♯ | T/S | Hợp âm thêm nốt; nghe được cả VI7 lẫn t7 có ♭6 |
| 6 | **IV♯65♭3 của giọng bậc V**: B–D♯–F♯–G𝄪; bè trầm B – G𝄪 luân phiên | D của D | Quãng 6 tăng viết thành **quãng 3 giảm** B–G𝄪, hai nốt cùng đổ về A♯ |
| 7 | II7♯3 (A♯–C𝄪–E♯–G♯) có D♯ treo, B (♭9); bè giữa D♯–E♯–F♯–A♯; cuối ô E♮ báo trước ♭9 của D | D của D | |
| 8 | **D9♭** (D♯–F𝄪–A♯–C♯–E); bè giữa B–A♯–G♯–F𝄪 | D | Kết nửa — hết câu 1 |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 9 | D7→IV (G♯–B♯–D♯–F♯), bè trầm G♯ – F♯ | D/S | **Mô tiến** ô 1 lên quãng 4 |
| 10 | La trưởng (VI của Đô♯ thứ), bè trầm A – E | S/iv | = ô 2 lên quãng 4 |
| 11 | F♯m7/E ↔ D♯ø7, bè trầm E – D♯ | S của s | = ô 3 lên quãng 4; E♯ thêu |
| 12 | F♯m (s của Đô♯ thứ), bè trầm F♯ – C♯ | | = ô 4 lên quãng 4 |
| 13 | La thêm 7, 9, bè trầm E – C♯ | | = ô 5 lên quãng 4. La cũng là Napoli của Sol♯ thứ |
| 14 | **IV♯65♭3 của Sol♯ thứ**: E–G♯–B–C𝄪 (có A♮ lướt); bè trầm E – C𝄪 | D của D | Mô tiến được "bẻ" về giọng chính |
| 15 | D9♭ có G♯ treo (4–3); bè giữa G♯–A♯–B–D♯ | D | |
| 16 | **t** (Sol♯ thứ), F𝄪 thêu; bè giữa E–D♯–C♯–B | T | Kết trọn — hết đoạn 16 ô (8 + 8) |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 17 | B9 (+13) trên bè trầm B (8va bassa) = D9 của Mi, dolcissimo pp | D của Mi trưởng (VI) | |
| 18 | B7 (D7 của Mi), A♮ | | |
| 19 | B7 trên bè trầm E (Ped.) | D trên T | Át chồng lên chủ của Mi |
| 20 | Mi trưởng T64 thêm 6 (C♯) | T của VI | Màu sixte ajoutée |
| 21 | **E7 (D♮)** +9 +13 = D7 của La | | D♮ |
| 22 | E7 có A treo (4–3) | | |
| 23 | E7 chồng trên bè trầm A | | Át chồng lên chủ của La |
| 24 | II♭6 (Napoli) (A/C♯) – s6 (C♯m/E, D♮ thêu) – D7 (D♯–F𝄪–A♯–C♯) | S–S–D | La trưởng đổi vai: VI của Mi → **Napoli** của Sol♯ thứ |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 25–28 | = ô 1–4 | | Tái hiện rút gọn |
| 29 | **Mi thứ** thêm 7 trưởng (E–G♮–B–D♯), bè trầm B – G♮; f rit. | T/S thứ hoá | VI chuyển sang thứ (G♮ trùng âm với F𝄪) |
| 30 | E–G–B → **IV♯65♭3** (E–G♯–B–C𝄪); bè trầm B – E; bè cromatic G♮–G♯, A–A♯ | D của D | |
| 31 | = ô 15 (D9♭ có quãng 4 treo), a tempo dim. | D | |
| 32 | = ô 16 (t) | T | Câu 25–32 nén 16 ô thành 8 |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 33 | G♯ → **II♭ (Napoli)** (La trưởng thế gốc, A♮), f, có dấu nhấn | T–S | |
| 34 | G♯ → VII7 (F𝄪–A♯–C♯–E) | T–D | |
| 35 | t (G♯–B–D♯ + E) ↔ **II♭6 (Napoli) thêm sixte** (A–C♯–E–F♯, bè trầm C♯); p | T–S | Napoli thêm nốt 6, cũng là F♯m7/C♯ |
| 36 | t – bè trầm D♯ dưới gam thứ tự nhiên đi xuống (F♯ không nâng) – t | T–D–T | Kết bằng **át thứ** |
| 37 | Si trưởng (III); bè trầm G𝄪 → B; f | T thay | G𝄪 chuẩn bị A♯ ở ô sau |
| 38 | D♯m/A♯ (d64) với các nốt thêu A♯–C𝄪–E♯ | K64 của Rê♯ thứ | |
| 39 | Bè trầm A♯–F♯–G♯–B; VI♯7 (E♯–G♯–B–D♯); F𝄪, B♯ thêu | D | |
| 40 | **t** (Sol♯ thứ, hợp âm lớn) → chạy xuống E♯, C𝄪 tới **D7♭9 của Rê♯ thứ** (A♯) trên bè trầm A♯ | T → D/v | **A♯ = B♭**: nốt chung mở cửa sang Mi♭ thứ |

### Đoạn B (ô 41–78)
| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 41 | **Mi♭ thứ** (hoá biểu sáu giáng): t; giai điệu G♭–F–E♭–D♮–E♭; B♭ ngân ở bè trong | T | **Chuyển giọng trùng âm**: Rê♯ thứ (d) viết thành Mi♭ thứ |
| 42 | II43 (Fø7/C♭) → **D có ♭6** (B♭–D–G♭); bè trầm B♭–A♭–G♭ (liên ba có dấu nhấn) | S–D | G♭ = nốt ♭6 trên át |
| 43 | t6 thêm **6 nâng** (C♮; giai điệu C–D–E♭ theo thứ giai điệu), bè trầm G♭; rồi F–E♭–D♭ | T | |
| 44 | **II43♯3♭5** (C♭–E♭–F–A♮), sff | D của D | Bè trầm đi xuống gam Mi♭ thứ B♭→C♭ suốt ô 41–44; II43♯3♭5 = D7 quãng 5 hạ của B♭ |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 45 | **Pedal B♭** (D) dưới hình t64 (E♭–G♭–B♭ + F, C♭); p | D | |
| 46 | Pedal B♭; bè trầm bắt đầu đi lên: C♭ | | |
| 47 | Bè trầm C♮–D♭–D♮–E♭ dưới hình Mi♭ thứ đứng yên | lướt | Hợp âm lướt sinh ra từ bè trầm cromatic |
| 48 | Bè trầm E♮ – F: t64 của Si♭ thứ → D7♭9 (F–A–C–E♭ + G♭, D♭) | D của Si♭ thứ | |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 49 | **Si♭ thứ** (năm giáng): t; giai điệu D♭–C–B♭–A–B♭ | T | = ô 41 dịch lên quãng 5 |
| 50 | II43 (Cø7/G♭) → D♭6 (F–A–D♭); bè trầm F–E♭–D♭ | S–D | = ô 42 |
| 51 | t6 + 6 nâng (G♮; giai điệu G–A–B♭); bè trầm D♭ rồi C–B♭–A♭ | T | = ô 43 |
| 52 | **G♭7** (G♭–B♭–D♭–F♭), sff | D của D | IV♯65♭3 của Si♭ thứ **viết như D7 của C♭** (F♭ thay E) |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 53 | **Si trưởng** (= Đô♭) T64 thêm 6, trên **pedal F♯** (= G♭); pp; hoá biểu xoá, viết dấu thăng | T trên D | G♭7 hiểu thành F♯7 = D7 của Si; bè trầm giữ nguyên |
| 54 | **Sol trưởng** (Gmaj7/F♯) = VI♭ của Si, trên pedal F♯ | | Trung âm cromatic trên pedal |
| 55 | **Đô trưởng thêm 6** (C–E–G–A) = II♭ (Napoli) (Napoli) của Si, trên F♯ | S | Napoli cách bè trầm một tritone |
| 56 | **F♯7♭9** (F♯–A♯–C♯–E–G♮) = D9 của Si; nhóm chín nốt đi xuống cromatic | D | |
| 57 | G7, bè trầm G | | II♭7 so với F♯ |
| 58 | G°7 (G–A♯–C♯–E) → **F♯7** ở phách cuối (= G♭7, IV♯65♭3 của Si♭ thứ) | D của D | |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 59 | Si♭ thứ, **pedal F** (D) dưới hình t64 (B♭–D♭–F + C, G♭); pp | D | = ô 45 lên quãng 5 |
| 60 | Pedal F → bè trầm F–C–D♭–F–G♭ | | |
| 61 | Bè trầm G♮–A♭–A♮–B♭ đi lên cromatic | lướt | |
| 62 | Bè trầm **B𝄫** (= A, viết theo chiều đi xuống) → A♭: A♭9 (D9 của Rê♭) | D | Cùng một phím viết A♮ khi đi lên, B𝄫 khi đi xuống |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 63 | **Rê♭ trưởng**: T; giai điệu F–E♭–D♭–C–D♭; f | T | Hình 3–2–1–7–1 sang giọng trưởng |
| 64 | T; giai điệu F → A♭ (ten.) | T | |
| 65 | T → T64 có nốt 6 thêu (B♭–A♭ luân phiên trên bè trầm A♭) | T | Sixte ajoutée |
| 66 | như 65; giai điệu F → A♭ | T | |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 67 | **Đô♯ thứ** (hoá biểu năm thăng): t; giai điệu E–D♯–C♯–B♯–C♯; fp | T | Rê♭ trưởng → Đô♯ thứ: cùng chủ âm, trưởng hoá thứ, viết trùng âm |
| 68 | t; E → G♯ (ten.) | T | |
| 69 | t → t64 có ♭6 thêu (A–G♯ luân phiên trên G♯) | T | |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 70 | như 69 | T | |
| 71 | **E7** (E–G♯–B–D♮), bè trầm G♯ – D luân phiên (D65 – D2 của La); p, cresc. | D của IV | E7 = VI7 của Sol♯ thứ, trùng âm với IV♯65♭3 |
| 72 | Bè trầm **C𝄪** (D♮ viết lại) → E: IV♯65♭3 của Sol♯ thứ (đảo) → s6 (C♯m/E); f | D của D → S | Đổi cách viết D♮ → C𝄪 ngay tại chỗ: E7 hiểu lại thành IV♯65♭3 |
| 73 | = 71 | | |
| 74 | = 72 | | |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 75 | **Pedal D♯**: t64 kết (G♯m/D♯); giai điệu A♯–G♯–G♯–A♯–B; mf | D | |
| 76 | như 75; giai điệu D♯–C♯–B–C♯–D♯; C♯, B♯ thêu | D | |
| 77 | D (D♯ quãng 8, sf) – VI6 (E/G♯) – D | D–T/S–D | |
| 78 | D9♭ (D♯–F𝄪–A♯–C♯–E, thêm B) | D | Đoạn A′ vào ngay trên át — không có kết |

### A′ (ô 79–92) và coda (ô 93–110)
| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 79–92 | = ô 1–14 (cùng bè trầm và hợp âm; sắc thái mạnh hơn: sf, f, cresc.) | | |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 93–94 | **IV♯65♭3** (E–G♯–B trên bè trầm C𝄪) ngân hai ô; mf cresc., hợp âm 8va | D của D | Thay cho D ở ô 15: hợp âm 6 tăng được phóng to |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 95 | Pedal D♯: t64 kết; **giai điệu đoạn B trở về ở giọng chính** (B–A♯–G♯–F𝄪–G♯); p | D | Tổng hợp hai đoạn |
| 96 | II7 (A♯–C♯–E–G♯) → D7 có ♭6, trên pedal D♯ | S–D | = ô 42 ở giọng chính |
| 97 | t64 + 6 nâng (E♯; giai điệu E♯–F𝄪–G♯) trên D♯ | | = ô 43 |
| 98 | IV♯65♭3 (E–G♯–B–C𝄪) trên pedal D♯; f cresc. | D của D | |
| 99 | t64 kết, ff | D | |
| 100 | IV♯65♭3 (thêm A♯) trên D♯, ff | D của D | |
| 101 | s/D♯ → **D7** (D♯–F𝄪–A♯–C♯), ff | S–D | |
| 102 | **t** (bè trầm G♯): giai điệu đoạn B trên chủ âm; p cresc. | T | Kết trọn của cả chương |

| Ô | Hợp âm (bè trầm) | Chức năng | Thủ pháp |
|---|---|---|---|
| 103 | t với C𝄪 thêu ở bè trầm (màu IV♯65♭3); giai điệu B → D♯ (ten.) | T | |
| 104 | t với D♯–E luân phiên (5 – ♭6); mf dim. | T | |
| 105 | giai điệu B → D♯ (ten.) như 103; tay trái D♯–E luân phiên như 104 | T | |
| 106 | như 104, giai điệu lên một quãng 8; p | T | |
| 107 | như 105; cuối ô bè trầm D♯ | T | |
| 108 | Bè trầm D♯ – G♯ luân phiên: D (có G♯, E, B nhưng **không có âm dẫn F𝄪**) – t; pp | D–T | Át không có âm dẫn |
| 109 | như 108 | D–T | |
| 110 | **t** (G♯–B–D♯), sf, Ped. | T | Kết ở **Sol♯ thứ** |
`,
  },

]
