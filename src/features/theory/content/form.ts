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
| Lớn nhất | **Tác phẩm nhiều chương** — sonata, giao hưởng, concerto, tổ khúc | [[the-loai]] |
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
5. **Lý thuyết hình thức hiện đại**: [[chuc-nang-hinh-thuc]], [[luoc-do-galant]].
6. **Đối âm và hình thức phức điệu**: [[doi-am]] → [[doi-am-5-loai]] → [[doi-am-kep]] → [[fugue]].
7. **Kết cấu, thể loại, thế kỷ 19**: [[ket-cau]] → [[the-loai]] → [[bien-doi-chu-de]].
8. **Hình thức phổ thông và jazz**: [[blues-12-nhip]], [[hinh-thuc-ca-khuc-32]].
Áp dụng vào tác phẩm cụ thể: [[phuong-phap-phan-tich-tac-pham]].

## Mẹo nhận ra hình thức khi nghe
- Đánh dấu chỗ **chủ đề mở đầu quay lại**: đó là cột mốc lớn nhất.
- Để ý các **kết mạnh** và chỗ **đổi giọng**: chúng chia các phần.
- Hỏi: phần mới **tương phản** (chất liệu mới) hay **phát triển** (chất liệu cũ bị xé nhỏ, chuyển giọng liên tục)?
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
- Motif bốn nốt của Giao hưởng số 5 xuất hiện **gần như trong mọi [[so-chi-nhip|ô nhịp]]** của chương 1, kể cả trong đoạn phát triển.
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
    aliases: ['câu nhạc', 'đoạn nhạc', 'phrase', 'period', 'câu hỏi câu trả lời', 'tiết nhạc', 'antecedent', 'consequent'],
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
Một cấu trúc 8 ô nhịp khác (theo William [[chuc-nang-hinh-thuc|Caplin]]), rất phổ biến từ [[ludwig-van-beethoven|Beethoven]]:
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
Lưu ý: cách nhìn này giả định chuẩn 4–8 ô; một số nhà lý thuyết (như Braunschweig) nhắc rằng đó là **giả định** của phương pháp, và không phải câu dài nào cũng cần được giải thích như một "chuẩn bị mở rộng".

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
    aliases: ['hình thức', 'cấu trúc bài', 'musical form', 'hai đoạn', 'ba đoạn', 'binary', 'ternary', 'ABA', 'AB', 'verse chorus', 'phiên khúc điệp khúc'],
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
| **Ba đoạn** | ABA | B tương phản, A trở lại | Nhiều nocturne của [[frederic-chopin|Chopin]], aria da capo |
| Strophic | AAA… | Cùng nhạc, lời khác | Dân ca, thánh ca |
| [[rondo]] | ABACA… | Chủ đề A quay lại nhiều lần | Chương cuối sonata |
| [[bien-tau]] | A A1 A2 A3… | Chủ đề và các biến thể | Biến tấu "Ah vous dirai-je, Maman" của [[wolfgang-amadeus-mozart|Mozart]] |
| [[hinh-thuc-sonata|Sonata]] | Trình bày – Phát triển – Tái hiện | Hình thức lớn của thời Cổ điển | Chương 1 sonata, giao hưởng |

## Phân biệt kỹ hơn: hai đoạn và ba đoạn
| Dạng | Sơ đồ | Đặc điểm |
|---|---|---|
| Hai đoạn **khép** (sectional) | ‖: A :‖: B :‖ | A kết **ở [[bac-am-giai|chủ âm]]** (kết hoàn toàn) |
| Hai đoạn **mở** (continuous) | ‖: A :‖: B :‖ | A kết **trên V** hoặc đã chuyển giọng, phải đi tiếp sang B |
| Hai đoạn **có tái hiện** (rounded binary) | ‖: A :‖: B A′ :‖ | Cuối B, **một phần** của A quay lại |
| Ba đoạn đơn | A B A | Mỗi đoạn **trọn vẹn, đứng riêng được**; A trở lại **đầy đủ** |
| Viết liền (through-composed) | A B C… | Mỗi đoạn là nhạc mới, không quay lại |
::form A B | Hai đoạn: ‖: A :‖: B :‖
::form A B A' | Hai đoạn có tái hiện: cuối B, một phần của A quay lại (A′)
::form A B A | Ba đoạn: A trở lại đầy đủ

Chỗ dễ nhầm nhất là **hai đoạn có tái hiện** và **ba đoạn**. Ở hai đoạn có tái hiện, các phần **không đứng riêng được**. Ở ba đoạn, đoạn A kết dứt khoát và có thể chơi một mình. Đoạn B của ba đoạn thường mang chất liệu tương phản, hay ở giọng mới và kém ổn định.

Hai đoạn có tái hiện được coi là **tổ tiên của [[hinh-thuc-sonata]]**: phần B mang tính phát triển, rồi A trở lại ở giọng chính — giống Phát triển → Tái hiện.

## Hình thức bài hát pop
**Intro – Phiên khúc (Verse) – Tiền điệp khúc – Điệp khúc (Chorus) – Phiên khúc – Điệp khúc – Bridge – Điệp khúc – Outro.** Điệp khúc giữ nguyên lời và nhạc; phiên khúc giữ nhạc nhưng đổi lời.

