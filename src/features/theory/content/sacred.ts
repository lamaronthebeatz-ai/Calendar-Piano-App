import type { Article } from '../wiki'

export const sacred: Article[] = [
  {
    slug: "am-nhac-nha-tho",
    title: "Âm nhạc nhà thờ: lộ trình — bình ca, đệm organ và Bach",
    category: 'sacred',
    also: ['genres', 'musicology'],
    aliases: ["âm nhạc nhà thờ", "thánh nhạc", "nhạc phụng vụ", "âm nhạc phụng vụ", "sacred music", "church music", "lộ trình âm nhạc nhà thờ"],
    summary: "Trang mở đầu của mục Âm nhạc nhà thờ: đi từ cách viết và đọc bình ca Gregorian (ký âm, tám điệu thức, công thức thánh vịnh, sách hát, phần mềm Gregorio), sang cách organ đệm cho bình ca và cho cộng đoàn hát, rồi đến những tài liệu Bach để lại cho việc dạy organ, bè trầm số và phối chorale. Mỗi bài nối với phần lý thuyết (điệu thức, đối âm, luật bốn bè) và với khung Âm nhạc học.",
    refs: [
      ["Wikipedia — Gregorian chant", "https://en.wikipedia.org/wiki/Gregorian_chant"],
      ["Wikipedia — Organ mass", "https://en.wikipedia.org/wiki/Organ_mass"],
      ["Bach Digital — Orgel-Büchlein BWV 599–644", "https://bachdigital.dl.uni-leipzig.de/receive/BachDigitalWork_work_00011155"],
    ],
    body: `
Mục này trả lời ba câu hỏi: **bình ca Gregorian được viết và hát thế nào**, **[[organ-ong|organ]] đệm cho nó (và cho cộng đoàn) ra sao**, và **[[johann-sebastian-bach|Bach]] đã dạy âm nhạc nhà thờ bằng những tài liệu gì**. Mọi điều trong mục đều có nguồn; chỗ nào nguồn yếu hoặc mâu thuẫn được ghi rõ ngay tại chỗ.

::timeline 922-926=St_Gall_359 1030=Guido 1578=Cabezón 1623=Titelouze 1650=Scheidt 1706=Arnstadt 1723=Inventions 1738=Vorschriften 1765-1787=Chorale_in 1857=Niedermeyer 1903=Tra_le_sollecitudini 1908=Graduale_Vatican 1967=Musicam_Sacram 1979=Graduale_Triplex 2016=Gregorio_trên_CTAN | Các mốc chính của mục này

## Lộ trình đọc
| Bước | Bài | Nối sang lý thuyết |
|---|---|---|
| 1. Nền | [[thanh-ca-gregorian]] — [[the-loai-am-nhac|thể loại]], lịch sử, Guido | [[lich-su-ky-am]], [[guido-d-arezzo]] |
| 2. Đọc bản | [[ky-am-binh-ca-gregorian]] — nốt vuông, neume, khoá Đô/Fa, dấu nghỉ, ba trường phái về nhịp | [[khuong-nhac]], [[lich-su-ky-am]] |
| 3. [[cao-do|Cao độ]] | [[tam-dieu-thuc-va-giong-thanh-vinh]] — 8 điệu thức, âm kết, âm đọc, công thức thánh vịnh | [[dieu-thuc]] |
| 4. Sách hát và văn kiện | [[sach-hat-va-van-kien-binh-ca]] — Liber Usualis, Graduale, Tra le sollecitudini, Musicam Sacram | [[van-ban-hoc-am-nhac|văn bản học]] |
| 5. Tự viết | [[viet-binh-ca-cho-tieng-ban-dia]] — đặt lời, trọng âm, Simple English Propers | [[am-nhac-va-ngon-ngu|âm nhạc và ngôn ngữ]] |
| 6. Soạn bản in | [[gregorio-va-gabc]] — phần mềm Gregorio, cú pháp gabc | [[ky-am]] |
| 7. Đệm bình ca | [[dem-organ-cho-binh-ca]] — Niedermeyer, Solesmes, ictus, đăng ký [[am-sac|âm sắc]] | [[luat-hoa-am-bon-be]], [[dieu-thuc]] |
| 8. Organ thay lời hát | [[alternatim-va-thanh-le-organ]] — Cabezón, Titelouze, [[francois-couperin|Couperin]], Scheidt | [[cantus-firmus]], [[chorale-va-chorale-prelude]] |
| 9. Đệm cộng đoàn | [[dem-hat-cong-doan-tren-organ]] — Arnstadt 1706, chorale "passaggio", giai đoạn hiện đại | [[dem-hat-piano]] |
| 10. Tài liệu của Bach | [[tai-lieu-su-pham-cua-bach]] — Orgelbüchlein, Inventions, Vorschriften 1738, Schemelli, 371 chorale | [[bass-so]], [[phan-tich-invention-so-1]] |
| 11. Bach dạy thế nào | [[bach-day-hoc-tro]] — lời kể của C. P. E. Bach, Gerber, Kirnberger, Kittel | [[partimento]], [[doi-am-5-loai]] |
| 12. Phối chorale | [[phoi-chorale-kieu-bach]] — lập kế hoạch kết, bè trầm trước, nghiên cứu kho 371 chorale | [[luat-hoa-am-bon-be]], [[cau-ket]] |
| 13. Ở Việt Nam | [[binh-ca-va-organ-o-viet-nam]] — điều đã biết và những khoảng trống | [[am-nhac-ton-giao-va-dan-toc-viet-nam]] |

## Hai cách đọc cùng một mục
- **Theo lý thuyết:** bước 2 – 3 là ký âm và điệu thức; bước 7, 11, 12 là hoà âm và [[doi-am|đối âm]] áp dụng. Các bài được xếp chéo vào mục [[dieu-thuc|Âm giai & giọng]], [[luat-hoa-am-bon-be|Hợp âm & hoà âm]] và [[ky-am|Ký âm]].
- **Theo [[am-nhac-hoc|âm nhạc học]]:** bước 4 và 10 là **nguồn văn bản** (bản thảo, [[an-ban-urtext|ấn bản]], văn kiện); bước 7 – 9 là **thực hành biểu diễn lịch sử**; bước 11 là **lịch sử lý thuyết và sư phạm**. Thẻ Âm nhạc học có nhánh riêng "Âm nhạc nhà thờ" gom các bài này.

## Ba điều cần nhớ
1. **Bình ca vốn hát không đệm.** Tra le sollecitudini (1903) chỉ "cho phép" organ, với điều kiện organ "chỉ nâng đỡ, không lấn át" — xem [[dem-organ-cho-binh-ca]].
2. **Bach không để lại sách lý thuyết in.** Những gì ta biết về cách ông dạy đến từ lời tựa các tập nhạc, từ một bản chép tay năm 1738 và từ lời kể của con trai, học trò.
3. **Nhiều "luật" phổ biến có nguồn yếu.** Ví dụ "tránh kết V – I khi đệm bình ca" chỉ thấy trong diễn đàn và sách thực hành; nguồn học thuật mới xác nhận Niedermeyer và d'Ortigue (1857) bác bỏ kết át – chủ và [[dau-hoa|dấu hoá bất thường]].
`,
  },
  {
    slug: "ky-am-binh-ca-gregorian",
    title: "Ký âm bình ca Gregorian: nốt vuông, neume và dấu nhịp",
    category: 'sacred',
    also: ['basics', 'musicology'],
    aliases: ["ký âm bình ca", "nốt vuông", "square notation", "neume", "nốt neume", "neumes", "khoá Đô bình ca", "khoá Fa bình ca", "custos", "divisio", "punctum", "virga", "podatus", "pes", "clivis", "scandicus", "climacus", "torculus", "porrectus", "quilisma", "oriscus", "liquescent", "episema", "ictus", "semiology", "ký hiệu học Gregorian", "Cardine", "Graduale Triplex", "St Gall 359", "Laon 239", "mensuralism"],
    summary: "Cách đọc một trang bình ca: khuông 4 dòng, khoá Đô và khoá Fa chỉ vị trí nửa cung chứ không chỉ cao độ tuyệt đối, custos báo nốt đầu dòng sau, vạch divisio chia câu, và các neume cơ bản (punctum, virga, podatus, clivis, torculus, porrectus…). Bài trình bày ba quan niệm về nhịp — Solesmes cổ điển với ictus, ký hiệu học (semiology) của Cardine và trường phái tỉ lệ (mensuralism) — cùng hai bản chép tay gốc St Gall 359 và Laon 239.",
    wiki: "Neume",
    refs: [
      ["LilyPond — Music glossary: divisio", "https://lilypond.org/doc/v2.25/Documentation/music-glossary/divisio"],
      ["LilyPond — Gregorian square neume ligatures", "https://lilypond.org/doc/v2.25/Documentation/notation/gregorian-square-neume-ligatures"],
      ["Universität Basel — Bảng neume St Gall (PDF)", "https://tales.nmc.unibas.ch/media/from-ink-to-sound/2.6_1_Table_of_St_Gall_neumes.pdf"],
      ["CMAA — Square notes (tài liệu nhập môn, PDF)", "https://media.churchmusicassociation.org/pdf/squarenotes.pdf"],
      ["Wikipedia — Semiology (Gregorian chant)", "https://en.wikipedia.org/wiki/Semiology_(Gregorian_chant)"],
      ["Wikipedia — Proportionalism (Gregorian chant)", "https://en.wikipedia.org/wiki/Proportionalism_(Gregorian_chant)"],
      ["Wikipedia — Oriscus", "https://en.wikipedia.org/wiki/Oriscus"],
      ["e-codices — St. Gallen, Cod. Sang. 359 (Cantatorium)", "https://e-codices.ch/en/list/one/csg/0359"],
      ["Solesmes — Graduale Triplex", "https://www.solesmes.com/node/9068"],
      ["Cambridge — Reading neumes (dự án Boethius)", "https://boethius.mus.cam.ac.uk/resources/reading-neumes"],
      ["Bibliotekanauki — bài về Pothier, Mocquereau và ictus (PDF)", "https://bibliotekanauki.pl/articles/668869.pdf"],
      ["JPMMS — Pontificio Istituto di Musica Sacra và trường phái ký hiệu học của Cardine", "https://www.cambridge.org/core/journals/journal-of-the-plainsong-and-mediaeval-music-society/article/pontificio-istituto-di-musica-sacra-in-rome-and-the-semiological-school-of-dom-eugene-cardine/3ED7D353865D430E1C6AD06CFFC82D97"],
    ],
    body: `
Bài này là bước 2 của [[am-nhac-nha-tho]]. Nền lịch sử (Guido, Solesmes) ở [[thanh-ca-gregorian]] và [[lich-su-ky-am]].

## Khuông 4 dòng và hai khoá
- Bình ca in theo lối **nốt vuông** trên **[[khuong-nhac|khuông]] 4 dòng** (không phải 5).
- **Khoá Đô** đánh dấu dòng có nốt *do*, **[[khoa-fa|khoá Fa]]** đánh dấu dòng có *fa*. Khoá cho người hát biết **[[cung-nua-cung|nửa cung]] nằm ở đâu** (mi – fa, si – do), nên là mốc **tương đối** theo lối [[xuong-am|xướng âm]], không phải [[cao-do-tuyet-doi|cao độ tuyệt đối]] như [[khoa-nhac|khoá nhạc]] hiện đại.
- Khoá có thể đặt ở nhiều dòng; tài liệu hướng dẫn gabc liệt kê các vị trí thường gặp **c2, c3, c4, f3, f4** (số = dòng tính từ dưới lên). *Quy tắc "khoá Đô ở dòng 2 – 4, khoá Fa ở dòng 2 – 3" chỉ thấy trong diễn đàn — coi là thói quen, không phải luật.*
- **Custos**: nốt nhỏ ở cuối dòng, báo trước nốt đầu tiên của dòng sau.

::staff treble C4=do D4=re E4=mi F4=fa G4=sol A4=la B4=si C5=do | Đổi sang khuông hiện đại: với khoá Đô, nốt trên dòng có khoá là do; hai nửa cung là mi – fa và si – do. Cao độ thật do người xướng chọn

## Vạch phân câu (divisio)
Các vạch dọc cắt một phần hay toàn bộ khuông để chia câu. Bảng thuật ngữ của LilyPond gọi chúng là **divisio minima** (nghỉ ngắn), **divisio maior** (vừa), **divisio maxima** (dài) và **[[tam-dieu-thuc-va-giong-thanh-vinh|finalis]]** (kết bài hoặc kết đoạn); có [[an-ban-urtext|ấn bản]] dùng dấu phẩy (*virgula*) thay divisio minima. *Sách Solesmes gọi bằng tên khác (vạch một phần tư, nửa, cả, kép); cách hai bộ tên khớp nhau chưa được xác nhận bằng nguồn.*

## Các neume cơ bản
| Neume | Số nốt | Hướng | Ghi chú |
|---|---|---|---|
| **Punctum** | 1 | — | nốt vuông đơn |
| **Virga** | 1 | — | nốt có đuôi |
| **Podatus** (*pes*) | 2 | lên | nốt dưới hát trước |
| **Clivis** (*flexa*) | 2 | xuống | |
| **Scandicus** | 3 | lên dần | |
| **Climacus** | 3 | xuống dần | |
| **Torculus** | 3 | thấp – cao – thấp | |
| **Porrectus** | 3 | cao – thấp – cao | |
::staff treble G4=punctum C5=virga F4=po G4=datus A4=cli G4=vis F4=tor A4=cu G4=lus A4=por F4=rec A4=tus | Hướng đi của một số neume viết lại bằng nốt hiện đại (minh hoạ cao độ tương đối, không phải hình dạng)

**Neume đặc biệt:**
- **Quilisma** — nét giữa răng cưa. Cách hát **chưa thống nhất**: lối Solesmes kéo dài nốt đứng trước; nguồn khác tả như một láy rung đi lên.
- **Liquescent** — nốt nhỏ hoặc nét xoắn ở cuối âm tiết kết thúc bằng phụ âm vang (LilyPond). *Epiphonus* là podatus lướt, *cephalicus* là clivis lướt, *ancus* là climacus lướt.
- **Oriscus** — một nốt, thường gắn vào neume khác; nghĩa gốc không rõ; Cardine đọc nó như một sức căng dẫn sang nốt sau.

## Ba quan niệm về nhịp
| Trường phái | Ý chính | Người tiêu biểu |
|---|---|---|
| **Solesmes cổ điển** | Các nốt gom thành nhóm 2 và 3 quanh **ictus** — một "chạm đất" nhịp nhàng, *không phải* trọng âm. Ấn bản Solesmes thêm dấu: vạch **episema** dọc (ictus), episema ngang (kéo dài), chấm (*mora vocis*, nhân đôi nốt) | Pothier đặt nền, **Mocquereau** (*Le Nombre musical grégorien*) hệ thống hoá |
| **Ký hiệu học** (*semiology*) | Đọc neume trong bản chép tay cổ để biết sắc thái; không coi chúng là [[truong-do|trường độ]] tỉ lệ; nốt âm tiết đơn bình thường là ngắn | **Eugène Cardine**, *Semiologia gregoriana* (Roma 1968; bản Anh 1982); dạy ở Viện Giáo hoàng Thánh nhạc 1952 – 1984 |
| **Tỉ lệ** (*mensuralism*) | [[ky-am|Ký âm]] cổ ghi trường độ dài – ngắn theo tỉ lệ (vd. 2 : 1) | Jan Vollaerts (1958), Gregory Murray, Jan van Biezen |
- Một bài trên tạp chí Ba Lan viết rằng ictus nay được xem là "khái niệm sai"; một học giả trên danh sách thư MEI-L cho rằng ictus và episema là những bổ sung "riêng" của Solesmes, không có trong [[sach-hat-va-van-kien-binh-ca|ấn bản Vatican]].
- Theo trích dẫn (gián tiếp, qua diễn đàn) lời tựa *Antiphonale Monasticum* 2005, chấm và episema dọc "không có trong bản chép tay [[thoi-ky-trung-co|trung cổ]] nào", và các sách Solesmes mới bỏ chúng. *Nguồn gián tiếp.*
Vì vậy khi gặp ictus trong một bản đệm [[organ-ong|organ]] cũ — xem [[dem-organ-cho-binh-ca]] — hãy biết đó là lý thuyết của một thời.

## Hai bản chép tay gốc và Graduale Triplex
- **St Gall, Cod. Sang. 359** (*Cantatorium*, khoảng 922 – 926; có nguồn xếp sớm hơn): e-codices gọi là bản chép tay âm nhạc hoàn chỉnh sớm nhất còn lại có ký hiệu neume, chứa các bài hát đơn ca của [[thanh-le-va-requiem|thánh lễ]].
- **Laon, Bibliothèque municipale 239** (Graduale, khoảng 900 – 930, neume vùng Lorraine/Metz).
- **Graduale Triplex** (Solesmes, 1979): lấy Graduale Romanum 1974 rồi chép thêm neume **Laon màu đen phía trên** khuông và neume **họ St Gall màu đỏ phía dưới** — ba lớp ký âm trên cùng một trang. Người chép neume là Rupert Fischer và Marie-Claire Billecocq, học trò của Cardine.
::wiki Neume | Neume trong một bản chép tay (ảnh đầu bài Wikipedia *Neume*)

## Liên hệ
- Ký âm bình ca là một chặng trong [[lich-su-ky-am]]; khoá Đô di động là tổ tiên của [[khoa-do|khoá Đô]] trên khuông 5 dòng.
- Muốn tự gõ một trang nốt vuông: [[gregorio-va-gabc]].
`,
  },
  {
    slug: "tam-dieu-thuc-va-giong-thanh-vinh",
    title: "Tám điệu thức Gregorian và công thức hát thánh vịnh",
    category: 'sacred',
    also: ['scales'],
    aliases: ["tám điệu thức Gregorian", "8 điệu thức Gregorian", "điệu thức Gregorian", "Gregorian mode", "psalm tone", "psalm tones", "giọng thánh vịnh", "công thức thánh vịnh", "âm đọc", "reciting tone", "tenor (điệu thức)", "âm kết", "finalis", "tonary", "tonus peregrinus", "differentia", "mediant (thánh vịnh)", "intonatio"],
    summary: "Bình ca xếp theo 8 điệu thức trên 4 âm kết Rê, Mi, Fa, Sol: điệu lẻ là chính (authentic), điệu chẵn là phụ (plagal). Mỗi điệu có một âm đọc (tenor) — nơi lời thánh vịnh được đọc trên một cao độ. Bài đưa bảng 8 điệu thức, biểu đồ âm kết – âm đọc, cấu trúc một câu thánh vịnh (khởi xướng, đọc, flexa, mediant, kết) và \"điệu lữ khách\" nằm ngoài hệ thống.",
    wiki: "Gregorian_mode",
    refs: [
      ["Wikipedia — Gregorian mode", "https://en.wikipedia.org/wiki/Gregorian_mode"],
      ["ORB — Bảng các điệu thức", "https://the-orb.arlima.net/encyclop/culture/music/orbmode.htm"],
      ["Teoria — Gregorian modes", "https://teoria.com/en/reference/g-h/gregorian.php"],
      ["CC Watershed — Lesson 10: Modality and psalm tones", "https://ccwatershed.org/gregorian/lesson-10-modality-and-psalm-tones"],
      ["Britannica — Psalm tone", "https://www.britannica.com/art/psalm-tone"],
      ["Wikipedia — Reciting tone", "https://en.wikipedia.org/wiki/Reciting_tone"],
      ["OSB — Psalm tones", "https://archive.osb.org/gen/topics/psalmtones.html"],
      ["Wikipedia — Tonary", "https://en.wikipedia.org/wiki/Tonary"],
      ["Episcopal Church — Tonus peregrinus", "https://www.episcopalchurch.org/glossary/tonus-peregrinus/"],
    ],
    body: `
Bài này là bước 3 của [[am-nhac-nha-tho]] và đào sâu phần "tám điệu thức" trong [[dieu-thuc]].

## Bảng tám điệu thức
| Điệu | Tên | Âm kết | Tầm âm | Loại | Âm đọc (tenor) |
|---|---|---|---|---|---|
| 1 | Dorian | Rê | Rê – Rê | chính | La |
| 2 | Hypodorian | Rê | La – La | phụ | Fa |
| 3 | Phrygian | Mi | Mi – Mi | chính | **Đô** |
| 4 | Hypophrygian | Mi | Si – Si | phụ | La |
| 5 | Lydian | Fa | Fa – Fa | chính | Đô |
| 6 | Hypolydian | Fa | Đô – Đô | phụ | La |
| 7 | Mixolydian | Sol | Sol – Sol | chính | Rê |
| 8 | Hypomixolydian | Sol | Rê – Rê | phụ | **Đô** |
*(Theo bảng của ORB.)*
- **Chính** (*authentic*, điệu lẻ): tầm âm một [[quang|quãng 8]] đi lên từ âm kết. **Phụ** (*plagal*, điệu chẵn): từ quãng 4 dưới âm kết lên quãng 5 trên.
- Âm đọc thường là quãng 5 trên âm kết (điệu chính) hoặc quãng 3 (điệu phụ). Ngoại lệ đều **tránh Si**: điệu 3 và 8 đọc trên Đô (không phải Si), điệu 4 đọc trên La (không phải Sol).

::staff treble D4=1 A4=T E4=3 C5=T F4=5 C5=T G4=7 D5=T | Bốn điệu chính: âm kết (số điệu) và âm đọc (T)
::staff treble D4=2 F4=T E4=4 A4=T F4=6 A4=T G4=8 C5=T | Bốn điệu phụ: cùng âm kết, âm đọc thấp hơn

**Thử trên piano:** chơi Rê – La – Rê bằng tay trái làm [[bass-ngan|âm ngân]], tay phải đi lên phím trắng từ Rê đến Rê — đó là điệu 1. Đổi âm ngân sang Mi rồi đi Mi – Mi phím trắng — điệu 3, nghe ngay [[cung-nua-cung|nửa cung]] Mi – Fa ở đầu (màu Phrygian).

Một **tonary** là sách [[thoi-ky-trung-co|trung cổ]] xếp các bài theo điệu thức.

## Công thức hát thánh vịnh (psalm tone)
Mỗi câu thánh vịnh chia hai nửa; mỗi điệu thức có một công thức riêng:
::form Khởi_xướng Đọc_trên_tenor (Flexa) Mediant * Đọc_trên_tenor Kết | Một câu thánh vịnh: nửa đầu kết bằng mediant (dấu * trong sách), nửa sau kết bằng termination
- **Khởi xướng** (*intonatio*): 2 – 3 âm tiết đầu dẫn lên tenor — thường chỉ ở câu đầu hoặc trong các bài ca vịnh.
- **Đọc**: mọi âm tiết còn lại đọc trên **tenor**.
- **Flexa** (tuỳ chọn): khi nửa đầu dài, giọng hạ một bậc sau trọng âm cuối rồi trở về tenor.
- **Mediant**: công thức kết giữa câu, đặt vào trọng âm cuối của nửa đầu.
- **Kết** (*termination*): công thức cuối câu. Nhiều điệu có vài cách kết (*differentiae*); chọn cách kết dẫn mượt về **điệp khúc** (antiphon). Điệp khúc thuộc điệu nào thì hát thánh vịnh theo giọng của điệu đó.
*Trình tự đầy đủ — hát điệp khúc, các câu, kinh Sáng Danh, rồi lặp điệp khúc — là thực hành chuẩn; các nguồn tìm được xác nhận các phần của công thức hơn là từng bước.*

## Điệu "lữ khách" (tonus peregrinus)
Một giọng "bất thường", thứ chín, nằm ngoài hệ 8 điệu: **mỗi nửa câu đọc trên một [[cao-do|cao độ]] khác nhau** (một nguồn nêu La rồi Sol). Theo truyền thống gắn với thánh vịnh 113 (Vulgata) / 114 "In exitu Israel" ở giờ Kinh Chiều. Nguồn gốc chưa rõ; giả thuyết gốc Byzantine hay Do Thái chỉ là phỏng đoán.

## Liên hệ
- Đệm [[organ-ong|organ]] cho thánh vịnh: [[dem-organ-cho-binh-ca]] (mục "Thánh vịnh").
- Tên Hy Lạp của các điệu (Dorian, Lydian…) được dùng lại cho các điệu thức hiện đại — xem [[dieu-thuc]] và [[jazz-dieu-thuc]].
`,
  },
  {
    slug: "sach-hat-va-van-kien-binh-ca",
    title: "Sách hát bình ca và các văn kiện của Giáo hội về thánh nhạc",
    category: 'sacred',
    also: ['musicology'],
    aliases: ["Liber Usualis", "Graduale Romanum", "Editio Vaticana", "ấn bản Vatican", "Antiphonale", "Antiphonale Romanum", "Antiphonale Monasticum", "Liber Hymnarius", "Graduale Simplex", "Jubilate Deo", "Tra le sollecitudini", "Sacrosanctum Concilium", "Musicam Sacram", "văn kiện thánh nhạc", "Neumz"],
    summary: "Những cuốn sách người hát bình ca thực sự dùng — Liber Usualis, Graduale Romanum 1908 và 1974, Graduale Triplex, Antiphonale, Jubilate Deo, Graduale Simplex — và ba văn kiện định hướng: Tra le sollecitudini (1903) gọi bình ca là mẫu mực tối cao, Sacrosanctum Concilium (1963) dành cho bình ca \"vị trí hàng đầu\", Musicam Sacram (1967) quy định vai trò organ. Kèm các ngày tháng còn mâu thuẫn.",
    wiki: "Liber_Usualis",
    refs: [
      ["Wikipedia — Liber Usualis", "https://en.wikipedia.org/wiki/Liber_Usualis"],
      ["CC Watershed — Liber Usualis 1896 (PDF)", "https://ccwatershed.org/2015/02/19/pdf-download-1896-liber-usualis"],
      ["Wikipedia — Roman Gradual", "https://en.wikipedia.org/wiki/Roman_Gradual"],
      ["Sacred Music 135/2 (CMAA, PDF)", "https://media.churchmusicassociation.org/publications/sacredmusic/pdf/sm135-2.pdf"],
      ["Solesmes — Graduale Triplex", "https://www.solesmes.com/node/9068"],
      ["Adoremus — Antiphonale Romanum I", "https://adoremus.org/2022/01/mission-impossible-antiphonale-romanum-i/"],
      ["Adoremus — Tra le sollecitudini (bản tiếng Anh)", "https://adoremus.org/1903/11/tra-le-sollecitudini/"],
      ["Vatican — Tra le sollecitudini (tiếng Ý, PDF)", "https://www.vatican.va/content/pius-x/it/motu_proprio/documents/hf_p-x_motu-proprio_19031122_sollecitudini.pdf"],
      ["WDTPRS — Sacrosanctum Concilium 116", "https://wdtprs.com/2012/05/what-does-sacrosanctum-concilium-116-really-say/"],
      ["Vatican — Musicam Sacram (1967)", "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_instr_19670305_musicam-sacram_en.html"],
      ["EWTN — Voluntati obsequens và Jubilate Deo (1974)", "https://www.ewtn.com/catholicism/library/letter-to-bishops-on-the-minimum-repertoire-of-plain-chant-28943"],
      ["CMAA — Jubilate Deo (PDF)", "https://www.churchmusicassociation.org/wp-content/uploads/2024/03/Jubilate-Deo.pdf"],
      ["National Catholic Register — ứng dụng Neumz", "https://www.ncregister.com/features/thousands-of-hours-of-live-gregorian-chants-available-in-1-app"],
    ],
    body: `
Bài này là bước 4 của [[am-nhac-nha-tho]]: **nguồn văn bản** của bình ca hôm nay. Phương pháp đọc nguồn nói chung: [[van-ban-hoc-am-nhac]].

## Các sách hát
| Sách | Năm | Ghi chú |
|---|---|---|
| **Liber Usualis** | 1896 *hoặc* 1898 | Tu sĩ Solesmes biên soạn (Dom Mocquereau). Tuyển tập tiện dụng, **không phải** sách phụng vụ chính thức. *Năm đầu tiên mâu thuẫn:* CC Watershed và thư mục thư viện ghi 1896 (in ở Solesmes, nhan đề tiếng Pháp *Paroissien romain*), Wikipedia ghi 1898. Sau này Desclée (Tournai) in lại, vd. 1952 |
| **Graduale Romanum** (ấn bản Vatican) | 1908 | Bản mẫu chính thức dưới thời Pius X, dựa trên công trình phục hồi của Solesmes (Dom Pothier), thay [[an-ban-urtext|ấn bản]] Medici; **không có dấu nhịp** |
| **Graduale Romanum** (Solesmes) | 1974 | Sắp lại theo [[thanh-le-va-requiem|thánh lễ]] sau Công đồng Vatican II (theo *Ordo Cantus Missae* 1972); [[giai-dieu|giai điệu]] chủ yếu lấy từ ấn bản 1908, **thêm dấu nhịp Solesmes** |
| **Graduale Triplex** | 1979 | Graduale 1974 cộng neume Laon (đen) và St Gall (đỏ) — xem [[ky-am-binh-ca-gregorian]] |
| **Graduale Simplex** | 1967 | Giai điệu đơn giản hơn cho nhà thờ nhỏ, lấy chủ yếu từ điệp khúc Giờ Kinh; được phỏng sang nhiều tiếng — xem [[viet-binh-ca-cho-tieng-ban-dia]] |
| **Jubilate Deo** | 1974 | Tập "tối thiểu" các bài Latin, quà của Giáo hoàng Phaolô VI gửi các giám mục kèm thư *Voluntati obsequens* (14/4/1974), được in lại miễn phí |
| **Liber Hymnarius** | 1983 | Thánh thi (Solesmes) |
| **Antiphonale Monasticum** | 2005 – 2007 | Ấn bản mới, 3 tập |
| **Antiphonale Romanum** II / I | 2009 / 2020 | Kinh Chiều Chúa nhật và lễ (tập II, không có dấu nhịp); Kinh Sáng (tập I) |
Ngày nay còn có **Neumz** — ứng dụng thu âm toàn bộ kho bình ca do các nữ tu dòng Biển Đức ở Jouques hát, mỗi bài chạy song song với bản nốt vuông, lời Latin và bản dịch.

## Ba văn kiện
**Tra le sollecitudini** (tự sắc của Giáo hoàng Pius X, 22/11/1903)
- Gọi bình ca Gregorian là **mẫu mực tối cao**: một sáng tác càng gần bình ca "về chuyển động, cảm hứng và hương vị" thì càng thánh thiêng. *(Câu trích theo bản dịch tiếng Anh thông dụng; kết quả tìm kiếm chỉ cho thấy lời tóm tắt.)* [[doi-am|Phức điệu]] cổ điển cũng được chấp nhận.
- Mục VI: âm nhạc của Giáo hội "thuần tuý là thanh nhạc", nhưng **cho phép** [[organ-ong|organ]] đệm; organ "chỉ nâng đỡ, không bao giờ đè nén" tiếng hát; cấm piano, trống; cấm [[prelude-ung-tac|dạo đầu]] dài và các "intermezzo" chen ngang.
- Văn kiện được coi như "bộ luật pháp lý về thánh nhạc"; năm 2003 Giáo hoàng Gioan Phaolô II ra thư kỷ niệm 100 năm.

**Sacrosanctum Concilium** (Hiến chế Phụng vụ, Công đồng Vatican II, 4/12/1963)
- §116: Giáo hội nhìn nhận bình ca là "riêng của phụng vụ Rôma", vì vậy "trong những điều kiện như nhau" bình ca phải giữ **vị trí hàng đầu** (*principem locum*). Phức điệu vẫn được phép. *(Đoạn văn mới thấy qua nguồn thứ cấp trích nguyên văn.)*
- §120: đàn organ ống được "rất quý trọng" như nhạc cụ truyền thống của Giáo hội Latin.

**Musicam Sacram** (Huấn thị của Thánh bộ Lễ nghi, 5/3/1967)
- Xếp bình ca đầu tiên trong các loại thánh nhạc; nói "vị trí hàng đầu" dành cho các nghi lễ hát **bằng tiếng Latin**.
- Chương VIII (số 62 – 67) về nhạc cụ: nhạc cụ đệm phải **nâng đỡ** giọng hát, giúp cộng đoàn tham dự, **không lấn át** đến mức khó nghe lời; im lặng khi linh mục đọc to (số 64); organ có thể chơi độc tấu lúc đầu lễ, dâng lễ, hiệp lễ và cuối lễ (số 65); số 66 hạn chế độc tấu trong một số mùa.
Chi tiết áp dụng cho organ: [[dem-organ-cho-binh-ca]].

## Những ngày tháng còn mâu thuẫn
- Liber Usualis: 1896 hay 1898.
- Bài [[thanh-ca-gregorian]] ghi Graduale Vatican "1907", các nguồn ở đây ghi **1908** — khác biệt có thể do năm ban hành và năm in; chưa xác minh.
- Số đoạn trong Musicam Sacram nói về "vị trí hàng đầu" (thường được cho là số 50) chưa thấy nguyên văn.
`,
  },
  {
    slug: "viet-binh-ca-cho-tieng-ban-dia",
    title: "Viết và phỏng bình ca cho tiếng bản địa",
    category: 'sacred',
    also: ['form'],
    aliases: ["phỏng bình ca", "bình ca tiếng bản địa", "chant tiếng Anh", "Simple English Propers", "Columba Kelly", "Adam Bartlett", "Dobszay", "syllabic", "neumatic", "melismatic", "đặt lời bình ca", "vernacular chant"],
    summary: "Bình ca được dựng quanh trọng âm tiếng Latin, nên khi đổi sang tiếng khác các công thức kết hay đặt nhầm trọng âm. Bài trình bày ba lối đặt lời (âm tiết, neume, melisma), vấn đề trọng âm, và các cách giải quyết đã được dùng: Simple English Propers (2011) bỏ công thức thánh vịnh để dùng vài công thức đơn giản theo Dobszay; Columba Kelly viết bình ca tiếng Anh theo nhịp tự nhiên của tiếng Anh; các bản phỏng Graduale Simplex. Cuối bài: tiếng Việt có thanh điệu — một vấn đề chưa có nguồn nghiên cứu.",
    refs: [
      ["Norton — History of Western Music, chương 3 (ebook)", "https://nerd.wwnorton.com/ebooks/epub/hwm10/EPUB/content/1.3.2-chapter03.xhtml"],
      ["New Liturgical Movement — From Simple English Propers to Lumen Christi (2014)", "https://www.newliturgicalmovement.org/2014/05/from-simple-english-propers-to-lumen.html?m=0"],
      ["Bruce Ford — Setting English texts to Gregorian psalm tones (PDF)", "https://forum.musicasacra.com/forum/uploads/2009/05/Setting%20English%20Texts%20to%20%20Gregorian%20Psalm%20Tones.pdf"],
      ["Saint Meinrad — Fr. Columba Kelly, OSB", "https://saintmeinrad.org/the-monastery/liturgical-music/fr-columba-kelly-osb/"],
      ["Pray Tell — RIP Columba Kelly (2018)", "https://praytellblog.com/index.php/2018/06/10/rip-columba-kelly-osb/"],
      ["Adoremus — Adam Bartlett", "https://adoremus.org/author/Adam-Bartlett/"],
      ["CMAA — English Chant Ordinary", "https://musicasacra.com/music/english-chant-ordinary/"],
      ["Chant Café — về Graduale Simplex", "https://chantcafe.com/?p=1732"],
      ["CC Watershed — Adapting chant to the vernacular", "https://www.ccwatershed.org/2015/08/31/adapting-chant-vernacular"],
      ["Wikipedia — Đọc kinh", "https://en.wikipedia.org/wiki/%C4%90%E1%BB%8Dc_kinh"],
    ],
    body: `
Bài này là bước 5 của [[am-nhac-nha-tho]]. Quan hệ giữa [[giai-dieu|giai điệu]] và lời nói chung ở [[am-nhac-va-ngon-ngu]].

## Ba lối đặt lời
| Lối | Số nốt trên một âm tiết | Thường gặp ở |
|---|---|---|
| **Âm tiết** (*syllabic*) | khoảng 1 | thánh vịnh, kinh Tin Kính |
| **[[ky-am-binh-ca-gregorian|Neume]]** (*neumatic*) | nhóm nhỏ 2 – 4 | điệp khúc, nhập lễ |
| **Melisma** (*melismatic*) | chuỗi dài | Alleluia, Graduale |
Một bài thường trộn cả ba; có tác giả thêm lối thứ tư là **đọc trên một [[cao-do|cao độ]]** (công thức thánh vịnh). *(Theo Norton, History of Western Music.)*


## Vấn đề trọng âm
- Các công thức Gregorian được dựng quanh **cách kết từ Latin**: trọng âm ở âm tiết áp chót (*paroxytone*) hoặc âm tiết thứ ba từ cuối (*proparoxytone*).
- Tiếng Anh hay kết bằng **âm tiết mạnh** ("God", "Lord"), nên công thức kết thánh vịnh Latin nghe gượng.
- Bruce Ford có một bài hướng dẫn chuyên về cách khớp lời Anh vào công thức thánh vịnh. Một bài năm 1956 thì cho rằng dịch [[thanh-ca-gregorian|bình ca]] làm méo nhịp của nó.

## Các lời giải đã được dùng
- **Simple English Propers** (Adam Bartlett, CMAA, 2011): **không** dùng công thức thánh vịnh vì xung đột trọng âm Latin – Anh; thay vào đó dùng đề xuất của **László Dobszay** — vài công thức giai điệu đơn giản cho phần riêng (Propers) bằng tiếng bản địa. Tiếp theo là bộ *Lumen Christi* (2012 – 2016).
- **Fr. Columba Kelly OSB** (1930 – 2018, đan viện Saint Meinrad): học ký hiệu học với Cardine; viết bình ca tiếng Anh theo **nguyên tắc đã tạo ra kho Gregorian gốc**, khớp giai điệu với nhịp và trọng âm tự nhiên của tiếng Anh. Saint Meinrad giữ gần 2.000 bài của ông; OCP in các điệp khúc Saint Meinrad từ 2014.
- **ICEL**: soạn phần hát cho Sách lễ Rôma tiếng Anh (2011), nhiều bài bắt nguồn từ giai điệu [[sach-hat-va-van-kien-binh-ca|Graduale Romanum]]; CMAA phổ biến các bài Ordinary tiếng Anh theo giấy phép CC-BY 3.0.
- **Graduale Simplex** (1967) được phỏng sang tiếng Hà Lan (*Klein Graduale* của Steven van Roode — chỉ đặt neume trên âm tiết mạnh vì tiếng Hà Lan khó chịu giai điệu neume), tiếng Anh (*By Flowing Waters* của Paul Ford). Một số người gọi [[lich-su-tiep-nhan-am-nhac|lịch sử tiếp nhận]] của Graduale Simplex là "một thất bại". *(Nguồn blog, diễn đàn.)*

## Quy trình gợi ý khi tự viết
*(Tổng hợp từ các nguồn trên, không phải quy tắc chính thức.)*
1. Đọc to câu văn, đánh dấu **trọng âm tự nhiên** và chỗ ngắt.
2. Chọn [[tam-dieu-thuc-va-giong-thanh-vinh|điệu thức]] và một âm đọc.
3. Đặt công thức kết vào **trọng âm cuối** của mỗi nửa câu, không vào âm tiết cuối nếu nó yếu.
4. Giữ phần lớn âm tiết ở lối âm tiết; dành neume và melisma cho từ quan trọng.
5. Soạn bản in bằng [[gregorio-va-gabc]].

## Tiếng Việt: một câu hỏi mở
- Tiếng Việt có **thanh điệu**: cao độ là một phần của nghĩa từ. Truyền thống **đọc kinh** của người Công giáo Việt ngân nga lời kinh theo các cao độ ứng với thanh (Wikipedia, *Đọc kinh*) — một lối "bình ca bản địa" nhưng **không** phải Gregorian. Xem thêm [[am-nhac-va-ngon-ngu]].
- Ba lượt tìm kiếm chuyên biệt **không tìm thấy** [[an-ban-urtext|ấn bản]] Gregorian lời Việt nào, hay nghiên cứu về cách xử lý thanh điệu khi đặt lời Việt vào giai điệu Gregorian. Cả thuật ngữ "bình ca" (plainchant) cũng chưa thấy định nghĩa trong một nguồn tiếng Việt. Xem [[binh-ca-va-organ-o-viet-nam]].
`,
  },
  {
    slug: "gregorio-va-gabc",
    title: "Gregorio và gabc: soạn bản nốt vuông trên máy tính",
    category: 'sacred',
    also: ['basics'],
    aliases: ["Gregorio", "GregorioTeX", "gabc", "phần mềm Gregorio", "Illuminare", "nabc", "soạn bình ca trên máy tính"],
    summary: "Gregorio là phần mềm mã nguồn mở (GPL v3, phát triển từ 2006) để in bình ca bằng nốt vuông. Người dùng viết nhạc bằng gabc — một cách ghi chữ thường, mỗi âm tiết kèm nốt trong ngoặc — rồi biên dịch bằng LuaLaTeX ra PDF. Bài giải thích cấu trúc tệp gabc, cách 13 chữ a – m chỉ vị trí trên khuông (không phải cao độ), quan hệ với khoá Đô/Fa, và các công cụ trực tuyến.",
    wiki: "Gregorio_(software)",
    refs: [
      ["Gregorio — Đặc tả gabc", "https://gregorio-project.github.io/gabc/"],
      ["Gregorio — Tutorial gabc", "https://gregorio-project.github.io/tutorial/tutorial-gabc-01.html"],
      ["CTAN — gregoriotex README", "https://mirror.ircam.fr/pub/CTAN/support/gregoriotex/README.md"],
      ["CTAN — GregorioRef.pdf (sách hướng dẫn)", "https://mirror.las.iastate.edu/tex-archive/support/gregoriotex/doc/GregorioRef.pdf"],
      ["CTAN — Gabc.tex (chương về gabc)", "https://mirrors.mit.edu/CTAN/support/gregoriotex/doc/Gabc.tex"],
      ["CTAN — GregorioNabcRef.pdf", "https://mirrors.mit.edu/CTAN/support/gregoriotex/doc/GregorioNabcRef.pdf"],
      ["CTAN-ann — gregoriotex 4.1.1 (4/2016)", "https://www.ctan.org/ctan-ann/id/mailman.1598.1460887826.4277.ctan-ann@ctan.org"],
      ["GitHub — gregorio releases", "https://github.com/gregorio-project/gregorio/releases"],
      ["Wikipedia — Gregorio (software)", "https://en.wikipedia.org/wiki/Gregorio_(software)"],
      ["ACM DLfM 2024 — đề xuất mã hoá GABC có hệ thống", "https://dl.acm.org/doi/fullHtml/10.1145/3660570.3660581"],
    ],
    body: `
Bài này là bước 6 của [[am-nhac-nha-tho]]. Nếu "bình ca gregorio" bạn tìm là **phần mềm**, đây là trang đó; nếu là [[the-loai-am-nhac|thể loại]], xem [[thanh-ca-gregorian]].

## Ba thành phần
| Thành phần | Vai trò |
|---|---|
| **gabc** | Cách ghi bình ca bằng ký tự ASCII |
| **GregorioTeX** | Gói TeX để dàn trang |
| **gregorio** | Chương trình dòng lệnh đổi gabc sang GregorioTeX |
Quy trình: viết tệp \`.gabc\` → chèn vào tài liệu LaTeX → biên dịch bằng **LuaLaTeX** → PDF. Gregorio là phần mềm tự do (GPL v3), phát triển từ 2006 (Élie Roux, Olivier Berten, Henry So Jr và những người khác); có trong **TeX Live từ 2016**. Gói lên CTAN lần đầu tháng 4/2016 (bản 4.1.1). *Số phiên bản mới nhất khác nhau giữa Wikipedia và CTAN — xem trang releases trên GitHub.*

## Cấu trúc tệp gabc
\`\`\`
name: Ví dụ;
%%
(c4) Do(c) re(d) mi(e) fa(f) sol(g) la(h)
\`\`\`
- Phần **đầu** gồm các dòng \`khoá: giá trị;\`, ngăn với phần thân bằng \`%%\`.
- Thân mở đầu bằng **khoá** trong ngoặc, vd. \`(c4)\` = khoá Đô trên dòng 4 (đếm từ dưới).
- Mỗi âm tiết viết liền với các nốt của nó trong ngoặc: \`âm_tiết(nốt)\`.
*Ví dụ trên là minh hoạ cú pháp theo đặc tả, thư viện chưa biên dịch thử.*

## 13 chữ cái là 13 vị trí
- Đặc tả gabc: có "13 [[cao-do|cao độ]] có thể, ghi bằng các chữ **a đến m**". Trong tutorial, **g là khe giữa** của [[khuong-nhac|khuông]] 4 dòng; chữ càng về sau càng cao.
- Mỗi chữ là một **vị trí trên khuông**, không phải một nốt: đổi khoá thì cùng chữ đó hát thành nốt khác. Chữ **in hoa** cho nốt hình thoi (*punctum inclinatum*). Khuông 5 dòng thêm chữ n và p; khuông 2 dòng chỉ dùng a – i.
- **Suy ra** (thư viện tự tính từ "g = khe giữa", chưa thấy nguyên văn): dòng 1 – 4 là **d, f, h, j**; khe là c, e, g, i, k. Với \`(c4)\` khoá Đô ở dòng trên cùng nên **j = do**, i = si, h = la, g = sol, f = fa, e = mi, d = re, c = do thấp — đúng như ví dụ ở trên.
::staff treble C4=c D4=d E4=e F4=f G4=g A4=h B4=i C5=j | Với khoá (c4): chữ gabc ứng với nốt trong thang Đô (cao độ thật tuỳ người xướng). So với khoá Đô ở [[ky-am-binh-ca-gregorian]]

## Đi xa hơn
- Các ký hiệu cho quilisma, oriscus, liquescent, episema, dấu chấm, vạch divisio đều có trong gabc nhưng **thư viện chưa đối chiếu từng mã** — tra GregorioRef.pdf trước khi dùng.
- **nabc**: phần mở rộng để chép neume St Gall/Laon phía trên nốt vuông — làm được trang kiểu Graduale Triplex.
- Trình soạn trực tuyến **Illuminare** (sau được Source & Summit làm lại) chạy Gregorio trên web; người dùng diễn đàn cho rằng bản mới không dùng Gregorio hiện hành. *(Nguồn diễn đàn.)*
- Một bài hội thảo ACM DLfM 2024 đề xuất cách mã hoá GABC có hệ thống cho thư viện số.

## Vì sao đáng học
Gõ gabc buộc bạn suy nghĩ như người chép bình ca: **vị trí tương đối** so với khoá, không phải [[ban-phim|phím đàn]]. Đó cũng là cách nghĩ của [[xuong-am|xướng âm do di động]]. Tự gõ một câu bình ca, in ra, rồi hát — xem các [[dieu-thuc|điệu thức]] ở [[tam-dieu-thuc-va-giong-thanh-vinh]].
`,
  },
  {
    slug: "dem-organ-cho-binh-ca",
    title: "Đệm organ cho bình ca Gregorian: lịch sử, nguyên tắc và tranh luận",
    category: 'sacred',
    also: ['harmony', 'expression'],
    aliases: ["đệm bình ca", "đệm organ bình ca", "đệm thánh ca Gregorian", "Gregorian accompaniment", "chant accompaniment", "Niedermeyer", "d'Ortigue", "Traité de l'accompagnement du plain-chant", "Potiron", "Bragers", "Flor Peeters", "Nova Organi Harmonia", "đệm thánh vịnh"],
    summary: "Bình ca vốn hát không đệm; organ chỉ được Tra le sollecitudini (1903) \"cho phép\" với điều kiện \"chỉ nâng đỡ, không đè nén\". Bài kể lại cách đệm thay đổi từ thế kỷ 19 — Niedermeyer và d'Ortigue (1857) bác bỏ kết át – chủ và dấu hoá, trường phái Solesmes đặt hợp âm vào ictus, Nova Organi Harmonia của Viện Lemmens — rồi tách rõ nguyên tắc nào có nguồn học thuật, nguyên tắc nào chỉ là kinh nghiệm thực hành: điệu thức, chuyển động ngược, đăng ký âm sắc nhẹ, đệm thánh vịnh.",
    refs: [
      ["Journal des Débats, 16/2/1857 — về chuyên luận Niedermeyer – d'Ortigue (PDF)", "https://sas-space.sas.ac.uk/4959/1/Journal_des_Debats_16_fev_1857_proofed_final.pdf"],
      ["CUNY Academic Works — luận án 2021 về Niedermeyer, d'Ortigue và đệm bình ca", "https://academicworks.cuny.edu/gc_etds/4307"],
      ["Encyclopedia.com — Niedermeyer", "https://www.encyclopedia.com/arts/dictionaries-thesauruses-pictures-and-press-releases/niedermeyer-abraham-louis-0"],
      ["Università Cattolica — Giovanni Tebaldini e l'accompagnamento al canto gregoriano", "https://publires.unicatt.it/it/publications/giovanni-tebaldini-e-laccompagnamento-al-canto-gregoriano-9/"],
      ["Univ. of Kansas — Burgstahler, The Accompaniment of Gregorian Chant (1959)", "https://kuscholarworks.ku.edu/entities/publication/165e22fd-a59c-4428-b11b-489d95a63b6a"],
      ["Holy Cross — Bragers, A Short Treatise on Gregorian Accompaniment (c.1934)", "https://library.holycross.edu/Record/b1113020"],
      ["CC Watershed — Flor Peeters, phương pháp đệm bình ca", "https://ccwatershed.org/2013/03/19/flor-peeters-method-gregorian-chant-accompaniment"],
      ["CC Watershed — 1929 Accompagnement du Kyriale Vatican", "https://www.ccwatershed.org/blog/2013/mar/19/1929-accompagnement-du-kyriale-vatican"],
      ["CC Watershed — Ictus fictus", "https://ccwatershed.org/2023/03/15/ictus-fictus"],
      ["Adoremus — Tra le sollecitudini", "https://adoremus.org/1903/11/tra-le-sollecitudini/"],
      ["Lincoln Diocese — Musicam Sacram", "https://es.lincolndiocese.org/liturgical-doc-links/4051-musicam-sacram-instruction-on-music-in-the-liturgy"],
      ["EWTN — dùng organ trong Mùa Vọng (GIRM 313)", "https://ewtn.com/catholicism/library/use-of-the-church-organ-during-advent-4841"],
      ["Methodist School of Music Singapore — Chant-based accompaniment (PDF, 2020)", "https://www.msmusic.edu.sg/wp-content/uploads/2025/04/Introduction-To-Organ-Playing-Part-3-Chant-based-Accompaniment_.pdf"],
      ["AGO — 2025 Psalm Preparation Resource (PDF)", "https://agohq.org/common/Uploaded%20files/Website%20Files/2026/2025%20Psalm%20Preparation%20Resource.pdf"],
      ["Saint Meinrad — Modal psalm tones, organ (PDF)", "https://www.saintmeinrad.edu/media/1489/modalpsalmtones2-organ.pdf"],
      ["New Liturgical Movement — Gregorian accompaniment (2010)", "https://www.newliturgicalmovement.org/2010/12/gregorian-accompaniment.html"],
      ["Trinity College Dublin — luận án về đệm bình ca ở Pháp và Bỉ", "https://edepositireland.ie/handle/2262/100565"],
    ],
    body: `
Bài này là bước 7 của [[am-nhac-nha-tho]]. Cần biết trước: [[tam-dieu-thuc-va-giong-thanh-vinh|tám điệu thức]] và [[luat-hoa-am-bon-be]].

## Có nên đệm không?
- **[[sach-hat-va-van-kien-binh-ca|Tra le sollecitudini]]** (1903), mục VI: âm nhạc của Giáo hội "thuần tuý là thanh nhạc", nhưng đệm organ **được phép**; organ "chỉ nâng đỡ, không bao giờ đè nén" tiếng hát.
- **Musicam Sacram** (1967) số 64: nhạc cụ đệm **nâng đỡ** giọng hát, giúp cộng đoàn tham dự, không được lấn át đến mức khó nghe lời.
- Nhiều chuyên gia bình ca cho rằng **tốt nhất là không đệm**; đệm chỉ hợp lý khi phòng "câm" hoặc để giữ giọng khỏi tụt. Potiron — người nổi tiếng nhất của lối đệm [[thanh-ca-gregorian|Solesmes]] — được trích là nói đệm nói chung **làm hại** bình ca, trừ khi ca đoàn cần đỡ. Ngược lại, Mocquereau năm 1924 khen "những bản đệm đẹp và kín đáo" của Dom Desrocquettes ông nghe hằng ngày ở Solesmes. *(Các trích dẫn này qua blog và diễn đàn.)*
- Có thời kỳ organ bị hạn chế: một [[an-ban-urtext|ấn bản]] 1910 ghi "Non pulsantur organa" (không chơi organ) cho Mùa Chay nhưng vẫn in phần hoà âm. Hiện nay GIRM 313: Mùa Chay organ chỉ được dùng **để đỡ tiếng hát** (trừ vài ngày lễ).

## Lịch sử ngắn
| Giai đoạn | Điều đã biết |
|---|---|
| Đầu thế kỷ 19 | Một blog ghi nhận các bản đệm thời này hay kết bài điệu thứ bằng [[hop-am-ba|hợp âm trưởng]] *(nguồn yếu)* |
| **1857** | **Niedermeyer & d'Ortigue**, *Traité théorique et pratique de l'accompagnement du plain-chant* (Paris). Journal des Débats (16/2/1857) giới thiệu mục đích: thay thói quen riêng của từng organist bằng một **lý thuyết có lý lẽ** về hoà âm bình ca. Theo một luận án CUNY (2021), hai ông coi kết **át – chủ** và **[[dau-hoa|dấu hoá]]** là làm hỏng bình ca; các chuyên luận dùng lối **nốt chọi nốt**, không [[thuan-nghich|nghịch âm]]. Tái bản 1876 (có nguồn ghi 1878); bản Anh *Gregorian Accompaniment* (Novello, 1905, Wallace Goodrich) có phụ lục [[giai-dieu|giai điệu]] do **Eugène Gigout** phối theo nguyên tắc này. Nguyên tắc hoà âm của họ được cho là ảnh hưởng đến âm nhạc Pháp, nhất là [[gabriel-faure|Fauré]] |
| Cuối thế kỷ 19 | Theo một nghiên cứu ở Milano về Giovanni Tebaldini: đệm chuyển từ kết cấu kiểu "Choral" Đức sang **hợp âm đỡ bình ca**, chủ yếu do lý thuyết nhịp Solesmes; học trò ông là Giulio Bas theo nguyên tắc Pháp chặt hơn |
| **1903** | Trong một thư gửi Bas, Mocquereau chỉ **ictus** là chỗ mặc định để đặt hợp âm *(nguồn thứ cấp)* |
| 1929 – 1949 | **Henri Potiron** (Sacré-Cœur, Paris) — *Accompagnement du Kyriale Vatican* (1929, cùng Dom Desrocquettes, "theo nhịp Solesmes"), *Practical instruction in plainsong accompaniment* (Desclée, 1949). **Achille Bragers** — *A Short Treatise on Gregorian Accompaniment according to the principles of the monks of Solesmes* (New York, C. Fischer, khoảng 1934); bản đệm Kyriale 1937 |
| Thập niên 1930 – 1940 | **Nova Organi Harmonia** — khoảng 3.000 trang đệm cho Kyriale, Graduale và nhiều phần Antiphonale do **Viện Lemmens** (Bỉ) soạn trên ấn bản Vatican, đứng đầu là Jules Van Nuffel cùng Flor Peeters và những người khác; hoà âm điệu thức "thuần". **Flor Peeters**, *Méthode pratique pour l'accompagnement du chant grégorien* (Mechelen, 1943; bản Pháp – Anh 1949) giải thích nguyên tắc của bộ này — và chính ông nói phương pháp của mình **không phải duy nhất đúng** *(nguồn blog; thành phố của Viện Lemmens thời đó — Mechelen hay Leuven — chưa xác minh)* |

## Ictus hay trọng âm lời?
- Lối Solesmes: **đổi hợp âm ở ictus** (theo thư Mocquereau 1903).
- Phê bình: nên đổi hợp âm theo **trọng âm của lời** để cộng đoàn dễ hát; Nova Organi Harmonia ở một số chữ đặt hợp âm khác lối Solesmes. Một nhà phê bình còn chê Potiron giữ hợp âm lâu rồi đổi đột ngột với mọi bè cùng chạy. *(Blog, diễn đàn.)*
- Vì ictus nay bị nhiều học giả bác bỏ (xem [[ky-am-binh-ca-gregorian]]), cuộc tranh luận này còn mở.

## Nguyên tắc — xếp theo độ tin cậy của nguồn
| Nguyên tắc | Nguồn |
|---|---|
| Không lấn át giọng hát; lời phải nghe rõ | **Văn kiện:** Tra le sollecitudini VI; Musicam Sacram 64 |
| Không kết át – chủ, không dấu hoá ngoài [[dieu-thuc|điệu thức]]; nốt chọi nốt, không nghịch âm | **Học thuật:** Niedermeyer & d'Ortigue theo luận án CUNY |
| Thứ tự ưu tiên: lời > giai điệu > phần đệm | Tài liệu dạy organ (Methodist School of Music, Singapore, 2020) |
| Thay V – I bằng IV – I, ♭VII – I, ii – I… tuỳ điệu | Diễn đàn *(yếu)* |
| Viết theo điệu thức, chuyển động ngược, nhiều âm chung, nốt ngân ở mọi bè, tránh đổi hợp âm giật cục | Lời bình một tập thánh vịnh *(yếu)* |
| Organist có thể bỏ bớt nốt giai điệu; không dùng tremulant | Diễn đàn *(yếu)* |

::grand A3+C#4/A2+E3=V_(có_Đô♯) A3+D4/D3+F3=i C4+E4/C3+G3=♭VII A3+D4/D3+F3=i | Minh hoạ của thư viện cho nguyên tắc Niedermeyer – d'Ortigue: kết bài điệu 1 (Rê). Cặp đầu dùng nốt dẫn Đô♯ — màu giọng thứ hiện đại; cặp sau chỉ dùng phím trắng (♭VII – i), giữ màu Dorian

Thử chơi cả hai sau khi hát một câu điệu 1 (Rê – Fa – Sol – La…): kết đầu kéo tai về giọng Rê thứ, kết sau giữ được màu điệu thức. Xem thêm [[hoa-am-dieu-thuc]].

## Đăng ký âm sắc
Theo tài liệu của Methodist School of Music (Singapore, 2020):
| Ai hát | [[am-sac|Âm sắc]] gợi ý |
|---|---|
| Người xướng (cantor) | sáo hoặc dây nhẹ, principal 8' yếu |
| Ca đoàn | flute/dây/principal 8' mạnh hơn |
| Cộng đoàn | thêm 4', có khi 2'; ca đoàn yếu thì cần đỡ nhiều hơn, có thể phải chơi cả giai điệu |
Về các đường âm 8', 4', 2' xem [[organ-ong]].

## Đệm thánh vịnh
- Tài liệu chuẩn bị thánh vịnh của **AGO** (2025): organist chơi một hợp âm ở đầu câu, người hát vào khi sẵn sàng; cuối câu có thể ngắt hoặc vào thẳng hợp âm đầu để lặp lại.
- Diễn đàn: đổi hợp âm ở âm tiết có trọng âm; thay đổi theo từng thánh vịnh để khỏi đơn điệu *(yếu)*.
- Đan viện **Saint Meinrad** công bố bản đệm organ cho các công thức thánh vịnh theo điệu thức (PDF trong nguồn) — một mẫu để chép tay và học.
- *Chưa tìm thấy nguồn tốt cho lời khuyên phổ biến "giữ một hợp âm suốt phần đọc trên tenor".*

## Liên hệ
- Organ có thể **thay** câu hát thay vì đệm: [[alternatim-va-thanh-le-organ]].
- Đệm cho cộng đoàn hát thánh ca, chorale: [[dem-hat-cong-doan-tren-organ]].
- Kỹ năng đệm nói chung: [[dem-hat-piano]].
::ytsearch Gregorian chant organ accompaniment Kyrie | Tìm nghe: bình ca có đệm organ
`,
  },
  {
    slug: "alternatim-va-thanh-le-organ",
    title: "Alternatim và thánh lễ organ: khi organ \"hát\" thay một câu",
    category: 'sacred',
    also: ['form', 'genres'],
    aliases: ["alternatim", "thánh lễ organ", "organ mass", "verset", "versets", "Messe pour les paroisses", "Cunctipotens genitor Deus", "Titelouze", "Görlitzer Tabulaturbuch", "Tabulatura nova", "Hans Buchner"],
    summary: "Trong lối alternatim, organ chơi một câu (verset) thay cho câu lẽ ra được hát, xen kẽ với bình ca — truyền thống bắt nguồn từ lối hát thánh vịnh đối đáp. Bài đi qua Cabezón (1578), Titelouze (1623, 1626), thánh lễ organ Pháp của Couperin trên bình ca \"Cunctipotens genitor Deus\", alternatim Luther của Scheidt và Praetorius, rồi tranh cãi Tra le sollecitudini (1903) có cấm lối này hay không.",
    wiki: "Organ_mass",
    refs: [
      ["Wikipedia — Organ mass", "https://en.wikipedia.org/wiki/Organ_mass"],
      ["Wikipedia — Alternatim", "https://en.wikipedia.org/wiki/Alternatim"],
      ["MusicWeb International — Couperin, Messe pour les paroisses", "https://musicwebinternational.com/?p=9814"],
      ["Vox Humana — McCroskey (2021) về Couperin và Grigny", "https://www.voxhumanajournal.com/mccroskey2021.html"],
      ["Lyrebird Music — Titelouze (PDF)", "https://lyrebirdmusic.com/wp-content/uploads/2021/12/web_titelouze.pdf"],
      ["Wikipedia — Antonio de Cabezón", "https://en.wikipedia.org/wiki/Antonio_de_Cabez%C3%B3n"],
      ["CPH — Organ chorales of Samuel Scheidt (2018)", "https://blog.cph.org/worship/2018/06/product-of-the-month-organ-chorales-of-samuel-scheidt"],
      ["Andrew Benson-Wilson — Scheidt, Tabulatura nova III", "https://andrewbensonwilson.org/2016/07/09/scheidt-tabulatura-nova-iii/"],
      ["Univ. of Kansas — Paisar, về alternatim Luther", "https://kuscholarworks.ku.edu/entities/publication/0de05485-8853-4fc2-b076-bf854532ae15"],
      ["Gramophone — Tallis Complete Works vol. 5", "https://gramophone.co.uk/review/tallis-complete-works-vol-5"],
      ["Acta Organologica 34 — Balz (miền nam Hessen)", "https://www.gdo.de/veroeffentlichungen/acta-organologica/acta34-e"],
      ["Catholic-Link — tóm tắt Tra le sollecitudini", "https://catholic-link.org/sacred-music-catholic-church/"],
    ],
    body: `
Bài này là bước 8 của [[am-nhac-nha-tho]]. [[hinh-thuc-am-nhac|Hình thức]] này nối trực tiếp với [[cantus-firmus]]: câu [[organ-ong|organ]] thường dựng trên chính [[giai-dieu|giai điệu]] [[thanh-ca-gregorian|bình ca]] của câu bị thay.

## Nguyên tắc
- Organ chơi một **verset** thay cho câu văn lẽ ra được hát; câu kế tiếp do ca đoàn hát bình ca (hoặc [[doi-am|phức điệu]]), cứ thế luân phiên. Truyền thống bắt nguồn từ lối hát thánh vịnh **đối đáp** giữa hai bên ca đoàn.
- Theo Wikipedia (*Alternatim*), các câu chẵn hoặc lẻ còn thiếu có khi được bổ sung bằng bình ca, có khi — có lẽ phổ biến hơn — bằng **ngẫu hứng organ** (so với các thánh lễ organ của Hans Buchner).
- Nghi thức Paris năm 1662: organ **mở đầu** Kyrie rồi luân phiên với ca đoàn. Thánh lễ organ thường có verset cho các phần chung của [[thanh-le-va-requiem|thánh lễ]], **trừ Kinh Tin Kính**.
::form Organ Hát Organ Hát Organ Hát Organ Hát Organ | Sơ đồ minh hoạ chín lời kêu của Kyrie khi organ mở đầu và luân phiên (theo nguyên tắc của nghi thức Paris 1662; số verset cụ thể tuỳ tác phẩm)

## Các mốc
| Năm | Tác phẩm | Ghi chú |
|---|---|---|
| 1557 / 1578 | [[antonio-de-cabezon|Cabezón]] — một số bài in trong tuyển tập của Venegas de Henestrosa (1557); *Obras de música para tecla, arpa y vihuela* do con trai Hernando in sau khi ông mất (Madrid, 1578) | Lệ Tây Ban Nha chỉ cho organ trong thánh lễ ở các verso Kyrie; phần lớn nhạc phụng vụ của ông dành cho Giờ Kinh (thánh thi, Magnificat), dựa trên hoà âm trang trí ngắn của [[tam-dieu-thuc-va-giong-thanh-vinh|công thức thánh vịnh]] |
| 1623 / 1626 | **Jean Titelouze** — *Hymnes de l'Église* (3 – 4 câu cho mỗi thánh thi trong 12 thánh thi lớn); *Magnificat* trên cả **tám giọng** | Dành cho alternatim với ca đoàn/người xướng, organ chơi các câu **lẻ** |
| 1624 | [[samuel-scheidt|Scheidt]] — *Tabulatura nova*, tập III | Các Magnificat cho alternatim với ca đoàn |
| 1650 | Scheidt — **Görlitzer Tabulaturbuch** | 100 [[chorale-va-chorale-prelude|chorale]] bốn bè xếp theo năm phụng vụ, để organist chơi "cùng" cộng đoàn. Carl Schalk đọc là **luân phiên** với cộng đoàn, người khác đọc là **đệm**; thường được gọi là tập đầu tiên thuộc loại này |
| cuối thế kỷ 17 | [[francois-couperin|François Couperin]] — *Messe pour les paroisses* | Theo truyền thống, các verset organ luân phiên với các câu của thánh lễ bình ca **"Cunctipotens genitor Deus"** do schola hát; cùng bình ca này được trích ở bè [[ban-dap|pedal]] trong các verset Gloria của Couperin và Grigny |
::ytsearch Couperin Messe pour les paroisses alternatim plainchant | Tìm nghe: Couperin với bình ca xen kẽ

## Alternatim trong Giáo hội Luther và Anh
- Theo một nghiên cứu ở Đại học Kansas (Paisar), Luther giáo thời đầu **giữ** lối alternatim giữa ca đoàn và organ có từ trước Cải cách; [[michael-praetorius|Praetorius]] bắt đầu kết hợp organ, ca đoàn và cộng đoàn.
- Một nghiên cứu về miền nam Hessen (Acta Organologica 34): từ thời Cải cách, ca đoàn hoặc organ luân phiên với cộng đoàn; dần dần trong thế kỷ 18 organ chuyển sang **đệm mọi câu**. Đây là bước chuyển dẫn sang [[dem-hat-cong-doan-tren-organ]].
- Ở Anh: một đĩa toàn tập [[thomas-tallis|Tallis]] dựng lại các thánh thi với các câu luân phiên giữa bình ca, organ, phức điệu và *faburden*.

## 1903: cấm hay không?
- Wikipedia (*Organ mass*) viết lối này bị **Pius X cấm năm 1903**.
- Một bản tóm tắt [[sach-hat-va-van-kien-binh-ca|Tra le sollecitudini]] (Catholic-Link) và Catholic Encyclopedia (1911, theo trích dẫn trên diễn đàn) lại nói organ **vẫn được** thay các câu luân phiên của thánh vịnh, thánh thi **với điều kiện lời được đọc** (thầm hoặc to) trong lúc organ chơi.
- Hai cách hiểu này **mâu thuẫn**; thư viện chưa đối chiếu được nguyên văn để phân xử.

## Với người học
Viết một verset là bài tập [[cantus-firmus]] thực thụ: đặt giai điệu bình ca ở bè trầm (như Couperin ở pedal) hoặc bè trên, rồi thêm [[doi-am-5-loai|đối âm]]. Muốn [[ngau-hung-ung-tac|ứng tác]] thay vì viết: xem [[partimento]] và [[lich-su-ngau-hung]].
`,
  },
  {
    slug: "dem-hat-cong-doan-tren-organ",
    title: "Đệm cho cộng đoàn hát trên organ: từ Arnstadt 1706 đến hôm nay",
    category: 'sacred',
    also: ['expression', 'improvisation'],
    aliases: ["đệm cộng đoàn", "đệm thánh ca cộng đoàn", "hymn playing", "đệm chorale", "Arnstadt 1706", "Arnstädter Gemeindechoräle", "passaggio chorale", "chorale passaggio", "interlude giữa các câu", "Zwischenspiel", "last verse harmonisation", "hoà âm câu cuối", "descant"],
    summary: "Năm 1706 hội đồng giáo hội Arnstadt khiển trách chàng organist 20 tuổi J. S. Bach vì đã làm \"nhiều biến tấu lạ\" và trộn \"nhiều âm lạ\" vào chorale khiến cộng đoàn bối rối. Bài dùng vụ việc đó để đi qua lịch sử đệm cộng đoàn — các chorale \"passaggio\" có đoạn chạy nối giữa các câu, quan điểm về sau được gán cho Bach rằng khi cộng đoàn hát organist chỉ nên giữ họ bằng hoà âm đầy và trong, tục chơi interlude ở Anh — rồi đến các lời khuyên thực hành hiện đại về nhịp độ, dạo đầu, nghỉ giữa các câu và câu cuối.",
    refs: [
      ["Bach in Thüringen — Bach in Arnstadt", "https://www.bach-thueringen.de/en/w/bach-in-arnstadt"],
      ["Deutsche Grammophon — Das Thüringen des Johann Sebastian Bach", "https://www.deutschegrammophon.com/de/komponist-innen/johann-sebastian-bach/pressestimmen/ein-aristokrat-des-geistes-und-ordentlicher-querkopf-das-thueringen-des-johann-sebastian-bach-65385"],
      ["Robin Leaver — Understanding Bach 7 (Bach Network, PDF)", "https://www.bachnetwork.org/ub7/UB7_Leaver.pdf"],
      ["Bach-Jahrbuch — Zehnder, về chorale Arnstadt (PDF)", "https://journals.qucosa.de/bjb/article/download/2331/2257/3978"],
      ["All of Bach — BWV 726", "https://www.bachvereniging.nl/en/bwv/bwv-726"],
      ["All of Bach — BWV 715", "https://bachvereniging.nl/en/bwv/bwv-715"],
      ["Bach-cantatas — Congregational singing (Blankenburg)", "https://bach-cantatas.com/Articles/Congregational-Singing.htm"],
      ["Stauffer — J. S. Bach: The Organ Works (OUP 2024), chương 11", "https://academic.oup.com/book/56464/chapter/448559393"],
      ["Durham e-thesis — interlude ở Anh (PDF)", "https://etheses.durham.ac.uk/id/eprint/9933/1/9933_6727.PDF"],
      ["IRCAM — Ives, Interludes for Hymns", "https://ressources.ircam.fr/en/works/work/32465"],
      ["BYU Organ Tutor — xác định nhịp độ", "https://organ.byu.edu/organtutor/hymn_playing/tempo/determine_tempo/page1.htm"],
      ["The Diapason — Thoughts on service playing: hymn playing", "https://thediapason.com/content/thoughts-service-playing-part-i-hymn-playing"],
      ["Reformed Worship — Serving the hymn: hymn introductions", "https://reformedworship.org/resource/serving-hymn-some-thoughts-hymn-introductions"],
      ["AGO — checklist (PDF)", "https://old.agohq.org/wp-content/uploads/2019/11/It-dont-mean-a-thing.pdf"],
      ["Wikipedia — Last verse harmonisation", "https://en.wikipedia.org/wiki/Last_verse_harmonisation"],
      ["Trinity College Dublin — The Lost Art of Harmonic Variation in 18th-c. hymn accompaniment", "https://www.tara.tcd.ie/items/4be4d81e-6acb-4e28-a186-4fa2cfef3a0d"],
    ],
    body: `
Bài này là bước 9 của [[am-nhac-nha-tho]]. Chorale là gì và chorale prelude khác bản đệm thế nào: [[chorale-va-chorale-prelude]].

## Arnstadt, tháng 2 năm 1706
- Sau chuyến đi Lübeck kéo dài khoảng **16 tuần** thay vì 4 tuần được phép, [[johann-sebastian-bach|Bach]] bị hội đồng giáo hội Arnstadt gọi lên giải trình (Leaver ghi ngày **21/2/1706**; tài liệu: Bach-Dokumente II số 14 – 17).
- Nguyên văn được trích: *"…dass er bisher in dem Choral viele wunderliche Variationes gemachet, viele fremde Thone mit eingemischt…"* — ông đã làm **nhiều [[bien-tau|biến tấu]] kỳ lạ** trong chorale, **trộn vào nhiều âm lạ**, khiến **cộng đoàn bối rối**.
- Các lời trách khác: [[prelude-ung-tac|dạo đầu]] lúc thì quá dài, bị nhắc thì lại quá ngắn; không trình diễn nhạc "figural" (có hợp xướng, nhạc cụ) dù hợp đồng không bắt buộc.
- "Âm lạ" nghĩa là gì chính xác thì **chưa rõ**. Trang All of Bach gắn nó với lối viết [[thuan-nghich|nghịch âm]] giữa hai tay (như trong BWV 533) và với các đoạn nối kiểu BWV 726.

## Các "chorale Arnstadt" — chorale passaggio
- Sáu bản **BWV 715, 722, 726, 729, 732, 738** thường được gọi là *Arnstädter Gemeindechoräle* ("chorale cộng đoàn Arnstadt"): [[giai-dieu|giai điệu]] hoà âm đơn giản, **xen các đoạn chạy ngắn** (*passaggio*) giữa các câu — đúng điều organist làm khi đệm. BWV 726: giai điệu liền mạch, các đoạn nối như [[ngau-hung-ung-tac|ứng tác]].
- Nhưng **Zehnder** (Bach-Jahrbuch) nghi ngờ cái nhãn này: chưa chắc chúng từng được dùng để đệm cho cộng đoàn **đang hát**, và có thể viết ở Weimar. Trang All of Bach cũng nghi một cộng đoàn theo kịp BWV 726.
- Theo Zehnder, truyền thống passaggio tập trung ở Thüringen/Erfurt và được ghi lại trong chuyên luận năm 1803 của **Kittel** — học trò của Bach (xem [[bach-day-hoc-tro]]).
::ytsearch Bach Herr Jesu Christ dich zu uns wend BWV 726 | Tìm nghe BWV 726
::ytsearch Bach Allein Gott in der Höh sei Ehr BWV 715 | Tìm nghe BWV 715

## Bach về sau nghĩ gì?
Một bài trên Bach-Jahrbuch thuật lại rằng về sau Bach có quan điểm giống **Johann Nicolaus Bach**: *"Người organist thể hiện nghệ thuật thật sự của mình trong khúc dạo đầu; còn khi cộng đoàn hát, hãy chỉ giữ họ trật tự bằng hoà âm **đầy, trong**, dựa trên giai điệu đúng."* — tức là dè dặt với interlude trong lúc cộng đoàn hát, khác hẳn thời Arnstadt. Chương 11 sách của Stauffer (OUP 2024) bàn cả các bản có interlude thời Weimar, việc organist đương thời **lạm dụng** interlude, và nhận xét muộn của Bach. *(Thư viện mới đọc qua tóm tắt.)*

**Ở Leipzig thì sao?** Không có bằng chứng dứt khoát rằng organist Leipzig đệm cho cộng đoàn hát chorale thời Bach; Walter Blankenburg phản bác, cho rằng nhiều bản chorale bốn bè có [[cao-do|âm vực]] quá cao để cộng đoàn hát theo. Lời kể "chính quyền Leipzig phàn nàn hoà âm lạ" chỉ là **tin đồn diễn đàn**.

## Interlude ở Anh và Mỹ
- Một luận án Durham: ở Anh, khi tục "xướng từng dòng" (lining-out) bị bỏ, organist chơi **interlude giữa các câu** — thường kiểu cách vụn vặt; tục này không bao giờ mất hẳn.
- [[charles-ives|Charles Ives]] viết *Interludes for Hymns* (1898) — dấu vết của tục đó ở Mỹ.

## Thực hành hiện đại
| Việc | Lời khuyên | Nguồn |
|---|---|---|
| Chọn [[nhip-do|nhịp độ]] | Tự hát cả bài, đánh dấu chỗ thở và nhịp tự nhiên | BYU [[organ-ong|Organ]] Tutor |
| Giữ nhịp | Organist đặt nhịp và giữ suốt bài bằng lối chạm rõ ràng | The Diapason |
| Dạo đầu | Vd. chơi dòng đầu đúng nhịp sẽ hát; tuyển tập dạo đầu cho mọi bài trong sách hát Luther (CPH) | The Diapason; CPH |
| Giữa các câu | Nghỉ khoảng hai phách (giữ [[hop-am-ba|hợp âm]] cuối thêm một – hai phách), không thêm chỗ nghỉ giữa các dòng | Church Music Dublin *(yếu)* |
| Thay [[am-sac|âm sắc]] | Đổi đăng ký theo từng câu; thêm mixture cho câu cuối khi lời phù hợp | Reformed Worship |
| Câu cuối | Đổi hoà âm, giữ nguyên giai điệu (*last verse harmonisation*); có **descant** thì dùng hoà âm gốc hoặc hoà âm viết cho descant | Wikipedia |
| Amen | Giữ một âm chung từ hợp âm cuối sang Amen để báo cho cộng đoàn | AGO |
| Cẩn thận | Bản đệm tự do xa giai điệu quá sẽ **cản** cộng đoàn hát | Reformed Worship |

**Nối với lý thuyết:** câu cuối đổi hoà âm là bài tập [[tai-hoa-am|tái hoà âm]] giữ giai điệu; dạo đầu ngắn là [[lich-su-ngau-hung|ngẫu hứng]] trên chất liệu chorale. Kỹ năng đệm tay trái – tay phải trên piano: [[dem-hat-piano]].
`,
  },
  {
    slug: "binh-ca-va-organ-o-viet-nam",
    title: "Bình ca và organ ở Việt Nam: điều đã biết và khoảng trống",
    category: 'sacred',
    also: ['vietnam'],
    aliases: ["bình ca ở Việt Nam", "organ nhà thờ Lớn Hà Nội", "đại phong cầm", "organ Việt Nam", "Ủy ban Thánh nhạc", "imprimatur thánh ca", "thánh nhạc Việt Nam"],
    summary: "Những gì nguồn đáng tin nói về bình ca Gregorian và đàn organ trong Công giáo Việt Nam: bình ca được hát song song với thánh ca tiếng Việt; đàn organ ống là biểu tượng của âm nhạc nhà thờ (Lê Hải Đăng); cây organ 1.850 ống của Nhà thờ Lớn Hà Nội (2022) đến từ Itami, Nhật Bản; Ủy ban Thánh nhạc chỉ cho dùng bài có phép in (imprimatur). Bài ghi rõ những gì chưa có nguồn: kỹ thuật đệm ở giáo xứ, bình ca lời Việt.",
    refs: [
      ["UCA News — Vietnam's Catholic hymns resonate beyond church walls", "https://www.ucanews.com/news/vietnams-catholic-hymns-resonate-beyond-church-walls/109430"],
      ["UCA News — Grand organ from Japan installed in Hanoi cathedral (2022)", "https://www.ucanews.com/news/grand-organ-from-japan-installed-in-hanoi-cathedral/99548"],
      ["Hanoi Times — câu chuyện cây organ 9 tấn ở Nhà thờ Lớn", "https://m.hanoitimes.vn/the-untold-story-of-the-nine-ton-organ-at-st-josephs-cathedral-328765.html"],
      ["Vietnam News — buổi hoà nhạc organ đầu tiên", "https://vietnamnews.vn/life-style/803913/first-concert-in-vn-to-feature-pipe-organ.html"],
      ["Viện Âm nhạc — Lê Hải Đăng, Catholic acculturation from the perspective of church music", "https://vienamnhac.vn/articles/modern-music/catholic-acculturation-from-the-perspective-of-church-music"],
      ["VJOL (NCPT Huế) — Lê Hải Đăng", "https://vjol.info.vn/ncpt-hue/article/view/28101"],
      ["VJOL — Bùi Trung Thành, giáo xứ Đồng Bài và An Ngải", "https://vjol.info.vn/rsr/article/view/126427"],
      ["OCP — Paul Văn Chi, Catholic Choral Music in Vietnam 1945–1975", "https://www.ocp.org/en-us/collections/dg/630/catholic-choral-music-in-vietnam-1945-1975"],
      ["Fides — về thánh nhạc ở Tổng giáo phận Hà Nội", "https://www.fides.org/en/news/72331"],
      ["Giáo phận Đà Nẵng — Thông cáo của Ủy ban Thánh nhạc về tác quyền (PDF, 2022)", "https://giaophandanang.org/wp-content/uploads/2022/11/UBTN-thong-cao-ve-tac-quyen-20221110.pdf"],
      ["Giáo phận Cần Thơ — bài nói về Imprimatur (PDF)", "https://gpcantho.com/wp-content/uploads/2023/03/IMPRIMATUR-Bai-noi-chuyen-FINAL.pdf"],
      ["Herald Malaysia — Hội thảo thánh nhạc lần 54 (2025)", "https://www.heraldmalaysia.com/news/vietnam-church-hosts-sacred-music-workshop/82559/1"],
      ["Catholic World Report — Ngắm Mùa Chay (2019)", "https://www.catholicworldreport.com/2019/04/19/this-unique-chant-brings-vietnamese-catholics-deeper-into-christs-passion-2/"],
      ["Wikipedia — Đọc kinh", "https://en.wikipedia.org/wiki/%C4%90%E1%BB%8Dc_kinh"],
    ],
    body: `
Bài này là bước 13 của [[am-nhac-nha-tho]] và bổ sung cho [[am-nhac-ton-giao-va-dan-toc-viet-nam]].

## Bình ca bên cạnh thánh ca tiếng Việt
- UCA News: các giáo xứ Việt Nam thường có ít nhất hai ca đoàn (người lớn và giới trẻ); **[[thanh-ca-gregorian|bình ca]] Gregorian được hát cùng** thánh ca chính thức và các sáng tác lấy chất liệu dân ca Việt. Linh mục **Nguyễn Kim Long**, tác giả hơn 3.500 bài thánh ca tiếng Việt, qua đời ngày 17/6/2025, 84 tuổi.
- Fides: thánh nhạc Công giáo Việt phát triển đều từ thập niên 1940; Ủy ban thánh nhạc Tổng giáo phận Hà Nội từng tổ chức hội thảo cho khoảng 300 đại diện ca đoàn về nguyên tắc âm nhạc và hướng dẫn của Giáo hội.
- Lm. **Paul Văn Chi**, *Catholic Choral Music in Vietnam 1945 – 1975* (OCP) chia ba giai đoạn: đặt nền 1945 – 1955, phát triển 1955 – 1970, chín muồi 1970 – 1975.
- Truyền thống bản địa **không phải Gregorian** nhưng cùng tinh thần "đọc trên [[cao-do|cao độ]]": **đọc kinh** — lời kinh ngân nga theo cao độ của thanh điệu — và **Ngắm Mùa Chay**, các bài suy niệm Thương khó được ngâm ở nhiều nhà thờ. Xem [[viet-binh-ca-cho-tieng-ban-dia]].

## Đàn organ
- **Lê Hải Đăng** (Viện Âm nhạc): **đại phong cầm** (organ ống) là nhạc cụ biểu tượng của âm nhạc nhà thờ; thánh nhạc ảnh hưởng đến thị hiếu âm nhạc ngoài đời; các nữ tu đóng vai trò truyền bá.
- **Nhà thờ Lớn Hà Nội** (2022): cây organ do thợ Bỉ **Guido Schumacher** đóng, lắp năm 1993 ở **Itami** (Nhật Bản) theo chương trình kết nghĩa Itami – Hasselt; Itami không đủ kinh phí bảo dưỡng nên tặng miễn phí cho Tổng giáo phận Hà Nội, phía Hà Nội trả chi phí vận chuyển và sửa chữa; cao khoảng 7 m, khoảng **1.850 ống**; buổi hoà nhạc khánh thành có Tổng Giám mục Giuse Vũ Văn Thiên.
- Cấu tạo organ ống, ống lưỡi gà và ống sáo: [[organ-ong]].

## Quy định
- Ủy ban Thánh nhạc (Hội đồng Giám mục Việt Nam): chỉ bài có **phép in (imprimatur)** mới được dùng trong phụng vụ (*Hướng dẫn Mục vụ Thánh nhạc*, số 114 – 115).
- Hội thảo thánh nhạc lần thứ 54 tổ chức ngày 6/5/2025 tại TP.HCM.

## Những khoảng trống (chưa có nguồn)
- **Kỹ thuật đệm đàn** ở các giáo xứ Việt Nam (organ hay đàn phím điện, hoà âm, đăng ký [[am-sac|âm sắc]]).
- Lịch sử organ ở Nhà thờ Đức Bà Sài Gòn và Tân Định.
- [[an-ban-urtext|Ấn bản]] **bình ca lời Việt**, và cách xử lý thanh điệu khi đặt lời Việt vào [[giai-dieu|giai điệu]] Gregorian.
- Định nghĩa thuật ngữ "bình ca" trong một nguồn tiếng Việt.
Nếu bạn có tài liệu (sách hướng dẫn của Ủy ban Thánh nhạc, giáo trình chủng viện), đó là nơi thư viện cần đối chiếu tiếp.
`,
  },
  {
    slug: "tai-lieu-su-pham-cua-bach",
    title: "Tài liệu sư phạm của Bach cho âm nhạc nhà thờ",
    category: 'sacred',
    also: ['musicianship', 'musicology'],
    aliases: ["tài liệu sư phạm của Bach", "Orgelbüchlein", "Orgel-Büchlein", "Little Organ Book", "Clavierbüchlein für Wilhelm Friedemann Bach", "Clavier-Übung III", "German Organ Mass", "Schübler Chorales", "Leipzig chorales", "Great Eighteen", "Vorschriften und Grundsätze", "Precepts and Principles", "Schemelli", "Musicalisches Gesang-Buch", "371 chorale", "371 chorales", "Riemenschneider", "Bach chorales", "chorale của Bach"],
    summary: "Bach không viết sách lý thuyết in, nhưng để lại một chuỗi tập nhạc có lời tựa nói rõ mục đích dạy: Clavierbüchlein cho Wilhelm Friedemann (1720), Orgelbüchlein \"cho organist mới bắt đầu\" học chơi chorale và luyện pedal, Inventions và Sinfonias (1723), Clavier-Übung III (1739), các chorale Schübler và Leipzig; cùng bản chép tay \"Vorschriften und Grundsätze\" về bè trầm số (1738), sách hát Schemelli (1736) và tuyển 371 chorale bốn bè in sau khi ông mất. Bài nêu ngày tháng, lời tựa và những chỗ còn tranh cãi về tác giả.",
    wiki: "Orgelbüchlein",
    refs: [
      ["Bach Digital — Orgel-Büchlein BWV 599–644 (P 283)", "https://bachdigital.dl.uni-leipzig.de/receive/BachDigitalWork_work_00011155"],
      ["Wikipedia — Orgelbüchlein", "https://en.wikipedia.org/wiki/Orgelb%C3%BCchlein"],
      ["The Diapason — Das Orgelbüchlein: tổng quan thư mục", "https://thediapason.com/content/das-orgelbuchlein-bibliographic-overview-selected-editions"],
      ["Wikipedia — Klavierbüchlein für Wilhelm Friedemann Bach", "https://en.wikipedia.org/wiki/Klavierb%C3%BCchlein_f%C3%BCr_Wilhelm_Friedemann_Bach"],
      ["CCARH — trang nhan đề Inventions & Sinfonias 1723", "https://esf.ccarh.org/MuseData-Ed-202003/baroque/bach/rasmuss/doc/title"],
      ["Tomita (QUB) — về Inventions", "https://www.qub.ac.uk/tomita/essay/inventions.html"],
      ["Wikipedia — Clavier-Übung III", "https://en.wikipedia.org/wiki/Clavier-%C3%9Cbung_III"],
      ["Bach Digital — Clavier-Übung III, bản in 1739", "https://bachdigital.dl.uni-leipzig.de/receive/BachDigitalSource_source_00024100"],
      ["Wikipedia — Schübler Chorales", "https://en.wikipedia.org/wiki/Sch%C3%BCbler_Chorales"],
      ["Wikipedia — Great Eighteen Chorale Preludes", "https://en.wikipedia.org/wiki/Great_Eighteen_Chorale_Preludes"],
      ["Holy Cross — Poulin, J. S. Bach's Precepts and Principles (Clarendon 1994)", "https://library.holycross.edu/Record/b1335530"],
      ["Bach-cantatas — Braatz, về Generalbass-Lehre (PDF)", "https://mail.bach-cantatas.com/Articles/GBLehre.pdf"],
      ["Bach-cantatas — Carl August Thieme", "https://bach-cantatas.com/Lib/Thieme-Carl-August.htm"],
      ["Wikipedia — Georg Christian Schemelli", "https://en.wikipedia.org/wiki/Georg_Christian_Schemelli"],
      ["IMSLP — Chorale Harmonisations BWV 250–438", "https://imslp.org/wiki/Chorale_Harmonisations,_BWV_250-438_(Bach,_Johann_Sebastian)"],
      ["Morgan Library — bản in chorale Birnstiel", "https://themorgan.org/node/1215411"],
      ["Bach-chorales.com — các tuyển tập sớm", "https://bach-chorales.com/EarlyCollectionsKey.htm"],
    ],
    body: `
Bài này là bước 10 của [[am-nhac-nha-tho]]. Tiểu sử: [[johann-sebastian-bach]]. Cách ông dạy trên lớp: [[bach-day-hoc-tro]].

::timeline 1708-1716=Orgelbüchlein_(Weimar) 1720=Clavierbüchlein_W._F. 1723=Inventions 1736=Schemelli 1738=Vorschriften 1739=Clavier-Übung_III 1739-1750=Chorale_Leipzig 1746-1750=Schübler 1765-1787=371_chorale_in | Các tập có mục đích sư phạm, theo năm (khoảng)

## Bảng tổng quan
| Tập | Năm | Dạy gì | Lời tựa / ghi chú |
|---|---|---|---|
| **Clavierbüchlein cho W. F. Bach** | bắt đầu 1720 ([[wilhelm-friedemann-bach|Friedemann]] khoảng 10 tuổi) | khoá, [[ky-hieu-hoa-my|hoa mỹ]], [[ngon-bam|ngón bấm]] | Mở đầu bằng bảng giải thích khoá (*Claves signatae*), bảng hoa mỹ (*Explication*), rồi *Applicatio* BWV 994 có **ngón bấm do Bach ghi**; chứa bản sớm của Inventions ("Praeambula", "Fantasias") và một số prelude của Bình quân luật |
| **Orgelbüchlein** BWV 599 – 644 | soạn ở Weimar (các nhóm khoảng 1708 – 1716); trang nhan đề thời Köthen | chơi chorale, luyện [[ban-dap|pedal]] | Kế hoạch **164** bài, hoàn thành **46** (có nguồn ghi 45) |
| **Inventions & Sinfonias** | trang nhan đề 1723 | chơi hai, ba bè; nếm trước sáng tác | "để đạt được **lối chơi hát** (*cantable*)" và "có được **một vị nếm mạnh về sáng tác**" — xem [[phan-tich-invention-so-1]] |
| **Musicalisches Gesang-Buch** (Schemelli) | Leipzig, Breitkopf, 1736 | hát chorale với bè trầm số | 954 lời, chỉ **69** bài in kèm [[giai-dieu|giai điệu]] và [[bass-so|bè trầm số]] (BWV 439 – 507); lời tựa nói Bach làm bè trầm số và sáng tác hoặc sửa một số giai điệu. [[lich-su-nganh-am-nhac-hoc|Spitta]] gán 29 giai điệu cho Bach — **còn tranh cãi** |
| **Vorschriften und Grundsätze** | bản chép 1738 | bè trầm số bốn bè | Xem mục riêng dưới đây |
| **Clavier-Übung III** | Leipzig, 1739, Bach tự xuất bản | chorale giáo lý cho [[organ-ong|organ]] | Nhan đề: "…gồm nhiều khúc [[prelude-ung-tac|dạo đầu]] trên các bài ca **Giáo lý** và các bài ca khác, cho organ…", dành cho "những người yêu nhạc, **đặc biệt là người sành**" (*Kenner*). Gồm Kyrie/Gloria BWV 669 – 677, chorale giáo lý bản lớn và nhỏ BWV 678 – 689, bốn duetto BWV 802 – 805, đóng khung bởi Prelude và Fugue Mi giáng BWV 552. Biệt danh "German Organ Mass" **không** phải của Bach |
| **Chorale Schübler** BWV 645 – 650 | khoảng 1746 – 1750, in ở Zella | chép [[oratorio-cantata-passion|cantata]] sang organ | Năm bài chuyển soạn từ aria cantata (vd. BWV 645 ← BWV 140/4); BWV 646 không còn bản gốc |
| **Chorale Leipzig** ("Great Eighteen") BWV 651 – 668 | sửa ở Leipzig từ bản Weimar; chép 1739 – 1750 | chorale lớn | Bản tay P 271; BWV 666 – 667 do Altnikol chép 1750; BWV 668 là mảnh |
| **371 chorale bốn bè** | in 1765 – 1769 (Birnstiel) và 1784 – 1787 (Breitkopf) | phối bốn bè | Xem mục riêng |

## Trang nhan đề Orgelbüchlein
Bản dịch (theo Wikipedia): *"Cuốn sách organ nhỏ, trong đó người **organist mới bắt đầu** được hướng dẫn cách trình bày một chorale theo **nhiều cách**, đồng thời luyện thành thạo **pedal**…"* — pedal ở đây là **bắt buộc** (*obligat*). Kết bằng hai câu thơ: *"Dem Höchsten Gott allein zu Ehren, / Dem Nechsten, draus sich zu belehren"* — "Để tôn vinh Thiên Chúa tối cao, / và cho người lân cận tự học từ đó." 

Mỗi bài là một chorale trọn vẹn, giai điệu thường nằm ở bè trên, các bè dưới đan [[motif]] — một bài học về [[cantus-firmus]] và [[doi-am|đối âm]] trên chất liệu phụng vụ. Xem [[chorale-va-chorale-prelude]].
::ytsearch Bach Orgelbüchlein BWV 599 Nun komm der Heiden Heiland | Tìm nghe bài mở đầu Orgelbüchlein (BWV 599)

## "Vorschriften und Grundsätze" (1738)
- Nhan đề đầy đủ: *Vorschriften und Grundsätze zum vierstimmigen Spielen des General-Bass oder Accompagnement* — **Quy tắc và nguyên lý chơi bè trầm số bốn bè, hay đệm**.
- **Nguồn duy nhất**: một bản chép tay đề năm 1738 ở Nhạc viện Brussels. H.-J. Schulze (Bach-Jahrbuch 1978) nhận ra người chép trang nhan đề và chỗ sửa là **Carl August Thieme**, học trò trường Thomas (1735 – 1745) → đặt văn bản trong vòng học trò Bach. Spitta trước đó gán nhầm cho J. P. Kellner.
- **Chín chương đầu** dựa sát Phần 1 của *Musicalische Handleitung* (1700) của **F. E. Niedt**.
- Tác giả là Bach đến đâu: các biên tập viên *Bach-Dokumente* **nghi ngờ**; John Butt coi là tương đối chắc chắn của Bach. Bản tiếng Anh: Pamela Poulin, *J. S. Bach's Precepts and Principles…* (Clarendon, 1994, có bản chụp).
- Ý nghĩa: đây là văn bản gần nhất ta có với "giáo trình" bè trầm số của Bach. Thực hành bè trầm số: [[bass-so]] và [[partimento]].

## 371 chorale
- **Birnstiel** (Berlin/Leipzig, 1765 – 1769): 2 tập, khoảng 200 chorale. [[nguon-tra-cuu-am-nhac-hoc|IMSLP]] ghi C. P. E. Bach biên tập tập 1, Agricola tập 2; một trang khác nêu Marpurg — **mâu thuẫn**.
- **Breitkopf** (Leipzig, 1784 – 1787): 4 tập, **371** bài, do [[carl-philipp-emanuel-bach|C. P. E. Bach]] và **Kirnberger** biên tập (khoảng 170 bài in lần đầu).
- Phần lớn BWV 253 – 438 **chỉ còn** qua tuyển tập này. Bản Riemenschneider (G. Schirmer, 1941, *371 Harmonized Chorales and 69 Chorale Melodies with Figured Bass*) theo số thứ tự Breitkopf và vẫn được in.
- Vì được tách khỏi cantata gốc và in thành tập, các chorale này trở thành **sách bài tập hoà âm** chuẩn — xem [[phoi-chorale-kieu-bach]].

## Những gì chưa chắc
- Số bài hoàn thành trong Orgelbüchlein: 45 hay 46.
- Mức độ Bach là tác giả của *Vorschriften* (1738) và các giai điệu Schemelli.
- Biên tập viên bản Birnstiel.
`,
  },
  {
    slug: "bach-day-hoc-tro",
    title: "Bach dạy học trò thế nào: lời kể của con trai và học trò",
    category: 'sacred',
    also: ['musicianship', 'improvisation'],
    aliases: ["Bach dạy học", "Bach như một nhà sư phạm", "học trò của Bach", "Kirnberger", "Johann Philipp Kirnberger", "Kittel", "Johann Christian Kittel", "Heinrich Nicolaus Gerber", "Der angehende praktische Organist", "Die Kunst des reinen Satzes", "thư C. P. E. Bach gửi Forkel"],
    summary: "Bach dạy bằng đàn phím và bè trầm số chứ không bằng đối âm \"khô\". Theo lời C. P. E. Bach gửi Forkel, học trò trước hết phải thành thạo bè trầm số bốn bè thuần khiết, rồi tập chorale: thầy cho bè trầm, trò tự viết alto và tenor. Gerber kể lộ trình Inventions → tổ khúc → Bình quân luật → bè trầm số; Kirnberger và Kittel truyền phương pháp sang thế hệ sau, và với Kittel chorale đàn phím trở thành trung tâm của việc đào tạo organist nhà thờ.",
    refs: [
      ["Forkel — Johann Sebastian Bach (1802), bản Anh của C. S. Terry 1920, Project Gutenberg", "https://gutenberg.org/cache/epub/35041/pg35041-images.html"],
      ["Bach-chorales.com — Schemelli realizations (trích thư C. P. E. Bach)", "https://bach-chorales.com/SchemelliRealizations.htm"],
      ["Yale — Forkel và cuốn tiểu sử Bach", "https://musiclib-exhibits.library.yale.edu/exhibits/histories/forkel_jsbach.html"],
      ["ZGMTH — về sáng tác, bè trầm số và đàn phím trong sư phạm của Bach", "https://storage.gmth.de/zgmth/pdf/997"],
      ["Bach-cantatas — Heinrich Nicolaus Gerber", "https://bach-cantatas.com/Lib/Gerber-Heinrich-Nicolaus.htm"],
      ["Wikipedia — Johann Kirnberger", "https://en.wikipedia.org/wiki/Johann_Kirnberger"],
      ["Caplin — điểm sách Kirnberger (PDF)", "https://www.music.mcgill.ca/~caplin/kirnberger-review.pdf"],
      ["Mainz — Aerts, về Kirnberger và lý thuyết đối âm (PDF)", "https://openscience.ub.uni-mainz.de/bitstream/20.500.12030/8755/1/zur_kontrapunktlehre_bei_kirn-20230428083743262.pdf"],
      ["Wikipedia — Johann Christian Kittel", "https://en.wikipedia.org/wiki/Johann_Christian_Kittel"],
      ["Bach-cantatas — Kittel", "https://mail.bach-cantatas.com/Lib/Kittel-Johann-Christian.htm"],
      ["Bach Network — McCormick, Understanding Bach 8 (PDF)", "https://www.bachnetwork.org/ub8/UB8_McCormick.pdf"],
      ["Robin Leaver — hồ sơ học thuật (Academia)", "https://independent.academia.edu/RobinLeaver"],
      ["Byros — Prelude on a Partimento (MTO 21.3, 2015)", "https://www.mtosmt.org/issues/mto.15.21.3/mto.15.21.3.byros.html"],
      ["Wikipedia — Johann Joseph Fux", "https://en.wikipedia.org/wiki/Johann_Joseph_Fux"],
    ],
    body: `
Bài này là bước 11 của [[am-nhac-nha-tho]]. Tài liệu [[johann-sebastian-bach|Bach]] để lại: [[tai-lieu-su-pham-cua-bach]].

## Lời C. P. E. Bach (qua Forkel)
[[carl-philipp-emanuel-bach|Carl Philipp Emanuel]] trả lời các câu hỏi của [[lich-su-nganh-am-nhac-hoc|Forkel]], người viết cuốn tiểu sử Bach đầu tiên (1802; chương VII "Bach như một người thầy"). Theo lời trích dẫn lại:
1. Học trò trước hết phải thành thạo **bè trầm số bốn bè thuần khiết**.
2. Rồi đến **[[chorale-va-chorale-prelude|chorale]]**: thầy đưa **bè trầm**, trò tự sáng tạo **alto và tenor**.
3. Theo bản tóm tắt Forkel, Bach chuyển học trò thẳng từ bè trầm số sang viết bốn bè thay vì luyện [[doi-am|đối âm]] khô khan, và đòi họ sáng tác **không cần nhạc cụ**.
*(Nguyên văn và ngày của bức thư — thường nói là năm 1775 — chưa xác minh; các ý trên là bản diễn ý qua nguồn thứ cấp.)*

Một bài trên tạp chí ZGMTH nhấn mạnh: với Bach, sáng tác gắn với **bè trầm số và đàn phím**; một giấy chứng nhận năm 1727 nhắc việc dạy clavier, bè trầm số và "nguyên lý sáng tác". Cuốn *Gradus ad Parnassus* (1725) của [[johann-joseph-fux|Fux]] có trong thư viện của Bach.

## Lộ trình của một học trò: Heinrich Nicolaus Gerber
Gerber học ở Leipzig 1724 – 1727; con trai ông (E. L. Gerber, trong từ điển năm 1790) kể:
::form Inventions Tổ_khúc Bình_quân_luật Bè_trầm_số | Thứ tự bài học của H. N. Gerber với Bach
- Bè trầm số được luyện trên **các bản solo [[violin|violin]] của [[tomaso-albinoni|Albinoni]]**.
- Gerber để lại bản chép Inventions/Sinfonias, French Suites, bốn [[to-khuc-baroque|English Suites]] và hai bài đầu Bình quân luật tập I.

## Người nối tiếp
| Học trò | Đóng góp |
|---|---|
| **Johann Philipp Kirnberger** | *Die Kunst des reinen Satzes in der Musik* (1774, 1779). Forkel ghi công ông phát triển phương pháp dạy của Bach và rút ra một hệ thống hoà âm từ tác phẩm Bach. Trong *Gedanken über die verschiedenen Lehrarten in der Komposition* (Berlin, 1782) ông đề cao phương pháp Bach và đòi dạy viết **ba và bốn bè thuần khiết**. Ông lo in các chorale của Bach (in sau khi ông mất) |
| **Johann Christian Kittel** (1732 – 1809) | Học Bach từ 1748 (thường gọi là học trò cuối); organist Langensalza (1751), Erfurt (Barfüßerkirche 1756, Predigerkirche 1762). Viết *Der angehende praktische Organist* (Erfurt, 3 tập, 1801 – 1808), xoay quanh **[[dem-hat-cong-doan-tren-organ|đệm chorale]]** và chơi [[organ-ong|organ nhà thờ]]. Học trò: M. G. Fischer, Umbreit, Hässler, Rinck. Sách chorale Schleswig-Holstein (1803) của ông có mỗi bài một bản bốn bè và một khúc dạo ngắn |

**Robin Leaver** lập luận rằng trung tâm sư phạm của Bach là **chorale đàn phím**, không phải chorale hợp xướng, và lần theo truyền thống ấy qua Marpurg, Kirnberger, Kittel và học trò của Kittel. Susan McCormick (Understanding Bach 8, 2013) tìm lại một bản chép tay sách chorale của Kittel.

## Áp dụng cho người học hôm nay
*(Đề xuất của thư viện dựa trên các lời kể trên.)*
- **Bè trầm số trước**: chơi bè trầm có số bằng tay trái, ba bè trên bằng tay phải — xem [[bass-so]], [[partimento]] và bài của Byros về partimento trong sư phạm sáng tác Đức thời Bach.
- **Bài tập chorale kiểu Bach**: lấy một chorale trong tập 371, che alto và tenor, tự điền rồi so với bản gốc — chi tiết ở [[phoi-chorale-kieu-bach]].
- **Hai bè trước bốn bè**: [[phan-tich-invention-so-1|Inventions]] cho đối âm hai bè; luật cơ bản ở [[doi-am-5-loai]] và [[doi-am-ba-bon-be]].
`,
  },
  {
    slug: "phoi-chorale-kieu-bach",
    title: "Phối hoà âm chorale kiểu Bach: phương pháp và nghiên cứu",
    category: 'sacred',
    also: ['harmony', 'analysis'],
    aliases: ["phối chorale", "phối chorale kiểu Bach", "hoà âm chorale", "Bach chorale harmonization", "chorale harmonisation", "bài tập chorale", "kế hoạch kết", "de Clercq", "DeepBach", "music21 Bach"],
    summary: "Cách phối một chorale bốn bè như trong 371 chorale của Bach: lập kế hoạch kết ở mỗi fermata trước (nghiên cứu kho chorale của de Clercq: đọc nốt soprano ở fermata như bậc 1, 2 hoặc 3 của một giọng gần, rồi đặt kết hoàn toàn hoặc nửa kết — đúng hơn 90%), viết bè trầm, rồi điền alto, tenor theo lối học trò Bach được dạy. Bài có ví dụ ba cách kết trên cùng một nốt Mi, một bài tập điền bè, và tổng quan các nghiên cứu thống kê và máy học trên kho chorale.",
    refs: [
      ["de Clercq — bài trình bày MTSMA 2013 (PDF)", "https://www.midside.com/presentations/declercq_2013_mtsma_text.pdf"],
      ["de Clercq — poster SMT 2014 (PDF)", "https://www.midside.com/presentations/declercq_2014_smt_poster.pdf"],
      ["Oxford Faculty of Music — hướng dẫn phối chorale (PDF)", "https://music.web.ox.ac.uk/files/choraleharmonisationinstructions-2pdf"],
      ["ZGMTH — phối chorale như các module kết chồng nhau (DOAJ, 2019)", "https://doaj.org/article/0b4b01f17fcc4ed6beabc40c169bfbfa"],
      ["JMTP — nốt 7 lướt trên bè trầm ở kết", "https://journals.ou.edu/jmtp/article/download/579/1405/1397"],
      ["G Major Music Theory — phân tích \"Ach Gott, vom Himmel sieh' darein\"", "https://gmajormusictheory.org/HarmExpansions/Ch5/05_2.html"],
      ["Rohrmeier & Cross — Statistical properties of tonal harmony in Bach's chorales (ICMPC 2008)", "https://www.doi.org/10.1007/978-3-642-21590-2_18"],
      ["Hadjeres & Pachet — DeepBach (arXiv 1612.01010)", "https://arxiv.org/pdf/1612.01010"],
      ["Presto — Riemenschneider, 371 Harmonized Chorales", "https://live.prestomusic.com/sheet-music/products/7032445--johann-sebastian-bach-371-harmonized-chorales-and-69-chorale-melodies"],
      ["Bach-chorales.com — Schemelli realizations", "https://bach-chorales.com/SchemelliRealizations.htm"],
    ],
    body: `
Bài này là bước 12 của [[am-nhac-nha-tho]] và là phần áp dụng của [[luat-hoa-am-bon-be]]. Nguồn chorale: [[tai-lieu-su-pham-cua-bach]] (mục 371 chorale).

## Bước 1 — Lập kế hoạch kết
- Hướng dẫn của **Khoa Âm nhạc Oxford**: lên kế hoạch các [[cau-ket|kết]] **trước tiên**; các giọng kết hay gặp là giọng chủ, át, hạ át và [[giong-song-song|giọng song song]]; kết hoàn toàn phổ biến nhất, nửa kết và kết lừa cũng có thể dùng.
- Nghiên cứu kho 371 chorale của **Trevor de Clercq**: quy tắc mặc định là [[doc-not-nhanh|đọc nốt]] soprano ở mỗi **fermata** như **bậc 1, 2 hoặc 3** của một giọng gần, rồi đặt kết hoàn toàn (bậc 1, 3) hoặc nửa kết (bậc 2). Với vài tinh chỉnh, quy tắc này đúng **hơn 90%**. [[johann-sebastian-bach|Bach]] đặt [[hop-am-ba|hợp âm]] kết ở **phách 3** bất cứ khi nào có thể, trừ khi [[giai-dieu|giai điệu]] đi liền bậc xuống fermata ở phách 4.

::grand G4+D5/G2+B3=V G4+E5/C3+C4=I G4+D5/Bb2+D4=iv6 A4+E5/A2+C#4=V F#4+D#5/B2+B3=V G4+E5/E3+B3=i | Cùng một nốt soprano Mi ở fermata, ba cách đọc: bậc 3 của Đô trưởng (kết hoàn toàn), bậc 2 của Rê thứ (nửa kết), bậc 1 của Mi thứ (kết hoàn toàn). Ví dụ do thư viện dựng để minh hoạ quy tắc của de Clercq, không trích từ Bach

## Bước 2 — Viết bè trầm
Theo lời C. P. E. Bach, chính Bach dạy chorale bằng cách **đưa sẵn bè trầm** cho học trò (xem [[bach-day-hoc-tro]]). Khi tự phối, hãy làm điều ngược lại: viết bè trầm ngay sau khi có kế hoạch kết, kiểm tra **khung hai bè** soprano – bass trước (chuyển động ngược, không [[quang|quãng]] 5 và [[dan-giong|quãng 8 song song]]) rồi mới điền bè giữa. Một bài trên ZGMTH (2019) còn đề xuất rằng Bach có thể hình dung việc phối nhiều bè trầm khác nhau cho cùng một chorale như việc ghép các **module kết chồng lên nhau** (theo các nguồn trong vòng học trò của ông).

## Bước 3 — Điền alto và tenor
Luật bốn bè (khoảng cách, nhân đôi, giải quyết nốt dẫn) ở [[luat-hoa-am-bon-be]]. Vài "dấu vân tay" được các nghiên cứu nêu:
- **Nốt lướt** ở các bè, nhất là bè giữa; một phân tích bài "Ach Gott, vom Himmel sieh' darein" chỉ ra nốt lướt ở bè ngoài và nốt thêu ở bè trong — xem [[not-ngoai-hop-am]].
- **Nốt 7 lướt** trên hợp âm át ở kết rất thường gặp (JMTP).

**Bài tập** (thư viện soạn): soprano và bass đã cho, hãy điền alto và tenor, rồi so với lời giải.
::grand B4/G2 C5/C3 A4/D3 B4/G2 | Bài tập: soprano Si – Đô – La – Si, bass Sol – Đô – Rê – Sol (Sol trưởng: I – IV – V – I)
::grand G4+B4/G2+D4=I G4+C5/C3+E4=IV F#4+A4/D3+D4=V G4+B4/G2+D4=I | Một lời giải: alto Sol – Sol – Fa♯ – Sol, tenor Rê – Mi – Rê – Rê. Bè trên đi xuống khi bass đi lên từ IV sang V (chuyển động ngược); nốt dẫn Fa♯ ở alto lên Sol

## Kho chorale trong nghiên cứu
| Nghiên cứu | Nội dung |
|---|---|
| de Clercq (2013, 2014) | Quy tắc kết ở fermata, như trên |
| Rohrmeier & Cross (ICMPC, Sapporo 2008) | Tính chất thống kê của hoà âm [[dieu-tinh|điệu tính]] trong chorale Bach |
| Tymoczko & Newman | Mô hình Markov ẩn gán nhãn 371 chorale, khớp ít nhất 85% với phân tích chuyên gia *(theo tóm tắt kết quả tìm kiếm)* |
| **DeepBach** (Hadjeres & Pachet, ICML 2017) | Dùng kho chorale của thư viện music21: 352 bài dùng được, nhân lên 2.503 bằng [[dich-giong|dịch giọng]]; sinh bè bằng lấy mẫu kiểu Gibbs; bài nghe thử với hơn 1.600 người |
Đây là vì sao 371 chorale vừa là sách bài tập hoà âm vừa là **dữ liệu chuẩn** của [[am-nhac-hoc-tinh-toan]].

## Liên hệ
- Hoà âm chorale khác hoà âm đệm bình ca: chorale dùng kết át – chủ và nốt dẫn, đệm bình ca theo Niedermeyer thì tránh — so sánh với [[dem-organ-cho-binh-ca]].
- Chorale trong tay organist: [[chorale-va-chorale-prelude]], [[dem-hat-cong-doan-tren-organ]].
`,
  },
]
