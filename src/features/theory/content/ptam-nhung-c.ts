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
| khoảng 430 – 471 | Coda trên yếu tố phần mở đầu |

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
  {
    slug: 'ptam-sonata',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, VIII. Hình thức sonata',
    category: 'analysis',
    aliases: ['hình thức sonata', 'chủ đề chính', 'chủ đề phụ', 'chủ đề hai', 'nối tiếp sonata', 'kết phần trình bày', 'bước ngoặt', 'phần phát triển', 'phần tái hiện sonata', 'coda sonata'],
    summary: 'Chương VIII Phần thứ hai giáo trình Nguyễn Thị Nhung: hình thức sonata cổ điển — trình bày (chủ đề chính, nối tiếp ba giai đoạn, chủ đề hai, bước ngoặt, kết phần trình bày), phát triển (ba yếu tố quyết định, xé lẻ chất liệu, dàn ý điệu tính, ba giai đoạn, đoạn chen, tái hiện giả), tái hiện (dịu xung đột, ngả về hạ át, tái hiện có động lực), coda (ba giai đoạn); sonata lãng mạn, Shostakovich và sonata Việt Nam; tám trường hợp đặc biệt (không có phần phát triển, tái hiện ngược hướng, đoạn chen, hoạ lại đồng thời, bỏ chủ đề, thay chủ đề, chương I concerto). Phân tích mẫu chương I Waldstein, Sonata số 10, Appassionata của Beethoven.',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa. Sơ đồ chung
Hình thức sonata dựa trên **trần thuật, phát triển, tái hiện những chủ đề tương phản** với quan hệ có quy luật về chủ đề và điệu tính. Đây là một trong những hình thức phức tạp và hoàn thiện nhất, có khả năng biểu hiện lớn nhất — từ tình cảm nội tâm tới tư tưởng triết lý, xung đột [^nguyen-thi-nhung-2005, tr. 201]. Chưa hình thức nào chứa tương phản mạnh như sonata, và tương phản ở đây là **quá trình nội dung**, không chỉ bề ngoài [^nguyen-thi-nhung-2005, tr. 201].

Sonata hoàn chỉnh nhất ở **Haydn, Mozart và nhất là Beethoven**, nên nên học từ các mẫu cổ điển thành thục; ở sonata cổ (thế kỷ XVII – đầu XVIII) các quy luật chưa phân định rõ [^nguyen-thi-nhung-2005, tr. 201]. Sonata cổ điển có **ba phần chính: trình bày – phát triển – tái hiện**; từ thời kỳ giữa của Beethoven, ở các sonata kịch tính, **coda** được bổ sung như một phần chính (chương I Sonata số 23, Giao hưởng số 3, số 5) [^nguyen-thi-nhung-2005, tr. 201 – 202]. Trình bày có ít nhất hai chủ đề tương phản; phát triển làm xung đột sâu hơn, có khi có chủ đề mới; tái hiện hoạ lại các chủ đề trong quan hệ mới, gần nhau hơn, giảm xung đột [^nguyen-thi-nhung-2005, tr. 202].

::form Trình_bày:4 Phát_triển:3 Tái_hiện:4 Coda:1 | Sơ đồ khái quát: trình bày (chủ đề I – chủ đề II) – phát triển – tái hiện (chủ đề I – chủ đề II) – coda

Có thể có **phần mở đầu** (chương I Sonata số 32, Giao hưởng số 2 của Beethoven), vai trò tuỳ tác phẩm [^nguyen-thi-nhung-2005, tr. 202].

## §2. Phần trình bày
Chứa lần trần thuật đầu tiên của chất liệu cơ bản, nơi sinh ra những yếu tố hành động dẫn dắt phát triển. Bốn giai đoạn: **chủ đề chính – nối tiếp – chủ đề hai (phụ) – kết phần trình bày** [^nguyen-thi-nhung-2005, tr. 202].

### a. Chủ đề chính
Hiệu quả hình tượng – âm điệu cơ bản thứ nhất; gọi là "chính" vì ở nhiều mẫu cổ điển nó tích cực, nghị lực, chiếm ưu thế trong phát triển [^nguyen-thi-nhung-2005, tr. 202]. Cấu trúc [^nguyen-thi-nhung-2005, tr. 203 – 204]:
- **đoạn nhạc**, nhắc lại hay không nhắc lại, thường **kết đóng** ở điệu tính chính (chương I Sonata số 10, số 17);
- đoạn nhạc nhắc lại nhưng câu hai mở rộng, phát triển và **kết "mở"** trên hoà âm không ổn định (chương I Sonata số 21, 23) — biểu hiện tính liên tục của phát triển;
- **hai đoạn đơn** (chương kết Giao hưởng số 40 của Mozart; chương I Sonata số 15, chương kết Giao hưởng số 7 của Beethoven); **ba đoạn đơn** (chương I Giao hưởng số 7 của Beethoven; chương I Giao hưởng số 4, số 2 của Tchaikovsky); rất ít khi dạng rondo.
Chủ đề chính là yếu tố động, chứa xung đột chính (chương I Sonata số 5, 21, 23); ở overture *Coriolan* và chương I Giao hưởng số 6 của Tchaikovsky âm điệu cơ bản hình thành dần ngay trong vùng chủ đề chính [^nguyen-thi-nhung-2005, tr. 204].

### b. Nối tiếp đến chủ đề hai
Dẫn sự phát triển ra khỏi vùng chủ đề chính, chuẩn bị điệu tính và chất liệu cho chủ đề hai [^nguyen-thi-nhung-2005, tr. 205]. Trường hợp điển hình có **ba giai đoạn** [^nguyen-thi-nhung-2005, tr. 205]:
1. **Giai đoạn đầu** — còn trong ảnh hưởng chủ đề chính; nếu chủ đề chính kết mở, thường hoạ lại phần lớn chủ đề rồi phát triển không ổn định.
2. **Giai đoạn chuyển điệu** — phá ổn định, khắc phục ảnh hưởng chủ đề chính; căng thẳng hoà âm.
3. **Giai đoạn chuẩn bị chủ đề hai** — thường có **âm trì tục trên bậc át của điệu tính chủ đề hai**; có khi nhấn điệu thứ để chủ đề hai trưởng nổi bật (chương I Sonata số 23; chương I Giao hưởng số 4, số 5).

Ví dụ: nối tiếp chương I Sonata số 21 (*Waldstein*) gồm **21 ô**: 4 ô nhắc lại thay đổi 4 ô đầu chủ đề chính; 5 ô chuyển điệu căng thẳng; 12 ô trên âm trì tục bậc át của điệu tính chủ đề hai — dần giảm tích cực tiết tấu và đưa vào những chi tiết sẽ tham gia chủ đề hai [^nguyen-thi-nhung-2005, tr. 206].

::ex ptam-waldstein-chu-de-chinh | Beethoven, Sonata số 21 *Waldstein*, chương I, ô 1 – 13 — chủ đề chính, kết "mở" (bản khắc từ dữ liệu Humdrum, ấn bản Durand 1915)

::ex ptam-waldstein-noi-tiep | *Waldstein*, chương I, ô 14 – 34 — nối tiếp ba giai đoạn: 4 + 5 + 12 ô, cuối trên âm trì tục bậc át của Mi trưởng (giáo trình, thí dụ 112; bản khắc từ dữ liệu Humdrum, ấn bản Durand 1915)

Nối tiếp thường dùng chất liệu chủ đề chính, ít khi chủ đề hai; có khi chất liệu tương đối mới (chương I Sonata số 3, ô 13 – 26: passage và âm điệu *fanfare*, thiếu giai đoạn chuyển điệu) [^nguyen-thi-nhung-2005, tr. 209]. Các biến thể [^nguyen-thi-nhung-2005, tr. 209 – 210]:
- **Nhấn chuyển sang át** — chương I Sonata số 10 Sol trưởng (ô 9 – 25): giai đoạn đầu ô 9 – 14, chuyển sang Rê trưởng ô 15 – 18, giai đoạn ba ô 19 – 25 còn đẩy tới **La trưởng (át kép)**; vì vậy chủ đề hai ở Rê trưởng giải quyết được sự bất ổn tích tụ.
- **Rút ngắn giai đoạn chuyển điệu** — chương I Sonata số 23: chỉ hai hợp âm trong một ô (ô 23).
- **Bỏ giai đoạn đầu** — chương I Sonata số 8 (*Pathétique*): vào thẳng giai đoạn chuyển điệu (ô 32 – 47) đi qua các điệu tính phía hạ át (La giáng trưởng – Fa thứ – Rê giáng trưởng), rồi chuẩn bị (ô 48 – 55) cho chủ đề hai Mi giáng thứ; dàn ý phức tạp kiểu này hay gặp ở thế kỷ XIX (Sonata Si thứ của Liszt).
- **Không chia giai đoạn** — chương I Giao hưởng "Bỏ dở" của Schubert: 4 ô chỉ để báo trước chủ đề hai; chương I Giao hưởng số 3, Sonata số 32 của Beethoven đi thẳng tới chủ đề hai.
- Khi chủ đề chính **kết đóng**, có thể **không có nối tiếp** [^nguyen-thi-nhung-2005, tr. 210].

### c. Chủ đề hai (chủ đề phụ)
Thời điểm trung tâm của phần trình bày: xuất hiện **tương phản hình tượng – chủ đề cơ bản**, trở thành nhân tố hành động chính; là **bước nhảy chất lượng**, không chỉ đổi cách cấu tạo hay điệu tính. Tính sinh động của chủ đề chính và sự bất ổn của nối tiếp tìm được điểm tựa ở chủ đề hai; nó đem lại cân bằng cho phần trình bày [^nguyen-thi-nhung-2005, tr. 210 – 211].

Ví dụ: chủ đề hai chương I *Waldstein* — đồng quê, sáng, trần thuật **kiểu hợp xướng**, tiết tấu cân bằng, cấu trúc cân phương — đối lập chủ đề chính; nhưng đồng thời phát triển bước đi xuống ở ô 4 và ô 8 của chủ đề chính trong dàn ý mới, giảm tính tích cực [^nguyen-thi-nhung-2005, tr. 211].

::ex ptam-waldstein-chu-de-hai | *Waldstein*, chương I, ô 35 – 42 — chủ đề hai kiểu hợp xướng, Mi trưởng (giáo trình, thí dụ 113; bản khắc từ dữ liệu Humdrum, ấn bản Durand 1915)

Cấu trúc: luôn ở **điệu tính phụ** tới hết, rất ít chuyển điệu [^nguyen-thi-nhung-2005, tr. 212]:
- đoạn nhạc (chương I Sonata số 1, 2, 5, 14, 18, 21, 23 của Beethoven); hai đoạn đơn (chương I Sonata số 10); ba đoạn đơn (hiếm ở cổ điển, phổ biến ở lãng mạn — chương I Giao hưởng số 6 của Tchaikovsky);
- **một nhóm cơ cấu** (chương I Sonata số 4, 6, 7, 15 của Beethoven; chương I Giao hưởng số 4 của Brahms) — điển hình cho Beethoven thời đầu, bù cho tương phản chưa đủ; ở Mozart, Haydn chủ đề hai có khi bắt đầu bằng chất liệu chủ đề chính. Chương I Sonata số 1: chủ đề hai là nhóm cơ cấu, mở bằng hạt nhân chủ đề chính đảo hướng, rồi tới cơ cấu ổn định nhất (8 ô cuối có đảo phách) [^nguyen-thi-nhung-2005, tr. 213];
- rất hiếm: dạng rondo (chương III Giao hưởng số 9 của Bruckner).

**Tương phản điệu tính** giữa hai chủ đề là quy luật cơ bản, giữ vai trò hàng đầu trong cấu trúc toàn bộ; ở Haydn, Mozart còn ảnh hưởng sonata cổ, chủ đề hai có khi chỉ là chủ đề chính dời sang át (chương I Giao hưởng số 104 của Haydn) [^nguyen-thi-nhung-2005, tr. 213]. Quan hệ điệu tính [^nguyen-thi-nhung-2005, tr. 213 – 214]:

| Chủ đề chính | Chủ đề hai | Ví dụ |
|---|---|---|
| Trưởng | Át | Chương I Sonata số 2, 4, 6, 9, 10, 18, 20, 31 của Beethoven |
| Thứ | Trưởng song song | Chương I Giao hưởng số 5 của Beethoven |
| Thứ | Thứ át | Chương I Sonata Đô thứ, Giao hưởng số 40 của Mozart |
| Trưởng | Trưởng bậc III | Chương I Sonata số 16, 21 của Beethoven; Giao hưởng số 3 của Brahms |
| Thứ | Trưởng bậc VI | Chương I Sonata số 32, Giao hưởng số 9 của Beethoven; Giao hưởng số 8 của Schubert |

(Hai dòng cuối là quan hệ thời giữa và cuối của Beethoven, thời lãng mạn và nửa đầu thế kỷ XX; giáo trình còn dẫn overture *Romeo và Juliet* của Tchaikovsky và chương kết một concerto của Rachmaninov.)

Điển hình nhất là chủ đề hai **kết trọn ở điệu tính mới** — dấu hiệu chắc chắn nhất cho giới hạn của nó; có khi chủ đề hai chảy liền vào kết phần trình bày [^nguyen-thi-nhung-2005, tr. 214].

**Bước ngoặt**: thời điểm cắt đứt đột ngột sự phát triển của chủ đề hai bằng chất liệu đã có (thường là chủ đề chính — chương I Sonata số 3, 6) hoặc chất liệu mới (chương I Sonata số 10, ô 41 – 46: các nốt móc ba, sẽ tham gia phần phát triển) — đứng giữa xung đột âm điệu của hai chủ đề [^nguyen-thi-nhung-2005, tr. 214 – 215].

### d. Kết phần trình bày
Khái quát, tóm tắt những nét chính trong một khối tổng hợp, "cân bằng" và tạo ổn định [^nguyen-thi-nhung-2005, tr. 215]. Ví dụ [^nguyen-thi-nhung-2005, tr. 215 – 216]:
- chương I Sonata số 5 Đô thứ: 12 ô, chuỗi cơ cấu ngắn ổn định hoà âm;
- chương I Sonata số 10: tổng hợp chuyển động chủ đề chính và âm điệu điển hình nhất của chủ đề hai (chuyển động biến âm đi lên);
- chương I *Waldstein*: **38 ô**, khái quát hầu hết chất liệu — liên ba từ chủ đề hai, móc kép từ chủ đề chính và nối tiếp, cuối cùng là sự đổi liên tục hợp âm trưởng – thứ của chủ đề chính;
- chương I Sonata số 32: đoạn nhạc nhắc lại với phần bổ sung trên chất liệu chủ đề chính nhưng ở điệu tính chủ đề hai;
- dựa chất liệu nối tiếp (chương I Sonata số 2); rất hiếm dựa chất liệu mới (chương I Giao hưởng số 3, Concerto violin của Brahms); một nhóm cơ cấu (chương I Sonata số 7).
Ở thời kỳ đầu của sonata, khi hai chủ đề chưa tương phản mạnh (Giao hưởng số 104 của Haydn), kết phần trình bày không tóm tắt mà thường dùng chất liệu mới để bù tương phản [^nguyen-thi-nhung-2005, tr. 216].

## §3. Phần phát triển
Phần trung tâm, **"vũ đài thực sự của xung đột"** các nhân tố hành động chính; tự do trong cấu trúc và phương pháp, nhiều khi không có cấu trúc ổn định [^nguyen-thi-nhung-2005, tr. 216 – 217]. Phụ thuộc ba yếu tố [^nguyen-thi-nhung-2005, tr. 217]:
1. **Mức phát triển đã có trong trình bày** — trình bày phát triển nhiều thì phần phát triển ngắn (chương I Sonata số 7, số 8).
2. **Chất lượng chất liệu** — không phải chủ đề nào cũng hợp phát triển: phần phát triển *Waldstein* dùng chủ đề chính và kết phần trình bày, còn chủ đề hai kiểu hợp xướng không tham gia.
3. **Điều kiện lịch sử, phong cách** — ở sonata sớm và một số tác phẩm Haydn, Mozart phần phát triển ngắn, ít phát triển; phải tới thời kỳ giữa của Beethoven nó mới chiếm ưu thế về xung đột kịch tính. Giáo trình kể Beethoven, Brahms, Tchaikovsky, Shostakovich là những tài năng đặc biệt về phát triển chủ đề [^nguyen-thi-nhung-2005, tr. 217 – 218].

Hai khuynh hướng: **tăng căng thẳng** (phổ biến nhất) và **làm dịu** (ít gặp — overture *Egmont*: trình bày kịch tính, phát triển đem lại nét trữ tình, sáng) [^nguyen-thi-nhung-2005, tr. 218].

Phương pháp phổ biến nhất là **xé lẻ chất liệu**: đầu phần phát triển *Waldstein* dùng tích cực nhất hai ô thứ hai của chủ đề chính, rồi gộp hai nhân tố thành cơ cấu hỗn hợp mới, tới ô thứ bảy chỉ còn hình dạng nhân tố hai [^nguyen-thi-nhung-2005, tr. 218]. Thay đổi tính chất bằng hoà âm, nhịp điệu, cách cấu tạo: ở chương I *Appassionata*, chủ đề chính (hai nhân tố bi thương kiểu ngâm ngợi và nhân tố thứ ba "đột phá" ở ô 13 – 14) đạt kịch tính cao hơn nhờ tremolo rất nhanh, chuyển điệu liên tục khắp các âm khu, cường độ mạnh; chủ đề hai thì **sáng hơn** vì dời lên quãng 4 [^nguyen-thi-nhung-2005, tr. 220].

**Hoà âm** giữ vai trò quyết định: chuyển điệu tích cực là bản chất của phần phát triển, đi tới điệu tính xa, tránh dừng lâu ở một điệu tính [^nguyen-thi-nhung-2005, tr. 221]. Giáo trình lập dàn ý điệu tính phần phát triển chương I Sonata số 6 của Mozart; chương I Sonata số 1, số 5 (Đô thứ – Mi giáng trưởng → Đô – Fa – Si giáng – Rê giáng – Si giáng – Fa – Đô) của Beethoven; chương I *Appassionata* (Fa thứ – La giáng trưởng … → Mi – Mi thứ – Đô – La giáng – Rê giáng – Si giáng – Fa); chương I Giao hưởng số 4 của Tchaikovsky [^nguyen-thi-nhung-2005, tr. 221 – 222]. **Phức điệu** cũng thúc đẩy phát triển (chương I Giao hưởng số 3 của Beethoven, số 2 của Brahms, số 6 của Tchaikovsky) [^nguyen-thi-nhung-2005, tr. 222].

Ba giai đoạn (nhất là ở mẫu cổ điển) [^nguyen-thi-nhung-2005, tr. 222]:
1. **Giai đoạn đầu** — ít phát triển, bắc cầu, ngắn.
2. **Giai đoạn phát triển chính** — biến đổi phức tạp, sâu sắc, căng thẳng nhất.
3. **Giai đoạn chuẩn bị tái hiện** — thường **âm trì tục trên bậc át**, chuẩn bị điệu tính chính trùng với tái hiện.

Không phải phần phát triển nào cũng đủ ba giai đoạn. Chương I *Eroica*: chín làn sóng sắp xếp cân xứng, làn sóng V ở trung tâm chứa cao trào chính. Chương I Giao hưởng số 3 của Brahms thiếu giai đoạn trì tục; chương I Sonata violin số 3 của Brahms gộp tất cả vào giai đoạn chính trên **âm trì tục bậc át không đổi** ở tầng thấp nhất — hai tầng cấu tạo đối lập [^nguyen-thi-nhung-2005, tr. 222 – 223]. Phát triển căng thẳng thường dẫn tới **cao trào chính trùng đầu tái hiện** (chương I Sonata số 23, 32; Giao hưởng số 1 của Brahms; số 6 của Tchaikovsky; Concerto piano số 2 của Rachmaninov) [^nguyen-thi-nhung-2005, tr. 223].

**Đoạn chen** trong phần phát triển — chất liệu mới [^nguyen-thi-nhung-2005, tr. 223 – 224]: chương I Sonata số 5 (sau khi hoạ lại chủ đề chính, chất liệu mới ở phía hạ át: Fa thứ → Si giáng thứ → Rê giáng trưởng rồi ngược lại); chương kết Sonata Fa thứ (đoạn chen đầu phần phát triển, ba đoạn đơn a a b a b a); chương I Giao hưởng số 4 của Mendelssohn; chương I Giao hưởng số 7 của Shostakovich — cả phần phát triển là một chu kỳ biến tấu lớn. Có thể có **tái hiện giả** [^nguyen-thi-nhung-2005, tr. 224].

## §4. Phần tái hiện
Khác về bản chất với tái hiện của mọi hình thức khác: khuynh hướng căn bản là **làm dịu xung đột** giữa các hình tượng chính bằng cách hoạ lại chúng **trong điệu tính chính**, đem lại cân bằng sau phần phát triển [^nguyen-thi-nhung-2005, tr. 224]. Thứ tự giống trình bày; chủ đề hai về điệu tính chính kéo theo thay đổi nối tiếp; có khi đổi trưởng – thứ (chương I Sonata số 1, số 5) [^nguyen-thi-nhung-2005, tr. 224]. Khoảng cách hai chủ đề **rút ngắn**: nối tiếp ngắn lại (chương I Sonata số 6; chương III Sonata số 14) [^nguyen-thi-nhung-2005, tr. 224].

- Chủ đề chính đã dùng nhiều ở phần phát triển thì **rút gọn** (overture *Romeo và Juliet* của Tchaikovsky: trình bày ba đoạn đơn, tái hiện chỉ còn ngắn hơn); chủ đề chính kết đóng ở trình bày có thể kết mở ở tái hiện (chương I Sonata số 6) [^nguyen-thi-nhung-2005, tr. 225]. Thường vùng chủ đề chính và nối tiếp đổi nhiều, chủ đề hai giữ cân bằng; nhưng có khi chủ đề hai được phát triển thêm (chương I Sonata số 32) [^nguyen-thi-nhung-2005, tr. 225].
- **Ngả về hạ át**: trình bày hướng về át, tái hiện ngả về hạ át để trung hoà sức hút của át — như ở phần kết nhiều fugue và hình thức hai đoạn cổ. Có thể đặt ở nối tiếp (chương I Sonata số 10), ở chủ đề chính — tái hiện bắt đầu ở hạ át (Sonata số 15 của Mozart, overture *Coriolan*), hay ở chủ đề hai (chương I Sonata số 3: chủ đề hai bắt đầu ở trưởng hạ át; chương I Sonata số 32: cả hai chủ đề) [^nguyen-thi-nhung-2005, tr. 225 – 226].
- Dàn ý phức tạp: tái hiện *Waldstein* — chủ đề hai bắt đầu ở **La trưởng** rồi mới về Đô trưởng [^nguyen-thi-nhung-2005, tr. 226]. Rất hiếm: phần lớn tái hiện ở điệu tính phụ — chương kết Sonata số 18: chủ đề hai và phần sau ở một điệu tính phụ (bản OCR đọc như "Ges-dur" — Sol giáng trưởng), rồi chủ đề chính trở lại cùng lúc với Mi giáng trưởng [^nguyen-thi-nhung-2005, tr. 226].
- **Tái hiện có động lực**: căng thẳng cao hơn, mãnh liệt hơn, thường là kết quả của phần phát triển; mẫu đầy đủ — chương I Giao hưởng số 9 của Beethoven [^nguyen-thi-nhung-2005, tr. 226].

## §5. Coda
Ở nhiều sonata Haydn, Mozart và Beethoven thời đầu, quan hệ hình tượng chưa phức tạp nên **không có coda**; coda thành phần không thể thiếu ở Beethoven thời thành thục, và khi xung đột mở rộng thì lớn tới mức **một phần chính** (chương I Sonata số 21, 23; Giao hưởng số 5 của Beethoven; Giao hưởng số 4 của Brahms; Giao hưởng số 9 của Bruckner) [^nguyen-thi-nhung-2005, tr. 227]. Coda không chỉ tổng hợp mà còn biến đổi chất liệu; coda lớn có ba giai đoạn: **đầu** (liên quan cuối tái hiện) – **phát triển** (không ổn định điệu tính) – **cuối** (coda thực sự, ổn định, kết hoàn toàn) [^nguyen-thi-nhung-2005, tr. 227].

- Coda là nơi khẳng định tư tưởng chính và có thể chứa **cao trào chính** (chương I Giao hưởng số 4 của Brahms). Ở chương I Giao hưởng số 5 của Beethoven, chủ đề hai trữ tình được bổ sung nét bi thương [^nguyen-thi-nhung-2005, tr. 228].
- **Coda chương I *Appassionata***: dài bằng phần trình bày; giai đoạn đầu chỉ 1 ô, giai đoạn phát triển chiếm 33/38 ô, lần lượt phát triển chủ đề chính, chủ đề hai, kết phần trình bày; nhắc **Rê giáng trưởng** — điệu tính trung tâm phần phát triển; tương phản hai chủ đề còn sâu hơn ở phần phát triển; giai đoạn cuối, chủ đề hai trở lại ở thứ, rất nhanh, mang tính bi hùng — vốn là bản chất của chủ đề chính [^nguyen-thi-nhung-2005, tr. 227 – 228].

**Tư liệu phân tích** (giáo trình) [^nguyen-thi-nhung-2005, tr. 228 – 229]: Haydn — chương I các sonata piano; Mozart — chương I Sonata piano số 5, 6, 12, 14, 17, 19; chương I Giao hưởng số 35, 36, 39, 40, 41; Beethoven — overture *Egmont*, *Coriolan*; chương I Giao hưởng số 1, 5, 6, 7; chương kết Sonata số 14, 23; chương I Sonata violin số 2, 8, 9; chương I Tứ tấu Op. 18, Op. 59 số 1.

## §6. Hình thức sonata trong âm nhạc lãng mạn và cận đại
Những thay đổi bắt đầu từ Beethoven thời cuối được các thế hệ sau phát triển [^nguyen-thi-nhung-2005, tr. 229]:
- Các phần và yếu tố có **ý nghĩa biểu hiện độc lập hơn**, quan hệ chức năng giữa chúng yếu đi; motif riêng ngự trị trong chủ đề làm cấu trúc kém rõ, ranh giới trình bày – phát triển mờ đi (chương I Sonata violin số 3 của Grieg; Giao hưởng số 8 của Bruckner).
- Beethoven thời cuối (Sonata số 28, 31; Tứ tấu số 12, 13) tăng **biến tấu chất liệu**; và **phức điệu** thành đường nét cơ bản của chủ đề sonata (chương I và chương kết Sonata số 29, 32; chương I Giao hưởng số 9). Khuynh hướng thứ nhất dẫn tới sonata lãng mạn; khuynh hướng thứ hai tiếp tục ở Brahms và nhất là thế kỷ XX (Hindemith…) [^nguyen-thi-nhung-2005, tr. 229 – 230].

**Sonata lãng mạn** [^nguyen-thi-nhung-2005, tr. 230 – 232]:
- **Chủ đề ca xướng** là đặc trưng — ở Schubert chủ đề lớn tới mức một bài ca hoàn chỉnh. Chương I Giao hưởng "Bỏ dở": nối tiếp và kết phần trình bày giảm hẳn, trình bày chia hai khối lớn (chủ đề chính – chủ đề hai) gần nhau về hình tượng, thiếu tương phản; bù lại, phần mở đầu là chất liệu độc lập kịch tính. Từ đó dàn ý ba yếu tố: **dẫn tự (épigraphe) – chủ đề chính – chủ đề hai**.
- Tchaikovsky (chương I Giao hưởng số 4, 5): chủ đề chính ba đoạn đơn có tái hiện động; nối tiếp và kết phần trình bày phát triển thành **chủ đề độc lập**.
- Brahms: kết phần trình bày thành **nhân tố hành động** mạnh (chương I Giao hưởng số 3, Concerto piano số 2); chủ đề hai phức tạp kéo theo dàn ý điệu tính phức tạp (chương I Giao hưởng số 4).
- **Dẫn tự** có khi thành chủ đề hoàn chỉnh (Giao hưởng số 8 của Schubert), khi là cơ cấu ngắn (chương I Sonata Si giáng thứ của Chopin), khi là khối hợp âm (Giao hưởng số 3 của Brahms), và được phát triển cả trong phần phát triển.
- **Đổi mới tái hiện**: tái hiện tiếp tục phát triển chất liệu, gánh cả chức năng phát triển (chương I Giao hưởng số 6 của Tchaikovsky; Giao hưởng số 8, 9 của Bruckner) [^nguyen-thi-nhung-2005, tr. 232].

**Thế kỷ XX — Shostakovich** (chương I Giao hưởng số 1, 5, 7, 8, 10) [^nguyen-thi-nhung-2005, tr. 232 – 236]:
- Trình bày giữ **một kết cấu tình cảm chung**, chủ đề hai không tạo bước nhảy chất lượng; nhịp độ chậm, ít tương phản trưởng – thứ (điệu tính hai chủ đề: Giao hưởng số 5 Rê thứ – Mi giáng; số 8 Đô thứ – Mi giáng…). Trình bày gồm **dẫn tự, chủ đề chính, chủ đề hai**; dẫn tự là động cơ tích cực của cả hình thức.
- Chủ đề chính phát triển rộng, **phức điệu** sâu, giao cho âm sắc cùng loại; không cần nối tiếp (ở Giao hưởng số 8, sự nhắc lại chủ đề chính đóng vai nối tiếp).
- **Tương phản cơ bản dời ra giữa phần trình bày và phần phát triển**, không còn giữa hai chủ đề — "hiện tượng mới". Phần phát triển đến sau một **bước ngoặt đột ngột**: ở Giao hưởng số 7 là chủ đề mới (chủ đề "xâm lược"), ở số 5, 8, 10 là sự biến đổi tận gốc chất liệu. Phần phát triển gồm nhiều làn sóng, nhịp độ có vai trò kịch tính; ghép các yếu tố của hai chủ đề thành chủ đề hỗn hợp (Giao hưởng số 5).
- **Cao trào tái hiện động** (Giao hưởng số 5, 7, 8, 10) dẫn sang giai đoạn phát triển mới; ở Giao hưởng số 8, sau cao trào là độc thoại cor anglais — biến tấu mới của chủ đề chính tổng hợp dẫn tự; coda không khép mà để ngỏ sang các chương sau.
- Khuynh hướng khác: phát triển và tái hiện **gộp thành một phần**, như sonata cổ — chương I Concerto cho dàn nhạc của Bartók, một chương giao hưởng của Shostakovich, chương I giao hưởng *Mathis der Maler* của Hindemith [^nguyen-thi-nhung-2005, tr. 236 – 237].

**Sonata trong âm nhạc Việt Nam** [^nguyen-thi-nhung-2005, tr. 237 – 239]:
- Chủ đề xây từ âm điệu dân gian hay ca khúc quen thuộc: chương I Giao hưởng số 1 *Quê hương* (Hoàng Việt) dùng âm điệu *Hội nghị Diên Hồng*, *Lên đàng*, *Nam bộ kháng chiến* và nhạc dạo *Chiến thắng Điện Biên Phủ* cho chủ đề mở đầu, chủ đề chính, chủ đề hai và coda; tương tự thơ giao hưởng *Lửa cách mạng* (Trần Ngọc Xương), *Tháng Tám lịch sử* (Doãn Nho), *Người về đem tới ngày vui* (Trọng Bằng), *Khát vọng* cho cello và dàn nhạc (Hoàng Dương), tổ khúc *Non sông một dải* (Nguyễn Xinh), các giao hưởng của Nguyễn Văn Nam.
- Quan hệ điệu tính ngoài kiểu kinh điển: một sonata của Nguyễn Đức Toàn — chủ đề chính Si giáng thứ, chủ đề hai Fa trưởng.
- Trình bày thành hai khối đối lập, yếu nối tiếp và kết (*Tháng Tám lịch sử*, *Thánh Gióng* của Doãn Nho; *Khát vọng* của Nguyễn Thị Nhung); phần phát triển sinh chủ đề mới (*Người về đem tới ngày vui*; chương *Huyền thoại máu* trong giao hưởng *Tượng đài vô danh* của Đức Trịnh; *Concerto – Fantaisie* cho violin của Nguyễn Phúc Linh).
- Phức điệu kế thừa lối **lòng bản** của hoà tấu cổ truyền — các bè phát triển theo chiều ngang, gặp nhau theo chiều dọc "ngẫu nhiên", tạo nhiều tầng giai điệu (giao hưởng của Nguyễn Văn Nam; Đàm Linh, Trần Trọng Hùng, Vĩnh Cát, Doãn Nho, Đỗ Hồng Quân, Ca Lê Thuần, Nguyễn Xinh); fugato trong phần phát triển (chương I Giao hưởng số 1 của Vĩnh Cát; *Người về đem tới ngày vui*; *Khát vọng*).
- Hoà âm: ngũ cung, đa điệu ngũ cung (Concerto violin của Đỗ Hồng Quân), quãng 4 làm động lực (*Non sông một dải*), hợp âm chồng quãng 4 (*Tổ quốc tôi* của Nguyễn Đình Lượng); tiết tấu (*Đồng khởi* của Nguyễn Văn Thương). Tái hiện thường tiếp tục phát triển (*Đồng khởi*); có tác phẩm sonata cấu trúc tự do (chương I tổ khúc *Miền Nam tuyến đầu* của Chu Minh; chương I giao hưởng *Trở về Điện Biên* của Trần Trọng Hùng) [^nguyen-thi-nhung-2005, tr. 239].

**Tư liệu** [^nguyen-thi-nhung-2005, tr. 240]: Grieg — chương I Sonata piano; Schubert — chương I Sonata Op. 42, Op. 53, Giao hưởng Si thứ và Đô trưởng; Schumann — chương I Sonata Sol thứ, Concerto piano; Chopin — chương I Sonata Si giáng thứ, Si thứ; Concerto Mi thứ, Fa thứ; Mendelssohn — Concerto violin; Tchaikovsky — chương I Giao hưởng số 4, 5, 6, Concerto piano Si giáng thứ, Serenade cho dàn dây; Prokofiev — chương I Giao hưởng số 6, 7; Shostakovich — chương I Giao hưởng số 1, 5, 7, 8, 10; Hoàng Việt — *Quê hương*; Chu Minh — *Miền Nam tuyến đầu*; Trần Ngọc Xương — *Lửa cách mạng*; Nguyễn Xinh — *Non sông một dải*; Nguyễn Văn Nam — chương I Giao hưởng số 3, 4, 5, 7; Vĩnh Cát — chương I Giao hưởng số 1; Nguyễn Đình Tấn — chương I giao hưởng *Cây đuốc sống*.

## §7. Những trường hợp đặc biệt của hình thức sonata
Khi phân tích phải giữ những dấu hiệu đầu tiên của sonata, vai trò dàn dựng cơ bản của nó, và tính chất lịch sử – phong cách [^nguyen-thi-nhung-2005, tr. 241].

| Trường hợp | Đặc điểm theo giáo trình | Ví dụ |
|---|---|---|
| **a. Không có phần phát triển** | Hay ở chương chậm — chủ đề ca xướng, ít tương phản, đã cạn khả năng ở trình bày; chỉ còn trình bày – tái hiện (coda), có khi nối ngắn; tái hiện thường là biến tấu trang sức; ít nối tiếp và kết nên hai chủ đề đối chiếu tương phản [^nguyen-thi-nhung-2005, tr. 241 – 242] | Chương II Sonata số 5, số 7 và một concerto piano của Beethoven; Giao hưởng số 9 của Shostakovich; chương I Sonata violin của Franck; chương I Giao hưởng số 5 của Honegger (chủ đề hai nhắc ba lần kiểu biến tấu, lần thứ ba như phần phát triển, tới cao trào tái hiện giả). Cả ở nhịp độ nhanh: overture *Đám cưới Figaro*, chương II Giao hưởng số 8 của Beethoven, chương III Giao hưởng số 6 của Tchaikovsky [^nguyen-thi-nhung-2005, tr. 242 – 243] |
| | Việt Nam | Thơ giao hưởng *Tháng Tám lịch sử* (Doãn Nho): mở đầu từ điệu *Lâm thâm* (Chèo); khối chính gồm chủ đề phát xít Nhật và chủ đề thực dân Pháp; nối tiếp có chủ đề cách mạng từ *Hội nghị Diên Hồng* và *Du kích ca*; chủ đề hai — hình tượng nhân dân — từ điệu *Xẩm* (*Tháng Xuân đến*) trong hát then Tày; tái hiện có chủ đề mới, gần tổ khúc. Chương I *Trở về Điện Biên* (Trần Trọng Hùng): chủ đề chính La thứ hai nhân tố (giọng nữ cao; tiếng gió từ dân ca Thái), chủ đề hai Rê thứ kêu gọi, tái hiện từ ô 47 cả hai chủ đề ở La thứ [^nguyen-thi-nhung-2005, tr. 243 – 244] |
| **b. Tái hiện ngược hướng** (chủ đề hai trước) | Do phần phát triển: chủ đề tích cực hơn ở phần phát triển đòi đổi thứ tự [^nguyen-thi-nhung-2005, tr. 244] | *Les Préludes* của Liszt; chương I Giao hưởng số 1 của Shostakovich; chương I Concerto piano số 4 của Rachmaninov và Ballade số 1 của Chopin (các chủ đề còn giữ điệu tính ban đầu); chương I Giao hưởng số 1 của Vĩnh Cát; chương I *Cây đuốc sống* (Nguyễn Đình Tấn); concerto *Tuổi trẻ* (Chu Minh), *Bất khuất* (Đỗ Dũng), thơ giao hưởng *Nữ anh hùng miền Nam* (Nguyễn Thị Nhung), sonata một chương cho piano (Trần Tất Toại) [^nguyen-thi-nhung-2005, tr. 244 – 245] |
| **c. Đoạn chen trong phần phát triển** | Chất liệu mới; có khi căng thẳng như phần phát triển [^nguyen-thi-nhung-2005, tr. 245] | Chương kết Sonata số 1, chương chậm Sonata số 7 của Beethoven; chương chậm Concerto piano số 1 của Brahms (đoạn chen hai đoạn đơn Si thứ bù cho thiếu tương phản); chương I Giao hưởng số 7 *Leningrad* của Shostakovich (rõ nhất); concerto *Tuổi trẻ* (Chu Minh), *Tổ quốc tôi* (Nguyễn Đình Lượng) [^nguyen-thi-nhung-2005, tr. 245 – 246] |
| **d. Hoạ lại đồng thời các chủ đề** trong tái hiện | Ít gặp: các chủ đề chồng lên thành khối phức điệu | Overture *Những ca sĩ bậc thầy thành Nuremberg* của Wagner; chương I *Non sông một dải* (Nguyễn Xinh) — chủ đề hai lồng vào chủ đề chính với trường độ gấp đôi; chương II Giao hưởng *Quê hương* (Hoàng Việt) [^nguyen-thi-nhung-2005, tr. 246 – 247] |
| **e. Tái hiện bỏ một chủ đề** | Thường bỏ chủ đề chính vì đã cạn ở phần phát triển [^nguyen-thi-nhung-2005, tr. 247] | Chương I Sonata Si giáng thứ và Si thứ của Chopin; chương I Concerto cello của Dvořák; chương *Lời mẹ ru* trong Giao hưởng số 5 *Mẹ Việt Nam* (Nguyễn Văn Nam); bỏ chủ đề hai: chương I Concerto violin số 1 của Prokofiev [^nguyen-thi-nhung-2005, tr. 247] |
| **g. Thay chủ đề bằng chủ đề mới** | Chủ yếu ở nhạc có tiêu đề | *Don Juan* của R. Strauss — bốn chủ đề, chủ đề thứ tư (xuất hiện ở phần phát triển) thay chủ đề hai trong tái hiện; *Tượng đài vô danh* (Đức Trịnh), chương *Huyền thoại máu* [^nguyen-thi-nhung-2005, tr. 247 – 248] |
| **h. Chương I concerto nhạc cụ** | Hai lần trình bày (lần một cho dàn nhạc, gọn, ở điệu tính chính — truyền thống từ Mozart; lần hai phát triển hơn, nhiều passage); đoạn chuyển của dàn nhạc; **cadenza** — ở concerto cổ điển giữa tái hiện và coda, ở thời lãng mạn thường giữa phát triển và tái hiện, có khi ngay đầu (Concerto piano số 5 của Beethoven); sau Mendelssohn lần trình bày thứ nhất thường bị bỏ, thay bằng mở đầu ngắn (Concerto piano của Schumann) [^nguyen-thi-nhung-2005, tr. 248 – 250] | Concertino của Ca Lê Thuần — cadenza 18 ô cuối phần phát triển trên âm hưởng **vọng cổ**; *Tuổi trẻ* (Chu Minh); *Tổ quốc tôi* (Nguyễn Đình Lượng) — cadenza chiếm cả phần tái hiện; Sonata violin – piano của Nguyễn Thị Nhung — cadenza là cả phần mở đầu; ballade *Thị Kính – Thị Mầu* (Nguyễn Đình Bảng) — bộ gõ Chèo tấu khổ *Trống Thượng Đình* như một cadenza [^nguyen-thi-nhung-2005, tr. 250 – 251] |

## Tư liệu trong thư viện
[[phan-tich-sonata-k545]], [[phan-tich-sonatina-clementi-op36-1]], [[phan-tich-anh-trang-chuong-1]] (chương I *Ánh trăng*), [[phan-tich-scriabin-sonata-so-2]].

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-sonata]] — phần trình bày, phát triển, tái hiện, các biến thể, sonata thế kỷ 19 – 20 theo Sposobin, Mazel, Asafyev.

