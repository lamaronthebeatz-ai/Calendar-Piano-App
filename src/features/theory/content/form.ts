import type { Article } from '../wiki'

export const form: Article[] = [
  {
    slug: 'giai-dieu',
    title: 'Giai điệu',
    category: 'form',
    aliases: ['melody', 'đường nét giai điệu', 'contour', 'liền bậc', 'nhảy quãng'],
    summary: 'Chuỗi nốt nối tiếp có cao độ và nhịp điệu, tạo nên "câu hát" của bản nhạc.',
    wiki: 'Melody',
    body: `
Giai điệu = **cao độ** ([[not-nhac]], [[quang]]) + **nhịp điệu** ([[truong-do]]).

## Đường nét
- **Đi lên**: tăng năng lượng, hướng tới cao trào.
- **Đi xuống**: thư giãn, khép lại.
- **Hình vòm** (lên rồi xuống): đường nét phổ biến nhất trong [[cau-nhac]].

## Chuyển động
- **Liền bậc**: đi sang nốt kề bên trong âm giai — dễ hát, mượt.
- **Nhảy quãng**: quãng 3 trở lên — tạo điểm nhấn. Quy tắc cổ điển: sau một **bước nhảy lớn**, giai điệu thường **quay ngược lại** bằng bước liền bậc.

## Giai điệu và hoà âm
Nốt dài, rơi vào phách mạnh thường là nốt của hợp âm; các nốt nối là [[not-ngoai-hop-am]]. Giai điệu được phát triển từ các ý nhỏ — xem [[motif]].
`,
  },
  {
    slug: 'motif',
    title: 'Motif',
    category: 'form',
    aliases: ['mô-típ', 'motive', 'chủ đề', 'theme', 'phát triển motif', 'nét nhạc'],
    summary: 'Ý nhạc ngắn nhất có bản sắc riêng (vài nốt), được lặp lại và biến đổi để xây dựng cả tác phẩm.',
    wiki: 'Motif_(music)',
    body: `
Ví dụ nổi tiếng nhất: bốn nốt "ta-ta-ta-taaa" mở đầu **Giao hưởng số 5** của Beethoven — cả chương nhạc được phát triển từ motif này.

## Các kỹ thuật phát triển motif
| Kỹ thuật | Cách làm |
|---|---|
| Lặp lại | Nhắc lại y nguyên |
| Mô tiến (sequence) | Lặp lại ở cao độ khác, cao dần hoặc thấp dần |
| Đảo | Lật ngược chiều các quãng (lên thành xuống) |
| Nghịch hành | Đọc từ cuối về đầu |
| Tăng trường độ | Kéo dài mọi nốt (thường gấp đôi) |
| Giảm trường độ | Rút ngắn mọi nốt |
| Phân đoạn | Chỉ dùng một phần của motif |

Motif → [[cau-nhac]] → đoạn → [[hinh-thuc-am-nhac|hình thức]]. Các kỹ thuật này đặc biệt quan trọng trong [[doi-am]], [[fugue]] và phần phát triển của [[hinh-thuc-sonata]].
`,
  },
  {
    slug: 'cau-nhac',
    title: 'Câu nhạc và đoạn nhạc',
    category: 'form',
    aliases: ['câu nhạc', 'đoạn nhạc', 'phrase', 'period', 'câu hỏi câu trả lời', 'tiết nhạc', 'antecedent', 'consequent'],
    summary: 'Câu nhạc là ý nhạc trọn vẹn kết thúc bằng một kết (thường 4 ô nhịp); hai câu hỏi – đáp tạo thành đoạn nhạc.',
    wiki: 'Phrase_(music)',
    body: `
## Câu nhạc
Giống câu văn có dấu câu, câu nhạc kết thúc bằng một [[cau-ket|kết]]. Độ dài phổ biến là **4 ô nhịp** (đôi khi 2 hoặc 8).

## Đoạn nhạc (period)
Hai câu nhạc liên quan tạo thành **câu hỏi – câu trả lời**:
| Câu | Kết | Cảm giác |
|---|---|---|
| Câu 1 — hỏi (antecedent) | Kết nửa (→ V) | Còn bỏ ngỏ |
| Câu 2 — đáp (consequent) | Kết chính (V → I) | Trọn vẹn |

Nếu câu 2 bắt đầu giống câu 1 → **đoạn song song**; nếu khác → **đoạn tương phản**.

## Khi tập đàn
Hãy "thở" ở cuối mỗi câu — nhấc tay nhẹ, giảm âm lượng — như ca sĩ lấy hơi. Đánh dấu chỗ kết giúp ghi nhớ bài nhanh hơn.

## Câu nhạc kiểu "sentence"
Một cấu trúc 8 ô nhịp khác (theo William Caplin), rất phổ biến từ Beethoven:
| Phần | Ô nhịp | Nội dung |
|---|---|---|
| Trình bày ý cơ bản | 1–2 | [[motif|Ý nhạc]] 2 ô |
| Nhắc lại ý cơ bản | 3–4 | Lặp lại (thường trên hợp âm V) |
| Tiếp nối – kết | 5–8 | Chia nhỏ, tăng tốc, đẩy tới [[cau-ket|kết]] |

Ví dụ: chủ đề mở đầu Sonata piano Op. 2 số 1 của Beethoven.

Liên quan: [[motif]], [[giai-dieu]], [[nhip-lay-da]], [[hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'hinh-thuc-am-nhac',
    title: 'Hình thức âm nhạc',
    category: 'form',
    aliases: ['hình thức', 'cấu trúc bài', 'musical form', 'hai đoạn', 'ba đoạn', 'binary', 'ternary', 'ABA', 'AB', 'verse chorus', 'phiên khúc điệp khúc'],
    summary: 'Cách sắp xếp các phần của một tác phẩm, ký hiệu bằng chữ cái: A, B, A′… Phổ biến: hai đoạn (AB), ba đoạn (ABA).',
    wiki: 'Musical_form',
    body: `
Phần giống nhau mang cùng chữ cái; **A′** là A có biến đổi.
| Hình thức | Sơ đồ | Đặc điểm | Ví dụ |
|---|---|---|---|
| Một đoạn | A | Một [[cau-nhac|đoạn nhạc]] duy nhất | Bài hát thiếu nhi ngắn |
| **Hai đoạn** | AB (thường ‖: A :‖: B :‖) | A chuyển sang giọng át, B quay về | Vũ khúc Baroque, minuet của Bach |
| **Ba đoạn** | ABA | B tương phản, A trở lại | Nhiều nocturne của Chopin, aria da capo |
| Strophic | AAA… | Cùng nhạc, lời khác | Dân ca, thánh ca |
| [[rondo]] | ABACA… | Chủ đề A quay lại nhiều lần | Chương cuối sonata |
| [[bien-tau]] | A A1 A2 A3… | Chủ đề và các biến thể | Biến tấu "Ah vous dirai-je, Maman" của Mozart |
| [[hinh-thuc-sonata|Sonata]] | Trình bày – Phát triển – Tái hiện | Hình thức lớn của thời Cổ điển | Chương 1 sonata, giao hưởng |

## Hình thức bài hát pop
**Intro – Phiên khúc (Verse) – Tiền điệp khúc – Điệp khúc (Chorus) – Phiên khúc – Điệp khúc – Bridge – Điệp khúc – Outro.** Điệp khúc giữ nguyên lời và nhạc; phiên khúc giữ nhạc nhưng đổi lời.

Dấu hiệu hình thức trong bản nhạc: [[dau-nhac-lai]], [[cau-ket]], [[chuyen-giong]]. Hình thức ca khúc jazz: [[hinh-thuc-ca-khuc-32]]. Các thể loại nhiều chương: [[the-loai]]. Biến tấu trên bass lặp: [[ostinato]].
`,
  },
  {
    slug: 'rondo',
    title: 'Rondo',
    category: 'form',
    aliases: ['hình thức rondo', 'rondeau', 'ABACA'],
    summary: 'Hình thức có chủ đề chính (A) quay lại nhiều lần, xen giữa là các đoạn tương phản: ABACA hoặc ABACABA.',
    wiki: 'Rondo',
    body: `
Chủ đề **A** (refrain) luôn ở giọng chính; các đoạn xen **B, C** (episode) đi sang giọng khác và mang tính chất tương phản.
| Dạng | Sơ đồ |
|---|---|
| Rondo 5 phần | A B A C A |
| Rondo 7 phần | A B A C A B A |
| Sonata-rondo | A B A – C (phát triển) – A B A |

Rondo thường vui tươi, nhanh — rất hay dùng cho **chương cuối** của sonata và concerto thời Cổ điển.

## Ví dụ cho người học piano
- "Für Elise" (Beethoven): A B A C A.
- "Rondo alla Turca" — chương 3 Sonata K. 331 (Mozart).

Xem tổng quan: [[hinh-thuc-am-nhac]]. So sánh: [[hinh-thuc-sonata]].
`,
  },
  {
    slug: 'hinh-thuc-sonata',
    title: 'Hình thức sonata',
    category: 'form',
    aliases: ['sonata', 'sonata form', 'trình bày', 'phát triển', 'tái hiện', 'exposition', 'development', 'recapitulation', 'sonata allegro'],
    summary: 'Hình thức lớn quan trọng nhất thời Cổ điển: Trình bày (2 chủ đề, 2 giọng) – Phát triển – Tái hiện (cả 2 chủ đề về giọng chính).',
    wiki: 'Sonata_form',
    body: `
| Phần | Nội dung | Giọng |
|---|---|---|
| (Mở đầu) | Tuỳ chọn, thường chậm | |
| **Trình bày** | Chủ đề 1 → cầu nối → Chủ đề 2 → kết đoạn | Chủ đề 1: giọng chính. Chủ đề 2: giọng **át** (nếu trưởng) hoặc giọng **song song trưởng** (nếu thứ) |
| **Phát triển** | Biến đổi, xé lẻ các [[motif]], [[chuyen-giong]] liên tục | Nhiều giọng xa |
| **Tái hiện** | Nhắc lại chủ đề 1 và 2 | **Cả hai** ở giọng chính |
| (Coda) | Đoạn kết, khẳng định giọng chính | Giọng chính |

## Kịch tính của hình thức sonata
Trình bày tạo **xung đột** giữa hai giọng; phát triển đẩy xung đột lên cao trào; tái hiện **giải quyết** bằng cách đưa mọi thứ về giọng chính.

## Lưu ý thuật ngữ
"Sonata" là **tác phẩm** nhiều chương (thường 3–4) cho một hoặc hai nhạc cụ. "Hình thức sonata" là **cấu trúc** của một chương — thường là chương đầu. Sonatina là sonata nhỏ, đơn giản (Clementi, Kuhlau) — bài tập kinh điển cho học sinh piano.

Liên quan: [[hinh-thuc-am-nhac]], [[rondo]], [[giong-song-song]], [[the-loai]]. Đoạn phát triển thường kết bằng [[bass-ngan]] trên át âm.
`,
  },
  {
    slug: 'bien-tau',
    title: 'Biến tấu',
    category: 'form',
    aliases: ['chủ đề và biến tấu', 'theme and variations', 'variation', 'biến khúc'],
    summary: 'Một chủ đề được trình bày rồi lặp lại nhiều lần, mỗi lần biến đổi giai điệu, nhịp điệu, hoà âm hoặc kết cấu.',
    wiki: 'Variation_(music)',
    body: `
Sơ đồ: **A – A1 – A2 – A3 …** Chủ đề thường ngắn, dạng [[hinh-thuc-am-nhac|hai đoạn]].

## Những gì có thể biến đổi
- **Giai điệu**: thêm [[ky-hieu-hoa-my|hoa mỹ]], chia nhỏ [[truong-do]], dùng [[not-ngoai-hop-am]].
- **Nhịp điệu**: chuyển sang [[lien-ba]], [[dao-phach]], đổi [[so-chi-nhip]].
- **Hoà âm**: đổi sang [[giong-song-song|giọng cùng tên]] thứ (biến tấu "minore"), thay hợp âm.
- **Kết cấu**: chuyển giai điệu xuống tay trái, viết [[doi-am]] (xem [[ket-cau]]).
- **Nhịp độ và tính chất**: biến tấu chậm Adagio, biến tấu kết thúc nhanh rực rỡ.

## Tác phẩm tiêu biểu
- Mozart — 12 biến tấu "Ah vous dirai-je, Maman" K. 265 (giai điệu "Twinkle Twinkle Little Star").
- Bach — Goldberg Variations.
- Beethoven — Diabelli Variations.
- Rachmaninoff — Rhapsody on a Theme of Paganini.
`,
  },
  {
    slug: 'ket-cau',
    title: 'Kết cấu âm nhạc',
    category: 'form',
    aliases: ['texture', 'đơn âm', 'chủ điệu', 'monophony', 'homophony', 'polyphony', 'giai điệu và đệm'],
    summary: 'Cách các lớp âm thanh kết hợp với nhau: đơn âm (một giai điệu), chủ điệu (giai điệu + đệm), phức điệu (nhiều giai điệu độc lập).',
    wiki: 'Texture_(music)',
    body: `
| Kết cấu | Mô tả | Ví dụ |
|---|---|---|
| **Đơn âm** (monophony) | Một giai điệu, không đệm | Thánh ca Gregorian, hát ru |
| **Chủ điệu** (homophony) | Một giai điệu chính + hợp âm đệm | Phần lớn nhạc pop, nocturne Chopin |
| **Hợp âm khối** (homorhythm) | Mọi bè cùng nhịp điệu | Thánh ca 4 bè |
| **Phức điệu** (polyphony) | Nhiều giai điệu độc lập, ngang hàng | Fugue, canon của Bach |
| **Dị âm** (heterophony) | Nhiều người chơi cùng giai điệu với biến tấu nhỏ khác nhau | Nhạc dân tộc, nhã nhạc cung đình |

## Các kiểu đệm chủ điệu trên piano
- **Hợp âm khối**: đánh cả hợp âm cùng lúc.
- **Hợp âm rải** (arpeggio): đánh lần lượt từng nốt.
- **Bass Alberti**: thấp – cao – giữa – cao (C–G–E–G), rất phổ biến thời Mozart.
- **Stride / oom-pah**: bass trầm ở phách mạnh, hợp âm ở phách nhẹ (valse, ragtime).

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
    body: `
Đối âm nhìn âm nhạc theo **chiều ngang** (từng giai điệu), trong khi hoà âm nhìn theo **chiều dọc** (hợp âm). Thực tế hai cách nhìn bổ sung cho nhau.

## Các loại chuyển động giữa hai bè
| Chuyển động | Mô tả |
|---|---|
| Song song | Cùng chiều, giữ nguyên quãng |
| Cùng chiều | Cùng chiều, quãng thay đổi |
| **Ngược chiều** | Một bè lên, một bè xuống — tạo độc lập tốt nhất |
| Xiên | Một bè đứng yên, bè kia di chuyển |

Quy tắc kinh điển (Fux, "Gradus ad Parnassum", 1725): ưu tiên chuyển động ngược chiều, tránh [[dan-giong|quãng 5/8 song song]], xử lý [[thuan-nghich|nghịch âm]] cẩn thận.

## Mô phỏng và canon
- **Mô phỏng**: bè thứ hai nhắc lại giai điệu bè thứ nhất sau một khoảng thời gian.
- **Canon**: mô phỏng nghiêm ngặt từ đầu đến cuối — ví dụ hát nối "Frère Jacques" (Kìa con bướm vàng).

Đỉnh cao của đối âm là [[fugue]]. Người học piano bắt đầu với **Inventions 2 bè** của Bach. Phương pháp học từng bước: [[doi-am-5-loai]]. Đổi chỗ các bè và các loại canon: [[doi-am-kep]]. Liên quan: [[ket-cau]], [[motif]].
`,
  },
  {
    slug: 'fugue',
    title: 'Fugue',
    category: 'form',
    aliases: ['fuga', 'tẩu khúc', 'chủ đề fugue', 'subject', 'answer', 'đối đề'],
    summary: 'Thể loại đối âm chặt chẽ: một chủ đề được các bè lần lượt mô phỏng, đan xen và phát triển.',
    wiki: 'Fugue',
    body: `
::img Johann Sebastian Bach.jpg | Johann Sebastian Bach (1685–1750), bậc thầy fugue — chân dung của Elias Gottlob Haussmann

## Cấu trúc
- **Trình bày**: bè 1 nêu **chủ đề** ở giọng chính. Bè 2 vào với **đáp đề** ở giọng [[bac-am-giai|át]], trong khi bè 1 chơi **đối đề**. Lần lượt đến khi mọi bè (thường 3–4) đều vào.
- **Đoạn nối** (episode): phát triển các [[motif]] từ chủ đề, thường dùng mô phỏng và [[chuyen-giong]].
- **Các lần chủ đề trở lại** ở những giọng khác nhau.
- **Kết**: chủ đề quay về giọng chính; có thể có **stretto** (các bè vào dồn dập, chồng lên nhau) và **bass ngân** (pedal point).

::img BWV846-Dux-Comes.svg | Chủ đề (dux) và đáp đề (comes) trong Fugue số 1 Đô trưởng BWV 846 của Bach

## Tác phẩm tiêu biểu
- Bach — **Clavier bình quân** (Das Wohltemperierte Klavier), 2 tập × 24 prelude và fugue ở đủ 24 giọng (xem [[luat-binh-quan]]).
- Bach — **Nghệ thuật Fugue** (Die Kunst der Fuge).

Nền tảng: [[doi-am]], [[doi-am-kep]], [[ket-cau]]. Gần cuối fugue thường có [[bass-ngan]] trên át âm.
`,
  },
  {
    slug: 'blues-12-nhip',
    title: 'Blues 12 ô nhịp',
    category: 'form',
    aliases: ['12 bar blues', 'blues 12 ô', 'vòng blues', 'twelve-bar blues', 'blues'],
    summary: 'Khung hoà âm 12 ô nhịp dùng các hợp âm I, IV, V — nền tảng của blues, rock and roll và jazz.',
    wiki: 'Twelve-bar_blues',
    body: `
Mỗi ô là một ô nhịp 4/4, trong giọng Đô:
| Ô 1–4 | Ô 5–8 | Ô 9–12 |
|---|---|---|
| C7 · C7 · C7 · C7 | F7 · F7 · C7 · C7 | G7 · F7 · C7 · G7 |

Ô 12 dùng G7 (**turnaround**) để quay về đầu vòng. Phiên bản "quick change" đổi ô 2 thành F7.

## Đặc trưng
- Cả ba hợp âm đều là [[hop-am-bay|hợp âm 7 át]] — điều "phạm luật" theo hoà âm cổ điển nhưng tạo nên màu blues.
- Giai điệu và ngẫu hứng dùng [[am-giai-blues]].
- Nhịp **swing**: cặp móc đơn được chơi dài – ngắn (gần với [[lien-ba]] 2+1).
- Lời thường theo cấu trúc **AAB**: câu 1 nêu ý, câu 2 lặp lại, câu 3 đáp.

## Bass boogie-woogie cho tay trái
C – E – G – A – B♭ – A – G – E (mỗi nốt một móc đơn), dịch lên F và G theo hợp âm.

Liên quan: [[vong-hop-am]], [[chuc-nang-hoa-am]], [[dao-phach]], [[swing]]. So sánh với khuôn 32 ô nhịp: [[hinh-thuc-ca-khuc-32]].
`,
  },
  {
    slug: 'ostinato',
    title: 'Ostinato',
    category: 'form',
    aliases: ['bass lặp', 'ground bass', 'basso ostinato', 'passacaglia', 'chaconne', 'riff', 'mẫu lặp'],
    summary: 'Một mẫu nhạc ngắn (giai điệu, nhịp điệu hoặc hợp âm) lặp lại liên tục; khi ở bè trầm, nó là nền cho các thể loại passacaglia và chaconne.',
    wiki: 'Ostinato',
    body: `
## Các dạng
- **Ostinato giai điệu / nhịp điệu**: ví dụ tay trái lặp mẫu trong "Boléro" (Ravel), hay riff guitar trong rock.
- **Bass lặp** (basso ostinato, ground bass): một câu bè trầm lặp lại, phía trên là các [[bien-tau|biến tấu]].

## Passacaglia và chaconne
Hai thể loại Baroque dạng [[bien-tau]] trên một bass lặp hoặc một [[vong-hop-am]] lặp, thường ở nhịp 3/4:
- Purcell — "Dido's Lament" (bass đi xuống cromatic).
- Bach — Passacaglia Đô thứ cho organ BWV 582; Chaconne trong Partita số 2 Rê thứ cho violin.
- Pachelbel — Canon in D: canon ba bè trên một bass lặp 8 nốt (xem [[doi-am-kep]]).

## Trong nhạc hiện đại
Riff và vòng lặp (loop) là ostinato; nhạc [[toi-gian]] được xây hoàn toàn từ ostinato. Bè trầm boogie-woogie trong [[blues-12-nhip]] cũng là ostinato.

Liên quan: [[bass-ngan]] (một nốt lặp/ngân thay vì một mẫu), [[ket-cau]].
`,
  },
  {
    slug: 'doi-am-5-loai',
    title: 'Đối âm 5 loại',
    category: 'form',
    aliases: ['species counterpoint', 'đối âm theo loại', 'cantus firmus', 'Fux', 'Gradus ad Parnassum', 'đối âm loại 1'],
    summary: 'Phương pháp học đối âm kinh điển của Fux (1725): viết bè mới trên một giai điệu cho sẵn, qua 5 cấp độ nhịp điệu tăng dần.',
    wiki: 'Counterpoint',
    body: `
Cho sẵn một **cantus firmus** (giai điệu nốt tròn, đi chủ yếu liền bậc). Người học viết một bè đối âm phía trên hoặc dưới, theo 5 "loại":
| Loại | Tỉ lệ nốt (đối âm : cantus) | Học được gì |
|---|---|---|
| 1 | 1 : 1 (nốt tròn) | Chỉ dùng [[thuan-nghich|quãng thuận]]; các kiểu chuyển động |
| 2 | 2 : 1 (nốt trắng) | [[not-ngoai-hop-am|Nốt lướt]] ở phách nhẹ |
| 3 | 4 : 1 (nốt đen) | Nốt lướt, nốt thêu, các hình giai điệu |
| 4 | Nốt nối lệch phách | **Nốt trễ** (suspension): chuẩn bị – nghịch – giải quyết |
| 5 | Hoa mỹ (kết hợp tự do) | Kết hợp tất cả |

## Quy tắc cơ bản (loại 1)
- Bắt đầu và kết thúc bằng **quãng thuận hoàn toàn** (đồng âm, 5, 8).
- Kết bằng bước liền bậc vào chủ âm, với [[bac-am-giai|cảm âm]] đi lên.
- Ưu tiên **chuyển động ngược chiều**; tránh [[dan-giong|quãng 5 và quãng 8 song song]] và cả quãng 5/8 "ẩn" (cùng chiều tới quãng hoàn toàn với nhảy ở bè trên).
- Dùng nhiều quãng 3 và 6; không lặp nốt quá nhiều; một [[giai-dieu|đỉnh giai điệu]] duy nhất.

Phương pháp này được Haydn, Mozart, Beethoven học và vẫn được dạy ở nhạc viện ngày nay. Bước tiếp theo: [[doi-am-kep]], [[fugue]]. Tổng quan: [[doi-am]].
`,
  },
  {
    slug: 'doi-am-kep',
    title: 'Đối âm kép và canon',
    category: 'form',
    aliases: ['đối âm kép', 'invertible counterpoint', 'double counterpoint', 'canon đảo', 'canon cua', 'crab canon', 'round', 'hát nối', 'canon nghịch hành'],
    summary: 'Đối âm kép: hai bè có thể đổi chỗ trên – dưới mà vẫn đúng. Canon: một bè được bè khác mô phỏng nghiêm ngặt, với nhiều biến thể đảo, nghịch hành, tăng trường độ.',
    wiki: 'Invertible_counterpoint',
    body: `
## Đối âm kép (ở quãng 8)
Viết hai bè sao cho khi đưa bè dưới lên trên một quãng 8, kết quả vẫn hay. Khi [[quang-dao|đảo quãng]]: 3 ↔ 6 (vẫn thuận), nhưng **5 ↔ 4** — quãng 5 thuận trở thành quãng 4 nghịch (trên bè trầm), nên phải dùng quãng 5 thận trọng.

Đây là bí quyết của **Inventions 2 bè** của Bach: chủ đề xuất hiện lần lượt ở tay phải rồi tay trái, đối đề đổi chỗ theo. Rất quan trọng trong [[fugue]].

## Các loại canon
| Loại | Bè sau mô phỏng bè trước bằng cách |
|---|---|
| Canon đồng âm / quãng 8 | Lặp nguyên cao độ (hát nối, "round") |
| Canon ở quãng 5, quãng 4… | Dịch lên một [[quang]] cố định |
| Canon đảo | Lật ngược hướng các quãng |
| Canon tăng/giảm trường độ | Chơi chậm/nhanh gấp đôi |
| Canon cua (nghịch hành) | Đọc ngược từ cuối về đầu |

Bach's "Goldberg Variations" có một canon ở mỗi biến tấu thứ ba, lần lượt ở quãng đồng âm, 2, 3… đến 9 (xem [[bien-tau]]). "Musikalisches Opfer" (Lễ vật âm nhạc) có canon cua nổi tiếng.

Liên quan: [[doi-am]], [[doi-am-5-loai]], [[motif]] (các kỹ thuật đảo, nghịch hành).
`,
  },
  {
    slug: 'the-loai',
    title: 'Thể loại khí nhạc',
    category: 'form',
    aliases: ['thể loại', 'genre', 'giao hưởng', 'symphony', 'concerto', 'tổ khúc', 'suite', 'tứ tấu', 'etude', 'nocturne', 'prelude', 'ballade', 'tiểu phẩm', 'cadenza', 'minuet', 'scherzo'],
    summary: 'Các thể loại lớn và nhỏ của nhạc cổ điển — sonata, giao hưởng, concerto, tổ khúc, tiểu phẩm — và cấu trúc chương điển hình của chúng.',
    wiki: 'Musical_form',
    body: `
## Thể loại nhiều chương
| Thể loại | Dàn dựng | Chương điển hình |
|---|---|---|
| **Sonata** | 1 nhạc cụ (hoặc + piano) | Nhanh ([[hinh-thuc-sonata]]) – Chậm – (Minuet/Scherzo) – Nhanh ([[rondo]]) |
| **Giao hưởng** | Dàn nhạc | Như sonata, thường 4 chương |
| **Tứ tấu đàn dây** | 2 violin, viola, cello | Như sonata, 4 chương |
| **Concerto** | Độc tấu + dàn nhạc | Nhanh – Chậm – Nhanh; có **cadenza** (độc tấu ngẫu hứng, ngay trước [[cau-ket|kết]]) |
| **Tổ khúc Baroque** | Đàn phím hoặc hoà tấu | Chuỗi vũ khúc cùng giọng: Allemande – Courante – Sarabande – Gigue |

Minuet (3/4, vừa phải) ở thời Cổ điển được Beethoven thay bằng **Scherzo** (nhanh, đùa vui) — cả hai thường có dạng [[hinh-thuc-am-nhac|ba đoạn]] với đoạn giữa gọi là Trio.

## Tiểu phẩm piano (thế kỷ 19)
| Thể loại | Tính chất | Ví dụ |
|---|---|---|
| Prelude | Ngắn, khám phá một ý | Chopin, 24 Préludes Op. 28 |
| Étude (luyện ngón) | Tập trung một kỹ thuật, nhưng là tác phẩm nghệ thuật | Chopin, Liszt |
| Nocturne | Trữ tình, giai điệu hát trên đệm rải | Field, Chopin |
| Ballade | Kể chuyện, kịch tính | Chopin, Brahms |
| Impromptu | Như ngẫu hứng | Schubert, Chopin |
| Bài ca không lời | Giai điệu như ca khúc | Mendelssohn |

Bối cảnh: [[cac-thoi-ky]]. Phức điệu: [[fugue]], [[ostinato|passacaglia]].
`,
  },
]
