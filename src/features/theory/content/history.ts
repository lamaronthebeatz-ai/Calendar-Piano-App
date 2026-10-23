import type { Article } from '../wiki'

/**
 * Âm nhạc học lịch sử: nguồn, ký âm, in ấn, thiết chế, tiếp nhận, phương pháp. Nguồn ghi trong `refs`.
 * Những gì chưa kiểm chứng được ghi rõ trong bài.
 */
export const history: Article[] = [
  {
    slug: 'lich-su-ky-am',
    title: 'Cổ tự học âm nhạc: lịch sử ký âm phương Tây',
    category: 'musicology',
    also: ['basics'],
    aliases: ['cổ tự học âm nhạc', 'musical paleography', 'lịch sử ký âm', 'history of notation', 'ký âm neume', 'ký âm định lượng', 'mensural notation', 'Franco xứ Köln', 'prolatio', 'tablature', 'Guido xứ Arezzo'],
    summary: 'Ký âm phương Tây không sinh ra hoàn chỉnh: từ neume thế kỷ 9 chỉ hướng giai điệu, qua khuông nhạc của Guido (khoảng 1025), tiết tấu theo điệu thức Notre-Dame, ký âm định lượng của Franco và Ars nova, nốt trắng thế kỷ 15, tablature, đến vạch nhịp đều đặn giữa thế kỷ 17. Đọc nguồn cũ cần biết hệ thống của chính thời ấy.',
    wiki: 'Mensural_notation',
    refs: [
      ['Wikipedia — Musica enchiriadis', 'https://en.wikipedia.org/wiki/Musica_enchiriadis'],
      ['Wikipedia — Daseian notation', 'https://en.wikipedia.org/wiki/Daseian_notation'],
      ['Đại học Basel — From Ink to Sound: Glossary (PDF)', 'https://tales.nmc.unibas.ch/media/from-ink-to-sound/Glossary.pdf'],
      ['Wikipedia — Guido of Arezzo', 'https://en.wikipedia.org/wiki/Guido_of_Arezzo'],
      ['Wikipedia — Johannes de Garlandia (music theorist)', 'https://en.wikipedia.org/wiki/Johannes_de_Garlandia_(music_theorist)'],
      ['Wikipedia — Ars cantus mensurabilis', 'https://en.wikipedia.org/wiki/Ars_cantus_mensurabilis'],
      ['Wikipedia — Ars nova', 'https://en.wikipedia.org/wiki/Ars_nova'],
      ['Fuller (1986) — A Phantom Treatise of the Fourteenth Century? The Ars Nova (PDF)', 'https://examenapium.it/meri/fauv/Fuller1986.pdf'],
      ['Britannica — Mensural notation', 'https://www.britannica.com/art/mensural-notation'],
      ['Wikipedia — Prolation', 'https://en.wikipedia.org/wiki/Prolation'],
      ['Wikipedia — Chantilly Codex', 'https://en.wikipedia.org/wiki/Chantilly_Codex'],
      ['Ohio State — Graeme Boone, The progress of white notation', 'https://artsandsciences.osu.edu/events/graeme-boone-progress-white-notation-ink-color-ideology'],
      ['Wikipedia — Robertsbridge Codex', 'https://en.wikipedia.org/wiki/Robertsbridge_Codex'],
      ['Wikipedia — Organ tablature', 'https://en.wikipedia.org/wiki/Organ_tablature'],
      ['Wikipedia — Partbook', 'https://en.wikipedia.org/wiki/Partbook'],
      ['Wikipedia — Bar (music)', 'https://en.wikipedia.org/wiki/Bar_(music)'],
      ['Vatican — Pius X, motu proprio "Col nostro" (25/4/1904)', 'https://www.vatican.va/content/pius-x/it/motu_proprio/documents/hf_p-x_motu-proprio_19040425_libri-liturgici-gregoriani.html'],
    ],
    body: `
**Cổ tự học âm nhạc** (*musical paleography*) là việc đọc và [[phuong-phap-su-hoc-am-nhac|xác định niên đại]] các hệ thống [[ky-am|ký âm]] cũ. Adler (1885) đặt nó đứng đầu [[am-nhac-hoc-lich-su|nhánh lịch sử]], vì mọi nghiên cứu về âm nhạc trước năm 1600 đều bắt đầu từ câu hỏi: **dấu hiệu trên trang giấy này nghĩa là gì?** Ký âm hiện đại ([[not-nhac]], [[khuong-nhac]], [[truong-do]]) là điểm cuối của một quá trình dài gần một nghìn năm.

::timeline 850-1000=Neume 1000-1200=Neume_có_cao_độ 1170-1250=Điệu_thức_tiết_tấu 1260-1430=Định_lượng_đen 1430-1600=Định_lượng_trắng 1600-1700=Vạch_nhịp_đều 1026=Micrologus 1240=De_mensurabili 1322=Ars_nova 1501=Odhecaton | Các giai đoạn chính của ký âm (mốc năm là ước lượng; các hệ thống chồng lên nhau)

## 1. Neume: nhớ giai điệu, không ghi giai điệu
- Các bản chép tay hoàn chỉnh sớm nhất có **[[ky-am-binh-ca-gregorian|neume]]** (dấu ghi đặt trên lời ca) thuộc **thế kỷ 9**; mảnh vỡ có thể từ thế kỷ 8.
- Neume ban đầu **không cho biết [[quang|quãng]] chính xác** (gọi là *không định [[cao-do|cao độ]]* — adiastematic), chỉ gợi hướng đi lên, xuống của một [[giai-dieu|giai điệu]] **người hát đã thuộc**. Ký âm lúc đầu là công cụ nhắc nhớ cho [[thanh-ca-gregorian|thánh ca]] truyền khẩu.
- Khoảng năm 1000, các bản chép ở Ý đã đặt neume theo độ cao trên trang (*định cao độ* — diastematic). Từ thế kỷ 12 xuất hiện **ký âm vuông** (*square notation*), vẫn dùng trong sách thánh ca Công giáo đến nay.
- Một nhánh riêng: chuyên luận khuyết danh *Musica enchiriadis* (thế kỷ 9) dùng **ký âm daseia** trên một lưới giống khuông nhạc; các ví dụ trong đó là **[[doi-am|phức điệu]] ghi chép sớm nhất còn biết** ([[organum]]). Hệ ký âm này hầu như không được dùng ngoài các chuyên luận.

## 2. Guido xứ Arezzo: khuông nhạc và tên nốt
- Chuyên luận *Micrologus* của Guido, theo nghiên cứu gần đây, viết năm **1025 hoặc 1026** tại Arezzo. Guido được xem là người phát triển **khuông nhạc**: các dòng kẻ cùng chữ cái làm [[khoa-nhac|khoá]], nhờ đó người hát đọc được giai điệu **chưa từng nghe**.
- Ông dùng bài thánh ca *Ut queant laxis* để dạy: sáu câu đầu bắt đầu lần lượt cao dần một bậc, cho ra các âm tiết **ut – re – mi – fa – sol – la**. Guido **không viết** bài thánh ca này (lời có trong một bản chép khoảng năm 800). Âm tiết "si" được thêm về sau. Xem [[xuong-am]].
- "Bàn tay Guido" chỉ có ở dạng sơ khai trong chính tác phẩm của Guido; hình bàn tay đầy đủ là của đời sau.

## 3. Notre-Dame: tiết tấu theo khuôn
Phức điệu Notre-Dame ([[leonin|Léonin]], [[perotin|Pérotin]] — xem [[organum]]) cần ghi **[[tiet-tau|tiết tấu]]**. Giải pháp là sáu **[[dieu-thuc|điệu thức]] tiết tấu** (*rhythmic modes*), tương ứng các nhịp thơ (dài – ngắn, ngắn – dài…). Trường độ của một nốt **không nằm ở hình nốt**, mà suy ra từ cách các nốt được nối thành nhóm (*ligature*). Chuyên luận *De mensurabili musica* mô tả hệ thống này. Trước đây sách gán nó cho Johannes de Garlandia (khoảng 1250); nghiên cứu từ thập niên 1980 cho rằng đây là văn bản khuyết danh **khoảng 1240**, được Garlandia biên tập lại về sau.

## 4. Ký âm định lượng: hình nốt mang trường độ
- **Franco xứ Köln**, *Ars cantus mensurabilis* (niên đại tranh cãi, khoảng **1250 – 1280**): lần đầu đề xuất **mỗi hình nốt tự mang trường độ**, không phụ thuộc ngữ cảnh. Đây là nền móng của **ký âm định lượng** (*mensural notation*), có ảnh hưởng suốt hơn hai thế kỷ.
- **[[motet|Ars nova]]** (Pháp, đầu thế kỷ 14): chuyên luận *Ars nova* gắn với **[[philippe-de-vitry|Philippe de Vitry]]** (thường ghi khoảng 1322; cả niên đại lẫn việc đó có phải một tác phẩm thống nhất hay không đều bị tranh luận) và *Ars novae musicae* của **Johannes de Muris** (khoảng 1319 – 1321).
- Ba tầng chia trường độ, mỗi tầng chia **2 (không hoàn hảo)** hoặc **3 (hoàn hảo)**:

| Tầng | Chia nốt nào | Thành |
|---|---|---|
| *modus* | longa | 2 hoặc 3 brevis |
| *tempus* | brevis | 2 hoặc 3 semibrevis |
| *prolatio* | semibrevis | 2 hoặc 3 minima |

- Bốn tổ hợp *tempus* × *prolatio* do Vitry xác lập tương đương gần đúng với các [[so-chi-nhip|số chỉ nhịp]] hiện đại 9/8, 3/4, 6/8 và 2/4. Đó là gốc lịch sử của sự phân biệt [[so-chi-nhip|nhịp đơn và nhịp ghép]].
- **Nốt đỏ** (*coloratio*): đổi màu mực để đổi trường độ, chẳng hạn biến nốt "hoàn hảo" (chia 3) thành "không hoàn hảo" — một kiểu [[hemiola]] trên giấy.
- **Ars subtilior** (cuối thế kỷ 14, nam Pháp, Aragon, Síp): ký âm phức tạp đến cực độ. Nguồn chính là *Codex Chantilly*; bản *Belle, bonne, sage* của [[baude-cordier|Baude Cordier]] được chép thành **hình trái tim**. Xem [[thoi-ky-trung-co]].

::wiki Belle,_bonne,_sage | Baude Cordier, *Belle, bonne, sage* — bản chép hình trái tim trong Codex Chantilly (cuối thế kỷ 14)

## 5. Nốt trắng, tablature và cách trình bày trang
- **Ký âm định lượng trắng**: từ khoảng đầu đến giữa thế kỷ 15, các nốt lớn được vẽ **rỗng** (trắng), nốt đen chỉ còn cho trường độ nhỏ. Lời giải thích hay gặp — giấy thay giấy da, khó giữ nhiều mực — **chỉ là giả thuyết**. Đây là tổ tiên trực tiếp của nốt tròn, nốt trắng ngày nay; vì thế "nốt tròn" (*semibreve*) mang tên "nửa nốt ngắn" ([[truong-do]]).
- **Tablature** ghi **thế bấm** thay vì cao độ. Nhạc cho phím sớm nhất còn lại, *Codex Robertsbridge* (khoảng 1360, ở Anh), được viết bằng tablature. *Buxheim Orgelbuch* (thập niên 1460) dùng tablature [[organ-ong|organ]] Đức với chữ cái, không khuông nhạc. Tablature [[nhac-khi-phuc-hung|đàn lute]] được Petrucci in từ năm 1507 ([[lich-su-in-an-am-nhac]]).
- **Cách trình bày**: sách hợp xướng (*choirbook*) đặt mọi bè trên cùng một mặt sách mở; **sách bè** (*partbook*) in mỗi bè một quyển, rẻ hơn. **Tổng phổ** — các bè chồng lên nhau — có từ organum và nhạc phím, nhưng hiếm trong nhạc in thế kỷ 16.

## 6. Vạch nhịp và ký âm hiện đại
Vạch nhịp xuất hiện trước tiên trong nhạc phím và vihuela thế kỷ 15 – 16, chưa đều đặn. Trong nhạc hoà tấu, vạch nhịp có từ cuối thế kỷ 16; đến **giữa thế kỷ 17**, các ô nhịp dài bằng nhau đi cùng số chỉ nhịp mới thành chuẩn. Nhạc [[thoi-ky-phuc-hung|Phục hưng]] trong [[an-ban-urtext|ấn bản]] hiện đại vì thế thường có **vạch nhịp do người biên tập thêm**, đôi khi chỉ kẻ giữa các khuông (*Mensurstrich*) để không chia cắt câu hát.

## 7. Phục hồi ký âm cũ: Solesmes và ấn bản Vatican
Thế kỷ 19, các tu sĩ dòng Biển Đức ở Solesmes nghiên cứu bản chép cổ để phục hồi thánh ca. Giáo hoàng Piô X ban *[[sach-hat-va-van-kien-binh-ca|Tra le sollecitudini]]* (22/11/1903) về [[am-nhac-nha-tho|thánh nhạc]]; motu proprio *Col nostro* (25/4/1904) ra lệnh soạn ấn bản Vatican; sách *Graduale Romanum* ra năm 1908 và được sửa năm 1974. Xem [[thanh-ca-gregorian]].

## Đọc một nguồn cũ: ba câu hỏi
*(Gợi ý của thư viện.)*
1. Hệ thống nào? Neume, điệu thức tiết tấu, định lượng đen hay trắng, tablature?
2. Đơn vị đếm là gì, chia 2 hay chia 3? Các phép tính trong bảng trên áp dụng ra sao?
3. Ấn bản hiện đại đã **thêm gì** — vạch nhịp, [[dau-hoa|dấu hoá]] (*musica ficta*), lời? Xem [[van-ban-hoc-am-nhac]].
`,
  },
  {
    slug: 'lich-su-in-an-am-nhac',
    title: 'Lịch sử in ấn và xuất bản âm nhạc',
    category: 'musicology',
    aliases: ['in ấn âm nhạc', 'music printing', 'xuất bản âm nhạc', 'music publishing', 'Petrucci', 'Odhecaton', 'Attaingnant', 'bản khắc', 'lithography', 'bản quyền âm nhạc', 'Bach v Longman'],
    summary: 'Từ bản in Missale năm 1476 và tuyển tập Odhecaton của Petrucci (1501) đến in một lần (Attaingnant, 1528), khắc bản đồng (1586), cải tiến của Breitkopf (thập niên 1750), in thạch bản (1796) và vụ kiện bản quyền Bach v Longman (1777) — kỹ thuật in đã quyết định âm nhạc nào được lưu hành và được nhớ.',
    wiki: 'Music_engraving',
    refs: [
      ['Wikipedia — Ottaviano Petrucci', 'https://en.wikipedia.org/wiki/Ottaviano_Petrucci'],
      ['Grove (1900) — Petrucci, Ottaviano dei (Wikisource)', 'https://en.wikisource.org/wiki/A_Dictionary_of_Music_and_Musicians/Petrucci,_Ottaviano_dei'],
      ['History of Information — Petrucci', 'https://www.historyofinformation.com/detail.php?id=1420'],
      ['Wikipedia — Pierre Attaingnant', 'https://en.wikipedia.org/wiki/Pierre_Attaingnant'],
      ['RISM — Music history\'s earliest engraved notes: Simone Verovio', 'https://rism.info/in_the_news/2019/07/22/music-historys-earliest-engraved-notes-simone.html'],
      ['Wikipedia — John Walsh (printer)', 'https://en.wikipedia.org/wiki/John_Walsh_(printer)'],
      ['Wikipedia — Johann Gottlob Immanuel Breitkopf', 'https://en.wikipedia.org/wiki/Johann_Gottlob_Immanuel_Breitkopf'],
      ['Wikipedia — Alois Senefelder', 'https://en.wikipedia.org/wiki/Alois_Senefelder'],
      ['Wikipedia — Bach v Longman', 'https://en.wikipedia.org/wiki/Bach_v_Longman'],
      ['Primary Sources on Copyright — Bach v. Longman (1777), commentary', 'https://www.copyrighthistory.org/cam/commentary/uk_1777/uk_1777_com_1072007112559.html'],
      ['Narodowy Instytut Fryderyka Chopina — first editions', 'https://www.chopin.pl/score_publications.en.html'],
    ],
    body: `
Trước khi có máy in, mỗi bản nhạc là một **bản chép tay**: đắt, ít, dễ sai. Kỹ thuật in quyết định **âm nhạc nào đi xa được**, **bản nào được coi là "chuẩn"**, và về sau là **ai được trả tiền**. Với nhà nghiên cứu, lịch sử in còn là công cụ [[phuong-phap-su-hoc-am-nhac|xác định niên đại]] và độ tin cậy của một nguồn (xem [[van-ban-hoc-am-nhac]]).

::timeline 1476=Missale_(Han) 1501=Odhecaton 1528=In_một_lần 1586=Khắc_bản_đồng 1695=Walsh 1755=Breitkopf 1777=Bach_v_Longman 1796=Thạch_bản 1837=Chopin_in_ba_nước | Các mốc in ấn âm nhạc trong bài

## In bằng chữ rời: Petrucci và Attaingnant
- **Không phải Petrucci in nhạc đầu tiên:** cuốn *Missale Romanum* của Ulrich Han (Rome, 1476) đã in thánh ca bằng chữ rời.
- **Ottaviano Petrucci** được Thượng viện Venezia cấp **đặc quyền in nhạc** năm 1498 (thường ghi 25/5/1498). Tuyển tập *Harmonice Musices Odhecaton A* ra ngày **15/5/1501**, gồm 96 bài, phần lớn là chanson 3 – 4 bè ([[ca-khuc-the-tuc-trung-co]]). Kỹ thuật **in nhiều lượt**: in dòng kẻ, rồi in nốt, rồi in lời và chữ hoa. Đẹp, nhưng chậm và khó căn khớp.
- **Pierre Attaingnant** (Paris, 1528) dùng **in một lượt**: mỗi con chữ gồm một nốt cùng một đoạn [[khuong-nhac|khuông]]. Britannica cho rằng cách này giảm một nửa thời gian và công sức. Một số tài liệu cho rằng John Rastell ở London đã làm vậy sớm hơn, khoảng 1520. In một lượt khiến nhạc in rẻ đi và làm nở rộ thị trường chanson.
- Petrucci còn in **tablature [[dan-lute|lute]]** đầu tiên (1507) — xem [[lich-su-ky-am]].

## Khắc bản: đường nét tự do
- **Simone Verovio** (Rome, 1586), tuyển tập *Diletto spirituale*, là một trong những bản nhạc in sớm nhất từ **bản đồng khắc**. Khắc cho phép in những gì chữ rời khó làm: [[hop-am-ba|hợp âm]] dày, nhiều bè trên một khuông, đường nối dài — rất hợp với nhạc phím.
- Ở London, **John Walsh** (xuất bản từ năm 1695) dùng bản **thiếc đập dấu** (*punched pewter*), nhanh và rẻ. Con ông về sau là nhà in độc quyền nhạc [[george-frideric-handel|Handel]] từ 1739. Hãng cũng in lậu rất nhiều — thời đó chưa có luật bản quyền cho âm nhạc.

## Breitkopf và thạch bản
- **Johann Gottlob Immanuel Breitkopf** (Leipzig) cải tiến chữ rời in nhạc vào khoảng **1754 – 1755** (từ điển [[nguon-tra-cuu-am-nhac-hoc|Grove]] ghi sớm hơn, khoảng 1750). Công trình lớn đầu tiên là tổng phổ [[opera|opera]] *Il trionfo della fedeltà* (1756). Hãng Breitkopf & Härtel về sau xuất bản [[joseph-haydn|Haydn]], [[wolfgang-amadeus-mozart|Mozart]], [[ludwig-van-beethoven|Beethoven]], và năm 1798 lập tạp chí *Allgemeine musikalische Zeitung* ([[doi-song-am-nhac-va-thiet-che]]).
- **Alois Senefelder** phát minh **in thạch bản** (*lithography*) vào thập niên 1790; năm 1796 ông hợp tác với nhà soạn nhạc Franz Gleißner để in nhạc bằng kỹ thuật này. Thạch bản rẻ và nhanh, góp phần tạo ra thị trường nhạc piano gia đình thế kỷ 19 ([[tieu-pham-piano]]).

## Bản quyền: âm nhạc là "văn bản"
Đạo luật Anne (Anh, **1710**) bảo vệ sách nhưng không nói rõ về âm nhạc. Vụ **Bach v Longman** (1777, Toà King's Bench, chánh án Lord Mansfield): [[johann-christian-bach|Johann Christian Bach]] — con trai út của J. S. [[johann-sebastian-bach|Bach]] — cùng Carl Friedrich Abel kiện nhà xuất bản Longman & Lukey in nhạc của họ khi chưa được phép. Toà xác định **âm nhạc là "văn bản"** được luật bảo vệ. Đây là tiền lệ nền tảng của bản quyền âm nhạc.

## Một tác phẩm, ba "bản gốc": trường hợp Chopin
Vì luật bản quyền giữa các nước chưa rõ ràng, [[frederic-chopin|Chopin]] thường cho in **cùng lúc ở Pháp, Đức (hoặc Áo) và Anh**. Ví dụ Scherzo Op. 31 ra ở Breitkopf (Leipzig) và Wessel (London) tháng 11/1837, ở Schlesinger (Paris) tháng 12/1837. Ba bản in đầu thường **khác nhau ở chi tiết** (nốt, dấu, [[ngon-bam|ngón bấm]]), vì mỗi bản được khắc từ một bản chép tay khác nhau và được sửa ở những thời điểm khác nhau. Vì vậy biên tập Chopin là bài toán văn bản học khó — xem [[van-ban-hoc-am-nhac]], [[an-ban-urtext]].

## Ý nghĩa cho người học đàn
Bản nhạc trên giá đàn hôm nay là kết quả của chuỗi **chép tay → khắc in → biên tập**. Hỏi "bản này in từ nguồn nào?" là bước đầu tiên của việc [[doc-not-nhanh|đọc nhạc]] một cách có trách nhiệm.
`,
  },
  {
    slug: 'doi-song-am-nhac-va-thiet-che',
    title: 'Bảo trợ, thiết chế và đời sống âm nhạc',
    category: 'musicology',
    aliases: ['bảo trợ âm nhạc', 'patronage', 'đời sống âm nhạc', 'thiết chế âm nhạc', 'hoà nhạc công cộng', 'public concert', 'Concert Spirituel', 'Gewandhaus', 'nhạc viện Paris', 'Esterházy', 'piano recital', 'buổi độc tấu'],
    summary: 'Âm nhạc luôn có người trả tiền: nhà thờ, triều đình, rồi công chúng mua vé. Bài này theo dõi sự chuyển dịch đó qua các mốc: Haydn ở cung Esterházy (1761 – 1790), nhà hát opera công cộng đầu tiên (Venezia, 1637), hoà nhạc bán vé ở London (1672), Concert Spirituel (1725), Gewandhaus (1781), Nhạc viện Paris (1795), các hội nhạc, tạp chí phê bình và buổi độc tấu piano.',
    wiki: 'Patronage',
    refs: [
      ['Wikipedia — Gregor Werner', 'https://en.wikipedia.org/wiki/Gregor_Werner'],
      ['Cambridge University Press — excerpt on Haydn\'s 1761 contract (PDF)', 'https://assets.cambridge.org/97810093/37144/excerpt/9781009337144_excerpt.pdf'],
      ['Wikipedia — Teatro San Cassiano', 'https://en.wikipedia.org/wiki/Teatro_San_Cassiano'],
      ['Cambridge Companion to Seventeenth-Century Opera — Opera for a paying public: Italy c.1637–c.1700', 'https://www.cambridge.org/core/books/cambridge-companion-to-seventeenthcentury-opera/opera-for-a-paying-public-italy-c-1637c-1700/14208E41A8D6F019830093DD99F97299'],
      ['Wikipedia — John Banister (composer)', 'https://en.wikipedia.org/wiki/John_Banister_(composer)'],
      ['Wikipedia — Concert Spirituel', 'https://en.wikipedia.org/wiki/Concert_Spirituel'],
      ['Gewandhausorchester — History', 'https://gewandhausorchester.de/en/orchester/history'],
      ['Wikipedia — Conservatoire de Paris', 'https://en.wikipedia.org/wiki/Conservatoire_de_Paris'],
      ['RIPM — Allgemeine musikalische Zeitung, introduction (PDF)', 'https://ripm.org/pdf/Introductions/ALZintroEnglish.pdf'],
      ['RIPM — Neue Zeitschrift für Musik 1834–1844, introduction (PDF)', 'https://ripm.org/assets/files/introductions/NZM1834-1844introEnglish.pdf'],
      ['Musikverein Wien — Geschichte', 'https://musikverein.at/en/archiv/geschichte/'],
      ['Wikipedia — Royal Philharmonic Society', 'https://en.wikipedia.org/wiki/Royal_Philharmonic_Society'],
      ['Wiener Philharmoniker — Early history', 'https://www.wienerphilharmoniker.at/en/orchestra/history/early-history'],
      ['BBC Music Magazine — Who invented the piano recital?', 'https://www.classical-music.com/features/composers/who-invented-the-piano-recital'],
    ],
    body: `
Một câu hỏi cơ bản của [[am-nhac-hoc-lich-su|âm nhạc học lịch sử]]: **ai trả tiền cho âm nhạc, và điều đó định hình âm nhạc ra sao?** Một bản [[thanh-le-va-requiem|thánh lễ]], một bản [[giao-huong|giao hưởng]] cho dàn nhạc của một hoàng thân, và một bản [[tieu-pham-piano|tiểu phẩm piano]] bán cho gia đình trung lưu được viết cho ba "thị trường" khác nhau. Xem thêm [[xa-hoi-hoc-am-nhac]].

::timeline 1637=Opera_công_cộng 1672=Banister 1725=Concert_Spirituel 1761=Haydn–Esterházy 1781=Gewandhaus 1795=Nhạc_viện_Paris 1798=AmZ 1813=Philharmonic_Society 1834=NZfM 1840=Liszt_recital 1842=Wiener_Philharmoniker | Từ triều đình đến công chúng: các mốc trong bài

## Ba người bảo trợ lớn
| Người trả tiền | Thời kỳ nổi bật | Âm nhạc tiêu biểu |
|---|---|---|
| **Nhà thờ** | [[thoi-ky-trung-co|Trung cổ]] – [[thoi-ky-baroque|Baroque]] | [[thanh-ca-gregorian]], [[motet]], [[thanh-le-va-requiem|thánh lễ]], [[oratorio-cantata-passion|cantata]] |
| **Triều đình, quý tộc** | [[thoi-ky-phuc-hung|Phục hưng]] – Cổ điển | [[madrigal]], [[opera]] cung đình, [[to-khuc-baroque|vũ khúc]], giao hưởng của Haydn |
| **Công chúng** (vé, bản in, hội viên) | từ thế kỷ 17, chiếm ưu thế ở thế kỷ 19 | opera công cộng, hoà nhạc giao hưởng, nhạc piano gia đình, buổi độc tấu |

Các vai trò này **chồng lên nhau**, không thay thế nhau gọn gàng. J. S. [[johann-sebastian-bach|Bach]] vừa làm cho nhà thờ vừa làm cho hội đồng thành phố Leipzig; Haydn đi London khi đã nổi tiếng nhờ phục vụ triều đình.

## Triều đình: Haydn ở cung Esterházy
Ngày **1/5/1761**, Haydn ký hợp đồng với hoàng thân Paul Anton Esterházy làm **phó nhạc trưởng** (Gregor Werner vẫn phụ trách nhạc nhà thờ). Ông lên nhạc trưởng năm 1766 sau khi Werner mất. Bản hợp đồng quy định cả đồng phục, giờ có mặt, và việc nhạc ông viết thuộc về hoàng thân. Năm 1790 hoàng thân Nikolaus mất, người kế vị giải tán phần lớn dàn nhạc, Haydn được hưởng lương hưu và nhận lời mời sang London của Salomon — tức là bước vào **thị trường công chúng**. Xem [[joseph-haydn]].

## Công chúng mua vé
- **1637 — Teatro San Cassiano** (Venezia), do dòng họ Tron xây, là **nhà hát opera đầu tiên bán vé cho công chúng**, mở màn bằng *L'Andromeda* (nhạc Francesco Manelli, lời Benedetto Ferrari). Từ đó [[opera]] trở thành một ngành kinh doanh.
- **1672 — John Banister** quảng cáo trên *London Gazette* (30/12/1672) các buổi hoà nhạc tại nhà ông ở Whitefriars, vé một shilling. Đây được coi là **hoà nhạc thương mại công cộng** đầu tiên ở London.
- **1725 — Concert Spirituel** (Paris), do Anne Danican Philidor lập; buổi đầu tiên ngày 18/3/1725 tại cung Tuileries, vào những ngày nhà hát Opéra đóng cửa (mùa Chay, ngày lễ). Hoạt động đến khoảng 1790 (có nguồn ghi 1791). Đây là mô hình hoà nhạc định kỳ đầu tiên có ảnh hưởng ở châu Âu.
- **1781 — Gewandhaus Leipzig**: phòng hoà nhạc trong toà nhà của hội buôn vải khai trương ngày 25/11/1781; dàn nhạc có gốc từ nhóm "Großes Concert" (1743).

## Thiết chế thế kỷ 19
| Năm | Thiết chế | Ý nghĩa |
|---|---|---|
| 1795 | **Nhạc viện Paris** (luật ngày 3/8/1795) | Mô hình đào tạo nhạc công do nhà nước tổ chức; nhiều nước về sau làm theo |
| 1798 | ***Allgemeine musikalische Zeitung*** (Breitkopf & Härtel, Leipzig, đến 1848) | Tạp chí phê bình âm nhạc có ảnh hưởng — nơi ra đời các bài phê bình về [[ludwig-van-beethoven|Beethoven]] |
| 1812 | **Gesellschaft der Musikfreunde** (Vienna) | Hội của những người yêu nhạc: hoà nhạc, thư viện, trường nhạc |
| 1813 | **Philharmonic Society of London** (buổi đầu 8/3/1813) | Hội hoà nhạc giao hưởng chuyên nghiệp |
| 1834 | ***Neue Zeitschrift für Musik*** ([[robert-schumann|Schumann]] cùng các bạn lập, số đầu 3/4/1834) | Phê bình do chính nhà soạn nhạc viết — Schumann giới thiệu [[frederic-chopin|Chopin]], [[johannes-brahms|Brahms]] |
| 1842 | **Wiener Philharmoniker** (buổi hoà nhạc 28/3/1842 do Otto Nicolai chỉ huy) | Dàn nhạc tự quản của các nhạc công nhà hát |

## Buổi độc tấu piano
Ngày **9/6/1840** tại Hanover Square Rooms, London, các buổi chơi của **Liszt** được quảng cáo là "*Liszt's Pianoforte Recitals*". Việc gọi đây là "buổi recital đầu tiên" chủ yếu dựa vào **cái tên**; trước đó ở Rome (1839) Liszt đã có những buổi chơi một mình mà ông gọi là "độc thoại âm nhạc". Từ đó hình thức một nghệ sĩ chơi cả chương trình dần thành chuẩn. Xem [[franz-liszt]], [[nghe-si-piano-the-ky-19]].

## Liên hệ
- Âm nhạc gắn với **in ấn và thị trường bản nhạc**: [[lich-su-in-an-am-nhac]].
- Hoà nhạc công cộng và tạp chí tạo ra **kinh điển** — những tác phẩm được diễn đi diễn lại: [[lich-su-tiep-nhan-am-nhac]].
- Bản thu âm là "thiết chế" của [[thoi-ky-the-ky-20|thế kỷ 20]]: [[lich-su-thu-am]].
`,
  },
  {
    slug: 'phong-trao-bieu-dien-lich-su',
    title: 'Phong trào biểu diễn theo lịch sử (HIP)',
    category: 'musicology',
    also: ['expression'],
    aliases: ['biểu diễn theo lịch sử', 'historically informed performance', 'HIP', 'early music', 'nhạc cổ', 'nhạc cụ thời kỳ', 'period instruments', 'A=415', 'A=430', 'Harnoncourt', 'Dolmetsch', 'Landowska'],
    summary: 'Phong trào biểu diễn theo lịch sử tìm cách chơi nhạc cũ dựa trên chứng cứ của thời đó: nhạc cụ, cao độ, hệ thống chỉnh âm, cách diễn tấu. Từ Dolmetsch (1915) và Landowska (1912) đến Harnoncourt (1953), tạp chí Early Music (1973) và cuộc tranh luận về "tính xác thực".',
    wiki: 'Historically_informed_performance',
    refs: [
      ['Wikipedia — Historically informed performance', 'https://en.wikipedia.org/wiki/Historically_informed_performance'],
      ['Wikipedia — Arnold Dolmetsch', 'https://en.wikipedia.org/wiki/Arnold_Dolmetsch'],
      ['Gramophone — Wanda Landowska: an introduction', 'https://gramophone.co.uk/articles/wanda-landowska-an-introduction-to-the-life-and-career-of-the-great-harpsichordist'],
      ['UdK Berlin — Wanda Landowska (chronicle)', 'https://www.udk-berlin.de/en/university/college-of-music/the-college/chronicle/wanda-landowska/'],
      ['Store norske leksikon — Concentus Musicus Wien', 'https://snl.no/Concentus_Musicus_Wien'],
      ['Wikipedia — Gustav Leonhardt', 'https://en.wikipedia.org/wiki/Gustav_Leonhardt'],
      ['Oxford Academic — Early Music: About the journal', 'https://academic.oup.com/em/pages/about'],
      ['Wikipedia — A440 (pitch standard)', 'https://en.wikipedia.org/wiki/A440_(pitch_standard)'],
      ['Wikipedia — Quarter-comma meantone', 'https://en.wikipedia.org/wiki/Quarter-comma_meantone'],
      ['Wikipedia — Werckmeister temperament', 'https://en.wikipedia.org/wiki/Werckmeister_temperament'],
      ['Cornell University — Malcolm Bilson', 'https://music.cornell.edu/malcolm-bilson'],
    ],
    body: `
**Biểu diễn theo lịch sử** (*historically informed performance*, viết tắt HIP; thường gọi là phong trào "nhạc cổ" — *early music*) là cách chơi nhạc của quá khứ **dựa trên chứng cứ** của chính thời đó: chuyên luận, nhạc cụ còn lại, lời kể, [[ky-am|ký âm]]. Đây là chỗ gặp nhau giữa [[am-nhac-hoc-lich-su|nghiên cứu lịch sử]] và [[khoa-hoc-bieu-dien|thực hành biểu diễn]]. Phần thực hành trên piano hiện đại ở [[phong-cach-dien-tau]]; cuộc tranh luận triết học về chữ "xác thực" ở [[tinh-xac-thuc-bieu-dien]].

::timeline 1912=Đàn_Pleyel_của_Landowska 1915=Sách_của_Dolmetsch 1939=A=440_(London) 1953=Concentus_Musicus 1971=Cantata_Bach_trọn_bộ 1973=Tạp_chí_Early_Music 1995=Text_and_Act | Các mốc của phong trào

## Những người mở đường
- **Arnold Dolmetsch** (1858 – 1940) chế tạo lại nhạc cụ cổ và viết *The Interpretation of the Music of the XVIIth and XVIIIth Centuries* (1915), cuốn sách dựa trên **chứng cứ đương thời** — một tuyên ngôn sớm của phong trào. Ông lập Liên hoan Haslemere (Anh) năm 1925.
- **Wanda Landowska** đưa [[dan-phim-co|harpsichord]] trở lại sân khấu. Cây harpsichord "Grand Modèle de Concert" do hãng Pleyel làm cho bà được giới thiệu ở Liên hoan [[johann-sebastian-bach|Bach]] tại Breslau tháng 6/1912. Cây đàn này có khung sắt và bảy [[ban-dap|pedal]] — tức là **không giống** harpsichord thế kỷ 18. Đây là bước đầu, chưa phải bản sao lịch sử.
- **Nikolaus Harnoncourt** cùng Alice Harnoncourt lập **Concentus Musicus Wien** năm 1953, tập luyện hơn bốn năm trước buổi diễn công khai đầu tiên (tháng 5/1957).
- **Gustav Leonhardt** và Harnoncourt thu **trọn bộ [[oratorio-cantata-passion|cantata]] thánh của Bach** bằng nhạc cụ thời kỳ (1971 – 1990), bộ đầu tiên thuộc loại này.
- Tạp chí ***Early Music*** (Oxford University Press) do John M. Thomson sáng lập năm **1973**.
- Với piano: **Malcolm Bilson** góp phần phục hồi **fortepiano**, thu trọn bộ [[hinh-thuc-concerto|concerto]] piano của [[wolfgang-amadeus-mozart|Mozart]] cùng John Eliot Gardiner và English [[thoi-ky-baroque|Baroque]] Soloists. Xem [[lich-su-piano]].

## Cao độ chuẩn: "La" không phải lúc nào cũng là 440
| Mức | Nguồn gốc | Ghi chú |
|---|---|---|
| **A = 440 Hz** | Hội nghị London tháng 5/1939; ISO khuyến nghị năm 1955, thành tiêu chuẩn [[ky-hieu-cao-do-c4-helmholtz-midi|ISO 16]] năm 1975 | Chuẩn hiện đại |
| **A = 430 Hz** | Quy ước thường dùng cho nhạc thời Mozart – [[ludwig-van-beethoven|Beethoven]] trong các dàn nhạc thời kỳ | Quy ước hiện đại |
| **A = 415 Hz** | Thấp hơn 440 khoảng **một [[cung-nua-cung|nửa cung]]** bình quân; tiện cho đàn phím [[dich-giong|dịch giọng]] | **Quy ước hiện đại**, không phải một [[cao-do|cao độ]] lịch sử duy nhất |

Cao độ thực tế trong lịch sử dao động rất rộng theo nơi và thời (các nguồn nêu khoảng từ dưới 400 đến trên 460 Hz). Vì thế "415 cho Baroque" là một **thoả thuận thực hành**, không phải sự thật lịch sử.

## Hệ thống chỉnh âm
Trước [[luat-binh-quan|bình quân luật]], nhạc cụ phím thường dùng:
- **[[cac-he-thong-chinh-am|Meantone]]** (chẳng hạn meantone một phần tư comma, được Pietro Aron mô tả năm 1523): [[quang|quãng]] 3 trưởng rất trong ở các giọng gần, nhưng các giọng xa thì không dùng được.
- **Well-temperament** (chẳng hạn các hệ của Werckmeister, 1691): chơi được mọi giọng, nhưng **mỗi giọng một màu**. Đây là bối cảnh của *[[toccata-prelude-fugue|Bình quân luật]]* của Bach — xem [[phan-tich-prelude-do-truong]].

## Các câu hỏi thực hành của phong trào
| Câu hỏi | Chứng cứ | Bài liên quan |
|---|---|---|
| Nhạc cụ nào? | Nhạc cụ còn lại, tranh vẽ, hợp đồng chế tác | [[dan-phim-co]], [[nhac-khi-hoc]] |
| Biên chế bao nhiêu người? | Sổ lương, danh sách nhạc công | [[doi-song-am-nhac-va-thiet-che]] |
| Trang trí, [[ngau-hung-piano|ngẫu hứng]] thế nào? | Chuyên luận, bản có trang trí viết ra | [[ky-hieu-hoa-my]], [[cadenza]], [[bass-so]] |
| Nhịp độ, rubato? | Chuyên luận, máy đếm nhịp (từ 1815), bản thu sớm | [[nhip-do]], [[rubato]], [[lich-su-thu-am]] |
| Bản nào đáng tin? | Bản chép tay, bản in đầu | [[van-ban-hoc-am-nhac]], [[an-ban-urtext]] |

## Phê phán
Richard Taruskin (*Text and Act*, 1995) cho rằng lối chơi "xác thực" thực chất là **một phong cách hiện đại**, mang [[phan-doan-tham-my|thị hiếu]] [[thoi-ky-the-ky-20|thế kỷ 20]]. Peter Kivy (*Authenticities*, 1995) tách chữ "xác thực" thành nhiều nghĩa khác nhau. Chi tiết ở [[tinh-xac-thuc-bieu-dien]]. Ngày nay nhiều nghệ sĩ dùng chứng cứ lịch sử như **nguồn cảm hứng có hiểu biết**, không như luật cứng — kể cả trên piano hiện đại.
`,
  },
  {
    slug: 'lich-su-nganh-am-nhac-hoc',
    title: 'Sử học âm nhạc: lịch sử của ngành',
    category: 'musicology',
    aliases: ['sử học âm nhạc', 'historiography of music', 'lịch sử ngành âm nhạc học', 'Burney', 'Hawkins', 'Forkel', 'Chrysander', 'Spitta', 'Dahlhaus', 'American Musicological Society'],
    summary: 'Người ta bắt đầu viết "lịch sử âm nhạc" từ thế kỷ 18 (Martini, Hawkins, Burney, Forkel); thế kỷ 19 có các tiểu sử dựa trên nguồn (Spitta) và các bộ toàn tập; Adler lập khung của ngành năm 1885; thế kỷ 20 ngành sang Mỹ cùng làn sóng di cư, rồi được chất vấn bởi Kerman (1985), Dahlhaus (1977) và "âm nhạc học mới".',
    wiki: 'Musicology',
    refs: [
      ['Cambridge University Press — Hawkins, A General History of the Science and Practice of Music (reissue)', 'https://www.cambridge.org/core/books/general-history-of-the-science-and-practice-of-music/BCF39A7368449C573D46DCD5D2175E49'],
      ['HathiTrust — Burney, A General History of Music', 'https://catalog.hathitrust.org/Record/001977322'],
      ['Wikipedia — Johann Nikolaus Forkel', 'https://en.wikipedia.org/wiki/Johann_Nikolaus_Forkel'],
      ['Project Gutenberg — Forkel, Johann Sebastian Bach (Terry\'s English edition)', 'https://gutenberg.org/files/35041/35041-h/35041-h.html'],
      ['KBR (Thư viện Hoàng gia Bỉ) — 150 years Fétis', 'https://www.kbr.be/en/150-years-fetis/'],
      ['RIPM — Jahrbücher für musikalische Wissenschaft', 'https://ripm.org/journals/jmw'],
      ['Wikipedia — Spitta\'s Johann Sebastian Bach', 'https://en.wikipedia.org/wiki/Spitta%27s_Johann_Sebastian_Bach'],
      ['RIPM — Vierteljahrsschrift für Musikwissenschaft', 'https://ripm.org/journals/vjm'],
      ['Wikipedia — Denkmäler der Tonkunst in Österreich', 'https://en.wikipedia.org/wiki/Denkm%C3%A4ler_der_Tonkunst_in_%C3%96sterreich'],
      ['CORDIS (EU) — project on exiled musicologists', 'https://cordis.europa.eu/project/id/705104'],
      ['Wikipedia — American Musicological Society', 'https://en.wikipedia.org/wiki/American_Musicological_Society'],
      ['University of Chicago Press — Critical Inquiry 7/2 (1980)', 'https://www.journals.uchicago.edu/toc/ci/1980/7/2'],
      ['Wikipedia — Joseph Kerman', 'https://en.wikipedia.org/wiki/Joseph_Kerman'],
      ['JRMA review — Dahlhaus, Foundations of Music History (Cambridge UP, 1983)', 'https://www.cambridge.org/core/journals/journal-of-the-royal-musical-association/article/carl-dahlhaus-foundations-of-music-history-translated-by-j-b-robinson-cambridge-university-press-1983-177-pp-isbn-0-521-23281-3-hard-covers-0-521-28990-3-paperback/5B0B3A4658FBF3EDEE1355D58E443958'],
      ['Popular Music review — McClary, Feminine Endings (1991)', 'https://www.cambridge.org/core/journals/popular-music/article/feminine-endings-music-gender-and-sexuality-by-mcclarysusan-minnesota-university-of-minnesota-1991-220-pp-cosi-sexual-politics-in-mozarts-operas-by-fordcharles-manchester-manchester-university-press-1991-262-pp/EF575C67C4DC966950D0603B8A3FAE28'],
      ['UC Press — Kramer, Music as Cultural Practice, 1800–1900', 'https://www.ucpress.edu/books/music-as-cultural-practice-1800-1900/paper'],
      ['Wikipedia — Oxford History of Western Music', 'https://en.wikipedia.org/wiki/Oxford_History_of_Western_Music'],
    ],
    body: `
Âm nhạc học lịch sử cũng có lịch sử của nó. Biết ngành đã đặt câu hỏi ra sao qua từng thời kỳ giúp ta đọc sách cũ một cách có phê phán: mỗi bộ "lịch sử âm nhạc" đều mang **quan niệm của thời nó** về thế nào là âm nhạc đáng nhớ. Khung chung ở [[am-nhac-hoc-lich-su]].

::timeline 1757=Martini 1776=Hawkins,_Burney 1802=Forkel:_Bach 1835=Fétis 1873=Spitta:_Bach 1885=Adler 1934=AMS 1977=Dahlhaus 1985=Kerman 1991=McClary 2005=Taruskin | Một số mốc của sử học âm nhạc (các bộ sách nhiều tập ghi năm tập đầu)

## Thế kỷ 18: những bộ "lịch sử chung" đầu tiên
| Tác giả | Tác phẩm | Năm | Ghi chú |
|---|---|---|---|
| **Padre Martini** (Bologna) | *Storia della musica* | 3 tập: 1757, 1770, 1781 | Bỏ dở: cả ba tập chỉ bàn về [[am-nhac-co-dai|âm nhạc cổ đại]] |
| **John Hawkins** | *A General History of the Science and Practice of Music* | 5 tập, 1776 | Bị Burney lấn át, nay được đánh giá cao vì độ chính xác về nhạc thế kỷ 16 – 17 |
| **Charles Burney** | *A General History of Music* | 4 tập: 1776, 1782, 1789 | Tư liệu thu thập qua hai chuyến đi châu Âu (1770, 1772) |
| **Johann Nikolaus Forkel** | *Allgemeine Geschichte der Musik* | 2 tập: 1788, 1801 | Dừng ở thế kỷ 16 |

Năm 1802 Forkel in **cuốn tiểu sử Bach đầu tiên**, viết dựa trên thư từ với hai con trai Bach là C. P. E. và W. F. Bach, đề tặng nam tước van Swieten. Xem [[johann-sebastian-bach]].

## Thế kỷ 19: nguồn, tiểu sử và toàn tập
- **François-Joseph Fétis**, *Biographie universelle des musiciens* (Brussels, 8 tập, 1835 – 1844; bản 2: 1860 – 1865) — từ điển tiểu sử đồ sộ, nhiều chỗ sai nhưng vẫn có giá trị.
- **Friedrich Chrysander** ra *Jahrbücher für musikalische Wissenschaft* (chỉ hai tập, 1863 và 1867), đồng sáng lập Hội Händel (1856) để in toàn tập [[george-frideric-handel|Handel]] từ bản gốc. Ông tiếp tục dự án phần lớn bằng tiền riêng.
- **Philipp Spitta**, *Johann Sebastian Bach* (2 tập, 1873 và 1880) — tiểu sử Bach đầu tiên dựa trên **nghiên cứu nguồn tư liệu quy mô lớn**.
- Các **bộ toàn tập** được khởi động: Hội Bach (1850) — xem [[van-ban-hoc-am-nhac]].

## Adler và sự ra đời của ngành đại học
Năm 1884 **Guido Adler** cùng Chrysander và Spitta lập tạp chí *Vierteljahrsschrift für Musikwissenschaft* (xuất bản 1885 – 1894). Bài mở đầu số 1 vạch sơ đồ của ngành ([[am-nhac-hoc]]). Adler còn khởi xướng bộ *Denkmäler der Tonkunst in Österreich* ("Những công trình âm nhạc Áo"): đề nghị lên bộ năm 1888, hội xuất bản thành lập năm 1893 với [[am-nhac-tuyet-doi|Hanslick]] làm chủ tịch đầu tiên, tập đầu (các bản [[thanh-le-va-requiem|thánh lễ]] của Fux) ra năm 1894. Ông chủ biên *Handbuch der Musikgeschichte* (1924).

## Thế kỷ 20: sang Mỹ
- Giai đoạn 1930 – 1945, khoảng **150 nhà nghiên cứu âm nhạc** chạy khỏi chủ nghĩa phát xít (theo một dự án nghiên cứu của EU), phần lớn sang Mỹ. Ví dụ: **Alfred Einstein** (người hiệu đính danh mục [[nguon-tra-cuu-am-nhac-hoc|Köchel]] năm 1937) và **Manfred Bukofzer** cùng tới Mỹ năm 1939. Họ góp phần đưa âm nhạc học thành một ngành chuyên nghiệp trong các đại học Mỹ.
- **Hội Âm nhạc học Mỹ** (*American Musicological Society*) được lập năm **1934**.

## Chất vấn ngành: từ Kerman đến "âm nhạc học mới"
- **Carl Dahlhaus**, *Grundlagen der Musikgeschichte* (1977; bản tiếng Anh *Foundations of Music History*, 1983) bênh vực **đa nguyên phương pháp** và đặt **lịch sử tiếp nhận** vào trung tâm — xem [[lich-su-tiep-nhan-am-nhac]].
- **Joseph Kerman**: bài *How We Got into Analysis, and How to Get Out* (*Critical Inquiry*, 1980) và sách *[[am-nhac-hoc-moi|Contemplating Music]]* (Harvard, 1985) phê phán một âm nhạc học chỉ lo xác lập dữ kiện, và một ngành phân tích tách khỏi lịch sử. Ông kêu gọi một nền **phê bình** âm nhạc. Xem [[lich-su-phan-tich-am-nhac]].
- **"Âm nhạc học mới"** (*New Musicology*, cuối thập niên 1980 – 1990): Lawrence Kramer, *Music as Cultural Practice, 1800–1900* (1990); Susan McClary, *[[am-nhac-hoc-nu-quyen-va-gioi|Feminine Endings]]: Music, Gender, and Sexuality* (1991) — đọc âm nhạc qua giới, thân thể, quyền lực, văn hoá.
- **Richard [[tinh-xac-thuc-bieu-dien|Taruskin]]**, *The Oxford History of Western Music* (6 tập, 2005) — bộ lịch sử lớn gần đây, viết lại câu chuyện "nhạc phương Tây" theo hướng xã hội và tiếp nhận.

## Bài học cho người đọc
*(Nhận xét biên soạn của thư viện.)*
1. Mỗi bộ lịch sử phản ánh **câu hỏi của thời nó**: thế kỷ 18 hỏi "âm nhạc tiến bộ ra sao", thế kỷ 19 hỏi "ai là thiên tài", cuối [[thoi-ky-the-ky-20|thế kỷ 20]] hỏi "ai được kể, ai bị bỏ qua".
2. Tiểu sử và niên đại cũ có thể đã bị **nghiên cứu nguồn** về sau sửa lại — xem [[phuong-phap-su-hoc-am-nhac]].
3. Với Việt Nam, xem [[lich-su-am-nhac-viet-nam]].
`,
  },
  {
    slug: 'phuong-phap-su-hoc-am-nhac',
    title: 'Phương pháp nghiên cứu lịch sử âm nhạc',
    category: 'musicology',
    aliases: ['phương pháp sử học âm nhạc', 'phê bình nguồn', 'source criticism', 'xác định niên đại', 'watermark', 'hình mờ giấy', 'rastrology', 'nghiên cứu bản phác thảo', 'sketch studies', 'phân kỳ', 'periodization', 'âm nhạc học hình ảnh'],
    summary: 'Nhà sử học âm nhạc làm việc với nguồn: phân biệt nguồn sơ cấp và thứ cấp, xác định niên đại bằng giấy, hình mờ và dòng kẻ khuông, đọc bản phác thảo, dùng tranh ảnh làm chứng cứ, thận trọng với phân kỳ và huyền thoại tiểu sử. Mỗi phương pháp kèm một ví dụ đã làm thay đổi hiểu biết của ngành.',
    wiki: 'Historical_musicology',
    refs: [
      ['Bodleian Archives — Alan Tyson papers (Mozart: Studies of the Autograph Scores, 1987)', 'https://archives.bodleian.ox.ac.uk/repositories/2/archival_objects/205451'],
      ['Wikipedia — Alan Tyson', 'https://en.wikipedia.org/wiki/Alan_Tyson'],
      ['mdw Wien — Selenometry', 'https://www.mdw.ac.at/imi/ctmv/p_und_c/selenometry.php'],
      ['Wikipedia — Alfred Dürr', 'https://en.wikipedia.org/wiki/Alfred_D%C3%BCrr'],
      ['Wikipedia — Georg von Dadelsen', 'https://en.wikipedia.org/wiki/Georg_von_Dadelsen'],
      ['American Bach Society — Bach Notes 15', 'https://americanbachsociety.org/Newsletters/BachNotes15.14.pdf'],
      ['Penn Libraries — Johnson, Tyson & Winter, The Beethoven Sketchbooks (1985)', 'https://find.library.upenn.edu/catalog/991491943503681'],
      ['Wikipedia — Baroque music (on the term)', 'https://en.wikipedia.org/wiki/Baroque_music'],
      ['SUB Hamburg — Heiligenstädter Testament (PDF)', 'https://www.sub.uni-hamburg.de/fileadmin/redaktion/Presse_und_Oeffentlichkeitsarbeit/heiligenstaedter_testament_abendblatt-28-12-2019.pdf'],
      ['Wikipedia — Heiligenstadt Testament', 'https://en.wikipedia.org/wiki/Heiligenstadt_Testament'],
      ['Hektoen International — Mozart and Salieri: from Pushkin to Shaffer', 'https://hekint.org/2021/10/07/mozart-and-salieri-from-pushkin-to-shaffer/'],
      ['Association RIdIM — Past, Present, Future: 50 Years (PDF)', 'https://ridim.org/wp-content/uploads/2022/04/Past-Present-Future.-50-Years-of-Association-RIdIM.pdf'],
    ],
    body: `
[[phuong-phap-nghien-cuu-am-nhac]] giới thiệu sáu nhóm phương pháp của toàn ngành. Bài này đi sâu vào **nhóm nguồn tư liệu** — công cụ riêng của [[am-nhac-hoc-lich-su|âm nhạc học lịch sử]]. Nguyên tắc chung: **mọi khẳng định về quá khứ phải truy được về một nguồn, và nguồn ấy phải được đánh giá**.

## 1. Nguồn sơ cấp và nguồn thứ cấp
*(Khái niệm chung của sử học; tóm lược biên soạn.)*
| Loại | Ví dụ | Câu hỏi khi dùng |
|---|---|---|
| **Sơ cấp** (do người trong cuộc để lại) | Bản viết tay của tác giả, bản chép, bản in đầu, thư từ, hợp đồng, sổ lương, chương trình hoà nhạc, bài báo đương thời, tranh vẽ, nhạc cụ còn lại | Ai làm ra, khi nào, để làm gì? Có chép lại hay sửa đổi không? |
| **Thứ cấp** (nghiên cứu về sau) | Tiểu sử, sách lịch sử, bài nghiên cứu, mục từ điển | Dựa trên nguồn sơ cấp nào? Có bị nghiên cứu mới hơn bác bỏ không? |

Công cụ tìm nguồn: [[nguon-tra-cuu-am-nhac-hoc]]. Đánh giá và so sánh các bản của một tác phẩm: [[van-ban-hoc-am-nhac]].

## 2. Xác định niên đại bằng chính tờ giấy
Nhiều bản viết tay **không ghi ngày**. Nhà nghiên cứu xem chính tờ giấy:
- **Hình mờ** (*watermark*): mỗi khuôn giấy để lại một hình riêng. Alan Tyson, trong *[[wolfgang-amadeus-mozart|Mozart]]: Studies of the Autograph Scores* (1987), dùng loại giấy và hình mờ để xác định niên đại các bản viết tay của Mozart. Danh mục hình mờ của ông được in năm 1992 trong bộ Neue Mozart-Ausgabe. Có cả kỹ thuật đo hình ba vầng trăng trên giấy miền Bắc Ý (*selenometry*).
- **Dòng kẻ [[khuong-nhac|khuông]]** (*rastrology*): giấy chép nhạc được kẻ bằng một dụng cụ nhiều ngòi (*rastrum*); khoảng cách giữa các dòng là "dấu vân tay" của dụng cụ và xưởng.
- **Nét chữ người chép**: nhận ra từng người chép trong xưởng của một nhà soạn nhạc.

**Ví dụ kinh điển — "niên đại mới" của [[johann-sebastian-bach|Bach]]:** khi chuẩn bị bộ toàn tập mới ([[van-ban-hoc-am-nhac]]), Alfred Dürr (*Bach-Jahrbuch* 1957) và Georg von Dadelsen (1958) dùng nét chữ người chép, giấy và hình mờ để xếp lại niên đại các tác phẩm thanh nhạc Leipzig của Bach, thay cho niên đại của các nhà nghiên cứu thế kỷ 19.

## 3. Bản phác thảo: nhìn vào xưởng sáng tác
Beethoven để lại rất nhiều sổ phác thảo, bị phân tán sau cuộc bán đấu giá năm 1827. Công trình *The Beethoven Sketchbooks* (Douglas Johnson, Alan Tyson, Robert Winter, 1985) dựng lại trạng thái ban đầu của từng cuốn và phân biệt sổ để bàn với sổ bỏ túi. Bản phác thảo cho thấy **quá trình** sáng tác, nhưng cần thận trọng: phác thảo không phải là "ý định cuối cùng". Xem [[ludwig-van-beethoven]].

## 4. Tranh ảnh làm chứng cứ
**Âm nhạc học hình ảnh** (*[[bieu-tuong-hoc-am-nhac|music iconography]]*) dùng tranh, tượng, ảnh để tìm hiểu nhạc cụ, biên chế, [[tu-the|tư thế]] chơi, bối cảnh biểu diễn. Ngành phát triển mạnh từ thập niên 1970; tổ chức quốc tế RIdIM được lập năm 1971 ([[nguon-tra-cuu-am-nhac-hoc]]). Thận trọng: hoạ sĩ có thể **tưởng tượng, tượng trưng hoá** hoặc chép tranh cũ. Ví dụ ở Việt Nam: hình người đánh trống trên mặt [[lich-su-am-nhac-viet-nam|trống đồng]].

## 5. Phân kỳ: nhãn do người đời sau đặt
Chữ "[[thoi-ky-baroque|Baroque]]" chỉ được dùng cho âm nhạc từ đầu [[thoi-ky-the-ky-20|thế kỷ 20]]: Curt Sachs (1919) mượn các phạm trù của sử học nghệ thuật, và cuốn *Music in the Baroque Era* của Bukofzer (1948) phổ biến thuật ngữ ở Mỹ. Ranh giới các thời kỳ vẫn còn tranh luận. Xem [[cac-thoi-ky]] (mục "Mốc năm chỉ là quy ước").

## 6. Tiểu sử: tài liệu và huyền thoại
| Trường hợp | Chứng cứ | Kết luận của giới nghiên cứu |
|---|---|---|
| **"Salieri đầu độc Mozart"** | Tin đồn từ mùa thu 1823, khi Salieri già yếu, bệnh tâm thần, được cho là đã tự buộc tội; các tin đầu tiên về cái chết của Mozart không nhắc tên Salieri | Bị bác bỏ; huyền thoại lan rộng qua vở kịch của Pushkin (1830), [[opera|opera]] của [[nikolai-rimsky-korsakov|Rimsky-Korsakov]] (1898) và *Amadeus* (kịch 1979, phim 1984) |
| **Di chúc Heiligenstadt** của Beethoven | Bức thư viết cho hai em trai, đề ngày 6/10/1802; được tìm thấy năm 1827; bản gốc ở Thư viện Đại học Hamburg từ năm 1888 (quà tặng của Jenny Lind) | Tài liệu xác thực về cuộc khủng hoảng của Beethoven khi biết mình bị điếc |

Bài học: phân biệt **tài liệu** (có nguồn gốc rõ) với **giai thoại** (lặp lại qua nhiều sách mà không có nguồn gốc).

## 7. Danh sách kiểm tra
*(Gợi ý của thư viện.)*
1. Khẳng định này dựa trên nguồn nào? Sơ cấp hay thứ cấp?
2. Nguồn được làm ra khi nào, bởi ai, vì sao? Có thể đã bị chép sai, sửa hay giả mạo không?
3. Có nguồn độc lập nào xác nhận không?
4. Thuật ngữ đang dùng (thời kỳ, [[the-loai-am-nhac|thể loại]]) có phải của chính thời đó không?
5. Viết rõ đâu là chứng cứ, đâu là suy luận.
`,
  },
  {
    slug: 'nguon-tra-cuu-am-nhac-hoc',
    title: 'Công cụ tra cứu: từ điển, danh mục tác phẩm và cơ sở dữ liệu',
    category: 'musicology',
    aliases: ['công cụ tra cứu âm nhạc', 'Grove', 'New Grove', 'MGG', 'RISM', 'RILM', 'RIPM', 'IMSLP', 'danh mục tác phẩm', 'thematic catalogue', 'số Köchel', 'Köchel', 'BWV', 'Hoboken', 'số Deutsch', 'RV', 'HWV', 'K.', 'opus'],
    summary: 'Bản đồ các công cụ của nhà nghiên cứu: hai bộ từ điển lớn (Grove, MGG), các dự án quốc tế về nguồn nhạc (RISM), tài liệu nghiên cứu (RILM), tranh ảnh (RIdIM), báo chí (RIPM), thư viện bản nhạc mở (IMSLP), và các danh mục tác phẩm — vì sao sonata của Mozart mang số "K. 545" còn của Bach là "BWV".',
    wiki: 'Thematic_catalogue',
    refs: [
      ['Yale Music Library — Grove\'s Dictionary (exhibit)', 'https://musiclib-exhibits.library.yale.edu/exhibits/histories/grove_dictionary.html'],
      ['Wikipedia — The New Grove Dictionary of Music and Musicians', 'https://en.wikipedia.org/wiki/The_New_Grove_Dictionary_of_Music_and_Musicians'],
      ['Wikipedia — Die Musik in Geschichte und Gegenwart', 'https://en.wikipedia.org/wiki/Die_Musik_in_Geschichte_und_Gegenwart'],
      ['IAML — MGG Online', 'https://www.iaml.info/news/mgg-online/'],
      ['RISM — Organization', 'https://rism.info/organization.html'],
      ['RILM — About us', 'https://rilm.org/category/about-us'],
      ['Association RIdIM — 50 years (PDF)', 'https://ridim.org/wp-content/uploads/2022/04/Past-Present-Future.-50-Years-of-Association-RIdIM.pdf'],
      ['RIPM — About', 'https://ripm.org/about'],
      ['Wikipedia — International Music Score Library Project', 'https://en.wikipedia.org/wiki/International_Music_Score_Library_Project'],
      ['Mozarteum — Presentation of the new Köchel catalogue (2024)', 'https://mozarteum.at/en/presentation-of-the-new-koechel-catalogue'],
      ['Mozarteum — Ludwig von Köchel and the Köchel catalogue', 'https://kv.mozarteum.at/en/ludwig-von-koechel-and-the-koechel-catalogue'],
      ['Wikipedia — Bach-Werke-Verzeichnis', 'https://en.wikipedia.org/wiki/Bach-Werke-Verzeichnis'],
      ['Penn Libraries — Hoboken, Joseph Haydn: Thematisch-bibliographisches Werkverzeichnis', 'https://find.library.upenn.edu/catalog/995229223503681'],
      ['Wikipedia — Schubert Thematic Catalogue', 'https://en.wikipedia.org/wiki/Schubert_Thematic_Catalogue'],
      ['Wikipedia — Ryom-Verzeichnis', 'https://en.wikipedia.org/wiki/Ryom-Verzeichnis'],
    ],
    body: `
Trước khi đọc sâu về một tác phẩm hay một nhà soạn nhạc, nhà nghiên cứu thường đi qua cùng một chuỗi công cụ: **từ điển** để định hướng, **cơ sở dữ liệu** để tìm nguồn và tài liệu, **danh mục tác phẩm** để gọi đúng tên tác phẩm. Bài này là bản đồ của chúng. Cách dùng nguồn ở [[phuong-phap-su-hoc-am-nhac]].

::timeline 1862=Köchel 1879=Grove 1949=MGG 1950=BWV 1952=RISM 1957=Hoboken 1966=RILM 1971=RIdIM 1980=New_Grove 2006=IMSLP 2024=Köchel_mới | Năm ra đời của các công cụ trong bài (từ điển ghi năm tập đầu)

## Từ điển bách khoa
| Bộ | Các lần xuất bản | Ghi chú |
|---|---|---|
| **Grove** (tiếng Anh) | Bản 1 do George Grove chủ biên, 4 tập 1879 – 1889; *New Grove* (1980, 20 tập, Stanley Sadie chủ biên, viết lại gần như toàn bộ); bản 2 (2001, 29 tập); nay là **Grove Music Online** | Công cụ đầu tiên nên tra |
| **MGG** — *Die Musik in Geschichte und Gegenwart* (tiếng Đức) | Bản 1: 1949 – 1986, Friedrich Blume chủ biên, 17 tập; bản 2: 1994 – 2008, Ludwig Finscher chủ biên, 29 tập; **MGG Online** từ 2016 | Ngang hàng với Grove, mạnh về nhạc Đức và châu Âu |

## Các dự án "R" quốc tế
| Tên | Lập năm | Ghi chép gì | Dùng khi |
|---|---|---|---|
| **RISM** — Répertoire International des Sources Musicales | 1952 (Paris) | **Nguồn nhạc**: bản viết tay, bản in đầu, nơi lưu giữ | Tìm bản gốc của một tác phẩm đang nằm ở thư viện nào |
| **RILM** — Répertoire International de Littérature Musicale | 1966 (tập đầu 1967) | **Tài liệu nghiên cứu**: sách, bài báo, luận văn, kèm tóm tắt | Tìm xem ai đã viết gì về một đề tài |
| **[[bieu-tuong-hoc-am-nhac|RIdIM]]** — Répertoire International d'Iconographie Musicale | 1971 (St. Gallen) | **Tranh ảnh** có hình âm nhạc | Âm nhạc học hình ảnh |
| **RIPM** — Retrospective Index to Music Periodicals | khoảng 1980 | **Báo chí âm nhạc** khoảng 1760 – 1966 | Đọc phê bình đương thời, ví dụ tạp chí *AmZ* ([[doi-song-am-nhac-va-thiet-che]]) |

**IMSLP** (thư viện bản nhạc mở, ra mắt ngày 16/2/2006) chứa bản quét của nhiều bản in cũ, kể cả bản in đầu — rất hữu ích để so sánh các [[an-ban-urtext|ấn bản]] ([[van-ban-hoc-am-nhac]]), nhưng cần kiểm tra nguồn gốc từng bản quét.

## Danh mục tác phẩm: các con số sau tên bản nhạc
Nhiều nhà soạn nhạc không đánh số opus đầy đủ (hoặc số opus do nhà in đặt lộn xộn). Người đời sau lập **danh mục theo chủ đề** (*thematic catalogue*): mỗi tác phẩm một số, kèm vài [[so-chi-nhip|ô nhịp]] mở đầu để nhận diện.
| Ký hiệu | Nhà soạn nhạc | Người lập, năm | Cách xếp |
|---|---|---|---|
| **K.** hoặc **KV** | [[wolfgang-amadeus-mozart|Mozart]] | Ludwig von Köchel, 1862; Alfred Einstein sửa năm 1937; **bản mới công bố ở Salzburg ngày 19/9/2024** | Bản 1862 theo thứ tự thời gian (626 tác phẩm, kết thúc bằng [[thanh-le-va-requiem|Requiem]] K. 626); bản 2024 khôi phục các số gốc |
| **BWV** | J. S. [[johann-sebastian-bach|Bach]] | Wolfgang Schmieder, 1950 (bản 2: 1990) | Theo **[[the-loai-am-nhac|thể loại]]**, không theo thời gian |
| **Hob.** | [[joseph-haydn|Haydn]] | Anthony van Hoboken, 1957 – 1978 | Theo thể loại |
| **D** | [[franz-schubert|Schubert]] | Otto Erich Deutsch, 1951 | Theo thời gian |
| **RV** | [[antonio-vivaldi|Vivaldi]] | Peter Ryom, 1974 (bản đầy đủ 2007) | Theo thể loại |
| **HWV** | [[george-frideric-handel|Handel]] | Bernd Baselt, *Händel-Handbuch* (1978 – 1986) | Theo thể loại |

Vì thế: [[phan-tich-sonata-k545|Sonata K. 545]] là tác phẩm số 545 trong danh mục Köchel; [[phan-tich-prelude-do-truong|Prelude BWV 846]] mở đầu *[[toccata-prelude-fugue|Bình quân luật]]* tập 1 trong danh mục Bach; [[phan-tich-minuet-sol-truong|Minuet BWV Anh. 114]] nằm trong **phụ lục** (*Anhang*) của BWV — phụ lục dành cho tác phẩm nghi ngờ hoặc không phải của Bach. Số danh mục không cho biết bài khó hay dễ, nhưng với Köchel bản 1862 và Deutsch thì cho biết **gần đúng thời điểm sáng tác**.

## Lộ trình tra cứu một đề tài
*(Gợi ý của thư viện.)*
1. Đọc mục từ trong **Grove** hoặc **MGG** → nắm khung và thư mục.
2. Tìm tài liệu mới hơn trong **RILM**.
3. Tìm nguồn nhạc trong **RISM**; xem bản quét trên IMSLP hoặc trang thư viện lưu giữ.
4. Dùng **danh mục tác phẩm** để gọi đúng tên, đúng số.
5. Ghi lại nguồn của mọi khẳng định — như thư viện này làm ở cuối mỗi bài.
`,
  },
  {
    slug: 'van-ban-hoc-am-nhac',
    title: 'Văn bản học âm nhạc và ấn bản phê bình',
    category: 'musicology',
    also: ['expression'],
    aliases: ['văn bản học âm nhạc', 'textual criticism', 'ấn bản phê bình', 'critical edition', 'toàn tập', 'Gesamtausgabe', 'complete edition', 'Bach-Gesellschaft', 'Neue Bach-Ausgabe', 'bản viết tay', 'autograph', 'bản in đầu', 'first edition'],
    summary: 'Một tác phẩm thường tồn tại ở nhiều bản: bản viết tay, bản chép, bản in đầu, bản sửa. Văn bản học so sánh các bản đó để dựng một văn bản đáng tin và ghi rõ chỗ khác biệt; ấn bản phê bình và các bộ toàn tập (Bach-Gesellschaft 1851 – 1899, Neue Bach-Ausgabe 1954 – 2007) là kết quả của công việc ấy.',
    wiki: 'Critical_edition',
    refs: [
      ['Wikipedia — Bach Gesellschaft', 'https://en.wikipedia.org/wiki/Bach_Gesellschaft'],
      ['IMSLP — Bach-Gesellschaft Ausgabe', 'https://imslp.org/wiki/Bach-Gesellschaft_Ausgabe'],
      ['Wikipedia — New Bach Edition', 'https://en.wikipedia.org/wiki/New_Bach_Edition'],
      ['Bärenreiter — Die Neue Bach-Ausgabe 1954–2007: Dokumentation (PDF)', 'https://emag.baerenreiter.com/wp-content/uploads/2025/03/Bach_Dokumentation.pdf'],
      ['Britannica — Friedrich Chrysander', 'https://www.britannica.com/print/article/116347'],
      ['Wikipedia — Denkmäler der Tonkunst in Österreich', 'https://en.wikipedia.org/wiki/Denkm%C3%A4ler_der_Tonkunst_in_%C3%96sterreich'],
      ['Mozarteum — Presentation of the new Köchel catalogue (2024)', 'https://mozarteum.at/en/presentation-of-the-new-koechel-catalogue'],
      ['Narodowy Instytut Fryderyka Chopina — first editions', 'https://www.chopin.pl/score_publications.en.html'],
    ],
    body: `
Khi mở một bản nhạc, ta thường coi các nốt trên trang là "tác phẩm". Thực ra đó là **kết quả của một quyết định biên tập**. Phần lớn tác phẩm tồn tại ở nhiều dạng không hoàn toàn giống nhau. **Văn bản học** (*textual criticism*) là ngành so sánh các dạng ấy để dựng một văn bản đáng tin, và nói rõ chỗ nào còn chưa chắc. Ứng dụng thực hành cho người học đàn ở [[an-ban-urtext]].

## Các loại nguồn của một tác phẩm
*(Phân loại thông dụng; tóm lược biên soạn.)*
| Nguồn | Giá trị | Rủi ro |
|---|---|---|
| **Bản viết tay của tác giả** (*autograph*) | Gần ý tác giả nhất | Có thể là bản nháp; tác giả có thể sửa về sau trên bản in |
| **Bản chép** của người chép nhạc | Đôi khi là nguồn duy nhất còn lại | Lỗi chép; người chép "sửa" theo ý mình |
| **Bản in đầu** (*first edition*) | Thường có tác giả duyệt | Lỗi khắc; mỗi nhà in một khác (trường hợp [[frederic-chopin|Chopin]] — [[lich-su-in-an-am-nhac]]) |
| **Bản in sau, bản tác giả sửa** | Phản ánh ý định về sau | Không rõ sửa nào là của tác giả |
| **Ấn bản biên tập** thế kỷ 19 – 20 | Tiện dụng, có [[ngon-bam|ngón bấm]], dấu [[dien-tau|diễn tấu]] | Lẫn ý người biên tập với ý tác giả |

## Ấn bản phê bình làm gì
*(Tóm lược biên soạn.)*
1. **Tìm và mô tả** mọi nguồn còn lại (dùng [[nguon-tra-cuu-am-nhac-hoc|RISM]]).
2. **Xác định quan hệ** giữa các nguồn: bản nào chép từ bản nào, bản nào tác giả đã duyệt.
3. **Chọn nguồn chính**, rồi so từng nốt, từng dấu với các nguồn khác.
4. **In văn bản**, và trong phần **báo cáo phê bình** (*critical report*) ghi lại mọi chỗ khác nhau cùng lý do chọn.
5. **Phân biệt bằng hình thức in** những gì người biên tập thêm vào (ví dụ dấu trong ngoặc, nét đứt).

## Các bộ toàn tập
Từ giữa thế kỷ 19, các hội và nhà xuất bản lập **toàn tập** (*Gesamtausgabe*) cho những nhà soạn nhạc được coi là kinh điển. Đây vừa là công trình văn bản học, vừa là hành động **tạo ra kinh điển** ([[lich-su-tiep-nhan-am-nhac]]).
| Bộ | Năm | Ghi chú |
|---|---|---|
| **Bach-Gesellschaft-Ausgabe** | Hội lập năm 1850; 46 tập, 1851 – 1899 (có nguồn ghi 1900) | Toàn tập [[johann-sebastian-bach|Bach]] đầu tiên; hội giải thể khi hoàn thành |
| Toàn tập **[[george-frideric-handel|Handel]]** của [[lich-su-nganh-am-nhac-hoc|Chrysander]] | Hội Händel lập năm 1856 | Chrysander tiếp tục phần lớn bằng tiền riêng |
| ***Denkmäler der Tonkunst in Österreich*** | Tập đầu 1894 | Không phải toàn tập một người, mà là tuyển tập "di sản" âm nhạc của một quốc gia |
| **Neue Bach-Ausgabe** (NBA) | 1954 – 2007 (Bärenreiter) | Dựa trên nghiên cứu nguồn mới; công việc này dẫn tới "niên đại mới" của Bach — xem [[phuong-phap-su-hoc-am-nhac]] |
| Danh mục **Köchel mới** | Công bố 19/9/2024 | Xem [[nguon-tra-cuu-am-nhac-hoc]] |

## Một ví dụ dễ thấy trên đàn
Ba bản in đầu của một tác phẩm Chopin (Paris, Leipzig, London) có thể khác nhau về một nốt trong [[hop-am-ba|hợp âm]], một [[cham-doi-dau-noi|dấu nối]] hay một chỉ dẫn [[ban-dap|pedal]]. Một ấn bản phê bình **không im lặng chọn một bản**: nó in một lựa chọn và ghi chú các phương án còn lại. Người biểu diễn có hiểu biết đọc phần ghi chú đó — đây là chỗ văn bản học gặp [[phong-trao-bieu-dien-lich-su|biểu diễn theo lịch sử]] và [[tinh-xac-thuc-bieu-dien|câu hỏi về tính xác thực]].

## Khi dạy
*(Gợi ý của thư viện.)* Cho học trò so một trang trong hai ấn bản (một Urtext, một ấn bản biên tập thế kỷ 19, đều có trên IMSLP) và đánh dấu mọi khác biệt về [[cach-dien-tau|dấu luyến]], [[cuong-do|cường độ]], ngón bấm. Bài tập này dạy cách **đọc bản nhạc như một văn bản có lịch sử**.
`,
  },
  {
    slug: 'lich-su-tiep-nhan-am-nhac',
    title: 'Lịch sử tiếp nhận và sự hình thành kinh điển',
    category: 'musicology',
    also: ['philosophy'],
    aliases: ['lịch sử tiếp nhận', 'reception history', 'Rezeptionsgeschichte', 'kinh điển âm nhạc', 'musical canon', 'hồi sinh Bach', 'Bach revival', 'Thương khó theo Thánh Matthew 1829'],
    summary: 'Một tác phẩm sống tiếp sau khi ra đời: được chơi, in, phê bình, quên, hồi sinh. Lịch sử tiếp nhận nghiên cứu quá trình đó. Các mốc: Mendelssohn diễn lại Thương khó theo Thánh Matthew của Bach (11/3/1829); sự hình thành "nhạc kinh điển" ở Anh thế kỷ 18 (William Weber); khái niệm "tác phẩm" định hình quanh năm 1800 (Lydia Goehr).',
    wiki: 'Canon_(music)',
    refs: [
      ['Wikipedia — Sing-Akademie zu Berlin', 'https://en.wikipedia.org/wiki/Sing-Akademie_zu_Berlin'],
      ['Christian History Institute — 11 March 1829', 'https://christianhistoryinstitute.org/it-happened-today/3/11'],
      ['MIT Press Bookstore — Applegate, Bach in Berlin (Cornell UP, 2005)', 'https://mitpressbookstore.mit.edu/book/9780801443893'],
      ['Project MUSE — on Rezeptionsgeschichte (Notes review)', 'https://muse.jhu.edu/article/219292'],
      ['Folger Library — Weber, The Rise of Musical Classics in Eighteenth-Century England (1992)', 'https://catalog.folger.edu/record/59685'],
      ['London Review of Books — review of Weber (1992)', 'https://lrb.co.uk/v14/n19/keith-walker/bad-nights-at-the-libertine'],
      ['Cambridge — Work-concept and composer-centredness (on Goehr)', 'https://www.cambridge.org/core/books/abs/musical-work/workconcept-and-composercentredness/4251F82B3A4253204270F413A4B6846D'],
      ['Wikipedia — Bach Gesellschaft', 'https://en.wikipedia.org/wiki/Bach_Gesellschaft'],
    ],
    body: `
**Lịch sử tiếp nhận** (*Rezeptionsgeschichte*) nghiên cứu một tác phẩm **sau khi nó ra đời**: ai chơi, ai in, ai phê bình, vì sao nó bị quên rồi được nhớ lại, và mỗi thời đã hiểu nó khác nhau ra sao. Hướng nghiên cứu này gắn với [[triet-hoc-am-nhac|mỹ học]] tiếp nhận; ở Đức các tên tiêu biểu là Carl Dahlhaus, Friedhelm Krummacher, Hermann Danuser. Dahlhaus đặt nó vào trung tâm cuốn *Grundlagen der Musikgeschichte* (1977) — xem [[lich-su-nganh-am-nhac-hoc]].

## Ca kinh điển: Bach năm 1829
- Ngày **11/3/1829**, tại Sing-Akademie Berlin, **[[felix-mendelssohn|Felix Mendelssohn]]** (20 tuổi, học trò của Zelter) chỉ huy *[[oratorio-cantata-passion|Thương khó theo Thánh Matthew]]* của [[johann-sebastian-bach|Bach]] — lần trình diễn đầu tiên kể từ khi Bach mất. Khoảng một nghìn người không mua được vé; sau đó có thêm các buổi diễn lại. Bản diễn đã được **cắt gọn** đáng kể.
- Cần đặt mốc này đúng chỗ: nói "Bach bị lãng quên" là đơn giản hoá. Trước đó, Forkel đã viết tiểu sử Bach (1802) và nhạc phím của Bach vẫn được giới chuyên môn dùng. Điều thay đổi năm 1829 là **các tác phẩm thanh nhạc lớn** đến với **công chúng**, và Bach trở thành biểu tượng của âm nhạc Đức. Nghiên cứu tiêu biểu: Celia Applegate, *Bach in Berlin* (2005).
- Hệ quả thể chế: Hội Bach lập năm 1850 và in toàn tập Bach (1851 – 1899) — [[van-ban-hoc-am-nhac]].

## Kinh điển được tạo ra như thế nào
- **William Weber**, *The Rise of Musical Classics in Eighteenth-Century England* (1992): nước Anh là nơi đầu tiên hình thành ý niệm **"nhạc kinh điển"** — tiếp tục chơi nhạc của người đã khuất ([[henry-purcell|Purcell]], [[arcangelo-corelli|Corelli]], [[george-frideric-handel|Handel]]) qua các thiết chế như *Concert of Ancient Music* và lễ tưởng niệm Handel năm 1784.
- **Lydia Goehr**, *The Imaginary Museum of Musical Works* (1992): **khái niệm "tác phẩm"** như một vật cố định, hoàn chỉnh, do một tác giả làm ra, mà người chơi phải trung thành với nó, chỉ **định hình quanh năm 1800**, rồi chi phối thực hành nhạc cổ điển. Xem [[ban-the-tac-pham-am-nhac]].
- Các "cỗ máy" tạo kinh điển: hoà nhạc định kỳ và tạp chí phê bình ([[doi-song-am-nhac-va-thiet-che]]), bộ toàn tập ([[van-ban-hoc-am-nhac]]), sách lịch sử ([[lich-su-nganh-am-nhac-hoc]]), nhạc viện và chương trình thi ([[thi-cap-do]], [[lo-trinh-tac-pham]]), bản thu ([[lich-su-thu-am]]).

## Những câu hỏi của lịch sử tiếp nhận
*(Khung gợi ý của thư viện.)*
| Câu hỏi | Nguồn để trả lời |
|---|---|
| Tác phẩm được diễn bao nhiêu lần, ở đâu, khi nào? | Chương trình hoà nhạc, báo chí (RIPM — [[nguon-tra-cuu-am-nhac-hoc]]) |
| Người đương thời nghe nó thế nào? | Phê bình, thư từ, nhật ký |
| Nó được in, biên tập, cắt sửa ra sao? | Các [[an-ban-urtext|ấn bản]] — [[van-ban-hoc-am-nhac]] |
| Cách chơi nó thay đổi thế nào? | Bản thu — [[so-sanh-ban-thu]], [[lich-su-thu-am]] |
| Nó mang ý nghĩa gì với một cộng đồng, một quốc gia? | [[xa-hoi-hoc-am-nhac]], [[adorno-va-am-nhac]] |

## Với người dạy piano
Danh sách "bài phải học" ([[lo-trinh-tac-pham]]) cũng là một **kinh điển** — có lịch sử, có lý do, và có thể bàn lại. Cho học trò biết vì sao một bài được coi là kinh điển cũng là dạy lịch sử âm nhạc.
`,
  },
  {
    slug: 'am-nhac-co-dai',
    title: 'Âm nhạc cổ đại: từ sáo xương đến Boethius',
    category: 'musicology',
    also: ['modern'],
    aliases: ['âm nhạc cổ đại', 'ancient music', 'âm nhạc Hy Lạp cổ đại', 'ancient Greek music', 'Seikilos', 'văn bia Seikilos', 'Hurrian hymn', 'thánh ca Hurrian', 'Aristoxenus', 'sáo Hohle Fels', 'sáo Giả Hồ', 'Jiahu'],
    summary: 'Những bằng chứng về âm nhạc trước thời Trung cổ: sáo xương ở Hohle Fels (hơn 35.000 năm) và Giả Hồ (khoảng 9.000 năm), bài thánh ca Hurrian ở Ugarit (khoảng 1400 TCN), thánh ca Delphi và văn bia Seikilos của Hy Lạp, lý thuyết của Aristoxenus, truyền thuyết Pythagoras, và cuốn sách của Boethius đã truyền lý thuyết Hy Lạp sang Trung cổ.',
    wiki: 'Music_of_ancient_Greece',
    refs: [
      ['Conard, Malina & Münzel (2009) — New flutes document the earliest musical tradition in southwestern Germany, Nature 460', 'https://www.nature.com/articles/7256666b'],
      ['Zhang et al. (1999) — Oldest playable musical instruments found at Jiahu early Neolithic site in China, Nature 401', 'https://ideas.repec.org/a/nat/nature/v401y1999i6751d10.1038_43865.html'],
      ['Wikipedia — Divje Babe flute', 'https://en.wikipedia.org/wiki/Divje_Babe_flute'],
      ['Guinness World Records — Oldest written song with notation (Hurrian hymn)', 'https://www.guinnessworldrecords.com/world-records/729727-oldest-written-song-with-notation'],
      ['Wikipedia — Delphic Hymns', 'https://en.wikipedia.org/wiki/Delphic_Hymns'],
      ['Wikipedia — Seikilos epitaph', 'https://en.wikipedia.org/wiki/Seikilos_epitaph'],
      ['Hagel, Ancient Greek Music: A New Technical History (Cambridge UP, 2010) — excerpt (PDF)', 'https://assets.cambridge.org/97805215/17645/excerpt/9780521517645_excerpt.pdf'],
      ['Wikipedia — Aristoxenus', 'https://en.wikipedia.org/wiki/Aristoxenus'],
      ['Wikipedia — Pythagorean hammers', 'https://en.wikipedia.org/wiki/Pythagorean_hammers'],
      ['Norton — A History of Western Music, ch. 2 (Boethius)', 'https://nerd.wwnorton.com/ebooks/epub/hwm10/EPUB/content/1.2.6-chapter02.xhtml'],
      ['Wikipedia — Water organ', 'https://en.wikipedia.org/wiki/Water_organ'],
    ],
    body: `
[[cac-thoi-ky|Lịch sử âm nhạc phương Tây]] thường bắt đầu từ thánh ca Trung cổ, vì đó là âm nhạc sớm nhất được **ghi lại liên tục**. Nhưng âm nhạc có trước đó rất lâu. Nghiên cứu thời cổ đại dựa trên ba loại chứng cứ: **nhạc cụ khảo cổ**, **vài bản nhạc ghi trên đá hay đất sét**, và **sách lý thuyết**. Thận trọng là quy tắc số một: mọi bản "dựng lại" đều là giả thuyết.

::timeline -1400=Thánh_ca_Hurrian -375=Aristoxenus_ra_đời -128=Thánh_ca_Delphi 100=Văn_bia_Seikilos_(thế_kỷ_1–2) 228=Organ_Aquincum 500=Boethius | Từ thánh ca Hurrian đến Boethius (TCN = trước Công nguyên; các nhạc cụ tiền sử ở bảng dưới, xa hơn nhiều)

## Nhạc cụ khảo cổ
| Hiện vật | Niên đại | Ghi chú |
|---|---|---|
| **Sáo Hohle Fels** (tây nam nước Đức) | Bài trên *Nature* (2009) ghi truyền thống âm nhạc ở đây **hơn 35.000 năm** | Làm từ xương cánh kền kền, 5 lỗ bấm, tìm thấy thành 12 mảnh năm 2008 |
| **Sáo Giả Hồ** (Jiahu, Trung Quốc) | Khu di chỉ khoảng 7000 – 5700 TCN | Xương sếu, 5 – 8 lỗ; bài trên *Nature* (1999) nói chúng "có thể" là nhạc cụ còn thổi được cổ nhất |
| **"Sáo" Divje Babe** (Slovenia) | Tìm thấy năm 1995 | **Còn tranh cãi**: có thể chỉ là vết răng thú gặm |

## Bản nhạc ghi chép sớm nhất
- **Thánh ca Hurrian số 6** (Ugarit, bắc Syria, khoảng **1400 TCN**), ghi trên bảng đất sét bằng chữ hình nêm: một bài thánh ca dâng nữ thần Nikkal, kèm chỉ dẫn cho đàn lyre 9 dây. Bài này thường được gọi là bản nhạc cổ nhất có ký hiệu mà còn khá đầy đủ. Các bản dựng lại **khác nhau rất nhiều**, vì cách đọc ký hiệu chưa thống nhất.
- **Hy Lạp** có hai bộ ký hiệu, cho **giọng hát** và cho **nhạc cụ** (bộ cho nhạc cụ cổ hơn). Hệ thống này hoàn chỉnh từ khoảng giữa thế kỷ 3 TCN. Bảng ký hiệu chủ yếu biết được qua cẩm nang của Alypius, viết sau đó khoảng nửa thiên niên kỷ.
- **Thánh ca Delphi** khắc trên tường Kho bạc Athens ở Delphi, tìm thấy năm 1893. Trước đây chúng được ghi niên đại 138 và 128 TCN; nghiên cứu gần đây cho rằng cả hai có lẽ được viết cho lễ rước năm **128 TCN**. Bài 1 dùng ký hiệu giọng hát, bài 2 dùng ký hiệu nhạc cụ.
- **Văn bia Seikilos** (tìm thấy năm 1883 gần Tralles, nay là Aydın, Thổ Nhĩ Kỳ; thường được xếp vào **thế kỷ 1 – 2 sau Công nguyên**; nay ở Bảo tàng Quốc gia Đan Mạch): một bài hát ngắn **còn nguyên vẹn** với lời và ký hiệu.

::wiki Seikilos_epitaph | Văn bia Seikilos — bài hát còn nguyên vẹn cổ nhất được biết, khắc trên một cột đá mộ

## Lý thuyết Hy Lạp
- **Truyền thuyết Pythagoras và những chiếc búa:** Pythagoras nghe tiếng búa trong lò rèn và tìm ra các tỉ lệ 2:1 ([[quang|quãng 8]]), 3:2 (quãng 5), 4:3 (quãng 4), 9:8 (một cung). Câu chuyện đầy đủ sớm nhất nằm trong sách của Nicomachus (đầu thế kỷ 2 sau Công nguyên), và **sai về vật lý**: [[cao-do|cao độ]] không tỉ lệ với khối lượng búa. Các tỉ lệ ấy đúng với **chiều dài dây** — xem [[chuoi-boi-am]], [[thuan-nghich]], [[hoa-am-vu-tru]].
- **Aristoxenus** (sinh khoảng 375 TCN, học trò của Aristotle): cuốn *Elementa harmonica* (còn lại không đầy đủ) là nguồn chính về lý thuyết quãng và [[am-giai|thang âm]] Hy Lạp.
- Âm nhạc và **đạo đức, giáo dục** trong tư tưởng Hy Lạp: [[thuyet-ethos-hy-lap]].

## La Mã và cầu nối sang Trung cổ
- **[[organ-ong|Organ nước]]** (*hydraulis*) do Ctesibius ở Alexandria phát minh vào thế kỷ 3 TCN. Di vật ở Aquincum (Budapest) mang bia ghi năm **228 sau Công nguyên**. Đây là tổ tiên xa của đàn organ, và qua đó của [[dan-phim-co|các nhạc cụ phím]] ([[nhac-khi-hoc]]).
- **Boethius**, *De institutione musica* (khoảng năm 500): biên soạn chủ yếu từ sách Hy Lạp (Nicomachus, Ptolemy), chia âm nhạc thành ba tầng: âm nhạc vũ trụ, âm nhạc con người, âm nhạc nhạc cụ. Các bản chép sớm nhất thuộc thế kỷ 9. Sách được chép và trích dẫn suốt khoảng một nghìn năm, là con đường chính đưa lý thuyết Hy Lạp vào Trung cổ — xem [[thoi-ky-trung-co]], [[dieu-thuc]].

## Với người học
*(Gợi ý của thư viện.)* Thử chơi các tỉ lệ của Pythagoras trên một dây đàn (bấm ở 1/2, 2/3, 3/4 chiều dài dây), rồi so với phím piano để thấy vì sao [[luat-binh-quan|bình quân luật]] phải "làm tròn" các quãng tự nhiên.
`,
  },
  {
    slug: 'lich-su-am-nhac-viet-nam',
    title: 'Lịch sử âm nhạc Việt Nam: các mốc và nguồn',
    category: 'musicology',
    also: ['modern'],
    aliases: ['lịch sử âm nhạc Việt Nam', 'history of Vietnamese music', 'âm nhạc Việt Nam qua các thời kỳ', 'trống đồng', 'trống đồng Ngọc Lũ', 'nhạc cung đình'],
    summary: 'Các mốc của lịch sử âm nhạc Việt Nam theo những gì nguồn ghi nhận được: trống đồng Đông Sơn và đàn đá, nhạc cung đình qua các triều Lý, Lê, Nguyễn, sân khấu chèo, tuồng, cải lương, tân nhạc từ thập niên 1930, các nhạc viện năm 1956, nghiên cứu của Trần Văn Khê, và các di sản được UNESCO ghi danh. Bài ghi rõ chỗ nào còn tranh luận.',
    wiki: 'Music_of_Vietnam',
    refs: [
      ['Bảo tàng Lịch sử Quốc gia — Vietnam\'s national treasure: Ngoc Lu bronze drum', 'https://baotanglichsuquocgia.vn/en/Articles/1004/19804/vietnams-national-treasure-ngoc-lu-bronze-drum.html'],
      ['IRD — tài liệu lưu trữ về đàn đá Ndut Liêng Krak (PDF)', 'https://horizon.documentation.ird.fr/exl-doc/pleins_textes/pleins_textes_5/b_fdi_20-21/28227.pdf'],
      ['Diễn đàn Doanh nghiệp — Âm nhạc, thuật trị nước (Nguyễn Trãi và Lương Đăng)', 'https://diendandoanhnghiep.vn/am-nhac-thuat-tri-nuoc-215528.html'],
      ['Ngôi Sao — tư liệu về khúc Chiêm Thành âm thời Lý', 'https://ngoisao.vn/theo-dong-su-kien/ho-so-tu-lieu/news-ngoisao-d79831.html'],
      ['Báo Văn hoá — Ưu bà Phạm Thị Trân', 'https://baovanhoa.vn/van-hoa/uu-ba-pham-thi-tran-ba-to-dau-tien-cua-nghe-thuat-san-khau-viet-nam-127934.html'],
      ['UNESCO — Nhã nhạc, Vietnamese court music', 'https://ich.unesco.org/en/RL/nha-nhac-vietnamese-court-music-00074'],
      ['RFA — Lịch sử nghệ thuật cải lương', 'https://www.rfa.org/vietnamese/in_depth/HistoryOfTheArtCaiLuong_TQuang-20050918.html-09112007184224.html'],
      ['Tạp chí Nghiên cứu và Phát triển (Huế) — về khởi điểm cải lương', 'https://vjol.info.vn/ncpt-hue/article/view/38427'],
      ['Gibbs — Tân nhạc: notes toward a social history (Asian Cultural Studies)', 'https://hdl.handle.net/2027/spo.act2080.0044.122'],
      ['Vietcetera — Echoes of 1934', 'https://vietcetera.com/en/echoes-of-1934-why-gen-z-is-reimagining-vietnams-early-tan-nhac'],
      ['Wikipedia — Vietnam National Academy of Music', 'https://en.wikipedia.org/wiki/Vietnam_National_Academy_of_Music'],
      ['Wikipedia — Conservatory of Ho Chi Minh City', 'https://en.wikipedia.org/wiki/Conservatory_of_Ho_Chi_Minh_City'],
      ['Wikipedia — Trần Văn Khê', 'https://en.wikipedia.org/wiki/Tr%E1%BA%A7n_V%C4%83n_Kh%C3%AA'],
      ['UNESCO — Decision 12.COM 11.C (Hát Xoan)', 'https://ich.unesco.org/en/decisions/12.COM/11.C'],
      ['Thư viện ĐH Văn hoá Hà Nội — Thụy Loan, Lược sử âm nhạc Việt Nam (1993)', 'https://search.huc.edu.vn/Record/.b10325220?lng=en'],
    ],
    body: `
Viết lịch sử âm nhạc Việt Nam khó hơn viết lịch sử nhạc phương Tây ở một điểm cơ bản: phần lớn âm nhạc truyền thống được **truyền khẩu**, nên chứng cứ cho các thế kỷ trước thường là **hiện vật khảo cổ** và **vài dòng trong sử sách**, ít khi là bản nhạc. Bài này nêu các mốc **có nguồn**, và ghi rõ chỗ còn tranh luận. Phần [[am-giai|thang âm]], nhạc cụ và di sản xem ở [[am-nhac-truyen-thong-viet-nam]]; tân nhạc ở [[tan-nhac-viet-nam]]; góc nhìn dân tộc nhạc học ở [[dan-toc-nhac-hoc]].

::timeline 1802-1945=Triều_Nguyễn 1893=Tìm_thấy_trống_Ngọc_Lũ 1918=Cải_lương_(mốc_quy_ước) 1938=Tân_nhạc_(mốc_quy_ước) 1949=Tìm_thấy_đàn_đá 1956=Hai_nhạc_viện 1958=Luận_án_Trần_Văn_Khê 2003=Nhã_nhạc_–_UNESCO | Hai thế kỷ gần đây (các mốc cổ hơn — trống đồng, triều Lý, Lê — ở phần dưới)

## 1. Khảo cổ: âm nhạc trước chữ viết
- **Trống đồng Ngọc Lũ** (văn hoá Đông Sơn): tìm thấy năm 1893 ở Hà Nam; Bảo tàng Lịch sử Quốc gia xác định niên đại khoảng **2.000 – 2.500 năm trước**; là bảo vật quốc gia (2012). Theo bảo tàng, mặt trống có hình người cầm chày dài đánh trống, và trống được dùng làm nhạc cụ trong lễ hội, nghi lễ, đồng thời là biểu tượng quyền lực. Đây là chứng cứ hình ảnh — xem [[phuong-phap-su-hoc-am-nhac|âm nhạc học hình ảnh]].
- **[[dan-da|Đàn đá Ndut Liêng Krak]]** (Đắk Lắk): 11 thanh đá do công nhân người Mnông Gar tìm thấy tháng 2/1949; nhà dân tộc học Georges Condominas đưa về Paris. Nhà [[am-nhac-hoc|âm nhạc học]] André Schaeffner đo đạc và công bố trên *Revue de Musicologie* (1951). Đây là một nhạc cụ **tự thân vang** theo phân loại Hornbostel – Sachs ([[nhac-khi-hoc]]). Nơi lưu giữ hiện nay (Musée de l'Homme hay Musée du quai Branly) **cần kiểm tra lại**.

## 2. Nhạc cung đình qua các triều đại
- **Thời Lý — giao lưu với Chăm:** năm 1044, Lý Thái Tông đánh Chiêm Thành, bắt về hoàng hậu, phi tần và cung nữ của vua Chăm. Sử sách cũng chép việc một vua Lý cho nhạc công soạn khúc theo **"[[am-nhac-co-trung-dai-viet-nam|Chiêm Thành âm]]"**, nghe buồn thương đến mức người nghe rơi nước mắt, và một nhà sư can rằng đó là âm thanh của nước loạn. Đa số nguồn tiếng Việt xếp chuyện này vào thời **Lý Cao Tông**, một nguồn khác ghi thời Lý Thánh Tông. **Năm cụ thể cần đối chiếu *Đại Việt sử ký toàn thư*.**
- **Thời Lê sơ — tranh luận về nhạc lễ:** *Toàn thư* chép **Nguyễn Trãi** và **Lương Đăng** cùng được giao định nhạc triều đình (thời Lê Thái Tông, 1433 – 1442). Nguyễn Trãi có câu: "Hoà bình là gốc của nhạc, thanh âm là văn của nhạc". Nhà vua theo phương án của Lương Đăng (theo mẫu nhà Minh), Nguyễn Trãi rút lui. Tranh luận này gần với tư tưởng lễ nhạc Nho gia — xem [[nhac-trong-tu-tuong-nho-gia]]. (Năm cụ thể và tên các dàn nhạc thời này chưa được kiểm chứng ở đây.)
- **Thời Nguyễn — [[ca-hue-nha-nhac|Nhã nhạc]] Huế:** theo hồ sơ UNESCO, Nhã nhạc là nhạc và múa cung đình phát triển **từ thế kỷ 15 đến giữa [[thoi-ky-the-ky-20|thế kỷ 20]]**, đạt đỉnh cao dưới triều Nguyễn (1802 – 1945). UNESCO tuyên bố Kiệt tác năm 2003, đưa vào [[di-san-phi-vat-the-va-am-nhac|Danh sách đại diện]] năm 2008. Sau năm 1945, Nhã nhạc đứng trước nguy cơ mai một.

## 3. Sân khấu: chèo, tuồng, cải lương
- **Chèo:** truyền thuyết tôn bà **[[cheo|Phạm Thị Trân]]** (cung nữ múa hát thời Đinh, thế kỷ 10) làm "bà tổ" của nghề — đây là **truyền thuyết**, không được chính sử ghi nhận.
- **Tuồng:** có thuyết gắn nguồn gốc với một diễn viên người phương Bắc tên **[[tuong|Lý Nguyên Cát]]** bị bắt thời Trần, dạy lối hát diễn Trung Hoa. Năm cụ thể chưa được kiểm chứng.
- **Cải lương (Nam Bộ):** mốc quy ước là vở *Kim Vân Kiều* diễn tại rạp Thầy Năm Tú, Mỹ Tho, năm **1918**. Nhà nghiên cứu Trần Nhật Vy và một số người khác đề xuất các mốc khác (1917, 1919, 1922). Trước đó, lối **ca ra bộ** đã phổ biến khoảng năm 1911. Bài **"[[cai-luong|Dạ cổ hoài lang]]"** của Cao Văn Lầu, gốc của **vọng cổ**, ra đời khoảng 1917 – 1920 (các nguồn ghi khác nhau).

## 4. Thế kỷ 20: tân nhạc, nhạc viện, nghiên cứu
- **Tân nhạc:** mốc quy ước thường được nhắc là các buổi trình diễn của **[[nguyen-van-tuyen|Nguyễn Văn Tuyên]]** ở Hà Nội năm **1938** (xem [[nhac-cai-cach-1938]]); một số nhà nghiên cứu nêu mốc **1934**, khi báo chí giới thiệu phong trào "nhạc cải cách". Xem [[tan-nhac-viet-nam]] và nghiên cứu của [[nghien-cuu-am-nhac-viet-nam|Jason Gibbs]].
- **Hai nhạc viện cùng ra đời năm 1956:** [[am-nhac-viet-nam-1945-1975|Trường Âm nhạc Việt Nam]] ở Hà Nội (đổi thành Nhạc viện Hà Nội đầu thập niên 1980, thành Học viện Âm nhạc Quốc gia Việt Nam năm 2008) và Trường Quốc gia Âm nhạc ở Sài Gòn (thành lập 12/4/1956, nay là Nhạc viện TP. Hồ Chí Minh). Xem [[piano-viet-nam]].
- **Nghiên cứu:** **Trần Văn Khê** bảo vệ luận án tiến sĩ về âm nhạc truyền thống Việt Nam tại Đại học Sorbonne năm **1958**; sách *La musique vietnamienne traditionnelle* in ở Paris năm 1962, lâu nay là tài liệu chuẩn về đề tài này. Giáo trình đại học: Thụy Loan, *Lược sử [[am-nhac-viet-nam|âm nhạc Việt Nam]]* (1993).

## 5. Di sản và bảo tồn
UNESCO đã ghi danh nhiều loại hình âm nhạc Việt Nam: Nhã nhạc (2003/2008), [[cong-chieng|Không gian văn hoá cồng chiêng]] Tây Nguyên (2005/2008), [[quan-ho|Quan họ]] và [[ca-tru|Ca trù]] (2009), [[hat-xoan-hat-van-then|Hát Xoan]] (2011, chuyển sang Danh sách đại diện năm 2017), [[don-ca-tai-tu|Đờn ca tài tử]] (2013), Ví, Giặm (2014), Tín ngưỡng thờ Mẫu Tam phủ cùng hát văn (2016), [[dan-ca-viet-nam|Bài chòi]] (2017), Thực hành Then (2019). Bảng chi tiết ở [[am-nhac-truyen-thong-viet-nam]].

## Khoảng trống cần nghiên cứu
*(Nhận xét của thư viện.)*
1. Nhiều niên đại thời phong kiến chỉ dựa trên một vài dòng trong sử sách; cần đối chiếu **nguyên văn *Đại Việt sử ký toàn thư*** trước khi trích.
2. Các mốc "khởi đầu" (cải lương 1918, tân nhạc 1938) là **quy ước**, đang được giới nghiên cứu xem lại.
3. Lịch sử của chính ngành nghiên cứu (Viện Âm nhạc, các thế hệ nhà nghiên cứu) chưa được tổng hợp đầy đủ trong các nguồn tra được.
`,
  },
]

