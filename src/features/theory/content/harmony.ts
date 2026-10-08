import type { Article } from '../wiki'

export const harmony: Article[] = [
  {
    slug: 'hop-am-ba',
    title: 'Hợp âm ba',
    category: 'harmony',
    aliases: ['hợp âm', 'chord', 'triad', 'hợp âm trưởng', 'hợp âm thứ', 'hợp âm giảm', 'hợp âm tăng'],
    summary: 'Ba nốt xếp chồng theo quãng 3: nốt gốc, nốt bậc 3 và nốt bậc 5.',
    wiki: 'Triad_(music)',
    body: `
Hợp âm ba được xây bằng cách chồng hai [[quang|quãng 3]] lên nốt gốc. Tính chất của hai quãng 3 quyết định loại hợp âm:
| Loại | Cấu tạo (nửa cung) | Ví dụ | Ký hiệu |
|---|---|---|---|
| Trưởng | 3 trưởng + 3 thứ (4 + 3) | C – E – G | C |
| Thứ | 3 thứ + 3 trưởng (3 + 4) | C – E♭ – G | Cm |
| Giảm | 3 thứ + 3 thứ (3 + 3) | B – D – F | B° hoặc Bdim |
| Tăng | 3 trưởng + 3 trưởng (4 + 4) | C – E – G♯ | C+ hoặc Caug |

::keyboard C4 E4 G4 | Hợp âm Đô trưởng (C)
::keyboard A4 C5 E5 | Hợp âm La thứ (Am)
::staff treble C4+E4+G4 C4+Eb4+G4 B3+D4+F4 C4+E4+G#4 | Trưởng, thứ, giảm, tăng

## Hợp âm trong giọng
Dựng hợp âm ba trên từng bậc của [[am-giai-truong]] (chỉ dùng nốt trong âm giai):
| I | ii | iii | IV | V | vi | vii° |
|---|---|---|---|---|---|---|
| C | Dm | Em | F | G | Am | B° |

Quy luật cho mọi giọng trưởng: **I, IV, V trưởng; ii, iii, vi thứ; vii° giảm**. Trong [[am-giai-thu|giọng thứ hoà âm]]: i, ii°, III⁺, iv, V, VI, vii°.

Liên quan: [[the-dao-hop-am]], [[hop-am-bay]], [[ky-hieu-hop-am]], [[chuc-nang-hoa-am]]. Chồng quãng khác thay cho quãng 3: [[hoa-am-quang-bon]] (quãng 4), [[am-cum]] (quãng 2).
`,
  },
  {
    slug: 'the-dao-hop-am',
    title: 'Thể đảo hợp âm',
    category: 'harmony',
    aliases: ['thể đảo', 'đảo hợp âm', 'inversion', 'thế đảo 1', 'thể đảo 2', 'thể nguyên vị', 'hợp âm 6/4', 'slash chord'],
    summary: 'Cách sắp xếp hợp âm theo nốt nằm ở bè trầm: nguyên vị (nốt gốc), đảo 1 (nốt bậc 3), đảo 2 (nốt bậc 5).',
    wiki: 'Inversion_(music)',
    body: `
Thể đảo được xác định bởi **nốt thấp nhất** (bè trầm), không phụ thuộc thứ tự các nốt phía trên.
| Thể | Nốt ở bè trầm | Ví dụ (C) | Ký hiệu số | Ký hiệu hợp âm |
|---|---|---|---|---|
| Nguyên vị | Nốt gốc | C – E – G | 5/3 | C |
| Đảo 1 | Nốt bậc 3 | E – G – C | 6 (6/3) | C/E |
| Đảo 2 | Nốt bậc 5 | G – C – E | 6/4 | C/G |

::staff treble C4+E4+G4 E4+G4+C5 G4+C5+E5 | Hợp âm C: nguyên vị, đảo 1, đảo 2

## Vì sao cần thể đảo?
- **Bè trầm mượt hơn**: thay vì nhảy xa, bè trầm đi liền bậc (C – C/B – Am – Am/G…).
- **Tay đỡ di chuyển**: trên piano, chuyển C → F → G bằng thể đảo (C–E–G → C–F–A → B–D–G) chỉ cần dịch ngón tối thiểu — xem [[dan-giong]].
- **Màu sắc**: đảo 2 nghe chưa ổn định, thường dùng ở **I6/4 kết** trước V (xem [[cau-ket]]).

Hợp âm 7 có thêm **đảo 3** (nốt bậc 7 ở bè trầm). Các số "6", "6/4" đến từ cách ghi [[quang]] so với bè trầm — xem [[bass-so]].
`,
  },
  {
    slug: 'hop-am-bay',
    title: 'Hợp âm bảy',
    category: 'harmony',
    aliases: ['hợp âm 7', 'seventh chord', 'hợp âm 7 át', 'dominant seventh', 'maj7', 'm7', 'm7b5', 'nửa giảm', 'G7'],
    summary: 'Hợp âm ba thêm một quãng 3 nữa phía trên (nốt bậc 7); có 5 loại chính, quan trọng nhất là hợp âm 7 át (V7).',
    wiki: 'Seventh_chord',
    body: `
| Loại | Cấu tạo | Ví dụ | Ký hiệu |
|---|---|---|---|
| 7 trưởng | Trưởng + 7 trưởng | C – E – G – B | Cmaj7, CΔ7 |
| 7 át | Trưởng + 7 thứ | G – B – D – F | G7 |
| 7 thứ | Thứ + 7 thứ | D – F – A – C | Dm7 |
| 7 nửa giảm | Giảm + 7 thứ | B – D – F – A | Bm7♭5, Bø7 |
| 7 giảm | Giảm + 7 giảm | B – D – F – A♭ | B°7, Bdim7 |

::keyboard G4 B4 D5 F5 | G7 — hợp âm 7 át trong giọng Đô trưởng
::staff treble C4+E4+G4+B4 G4+B4+D5+F5 D4+F4+A4+C5 B3+D4+F4+A4 | Cmaj7, G7, Dm7, Bø7

## Hợp âm 7 át (V7)
Chứa [[thuan-nghich|tritone]] giữa bậc 3 và bậc 7 (B–F trong G7). Tritone này giải quyết vào trong: B → C, F → E — tạo kết V7 → I mạnh nhất trong [[chuc-nang-hoa-am|hoà âm chức năng]].

## Hợp âm 7 trong giọng trưởng
| Imaj7 | ii7 | iii7 | IVmaj7 | V7 | vi7 | viiø7 |
|---|---|---|---|---|---|---|
| Cmaj7 | Dm7 | Em7 | Fmaj7 | G7 | Am7 | Bø7 |

Hợp âm 7 là "ngôn ngữ mặc định" của jazz (xem [[vong-hop-am|ii – V – I]]). Thêm nốt cao hơn: [[hop-am-mo-rong]]. Hợp âm 7 giảm có cấu trúc đối xứng đặc biệt: [[hop-am-bay-giam]]. Thay V7 bằng ♭II7: [[thay-the-tritone]].
`,
  },
  {
    slug: 'ky-hieu-hop-am',
    title: 'Ký hiệu hợp âm',
    category: 'harmony',
    aliases: ['hợp âm ký hiệu', 'chord symbol', 'lead sheet', 'đọc hợp âm', 'tên hợp âm', 'sus'],
    summary: 'Cách viết tắt hợp âm bằng chữ cái và hậu tố (Cm, G7, Fmaj7, Dsus4…), dùng trong nhạc pop, jazz và đệm hát.',
    wiki: 'Chord_chart',
    body: `
Chữ cái in hoa = **nốt gốc**. Hậu tố cho biết loại hợp âm:
| Ký hiệu | Đọc | Thành phần (gốc C) |
|---|---|---|
| C | Đô trưởng | C E G |
| Cm, C- | Đô thứ | C E♭ G |
| C°, Cdim | Đô giảm | C E♭ G♭ |
| C+, Caug | Đô tăng | C E G♯ |
| C7 | Đô 7 (át) | C E G B♭ |
| Cmaj7, CΔ | Đô 7 trưởng | C E G B |
| Cm7 | Đô thứ 7 | C E♭ G B♭ |
| Cm7♭5, Cø | Đô nửa giảm | C E♭ G♭ B♭ |
| C°7 | Đô 7 giảm | C E♭ G♭ B𝄫 (=A) |
| C6 | Đô 6 | C E G A |
| Csus4 | Đô sus 4 | C F G |
| Csus2 | Đô sus 2 | C D G |
| Cadd9 | Đô thêm 9 | C E G D |
| C9 | Đô 9 | C E G B♭ D |
| C/E | Đô, bass Mi | E ở bè trầm + C E G |

## Hợp âm treo (sus)
Thay nốt bậc 3 bằng bậc 4 (sus4) hoặc bậc 2 (sus2) → không trưởng không thứ, nghe lơ lửng; truyền thống thường **giải quyết** sus4 → 3 (Csus4 → C).

## Ký hiệu gạch chéo
**C/E** nghĩa là hợp âm C với **E ở bè trầm** — chính là [[the-dao-hop-am|thể đảo 1]]. Nốt sau gạch có thể không thuộc hợp âm (C/B♭).

Nền tảng: [[hop-am-ba]], [[hop-am-bay]], [[hop-am-mo-rong]]. C6 khác Am7 thế nào, add9 khác 9 thế nào: [[hop-am-6-va-add]].
`,
  },
  {
    slug: 'hop-am-mo-rong',
    title: 'Hợp âm mở rộng',
    category: 'harmony',
    aliases: ['hợp âm 9', 'hợp âm 11', 'hợp âm 13', 'extended chord', 'tension', 'nốt căng', 'hợp âm jazz'],
    summary: 'Hợp âm 7 tiếp tục chồng quãng 3 lên trên để có nốt 9, 11, 13 — màu sắc phong phú của jazz và R&B.',
    wiki: 'Extended_chord',
    body: `
Tiếp tục chồng [[quang|quãng 3]] lên [[hop-am-bay]]:
| Nốt mở rộng | Bằng nốt | Ví dụ trên C |
|---|---|---|
| 9 | Bậc 2 (cao hơn 1 quãng 8) | D |
| 11 | Bậc 4 | F |
| 13 | Bậc 6 | A |

Cmaj9 = C – E – G – B – **D**. G13 = G – B – D – F – (A) – (C) – **E**.

## Lược bỏ nốt
Hợp âm 13 đầy đủ có 7 nốt — quá nhiều cho hai tay. Thứ tự ưu tiên giữ lại: **3 và 7** (quyết định tính chất) → nốt mở rộng → nốt gốc (bè bass có thể chơi) → **5** (bỏ đầu tiên).

::keyboard E4 G4 B4 D5 | Cmaj9 không nốt gốc: E – G – B – D (tay phải), thường gặp trong jazz piano

## Nốt căng biến hoá
Trên hợp âm 7 át còn có ♭9, ♯9, ♯11, ♭13 — tạo sức căng mạnh trước khi giải quyết (xem âm giai biến đổi trong [[he-thong-hop-am-am-giai]]). Nốt 11 tự nhiên thường **tránh** trên hợp âm trưởng vì [[thuan-nghich|nghịch]] với nốt bậc 3.

Xem thêm: [[ky-hieu-hop-am]], [[vong-hop-am]], [[xep-hop-am]] (cách xếp nốt), [[he-thong-hop-am-am-giai]] (chọn nốt căng).
`,
  },
  {
    slug: 'chuc-nang-hoa-am',
    title: 'Chức năng hoà âm',
    category: 'harmony',
    aliases: ['hoà âm chức năng', 'chức năng', 'harmonic function', 'số La Mã', 'roman numeral', 'T S D'],
    summary: 'Mỗi hợp âm trong giọng đảm nhận một vai trò: chủ (ổn định), hạ át (rời xa), át (căng, muốn về chủ).',
    wiki: 'Function_(music)',
    body: `
Hợp âm được ghi bằng **số La Mã** theo [[bac-am-giai]]: chữ hoa = trưởng (I, IV, V), chữ thường = thứ (ii, iii, vi), ° = giảm.
| Nhóm chức năng | Hợp âm (giọng trưởng) | Vai trò |
|---|---|---|
| **Chủ (T)** | I (và vi, iii) | Ổn định, điểm dừng |
| **Hạ át (S)** | IV, ii | Chuyển động rời khỏi chủ, chuẩn bị cho át |
| **Át (D)** | V, V7, vii° | Căng thẳng, đòi về chủ |

## Câu chuyện T – S – D – T
Hầu hết âm nhạc có tính điệu đi theo vòng: **nghỉ → rời đi → căng → về nhà**. Ví dụ: I – IV – V – I, hoặc I – ii – V – I.

::staff treble C4+E4+G4 C4+F4+A4 B3+D4+G4 C4+E4+G4 | I – IV – V – I trong Đô trưởng (thể đảo gần nhau)

## Vì sao V muốn về I?
Hợp âm V chứa **cảm âm** (B trong Đô trưởng) cách chủ âm nửa cung; V7 còn có thêm [[thuan-nghich|tritone]]. Cả hai tạo lực hút mạnh về I — nền tảng của [[cau-ket]].

Ứng dụng: [[vong-hop-am]], [[hop-am-at-phu]], [[chuyen-giong]]. Mở rộng nhóm hạ át bằng hợp âm cromatic: [[hoa-am-cromatic]]. Phân tích nhiều tầng: [[phan-tich-schenker]].
`,
  },
  {
    slug: 'vong-hop-am',
    title: 'Vòng hợp âm',
    category: 'harmony',
    aliases: ['tiến trình hợp âm', 'chord progression', 'vòng hòa âm', 'I-V-vi-IV', 'ii-V-I', 'vòng Canon', 'vòng 4 hợp âm'],
    summary: 'Chuỗi hợp âm nối tiếp nhau; một số vòng phổ biến xuất hiện trong hàng ngàn bài hát.',
    wiki: 'Chord_progression',
    body: `
| Vòng | Trong Đô trưởng | Gặp trong |
|---|---|---|
| I – IV – V – I | C – F – G – C | Nhạc thiếu nhi, dân ca, rock 'n' roll |
| I – V – vi – IV | C – G – Am – F | Vô số bài pop ("Let It Be", "Someone Like You") |
| vi – IV – I – V | Am – F – C – G | Biến thể thứ của vòng trên |
| I – vi – IV – V | C – Am – F – G | Nhạc thập niên 50 ("Stand By Me") |
| ii – V – I | Dm7 – G7 – Cmaj7 | Xương sống của jazz |
| Vòng Canon | C – G – Am – Em – F – C – F – G | Canon in D (Pachelbel) |
| Vòng quãng 5 | Am – Dm – G – C – F – B° – E – Am | "Autumn Leaves", nhạc Baroque |

::staff treble C4+E4+G4 B3+D4+G4 C4+E4+A4 C4+F4+A4 | I – V – vi – IV với thể đảo gần nhau

## Cách luyện trên piano
1. Chơi vòng ở **nguyên vị** để hiểu cấu trúc.
2. Chuyển sang [[the-dao-hop-am|thể đảo]] gần nhất để tay phải gần như không di chuyển ([[dan-giong]]).
3. Tay trái chơi nốt gốc, sau đó thử các kiểu đệm (rải, Alberti, nhịp).
4. **Dịch giọng**: chơi lại cùng vòng ở G, F, D… — dùng [[vong-quang-nam]] để biết các hợp âm (xem [[dich-giong]]).

Liên quan: [[chuc-nang-hoa-am]], [[blues-12-nhip]], [[hop-am-muon]], [[mo-tien-hoa-am]]. Biến tấu vòng hợp âm: [[tai-hoa-am]].
`,
  },
  {
    slug: 'cau-ket',
    title: 'Kết',
    category: 'harmony',
    aliases: ['cadence', 'kết nhạc', 'kết chính', 'kết trọn', 'kết nửa', 'kết plagal', 'kết lừa', 'kết Amen', 'authentic cadence', 'half cadence', 'deceptive cadence'],
    summary: 'Công thức hợp âm đánh dấu chỗ ngắt của câu nhạc — như dấu chấm, dấu phẩy trong câu văn.',
    wiki: 'Cadence',
    body: `
| Loại kết | Hợp âm | Cảm giác | Tương tự |
|---|---|---|---|
| **Kết chính (trọn)** | V(7) → I, cả hai nguyên vị, giai điệu kết ở chủ âm | Dứt khoát, xong hẳn | Dấu chấm |
| **Kết chính không trọn** | V → I nhưng có thể đảo hoặc giai điệu không ở chủ âm | Kết nhưng còn mở | Dấu chấm phẩy |
| **Kết nửa** | … → V | Dừng lửng, chờ tiếp | Dấu phẩy, dấu hỏi |
| **Kết plagal (Amen)** | IV → I | Nhẹ nhàng, trang trọng | "A-men" cuối thánh ca |
| **Kết lừa** | V → vi | Bất ngờ, kéo dài câu nhạc | Câu chưa xong |

::staff treble B3+D4+G4 C4+E4+G4 | Kết chính V → I (G → C)
::staff treble B3+D4+G4 C4+E4+A4 | Kết lừa V → vi (G → Am)

::img Authentic Cadence Trill.svg | Kết chính kiểu Baroque, có láy rền trên hợp âm át

## Kết với I6/4
Trong nhạc cổ điển, trước V thường có **hợp âm I đảo 2** (C/G → G7 → C) — gọi là "6/4 kết", thực chất là âm thêu của V (xem [[the-dao-hop-am]]).

Kết là nền tảng chia [[cau-nhac]] và [[hinh-thuc-am-nhac|hình thức]]. Lý do V → I mạnh: xem [[chuc-nang-hoa-am]]. Hợp âm hạ át cromatic trước V trong kết: [[hop-am-napoli]], [[hop-am-sau-tang]].
`,
  },
  {
    slug: 'dan-giong',
    title: 'Dẫn giọng',
    category: 'harmony',
    aliases: ['dẫn bè', 'voice leading', 'hoà âm 4 bè', 'SATB', 'quãng 5 song song', 'quãng 8 song song'],
    summary: 'Nghệ thuật nối các hợp âm sao cho từng bè (giọng) di chuyển mượt và độc lập.',
    wiki: 'Voice_leading',
    body: `
Hoà âm cổ điển viết cho **4 bè**: Soprano – Alto – Tenor – Bass (SATB). Mỗi hợp âm là một "lát cắt dọc", nhưng mỗi bè là một giai điệu ngang.

## Quy tắc cơ bản
- **Giữ nốt chung**: nốt có ở cả hai hợp âm thì giữ nguyên trong cùng bè.
- **Đi liền bậc** khi có thể; tránh nhảy xa ở các bè giữa.
- **Cảm âm đi lên chủ âm**; nốt 7 của hợp âm 7 đi xuống (xem [[hop-am-bay]]).
- **Tránh quãng 5 và quãng 8 song song**: hai bè cách nhau quãng 5 (hoặc 8) rồi cùng chuyển sang một quãng 5 (8) khác — làm mất tính độc lập của bè.
- **Chuyển động ngược chiều** giữa bass và soprano tạo cân bằng.

::staff treble C4+E4+G4 C4+F4+A4 B3+D4+G4 C4+E4+G4 | I – IV – V – I với dẫn giọng mượt: mỗi nốt di chuyển tối đa một bậc

## Ứng dụng cho piano
Khi đệm hát, chọn [[the-dao-hop-am|thể đảo]] sao cho tay phải di chuyển ít nhất — đó chính là dẫn giọng tốt. Nguyên tắc này cũng là gốc của [[doi-am]] và [[doi-am-5-loai]]. Lý thuyết đo khoảng cách dẫn giọng giữa các hợp âm: [[neo-riemann]].

Liên quan: [[not-ngoai-hop-am]], [[thuan-nghich]].
`,
  },
  {
    slug: 'not-ngoai-hop-am',
    title: 'Nốt ngoài hợp âm',
    category: 'harmony',
    aliases: ['nốt lướt', 'nốt thêu', 'nốt chờ', 'nốt trễ', 'non-chord tone', 'passing tone', 'neighbor tone', 'suspension', 'appoggiatura', 'nốt dựa'],
    summary: 'Các nốt trong giai điệu không thuộc hợp âm đang vang, làm giai điệu mềm mại và có sức căng.',
    wiki: 'Nonchord_tone',
    body: `
| Loại | Cách đi | Ví dụ trên hợp âm C |
|---|---|---|
| **Nốt lướt** | Nối hai nốt hợp âm bằng bước liền bậc, cùng chiều | E – **F** – G |
| **Nốt thêu** | Rời nốt hợp âm một bậc rồi quay về | E – **F** – E |
| **Nốt dựa (appoggiatura)** | Nhảy tới nốt ngoài (thường ở phách mạnh) rồi giải quyết liền bậc | **D** (nhấn) → C |
| **Nốt trễ (suspension)** | Giữ nốt của hợp âm trước sang hợp âm sau, rồi đi xuống | F (giữ từ hợp âm F trước đó) → E |
| **Nốt thoát** | Đi liền bậc ra rồi nhảy về | D – **E** – C |
| **Nốt đón (anticipation)** | Vang sớm nốt của hợp âm kế tiếp | **C** trước khi hợp âm C vang |

## Vì sao quan trọng?
Giai điệu chỉ gồm nốt hợp âm nghe cứng nhắc. Nốt ngoài hợp âm tạo [[thuan-nghich|nghịch – giải quyết]] liên tục, giúp giai điệu "hát".

Khi phân tích bản nhạc, hãy xác định hợp âm trước, rồi gọi tên các nốt còn lại. Hợp âm sus (xem [[ky-hieu-hop-am]]) thực chất là nốt trễ được "đóng băng". Liên quan: [[giai-dieu]], [[ky-hieu-hoa-my]].
`,
  },
  {
    slug: 'hop-am-at-phu',
    title: 'Hợp âm át phụ',
    category: 'harmony',
    aliases: ['át phụ', 'secondary dominant', 'V/V', 'át của át', 'V7/ii'],
    summary: 'Hợp âm át "mượn" để dẫn vào một hợp âm khác ngoài chủ âm, như V/V (D7 → G trong Đô trưởng).',
    wiki: 'Secondary_chord',
    body: `
Mỗi hợp âm trưởng hoặc thứ trong giọng có thể được "chủ âm hoá" tạm thời bằng cách đặt **hợp âm át của nó** ngay trước.

| Hợp âm đích (Đô trưởng) | Át phụ | Ký hiệu | Nốt mới xuất hiện |
|---|---|---|---|
| ii (Dm) | A7 | V7/ii | C♯ |
| iii (Em) | B7 | V7/iii | D♯ |
| IV (F) | C7 | V7/IV | B♭ |
| V (G) | D7 | V7/V | F♯ |
| vi (Am) | E7 | V7/vi | G♯ |

::keyboard D4 F#4 A4 C5 | D7 = V7/V trong Đô trưởng (F♯ là cảm âm của G)

## Nhận biết
Một hợp âm trưởng hoặc 7 át **không thuộc giọng**, tiếp theo là hợp âm cách nó quãng 5 đúng xuống → gần như chắc chắn là át phụ.

Chuỗi át phụ nối tiếp nhau tạo nên vòng E7 – A7 – D7 – G7 – C (ragtime, jazz). Nếu hợp âm đích được giữ lâu và có [[cau-ket]] riêng, đó là [[chuyen-giong]]. Nền tảng: [[chuc-nang-hoa-am]].
`,
  },
  {
    slug: 'hop-am-muon',
    title: 'Hợp âm mượn',
    category: 'harmony',
    aliases: ['mượn điệu thức', 'modal interchange', 'borrowed chord', 'iv thứ', 'bVII', 'bVI'],
    summary: 'Hợp âm lấy từ giọng cùng tên (thường là giọng thứ) để tô màu cho giọng trưởng, như Fm trong Đô trưởng.',
    wiki: 'Borrowed_chord',
    body: `
Đô trưởng và Đô thứ có cùng âm chủ ([[giong-song-song|giọng cùng tên]]). Mượn hợp âm của Đô thứ khi đang ở Đô trưởng tạo ra màu sắc u buồn, điện ảnh.
| Hợp âm mượn | Trong Đô trưởng | Hiệu quả |
|---|---|---|
| iv | Fm | Buồn man mác, rất hay ở cuối bài (F → Fm → C) |
| ♭VI | A♭ | Hùng tráng, nhạc phim |
| ♭VII | B♭ | Rock, "Mixolydian" |
| ♭III | E♭ | Sáng bất ngờ |
| ii° / iiø7 | D° / Dm7♭5 | Hạ át u tối |

::keyboard F4 Ab4 C5 | Fm — hợp âm iv mượn từ Đô thứ

Vòng **I – ♭VI – ♭VII – I** (C – A♭ – B♭ – C) là "kết anh hùng" nổi tiếng trong nhạc phim và game.

Khác với [[hop-am-at-phu]] (tạo lực hút về một hợp âm), hợp âm mượn chủ yếu thay đổi **màu sắc**. Hợp âm ♭VI, ♭III cũng là [[trung-am-cromatic]] của I. Liên quan: [[dieu-thuc]], [[vong-hop-am]].
`,
  },
  {
    slug: 'chuyen-giong',
    title: 'Chuyển giọng',
    category: 'harmony',
    aliases: ['chuyển điệu', 'modulation', 'đổi tông', 'hợp âm chung', 'pivot chord'],
    summary: 'Chuyển trung tâm âm nhạc từ giọng này sang giọng khác, xác nhận bằng một kết ở giọng mới.',
    wiki: 'Modulation_(music)',
    body: `
## Các cách chuyển giọng
- **Qua hợp âm chung (pivot)**: tìm hợp âm thuộc cả hai giọng. Đô trưởng → Sol trưởng: Am là vi của C **và** ii của G → Am – D7 – G.
- **Qua át của giọng mới**: dùng [[hop-am-at-phu|hợp âm át]] của giọng đích rồi kết ở đó.
- **Trực tiếp (đột ngột)**: nhảy thẳng sang giọng mới, thường lên nửa cung hoặc một cung ở điệp khúc cuối bài pop ("truck driver's modulation").
- **Qua [[trung-am]]**: viết lại tên một [[hop-am-bay-giam|hợp âm 7 giảm]] hoặc [[hop-am-sau-tang|hợp âm 6 Đức]] để rẽ sang giọng xa.

## Giọng đích phổ biến
Giọng **át** (lên quãng 5), giọng **[[giong-song-song|song song]]**, giọng **hạ át** — tức các giọng họ hàng gần trên [[vong-quang-nam]].

## Nhận biết khi đọc nhạc
Xuất hiện đều đặn một [[dau-hoa]] lạ (ví dụ F♯ liên tục trong bài Đô trưởng) kèm [[cau-ket]] ở giọng mới → đã chuyển sang Sol trưởng.

Chuyển giọng là trụ cột của [[hinh-thuc-sonata]].
`,
  },
  {
    slug: 'hop-am-6-va-add',
    title: 'Hợp âm 6 và hợp âm add',
    category: 'harmony',
    aliases: ['hợp âm 6', 'C6', 'Cm6', 'hợp âm add9', 'add9', 'add2', 'hợp âm thêm nốt', 'sixth chord', 'added tone chord'],
    summary: 'C6 (C–E–G–A) có cùng bốn nốt với Am7 nhưng khác nốt trầm và chức năng; Cadd9 thêm nốt 9 mà không có nốt 7 nên vẫn ổn định, còn C9 có nốt 7 thứ nên mang tính át.',
    wiki: 'Added_tone_chord',
    refs: [
      ['oolimo — Sixth chords', 'https://www.oolimo.com/en/chord-types/sixth-chords'],
      ['KVR Audio forum — Why a C6 is not an Am7?', 'https://kvraudio.com/forum/viewtopic.php?p=7191029'],
    ],
    body: `
## Hợp âm 6
Hợp âm ba trưởng thêm nốt [[quang|quãng 6 trưởng]] trên nốt gốc: **C6 = C – E – G – A**. Cm6 = C – E♭ – G – A.

::keyboard C4 E4 G4 A4 | C6: C – E – G – A

## C6 hay Am7?
Am7 = A – C – E – G: **cùng bốn nốt** với C6. Khác nhau ở:
| | C6 | Am7 |
|---|---|---|
| Nốt trầm thường dùng | C | A |
| Nốt gốc được nghe | C | A |
| Chức năng | Hợp âm chủ trưởng có màu sắc (thường thay cho I) | Hợp âm thứ — ví dụ ii trong Sol trưởng (hạ át) |

Tên hợp âm cho người chơi biết **nên nghe đâu là nốt gốc** (xem [[the-dao-hop-am]], [[chuc-nang-hoa-am]]). C6 rất hay gặp ở hợp âm kết của swing và nhạc pop cổ (xem [[ky-hieu-hop-am]]).

## Hợp âm add
Hợp âm ba **thêm một nốt** mà không thêm nốt 7:
| Ký hiệu | Nốt (gốc C) | Đặc điểm |
|---|---|---|
| **Cadd9** (Cadd2) | C – E – G – D | Không có nốt 7 → **ổn định**, hay dùng như hợp âm chủ có màu sắc |
| **C9** | C – E – G – B♭ – D | Có nốt **7 thứ** → mang tính **át**, muốn giải quyết (thường về F) — xem [[hop-am-mo-rong]] |
| Cmaj9 | C – E – G – B – D | Có nốt 7 trưởng → màu jazz, mơ màng |

::keyboard C4 D4 E4 G4 | Cadd9 xếp hẹp: C – D – E – G — nốt 9 sát nốt 3 tạo âm thanh "lấp lánh"

Điểm mấu chốt: **có nốt 7 hay không** quyết định hợp âm nghe ổn định hay căng (xem [[thuan-nghich]], [[hop-am-bay]]).
`,
  },
]