## Câu hỏi và bài tập
1. Vì sao chủ đề hai là "bước nhảy chất lượng" của phần trình bày?
2. Phân tích ba giai đoạn nối tiếp trong chương I *Waldstein*.
3. Lập bảng điệu tính hai chủ đề cho chương I năm sonata của Beethoven.
4. Phần phát triển phụ thuộc vào ba yếu tố nào? Áp dụng cho chương I Sonata số 8.
5. Vì sao tái hiện "ngả về hạ át"?
6. Ở Shostakovich, tương phản cơ bản nằm ở đâu?
7. Cadenza đứng ở đâu trong concerto cổ điển và lãng mạn?`,
  },
  {
    slug: 'ptam-rondo-sonata',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, IX. Hình thức rondo – sonata',
    category: 'analysis',
    aliases: ['rondo – sonata', 'rondo sonata'],
    summary: 'Chương IX Phần thứ hai giáo trình Nguyễn Thị Nhung: rondo – sonata — tổng hợp rondo (chủ đề chính trở lại ít nhất ba lần) và sonata (hai chủ đề với quan hệ điệu tính xác định); sơ đồ A B A – C – A B A coda; nét rondo hay nét sonata trội; cấu trúc đặc biệt (thêm đoạn chen, bỏ lần A thứ ba, chủ đề biến hoá); rondo – sonata lãng mạn, cận đại và Việt Nam.',
    refs: [NHUNG_REF],
    body: `## §1. Định nghĩa. Sơ đồ chung
