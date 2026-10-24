import type { Article } from '../wiki'
import { RU_FORM_REFS } from './formru-refs'

export const formRuC: Article[] = [
  {
    slug: 'hinh-thuc-nga-doan-nhac',
    title: 'Đoạn nhạc (период) — trường phái Nga',
    category: 'form',
    aliases: [
      'đoạn nhạc',
      'период',
      'предложение',
      'câu nhạc',
      'đoạn nhạc phức',
      'сложный период',
      'đoạn nhạc chuyển giọng',
      'модулирующий период',
      'mở rộng đoạn nhạc',
      'расширение',
      'дополнение',
      'наложение',
      'dân ca Nga',
      'период единого строения',
      'chủ đề âm nhạc',
    ],
    summary:
      'Đoạn nhạc (период) là hình thức nhỏ nhất trình bày trọn một ý nhạc trong âm nhạc chủ điệu, thường gồm hai câu kết bằng hai kết khác nhau. Bài gộp Sposobin (ch. I–II) và Mazel (ch. V) theo chủ đề: định nghĩa, câu – câu nhỏ – motif, một giọng và chuyển giọng, hai/ba câu hoặc không chia, vuông và không vuông, các dạng phức tạp (đoạn lớn, đoạn phức, mở rộng, bổ sung, rút gọn, chồng ghép), đoạn nhạc như tác phẩm độc lập, và cấu trúc dân ca Nga. Asafyev được dẫn ở những chỗ ông bàn về tính vuông và về "sơ đồ".',
    refs: RU_FORM_REFS,
    body: `
## Vị trí của đoạn nhạc trong hệ thống hình thức

Trong cả ba cuốn sách được gộp ở đây, đoạn nhạc (период) là "viên gạch" đầu tiên của các hình thức chủ điệu. Sposobin đặt nó ngay ở chương I, sau phần dẫn nhập về các phương tiện và chức năng; Mazel đặt nó ở chương V, ngay sau mục bàn về chủ đề (тема), vì với ông đoạn nhạc trước hết là *hình thức trình bày chủ đề*. Asafyev không có chương riêng cho đoạn nhạc; ông nhắc tới nó chủ yếu để cảnh báo không nên coi các khuôn như "đoạn nhạc vuông" là mục đích tự thân.

Bài này đi theo trình tự: chủ đề → định nghĩa đoạn nhạc → các thành phần (câu, câu nhỏ, motif) → hoà âm và kết → cấu trúc (vuông, không vuông, tổng hợp, chia nhỏ) → các dạng phức tạp → đoạn nhạc như tác phẩm độc lập → dân ca Nga → đối chiếu ba sách → cách phân tích → bài tập. Các khái niệm về chức năng và kiểu trình bày được bàn kỹ ở [[hinh-thuc-nga-chuc-nang-kieu-trinh-bay]] và [[hinh-thuc-nga-phan-doan-cau-truc]].

## Chủ đề (тема) — điều đoạn nhạc trình bày

Mazel mở chương V bằng nhận xét rằng trong tác phẩm có những thành phần quan trọng hơn và kém quan trọng hơn không chỉ *đồng thời* (giai điệu và đệm) mà cả *nối tiếp*: thường ở đầu tác phẩm hay đầu các phần lớn có những cấu trúc như "nhan đề", cá thể hoá rõ, định hình chặt, độc lập — người ta gọi chúng là chủ đề. Định nghĩa của ông:

"Chủ đề là một ý nhạc (được trình bày trong một cấu trúc nào đó), có đủ tính định hình, đủ tính tập trung, có tính đặc trưng và tính cá thể hoá của sức biểu hiện âm nhạc, và thường làm cơ sở cho sự phát triển." *(Mazel, ch. V §1)*

Từ định nghĩa này Mazel rút ra mấy điểm cần nhớ:

- **Chủ đề khác chất liệu chủ đề** (тематический материал): chất liệu không đòi hỏi tính định hình; phần phát triển sonata thường chỉ dùng mảnh của chủ đề. Ông dẫn Prelude Si trưởng op. 11 số 11 của Scriabin: trong phần mở rộng câu thứ hai xuất hiện motif mới nhưng không thành chủ đề mới.
- **Chủ đề là phạm trù lịch sử**, như điệu tính, motif, đoạn nhạc: không phải chất liệu nào cũng là chủ đề. Một chuỗi "попевка" (công thức giai điệu ngắn) trong thánh ca cổ hay trong các thể loại truyền thống phương Đông, hay một chuỗi nối tiếp (серия) vô điệu tính, đều *không* phải chủ đề theo nghĩa này. Ngay ở Scarlatti, Haydn hay thế kỷ XX cũng có tác phẩm không có chủ đề đúng nghĩa (ông nêu chương cuối Sonata Si giáng thứ của Chopin, Prelude Đô trưởng tập I *Bình quân luật* của Bach).
- **Chủ đề không đồng nhất với hình tượng** (образ): hình tượng là khái niệm mỹ học, chủ đề là khái niệm có hai mặt — biểu hiện và kỹ thuật. Một chủ đề có thể sinh nhiều hình tượng (biến tấu tự do), một hình tượng có thể do nhiều chủ đề tạo nên (vai trong opera). Mazel dẫn lời Rimsky-Korsakov trong *Biên niên* về *Scheherazade*: các chủ đề ở đó là "chất liệu thuần âm nhạc hay các motif cho sự phát triển giao hưởng".
- **Chủ đề cũng không đồng nhất với cú pháp trình bày nó** — như luận đề của diễn giả không đồng nhất với ngữ pháp của câu nói ra luận đề ấy. Hình thức trình bày chủ đề điển hình nhất là đoạn nhạc.

Sposobin cũng nói tới sự trùng khớp này: định nghĩa đoạn nhạc của ông "giống định nghĩa chủ đề" ở mục §3, vì "chủ đề rất thường được trình bày dưới dạng đoạn nhạc và khi ấy ranh giới của chúng trùng nhau" *(Sposobin, §21)*. Xem thêm [[ly-thuyet-chu-de]].

## Định nghĩa đoạn nhạc

### Sposobin: một ý nhạc tương đối trọn vẹn

"Đoạn nhạc là một ý nhạc tương đối trọn vẹn, được kết thúc bằng kết (каденция) ở giọng ban đầu hoặc ở giọng khác." Các phần lớn của đoạn nhạc, "thường có hai", gọi là **câu** (предложение). *(Sposobin, §21)*

Sposobin nhấn mạnh rằng trong phần lớn đoạn nhạc kiểu **trình bày** (экспозиционный тип изложения) thể hiện rõ, vì đoạn nhạc chứa sự trình bày lần đầu hoặc nhắc lại chủ đề; do đó đoạn nhạc có **tính thống nhất giai điệu – chủ đề**. Thống nhất ấy có thể là: hai câu gần như giống hệt trừ phần kết (Beethoven, *Septet* op. 20, chương III); nhắc lại một phần chất liệu câu đầu (Beethoven, Sonata op. 2 số 1, chương II); nhắc lại có biến đổi — hoa mỹ hoá, dời độ cao, đổi hoà âm; hoặc, khi không có nhắc lại, giữ nguyên tính chất nét giai điệu – tiết tấu và kết cấu, không tạo tương phản lớn *(Sposobin, §22)*.

### Mazel: định nghĩa ba vế

Mazel định nghĩa: "Đoạn nhạc là một hình thức nhất định (theo lệ là hình thức nhỏ nhất có thể) của sự trình bày trọn vẹn chất liệu chủ đề (hay của sự trình bày trọn vẹn một ý nhạc) trong âm nhạc chủ điệu, mà dấu hiệu trọn vẹn thường là một kết trọn." Đồng thời đoạn nhạc là "hình thức đơn giản nhất của một tác phẩm chủ điệu độc lập" *(Mazel, ch. V §2)*.

Điểm riêng của Mazel là ông đòi một định nghĩa **ba vế**:

1. chỉ ra **chức năng** — hình thức trình bày trọn chủ đề trong nhạc chủ điệu;
2. chỉ ra **kiểu cấu trúc cơ bản** — hai cấu trúc giống nhau dài 4, 8 hoặc 16 ô nhịp, câu đầu kết nửa (hay kết trọn không hoàn toàn), câu sau kết trọn hoàn toàn;
3. chỉ ra rằng **các cấu trúc khác làm cùng chức năng cũng gọi là đoạn nhạc**, miễn còn giữ ít nhất vài dấu hiệu cấu trúc. *(Mazel, ch. V §2)*

Ông so sánh với át âm phụ: xưa chỉ hợp âm bậc IV mới gọi là hạ át âm, các hợp âm khác chỉ "thay thế" nó trong kết; nay tất cả đều là các biến thể của chức năng hạ át âm, còn hợp âm bậc IV là biến thể chính, điển hình, ban đầu. Đoạn nhạc cũng vậy. Ông ghi nhận có sách cũ gọi các cấu trúc khác là "câu khép kín về điệu tính" (тонально-заключенное предложение) và thấy cách ấy "có những bất tiện".

Ví dụ của Mazel cho thấy vì sao chức năng phải đứng đầu: so bốn điệu nhảy trong *Tổ khúc Pháp* của Bach. Hai menuet (Đô thứ, Rê thứ) là đoạn nhạc điển hình. Nhưng tám ô đầu sarabande Rê thứ là một cấu trúc **chia nhỏ có khép** 2+2+1+1+2, kết nửa — về cấu trúc là một câu; còn phần đầu courante Đô thứ gồm ba câu không đều (4 + 12 + 8 ô) kết ở ba giọng khác nhau. Vì chúng làm cùng chức năng (phần đầu tương đối trọn, được nhắc lại, trình bày chủ đề của một điệu nhảy hai hoặc ba phần), Mazel vẫn gọi chúng là đoạn nhạc — "dù là đoạn nhạc thuộc loại riêng". Ông lưu ý dạng như courante này về sau sẽ thành phần trình bày sonata cổ (xem [[hinh-thuc-nga-sonata-co-va-hai-phan-co]]).

### Đoạn nhạc là phạm trù lịch sử

Mazel giải thích vì sao đoạn nhạc điển hình chỉ "kết tinh và phổ biến rộng ở thế kỷ XVII–XVIII": cần (1) sự cá thể hoá các cấu trúc giai điệu – tiết tấu đến mức tai nắm được cả bốn ô, tám ô như một đơn vị ý; (2) sự phát triển hoà âm đến mức cảm được quan hệ giữa các hoà âm *cách xa nhau* — át âm ở ô 4 được giải quyết không chỉ ở ô 5 mà "theo một nghĩa nào đó" ở ô 8. Vì vậy với Debussy khái niệm đoạn nhạc "thường chỉ dùng được có điều kiện, theo loại suy", còn ở nơi điệu tính và chủ đề biến mất thì thường phải nói tới "các cấu trúc tự do" *(Mazel, ch. V §2)*. Ngược lại, với Scriabin và Prokofiev, dù hoà âm mới, đoạn nhạc điển hình vẫn rất đặc trưng.

Asafyev nhìn cùng hiện tượng từ phía phê phán: ông nói về một thời kỳ mà kết giai điệu bị thay bằng "kết – công thức" cơ giới, dẫn đến "sự trói buộc ý nhạc trong chiếc áo nịt chật — đoạn nhạc vuông với sự đối xứng hình thức" *(Asafyev, Q2 ch. I)*. Ông không phủ nhận đoạn nhạc vuông: "Đoạn nhạc 'vuông' là đoạn nhạc hoàn hảo nhờ tính đối xứng của nó... Điều đó đúng. Nhưng tách khỏi âm nhạc như thực tại", một chuỗi đoạn nhạc vuông chỉ vì sự hoàn chỉnh cấu trúc "sẽ chỉ gây ấn tượng đơn điệu" *(Asafyev, Q1, Phụ lục 1)*.

## Các thành phần: câu, câu nhỏ, motif

### Câu (предложение)

Câu là phần lớn nhất của đoạn nhạc, kết bằng một kết. Mazel gọi câu đầu là **câu mở** (начальное), câu sau là **câu đáp** (ответное). Ông nhấn mạnh một khác biệt về nguyên tắc: câu nhỏ và motif có ở *mọi* phần của tác phẩm, còn câu chỉ có trong đoạn nhạc — "vì câu là phần của đoạn nhạc". Ở các phần phát triển, chuyển tiếp, mở đầu, bổ sung, theo lệ không có đoạn nhạc và do đó không có câu; ngay cả việc trình bày một chủ đề mới cũng không luôn chứa đoạn nhạc (episode của ba phần phức, chủ đề trung gian trong phần nối sonata), "và chỉ ở đầu một tác phẩm chủ điệu – hoà âm (ngay đầu hoặc sau phần mở đầu) mới nhất thiết có đoạn nhạc" *(Mazel, ch. V §2)*.

### Câu nhỏ (фраза)

Sposobin: nhiều câu bốn hoặc sáu ô chia tiếp thành các cấu trúc hai ô (đôi khi ba ô) gọi là **câu nhỏ**. Câu nhỏ "hoàn toàn tách được về nghĩa" khỏi cấu trúc bên cạnh, tức là tách biệt về tiết tấu. Khác với kết của câu, kết của các câu nhỏ (trừ câu nhỏ cuối, trùng với kết câu) "không bị hạn chế": có thể dừng ở bất kỳ hợp âm nào với bất kỳ bè trầm nào *(Sposobin, §26)*. Bên cạnh câu chia được thành câu nhỏ còn có câu không chia.

### Motif và motif con

"Motif là một nhóm âm có tính nhịp điệu, hợp nhất bởi một trọng âm chính, và là đơn vị ý nghĩa nhỏ nhất." *(Sposobin, §27)* Vì có một trọng âm chính, motif thường xấp xỉ một ô nhịp, nhưng đầu và cuối motif thường không trùng vạch nhịp; motif kết thúc bằng một âm thuộc hợp âm, không phải âm treo hay âm lướt. Sposobin phân bốn kiểu, mượn từ thi luật (có ghi chú rằng đây là phân loại chung nhất, anapest coi như biến thể của iamb, dactyl như biến thể của trochee):

| Kiểu | Sơ đồ | Ghi chú của Sposobin |
|---|---|---|
| Amphibrach | nhẹ – mạnh – nhẹ | đầy đủ nhất, rất thường gặp |
| Iamb | nhẹ – mạnh | cũng rất phổ biến |
| Trochee | mạnh – nhẹ | ít hơn một chút |
| Motif không đủ | chỉ một âm mạnh | hiếm khi độc lập, thường mở đầu câu nhỏ hay câu |

Phách mạnh của motif gọi là "икт", phách nhẹ đứng trước là "предыкт" (phách lấy đà). Từ phách lấy đà sang phách mạnh hoà âm thường đổi — phách lấy đà là "lấy đà, chuẩn bị hành động", phách mạnh là "chính hành động". Motif và câu nhỏ đôi khi chia tiếp thành **motif con** (субмотив) dài một phần ô nhịp *(Sposobin, §27)*. Mazel bổ sung rằng motif là khái niệm lịch sử: một "попевка" trong dân ca cổ hay thánh ca không nên gọi là motif, vì motif "nhất thiết giả định hệ thống tiết tấu có trọng âm và nhịp, và sự gom âm quanh phách mạnh" *(Mazel, ch. V §1)*. Bài [[motif]] trong thư viện bàn chi tiết hơn.

### "Giống thì tách, khác thì nhập"

Sposobin rút ra một nguyên tắc ngắn gọn: nếu sau một cấu trúc là cấu trúc giống nó, thì chính việc nhắc lại **tách** chúng ra; ngược lại sự khác nhau (không đến mức tương phản cực độ) giúp chúng **nhập** lại. Ông khuyên: các cấu trúc không chia được một cách hiển nhiên thì nên coi là liền và không chia, khỏi cần chia "có điều kiện" *(Sposobin, §28)*. Nguyên tắc này còn được ông áp vào cấu trúc lớn (xem phần tổng hợp – chia nhỏ dưới đây).

## Hoà âm và kết

### Đoạn nhạc một giọng

Đoạn nhạc bắt đầu và kết ở giọng chính gọi là **một giọng** (однотональный) hay **khép kín**. Bên trong vẫn có thể ly giọng, điển hình là *giữa* câu để kết mỗi câu lại về giọng chính; đôi khi câu đầu kết ở giọng phụ (Beethoven, Giao hưởng số 5, chương II) hoặc ly giọng cuối câu mang tính chuyển (Prokofiev, *Gavotte* op. 32 số 3). Câu thứ hai có khi bắt đầu ở giọng phụ, thường là nhắc lại đầu câu một ở độ cao mới ("mô tiến cách quãng"). Ly giọng về phía hạ át âm hay rơi vào câu hai, gần cuối; Sposobin nhận thấy ngay trong khuôn khổ đoạn nhạc đã có thứ tự giọng **T – D – S – T** *(Sposobin, §23)*.

Bảng kết điển hình của đoạn nhạc khép kín hai câu theo Sposobin:

| | Câu thứ nhất | Câu thứ hai |
|---|---|---|
| Giọng chính | kết nửa ở át âm; kết trọn không hoàn toàn ở chủ âm (ít hơn); kết trọn hoàn toàn ở chủ âm (hiếm, và thường trong đoạn chuyển giọng) | kết trọn hoàn toàn ở chủ âm |
| Giọng phụ (câu một) | kết trọn hoàn toàn hoặc không hoàn toàn ở chủ âm; kết nửa ở át âm (ít hơn) | — |

Các kết thường dừng ở hợp âm thể gốc chứ không ở thể đảo (ghi chú: trong âm nhạc mấy thập kỷ gần đây việc chọn bè trầm cho kết giữa tự do hơn nhiều). Quan trọng hơn: kết của hai câu **khác nhau**. Một cấu trúc nhắc lại với cùng kết "không tạo thành đoạn nhạc", dù đủ dài; đổi kiểu kết mới khiến cấu trúc nhắc lại mang chức năng mới. Ngoại lệ là hai câu giống nhau mà dòng chảy không ngắt *(Sposobin, §23)*.

Mazel ghi nhận các ngoại lệ thực tế: hai câu có thể kết giống nhau — Chopin, Prelude op. 28 số 15; Glinka, *Hợp xướng Ba Tư* trong *Ruslan và Lyudmila* (giai điệu dân gian phương Đông có thật); Glinka, *Я здесь, Инезилья* (cả hai kết đều không hoàn toàn). Theo ông, những ví dụ ấy "thực chất là một câu được nhắc lại" và hiện tượng này hay gặp trong dân ca và nhạc gần dân ca *(Mazel, ch. V §2)*.

Mazel còn mô tả hai "mặt bằng hoà âm" của đoạn nhạc lặp: nếu câu một đi từ T tới D còn câu hai bắt đầu từ D về T thì cả đoạn có cấu trúc **hỏi – đáp T–D–D–T** (Beethoven, scherzo Sonata số 2 và chương cuối Sonata số 5; antract cảnh 3 *Con đầm pích*); nếu câu hai mở bằng chức năng hạ át âm (ví dụ bắt đầu cao hơn một quãng hai, từ bậc II) thì có mặt bằng **T–D–S–T** (menuet Sonata số 7 của Beethoven, Sonata số 17 của Mozart, Etude La trưởng op. 8 số 6 của Scriabin). Rõ nhất khi câu hai dịch câu một lên quãng bốn — Allegretto Sonata số 14 của Beethoven, Prelude Đô thăng thứ op. 11 số 10 của Scriabin *(Mazel, ch. V §2, chú thích)*.

### Đoạn nhạc chuyển giọng

"Đoạn nhạc kết không ở giọng mà nó bắt đầu gọi là đoạn nhạc chuyển giọng." *(Sposobin, §24)* Trong tuyệt đại đa số trường hợp nó bắt đầu ở giọng chính và kết ở giọng phụ; nó "động hơn" đoạn một giọng vì hở về điệu tính. Sự chuyển giọng thường diễn ra ở câu hai, thậm chí gần cuối, nên tính thống nhất kiểu trình bày vẫn trội. Hướng điển hình nhất là **hướng át âm** (giọng bậc V và bậc III), quen đến mức "không phá ấn tượng trình bày". Rất hiếm đoạn nhạc kết ở giọng hạ át âm; Sposobin và Mazel cùng nêu scherzo Sonata Si giáng trưởng của Schubert, và Mazel giải thích lý do: khi đó giọng chính dễ bị nghe như át âm, giọng bậc IV như chủ âm, vì quan hệ chủ – át mạnh hơn chủ – hạ át trong nhạc cổ điển *(Mazel, ch. VI §1, chú thích)*.

Sposobin cho rằng phần lớn khả năng chuyển giọng xa xuất hiện "như cái mới trên nền hệ thống trưởng – thứ"; bản OCR in "thế kỷ XX", nhưng theo ngữ cảnh (sách viết trước 1958, ví dụ là Schubert, Tchaikovsky) nhiều khả năng là thế kỷ XIX — **chỗ này chưa đối chiếu được bản in**. Ông vẫn kết luận: các quan hệ gần tìm được từ trước "đến nay vẫn chiếm ưu thế", còn quan hệ xa dành cho phần sau của hình thức — "tiết kiệm phương tiện" *(Sposobin, §24)*. Khi chuyển giọng bắt đầu ngay từ câu một và chiếm phần lớn đoạn, cấu trúc hoà âm có thể mang **tính phần giữa**; tính trình bày khi ấy thể hiện qua mặt khác — thống nhất chủ đề, cấu trúc, kết trọn cuối, sự nhắc lại cả đoạn và vị trí mở đầu.

Mazel bổ sung các trường hợp không khép: đoạn nhạc kết bằng kết trọn không hoàn toàn (Rachmaninov, *Сирень*), thậm chí kết nửa, và đoạn nhạc **mở** — phát triển như đoạn nhạc điển hình nhưng tránh mọi kết và chảy vào phần sau (Beethoven, Sonata số 20, Tempo di Menuetto), "hay gặp ở chủ đề các phần giữa, episode rondo" *(Mazel, ch. V §2)*.

## Cấu trúc: vuông, không vuông, tổng hợp, chia nhỏ

### Tính vuông

Sposobin: trong rất nhiều đoạn nhạc, tính trình bày thể hiện qua **tính vuông** (квадратность) — các phần dài bốn ô, "bắt nguồn từ loại nhạc ca – vũ". Biến thể cơ bản: 4 + 4 (hai câu bốn ô), 8 + 8 (Beethoven, Sonata op. 26, chương I, ô 1–16); hiếm hơn là đoạn nhạc 32 (hay 64) ô. Vậy "về mặt bên ngoài đoạn nhạc không dưới tám ô"; đoạn nhạc bốn ô hiếm, thường ở nhịp ghép nên mỗi ô có thể tính là hai *(Sposobin, §25)*.

### Tuần hoàn cấu trúc, tổng hợp và chia nhỏ

Sự nối tiếp các phần có cùng độ dài (tính bằng ô) gọi là **tuần hoàn cấu trúc** (структурная периодичность): 8 = 4 + 4; 8 = 2+2+2+2; 8 = 1+1+1+1+1+1+1+1 (Beethoven, Quartet op. 59 số 2, chương II). Tuần hoàn thuần tuý phổ biến trong thanh nhạc vì gắn với nhịp thơ; với nhạc khí sự đơn điệu ấy "ít đặc trưng hơn" *(Sposobin, §29)*.

Để tạo **tương phản cấu trúc** có hai thủ pháp ngược nhau:

- **Tổng hợp** (суммирование): đặt hai hay vài cấu trúc cạnh một cấu trúc lớn hơn, thường bằng tổng của chúng — 8 = 2 + 2 + 4; 4 = 1 + 1 + 2.
- **Chia nhỏ** (дробление): đặt một cấu trúc cạnh các cấu trúc ngắn hơn, thường cộng lại bằng nó — 8 = 4 + 2 + 2 (Beethoven, Sonata op. 14 số 1, chương III). Có dạng chia nhỏ "ngược với nhịp" — nhóm hai phách trong nhịp ba (Beethoven, Giao hưởng số 8, chương IV; Tchaikovsky, *Scherzo hài hước* op. 19 số 2; *Tháng Năm* op. 37bis).

Hai thủ pháp đôi khi xích lại: khi các phần được chia nhỏ (rút ngắn) đồng thời các chỗ ngắt cũng ngắn lại (liền hơn). Sposobin nói nguyên tắc "giống thì tách, khác thì nhập" áp dụng cả cho mặt cấu trúc, tạo ra một kiểu thống nhất "phức tạp hơn, và theo nghĩa nào đó cao hơn" sự giống nhau sơ đẳng của độ dài *(Sposobin, §29)*.

Trên quy mô cả đoạn nhạc ông phân biệt: (a) hai câu có cùng sơ đồ (tuần hoàn của tổng hợp hay chia nhỏ); (b) sau câu một tuần hoàn hoặc tổng hợp, đầu câu hai **chia nhỏ** rồi **tổng hợp kết**, tức chia nhỏ rơi vào **phần tư thứ ba** của đoạn — "quy luật này gặp thường xuyên không chỉ ở phần tư thứ ba của đoạn nhạc mà cả ở các hình thức lớn hơn", và thường đi cùng hoà âm đổi nhanh hơn, tăng căng thẳng, dẫn tới cao trào; (c) **tổng hợp kép** — câu hai tổng hợp ở quy mô lớn hơn (Mozart, Sonata số 12, chương III). Ghi chú của ông: tương phản cấu trúc giống thủ pháp xen câu dài – câu ngắn trong văn chương.

Asafyev nói về cùng hiện tượng bằng ngôn ngữ "lực": các "cú đẩy, gãy và xê dịch tiết tấu – ngữ điệu" khi các tổ hợp âm "va" nhau — ô kết của đoạn này đồng thời là ô khởi của đoạn sau, nhịp hai chen vào nhịp ba, ô cụt chen vào chuỗi ô bằng nhau, phối hợp ô chẵn và lẻ — là những "kích thích động", qua đó "các lực phá vỡ sự trì trệ, quán tính của đoạn nhạc 'vuông'" bộc lộ tác dụng *(Asafyev, Q1 ch. VI)*.

### Đoạn nhạc không vuông

Song song với đoạn 4, 8, 16 ô có những đoạn mà các câu có số ô khác nhưng **bằng nhau**, nên vẫn tuần hoàn. Sposobin có ghi chú quan trọng: "trái với truyền thống phổ biến, mọi cấu trúc không vuông ở đây được coi là tự thân, chứ không phải dẫn xuất từ bốn ô và tám ô" *(Sposobin, §30)*. Các trường hợp:

- **Câu sáu ô** — phổ biến nhất, thường 2 + 2 + 2 hoặc 3 + 3 (một sonata của Haydn; Glinka, *Ivan Susanin*, khúc của Sobinin).
- **Câu năm ô** — 2 + 3, 3 + 2, 1 + 1 + 3, 2 + 1 + 1 + 1… (Schubert, Sonata op. 122, chương III; Glinka, *Ivan Susanin*, khúc mở màn).
- **Câu 9, 10, 11 ô** — hiếm hơn; đoạn nhạc không chia câu cũng có độ dài bất kỳ (Mozart, menuet trong một quartet Rê thứ — đoạn mười ô).

Mazel gọi đây là "tính không vuông hữu cơ": hai câu bảy ô (Glinka, *Bài hát của Vanya* trong *Ivan Susanin* — 3 + 4; Beethoven, Sonata số 12 — 4 + 3), sáu ô (Scriabin, Prelude Đô giáng trưởng op. 16 số 3; Lyadov, Prelude Rê giáng trưởng op. 57 số 1, chia 2 + 1 + 1 + 2), năm ô *(Mazel, ch. V §2)*.

## Số câu: hai câu, ba câu, không chia câu

Bên cạnh kiểu thường gặp nhất (hai câu), Sposobin nêu:

- **Đoạn ba câu giống nhau về chủ đề** (Borodin, *Knyaz Igor*, đoạn "Ах ты, ветер, ветер буйный") hoặc **có tương phản** (Grieg, *Vũ khúc Na Uy* op. 35 số 2) — thường cả ba kết đều khác nhau.
- **Đoạn không chia rõ thành câu** — nhận ra nhờ tính trọn tương đối của chủ đề, tính chất trình bày, kết trọn cuối, số ô, thường là việc nhắc lại cả đoạn và vị trí mở đầu (Beethoven, Sonata op. 10 số 2, chương II). *(Sposobin, §25)*

Mazel hệ thống hoá thành hai loại lớn:

- **Đoạn nhạc cấu trúc lặp** (повторного строения): câu hai nhắc lại câu một với kết khác, kể cả mọi biến đổi miễn là các câu giống nhau chủ yếu ở phần đầu và cấu trúc chung (không nhất thiết bằng nhau; đầu câu hai có thể ở độ cao khác).
- **Đoạn nhạc cấu trúc không lặp** — "đoạn nhạc một cấu trúc thống nhất" (единого строения): toàn đoạn là một cấu trúc chia nhỏ có khép, tổng hợp, hay một "làn sóng" gồm bốn câu nhỏ khác nhau. Loại này khó chia hơn và chứa được sự phát triển rộng hơn; Mazel ghi chú rằng trước khi đoạn nhạc điển hình kết tinh đã có những cấu trúc sáu – tám ô kết trọn mà theo phân loại hiện nay là đoạn một cấu trúc. *(Mazel, ch. V §2)*

Ông thêm **đoạn ba câu** (Beethoven, Sonata số 1; Prelude số 9 của Chopin; phần đầu lớn 16 + 20 + 24 ô của đoạn giữa scherzo Sonata Si giáng thứ của Chopin; 24 ô đầu Sonata số 27 của Beethoven) và **đoạn – câu** (период-предложение) — đoạn không chia thành câu, thuật ngữ ông ghi là của Yu. N. Tyulin (Beethoven, Sonata số 6). Ví dụ đắt giá của Mazel: bảy ô đầu chương cuối Giao hưởng số 3 của Tchaikovsky về cấu trúc chỉ là một câu kết nửa, nhưng vì sau đó là phần giữa phát triển lớn và tái hiện, nó là phần một của ba phần đơn, tức **làm chức năng đoạn nhạc** *(Mazel, ch. V §2)*.

## Các dạng phức tạp

### Đoạn nhạc lớn và đoạn nhạc phức

Sposobin: có đoạn hai câu bằng nhau nhưng rất dài — 32 ô (một polonaise của Chopin; bản OCR không đọc rõ giọng), 40 ô (Schubert, Sonata op. 53, scherzo). Với đoạn lớn, tương phản vừa phải có thể không đủ, nên đôi khi đưa vào những cấu trúc khác hẳn đầu câu *(Sposobin, §31)*. Mazel nêu ví dụ cực đoan: đoạn nhạc đầu Scherzo Si giáng thứ của Chopin gồm hai câu mỗi câu sáu mươi ô; lấy mười sáu ô đầu làm đoạn nhạc là sai, vì mỗi tám ô chỉ có một hoà âm (tám ô chủ âm, tám ô hạ át âm), và vì đoạn lớn ấy là phần một của ba phần đơn — đến lượt nó là phần một của ba phần phức. Tương tự, tám ô đầu phần chính overture *Leonore* số 3 của Beethoven không phải đoạn nhạc mà chỉ là phần của câu 32 ô *(Mazel, ch. V §2)*.

**Đoạn nhạc phức** (сложный период): Sposobin định nghĩa là đoạn mà mỗi câu "đủ khả năng tồn tại như một đoạn nhạc độc lập"; nó giống đoạn đơn ở chỗ đầu hai câu giống nhau (Beethoven, Sonata op. 22, chương IV — một câu có thể kết bằng chuyển giọng). Cũng tính là phức những đoạn lớn mà mỗi câu chia thành các phần giống nhau ở đầu, tạo thành bốn phần liền nhau (Grieg, Sonata violin op. 8, chương IV; Schubert, Valse op. 9a số 14) *(Sposobin, §31)*. Mazel định nghĩa: "đoạn nhạc gồm hai câu giống nhau về giai điệu (với các kết khác nhau), mà mỗi câu về cấu trúc bên trong tự nó là một đoạn nhạc điển hình" *(Mazel, ch. V §2)*.

Mazel phân biệt rõ **đoạn phức** với **đoạn được nhắc lại**: nếu khi nhắc lại ý nghĩa hoà âm của kết không đổi (kể cả khi biến tấu, chuyển giai điệu sang bè khác hay nhạc cụ khác) thì đó là nhắc lại; nếu đổi (tám ô đầu chuyển sang giọng át, tám ô sau kết ở giọng chính) thì là một đoạn phức. Ví dụ đoạn phức của ông: etude op. 10 số 2 và số 10, *Fantaisie* Fa thứ của Chopin; đoạn đầu chương chậm Concerto số 2 của Rachmaninov.

### Mở rộng bên trong (расширение)

Sposobin dùng thuật ngữ hẹp: "mở rộng là sự trình bày lại một cấu trúc với độ dài tăng lên"; nó là **mở rộng bên trong** vì cấu trúc lớn lên nhưng vẫn là một cấu trúc với một kết chính; thuật ngữ chỉ dùng cho cấu trúc giống nhau về chủ đề, đặc biệt các câu của đoạn nhạc. Mở rộng phá tính tuần hoàn và thường giúp tạo cao trào ở câu hai *(Sposobin, §32)*. Các thủ pháp:

1. **Nhắc lại một yếu tố**, thường là mô tiến hoặc gần mô tiến, đôi khi nhắc lại đơn, biến tấu hay mô phỏng (Tchaikovsky, *Tháng Giêng*, *Tháng Sáu* op. 37bis) — có thể khiến một phần câu mang tính phần giữa – phát triển.
2. **Phát triển phức tạp hơn** các yếu tố câu một hoặc câu hai, đôi khi đưa vào giọng mới (Debussy, Prelude *Bruyères*; Myaskovsky, một quartet).
3. **Kéo dài hoà âm kết** — tương đối hiếm.
4. **Kết ngắt** (прерванная, diatonic hay cromatic) hoặc **kết không hoàn toàn**, sau đó thường nhắc lại câu nhỏ hay câu với kết hoàn toàn (Glinka, *Я помню чудное мгновенье*; Beethoven, Giao hưởng số 8, chương I).

Sposobin có nhận xét lịch sử: thời cổ điển Vienne đoạn nhạc hầu như luôn kết hoàn toàn, kết không hoàn toàn bị coi là chưa đủ vững nên là cớ để mở rộng; về sau, từ Beethoven và Schubert, kết không hoàn toàn đôi khi đã được coi là kết trọn chính *(Sposobin, §32)*.

Mazel thêm các ví dụ: mở rộng câu đáp bằng mô tiến (Beethoven, Quartet op. 18 số 1); bằng kết ngắt rồi nhắc lại (Schumann, *Tháng Năm, tháng Năm thân yêu* op. 68 số 13; Chopin, Concerto Mi thứ; Mendelssohn, *Bài ca thuyền Venezia*, *Lời ca không lời* số 6). Trường hợp mở rộng lớn nhất ông dẫn là chương II Giao hưởng số 5 của Tchaikovsky: câu một bốn ô, câu hai **hai mươi lăm ô**, trong đó "chủ đề định mệnh" xông vào lần thứ hai sau một dạng kết ngắt — "tương phản hình tượng trong một đoạn nhạc ở đây là hiển nhiên" *(Mazel, ch. V §2)*. Cũng có đoạn mở rộng **cả hai câu** (hai câu chín ô; hai câu sáu ô mỗi câu mở rộng hai ô bằng kết ngắt). Bài [[mo-rong-cau-nhac]] trình bày thêm.

Asafyev đặt kết ngắt vào học thuyết của ông về kết như "kích thích": từ một công thức để khép, kết biến thành "kích thích mạnh mẽ đẩy âm nhạc đi"; và "dạng đơn giản nhất của sự chệch ấy (át âm của kết chuyển sang bậc VI thay vì chủ âm) từ lâu, ngay trong nhạc cổ điển, đã là phương tiện chắc chắn để kéo dài đoạn nhạc và tiếp tục chuyển động" *(Asafyev, Q1 ch. IV)*.

### Bổ sung (дополнение)

Mọi cấu trúc, kể cả đoạn nhạc, có thể được thêm một cấu trúc phụ. Cấu trúc đưa về **đúng hoà âm của kết chính** gọi là **bổ sung kết** (каденционное дополнение), ý nghĩa chính là khẳng định kết; vì không nằm trong cấu trúc chính mà gắn từ ngoài, nó tạo **mở rộng bên ngoài** (Beethoven, Sonata op. 2 số 1, chương III). Có thể có nhiều bổ sung liền nhau, thường ngắn dần — chia nhỏ (Beethoven, Sonata op. 22, chương II). Bổ sung dùng chất liệu cấu trúc chính hoặc chất liệu mới; đôi khi trong bổ sung có một tái hiện chủ đề ngắn (Scriabin, một prelude op. 11) *(Sposobin, §33)*.

Mazel nhấn mạnh phải phân biệt: mở rộng nằm **trong** đoạn nhạc, bổ sung chỉ có **sau** khi đoạn kết và nhắc lại kết đã đạt. Nhưng bổ sung "thường cần thiết một cách hữu cơ": ở Sonata số 11 của Beethoven (Adagio), kết trọn đến quá sớm sau cao trào ở ô 7 — đỉnh lấy bằng bước nhảy hai quãng tám chưa được lấp — nên bổ sung là bắt buộc. Ông còn ghi nhận dạng hiếm **bổ sung chuyển giọng** (модулирующее дополнение, thuật ngữ của P. S. Rybakova): đoạn nhạc kết ở giọng song song trưởng, bổ sung đưa về giọng chính — Glinka, *Бедный певец* *(Mazel, ch. V §2)*.

### Rút gọn (сокращение)

"Sự trình bày lại một cấu trúc với độ dài giảm đi" gọi là rút gọn. Ví dụ của Sposobin: Grieg, *Bức tranh thơ* op. 3 số 3 — câu một vuông tám ô, câu hai rút còn bảy ô. Rút gọn hiếm hơn mở rộng nhiều vì phần sau có "trọng lượng lô-gích" lớn hơn, là phần hoàn tất, nên với nó mở rộng tự nhiên hơn. Mở rộng và rút gọn có thể được tạo bằng cách chen một nhịp khác (Prokofiev, Quartet số 2 op. 92, chương I) *(Sposobin, §34)*. Mazel dẫn *Lời ca không lời* số 30 của Mendelssohn: câu tám ô được đáp bằng câu bảy ô.

### Chồng ghép (наложение) và kết xen

Khi ô cuối của cấu trúc này trùng ô đầu của cấu trúc sau, ta có **chồng ghép**. Thường đi kèm một kết hoàn tất ở ô đầu cấu trúc sau, nên gọi là **kết xen** (вторгающаяся каденция). Chồng ghép làm hình thức liền lạc hơn và đôi khi hối hả hơn (Schumann, Giao hưởng số 2; Beethoven, Sonata op. 13, chương I, ô 1–17 phần Allegro, sơ đồ 4–4–4–4 với các kết xen). Trên nền chồng ghép có thể sinh rút gọn *(Sposobin, §35)*.

### Tái hiện trong đoạn nhạc

Tái hiện có thể xuất hiện trong bổ sung (§33) hoặc ngay cuối đoạn nhạc, đem lại "sự tròn trịa đặc biệt" (Tchaikovsky, *Con đầm pích*, arioso của Liza "Ах, истомилась я горем") *(Sposobin, §36)*. Mazel thêm: cấu trúc chia nhỏ có khép mà phần khép là tái hiện câu nhỏ đầu tương đối hiếm ở cấp đoạn nhạc; ông liệt kê các đoạn nhạc có tái hiện bên trong ở chương cuối Sonata *Pathétique* của Beethoven, Mazurka Fa thăng thứ op. 33 số 1 của Chopin, *Warum?* của Schumann, *Скaзка* Fa thứ op. 26 số 3 của Medtner, aria của Liza cảnh sáu *Con đầm pích* *(Mazel, ch. VI §1, chú thích)*.

## Đoạn nhạc như hình thức độc lập

Sposobin: "Dưới hình thức đoạn nhạc rất thường trình bày chủ đề của tác phẩm… Đồng thời có vô số tác phẩm ngắn là một đoạn nhạc. Như vậy đoạn nhạc có thể là một hình thức độc lập." *(Sposobin, §37)*

- **Nhạc khí**: gần như chỉ có prelude — tác phẩm nhỏ, độc lập, phát triển một tâm trạng (một hình tượng). Kiểu prelude này lần đầu được Chopin vun đắp; trước ông prelude viết ở hình thức khác (Bach). Ghi chú của Sposobin: trong nhạc khí, đoạn nhạc như hình thức độc lập vào thực hành từ các nhà lãng mạn, "trước Chopin hầu như không gặp". Hiếm khi tuần hoàn thuần (Prelude La trưởng — tính ca – vũ); điển hình hơn là tương phản cấu trúc; phổ biến nhất là hai câu, mở rộng ở câu hai gắn với cao trào (Prelude Đô trưởng); có đoạn ba câu (Prelude Mi trưởng) và đoạn phức (Prelude Đô thăng thứ).
- **Thanh nhạc**: gần như chỉ trong **bài hát nhiều lời** (куплетная, строфическая песня) — nhạc nhắc lại nguyên hay hơi biến tấu, lời mỗi lần mới; nhạc mang tính khái quát, hợp với mọi lời. Trong đoạn nhạc ngắn đôi khi câu hai được nhắc lại thay cho điệp khúc (bài *Партизанская*).

Sposobin còn ghi về tập prelude: Bach trong *Bình quân luật* viết các cặp prelude – fugue ở cả 24 giọng theo gam cromatic; Chopin (op. 28) và sau đó Scriabin (op. 11) cũng viết ở cả 24 giọng nhưng theo vòng quãng năm giọng trưởng, mỗi giọng trưởng đi kèm giọng thứ song song.

Mazel lập danh sách tác phẩm độc lập dạng đoạn nhạc: prelude số 1, 2, 3, 4, 6, 7, 9, 14, 16 của Chopin; nhiều prelude op. 11 của Scriabin; romance *Эхо* của Rimsky-Korsakov; *Сон* op. 8 số 5 của Rachmaninov; *Альбомное стихотворение* của An. Aleksandrov. Ở những tác phẩm ấy câu hai thường mở rộng, câu một làm vai chủ đề, câu hai phát triển; sau đoạn nhạc hay có bổ sung, nhiều khi chứa tái hiện ngắn các câu nhỏ đầu (Prelude số 6 của Chopin; prelude op. 11 số 4, 5, 9, 13, 22 của Scriabin). Ông cũng cảnh báo: không thể gán một – một "đoạn nhạc = một hình tượng" *(Mazel, ch. V §2)*. Thêm nữa, "phức tạp" theo phân loại không đồng nghĩa phức tạp thật: Prelude op. 16 số 5 của Scriabin ở hai phần đơn "nhỏ hơn về đường nét và đơn giản hơn về phát triển" so với nhiều prelude chỉ là một đoạn nhạc *(Mazel, ch. VI §1, chú thích)*.

### Phân tích mẫu của Mazel: Prelude La trưởng op. 28 số 7 (Chopin)

Mazel chọn tác phẩm này vì nó là trường hợp hiếm: một đoạn nhạc vuông, cấu trúc lặp, mỗi câu bốn câu nhỏ cùng tiết tấu, mà vẫn là một chỉnh thể nghệ thuật trọn vẹn. Tóm tắt lập luận *(Mazel, ch. V §2)*:

- **Hai nguồn thể loại** kết hợp: tính vũ khúc mazurka được làm mềm (bè trầm cách ô, chuyển động quãng ba – sáu song song, âm treo đi lên ở mỗi ô lẻ) và **lối hợp âm** của prelude cổ (hợp âm nhắc lại cuối mỗi câu nhỏ). "Phát hiện" của tác phẩm là biến các hợp âm phách nhẹ của đệm vũ khúc thành yếu tố của lối hợp âm.
- Cùng một hướng phát triển — từ vũ khúc sang hợp âm – hoà âm — diễn ra ở **ba cấp**: trong mỗi hai ô, trong mỗi tám ô, và trong cả mười sáu ô.
- **Cao trào** ở ô 12: hợp âm át bảy của bậc II — lần duy nhất vượt khỏi hoà âm diatonic, rơi vào ô nhẹ, lúc giai điệu đứng yên, nên dồn chú ý vào hoà âm. Nó vừa có chức năng biểu hiện (nỗi xúc động kín), vừa có chức năng tạo hình: hợp nhất hai câu bằng một cao trào chung, mở vùng đổi hoà âm dày hơn, nhấn chức năng hạ át âm cần cho sự trọn vẹn.
- Ô 14 đưa vào hợp âm át chín trưởng — năm âm duy nhất trong bài — đáp lại "quán tính mới" do ô 12 gây ra.
- Lời khuyên diễn tấu: các ô lẻ là ô nặng; đừng nhấn các điểm dừng ở ô chẵn; ngay hợp âm cao trào ở ô 12 cũng không nên đánh quá to.

## Dân ca Nga

Sposobin dành nửa sau chương II cho dân ca Nga, coi nó là hình thức thanh nhạc nhỏ mà kích thước "hiếm khi vượt khung đoạn nhạc", và theo lệ có cấu trúc nhiều lời *(Sposobin, §39)*.

### Giai điệu

- Sự nhắc lại các yếu tố giai điệu – chủ đề có vai trò lớn, thường là nguyên tắc tạo hình chính, nhưng cũng thường xuyên lùi xuống hàng thứ yếu.
- Yếu tố nhắc lại hay được **biến tấu bằng hoa mỹ** riêng, thay âm, thường phức tạp thêm (*Вдоль по улице*), đôi khi đơn giản đi (*Отдавали молоду*); biến tấu cũng có giữa các lời.
- Nhiều bài một bè, nhưng cũng có nhiều bè. Các bè đi kèm gọi là **подголоски** (bè phụ hoạ), bất kể cao hơn hay thấp hơn giai điệu chính. Chúng lúc hoà vào đồng âm hay quãng tám, lúc tách ra; vì thế giống "sự rẽ nhánh của giai điệu chính" (kể cả "bè hai" cách quãng ba), không phải các bè phức điệu độc lập kiểu châu Âu chung (ví dụ từ tập *Песни Пинежья*, số 43). Khi lặp lời, bè phụ hoạ thường được biến tấu, vì tính ngẫu hứng vốn có trong lối hát dân gian.
- Đường nét: nhiều bài, nhất là khi âm vực hẹp, đi trên một bình diện, không có cao trào chính — cùng một đỉnh được chạm nhiều lần; nhưng cũng có đỉnh gần cuối và rất thường ở đầu. *(Sposobin, §39)*

### Điều thức

- Ảnh hưởng **ngũ cung** rõ: các câu (обороты) gồm quãng ba thứ và quãng hai trưởng kề nó (**trichord**); có bài hoàn toàn ngũ cung (tập của Lyadov, *Свадебная*). Ngay trong bài nhiều âm hơn, công thức ngũ cung vẫn nổi bật.
- Ngoài ra có trưởng đầy đủ và **thứ tự nhiên** (trong bài hát nông dân), các điều thức cổ (Dorian, Phrygian, Mixolydian) hoặc từng công thức của chúng; rất thường các điều thức ấy xuất hiện **không đủ** (sáu bậc hoặc ít hơn).
- Ngũ cung và điều thức cổ có chung tính chất: **tương phản giữa ổn định chủ âm và phần không chủ âm được làm mềm**. Vì vậy trọng tâm dễ dời khỏi điểm tựa ban đầu (vốn nhiều khi không lộ ngay từ đầu) sang điểm khác — do đó có ly sang điều thức hay giọng khác trong bài. Kết giữa có thể dừng "thực chất ở bất kỳ bậc nào".
- Đặc sắc hơn cả: **bài kết ở giọng khác giọng mở đầu**. Trường hợp này "rất thường trong dân ca Nga", trong nghệ thuật châu Âu chung là ngoại lệ, nên là đặc điểm riêng của dân ca Nga. Phổ biến nhất là kết ở giọng **song song** (thường trưởng → thứ song song); cũng có quan hệ khác (tập của Lyadov, *Колядная*). Chuyển giọng cuối bài thường không có dấu hoá bất thường nào, nhưng có thể giả định tai dân gian hiểu âm kết là ổn định, tức là chủ âm. *(Sposobin, §40)*

### Cấu trúc

Sposobin mô tả một thang từ đơn đến phức *(Sposobin, §41)*:

1. **Một câu nhỏ hai – ba ô nhắc lại nhiều lần với lời khác** — trùng khít tuần hoàn giai điệu và tuần hoàn cấu trúc; giai điệu thường giữ nguyên (chỉ tách hay gộp âm theo số âm tiết) hoặc hơi biến tấu. Kiểu này ở hát ru (байки), câu đồng dao trẻ em, bylina, thơ tôn giáo (духовные стихи), khóc than (плачи), một số bài nghi lễ (đặc biệt колядки), ít hơn ở bài hát vòng tròn (хороводные).
2. **Tuần hoàn kép**: mỗi yếu tố được hát hai lần liền — a + a, và thường hơn **a + a, b + b**, các phần chủ yếu bằng nhau. Điển hình cho bài nhảy (плясовые) và nhiều bài vòng tròn, nhưng cũng có ở bài trữ tình kéo dài (протяжные).
3. Tuần hoàn cấu trúc liên tục kết hợp chỉ một phần với tuần hoàn chủ đề (a a b c trên các phần bằng nhau — tập của Balakirev, *Протяжная*).
4. **Cấu trúc tự do hơn** ở bài chậm (trữ tình, một phần bài lịch sử): đổi nhịp liên tục, không vuông, chỉ nhắc lại motif hay motif con, đôi khi nhắc lại phần lớn hơn; hoặc sự **triển khai giai điệu** độc lập hay ít phụ thuộc vào nhắc lại.
5. **Lĩnh xướng – điệp khúc** (запев — một hoặc vài người hát; припев — hợp xướng): đặc trưng cho rất nhiều bài, nhất là trữ tình. Ở lời đầu đôi khi không có lĩnh xướng; lĩnh xướng khi nhắc lại có thể mở rộng hay rút gọn theo số âm tiết.

Sposobin kết luận cấu trúc lĩnh xướng – điệp khúc, có ở nhạc nhiều dân tộc, "đã ảnh hưởng rõ đến cấu trúc nhiều tác phẩm nhạc chuyên nghiệp, không chỉ thanh nhạc mà cả khí nhạc (sự hình thành hình thức rondo)" — xem [[hinh-thuc-nga-rondo]].

Mazel dùng chính dân ca để nối đoạn nhạc với hai phần đơn: cấu trúc "hai tuần hoàn" a + a + b + b của bài nhanh và bài vòng tròn, khi phát triển đủ, chuyển *không phải* thành đoạn nhạc mà thành **hai phần đơn** — mỗi tuần hoàn thành một đoạn nhạc *(Mazel, ch. VI §1)*. Ông cũng nhận xét: trong bài trữ tình kéo dài của Nga, dạng lời hát thường là **đoạn một cấu trúc** chứ không phải đoạn lặp, vì nó liền hơn, ít chia cắt hơn *(Mazel, ch. V §2)*.

### Phân tích mẫu của Mazel: *Партизанская*

Mazel phân tích bài hành khúc *Партизанская* (*По долинам и по взгорьям*) như một đoạn nhạc một cấu trúc gồm bốn câu nhỏ, trong đó câu hai được nhắc lại làm điệp khúc — cùng ví dụ mà Sposobin dùng ở §37 *(Mazel, ch. V §2)*:

| Câu nhỏ | Vai trò | Đặc điểm |
|---|---|---|
| 1 | hạt nhân | hát quãng năm cơ bản của điều thứ (đặc trưng dân ca Nga), làn sóng lên – xuống, đỉnh Đô, có làn sóng nhỏ "dạo trước" |
| 2 | tích cực hoá | âm vực rộng ra, ly sang trưởng song song, quãng bốn đi lên từ át âm tới chủ âm có nhắc âm (ngữ điệu bài cách mạng); ít luyến chữ hơn |
| 3 | cao trào | bước nhảy quãng sáu từ bậc I lên bậc VI, cao trào ở bậc VII của điều thức, tiết tấu chấm dôi, hết luyến chữ |
| 4 | tổng kết | giữ tiết tấu câu 3, là biến thể được tích cực hoá và đơn giản hoá của câu 1 |

Ông chỉ ra tính đối xứng: ở hai câu nhỏ đầu đỉnh nằm gần cuối, ở hai câu sau đỉnh nằm gần đầu. Mazel đặt cạnh đó các mẫu dân ca có cùng lối ly sang trưởng song song với đỉnh ở bậc năm và dừng ở bậc ba (tập của Lopatin và Prokunin; *Вниз по матушке по Волге*; bài *Замучен тяжелой неволей*).

## Mở đầu và coda

Trong đoạn nhạc độc lập (khí nhạc và nhất là thanh nhạc) có **mở đầu** các kiểu và **phần kết**, phần lớn ngắn: phần kết của Prelude Đô trưởng của Chopin; mở đầu và kết của romance *Скрой меня, бурная ночь* của Dargomyzhsky. Có khi mở đầu đứng trước **mỗi câu** (Chopin, Prelude La thứ). Phần kết của cả tác phẩm (không phải của một phần) gọi là **coda**; ở tác phẩm nhỏ, đầu coda thường không ghi trong bản nhạc và nhận ra qua dấu hiệu kiểu trình bày kết. Trong coda có thể có tái hiện chủ đề; đôi khi coda rất lớn (Tchaikovsky, *Mùa thu* op. 54 số 14) *(Sposobin, §38)*.

Asafyev đưa ra một khung chung cho mọi quá trình này: mọi "trở thành" âm nhạc đều là cú đẩy – chuyển động – khép, tức tỷ lệ **i : m : t** (initium — khởi đầu, motus — chuyển động, terminus — kết thúc); công thức kết hoàn toàn T–S–D–T chính là hình ảnh thu nhỏ của nó *(Asafyev, Q1 ch. IV)*. Mở đầu và coda của đoạn nhạc độc lập vì thế có thể đọc như sự kéo dài của i và t.

## Ba sách nói gì — đối chiếu

| Vấn đề | Sposobin | Mazel | Asafyev |
|---|---|---|---|
| Định nghĩa | "ý nhạc tương đối trọn vẹn, kết bằng kết" (§21) | ba vế: chức năng + kiểu cơ bản + các dạng thay thế (ch. V §2) | không định nghĩa; đoạn nhạc là "hệ quả" của quá trình, không phải sơ đồ tự thân (Phụ lục 1) |
| Quan hệ với chủ đề | định nghĩa đoạn nhạc giống định nghĩa chủ đề | phân biệt chủ đề – chất liệu – hình tượng – cú pháp | nhấn ngữ điệu, không nhấn khuôn |
| Đơn vị nhỏ | câu, câu nhỏ, motif (4 kiểu thi luật), motif con | câu mở / câu đáp; motif là khái niệm lịch sử | "cú đẩy, gãy, xê dịch" phá quán tính |
| Phân loại | một giọng / chuyển giọng; 2 câu / 3 câu / không chia; vuông / không vuông | lặp / không lặp ("một cấu trúc"); "đoạn – câu" (Tyulin); đoạn mở | — |
| Không vuông | coi là tự thân, không dẫn xuất (§30, trái truyền thống) | "không vuông hữu cơ" | đối xứng và bất đối xứng đều có thể hợp quy luật |
| Đoạn phức | mỗi câu đủ làm đoạn độc lập; đầu giống nhau | thêm tiêu chí: kết đổi ý nghĩa thì là đoạn phức, không đổi thì là nhắc lại | — |
| Mở rộng / bổ sung | thuật ngữ "mở rộng" chỉ cho cấu trúc giống nhau; liệt kê 4 thủ pháp | nhấn bổ sung "cần thiết hữu cơ"; bổ sung chuyển giọng (Rybakova) | kết ngắt là "kích thích" kéo dài đoạn nhạc |
| Lịch sử | đoạn nhạc độc lập trong khí nhạc từ thời lãng mạn | kết tinh thế kỷ XVII–XVIII; chỉ dùng có điều kiện với Debussy | phê phán "áo nịt" đoạn vuông |
| Dân ca Nga | mục riêng: giai điệu, điều thức, cấu trúc, lĩnh xướng – điệp khúc | dùng để giải thích đoạn một cấu trúc và nguồn gốc hai phần đơn | — |

**Chỗ giống**: cả Sposobin và Mazel đều coi tính trình bày, thống nhất chủ đề và kết trọn là lõi; đều chấp nhận đoạn ba câu, đoạn không chia, đoạn không vuông; đều dùng *Партизанская* và các prelude của Chopin, Scriabin làm mẫu. **Chỗ khác**: Sposobin xuất phát từ cấu trúc và mô tả các biến thể như "các trường hợp"; Mazel xuất phát từ chức năng và chấp nhận gọi là đoạn nhạc cả những cấu trúc mà Sposobin có thể coi là câu (sarabande của Bach, bảy ô của Tchaikovsky). Asafyev không mâu thuẫn về sự kiện với hai người kia mà khác về phương pháp: ông không tin sơ đồ có giá trị tự thân. **Thuật ngữ**: "đoạn – câu" và "đoạn một cấu trúc" chỉ có ở Mazel; "mở rộng bên trong / bên ngoài" và "kết xen" là thuật ngữ Sposobin.

## Cách phân tích

1. **Xác định ranh giới đoạn nhạc đầu** từ vị trí và chức năng, không chỉ đếm ô: Mazel nói ở đầu tác phẩm chủ điệu luôn có đoạn nhạc, và "xác định đúng ranh giới đoạn nhạc đầu đặc biệt quan trọng" cho việc hiểu hình thức.
2. **Tìm các kết**: kết cuối (trọn? ở giọng nào?), kết giữa (nửa? không hoàn toàn? ở giọng nào?). Ghi lại mặt bằng hoà âm của đầu và cuối các câu (T–D–D–T hay T–D–S–T).
3. **Xác định loại**: lặp hay một cấu trúc; số câu; một giọng hay chuyển giọng; vuông hay không vuông.
4. **Chia cấu trúc**: câu → câu nhỏ → motif; viết sơ đồ ô (4 + 4, 2 + 2 + 4…), tìm tổng hợp, chia nhỏ, chỗ chia nhỏ ở phần tư thứ ba. Áp nguyên tắc "giống thì tách, khác thì nhập"; đừng chia cái không chia được.
5. **Kiểm tra mở rộng, bổ sung, rút gọn, chồng ghép**: so độ dài hai câu; xem sau kết trọn có cấu trúc nhắc lại kết không (bổ sung) hay kết ngắt kéo dài câu (mở rộng).
6. **Tìm cao trào**: ở mỗi câu hay chung cho đoạn; thường ở câu hai, khoảng phần tư thứ ba hoặc gần điểm tỷ lệ vàng (Mazel).
7. **Đặt đoạn nhạc vào chỉnh thể**: nó là chủ đề của hình thức lớn hơn hay là tác phẩm độc lập? Nếu là phần một của hai/ba phần đơn, xem bài [[hinh-thuc-nga-hinh-thuc-don]].
8. **Với dân ca**: xác định điều thức (ngũ cung? cổ? không đủ?), âm kết có trùng âm mở đầu không, cấu trúc thuộc kiểu nào trong năm kiểu của Sposobin, có lĩnh xướng – điệp khúc không.

## Bài tập

Lấy từ "Tư liệu để phân tích" (Материал для анализа) của Sposobin cuối chương I và II, và từ các ví dụ của Mazel.

1. **Tách đoạn nhạc đầu** (Sposobin, ch. I): Haydn, sonata số 1 (Adagio), số 2; Mozart, sonata số 1 (chương cuối), số 9 (các menuet); Beethoven, Sonata op. 2 số 1 chương III, op. 10 số 1 chương II và III, op. 14 số 1 chương II, op. 26 chương I; Schumann op. 15 (*Cảnh tuổi thơ*) số 1, 2, 3, 6, 7 và op. 68; Chopin, valse op. 34, op. 64, mazurka op. 17, op. 24; Grieg, *Tiểu phẩm trữ tình* op. 12 số 3, 4, 5, 7; Tchaikovsky, *Album thiếu nhi* op. 39 và *Bốn mùa* op. 37bis. Với mỗi đoạn: ghi kết, loại, sơ đồ ô.
2. **Đoạn nhạc như tác phẩm độc lập** (Sposobin, ch. II): Chopin, Prelude op. 28 số 1, 3, 4, 6, 7, 9, 10, 14, 16, 18, 22; Scriabin op. 11 số 1, 3, 4, 5, 13, 15, 22. Chỉ ra mở rộng, bổ sung, mở đầu, coda; prelude nào ba câu, prelude nào đoạn phức.
3. **Thanh nhạc**: Glinka, *В крови горит огонь желанья*; Dargomyzhsky, *Скрой меня, бурная ночь*; Rachmaninov, *Сон* op. 8 số 5; Rimsky-Korsakov, cavatina của Berendey (*Snegurochka*). Xác định quan hệ giữa cấu trúc lời thơ và cấu trúc đoạn nhạc.
4. **So sánh đoạn phức và đoạn nhắc lại** (Mazel): Chopin, Etude op. 10 số 2 và số 10; *Fantaisie* Fa thứ. Dùng tiêu chí "ý nghĩa hoà âm của kết có đổi không".
5. **Mở rộng lớn**: Tchaikovsky, Giao hưởng số 5, chương II (đoạn đầu) — đếm ô câu một và câu hai, đánh dấu chỗ kết ngắt và chỗ "chủ đề định mệnh" xông vào.
6. **Dân ca** (Sposobin, ch. II): chọn năm bài trong các tập của Balakirev, Rimsky-Korsakov, Lyadov, Prokunin – Lopatin; với mỗi bài xác định điều thức, âm kết, kiểu cấu trúc (một câu nhỏ nhắc lại, tuần hoàn kép, tự do, lĩnh xướng – điệp khúc).
7. **Viết**: soạn một đoạn nhạc 8 ô kiểu lặp (T–D–D–T), rồi viết lại thành đoạn chuyển giọng sang giọng át, rồi mở rộng câu hai bằng kết ngắt thành 10 ô.

## Liên kết

- Lộ trình bộ bài: [[hinh-thuc-nga-lo-trinh]] · trước: [[hinh-thuc-nga-nguyen-tac-phat-trien]] · sau: [[hinh-thuc-nga-hinh-thuc-don]]
- Liên quan: [[hinh-thuc-nga-phan-doan-cau-truc]], [[hinh-thuc-nga-chuc-nang-kieu-trinh-bay]], [[cau-nhac]], [[mo-rong-cau-nhac]], [[motif]], [[cau-ket]], [[ly-thuyet-chu-de]]
- Bài tóm theo từng sách: [[sposobin-doan-nhac]], [[mazel-cau-truc-cau-doan-va-chuc-nang]], [[asafyev-hinh-thuc-nhu-qua-trinh]]
`,
  },
  {
    slug: 'hinh-thuc-nga-hinh-thuc-don',
    title: 'Hai phần đơn và ba phần đơn — trường phái Nga',
    category: 'form',
    aliases: [
      'hình thức hai phần đơn',
      'hình thức ba phần đơn',
      'простая двухчастная форма',
      'простая трехчастная форма',
      'phần giữa',
      'середина',
      'tái hiện',
      'реприза',
      'tái hiện giả',
      'мнимая реприза',
      'tái hiện động',
      'динамическая реприза',
      'hình thức ba – năm phần',
      'двойная трехчастная форма',
      'куплетная форма',
      'строфическая форма',
    ],
    summary:
      'Hai phần đơn và ba phần đơn là các hình thức mà phần một là một đoạn nhạc và các phần sau không chứa cấu trúc phức tạp hơn đoạn nhạc. Bài gộp Sposobin (ch. III–IV) và Mazel (ch. VI): có và không tái hiện, phần giữa, tái hiện giả, tái hiện tĩnh và động, phần giữa tương phản, lặp các phần, ba – năm phần, ba phần kép, hình thức lời ca và hình thức khổ, lịch sử và phạm vi dùng. Asafyev góp cái nhìn phê phán về "sơ đồ" và bảng phân loại các cấu trúc khép kín.',
    refs: RU_FORM_REFS,
    body: `
## Từ đoạn nhạc đến hình thức đơn

Sposobin mở chương III bằng nhận xét: phạm vi của đoạn nhạc chủ yếu là bài hát và tiểu phẩm khí nhạc, nhất là prelude; còn trong âm nhạc nói chung chiếm ưu thế là những hình thức "lớn hơn một đoạn nhạc". Ông phân biệt **hai con đường mở rộng hình thức**: (1) **lớn lên từ bên trong**, không tăng số phần chính — đoạn nhạc mở rộng vẫn chỉ có hai câu; (2) **tăng "bên ngoài"**, bằng cách gắn thêm một phần mới tương đối ngang giá. Con đường thứ hai, vốn đã thấy trong đoạn nhạc (câu một cộng câu hai), "thể hiện rõ hơn trong sự hình thành hình thức hai phần" *(Sposobin, §43)*.

Mazel nêu lý do âm nhạc: đoạn nhạc lặp đơn giản nhất của nhạc ca – vũ không cho chỗ phát triển hay đối chiếu: ý nhạc đã trình bày gần trọn trong câu bốn ô đầu, câu hai chỉ nói nốt và củng cố. Vì thế hình thức của *cả tác phẩm*, thậm chí hình thức của *chủ đề* (chủ đề biến tấu, chủ đề rondo) hay của *lời ca*, rất thường không phải đoạn nhạc mà là hai phần đơn *(Mazel, ch. VI §1)*.

## Định nghĩa

**Sposobin** định nghĩa riêng từng hình thức:

- "Hình thức hai phần đơn là hình thức gồm hai đoạn nhạc." *(Sposobin, §42)*
- "Hình thức ba phần đơn là hình thức mà phần một là một đoạn nhạc; phần hai, tức phần giữa, cũng là một đoạn nhạc hoặc một chuỗi cấu trúc có tính phần giữa – phát triển; phần ba trong đa số trường hợp là tái hiện của phần một." *(Sposobin, §53)*

**Mazel** gộp chung: "Hình thức hai hoặc ba phần đơn là hình thức hai hoặc ba phần mà phần một là một đoạn nhạc, còn các phần còn lại không chứa cấu trúc phức tạp hơn đoạn nhạc." Ghi chú: định nghĩa ngầm loại trừ đoạn nhạc nhắc lại (nguyên hay biến tấu) và đoạn nhạc phức *(Mazel, ch. VI §1)*.

Mazel nói thẳng về một "vòng luẩn quẩn" bề ngoài: đôi khi một cấu trúc được coi là đoạn nhạc chỉ vì nó là phần một của ba phần đơn, trong khi muốn hiểu ba phần đơn lại phải biết đoạn nhạc là gì. Điều đó có nghĩa là để xác định đúng một hình thức cần biết cả các hình thức khác, và cần nắm không chỉ định nghĩa mà cả "vô số nét cụ thể" trong những điều kiện thể loại – phong cách khác nhau; định nghĩa trong âm nhạc học "không thể mang tính chất như định nghĩa hình học".

Mazel còn sửa định nghĩa phổ biến: câu "hai phần đơn gồm hai đoạn nhạc" (ông ghi rõ có trong giáo trình của Arensky, Catoire và Sposobin) chỉ đúng cho **một** kiểu hai phần không tái hiện. Nếu phần hai không có cấu trúc lặp và mang tính phát triển, nó *không phải* đoạn nhạc — điều này đúng cho nhiều hình thức không tái hiện và "hầu hết hình thức có tái hiện" *(Mazel, ch. VI §1)*. Đây là chỗ hai sách khác nhau rõ nhất; Sposobin giải quyết bằng khái niệm "đoạn nhạc thuộc loại riêng" (xem dưới).

## Hai phần đơn

### Tính thống nhất

Sposobin yêu cầu hai đoạn nhạc phải liên hệ không cơ học, thống nhất là "điều kiện bắt buộc". Về chủ đề, thống nhất đạt bằng nhắc lại yếu tố của phần một ở cuối phần hai hoặc bằng tính đồng nhất chung của nét giai điệu – tiết tấu. Về hoà âm: có giọng chính, hoặc không rời nó (khá hiếm), hoặc khẳng định ở đầu và khôi phục ở cuối — hình thức khép về điệu tính, "ở một mức độ nào đó là một cơ thể âm nhạc độc lập". Về cấu trúc: đơn giản nhất là hai đoạn bằng nhau, nhưng thường đoạn hai dài hơn và thống nhất thể hiện qua cách phân bố hợp lý các cấu trúc tách và liền (chia nhỏ và tổng hợp) *(Sposobin, §42)*.

Ông phân biệt hai phần đơn với **đoạn nhạc phức**: cả hai đều có thống nhất chủ đề, nhưng đoạn phức có **đầu** hai câu giống nhau, còn trong hai phần đơn đầu hai đoạn **khác nhau** và nếu có giống thì là **phần cuối**.

### Phần một

Phần một là một đoạn nhạc, hầu như luôn có kiểu trình bày rõ; điển hình là hai câu giống nhau; nếu giai điệu khác thì tiết tấu thường vẫn thống nhất. Đặc trưng là sự **cân bằng** đáng kể của đường giai điệu giữa lên và xuống: thiếu cân bằng sẽ đòi phát triển dài, điều mà quy mô hạn chế của hình thức không cho phép — "những ý nhạc có tầm vóc hơn, trong lần trình bày đầu, theo lệ không đạt sự cân bằng lớn trong đoạn nhạc, vì thế sự phát triển của chúng đòi vượt khung đoạn nhạc" *(Sposobin, §44)*.

Đoạn một có thể một giọng hoặc chuyển giọng, thường sang giọng bậc V hoặc III; chuyển giọng xa "rất ít hợp" với hình thức ngắn này. Có trường hợp phần một kết nửa: không phải đoạn nhạc theo nghĩa giáo trình nhưng mang chức năng của nó, nếu có thống nhất chủ đề và điều tính bên trong; tính "hở" do kết nửa giống tác dụng của việc chuyển sang giọng phụ (Beethoven, Sonata op. 31 số 3, menuet, ô 1–16). Hai câu bằng nhau, chủ yếu vuông (4 + 4, ít hơn 8 + 8, hiếm 16 + 16); 6 + 6 hay 5 + 5, 7 + 7 "hiếm hơn nhiều" *(Sposobin, §44)*.

### Phần hai khi có tái hiện: phần giữa

"Nét quan trọng nhất của phần hai là sự nhắc lại, gần cuối, chất liệu chủ đề của phần một. Do đó phần hai chia thành hai câu." Câu thứ nhất của phần hai gọi là **phần giữa** (середина), đem lại một tương phản với đoạn một *(Sposobin, §45)*.

- **Về chủ đề**, tương phản đến từ (1) chất liệu giai điệu – tiết tấu tương đối mới (Beethoven, Sonata op. 2 số 2, chương cuối, ô 1–16) hoặc (2) **phát triển** chất liệu tách ra từ đoạn một, đặt dưới ánh sáng mới.
- **Về hoà âm**, đặc trưng là **không ổn định** (kiểu trình bày phần giữa). Đơn giản nhất: suốt phần giữa giữ một hoà âm không ổn định, thường là át âm (Beethoven, Giao hưởng số 1, scherzo, trio) hoặc hợp âm khác như át âm song song (Beethoven, Sonata violin op. 24, scherzo). Phức tạp hơn: cả phần giữa trên **âm nền át** (Beethoven, Sonata op. 2 số 1, Adagio; op. 2 số 2, Rondo). Nếu ở giọng chính, không ổn định thể hiện ở việc tránh chủ âm trên phách mạnh, nhất là ở ô chẵn. Phức tạp hơn nữa là đổi giọng: cả phần giữa ở một giọng phụ, hoặc đổi qua nhiều giọng phụ, điển hình là **mô tiến chuyển giọng** các yếu tố đoạn một. Quy mô nhỏ buộc dùng giọng gần; trường hợp như *Papillons* số 1 của Schumann (ly sang giọng xa) là hiếm.
- **Kết**: điển hình nhất là kết nửa ở át âm giọng chính; cuối phần giữa vì vậy có giá trị **tiền đề** (предыкт) cho phần kết. Phần giữa càng "xoay quanh át âm" thì tính tiền đề càng mạnh.
- **Cấu trúc**: thường dài bằng nửa đoạn một, đôi khi hơn một chút (hiếm khi gấp đôi); chia nhỏ hơn đoạn một (nhắc lại cùng cao độ, mô tiến, mô phỏng). Sự chia nhỏ ở phần giữa — tức ở **phần tư thứ ba của toàn hình thức** — giống sự chia nhỏ ở phần tư thứ ba của đoạn nhạc.
- Trong thanh nhạc và tiểu phẩm khí nhạc tính ca xướng, phần giữa thường ít khác phần một, vì "nguyên tắc phát triển chủ đề vốn chủ yếu thuộc nghệ thuật khí nhạc".

### Tái hiện trong hai phần

"Câu thứ hai của phần hai, khép lại cả hình thức, chứa sự nhắc lại nguyên văn hay có thay đổi một phần của đoạn một và gọi là tái hiện (реприза)." Sau tương phản của phần giữa, nhiệm vụ chính của tái hiện là thống nhất chủ đề, "làm tròn" hình thức *(Sposobin, §46)*.

- Thường nhắc lại **câu hai** của đoạn một, đôi khi câu một; có khi đoạn một bị viết lại đến mức chỉ còn giống gần đúng.
- Viết lại thường để đặt **cao trào chính** của hình thức vào tái hiện.
- Hoà âm thường bắt buộc viết lại: chỉ khi đoạn một là một giọng mới có thể nhắc nguyên câu hai; nếu đoạn một chuyển giọng thì phải sửa để kết ở giọng chính; câu một thường kết nửa nên nếu đưa vào tái hiện phải sửa phần kết. Khi hướng át âm ở đoạn một (và phần giữa) quá mạnh, tái hiện có thể chứa một ly giọng rõ về phía hạ át âm để đối trọng.
- Cấu trúc: đơn giản nhất là bằng một câu của đoạn một; cấu trúc bên trong có thể liền hơn để tương phản với sự chia nhỏ của phần giữa (tổng hợp sau chia nhỏ). Tái hiện rất hay **mở rộng** — nhất là bằng mô tiến (Brahms, Sonata op. 2, scherzo) hoặc bằng kết ngắt. Nhưng hiếm khi tái hiện dài bằng đoạn một và quan trọng nhất là nó **không chia thành hai câu** như một đoạn nhạc điển hình.

Sposobin kết luận: phần hai, gồm phần giữa và tái hiện, "là một đoạn nhạc thuộc loại riêng, kết hợp trong mình nét phần giữa và nét ổn định" *(Sposobin, §47)*.

Mazel mô tả cùng hiện tượng: nửa sau phần hai hay nhận chức năng tái hiện, nửa đầu làm chức năng phát triển, không ổn định, chia nhỏ (thường mô tiến, đôi khi mô phỏng), nên cả hình thức thành cấu trúc **chia nhỏ có khép** — sơ đồ không phải (a + a1) + (b + b1) mà (a + a1) + (b + a1). Phần b "thường được gọi là phần giữa" dù không thật ở giữa (nó là phần tư thứ ba). Ông nhấn mạnh hình thức này "hoàn toàn không phải ba phần" vì phần giữa và tái hiện hợp thành **một** tám ô đáp lại tám ô đầu *(Mazel, ch. VI §1)*.

::form a:4 a1:4 b:4 a1:4 | Hai phần đơn có tái hiện (Mazel): đoạn nhạc + (phần giữa + tái hiện một câu); con số là số ô trong trường hợp vuông đơn giản

### Hai phần không tái hiện

"Hình thức hai phần mà đoạn hai không chứa sự nhắc lại rõ các yếu tố của đoạn một gọi là hai phần không tái hiện." *(Sposobin, §48)* Thống nhất đạt bằng sự đồng loại chung của nét giai điệu – tiết tấu và kết cấu; nếu dùng yếu tố phần một thì chúng biến đổi đến mức không gây ấn tượng tái hiện. Về hoà âm không có gì mới; giọng chính khôi phục cuối hình thức nên có thể nói **tái hiện điệu tính không kèm tái hiện chủ đề**. Ví dụ của Sposobin: Beethoven, Sonata violin op. 12 số 1, chương II.

Hình thức này đặc biệt điển hình cho **thanh nhạc**, vì (1) lời có tác dụng hợp nhất nên nhắc lại chủ đề ít cần; (2) lời thường không cho cớ tái hiện. Khi ấy tái hiện thật đôi khi xuất hiện trong phần kết (coda).

Mazel nhìn hai phần không tái hiện từ **nguồn gốc dân gian**: nó bắt rễ trong nguyên tắc đối chiếu hai phần — lĩnh xướng và điệp khúc, múa đơn và múa tập thể, bài hát và khúc đàn. Phần một (lĩnh xướng, múa đơn) thường chi tiết hơn về tiết tấu, vì người lĩnh xướng hay người múa giỏi nhất làm được nét phức tạp; phần hai (điệp khúc, múa chung) đơn giản hơn, trường độ lớn hơn, đối chiếu mạnh hơn — "như những nét cọ rộng hơn". Ví dụ: Beethoven, Sonata số 25; Chopin, Valse op. 34 số 1 (đoạn một ca xướng, đoạn hai kiểu "khúc dạo đáp" ritornello). Mazel có ghi chú đáng nhớ về hành khúc kèn đồng: đoạn solo bè trầm ở đoạn hai không trái với quy luật trên, vì bản chất bè trầm cũng cho nét "lớn" hơn — đó là cách riêng của thể loại để làm chức năng tương phản tô điểm *(Mazel, ch. VI §1)*.

Theo Mazel phần hai có thể mang ba chức năng, tách rời hay kết hợp: **tương phản tô điểm**, **phát triển – tiếp nối** (khi đầu phần hai có âm át, mô tiến, ly giọng — Glazunov, Concerto violin: các quãng bốn đi lên của đoạn một thành quãng năm, ngầm át âm), và **tóm kết** (thường thấy ở điệp khúc). Tchaikovsky, *Người kéo đàn quay hát* (*Album thiếu nhi* op. 39) kết hợp cả ba: đoạn hai vừa như điệp khúc, vừa bắt chước tiếng đàn quay, vừa phát triển ngữ điệu đoạn một trên âm nền chủ. Ghi chú: giai điệu bài này là một bài hát Ý Tchaikovsky nghe năm 1877 *(Mazel, ch. VI §1)*.

### Sơ đồ chung và quan hệ hỏi – đáp

Sposobin tổng hợp các sơ đồ *(Sposobin, §49)*:

| Loại | Đoạn I | Đoạn II |
|---|---|---|
| Có tái hiện | a a1 · a b · a b | c a1 · c b · c a1 |
| Hiếm | a b | a b |
| Không tái hiện | a a1 · a b | c b · c d |

Độ dài thường 4 + 4 + 4 + 4, ít hơn 8 ô mỗi câu, hiếm 16. Ông chỉ ra quan hệ các điểm biên: đoạn I đi từ ổn định tới không ổn định, đoạn II từ không ổn định tới ổn định — cấu trúc **"hỏi – đáp"** vốn quen ở cấp nhỏ (motif, câu nhỏ, câu) nay áp vào hình thức lớn hơn; đặc trưng cho hai phần là dạng chính cách của công thức này. Cũng thường gặp sơ đồ: ổn định – ổn định / không ổn định – ổn định.

Mazel thêm các tỷ lệ bất thường: đoạn hai ngắn hơn (Kabalevsky, *Народные мстители*, 8 + 7); đoạn hai dài gấp đôi (Scriabin, Prelude op. 27 số 1: tám ô + mười tám ô, rồi tám ô coda); đoạn một ba câu a b a1 (Lyadov, Prelude op. 46 số 2) *(Mazel, ch. VI §1)*.

## Ba phần đơn

### Định nghĩa và nguồn gốc

Ba phần đơn là "bước tiếp theo" sau hai phần; nhưng về lịch sử, Sposobin cho rằng nó hình thành **từ hai phần**, khi phần giữa và tái hiện lớn lên và tách ra, đạt kích thước không nhỏ hơn phần một — "ví dụ của sự lớn lên bên trong của hình thức, kết quả là tăng số phần chính và hình thành hình thức mới" *(Sposobin, §53)*. Thống nhất chủ đề được bảo đảm bằng sự giống nhau của hai phần ngoài; phần giữa thường cũng dựa trên chất liệu ấy. Hình thức khép về điệu tính; phần trong thường chuyển sang giọng phụ. Cấu trúc linh hoạt: tái hiện hay mở rộng, phần giữa (nhất là kiểu phát triển) thường rất phát triển — tỷ lệ chung kém xác định hơn hai phần; ba phần "đặc biệt linh hoạt và dễ thích ứng".

::form A:8 B:8 A:8 | Ba phần đơn cơ bản: đoạn nhạc – phần giữa – tái hiện (kích thước có thể rất khác nhau)

Mazel nêu tiêu chí phân biệt với hai phần có tái hiện: khi sau phần giữa phát triển, **tái hiện nhắc lại cả đoạn nhạc đầu** (chứ không chỉ một câu), thì đó là ba phần, bất kể phần giữa dài bao nhiêu. Ví dụ: Beethoven, Sonata số 20, Tempo di Menuetto — đoạn đầu 8 ô, phần giữa chỉ 4 ô, tái hiện 8 ô (tỷ lệ ấy cũng có trong *Feuillet d'album* của Chopin). Nhưng nhắc lại cả đoạn **không phải tiêu chí chính xác duy nhất**: có khi tái hiện chỉ một câu mà quy mô phần phát triển và tái hiện mở rộng lớn đến mức hình thức được nghe như ba phần (Chopin, Etude Mi giáng thứ op. 10 số 6) *(Mazel, ch. VI §1)*.

### Tranh luận: hai phần hay ba phần?

Mazel dành một chú thích dài cho vấn đề biên giới: ông ghi rằng sách của A. Schoenberg (*Models for Beginners in Composition*, 1942) gọi hai phần có tái hiện là "ba phần với tái hiện rút gọn" (vì với Schoenberg có tái hiện là đủ để thành ba phần); còn sách *Musical Form* của E. Prout, ngược lại, xếp mọi hình thức tái hiện có phần giữa phát triển vào **hai phần** (chỉ những hình thức có phần giữa chất liệu mới mới là ba phần), với ba lý do: phần giữa phát triển không đủ độc lập; ranh giới đoạn một – phần giữa (kết trọn) sâu hơn ranh giới phần giữa – tái hiện; khi lặp các phần thì phần giữa được lặp cùng tái hiện. Theo Mazel, hai quan điểm cực đoan ấy có được là vì trong hai phần có tái hiện thật có một yếu tố ba phần (sự tái hiện), còn trong ba phần với phần giữa phát triển có yếu tố hai phần — "vì thế biên giới có phần mờ, dù số trường hợp không tranh cãi là rất lớn". Ông đề xuất thuật ngữ trung lập **"hình thức tái hiện đơn"** (простая репризная форма) cho các trường hợp lưỡng khả, hoặc **"hai – ba phần"** (Beethoven, Sonata số 15, Andante, phần một) *(Mazel, ch. VI §1)*.

Mazel cũng phản bác cách của giáo trình do Yu. N. Tyulin chủ biên (1974), nơi một số hình thức ba phần có coda (Chopin, Prelude Fa thăng thứ số 8; các etude op. 25 số 2, op. 10 số 1, op. 10 số 4) được coi là một kiểu hai phần riêng ("hai phần tái hiện"). Ông cho rằng tỷ lệ hai "phần" giả định ở đó thường không tự nhiên và coda thường là coda của cả hình thức, không nên gắn vào tái hiện; các nét hai phần ấy chỉ là "đặc tính riêng của một số hình thức ba phần có coda trong âm nhạc sau Beethoven" *(Mazel, ch. VI §3, chú thích)*. Đây là một **điểm bất đồng giữa các trường phái Xô viết**, cần ghi nhận khi đọc các sách khác.

### Phần một

Phần một là đoạn nhạc một giọng hay chuyển giọng, chủ yếu hai câu như đoạn một của hai phần. Sposobin thừa nhận các dấu hiệu phân biệt đoạn một của hai phần và ba phần "còn chưa được nghiên cứu đủ"; nhưng ông thấy một dấu hiệu: **sự mất cân bằng** gắn với nội dung có tầm vóc, tự nhiên dẫn tới phát triển rộng hơn. Ví dụ: Beethoven, Giao hưởng số 1, menuet — đường giai điệu lao nhanh, đi lên không ngừng khiến không thể có một phần tiếp nối ngắn gọn bằng độ dài đoạn một *(Sposobin, §54)*.

Hoà âm: có tự do lớn hơn trong việc chọn giọng phụ kết đoạn một, vì hai phần sau đủ thời gian quay về (Tchaikovsky, *Evgeny Onegin*, hợp xướng *Девицы, красавицы*, đoạn một từ La tới Si). Sposobin còn ghi rằng "khoảng từ giữa thế kỷ XX" (bản OCR; theo ngữ cảnh nhiều khả năng là XIX — **chưa đối chiếu bản in**) thường gặp phần một hở, kết nửa. Cấu trúc: tự do hơn hai phần — có đoạn ba câu (Beethoven, Sonata op. 2 số 1, menuet), câu năm, bảy ô.

### Phần giữa kiểu phát triển (ba phần một chủ đề)

Ba phần **một chủ đề** rất phổ biến; phần giữa không đem tương phản chủ đề. Sơ đẳng nhất là phần giữa nhắc lại cả đoạn một ở giọng phụ (Weber, *Freischütz*, valse; Chopin, Mazurka op. 33 số 2, phần một) — khá hiếm. Quan trọng hơn nhiều là phần giữa **phát triển** các yếu tố đoạn một; kiểu này "hình thành trọn vẹn ở nửa sau thế kỷ XVIII" và là kiểu cơ bản *(Sposobin, §55)*.

- Dù một chủ đề, vẫn có tương phản giai điệu – tiết tấu: các yếu tố tách ra thường ngắn (một – hai ô), vào điều kiện hoà âm khác nên đổi quãng, đổi tiết tấu — "ánh sáng mới".
- Trong phần giữa phát triển đôi khi có một chủ đề **episode** (xuất hiện một lần, không nhắc lại) — Chopin, Mazurka Sol thăng thứ op. 33 số 1.
- Biến đổi lớn có thể gây ấn tượng chủ đề mới: hình tiết tấu kết của đoạn một trong scherzo Sonata op. 2 số 2 của Beethoven, đặt vào legato và đổi kết, thường bị coi là chủ đề mới.
- Hoà âm: cơ sở tương phản là ưu thế âm không ổn định ở giọng chính hoặc giọng phụ. Phần giữa chỉ một hợp âm át — thường ở hai phần — hiếm ở ba phần (Beethoven, Sonata op. 31 số 3, trio của menuet). Phần giữa dài cho thời gian chuyển giọng xa: trong menuet Giao hưởng số 1 của Beethoven (Đô trưởng) phần giữa chạm Đô thứ, Mi giáng, La giáng và giọng hạ át âm Napoli Rê giáng; công thức **T–D–S–T** lộ ra trước tái hiện, và tái hiện "đến như kết luận của xung đột giữa D và S".
- Kết: kết nửa ở át âm giọng chính hay chủ âm giọng át — tiền đề tới tái hiện; tiền đề tăng bằng các kết bổ sung trên át âm và âm nền át ở cuối phần giữa (Beethoven, Sonata op. 2 số 3, scherzo). Khi đi xa, cuối phần giữa có khi thành **phần nối** tách riêng; điển hình là phần nối trong scherzo op. 2 số 2: bốn ô đầu là bổ sung kết trên chủ âm Sol thăng thứ, tiếp theo cùng mở đầu ấy nhưng chuyển về tái hiện La trưởng.
- Cấu trúc: phần giữa bình thường không ngắn hơn đoạn một; có phần giữa chỉ một câu (Beethoven, Bagatelle La thứ trong op. 119 — khác hai phần ở chỗ tái hiện không ngắn hơn đoạn một); nhưng thường dài hơn, có khi gấp mấy lần. Phần giữa có thể là một đoạn nhạc loại riêng, nhiều lần chuyển giọng, hoặc một chuỗi cấu trúc không thành đoạn.

Mazel xác nhận: trong các phần giữa phát triển, "theo lệ không hình thành đoạn nhạc"; chúng thường kết bằng tiền đề — cấu trúc ở giọng chính trên âm nền át hay với ưu thế át âm. Ông ghi hai ngoại lệ hiếm: phần giữa kết bằng kết trọn ở giọng chính (Chopin, Mazurka op. 6; Tchaikovsky, *Búp bê mới* op. 39) *(Mazel, ch. VI §1)*.

### Phần giữa tương phản

Phần giữa có thể dựa trên **chủ đề mới riêng**, tạo tương phản lớn hơn. Sposobin nhận xét mức tương phản gắn với quy mô: hình thức càng nhỏ, tương phản càng nhỏ (tương phản lớn dễ gây "loè loẹt"); quy mô lớn thuận cho tương phản lớn và có khi sinh ra từ nó. Tương phản chủ đề hay được nhấn bằng hoà âm — đưa giọng mới ngay đầu phần giữa bằng một **bước nhảy điệu tính hay điều thức**, rồi về giọng chính qua chuyển tiếp mềm, "như giai điệu đi liền bậc sau bước nhảy". Cấu trúc phần giữa có chủ đề mới có thể mang tính trình bày toàn phần hay một phần, hoặc không ổn định kiểu phần giữa (Chopin, Mazurka op. 33 số 3) *(Sposobin, §59)*.

Mazel: phần giữa tương phản có thể là một đoạn nhạc, thậm chí đoạn nhắc lại (Chopin, Mazurka op. 33 số 3); ví dụ khác: Tchaikovsky, *Mélodie* op. 42 số 3 và chương II Concerto violin. Hiếm khi có phần nối nhỏ từ phần giữa tương phản về tái hiện (Chopin, Mazurka Sol thứ op. 67 số 2), cá biệt có phần nối giữa đoạn một và phần giữa (Grieg, *Nocturne*). Ba phần với phần giữa tương phản **hiếm hơn** kiểu phát triển; có phần giữa nửa tương phản nửa phát triển (Borodin, Quartet số 2, *Nocturne*); và có phần giữa chất liệu mới nhưng trình bày không ổn định như phần giữa phát triển (Grieg, *Nocturne*; phần giữa chương I *Sérénade mélancolique* của Tchaikovsky). Mazel giải thích: phần giữa, như một phần "trung gian", dựa vào hai phần ngoài nên không cần độ ổn định và định hình như chúng — và loại phần giữa ấy sẽ gặp lại trong ba phần phức với **episode** *(Mazel, ch. VI §1)*. Xem [[hinh-thuc-nga-ba-phan-phuc]].

Mazel xếp phần giữa thành dãy theo **mức độc lập**: phần giữa phát triển (không có hình thức riêng, không có chủ đề riêng) → episode (không có hình thức riêng nhưng có chủ đề riêng) → trio (có cả hai) *(Mazel, ch. VII §2)*.

### Tái hiện trong ba phần

Trong hai phần, tái hiện tương đối ngắn và ít độc lập, cùng phần giữa tạo một đoạn nhạc. Trong ba phần, "nguyên tắc tái hiện thể hiện đầy đủ, vì tái hiện ở đây là một phần độc lập và đủ phát triển" *(Sposobin, §56)*.

- Về chủ đề, thường lặp chất liệu đoạn một gần như không sửa, không đưa chủ đề mới; khi mở rộng có thể chứa tính phát triển, thường là mô tiến (Beethoven, Giao hưởng số 2, scherzo, phần một).
- Có ba phần **không có tái hiện chủ đề** nhưng có tái hiện điệu tính, chủ yếu trong thanh nhạc (Tchaikovsky, *Evgeny Onegin*, aria của Onegin cảnh ba).
- Điển hình là tái hiện chủ đề trùng tái hiện điệu tính; nhưng có tái hiện chủ đề vào ở giọng phụ, giọng chính trở lại muộn trong tái hiện. Loại này đôi khi bắt đầu ở **giọng hạ át âm**: nếu đoạn một kết ở át âm thì cả hình thức theo **T–D–S–T** (Bach, Prelude Mi trưởng, *Bình quân luật* tập I). Mazel xác nhận ví dụ Bach và thêm Mazurka Mi thứ op. 25 của Scriabin *(Mazel, ch. VI §1, chú thích)*.
- Hiếm khi tái hiện chuyển giọng như đoạn một; khi ấy tất phải có phần mới (tiếp nối tái hiện hay coda) để khẳng định chủ âm (Grieg, *Humoresque* Đô trưởng op. 6 số 3).
- Cấu trúc: dài bằng hoặc hơn đoạn một, chia câu tương tự — **khác cơ bản với hai phần**, nơi tái hiện bằng nửa đoạn một và không chia câu. Mở rộng thường ở câu hai, bằng nhắc lại (đơn, biến tấu, mô tiến) với chia nhỏ rồi tổng hợp kết. Rút gọn tái hiện ở ba phần cỡ nhỏ và trung bình "khá hiếm".

### Tái hiện giả

Cần phân biệt sự lệch giữa tái hiện chủ đề và tái hiện điệu tính với **tái hiện giả** (мнимая, ложная реприза). Dấu hiệu: đoạn đầu của đoạn một được trình bày ở **giọng phụ**, sau đó mới là tái hiện thật, đầy đủ, ở giọng chính, của chính đoạn đầu ấy và phần tiếp theo. Ví dụ của Sposobin: Schumann, *Scherzino* op. 26 số 3; Grieg, *Scherzo-Impromptu* op. 73 số 2 — ở cả hai, tái hiện giả ở La trưởng khi giọng chính là Si giáng trưởng làm tăng tính hài hước "như một 'trượt' nửa cung rồi 'sửa lại'". Khác với tái hiện lệch giọng (đoạn ở giọng phụ *không* nhắc lại mà chảy tiếp), ở tái hiện giả đoạn ấy được nhắc lại. Ba phần đơn là hình thức nhỏ nhất có tái hiện giả *(Sposobin, §57)*. Mazel phân tích một tái hiện giả trong phần giữa scherzo Giao hưởng số 7 của Beethoven (ở giọng hạ át âm), coi nó là một trong các phương tiện tạo ấn tượng hài hước — "một sự lừa đặc biệt" *(Mazel, ch. VII §3)*.

### Tái hiện tĩnh và tái hiện động

Sposobin: nhắc lại một cấu trúc sau âm nhạc khác, kể cả không thay đổi gì, gây "ấn tượng hoàn tất phát triển" khác hẳn lần đầu; tái hiện được cảm như "kết quả cần thiết của phát triển", nên cảm thụ nó "luôn động ở mức nào đó". Trong hình thức một chủ đề, sự xuất hiện trọn chủ đề sau khi phát triển từng mảnh đặc biệt quan trọng. Nhắc lại nguyên văn đôi khi gọi là **tái hiện tĩnh** vì tính máy móc, nhưng thuật ngữ "khá quy ước". Đối lại là **tái hiện động** — nhắc lại có biến đổi, với mức độ tuỳ chiều sâu thay đổi *(Sposobin, §58)*. Các thủ pháp:

| Nhóm | Thủ pháp | Ví dụ Sposobin dẫn |
|---|---|---|
| Giai điệu | hoa mỹ (động hoá ít); đưa cao trào chính vào tái hiện; thêm đối âm mới; xử lý mô phỏng, canon | Chopin, Etude Sol giáng op. 25 số 9; Tchaikovsky, *Nocturne* op. 19 số 4; Rimsky-Korsakov, *Snegurochka* |
| Hoà âm | hoà âm mới, ly giọng; mở tái hiện trên âm nền át giọng chính; đổi điều thức; mở tái hiện ở giọng hạ át âm | Mendelssohn, *Lời ca không lời* số 27 (Hành khúc tang); Beethoven, Sonata op. 57, chương I; Glazunov, Giao hưởng số 5, chương I; Tchaikovsky, *Забыть так скоро*; Grieg, *Sérénade pháp* op. 62 số 3 |
| Tiết tấu | dày chuyển động, lấy hình từ phần giữa; đổi nhịp độ | Rachmaninov, *Barcarolle* op. 10 số 3; Tchaikovsky, *Vũ khúc Nga* op. 40 |
| Kết cấu, âm sắc | thêm/bỏ quãng tám kép, dời quãng tám, đổi phối khí | — |
| Cấu trúc | mở rộng (điển hình bằng mô tiến đi lên), rút gọn | — |

Các thủ pháp thường kết hợp và đi cùng tăng cường độ. Trong ví dụ Sposobin phân tích, mở rộng tái hiện bằng mô tiến đi lên tích tụ căng thẳng tới cao trào chính ở cuối tái hiện; trong mô tiến lần đầu xuất hiện ly giọng hạ át âm, đối với giọng át của phần giữa. Tái hiện động **điển hình cho ba phần hơn hai phần**, vì hai phần bị hạn chế bởi độ dài chung và tỷ lệ chặt hơn (Scriabin, Prelude Sol thăng thứ op. 16 số 2 — hai phần với tái hiện động) *(Sposobin, §58)*. Sposobin nhận xét phần giữa có ý nghĩa với "sự phát triển xuyên suốt" của hình thức, "trái với sự chia hình thức thành các phần ranh giới rõ".

Mazel đặt thuật ngữ chặt hơn: khi tái hiện được nâng lên một mức căng thẳng mới, tạo đường phát triển xuyên suốt, thì **cả hình thức** gọi là động ("ba phần đơn động", "hai phần tái hiện động"), còn tái hiện gọi là **được động hoá** (динамизированная). Ông giải thích vì sao tránh nói "tái hiện động": các cụm "tái hiện chủ đề", "tái hiện điệu tính", "tái hiện âm sắc" hàm ý trở lại chủ đề, giọng, âm sắc cũ, trong khi "tái hiện động" hoàn toàn không hàm ý trở lại cường độ cũ — dễ gây hiểu lầm *(Mazel, ch. VI §1, chú thích)*. Mazel cũng đòi người phân tích tự hỏi: thay đổi để làm đa dạng việc nhắc lại (mục đích giao tiếp) hay để biến đổi tận gốc hình tượng?

Ví dụ phân tích của Mazel *(Mazel, ch. VI §1)*:

- **Mendelssohn, *Lời ca không lời* số 27 (Mi thứ, tinh thần hành khúc tang)**: bốn ô mở đầu, đoạn tám ô rồi nhắc lại có tăng kết cấu; phần giữa phát triển mười hai ô tăng dần; tái hiện vào ngay ở fortissimo, hai ô đầu hoà âm lại với ly sang trưởng song song (trang trọng hơn), mở rộng thành mười hai ô, rồi tắt dần tới pianissimo và bổ sung bốn ô — một làn sóng lớn với cao trào chung ở câu một của tái hiện.
- **Tchaikovsky, *Забыть так скоро***: tái hiện được kịch hoá — thứ thay trưởng, nhịp nhanh hơn, cao trào cao — theo lô-gích "nỗi cô đơn cay đắng có thể gay gắt lên khi nhớ hạnh phúc đã qua".
- **Scriabin, Prelude Đô trưởng op. 13 số 1**: hai phần tái hiện động; đoạn một mười sáu ô có nét hợp xướng, ở tái hiện thành "khúc tụng ca hùng tráng"; tái hiện giữ tiết tấu chùm ba của phần giữa nên vừa động hoá vừa **tổng hợp** (синтетическая); sau đó bổ sung mười một ô dùng chất liệu phần giữa và ly sang giọng hạ át âm.
- **Chopin, Etude Đô thứ op. 10 số 12**: motif cao trào bi kịch của phần giữa (ô 37–40) biến thành motif hành khúc anh hùng – bi kịch trong câu hai tái hiện (ô 65–68) — chất liệu này "thường bị nhầm là hoàn toàn mới".
- Cao trào chung của ba phần đơn thường ở cuối phần giữa (tiền đề — Chopin, Etude op. 10 số 10) hoặc trong tái hiện (Etude op. 25 số 9); trường hợp sau thường kèm mở rộng tái hiện và bổ sung, nếu không cao trào quá gần cuối sẽ gây ấn tượng kết "sớm". Mazel ghi nhận ở cả hai etude cao trào trùng điểm tỷ lệ vàng.

Mazel còn mô tả **tái hiện tổng hợp không động hoá**: chủ đề mới của phần giữa trở lại trong tái hiện, thay câu hai hay chen vào (*Lời ca không lời* số 1, 7, 39). Và ông phân biệt **coda có yếu tố tái hiện** với **tái hiện có nét coda** (*Warum?* của Schumann) — cả hai là sự kết hợp nét tái hiện và coda.

## Lặp các phần

**Hai phần**: thường gặp nhất là lặp từng phần riêng (‖: A :‖: B :‖); khá thường chỉ lặp đoạn hai; chỉ lặp đoạn một là ngoại lệ. Lặp thường nguyên văn, ghi bằng dấu lặp; khi biến tấu thì phải viết ra (Mozart, Sonata Đô trưởng số 8, Andante quasi un poco Adagio) *(Sposobin, §50)*. Mazel nhấn mạnh việc lặp không đổi kiểu hình thức: Prelude op. 16 số 5 của Scriabin có ba đoạn tám ô kết giống nhau, nhưng là **hai phần** vì đoạn ba chỉ nhắc lại đoạn hai (phần giữa + tái hiện) liền ngay sau. Với Andante của Mozart nói trên, ông chỉ ra một "hình thức bình diện thứ hai" — năm lần trình bày biến đổi "chủ đề" xen hai lần phần giữa, gần với biến tấu (thuật ngữ ông ghi là của V. Bobrovsky) — nhưng kiểu hình thức vẫn là hai phần tái hiện có lặp biến tấu: một ví dụ về sự **không trùng khớp giữa phương pháp phát triển ưu thế và kiểu hình thức** *(Mazel, ch. VI §1)*.

**Ba phần** *(Sposobin, §61)*:

- Thường nhất: lặp phần một riêng, rồi phần hai và ba cùng nhau — ‖: a :‖: b a :‖. Truyền thống này hình thành lịch sử từ cách lặp của hai phần: khi phần giữa và tái hiện lớn thành phần hai và ba, người ta vẫn lặp chúng cùng nhau. Hình thức một chủ đề kiểu này đôi khi gọi là "ba phần mang dấu hiệu hai phần".
- Đôi khi không lặp đoạn một, chỉ lặp phần giữa và tái hiện: a ‖: b a :‖, tức **a b a b a** — gọi là **ba – năm phần** (ba phần theo nguồn gốc trực tiếp, năm phần theo số phần thực tế).
- Hiếm khi lặp mỗi phần riêng.

::form A B A B A | Ba – năm phần đơn: phần giữa và tái hiện được nhắc lại (Sposobin §61; Mazel ch. VI §1)

Mazel: phần giữa phát triển hầu như không bao giờ được lặp riêng vì không có độc lập cấu trúc (một ngoại lệ là phần giữa của trio chương II Giao hưởng số 6 của Tchaikovsky); phần giữa tương phản dạng đoạn nhạc thì có thể lặp. Ba – năm phần có cả trên nền phần giữa phát triển (romance *Сомнение* của Glinka) lẫn phần giữa tương phản (*Ночной зефир* của Glinka) *(Mazel, ch. VI §1–2)*.

## Ba phần kép (двойная трехчастная форма)

Khái niệm này **chỉ có ở Mazel**. Khi các phần nhắc lại không chỉ biến tấu thường mà **đổi giọng** hay biến đổi kiểu khác, hình thức không gọi là ba – năm phần mà là **ba phần kép**. Các khả năng:

- Đoạn một khi lặp được dịch giọng: Beethoven, Sonata số 12, Hành khúc tang (phần trước trio) — đoạn một chuyển từ La giáng thứ sang Đô giáng trưởng, lần lặp bắt đầu ở Si thứ và chuyển sang Rê trưởng; Liszt, *Valse oubliée* (Fa thăng trưởng): đoạn một ở giọng chính, lặp ở giọng thứ bậc III. Có khi chỉ dịch đầu đoạn, kết vẫn như cũ (Chopin, Etude op. 25 số 11; Prokofiev, Hành khúc op. 65 số 10).
- Phần giữa lần hai được dịch giọng (A B A B1 A), hoặc tái hiện giữa được dịch (A B A1 B A); Liszt, *Nocturne* số 3 (La giáng trưởng, *Liebestraum*) kết hợp cả hai.
- Một biến thể thú vị: Tchaikovsky, *Lời ca không lời* La thứ op. 40 số 6 — phần giữa lần hai rút gọn, tái hiện lần hai chỉ là tái hiện điệu tính, không nhắc giai điệu đầu.

::form A B A1 B1 A | Ba phần kép (Mazel): các lần nhắc lại thay đổi điệu tính, không chỉ biến tấu

Mazel xếp ba phần kép vào nhóm **gần rondo** và hẹn bàn lại ở chương rondo *(Mazel, ch. VI §2)*; xem [[hinh-thuc-nga-rondo]].

## Hình thức lời ca và hình thức khổ

### Hình thức nhiều lời (куплетная форма)

Mazel: "Hình thức nhiều lời là hình thức của tác phẩm thanh nhạc gồm nhiều lần trình bày liền nhau cùng một cấu trúc âm nhạc với lời khác nhau." Các cấu trúc nhắc lại gọi là **lời** (куплет); nhắc lại có thể hoàn toàn chính xác hoặc có biến thể. Hình thức này thống trị dân ca, ca khúc quần chúng, thường gặp trong romance; trong dân ca Nga biến thể thường được đưa vào bằng ngẫu hứng khi hát *(Mazel, ch. VI §2)*.

- Lời ca có thể là một **đoạn nhạc** hoặc thường là **hai phần đơn**, nhất là trong romance: Glinka, *Не искушай меня без нужды* (hai lời, mỗi lời hai phần không tái hiện, có dạo đầu và kết piano) và *Венецианская ночь* — ở cả hai, phần hai của lời được mở rộng.
- Thường kết hợp với cấu trúc **lĩnh xướng – điệp khúc**; điệp khúc giữ lời ở mọi khổ, lĩnh xướng đổi lời. Mazel có một ghi chú thuật ngữ quan trọng: "đôi khi gọi là lời cả lĩnh xướng lẫn điệp khúc cộng lại, đôi khi chỉ lĩnh xướng".
- Trong bài nông dân lĩnh xướng thường chỉ là mở đầu ngắn cho phần hợp xướng chính; trong ca khúc quần chúng Xô viết hai phần thường xấp xỉ bằng nhau, mỗi phần là đoạn nhạc, cộng lại thành hai phần đơn — không tái hiện hoặc có tái hiện (*Священная война* của A. V. Aleksandrov, *Вечер на рейде* của Solovyov-Sedoy).
- Nếu lĩnh xướng hay điệp khúc tự nó là hai phần đơn thì cả cấu trúc thuộc **hai phần phức** (Novikov, *Гимн демократической молодежи*; Solovyov-Sedoy, *Песня летчиков*).
- Mazel phân tích *Quốc tế ca* (Degeyter): lĩnh xướng hai đoạn tám ô, điệp khúc một đoạn mười sáu ô; ngoài cách hiểu sơ đẳng là hai phần phức, có thể hiểu sâu hơn là **ba phần đơn** với tái hiện mở rộng, biến đổi mạnh, kiểu tổng hợp, làm điệp khúc — vì đoạn hai của lĩnh xướng ở giọng át, còn điệp khúc khôi phục giọng chính và chứa ngữ điệu của cả hai đoạn.

**Ưu và nhược** *(Mazel, ch. VI §2)*: ưu là đơn giản, rõ, dễ nhớ; cấu trúc âm nhạc hợp mọi lời và cho phép diễn tấu khác nhau — Mazel dẫn hồi ức của A. Serov rằng Glinka hát hai lời romance *В крови горит огонь желанья* khác đến mức người nghe không nhận ra nhạc giống nhau. Nhược là đơn điệu, các phần khép kín và tách rời, không có phát triển xuyên suốt hữu cơ, khớp nối có phần máy móc. Trong nhạc chuyên nghiệp có cách khắc phục: mọi lời trừ lời cuối không khép (kết ở giọng át), lời cuối mới khép — Glinka, *Кто она и где она* (ba lời đầu kết ở giọng át, lời bốn mở rộng hai ô, kết ở giọng chính); Quốc ca Liên Xô (hai lần đầu điệp khúc kết ở giọng át, lần ba ở giọng chính, mở rộng một ô như một "ritardando viết ra"). Khi biến đổi giữa các lời mang tính biến tấu hay tự do hơn nữa, Mazel gọi là **hình thức nhiều lời – biến tấu** và **hình thức nhiều lời tự do**; trên nền hình thức nhiều lời đã phát triển nhiều hình thức biến tấu chuyên nghiệp (xem [[hinh-thuc-nga-bien-tau]]).

Sposobin nói ngắn hơn: trong thanh nhạc, đoạn nhạc độc lập gần như chỉ có trong bài hát nhiều lời (строфическая, куплетная песня), "nhạc nhắc lại không đổi hoặc hơi biến tấu, còn lời mỗi lần mới" *(Sposobin, §37)* — tức ông dùng "строфическая" và "куплетная" như đồng nghĩa.

### Hình thức khổ (строфическая форма)

Đây là chỗ thuật ngữ hai sách **khác nhau**. Mazel ghi nhận "trong nhiều sách hình thức khổ được hiểu giống hình thức nhiều lời" (đúng như cách dùng của Sposobin), nhưng ông phân biệt: trong hình thức khổ, nhạc của các khổ thơ khác nhau "không giống nhau, không biến tấu cùng một nền, không biến đổi tự do nền ấy, mà khác nhau". Ông dẫn định nghĩa của K. N. Dmitrevskaya (*Анализ хоровых произведений*, 1965): hình thức khổ là hình thức "gồm một chuỗi phần – đoạn tương ứng với các khổ của lời thơ và khác nhau về nhạc". Các khổ thường có họ hàng ngữ điệu – tiết tấu. Hình thức này hay gặp trong thể loại thanh nhạc cổ (motet, madrigal), trong hợp xướng a cappella nhỏ thế kỷ XIX–XX (hợp xướng *Два великана* của E. Napravnik — năm khổ); nó gần với **hình thức xuyên suốt** (durchkomponiertes Lied). Có những hình thức trung gian giữa nhiều lời tự do và hình thức khổ thật sự *(Mazel, ch. VI §2)*. Xem thêm [[hinh-thuc-nga-thanh-nhac]] và [[lied]].

Mazel chỉ ra họ hàng giữa ba – năm phần và hình thức nhiều lời: trong *Сомнение* của Glinka, cặp đoạn nhạc + phần giữa (AB) không độc lập vì phần giữa dừng ở át âm, nhưng việc nhắc lại cùng nhạc với lời mới (AB + AB) vẫn có thể gợi cảm giác nhiều lời; "lời" cuối thì thiếu (A thay AB) nếu không có coda. Cả hai đều là phát triển hình thức đơn bằng nhắc lại: hình thức nhiều lời nhắc lại cái toàn thể, ba – năm phần nhắc lại các phần.

### Hình thức nhiều lời trong khí nhạc

Mazel dẫn *Valse* op. 70 số 2 của Chopin (hai phần không tái hiện, rồi nhắc lại — khác nhau chỉ ở chỗ lần đầu lặp đoạn một, lần sau không). Thú vị hơn là các tiểu phẩm của Liszt: *Nocturne* số 1 (La giáng trưởng; lời hai là biến tấu lời một, cuối lời một tránh chủ âm, dừng ở át âm để nối liền — nhưng phần hai lời ca vẫn là phần hai của hai phần, không phải phần giữa ba phần, vì cuối nó là một kết trọn rộng với hợp âm bốn – sáu kết); *Nocturne* số 2 (Mi trưởng, nhiều lời – biến tấu); *Nocturne* số 3 (ba phần kép mang yếu tố nhiều lời: ba "lời" ứng với ba kết cấu, ngăn bằng chỗ ngừng chứ không bằng kết trọn); *Consolation* số 3 (Rê giáng trưởng; lời hai mở rộng phần hai lên hai mươi mốt ô và đưa chất liệu tương đối mới) *(Mazel, ch. VI §2)*.

## Mở đầu và coda

**Hai phần**: mở đầu thường ngắn, liên hệ chủ đề hay kết cấu với hình thức chính; điển hình khi hai phần là tác phẩm độc lập. Coda ngắn tương xứng quy mô; hiếm khi rất phát triển, gần bằng phần chính; nhận ra coda qua dấu hiệu kiểu trình bày kết, nhất là kết nhắc lại trên chủ âm hay **âm nền chủ** (Bach, Prelude Rê thứ, *Bình quân luật* tập I) *(Sposobin, §51)*.

**Ba phần**: mở đầu thường ngắn, "không có gì mới" so với hai phần; trong coda đôi khi có trình bày có hệ thống chất liệu phần giữa, xử lý cho hợp tính kết (Tchaikovsky, *Bài ca mùa thu*) *(Sposobin, §62)*.

Mazel nhấn mạnh **quy mô coda** có thể lớn: Lyadov, Prelude op. 57 số 1 — đoạn một 12 ô, phần hai 9 ô, coda 12 ô; Scriabin, Prelude Si trưởng op. 37 số 3 — coda bằng cả hình thức hai phần trước nó. Ông cảnh báo **tỷ lệ cá nhân của tác phẩm có thể không khớp nghĩa đen của tên kiểu hình thức**: Prelude của Lyadov có tỷ lệ "ba phần" (12 + 9 + 12) nhưng thuộc kiểu hai phần vì phần ba là coda. Phân tích phải tính cả tỷ lệ cá nhân lẫn kiểu hình thức, vì kiểu hình thức cho biết chức năng cấu trúc (trình bày, phát triển, tái hiện, coda). Mở đầu đôi khi chứa chủ đề riêng tham gia phát triển: chương II Concerto violin của Tchaikovsky — chất liệu dạo đầu dàn nhạc trở lại trước tái hiện và trong coda, nên các cụm "một chủ đề", "hai chủ đề" không hoàn toàn hợp *(Mazel, ch. VI §1)*.

Mazel cũng chỉ ra một lỗi phân tích thường gặp: nhầm **coda có yếu tố tái hiện** thành tái hiện. Phần giữa phát triển đi trước tái hiện **không** kết bằng một kết trọn rộng (có hạ át âm và hợp âm bốn – sáu kết) ở giọng chính; nên sau một kết như vậy là coda, không phải tái hiện (Rachmaninov, Prelude Mi giáng trưởng; Chopin, Etude La giáng trưởng op. 25 số 12) *(Mazel, ch. VI §3, chú thích)*.

## Lịch sử

Mazel tóm các giai đoạn *(Mazel, ch. VI §3)*:

1. **Bach, Handel**: hai phần đơn (ba phần hiếm hơn nhiều) đặc trưng cho các điệu nhảy cổ (allemande, courante, sarabande, gigue, gavotte, menuet, bourrée) trong tổ khúc; có trong nhiều prelude và invention của Bach. Ở Bach hình thức đơn thường là hình thức của **tác phẩm độc lập** hay một chương của tác phẩm chu kỳ, ít khi là phần của chỉnh thể lớn không chu kỳ. Đặc điểm hai phần cổ bàn ở [[hinh-thuc-nga-sonata-co-va-hai-phan-co]].
2. **Cổ điển Vienne**: trong khí nhạc, hình thức đơn chủ yếu là **phần của tác phẩm** — chủ đề và các biến tấu, các phần rondo, phần trong ba phần phức; tác phẩm khí nhạc độc lập dạng đơn hiếm (một số bagatelle của Beethoven), nhưng trong thanh nhạc độc lập và lời ca thì thường.
3. **Sau Beethoven**: sự phát triển tiểu phẩm sinh ra nhiều tác phẩm độc lập dạng đơn và các biến thể mới — hai phần không tái hiện với phần hai phát triển, rồi yếu tố tái hiện trong coda; ba phần mà phần ba chỉ là **tái hiện điệu tính** (Mendelssohn, *Lời ca không lời* số 6, Sol thứ — đoạn mười ô chuyển sang giọng át, phần giữa tám ô, "tái hiện" tám ô không trùng chủ đề, yếu tố tái hiện chủ đề chỉ trong coda); tái hiện chủ đề không ở giọng chính (*Valse oubliée* số 1 của Liszt, *Сказка* Fa thứ op. 26 số 3 của Medtner).
4. **Hình thức đơn động**: truyền đạt phát triển đáng kể trong khuôn khổ nhỏ, biến đổi hình tượng (từ kìm nén sang xao động, trữ tình sang kịch tính, u sầu sang hân hoan hay bi kịch). Mẫu ở Chopin (prelude số 8, 21, 24; Etude op. 25 số 9), nhưng đặc trưng nhất cho Tchaikovsky, Rachmaninov, Scriabin: *Забыть так скоро*; *Давно ль, мой друг* của Rachmaninov (hai phần tái hiện: đoạn một Andante tranquillo, giọng thứ, nhịp ba, nhỏ; tái hiện agitato, trưởng cùng tên, nhịp bốn, đệm chùm ba, to — cũng là tái hiện tổng hợp vì giữ nhịp bốn và chùm ba của phần giữa); Prelude Đô thăng thứ của Rachmaninov; nhiều prelude của Scriabin.
5. **Ba phần đơn quy mô lớn** trong chương chậm của tác phẩm chu kỳ: canzonetta Concerto violin của Tchaikovsky, *Nocturne* Quartet số 2 của Borodin, chương chậm Concerto số 2 của Rachmaninov — Mazel gọi nó là "một trong những đỉnh cao của tính ca xướng trữ tình rộng rãi Nga trong khí nhạc" và lưu ý phải coi là ba phần (dù tái hiện chỉ một câu của đoạn phức đầu) vì mỗi phần đều triển khai rộng. Chương cuối Giao hưởng số 6 của Tchaikovsky là ba phần đơn động với phần giữa tương phản, chủ đề phần giữa trở lại trong coda — một yếu tố sonata.
6. Ở một số etude và prelude của Chopin, kết đoạn một không kèm dừng hay lặng, chuyển động liền chảy vào phần giữa, còn ranh giới phần hai – phần ba rõ nhờ tái hiện; khi tái hiện mở rộng và có bổ sung, các đường nét lớn gợi một cấu trúc hai phần lớn (Etude op. 25 số 9). Mazel coi đây chỉ là cách xử lý đặc biệt của hình thức ba phần cổ điển, không phải kiểu mới.

Sposobin ghi vai trò của **aria da capo** cổ (cuối XVII – nửa đầu XVIII) "trong sự hình thành ba phần đơn và phức" *(Sposobin, §77)*.

Asafyev đặt hai phần, ba phần vào bảng phân loại các **cấu trúc khép kín có "chỗ cắt" rõ**: (a) một phần — nhắc lại đồng nhất một tổ hợp (lời ca, bài hát khổ không điệp khúc, không khúc đàn); (b) hai phần — đối chiếu hai tổ hợp ít nhiều tương phản (bài hát có điệp khúc, khúc dạo, khúc đáp); (c) ba phần — "kiểu đối chiếu thông dụng nhất và đa dạng nhất theo công thức a + b + a" *(Asafyev, Q1, Phụ lục 1)*. Ông viết về "hình thức ba phần tuần hoàn gọi là ca khúc, đúng hơn là vũ khúc": "cấu trúc càng nguyên sơ và trừu tượng thì các biến thể phong cách trong nó càng đa dạng, tức sơ đồ cấu trúc càng 'chứa được nhiều'" *(Asafyev, Q2 ch. I, chú thích)*.

## Phạm vi dùng

**Sposobin** *(§52, §63, §74–78)*:

- Hai phần: tác phẩm nhỏ độc lập — prelude, tiểu phẩm có tiêu đề (nhất là trong tập), điệu nhảy, bài hát (đặc biệt nhiều lời), romance; và phần của chỉnh thể lớn hơn (ba phần phức, chủ đề biến tấu, một chủ đề rondo, hiếm khi sonata).
- Ba phần: "phổ biến cực rộng, có lẽ nhờ tính linh hoạt" — prelude, nocturne, điệu nhảy, hành khúc, tiểu phẩm có tiêu đề, bài hát, romance, aria; các chương khép kín của tác phẩm chu kỳ; phần của chỉnh thể lớn (ba phần phức, rondo, hiếm hơn sonata).
- Phụ lục cho ch. III–V: hai phần và ba phần **bắt nguồn từ nhạc nhảy và hát sinh hoạt**, có chủ đề tương đối khép kín, "ít mâu thuẫn bên trong lớn"; vì thế chúng hợp nhất với chất liệu gắn với ca – vũ, và "đến nay vẫn được gọi là hình thức ca khúc". Sposobin liệt kê các thể loại liên quan: điệu nhảy (bàn trong bài ba phần phức), hành khúc, thanh nhạc, và tiểu phẩm khí nhạc gần thanh nhạc (hát ru, barcarolle, romance, canzonetta, lời ca không lời, serenade, nocturne, elegie, rêverie, méditation) hoặc không định tính chất (prelude, etude, impromptu, moment musical, poème, intermezzo, bagatelle, humoresque, scherzo).

**Mazel** *(ch. VI §2)*: phần lớn romance, nhiều điệu nhảy, rất nhiều tiểu phẩm (prelude, etude); hình thức đơn cho phép một tác phẩm lớn hơn, phát triển hình tượng nhiều mặt hơn đoạn nhạc. Trong romance, đoạn một thường tự do hơn, không vuông, hay kết nửa hay chỉ một câu (Tchaikovsky, *Нет, только тот, кто знал*; *Ни слова, о друг мой*) vì lời đem lại tính trọn ý; ngược lại phần giữa romance ít tự do, ít tính phần giữa (chuyển giọng nhiều khó cho giọng hát, khổ thơ không cho cớ chia nhỏ hơn); và vì lời ít cho cớ tái hiện, romance hay dùng **hai phần không tái hiện** hơn khí nhạc. Nhưng hình thức thanh nhạc không nhất thiết theo lời: arioso của Agnès trong *Trinh nữ Orléans* (Tchaikovsky) là ba phần đơn động mà đoạn một kết trọn đúng lúc lời chưa trọn ý. Mazel còn nêu *Buổi sáng* op. 49 số 1 của Brahms — hai đoạn nhạc lặp không vuông (6 + 6 và 5 + 5) mà đoạn hai ngắn hơn nhưng phát triển mạnh hơn (chinh phục dần các đỉnh).

## Ba sách nói gì — đối chiếu

| Vấn đề | Sposobin | Mazel | Asafyev |
|---|---|---|---|
| Định nghĩa hai phần | "gồm hai đoạn nhạc"; phần hai là "đoạn nhạc thuộc loại riêng" | phần một là đoạn nhạc, phần sau không phức tạp hơn đoạn; "gồm hai đoạn" chỉ đúng cho một kiểu không tái hiện | "đối chiếu hai tổ hợp" (bài có điệp khúc) |
| Nguồn gốc | ba phần lớn lên từ hai phần (phần giữa và tái hiện tách ra) | hai phần từ nguyên tắc lĩnh xướng – điệp khúc, múa đơn – múa chung | hình thức gọi là "ca khúc" đúng hơn là vũ khúc |
| Biên giới hai/ba phần | tái hiện ba phần dài bằng đoạn một và chia câu | nhắc lại cả đoạn là đủ (không cần); bàn Schoenberg, Prout, Tyulin; đề xuất "hình thức tái hiện đơn" | — |
| Tái hiện động | "tái hiện tĩnh / động", liệt kê 5 nhóm thủ pháp | gọi hình thức là "động", tái hiện là "được động hoá"; tái hiện tổng hợp | — |
| Tái hiện giả | định nghĩa và ví dụ Schumann, Grieg | ví dụ trong scherzo Giao hưởng số 7 Beethoven | — |
| Ba phần kép | không có | có, xếp vào nhóm gần rondo | — |
| Nhiều lời / khổ | dùng như đồng nghĩa | phân biệt rõ (theo Dmitrevskaya) | khổ, lời là "một phần" trong bảng phân loại |
| Phê phán sơ đồ | — | nhắc định nghĩa không như hình học | "marsh với trio" không nói gì nếu không nói tiết tấu và ngữ điệu |

**Thuật ngữ**: Sposobin "середина" dùng cho cả phần giữa của hai phần (một câu) lẫn ba phần; Mazel phân biệt "середина" (phát triển) với "средняя часть" (phần giữa nói chung, có thể tương phản). Sposobin "динамическая реприза" = Mazel "динамизированная реприза" trong "динамическая форма". "Двух-трехчастная" và "простая репризная форма" là thuật ngữ Mazel dùng cho trường hợp lưỡng khả.

Asafyev viết, về chính cách định nghĩa các hình thức này: nói rằng hành khúc "là hình thức ca khúc ba phần (a + b + a), mỗi phần có thể gồm ba đoạn nhạc, đoạn ba nhắc lại đoạn một; phần ba nhắc lại phần một, phần hai gọi là trio, — tức là chưa nói gì về hành khúc như một hình thức cụ thể, nếu không chỉ ra tiết tấu riêng của hành khúc và tính chất đặc biệt của ngữ điệu"; "hành khúc với trio" chỉ là một giai đoạn trong tiến hoá của thể loại, "và vấn đề không nằm ở các đoạn nhạc 16 ô" *(Asafyev, Q1, Phụ lục 1)*. Ông thêm ở chú thích rằng dạy hình thức bằng cách bắt chước "mẫu lý tưởng" như học hát "theo giọng thầy" — học trò không học được gì nếu chưa hiểu tính quy định chức năng.

## Cách phân tích

1. **Xác định đoạn nhạc đầu** và kết của nó (một giọng? chuyển giọng sang đâu?). Xem [[hinh-thuc-nga-doan-nhac]].
2. **Xem phần tiếp theo**: là đoạn nhạc lặp (→ có thể hai phần không tái hiện kiểu điệp khúc) hay chuỗi cấu trúc không ổn định (→ phần giữa)?
3. **Tìm tái hiện**: nhắc lại cả đoạn hay một câu? ở giọng chính hay giọng phụ (tái hiện lệch, tái hiện giả)? Nếu chỉ một câu, so quy mô phần giữa và tái hiện để quyết hai phần hay ba phần; trường hợp lưỡng khả, ghi "hình thức tái hiện đơn" và nêu lý lẽ cả hai phía.
4. **Phân loại phần giữa**: phát triển (chất liệu đoạn một) hay tương phản (chủ đề mới)? có hình thức riêng không? kết bằng tiền đề, kết nửa hay (hiếm) kết trọn?
5. **Đánh giá tái hiện**: nguyên văn, biến tấu trang trí, hay được động hoá (cao trào mới, hoà âm mới, đổi điều thức, kết cấu của phần giữa)? có tính tổng hợp không?
6. **Ghi các lần lặp**: lặp phần nào, nguyên hay biến tấu, có đổi giọng không (ba – năm phần hay ba phần kép).
7. **Mở đầu, coda**: coda dùng chất liệu nào? có yếu tố tái hiện không? Đừng nhầm coda sau kết trọn rộng với tái hiện.
8. **Với thanh nhạc**: lời ca là đoạn nhạc hay hai phần? có lĩnh xướng – điệp khúc? các lời có khác nhau không (nhiều lời, nhiều lời – biến tấu, nhiều lời tự do, khổ)? Lời cuối có khép khác các lời trước không?
9. **Kết luận** bằng sơ đồ chữ (a a1 b a1; A B A1; A B A B A) và một câu nói kiểu hình thức phục vụ hình tượng thế nào.

## Bài tập

Từ "Tư liệu để phân tích" của Sposobin (cuối ch. III, IV, phụ lục) và ví dụ của Mazel.

1. **Hai phần** (Sposobin, ch. III): Beethoven, Sonata op. 2 số 1 chương II; op. 14 số 2 chương II; op. 26 chương I (chủ đề biến tấu); op. 79 chương III; Schubert, các valse op. 9a và écossaise op. 18; Mendelssohn, *Lời ca không lời* số 12, 16, 37, 44; Schumann op. 68 số 5, 16, 19, 21; Grieg op. 43 số 2, op. 62 số 3, op. 68 số 1; Tchaikovsky, *Растворил я окно* op. 63 số 2; Rachmaninov, *Весенние воды* op. 14 số 11, *Сирень* op. 21 số 5. Với mỗi bài: có hay không tái hiện, tái hiện câu nào, sơ đồ chữ và số ô.
2. **Ba phần** (Sposobin, ch. IV): Beethoven, Sonata op. 2 số 1 (menuet và trio), op. 2 số 2 (scherzo và trio), op. 10 số 2 chương II (không kể trio); Mendelssohn, *Lời ca không lời* số 1, 2, 3, 9, 22, 27; Schumann op. 15 số 1, 2, 7 (*Träumerei*), op. 68; Chopin, nocturne op. 9 số 2, prelude op. 28 số 11, 12, 19, etude op. 10 số 1, 4, 9, 12, op. 25 số 2, 3, 9, mazurka op. 33 số 1 và 3; Grieg op. 43 số 1, 4, 5, 6; Tchaikovsky op. 39 và op. 37bis; romance *Средь шумного бала*, *Забыть так скоро*. Xác định kiểu phần giữa, kiểu tái hiện (nguyên, biến tấu, động hoá), vị trí cao trào.
3. **Hai hay ba phần?** (Mazel): Chopin, Etude Mi giáng thứ op. 10 số 6; Beethoven, Sonata số 15, Andante (phần một); Chopin, Prelude Fa thăng thứ số 8. Viết lập luận cho cả hai cách hiểu rồi chọn một.
4. **Tái hiện giả**: Schumann, *Scherzino* op. 26 số 3; Grieg, *Scherzo-Impromptu* op. 73 số 2 — đánh dấu chỗ tái hiện giả, giọng của nó và chỗ tái hiện thật.
5. **Hình thức động** (Mazel): so sánh đoạn một và tái hiện trong Mendelssohn, *Lời ca không lời* số 27; Rachmaninov, *Давно ль, мой друг*; Scriabin, Prelude op. 13 số 1. Lập bảng các thủ pháp động hoá.
6. **Lặp và ba phần kép**: Glinka, *Сомнение*; Liszt, *Nocturne* số 3; Tchaikovsky, *Lời ca không lời* op. 40 số 6 — viết sơ đồ và chỉ ra chỗ đổi giọng.
7. **Nhiều lời**: Glinka, *Не искушай меня без нужды*, *Кто она и где она*; phân tích một ca khúc quen thuộc: lời ca là đoạn nhạc hay hai phần? lĩnh xướng – điệp khúc quan hệ thế nào?

## Liên kết

- Lộ trình: [[hinh-thuc-nga-lo-trinh]] · trước: [[hinh-thuc-nga-doan-nhac]] · sau: [[hinh-thuc-nga-ba-phan-phuc]]
- Liên quan: [[hinh-thuc-nga-rondo]], [[hinh-thuc-nga-bien-tau]], [[hinh-thuc-nga-thanh-nhac]], [[hinh-thuc-nga-sonata-co-va-hai-phan-co]], [[hinh-thuc-hai-doan]], [[hinh-thuc-ba-doan]], [[lied]]
- Bài tóm theo từng sách: [[sposobin-hinh-thuc-don]], [[mazel-hinh-thuc-don-va-phuc]], [[asafyev-hinh-thuc-nhu-qua-trinh]]
`,
  },
  {
    slug: 'hinh-thuc-nga-ba-phan-phuc',
    title: 'Ba phần phức và hai phần phức — trường phái Nga',
    category: 'form',
    aliases: [
      'hình thức ba phần phức',
      'сложная трехчастная форма',
      'hai phần phức',
      'сложная двухчастная форма',
      'trio',
      'episode',
      'эпизод',
      'da capo',
      'ba – năm phần phức',
      'hình thức trung gian',
      'промежуточная форма',
      'tương phản bên ngoài',
      'coda tổng hợp',
      'aria da capo',
      'menuet và trio',
    ],
    summary:
      'Ba phần phức là hình thức tái hiện ba phần mà phần một (và thường cả phần giữa) là một hình thức đơn hai hoặc ba phần, còn phần giữa tương phản rõ với hai phần ngoài. Bài gộp Sposobin (ch. V và phụ lục cho ch. III–V) và Mazel (ch. VII): tương phản bên ngoài và bên trong, trio và episode, tái hiện, mở đầu – coda, ba – năm phần phức, hình thức trung gian, nguồn gốc từ tổ khúc và aria da capo, hai phần phức, phạm vi dùng. Asafyev góp nhận xét về tương phản trong điệu nhảy ba phần và về việc Beethoven vượt "tính ba phần hình thức".',
    refs: RU_FORM_REFS,
    body: `
## Từ hình thức đơn đến hình thức phức

Mazel mở chương VII bằng một quan sát thống kê: trong các hình thức đơn, hai phần và ba phần đều rất thường; nhưng trong các hình thức phức, **ba phần phổ biến hơn hẳn** hai phần. Lý do (bàn ở cuối bài): hình thức phức đặt hai phần tương phản cạnh nhau, và sự đối chiếu ấy đòi một kết luận — mà kết luận tự nhiên nhất là trở lại phần một *(Mazel, ch. VII §1, §4)*.

Sposobin nhìn từ góc "lớn lên của hình thức": ba phần phức là ví dụ mới của sự **lớn lên bên ngoài**, gắn thêm phần mới vào một phần; điều này chỉ có thể trong giới hạn nhất định nếu phát triển chỉ dựa vào tương phản bên trong. Vì thế khi hình thức lớn lên, cần **tương phản bên ngoài** "như một động lực, khi khả năng của tương phản bên trong cạn" *(Sposobin, §64)*.

## Định nghĩa

**Sposobin**: "Hình thức ba phần phức là hình thức mà hai phần ngoài, giống nhau về chủ đề, là hai phần đơn hoặc ba phần đơn; còn phần giữa, có cấu trúc khác nhau, tương phản rõ với hai phần ngoài." *(Sposobin, §64)*

| Phần I | Phần II (giữa) | Phần III (tái hiện) |
|---|---|---|
| hai phần đơn hoặc ba phần đơn | hai phần đơn, ba phần đơn, đoạn nhạc, hoặc episode có tính phần giữa không ổn định | nhắc lại phần I |

**Mazel**: "Hình thức ba phần phức là hình thức ba phần có tái hiện, mà phần một được trình bày ở hình thức hai hoặc ba phần đơn, còn các phần khác không chứa hình thức phát triển hơn." Định nghĩa này "xây theo cùng nguyên tắc với định nghĩa hình thức đơn, chỉ đẩy nguyên tắc ấy lên một bậc" *(Mazel, ch. VII §1)*.

Khác biệt quan trọng thứ hai theo Mazel không nằm ở cấu trúc mà ở **loại phần giữa**: trong ba phần đơn, phần giữa phát triển thường gặp hơn phần giữa tương phản; trong ba phần phức thì ngược lại — phần giữa "theo lệ tương phản với hai phần ngoài và chỉ trong rất hiếm trường hợp mang tính phát triển chất liệu phần một". "Đối chiếu tương phản hai phần chính và sự nhắc lại tái hiện phần đầu nằm ở nền tảng của tuyệt đại đa số hình thức ba phần phức." *(Mazel, ch. VII §1)*

Ví dụ mẫu trong phụ lục sách Sposobin: **Myaskovsky, *Пожелтевшие страницы* op. 31 số 7** (phần I hai phần đơn có lặp cả hai đoạn; trio ba phần đơn có lặp đoạn một; tái hiện đầy đủ không lặp) cho ba phần phức với trio; **Scriabin, *Nocturne* op. 5 số 2** (phần I hai phần đơn; tái hiện đầy đủ có mở rộng) cho ba phần phức với episode *(Sposobin, phụ lục P1, P2)*.

::form A:16 B:16 A:16 | Ba phần phức: mỗi khối là một hình thức đơn (A, B) hoặc một episode (B); A cuối thường là da capo

## Tương phản bên ngoài và tương phản bên trong

Sposobin phân biệt hai loại tương phản *(Sposobin, §64)*:

- **Tương phản bên ngoài** (внешний контраст): đối chiếu các phần độc lập, ranh giới rõ.
- **Tương phản bên trong** (внутренний контраст): đạt bằng biến đổi dần, "một yếu tố chảy ra từ yếu tố kia" — thấy ở đoạn nhạc và ở hai, ba phần đơn một chủ đề (công việc chủ đề trong phần giữa).

Tương phản bên ngoài có trong ba phần đơn với phần giữa chủ đề mới, nhưng với hình thức phức nó "điển hình hơn hẳn, vì nằm ở nền tảng, là nguyên tắc hình thành chính". Ông cảnh báo: thuật ngữ "bên ngoài" có phần quy ước, vì một sự thống nhất nhất định — "không phải lúc nào cũng diễn đạt được bằng lời" — là điều kiện bắt buộc.

### Tính chất của tương phản

Sposobin cho rằng ba phần phức có lẽ hợp nhất để biểu hiện **tương phản tâm trạng, ấn tượng, trạng thái**; ông chỉ nêu vài cặp tiêu biểu *(Sposobin, §65)*:

| Phần ngoài | Phần giữa | Ví dụ Sposobin dẫn |
|---|---|---|
| sôi nổi | bình thản hơn | Tchaikovsky, *Valse-scherzo* op. 7 |
| nhẹ nhõm | ca xướng (cantilena) | Tchaikovsky, Giao hưởng số 1, scherzo |
| trầm ngâm, bi ca | xao động, nồng nhiệt | Scriabin, *Nocturne* op. 5 số 1 |
| u tối, cuồng phong | sáng hơn | Chopin, Sonata op. 35, scherzo |
| bi kịch hành khúc tang | bình yên ("như sự lãng quên") | Chopin, Sonata op. 35, Hành khúc tang |

Ngay khi phần ngoài và phần giữa dựa trên cùng một chủ đề, nó được biến hình đến mức tính chất khác hẳn (Grieg, *Scherzo* op. 54 số 5); trường hợp biến đổi rất ít như Grieg, *Menuet* op. 57 số 1, là hiếm. Tương phản không chỉ bằng giai điệu – tiết tấu mà bằng kết cấu (dày ↔ thưa), kiểu đệm, âm vực, âm sắc (tutti ↔ một nhóm đàn dây hay kèn gỗ; dàn nhạc ↔ solo; đàn dây ↔ kèn gỗ; piano ↔ violin) và — nhất là ở các nhà lãng mạn và về sau — **nhịp độ**.

Mazel bổ sung một quy luật về **hướng** của tương phản: hai phần ngoài mở đầu và kết thúc tác phẩm, nên quyết định tính chất chung hơn phần giữa (tái hiện "thực chất khẳng định vai trò chủ đạo của phần một"). Vì vậy trong tác phẩm tích cực, sôi nổi, phần giữa thường bình thản hơn; còn trong tác phẩm trữ tình, phần giữa thường sôi nổi hay xao động hơn *(Mazel, ch. VII §1)*.

Mazel cũng phân biệt hai mức quan hệ: ở trường hợp đơn giản nhất (đa số hành khúc, điệu nhảy) các hình tượng đối chiếu tuy có thống nhất (nhịp độ, nhịp) nhưng "không chảy ra từ nhau, không tác động lẫn nhau, không làm giàu cho nhau" — đối chiếu khá bên ngoài, hình thức như được "lắp" từ hai hình thức đơn "làm sẵn" cộng nhắc lại cái đầu. Ở các mẫu phát triển hơn, các phần gắn bởi sự thống nhất phát triển rõ hơn và các hình tượng tương phản tác động lẫn nhau chặt hơn *(Mazel, ch. VII §1)*.

Asafyev đặt vấn đề này trong lý thuyết "đồng nhất và tương phản" của ông: so 33 biến tấu Diabelli của Beethoven với "một hình thức vũ khúc ba phần đơn giản nhất, nơi tương phản lộ ra trong sự xen kẽ giai điệu của đoạn một và đoạn hai, rồi trio, rồi lại hai đoạn đầu, và nơi quan hệ chức năng giữa các phần chỉ thể hiện bằng một kế hoạch điệu tính nhất định, chứ không bằng chủ đề và không bằng phát triển", thì "sự phức tạp thuộc về biến tấu". Trong điệu nhảy đơn giản, tương phản "dù chiếm ưu thế (các giai điệu khác nhau) lại được cảm thấy ở mức yếu hơn" và không tự sinh ra sự đồng nhất mạnh như biến tấu sinh ra tương phản; "khác biệt nằm ở mức độ, không ở bản chất" *(Asafyev, Q1 ch. VII)*.

## Nguồn gốc lịch sử

Mazel trình bày nguồn gốc kỹ nhất *(Mazel, ch. VII §1–2)*:

- Ba phần phức kết tinh **cuối thế kỷ XVII – đầu thế kỷ XVIII**, gắn với khát vọng phản ánh tương phản trong những tác phẩm lớn hơn mà vẫn nhất quán.
- **Nguyên mẫu** là cặp hai điệu nhảy cùng tên trong **tổ khúc cổ**, với điệu đầu nhắc lại sau điệu sau: Menuet I – Menuet II – Menuet I (*Tổ khúc Anh* Fa trưởng của Bach); Gavotte I – Gavotte II – Gavotte I (*Tổ khúc Anh* Sol thứ và Rê thứ). Lần nhắc lại không viết ra mà ghi "Menuet I da capo". Mỗi điệu nhảy là hai phần đơn (ít hơn, ba phần đơn). Điệu thứ hai thường cùng nhịp độ, cùng nhịp, cùng chủ âm, nhưng điều thức đôi khi đổi (trong Tổ khúc Anh Rê thứ, Gavotte II Rê trưởng giống chủ đề Gavotte I và chỉ là biến thể trưởng của nó).
- Điệu thứ hai đôi khi tương phản bằng chuyển động tiết tấu đều và bình thản hơn, kết cấu trong hơn: thành lệ viết nó **cho ba nhạc cụ** trong tác phẩm dàn nhạc và **ba bè** trong tác phẩm clavier. Từ đó phần giữa có tên **trio**, giữ đến nay trong các thể loại gắn với chuyển động (điệu nhảy, hành khúc) dù thực tế không ba bè. Tên "trio" thay "Menuet II" đã có trong *Tổ khúc Pháp* Si thứ của Bach. Khi trio ở điều thức khác thì ghi **Minore** (phần một trưởng) hay **Maggiore** (phần một thứ).
- Nguồn thứ hai là **aria da capo** cổ, sau phần giữa nhắc lại phần đầu — "một tiền thân lịch sử của ba phần phức, bên cạnh tổ khúc cổ".
- Ba phần phức với **episode** có lẽ bắt nguồn từ các thể loại hát – múa cổ — múa vòng có hát — và từ các hình thức biến tấu. Ghi chú: trong sách giáo khoa cũ, ba phần phức với episode được xếp vào các hình thức rondo. Không ngẫu nhiên mà trong ba phần phức với episode tái hiện rất hay được biến tấu, và hay có nhắc lại biến tấu các phần nhỏ (chương chậm Sonata số 16 của Beethoven).

Sposobin ghi gọn hơn: tên trio "còn lại từ thời (thế kỷ XVII) khi những phần như thế được viết cho ba bè" *(Sposobin, §67)*, và aria da capo cổ (cuối XVII – nửa đầu XVIII) có vai trò quan trọng nhất trong sự hình thành ba phần đơn và phức *(Sposobin, §77)*. Hai sách thống nhất về hai nguồn (tổ khúc, aria da capo); chỉ Mazel nêu thêm nguồn hát – múa và biến tấu cho kiểu episode.

## Phần một

Phần một là hai phần đơn hoặc ba phần đơn *(Sposobin, §66; Mazel, ch. VII §2)*:

- **Về chủ đề**, thường đồng nhất bên trong; trong phần giữa của nó không đưa chủ đề mới, vì thủ pháp ấy "được để dành" cho phần giữa của cả hình thức. Có ngoại lệ (Beethoven, Sonata op. 2 số 2, scherzo) nhưng khi ấy tương phản kém hơn tương phản mà phần giữa chung sẽ đem lại.
- **Về hoà âm**, bình thường là cấu trúc khép, có kết trọn. Sposobin ghi rằng khoảng từ giữa thế kỷ XIX (bản OCR in "XIX" ở đây) đôi khi phần một **hở** — kết nửa hay chuyển sang giọng phụ — để tính không ổn định đi xuyên suốt (Tchaikovsky, Quartet số 1, *Andante cantabile*). Mazel nêu một ví dụ kết ở giọng át: romance *Я помню чудное мгновенье* của Glinka.
- Trong phần một có thể có các lần lặp điển hình của hình thức đơn.

## Phần giữa: trio và episode

Mazel chia phần giữa ba phần phức làm hai loại *(Mazel, ch. VII §2)*:

1. **Trio** — phần giữa có **hình thức độc lập**: đoạn nhạc, hai phần đơn hoặc ba phần đơn, "bất kể tên ấy có ghi trong bản nhạc hay không"; cũng tính là trio những phần giữa có hình thức độc lập nhưng không khép.
2. **Episode** — phần giữa **không có hình thức độc lập**, gồm một chuỗi cấu trúc và thường không ổn định về điệu tính.

Sposobin dùng cùng thuật ngữ và cũng tuyên bố sẽ gọi phần giữa có cấu trúc ấy là trio dù bản nhạc không ghi gì; ông nêu các tên khác: **Alternativo**, **Maggiore**, **Minore** *(Sposobin, §67)*. Ông cảnh báo không nhầm **trio** với **phần giữa** (середина) của hình thức đơn: trio có tính định hình chung, phần rõ ràng, tuần hoàn cấu trúc như một hình thức đơn hay đoạn nhạc — "các thuật ngữ này không nên lẫn lộn".

Điểm chung của trio và episode: cả hai xây trên **chất liệu mới**, thường ở **giọng mới**, nên tương phản điệu tính tăng cường tương phản chủ đề. Mazel xếp các loại phần giữa thành dãy theo mức độc lập: **phần giữa phát triển** (không có hình thức riêng, không có chủ đề riêng) → **episode** (không có hình thức riêng, có chủ đề riêng) → **trio** (có cả hai) *(Mazel, ch. VII §2)*.

### Trio

**Chủ đề**: tương phản không chỉ ở hạt nhân chủ đề mà cả ở cách phát triển giai điệu: nếu giai điệu phần ngoài có tầm rộng thì giai điệu trio thường đi trên một bình diện, giữ một âm vực, và ngược lại; sự sôi nổi của phần ngoài và sự kìm nén của trio (hay ngược lại) thường gắn với thể loại *(Sposobin, §67)*.

**Điệu tính**: tương phản chủ đề rất thường được nhấn bằng tương phản điệu tính — trio ở giọng phụ, thường vào **không có phần nối**, ngay sau phần một; vậy tương phản chủ đề được tăng cường bằng **bước nhảy điệu tính hay điều thức**. Sposobin lập bảng các giọng điển hình; bảng trong bản OCR bị vỡ dòng, phần đọc được cho thấy:

| Giọng chính | Không đổi điều thức | Đổi điều thức |
|---|---|---|
| trưởng | giọng chính; bậc IV (hạ át âm) | bậc VI (song song của giọng chính); thứ cùng tên |
| thứ | bậc IV (hạ át âm); bậc VI (nhóm hạ át âm) | bậc III (song song của giọng chính); trưởng cùng tên |

(Việc xếp bậc VI của giọng thứ vào cột nào không đọc chắc được trong bản OCR — **cần đối chiếu bản in**.)

Mazel nói cùng điều bằng chức năng: các giọng thường gặp nhất ở phần giữa ba phần phức (ngoài giọng chính) là **giọng phía hạ át âm** và **giọng cùng tên**; trong ba phần đơn một chủ đề, phần giữa thường ở giọng át hay không ổn định, hoặc dựa chủ yếu trên chức năng át. Ông giải thích: vùng át âm dùng khi các chủ đề tương phản nhưng "họ hàng, gắn với nhau bằng một đường phát triển"; vùng hạ át âm dùng khi cần nhấn tương phản bên ngoài hơn, sự độc lập hoàn toàn của chất liệu mới — vì át âm hút về chủ âm mạnh hơn nhiều, còn hạ át âm độc lập hơn. Ví dụ: Schubert, *Impromptu* Sol giáng trưởng op. 90 số 3 (phần giữa ở thứ song song); Beethoven, Sonata số 4, chương chậm (bậc VI thấp); Chopin, Sonata Si giáng thứ, Hành khúc tang (trio ở trưởng song song, không mang chức năng hạ át âm). Ngoại lệ ở giọng át: Tchaikovsky, Giao hưởng số 4, chương II (phần giữa Fa trưởng, giọng chính Si giáng thứ). Phần giữa ở **giọng chính** gắn với nguồn gốc lịch sử: menuet Giao hưởng số 1 và Sonata số 18 của Beethoven, scherzo *Eroica*, Valse op. 64 số 1 của Chopin — khi ấy vai trò các phương tiện khác trong tạo tương phản đặc biệt lớn *(Mazel, ch. VII §2)*.

Ngoài giọng, hoà âm trio có thể khác ở **màu hợp âm** và **mức căng thẳng**, ví dụ đổi hợp âm thưa hơn hay dày hơn: trong trio menuet Giao hưởng số 1 của Beethoven, cơ sở chính của tương phản là hoà âm đổi **thưa hơn**; trio này không tương phản về giọng hay nhịp độ (nhưng có tương phản phối khí) *(Sposobin, §67)*.

**Cấu trúc**: trio có định hình chung, phần rõ, tuần hoàn như một hình thức đơn; nhưng bên trong thường tương phản với phần ngoài — nếu phần ngoài (nhất là phần giữa của chúng) có nét chia nhỏ thì trio có cấu trúc lớn hơn, và ngược lại.

### Episode

Episode khác phần giữa phát triển ở chỗ có **chủ đề độc lập**, khác trio ở chỗ **không có hình thức độc lập** *(Sposobin, §69; Mazel, ch. VII §2)*:

- **Chủ đề**: tương phản với phần ngoài cỡ như trio, nhưng tự do hơn, kém đồng nhất; hay có các thành tạo chủ đề mới.
- **Hoà âm**: thường bắt đầu ở giọng phụ đưa vào bằng bước nhảy; bên trong **không ổn định, chảy trôi**, vì các phần không khép — đây là chỗ khác trio và giống phần giữa của hình thức đơn. Cuối episode cũng thường có tiền đề tới tái hiện.
- **Cấu trúc**: không hình thành đoạn nhạc khép; cấu trúc thường chia nhỏ hơn phần ngoài.
- **Lặp**: episode theo lệ không được lặp, khác trio (các phần của trio, như mọi hình thức đơn, có thể lặp).
- **Phạm vi**: rất đặc trưng cho tác phẩm chậm, nhất là ở các nhà cổ điển (đặc biệt Beethoven); nếu không đổi nhịp độ thì tương phản được thay bằng tiết tấu sôi nổi hơn.

Mazel xác nhận phạm vi bằng một quan sát về Haydn, Mozart, Beethoven: trong các chương giữa sonata và giao hưởng viết ở ba phần phức, mọi chương nhanh (menuet, scherzo) có **trio**, còn chương chậm, với vài ngoại lệ, có **episode**. Lý do: sự phân chia rõ các phần của trio gắn với các thể loại nhảy nơi nó ra đời, nên hợp tác phẩm sôi nổi, mô-tơ; còn episode đặc trưng cho tiểu phẩm trữ tình, thường chậm. Về sau ranh giới này mờ đi — trio cũng dùng nhiều trong tiểu phẩm trữ tình chậm *(Mazel, ch. VII §2)*. Ông ghi các ngoại lệ ở nhà cổ điển: chương chậm Sonata số 15 của Beethoven; Andante Mi trưởng trong Sonata Đô trưởng số 10 của Mozart — "thêm một trường hợp nhà cổ điển Vienne dùng ba phần phức với trio trong chương chậm" *(Mazel, ch. VII §2–3, chú thích)*.

Sposobin ghi rằng khoảng từ giữa thế kỷ XIX (OCR in "XX"; theo ngữ cảnh — **chưa đối chiếu bản in**) nét trio và episode đôi khi trộn lẫn, khác biệt gần như xoá *(Sposobin, §69)*. Mazel nói cùng ý cho giai đoạn sau Beethoven *(Mazel, ch. VII §3)*.

## Chuyển tiếp giữa các phần

Mazel nêu một nguyên tắc cấu tạo đẹp *(Mazel, ch. VII §2)*: phần giữa **vào ngay** sau phần một, theo lệ không có phần nối — tương phản lộ ra rất rõ, không được làm mềm. Còn khi **trở về** tái hiện thì sự đối chiếu gắt thường được tránh, chuyển tiếp được làm mềm, bằng hai cách:

1. **Phần nối** (связующая часть) giữa phần giữa và tái hiện, chuyển về giọng chính, đôi khi chuẩn bị chất liệu tái hiện;
2. **Xây phần cuối của phần giữa** sao cho nó dẫn thẳng vào tái hiện.

Episode, vốn không khép, dùng cách hai. Trio có thể dùng cả hai. Ví dụ cách một: Beethoven, Sonata số 6, chương II; cách hai: menuet Sonata số 7, chương II Sonata số 9 của Beethoven. Theo Mazel, cấu tạo "vào đột ngột – về có chuẩn bị" làm hình thức "đặc biệt cân đối, trọn vẹn": sự thay đổi gắt bù bằng sự êm của đường về, giống nguyên tắc "nhảy rồi lấp" của giai điệu, hay chuyển giọng xa đột ngột rồi về dần của hoà âm. Ông ghi chú nguyên tắc này có cả ở hình thức lớn: chương I và II *Appassionata* ngăn bằng kết trọn và nghỉ, còn chương II chảy thẳng vào chương cuối (cũng thế trong Concerto violin của Tchaikovsky).

Sposobin mô tả thêm một kiểu nối "cao hơn, theo nghĩa hữu cơ": tận dụng **lần lặp truyền thống** trong hình thức đơn của trio — phần được lặp (ở hai phần: đoạn hai; ở ba phần: phần giữa và tái hiện) được viết lại thành cấu trúc chuyển về tái hiện chung. Ví dụ: Beethoven, Sonata op. 2 số 3, scherzo; trio là một đoạn nhạc cũng có thể dùng lần lặp như thế (op. 10 số 3, menuet). Khi trio khép, có thể chen cấu trúc mới giữa trio và tái hiện (Beethoven, Sonata op. 10 số 2) *(Sposobin, §67)*. Mazel dẫn trio scherzo *Eroica*: trio chỉ hở khi lặp phần giữa + tái hiện của nó *(Mazel, ch. VII §2)*.

Một trường hợp ngược của Mazel: chương II Giao hưởng số 4 của Tchaikovsky có phần nối **từ phần một sang trio** — phần một là ba phần đơn, sau đó dường như bắt đầu nhắc lại phần giữa + tái hiện như thường lệ, nhưng thực ra đó là phần nối sang trio; "các phần nối thường bắt đầu như sự nhắc lại một phần nào đó" *(Mazel, ch. VII §2)*.

## Tái hiện

Sposobin: tái hiện của ba phần phức đầy đủ "rất thường là nhắc lại chính xác phần một", nên thường không viết ra mà ghi **Da Capo** (D. C.); đôi khi vẫn viết đầy đủ; khi có thay đổi tất nhiên phải viết. Trong tái hiện các lần lặp của phần một thường bỏ, ghi **senza replica** (hay senza repetizione) — tức chơi lại cả phần một không theo dấu lặp *(Sposobin, §68; Mazel, ch. VII §2)*.

Nhìn chung tái hiện ba phần phức **chủ yếu tĩnh**. Thủ pháp động hoá chính "ít đổi bản chất, chỉ đẩy nhanh quá trình" là **rút gọn**; điển hình nhất là bỏ phần giữa và tái hiện của phần một, chỉ giữ đoạn nhạc đầu — gọi là **ba phần phức với tái hiện không đầy đủ** (Chopin, Polonaise Đô thứ; Mazel thêm nhiều mazurka của Chopin, ví dụ op. 7 số 2). Rút gọn không đổi việc định loại cả hình thức là ba phần phức *(Sposobin, §68; Mazel, ch. VII §2)*.

Thủ pháp động hoá mạnh hơn hiếm hơn *(Sposobin, §68)*:

- Biến đổi kết cấu do ảnh hưởng của trio: Chopin, *Nocturne* Đô thứ — chuyển động dữ dội nảy sinh trong trio phản ánh trong phần đệm tái hiện, mang tính xao động.
- Đổi quan hệ điệu tính: Chopin, Mazurka La thứ op. 59 số 1 — tái hiện chủ đề bắt đầu ở Sol thăng thứ, trước tái hiện điệu tính.
- Viết lại quan hệ điệu tính trong tái hiện: Ravel, *Menuet* trong *Le Tombeau de Couperin*.

Mazel phân tích kỹ *Nocturne* Đô thứ (op. 48 số 1) của Chopin như ví dụ tái hiện được động hoá hiếm hoi *(Mazel, ch. VII §2)*:

- Phần một: ba phần đơn động (8 + 8 + 8), "tính chất ngâm vịnh u sầu, bị kìm bởi đệm nghiêm, đều, có nét hành khúc tang".
- Trio: ở trưởng cùng tên, chậm hơn một chút; giữ yếu tố tiết tấu hành khúc nhưng nổi lên nét **hợp xướng** (choral), "trạng thái tập trung nội tâm sâu sắc"; về sau động hoá (chủ yếu bằng kết cấu), xúc cảm căng và xao động hơn. Trio cũng ba lần tám ô nhưng là **hai phần tái hiện** với lần lặp động hoá phần hai, không phải ba phần.
- Tái hiện chung giữ chuyển động chùm ba xao động của trio (chùm ba móc đơn ứng đúng chùm ba móc kép vì *Doppio movimento* nghĩa là nhanh gấp đôi), nhịp độ nhanh hơn phần một một chút; tính chất biến đổi, mất nét hành khúc; tái hiện hơi mở rộng và có bổ sung ngắn.
- Mazel kết luận đây là ba phần phức mà "các phần tương phản tác động lẫn nhau: tính chất phần giữa ảnh hưởng tới tính chất tái hiện", và kiểu kết cấu đệm ấy (nhắc hợp âm) "đón trước kết cấu thường gặp ở Scriabin".

## Mở đầu và coda

**Mở đầu**: khá thường; từ 1–2 ô đến cấu trúc phát triển đáng kể (Chopin, Polonaise La giáng trưởng). Về chủ đề, mở đầu thường liên hệ với phần ngoài, đôi khi với trio; nhưng (trừ vài trường hợp thanh nhạc) không bao giờ là trình bày trọn một đoạn dài của phần chính. Có mở đầu độc lập về chủ đề; mở đầu đôi khi được nhắc lại trước tái hiện *(Sposobin, §70)*. Mazel: mở đầu nhỏ chứa chuẩn bị điệu tính và xác lập nhịp độ, nhịp — như ở hành khúc; có mở đầu dựa trên chất liệu riêng đóng vai lớn trong tác phẩm (Tchaikovsky, Quartet số 2, Andante) *(Mazel, ch. VII §2)*.

**Coda**: rất hay có, đôi khi rất phát triển. Ghi chú bản nhạc: khi tái hiện chỉ ghi Da Capo thì thêm "e poi la coda", và chữ *Coda* ghi trên đầu cấu trúc kết mới. Nhiệm vụ của coda: khẳng định giọng chính và — không kém quan trọng — **khái quát** chất liệu chủ đề tương phản của cả hình thức *(Sposobin, §70)*. Sposobin phân ba loại theo chất liệu:

1. **Chất liệu phần ngoài** — không khái quát cả hình thức mà chỉ cho thấy chủ đề chính dưới ánh sáng khác (Beethoven, Sonata op. 31 số 3, menuet).
2. **Chất liệu phần giữa** — thường làm xích lại chủ đề của nó với chủ đề phần ngoài bằng **thống nhất điệu tính**, vì chất liệu ấy được chuyển về giọng chính (Tchaikovsky, *Bên lò sưởi*, *Bốn mùa* op. 37bis số 1).
3. **Chất liệu cả hai** — thường lần lượt, đôi khi kết hợp đối âm; Sposobin gọi là **coda tổng hợp** (синтетическая), vì nó "đem lại sự xích lại lớn nhất của các chủ đề trước đó tương phản" (Tchaikovsky, Quartet op. 11, *Andante cantabile*; Beethoven, Sonata op. 7, Largo con gran espressione; Sonata op. 28, Andante).

Hoà âm coda: ly giọng về phía hạ át âm, kết nhắc lại trên chủ âm, âm nền át rồi âm nền chủ (Beethoven, op. 2 số 3, scherzo) hoặc chỉ âm nền chủ (op. 31 số 3, menuet); coda phát triển rộng có thể rời kiểu trình bày kết ở đầu hay giữa. Cấu trúc coda, nhất là coda ngắn, thường là **chia nhỏ dần** (4 + 2 + 2, 2 + 1 + 1); kiểu ngược (2 + 2 + 4) ít điển hình hơn *(Sposobin, §70)*.

Mazel thêm các ví dụ coda tổng hợp *(Mazel, ch. VII §2)*:

- Beethoven, Sonata số 25, chương chậm — giai điệu phần ngoài ở bè trên, hình đệm lấy từ phần giữa.
- Chopin, *Fantaisie-Impromptu* — ngược lại: chủ đề phần giữa ở bè trầm trên nền chuyển động móc kép của phần ngoài.
- Tchaikovsky, Giao hưởng số 6, chương II — phức tạp hơn: phần ngoài sáng, trữ tình, chuyển động làn sóng, trưởng; trio buồn hơn với chuỗi motif "than" trochee đi xuống có âm treo, thứ. Phần nối từ trio về tái hiện đối chiếu motif hai phần và dần đẩy motif trio ra; coda đưa lại cả hai — chuyển động đi lên của phần một, motif đi xuống của trio — rồi **hợp nhất** chúng, cho cảm giác an bình, hai motif "không còn tương phản mà bổ sung nhau".

Mazel giải thích lợi thế coda dùng chất liệu phần giữa: chất liệu chỉ xuất hiện một lần được nghe lại, và vì trở lại ở giọng chính nên xích lại phần nào với chất liệu phần ngoài. Ông nêu một thủ pháp khác trong coda (từ scherzo Beethoven): đưa vào một yếu tố tương phản để rồi **vượt qua, phủ định** nó *(Mazel, ch. VII §3)*.

## Ba – năm phần phức

Như ở ba phần đơn, trình bày phần một một lần rồi lặp phần giữa cùng tái hiện tạo năm phần; nếu điều ấy xảy ra ở hình thức phức, ta có **ba – năm phần phức**: phần I – trio – tái hiện – trio – tái hiện. Ví dụ Sposobin dẫn: Beethoven, scherzo Giao hưởng số 4 và số 7; Glinka, *Hành khúc Chernomor* trong *Ruslan và Lyudmila* *(Sposobin, §71)*. Mazel dẫn đúng hai ví dụ *Hành khúc Chernomor* và scherzo Giao hưởng số 7, gọi đây là trường hợp lặp "không chỉ các phần trong hình thức đơn mà cả các phần chính của hình thức phức" *(Mazel, ch. VII §2)*.

::form A B A B A | Ba – năm phần phức (Sposobin §71): trio và tái hiện được nhắc lại

Asafyev mô tả cùng thực tế bằng ngôn ngữ "công thức trở thành": trong menuet Haydn, Mozart và scherzo Beethoven, đoạn đầu (a) thường là một tổ hợp hai phần (trình bày chủ đề, rồi phát triển nó qua các ly giọng với tổ hợp kết ổn định); phần giữa là trio ba phần có lặp phần một; phần ba nhắc lại phần một. Ở Beethoven thêm coda "như tổng hợp từ các yếu tố của trio và các phần chính" (Giao hưởng số 9); khi đó nảy sinh công thức **a + b + a + b**, "một chuỗi xen kẽ tuần hoàn và thực chất là sự phát triển của cấu trúc hai phần". Ông điểm qua các coda scherzo Beethoven: Giao hưởng số 3 — coda như một kết mở rộng trên basso ostinato; số 5 — scherzo chảy vào chương cuối và đan với nó; số 6 — chuyển sang tả cảnh (bão); số 7 — coda ngắn "như tiếng vọng của ý chính về trio"; số 9 — coda "tổng hợp nhất" *(Asafyev, Q1, Phụ lục 1)*.

### Phân tích của Mazel: scherzo Giao hưởng số 7 của Beethoven

Mazel dùng scherzo này làm mẫu cho sự biến đổi của ba phần phức từ menuet sang scherzo *(Mazel, ch. VII §3)*:

- Đoạn đầu (sau mấy ô mở đầu dứt khoát) **mở rộng rất nhiều** và kết bằng chuyển giọng sang bậc III trưởng (La trưởng khi giọng chính Fa trưởng) — điều khác thường với đoạn đầu ở Haydn, Mozart.
- Phần giữa của phần một rất phát triển, dựa trên nhắc lại nhiều lần một ngữ điệu trochee đi xuống quãng hai. Loại ngữ điệu ấy vốn đóng vai lớn trong nhạc trữ tình và có gốc ở những "tiếng thở dài" kết và những "cúi chào" kiểu galant của menuet cổ; nhưng ở đây (Presto, nhắc lại nhiều lần, chuyền âm vực, chủ yếu ở âm sắc hơi lạnh của kèn gỗ, không hoà âm như âm treo) nó **được tái nghĩa thành tính hài hước** — tính hài hước tăng chính nhờ mối liên hệ di truyền xa với "tiếng thở dài".
- Có **tái hiện giả** ở giọng hạ át âm Si giáng trưởng, tái hiện thật đến sau — "một sự lừa".
- Trio chậm hơn (*Meno mosso assai*, điều không thể ở menuet vì là điệu nhảy), ở giọng không thuộc bậc họ hàng thứ nhất (Rê trưởng); trio là **ba phần đơn động** — tính ca xướng, hơi đồng quê của đoạn đầu biến thành trang trọng, anh hùng trong tái hiện nhờ tăng mạnh cường độ.
- Sau tái hiện chung, trio lặp lại rồi tái hiện lần nữa: **ba – năm phần phức**. Trong coda một câu nhỏ của trio thoáng hiện rồi bị "quét đi" bằng kết Presto, khẳng định vai trò chủ đạo của chuyển động lửa của phần một.

Ông cũng nêu *Hành khúc tang* của *Eroica* là mẫu "ba phần phức đồ sộ kiểu Beethoven ở chuyển động chậm": quy mô tăng nhờ lặp biến đổi các phần trong phần một, nhờ viết lại tái hiện chung (đưa vào một episode phức điệu) và nhờ coda lớn.

## Hình thức trung gian giữa ba phần đơn và ba phần phức

**Sposobin**: khi hai phần ngoài là **đoạn nhạc** còn phần giữa tương phản (trio) là **hai hoặc ba phần đơn**, hình thức được coi là ba phần **trung gian**. Nó giống ba phần đơn ở hai phần ngoài (một đoạn nhạc) và khác ở phần giữa (trong ba phần đơn, phần giữa không ổn định, phát triển, hay nếu tương phản thì là một đoạn nhạc; ở đây phần giữa *nhất thiết* là hai hay ba phần đơn). Nó giống ba phần phức ở trio, khác ở phần ngoài — nhất là phần một (vì tái hiện ba phần phức có thể rút gọn). Ví dụ: Beethoven, Bagatelle op. 119 số 1; Schumann, *Davidsbündlertänze* op. 6 số 15; Mussorgsky, *Vũ khúc của những chú gà con chưa nở* (*Hình ảnh ở một cuộc triển lãm*); Chopin, Mazurka Mi thứ op. 41 số 2 *(Sposobin, §72)*.

**Mazel** đi xa hơn *(Mazel, ch. VII §2)*:

- Ông gọi ba phần phức là **đầy đủ** nếu cả ba phần chính đều là hai hoặc ba phần đơn; các loại khác (trio hay tái hiện chỉ là đoạn nhạc, episode thay trio) là **không đầy đủ**.
- Có thể dùng định nghĩa rộng — "ba phần phức là hình thức tái hiện ba phần mà ít nhất một trong ba phần là hai hoặc ba phần đơn và không phần nào chứa hình thức phát triển hơn" — để đơn giản hoá phân loại; nhưng định nghĩa hẹp (đòi phần **một** là hình thức đơn) có cơ sở, vì phần giữa ít quan trọng hơn phần ngoài và phần một là phần cơ bản.
- Thực tế: nếu đoạn nhạc đầu ngang tầm phần giữa hai/ba phần thì hình thức trung gian **gần ba phần phức** (Tchaikovsky, Valse La giáng trưởng op. 40 số 8; Chopin, *Nocturne* Si giáng thứ op. 9 số 1 — tái hiện chỉ một câu đoạn đầu, có phần nối với chủ đề mới từ phần giữa về tái hiện). Nếu hai đoạn ngoài nhỏ so với phần giữa, gần như mở đầu và kết trên cùng chất liệu, thì hình thức **gần hình thức đơn có khung** (Rimsky-Korsakov, *Bài ca của khách Ấn Độ* trong *Sadko*).
- Một số trường hợp gọi được là **hình thức đồng tâm** a b c b a: quanh tâm (c) là các "vòng tròn đồng tâm" (Chopin, Mazurka Mi thứ op. 41 số 2 — cũng là ba phần động).
- Ví dụ khác: Beethoven, Bagatelle Sol thứ op. 119 số 1; Schumann, *Kreisleriana*, bài số 3; Schubert, *Moment musical* Fa thứ op. 94 số 3 — đoạn tám ô ở giọng chính, phần giữa là hai phần đơn mười sáu ô ở trưởng song song, sau tái hiện là chuỗi bổ sung; khác ba phần phức điển hình ở chỗ **không có tương phản chủ đề**, nên gần ba phần đơn với phần giữa phát triển.
- Hiếm hơn nữa: phần một là đoạn nhạc, tái hiện là ba phần đơn (phần phụ trong trình bày overture-fantasy *Romeo và Juliet* của Tchaikovsky) — một dạng trung gian riêng, gốc từ ba phần đơn có tái hiện mở rộng đến mức đổi kiểu.

Mazel còn xếp vào "ba phần phức loại riêng" những hình thức tái hiện ba phần có phần viết ở hình thức **phát triển hơn hình thức đơn**: biến tấu (chương II Giao hưởng số 7 của Beethoven), sonata (scherzo Giao hưởng số 9 của Beethoven, Giao hưởng số 1 của Borodin); trường hợp sau thường xếp vào hình thức hỗn hợp *(Mazel, ch. VII §2)* — xem [[hinh-thuc-nga-hon-hop-va-ghep-tuong-phan]].

## Lịch sử sau thế kỷ XVIII

Mazel *(ch. VII §3)*:

- **Haydn, Mozart**: chủ yếu trong menuet, cũng trong chương chậm (Andante Mi trưởng của Sonata Đô trưởng số 10 của Mozart, "đáng chú ý vì sự giàu có giai điệu"); trong nhiều menuet giao hưởng của Mozart quy mô đã đáng kể.
- **Beethoven**: scherzo thay menuet — "tính chất sắc, động, bùng nổ" của scherzo "không thể không ảnh hưởng" tới hình thức thừa hưởng từ menuet.
- **Sau Beethoven**: tương phản giữa phần giữa và phần ngoài tăng — nhịp độ mới, nhịp mới, hay cả hai (Chopin, *Nocturne* op. 9 số 3 và op. 48 số 2), kết cấu khác hẳn, giọng không gần; đồng thời xu hướng xích lại và hợp nhất các chủ đề tương phản trong coda tăng. Khác biệt trio – episode mờ đi; phần giữa đôi khi có hai chủ đề khác hẳn nhau. Ba phần phức trở thành hình thức điển hình của vô số tiểu phẩm khí nhạc độc lập (nocturne, impromptu, moment musical…). Ghi chú ngoại lệ: Schubert, *Impromptu* Sol giáng trưởng op. 90 số 3 giữ cùng kết cấu ở phần giữa, tương phản được làm mềm; ở Grieg phần giữa đôi khi dựa trên cùng chất liệu, tương phản đạt bằng điều thức và cách trình bày khác (*Scherzo* op. 54 số 5 — tương phản lớn; *Menuet* op. 57 số 1 — tương phản gần nhỏ như giữa hai gavotte trong Tổ khúc Anh Rê thứ của Bach).
- **Chopin** làm giàu hình thức rất nhiều. Polonaise Fa thăng thứ: mở bằng chủ đề mở đầu kiểu át – tiền đề, đoạn đầu với "tiết tấu tổng hợp", tiến lên vượt "chướng ngại", cao trào nhảy quãng mười như một tiếng kêu thống thiết, rồi hợp âm át bảy của bậc II thấp nhắc lại theo tiết tấu đảo phách gợi những đảo phách "bùng nổ" của Beethoven (phần kết chương I *Eroica*); phần một là ba – năm phần đơn. Phần giữa có hai chủ đề mới: một chủ đề có yếu tố tả cảnh (tiếng ngựa phi hay đoàn diễu hành đến gần rồi xa, có lẽ sắc thái "chiến trận") và một chủ đề lớn *Tempo di mazurka*. Mazel giải nghĩa: polonaise thứ truyền đạt các biến cố bi thảm của lịch sử Ba Lan, còn mazurka trưởng sáng có thể coi là hình ảnh chính Ba Lan; tái hiện xông vào bất ngờ phá vỡ cảnh yên bình, trước coda tang tóc câu chính của mazurka trở lại "như tiếng kêu tuyệt vọng". Ở các tác phẩm khác Chopin tạo ba phần phức động và động – tổng hợp (*Nocturne* Đô thứ; Mazurka Fa thăng thứ op. 59 số 3), có khi xích các chủ đề lại đến mức sinh yếu tố sonata — cả hình thức thành **hỗn hợp** (*Barcarolle*, *Polonaise-Fantaisie*).
- **Glinka**: các romance với đối chiếu tương phản rực rỡ — *Я помню чудное мгновенье*, *Я здесь, Инезилья*, *Песнь Маргариты*.
- **Valse Nga**: hình thức như được "giao hưởng hoá" nhờ tương phản rực rỡ, phát triển rộng và thống nhất chỉnh thể — Tchaikovsky, *Valse des fleurs* (*Kẹp hạt dẻ*), valse Si giáng trưởng (*Người đẹp ngủ trong rừng*), valse Giao hưởng số 5; các valse hoà nhạc của Glazunov.
- **Tchaikovsky**: quy mô lớn trong chương chậm (chương II Giao hưởng số 4) và scherzo; *Sérénade mélancolique* op. 26 — chủ đề chính u sầu (thứ, một hình tiết tấu nhắc lại, luôn trở về âm bậc năm); phần giữa của phần một tương phản tô điểm kiểu khúc sáo đồng quê (ngũ cung, canon, đối chiếu màu Rê giáng và Si giáng trưởng); tái hiện trong phần một là **tái hiện tổng hợp** mà một yếu tố hoàn toàn phục tùng yếu tố kia (motif tiết tấu của phần giữa ở bè giữa, mất tính sáng, nhắc âm bậc năm, tăng u sầu); phần giữa chung có hai chủ đề (một chủ đề dao động giữa Sol giáng trưởng và Mi giáng thứ — điều thức biến đổi — gần các trio valse của Tchaikovsky; một chủ đề hân hoan kiểu "khúc tụng ca cuộc sống"); tái hiện chung được biến tấu.
- **Shostakovich, Giao hưởng số 5, scherzo (Allegretto)**: chủ đề phần một (La thứ) "hài hước hơi thô nhưng hiền"; trio (Đô trưởng) như bài hát đường phố. Phần một là hai phần tái hiện với đoạn đầu rất lớn (55 ô, chuyển từ La thứ sang Đô thứ; phức điệu che mờ đầu câu hai), sau đó phần nối sang trio dùng chất liệu phần giữa; trio cũng hai phần, lần lặp đoạn hai chảy vào tái hiện chung; tái hiện được phối khí lại, đoạn đầu chuyển sang Đô thăng thứ thay Đô thứ; trong coda câu nhỏ bài hát đường phố hiện ra méo mó, rên rỉ, rồi bị một kết dứt khoát "quét đi" — "theo tinh thần scherzo Beethoven".

Asafyev cho một nhận xét có tính phương pháp về chính Beethoven: phân tích chương I *Eroica*, ông nói tới "sự liên tục phát triển các Ý tưởng qua việc phân kỳ chuyển động" và "sự vượt qua của Beethoven đối với **tính ba phần hình thức** với những ranh giới định sẵn cho mỗi phần" *(Asafyev, Q1 ch. X)*. Câu này nói về sonata, không về ba phần phức, nhưng cho thấy Asafyev đánh giá "tính ba phần" như một khuôn mà nhà soạn nhạc lớn phải vượt.

## Hai phần phức

**Mazel**: "Hình thức hai phần phức là hình thức hai phần mà ít nhất một trong hai phần viết ở hai hoặc ba phần đơn, còn phần kia trong trường hợp điển hình là đoạn nhạc hoặc hai/ba phần đơn." *(Mazel, ch. VII §4)* Sposobin không có mục riêng cho hình thức này.

**Vì sao hiếm**: hai phần phức, như ba phần phức, dựa trên đối chiếu tương phản hai phần, thường đòi một kết luận sau nó; kết luận đơn giản và tự nhiên nhất là nhắc lại phần một — tức tái hiện, khiến hình thức thành ba phần. Trong hai phần đơn không tái hiện, tương phản thường không lớn đến mức đòi kết luận; còn trong hai phần đơn có tái hiện, "phần giữa" và tái hiện rút gọn gộp thành một phần, điều chỉ làm được khi tương phản tương đối nhỏ — trong hai phần phức những điều kiện ấy gần như không gặp. Mazel nêu một ví dụ có thể coi là hai phần phức **có tái hiện**: Andante của Sonata "dễ" Đô trưởng số 15 của Mozart — nhưng cũng có thể hiểu là ba phần phức với tái hiện không đầy đủ (bản OCR đứt đoạn ở chỗ này nên lập luận đầy đủ của ông **không đọc được**) *(Mazel, ch. VII §4)*.

**Hai phần phức không tái hiện** thì thường trong **thanh nhạc** (aria, arioso, song ca opera), nơi lời và diễn tiến sân khấu gắn hai phần tương phản gắt thành một, khiến trở lại phần đầu không những không cần mà không thể *(Mazel, ch. VII §4)*:

- Tchaikovsky, *Con đầm pích*, arioso của Liza (cảnh hai): phần một (thứ) — trạng thái rối bời, hoài nghi, do dự; phần hai (trưởng cùng tên) giải quyết hoài nghi, thể hiện tình cảm say mê, hân hoan; "đương nhiên sau đó không thể trở lại trạng thái tâm lý đầu". Phần một là ba phần đơn, phần hai là một đoạn nhạc.
- Glinka, *Давно ли роскошно ты розой цвела*; Tchaikovsky, *Мы сидели с тобой* — phần hai đổi trạng thái tâm lý gắt, nội dung loại trừ trở về. Ở romance của Tchaikovsky, phần một (hai phần đơn) là hồi tưởng kìm nén, đau buồn về mối tình không nói ra; phần hai (đoạn nhạc) là cảm giác mất mát, cô đơn gay gắt — nhịp độ nhanh lên, kết cấu xao động hơn, trưởng sang thứ song song, motif hướng tới hơn.
- Tchaikovsky, *Evgeny Onegin*, số 1 (song ca và tứ ca): đoạn nhạc lặp cộng ba phần đơn.

Về chức năng: phần hai có khi là một kiểu **coda phát triển và độc lập trên chất liệu mới** (romance của Glinka nói trên; song ca Zerlina – Don Giovanni trong *Don Giovanni* của Mozart — ở cả hai, phần hai nhanh hơn và đổi nhịp); ngược lại phần một có khi làm chức năng **mở đầu độc lập, phát triển** — trong nhiều aria. Trong ca khúc nhiều lời, lĩnh xướng cộng điệp khúc có khi tạo hai phần phức (Solovyov-Sedoy, *Песня летчиков*; Novikov, *Гимн демократической молодежи*) *(Mazel, ch. VII §4)*.

Mazel kết chương bằng một lưu ý thuật ngữ: "hình thức ba phần" và "hình thức hai phần" (đơn và phức) chỉ dùng theo nghĩa chuyên biệt đã nêu; một giao hưởng ba chương gọi là **chu kỳ ba chương** (hình thức chu kỳ ba phần), không phải hình thức ba phần — xem [[hinh-thuc-nga-chu-ky]].

## Phạm vi dùng

**Sposobin** *(§73–76)*: ba phần phức là hình thức hoàn toàn độc lập, dùng cho vô số tác phẩm đủ loại nội dung — cả tác phẩm riêng lẫn chương tách biệt của hình thức chu kỳ. Trong chu kỳ sonata – giao hưởng gần như chỉ ở chương giữa (menuet, scherzo, chương chậm); hiếm khi ở chương ngoài (Haydn, Sonata Đô thăng thứ, chương cuối). Trong phụ lục cho ch. III–V, ông mô tả các thể loại thường viết ở ba phần phức:

| Thể loại | Đặc điểm Sposobin nêu | Hình thức |
|---|---|---|
| Valse | nhanh, nhịp ba, gốc Đức; đệm "bùm – chát – chát" | ba phần phức với trio, hoặc chuỗi 4–5 số (hình thức chu kỳ) với mở đầu và coda |
| Mazurka | nhịp ba, vừa phải, tiết tấu sắc, gốc Ba Lan; Chopin tạo thành thể loại tầm thế giới | thường ba phần (phức với trio hoặc đơn) |
| Polonaise | nhịp ba trang trọng, gốc cung đình Ba Lan, kết từ phách hai sang phách ba | điển hình ba phần phức với trio |
| Polka | nhịp hai, gốc Séc (xa hơn từ écossaise) | chủ yếu ba phần phức với trio, mở đầu nhỏ |
| Galop | nhịp hai nhanh | phần lớn ba phần phức với trio |
| Tarantella | rất nhanh, thường 6/8, gốc Ý | chủ yếu ba phần |
| Hành khúc | nhịp hai, tiết tấu dứt khoát, cấu trúc vuông | thường ba phần phức với trio |
| Hành khúc tang | chậm, nhịp bốn | ba phần phức: phần ngoài thứ, trio trưởng |

Ông mô tả cả "phối khí hình thức" của hành khúc quân đội cho kèn đồng: đoạn đầu giai điệu ở bè cao (linh hoạt, có khi duyên dáng), phần tiếp giao giai điệu cho bè trầm (yếu tố "nam tính" hơn), trio là solo ca xướng của nhạc cụ âm vực giữa, rồi cả "dàn hợp xướng" nhạc cụ đón lấy. Trong nocturne, phần ngoài hầu như luôn chậm hay vừa, phần giữa có khi sôi nổi, thậm chí dữ dội; Sposobin phân tích *Nocturne* Fa thăng trưởng của Chopin như một hình thức hai phần có đoạn hai "bị xé" bởi một episode chen vào: đoạn nhạc 16 ô – phần giữa 8 ô – episode xông vào bài hát 24 ô – tái hiện 10 ô – coda 5 ô *(Sposobin, §78)*.

**Mazel** *(ch. VII §1)*: phần lớn hành khúc; rất thường trong điệu nhảy (valse, mazurka, polonaise…); chương giữa của nhiều giao hưởng, sonata, cả chậm (Andante, Adagio) lẫn nhanh (scherzo, menuet); tiểu phẩm độc lập (nocturne, impromptu, barcarolle…); thanh nhạc (romance, aria, hợp xướng). "Dù dùng trong thể loại nào, nó hợp nhất cho một sự đối chiếu triển khai, **một lần**, các hình tượng âm nhạc tương phản (với sự khẳng định tiếp theo hình tượng đầu)."

## Ba sách nói gì — đối chiếu

| Vấn đề | Sposobin | Mazel | Asafyev |
|---|---|---|---|
| Định nghĩa | phần ngoài là hình thức đơn, phần giữa tương phản rõ | phần **một** là hình thức đơn, các phần khác không phức tạp hơn; định nghĩa "rộng" có thể dùng | "a + b + a", loại thông dụng nhất của cấu trúc khép |
| Nguyên tắc | tương phản **bên ngoài** là nguyên tắc hình thành chính | đối chiếu tương phản + nhắc lại tái hiện | trong điệu nhảy ba phần, tương phản "yếu hơn" so với biến tấu |
| Trio / episode | phân biệt bằng cấu trúc; bảng giọng của trio | dãy độc lập: phần giữa phát triển → episode → trio; giải thích vùng át / hạ át | — |
| Nguồn gốc | trio từ ba bè thế kỷ XVII; aria da capo | tổ khúc (cặp điệu nhảy), aria da capo; episode từ hát – múa và biến tấu | menuet Haydn – Mozart → scherzo Beethoven với coda |
| Tái hiện | chủ yếu tĩnh; rút gọn; vài ví dụ động hoá | thêm phân tích *Nocturne* Đô thứ; khái niệm hình thức đầy đủ / không đầy đủ | — |
| Coda | ba loại; "coda tổng hợp" | ví dụ Beethoven, Chopin, Tchaikovsky; yếu tố tương phản bị "quét đi" | coda scherzo Beethoven như "tổng hợp" |
| Trung gian | đoạn – hai/ba phần – đoạn | thêm hình thức đồng tâm, hình thức đơn có khung, tái hiện ba phần đơn | — |
| Hai phần phức | không có mục riêng | định nghĩa, lý do hiếm, thanh nhạc | "a + b + a + b" là phát triển của cấu trúc hai phần |

**Chỗ giống**: hai giáo trình thống nhất về định nghĩa, về trio – episode, về da capo và senza replica, về tái hiện không đầy đủ, ba – năm phần phức và hình thức trung gian; dùng chung nhiều ví dụ (Grieg op. 54 số 5 và op. 57 số 1; Beethoven Giao hưởng số 7; *Hành khúc Chernomor*; Chopin *Nocturne* Đô thứ; Beethoven op. 119 số 1; Chopin op. 41 số 2). **Chỗ khác**: Sposobin dựa vào cặp khái niệm tương phản bên ngoài / bên trong và bảng thể loại; Mazel dựa vào chức năng điệu tính (át / hạ át), quan hệ giữa các hình tượng và lịch sử phong cách, và là người duy nhất bàn hai phần phức. Asafyev không mô tả hình thức mà đánh giá: ông coi điệu nhảy ba phần là dạng tương phản sơ đẳng và đặt các coda scherzo của Beethoven ở chỗ hình thức bắt đầu "trở thành" khác.

## Cách phân tích

1. **Tìm ranh giới ba khối lớn** (thường có kết trọn, đổi giọng, đổi nhịp độ hay kết cấu; tái hiện thường ghi Da Capo).
2. **Xác định hình thức của phần một**: hai phần hay ba phần đơn? có lặp không? khép hay hở? Nếu phần một chỉ là đoạn nhạc → xét hình thức trung gian.
3. **Phần giữa là trio hay episode**: có hình thức độc lập (đoạn, hai/ba phần) không? có chủ đề riêng không? Ghi giọng của nó và quan hệ với giọng chính (hạ át? cùng tên? song song? át?).
4. **Đường vào và đường ra**: phần giữa vào đột ngột hay có nối? Về tái hiện bằng phần nối riêng, bằng lần lặp được viết lại, hay bằng phần cuối của episode?
5. **Tái hiện**: nguyên (da capo, senza replica), rút gọn (không đầy đủ), biến tấu, hay được động hoá (ảnh hưởng của phần giữa)?
6. **Lặp phần chính**: có A B A B A không (ba – năm phần phức)?
7. **Mở đầu, coda**: chất liệu của coda thuộc loại nào (phần ngoài, phần giữa, tổng hợp)? Có yếu tố tương phản bị "vượt qua" không?
8. **Tương phản**: liệt kê các phương tiện (chủ đề, giọng, điều thức, nhịp độ, nhịp, kết cấu, âm vực, âm sắc) và hướng tương phản (sôi nổi → bình thản hay ngược lại).
9. **Đánh giá quan hệ hình tượng**: "lắp ráp" bên ngoài hay tác động lẫn nhau (tái hiện động hoá, coda tổng hợp)?
10. **Kết luận** bằng sơ đồ hai tầng, ví dụ: A (a b a) – B (c d c) – A (a b a) – coda.

## Bài tập

Từ "Tư liệu để phân tích" của Sposobin (cuối ch. V và phụ lục cho ch. III–V) và ví dụ của Mazel.

1. **Mẫu trong phụ lục Sposobin**: Myaskovsky, *Пожелтевшие страницы* op. 31 số 7 (trio); Scriabin, *Nocturne* op. 5 số 2 (episode). Viết sơ đồ hai tầng, so sánh cấu trúc phần giữa.
2. **Ba phần phức với trio** (Sposobin): Beethoven, Sonata op. 2 số 1 chương III, op. 2 số 2 chương III, op. 2 số 3 chương III, op. 10 số 3 chương III, op. 22 chương III, op. 31 số 3 chương III; Giao hưởng số 1 (menuet), số 2, 3, 5 (scherzo), số 8 (menuet); Schubert, các menuet và scherzo trong sonata; *Moment musical* op. 94 số 1, 3, 4, 6. Xác định giọng trio và cách nối về tái hiện.
3. **Ba phần phức với episode**: Beethoven, Sonata op. 7 chương II, op. 10 số 3 chương II (nếu có), op. 28 chương II; Sonata số 16, chương chậm (theo Mazel) — chỉ ra chỗ episode không khép và các lần nhắc lại biến tấu.
4. **Chopin** (Sposobin): *Nocturne* op. 9 số 3, op. 15 số 2, op. 27 số 1, op. 37 số 1, op. 48 số 1, op. 55 số 1; polonaise op. 26, op. 40, op. 44; mazurka op. 7 số 2, op. 59 số 1. Với *Nocturne* op. 48 số 1, đối chiếu kết quả với phân tích của Mazel về tái hiện động hoá.
5. **Coda tổng hợp**: Tchaikovsky, Quartet op. 11, *Andante cantabile*; Beethoven, Sonata op. 7, Largo; Giao hưởng số 6 của Tchaikovsky, chương II; Chopin, *Fantaisie-Impromptu*. Mô tả cách các chủ đề được kết hợp.
6. **Ba – năm phần và trung gian**: Beethoven, scherzo Giao hưởng số 4 và 7; Glinka, *Hành khúc Chernomor*; Beethoven, Bagatelle op. 119 số 1; Mussorgsky, *Vũ khúc của những chú gà con chưa nở*; Schubert, *Moment musical* op. 94 số 3. Lý giải vì sao từng bài thuộc loại ấy.
7. **Tiểu phẩm Nga** (Sposobin): Tchaikovsky op. 37bis số 1, 2, 5, 6, 8, 11, 12; op. 40 số 3, 5, 8, 9, 11; polonaise và écossaise trong *Evgeny Onegin*; Rimsky-Korsakov, *Hợp xướng những người mù đàn gusli* và *Đoàn diễu hành của Berendey* (*Snegurochka*); Borodin, *Hành khúc Polovets* (*Knyaz Igor*).
8. **Hai phần phức** (Mazel): Tchaikovsky, arioso của Liza (*Con đầm pích*, cảnh 2), *Мы сидели с тобой*; Glinka, *Давно ли роскошно ты розой цвела*. Chỉ ra vì sao không thể có tái hiện.

## Liên kết

- Lộ trình: [[hinh-thuc-nga-lo-trinh]] · trước: [[hinh-thuc-nga-hinh-thuc-don]] · sau: [[hinh-thuc-nga-bien-tau]]
- Liên quan: [[hinh-thuc-nga-rondo]], [[hinh-thuc-nga-hon-hop-va-ghep-tuong-phan]], [[hinh-thuc-nga-chu-ky]], [[hinh-thuc-nga-thanh-nhac]], [[minuet-va-trio]], [[hinh-thuc-ba-doan]], [[the-loai]]
- Bài tóm theo từng sách: [[sposobin-ba-phan-phuc-va-bien-tau]], [[mazel-hinh-thuc-don-va-phuc]], [[asafyev-hinh-thuc-nhu-qua-trinh]]
`,
  },
]
