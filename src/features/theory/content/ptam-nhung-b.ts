import type { Article } from '../wiki'
import { NHUNG_REF } from './ptam-nhung-a'

/** Phần thứ hai giáo trình Nguyễn Thị Nhung, chương I – V: đoạn nhạc đến ba đoạn phức. Trang in = trang PDF ở tr. 72 – khoảng 120, −1 từ khoảng 127. */
export const ptamNhungB: Article[] = [
  {
    slug: 'ptam-doan-nhac',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, I. Đoạn nhạc',
    category: 'analysis',
    aliases: ['đoạn nhạc', 'đoạn nhạc nhắc lại', 'đoạn nhạc không nhắc lại', 'đoạn nhạc ba câu', 'đoạn nhạc phức tạp', 'đoạn nhạc cân phương', 'phiên khúc biến tấu'],
    summary: 'Chương I Phần thứ hai giáo trình Nguyễn Thị Nhung: đoạn nhạc — hình thức nhỏ nhất trình bày một tư duy âm nhạc hoàn thiện; một điệu tính hay chuyển điệu; các dạng: cấu trúc nhắc lại, không nhắc lại, ba câu, không phân câu, đoạn nhạc phức tạp; trường hợp đặc biệt; hai cách dùng (trình bày, hình thức độc lập); hiện tượng đặc biệt: cân phương – không cân phương, mở rộng, kết bổ sung, nhắc lại đoạn nhạc (Ngàn tượng Phật của Nguyễn Văn Nam).',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa
Đoạn nhạc là hình thức trần thuật một **tư duy âm nhạc hoàn thiện** và phát triển — **hình thức âm nhạc nhỏ nhất**; có mức cao của tính thống nhất chủ đề và điệu tính, một cao trào chung và tính tập trung lớn [^nguyen-thi-nhung-2005, tr. 85]:
- **thống nhất chủ đề**: tính khái quát của giai điệu, tiết tấu, motif, các phương tiện khác, kể cả cách cấu tạo;
- **thống nhất điệu tính**: tiến hành **kết hoàn toàn** cuối đoạn, ở điệu tính ban đầu hoặc điệu tính chuyển tới.

Giáo trình nhận xét đoạn nhạc là sản phẩm của giai đoạn phát triển cao của âm nhạc, khi giai điệu, tiết tấu và quan hệ công năng đã hình thành [^nguyen-thi-nhung-2005, tr. 85]. Mẫu điển hình được dẫn: chương III Septet Op. 20 của Beethoven [^nguyen-thi-nhung-2005, tr. 85].

Về hoà âm, hai loại [^nguyen-thi-nhung-2005, tr. 86]:
- **Đoạn nhạc một điệu tính** — bắt đầu và kết ở cùng điệu tính.
- **Đoạn nhạc chuyển điệu** — kết ở điệu tính khác, thường là điệu tính gần hoặc song song; cũng có khi chuyển xa, đã tính trước cho sự phát triển phía sau (chương II Ngũ tấu Op. 34 của Brahms).

## §2. Các dạng đoạn nhạc
### a. Đoạn nhạc cấu trúc nhắc lại
Hai câu, câu hai nhắc lại câu một; câu một **kết nửa**, câu hai **kết trọn** — tương quan như hỏi và đáp, nhưng giáo trình lưu ý đó không phải quy luật chung [^nguyen-thi-nhung-2005, tr. 87]. Dạng này hợp với nhạc nhảy múa, hành khúc, những thể loại cần chuyển động thống nhất, gắn với tính chu kỳ của giai điệu và tiết tấu [^nguyen-thi-nhung-2005, tr. 87].

Các kiểu kết câu [^nguyen-thi-nhung-2005, tr. 87 – 88]:

| Kiểu | Ví dụ trong giáo trình |
|---|---|
| Câu 1 từ I tới D, câu 2 từ D về I (I – D, D – I) | Phổ biến nhất |
| Câu 1 kết ở điệu tính át | 8 ô đầu chương I Sonata *Ánh trăng* |
| Câu 1 kết ở át, câu 2 bắt đầu ở hạ át (T – D – S – T) | 16 ô đầu chương II Sonata piano số 7 của Beethoven |
| Câu 1 nghiêng về hạ át | Chủ đề 1 chương I Sonata số 21 của Beethoven |
| Câu 1 kết ở hạ át — rất hiếm | Chủ đề 1 chương II Sonata số 17 của Beethoven |
| Hai câu kết giống nhau | — |

::ex ptam-anh-trang-1-9 | Beethoven, Sonata số 14 *Ánh trăng*, chương I, ô 1 – 9 — câu một kết ở điệu tính át (bản khắc từ dữ liệu Humdrum, ấn bản Durand 1915)

Câu hai có thể nhắc nguyên câu một, chỉ đổi phần cuối để kết trọn; nhắc lại có trang sức giai điệu (8 ô đầu chương II Sonata piano số 1 của Beethoven); hoặc nhắc phần đầu câu một rồi phát triển tới cao trào của đoạn (Intermezzo Op. 116 số 2 của Brahms) [^nguyen-thi-nhung-2005, tr. 88].

### b. Đoạn nhạc cấu trúc không nhắc lại
Hai câu khác nhau về nội dung, hoặc câu hai phát triển yếu tố từ câu một [^nguyen-thi-nhung-2005, tr. 90]. So sánh của giáo trình [^nguyen-thi-nhung-2005, tr. 91]:

| | Cấu trúc nhắc lại | Cấu trúc không nhắc lại |
|---|---|---|
| Đặc điểm | Tính chu kỳ — ổn định, cân bằng | Thiếu chu kỳ — liên tục, hướng tới |
| Nhấn mạnh | Tập trung chủ đề | Phong phú âm điệu, motif |

Trường hợp điển hình nhất của dạng không nhắc lại thì không chia thành câu được mà chỉ chia thành tiết (chương III Tứ tấu Op. 18 số 1 của Beethoven) [^nguyen-thi-nhung-2005, tr. 91].

### c. Đoạn nhạc ba câu
Ít gặp hơn; ba câu thường tương phản về giai điệu, tiết tấu và kết: ví dụ câu 1 kết ở át, câu 2 ở hạ át, câu 3 thống nhất lại và kết về chủ (chủ đề 1 chương I Sonata piano số 6 và số 27 của Beethoven) [^nguyen-thi-nhung-2005, tr. 91 – 92]. Ba câu cũng có thể là ba biến thể của một câu (chương IV Sonata Op. 22 của Schumann) hoặc gần như giống nhau [^nguyen-thi-nhung-2005, tr. 92]. Mẫu khác: *Điệu nhảy Na Uy* của Grieg, Prelude số 9 của Chopin, chủ đề chính overture *Prometheus*, *Coriolan* [^nguyen-thi-nhung-2005, tr. 93].

### d. Đoạn nhạc không phân câu
Một dòng giai điệu liền, không có tương phản tiết tấu, chỉ hoàn chỉnh nhờ kết trọn ở cuối — 16 ô đầu một chương Sonata piano số 6 của Beethoven [^nguyen-thi-nhung-2005, tr. 93 – 94].

### e. Đoạn nhạc phức tạp
Gồm **hai đoạn nhạc giống nhau về chủ đề**, mỗi đoạn kết trọn ở một điệu tính khác nhau [^nguyen-thi-nhung-2005, tr. 94]. Ví dụ: 16 ô đầu chương II Giao hưởng số 5, chủ đề II chương I Sonata piano số 18 của Beethoven; 20 ô đầu *Fantaisie* Fa thứ của Chopin; chương III Sonata violin số 2 của Brahms; một etude Rê giáng trưởng của Liszt; chương IV Sonata violin Op. 8 của Grieg; Valse Op. 9a số 14 của Schubert [^nguyen-thi-nhung-2005, tr. 94].

### Trường hợp đặc biệt
- Đoạn nhạc **không kết trọn** ở cuối (chương III Sonata Op. 11 của Schumann) [^nguyen-thi-nhung-2005, tr. 95].
- Đoạn kết **không ngắt**: chỗ chờ kết trọn lại xuất hiện hợp âm mới [^nguyen-thi-nhung-2005, tr. 96].
- Đoạn nhạc **phát triển không ổn định**: hai câu gần cấu trúc nhắc lại nhưng câu hai không kết mà phát triển tiếp — thường gặp trong phần giữa phát triển của các hình thức lớn (ba đoạn phức, rondo, sonata) [^nguyen-thi-nhung-2005, tr. 96].

## §3. Ứng dụng
Hai cách dùng căn bản [^nguyen-thi-nhung-2005, tr. 96 – 97]:
1. **Đoạn nhạc trình bày** — trần thuật chất liệu chủ đề trong một hình thức lớn hơn.
2. **Hình thức độc lập** — không chỉ trần thuật mà phát triển đáng kể, có hệ thống hình tượng riêng; thường câu một trần thuật, câu hai nhắc lại và phát triển tới cao trào, cuối đoạn có khi thành phần kết. Prelude số 17 của Scriabin: hai ô cuối hoạ lại hai ô đầu, có nét tái hiện; Prelude số 1 của Chopin: câu hai phát triển mạnh và thêm 10 ô kết bổ sung trên âm trì tục bậc chủ. Đoạn ba câu dễ chứa đủ ba giai đoạn trần thuật – phát triển – kết (Prelude số 2 của Chopin; Prelude Op. 11 số 5 của Scriabin).

Đoạn nhạc độc lập dùng rộng rãi trong tiểu phẩm nhạc đàn, ca khúc quần chúng, thiếu nhi, nghệ thuật, hợp xướng, và **phần lớn dân ca** [^nguyen-thi-nhung-2005, tr. 97]. Nó cũng là phần chính của **hình thức phiên khúc**; khi các lời đổi giai điệu, hoà âm, tiết tấu, cách cấu tạo chút ít thì gọi là **phiên khúc biến tấu** [^nguyen-thi-nhung-2005, tr. 97]. Và nó làm **chủ đề biến tấu**: 32 biến tấu Đô thứ của Beethoven, *Biến tấu giao hưởng* của Franck, chương III Concerto piano số 3 của Prokofiev, tam tấu *Kể chuyện sông Hồng* của Huy Du, *Quê hương Tây Nguyên* cho piano của Nguyễn Văn Thương [^nguyen-thi-nhung-2005, tr. 97].

## §4. Những hiện tượng đặc biệt
### Cân phương và không cân phương
- **Đoạn nhạc cân phương**: số ô là bội của 2 — 8, 16, 32; ở nhạc cổ điển các bộ phận bằng nhau: câu 4 ô, tiết 2 ô, motif 1 ô. Gắn với nhảy múa, hành khúc; dễ nghe nhưng dễ đều đặn, máy móc [^nguyen-thi-nhung-2005, tr. 98].
- **Đoạn nhạc không cân phương**: các bộ phận không bằng nhau; vượt khỏi cân đối nghiêm khắc tạo khả năng biểu hiện mới — dàn trải, ca xướng, tự do. Giáo trình nêu Bach (ngẫu hứng tự do) và D. Scarlatti đối lập với sự cân đối của các nhà clavecin Pháp [^nguyen-thi-nhung-2005, tr. 98 – 99].

Các cách tạo không cân phương [^nguyen-thi-nhung-2005, tr. 99 – 101]:
- **mở rộng**: chỗ chờ kết hoàn toàn lại là kết ngắt, nên câu dài thêm (*Erinnerung* Op. 68 của Schumann);
- **chồng**: ô cuối cơ cấu trước đồng thời là ô đầu cơ cấu sau;
- **kết bổ sung**: ngắn, hoặc dài và phát triển tới cao trào của đoạn (chủ đề 1 chương I Sonata số 5, chủ đề 1 chương II Sonata số 8 của Beethoven);
- đổi nhịp thường xuyên, hoặc chủ đề từ chất liệu dân gian (*Lễ bái xuân* của Stravinsky). Tính không cân phương phổ biến trong âm nhạc dân gian và âm nhạc chuyên nghiệp Việt Nam [^nguyen-thi-nhung-2005, tr. 101].

### Nhắc lại đoạn nhạc
Đoạn nhạc có thể nhắc lại nguyên dạng hay **có tính biến tấu**, cả khi là phần trình bày của hình thức lớn lẫn khi là hình thức độc lập [^nguyen-thi-nhung-2005, tr. 101]. Ví dụ Việt Nam [^nguyen-thi-nhung-2005, tr. 101 – 103]:
- *Đàn T'rưng*, *Hứng dừa*, *Ngàn tượng Phật* của **Nguyễn Văn Nam**: sơ đồ a – a1 – a2 (*Ngàn tượng Phật* thêm coda). Trong *Ngàn tượng Phật*: đoạn a gồm hai câu không nhắc lại, hai tay đồng âm quãng tám ở âm vực trầm; a1 nhắc motif chính rồi mở rộng trên chồng âm quãng 4, quãng 5 dày dần, cường độ tăng tới cao trào cả bài; a2 viết kiểu phức điệu (canon); coda hoạ lại a1; toàn bài trên điệu thức năm âm.
- Ca khúc: *Nhạc rừng* (Hoàng Việt), *Cho con* (Phạm Trọng Cầu), *Hạt gạo làng ta* (Trần Viết Bính, thơ Trần Đăng Khoa).
- Dân ca nhiều lời thường là đoạn nhạc nhắc lại có biến hoá giai điệu.

## Tư liệu phân tích (theo giáo trình)
Danh mục giáo trình đề nghị [^nguyen-thi-nhung-2005, tr. 103]: các chương I – III một sonata piano của Mozart; chương III Sonata piano số 1 của Beethoven; Prelude số 1 – 7 của Chopin; Prelude Op. 11 của Scriabin (một số bài); *Album cho tuổi trẻ* của Schumann; *Bốn mùa* của Tchaikovsky; *Em là cô gái dệt cho rang* (Chu Minh); *Đàn T'rưng*, *Hứng dừa* (Nguyễn Văn Nam); *Lên đàng* (Lưu Hữu Phước); *Bài ca nữ anh hùng Việt Nam*; *Chưa hết giặc là ta chưa về*.

Trong thư viện: [[phan-tich-prelude-la-truong-op28-so7]] (Prelude số 7), [[phan-tich-prelude-mi-thu-op28-so4]] (Prelude số 4).

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-doan-nhac]] — định nghĩa của Sposobin và Mazel, đoạn nhạc trong dân ca Nga.