Rondo – sonata là **hình thức tổng hợp** của rondo và sonata, nhận dấu hiệu điển hình nhất của mỗi bên: của rondo là **chủ đề chính trở lại có chu kỳ, ít nhất ba lần**; của sonata là **trần thuật và tái hiện hai chủ đề** trong quan hệ điệu tính xác định [^nguyen-thi-nhung-2005, tr. 252].

| Rondo | A | B | A | C | A | B | A | Coda |
|---|---|---|---|---|---|---|---|---|
| Sonata | Chủ đề chính | Chủ đề hai | Chủ đề chính | Đoạn chen / phát triển | Chủ đề chính | Chủ đề hai | (Chủ đề chính) | |

Quan hệ điệu tính A – B ở đầu và A – B ở cuối giống quan hệ chủ đề chính – chủ đề hai của sonata. Lần cuối của chủ đề chính nhiều khi có thể bỏ, không quyết định; có khi được phát triển trong coda [^nguyen-thi-nhung-2005, tr. 252].

## §2. Cấu trúc
Tuỳ tác phẩm, nét rondo hay nét sonata trội hơn [^nguyen-thi-nhung-2005, tr. 253]:
- **Nét rondo trội**: trước hết về thể loại, rồi các passage trong nối tiếp, tương phản tập trung quanh **đoạn chen trung tâm C** — chương kết Sonata piano số 2, 3; Concerto piano số 1, 2, 3 và Concerto violin của Beethoven; chương III Tứ tấu dây *Tây Nguyên* (Đỗ Nhuận).
- **Nét sonata trội**: đoạn chen C thành **phần phát triển** thay cho chất liệu tương phản, nối tiếp phát triển, phần trình bày có giai đoạn kết — chương kết Giao hưởng số 2 của Beethoven; Giao hưởng số 2, số 3 của Brahms; nhất là chương I Sonata violin số 1, 2 của Brahms; chương III *Ngày toàn thắng niềm vui và nỗi buồn* trong Giao hưởng số 1 của Vĩnh Cát.

