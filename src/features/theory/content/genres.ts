import type { Article } from '../wiki'

/**
 * Mục Thể loại âm nhạc: các thể loại từ Trung cổ đến nay, mỗi bài một thể loại hoặc một nhóm thể loại
 * gần nhau. Bài hub (the-loai-am-nhac) đứng đầu.
 */
export const genres: Article[] = [
  {
    slug: 'the-loai-am-nhac',
    title: 'Thể loại âm nhạc: hệ thống và lộ trình',
    category: 'genres',
    aliases: ['thể loại', 'thể loại âm nhạc', 'genre', 'musical genre', 'các thể loại', 'lịch sử thể loại'],
    summary: 'Bài tổng quan của mục: thể loại là gì và khác hình thức ra sao, các thể loại chính của từng thời kỳ từ thánh ca Trung cổ đến hip hop, cách nhận ra một thể loại khi nghe, và nên học theo thứ tự nào.',
    refs: [
      ['Wikipedia — Music genre', 'https://en.wikipedia.org/wiki/Music_genre'],
      ['Britannica — Musical form', 'https://www.britannica.com/art/musical-form'],
      ['Wikipedia — Classical music', 'https://en.wikipedia.org/wiki/Classical_music'],
    ],
    body: `
## Thể loại là gì?
**Thể loại** (genre) là một "loại" tác phẩm được nhận ra nhờ nhiều yếu tố cùng lúc: **đội hình** (ai chơi, ai hát), **lời** (có hay không, ngôn ngữ nào), **chức năng** (lễ, sân khấu, khiêu vũ, hoà nhạc, phòng khách) và một vài **quy ước** về hình thức, tiết tấu, tính chất.
| | Thể loại | [[hinh-thuc-am-nhac|Hình thức]] |
|---|---|---|
| Trả lời câu hỏi | "Đây là **loại** tác phẩm gì?" | "Tác phẩm được **xây** thế nào?" |
| Ví dụ | Giao hưởng, opera, nocturne, rock | Sonata, rondo, ba đoạn, verse – chorus |
Một thể loại có thể dùng nhiều hình thức (giao hưởng dùng sonata, rondo, biến tấu), và một hình thức xuất hiện trong nhiều thể loại.

## Dòng thời gian
::form Trung_cổ Phục_hưng Baroque Cổ_điển Lãng_mạn Hiện_đại | Các thời kỳ (ô không theo tỉ lệ thời gian) — mỗi thời kỳ sinh ra những thể loại đặc trưng; xem [[cac-thoi-ky]]

## Lộ trình theo thời kỳ
**I. Trung cổ (khoảng 500 – 1400)**
1. [[thanh-ca-gregorian]] — [[ket-cau|đơn âm]], gốc của [[ky-am|ký âm]] và [[xuong-am|xướng âm]].
2. [[organum]] — bè thứ hai ra đời.
3. [[motet]] và [[thanh-le-va-requiem]] — thánh nhạc nhiều bè.
4. [[ca-khuc-the-tuc-trung-co]] — troubadour, chanson.

**II. [[thoi-ky-phuc-hung|Phục hưng]] (khoảng 1400 – 1600)**
5. [[madrigal]] — vẽ chữ bằng nhạc.
6. [[nhac-khi-phuc-hung]] — lute song, pavane – galliard, consort.

**III. [[thoi-ky-baroque|Baroque]] (khoảng 1600 – 1750)**
7. [[opera]] — từ Florence đến [[richard-wagner|Wagner]] và thế kỷ 20.
8. [[oratorio-cantata-passion]], [[chorale-va-chorale-prelude]].
9. [[to-khuc-baroque]] — các vũ khúc.
10. [[toccata-prelude-fugue]], [[fugue]], [[prelude-ung-tac]]; passacaglia và chaconne: [[ostinato]].
11. [[sonata-baroque]], [[concerto-grosso]], [[khuc-mo-man]].

**IV. Cổ điển và Lãng mạn (khoảng 1750 – 1900)**
12. [[giao-huong]], [[nhac-thinh-phong]], [[sonata-the-loai]] (hình thức: [[hinh-thuc-sonata]]), [[hinh-thuc-concerto|concerto]] và [[cadenza]].
13. [[minuet-va-trio]], [[bien-tau]], [[rondo]] — các khuôn dùng bên trong.
14. [[tieu-pham-piano]], [[impromptu]] — đàn piano trong phòng khách.
15. [[lied]] — ca khúc nghệ thuật.
16. [[tho-giao-huong]], [[ballet]], [[operetta-va-nhac-kich]].

**V. Thế kỷ 20 – nay**
17. [[trao-luu-the-ky-20]], [[toi-gian]], [[nhac-pho]], [[nhac-dien-tu]].
18. [[nhac-phim-va-tro-choi]].
19. [[phong-cach-jazz]], [[blues-12-nhip]], [[nhac-pho-thong-the-ky-20]].
20. Việt Nam: [[am-nhac-truyen-thong-viet-nam]], [[tan-nhac-viet-nam]].
Bảng tóm tắt các thể loại khí nhạc lớn: [[the-loai]].

## Nhận ra thể loại khi nghe
| Câu hỏi | Gợi ý |
|---|---|
| Có lời không? Ngôn ngữ gì? | Latin → thánh nhạc cổ; Đức + piano → Lied; nhiều giọng + dàn nhạc + sân khấu → opera |
| Ai chơi? | Một đàn phím → tiểu phẩm, sonata, fugue; 4 đàn dây → tứ tấu; dàn nhạc + một độc tấu → concerto |
| Có nhịp nhảy múa rõ không? | 3/4 nhẹ → minuet, valse; nhấn lệch → mazurka; nhịp phức nhanh → gigue; [[swing|backbeat]] → rock, pop |
| Một hay nhiều chương? | Nhiều chương cùng giọng nhịp nhảy → tổ khúc; bốn chương tương phản → giao hưởng, sonata |
| Kể chuyện hay "tự nó"? | Tiêu đề, chương trình → thơ giao hưởng; số thứ tự, giọng → nhạc tuyệt đối ([[am-nhac-tuyet-doi]]) |

## Vì sao người dạy piano cần biết thể loại
- Mỗi bài trong tiết mục thuộc một thể loại có **quy ước [[dien-tau|diễn tấu]]** riêng: sarabande nặng phách 2, valse nhẹ phách 2 – 3, nocturne "hát", toccata sáng và rõ — xem [[phong-cach-dien-tau]].
- Thể loại giúp học trò **nghe rộng**: một học trò thích nhạc phim có thể đi ngược về thơ giao hưởng, opera, [[bien-doi-chu-de|leitmotif]].
- Lộ trình chọn bài theo trình độ: [[lo-trinh-tac-pham]]; nhà soạn nhạc theo thời kỳ: [[thoi-ky-trung-co]] … [[thoi-ky-the-ky-20]].
`,
  },
  {
    slug: 'thanh-ca-gregorian',
    title: 'Thánh ca Gregorian',
    category: 'genres',
    aliases: ['thánh ca Gregorian', 'Gregorian chant', 'plainchant', 'plainsong', 'bình ca', 'neume', 'nốt neume', 'Solesmes', 'Ut queant laxis', 'ut re mi', 'Dies irae'],
    summary: 'Thể loại cổ nhất còn được hát đến nay: giai điệu đơn âm, không đệm, lời Latin, nhịp tự do theo lời, xếp theo tám điệu thức nhà thờ. Từ ký hiệu neume đến khuông nhạc của Guido d’Arezzo và các nốt ut – re – mi, thánh ca là gốc rễ của ký âm và của các thể loại nhiều bè về sau.',
    refs: [
      ['Wikipedia — Gregorian chant', 'https://en.wikipedia.org/wiki/Gregorian_chant'],
      ['Wikipedia — Neume', 'https://en.wikipedia.org/wiki/Neume'],
      ['Wikipedia — Ut queant laxis', 'https://en.wikipedia.org/wiki/Ut_queant_laxis'],
      ['Cantus Database — Dies irae', 'https://cantusdatabase.org/chant/374600'],
      ['WFMT — How a 13th-century chant became a musical shorthand', 'https://www.wfmt.com/2024/10/08/how-a-13th-century-chant-became-a-creepy-musical-short-hand/'],
      ['Polska Biblioteka Muzyczna — Joseph Pothier', 'https://polskabibliotekamuzyczna.pl/encyklopedia/pothier-joseph/?lang=en'],
      ['Cantica — Graduale Romanum', 'https://cantica.be/en/comment/gradualeromanum.html'],
    ],
    body: `
::wiki Gregorian_chant | Một trang thánh ca (ảnh đầu bài Wikipedia *Gregorian chant*)

## Đặc điểm
| Yếu tố | Thánh ca Gregorian |
|---|---|
| Kết cấu | **Đơn âm**: một giai điệu, không hoà âm, không đệm (xem [[ket-cau]]) |
| Lời | Latin, lấy từ Kinh Thánh và phụng vụ |
| Tiết tấu | **Tự do**, theo nhịp của lời; không có [[so-chi-nhip|số chỉ nhịp]] |
| Cao độ | Tầm cữ hẹp, đi chủ yếu liền bậc; xếp theo tám [[dieu-thuc|điệu thức nhà thờ]] |
| Cách đặt lời | *Syllabic* (một âm tiết một nốt), *neumatic* (vài nốt), *melismatic* (nhiều nốt trên một âm tiết) |

## Từ neume đến khuông nhạc
- Thánh ca được chuẩn hoá khoảng thế kỷ 8 – 9 và ban đầu truyền miệng. Các **neume** — dấu nhỏ đặt trên lời — chỉ nhắc **hướng** giai điệu, chưa ghi chính xác cao độ.
- Khoảng năm 1030, **Guido d’Arezzo** dùng các **dòng kẻ** để định cao độ — tổ tiên của [[khuong-nhac|khuông nhạc]] — rồi đến **nốt vuông**.
- Guido dạy [[doc-not-nhanh|đọc nhạc]] bằng thánh ca **"Ut queant laxis"**: mỗi nửa câu bắt đầu cao hơn nửa câu trước một bậc, trên C, D, E, F, G, A; âm tiết đầu của chúng thành **ut – re – mi – fa – sol – la** (sau này ut thành do). Đây là gốc của [[xuong-am|xướng âm]].
::staff treble C4=Ut D4=re E4=mi F4=fa G4=sol A4=la | Nốt mở đầu sáu nửa câu "Ut queant laxis" — nguồn gốc tên nốt Đô – Rê – Mi
::wiki Guidonian_hand | "Bàn tay Guido" — cách dạy nhớ các bậc âm trên khớp ngón tay (ảnh đầu bài Wikipedia *Guidonian hand*)

## Một ví dụ: "Dies irae"
Bài *[[mo-tien-hoa-am|sequence]]* "Dies irae" (thế kỷ 13) trong lễ cầu hồn mở đầu như sau (theo Cantus Database, điệu thức 2):
::staff treble F4=Di E4=es F4=i D4=rae E4=di C4=es D4=il D4=la | "Dies irae, dies illa" — tám nốt mở đầu, được Berlioz, Liszt, Rachmaninoff và nhạc phim trích dẫn rất nhiều lần
Nghe nó trở lại trong *Symphonie fantastique* của [[hector-berlioz|Berlioz]] ([[tho-giao-huong]]) và trong các bản [[thanh-le-va-requiem|Requiem]].

## Hồi sinh ở Solesmes
Thế kỷ 19, các tu sĩ dòng Biển Đức ở **Solesmes** (Pháp) nghiên cứu lại các bản chép tay cổ: Dom Pothier in *Liber gradualis* (1883), Dom Mocquereau khởi xướng bộ *Paléographie musicale*; [[an-ban-urtext|ấn bản]] Vatican (Kyriale 1905, Graduale Romanum 1907) dựa trên các nghiên cứu này.

## Với người học piano
- Hát một câu thánh ca giúp cảm nhận [[dieu-thuc|điệu thức]] không qua hợp âm; thử đệm bằng một [[bass-ngan|âm ngân]] để nghe màu Dorian, Phrygian.
- Thánh ca là chất liệu cho mọi thể loại nhiều bè sau đó: [[organum]], [[motet]], [[thanh-le-va-requiem|thánh lễ]].
Bối cảnh: [[thoi-ky-trung-co]].
`,
  },
  {
    slug: 'organum',
    title: 'Organum và trường phái Notre-Dame',
    category: 'genres',
    aliases: ['organum', 'Notre-Dame school', 'trường phái Notre-Dame', 'Magnus liber organi', 'Musica enchiriadis', 'Viderunt omnes'],
    summary: 'Hình thức nhiều bè sớm nhất của châu Âu: thêm một bè vào thánh ca. Từ organum song song (khoảng năm 900) đến organum tự do và organum melisma, rồi trường phái Notre-Dame ở Paris (Léonin, Pérotin, khoảng 1160 – 1250) với các bè có tiết tấu đo được.',
    refs: [
      ['Wikipedia — Organum', 'https://en.wikipedia.org/wiki/Organum'],
      ['Wikipedia — Pérotin', 'https://en.wikipedia.org/wiki/Perotin'],
      ['Wikipedia — Notre-Dame school', 'https://en.wikipedia.org/wiki/Notre-Dame_school'],
      ['Wikipedia — Magnus Liber', 'https://en.wikipedia.org/wiki/Magnus_liber'],
    ],
    body: `
::wiki Pérotin | Trường phái Notre-Dame (ảnh đầu bài Wikipedia *Pérotin*)

## Ba giai đoạn
| Kiểu | Thời gian | Cách làm |
|---|---|---|
| **Organum song song** | Khoảng năm 900 (*Musica enchiriadis*) | Bè thêm đi **song song** với thánh ca ở quãng 4 hoặc 5, nốt đối nốt |
| **Organum tự do** | Thế kỷ 11 | Bè thêm có thể đi **ngược chiều**, gặp nhau ở quãng 8, đồng âm |
| **Organum melisma** | Thế kỷ 12 | Thánh ca kéo thành **nốt rất dài** ở bè dưới (*tenor*, "giữ"), bè trên hát chuỗi [[ky-hieu-hoa-my|nốt hoa mỹ]] |
::staff treble C5+F4 D5+G4 F5+Bb4 E5+A4 D5+G4 C5+F4 | Minh hoạ organum song song: bè thêm đi song song ở quãng 5 dưới một giai điệu thánh ca
Từ *tenor* (giữ) của organum là nguồn gốc tên giọng tenor sau này. Các quãng 4, 5, 8 được dùng vì được coi là [[thuan-nghich|thuận]] nhất thời đó; [[dan-giong|quãng 5 song song]] về sau lại bị cấm trong [[luat-hoa-am-bon-be|hoà âm bốn bè]].

## Trường phái Notre-Dame
- Ở nhà thờ Đức Bà Paris (khoảng 1160 – 1250), **[[leonin|Léonin]]** được một tác giả khuyết danh (Anonymous IV) ghi là người soạn *Magnus liber organi* (Đại tuyển organum).
- **[[perotin|Pérotin]]** mở rộng lên **3 – 4 bè**; *Viderunt omnes* là một organum bốn bè (*quadruplum*).
- Đóng góp lớn: các **"điệu tiết tấu"** (rhythmic [[dieu-thuc|modes]]) — mẫu nhịp lặp lại — lần đầu cho phép ghi **trường độ** cho nhiều bè cùng lúc (xem [[truong-do]]).
- Các đoạn *clausula* trong organum, khi được đặt thêm lời, trở thành [[motet]].
Liên quan: [[doi-am]], [[thanh-ca-gregorian]], [[thoi-ky-trung-co]].
`,
  },
  {
    slug: 'motet',
    title: 'Motet',
    category: 'genres',
    aliases: ['motet', 'isorhythm', 'motet isorhythm', 'talea', 'color (isorhythm)', 'Ars nova', 'Roman de Fauvel', 'Nuper rosarum flores'],
    summary: 'Một trong những thể loại sống lâu nhất: sinh ra ở thế kỷ 13 từ organum, mỗi bè một lời khác nhau; thế kỷ 14 có motet isorhythm (mẫu tiết tấu lặp lại) của Vitry và Machaut; thời Phục hưng thành bài thánh ca Latin nhiều bè mô phỏng của Josquin, Palestrina.',
    refs: [
      ['Wikipedia — Motet', 'https://en.wikipedia.org/wiki/Motet'],
      ['Wikipedia — Isorhythm', 'https://en.wikipedia.org/wiki/Isorhythm'],
      ['New World Encyclopedia — Philippe de Vitry', 'https://www.newworldencyclopedia.org/entry/Philippe_de_Vitry'],
      ['Wikipedia — Ave Maria ... virgo serena', 'https://en.wikipedia.org/wiki/Ave_Maria_..._virgo_serena'],
    ],
    body: `
::wiki Roman_de_Fauvel | *Roman de Fauvel* — bản chép tay có các motet của Vitry (ảnh đầu bài Wikipedia)

## Ba đời motet
| Thời | Đặc điểm | Ví dụ |
|---|---|---|
| **Thế kỷ 13** | Từ *clausula* của [[organum]] được đặt thêm lời: tenor là thánh ca, các bè trên hát **lời khác nhau**, có khi Latin và tiếng Pháp cùng lúc | Các tuyển tập motet Paris |
| **Thế kỷ 14 – đầu 15 (Ars nova)** | **Isorhythm**: tenor lặp một **mẫu tiết tấu** (*talea*) và một **chuỗi cao độ** (*color*); hai chuỗi có thể không trùng độ dài | [[philippe-de-vitry|Philippe de Vitry]] (*Ars nova*, khoảng 1320 – 22; motet trong *Roman de Fauvel*, khoảng 1317); [[guillaume-de-machaut|Machaut]]; Dufay, *Nuper rosarum flores* (1436) |
| **Phục hưng** | Một lời Latin thiêng, thường 4 – 5 bè, **mô phỏng** xuyên suốt | [[josquin-des-prez|Josquin]], *Ave Maria … virgo serena* (khoảng 1484 – 85; in mở đầu tuyển motet đầu tiên của Petrucci, 1502); [[giovanni-pierluigi-da-palestrina|Palestrina]], [[william-byrd|Byrd]] |
::form Talea Talea Talea Talea | Minh hoạ isorhythm: một mẫu tiết tấu (talea) lặp lại ở tenor; chuỗi cao độ (color) có thể dài hơn và lệch pha với nó

## Vì sao motet quan trọng
- Isorhythm là một trong những ví dụ sớm nhất về **cấu trúc toán học** trong âm nhạc — được so sánh với [[ky-thuat-12-am|kỹ thuật chuỗi]] [[thoi-ky-the-ky-20|thế kỷ 20]].
- Motet Phục hưng là "phòng thí nghiệm" của [[doi-am|đối âm]] mô phỏng, dẫn đến [[fugue]].
Liên quan: [[thanh-le-va-requiem]], [[thoi-ky-phuc-hung]].
`,
  },
  {
    slug: 'thanh-le-va-requiem',
    title: 'Thánh lễ (Mass) và Requiem',
    category: 'genres',
    aliases: ['thánh lễ', 'Mass', 'missa', 'Mass Ordinary', 'phần thường lễ', 'Messe de Nostre Dame', 'parody mass', 'Missa Papae Marcelli', 'Requiem', 'lễ cầu hồn', 'L’homme armé'],
    summary: 'Thể loại thánh nhạc lớn nhất của châu Âu suốt năm thế kỷ: phổ nhạc năm phần thường lễ (Kyrie, Gloria, Credo, Sanctus, Agnus Dei). Từ Messe de Nostre Dame của Machaut (thập niên 1360), qua thánh lễ cantus firmus và parody của Josquin, Palestrina, đến các Requiem của Mozart, Verdi, Brahms.',
    refs: [
      ['Wikipedia — Mass (music)', 'https://en.wikipedia.org/wiki/Mass_(music)'],
      ['Wikipedia — Guillaume de Machaut', 'https://en.wikipedia.org/wiki/Guillaume_de_Machaut'],
      ['Carus — The Missa Papae Marcelli and its context', 'https://blog.carus-verlag.com/en/music-stories/the-missa-papae-marcelli-and-its-context/'],
      ['Indiana Public Media — Classical music myths', 'https://indianapublicmedia.org/arts/classical-music-myths/'],
      ['Wikipedia — Requiem', 'https://en.wikipedia.org/wiki/Requiem'],
      ['Classical Music — Mozart Requiem', 'https://www.classical-music.com/features/works/requiem-mozart'],
      ['Cambridge — Brahms’s A German Requiem: early performances', 'https://www.cambridge.org/core/books/brahmss-a-german-requiem/early-performances/AE7EA4EF38F35A228ECA8902AEF5692F'],
    ],
    body: `
## Năm phần thường lễ
::form Kyrie Gloria Credo Sanctus Agnus_Dei | Năm phần thường lễ (Ordinary) — lời giống nhau ở mọi thánh lễ, nên được phổ nhạc thành một bộ
| Phần | Nghĩa | Tính chất thường gặp |
|---|---|---|
| Kyrie | "Xin Chúa thương xót" | Ba khúc ngắn (Kyrie – Christe – Kyrie) |
| Gloria | "Vinh danh Thiên Chúa" | Nhiều lời, nhanh, vui |
| Credo | Kinh Tin Kính | Dài nhất, nhiều đoạn tương phản |
| Sanctus | "Thánh, Thánh, Thánh" | Thường có Hosanna và Benedictus |
| Agnus Dei | "Lạy Chiên Thiên Chúa" | Cầu nguyện, kết bài |

## Các mốc
- **[[guillaume-de-machaut|Machaut]], *Messe de Nostre Dame*** (đầu thập niên 1360): bộ thường lễ hoàn chỉnh **sớm nhất do một người** soạn (bộ Tournai cổ hơn là tập hợp của nhiều tác giả).
- **Thánh lễ [[doi-am-5-loai|cantus firmus]]** (thế kỷ 15): một giai điệu mượn — có khi là bài hát đời như *L’homme armé* — chạy ở tenor xuyên suốt năm phần, nối chúng thành một khối.
- **Thánh lễ parody** (thế kỷ 16): lấy **cả một tác phẩm nhiều bè** (thường là [[motet]] hay [[ca-khuc-the-tuc-trung-co|chanson]]) làm chất liệu.
- **[[giovanni-pierluigi-da-palestrina|Palestrina]], *Missa Papae Marcelli***: chuyện nó "cứu nhạc nhiều bè" khỏi bị Công đồng Trent cấm là **huyền thoại** — bắt đầu từ Agazzari (1607) và được Baini (1828) thêu dệt thêm. Nhưng nó đúng là mẫu mực của lối viết rõ lời, cân bằng.

## Requiem (lễ cầu hồn)
Requiem thêm các phần riêng của lễ cầu hồn, nổi tiếng nhất là [[mo-tien-hoa-am|sequence]] *Dies irae* (thế kỷ 13; xem giai điệu ở [[thanh-ca-gregorian]]).
| Tác phẩm | Năm | Ghi chú |
|---|---|---|
| [[wolfgang-amadeus-mozart|Mozart]], Requiem K. 626 | 1791 | Dang dở khi Mozart mất (5/12/1791); Süssmayr hoàn thành; diễn lần đầu 2/1/1793 |
| [[johannes-brahms|Brahms]], *Ein deutsches Requiem* | 1868 | Lời Kinh Thánh tiếng Đức, không theo phụng vụ; ra mắt ở nhà thờ Bremen 10/4/1868, chương 5 thêm sau |
| [[giuseppe-verdi|Verdi]], Requiem | 1874 | Kịch tính như opera |

## Với người học piano
Nhiều bài hợp xướng thánh lễ có bản giảm âm cho piano (vocal score) — một cách luyện [[thi-tau|đọc nhiều bè]] và hiểu [[doi-am|đối âm]] thanh nhạc.
Liên quan: [[oratorio-cantata-passion]], [[thoi-ky-phuc-hung]].
`,
  },
  {
    slug: 'ca-khuc-the-tuc-trung-co',
    title: 'Ca khúc thế tục Trung cổ và chanson',
    category: 'genres',
    aliases: ['troubadour', 'trouvère', 'Minnesang', 'Minnesinger', 'chanson', 'formes fixes', 'rondeau (Trung cổ)', 'virelai', 'ballade (Trung cổ)', 'chanson Paris', 'Janequin', 'La guerre (Janequin)'],
    summary: 'Âm nhạc ngoài nhà thờ: ca khúc tình yêu cung đình đơn âm của troubadour (Occitan), trouvère (Pháp cổ) và Minnesinger (Đức), rồi chanson nhiều bè — từ các "hình thức cố định" của Machaut, chanson Burgundy ba bè đến chanson Paris bốn bè thế kỷ 16.',
    refs: [
      ['Wikipedia — Troubadour', 'https://en.wikipedia.org/wiki/Troubadour'],
      ['Wikipedia — Minnesang', 'https://en.wikipedia.org/wiki/Minnesang'],
      ['Wikipedia — Chanson', 'https://en.wikipedia.org/wiki/Chanson'],
      ['Britannica — Claudin de Sermisy', 'https://www.britannica.com/biography/Claudin-de-Sermisy'],
    ],
    body: `
::wiki Codex_Manesse | Codex Manesse — tuyển tập thơ Minnesang có tranh minh hoạ (ảnh đầu bài Wikipedia)

## Ca khúc đơn âm cung đình
| Truyền thống | Thời gian | Ngôn ngữ | Tiêu biểu |
|---|---|---|---|
| Troubadour | Khoảng 1100 – 1300 | Occitan (miền Nam nước Pháp) | Guilhem IX (1071 – 1126/7), [[bernart-de-ventadorn|Bernart de Ventadorn]] (hoạt động khoảng 1147 – 70) |
| Trouvère | Cuối thế kỷ 12 – 13 | Pháp cổ | [[adam-de-la-halle|Adam de la Halle]] (*Jeu de Robin et Marion*) |
| Minnesang | Khoảng 1150 – 1300 | Đức trung cổ | [[walther-von-der-vogelweide|Walther von der Vogelweide]] |
Chủ đề chính là **tình yêu cung đình**. Bản chép tay ghi cao độ nhưng **không ghi rõ tiết tấu**, nên mỗi bản thu ngày nay là một cách diễn giải.

## Chanson nhiều bè
| Giai đoạn | Đặc điểm | Tiêu biểu |
|---|---|---|
| Machaut (thế kỷ 14) | Các **hình thức cố định** (*formes fixes*): [[tieu-pham-piano|ballade]], [[rondo|rondeau]], virelai — mỗi kiểu có khuôn lặp lại lời và nhạc riêng | [[guillaume-de-machaut|Guillaume de Machaut]] |
| Burgundy (khoảng 1420 – 70) | 3 bè, giai điệu ở bè trên, tenor làm khung | Dufay, Binchois |
| Paris (khoảng 1520 – 50) | 4 bè, phần lớn **hợp âm cùng nhịp** ([[ket-cau|chủ điệu]]), bỏ formes fixes; tiết tấu nhảy múa | Sermisy (hơn nửa tuyển tập của Attaingnant 1529), Janequin |
::form A B a A a b A B | Khuôn rondeau (chữ hoa = điệp khúc lặp cả lời; chữ thường = cùng nhạc, lời mới)
Janequin, *La guerre* (in khoảng 1528 – 29) [[doi-am|mô phỏng]] tiếng trận đánh — một ví dụ sớm của [[am-nhac-tuyet-doi|nhạc tả cảnh]].
Liên quan: [[madrigal]], [[hinh-thuc-am-nhac]], [[thoi-ky-trung-co]].
`,
  },
  {
    slug: 'madrigal',
    title: 'Madrigal',
    category: 'genres',
    aliases: ['madrigal', 'madrigal Ý', 'English madrigal', 'madrigal Anh', 'word painting', 'vẽ chữ bằng nhạc', 'madrigalism', 'seconda pratica', 'Musica transalpina', 'Cruda Amarilli'],
    summary: 'Ca khúc thế tục nhiều bè trên thơ, đỉnh cao của âm nhạc thế tục Phục hưng: madrigal thế kỷ 14 hai bè, madrigal Ý thế kỷ 16 (Arcadelt, Marenzio, Gesualdo, Monteverdi) với lối "vẽ chữ bằng nhạc", và madrigal Anh sau Musica transalpina (1588).',
    refs: [
      ['Wikipedia — Madrigal', 'https://en.wikipedia.org/wiki/Madrigal'],
      ['New World Encyclopedia — Madrigal (music)', 'https://www.newworldencyclopedia.org/entry/Madrigal_(music)'],
      ['IMSLP — Monteverdi, Madrigals Book 5', 'https://imslp.org/wiki/Madrigals,_Book_5_(Monteverdi,_Claudio)'],
      ['Lumen Learning — The English madrigal', 'https://courses.lumenlearning.com/vccs-tcc-mus121-1/chapter/the-english-madrigal-e/'],
    ],
    body: `
::wiki Claudio_Monteverdi | Claudio Monteverdi — người đưa madrigal sang "cách thực hành thứ hai" (ảnh đầu bài Wikipedia)

## Hai thời madrigal
| | Madrigal thế kỷ 14 (Trecento) | Madrigal thế kỷ 16 |
|---|---|---|
| Số bè | Thường 2 | 4 – 6 |
| Khuôn | Các khổ cùng nhạc + đoạn *[[hinh-thuc-concerto|ritornello]]* kết | **Phổ suốt** ([[lied|through-composed]]): nhạc đi theo từng câu thơ |
| Tiêu biểu | [[jacopo-da-bologna|Jacopo da Bologna]], Landini | Verdelot (1533), Arcadelt (*Primo libro*, 1539 — tuyển madrigal được in lại nhiều nhất thời đó), Marenzio, [[carlo-gesualdo|Gesualdo]], [[claudio-monteverdi|Monteverdi]] |

## Vẽ chữ bằng nhạc (word painting)
Madrigal nổi tiếng vì **minh hoạ từng chữ**: "lên trời" thì giai điệu đi lên, "than thở" thì [[thuan-nghich|nghịch âm]] hay quãng nửa cung đi xuống, "chạy" thì nốt nhanh. Đây là kỹ thuật vẫn dùng trong ca khúc và [[nhac-phim-va-tro-choi|nhạc phim]] ngày nay.

## Monteverdi và "cách thực hành thứ hai"
Năm 1605 Monteverdi in Tập madrigal số 5 (có *Cruda Amarilli*), đáp lại nhà lý luận Artusi, người chê các nghịch âm không chuẩn bị của ông. Monteverdi gọi lối viết của mình là ***seconda pratica***: **lời thơ làm chủ hoà âm** — một bước sang [[thoi-ky-baroque|Baroque]] và [[opera]].

## Madrigal Anh
Tuyển *Musica transalpina* (Yonge, 1588) in madrigal Ý kèm lời Anh và khơi dậy trào lưu madrigal Anh: Morley, Weelkes, Wilbye.
Liên quan: [[ca-khuc-the-tuc-trung-co]], [[nhac-khi-phuc-hung]], [[thoi-ky-phuc-hung]].
`,
  },
  {
    slug: 'nhac-khi-phuc-hung',
    title: 'Lute song, vũ khúc và nhạc khí Phục hưng',
    category: 'genres',
    aliases: ['lute song', 'ayre', 'pavane', 'galliard', 'consort', 'consort of viols', 'viol', 'đàn lute', 'Lachrimae', 'Flow my tears', 'Danserye'],
    summary: 'Thế kỷ 16, nhạc khí bắt đầu có tiếng nói riêng: ca khúc cho một giọng với đàn lute (ayre) của Dowland, các cặp vũ khúc pavane chậm – galliard nhanh, và nhạc "consort" cho nhóm viol hoặc nhạc cụ hỗn hợp.',
    refs: [
      ['Wikipedia — John Dowland', 'https://en.wikipedia.org/wiki/John_Dowland'],
      ['Wikipedia — Lachrimae, or Seaven Teares', 'https://en.wikipedia.org/wiki/Lachrimae,_or_Seaven_Teares'],
      ['Wikipedia — Pavane', 'https://en.wikipedia.org/wiki/Pavane'],
      ['Wikipedia — Galliard', 'https://en.wikipedia.org/wiki/Galliard'],
      ['Wikipedia — Consort of viols', 'https://en.wikipedia.org/wiki/Consort_of_viols'],
    ],
    body: `
::wiki Lute | Đàn lute — nhạc cụ đệm hát phổ biến nhất thời Phục hưng (ảnh đầu bài Wikipedia *Lute*)

## Lute song (ayre)
Nước Anh khoảng 1597 – 1622: một giọng hát với đàn lute đệm, hoặc in thành bốn bè để hát chung quanh bàn. **[[john-dowland|John Dowland]]**: *First Booke of Songes* (1597), *Flow my tears* (trong tập thứ hai, 1600). Đây là tổ tiên trực tiếp của [[dem-hat-piano|ca khúc có đệm]].

## Cặp vũ khúc
| Vũ khúc | Nhịp | Tính chất |
|---|---|---|
| **Pavane** | Hai (chẵn) | Chậm, trang trọng, kiểu diễu hành |
| **Galliard** | Ba | Nhanh, có bước nhảy; thường đi sau pavane |
::rhythm 4/4 h q q / w // | Minh hoạ một bước pavane: dài – ngắn – ngắn (nhịp chẵn, chậm)
::rhythm 3/4 q q q / h q // | Minh hoạ nhịp ba nhanh của galliard
Ghép **chậm – nhanh, chẵn – lẻ** như vậy là hạt giống của [[to-khuc-baroque|tổ khúc Baroque]]. Dowland, *Lachrimae, or Seaven Teares* (1604): 21 vũ khúc năm bè, trong đó bảy pavane trên cùng chủ đề "Lachrimae". Susato in tuyển vũ khúc *Danserye* (1551).

## Consort
- **Consort đồng loại**: cùng một họ nhạc cụ, ví dụ nhóm **viol** nhiều cỡ.
- **Consort hỗn hợp**: nhiều loại nhạc cụ.
- Thể loại: *In nomine*, fantasia (tổ tiên của [[toccata-prelude-fugue|fantasia đàn phím]]).
Liên quan: [[madrigal]], [[thoi-ky-phuc-hung]], [[dan-phim-co]].
`,
  },
  {
    slug: 'opera',
    title: 'Opera',
    category: 'genres',
    aliases: ['opera', 'nhạc kịch opera', 'Florentine Camerata', 'Camerata', 'L’Orfeo', 'Euridice (Peri)', 'opera seria', 'opera buffa', 'Singspiel', 'bel canto', 'aria', 'aria da capo', 'da capo aria', 'recitative', 'recitativo secco', 'recitativo accompagnato', 'music drama', 'nhạc kịch Wagner', 'Der Freischütz', 'Der Ring des Nibelungen', 'verismo', 'number opera'],
    summary: 'Kịch hát với dàn nhạc, ra đời ở Ý quanh năm 1600 và vẫn là thể loại sân khấu lớn nhất của nhạc cổ điển: từ L’Orfeo của Monteverdi (1607), opera seria với aria da capo của Handel, cải cách của Gluck, opera buffa và Singspiel của Mozart, bel canto, Verdi, nhạc kịch leitmotif của Wagner đến opera thế kỷ 20.',
    refs: [
      ['Wikipedia — Opera', 'https://en.wikipedia.org/wiki/Opera'],
      ['Wikipedia — Florentine Camerata', 'https://en.wikipedia.org/wiki/Florentine_Camerata'],
      ['Britannica — Jacopo Peri', 'https://www.britannica.com/biography/Jacopo-Peri'],
      ["Wikipedia — L'Orfeo", 'https://en.wikipedia.org/wiki/L%27Orfeo'],
      ['Britannica — opera seria (print)', 'https://britannica.com/print/article/429874'],
      ['Cambridge Companion to Handel — Handel and the aria', 'https://www.cambridge.org/core/books/cambridge-companion-to-handel/handel-and-the-aria/060E974E2A9CA41EFD4F77419F6CA6CA'],
      ['MIT OCW — Introduction to Western Music, lecture 4', 'https://ocw.iti.hr/courses/music-and-theater-arts/21m-011-introduction-to-western-music-spring-2006/lecture-notes/week04_lecture04.pdf'],
      ['Wikipedia — Orfeo ed Euridice', 'https://en.wikipedia.org/wiki/Orfeo_ed_Euridice'],
      ['Wikipedia — Der Freischütz', 'https://en.wikipedia.org/wiki/Der_Freisch%C3%BCtz'],
      ['StageAgent — The bel canto movement', 'https://stageagent.com/learn/5yx6toplyctbpvju8id9nq/the-bel-canto-movement'],
      ['EBSCO — Wagner’s Ring cycle', 'https://ebsco.com/research-starters/history/wagners-ring-cycle'],
    ],
    body: `
::wiki L'Orfeo | *L’Orfeo* của Monteverdi (1607) — opera sớm nhất còn được diễn thường xuyên (ảnh đầu bài Wikipedia)

## Ra đời ở Florence
Cuối thế kỷ 16, các nhóm trí thức ở Florence (Camerata của Bardi và nhóm của Corsi) muốn hồi sinh kịch Hy Lạp, nơi họ tin rằng lời được **hát**. Họ tạo ra **monody**: một giọng hát trên [[bass-so|bè trầm có số]].
| Năm | Tác phẩm | Ghi chú |
|---|---|---|
| 1598 | Peri, *Dafne* | Diễn ở cung điện Corsi; nhạc gần như mất |
| 1600 | Peri, *Euridice* | Cho đám cưới Maria de’ Medici và Henri IV; opera **còn nguyên nhạc** sớm nhất |
| 1607 | [[claudio-monteverdi|Monteverdi]], *L’Orfeo* | Mantua, 24/2/1607 (có nguồn ghi 27/2); opera sớm nhất **còn diễn thường xuyên** |

## Hai kiểu hát
| | Recitative (hát nói) | Aria |
|---|---|---|
| Chức năng | Đẩy **cốt truyện**, đối thoại | Dừng lại để bày tỏ **cảm xúc** |
| Nhạc | Theo nhịp lời nói; *secco*: chỉ bè trầm đệm; *accompagnato*: dàn nhạc đệm ở chỗ kịch tính | Giai điệu đầy đủ, hình thức rõ |

## Opera seria và aria da capo
Opera nghiêm túc Ý cuối thời [[thoi-ky-baroque|Baroque]] ([[george-frideric-handel|Handel]]: *Rinaldo* 1711 với "Lascia ch’io pianga"; *Giulio Cesare* 1724). Aria **[[dau-nhac-lai|da capo]]** có ba phần: A – B – A′; khi A trở lại, ca sĩ **tự trang trí** để khoe kỹ thuật.
::form A B A′ | Aria da capo: A – B – A′ (A′ = A được ca sĩ trang trí thêm); xem [[hinh-thuc-am-nhac|ba đoạn]]

## Từ Gluck đến Wagner
| Mốc | Năm | Ý nghĩa |
|---|---|---|
| [[christoph-willibald-gluck|Gluck]], *Orfeo ed Euridice* | 5/10/1762, Vienna | **Cải cách**: "giản dị cao quý", bớt phô diễn của opera seria |
| [[wolfgang-amadeus-mozart|Mozart]], *Le nozze di Figaro* | 1786 | **Opera buffa** (hài) tiếng Ý |
| Mozart, *Die Zauberflöte* | 1791 | **Singspiel**: opera tiếng Đức có thoại nói |
| [[gioachino-rossini|Rossini]], Bellini, Donizetti | Đầu thế kỷ 19 | **Bel canto**: giọng đều, hơi dài, đoạn [[ky-hieu-hoa-my|hoa mỹ]]; Rossini viết sẵn hoa mỹ vào bản nhạc |
| Weber, *Der Freischütz* | 18/6/1821, Berlin | Thường coi là opera Lãng mạn Đức đầu tiên |
| [[giuseppe-verdi|Verdi]] | *Rigoletto*, *La traviata*, *Aida* | Đỉnh cao opera Ý thế kỷ 19 |
| [[richard-wagner|Wagner]], *Der Ring des Nibelungen* | Trọn bộ lần đầu 13/8/1876, Bayreuth | **Nhạc kịch** liền mạch, xây bằng **[[bien-doi-chu-de|leitmotif]]** — chủ đề ngắn gắn với nhân vật hay ý tưởng; hố nhạc khuất, khán phòng tắt đèn |
| [[alban-berg|Berg]], *Wozzeck*; [[benjamin-britten|Britten]], *Peter Grimes*; Glass, *Einstein on the Beach* | 1925; 1945; 1976 | Opera [[phi-dieu-tinh|phi điệu tính]], opera Anh, opera [[toi-gian|tối giản]] |
::wiki Der_Ring_des_Nibelungen | *Der Ring des Nibelungen* (ảnh đầu bài Wikipedia)
Leitmotif của Wagner về sau thành công cụ chính của [[nhac-phim-va-tro-choi|nhạc phim]].

## Với người học piano
Nhiều tiểu phẩm piano "hát" như aria: [[tieu-pham-piano|nocturne]] của [[frederic-chopin|Chopin]] chịu ảnh hưởng bel canto; [[franz-liszt|Liszt]] viết nhiều bản chuyển soạn opera. Thử chơi tay phải như một giọng hát — xem [[dien-dat-cau-nhac]], [[rubato]].
Liên quan: [[oratorio-cantata-passion]], [[operetta-va-nhac-kich]], [[khuc-mo-man]].
`,
  },
  {
    slug: 'oratorio-cantata-passion',
    title: 'Oratorio, cantata và Passion',
    category: 'genres',
    aliases: ['oratorio', 'cantata', 'cantata Bach', 'Bach cantata', 'St Matthew Passion', 'Thương khó theo Thánh Matthew', 'Messiah', 'Messiah (Handel)', 'Jephte', 'Carissimi'],
    summary: 'Ba thể loại thanh nhạc lớn của thời Baroque không cần dàn dựng sân khấu: oratorio (kịch thiêng có người kể chuyện — Carissimi, Messiah của Handel 1742), cantata (khoảng 200 cantata nhà thờ còn lại của Bach) và Passion (Thương khó theo Thánh Matthew, 1727).',
    refs: [
      ['Wikipedia — Oratorio', 'https://en.wikipedia.org/wiki/Oratorio'],
      ['Wikipedia — Jephte (Carissimi)', 'https://en.wikipedia.org/wiki/Jephte_(Carissimi)'],
      ['Britannica — Messiah (print)', 'https://www.britannica.com/print/article/377178'],
      ['Gramophone — The story behind the premiere of Handel’s Messiah', 'https://gramophone.co.uk/feature/the-story-behind-the-triumphant-premiere-of-handels-messiah'],
      ['Wikipedia — Bach cantata', 'https://en.wikipedia.org/wiki/Bach_cantata'],
      ['Wikipedia — List of Bach cantatas', 'https://en.wikipedia.org/wiki/List_of_Bach_cantatas'],
      ['Wikipedia — St Matthew Passion', 'https://en.wikipedia.org/wiki/St_Matthew_Passion'],
    ],
    body: `
::wiki Messiah_(Handel) | *Messiah* của Handel (ảnh đầu bài Wikipedia)

## So sánh
| | Oratorio | Cantata (nhà thờ) | Passion |
|---|---|---|---|
| Nội dung | Kịch thiêng: người kể, nhân vật, hợp xướng | Suy niệm theo ngày lễ trong năm phụng vụ | Câu chuyện Thương khó trong Phúc Âm |
| Quy mô | Lớn, cả buổi hoà nhạc | 15 – 30 phút | Rất lớn |
| Thành phần | Recitative, aria, hợp xướng | Recitative, aria, hợp xướng, **chorale** | Người kể (Evangelist) hát recitative, aria, hợp xướng, chorale |
| Dàn dựng | Không | Không | Không |
Các thành phần recitative – aria giống [[opera]]; khác ở chỗ **không diễn sân khấu** và nội dung thiêng.

## Các mốc
- **Oratorio** mang tên nhà nguyện (oratory) ở Rome. Carissimi, *Jephte* (khoảng 1648) định hình oratorio Latin.
- **[[george-frideric-handel|Handel]], *Messiah***: viết năm 1741, ra mắt **13/4/1742** ở Dublin. Hợp xướng "Hallelujah" là đoạn nổi tiếng nhất.
- **[[johann-sebastian-bach|Bach]]** ở Leipzig từ 1723 viết các chu kỳ cantata cho cả năm phụng vụ; khoảng **200** cantata nhà thờ còn lại (các nguồn đếm khác nhau), cùng khoảng 50 cantata thế tục.
- **Bach, *Thương khó theo Thánh Matthew*** (BWV 244): có lẽ diễn lần đầu Thứ Sáu Tuần Thánh 11/4/1727 ở nhà thờ Thomas, Leipzig (nguồn cũ ghi 1729); hai dàn nhạc, hai hợp xướng. [[felix-mendelssohn|Mendelssohn]] dàn dựng lại năm 1829, mở đầu phong trào hồi sinh Bach.

## Chorale trong cantata
Mỗi cantata của Bach thường kết bằng một **chorale bốn bè** — giai điệu thánh ca Luther cả giáo đoàn quen thuộc. Các chorale này là bài mẫu kinh điển của [[luat-hoa-am-bon-be|hoà âm bốn bè]] — xem [[chorale-va-chorale-prelude]].
Liên quan: [[thanh-le-va-requiem]], [[thoi-ky-baroque]].
`,
  },
  {
    slug: 'chorale-va-chorale-prelude',
    title: 'Chorale và chorale prelude',
    category: 'genres',
    aliases: ['chorale', 'choral', 'thánh ca Luther', 'chorale prelude', 'khúc dạo chorale', 'Orgelbüchlein', 'chorale Bach', 'Bach chorale'],
    summary: 'Chorale là thánh ca giáo đoàn của Giáo hội Luther; Bach hoà âm hàng trăm chorale thành bốn bè — bài mẫu kinh điển của môn hoà âm. Chorale prelude là bản đàn organ xây trên giai điệu chorale, như 46 bản trong Orgelbüchlein.',
    refs: [
      ['Wikipedia — Chorale', 'https://en.wikipedia.org/wiki/Chorale'],
      ['Wikipedia — Chorale prelude', 'https://en.wikipedia.org/wiki/Chorale_prelude'],
      ['Wikipedia — Orgelbüchlein', 'https://en.wikipedia.org/wiki/Orgelb%C3%BCchlein'],
    ],
    body: `
::wiki Orgelbüchlein | Trang bìa *Orgelbüchlein* của Bach (ảnh đầu bài Wikipedia)

## Chorale
- Luther muốn **cả giáo đoàn cùng hát** bằng tiếng Đức, nên chorale có giai điệu đơn giản, đi liền bậc, câu ngắn kết bằng **dấu ngân** (fermata).
- Khi hoà âm cho hợp xướng, giai điệu nằm ở **bè soprano**, ba bè còn lại đi theo luật [[dan-giong|dẫn giọng]]. Các chorale bốn bè của [[johann-sebastian-bach|Bach]] là bài tập chuẩn trong mọi giáo trình [[luat-hoa-am-bon-be|hoà âm bốn bè]].
::grand C5+G4/E4+C3=I C5+A4/F4+F3=IV B4+G4/D4+G3=V C5+G4/E4+C3=I | Minh hoạ cách xếp bốn bè kiểu chorale: giai điệu ở trên cùng, mỗi bè đi gần nhất có thể ([[luat-hoa-am-bon-be]])

## Chorale prelude
Bản organ ngắn dựa trên một giai điệu chorale, chơi trước khi giáo đoàn hát. Giai điệu có thể:
- nằm nguyên ở một bè, các bè kia đệm bằng một [[motif]] lặp lại;
- được [[ky-hieu-hoa-my|trang trí]] dày đặc;
- trở thành chủ đề của một đoạn [[doi-am|đối âm]] mô phỏng.
**Bach, *Orgelbüchlein*** ("Sổ tay organ"): dự định 164 bài, chỉ viết xong 46, phần lớn ở Weimar.

## Với người học piano
Chơi chorale Bach trên piano (hai bè mỗi tay) là bài tập đọc [[luat-hoa-am-bon-be|bốn bè]] và [[dien-dat-cau-nhac|giữ câu nhạc]] rất tốt; thử [[legato]] bằng ngón thay vì pedal.
Liên quan: [[oratorio-cantata-passion]], [[toccata-prelude-fugue]].
`,
  },
  {
    slug: 'to-khuc-baroque',
    title: 'Tổ khúc và các vũ khúc Baroque',
    category: 'genres',
    aliases: ['tổ khúc', 'suite', 'dance suite', 'tổ khúc Baroque', 'partita', 'allemande', 'courante', 'corrente', 'sarabande', 'gigue', 'gavotte', 'bourrée', 'passepied', 'galanterie', 'French Suites', 'English Suites', 'Water Music'],
    summary: 'Tổ khúc (suite) là chuỗi vũ khúc cùng giọng — allemande, courante, sarabande, gigue và các vũ khúc chen giữa như minuet, gavotte, bourrée. Mỗi vũ khúc có nhịp, tốc độ và tiết tấu riêng; hiểu điều đó giúp chơi Bach và Handel đúng tính chất.',
    refs: [
      ['Wikipedia — Suite (music)', 'https://en.wikipedia.org/wiki/Suite_(music)'],
      ['Wikipedia — Courante', 'https://en.wikipedia.org/wiki/Courante'],
      ['Britannica — Courante', 'https://www.britannica.com/art/courante'],
      ['LibreTexts — Music Appreciation: Suite', 'https://human.libretexts.org/Bookshelves/Music/Music_Appreciation/Music_Appreciation_I_(Jones)/02%3A_Baroque/2.18%3A_Suite'],
      ['Wikipedia — Water Music', 'https://en.wikipedia.org/wiki/Water_Music'],
      ['Wikipedia — Sarabande', 'https://en.wikipedia.org/wiki/Sarabande'],
      ['Wikipedia — Gigue', 'https://en.wikipedia.org/wiki/Gigue'],
      ['Wikipedia — Gavotte', 'https://en.wikipedia.org/wiki/Gavotte'],
      ['Wikipedia — Bourrée', 'https://en.wikipedia.org/wiki/Bourr%C3%A9e'],
    ],
    body: `
## Thứ tự chuẩn
::form Allemande Courante Sarabande (Galanterie) Gigue | Khung tổ khúc: bốn vũ khúc chính (Froberger được ghi công định hình thứ tự); vũ khúc "galanterie" chen giữa sarabande và gigue
- Tất cả các chương **cùng một giọng**; mỗi chương thường là [[hinh-thuc-am-nhac|hai đoạn]] có nhắc lại (‖: A :‖: B :‖).
- [[johann-sebastian-bach|Bach]]: *English Suites* (mỗi bài mở bằng một prelude), *French Suites* (mỗi bài có ít nhất một minuet), *Partitas*. [[george-frideric-handel|Handel]]: *Water Music* (17/7/1717, biểu diễn trên sà lan sông Thames cho vua George I).

## Tính chất từng vũ khúc
| Vũ khúc | Nhịp | Tốc độ, tính chất |
|---|---|---|
| **Allemande** | 4/4 | Vừa phải, trôi chảy, thường bắt đầu bằng nốt lấy đà ngắn |
| **Courante** | Kiểu Pháp 3/2 với [[hemiola]] (lẫn 6/4); kiểu Ý (*corrente*) 3/4 hoặc 3/8 | Pháp: trang nghiêm; Ý: nhanh hơn — Bach ghi rõ "Courante" hay "Corrente" |
| **Sarabande** | 3 phách | Chậm, nhấn **phách 2** |
| **Gigue** | Phức (6/8, 12/8) | Nhanh, thường là chương cuối, hay viết kiểu [[fugue|mô phỏng]] |
| **Minuet** | 3/4 | Vừa phải — xem [[minuet-va-trio]] |
| **Gavotte** | 2/2 | Bắt đầu bằng **nửa ô lấy đà** |
| **Bourrée** | 2/2 | Nhanh, lấy đà một phách |
::rhythm 3/4 q >h / q >h // | Sarabande: phách 2 dài và nhấn
::rhythm 6/8 >q e >q e / >q. >q. // | Gigue: nhịp phức, hai phách lớn chia ba
::rhythm 2/2 q q / h h / q q h // | Gavotte: lấy đà nửa ô (hai phách đen) rồi vào ô mạnh
::rhythm 2/2 q / q q q q / h h // | Bourrée: lấy đà một phách, nhanh

## Với người học piano
- Trước khi tập một vũ khúc của Bach, hãy **đếm và bước thử** nhịp của nó: sarabande cần nặng ở phách 2, gigue cần nảy theo nhóm ba.
- Các minuet trong *Sổ tay Anna Magdalena* là cửa ngõ vào tổ khúc — xem [[phan-tich-minuet-sol-truong]], [[lo-trinh-tac-pham]].
- Cách nhấn phách và [[cach-dien-tau|cách diễn tấu]] theo phong cách: [[phong-cach-dien-tau]].
Tổ tiên của tổ khúc: cặp pavane – galliard ([[nhac-khi-phuc-hung]]). Liên quan: [[the-loai]], [[thoi-ky-baroque]].
`,
  },
  {
    slug: 'toccata-prelude-fugue',
    title: 'Toccata, prelude, fantasia và fugue',
    category: 'genres',
    aliases: ['toccata', 'prelude và fugue', 'prelude and fugue', 'fantasia', 'Clavier bình quân', 'Well-Tempered Clavier', 'Bình quân luật', 'WTC', 'Toccata and Fugue in D minor', 'Chromatic Fantasia and Fugue'],
    summary: 'Các thể loại đàn phím "tự do" của thời Baroque: toccata (khoe ngón, xen đoạn đối âm), prelude và fantasia (như ngẫu hứng), thường đi cặp với một fugue chặt chẽ — đỉnh cao là 48 cặp prelude và fugue trong Clavier bình quân của Bach.',
    refs: [
      ['Wikipedia — Toccata', 'https://en.wikipedia.org/wiki/Toccata'],
      ['Wikipedia — The Well-Tempered Clavier', 'https://en.wikipedia.org/wiki/The_Well-Tempered_Clavier'],
      ['Wikipedia — Toccata and Fugue in D minor, BWV 565', 'https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_565'],
      ['Wikipedia — Fantasia (music)', 'https://en.wikipedia.org/wiki/Fantasia_(music)'],
    ],
    body: `
::wiki The_Well-Tempered_Clavier | Trang bìa *Das Wohltemperierte Klavier* của Bach (ảnh đầu bài Wikipedia)

## Tự do và chặt chẽ
| Thể loại | Tính chất | Ví dụ |
|---|---|---|
| **Toccata** ("chạm") | Khoe kỹ thuật: chạy ngón, [[luyen-hop-am-rai|hợp âm rải]], xen đoạn [[doi-am|đối âm]] | Frescobaldi (tập toccata 1615, 1627); Toccata và Fugue Rê thứ BWV 565 (tác giả còn tranh cãi) |
| **[[the-loai|Prelude]]** | Khám phá một [[motif]] hay một hình hợp âm rải, như [[prelude-ung-tac|ngẫu hứng]] | [[phan-tich-prelude-do-truong|Prelude Đô trưởng BWV 846]] |
| **Fantasia** | Tự do nhất, đổi tính chất liên tục | [[johann-sebastian-bach|Bach]], [[am-giai-cromatic|Chromatic]] Fantasia và Fugue BWV 903 |
| **[[fugue|Fugue]]** | Chặt chẽ: một chủ đề được mô phỏng qua các bè | Mọi fugue trong Clavier bình quân |
::form Prelude Fugue | Cặp đôi Baroque: phần tự do trước, phần chặt chẽ sau

## Clavier bình quân
- **Tập I** (1722, Köthen) và **Tập II** (khoảng 1742, Leipzig): mỗi tập 24 cặp prelude – fugue, đi qua **đủ 24 giọng** trưởng và thứ.
- Mục đích: chứng minh một cách lên dây "tốt" cho phép chơi mọi giọng (xem [[luat-binh-quan]]) và làm tài liệu dạy.
- Hai bài phân tích trong thư viện: [[phan-tich-prelude-do-truong]], [[phan-tich-prelude-do-thu-bwv847]].

## Về sau
[[frederic-chopin|Chopin]] (24 Préludes Op. 28), [[claude-debussy|Debussy]], [[sergei-rachmaninoff|Rachmaninoff]], [[dmitri-shostakovich|Shostakovich]] (24 prelude và fugue) đều tiếp nối ý tưởng "một bài cho mỗi giọng" — xem [[tieu-pham-piano]].
Liên quan: [[impromptu]], [[thoi-ky-baroque]], [[dan-phim-co]].
`,
  },
  {
    slug: 'sonata-baroque',
    title: 'Trio sonata và sonata Baroque',
    category: 'genres',
    aliases: ['trio sonata', 'sonata tam tấu', 'sonata da chiesa', 'sonata da camera', 'sonata nhà thờ', 'sonata thính phòng', 'sonata Scarlatti', 'Scarlatti sonata', 'Essercizi'],
    summary: 'Ở thời Baroque, "sonata" là bản khí nhạc nhiều chương: trio sonata (hai bè giai điệu và bè trầm liên tục) theo hai kiểu nhà thờ và thính phòng của Corelli, và các sonata đàn phím một chương của Domenico Scarlatti — tổ tiên của sonata Cổ điển.',
    refs: [
      ['Wikipedia — Trio sonata', 'https://en.wikipedia.org/wiki/Trio_sonata'],
      ['MusicWeb International — Corelli sonatas', 'https://www.musicweb-international.com/classrev/2013/Oct13/Corelli_sonatas_ckd413p.htm'],
      ['Wikipedia — Domenico Scarlatti', 'https://en.wikipedia.org/wiki/Domenico_Scarlatti'],
      ['Wikipedia — Arcangelo Corelli', 'https://en.wikipedia.org/wiki/Arcangelo_Corelli'],
    ],
    body: `
::wiki Arcangelo_Corelli | Arcangelo Corelli (ảnh đầu bài Wikipedia)

## Trio sonata
**Ba bè** — hai bè giai điệu (thường hai violin) và một [[bass-so|bè trầm liên tục]] — nhưng thường cần **bốn người** (cello + đàn phím cùng chơi bè trầm).
| Kiểu | Thứ tự chương | Ví dụ [[arcangelo-corelli|Corelli]] |
|---|---|---|
| ***Da chiesa*** (nhà thờ) | Chậm – nhanh – chậm – nhanh; chương nhanh hay viết kiểu [[fugue]] | Op. 1 (1681), Op. 3 (1689) |
| ***Da camera*** (thính phòng) | Một [[the-loai|prelude]] rồi các vũ khúc (như [[to-khuc-baroque|tổ khúc]]) | Op. 2 (1685), Op. 4 (1694) |
Ranh giới hai kiểu không tuyệt đối.
::form Chậm Nhanh Chậm Nhanh | Sonata da chiesa: bốn chương xen kẽ chậm – nhanh

## Sonata đàn phím của Scarlatti
- **[[domenico-scarlatti|Domenico Scarlatti]]** viết **555** sonata cho harpsichord (đánh số "K." theo danh mục Kirkpatrick 1953); chỉ 30 bài (*Essercizi*) được in khi ông còn sống.
- Mỗi bài **một chương**, [[hinh-thuc-am-nhac|hai đoạn]] có nhắc lại, đầy nhảy xa, bắt chéo tay, [[not-lap-lai|nốt lặp]] — kỹ thuật của guitar Tây Ban Nha.
::form A A B B | Sonata Scarlatti: ‖: A :‖: B :‖ — phần B bắt đầu ở giọng át (hoặc giọng song song) rồi quay về
Phần cuối của A và của B thường dùng **cùng chất liệu** ở hai giọng khác nhau — một bước nhỏ tới [[hinh-thuc-sonata]].
Liên quan: [[sonata-the-loai]], [[concerto-grosso]], [[dan-phim-co]].
`,
  },
  {
    slug: 'concerto-grosso',
    title: 'Concerto grosso và concerto Baroque',
    category: 'genres',
    aliases: ['concerto grosso', 'concertino', 'ripieno', 'Brandenburg Concertos', 'Brandenburg', 'Bốn mùa', 'Four Seasons', 'The Four Seasons', 'Il cimento dell’armonia e dell’inventione'],
    summary: 'Concerto Baroque đặt một nhóm độc tấu nhỏ (concertino) đối đáp với cả dàn dây (ripieno), như 12 concerto grosso Op. 6 của Corelli và sáu Brandenburg Concerto của Bach; concerto độc tấu của Vivaldi (Bốn mùa, in 1725) chuẩn hoá khuôn nhanh – chậm – nhanh với ritornello.',
    refs: [
      ['Wikipedia — Concerto grosso', 'https://en.wikipedia.org/wiki/Concerto_grosso'],
      ['Wikipedia — Twelve concerti grossi, Op. 6 (Corelli)', 'https://en.wikipedia.org/wiki/Twelve_concerti_grossi,_Op._6_(Corelli)'],
      ['Wikipedia — Brandenburg Concertos', 'https://en.wikipedia.org/wiki/Brandenburg_Concertos'],
      ["Wikipedia — Il cimento dell'armonia e dell'inventione", 'https://en.wikipedia.org/wiki/Il_cimento_dell%27armonia_e_dell%27inventione'],
    ],
    body: `
::wiki Brandenburg_Concertos | Bản thảo đề tặng *Brandenburg Concertos* (ảnh đầu bài Wikipedia)

## Hai khối âm thanh
| | Concertino | Ripieno (tutti) |
|---|---|---|
| Thành phần | Nhóm độc tấu nhỏ ([[arcangelo-corelli|Corelli]]: 2 violin + cello) | Cả dàn dây + bè trầm liên tục |
| Vai trò | Đoạn khéo léo, nhẹ | Đoạn chắc, đầy |
Sự **tương phản to – nhỏ, ít – nhiều** này cũng là gốc của [[cuong-do|cường độ]] "bậc thang" kiểu Baroque.

## Các mốc
- **Corelli, Op. 6**: 12 concerto grosso (8 kiểu nhà thờ, 4 kiểu thính phòng), in ở Amsterdam năm 1714, có lẽ viết từ thập niên 1680.
- **[[johann-sebastian-bach|Bach]], *Brandenburg Concertos***: đề tặng 24/3/1721; mỗi bài một nhóm độc tấu khác nhau.
- **[[antonio-vivaldi|Vivaldi]], Op. 8** (*Il cimento dell’armonia e dell’inventione*, 1725): 12 concerto violin, bốn bài đầu là ***Bốn mùa*** (cái tên không có trong bản in), kèm các bài thơ sonnet tả cảnh — một sớm của [[am-nhac-tuyet-doi|nhạc chương trình]].

## Hình thức ritornello
::form R S R S R S R | Chương nhanh kiểu Vivaldi: R = ritornello (cả dàn, chủ đề quay lại ở các giọng khác nhau), S = đoạn độc tấu
Chi tiết khuôn ba chương nhanh – chậm – nhanh và sự phát triển sang concerto Cổ điển, Lãng mạn: [[hinh-thuc-concerto]].
Liên quan: [[sonata-baroque]], [[thoi-ky-baroque]], [[cadenza]].
`,
  },
  {
    slug: 'khuc-mo-man',
    title: 'Khúc mở màn (overture)',
    category: 'genres',
    aliases: ['khúc mở màn', 'overture', 'French overture', 'khúc mở màn kiểu Pháp', 'Italian overture', 'concert overture', 'khúc mở màn hoà nhạc', 'The Hebrides', 'Fingal’s Cave'],
    summary: 'Bản nhạc dàn nhạc mở đầu một vở opera hay oratorio: kiểu Pháp của Lully (chậm, chấm dôi – nhanh, mô phỏng) và kiểu Ý của Alessandro Scarlatti (nhanh – chậm – nhanh, tổ tiên của giao hưởng); thế kỷ 19 có thêm khúc mở màn hoà nhạc đứng riêng như The Hebrides của Mendelssohn.',
    refs: [
      ['Wikipedia — Overture', 'https://en.wikipedia.org/wiki/Overture'],
      ['Wikipedia — French overture', 'https://en.wikipedia.org/wiki/French_overture'],
      ['Wikipedia — Italian overture', 'https://en.wikipedia.org/wiki/Italian_overture'],
      ['Britannica — Overture', 'https://www.britannica.com/art/overture-music'],
      ['Wikipedia — The Hebrides (overture)', 'https://en.wikipedia.org/wiki/The_Hebrides_(overture)'],
    ],
    body: `
## Hai kiểu Baroque
| | Kiểu Pháp ([[jean-baptiste-lully|Lully]]) | Kiểu Ý (A. Scarlatti) |
|---|---|---|
| Khuôn | **Chậm**, trang nghiêm, nhịp **[[cham-doi-dau-noi|chấm dôi]]** → **nhanh**, kiểu [[fugue|mô phỏng]] (đôi khi quay lại chậm) | **Nhanh – chậm – nhanh** |
| Hậu duệ | Mở đầu các [[to-khuc-baroque|tổ khúc]] dàn nhạc của [[johann-sebastian-bach|Bach]] | **Giao hưởng** — xem [[giao-huong]] |
::rhythm 4/4 >q. e >q. e / >h. q // | Nhịp chấm dôi "oai nghiêm" của phần chậm kiểu Pháp (minh hoạ)
::form Chậm,_chấm_dôi Nhanh,_mô_phỏng | Khúc mở màn kiểu Pháp
::form Nhanh Chậm Nhanh | Khúc mở màn kiểu Ý (sinfonia)

## Thế kỷ 19
- Khúc mở màn opera thường **giới thiệu trước** các giai điệu của vở.
- **Khúc mở màn hoà nhạc**: một chương dàn nhạc viết **cho buổi hoà nhạc**, không gắn với vở diễn — ví dụ [[felix-mendelssohn|Mendelssohn]], *The Hebrides* ("Hang Fingal", 1830/32). Từ đây đến [[tho-giao-huong|thơ giao hưởng]] chỉ còn một bước.
Liên quan: [[opera]], [[the-loai]].
`,
  },
  {
    slug: 'giao-huong',
    title: 'Giao hưởng',
    category: 'genres',
    aliases: ['giao hưởng', 'symphony', 'bản giao hưởng', 'Mannheim school', 'trường phái Mannheim', 'Mannheim rocket', 'Giao hưởng số 9 Beethoven', 'Choral Symphony', 'Jupiter Symphony'],
    summary: 'Thể loại lớn nhất cho dàn nhạc: thường bốn chương (nhanh theo hình thức sonata – chậm – minuet/scherzo – kết nhanh). Lớn lên từ khúc mở màn opera Ý, được trường phái Mannheim và Haydn định hình, Beethoven mở rộng (Giao hưởng số 9 có hợp xướng, 1824), rồi đến Brahms, Bruckner, Mahler.',
    refs: [
      ['Britannica — Mannheim school', 'https://www.britannica.com/art/Mannheim-school'],
      ['Britannica — Symphony', 'https://www.britannica.com/art/symphony-music'],
      ['Wikipedia — Symphony', 'https://en.wikipedia.org/wiki/Symphony'],
      ['Wikipedia — Symphony No. 9 (Beethoven)', 'https://en.wikipedia.org/wiki/Symphony_No._9_(Beethoven)'],
    ],
    body: `
::wiki Symphony_No._9_(Beethoven) | Giao hưởng số 9 của Beethoven (ảnh đầu bài Wikipedia)

## Khuôn bốn chương
::form Nhanh_(sonata) Chậm Minuet/Scherzo Kết_nhanh | Khuôn giao hưởng Cổ điển bốn chương
| Chương | Tốc độ | Hình thức thường gặp |
|---|---|---|
| 1 | Nhanh (đôi khi có mở đầu chậm) | [[hinh-thuc-sonata]] |
| 2 | Chậm | Ba đoạn, [[bien-tau|biến tấu]] hoặc sonata rút gọn |
| 3 | Vừa / nhanh | [[minuet-va-trio|Minuet và trio]]; từ [[ludwig-van-beethoven|Beethoven]] thường là **scherzo** |
| 4 | Nhanh | Sonata hoặc [[rondo]] |

## Lịch sử ngắn
- **Gốc**: khúc mở màn kiểu Ý nhanh – chậm – nhanh ([[khuc-mo-man]]), được tách ra chơi ở hoà nhạc.
- **Mannheim** (từ thập niên 1740, Stamitz): dàn nhạc nổi tiếng với **[[cuong-do|crescendo]] dài**, đổi cường độ đột ngột và "tên lửa Mannheim" — [[luyen-hop-am-rai|hợp âm rải]] đi lên nhanh. Những đổi mới tương tự cũng xảy ra ở Berlin, Vienna.
::staff treble C4 E4 G4 C5 E5 G5 C6 | Minh hoạ "tên lửa Mannheim": hợp âm rải đi lên nhanh, thường kèm crescendo
- **[[joseph-haydn|Haydn]]** (104 giao hưởng) và **[[wolfgang-amadeus-mozart|Mozart]]** (số cuối là số 41 "Jupiter", 1788) đưa thể loại thành chuẩn.
- **Beethoven** (9 giao hưởng): Giao hưởng số 9 ra mắt ở Vienna 7/5/1824, chương cuối phổ "Ode an die Freude" của Schiller cho bốn giọng đơn ca và hợp xướng — thường được nói là lần đầu một nhà soạn nhạc lớn đưa giọng hát vào giao hưởng.
- **Thế kỷ 19**: [[johannes-brahms|Brahms]] (4), [[anton-bruckner|Bruckner]] (9 bài đánh số), [[gustav-mahler|Mahler]] (9 và bài số 10 dang dở) — quy mô và dàn nhạc ngày càng lớn. [[hector-berlioz|Berlioz]] viết **giao hưởng chương trình** ([[tho-giao-huong]]).

## Dàn nhạc giao hưởng
| Bộ | Nhạc cụ chính |
|---|---|
| Dây | Violin I, II, viola, cello, contrabass |
| Gỗ | Flute, oboe, clarinet, bassoon |
| Đồng | Horn, trumpet, trombone, tuba |
| Gõ | Timpani và bộ gõ |

## Với người học piano
Bản chuyển soạn giao hưởng cho piano ([[franz-liszt|Liszt]] chuyển cả 9 giao hưởng Beethoven) và bản bốn tay là cách người thế kỷ 19 "nghe" giao hưởng ở nhà. Nghe chương 1 một giao hưởng Haydn với sơ đồ [[hinh-thuc-sonata]] là bài tập nghe hình thức tốt — xem [[nghe-nhac-chu-dong]].
Liên quan: [[the-loai]], [[nhac-thinh-phong]], [[thoi-ky-co-dien]].
`,
  },
  {
    slug: 'nhac-thinh-phong',
    title: 'Nhạc thính phòng',
    category: 'genres',
    aliases: ['nhạc thính phòng', 'chamber music', 'tứ tấu đàn dây', 'string quartet', 'tứ tấu', 'tam tấu piano', 'piano trio', 'ngũ tấu', 'quintet', 'Trout Quintet', 'ngũ tấu Cá hồi', 'divertimento', 'serenade', 'Eine kleine Nachtmusik', 'Op. 33 Haydn'],
    summary: 'Âm nhạc cho nhóm nhỏ, mỗi bè một người — "cuộc trò chuyện giữa những người bạn". Trung tâm là tứ tấu đàn dây (Haydn Op. 33, 1781), cùng tam tấu piano, ngũ tấu (Cá hồi của Schubert), sonata song tấu và các bản giải trí như divertimento, serenade (Eine kleine Nachtmusik, 1787).',
    refs: [
      ['Wikipedia — Chamber music', 'https://en.wikipedia.org/wiki/Chamber_music'],
      ['Wikipedia — String Quartets, Op. 33 (Haydn)', 'https://en.wikipedia.org/wiki/String_Quartets,_Op._33_(Haydn)'],
      ['Wikipedia — Eine kleine Nachtmusik', 'https://en.wikipedia.org/wiki/Eine_kleine_Nachtmusik'],
      ['Wikipedia — Trout Quintet', 'https://en.wikipedia.org/wiki/Trout_Quintet'],
      ['Wikipedia — Piano trio', 'https://en.wikipedia.org/wiki/Piano_trio'],
    ],
    body: `
::wiki String_quartet | Tứ tấu đàn dây (ảnh đầu bài Wikipedia *String quartet*)

## Các đội hình
| Tên | Thành phần | Ví dụ |
|---|---|---|
| Sonata song tấu | Violin (cello…) + piano | [[ludwig-van-beethoven|Beethoven]], *Kreutzer* |
| **Tam tấu piano** | Piano, violin, cello | Beethoven, *Archduke*; [[franz-schubert|Schubert]] |
| **Tứ tấu đàn dây** | 2 violin, viola, cello | [[joseph-haydn|Haydn]] (68), [[wolfgang-amadeus-mozart|Mozart]], Beethoven (16) |
| Ngũ tấu piano | Piano + 4 dây | Schubert, *Cá hồi* D. 667 (1819: piano, violin, viola, cello, **contrabass**; một chương [[bien-tau|biến tấu]] trên ca khúc *Die Forelle*); [[robert-schumann|Schumann]], [[johannes-brahms|Brahms]] |
| Divertimento, serenade | Nhóm nhỏ, nhiều chương nhẹ | Mozart, *Eine kleine Nachtmusik* K. 525 |

## Tứ tấu đàn dây
- Bốn chương như [[giao-huong|giao hưởng]], nhưng mỗi bè là một người — các bè **ngang hàng**, đối đáp nhau.
- **Haydn, Op. 33** (1781) được quảng cáo là viết theo "một cách hoàn toàn mới và đặc biệt" (có thể một phần là lời chào hàng); minuet được thay bằng **[[minuet-va-trio|scherzo]]** nên tập có biệt danh "Gli Scherzi".
- Mozart, *Eine kleine Nachtmusik*: xong ở Vienna 10/8/1787; ngày nay bốn chương (một minuet thứ hai đã mất), chỉ in khoảng 1827.
::form Allegro Romanze Menuetto Rondo | *Eine kleine Nachtmusik*: bốn chương còn lại

## Với người học piano
Chơi nhạc thính phòng là cách học **nghe người khác** tốt nhất: cân bằng âm lượng, thở cùng nhau, nhìn tín hiệu vào bài. Bắt đầu với sonata song tấu hay các bản bốn tay — xem [[hoi-hop-bieu-dien]], [[dem-hat-piano]].
Liên quan: [[sonata-the-loai]], [[the-loai]], [[thoi-ky-co-dien]].
`,
  },
  {
    slug: 'sonata-the-loai',
    title: 'Sonata (thể loại) và sonatina',
    category: 'genres',
    aliases: ['sonata piano', 'piano sonata', 'sonata (thể loại)', 'sonatina', '32 sonata Beethoven', 'sonata violin'],
    summary: 'Sonata là tác phẩm nhiều chương cho một nhạc cụ (hoặc một nhạc cụ với piano) — trung tâm của tiết mục piano từ Haydn, Mozart, 32 sonata của Beethoven đến Liszt và Prokofiev. Sonatina là sonata nhỏ, dễ, cửa ngõ của người học. Đừng nhầm thể loại sonata với hình thức sonata.',
    refs: [
      ['Wikipedia — Sonata', 'https://en.wikipedia.org/wiki/Sonata'],
      ['Wikipedia — Sonatina', 'https://en.wikipedia.org/wiki/Sonatina'],
      ['Wikipedia — Piano sonata', 'https://en.wikipedia.org/wiki/Piano_sonata'],
    ],
    body: `
## Thể loại khác hình thức
| | **Sonata (thể loại)** | **[[hinh-thuc-sonata|Hình thức sonata]]** |
|---|---|---|
| Là gì | Cả **tác phẩm** nhiều chương | Cách tổ chức **một chương** (trình bày – phát triển – tái hiện) |
| Ví dụ | "Sonata Ánh trăng" (3 chương) | Chương 1 của hầu hết sonata Cổ điển |
[[giao-huong|Giao hưởng]], [[nhac-thinh-phong|tứ tấu]], [[hinh-thuc-concerto|concerto]] cũng dùng hình thức sonata — chỉ khác đội hình.

## Khuôn chương
::form Nhanh_(sonata) Chậm (Minuet/Scherzo) Nhanh_(rondo/sonata) | Sonata Cổ điển: 3 chương (Haydn, Mozart) hoặc 4 chương (thường ở Beethoven)
Bè đệm điển hình của sonata Cổ điển là **bass Alberti** — [[luyen-hop-am-rai|hợp âm rải]] theo thứ tự thấp – cao – giữa – cao:
::staff bass C3 G3 E3 G3 C3 G3 E3 G3 / B2 G3 D3 G3 C3 G3 E3 G3 | Bass Alberti (thấp – cao – giữa – cao) trên C – G7 – C (xem [[ket-cau]], [[phan-tich-sonata-k545]])

## Các mốc
| Nhà soạn nhạc | Ghi chú |
|---|---|
| [[joseph-haydn|Haydn]], [[wolfgang-amadeus-mozart|Mozart]] | Mozart K. 545 "sonata cho người mới" — [[phan-tich-sonata-k545]] |
| **[[ludwig-van-beethoven|Beethoven]]** | **32 sonata piano** — "Pathétique", "Ánh trăng", "Appassionata", "Hammerklavier"… (xem [[phan-tich-pathetique-chuong-2]], [[phan-tich-anh-trang-chuong-1]]) |
| [[franz-schubert|Schubert]], [[frederic-chopin|Chopin]], [[franz-liszt|Liszt]] | Liszt, Sonata Si thứ: một chương lớn gộp cả bốn chương ([[bien-doi-chu-de]]) |
| [[thoi-ky-the-ky-20|Thế kỷ 20]] | [[sergei-prokofiev|Prokofiev]], [[alexander-scriabin|Scriabin]], [[bela-bartok|Bartók]] |

## Sonatina
Sonata **ngắn và dễ**, thường ba chương nhỏ — [[muzio-clementi|Clementi]], [[friedrich-kuhlau|Kuhlau]], Diabelli. Là bước đệm hoàn hảo trước sonata thật: [[phan-tich-sonatina-clementi-op36-1]].
Tổ tiên [[thoi-ky-baroque|Baroque]]: [[sonata-baroque]]. Liên quan: [[the-loai]], [[lo-trinh-tac-pham]].
`,
  },
  {
    slug: 'tieu-pham-piano',
    title: 'Tiểu phẩm piano Lãng mạn',
    category: 'genres',
    aliases: ['tiểu phẩm', 'tiểu phẩm piano', 'character piece', 'nocturne', 'ballade', 'étude', 'etude', 'luyện khúc', 'mazurka', 'polonaise', 'waltz', 'valse', 'bài ca không lời', 'Songs Without Words', 'intermezzo', 'rhapsody', 'rhapsody Hungary', 'Hungarian Rhapsody', 'scherzo Chopin', 'prelude Chopin', 'Transcendental Études'],
    summary: 'Thế kỷ 19, đàn piano trong phòng khách sinh ra hàng loạt thể loại ngắn, mỗi bài một tâm trạng: nocturne, bài ca không lời, ballade, étude, prelude, impromptu, scherzo, intermezzo, rhapsody và các vũ khúc valse, mazurka, polonaise — mỗi loại có nhịp và tính chất riêng.',
    refs: [
      ['Wikipedia — Character piece', 'https://en.wikipedia.org/wiki/Character_piece'],
      ['WFMT — John Field, who invented the nocturne', 'https://www.wfmt.com/2019/03/16/meet-john-field-the-irish-composer-who-invented-the-nocturne/'],
      ['Wikipedia — Songs Without Words', 'https://en.wikipedia.org/wiki/Songs_Without_Words'],
      ['Wikipedia — Polonaise', 'https://en.wikipedia.org/wiki/Polonaise'],
      ['Cedarville — Musical Offerings: on the polonaise', 'https://publications.cedarville.edu/musicalofferings/spring_2026/33/'],
      ['Wikipedia — Mazurka', 'https://en.wikipedia.org/wiki/Mazurka'],
      ['Soundbrenner — Waltz rhythm', 'https://www.soundbrenner.com/blogs/articles/waltz-rhythm'],
      ['Wikipedia — Kinderszenen', 'https://en.wikipedia.org/wiki/Kinderszenen'],
    ],
    body: `
::wiki Frédéric_Chopin | Chopin — người đưa tiểu phẩm piano lên đỉnh cao (ảnh đầu bài Wikipedia)

## Các thể loại
| Thể loại | Tính chất | Tiêu biểu |
|---|---|---|
| **Nocturne** | Trữ tình, giai điệu "hát" trên đệm rải | [[john-field|John Field]] (in từ 1812), [[frederic-chopin|Chopin]] (21) — [[phan-tich-nocturne-op9-so2]] |
| **Bài ca không lời** | Giai điệu như ca khúc | [[felix-mendelssohn|Mendelssohn]]: 8 tập × 6 bài (1829 – 45) |
| **Ballade** | Kể chuyện, kịch tính | Chopin (4: Op. 23, 38, 47, 52), [[johannes-brahms|Brahms]] |
| **Étude** (luyện khúc) | Một vấn đề kỹ thuật, nhưng là tác phẩm nghệ thuật | Chopin Op. 10 và Op. 25 (12 bài mỗi tập); [[franz-liszt|Liszt]], *Transcendental Études* (bản cuối 1852) — xem [[bai-tap-ngon]] |
| **Prelude** | Ngắn, một ý | Chopin, 24 Préludes Op. 28 — [[phan-tich-prelude-mi-thu-op28-so4]] |
| **[[impromptu|Impromptu]]** | Như [[ngau-hung-piano|ngẫu hứng]] | [[franz-schubert|Schubert]], Chopin |
| **Scherzo** | Nhanh, kịch tính (ở Chopin không còn "đùa") | Chopin (4) |
| **Intermezzo** | Tâm tình, cô đọng | Brahms Op. 117 – 119 |
| **Rhapsody** | Tự do, chất liệu dân gian | Liszt, 19 *Hungarian Rhapsodies* |
| Tập tiểu phẩm | Nhiều bài ngắn thành một chu kỳ | [[robert-schumann|Schumann]], *Kinderszenen* Op. 15 (1838, 13 bài, có *Träumerei* — [[phan-tich-traumerei]]) |

## Ba vũ khúc 3/4 — cùng nhịp, khác hẳn tính chất
**Valse (waltz)**: bè trầm "một – hai – ba": nốt trầm ở phách 1, hợp âm nhẹ ở phách 2 và 3; ở Vienna phách 2 thường đến **hơi sớm**.
::staff bass C3=1 E3+G3=2 E3+G3=3 / G2=1 F3+G3=2 F3+G3=3 | Đệm valse: trầm – hợp âm – hợp âm (minh hoạ)
**Mazurka** (Ba Lan): nhấn **lệch sang phách 2 hoặc 3**, hay có nhịp [[cham-doi-dau-noi|chấm dôi]]; phách 1 rõ nhưng nhẹ.
::rhythm 3/4 e.-s q >q / e.-s >q q // | Mazurka: nhịp chấm dôi đầu ô, nhấn ở phách 3 rồi phách 2 (minh hoạ)
**Polonaise** (Ba Lan): vừa phải, trang trọng; ô điển hình bắt đầu bằng **một móc đơn + hai móc kép**, tiếp theo bốn móc đơn.
::rhythm 3/4 e-s-s e-e e-e e-e // | Nhịp polonaise điển hình — Chopin dùng nó ở những chỗ then chốt chứ không phải mọi ô
Liên hệ: [[minuet-va-trio|minuet]] cũng ở 3/4 nhưng vừa phải và cân đối; [[hemiola]] làm nhòe phách trong 3/4.

## Với người học piano
Tiểu phẩm là "giáo trình cảm xúc": mỗi thể loại dạy một kỹ năng — nocturne dạy [[dien-dat-cau-nhac|hát]] và [[ban-dap|pedal]], valse dạy [[buoc-nhay-xa|nhảy tay trái]], mazurka dạy [[rubato]] và nhấn lệch, étude dạy kỹ thuật. Lộ trình bài: [[lo-trinh-tac-pham]].
Liên quan: [[the-loai]], [[thoi-ky-lang-man]], [[lied]].
`,
  },
  {
    slug: 'lied',
    title: 'Lied và liên khúc ca khúc',
    category: 'genres',
    aliases: ['Lied', 'lieder', 'art song', 'ca khúc nghệ thuật', 'song cycle', 'liên khúc ca khúc', 'Erlkönig', 'Winterreise', 'Dichterliebe', 'strophic', 'phổ suốt', 'through-composed', 'mélodie'],
    summary: 'Ca khúc nghệ thuật cho giọng hát và piano trên thơ hay, nơi piano là bạn diễn ngang hàng chứ không chỉ đệm. Schubert (Erlkönig 1815, Winterreise 1827), Schumann (Dichterliebe 1840), Brahms, Wolf; ở Pháp là mélodie của Fauré, Debussy.',
    refs: [
      ['Wikipedia — Lied', 'https://en.wikipedia.org/wiki/Lied'],
      ['Wikipedia — Song cycle', 'https://en.wikipedia.org/wiki/Song_cycle'],
      ['Wikipedia — Dichterliebe', 'https://en.wikipedia.org/wiki/Dichterliebe'],
      ['Wikipedia — Winterreise', 'https://en.wikipedia.org/wiki/Winterreise'],
      ['Wikipedia — Erlkönig (Schubert)', 'https://en.wikipedia.org/wiki/Erlk%C3%B6nig_(Schubert)'],
    ],
    body: `
::wiki Winterreise | *Winterreise* của Schubert (ảnh đầu bài Wikipedia)

## Hai cách phổ thơ
::form A A A A | Strophic: mọi khổ thơ cùng một giai điệu — như dân ca
::form A B C D | Phổ suốt (through-composed): nhạc đổi theo nội dung từng khổ — như *Erlkönig*
Giữa hai cách là **strophic có biến đổi** (A A′ A″…). Xem [[hinh-thuc-am-nhac]].

## Các mốc
| Tác phẩm | Năm | Ghi chú |
|---|---|---|
| [[franz-schubert|Schubert]], *Erlkönig* | 1815 | Một ca sĩ đóng bốn vai (người kể, cha, con, Vua yêu tinh); piano đóng vai **vó ngựa phi** — nốt lặp liên tục ở tay phải ([[not-lap-lai]]) |
| Schubert, *Winterreise* | 1827 | **Liên khúc** 24 ca khúc trên thơ Müller |
| [[robert-schumann|Schumann]], *Dichterliebe* | 1840 | 16 ca khúc trên thơ Heine, trong "Năm ca khúc" của ông (hơn 130 Lieder) |
| [[johannes-brahms|Brahms]], Wolf, [[gustav-mahler|Mahler]], [[richard-strauss|Richard Strauss]] | Cuối thế kỷ 19 | Strauss: *Vier letzte Lieder* (1948) |
| [[gabriel-faure|Fauré]], [[claude-debussy|Debussy]] | Pháp | **Mélodie** |

## Piano trong Lied
Piano **tả cảnh và tâm trạng**: guồng quay sợi trong *Gretchen am Spinnrade*, dòng suối trong *Die schöne Müllerin*, đoạn kết piano sau khi giọng hát dừng trong *Dichterliebe*. Đệm Lied là bài học tuyệt vời về cân bằng và nghe giọng hát — xem [[dem-hat-piano]].
Liên quan: [[tieu-pham-piano|bài ca không lời]], [[ca-khuc-the-tuc-trung-co]], [[thoi-ky-lang-man]].
`,
  },
  {
    slug: 'tho-giao-huong',
    title: 'Thơ giao hưởng và nhạc chương trình',
    category: 'genres',
    aliases: ['thơ giao hưởng', 'symphonic poem', 'tone poem', 'Symphonie fantastique', 'giao hưởng chương trình', 'Má vlast', 'Tổ quốc tôi', 'Also sprach Zarathustra'],
    summary: 'Âm nhạc kể chuyện hay tả cảnh theo một "chương trình" ngoài âm nhạc: Symphonie fantastique của Berlioz (1830) với idée fixe, các thơ giao hưởng một chương của Liszt (13 bài), Má vlast của Smetana, các tone poem của Richard Strauss.',
    refs: [
      ['Wikipedia — Symphonie fantastique', 'https://en.wikipedia.org/wiki/Symphonie_fantastique'],
      ['Wikipedia — Symphonic poem', 'https://en.wikipedia.org/wiki/Symphonic_poem'],
      ['Wikipedia — Symphonic poems (Liszt)', 'https://en.wikipedia.org/wiki/Symphonic_poems_(Liszt)'],
      ['Wikipedia — Má vlast', 'https://en.wikipedia.org/wiki/M%C3%A1_vlast'],
      ['Wikipedia — Program music', 'https://en.wikipedia.org/wiki/Program_music'],
    ],
    body: `
::wiki Symphonie_fantastique | *Symphonie fantastique* của Berlioz (ảnh đầu bài Wikipedia)

## Nhạc chương trình và nhạc "tuyệt đối"
Thế kỷ 19 tranh luận gay gắt: âm nhạc nên **tự nó** (nhạc tuyệt đối — [[johannes-brahms|Brahms]], Hanslick) hay nên **kể chuyện** (nhạc chương trình — [[franz-liszt|Liszt]], [[richard-wagner|Wagner]])? Xem [[am-nhac-tuyet-doi]], [[triet-hoc-lang-man-ve-am-nhac]].

## Berlioz: Symphonie fantastique (1830)
- Ra mắt ở Paris 5/12/1830; **năm chương**, kể giấc mơ của một nghệ sĩ si tình (lấy cảm hứng từ nữ diễn viên Harriet Smithson).
- **Idée fixe**: một chủ đề tượng trưng cho người yêu, trở lại ở mọi chương trong những "hình hài" khác nhau — tiền thân của [[bien-doi-chu-de|biến đổi chủ đề]] và **leitmotif** ([[opera]]).
- Chương cuối trích giai điệu **Dies irae** ([[thanh-ca-gregorian]]).
::form Mơ_màng Vũ_hội Ngoài_đồng Ra_pháp_trường Đêm_phù_thuỷ | Năm chương của *Symphonie fantastique*

## Thơ giao hưởng
- **Liszt** là người đầu tiên dùng tên "thơ giao hưởng" (*Symphonische Dichtung*) cho **13** tác phẩm một chương của mình (12 bài 1848 – 58, bài thứ 13 năm 1882). Trước đó đã có những tác phẩm tương tự nên nói ông "đặt tên", không phải "phát minh".
- [[bedrich-smetana|Smetana]], ***Má vlast*** (Tổ quốc tôi, 1874 – 79): sáu bài, nổi tiếng nhất là *Vltava* (dòng sông).
- **[[richard-strauss|Richard Strauss]]**: *Don Juan*, *Till Eulenspiegel*, *Also sprach Zarathustra*.
- [[claude-debussy|Debussy]], *Prélude à l’après-midi d’un faune* — xem [[an-tuong]].

## Với người học piano
Nhiều [[tieu-pham-piano|tiểu phẩm piano]] cũng có "chương trình": *[[phan-tich-traumerei|Kinderszenen]]*, *Bức tranh triển lãm* của [[modest-mussorgsky|Mussorgsky]], các tiêu đề của Debussy. Đọc tiêu đề trước rồi tự hỏi: âm nhạc tả điều đó **bằng cách nào** (tiết tấu, âm vực, hoà âm)? Xem [[nghe-nhac-chu-dong]].
Liên quan: [[giao-huong]], [[khuc-mo-man]], [[thoi-ky-lang-man]].
`,
  },
  {
    slug: 'ballet',
    title: 'Nhạc ballet',
    category: 'genres',
    aliases: ['ballet', 'nhạc ballet', 'Hồ thiên nga', 'Swan Lake', 'Kẹp hạt dẻ', 'The Nutcracker', 'Nutcracker', 'Ballets Russes', 'The Rite of Spring', 'Lễ bái xuân', 'Rite of Spring'],
    summary: 'Âm nhạc viết cho múa trên sân khấu: từ ballet trong opera Pháp, đến các ballet lớn của Tchaikovsky (Hồ thiên nga 1877, Kẹp hạt dẻ 1892) và cuộc cách mạng của Ballets Russes — Lễ bái xuân của Stravinsky (1913).',
    refs: [
      ['Wikipedia — Ballet', 'https://en.wikipedia.org/wiki/Ballet'],
      ['Wikipedia — Swan Lake', 'https://en.wikipedia.org/wiki/Swan_Lake'],
      ['Wikipedia — The Nutcracker', 'https://en.wikipedia.org/wiki/The_Nutcracker'],
      ['Wikipedia — The Rite of Spring', 'https://en.wikipedia.org/wiki/The_Rite_of_Spring'],
      ['History Today — A musical riot', 'https://www.historytoday.com/archive/months-past/musical-riot'],
      ['Illinois Public Media — Did the Rite of Spring really incite a riot?', 'https://will.illinois.edu/clefnotes/entry/did-the-rite-of-spring-really-incite-a-riot'],
    ],
    body: `
::wiki The_Rite_of_Spring | *Lễ bái xuân* (1913) — ảnh đầu bài Wikipedia

## Các mốc
| Tác phẩm | Năm | Ghi chú |
|---|---|---|
| [[pyotr-ilyich-tchaikovsky|Tchaikovsky]], *Hồ thiên nga* | Ra mắt 4/3/1877, Bolshoi (Moscow) | Lần đầu không thành công; bản dàn dựng phổ biến ngày nay là của Petipa và Ivanov ở Mariinsky năm 1895 |
| Tchaikovsky, *Kẹp hạt dẻ* | 18/12/1892, Mariinsky | Diễn cùng tối với opera *Iolanta* |
| [[igor-stravinsky|Stravinsky]], *Lễ bái xuân* | 29/5/1913, Paris (Ballets Russes, chỉ huy Monteux) | Tiết tấu không đều, đa điệu tính; buổi ra mắt hỗn loạn — các nhân chứng kể khác nhau, nhiều người cho rằng vũ đạo của Nijinsky gây phản ứng hơn cả âm nhạc |

## Nhạc cho múa nghĩa là gì?
- **Nhịp phải rõ** để vũ công đếm được; mỗi tiết mục là một vũ khúc ngắn với nhịp riêng (valse, polonaise, mazurka — xem [[tieu-pham-piano]]).
- Tổ khúc ballet (*suite*) là bản hoà nhạc gồm các tiết mục hay nhất — như *Nutcracker Suite*.
- *Lễ bái xuân* phá vỡ quy ước đó: [[nhip-hon-hop|nhịp đổi liên tục]], nhấn lệch dữ dội — xem [[dao-phach]], [[da-dieu-tinh]].

## Với người học piano
Người đệm cho lớp múa ballet chơi piano theo từng bài tập (plié, tendu, grand [[nhip-do|allegro]]…): cần nhịp vững, câu 8 phách rõ, và khả năng [[choi-phuc-dieu|chơi theo tai]] hay [[ngau-hung-piano|ngẫu hứng]].
Liên quan: [[to-khuc-baroque]], [[giao-huong]], [[thoi-ky-the-ky-20]].
`,
  },
  {
    slug: 'operetta-va-nhac-kich',
    title: 'Operetta và nhạc kịch (musical)',
    category: 'genres',
    aliases: ['operetta', 'nhạc kịch', 'musical theatre', 'nhạc kịch Broadway', 'Broadway', 'Die Fledermaus', 'Show Boat', 'Oklahoma!', 'West Side Story', 'Gilbert and Sullivan', 'book musical'],
    summary: 'Opera "nhẹ" với thoại nói: operetta của Offenbach, Johann Strauss II (Die Fledermaus 1874), Gilbert & Sullivan; rồi nhạc kịch Mỹ thế kỷ 20 — Show Boat (1927), Oklahoma! (1943), West Side Story (1957) — nơi bài hát và vũ đạo đẩy cốt truyện.',
    refs: [
      ['Wikipedia — Operetta', 'https://en.wikipedia.org/wiki/Operetta'],
      ['Wikipedia — Die Fledermaus', 'https://en.wikipedia.org/wiki/Die_Fledermaus'],
      ['Wikipedia — Musical theatre', 'https://en.wikipedia.org/wiki/Musical_theatre'],
      ['Jackson Upper Co — No longer only make-believe (Show Boat)', 'https://jacksonupperco.com/2023/01/04/no-longer-only-make-believe/'],
      ['Wikipedia — Show Boat', 'https://en.wikipedia.org/wiki/Show_Boat'],
      ['Wikipedia — Oklahoma!', 'https://en.wikipedia.org/wiki/Oklahoma!'],
    ],
    body: `
::wiki Show_Boat | *Show Boat* (1927) — ảnh đầu bài Wikipedia

## Operetta (thế kỷ 19)
| Tác phẩm | Năm | Ghi chú |
|---|---|---|
| Offenbach, *Orphée aux enfers* | 1858 | Có điệu "can-can" nổi tiếng |
| [[johann-strauss-ii|Johann Strauss II]], *Die Fledermaus* | 5/4/1874, Theater an der Wien | Chuyện nó "thất bại" lúc ra mắt là huyền thoại; đầy valse — xem [[tieu-pham-piano]] |
| Gilbert & Sullivan | *H.M.S. Pinafore* 1878, *The Mikado* 1885 | Operetta Anh, lời châm biếm |
Khác [[opera]]: có **thoại nói**, nội dung hài, nhạc dễ nhớ.

## Nhạc kịch Mỹ
- ***Show Boat*** (Kern và Hammerstein, mở màn 27/12/1927, nhà hát Ziegfeld): tiền thân của nhạc kịch "liền mạch".
- ***Oklahoma!*** (1943): bài hát và vũ đạo **đẩy cốt truyện** thay vì chỉ là tiết mục chen ngang.
- ***West Side Story*** ([[leonard-bernstein|Bernstein]], 1957): Romeo và Juliet ở New York, nhịp Latin, jazz và nhạc cổ điển.
::form Verse:1 Refrain_A:2 A:2 B:2 A:2 | Ca khúc Broadway kinh điển: đoạn dẫn (verse) rồi điệp khúc 32 ô AABA — xem [[hinh-thuc-ca-khuc-32]]
Rất nhiều **jazz standard** đến từ nhạc kịch Broadway — xem [[hoc-piano-jazz]].
Liên quan: [[nhac-pho-thong-the-ky-20]], [[nhac-phim-va-tro-choi]].
`,
  },
  {
    slug: 'trao-luu-the-ky-20',
    title: 'Các trào lưu nhạc nghệ thuật thế kỷ 20',
    category: 'genres',
    aliases: ['tân cổ điển', 'neoclassicism', 'neoclassical music', 'nhạc ngẫu nhiên', 'aleatoric music', 'aleatoric', 'nhạc bất định', 'indeterminacy', 'Pulcinella'],
    summary: 'Sau 1900 các thể loại cũ được làm mới và nhiều hướng đi mới xuất hiện: tân cổ điển (Pulcinella của Stravinsky, 1920), nhạc ngẫu nhiên và bất định (4′33″ của Cage, 1952), tối giản (In C của Riley, 1964), nhạc phổ âm (Grisey, Murail, thập niên 1970).',
    refs: [
      ['Wikipedia — Neoclassicism (music)', 'https://en.wikipedia.org/wiki/Neoclassicism_(music)'],
      ['Classical Music — What is the point of John Cage’s 4′33″?', 'https://www.classical-music.com/features/works/what-is-the-point-of-john-cage-433'],
      ['Wikipedia — In C', 'https://en.wikipedia.org/wiki/In_C'],
      ['London Sinfonietta — Spectral music', 'https://londonsinfonietta.org.uk/?p=6709'],
      ['Universalis — Musique spectrale', 'https://www.universalis.fr/encyclopedie/musique-spectrale/'],
      ['Wikipedia — Aleatoric music', 'https://en.wikipedia.org/wiki/Aleatoric_music'],
    ],
    body: `
## Bản đồ các hướng đi
| Trào lưu | Thời gian | Ý tưởng | Mốc |
|---|---|---|---|
| **Tân cổ điển** | Khoảng 1920 – 50 | Quay về hình thức [[thoi-ky-baroque|Baroque]], Cổ điển với kết cấu trong, hoà âm khô | [[igor-stravinsky|Stravinsky]], *Pulcinella* (1920), *Symphony of Psalms* (1930); [[sergei-prokofiev|Prokofiev]], [[giao-huong|Giao hưởng]] "Cổ điển" |
| **Phi điệu tính, 12 âm** | Từ 1908 | Bỏ [[dieu-tinh|trung tâm giọng]] | Xem [[phi-dieu-tinh]], [[ky-thuat-12-am]] |
| **Nhạc ngẫu nhiên / bất định** | Từ thập niên 1950 | Dùng **may rủi**; người chơi hoặc môi trường quyết định một phần kết quả | [[john-cage|Cage]], *4′33″* — David Tudor diễn lần đầu 29/8/1952 ở Woodstock (New York), ba chương, đánh dấu bằng việc đóng nắp đàn |
| **Tối giản** | Từ thập niên 1960 | [[so-chi-nhip|Ô nhịp]] lặp, [[kiem-soat-toc-do|nhịp đều]], quá trình chậm, hoà âm tĩnh | Riley, *In C* (1964: 53 câu ngắn, nhạc cụ tuỳ chọn); Reich, Glass — xem [[toi-gian]] |
| **Nhạc phổ âm** ([[nhac-pho]]) | Từ thập niên 1970 | Lấy hoà âm và hình thức từ **phổ bồi âm** của một âm thanh | Grisey, *Partiels* (1975); Murail, *Gondwana* (1980) |
| **Điện tử** | Từ 1948 | Âm thanh thu, cắt dán, tổng hợp | Xem [[nhac-dien-tu]] |
::staff treble C4=4 E4=5 G4=6 Bb4=7≈ C5=8 D5=9 E5=10 | Bồi âm 4 – 10 của nốt C2 — "hợp âm" mà nhạc phổ âm khai thác (bồi âm 7 thấp hơn B♭ bình quân); xem [[chuoi-boi-am]]

## 4′33″ — một tác phẩm "im lặng"?
Người chơi ngồi trước đàn mà **không đánh nốt nào**; "âm nhạc" là mọi tiếng động trong phòng. Câu hỏi nó đặt ra — âm nhạc là gì, tác phẩm tồn tại ở đâu — là chủ đề của [[triet-hoc-am-nhac]] và [[dinh-nghia-am-nhac]].

## Với người học piano
Thế kỷ 20 có nhiều bài piano rất hợp để dạy: [[bela-bartok|Bartók]] (*Mikrokosmos*), Kabalevsky, Prokofiev (*Nhạc cho trẻ em*), các bài tối giản lặp mẫu. Chúng mở tai học trò với [[am-giai-bat-cung|âm giai mới]], [[nhip-hon-hop|nhịp lẻ]] và [[am-cum|âm cụm]].
Liên quan: [[hoa-am-the-ky-20]], [[thoi-ky-the-ky-20]], [[ballet]].
`,
  },
  {
    slug: 'nhac-dien-tu',
    title: 'Nhạc điện tử',
    category: 'genres',
    aliases: ['nhạc điện tử', 'electronic music', 'electroacoustic music', 'nhạc điện thanh', 'musique concrète', 'nhạc cụ thể', 'elektronische Musik', 'synthesizer', 'đàn tổng hợp', 'Moog', 'Moog synthesizer', 'tape music', 'Switched-On Bach', 'Pierre Schaeffer'],
    summary: 'Âm nhạc tạo, ghi và biến đổi bằng thiết bị điện tử: musique concrète của Pierre Schaeffer (1948, cắt dán âm thanh thu sẵn), elektronische Musik ở Cologne (Stockhausen), đàn tổng hợp Moog (1964) — rồi đến nhạc pop điện tử, nhạc dance và đàn phím điện tử mà người học piano dùng hằng ngày.',
    refs: [
      ['Wikipedia — Musique concrète', 'https://en.wikipedia.org/wiki/Musique_concr%C3%A8te'],
      ['Universalis — Musique concrète', 'https://www.universalis.fr/encyclopedie/musique-concrete/'],
      ['Wikipedia — Moog synthesizer', 'https://en.wikipedia.org/wiki/Moog_synthesizer'],
      ['Wikipedia — Electronic music', 'https://en.wikipedia.org/wiki/Electronic_music'],
      ['Wikipedia — Detroit techno', 'https://en.wikipedia.org/wiki/Detroit_techno'],
    ],
    body: `
::wiki Moog_synthesizer | Đàn tổng hợp Moog dạng module (ảnh đầu bài Wikipedia *Moog synthesizer*)

## Ba ngả đường đầu tiên
| Hướng | Nơi, năm | Cách làm | Mốc |
|---|---|---|---|
| **Musique concrète** | Paris, 1948 | Thu **âm thanh thật** ("vật thể âm thanh") rồi cắt, lặp, đổi tốc độ — đầu tiên trên đĩa, sau trên băng từ | Schaeffer, *[[tieu-pham-piano|Étude]] aux chemins de fer* (tiếng tàu hoả), phát sóng 5/10/1948 — thường coi là ngày ra đời thể loại |
| **Elektronische Musik** | Đài WDR, Cologne, từ 1951 | Dựng âm thanh từ **sóng sin** và máy phát, gắn với tư duy chuỗi | Stockhausen, *Gesang der Jünglinge* (1956) — kết hợp cả giọng hát thu |
| **Đàn tổng hợp** | Moog, 1964 | Bộ dao động và khuếch đại **điều khiển bằng điện áp**, nối module bằng dây — đàn tổng hợp thương mại đầu tiên | Wendy Carlos, *Switched-On Bach* (1968) — [[johann-sebastian-bach|Bach]] trên Moog |

## Từ phòng thí nghiệm đến sàn nhảy
- Đàn tổng hợp và máy trống đi vào pop, rock, rồi tạo ra các dòng **house** (Chicago, cuối thập niên 1970 – đầu 1980), **techno** (Detroit, thập niên 1980) — xem [[nhac-pho-thong-the-ky-20]].
- **Lấy mẫu** (sampling): dùng đoạn thu sẵn làm nhạc cụ — hậu duệ trực tiếp của musique concrète, nền tảng của hip hop.

## Với người học piano
- **Đàn piano điện** dùng mẫu thu từ đàn thật hoặc [[doi-am|mô phỏng]] âm thanh — xem [[cac-loai-dan-piano]].
- Hiểu **âm sắc** như tổ hợp bồi âm (xem [[am-sac]], [[chuoi-boi-am]]) là nền tảng để dùng đàn tổng hợp.
Liên quan: [[trao-luu-the-ky-20]], [[toi-gian]], [[nhac-phim-va-tro-choi]].
`,
  },
  {
    slug: 'nhac-phim-va-tro-choi',
    title: 'Nhạc phim và nhạc trò chơi điện tử',
    category: 'genres',
    aliases: ['nhạc phim', 'film music', 'film score', 'soundtrack', 'nhạc nền phim', 'King Kong (1933)', 'Star Wars', 'nhạc trò chơi', 'video game music', 'nhạc game', 'chiptune', 'Super Mario Bros.'],
    summary: 'Từ người chơi piano đệm phim câm đến dàn nhạc giao hưởng Hollywood: nhạc phim dùng leitmotif của Wagner để gắn chủ đề với nhân vật (King Kong 1933, Star Wars 1977). Nhạc trò chơi điện tử bắt đầu từ vài kênh âm thanh "chip" và phải lặp, thích ứng theo người chơi.',
    refs: [
      ['LibreTexts — Early Hollywood scoring: Max Steiner and the leitmotivic score', 'https://human.libretexts.org/Courses/Prince_Georges_Community_College/Music_Appreciation%3A_A_Topical_Approach_to_Music_Genre_and_Style/13%3A_Music_in_Film/13.02%3A_Early_Hollywood_Scoring-_Max_Steiner_and_the_Leitmotivic_Score'],
      ['Wikipedia — Film score', 'https://en.wikipedia.org/wiki/Film_score'],
      ['Wikipedia — King Kong (1933 film)', 'https://en.wikipedia.org/wiki/King_Kong_(1933_film)'],
      ['Wikipedia — Video game music', 'https://en.wikipedia.org/wiki/Video_game_music'],
    ],
    body: `
::wiki King_Kong_(1933_film) | *King Kong* (1933) — ảnh đầu bài Wikipedia

## Lịch sử ngắn
| Giai đoạn | Đặc điểm |
|---|---|
| Phim câm | Người chơi **piano hoặc organ** trong rạp đệm trực tiếp, thường ghép từ các [[cau-nhac|đoạn nhạc]] có sẵn theo cảnh (vui, buồn, rượt đuổi) — một nghề cần [[ngau-hung-piano|ngẫu hứng]] và [[choi-phuc-dieu|chơi theo tai]] |
| Phim có tiếng (từ 1927) | Dàn nhạc giao hưởng kiểu Lãng mạn muộn |
| Max Steiner, *King Kong* (1933) | Mốc quan trọng của nhạc phim xây bằng **[[bien-doi-chu-de|leitmotif]]** (các nguồn tranh cãi về chữ "đầu tiên") |
| [[john-williams|John Williams]], *Star Wars* (1977) | Hồi sinh phong cách giao hưởng Lãng mạn với các chủ đề nhân vật |

## Công cụ của nhạc phim
- **Leitmotif**: chủ đề ngắn gắn với nhân vật, đồ vật, ý tưởng — từ [[opera|nhạc kịch Wagner]].
- **Hoà âm màu sắc**: [[trung-am-cromatic|quan hệ trung âm cromatic]], [[hop-am-muon|hợp âm mượn]], [[dieu-thuc|điệu thức]] (Lydian cho cảm giác kỳ diệu).
- **Nhạc trong cảnh và ngoài cảnh**: nhân vật có nghe thấy nhạc hay không.
- **Ostinato** tạo căng thẳng — xem [[ostinato]].

## Nhạc trò chơi điện tử
- Máy chơi game đời đầu chỉ có vài kênh âm thanh (sóng vuông, sóng tam giác…) — âm thanh "chip".
- Nhạc phải **lặp** liền mạch và **thích ứng** khi người chơi đổi khu vực, gặp nguy hiểm.
- Ví dụ quen thuộc: nhạc của Koji Kondo cho *Super Mario Bros.* (1985).

## Với người học piano
Bản chuyển soạn piano của nhạc phim và nhạc game là động lực rất mạnh với học trò nhỏ tuổi. Dùng chúng để dạy [[ky-hieu-hop-am|đọc hợp âm]], [[hop-am-muon]], [[ostinato]].
Liên quan: [[nhac-dien-tu]], [[operetta-va-nhac-kich]], [[giao-huong]].
`,
  },
  {
    slug: 'nhac-pho-thong-the-ky-20',
    title: 'Các dòng nhạc phổ thông thế kỷ 20',
    category: 'genres',
    aliases: ['nhạc phổ thông', 'popular music', 'nhạc pop', 'pop music', 'rock and roll', 'rock', 'nhạc rock', 'R&B', 'rhythm and blues', 'soul', 'Motown', 'funk', 'reggae', 'disco', 'hip hop', 'rap', 'house music', 'techno', 'EDM', 'nhạc dance', 'country music', 'K-pop', 'four on the floor'],
    summary: 'Từ blues, gospel và country đầu thế kỷ 20 đến rock and roll, rock, soul/Motown, funk, reggae, disco, hip hop, house, techno và K-pop — mỗi dòng nhạc có một "chữ ký" tiết tấu và hoà âm riêng mà người dạy piano cần nhận ra.',
    refs: [
      ['Wikipedia — Popular music', 'https://en.wikipedia.org/wiki/Popular_music'],
      ['Wikipedia — Classic female blues', 'https://en.wikipedia.org/wiki/Classic_female_blues'],
      ['Wikipedia — Motown', 'https://en.wikipedia.org/wiki/Motown'],
      ['Wikipedia — Reggae', 'https://en.wikipedia.org/wiki/Reggae'],
      ['The Canadian Encyclopedia — Reggae', 'https://thecanadianencyclopedia.ca/en/article/reggae-emc'],
      ['History.com — Hip hop is born at a birthday party in the Bronx', 'https://www.history.com/this-day-in-history/august-11/hip-hop-is-born-at-a-birthday-party-in-the-bronx'],
      ['Wikipedia — Frankie Knuckles', 'https://en.wikipedia.org/wiki/Frankie_Knuckles'],
      ['Wikipedia — Detroit techno', 'https://en.wikipedia.org/wiki/Detroit_techno'],
      ['Wikipedia — Clave (rhythm)', 'https://en.wikipedia.org/wiki/Clave_(rhythm)'],
    ],
    body: `
## Dòng thời gian
| Dòng nhạc | Khởi đầu | Chữ [[ky-am|ký âm]] nhạc | Mốc |
|---|---|---|---|
| **Blues** | Thu âm từ 1920 | Khung [[blues-12-nhip|12 ô]] I – IV – V, [[am-giai-blues|nốt blue]] | W. C. Handy, *St. Louis Blues* (in 1914); Mamie Smith, *Crazy Blues* (thu 10/8/1920) |
| **Jazz** | Đầu [[thoi-ky-the-ky-20|thế kỷ 20]] | [[swing|Swing]], [[ngau-hung-piano|ngẫu hứng]] | Xem [[phong-cach-jazz]] |
| **Gospel** | Thập niên 1930 | Hỏi – đáp, hoà giọng dày | Thomas A. Dorsey — xem [[tai-hoa-am-gospel]] |
| **Country** | Thập niên 1920 | Fiddle, guitar steel, hoà âm đơn giản, kể chuyện | |
| **Rock and roll** | Giữa thập niên 1950 | **Backbeat** (nhấn phách 2 – 4), guitar điện, khung 12 ô | Chuck [[phan-tich-va-bieu-dien|Berry]], Elvis Presley |
| **Rock** | Thập niên 1960 | Ban nhạc guitar – bass – trống; album như một tác phẩm | The Beatles, *Sgt. Pepper* (1967) |
| **Soul / R&B / Motown** | 1959 | Giọng hát kiểu gospel, ban nhạc phòng thu | Motown do Berry Gordy lập ở Detroit 12/1/1959 |
| **Funk** | Giữa thập niên 1960 | Nhấn mạnh **phách 1**, bass và guitar đảo phách, kèn đồng "chặt" | James Brown |
| **Reggae** | Cuối thập niên 1960, Jamaica | Từ mento → ska (khoảng 1957) → rocksteady (khoảng 1966); guitar/đàn phím "skank" **phách nghịch**, bass nổi | Toots & the Maytals, *Do the Reggay* (1968); Bob Marley |
| **Disco** | Thập niên 1970 | Trống trầm **mọi phách** ("four on the floor") | |
| **Hip hop** | 1973, Bronx | DJ lặp đoạn "break" của đĩa funk, MC đọc rap; về sau là **lấy mẫu** | Bữa tiệc của DJ Kool Herc, 1520 Sedgwick Avenue, 11/8/1973 |
| **House / techno** | Chicago (cuối 1970s – 1980s) / Detroit (1980s) | Máy trống, four on the floor; tên "house" từ câu lạc bộ Warehouse của Frankie Knuckles | Tuyển *Techno! The New Dance Sound of Detroit* (1988) |
| **K-pop, pop toàn cầu** | Thập niên 1990 – nay | Nhóm nhạc thần tượng, pha trộn thể loại, vũ đạo | |

## Bốn "chữ ký" tiết tấu
::rhythm 4/4 q >q q >q // | Backbeat (rock, pop): nhấn phách 2 và 4
::rhythm 4/4 >q >q >q >q // | Four on the floor (disco, house): trống trầm trên mọi phách
::rhythm 4/4 re e re e re e re e // | Skank reggae: guitar hoặc đàn phím chơi ở **phách nghịch** (minh hoạ)
::rhythm 4/4 q. q. q / rq q q rq // | Clave son 3 – 2 (nhạc Latin): ba nốt rồi hai nốt — xem [[dao-phach]]
::form Intro Verse Chorus Verse Chorus Bridge Chorus Outro | Khuôn verse – chorus (phiên khúc – điệp khúc) phổ biến của pop và rock

## Với người học piano
- Đệm pop trên piano: nhận ra tiết tấu dòng nhạc rồi chuyển nó vào tay trái – tay phải — xem [[dem-hat-piano]], [[dieu-dem-pho-bien]].
- Hoà âm pop dùng nhiều vòng bốn hợp âm — xem [[vong-hop-am]], [[hop-am-6-va-add]].
Liên quan: [[tan-nhac-viet-nam]], [[nhac-dien-tu]], [[blues-12-nhip]].
`,
  },
  {
    slug: 'tan-nhac-viet-nam',
    title: 'Tân nhạc Việt Nam',
    category: 'genres',
    aliases: ['tân nhạc', 'tân nhạc Việt Nam', 'ca khúc Việt Nam', 'nhạc vàng', 'nhạc đỏ', 'bolero Việt Nam', 'V-pop', 'Nguyễn Văn Tuyên', 'Văn Cao', 'Phạm Duy', 'Đoàn Chuẩn'],
    summary: 'Ca khúc Việt Nam viết theo lối phương Tây (giai điệu có hoà âm, guitar và piano đệm), thường lấy mốc buổi trình diễn của Nguyễn Văn Tuyên ở Hà Nội năm 1938. Bài này giới thiệu các giai đoạn và cách gọi tên các dòng nhạc một cách trung tính.',
    refs: [
      ['ThingsAsian — Tân nhạc', 'https://thingsasian.com/node/3464.html'],
      ['RFA — Glimpses of tân nhạc before 1975', 'https://www.rfa.org/vietnamese/news/programs/MusicForWeekend/glimpses-tan-nhac-bf-1975-vh-08012011134943.html'],
      ['Wikipedia — Yellow music', 'https://en.wikipedia.org/wiki/Yellow_music'],
      ['RAJ — Bolero: remaking pre-1975 music in post-socialist Vietnam', 'https://www.rajraf.org/article/bolero-remaking-pre-1975-music-in-post-socialist-vietnam/1167'],
    ],
    body: `
## Mốc khởi đầu
- **Tân nhạc** ("nhạc mới") là ca khúc tiếng Việt viết theo **lối phương Tây**: giai điệu theo [[am-giai-truong|giọng trưởng]] – [[am-giai-thu|thứ]] (hoặc pha [[am-giai-ngu-cung|ngũ cung]]), có [[he-thong-hoa-am-co-dien|hoà âm]], đệm guitar hay piano, khuôn phiên khúc – điệp khúc.
- Mốc quy ước thường được nhắc: buổi trình diễn của **Nguyễn Văn Tuyên** ở Hà Nội ngày **9/6/1938**; sau đó báo *Ngày Nay* đăng các ca khúc mới. (Đã có ca khúc kiểu mới từ trước 1938 — đây chỉ là một mốc quy ước.)
- Các tác giả tiêu biểu thời kỳ đầu: Văn Cao, Phạm Duy, Đoàn Chuẩn.

## Các dòng nhạc 1954 – 1975 và sau
- **Nhạc vàng** là tên gọi dòng nhạc phổ thông ở miền Nam (Quốc gia Việt Nam, Việt Nam Cộng hoà), nhiều bài theo điệu **bolero** chậm, tình cảm, về tình yêu và quê hương. Tên gọi được đặt trong thế đối lập với **nhạc đỏ** — nhạc cách mạng ở miền Bắc. Sau 1975 nhạc vàng bị cấm trong nước và tiếp tục ở hải ngoại; về sau được phép trở lại dần.
- Các tên gọi này **chồng lấn và mang màu sắc chính trị**; khi dạy nên tập trung vào đặc điểm âm nhạc: điệu đệm, giai điệu, hoà âm.
- **V-pop** (từ cuối thập niên 1990 – 2000): chịu ảnh hưởng pop toàn cầu, K-pop, [[nhac-dien-tu|nhạc điện tử]] — xem [[nhac-pho-thong-the-ky-20]].

## Điệu đệm thường gặp
Ca khúc Việt Nam được đệm bằng các điệu quen thuộc: bolero, slow, [[tieu-pham-piano|valse]], tango, rumba, ballad — xem [[dieu-dem-pho-bien]], [[dem-hat-piano]].

## Với người học piano
- Ca khúc quen thuộc là chất liệu tuyệt vời để dạy [[ky-hieu-hop-am|đọc hợp âm]], [[vong-hop-am|vòng hợp âm]] và [[choi-phuc-dieu|chơi theo tai]].
- So sánh với [[am-nhac-truyen-thong-viet-nam|nhạc truyền thống]]: tân nhạc dùng cao độ bình quân và hoà âm phương Tây, còn nhạc cổ truyền dùng hơi, nhấn, luyến.
Liên quan: [[piano-viet-nam]].
`,
  },
]