## Câu hỏi và bài tập
1. Đoạn nhạc cần những điều kiện nào để là một "tư duy hoàn thiện"?
2. Phân loại 8 ô đầu chương I *Ánh trăng* theo bảng kiểu kết câu.
3. Đoạn nhạc phức tạp khác đoạn nhạc nhắc lại thế nào?
4. Chỉ ra ba giai đoạn trần thuật – phát triển – kết trong Prelude số 1 của Chopin.
5. Vẽ sơ đồ *Ngàn tượng Phật* và nêu cái gì đổi ở mỗi lần nhắc.`,
  },
  {
    slug: 'ptam-hai-doan-don',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, II. Hình thức hai đoạn đơn',
    category: 'analysis',
    aliases: ['hai đoạn đơn', 'hai đoạn đơn tái hiện', 'hai đoạn đơn không tái hiện', 'hai đoạn đơn phát triển', 'hai đoạn đơn tương phản'],
    summary: 'Chương II Phần thứ hai giáo trình Nguyễn Thị Nhung: hình thức hai đoạn đơn — hai phần, mỗi phần không vượt quá một đoạn nhạc; gốc từ phiên khúc và điệp khúc; các dạng: tái hiện (phần hai = giữa + câu tái hiện), không tái hiện (phát triển, tương phản); phần phụ, nhắc lại từng phần; ứng dụng. Ví dụ Beethoven, Mendelssohn và nhiều ca khúc, tác phẩm Việt Nam (Vĩnh Cát, Huy Du, Văn Cao).',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa. Sơ đồ chung
Hình thức hai đoạn đơn gồm **hai phần**, mỗi phần **không vượt quá phạm vi một đoạn nhạc**: A (a) – B (b) [^nguyen-thi-nhung-2005, tr. 104].

Giáo trình cho rằng hình thức này bắt nguồn từ những bài dân ca có **phiên khúc** (*couplet*) và **điệp khúc** (*refrain*): chủ đề ở phần một; điệp khúc mang nội dung mới trong một dàn ý mới [^nguyen-thi-nhung-2005, tr. 105].

## §2. Chức năng từng phần
- **Phần một**: trình bày, trần thuật chủ đề; thường là một đoạn nhạc, có khi là đoạn nhạc nhắc lại [^nguyen-thi-nhung-2005, tr. 105].
- **Phần hai**: chức năng phức tạp hơn; tuỳ cấu trúc phần này mà hình thức chia thành **hai đoạn đơn tái hiện** và **hai đoạn đơn không tái hiện** [^nguyen-thi-nhung-2005, tr. 106].

## §3. Các dạng cấu trúc
### a. Hai đoạn đơn tái hiện
Phần hai làm hai việc: **nửa đầu là phần giữa** — tương phản nhất định, bằng phát triển chất liệu phần một hoặc bằng chủ đề mới; **nửa sau tái hiện** chất liệu phần một trong khuôn khổ một câu [^nguyen-thi-nhung-2005, tr. 106].

::form Câu_1:4 Câu_2:4 Giữa:4 Tái_hiện:4 | Hai đoạn đơn tái hiện: đoạn trình bày (hai câu) – phần giữa – câu tái hiện

Hình thức này chứa đủ ba giai đoạn lôgic **trần thuật – phát triển – kết**; nếu phần giữa có chủ đề mới thì tạo được những hình tượng tương phản không quá phức tạp [^nguyen-thi-nhung-2005, tr. 106] (ví dụ trong giáo trình lấy từ Sonata piano số 2 của Beethoven).

**Phân tích mẫu: *Hạnh phúc tuổi xuân* cho piano của Vĩnh Cát** (Sol thứ, chậm rãi, trữ tình) [^nguyen-thi-nhung-2005, tr. 108]:

| Phần | Cấu trúc | Số ô | Điệu tính |
|---|---|---|---|
| Mở đầu | — | 2 | Sol thứ |
| **a** (trình bày) | Câu 1 | 7 | Sol thứ |
| | Câu 2 — hoạ lại câu 1 | 7 | Đô thứ |
| **b** — phần giữa | Câu 1: giai điệu sang tay trái, chuyển giọng liên tục | 7 | Rê thứ, Fa trưởng, Đô trưởng… |
| | Nối | 2 | — |
| — phần tái hiện | Câu 2: tái hiện câu 1 của đoạn trình bày | 7 | Sol thứ |
| Kết | — | 2 | Sol thứ |

Ví dụ khác: *Niềm hy vọng* cho piano (La Thăng); ca khúc *Hà Nội mùa xuân* (Văn Ký), *Du kích ca* (Đỗ Nhuận), *Em là bông hồng nhỏ* (Trịnh Công Sơn), *Làng tôi* (Văn Cao) [^nguyen-thi-nhung-2005, tr. 108].

### b. Hai đoạn đơn không tái hiện
Hai dạng [^nguyen-thi-nhung-2005, tr. 108 – 110]:
- **Hai đoạn đơn phát triển**: phần hai phát triển chất liệu phần một, tiếp tục chức năng phát triển. Ví dụ: chủ đề chương III Sonata piano số 30 và chủ đề chương II Sonata số 23 của Beethoven; Prelude số 2 cho piano của Minh Khang — khai thác chồng âm quãng 4 làm yếu tố thống nhất hai phần. Vì thống nhất chất liệu nên đôi khi phần hai dài hơn phần một (Trio chương II Sonata số 14 của Beethoven). Nhiều ca khúc Việt Nam có dạng này: *Nhớ bạn* (Trọng Bằng), *Thuyền và biển* (Phan Huỳnh Điểu), *Hoa sữa* (Hồng Đăng), *Mùa xuân bên cửa sổ* (Xuân Hồng), *Tiến quân ca* (Văn Cao).
- **Hai đoạn đơn tương phản**: hai phần khác nhau về chủ đề; phần một trình bày, phần hai vừa tạo tương phản vừa làm chức năng kết. Tương phản qua giai điệu, tiết tấu, hoà âm… nhưng vẫn thống nhất ở vài chi tiết, rõ nhất là **trở về điệu tính chính** cuối câu hai của phần hai (chương II Sonata violin – piano Op. 12 số 1 của Beethoven). Ca khúc: *Anh vẫn hành quân*, *Cùng anh tiến quân trên đường dài* (Huy Du), *Lối nhỏ vào đời* (Phạm Minh Tuấn), *Đi trong hương tràm* (Thuận Yến), *Tiếng chuông và ngọn cờ* (Phạm Tuyên) [^nguyen-thi-nhung-2005, tr. 113].

## §4. Các phần phụ, sự nhắc lại từng phần
Ngoài hai phần chính có thể có **mở đầu, nối tiếp, kết**, liên kết các phần và hoàn chỉnh hình tượng — thường gặp trong khí nhạc và ca khúc nghệ thuật (*Bài ca không lời* số 12 của Mendelssohn) [^nguyen-thi-nhung-2005, tr. 113].

Các phần có thể **nhắc lại từng phần** (‖: a :‖: b :‖), nguyên dạng hoặc thay đổi — Habanera trong *Rapsodie espagnole* của Ravel đổi phối khí, cường độ, chi tiết hợp âm ở mỗi lần nhắc. Trong thanh nhạc, các lời biến hoá theo lời ca (liên khúc *Cô chủ cối xay xinh đẹp*, *Winterreise* của Schubert; các tập liên ca của Brahms) [^nguyen-thi-nhung-2005, tr. 113].

Ví dụ Việt Nam: *Đường ra mặt trận* (Huy Du, thơ Chính Hữu) — hai đoạn đơn nhắc lại nhiều lần, nguyên dạng hay biến đổi, xen nét nhạc dạo: dạo – a – dạo – b – dạo – b1 – dạo – a1 – dạo – b2 – dạo – b – kết [^nguyen-thi-nhung-2005, tr. 113 – 114].

## §5. Ứng dụng
- Làm **chủ đề** cho hình thức lớn hơn: chủ đề rondo, biến tấu, các chủ đề trình bày sonata, một phần của ba đoạn phức [^nguyen-thi-nhung-2005, tr. 114].
- Làm **tác phẩm độc lập**: prelude, bài ca không lời, romance khí nhạc và thanh nhạc, ca khúc quần chúng, thiếu nhi, hợp xướng [^nguyen-thi-nhung-2005, tr. 114].

## Tư liệu phân tích (theo giáo trình)
Giáo trình đề nghị phân tích, chú ý chức năng phần hai [^nguyen-thi-nhung-2005, tr. 114 – 115]: Beethoven — Sonata piano số 10 (chương II, III, phần đầu), số 14 (chương II, Trio), số 12 (chương I, chủ đề biến tấu), số 23 (chương II, chủ đề biến tấu); Mendelssohn — *Bài ca không lời* số 12, 16, 37, 44; Chopin — Etude Op. 25 số 1 La giáng trưởng; Scriabin — Prelude Op. 11 số 10 và 13; Nguyễn Văn Thương — *Quê hương Tây Nguyên* (biến tấu II, VI); La Thăng — *Niềm hy vọng*; Minh Khang — Prelude số 2; các ca khúc *Hà Nội mùa xuân*, *Thuyền và biển*, *Mùa xuân bên cửa sổ*, *Hoa sữa*, *Nhớ bạn*, *Đi trong hương tràm*, *Lối nhỏ vào đời*.

Trong thư viện: [[phan-tich-minuet-sol-truong]] (hai đoạn có nhắc lại), [[phan-tich-nocturne-op9-so2]], [[phan-tich-bien-tau-op26]] (chủ đề biến tấu Sonata số 12).

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-hinh-thuc-don]] — hai đoạn có và không có tái hiện theo Sposobin, Mazel; lịch sử và phạm vi dùng.

## Câu hỏi và bài tập
1. Vì sao hai đoạn đơn tái hiện chứa đủ ba giai đoạn lôgic?
2. Trong *Hạnh phúc tuổi xuân*, phần giữa tạo tương phản bằng những phương tiện nào?
3. Phân biệt hai đoạn đơn phát triển và tương phản; cho một ca khúc Việt Nam mỗi loại.
4. Vẽ sơ đồ *Tiến quân ca* và xác định dạng hai đoạn đơn.`,
  },
  {
    slug: 'ptam-ba-doan-don',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, III. Hình thức ba đoạn đơn',
    category: 'analysis',
    aliases: ['ba đoạn đơn', 'ba đoạn đơn phát triển', 'ba đoạn đơn tương phản', 'hình thức aba'],
    summary: 'Chương III Phần thứ hai giáo trình Nguyễn Thị Nhung: ba đoạn đơn — ba phần, mỗi phần không vượt quá một đoạn nhạc, có chức năng độc lập (trình bày, giữa, tái hiện); sinh ra từ hai đoạn đơn tái hiện; dạng phát triển và tương phản; tái hiện nguyên dạng, thay đổi, động; phần phụ, nhắc lại từng phần, ứng dụng. Ví dụ Beethoven, Chopin, Liszt và các tác phẩm Việt Nam (Dòng suối vắng của Hoàng Cương, Phấn trắng của Vĩnh Cát, Dòng nước trong của Trần Tất Toại).',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa. Sơ đồ chung
Hình thức ba đoạn đơn gồm **ba phần**, mỗi phần **không vượt quá một đoạn nhạc** và có **chức năng độc lập**: trình bày – giữa – tái hiện [^nguyen-thi-nhung-2005, tr. 116] (ví dụ: Prelude Op. 15 số 4 của Scriabin).

::form a:8 b:8 a:8 | Ba đoạn đơn: mỗi phần là một đoạn nhạc

**Nguồn gốc lôgic**: ba đoạn đơn **sinh ra từ hai đoạn đơn tái hiện**. Khi nửa đầu phần hai (phần giữa) mở rộng thành một đoạn nhạc độc lập, và quan trọng hơn, khi câu tái hiện cũng mở rộng thành một đoạn nhạc độc lập, thì hai đoạn đơn tái hiện trở thành ba đoạn đơn [^nguyen-thi-nhung-2005, tr. 117]. Vì vậy khi phân tích, nếu khuôn khổ các phần không cân nhau, cần xem phần tái hiện có hoạ lại chất liệu chủ đề **và** có thành một đoạn nhạc hoàn chỉnh hay không [^nguyen-thi-nhung-2005, tr. 117].

## §2. Chức năng từng phần. Các dạng cấu trúc
**Phần thứ nhất (a)** là đoạn nhạc trình bày; thường kết ở điệu tính chính, hoặc chuyển sang điệu tính át hay bậc III [^nguyen-thi-nhung-2005, tr. 118].

**Phần giữa (b)** quyết định hai dạng cơ bản [^nguyen-thi-nhung-2005, tr. 118]:

### Ba đoạn đơn phát triển
Phần giữa **phát triển chất liệu** phần một. Dạng này dùng rộng rãi trong nhạc đàn và thanh nhạc, nổi bật bởi tập trung chủ đề và cân bằng cấu trúc; có khi phần giữa phát triển căng thẳng tới mức đổi cả đặc điểm hình tượng — Etude Op. 10 số 3, 4 của Chopin và etude Rê giáng trưởng của Liszt có khuôn khổ lớn vì vậy [^nguyen-thi-nhung-2005, tr. 118]. Phần giữa phát triển điển hình không ổn định về cấu trúc và điệu tính; phương pháp cổ điển phổ biến nhất là **chia cắt chất liệu** kết hợp **chuyển điệu** [^nguyen-thi-nhung-2005, tr. 118 – 119].

Ví dụ phân tích: Scherzo chương III Sonata piano số 3 của Beethoven — phần giữa xé lẻ chất liệu, bè dưới đi xuống khớp với motif đầu ở bè trên đi lên; hai yếu tố mô phỏng ở các âm vực khác nhau làm tăng căng thẳng và nhấn tính phức điệu sẵn có của chủ đề; ở ô 29, 31, 33 motif chính được tô màu điệu thức Phrygian [^nguyen-thi-nhung-2005, tr. 122].

::ex ptam-sonata03-3-scherzo | Beethoven, Sonata số 3 Op. 2 số 3, chương III (Scherzo), ô 1 – 16 — phần một; phần giữa giáo trình phân tích theo ngay sau (bản khắc từ dữ liệu Humdrum, ấn bản Durand 1915)

Tác phẩm Việt Nam [^nguyen-thi-nhung-2005, tr. 122 – 124]:
- Nhạc đàn: *Hoa thơm bướm lượn* (Phạm Văn Chừng), *Câu chuyện nhỏ* (Hoàng Đạm), một bài trong tuyển tập piano của Nguyễn Văn Thương, *Trò chơi trẻ em* (Nguyễn Văn Nam), *Dòng suối vắng* (Hoàng Cương).
- ***Dòng suối vắng*** cho piano của Hoàng Cương, dựa ý bài hát *Suối mơ* của Văn Cao: phần a và a′ có hình móc nhanh ở tay phải như tiếng suối, giai điệu nốt trắng chấm dôi nổi lên; ở a′ đổi nhịp nên đổi trường độ nhưng cao độ gần như giữ nguyên; phần b phát triển chủ đề, luân chuyển nhịp 2/4 và 3/4.
- Ca khúc: *Phấn trắng* (Vĩnh Cát), *Bài ca chị Võ Thị Sáu* (Nguyễn Đức Toàn), *Em nghĩ sao không ra* (aria cô Sao), *Con kênh xanh xanh* (Ngô Huỳnh).
- ***Phấn trắng*** của Vĩnh Cát — bài ca ngợi người thầy, Rê thứ: đoạn a hai câu, câu hai nhắc câu một có thay đổi cao độ rồi kết trọn; đoạn b phát triển chất liệu đoạn a, sôi động, kịch tính, tạo **cao trào tái hiện động**; đoạn tái hiện câu một vang ở âm vực cao nhất, câu hai đi xuống từng bậc; coda nhắc motif và kết trọn ở Rê thứ [^nguyen-thi-nhung-2005, tr. 123 – 124].

### Ba đoạn đơn tương phản
Phần giữa có **chất liệu chủ đề mới**, đôi khi chính là một đoạn nhạc [^nguyen-thi-nhung-2005, tr. 124].

Ví dụ phân tích: ***Dòng nước trong*** cho piano của Trần Tất Toại — ca ngợi thiên nhiên, sơ đồ a – b – a′. Phần a và a′ là những nét chạy móc kép, móc ba trên **điệu thức năm âm Si giáng**; phần giữa sang **năm âm Fa** (f – g – a – c – d), là đoạn nhạc cấu trúc nhắc lại, nhưng câu hai phát triển tới cao trào và dài gấp đôi câu một để dẫn vào tái hiện [^nguyen-thi-nhung-2005, tr. 125 – 126].

Tác phẩm tham khảo khác: phần A chương II Sonata piano số 7 của Beethoven; bài số 6 *Album cho tuổi trẻ* của Schumann; Mazurka Op. 33 của Chopin; *Quê hương* cho violin và piano (Lưu Cầu); ca khúc *Đường chúng ta đi* (Huy Du), *Tuổi đời mênh mông* (Trịnh Công Sơn), *Con kênh xanh xanh* [^nguyen-thi-nhung-2005, tr. 126].

Phần giữa cũng có thể **tổng hợp** phát triển chất liệu cũ với chất liệu mới — Etude Op. 10 số 9 của Chopin, phần đầu Scherzo Sonata số 2 của Beethoven [^nguyen-thi-nhung-2005, tr. 126].

**Phần tái hiện** [^nguyen-thi-nhung-2005, tr. 127]:
- hoạ lại phần một **không đổi**;
- hoạ lại **có thay đổi** cách cấu tạo (bài số 8 *Album cho tuổi trẻ*);
- đổi dàn ý hoà âm, tạo **tái hiện động** — chương II Sonata piano số 7 của Beethoven: phần giữa ngắn nhưng chất liệu mới nổi bật; tái hiện chuyển từ ca xướng chủ điệu sang phức điệu mô phỏng và tiếp tục phát triển, nên không làm chức năng kết mà thành giai đoạn tột cùng của phát triển; một phần bổ sung sau đó mới tạo cân bằng [^nguyen-thi-nhung-2005, tr. 127].

Trong âm nhạc mới Việt Nam còn gặp dạng **a – b – b** (không trở lại a), như *Chào sông Mã anh hùng*, *Bắc cầu*, *Bác vẫn bên ta*, *Chở pháo sang sông*, *Bóng cây Kơ-nia*, và *Trống và lửa* cho piano (Thuỵ Loan) [^nguyen-thi-nhung-2005, tr. 130].

## §3. Các phần phụ, sự nhắc lại từng phần
- **Phần phụ**: mở đầu, nối tiếp, kết — xem *Bài ca không lời* số 20, 21, 27 của Mendelssohn; chương II Concerto violin của Tchaikovsky [^nguyen-thi-nhung-2005, tr. 130].
- **Nhắc lại từng phần**: thường phần trình bày nhắc lại, rồi phần giữa và tái hiện nhắc lại liền nhau: ‖: a :‖: b a :‖. Điều này không ngẫu nhiên — nó phản ánh nguồn gốc ba đoạn đơn từ hai đoạn đơn tái hiện. Có khi chỉ nhắc b a; ít gặp hơn là mỗi phần nhắc riêng [^nguyen-thi-nhung-2005, tr. 130]. Lần nhắc có thể nguyên dạng hay thay đổi [^nguyen-thi-nhung-2005, tr. 131].

## §4. Ứng dụng
Dùng rộng rãi cho romance, nocturne, prelude, bài ca không lời, etude; chương hai (chương chậm, trữ tình) của nhiều concerto: Concerto violin của Tchaikovsky và của Brahms, Concerto piano số 2 của Rachmaninov, một concerto piano Sol trưởng (giáo trình ghi "G-dur"). Ba đoạn đơn còn làm một phần của ba đoạn phức, chủ đề rondo, chủ đề sonata [^nguyen-thi-nhung-2005, tr. 131].

## Tư liệu phân tích (theo giáo trình)
Chú ý nội dung và sự phát triển của phần giữa và tái hiện, phong cách và thể loại [^nguyen-thi-nhung-2005, tr. 132]: Beethoven — Sonata piano số 12 (chương III, tới Trio), số 4 (chương III, tới Trio), số 15 (chương III, tới Trio); Scriabin — Prelude Op. 11 số 6; Schumann — *Album cho tuổi trẻ* số 3, 4, 8, 9, 14, 15, 20; Mendelssohn — *Bài ca không lời* số 3, 20, 21, 27; Phạm Văn Chừng — *Hoa thơm bướm lượn*; Lưu Cầu — *Quê hương*; Chu Minh — *Bài ca không lời*; Thuỵ Loan — *Trống và lửa*; Phan Huỳnh Điểu — *Bóng cây Kơ-nia*; Huy Du — *Đường chúng ta đi*; Trịnh Công Sơn — *Tuổi đời mênh mông*.

Trong thư viện: [[phan-tich-traumerei]], [[phan-tich-wilder-reiter]] (bài số 8 *Album cho tuổi trẻ*), [[phan-tich-clair-de-lune]]; minuet và trio của Op. 2 số 1: [[phan-tich-menuetto-op2-so1]].

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-hinh-thuc-don]] — tiêu chí phân biệt ba đoạn với hai đoạn có tái hiện (Mazel), tái hiện giả, ba đoạn kép.