## §3. Cấu trúc đặc biệt
[^nguyen-thi-nhung-2005, tr. 253 – 254]
- **Thêm đoạn chen**: chương kết Concerto violin số 5 của Mozart — A B A C A D A B A coda.
- **Bỏ lần A thứ ba**: chương kết Giao hưởng số 3 của Brahms.
- Chương kết **Concerto piano số 4** của Beethoven: bỏ lần A thứ ba **và** B trở lại thêm một lần (A – nối – B – A – C – B – A – B – cadenza – coda; Sol trưởng, B lần đầu ở Rê trưởng); chủ đề hai trình bày ba lần, được thêm vai trò thứ hai trong cấu trúc.
- **Chủ đề biến hoá** như biến khúc (chương kết Sonata số 2 của Beethoven), có khi đổi cả cấu trúc (chương kết Concerto piano số 4).
- **Coda** thường tổng hợp, có thể dùng chất liệu đoạn chen C.

## §4. Rondo – sonata trong âm nhạc lãng mạn, cận đại
Ít gặp ở âm nhạc lãng mạn; chủ đề chính có thể trở lại ở điệu tính phụ (chương kết Sonata piano của Schumann). Chương kết **Concerto piano số 1** của Brahms phức tạp hơn mẫu cổ điển: đoạn chen C trở lại ở **trưởng của điệu tính chính**, rồi chủ đề chính trong coda cũng ở trưởng (Rê thứ … Rê trưởng) — C cùng lần cuối của A tạo một hiệu quả điệu tính mới ở giai đoạn kết [^nguyen-thi-nhung-2005, tr. 254 – 255].

