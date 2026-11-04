import type { Article } from '../wiki'
import { NHUNG_REF } from './ptam-nhung-a'

/** Phần thứ hai giáo trình Nguyễn Thị Nhung, chương VI – X: rondo đến sonata cổ. Trang in = trang PDF − 1. */
export const ptamNhungC: Article[] = [
  {
    slug: 'ptam-rondo',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, VI. Hình thức rondo',
    category: 'analysis',
    aliases: ['rondo', 'rondo cổ Pháp', 'rondo cổ điển', 'rondo lãng mạn', 'rondo kép', 'đoạn chen rondo'],
    summary: 'Chương VI Phần thứ hai giáo trình Nguyễn Thị Nhung: rondo — chủ đề nhắc lại ít nhất ba lần xen các đoạn chen; vừa là hình thức vừa là thể loại; rondo cổ Pháp (clavecin; Bach Concerto violin Mi trưởng), rondo cổ điển (A B A C A, A B A C A B A, coda), rondo thế kỷ XIX – đầu XX (Schumann, Stravinsky, Prokofiev, tác phẩm Việt Nam), trường hợp đặc biệt (đổi trật tự, kết hợp biến tấu, rondo kép, rondo mang tính tổ khúc — Bức tranh trong phòng triển lãm), ứng dụng.',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa. Sơ đồ chung
Rondo là hình thức nhiều phần, trong đó **một phần nhắc lại nhiều lần (ít nhất ba)** gọi là **chủ đề**, xen kẽ với những phần khác nhau về nội dung gọi là **đoạn chen** (*épisode*): A – B – A – C – A – D – A… [^nguyen-thi-nhung-2005, tr. 151].

::form A:2 B:2 A:2 C:2 A:2 | Rondo: chủ đề (A) nhắc lại ít nhất ba lần, xen các đoạn chen

Ba – năm đoạn đơn hay ba – năm đoạn phức cũng có chủ đề trở lại ba lần, nhưng còn thiếu **điều kiện quyết định**: các đoạn chen ở đó **không thay đổi** (B lặp lại B), nên chúng chỉ có khuynh hướng rondo [^nguyen-thi-nhung-2005, tr. 151].

**Rondo vừa là hình thức vừa là thể loại.** Gốc của nó là bài ca, điệu nhảy dân gian, điệu múa vòng tròn: phần chủ đề do tập thể cùng hát, các đoạn chen (*couplet*) do người hát solo. Truyền thống ấy còn trong nhạc đàn: chủ đề vang đầy đặn, đoạn chen mỏng hơn [^nguyen-thi-nhung-2005, tr. 151]. Với tư cách thể loại, rondo mang tính **nhảy múa, sinh động**, luân phiên hình tượng, hợp với cảnh hội hè; kịch tính căng thẳng và xung đột không thuộc bản chất tự nhiên của nó [^nguyen-thi-nhung-2005, tr. 151 – 152].

## §2. Rondo cổ Pháp
Mẫu đầu tiên ở các nghệ sĩ **clavecin Pháp** cuối thế kỷ XVII – đầu XVIII: những bản nhạc đàn điêu luyện gần các điệu nhảy gavotte, bourrée, menuet; chủ đề và đoạn chen ngắn nên chủ đề có khi trở lại tới **16 lần** [^nguyen-thi-nhung-2005, tr. 152]. Đặc điểm [^nguyen-thi-nhung-2005, tr. 152]:
- **Chủ đề** là một đoạn nhạc, luôn ở điệu tính chính; có khi là hạt nhân ngắn gần chủ đề phức điệu, và dưới ảnh hưởng phức điệu thì trở lại ở điệu tính phụ, mỗi lần một khác.
- **Đoạn chen không tương phản** với chủ đề: là chuyển động giai điệu không ổn định hoặc biến khúc tự do của chủ đề; không dài hơn chủ đề; ở các điệu tính phụ (át, hạ át, song song, cùng tên) — sự chuyển giọng bù cho sự thiếu tương phản chủ đề.
- **Không có nối tiếp** giữa chủ đề và đoạn chen; vì thiếu quan hệ chức năng phức tạp nên **không có coda**.

Giáo trình phân tích một rondo của F. Couperin [^nguyen-thi-nhung-2005, tr. 160]. Ở **Handel** và **Bach**, rondo cổ Pháp mở rộng nhiều về hình tượng, khuôn khổ lớn, phát triển có tính giao hưởng [^nguyen-thi-nhung-2005, tr. 161].

**Phân tích mẫu: chương kết Concerto violin Mi trưởng của Bach** [^nguyen-thi-nhung-2005, tr. 161]:

| Phần | Điệu tính | Nhận xét của giáo trình |
|---|---|---|
| Chủ đề | Mi trưởng | Đoạn nhạc 16 ô, dàn nhạc *tutti*, trở lại không đổi và luôn ở điệu tính chính |
| Đoạn chen I | Si trưởng | Violin độc tấu (như mọi đoạn chen); không tương phản; kết trọn ở át |
| Đoạn chen II | Đô thăng thứ | Tương phản chút ít; phát triển âm điệu từ đoạn chen I |
| Đoạn chen III | La trưởng | Đầu không ổn định, cuối cân bằng; báo trước sự phát triển sau |
| Đoạn chen IV | Sol thăng thứ | Phát triển lớn nhất, tương phản rõ nhất |

Bach làm sắc dần tính tương phản và kéo dài dần các đoạn chen, lớn nhất ở đoạn cuối — một khuynh hướng hướng tới chức năng lôgic của các nhà cổ điển [^nguyen-thi-nhung-2005, tr. 161].

Rondo cổ Pháp chuẩn bị cho rondo cổ điển; thế kỷ XX có khuynh hướng phục hồi nó, như chương kết *Kleine Kammermusik* cho ngũ tấu kèn hơi của Hindemith [^nguyen-thi-nhung-2005, tr. 162].

## §3. Rondo cổ điển
Ở Haydn, Mozart, Beethoven, rondo thành hình thức có chủ đề phát triển tích cực và **tương phản chủ đề** lên hàng đầu [^nguyen-thi-nhung-2005, tr. 162]:
- **Chủ đề chính** lớn hơn: thường hai đoạn đơn hay ba đoạn đơn, có khi là đoạn nhạc (chương kết Sonata piano số 7, 9 của Beethoven); luôn trở lại ở **điệu tính chính**; thường không đổi, nhưng có khi rút gọn ở lần cuối (chương III Sonata số 21) hay đổi cách cấu tạo (chương kết Sonata số 3, 25) [^nguyen-thi-nhung-2005, tr. 162 – 163]. Chủ đề là **điểm tựa**, "bộ phận cân bằng" sau mỗi đoạn chen tương phản [^nguyen-thi-nhung-2005, tr. 163].
- **Đoạn chen** phát triển thành chủ đề độc lập đối lập với chủ đề chính; cấu trúc đa dạng: đoạn nhạc, hai đoạn đơn, ba đoạn đơn, hoặc cơ cấu phát triển kiểu phần phát triển. Điệu tính theo quan hệ công năng cổ điển: **đoạn chen I ở át, đoạn chen II ở hạ át** — dàn ý T – S – D – T; cũng có quan hệ tự do hơn (chương kết Sonata số 27: đoạn chen I ở bậc VI, đoạn chen II ở thứ cùng tên) [^nguyen-thi-nhung-2005, tr. 163].
- **Số đoạn chen giảm** để tập trung chủ đề; dạng phổ biến: **A – B – A – C – A (coda)** và **A – B – A – C – A – B – A (coda)** [^nguyen-thi-nhung-2005, tr. 163].
- **Đoạn chen II thành trung tâm**, tương phản mạnh nhất, phát triển tích cực nhất. Chương kết Sonata số 9 của Beethoven: chủ đề là đoạn nhạc, đoạn chen I hai đoạn đơn, đoạn chen II ba đoạn đơn và dài hơn mọi phần khác, có chuyển điệu căng thẳng. Ở chương kết Sonata số 21 (*Waldstein*), sau đoạn chen II còn có một **phần phát triển** mở rộng, đi xa về phía hạ át [^nguyen-thi-nhung-2005, tr. 164].
- Xuất hiện **nối tiếp** giữa các phần, thường bằng passage, có khi chuyển điệu để tạo căng thẳng hướng về chủ đề [^nguyen-thi-nhung-2005, tr. 164].
- **Coda** là yếu tố mới: tổng hợp, khái quát, tạo thống nhất. Coda chương kết Sonata số 21 có nhiều bước phản ánh cả dàn ý: (1) biến tấu phần đầu chủ đề, có mô phỏng; (2) chuyển điệu tích cực, hoạ lại trình tự điệu tính của vùng đoạn chen II (La giáng trưởng, Fa thứ, Rê giáng trưởng); (3) phần đầu chủ đề với cách cấu tạo mới và màu thứ của đoạn chen II; (4) phần kết chính trên âm trì tục bậc chủ [^nguyen-thi-nhung-2005, tr. 164 – 165].

## §4. Rondo thế kỷ XIX – đầu thế kỷ XX
Tự do sáng tạo làm thay đổi dàn ý, quan hệ chủ đề – đoạn chen, thể loại, điệu tính, cấu trúc từng phần [^nguyen-thi-nhung-2005, tr. 165]:
- **Thể loại mở rộng.** Ở các nhà cổ điển rondo mang tính nhảy múa; ở các nhà lãng mạn nó biểu hiện nhiều thể loại: *Novellette* số 1 của Schumann mang yếu tố hành khúc; chương III Sonata Pha thăng thứ của Schumann gộp nhiều thể loại — chủ đề scherzo, đoạn chen I valse, đoạn chen II polonaise — gần tính tương phản của tổ khúc. Tương phản thể loại đặc biệt mạnh trong nhạc có tiêu đề: chương I *Faschingsschwank aus Wien* Op. 26 [^nguyen-thi-nhung-2005, tr. 165].
- Có tác phẩm thiếu tương phản như truyền thống Pháp (Scherzo của Op. 26), có tác phẩm theo dạng cổ điển A B A C A coda hay A B A C A B A coda (*Novellette* số 1) — nhưng giống chỉ bề ngoài [^nguyen-thi-nhung-2005, tr. 166].
- **Chủ đề** có thể trở lại ở **điệu tính phụ**, và mỗi lần đổi cấu trúc, thường **rút gọn**: trong *Novellette* số 1, lần thứ nhất a b a b a, lần thứ hai a b a, lần thứ ba chỉ một đoạn nhạc [^nguyen-thi-nhung-2005, tr. 166].
- **Đoạn chen** tương phản rõ, đổi nhịp độ, nhịp, điệu tính tự do; số đoạn chen và số lần chủ đề có xu hướng tăng. Chương I Op. 26: đoạn chen I và II gần nhau, cùng Sol thứ; đoạn chen II và đoạn cuối gần nhau về cách cấu tạo, cùng Mi giáng trưởng [^nguyen-thi-nhung-2005, tr. 166].
- **Nối tiếp** có khi phát triển rất mạnh; rondo hay dùng cho một tiết mục opera [^nguyen-thi-nhung-2005, tr. 167].
- **Thế kỷ XX**: cảnh *Hội chợ tuần lễ béo* trong *Petrushka* của Stravinsky; *Điệu nhảy các hiệp sĩ* và *Thiếu nữ Juliet* trong *Romeo và Juliet* của Prokofiev [^nguyen-thi-nhung-2005, tr. 167].
- **Việt Nam**: *Vui mừng thắng lợi* cho piano (Vân Đông), *Tiếng ru* cho piano (Nguyễn Đình Tấn), *Tây Nguyên vui chiến thắng* cho violin và piano (Nguyễn Văn Thương), *Rừng xuân Tây Nguyên* cho violin và piano (Vĩnh Cát), chương III Tứ tấu dây *Tây Nguyên* (Đỗ Nhuận), phần III giao hưởng *Không đề* (Đàm Linh), chương II Giao hưởng số 1 *Quê hương* (Hoàng Việt), chương kết giao hưởng *Trăm sông đổ về biển Đông* (Trần Ngọc Xương) [^nguyen-thi-nhung-2005, tr. 167].

## §5. Những trường hợp đặc biệt
Hai hướng [^nguyen-thi-nhung-2005, tr. 167]: **thay đổi bên trong** (sự luân phiên chủ đề – đoạn chen) và **kết hợp với hình thức khác**.

**Thay đổi bên trong** [^nguyen-thi-nhung-2005, tr. 168 – 170]:
- Bỏ một lần chủ đề, để hai đoạn chen liền nhau, mỗi lần chủ đề đều thay đổi: phần kết hồi I opera *Nàng Bạch Tuyết* của Rimsky-Korsakov — đoạn chen III và IV trình bày liền nhau, mỗi lần chủ đề trở lại đều thay đổi, lần thứ tư và thứ năm của chủ đề đi liền nhau không có đoạn chen, coda xây trên chất liệu chủ đề: vừa đổi trật tự vừa kết hợp biến tấu.
- Chương kết Tứ tấu piano Op. 25 Sol thứ của Brahms (*Rondo alla zingarese*): chủ đề và đoạn chen I trên điệu nhảy *csárdás*, các đoạn chen C, D gần nhạc đàn chậm ngẫu hứng Hungary; đoạn chen B trở lại sau trung tâm; **cadenza** tổng hợp chất liệu các đoạn chen nên coda chỉ cần hoạ lại chủ đề — ảnh hưởng của concerto lên thể loại thính phòng.
- **Rondo mang tính tổ khúc**: nhiều đoạn chen tương phản, độc lập, chủ đề đổi mỗi lần hoặc vắng mặt — chương I Op. 26 của Schumann; rõ nhất là *Bức tranh trong phòng triển lãm* của Mussorgsky: chủ đề *Promenade* không trở lại đều sau mỗi bức tranh, mỗi lần đổi khuôn khổ và tính chất, sau *Catacombae* thành một bức tranh có tiêu đề riêng; bản phối khí của Ravel bỏ *Promenade* sau bức số 6, để bốn bức 5 – 8 nối liền. Nhưng đó không phải tổ khúc đúng nghĩa, vì các đoạn chen không hoàn toàn độc lập, và chủ đề nhắc lại vẫn là yếu tố thống nhất [^nguyen-thi-nhung-2005, tr. 169].
- *Rừng xuân Tây Nguyên* của Vĩnh Cát: A B C A1 D A2 coda — chủ đề trở lại có biến tấu, đoạn chen I và II liền nhau [^nguyen-thi-nhung-2005, tr. 170].

**Kết hợp với hình thức khác** [^nguyen-thi-nhung-2005, tr. 170 – 171]:
- **Rondo kép** (hai chủ đề): chương kết Giao hưởng số 4 của Mahler theo giáo trình — A – B – hợp xướng – C – hợp xướng – A – hợp xướng – C – A – coda: phần hợp xướng trở lại có chu kỳ như một chủ đề thứ hai; cảnh hội chợ trong *Petrushka* tương tự.
- Rondo **bắt đầu bằng đoạn chen**: Valse Đô thăng thứ của Chopin — B A C A B A.
- Kết hợp **biến tấu tự do**: ballade của Finn trong *Ruslan và Lyudmila* (Glinka); phần kết hồi I *Nàng Bạch Tuyết*. Chương ba "Trở về" của tổ khúc giao hưởng *Non sông một dải* (Nguyễn Xinh): rondo kết hợp biến tấu hai chủ đề — A B A1 B1 A2 B2 C A3 B3 D A coda.
- Kết hợp **ba đoạn phức**: *Hoà tấu 95* cho hai đàn piano của Đỗ Hồng Quân — không ghi nhịp, không điệu tính, tiết tấu tự do nhưng vẫn có chu kỳ trong phân ngắt; mô phỏng bộ gõ dân gian, khai thác chồng âm quãng 2, âm hưởng ngũ cung, có chỗ toàn cung; sơ đồ A B A1 C – nối – D A2 coda.
- Kết hợp sonata thành **rondo – sonata** (chương IX).

## §6. Ứng dụng
Rondo dùng phổ biến cho một chương của liên khúc sonata – giao hưởng (nhất là chương kết), một số aria opera, và tác phẩm khí nhạc độc lập [^nguyen-thi-nhung-2005, tr. 171].

## Tư liệu phân tích (theo giáo trình)
Ngoài các tác phẩm đã dẫn [^nguyen-thi-nhung-2005, tr. 172]: Bach — Gavotte hình thức rondo trong một tổ khúc cho violin; Mozart — aria Figaro trong *Đám cưới Figaro*; Beethoven — Sonata piano số 2 (chương II), số 7 và số 10 (chương kết), số 8 (chương II), số 21 (chương kết), Sonata violin Op. 24 (chương kết); Schubert — Sonata piano Op. 53 (chương kết), Sonata violin số 1 (chương kết); Stravinsky — *Điệu nhảy Nga* (*Petrushka*); Prokofiev — Concerto violin số 1, chương II; Hoàng Việt — Giao hưởng *Quê hương*, chương II; Trần Ngọc Xương — *Trăm sông đổ về biển Đông*, chương kết; Đàm Linh — giao hưởng *Không đề*, phần III.

Trong thư viện: [[phan-tich-pathetique-chuong-2]] (chương II Sonata số 8 — có trong danh mục), [[phan-tich-fur-elise]], [[phan-tich-rondo-alla-turca]].

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-rondo]] — rondo cổ, cổ điển, thế kỷ 19, hình thức kép và giống rondo theo Sposobin, Mazel, Asafyev.

