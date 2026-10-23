import type { Article } from '../wiki'

export const form: Article[] = [
  {
    slug: 'lo-trinh-hinh-thuc',
    title: 'Giai điệu và hình thức: hệ thống và lộ trình',
    category: 'form',
    aliases: ['lộ trình hình thức', 'học hình thức âm nhạc', 'cấu trúc âm nhạc', 'musical form overview', 'Formenlehre tổng quan', 'các cấp độ hình thức'],
    summary: 'Bài tổng quan của mục: âm nhạc được xây theo nhiều tầng (motif → câu → đoạn → phần → chương → tác phẩm nhiều chương), hai cách hiểu hình thức (khuôn mẫu và chức năng), và thứ tự học các bài.',
    wiki: 'Musical_form',
    refs: [
      ['Open Music Theory 2e — Form (mục lục chương)', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/03%3A_Form'],
      ['Wikipedia — Musical form', 'https://en.wikipedia.org/wiki/Musical_form'],
      ['Caplin — What are formal functions? (PDF)', 'https://www.music.mcgill.ca/~caplin/what-are-formal-functions.pdf'],
      ['Deutsche Biographie — Marx, Adolph Bernhard (Formenlehre)', 'https://www.deutsche-biographie.de/119065290.html'],
    ],
    body: `
**Hình thức** là cách các phần của một tác phẩm được sắp xếp theo thời gian: cái gì lặp lại, cái gì tương phản, cái gì quay về. Hiểu hình thức giúp **nghe** có định hướng, **học thuộc** nhanh và **biểu diễn** có đường đi.

## Âm nhạc được xây theo tầng
| Tầng | Đơn vị | Bài |
|---|---|---|
| Nhỏ nhất | **Motif** — vài nốt có bản sắc | [[motif]] |
| | **Ý nhạc** (khoảng 2 ô) | [[cau-nhac]] |
| | **Câu nhạc** — kết thúc bằng một kết | [[cau-nhac]], [[cau-ket]] |
| | **Đoạn nhạc / chủ đề** (thường 8 ô): period, sentence | [[cau-nhac]] |
| | **Phần** — A, B… | [[hinh-thuc-am-nhac]] |
| | **Chương** — hai đoạn, ba đoạn, rondo, sonata, biến tấu… | các bài bên dưới |
| Lớn nhất | **Tác phẩm nhiều chương** — sonata, [[giao-huong|giao hưởng]], concerto, [[to-khuc-baroque|tổ khúc]] | [[the-loai]] |
Giai điệu là "sợi chỉ" chạy qua các tầng (xem [[giai-dieu]]); hoà âm — đặc biệt là các [[cau-ket|kết]] và [[chuyen-giong|chuyển giọng]] — đánh dấu ranh giới giữa các đơn vị.

## Hai cách hiểu hình thức
- **Khuôn mẫu** (truyền thống Formenlehre của thế kỷ 19, từ A. B. Marx): hình thức là các **mẫu** có tên — hai đoạn, ba đoạn, rondo, sonata. Câu hỏi: tác phẩm thuộc mẫu nào?
- **Chức năng** ([[arnold-schoenberg|Schoenberg]], Ratz, Caplin): mỗi phần đóng một **vai trò theo thời gian** — mở đầu, ở giữa, kết thúc (xem [[chuc-nang-hinh-thuc]]). Câu hỏi: phần này đang **làm gì**?
Thêm vào đó là cách nhìn của thế kỷ 18: hình thức được ghép từ các **khuôn mẫu bè trầm – giai điệu** (xem [[luoc-do-galant]]) và từ các câu có "dấu câu" khác nhau (xem [[lich-su-phan-tich-am-nhac]]).

## Lộ trình học
1. **Giai điệu và ý nhạc**: [[giai-dieu]] → [[motif]].
2. **Câu nhạc**: [[cau-nhac]] → [[mo-rong-cau-nhac]] → [[sieu-nhip]]; ôn [[cau-ket]].
3. **Hình thức nhỏ**: [[hinh-thuc-am-nhac]] (hai đoạn, ba đoạn) → [[minuet-va-trio]] (ba đoạn kép).
4. **Hình thức lớn**: [[bien-tau]] → [[ostinato]] → [[rondo]] → [[hinh-thuc-sonata]] → [[hinh-thuc-concerto]].
5. **Lý thuyết hình thức hiện đại**: [[chuc-nang-hinh-thuc]], [[luoc-do-galant]], [[ly-thuyet-chu-de]] (các "chủ đề biểu đạt" quen thuộc).
6. **Đối âm và hình thức phức điệu**: [[doi-am]] → [[phuc-dieu-nghiem-khac]] → [[doi-am-5-loai]] → [[doi-am-kep]] → [[fugue]].
   Phức điệu nghiêm khắc từng bước: [[quang-va-chuyen-dong-doi-am]] → [[cantus-firmus]] → [[doi-am-loai-1]] → [[doi-am-loai-2]] → [[doi-am-loai-3]] → [[doi-am-loai-4]] → [[doi-am-loai-5]] → [[doi-am-ba-bon-be]] → [[phong-cach-palestrina]]; bảng công thức: [[cong-thuc-phuc-dieu]].
   Theo giáo trình Nhạc viện Hà Nội (hệ Taneyev): [[khai-niem-va-quy-uoc-phuc-dieu]] → [[giai-dieu-phuc-dieu-nghiem-khac]] → [[doi-vi-don-gian-hai-be]] → [[doi-vi-phuc-tap]] → [[doi-vi-chuyen-dong-chieu-doc]] → [[doi-vi-chuyen-dong-chieu-ngang]] → [[doi-vi-dao-anh]] → [[mo-phong-don-gian]] → [[canon-hai-be]] → [[canon-ba-bon-be]] → [[hinh-thuc-phuc-dieu-nghiem-khac]]; thuật ngữ: [[thuat-ngu-phuc-dieu]].
7. **Kết cấu, thể loại, thế kỷ 19**: [[ket-cau]] → [[the-loai]] (toàn cảnh: [[the-loai-am-nhac]]) → [[bien-doi-chu-de]].
8. **Hình thức phổ thông và jazz**: [[blues-12-nhip]], [[hinh-thuc-ca-khuc-32]].
Áp dụng vào tác phẩm cụ thể: [[phuong-phap-phan-tich-tac-pham]].

## Mẹo nhận ra hình thức khi nghe
- Đánh dấu chỗ **chủ đề mở đầu quay lại**: đó là cột mốc lớn nhất.
- Để ý các **kết mạnh** và chỗ **đổi giọng**: chúng chia các phần.
- Hỏi: phần mới **tương phản** (chất liệu mới) hay **phát triển** (chất liệu cũ bị xé nhỏ, chuyển giọng liên tục)?

**Hình thức trong phụng vụ:** [[alternatim-va-thanh-le-organ]] (organ và ca đoàn luân phiên từng câu) và [[viet-binh-ca-cho-tieng-ban-dia]] (đặt lời âm tiết, [[ky-am-binh-ca-gregorian|neume]], melisma).

**Các hình thức chi tiết:** [[hinh-thuc-hai-doan]], [[hinh-thuc-ba-doan]], [[passacaglia-va-chaconne]], [[sonata-rondo-va-cac-loai-rondo]], [[hinh-thuc-ca-khuc-pho-thong]]; màu dàn nhạc: [[phoi-khi-nguyen-ly-co-ban]].
`,
  },
  {
    slug: 'giai-dieu',
    title: 'Giai điệu',
    category: 'form',
    also: ['analysis'],
    aliases: ['melody', 'đường nét giai điệu', 'contour', 'liền bậc', 'nhảy quãng'],
    summary: 'Chuỗi nốt nối tiếp có cao độ và nhịp điệu, tạo nên "câu hát" của bản nhạc.',
    wiki: 'Melody',
    refs: [
      ['Von Hippel & Huron (2000) — Why do skips precede reversals? The effect of tessitura on melodic structure (Music Perception)', 'https://labs.sonicfield.org/library/why-do-skips-precede-reversals-the-effect-of-tessitura-on-melodic-structure'],
      ['Vos & Troost (1989) — Ascending and descending melodic intervals: statistical findings and their perceptual relevance (Music Perception)', 'https://labs.sonicfield.org/library/ascending-and-descending-melodic-intervals-statistical-findings-and-their-percep'],
    ],
    body: `
Giai điệu = **[[cao-do|cao độ]]** ([[not-nhac]], [[quang]]) + **[[tiet-tau|nhịp điệu]]** ([[truong-do]]).

## Đường nét
- **Đi lên**: tăng năng lượng, hướng tới cao trào.
- **Đi xuống**: thư giãn, khép lại.
- **Hình vòm** (lên rồi xuống): đường nét phổ biến nhất trong [[cau-nhac]].

## Chuyển động
- **Liền bậc**: đi sang nốt kề bên trong [[am-giai|âm giai]] — dễ hát, mượt.
- **Nhảy quãng**: quãng 3 trở lên — tạo điểm nhấn. Quy tắc cổ điển: sau một **bước nhảy lớn**, giai điệu thường **quay ngược lại** bằng bước liền bậc.

## Vì sao sau bước nhảy giai điệu hay quay lại?
Quy tắc "nhảy rồi lấp khoảng trống" (gap-fill) được [[ky-vong-am-nhac|Leonard Meyer]] nêu từ năm **1956**: sau một bước nhảy lớn, người nghe chờ giai điệu quay về lấp chỗ trống. Nghiên cứu sau này giải thích khác đi:
- **Von Hippel và Huron (2000)** xác nhận hiện tượng: trong giai điệu thanh nhạc của nhiều nền văn hoá trên **bốn châu lục**, một quãng lớn thường được theo sau bởi sự **đổi hướng**.
- Nhưng họ cho rằng nguyên nhân chủ yếu là **giới hạn âm vực**: bước nhảy thường đưa giai điệu tới **mép âm vực** của nó, và từ đó gần như chỉ còn đường đi ngược lại. "Lấp khoảng trống" có thể chỉ là **hệ quả phụ** của giới hạn âm vực trong những kho nhạc họ khảo sát.
- **Vos và Troost (1989)**, khảo sát một lượng lớn nhạc phương Tây, thấy quãng **nhỏ** phần nhiều **đi xuống**, quãng **lớn** phần nhiều **đi lên**.
- Một thí nghiệm khác thấy các "quy tắc" này mạnh hơn ở sinh viên âm nhạc so với người không học nhạc → chúng có thể là thói quen **học được**, không phải bẩm sinh.

Với người chơi đàn: một bước nhảy lớn là điểm nhấn tự nhiên; nốt "quay lại" sau đó thường nhẹ hơn (xem [[dien-dat-cau-nhac]]).

## Giai điệu và hoà âm
Nốt dài, rơi vào [[so-chi-nhip|phách mạnh]] thường là nốt của [[hop-am-ba|hợp âm]]; các nốt nối là [[not-ngoai-hop-am]]. Giai điệu được phát triển từ các ý nhỏ — xem [[motif]].
`,
  },
  {
    slug: 'motif',
    title: 'Motif',
    category: 'form',
    also: ['analysis'],
    aliases: ['mô-típ', 'motive', 'chủ đề', 'theme', 'phát triển motif', 'nét nhạc'],
    summary: 'Ý nhạc ngắn nhất có bản sắc riêng (vài nốt), được lặp lại và biến đổi để xây dựng cả tác phẩm.',
    wiki: 'Motif_(music)',
    refs: [
      ['Wikipedia — Symphony No. 5 (Beethoven)', 'https://en.wikipedia.org/wiki/Symphony_No._5_(Beethoven)'],
      ["The Listeners' Club — Beethoven's Fifth Symphony: an exhilarating motivic journey", 'https://thelistenersclub.com/2021/10/06/beethovens-fifth-symphony-an-exhilarating-motivic-journey/'],
      ['Almada & Mayr (EuroMAC 2017) — Grundgestalt and developing variation', 'https://creaa.unistra.fr/websites/gream/Activites/Euromac_2017_-_Postprint_-_Article_-_DE_LEMOS_ALMADA_Carlos_-_MAYR_Desiree.pdf'],
    ],
    body: `
Ví dụ nổi tiếng nhất: bốn nốt **ngắn – ngắn – ngắn – dài** mở đầu **[[the-loai|Giao hưởng]] số 5** Đô thứ của [[Beethoven]].
::rhythm 2/4 re e-e-e / h // | Ngắn – ngắn – ngắn – dài: tiết tấu motif mở đầu Giao hưởng số 5
::staff treble G4 G4 G4 Eb4 | Cao độ của motif: G – G – G – E♭

## Một motif cho cả bản giao hưởng
- Motif bốn nốt của [[giao-huong|Giao hưởng]] số 5 xuất hiện **gần như trong mọi [[so-chi-nhip|ô nhịp]]** của chương 1, kể cả trong đoạn phát triển.
- Nó còn quay lại ở **các chương sau**, thường dưới dạng biến đổi: ở chương chậm, nhịp **ngắn – ngắn – ngắn – dài** trở lại trong những hình dạng mới.
- Câu "số phận gõ cửa" thường gắn với motif này chỉ là **giai thoại**: không có bằng chứng đáng tin rằng Beethoven từng nói vậy.

## Grundgestalt và "biến tấu phát triển"
[[Schoenberg]] đặt tên cho hai ý tưởng có liên hệ với nhau:
- **Grundgestalt** ("hình dạng cơ bản"): một nhóm yếu tố — chuỗi [[quang|quãng]], [[tiet-tau|nhịp điệu]], quan hệ hoà âm — mà từ đó **phần lớn chất liệu** của tác phẩm được suy ra. Motif là **phần nhỏ nhất** của nó; một Grundgestalt có thể chứa nhiều motif.
- **Biến tấu phát triển** (developing [[bien-tau|variation]]): **quá trình** biến đổi liên tục hình dạng ấy bằng đảo, nới rộng quãng, phân đoạn, đặt lệch so với phách…

Schoenberg coi [[Brahms]] là bậc thầy của lối viết này (gọi ông là "Brahms người cấp tiến"), và truy nguồn nó về các nhà soạn nhạc Cổ điển Vienna như Beethoven và [[Schubert]].

## Các kỹ thuật phát triển motif
| Kỹ thuật | Cách làm |
|---|---|
| Lặp lại | Nhắc lại y nguyên |
| Mô tiến ([[mo-tien-hoa-am|sequence]]) | Lặp lại ở [[cao-do|cao độ]] khác, cao dần hoặc thấp dần |
| Đảo | Lật ngược chiều các quãng (lên thành xuống) |
| Nghịch hành | Đọc từ cuối về đầu |
| Tăng [[truong-do|trường độ]] | Kéo dài mọi nốt (thường gấp đôi) |
| Giảm trường độ | Rút ngắn mọi nốt |
| Phân đoạn | Chỉ dùng một phần của motif |

Motif → [[cau-nhac]] → đoạn → [[hinh-thuc-am-nhac|hình thức]]. Các kỹ thuật này đặc biệt quan trọng trong [[doi-am]], [[fugue]] và phần phát triển của [[hinh-thuc-sonata]].
`,
  },
  {
    slug: 'cau-nhac',
    title: 'Câu nhạc và đoạn nhạc',
    category: 'form',
    also: ['analysis'],
    aliases: ['câu nhạc', 'đoạn nhạc', 'phrase', 'period', 'câu hỏi câu trả lời', 'tiết nhạc', 'antecedent', 'consequent', 'sentence', 'câu kiểu sentence'],
    summary: 'Câu nhạc là ý nhạc trọn vẹn kết thúc bằng một kết (thường 4 ô nhịp); hai câu hỏi – đáp tạo thành đoạn nhạc.',
    wiki: 'Phrase_(music)',
    refs: [
      ['Music Theory Online — Review of Caplin, Analyzing Classical Form (Aziz, 2014)', 'https://www.mtosmt.org/issues/mto.14.20.1/mto.14.20.1.aziz.html'],
      ['Wikipedia — William Caplin', 'https://en.wikipedia.org/wiki/William_Caplin'],
      ["Society for Music Theory forum — discussion of Caplin's hybrid themes", 'https://discuss.societymusictheory.org/discussion/comment/386'],
    ],
    body: `
## Câu nhạc
Giống câu văn có dấu câu, câu nhạc kết thúc bằng một [[cau-ket|kết]]. Độ dài phổ biến là **4 [[so-chi-nhip|ô nhịp]]** (đôi khi 2 hoặc 8).

## Đoạn nhạc (period)
Hai câu nhạc liên quan tạo thành **câu hỏi – câu trả lời**:
| Câu | Kết | Cảm giác |
|---|---|---|
| Câu 1 — hỏi (antecedent) | Kết nửa (→ V) | Còn bỏ ngỏ |
| Câu 2 — đáp (consequent) | Kết chính (V → I) | Trọn vẹn |
::form Câu_hỏi:4 Câu_đáp:4 | Đoạn nhạc 8 ô: câu hỏi kết nửa, câu đáp kết chính

Nếu câu 2 bắt đầu giống câu 1 → **đoạn song song**; nếu khác → **đoạn tương phản**.

## Khi tập đàn
Hãy "thở" ở cuối mỗi câu — nhấc tay nhẹ, giảm âm lượng — như ca sĩ lấy hơi. Đánh dấu chỗ kết giúp ghi [[hoc-thuoc-bai|nhớ bài]] nhanh hơn.

## Câu nhạc kiểu "sentence"
Một cấu trúc 8 ô nhịp khác (theo William [[chuc-nang-hinh-thuc|Caplin]]), rất phổ biến ở [[ludwig-van-beethoven|Beethoven]]:
| Phần | Ô nhịp | Nội dung |
|---|---|---|
| Trình bày ý cơ bản | 1–2 | [[motif|Ý nhạc]] 2 ô |
| Nhắc lại ý cơ bản | 3–4 | Lặp lại (thường trên [[hop-am-ba|hợp âm]] V) |
| Tiếp nối – kết | 5–8 | Chia nhỏ, [[kiem-soat-toc-do|tăng tốc]], đẩy tới [[cau-ket|kết]] |
::form Ý_cơ_bản:2 Nhắc_lại:2 Tiếp_nối_–_kết:4 | Sentence 8 ô: trình bày (2 + 2) rồi tiếp nối tới kết

Ví dụ: chủ đề mở đầu [[hinh-thuc-sonata|Sonata]] piano Op. 2 số 1 của Beethoven.

## Sentence và period — hai kiểu chủ đề 8 ô nhịp
Cặp khái niệm này đến từ [[Schoenberg]] (*Fundamentals of Musical Composition*), được Erwin Ratz phát triển, rồi William Caplin hệ thống hoá trong *Classical Form*. Cả ba đều định nghĩa sentence **bằng cách đối chiếu** với period.
| | Period | Sentence |
|---|---|---|
| Nửa đầu | **Câu hỏi**: ý cơ bản + ý tương phản, **kết thúc bằng một kết** | **Trình bày**: ý cơ bản (2 ô) và nhắc lại, **không có kết** |
| Nửa sau | **Câu đáp**: lặp lại câu hỏi, kết mạnh hơn | **Tiếp nối**: xé ý thành motif 1 ô, tăng tốc tới kết |
| Số kết | Hai | **Một** (ở cuối) |
| Cảm giác | Cân đối | Tiến tới |

## Chủ đề lai (hybrid)
Caplin liệt kê các dạng "lai" ghép nửa đầu của kiểu này với nửa sau của kiểu kia, ví dụ:
- câu hỏi + tiếp nối,
- câu hỏi + đoạn kết,
- ý cơ bản kép + tiếp nối,
- ý cơ bản kép + câu đáp.

Không phải ai cũng đồng ý: có nhà lý thuyết cho rằng phần lớn các dạng lai này nên hiểu là **period tương phản**.

Liên quan: [[motif]], [[giai-dieu]], [[nhip-lay-da]], [[hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'mo-rong-cau-nhac',
    title: 'Mở rộng câu nhạc',
    category: 'form',
    aliases: ['mở rộng câu nhạc', 'phrase expansion', 'phrase extension', 'kéo dài câu', 'chồng câu', 'phrase overlap', 'elision', 'câu nhạc không đều', 'phrase rhythm', 'nhịp câu'],
    summary: 'Câu nhạc "chuẩn" dài 4 hoặc 8 ô, nhưng nhạc thực tế thường lệch chuẩn: câu được kéo dài, mở rộng bên trong, chồng lên câu sau. Khái niệm "nhịp câu" của William Rothstein (1989) giúp nhận ra và giải thích những chỗ lệch đó.',
    wiki: 'Phrase_(music)',
    refs: [
      ['Wikipedia — Phrase (music)', 'https://en.wikipedia.org/wiki/Phrase_(music)'],
      ['UBC thesis (2021) — on Rothstein, Phrase Rhythm in Tonal Music', 'https://open.library.ubc.ca/cIRcle/collections/24/items/1.0445514'],
      ['Rothstein — reading excerpt (PDF)', 'https://www.midside.com/pdf/eastman/fall06/th581/rothstein_reading.pdf'],
      ['Braunschweig — Intégral 18/19 (PDF)', 'https://theory.esm.rochester.edu/integral/wp-content/uploads/2019/06/INTEGRAL_18_19_braunschweig.pdf'],
      ['Oxford Academic — Hypermetric manipulations in Haydn and Mozart', 'https://academic.oup.com/book/40036/chapter/340418497'],
    ],
    body: `
Trong [[cau-nhac]], câu nhạc thường được mô tả dài **4 ô** và chủ đề **8 ô**. Đó là **chuẩn**, không phải luật: nhạc hay thường **lệch chuẩn** có chủ ý. Phân tích hiện đại coi các câu dài hơn là kết quả của việc **mở rộng** một câu chuẩn.

## Nhịp câu (Rothstein, 1989)
Trong *Phrase Rhythm in Tonal Music* (1989), **William [[phan-tich-va-bieu-dien|Rothstein]]** nghiên cứu sự tương tác giữa **câu nhạc** ([[giai-dieu|giai điệu]], tiến trình hoà âm) và **siêu nhịp** (các ô mạnh – nhẹ, xem [[sieu-nhip]]); sự tương tác ấy ông gọi là **"nhịp câu"** (phrase rhythm). Các kỹ thuật thường được liệt kê: **chồng câu, dẫn vào, kéo dài, mở rộng, diễn giải lại và nuốt ô**.

## Các cách làm câu lệch chuẩn
| Kỹ thuật | Mô tả | Hiệu quả |
|---|---|---|
| **Kéo dài** (extension) | Thêm ô **sau** kết: lặp lại kết, kéo dài [[hop-am-ba|hợp âm]] chủ | Nhấn mạnh sự khép lại |
| **Mở rộng bên trong** (expansion) | Thêm ô **trong** câu: lặp một ý, kéo dài một hợp âm, chèn [[mo-tien-hoa-am|mô tiến]] trước kết | Trì hoãn kết, tăng căng thẳng |
| **Dẫn vào** ([[cadenza|lead-in]]) | Vài nốt nối từ câu trước sang câu sau, ngoài khung siêu nhịp | Liền mạch |
| **Chồng câu** (overlap) | Điểm **kết** của câu này **trùng** với điểm **bắt đầu** của câu sau | Liên tục, không có chỗ nghỉ |
| **Diễn giải lại / nuốt ô** (reinterpretation, elision) | Một ô vốn **nhẹ** (cuối câu) được nghe lại thành ô **mạnh** (đầu câu mới) — siêu nhịp bị "dịch" | Đẩy âm nhạc tiến lên |
Theo Rothstein, **chồng câu** giữ sự liên tục, còn **diễn giải lại** tạo lực đẩy. Chồng câu đôi khi giữ nguyên siêu nhịp, đôi khi làm nó không đều.

## Cách nhận ra một câu đã được mở rộng
1. Đếm số ô từ đầu câu đến kết. Nếu không phải 4 hay 8, hãy hỏi: **ô nào có thể bỏ** mà câu vẫn trọn vẹn?
2. Những ô "bỏ được" thường là: lặp lại một ý, kéo dài một hợp âm, mô tiến, nhắc lại kết.
3. Thử chơi phiên bản **rút gọn** rồi so với bản gốc — sự khác biệt cho thấy nhà soạn nhạc muốn tạo hiệu quả gì.
Lưu ý: cách nhìn này giả định chuẩn 4–8 ô; một số nhà lý thuyết (như Braunschweig) nhắc rằng đó là **giả định** của phương pháp, và không phải câu dài nào cũng cần được giải thích như một "câu chuẩn được mở rộng".

## Với người chơi đàn
- Biết chỗ nào là **mở rộng** giúp quyết định cách giữ căng thẳng: không "kết" sớm ở chỗ chỉ là một kết bị trì hoãn.
- Ở chỗ **chồng câu**, không ngắt hơi như ở cuối câu bình thường — phần cuối câu cũ đồng thời là khởi đầu mạnh của câu mới (xem [[dien-dat-cau-nhac]], [[rubato]]).
`,
  },
  {
    slug: 'hinh-thuc-am-nhac',
    title: 'Hình thức âm nhạc',
    category: 'form',
    also: ['analysis'],
    aliases: ['hình thức', 'cấu trúc bài', 'musical form', 'hai đoạn', 'ba đoạn', 'binary', 'ternary', 'ABA', 'AB', 'phiên khúc điệp khúc'],
    summary: 'Cách sắp xếp các phần của một tác phẩm, ký hiệu bằng chữ cái: A, B, A′… Phổ biến: hai đoạn (AB), ba đoạn (ABA).',
    wiki: 'Musical_form',
    refs: [
      ['Open Music Theory — Binary form', 'https://pressbooks.nebraska.edu/openmusictheory/?p=336'],
      ['Open Music Theory 2e (LibreTexts) — Ternary form', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/03%3A_Form/3.07%3A_Ternary_Form'],
    ],
    body: `
Phần giống nhau mang cùng chữ cái; **A′** là A có biến đổi.
| Hình thức | Sơ đồ | Đặc điểm | Ví dụ |
|---|---|---|---|
| Một đoạn | A | Một [[cau-nhac|đoạn nhạc]] duy nhất | Bài hát thiếu nhi ngắn |
| **Hai đoạn** | AB (thường ‖: A :‖: B :‖) | A chuyển sang giọng át, B quay về | Vũ khúc [[thoi-ky-baroque|Baroque]], minuet của [[johann-sebastian-bach|Bach]] |
| **Ba đoạn** | ABA | B tương phản, A trở lại | Nhiều [[tieu-pham-piano|nocturne]] của [[frederic-chopin|Chopin]], [[opera|aria da capo]] |
| [[lied|Strophic]] | AAA… | Cùng nhạc, lời khác | Dân ca, thánh ca |
| [[rondo]] | ABACA… | Chủ đề A quay lại nhiều lần | Chương cuối sonata |
| [[bien-tau]] | A A1 A2 A3… | Chủ đề và các biến thể | Biến tấu "Ah vous dirai-je, Maman" của [[wolfgang-amadeus-mozart|Mozart]] |
| [[hinh-thuc-sonata|Sonata]] | Trình bày – Phát triển – Tái hiện | Hình thức lớn của thời Cổ điển | Chương 1 sonata, [[giao-huong|giao hưởng]] |

## Phân biệt kỹ hơn: hai đoạn và ba đoạn
| Dạng | Sơ đồ | Đặc điểm |
|---|---|---|
| Hai đoạn **khép** (sectional) | ‖: A :‖: B :‖ | A kết **ở [[bac-am-giai|chủ âm]]** (kết hoàn toàn) |
| Hai đoạn **mở** (continuous) | ‖: A :‖: B :‖ | A kết **trên V** hoặc đã chuyển giọng, phải đi tiếp sang B |
| Hai đoạn **có tái hiện** ([[hinh-thuc-hai-doan|rounded binary]]) | ‖: A :‖: B A′ :‖ | Cuối B, **một phần** của A quay lại |
| [[hinh-thuc-ba-doan|Ba đoạn đơn]] | A B A | Mỗi đoạn **trọn vẹn, đứng riêng được**; A trở lại **đầy đủ** |
| Viết liền (through-composed) | A B C… | Mỗi đoạn là nhạc mới, không quay lại |
::form A B | Hai đoạn: ‖: A :‖: B :‖
::form A B A' | Hai đoạn có tái hiện: cuối B, một phần của A quay lại (A′)
::form A B A | Ba đoạn: A trở lại đầy đủ

Chỗ dễ nhầm nhất là **hai đoạn có tái hiện** và **ba đoạn**. Ở hai đoạn có tái hiện, các phần **không đứng riêng được**. Ở ba đoạn, đoạn A kết dứt khoát và có thể chơi một mình. Đoạn B của ba đoạn thường mang chất liệu tương phản, hay ở giọng mới và kém ổn định.

Hai đoạn có tái hiện được coi là **tổ tiên của [[hinh-thuc-sonata]]**: phần B mang tính phát triển, rồi A trở lại ở giọng chính — giống Phát triển → Tái hiện.

## Hình thức bài hát pop
**Intro – Phiên khúc (Verse) – [[hinh-thuc-ca-khuc-pho-thong|Tiền điệp khúc]] – Điệp khúc (Chorus) – Phiên khúc – Điệp khúc – Bridge – Điệp khúc – Outro.** Điệp khúc giữ nguyên lời và nhạc; phiên khúc giữ nhạc nhưng đổi lời.

Bản đồ toàn bộ mục: [[lo-trinh-hinh-thuc]]. Ba đoạn kép: [[minuet-va-trio]]. Dấu hiệu hình thức trong bản nhạc: [[dau-nhac-lai]], [[cau-ket]], [[chuyen-giong]]. Hình thức ca khúc jazz: [[hinh-thuc-ca-khuc-32]]. [[the-loai-am-nhac|Các thể loại]] nhiều chương: [[the-loai]]. Biến tấu trên bass lặp: [[ostinato]].
`,
  },
  {
    slug: 'minuet-va-trio',
    title: 'Minuet và trio',
    category: 'form',
    also: ['genres'],
    aliases: ['minuet', 'menuet', 'minuet and trio', 'trio', 'scherzo', 'scherzo và trio', 'ba đoạn kép', 'compound ternary'],
    summary: 'Hình thức ba đoạn kép: minuet – trio – minuet da capo, mỗi phần lại là một hình thức hai đoạn có tái hiện. Từ vũ điệu cung đình Louis XIV đến chương ba của sonata, giao hưởng và scherzo của Beethoven.',
    wiki: 'Minuet',
    refs: [
      ['Open Music Theory — Minuet form (LibreTexts)', 'https://human.libretexts.org/Bookshelves/Music/Book%3A_Open_Music_Theory/05%3A_Form_(II)_-_Other_Forms_and_Thematic_Structures/5.12%3A_Other_Formal_Structures_in_the_Classical_Style_-_Minuet_Form'],
      ['Hutchinson, Music Theory for the 21st-Century Classroom — Ternary form', 'https://musictheory.pugetsound.edu/mt21c/TernaryForm.html'],
      ['learnmusictheory.net — Compound ternary (PDF)', 'https://learnmusictheory.net/PDFs/pdffiles/05-05-CompoundPartFormsCompoundTernary.pdf'],
      ['Open Book Publishers — The minuet as part of instrumental and dance music in Europe', 'https://books.openbookpublishers.com/10.11647/obp.0314/ch3.xhtml'],
      ['Wikipedia — Scherzo', 'https://en.wikipedia.org/wiki/Scherzo'],
      ['Britannica — Scherzo', 'https://www.britannica.com/art/scherzo'],
      ['Musopen — Two minuets by Christian Petzold, BWV Anh. 114–115', 'https://musopen.org/music/19797-menuets-in-g-major-bwv-anh-114-115/'],
    ],
    body: `
## Lịch sử: từ phòng khiêu vũ đến phòng hoà nhạc
- Minuet là **vũ điệu Pháp**, phổ biến từ khoảng **1650** ở triều đình **Louis XIV**. **[[jean-baptiste-lully|Lully]]** — nhạc sĩ và vũ công phục vụ nhà vua — viết rất nhiều minuet cho opera và [[ballet|ballet]].
- Nhịp **3/4**; bước nhảy cơ bản kéo dài **sáu phách**, tức là hai ô 3/4 — một lý do khiến minuet thường đi theo **cặp [[so-chi-nhip|ô nhịp]]** (xem [[sieu-nhip]]).
- Đây là điệu khiêu vũ được ưa chuộng nhất ở châu Âu từ nửa sau thế kỷ 17 đến cuối thế kỷ 18; minuet cũng đi vào **[[to-khuc-baroque|tổ khúc]] đàn phím** (xem [[the-loai]]).
- Ví dụ quen thuộc với học trò piano: hai **[[phan-tich-minuet-sol-truong|Minuet Sol trưởng]] và Sol thứ** trong *Sổ tay cho Anna Magdalena [[johann-sebastian-bach|Bach]]* (1725) — được chép thành **một cặp, chơi [[dau-nhac-lai|da capo]]**. Chúng từng được ghi là của Bach (BWV Anh. 114–115) nhưng nay được xác định là của **Christian Petzold**, nhạc sĩ [[organ-ong|organ]] ở Dresden.

## Hình thức: ba đoạn kép
| Tầng | Cấu trúc |
|---|---|
| **Lớn** | **Minuet** (A) – **Trio** (B) – **Minuet da capo** (A, thường **bỏ** các dấu nhắc lại) |
| **Nhỏ** (trong minuet) | **[[hinh-thuc-hai-doan|Hai đoạn có tái hiện]]**: ‖: a :‖: b a′ :‖ |
| **Nhỏ** (trong trio) | Cũng là hai đoạn hoặc ba đoạn nhỏ |
::form Minuet Trio Minuet | Ba đoạn kép: Minuet (A) – Trio (B) – Minuet da capo (A, chơi lại phần đầu)
Vì mỗi phần của hình thức lớn lại chứa một hình thức nhỏ, toàn chương được gọi là **ba đoạn kép** (compound ternary). Ba mô-đun a – b – a′ của minuet được gom thành **hai** phần lớn, mỗi phần nhắc lại — đây là [[hinh-thuc-am-nhac|hai đoạn có tái hiện]].

Trio thường **tương phản** với minuet — về giọng, kết cấu hoặc tính cách. Tên "trio" thường được giải thích là bắt nguồn từ thói quen viết đoạn này cho **ba nhạc cụ** (ba bè).

## Từ minuet đến scherzo
- Trong bộ [[nhac-thinh-phong|tứ tấu đàn dây]] **Op. 33** (1781), [[Haydn]] thay tên "Minuet" bằng **"Scherzo"** (tiếng Ý: trò đùa) — khung hình thức vẫn là minuet – trio.
- [[Beethoven]] biến [[tiet-tau|nhịp điệu]] lịch sự của minuet thành một vũ điệu **mãnh liệt** hơn, nhanh hơn. Ông viết scherzo trong hầu hết chín [[giao-huong|bản giao hưởng]], dù chỉ gọi tên "scherzo" trong bản số 2 và số 3.
- Thời Cổ điển, minuet (sau là scherzo) thường là **chương ba** của [[hinh-thuc-sonata|sonata]], tứ tấu, giao hưởng.

## Phân tích một minuet: các bước
1. Tìm dấu nhắc lại → xác định hai phần lớn.
2. Trong phần hai, tìm chỗ **a′ quay lại** (thường ở giọng chủ) → hai đoạn có tái hiện.
3. Phần một kết ở đâu: giọng chủ hay giọng át? (hai đoạn **khép** hay **mở** — xem [[hinh-thuc-am-nhac]]).
4. So sánh trio với minuet: giọng, kết cấu, tính cách.

## Gợi ý khi dạy
- Bắt đầu với các minuet trong *Sổ tay Anna Magdalena*: ngắn, hình thức rõ, ở trình độ sơ – trung cấp (xem [[lo-trinh-tac-pham]]).
- Nhắc học trò đây là **nhạc khiêu vũ**: phách 1 nhẹ nhàng nâng lên, nhóm hai ô nhịp, không nặng nề.
`,
  },
  {
    slug: 'rondo',
    title: 'Rondo',
    category: 'form',
    also: ['analysis', 'genres'],
    aliases: ['hình thức rondo', 'rondeau', 'ABACA'],
    summary: 'Hình thức có chủ đề chính (A) quay lại nhiều lần, xen giữa là các đoạn tương phản: ABACA hoặc ABACABA.',
    wiki: 'Rondo',
    refs: [
      ['Wikipedia — Rondo', 'https://en.wikipedia.org/wiki/Rondo'],
      ['Britannica — Rondo', 'https://www.britannica.com/art/rondo'],
      ['Hutchinson, Music Theory for the 21st-Century Classroom — Rondo form', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/25%3A_Sonata_and_Rondo_Forms/25.03%3A_Rondo_Form'],
      ['Huguet (EuroMAC 2017) — Minor-mode rondo finales', 'https://creaa.unistra.fr/websites/gream/Activites/Euromac_2017_-_Postprint_-_Extended_abstract_-_HUGUET_Joan.pdf'],
      ['Wikipedia — Piano Sonata No. 11 (Mozart)', 'https://en.wikipedia.org/wiki/Piano_Sonata_No._11_(Mozart)'],
    ],
    body: `
Chủ đề **A** (refrain) luôn ở giọng chính; các đoạn xen **B, C** (episode) đi sang giọng khác và mang tính chất tương phản.
| Dạng | Sơ đồ |
|---|---|
| Rondo 5 phần | A B A C A |
| Rondo 7 phần | A B A C A B A |
| [[sonata-rondo-va-cac-loai-rondo|Sonata-rondo]] | A B A – C (phát triển) – A B A |
::form A B A C A | Rondo 5 phần
::form A B A C A B A | Rondo 7 phần: A luôn ở giọng chính, B và C sang giọng khác

Rondo thường vui tươi, nhanh — rất hay dùng cho **chương cuối** của sonata và [[hinh-thuc-concerto|concerto]] thời Cổ điển.

## Ví dụ cho người học piano
- "Für Elise" ([[Beethoven]]): A B A C A — xem [[phan-tich-fur-elise]].
- "Rondo alla Turca" — chương 3 Sonata K. 331 ([[Mozart]]), xem bên dưới và [[phan-tich-rondo-alla-turca]].

## Lịch sử
- **Gốc gác**: những ví dụ sớm nhất của lối viết rondo nằm trong aria và hợp xướng opera Ý đầu thế kỷ 17.
- **Rondeau Pháp thời [[thoi-ky-baroque|Baroque]]**: [[Lully]] (đôi khi được gọi là "cha đẻ của rondeau"), Chambonnières và [[louis-couperin|Louis Couperin]] phổ biến hình thức này ở Pháp thế kỷ 17. Một **điệp khúc** (refrain) dài 8 hoặc 16 [[so-chi-nhip|ô nhịp]] xen kẽ với các **couplet** (đoạn xen), tạo chuỗi a b a c a d… dài tuỳ ý. [[Rameau]] chuẩn hoá thiết kế này. Ví dụ: *Les baricades mistérieuses* của [[Couperin|François Couperin]] (Pièces de [[dan-phim-co|clavecin]], tập 2, 1716–17).
- **Đừng nhầm** với *rondeau* thời [[thoi-ky-trung-co|Trung cổ]] (thế kỷ 14–15) — một thể thơ và [[ca-khuc-the-tuc-trung-co|chanson]] có khuôn cố định, không liên quan.
- **Thời Cổ điển**: rondo Cổ điển phát triển từ rondeau đàn phím Pháp. Rondo **[[am-giai-truong|giọng trưởng]]** trở thành dạng chương cuối mặc định. Rondo chương cuối ở **[[am-giai-thu|giọng thứ]]** thì rất hiếm: [[Mozart]] chỉ viết ba, [[Haydn]] chỉ một (và còn gây tranh cãi về hình thức). Phải đến [[Beethoven]] dạng này mới thật sự phát triển.

## Ví dụ phân tích
**Chương 3 Sonata "Pathétique" Op. 13 (Beethoven)** — Rondo: [[nhip-do|Allegro]], dạng **rondo 7 phần**:
| Phần | Giọng |
|---|---|
| A | Đô thứ (giọng chính) |
| B — đoạn xen 1 | **Mi♭ trưởng** (III, [[giong-song-song]] trưởng) |
| C — đoạn xen 2 | **La♭ trưởng** (VI) |

**Rondo alla Turca** — chương 3 Sonata K. 331 của Mozart:
- Cả sonata đều ở La trưởng hoặc La thứ, nên được gọi là **đồng [[bac-am-giai|chủ âm]]** (homotonal).
- Đoạn mở đầu ở **La thứ**, dài 8 ô nhịp: [[giai-dieu|giai điệu]] móc kép đi lên, rồi móc đơn đi xuống, trên nền đệm móc đơn [[cach-dien-tau|staccato]]. Chương nhạc **kết ở La trưởng**.
- Đây là một dạng rondo khá **bất thường**, không dễ nhận ra là rondo Cổ điển tiêu chuẩn.

Xem tổng quan: [[hinh-thuc-am-nhac]]. So sánh: [[hinh-thuc-sonata]].
`,
  },
  {
    slug: 'hinh-thuc-sonata',
    title: 'Hình thức sonata',
    category: 'form',
    also: ['analysis', 'genres'],
    aliases: ['sonata', 'sonata form', 'trình bày', 'phát triển', 'tái hiện', 'exposition', 'development', 'recapitulation', 'sonata allegro'],
    summary: 'Hình thức lớn quan trọng nhất thời Cổ điển: Trình bày (2 chủ đề, 2 giọng) – Phát triển – Tái hiện (cả 2 chủ đề về giọng chính).',
    wiki: 'Sonata_form',
    refs: [
      ['Wikipedia — History of sonata form', 'https://en.wikipedia.org/wiki/History_of_sonata_form'],
      ['Wikipedia — Adolf Bernhard Marx', 'https://en.wikipedia.org/wiki/Adolf_Bernhard_Marx'],
      ['Oxford Academic — Hepokoski & Darcy, Elements of Sonata Theory (2006)', 'https://academic.oup.com/book/4770'],
      ['Open Music Theory — Sonata form', 'https://viva.pressbooks.pub/openmusictheory/chapter/sonata-form/'],
      ['Wikipedia — Sonata form', 'https://en.wikipedia.org/wiki/Sonata_form'],
    ],
    body: `
| Phần | Nội dung | Giọng |
|---|---|---|
| (Mở đầu) | Tuỳ chọn, thường chậm | |
| **Trình bày** | Chủ đề 1 → cầu nối → Chủ đề 2 → kết đoạn | Chủ đề 1: giọng chính. Chủ đề 2: giọng **át** (nếu trưởng) hoặc giọng **song song trưởng** (nếu thứ) |
| **Phát triển** | Biến đổi, xé lẻ các [[motif]], [[chuyen-giong]] liên tục | Nhiều giọng xa |
| **Tái hiện** | Nhắc lại chủ đề 1 và 2 | **Cả hai** ở giọng chính |
| (Coda) | Đoạn kết, khẳng định giọng chính | Giọng chính |
::form (Mở_đầu) Trình_bày Phát_triển Tái_hiện (Coda) | Các phần của hình thức sonata (phần trong ngoặc là tuỳ chọn)
::form Chủ_đề_1 Cầu_nối Chủ_đề_2 Kết_đoạn | Bên trong phần trình bày: chủ đề 1 ở giọng chính, chủ đề 2 ở giọng át (trưởng) hoặc giọng song song trưởng (thứ)

## Kịch tính của hình thức sonata
Trình bày tạo **xung đột** giữa hai giọng; phát triển đẩy xung đột lên cao trào; tái hiện **giải quyết** bằng cách đưa mọi thứ về giọng chính.

## Tên gọi ra đời sau tác phẩm
Haydn, [[wolfgang-amadeus-mozart|Mozart]] và [[ludwig-van-beethoven|Beethoven]] **không gọi** cấu trúc này là "hình thức sonata". Nhà lý thuyết **Adolf Bernhard Marx** được xem là người đặt tên và hệ thống hoá nó, trong bộ *Die Lehre von der musikalischen Komposition* (các tập in từ 1837 đến 1847).
- Mô tả của Marx mang tính **quy phạm**: nói tác phẩm hình thức sonata **nên** được viết thế nào.
- Ông chỉ gọi ba phần là phần thứ nhất, thứ hai, thứ ba — chưa dùng các tên Trình bày, Phát triển, Tái hiện.
- Tổ tiên trực tiếp của hình thức sonata là [[hinh-thuc-am-nhac|hai đoạn có tái hiện]].

## Trình bày đơn chủ đề (Haydn)
Không phải phần trình bày nào cũng có hai chủ đề khác nhau. Ở **trình bày đơn chủ đề** (monothematic), cùng một chủ đề được nêu ở giọng chính rồi lại xuất hiện (thường có biến đổi) ở giọng át. [[Haydn]] đặc biệt hay dùng cách này. Charles Rosen và những người khác cho rằng sonata của Haydn đơn chủ đề nhiều hơn của Mozart. Tuy vậy, trong một trình bày "đơn chủ đề" thường vẫn có nhiều ý nhạc.

## Lý thuyết Sonata của Hepokoski và Darcy
Cuốn *Elements of Sonata Theory* (2006) đưa ra hai mốc phân tích nay được dùng rộng rãi:
- **Điểm ngắt giữa** (medial caesura, MC): chỗ ngắt ngắn, được nhấn mạnh, chia phần trình bày thành nửa giọng chính và nửa giọng át. Phải có MC thì mới có **vùng chủ đề 2**. Không có MC thì là **trình bày liên tục** (continuous exposition).
- **Điểm khép trình bày** (essential expositional closure, EEC): **kết hoàn toàn chính cách đầu tiên đạt yêu cầu** trong giọng phụ, sau đó chuyển sang chất liệu khác. Ở [[am-giai-truong|giọng trưởng]], EEC hầu như luôn là kết ở giọng V; ở [[am-giai-thu|giọng thứ]], thường là kết ở giọng III.

## Lưu ý thuật ngữ
"Sonata" là **tác phẩm** nhiều chương (thường 3–4) cho một hoặc hai nhạc cụ. "Hình thức sonata" là **cấu trúc** của một chương — thường là chương đầu. [[sonata-the-loai|Sonatina]] là sonata nhỏ, đơn giản ([[muzio-clementi|Clementi]], [[friedrich-kuhlau|Kuhlau]]) — bài tập kinh điển cho học sinh piano.

Liên quan: [[hinh-thuc-am-nhac]], [[rondo]], [[giong-song-song]], [[the-loai]]. Phân tích một ví dụ cụ thể: [[phan-tich-sonata-k545]]. Đoạn phát triển thường kết bằng [[bass-ngan]] trên [[bac-am-giai|át âm]].
`,
  },
  {
    slug: 'hinh-thuc-concerto',
    title: 'Hình thức concerto',
    category: 'form',
    also: ['improvisation', 'genres'],
    aliases: ['hình thức concerto', 'concerto form', 'ritornello', 'hình thức ritornello', 'ritornello form', 'trình bày kép', 'double exposition', 'tutti', 'solo', 'sonata loại 5', 'Type 5 sonata'],
    summary: 'Hai hình thức của chương nhanh trong concerto: hình thức ritornello thời Baroque (Vivaldi) — dàn nhạc nhắc lại một chủ đề xen với các đoạn độc tấu — và chương 1 concerto Cổ điển (Mozart), nơi ritornello kết hợp với hình thức sonata.',
    wiki: 'Ritornello',
    refs: [
      ['Wikipedia — Ritornello', 'https://en.wikipedia.org/wiki/Ritornello'],
      ['San José State University — Vivaldi and ritornello form (PDF)', 'https://gcp-web.sjsu.edu/people/gordon.haramaki/courses/baroque/s1/9.-Vivaldi-and-Ritornello-Form.pdf'],
      ['Oxford Academic — Hepokoski & Darcy, Elements of Sonata Theory (2006)', 'https://academic.oup.com/book/4770'],
      ['GMTH — on concerto first-movement form and the Type 5 sonata', 'https://storage.gmth.de/zgmth/pdf/1110'],
      ["Wiley — Beethoven's error? The modulating ritornello and the Type 5 sonata", 'https://plosjournal.deepdyve.com/lp/wiley/beethoven-s-error-the-modulating-ritornello-and-the-type-5-sonata-in-0oPUzgyhhV'],
      ['Wikipedia — Cadenza', 'https://en.wikipedia.org/wiki/Cadenza'],
    ],
    body: `
Concerto đặt **một nghệ sĩ độc tấu** đối diện **dàn nhạc** (tutti). [[hinh-thuc-am-nhac|Hình thức]] của nó là câu trả lời cho câu hỏi: hai lực lượng này **chia nhau** chất liệu và các giọng như thế nào?

## Hình thức ritornello (Baroque)
- **Ritornello** (tiếng Ý: "khúc quay lại") là [[cau-nhac|đoạn nhạc]] của dàn nhạc được **nhắc lại** nhiều lần, xen giữa là các **đoạn độc tấu**. Mô hình này có ở các concerto [[violin|violin]] của **Torelli** và được **[[antonio-vivaldi|Vivaldi]]** chuẩn hoá trong hàng trăm concerto.
- Một chương nhanh điển hình của Vivaldi: khoảng **năm ritornello xen với bốn đoạn độc tấu**.
| Vai trò | Ritornello (dàn nhạc) | Đoạn độc tấu |
|---|---|---|
| Giọng | **Ổn định**: mở và đóng chương ở giọng chủ, xác nhận các giọng mới | **[[chuyen-giong|Chuyển giọng]]**, đi tới các vùng giọng xa |
| Chất liệu | Nhắc lại chủ đề ritornello (đôi khi chỉ vài [[motif|motif]] của nó) | Hình nhạc kỹ thuật, điêu luyện |
- Các ritornello ở giữa thường **ngắn hơn** và ở **giọng khác**; ritornello cuối trở về đầy đủ ở giọng chủ.
- Với đàn phím, [[Bach]] dùng tư duy này trong *Bản concerto Ý* (Italienisches Konzert) cho một người chơi — hai [[ban-phim|bàn phím]] của [[dan-phim-co|harpsichord]] luân phiên vai "tutti" và "solo".

## Chương 1 concerto Cổ điển
Thời Cổ điển, ritornello **kết hợp** với [[hinh-thuc-sonata|hình thức sonata]]. Hepokoski và Darcy (*Elements of Sonata Theory*, 2006) gọi đây là **"sonata loại 5"**, xây dựng chủ yếu từ các concerto của [[Mozart]]:
| Phần | Ký hiệu | Nội dung |
|---|---|---|
| Ritornello mở đầu | R1 | Dàn nhạc trình bày các chủ đề, thường **ở lại giọng chủ** |
| Trình bày độc tấu | S1 (+ R2) | Độc tấu vào, **chuyển sang giọng mới** cho [[chuc-nang-hinh-thuc|chủ đề phụ]]; dàn nhạc khép lại bằng ritornello thứ hai |
| Phát triển | S2 | Chủ yếu là độc tấu |
| Tái hiện | S3 (+ R4) | Tổng hợp chất liệu của cả R1 và S1 ở giọng chủ |
| [[cadenza|Cadenza]] | | Độc tấu [[ngau-hung-piano|ngẫu hứng]] (hoặc viết sẵn), thường ngay trước ritornello cuối |
::form R1 S1 S2 S3 Cadenza | Concerto Cổ điển: ritornello mở đầu (R1), trình bày độc tấu (S1), phát triển (S2), tái hiện (S3), cadenza
Vì có hai lần trình bày (dàn nhạc rồi độc tấu), các sách cũ gọi đây là **"trình bày kép"**.

## Một tranh luận
- R1 có nên **chuyển giọng** như phần trình bày [[the-loai|giao hưởng]] không? Mozart chủ yếu để việc chuyển giọng cho **độc tấu**. Donald Tovey từng coi việc [[ludwig-van-beethoven|Beethoven]] cho R1 chuyển sang giọng của chủ đề phụ trong **Concerto piano số 3** là một "lỗi"; Hepokoski và Darcy giải thích các ngoại lệ ở Mozart như những **biến dạng** có chủ ý.
- Caplin nhấn mạnh rằng **dấu vết của ritornello** vẫn còn trong sự luân phiên tutti – solo, dù nằm trong kế hoạch giọng của sonata. Một số nhà nghiên cứu khác cho rằng chương concerto có **tính độc lập** riêng, không nên coi đơn giản là một biến thể của sonata.

## Với người học piano
- Khi học một concerto (kể cả bản rút gọn hai [[dan-piano|đàn piano]]), xác định **R1, S1, phát triển, tái hiện, cadenza** trên bản nhạc — giúp hiểu khi nào mình "dẫn" và khi nào mình "đáp" dàn nhạc.
- Cadenza là chỗ thể hiện sự tự do — nhưng thường bắt đầu trên một [[hop-am-sau-bon|hợp âm 6/4 kết]] và kết bằng [[hop-am-ba|hợp âm]] át có láy rền (xem [[ky-hieu-hoa-my]]).
`,
  },
  {
    slug: 'bien-tau',
    title: 'Biến tấu',
    category: 'form',
    also: ['analysis', 'genres'],
    aliases: ['chủ đề và biến tấu', 'theme and variations', 'variation', 'biến khúc'],
    summary: 'Một chủ đề được trình bày rồi lặp lại nhiều lần, mỗi lần biến đổi giai điệu, nhịp điệu, hoà âm hoặc kết cấu.',
    wiki: 'Variation_(music)',
    refs: [
      ['Wikipedia — Goldberg Variations', 'https://en.wikipedia.org/wiki/Goldberg_Variations'],
      ['Wikipedia — Diabelli Variations', 'https://en.wikipedia.org/wiki/Diabelli_Variations'],
      ['Wikipedia — Variations and Fugue on a Theme by Handel', 'https://en.wikipedia.org/wiki/Variations_and_Fugue_on_a_Theme_by_Handel'],
      ['New Jersey Symphony — The inversion of a theme by Paganini', 'https://njsymphony.org/news/detail/the-inversion-of-a-theme-by-paganini'],
      ['Britannica — Twelve Variations on Ah, vous dirai-je, Maman, K 265', 'https://www.britannica.com/topic/Twelve-Variations-on-Ah-vous-dirai-je-Maman'],
      ['The Morgan Library — Mozart, K. 265 autograph', 'https://www.themorgan.org/exhibitions/online/mozart/418'],
      ['Universalis — Virginalistes anglais', 'https://www.universalis.fr/encyclopedie/virginalistes-anglais/'],
    ],
    body: `
Sơ đồ: **A – A1 – A2 – A3 …** Chủ đề thường ngắn, dạng [[hinh-thuc-am-nhac|hai đoạn]].

## Những gì có thể biến đổi
- **[[giai-dieu|Giai điệu]]**: thêm [[ky-hieu-hoa-my|hoa mỹ]], chia nhỏ [[truong-do]], dùng [[not-ngoai-hop-am]].
- **[[tiet-tau|Nhịp điệu]]**: chuyển sang [[lien-ba]], [[dao-phach]], đổi [[so-chi-nhip]].
- **Hoà âm**: đổi sang [[giong-song-song|giọng cùng tên]] thứ (biến tấu "minore"), [[tai-hoa-am|thay hợp âm]].
- **Kết cấu**: chuyển giai điệu xuống tay trái, viết [[doi-am]] (xem [[ket-cau]]).
- **[[nhip-do|Nhịp độ]] và tính chất**: biến tấu chậm Adagio, biến tấu kết thúc nhanh rực rỡ.

## Lịch sử qua các tác phẩm tiêu biểu
| Tác phẩm | Năm | Điểm đáng chú ý |
|---|---|---|
| [[Byrd]] — *Walsingham* | khoảng 1600 | 22 biến tấu trên một giai điệu thời Elizabeth, chép trong *My Ladye Nevells Booke* và *Fitzwilliam [[dan-phim-co|Virginal]] Book*; [[john-bull|John Bull]] cũng viết một bộ trên cùng giai điệu |
| [[Bach]] — *Goldberg Variations* BWV 988 | 1741 | Aria + **30 biến tấu**, dựa trên **bè trầm và [[vong-hop-am|vòng hợp âm]]** của aria chứ không phải giai điệu; cứ biến tấu thứ ba là một canon; kết bằng một *quodlibet* |
| [[Mozart]] — 12 biến tấu "Ah vous dirai-je, Maman" K. 265 | 1781–82 | Đô trưởng, viết ở Vienna, có lẽ để dạy học trò; in năm 1785. Chỉ hai biến tấu cuối có chỉ dẫn nhịp độ: **Adagio** rồi **Allegro** kết thúc rực rỡ |
| [[Beethoven]] — *Diabelli Variations* Op. 120 | 1819–1823 | [[anton-diabelli|Diabelli]] mời nhiều nhà soạn nhạc mỗi người viết một biến tấu trên điệu [[tieu-pham-piano|valse]] của ông; Beethoven viết hẳn **33 biến tấu**, khai thác những chi tiết nhỏ nhất (nốt hoa mỹ mở đầu, [[quang|quãng]] 4 và 5 đi xuống, [[not-lap-lai|nốt lặp]]) |
| [[Brahms]] — *Biến tấu và [[fugue|Fugue]] trên chủ đề của Handel* Op. 24 | 1861 | **25 biến tấu + fugue** trên aria trong [[the-loai|Suite]] số 1 Si♭ trưởng HWV 434 của [[Handel]]; đề tặng [[clara-schumann|Clara Schumann]] |
| [[Rachmaninoff]] — *Rhapsody on a Theme of Paganini* Op. 43 | 1934 | 24 biến tấu trên Caprice số 24 của [[Paganini]]; **biến tấu 18** nổi tiếng là chủ đề **đảo ngược** (lên thành xuống) và chuyển sang **Rê♭ trưởng** |

Chủ đề "Ah vous dirai-je, Maman" là một giai điệu dân gian Pháp — cùng giai điệu với bài "Twinkle, Twinkle, Little Star".

## Biến tấu trên bè trầm
Một mạch xuyên suốt lịch sử: nhiều nhà soạn nhạc coi **bè trầm** — chứ không phải giai điệu — là "xương sống" của chủ đề. [[thomas-tomkins|Thomas Tomkins]] đã viết biến tấu trên bass lặp, kỹ thuật [[Purcell]] dùng tiếp (xem [[ostinato]]); Goldberg Variations dựa trên bè trầm của aria; Brahms cho rằng điều quan trọng nhất ở một chủ đề biến tấu là bè trầm.
`,
  },
  {
    slug: 'ket-cau',
    title: 'Kết cấu âm nhạc',
    category: 'form',
    also: ['analysis'],
    aliases: ['texture', 'đơn âm', 'chủ điệu', 'monophony', 'homophony', 'polyphony', 'giai điệu và đệm', 'heterophony', 'dị âm'],
    summary: 'Cách các lớp âm thanh kết hợp với nhau: đơn âm (một giai điệu), chủ điệu (giai điệu + đệm), phức điệu (nhiều giai điệu độc lập).',
    wiki: 'Texture_(music)',
    refs: [
      ['Wikipedia — Texture (music)', 'https://en.wikipedia.org/wiki/Texture_(music)'],
      ['Wikipedia — Monophony', 'https://en.wikipedia.org/wiki/Monophony'],
      ['Wikipedia — Homophony', 'https://en.wikipedia.org/wiki/Homophony'],
      ['Britannica — Monody', 'https://www.britannica.com/art/monody'],
    ],
    body: `
| Kết cấu | Mô tả | Ví dụ |
|---|---|---|
| **Đơn âm** (monophony) | Một [[giai-dieu|giai điệu]], không đệm | [[thanh-ca-gregorian|Thánh ca Gregorian]], [[tam-ly-hoc-phat-trien-am-nhac|hát ru]] |
| **Chủ điệu** (homophony) | Một giai điệu chính + [[hop-am-ba|hợp âm]] đệm | Phần lớn [[nhac-pho-thong-the-ky-20|nhạc pop]], [[the-loai|nocturne]] [[frederic-chopin|Chopin]] |
| **Hợp âm khối** (homorhythm) | Mọi bè cùng [[tiet-tau|nhịp điệu]] | Thánh ca 4 bè |
| **Phức điệu** (polyphony) | Nhiều giai điệu độc lập, ngang hàng | Fugue, canon của [[johann-sebastian-bach|Bach]] |
| **Dị âm** (heterophony) | Nhiều người chơi cùng giai điệu với [[bien-tau|biến tấu]] nhỏ khác nhau | Nhạc dân tộc, [[am-nhac-truyen-thong-viet-nam|nhã nhạc]] cung đình |

## Lịch sử kết cấu trong âm nhạc phương Tây
1. **Đơn âm** — Thánh ca là phong cách chủ đạo ở phần lớn châu Âu thời [[thoi-ky-trung-co|Trung cổ]]. Nhiều người hát đồng âm hoặc cách [[quang|quãng 8]] vẫn là đơn âm: kết cấu tính theo **số giai điệu**, không theo số người hát.
2. **[[organum|Organum]]** — ca sĩ thêm một bè vào thánh ca có sẵn. Dạng sớm nhất chạy **song song quãng 8 hoặc 5**, nên thực chất vẫn gần đơn âm. Đến thế kỷ 11, "organum tự do" cho các bè đi độc lập hơn — khởi đầu truyền thống **phức điệu**.
3. **Phức điệu [[thoi-ky-phuc-hung|Phục hưng]]** — các bè ngang hàng, độc lập trở thành kết cấu phổ biến (xem [[Palestrina]], [[doi-am]]). Kết cấu này từng bị phê phán vì làm **lời ca khó nghe rõ**.
4. **Monody (khoảng 1600)** — nhóm **[[opera|Florentine Camerata]]** ở Ý phản ứng lại đối âm phức tạp: một giọng hát độc tấu, nhịp điệu tự do, trên phần đệm, để âm nhạc **phục vụ lời**. Từ đây ra đời opera, cantata, [[oratorio-cantata-passion|oratorio]].
5. **Chủ điệu** — từ đầu thế kỷ 17 (thời [[thoi-ky-baroque|Baroque]]), chủ điệu trở thành một trong những kết cấu chủ đạo. Các nhà soạn nhạc nghĩ theo **hoà âm dọc**, và [[bass-so|bè trầm liên tục]] (basso continuo) trở thành đặc trưng. Chủ điệu và phức điệu vẫn cùng tồn tại suốt thế kỷ 17–18.

Từ "homophony" có nghĩa khác trong thời cổ đại; nó vào tiếng Anh năm **1776** qua Charles [[lich-su-nganh-am-nhac-hoc|Burney]].

## Các kiểu đệm chủ điệu trên piano
- **Hợp âm khối**: đánh cả hợp âm cùng lúc.
- **[[luyen-hop-am-rai|Hợp âm rải]]** (arpeggio): đánh lần lượt từng nốt.
- **Bass Alberti**: thấp – cao – giữa – cao (C–G–E–G), rất phổ biến thời [[wolfgang-amadeus-mozart|Mozart]].
- **Stride / [[stride-piano|oom-pah]]**: bass trầm ở [[so-chi-nhip|phách mạnh]], hợp âm ở phách nhẹ ([[tieu-pham-piano|valse]], [[phong-cach-jazz|ragtime]]).

Cách luyện từng kiểu đệm: [[dem-hat-piano]].

Phức điệu: xem [[doi-am]] và [[fugue]]. Mẫu lặp liên tục: [[ostinato]].
`,
  },
  {
    slug: 'ostinato',
    title: 'Ostinato',
    category: 'form',
    also: ['genres'],
    aliases: ['bass lặp', 'riff', 'mẫu lặp'],
    summary: 'Một mẫu nhạc ngắn (giai điệu, nhịp điệu hoặc hợp âm) lặp lại liên tục; khi ở bè trầm, nó là nền cho các thể loại passacaglia và chaconne.',
    wiki: 'Ostinato',
    refs: [
      ['American Heritage Dictionary — ostinato', 'https://www.ahdictionary.com/word/search.html?q=ostinato'],
      ['Berliner Philharmoniker — 7 facts about Boléro', 'https://berliner-philharmoniker.de/en/stories/7-facts-about-bolero'],
      ['Tucson Symphony — Program notes: Ravel, Boléro', 'https://www.tucsonsymphony.org/program-notes/ravel/bolero/'],
      ['Wikipedia — Dido and Aeneas', 'https://en.wikipedia.org/wiki/Dido_and_Aeneas'],
      ['Wikipedia — Passacaglia and Fugue in C minor, BWV 582', 'https://en.wikipedia.org/wiki/Passacaglia_and_Fugue_in_C_minor,_BWV_582'],
    ],
    body: `
Tên gọi: tiếng Ý *ostinato* nghĩa là **"bướng bỉnh"**, cùng gốc Latin *obstinatus* với từ "obstinate" trong tiếng Anh. Số nhiều: *ostinati*.

## Các dạng
- **Ostinato [[giai-dieu|giai điệu]] / [[tiet-tau|nhịp điệu]]**: ví dụ mẫu trống lặp trong "Boléro" ([[Ravel]]), hay riff guitar trong rock.
- **Bass lặp** ([[passacaglia-va-chaconne|basso ostinato]], ground bass): một câu bè trầm lặp lại, phía trên là các [[bien-tau|biến tấu]].

## Passacaglia và chaconne
Hai [[the-loai|thể loại]] [[thoi-ky-baroque|Baroque]] dạng [[bien-tau]] trên một bass lặp hoặc một [[vong-hop-am]] lặp, thường ở nhịp 3/4:
- [[Purcell]] — "Dido's Lament" (bass đi xuống [[am-giai-cromatic|cromatic]]).
- [[Bach]] — Passacaglia Đô thứ cho [[organ-ong|organ]] BWV 582; Chaconne trong [[to-khuc-baroque|Partita]] số 2 Rê thứ cho [[violin|violin]].
- [[johann-pachelbel|Pachelbel]] — [[phan-tich-canon-pachelbel|Canon in D]]: [[doi-am|canon]] ba bè trên một bass lặp 8 nốt (xem [[doi-am-kep]]).

## Ba ví dụ phân tích
**"Dido's Lament" — Purcell, opera "Dido and Aeneas" (1689).** Aria cuối "When I am laid in earth" được dựng trên một **bass lặp chậm**, đi xuống theo các bước **[[cung-nua-cung|nửa cung]]**: đi xuống một quãng 4, rồi khép lại ở nốt thấp hơn nốt khởi đầu một [[quang|quãng 8]]. Các nguồn đếm số lần lặp khác nhau (khoảng 9 đến 12 lần). Giọng hát tự do phía trên, nhiều khi không trùng điểm bắt đầu với bass, nên nghe không bị "đóng khung".

**Passacaglia và [[fugue|Fugue]] Đô thứ BWV 582 — Bach.** Không rõ năm sáng tác chính xác; các nguồn chỉ về khoảng **1706–1713**. Nửa đầu chủ đề bass có lẽ lấy từ một tác phẩm ngắn của nhà soạn nhạc Pháp André Raison (có học giả phản đối). Phần fugue sau đó dùng **nửa đầu của bass lặp làm chủ đề thứ nhất**, và một dạng biến đổi của nửa sau làm chủ đề thứ hai.

**"Boléro" — Ravel (1928).** [[bo-go-dan-nhac|Trống snare]] chơi một mẫu nhịp **2 [[so-chi-nhip|ô nhịp]], 8 phách**, lặp lại **không đổi 169 lần** cho đến ô nhịp áp chót. Hai giai điệu luân phiên ở phía trên; thứ duy nhất thay đổi là **[[dan-nhac-giao-huong|phối khí]]** và **âm lượng** — tăng dần từ rất nhỏ đến rất to (xem [[cuong-do]]). Công diễn lần đầu ở Nhà hát Opéra Paris ngày 22/11/1928.

## Trong nhạc hiện đại
Riff và vòng lặp (loop) là ostinato; nhạc [[toi-gian]] được xây hoàn toàn từ ostinato. Bè trầm [[phong-cach-jazz|boogie-woogie]] trong [[blues-12-nhip]] cũng là ostinato.

Liên quan: [[bass-ngan]] (một nốt lặp/ngân thay vì một mẫu), [[ket-cau]].
`,
  },
  {
    slug: 'the-loai',
    title: 'Thể loại khí nhạc',
    category: 'form',
    also: ['genres'],
    aliases: ['thể loại khí nhạc', 'instrumental genres', 'concerto', 'prelude'],
    summary: 'Các thể loại lớn và nhỏ của nhạc cổ điển — sonata, giao hưởng, concerto, tổ khúc, tiểu phẩm — và cấu trúc chương điển hình của chúng.',
    wiki: 'Musical_form',
    refs: [
      ['Britannica — Symphony', 'https://www.britannica.com/art/symphony-music'],
      ['Wikipedia — Overture', 'https://en.wikipedia.org/wiki/Overture'],
      ['Wikipedia — Joseph Haydn', 'https://en.wikipedia.org/wiki/Joseph_Haydn'],
      ['Wikipedia — Ritornello', 'https://en.wikipedia.org/wiki/Ritornello'],
      ['Classical Music — John Field', 'https://www.classical-music.com/composers/john-field/'],
      ['WFMT — Meet John Field, the Irish composer who invented the nocturne', 'https://www.wfmt.com/2019/03/16/meet-john-field-the-irish-composer-who-invented-the-nocturne/'],
    ],
    body: `
## Thể loại nhiều chương
| Thể loại | Dàn dựng | Chương điển hình |
|---|---|---|
| **Sonata** | 1 nhạc cụ (hoặc + piano) | Nhanh ([[hinh-thuc-sonata]]) – Chậm – (Minuet/Scherzo) – Nhanh ([[rondo]]) |
| **Giao hưởng** | Dàn nhạc | Như sonata, thường 4 chương |
| **Tứ tấu đàn dây** | 2 [[violin|violin]], [[viola|viola]], [[cello|cello]] | Như sonata, 4 chương |
| **[[hinh-thuc-concerto|Concerto]]** | Độc tấu + dàn nhạc | Nhanh – Chậm – Nhanh; có **[[cadenza|cadenza]]** (độc tấu [[ngau-hung-piano|ngẫu hứng]], ngay trước [[cau-ket|kết]]) |
| **Tổ khúc [[thoi-ky-baroque|Baroque]]** | Đàn phím hoặc hoà tấu | Chuỗi vũ khúc cùng giọng: Allemande – Courante – Sarabande – Gigue |

Minuet (3/4, vừa phải) ở thời Cổ điển được [[ludwig-van-beethoven|Beethoven]] thay bằng **[[minuet-va-trio|Scherzo]]** (nhanh, đùa vui) — cả hai thường có dạng [[hinh-thuc-am-nhac|ba đoạn]] với đoạn giữa gọi là Trio.

## Nguồn gốc các thể loại lớn
- **Giao hưởng** có tổ tiên trực tiếp là **[[khuc-mo-man|khúc mở màn]] opera Ý** (*sinfonia*). [[alessandro-scarlatti|Alessandro Scarlatti]] định hình khúc mở màn theo khuôn **nhanh – chậm – nhanh**. Trước thế kỷ 18, "symphony" và "overture" gần như dùng lẫn cho nhau. Khúc mở màn thường được tách ra chơi riêng ở hoà nhạc — từ đó giao hưởng thành một thể loại độc lập. Đến những năm 1770, khuôn **bốn chương** trở thành chuẩn.
- **[[Haydn]]** thường được gọi là "cha đẻ" của giao hưởng và tứ tấu đàn dây, với **104 giao hưởng** và **68 tứ tấu**. Ông **không phát minh** ra chúng — Franz Xaver Richter và Ignaz Holzbauer có thể đã viết tứ tấu trước — nhưng đã mở rộng rất nhiều khả năng của hai thể loại này.
- **Concerto Baroque** dùng **hình thức ritornello**: cả dàn nhạc chơi một chủ đề quay lại nhiều lần (ritornello), xen giữa là các đoạn của người độc tấu. Giuseppe Torelli dùng ý tưởng này trước, [[Vivaldi]] chuẩn hoá nó qua hàng trăm concerto, thường ở hai chương nhanh hai đầu. [[Bach]] và [[georg-philipp-telemann|Telemann]] viết theo mẫu của Vivaldi.
- **Nocturne** cho piano: từ *notturno* đã được dùng trước đó cho những bản trữ tình ngắn hay serenade, nhưng [[john-field|John Field]] là người biến nó thành một **thể loại piano**. Sau khi thử các tên Pastorale, Serenade, Romance, ông chọn "Nocturne" cho [[van-ban-hoc-am-nhac|bản in đầu tiên]] năm **1812**. **21 nocturne** của [[Chopin]] là những ví dụ nổi tiếng nhất.

## Tiểu phẩm piano (thế kỷ 19)
| Thể loại | Tính chất | Ví dụ |
|---|---|---|
| Prelude | Ngắn, khám phá một ý | Chopin, 24 Préludes Op. 28 |
| Étude ([[bai-tap-ngon|luyện ngón]]) | Tập trung một kỹ thuật, nhưng là tác phẩm nghệ thuật | Chopin, [[franz-liszt|Liszt]] |
| Nocturne | Trữ tình, [[giai-dieu|giai điệu]] hát trên đệm rải | Field, Chopin ([[phan-tich-nocturne-op9-so2|phân tích Op. 9 số 2]]) |
| Ballade | Kể chuyện, kịch tính | Chopin, [[johannes-brahms|Brahms]] |
| [[impromptu|Impromptu]] | Như ngẫu hứng | [[franz-schubert|Schubert]], Chopin |
| Bài ca không lời | Giai điệu như ca khúc | [[felix-mendelssohn|Mendelssohn]] |

Bối cảnh: [[cac-thoi-ky]]. [[doi-am|Phức điệu]]: [[fugue]], [[ostinato|passacaglia]].

Toàn cảnh các thể loại từ [[thoi-ky-trung-co|Trung cổ]] đến nay, mỗi thể loại một bài: [[the-loai-am-nhac]] — ví dụ [[giao-huong]], [[nhac-thinh-phong]], [[to-khuc-baroque]], [[tieu-pham-piano]].
`,
  },
  {
    slug: 'bien-doi-chu-de',
    title: 'Biến đổi chủ đề và hình thức tuần hoàn',
    category: 'form',
    aliases: ['biến đổi chủ đề', 'thematic transformation', 'hình thức tuần hoàn', 'cyclic form', 'chu kỳ', 'idée fixe', 'leitmotif', 'leitmotiv', 'motif dẫn dắt', 'Wanderer Fantasy', 'Sonata Si thứ Liszt'],
    summary: 'Thế kỷ 19 tìm cách thống nhất cả tác phẩm nhiều chương bằng một chủ đề quay lại và biến đổi tính cách: từ Wanderer Fantasy của Schubert (1822), idée fixe của Berlioz (1830), Sonata Si thứ của Liszt, leitmotif của Wagner đến hình thức tuần hoàn của Franck.',
    wiki: 'Thematic_transformation',
    refs: [
      ['Britannica — Cyclic form', 'https://britannica.com/art/cyclic-form'],
      ['Britannica — Idée fixe', 'https://www.britannica.com/art/idee-fixe'],
      ['Wikipedia — Symphonie fantastique', 'https://en.wikipedia.org/wiki/Symphonie_fantastique'],
      ["University of Arizona thesis — Schubert's Wanderer Fantasie: a creative springboard to Liszt's Sonata in B minor", 'https://repository.arizona.edu/handle/10150/282346?show=full'],
      ['Wikipedia — Leitmotif', 'https://en.wikipedia.org/wiki/Leitmotif'],
      ['Wikipedia — Symphony in D minor (Franck)', 'https://en.wikipedia.org/wiki/Symphony_in_D_minor_(Franck)'],
      ['Wikipedia — Thematic transformation', 'https://en.wikipedia.org/wiki/Thematic_transformation'],
    ],
    body: `
Trong một [[hinh-thuc-sonata|sonata]] Cổ điển, các chương thường có chất liệu **riêng**. Từ đầu thế kỷ 19, nhiều nhà soạn nhạc muốn cả tác phẩm **gắn kết** bằng một chủ đề chung — quay lại, đổi tính cách, đổi vai trò.

## Ba khái niệm
| Khái niệm | Ý nghĩa | Tiêu biểu |
|---|---|---|
| **Hình thức tuần hoàn** (cyclic form) | Chủ đề **quay lại** ở nhiều chương | [[hector-berlioz|Berlioz]], [[cesar-franck|Franck]] |
| **Biến đổi chủ đề** (thematic transformation) | Một chủ đề **đổi tính cách** (nhịp, [[nhip-do|nhịp độ]], hoà âm, [[cach-dien-tau|cách diễn tấu]]) nhưng vẫn nhận ra được | [[franz-liszt|Liszt]] |
| **Leitmotif** | Motif gắn với một **nhân vật, đồ vật, ý tưởng** trong [[operetta-va-nhac-kich|nhạc kịch]] | [[richard-wagner|Wagner]] |
Khác với [[bien-tau|biến tấu]] (chủ đề và các biến thể nối tiếp nhau thành từng đoạn) và với phát triển [[motif]] trong phần phát triển của sonata, ở đây chủ đề **xuyên suốt** cả tác phẩm lớn và mang **ý nghĩa** (thường là ý nghĩa kể chuyện).

## Lịch sử
- **[[franz-schubert|Schubert]] — Wanderer Fantasy** (1822, cho piano): chủ đề lấy từ ca khúc *Der Wanderer* của chính ông được dùng và biến đổi qua **bốn chương liền nhau**. Đây là tiền đề mà [[robert-schumann|Schumann]], Liszt và những người khác tiếp nối; Liszt còn soạn lại tác phẩm cho piano và dàn nhạc (1851).
- **Berlioz — [[tho-giao-huong|Symphonie fantastique]]** (1830): một [[giai-dieu|giai điệu]] duy nhất — **idée fixe** (ý tưởng ám ảnh), tượng trưng cho người yêu — xuất hiện ở **cả năm chương**, mỗi lần một **tính cách khác** (theo nội dung chương trình). Giai điệu này vốn lấy từ [[oratorio-cantata-passion|cantata]] *Herminie* (1828) của ông.
- **Liszt — Sonata Si thứ** (hoàn thành 1853): bản [[sonata-the-loai|sonata piano]] đầu tiên **gộp ba – bốn chương thành một chương liền**; toàn bộ chất liệu được phát triển từ **vài motif** ở các ô mở đầu, biến đổi tính cách mạnh mẽ (một motif dữ dội có thể trở thành một giai điệu trữ tình). Liszt cũng dùng kỹ thuật này trong các thơ giao hưởng và [[hinh-thuc-concerto|Concerto]] piano số 2.
- **Wagner — leitmotif**: chữ "leitmotif" phổ biến nhờ **Hans von Wolzogen**, người xuất bản năm 1876 một cuốn hướng dẫn đặt tên cho các motif của bộ *Nhẫn*. Wagner **không** dùng chữ này, mà gọi là "Grundthema", "Hauptmotiv" hay đơn giản là "motif"; cách đặt tên của Wolzogen nhiều khi quá máy móc.
- **Franck — [[the-loai|Giao hưởng]] Rê thứ** (1888): các chủ đề quan trọng **quay lại ở cả ba chương**; chương cuối tập hợp lại chủ đề của các chương trước. Phương pháp này ảnh hưởng tới các học trò của ông như [[vincent-d-indy|Vincent d'Indy]], [[ernest-chausson|Ernest Chausson]].

## Phân tích biến đổi chủ đề
1. Tìm **dạng gốc** của chủ đề (thường ở đầu tác phẩm).
2. Khi chủ đề quay lại, so sánh: [[cao-do|cao độ]] ([[quang|quãng]], đường nét) **giữ** gì? Nhịp, nhịp độ, hoà âm, [[cuong-do|cường độ]], cách diễn tấu **đổi** gì?
3. Tính cách mới gắn với **vị trí** nào trong [[hinh-thuc-am-nhac|hình thức]] (đỉnh cao, kết, chương chậm…)?

## Với người chơi đàn
Khi một chủ đề quay lại với tính cách mới, người chơi cần làm **rõ cả hai điều**: người nghe phải **nhận ra** chủ đề, và phải **cảm thấy** sự thay đổi. Xem [[dien-dat-cau-nhac]], [[ly-thuyet-chu-de]].
`,
  },
  {
    slug: "hinh-thuc-hai-doan",
    title: "Hình thức hai đoạn (binary form)",
    category: 'form',
    also: ['analysis'],
    aliases: ["hình thức hai đoạn", "binary form", "hai đoạn đơn", "hai đoạn có tái hiện", "rounded binary", "hai đoạn cân bằng", "balanced binary", "hai đoạn liền", "hai đoạn tách", "continuous binary", "sectional binary", "AABB"],
    summary: "Hình thức gồm hai nửa, mỗi nửa thường được nhắc lại (||: A :||: B :||) — khuôn chuẩn của các vũ khúc Baroque. Nửa đầu đi từ giọng chủ sang giọng át (hoặc giọng song song trưởng nếu ở giọng thứ), nửa sau quay về. Bài phân biệt hai đoạn đơn và hai đoạn có tái hiện, tính \"cân bằng\", hai đoạn tách và hai đoạn liền, kèm sơ đồ giọng và ví dụ Bach, Petzold.",
    refs: [
      ["Open Music Theory — Binary form", "https://viva.pressbooks.pub/openmusictheory/chapter/binary-form/"],
      ["Puget Sound — Sectional versus continuous", "https://musictheory.pugetsound.edu/mt21c/SectionalVersusContinuous.html"],
      ["Wikipedia — Binary form", "https://en.wikipedia.org/wiki/Binary_form"],
      ["Britannica — Binary form", "https://www.britannica.com/print/article/65532"],
      ["Milne — Fundamentals, Function, and Form: Binary form", "https://milnepublishing.geneseo.edu/fundamentals-function-form/chapter/36-binary-form/"],
      ["Wikipedia — Minuets in G major and G minor", "https://en.wikipedia.org/wiki/Minuets_in_G_major_and_G_minor"],
    ],
    body: `
Bài này đào sâu phần "hai đoạn" trong [[hinh-thuc-am-nhac]]. Cần biết trước: [[cau-nhac]], [[cau-ket]], [[chuyen-giong]].

## Khuôn chung
::form A:8 A:8 B:8 B:8 | Hai đoạn: mỗi nửa được nhắc lại — khi chơi nghe thành A A B B (độ dài chỉ minh hoạ)
| | Nửa đầu (A) | Nửa sau (B) |
|---|---|---|
| [[am-giai-truong|Giọng trưởng]] | I → **V** (kết ở giọng át) | bắt đầu ở V, đi xa hơn, rồi **về I** |
| [[am-giai-thu|Giọng thứ]] | i → **III** ([[giong-song-song|giọng song song]] trưởng), đôi khi → v | bắt đầu ở giọng mới, về i |
Đây là khuôn thông dụng của các vũ khúc [[thoi-ky-baroque|Baroque]] — allemande, courante, sarabande… ([[to-khuc-baroque|tổ khúc]]) — và của sonata [[domenico-scarlatti|Scarlatti]].

## Đơn hay có tái hiện?
| Loại | Sơ đồ | Dấu hiệu |
|---|---|---|
| **Hai đoạn đơn** (*simple*) | ‖: A :‖: B :‖ | Nửa sau không quay lại chất liệu mở đầu |
| **Hai đoạn có tái hiện** (*rounded*) | ‖: A :‖: B A′ :‖ | Giữa nửa sau, **chất liệu mở đầu trở lại ở giọng chủ** — đánh dấu việc về nhà |
Open Music Theory nhấn mạnh: "**cân bằng**" (*balanced*) không phải loại thứ ba mà là một **tính chất** mà cả hai loại đều có thể có — đoạn kết của nửa đầu xuất hiện lại, dịch về giọng chủ, ở cuối nửa sau.

## Tách hay liền?
Theo giáo trình Puget Sound: nếu nửa đầu kết bằng **kết chính ở giọng chủ** thì đó là hai đoạn **tách** (*sectional*); nếu kết ở giọng khác hoặc bằng kết khác (vd. chuyển sang V) thì là hai đoạn **liền** (*continuous*). Hai cặp nhãn có thể ghép với nhau, vd. "hai đoạn liền có tái hiện"…

## Ví dụ
- **Minuet Sol trưởng BWV Anh. 114** (sách [[lo-trinh-tac-pham|Anna Magdalena]], 1725; nay được cho là của Christian Petzold): theo giáo trình Milne, ô 1 – 16 là một [[cau-nhac|đoạn nhạc]] song song (nửa kết, rồi kết hoàn toàn ở Sol); từ ô 17 nhạc đi sang Rê với nửa kết ở ô 20 rồi kết hoàn toàn ở Rê. Xem [[phan-tich-minuet-sol-truong]].
- **Badinerie** trong Tổ khúc dàn nhạc số 2, BWV 1067 ([[johann-sebastian-bach|Bach]]): một bài phân tích ở trường phổ thông đọc nửa đầu (ô 1 – 16) đi từ Si thứ đến kết hoàn toàn ở **Fa♯ thứ** — giọng át thứ. *(Nguồn yếu — nên đối chiếu tổng phổ.)*
- Các vũ khúc trong **Tổ khúc [[cello|cello]] số 1**, BWV 1007, đều là hai đoạn (hai nửa có nhắc lại).

## Từ hai đoạn đến sonata
Hai đoạn có tái hiện là tổ tiên trực tiếp của [[hinh-thuc-sonata]]: nửa đầu thành phần trình bày (đi sang V), đầu nửa sau thành phần phát triển, chất liệu mở đầu trở lại thành tái hiện. Nhiều [[minuet-va-trio|minuet và trio]] là hai đoạn có tái hiện bên trong một khung [[hinh-thuc-ba-doan|ba đoạn]].

## Tự kiểm tra
1. Tìm [[dau-nhac-lai|dấu nhắc lại]] giữa bài — đó thường là ranh giới A | B.
2. Nửa đầu kết ở giọng nào, bằng loại kết gì? → tách hay liền.
3. Chất liệu mở đầu có trở lại ở giọng chủ trong nửa sau không? → đơn hay có tái hiện.
`,
  },
  {
    slug: "hinh-thuc-ba-doan",
    title: "Hình thức ba đoạn (ternary form) và aria da capo",
    category: 'form',
    also: ['analysis'],
    aliases: ["hình thức ba đoạn", "ternary form", "ba đoạn đơn", "ba đoạn phức", "aria da capo", "da capo aria", "phần giữa tương phản"],
    summary: "Ba đoạn là A – B – A: một phần, một phần tương phản, rồi phần đầu trở lại (thường được trang trí hoặc rút gọn, ghi A′). Bài phân biệt ba đoạn đơn và ba đoạn phức (mỗi phần tự là một hình thức trọn vẹn, như minuet – trio – minuet), giải thích aria da capo của Handel, và đưa ví dụ từ các nocturne của Chopin và Eine kleine Nachtmusik của Mozart — kèm một lưu ý: Nocturne Op. 9 số 2 không phải ba đoạn.",
    refs: [
      ["Open Music Theory (Nebraska) — Ternary form", "https://pressbooks.nebraska.edu/openmusictheory/?p=336"],
      ["LibreTexts — Open Music Theory 2e: Ternary form", "https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/03%3A_Form/3.07%3A_Ternary_Form"],
      ["Music Theory Online — Aziz, điểm sách Caplin, Analyzing Classical Form", "https://mtosmt.org/issues/mto.14.20.1/mto.14.20.1.aziz.html"],
      ["Wikipedia — Ternary form", "https://en.wikipedia.org/wiki/Ternary_form"],
      ["Wikipedia — Da capo", "https://en.wikipedia.org/wiki/Da_capo"],
      ["Cambridge Companion to Handel — Handel and the aria", "https://www.cambridge.org/core/books/cambridge-companion-to-handel/handel-and-the-aria/060E974E2A9CA41EFD4F77419F6CA6CA"],
      ["Wikipedia — Nocturnes, Op. 15 (Chopin)", "https://en.wikipedia.org/wiki/Nocturnes,_Op._15_(Chopin)"],
      ["Wikipedia — Nocturnes, Op. 48 (Chopin)", "https://en.wikipedia.org/wiki/Nocturnes,_Op._48_(Chopin)"],
      ["Wikipedia — Nocturnes, Op. 9 (Chopin)", "https://en.wikipedia.org/wiki/Nocturnes,_Op._9_(Chopin)"],
      ["Wikipedia — Eine kleine Nachtmusik", "https://en.wikipedia.org/wiki/Eine_kleine_Nachtmusik"],
    ],
    body: `
Bài này đào sâu phần "ba đoạn" trong [[hinh-thuc-am-nhac]]. So sánh với [[hinh-thuc-hai-doan]].

::form A B A′ | Ba đoạn: phần giữa tương phản, phần đầu trở lại (A′ = trở lại có thay đổi)

## Chức năng ba phần
Theo khung của William [[chuc-nang-hinh-thuc|Caplin]] (qua bài điểm sách trên *Music Theory Online*): **A = trình bày**, **B = phần giữa tương phản**, **A′ = tái hiện**. Phần B thường khác về giọng, [[giai-dieu|giai điệu]], [[tiet-tau|tiết tấu]], [[ket-cau|kết cấu]].

## Đơn và phức
| Loại | Đặc điểm | Ví dụ |
|---|---|---|
| **Ba đoạn đơn** | Mỗi phần là một câu hoặc một [[cau-nhac|đoạn nhạc]] | Một chủ đề ngắn dạng a – b – a′ |
| **Ba đoạn phức** (*compound*) | Ít nhất một phần tự là một hình thức trọn vẹn — thường là [[hinh-thuc-hai-doan|hai đoạn có tái hiện]] | **Minuet – trio – minuet**: khi minuet trở lại (*da capo*), theo lệ **bỏ các [[dau-nhac-lai|dấu nhắc lại]]**. Xem [[minuet-va-trio]] |
Trong thế kỷ 19, phần A trở lại thường được **rút ngắn** (Open Music Theory).

## Aria da capo
- Aria ba đoạn ABA trong opera, [[oratorio-cantata-passion|oratorio]] [[thoi-ky-baroque|Baroque]]: chỉ viết A và B, cuối B ghi **"Da capo"** (D.C., "từ đầu"). Khi A trở lại, ca sĩ **trang trí** thêm và thường chèn một [[cadenza]].
- Theo *Cambridge Companion to Handel*, dạng "lớn" thường gặp ở [[george-frideric-handel|Handel]] có năm phần: **A1 A2 B A1 A2**. *"Lascia ch'io pianga"* (*Rinaldo*) thường được dẫn làm ví dụ aria da capo.
Xem thêm [[opera]] và [[ky-hieu-hoa-my]].

## Ví dụ cho người học piano
| Tác phẩm | A | B | A′ |
|---|---|---|---|
| [[frederic-chopin|Chopin]], [[tieu-pham-piano|Nocturne]] Fa trưởng **Op. 15 số 1** | Fa trưởng, giai điệu đơn giản trên chuỗi [[lien-ba|liên ba]] | **Fa thứ**, *con fuoco*, nhanh và kịch tính | Fa trưởng |
| Chopin, Nocturne Đô thứ **Op. 48 số 1** | Đô thứ | ô 25, *poco più lento*: một **[[chorale-va-chorale-prelude|chorale]] ở Đô trưởng** | ô 49, *doppio movimento agitato* |
| [[wolfgang-amadeus-mozart|Mozart]], *[[nhac-thinh-phong|Eine kleine Nachtmusik]]* K. 525, chương III | Minuet ở **Sol** | Trio ở **Rê** (V) | Minuet da capo, không nhắc lại |
Bách khoa PTNA (Nhật) đọc Op. 15 số 1 là A – B – B′ – A′ — cùng một bản nhạc có thể có nhiều cách chia.

**Lưu ý:** Nocturne **Op. 9 số 2** quen thuộc **không** phải ba đoạn — Wikipedia mô tả là hai đoạn có tái hiện (A A B A B A + coda). Xem [[phan-tich-nocturne-op9-so2]].

## Tự kiểm tra
Khi nghe một bản ba đoạn, đánh dấu: (1) chỗ B bắt đầu — điều gì đổi trước tiên (giọng? kết cấu? [[nhip-do|nhịp độ]]?), (2) chỗ A trở lại — có được báo trước bằng một đoạn chuyển về [[hop-am-cam-am|át]] không, (3) A′ khác A ở đâu.
`,
  },
  {
    slug: "passacaglia-va-chaconne",
    title: "Passacaglia, chaconne và bè trầm lặp (ground bass)",
    category: 'form',
    also: ['genres', 'harmony'],
    aliases: ["passacaglia", "chaconne", "chacony", "ground bass", "bè trầm lặp", "basso ostinato", "lament bass", "bè trầm than", "tứ âm đi xuống", "descending tetrachord", "passus duriusculus", "Dido's Lament", "When I am laid in earth", "Passacaglia BWV 582", "Chaconne BWV 1004"],
    summary: "Passacaglia và chaconne đều là biến tấu trên một bè trầm (hoặc một vòng hoà âm) lặp đi lặp lại. Các nhà lý thuyết đã cố phân biệt hai từ — và định nghĩa ngược nhau — nên nhiều học giả coi mọi ranh giới cứng là \"tuỳ tiện và không có cơ sở lịch sử\". Bài trình bày bè trầm than (tứ âm đi xuống, dạng diatonic và cromatic), Lời than của Dido (Purcell), Passacaglia BWV 582 và Chaconne BWV 1004 của Bach, và vòng hoà âm Canon Pachelbel.",
    wiki: "Passacaglia",
    refs: [
      ["Wikipedia — Chaconne", "https://en.wikipedia.org/wiki/Chaconne"],
      ["Wikipedia — Passacaglia", "https://en.wikipedia.org/wiki/Passacaglia"],
      ["Open Music Theory (Nebraska) — Ground bass", "https://pressbooks.nebraska.edu/openmusictheory/chapter/ground-bass/"],
      ["Wikipedia — Lament bass", "https://en.wikipedia.org/wiki/Lament_bass"],
      ["Wikipedia — Descending tetrachord (về Rosand 1979)", "https://en.wikipedia.org/wiki/Descending_tetrachord"],
      ["Wikipedia — Dido's Lament", "https://en.wikipedia.org/wiki/Dido%27s_Lament"],
      ["ROH Collections — Dido and Aeneas", "https://rohcollections.org.uk/Work.aspx?work=576"],
      ["Wikipedia — Passacaglia and Fugue in C minor, BWV 582", "https://en.wikipedia.org/wiki/Passacaglia_and_Fugue_in_C_minor,_BWV_582"],
      ["Wikipedia — Canon in D", "https://wikipedia.com/wiki/Canon_in_D"],
    ],
    body: `
Đây là một dạng [[bien-tau]] trên [[ostinato]]. Bè trầm có số ([[thoi-ky-baroque|Baroque]]) ở [[bass-so]].

## Hai cái tên, một họ
- Open Music Theory: chaconne và passacaglia (cả cách viết "chacony") là hai nhánh của **bè trầm lặp** (*ground bass*) Baroque — mọi chaconne, passacaglia đều là bè trầm lặp, nhưng không phải bè trầm lặp nào cũng là chúng.
- Các định nghĩa **mâu thuẫn**: Percy Goetschius cho rằng chaconne dựa trên một chuỗi [[hop-am-ba|hợp âm]] với giọng trên lặp lại, còn passacaglia dựa trên bè trầm lặp — Clarence Lucas định nghĩa **ngược lại hoàn toàn**. Prout (1879) phân biệt theo phách bắt đầu của bè trầm và [[nhip-do|nhịp độ]] — nhưng có ví dụ bắt đầu ở cả phách 1, 2 và 3. Rinaldo Alessandrini đề xuất phân biệt theo nhịp.
- Wikipedia dẫn một nhận định: vì nhà soạn nhạc dùng hai từ "không phân biệt", mọi cố gắng hiện đại vạch ranh giới rõ ràng đều "**tuỳ tiện và không có cơ sở lịch sử**".
**Cách hiểu thực dụng cho người học:** cả hai = một khung bè trầm/hoà âm ngắn, lặp liên tục, mỗi lần lặp là một biến tấu ở các bè trên.

## Bè trầm than (lament bass)
Khung quen thuộc nhất: **tứ âm đi xuống** từ [[bac-am-giai|chủ âm]] đến át âm trong [[am-giai-thu|giọng thứ]].
::staff bass A3=La G3=Sol F3=Fa E3=Mi | Dạng diatonic ở La thứ ("tứ âm Phrygian"): La – Sol – Fa – Mi
::staff bass A3 G#3 G3 F#3 F3 E3 | Dạng cromatic (*passus duriusculus*): lấp mọi nửa cung từ La xuống Mi
Ellen Rosand (*Musical Quarterly*, 1979) cho rằng ở Venice thập niên 1640 – 1650, ostinato tứ âm đi xuống gắn gần như riêng với [[the-loai-am-nhac|thể loại]] **than khóc** trong [[opera|opera]] (Cavalli) — về sau có học giả điều chỉnh một phần luận điểm này. *(Thư viện chỉ thấy luận điểm qua nguồn thứ cấp.)*

## Ba tác phẩm mẫu
**1. [[henry-purcell|Purcell]] — "When I am laid in earth" (Lời than của Dido), *Dido and Aeneas***
Bè trầm đi xuống **[[am-giai-cromatic|cromatic]] qua một [[quang|quãng]] 4 đúng**, lặp **11 lần** — một passacaglia. Có tả lời bằng nhạc ở chữ "laid" (nằm xuống). Buổi diễn đầu tiên được ghi nhận ở trường nữ sinh của Josias Priest (Chelsea, London) vào khoảng 1689 — ngày chính xác còn tranh cãi.
::youtube f00nKLzCRrI | Joyce DiDonato hát "When I am laid in earth" (Purcell, Dido and Aeneas)

**2. [[johann-sebastian-bach|Bach]] — Passacaglia và Fugue Đô thứ, BWV 582 (organ)**
Chủ đề bè trầm **8 ô**, **20 biến tấu**, rồi một [[fugue]] mà chủ đề là nửa đầu của ostinato. Nửa đầu chủ đề nhiều khả năng lấy từ *Christe: Trio en passacaille* của André Raison (*Premier livre d'orgue*). Năm sáng tác được ghi khác nhau (khoảng 1706 – 1713). Xem [[organ-ong]].

**3. Bach — Chaconne, chương cuối [[to-khuc-baroque|Partita]] số 2 Rê thứ cho [[violin|violin]] độc tấu, BWV 1004**
Bản thảo bộ *Sei Solo* đề năm **1720**. Dựng trên một khung bè trầm/hoà âm ngắn (thường được mô tả là 4 ô) đi xuống từ chủ âm đến át âm; dài bằng bốn chương trước cộng lại. *Số biến tấu: các nguồn đưa ra từ 30 đến 64 — thư viện không chọn một con số.*
::youtube OaBPo8FFgww | Hilary Hahn — Chaconne, Partita số 2 BWV 1004

## Canon của Pachelbel: một chaconne ẩn
Canon Rê trưởng của [[johann-pachelbel|Pachelbel]] là canon ba violin **trên một bè trầm lặp**, có yếu tố chaconne. Vòng hợp âm: **D – A – Bm – F♯m – G – D – G – A** (I – V – vi – iii – IV – I – IV – V).
::staff bass D3=I A2=V B2=vi F#2=iii G2=IV D2=I G2=IV A2=V | Bè trầm của Canon Pachelbel (nốt gốc mỗi hợp âm)
Phân tích đầy đủ: [[phan-tich-canon-pachelbel]]; vòng này sống lại trong [[nhac-pho-thong-the-ky-20|nhạc pop]] — [[vong-hop-am]].
::youtube U5AO5G4VwNA | Voices of Music — Canon Pachelbel trên nhạc cụ cổ

## Thử trên piano
*(Gợi ý của thư viện.)* Tay trái lặp bè trầm than La – Sol – Fa – Mi (mỗi nốt một ô, 3/4); tay phải [[ngau-hung-ung-tac|ứng tác]] 8 lần lặp, mỗi lần một ý mới: hợp âm, rải, [[giai-dieu|giai điệu]], nốt ngắn dần. Đó chính là cách một passacaglia "phát triển". Xem [[ngau-hung-piano]].
`,
  },
  {
    slug: "sonata-rondo-va-cac-loai-rondo",
    title: "Rondo năm phần, rondo bảy phần và sonata-rondo",
    category: 'form',
    also: ['analysis'],
    aliases: ["sonata-rondo", "sonata rondo", "rondo năm phần", "rondo bảy phần", "ABACABA", "Type 4 sonata", "sonata loại 4", "Hepokoski Darcy", "rondo Pathétique"],
    summary: "Rondo xen điệp khúc (A, luôn ở giọng chủ) với các đoạn chen. Rondo năm phần là ABACA; rondo bảy phần và sonata-rondo là ABACABA — nhưng ở sonata-rondo, C hoạt động như phần phát triển và B trở lại ở giọng chủ như trong tái hiện. Bài giải thích cách nhận ra từng loại, \"sonata loại 4\" của Hepokoski & Darcy, và phân tích chương cuối sonata Pathétique của Beethoven và K. 333 của Mozart.",
    refs: [
      ["Open Music Theory — Rondo", "https://viva.pressbooks.pub/openmusictheory/chapter/rondo/"],
      ["Puget Sound — Rondo form", "https://musictheory.pugetsound.edu/mt21c/RondoForm.html"],
      ["Wikipedia — Sonata rondo form", "https://en.wikipedia.org/wiki/Sonata_rondo_form"],
      ["Oxford Academic — Hepokoski & Darcy, Elements of Sonata Theory (2006)", "https://academic.oup.com/book/4770"],
      ["Taylor (2022), Journal of Music Theory — về sonata loại 4 (PDF)", "https://www.pure.ed.ac.uk/ws/files/301495693/Taylor2022JMTFeinting.pdf"],
      ["PTNA — Beethoven Sonata Op. 13", "https://enc.piano.or.jp/en/musics/6558"],
      ["Ithaca College — Mozart K. 333, chương 3", "https://musictech.ithaca.edu/MusicTech/Form/Presentations/MozartK333/mvt3/K333Rondo.html"],
    ],
    body: `
Bài này nối [[rondo]] với [[hinh-thuc-sonata]]. Cần biết trước cả hai.

## Ba khuôn rondo
::form A B A C A | Rondo năm phần: hai đoạn chen B và C đều là chủ đề ổn định
::form A B A C A B′ A | Rondo bảy phần / sonata-rondo: B trở lại (B′), lần này ở giọng chủ
| | Rondo năm phần | Sonata-rondo |
|---|---|---|
| Sơ đồ | ABACA | ABACABA (+ coda) |
| Đoạn C | Thường là một chủ đề ổn định như B | Hoạt động như **phần phát triển** ([[chuyen-giong|chuyển giọng]], [[mo-tien-hoa-am|mô tiến]]) |
| ABA đầu | — | Như **phần trình bày**, khép lại bằng A ở giọng chủ |
| ABA cuối | — | Như **tái hiện**: B quay lại **ở giọng chủ** |
*(Theo Open Music Theory.)*
Theo các trích dẫn thứ cấp, William Caplin gọi sonata-rondo là "có lẽ phức tạp nhất trong các [[hinh-thuc-am-nhac|hình thức]] cổ điển"; và trong rondo năm phần, [[joseph-haydn|Haydn]] hay đặt đoạn chen thứ hai ở [[am-giai-thu|giọng thứ]], [[wolfgang-amadeus-mozart|Mozart]] ở giọng hạ át.

## "Sonata loại 4"
Trong *Elements of Sonata Theory* (OUP, 2006), James Hepokoski và Warren Darcy chia sonata thành năm loại; **loại 4** là dạng lai **sonata-rondo**: trình bày, phát triển, tái hiện **đều mở đầu bằng chủ đề chính ở giọng chủ**, và sau tái hiện bắt buộc có một lần điệp khúc nữa trong vùng coda. *(Theo bài của Taylor dẫn lại.)*

## Ví dụ 1: Beethoven, Sonata "Pathétique" Op. 13, chương 3
Thường được mô tả là sonata-rondo hoặc rondo bảy phần ABACABA + coda.
| Phần | Giọng |
|---|---|
| A (điệp khúc) | **Đô thứ** |
| B | **Mi♭ trưởng** (III) |
| A | Đô thứ |
| C | **La♭ trưởng** (VI) |
| A | Đô thứ |
| B′ | trở lại gần giọng chủ (một nguồn ghi Đô trưởng) |
| A + coda | Đô thứ |
Các đoạn **chuyển về** dừng trên [[hop-am-ba|hợp âm]] **Sol** (V, nửa kết) trước mỗi lần điệp khúc trở lại. *(Nhãn từng phần khác nhau giữa các nguồn.)* Chương 2 của cùng sonata đã có bài: [[phan-tich-pathetique-chuong-2]].
::youtube 36XbZUQXLQU | Beethoven, Sonata Pathétique — chương 3, Rondo: Allegro

## Ví dụ 2: Mozart, Sonata Si♭ trưởng K. 333, chương 3
Sonata-rondo: điệp khúc ô 1 – 16 là một [[cau-nhac|đoạn nhạc]] song song; B ở giọng át (ô 24 – 36), trở lại ở giọng chủ (ô 148 – 164); C (ô 62 – 111) đi qua nhiều giọng; có một [[cadenza]] viết sẵn kiểu [[hinh-thuc-concerto|concerto]]. *(Theo trang giáo trình Ithaca College.)*

## Cách nhận ra khi nghe
1. Đếm số lần điệp khúc trở lại (3 lần → năm phần; 4 lần → bảy phần).
2. Đoạn giữa (C) có "đi lang thang" qua nhiều giọng không? → nghiêng về sonata-rondo.
3. Đoạn B lần thứ hai có ở **giọng chủ** không? → dấu hiệu tái hiện.
Xem thêm [[phan-tich-rondo-alla-turca]] (một rondo của Mozart) và [[chuc-nang-hinh-thuc]].
`,
  },
  {
    slug: "hinh-thuc-ca-khuc-pho-thong",
    title: "Hình thức ca khúc phổ thông: verse – chorus, AABA, pre-chorus, bridge",
    category: 'form',
    also: ['jazz', 'genres'],
    aliases: ["hình thức ca khúc phổ thông", "verse-chorus", "verse chorus", "điệp khúc", "pre-chorus", "tiền điệp khúc", "bridge (ca khúc)", "SRDC", "srdc", "hình thức bài hát pop", "Covach", "hook"],
    summary: "Phần lớn ca khúc pop, rock, V-pop được xây từ vài khối: verse (kể chuyện), chorus (mang tựa bài và giai điệu dễ nhớ nhất), pre-chorus (đẩy lên chorus) và bridge (tương phản). Bài trình bày phân loại của John Covach (verse đơn, verse – chorus đơn và tương phản, AABA, AABA phức), nguồn gốc pre-chorus theo Jay Summach, cấu trúc câu SRDC của Walter Everett, và một cách phân tích một bài hát Việt.",
    wiki: "Verse–chorus_form",
    refs: [
      ["Wikipedia — Verse–chorus form (dẫn Covach 2005)", "https://en.wikipedia.org/wiki/Verse%E2%80%93chorus_form"],
      ["Covach, \"Form in Rock Music: A Primer\" (PDF trích)", "https://www.personal.kent.edu/~sbirch/Theory/21341%20CMT/Form%20in%20Rock%20Music.pdf"],
      ["Summach, \"The Structure, Function, and Genesis of the Prechorus\", MTO 17/3 (2011)", "https://mtosmt.org/issues/mto.11.17.3/mto.11.17.3.summach.html"],
      ["Open Music Theory — Melody and phrasing (SRDC)", "https://viva.pressbooks.pub/openmusictheory/chapter/melody-and-phrasing/"],
      ["Open Music Theory — AABA and strophic form", "https://viva.pressbooks.pub/openmusictheory/chapter/aaba-and-strophic-form/"],
      ["Nobile, \"Form and Voice Leading in Early Beatles Songs\", MTO 17/3 (2011)", "https://mtosmt.org/issues/mto.11.17.3/mto.11.17.3.nobile.html"],
      ["Spicer — điểm sách Everett, The Beatles as Musicians (MTO 11/4)", "https://mtosmt.org/issues/mto.05.11.4/mto.05.11.4.spicer.html"],
      ["de Clercq, \"Embracing Ambiguity in the Analysis of Form in Pop/Rock Music, 1982–1991\", MTO 23/3 (2017)", "https://mtosmt.org/ojs/index.php/mto/article/view/117"],
      ["Oxford Academic — Everett, The Foundations of Rock, ch. 6", "https://academic.oup.com/book/49249/chapter/422354834"],
    ],
    body: `
Bài này nối [[hinh-thuc-am-nhac]] với [[nhac-pho-thong-the-ky-20|nhạc phổ thông]]. Hoà âm đi kèm: [[hoa-am-pop]]; đệm: [[dem-hat-hien-dai]]; nghiên cứu: [[nghien-cuu-am-nhac-dai-chung]].

## Các khối
| Khối | Vai trò (theo Open Music Theory) |
|---|---|
| **Verse** | Mang **câu chuyện**; mỗi lần trở lại có lời mới, cùng [[giai-dieu|giai điệu]] |
| **Pre-chorus** | Đoạn chuyển, dâng năng lượng dẫn vào chorus |
| **Chorus** | Mang **tựa bài** và giai điệu dễ nhớ nhất; lời thường giữ nguyên |
| **Bridge** | Tương phản; trong AABA thường nhấn [[hop-am-ba|hợp âm]] ngoài chủ và kết trên **át** để chuẩn bị trở lại |
*"Hook" (câu móc) chưa có định nghĩa học thuật trong các nguồn tìm được — các trang dạy sáng tác thường đồng nhất nó với chorus hoặc đặt ở đầu/cuối mỗi đoạn A.*

## Phân loại của Covach
John Covach, *"Form in Rock Music: A Primer"* (trong *Engaging Music*, OUP, 2005) — theo các bản tóm tắt:
| Loại | Mô tả |
|---|---|
| **Verse đơn** (*simple verse*) | Một đoạn lặp nhiều lần với lời mới |
| **Verse – chorus đơn** | Verse và chorus **cùng [[vong-hop-am|vòng hợp âm]]** |
| **Verse – chorus tương phản** | Verse và chorus **khác vòng hợp âm** |
| **AABA** | verse, verse, bridge ("middle eight"), verse — kiểu [[hinh-thuc-ca-khuc-32|ca khúc 32 ô]] Tin Pan Alley |
| **AABA phức** | Các cặp verse – chorus đóng vai A, bao quanh một bridge |
::form Verse Pre-chorus Chorus Verse Pre-chorus Chorus Bridge Chorus | Một sơ đồ verse – chorus thường gặp (minh hoạ)
::form A:8 A:8 B:8 A:8 | AABA — so sánh

## Pre-chorus ra đời thế nào?
Jay Summach (*Music Theory Online* 17/3, 2011), dựa trên thống kê Top 20 hằng năm của Billboard: pre-chorus xuất hiện từ **giữa thập niên 1960**, khi hình thức verse – chorus và hình thức [[lied|strophic]] hội tụ vào một thiết kế bốn phần.

## Bên trong một đoạn: SRDC
Walter Everett (*The Beatles as Musicians*, OUP, 2001) đặt tên cấu trúc bốn câu thường gặp: **S**tatement – **R**estatement – **D**eparture – **C**onclusion (nêu – nhắc – rời – kết), ký hiệu chữ kiểu aaba hoặc aabc. Drew Nobile (*MTO* 2011) cho thấy hình thức phổ biến nhất của Beatles thời đầu là AABA, mỗi đoạn A là một khối SRDC.
::form S R D C | SRDC: nửa đầu (S + R) giống nhau, nửa sau (D + C) rời đi rồi khép lại
SRDC rất gần [[cau-nhac|câu nhạc kiểu "sentence"]] trong lý thuyết cổ điển.

## Khi khối không rõ ràng
Trevor [[phoi-chorale-kieu-bach|de Clercq]] (*MTO* 23/3, 2017) bàn về **tính mơ hồ** khi phân đoạn pop/rock 1982 – 1991: các khối khác nhau ít, vai trò trộn lẫn, bridge có thứ bậc khác nhau. Ví dụ "One" (U2): có người đọc là verse/chorus xen kẽ, có người đọc là toàn verse.

## Thử phân tích một bài hát Việt
*(Quy trình gợi ý của thư viện.)*
1. Nghe và ghi thời điểm mỗi lần **lời đổi mà giai điệu giữ** (verse) và mỗi lần **lời lặp** (chorus).
2. Đánh dấu chỗ **tựa bài** xuất hiện — thường nằm trong chorus.
3. Ghi vòng hợp âm từng khối: verse và chorus cùng vòng (đơn) hay khác (tương phản)?
4. Có đoạn chỉ xuất hiện một lần, khác hẳn phần còn lại không? → bridge.
Xem thêm [[vpop-rap-viet]] và [[phong-cach-jazz]] cho các hình thức ca khúc khác.
`,
  },
]
