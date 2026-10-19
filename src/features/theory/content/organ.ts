import type { Article } from '../wiki'

/**
 * Organ nhà thờ: hệ thống kỹ thuật và lộ trình. Trang mở đầu là ky-thuat-organ-lo-trinh; mỗi bài
 * nối ngược về nó và sang các bài cùng mục, cùng các bài sẵn có ở Âm nhạc nhà thờ, Nhạc khí, Kỹ thuật.
 */
export const organ: Article[] = [
  {
    slug: "ky-thuat-organ-lo-trinh",
    title: "Organ nhà thờ: hệ thống kỹ thuật và lộ trình",
    category: 'organ',
    also: ['sacred', 'technique'],
    aliases: ["lộ trình organ", "học organ", "kỹ thuật organ", "organ nhà thờ lộ trình", "organ technique", "learning the organ", "organ method"],
    summary: "Trang mở đầu của mục Organ nhà thờ: một lộ trình bảy chặng từ nền piano đến phục vụ phụng vụ — làm quen bàn điều khiển, cách chạm phím, ngón tay, pedal, phối hợp tay chân, chơi chorale, phối âm sắc, rồi vai trò của organ trong thánh lễ. Mỗi chặng dựa trên các chuyên luận cổ (Schlick 1511, Santa María 1565, Diruta 1593, Praetorius 1619, Werckmeister, Dom Bedos, Adlung) và lời kể về Bach, nối với các bài sẵn có về bình ca, đệm cộng đoàn và tài liệu sư phạm của Bach.",
    refs: [
      ["Wikipedia — Pipe organ", "https://en.wikipedia.org/wiki/Pipe_organ"],
      ["Wikipedia — Pedal keyboard", "https://en.wikipedia.org/wiki/Pedal_keyboard"],
      ["The Diapason — review: Faulkner, The Registration of J. S. Bach's Organ Works", "https://thediapason.com/diapason-review-registration-j-s-bach%E2%80%99s-organ-works-quentin-faulkner"],
      ["Vatican — Sacrosanctum Concilium (1963)", "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html"],
    ],
    body: `
Mục này dành cho người **đã chơi được piano** và muốn trở thành **organist nhà thờ**: chơi được tác phẩm, đệm được cho cộng đoàn và hiểu vì sao người xưa dạy như họ đã dạy. Nhạc cụ được tả ở [[organ-ong]]; phần phụng vụ (bình ca, alternatim, đệm hát) nằm ở mục [[am-nhac-nha-tho]]. Ở đây là **kỹ thuật và lộ trình**.

::timeline 1511=Schlick 1565=Santa_María 1593-1609=Diruta 1619=Praetorius 1626=Correa 1665=Nivers 1681-1698=Werckmeister 1739=Clavier-Übung_III 1754=Nekrolog_Bach 1766-1778=Dom_Bedos 1768=Adlung 1802=Forkel 1862=Lemmens 1927=Dupré 1963=Sacrosanctum_Concilium | Các nguồn chính của mục, theo năm

## Lộ trình bảy chặng
| Chặng | Bài | Mục tiêu | Nối sang |
|---|---|---|---|
| 0. Nền | (ngoài mục) | Đọc ba khuông, legato piano vững, hiểu bè trầm số | [[thi-tau]], [[legato-va-thay-ngon]], [[bass-so]] |
| 1. Nhạc cụ | [[ban-dieu-khien-organ]] | Biết bàn phím tay, pedal, nút âm sắc, ký hiệu 8′ – 4′ – 16′ | [[organ-ong]], [[am-sac]] |
| 2. Tay | [[cach-cham-phim-organ]] → [[ngon-tay-organ]] | Chạm phím không cần lực, điều khiển lúc nhả; ngón cổ và ngón hiện đại | [[cach-dien-tau]], [[ngon-bam]] |
| 3. Chân | [[ky-thuat-pedal-organ]] | Tư thế, mũi chân và gót chân, đọc ký hiệu pedal | [[tu-the]] |
| 4. Phối hợp | [[phoi-hop-tay-chan-organ]] → [[choi-chorale-tren-organ]] | Ba bè độc lập: hai tay và chân; chorale prelude, trio | [[doi-am-ba-bon-be]], [[chorale-va-chorale-prelude]] |
| 5. Âm sắc và phong cách | [[phoi-am-sac-organ]] → [[bach-nguoi-choi-organ]] | Plenum Đức, grand jeu Pháp, organ giao hưởng; Bach thử và chơi organ thế nào | [[phong-trao-bieu-dien-lich-su]], [[am-hoc-phong]] |
| 6. Phụng vụ | [[organ-trong-phung-vu]] | Dạo đầu, đệm, chuyển tiếp, kết lễ; mùa phụng vụ; văn kiện | [[dem-organ-cho-binh-ca]], [[dem-hat-cong-doan-tren-organ]], [[alternatim-va-thanh-le-organ]] |

**Xuyên suốt mọi chặng:** [[luyen-tap-organ]] (cách tập, cả khi không có organ), [[lo-trinh-tac-pham-organ]] (chọn bài theo bậc), [[sach-co-ve-organ]] (các chuyên luận gốc — đọc gì, ở đâu, tin đến mức nào).

## Vì sao phải học organ "từ đầu" dù đã chơi piano
1. **Phím organ không có lực.** Bấm mạnh hay nhẹ, ống vẫn kêu như nhau. Thứ duy nhất tay điều khiển là **lúc bắt đầu và lúc nhả** — xem [[cach-cham-phim-organ]].
2. **Âm không tắt dần.** Nốt kéo dài đến khi nhả phím, nên mọi chỗ nối hay ngắt đều nghe rõ; [[ban-dap|pedal vang của piano]] không có ở đây.
3. **Có thêm một bè bằng chân.** Bè trầm do chân chơi trên bàn phím pedal — kỹ năng hoàn toàn mới: [[ky-thuat-pedal-organ]].
4. **Âm sắc do người chơi chọn.** Người chơi organ đồng thời là "người phối khí" cho chính mình: [[phoi-am-sac-organ]].
5. **Âm thanh sống trong căn phòng.** Nhà thờ vang vài giây; cách chạm và nhịp độ phải tính đến [[am-hoc-phong|âm học phòng]].

## Về nguồn trong mục này
- Nguồn gốc là các **chuyên luận cổ** và **lời kể đương thời** về Bach (Nekrolog 1754, thư C. P. E. Bach 1774, Forkel 1802). Trích dẫn được dịch từ các bản dịch đã xuất bản hoặc từ nghiên cứu được nêu trong phần tham khảo của từng bài.
- Chỗ nào hai nguồn **mâu thuẫn** (năm in, nơi in, tác giả) đều được ghi ra. Chỗ nào chỉ dựa vào **nghiên cứu thứ cấp** mà chưa đối chiếu nguyên văn, bài ghi rõ.
- Những "luật" truyền miệng (ví dụ "Bach chỉ dùng mũi chân") được trình bày như **tranh luận**, kèm lập luận của mỗi bên — xem [[ky-thuat-pedal-organ]].

## Ba điều cần nhớ
1. **Organ là nhạc cụ của sự nối và ngắt.** Người xưa dạy điều này trước tiên: Diruta (1593) chê lối **đánh** phím của người chơi nhạc khiêu vũ và đòi **nhấn** phím — xem [[cach-cham-phim-organ]].
2. **Không có một "cách chơi organ đúng" duy nhất.** Ngón tay, pedal và âm sắc thay đổi theo thời kỳ; người organist giỏi chọn kỹ thuật theo **phong cách bản nhạc và nhạc cụ trước mặt**.
3. **Organ nhà thờ phục vụ lời hát.** Văn kiện Công đồng Vatican II (1963) quý trọng organ ống vì nó "nâng tâm hồn lên cùng Thiên Chúa"; nhưng việc chính hằng tuần vẫn là **đệm cho cộng đoàn** — xem [[organ-trong-phung-vu]].
`,
  },
  {
    slug: "sach-co-ve-organ",
    title: "Những cuốn sách cổ về organ: từ Schlick (1511) đến Dupré (1927)",
    category: 'organ',
    also: ['musicology', 'sacred'],
    aliases: ["sách cổ về organ", "chuyên luận organ", "organ treatises", "Spiegel der Orgelmacher", "Arnolt Schlick", "Il Transilvano", "Girolamo Diruta", "Arte de tañer fantasía", "Tomás de Santa María", "Syntagma musicum", "De Organographia", "Michael Praetorius", "Facultad orgánica", "Correa de Arauxo", "Orgel-Probe", "Andreas Werckmeister", "Musica mechanica organoedi", "Jakob Adlung", "L'art du facteur d'orgues", "Dom Bedos", "École d'orgue", "Lemmens", "Méthode d'orgue", "Marcel Dupré"],
    summary: "Bảng và chú giải các chuyên luận gốc về organ: Schlick (1511, viết cho người đặt đóng organ), Santa María (1565) và Diruta (1593/1609) về tư thế, ngón tay và cách chạm, Praetorius (1619) về nhạc cụ và nút âm sắc, Correa de Arauxo (1626), Nivers (1665), Werckmeister về kiểm định organ, Dom Bedos (1766–1778) và Adlung (1768), rồi các giáo trình thế kỷ 19–20 của Rinck, Lemmens và Dupré. Mỗi sách: dạy gì, đọc ở đâu, và những chỗ còn tranh cãi.",
    refs: [
      ["Deutsche Biographie — Schlick, Arnolt", "https://www.deutsche-biographie.de/sfz78491.html"],
      ["Polska Biblioteka Muzyczna — Schlick, Spiegel der Orgelmacher", "https://polskabibliotekamuzyczna.pl/schlick-arnolt/?lang=en"],
      ["mdw Press — Hacking the System II (về Diruta)", "https://www.mdw.ac.at/mdwpress/mdwp017-003/"],
      ["Schulenberg — Fingering in Frescobaldi and Froberger (PDF)", "https://schulenbergmusic.org/wp-content/uploads/2018/05/Frescobaldi-Froberger_Fingering.pdf"],
      ["Wikipedia — Syntagma Musicum", "https://en.wikipedia.org/wiki/Syntagma_Musicum"],
      ["University of Rochester — Praetorius and his Syntagma Musicum", "https://rbscp.lib.rochester.edu/2470"],
      ["Wikipedia — Guillaume-Gabriel Nivers", "https://en.wikipedia.org/wiki/Guillaume-Gabriel_Nivers"],
      ["Deutsche Biographie — Werckmeister, Andreas", "https://www.deutsche-biographie.de/sfz85067.html"],
      ["Wikipedia — Jacques-Nicolas Lemmens", "https://en.wikipedia.org/wiki/Jacques-Nicolas_Lemmens"],
      ["Kim Soo-Jin — luận án DMA về legato organ (PDF)", "https://getd.libs.uga.edu/pdfs/kim_soo-jin_200208_dma.pdf"],
    ],
    body: `
Bài này là "thư viện gốc" của lộ trình [[ky-thuat-organ-lo-trinh]]. Mỗi bài kỹ thuật trong mục dẫn về đây khi trích một chuyên luận. Cách đọc nguồn cổ nói chung: [[phuong-phap-su-hoc-am-nhac]] và [[van-ban-hoc-am-nhac]].

::timeline 1511=Schlick 1565=Santa_María 1593=Diruta_I 1609=Diruta_II 1619=Praetorius 1626=Correa 1665=Nivers 1681=Werckmeister 1755=Marpurg 1766-1778=Dom_Bedos 1768=Adlung 1818=Rinck 1862=Lemmens 1877=Stainer 1927=Dupré | Các chuyên luận theo năm (Rinck: khoảng)

## Bảng tổng quan
| Năm | Tác giả — sách | Viết cho ai, dạy gì | Đọc trong mục |
|---|---|---|---|
| 1511 | **Arnolt Schlick**, *Spiegel der Orgelmacher und Organisten* | Chủ yếu cho **nhà thờ, tu viện đặt đóng hoặc giữ gìn organ**: cao độ, cấu hình mẫu, vật liệu ống, lên dây | [[ban-dieu-khien-organ]], [[phoi-am-sac-organ]] |
| 1565 | **Tomás de Santa María**, *Arte de tañer fantasía* | Đàn phím (chủ yếu clavichord) và vihuela: ngón đi cặp, chơi "có duyên" | [[ngon-tay-organ]], [[cach-cham-phim-organ]] |
| 1593 / 1609 | **Girolamo Diruta**, *Il Transilvano* (2 phần) | Đối thoại thầy – trò về tư thế, ngón "tốt – xấu", cách nhấn phím; phần 2 về đối âm, điệu thức, âm sắc | [[cach-cham-phim-organ]], [[ngon-tay-organ]] |
| 1619 | **Michael Praetorius**, *Syntagma musicum II: De Organographia* | Mô tả mọi nhạc cụ ông biết, đặc biệt organ và các nút âm sắc; kèm tập tranh *Theatrum instrumentorum* (1620) | [[ban-dieu-khien-organ]] |
| 1626 | **Francisco Correa de Arauxo**, *Facultad orgánica* | Tiento cho organ Tây Ban Nha, kèm lời bàn về ngón tay và lối chơi | [[ngon-tay-organ]] |
| 1665 | **Guillaume-Gabriel Nivers**, *Livre d'orgue* | Tập organ Pháp in sớm nhất còn lại có đủ các thể loại cổ điển (plein jeu, grand jeu, récit de cromorne…) | [[phoi-am-sac-organ]] |
| 1681 / 1698 | **Andreas Werckmeister**, *Orgel-Probe* (bản mở rộng 1698) | Cách **nghiệm thu, thử và kiểm định** organ mới; có bàn về âm sắc | [[bach-nguoi-choi-organ]] |
| 1755 | **F. W. Marpurg**, *Anleitung zum Clavierspielen* | Đàn phím nói chung; phân biệt nối, ngắt và lối đi phím "thông thường" | [[cach-cham-phim-organ]] |
| 1766 – 1778 | **Dom Bedos de Celles**, *L'art du facteur d'orgues* | Bách khoa đóng organ Pháp, có bảng pha trộn âm sắc | [[phoi-am-sac-organ]] |
| 1768 | **Jakob Adlung**, *Musica mechanica organoedi* | Organ Đức giữa thế kỷ 18, có tổ hợp âm sắc; in sau khi tác giả mất, do Agricola biên tập | [[phoi-am-sac-organ]] |
| khoảng 1818 | **J. C. H. Rinck**, *Praktische Orgelschule* Op. 55 | Giáo trình thực hành; Rinck học với **Kittel**, học trò của Bach | [[lo-trinh-tac-pham-organ]] |
| 1862 | **Jacques-Nicolas Lemmens**, *École d'orgue* | Legato làm chuẩn: thay ngón, trượt ngón, bắt chéo; được Nhạc viện Paris và Brussels dùng | [[ngon-tay-organ]], [[ky-thuat-pedal-organ]] |
| 1927 | **Marcel Dupré**, *Méthode d'orgue* | Hệ thống hoá legato tay và chân của trường phái Pháp thế kỷ 20 | [[ngon-tay-organ]], [[ky-thuat-pedal-organ]] |

## Thế kỷ 16: organ trước hết là chuyện nhạc cụ và ngón tay
- **Schlick** bị mù, là organist triều đình Heidelberg. Sách ông chủ yếu không dạy chơi mà dạy **người mua organ** biết đòi hỏi gì: cấu hình mẫu cho organ nhỏ và lớn, ống thanh mảnh kêu "ngọt" hơn, cách lên dây. Nơi in còn **mâu thuẫn** giữa các nguồn (Mainz hay Speyer, nhà in Peter Drach); chỉ hai bản in còn sót lại. Bản dịch tiếng Anh đầy đủ: E. B. Barber (1980), có kèm văn bản tiếng Đức.
- **Santa María** viết cho clavichord nhưng nói rõ dùng được cho mọi nhạc cụ phím; ông dạy ngón đi **từng cặp** (3 – 4 lên, 3 – 2 xuống ở tay phải) và chơi các nốt móc **không đều** để có "duyên" — tổ tiên xa của lối "notes inégales" Pháp ([[phong-cach-dien-tau]]).
- **Diruta** là học trò Claudio Merulo; *Il Transilvano* là đối thoại với một nhà quý tộc xứ Transylvania. Ông gọi ngón 2 và 4 là ngón **"tốt"** (*buone*) dành cho nốt mạnh, các ngón còn lại là **"xấu"** (*cattive*); tay đặt thả lỏng, ngón **nhấn** phím chứ không **đập**. Hai ví dụ trong sách được đề "ví dụ tốt" và "ví dụ xấu". Bản dịch Anh: Bradshaw & Soehnlen.

## Thế kỷ 17 – 18: nhạc cụ, kiểm định và âm sắc
- **Praetorius** (Wolfenbüttel, 1619; có nguồn ghi 1618 – 1619) cho ta bức tranh đầy đủ nhất về organ Đức đầu thế kỷ 17: tên nút âm sắc, cấu hình nhiều organ cụ thể, tranh khắc gỗ. Đây là nguồn chính khi phục dựng nhạc cụ thời ấy.
- **Werckmeister** dạy **kiểm định** organ: thử hơi, thử ống, thử phím — đúng việc Bach về sau được mời làm nhiều lần ([[bach-nguoi-choi-organ]]). Sách được in lại nhiều lần và dịch sang tiếng Hà Lan trong thế kỷ 18. Ông cũng viết *Musicalische Temperatur* (1691) về [[cac-he-thong-chinh-am|lên dây]].
- **Nivers** (1665) mở đầu dòng *livre d'orgue* Pháp; nhan đề từng bài **chính là cách phối âm sắc** — xem [[phoi-am-sac-organ]].
- **Dom Bedos** và **Adlung** là hai bách khoa cuối thời Baroque, một Pháp một Đức. Adlung viết từ những năm 1720 – 1730 nhưng mất năm 1762 khi chưa xong; Agricola — học trò Bach, đồng tác giả Nekrolog — biên tập cho in năm 1768.

## Thế kỷ 19 – 20: legato thành chuẩn
- Nghiên cứu ghi nhận **J. C. F. Schneider** ở Đức cổ vũ lối chạm legato từ khoảng 1830; trong ba mươi năm sau lối này lan sang Pháp, Anh và Mỹ.
- **Lemmens** (học trò Fétis; Fétis gửi ông sang Đức học Hesse — nhưng có nguồn Pháp cho rằng Hesse đánh giá ông "khá tầm thường" và chối lá thư Fétis dẫn, nên **câu chuyện truyền thừa này cần thận trọng**). *École d'orgue* (1862) đặt legato làm chuẩn, đạt bằng **thay ngón, trượt ngón, bắt chéo**; nhiều giáo trình sau dựa vào nó.
- **Dupré** dạy organ và ngẫu hứng ở Nhạc viện Paris từ 1926; ngoài *Méthode d'orgue* ông còn viết giáo trình ngẫu hứng (*Cours complet d'improvisation à l'orgue*, 2 tập) — xem [[ngau-hung-ung-tac]].
- Ở thế giới nói tiếng Anh: John Stainer, *The Organ* (Novello, 1877) và Harold Gleason, *Method of Organ Playing* (từ 1937, tái bản nhiều lần) là hai giáo trình phổ biến.

## Đọc sách cổ thế nào cho đúng
1. **Biết sách viết cho ai.** Schlick viết cho người mua organ; Santa María viết chủ yếu cho clavichord; Marpurg cho đàn phím nói chung. Đừng biến lời khuyên cho nhạc cụ này thành luật cho nhạc cụ khác.
2. **Biết sách viết ở đâu.** Ngón tay Ý (Diruta), Tây Ban Nha (Santa María, Correa) và Đức không giống nhau; âm sắc Pháp và Đức càng khác.
3. **Phân biệt mô tả và quy định.** Một tác giả chê một thói quen chứng tỏ thói quen ấy **có thật và phổ biến** — như Diruta chê lối đập phím.
4. **Đọc bản dịch có kèm nguyên văn** khi có thể, và để ý năm in: nhiều sách có hai, ba phiên bản khác nhau (Diruta 1593/1609, Werckmeister 1681/1698).
`,
  },
  {
    slug: "ban-dieu-khien-organ",
    title: "Bàn điều khiển organ: bàn phím tay, pedal, nút âm sắc và ký hiệu feet",
    category: 'organ',
    also: ['organology'],
    aliases: ["bàn điều khiển organ", "console organ", "organ console", "manual", "bàn phím tay organ", "bàn phím pedal", "pedalboard", "nút âm sắc", "stop organ", "organ stop", "register", "8 feet", "8′", "16′", "4′", "mixture", "coupler", "tremulant", "hộp cảm âm", "swell box", "Hauptwerk", "Rückpositiv", "Grand-Orgue", "Récit"],
    summary: "Người chơi organ ngồi trước một bàn điều khiển: hai đến năm bàn phím tay, một bàn phím pedal cho chân, hàng nút âm sắc và các bộ nối. Bài giải thích tên các bàn phím theo truyền thống Đức, Pháp, Anh; ký hiệu feet (16′, 8′, 4′, 2 2⁄3′…) và cách nó quyết định cao độ thực; các loại ống chính; bộ nối, tremulant, hộp cảm âm; và khác biệt giữa bộ máy cơ (tracker) với bộ máy điện khi chạm phím.",
    wiki: "Organ_stop",
    refs: [
      ["Wikipedia — Organ stop", "https://en.wikipedia.org/wiki/Organ_stop"],
      ["Wikipedia — Pipe organ", "https://en.wikipedia.org/wiki/Pipe_organ"],
      ["Wikipedia — Pedal keyboard", "https://en.wikipedia.org/wiki/Pedal_keyboard"],
      ["Source Library — Praetorius, Syntagma II, trang cấu hình", "https://sourcelibrary.org/artwork/syntagma-ii-180-b"],
    ],
    body: `
Chặng 1 của [[ky-thuat-organ-lo-trinh]]. Lịch sử và cấu tạo ống: [[organ-ong]]. Âm sắc là gì về mặt vật lý: [[am-sac]].

## Bàn phím tay
Mỗi bàn phím tay (*manual*) điều khiển một **bộ ống riêng** đặt ở một chỗ riêng trong thùng đàn. Tên gọi cho biết chỗ đặt và vai trò:
| Vai trò | Đức | Pháp | Anh |
|---|---|---|---|
| Bàn chính, tiếng đầy | Hauptwerk | Grand-Orgue | Great |
| Bàn phụ phía sau lưng người chơi | Rückpositiv | Positif (de dos) | Chair / Choir |
| Bàn phụ phía trên | Oberwerk | — | — |
| Bàn phụ ngay trước ngực người chơi | Brustwerk | — | — |
| Bàn đặt trong hộp cảm âm | Schwellwerk | Récit (expressif) | Swell |

Organ thời Bach thường có **hai hoặc ba** bàn phím tay; organ giao hưởng Pháp thế kỷ 19 có thể có năm. Praetorius (1619) liệt kê cấu hình theo đúng các khu vực này — xem [[sach-co-ve-organ]].

## Bàn phím pedal
Bàn phím cho chân chơi **bè trầm**. Organ Bắc Đức thời Bach thường có tầm pedal hẹp hơn ngày nay (khoảng C đến c′ hoặc d′); chuẩn hiện đại phổ biến là **32 phím, C – g′**, mặt lõm và xoè hình quạt để chân với tới dễ hơn. Ghế ngồi và cách đặt chân: [[ky-thuat-pedal-organ]].

## Nút âm sắc và ký hiệu feet
Mỗi **nút âm sắc** (*stop*, *register*) bật một **dãy ống** — mỗi phím một ống. Con số trên nút là **chiều dài ống thấp nhất** tính bằng feet (khoảng 30 cm), và nó cho biết **cao độ thực** so với nốt viết:
| Nhãn | Nốt Đô viết ra kêu thành | Quan hệ |
|---|---|---|
| 16′ | Đô thấp hơn một quãng 8 | dưới quãng 8 |
| **8′** | đúng nốt viết | **cao độ "chuẩn"** (như piano) |
| 4′ | Đô cao hơn một quãng 8 | quãng 8 trên |
| 2 2⁄3′ | Sol cao hơn quãng 12 | bồi âm 3 |
| 2′ | Đô cao hơn hai quãng 8 | bồi âm 4 |
| 1 3⁄5′ | Mi cao hơn quãng 17 | bồi âm 5 |

Những nút như 2 2⁄3′ và 1 3⁄5′ là **nút bồi âm**: chúng không dùng một mình mà **pha** với 8′ để đổi màu tiếng — đây chính là [[am-sac|chuỗi bồi âm]] được ghép bằng tay. **Mixture** (*Mixtur*, *Fourniture*, *Plein jeu*) là nút mở **nhiều ống bồi âm cùng lúc** cho mỗi phím, làm tiếng sáng và "đầy". Pedal dùng 16′ làm nền, nên bè trầm kêu thấp hơn nốt viết một quãng 8.

## Các họ ống chính
- **Principal / Prinzipal / Montre / Diapason** — tiếng "organ" đặc trưng, là xương sống của plenum.
- **Flute / Flöte / Bourdon / Gedackt** — ống sáo, thường bịt đầu, tiếng tròn, mềm.
- **String / Gamba / Salicional** — ống hẹp, tiếng sắc như đàn dây; phổ biến ở organ thế kỷ 19.
- **Reed / Zunge / Anche** — ống có lưỡi gà: Trompete, Posaune, Cromorne, Vox humana. Theo Hornbostel – Sachs, ống thổi cạnh và ống lưỡi gà thuộc hai lớp khác nhau — xem [[organ-ong]].

## Bộ nối, tremulant, hộp cảm âm
- **Bộ nối** (*coupler*, *Koppel*, *tirasse* ở pedal): cho bàn này kéo theo âm sắc của bàn kia; nối bàn tay xuống pedal giúp bè trầm có thêm tiếng của bàn tay.
- **Tremulant**: làm hơi rung đều, tạo vibrato; dùng cho bè giai điệu đơn.
- **Hộp cảm âm** (*swell box*): các ống đặt trong hộp có cửa chớp, mở bằng một bàn đạp — cách **duy nhất** để organ to nhỏ dần mà không đổi nút âm sắc. Đây là phát minh quan trọng của organ Anh và Pháp thế kỷ 18 – 19, và là nền của [[phoi-am-sac-organ|lối phối âm sắc giao hưởng]].
- **Nút nhớ tổ hợp** (*pistons*): ở organ hiện đại, lưu sẵn tổ hợp nút âm sắc để đổi nhanh.

## Bộ máy: cơ hay điện
- **Bộ máy cơ** (*tracker*): phím nối với van hơi bằng que gỗ, dây kim loại. Ngón tay cảm nhận được van mở — một điểm "bật" nhỏ lúc bắt đầu bấm — và có thể điều khiển **cách nốt bắt đầu** ở mức tinh tế. Hầu hết organ thời Bach và organ phục dựng theo lối cổ dùng bộ máy cơ.
- **Bộ máy điện, điện – khí**: phím chỉ đóng mạch; organ lớn thế kỷ 20 hay dùng. Không có cảm giác van; độ trễ có thể khác nhau.
- **Organ điện tử, organ số** và phần mềm organ ảo: không có ống. Dùng tốt để **tập** — xem [[luyen-tap-organ]].

Hệ quả cho người chơi: trên bộ máy cơ, [[cach-cham-phim-organ|cách chạm phím]] nghe ra rõ hơn; trên organ điện, chỉ còn **lúc bắt đầu và lúc nhả**.
`,
  },
  {
    slug: "cach-cham-phim-organ",
    title: "Cách chạm phím trên organ: nối, ngắt và lối \"thông thường\" — từ Diruta đến Lemmens",
    category: 'organ',
    also: ['technique', 'expression'],
    aliases: ["chạm phím organ", "organ touch", "articulation organ", "diễn tấu trên organ", "legato organ", "ordinary touch", "ordentliches Fortgehen", "non legato organ"],
    summary: "Phím organ không phân biệt mạnh nhẹ, nên người chơi chỉ điều khiển hai thứ: lúc nốt bắt đầu và lúc nốt dứt. Bài đi qua lịch sử cách chạm — Diruta (1593) đòi nhấn chứ không đập phím, Santa María (1565) dạy chơi có \"duyên\", Marpurg (1755) mô tả lối đi phím \"thông thường\" hơi tách, thế kỷ 19 đưa legato thành chuẩn (Schneider, Lemmens), rồi phong trào biểu diễn lịch sử quay lại lối tách nốt có thứ bậc — và rút ra những quy tắc thực hành cho người organist hôm nay.",
    refs: [
      ["mdw Press — Hacking the System II (Diruta: buono / cattivo)", "https://www.mdw.ac.at/mdwpress/mdwp017-003/"],
      ["Qucosa — Wagner, về \"buono\" và \"cattivo\" ở Diruta", "https://mf.journals.qucosa.de/mf/article/download/1281/1707/1727"],
      ["Andrew Lawrence-King — Tomás de Santa María về nhịp và câu", "https://andrewlawrenceking.com/2019/08/02/the-art-of-time/"],
      ["Kim Soo-Jin — luận án DMA về legato organ (PDF)", "https://getd.libs.uga.edu/pdfs/kim_soo-jin_200208_dma.pdf"],
    ],
    body: `
Chặng 2 của [[ky-thuat-organ-lo-trinh]]. Bài tiếp theo: [[ngon-tay-organ]]. Nguyên tắc diễn tấu chung trên piano: [[cach-dien-tau]].

## Điều cơ bản: không có lực, chỉ có thời gian
Trên piano, ngón tay quyết định **độ to** và cả **màu** của nốt. Trên organ, phím chỉ mở van; ống kêu cùng một độ to dù ta bấm thế nào. Vì vậy mọi biểu cảm của bàn tay dồn vào:
- **lúc bắt đầu** (trên bộ máy cơ, bấm chậm hay nhanh còn ảnh hưởng chút ít đến tiếng "nói" của ống — xem [[ban-dieu-khien-organ]]);
- **lúc nhả** — nốt dứt sớm hay muộn, khoảng lặng giữa hai nốt dài hay ngắn.

Một khoảng lặng rất nhỏ trước nốt mạnh khiến tai nghe nốt ấy **như được nhấn**, dù độ to không đổi. Đây là "trọng âm của organ".

## Thế kỷ 16: nhấn, đừng đập
- **Diruta** (*Il Transilvano*, 1593) phân biệt cách chơi **tốt** (âm liên tục) với cách chơi **xấu** (âm bị đứt quãng), và chê những người chơi nhạc khiêu vũ **đập** phím; người chơi organ phải **nhấn** phím, tay thả lỏng, không nhấc tay cao. Xem [[sach-co-ve-organ]].
- **Santa María** (1565) dạy chơi các nốt nhanh **không đều** — dài ngắn xen nhau — để câu nhạc có "duyên". Lối "không đều" này cần một cách chạm có khoảng thở giữa các nốt, không phải legato tuyệt đối.

## Thế kỷ 18: lối đi phím "thông thường"
**Marpurg** (*Anleitung zum Clavierspielen*, Berlin 1755) mô tả, bên cạnh nối và ngắt, một **lối đi phím thông thường** (*das ordentliche Fortgehen*): nhấc ngón khỏi phím **ngay trước** khi đánh nốt kế tiếp. Nói cách khác, khi không có dấu luyến hay dấu chấm, nốt **hơi tách**. Marpurg viết cho đàn phím nói chung, nhưng người chơi organ Baroque ngày nay dùng đoạn này làm điểm tựa chính — luôn kèm lưu ý rằng nó **không phải** luật riêng cho organ. (Nội dung theo các nghiên cứu thứ cấp; chưa đối chiếu nguyên văn.)

## Thế kỷ 19: legato thành chuẩn
Nghiên cứu ghi nhận J. C. F. Schneider ở Đức cổ vũ legato từ khoảng 1830; **Lemmens** (*École d'orgue*, 1862) đặt legato làm chuẩn cho trường phái Pháp – Bỉ và dạy cách đạt nó: thay ngón trên phím, trượt ngón, bắt chéo — xem [[ngon-tay-organ]]. Dupré (1927) kế thừa và hệ thống hoá. Với nhạc Franck, Widor, Vierne, legato liền mạch là **đúng phong cách**.

## Thế kỷ 20: quay lại lối tách nốt
[[phong-trao-bieu-dien-lich-su|Phong trào biểu diễn lịch sử]] và các organ phục dựng bộ máy cơ đưa nhiều người chơi trở lại lối **tách nốt có thứ bậc** cho nhạc trước 1800: nốt mạnh của ô nhịp dài hơn, nốt nhẹ ngắn hơn, nốt nhanh đi theo nhóm. Đây là lựa chọn phong cách có nguồn, không phải "luật Bach" — Bach không để lại quy tắc chạm phím bằng văn bản.

## Quy tắc thực hành
| Tình huống | Gợi ý | Lý do |
|---|---|---|
| Nốt lặp lại cùng cao độ | Ngắt nốt **trước** đủ để nghe nốt sau | Không ngắt thì nghe như một nốt dài |
| Nốt chung khi đổi hợp âm | Nhạc Baroque: thường đánh lại; nhạc Lãng mạn: thường giữ nối | Theo phong cách |
| Phách mạnh | Khoảng lặng nhỏ **trước** nó | Tạo cảm giác nhấn |
| Nốt cuối câu | Nhả có chủ ý, theo nhịp, đừng nhả "lơ đãng" | Trong nhà thờ, lúc nhả nghe rất rõ |
| Nhà thờ vang nhiều | Tách hơn, chậm hơn một chút | Tiếng vang tự nối các nốt — xem [[am-hoc-phong]] |
| Phòng khô, organ nhỏ | Nối hơn | Không có tiếng vang đỡ |

## Bài tập chặng 2
1. Chơi một âm giai bằng **một ngón**, mỗi nốt tách đều — nghe khoảng lặng.
2. Chơi cùng âm giai **legato tuyệt đối** — không chồng, không hở.
3. Chơi một [[chorale-va-chorale-prelude|chorale]] bốn bè hai cách: kiểu Baroque (nốt chung đánh lại, phách mạnh có thở) và kiểu Lãng mạn (nối tối đa). Thu âm, so sánh.
`,
  },
  {
    slug: "ngon-tay-organ",
    title: "Ngón tay trên organ: ngón cổ, ngón cái của Bach và ngón legato thế kỷ 19",
    category: 'organ',
    also: ['technique'],
    aliases: ["ngón tay organ", "organ fingering", "ngón cổ", "early fingering", "paired fingering", "ngón đi cặp", "thay ngón trên phím", "finger substitution", "trượt ngón", "finger glissando", "ngón tốt ngón xấu", "dita buone"],
    summary: "Ba hệ ngón tay mà người chơi organ cần biết: ngón cổ (thế kỷ 16 – 17) đi cặp, ít dùng ngón cái, ngón \"tốt\" rơi vào nốt mạnh — theo Santa María và Diruta; bước chuyển thời Bach khi ngón cái được dùng nhiều hơn, theo lời C. P. E. Bach; và ngón legato thế kỷ 19 với thay ngón, trượt ngón, bắt chéo — theo Lemmens và Dupré. Kèm cách chọn hệ ngón theo bản nhạc và bài tập.",
    refs: [
      ["Schulenberg — Fingering in Frescobaldi and Froberger (PDF)", "https://schulenbergmusic.org/wp-content/uploads/2018/05/Frescobaldi-Froberger_Fingering.pdf"],
      ["Schulenberg — ví dụ ngón tay, bài nói ở IU (PDF)", "https://schulenbergmusic.org/wp-content/uploads/2017/05/iu_talk_fingering_exx.pdf"],
      ["New World Encyclopedia — Girolamo Diruta", "https://newworldencyclopedia.org/entry/Girolamo_Diruta"],
      ["organduo.lt — ngón đi cặp Tây Ban Nha thế kỷ 16", "https://www.organduo.lt/blog/category/fingering/23"],
      ["Wikipedia — Klavierbüchlein für Wilhelm Friedemann Bach (Applicatio)", "https://en.wikipedia.org/wiki/Klavierb%C3%BCchlein_f%C3%BCr_Wilhelm_Friedemann_Bach"],
    ],
    body: `
Chặng 2 (tiếp) của [[ky-thuat-organ-lo-trinh]]. Trước đó: [[cach-cham-phim-organ]]. Ngón bấm piano nói chung: [[ngon-bam]]; thay ngón trên piano: [[legato-va-thay-ngon]].

## Hệ 1: ngón cổ (thế kỷ 16 – 17)
- **Đi cặp.** Santa María (1565) cho tay phải đi lên bằng cặp 3 – 4 lặp lại, đi xuống bằng 3 – 2; ngón cái hầu như không tham gia âm giai.
- **Ngón tốt và ngón xấu.** Diruta (1593), đánh số ngón cái là 1, gọi ngón **2 và 4** là ngón "tốt" — chúng chơi nốt "tốt" (nốt mạnh, phách chính); ngón 1, 3, 5 là ngón "xấu", chơi nốt nhẹ. Trong âm giai Đô trưởng của ông **không có ngón cái**, và ngón dài bắt qua ngón ngắn (3 qua 4).
- **Hệ quả:** khi chuyển cặp, tay tự nhiên **tách** nhẹ giữa hai nhóm, đúng với lối nhấn nốt mạnh — ngón tay và [[cach-cham-phim-organ|cách chạm]] là một hệ thống.
- Nghiên cứu hiện đại (Lester, Schulenberg) nhấn mạnh vai trò trung tâm của **các ngón giữa** trong hệ này.

## Hệ 2: thời Bach — ngón cái bước vào
- **C. P. E. Bach** (*Versuch über die wahre Art das Clavier zu spielen*, 1753) kể rằng cha ông thời trẻ được nghe các bậc thầy lớn **chỉ dùng ngón cái khi cần với xa**, và chính J. S. Bach đã mở rộng việc dùng ngón cái. (Theo các bản dịch và nghiên cứu; lời kể này cũng cần đọc như lời con trai về cha.)
- Bản **Applicatio** BWV 994 trong *Clavierbüchlein* cho Wilhelm Friedemann (1720) là bài hiếm hoi có **ngón do chính Bach ghi** — vẫn còn những chỗ ngón dài bắt qua ngón ngắn. Xem [[tai-lieu-su-pham-cua-bach]].
- **Forkel** (1802) tả bàn tay Bach: ngón **cong**, đầu ngón đặt thẳng xuống phím, chuyển động chủ yếu ở đốt cuối, ngón **rút về** phía lòng bàn tay khi rời phím. Cách tả này hợp với cả clavichord lẫn organ — xem [[bach-nguoi-choi-organ]].

## Hệ 3: ngón legato thế kỷ 19 – 20
Khi legato thành chuẩn (Lemmens 1862, Dupré 1927), người chơi cần nối cả những chỗ tay không thể nối bằng ngón thường:
- **Thay ngón trên phím** (*substitution*): giữ phím, đổi ngón trong im lặng (vd. 4 → 5) để giải phóng ngón cho nốt sau.
- **Trượt ngón** (*glissando*): trượt cùng một ngón từ phím đen xuống phím trắng liền kề; ngón cái cũng trượt được.
- **Bắt chéo** ngón dài qua ngón dài (3 qua 4, 4 qua 5) khi cần nối.
- **Chia bè giữa hai tay**: một bè giữa có thể do tay này chơi một đoạn rồi chuyển sang tay kia.

## Chọn hệ ngón nào
| Bản nhạc | Hệ ngón gợi ý | Ghi chú |
|---|---|---|
| Cabezón, Sweelinck, Frescobaldi, Scheidt | Hệ 1 | Thử theo Santa María và Diruta; nghe sự khác biệt |
| Buxtehude, Böhm, Bach | Hệ 1 – 2, tuỳ bài | Nhiều organist hiện đại dùng ngón cổ cho Bach; nhiều người khác dùng ngón hiện đại nhưng chạm tách. Cả hai đều có lý lẽ |
| Mendelssohn, Franck, Widor, Vierne | Hệ 3 | Legato là phong cách; ấn bản thời ấy thường in sẵn ngón |
| Đệm hát, ứng tác | Hệ 3 là chính | Cần nối bè chắc chắn — xem [[dem-hat-cong-doan-tren-organ]] |

Quy tắc thực hành: **ghi ngón vào bản nhạc trước khi tập**, cả cho [[ky-thuat-pedal-organ|pedal]]. Một ngón đã quyết thì giữ nguyên qua các buổi tập — xem [[luyen-tap-organ]].

## Bài tập chặng 2 (tiếp)
1. Âm giai Đô trưởng hai tay bằng ngón Diruta (không ngón cái), rồi bằng ngón hiện đại. So cách câu nhạc tự chia nhóm.
2. Hợp âm ba thế nối tiếp, giữ nốt chung bằng **thay ngón**.
3. Một bè giữa của chorale chia cho hai tay — đánh dấu chỗ chuyển tay.
`,
  },
  {
    slug: "ky-thuat-pedal-organ",
    title: "Kỹ thuật pedal organ: tư thế, mũi chân, gót chân và một cuộc tranh luận",
    category: 'organ',
    also: ['technique'],
    aliases: ["kỹ thuật pedal organ", "pedal organ", "organ pedaling", "pedalling", "chơi bằng chân", "mũi chân gót chân", "heel and toe", "toe pedaling", "giày organ", "organ shoes", "Pedal-Exercitium", "BWV 598", "ký hiệu pedal"],
    summary: "Chơi bè trầm bằng chân là kỹ năng riêng của organ. Bài trình bày tư thế ngồi và cách tìm phím không nhìn, ký hiệu mũi chân – gót chân, bài tập âm giai pedal, và cuộc tranh luận lịch sử: thời Bach chỉ dùng mũi chân (Koopman) hay đã dùng cả gót (nghiên cứu mới về nhạc cụ, giày và học trò)? Lối gót – mũi kiểu \"Đức\" phát triển cuối thế kỷ 18 – 19, rồi được Lemmens và Dupré hệ thống hoá. Kèm Pedal-Exercitium BWV 598 và lý do của mỗi lựa chọn.",
    wiki: "Pedal_keyboard",
    refs: [
      ["Wikipedia — Pedal keyboard", "https://en.wikipedia.org/wiki/Pedal_keyboard"],
      ["The Diapason — The use of heels in pedaling J. S. Bach's organ works", "https://www.thediapason.com/content/use-heels-pedaling-johann-sebastian-bachs-organ-works"],
      ["The Diapason — Toe or heel?", "https://d10dev.thediapason.com/content/toe-or-heel"],
      ["CEEOL — Di Fiore, Pedálová hra v Bachovi (2023)", "https://www.ceeol.com/search/article-detail?id=1196613"],
      ["Wikipedia — Pedal-Exercitium, BWV 598", "https://en.wikipedia.org/wiki/Pedal-Exercitium,_BWV_598"],
    ],
    body: `
Chặng 3 của [[ky-thuat-organ-lo-trinh]]. Cấu tạo bàn pedal: [[ban-dieu-khien-organ]]. Đừng nhầm với [[ban-dap|pedal của piano]] — trên organ, pedal là **một bàn phím**.

## Tư thế
- **Ngồi giữa.** Thường căn giữa ghế quanh khoảng nốt Rê – Mi giữa của pedal, để hai chân với được hai đầu như nhau.
- **Chiều cao ghế** vừa để mũi chân chạm phím trắng không phải duỗi thẳng, gót chân thả lỏng trên phím mà không đè xuống.
- **Thân trên tự do.** Khi chân phải với lên cao, thân hơi xoay; tay vẫn chơi bình thường. Nguyên tắc tư thế chung: [[tu-the]].
- **Tìm phím không nhìn.** Dùng các khe giữa nhóm phím đen (2 và 3 phím) làm mốc, đo khoảng cách bằng cảm giác hai đầu gối và cổ chân.
- **Giày organ**: đế mỏng, hẹp, gót thấp để vừa với phím; đế mềm cảm nhận được phím.

## Ký hiệu
Quy ước phổ biến: ký hiệu đặt **trên** nốt là **chân phải**, **dưới** nốt là **chân trái**. Dấu "∧" là **mũi chân**, dấu "∪" (hoặc "o") là **gót chân**. Ghi pedal vào bản nhạc trước khi tập, như ghi [[ngon-tay-organ|ngón tay]].

## Hai lối chơi
| | Chỉ mũi chân, hai chân luân phiên | Mũi và gót chân |
|---|---|---|
| Nguyên tắc | Mỗi chân đánh một nốt, chân kia đánh nốt kế | Một chân nối được hai nốt bằng mũi rồi gót |
| Âm thanh tự nhiên | Hơi tách, có nhấn — hợp lối [[cach-cham-phim-organ|chạm Baroque]] | Nối được — hợp legato Lãng mạn |
| Gắn với | Organ Baroque, bàn pedal phẳng hẹp, ghế cao | Bàn pedal lõm, xoè; trường phái Lemmens – Dupré |

## Cuộc tranh luận: Bach có dùng gót không?
- **Một bên** (ví dụ Ton Koopman) cho rằng thời Bach chưa biết lối mũi – gót, vì **mọi bè pedal của Bach đều chơi được bằng mũi chân**. Nhiều ghế organ cổ cao đến mức khó dùng gót, và bàn pedal thời ấy hẹp (khoảng C – c′ hoặc d′).
- **Bên kia**: nghiên cứu gần đây (The Diapason; Di Fiore 2023; sách *Bach's Feet* của David Yearsley, 2012) đòi xét **mọi nguồn** — nhạc cụ, học trò và người đương thời, cả giày thời ấy — và đi đến kết luận **mềm hơn**: có chỗ gót chân hợp lý, tuỳ âm nhạc đòi hỏi.
- **Lối mũi – gót kiểu "Đức"** được ghi nhận phát triển vào cuối thế kỷ 18 – đầu 19; lối "Pháp" ban đầu chủ yếu dùng mũi chân. Lemmens (1862) và Dupré (1927) xây dựng legato pedal hoàn chỉnh — xem [[sach-co-ve-organ]].
- **Kết luận thực hành:** học **cả hai**. Mũi chân luân phiên cho nhạc trước 1800 và các đoạn nhanh; mũi – gót cho legato, cho nhạc thế kỷ 19 – 20 và cho [[dem-hat-cong-doan-tren-organ|đệm hát]].

## Bach và pedal
- Trang nhan đề **Orgelbüchlein** nói người mới học sẽ luyện **pedal** qua các chorale, nơi pedal là **bắt buộc** (*obligat*) — xem [[tai-lieu-su-pham-cua-bach]].
- **Pedal-Exercitium BWV 598**: một bài chỉ cho pedal, bản tay do **C. P. E. Bach** chép. Có giả thuyết đây là bản ghi tại chỗ một đoạn ứng tác pedal của cha ông — **chỉ là giả thuyết**. (Trang Wikipedia về bài này đang bị đánh dấu chất lượng thấp, nên chỉ dùng như điểm khởi đầu.)
- Về tài năng pedal của Bach, Nekrolog và Forkel đều nhấn mạnh — xem [[bach-nguoi-choi-organ]].

## Bài tập chặng 3
1. **Âm giai Đô trưởng** một quãng 8: mũi chân luân phiên (P – T – P – T…), rồi mũi – gót một chân cho các bậc liền kề.
2. **Quãng 3, quãng 5, quãng 8** luân phiên hai chân, không nhìn.
3. **Bè trầm của chorale** chơi một mình bằng chân, rồi thêm tay phải chơi giai điệu — bước đầu của [[phoi-hop-tay-chan-organ]].
4. Mỗi ngày 10 phút pedal riêng là đủ; tăng dần lên âm giai trưởng, thứ có dấu hoá.
`,
  },
  {
    slug: "phoi-hop-tay-chan-organ",
    title: "Phối hợp tay và chân: từ bài tập ba bè đến sáu trio sonata của Bach",
    category: 'organ',
    also: ['technique', 'polyphony'],
    aliases: ["phối hợp tay chân organ", "độc lập tay chân", "organ coordination", "trio organ", "trio sonata organ", "trio sonatas", "BWV 525–530", "BWV 525-530", "sonata organ của Bach"],
    summary: "Kỹ năng trung tâm của người chơi organ là chơi ba bè độc lập: tay phải, tay trái và chân, mỗi bè một bàn phím. Bài trình bày cách tập theo cặp (tay phải + chân, tay trái + chân, hai tay), vì sao trio là bài tập đỉnh cao, và sáu trio sonata BWV 525–530 mà theo Forkel (1802) Bach viết cho con trai cả Wilhelm Friedemann luyện thành nghệ sĩ organ lớn — kèm lộ trình từ chorale ba bè, Orgelbüchlein đến trio.",
    wiki: "Organ_Sonatas_(Bach)",
    refs: [
      ["Wikipedia — Organ Sonatas (Bach)", "https://en.wikipedia.org/wiki/Organ_Sonatas_(Bach)"],
      ["Chandos — booklet Bach trio sonatas (PDF)", "https://www.chandos.net/chanimages/Booklets/CH0803.pdf"],
      ["Audite — booklet Bach trio sonatas (PDF)", "https://audite.de/media/file/00/39/19/digibooklet-bach-trio-sonatas.pdf"],
    ],
    body: `
Chặng 4 của [[ky-thuat-organ-lo-trinh]]. Cần đã qua [[ngon-tay-organ]] và [[ky-thuat-pedal-organ]]. Lý thuyết ba bè: [[doi-am-ba-bon-be]].

## Vì sao khó
Trên piano, hai tay cùng một bàn phím và nghe chung một màu. Trên organ, ba bè có thể nằm trên **ba bàn phím** với **ba âm sắc**; mỗi bè có nhịp thở, cách chạm và ngón riêng. Não phải theo dõi ba dòng cùng lúc — đúng tinh thần [[doi-am|đối âm]].

## Phương pháp tập theo cặp
1. Mỗi bè riêng: tay phải, tay trái, chân — đúng ngón, đúng cách chạm.
2. **Tay phải + chân** (ngoài cùng, dễ nghe nhất).
3. **Tay trái + chân** (hay va nhau nhất, vì cùng vùng trầm).
4. **Hai tay**.
5. Cả ba, **chậm**, với [[luyen-tap-voi-may-nhip|máy nhịp]]; tăng tốc độ từng nấc nhỏ.
6. Hát một bè trong khi chơi hai bè kia — cách kiểm tra mình có thật sự nghe từng bè.

## Lộ trình bài tập ba bè
| Bậc | Chất liệu | Mục tiêu |
|---|---|---|
| 1 | Chorale bốn bè: tay phải soprano, tay trái alto + tenor, chân bass | Chân giữ bè trầm vững — xem [[phoi-chorale-kieu-bach]] |
| 2 | Chorale có giai điệu ở bàn phím riêng (solo) | Hai bàn phím, hai âm sắc |
| 3 | Các bài Orgelbüchlein chậm (vd. BWV 599, 614) | Pedal bắt buộc, bè giữa dày — xem [[choi-chorale-tren-organ]] |
| 4 | Chorale trio, vd. *Herr Jesu Christ, dich zu uns wend* BWV 655 (Leipzig) hoặc các trio dễ hơn | Ba bè ngang hàng |
| 5 | **Trio sonata BWV 525 – 530** | Đỉnh của kỹ năng phối hợp |

## Sáu trio sonata
- **Forkel (1802)** viết rằng Bach soạn sáu sonata này cho con trai cả **Wilhelm Friedemann**, để qua việc tập chúng ông chuẩn bị trở thành **người chơi organ lớn** như về sau; Forkel coi đây là tác phẩm chín muồi nhất của Bach ở thể loại này.
- Một bản chép do chính Friedemann thực hiện đầu những năm 1730 **ủng hộ** lời kể này.
- Cấu trúc: ba chương nhanh – chậm – nhanh như sonata thính phòng Ý ([[nhac-thinh-phong]]); tay phải và tay trái là hai bè cao ngang hàng như hai cây violin, chân là bè trầm liên tục. Khi chơi trên organ, bè tay trái thường để ở bàn phím khác với âm sắc khác.
- Lời khuyên chung của giáo viên: bắt đầu bằng **chương chậm**, và dùng sonata BWV 525 hoặc 530 làm sonata đầu tiên — đây là kinh nghiệm sư phạm phổ biến, không phải quy tắc có nguồn cổ.

::ytsearch Bach Trio Sonata BWV 525 organ | Tìm nghe Trio Sonata số 1 BWV 525

## Nối tiếp
Khi phối hợp đã vững, người học bước sang **chơi chorale theo nhiều kiểu** ([[choi-chorale-tren-organ]]) và **chọn âm sắc** cho từng bè ([[phoi-am-sac-organ]]). Toàn bộ tác phẩm theo bậc: [[lo-trinh-tac-pham-organ]].
`,
  },
  {
    slug: "choi-chorale-tren-organ",
    title: "Chơi chorale trên organ: các kiểu chorale prelude, từ Scheidt đến Orgelbüchlein",
    category: 'organ',
    also: ['sacred', 'genres'],
    aliases: ["chơi chorale prelude", "chorale prelude organ", "các kiểu chorale prelude", "chorale partita", "chorale fantasia", "Tabulatura nova", "Durch Adams Fall", "BWV 637"],
    summary: "Chorale prelude là trường học chính của người organist Luther: mỗi bài lấy một giai điệu thánh ca làm cantus firmus. Bài phân loại các kiểu — cantus firmus nguyên, giai điệu tô điểm, fughetta, trio, biến tấu (partita) của Scheidt, Böhm, Pachelbel, fantasia lớn của Buxtehude và Reincken — rồi chỉ cách tập: hát giai điệu và biết lời trước, tìm hình tượng âm nhạc gắn với lời (như các quãng 7 rơi trong Durch Adams Fall BWV 637), chọn âm sắc cho bè giai điệu.",
    refs: [
      ["Wikipedia — Chorale prelude", "https://en.wikipedia.org/wiki/Chorale_prelude"],
      ["Wikipedia — Orgelbüchlein", "https://en.wikipedia.org/wiki/Orgelb%C3%BCchlein"],
      ["Wikipedia — An Wasserflüssen Babylon", "https://en.wikipedia.org/wiki/An_Wasserfl%C3%BCssen_Babylon"],
      ["Bachvereniging — BWV 653", "https://www.bachvereniging.nl/en/bwv/bwv-653"],
    ],
    body: `
Chặng 4 (tiếp) của [[ky-thuat-organ-lo-trinh]]. Thể loại và lịch sử: [[chorale-va-chorale-prelude]]. Kỹ thuật [[cantus-firmus]] trong đối âm. Tập Orgelbüchlein và các tuyển tập khác: [[tai-lieu-su-pham-cua-bach]].

## Vì sao chorale là trường học
Trong nhà thờ Luther, organist **dạo đầu** trước khi cộng đoàn hát một bài chorale, để báo giai điệu và giọng — xem [[dem-hat-cong-doan-tren-organ]]. Vì thế mỗi organist phải chơi (và ứng tác) chorale theo **nhiều kiểu**; trang nhan đề Orgelbüchlein nói đúng điều đó: học cách trình bày một chorale "theo nhiều cách".

## Các kiểu chorale prelude
| Kiểu | Giai điệu chorale | Ví dụ tiêu biểu | Kỹ năng luyện |
|---|---|---|---|
| Cantus firmus nguyên, các bè đan motif | Bè trên, nốt dài | Phần lớn Orgelbüchlein | Bè giữa dày, pedal bắt buộc |
| Giai điệu tô điểm | Bè trên, có [[ky-hieu-hoa-my|hoa mỹ]] | Böhm; Bach BWV 622, 659 | Solo trên bàn phím riêng, đệm nhẹ |
| Fughetta / fugue trên câu đầu | Câu đầu thành chủ đề | Pachelbel, Clavier-Übung III bản nhỏ | Đối âm, [[fugue]] |
| Trio | Một bè trong ba | Bach BWV 655, 664 | [[phoi-hop-tay-chan-organ|Phối hợp ba bè]] |
| Biến tấu (partita) | Mỗi biến tấu một cách | Scheidt (*Tabulatura nova*, 1624), Böhm, Pachelbel | Nhiều kỹ thuật, có thể chỉ cần tay |
| Fantasia lớn | Từng câu, xen đoạn tự do | Buxtehude, Reincken (*An Wasserflüssen Babylon*) | Sức bền, âm sắc, cấu trúc lớn |
| Cantus firmus ở pedal | Pedal chơi giai điệu, thường 4′ hoặc 8′ | Nhiều bài của Bach | Pedal giai điệu |

## Lời và hình tượng
Chorale prelude là nhạc **có lời ngầm**: người nghe Luther thuộc lời. Bach thường vẽ lời bằng âm nhạc: trong *Durch Adams Fall ist ganz verderbt* BWV 637 ("Vì Adam sa ngã, tất cả đều hư hỏng"), pedal liên tục nhảy xuống các **quãng 7** — hình ảnh sự sa ngã thường được các nhà nghiên cứu chỉ ra. Đây là phần của [[bieu-tuong-hoc-am-nhac|biểu tượng học âm nhạc]] — đọc với chừng mực, vì không phải chi tiết nào cũng mang nghĩa.

## Quy trình tập một chorale prelude
1. **Hát giai điệu chorale** và đọc lời (có bản dịch). Biết câu nào kết ở đâu.
2. Tìm giai điệu trong bài: bè nào, có tô điểm không, có ngắt giữa các câu không.
3. Quyết định **âm sắc**: giai điệu phải nổi — bàn phím riêng, âm sắc có lưỡi gà hoặc cornet; bè đệm nhẹ hơn — xem [[phoi-am-sac-organ]].
4. Ghi ngón tay, ngón chân; tập theo cặp như ở [[phoi-hop-tay-chan-organ]].
5. Chơi chorale **nguyên bản bốn bè** trước bài prelude, như trong lễ thật.

## Một câu chuyện về chorale và ngẫu hứng
Năm 1720 ở Hamburg, Bach ứng tác rất lâu trên *An Wasserflüssen Babylon* trước organist già **Reincken**. Theo Nekrolog (1754), Reincken nói: *"Tôi tưởng nghệ thuật này đã chết, nhưng tôi thấy nó vẫn sống trong anh."* Chi tiết: [[bach-nguoi-choi-organ]]; về ngẫu hứng: [[lich-su-ngau-hung]].
`,
  },
  {
    slug: "phoi-am-sac-organ",
    title: "Phối âm sắc (registration) trên organ: plenum Đức, grand jeu Pháp và organ giao hưởng",
    category: 'organ',
    also: ['organology', 'listening'],
    aliases: ["phối âm sắc organ", "registration", "đăng ký âm sắc", "registration organ", "Registrierung", "plenum", "organo pleno", "plein jeu", "grand jeu", "cromorne en taille", "tierce en taille", "récit de cornet", "organ giao hưởng", "symphonic organ"],
    summary: "Người chơi organ tự chọn âm sắc cho bản nhạc. Bài trình bày ba truyền thống lớn — plenum Đức (dàn principal và mixture, như tinh thần \"organo pleno\" của Bach), hệ âm sắc Pháp cổ điển mà nhan đề bài nhạc đã chỉ sẵn (plein jeu, grand jeu, cromorne en taille… từ Nivers 1665 đến Dom Bedos), và organ giao hưởng với hộp cảm âm của Cavaillé-Coll, Widor — cùng nguồn gốc của mỗi lối, lời kể về cách Bach phối khiến người khác kinh ngạc, và nguyên tắc chọn âm sắc trong nhà thờ.",
    refs: [
      ["The Diapason — review: Faulkner, The Registration of J. S. Bach's Organ Works", "https://thediapason.com/diapason-review-registration-j-s-bach%E2%80%99s-organ-works-quentin-faulkner"],
      ["Halden Toy — Historic Registration (PDF, 2026)", "https://slcago.org/wp-content/uploads/2026/01/Halden-Toy-SS2026-SLC-Handout-Historic-Registration.pdf"],
      ["R. Lopes — Tables de registrations (PDF)", "https://www.france-orgue.fr/guide/pdf/tables_de_registrations.pdf"],
      ["data.bnf.fr — Nivers, Livre d'orgue 1665", "https://data.bnf.fr/17070220/guillaume_gabriel_nivers_suites__orgue__6e_ton_transpose_en_sol__livre_1/en.pdf"],
      ["Wikipedia — Organ stop", "https://en.wikipedia.org/wiki/Organ_stop"],
    ],
    body: `
Chặng 5 của [[ky-thuat-organ-lo-trinh]]. Cần biết ký hiệu feet và các họ ống: [[ban-dieu-khien-organ]]. Cơ sở vật lý: [[am-sac]] và [[am-hoc-phong]].

## Ba câu hỏi trước mọi lựa chọn
1. **Bản nhạc thuộc truyền thống nào?** Nhạc Pháp thế kỷ 17 – 18 thường **ghi sẵn** âm sắc ở nhan đề; nhạc Đức thường không.
2. **Organ trước mặt là loại nào?** Không có organ nào có đủ mọi nút; phải "dịch" ý đồ sang nhạc cụ thật.
3. **Phòng vang thế nào và bè nào cần nổi?**

## Truyền thống Đức: plenum
- **Plenum** (*organo pleno*) là dàn **principal** từ 16′ hoặc 8′ lên đến **mixture**, có thể thêm lưỡi gà tuỳ nơi; dùng cho prelude, toccata, fugue lớn — xem [[toccata-prelude-fugue]].
- Các nguồn Đức cho **nguyên tắc chung** về phối âm sắc gồm Werckmeister, Niedt/Mattheson, Scheibe và Adlung; các **tổ hợp cụ thể** thì có trong mô tả organ Görlitz của Boxberg (1704) và trong **lời Bach bàn về việc sửa organ Mühlhausen** (1708). (Theo tổng hợp của Quentin Faulkner, *The Registration of J. S. Bach's Organ Works*.)
- Bach hiếm khi ghi âm sắc; vài chỗ ghi "organo pleno" hoặc chỉ định bàn phím (*à 2 Clav. e Pedal*).
- **C. P. E. Bach** (thư cho Forkel, 1774) kể: các organist thường **sợ** khi Bach muốn chơi organ của họ và kéo nút âm sắc **theo cách riêng**, vì tưởng không thể nghe hay — rồi ngạc nhiên vì nó hay. Xem [[bach-nguoi-choi-organ]].

## Truyền thống Pháp cổ điển: nhan đề là chỉ dẫn
Tập *Livre d'orgue* của **Nivers** (1665) đã có các bài mang tên **plein jeu, grand jeu, récit de cromorne, cornet, duo** — đó vừa là thể loại vừa là **công thức âm sắc**:
| Nhan đề | Âm sắc (khái quát) | Tính chất |
|---|---|---|
| **Plein jeu** | Dàn principal + mixture (Fourniture, Cymbale) | Trang nghiêm, hợp âm dày |
| **Grand jeu** | Lưỡi gà (Trompette, Cromorne) + Cornet + Prestant | Rực rỡ, nhanh |
| **Récit de cromorne / de cornet** | Giai điệu solo trên âm sắc ấy, đệm nhẹ | Hát như giọng người |
| **Tierce / Cromorne en taille** | Giai điệu ở **bè tenor** (taille), tay trái | Đặc sản Pháp |
| **Basse de trompette** | Giai điệu ở bè trầm trên lưỡi gà | Như kèn trumpet |
| **Fond d'orgue** | Các ống nền 8′, 4′ (không mixture) | Êm, tròn |

Các lời tựa của Nivers, Lebègue, Boyvin và bảng của **Dom Bedos** (1766 – 1778) là nguồn chi tiết cho từng công thức; một danh mục tổng hợp: *Tables de registrations* (Lopes). Áp dụng trong [[alternatim-va-thanh-le-organ|thánh lễ organ của Couperin]].

## Organ giao hưởng: to nhỏ dần
Thế kỷ 19, **Cavaillé-Coll** ở Pháp đóng organ có **hộp cảm âm** lớn, nhiều ống dây và lưỡi gà mạnh, cho phép **crescendo** liên tục như dàn nhạc. Widor, Vierne, Franck viết cho loại organ này; âm sắc đổi bằng cách thêm dần nút và mở hộp cảm âm. Đây là lý do nhạc Franck, Widor khó chơi đúng trên organ Baroque nhỏ — và ngược lại.

## Trong nhà thờ hằng tuần
- **Đệm cộng đoàn**: nền 8′ + 4′ vững, thêm 2′ hoặc mixture khi đông người; pedal 16′ + 8′. Đổi âm sắc theo từng đoạn lời — xem [[dem-hat-cong-doan-tren-organ]].
- **Đệm bình ca**: âm sắc nhẹ, chỉ nâng đỡ — xem [[dem-organ-cho-binh-ca]].
- **Dạo đầu và kết lễ**: tuỳ mùa và lễ — xem [[organ-trong-phung-vu]].
- **Kiểm tra từ giữa nhà thờ**: âm sắc nghe ở ghế organ khác hẳn ở chỗ cộng đoàn ngồi. Nhờ người khác chơi để mình xuống nghe.

## Nguyên tắc chung
1. **Ít mà rõ** hơn nhiều mà đục; một bè solo cần một màu khác hẳn bè đệm.
2. **Không chồng hai nút cùng loại cùng cao độ** khi không cần — thường chỉ làm tiếng to và đục.
3. **Nút bồi âm (2 2⁄3′, 1 3⁄5′)** luôn có nền 8′ bên dưới.
4. **Tremulant** cho giai điệu chậm, không cho plenum.
5. Ghi âm sắc đã chọn lên bản nhạc **kèm tên organ** — lần sau ở organ khác sẽ phải "dịch" lại.
`,
  },
  {
    slug: "bach-nguoi-choi-organ",
    title: "Bach, người chơi và người kiểm định organ: những gì Nekrolog, C. P. E. Bach và Forkel kể lại",
    category: 'organ',
    also: ['sacred', 'composers'],
    aliases: ["Bach chơi organ", "Bach organist", "Bach như một organist", "Bach kiểm định organ", "Bach organ examiner", "Nekrolog 1754", "Nekrolog", "Forkel 1802", "Johann Nikolaus Forkel", "Reincken", "Johann Adam Reincken", "Arnstadt 1703", "Mühlhausen 1708", "organ có phổi tốt"],
    summary: "Bach nổi tiếng lúc sinh thời trước hết là nghệ sĩ organ và người kiểm định organ, không phải nhà soạn nhạc. Bài lập niên biểu từ bản chép Reincken ở Lüneburg (1700), lần thử organ mới ở Arnstadt (1703), chuyến đi Lübeck, bản đề xuất sửa organ Mühlhausen (1708), Weimar, các lần kiểm định ở Halle (1716) và Leipzig (1717), đến buổi ứng tác trước Reincken ở Hamburg (1720) — kèm nguyên văn (bản dịch) các lời kể: \"organ có phổi tốt không\", cách kéo nút âm sắc làm người khác sợ, bàn tay cong theo Forkel.",
    wiki: "Johann_Sebastian_Bach",
    refs: [
      ["Bach-cantatas — Bach và các organ (danh mục)", "https://www.bach-cantatas.com/Organ/index.htm"],
      ["Bach-cantatas — Arnstadt, biên bản Wender 1703 (PDF)", "https://www.bach-cantatas.com/Organ/Arnstadt-Neuekirche-Wender-Report.pdf"],
      ["Wikipedia — Divi Blasii (Mühlhausen)", "https://en.wikipedia.org/wiki/Divi_Blasii"],
      ["Wikipedia — Johann Friedrich Wender", "https://en.wikipedia.org/wiki/Johann_Friedrich_Wender"],
      ["Wikipedia — Johann Adam Reincken", "https://en.wikipedia.org/wiki/Johann_Adam_Reincken"],
      ["WPR — C. P. E. Bach tả cha mình (1774)", "https://wpr.org/culture/one-kind"],
      ["JAMIS — trích Forkel về Bach thử organ (PDF)", "https://amis.mircat.org/jamis/1985_038.pdf"],
      ["Project Gutenberg — Forkel/Terry, Johann Sebastian Bach (1920)", "https://gutenberg.org/files/35041/35041-h/35041-h.html"],
      ["Project Gutenberg — Pirro, J. S. Bach: The Organist and His Works for the Organ", "https://gutenberg.org/files/59085/59085-h/59085-h.htm"],
    ],
    body: `
Chặng 5 (tiếp) của [[ky-thuat-organ-lo-trinh]]. Tiểu sử chung: [[johann-sebastian-bach]]. Bach dạy học trò thế nào: [[bach-day-hoc-tro]]. Tài liệu ông để lại: [[tai-lieu-su-pham-cua-bach]].

## Ba nguồn chính và độ tin cậy
| Nguồn | Năm | Ai viết | Độ tin cậy |
|---|---|---|---|
| **Nekrolog** (cáo phó) | in 1754 trong *Musikalische Bibliothek* của Mizler | **C. P. E. Bach** và **J. F. Agricola** (học trò) | Gần gũi, nhưng là lời ca ngợi của con và trò |
| **Thư C. P. E. Bach gửi Forkel** | 1774 – 1775 | C. P. E. Bach | Trả lời câu hỏi cụ thể; nhớ lại sau hơn 20 năm |
| **Forkel**, *Ueber Johann Sebastian Bachs Leben, Kunst und Kunstwerke* | 1802 | J. N. Forkel (chưa từng gặp Bach) | Dựa nhiều vào hai con trai; tiểu sử đầu tiên |
Đọc chúng như **lời kể có chủ đích**, đối chiếu với giấy tờ (hợp đồng, biên bản, hoá đơn) khi có — xem [[phuong-phap-su-hoc-am-nhac]].

## Niên biểu Bach và organ
::timeline 1700=Lüneburg 1703=Arnstadt 1705-1706=Lübeck 1707-1708=Mühlhausen 1708-1717=Weimar 1716=Halle 1717=Leipzig_St_Paul 1720=Hamburg 1723-1750=Leipzig_Thomaskantor | Bach và organ

| Năm | Sự việc | Nguồn |
|---|---|---|
| 1700 | Ở Lüneburg, chép *An Wasserflüssen Babylon* của Reincken — bản tay sớm nhất còn lại của Bach (tìm thấy ở Weimar) | Nghiên cứu nguồn |
| 1703 | Được mời **thử** organ mới của J. F. Wender ở Nhà thờ Mới Arnstadt; biên bản ghi tiền trả cho việc "thử organ mới và chơi nó lần đầu"; sau đó nhận chức organist ở đây | Biên bản Arnstadt, 13/7/1703 |
| 1705 – 1706 | Đi Lübeck nghe **Buxtehude**, ở lại lâu quá phép — xem [[dieterich-buxtehude]] | Biên bản hội đồng Arnstadt |
| 1706 | Hội đồng Arnstadt trách ông đệm chorale với những biến tấu lạ — xem [[dem-hat-cong-doan-tren-organ]] | Biên bản Arnstadt |
| 1707 – 1708 | Organist ở Mühlhausen; viết **đề xuất sửa organ** Divi Blasii (3 bàn phím tay, pedal, khoảng 37 – 38 nút — các nguồn đếm khác nhau), Wender thi công | Văn bản đề xuất còn giữ |
| 1708 – 1717 | Organist triều đình Weimar; phần lớn Orgelbüchlein và nhiều prelude – fugue | — |
| 1716 | Cùng **Kuhnau** và **C. F. Rolle** kiểm định organ mới ở Halle | Biên bản chung |
| 1717 | Kiểm định organ Nhà thờ Thánh Phaolô (Paulinerkirche), Leipzig | Biên bản |
| 1720 | Hamburg: ứng tác trước **Reincken** | Nekrolog |

## Những lời kể đáng nhớ
- **"Organ có phổi tốt không."** C. P. E. Bach kể với Forkel: khi thử một organ, việc đầu tiên cha ông làm là đùa rằng **"trước hết phải biết organ có phổi tốt không"**, rồi kéo hết nút âm sắc và chơi càng nhiều bè càng tốt — khiến thợ đóng đàn tái mặt. "Phổi" là **hệ thống hơi**: organ thiếu hơi sẽ kêu chao khi chơi đầy. Các bản dịch câu này khác nhau đôi chút.
- **Cách kéo nút âm sắc.** Cũng theo các nguồn này, organist khác thường sợ khi Bach kéo nút theo cách riêng, tin rằng không thể hay — xem [[phoi-am-sac-organ]].
- **Reincken, 1720.** Theo Nekrolog, sau khi Bach ứng tác gần nửa giờ trên *An Wasserflüssen Babylon*, Reincken nói: *"Tôi tưởng nghệ thuật này đã chết, nhưng tôi thấy nó vẫn sống trong anh."* Nekrolog tả Reincken khi ấy "gần trăm tuổi"; nghiên cứu hiện nay đặt năm sinh ông khoảng 1643, tức khoảng 77 tuổi — **lời Nekrolog phóng đại**. Một số tài liệu phổ thông ghi năm 1722, cũng không khớp với các nguồn chính.
- **Trio sonata cho Friedemann.** Forkel: sáu sonata BWV 525 – 530 được viết để con trai cả luyện thành nghệ sĩ organ lớn — xem [[phoi-hop-tay-chan-organ]].
- **Bàn tay.** Forkel tả ngón Bach **cong**, chuyển động gọn ở đầu ngón, rút ngón về phía lòng bàn tay khi rời phím — xem [[ngon-tay-organ]].

## Bach và việc kiểm định
Kiểm định organ là nghề có sách hẳn hoi — **Werckmeister**, *Orgel-Probe* (1681, 1698) — xem [[sach-co-ve-organ]]. Người kiểm định thử hơi (chơi đầy), thử từng ống, từng phím, nghe độ đều và [[cac-he-thong-chinh-am|cách lên dây]], rồi viết biên bản cho nhà thờ. Danh mục các lần Bach kiểm định organ được tổng hợp trên Bach-cantatas.

## Bài học cho người học hôm nay
1. **Biết nhạc cụ như người thợ.** Bach được mời vì ông hiểu ống, hơi và bộ máy — học [[ban-dieu-khien-organ]] và [[organ-ong]] không phải chuyện phụ.
2. **Ứng tác là kỹ năng chính** của organist, không phải trang trí — xem [[ngau-hung-ung-tac]].
3. **Âm sắc là sáng tạo**, không phải bảng tra cứu.

::ytsearch Bach An Wasserflüssen Babylon BWV 653 organ | Tìm nghe chorale Leipzig BWV 653
`,
  },
  {
    slug: "organ-trong-phung-vu",
    title: "Organ trong phụng vụ: vai trò, mùa phụng vụ và văn kiện Giáo hội",
    category: 'organ',
    also: ['sacred'],
    aliases: ["organ trong phụng vụ", "organ trong thánh lễ", "organist nhà thờ", "liturgical organ", "organ liturgy", "Sacrosanctum Concilium 120", "organ mùa Chay", "organ mùa Vọng", "dạo đầu thánh lễ", "kết lễ organ", "postlude", "voluntary"],
    summary: "Việc của organist nhà thờ không chỉ là trình diễn: dạo đầu, đệm cộng đoàn, nối các phần, nhạc dâng lễ và hiệp lễ, kết lễ. Bài nêu từng vai trò trong thánh lễ, quy định về organ trong mùa Vọng và mùa Chay (Quy chế Tổng quát Sách lễ Rôma, số 313), lời Công đồng Vatican II (Sacrosanctum Concilium 120, 1963) và Musicam Sacram (1967), dấu vết các luật cổ hơn (Caeremoniale Episcoporum 1600), và vai trò dạo đầu chorale trong nhà thờ Luther.",
    refs: [
      ["Vatican — Sacrosanctum Concilium (1963), số 120", "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html"],
      ["Adoremus — về SC 120 và Musicam Sacram", "https://adoremus.org/2017/07/pope-john-xxiiis-quiet-theology-noble-pipe-organ-resounds-liturgical-implications/"],
      ["Pray Tell — When should the organ (not) be used?", "https://praytellblog.com/index.php/2015/03/31/when-should-the-organ-not-be-used/"],
      ["Musica Sacra Forum — organ trong mùa Chay trước 1958", "https://forum.musicasacra.com/forum/discussion/22309"],
    ],
    body: `
Chặng 6 của [[ky-thuat-organ-lo-trinh]]. Đây là nơi mục Organ gặp mục [[am-nhac-nha-tho]]: đệm bình ca ([[dem-organ-cho-binh-ca]]), organ thay lời hát ([[alternatim-va-thanh-le-organ]]), đệm cộng đoàn ([[dem-hat-cong-doan-tren-organ]]), và bối cảnh Việt Nam ([[binh-ca-va-organ-o-viet-nam]]).

## Văn kiện
- **Sacrosanctum Concilium, số 120** (Công đồng Vatican II, 1963): *"Trong Giáo hội Latinh, đàn organ ống phải được quý trọng như nhạc cụ truyền thống, mà âm thanh có thể làm tăng vẻ huy hoàng lạ lùng cho các nghi lễ của Giáo hội và nâng mạnh tâm hồn con người lên cùng Thiên Chúa và những thực tại trên trời."* Văn kiện cũng cho phép các nhạc cụ khác nếu hợp với phụng vụ và được thẩm quyền chấp thuận.
- **Musicam Sacram** (1967) nhắc lại nguyên văn câu này.
- **Quy chế Tổng quát Sách lễ Rôma, số 313**: mùa **Vọng** dùng organ **có chừng mực**, hợp với tính chất chờ đợi của mùa; mùa **Chay** organ **chỉ được dùng để nâng đỡ tiếng hát**, trừ Chúa nhật Laetare (IV mùa Chay), các lễ trọng và lễ kính.
- **Tra le sollecitudini** (1903): organ được phép nhưng chỉ "nâng đỡ, không lấn át" — xem [[sach-hat-va-van-kien-binh-ca]].
- **Luật cổ hơn**: việc cấm hoặc hạn chế organ trong mùa Vọng và mùa Chay thường được truy về **Caeremoniale Episcoporum** (1600, sách I, chương 28). Điều này hiện chỉ được thảo luận qua **nguồn thứ cấp** (diễn đàn, blog); cần đọc văn bản Latinh trước khi khẳng định.

## Vai trò trong thánh lễ
| Lúc | Organ làm gì | Kỹ năng cần |
|---|---|---|
| Trước lễ | Dạo nhạc, tạo không khí, báo giọng bài ca nhập lễ | Tác phẩm hoặc [[prelude-ung-tac|dạo đầu ứng tác]] |
| Ca nhập lễ, đáp ca, các bài hát | **Đệm cộng đoàn** — việc quan trọng nhất | [[dem-hat-cong-doan-tren-organ]], [[phoi-am-sac-organ]] |
| Phần bình ca | Đệm nhẹ hoặc im lặng | [[dem-organ-cho-binh-ca]] |
| Dâng lễ | Nhạc độc tấu ngắn hoặc ứng tác, **dừng đúng lúc** nghi thức xong | Ứng tác co giãn được — [[ngau-hung-ung-tac]] |
| Hiệp lễ | Nhạc trầm lắng, có thể dài theo hàng người lên rước lễ | Chorale prelude, ứng tác |
| Kết lễ | Postlude — nơi organ được "nói" nhiều nhất | Tác phẩm lớn: [[toccata-prelude-fugue]] |

## Truyền thống Luther
Trong nhà thờ Luther, organist **dạo đầu** trước mỗi bài chorale (báo giai điệu và giọng), có khi chơi **xen** giữa các khổ — đó là nguồn gốc của hàng nghìn [[chorale-va-chorale-prelude|chorale prelude]] — xem [[choi-chorale-tren-organ]]. Organ cũng thay phiên với ca đoàn trong lối [[alternatim-va-thanh-le-organ|alternatim]], ở cả nhà thờ Công giáo lẫn Luther.

## Kỹ năng phụng vụ khó dạy bằng sách
1. **Canh thời gian**: nhạc dâng lễ, hiệp lễ phải kết được ở bất cứ câu nào — luyện các [[cau-ket|câu kết]] ngắn ở mọi giọng.
2. **Chuyển giọng nhanh** từ bài này sang bài kia — xem [[chuyen-giong]].
3. **Nghe linh mục và cộng đoàn**: nhịp hát của cộng đoàn chậm hơn nhịp "đúng"; organ dẫn nhưng không kéo.
4. **Hiểu lịch phụng vụ**: mùa, lễ, màu sắc — để chọn bài và [[phoi-am-sac-organ|âm sắc]].
`,
  },
  {
    slug: "luyen-tap-organ",
    title: "Phương pháp luyện tập organ — kể cả khi không có organ",
    category: 'organ',
    also: ['technique'],
    aliases: ["luyện tập organ", "tập organ", "organ practice", "tập organ ở nhà", "pedal harpsichord", "pedal piano", "organ số", "virtual pipe organ", "Hauptwerk (phần mềm)"],
    summary: "Thời gian ngồi trước organ thật thường rất ít, nên người organist phải tập thông minh: ghi ngón tay và ngón chân trước, tập từng bè và theo cặp, chậm với máy nhịp, tập pedal riêng mỗi ngày, học thuộc cấu trúc. Bài đưa ra kế hoạch tuần, cách tập trên piano và organ số khi không có organ ống — như các đàn phím có pedal đã có từ thời Bach — và những lưu ý sức khoẻ cho lưng và chân.",
    refs: [
      ["Metropolitan Museum — pedal harpsichord thời Bach", "https://www.metmuseum.org/perspectives/bach-birthday-pedal-harpsichord"],
      ["Wikipedia — Pedal piano", "https://en.wikipedia.org/wiki/Pedal_piano"],
      ["Wikipedia — Hauptwerk (software)", "https://en.wikipedia.org/wiki/Hauptwerk_(software)"],
    ],
    body: `
Xuyên suốt [[ky-thuat-organ-lo-trinh]]. Phương pháp luyện tập chung: [[phuong-phap-luyen-tap]]; tập với máy nhịp: [[luyen-tap-voi-may-nhip]]; tập trong đầu: [[tap-trong-dau]]; học thuộc: [[hoc-thuoc-bai]].

## Thứ tự tập một bài mới
1. **Phân tích** trước: hình thức, giọng, chỗ kết — xem [[phuong-phap-phan-tich-tac-pham]].
2. **Ghi ngón tay và ngón chân** cho toàn bài, bằng bút chì — [[ngon-tay-organ]], [[ky-thuat-pedal-organ]].
3. **Từng bè**, rồi **theo cặp**, rồi đủ ba bè — [[phoi-hop-tay-chan-organ]].
4. **Chậm** với máy nhịp; tăng từng nấc nhỏ; mỗi tốc độ chơi sạch ba lần mới tăng.
5. Quyết định **cách chạm** (nối, tách) và ghi lại — [[cach-cham-phim-organ]].
6. Cuối cùng mới **âm sắc**, trên organ thật — [[phoi-am-sac-organ]].

## Kế hoạch tuần mẫu (khoảng 60 phút/ngày)
| Phần | Thời gian | Nội dung |
|---|---|---|
| Khởi động tay | 10 phút | Âm giai, hợp âm, legato – tách nốt |
| Pedal riêng | 10 phút | Âm giai pedal, quãng, bè trầm chorale |
| Chorale | 10 phút | Một chorale bốn bè: tay + chân; đổi kiểu chạm |
| Bài chính | 25 phút | Theo thứ tự ở trên |
| Thị tấu, ứng tác | 5 phút | Một chorale mới, hoặc dạo đầu ngắn — [[thi-tau]], [[prelude-ung-tac]] |

## Khi không có organ
Ở Việt Nam, organ ống hiếm và thời gian tập trên đó còn hiếm hơn — xem [[binh-ca-va-organ-o-viet-nam]]. Người chơi organ từ xưa cũng đã tập ở nhà trên **đàn phím có pedal**: bảo tàng Metropolitan ghi nhận đàn harpsichord có pedal chắc chắn đã tồn tại thời Bach, dù không còn chiếc nào nguyên bàn phím gốc.
- **Piano**: tập tay (ngón, cách chạm, bè giữa). Lưu ý tắt hoàn toàn [[ban-dap|pedal vang]] để nghe đúng nối – ngắt.
- **Bàn pedal rời / organ số có pedal**: tập chân và phối hợp. Bàn pedal nên theo chuẩn (lõm, xoè) càng gần organ thật càng tốt.
- **Phần mềm organ ảo** (như Hauptwerk) dùng mẫu thu từ organ thật — tốt để tập âm sắc, nhưng không thay được cảm giác bộ máy cơ và tiếng vang thật.
- **Tập không nhạc cụ**: đọc bản, hát từng bè, gõ nhịp bằng chân — xem [[tap-trong-dau]].

## Trên organ thật
- Dành thời gian **thử âm sắc** và **nghe từ giữa nhà thờ** (nhờ người khác chơi hoặc thu âm).
- Tập trước những chỗ **đổi âm sắc** và đổi bàn phím — đây là nơi hay vấp nhất khi biểu diễn.
- Biết luật của nhà thờ: giờ được tập, độ to, mùa phụng vụ — xem [[organ-trong-phung-vu]].

## Sức khoẻ
- Ghế đúng chiều cao để không gồng lưng; nghỉ 5 phút mỗi 25 – 30 phút.
- Pedal tập lâu dễ mỏi cổ chân và hông — tăng dần thời lượng.
- Organ lớn rất to: bảo vệ thính giác khi tập lâu với plenum — xem [[bao-ve-thinh-giac]].
- Hồi hộp khi chơi lễ: [[hoi-hop-bieu-dien]].
`,
  },
  {
    slug: "lo-trinh-tac-pham-organ",
    title: "Lộ trình tác phẩm organ theo bậc: từ bài pedal đầu tiên đến Widor",
    category: 'organ',
    also: ['musicianship'],
    aliases: ["lộ trình tác phẩm organ", "bài organ theo trình độ", "organ repertoire", "organ graded repertoire", "Eight Little Preludes and Fugues", "BWV 553–560", "BWV 553-560", "79 chorales Dupré", "giáo trình organ", "Gleason Method of Organ Playing", "Mendelssohn organ sonatas", "Op. 65"],
    summary: "Một lộ trình năm bậc cho người học organ đã có nền piano: giáo trình nên dùng ở mỗi bậc (Gleason, Lemmens, Dupré), các tập tác phẩm theo độ khó — từ những prelude và fugue nhỏ BWV 553–560 (nay thường được cho là không phải của Bach), 79 chorale của Dupré, Orgelbüchlein, Buxtehude, Pachelbel, Böhm, đến trio sonata và prelude – fugue lớn của Bach, sáu sonata Mendelssohn Op. 65 (1845), Franck, Widor, Vierne, Messiaen — và mục tiêu phụng vụ tương ứng.",
    refs: [
      ["Wikipedia — Eight Short Preludes and Fugues", "https://en.wikipedia.org/wiki/Eight_Short_Preludes_and_Fugues"],
      ["Wikipedia — Organ Sonatas (Mendelssohn)", "https://en.wikipedia.org/wiki/Organ_Sonatas_(Mendelssohn)"],
      ["IMSLP — 6 Sonatas for Organ, Op. 65 (Mendelssohn)", "https://imslp.org/wiki/6_Sonatas_for_Organ_(Mendelssohn,_Felix)"],
      ["Wikipedia — Orgelbüchlein", "https://en.wikipedia.org/wiki/Orgelb%C3%BCchlein"],
      ["Wikipedia — Organ Sonatas (Bach)", "https://en.wikipedia.org/wiki/Organ_Sonatas_(Bach)"],
    ],
    body: `
Xuyên suốt [[ky-thuat-organ-lo-trinh]]. Lộ trình piano tương ứng nằm ở mục Giáo trình của app. Bậc dưới đây là **kinh nghiệm sư phạm phổ biến**, không phải hệ thống thi chính thức; Royal College of Organists (Anh) có hệ chứng chỉ riêng cho ai muốn thi.

## Năm bậc
| Bậc | Kỹ năng | Giáo trình | Tác phẩm tiêu biểu | Phụng vụ |
|---|---|---|---|---|
| **0. Nền** | Piano khoảng cấp 5 – 6 ABRSM; đọc ba khuông; [[bass-so]] cơ bản | — | Piano: Inventions 2 bè — xem [[phan-tich-invention-so-1]] | — |
| **1. Làm quen** | Tay legato – tách; pedal mũi chân; ba khuông | Gleason, *Method of Organ Playing*; hoặc Dupré, *Méthode* phần đầu | Chorale bốn bè (tay + pedal); bài manualiter (chỉ tay) của Pachelbel, Scheidt | Đệm bài hát đơn giản |
| **2. Ba bè** | Pedal mũi – gót; phối hợp; đổi bàn phím | Dupré, **79 chorales** Op. 28 (chuẩn bị cho chorale Bach) | **Eight Little Preludes and Fugues** BWV 553 – 560; Orgelbüchlein chậm (BWV 599, 614); Pachelbel, Böhm | Dạo đầu ngắn; đệm cộng đoàn có pedal |
| **3. Bach và Bắc Đức** | Trio; plenum; fugue | Lemmens, *École d'orgue* (chọn bài) | Orgelbüchlein nhanh hơn; prelude – fugue cỡ vừa; Buxtehude (prelude, chorale); **Trio Sonata** (bắt đầu bằng chương chậm) | Kết lễ bằng prelude – fugue; ứng tác dạo đầu |
| **4. Lãng mạn và hiện đại** | Legato thay ngón; hộp cảm âm; âm sắc giao hưởng | Dupré, *Méthode* đầy đủ | **Mendelssohn, 6 Sonata Op. 65** (1845); Franck (*Six pièces*); prelude – fugue lớn và Leipzig chorale của Bach | Chương trình hoà nhạc ngắn |
| **5. Đỉnh cao** | Mọi kỹ thuật; ứng tác lớn | Dupré, *Cours complet d'improvisation* | Widor, Vierne (giao hưởng organ); Reger; Messiaen; Trio Sonata đủ sáu bài | Ứng tác thánh lễ trọn vẹn |

## Ghi chú về một số tập
- **Eight Little Preludes and Fugues (BWV 553 – 560)** — từng được gán cho Bach; nghiên cứu nguồn của Alfred Dürr (1987) và phân tích phong cách của Peter Williams nghiêng về một học trò, có thể là **J. L. Krebs** hoặc cha ông J. T. Krebs; nhưng danh mục tác phẩm Krebs lại loại chúng ra vì cũng nghi ngờ. **Chưa có kết luận**. Dù ai viết, đây vẫn là bậc thang sư phạm kinh điển.
- **Orgelbüchlein** không xếp theo độ khó mà theo năm phụng vụ; giáo viên chọn bài chậm trước — xem [[choi-chorale-tren-organ]].
- **Mendelssohn Op. 65**: nhà xuất bản Coventry & Hollier (London) đặt năm 1844, ban đầu là các voluntary; Mendelssohn viết thành **sáu sonata**, in năm 1845. "Sonata" ở đây theo nghĩa Bach — một chuỗi chương — hơn là [[hinh-thuc-sonata|hình thức sonata]] cổ điển. Một chặng quan trọng trong việc [[felix-mendelssohn|Mendelssohn]] đưa Bach trở lại.
- **79 chorales** của Dupré: các bài chorale ngắn trên giai điệu mà Bach dùng trong Orgelbüchlein, viết làm bậc chuẩn bị.

## Nhà soạn nhạc theo truyền thống
- **Tây Ban Nha – Ý – Hà Lan (thế kỷ 16 – 17):** [[antonio-de-cabezon]], [[girolamo-frescobaldi]], Sweelinck.
- **Bắc và Trung Đức:** [[samuel-scheidt]], [[dieterich-buxtehude]], Reincken, [[georg-bohm]], [[johann-pachelbel]], [[johann-sebastian-bach]].
- **Pháp cổ điển:** Titelouze, Nivers, [[francois-couperin]], Grigny — gắn với [[alternatim-va-thanh-le-organ|thánh lễ organ]].
- **Thế kỷ 19:** [[felix-mendelssohn]], [[franz-liszt]], [[cesar-franck]], [[charles-marie-widor]], Vierne, [[max-reger]].
- **Thế kỷ 20:** Dupré, Duruflé, [[olivier-messiaen]].

## Ba cách đi song song
1. **Tác phẩm** (bảng trên).
2. **Phụng vụ**: đệm hát, đệm bình ca — [[organ-trong-phung-vu]].
3. **Ứng tác**: từ câu kết đến dạo đầu chorale — [[ngau-hung-ung-tac]], [[partimento]].
`,
  },
]