Bản đồ toàn bộ mục: [[lo-trinh-hinh-thuc]]. Ba đoạn kép: [[minuet-va-trio]]. Dấu hiệu hình thức trong bản nhạc: [[dau-nhac-lai]], [[cau-ket]], [[chuyen-giong]]. Hình thức ca khúc jazz: [[hinh-thuc-ca-khuc-32]]. Các thể loại nhiều chương: [[the-loai]]. Biến tấu trên bass lặp: [[ostinato]].
`,
  },
  {
    slug: 'minuet-va-trio',
    title: 'Minuet và trio',
    category: 'form',
    aliases: ['minuet', 'menuet', 'minuet and trio', 'trio', 'scherzo', 'scherzo và trio', 'ba đoạn kép', 'compound ternary', 'Minuet in G', 'Petzold'],
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
- Minuet là **vũ điệu Pháp**, phổ biến từ khoảng **1650** ở triều đình **Louis XIV**. **[[jean-baptiste-lully|Lully]]** — nhạc sĩ và vũ công phục vụ nhà vua — viết rất nhiều minuet cho opera và ballet.
- Nhịp **3/4**; bước nhảy cơ bản kéo dài **sáu phách**, tức là hai ô 3/4 — một lý do khiến minuet thường đi theo **cặp [[so-chi-nhip|ô nhịp]]** (xem [[sieu-nhip]]).
- Đây là vũ điệu khiêu vũ được ưa chuộng nhất ở châu Âu từ nửa sau thế kỷ 17 đến cuối thế kỷ 18; minuet cũng đi vào **tổ khúc đàn phím** (xem [[the-loai]]).
- Ví dụ quen thuộc với học trò piano: hai **Minuet Sol trưởng và Sol thứ** trong *Sổ tay cho Anna Magdalena [[johann-sebastian-bach|Bach]]* (1725) — được chép thành **một cặp, chơi [[dau-nhac-lai|da capo]]**. Chúng từng được ghi là của Bach (BWV Anh. 114–115) nhưng nay được xác định là của **Christian Petzold**, nhạc sĩ organ ở Dresden.

## Hình thức: ba đoạn kép
| Tầng | Cấu trúc |
|---|---|
| **Lớn** | **Minuet** (A) – **Trio** (B) – **Minuet da capo** (A, thường **bỏ** các dấu nhắc lại) |
| **Nhỏ** (trong minuet) | **Hai đoạn có tái hiện**: ‖: a :‖: b a′ :‖ |
| **Nhỏ** (trong trio) | Cũng là hai đoạn hoặc ba đoạn nhỏ |
::form Minuet Trio Minuet | Ba đoạn kép: Minuet (A) – Trio (B) – Minuet da capo (A, chơi lại phần đầu)
Vì mỗi phần của hình thức lớn lại chứa một hình thức nhỏ, toàn chương được gọi là **ba đoạn kép** (compound ternary). Ba mô-đun a – b – a′ của minuet được gom thành **hai** phần lớn, mỗi phần nhắc lại — đây là [[hinh-thuc-am-nhac|hai đoạn có tái hiện]].

Trio thường **tương phản** với minuet — về giọng, kết cấu hoặc tính cách. Tên "trio" thường được giải thích là bắt nguồn từ thói quen viết đoạn này cho **ba nhạc cụ** (ba bè).

## Từ minuet đến scherzo
- Trong bộ tứ tấu đàn dây **Op. 33** (1781), [[Haydn]] thay tên "Minuet" bằng **"Scherzo"** (tiếng Ý: trò đùa) — khung hình thức vẫn là minuet – trio.
- [[Beethoven]] biến [[tiet-tau|nhịp điệu]] lịch sự của minuet thành một vũ điệu **mãnh liệt** hơn, nhanh hơn. Ông viết scherzo trong hầu hết chín bản giao hưởng, dù chỉ gọi tên "scherzo" trong bản số 2 và số 3.
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
    also: ['analysis'],
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
| Sonata-rondo | A B A – C (phát triển) – A B A |
::form A B A C A | Rondo 5 phần
::form A B A C A B A | Rondo 7 phần: A luôn ở giọng chính, B và C sang giọng khác

Rondo thường vui tươi, nhanh — rất hay dùng cho **chương cuối** của sonata và [[hinh-thuc-concerto|concerto]] thời Cổ điển.

## Ví dụ cho người học piano
- "Für Elise" ([[Beethoven]]): A B A C A — xem [[phan-tich-fur-elise]].
- "Rondo alla Turca" — chương 3 Sonata K. 331 ([[Mozart]]), xem bên dưới và [[phan-tich-rondo-alla-turca]].

## Lịch sử
- **Gốc gác**: những ví dụ sớm nhất của lối viết rondo nằm trong aria và hợp xướng opera Ý đầu thế kỷ 17.
- **Rondeau Pháp thời [[thoi-ky-baroque|Baroque]]**: [[Lully]] (đôi khi được gọi là "cha đẻ của rondeau"), Chambonnières và [[louis-couperin|Louis Couperin]] phổ biến hình thức này ở Pháp thế kỷ 17. Một **điệp khúc** (refrain) dài 8 hoặc 16 [[so-chi-nhip|ô nhịp]] xen kẽ với các **couplet** (đoạn xen), tạo chuỗi a b a c a d… dài tuỳ ý. [[Rameau]] chuẩn hoá thiết kế này. Ví dụ: *Les baricades mistérieuses* của [[Couperin|François Couperin]] (Pièces de [[dan-phim-co|clavecin]], tập 2, 1716–17).
- **Đừng nhầm** với *rondeau* thời [[thoi-ky-trung-co|Trung cổ]] (thế kỷ 14–15) — một thể thơ và chanson có khuôn cố định, không liên quan.
- **Thời Cổ điển**: rondo Cổ điển phát triển từ rondeau đàn phím Pháp. Rondo **[[am-giai-truong|giọng trưởng]]** trở thành dạng chương cuối mặc định. Rondo kết **[[am-giai-thu|giọng thứ]]** thì rất hiếm: [[Mozart]] chỉ viết ba, [[Haydn]] chỉ một (và còn gây tranh cãi về hình thức). Phải đến [[Beethoven]] dạng này mới thật sự phát triển.

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
    also: ['analysis'],
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
"Sonata" là **tác phẩm** nhiều chương (thường 3–4) cho một hoặc hai nhạc cụ. "Hình thức sonata" là **cấu trúc** của một chương — thường là chương đầu. Sonatina là sonata nhỏ, đơn giản ([[muzio-clementi|Clementi]], [[friedrich-kuhlau|Kuhlau]]) — bài tập kinh điển cho học sinh piano.

Liên quan: [[hinh-thuc-am-nhac]], [[rondo]], [[giong-song-song]], [[the-loai]]. Phân tích một ví dụ cụ thể: [[phan-tich-sonata-k545]]. Đoạn phát triển thường kết bằng [[bass-ngan]] trên [[bac-am-giai|át âm]].
`,
  },
  {
    slug: 'hinh-thuc-concerto',
    title: 'Hình thức concerto',
    category: 'form',
    also: ['improvisation'],
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
- **Ritornello** (tiếng Ý: "khúc quay lại") là [[cau-nhac|đoạn nhạc]] của dàn nhạc được **nhắc lại** nhiều lần, xen giữa là các **đoạn độc tấu**. Mô hình này có ở các concerto violin của **Torelli** và được **[[antonio-vivaldi|Vivaldi]]** chuẩn hoá trong hàng trăm concerto.
- Một chương nhanh điển hình của Vivaldi: khoảng **năm ritornello xen với bốn đoạn độc tấu**.
| Vai trò | Ritornello (dàn nhạc) | Đoạn độc tấu |
|---|---|---|
| Giọng | **Ổn định**: mở và đóng chương ở giọng chủ, xác nhận các giọng mới | **[[chuyen-giong|Chuyển giọng]]**, đi tới các vùng giọng xa |
| Chất liệu | Nhắc lại chủ đề ritornello (đôi khi chỉ vài [[motif|motif]] của nó) | Hình nhạc kỹ thuật, điêu luyện |
- Các ritornello ở giữa thường **ngắn hơn** và ở **giọng khác**; ritornello cuối trở về đầy đủ ở giọng chủ.
- Trên piano, [[Bach]] dùng tư duy này trong *Bản concerto Ý* (Italienisches Konzert) cho đàn phím solo — hai [[ban-phim|bàn phím]] của [[dan-phim-co|harpsichord]] luân phiên vai "tutti" và "solo".

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
- Cadenza là chỗ thể hiện sự tự do — nhưng thường đi theo một [[hop-am-sau-bon|hợp âm 6/4 kết]] và kết bằng [[hop-am-ba|hợp âm]] át có láy rền (xem [[ky-hieu-hoa-my]]).
`,
  },
  {
    slug: 'bien-tau',
    title: 'Biến tấu',
    category: 'form',
    also: ['analysis'],
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
| [[Beethoven]] — *Diabelli Variations* Op. 120 | 1819–1823 | [[anton-diabelli|Diabelli]] mời nhiều nhà soạn nhạc mỗi người viết một biến tấu trên điệu valse của ông; Beethoven viết hẳn **33 biến tấu**, khai thác những chi tiết nhỏ nhất (nốt hoa mỹ mở đầu, [[quang|quãng]] 4 và 5 đi xuống, [[not-lap-lai|nốt lặp]]) |
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
    aliases: ['texture', 'đơn âm', 'chủ điệu', 'monophony', 'homophony', 'polyphony', 'giai điệu và đệm'],
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
| **Đơn âm** (monophony) | Một [[giai-dieu|giai điệu]], không đệm | Thánh ca Gregorian, hát ru |
| **Chủ điệu** (homophony) | Một giai điệu chính + [[hop-am-ba|hợp âm]] đệm | Phần lớn nhạc pop, [[the-loai|nocturne]] [[frederic-chopin|Chopin]] |
| **Hợp âm khối** (homorhythm) | Mọi bè cùng [[tiet-tau|nhịp điệu]] | Thánh ca 4 bè |
| **Phức điệu** (polyphony) | Nhiều giai điệu độc lập, ngang hàng | Fugue, canon của [[johann-sebastian-bach|Bach]] |
| **Dị âm** (heterophony) | Nhiều người chơi cùng giai điệu với [[bien-tau|biến tấu]] nhỏ khác nhau | Nhạc dân tộc, nhã nhạc cung đình |

## Lịch sử kết cấu trong âm nhạc phương Tây
1. **Đơn âm** — Thánh ca là phong cách chủ đạo ở phần lớn châu Âu thời [[thoi-ky-trung-co|Trung cổ]]. Nhiều người hát đồng âm hoặc cách [[quang|quãng 8]] vẫn là đơn âm: kết cấu tính theo **số giai điệu**, không theo số người hát.
2. **Organum** — ca sĩ thêm một bè vào thánh ca có sẵn. Dạng sớm nhất chạy **song song quãng 8 hoặc 5**, nên thực chất vẫn gần đơn âm. Đến thế kỷ 11, "organum tự do" cho các bè đi độc lập hơn — khởi đầu truyền thống **phức điệu**.
3. **Phức điệu [[thoi-ky-phuc-hung|Phục hưng]]** — các bè ngang hàng, độc lập trở thành kết cấu phổ biến (xem [[Palestrina]], [[doi-am]]). Nó bị phê phán là làm **lời ca khó nghe rõ**.
4. **Monody (khoảng 1600)** — nhóm **Florentine Camerata** ở Ý phản ứng lại đối âm phức tạp: một giọng hát độc tấu, nhịp điệu tự do, trên phần đệm, để âm nhạc **phục vụ lời**. Từ đây ra đời opera, cantata, oratorio.
5. **Chủ điệu** — từ đầu thế kỷ 17 (thời [[thoi-ky-baroque|Baroque]]), chủ điệu trở thành một trong những kết cấu chủ đạo. Các nhà soạn nhạc nghĩ theo **hoà âm dọc**, và [[bass-so|bè trầm liên tục]] (basso continuo) trở thành đặc trưng. Chủ điệu và phức điệu vẫn cùng tồn tại suốt thế kỷ 17–18.

Từ "homophony" có nghĩa khác trong thời cổ đại; nó vào tiếng Anh năm **1776** qua Charles Burney.

## Các kiểu đệm chủ điệu trên piano
- **Hợp âm khối**: đánh cả hợp âm cùng lúc.
- **[[luyen-hop-am-rai|Hợp âm rải]]** (arpeggio): đánh lần lượt từng nốt.
- **Bass Alberti**: thấp – cao – giữa – cao (C–G–E–G), rất phổ biến thời [[wolfgang-amadeus-mozart|Mozart]].
- **Stride / oom-pah**: bass trầm ở [[so-chi-nhip|phách mạnh]], hợp âm ở phách nhẹ (valse, ragtime).

Cách luyện từng kiểu đệm: [[dem-hat-piano]].

Phức điệu: xem [[doi-am]] và [[fugue]]. Mẫu lặp liên tục: [[ostinato]].
`,
  },
  {
    slug: 'doi-am',
    title: 'Đối âm',
    category: 'form',
    aliases: ['đối vị', 'counterpoint', 'canon', 'phức điệu', 'mô phỏng', 'imitation', 'luân khúc'],
    summary: 'Nghệ thuật kết hợp nhiều giai điệu độc lập sao cho vừa hay riêng từng bè vừa hoà hợp khi vang cùng nhau.',
    wiki: 'Counterpoint',
    refs: [
      ['Etymonline — counterpoint', 'https://www.etymonline.com/word/counterpoint'],
      ['Merriam-Webster — punctus contra punctum', 'https://www.merriam-webster.com/dictionary/punctus%20contra%20punctum'],
      ['History of Information — Johann Joseph Fux describes Baroque counterpoint', 'https://www.historyofinformation.com/detail.php?id=2640'],
      ['Hutchinson, Music Theory for the 21st-Century Classroom — First species counterpoint', 'https://human.libretexts.org/Bookshelves/Music/Music_Theory/Music_Theory_for_the_21st-Century_Classroom_(Hutchinson)/30%3A_Introduction_to_Counterpoint/30.02%3A_First_Species_Counterpoint'],
    ],
    body: `
Đối âm nhìn âm nhạc theo **chiều ngang** (từng [[giai-dieu|giai điệu]]), trong khi hoà âm nhìn theo **chiều dọc** ([[hop-am-ba|hợp âm]]). Thực tế hai cách nhìn bổ sung cho nhau.

## Tên gọi
"Counterpoint" bắt nguồn từ tiếng Latin **punctus contra punctum** — "nốt chống nốt" (*punctus* là tên cũ của [[not-nhac|nốt nhạc]]). Các từ điển ghi niên đại khác nhau cho nghĩa âm nhạc của từ này, từ thế kỷ 14 đến giữa thế kỷ 15. Ban đầu nó chỉ việc **hát một bè kèm theo thánh ca**.

## Lịch sử ngắn
- **Organum** thời [[thoi-ky-trung-co|Trung cổ]] là dạng đối âm sớm nhất — xem lịch sử kết cấu ở [[ket-cau]].
- **[[thoi-ky-phuc-hung|Phục hưng]]**: phức điệu nhiều bè ngang hàng đạt đỉnh với [[Palestrina]]. "Phong cách Palestrina" ngày nay là nền của các lớp đối âm Phục hưng ở đại học, phần lớn nhờ cuốn *Gradus ad Parnassum* (1725) của [[Fux]] (xem [[doi-am-5-loai]]).
- **[[thoi-ky-baroque|Baroque]]**: đối âm gắn chặt với [[chuc-nang-hoa-am|hoà âm chức năng]]; đỉnh cao là [[Bach]] với [[fugue]] và canon.

## Các loại chuyển động giữa hai bè
| Chuyển động | Mô tả |
|---|---|
| Song song | Cùng chiều, giữ nguyên [[quang|quãng]] |
| Cùng chiều | Cùng chiều, quãng thay đổi |
| **Ngược chiều** | Một bè lên, một bè xuống — tạo độc lập tốt nhất |
| Xiên | Một bè đứng yên, bè kia di chuyển |

Quy tắc kinh điển ([[Fux]], "Gradus ad Parnassum", 1725): ưu tiên chuyển động ngược chiều, tránh [[dan-giong|quãng 5/8 song song]], xử lý [[thuan-nghich|nghịch âm]] cẩn thận.

## Mô phỏng và canon
- **Mô phỏng**: bè thứ hai nhắc lại giai điệu bè thứ nhất sau một khoảng thời gian.
- **Canon**: mô phỏng nghiêm ngặt từ đầu đến cuối — ví dụ hát nối "Frère Jacques" (Kìa con bướm vàng).

Đỉnh cao của đối âm là [[fugue]]. Người học piano bắt đầu với **[[lo-trinh-tac-pham|Inventions]] 2 bè** của Bach. Phương pháp học từng bước: [[doi-am-5-loai]]. Đổi chỗ các bè và các loại canon: [[doi-am-kep]]. Liên quan: [[ket-cau]], [[motif]].
`,
  },
  {
    slug: 'fugue',
    title: 'Fugue',
    category: 'form',
    also: ['analysis'],
    aliases: ['fuga', 'tẩu khúc', 'chủ đề fugue', 'subject', 'answer', 'đối đề'],
    summary: 'Thể loại đối âm chặt chẽ: một chủ đề được các bè lần lượt mô phỏng, đan xen và phát triển.',
    wiki: 'Fugue',
    refs: [
      ['Etymonline — fugue', 'https://www.etymonline.com/word/fugue'],
      ['Classical Music — What is a ricercar?', 'https://www.classical-music.com/features/musical-terms/what-is-a-ricercar'],
      ['Wikipedia — The Well-Tempered Clavier', 'https://en.wikipedia.org/wiki/The_Well-Tempered_Clavier'],
      ['Wikipedia — Grosse Fuge', 'https://en.wikipedia.org/wiki/Grosse_Fuge'],
      ['Wikipedia — 24 Preludes and Fugues (Shostakovich)', 'https://en.wikipedia.org/wiki/24_Preludes_and_Fugues_(Shostakovich)'],
    ],
    body: `
::img Johann Sebastian Bach.jpg | Johann Sebastian Bach (1685–1750), bậc thầy fugue — chân dung của Elias Gottlob Haussmann

## Tên gọi
"Fugue" đến từ tiếng Ý *fuga* — **"sự chạy trốn"**, từ Latin *fugere* ("chạy trốn"). Đây là một ẩn dụ: bè đầu tiên **xuất phát một mình**, các bè vào sau như **đuổi theo** nó.

## Tiền thân: ricercar
*Ricercar* (từ động từ Ý *ricercare* — "tìm tòi") lúc đầu **không phải** fugue: những ricercar sớm nhất cho đàn lute (cuối thế kỷ 15, một ấn phẩm năm 1507) không có mô phỏng. Về sau từ này chỉ một dạng fugue sớm, **nghiêm trang**, chủ đề dùng [[truong-do|trường độ]] dài. Trong *Lễ vật âm nhạc* (xem [[doi-am-kep]]), Bach vẫn gọi fugue 6 bè của mình là *Ricercar*.

## Cấu trúc
- **Trình bày**: bè 1 nêu **chủ đề** ở giọng chính. Bè 2 vào với **đáp đề** ở giọng [[bac-am-giai|át]], trong khi bè 1 chơi **đối đề**. Lần lượt đến khi mọi bè (thường 3–4) đều vào.
- **Đoạn nối** (episode): phát triển các [[motif]] từ chủ đề, thường dùng mô phỏng và [[chuyen-giong]].
- **Các lần chủ đề trở lại** ở những giọng khác nhau.
- **Kết**: chủ đề quay về giọng chính; có thể có **stretto** (các bè vào dồn dập, chồng lên nhau) và **bass ngân** (pedal point).

::img BWV846-Dux-Comes.svg | Chủ đề (dux) và đáp đề (comes) trong Fugue số 1 Đô trưởng BWV 846 của Bach

## Tác phẩm tiêu biểu
- [[Bach]] — **Clavier bình quân** (Das Wohltemperierte Klavier), 2 tập × 24 [[the-loai|prelude]] và fugue ở đủ 24 giọng (xem [[luat-binh-quan]]). Tập 1 hoàn thành năm **1722** ở Köthen, tập 2 khoảng **1742** ở Leipzig. Các giọng xếp theo thứ tự [[cung-nua-cung|nửa cung]] đi lên, trưởng trước thứ sau: Đô trưởng, Đô thứ, Đô♯ trưởng, Đô♯ thứ… "Bình quân" chỉ một **cách lên dây dùng được cho mọi giọng** — điều hiếm có thời đó.
- Bach — **Nghệ thuật Fugue** (Die Kunst der Fuge).
- [[Beethoven]] — **Grosse Fuge** Op. 133 cho tứ tấu đàn dây: một **fugue kép** khổng lồ, ban đầu (1825) là chương cuối của Tứ tấu Op. 130. Nhà xuất bản lo bán không được nên đề nghị thay chương khác; Beethoven đồng ý và fugue được in riêng năm 1827. Giới phê bình đương thời chê bai; ngày nay nó được xếp vào hàng thành tựu lớn nhất của ông.
- [[Shostakovich]] — **24 Prelude và Fugue** Op. 87 cho piano (1950–51), mỗi bài một giọng, lấy cảm hứng trực tiếp từ Clavier bình quân. Tatiana Nikolayeva, người được đề tặng, công diễn lần đầu ở Leningrad ngày 23/12/1952.

Nền tảng: [[doi-am]], [[doi-am-kep]], [[ket-cau]]. Gần cuối fugue thường có [[bass-ngan]] trên át âm.
`,
  },
  {
    slug: 'ostinato',
    title: 'Ostinato',
    category: 'form',
    aliases: ['bass lặp', 'ground bass', 'basso ostinato', 'passacaglia', 'chaconne', 'riff', 'mẫu lặp'],
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
- **Bass lặp** (basso ostinato, ground bass): một câu bè trầm lặp lại, phía trên là các [[bien-tau|biến tấu]].

## Passacaglia và chaconne
Hai [[the-loai|thể loại]] [[thoi-ky-baroque|Baroque]] dạng [[bien-tau]] trên một bass lặp hoặc một [[vong-hop-am]] lặp, thường ở nhịp 3/4:
- [[Purcell]] — "Dido's Lament" (bass đi xuống [[am-giai-cromatic|cromatic]]).
- [[Bach]] — Passacaglia Đô thứ cho organ BWV 582; Chaconne trong Partita số 2 Rê thứ cho violin.
- [[johann-pachelbel|Pachelbel]] — [[phan-tich-canon-pachelbel|Canon in D]]: [[doi-am|canon]] ba bè trên một bass lặp 8 nốt (xem [[doi-am-kep]]).

## Ba ví dụ phân tích
**"Dido's Lament" — Purcell, opera "Dido and Aeneas" (1689).** Aria cuối "When I am laid in earth" được dựng trên một **bass lặp chậm**, đi xuống theo các bước **[[cung-nua-cung|nửa cung]]**: đi xuống một quãng 4 rồi khép lại một [[quang|quãng 8]] thấp hơn chỗ bắt đầu. Các nguồn đếm số lần lặp khác nhau (khoảng 9 đến 12 lần). Giọng hát tự do phía trên, nhiều khi không trùng điểm bắt đầu với bass, nên nghe không bị "đóng khung".

**Passacaglia và [[fugue|Fugue]] Đô thứ BWV 582 — Bach.** Không rõ năm sáng tác chính xác; các nguồn chỉ về khoảng **1706–1713**. Nửa đầu chủ đề bass có lẽ lấy từ một tác phẩm ngắn của nhà soạn nhạc Pháp André Raison (có học giả phản đối). Phần fugue sau đó dùng **nửa đầu của bass lặp làm chủ đề thứ nhất**, và một dạng biến đổi của nửa sau làm chủ đề thứ hai.

**"Boléro" — Ravel (1928).** Trống snare chơi một mẫu nhịp **2 [[so-chi-nhip|ô nhịp]], 8 phách**, lặp lại **không đổi 169 lần** cho đến ô nhịp áp chót. Hai giai điệu luân phiên ở phía trên; thứ duy nhất thay đổi là **phối khí** và **âm lượng** — tăng dần từ rất nhỏ đến rất to (xem [[cuong-do]]). Công diễn lần đầu ở Nhà hát Opéra Paris ngày 22/11/1928.

## Trong nhạc hiện đại
Riff và vòng lặp (loop) là ostinato; nhạc [[toi-gian]] được xây hoàn toàn từ ostinato. Bè trầm boogie-woogie trong [[blues-12-nhip]] cũng là ostinato.

Liên quan: [[bass-ngan]] (một nốt lặp/ngân thay vì một mẫu), [[ket-cau]].
`,
  },
  {
    slug: 'doi-am-5-loai',
    title: 'Đối âm 5 loại',
    category: 'form',
    aliases: ['species counterpoint', 'đối âm theo loại', 'cantus firmus', 'Gradus ad Parnassum', 'đối âm loại 1'],
    summary: 'Phương pháp học đối âm kinh điển của Fux (1725): viết bè mới trên một giai điệu cho sẵn, qua 5 cấp độ nhịp điệu tăng dần.',
    wiki: 'Counterpoint',
    refs: [
      ['History of Information — Johann Joseph Fux describes Baroque counterpoint', 'https://www.historyofinformation.com/detail.php?id=2640'],
      ['Puget Sound, Music Theory for the 21st Century — First species', 'https://musictheory.pugetsound.edu/mt21c/FirstSpecies.html'],
      ['Beethoven-Haus Bonn — Auf der Suche nach der Kunst der Fuge (guide)', 'https://internet.beethoven.de/pdf-sonderausstellung/Auf-der-Suche-nach-der-Kunst-der-Fuge-Brief-Guide.pdf'],
      ['Popular Beethoven — Beethoven and Albrechtsberger', 'https://www.popularbeethoven.com/beethoven-and-albrechtsberger/'],
    ],
    body: `
Cho sẵn một **cantus firmus** (giai điệu [[truong-do|nốt tròn]], đi chủ yếu liền bậc). Người học viết một bè đối âm phía trên hoặc dưới, theo 5 "loại":
| Loại | Tỉ lệ nốt (đối âm : cantus) | Học được gì |
|---|---|---|
| 1 | 1 : 1 (nốt tròn) | Chỉ dùng [[thuan-nghich|quãng thuận]]; các kiểu chuyển động |
| 2 | 2 : 1 (nốt trắng) | [[not-ngoai-hop-am|Nốt lướt]] ở [[so-chi-nhip|phách nhẹ]] |
| 3 | 4 : 1 (nốt đen) | Nốt lướt, nốt thêu, các hình giai điệu |
| 4 | Nốt nối lệch phách | **Nốt trễ** (suspension): chuẩn bị – nghịch – giải quyết |
| 5 | [[ky-hieu-hoa-my|Hoa mỹ]] (kết hợp tự do) | Kết hợp tất cả |
::rhythm w / h h / q q q q / rh h~ / h h // | Bè đối âm trên một nốt tròn của cantus: loại 1 (1 : 1), loại 2 (2 : 1), loại 3 (4 : 1), loại 4 (nối lệch phách)

## Quy tắc cơ bản (loại 1)
- Bắt đầu và kết thúc bằng **quãng thuận hoàn toàn** (đồng âm, 5, 8).
- Kết bằng bước liền bậc vào chủ âm, với [[bac-am-giai|cảm âm]] đi lên.
- Ưu tiên **chuyển động ngược chiều**; tránh [[dan-giong|quãng 5 và quãng 8 song song]] và cả [[quang|quãng]] 5/8 "ẩn" (cùng chiều tới quãng hoàn toàn với nhảy ở bè trên).
- Dùng nhiều quãng 3 và 6; không lặp nốt quá nhiều; một [[giai-dieu|đỉnh giai điệu]] duy nhất.

## Cuốn sách Gradus ad Parnassum (1725)
- [[Fux]] xuất bản sách ở **Vienna năm 1725**, viết bằng **tiếng Latin**; không lâu sau được dịch sang tiếng Đức, Pháp, Anh.
- Sách có hai phần: phần lý thuyết về quãng như **tỉ lệ giữa các con số**, và phần thực hành đối âm viết dưới dạng **đối thoại thầy – trò**. Người thầy đại diện cho [[Palestrina]]; người học trò là chính Fux.
- [[Haydn]] tự học đối âm bằng cuốn sách này và sau đó giới thiệu nó cho học trò [[Beethoven]].
- Fux không phải không có sai sót: các học giả sau này, như Knud Jeppesen, đã sửa một số lỗi về phong cách. Các khoá nhập môn ngày nay cũng thường **giản lược** quy tắc của ông.

## Beethoven học đối âm
Năm 1792 Beethoven đến Vienna học với Haydn (đến 1794, khi Haydn sang London). Haydn sắp xếp để ông học tiếp với **Johann Georg Albrechtsberger**, thầy dạy đối âm nổi tiếng nhất Vienna lúc đó và là người theo truyền thống Fux. Lộ trình: đối âm (theo loại), rồi mô phỏng, fugue hợp xướng, đối âm kép và ba bè. Hơn **300 bài tập** có chữ sửa của Albrechtsberger vẫn còn lưu giữ.

Phương pháp này vẫn được dạy ở nhạc viện ngày nay. Bước tiếp theo: [[doi-am-kep]], [[fugue]]. Tổng quan: [[doi-am]].
`,
  },
  {
    slug: 'doi-am-kep',
    title: 'Đối âm kép và canon',
    category: 'form',
    aliases: ['đối âm kép', 'invertible counterpoint', 'double counterpoint', 'canon đảo', 'canon cua', 'crab canon', 'round', 'hát nối', 'canon nghịch hành'],
    summary: 'Đối âm kép: hai bè có thể đổi chỗ trên – dưới mà vẫn đúng. Canon: một bè được bè khác mô phỏng nghiêm ngặt, với nhiều biến thể đảo, nghịch hành, tăng trường độ.',
    wiki: 'Invertible_counterpoint',
    refs: [
      ['Wikipedia — Inventions and Sinfonias (Bach)', 'https://en.wikipedia.org/wiki/Inventions_and_Sinfonias'],
      ['Bärenreiter — Inventions and Sinfonias, preface (G. von Dadelsen)', 'https://www.barenreiter.co.uk/prefaces/9790006465811_Innenansicht.pdf'],
      ['Wikipedia — The Musical Offering', 'https://en.wikipedia.org/wiki/The_Musical_Offering'],
      ['Chamber Music Society of Lincoln Center — Bach: The Musical Offering', 'https://www.chambermusicsociety.org/about-the-music/compositions/bach-musical-offering'],
    ],
    body: `
## Đối âm kép (ở quãng 8)
Viết hai bè sao cho khi đưa bè dưới lên trên một quãng 8, kết quả vẫn hay. Khi [[quang-dao|đảo quãng]]: 3 ↔ 6 (vẫn thuận), nhưng **5 ↔ 4** — quãng 5 thuận trở thành quãng 4 nghịch (trên bè trầm), nên phải dùng quãng 5 thận trọng.

Đây là bí quyết của **[[lo-trinh-tac-pham|Inventions]] 2 bè** của [[johann-sebastian-bach|Bach]]: chủ đề xuất hiện lần lượt ở tay phải rồi tay trái, đối đề đổi chỗ theo. Rất quan trọng trong [[fugue]].

## Inventions và Sinfonias (1723)
- Gồm **30 bài**: **15 Invention** hai bè và **15 Sinfonia** ba bè.
- Ban đầu là bài dạy trong cuốn sổ đàn phím cho con trai Wilhelm Friedemann (*Klavierbüchlein*), dưới tên *Praeambula* và *Fantasiae*; về sau Bach sửa lại cho học trò.
- Trang tiêu đề năm 1723 (bắt đầu bằng *"Aufrichtige Anleitung"* — "hướng dẫn chân thành") nói mục đích: học chơi hai bè rồi ba bè, và **trên hết là đạt lối chơi [[thuat-ngu|cantabile]]** (như hát). Như vậy đây không chỉ là bài tập kỹ thuật.
- Theo nhà biên tập Georg von Dadelsen, *cantabile* nghĩa là mỗi bè được tạo câu **như một [[giai-dieu|giai điệu]] hát**: có [[cach-dien-tau|cách diễn tấu]], nối các nốt liên quan, nhấn nốt chính và **ngắt thở** đúng chỗ như ca sĩ. Bản chép sạch năm 1723 có rất ít dấu luyến, nên có lẽ Bach dặn thêm bằng lời khi dạy.

## Các loại canon
| Loại | Bè sau mô phỏng bè trước bằng cách |
|---|---|
| Canon đồng âm / quãng 8 | Lặp nguyên [[cao-do|cao độ]] (hát nối, "round") |
| Canon ở quãng 5, quãng 4… | Dịch lên một [[quang]] cố định |
| Canon đảo | Lật ngược hướng các quãng |
| Canon tăng/giảm [[truong-do|trường độ]] | Chơi chậm/nhanh gấp đôi |
| Canon cua (nghịch hành) | Đọc ngược từ cuối về đầu |

"Goldberg Variations" của Bach có một canon ở mỗi biến tấu thứ ba, lần lượt ở quãng đồng âm, 2, 3… đến 9 (xem [[bien-tau]]).

## Lễ vật âm nhạc (1747)
- Năm 1747 Bach đến Potsdam, được **vua Phổ Frederick Đại đế** đưa cho một chủ đề dài và phức tạp — **"chủ đề hoàng gia"** — để [[ngau-hung-piano|ngẫu hứng]] một fugue 3 bè.
- Về Leipzig, Bach viết cả một tuyển tập trên chủ đề đó, đề tặng nhà vua và in tháng 9/1747. Tuyển tập gồm hai fugue cho đàn phím (trong đó có *Ricercar* 6 bè), một trio [[hinh-thuc-sonata|sonata]] cho sáo, violin và bè trầm liên tục, cùng **mười canon** phần lớn ở dạng "câu đố".
- **Canon cua** (*Canon a 2 cancrizans*): một bè chơi giai điệu như viết, bè kia chơi **cùng giai điệu đọc ngược từ cuối về đầu** — hai bè khớp nhau hoàn hảo.

Liên quan: [[doi-am]], [[doi-am-5-loai]], [[motif]] (các kỹ thuật đảo, nghịch hành).
`,
  },
  {
    slug: 'the-loai',
    title: 'Thể loại khí nhạc',
    category: 'form',
    aliases: ['thể loại', 'genre', 'giao hưởng', 'symphony', 'concerto', 'tổ khúc', 'suite', 'tứ tấu', 'etude', 'nocturne', 'prelude', 'ballade', 'tiểu phẩm'],
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
| **Tứ tấu đàn dây** | 2 violin, viola, cello | Như sonata, 4 chương |
| **[[hinh-thuc-concerto|Concerto]]** | Độc tấu + dàn nhạc | Nhanh – Chậm – Nhanh; có **[[cadenza|cadenza]]** (độc tấu [[ngau-hung-piano|ngẫu hứng]], ngay trước [[cau-ket|kết]]) |
| **Tổ khúc [[thoi-ky-baroque|Baroque]]** | Đàn phím hoặc hoà tấu | Chuỗi vũ khúc cùng giọng: Allemande – Courante – Sarabande – Gigue |

Minuet (3/4, vừa phải) ở thời Cổ điển được [[ludwig-van-beethoven|Beethoven]] thay bằng **[[minuet-va-trio|Scherzo]]** (nhanh, đùa vui) — cả hai thường có dạng [[hinh-thuc-am-nhac|ba đoạn]] với đoạn giữa gọi là Trio.

## Nguồn gốc các thể loại lớn
- **Giao hưởng** có tổ tiên trực tiếp là **khúc mở màn opera Ý** (*sinfonia*). [[alessandro-scarlatti|Alessandro Scarlatti]] định hình khúc mở màn theo khuôn **nhanh – chậm – nhanh**. Trước thế kỷ 18, "symphony" và "overture" gần như dùng lẫn cho nhau. Khúc mở màn thường được tách ra chơi riêng ở hoà nhạc — từ đó giao hưởng thành một thể loại độc lập. Đến những năm 1770, khuôn **bốn chương** trở thành chuẩn.
- **[[Haydn]]** thường được gọi là "cha đẻ" của giao hưởng và tứ tấu đàn dây, với **104 giao hưởng** và **68 tứ tấu**. Ông **không phát minh** ra chúng — Franz Xaver Richter và Ignaz Holzbauer có thể đã viết tứ tấu trước — nhưng đã mở rộng rất nhiều khả năng của hai thể loại này.
- **Concerto Baroque** dùng **hình thức ritornello**: cả dàn nhạc chơi một chủ đề quay lại nhiều lần (ritornello), xen giữa là các đoạn của người độc tấu. Giuseppe Torelli dùng ý tưởng này trước, [[Vivaldi]] chuẩn hoá nó qua hàng trăm concerto, thường ở hai chương nhanh hai đầu. [[Bach]] và [[georg-philipp-telemann|Telemann]] viết theo mẫu của Vivaldi.
- **Nocturne** cho piano: từ *notturno* đã được dùng trước đó cho những bản trữ tình ngắn hay serenade, nhưng [[john-field|John Field]] là người biến nó thành một **thể loại piano**. Sau khi thử các tên Pastorale, Serenade, Romance, ông chọn "Nocturne" cho bản in đầu tiên năm **1812**. **21 nocturne** của [[Chopin]] là những ví dụ nổi tiếng nhất.

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
| **Leitmotif** | Motif gắn với một **nhân vật, đồ vật, ý tưởng** trong nhạc kịch | [[richard-wagner|Wagner]] |
Khác với [[bien-tau|biến tấu]] (chủ đề và các biến thể nối tiếp nhau thành từng đoạn) và với phát triển [[motif]] trong phần phát triển của sonata, ở đây chủ đề **xuyên suốt** cả tác phẩm lớn và mang **ý nghĩa** (thường là ý nghĩa kể chuyện).

## Lịch sử
- **[[franz-schubert|Schubert]] — Wanderer Fantasy** (1822, cho piano): chủ đề lấy từ ca khúc *Der Wanderer* của chính ông được dùng và biến đổi qua **bốn chương liền nhau**. Đây là tiền đề mà [[robert-schumann|Schumann]], Liszt và những người khác tiếp nối; Liszt còn soạn lại tác phẩm cho piano và dàn nhạc (1851).
- **Berlioz — Symphonie fantastique** (1830): một [[giai-dieu|giai điệu]] duy nhất — **idée fixe** (ý tưởng ám ảnh), tượng trưng cho người yêu — xuất hiện ở **cả năm chương**, mỗi lần một **tính cách khác** (theo nội dung chương trình). Giai điệu này vốn lấy từ cantata *Herminie* (1828) của ông.
- **Liszt — Sonata Si thứ** (hoàn thành 1853): bản sonata piano đầu tiên **gộp ba – bốn chương thành một chương liền**; toàn bộ chất liệu được phát triển từ **vài motif** ở các ô mở đầu, biến đổi tính cách mạnh mẽ (một motif dữ dội có thể trở thành một giai điệu trữ tình). Liszt cũng dùng kỹ thuật này trong các thơ giao hưởng và [[hinh-thuc-concerto|Concerto]] piano số 2.
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
]
