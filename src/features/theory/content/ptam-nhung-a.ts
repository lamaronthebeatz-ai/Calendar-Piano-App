import type { Article } from '../wiki'

/**
 * Cuốn "Phân tích tác phẩm âm nhạc" viết lại theo giáo trình Nguyễn Thị Nhung (Quyển 1 – bậc đại học, NVHN 2006;
 * bản scan Lamar gửi, OCR). Sách còn bản quyền: tóm lược bằng lời người biên soạn, trích ngắn có số trang in.
 * Trang in = trang PDF + 2 (tr. 9 – 59), +1 (60 – 66), bằng nhau (khoảng 72 – 120), −1 (từ khoảng 127).
 */
export const NHUNG_REF: [string, string] = ['Nguyễn Thị Nhung, Phân tích tác phẩm âm nhạc (Giáo trình, Quyển 1 – bậc đại học) — Hà Nội: Trung tâm Thông tin – Thư viện Âm nhạc, Nhạc viện Hà Nội, 2006', '']

export const ptamNhungA: Article[] = [
  {
    slug: 'ptam-am-nhac-va-phuong-phap-phan-tich',
    title: 'Phân tích tác phẩm âm nhạc — I. Tính chất đặc biệt của âm nhạc và phương pháp phân tích',
    category: 'analysis',
    aliases: ['tính chất đặc biệt của âm nhạc', 'phương pháp phân tích tác phẩm', 'phân tích so sánh', 'hình thức theo nghĩa hẹp'],
    summary: 'Chương I giáo trình Nguyễn Thị Nhung: âm nhạc là nghệ thuật thời gian; nội dung quyết định việc chọn hình thức; phân tích phải toàn diện, đặt tác phẩm vào hoàn cảnh lịch sử, đi từ tổng quát đến chi tiết, kết hợp phân tích nội tại với phân tích so sánh, coi chủ đề âm nhạc là trọng tâm. Ví dụ: Giao hưởng số 9 của Beethoven, Giao hưởng "Quê hương" của Hoàng Việt, ca khúc trước Cách mạng tháng Tám.',
    refs: [NHUNG_REF],
    body: `## Vị trí của chương
Đây là chương mở đầu Phần thứ nhất, *Nguyên tắc phân tích tác phẩm âm nhạc*, của giáo trình PGS. TS **Nguyễn Thị Nhung** dùng ở Nhạc viện Hà Nội. Theo lời mở đầu của sách, Phần thứ nhất trang bị những khái niệm và phương pháp chung; Phần thứ hai đi qua các **hình thức chủ điệu** từ đơn giản đến phức tạp — hình thức phức điệu để dành cho môn Phức điệu — và sau mỗi hình thức có mục **tư liệu phân tích** [^nguyen-thi-nhung-2005, tr. 7]. Tác giả cũng lưu ý giảng viên dùng sách linh hoạt: sinh viên biểu diễn không cần đi sâu như sinh viên Sáng tác – Lý luận – Chỉ huy [^nguyen-thi-nhung-2005, tr. 7].

## Âm nhạc là nghệ thuật thời gian
Giáo trình bắt đầu bằng đặc điểm quan trọng nhất của âm nhạc: **bản chất thời gian**. Âm nhạc được trình bày và phát triển qua thời gian; chính sự tiến triển ấy thể hiện nội dung hình tượng [^nguyen-thi-nhung-2005, tr. 9]. Âm nhạc dựa trên hai yếu tố cơ bản là **giai điệu** và **tiết tấu**, được tổ chức chặt chẽ thành những hệ thống có tính lôgic để biểu hiện hình tượng và tình cảm [^nguyen-thi-nhung-2005, tr. 9].

Từ đó tác giả nêu mối quan hệ nội dung – hình thức: tác phẩm có giá trị nghệ thuật cao luôn chứa một nội dung sâu sắc, và người sáng tác chọn một hình thức phù hợp, không trùng lặp để chuyển tải nội dung ấy; sự độc đáo của hình thức là kết quả của nội dung chứ không phải ngẫu nhiên [^nguyen-thi-nhung-2005, tr. 9]. Mỗi tác phẩm còn là sản phẩm của một thời đại, một dân tộc, trong những điều kiện xã hội cụ thể [^nguyen-thi-nhung-2005, tr. 9].

## Hai ví dụ: nội dung lớn đòi hình thức mới
- **Beethoven, Giao hưởng số 9.** Giáo trình dẫn những cách tân về hình thức đi cùng nội dung lớn của tác phẩm: lần đầu kết hợp giao hưởng với hợp xướng ở chương cuối; đổi chỗ Scherzo và Adagio; hai phần ngoài của chương Scherzo viết ở hình thức sonata [^nguyen-thi-nhung-2005, tr. 10].
- **Hoàng Việt, Giao hưởng số 1 "Quê hương" (1964)** — theo giáo trình là liên khúc sonata – giao hưởng đầu tiên của âm nhạc chuyên nghiệp Việt Nam nửa sau thế kỷ XX. Các chủ đề hình thành từ âm điệu của chín ca khúc và hai làn điệu dân ca quen thuộc (*Hội nghị Diên Hồng*, *Lên đàng*, *Nam bộ kháng chiến*, *Cây trúc xinh*…); chương III không phải scherzo mà là chương kịch tính viết ở hình thức sonata; chương IV kết hợp giao hưởng và hợp xướng [^nguyen-thi-nhung-2005, tr. 11]. Ví dụ cho thấy cách vận dụng một loại hình phương Tây trên ngôn ngữ âm nhạc Việt Nam.

## Phân tích là gì, cần biết gì
Muốn phân tích, dù chỉ một bài hát tập thể hay một làn điệu dân ca, cần hiểu biết rộng: lịch sử xã hội, lý thuyết âm nhạc cơ bản, hoà âm, phức điệu, nhạc cụ và phối khí, lịch sử âm nhạc, mỹ học — và đã nghe nhiều [^nguyen-thi-nhung-2005, tr. 10]. Mục đích chính của phân tích, theo tác giả, là **phát hiện nội dung và ý nghĩa nghệ thuật** của tác phẩm, chứ không dừng ở cấu trúc [^nguyen-thi-nhung-2005, tr. 10].

Năm nguyên tắc rút ra từ chương:

| Nguyên tắc | Nội dung |
|---|---|
| **Đặt vào lịch sử** | Tìm hiểu hoàn cảnh lịch sử – xã hội, các xu hướng và quan điểm nghệ thuật lúc tác phẩm ra đời. Ví dụ: muốn đánh giá ca khúc Việt Nam trước Cách mạng tháng Tám phải hiểu phong trào "nhạc cải cách" những năm 1930 như kết quả giao thoa Đông – Tây [^nguyen-thi-nhung-2005, tr. 12] |
| **Dựa vào phương tiện diễn tả** | Giai điệu, hoà âm, tiết tấu, nhịp độ, cường độ, âm sắc, cách cấu tạo…, cùng chủ đề và các nguyên tắc phát triển chủ đề [^nguyen-thi-nhung-2005, tr. 12] — xem chương II |
| **Từ tổng quát đến chi tiết** | Bắt đầu bằng nhận xét toàn bộ, rồi từng chương, từng phần, từng chi tiết, và luôn đặt chi tiết vào toàn bộ. Hai tác phẩm có dáng hình thức giống nhau có thể rất khác khi xét từng phương tiện [^nguyen-thi-nhung-2005, tr. 12] |
| **Kết hợp phân tích nội tại với so sánh** | So sánh tác phẩm cùng tác giả, hoặc với tác giả cùng hay khác thời, để thấy nét điển hình của phong cách, thể loại và nét độc đáo của từng tác phẩm. Quy luật trong âm nhạc "linh hoạt", không như định lý của khoa học tự nhiên [^nguyen-thi-nhung-2005, tr. 13] |
| **Lấy chủ đề làm trọng tâm** | Chủ đề trần thuật và giới thiệu hình tượng; cần phân tích cả lần trình bày đầu lẫn sự phát triển, biến đổi của nó [^nguyen-thi-nhung-2005, tr. 13] — xem chương III |

Có thể tham khảo lời của chính tác giả, của nhà phê bình và nhà soạn nhạc, nhưng phải kết hợp với sự tìm hiểu của bản thân [^nguyen-thi-nhung-2005, tr. 13].

## "Hình thức" theo nghĩa hẹp
Giáo trình phân biệt nghĩa rộng và nghĩa hẹp của *hình thức âm nhạc* và dùng **nghĩa hẹp**: hình thức là quá trình chứa các phần, các chủ đề của một tác phẩm; trên cơ sở những quá trình ấy mà các hình thức mẫu mực được khẳng định [^nguyen-thi-nhung-2005, tr. 13]. Trường phái Nga bàn kỹ hai nghĩa này: xem mục 5 của [[hinh-thuc-nga-khai-niem]].

## Đọc thêm
- Hình thức, nội dung, quá trình theo Sposobin, Mazel, Asafyev: [[hinh-thuc-nga-khai-niem]], [[hinh-thuc-nga-tac-dong-va-phan-tich]].
- Phương pháp phân tích tổng thể của Mazel: [[mazel-phuong-phap-phan-tich]].
- Quy trình phân tích từng bước: [[phuong-phap-phan-tich-tac-pham]].

## Câu hỏi ôn tập
1. Vì sao "bản chất thời gian" là đặc điểm quan trọng nhất của âm nhạc?
2. Nêu ba cách tân hình thức trong Giao hưởng số 9 của Beethoven mà giáo trình dẫn, và nội dung nào đòi hỏi chúng.
3. Chương III Giao hưởng "Quê hương" khác chương III giao hưởng cổ điển ở chỗ nào?
4. Phân tích so sánh giúp gì mà phân tích nội tại không làm được?`,
  },
  {
    slug: 'ptam-phuong-phap-dien-ta-co-ban',
    title: 'Phân tích tác phẩm âm nhạc — II. Những phương pháp diễn tả cơ bản',
    category: 'analysis',
    aliases: ['phương pháp diễn tả cơ bản', 'phương tiện diễn tả âm nhạc', 'bước nhảy và sự điền đầy', 'làn sóng giai điệu', 'cao trào', 'tiết luật', 'cách cấu tạo'],
    summary: 'Chương II giáo trình Nguyễn Thị Nhung: tám phương pháp diễn tả — giai điệu (âm điệu, quãng, bước nhảy và sự điền đầy, làn sóng, cao trào ở khoảng 3/4 tác phẩm), hoà âm (bổ sung giai điệu, màu sắc, công năng; dàn ý điệu tính), tiết tấu và tiết luật (nghiêm khắc, tự do), âm sắc, nhịp độ, cường độ, âm vực, cách cấu tạo (một bè; chủ điệu, bè lòng, phức điệu). Ví dụ Beethoven, Chopin, Shostakovich và nhiều tác phẩm Việt Nam.',
    refs: [NHUNG_REF],
    body: `## Một hệ thống, giai điệu dẫn đầu
Các phương pháp diễn tả cơ bản — **giai điệu, hoà âm, tiết tấu – tiết luật, nhịp độ, cường độ, âm sắc, âm vực, cách cấu tạo** — tạo thành một hệ thống, vang lên cùng lúc, tác động qua lại, trong đó **giai điệu giữ vai trò dẫn dắt** [^nguyen-thi-nhung-2005, tr. 14]. Khi phân tích phải thấy sự tác động qua lại ấy, đồng thời xét kỹ từng yếu tố riêng.

Ví dụ của giáo trình: nhiều bài ca cách mạng, hành khúc trang nghiêm mở đầu bằng **quãng 4 đi lên** (*Quốc tế ca*, *Diệt phát xít*, *Cùng nhau đi Hồng binh*…). Tính tích cực, thúc giục ấy không chỉ do quãng 4 mà do nhiều yếu tố cùng hướng: từ phách yếu sang phách mạnh, từ âm ngắn sang âm dài, từ âm không ổn định sang âm ổn định [^nguyen-thi-nhung-2005, tr. 14].

Tám ô đầu chương I *Appassionata* (Beethoven, Op. 57) là ví dụ cả hệ thống cùng làm việc: giai điệu đi từ âm vực trầm, tối lên âm vực cao, sáng trên hợp âm rải Fa thứ; hoà âm đi từ ổn định (chủ) sang không ổn định (ô 3 – 4); cường độ tăng dần; cách cấu tạo từ hai tay cách nhau hai quãng tám (u ám) chuyển sang nhiều bè chủ điệu ở cuối ô 4; tiết tấu từ nốt ngắn, bất ổn chuyển tới nốt dài sau đỉnh căng thẳng [^nguyen-thi-nhung-2005, tr. 15 – 16].

## §1. Giai điệu
Những mặt quan trọng nhất của giai điệu: tương quan **cao – thấp**, **dài – ngắn** của âm thanh, và quan hệ **hoà âm – điệu tính**; có khi giai điệu còn mang dấu hiệu **thể loại** [^nguyen-thi-nhung-2005, tr. 16].

**Âm điệu và quãng.** Cần đặc biệt chú ý phân tích **âm điệu**, biểu hiện qua quãng (liền bậc hay nhảy) và hướng chuyển động (lên, xuống, ngang, lượn sóng). Một quãng phải được xét cùng điệu tính, nhịp điệu, nhịp độ, cường độ: cùng một quãng 4 đi lên mà nghĩa có thể ngược nhau. Trong *Cùng nhau đi Hồng binh* (Đinh Nhu) quãng 4 đi từ phách yếu sang mạnh, ngắn sang dài, bậc V sang bậc I của Sol trưởng — **kiên nghị**; trong chương II (hành khúc tang lễ) Giao hưởng số 3 của Beethoven, quãng 4 đi từ phách mạnh sang yếu, dài sang ngắn, nhịp độ rất chậm, hoà âm không đổi — **đau thương** [^nguyen-thi-nhung-2005, tr. 16 – 17].

**Bước nhảy và sự "điền đầy".** Giai điệu thường lượn sóng; đi liền bậc là dạng chuyển động chính. Sau vài bước liền bậc cùng hướng thường có một bước nhảy ngược hướng; sau một bước nhảy xa lại có những bước liền bậc "điền đầy" khoảng trống [^nguyen-thi-nhung-2005, tr. 17]. Ví dụ: chủ đề *Anh hề* của Prokofiev [^nguyen-thi-nhung-2005, tr. 17 – 18].

Điều đáng chú ý là giáo trình coi đây là **một quy luật của cả hình thức**, không chỉ của giai điệu [^nguyen-thi-nhung-2005, tr. 18]:
- Trong **ba đoạn phức** (minuet, scherzo của liên khúc sonata), tương phản giữa phần một và phần hai là "bước nhảy"; phần nối trước tái hiện "điền đầy" nó.
- Giữa các **chương** của liên khúc sonata, giao hưởng: tương phản giữa chương I và II là bước nhảy; nối liền chương (*attacca*) là một cách điền đầy (Sonata piano số 23, Giao hưởng số 5 của Beethoven).

**Làn sóng giai điệu và cao trào.** Lên – xuống chia giai điệu thành những **làn sóng**, ngắn vài âm hay dài nhiều ô [^nguyen-thi-nhung-2005, tr. 19]. Điểm cao nhất của làn sóng là **cao điểm**; giai điệu có thể có nhiều cao điểm, cao điểm quan trọng nhất là **cao trào chính**, thường rơi vào khoảng **3/4 tác phẩm** [^nguyen-thi-nhung-2005, tr. 19]. Ví dụ: Prelude số 1 của Chopin (32 ô) có cao trào chính ở ô 21 — câu một 8 ô, câu hai nhắc 4 ô đầu rồi mở rộng thành 17 ô và chứa cao trào, 10 ô cuối là kết bổ sung củng cố Đô trưởng [^nguyen-thi-nhung-2005, tr. 19 – 20]. Prelude số 4 có những cao trào phụ sát cao trào chính [^nguyen-thi-nhung-2005, tr. 20].

**Âm điệu dân gian trong tác phẩm Việt Nam.** Giáo trình kể nhiều tác phẩm nhạc đàn lấy chủ đề từ âm điệu dân gian: *Giai điệu quê hương* của Hoàng Dương (Lý chiều chiều, Lý con sáo sang sông), *Capriccio* của Hoàng Dương (Lới lơ — Chèo), *Scherzo* cho hai đàn piano của Trần Ngọc Xương (Con gà rừng — Chèo), *Fantaisie* của Quang Hải (Lý tầm quân), *Núi* cho clarinet và piano của Phúc Linh (dân ca H'Mông), *Capriccio* của Vĩnh Bảo (âm hưởng Tây Nguyên và Con gà rừng) [^nguyen-thi-nhung-2005, tr. 20].

## §2. Hoà âm
Hoà âm là động lực tạo hình thức và góp phần tạo tương phản giữa các hình tượng. Ba mặt quan trọng nhất: **(1) bổ sung và làm rõ giai điệu; (2) tạo màu sắc; (3) công năng** [^nguyen-thi-nhung-2005, tr. 22].

- Hoà âm **đổi thường xuyên** làm giai điệu căng thẳng, bất ổn (chương IV Sonata Op. 11 của Schumann); hoà âm **ít đổi** làm giai điệu dàn trải, ca xướng [^nguyen-thi-nhung-2005, tr. 22].
- Nhắc lại một giai điệu với **hoà âm khác** cho nó màu sáng tối khác — so chủ đề 1 chương I Giao hưởng số 7 của Shostakovich ở trình bày và tái hiện [^nguyen-thi-nhung-2005, tr. 23].
- **Công năng** là bản chất quan trọng nhất của dàn ý hoà âm. Nghĩa hẹp: đối chọi giữa hợp âm chủ và các hợp âm khác; xung đột giữa át và hạ át được giải quyết về chủ (16 ô đầu chương II Sonata piano số 7 của Beethoven). Nghĩa rộng: **quan hệ giữa các điệu tính** — điệu tính chính (mở và kết hình thức) và các điệu tính phụ thuộc; công thức **T – D – S – T** hiểu theo nghĩa rộng là trình tự các điệu tính trong hình thức, cuối cùng giải quyết bằng việc trở về điệu tính chính [^nguyen-thi-nhung-2005, tr. 23 – 24].

Ví dụ dàn ý điệu tính: chương I Sonata số 21 (*Waldstein*) của Beethoven — trình bày Đô trưởng → **Mi trưởng** (bậc III thay cho át); tái hiện có **La trưởng** rồi **La thứ** (cùng tên, đồng thời là giọng song song của Đô trưởng) trước khi về Đô trưởng [^nguyen-thi-nhung-2005, tr. 24]. *Fantaisie* Fa thứ của Chopin: dàn ý điệu tính của phần chính (rondo – sonata) đã xuất hiện tóm tắt trong phần nối sau mở đầu [^nguyen-thi-nhung-2005, tr. 24 – 25]. Dàn ý điệu tính đặc biệt quan trọng ở tác phẩm lớn và nhạc sân khấu [^nguyen-thi-nhung-2005, tr. 25].

**Điệu thức và hoà âm trong tác phẩm Việt Nam** [^nguyen-thi-nhung-2005, tr. 25 – 26]:
- Đan xen điệu thức 5 âm và 7 âm: thơ giao hưởng *Việt Nam đất nước của niềm tin và hy vọng* (Minh Khang), tam tấu *Huyền thoại Mẹ* (Nguyễn Thị Nhung).
- Giai điệu 5 âm, bè kiểu 7 âm: *Concertino* piano của Ca Lê Thuần, sonata *Vì độc lập tự do* của Trần Tất Toại, Sonata piano của Đặng Hữu Phúc.
- Chồng điệu tính (Đỗ Hồng Quân, *Chủ đề và biến tấu*); đa điệu ngũ cung (Đỗ Hồng Quân, *Rhapsodie Việt Nam*); quãng 4 làm động lực phát triển (*Non sông một dải* của Nguyễn Xinh).
- Hợp âm **chồng quãng 4** thay quãng 3: Concerto piano *Tổ quốc tôi* của Nguyễn Đình Lượng gần như không có hợp âm chồng quãng 3, chỉ có hợp âm hai quãng 4 chồng nhau hoặc kết hợp quãng 4, 5 với quãng 2.

## §3. Tiết tấu và tiết luật
**Tiết tấu** có ý nghĩa độc lập, hình thành rất sớm — trước cả giai điệu và điệu thức — gắn với ngôn ngữ, hơi thở, hoạt động sinh lý; nó có cả trong thơ, hội hoạ, kiến trúc [^nguyen-thi-nhung-2005, tr. 26]. Nghĩa hẹp: sự nối tiếp có tổ chức về độ dài ngắn của âm thanh; nghĩa rộng: tương quan thời gian giữa các phần, các chương [^nguyen-thi-nhung-2005, tr. 26].

- Từ nốt dài sang nốt ngắn → **tăng** căng thẳng, tích cực; ngược lại → **giảm** [^nguyen-thi-nhung-2005, tr. 27].
- **"Bước nhảy tiết tấu"**: tiết tấu có thể nhảy (đổi đột ngột trường độ) rồi được điền đầy bằng chuyển động cân bằng, song song với giai điệu; điển hình ở các chỗ kết [^nguyen-thi-nhung-2005, tr. 27 – 28] (ví dụ chương I Sonata piano số 2 của Beethoven).
- Hai chức năng của tiết tấu trong hình thức [^nguyen-thi-nhung-2005, tr. 28 – 29]: **(1) nhân tố tích cực, tạo tương phản** — Stravinsky, Shostakovich; chủ đề 1 chương I Giao hưởng số 5 của Shostakovich gần như mỗi ô một âm hình mới; **(2) nhân tố thống nhất** — tiết tấu không đổi suốt một phần lớn, như nhiều etude của Chopin (Op. 10 số 1, 2, 4, 5, 10, 11; Op. 25 số 2, 3, 4, 9), Liszt, Scriabin.

**Tiết luật** là sự luân phiên phách mạnh – phách nhẹ, dạng tổ chức cao của tiết tấu; phách mạnh là điểm tựa dẫn dắt, phách nhẹ phụ thuộc [^nguyen-thi-nhung-2005, tr. 29]. Hai dạng: **tiết luật nghiêm khắc** và **tiết luật tự do** (nhịp *ad libitum*) [^nguyen-thi-nhung-2005, tr. 30]. Tiết tấu và tiết luật là hai mặt của một quá trình tổ chức thời gian [^nguyen-thi-nhung-2005, tr. 31].

Ví dụ: *Tiếng chuông nhà thờ* của Nguyễn Xuân Khoát chia thành những phần khác nhau chủ yếu nhờ tiết tấu – tiết luật: phần 1 nhịp 3/4 rất chậm, ngâm ngợi; phần 2 nhịp 6/8 đong đưa, như tiếng chuông; phần 3 trở lại âm hình phần 1; phần 4 sang 2/4 với âm hình mới [^nguyen-thi-nhung-2005, tr. 31]. Một số tác phẩm cuối thế kỷ XX (Đỗ Hồng Quân *Hoà tấu 95* cho hai đàn piano; Đàm Linh, giao hưởng không đề; Phúc Linh, *Improvisation* cho oboe, bassoon và piano) viết **không ghi nhịp, không điệu tính, tiết tấu tự do** [^nguyen-thi-nhung-2005, tr. 32].

## §4. Âm sắc
Âm sắc là màu sắc của âm thanh, phụ thuộc nguồn phát; hai loại cơ bản là âm sắc **giọng người** và âm sắc **nhạc cụ** [^nguyen-thi-nhung-2005, tr. 32]. Âm sắc không phụ thuộc một cơ cấu lôgic như tiết tấu hay điệu thức; vai trò của nó ngày càng lớn trong lịch sử, thành yếu tố tạo hình, gắn chặt với giai điệu — tiêu biểu ở tác phẩm cho dàn nhạc của Debussy, R. Strauss, Wagner [^nguyen-thi-nhung-2005, tr. 32].

## §5. Nhịp độ
Nhịp độ gắn với tiết tấu, tiết luật; tiết tấu xác định thời gian giữa các âm, còn nhịp độ liên quan đến **tính chất, hình tượng và thể loại** — hát ru, mazurka, scherzo mỗi loại hợp với một nhịp độ [^nguyen-thi-nhung-2005, tr. 32 – 33].

## §6. Cường độ
Cường độ mạnh thường biểu hiện căng thẳng, tích cực; nhẹ — bình ổn, êm ả. Chọn cường độ cho từng giai điệu, từng phần là một mặt quan trọng của biểu hiện; cần tính đến âm vực có hạn của nhạc cụ (nhất là nhạc cụ hơi) và giọng hát [^nguyen-thi-nhung-2005, tr. 33].

## §7. Âm vực
Âm vực gắn với giai điệu và âm sắc, thường ở **vị trí thứ hai** trong hệ thống phương tiện; nhưng có tác phẩm hay đoạn nhạc nó lên vị trí thứ nhất. Tương phản âm vực góp phần phát triển tác phẩm, nhất là ở các hình thức lớn [^nguyen-thi-nhung-2005, tr. 33].

## §8. Cách cấu tạo
Cách cấu tạo là cách sắp đặt âm thanh thành các bè [^nguyen-thi-nhung-2005, tr. 34]:

| Dạng | Kiểu | Ví dụ trong giáo trình |
|---|---|---|
| **Một bè** | Bè đơn | Dân ca; đoạn độc tấu, độc xướng; lần trình bày đầu của chủ đề trong tác phẩm nhiều bè |
| | Đồng âm | — |
| | Tăng đôi quãng tám | Cao trào chính chương I Giao hưởng số 5 của Shostakovich |
| **Nhiều bè** | **Chủ điệu** — một bè dẫn dắt, các bè khác đệm | *Nhớ quê* cho violin và piano (Hoàng Cương) |
| | **Bè lòng** — các bè biến hoá, hoạ lại âm điệu của bè dẫn | — |
| | **Phức điệu mô phỏng** — các bè hoạ lại từ một bè | *Lưu không* cho piano (Hoàng Đạm) |
| | **Phức điệu tương phản** — các bè độc lập, khác nhau | Chương II Giao hưởng số 2 của Brahms |

Trong thực tế cách cấu tạo thường **hỗn hợp**, và còn được gọi theo thể loại: cấu tạo dàn nhạc, hợp xướng, thính phòng, piano [^nguyen-thi-nhung-2005, tr. 35 – 37]. Ý quan trọng cho phân tích hình thức: cách cấu tạo thường **giữ nguyên trong một phần lớn**, nên **đổi cách cấu tạo hầu như luôn báo một phần mới** [^nguyen-thi-nhung-2005, tr. 37].

## Đọc thêm (trường phái Nga)
- Giai điệu, hoà âm, tiết tấu theo Sposobin, Mazel, Asafyev: [[hinh-thuc-nga-phuong-tien]], [[mazel-giai-dieu-va-tiet-tau]].
- Âm sắc, nhịp độ, cường độ, âm vực, cách cấu tạo theo Mazel (các cặp đối lập, phương tiện "được tổ chức cao" và "ít được tổ chức"): [[am-sac-nhip-do-cuong-do-am-vuc-va-cach-cau-tao]].

## Câu hỏi và bài tập
1. Tìm một bài hát mở bằng quãng 4 đi lên và giải thích tính chất của nó bằng tiết tấu, phách, bậc.
2. Trong một minuet có trio, chỉ ra "bước nhảy" và chỗ "điền đầy" ở tầm hình thức.
3. Tìm cao trào chính của Prelude số 1 của Chopin và tính tỉ lệ vị trí của nó.
4. Vẽ dàn ý điệu tính chương I Sonata *Waldstein* và so với công thức T – D – S – T.
5. Trong một etude của Chopin, tiết tấu giữ nguyên — vậy cái gì tạo nên sự phát triển?`,
  },  {
    slug: 'ptam-chu-de-va-nguyen-tac-phat-trien',
    title: 'Phân tích tác phẩm âm nhạc — III. Chủ đề âm nhạc và những nguyên tắc phát triển',
    category: 'analysis',
    aliases: ['chủ đề âm nhạc', 'hạt nhân chủ đề', 'chủ đề đồng nhất', 'chủ đề tương phản', 'nguyên tắc nhắc lại', 'đổi mới âm điệu', 'tương phản bổ sung', 'tương phản cùng nguồn'],
    summary: 'Chương III giáo trình Nguyễn Thị Nhung: chủ đề là tư duy chính làm nền cho tác phẩm, gồm đặc điểm hình tượng, thể loại, phong cách; chủ đề phức điệu ngắn, leitmotiv, chủ đề chủ điệu xây trên hạt nhân (trần thuật – phát triển – kết); chủ đề đồng nhất và tương phản (phân tích chủ đề 1 Giao hưởng số 4 của Brahms); ba giai đoạn của chủ đề trong tác phẩm. Các nguyên tắc phát triển: nhắc lại (nguyên dạng, thay đổi, biến tấu), đổi mới âm điệu (phát triển; tương phản đối chiếu, bổ sung, cùng nguồn; tổng hợp), tái hiện.',
    refs: [NHUNG_REF],
    body: `## §1. Chủ đề âm nhạc
### Vai trò
Hình thức âm nhạc phát triển theo những quy luật, nhưng các quy luật ấy là **tương đối**, không phải công thức vĩnh cửu; chúng được phát hiện trên chất liệu thật của từng tác phẩm, mà nền của chất liệu ấy là **chủ đề âm nhạc** — tư duy chính làm nền tảng cho sự phát triển [^nguyen-thi-nhung-2005, tr. 38]. Chủ đề có tính hoàn thiện về tư duy, có bố cục cấu trúc và hình tượng rõ; bước phát triển sau phụ thuộc nhiều vào chất lượng và tính chất của chủ đề [^nguyen-thi-nhung-2005, tr. 38].

Một tác phẩm có thể có một hay vài chủ đề; quy mô tác phẩm không chỉ do số chủ đề quyết định mà do **khả năng phát triển** của chủ đề và tính chất của sự phát triển [^nguyen-thi-nhung-2005, tr. 38].

### Ba mặt của một chủ đề
Chủ đề là một khối tổng hợp của **đặc điểm cảm xúc – hình tượng**, **tính thể loại** và **nét dân tộc, phong cách** [^nguyen-thi-nhung-2005, tr. 38]:

| Mặt | Ví dụ trong giáo trình |
|---|---|
| **Hình tượng** | Chủ đề chính overture *Coriolan* (Beethoven): không khí xung đột, tương phản tiêu biểu cho cả tác phẩm [^nguyen-thi-nhung-2005, tr. 38] |
| **Thể loại** | Chủ đề Ballade số 1 và số 4 của Chopin đều mang nét nhảy múa; Ballade số 1 đồng nhất về thể loại, còn chủ đề 1 Ballade số 4 có hai yếu tố: kể lể đau thương và nhảy múa kiểu valse [^nguyen-thi-nhung-2005, tr. 38 – 39]. Chủ đề hai Sonata Si thứ của Liszt gộp nhiều dấu hiệu thể loại, trong đó yếu tố *fanfare* kêu gọi [^nguyen-thi-nhung-2005, tr. 39 – 40] |
| **Phong cách, dân tộc** | Chủ đề chương I Concerto violin số 2 của Bartók: rất "Bartók", và qua giai điệu, tiết tấu, điệu thức gắn sâu với dân ca Hungary [^nguyen-thi-nhung-2005, tr. 40] |

Phân tích đúng tính thể loại của chủ đề là một cách phát hiện nội dung tác phẩm [^nguyen-thi-nhung-2005, tr. 39].

### Khuôn khổ và cấu trúc chủ đề
Chủ đề dài từ vài ô đến nhiều ô, tuỳ chức năng trong tác phẩm, phong cách và thể loại [^nguyen-thi-nhung-2005, tr. 42]:
- **Chủ đề phức điệu** thường ngắn, gọn, như nhiều chủ đề fugue của Bach (Fugue Đô thăng thứ số 4, tập I) — nhưng cô đọng, súc tích nên đòi hỏi phát triển căng thẳng [^nguyen-thi-nhung-2005, tr. 42].
- **Âm hình chủ đạo (leitmotiv)** cũng ngắn và rành mạch; là nền cho giao hưởng và nhạc sân khấu lớn, gắn với tính cách nhân vật hay mặt quan trọng của từng màn; khi phát triển nó biến dạng nhưng giữ nét điển hình, tạo thống nhất (nhạc kịch Wagner) [^nguyen-thi-nhung-2005, tr. 42].
- **Chủ đề chủ điệu** thường lớn hơn, phức tạp hơn, có một hay vài yếu tố rất điển hình gọi là **hạt nhân chủ đề** [^nguyen-thi-nhung-2005, tr. 42].

**Hạt nhân chủ đề** thường là một motif, một tiết, tổng hợp âm điệu, tiết tấu, hoà âm điển hình. Trong khuôn khổ chủ đề, hạt nhân đi qua ba giai đoạn: **trần thuật hạt nhân** (nhiều khi có nhắc lại) — **phát triển** — **kết** [^nguyen-thi-nhung-2005, tr. 42 – 43].

**Ví dụ phân tích của giáo trình:** chủ đề 1 chương I Sonata piano số 10 (Sol trưởng) của Beethoven. Hạt nhân mở bằng bước nhảy quãng 8, rồi quãng 4 đi xuống và quãng 2 thứ ngược hướng "điền đầy"; dấu lặng ở phách nhẹ trước bước nhảy làm nét mềm mại. Ô 2 nhắc nguyên hạt nhân; ô 3 – 4 hoạ lại cao một quãng 2 trên hoà âm bậc II, tạo tương phản màu sắc và căng thẳng dẫn tới cao trào cuối ô 4 — quãng rộng nhất, "tiếng vọng" mở rộng của bước nhảy quãng 8; sau đó giai điệu đi xuống, kết trọn ở Sol trưởng [^nguyen-thi-nhung-2005, tr. 43 – 44].

### Chủ đề đồng nhất và chủ đề tương phản
- **Chủ đề đồng nhất**: xây từ một hay vài hạt nhân giống hoặc gần nhau về tính chất; thường trữ tình, đồng quê, ít xáo động (chương chậm giao hưởng Beethoven, Tchaikovsky). Nhưng cũng có chủ đề đồng nhất mang ý nghĩa tương phản — chủ đề chính chương I Sonata Si giáng thứ Op. 35 của Chopin. Vì vậy phải xét toàn bộ phương tiện, kể cả thể loại, chứ không chỉ thành phần hạt nhân [^nguyen-thi-nhung-2005, tr. 44].
- **Chủ đề tương phản**: gồm vài hạt nhân tương phản; chứa khả năng phát triển mạnh, xung đột kịch tính; hay gặp ở chương I sonata, giao hưởng, overture. Có khi tính xung đột của nó dẫn dắt cả chương, cả tác phẩm — chủ đề chương I *Appassionata* dẫn dắt dàn ý điệu tính của chương I, chương III và toàn tác phẩm [^nguyen-thi-nhung-2005, tr. 44].

**Phân tích mẫu: chủ đề 1 chương I Giao hưởng số 4 của Brahms** (19 ô) — chủ đề tương phản gồm ba hạt nhân [^nguyen-thi-nhung-2005, tr. 44 – 46]:

| Ô | Giai đoạn | Hạt nhân |
|---|---|---|
| 1 – 8 | Trần thuật | **Hạt nhân 1** (cơ bản): trữ tình, tinh tế; âm hình tiết tấu không đổi trong 8 ô, âm điệu đổi phong phú, quãng mở rộng dần tạo căng thẳng |
| 9 – 14 | Phát triển | **Hạt nhân 2**: vẫn theo lối giai điệu của hạt nhân 1 nhưng tiết tấu mới, tính nhảy múa, nốt ngắn hơn, nhắc lại trên âm vực rộng; liên quan tới cao trào chính của chương I và tới hình tượng bi thương ở chương kết |
| 15 – 19 | Kết | **Hạt nhân 3**: giai điệu đi xuống, tiết tấu ổn định, cân bằng |

Theo giáo trình, chủ đề này không chỉ gói trong 19 ô mà chứa cảm xúc của cả chương và cả tác phẩm: từ trữ tình dần tới bi kịch, đỉnh ở cao trào chương kết [^nguyen-thi-nhung-2005, tr. 46]. Phân tích tỉ mỉ chủ đề có ý nghĩa **quyết định** cho phân tích toàn bộ [^nguyen-thi-nhung-2005, tr. 46].

### Ba giai đoạn của chủ đề trong tác phẩm
Như hạt nhân là nền của chủ đề, chủ đề là nền của cả tác phẩm và cũng đi qua ba giai đoạn [^nguyen-thi-nhung-2005, tr. 47]:
1. **Giai đoạn đầu** — trần thuật chủ đề, có khi kèm nhắc lại để củng cố.
2. **Giai đoạn phát triển** — chủ đề thay đổi, phát triển; có khi xuất hiện liên hệ với chủ đề mới.
3. **Giai đoạn kết** — khẳng định nét hình tượng cơ bản bằng cách hoạ lại chủ đề, nguyên dạng hay thay đổi.

Ví dụ: *Đường phố thức giấc* của Prokofiev — giai đoạn đầu sáng sủa, nét scherzo nhờ quãng 2 thứ và âm ngân sang phách mạnh; giai đoạn phát triển sang điệu thứ, quãng 2 thứ đi xuống đổi thành quãng 2 tăng đi lên; giai đoạn kết hoạ lại đủ chi tiết (nhấn âm, quãng 2 thứ, đảo phách) [^nguyen-thi-nhung-2005, tr. 51].

**Hình tượng và chủ đề không đồng nhất:** hình tượng âm nhạc là phạm trù **thẩm mỹ**; chủ đề là khái niệm **cấu trúc**, có hai mặt — biểu hiện hình tượng và kỹ thuật âm nhạc [^nguyen-thi-nhung-2005, tr. 51].

## §2. Những nguyên tắc phát triển
Chất liệu chủ đề phát triển dưới tác động của những nguyên tắc; các nguyên tắc cơ bản và tổng hợp nhất là [^nguyen-thi-nhung-2005, tr. 51 – 52]:

### Nhắc lại
Nguyên tắc cơ bản nhất: ở giai đoạn đầu của hầu hết các hình thức, chủ đề thường được nhắc lại, và trong chủ đề thì hạt nhân được nhắc lại — để **khẳng định và củng cố** chất liệu [^nguyen-thi-nhung-2005, tr. 52] (ví dụ chủ đề chương I Sonata số 18 của Beethoven).
- **Nhắc lại nguyên dạng**: giữ nguyên cấu trúc và độ dài [^nguyen-thi-nhung-2005, tr. 53].
- **Nhắc lại thay đổi**: sinh động hơn, vừa củng cố vừa đẩy nhanh quá trình sang giai đoạn mới; dùng rộng rãi trong trình bày chủ đề hình thức sonata; là nguyên tắc cơ bản của **biến tấu** — mỗi biến khúc là sự hoạ lại có thay đổi của một tư duy âm nhạc hoàn thiện. Biến tấu tiêu biểu cho sự phát triển của dân ca và các điệu nhảy trong tổ khúc cổ [^nguyen-thi-nhung-2005, tr. 53].

### Đổi mới âm điệu
Nguyên tắc tạo dạng hình thức, dùng ở cả hình thức đơn và phức; thường là biến đổi đường nét âm điệu cơ bản thành chất lượng mới [^nguyen-thi-nhung-2005, tr. 54]. Ví dụ: Scherzo Sonata số 2 của Beethoven — ở nửa sau đoạn giữa, khi chất liệu "cạn" mà hình thức cần tiếp tục, xuất hiện một **đoạn chen** ở Sol thăng thứ; nghe như tương phản nhưng thật ra hoạ lại, đổi mới âm điệu ô 3 – 4 [^nguyen-thi-nhung-2005, tr. 54]. Ba cách đổi mới:

**a. Biến đổi chất liệu cũ — phát triển.** Nhắc lại không thay đổi căn bản cấu trúc chủ đề; **phát triển** thì có, và phát hiện những mặt chưa bộc lộ lúc trần thuật. Phát triển tập trung ở giai đoạn phát triển của hình thức, nơi căng thẳng nhất: xé lẻ chất liệu, mô phỏng, thủ pháp hoà âm và phức điệu đa dạng; có thể dẫn tới nét hình tượng mới [^nguyen-thi-nhung-2005, tr. 56].

**b. Chất liệu mới — tương phản.** Thiếu tương phản thì không có hình tượng phức tạp và xung đột kịch tính [^nguyen-thi-nhung-2005, tr. 57]. Các dạng:

| Dạng | Định nghĩa | Ví dụ |
|---|---|---|
| **Tương phản đối chiếu (so sánh)** | Đặt trực tiếp hai phần hoàn thiện cạnh nhau | 10 ô đầu chương I Sonata số 30 của Beethoven [^nguyen-thi-nhung-2005, tr. 57] |
| **Tương phản bổ sung** | Hai chủ đề, hai phần bổ sung nhau như hai mặt của một tâm trạng | Chủ đề 1 và 2 chương I Giao hưởng "Bỏ dở" của Schubert [^nguyen-thi-nhung-2005, tr. 58] |
| **Tương phản cùng nguồn** | Chủ đề này sinh ra từ chủ đề kia | Chủ đề 2 chương I Sonata số 1 của Beethoven sinh từ hạt nhân thứ hai của chủ đề 1, trên lối giai điệu đi xuống [^nguyen-thi-nhung-2005, tr. 58] |

**c. Tổng hợp** chất liệu mới với phát triển chất liệu cũ — ví dụ tái hiện chương III Concerto violin của Mendelssohn: chủ đề chính trở lại cùng lúc với chất liệu mới [^nguyen-thi-nhung-2005, tr. 58].

### Tái hiện
Trở về chất liệu cũ — nguyên tắc tạo hình thức có tác dụng rộng: ở giai đoạn kết nó tạo **cân bằng, ổn định**, làm điểm tựa cho trí nhớ, khẳng định bản chất nội dung; đặc biệt cần khi phần trước là phần trung tâm căng thẳng nhất [^nguyen-thi-nhung-2005, tr. 58].

Giáo trình kết rằng ngoài các nguyên tắc trên còn có những nguyên tắc khác tuỳ trường phái, phong cách; người nghiên cứu phải phân tích khách quan để thấy cái mới của từng tác phẩm [^nguyen-thi-nhung-2005, tr. 58].

## Đọc thêm (trường phái Nga)
- Định nghĩa chủ đề, chất liệu chủ đề theo Mazel; ba kiểu quan hệ chủ đề theo Sposobin: [[chu-de-am-nhac-truong-phai-nga]].
- Năm nguyên tắc của Sposobin, sáu nguyên tắc của Mazel, đồng nhất – tương phản của Asafyev: [[hinh-thuc-nga-nguyen-tac-phat-trien]].

## Câu hỏi và bài tập
1. Tìm hạt nhân chủ đề trong chủ đề 1 chương I một sonata Mozart; chỉ ra trần thuật, phát triển, kết.
2. Phân biệt chủ đề đồng nhất và tương phản; vì sao chủ đề Op. 35 của Chopin là ngoại lệ?
3. Nghe 19 ô đầu Giao hưởng số 4 của Brahms và đánh dấu ba hạt nhân.
4. Cho một ví dụ mỗi loại: tương phản đối chiếu, bổ sung, cùng nguồn.
5. Vì sao nhắc lại thay đổi là nguyên tắc cơ bản của biến tấu?`,
  },
  {
    slug: 'ptam-chuc-nang-tung-phan',
    title: 'Phân tích tác phẩm âm nhạc — IV. Chức năng từng phần của hình thức',
    category: 'analysis',
    aliases: ['chức năng cấu trúc', 'phần mở đầu', 'phần trình bày', 'phần nối tiếp', 'phần giữa', 'phần tái hiện', 'phần kết', 'tái hiện động', 'tái hiện tổng hợp', 'tái hiện giả', 'coda'],
    summary: 'Chương IV giáo trình Nguyễn Thị Nhung: ngoài chức năng lôgic (trần thuật – phát triển – kết), hình thức có sáu chức năng cấu trúc — mở đầu, trình bày, nối tiếp, giữa (phát triển hoặc tương phản), tái hiện (nguyên dạng, thay đổi, động, tổng hợp; tái hiện giả), kết (coda, phân biệt với kết bổ sung). Mỗi chức năng có định nghĩa, dấu hiệu và ví dụ.',
    refs: [NHUNG_REF],
    body: `## Chức năng lôgic và chức năng cấu trúc
Chương III đã nói về **chức năng lôgic** — các giai đoạn trần thuật, phát triển, kết của chủ đề. Hình thức còn có **chức năng cấu trúc**: mở đầu, trình bày, nối tiếp, giữa, tái hiện, kết. Chức năng cấu trúc gắn với chức năng lôgic nhưng rõ ràng, chặt chẽ hơn, và được xác định bằng [^nguyen-thi-nhung-2005, tr. 59]:
- tính thống nhất chủ đề và điệu tính;
- đặc điểm hoà âm (ổn định hay không);
- vị trí trong toàn bộ dàn ý và quan hệ với các phần khác.

**Trình bày, giữa, tái hiện** là các phần chính; **mở đầu, nối tiếp, kết** phụ thuộc vào chúng và có thể vắng ở hình thức nhỏ. Nhưng cũng có khi phần phụ lên hàng đầu: phần kết overture *Coriolan* và phần kết chương I Giao hưởng số 5 của Beethoven khái quát những yếu tố căn bản của cả hình tượng; phần mở đầu chương I Giao hưởng số 1 của Brahms hay Sonata piano số 8 (*Pathétique*) của Beethoven dẫn dắt bước phát triển sau [^nguyen-thi-nhung-2005, tr. 59].

::form Mở_đầu:1 Trình_bày:3 Nối_tiếp:1 Giữa:3 Tái_hiện:3 Kết:1 | Sáu chức năng cấu trúc; ba phần chính ở giữa

## §1. Phần mở đầu
Chuẩn bị cho phần chính; không ổn định, cấu trúc chưa thành hình, hướng về phía trước. Trong ca khúc nghệ thuật, mở đầu thường gồm vài âm điệu nổi bật nhất của bè hát để giọng hát vào tự nhiên (*Serenade* của Brahms, Schubert) [^nguyen-thi-nhung-2005, tr. 60]. Ba loại:

| Loại | Ví dụ |
|---|---|
| Liên quan đến chất liệu chủ đề phía sau | Overture *Egmont*, chương I Giao hưởng số 4 của Beethoven; chương I Giao hưởng số 1 của Brahms; chương I một giao hưởng của Dvořák |
| Chủ đề độc lập, không liên quan phần sau | Mở đầu Sonata piano số 8 và số 26 của Beethoven |
| Chức năng cấu trúc phức tạp, chất liệu độc lập | Giao hưởng số 8 của Schubert; Giao hưởng số 5, 8, 10 của Shostakovich |

[^nguyen-thi-nhung-2005, tr. 60]

## §2. Phần trình bày
Phần chính, chứa **lần trần thuật đầu tiên** của chất liệu chủ đề; cấu trúc rõ, ổn định, thống nhất chủ đề và điệu tính; hạn chế phát triển để chủ đề dễ nhận thức [^nguyen-thi-nhung-2005, tr. 60]. Có trường hợp trình bày vừa trần thuật vừa phát triển: chủ đề hai chương I Sonata Si giáng thứ của Chopin được phát triển đáng kể khi nhắc lại; chủ đề hai chương I Sonata violin của César Franck [^nguyen-thi-nhung-2005, tr. 60 – 61].

- **Trình bày đơn giản**: một chủ đề, một điệu tính (bài 7, 8, 9 *Album cho tuổi trẻ* của Schumann), hoặc kết ở điệu tính gần bậc át (chương II Sonata piano số 3 của Beethoven, 16 ô đầu tới dấu nhắc lại) [^nguyen-thi-nhung-2005, tr. 61].
- **Trình bày phức tạp**: vài chủ đề, mỗi chủ đề một điệu tính. Chương I Giao hưởng số 2 của Brahms: ba chủ đề tương phản — chủ đề I Rê trưởng đồng nội, chủ đề II Pha thăng thứ trữ tình, chủ đề III La trưởng hội hè, hành khúc — điệu tính nối nhau theo quãng 3 nhưng vẫn thống nhất quanh Rê trưởng và quan hệ át [^nguyen-thi-nhung-2005, tr. 61].
- Trong âm nhạc thế kỷ XX tính thống nhất điệu tính lỏng hơn: Gavotte trong *Giao hưởng Cổ điển* của Prokofiev trình bày ở Rê trưởng nhưng rẽ sang Si trưởng, Đô thăng trưởng [^nguyen-thi-nhung-2005, tr. 62].

## §3. Phần nối tiếp
Nối hai chủ đề hay hai phần chính; dẫn hướng phát triển, chuẩn bị điệu tính và chủ đề tiếp theo; **không ổn định** hoà âm, không có cấu trúc hoàn thiện, không độc lập về chủ đề, thường phát triển yếu tố đã có [^nguyen-thi-nhung-2005, tr. 62]. Có thể rất ngắn, chỉ là chuyển giọng (chương I Giao hưởng "Bỏ dở" của Schubert), hoặc phát triển căng thẳng, đi xa — kiểu điển hình của rondo và sonata [^nguyen-thi-nhung-2005, tr. 62].

## §4. Phần giữa
Trung tâm phát triển của hình thức. Hai dạng chính [^nguyen-thi-nhung-2005, tr. 62 – 63]:
- **a. Phát triển** — biến đổi chất liệu phần trình bày; không ổn định hoà âm và cấu trúc. Ở sonata, nó biến đổi sâu chất liệu, dẫn tới nét hình tượng mới, và gọi là **phần phát triển**: xé lẻ chất liệu, phát triển mô phỏng, chất liệu mới hỗn hợp, đi tới điệu tính xa.
- **b. Tương phản** — chất liệu chủ đề mới, tương phản mạnh; thường có cấu trúc và điệu tính ổn định (tương đối, so với các phần bao quanh).
- Có khi **tổng hợp** cả hai: *Serenade* Op. 106 của Brahms — phần giữa vừa có chất liệu mới vừa phát triển chất liệu cũ [^nguyen-thi-nhung-2005, tr. 63].

Lời khuyên của giáo trình: phân tích phần giữa như **một giai đoạn mới về chất lượng**, tìm những yếu tố chất liệu làm nên sự biến đổi ấy [^nguyen-thi-nhung-2005, tr. 63].

## §5. Phần tái hiện
Phần chính, nơi chất liệu chủ đề cơ bản trở lại (sau phần phát triển hoặc sau phần giữa tương phản); hoàn thiện hình thức, tạo thống nhất chủ đề và điệu tính [^nguyen-thi-nhung-2005, tr. 63 – 64]. Ở nhiều mẫu cổ điển, trở về chủ đề **trùng** với trở về điệu tính chính; nhưng có khi tái hiện bắt đầu ở điệu tính phụ rồi mới về chính (chương II Sonata violin – piano của Grieg; chương I Giao hưởng số 5 của Schubert) [^nguyen-thi-nhung-2005, tr. 64].

| Dạng tái hiện | Định nghĩa | Ví dụ |
|---|---|---|
| **Nguyên dạng** | Chất liệu trở lại không đổi | Scherzo Sonata số 2 của Beethoven |
| **Thay đổi (biến tấu)** | Đổi thứ tự chất liệu, hoà âm, giai điệu, cấu trúc, cường độ, âm sắc, cách cấu tạo | Bài số 8 *Album cho tuổi trẻ* của Schumann |
| **Động** | Biến đổi tới mức căng thẳng cao, chất liệu bước vào giai đoạn phát triển mới — không khép mà tiếp tục phát triển | Nocturne Đô thứ của Chopin; Prelude Đô thăng thứ và chương I Concerto piano số 2 của Rachmaninov |
| **Tổng hợp** | Phục hồi cả chất liệu phần giữa, tổng hợp với chất liệu trình bày | *Arabesque* số 2, Nocturne *Fêtes* của Debussy |

[^nguyen-thi-nhung-2005, tr. 64]

**Tái hiện giả**: dấu hiệu tái hiện xuất hiện sớm, trong phần giữa, luôn ở **điệu tính phụ** — một điểm ổn định nhất thời. Ở chương II Sonata piano số 4 của Beethoven, tái hiện giả bù cho phần giữa phát triển chưa đủ khi chất liệu đã cạn [^nguyen-thi-nhung-2005, tr. 65]. Tư liệu thêm: Concerto piano số 2 (chương III) của Brahms, *Poème* cho violin và dàn nhạc của Chausson [^nguyen-thi-nhung-2005, tr. 65].

## §6. Phần kết
Tóm tắt, khái quát: tóm những nét chính của chất liệu, kết thúc phát triển, tạo ổn định hoàn toàn; ở hình thức lớn còn khái quát cả những thời điểm quan trọng của sự phát triển, đem lại giá trị mới cho nội dung [^nguyen-thi-nhung-2005, tr. 65]. Ví dụ: chương I Sonata số 23 (*Appassionata*) — phần kết nhắc lại điệu tính trung tâm của phần phát triển (Rê giáng trưởng) [^nguyen-thi-nhung-2005, tr. 65].

- Ở hình thức lớn, phần kết có thể có nhiều bước, phát triển bổ sung với nét không ổn định; một số phần kết có trung tâm phát triển riêng (chương I Giao hưởng số 1, 3 của Brahms) [^nguyen-thi-nhung-2005, tr. 65 – 66].
- Phần kết có thể dựa trên **âm trì tục bậc chủ** (chương I Giao hưởng số 7 của Bruckner, Prelude số 1 của Chopin) hoặc chứa **chất liệu mới** (Concerto violoncello của Saint-Saëns; chương kết Giao hưởng số 2 của Honegger) [^nguyen-thi-nhung-2005, tr. 66].
- **Coda**: thuật ngữ hiện đại cho phần kết. Kết có thể có ở cuối từng phần chính, nhưng chỉ phần kết khái quát **toàn bộ hình thức** mới gọi là coda [^nguyen-thi-nhung-2005, tr. 66].
- Phân biệt với **kết bổ sung**: hẹp hơn, chỉ là nhắc lại tiến hành kết vừa đạt [^nguyen-thi-nhung-2005, tr. 66].

## Đọc thêm (trường phái Nga)
Sáu chức năng và bốn kiểu trình bày theo Sposobin, chức năng lôgic – cấu trúc theo Mazel, i : m : t của Asafyev: [[hinh-thuc-nga-chuc-nang-kieu-trinh-bay]].

## Câu hỏi và bài tập
1. Chức năng cấu trúc được xác định bằng những dấu hiệu nào?
2. Cho một ví dụ mỗi loại phần mở đầu.
3. So sánh phần giữa phát triển và phần giữa tương phản: hoà âm, cấu trúc, chất liệu.
4. Phân biệt tái hiện động, tái hiện tổng hợp và tái hiện giả.
5. Coda khác kết bổ sung thế nào?`,
  },
  {
    slug: 'ptam-su-phan-chia',
    title: 'Phân tích tác phẩm âm nhạc — V. Sự phân chia: ngắt, cơ cấu, phần; motif, tiết nhạc, câu nhạc; cấu trúc câu giai điệu',
    category: 'analysis',
    aliases: ['sự phân chia trong hình thức', 'ngắt', 'cơ cấu', 'motif Khôrê', 'motif Iambơ', 'tiết nhạc', 'câu nhạc', 'cấu trúc câu giai điệu', 'tính chu kỳ', 'tổng hợp và chia nhỏ'],
    summary: 'Chương V giáo trình Nguyễn Thị Nhung: hai khuynh hướng cấu trúc và quá trình; ngắt, cơ cấu, phần; các dấu hiệu phân chia (nốt dài, dấu lặng, hoà âm, nhắc lại, tiết tấu mới, đổi nhịp độ, điệu tính…, tính chu kỳ); motif (Khôrê, Iambơ; Dactyl, Anapest, Amphibrach), motif phụ, tiết nhạc, câu nhạc; cấu trúc câu giai điệu — tính chu kỳ, tổng hợp, chia nhỏ.',
    refs: [NHUNG_REF],
    body: `## §1. Sự phân chia: ngắt, cơ cấu, phần
Hình thức trình bày cả hệ thống hình tượng, nhưng đồng thời chia thành các bộ phận, như câu trong lời nói và trong thơ; nhờ đó biểu hiện rõ ràng và chi tiết nổi bật. Ở nhạc đàn, thiếu lời giải thích, sự phân chia càng quan trọng [^nguyen-thi-nhung-2005, tr. 66].

Trong hình thức có hai khuynh hướng đối lập mà bổ sung nhau: **cấu trúc** (phân chia, tạo rõ ràng lôgic) và **quá trình** (dòng chảy liên tục của thời gian) [^nguyen-thi-nhung-2005, tr. 66 – 67].

| Khái niệm | Định nghĩa của giáo trình |
|---|---|
| **Ngắt** | Chỗ ngưng nghỉ tạm thời ở ranh giới giữa hai bộ phận [^nguyen-thi-nhung-2005, tr. 67] |
| **Cơ cấu** | Bộ phận của hình thức có mức độc lập và hoàn thiện nhỏ hơn; không thực hiện chức năng lôgic hay cấu trúc độc lập [^nguyen-thi-nhung-2005, tr. 67] |
| **Phần** | Bộ phận lớn hơn, tương đối hoàn thiện, thực hiện một chức năng cấu trúc độc lập (trình bày, giữa, tái hiện…) [^nguyen-thi-nhung-2005, tr. 67] |

### Dấu hiệu phân chia
Giáo trình liệt kê [^nguyen-thi-nhung-2005, tr. 67 – 71]:
- xuất hiện chất liệu chủ đề mới hoặc hoạt động tương phản;
- **nốt có trường độ dài** ở ranh giới;
- **dấu lặng** ở ranh giới — yếu tố phân chia rõ nhất (chương I Sonata piano số 2 của Beethoven);
- **thay đổi hoà âm** — quan trọng nhất khi thiếu dấu lặng và tiết tấu tương phản; ở nhạc nhảy múa còn có các nốt trầm ở âm vực thấp (Prelude số 7 của Chopin);
- hoạ lại chất liệu cũ sau chất liệu mới;
- chuyển động tiết tấu mới (hay gặp trong tác phẩm phức điệu);
- đổi nhịp độ, điệu tính, âm sắc, âm vực, cường độ, cách cấu tạo.

Các dấu hiệu **không ngang nhau**: nốt dài và đổi hoà âm chia rõ hơn đổi cường độ hay cách cấu tạo; thực tế thường nhiều dấu hiệu cùng lúc [^nguyen-thi-nhung-2005, tr. 71]. **Tính chu kỳ** của giai điệu và tiết tấu — nhắc lại các cơ cấu — là nhân tố chính xác nhất cho phân chia rõ ràng [^nguyen-thi-nhung-2005, tr. 71].

## §2. Motif, tiết nhạc, câu nhạc
Chia tới cơ cấu nhỏ nhất mà còn giữ ý nghĩa tư duy độc lập thì đó là chất liệu cấu trúc cơ bản [^nguyen-thi-nhung-2005, tr. 72].

**Motif** là cơ cấu nhỏ nhất có tính hoàn thiện của tư duy, một nhóm âm **bao quanh một phách mạnh**; có nét giai điệu, nhịp điệu hay hoà âm điển hình; là **hạt nhân cơ bản** của chủ đề và dẫn dắt sự phát triển [^nguyen-thi-nhung-2005, tr. 72 – 73] (ví dụ chương I Sonata piano số 6 của Beethoven).
- Giới hạn của motif **không theo vạch nhịp**: có motif chiếm trọn ô nhịp, có motif vắt qua vạch nhịp [^nguyen-thi-nhung-2005, tr. 73].
- Vì âm nhạc luôn hướng tới điểm tựa **phía sau** (như át giải quyết về chủ), các âm ngắn ở phách yếu thuộc về âm dài ở phách mạnh sau chúng, cùng một motif [^nguyen-thi-nhung-2005, tr. 73].

Các loại motif theo quan hệ với phách mạnh [^nguyen-thi-nhung-2005, tr. 73 – 76]:

| Nhịp | Loại | Mô tả | Ví dụ |
|---|---|---|---|
| 2 phách | **Khôrê** | Bắt đầu phách mạnh, kết phách nhẹ — ổn định, cân bằng, như mạch đập | Prelude số 1 của Chopin |
| | **Iambơ** | Từ phách yếu hướng tới phách mạnh — nhấn tính tích cực; hay dùng trong hành khúc, nhảy múa | Chương IV Giao hưởng số 1 của Brahms |
| 3 phách | **Dactyl** (mạnh – nhẹ – nhẹ) | | Chương II Giao hưởng số 45 của Haydn |
| | **Anapest** (nhẹ – nhẹ – mạnh) | | Chương I Sonata piano số 5 của Beethoven |
| | **Amphibrach** (nhẹ – mạnh – nhẹ) | | Chương II Sonata violin – piano số 1 của Grieg |
| 4 phách | Bốn dạng tương ứng | | — |

Chủ đề chính chương I Giao hưởng số 3 của Brahms mở bằng motif Khôrê rồi sang Iambơ, nâng ý nghĩa biểu hiện; chuyển từ dạng motif này sang dạng khác là cách tránh sự đều đặn của nhịp điệu [^nguyen-thi-nhung-2005, tr. 74]. Khi một motif chia được nhỏ hơn nữa, phần nhỏ ấy gọi là **motif phụ** (chương I Sonata Op. 35 của Chopin) [^nguyen-thi-nhung-2005, tr. 77].

**Tiết nhạc** gồm vài motif (ít nhất hai), độc lập và hoàn thiện hơn motif, âm điệu phong phú hơn; có tiết gồm các motif giống nhau, có tiết gồm motif khác nhau, có tiết không chia thành motif được [^nguyen-thi-nhung-2005, tr. 77] (bài số 9 *Album cho tuổi trẻ* của Schumann).

**Câu nhạc** gồm vài tiết (ít nhất hai), biểu hiện tư duy **tương đối hoàn thiện**, tạo điểm chia cắt trong đoạn nhạc. Như ngữ điệu câu nói, câu nhạc có dấu hiệu hoàn thiện là **tiến hành kết câu** [^nguyen-thi-nhung-2005, tr. 78]. Câu một của đoạn nhạc cổ điển điển hình đi từ chủ tới át (chương II Sonata số 7 của Beethoven); câu có thể kết hoàn toàn, không hoàn toàn, hay ở điệu tính phụ [^nguyen-thi-nhung-2005, tr. 78]. Cũng có câu không chia thành tiết [^nguyen-thi-nhung-2005, tr. 79].

## §3. Cấu trúc câu giai điệu
Quan hệ điển hình giữa các motif, tiết trong câu và đoạn — số lượng, sự nhắc lại có chu kỳ, khuôn khổ — gọi là **cấu trúc câu giai điệu** [^nguyen-thi-nhung-2005, tr. 79]. Ba dạng:

**a. Tính chu kỳ** — dạng đơn giản nhất: nhắc lại hai hay nhiều cơ cấu cùng khuôn khổ (Gavotte Op. 32 số 3 của Prokofiev; chương II Tứ tấu Op. 59 số 2 của Beethoven) [^nguyen-thi-nhung-2005, tr. 79 – 80]. Tính chu kỳ tạo rõ ràng và dễ nhớ; nó có thể phức tạp hơn, theo nhóm: ví dụ chương IV Giao hưởng số 5 của Tchaikovsky có bốn tiết x + x + y + y [^nguyen-thi-nhung-2005, tr. 81].

**b. Tổng hợp** — hai yếu tố: yếu tố đầu có chu kỳ (hai cơ cấu bằng nhau), yếu tố sau là một cơ cấu không chia được bằng khuôn khổ ấy; ví dụ 8 ô đầu một chương trong Sonata piano số 1 của Beethoven: 2 + 2 + 4 [^nguyen-thi-nhung-2005, tr. 81]. Tổng hợp tạo sự tập trung, cân bằng, ổn định; phần tổng hợp có thể là chỗ giai điệu chuyển động không ổn định (Fugue Fa thứ, tập I của Bach), hoặc vượt khuôn khổ phần chu kỳ trước nó (Sonata violin – piano Mi giáng trưởng của Mozart) [^nguyen-thi-nhung-2005, tr. 82 – 83].

**c. Chia nhỏ** — ngược lại: một cơ cấu lớn không chia được, tiếp theo là hai hay nhiều cơ cấu nhỏ hơn giống hoặc gần giống nhau (chương III Sonata piano số 9 của Beethoven; Prelude Op. 11 số 2 của Scriabin) [^nguyen-thi-nhung-2005, tr. 83].

Còn gặp trình tự **tổng hợp – chia nhỏ – tổng hợp** (chương I Sonata piano số 1 của Beethoven) [^nguyen-thi-nhung-2005, tr. 84].

::form x:2 x:2 y:4 | Tổng hợp 2 + 2 + 4: hai cơ cấu chu kỳ rồi một cơ cấu gộp

## Đọc thêm (trường phái Nga)
Cezura và dấu hiệu của nó, cấu trúc vuông – không vuông, chồng ghép và kết xen theo Sposobin và Mazel: [[hinh-thuc-nga-phan-doan-cau-truc]]. Motif, câu nhạc theo cách gọi phương Tây: [[motif]], [[cau-nhac]].

## Câu hỏi và bài tập
1. Hai khuynh hướng "cấu trúc" và "quá trình" là gì? Cho ví dụ chỗ chúng giằng co nhau.
2. Xếp các dấu hiệu phân chia theo mức mạnh yếu, có giải thích.
3. Vì sao âm ngắn ở phách yếu thuộc về âm dài sau nó trong cùng motif?
4. Tìm ví dụ motif Khôrê, Iambơ trong một bài hát Việt Nam.
5. Ghi công thức cấu trúc (chu kỳ, tổng hợp, chia nhỏ) cho 8 ô đầu ba bài trong *Album cho tuổi trẻ* của Schumann.`,
  },
]