Thế kỷ XX: chương kết Sonata piano số 6 của Prokofiev, chương kết Giao hưởng số 9 của Shostakovich có sơ đồ khác hẳn [^nguyen-thi-nhung-2005, tr. 255]. **Việt Nam**: chương kết Giao hưởng số 1 của Vĩnh Cát — A B A1 C A2 B1 coda; chương II *Hồi tưởng* trong *Non sông một dải* (Nguyễn Xinh) — tái hiện đưa **chủ đề hai lên trước** chủ đề chính, và phần phát triển nối thẳng vào chủ đề hai [^nguyen-thi-nhung-2005, tr. 255].

## Tư liệu phân tích (theo giáo trình)
[^nguyen-thi-nhung-2005, tr. 256] Mozart — chương kết Sonata piano số 7, 9, 13, 17; Beethoven — chương kết Sonata piano số 2, 3, 4, 8; Sonata violin Op. 12 số 1, 2; Giao hưởng số 2; Schumann — chương kết Concerto piano; Brahms — chương kết Concerto kép cho violin và cello; Prokofiev — chương kết Sonata piano số 4.

Trong thư viện: [[phan-tich-pathetique-chuong-3]] (chương kết Sonata số 8 — có trong danh mục).

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-rondo-sonata]] — lần hai của phần chính, episode giữa, đưa phát triển vào rondo – sonata, lịch sử theo Sposobin và Mazel.

