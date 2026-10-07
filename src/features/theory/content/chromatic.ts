import type { Article } from '../wiki'

export const chromatic: Article[] = [
  {
    slug: 'hoa-am-cromatic',
    title: 'Hoà âm cromatic',
    category: 'chromatic',
    aliases: ['chromaticism', 'hoà âm nửa cung', 'hợp âm Tristan', 'Tristan chord', 'cromatic hoá'],
    summary: 'Hoà âm dùng các nốt ngoài âm giai (nốt cromatic) để tăng màu sắc và sức căng — đỉnh cao ở cuối thời Lãng mạn.',
    wiki: 'Chromaticism',
    body: `
Hoà âm **diatonic** chỉ dùng 7 nốt của [[hoa-bieu|giọng]]. Hoà âm **cromatic** đưa thêm các nốt thuộc [[am-giai-cromatic]] — nhưng vẫn phục vụ một trung tâm điệu tính.

## Các nguồn nốt cromatic (từ dễ đến khó)
| Nguồn | Ví dụ trong Đô trưởng | Bài |
|---|---|---|
| Nốt ngoài hợp âm cromatic | Nốt lướt C – C♯ – D | [[not-ngoai-hop-am]] |
| Hợp âm át phụ | D7 → G | [[hop-am-at-phu]] |
| Hợp âm mượn | Fm, A♭ | [[hop-am-muon]] |
| Hợp âm Napoli | D♭/F | [[hop-am-napoli]] |
| Hợp âm 6 tăng | A♭ – C – F♯ | [[hop-am-sau-tang]] |
| Hợp âm 7 giảm | C♯°7 → Dm | [[hop-am-bay-giam]] |
| Quan hệ trung âm cromatic | C → A♭ → E | [[trung-am-cromatic]] |

## Dẫn giọng cromatic
Ở cuối thế kỷ 19, nhiều hợp âm "khó gọi tên" xuất hiện do các bè trượt từng [[cung-nua-cung|nửa cung]] — điều quan trọng là **chuyển động bè**, không phải tên hợp âm (xem [[dan-giong]]).

::img TristanChord.svg | Hợp âm Tristan (F – B – D♯ – G♯) mở đầu vở opera "Tristan und Isolde" của Wagner (1859)

Hợp âm Tristan trì hoãn sự giải quyết suốt nhiều giờ nhạc kịch và thường được coi là bước đầu tiên dẫn tới [[phi-dieu-tinh|âm nhạc phi điệu tính]]. Bối cảnh lịch sử: [[cac-thoi-ky]].
`,
  },
  {
    slug: 'hop-am-napoli',
    title: 'Hợp âm Napoli',
    category: 'chromatic',
    aliases: ['Napoli', 'Neapolitan', 'Neapolitan sixth', 'N6', 'bII6', 'hợp âm 6 Napoli'],
    summary: 'Hợp âm trưởng dựng trên bậc 2 giáng (♭II), thường ở thể đảo 1 (N6); là hợp âm hạ át đầy kịch tính, hay gặp trong giọng thứ.',
    wiki: 'Neapolitan_chord',
    body: `
Trong Đô thứ: bậc 2 là D → hạ thành **D♭** → hợp âm **D♭ – F – A♭**. Thường viết ở [[the-dao-hop-am|thể đảo 1]] với **F ở bè trầm** nên gọi là "hợp âm 6 Napoli" (N6).

::keyboard F3 Ab3 Db4 | N6 trong Đô thứ: F – A♭ – D♭
::staff treble F4+Ab4+Db5 F4+G4+B4 Eb4+G4+C5 | N6 → V7 → i trong Đô thứ: D♭ xuống B, A♭ xuống G

## Chức năng và dẫn giọng
- Thuộc nhóm **hạ át** (thay cho iv hoặc ii°) trong [[chuc-nang-hoa-am]]: N6 → V (hoặc N6 → I6/4 → V).
- Nốt **D♭ đi xuống B** (cảm âm) — một bước [[quang|quãng 3 giảm]] đặc trưng.
- Bè trầm F đi lên G (bậc 5).

::img Neapolitaner.svg | Hợp âm Napoli và cách giải quyết

## Ví dụ nổi tiếng
Ô nhịp 3 của chương 1 **Sonata "Ánh trăng"** (Beethoven, Đô♯ thứ): hợp âm Rê trưởng ở thể đảo 1 — chính là N6.

Cũng có thể dùng trong giọng trưởng như một [[hop-am-muon]]. Tổng quan: [[hoa-am-cromatic]].
`,
  },
  {
    slug: 'hop-am-sau-tang',
    title: 'Hợp âm 6 tăng',
    category: 'chromatic',
    aliases: ['augmented sixth', 'quãng 6 tăng', 'It+6', 'Fr+6', 'Ger+6', 'hợp âm 6 Ý', 'hợp âm 6 Pháp', 'hợp âm 6 Đức', 'Italian sixth', 'French sixth', 'German sixth'],
    summary: 'Nhóm hợp âm hạ át chứa quãng 6 tăng (♭6 ở bè trầm và ♯4 ở trên) mở rộng ra hai phía về quãng 8 trên bậc 5.',
    wiki: 'Augmented_sixth_chord',
    body: `
Trong Đô trưởng/thứ: **A♭** (bậc 6 giáng) ở bè trầm và **F♯** (bậc 4 thăng) ở trên tạo [[quang|quãng 6 tăng]]. Hai nốt này cùng đi **ra ngoài** nửa cung về hai nốt **G** — quãng 8 trên [[bac-am-giai|át âm]].

| Loại | Thành phần (gốc C) | Nốt thêm | Ghi chú |
|---|---|---|---|
| **6 Ý** (It+6) | A♭ – C – F♯ | — | Gọn nhất, 3 nốt |
| **6 Pháp** (Fr+6) | A♭ – C – D – F♯ | Bậc 2 | Chứa hai tritone, màu "toàn cung" |
| **6 Đức** (Ger+6) | A♭ – C – E♭ – F♯ | Bậc 3 giáng | Nghe như A♭7 |

::keyboard Ab3 C4 Eb4 F#4 | Hợp âm 6 Đức trong Đô: A♭ – C – E♭ – F♯
::staff treble Ab4+C5+F#5 G4+B4+G5 | 6 Ý → V: A♭ và F♯ mở ra về G

## Giải quyết
- It+6 và Fr+6 → **V**.
- Ger+6 → V trực tiếp sinh ra [[dan-giong|quãng 5 song song]] (A♭–E♭ → G–D), nên thường đi qua **I6/4** trước: Ger+6 → I6/4 → V.

## Trùng âm với hợp âm 7 át
Ger+6 (A♭ – C – E♭ – F♯) nghe giống hệt A♭7 (A♭ – C – E♭ – G♭) — một cửa ngõ để [[chuyen-giong]] qua [[trung-am]]. Cũng là cơ sở của [[thay-the-tritone]] trong jazz.

Tổng quan: [[hoa-am-cromatic]].
`,
  },
  {
    slug: 'hop-am-bay-giam',
    title: 'Hợp âm 7 giảm',
    category: 'chromatic',
    aliases: ['hợp âm bảy giảm', 'diminished seventh', 'dim7', '°7', 'vii°7', 'chuyển giọng trùng âm', 'enharmonic modulation'],
    summary: 'Hợp âm gồm ba quãng 3 thứ chồng lên nhau, chia quãng 8 thành 4 phần bằng nhau — "con dao đa năng" để chuyển giọng.',
    wiki: 'Diminished_seventh_chord',
    body: `
B – D – F – A♭: mỗi nốt cách nhau [[quang|quãng 3 thứ]] (3 [[cung-nua-cung|nửa cung]]). Trong giọng thứ hoà âm, đây là **vii°7** — dựng trên cảm âm (xem [[am-giai-thu]], [[hop-am-bay]]).

::keyboard B3 D4 F4 Ab4 | B°7: bốn nốt cách đều nhau

## Đối xứng
Vì chia đều quãng 8, chỉ có **3** hợp âm 7 giảm khác nhau về âm thanh. Đảo thế nào cũng vẫn là hợp âm 7 giảm:
| Viết là | Cảm âm của | Giải quyết về |
|---|---|---|
| B – D – F – A♭ | C | C / Cm |
| D – F – A♭ – C♭ | E♭ | E♭ / E♭m |
| F – A♭ – C♭ – E𝄫 | G♭ | G♭ / G♭m |
| G♯ – B – D – F | A | A / Am |

## Chuyển giọng trùng âm
Viết lại tên hợp âm (cùng phím đàn) để mỗi nốt trở thành cảm âm của một giọng khác → từ một hợp âm có thể đi tới **4 giọng trưởng và 4 giọng thứ** (xem [[trung-am]], [[chuyen-giong]]).

## Các cách dùng khác
- **Át phụ**: C♯°7 → Dm (thay cho A7, xem [[hop-am-at-phu]]).
- **7 giảm nốt chung**: C – D♯°7 (D♯ – F♯ – A – C) – C: nốt C giữ nguyên, các bè khác thêu nửa cung — màu trang trí rất hay trong ragtime và nhạc Lãng mạn.
- Âm giai đi kèm: [[am-giai-bat-cung]].
`,
  },
  {
    slug: 'bass-ngan',
    title: 'Bass ngân',
    category: 'chromatic',
    aliases: ['pedal point', 'âm ngân', 'nốt ngân', 'pedal chủ âm', 'pedal át âm', 'drone', 'âm nền'],
    summary: 'Một nốt (thường ở bè trầm) được giữ hoặc lặp lại trong khi hoà âm phía trên thay đổi, kể cả sang hợp âm không chứa nốt đó.',
    wiki: 'Pedal_point',
    body: `
Khác với [[ban-dap|pedal của đàn piano]], "pedal" ở đây là thuật ngữ hoà âm: một nốt bất động làm nền.

## Các loại
- **Bass ngân chủ âm**: tạo cảm giác "về nhà", hay gặp ở đoạn kết. Prelude số 1 Đô trưởng của Bach kết thúc trên bass ngân C.
- **Bass ngân át âm**: tạo sức căng chờ đợi — rất hay gặp ngay trước phần tái hiện của [[hinh-thuc-sonata]] và gần cuối [[fugue]].
- **Bass ngân đảo**: nốt ngân nằm ở bè **cao**.
- **Drone** (âm nền): quãng 5 chủ – át ngân suốt bài, như kèn túi hay nhạc dân gian.

::staff bass C3+E3+G3 C3+F3+A3 C3+D3+G3+B3 C3+E3+G3 | Bass ngân C dưới I – IV – V – I

## Tác dụng
Khi hoà âm trên không còn chứa nốt ngân, ta có một [[thuan-nghich|nghịch âm]] được "cho phép" — sức căng tăng dần cho đến khi hoà âm quay về khớp với bass. Trên piano, bass ngân thường được giữ bằng [[ban-dap|pedal sostenuto]] hoặc lặp lại theo [[ostinato]].
`,
  },
  {
    slug: 'mo-tien-hoa-am',
    title: 'Mô tiến hoà âm',
    category: 'chromatic',
    aliases: ['mô tiến', 'harmonic sequence', 'sequence', 'vòng quãng 5 đi xuống', 'chuỗi quãng 5', 'progression sequence'],
    summary: 'Một mẫu hợp âm và dẫn giọng được lặp lại nhiều lần ở các cao độ khác nhau, tạo chuyển động có hướng rõ ràng.',
    wiki: 'Sequence_(music)',
    body: `
Mô tiến là phiên bản hoà âm của kỹ thuật mô tiến [[motif]]: một khuôn hợp âm dịch chuyển đều đặn lên hoặc xuống.

## Các mô tiến phổ biến
| Mô tiến | Mẫu bè trầm | Ví dụ trong Đô trưởng |
|---|---|---|
| **Quãng 5 đi xuống** | Xuống 5, lên 4 | C – F – B° – Em – Am – Dm – G – C |
| **Đi xuống 5–6** (kiểu Pachelbel) | Gốc xuống 4, lên 2; bè trầm đi xuống liền bậc | C – G/B – Am – Em/G – F – C/E… |
| **Đi lên 5–6** | Gốc xuống 3, lên 4; bè trầm đi lên liền bậc | C – Am/C – Dm – B°/D – Em… |

::staff treble C4+E4+G4 C4+F4+A4 B3+D4+F4 B3+E4+G4 A3+C4+E4 A3+D4+F4 G3+B3+D4 G3+C4+E4 | Mô tiến quãng 5 đi xuống: I – IV – vii° – iii – vi – ii – V – I

## Nhận biết
Một mẫu 2 hợp âm lặp lại ít nhất 2–3 lần ở cao độ khác nhau, giai điệu cũng lặp lại theo. Mô tiến quãng 5 chính là đi ngược chiều kim đồng hồ trên [[vong-quang-nam]].

## Ứng dụng
Rất phổ biến trong nhạc Baroque (Vivaldi, Bach, Handel), dùng để [[chuyen-giong]] hoặc kéo dài đoạn nối. Có thể thay mỗi hợp âm bằng [[hop-am-bay|hợp âm 7]] hoặc [[hop-am-at-phu|át phụ]] để tăng lực đẩy (E7 – A7 – D7 – G7 – C). Vòng [[vong-hop-am|"Autumn Leaves"]] là mô tiến quãng 5 kinh điển của jazz.
`,
  },
  {
    slug: 'trung-am-cromatic',
    title: 'Trung âm cromatic',
    category: 'chromatic',
    aliases: ['chromatic mediant', 'quan hệ quãng 3', 'hợp âm cách quãng 3', 'third relation'],
    summary: 'Quan hệ giữa hai hợp âm cùng tính chất (trưởng–trưởng) có gốc cách nhau quãng 3, chỉ chung một nốt — tạo màu sắc bất ngờ, rực rỡ.',
    wiki: 'Chromatic_mediant',
    body: `
Từ C trưởng, các trung âm cromatic là:
| Hợp âm | Quan hệ | Nốt chung với C |
|---|---|---|
| E | Quãng 3 trưởng lên | E |
| A♭ | Quãng 3 trưởng xuống | C |
| A | Quãng 3 thứ xuống | E |
| E♭ | Quãng 3 thứ lên | G |

So sánh với trung âm **diatonic** (Em, Am — cùng giọng, chung **hai** nốt): trung âm cromatic chỉ chung **một** nốt và mang theo [[dau-hoa]] lạ.

::keyboard C4 E4 G4 | C trưởng
::keyboard C4 Eb4 Ab4 | A♭ trưởng (đảo) — chỉ chung nốt C

## Màu sắc
Không có lực kéo chức năng như V → I, mà là một sự **đổi màu** đột ngột, thần bí hoặc hùng tráng. Schubert, Liszt, Wagner dùng nhiều; ngày nay rất phổ biến trong **nhạc phim** (John Williams, Hans Zimmer).

Phân tích quan hệ này một cách hệ thống: [[neo-riemann]]. Liên quan: [[hop-am-muon]] (A♭ cũng là ♭VI mượn), [[hoa-am-cromatic]].
`,
  },
  {
    slug: 'neo-riemann',
    title: 'Lý thuyết Neo-Riemann',
    category: 'chromatic',
    aliases: ['Neo-Riemannian', 'PLR', 'Tonnetz', 'biến đổi P L R', 'hexatonic', 'chu trình lục cung'],
    summary: 'Mô tả việc chuyển giữa các hợp âm ba bằng ba phép biến đổi P, L, R, mỗi phép chỉ dịch một nốt — công cụ phân tích nhạc cuối Lãng mạn và nhạc phim.',
    wiki: 'Neo-Riemannian_theory',
    body: `
Thay vì hỏi "hợp âm này có chức năng gì?" ([[chuc-nang-hoa-am]]), lý thuyết Neo-Riemann hỏi "**nốt nào di chuyển**, và bao xa?".

| Phép | Tên | Ví dụ | Nốt di chuyển |
|---|---|---|---|
| **P** | Parallel (cùng tên) | C ↔ Cm | E ↔ E♭ (nửa cung) |
| **R** | Relative (song song) | C ↔ Am | G ↔ A (một cung) |
| **L** | Leading-tone exchange | C ↔ Em | C ↔ B (nửa cung) |

Mỗi phép giữ nguyên **hai nốt chung** và dịch nốt thứ ba theo bước nhỏ nhất — tức là [[dan-giong]] tiết kiệm tối đa. P và R tương ứng với [[giong-song-song|giọng cùng tên và giọng song song]].

## Ghép phép biến đổi
- **PL** lặp lại: C → Cm → A♭ → A♭m → E → Em → C — **chu trình lục cung**, đi qua các [[trung-am-cromatic]].
- **LR** lặp lại: đi dọc [[vong-quang-nam]].

::img Neo-Riemannian Tonnetz.svg | Tonnetz: mỗi tam giác là một hợp âm ba (đỏ = trưởng, xanh = thứ); hai tam giác chung cạnh cách nhau một phép P, L hoặc R

Lý thuyết được phát triển từ ý tưởng của Hugo Riemann (thế kỷ 19) bởi David Lewin, Richard Cohn và các học giả khác từ những năm 1980.
`,
  },
  {
    slug: 'bass-so',
    title: 'Bass số',
    category: 'chromatic',
    aliases: ['figured bass', 'basso continuo', 'continuo', 'bè trầm có số', 'ký hiệu số'],
    summary: 'Hệ thống ký hiệu thời Baroque: bè trầm được ghi kèm con số chỉ các quãng cần chơi phía trên, người chơi đàn phím tự "hiện thực hoá" hợp âm.',
    wiki: 'Figured_bass',
    body: `
Các con số chỉ [[quang]] tính **từ nốt bè trầm** lên (không phải từ nốt gốc). Số bị lược bỏ khi đã ngầm hiểu.
| Ký hiệu | Đầy đủ | Nghĩa |
|---|---|---|
| (không số) | 5/3 | Hợp âm ba nguyên vị |
| 6 | 6/3 | Hợp âm ba đảo 1 |
| 6/4 | 6/4 | Hợp âm ba đảo 2 |
| 7 | 7/5/3 | Hợp âm 7 nguyên vị |
| 6/5 | 6/5/3 | Hợp âm 7 đảo 1 |
| 4/3 | 6/4/3 | Hợp âm 7 đảo 2 |
| 4/2 hoặc 2 | 6/4/2 | Hợp âm 7 đảo 3 |

::img Figured Bass Inversions.svg | Bass số cho các thể đảo hợp âm

## Dấu hoá trong bass số
- Một [[dau-hoa]] đứng một mình → áp cho nốt **quãng 3** phía trên bè trầm.
- Dấu hoá cạnh con số → áp cho quãng đó. Số có **gạch chéo** (6̸) nghĩa là nâng nửa cung.

## Basso continuo
Trong nhạc Baroque (Bach, Handel, Corelli), người chơi harpsichord/organ đọc bè trầm có số và ứng tác phần hoà âm — giống nghệ sĩ jazz đọc [[ky-hieu-hop-am]] ngày nay. Các số "6", "6/4" trong [[the-dao-hop-am]] chính là di sản của hệ thống này.
`,
  },
  {
    slug: 'phan-tich-schenker',
    title: 'Phân tích Schenker',
    category: 'chromatic',
    aliases: ['Schenker', 'Schenkerian analysis', 'Ursatz', 'Urlinie', 'cấu trúc nền', 'kéo dài', 'prolongation'],
    summary: 'Phương pháp phân tích cho thấy cả tác phẩm có tính điệu là sự "kéo dài" của một cấu trúc nền đơn giản: giai điệu đi xuống về chủ âm trên bè trầm I – V – I.',
    wiki: 'Schenkerian_analysis',
    body: `
Heinrich Schenker (1868–1935) cho rằng âm nhạc được tổ chức theo **nhiều tầng**, giống câu văn có cấu trúc ngữ pháp sâu bên dưới các từ ngữ bề mặt.

## Ba tầng
- **Tiền cảnh**: các nốt thực sự trong bản nhạc.
- **Trung cảnh**: các khung hoà âm – giai điệu đã lược bỏ trang trí ([[not-ngoai-hop-am]], [[ky-hieu-hoa-my|hoa mỹ]]).
- **Hậu cảnh** – **cấu trúc nền (Ursatz)**: gồm hai lớp:
  - **Urlinie** (đường nét gốc): giai điệu đi xuống liền bậc về chủ âm — 3̂–2̂–1̂, 5̂–4̂–3̂–2̂–1̂ hoặc 8̂…1̂.
  - **Bassbrechung** (bè trầm gốc): I – V – I.

::img Ursatz = Urlinie + Bassbrechung.png | Cấu trúc nền: đường nét gốc 3–2–1 trên bè trầm I – V – I

## Kéo dài (prolongation)
Một hợp âm hay một nốt được "kéo dài" bằng các hợp âm, nốt phụ — ví dụ cả đoạn I – IV – I6/4 – I có thể được xem là một hợp âm I kéo dài.

## Ý nghĩa với người chơi đàn
Biết đâu là "xương sống" giúp xác định **nốt quan trọng** của [[cau-nhac]], định hướng cao trào và tạo đường dài khi biểu diễn. Liên quan: [[dan-giong]], [[chuc-nang-hoa-am]], [[cau-ket]].
`,
  },
]
