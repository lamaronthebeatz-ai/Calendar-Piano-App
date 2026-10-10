import type { Article } from '../wiki'

export const rhythm: Article[] = [
  {
    slug: 'tiet-tau',
    title: 'Tiết tấu và nhịp: hệ thống và lộ trình',
    category: 'rhythm',
    aliases: ['tiết tấu', 'nhịp điệu', 'rhythm', 'lộ trình tiết tấu', 'thời gian trong âm nhạc', 'tiết tấu và nhịp'],
    summary: 'Bài tổng quan của mục: phân biệt tiết tấu (chuỗi trường độ cụ thể), phách (mạch đều) và nhịp (cách phách được nhóm thành mạnh – nhẹ), rồi thứ tự học từ trường độ đến đa nhịp và rubato.',
    wiki: 'Rhythm',
    refs: [
      ['Open Music Theory (Gotham và cộng sự) — Phần I: Fundamentals', 'https://viva.pressbooks.pub/openmusictheory/part/fundamentals/'],
      ['Wikipedia — Rhythm', 'https://en.wikipedia.org/wiki/Rhythm'],
      ['Wikipedia — Metre (music)', 'https://en.wikipedia.org/wiki/Metre_(music)'],
      ['London — Hearing in Time (Oxford UP 2004, bản 2 2012): phần mở đầu (PDF)', 'https://musikwissenschaft.univie.ac.at/fileadmin/user_upload/i_musikwissenschaft/Forschung/Vortragsreihen/J_London_Hearing_in_Time_Intro.pdf'],
    ],
    body: `
Phần "thời gian" của âm nhạc có ba khái niệm hay bị lẫn với nhau:
| Khái niệm | Là gì | Bài |
|---|---|---|
| **Phách** (beat, pulse) | Mạch đều mà ta gõ chân theo | [[cam-nhan-phach]] |
| **Nhịp** (meter) | Cách các phách được **nhóm** thành mạnh – nhẹ (2, 3, 4…) và chia nhỏ (chia đôi hay chia ba) | [[so-chi-nhip]] |
| **Tiết tấu** (rhythm) | Chuỗi **trường độ cụ thể** của các nốt và dấu lặng, đặt trên nền phách và nhịp | [[truong-do]], [[dau-lang]] |
Nhà [[cam-xuc-am-nhac|tâm lý học âm nhạc]] Justin London (*Hearing in Time*) xem nhịp là một dạng **hành vi chú ý của người nghe** — sự đồng bộ (entrainment) của sự chú ý và vận động với những sự kiện lặp lại, một khả năng ta cũng dùng khi nghe tiếng bước chân hay tiếng nước nhỏ giọt. Tiết tấu được nghe **so với** khung nhịp đó. Vì vậy cùng một chuỗi nốt có thể nghe khác hẳn khi đặt vào nhịp khác (xem [[hemiola]], [[da-nhip]]).

## Lộ trình học
1. **Ký hiệu trường độ**: [[truong-do]] → [[dau-lang]] → [[cham-doi-dau-noi]].
2. **Nhịp**: [[so-chi-nhip]] (nhịp đơn, nhịp kép) → [[nhip-lay-da]] → [[nhip-do]].
3. **Chia khác thường**: [[lien-ba]].
4. **Lệch khỏi phách mạnh**: [[dao-phach]] → [[swing]].
5. **Nhịp phức tạp**: [[nhip-hon-hop]] → [[hemiola]] → [[da-nhip]].
6. **Thời gian co giãn**: [[rubato]], [[kiem-soat-toc-do]].
7. **Tầng lớn hơn ô nhịp**: [[nhip-dieu-hoa-am]] (tốc độ đổi hợp âm), [[sieu-nhip]] (nhóm các ô nhịp).

## Luyện tiết tấu
- Đọc tiết tấu bằng âm tiết: [[am-tiet-nhip]].
- Cảm nhận phách bằng cơ thể và máy đếm nhịp: [[cam-nhan-phach]], [[kiem-soat-toc-do]].
- Ghi lại tiết tấu nghe được: [[ky-am]].
`,
  },
  {
    slug: 'truong-do',
    title: 'Trường độ',
    category: 'rhythm',
    aliases: ['độ dài nốt', 'hình nốt', 'nốt tròn', 'nốt trắng', 'nốt đen', 'nốt móc đơn', 'nốt móc kép', 'note value'],
    summary: 'Độ dài của một nốt, thể hiện qua hình dạng nốt; mỗi hình nốt bằng một nửa hình nốt trước nó.',
    wiki: 'Note_value',
    refs: [
      ['LibreTexts — Counting systems', 'https://human.libretexts.org/Bookshelves/Music/Music_Education_and_Training/Do_You_Want_to_Major_in_Music_(Wilson_and_Royston)/05%3A_Aural_Skills/5.03%3A_Counting_Systems'],
      ['Dynamic Music Room — Counting rhythm syllables: 9 systems explained', 'https://dynamicmusicroom.com/counting-rhythm-and-rhythm-syllables/'],
      ['Takadimi article (Hoffman, Pelto & White) — PDF', 'https://musescore.org/sites/musescore.org/files/2024-10/Takadimi%20Article.pdf'],
      ['Wikipedia — Mensural notation', 'https://en.wikipedia.org/wiki/Mensural_notation'],
      ['University of Basel — Early mensural notation', 'https://tales.nmc.unibas.ch/en/from-ink-to-sound-32/early-mensural-notation-190/the-notational-system-of-mensural-music-965'],
      ['My Music Theory — UK and USA note names: why are they different?', 'https://mymusictheory.com/more-music-theory-topics/uk-and-usa-note-names-why-are-they-different/'],
      ['LilyPond — Duration names of notes and rests', 'https://lilypond.org/doc/v2.25/Documentation/music-glossary/duration-names-notes-and-rests'],
    ],
    body: `
Trường độ được tính bằng **phách**. Trong nhịp phổ biến 4/4 (xem [[so-chi-nhip]]), nốt đen = 1 phách:
| Hình nốt | Giá trị | Số phách (4/4) | Dấu lặng tương ứng |
|---|---|---|---|
| Nốt tròn | 1 | 4 | Lặng tròn |
| Nốt trắng | 1/2 | 2 | Lặng trắng |
| Nốt đen | 1/4 | 1 | Lặng đen |
| Nốt móc đơn | 1/8 | 1/2 | Lặng đơn |
| Nốt móc kép | 1/16 | 1/4 | Lặng kép |
| Nốt móc ba | 1/32 | 1/8 | Lặng ba |

::img Quarter notes and rest.svg | Nốt đen và dấu lặng đen
::img Eighth notes and rest.svg | Nốt móc đơn (riêng lẻ và nối gạch) cùng dấu lặng đơn

## Quy tắc chia đôi
1 nốt tròn = 2 nốt trắng = 4 nốt đen = 8 nốt móc đơn = 16 nốt móc kép. Muốn chia ba thay vì chia đôi, dùng [[lien-ba]].
::rhythm 4/4 w / h h / q q q q // | 1 nốt tròn = 2 nốt trắng = 4 nốt đen
::rhythm 4/4 e-e e-e e-e e-e / s-s-s-s s-s-s-s s-s-s-s s-s-s-s // | 8 nốt móc đơn = 16 nốt móc kép — nối gạch theo từng phách (một gạch = móc đơn, hai gạch = móc kép)

## Gạch nối
Các nốt móc đơn trở xuống thường được **nối bằng gạch ngang** theo từng phách để dễ đọc — một gạch = móc đơn, hai gạch = móc kép.

## Tên gọi kiểu Anh và kiểu Mỹ
Sách tiếng Anh dùng hai hệ tên khác nhau. Giáo trình theo chuẩn Anh (như [[thi-cap-do|ABRSM]]) dùng tên **kiểu Anh**, nên giáo viên cần biết cả hai:
| Tiếng Việt | Kiểu Mỹ (theo phân số) | Kiểu Anh |
|---|---|---|
| Nốt tròn đôi | double whole note | breve |
| Nốt tròn | whole note | **semibreve** |
| Nốt trắng | half note | **minim** |
| Nốt đen | quarter note | **crotchet** |
| Nốt móc đơn | eighth note | **quaver** |
| Nốt móc kép | sixteenth note | **semiquaver** |

## Lịch sử: vì sao "nốt tròn" lại là "nửa nốt ngắn"?
- Khoảng năm **1200** ở Pháp, [[tiet-tau|nhịp điệu]] được ghi bằng các **"[[dieu-thuc|điệu thức]] tiết tấu"** — những mẫu dài – ngắn cố định lặp lại.
- Chuyên luận *Ars cantus mensurabilis* (thường gán cho Franco xứ Cologne, khoảng 1260–1280) hệ thống hoá **[[ky-am|ký âm]] định lượng**: chỉ có ba giá trị chính thức — **longa** (dài), **brevis** (ngắn), **semibrevis** (nửa ngắn), và mỗi nốt **chỉ chia ba**. Chia đôi chỉ được công nhận từ thế kỷ 14 (*Ars nova*).
- Về sau xuất hiện thêm **minima** ("nhỏ nhất", thế kỷ 14), rồi các nốt nhỏ hơn nữa. Khi nhạc dùng nốt ngày càng ngắn, **semibrevis** — vốn là "nửa nốt ngắn" — dần trở thành nốt **dài nhất** thường dùng. Đó là lý do nốt tròn tiếng Anh vẫn gọi là *semibreve*. Tên *crotchet* (nốt đen) đến từ tiếng Pháp cổ *crochet* — "cái móc nhỏ".

## Các hệ thống đếm phách
| Hệ thống | Cách đọc | Ưu – nhược |
|---|---|---|
| **Đếm số "1 e & a"** | Nốt đen: "1 2 3 4"; móc đơn: "1 & 2 &"; móc kép: "1 e & a" | Phổ biến nhất ở trường học Mỹ; cho biết vị trí nốt trong phách, nhưng phải hiểu [[so-chi-nhip]] trước |
| **[[zoltan-kodaly|Kodály]]** | Nốt đen "ta", cặp móc đơn "ti-ti", nốt trắng "ta-a", móc kép "ti-ri ti-ri", đen giữa hai móc đơn "syn-co-pa" | Dễ cho trẻ nhỏ; mỗi âm tiết gắn với một **hình nốt** nên kém gắn với phách khi nhịp phức tạp |
| **[[am-tiet-nhip|Takadimi]]** | Đầu phách luôn là "ta"; nửa phách "di"; móc kép "ta-ka-di-mi" | Âm tiết gắn với **vị trí trong phách**, dùng được cho cả nhịp đơn và nhịp kép, từ sơ cấp đến nâng cao |
::rhythm 4/4 q:ta e:ti-e:ti h:ta–a / e:syn q:co e:pa s:ti-s:ri-s:ti-s:ri q:ta // | Các âm tiết Kodály trong bảng: ta · ti-ti · ta-a / syn-co-pa · ti-ri ti-ri · ta

Nên đọc to tiết tấu trước khi chơi (xem [[kiem-soat-toc-do]]). Nghiên cứu so sánh hiệu quả các hệ thống còn ít.

Kéo dài trường độ: xem [[cham-doi-dau-noi]]. Im lặng: xem [[dau-lang]].
`,
  },
  {
    slug: 'dau-lang',
    title: 'Dấu lặng',
    category: 'rhythm',
    aliases: ['lặng', 'rest', 'lặng tròn', 'lặng trắng', 'lặng đen', 'lặng đơn'],
    summary: 'Ký hiệu cho khoảng im lặng; mỗi hình nốt có một dấu lặng cùng độ dài.',
    wiki: 'Rest_(music)',
    refs: [
      ['Wikipedia — Rest (music)', 'https://en.wikipedia.org/wiki/Rest_(music)'],
      ['MuseScore Handbook — Measure and multimeasure rests', 'https://handbook.musescore.org/notation/rhythm-meter-and-measures/measure-and-multimeasure-rests'],
      ['CPDL forum — Rest grouping in compound meters', 'https://forums1.cpdl.org/phpBB3/viewtopic.php?p=19653'],
    ],
    body: `
Im lặng cũng là một phần của [[tiet-tau|nhịp điệu]] — dấu lặng phải được **đếm** chính xác như nốt.

::img Music rests.svg | Các dấu lặng từ dài đến ngắn

## Phân biệt lặng tròn và lặng trắng
- **Lặng tròn**: khối chữ nhật **treo dưới** dòng 4 (như cái mũ treo móc).
- **Lặng trắng**: khối chữ nhật **ngồi trên** dòng 3 (như cái mũ đội trên đầu).

Lặng tròn còn được dùng để chỉ **im lặng cả ô nhịp**, bất kể [[so-chi-nhip]] là gì (ví dụ cả ô 3/4).

Giá trị các dấu lặng: xem bảng trong [[truong-do]]. Dấu lặng cũng có thể có [[cham-doi-dau-noi|chấm dôi]].

## Lặng nhiều ô nhịp
Trong bè nhạc cụ (ví dụ phần piano trong hoà tấu), nhiều ô nhịp im lặng liên tiếp được gộp thành **một vạch đậm nằm ngang** trên dòng giữa, có **con số** ghi số ô nhịp phía trên. Dấu này phải **ngắt ra** ở chỗ đổi số chỉ nhịp, đổi [[hoa-bieu|hoá biểu]] hoặc vạch kép. Người chơi phải **đếm đủ** số ô nhịp lặng trước khi vào.

## Viết dấu lặng để "lộ" phách
Quy ước chép nhạc: dấu lặng **không được che** vị trí của phách.
- Trong 4/4, không viết một dấu lặng trắng **vắt qua phách 3** (ví dụ từ phách 2 đến phách 3); viết hai dấu lặng đen.
- Trong nhịp kép như 6/8, một phách lặng truyền thống được viết là **lặng đen + lặng đơn** (tổng ba móc đơn); có nguồn chấp nhận lặng đen chấm dôi — đây là quy ước, không phải luật cứng.

## Khi giảng dạy
Dấu lặng được **đếm** như nốt: tay nhấc lên **đúng lúc** dấu lặng bắt đầu, không sớm hơn — im lặng cũng là một phần của [[cach-dien-tau|cách diễn tấu]]. Tên kiểu Anh: lặng tròn = *semibreve rest*, lặng trắng = *minim rest*, lặng đen = *crotchet rest*.
`,
  },
  {
    slug: 'cham-doi-dau-noi',
    title: 'Chấm dôi và dấu nối',
    category: 'rhythm',
    aliases: ['chấm dôi', 'dấu nối', 'tie', 'dotted note', 'nốt chấm dôi', 'chấm dôi kép'],
    summary: 'Hai cách kéo dài trường độ: chấm dôi cộng thêm một nửa giá trị nốt; dấu nối gộp hai nốt cùng cao độ thành một.',
    wiki: 'Dotted_note',
    refs: [
      ['Wikipedia — Dotted note', 'https://en.wikipedia.org/wiki/Dotted_note'],
      ['UNSW Empirical Musicology — Dotted rhythms in Baroque music', 'https://unsw.edu.au/arts-design-architecture/our-schools/arts-media/our-research/research-hubs-networks/empirical-musicology/dotted-rhythms-in-baroque-music'],
      ['Hefling — Rhythmic alteration in 17th- and 18th-century music: notes inégales and overdotting', 'https://www.klondyke.nl/boek/416672/stephen-e-hefling/rhythmic-alteration-in-seventeenth-and-eighteenth-century-music-notes-inegales-and-overdotting'],
      ['Moelants (2011) — The performance of notes inégales', 'https://labs.sonicfield.org/library/the-performance-of-notes-in%C3%A9gales-the-influence-of-tempo-musical-structure-and-i'],
      ['Essays on Music — Historical terms related to inégalité', 'https://essaysonmusic.com/historical-terms-related-to-inegalite-inequality/'],
    ],
    body: `
## Chấm dôi
Dấu chấm sau nốt làm nốt dài thêm **một nửa** giá trị của chính nó.
| Nốt | Phép tính | Tổng (4/4) |
|---|---|---|
| Nốt trắng chấm dôi | 2 + 1 | 3 phách |
| Nốt đen chấm dôi | 1 + ½ | 1½ phách |
| Nốt móc đơn chấm dôi | ½ + ¼ | ¾ phách |

**Chấm dôi kép** (hai chấm) cộng thêm ½ rồi ¼ giá trị: nốt đen chấm dôi kép = 1 + ½ + ¼ = 1¾ phách.

Hình [[tiet-tau|tiết tấu]] "đen chấm dôi + móc đơn" (1½ + ½) rất phổ biến, tạo cảm giác nhún nhảy.
::rhythm 4/4 q. e q. e // | Đen chấm dôi + móc đơn: 1½ + ½ phách

## Dấu nối
Dấu nối là đường cong nối **hai nốt cùng [[cao-do|cao độ]]** — chỉ đánh nốt đầu và giữ luôn cho nốt sau. Dùng khi nốt kéo **qua [[so-chi-nhip|vạch nhịp]]**, hoặc khi cần độ dài không viết được bằng một hình nốt.

::img Music-tie.svg | Dấu nối

Đừng nhầm với **dấu luyến** (slur) — đường cong nối các nốt **khác** cao độ, yêu cầu chơi liền tiếng (xem [[cach-dien-tau]]).

## Chấm dôi trong nhạc Baroque: viết một đằng, chơi một nẻo?
**Chấm dôi kéo dài thêm** (overdotting — thuật ngữ hiện đại): thói quen thời [[thoi-ky-baroque|Baroque]] chơi một số hình chấm dôi **dài hơn** cách viết. Trong **khúc mở màn kiểu Pháp** (French [[the-loai|overture]]), nốt chấm dôi đơn thường được chơi như **chấm dôi kép**, nốt ngắn theo sau bị rút ngắn và chơi **muộn nhất có thể**.
- Tỉ lệ thông thường của "đen chấm dôi + móc đơn" là **3 : 1**; nhiều nguồn cho rằng khúc mở màn kiểu Pháp cần tỉ lệ gắt hơn, khoảng **7 : 1**.
- Thập niên 1960–70, Frederick Neumann đã **phản bác** cách hiểu cực đoan này, gây tranh luận lớn.
- Nghiên cứu thực nghiệm ([[franz-schubert|Schubert]] và Fabian) cho thấy **tỉ lệ chấm dôi** ít ảnh hưởng đến cảm nhận tính chất hơn người ta nghĩ; **cách diễn tấu, tốc độ và [[cuong-do|cường độ]]** quan trọng hơn.

## Notes inégales — nốt "không đều" kiểu Pháp
Ở Pháp khoảng **1690–1780**, các cặp nốt viết **đều nhau** (thường là móc đơn) được chơi **dài – ngắn**.
- Mức "không đều" dao động từ gần như không nhận ra (7 : 5), nhẹ (không quá 2 : 1), vừa (khoảng 3 : 1) đến mạnh; dạng **nhẹ** có lẽ là phổ biến nhất.
- Đo các bản thu hiện đại (Moelants, 2011): tỉ lệ trung bình khoảng **1,63 : 1**, mỗi người chơi khác nhau (1,33 – 1,89), và không đều hơn ở các vị trí quan trọng về phách.
- Đây là thói quen **của nhạc Pháp**: [[francois-couperin|Couperin]] và nhiều tác giả Pháp nói rõ **không áp dụng** cho nhạc nước khác, và nó bị huỷ khi có nốt nhỏ hơn.

Hiện tượng này gần giống cảm giác [[swing]] trong jazz, nhưng là hai truyền thống riêng biệt. Bối cảnh: [[phong-cach-dien-tau]].

Xem thêm: [[truong-do]], [[dao-phach]].
`,
  },
  {
    slug: 'so-chi-nhip',
    title: 'Số chỉ nhịp',
    category: 'rhythm',
    aliases: ['nhịp', 'loại nhịp', 'time signature', 'ô nhịp', 'vạch nhịp', 'nhịp đơn', 'nhịp kép', 'phách mạnh', 'phách nhẹ', '4/4', '3/4', '2/4', '6/8', 'simple meter', 'compound meter', 'meter'],
    summary: 'Hai con số ở đầu bản nhạc: số trên là số phách trong một ô nhịp, số dưới là hình nốt được tính làm một phách.',
    wiki: 'Time_signature',
    refs: [
      ['Wikipedia — Alla breve', 'https://en.wikipedia.org/wiki/Alla_breve'],
      ['Britannica — Time signature', 'https://www.britannica.com/art/time-signature'],
      ['Kazu Suwa — The origin of modern note values and time signatures: alla breve and common time', 'https://www.kazu-classicalguitar.co.uk/essays/tempi/part2-origin-modern-note-value-and-time-signature'],
      ['My Music Theory — Time signatures: 4/4 or C?', 'https://mymusictheory.com/more-music-theory-topics/time-signatures-4-4-or-c/'],
    ],
    body: `
Bản nhạc được chia thành các **ô nhịp** bằng **vạch nhịp**. Số chỉ nhịp cho biết mỗi ô nhịp chứa bao nhiêu [[truong-do|trường độ]].
| Nhịp | Ý nghĩa | Phách mạnh – nhẹ | Gặp trong |
|---|---|---|---|
| 2/4 | 2 phách, nốt đen = 1 phách | M – n | Hành khúc, polka |
| 3/4 | 3 phách, nốt đen = 1 phách | M – n – n | Valse, [[minuet-va-trio|minuet]] |
| 4/4 | 4 phách, nốt đen = 1 phách | M – n – m – n | Pop, rock, phần lớn nhạc |
| 2/2 | 2 phách, nốt trắng = 1 phách | M – n | Hành khúc nhanh |
| 6/8 | 6 nốt móc đơn, nhóm 3+3 | M – n – n – m – n – n | Barcarolle, [[dieu-dem-pho-bien|ballad]] đung đưa |

(M = mạnh, m = mạnh vừa, n = nhẹ)

## Nhịp đơn và nhịp kép
- **Nhịp đơn** (2/4, 3/4, 4/4): mỗi phách **chia đôi**.
- **Nhịp kép** (6/8, 9/8, 12/8): mỗi phách là nốt đen [[cham-doi-dau-noi|chấm dôi]], **chia ba**. 6/8 thực chất có **2 phách lớn**, không phải 6.

## Ký hiệu đặc biệt
::img Common time.svg | Chữ C — "common time", tương đương 4/4

Chữ C có gạch dọc là **alla breve** (cut time), tương đương 2/2.

## Chữ "C" không phải viết tắt của "common"
Ký hiệu **C** bắt nguồn từ **[[ky-am|ký âm]] định lượng** thời [[thoi-ky-trung-co|Trung cổ]] – [[thoi-ky-phuc-hung|Phục hưng]] (khoảng 1260–1600):
- Nhịp **ba** được gọi là *tempus perfectum* ("thời hoàn hảo"), ký hiệu bằng **vòng tròn kín** — gắn với ý niệm Chúa Ba Ngôi.
- Nhịp **đôi** là *tempus imperfectum* ("thời chưa hoàn hảo"), ký hiệu bằng **vòng tròn hở** — trông giống chữ C.
- Vạch dọc qua vòng tròn hở là dấu **"rút gọn"**: chơi nhanh gấp đôi. Từ đó có **alla breve** — nốt *breve* chiếm thời gian vốn của *semibreve*.

Về sau, C được hiểu là **4 phách** mỗi ô, và tiếng Anh gọi là "common time" — một cách gọi muộn, không phải nguồn gốc của ký hiệu.

## Khi giảng dạy
- **6/8 có hai phách**, không phải sáu: đếm theo phách lớn, ví dụ "**1**-2-3 **2**-2-3", hoặc dùng hệ thống đếm gắn với vị trí trong phách như [[am-tiet-nhip|Takadimi]] (xem [[truong-do]]).
- Phân biệt **3/4** (ba phách, mỗi phách chia đôi) với **6/8** (hai phách, mỗi phách chia ba) dù cả hai đều có 6 móc đơn — xem [[hemiola]].
::rhythm 3/4 >e-e >e-e >e-e // | 3/4: ba phách, mỗi phách chia đôi
::rhythm 6/8 >e-e-e >e-e-e // | 6/8: hai phách lớn, mỗi phách chia ba — cùng 6 móc đơn nhưng nhóm khác

## Nhịp lẻ
5/4, 7/8… ghép từ các nhóm 2 và 3 (ví dụ 7/8 = 2+2+3), thường gặp trong nhạc dân gian Balkan và jazz — xem [[nhip-hon-hop]].

Xem thêm: [[nhip-do]], [[nhip-lay-da]], [[dao-phach]], [[hemiola]].
`,
  },
  {
    slug: 'nhip-do',
    title: 'Nhịp độ',
    category: 'rhythm',
    aliases: ['tempo', 'tốc độ', 'BPM', 'máy đếm nhịp', 'Allegro', 'Andante', 'Adagio', 'Largo', 'Presto', 'Moderato', 'ritardando', 'accelerando', 'tempo marking', 'thuật ngữ nhịp độ'],
    summary: 'Tốc độ của bản nhạc, đo bằng số phách mỗi phút (BPM) hoặc ghi bằng thuật ngữ tiếng Ý.',
    wiki: 'Tempo',
    refs: [
      ['Wikipedia — Metronome', 'https://en.wikipedia.org/wiki/Metronome'],
      ['Cambridge University Press — Maelzel\'s metronome (chapter)', 'https://www.cambridge.org/core/books/measure/maelzels-metronome/720B9ED61CD844C8619AD0C8EEC2AB72'],
      ['Linda Hall Library — Johann Nepomuk Maelzel', 'https://www.lindahall.org/about/news/scientist-of-the-day/johann-nepomuk-maelzel/'],
      ['Boston Baroque — Reflections on Beethoven\'s metronome markings', 'https://baroque.boston/beethoven-metronome-markings'],
      ['Kazu Suwa — Allegro and the origin of modern tempo marking', 'https://www.kazu-classicalguitar.co.uk/es/node/258'],
      ['Encyclopedia.com — Rubato', 'https://encyclopedia.com/literature-and-arts/performing-arts/music-history/rubato'],
    ],
    body: `
Nhịp độ được ghi ở đầu bản nhạc, phía trên [[so-chi-nhip]]: bằng con số máy đếm nhịp (ví dụ ♩ = 120 nghĩa là 120 [[truong-do|nốt đen]] mỗi phút) hoặc bằng thuật ngữ.

## Thuật ngữ nhịp độ (chậm → nhanh)
| Thuật ngữ | Nghĩa | BPM tham khảo |
|---|---|---|
| Grave | Trang nghiêm, rất chậm | 25–45 |
| Largo | Rộng rãi, chậm | 40–60 |
| Adagio | Chậm, thong thả | 55–75 |
| Andante | Đi bộ, vừa phải hơi chậm | 75–105 |
| Moderato | Vừa phải | 100–120 |
| Allegretto | Hơi nhanh | 100–128 |
| Allegro | Nhanh, vui tươi | 120–160 |
| Vivace | Sống động | 155–175 |
| Presto | Rất nhanh | 170–200 |
| Prestissimo | Nhanh nhất có thể | > 200 |

Khoảng BPM chỉ mang tính tham khảo; người biểu diễn quyết định dựa trên tính chất bản nhạc.

## Thay đổi nhịp độ
| Thuật ngữ | Viết tắt | Nghĩa |
|---|---|---|
| ritardando | rit. | Chậm dần |
| rallentando | rall. | Chậm dần |
| accelerando | accel. | Nhanh dần |
| a tempo | | Trở lại nhịp độ ban đầu |
| [[rubato]] | | Co giãn nhịp tự do để biểu cảm |
| fermata | 𝄐 | Ngân dài tuỳ ý (xem [[cach-dien-tau]]) |

Thuật ngữ về tính chất (dolce, cantabile…): xem [[thuat-ngu]].

## Thuật ngữ vốn chỉ tính chất, không chỉ tốc độ
- **Allegro** trong tiếng Ý nghĩa là "**vui tươi, sống động**". Từ điển của Brossard (1703) định nghĩa nó là "rất sinh động", "vui vẻ" — tốc độ còn mơ hồ; đến bản in London 1769 mới thêm ý "nhanh nhẹn… nhưng không vội vã".
- **Presto** ở thế kỷ 17–18 chỉ có nghĩa "**nhanh**", chưa phải "cực nhanh".
- **Andante** từ động từ *andare* — "đi". Mức tốc độ cụ thể **tuỳ người chơi**.
- Các khoảng BPM trong bảng trên là **quy ước hiện đại**, hình thành dần trong thế kỷ 19 nhờ máy đếm nhịp; mỗi tài liệu đưa ra khoảng hơi khác nhau.

## Lịch sử máy đếm nhịp
- **Dietrich Nikolaus Winkel** ở Amsterdam chế tạo cơ cấu con lắc ngược (khoảng 1814–1815). **Johann Nepomuk Maelzel** thêm **thang số**, đặt tên "**metronome**" (Hy Lạp: *metron* — đo + *nomos* — luật), lấy **bằng sáng chế Pháp ngày 14/9/1815** và sản xuất hàng loạt từ 1816. Một hội đồng Hà Lan sau đó xác nhận Winkel có trước, nhưng tên tuổi vẫn gắn với Maelzel.
- Ký hiệu **M.M.** trên bản nhạc nghĩa là "**Maelzel's Metronome**".
- [[Beethoven]] là nhà soạn nhạc lớn đầu tiên ghi số metronome: dấu đầu tiên vào tháng 12/1815; bảng tốc độ cho **8 bản [[the-loai|giao hưởng]]** được đăng tháng 12/1817. Trong thư năm 1817, ông còn nói muốn **bỏ hẳn** các từ tiếng Ý.

## Tranh cãi: Sonata "Hammerklavier"
Op. 106 là [[hinh-thuc-sonata|sonata]] piano **duy nhất** của Beethoven có số metronome. Chương 1 ghi **nốt trắng = 138** — nhanh đến mức Moscheles, trong bản in của mình, đã đổi thành nốt đen = 138. Nhiều học giả và người chơi cho rằng nốt trắng = 138 là ý của Beethoven, nhưng phần lớn chơi chậm hơn. Các số metronome của Beethoven nói chung bị coi là **quá nhanh**; có giả thuyết cho rằng máy của ông bị hỏng, có giả thuyết khác cho rằng chúng khớp với bảng tốc độ do chính Maelzel đề xuất.

## Rubato
**Tempo rubato** ("thời gian bị đánh cắp") là sự co giãn nhịp độ để biểu cảm. Cách hiểu thay đổi theo thời kỳ — ở thời [[wolfgang-amadeus-mozart|Mozart]] và [[frederic-chopin|Chopin]], phần đệm thường được giữ đều trong khi [[giai-dieu|giai điệu]] tự do (xem [[phong-cach-dien-tau]]). Bài đầy đủ: [[rubato]]. Nghiên cứu về cách người biểu diễn uốn nhịp theo câu: [[dien-dat-cau-nhac]]. Cách tập với máy đếm nhịp: [[kiem-soat-toc-do]].
`,
  },
  {
    slug: 'lien-ba',
    title: 'Liên ba',
    category: 'rhythm',
    aliases: ['chùm ba', 'triplet', 'tuplet', 'liên năm', 'liên sáu', 'liên hai', 'nhóm liên'],
    summary: 'Nhóm ba nốt chơi trong thời gian của hai nốt cùng loại — cách chia ba một phách trong nhịp đơn.',
    wiki: 'Tuplet',
    refs: [
      ['Wikipedia — Tuplet', 'https://en.wikipedia.org/wiki/Tuplet'],
      ['Baylor Open Books — Polyrhythms: two against three and three against two', 'https://openbooks.library.baylor.edu/rhythm/chapter/12/'],
      ['Sussex Jazz Magazine — "Nice cup of tea" drill', 'https://www.sussexjazzmag.com/?p=968'],
    ],
    body: `
Trong nhịp đơn, phách bình thường chỉ chia đôi. Muốn chia ba, ta dùng **liên ba**: ba nốt viết kèm số **3**, chơi trong thời gian của hai nốt.

::img Music-triplet.svg | Liên ba móc đơn: 3 nốt trong thời gian 1 nốt đen

| Nhóm | Chơi trong thời gian của |
|---|---|
| Liên ba móc đơn | 1 [[truong-do|nốt đen]] (2 móc đơn) |
| Liên ba nốt đen | 1 nốt trắng (2 nốt đen) |
| Liên năm móc kép | 1 nốt đen (4 móc kép) |
| Liên sáu móc kép | 1 nốt đen (4 móc kép) |
| Liên hai (trong nhịp kép) | 1 nốt đen [[cham-doi-dau-noi|chấm dôi]] (3 móc đơn) |

## Mẹo luyện
- Đếm "**1**-la-li **2**-la-li" cho liên ba, chia đều ba phần.
- Bài khó kinh điển cho piano: **3 chọi 2** (tay phải liên ba, tay trái hai nốt). Câu gợi nhớ: "nice cup of tea" — tay trái đánh ở "nice" và "of".

So sánh với [[so-chi-nhip|nhịp kép]], nơi phách vốn đã chia ba. Nâng cao: [[da-nhip]] (đa tiết tấu), [[swing]] (móc đơn chơi theo cảm giác liên ba).

## Đọc số trên nhóm liên
Con số trên nhóm cho biết **bao nhiêu nốt** được nhét vào; nhóm đó chiếm thời gian của **số nốt cùng loại gần nhất bên dưới** trong nhịp đơn (3 trong thời gian của 2, 5 hoặc 6 trong thời gian của 4…). Khi không rõ, người chép nhạc có thể ghi **tỉ lệ**, ví dụ "3:2".

## Khi giảng dạy
- Ba nốt liên ba phải **chia đều** phách — không phải "dài – ngắn – ngắn".
- Câu "**nice cup of tea**": cả ba âm "nice – cup – tea" là nhóm 3, còn "nice – of" là nhóm 2; hai tay chỉ trùng nhau ở "nice". Xem thêm [[phoi-hop-hai-tay]].
`,
  },
  {
    slug: 'dao-phach',
    title: 'Đảo phách',
    category: 'rhythm',
    aliases: ['nghịch phách', 'syncopation', 'syncope', 'nhấn lệch phách'],
    summary: 'Việc nhấn vào phách nhẹ hoặc phần nhẹ của phách, làm lệch trọng âm tự nhiên của nhịp.',
    wiki: 'Syncopation',
    refs: [
      ['Etymonline — syncopation', 'https://www.etymonline.com/word/syncopation'],
      ['EBSCO Research Starters — Joplin popularizes ragtime music and dance', 'https://ebsco.com/research-starters/music/joplin-popularizes-ragtime-music-and-dance'],
      ['The Canadian Encyclopedia — Ragtime', 'https://thecanadianencyclopedia.ca/en/article/ragtime-emc'],
      ['PTNA Piano Encyclopedia — Joplin, Maple Leaf Rag', 'https://enc.piano.or.jp/en/musics/85'],
    ],
    body: `
Mỗi [[so-chi-nhip]] có quy luật phách mạnh – nhẹ. **Đảo phách** xảy ra khi trọng âm rơi vào chỗ lẽ ra nhẹ, tạo cảm giác bất ngờ, cuốn hút.

## Các cách tạo đảo phách
- **Nốt dài bắt đầu ở phách nhẹ**: ví dụ trong 4/4: móc đơn – đen – móc đơn ([[truong-do|nốt đen]] rơi giữa phách).
- **[[cham-doi-dau-noi|Dấu nối]] qua phách mạnh**: nốt bắt đầu trước phách mạnh và ngân qua nó, nên phách mạnh không được đánh.
- **Dấu nhấn (>)** đặt trên phách nhẹ (xem [[cach-dien-tau]]).
- **[[dau-lang|Dấu lặng]] ở phách mạnh**.
::rhythm 4/4 e q e q q // | Móc đơn – đen – móc đơn: nốt đen bắt đầu giữa phách 1 và ngân qua phách 2
::rhythm 4/4 q q q q~ / q q h // | Dấu nối qua vạch nhịp: phách 1 của ô sau không được đánh
::rhythm 4/4 q >q q >q // | Dấu nhấn trên phách nhẹ (phách 2 và 4)
::rhythm 4/4 rq q q q // | Dấu lặng ở phách mạnh (phách 1)

Đảo phách là linh hồn của [[phong-cach-jazz|ragtime]], jazz, Latin, funk và pop hiện đại (xem [[swing]]). Một dạng đảo phách có tổ chức trong nhạc cổ điển: [[hemiola]].

## Tên gọi
"Syncopation" đến từ tiếng Hy Lạp *synkopē* — *syn* (cùng) + *koptein* (cắt): "**cắt ngắn**". Thế kỷ 16 nó chỉ việc **lược âm** trong từ ngữ; nghĩa âm nhạc có từ thập niên 1660. Từ "syncopated" chỉ [[tiet-tau|tiết tấu]] theo nghĩa hiện đại phổ biến từ khoảng 1908 — ban đầu gắn với **ragtime**.

## Ragtime: đảo phách trên nền nhịp đều
- **"Maple Leaf Rag"** (1899) của [[Joplin|Scott Joplin]] là tác phẩm ragtime nổi tiếng nhất; theo một nguồn, đây là bản nhạc đầu tiên bán được **hơn một triệu bản in** ở Mỹ.
- Cảm giác "rách" (*ragged*) của ragtime đến từ sự **căng thẳng** giữa phần đệm **đều đặn** ở bè trầm và [[giai-dieu|giai điệu]] **đảo phách** ở bè trên. Một phân tích còn chỉ ra các trọng âm lặp đều tạo nhóm **3** trên nền nhịp **2** — gần với [[hemiola]].
- Kỹ thuật tay trái đều: xem [[dem-hat-piano|đệm stride]].

## Khi giảng dạy
Đảo phách chỉ "nghe ra" khi **phách mạnh vẫn được cảm nhận** dù không được đánh. Cho học sinh **đếm to hoặc dậm chân** theo phách trong khi tay chơi nốt đảo phách; nếu mạch phách bị trôi, đảo phách sẽ nghe như chơi sai nhịp (xem [[cam-nhan-phach]]).

Xem thêm: [[am-giai-blues]], [[blues-12-nhip]].
`,
  },
  {
    slug: 'nhip-lay-da',
    title: 'Nhịp lấy đà',
    category: 'rhythm',
    aliases: ['ô nhịp lấy đà', 'anacrusis', 'pickup', 'upbeat', 'nhịp thiếu'],
    summary: 'Một hoặc vài nốt đứng trước ô nhịp đầy đủ đầu tiên, dẫn vào phách mạnh.',
    wiki: 'Anacrusis',
    refs: [
      ['Britannica — Anacrusis', 'https://www.britannica.com/art/anacrusis'],
      ['Wikipedia — Anacrusis', 'https://en.wikipedia.org/wiki/Anacrusis'],
    ],
    body: `
Nhiều [[giai-dieu|giai điệu]] không bắt đầu ở phách mạnh mà bắt đầu bằng vài nốt "lấy đà". Ô nhịp chứa các nốt này là một **ô nhịp thiếu**.

## Quy tắc bù trừ
Theo truyền thống, **ô nhịp cuối** bài sẽ thiếu đúng phần mà ô lấy đà đã dùng, để tổng hai ô cộng lại bằng một ô đầy đủ. Ví dụ bài 3/4 có lấy đà 1 phách → ô cuối có 2 phách.
::rhythm 3/4 q / q q q / q q q / h // | Ô lấy đà 1 phách + ô cuối 2 phách = một ô 3/4 đầy đủ

## Ví dụ quen thuộc
- "Happy Birthday" (3/4) bắt đầu bằng 2 nốt lấy đà "Hap-py".
- Quốc ca Mỹ "The Star-Spangled Banner" bắt đầu bằng hai nốt lấy đà "O-oh".
- "[[phan-tich-fur-elise|Für Elise]]" ([[ludwig-van-beethoven|Beethoven]]) bắt đầu bằng nốt lấy đà E5 – D♯5 trước ô nhịp đầu tiên.
::staff treble E5 D#5 | Hai nốt lấy đà của Für Elise: E5 – D♯5

## Tên gọi
"Anacrusis" vốn là thuật ngữ **thi ca**: những âm tiết ở đầu câu thơ **không tính** vào nhịp thơ. Từ gốc Hy Lạp *anakrousis* — "sự đẩy lùi", "sự bắt đầu một giai điệu" (*ana-* "lùi lại" + *krouein* "gõ").

## Nhịp lấy đà và câu nhạc
Nốt lấy đà là **phách nhẹ dẫn vào phách mạnh**, nên không chơi nặng như một phách mạnh. Khi một bài bắt đầu bằng nhịp lấy đà, các [[cau-nhac|câu nhạc]] sau cũng có thể **bắt đầu từ phách nhẹ** — ranh giới câu nằm **trước vạch nhịp**, không phải ở vạch nhịp. Đây là điều cần chỉ cho học sinh để các em "thở" đúng chỗ (xem [[dien-dat-cau-nhac]]).

Khi đếm, hãy đếm cả các phách còn thiếu trước nốt lấy đà để vào đúng nhịp. Xem thêm [[so-chi-nhip]], [[cau-nhac]].
`,
  },
  {
    slug: 'nhip-hon-hop',
    title: 'Nhịp lẻ và nhịp thay đổi',
    category: 'rhythm',
    aliases: ['nhịp lẻ', 'nhịp hỗn hợp', 'asymmetric meter', 'odd meter', '5/4', '7/8', 'nhịp thay đổi', 'changing meter', 'nhịp cộng', 'additive meter', 'aksak'],
    summary: 'Nhịp có phách không đều (5/8, 7/8 ghép từ nhóm 2 và 3) và nhịp đổi liên tục giữa các ô — đặc trưng của nhạc dân gian Đông Âu và thế kỷ 20.',
    wiki: 'Metre_(music)',
    refs: [
      ['Wikipedia — Take Five', 'https://en.wikipedia.org/wiki/Take_Five'],
      ['Boston Symphony Orchestra — Holst, The Planets', 'https://bso.org/works/the-planets'],
      ['Henle — Bartók, Six Dances in Bulgarian Rhythm from Mikrokosmos', 'https://www.henle.de/Six-Dances-in-Bulgarian-Rhythm-from-Mikrokosmos/HN-1411'],
    ],
    body: `
## Nhịp lẻ (nhịp cộng)
Ô nhịp gồm các nhóm phách **dài – ngắn không đều**, ghép từ nhóm 2 và 3 [[truong-do|nốt móc đơn]]:
| Nhịp | Cách chia thường gặp | Ví dụ |
|---|---|---|
| 5/4 | 3 + 2 | "Take Five" ([[dave-brubeck|Dave Brubeck]]), "Mars" ([[gustav-holst|Holst]]) |
| 5/8 | 2 + 3 hoặc 3 + 2 | Nhạc dân gian Hy Lạp, Bulgaria |
| 7/8 | 2 + 2 + 3, 3 + 2 + 2 | Nhạc Balkan, "Money" (Pink Floyd, 7/4) |
| 9/8 | 2 + 2 + 2 + 3 | "Blue [[rondo|Rondo]] à la Turk" (Brubeck) |

Lưu ý: 9/8 thông thường là [[so-chi-nhip|nhịp kép]] 3 + 3 + 3; cách chia 2 + 2 + 2 + 3 là nhịp lẻ "aksak" (khập khiễng).
::rhythm 5/4 >q q q >q q // | 5/4 chia 3 + 2
::rhythm 7/8 >e:1-e:2 >e:1-e:2 >e:1-e:2-e:3 // | 7/8 chia 2 + 2 + 3: nhấn đầu mỗi nhóm

## Nhịp thay đổi
Số chỉ nhịp đổi ở nhiều ô nhịp liên tiếp (3/16 – 2/16 – 3/16 – 5/16…). [[igor-stravinsky|Stravinsky]], "Le Sacre du printemps" (1913), phần "Danse sacrale" là ví dụ kinh điển; Bartók dùng nhiều trong bộ "Mikrokosmos" cho piano.

## Ba tác phẩm tiêu biểu
- **"Take Five"** — Paul Desmond sáng tác, Dave Brubeck Quartet thu năm **1959** trong album *Time Out*. Tay trống Joe Morello đề nghị một bài nhịp **5/4**, và tên bài lấy từ chính số chỉ nhịp. Mỗi bài trong album dùng một nhịp khác nhau, lấy cảm hứng từ chuyến lưu diễn Âu – Á năm 1958 của nhóm.
- **"Mars"** trong *The Planets* của Holst — phác thảo mùa hè 1914; nhịp **5/4** cùng [[motif|motif]] [[tiet-tau|tiết tấu]] dai dẳng tạo không khí chiến tranh.
- **[[Bartók]] — "Sáu vũ khúc theo nhịp Bulgaria"**: phần kết của tuyển tập *Mikrokosmos* (1939–40), dựa trên các nhịp **lẻ** của nhạc dân gian Bulgaria. Trong "nhịp Bulgaria" của Bartók, đơn vị móc đơn **luôn hiện diện** — người chơi đếm bằng móc đơn và nhóm chúng thành 2 và 3. Đây là chất liệu piano kinh điển để dạy nhịp lẻ.

## Mẹo đếm
Đếm theo nhóm, nhấn đầu mỗi nhóm: 7/8 (2+2+3) = "**1**-2 **1**-2 **1**-2-3". Liên quan: [[da-nhip]], [[cac-thoi-ky]].
`,
  },
  {
    slug: 'hemiola',
    title: 'Hemiola',
    category: 'rhythm',
    aliases: ['hemiolia', 'nhịp 3 thành 2', 'chuyển nhóm phách'],
    summary: 'Hai ô nhịp 3 phách được nhấn như thể ba nhóm 2 phách (3 × 2 thành 2 × 3) — thường xuất hiện ngay trước kết.',
    wiki: 'Hemiola',
    refs: [
      ['Wikipedia — Hemiola', 'https://en.wikipedia.org/wiki/Hemiola'],
      ['LilyPond — Music glossary: hemiola', 'https://lilypond.org/doc/v2.24/Documentation/music-glossary/hemiola'],
      ['Music Theory Online — "Brahms in the New Century": a conference report', 'https://www.mtosmt.org/issues/mto.12.18.2/mto.12.18.2.platt.php'],
    ],
    body: `
Trong [[so-chi-nhip|nhịp 3/4]], hai ô nhịp có 6 phách: bình thường nhóm **3 + 3**. Hemiola nhóm lại thành **2 + 2 + 2** — như thể tạm thời chuyển sang một ô 3/2.

| | Phách 1 | 2 | 3 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| Bình thường | **M** | n | n | **M** | n | n |
| Hemiola | **M** | n | **M** | n | **M** | n |

::img Mozart piano sonata K332 hemiola excerpt.svg | Hemiola ở hai ô nhịp sau trong Sonata K. 332 của Mozart

## Ở đâu?
- **Kết câu** trong vũ khúc [[thoi-ky-baroque|Baroque]] (courante, [[minuet-va-trio|minuet]], sarabande) — hemiola làm chậm lại cảm giác nhịp ngay trước [[cau-ket]].
- Brahms dùng rất nhiều để tạo sự mơ hồ về nhịp.
- Trong 6/8 ↔ 3/4: cùng 6 [[truong-do|nốt móc đơn]], nhóm 3+3 hay 2+2+2 — rất phổ biến trong nhạc Mỹ Latin ("America" trong West Side Story).

Hemiola là một dạng [[dao-phach]] có tổ chức và họ hàng gần với [[da-nhip]] (3 chọi 2 theo thời gian nối tiếp thay vì đồng thời).

## Tên gọi
Từ tiếng Hy Lạp *hēmiolios* — "**một rưỡi**", tức tỉ lệ **3 : 2** (tiếng Latin tương đương: *sesquialtera*). Từ này có hai nghĩa: về [[tiet-tau|tiết tấu]] là ba phách bằng nhau trong thời gian vốn của hai; về [[cao-do|cao độ]] là [[quang|quãng 5 đúng]] (tỉ lệ [[am-hoc-co-ban|tần số]] 3 : 2).

## Lịch sử
Việc chuyển qua lại giữa 6/4 và 3/2 đã rất phổ biến ở **thế kỷ 15** (Dunstable, Dufay) và trong **nhạc Baroque**, nơi nó là **đặc trưng của điệu courante** và thường xuất hiện ngay trước [[cau-ket|kết]] như một "hiệu ứng" làm chậm và nhấn mạnh. Ở [[Brahms]], hemiola được nghiên cứu như một cách **giải toả** những xung đột tiết tấu trước đó, làm dịu sức căng trước kết — ví dụ chương 1 [[hinh-thuc-sonata|Sonata]] piano Op. 5.

## Khi giảng dạy
Khi học vũ khúc Baroque ở nhịp 3 (minuet, courante, sarabande), hãy cho học sinh **tìm hemiola trước mỗi chỗ kết** và đánh dấu trên bản nhạc — nhấn theo nhóm 2 phách ở đó thay vì nhấn phách 1 của mỗi ô.
`,
  },
  {
    slug: 'da-nhip',
    title: 'Đa nhịp',
    category: 'rhythm',
    aliases: ['polyrhythm', 'đa tiết tấu', 'polymeter', 'nhịp chéo', 'cross-rhythm', '3 chọi 2', '4 chọi 3'],
    summary: 'Hai (hoặc nhiều) cách chia phách khác nhau vang cùng lúc, như 3 nốt chọi 2 nốt — hoặc hai số chỉ nhịp chồng lên nhau.',
    wiki: 'Polyrhythm',
    refs: [
      ['Baylor Open Books — Polyrhythms: two against three and three against two', 'https://openbooks.library.baylor.edu/rhythm/chapter/12/'],
      ['Music Theory Online — Taylor (1997), Chopin, Pygmies, and tempo fugue: Ligeti\'s "Automne à Varsovie"', 'https://www.mtosmt.org/issues/mto.97.3.3/mto.97.3.3.taylor.php'],
      ['Wikipedia — Études (Ligeti)', 'https://en.wikipedia.org/wiki/%C3%89tudes_(Ligeti)'],
      ['Hollywood Bowl — Ligeti Études program notes', 'https://www.hollywoodbowl.com/musicdb/pieces/4980/etude-no-3-touches-bloquees'],
    ],
    body: `
## Đa tiết tấu (polyrhythm)
Trong cùng một khoảng thời gian, một bè chia 3, bè kia chia 2 (hoặc 4 chọi 3, 5 chọi 4…). Cách viết dùng [[lien-ba]].

## Cách luyện: tìm bội số chung nhỏ nhất
**3 chọi 2** → chia phách thành **6** phần nhỏ:
| Phần | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Tay phải (3) | ● | | ● | | ● | |
| Tay trái (2) | ● | | | ● | | |
| Kết hợp | cả hai | | phải | trái | phải | |

Câu gợi nhớ: "**nice cup of tea**" (nhóm 3: nice – cup – tea; nhóm 2: nice – of). Với **4 chọi 3**: chia 12 phần — "**pass** the **gol**-den **but**-ter" (các âm in đậm là nhóm 3). Các câu này là mẹo dạy học được truyền miệng, có nhiều biến thể.
::rhythm 2/4 3[q:nice-q:cup-q:tea] // | Tay phải: 3 nốt (liên ba đen) trong một ô 2/4
::rhythm 2/4 q:nice q:of // | Tay trái: 2 nốt đen trong cùng ô đó — nốt đầu trùng nhau, các nốt sau xen kẽ

## Đa nhịp (polymeter)
Hai bè có **độ dài [[so-chi-nhip|ô nhịp]] khác nhau**: ví dụ một bè lặp mẫu 3 phách, bè kia lặp mẫu 4 phách — sau 12 phách chúng mới gặp lại ở phách đầu. Rất phổ biến trong nhạc châu Phi, nhạc [[toi-gian]] và progressive rock.

## Ligeti và nhạc Trung Phi
Năm 1982, [[Ligeti]] nghe các bản thu nhạc của người **Banda-Linda** (Cộng hoà Trung Phi) do nhà dân tộc nhạc học **Simha Arom** thực hiện, và mô tả đó là thứ âm nhạc "[[doi-am|phức điệu]], đa tiết tấu với độ phức tạp đáng kinh ngạc". Ý tưởng của Arom về một **[[cam-nhan-phach|mạch phách]] nhanh, đều, không phân cấp** (thay cho ô nhịp châu Âu) trở thành nền tảng cho các **Étude piano** của Ligeti, cùng với âm nhạc của Conlon Nancarrow, [[frederic-chopin|Chopin]] và [[claude-debussy|Debussy]].
- **Étude số 1 "Désordre"** (1985): tay phải chỉ chơi **phím trắng**, tay trái chỉ chơi **phím đen**; [[cau-nhac|câu nhạc]] tay phải **ngắn đi một móc đơn** mỗi lần lặp, nên trọng âm hai tay **trôi lệch** dần nhau. Theo Ligeti, người chơi giữ một [[kiem-soat-toc-do|nhịp đều]], nhưng cách phân bố trọng âm không đều tạo ra những hình dạng **tưởng như hỗn loạn**.
- Ông dùng các tỉ lệ phức tạp như 3 : 5, 5 : 7, thậm chí 3 : 4 : 5 : 7 thay vì 2 chọi 3 đơn giản.

Liên quan: [[hemiola]], [[nhip-hon-hop]]. Cách tập đa nhịp hai tay trên piano: [[phoi-hop-hai-tay]].
`,
  },
  {
    slug: 'cam-nhan-phach',
    title: 'Cảm nhận phách',
    category: 'rhythm',
    also: ['listening'],
    aliases: ['mạch phách', 'beat perception', 'cảm nhịp', 'giữ phách', 'groove', 'đồng bộ nhịp', 'vận động theo nhịp'],
    summary: 'Khả năng nghe ra phách có từ khi mới sinh, được củng cố bằng vận động cơ thể và luyện tập; nghiên cứu cho thấy người học nhạc đồng bộ nhịp chính xác hơn.',
    refs: [
      ['Winkler et al. (2009), PNAS — Newborn infants detect the beat in music', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2631079'],
      ['Phillips-Silver & Trainor (2005), Science — Feeling the beat: movement influences infant rhythm perception (PDF)', 'https://trainorlab.mcmaster.ca/publications/pdfs/PhillipsSilverScience05.pdf'],
      ['Gerry, Faux & Trainor (2010) — Effects of Kindermusik training on infants\' rhythmic enculturation', 'https://trainorlab.mcmaster.ca/publications/GerryEtAl2010'],
      ['Frontiers in Computer Science (2025) — Sensorimotor synchronization in musicians and non-musicians', 'https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1595939/full'],
      ['Frontiers in Psychology (2014) — Groove research', 'https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00894/full'],
      ['Mishra (2014) — Factors related to sight-reading accuracy / rhythmic sight-reading meta-analyses', 'https://profiles.umsl.edu/en/publications/improving-sightreading-accuracy-a-meta-analysis/'],
    ],
    body: `
**Phách** là mạch đều mà ta cảm nhận được bên dưới âm nhạc — thứ khiến ta gõ chân theo. Mọi khái niệm khác trong nhóm này ([[so-chi-nhip]], [[dao-phach]], [[hemiola]], [[da-nhip]]) đều chỉ có nghĩa khi người chơi **cảm được phách**.

## Có từ khi mới sinh
- **Winkler và cộng sự (2009)** đo điện não trẻ sơ sinh: khi **phách mạnh bị bỏ đi** trong một mẫu [[tiet-tau|tiết tấu]], não trẻ phản ứng như khi gặp điều trái với dự đoán — dù phách đó không được đánh dấu bằng trọng âm. Nhóm tác giả kết luận khả năng nhận ra phách là **bẩm sinh** (dù câu hỏi bẩm sinh hay học được chưa hoàn toàn ngã ngũ).

## Cơ thể dạy tai
- **Phillips-Silver và Trainor (2005)**: 16 trẻ 7 tháng tuổi được **nhún theo** một mẫu tiết tấu mơ hồ — nhóm nhún mỗi 2 phách, nhóm nhún mỗi 3 phách. Sau đó, trẻ "nghe" mẫu đó như **nhịp 2 (hành khúc)** hoặc **nhịp 3 (valse)** tuỳ theo cách mình đã được nhún. Trẻ chỉ **nhìn** người khác nhún thì không có hiệu ứng: chính **chuyển động của cơ thể mình** mới quyết định.
- Một nghiên cứu sau (Gerry, Faux và Trainor, 2010) thấy các lớp nhạc cho trẻ nhỏ giúp phát triển sớm hơn cảm nhận nhịp theo văn hoá.

## Người học nhạc đồng bộ tốt hơn
Các nghiên cứu gõ nhịp cho thấy người học nhạc **gõ chính xác và ổn định hơn** khi theo một mạch phách bên ngoài. Tuy vậy, kết quả từ bài gõ ngón đơn giản có thể **không hoàn toàn áp dụng** cho các chuyển động phức tạp khi chơi đàn.

## "Groove"
**Groove** là cảm giác **muốn chuyển động** (gõ chân, nhún người) khi nghe nhạc. Chưa có một định nghĩa thống nhất, nhưng người nghe — kể cả người không học nhạc — **đánh giá khá giống nhau** về độ "groove" của một bản nhạc.

## Áp dụng khi dạy
- **Cho cơ thể tham gia**: nhún, bước, vỗ tay theo phách trước khi chơi. Đây cũng là nền tảng của phương pháp **Dalcroze** (xem [[phuong-phap-giao-duc-am-nhac]]).
- **Đếm to** và dùng một hệ thống đếm nhất quán (xem [[truong-do]]). Tổng hợp nghiên cứu về [[am-tiet-nhip|đọc tiết tấu]] cho thấy các phương pháp dùng **hệ thống đếm** và **vận động cơ thể** có hiệu quả (xem [[thi-tau]]).
- Dùng [[kiem-soat-toc-do|máy đếm nhịp]] để **kiểm tra**, nhưng mục tiêu là học sinh giữ được **mạch phách bên trong** khi tắt máy.
`,
  },
]