## Câu hỏi
1. Rondo – sonata lấy gì của rondo, gì của sonata?
2. Khi nào nét sonata trội? Kiểm trên chương kết Giao hưởng số 2 của Beethoven.
3. Vẽ sơ đồ chương kết Concerto piano số 4 của Beethoven.`,
  },
  {
    slug: 'ptam-hai-doan-co-va-sonata-co',
    title: 'Phân tích tác phẩm âm nhạc — Phần II, X. Hình thức hai đoạn cổ và hình thức sonata cổ',
    category: 'analysis',
    aliases: ['hai đoạn cổ', 'sonata cổ', 'hình thức hai đoạn cổ', 'Scarlatti sonata'],
    summary: 'Chương X Phần thứ hai giáo trình Nguyễn Thị Nhung: hai đoạn cổ (cuối thế kỷ XVI – đầu XVII, hoàn thiện ở Bach, Handel): phần một đoạn nhạc phát triển phức điệu đi tới át, phần hai dài gấp hai – ba, ngả về hạ át rồi về chủ, kết phần một trở lại ở điệu tính chính; sonata cổ (Scarlatti): hai phần — trình bày (chủ đề chính, nối tiếp, chủ đề hai, kết) và phát triển – tái hiện chỉ tái hiện chủ đề hai và kết.',
    refs: [NHUNG_REF],
    body: `## §1. Hình thức hai đoạn đơn cổ
