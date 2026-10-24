import type { Article } from '../wiki'

const BOOK: [string, string] = ['Мазель Л. А., Строение музыкальных произведений. Учебное пособие, 2-е изд., доп. и перераб. — М.: Музыка, 1979 (bản PDF do Lamar cung cấp)', 'https://www.choirbgam.by/wp-content/uploads/2023/04/Мазель-Л.-Строение-музыкальных-произведений.pdf']
const WIKI: [string, string] = ['Википедия — Мазель, Лев Абрамович', 'https://ru.wikipedia.org/wiki/Мазель,_Лев_Абрамович']
const NOTE = 'Bài đọc từ bản 2 (1979) của sách, qua văn bản nhận dạng chữ (OCR) từ bản scan. Các câu trong ngoặc kép là dịch sát nguyên văn tiếng Nga; số chương, mục (§) theo sách.'

export const mazel: Article[] = [
  {
    slug: 'mazel-cau-truc-tac-pham-am-nhac',
    title: 'Mazel: Cấu trúc tác phẩm âm nhạc — tổng quan sách',
    category: 'form',
    aliases: ['Mazel', 'Мазель', 'Строение музыкальных произведений', 'cấu trúc tác phẩm âm nhạc', 'phân tích tổng thể', 'целостный анализ', 'Lev Mazel'],
    summary: 'Lev Mazel (1907 – 2000), Cấu trúc tác phẩm âm nhạc (1960; bản 2 bổ sung 1979, NXB Muzyka): giáo trình phân tích tác phẩm của Nhạc viện Moskva, 15 chương — từ cơ sở thẩm mỹ và phương pháp phân tích, giai điệu, tiết tấu, cấu trúc câu – đoạn, đến mọi hình thức (đơn, phức, rondo, biến tấu, phức điệu, sonata, rondo – sonata, chu kỳ, hình thức hỗn hợp, thanh nhạc). Bài này là mục lục dẫn sang các bài chi tiết.',
    refs: [BOOK, WIKI],
    body: `
**Lev Abramovich Mazel** (1907 – 2000), giáo sư Nhạc viện Moskva (dạy 1931 – 1967). *Строение музыкальных произведений* in lần đầu năm **1960**; bản thứ hai "bổ sung và sửa lại" in năm **1979** (NXB Muzyka, Moskva). Thư viện đọc theo bản 1979.

${NOTE}

## Sách viết cho ai, để làm gì
Theo lời tựa bản 2, sách là giáo trình môn Phân tích tác phẩm ở trường đại học âm nhạc. Năm chương đầu khá khó; tác giả khuyên giảng viên trình bày gọn lúc đầu khoá rồi **bổ sung dần** trong quá trình học. Không phải mọi điều ở chương đầu đều dùng ngay ở các chương sau — nhiều kiến thức dành cho việc phân tích tuỳ mục đích cụ thể.

## Mục lục và bài tương ứng
| Chương | Nội dung | Bài trong thư viện |
|---|---|---|
| I (mở đầu) | Cơ sở thẩm mỹ và phương pháp: phong cách, thể loại, hình thức theo nghĩa rộng – hẹp, khả năng biểu hiện của phương tiện, nguyên tắc tác động nghệ thuật, "phát hiện nghệ thuật", phương pháp phân tích | [[mazel-phuong-phap-phan-tich]] |
| II – III | Giai điệu; tiết tấu và nhịp (motif, câu, motif iambic – trochaic, ô nặng – nhẹ, cấu trúc vuông – không vuông) | [[mazel-giai-dieu-va-tiet-tau]] |
| IV – V | Sự phân đoạn; cấu trúc giai điệu – cú pháp (tổng hợp, chia nhỏ có khép); chủ đề, đoạn nhạc, chức năng các phần, kiểu trình bày, nguyên tắc phát triển | [[mazel-cau-truc-cau-doan-va-chuc-nang]] |
| VI – VII | Hình thức hai, ba đoạn đơn; ba đoạn và hai đoạn phức | [[mazel-hinh-thuc-don-va-phuc]] |
| VIII – IX | Rondo; hình thức biến tấu | [[mazel-rondo-va-bien-tau]] |
| X | Phức điệu và hình thức phức điệu (mô phỏng, canon, đối âm phức, fugue) | [[mazel-phuc-dieu-va-fugue]] |
| XI – XII | Hình thức sonata; rondo – sonata | [[mazel-sonata-va-rondo-sonata]] |
| XIII – XV | Hình thức chu kỳ, hình thức ghép tương phản, hình thức hỗn hợp (tự do) một chương, hình thức thanh nhạc (cantata, oratorio, opera) | [[mazel-chu-ky-hon-hop-va-thanh-nhac]] |

## Đóng góp chính của Mazel
| Ý tưởng | Tiếng Nga | Bài |
|---|---|---|
| Khả năng biểu hiện của phương tiện | выразительные возможности | [[mazel-phuong-phap-phan-tich]] |
| Nguyên tắc tác động nhiều mặt và tập trung | принцип множественного и концентрированного воздействия | như trên |
| Nguyên tắc kết hợp chức năng | принцип совмещения функций | như trên |
| Theo và phá quán tính tiếp nhận | инерция восприятия | như trên |
| Phát hiện nghệ thuật | художественное открытие | như trên |
| Phân tích tổng thể | целостный анализ | như trên |

Ngoài sách này, Mazel còn viết *О мелодии* (Về giai điệu, 1952) và cùng **V. Zukkerman** viết *Анализ музыкальных произведений* (1967).

Đặt cạnh Sposobin và Asafyev: [[hinh-thuc-va-phan-tich-truong-phai-nga]].
`,
  },
  {
    slug: 'mazel-phuong-phap-phan-tich',
    title: 'Mazel: cơ sở thẩm mỹ và phương pháp phân tích tác phẩm (chương I)',
    category: 'analysis',
    aliases: ['phương pháp phân tích Mazel', 'khả năng biểu hiện', 'выразительные возможности', 'nguyên tắc tác động nghệ thuật', 'совмещение функций', 'tác động nhiều mặt và tập trung', 'quán tính tiếp nhận', 'инерция восприятия', 'phát hiện nghệ thuật', 'художественное открытие', 'целостный анализ'],
    summary: 'Chương mở đầu sách Mazel: không phương tiện nào có nghĩa cố định, mỗi phương tiện có một vùng khả năng biểu hiện; phương tiện kết thành phức hợp có hạt nhân; chức năng biểu hiện và chức năng giao tiếp (tạo hình thức); hai cặp nguyên tắc tác động (nhiều mặt – tập trung / kết hợp chức năng; theo – phá quán tính tiếp nhận); phát hiện nghệ thuật; phân tích đi theo hai hướng; ví dụ "Bài ca người gặp gỡ" của Shostakovich.',
    refs: [BOOK],
    body: `
${NOTE}

## §4. Hình thức theo nghĩa rộng và nghĩa hẹp
- Tác phẩm là **thống nhất giữa nội dung và hình thức**.
- **Nghĩa rộng**: hình thức là toàn bộ hệ thống có tổ chức các phương tiện âm nhạc thể hiện nội dung.
- **Nghĩa hẹp**: hình thức là **bố cục** — cách tác phẩm chia phần và các phần nối nhau (đoạn nhạc, hai đoạn, ba đoạn, rondo, sonata…). Môn học dùng cả hai nghĩa.

## §5. Khả năng biểu hiện của phương tiện
- "Một thủ pháp, một phương tiện riêng lẻ **không có ý nghĩa biểu hiện xác định, cho một lần là xong**." Ví dụ của sách: [[dao-phach|đảo phách]] lúc thì góp phần tạo vẻ sắc, năng động, bùng nổ, lúc lại tạo xao động trữ tình.
- Nhưng mỗi phương tiện có **một vùng khả năng biểu hiện chính, điển hình**. Vùng ấy do vị trí của phương tiện trong hệ thống ngôn ngữ âm nhạc đã hình thành trong lịch sử quyết định. Đảo phách gây hiệu quả vì nó "mâu thuẫn" với nhịp có trọng âm đều của âm nhạc châu Âu thế kỷ 17 – 20, phá thế quen nghe của người nghe.
- Khả năng nào được hiện thực hoá là tuỳ **điều kiện cụ thể**: tương tác với các yếu tố khác, phức hợp mà phương tiện tham gia, ngữ cảnh chung.
- Các phương tiện **không bình đẳng**: một số ít làm **hạt nhân** biểu hiện, quyết định tính chất thể loại – biểu cảm chung; số còn lại phục tùng hạt nhân nhưng thêm sắc thái riêng, làm hình tượng cá biệt hơn.
- Ví dụ sách phân tích: nhiều chủ đề mở đầu chương nhanh của các nhà cổ điển Vienna (Haydn, Mozart, Beethoven) có **tương phản bên trong**: yếu tố đầu quyết đoán, nặng; yếu tố sau mềm, nhẹ. Hạt nhân của tương phản là ba cặp đối lập; sách nêu trước hết **cường độ** (forte – piano) và **nhịp – khớp nối** (nhấn phách mạnh nhiều hay ít, kết "nam" chiếm ưu thế hay kết "nữ" đáng kể).

## §6 – 7. Chức năng giao tiếp và hệ thống phương tiện
- Ngoài chức năng biểu hiện (nội dung), phương tiện còn có **chức năng giao tiếp**: làm cho nội dung đến người nghe rõ ràng, hấp dẫn, dễ tiếp nhận. **Chức năng tạo hình thức** là một phần của nó (giúp nhận ra ranh giới các phần, sự quay về…).
- Giao tiếp có hai phía: ví dụ đoạn dạo đàn piano trong romance hay đoạn dàn nhạc trong concerto còn để **người hát, người chơi được nghỉ**, không chỉ để đổi màu âm hay đánh dấu ranh giới cho người nghe.

## §8. Những nguyên tắc tác động nghệ thuật chung
Các nguyên tắc chung cho mọi nghệ thuật, nhưng luôn thực hiện bằng phương tiện riêng của từng ngành.
| Cặp | Nguyên tắc | Nội dung theo sách |
|---|---|---|
| 1 | **Tác động nhiều mặt và tập trung** | Một hiệu quả biểu hiện quan trọng không do một phương tiện mà do **nhiều phương tiện cùng hướng** tạo ra. Bản nhạc buồn không chỉ dùng giọng thứ, mà cả [[nhip-do|tiến độ]] chậm, ngữ điệu, tiết tấu, hình đệm phù hợp. Trong thơ cũng vậy: khổ thơ, nhịp, vần, âm thanh, nghĩa từ cùng tác động |
| 1 | **Kết hợp chức năng** | Đối trọng của nguyên tắc trên: đòi hỏi cấu trúc **giản dị, tiết kiệm** — một yếu tố đồng thời làm nhiều việc. Ví dụ: âm giai đi xuống đều ở bè trầm vừa có sức kết thúc, tổng kết, nên hay gặp ở coda |
| 2 | **Theo quán tính tiếp nhận và phá quán tính** | Người nghe quen với điều đã lặp lại và chờ nó tiếp diễn; tác giả khi thì đáp ứng, khi thì phá vỡ. "Món nợ" với quán tính sớm muộn được trả, có khi bằng "món vay" mới; đến cuối tác phẩm, "các đầu mối thường được khép lại" |
Hai nguyên tắc của cặp thứ nhất "bổ sung đối xứng cho nhau" và làm thành một cặp nền tảng.

## §9. Phát hiện nghệ thuật
- Trong văn hoá nghệ thuật châu Âu mấy thế kỷ gần đây, mỗi tác phẩm phải có **một điều tìm ra mới** — một phát minh, một cấu trúc mới mang nghĩa hình tượng. Mazel gọi đó là **phát hiện nghệ thuật** (dùng chữ "phát hiện" theo nghĩa hơi rộng).
- Phát hiện có thể **nhỏ**: trong một bài hát quần chúng, đôi khi chỉ là một ngữ điệu tìm được khéo, đặt vào toàn bài sao cho nó "nhuộm màu" cả giai điệu.
- Phát hiện là nhận thức mới về hiện thực, một **sự thật tình cảm** mới, hoặc **khả năng biểu hiện mới của phương tiện**.
- Khái niệm này không áp dụng như nhau cho mọi thời kỳ (ví dụ nghệ thuật châu Âu trung cổ).

## §10. Phương pháp phân tích: hai hướng
1. **Hướng ra ngoài**: so sánh với tác phẩm cùng loại, xếp vào một kiểu phong cách – thể loại, đối chiếu với thời đại, tác giả, thư từ, phát biểu…
2. **Hướng vào trong**: phân tích **cấu trúc**, cho thấy nội dung được hiện thực hoá thế nào — kể cả việc áp dụng các nguyên tắc tác động ở §8.
Chỉ đi một hướng thì hiếm khi đủ. Ngay việc xác định hình thức (điểm xuất phát thường thấy của môn học) đã ngầm so sánh với nhiều tác phẩm khác; thấy chỗ giống rồi mới thấy chỗ khác, tức **nét riêng** và **phát hiện nghệ thuật** — nơi "hai đường phân tích gặp nhau". Đây là cái mà sau này gọi là **phân tích tổng thể** (целостный анализ).

## §11. Ví dụ: "Bài ca người gặp gỡ" của Shostakovich
Sách phân tích *Песня о встречном* (nhạc phim *Встречный*):
- **Bố cục**: bài hát nhiều lời; mỗi lời gồm phần hát chính và điệp khúc, làm thành **hình thức hai đoạn đơn không tái hiện**, từ hai đoạn nhạc vuông, mỗi đoạn hai câu 8 ô.
- **Thể loại**: Mazel cho thấy bài hát nối nhiều liên hệ thể loại khác nhau, và chính sự phong phú ấy là **phát hiện nghệ thuật** ở cấp thể loại; nó cũng là một nét phong cách của Shostakovich.
- **Cấu trúc**: câu thứ nhất có đường nét dạng sóng (xuống rồi lên), hai câu nhỏ 4 ô gần như **đối xứng** — đọc ngược câu đầu được gần đúng câu sau.

Liên quan: [[phuong-phap-phan-tich-tac-pham]], [[phan-tich-phong-cach]]. Tổng quan sách: [[mazel-cau-truc-tac-pham-am-nhac]].
`,
  },
  {
    slug: 'mazel-giai-dieu-va-tiet-tau',
    title: 'Mazel: giai điệu, tiết tấu và nhịp (chương II – III)',
    category: 'form',
    aliases: ['Mazel giai điệu', 'Mazel tiết tấu', 'motif iambic', 'motif trochaic', 'ямбический мотив', 'хореический мотив', 'ô nặng ô nhẹ', 'тяжелые и легкие такты', 'motif tiết tấu'],
    summary: 'Chương II – III sách Mazel: giai điệu là ý nhạc vang trong một bè, nhận ra nhờ quan hệ cao độ và trường độ; motif tiết tấu (một phách mạnh), câu (đơn vị nhỏ nhất xác định nhịp); motif đi lên (iambic, "đà và đích") và đi xuống (trochaic, "xung lực và tắt dần"); ô nặng – nhẹ; cấu trúc vuông và không vuông.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương II. Giai điệu
- "Giai điệu thường được hiểu là **ý nhạc vang lên trong một bè**." Nó có thể là cả một chỉnh thể một bè (nhiều dân ca) hoặc **bè chính** của một ý nhạc nhiều bè.
- Giai điệu là thống nhất nhiều mặt: cao độ, tiết tấu, cường độ, âm sắc, lối diễn (legato, staccato), và cả hoà âm ngầm.
- Nhưng các mặt không ngang nhau. Hát to hay nhỏ, bằng giọng hay nhạc cụ, giai điệu vẫn được nhận ra — **miễn là giữ nguyên quan hệ cao độ và trường độ**. Hai mặt này làm nên "bản sắc" của giai điệu.
- Các mục của chương: mặt điệu thức – hoà âm của giai điệu; **đường nét giai điệu**; tương tác giữa đường nét và điệu thức. Xem thêm [[giai-dieu]].

## Chương III. Tiết tấu và nhịp
### Motif tiết tấu và câu
- **Motif tiết tấu**: một hình tiết tấu nhỏ, nhận ra được khi lặp lại, chứa **một phách mạnh**. Ranh giới motif có thể không trùng vạch nhịp — vạch nhịp chỉ phách mạnh, không chỉ ranh giới motif.
- Muốn nhận ra nhịp phải nghe **ít nhất hai phách mạnh**, nên một motif là chưa đủ. Đơn vị nhỏ nhất xác định nhịp là **câu nhỏ** (фраза) — ghép hai, ba hay bốn motif.
- Nhiều câu nhỏ 2 ô **không chia được** thành motif; người ta hay gọi chúng là "motif 2 ô", còn motif theo nghĩa trên là "motif 1 ô".

### Motif đi lên và đi xuống
| Loại | Cách đặt so với phách mạnh | Khả năng biểu hiện |
|---|---|---|
| **Iambic** (theo nghĩa rộng), đi lên | Bắt đầu ở phách nhẹ (nhịp lấy đà), hướng tới phách mạnh sau | "Đà và cú đánh, chuyển động tới đích" — tính **chủ động** |
| **Trochaic** (theo nghĩa rộng), đi xuống | Bắt đầu ở phách mạnh, kết ở phách nhẹ hơn | "Xung lực và sự cạn dần" — tắt dần |
Motif gồm **nốt dựa và giải quyết** (rất nhiều motif trữ tình) thuộc loại trochaic. Đối lập iambic – trochaic là một trong hai **đối lập cơ bản** của hệ nhịp có trọng âm theo ô nhịp.

### Các mục khác của chương
- Tiền đề của tính biểu hiện tiết tấu; nhịp **nghiêm** và nhịp **tự do**.
- **Ô nặng và ô nhẹ**: trong cấu trúc nhiều ô, các ô cũng có nặng nhẹ như các phách — xem [[sieu-nhip]].
- **Cấu trúc vuông và không vuông** (4, 8, 16 ô hay số ô khác).
- Một số hình tiết tấu điển hình; tiết tấu của giai điệu có lời.

Liên quan: [[motif]], [[cau-nhac]]. Tổng quan sách: [[mazel-cau-truc-tac-pham-am-nhac]].
`,
  },
  {
    slug: 'mazel-cau-truc-cau-doan-va-chuc-nang',
    title: 'Mazel: phân đoạn, đoạn nhạc, chức năng các phần và nguyên tắc phát triển (chương IV – V)',
    category: 'form',
    aliases: ['Mazel đoạn nhạc', 'tổng hợp', 'суммирование', 'chia nhỏ có khép', 'дробление с замыканием', 'cezura', 'цезура', 'кiểu trình bày', 'тип изложения', 'chức năng các phần', 'nguyên tắc phát triển', 'принципы развития', 'период'],
    summary: 'Chương IV – V sách Mazel: cezura và "cấu trúc" (построение); hai cấu trúc giai điệu – cú pháp chính: tổng hợp (1 + 1 + 2) và chia nhỏ có khép; chủ đề; đoạn nhạc (định nghĩa, kiểu điển hình, tương tác kết từ xa); chức năng lôgic và chức năng cấu trúc của các phần, kiểu trình bày; bốn nguyên tắc phát triển (lặp lại, biến tấu, phát triển motif, đối chiếu) và vai trò của kế hoạch giọng.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương IV. Sự phân đoạn
- Tác phẩm là một chỉnh thể nhưng **chia thành phần** lớn nhỏ; hiểu đúng sự phân chia là điều kiện để hiểu và **diễn đúng**.
- Chỗ ngăn giữa hai đoạn gọi là **cezura** (цезура), sâu hay nông tuỳ độ rõ.
- Một phần hữu cơ giới hạn bởi cezura gọi là **cấu trúc** (построение), dài ngắn bao nhiêu cũng được: đoạn 16 ô, mỗi câu 8 ô, mỗi nửa câu 4 ô đều là cấu trúc. Nhưng "ba nửa câu đầu gộp lại" thì không — giống như "một chương rưỡi" không phải là phần hữu cơ của tiểu thuyết.
- Yếu tố tạo phân đoạn: chất liệu mới, bắt đầu lặp lại, quay về chất liệu cũ, dấu lặng, dừng tiết tấu, [[cau-ket|kết]] hoà âm, hết một sóng giai điệu, đổi giọng, âm sắc, âm vực, cường độ.

### Hai cấu trúc giai điệu – cú pháp chính
| Cấu trúc | Sơ đồ | Theo sách |
|---|---|---|
| **Tổng hợp** (gộp) | 1 + 1 + 2 | Tính chu kỳ ban đầu (1 + 1) được vượt qua bằng một câu 2 ô liền mạch, tạo thành 4 ô **liền một khối**. Hay gặp ở cấu trúc vuông nhưng cả ở cấu trúc khác |
| **Chia nhỏ có khép** | 2 + 2 + 1 + 1 + 2 (…) | Sau các câu 2 ô là các câu 1 ô — **chia nhỏ, "thở nhanh hơn"** — rồi một đơn vị **khép lại**, gộp lại. Phần chia nhỏ tách ra những ngữ điệu quan trọng để phát triển riêng "như một đoạn phát triển nhỏ", sau đó là kết luận, tổng kết |
Phần khép có thể tự nó là một cấu trúc tổng hợp (ví dụ 1 + 1 + 2), và có thể là sự tái hiện một motif đầu.

## Chương V. Chủ đề, đoạn nhạc, chức năng
### Đoạn nhạc
- **Định nghĩa**: đoạn nhạc là "hình thức trình bày trọn vẹn (thường là nhỏ nhất) một chất liệu chủ đề, một ý nhạc, trong âm nhạc chủ điệu; dấu hiệu trọn vẹn thường là một [[cau-ket|kết]] hoàn toàn". Đồng thời đó là hình thức đơn giản nhất của một tác phẩm chủ điệu độc lập.
- **Kiểu điển hình**: hai cấu trúc giống nhau về giai điệu (4, 8 hay 16 ô); cấu trúc thứ nhất kết nửa (hoặc kết hoàn toàn không trọn vẹn), cấu trúc thứ hai kết hoàn toàn trọn vẹn.
- Kiểu này hình thành trong thể loại **ca – vũ** của nhạc chủ điệu. Hai yếu tố cốt lõi: **lặp lại** một cấu trúc để khẳng định nó; và **tương tác giữa các kết ở xa** — kết chưa ổn định của câu đầu được "giải quyết" ở cuối câu sau.
- Mọi biến thể (mở rộng, rút gọn, phức tạp hoá) vẫn gọi là đoạn nhạc nếu **giữ chức năng** trình bày trọn một ý nhạc. Xem [[cau-nhac]], [[mo-rong-cau-nhac]].

### Chức năng các phần và kiểu trình bày
- Mỗi phần có **chức năng** trong hình thức; tác phẩm càng phức tạp, chức năng càng đa dạng. Cách trình bày gắn với chức năng gọi là **kiểu trình bày** (тип изложения): mở đầu, trình bày, phát triển (разработочный)…
- Chức năng có hai bình diện: **lôgic âm nhạc** (khởi đầu, phát triển, cao trào, kết thúc — chung với các nghệ thuật thời gian khác) và **cấu trúc âm nhạc** (tái hiện, phần kết, phần bổ sung, coda — riêng của hình thức âm nhạc). Giữa hai bình diện **không có tương ứng cứng**: chức năng lôgic "kết thúc" có thể nằm ở phần tái hiện, phần kết, phần bổ sung hay coda; ngược lại, một phần bổ sung chưa chắc là tổng kết thật.
- Phần **trình bày chủ đề** điển hình: cấu trúc trọn vẹn, thống nhất cao về chủ đề và giọng (chỉ lệch sang giọng gần, chuyển giọng chủ yếu ở cuối).
- **Tái hiện** (реприза): trình bày lại chủ đề sau một phần mới.
- Sự phân hoá rõ chức năng không có ở mọi thứ nhạc: yếu ở hình thức sơ đẳng (bài hát nhiều lời), khó thấy ở nhạc thế kỷ 20 không có giọng và chủ đề cá thể.

### Bốn nguyên tắc phát triển
| Nguyên tắc | Tiếng Nga | Ghi chú của sách |
|---|---|---|
| 1. **Lặp lại** | повторность | Lặp đúng hay biến đổi |
| 2. **Biến tấu** | вариационность | Tái hiện (có biến đổi) **cả cấu trúc** của cái được biến tấu: biến tấu của một đoạn nhạc thường vẫn là đoạn nhạc |
| 3. **Phát triển motif** | разработка | Tách những phần tử riêng của chủ đề và phát triển độc lập, cho chúng kết hợp mới |
| 4. **Đối chiếu** (tương phản) | сопоставление | Sau một chủ đề là chủ đề mới, phần mới khác chất liệu |
- **Hoà âm và giọng** có vai trò tạo hình thức riêng: tương tác **kết từ xa** trong đoạn nhạc; **giọng từ xa** trong sonata (phần trình bày kết ở giọng át — phần tái hiện kết ở giọng chủ); kế hoạch giọng T → D → (vùng S) → T. Hai giọng xa đặt cạnh nhau tạo "xung đột" cần một giọng dung hoà.
- Mỗi hình thức dựa trên vài nguyên tắc: ba đoạn có đoạn giữa mới = **đối chiếu + tái hiện**; rondo = các nguyên tắc ấy **lặp nhiều lần**; sonata = **đối chiếu** (hai chủ đề) + **phát triển** + **tái hiện**.

Liên quan: [[chuc-nang-hinh-thuc]], [[ly-thuyet-chu-de]]. Tổng quan sách: [[mazel-cau-truc-tac-pham-am-nhac]].
`,
  },
  {
    slug: 'mazel-hinh-thuc-don-va-phuc',
    title: 'Mazel: hình thức hai, ba đoạn đơn và phức (chương VI – VII)',
    category: 'form',
    aliases: ['Mazel hình thức đơn', 'hình thức ba đoạn phức', 'сложная трехчастная форма', 'простая трехчастная форма', 'hình thức ba đoạn kép', 'двойная трехчастная форма', 'trio và episode'],
    summary: 'Định nghĩa của Mazel: hình thức hai/ba đoạn đơn có phần một là đoạn nhạc, các phần khác không phức tạp hơn đoạn nhạc; hình thức ba đoạn phức có tái hiện, phần một là hình thức hai/ba đoạn đơn. Ba đoạn đơn thường có đoạn giữa phát triển; ba đoạn phức thường có đoạn giữa tương phản (trio hoặc episode). Hình thức bài hát nhiều lời, hình thức ba đoạn kép.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương VI. Hình thức hai và ba đoạn đơn
- **Định nghĩa**: "Hình thức hai hay ba đoạn đơn là hình thức hai hay ba đoạn mà **phần thứ nhất là một đoạn nhạc**, các phần còn lại **không chứa cấu trúc phức tạp hơn đoạn nhạc**."
- Mazel lưu ý một vòng luẩn quẩn bề ngoài: có lúc một cấu trúc được coi là đoạn nhạc không vì cấu trúc bên trong mà vì **chức năng** trong chỉnh thể lớn hơn (một câu 7 ô kết nửa vẫn được coi là đoạn nhạc khi nó là đoạn một của hình thức ba đoạn đơn). Vì vậy muốn xác định đúng một hình thức, phải biết cả các hình thức khác, và phải học qua nhiều ví dụ chứ không chỉ học định nghĩa.
- Các mục của chương: cấu tạo và các kiểu chính; phạm vi sử dụng; **hình thức bài hát nhiều lời** (куплетная), **hình thức khổ** (строфическая); **hình thức ba đoạn kép** (двойная трехчастная); lịch sử phát triển.
- **Ba đoạn kép**: đoạn giữa và phần đầu cùng lặp lại lần hai, đoạn giữa lần sau ở giọng khác (A B A B₁ A). Sách so sánh ba romance cùng lời Pushkin *Ночной зефир*: Glinka — ba – năm đoạn đơn (phần 4 nhắc phần 2); **Medtner** — ba đoạn kép (phần 4 nhắc phần 2 ở giọng khác, kết cấu khác); **Dargomyzhsky** — rondo (phần 2 và 4 khác chủ đề). Ba đoạn "ba lần" (A B A B₁ A B₂ A) rất hiếm, ví dụ *Am Bach* của Liszt.
Bài trong thư viện: [[hinh-thuc-hai-doan]], [[hinh-thuc-ba-doan]].

## Chương VII. Hình thức ba và hai đoạn phức
- **Định nghĩa**: "Hình thức ba đoạn phức là hình thức ba đoạn **có tái hiện**, trong đó phần một được trình bày theo hình thức hai hay ba đoạn đơn, các phần còn lại không chứa hình thức phát triển hơn."
- Khác biệt chính so với ba đoạn đơn: ở **ba đoạn đơn**, đoạn giữa **phát triển** chất liệu phần một thường gặp hơn đoạn giữa mới; ở **ba đoạn phức**, đoạn giữa **thường tương phản** với hai đoạn ngoài, rất hiếm khi chỉ phát triển chất liệu phần một. Nền của đa số hình thức ba đoạn phức: **đối chiếu tương phản** hai đoạn chính + **tái hiện** phần một.
- Hình thức kết tinh vào **cuối thế kỷ 17 – đầu 18**, gắn với nhu cầu thể hiện tương phản trong tác phẩm lớn mà vẫn liền mạch; tiền thân là lối đặt **hai điệu múa cùng tên** liền nhau trong tổ khúc cổ rồi nhắc lại điệu đầu: Minuet I – Minuet II – Minuet I, Gavotte I – Gavotte II – Gavotte I (sách dẫn các *Tổ khúc Anh* của Bach). Lần nhắc không chép ra mà ghi *da capo*; mỗi điệu múa thường ở hình thức hai đoạn đơn.
- Đoạn giữa được phân biệt thành kiểu **trio** và kiểu **episode** tuỳ cấu trúc (§2); sách lưu ý ranh giới giữa hai kiểu nhiều khi mờ.
- Hình thức **hai đoạn phức** ít gặp hơn nhiều; sách trình bày ngắn ở §4.
Bài trong thư viện: [[minuet-va-trio]].

Tổng quan sách: [[mazel-cau-truc-tac-pham-am-nhac]].
`,
  },
  {
    slug: 'mazel-rondo-va-bien-tau',
    title: 'Mazel: rondo và hình thức biến tấu (chương VIII – IX)',
    category: 'form',
    aliases: ['Mazel rondo', 'Mazel biến tấu', 'hình thức giống rondo', 'рондообразные формы', 'biến tấu trên giai điệu cố định', 'biến tấu trên bè trầm cố định', 'biến tấu nghiêm', 'biến tấu tự do', 'biến tấu kép', 'двойные вариации'],
    summary: 'Rondo theo Mazel: luân phiên chủ đề chính trở lại nhiều lần với các episode, ít nhất năm đoạn ABACA; phân biệt rondo với hình thức có luân phiên nhưng không lấy luân phiên làm nền; các hình thức giống rondo. Biến tấu: phương pháp lặp có biến đổi trở thành nền của bố cục; phân loại: trên giai điệu cố định, trên bè trầm cố định (cổ), biến tấu nghiêm (hình hoá), biến tấu tự do, nhóm biến tấu, biến tấu kép.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương VIII. Rondo
- **Định nghĩa**: "Hình thức rondo là hình thức mà nền của nó là **sự luân phiên giữa chủ đề chính trở lại nhiều lần với các episode khác nhau**."
- Suy ra: chủ đề chính vang ít nhất **ba lần**, có ít nhất **hai episode**, nên rondo có ít nhất **năm đoạn**: A B A C A.
- Với rondo, mọi chủ đề ngoài chủ đề chính đều gọi là **episode**, bất kể cấu trúc (khác với hình thức ba đoạn phức, nơi phân biệt trio và episode).
- **Không xếp vào rondo** những hình thức tuy có luân phiên nhưng luân phiên không phải nền. Ví dụ: hình thức ba đoạn phức mà phần một là ba đoạn đơn có đoạn giữa mới (a b a | c | a b a) — có chủ đề a trở lại nhiều lần, nhưng nền là tương phản giữa cả khối a b a với trio c.
- Các mục: nguồn gốc lịch sử, vùng biểu hiện, phạm vi dùng; các giai đoạn lịch sử; **hình thức giống rondo** (рондообразные), như ba – năm đoạn và ba đoạn kép (xem chương VI).
Bài trong thư viện: [[rondo]], [[sonata-rondo-va-cac-loai-rondo]].

## Chương IX. Hình thức biến tấu
- **Biến tấu là phương pháp** lặp lại có biến đổi, dùng ở mọi hình thức và mọi cấp (đoạn nhạc lặp lại, tái hiện có biến đổi, phát triển motif). Trong hình thức biến tấu, phương pháp ấy trở thành **nền của bố cục**.
- Biến tấu kết hợp **thay đổi** với yếu tố **không đổi** nghe thấy ngay. Rondo cũng có cái không đổi và cái thay đổi nhưng **nối tiếp nhau**; biến tấu thì có cả hai **cùng lúc**: mỗi biến tấu vừa mới, vừa gắn với cùng một chủ đề.
- **Định nghĩa**: "Hình thức biến tấu (chu kỳ biến tấu) là hình thức gồm trình bày chủ đề ban đầu và một loạt lần nhắc lại có biến đổi (gọi là các biến tấu)." Có thể có mở đầu và coda; số biến tấu từ hai, ba đến vài chục; chủ đề dài từ 4 ô đến một hình thức ba đoạn đơn; chủ đề có thể mượn từ dân gian hay nhà soạn nhạc khác, nếu tự sáng tác thì gọi là **chủ đề nguyên tác**.
- Sách tìm nguồn gốc hình thức biến tấu ở các hình thức ca – vũ dân gian.

| Loại (theo các mục của chương) | Tiếng Nga |
|---|---|
| Biến tấu trên **giai điệu cố định** | вариации на выдержанную мелодию |
| Biến tấu trên **bè trầm cố định** (biến tấu cổ) | вариации на выдержанный бас — xem [[passacaglia-va-chaconne]] |
| Biến tấu **nghiêm** (hình hoá) | строгие (фигурационные) |
| Biến tấu **tự do** | свободные |
| **Nhóm** biến tấu, phát triển xuyên suốt | группировка, сквозное развитие |
| Biến tấu **kép** (hai chủ đề) | двойные вариации |
Ở chương XIV, sách nói thêm: các nhà soạn nhạc cổ điển Nga thường viết biến tấu kép không theo lối xen kẽ từng biến tấu của hai chủ đề, mà theo những **khối lớn tương phản**, mỗi khối biến tấu nhiều lần một chủ đề.

Bài trong thư viện: [[bien-tau]], [[ostinato]]. Tổng quan sách: [[mazel-cau-truc-tac-pham-am-nhac]].
`,
  },
  {
    slug: 'mazel-phuc-dieu-va-fugue',
    title: 'Mazel: phức điệu và hình thức phức điệu (chương X)',
    category: 'polyphony',
    aliases: ['Mazel phức điệu', 'phức điệu mô phỏng và không mô phỏng', 'имитационная полифония', 'неимитационная полифония', 'Mazel fugue', 'phức điệu dân ca Nga', 'подголосочная полифония'],
    summary: 'Chương X sách Mazel: phức điệu và chủ điệu; hai loại phức điệu (mô phỏng và không mô phỏng — tương phản hoặc bè phụ); yếu tố phức điệu trong hình thức chủ điệu; mô phỏng, canon, đối âm phức; định nghĩa fugue (bè vào lần lượt, chủ đề luân phiên giọng chính – giọng phụ), kế hoạch giọng ba đoạn có tái hiện, đoạn chen; phức điệu nghiêm và tự do; phức điệu dân ca Nga.',
    refs: [BOOK],
    body: `
${NOTE}

## Hai loại phức điệu
| Loại | Theo sách | Ví dụ sách dẫn |
|---|---|---|
| **Phức điệu mô phỏng** | Một cấu trúc giai điệu (chủ đề) được đưa lần lượt qua các bè, các bè khác **mô phỏng** nó | Bach, *Bình quân luật*, fugue |
| **Phức điệu không mô phỏng** | Kết hợp **cùng lúc** những đường giai điệu khác nhau suốt từ đầu đến cuối | Glinka, *Kamarinskaya* |
- Phức điệu không mô phỏng thường có **tương phản** giữa các bè, nên còn gọi là **phức điệu tương phản**. Ví dụ sách phân tích: đoạn cao trào chương I Giao hưởng số 6 của **Tchaikovsky** — bè dây là "tiếng than của tâm hồn con người", bè đồng là "lời đáp không khoan nhượng của số phận".
- Khi các bè không tương phản mà **gần nhau**, là những biến thể của cùng một giai điệu, đó là **phức điệu bè phụ** (подголосочная) — đặc trưng của dân ca Nga (§8).
- Yếu tố của cả hai loại được dùng rộng rãi trong **hình thức chủ điệu**; sách dẫn một nocturne piano của Chopin có nhiều yếu tố mô phỏng.
So với hệ thống của giáo trình Phạm Tú Hương: [[khai-niem-va-quy-uoc-phuc-dieu]] (phức điệu tương phản, mô phỏng, bè tòng).

## Mô phỏng, canon, đối âm phức
Các mục §3 – 4 trình bày mô phỏng, canon và **đối âm phức** (сложный контрапункт). Hệ thống chi tiết theo Taneyev: [[mo-phong-don-gian]], [[canon-hai-be]], [[doi-vi-phuc-tap]].

## Fugue
- **Định nghĩa**: "Fugue là tác phẩm phức điệu mô phỏng, **bắt đầu bằng sự vào lần lượt của tất cả các bè** trình bày chủ đề — **luân phiên ở giọng chính và giọng phụ** (thường là giọng át)." Phần sau thường có thêm một số lần đưa chủ đề, chủ yếu ở các giọng khác, và kết ở giọng chính bằng một hay vài lần đưa chủ đề cuối.
- Vì vậy, về **kế hoạch giọng**, nền của fugue là **ba đoạn có tái hiện** — giống nhiều hình thức chủ điệu: **phần trình bày**, **đoạn giữa**, **phần tái hiện**.
- Giữa các phần và giữa các lần đưa chủ đề có **đoạn chen** (интермедия): chủ đề không vang trọn; thường chuyển giọng, dạng mô tiến, dùng từng yếu tố của chủ đề.
- Các mục: cấu tạo fugue (§6); khái niệm **phức điệu nghiêm và tự do** (§7).
Bài trong thư viện: [[fugue]], [[phuc-dieu-nghiem-khac]].

Tổng quan sách: [[mazel-cau-truc-tac-pham-am-nhac]].
`,
  },
  {
    slug: 'mazel-sonata-va-rondo-sonata',
    title: 'Mazel: hình thức sonata và rondo – sonata (chương XI – XII)',
    category: 'form',
    aliases: ['Mazel sonata', 'sonata thay phát triển bằng episode', 'sonata không có phát triển', 'Mazel rondo sonata', 'рондо-соната', 'главная партия', 'побочная партия', 'связующая партия', 'заключительная партия'],
    summary: 'Định nghĩa sonata của Mazel: hình thức có tái hiện, phần trình bày gồm hai chủ đề ở hai giọng, phần tái hiện đưa hai chủ đề lại gần nhau về giọng; các biến thể (thay phát triển bằng episode, sonata không phát triển); bốn phần chính từ thời Mozart – Beethoven; các phần của phần trình bày; tính chất phần phát triển. Rondo – sonata: rondo có ba (hiếm khi bốn) episode, hai episode ngoài quan hệ như phần phụ của sonata — sơ đồ A B A C A B₁ (A) coda.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương XI. Hình thức sonata
### Định nghĩa
"Hình thức sonata là hình thức **có tái hiện**, trong phần thứ nhất (**phần trình bày**) có **hai chủ đề nối tiếp ở hai giọng khác nhau** (chủ đề một ở giọng chính, chủ đề hai ở giọng phụ), còn trong **phần tái hiện** hai chủ đề được nhắc lại trong quan hệ khác, thường là **gần nhau về giọng** — điển hình nhất là cả hai ở giọng chính. Đoạn giữa điển hình là **phần phát triển**: phần không ổn định về giọng, phát triển các chủ đề của phần trình bày."
| Biến thể | Theo sách |
|---|---|
| **Thay phát triển bằng episode** | Đoạn giữa trình bày và phát triển một chủ đề mới |
| **Sonata không có phát triển** | Sau phần trình bày là ngay phần tái hiện (trực tiếp hoặc qua một đoạn chuyển ngắn) |
- Có thể có **mở đầu**. Từ Mozart và nhất là Beethoven, **coda** trở nên thường xuyên: sonata phát triển có **bốn phần chính** — trình bày, phát triển, tái hiện, coda.
- Phần trình bày thường được **nhắc lại nguyên văn** — gần như luôn ở các nhà cổ điển Vienna, ít hơn nhiều sau Beethoven.

### Các phần (theo mục lục chương)
| Phần | Tiếng Nga |
|---|---|
| Mở đầu | вступление |
| Phần chính (chủ đề một) | главная партия |
| Phần nối | связующая партия — có thể vừa chuyển tiếp, vừa phát triển mạnh chủ đề một, có khi trình bày một chủ đề trung gian |
| Phần phụ (chủ đề hai) | побочная партия |
| Phần kết | заключительная партия |
| Phát triển: tính chất chung và cấu tạo | разработка |
| Tái hiện, coda | реприза, кода |
- **Phát triển** đã có ngay trong phần trình bày (trong phần chính, nhất là phần nối, nửa sau phần phụ), nhưng trong phần phát triển nó mạnh nhất, vì phần này không phải trình bày hay nhắc lại chủ đề trọn vẹn: các chủ đề và yếu tố của chúng được đặt vào những "tình huống", những kết hợp mới.
- Sách còn phân tích: sonata trong các thể loại khác nhau; xu hướng thế kỷ 19 – 20 qua chương I **Giao hưởng số 6 của Tchaikovsky** và các chương đầu giao hưởng **Shostakovich**; nguồn gốc lịch sử (hình thức hai đoạn cổ, sonata cổ, hình thức concerto cổ).
Bài trong thư viện: [[hinh-thuc-sonata]], [[hinh-thuc-concerto]].

## Chương XII. Rondo – sonata
- Tuy kết hợp nét rondo và sonata, rondo – sonata **không** xếp vào "hình thức hỗn hợp" (chương XIV), vì sơ đồ của nó **chặt chẽ, gần như cố định**, lặp lại ở rất nhiều tác phẩm.
- **Định nghĩa**: "Rondo – sonata là một loại rondo có **ba (hiếm khi bốn) episode**, trong đó hai episode ngoài có quan hệ chủ đề và giọng **như phần phụ** ở phần trình bày và tái hiện của sonata. Episode giữa có thể thay bằng **phần phát triển** các chủ đề trước."
- **Sơ đồ điển hình**: A B A C A B₁ [A] coda. A là chủ đề chính và cũng là phần chính, ở giọng chính (ở Haydn, Mozart, Beethoven chỉ gặp trường hợp này). B là episode một và cũng là phần phụ, ở giọng phụ (thường là giọng át hoặc giọng trưởng song song); B₁ là cùng chất liệu ấy, ở giọng chính.
Bài trong thư viện: [[sonata-rondo-va-cac-loai-rondo]].

Tổng quan sách: [[mazel-cau-truc-tac-pham-am-nhac]].
`,
  },
  {
    slug: 'mazel-chu-ky-hon-hop-va-thanh-nhac',
    title: 'Mazel: hình thức chu kỳ, ghép tương phản, hỗn hợp và thanh nhạc (chương XIII – XV)',
    category: 'form',
    aliases: ['hình thức chu kỳ', 'циклическая форма', 'hình thức ghép tương phản', 'контрастно-составная форма', 'Protopopov', 'hình thức hỗn hợp', 'смешанные формы', 'hình thức tự do', 'tổ khúc cổ', 'chu kỳ sonata giao hưởng', 'hình thức opera'],
    summary: 'Chương XIII – XV sách Mazel: hình thức chu kỳ (nhiều phần độc lập về hình thức, tương phản — trước hết về tiến độ — nhưng thống nhất ý đồ); tổ khúc cổ, tổ khúc mới, chu kỳ sonata – giao hưởng; hình thức ghép tương phản (khái niệm của V. Protopopov đầu thập niên 1960); hình thức hỗn hợp (tự do) một chương — kết hợp sonata với biến tấu, sonata với chu kỳ; hình thức cantata, oratorio, opera.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương XIII. Hình thức chu kỳ
- **Định nghĩa**: "Một hình thức gọi là chu kỳ nếu gồm **nhiều phần độc lập về hình thức**, **tương phản về tính chất** (trước hết là tiến độ), nhưng gắn với nhau bởi **sự thống nhất của ý đồ tư tưởng – nghệ thuật**."
- Tính độc lập thể hiện ở chỗ các phần **có khi được diễn riêng** (ví dụ Hành khúc tang lễ của Chopin, chương III sonata Si giáng thứ, thường được diễn riêng ở lễ tang). Khi diễn trọn, giữa các phần có khoảng nghỉ do người diễn định; trường hợp không nghỉ thì ghi *attacca*.
- Thường **mọi phần đều khác nhau**, không phần nào là tái hiện của phần khác. Ngoại lệ hiếm ở chu kỳ nhiều tiểu phẩm: phần *Dạo bước* trở lại nhiều lần trong *Bức tranh triển lãm* của Mussorgsky tạo yếu tố rondo cho tổ khúc.
- "Chu kỳ" (tiếng Hy Lạp: vòng tròn) — hình thức bao trùm một vòng các hình tượng, tiến độ, thể loại khác nhau.
- Các mục: **tổ khúc cổ**, **tổ khúc mới**, **chu kỳ sonata – giao hưởng**, các loại chu kỳ khác.

### Hình thức ghép tương phản
- Khái niệm **tương đối mới**, do **V. V. Protopopov** đưa ra trong các công trình đầu thập niên 1960.
- Nằm giữa hình thức một chương và hình thức chu kỳ, nhưng phải xem là **một kiểu độc lập**. Giống chu kỳ: chuỗi nhiều phần tương phản. Giống một chương: **không nghỉ** giữa các phần và các phần **không thể diễn riêng**.
- Trước đây những tác phẩm này bị xếp lẫn vào chu kỳ, hình thức hỗn hợp, hai đoạn phức, cảnh opera, hay sonata có mở đầu lớn.

## Chương XIV. Hình thức hỗn hợp (tự do) một chương
- Từ khoảng **phần tư thứ hai thế kỷ 19**, phổ biến các hình thức **một chương** kết hợp nét của nhiều hình thức điển hình (ví dụ sonata và biến tấu): gọi là **hỗn hợp** hay **tự do**. Thường gặp ở thơ giao hưởng, sonata một chương, concerto, overture, fantasy, rhapsody, ballade.
- Không phải mọi tác phẩm cùng thể loại đều viết theo hình thức hỗn hợp: *Fantasy* op. 28 của Scriabin là sonata, *Fantasy* Đô trưởng của Schumann là chu kỳ, *Ballade* của Grieg là biến tấu.
- Rondo – sonata không tính là hỗn hợp vì đã thành sơ đồ cố định; hình thức hỗn hợp kết hợp các nét **tự do, riêng cho từng tác phẩm**.
- Một nguyên nhân phổ biến: các nhà soạn nhạc cổ điển Nga muốn đưa **lối biến tấu đặc trưng của dân ca Nga** vào hình thức lớn; vì sonata giữ vị trí quan trọng, các kiểu kết hợp **sonata + biến tấu** là nền của nhiều hình thức hỗn hợp của họ. Mục khác: kết hợp sonata với chu kỳ.

## Chương XV. Hình thức thanh nhạc lớn
Cantata và oratorio; opera; bố cục các phần lớn của opera. Xem [[oratorio-cantata-passion]].

Tổng quan sách: [[mazel-cau-truc-tac-pham-am-nhac]].
`,
  },
]
