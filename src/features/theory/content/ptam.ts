import type { Article } from '../wiki'
import { RU_FORM_REFS } from './formru-refs'

/**
 * Cuốn "Phân tích tác phẩm âm nhạc" của tủ sách: khung chương theo mục lục giáo trình của PGS. TS Nguyễn Thị Nhung
 * (Hà Nội, 2005) — chỉ mượn khung, không chép nội dung — và nội dung tổng hợp từ các giáo trình Nga – Xô viết đã đọc
 * được (Sposobin 1984, Mazel 1979, Asafyev 1971, Sokolov 2004). Phần lớn chương là bài sẵn có của bộ "Hình thức âm
 * nhạc — trường phái Nga" (formru-*); file này thêm bài mở đầu và hai chương còn thiếu.
 */
const NHUNG: [string, string] = ['Nguyễn Thị Nhung, Phân tích tác phẩm âm nhạc — Hà Nội, 2005 (mục lục dùng làm khung chương)', '']

export const ptam: Article[] = [
  {
    slug: 'phan-tich-tac-pham-am-nhac-lo-trinh',
    title: 'Phân tích tác phẩm âm nhạc: khung giáo trình và các sách Liên Xô',
    category: 'analysis',
    aliases: ['phân tích tác phẩm âm nhạc', 'giáo trình phân tích tác phẩm', 'анализ музыкальных произведений'],
    summary: 'Bài mở đầu cuốn "Phân tích tác phẩm âm nhạc" của tủ sách: khung hai phần — nguyên tắc phân tích và các hình thức âm nhạc — theo giáo trình nhạc viện Việt Nam, nội dung tổng hợp từ các giáo trình Nga – Xô viết; bảng đối chiếu chương với bài, và danh mục các sách Liên Xô về hình thức và phân tích.',
    body: `## Cuốn sách này là gì
Ở các nhạc viện Việt Nam, môn **Phân tích tác phẩm âm nhạc** đi theo truyền thống Nga – Xô viết: trước hết học các **nguyên tắc** (âm nhạc có gì đặc biệt, các phương tiện diễn tả, chủ đề và cách phát triển, chức năng từng phần, sự phân chia), rồi học **các hình thức** từ nhỏ đến lớn — đoạn nhạc, hai đoạn, ba đoạn, rondo, biến tấu, sonata, rondo – sonata, hai đoạn cổ và sonata cổ.

Cuốn sách của tủ sách giữ **đúng trình tự chương** của giáo trình *Phân tích tác phẩm âm nhạc* của PGS. TS **Nguyễn Thị Nhung** (Hà Nội, 2005), để bạn học song song với giáo trình nhạc viện. Người biên soạn **chỉ dùng mục lục của sách làm khung**; nội dung mỗi chương là bài của thư viện, đọc và tổng hợp từ các giáo trình Nga – Xô viết, có ghi chương, mục và số trang.

## Hai phần, mười lăm chương
| Giáo trình | Chương trong cuốn sách |
|---|---|
| **Phần thứ nhất — Nguyên tắc phân tích** | |
| I. Tính chất đặc biệt của nghệ thuật âm nhạc, phương pháp phân tích | [[hinh-thuc-nga-khai-niem]], [[hinh-thuc-nga-tac-dong-va-phan-tich]] |
| II. Những phương pháp diễn tả cơ bản (§1 – §3: giai điệu, hoà âm, tiết tấu và tiết luật) | [[hinh-thuc-nga-phuong-tien]] |
| II. (§4 – §8: âm sắc, nhịp độ, cường độ, âm vực, cách cấu tạo) | [[am-sac-nhip-do-cuong-do-am-vuc-va-cach-cau-tao]] |
| III. Chủ đề âm nhạc — nguyên tắc phát triển | [[chu-de-am-nhac-truong-phai-nga]], [[hinh-thuc-nga-nguyen-tac-phat-trien]] |
| IV. Chức năng từng phần của hình thức | [[hinh-thuc-nga-chuc-nang-kieu-trinh-bay]] |
| V. Sự phân chia: ngắt, cơ cấu, phần, motif, tiết nhạc, câu nhạc | [[hinh-thuc-nga-phan-doan-cau-truc]] |
| **Phần thứ hai — Hình thức âm nhạc** | |
| I. Đoạn nhạc | [[hinh-thuc-nga-doan-nhac]] |
| II – III. Hai đoạn đơn, ba đoạn đơn | [[hinh-thuc-nga-hinh-thuc-don]] |
| IV – V. Hai đoạn phức, ba đoạn phức | [[hinh-thuc-nga-ba-phan-phuc]] |
| VI. Rondo | [[hinh-thuc-nga-rondo]] |
| VII. Biến tấu | [[hinh-thuc-nga-bien-tau]] |
| VIII. Sonata | [[hinh-thuc-nga-sonata]] |
| IX. Rondo – sonata | [[hinh-thuc-nga-rondo-sonata]] |
| X. Hai đoạn cổ và sonata cổ | [[hinh-thuc-nga-sonata-co-va-hai-phan-co]] |

Cuối mỗi phần của cuốn sách có trang **Tư liệu phân tích**: các bài phân tích tác phẩm sẵn có trong thư viện, xếp theo hình thức.

## Các giáo trình Nga – Xô viết
Nội dung các chương được tổng hợp từ bốn cuốn người biên soạn **đã đọc trên bản quét** (OCR) và ghi số trang:

| Sách | Ghi chú |
|---|---|
| **I. Sposobin**, *Музыкальная форма* (1947; bản 7, 1984) | Giáo trình hình thức cơ bản nhất của nhạc viện Xô viết; hệ thống định nghĩa, trình tự từ đoạn nhạc tới fugue — [[sposobin-hinh-thuc-am-nhac]] |
| **L. Mazel**, *Строение музыкальных произведений* (bản 2, 1979) | Hình thức gắn với ý nghĩa biểu hiện; phương pháp phân tích tổng thể — [[mazel-cau-truc-tac-pham-am-nhac]] |
| **B. Asafyev**, *Музыкальная форма как процесс* (bản 1971) | Hình thức là quá trình; công thức i : m : t — [[asafyev-hinh-thuc-nhu-qua-trinh]] |
| **A. Sokolov**, *Введение в музыкальную композицию XX века* (2004) | Hình thức và sáng tác thế kỷ XX |

Các giáo trình nổi tiếng khác của trường phái này, **người biên soạn chưa đọc** — chỉ ghi để bạn tìm đọc, không có ý nào trong cuốn sách lấy từ chúng:

| Sách | Thông tin xuất bản theo các danh mục thư viện |
|---|---|
| **L. Mazel, V. Zukkerman**, *Анализ музыкальных произведений* (Элементы музыки и методика анализа малых форм) | М.: Музыка, 1967 — cuốn mở ra môn "Phân tích tác phẩm" thay cho môn "Hình thức" cũ |
| **Yu. Tyulin, T. Bershadskaya, I. Pustylnik và cộng sự**, *Музыкальная форма* | Bản 2, М.: Музыка, 1974 |
| **V. Zukkerman**, *Анализ музыкальных произведений. Вариационная форма* | М., 1974 |
| **V. Bobrovsky**, *Функциональные основы музыкальной формы* | М.: Музыка, 1977 hoặc 1978 (các danh mục ghi khác nhau) |
| **V. Protopopov**, *Принципы музыкальной формы И. С. Баха* | М.: Музыка, 1981 |

Sau thời Xô viết, truyền thống này tiếp tục trong sách của **E. Ruchyevskaya** (*Классическая музыкальная форма*, 1998) và **V. Kholopova** (*Формы музыкальных произведений*, 2001).

## Cách học
1. Đọc Phần thứ nhất trước: đó là **công cụ** để đọc mọi hình thức.
2. Mỗi hình thức: đọc chương, rồi phân tích **trên bản nhạc thật** các tác phẩm ở trang Tư liệu phân tích, vừa nghe bản thu.
3. Mỗi chương có mục **"Ba sách nói gì — đối chiếu"**: chỗ Sposobin, Mazel, Asafyev nói khác nhau là chỗ đáng suy nghĩ nhất.`,
    refs: [NHUNG, ...RU_FORM_REFS, ['Mazel L. A., Zukkerman V. A., Анализ музыкальных произведений — М.: Музыка, 1967 (danh mục; người biên soạn chưa đọc)', ''], ['Тюлин Ю. и др., Музыкальная форма, 2-е изд. — М.: Музыка, 1974 (danh mục; người biên soạn chưa đọc)', '']],
  },
  {
    slug: 'am-sac-nhip-do-cuong-do-am-vuc-va-cach-cau-tao',
    title: 'Âm sắc, nhịp độ, cường độ, âm vực và cách cấu tạo — các phương tiện diễn tả (trường phái Nga)',
    category: 'form',
    aliases: ['phương tiện diễn tả', 'cách cấu tạo', 'фактура', 'tiết luật', 'âm vực'],
    summary: 'Năm phương tiện diễn tả ngoài giai điệu, hoà âm và tiết tấu, theo Mazel: chúng đứng thế nào trong hệ thống phương tiện, vì sao cường độ "ít được tổ chức" còn hoà âm "được tổ chức cao", âm vực cao – thấp tạo cảm giác nhẹ – nặng ra sao, và cách cấu tạo (фактура) là gì, vì sao đổi cách cấu tạo thường báo một cấu trúc mới.',
    body: `## Năm phương tiện còn lại
Giáo trình phân tích ở nhạc viện học các phương tiện diễn tả theo thứ tự: **giai điệu, hoà âm, tiết tấu và tiết luật** (xem [[hinh-thuc-nga-phuong-tien]]), rồi **âm sắc, nhịp độ, cường độ, âm vực, cách cấu tạo**. Bài này nói về năm phương tiện sau, chủ yếu theo chương I và chương về sự phân đoạn trong sách của Mazel.

| Tiếng Việt | Tiếng Nga | Hỏi gì khi phân tích |
|---|---|---|
| Âm sắc | тембр | Nhạc cụ, giọng nào; màu tiếng đổi ở đâu |
| Nhịp độ | темп | Nhanh – chậm; nhanh dần, chậm dần ở đâu |
| Cường độ | динамика | To – nhỏ; to dần, nhỏ dần; đỉnh cường độ |
| Âm vực | регистр | Cao – thấp; chủ đề trở lại ở âm vực nào |
| Cách cấu tạo | фактура | Bao nhiêu bè, mỗi bè làm gì, kiểu viết nào |

## Các cặp đối lập của hệ thống
Mazel mô tả hệ thống phương tiện của âm nhạc cổ điển châu Âu như một tập hợp những **cặp đối lập** (оппозиции). Ở năm phương tiện này, các cặp ấy "hiển nhiên": nhịp độ nhanh và chậm, accelerando và ritardando; âm vực cao và thấp; forte và piano, crescendo và diminuendo; trong dàn nhạc — bộ dây và bộ hơi, tutti và một nhóm (hay solo); trong cách cấu tạo — viết chủ điệu và viết phức điệu, viết đồng âm quãng 8 và viết hợp âm [^mazel-1979, ch. I, tr. 35 – 36].

Biết các cặp đối lập này giúp phân tích từng tác phẩm, vì sự tương phản bên trong một tác phẩm thường là cách riêng tác giả **chọn và phối** những cặp đối lập chung của cả hệ thống.

## Cái "được tổ chức cao" và cái "ít được tổ chức"
Đây là ý quan trọng nhất của Mazel về các phương tiện này. Hệ thống phương tiện **không đồng nhất**:

- **Cao độ và trường độ** được tổ chức chặt: so sánh được về lượng, đo được tương đối chính xác, nên sinh ra một tổ chức phức tạp (điệu thức, hoà âm, nhịp) [^mazel-1979, ch. I, tr. 38].
- **Cường độ** thì gần như không được định lượng: không có ký hiệu nào nghĩa là "to gấp đôi"; không nói được *mf* to hơn *mp* bao nhiêu lần; crescendo, diminuendo thực hiện thế nào là tuỳ người biểu diễn [^mazel-1979, ch. I, tr. 36].
- **Âm sắc** thì được "cố định" trong tiếng của chính nhạc cụ, nhưng chỉ mô tả được bằng phẩm chất, thường bằng so sánh — tiếng rít, tiếng ngân, giọng mũi; sáng, mờ, ấm, lạnh — chứ không xếp được trên một trục định lượng như to – nhỏ [^mazel-1979, ch. I, tr. 36].

Hệ quả: khả năng biểu hiện của các phương tiện **được tổ chức cao** (điệu thức – hoà âm) hình thành và biến đổi theo lịch sử cùng với cả hệ thống, dựa vào tiền đề tự nhiên một cách rất gián tiếp. Còn khả năng biểu hiện của các phương tiện **ít được tổ chức** như forte – piano, crescendo – diminuendo dựa trực tiếp hơn vào tiền đề tự nhiên (vật lý, sinh lý, tâm lý), nên ít phụ thuộc vào hệ thống và thay đổi rất chậm: dải cường độ được dùng đã rộng ra nhiều qua các thế kỷ, mỗi tác giả có hiệu ứng riêng — ở Beethoven, *forte* hay *sforzando* thường đến ngay sau diminuendo — nhưng **ý nghĩa** của các hiệu ứng ấy gần như không đổi [^mazel-1979, ch. I, tr. 38].

Mazel giải thích vì sao hệ thống phải không đồng nhất: nó vừa phải giữ **liên hệ giữa âm nhạc với đời sống**, vừa phải bảo đảm **tổ chức bên trong** của tác phẩm. Cường độ trong âm nhạc gần như không khác hiện tượng to – nhỏ ngoài đời, nên phản ánh chúng khá trực tiếp; âm sắc nhạc cụ tuy riêng biệt nhưng dễ được ví với âm thanh và hiện tượng ngoài đời [^mazel-1979, ch. I, tr. 38].

## Âm vực
Âm thấp được nghe như **nặng, đặc**; âm cao như **nhẹ, thoáng**. Lý do theo Mazel khá giản dị: âm thấp giàu bồi âm hơn; vật to hơn phát ra tiếng thấp hơn (violin và contrabass, trumpet và tuba); giọng đàn ông thấp hơn giọng phụ nữ và trẻ em [^mazel-1979, tr. 78 – 79]. Điều này có ý nghĩa chủ yếu khi **so sánh các âm vực**:

- Khi cùng một chủ đề lần lượt xuất hiện ở các âm vực khác nhau, lần ở **âm vực trầm** thường là lần **căng nhất** (đỉnh) — ví dụ nhiều fugue của Bach, như Fugue Đô thứ tập I *Clavier bình quân* [^mazel-1979, tr. 78 – 79].
- Trong một giai điệu, tác dụng này rõ nhất ở **âm vực biên**: ở rất cao, đi lên tiếp có thể gây cảm giác **tan biến** (kết chương chậm Concerto Fa thứ của Chopin); ở rất thấp, đi xuống có thể tạo **sự tăng tiến** vì âm thanh ngày càng nặng. Dù vậy, với giai điệu, ý nghĩa chính vẫn là: đi lên gắn với tăng căng thẳng, đi xuống với giảm căng thẳng [^mazel-1979, tr. 79].

Khi phân tích, hãy để ý **âm vực của đỉnh** và âm vực của những lần **chủ đề trở lại** (tái hiện): tái hiện ở âm vực khác là một cách biến đổi.

## Cách cấu tạo (фактура)
Mazel định nghĩa: cách cấu tạo của một tác phẩm hay một đoạn là **toàn bộ các bè (và nhóm bè) của nó, xét về tính chất, cách kết hợp và chức năng trong chỉnh thể** [^mazel-1979, tr. 131]. Một đoạn nhạc có thể gồm:

- **bè giai điệu chính** (có thể được nhân đôi);
- **bè trầm**;
- các bè **giữ âm** của hoà âm;
- các bè làm **hình hoá** hoà âm hay giai điệu;
- các bè nhấn một **công thức tiết tấu**;
- một bè (hay vài bè) hát một giai điệu đi kèm giai điệu chính — **bè đối** (контрапункт).

Đó là những "chức năng cấu tạo" chính của các bè [^mazel-1979, tr. 131].

**Đổi cách cấu tạo** xảy ra thưa hơn nhiều so với đổi hợp âm. Một cách cấu tạo — cùng số bè, cùng chức năng, cùng kiểu chuyển động và hình hoá — thường giữ suốt một đoạn khá dài và là một trong những yếu tố **thường trực** quyết định tính chất của đoạn ấy. Vì vậy một lần **đổi cách cấu tạo rõ rệt thường đánh dấu đầu một cấu trúc mới**. Cũng có khi cách cấu tạo mới (hay một yếu tố cấu tạo mới quan trọng) xuất hiện **ở cuối cấu trúc trước** — trên hợp âm chủ kết thúc hay trên hợp âm bốn sáu kết — như báo trước tính chất của đoạn sau: ở đoạn giữa Nocturne Đô thứ Op. 48 của Chopin, yếu tố mới (quãng 8 chạy móc kép liên ba) xuất hiện trên hợp âm bốn sáu kết, một ô trước kết trọn [^mazel-1979, tr. 131 – 132].

Mazel còn nhắc một chỗ tinh tế: có khi sự phân chia theo **đổi cách cấu tạo (và hợp âm)** không trùng với sự phân chia theo **câu của giai điệu chính**. Cái trước là "bộ xương" chung, cái sau phủ lên trên như "lớp vỏ" — hai chữ ông mượn của G. Conus [^mazel-1979, tr. 132].

Khi mô tả cách cấu tạo, người ta dùng nhiều cặp: phức tạp – đơn giản, dày – thưa…; xem thêm [[ket-cau]] (cách gọi phương Tây: texture).

## Nhịp độ và cường độ trong phân tích
- **Nhịp độ**: nhanh – chậm, nhanh dần – chậm dần là một cặp đối lập của hệ thống [^mazel-1979, ch. I, tr. 35]. Khi phân tích, ghi mọi chỗ đổi nhịp độ và xem nó trùng ranh giới phần nào; xem [[nhip-do]].
- **Cường độ**: theo dõi đường **to dần – đỉnh – nhỏ dần**; xem đỉnh cường độ có trùng đỉnh giai điệu, đỉnh âm vực không. Vì cường độ là phương tiện "ít được tổ chức", hãy coi chỉ dẫn cường độ của tác giả là một phần của **bản ý đồ**, không phải con số; xem [[cuong-do]].

## Cách phân tích
1. Lập bảng năm cột (âm sắc, nhịp độ, cường độ, âm vực, cách cấu tạo) cạnh sơ đồ hình thức.
2. Đánh dấu mọi chỗ **đổi cách cấu tạo**: kiểm xem có trùng đầu một cấu trúc mới không, hay xuất hiện sớm ở cuối cấu trúc trước.
3. Tìm **đỉnh** của tác phẩm và xem những phương tiện nào cùng dồn về đó.
4. So sánh phần trình bày và tái hiện: âm vực, cường độ, cách cấu tạo đổi gì.

## Bài tập
1. Nocturne Đô thứ Op. 48 của Chopin, đoạn giữa: tìm ô xuất hiện quãng 8 móc kép liên ba; nó nằm trước hay sau kết trọn?
2. Chọn một fugue trong *Clavier bình quân* tập I; ghi âm vực từng lần chủ đề xuất hiện. Lần nào căng nhất?
3. Liệt kê chức năng cấu tạo của từng bè trong 8 ô đầu một chương chậm sonata của Mozart.

## Liên kết
[[hinh-thuc-nga-phuong-tien]] · [[am-sac]] · [[nhip-do]] · [[cuong-do]] · [[ket-cau]] · [[mazel-giai-dieu-va-tiet-tau]] · [[hinh-thuc-nga-phan-doan-cau-truc]]`,
    refs: [...RU_FORM_REFS.slice(0, 2), NHUNG],
  },
  {
    slug: 'chu-de-am-nhac-truong-phai-nga',
    title: 'Chủ đề âm nhạc — định nghĩa, các dạng và chất liệu chủ đề (trường phái Nga)',
    category: 'form',
    aliases: ['chủ đề âm nhạc', 'тема', 'chất liệu chủ đề', 'тематический материал', 'tính chủ đề'],
    summary: 'Chủ đề (тема) theo Mazel: ý nhạc đủ thành hình, đủ tập trung, có diện mạo riêng và thường làm nền cho sự phát triển; độ dài, độ khép kín, chủ đề tương phản và không tương phản, số lượng chủ đề, phân biệt chủ đề với chất liệu chủ đề; và ba kiểu quan hệ giữa các phần dựa trên chủ đề theo Sposobin.',
    body: `## Định nghĩa
Mazel định nghĩa **chủ đề** (тема) là **một ý nhạc** (trình bày trong một cấu trúc nào đó), có **đủ độ thành hình**, **đủ độ tập trung**, có **tính đặc trưng và diện mạo riêng** về biểu hiện, và **thường làm nền cho sự phát triển** [^mazel-1979, tr. 151].

Phần lớn các nét chính của chủ đề nằm ở **bè giai điệu chính**, nhưng rất thường khi **hoà âm và cả cách cấu tạo** cũng quan trọng — thấy rõ qua những cách nói như "chủ đề kiểu hợp xướng", "chủ đề kiểu hợp âm", "chủ đề kiểu valse" [^mazel-1979, tr. 151]. Xem thêm cách cấu tạo ở [[am-sac-nhip-do-cuong-do-am-vuc-va-cach-cau-tao]].

Mazel ghi chú: ban đầu chỉ cấu trúc chính **được phát triển** mới gọi là chủ đề; nay người ta còn nói tới "chủ đề episode" — xuất hiện một lần và không được phát triển [^mazel-1979, tr. 151].

## Độ dài và độ khép kín
Kích thước và cấu tạo của chủ đề rất khác nhau — giữa các thể loại, phong cách, và ngay trong một tác phẩm [^mazel-1979, tr. 151 – 152]:

| Loại | Đặc điểm |
|---|---|
| Chủ đề tác phẩm **phức điệu** (fugue) | Thường ngắn — vài âm đến vài ô — và trình bày **một bè** (xem [[fugue]]) |
| **Leitmotif** trong opera | Cũng thường ngắn; là chủ đề đặc biệt gắn với một nhân vật, hiện tượng, trạng thái |
| Chủ đề tác phẩm **chủ điệu** | Thường dài hơn — phổ biến nhất từ **8 ô đến vài chục ô** |

Độ **khép kín hoà âm** cũng khác nhau: chủ đề có thể kết bằng kết trọn hoàn toàn, kết không hoàn toàn, kết nửa; có thể tách khỏi phần phát triển sau bằng một dấu lặng hay một chỗ dừng tiết tấu, nhưng cũng có thể chảy liền sang phần tiếp theo, không có cezura rõ [^mazel-1979, tr. 152].

## Chủ đề tương phản và không tương phản
- **Chủ đề tương phản**: bên trong đã đặt cạnh nhau các motif, tiết, cấu trúc tương phản về biểu hiện. Một chủ đề như vậy chứa sẵn khả năng phát triển **xung đột** [^mazel-1979, tr. 152].
- **Chủ đề không tương phản**: đồng nhất về tính chất.

Nhưng với tác phẩm lớn, quan trọng hơn là tương phản **giữa các chủ đề** chứ không phải bên trong một chủ đề [^mazel-1979, tr. 152]. Xem tương phản chính của hình thức sonata ở [[hinh-thuc-nga-sonata]].

## Số lượng chủ đề
Số chủ đề trong một tác phẩm, quy mô mỗi chủ đề và độ rộng phát triển của chúng rất khác nhau. Độ lớn của tác phẩm **không chỉ phụ thuộc số chủ đề**: có những tác phẩm **một chủ đề** khá lớn, dài hơn cả vài tác phẩm nhiều chủ đề [^mazel-1979, tr. 152].

## Chủ đề và chất liệu chủ đề
**Chất liệu chủ đề** (тематический материал), khác với chủ đề, **không đòi hỏi phải thành hình**: đó là tổ hợp phương tiện cụ thể tạo nên (hay đủ riêng để có thể tạo nên) một chủ đề hay các phần của nó. Khi nói phần phát triển sonata dùng chất liệu của một chủ đề phần trình bày, người ta thường không nói tới cả chủ đề mà tới **từng mảnh** của nó. Cũng có khi trong tác phẩm xuất hiện chất liệu mới, đủ riêng, nhưng **không thành hình chủ đề**: trong Prelude Si trưởng Op. 11 của Scriabin, ở chỗ mở rộng câu hai xuất hiện những motif mới nhưng không thành chủ đề mới [^mazel-1979, tr. 152].

Người ta còn phân biệt chất liệu chủ đề với **chất liệu không chủ đề** — chất liệu không có ý nghĩa chủ đề trong tác phẩm ấy, như các đoạn chạy tương đối trung tính, các công thức hình hoá chung [^mazel-1979, tr. 152].

## Chủ đề và quan hệ giữa các phần (Sposobin)
Sposobin nhìn từ phía hình thức: ở quy mô lớn, sự **liên kết – lệ thuộc giữa các phần** dựa trên **các yếu tố giai điệu – chủ đề**, tức quan hệ giữa những ý nhạc có diện mạo riêng tương đối hoàn chỉnh. Mọi trường hợp quy về ba kiểu [^sposobin-1984, §3, tr. 18 – 20]:

1. **Một chủ đề**: các phần dựa trên cùng chủ đề — trình bày, phát triển, nhắc lại.
2. **Các chủ đề họ hàng**: các phần dựa trên những chủ đề có quan hệ.
3. **Các chủ đề khác nhau**: có khi tương phản mạnh về nhiều mặt.

Ở quy mô nhỏ hơn, Sposobin chỉ ra những yếu tố tạo sự lệ thuộc trong giai điệu: **dẫn giọng ẩn** (giai điệu đi bằng quãng gãy như hai bè trong một), và **đường tựa** — thường đi xuống từng bậc — tạo từ các âm rơi vào phách mạnh [^sposobin-1984, §3, tr. 18 – 20].

## Đối chiếu với cách nhìn phương Tây
Trường phái Nga định nghĩa chủ đề qua **chức năng trong hình thức** (làm nền cho phát triển) và **tính đặc trưng biểu hiện**. Lý thuyết phương Tây gần đây có hai hướng khác: phân tích **câu chủ đề** theo chức năng (sentence, period — xem [[chuc-nang-hinh-thuc]]) và phân tích **chủ đề biểu đạt** (topic) theo kho thể loại, phong cách thế kỷ XVIII (xem [[ly-thuyet-chu-de]]). Mazel gần với hướng thứ hai ở chỗ coi thể loại và "tính chất" là một phần của chủ đề ("chủ đề kiểu valse", "kiểu hợp xướng").

## Cách phân tích một chủ đề
1. Xác định **ranh giới**: chủ đề kết ở đâu, bằng kết gì; có cezura rõ không.
2. Ghi **cấu trúc** (đoạn nhạc, câu, motif) — xem [[hinh-thuc-nga-doan-nhac]], [[hinh-thuc-nga-phan-doan-cau-truc]].
3. Mô tả **diện mạo**: bè giai điệu, hoà âm, cách cấu tạo, thể loại.
4. Chủ đề **tương phản hay không**; những motif nào sẽ được phát triển (chất liệu chủ đề).

## Bài tập
1. Chọn một chủ đề fugue và một chủ đề phần chính sonata Mozart; so sánh độ dài, số bè, độ khép kín.
2. Trong phần phát triển một sonata, chỉ ra mảnh nào lấy từ chủ đề nào (chất liệu chủ đề).
3. Prelude Si trưởng Op. 11 của Scriabin: tìm các motif mới ở chỗ mở rộng câu hai.

## Liên kết
[[hinh-thuc-nga-nguyen-tac-phat-trien]] · [[hinh-thuc-nga-doan-nhac]] · [[motif]] · [[bien-doi-chu-de]] · [[ly-thuyet-chu-de]] · [[hinh-thuc-nga-xx-hinh-thuc-va-chu-de]]`,
    refs: [...RU_FORM_REFS.slice(0, 2), NHUNG],
  },
]
