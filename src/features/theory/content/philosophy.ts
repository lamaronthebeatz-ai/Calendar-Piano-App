import type { Article } from '../wiki'

/** Triết học và thẩm mỹ âm nhạc. Nguồn ghi trong `refs`. */
export const philosophy: Article[] = [
  {
    slug: 'triet-hoc-am-nhac',
    title: 'Triết học và thẩm mỹ âm nhạc: hệ thống và lộ trình',
    category: 'philosophy',
    aliases: ['triết học âm nhạc', 'philosophy of music', 'thẩm mỹ âm nhạc', 'mỹ học âm nhạc', 'aesthetics of music', 'music aesthetics', 'mỹ học'],
    summary: 'Bài tổng quan của mục: triết học âm nhạc hỏi âm nhạc là gì, vì sao nó biểu hiện cảm xúc, nó có ý nghĩa gì, tác phẩm âm nhạc tồn tại theo cách nào và ta đánh giá cái hay ra sao — cùng lịch sử các câu trả lời từ Hy Lạp cổ đại đến nay.',
    wiki: 'Philosophy_of_music',
    refs: [
      ['Stanford Encyclopedia of Philosophy — The Philosophy of Music (Kania)', 'https://plato.stanford.edu/entries/music/'],
      ['Wikipedia — Philosophy of music', 'https://en.wikipedia.org/wiki/Philosophy_of_music'],
      ['Library record — Stock (ed.), Philosophers on Music: Experience, Meaning, and Work (2007)', 'https://lib.ecu.edu/catalog-preview/catalog/1275017'],
      ['Wikipedia — Aesthetics of music', 'https://en.wikipedia.org/wiki/Aesthetics_of_music'],
    ],
    body: `
**Triết học âm nhạc** và **thẩm mỹ (mỹ học) âm nhạc** đặt những câu hỏi mà lý thuyết âm nhạc thường bỏ qua: không phải "[[hop-am-ba|hợp âm]] này là gì" mà là **"vì sao âm thanh có tổ chức lại khiến ta xúc động"**, **"một bản [[hinh-thuc-sonata|sonata]] tồn tại ở đâu"**, **"điều gì làm một cách chơi là đúng"**.

## Các câu hỏi lớn
Các tài liệu tổng quan hiện đại (như mục *Philosophy of Music* của Andrew Kania trong *Stanford Encyclopedia of Philosophy*, hay tuyển tập *Philosophers on Music* do Kathleen Stock biên tập) thường chia lĩnh vực thành mấy nhóm:
| Nhóm câu hỏi | Câu hỏi | Bài |
|---|---|---|
| **Định nghĩa** | Âm nhạc là gì? Tiếng ồn có thể là âm nhạc? | [[dinh-nghia-am-nhac]] |
| **Bản thể** | Một tác phẩm âm nhạc là loại "vật" gì? | [[ban-the-tac-pham-am-nhac]] |
| **Biểu hiện** | Nhạc "buồn" nghĩa là gì, khi âm thanh không có cảm xúc? | [[bieu-hien-cam-xuc-am-nhac]] |
| **Ý nghĩa** | Âm nhạc có "nói" điều gì không? | [[y-nghia-am-nhac]], [[am-nhac-tuyet-doi]] |
| **Biểu diễn** | Thế nào là biểu diễn "trung thành", "xác thực"? | [[tinh-xac-thuc-bieu-dien]] |
| **Giá trị** | Có chuẩn mực cho cái hay không, hay chỉ là sở thích? | [[phan-doan-tham-my]], [[adorno-va-am-nhac]] |

## Lịch sử tư tưởng
1. **Hy Lạp cổ đại**: âm nhạc rèn tính cách — [[thuyet-ethos-hy-lap]]; âm nhạc là số và trật tự vũ trụ — [[hoa-am-vu-tru]].
2. **Phương Đông cổ đại**: lễ và nhạc trong tư tưởng Nho gia — [[nhac-trong-tu-tuong-nho-gia]].
3. **Thế kỷ 18**: giai điệu hay hoà âm là gốc — [[tranh-luan-rameau-rousseau]]; cái đẹp và thị hiếu — [[phan-doan-tham-my]].
4. **Thế kỷ 19**: nhạc khí nhạc được tôn lên thành nghệ thuật cao nhất — [[triet-hoc-lang-man-ve-am-nhac]]; tranh luận nhạc tuyệt đối và nhạc chương trình — [[am-nhac-tuyet-doi]].
5. **[[thoi-ky-the-ky-20|Thế kỷ 20]] – nay**: triết học phân tích (biểu hiện, bản thể, tính xác thực), ký hiệu học ([[y-nghia-am-nhac]]), lý thuyết phê phán ([[adorno-va-am-nhac]]), thử nghiệm của [[john-cage|Cage]] ([[dinh-nghia-am-nhac]]).

## Triết học và các mục khác
- Tâm lý học thực nghiệm trả lời một phần câu hỏi về cảm xúc: [[cam-xuc-am-nhac]], [[ky-vong-am-nhac]].
- Lịch sử phân tích và các tranh luận về phương pháp: [[lich-su-phan-tich-am-nhac]].
- Biểu diễn theo phong cách lịch sử: [[phong-cach-dien-tau]].

## Vì sao người dạy đàn nên quan tâm?
Mỗi khi nói với học trò "chơi đoạn này buồn hơn", "tôn trọng ý tác giả", hay "bản này hay hơn bản kia", ta đã dùng một quan điểm triết học. Hiểu các quan điểm giúp **nói rõ điều mình muốn** và **tôn trọng những cách hiểu khác**.
`,
  },
  {
    slug: 'thuyet-ethos-hy-lap',
    title: 'Âm nhạc và tính cách: thuyết ethos Hy Lạp',
    category: 'philosophy',
    aliases: ['ethos', 'thuyết ethos', 'Plato về âm nhạc', 'Aristotle về âm nhạc', 'Damon', 'Cộng hoà Plato', 'harmoniai', 'giáo dục âm nhạc Hy Lạp'],
    summary: 'Quan niệm Hy Lạp cổ đại rằng âm nhạc định hình tính cách con người và trật tự xã hội: Damon, Plato (Cộng hoà) và Aristotle (Chính trị luận) — cùng những nghi vấn của học giả hiện đại về độ chắc chắn của "lý thuyết ethos".',
    wiki: 'Ethos',
    refs: [
      ['Hagel (2019), Edition Topoi — Shaping character: an ancient Greek science of musical ethos? (PDF)', 'https://www.edition-topoi.org/download_pdf/bsa_065_04.pdf'],
      ['Portugal & Correa, Orfeu — The concept of ethos in Ancient Greek music', 'https://revistas.udesc.br/index.php/orfeu/en/article/view/9408'],
      ["Oxford Academic — Reconstructing Damon: music, wisdom teaching, and politics in Perikles' Athens", 'https://academic.oup.com/book/8111/chapter/153569346'],
      ["VoegelinView — Soul music in Plato's Republic", 'https://voegelinview.com/soul-music-platos-republic/'],
      ['Wikipedia — Musical system of ancient Greece', 'https://en.wikipedia.org/wiki/Musical_system_of_ancient_Greece'],
    ],
    body: `
## Âm nhạc rèn tính cách
Trong *Cộng hoà* và *Luật pháp*, **Plato** để Socrates trình bày âm nhạc như một **sức mạnh hình thành tính cách**: âm nhạc thấm dần vào tâm hồn, rồi lan sang cách cư xử, luật pháp và cả thể chế. Ông nhắc lời **Damon** (thế kỷ 5 TCN): phong cách âm nhạc **không thể thay đổi mà không làm thay đổi những luật lệ nền tảng của thành bang**.

## Các "điệu" và tính cách
- Trong *Cộng hoà* (khoảng 398–399), Socrates gắn các **harmoniai** (thường dịch là "điệu") với các trạng thái tâm hồn: một số điệu bị coi là ủ rũ hoặc uỷ mị và bị loại khỏi giáo dục; điệu **Dorian** được gắn với **lòng dũng cảm**, trong khi Lydian và Ionian bị gắn với sự **buông thả**.
- **Aristotle**, trong quyển VIII của *Chính trị luận*, cũng bàn về vai trò giáo dục của âm nhạc. Các nghiên cứu so sánh cho thấy hai triết gia **khác nhau** về cách âm nhạc tác động lên cảm xúc và tính cách công dân, cũng như về vai trò của âm nhạc trong xã hội.
- Lưu ý: "Dorian", "Lydian" của Hy Lạp **không phải** là các [[dieu-thuc|điệu thức nhà thờ]] cùng tên của thời [[thoi-ky-trung-co|Trung cổ]]; tên gọi được dùng lại nhưng cấu trúc khác.

## Chắc chắn đến đâu?
Học giả **Stefan Hagel** (2019) đặt nghi vấn: hình ảnh một "lý thuyết ethos" hoàn chỉnh của Damon phần lớn dựa vào một chuyên luận **muộn** (Aristides Quintilianus, thời La Mã); ông cho rằng thời Cổ điển Hy Lạp **chưa có** một lý thuyết ethos dựa trên lập luận kỹ thuật, và không nên coi mọi ý kiến về chi tiết âm nhạc trong *Cộng hoà* là quan điểm của chính Plato.

## Di sản
- Ý tưởng "âm nhạc giáo dục con người" sống tiếp trong giáo dục châu Âu và cả trong các phương pháp hiện đại (xem [[phuong-phap-giao-duc-am-nhac]]).
- Câu hỏi "âm nhạc có ảnh hưởng đạo đức không?" vẫn được đặt lại mỗi khi có tranh luận về các [[the-loai|thể loại]] nhạc mới (xem [[adorno-va-am-nhac]]).
- So sánh với tư tưởng phương Đông: [[nhac-trong-tu-tuong-nho-gia]]. Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'hoa-am-vu-tru',
    title: 'Hoà âm vũ trụ',
    category: 'philosophy',
    aliases: ['hoà âm vũ trụ', 'musica universalis', 'harmony of the spheres', 'âm nhạc của các thiên cầu', 'musica mundana', 'musica humana', 'musica instrumentalis', 'Boethius', 'Harmonices Mundi', 'Kepler', 'Pythagoras'],
    summary: 'Ý tưởng Pythagoras rằng âm nhạc là con số và vũ trụ vận hành theo tỉ lệ hoà âm; Boethius (thế kỷ 6) chia âm nhạc thành ba loại — vũ trụ, con người, nhạc cụ; Kepler (1619) tìm các tỉ lệ hoà âm trong chuyển động của các hành tinh.',
    wiki: 'Musica_universalis',
    refs: [
      ['Wikipedia — Musica universalis', 'https://en.wikipedia.org/wiki/Musica_universalis'],
      ['Cambridge, Early Music History — Musica mundana, Aristotelian natural philosophy and Ptolemaic astronomy', 'https://www.cambridge.org/core/journals/early-music-history/article/musica-mundana-aristotelian-natural-philosophy-and-ptolemaic-astronomy/48778AB7DAA2FDF9323C3C62342D5533'],
      ['Wikipedia — De institutione musica', 'https://en.wikipedia.org/wiki/De_institutione_musica'],
      ['Wikipedia — Harmonices Mundi', 'https://en.wikipedia.org/wiki/Harmonices_Mundi'],
    ],
    body: `
## Pythagoras: âm nhạc là con số
Truyền thống Pythagoras gắn âm nhạc với **toán học**: [[cao-do|cao độ]] tỉ lệ nghịch với độ dài dây, và các quãng **thuận** ứng với **tỉ lệ số đơn giản** — [[quang|quãng 8]] là 2 : 1, quãng 5 là 3 : 2, quãng 4 là 4 : 3 (xem [[chuoi-boi-am]], [[luat-binh-quan]], [[thuan-nghich]]). Từ đó nảy sinh ý tưởng **musica universalis**: chuyển động của Mặt Trời, Mặt Trăng và các hành tinh cũng là một thứ "âm nhạc" theo những tỉ lệ ấy.

## Boethius: ba loại âm nhạc
Trong *De institutione musica* (đầu thế kỷ 6), **Boethius** dựa trên ý tưởng Pythagoras và chia âm nhạc thành ba loại:
| Loại | Ý nghĩa |
|---|---|
| **Musica mundana** | "Âm nhạc của vũ trụ": trật tự của các thiên thể, sự kết hợp các nguyên tố, sự luân chuyển các mùa |
| **Musica humana** | "Âm nhạc của con người": sự hoà hợp giữa thân thể và linh hồn |
| **Musica instrumentalis** | Âm nhạc **nghe được**, do giọng hát và nhạc cụ tạo ra |
Điều đáng chú ý với người hiện đại: âm nhạc **nghe được** chỉ là loại **thấp nhất** — biểu hiện bên ngoài của một trật tự sâu hơn. Sách của Boethius là giáo trình âm nhạc chuẩn suốt [[thoi-ky-trung-co|Trung cổ]]; âm nhạc thuộc **bốn môn toán học** (quadrivium) cùng số học, hình học và thiên văn.

## Kepler: Harmonices Mundi (1619)
Nhà thiên văn **Johannes Kepler** xuất bản *Harmonices Mundi* (Hoà âm của thế giới, 1619, năm quyển), tìm các tỉ lệ hoà âm trong **vận tốc** của các hành tinh. Khác với quan niệm cũ, Kepler **không** cho rằng "âm nhạc" này nghe được bằng tai — chỉ có thể "nghe" bằng tâm hồn. Chính trong công trình này ông nêu định luật thứ ba về chuyển động hành tinh.

## Ý nghĩa ngày nay
- Ý tưởng rằng cái đẹp âm nhạc gắn với **tỉ lệ** và **trật tự** vẫn sống trong các cách giải thích thuận – nghịch bằng tỉ lệ [[am-hoc-co-ban|tần số]] (xem [[cam-nhan-am-thanh]] để thấy giới hạn của cách giải thích này).
- Nhà soạn nhạc [[paul-hindemith|Paul Hindemith]] viết opera *Die Harmonie der Welt* về Kepler.
Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'nhac-trong-tu-tuong-nho-gia',
    title: 'Nhạc trong tư tưởng Nho gia',
    category: 'philosophy',
    aliases: ['Nhạc ký', 'Yueji', 'Record of Music', 'lễ nhạc', 'lễ và nhạc', 'Tuân Tử', 'Nhạc luận', 'Xunzi', 'Kinh Lễ', 'Lễ ký'],
    summary: 'Trong tư tưởng Nho gia, nhạc gắn với lễ, với tu dưỡng bản thân và trị quốc. Hai văn bản tiêu biểu: Nhạc ký (chương 19 của Lễ ký) và thiên Nhạc luận của Tuân Tử.',
    wiki: 'Record_of_Music',
    refs: [
      ['Wikipedia — Record of Music (Yueji)', 'https://en.wikipedia.org/wiki/Record_of_Music'],
      ['Diversity Reading List — Yue Ji: Record of Music, introduction, translation, notes and commentary', 'https://diversityreadinglist.org/yue-ji-%E6%A8%82%E8%A8%98-record-of-music-introduction-translation-notes-and-commentary/'],
      ['SOAS — The discourse on music of the Lüshi chunqiu compared with the "Yuelun" of the Xunzi', 'https://library.soas.ac.uk/Record/eprints-13533'],
      ["Università Ca' Foscari — thesis on Xunzi's Yuelun (PDF)", 'https://unitesi.unive.it/retrieve/c1b80a5b-4408-4075-9b05-9045562e797f/841625-1219985.pdf'],
    ],
    body: `
Song song với thuyết ethos Hy Lạp, tư tưởng Trung Hoa cổ đại — vốn ảnh hưởng lâu dài đến Việt Nam — cũng coi âm nhạc là một **sức mạnh đạo đức và chính trị**.

## Nhạc ký
- **Nhạc ký** (樂記, *Yueji*) là **chương 19 của Lễ ký** (Kinh Lễ). Kinh Nhạc (một trong sáu kinh) đã thất truyền, nên Nhạc ký là cơ sở chính để hình dung nội dung của nó.
- Tác giả và niên đại **không chắc chắn**: văn bản được biên soạn từ nhiều nguồn, muộn nhất vào khoảng giữa đời Tây Hán; việc gán cho Công Tôn Ni Tử còn bị tranh luận.
- Nội dung chủ yếu mang tư tưởng **Nho gia** về mối liên hệ giữa âm nhạc, **tu dưỡng bản thân**, **trị quốc** và các quy luật tự nhiên. Văn bản mở đầu bằng ý: âm thanh nảy sinh từ **lòng người** khi tâm cảm động trước sự vật.
- Nhạc ký đặt **nhạc** bên cạnh **lễ**: lễ phân biệt (thứ bậc, vai trò), nhạc hoà hợp (gắn kết con người). Một xã hội tốt cần cả hai.

## Tuân Tử — Nhạc luận
- Thiên **Nhạc luận** (樂論, *Yuelun*) trong sách *Tuân Tử* là một trong những văn bản cổ nhất của Trung Hoa bàn riêng về âm nhạc.
- Tuân Tử coi âm nhạc là nguyên lý **hoà hợp và cân bằng**, điều mà cảm xúc con người không thể thiếu, và là công cụ để giữ trật tự xã hội.
- Chữ **樂** đọc là *yue* nghĩa là "nhạc", đọc là *le* nghĩa là "vui". Các học giả còn bàn luận mối liên hệ giữa hai nghĩa này trong văn bản.

## So sánh với Hy Lạp
| | Hy Lạp (Plato, Aristotle) | Nho gia (Nhạc ký, Tuân Tử) |
|---|---|---|
| Âm nhạc tác động đến | Tính cách cá nhân và thể chế thành bang | Tâm tính cá nhân và trật tự xã hội |
| Hệ quả | Kiểm soát loại nhạc được dạy | Âm nhạc chuẩn mực đi đôi với lễ |
| Âm nhạc "xấu" | Các điệu bị coi là uỷ mị | Nhạc dâm dật làm loạn lòng người |
Hai truyền thống độc lập nhưng cùng đặt âm nhạc vào trung tâm của **giáo dục con người** (xem [[thuyet-ethos-hy-lap]]).
`,
  },
  {
    slug: 'tranh-luan-rameau-rousseau',
    title: 'Tranh luận Rameau – Rousseau',
    category: 'philosophy',
    aliases: ['Querelle des Bouffons', 'tranh luận Bouffons', 'Rameau và Rousseau', 'giai điệu hay hoà âm', 'Lettre sur la musique française', 'La serva padrona'],
    summary: 'Cuộc tranh luận lớn ở Paris thập niên 1750: Rousseau đề cao giai điệu và opera Ý, Rameau bảo vệ hoà âm như nền tảng của âm nhạc. "Cuộc chiến các Bouffons" (1752) và câu hỏi giai điệu hay hoà âm đi trước.',
    wiki: 'Querelle_des_Bouffons',
    refs: [
      ['Larousse — Querelle des Bouffons', 'https://www.larousse.fr/encyclopedie/divers/querelle_des_Bouffons/183470'],
      ['Schubertiade Music — Rousseau, Lettre sur la musique françoise (1753) and replies', 'https://www.schubertiademusic.com/products/11977-querelle-des-bouffons-rousseau-jean-jacques-1712-1778-lettre-sur-la-musique-francoise-together-with-elie-catherine-freron-lettres-sur-la-musique-francoise-en-reponse-a-celle-de-jean-jacques-rousseau-and-n-de-caux-de-cappeval'],
      ["Unicamp — Music under Rousseau's critical perspective: an analysis of the Letter on French music", 'https://www.repositorio.unicamp.br/acervo/detalhe/434398'],
      ['Wikipedia — Querelle des Bouffons', 'https://en.wikipedia.org/wiki/Querelle_des_Bouffons'],
      ['Wikipedia — Treatise on Harmony (Rameau, 1722)', 'https://en.wikipedia.org/wiki/Treatise_on_Harmony'],
    ],
    body: `
## Bối cảnh: hai lý thuyết gia, hai quan niệm
- **[[jean-philippe-rameau|Jean-Philippe Rameau]]**: nhà soạn nhạc opera Pháp hàng đầu và tác giả *Traité de l'harmonie* (1722) — lý thuyết **bè trầm gốc** coi **hoà âm** là nền tảng tự nhiên của âm nhạc (xem [[he-thong-hoa-am-co-dien]]).
- **Jean-Jacques Rousseau**: triết gia, cũng là nhà soạn nhạc; tin rằng âm nhạc bắt nguồn từ **lời nói và đam mê**, nên **[[giai-dieu|giai điệu]]** mới là cốt lõi.

## Cuộc chiến các Bouffons (1752–1754)
- Ngày **1/8/1752**, đoàn hát Ý của Eustachio Bambini (các "Bouffons") diễn *La serva padrona* của **Pergolesi** ở Paris. Sự kiện châm ngòi cho một cuộc bút chiến, dù gốc rễ là sự bất mãn rộng hơn với opera Pháp và sự kiểm soát của triều đình.
- Hai phe được gọi là **"góc nhà vua"** (ủng hộ opera Pháp) và **"góc hoàng hậu"** (ủng hộ opera Ý).
- Cuối năm **1753**, Rousseau công bố *Lettre sur la musique française* — một lời **lên án** nhạc hát Pháp: chê hát nói (recitative) của Rameau thiếu tự nhiên so với Ý; chê hợp xướng, hoà âm và phối khí quá dày, quá nhiều [[doi-am|đối âm]]; thậm chí cho rằng **tiếng Pháp** không hợp để phổ nhạc.
- Rameau đáp lại bằng *Erreurs sur la musique dans l'Encyclopédie* (1755), phản bác các mục về âm nhạc Rousseau viết cho Bách khoa thư.

## Câu hỏi triết học: giai điệu hay hoà âm?
| | Rousseau | Rameau |
|---|---|---|
| Gốc của âm nhạc | Lời nói, đam mê, **giai điệu** | Quy luật tự nhiên của âm thanh, **hoà âm** |
| Vẻ đẹp nằm ở | Giai điệu biểu cảm, đơn giản | Cấu trúc hoà âm và sự phong phú |
| Mô hình lý tưởng | Opera Ý | Opera Pháp |
Các nhà bình luận thường đọc cuộc tranh luận như **người hiện đại đối đầu người cổ**, và cả như một cuộc tranh luận **chính trị**: opera Pháp vốn gắn với vinh quang của nhà vua. Về sau, trong *Pygmalion* (1770), Rousseau thử một [[hinh-thuc-am-nhac|hình thức]] mà lời và nhạc **nối tiếp nhau** thay vì đi cùng nhau.

## Vì sao còn quan trọng?
Câu hỏi "giai điệu hay hoà âm đi trước" vẫn hiện diện trong cách dạy: dạy phối hoà âm từ giai điệu ([[phoi-hoa-am-giai-dieu]]) hay từ bè trầm ([[bass-so]], [[luoc-do-galant]])? Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'triet-hoc-lang-man-ve-am-nhac',
    title: 'Triết học Lãng mạn về âm nhạc',
    category: 'philosophy',
    aliases: ['Schopenhauer về âm nhạc', 'Nietzsche về âm nhạc', 'E. T. A. Hoffmann', 'Sự ra đời của bi kịch', 'Apollo và Dionysos', 'Thế giới như là ý chí và biểu tượng', 'âm nhạc là nghệ thuật cao nhất'],
    summary: 'Đầu thế kỷ 19, nhạc khí nhạc được tôn lên thành nghệ thuật cao nhất: E. T. A. Hoffmann (1810) coi nó là nghệ thuật "lãng mạn nhất", Schopenhauer (1819) coi nó là bản sao trực tiếp của ý chí, Nietzsche (1872) đặt âm nhạc ở gốc của bi kịch.',
    wiki: 'Romantic_music',
    refs: [
      ['Revista USP — E. T. A. Hoffmann and the instrumental music of Beethoven', 'https://revistas.usp.br/ls/en/article/view/64572'],
      ["Project MUSE — on Hoffmann's Beethoven review", 'https://muse.jhu.edu/article/370100'],
      ['Revista USP — Music as will and representation (Schopenhauer)', 'https://revistas.usp.br/filosofiaalema/en/article/view/64820'],
      ['That Which — Schopenhauer on music: a "copy of the will itself"', 'https://that-which.com/?p=1118'],
      ['Britannica — The Birth of Tragedy', 'https://britannica.com/topic/The-Birth-of-Tragedy'],
      ['Wikipedia — Arthur Schopenhauer', 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer'],
    ],
    body: `
Trong thế kỷ 18, nhạc không lời thường bị coi **kém** nhạc có lời, vì "không nói được gì". Khoảng năm 1800, quan niệm này **đảo ngược**: chính vì không bị ràng buộc vào lời và khái niệm, nhạc khí nhạc được coi là nghệ thuật **cao nhất**.

## E. T. A. Hoffmann (1810)
- Nhà văn, nhà soạn nhạc **E. T. A. Hoffmann** viết bài phê bình **[[the-loai|Giao hưởng]] số 5** của [[Beethoven]] trên tờ *Allgemeine musikalische Zeitung* (tháng 7/1810), sau khi nhận tổng phổ năm 1809 — không rõ ông đã từng nghe tác phẩm được biểu diễn chưa.
- Phần mở đầu bài viết là cả một **lý thuyết âm nhạc [[thoi-ky-lang-man|Lãng mạn]]**: nhạc khí nhạc, thoát khỏi thơ ca, là nghệ thuật **lãng mạn nhất** vì đối tượng của nó là **cái vô hạn**; Beethoven là nhà soạn nhạc Lãng mạn tột bậc, âm nhạc của ông đánh thức **nỗi khát khao vô tận**.
- Bài viết ảnh hưởng đến thẩm mỹ âm nhạc nhiều thế hệ sau.

## Schopenhauer (1819)
- Trong *Thế giới như là ý chí và biểu tượng* (1819), **Arthur Schopenhauer** cho rằng thế giới ta thấy là **biểu tượng** (hiện tượng), còn bản chất bên trong là **ý chí** — một sức đẩy mù quáng.
- Các nghệ thuật khác trình bày các "Ý niệm" qua đó ý chí hiện ra; riêng **âm nhạc** là **bản sao trực tiếp của chính ý chí**, "trực tiếp như chính thế giới". Vì thế âm nhạc đứng **trên** mọi nghệ thuật khác.
- Tư tưởng này ảnh hưởng mạnh đến [[Wagner]] và [[gustav-mahler|Mahler]].

## Nietzsche (1872)
- *Sự ra đời của bi kịch từ tinh thần âm nhạc* (1872) của **Friedrich Nietzsche** cho rằng bi kịch Hy Lạp nảy sinh từ sự kết hợp hai xung lực: **Apollo** (chừng mực, hài hoà, [[hinh-thuc-am-nhac|hình thức]]) và **Dionysos** (đam mê không kiềm chế, say sưa). Âm nhạc là trung tâm của xung lực Dionysos.
- Sách chịu ảnh hưởng của Schopenhauer và lòng ngưỡng mộ âm nhạc Wagner, kết thúc bằng hy vọng bi kịch **tái sinh từ âm nhạc của Wagner**. (Về sau Nietzsche quay ra phê phán Wagner.)

## Ảnh hưởng và phản ứng
- Quan niệm "âm nhạc biểu hiện điều không lời nào nói được" chi phối cách nghe và cách viết về nhạc thế kỷ 19.
- Phản ứng mạnh nhất đến từ **Hanslick** (1854), người cho rằng nội dung của âm nhạc chỉ là **hình thức âm thanh chuyển động** — xem [[am-nhac-tuyet-doi]].
Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'am-nhac-tuyet-doi',
    title: 'Âm nhạc tuyệt đối và âm nhạc chương trình',
    category: 'philosophy',
    aliases: ['âm nhạc tuyệt đối', 'absolute music', 'absolute Musik', 'âm nhạc chương trình', 'program music', 'nhạc tiêu đề', 'Hanslick', 'Vom Musikalisch-Schönen', 'tönend bewegte Formen', 'chủ nghĩa hình thức', 'formalism', 'thơ giao hưởng', 'symphonic poem'],
    summary: 'Tranh luận lớn của thế kỷ 19: âm nhạc có nên kể chuyện, vẽ cảnh (nhạc chương trình — Berlioz, Liszt) hay vẻ đẹp của nó nằm trọn trong hình thức âm thanh (Hanslick, 1854)? Thuật ngữ "âm nhạc tuyệt đối" do Wagner đặt năm 1846 — với nghĩa chê.',
    wiki: 'Absolute_music',
    refs: [
      ['Internet Encyclopedia of Philosophy — Eduard Hanslick', 'https://iep.utm.edu/hanslick/'],
      ['Oxford Academic — Bonds, Absolute Music: The History of an Idea (2014)', 'https://academic.oup.com/book/1839/chapter/141562596'],
      ['Cambridge — Grey, Wagner and the problematics of absolute music in the nineteenth century', 'https://www.cambridge.org/core/books/wagners-musical-prose/wagner-and-the-problematics-of-absolute-music-in-the-nineteenth-century/A78C27AF3E18C134F85DB24141C7B633'],
      ['Royal Holloway — Mark Berry: Franz Liszt, symphonic poems', 'https://www.royalholloway.ac.uk/research-and-education/subjects/music/about-us/teacherhubmusic/franz-liszt-symphonic-poems'],
      ['Musikforschung — Dahlhaus on "tönend bewegte Formen" (PDF)', 'https://mf.journals.qucosa.de/mf/article/download/2239/360/362'],
      ['Wikipedia — Program music', 'https://en.wikipedia.org/wiki/Program_music'],
    ],
    body: `
## Hai quan niệm
| | Âm nhạc chương trình | Âm nhạc tuyệt đối |
|---|---|---|
| Ý tưởng | Âm nhạc gắn với một **nội dung ngoài âm nhạc**: câu chuyện, bài thơ, cảnh vật, nhân vật | Âm nhạc **không cần** và **không nên** dựa vào nội dung ngoài âm nhạc |
| Ví dụ | [[the-loai|Giao hưởng]] *Đồng quê* ([[ludwig-van-beethoven|Beethoven]]), *Symphonie fantastique* ([[hector-berlioz|Berlioz]]), các **thơ giao hưởng** của [[franz-liszt|Liszt]] | [[hinh-thuc-sonata|Sonata]], giao hưởng, tứ tấu không tiêu đề; [[johannes-brahms|Brahms]] thường được nêu làm đại diện |

## Lịch sử của một thuật ngữ
- **[[richard-wagner|Wagner]]** đặt ra cụm từ **"âm nhạc tuyệt đối"** năm **1846**, trong lời giới thiệu chương trình cho buổi diễn Giao hưởng số 9 của Beethoven ở Dresden: đoạn hát nói của nhạc cụ trong chương cuối "**vượt qua ranh giới của âm nhạc tuyệt đối**". Ông dùng thuật ngữ với nghĩa **chê**, để cho thấy giới hạn của nhạc thuần khí nhạc — theo Mark Evan Bonds, đó là một "hình nhân rơm" Wagner dựng lên để bác bỏ.
- **Liszt** sáng tạo thể loại **thơ giao hưởng**: mười hai bản đầu viết trong khoảng 1847–1858; *Les Préludes* là tác phẩm đầu tiên được gọi bằng tên này. Các tác phẩm này nuôi cuộc tranh luận về giá trị của nhạc chương trình (xem [[bien-doi-chu-de]]).

## Hanslick: Về cái đẹp trong âm nhạc (1854)
- Nhà phê bình Vienna **Eduard Hanslick** xuất bản *Vom Musikalisch-Schönen* (Về cái đẹp trong âm nhạc) năm **1854**; sách được tái bản **mười lần** khi ông còn sống, và ông thường được coi là **người sáng lập chủ nghĩa hình thức** trong mỹ học âm nhạc.
- Câu nổi tiếng nhất: nội dung của âm nhạc là **"những [[hinh-thuc-am-nhac|hình thức]] âm thanh chuyển động"** (*tönend bewegte Formen*). Hanslick bác bỏ quan niệm cho rằng mục đích của âm nhạc là **biểu hiện hay gợi cảm xúc**; vẻ đẹp âm nhạc nằm trong chính cấu trúc âm thanh.
- Carl Dahlhaus lưu ý câu nói này cần đọc như một **luận điểm tranh luận** — nhằm chống lại mỹ học cảm xúc của thế kỷ 18 (như của Schubart) — chứ không phải định nghĩa đầy đủ về âm nhạc.
- Hanslick chấp nhận chính sự **tách biệt** khỏi nội dung mà Wagner chê, coi đó là bảo đảm cho sự **thuần khiết** của âm nhạc.

## Cuộc tranh luận ngày nay
- Phần lớn các nhà triết học hiện đại không còn chọn một trong hai cực: nhạc không lời vẫn có thể được nghe là **biểu cảm** (xem [[bieu-hien-cam-xuc-am-nhac]]), và nhạc chương trình vẫn phải **thuyết phục về mặt âm nhạc**.
- Với người dạy: khi một tiểu phẩm có tên gợi hình (như *Cảnh tuổi thơ* của [[robert-schumann|Schumann]] — xem [[phan-tich-traumerei]]), tên gọi có thể là **gợi ý** cho cách chơi; Schumann tự nói các tên chỉ là "gợi ý tinh tế".
Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'dinh-nghia-am-nhac',
    title: 'Âm nhạc là gì?',
    category: 'philosophy',
    aliases: ['định nghĩa âm nhạc', 'âm nhạc là gì', 'what is music', 'organized sound', 'âm thanh có tổ chức', '4\'33"', '4 phút 33 giây', 'Varèse', 'im lặng trong âm nhạc'],
    summary: 'Câu hỏi tưởng đơn giản nhưng khó: âm nhạc có cần cao độ, giai điệu, nhạc sĩ, ý định? Từ "âm thanh có tổ chức" của Varèse đến tác phẩm 4\'33" của John Cage (1952) — một thử nghiệm buộc người nghe xem lại ranh giới của âm nhạc.',
    wiki: 'Music',
    refs: [
      ['Stanford Encyclopedia of Philosophy — The Philosophy of Music (Kania)', 'https://plato.stanford.edu/entries/music/'],
      ['YourClassical — Composers Datebook: John Cage at Woodstock (29/8/1952)', 'https://yourclassical.org/episode/2019/08/29/john-cage-at-woodstock'],
      ['Wikipedia — 4′33″', 'https://en.wikipedia.org/wiki/4%E2%80%B233%E2%80%B3'],
      ['Presto Music — Edgard Varèse (biography)', 'https://www.prestomusic.com/classical/composers/2080--varese'],
      ['Wikipedia — Jerrold Levinson', 'https://en.wikipedia.org/wiki/Jerrold_Levinson'],
    ],
    body: `
## Vì sao khó định nghĩa?
Một định nghĩa tốt phải bao quát **mọi** thứ ta gọi là âm nhạc — từ thánh ca, nhạc gamelan, rap đến nhạc điện tử — và **loại ra** những thứ không phải (tiếng xe cộ, tiếng nói thường). Các tiêu chí quen thuộc đều gặp phản ví dụ:
| Tiêu chí | Phản ví dụ |
|---|---|
| Có **[[cao-do|cao độ]]**, [[giai-dieu|giai điệu]] | Nhạc cho trống; [[am-cum|âm cụm]]; nhạc ồn |
| Do **nhạc cụ** tạo ra | Tiếng thu âm từ môi trường, nhạc điện tử |
| Có **[[kiem-soat-toc-do|nhịp đều]]** | Thánh ca Gregorian, nhiều nhạc [[thoi-ky-the-ky-20|thế kỷ 20]] |
| **Dễ nghe**, đẹp | Nhiều tác phẩm cố tình gây khó chịu |
Vì vậy các triết gia (như Jerrold Levinson, trong tuyển tập *Music, Art, and Metaphysics*, 1990) thường định nghĩa âm nhạc qua **ý định** và **cách nghe**: âm thanh được **tổ chức có chủ ý** để được **nghe như âm nhạc** — thay vì qua các đặc điểm vật lý.

## Varèse: "âm thanh có tổ chức"
Nhà soạn nhạc **[[edgard-varese|Edgard Varèse]]** dùng cụm từ **"âm thanh có tổ chức"** (organized sound) để mô tả thẩm mỹ của mình. Ông cho rằng với những đôi tai quen nếp, mọi cái mới trong âm nhạc đều từng bị gọi là **tiếng ồn**, và hỏi ngược lại: âm nhạc là gì nếu không phải là **những tiếng ồn có tổ chức**?

## Cage: 4′33″ (1952)
- Ngày **29/8/1952**, trong một nhà kho được cải tạo ở **Woodstock** (New York), nghệ sĩ piano **David Tudor** công diễn lần đầu tác phẩm *4′33″* của **[[john-cage|John Cage]]**.
- Tudor **không chơi nốt nào**: ông đóng nắp phím để báo bắt đầu mỗi phần, chờ đúng thời lượng, rồi mở nắp để báo kết thúc.
- "Nội dung" của tác phẩm là **mọi âm thanh xảy ra** trong khoảng thời gian đó — tiếng gió, tiếng mưa, tiếng khán giả thở, ho, cười.
- Theo Cage, tác phẩm **không phải về sự im lặng**: âm nhạc diễn ra liên tục, chỉ có ta quay lưng lại với nó.

## Hai câu trả lời ngược chiều
- **Varèse** mở rộng âm nhạc: **mọi âm thanh**, kể cả tiếng ồn, có thể thành âm nhạc **nếu được nhà soạn nhạc tổ chức**.
- **Cage** đi xa hơn: bỏ cả việc tổ chức của nhà soạn nhạc, chỉ giữ một **khung thời gian** và **cách nghe**.
Câu hỏi để lại cho người học: âm nhạc nằm ở **âm thanh**, ở **ý định** của người tạo ra, hay ở **cách nghe** của người nghe?

## Gợi ý dạy học
Cho học trò ngồi yên 1–2 phút và ghi lại mọi âm thanh nghe được, rồi thảo luận: điều gì khiến ta nghe một âm thanh **như âm nhạc**? Bài tập này kết nối với [[nghe-nhac-chu-dong]]. Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'bieu-hien-cam-xuc-am-nhac',
    title: 'Âm nhạc biểu hiện cảm xúc như thế nào?',
    category: 'philosophy',
    aliases: ['biểu hiện cảm xúc', 'musical expression', 'expressiveness', 'thuyết khơi gợi', 'arousal theory', 'thuyết đường nét', 'contour theory', 'Kivy', 'Corded Shell', 'Stephen Davies', 'Levinson persona', 'thuyết nhân vật', 'appearance emotionalism'],
    summary: 'Âm thanh không có cảm xúc, vậy nói "nhạc buồn" nghĩa là gì? Bốn câu trả lời chính của triết học hiện đại: nhạc gợi cảm xúc ở người nghe; nhạc giống dáng vẻ của người đang có cảm xúc (Kivy, Davies); nhạc được nghe như lời của một "nhân vật" tưởng tượng (Levinson); và chủ nghĩa hình thức.',
    refs: [
      ['Stanford Encyclopedia of Philosophy — The Philosophy of Music (Kania)', 'https://plato.stanford.edu/entries/music/'],
      ['Music and Philosophy — retrospective review of Kivy, The Corded Shell (1980)', 'https://musicandphilosophy.ac.uk/retrospective-reviews/peter-kivy-the-corded-shell-1980/'],
      ['Temple University Press — Kivy, Sound Sentiment (1989)', 'https://alt.library.temple.edu/tupress/titles/650_reg.html'],
      ['Research Catalogue — Stephen Davies: the contagion theory', 'https://www.researchcatalogue.net/view/2363354/2363396'],
      ['Debates in Aesthetics — Stephen Davies', 'https://debatesinaesthetics.org/?p=167'],
      ['Internet Encyclopedia of Philosophy — Eduard Hanslick', 'https://iep.utm.edu/hanslick/'],
    ],
    body: `
## Câu đố
Ta nói một [[cau-nhac|đoạn nhạc]] "buồn" một cách rất tự nhiên. Nhưng **âm thanh không có tâm trạng**; người soạn có thể không buồn khi viết; người nghe có thể không buồn khi nghe. Vậy "buồn" ở đâu? (Phần thực nghiệm — người nghe thực sự cảm thấy gì — xem [[cam-xuc-am-nhac]].)

## Bốn câu trả lời
| Lý thuyết | Ý chính | Đại diện | Phê phán thường gặp |
|---|---|---|---|
| **Khơi gợi** (arousal) | Nhạc buồn là nhạc **làm người nghe phù hợp cảm thấy buồn** | Truyền thống lâu đời | Ta nhận ra nhạc buồn mà không cần buồn; nhạc buồn lại thường khiến ta thích thú |
| **Đường nét / giống dáng vẻ** (contour, appearance emotionalism) | Nhạc buồn vì **dáng điệu** của nó (chậm, đi xuống, yếu) **giống** dáng vẻ bên ngoài của người buồn; buồn là **một phẩm chất của âm nhạc**, không phải sức tác động của nó | Peter Kivy (*The Corded Shell*, 1980); Stephen Davies | Ta có thể nghe biểu cảm cả ở những chỗ không giống hành vi con người nào |
| **Nhân vật tưởng tượng** (persona) | Một đoạn nhạc biểu hiện nỗi buồn khi người nghe có kinh nghiệm **dễ dàng nghe nó như** lời bày tỏ nỗi buồn của một **nhân vật** tưởng tượng | Jerrold Levinson | Không phải ai cũng nghe thấy "nhân vật" |
| **[[hinh-thuc-am-nhac|Hình thức]]** (formalism) | Cảm xúc không phải nội dung của âm nhạc; nội dung là hình thức âm thanh chuyển động | Eduard [[am-nhac-tuyet-doi|Hanslick]] (1854) | Khó giải thích vì sao ta mô tả nhạc bằng từ cảm xúc tự nhiên đến vậy |

## Chi tiết hơn
- **Kivy** cho rằng nỗi buồn là **phẩm chất của âm nhạc**, không phải năng lực của âm nhạc làm gì đó với người nghe. Ông liên hệ mô hình của mình với phong cách hát của nhóm Camerata Florence quanh năm 1600 — âm nhạc như "bản đồ âm thanh" của cơ thể đang mang cảm xúc. *Sound Sentiment* (1989) tái bản toàn văn *The Corded Shell* kèm các chương trả lời phê bình.
- **Davies**: âm nhạc biểu cảm vì **cấu trúc động** của nó giống những dáng điệu gắn với biểu hiện cảm xúc của con người; tính biểu cảm được **nghe trực tiếp**, không phải suy ra. Khi người nghe cũng buồn theo, đó là một dạng **lây lan** cảm xúc — gần với cơ chế "lây lan cảm xúc" trong mô hình tâm lý học của Juslin (xem [[cam-xuc-am-nhac]]).
- Một số học giả (David Collins) cho rằng lập trường của Davies và của Levinson, hiểu theo một cách nhất định, **không thực sự đối lập**.

## Ứng dụng khi dạy
- Khi yêu cầu học trò chơi "buồn hơn", hãy **chuyển thành đặc điểm âm thanh** mà các lý thuyết "đường nét" gợi ý: chậm hơn, nhẹ hơn, liền tiếng hơn, câu nhạc rủ xuống ở cuối (xem [[dien-dat-cau-nhac]]).
- Gợi hình ảnh một "nhân vật" (theo Levinson) cũng là cách nhiều giáo viên giúp học trò tìm tính cách cho đoạn nhạc.
Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'y-nghia-am-nhac',
    title: 'Ý nghĩa trong âm nhạc',
    category: 'philosophy',
    aliases: ['ý nghĩa âm nhạc', 'musical meaning', 'ký hiệu học âm nhạc', 'music semiotics', 'Langer', 'Philosophy in a New Key', 'Nattiez', 'ba cấp độ', 'tripartition', 'poietic', 'esthesic', 'cấp độ trung tính'],
    summary: 'Âm nhạc có "nói" điều gì không? Susanne Langer (1942) coi âm nhạc là biểu tượng của "hình thức của cảm xúc"; Jean-Jacques Nattiez phân biệt ba cấp độ: sáng tạo, tác phẩm và tiếp nhận. Cùng với lý thuyết kỳ vọng của Meyer, đây là ba cách nhìn về ý nghĩa âm nhạc.',
    wiki: 'Musical_semantics',
    refs: [
      ['Wikipedia — Philosophy in a New Key', 'https://en.wikipedia.org/wiki/Philosophy_in_a_New_Key'],
      ['Philopedia — Susanne Langer', 'https://philopedia.org/thinkers/susanne-katherina-langer/'],
      ['Wikipedia — Esthesic and poietic', 'https://en.wikipedia.org/wiki/Esthesic_and_poietic'],
      ['Wikipedia — Neutral level', 'https://en.wikipedia.org/wiki/Neutral_level'],
      ['Universalis — Analyse et sémiologie musicales: la conception tripartite', 'https://www.universalis.fr/encyclopedie/analyse-et-semiologie-musicales/4-la-conception-tripartite-de-la-semiologie-musicale/'],
      ['Stellenbosch University — Density 21.5 by Varèse: the value of semiology in music analysis', 'https://scholar.sun.ac.za:443/handle/10019.1/55037'],
    ],
    body: `
## Âm nhạc có phải là một ngôn ngữ?
Âm nhạc có **cú pháp** (các quy luật kết hợp — xem [[chuc-nang-hoa-am]]) nhưng **không có từ vựng** chỉ định sự vật như ngôn ngữ. Các lý thuyết về ý nghĩa âm nhạc tìm cách giải thích điều đó.

## Susanne Langer: biểu tượng của cảm xúc
- Trong *Philosophy in a New Key* (1942; có nguồn ghi 1941), **Susanne Langer** phân biệt hai loại biểu tượng: **biểu tượng diễn ngôn** (ngôn ngữ, nói về sự vật theo trình tự) và **biểu tượng trình hiện** (như hình ảnh, âm nhạc — được nắm bắt như một tổng thể).
- Âm nhạc không phải bản báo cáo cảm xúc của nhà soạn nhạc; nó có **cùng hình dạng** với đời sống cảm xúc — căng và chùng, dâng lên và lắng xuống — nên biểu hiện **[[hinh-thuc-am-nhac|hình thức]] của cảm xúc** chứ không phải một cảm xúc cụ thể.
- Bà phát triển ý tưởng này cho mọi nghệ thuật trong *Feeling and Form* (1953).

## Nattiez: ba cấp độ
Lý thuyết **ba cấp độ** do Jean Molino đề xuất và **Jean-Jacques Nattiez** phát triển trong ký hiệu học âm nhạc:
| Cấp độ | Nội dung | Câu hỏi phân tích |
|---|---|---|
| **Sáng tạo** (poietic) | Quá trình nhà soạn nhạc tạo ra tác phẩm | Tác giả nghĩ gì, làm thế nào? |
| **Trung tính** (neutral) | "Dấu vết" vật chất: bản nhạc, âm thanh | Trong bản nhạc có gì? |
| **Tiếp nhận** (esthesic) | Quá trình người nghe cảm nhận, hiểu | Người nghe nghe thấy gì? |
Nattiez bác bỏ mô hình đơn giản "người gửi – thông điệp – người nhận": tác phẩm không chỉ là trung gian truyền ý của tác giả đến khán giả; ý nghĩa được tạo ra ở **cả hai phía**, và hai phía **không nhất thiết trùng nhau**. Lý thuyết này có ích cho phân tích nhưng cũng bị phê bình là chưa chứng minh được quá trình tạo nghĩa cụ thể.

## Ba cách nhìn, so sánh
| | Ý nghĩa nằm ở đâu? |
|---|---|
| Langer | Ở **sự đồng dạng** giữa hình thức âm nhạc và hình thức cảm xúc |
| Meyer ([[ky-vong-am-nhac]]) | Ở quan hệ giữa các sự kiện âm nhạc: sự kiện này **gợi chờ đợi** sự kiện kia |
| Nattiez | Phân tán ở ba cấp độ: sáng tạo, trung tính, tiếp nhận |
Ngoài ra, [[ly-thuyet-chu-de|lý thuyết chủ đề biểu đạt]] cho thấy nhạc thế kỷ 18 có những "dấu hiệu" được quy ước xã hội — gần với nghĩa trong ngôn ngữ nhất.

## Với người dạy
Mô hình ba cấp độ nhắc rằng **ý định của tác giả**, **những gì trên bản nhạc** và **điều người nghe nghe thấy** là ba chuyện khác nhau — hữu ích khi bàn về "ý tác giả" (xem [[tinh-xac-thuc-bieu-dien]]). Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'ban-the-tac-pham-am-nhac',
    title: 'Tác phẩm âm nhạc tồn tại như thế nào?',
    category: 'philosophy',
    aliases: ['bản thể học âm nhạc', 'ontology of music', 'tác phẩm âm nhạc là gì', 'musical work', 'work-concept', 'khái niệm tác phẩm', 'Goehr', 'Levinson indicated structure', 'Goodman', 'nghệ thuật dị bản', 'allographic'],
    summary: 'Một bản sonata không phải là tờ giấy in nhạc, cũng không phải một lần biểu diễn. Vậy nó là gì? Các câu trả lời: lớp các lần biểu diễn đúng bản nhạc (Goodman), cấu trúc được chỉ định (Levinson), và quan điểm lịch sử của Lydia Goehr rằng "khái niệm tác phẩm" chỉ định hình khoảng năm 1800.',
    refs: [
      ['Stanford Encyclopedia of Philosophy — The Philosophy of Music (Kania)', 'https://plato.stanford.edu/entries/music/'],
      ['Wikipedia — Languages of Art (Goodman, 1968)', 'https://en.wikipedia.org/wiki/Languages_of_Art'],
      ['PhilArchive — Predelli, Goodman and the score / the wrong-note paradox', 'https://dc2.philarchive.org/rec/PREGAT'],
      ["Tanabe — on Levinson's indicated structures (Aesthetics Online, Japan)", 'https://www.bigakukai.jp/aesthetics_online/aesthetics_19/ab19/ab19_tanabekentaro.html'],
      ['Current Musicology — The musical work reconsidered, in hindsight (Goehr)', 'https://journals.library.columbia.edu/index.php/currentmusicology/article/view/5326'],
      ['Oxford — Goehr, The Imaginary Museum of Musical Works (1992; rev. 2007)', 'https://www.sack.de/goehr-the-imaginary-museum-of-musical-works/9780195324785'],
    ],
    body: `
## Câu hỏi
Khi nói "tôi đang tập **[[hinh-thuc-sonata|Sonata]] [[phan-tich-sonata-k545|K. 545]]**", ta nói về cái gì? Không phải tờ giấy (in thêm bản mới không tạo thêm tác phẩm); không phải một lần chơi (tác phẩm vẫn còn khi không ai chơi). Âm nhạc cổ điển phương Tây là nghệ thuật **"dị bản"** (allographic): tác phẩm tồn tại qua **nhiều lần thể hiện**, khác với một bức tranh chỉ có một bản gốc.

## Các câu trả lời chính
| Quan điểm | Tác phẩm là | Ưu điểm | Khó khăn |
|---|---|---|---|
| **Goodman** (*Languages of Art*, 1968) | **Lớp các lần biểu diễn tuân theo bản nhạc** | Tiêu chí rõ ràng: đúng bản nhạc thì là tác phẩm | Một nốt sai, nói chặt chẽ, là không còn là tác phẩm ("nghịch lý nốt sai") |
| **Thuyết Platon** ([[bieu-hien-cam-xuc-am-nhac|Kivy]] và những người khác) | Một **cấu trúc âm thanh trừu tượng**, tồn tại vĩnh viễn; nhà soạn nhạc **khám phá** chứ không tạo ra | Giải thích vì sao tác phẩm có thể có nhiều lần thể hiện | Trái với trực giác rằng nhà soạn nhạc **sáng tạo** |
| **Levinson** (1980) | **Cấu trúc được chỉ định**: cấu trúc âm thanh **và** phương tiện biểu diễn, được một nhà soạn nhạc chỉ định ở một **thời điểm lịch sử** | Tác phẩm được **tạo ra**; hai người viết cùng nốt ở hai thời điểm là hai tác phẩm | Có ý kiến phản đối việc coi **phối khí** là bắt buộc đối với danh tính tác phẩm |

## Goehr: khái niệm tác phẩm có lịch sử
**Lydia Goehr** (*The Imaginary Museum of Musical Works*, 1992) đặt câu hỏi khác: không phải "tác phẩm là gì" mà là **khi nào** người ta bắt đầu nghĩ âm nhạc theo cách đó. Theo bà, **khái niệm tác phẩm** — một sản phẩm hoàn chỉnh, cố định của một tác giả, được biểu diễn trung thành theo bản nhạc — **định hình rõ khoảng năm 1800**, rồi quy định chuẩn mực và kỳ vọng của thực hành âm nhạc cổ điển. Nhiều học giả giữ ý chính của Goehr nhưng cho rằng mốc thời gian nên **sớm hơn**.

## Vì sao điều này quan trọng với người chơi?
- Nếu tác phẩm chỉ là **nốt trên giấy** (gần Goodman), thì mọi quyết định về [[rubato|rubato]], [[am-sac|âm sắc]], [[ban-dap|pedal]] là "thêm vào". Nếu tác phẩm bao gồm cả **phương tiện và bối cảnh** (gần Levinson), thì [[phong-cach-dien-tau|chơi Bach trên piano]] đặt ra câu hỏi về sự trung thành (xem [[tinh-xac-thuc-bieu-dien]]).
- Quan điểm của Goehr giải thích vì sao nhạc **ngẫu hứng**, nhạc **jazz** hay nhiều truyền thống ngoài phương Tây không vừa với khuôn "tác phẩm" (xem [[ngau-hung-piano]], [[hoa-am-jazz]]).
Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'tinh-xac-thuc-bieu-dien',
    title: 'Tính xác thực trong biểu diễn',
    category: 'philosophy',
    aliases: ['tính xác thực', 'authenticity', 'biểu diễn xác thực', 'authentic performance', 'biểu diễn theo phong cách lịch sử', 'Taruskin', 'Text and Act', 'Kivy Authenticities', 'trung thành với tác giả'],
    summary: 'Thế nào là chơi "đúng" một tác phẩm? Phong trào biểu diễn theo phong cách lịch sử và hai tiếng nói lớn trong tranh luận: Taruskin (Text and Act, 1995) cho rằng đó là một phong cách hiện đại; Kivy (Authenticities, 1995) phân biệt bốn nghĩa của "xác thực".',
    wiki: 'Historically_informed_performance',
    refs: [
      ['Cageweb — Taruskin, Text and Act: Essays on Music and Performance (Oxford, 1995)', 'https://cageweb.be/catalog/orp01:000019254'],
      ['Musical Offerings / Performance Practice — review discussing Taruskin and HIP', 'https://scholars.unh.edu/mmp/vol1/iss6/7'],
      ['De Gruyter — Kivy, Authenticities: Philosophical Reflections on Musical Performance (Cornell, 1995)', 'https://www.degruyterbrill.com/document/doi/10.7591/9781501731631/html'],
      ["Claremont, Performance Practice Review — on Kivy's Authenticities", 'https://scholarship.claremont.edu/ppr/vol10/iss1/2/'],
      ['Wikipedia — Historically informed performance', 'https://en.wikipedia.org/wiki/Historically_informed_performance'],
    ],
    body: `
## Phong trào biểu diễn theo phong cách lịch sử
Từ giữa [[thoi-ky-the-ky-20|thế kỷ 20]], nhiều nghệ sĩ cố gắng chơi nhạc [[thoi-ky-baroque|Baroque]] và Cổ điển **như thời của nó**: nhạc cụ cổ ([[dan-phim-co|harpsichord]], fortepiano), [[cao-do|cao độ]] và cách lên dây cổ, cách trang trí và [[dien-tau|diễn tấu]] theo các khảo luận đương thời (xem [[phong-cach-dien-tau]], [[an-ban-urtext]], [[lich-su-piano]]). Phong trào từng mang tên **"biểu diễn xác thực"** (authentic performance) — và chính chữ "xác thực" gây tranh luận.

## Kivy: bốn nghĩa của "xác thực"
Trong *Authenticities* (1995), triết gia **Peter [[bieu-hien-cam-xuc-am-nhac|Kivy]]** phân biệt:
| Nghĩa | Trung thành với | Ví dụ |
|---|---|---|
| **Ý định** | Ý định, quan niệm của nhà soạn nhạc | Chơi theo cách tác giả muốn (nếu biết được) |
| **Âm thanh** | Âm thanh của buổi diễn thời đó | Dùng nhạc cụ, cao độ lịch sử |
| **Thực hành** | Quy ước biểu diễn thời đó | Trang trí, [[rubato|rubato]], tốc độ theo khảo luận |
| **"Xác thực khác"** | Chính người biểu diễn: sự **chân thành**, cách hiểu riêng | Một cách chơi mang dấu ấn cá nhân sâu sắc |
Sách chia hai phần: thế nào là xác thực (phân tích khái niệm), và **vì sao nên** xác thực (đánh giá). Các nghĩa có thể **mâu thuẫn**: chơi đúng âm thanh lịch sử chưa chắc là cách chơi chân thành nhất của người nghệ sĩ.

## Taruskin: "một phong cách hiện đại"
Trong các tiểu luận tập hợp ở *Text and Act* (1995), nhà âm nhạc học **Richard Taruskin** lập luận rằng phong trào nhạc cổ **không** phục dựng truyền thống xưa, mà là **phong cách biểu diễn thực sự hiện đại duy nhất** của thời nay — và có giá trị **chính vì thế**, chứ không phải vì giống quá khứ. Một bài đánh giá sau này cho rằng Taruskin nhận diện đúng động cơ của một nhóm nghệ sĩ nhưng đã **khái quát quá mức**, và quan điểm của ông có lúc trở thành "chính thống mới"; các học giả – nghệ sĩ như John Butt, Peter Walls vừa ngưỡng mộ vừa phản bác ông.

## Với người dạy piano
- Chơi Bach trên piano hiện đại: không thể "xác thực về âm thanh", nhưng vẫn có thể hướng tới **xác thực về thực hành** (cách trang trí, diễn tấu, tốc độ) và **xác thực cá nhân**.
- Câu "hãy tôn trọng ý tác giả" cần làm rõ: ý định nào, biết được qua đâu (bản thảo, ấn bản, khảo luận — xem [[an-ban-urtext]]), và còn chỗ cho cách hiểu của người chơi không?
- Đọc thêm: [[ban-the-tac-pham-am-nhac]] (tác phẩm là gì thì mới biết trung thành với cái gì). Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'phan-doan-tham-my',
    title: 'Phán đoán thẩm mỹ: cái đẹp và thị hiếu',
    category: 'philosophy',
    aliases: ['phán đoán thẩm mỹ', 'aesthetic judgment', 'thị hiếu', 'taste', 'cái đẹp', 'beauty', 'Kant về âm nhạc', 'Hume thị hiếu', 'Of the Standard of Taste', 'Phê phán năng lực phán đoán', 'nhà phê bình đích thực'],
    summary: 'Khen một bản nhạc hay là nói về bản nhạc hay về sở thích của mình? Hai câu trả lời kinh điển thế kỷ 18: Hume (1757) — chuẩn mực thị hiếu là phán xét của những "nhà phê bình đích thực"; Kant (1790) — phán đoán cái đẹp đòi hỏi sự đồng thuận phổ quát, và âm nhạc ở vị trí lưỡng lự giữa "đẹp" và "dễ chịu".',
    wiki: 'Aesthetic_judgment',
    refs: [
      ["PhilArchive — Teaching & learning guide: some questions in Hume's aesthetics", 'https://dc2.philarchive.org/rec/WILTL'],
      ["PhilPapers — Delicacy in Hume's theory of taste", 'https://api.philpapers.org/rec/GRADIH'],
      ["Revista Arete (PUCP) — Kant's aesthetics and the problem of aesthetic judgement in music", 'https://revistas.pucp.edu.pe/index.php/arete/en/article/view/26325'],
      ['UC Berkeley — Kant (Routledge Companion to Aesthetics), PDF', 'https://philosophy.berkeley.edu/file/512/Kant__for_Routledge_Companion.pdf'],
      ['Wikipedia — Of the Standard of Taste', 'https://en.wikipedia.org/wiki/Of_the_Standard_of_Taste'],
    ],
    body: `
## Câu hỏi
"Bản này hay" có phải chỉ là "tôi thích bản này"? Nếu chỉ là sở thích thì không thể tranh luận; nhưng thực tế ta vẫn tranh luận, vẫn dạy học trò phân biệt chơi hay và chơi chưa hay. Thế kỷ 18 để lại hai câu trả lời kinh điển.

## Hume: chuẩn mực của thị hiếu (1757)
- Trong *Of the Standard of Taste* (1757), **David Hume** thừa nhận thị hiếu rất khác nhau, nhưng cho rằng vẫn có **chuẩn mực**: phán xét chung của những **"nhà phê bình đích thực"**.
- Theo Hume, chỉ người có **lương tri vững vàng**, **cảm thụ tinh tế**, được **rèn qua thực hành**, hoàn thiện qua **so sánh**, và **không định kiến** mới xứng đáng với vai trò ấy.
- "Tinh tế" (delicacy) là phẩm chất được bàn cãi nhiều nhất: tinh tế của tri giác hay của trí tưởng tượng?
- Phê phán thường gặp: lập luận **vòng tròn** — nghệ thuật hay là thứ được nhà phê bình đích thực khen, còn nhà phê bình đích thực là người nhận ra nghệ thuật hay. Có học giả cho rằng Hume tránh được vòng tròn này.

## Kant: cái đẹp và cái dễ chịu (1790)
- Trong *Phê phán năng lực phán đoán* (1790), **Immanuel Kant** phân biệt cái **dễ chịu** (chỉ là cảm giác riêng, không đòi ai đồng ý) với cái **đẹp**: khi nói "đẹp", ta **đòi hỏi mọi người cũng đồng ý**, dù không thể chứng minh bằng khái niệm.
- **Âm nhạc** ở vị trí khó: Kant xếp nó **thấp** trong thang các nghệ thuật, có lúc coi nó gần với nghệ thuật **dễ chịu** hơn là nghệ thuật đẹp, có lúc gọi nó là **"trò chơi đẹp của các cảm giác"**. Các nhà nghiên cứu ngày nay vẫn tranh luận: một nghiên cứu cho rằng âm nhạc **có thể là cả hai**, tuỳ cách người nghe tiếp cận.

## So sánh
| | Hume | Kant |
|---|---|---|
| Tính phổ quát của phán đoán đến từ | Phán xét của những người có **năng lực được rèn luyện** | **Cấu trúc** của chính phán đoán thẩm mỹ |
| Vai trò của học tập | Trung tâm: thực hành, so sánh | Không phải nguồn gốc của tính phổ quát |

## Với người dạy
Năm phẩm chất của Hume — tinh tế, thực hành, so sánh, không định kiến, lương tri — gần như là **mục tiêu của giáo dục nghe**: luyện tai ([[luyen-tai]]), nghe nhiều và so sánh nhiều bản thu ([[so-sanh-ban-thu]]), mở lòng với phong cách lạ. Một phản biện khác về giá trị âm nhạc: [[adorno-va-am-nhac]]. Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
  {
    slug: 'adorno-va-am-nhac',
    title: 'Adorno và lý thuyết phê phán về âm nhạc',
    category: 'philosophy',
    aliases: ['Adorno', 'Theodor Adorno', 'công nghiệp văn hoá', 'culture industry', 'On Popular Music', 'chuẩn hoá', 'standardization', 'cá nhân hoá giả', 'pseudo-individualization', 'Triết học âm nhạc mới', 'Philosophy of New Music', 'trường phái Frankfurt'],
    summary: 'Theodor W. Adorno (trường phái Frankfurt) phân tích âm nhạc như một hiện tượng xã hội: nhạc đại chúng bị "chuẩn hoá" và chỉ tạo ảo giác lựa chọn (1941); "công nghiệp văn hoá" (1944, cùng Horkheimer); Schoenberg đối lập Stravinsky (1949). Có ảnh hưởng lớn và cũng bị phê phán nhiều.',
    wiki: 'Theodor_W._Adorno',
    refs: [
      ['Marxists.org — Adorno & Simpson, On Popular Music (1941)', 'https://www.marxists.org/svenska/adorno/1941/popularmusik.htm'],
      ['Universidade de Lisboa — Horkheimer & Adorno, The Culture Industry: Enlightenment as Mass Deception', 'https://fenix.letras.ulisboa.pt/courses/ecult-5-565398084784592/ver-artigo/theodor-w-adorno--max-horkheimer-the-culture-industry-enlightenment-as-mass-deception-1'],
      ['Project MUSE — Adorno, Philosophy of New Music (Hullot-Kentor transl.)', 'https://muse.jhu.edu/book/75948'],
      ['Utrecht University — Cruciale tekst: Adorno & Horkheimer, Dialektik der Aufklärung', 'https://research-portal.uu.nl/en/publications/cruciale-tekst-theodor-w-adorno-und-max-horkheimer-dialektik-der-/'],
      ['Wikipedia — Theodor W. Adorno', 'https://en.wikipedia.org/wiki/Theodor_W._Adorno'],
      ['All About Jazz — According to Adorno: a portrait of jazz\'s harshest critic', 'https://allaboutjazz.com/according-to-adorno-a-portrait-of-jazzs-harshest-critic-by-marithe-van-der-aa.php'],
      ['Cambridge, Popular Music — Critique criticised: Adorno and popular music', 'https://resolve.cambridge.org/core/journals/popular-music/article/critique-criticised-adorno-and-popular-music/38D031F06898051265D96554783DE063'],
      ['CLACSO repository — study of Adorno\'s writings on jazz', 'https://biblioteca-repositorio.clacso.edu.ar/handle/CLACSO/244981?mode=full'],
    ],
    body: `
**Theodor W. Adorno** (1903–1969) — triết gia, nhà xã hội học thuộc **trường phái Frankfurt**, từng học sáng tác — coi âm nhạc là nơi phản chiếu và cũng có thể **phê phán** xã hội.

## Nhạc đại chúng: chuẩn hoá và cá nhân hoá giả (1941)
Trong *On Popular Music* (1941, viết cùng George Simpson), Adorno cho rằng đặc điểm cốt lõi của nhạc đại chúng là **chuẩn hoá**:
- Khuôn cố định: ví dụ điệp khúc **32 ô** (xem [[hinh-thuc-ca-khuc-32]]), [[cao-do|âm vực]] [[giai-dieu|giai điệu]] gói gọn trong một [[quang|quãng 8]], các "kiểu" bài hát lặp lại.
- **Cá nhân hoá giả**: những khác biệt bề mặt tạo **ảo giác lựa chọn tự do**, trong khi chất liệu đã được chọn sẵn cho người nghe.

## Công nghiệp văn hoá (1944)
Trong chương "Công nghiệp văn hoá" của *Biện chứng của Khai sáng* (Horkheimer và Adorno; bản 1944, xuất bản rộng rãi năm 1947), văn hoá sản xuất hàng loạt được phân tích như một **công cụ kiểm soát xã hội** hơn là sự biểu hiện thật. Thuật ngữ "công nghiệp văn hoá" xuất hiện lần đầu ở đây.

## Triết học âm nhạc mới (1949)
*Philosophie der neuen Musik* (1949) gồm hai tiểu luận: **"[[arnold-schoenberg|Schoenberg]] và sự tiến bộ"**, **"[[igor-stravinsky|Stravinsky]] và sự phản động"**. Adorno đặt hai nhà soạn nhạc đối lập như hai xu hướng: âm nhạc dám đối diện với mâu thuẫn của thời đại (Schoenberg, [[ky-thuat-12-am]]) và âm nhạc quay lại các [[hinh-thuc-am-nhac|hình thức]] cũ (Stravinsky tân cổ điển). Sách gây tranh cãi ngay khi ra đời — **chính Schoenberg cũng không đồng tình** — nhưng có ảnh hưởng lớn với giới nhạc sĩ và học giả.

## Phê phán đối với Adorno
- Tiểu luận *Über Jazz* (1936–1937, ký bút danh Hektor Rottweiler) thường bị chê là **thiên kiến** và **tinh hoa**; nhiều nhà sử học jazz bác bỏ hoàn toàn. Hiểu biết jazz của ông được cho là giới hạn ở dòng nhạc khiêu vũ kiểu ban nhạc Paul Whiteman phục vụ giới trung lưu thời Weimar.
- Về sau, chính Adorno **giữ khoảng cách** với các tiểu luận jazz đầu tiên, thừa nhận ông thiếu hiểu biết về những đặc điểm riêng của jazz Mỹ và đã rút ra kết luận tâm lý – xã hội vội vàng.
- Một số học giả bênh vực rằng các phê phán thường **bỏ qua loại nhạc cụ thể** Adorno nói tới (nhạc khiêu vũ thập niên 1920, trước những biến đổi lớn của jazz), và các tiểu luận vẫn có **giá trị lịch sử**.
- Quan điểm bi quan về văn hoá đại chúng là phần bị tranh luận nhiều nhất của cả trường phái Frankfurt.
- Dù vậy, câu hỏi của Adorno — **ai quyết định chúng ta nghe gì**, và **âm nhạc có thể chống lại sự đồng phục hoá không** — vẫn được đặt lại trong thời đại nhạc số và thuật toán gợi ý.

## Với người dạy
Bài này hữu ích để thảo luận với học trò lớn: vì sao một số bài nhạc "giống nhau"? Điều gì làm một bản nhạc **mới thật sự** và điều gì chỉ là khác biệt bề mặt? So sánh với quan điểm "thị hiếu được rèn luyện" của Hume ([[phan-doan-tham-my]]). Lộ trình cả mục: [[triet-hoc-am-nhac]].
`,
  },
]