## Câu hỏi và bài tập
1. Giải thích ba đoạn đơn sinh ra từ hai đoạn đơn tái hiện như thế nào.
2. Phân biệt ba đoạn đơn phát triển và tương phản; dạng nào hợp với hình tượng nào?
3. Vì sao tái hiện động ở chương II Sonata số 7 của Beethoven không làm chức năng kết?
4. Phân tích *Dòng nước trong*: điệu thức năm âm của từng phần.`,
  },
  {
    slug: 'ptam-hai-doan-phuc',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, IV. Hình thức hai đoạn phức',
    category: 'analysis',
    aliases: ['hai đoạn phức'],
    summary: 'Chương IV Phần thứ hai giáo trình Nguyễn Thị Nhung: hai đoạn phức — hai phần, mỗi phần là hai hay ba đoạn đơn; nguồn gốc từ rhapsodie, ballade, fantaisie, ouverture Pháp; hai dạng: đối chiếu tương phản mạnh về nhịp độ (aria opera, Overture Romeo và Juliet của Prokofiev) và liên kết chặt giữa hai phần (Andante Sonata số 15 của Mozart, Những cây thông La Mã của Respighi).',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa. Sơ đồ chung
Hình thức hai đoạn phức gồm **hai phần**, mỗi phần là **hai đoạn đơn hoặc ba đoạn đơn** [^nguyen-thi-nhung-2005, tr. 133].

::form A_(aba):3 B_(cdc):3 | Hai đoạn phức: mỗi phần là một hình thức đơn

Nguồn gốc theo giáo trình: thể loại rhapsodie, ballade, fantaisie và những bài hát có hai phần tương phản, khác nhau cả về nhịp độ; quan hệ tương tự có trong **ouverture kiểu Pháp** (phần chậm – phần nhanh), như ouverture oratorio *Messiah* của Handel [^nguyen-thi-nhung-2005, tr. 133]. Hình thức này hay dùng cho **thanh nhạc**: trong opera, aria của nhân vật cần hai phần tương phản để thể hiện hai mặt của một hình tượng [^nguyen-thi-nhung-2005, tr. 133].

## §2. Cấu trúc
Hai dạng chính [^nguyen-thi-nhung-2005, tr. 133 – 134]:

**Dạng một — đối chiếu tương phản mạnh**, khác biệt rõ về nhịp độ. Phổ biến trong opera, thể hiện các mặt cảm xúc của nhân vật: một duo trong *Don Giovanni* của Mozart; arioso của Liza trong *Con đầm pích* của Tchaikovsky. Trong nhạc đàn ít gặp hơn; mẫu rõ nhất là overture ballet *Romeo và Juliet* của Prokofiev — tương phản rất mạnh về nhịp độ, nhưng dàn ý điệu tính cân xứng (Đô trưởng – Si trưởng … – Đô trưởng) và một phần kết ngắn lấy chất liệu phần một làm yếu tố thống nhất.

**Dạng hai — liên kết chặt giữa hai phần**, hay gặp ở những bản nhạc có tiết tấu "motor"; mối liên hệ có khi dẫn tới tính tái hiện trong phần hai — chương Andante Sonata piano số 15 của Mozart. Mẫu điển hình nhất trong nhạc đàn: phần thứ nhất thơ giao hưởng *Những cây thông La Mã* của Respighi, *Những cây thông ở biệt thự Borghese* — dàn ý điệu tính sinh động; thống nhất nhờ màu sắc, thể loại dân tộc của chất liệu.

## Tư liệu phân tích (theo giáo trình)
Schumann, *Carnaval* Op. 9 (số đầu); Bartók, *Âm nhạc cho dây, bộ gõ và celesta*, chương II [^nguyen-thi-nhung-2005, tr. 134].

## Đọc thêm (trường phái Nga)
Mục "Hai đoạn phức" trong [[hinh-thuc-nga-ba-phan-phuc]].

## Câu hỏi
1. Vì sao hai đoạn phức hợp với aria opera?
2. Ở overture *Romeo và Juliet* của Prokofiev, yếu tố nào giữ thống nhất khi hai phần tương phản mạnh?`,
  },
  {
    slug: 'ptam-ba-doan-phuc',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, V. Hình thức ba đoạn phức',
    category: 'analysis',
    aliases: ['ba đoạn phức', 'trio', 'đoạn chen', 'episode', 'ba – năm đoạn phức', 'hình thức giữa ba đoạn đơn và ba đoạn phức', 'da capo'],
    summary: 'Chương V Phần thứ hai giáo trình Nguyễn Thị Nhung: ba đoạn phức — ba phần tái hiện, phần ngoài là hai/ba đoạn đơn, phần giữa tương phản (trio hoặc đoạn chen); nguồn gốc từ tổ khúc cổ và aria da capo, hoàn thiện ở các nhà cổ điển Vienna; cấu trúc từng phần, các dạng tái hiện, phần phụ và coda tổng hợp; thay đổi ở thời lãng mạn và cận đại; ba – năm đoạn phức; hình thức giữa ba đoạn đơn và ba đoạn phức; ứng dụng. Ví dụ Việt Nam: Miền Nam quê hương ta ơi (Huy Du).',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa. Sơ đồ chung
Hình thức ba đoạn phức là **hình thức ba phần có tái hiện**: hai phần đầu và cuối cùng chất liệu, mỗi phần là **hai đoạn đơn hoặc ba đoạn đơn**; phần giữa **tương phản**, thường là hai hay ba đoạn đơn, đôi khi là một đoạn nhạc hoặc một **đoạn phát triển tự do, không ổn định (episode)** [^nguyen-thi-nhung-2005, tr. 135].

| Phần thứ nhất (A) | Phần giữa (B) | Phần tái hiện (A) |
|---|---|---|
| Hai đoạn đơn / ba đoạn đơn | Hai đoạn đơn / ba đoạn đơn / đoạn nhạc / phát triển tự do | Hai đoạn đơn / ba đoạn đơn |

Theo sơ đồ, ba đoạn phức gần ba đoạn đơn tương phản; mở rộng tương phản và phức tạp hoá các phần là hiện tượng của một giai đoạn lịch sử muộn hơn [^nguyen-thi-nhung-2005, tr. 135].

**Lịch sử.** Hình mẫu sớm nhất ở **tổ khúc cổ**: hai điệu nhảy liền kề được gộp lại và điệu thứ nhất trở lại — Gavotte I – Gavotte II – Gavotte I, Menuet I – Menuet II – Menuet I (tổ khúc Anh Sol thứ và Rê thứ của Bach); và trong opera là **aria da capo** [^nguyen-thi-nhung-2005, tr. 135]. Ở những mẫu sớm ấy, quan hệ giữa các phần còn bề ngoài; phải đợi các **nhà cổ điển Vienna** hình thức mới hoàn thiện [^nguyen-thi-nhung-2005, tr. 136] (ví dụ: chương III Sonata piano số 9 của Beethoven).[^nguyen-thi-nhung-2005, tr. 136] (thí dụ 90 của giáo trình: Allegretto Mi thứ, Sonata piano số 9 của Beethoven — giáo trình ghi "chương III", thực ra là chương II của Op. 14 số 1).

::ex ptam-sonata09-2-menuetto | Beethoven, Sonata số 9 Op. 14 số 1, chương II (Allegretto), ô 1 – 16 (giáo trình, thí dụ 90; bản khắc từ dữ liệu Humdrum, ấn bản Durand 1915)

## §2. Cấu trúc từng phần
**Phần thứ nhất** thống nhất chủ đề, điển hình là hai hay ba đoạn đơn phát triển; kết hoàn toàn ở điệu tính chính, tạo ngưng nghỉ sâu trước phần giữa [^nguyen-thi-nhung-2005, tr. 140]. Đôi khi là ba đoạn đơn tương phản (chương II Sonata piano số 7 của Beethoven; Nocturne *Fêtes* của Debussy; chương II một giao hưởng của Shostakovich); có khi kết ở điệu tính phụ (*Fêtes*) [^nguyen-thi-nhung-2005, tr. 140].

**Phần giữa** — nguyên tắc căn bản là **đối chiếu tương phản**, bằng nhiều cách: đổi cách cấu tạo, âm vực, giai điệu mới… Ví dụ của giáo trình [^nguyen-thi-nhung-2005, tr. 140 – 141]:
- tương phản giữa sinh động, tích cực và một tính chất khác — Valse-scherzo Op. 7 của Tchaikovsky;
- giữa hành khúc tang lễ bi thương và chất êm dịu, quên lãng — hành khúc tang lễ Sonata Op. 35 của Chopin;
- tác phẩm cho dàn nhạc thì phần giữa luôn đổi **âm sắc** (chương II Giao hưởng số 7 của Shostakovich).

Ở các mẫu cổ điển muộn, phần giữa thường sang điệu tính phụ hướng **hạ át** (chương III Sonata số 15 của Beethoven); có thể ghi *Maggiore*, *Minore*, hoặc trong tác phẩm cổ hơn *Alternativo* [^nguyen-thi-nhung-2005, tr. 141]. Hai dạng cơ bản:

| Dạng | Đặc điểm | Ví dụ |
|---|---|---|
| **Trio** | Có cấu trúc thành hình, điệu tính ổn định, chất liệu mới tương phản; hai đoạn đơn, ba đoạn đơn (chương III Sonata số 2 của Beethoven) hoặc đoạn nhạc (chương III Sonata số 7) [^nguyen-thi-nhung-2005, tr. 141 – 142] | Tên "trio" còn lại từ các mẫu cổ, khi phần giữa do ba nhạc cụ hơi diễn (hai oboe và bassoon); trio ba kèn cor trong chương III Giao hưởng số 3 của Beethoven; ở thế kỷ XX: chương II Giao hưởng số 5 của Shostakovich, của Prokofiev [^nguyen-thi-nhung-2005, tr. 142] |
| **Đoạn chen (episode)** | Không thành cấu trúc, không ổn định điệu tính, dù dùng chất liệu mới hay phát triển chất liệu cũ; phát triển phong phú, nhiều khi mạnh mẽ [^nguyen-thi-nhung-2005, tr. 142] | Chương II Sonata piano số 4 của Beethoven: chủ đề mới 4 ô rồi phát triển căng thẳng từ La giáng trưởng (hạ át của Đô trưởng) qua Fa thứ, Rê giáng trưởng, Mi giáng thứ, rồi trở về át của Đô trưởng — toàn bộ ở phía hạ át, nhấn tính trữ tình suy tư [^nguyen-thi-nhung-2005, tr. 142] |

**Phần tái hiện.** Ở các mẫu cổ điển, tái hiện theo ngay sau phần giữa không cần chuẩn bị (nhiều menuetto của Haydn, Mozart), còn scherzo của Beethoven thường có **nối tiếp** dẫn về tái hiện — đúng quy luật "bước nhảy và sự điền đầy" (trio là bước nhảy, phần nối là điền đầy; chương III Sonata số 3 của Beethoven) [^nguyen-thi-nhung-2005, tr. 142 – 143]. Các dạng tái hiện [^nguyen-thi-nhung-2005, tr. 143 – 144]:
- **Nguyên dạng** — chỉ cần ghi *Da Capo al Fine*.
- **Thay đổi đơn giản nhất**: bỏ các dấu nhắc lại trong từng phần, hoặc bỏ bớt đoạn.
- **Thay đổi biến tấu**: giữ cấu trúc, biến tấu chất liệu.
- **Thay đổi phát triển**: thường ở đoạn cuối tái hiện, có khi từ đầu; mở rộng khuôn khổ, đổi hoà âm, cách cấu tạo. Ví dụ: tái hiện hành khúc tang lễ (chương II) Giao hưởng số 3 của Beethoven được mở rộng bằng một đoạn chen phát triển phức điệu giữa a và a′; Nocturne Đô thứ của Chopin; Nocturne số 18 Mi trưởng của Chopin — tái hiện chỉ hoạ lại một câu nhưng phát triển thành 13 ô.
- **Tổng hợp** — *Fêtes* của Debussy.

**Phần phụ** [^nguyen-thi-nhung-2005, tr. 144 – 145]: mở đầu (ngắn hay dài; chủ đề tương phản hoặc liên quan chủ đề chính), nối tiếp, và **coda** — đặc biệt quan trọng. **Coda tổng hợp** gộp nét cơ bản của chất liệu đoạn chen và phần một ở điệu tính chính (chương II Sonata số 4 của Beethoven) — một con đường thâm nhập của hình thức sonata; chương II Sonata số 15 của Beethoven có coda ngắn hoạ chất liệu episode ở điệu tính chính; chương III Giao hưởng số 3 của Brahms.

**Phân tích mẫu: *Miền Nam quê hương ta ơi* cho violin và piano của Huy Du** — ba đoạn phức có trio, tái hiện rút gọn. Hai phần ngoài trữ tình, ca xướng, tha thiết; trio tính hội hè, vũ hội, sang điệu tính mới, violin chuyển từ legato sang staccato, tiết tấu có chu kỳ kiểu vũ khúc [^nguyen-thi-nhung-2005, tr. 145]:

::form Mở_đầu:1 A_(ba_đoạn_đơn):6 Trio_(hai_đoạn_đơn):5 A_rút_gọn:4 Coda:1 | Miền Nam quê hương ta ơi (Huy Du) theo sơ đồ của giáo trình

Tác phẩm Việt Nam khác ở ba đoạn phức: *Hát ru* cho violin và piano (Hoàng Dương), *Khúc nhạc chiều* (Nguyễn Văn Nam), *Bóng dừa quê hương* cho cello và piano (Minh Khang), *Quê hương tôi trong máu lửa* cho piano (Ca Lê Thuần), *Khúc hát ru* cho piano (Ngô Sĩ Hiển), *Vũ khúc* cho cello và piano (Trọng Bằng) [^nguyen-thi-nhung-2005, tr. 145].

## §4. Những thay đổi trong cấu trúc
Từ thời lãng mạn tới hiện đại, ba đoạn phức phát triển rộng [^nguyen-thi-nhung-2005, tr. 146 – 147]:
- mỗi phần có thể là ba đoạn đơn tương phản, chứa chủ đề khác loại (chương III Giao hưởng số 1 của Brahms);
- làm dịu ranh giới giữa phần một và phần giữa (chương III Giao hưởng số 1, Intermezzo Op. 119 số 2 của Brahms), thậm chí chuyển thẳng không dấu nghỉ (chương II Giao hưởng số 5 của Prokofiev);
- tái hiện đổi thứ tự và tự do đổi mới chất liệu (Brahms Giao hưởng số 1; *Fêtes* của Debussy);
- **phức tạp hoá phần ngoài**: viết ở hình thức sonata (scherzo Giao hưởng số 9 của Beethoven; scherzo một tứ tấu của Borodin), ba đoạn phức (chương II Giao hưởng số 7 của Shostakovich), biến tấu (chương II *Scheherazade* của Rimsky-Korsakov; *Scherzo* cho hai đàn piano "Con gà gô" của Trần Ngọc Xương);
- **phức tạp hoá phần giữa**: Valse Mi giáng trưởng (số 1) của Chopin — trio gồm ba hình thức đơn (hai ba đoạn đơn và một đoạn nhạc nhắc lại).

## §5. Ba – năm đoạn phức
Như ba đoạn đơn có thể thành **ba – năm đoạn đơn** (a b a b a — trio chương III Sonata số 3 của Beethoven), ba đoạn phức có thể nhắc thêm phần giữa và phần một: **A B A B A** [^nguyen-thi-nhung-2005, tr. 147]. Giáo trình bàn hai cách hiểu: (1) hai ba đoạn phức "gối đầu" — chưa đủ, chỉ đúng khi các lần nhắc không đổi; (2) **ba – năm đoạn phức** — đúng hơn, vì phản ánh nguồn gốc và số phần thật (năm) [^nguyen-thi-nhung-2005, tr. 147].

Mẫu đầu tiên: scherzo Giao hưởng số 4 và số 7 của Beethoven [^nguyen-thi-nhung-2005, tr. 148]. Hình thức này quy mô lớn và mở đường cho phát triển phức tạp khi các lần trở lại có thay đổi — ở các nhà lãng mạn: chương II Giao hưởng số 2 và một chương sonata piano của Brahms; chương II Giao hưởng số 5 của Schubert, ở đó mỗi lần A và B trở lại đều đổi điệu tính [^nguyen-thi-nhung-2005, tr. 148].

## §6. Hình thức giữa ba đoạn đơn và ba đoạn phức
Hình thức ba phần có tái hiện, trong đó phần một và tái hiện chỉ là **một đoạn nhạc**, còn phần giữa tương phản là **hai hoặc ba đoạn đơn**. Phần ngoài ngắn làm nó gần ba đoạn đơn; phần giữa thì đúng kiểu trio của ba đoạn phức [^nguyen-thi-nhung-2005, tr. 148]. Hay gặp ở thế kỷ XIX – XX: *Vũ khúc gà con trong vỏ trứng* (*Bức tranh trong phòng triển lãm*, Mussorgsky) và *Tableaux poétiques* Op. 3 số 5 của Grieg — trio hai đoạn đơn; Mazurka Op. 41 số 2 Mi thứ của Chopin — trio ba đoạn đơn [^nguyen-thi-nhung-2005, tr. 148 – 149].

## §7. Ứng dụng
Ba đoạn phức tạo tương phản trên phạm vi lớn, thể hiện được hình tượng tương đối phức tạp; dùng cho menuetto, scherzo, đôi khi chương chậm của liên khúc sonata – giao hưởng, và tác phẩm độc lập; gắn với sự phát triển của intermezzo, nocturne, barcarolle, mazurka, novelette, arabesque [^nguyen-thi-nhung-2005, tr. 149].

## Tư liệu phân tích (theo giáo trình)
[^nguyen-thi-nhung-2005, tr. 149 – 150] Mozart — Giao hưởng số 40, chương III; Beethoven — chương III Sonata piano số 1, 2, 3, 4, 7; chương III Giao hưởng số 1, 2, 3; chương II Sonata violin Op. 12 số 2 và Op. 30 số 2; Schubert — Impromptu Mi giáng trưởng; Schumann — Concerto piano, chương II; Chopin — Nocturne Op. 37 số 1, Op. 48 số 1; Mazurka Op. 6 số 1, 2; Op. 17 số 1, 3, 4; Grieg — Concerto piano, chương II; Brahms — chương II Sonata violin số 1, Intermezzo Op. 118 số 3, Op. 119 số 2; Debussy — *Arabesque* số 1, 2; Dvořák — Serenade cho dàn dây; Berlioz — *Giao hưởng ảo tưởng*, chương II; Shostakovich — chương II Giao hưởng số 5, 10; Ca Lê Thuần, Hoàng Dương, Nguyễn Văn Nam, Trọng Bằng, Ngô Sĩ Hiển, Minh Khang (các tác phẩm đã kể); Hoàng Cương — *Múa nàng trúc xinh* cho piano.

Trong thư viện: [[phan-tich-menuetto-op2-so1]] (chương III Sonata số 1 — có trong danh mục), [[phan-tich-golliwogg-cakewalk]].

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-ba-phan-phuc]] — tương phản bên ngoài và bên trong, trio và episode, ba – năm đoạn, hình thức trung gian theo Sposobin và Mazel.

## Câu hỏi và bài tập
1. Trio và đoạn chen khác nhau thế nào?
2. Vì sao scherzo của Beethoven thường có phần nối trước tái hiện?
3. Coda tổng hợp là gì và vì sao giáo trình coi nó là con đường thâm nhập của hình thức sonata?
4. Phân biệt ba – năm đoạn phức với hai ba đoạn phức nối nhau.
5. Vẽ sơ đồ Valse Mi giáng trưởng số 1 của Chopin.`,
  },
]