**Định nghĩa.** Một trong những hình thức hình thành sớm nhất; gắn với thành tựu trước Bach và Handel nhưng hoàn thiện nhất ở họ; chứa tiền đề của sonata cổ và qua đó của sonata cổ điển [^nguyen-thi-nhung-2005, tr. 257]. Gắn với **tổ khúc cổ** và một số hình thức phức điệu — có ở invention của Bach và cả vài fugue. Xuất hiện cuối thế kỷ XVI – đầu XVII; hai phần, mỗi phần thường **nhắc lại**: ‖: A :‖: B :‖ [^nguyen-thi-nhung-2005, tr. 257].

**Phần thứ nhất** là một đoạn nhạc, nhiều khi khó chia bộ phận vì phức điệu phát triển mạnh; có khi là đoạn nhạc trình bày gần các dạng chủ điệu (Menuet II trong Tổ khúc Pháp số 1 của Bach), có khi là đoạn nhạc mở rộng (Courante, Sarabande trong Partita số 6). Đặc trưng là những đường nét liên tục ở các bè với tiết tấu đa dạng; điệu tính đi từ chính tới **át**, kết thường không hoàn toàn. Ở vài tác phẩm Bach, điệu tính át đến cùng một chuyển động tiết tấu mới tạo tương phản (Courante, Partita số 6) — đầu mối của hai chủ đề trong phần trình bày sonata sau này [^nguyen-thi-nhung-2005, tr. 260] (ví dụ chính của giáo trình: Allemande, Tổ khúc Anh số 3).

