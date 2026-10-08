import type { Article } from '../wiki'

/** Luyện tai, xướng âm và sư phạm âm nhạc. Nguồn ghi trong `refs`. */
export const musicianship: Article[] = [
  {
    slug: 'luyen-tai',
    title: 'Luyện tai và cảm âm tương đối',
    category: 'musicianship',
    aliases: ['luyện tai', 'ear training', 'cảm âm tương đối', 'relative pitch', 'nghe quãng', 'aural skills', 'chơi theo tai'],
    summary: 'Cảm âm tương đối là khả năng nhận ra quãng và quan hệ giữa các nốt — kỹ năng phổ biến và hữu ích nhất cho người chơi nhạc, có thể luyện được.',
    wiki: 'Ear_training',
    refs: [
      ['University of Chicago — Perfect pitch, explained', 'https://news.uchicago.edu/explainer/what-is-perfect-pitch'],
      ['Wikipedia — Relative pitch', 'https://en.wikipedia.org/wiki/Relative_pitch'],
    ],
    body: `
## Cảm âm tương đối là gì?
Là khả năng nhận ra **[[quang|quãng]]** giữa các nốt và vai trò của chúng trong [[hoa-bieu|giọng]] — ví dụ nghe ra một giai điệu đang đi lên quãng 5, hay nốt đang nghe là [[bac-am-giai|bậc 7]] muốn về chủ âm. Kỹ năng này phổ biến hơn nhiều so với [[cao-do-tuyet-doi]].

## Luyện được đến đâu?
- Người lớn có cảm âm tương đối có thể học được "**cảm âm tuyệt đối giả**": gọi tên nốt theo cách bề ngoài giống cảm âm tuyệt đối; một số người sau luyện tập nhận đúng cả 12 nốt với độ chính xác từ 90% trở lên.
- Nghiên cứu của Đại học Chicago (Howard Nusbaum, 2015) cho thấy người không có cảm âm tuyệt đối vẫn **học được cách nhận nốt nhanh**.

## Luyện những gì
Các nội dung này chính là phần **thi nghe** trong các kỳ thi piano (xem [[thi-cap-do]]):
- Nhận ra **quãng** giai điệu và hoà âm (xem mẹo nhớ quãng bằng bài hát trong [[quang]]).
- Phân biệt [[hop-am-ba|hợp âm]] trưởng, thứ, giảm, tăng; [[hop-am-bay]].
- Nhận ra [[cau-ket|kết]] (trọn, nửa, lừa) và [[so-chi-nhip|nhịp 2, 3, 4]].
- Vỗ lại tiết tấu; hát lại giai điệu; nhận biết giai điệu đi lên hay đi xuống.

Hát bằng [[xuong-am|xướng âm]] là công cụ luyện tai truyền thống.
`,
  },
  {
    slug: 'cao-do-tuyet-doi',
    title: 'Cảm âm tuyệt đối',
    category: 'musicianship',
    aliases: ['absolute pitch', 'perfect pitch', 'tai tuyệt đối', 'cao độ tuyệt đối'],
    summary: 'Khả năng gọi tên một nốt mà không cần nốt tham chiếu. Hiếm hơn cảm âm tương đối, nhưng không hiếm như con số "1 trên 10.000" vẫn hay được nhắc.',
    wiki: 'Absolute_pitch',
    refs: [
      ['Miyazaki et al. (2018) — Absolute pitch research (PDF)', 'https://www.human.niigata-u.ac.jp/~psy/miyazaki/Papers/Miyazaki2018.pdf'],
      ['University of Chicago — Perfect pitch, explained', 'https://news.uchicago.edu/explainer/what-is-perfect-pitch'],
    ],
    body: `
## Phổ biến đến mức nào?
- Con số **"1 trên 10.000"** bắt nguồn từ ước tính của Bachem (1955) dựa trên nhạc công và sinh viên âm nhạc ở Chicago — nhưng **không được bằng chứng ủng hộ**.
- Một tổng quan năm 2019 cho thấy tỉ lệ **ít nhất khoảng 4%** trong sinh viên âm nhạc.
- Tỉ lệ cao hơn rõ rệt ở người có tuổi thơ tại **Đông Á**. Một giải thích là tiếp xúc với cao độ gắn với tên gọi có nghĩa từ rất sớm — phù hợp với các **ngôn ngữ có thanh điệu** (như tiếng Quan Thoại, Quảng Đông). Một nghiên cứu khác thấy người gốc Đông Á lớn lên ở Mỹ, Canada không khác biệt so với người da trắng cùng vùng, nên cho rằng **kinh nghiệm ngôn ngữ** quan trọng hơn di truyền.

## Có học được không?
Quan niệm cũ coi cảm âm tuyệt đối là "có hoặc không" và chỉ hình thành trong một "giai đoạn vàng" thời thơ ấu đã bị thách thức: nghiên cứu ở Đại học Chicago cho thấy kỹ năng này có thể phát triển cả khi trưởng thành. Tuy vậy, một phương pháp hiệu quả với trẻ 2–4 tuổi lại **không hiệu quả với trẻ từ 5 tuổi trở lên**.

## Không phải lúc nào cũng là lợi thế
Người có cảm âm tuyệt đối có thể gặp khó khi [[dich-giong]] hoặc chơi cùng dàn nhạc lên dây ở cao độ khác chuẩn (xem [[luat-binh-quan]]), và có thể **không phát triển cảm âm tương đối** nếu chỉ theo giáo trình thông thường. Với đa số người chơi nhạc, [[luyen-tai|cảm âm tương đối]] mới là kỹ năng cần luyện.

Lưu ý: con số 4% đến từ một tổng quan duy nhất; các con số khác nên xem là gần đúng.
`,
  },
  {
    slug: 'xuong-am',
    title: 'Xướng âm: Đô cố định và Đô di động',
    category: 'musicianship',
    aliases: ['xướng âm', 'solfège', 'solfege', 'solfeggio', 'Đô cố định', 'Đô di động', 'fixed do', 'movable do', 'Do Re Mi'],
    summary: 'Hai cách dùng tên Đô–Rê–Mi: Đô cố định (Đô luôn là nốt C) và Đô di động (Đô là âm chủ của giọng đang hát).',
    wiki: 'Solfège',
    refs: [
      ['Local 802 AFM — The solfège war', 'https://local802afm.org/allegro/articles/the-solfege-war'],
      ['Teaching Children Music — Movable do vs fixed do', 'https://www.teaching-children-music.com/2012/10/movable-do-vs-fixed-do/'],
      ['muted.io — Solfège', 'https://muted.io/solfege/'],
    ],
    body: `
Hệ thống tên Ut–Re–Mi bắt nguồn từ [[Guido d'Arezzo]] (thế kỷ 11) — và vốn là hệ thống **di động**.

## Hai hệ thống
| | Đô cố định | Đô di động |
|---|---|---|
| "Đô" là | Luôn là nốt **C** | **Âm chủ** của giọng trưởng đang hát |
| Hợp âm trưởng trên G | Sol – Si – Rê | Đô – Mi – Sol |
| Thế mạnh | Gắn tên với cao độ cụ thể; hợp với nhạc chuyển giọng phức tạp, nhạc thế kỷ 20–21 | Giữ nguyên quan hệ [[quang]] và [[bac-am-giai|bậc]] ở mọi giọng → luyện [[luyen-tai|cảm âm tương đối]] |

Với Đô di động, hợp âm trưởng hát từ nốt gốc **luôn là Đô – Mi – Sol** ở bất kỳ giọng nào. Một số hệ thống dùng thêm âm tiết cho nốt cromatic (ví dụ C♯ là "di", B♭ là "ta").

## Ở đâu dùng hệ nào?
Theo các nguồn (chủ yếu ý kiến giáo viên, chưa phải khảo sát chính thức): Đô cố định phổ biến ở Pháp, Nam Âu, Mỹ Latinh; Đô di động phổ biến ở các nước nói tiếng Anh và tiếng Đức. Việt Nam gọi tên nốt theo kiểu Đô cố định (Đô = C, xem [[not-nhac]]). Một lựa chọn thứ ba là hát bằng **số bậc** (1, 2, 3…), hay dùng ở các nhạc viện quốc tế.

## Nên chọn hệ nào?
Các nhà giáo dục không thống nhất: một số cho rằng Đô di động hiệu quả nhất với người mới học; số khác cho rằng ở giai đoạn đầu chọn hệ nào không quan trọng, càng lên cao mới có khác biệt. Phương pháp [[phuong-phap-giao-duc-am-nhac|Kodály]] dùng Đô di động kèm ký hiệu tay.
`,
  },
  {
    slug: 'phuong-phap-giao-duc-am-nhac',
    title: 'Các phương pháp giáo dục âm nhạc',
    category: 'musicianship',
    aliases: ['Dalcroze', 'Kodály method', 'phương pháp Kodály', 'Orff Schulwerk', 'Suzuki', 'phương pháp Suzuki', 'eurhythmics', 'sư phạm âm nhạc'],
    summary: 'Bốn phương pháp lớn: Dalcroze (vận động cơ thể theo nhịp), Kodály (hát, dân ca, Đô di động), Orff (kết hợp nhạc – vận động – lời nói – nhạc cụ gõ) và Suzuki (học nhạc như học tiếng mẹ đẻ).',
    wiki: 'Music_education',
    refs: [
      ['NAfME — Kodály, Orff, and Dalcroze: a who\'s who and what\'s what', 'https://nafme.org/blog/kodaly-orff-and-dalcroze-a-whos-who-and-whats-what/'],
      ['Boughen — Four approaches to music education in Australia (thesis record)', 'https://www.scpp.esrc.unimelb.edu.au/bib/P00000546.htm'],
    ],
    body: `
| Phương pháp | Người sáng lập | Trọng tâm |
|---|---|---|
| **Dalcroze** | Émile Jaques-Dalcroze | Vận động cơ thể theo nhịp điệu (eurhythmics), [[xuong-am]], ngẫu hứng |
| **Kodály** | [[Kodály|Zoltán Kodály]] | Hát là nền tảng; dân ca; [[xuong-am|Đô di động]] và ký hiệu tay; đọc nhạc |
| **Orff Schulwerk** | [[Orff|Carl Orff]] cùng Gunild Keetman | Kết hợp âm nhạc, vận động, lời nói, kịch; nhạc cụ gõ có thanh (xylophone, metallophone, glockenspiel); ngẫu hứng nhiều hơn Kodály |
| **Suzuki** | Shinichi Suzuki | Học nhạc như học **tiếng mẹ đẻ**: bắt đầu rất sớm, nghe nhiều, học thuộc trước, **phụ huynh** tham gia |

## Điểm chung
Orff và Kodály đều coi trọng **âm thanh trước ký hiệu**: biết hát và chơi trước, rồi mới học đọc nốt như bước phát triển tự nhiên. Một luận văn so sánh bốn phương pháp ở Úc kết luận rằng trong chương trình âm nhạc toàn diện, **cảm nhận nên đi trước hiểu biết lý thuyết**.

## Ứng dụng khi dạy piano
- Cho trẻ vỗ tay, đi bước theo nhịp trước khi đọc [[truong-do]] (tinh thần Dalcroze).
- Hát giai điệu trước khi chơi; dùng [[am-giai-ngu-cung|âm giai ngũ cung]] và bài dân ca quen thuộc (Kodály, Orff).
- Nghe bản thu bài sắp học và mời phụ huynh cùng tham gia buổi tập (Suzuki).

Bằng chứng so sánh trực tiếp hiệu quả giữa các phương pháp còn hạn chế.
`,
  },
  {
    slug: 'thi-cap-do',
    title: 'Hệ thống thi cấp độ piano',
    category: 'musicianship',
    aliases: ['ABRSM', 'thi ABRSM', 'grade piano', 'thi grade', 'Trinity', 'RCM', 'chứng chỉ piano', 'kỳ thi piano'],
    summary: 'Các kỳ thi như ABRSM chia trình độ thành Initial và Grade 1–8; mỗi bài thi gồm bài chuẩn bị, âm giai – hợp âm rải, thị tấu và thi nghe.',
    wiki: 'Associated_Board_of_the_Royal_Schools_of_Music',
    refs: [
      ['ABRSM — Piano syllabus 2025 & 2026 (PDF)', 'https://caswells-strings.co.uk/wp-content/uploads/2025/07/ABRSM-Piano-syllabus-2025-2026.pdf'],
      ['ABRSM exams guide (London piano teacher)', 'https://www.piano-composer-teacher-london.co.uk/?p=14642'],
    ],
    body: `
**ABRSM** (Associated Board of the Royal Schools of Music, Anh) là hệ thống thi piano theo cấp độ được dùng ở nhiều nước; các hệ thống khác gồm **Trinity College London** (Anh) và **RCM** (Canada). Phần dưới mô tả ABRSM.

## Các cấp
**Initial Grade** → **Grade 1 đến Grade 8**.

## Cấu trúc bài thi và thang điểm
| Phần | Điểm |
|---|---|
| 3 bài chuẩn bị (mỗi bài 30) | 90 |
| Âm giai và hợp âm rải | 21 |
| Thị tấu | 21 |
| Thi nghe | 18 |
| **Tổng** | **150** |

**Đạt**: 100 · **Khá (Merit)**: 120 · **Giỏi (Distinction)**: 130.

## Từng phần luyện gì
- **Âm giai và hợp âm rải**: [[luyen-am-giai]], [[luyen-hop-am-rai]]; Grade 1 bắt đầu với âm giai Đô trưởng và hợp âm rải đơn giản.
- **Thị tấu**: chơi một bản ngắn chưa từng thấy sau thời gian xem ngắn — xem [[thi-tau]].
- **Thi nghe**: vỗ lại tiết tấu, nhận ra giai điệu đi lên hay xuống… — xem [[luyen-tai]].
- **Bài chuẩn bị**: thường gồm các phong cách khác nhau — xem [[cac-thoi-ky]], [[dien-dat-cau-nhac]] và gợi ý tác phẩm theo cấp độ ở [[lo-trinh-tac-pham]].

## Lưu ý
Bảng điểm trên lấy từ hướng dẫn của giáo viên, khớp tổng 150 điểm ở nhiều nguồn; yêu cầu chi tiết (đặc biệt Grade 5–8 và các điều kiện kèm theo) cần đối chiếu **syllabus chính thức mới nhất của ABRSM**, vì nội dung thay đổi theo từng chu kỳ.
`,
  },
  {
    slug: 'lo-trinh-tac-pham',
    title: 'Lộ trình tác phẩm theo cấp độ',
    category: 'musicianship',
    aliases: ['tác phẩm theo cấp độ', 'repertoire', 'chọn bài', 'bài cho người mới', 'Burgmüller Op. 100', 'Anna Magdalena', 'Album for the Young', 'Inventions'],
    summary: 'Các tuyển tập kinh điển xếp theo độ khó: sách Anna Magdalena → Burgmüller Op. 100 → Album cho tuổi trẻ (Schumann, Tchaikovsky) → sonatina Clementi → Inventions của Bach.',
    refs: [
      ['University of Michigan Library — Finding elementary and intermediate piano music', 'https://guides.lib.umich.edu/easypiano/suggrep'],
      ['Kjos — Grade levels (PDF)', 'https://media.kjos.com/kjos/global.mt.lldns.net/kjos/pdf/GP462_GradeLevels.pdf'],
      ['Pianist Magazine — Classic piano repertoire for intermediate level pianists', 'https://www.pianistmagazine.com/blogs/classic-piano-repertoire-for-intermediate-level-pianists'],
      ['Piano Library — Schumann: Album für die Jugend Op. 68', 'https://www.pianolibrary.org/composers/schumann/album-fuer-die-jugend-68/'],
    ],
    body: `
Mỗi nhà xuất bản và hệ thống thi có thang độ khó riêng (thang Kjos không trùng với Grade của [[thi-cap-do|ABRSM]]), nên bảng dưới chỉ là hướng dẫn tương đối.

| Giai đoạn | Tuyển tập | Ghi chú từ nguồn |
|---|---|---|
| Sơ cấp – trung cấp sớm | **Sách nhỏ cho Anna Magdalena Bach** | Tuyển tập bài sơ cấp và trung cấp |
| Trung cấp sớm (khoảng Grade 2–5) | [[Burgmüller]] — **25 bài luyện tiến bộ Op. 100** | Khoảng Grade 2–5; các bài 9, 15, 20, 21 hợp Grade 4–5 |
| Trung cấp sớm → trung cấp cao | [[Schumann]] — **Album cho tuổi trẻ Op. 68** | Tập 1 (số 1–18) cho trẻ nhỏ, tập 2 (19–43) khó hơn; ấn bản ABRSM ghi Grade 4–7 |
| Trung cấp → trung cấp cao | [[Tchaikovsky]] — **Album cho thiếu nhi Op. 39** | Thường được xếp cao hơn Op. 68 một bậc |
| Trung cấp | [[Clementi]] — **Sonatina Op. 36** | Bước tiếp theo phổ biến sau Burgmüller (xem [[hinh-thuc-sonata]]) |
| Trung cấp | [[Heller]] — **Études Op. 45, 46** | Op. 46 số 1–5 là điểm bắt đầu hay dùng |
| Trung cấp (khoảng Grade 4–6 trở lên) | [[Bach]] — **Inventions 2 bè** | Bắt đầu với số 1 (Đô trưởng), rồi số 8 (Fa trưởng); số 6 khó hơn |
| Trung cấp cao | Bach — **Sinfonia (Inventions 3 bè)** | Số 10 và 14 được gợi ý |

## Vì sao những tuyển tập này?
- Mỗi tuyển tập gắn với một kỹ năng: Bach luyện [[doi-am]] và hai tay độc lập; Burgmüller và Schumann luyện [[dien-dat-cau-nhac|diễn đạt]] và tính chất (mỗi bài có tên gợi hình ảnh); sonatina luyện [[hinh-thuc-sonata]] và [[luyen-am-giai|âm giai]].
- Kết hợp với bài luyện ngón của [[Czerny]] (xem [[bai-tap-ngon]]).

Thông tin về các nhà soạn nhạc: [[thoi-ky-baroque]], [[thoi-ky-co-dien]], [[thoi-ky-lang-man]].
`,
  },
]
