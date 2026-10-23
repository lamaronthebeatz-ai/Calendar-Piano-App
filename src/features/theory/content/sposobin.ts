import type { Article } from '../wiki'

const BOOK: [string, string] = ['Способин И. В., Музыкальная форма. Учебник, 7-е изд. — М.: Музыка, 1984 (in theo bản 2, 1958; bản PDF do Lamar cung cấp)', 'https://nakhodka-music.ru/files/sposobin_i_v_muzykal_naya_forma_1984.pdf']
const WIKI: [string, string] = ['Википедия — Способин, Игорь Владимирович', 'https://ru.wikipedia.org/wiki/Способин,_Игорь_Владимирович']
const NOTE = 'Bài đọc từ bản 7 (1984, in theo bản 2 năm 1958) của sách, qua văn bản nhận dạng chữ (OCR) từ bản scan. Câu trong ngoặc kép là dịch sát nguyên văn tiếng Nga; số chương, mục (§) theo sách.'

export const sposobin: Article[] = [
  {
    slug: 'sposobin-hinh-thuc-am-nhac',
    title: 'Sposobin: Hình thức âm nhạc — tổng quan sách',
    category: 'form',
    aliases: ['Sposobin hình thức', 'Способин Музыкальная форма', 'Музыкальная форма Способин', 'giáo trình hình thức Sposobin', 'Igor Sposobin'],
    summary: 'Igor Sposobin (1900 – 1954), Hình thức âm nhạc (1947; bản 2 sau khi tác giả mất 1958; bản 7 năm 1984): giáo trình hình thức của Nhạc viện Moskva, gồm phần Dẫn nhập (chức năng các phần, kiểu trình bày, năm nguyên tắc phát triển), Phần một — các hình thức chủ điệu (12 chương), Phần hai — các hình thức phức điệu (4 chương). Bài này là mục lục dẫn sang các bài chi tiết.',
    refs: [BOOK, WIKI],
    body: `
**Igor Vladimirovich Sposobin** (1900 – 1954), giáo sư Nhạc viện Moskva, một trong bốn tác giả của sách hoà âm "bốn tác giả" ([[hoa-am-truong-phai-nga-xo-viet]]). *Музыкальная форма* in lần đầu năm **1947**; bản thứ hai in **sau khi tác giả mất** (1958) và các bản sau in theo bản này. Thư viện đọc theo **bản 7, NXB Muzyka 1984** (400 trang). Lời giới thiệu bản 1984 ghi sách "đã được dùng liên tục trong giảng dạy hơn ba mươi năm". N. Myaskovsky gọi đây là cuốn giáo trình hình thức âm nhạc độc lập đầu tiên bằng tiếng Nga có độ bao quát đầy đủ (theo Wikipedia tiếng Nga).

${NOTE}

## Mục lục và bài tương ứng
| Phần của sách | Chương | Bài trong thư viện |
|---|---|---|
| **Dẫn nhập**: những cơ sở chung quan trọng nhất của hình thức (§1 – 20) | — | [[sposobin-dan-nhap-chuc-nang-va-nguyen-tac]] |
| **Phần một: hình thức chủ điệu** | I – II. Đoạn nhạc; các dạng phức tạp; dân ca Nga | [[sposobin-doan-nhac]] |
| | III – IV. Hai phần đơn, ba phần đơn | [[sposobin-hinh-thuc-don]] |
| | V – VI. Ba phần phức; chủ đề và biến tấu | [[sposobin-ba-phan-phuc-va-bien-tau]] |
| | VII – IX. Rondo; sonata; rondo – sonata | [[sposobin-rondo-sonata]] |
| | X – XII. Hai phần cổ và sonata cổ; hình thức chu kỳ; quan hệ giữa các hình thức và hình thức hỗn hợp | [[sposobin-hinh-thuc-co-chu-ky-va-hon-hop]] |
| | XIII. Hình thức thanh nhạc | [[sposobin-hinh-thuc-thanh-nhac]] |
| **Phần hai: hình thức phức điệu** | XIV – XVII. Cơ sở phức điệu; đối âm phức; mô phỏng và canon; fugue và các thể loại phức điệu khác | [[sposobin-phuc-dieu-va-fugue]] |
Mỗi chương có mục **"Tư liệu để phân tích"** (danh sách tác phẩm cho học viên tự phân tích).

## Đặc điểm của giáo trình
- Đi từ **nhỏ đến lớn**: đoạn nhạc → hai phần → ba phần → ba phần phức → biến tấu → rondo → sonata → rondo – sonata → chu kỳ.
- Coi các hình thức lớn là **phát triển logic** của hình thức nhỏ (chương XII), nhưng lưu ý con đường lịch sử thật "phức tạp và quanh co hơn nhiều".
- Có phần riêng về **dân ca Nga** và **kiểu biến tấu Glinka**, và một mục về **âm nhạc nhà thờ Chính thống giáo**.

So sánh với Mazel và Asafyev: [[hinh-thuc-va-phan-tich-truong-phai-nga]].
`,
  },
  {
    slug: 'sposobin-dan-nhap-chuc-nang-va-nguyen-tac',
    title: 'Sposobin: chức năng các phần, kiểu trình bày và năm nguyên tắc phát triển (Dẫn nhập)',
    category: 'form',
    aliases: ['kiểu trình bày', 'типы изложения', 'kiểu trình bày trình bày', 'экспозиционный тип', 'kiểu trình bày giữa', 'срединный тип', 'kiểu trình bày kết', 'заключительный тип', 'предыкт', 'năm nguyên tắc phát triển', 'tương phản phái sinh', 'производный контраст', 'контраст сопоставления', 'tương phản đối chiếu', 'cezura', 'tách đoạn', 'вычленение', 'tiền đề', 'tematic work'],
    summary: 'Dẫn nhập sách Sposobin: định nghĩa hình thức, cezura và các dấu hiệu, vai trò tạo hình thức của giai điệu, hoà âm, tiết tấu; sáu chức năng của các phần (trình bày, nối, giữa/phát triển, tái hiện, mở đầu, kết); bốn kiểu trình bày (trình bày, giữa, kết, mở đầu) và dấu hiệu từng kiểu; năm nguyên tắc phát triển (lặp lại, lặp lại có biến đổi, phát triển, tương phản phái sinh, tương phản đối chiếu); các thủ pháp biến đổi chủ đề.',
    refs: [BOOK],
    body: `
${NOTE}

## §1. Định nghĩa
- "Hình thức âm nhạc là **cấu tạo của tác phẩm âm nhạc**." Hình thức do nội dung từng tác phẩm quyết định, hình thành thống nhất với nội dung.
- Hình thức của mỗi tác phẩm luôn **riêng, không lặp lại**; nhưng số quy luật tạo hình thức tương đối có hạn, nên nhiều tác phẩm có nét chung về cấu tạo, từ đó rút ra các **kiểu hình thức** — những sơ đồ bố cục phổ biến vì linh hoạt và hợp lý, ít nhiều theo luật thẩm mỹ chung **"thống nhất trong đa dạng"**.
- Khác nghệ thuật không gian (hội hoạ, kiến trúc) — nhìn được toàn thể trong một lúc — âm nhạc diễn ra **trong thời gian**.

## §2. Sự phân đoạn, cezura, cấu trúc
- Hình thức "tuy là một chỉnh thể, đồng thời **phân đoạn**", giống lời nói: phần lớn như chương sách, phần nhỏ như đoạn văn, câu, thậm chí từ.
- Chỗ ngăn giữa các phần gọi là **cezura**; sâu nông khác nhau, từ một dấu lặng dài đến chỗ ngắt khó nhận ra.
- Dấu hiệu chính của cezura: **a)** dấu lặng; **b)** dừng trên một âm tương đối dài; **c)** lặp lại hình giai điệu – tiết tấu (thường với những ô dài bằng nhau). Ngoài ra: đổi âm vực, đổi cường độ… Cezura thường rõ nhất ở **bè chính**; phần đệm có thể chạy liền qua.
- Phần hình thức giới hạn bởi cezura gọi là **cấu trúc** (построение).

## §6. Sáu chức năng của các phần
Không phụ thuộc số chủ đề, mỗi phần có **chức năng** riêng. Sách nêu **sáu** chức năng cơ bản:
| | Chức năng | Theo sách |
|---|---|---|
| a | **Trình bày chủ đề** | Lần đưa chủ đề đầu tiên |
| b | **Phần nối** (связка) | Nối hai chủ đề hay hai phần chính |
| c | **Phần giữa** | Nằm giữa các phần thường giống nhau, độc lập hơn phần nối. Dạng đặc biệt quan trọng: **phát triển** — chủ đề đã trình bày được đưa ra **từng mảnh**, trong ánh sáng mới |
| d | **Tái hiện** | Chủ đề trở lại sau một phần nhạc khác — trọn vẹn hay chỉ phần đặc trưng. "Hầu hết các hình thức âm nhạc đều dựa trên tái hiện"; tái hiện tạo **khung** cho hình thức |
| e | **Mở đầu** | Cấu trúc đứng trước một phần, thường tách khỏi nó |
| f | **Kết** | Cấu trúc theo sau toàn hình thức (gọi là **coda**) hoặc gắn vào một phần |

## §7 – 11. Bốn kiểu trình bày
"Chức năng của một cấu trúc thường gắn với những nét đặc trưng của giai điệu, hoà âm và cấu tạo; các nét ấy làm nên **kiểu trình bày**." Các nét có thể xuất hiện đủ hay chỉ một phần.
| Kiểu | Dùng cho | Dấu hiệu theo sách |
|---|---|---|
| **Trình bày** (экспозиционный) | Trình bày chủ đề, thường cả tái hiện | Tính chất **ổn định, tiết kiệm phương tiện**: thống nhất chủ đề (một hay ít yếu tố); thống nhất giọng (có thể lệch sang giọng gần rồi về; chuyển giọng nếu có thì ở cuối, thường sang phía át) |
| **Giữa** (срединный) | Phần giữa, phát triển, phần nối | **Không ổn định, trôi chảy**: đưa những đoạn chủ đề **ngắn**, thường **tách ra** (вычленение) từ chủ đề đã có, hay dùng **mô tiến**; hoà âm không ổn định — tránh chủ âm, đặt chủ âm vào phách nhẹ, ô lẻ; có thể có **nốt pedal** trên át âm; nhiều giọng phụ |
| — nối và **tiền đề** (предыкт) | Dạng riêng của kiểu giữa | Các kiểu phần nối: nét giai điệu trên hợp âm át 7 của giọng sắp tới; một vòng chuyển giọng ngắn kiểu kết; vài kết lặp ở chủ âm cũ rồi chuyển giọng; lặp một phần nhạc trước rồi chuyển sang chuyển giọng… |
| **Kết** (заключительный) | Các cấu trúc khẳng định chủ âm đã đạt | Gắn sau một phần đã kết ở chủ âm, cùng giọng; **kết lặp lại** (bổ sung kết), giữ hay lặp chủ âm; **nốt pedal trên chủ âm**; lệch sang **phía hạ át**; các cấu trúc **ngắn dần** (chia nhỏ) dẫn về chủ âm |
| **Mở đầu** | Mở đầu tác phẩm hay một phần | Ít thủ pháp riêng. Hai dạng: **không có chủ đề** (một âm, một hợp âm, hay hình đệm của phần sắp tới — vẫn báo trước tính chất qua tiết tấu, cường độ, tiến độ) và **có chủ đề** hay yếu tố của nó |
Sách nhấn mạnh (§18): đó là các trường hợp "thuần"; thực tế hay **đan xen** — ví dụ phần trình bày một chủ đề dài có thể là "trình bày + giữa + trình bày".

## §12 – 17. Năm nguyên tắc phát triển
"Hình thức âm nhạc, diễn ra trong thời gian, là **một quá trình**, tức là sự phát triển." Sách nêu **năm nguyên tắc** (và nói rõ hệ thống "hơi quy ước"):
| # | Nguyên tắc | Theo sách |
|---|---|---|
| 1 | **Lặp lại** | Lặp đúng nguyên văn, cùng kết. Trong nhạc khí, lặp liền nhau sớm thôi tạo cảm giác phát triển, nên thường chỉ lặp một lần |
| 2 | **Lặp lại có biến đổi** (biến tấu) | Phức tạp hơn tuỳ độ sâu của biến đổi; có thể thay lặp đơn giản mà giữ độ dài và kết |
| 3 | **Phát triển** (разработка) | Đưa **từng mảnh** của chủ đề đã trình bày trọn, hoặc thay đổi khung hoà âm, hoặc cả hai. Biến đổi sâu hơn biến tấu vì **cấu trúc chủ đề thay đổi**. Các yếu tố trước đây vang riêng có thể kết hợp nối tiếp hay đồng thời |
| 4 | **Tương phản phái sinh** | Biến đổi mạnh đến mức **chủ đề gốc thành chủ đề mới** |
| 5 | **Tương phản đối chiếu** | Đưa chủ đề mới đối lập với chủ đề cũ mà vẫn thống nhất nghệ thuật. Đối lập có thể nhấn mạnh (không có cầu nối — "như một bước nhảy") hay làm mềm (chuyển dần). Tương phản nhỏ, cùng tiến độ: **một bình diện**; tương phản lớn, đổi tiến độ: **nhiều bình diện** |

## §19. Thủ pháp biến đổi chủ đề ("công việc chủ đề")
Các thủ pháp dùng để phát triển chủ đề ngay khi trình bày, lặp lại có biến đổi, phát triển, hay rút ra chủ đề mới — thường áp dụng cho những cấu trúc ngắn, đặc trưng vì dễ nhận ra khi đã biến đổi:
- **Trang trí giai điệu** (thêm nốt ngoài hợp âm lân cận, nốt hợp âm mới; có thể thành coloratura rộng — ví dụ Nocturne của Chopin);
- **Giãn hoặc nén quãng**;
- **Đảo** (đổi chiều các quãng);
- **Tăng trường độ**, **giảm trường độ**;
- **Ngược dòng** (chạy từ cuối về đầu);
- **Dời phách** (*per arsin et thesin*).

## §20. Hai nhóm hình thức
Hình thức chia thành **chủ điệu** (Phần một của sách) và **phức điệu** (Phần hai).

Liên quan: [[chuc-nang-hinh-thuc]], [[ly-thuyet-chu-de]], [[bien-doi-chu-de]]. So sánh với bốn nguyên tắc của Mazel: [[mazel-cau-truc-cau-doan-va-chuc-nang]]. Tổng quan sách: [[sposobin-hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'sposobin-doan-nhac',
    title: 'Sposobin: đoạn nhạc, các dạng phức tạp và dân ca Nga (chương I – II)',
    category: 'form',
    aliases: ['Sposobin đoạn nhạc', 'период Способин', 'tính chu kỳ cấu trúc', 'структурная периодичность', 'tổng hợp và chia nhỏ', 'суммирование и дробление', 'đoạn nhạc lớn', 'đoạn nhạc phức', 'bổ sung', 'дополнение', 'kết xen', 'вторгающаяся каденция', 'dân ca Nga'],
    summary: 'Định nghĩa đoạn nhạc và câu của Sposobin; đoạn nhạc một giọng và chuyển giọng; đoạn nhạc hai câu, ba câu, không chia câu; câu nhỏ, motif, submotif; tính chu kỳ cấu trúc, tổng hợp và chia nhỏ; đoạn nhạc không vuông; các dạng phức tạp (đoạn lớn, đoạn phức, mở rộng bên trong, bổ sung, rút gọn, chồng ghép, kết xen, tái hiện trong đoạn); đoạn nhạc như một hình thức độc lập; dân ca Nga (giai điệu, điệu thức ngũ cung, cấu trúc).',
    refs: [BOOK],
    body: `
${NOTE}

## Chương I. Đoạn nhạc cấu tạo đơn giản nhất
- **Định nghĩa (§21)**: "Đoạn nhạc là một **ý nhạc tương đối trọn vẹn**, kết bằng một [[cau-ket|kết]] ở giọng ban đầu hoặc giọng khác." Định nghĩa gần với định nghĩa **chủ đề** (§3) vì chủ đề rất hay được trình bày dưới dạng đoạn nhạc, khi đó ranh giới hai cái trùng nhau.
- Các phần lớn của đoạn nhạc, thường là hai, gọi là **câu** (предложение).
- **§22**: phần lớn đoạn nhạc mang **kiểu trình bày trình bày** (xem [[sposobin-dan-nhap-chuc-nang-va-nguyen-tac]]), nên đặc trưng là **thống nhất giai điệu – chủ đề**: hai câu gần như giống nhau trừ phần kết; hoặc câu sau lặp một phần câu trước; hoặc lặp có trang trí, đổi cao độ, đổi hoà âm; hoặc không lặp nhưng giữ tính chất hình giai điệu – tiết tấu, không có tương phản lớn.
- Các mục tiếp: hoà âm của đoạn nhạc **một giọng** (§23), đoạn nhạc **chuyển giọng** (§24); đoạn nhạc **hai câu**, **ba câu**, và **không chia được thành câu** (§25); những yếu tố nhỏ hơn: **câu nhỏ** (фраза, §26), **motif** và **submotif** (§27).

### §29. Tính chu kỳ cấu trúc; tổng hợp và chia nhỏ
- Chuỗi các yếu tố **dài bằng nhau** (về số ô) gọi là **tính chu kỳ cấu trúc**. Có ở nhiều cấp: 8 = 4 + 4; 8 = 2 + 2 + 2 + 2; 8 = 1 + 1 + … + 1.
- Tính chu kỳ thuần **thường gặp trong thanh nhạc** (gắn với nhịp thơ đều); trong nhạc khí, sự đơn điệu cấu trúc ấy ít đặc trưng hơn, hay gặp ở nhạc múa.
- Phá tính chu kỳ tạo **tương phản cấu trúc**: **tổng hợp** (đơn vị ngắn rồi đơn vị dài gộp lại) và **chia nhỏ** (đơn vị ngắn dần). Sau đó: **đoạn nhạc không vuông** (§30).

## Chương II. A. Các dạng phức tạp của đoạn nhạc
| Mục | Hiện tượng |
|---|---|
| §31 | **Đoạn nhạc lớn** và **đoạn nhạc phức** |
| §32 | Đoạn nhạc có **câu không bằng nhau**; **mở rộng bên trong** |
| §33 | **Bổ sung** (дополнение) sau kết |
| §34 | **Rút gọn** |
| §35 | **Chồng ghép** (наложение) và **kết xen** (вторгающаяся каденция) |
| §36 | **Tái hiện** bên trong đoạn nhạc |
| §37 | Đoạn nhạc là **một hình thức độc lập** |
| §38 | Mở đầu và coda |
Xem thêm: [[cau-nhac]], [[mo-rong-cau-nhac]].

## Chương II. B. Dân ca Nga (§39 – 41)
- Dân ca Nga là một hình thức thanh nhạc nhỏ, kích thước và cấu tạo **hiếm khi vượt quá một đoạn nhạc**; thường có **cấu tạo nhiều lời** (куплетное).
- **Giai điệu**: lặp lại là nguyên tắc quan trọng nhưng nhiều khi lùi xuống hàng thứ hai; yếu tố lặp hay được **biến tấu bằng trang trí** riêng, thậm chí thay nốt, thường phức tạp hơn, có khi đơn giản hơn; giai điệu cũng biến tấu giữa các lời. Nhiều bài một bè, nhưng cũng nhiều bài nhiều bè.
- **Điệu thức**: ảnh hưởng rõ của **ngũ cung** — các vòng nhỏ (попевки) trên **ba âm** (quãng 3 thứ và quãng 2 trưởng trên hay dưới nó); có bài hoàn toàn ngũ cung. Ngoài ra có trưởng, thứ tự nhiên (trong dân ca nông thôn), và các điệu thức cổ (Dorian, Phrygian, Mixolydian).
- **Cấu trúc**: nhiều bài rất ngắn gồm **một câu nhỏ 2 hay 3 ô lặp nhiều lần** với lời khác nhau — giai điệu và cấu trúc trùng chu kỳ. Kiểu này gặp ở hát ru, đồng dao, **bylina** (sử thi), thánh ca dân gian, khóc than, một số bài nghi lễ (như **kolyadka**), ít hơn ở bài hát vòng tròn.
Kiểu biến tấu của Glinka bắt nguồn từ cấu tạo nhiều lời này: [[sposobin-ba-phan-phuc-va-bien-tau]].

Tổng quan sách: [[sposobin-hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'sposobin-hinh-thuc-don',
    title: 'Sposobin: hình thức hai phần đơn và ba phần đơn (chương III – IV)',
    category: 'form',
    aliases: ['Sposobin hai phần', 'Sposobin ba phần', 'простая двухчастная форма', 'простая трехчастная форма', 'tái hiện giả', 'мнимая реприза', 'tái hiện tĩnh và động', 'hai phần có tái hiện', 'hai phần không tái hiện'],
    summary: 'Sposobin: hai phần đơn gồm hai đoạn nhạc thống nhất về chủ đề và giọng (phân biệt với đoạn nhạc phức), có tái hiện hoặc không; ba phần đơn: phần một là đoạn nhạc, phần giữa là đoạn nhạc hay một chuỗi cấu trúc kiểu giữa – phát triển, phần ba thường là tái hiện; ba phần đơn có lẽ hình thành từ hai phần có tái hiện; tái hiện giả, tái hiện tĩnh và động, phần giữa tương phản.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương III. Hình thức hai phần đơn
- **Định nghĩa (§42)**: "Hình thức hai phần đơn là hình thức **gồm hai đoạn nhạc**." Ví dụ sách dẫn: Lyadov, Schubert.
- Hai đoạn nhạc **không được nối máy móc**; thống nhất là điều bắt buộc:
  - **Chủ đề**: phần hai lặp hoặc dùng chung yếu tố với phần một.
  - **Hoà âm**: có giọng chính — hiếm khi không rời, thường được khẳng định đầu hình thức và **lấy lại ở cuối**: hình thức **khép kín về giọng**, ở mức độ nào đó là một cơ thể âm nhạc độc lập.
  - **Cấu trúc**: trường hợp đơn giản, hai đoạn nhạc dài và cấu tạo như nhau; thực tế thường phức tạp hơn.
- **Phân biệt với đoạn nhạc phức** (§31): ở đoạn nhạc phức, hai câu **giống nhau ở đầu**; ở hai phần đơn, đầu hai đoạn nhạc **khác nhau**, nếu giống thì giống ở phần **kết**.
- Các mục: cách mở rộng; phần một; **hai phần có tái hiện** — phần hai gồm phần giữa và tái hiện; **hai phần không tái hiện**; lặp lại các phần; mở đầu và kết; phạm vi sử dụng.

## Chương IV. Hình thức ba phần đơn
- **Định nghĩa (§53)**: "Hình thức ba phần đơn là hình thức mà phần một là **một đoạn nhạc**; phần hai (phần giữa) cũng là một đoạn nhạc hoặc **một chuỗi cấu trúc mang tính giữa – phát triển**; phần ba trong đa số trường hợp là **tái hiện** phần một."
- Sơ đồ: ‖: a :‖: b a :‖ — đoạn nhạc | phần giữa | tái hiện.
- So với hai phần, ba phần là một bước tiến tới hình thức lớn hơn một đoạn nhạc; nhưng **về lịch sử, có lẽ** ba phần hình thành từ hai phần qua việc phần giữa và phần tái hiện lớn lên, tách riêng, đạt kích thước không kém phần một — "một ví dụ về sự lớn lên bên trong của hình thức".
- **Thống nhất**: chủ đề — hai phần ngoài giống nhau, phần giữa thường dựa trên chất liệu của chúng; giọng — khép kín, phần trong thường chuyển sang giọng phụ; cấu trúc — trường hợp đơn giản hai phần ngoài dài bằng nhau, nhưng **tái hiện thường được mở rộng**.
- Các mục đáng chú ý:
  - §55: phần giữa của ba phần **một chủ đề**;
  - §57: **tái hiện giả** (мнимая реприза) — chủ đề trở lại nhưng sai giọng, rồi mới vào tái hiện thật;
  - §58: **tái hiện tĩnh và tái hiện động** ở hai và ba phần;
  - §59: ba phần đơn có **phần giữa tương phản** (chủ đề mới);
  - §60 – 63: kích thước, lặp các phần, mở đầu và coda, phạm vi sử dụng.

Bài trong thư viện: [[hinh-thuc-hai-doan]], [[hinh-thuc-ba-doan]]. Tổng quan sách: [[sposobin-hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'sposobin-ba-phan-phuc-va-bien-tau',
    title: 'Sposobin: ba phần phức và chủ đề với biến tấu (chương V – VI)',
    category: 'form',
    aliases: ['Sposobin ba phần phức', 'сложная трехчастная форма', 'tương phản bên ngoài', 'tương phản bên trong', 'trio', 'episode', 'ba – năm phần phức', 'biến tấu basso ostinato', 'biến tấu Glinka', 'вариации Глинки', 'soprano ostinato', 'biến tấu nghiêm', 'biến tấu tự do', 'Etudes symphoniques'],
    summary: 'Sposobin: ba phần phức có hai phần ngoài cùng chủ đề là hai hay ba phần đơn, phần giữa tương phản rõ (trio hoặc episode); tương phản bên ngoài và bên trong. Chủ đề với biến tấu: phương pháp biến tấu thành nền của hình thức; biến tấu trên basso ostinato (thế kỷ 17), biến tấu nghiêm, biến tấu tự do (Symphonic Études của Schumann), kiểu biến tấu do Glinka đưa vào (giai điệu gần như giữ nguyên, "soprano ostinato"), biến tấu kép.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương V. Hình thức ba phần phức
- **Định nghĩa (§64)**: "Hình thức ba phần phức là hình thức mà hai phần ngoài, **giống nhau về chủ đề**, là **hai hay ba phần đơn**; còn phần giữa, cấu tạo có thể khác nhau, **tương phản rõ** với hai phần ngoài."
- Sơ đồ: A (hai hay ba phần đơn) — B (hai hay ba phần đơn, hoặc đoạn nhạc, hoặc một episode không ổn định kiểu giữa) — A (nhắc lại phần một).
- **Tương phản bên ngoài và bên trong**: tương phản đạt được bằng cách đặt cạnh nhau (bên ngoài) khác với tương phản sinh ra dần, yếu tố này từ yếu tố kia (bên trong — trong đoạn nhạc, trong hai, ba phần đơn một chủ đề). Tương phản bên ngoài có ở ba phần đơn với phần giữa mới, nhưng **ở ba phần phức nó điển hình hơn nhiều** — là **nguyên tắc chính** tạo ra hình thức. Sách nói chữ "bên ngoài" hơi quy ước, vì một sự thống nhất nào đó (không phải lúc nào cũng diễn tả được bằng lời) là điều kiện bắt buộc.
- Các mục: tính chất tương phản giữa phần ngoài và phần giữa; ba phần phức **có trio** (phần một, trio, tái hiện); ba phần phức có **phần giữa là episode**; mở đầu và coda; **ba – năm phần phức**; hình thức **trung gian** giữa ba phần đơn và phức; phạm vi sử dụng. Phụ lục cho chương III – V: phạm vi dùng của hình thức hai, ba phần.
Bài trong thư viện: [[minuet-va-trio]].

## Chương VI. Chủ đề với biến tấu
- **Định nghĩa (§79)**: "Chủ đề với biến tấu là hình thức gồm **trình bày chủ đề ban đầu** và **một số lần nhắc lại có biến đổi**, gọi là biến tấu." Vì số biến tấu không giới hạn, sơ đồ chỉ có thể rất chung: A A₁ A₂ A₃…
- Phương pháp lặp có biến đổi đã gặp ở đoạn nhạc, hai, ba phần — ở đó nó **phụ trợ**; trong hình thức biến tấu nó là **nền tảng**, vì thiếu nó chỉ còn lặp chủ đề liền nhau, mà lặp như vậy (nhất là trong nhạc khí) không được cảm nhận là phát triển.
- Nguồn gốc: các mẫu biến tấu xưa nhất gắn trực tiếp với **nhạc múa**, nên rất có thể hình thức này bắt nguồn (dù không trực tiếp) từ **âm nhạc dân gian** — sách nói "có thể giả định".

| Mục | Loại biến tấu |
|---|---|
| §80 | **Biến tấu trên basso ostinato**: xuất hiện ở **thế kỷ 17**, dựa trên sự lặp liên tục ở bè trầm một hình giai điệu — xem [[passacaglia-va-chaconne]], [[ostinato]] |
| §81 – 85 | **Biến tấu nghiêm** (trang trí): chủ đề; thứ tự sắp xếp các biến tấu; một ví dụ phân tích; thủ pháp phát triển xuyên suốt |
| §86 – 87 | **Biến tấu tự do**; phân tích *Symphonic Études* của **Schumann** |
| §88 – 89 | **Kiểu biến tấu mới do Glinka đưa vào**; phân tích *Hợp xướng Ba Tư* của Glinka |
| §90 | **Biến tấu kép** |
| §91 | Phạm vi sử dụng |

### Kiểu biến tấu của Glinka (§88)
- Bắt nguồn từ **cấu tạo nhiều lời của dân ca Nga** ([[sposobin-doan-nhac]]); được Glinka đưa vào và phổ biến trong âm nhạc Nga, chủ yếu ở các số opera mang tính ca khúc.
- Giống như giai điệu chính của dân ca lặp gần như nguyên vẹn mỗi lời, ở kiểu biến tấu này **giai điệu chủ đề không đổi hoặc gần như không đổi**. Thủ pháp này hay được gọi là **soprano ostinato**, vì có nét chung với "bè trầm cố chấp" cổ. Phần thay đổi là **các bè phụ** (подголоски), gần với lối biến tấu bè phụ trong dân ca.

Bài trong thư viện: [[bien-tau]]. Tổng quan sách: [[sposobin-hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'sposobin-rondo-sonata',
    title: 'Sposobin: rondo, sonata và rondo – sonata (chương VII – IX)',
    category: 'form',
    aliases: ['Sposobin rondo', 'Sposobin sonata', 'Sposobin rondo sonata', 'rondo nhiều lời', 'куплетное рондо', 'rondo cổ điển', 'главная партия Способин', 'phần nối', 'phần phụ', 'phần kết', 'phát triển', 'tái hiện sonata', 'sonata không có phát triển', 'двойные формы'],
    summary: 'Rondo theo Sposobin: một chủ đề vang ít nhất ba lần, xen các phần khác; rondo nhiều lời (cổ, Pháp), rondo cổ điển năm phần A B A C A, rondo thế kỷ 19, hình thức đôi. Sonata: dựa trên đối lập hai chủ đề, tương phản cả chủ đề lẫn giọng khi trình bày, gần nhau về giọng khi tái hiện; các phần chính, nối, phụ, kết; phát triển; tái hiện; coda; mở đầu; các biến thể. Rondo – sonata: chủ đề chính ít nhất ba lần, episode một và ba cùng chủ đề — một ở giọng phụ, một ở giọng chính.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương VII. Rondo
- **Định nghĩa (§92)**: "Rondo là hình thức trong đó **một chủ đề được đưa ra ít nhất ba lần**, giữa các lần là những phần có nội dung khác, thường **mỗi lần một mới**." Sơ đồ: A + B + A + C + A + …
- Ở rondo, **nguyên tắc tái hiện** thể hiện mạnh nhất về số lượng; nó kết hợp với **tương phản đối chiếu** (tương phản bên ngoài).
- Có thể hình dung rondo như **chuỗi các ba phần đơn móc nối** bằng chủ đề lặp lại, chủ đề này vừa thuộc ba phần trước vừa thuộc ba phần sau. Ví dụ sách dẫn: Gavotte trong Partita Mi trưởng cho violin solo của Bach.
| Mục | Giai đoạn |
|---|---|
| §94 – 96 | **Rondo cổ (rondo nhiều lời)**: âm nhạc chủ điệu nửa đầu thế kỷ 18, nhất là nhạc Pháp — không có phát triển dài, các phần khép kín, ngắn, nối khá máy móc; thường **nhiều phần**, nên tổng thể khá lớn; chủ đề gần với ca – vũ |
| §97 | **Rondo cổ điển trưởng thành** (rondo đơn giản): xu hướng phát triển xuyên suốt; các phần rộng hơn, thường **chỉ năm phần** — A + B + A + C + A thành công thức điển hình; thêm **phần nối** (nhất là từ episode về chủ đề, vì episode tương phản và ở giọng khác); **coda gần như bắt buộc** |
| §98 | Rondo thế kỷ 19 |
| §99 | **Hình thức đôi** |
Bài trong thư viện: [[rondo]].

## Chương VIII. Hình thức sonata
- **Định nghĩa (§101)**: "Hình thức sonata là hình thức dựa trên **sự đối lập hai chủ đề**: khi trình bày lần đầu, chúng **tương phản cả về chủ đề lẫn về giọng** (chủ đề I ở giọng chính, chủ đề II ở giọng phụ); sau phần phát triển, chúng được nhắc lại **cùng ở giọng chính**, tức là **gần nhau về giọng**." Nền của sonata là **"tính hai chủ đề được nhắc lại"**.
- Đường nét chung: **ba phần**, hoặc **bốn** nếu coda lớn — Trình bày (phần chính, phần nối, phần phụ, phần kết) | Phát triển | Tái hiện (các phần như trên) | Coda. Mẫu cổ có thể nhắc lại như ba phần đơn (‖: trình bày :‖: phát triển – tái hiện :‖); thường chỉ nhắc phần trình bày, nhiều trường hợp không nhắc gì.
| Mục | Phần | Theo sách |
|---|---|---|
| §102 | **Tính chất tương phản chính** | Mâu thuẫn hai chủ đề là nền và là một động lực chính của sonata |
| §103 | **Phần chính** (chủ đề I) | Tính chất do **ngay phần mở** quyết định. Nếu phát triển tiếp dựa hết vào motif đầu: phần chính **đồng nhất** (ví dụ Beethoven Sonata op. 2 số 1, chương I); có phần chính đưa vào yếu tố tương phản |
| §104 | **Phần nối** | Nằm giữa hai chủ đề, để **chuyển tiếp mềm**. Thường dựa trên chất liệu phần chính (hay lặp vài ô đầu rồi phát triển), có thể có chất liệu mới |
| §105 | **Phần phụ** | Trình bày chủ đề mới **đối lập** với phần chính; tương phản thường rõ ngay từ đầu. Ở vài mẫu sớm (Haydn) và hiếm khi sau này (Schumann, Concerto piano La thứ) tương phản rất nhỏ vì phần phụ bắt đầu bằng chủ đề phần chính |
| §106 | **Phần kết** | Phụ thêm cho phần phụ, kém độc lập hơn; hơi tương phản với phần phụ — dựng từ chất liệu phần chính, phần nối, hoặc **tổng hợp** các chủ đề (ví dụ chương I Giao hưởng số 2 của Borodin) |
| §107 – 109 | **Phát triển** | Tính chất "giữa" mạnh nhất; khai thác những mầm phát triển trong các chủ đề, tự do hơn nhiều so với phần trình bày; nội dung chủ đề, quan hệ hoà âm, cấu trúc |
| §110 – 111 | **Tái hiện** | Là **tổng kết** của sự phát triển; vì hợp nhất về giọng hai chủ đề trước đây tương phản về giọng, ý nghĩa tổng kết rõ hơn các hình thức khác; quá trình dài trong vùng không ổn định được **bù lại** bằng sự ổn định tương đối của tái hiện. Trường hợp đơn giản (rất nhiều): nhắc lại toàn bộ chất liệu trình bày |
| §112 – 113 | Coda; mở đầu | |
| §114 – 115 | **Biến thể** | Sonata không có phát triển; chương I concerto |
Bài trong thư viện: [[hinh-thuc-sonata]], [[hinh-thuc-concerto]].

## Chương IX. Rondo – sonata
- **Định nghĩa (§117)**: Rondo – sonata là hình thức mà: (1) có dấu hiệu chính của rondo — **phần chính vang ít nhất ba lần**; (2) trong các episode giữa các lần ấy, **episode một và ba** (hiếm khi bốn) **giống nhau về chủ đề**; episode trước ở **giọng phụ**, episode sau ở **giọng chính**.
- Sơ đồ ban đầu (cơ bản) có **bốn lần** phần chính: A – nối – B – nối – A | C | A – nối – B₁ – nối – A | coda. Trình bày và tái hiện không nhắc lại.
- Vì episode một và ba giống nhau nên chúng được gọi là **phần phụ**, không gọi là episode; chữ "episode" hầu như chỉ dùng cho phần **không lặp lại**.
- Các mục: phần nối; phần phụ và lần nhắc phần chính; **episode giữa**; **đưa phần phát triển vào** rondo – sonata; phạm vi sử dụng.
Bài trong thư viện: [[sonata-rondo-va-cac-loai-rondo]].

Tổng quan sách: [[sposobin-hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'sposobin-hinh-thuc-co-chu-ky-va-hon-hop',
    title: 'Sposobin: hai phần cổ, sonata cổ, hình thức chu kỳ và hình thức hỗn hợp (chương X – XII)',
    category: 'form',
    aliases: ['hai phần cổ', 'старинная двухчастная форма', 'sonata cổ', 'старинная сонатная форма', 'tổ khúc cổ', 'partita', 'allemande courante sarabande gigue', 'double', 'chu kỳ sonata', 'tổ khúc mới', 'potpourri', 'hình thức hỗn hợp', 'fantasy', 'rhapsody', 'hình thức đối xứng nhiều phần'],
    summary: 'Sposobin: hai phần cổ (cuối thế kỷ 17 – nửa đầu 18) — phần hai dài gấp hai, ba lần phần một, mỗi phần nhắc lại; sonata cổ; sự ra đời của tái hiện trọn; các điệu múa cổ. Hình thức chu kỳ: nhiều phần độc lập về hình thức, tương phản (nhất là tiến độ) mà thống nhất; tổ khúc cổ (allemande – courante – sarabande – gigue, double, prelude); chu kỳ sonata ba, hai, bốn chương và nhiều chương; tổ khúc mới, potpourri. Quan hệ logic giữa các hình thức (đoạn nhạc → hai phần…); hình thức đối xứng nhiều phần; hình thức hỗn hợp, fantasy, rhapsody.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương X. Hai phần cổ và sonata cổ
- **Hai phần cổ (§126)**: hình thức hai phần **cuối thế kỷ 17 và nửa đầu thế kỷ 18**, khác hẳn hai phần đơn về sau nên cần mô tả riêng. Khác biệt chính là **tỷ lệ**: phần hai thường **dài gấp hai, ba lần** phần một và cấu tạo khá phức tạp. Mỗi phần thường **nhắc lại riêng**: ‖: I :‖: II :‖ (có khi không nhắc). Ví dụ sách dẫn: Sarabande trong Tổ khúc Pháp Mi trưởng của Bach.
- **Phần một (§127)**: đồng nhất về hình nét. Ở các điệu múa mà nhịp múa ảnh hưởng mạnh (như gavotte trong tổ khúc Bach), thường là một đoạn nhạc hai câu giống nhau về chủ đề, có khi ba câu. Ở những bài chịu ảnh hưởng giai điệu và kết cấu phức điệu (nhiều allemande, courante, gigue của Bach), tính chu kỳ đơn giản ít gặp hơn: phần một hay là **đoạn nhạc kiểu "triển khai"** (развертывание), không chia câu hoặc chia thành những cấu trúc không có kết rõ.
- Các mục tiếp: **sonata cổ** (§130 – 133: phần một — trình bày; phần hai — phần phát triển và tái hiện gộp lại); **sự ra đời của tái hiện trọn** (§134); mô tả ngắn **các điệu múa cổ** quan trọng nhất (§135).

## Chương XI. Hình thức chu kỳ
- **Định nghĩa (§136)**: "Hình thức chu kỳ là hình thức gồm **hai hay nhiều phần riêng**, mỗi phần **độc lập về hình thức**. Nền tạo nên hình thức chu kỳ là **sự tương phản giữa các phần** (nhất là về tiến độ), với sự thống nhất chung thể hiện cách này hay cách khác."
- **Tổ khúc cổ, partita (§137)**: chuỗi nhiều điệu múa; yếu tố thống nhất là **giọng chung**; các phần tương phản ở mặt khác, nhất là tiến độ. Tổ khúc đầy đủ gồm **bốn điệu múa bắt buộc** theo thứ tự:
| Điệu múa | Nhịp | Tiến độ |
|---|---|---|
| **Allemande** | 4/4 | Vừa phải |
| **Courante** | 3/2 (3/4) | Khá nhanh |
| **Sarabande** | 3/4 (3/2) | Chậm |
| **Gigue** | 6/8 (và các nhịp phân ba khác) | Nhanh |
(Bảng nhịp – tiến độ trong bản quét mờ một phần; số trong ngoặc là nhịp thay thế thường gặp.)
  Thêm vào có thể có: **double** — một biến tấu trang trí theo sau một điệu múa (điển hình cho sarabande); **prelude** trước allemande (Prélude, Ouverture, Sinfonia, Toccata, Fantasia)…
- **Chu kỳ sonata (§138 – 143)**: sonata, trio, quartet… và giao hưởng; chu kỳ **ba chương**, **hai chương**, **bốn chương**; **quan hệ chủ đề giữa các chương**; chu kỳ nhiều chương.
- **Tổ khúc mới, potpourri (§144)**.
Bài trong thư viện: [[the-loai]].

## Chương XII. Quan hệ giữa các hình thức và hình thức hỗn hợp
- **§145**: vì mọi hình thức đều thể hiện các nguyên tắc tạo hình thức cơ bản (Dẫn nhập), nên **có thể suy ra hình thức này từ hình thức khác** — các hình thức phức tạp như là phát triển của hình thức đơn giản nhất. Sách nói rõ: cách so sánh này **mang tính logic**; con đường lịch sử chỉ trùng một phần, thực tế "phức tạp và quanh co hơn nhiều".
- Ví dụ đầu tiên: **đoạn nhạc hai câu** có kết nửa ở giữa là **nguyên mẫu của hai phần đơn** — cả hai đều có hai phần, phần một kết nửa (hoặc chuyển sang giọng phụ), toàn bộ kết ở giọng chính.
- **§146**: hình thức **đối xứng nhiều phần**. **§147**: **hình thức hỗn hợp**; fantasy; rhapsody.

Tổng quan sách: [[sposobin-hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'sposobin-hinh-thuc-thanh-nhac',
    title: 'Sposobin: hình thức thanh nhạc (chương XIII)',
    category: 'form',
    aliases: ['hình thức thanh nhạc', 'вокальные формы', 'luyến âm lời ca', 'музыкальная декламация', 'aria', 'cavatina', 'arioso', 'recitative', 'leitmotif', 'nhạc kịch Nga', 'music drama', 'âm nhạc Chính thống giáo', 'romance', 'vocal cycle'],
    summary: 'Chương XIII sách Sposobin: định nghĩa thanh nhạc (a cappella, thanh – khí nhạc); "đọc nhạc" lời ca — trùng trọng âm, nhấn trọng âm logic; các kiểu đọc nhạc; cơ sở chung của hình thức thanh nhạc; opera (hai loại chính: opera số và music drama; recitative, aria, cavatina, arioso, ensemble, hợp xướng, finale, nhạc khí trong opera, leitmotif; nhạc kịch Nga); oratorio, passion, cantata, motet, madrigal, chorale; thể loại thính phòng (ca khúc, romance, ballade, chu kỳ ca khúc); âm nhạc nhà thờ Chính thống giáo.',
    refs: [BOOK],
    body: `
${NOTE}

## §148 – 150. Định nghĩa và đọc nhạc lời ca
- Thanh nhạc gồm mọi thứ viết cho **một hay nhiều giọng người**, có hay không có nhạc khí đệm. Hát không đệm gọi là ***a cappella*** ("như trong nhà nguyện" — chủ yếu dùng cho hợp xướng không đệm). Nhạc cho giọng hát có đệm nhạc khí, để chính xác hơn, hay gọi là **thanh – khí nhạc**.
- Nét chính của hầu hết thanh nhạc là **đọc nhạc lời ca** (музыкальная декламация): đặt lời (thơ hay văn xuôi) lên những âm có cao độ xác định. Đọc nhạc đúng có các nét:
  1. **Trọng âm của lời trùng trọng âm của nhạc**: trọng âm chính thường rơi vào phách mạnh, đôi khi vào trọng âm đảo phách (ví dụ sách dẫn: opera *Snegurochka* của Rimsky-Korsakov). Trong **dân ca** lệch trọng âm khá thường gặp, ví dụ khi các lời không giữ cùng một nhịp thơ.
  2. **Nhấn trọng âm logic** (ý nghĩa) của lời bằng **đỉnh cao độ** (hoặc chỗ trũng) hay bằng nhấn.
- Sau đó: các kiểu đọc nhạc; cơ sở chung của hình thức thanh nhạc; áp dụng các hình thức chung vào thanh nhạc; chi tiết hình thức thanh nhạc.

## §154 – 172. Opera
| Mục | Nội dung |
|---|---|
| §155 – 156 | **Hai loại opera chính**; opera gồm các **số riêng** |
| §157 | **Recitative** |
| §158 – 163 | **Aria**, arietta; **cảnh**; các loại aria đặc biệt; **cavatina**; **arioso**; các bài đơn ca tên khác |
| §164 – 166 | **Ensemble** (song ca, tam ca…); **hợp xướng**; **finale** |
| §167 | Nhạc khí trong opera |
| §168 | Opera và các màn như một chỉnh thể |
| §169 | **Leitmotif** |
| §170 – 172 | **Music drama**; cảnh trong music drama; **nhạc kịch Nga** |
Xem [[opera]].

## §173 – 183. Các thể loại khác
- **Oratorio**, **passion**, **cantata** — xem [[oratorio-cantata-passion]]; **motet**, **madrigal** — xem [[motet]]; **chorale**.
- **Thính phòng**: ca khúc, **romance**, **ballade**, các hình thức đơn ca khác, ensemble thính phòng, **chu kỳ ca khúc** — xem [[lied]].
- §183: **Âm nhạc nhà thờ Chính thống giáo**.

Tổng quan sách: [[sposobin-hinh-thuc-am-nhac]].
`,
  },
  {
    slug: 'sposobin-phuc-dieu-va-fugue',
    title: 'Sposobin: phức điệu, đối âm phức, mô phỏng, canon và fugue (chương XIV – XVII)',
    category: 'polyphony',
    aliases: ['Sposobin phức điệu', 'Sposobin fugue', 'phức điệu là tính liên tục', 'đối âm đơn và phức', 'đối âm di động', 'đối âm đảo', 'mô phỏng thực và mô phỏng giọng', 'противосложение', 'phản đề giữ', 'интермедия', 'stretta', 'fughetta', 'fugato', 'invention'],
    summary: 'Phần hai sách Sposobin: phức điệu là lối nhiều bè mà các bè độc lập, bình đẳng; khác chủ điệu ở tính liên tục, không chu kỳ; chủ đề phức điệu; phong cách nghiêm và tự do. Đối âm đơn và phức (di động dọc, ngang, kép; đảo); mô phỏng (quãng mô phỏng, mô phỏng ở át, thực và giọng, đảo, tăng – giảm trường độ, mô phỏng kép); canon (kép, hữu hạn – vô hạn). Fugue: phần trình bày, phản đề giữ, phần nối, thứ tự vào bè, phần giữa, tái hiện và coda, đoạn chen, stretta, fugue kép, ba, bốn chủ đề; fughetta, fugato; invention, chorale prelude, prelude, ricercar, canzona, toccata.',
    refs: [BOOK],
    body: `
${NOTE}

## Chương XIV. Cơ sở chung của phức điệu
- **Định nghĩa (§185)**: "Phức điệu, hay đối âm, là lối nhiều bè trong đó **các bè độc lập và bình đẳng** về ý nghĩa." Phát triển độc lập về giai điệu, nhưng khi vang cùng lúc các bè được **hoà âm** thống nhất.
- **Tính liên tục là nét cơ bản**: lối chủ điệu chia thành những đoạn đều (2, 4 ô…) bằng cezura và kết; ngược lại, phức điệu có **tính liên tục** lớn cả trong toàn kết cấu lẫn từng bè, nhờ **cấu tạo không chu kỳ**. Vì vậy "khác biệt chính của giai điệu phức điệu nằm ở **tiết tấu**, không phải ở quãng và điệu thức". Nhưng giai điệu phức điệu không phải hoàn toàn không phân đoạn, không lặp — nếu vậy nó sẽ khó nhớ.
- **§186. Chủ đề phức điệu**: thường **tương đối ngắn** để dễ nhớ; chủ đề dài thường đồng nhất về hình nét.
- §187 – 188: nguyên tắc chung viết đối âm; khái niệm **phong cách nghiêm và tự do**; hai loại phức điệu — mô phỏng và **không mô phỏng**.

## Chương XV. Đối âm phức
- **Đối âm đơn**: kết hợp hai hay nhiều giai điệu mà **không rút ra kết hợp mới**; phần lớn một tác phẩm phức điệu viết bằng đối âm đơn.
- **Đối âm phức**: kết hợp các giai điệu **rút ra được kết hợp mới**. Kết hợp có trước gọi là **kết hợp ban đầu**, kết hợp mới về sau gọi là **kết hợp phái sinh** (ví dụ sách dẫn: Invention hai bè Mi trưởng của Bach, ô 1 – 4 và 5 – 8).
- Hai loại lớn: **đối âm di động** (kết hợp mới do **dời** các giai điệu không đổi) — gồm **di động dọc** và **di động ngang**, và **di động kép**; **đối âm đảo** (soi gương) — kết hợp mới do **đảo** các giai điệu.
- Các mục: đối âm kép ở quãng 8; ở quãng 12 và 10; quãng dời phức tạp; bè tự do; đối âm ba và bốn lần ở quãng 8; ý nghĩa và phạm vi.
Hệ thống chi tiết theo Taneyev: [[doi-vi-phuc-tap]], [[doi-vi-chuyen-dong-chieu-doc]].

## Chương XVI. Mô phỏng và canon
- **Định nghĩa (§197)**: "Mô phỏng là việc một bè **nhắc lại giai điệu vừa trình bày ở bè khác**." Thường bè trước không im lặng mà **viết đối âm** với lần mô phỏng; bè đối âm hầu như luôn tương phản với giai điệu được mô phỏng, nhất là về tiết tấu, để mô phỏng nổi rõ.
- **Quãng mô phỏng** xác định theo âm đầu: lên hay xuống quãng 2, 3, 4…; mô phỏng nhiều hơn hai bè thường gặp.
- Các mục: mô phỏng ở át — **thực** và **giọng**; mô phỏng **đảo**, **tăng – giảm trường độ** và các loại đặc biệt; **mô phỏng kép**; **canon**: định nghĩa và cách viết, **canon kép**, canon **hữu hạn và vô hạn**; phạm vi sử dụng.
Bài trong thư viện: [[mo-phong-don-gian]], [[canon-hai-be]].

## Chương XVII. Fugue
- **Định nghĩa (§206)**: "Fugue là tác phẩm phức điệu **bắt đầu bằng sự vào dần của các bè**, trình bày chủ đề theo lối mô phỏng; sau đó chủ đề **thỉnh thoảng được nhắc lại** trong quá trình phát triển." Fugue dựa trên phức điệu mô phỏng và là một trong những hình thức phát triển nhất của nó. Dấu hiệu bắt buộc: **đưa chủ đề có hệ thống qua các bè**.
- Số bè: thường **bốn hoặc ba**, ít hơn là năm; nhiều hơn, hoặc hai bè, rất hiếm. Fugue cho đàn dây solo không đệm vẫn có nhiều bè, có lúc ẩn (giọng ẩn).
| Mục | Thuật ngữ | Theo sách |
|---|---|---|
| §207 | **Phần trình bày** | Phần đầu, các bè vào lần lượt với chủ đề; số lần đưa chủ đề **bằng số bè**. Kế hoạch giọng bình thường: chủ đề luân phiên đều ở **giọng chính và giọng át** |
| §208 | **Phản đề** (противосложение) | Đối âm với lần đáp đầu tiên; nếu theo chủ đề suốt fugue thì gọi là **phản đề giữ**. Thường tương phản với chủ đề; được viết để **đổi chỗ trong đối âm kép** với chủ đề |
| §209 – 212 | Phần nối; thứ tự vào bè; ranh giới phần trình bày; các lần đưa thêm | |
| §213 – 214 | **Phần giữa**; **tái hiện** và **coda** | |
| §215 | **Đoạn chen** (интермедия) | Cấu trúc giữa các lần đưa chủ đề, **không có chủ đề trọn**. Chính ở đây là **phát triển chủ đề** của fugue, vì các lần đưa chủ đề ít nhiều tĩnh; đoạn chen cũng làm lần vào sau của chủ đề tươi hơn và giữ tính liên tục |
| §216 | **Stretta** | **Mô phỏng nén**: bè mô phỏng vào với chủ đề **trước khi** chủ đề ở bè kia kết thúc — "chủ đề tự làm đối âm cho mình". Vì stretta là một canon ngắn, có thể viết canon trước rồi lấy giai điệu làm chủ đề fugue; nhưng các bậc thầy thường giữ tính biểu hiện của chủ đề, không chịu ràng buộc ấy |
| §217 – 219 | **Fugue kép, ba, bốn chủ đề**; cách ghi sơ đồ fugue | |
| §220 | **Fughetta** và **fugato** | |
- Các thể loại phức điệu khác (§222 – 227): **invention**, **chorale prelude** (обработка хорала), prelude, biến tấu, **ricercar**, **canzona**, **toccata**; phức điệu trong các hình thức khác.
Bài trong thư viện: [[fugue]], [[doi-am-kep]].

Tổng quan sách: [[sposobin-hinh-thuc-am-nhac]].
`,
  },
]
