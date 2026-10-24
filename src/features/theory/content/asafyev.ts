import type { Article } from '../wiki'

const BOOK: [string, string] = ['Асафьев Б. (Игорь Глебов), Музыкальная форма как процесс. Книги первая и вторая, изд. 2-е. — Л.: Музыка, 1971 (bài dẫn của E. M. Orlova; bản PDF do Lamar cung cấp)', 'https://www.piano.ru/scores/books/asaf-forma.pdf']
const WIKI: [string, string] = ['Википедия — Асафьев, Борис Владимирович', 'https://ru.wikipedia.org/wiki/Асафьев,_Борис_Владимирович']
const NOTE = 'Bài đọc từ bản in 1971 (quyển một và quyển hai), qua văn bản nhận dạng chữ (OCR) từ bản scan. Câu trong ngoặc kép là dịch sát nguyên văn tiếng Nga; văn Asafyev rất cô đặc, bản dịch ưu tiên đúng ý hơn đúng từng chữ.'

export const asafyev: Article[] = [
  {
    slug: 'asafyev-hinh-thuc-nhu-qua-trinh',
    title: 'Asafyev: Hình thức âm nhạc như một quá trình — tổng quan sách',
    category: 'form',
    aliases: ['Asafyev', 'Asafiev', 'Асафьев', 'Igor Glebov', 'Игорь Глебов', 'Музыкальная форма как процесс', 'hình thức như quá trình'],
    summary: 'Boris Asafyev (1884 – 1949), Hình thức âm nhạc như một quá trình: quyển một (viết xong 1929, in 1930) — ba đoạn: sự hình thành âm nhạc diễn ra thế nào; các kích thích và yếu tố của sự hình thành (đẩy, kết, i:m:t); nguyên tắc đồng nhất và tương phản trong các hình thức đã kết tinh — cùng hai phụ lục; quyển hai *Ngữ điệu* (viết xong trong vòng vây Leningrad, 24/1/1942, in 1947). Bài này là mục lục dẫn sang các bài chi tiết.',
    refs: [BOOK, WIKI],
    body: `
**Boris Vladimirovich Asafyev** (1884 – 1949), nhà âm nhạc học và nhà soạn nhạc Nga, viện sĩ, nhiều bài ký bút danh **Igor Glebov**. Theo bài dẫn của E. M. Orlova trong bản 1971:
- **Quyển một** chuẩn bị in năm **1929**, in năm **1930**.
- **Quyển hai — *Ngữ điệu*** (Интонация) viết trong thời **Leningrad bị phong toả**; bản thảo xong ngày **24/1/1942**, in lần đầu năm **1947**, hai năm trước khi tác giả mất.
- Asafyev kể ý tưởng hình thức "không phải như những sơ đồ kiến trúc 'câm', mà như một **quá trình tổ chức chất liệu vang lên và sự kết tinh của nó**" đã có từ **1916 – 1917**.

${NOTE}

## Mục lục và bài tương ứng
| Phần của sách | Nội dung | Bài trong thư viện |
|---|---|---|
| Quyển một — Dẫn nhập; Phần I (ch. I – III): **Sự hình thành âm nhạc diễn ra thế nào** | Hình thức là quá trình và là sơ đồ kết tinh; trí nhớ; đồng nhất (lặp lại); tĩnh và động; năng lượng, cú đẩy | [[asafyev-qua-trinh-va-ket-tinh]] |
| Phần II (ch. IV – VI): **Kích thích và yếu tố của sự hình thành** | Cú đẩy và sự khép (kết); **i : m : t**; các kiểu chuyển động; nghịch – thuận âm, mô tiến, chuyển giọng | [[asafyev-i-m-t-va-cac-yeu-to]] |
| Phần III (ch. VII – XII): **Nguyên tắc đồng nhất và tương phản** trong các hình thức đã kết tinh | Biến tấu, canon, fugue, rondo; sonata; biện chứng của sự hình thành; chu kỳ, tổ khúc và giao hưởng | [[asafyev-dong-nhat-va-tuong-phan]] |
| Phụ lục 1 – 2; Quyển hai *Ngữ điệu* | Tổng kết luận điểm; **ngữ điệu**; "từ điển ngữ điệu truyền miệng"; khủng hoảng ngữ điệu | [[asafyev-ngu-dieu]] |

## Vì sao sách quan trọng
- Theo Orlova, luận điểm "hình thức như quá trình và hình thức như sơ đồ kết tinh là **hai mặt của cùng một hiện tượng**" đã trở thành nền của âm nhạc học Xô viết và được dùng trong thực hành phân tích.
- Sách **phân loại hình thức theo cách chúng phát triển**, không theo cấu trúc sau cùng.
- "Thước đo mọi vật trong âm nhạc" là **thính giác**: "Trong âm nhạc không có gì tồn tại ngoài kinh nghiệm nghe."
- Asafyev cũng là người đưa thuật ngữ **симфонизм** (tính giao hưởng) vào âm nhạc học (ông tự nói như vậy ở quyển hai).
- Ông thừa nhận văn mình "nặng" và khó đọc — nên đọc sách này **sau** Sposobin và Mazel.

So sánh với Sposobin và Mazel: [[hinh-thuc-va-phan-tich-truong-phai-nga]].
`,
  },
  {
    slug: 'asafyev-qua-trinh-va-ket-tinh',
    title: 'Asafyev: hình thức là quá trình và là sơ đồ kết tinh (Dẫn nhập, chương I – III)',
    category: 'form',
    aliases: ['hình thức như quá trình', 'форма как процесс', 'hình thức kết tinh', 'кристаллизация', 'nguyên tắc đồng nhất', 'принцип тождества', 'nhận ra sự giống', 'узнавание сходства', 'tĩnh và động âm nhạc', 'hình thức mở', 'разомкнутая форма', 'chất liệu vang lên'],
    summary: 'Asafyev: hình thức âm nhạc là sự tổ chức chuyển động của chất liệu vang lên, được xã hội kiểm nghiệm qua nghe; "hình thức như quá trình và hình thức như sơ đồ (đúng hơn là cấu trúc) đã kết tinh là hai mặt của cùng một hiện tượng"; trí nhớ quyết định hình thức; lặp lại — "nhận ra sự giống" — là phương tiện đầu tiên; tĩnh và động; hình thức khép và mở.',
    refs: [BOOK],
    body: `
${NOTE}

## Dẫn nhập: hình thức là gì
- "Hình thức **không chỉ là sơ đồ cấu trúc**." Hình thức, được kiểm nghiệm qua tai nghe, có khi qua nhiều thế hệ, là **sự tổ chức** — sự phân bố có quy luật trong thời gian — chất liệu âm nhạc, tức là **tổ chức chuyển động âm nhạc**, "vì không có chất liệu âm nhạc đứng yên".
- Nguyên tắc tổ chức ấy là **nguyên tắc xã hội**, không phải của ý thức cá nhân: chúng lớn lên từ nhu cầu thực tế, được môi trường tiếp nhận và chọn lọc. Thời kỳ "cổ điển" là lúc sự tổ chức chất liệu đạt độ dễ hiểu và bắt buộc đến mức thành **chuẩn mực** cho nhiều thế hệ.
- Luận điểm then chốt: "**Hình thức như quá trình và hình thức như sơ đồ đã kết tinh** (đúng hơn: cấu trúc) là **hai mặt của cùng một hiện tượng**: sự tổ chức chuyển động của những tổ hợp âm có ích xã hội (biểu hiện)."
- So sánh của Asafyev: hình thức tế bào bị giới hạn bởi các yếu tố quyết định nó, ngoài hình thức ấy ta không quan sát được tế bào — nhưng không vì thế hình thức quan trọng hơn tế bào. Cũng vậy, hình thức tác phẩm và hình thức các yếu tố của nó là **công cụ của ý thức tập thể**.
- Vì âm nhạc được nhận biết bằng tai và phải tiếp thu một chất liệu **đang chuyển động**, quá trình chọn lọc trước hết là quá trình **ghi nhớ** — tập trung chú ý vào những âm thanh giống nhau hay hoàn toàn bằng nhau.
- Một định nghĩa khác trong sách: "Nếu hình thức âm nhạc là **quá trình bộc lộ âm nhạc** trong sự gắn kết có quy luật của các yếu tố được ngữ điệu hoá, thì cũng có thể nói ngược lại: âm nhạc bộc lộ qua **quá trình định hình chất liệu vang lên**" (Asafyev đề nghị cả khái niệm **"chất liệu vang lên"** — звучащее вещество).

## Chương I. Sự thật và yếu tố của chuyển động và định hình
Hai hiện tượng cơ bản giúp hiểu quá trình định hình:
1. **Chuyển động âm nhạc** — các âm nối nhau như quan hệ cao độ;
2. **Điều kiện ghi nhớ** — những phương tiện ý thức tạo ra để giữ lại các âm đang trôi qua.
Bản chất thời gian, tính trôi chảy của âm nhạc, và cách ghi nhớ riêng do đó sinh ra, tất yếu ảnh hưởng tới hình thức.

## Chương II. Nguyên tắc đồng nhất hay lặp lại ("nhận ra sự giống")
- Lặp lại là phương tiện **đơn giản và dễ tiếp nhận nhất** để kéo dài một quan hệ âm thanh đã tìm thấy, và là phương tiện **đáng tin nhất cho trí nhớ**.
- Các kiểu lặp lại rất đa dạng: từ tái hiện nguyên văn đến **đối chiếu tương phản** những khoảnh khắc mọc lên từ cùng một chất liệu. Khi đó lặp lại không còn đơn điệu mà thành **kích thích phát triển** từ một tiền đề chủ đề; người nghe nhận ra không phải sự giống nguyên văn mà sự giống của từng yếu tố.
- Ví dụ của sách: chương cuối **Giao hưởng *Anh hùng*** của Beethoven — con đường phát triển biến tấu ở đây không thua về tầm vóc và độ căng so với phần phát triển tương phản của chương I.
- Các mục: các kiểu lặp lại; **mô phỏng, canon, fugue**; khái niệm **chủ đề**; **động và tĩnh** âm nhạc.

## Chương III. Các lực tác động, năng lượng, cú đẩy
- Lực tác động của âm nhạc — nguyên nhân chuyển động — do tính chất của **hệ thống quan hệ âm thanh** quyết định, hệ thống này hình thành trong một nền văn hoá cụ thể.
- Mỗi tác phẩm là một phức hợp các quan hệ âm di động; tổng thể ấy có thể là **hình thức khép**, cân bằng, hoặc được nghĩ như chuỗi mắt xích vô tận (**hình thức mở** — разомкнутая форма).
- Khi tổng thể được nắm như một **thể thống nhất đã kết tinh**, mọi lực ở trạng thái yên và cân bằng — có thể nói về **tĩnh** âm nhạc. Rút các quan hệ tiết tấu – cấu trúc ra khỏi âm vang thật (khỏi sự ngữ điệu hoá) để xét như đứng yên là đối tượng của **phân tích kiến trúc** thuần.
- Ví dụ: quan hệ giọng **cách quãng 3** mà các nhà Lãng mạn ưa chuộng là phản ứng với quan hệ chủ – át đã dùng quá nhiều; tươi mới về màu sắc nhưng sớm tỏ ra "yếu" về cấu trúc, và cuối cùng không vượt được vai trò của vùng chủ – át; đặt vào trong vùng ấy thì chúng làm nó phong phú hơn.

Tiếp: [[asafyev-i-m-t-va-cac-yeu-to]]. Tổng quan: [[asafyev-hinh-thuc-nhu-qua-trinh]].
`,
  },
  {
    slug: 'asafyev-i-m-t-va-cac-yeu-to',
    title: 'Asafyev: cú đẩy, chuyển động, khép lại — công thức i : m : t (chương IV – VI)',
    category: 'form',
    aliases: ['i:m:t', 'initium motus terminus', 'khởi đầu chuyển động kết thúc', 'толчок', 'замыкание', 'cú đẩy', 'sự khép', 'công thức kết hoàn toàn', 'Asafyev kết'],
    summary: 'Phần II quyển một: mọi sự hình thành âm nhạc là cú đẩy (điểm xuất phát) – dịch chuyển (chuyển động, trạng thái cân bằng không bền) – quay về điểm tựa, khép chuyển động; quan hệ i (initium) : m (movere) : t (terminus); công thức kết hoàn toàn T – S – D – T là "tế bào" của quá trình ấy; một mắt xích có thể đổi chức năng (t thành i); các kiểu chuyển động và các kích thích hình thành.',
    refs: [BOOK],
    body: `
${NOTE}

## i : m : t
Asafyev viết (chương IV – V): "Sự hình thành âm nhạc **luôn luôn** là: **cú đẩy** — điểm xuất phát của âm thanh, và **sự dịch chuyển** — chuyển động, hay trạng thái cân bằng không bền — rồi **quay về nguồn**, về trạng thái cân bằng, về điểm tựa, hay **khép chuyển động** lại, tức là quan hệ **i** (*initium* — khởi đầu) : **m** (*movere* — chuyển động) : **t** (*terminus* — kết thúc, giới hạn)."
| Ký hiệu | Latin | Nghĩa |
|---|---|---|
| **i** | initium | Khởi đầu, cú đẩy |
| **m** | movere | Chuyển động, dịch khỏi điểm tựa |
| **t** | terminus | Kết thúc, khép lại |
- **Công thức kết hoàn toàn** phản ánh chính kiểu hình thành này: giữa T và T (hai chủ âm ở hai biên) có **S** (hạ át) và **D** (át) — những vùng **không ổn định** so với xung lực ban đầu. "Không có dịch chuyển khỏi T, không có đối chiếu ngữ điệu thì không có chuyển động âm nhạc."
- Cùng quan hệ ấy có trong giai điệu **chuyển động không đều, ngắt quãng**: ví dụ một giai điệu rondo đơn sơ mà giai đoạn giữa gồm điệp khúc bị cắt — nhờ đó chuyển động được tăng cường.
- **Mắt xích đổi chức năng**: cùng một kết có thể là **t** ở chỗ này và **i** — xung lực — ở chỗ khác. Sách dẫn chỗ chuyển sang phần phát triển trong các quartet của Mozart và Haydn, Sonata violin op. 23 của Beethoven: ngữ điệu kết thúc phần trình bày lại làm khởi điểm cho phần phát triển. "Bất kỳ mắt xích nào của công thức (i : m : t) đều có thể đóng vai trò i hay t đối với các phức hợp âm thanh đi trước hay đi sau."
- Ví dụ "cú đẩy ban đầu" sách phân tích: mở đầu **Concerto piano số 1 Si giáng thứ của Tchaikovsky** — cú đẩy – kết ấy đã "tổng kết" giọng Si giáng thứ, như thể có một giai đoạn Si giáng thứ "đặt ngoài ngoặc", nên chặng mở đầu đi ngay ở Rê giáng trưởng. Asafyev nhấn mạnh sự nhạy cảm của Tchaikovsky với "hình thức như quá trình định hình và kết tinh".

## Các chương
| Chương | Tên (dịch) |
|---|---|
| IV | **Cú đẩy và sự khép chuyển động (kết)** |
| V | **Phát triển chuyển động** — giai đoạn tiến lên giữa cú đẩy và sự khép: chuyển động đều và liên tục, các kiểu khác; chuyển động (a) bằng cách đưa yếu tố mới vào, (b) bằng cách **ngắt** chuyển động đã ổn định và **rẽ** sang đường mới (để tránh quán tính) |
| VI | **Nghịch âm và thuận âm, mô tiến, chuyển giọng, dẫn song song** và các kích thích, yếu tố định hình khác |

## Liên hệ
- Bộ ba i : m : t gần với khái niệm **chức năng hình thức** (mở – giữa – kết) ở Caplin: [[chuc-nang-hinh-thuc]]; với các **kiểu trình bày** của Sposobin: [[sposobin-dan-nhap-chuc-nang-va-nguyen-tac]].
- Ứng dụng khi tập đàn: biết đoạn đang "đẩy", đang "đi" hay đang "khép" để chọn sắc thái và [[nhip-do|tiến độ]].

Tiếp: [[asafyev-dong-nhat-va-tuong-phan]]. Tổng quan: [[asafyev-hinh-thuc-nhu-qua-trinh]].
`,
  },
  {
    slug: 'asafyev-dong-nhat-va-tuong-phan',
    title: 'Asafyev: nguyên tắc đồng nhất và tương phản trong các hình thức đã kết tinh (chương VII – XII)',
    category: 'form',
    aliases: ['đồng nhất và tương phản', 'тождество и контраст', 'Asafyev sonata', 'Asafyev biến tấu', 'hình thức đang thành', 'форма становящаяся', 'chuyển động từng bước và chuyển động nhảy', 'элизия', 'Asafyev tổ khúc giao hưởng'],
    summary: 'Phần III quyển một: hai nguyên tắc định hình — đồng nhất (lặp lại, trở về cái giống) và tương phản (đặt cái đối lập); hình thức dựa trên đồng nhất (biến tấu — về nguyên tắc là hình thức mở, canon, fugue, rondo); hình thức dựa trên tương phản, đỉnh cao là sonata: cú đẩy – phá cân bằng – lập lại cân bằng, "cơ thể phát triển" của công thức kết; biện chứng: chuyển động tuần tự và chuyển động bằng bước nhảy, lược bỏ; hình thức đang thành và hình thức đang kết tinh; chu kỳ, tổ khúc và giao hưởng.',
    refs: [BOOK],
    body: `
${NOTE}

## Hai nguyên tắc
Từ điều kiện ghi nhớ (người nghe phải giữ trong ý thức một chất liệu trôi qua) suy ra: nền của mọi quá trình định hình và mọi hình thức – sơ đồ đã kết tinh là **hai nguyên tắc** (chương VII):
| Nguyên tắc | Tiếng Nga | Theo sách |
|---|---|---|
| **Đồng nhất** | принцип тождества — "nhận ra sự giống" | Nối tiếp hay **trở về định kỳ** những kết hợp giống nhau, có khi hoàn toàn bằng nhau |
| **Tương phản** | принцип контраста — "ghi nhận sự khác" | Nối tiếp những ngữ điệu **đối lập** với phức hợp âm trước đó |
Mức độ và tính chất của sự đối lập có nhiều sắc thái — ví dụ điệp khúc trở lại định kỳ trong rondo khác hẳn tương phản giữa hai chủ đề sonata.

## Chương VII. Hình thức dựa trên đồng nhất: biến tấu, canon, fugue, rondo
- Lịch sử **biến tấu** — nơi đồng nhất hoàn toàn chiếm ưu thế — cho thấy quá trình đi dần từ lặp gần sang lặp ngày càng xa, **"lặp tương phản"**: tai phải thích nghi lâu với những yếu tố lạ chồng lên qua biến tấu.
- Ở biến tấu hiện đại, chủ đề bị rời xa nhanh hơn nhiều so với ở các nhà cổ điển; có biến tấu xa nguồn đến mức được nghe như **một cú đẩy mạnh** tìm sự tổng hợp mới.
- Vì cái **kích thích đầu tiên** (chủ đề) luôn được giả định là đồng nhất, chuyển động biến tấu về nguyên tắc có thể **kéo dài vô hạn** — biến tấu là **hình thức mở**: "dù finale của biến tấu rực rỡ đến đâu, về nguyên tắc vẫn có thể nghĩ ra một biến tấu mạnh hơn sau nó."

## Chương VIII và X. Hình thức dựa trên tương phản; sonata
- "Biểu hiện cao nhất của nguyên tắc này là **allegro sonata** (giao hưởng)." Sơ đồ đơn giản: trình bày – phát triển – tái hiện. Đằng sau là **quá trình**: **cú đẩy – phá cân bằng – lập lại cân bằng**.
- "Tiểu vũ trụ" ghi lại quá trình ấy là **công thức kết hoàn toàn**: allegro sonata là **"cơ thể phát triển"** từ tế bào ấy.
- Quá trình hình thành sonata được nghe như sự **đặt chất liệu tương phản**: trước là nhóm chủ đề "chủ" (phần chính), rồi nhóm thường là "át" (phần phụ).
- **Phần nối** chuyển âm nhạc từ vùng giọng này sang vùng khác và là "yếu tố tổ chức chuyển động **cực kỳ quan trọng**"; Asafyev cho rằng cái tên "đường chuyển" (ход) phản ánh nông cạn bản chất của nó.

## Chương IX. Biện chứng của sự hình thành
- Có **chuyển động tuần tự** và **chuyển động bằng cú đẩy, lược bỏ** (элизия — ví dụ bỏ hợp âm nối hay hợp âm giải quyết trong chuỗi hợp âm 7), **đột biến**…
- Chuyển động tuần tự là chuyển từ phức hợp ngữ điệu này sang phức hợp khác bằng các công thức gắn kết **quen thuộc, đã "lắng đọng"** trong hệ thống âm thanh đó. Ví dụ đơn sơ: từ Đô trưởng sang Sol thăng thứ qua La thứ và Mi trưởng, dừng ở mỗi chặng giọng.
- Cùng đích ấy có thể đạt bằng **lược bỏ, lệch hướng** mà vẫn tự nhiên; mọi thứ tuỳ **môi trường ngữ điệu**. Cái "phi lý" chỉ là "phi lý có điều kiện" — cho tới khi tai đồng hoá được những kích thích mới, phản xạ thành quen.
- "Âm nhạc là **nghệ thuật vận động**": nó được nhận biết như chuyển động.
- Tên chương nêu đối lập then chốt: **nối tiếp và đồng thời**; **hình thức đang thành và hình thức đang kết tinh**.

## Chương XI – XII. Chu kỳ; tổ khúc và giao hưởng
Hình thành **chu kỳ** trên cơ sở tương phản; **tổ khúc** và **giao hưởng**. Xem [[the-loai]].

Liên quan: [[hinh-thuc-sonata]], [[bien-tau]], [[rondo]], [[fugue]]. Tiếp: [[asafyev-ngu-dieu]]. Tổng quan: [[asafyev-hinh-thuc-nhu-qua-trinh]].
`,
  },
  {
    slug: 'asafyev-ngu-dieu',
    title: 'Asafyev: ngữ điệu — "âm nhạc là nghệ thuật của ý nghĩa được ngữ điệu hoá" (Phụ lục, quyển hai)',
    category: 'philosophy',
    aliases: ['ngữ điệu', 'интонация', 'thuyết ngữ điệu', 'теория интонации', 'từ điển ngữ điệu', 'интонационный словарь', 'khủng hoảng ngữ điệu', 'интонационный кризис', 'искусство интонируемого смысла', 'tính giao hưởng', 'симфонизм'],
    summary: 'Phụ lục và quyển hai *Ngữ điệu* (1942/1947): âm nhạc là "nghệ thuật của ý nghĩa được ngữ điệu hoá"; ngữ điệu nối giọng nói với âm nhạc; người nghe mang một "từ điển ngữ điệu truyền miệng" của thời mình — giai điệu là "linh hồn âm nhạc" vì gần nhất với giọng nói; "khủng hoảng ngữ điệu" khi từ điển ấy đổi (thế kỷ 18 ở Nga, thời Beethoven); chuỗi: ngữ điệu sống → chọn lọc phong cách → phong cách → hình thức như quá trình → hình thức – sơ đồ.',
    refs: [BOOK],
    body: `
${NOTE}

## Phụ lục 1: luận điểm tổng kết
"Hình thức như sự hình thành — trong sáng tác, trình diễn hay tiếp nhận — được ý thức nắm trong **sự cùng tồn tại của các mặt đối lập**: trong những công thức và sơ đồ cấu trúc **đã kết tinh, quen thuộc**, và trong những quan hệ **biến đổi chúng hay mới được tạo ra** (yếu tố ngẫu hứng)." Lĩnh vực quan sát đơn giản nhất: các công thức **kết** — "phình ra từ bên trong" (R. Strauss, M. Reger) và "chuyển" từ yếu tố hãm, khép chuyển động thành yếu tố **đẩy chuyển động tới**; ví dụ biện chứng của kết ở Wagner và Debussy.

## Âm nhạc là nghệ thuật của ý nghĩa được ngữ điệu hoá
- Phản ánh và cải tạo hiện thực, âm nhạc được ý thức dẫn dắt, là hoạt động có lý trí. Tính cảm xúc tất yếu của nó **không phải nguyên nhân** của nó, vì "âm nhạc là **nghệ thuật của ý nghĩa được ngữ điệu hoá**" (искусство интонируемого смысла).
- Âm sắc giọng người luôn "nhuộm" cảm xúc – ý nghĩa: ngữ điệu, của lời nói hay âm nhạc, không bao giờ là sự phát âm máy móc vô sắc.
- Chuỗi Asafyev nêu: **ngữ điệu sống** → **chọn lọc phương tiện biểu hiện theo phong cách** ở một giai đoạn lịch sử → **phong cách** như sự khái quát các phương tiện ấy → **hình thức như quá trình** (sự triển khai, hình thành các âm – ý – hình tượng) → những **hình thức – sơ đồ, hình thức – cấu trúc** lắng đọng lại.
- Một trong những đơn vị biểu hiện sơ cấp — **ngữ điệu khái quát** — là **quãng**. Quãng được tiết tấu tổ chức tạo ra hình thức tiết tấu – ngữ điệu ngắn nhất: **bước** (стопа) iambic hoặc trochaic. (So sánh motif iambic – trochaic của Mazel: [[mazel-giai-dieu-va-tiet-tau]].)

## "Từ điển ngữ điệu truyền miệng"
- Trong ý thức người nghe — ý thức xã hội — không chứa trọn các tác phẩm (trừ người chuyên và người yêu nhạc hiếm có), mà lắng một phức hợp biểu tượng âm nhạc rất biến động, trong đó có cả những "mảnh" nhạc. Về thực chất nó là **"từ điển ngữ điệu âm nhạc truyền miệng"**: không phải từ điển thuật ngữ trừu tượng, mà là **"vốn" ngữ điệu** mỗi người tự ngân lên (thành tiếng hay trong đầu), những âm hình "luôn nằm sẵn trên tai", đến cả những quãng đặc trưng.
- Trong từ điển ấy, **cấu trúc giai điệu**, các vòng giai điệu nhỏ (попевки) chiếm ưu thế. Vì vậy giai điệu "là và vẫn là biểu hiện ưu tiên nhất của âm nhạc"; người nghe đại chúng luôn đòi nhà soạn nhạc: **giai điệu!** Giai điệu là **"linh hồn âm nhạc"** vì nó phản ánh nhạy bén nhất phẩm chất chính của **giọng nói** — sự phát âm liên tục trong cao độ; vì thế về nguyên tắc giai điệu cũng **liên tục**.
- Nghe một tác phẩm mới, người ta so sánh theo những "con đường" quen thuộc ấy. "Ngôn ngữ" của nhà soạn nhạc càng chủ quan, càng gắt về ngữ điệu, đời sống tác phẩm càng khó và càng ngắn.

## Khủng hoảng ngữ điệu
- Khi từ điển ngữ điệu của một thời đại thay đổi, xảy ra **khủng hoảng ngữ điệu**. Ví dụ của sách:
  - **Nga, chuyển giao thế kỷ 17 – 18**: văn hoá âm nhạc Nga vốn hoàn toàn mang tính ca hát; bước ngoặt đột ngột sang **chủ nghĩa khí nhạc Tây Âu** với những chuẩn mực trường học gần như bê nguyên sang gây một **khủng hoảng ngữ điệu dài**, vì đó là một phương pháp **tư duy – biểu hiện bằng tai** hoàn toàn khác; cả thế kỷ 18 là quá trình đồng hoá, cho tới khi **thiên tài Glinka** xuất hiện.
  - **Thời Beethoven**: cuộc đấu tranh cho ngữ điệu mới, tính biểu hiện mới, kèm sự đánh giá lại các giá trị âm nhạc — càng gay gắt khi trùng với biến động chính trị. Khủng hoảng gay gắt đẩy nghệ thuật trở về những **cơ sở đơn giản nhất** — không phải trở về "nghệ thuật nguyên thuỷ", mà tiến bộ kỹ thuật được chuyển sang con đường khác (ví dụ số phận của phức điệu châu Âu trong sáng tác Beethoven).
- Ví dụ khác Asafyev nêu: trong **hợp xướng nông dân Nga cổ**, với lối hát bè phụ, "văn hoá âm nhạc như ngữ điệu" được ý thức rõ lạ thường — sáng tác ngẫu hứng, trình diễn và nghe – phê bình của dân làng hoà làm một. "Giá mà người ta nghe các bản giao hưởng châu Âu như thế!"

## Liên quan
- Thuật ngữ **tính giao hưởng** (симфонизм) do Asafyev đưa vào âm nhạc học.
- Về ngữ nghĩa và ý nghĩa âm nhạc trong triết học: xem các bài mục [[triet-hoc-am-nhac]].

Tổng quan: [[asafyev-hinh-thuc-nhu-qua-trinh]].
`,
  },
]