## Câu hỏi và bài tập
1. Vì sao ba – năm đoạn phức chưa phải rondo?
2. So sánh đoạn chen trong rondo cổ Pháp và rondo cổ điển.
3. Vẽ sơ đồ điệu tính chương kết Concerto violin Mi trưởng của Bach.
4. Đoạn chen II của rondo cổ điển có vai trò gì?
5. *Bức tranh trong phòng triển lãm* là rondo hay tổ khúc? Lập luận theo giáo trình.`,
  },
  {
    slug: 'ptam-bien-tau',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, VII. Hình thức biến tấu',
    category: 'analysis',
    aliases: ['biến tấu', 'biến khúc', 'basso ostinato', 'soprano ostinato', 'biến tấu trang sức', 'biến tấu nghiêm khắc', 'biến tấu tự do', 'biến tấu hỗn hợp', 'biến tấu kép', 'ostinato di động'],
    summary: 'Chương VII Phần thứ hai giáo trình Nguyễn Thị Nhung: biến tấu — chủ đề và các biến khúc theo nguyên tắc nhắc lại – thay đổi; biến tấu nghiêm khắc (basso ostinato, soprano ostinato, trang sức; phân tích chương III Sonata số 30 của Beethoven), biến tấu tự do (biến khúc tính cách; phân tích Biến tấu giao hưởng của Franck), biến tấu hỗn hợp (chương kết Giao hưởng số 3 của Beethoven), biến tấu kép (Kamarinskaya của Glinka), ứng dụng.',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa. Sơ đồ chung
**Chủ đề và biến tấu** (hình thức biến tấu) là hình thức xây dựng chủ yếu trên sự phát triển biến tấu của một hay vài chủ đề: trần thuật chủ đề rồi một loạt **nhắc lại có thay đổi** gọi là **biến khúc**. Nguyên tắc cơ bản là **nhắc lại – thay đổi** toàn bộ một tư duy âm nhạc hoàn thiện [^nguyen-thi-nhung-2005, tr. 173].

::form Chủ_đề:2 Biến_khúc_1:2 Biến_khúc_2:2 Biến_khúc_3:2 Coda:1 | Chủ đề và các biến khúc

Giáo trình phân biệt hai thuật ngữ [^nguyen-thi-nhung-2005, tr. 173]:
- **sự biến đổi** (*variante*) — nhắc lại thay đổi giai điệu, tiết tấu, điệu thức… của **một phần nhỏ** chất liệu (dùng trong nhiều hình thức, ví dụ câu hai đoạn nhạc nhắc lại câu một có thay đổi);
- **biến khúc** (*variation*) — nhắc lại thay đổi **toàn bộ** tư duy âm nhạc hoàn thiện.

Ở ba đoạn đơn hay rondo, các yếu tố thay đổi được phân định rõ (trình bày – giữa; chủ đề – đoạn chen); ở biến tấu chúng **tổng hợp đồng thời**: mỗi biến khúc nêu khía cạnh mới mà vẫn giữ liên hệ với chủ đề [^nguyen-thi-nhung-2005, tr. 173 – 174].

**Nguồn gốc**: nghệ thuật ca hát, nhảy múa dân gian, nơi một giai điệu ngắn được nhắc lại nhiều lần, mỗi lần thêm trang sức, kéo dài hay rút ngắn. Mẫu đầu tiên trong âm nhạc chuyên nghiệp Tây Âu ở **thế kỷ XVII** [^nguyen-thi-nhung-2005, tr. 174].

**Chủ đề biến tấu** cần nổi bật, chất lượng cao: giai điệu cấu trúc rõ, ngắn gọn, lôi cuốn; tiết tấu điển hình mà không gây khó cho việc biến tấu; hoà âm rõ. Nhiều chủ đề là một bè, đồng âm hoặc cấu tạo đơn giản; thường **trung lập về thể loại**, còn trong quá trình biến đổi mới xuất hiện nét mới [^nguyen-thi-nhung-2005, tr. 174].

Hai loại chính [^nguyen-thi-nhung-2005, tr. 174]:
- **Biến tấu nghiêm khắc** — giữ nét hình tượng cơ bản, các điểm tựa cấu trúc và dàn ý điệu tính của chủ đề.
- **Biến tấu tự do** — đặc điểm chủ đề biến đổi, xuất hiện hình tượng mới, thay đổi cả cấu trúc và điệu tính.

## §2. Biến tấu nghiêm khắc
Ba dạng: trên chủ đề **không đổi ở bè trầm** (*basso ostinato*), **không đổi ở bè cao** (*soprano ostinato*), và **biến tấu trang sức** [^nguyen-thi-nhung-2005, tr. 175].

### Basso ostinato
Tiêu biểu cho thế kỷ XVII – nửa đầu XVIII, thường trong **passacaglia** và **chaconne** — điệu nhảy chậm nhịp ba: Passacaglia Đô thứ cho organ và Chaconne Rê thứ cho violin của Bach; một chương Concerto La thứ của Vivaldi [^nguyen-thi-nhung-2005, tr. 175]. Đặc điểm [^nguyen-thi-nhung-2005, tr. 175 – 177]:
- Chủ đề là cơ cấu ngắn, gọn, thường cỡ đoạn nhạc, có khi bắt đầu một bè; gần chủ đề fugue, giàu khả năng phức điệu.
- **Phức điệu** vừa tạo căng thẳng vừa thống nhất: chủ đề ngắn nhắc lại không đổi ở bè trầm dễ thành đều đặn, nên các bè trên tạo đường nét độc lập mới, có khi nối nhiều biến khúc lân cận, làm nhân tố tương phản.
- Chủ đề có thể được hoà âm hoá và sang **điệu tính mới**: chaconne hợp xướng trong Cantata số 150 của Bach — chủ đề 4 ô ở Si thứ, các biến khúc qua Rê trưởng, Pha thăng thứ, La trưởng, Mi trưởng rồi trở về Si thứ.
- Thay đổi tiết tấu, âm vực, cách cấu tạo; có khi chủ đề rời bè trầm lên âm vực cao (nhóm biến khúc trung tâm Passacaglia Đô thứ).

Basso ostinato vắng ở các nhà cổ điển Vienna, được làm mới ở thời lãng mạn muộn — đỉnh cao là **chương kết Giao hưởng số 4 của Brahms** (passacaglia bi thương) — và phát triển mạnh ở thế kỷ XX: Shostakovich với passacaglia trong Concerto violin số 1, Giao hưởng số 8, Prelude Sol thăng thứ Op. 87 [^nguyen-thi-nhung-2005, tr. 177].

**Ostinato di động**: chủ đề không giữ nguyên mà thay đổi khuôn khổ, nhịp điệu, tiết tấu tự do — chương II Tứ tấu dây của Debussy: chủ đề 3 ô (biến dạng chủ đề chính chương I) phát triển theo chiều ngang, khi dài tới 8 ô, khi rút còn 1 ô, thay đổi tiết tấu, hoà âm, âm sắc, âm vực [^nguyen-thi-nhung-2005, tr. 178].

**Việt Nam**: chương II Giao hưởng số 1 của Vĩnh Cát, trữ tình, cấu trúc kiểu basso ostinato — chủ đề vào ở cello trong 8 ô, tiếp đến bassoon, rồi các giai điệu đối vị; chủ đề và đối đề chuyển qua các nhạc cụ tới cao trào [^nguyen-thi-nhung-2005, tr. 179]. Trong âm nhạc đương đại ostinato còn là phương pháp dựng hình thức lớn: chương kết Sonata piano số 7 của Prokofiev [^nguyen-thi-nhung-2005, tr. 180].

### Soprano ostinato
Chủ đề nhắc lại ở **bè cao nhất**, các bè khác biến đổi. Theo giáo trình, dạng này do **Glinka** sáng tạo và phổ biến nhất trong opera cổ điển Nga [^nguyen-thi-nhung-2005, tr. 180].

### Biến tấu trang sức
Dạng điển hình nhất của biến tấu nghiêm khắc, phản ánh rõ nhất phương pháp biến tấu; gắn với các nhà cổ điển Vienna, vẫn liên hệ basso ostinato và gốc nhảy múa, ca hát [^nguyen-thi-nhung-2005, tr. 180]. Khác basso ostinato ở chỗ dùng rộng **phương pháp chủ điệu**, giải phóng khỏi các đường phức điệu [^nguyen-thi-nhung-2005, tr. 180]. Đặc điểm [^nguyen-thi-nhung-2005, tr. 180 – 182]:
- Chủ đề: giai điệu diatonic rõ, hoà âm và cách cấu tạo không phức tạp, 3 – 4 bè; thường **hai đoạn đơn**, ít khi ba đoạn đơn; hình thức chủ đề giữ trong các biến khúc.
- Phương pháp chính: biến đổi hình dạng giai điệu, tiết tấu, làm phong phú hoà âm; **mỗi biến khúc một kiểu cấu tạo**, gần như không đổi phương tiện tiết tấu trong biến khúc (ngoại lệ: biến khúc V chương I Sonata số 12 của Beethoven tổng hợp cấu tạo của biến khúc II và III).
- Dàn ý điệu tính giữ nguyên, có khi tương phản trưởng – thứ cùng tên: biến khúc III chương I Sonata số 12 — trung tâm của chu kỳ — sang thứ cùng tên.
- Nhịp độ, nhịp thường giữ; nhưng ở chương kết Sonata số 30 đổi nhịp độ, nhịp là cách tạo tương phản và gom biến khúc thành nhóm; có khi biến khúc viết kiểu fugue, fugato.
- Có **phần nối** giữa các nhóm (chương II Sonata số 32: phần nối rộng trước biến khúc cuối) và **coda** khái quát; khi coda nhắc lại chủ đề thì tác phẩm có dáng ba phần tái hiện (chương II Sonata số 23, chương III Sonata số 30).

Mẫu giá trị: chương I Sonata số 12, chương II Sonata số 10, chương II Sonata số 23, chương III Sonata số 30, chương II (kết) Sonata số 32 của Beethoven [^nguyen-thi-nhung-2005, tr. 182].

**Phân tích mẫu: chương III Sonata piano số 30 (Op. 109) của Beethoven** [^nguyen-thi-nhung-2005, tr. 182 – 189]:

| Phần | Nhận xét của giáo trình |
|---|---|
| **Chủ đề** | Trữ tình, sáng, gần chủ đề chính chương I; **hai đoạn đơn phát triển**; giai điệu diatonic ở âm vực giữa, tiết tấu kiểu **sarabande**; hợp âm chủ điệu. Đoạn một kết ở át (chi tiết giữ ở mọi biến khúc); cuối câu một đoạn hai sang Sol thăng thứ, rồi cao trào ở bậc VI trưởng |
| **Biến khúc I** | Nhấn tính nhảy múa ở tay trái (phách một luôn ở bè trầm thấp); giai điệu nhảy quãng rộng (mở bằng quãng 8), ca xướng, sáng |
| **Biến khúc II** | Tương phản mạnh bằng đổi đột ngột cách cấu tạo; mỗi đoạn nhắc hai lần với hai kiểu cấu tạo vừa tương phản vừa bổ sung; xuất hiện hợp âm **Napoli** ở phách một ô cuối đoạn một (còn gặp lại ở biến khúc IV, V); giữ chi tiết sang Sol thăng thứ và cao trào |
| **Biến khúc III – IV** | Tương phản bằng đổi nhịp độ, nhịp; biến khúc IV nhịp **9/8**, chậm hơn chủ đề, cấu tạo phức tạp, xu hướng phức điệu |
| **Biến khúc V** | Nhanh hơn; cấu tạo phức điệu tạo căng thẳng suốt biến khúc; tương phản âm vực mạnh |
| **Biến khúc VI** | Như phần phát triển kết thúc cả chu kỳ: tiết tấu ngày càng dày, âm vực mở rộng nhiều quãng tám, cuối trên **âm trì tục bậc chủ** — chuẩn bị chủ đề trở lại ở dạng ban đầu |

Mở rộng tương phản và khuôn khổ, mỗi biến khúc một nét riêng, làm chương này **tiến gần biến tấu tự do** [^nguyen-thi-nhung-2005, tr. 189]. Giáo trình nhấn mạnh chương này có chức năng phức tạp trong sonata: tổng hợp chương chậm và chương kết [^nguyen-thi-nhung-2005, tr. 182].

## §3. Biến tấu tự do
Xuất hiện ở **thời kỳ giữa của Beethoven**. Chủ đề biến đổi mạnh, sinh ra những nét hình tượng mới, phức tạp, tương phản rõ; vì các biến khúc có tính cách độc lập, độc đáo nên còn gọi là **biến khúc tính cách** [^nguyen-thi-nhung-2005, tr. 189 – 190]. Đặc điểm [^nguyen-thi-nhung-2005, tr. 190 – 191]:
- Ngoài nhắc lại thay đổi còn dùng **nguyên tắc phát triển**: có biến khúc là cơ cấu phát triển không ổn định; dùng từng motif, tiết nhạc của chủ đề để phát triển độc lập, nên hình thức các biến khúc rất khác nhau (*Biến tấu giao hưởng* của Franck: từ đoạn nhạc tới hình thức sonata).
- Dùng **thể loại** mới để tạo tương phản: Biến tấu Op. 34 Fa trưởng của Beethoven đã có *Tempo di menuetto*, *Alla marcia*… — gần yếu tố tổ khúc; *Etudes symphoniques* của Schumann, mỗi biến khúc một bức tranh tâm lý; *Quê hương Tây Nguyên* (Nguyễn Văn Thương), tam tấu *Kể chuyện sông Hồng* (Huy Du).
- Có thể xuất hiện **yếu tố chủ đề mới cùng nguồn** (biến khúc III *Biến tấu giao hưởng* của Franck, *L'istesso tempo*).
- **Điệu tính sinh động**, hoà âm góp phần phát triển: trong Op. 34 của Beethoven chỉ chủ đề và biến khúc cuối ở Fa trưởng, các biến khúc khác ở điệu tính phụ theo **quãng 3 đi xuống**.

**Phân tích mẫu: *Biến tấu giao hưởng* cho piano và dàn nhạc của César Franck** — mẫu điển hình nhất, phát triển giao hưởng trên khuôn khổ lớn, chịu ảnh hưởng liên khúc sonata – giao hưởng [^nguyen-thi-nhung-2005, tr. 191 – 196]. Chủ đề là **đoạn nhạc không nhắc lại** gồm hai câu tương phản mạnh: câu một tiết tấu cương nghị, căng thẳng; câu hai quãng 2 đi xuống, trải rộng; khác cả nhịp độ và âm sắc, nhưng thống nhất bởi cùng cấu trúc **1 + 1 + 2**. Tác phẩm chia ba nhóm và một biến khúc cuối độc lập:

| Nhóm | Biến khúc | Nội dung |
|---|---|---|
| **Một** (5 biến khúc) — như phần trình bày | I | Giữ cấu trúc, đổi điệu tính: từ Pha thăng thứ, kết ở La thứ |
| | II | La trưởng; dựa tiết tấu câu một, căng thẳng |
| | III (*L'istesso tempo*) | La trưởng; **chủ đề mới cùng nguồn** (1 + 1 + 2) |
| | IV (*Poco più lento*) | Dựa yếu tố hai; hai đoạn đơn; Đô thăng thứ → Sol trưởng; như tiếng organ |
| | V (ô 69 – 91) | Yếu tố một phát triển mô phỏng tới cao trào nhóm; yếu tố hai ngắt dàn nhạc |
| **Hai** (6 biến khúc, ô 99 – 229) — trung tâm, chỉ dùng chủ đề cùng nguồn | VI – IX | Bốn biến khúc mỗi cái 18 ô, ở Pha thăng thứ: ổn định; đối thoại piano – dàn nhạc; chủ đề ở viola và cello, piano móc đơn rồi móc kép; IX sang La thứ |
| | X | Cao trào nhóm hai, bắt đầu Rê trưởng, dàn nhạc mở rộng |
| | XI | Liền biến khúc trước, giảm căng thẳng |
| **Ba** (2 biến khúc) — như chương chậm | XII | Chủ đề cùng nguồn ở cello âm vực thấp trên nền piano |
| | XIII | Phát triển quãng 2 đi xuống: trữ tình → buồn thương → tươi sáng |
| **Biến khúc cuối** | XIV | Lớn nhất, như chương kết — **hình thức sonata**: chủ đề I (Pha thăng trưởng) từ câu hai, chủ đề II (Rê trưởng, nét vũ khúc) từ câu một; coda rút gọn |

## §4. Biến tấu hỗn hợp. Biến tấu kép
**Biến tấu hỗn hợp** tổng hợp nét của biến tấu nghiêm khắc và tự do — đã có ở Beethoven: chương kết Giao hưởng số 3, chương IV Tứ tấu dây số 14 Op. 131 [^nguyen-thi-nhung-2005, tr. 196].

**Phân tích mẫu: chương kết Giao hưởng số 3 (*Eroica*) của Beethoven**, theo sơ đồ của giáo trình [^nguyen-thi-nhung-2005, tr. 197 – 198]:

| Ô | Phần |
|---|---|
| 1 – 11 | Mở đầu |
| 12 – 43 | Chủ đề A, hai đoạn đơn, Mi giáng trưởng |
| 44 – 59 | Biến khúc I: A ở bè giữa — nghiêm khắc |
| 60 – 75 | Biến khúc II: A ở bè trên — nghiêm khắc |
| 76 – 107 | Biến khúc III: A ở bè trầm với **giai điệu mới B** ở bè trên |
| khoảng 108 – 116 | Nối: Mi giáng trưởng → Đô thứ |
| khoảng 117 – 174 | Biến khúc IV: tự do, **fugato**, Đô thứ – La giáng trưởng |
| 175 – 210 | Biến khúc V: B ở bè trên, tự do, Si thứ |
| 211 – 255 | Biến khúc VI: A ở bè dưới, tự do, Sol thứ |
| 256 – 348 | Biến khúc VII: như phần phát triển, dùng cả A và B, đối vị; **cao trào chính** |
| 349 – 380 | Biến khúc VIII: B, Mi giáng trưởng |
| 381 – 403 | Biến khúc IX: tiếp tục phát triển |
| 404 – 419 | Biến khúc X: B ở bè trên, La giáng trưởng → Sol thứ |
| 420 – 430 | Biến khúc XI: B ở bè trên, Sol thứ |
| 431 – 471 | Coda trên yếu tố phần mở đầu |

Ba biến khúc đầu nghiêm khắc (giữ điệu tính và cấu trúc chủ đề); giai điệu B xuất hiện ở biến khúc III và phát triển dần tới mức một **chủ đề thứ hai**; từ trung tâm chu kỳ chuyển sang biến tấu tự do [^nguyen-thi-nhung-2005, tr. 197]. Các nhà lãng mạn dùng nhiều biến tấu hỗn hợp: Ballade Sol thứ của Grieg — chủ đề và 12 biến khúc, 8 biến khúc đầu nghiêm khắc, từ biến khúc 9 tự do, có nét leitmotiv [^nguyen-thi-nhung-2005, tr. 198].

**Biến tấu kép (hai chủ đề)** — hai dạng [^nguyen-thi-nhung-2005, tr. 198]:
- **biến tấu theo thứ tự** hai chủ đề luân phiên — chương chậm *Giao hưởng London* của Haydn (theo giáo trình);
- **theo nhóm**, hoặc đầu theo thứ tự rồi các biến khúc sau chỉ từ một chủ đề. Điển hình: ***Kamarinskaya*** của Glinka — chủ đề một trữ tình (bài hát đám cưới) với 3 biến khúc, chủ đề hai nhảy múa *Kamarinskaya* với 13 biến khúc, rồi một nhóm 3 biến khúc chủ đề một và một nhóm 18 biến khúc chủ đề hai (số liệu theo giáo trình).
- Hỗn hợp thứ tự và nhóm: chương II Giao hưởng số 5 của Beethoven — A B A1 B1 A2 A3 A4 … coda [^nguyen-thi-nhung-2005, tr. 198].

Phương pháp biến đổi trong biến tấu hai chủ đề có thể nghiêm khắc, tự do hay hỗn hợp; chương II Giao hưởng số 5 của Beethoven là biến tấu kép dùng phương pháp hỗn hợp [^nguyen-thi-nhung-2005, tr. 198].

## §5. Ứng dụng
**Tác phẩm độc lập**: *Etudes symphoniques* của Schumann, thơ giao hưởng *Tasso* của Liszt, Prelude Op. 87 số 12, 14 của Shostakovich, *Rhapsody trên chủ đề Paganini* của Rachmaninov, *Chủ đề và biến tấu* cho piano của Đỗ Hồng Quân. **Một chương** trong liên khúc sonata, giao hưởng: chương II Sonata piano Fa thứ của Brahms, chương I Concerto piano số 4 của Saint-Saëns, một chương Tam tấu của Ravel, chương II một concerto piano của Prokofiev [^nguyen-thi-nhung-2005, tr. 199].

## Tư liệu phân tích (theo giáo trình)
[^nguyen-thi-nhung-2005, tr. 200] Bach — Passacaglia (giáo trình ghi Rê thứ cho clavier), Chaconne trong Partita Rê thứ cho violin; Mozart — chương I Sonata số 11; Beethoven — chương II Sonata số 10, chương I số 12, chương II số 23, chương kết số 32; chương II Giao hưởng số 7, chương III Giao hưởng số 9; Chopin — Biến tấu Op. 2 và Op. 12; Liszt — *Totentanz*; Grieg — Ballade Sol thứ; Brahms — chương kết Giao hưởng số 4; Schumann — *Etudes symphoniques*; Saint-Saëns — chương I Concerto piano số 4; Rachmaninov — *Rhapsody trên chủ đề Paganini*; Shostakovich — Prelude Op. 87 số 12, 16; Nguyễn Văn Thương — *Quê hương Tây Nguyên*; Huy Du — *Kể chuyện sông Hồng*; Vĩnh Cát — chương II Giao hưởng số 1; Đỗ Hồng Quân — *Chủ đề và biến tấu* cho piano; Nguyễn Phúc Linh — *Chủ đề và biến tấu* cho flute và piano.

Trong thư viện: [[phan-tich-bien-tau-op26]] (chương I Sonata số 12 — có trong danh mục), [[phan-tich-canon-pachelbel]] (biến tấu trên bè trầm lặp).

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-bien-tau]] — basso ostinato, biến tấu nghiêm và tự do, kiểu Glinka, biến tấu kép theo Sposobin, Mazel, Asafyev; phân tích *Etudes symphoniques* theo Sposobin.

## Câu hỏi và bài tập
1. Phân biệt sự biến đổi và biến khúc.
2. Vì sao basso ostinato cần phức điệu?
3. Biến tấu trang sức giữ gì và thay gì? Kiểm trên chương I Sonata số 12 của Beethoven.
4. Biến khúc III *Biến tấu giao hưởng* của Franck mang yếu tố gì mới?
5. Vẽ sơ đồ chương kết *Eroica* và chỉ chỗ chuyển từ nghiêm khắc sang tự do.`,
  },
]