**Phần thứ hai** phát triển chất liệu phần một, dài **gấp hai, ba lần**; vừa phát triển vừa kết cả hình thức. Hai ô kết của phần một trở lại ở cuối phần hai **ở điệu tính chính** — chi tiết quyết định cho sự nảy sinh tái hiện ở sonata cổ [^nguyen-thi-nhung-2005, tr. 263]. Đường đi: từ điểm cuối phần một tới không ổn định, chuyển điệu, đạt **điệu tính hạ át** rồi về chính; khuynh hướng hạ át thường ở nửa sau phần hai (Courante, Partita số 6: vùng hạ át phát triển mạnh, cả bậc VI và bậc II). Khuynh hướng hạ át tạo chức năng lôgic rõ, thừa hưởng từ phức điệu, và sẽ là một điểm tựa của hầu hết các hình thức sau [^nguyen-thi-nhung-2005, tr. 263].

::form A_(T→D):1 B_(D→S→T):2 | Hai đoạn cổ: phần một đi tới át, phần hai dài hơn, ngả về hạ át rồi về chủ

## §2. Hình thức sonata cổ
**Định nghĩa.** Gắn chặt với hai đoạn cổ: hai phần với chức năng tương tự (phần hai phức tạp hơn); phần một trình bày chất liệu chủ đề; cả hai hình thức đi từ điệu tính chính tới át (hiếm: từ thứ sang trưởng song song). Nhưng hai đoạn cổ phát triển **một chủ đề**, còn sonata cổ có **hai chủ đề** — dù thường thiếu tương phản mạnh — và nhiều khi có nối tiếp, kết phần trình bày [^nguyen-thi-nhung-2005, tr. 264]. Ở phần hai, nửa đầu phát triển căng thẳng, nửa sau kết; cả hai đều có khuynh hướng hạ át (còn giữ trong nhiều sonata cổ điển). Khác biệt then chốt: ở hai đoạn cổ, nửa sau phần hai chỉ **tái hiện điệu tính**; ở sonata cổ có **tái hiện chất liệu chủ đề** rõ, trùng tái hiện điệu tính [^nguyen-thi-nhung-2005, tr. 264].

| Hình thức | Phần một | Phần hai |
|---|---|---|
| Hai đoạn cổ | T → D | không ổn định → T |
| Sonata cổ | Chủ đề chính (T) – chủ đề hai (D) | không ổn định – **chủ đề hai (T)** |

[^nguyen-thi-nhung-2005, tr. 265]

Ví dụ: Allemande trong Tổ khúc Pháp Sol trưởng của Bach — 6 ô kết bổ sung của phần một trở lại ở cuối phần hai ở điệu tính chính; cấu trúc tương tự ở Sonata số 11 (Đô thứ) của **Scarlatti**: năm ô cuối phần một trở lại ở phần hai, chuyển về điệu tính chính, có giá trị như **chủ đề hai**; năm ô giữa phần một là một cơ cấu chuyển điệu như nối tiếp [^nguyen-thi-nhung-2005, tr. 265 – 266].

**Cấu trúc sonata cổ** (nhiều sonata của Scarlatti) [^nguyen-thi-nhung-2005, tr. 266 – 268]:

| Phần trình bày | | | | Phát triển – tái hiện | | | |
|---|---|---|---|---|---|---|---|
| Chủ đề chính | Nối tiếp | Chủ đề hai | Kết | Chủ đề chính (biến đổi) | Nối tiếp | Chủ đề hai | Kết |
| Điệu tính chính | Chuyển điệu | Điệu tính phụ | Điệu tính phụ | Từ điệu tính phụ | Chuyển về chính | Điệu tính chính | Điệu tính chính |

- Chỉ **hai phần**: trình bày và phát triển – tái hiện; phát triển và tái hiện không độc lập; **tái hiện chỉ phục hồi chủ đề hai và kết**, chủ đề chính không trở lại [^nguyen-thi-nhung-2005, tr. 266, 268].
- **Chủ đề chính** sống động, thường là đoạn nhạc 8 – 16 ô, một điệu tính, kết đủ; có khi nhắc lại (Sonata số 38), có khi kết ở át [^nguyen-thi-nhung-2005, tr. 266].
- **Nối tiếp** là cơ cấu mô tiến ngắn, ít nét mới, đưa tới điệu tính chủ đề hai; hiếm khi phát triển (Sonata số 35: chủ đề chính 14 ô, nối tiếp 40 ô…) [^nguyen-thi-nhung-2005, tr. 266 – 267].
- **Chủ đề hai** thường hoạ lại yếu tố chủ đề chính ở át, không tương phản mạnh (Sonata số 2); rất hiếm chủ đề tương phản (Sonata số 29) [^nguyen-thi-nhung-2005, tr. 267].
- **Kết phần trình bày** đôi khi có chất liệu mới (như ở vài sonata Haydn, Mozart) và không có chức năng tóm tắt [^nguyen-thi-nhung-2005, tr. 267].
- **Phần hai** bắt đầu bằng chủ đề chính biến đổi ở điệu tính kết của phần trình bày, tạo cân xứng [^nguyen-thi-nhung-2005, tr. 268].

Giáo trình kết: sonata cổ ít được nghiên cứu, nhưng cần hiểu vì những nguyên tắc cơ bản của **tính kịch sonata** bắt nguồn từ đây [^nguyen-thi-nhung-2005, tr. 268].

## Tư liệu phân tích (theo giáo trình)
[^nguyen-thi-nhung-2005, tr. 268] Bach — các chương trong Tổ khúc Pháp, Tổ khúc Anh; Fugue Rê thứ, *Clavier bình quân* tập I; Scarlatti — các sonata cho clavier; Mozart — một chương sonata piano.

Trong thư viện: [[phan-tich-invention-so-1]], [[phan-tich-minuet-sol-truong]].

## Tài liệu tham khảo của giáo trình
Giáo trình liệt kê [^nguyen-thi-nhung-2005, tr. 269]: một cuốn *Hình thức âm nhạc* (1947; tái bản lần 5, Moskva 1972 — tên tác giả mờ trong bản quét, theo năm in nhiều khả năng là Sposobin); Asafyev, *Hình thức âm nhạc như quá trình* (Moskva 1971); P. Stoyanov, *Phân tích tác phẩm âm nhạc* (Sofia 1969), *Hình thức âm nhạc bao gồm những phần tương phản*, *Mối quan hệ giữa các hình thức âm nhạc* (Sofia 1975); A. Sokolov, *Sáng tác âm nhạc thế kỷ XX: phép biện chứng sáng tạo*; các sách của chính tác giả (*Hình thức âm nhạc*, *Thể loại âm nhạc*, *Âm nhạc thính phòng và giao hưởng Việt Nam*) và *Âm nhạc mới Việt Nam: tiến trình và thành tựu* (Viện Âm nhạc 2000). Người biên soạn đọc được Asafyev (bản 1971) và Sokolov (bản 2004); xem [[phan-tich-tac-pham-am-nhac-lo-trinh]].

## Đọc thêm (trường phái Nga)
[[hinh-thuc-nga-sonata-co-va-hai-phan-co]] — hai đoạn cổ, sonata cổ, sự ra đời của tái hiện trọn, concerto cổ, điệu nhảy cổ.

## Câu hỏi
1. Hai đoạn cổ khác hai đoạn đơn (chương II) ở những điểm nào?
2. Chi tiết nào ở hai đoạn cổ báo trước tái hiện của sonata?
3. Vì sao tái hiện của sonata cổ chỉ có chủ đề hai?`,
  },
]
