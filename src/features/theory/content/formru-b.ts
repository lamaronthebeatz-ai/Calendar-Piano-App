import type { Article } from '../wiki'
import { RU_FORM_REFS } from './formru-refs'

export const formRuB: Article[] = [
  {
    slug: 'hinh-thuc-nga-phan-doan-cau-truc',
    title: 'Phân đoạn và cấu trúc: cezura, câu nhỏ, motif, tổng hợp và chia nhỏ',
    category: 'form',
    aliases: [
      'cezura',
      'цезура',
      'построение',
      'cấu trúc (построение)',
      'câu nhỏ',
      'фраза',
      'мотив',
      'субмотив',
      'суммирование',
      'дробление',
      'дробление с замыканием',
      'tổng hợp và chia nhỏ',
      'наложение',
      'kết xen',
      'вторгающаяся каденция',
    ],
    summary:
      'Hình thức âm nhạc vừa liền một khối vừa chia được thành phần lớn, phần nhỏ. Bài này gộp Sposobin (§2, §26–30, §35), Mazel (ch. III §2, ch. IV) và Asafyev (Q1 ch. IV–V, IX) về cezura và các dấu hiệu của nó, khái niệm "cấu trúc" (построение), câu nhỏ, motif, submotif, tính chu kỳ cấu trúc, tổng hợp, chia nhỏ, chia nhỏ có khép, chồng ghép và kết xen. Cuối bài có bảng đối chiếu ba sách, các bước phân tích và bài tập.',
    refs: RU_FORM_REFS,
    body: `
## Dẫn nhập

Nghe một bản nhạc, ta không nghe một dòng âm thanh trơn tuột. Tai tự chia nó thành từng đoạn: chỗ này hết một ý, chỗ kia bắt đầu ý mới, trong một ý lại có những "hơi thở" ngắn hơn. Sposobin mở §2 bằng nhận xét: hình thức âm nhạc "là một cái gì đó toàn vẹn, nhưng đồng thời lại phân đốt được (членораздельна), tức là gồm các phần được ngăn cách với nhau theo ý đồ" *(Sposobin, §2)*. Ông so sánh ngay với lời nói: phần lớn của hình thức gợi nhớ các chương của tác phẩm văn học, phần nhỏ hơn giống đoạn văn, câu dài ngắn khác nhau, thậm chí từng từ.

Mazel mở chương IV gần như bằng cùng ý ấy, nhưng nhấn vào hệ quả thực hành: "hiểu đúng sự phân đoạn này là một trong những điều kiện để hiểu đúng âm nhạc và trình diễn đúng nó" *(Mazel, ch. IV §1)*. Ông dẫn lại một ví dụ ở chương trước: motif một ô nhịp đầu tiên có thể coi là kết thúc sau năm hay sau sáu nốt móc đơn, nhưng cách chia thứ nhất "không thuyết phục về nghệ thuật", cách thứ hai thì thuyết phục. Phân đoạn vì thế không phải trò đếm ô nhịp mà là quyết định về ý nghĩa.

Asafyev nhìn cùng hiện tượng từ phía quá trình. Với ông, mỗi đoạn là một chặng của chuyển động giữa cú đẩy và chỗ khép, và khi nghe bằng tai thì "không có phép cộng các đơn vị ô nhịp, mà chỉ có tích của các yếu tố có độ căng khác nhau" *(Asafyev, Q1 ch. V)*. Bài này trình bày khung khái niệm của Sposobin và Mazel trước, rồi đặt cách nhìn của Asafyev bên cạnh để thấy giới hạn của việc chia khối.

## 1. Cezura và các dấu hiệu của nó

### Định nghĩa

Sposobin định nghĩa: "Khoảnh khắc phân chia giữa bất kỳ phần nào của hình thức gọi là cezura (цезура)" *(Sposobin, §2)*. Tuỳ mức độ rõ của ranh giới, cezura có thể "sâu" khác nhau, từ một dấu lặng dài đến một chỗ ngắt giữa hai âm khó nhận ra. Mazel dùng gần đúng cùng lời: cezura "có thể sâu hơn, dễ thấy hơn, hoặc nông hơn, ít thấy hơn" *(Mazel, ch. IV §1)*.

### Ba dấu hiệu chính theo Sposobin

Sposobin nêu ba dấu hiệu chính, mỗi dấu hiệu kèm một ví dụ trong sách:

1. **Dấu lặng** — ví dụ trong sách: Tchaikovsky, Giao hưởng số 6, chương I.
2. **Dừng trên một âm tương đối dài** — ví dụ: Rachmaninoff, *Mélodie* op. 3 №3.
3. **Lặp lại các hình giai điệu – tiết tấu**, thường kèm các ô nhịp dài bằng nhau — ví dụ: Dargomyzhsky, opera *Rusalka*.

Ngoài ra còn có các dấu hiệu khác như đổi âm vực, đổi sắc thái cường độ *(Sposobin, §2)*.

### Thêm ba quy tắc thực hành

Sposobin thêm ba điểm mà người phân tích phải nhớ:

- Cezura thường rõ nhất ở **bè chính**. Phần đệm (hình đệm, các bè phụ) có thể không ngắt ở chỗ bè chính có cezura.
- Phần đứng trước cezura **chỉ có thể kết thúc bằng âm hợp âm**, ở bất kỳ bè nào. Không được coi nó kết thúc trên âm treo (задержание), âm lướt, âm thêu hay âm đến trước.
- Hệ quả: đầu và cuối một "cấu trúc" rất thường không trùng vạch nhịp. Vạch nhịp "chỉ để chỉ phách mạnh" và không bắt buộc là ranh giới giữa các cấu trúc *(Sposobin, §2)*.

### Mazel: các yếu tố phân đoạn không ngang quyền

Mazel kê một danh sách rộng hơn các yếu tố phân đoạn: xuất hiện chất liệu mới, bắt đầu lặp lại cấu trúc vừa trình bày, quay lại chất liệu cũ sau chất liệu mới; dấu lặng, dừng tiết tấu, kết hoà âm, kết thúc một làn sóng giai điệu; đổi giọng, đổi âm sắc, đổi âm vực, đổi sắc thái *(Mazel, ch. IV §1)*.

Điểm riêng của Mazel là ông xếp hạng chúng. Dấu lặng và dừng tiết tấu "quan trọng hơn không thể so sánh" với việc đổi sắc thái; kết hoà âm quan trọng hơn chỗ hết một làn sóng giai điệu. Nhưng dấu lặng và chỗ dừng "vẫn không phải dấu hiệu chắc chắn của cezura": một âm dài mà là âm treo thì không thể là âm cuối của câu nhỏ.

Ngược lại, **tính chu kỳ giai điệu – tiết tấu** (một hình được lặp lại, nguyên dạng hay biến đổi, hai lần trở lên liền nhau) là dấu hiệu "ít nhiều đáng tin cậy", vì sự lặp lại gần như chắc chắn chia giai điệu thành những phần giống nhau. Độ rõ của kiểu phân đoạn này tăng theo độ cá tính của hình được lặp. Lặp một hình rất ngắn, không cá tính, trong chuyển động nhanh liên tục thì mất tác dụng chia; Mazel lấy ví dụ láy rền (trill), vốn là sự lặp nhanh một quãng hai. Phân đoạn rõ nhất khi lặp motif đi cùng những chỗ dừng tiết tấu đều đặn *(Mazel, ch. IV §1)*.

Hai nhận xét nữa của Mazel: phân đoạn thành phần lớn thường hiển nhiên hơn phân đoạn bên trong những cấu trúc nhỏ; và nó rõ hơn ở bè giai điệu chính, cá tính nhất, so với các bè đệm.

### Kết cấu như yếu tố phân đoạn

Mazel dành một đoạn cho kết cấu (фактура), hiểu là "tổng thể các bè (và nhóm bè) xét theo tính chất, sự kết hợp và chức năng của chúng trong chỉnh thể": bè giai điệu chính (có thể kèm bè nhân đôi), bè trầm, bè ngân giữ âm hoà âm, bè hình đệm, bè nhấn một công thức tiết tấu, bè đối âm đi kèm giai điệu chính *(Mazel, ch. IV §1)*.

Kết cấu đổi chậm hơn hoà âm nhiều, nên một lần đổi kết cấu dứt khoát "thường có nghĩa là bắt đầu cấu trúc mới". Nhưng cũng có trường hợp kết cấu mới xuất hiện ngay ở cuối cấu trúc trước, như báo trước tính chất phần sau. Ví dụ trong sách: Chopin, *Nocturne* Đô thứ op. 48, đoạn giữa, nơi các quãng tám chạy chùm ba móc kép xuất hiện trên hợp âm bốn – sáu kết, một ô nhịp trước kết trọn. Trong những chỗ như vậy, Mazel nhắc, kết trọn vẹn thường là yếu tố phân đoạn quan trọng hơn, vì vai trò của quan hệ điệu thức – hoà âm đối với lôgic của ý nhạc "rất lớn".

Ông cũng ghi nhận: nhạc phức điệu thường khó chia đoạn hơn nhạc chủ điệu.

### Asafyev: dấu lặng là một lực, không phải khoảng trống

Asafyev không lập danh sách dấu hiệu, nhưng có một chú thích quan trọng về dấu lặng ở chương IV. Dịch sát: "Chức năng động lực của dấu lặng trong sự hình thành âm nhạc rất đáng kể. Dấu lặng, dấu hiệu của im lặng, hoàn toàn không chấm dứt chuyển động âm nhạc, không đưa sự cảm thụ ra khỏi vòng các liên kết âm thanh, và vì vậy là một yếu tố tạo hình thức" *(Asafyev, Q1 ch. IV)*. Ông thêm: dấu lặng – cezura, khi cắt ngang chuyển động "như một chướng ngại bất ngờ, như một con đập", lại làm chuyển động mạnh lên. Ví dụ ông phân tích là mở đầu overture *Der Freischütz* của Weber.

Với Sposobin, cezura là chỗ **ngăn**; với Asafyev, nó còn là chỗ **dồn**. Hai cách nhìn không loại trừ nhau. Khi phân tích, ta vẫn đánh dấu cezura để biết cấu trúc gồm những phần nào, nhưng nên tự hỏi thêm: chỗ ngắt này làm chuyển động dừng hẳn, hay làm nó căng hơn?

## 2. "Cấu trúc" (построение)

Sposobin: "Phần của hình thức được giới hạn bởi các cezura gọi là cấu trúc (построение), không phụ thuộc độ dài, từ một phần ô nhịp đến hàng trăm ô nhịp" *(Sposobin, §2)*. Tiếng Việt chưa có từ thống nhất cho построение; bộ bài này dùng "cấu trúc" (hoặc "đoạn cấu trúc" khi cần tránh nhầm với nghĩa chung của từ "cấu trúc").

Mazel giữ định nghĩa đó nhưng thêm một ràng buộc: cấu trúc là **phần hữu cơ** của tác phẩm *(Mazel, ch. IV §1)*. Ví dụ của ông: trong một đoạn mười sáu ô nhịp chia thành hai câu tám ô nhịp, mỗi câu lại chia thành hai cụm bốn ô nhịp, thì mười sáu ô nhịp, mỗi tám ô nhịp và mỗi bốn ô nhịp đều là cấu trúc. Nhưng ba cụm bốn ô nhịp đầu gộp lại thì không, "cũng như không thể coi một chương rưỡi là phần hữu cơ của hình thức tác phẩm văn học, dù nửa chương thì có thể". Ông chú thích thêm: trong thực tế người ta vẫn chỉ gọi "cấu trúc" những phần tương đối nhỏ; phần lớn hơn thì gọi là phần, đoạn lớn...

Sposobin nối khái niệm này với cú pháp: chia một ý tương đối trọn vẹn thành phần và đặt các phần trong quan hệ phụ thuộc lẫn nhau "thuộc về lĩnh vực cú pháp âm nhạc", và sự phụ thuộc theo bố cục của các phần tạo thành một chỉnh thể "là hình thức theo nghĩa hẹp", vì nó chỉ xác định đường nét chung, tức là kế hoạch *(Sposobin, §2)*. Về hai nghĩa rộng và hẹp của chữ "hình thức", xem [[hinh-thuc-nga-khai-niem]].

## 3. Các đơn vị nhỏ: câu nhỏ, motif, submotif

### Câu nhỏ (фраза)

Theo Sposobin, rất nhiều câu (предложение) của đoạn nhạc, và nói chung các cấu trúc bốn hoặc sáu ô nhịp, chia thành những cấu trúc nhỏ hơn, hai ô nhịp, đôi khi ba ô nhịp, gọi là **câu nhỏ** (фраза). Câu nhỏ "hoàn toàn tách được về nghĩa khỏi các cấu trúc bên cạnh", tức là có độc lập về tiết tấu *(Sposobin, §26)*.

Một điểm kỹ thuật đáng nhớ: hoà âm kết thúc các câu nhỏ (trừ câu nhỏ cuối, nơi cả câu dừng lại) **không bị giới hạn** như ở các kết chính của đoạn nhạc. Câu nhỏ có thể dừng trên bất kỳ hợp âm nào, với bất kỳ âm trầm nào. Bên cạnh những câu chia thành câu nhỏ, cũng có câu không chia được.

Mazel định nghĩa câu nhỏ từ phía nhịp: muốn nhận ra nhịp (số chỉ nhịp, độ dài ô nhịp) phải nghe ít nhất **hai** phách mạnh, nên một motif là chưa đủ. Vì thế "phần tử nhỏ nhất xác định nhịp" là câu nhỏ, tức là sự kết hợp hai, ba hoặc (khi ô nhịp ngắn) bốn motif *(Mazel, ch. III §2)*. Câu nhỏ rất thường không chia thành motif, hoặc chỉ chia một cách quy ước. Người ta hay gọi những câu nhỏ không chia ấy là "motif hai ô nhịp", và gọi motif theo nghĩa hẹp là "motif một ô nhịp".

### Motif (мотив)

Định nghĩa của Sposobin: "Motif là một nhóm âm thanh theo tiết tấu, gắn với nhau bằng một trọng âm chính, và là đơn vị nghĩa nhỏ nhất" *(Sposobin, §27)*. Dù ngắn, nhóm này thường có tính cách rõ rệt và tách bạch về tiết tấu, nên "thật sự là một hạt nhỏ có nghĩa của chỉnh thể". Vì thế motif, khi được lặp lại và biến đổi, có thể làm **hạt giống chủ đề**: từ đó mọc ra một chủ đề trọn vẹn, thậm chí cả một tác phẩm. Bài [[motif]] trong thư viện trình bày khái niệm này theo cách chung.

Vì có một trọng âm chính, motif thường dài xấp xỉ một ô nhịp. Mọi điều đã nói ở §2 cũng đúng với motif: đầu và cuối thường không trùng vạch nhịp, và motif nhất thiết kết thúc bằng âm hợp âm.

Mazel định nghĩa gọn hơn: motif tiết tấu là "một hình tiết tấu nhỏ, nhận ra được khi lặp lại, chứa **một** phách mạnh về nhịp" *(Mazel, ch. III §2)*. Vì thế, dù ranh giới motif không trùng vạch nhịp, số motif vẫn bằng số ô nhịp.

### Các kiểu motif theo vị trí phách mạnh

Sposobin gọi thời mạnh của motif là "ictus" (икт); trong sơ đồ của ông nó chỉ có một âm. Thời yếu có thể có một hoặc nhiều âm, đứng trước thời mạnh như nhịp lấy đà (затакт, mà ông ghi là cũng được gọi là "предыкт") hoặc theo sau như kết yếu. Bốn kiểu chính *(Sposobin, §27)*:

| Kiểu | Sơ đồ (∪ = thời yếu, — = thời mạnh) | Nhận xét của Sposobin |
|---|---|---|
| Amphibrach | ∪ — ∪ | dạng đầy đủ nhất, gặp rất thường xuyên |
| Iamb | ∪ — | cũng phổ biến rộng |
| Trochee | — ∪ | phổ biến kém hơn một chút |
| Motif không trọn | — | một âm mạnh; hiếm khi độc lập, thường là khởi đầu câu nhỏ hay câu |

Chú thích của Sposobin: cách xếp loại này gần với các "chân thơ" nhưng rất tổng quát, quy mọi biến thể tiết tấu về ba yếu tố (thời mạnh và các thời yếu quanh nó). Vì thế anapest được coi quy ước là biến thể của iamb, dactyl là biến thể của trochee.

Một âm giai điệu chiếm trọn ô nhịp thường hoà vào phần tiếp theo thành câu nhỏ hai ô nhịp hay câu bốn ô nhịp không chia (ví dụ trong sách: Chopin, Valse op. 64 №2). Nhưng nếu được tách ra có chủ ý, nó có thể nghe như một motif một âm riêng (Tchaikovsky, Valse-Scherzo cho violon và dàn nhạc op. 34).

Mazel xếp từ góc độ khác, gọn hơn: hai khả năng tổng quát là motif **đi xuống về nhịp** (bắt đầu ở phách mạnh, kết ở phách yếu: trochee theo nghĩa rộng) và motif **đi lên về nhịp** (bắt đầu từ nhịp lấy đà, hướng tới phách mạnh: iamb theo nghĩa rộng), cộng một kiểu thứ ba dạng sóng, amphibrach theo nghĩa rộng *(Mazel, ch. III §2)*. Theo nghĩa hẹp, iamb và trochee giả định nhịp hai phách. Amphibrach, dactyl, anapest theo nghĩa hẹp giả định nhịp ba phách: dactyl bắt đầu từ phách 1, amphibrach từ phách 3, anapest từ phách 2.

Điều Mazel thêm vào, mà Sposobin không có, là **ý nghĩa biểu cảm** của từng kiểu:

- Motif đi lên (iamb) có thể thể hiện rõ sự phát triển từ khoảnh khắc chuẩn bị đến khoảnh khắc chính, như "đà vung và cú đánh", "chuyển động đến đích và đạt đích". Năng động là khả năng biểu cảm chính của nó.
- Motif đi xuống (trochee) dựa trên "sự tắt dần về nhịp: xung lực và sự cạn kiệt của nó". Các motif gồm âm treo và âm giải quyết, tức là rất nhiều motif trữ tình, thuộc kiểu này. Motif trochee lại có khởi đầu rõ ràng hơn, nên hợp với những chỗ cần lập tức thu hút người nghe, những bước ngoặt dứt khoát.
- Iamb thích hợp để **kết** hơn, vì chỗ kết rõ hơn khi trùng phách mạnh.
- Amphibrach kết hợp nhịp lấy đà hướng tới với kết yếu "như tiếng thở dài", nên quan trọng trong giai điệu trữ tình xúc động. Mazel nêu Tchaikovsky là tác giả tiêu biểu cho loại motif amphibrach ba – bốn âm.

Mazel còn nêu một xu hướng (ông nhấn mạnh: chỉ là xu hướng, không phải quy tắc): các âm ngắn ở phách yếu có xu hướng gắn với phách mạnh **sau** chứ không phải phách mạnh trước, cũng như hoà âm át đòi chủ âm đứng sau nó. Hệ quả là motif trochee dễ nối thành một đường giai điệu liền hơn motif iamb. Ví dụ trong sách: *Prélude* Đô trưởng op. 28 №1 của Chopin. Nhiều giai điệu được "kích hoạt" bằng cách chuyển dần từ motif trochee sang iamb và kéo dài nhịp lấy đà. Ví dụ: một sonata của Mozart; phần chính overture *Ruslan và Lyudmila* của Glinka, nơi ở chỗ cao trào nhịp lấy đà chiếm ba trong bốn phách *(Mazel, ch. III §2)*.

### Submotif (субмотив)

Motif hay câu nhỏ đôi khi chia thành những nhóm giai điệu – tiết tấu còn nhỏ hơn, dài một phần ô nhịp, gọi là **submotif** *(Sposobin, §27)*.

### Hoà âm trong motif

Sposobin có một nhận xét ngắn mà rất hữu ích cho người chơi: từ nhịp lấy đà sang phách mạnh, hoà âm thường **đổi**, làm nổi sự khác nhau giữa nhịp lấy đà ("đà vung, chuẩn bị cho hành động") và phách mạnh ("chính hành động"). Kết yếu thường nằm trên hoà âm đã vào ở phách mạnh, "một kiểu chuyển động theo quán tính", nhưng cũng có thể đổi hoà âm. Motif có thể kết trên bất kỳ hợp âm nào với bất kỳ âm trầm nào *(Sposobin, §27)*.

### Ô nhịp nặng và ô nhịp nhẹ

Mazel bổ sung một tầng mà Sposobin không tách riêng: trong nhạc có nhịp nhấn chặt chẽ, phách mạnh của các ô nhịp kề nhau không phải lúc nào cũng nặng như nhau. Có **ô nhịp nặng** và **ô nhịp nhẹ** *(Mazel, ch. III §2)*. Khi hoà âm đổi mỗi hai (hoặc bốn) ô nhịp một lần, những ô nhịp có đổi hoà âm tự nhiên là ô nhịp nặng. Hiểu điều này quan trọng cho việc diễn: tính chất hát hơn, hơi thở rộng hơn đôi khi thể hiện bằng trọng âm thưa hơn, cách một ô nhịp mới nhấn. Nhấn phách mạnh của ô nhịp nhẹ là sai.

Mazel ghi: sự phân biệt này chủ yếu có trong nhạc có tính vận động – vũ điệu và ô nhịp nhỏ; trong chuyển động chậm, ô nhịp lớn thì các phách mạnh thường ngang nhau. Ông dẫn Sonata số 5 của Beethoven, nơi trong mỗi cụm bốn ô nhịp, ô thứ ba nặng nhất. Về siêu nhịp nói chung, xem [[sieu-nhip]].

## 4. Tính chu kỳ cấu trúc

Sposobin: sự thống nhất cấu trúc kiểu trình bày được thể hiện sơ đẳng nhất ở chỗ mọi phần có cùng độ dài. "Sự nối tiếp các phần tử có độ dài như nhau (tính theo số ô nhịp) gọi là tính chu kỳ cấu trúc (структурная периодичность)" *(Sposobin, §29)*. Nó có thể ở nhiều tầng:

- 8 = 4 + 4 (Beethoven, Quartet op. 18 №4, finale);
- 8 = 2 + 2 + 2 + 2;
- 8 = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 (Beethoven, Quartet op. 59 №2, chương II).

Tính chu kỳ thuần thường gặp trong thanh nhạc, gắn với nhịp đều của câu thơ. Với nhạc khí, sự đều đặn cấu trúc – tiết tấu ấy ít điển hình hơn; hay gặp hơn (nhưng cũng không luôn) ở các tác phẩm mang tính vũ điệu hay bài hát.

Mazel đặt tính chu kỳ làm **nền** của cả hệ phân loại cấu trúc. Vì lặp lại một hình là yếu tố phân đoạn quan trọng nhất, việc phân loại "cấu trúc giai điệu – cú pháp" (мелодико-синтаксические структуры) tự nhiên dựa trên quan hệ lặp và không lặp (giống và không giống) của motif *(Mazel, ch. IV §2)*. Chú thích của ông: trong giáo trình *Phân tích tác phẩm âm nhạc* của Mazel – Zuckerman (1967), các cấu trúc này được gọi là "cấu trúc quy mô – chủ đề" (масштабно-тематические).

### Lặp nguyên và lặp biến đổi; hai kiểu biến đổi

Dạng đơn giản nhất là lặp nguyên hay lặp biến đổi một motif, câu nhỏ hay cấu trúc, tức là tính chu kỳ. Ví dụ trong sách: dân ca Nga "Идёт коза рогатая" (tuyển của Rimsky-Korsakov), dựa trên lặp nguyên với những thay đổi tiết tấu tối thiểu do số âm tiết lời khác nhau *(Mazel, ch. IV §2)*.

Quan trọng hơn nhiều là lặp biến đổi: biến tấu, mô tiến, đổi đường nét giai điệu mà giữ tiết tấu... Mazel tách hai kiểu biến đổi:

- **Tính biến tấu** (вариационность): hay gặp ở bài hát nhanh, giai điệu dân vũ và nhạc khí; không đổi tương quan nặng – nhẹ về nhịp của hình được biến đổi, thường không vượt quá việc làm giàu bằng hình hoạ.
- **Tính dị bản** (вариантность): chủ yếu ở bài hát kéo dài (протяжная), trữ tình; cho phép thay đổi tự do hơn nhiều, kể cả dịch chuyển vị trí nhịp của âm và ngữ điệu, đổi độ dài tổng của hình.

Mazel thừa nhận khó vạch ranh giới cứng giữa hai kiểu này.

### Hai tính chu kỳ ghép đôi

Trong dân ca nhảy và khiêu vũ vòng tròn (хоровод) của Nga rất phổ biến cấu trúc: một câu nhỏ lặp lại rồi đến câu nhỏ khác lặp lại, tức "một cặp tính chu kỳ" (theo cách gọi của Zuckerman). Công thức: a + a + b + b và các biến thể *(Mazel, ch. IV §2)*. Hai nhận xét của Mazel:

- Nửa sau thường **không vượt** đỉnh giai điệu của nửa đầu, rất thường không đạt tới nó. Nó thường mang chức năng điệp khúc; lời hay có những chữ kiểu "люли-люли", "ладо-ладо". Mazel cho rằng điều này có lẽ bắt nguồn từ cấu trúc lĩnh xướng – hợp xướng (запев – припев).
- Mỗi nửa thường là lặp nguyên hay lặp biến đổi; mô tiến motif bên trong mỗi nửa thì không điển hình. Khi cấu trúc này xuất hiện trong nhạc chuyên nghiệp mà giữ điều kiện ấy, người nghe cảm thấy nó gần trực tiếp với nguồn dân gian. Ví dụ trong sách: Chopin, Mazurka op. 24 №4; Tchaikovsky, Giao hưởng số 5; Knipper, "Полюшко-поле".

Họ hàng với nó là cấu trúc a + b + b (chỉ lặp câu nhỏ thứ hai). Trong dân ca cổ, trọng tâm và đỉnh giai điệu nằm ở câu đầu. Trong các bài hát chủ điệu – hoà âm muộn hơn (ví dụ "Из-за острова на стрежень") thì cao trào đã chuyển sang nửa sau, nửa được lặp lại. Bài hát kéo dài cổ thì ít dùng các cấu trúc này, vì nó có tính chảy liên tục và tránh phân đoạn nhấn mạnh.

## 5. Tương phản cấu trúc: tổng hợp và chia nhỏ

Thống nhất hoàn toàn bằng tính chu kỳ dễ thành đơn điệu. Sposobin viết: để đưa vào **tương phản cấu trúc**, người ta tận dụng khả năng xây dựng khác nhau những phần tử cùng độ dài (và cả khác độ dài). Có câu chia được (2 + 2) và không chia được (4) thành câu nhỏ; có câu nhỏ chia được (1 + 1) và không chia được (2) thành motif *(Sposobin, §29)*.

### Tổng hợp (суммирование)

"Đặt cạnh nhau hai hay nhiều cấu trúc với một cấu trúc lớn hơn theo sau, thường bằng tổng của chúng, gọi là tổng hợp" *(Sposobin, §29)*. Các dạng:

- 8 = 2 + 2 + 4;
- 4 = 1 + 1 + 2;
- 2 = ½ + ½ + 1 (Schumann, *Carnaval* op. 9, khúc "Aveu"; OCR ghi tên khúc không rõ, đọc theo tên tác phẩm và chỉ dẫn Passionato).

Mazel gọi cùng hiện tượng là **tổng hợp** hoặc **hợp nhất** (объединение), và giải thích ý nghĩa của nó sâu hơn. Câu nhỏ liền ở sau "đáp lại các motif ngắn giống nhau, như hợp nhất chúng lại (sau khi chúng đã vang lên), đồng thời chính nó cũng hợp nhất với chúng thành một cấu trúc trọn vẹn". Đó là tái hiện "hình thức bên ngoài của sự khái quát lôgic", giống câu nói: "hôm qua mưa, hôm nay gió; đã hai ngày trời xấu" *(Mazel, ch. IV §2)*. Ông lưu ý đây chỉ là **hình thức bên ngoài**: nửa sau không phải lúc nào cũng tóm tắt nội dung nửa đầu. Theo Mazel, cấu trúc này chỉ có ý nghĩa đặc biệt lớn từ giai đoạn lịch sử khi âm nhạc hình thành những quy luật lôgic riêng, phát triển; nó gặp ở dân gian nhưng thường hơn nhiều ở nhạc chuyên nghiệp.

Mazel thêm ba điểm mở rộng:

- Tổng hợp không chỉ có trong cấu trúc vuông: trong chủ đề chính *Valse-fantaisie* của Glinka, hai cụm ba ô nhịp giống nhau được đáp bằng một cụm sáu ô nhịp.
- Hai vế không nhất thiết bằng nhau; phần hợp nhất có thể dài hơn hay ngắn hơn, miễn là nghe như đáp lại.
- Vế đầu có thể có hơn hai phần tử giống nhau (ví dụ trong sách: Tchaikovsky, Giao hưởng số 5).

### Hai xu hướng ngược nhau

Từ tổng hợp, Mazel rút ra một nguyên lý chung cho cấu trúc chủ đề chủ điệu: trong cơ chế của nó có **hai xu hướng ngược nhau**, xu hướng tiến tới tính chu kỳ (lặp lại) và xu hướng **vượt qua** tính chu kỳ. Xu hướng thứ hai lại mở đường cho tính chu kỳ ở quy mô lớn hơn, và đến lượt nó lại cần được vượt qua *(Mazel, ch. IV §2)*.

Ví dụ của chính ông: trong 1 + 1 + 2, tính chu kỳ ban đầu (1 + 1) bị vượt qua bằng hai ô nhịp liền, thành bốn ô nhịp không chu kỳ. Bốn ô nhịp ấy có thể lặp lại, thành tám ô nhịp chu kỳ (1 + 1 + 2 + 1 + 1 + 2). Tám ô nhịp này lại có thể bị vượt qua bằng tám ô nhịp không chia thành hai nửa giống nhau (chẳng hạn 2 + 2 + 4), thành mười sáu ô nhịp không chu kỳ. Ví dụ trong sách: các *Prélude* của Scriabin op. 11.

### Chia nhỏ (дробление)

Sposobin: "Đặt một cấu trúc cạnh những cấu trúc ngắn hơn theo sau, thường bằng nó về tổng, gọi là chia nhỏ" *(Sposobin, §29)*. Ví dụ: 8 = 4 + 2 + 2 (Beethoven, Sonata op. 14 №1, chương III, Allegro comodo); 4 = 2 + 1 + 1; và cả chia nhỏ ở cấp nhỏ hơn. Ông nêu một biến thể: chia nhỏ **đi ngược cấu trúc ô nhịp**, thường là những nhóm hai phách trong nhịp ba (Beethoven, Giao hưởng số 8, chương IV; Tchaikovsky, *Scherzo humoristique* op. 19 №2). Đôi khi cấu trúc như thế có ngay từ đầu (Tchaikovsky, "Tháng Năm" trong *Bốn mùa* op. 37bis).

Mazel nhìn chia nhỏ (2 + 1 + 1, 4 + 2 + 2...) như cấu trúc **ngược** của tổng hợp *(Mazel, ch. IV §2)*:

- Sau một câu nhỏ liền là các motif ngắn, thường tách ra từ câu nhỏ đầu.
- Trọng tâm (và thường cả đỉnh giai điệu) nằm ở nửa đầu; nửa sau như phần bổ sung, một sự hạ xuống "nuôi bằng năng lượng của nửa đầu".
- Hướng phát triển là "từ lớn, chung, đến nhỏ, riêng", ngược với tổng hợp. Mazel gọi nó là cấu trúc "kiểu nhẹ hơn".
- Nó ít khả năng tạo một ý nhạc liền, trọn hơn hợp nhất hay chia nhỏ có khép. Nhưng nhờ phương tiện tiết tấu và điệu thức – hoà âm (chẳng hạn một kết trọn nhấn mạnh) nó vẫn có thể đủ trọn.
- Nó hay gặp trong bài hát nhịp rõ, nhất là điệp khúc (khúc Toreador trong *Carmen* của Bizet; "Гимн демократической молодёжи" của Novikov; các bài của Dunaevsky), và trong nhạc múa, đặc biệt là valse (Tchaikovsky, Valse op. 39 №8). Mazel giải thích: chia nhỏ cho khả năng nhấn những xung lực ngắn giống nhau, điều rất cần cho vũ điệu.

### Chia nhỏ có khép (дробление с замыканием)

Đây là cấu trúc Mazel phân tích kỹ nhất: 2 + 2 + 1 + 1 + 2, 4 + 4 + 2 + 2 + 4 và các dạng tương tự. Khoảnh khắc chia nhỏ cho phép tách những ngữ điệu hay hình tiết tấu quan trọng khỏi các câu nhỏ đầu và phát triển riêng chúng "như một phát triển nhỏ", sau đó là kết thúc, kết luận *(Mazel, ch. IV §2)*. Bốn chặng lôgic của ý nhạc thường thấy rất rõ:

1. trình bày hạt nhân (cấu trúc đầu);
2. khẳng định, củng cố hạt nhân, có thể kèm chút phát triển (lặp nguyên hay biến đổi cấu trúc đầu);
3. phát triển thực sự (khoảnh khắc chia nhỏ);
4. hoàn tất ý (khép).

Chú thích của Mazel đáng chép lại: bốn chặng ấy cũng thường gặp ở quy mô lớn hơn, **đến tận allegro sonata**: trình bày, lặp lại trình bày, phát triển, tái hiện. Như vậy cấu trúc vi mô và hình thức vĩ mô có cùng một lôgic (xem thêm [[hinh-thuc-nga-nguyen-tac-phat-trien]]).

Ví dụ Mazel dẫn: Tchaikovsky, Giao hưởng số 6; Beethoven, Sonata số 1; một fugue của Shostakovich; câu đầu aria của Lyudmila ở hồi IV *Ruslan và Lyudmila* của Glinka, với cấu trúc không vuông 3 + 3 + 2 + 2 + 5. Nửa sau của cấu trúc, chứa chỗ căng nhất và chỗ kết của giai điệu, thường được lặp lại như một điệp khúc (Tchaikovsky, Giao hưởng số 6).

Sposobin mô tả cùng hiện tượng mà không đặt tên riêng. Khi tổng hợp và chia nhỏ phân bố trên cả đoạn nhạc, một dạng hay gặp là: sau câu đầu có cấu trúc chu kỳ hoặc tổng hợp, đầu câu thứ hai có chia nhỏ rồi đến tổng hợp khép lại *(Sposobin, §29)*. Ông nhấn mạnh: chia nhỏ như thế rơi vào **phần tư thứ ba** của đoạn nhạc, và quy luật này "gặp thường xuyên không chỉ ở phần tư thứ ba của đoạn nhạc mà cả ở những hình thức lớn hơn". Tiết tấu sinh động hơn đi kèm chia nhỏ đôi khi kéo theo đổi hoà âm thường xuyên hơn; tất cả cùng tạo ra tăng độ căng và hay gắn với việc tiến tới cao trào hoặc chính cao trào.

### Các dạng phức tạp hơn

- **Chia nhỏ kép có khép**: 4 + 4 + 2 + 2 + 1 + 1 + 2 (ví dụ của Mazel: Saint-Saëns, *Samson et Dalila*). Mazel coi nó "ít khác" chia nhỏ có khép thường, chỉ đẩy nguyên tắc ấy thêm một bậc *(Mazel, ch. IV §2)*.
- **Tổng hợp kép** (двойное объединение / двойное суммирование): sau tổng hợp thường (1 + 1 + 2) là một cấu trúc liền đáp lại cả ba phần tử trước, tức 1 + 1 + 2 + 4. Mazel nhận xét: phát triển ở đây chỉ hướng **ra rộng**, đến những câu nhỏ ngày càng dài và liền, không có việc tách và nhấn các ngữ điệu của motif đầu, cũng không có việc củng cố các chặng đã qua; phát triển "hơi quảng tính". Ví dụ: dân ca Ukraina; Dargomyzhsky, "Шестнадцать лет"; Kabalevsky, overture *Colas Breugnon*; Dunaevsky, "Песенка о капитане". Sposobin cũng nêu "tổng hợp kép" ở câu thứ hai của đoạn nhạc (ví dụ: Mozart, Sonata số 12, chương III) *(Sposobin, §29)*.
- **Bán đối xứng và đối xứng**: một cấu trúc mà nửa sau bắt đầu bằng hình vừa kết nửa trước rồi chuyển sang hình khép, công thức a b b c, Mazel gọi là **bán đối xứng** (полусимметрия). Nếu hình khép giống hình đầu, ta có **đối xứng** a b b a. Đối xứng khép kín hơn bán đối xứng, bán đối xứng khép kín hơn chia nhỏ. Ví dụ trong sách: một rondo của Mozart, câu đầu là bán đối xứng (kết nửa), câu sau là đối xứng (kết trọn) *(Mazel, ch. IV §2)*.

### "Giống thì chia, khác thì nối"

Sposobin rút ra một nguyên tắc đơn giản mà sâu: "giống nhau thì tách ra, khác nhau thì hợp lại" (сходство разделяет, различие объединяет) *(Sposobin, §29; xem cả §28)*. Nếu sau một cấu trúc là một cấu trúc giống nó, việc lặp lại sẽ tách chúng ra. Ngược lại, sự khác nhau (chưa đến mức tương phản gay gắt) giúp các cấu trúc hoà vào nhau. Vì vậy, tổng hợp và chia nhỏ vừa tạo tương phản vừa tạo một kiểu thống nhất "phức tạp hơn và, theo một nghĩa nào đó, cao hơn" so với sự giống nhau sơ đẳng về trường độ.

Ông cũng ghi nhận rằng hai thủ pháp đối lập này có lúc gặp nhau: khi các phần của cấu trúc trước được nhắc lại dưới dạng rút ngắn (chia nhỏ), đồng thời các cezura giữa chúng cũng ngắn lại (liền hơn, tức là tổng hợp). Chú thích của Sposobin so tương phản cấu trúc với thủ pháp quen thuộc trong văn chương: xen kẽ câu dài và câu ngắn.

### Khi nào coi là "không chia được"

Sposobin dặn: ở những chỗ các hạt nhỏ móc vào nhau chặt (ví dụ một âm dừng dài mà thật ra là âm treo, chỗ giải quyết trùng với nhịp lấy đà của motif sau), việc chia chỉ là quy ước. Trong phân tích không cần chia quy ước như vậy: "mọi cấu trúc không chịu chia một cách hiển nhiên đều nên coi là liền và không chia" *(Sposobin, §28)*. Ở §29 ông định nghĩa thêm: "không chia được" nghĩa là hoặc liền hoàn toàn, hoặc chỉ liền hơn cấu trúc đặt đối diện với nó.

## 6. Cấu trúc vuông và không vuông

Sposobin gọi **tính vuông** (квадратность) là việc các phần dài bốn ô nhịp; nó có nguồn gốc từ nhạc ca – vũ *(Sposobin, §7, §25)*. Ở §30 ông bàn đoạn nhạc **không vuông**, mà các câu dài bằng nhau nhưng không phải 4, 8, 16 ô nhịp:

- câu sáu ô nhịp, phổ biến nhất, thường 2 + 2 + 2 hoặc 3 + 3 (ví dụ trong sách: một sonata của Haydn; Glinka, *Ivan Susanin*);
- câu năm ô nhịp với các dạng 2 + 3, 3 + 2, 1 + 1 + 3, 2 + 1 + 1 + 1 (Schubert, Sonata op. 122, chương III; Glinka, overture *Ivan Susanin*);
- câu 9, 10, 11 ô nhịp; và đoạn nhạc không chia câu dài mười ô nhịp (Mozart, Quartet Rê thứ, Menuetto).

Chú thích then chốt của Sposobin: "Trái với truyền thống phổ biến, mọi cấu trúc kiểu không vuông ở đây đều được xem là độc lập, chứ không phải dẫn xuất từ cụm bốn và tám ô nhịp" *(Sposobin, §30)*. Mở rộng và rút gọn được bàn riêng ở chương sau (xem [[mo-rong-cau-nhac]] và [[hinh-thuc-nga-doan-nhac]]).

Mazel chọn đường giữa. Ông thừa nhận nhiều cấu trúc không vuông "được nghe như biến dạng của cấu trúc vuông", tức là mở rộng hay nén lại. Ví dụ: ở ô nhịp thứ tám, thay cho kết trọn là kết ngắt hay kết không trọn, và kết trọn đến sau hai hoặc bốn ô nhịp, thì mười (hay mười hai) ô nhịp nghe như mở rộng của tám (ví dụ trong sách: Glinka, romance "Не искушай меня без нужды") *(Mazel, ch. III §2)*. Cảm nhận này chắc nhất khi trước cấu trúc không vuông có một cấu trúc vuông bắt đầu giống nó.

Một dạng mở rộng đặc biệt là **nhịp lấy đà tổng quát** (генеральный затакт): phần lấy đà của một cấu trúc chiếm cả một ô nhịp, kể cả phách mạnh (ví dụ: Tchaikovsky, *Nocturne* op. 10 №1; *Mélodie* op. 42 №3).

Nhưng Mazel cũng khẳng định có **tính không vuông hữu cơ**, tức những cấu trúc không vuông hoàn toàn không được nghe như lệch khỏi tính vuông: các giai điệu dân ca Nga gồm câu nhỏ ba ô nhịp, không thể coi là mở rộng của hai ô nhịp hay nén của bốn ô nhịp; và trong nhạc cổ điển có những cụm sáu ô nhịp gồm câu nhỏ ba ô nhịp, hai cụm năm ô nhịp, hai cụm bảy ô nhịp *(Mazel, ch. III §2)*.

Sposobin nói "mọi" cấu trúc không vuông là độc lập; Mazel nói "nhiều" cấu trúc không vuông là biến dạng của tính vuông, còn một số thì hữu cơ. Đây là một chỗ hai sách **khác nhau thật**, được ghi lại trong bảng đối chiếu bên dưới.

## 7. Chồng ghép và kết xen

### Định nghĩa

Sposobin: "Đôi khi ô nhịp cuối của một cấu trúc trùng với ô nhịp đầu của cấu trúc sau; điều đó gọi là **chồng ghép** (наложение)" *(Sposobin, §35)*. Chồng ghép thường đi cùng một kết hoàn tất ở ô nhịp đầu của cấu trúc sau, vì thế gọi là **kết xen** (вторгающаяся каденция, "kết xông vào"). Chồng ghép giúp liền mạch, đôi khi tạo cảm giác lao tới; trên cơ sở chồng ghép có thể sinh ra rút gọn. Ví dụ trong sách: Schumann, Giao hưởng số 2; Beethoven, Sonata op. 13 (*Pathétique*), chương I, Molto allegro e con brio, ô nhịp 1–17, sơ đồ 4–4–4–4 với các mũi tên chỉ kết xen.

Mazel định nghĩa chồng ghép là "khoảnh khắc kết thúc cấu trúc trước trùng với khoảnh khắc bắt đầu cấu trúc sau". Kết xen là kết mà hoà âm cuối rơi vào phách mạnh của ô nhịp đầu cấu trúc sau *(Mazel, ch. IV §1)*. Ông phân tích cùng chương ấy của Sonata số 8 (*Pathétique*): ba cụm tám ô nhịp. Cụm đầu kết trọn, nhưng chủ âm không vào ở ô nhịp thứ tám mà ở phách mạnh ô nhịp đầu cụm sau, "như xông vào". Cụm thứ hai kết nửa và hợp âm át cũng xông vào cụm thứ ba. Bên trong cụm thứ ba, kết của bốn ô nhịp đầu cũng xông vào bốn ô nhịp sau.

### Kết xen trong nhạc năng động

Theo Mazel, kết xen tạo **liên tục lớn hơn** cho phát triển và hay dùng trong nhạc tích cực, năng động. Trong ví dụ *Pathétique* nó không phá tính vuông, nhưng làm cách các motif ô nhịp ghép thành câu nhỏ trở nên đặc biệt. Motif ô nhịp đầu đứng như "cô lập", motif hai ghép với ba, bốn ghép với năm..., còn motif tám ghép với ô nhịp đầu của cấu trúc sau. Mazel dẫn khái niệm của G. L. Catoire: cấu trúc có ô nhịp lẻ nặng gọi là "trochee", ô nhịp chẵn nặng gọi là "iamb". Nếu trong cấu trúc trochee ô một ghép với ô hai, ô ba với ô bốn, đó là "trochee loại một", không có kết xen. Ví dụ *Pathétique* là "trochee loại hai". Kết xen đôi khi ký hiệu bằng mũi tên: 8 → 8 → 8 *(Mazel, ch. IV §1, chú thích)*.

### Bộ khung và lớp phủ

Trong chú thích tiếp theo, Mazel nêu một mâu thuẫn đáng chú ý của trochee loại hai: cách chia theo đổi kết cấu và hoà âm khác cách chia theo câu nhỏ của bè giai điệu chính. Cách chia thứ nhất có tính cấu trúc chung, là "bộ khung" (скелет, theo cách gọi của G. E. Conus); cách chia thứ hai "phủ lên trên" cách thứ nhất, là "lớp phủ" (покров) *(Mazel, ch. IV §1)*. Đây là lý do khi phân tích phải đánh dấu riêng cezura của giai điệu và cezura của hoà âm – kết cấu.

## 8. Nhìn từ Asafyev: phân đoạn như "hơi thở"

Sposobin và Mazel cung cấp một bộ công cụ đếm và gọi tên. Asafyev cảnh báo về giới hạn của nó. Ở chương V, ông viết về khả năng của mọi ý nhạc phát triển hữu cơ "co và giãn như cơ bắp, đầy lên và thu lại", mà ông gọi hình ảnh là "hơi thở" của chủ đề, câu nhỏ, đoạn nhạc, phần. Dịch sát: "Khi xem âm nhạc bằng mắt, ngoài âm thanh, thì quá trình ấy không tồn tại; chỉ có đủ loại thêm thắt máy móc, kết lừa, rút gọn v.v. Còn khi tai cảm thụ sự hình thành âm nhạc như một chuyển động có tổ chức được ngữ điệu hoá, thì mọi chặng của nó hiện ra như dữ kiện của một quá trình động lực duy nhất" *(Asafyev, Q1 ch. V)*.

Ở chương IX, ông phân tích bốn ô nhịp đầu Sonata Đô trưởng op. 2 №3 của Beethoven: về kiến trúc, cụm bốn ô nhịp ấy đối xứng và khép kín (I – V – V – I). Nhưng khi nghe thật thì nó chưa khép: bước nhảy quãng sáu ở ô thứ tư còn chưa được lấp, hình tiết tấu chính lặp lại làm tăng độ chênh vênh. Beethoven "nhặt" quãng sáu ấy, nén cặp chủ âm – át âm từ hai ô nhịp xuống một ô nhịp và lặp hai lần. Chỉ đến ô nhịp thứ mười ba, khi chủ âm vào ở phách mạnh, sự căng mới được giải toả *(Asafyev, Q1 ch. IX)*. Ông kết luận: đây là ví dụ đơn giản nhất về khác biệt giữa cách nhìn hình thức "như sơ đồ câm, ngoài âm thanh" và học thuyết về hình thức như quá trình, luôn được tai kiểm chứng. Nhưng khái niệm hình thức như quá trình đã kết tinh trong ý thức "không vì thế mà bị bãi bỏ, mà được bổ sung và làm giàu".

Nghĩa là, theo Asafyev, sơ đồ 4 + 4 hay 2 + 2 + 1 + 1 + 2 là cần, nhưng chỉ là hình chiếu thị giác; câu hỏi thật là các cụm ấy **làm gì** với độ căng. Mazel thật ra cũng đi một phần con đường này khi gán ý nghĩa lôgic cho từng cấu trúc (khái quát, củng cố, phát triển, khép). Xem tiếp [[hinh-thuc-nga-chuc-nang-kieu-trinh-bay]].

## Ba sách nói gì — đối chiếu

| Vấn đề | Sposobin | Mazel | Asafyev |
|---|---|---|---|
| Cezura | khoảnh khắc chia giữa các phần; ba dấu hiệu chính (dấu lặng, âm dài, lặp hình) | cùng định nghĩa; danh sách yếu tố rộng hơn và **xếp hạng**; lặp motif là dấu hiệu đáng tin nhất | dấu lặng – cezura không dừng chuyển động mà dồn nó như "con đập" |
| Cấu trúc (построение) | phần giới hạn bởi cezura, mọi độ dài | thêm điều kiện: phải là **phần hữu cơ** | không dùng; nói về "chặng" của quá trình |
| Câu nhỏ | 2 (đôi khi 3) ô nhịp, độc lập về tiết tấu, kết trên bất kỳ hợp âm | đơn vị nhỏ nhất xác định nhịp (≥ 2 phách mạnh) | không bàn riêng |
| Motif | nhóm âm với một trọng âm chính, đơn vị nghĩa nhỏ nhất; 4 kiểu (amphibrach, iamb, trochee, không trọn) | một phách mạnh; 3 kiểu tổng quát + nghĩa hẹp; **ý nghĩa biểu cảm** của từng kiểu; ô nhịp nặng/nhẹ | không phân loại; chú ý "sự hoá thân" không ngừng của các hạt ngữ điệu |
| Tính chu kỳ | thống nhất cấu trúc sơ đẳng nhất | nền của cả hệ phân loại; hai xu hướng: tiến tới và vượt qua tính chu kỳ | lặp lại nuôi trí nhớ nhưng lặp mãi thành quán tính |
| Tổng hợp / chia nhỏ | định nghĩa theo số ô nhịp; "giống thì chia, khác thì nối"; chia nhỏ ở phần tư thứ ba | thêm nghĩa lôgic (khái quát); chia nhỏ có khép với **bốn chặng**; bán đối xứng, đối xứng, tổng hợp kép | không dùng thuật ngữ; nói về "co giãn", "hơi thở" |
| Không vuông | mọi cấu trúc không vuông là **độc lập** | phân biệt không vuông do mở rộng/nén và **không vuông hữu cơ** | phê phán việc cộng ô nhịp máy móc |
| Chồng ghép, kết xen | §35: định nghĩa, ví dụ Schumann, Beethoven op. 13 | phân tích kỹ *Pathétique*; trochee loại một/hai (Catoire); bộ khung/lớp phủ (Conus) | kết có thể đổi chức năng thành cú đẩy (xem bài sau) |

**Chỗ giống:** cả Sposobin và Mazel đều dựa trên cezura, dùng cùng thuật ngữ cơ bản (построение, фраза, мотив, суммирование, дробление, наложение), cùng quy tắc "kết bằng âm hợp âm" và cùng nhận định rằng phân đoạn rõ nhất ở bè chính.

**Chỗ khác:** Mazel gắn mỗi cấu trúc với một ý nghĩa lôgic – biểu cảm và với nguồn gốc dân gian hoặc chuyên nghiệp; Sposobin chủ yếu mô tả và đếm. Về tính không vuông, hai người khác quan điểm như đã nói ở mục 6. Asafyev không phủ nhận việc chia, nhưng coi mọi sơ đồ là hình chiếu thị giác của một quá trình nghe.

**Thuật ngữ khác nhau:** Mazel dùng song song "суммирование" và "объединение"; Sposobin chỉ dùng "суммирование". Mazel gọi tên riêng "дробление с замыканием"; Sposobin mô tả mà không đặt tên. Sposobin ghi "предыкт" như một tên khác của nhịp lấy đà motif (§27), trong khi ở §9 cùng thuật ngữ ấy được dùng cho đoạn chuẩn bị bằng hoà âm át. Cần phân biệt theo ngữ cảnh.

## Cách phân tích

1. **Nghe và đánh dấu cezura rõ nhất trước**, ở quy mô lớn (dấu lặng dài, kết trọn, đổi chất liệu), rồi mới xuống quy mô nhỏ.
2. **Kiểm từng cezura bằng tiêu chuẩn âm hợp âm**: âm cuối của mỗi cấu trúc có phải âm hợp âm không? Nếu là âm treo hay âm lướt thì dời ranh giới.
3. **Xếp hạng các yếu tố phân đoạn** như Mazel: kết hoà âm và dấu lặng nặng hơn đổi sắc thái; lặp motif là dấu hiệu chắc. Nếu giai điệu và kết cấu – hoà âm chia khác nhau (bộ khung/lớp phủ), ghi cả hai.
4. **Ghi công thức số ô nhịp** cho từng câu: 4 + 4, 2 + 2 + 4, 2 + 2 + 1 + 1 + 2..., và công thức chất liệu: a a b b, a a b, a b b c, a b b a.
5. **Gọi tên cấu trúc**: chu kỳ, tổng hợp, chia nhỏ, chia nhỏ có khép, tổng hợp kép, bán đối xứng, đối xứng.
6. **Xác định kiểu motif** (iamb, trochee, amphibrach) và ô nhịp nặng/nhẹ; tự hỏi chúng nói gì về tính cách và cách diễn (nhấn chỗ nào, thở ở đâu).
7. **Tìm chồng ghép và kết xen**: hoà âm cuối có rơi vào phách mạnh ô nhịp đầu cấu trúc sau không? Ghi bằng mũi tên.
8. **Với cấu trúc không vuông**: hỏi xem nó nghe như mở rộng/nén của một mẫu vuông (có cấu trúc vuông đi trước giống nó không?) hay là không vuông hữu cơ.
9. **Kiểm bằng tai theo Asafyev**: chỗ "khép" trên giấy có thật sự khép khi nghe không? Độ căng tăng ở đâu (thường ở chỗ chia nhỏ, phần tư thứ ba), giải toả ở đâu?

## Bài tập

1. Lấy chương I Sonata op. 13 (*Pathétique*) của Beethoven, phần Allegro molto e con brio, ô nhịp 1–17 (ví dụ của cả Sposobin §35 và Mazel ch. IV). Đánh dấu các kết xen bằng mũi tên. Xác định trochee loại một hay loại hai theo Catoire.
2. Chương III Sonata op. 14 №1 của Beethoven (Allegro comodo): tìm cấu trúc chia nhỏ 4 + 2 + 2 mà Sposobin dẫn ở §29.
3. Từ danh sách "Tư liệu để phân tích" sau chương I của Sposobin, chọn: Beethoven, Sonata op. 2 №1, chương III; op. 10 №1, chương II; op. 14 №2, chương I; Schumann, *Album für die Jugend* op. 68 (các bài được liệt kê); Chopin, các Valse op. 64 và Mazurka op. 24 №2, №4; Tchaikovsky, op. 39 (*Album cho thiếu nhi*), các số 2, 5, 7, 8. Với mỗi đoạn mở đầu, ghi công thức ô nhịp và gọi tên cấu trúc (tổng hợp, chia nhỏ, chia nhỏ có khép...).
4. So sánh *Prélude* Đô trưởng op. 28 №1 của Chopin (Mazel, ch. III §2) với một bài trong *Album* op. 39 của Tchaikovsky: motif nào là trochee, motif nào là iamb hay amphibrach? Điều đó ảnh hưởng thế nào đến tính liền mạch?
5. Tìm một đoạn nhạc có cấu trúc không vuông trong danh sách trên (chẳng hạn một Mazurka của Chopin hay một bài của Grieg op. 12). Theo Sposobin thì nó là cấu trúc độc lập; theo Mazel thì nó là mở rộng hay không vuông hữu cơ? Lập luận cho cả hai phía.
6. Hát hoặc chơi lại câu "Идёт коза рогатая" (nếu có bản nhạc) và một bài dân ca Việt Nam quen thuộc: bài nào dựa trên tính chu kỳ, bài nào có a a b b hay a b b?

## Liên kết

- Bài trước trong bộ: [[hinh-thuc-nga-phuong-tien]] · bài sau: [[hinh-thuc-nga-chuc-nang-kieu-trinh-bay]] · lộ trình: [[hinh-thuc-nga-lo-trinh]]
- Đoạn nhạc và các biến dạng của nó: [[hinh-thuc-nga-doan-nhac]]
- Thư viện chung: [[cau-nhac]], [[motif]], [[mo-rong-cau-nhac]], [[sieu-nhip]], [[cau-ket]]
- Bài tóm theo từng sách: [[sposobin-doan-nhac]], [[mazel-giai-dieu-va-tiet-tau]], [[mazel-cau-truc-cau-doan-va-chuc-nang]], [[asafyev-i-m-t-va-cac-yeu-to]]
`,
  },
  {
    slug: 'hinh-thuc-nga-chuc-nang-kieu-trinh-bay',
    title: 'Chức năng các phần và kiểu trình bày; bộ ba i : m : t',
    category: 'form',
    aliases: [
      'chức năng các phần',
      'функции частей',
      'kiểu trình bày',
      'тип изложения',
      'kiểu trình bày chủ đề',
      'kiểu trình bày đoạn giữa',
      'kiểu trình bày kết',
      'предикт',
      'предыкт',
      'đoạn chuẩn bị',
      'chức năng lôgic và chức năng cấu trúc',
      'initium movere terminus',
      'i:m:t',
      'толчок и замыкание',
      'cú đẩy và chỗ khép',
    ],
    summary:
      'Mỗi phần của hình thức có một chức năng: trình bày, nối, đoạn giữa, tái hiện, mở đầu, kết. Mỗi chức năng đi với một kiểu trình bày riêng về chủ đề, giọng và cấu trúc. Bài này gộp sáu chức năng và bốn kiểu trình bày của Sposobin (§6–11, §18), phân biệt chức năng lôgic và chức năng cấu trúc của Mazel (ch. V §3), và bộ ba i : m : t (initium – movere – terminus) cùng học thuyết về cú đẩy và chỗ khép của Asafyev (Q1 ch. IV–V, IX), rồi đối chiếu ba cách nhìn.',
    refs: RU_FORM_REFS,
    body: `
## Dẫn nhập

Hai đoạn nhạc có thể dùng cùng một chất liệu mà vẫn làm hai việc khác nhau: đoạn này **trình bày** chủ đề, đoạn kia **phát triển** nó, đoạn nữa **dẫn sang** chủ đề khác. Người nghe có kinh nghiệm nhận ra ngay, nhiều khi chỉ sau vài ô nhịp, rằng mình đang ở "đoạn giữa" hay "phần kết", dù chưa biết hình thức là gì. Nhận biết ấy dựa trên hai tầng khái niệm mà trường phái Nga – Xô viết đặt làm nền cho mọi phân tích hình thức: **chức năng của phần** (функция части) và **kiểu trình bày** (тип изложения).

Sposobin trình bày hai khái niệm này thành hệ thống ở §6–11 phần Dẫn nhập, kèm §18 về những trường hợp "không thuần". Mazel giữ khung ấy nhưng tách hai tầng chức năng: **lôgic** và **cấu trúc** (ch. V §3). Asafyev, viết sớm hơn cả hai, không dùng thuật ngữ "chức năng phần" mà xây một học thuyết khác: mọi sự hình thành âm nhạc diễn ra giữa **cú đẩy** và **chỗ khép**, theo bộ ba i : m : t (Q1 ch. IV, V, IX). Bài này trình bày ba cách nhìn, rồi đặt chúng cạnh nhau.

## 1. Sáu chức năng theo Sposobin

Sposobin bắt đầu bằng một lưu ý: chức năng **không phụ thuộc bắt buộc** vào số chủ đề. Cả hình thức có thể xây trên một chủ đề, và ngược lại, ngay ở phần phụ cũng có thể có yếu tố chủ đề mới. Dù vậy, "mỗi phần có một nhiệm vụ, hay chức năng, trong hình thức". Các chức năng chính có **sáu** *(Sposobin, §6)*:

1. **Trình bày chủ đề** (изложение темы): lần đầu chủ đề (hay các chủ đề) được đưa ra.
2. **Phần nối** (связующая часть, gọi tắt là связка): giữa các lần trình bày những chủ đề khác nhau, hay nói chung giữa các phần chính của hình thức.
3. **Đoạn giữa** (середина hay средняя часть): cấu trúc nằm giữa những phần khác, thường giống nhau về nội dung, và độc lập hơn phần nối. Sposobin hẹn bàn kỹ hơn sự khác nhau tinh tế giữa hai thuật ngữ середина và средняя часть ở các chương sau. Một dạng riêng rất quan trọng của đoạn giữa là **phát triển** (разработка): "sự phát triển tiếp một chủ đề (hay các chủ đề) đã trình bày, được đưa ra dưới ánh sáng mới và hơn nữa không trọn vẹn, mà từng phần, nhiều khi rất ngắn".
4. **Tái hiện** (реприза): chủ đề được đưa lại sau một âm nhạc khác (sau phát triển chính chủ đề ấy, sau một chủ đề mới). Chủ đề có thể trở lại trọn vẹn hay chỉ ở phần đặc trưng của nó. Điều này đặc biệt hiệu quả sau khi phát triển đã "phân rã" chủ đề thành từng phần.
5. **Mở đầu** (вступление): cấu trúc đứng trước hình thức chính hay một phần của nó, thường tách khỏi phần ấy.
6. **Kết** (заключение): cấu trúc theo sau chỗ kết thúc toàn bộ hình thức chính (khi ấy gọi là **coda**), hoặc gắn vào một phần nào đó của hình thức (vào phần trình bày chủ đề, vào đoạn giữa...).

### Tính tái hiện: một nguyên tắc tạo hình thức

Ngay trong §6, Sposobin đưa ra một nhận định có tầm bao quát: "Nói chung, hầu như mọi hình thức âm nhạc đều dựa trên việc dùng tái hiện. Vì vậy **tính tái hiện** là một trong những nguyên tắc tạo hình thức quan trọng nhất, giúp chỉnh thể thống nhất" *(Sposobin, §6)*.

Tái hiện tạo ra **khung** cho hình thức. Khi cấu trúc được lặp ở đầu và cuối quá nhỏ so với các phần khác, người ta nói về **khung** (обрамление) chứ không nhấn mạnh tính tái hiện.

## 2. Bốn kiểu trình bày theo Sposobin

Chức năng của một cấu trúc thường gắn với những nét đặc trưng trong giai điệu, hoà âm và cách xây dựng. "Chính những nét đặc trưng ấy tạo thành **kiểu trình bày** chất liệu âm nhạc" *(Sposobin, §7)*; trong chú thích, ông thêm: đôi khi cả trong kết cấu. Ông lưu ý ngay: các nét đặc trưng của mỗi chức năng có thể hiện ra cùng lúc tất cả, hoặc chỉ một phần, kết hợp với nhau.

### Kiểu trình bày chủ đề (экспозиционный тип изложения)

Đây là kiểu ứng với việc trình bày chủ đề và thường cả với việc lặp lại nó khi tái hiện. Dấu hiệu chung: **ổn định về tính chất** và **tiết kiệm phương tiện**. Cụ thể *(Sposobin, §7)*:

- **Thống nhất chủ đề**: chỉ một hoặc vài yếu tố giai điệu – chủ đề.
- **Thống nhất giọng**: liền một giọng, có thể chuyển hướng (thường sang giọng gần) rồi quay về giọng chính; đôi khi chuyển hướng xa nhưng cũng quay về (ví dụ trong sách: Prokofiev, *Romeo và Juliet*). Cũng có thể **chuyển giọng về cuối** cấu trúc, thường theo hướng truyền thống sang phía át (giọng bậc V hay bậc III). Chuyển giọng gần đầu cấu trúc hiếm hơn nhiều (Beethoven, Quartet op. 18 №1). Âm nền chủ âm (органный пункт trên chủ âm) thường gặp như một yếu tố mạnh của thống nhất giọng.
- **Thống nhất cấu trúc**: tính vuông (4 + 4, 4 + 4 + 4...), ít nhất là hai ô nhịp một (2 + 2 + 2 + 2), hoặc lặp lại những cấu trúc không vuông (3 + 3, 5 + 5, 7 + 7).

Sposobin dặn: dấu hiệu cấu trúc "kém tin cậy hơn" hai dấu hiệu trước, vì thống nhất chủ đề và giọng đã đủ cho cấu trúc trình bày tính ổn định.

### Kiểu trình bày đoạn giữa (срединный тип изложения)

"Kiểu trình bày đoạn giữa là kiểu trong đó, cách này hay cách khác, thể hiện những nét không ổn định, trôi chảy" *(Sposobin, §8)*. Dấu hiệu quan trọng nhất:

- **Đưa ra những đoạn chủ đề tương đối ngắn**, thường mượn từ chủ đề đã trình bày. Việc mượn ấy gọi là **tách đoạn** (вычленение). Rất thường gặp là đưa các yếu tố mượn theo kiểu mô tiến hay gần mô tiến (ví dụ trong sách: Beethoven, Sonata op. 22, chương II).
- **Không ổn định về hoà âm, không khép kín.** Nếu không rời giọng chính, sự không ổn định có thể thể hiện ở việc vắng chủ âm, đẩy chủ âm vào phách yếu hay ô nhịp lẻ (không kết), dùng chủ âm ở dạng không có tính kết. Có thể thêm âm nền trên **át âm** của giọng chính cho cả đoạn giữa hay một đoạn của nó (thường về cuối). Điển hình không kém là đưa vào một hay nhiều giọng phụ (trong hình thức lớn thường rất nhiều). Giọng chính được tránh và chỉ được khôi phục gần cuối đoạn giữa. Gắn với việc mô tiến các yếu tố ngắn, thường gặp mô tiến hoà âm, đặc biệt mô tiến chuyển giọng.
- **Vụn vặt về cấu trúc**, không vuông hoặc tính vuông ở vị trí thứ yếu, cũng do các yếu tố chủ đề ngắn. Tính vụn vặt thường đi cùng chuyển động sinh động và tính chất trôi chảy.

Nếu phần ấy (điều gặp thường xuyên) dành cho việc phát triển tiếp chất liệu đã trình bày, Sposobin đề nghị gọi chính xác hơn là kiểu **đoạn giữa – phát triển** (срединно-разработочный).

### Biến thể của kiểu đoạn giữa: phần nối và đoạn chuẩn bị

Kiểu đoạn giữa là kiểu của nhiều phần nối chuyển giọng, có lẽ là của đa số. Sposobin kê năm biến thể chính của phần nối *(Sposobin, §9)*:

1. một nét giai điệu trên nền hoà âm ngân giữ hoặc ngầm hiểu (thường là hợp âm bảy át của giọng phần sắp tới), hoặc thêm quãng bảy vào hợp âm ba đã đạt để biến nó thành hợp âm bảy át;
2. một bước chuyển giọng ngắn có dạng kết (ví dụ trong sách: Schumann, Giao hưởng số 1, Scherzo);
3. một hay vài kết lặp lại trên chủ âm của phần trước, sau đó là đoạn chuyển giọng sang giọng phần sau;
4. lặp lại một phần (nguyên dạng hay biến đổi) nhạc của phần trước, rồi chuyển sang giọng phần sau;
5. một cấu trúc đoạn giữa – phát triển hay đơn giản là không ổn định, dựa trên yếu tố chủ đề cũ hay mới; rất thường là mô tiến chuyển giọng (Borodin, Giao hưởng số 2, chương II).

Chọn biến thể nào phụ thuộc phần nào vào ý muốn nhấn mạnh sự chuyển sang phần mới, hay ngược lại, "che giấu" ý định ấy, làm chỗ chuyển khó nhận ra hơn.

Để chuẩn bị bất kỳ phần nào của hình thức, người ta hay dùng sự **tích luỹ độ căng át** trong giọng được chờ đợi, gọi là **đoạn chuẩn bị** hay **predikt** (предикт, trong sách viết предыкт). Ba cách *(Sposobin, §9)*:

1. một hợp âm thuộc nhóm át của giọng sắp tới được đánh một lần, ngân giữ hoặc lặp lại (Borodin, Giao hưởng số 2, cuối trio); hợp âm ấy có thể được hình hoạ, kể cả bằng chất liệu chủ đề quan trọng;
2. hoà âm át đặt ở phách mạnh, ô nhịp chẵn, xen với hợp âm khác (Mozart, Sonata số 5, chương I);
3. âm nền trên át âm.

Mọi cách ấy tạo căng thẳng hoà âm, rồi được giải quyết bằng sự xuất hiện của phần đã được chuẩn bị, "như một nhịp lấy đà át đơn giản chuyển vào chủ âm ở phách mạnh". Sposobin giải thích tên gọi bằng chính sự họ hàng ấy: predikt nghĩa là **nhịp lấy đà cho những cấu trúc gồm nhiều, thậm chí rất nhiều ô nhịp**. Đoạn chuẩn bị thường đặt ở cuối đoạn giữa, phần nối và phần mở đầu. Đôi khi nó thể hiện ở cả một phần có chức năng ấy; ví dụ trong sách là 82 ô nhịp đầu overture *Hoàng tử Igor* của Borodin.

### Kiểu trình bày kết (заключительный тип изложения)

"Kiểu trình bày kết là kiểu tạo ra sự **khẳng định chủ âm đã đạt được**, trong giọng chính hay giọng phụ" *(Sposobin, §10)*. Đó là một hay nhiều cấu trúc bổ sung cho phần trình bày chính của một ý trọn vẹn, của một phần, một đoạn lớn hay cả hình thức. Dấu hiệu chính:

1. gắn thêm cấu trúc (hay nhóm cấu trúc) vào phần trước đã kết thúc bằng chủ âm, và chủ yếu trong cùng giọng ấy;
2. các kết lặp lại trên chủ âm của cùng giọng, gọi là **bổ sung kết** (каденционные дополнения), hoặc đơn giản là ngân giữ hay lặp lại chủ âm;
3. âm nền trên chủ âm của cùng giọng (ví dụ trong sách: Mussorgsky, *Boris Godunov*);
4. chuyển hướng sang phía hạ át so với giọng được khẳng định;
5. rút ngắn dần các cấu trúc dẫn về chủ âm (cái gọi là chia nhỏ), nếu có nhiều cấu trúc như vậy. Đôi khi ngược lại là kéo dài.

Sposobin nhắc lại: dấu hiệu cấu trúc kém tin cậy hơn dấu hiệu hoà âm.

### Kiểu trình bày trong phần mở đầu

Với phần mở đầu, Sposobin nói thẳng: có **rất ít** thủ pháp chỉ riêng mở đầu mới có *(Sposobin, §11)*. Có hai loại:

- **Mở đầu không có chủ đề xác định**: một âm (Mussorgsky, *Serenade*), một hợp âm (Balakirev, "Еврейская мелодия"), một hay vài hợp âm trong hình đệm, thường giống hình đệm phần sau (Schumann, Sonata op. 22, chương I). Loại này dễ phân biệt và tách khỏi phần chính, vì không có phát triển giai điệu – chủ đề. Dù vậy nó vẫn thường xác định tính chất phần sắp tới qua tiết tấu, cường độ, tempo, nhất là qua kiểu hình đệm.
- **Mở đầu có nội dung chủ đề** (độc lập hay mượn từ phần chính sau): thường thể hiện rõ một trong các kiểu trình bày đã nói. Có thể là kiểu trình bày chủ đề, với chuyển động giai điệu – chủ đề liền mạch; kiểu đoạn giữa, với các yếu tố ngắn rời rạc hơn (Medtner, Sonata op. 22), đôi khi đến mức đoạn giữa – phát triển; thậm chí kiểu kết (Schubert, "Gute Nacht", *Winterreise* op. 89 №1). Phần mở đầu dài thường kết hợp nhiều kiểu nối tiếp nhau.

Cuối phần mở đầu thường có (nhưng không bắt buộc) át chuẩn bị (predikt) sang giọng phần chính sau, và thường tách khỏi nhạc sau bằng một cezura: dấu lặng, chỗ ngắt, fermata.

## 3. Khi chức năng và kiểu trình bày không khớp (§18)

Sposobin thừa nhận: mô tả trên là những trường hợp "thuần" và hiển nhiên nhất. Chúng nhiều thật, nên cho phép rút ra quy luật chung. Nhưng sự tương ứng kém đơn giản và sự đan xen các quy luật khác nhau "cũng không quá hiếm" *(Sposobin, §18)*. Ông đưa một loạt ví dụ, xếp theo chức năng:

| Chức năng | Kiểu trình bày có thể gặp | Ví dụ trong sách |
|---|---|---|
| Trình bày chủ đề | thuần trình bày; trình bày + kết; mang phần nào tính đoạn giữa; trình bày + đoạn giữa + trình bày; tương phản đối chiếu ngay trong một chủ đề | phần chính chương I Giao hưởng số 4 của Tchaikovsky (trình bày – đoạn giữa – trình bày); Beethoven, Sonata op. 31 №2, chương I (tương phản trong một chủ đề) |
| Đoạn giữa | thuần đoạn giữa + phát triển; có đoạn kiểu trình bày ở đầu hay bên trong; toàn phần mang kiểu trình bày khi tương phản với các phần xung quanh | — |
| Phần nối | rất thường là kiểu kết nối tiếp kiểu đoạn giữa | Beethoven, Giao hưởng số 1, chương I, ô nhịp 21–40 |
| Tái hiện | toàn bộ kiểu trình bày; hoặc có yếu tố kiểu đoạn giữa kèm tính phát triển, nhất là ở tái hiện lớn | Tchaikovsky, "Tháng Sáu" (*Bốn mùa* op. 37), ô nhịp 21–30; Beethoven, Giao hưởng số 1, chương I, ô nhịp 166–193 |
| Kết | toàn bộ kiểu kết; khi lớn thường kết hợp nét đoạn giữa – phát triển với kiểu kết thực sự | Beethoven, Sonata op. 53, chương I, 60 ô nhịp cuối |

Sposobin kết thúc §18 bằng một nhận xét về quan hệ với các nguyên tắc phát triển (bàn ở bài sau): các nguyên tắc ấy "có ý nghĩa phổ quát và được dùng ngoài sự phụ thuộc trực tiếp vào chức năng của cấu trúc"; chỉ có **phát triển** là thường gắn nhất với vị trí ở giữa hình thức và kiểu trình bày đoạn giữa.

## 4. Mazel: chức năng lôgic và chức năng cấu trúc

### Cùng danh sách, khác nền tảng

Mazel nhận lại danh sách sáu chức năng, hầu như cùng nội dung với Sposobin: trình bày (exposition) một hay nhiều chủ đề; phần nối (trước kia gọi là "ход", "nước đi", tên này hợp với tính chất của nó); đoạn giữa, mà phát triển là trường hợp riêng quan trọng; tái hiện, thường có ý nghĩa hoàn tất; bổ sung hay cấu trúc kết (gọi là coda nếu cho cả hình thức và đủ lớn, trong sonata có trường hợp riêng là phần kết); mở đầu *(Mazel, ch. V §3)*. Ông cũng mô tả các kiểu trình bày tương ứng gần giống Sposobin, kể cả predikt. Điểm khác: với phần mở đầu, ông chỉ ghi "dùng những kiểu trình bày khác nhau nhất".

Mazel thêm một chú thích về thuật ngữ: "kiểu trình bày" còn được dùng theo những nghĩa khác, gắn với kết cấu (kiểu trình bày chủ điệu, phức điệu, song tấu...). Còn cụm "kiểu trình bày trình bày" (экспозиционный тип изложения) có yếu tố trùng lặp, vì "exposition" chính là "trình bày". Ông vẫn giữ thuật ngữ "chưa hoàn hảo" ấy vì nó đã phổ biến.

### Phân biệt hai tầng chức năng

Điểm mới của Mazel là tách hai tầng. Dịch sát: "Chức năng của các phần đồng thời mang tính **âm nhạc – lôgic** chung hơn, hiện thực hoá trong âm nhạc những quy luật chung cũng có ở tác phẩm của các nghệ thuật thời gian khác (và cả ở các văn bản ngoài nghệ thuật), và tính **âm nhạc – cấu trúc** đặc thù hơn, riêng của các phần trong chính các hình thức âm nhạc" *(Mazel, ch. V §3)*.

Ví dụ: chức năng lôgic **hoàn tất** có thể thực hiện trong những cấu trúc mang chức năng cấu trúc là tái hiện, phần kết (trong sonata), bổ sung, coda. Nhưng **không có sự tương ứng cố định**:

- tái hiện, vốn thường có ý nghĩa hoàn tất, nhiều khi lại là sự tiếp tục phát triển;
- bổ sung (xác định bằng dấu hiệu cấu trúc là lặp lại kết đã đạt) không phải lúc nào cũng là kết luận lôgic; đôi khi nó chỉ là một đuôi nhỏ, còn sự tóm tắt nằm ở những câu nhỏ cuối của phần trước;
- phần nối trong sonata có thể không chỉ chuyển giữa hai chủ đề mà còn phát triển mạnh chủ đề đầu, đôi khi trình bày một chủ đề mới (chủ đề "trung gian").

Các chức năng cấu trúc hình thành trong lịch sử không phải không liên quan đến các chức năng lôgic điển hình, nhưng có thể được dùng rất đa dạng. Ví dụ: cấu trúc đoạn nhạc ra đời gắn với chức năng trình bày chủ đề chủ điệu, nhưng trong đoạn nhạc có câu thứ hai mở rộng đáng kể thì thường đã chứa cả sự phát triển chủ đề; khi ấy chỉ câu đầu mới là trình bày.

Khái niệm chức năng lôgic **rộng hơn** chức năng cấu trúc và dùng được ở mọi quy mô. Một mặt, có thể nói về chức năng tổng kết, hoàn tất của finale một giao hưởng viết ở hình thức sonata, với đủ mọi chức năng lôgic và cấu trúc trong các phần của nó. Mặt khác, ngay trong một câu tám ô nhịp kiểu trình bày thuần, ta đã phân biệt được chức năng lôgic của từng câu nhỏ: hạt nhân, phát triển, cao trào, hoàn tất (xem bốn chặng của chia nhỏ có khép ở [[hinh-thuc-nga-phan-doan-cau-truc]]).

### Chức năng chung và chức năng riêng

Các chức năng cấu trúc vừa kể gặp ở nhiều kiểu hình thức nên có thể gọi là **chung**. Những trường hợp riêng của chúng, thuộc về các kiểu hình thức nhất định, thì gọi là **riêng** hay **chuyên biệt**: phần nối trong hình thức ba đoạn phức, trio, coda của sonata, phần chính, phần nối, phần phụ, phần kết của trình bày sonata, phát triển sonata, tái hiện sonata, phần chính và episode của rondo... *(Mazel, ch. V §3)*. Mazel chú thích: trong sách *Cơ sở chức năng của hình thức âm nhạc* (Функциональные основы музыкальной формы, 1978), V. P. Bobrovsky gọi chức năng âm nhạc – lôgic là **chức năng lôgic chung**, còn chức năng cấu trúc chung và riêng là **chức năng bố cục chung và chuyên biệt**.

### Kiêm nhiệm và biến đổi chức năng

Mazel nhắc lại một nguyên tắc ông nêu ở chương I §8: **kiêm nhiệm chức năng** (совмещение функций) là một trong những nguyên tắc chung của tác động nghệ thuật. Một cấu trúc có thể cùng lúc mang hai chức năng điển hình *(Mazel, ch. V §3)*:

- Trong rondo năm đoạn A B A C A, hiểu như hai hình thức ba đoạn móc vào nhau, lần thứ hai của chủ đề chính (A) vừa là tái hiện của A B A, vừa là phần trình bày mở đầu của A C A.
- Đôi khi chức năng tái hiện kiêm luôn chức năng predikt trước tái hiện: tái hiện đi trên âm nền át, như ở *Prélude* Si giáng trưởng của Chopin.
- Đôi khi tái hiện kiêm chức năng coda, với âm nền chủ âm hay việc liên tục trở về bè trầm chủ âm, như trong "Warum?" của Schumann.
- Kiêm nhiệm đặc biệt điển hình ở các hình thức hỗn hợp: trong hình thức kết hợp nét allegro sonata và chu kỳ sonata, chức năng phần phụ của allegro thường kiêm chức năng chương chậm của chu kỳ (xem [[hinh-thuc-nga-hon-hop-va-ghep-tuong-phan]]).

Ngay trong allegro sonata điển hình, phần nối thực hiện chức năng chuyển tiếp qua hai chức năng khác: phát triển chủ đề chính và chuẩn bị chủ đề phụ. Chức năng thứ nhất thường trội ở đầu phần nối, chức năng thứ hai ở cuối. Tức là chức năng của một cấu trúc không cố định suốt chiều dài mà thay đổi. Mazel gọi hiện tượng này là **tính biến đổi chức năng** (переменность функций) và chú thích rằng Bobrovsky đã khảo sát nó kỹ.

### Lịch sử của sự phân hoá chức năng

Mazel thêm một nhận xét lịch sử mà Sposobin không có. Dịch sát: sự phân hoá rõ ràng các chức năng của phần (và các kiểu trình bày tương ứng) "hoàn toàn không phải đặc trưng của mọi thứ âm nhạc. Nó hình thành trong lịch sử và chỉ đạt biểu hiện đầy đủ vào **thế kỷ 18**, nhiều nhất ở những tác phẩm khí nhạc tương đối lớn" *(Mazel, ch. V §3; OCR ghi số thế kỷ bị nhoè, đọc theo ngữ cảnh)*. Trong âm nhạc trước đó, và trong những hình thức sơ đẳng như bài hát strophe, sự phân hoá này yếu; chẳng hạn đôi khi chỉ có một thay đổi nhỏ ở cuối lời cuối để nhấn tính kết. Nó cũng khó nắm bắt trong những tác phẩm thế kỷ 20 không có giọng và không có chủ đề cá tính hoá.

## 5. Asafyev: cú đẩy, chuyển động, chỗ khép (i : m : t)

### Từ công thức thánh vịnh đến công thức kết

Asafyev không bắt đầu từ chức năng phần, mà từ câu hỏi: âm nhạc **bắt đầu** và **dừng** như thế nào? "Mỗi tác phẩm âm nhạc triển khai giữa **cú đẩy** ban đầu (điểm xuất phát, khoảnh khắc đẩy đi) và cái **phanh**, hay **chỗ khép** của chuyển động (kết)" *(Asafyev, Q1 ch. IV)*. Ông phàn nàn rằng giới nghiên cứu đã làm được chút ít về kết (phân loại kết như công thức cuối), nhưng về các thủ pháp và công thức ngữ điệu quyết định **khởi đầu** chuyển động thì phải gom tư liệu rất vất vả; điều chính chỉ có thể rút ra từ quan sát.

Để thấy cấu trúc cơ bản, ông lấy một công thức thánh vịnh trung cổ (công thức của giọng nhà thờ thứ 8, ông dẫn theo sách của G. Adler). Trong đó phân biệt được: khởi đầu (Initium), đọc trên âm chính (Tenor) với một nửa kết ở cezura giữa (OCR ghi thuật ngữ này không rõ), và phần kết (Punctum). Giọng hát "như leo dần đến điểm tựa mong muốn, chứ không tấn công nó ngay". Cú đẩy ở đây là việc "tiếp cận" và cố định âm để đọc *(Asafyev, Q1 ch. IV)*.

Ở chương V, ông rút ra công thức chung. Dịch sát: sự hình thành âm nhạc luôn là "cú đẩy, tức điểm xuất phát của âm thanh, và sự dịch chuyển, tức chuyển động hay trạng thái cân bằng không bền, rồi quay về nguồn, về trạng thái cân bằng (về âm ổn định), hay khép chuyển động, tức là tương quan **i** (initium, khởi đầu) : **m** (movere, chuyển động) : **t** (terminus, kết thúc, giới hạn)" *(Asafyev, Q1 ch. V)*.

Công thức kết trọn phản ánh chính kiểu hình thành ấy: giữa hai chủ âm ở hai biên là hạ át và át, những vùng tạo ra các chặng không ổn định so với xung lực đầu. "Không có điều đó, không có sự dịch chuyển khỏi T, không có sự đối chiếu các ngữ điệu, thì không có chuyển động âm nhạc." Ông chứng minh cùng các chặng ấy ở công thức thánh vịnh, ở phần chính overture *Prometheus* của Beethoven và ở một giai điệu "đi lên" trong *Siegfried* của Wagner.

### Hai chức năng của cú đẩy

Asafyev nêu hai chức năng của cú đẩy *(Asafyev, Q1 ch. IV)*:

1. **Đưa tai vào âm chủ** (vùng giọng) của nhạc sắp triển khai. Giọng hát thời trung cổ dẫn tai vào giọng qua các bậc đặc trưng của điệu thức. Phần mở đầu chậm của Giao hưởng số 1 Đô trưởng của Beethoven không bắt đầu bằng chủ âm mà "dẫn" tai đến nó từ xa. Theo Asafyev, khác biệt "chỉ ở mức độ sắc nét của cùng một thủ pháp, không ở bản chất".
2. **Chức năng năng lượng**: gọi ra năng lượng chuyển động và cho cú đẩy tác động ở khoảng cách xa. Có hai cách. Một là "tích luỹ" dần các tổ hợp âm, tưởng như xa đích. Hai là ngược lại, đưa người nghe vào ngay nhờ một ngữ điệu rõ, gọn, xác định giọng: một hiệu kèn, một công thức mở đầu quen của thời đại (như đầu giao hưởng *Jupiter* của Mozart), hoặc chỉ một hợp âm hay thậm chí một âm cả dàn nhạc đánh mạnh để gọi chú ý (overture *Egmont*, *Coriolan*, *Leonore* số 3 và Giao hưởng số 2 của Beethoven).

Khi phân tích cú đẩy từ góc độ ngữ điệu, ông đề nghị phân biệt ba tầng: âm xuất phát đầu tiên; liên kết âm đầu tiên đặc trưng cho cả chuyển động sau, xác định tiết tấu và giọng; và phần mở đầu mở rộng (như mở đầu chậm của giao hưởng).

### Kết có thể thành cú đẩy, cú đẩy có thể thành kết

Luận điểm đặc trưng nhất của Asafyev là **chức năng không cố định** và có thể "chuyển thành cái đối lập". Glinka mở overture *Ruslan và Lyudmila* bằng các hợp âm của công thức kết trọn (bậc I, IV, V, I của Rê trưởng). Asafyev chú thích: "kết ở đây thực hiện chức năng trái với bản chất của nó: nó trở thành ngữ điệu xuất phát của chuyển động" *(Asafyev, Q1 ch. IV)*. Ông dẫn thêm: Haydn mở một quartet (Sol trưởng op. 33 №5) bằng một công thức kết; các nhà cổ điển nói chung hay dùng kết làm cú đẩy.

Ngược lại, các liên kết âm tạo thành cú đẩy thường lại là kết đối với phần nhạc đứng trước: chúng phanh lại hoặc đổi hướng chuyển động. Chủ đề chính Giao hưởng số 1 của Beethoven, so với phần mở đầu chậm "gọi" và chuẩn bị nó, là kết quả, là sự giải phóng năng lượng tích luỹ; nhưng so với sự triển khai sau đó, nó là kích thích chính.

Ông cũng chỉ ra việc **lệch kết khỏi đường thẳng**: đơn giản nhất là át chuyển sang bậc VI thay vì chủ âm. Đây là phương tiện từ lâu dùng để "kéo dài đoạn nhạc và tiếp tục chuyển động". Ông còn đi xa hơn: "giai điệu vô tận" của Wagner có thể được xem như một sự hình thành mà ranh giới liên tục bị đẩy ra nhờ một chuỗi không đứt các "kết lừa" và việc trì hoãn chủ âm *(Asafyev, Q1 ch. IV)*.

### Cú đẩy bên trong

Ngoài cú đẩy đầu, Asafyev phân biệt những **cú đẩy bên trong** *(Asafyev, Q1 ch. IV)*:

- **"Lấy đà"** trước một khoảnh khắc quan trọng, thường trên âm nền át và với crescendo. Ví dụ trong sách: overture *Hoàng tử Igor* (Borodin – Glazunov); chuẩn bị allegro trong chương I Giao hưởng số 3 của Tchaikovsky; "công thức chuyển" sang chủ đề sau phần mở đầu chương I Giao hưởng số 4 của Beethoven. Theo ông, hiện tượng này đặc biệt hay thấy ở các âm nền chuẩn bị tái hiện.
- **Khẳng định lại giọng** sau những lần chuyển hướng dài, không chỉ trước tái hiện mà cả trước coda (âm nền chủ âm mở đầu coda overture *Đám cưới Figaro* của Mozart).
- **Những ngữ điệu "rung lắc"** chuyển động: các chỗ nghịch tai đặc biệt, sắc trong hệ thống. Ví dụ ông nêu: những "cú mổ" của Borodin, những "đường zíc zắc" của Prokofiev, những dấu lặng bất ngờ và nhất là đảo phách (синкопа). Tất cả đều cản sự hình thành quán tính.

Điều này gần với khái niệm predikt của Sposobin và Mazel (tích luỹ độ căng át trước một phần mới). Nhưng Asafyev nhìn nó như một **lực**, không như một loại phần.

### i : m : t ở mọi quy mô và sự hoán đổi chức năng

Ở chương IX, Asafyev mở rộng: công thức i : m : t phải phản ánh **từng chặng chuyển động** riêng lẻ, phản ánh kết trọn cuối cùng, và phản ánh **cả tác phẩm** như kết quả tương tác của mọi yếu tố. Trong quá trình triển khai, chức năng các thành phần liên tục hoán đổi *(Asafyev, Q1 ch. IX)*:

- **t** (kết, chỗ khép) là phanh đối với nhóm ngữ điệu trước, nhưng đối với chặng sau chỉ là sự phanh tạm thời, cục bộ. Mọi kết bên trong đều phụ thuộc kết cuối cùng.
- **i** (điểm xuất phát) có thể đồng thời là xung lực cho chặng sau và là chỗ khép của chặng trước.

Ví dụ cụ thể của ông: các nhà cổ điển hay mở đầu **phát triển** bằng câu kết của trình bày, chuyển sang vùng giọng khác. Không có thay đổi cấu trúc bên trong câu nhỏ ấy, nhưng chức năng đổi hẳn: lần đầu nó là terminus, lần sau là initium. Ví dụ trong sách: chỗ chuyển sang phát triển trong các Quartet số 5, 7, 9 của Mozart và trong Sonata cho violon op. 23 của Beethoven.

Asafyev viết công thức triển khai thành một chuỗi: i : m : (t = i) : m : (t = i) : m..., tức là mỗi chỗ khép đồng thời là một khởi đầu. Và vì m là tổng thể vô số quan hệ âm, mỗi phần tử của nó cũng có thể trở thành i hay t. Ông dùng hình ảnh **"hệ thống các vòm ngữ điệu bắc chéo nhau"** để mô tả các lực hút tác động lên nhau ở những khoảng cách và cường độ khác nhau. Ông dặn "vòm" chỉ là phép so sánh minh hoạ, một hình chiếu thị giác, không phải đồng nhất với thuật ngữ kiến trúc. Theo ông, hình thức allegro sonata là biểu hiện mạnh nhất của tương quan i : m : t, và phát triển là chặng thể hiện rõ nhất bản chất vận động, biện chứng của âm nhạc.

### Một "công thức" của quá trình

Cuối chương V, Asafyev nêu một chuỗi mà ông coi là "một trong những công thức thông thường (hay trục) của sự hình thành âm nhạc": "lộ ra chủ đề, lặp lại nó (đồng nhất hoàn toàn hay một phần, mở rộng hay nén lại); chuyển chuyển động sang vùng mới, lộ ra chất liệu mới và khẳng định nó; một loạt đối chiếu những ngữ điệu đã lộ ra; tổng hợp chúng; coda" *(Asafyev, Q1 ch. V)*. Coda ở đây là một "bùng phát" mới, hoặc nhờ các kích thích gọi ra "năng lượng giải phóng" và "cảm giác chủ âm" mà vẫn trì hoãn "kết thúc", hoặc nhờ phương tiện nguyên sơ hơn như tăng tốc, đưa chủ đề chính theo kiểu stretto (cuối chương I Giao hưởng số 4 của Tchaikovsky).

Đặt chuỗi này cạnh sáu chức năng của Sposobin, ta thấy gần như cùng một danh sách (trình bày, lặp lại, chuyển, chất liệu mới, đối chiếu – phát triển, tổng hợp – tái hiện, coda). Nhưng Asafyev mô tả chúng như các pha của một quá trình, không như ngăn chứa.

## 6. Đối chiếu ba cách nhìn

### Bảng tổng hợp

| Vấn đề | Sposobin | Mazel | Asafyev |
|---|---|---|---|
| Khái niệm gốc | chức năng phần + kiểu trình bày | chức năng lôgic / chức năng cấu trúc (chung và riêng) + kiểu trình bày | cú đẩy – chuyển động – chỗ khép (i : m : t) |
| Số chức năng | 6 (trình bày, nối, giữa, tái hiện, mở đầu, kết) | cùng 6 chức năng cấu trúc chung + nhiều chức năng riêng | không đếm; mọi chặng đều có i, m, t |
| Kiểu trình bày | 4: trình bày, đoạn giữa (kèm nối, predikt), kết, mở đầu; nêu dấu hiệu cụ thể | gần như Sposobin; ghi chú về thuật ngữ | không dùng; nói về độ căng, năng lượng |
| Quan hệ chức năng – kiểu | có trường hợp "thuần" và trường hợp đan xen (§18) | không có tương ứng cố định giữa lôgic và cấu trúc; kiêm nhiệm, biến đổi chức năng | chức năng luôn "chuyển thành cái đối lập": kết thành cú đẩy, cú đẩy thành kết |
| Tầm lịch sử | không bàn | phân hoá chức năng đầy đủ từ thế kỷ 18 | dẫn từ thánh vịnh trung cổ đến Wagner, Strauss |
| Predikt / cú đẩy bên trong | predikt: tích luỹ độ căng át | predikt: cấu trúc chuẩn bị chủ đề mới hay tái hiện | "lấy đà", âm nền, "cú mổ", đảo phách |

### Chỗ giống

Cả ba đều thấy mỗi đoạn nhạc **làm một việc** trong chỉnh thể, và việc ấy nghe ra được qua phương tiện: ổn định hay không ổn định về giọng, độ dài các yếu tố chủ đề, sự có mặt của chủ âm. Cả ba đều nhấn **vai trò của át và chủ âm** trong chuẩn bị (predikt, lấy đà) và trong khép (bổ sung kết, âm nền chủ âm). Cả ba đều coi tái hiện, hay sự trở về, là trụ cột của tính thống nhất.

### Chỗ khác

- Sposobin gắn chức năng với **vị trí** và **dấu hiệu**: đây là công cụ nhận diện, dạy được, kiểm được.
- Mazel thừa nhận khung ấy nhưng cảnh báo rằng vị trí cấu trúc không quyết định nghĩa lôgic: một tái hiện có thể vẫn đang phát triển, một bổ sung có thể không kết luận gì. Ông thêm chiều **lịch sử**: chức năng phần là sản phẩm của một thời kỳ.
- Asafyev đặt chức năng vào **thời gian nghe**: một câu nhạc là kết hay mở tuỳ vào chỗ nó đứng trong dòng chuyển động. Cách nhìn này giải thích những hiện tượng mà hai sách kia chỉ ghi nhận như ngoại lệ, chẳng hạn mở đầu bằng công thức kết, kết lừa kéo dài đoạn nhạc, phát triển mở bằng câu kết của trình bày.

### Thuật ngữ khác nhau

- Mazel nhắc rằng phần nối trước kia gọi là "ход". Sposobin dùng связка cho dạng ngắn của связующая часть.
- Mazel dùng "дополнение или заключительное построение"; Sposobin dùng "заключение". Cả hai gọi là coda khi gắn với toàn bộ hình thức.
- Sposobin hẹn phân biệt "середина" và "средняя часть" ở chương sau; Mazel dùng "середина" chung.
- Asafyev dùng initium / movere / terminus, толчок (cú đẩy), разбег (lấy đà), замыкание (chỗ khép), тормоз (phanh), và không dùng "функция части".

## Cách phân tích

1. **Chia hình thức thành các phần lớn** (xem [[hinh-thuc-nga-phan-doan-cau-truc]]), rồi với mỗi phần hỏi: nó là trình bày, nối, đoạn giữa, tái hiện, mở đầu hay kết?
2. **Kiểm bằng dấu hiệu kiểu trình bày** theo Sposobin: chủ đề (một hay vài yếu tố, dài hay ngắn), giọng (liền một giọng hay nhiều giọng phụ, có âm nền không, âm nền trên chủ âm hay át âm), cấu trúc (vuông hay vụn). Nhớ rằng dấu hiệu cấu trúc kém tin cậy nhất.
3. **Nếu chức năng và kiểu trình bày không khớp**, đối chiếu với các trường hợp của §18 (trình bày có pha đoạn giữa, tái hiện có phát triển, coda có nét phát triển).
4. **Tách chức năng lôgic và chức năng cấu trúc** như Mazel: cấu trúc này đứng ở vị trí tái hiện, nhưng về lôgic nó hoàn tất hay còn phát triển? Có kiêm nhiệm không (tái hiện + predikt, tái hiện + coda)? Chức năng có đổi dọc chiều dài (như phần nối sonata) không?
5. **Tìm các cú đẩy và chỗ khép** theo Asafyev: âm, liên kết âm và phần mở đầu nào đưa tai vào giọng? Ở đâu có "lấy đà", âm nền, ngữ điệu "rung lắc"? Kết nào bị lệch (kết lừa) để kéo dài chuyển động?
6. **Tìm chỗ hoán đổi t = i**: câu kết nào được dùng lại làm khởi đầu (đặc biệt ở đầu phát triển sonata)?
7. **Viết sơ đồ** hai tầng: tầng chức năng (Tr – N – Gi – TH – K) và tầng i : m : t, đối chiếu chỗ trùng, chỗ lệch.

## Bài tập

1. Beethoven, Giao hưởng số 1, chương I (ví dụ của cả Sposobin §18 và Asafyev Q1 ch. IV). (a) Xác định kiểu trình bày của phần mở đầu chậm và phân tích nó như một cú đẩy theo Asafyev. (b) Ô nhịp 21–40: chỉ ra chỗ chuyển từ kiểu kết sang kiểu đoạn giữa trong phần nối. (c) Ô nhịp 166–193: những yếu tố nào của kiểu đoạn giữa có mặt trong tái hiện?
2. Tchaikovsky, "Tháng Sáu" (*Bốn mùa* op. 37): so sánh ô nhịp 21–30 (tái hiện kiểu trình bày thuần, theo Sposobin §18) với phần đầu.
3. Beethoven, Sonata op. 53 (*Waldstein*), chương I, 60 ô nhịp cuối: đánh dấu chỗ nào mang kiểu đoạn giữa – phát triển, chỗ nào là kiểu kết thực sự.
4. Chopin, *Prélude* Si giáng trưởng op. 28 №21, và Schumann, "Warum?" (*Fantasiestücke* op. 12): tìm chỗ tái hiện kiêm chức năng predikt (Chopin) và chức năng coda (Schumann) như Mazel mô tả.
5. Glinka, overture *Ruslan và Lyudmila*: bốn hợp âm đầu (I – IV – V – I) là kết hay cú đẩy? Giải thích theo Asafyev.
6. Mozart, Quartet số 9 (hoặc Beethoven, Sonata cho violon op. 23): tìm câu kết của trình bày được dùng lại ở đầu phát triển; ghi lại chỗ t = i.
7. Từ danh sách "Tư liệu để phân tích" cuối các chương của Sposobin, chọn một sonata của Haydn hoặc Mozart. Viết sơ đồ chức năng cho chương I, đánh dấu mọi predikt và mọi bổ sung kết.

## Liên kết

- Bài trước: [[hinh-thuc-nga-phan-doan-cau-truc]] · bài sau: [[hinh-thuc-nga-nguyen-tac-phat-trien]] · lộ trình: [[hinh-thuc-nga-lo-trinh]]
- Áp dụng vào các hình thức: [[hinh-thuc-nga-doan-nhac]], [[hinh-thuc-nga-hinh-thuc-don]], [[hinh-thuc-nga-sonata]], [[hinh-thuc-nga-rondo]]
- Thư viện chung: [[chuc-nang-hinh-thuc]], [[cau-ket]], [[hinh-thuc-sonata]]
- Bài tóm theo từng sách: [[sposobin-dan-nhap-chuc-nang-va-nguyen-tac]], [[mazel-cau-truc-cau-doan-va-chuc-nang]], [[asafyev-i-m-t-va-cac-yeu-to]], [[asafyev-qua-trinh-va-ket-tinh]]
`,
  },
  {
    slug: 'hinh-thuc-nga-nguyen-tac-phat-trien',
    title: 'Nguyên tắc phát triển và nguyên tắc tạo hình thức',
    category: 'form',
    aliases: [
      'nguyên tắc phát triển',
      'принципы развития',
      'lặp lại',
      'lặp lại biến đổi',
      'phát triển',
      'tương phản dẫn xuất',
      'производный контраст',
      'tương phản đối chiếu',
      'контраст сопоставления',
      'тематическая работа',
      'thủ pháp biến đổi chủ đề',
      'đồng nhất và tương phản',
      'тождество и контраст',
      'свободное развертывание',
      'репризность',
      'quan hệ giữa các hình thức',
    ],
    summary:
      'Hình thức là một quá trình, nên điều cốt lõi là các nguyên tắc phát triển: lặp lại, lặp lại biến đổi, phát triển, tương phản dẫn xuất, tương phản đối chiếu (Sposobin §12–17), cùng các thủ pháp biến đổi chủ đề (§19). Mazel nêu sáu nguyên tắc (lặp lại, biến tấu, phát triển, đối chiếu, triển khai tự do, tái hiện) và vai trò của hoà âm, kế hoạch giọng. Asafyev quy mọi hình thức về hai nguyên tắc đồng nhất và tương phản. Bài kết bằng chuỗi quan hệ lôgic giữa các hình thức (Sposobin §145).',
    refs: RU_FORM_REFS,
    body: `
## Dẫn nhập

Sposobin mở §12 bằng một câu ngắn mà ba cuốn sách đều chia sẻ: "Hình thức âm nhạc, vì triển khai trong thời gian, là một **quá trình**, tức là sự **phát triển**. Do đó các nguyên tắc cơ bản của việc phát triển chất liệu âm nhạc có tầm quan trọng đặc biệt" *(Sposobin, §12)*. Mazel nói gần như thế: hình thức của mọi tác phẩm "một là một quá trình phát triển nào đó, hai là kết quả trọn vẹn của quá trình ấy", và cả hai mặt đều quan trọng *(Mazel, ch. V §3)*. Asafyev đặt chính ý ấy làm tên sách: *Hình thức âm nhạc như một quá trình*.

Bài trước bàn **mỗi phần làm gì** (chức năng). Bài này bàn **chất liệu được đưa đi tiếp bằng cách nào**: lặp lại nguyên dạng, biến đổi, tách ra từng mảnh, sinh ra cái mới, hay đặt cái mới hẳn bên cạnh. Ba sách có ba hệ thống nguyên tắc khác nhau về số lượng nhưng gần nhau về thực chất. Cuối bài là chuỗi "suy ra" các hình thức từ nhau mà Sposobin dựng ở §145, một tấm bản đồ cho cả bộ bài.

## 1. Năm nguyên tắc của Sposobin

### Hệ thống chung

Sposobin nêu **năm** nguyên tắc phát triển và xếp chúng thành một hệ thống (trong sách là một sơ đồ; bản OCR chỉ đọc được hai tên đầu, thứ tự đầy đủ lấy theo các mục §13–17) *(Sposobin, §12)*:

1. lặp lại (повторение);
2. lặp lại biến đổi (измененное повторение);
3. phát triển (разработка);
4. tương phản dẫn xuất (производный контраст);
5. tương phản đối chiếu (контраст сопоставления).

Thứ tự đi từ giống nhất đến khác nhất. Ông ghi ngay: hệ thống "hơi quy ước", vì những thay đổi đưa vào chất liệu cũ có thể dẫn tới một tương phản mạnh hơn cả việc đưa chất liệu mới vào.

::form Lặp_lại Lặp_lại_biến_đổi Phát_triển Tương_phản_dẫn_xuất Tương_phản_đối_chiếu | Năm nguyên tắc phát triển của Sposobin, từ đồng nhất đến khác biệt

### Nguyên tắc thứ nhất: lặp lại

"Lặp lại đơn giản là nguyên tắc phát triển sơ đẳng nhất" *(Sposobin, §13)*. Ở đây hiểu là lặp **nguyên văn**, và điều đặc biệt quan trọng, **với cùng một kết**.

Trong khí nhạc, lặp lại đơn giản liền nhau nhanh chóng thôi được cảm nhận là phát triển, nên phần lớn chỉ dùng **một lần** (ví dụ trong sách: Beethoven, Sonata op. 31 №3). Sposobin đưa ra quy tắc tính phần khi phân tích, minh hoạ bằng Scherzo Giao hưởng số 3 của Schumann:

- lặp liền những yếu tố nhỏ (khoảng đến hai – ba ô nhịp) được **tính** là phần riêng (2 + 2...);
- lặp liền một cấu trúc lớn hơn, tương đối trọn vẹn, hay cả một phần lớn của hình thức, khi phân tích phần lớn **không tính**: hai đoạn giống nhau coi là một. Điều này áp dụng cả cho vô số tác phẩm thanh nhạc mà cùng một nhạc lặp nhiều lần với lời khác nhau;
- lặp lại một phần **sau một âm nhạc khác** có chức năng độc lập là **tái hiện** và là biểu hiện của một nguyên tắc tạo hình thức cơ bản (a + b + a, a + b + a + c + a...). Khi phân tích, lặp lại kiểu tái hiện **luôn tính** là phần riêng.

Mazel nêu cùng quy tắc: khi xác định kiểu hình thức, việc lặp một lần (nguyên dạng hay biến đổi) một phần không nhỏ hơn đoạn nhạc, ngay sau khi trình bày phần ấy, thường không được tính *(Mazel, ch. V §3; phần OCR chỗ này bị đứt, chỉ đọc được ý chính)*.

### Nguyên tắc thứ hai: lặp lại biến đổi (biến tấu)

Lặp lại biến đổi, thường gọi là **biến tấu** (варьирование), phức tạp hơn; mức phức tạp tuỳ độ sâu của thay đổi *(Sposobin, §14)*. Các quy tắc tính phần:

- biến tấu có thể **thay** lặp lại đơn giản mà giữ độ dài và kết; khi ấy biến tấu một yếu tố ngắn (khoảng đến ba ô nhịp) được tính là phần riêng (a + a₁, 1 + 1 = 2 ô nhịp...);
- lặp biến đổi **một lần** một cấu trúc lớn hơn mà không đổi độ dài và kết thì khi phân tích không tính;
- **tái hiện biến tấu**, với bất kỳ thay đổi nào, luôn tính là phần riêng.

Trong các trường hợp ấy, biến tấu là nguyên tắc **bổ trợ**. Nhưng nếu lặp liền nhiều lần, mỗi lần một thay đổi mới (a + a₁ + a₂ + a₃...), thì biến tấu thành nguyên tắc **tạo hình thức chính**, và mỗi phần đều được tính.

Sposobin thêm một quy tắc quan trọng: lặp liền **trên hoà âm khác, ở cao độ khác** (đặc biệt là mô tiến), **ở bè khác** (mô phỏng) hay **với kết khác** thì "luôn luôn (trừ rất hiếm ngoại lệ) cho một yếu tố mới của hình thức" và được tính như vậy. Ví dụ: phần mở đầu bất kỳ fugue nào. Chú thích nêu một ngoại lệ: hành khúc tang lễ trong Sonata op. 26 của Beethoven. Ông còn gọi tên kiểu **mô tiến cách quãng** (секвенция на расстоянии): các khâu mô tiến bị ngăn bởi những yếu tố khác không tham gia mô tiến (Prokofiev, *Rigaudon* op. 12 №3).

### Nguyên tắc thứ ba: phát triển

"Phát triển là việc đưa ra những hạt nhỏ của chủ đề (hay các chủ đề) đã được trình bày trọn trước đó, hoặc thay đổi đáng kể bộ khung hoà âm, hoặc cả hai" *(Sposobin, §15)*. Thay đổi do phát triển sâu hơn biến tấu, vì **cấu trúc** của chủ đề bị thay đổi: thay vì một chủ đề tương đối trọn và dài, chỉ những phần của nó được trình bày.

Trong phát triển có thể dùng lặp các phần chủ đề ở cùng cao độ (đơn giản hay biến đổi), ở cao độ mới (trên hoà âm khác, giọng khác), ở các bè khác nhau. Những yếu tố trước vang riêng có thể **kết hợp**, nối tiếp hay đồng thời; ví dụ trong sách là các chủ đề chương I Quartet số 2 của Borodin. Vào các phần chủ đề cũ có thể **gắn thêm yếu tố mới**, nối tiếp (Beethoven, Sonata op. 14 №1, chương I) hay đồng thời (Beethoven, Giao hưởng số 2, chương I, kèm phép tăng trường độ).

### Nguyên tắc thứ tư: tương phản dẫn xuất

Thay đổi đưa vào chủ đề khi chế biến có thể lớn đến mức dẫn tới **tương phản dẫn xuất**, tức là biến chủ đề gốc thành **chủ đề mới** *(Sposobin, §16)*. Tương phản giữa nguồn và chủ đề mới có thể vừa phải (ví dụ trong sách: một sonata op. 2 của Beethoven, OCR ghi số không rõ; Giao hưởng số 3 *Eroica*, chương I), cũng có thể rất lớn.

Chú thích của Sposobin cho thấy ông tự ý thức về tính quy ước của hệ thống: khái niệm tương phản dẫn xuất có thể hiểu rộng hơn và áp dụng cả cho biến tấu và phát triển, vì chúng cũng ít nhiều soi sáng chất liệu gốc dưới ánh sáng mới. "Phân loại các hiện tượng nghệ thuật thường quy ước ở một mức nào đó."

### Nguyên tắc thứ năm: tương phản đối chiếu

"Tương phản đối chiếu hình thành khi đưa vào một chủ đề mới, đặt đối diện với chủ đề (các chủ đề) đã trình bày, và cùng nó tạo nên một thống nhất nghệ thuật, dù khác nhau, đôi khi rất nhiều" *(Sposobin, §17)*. Mâu thuẫn giữa các chủ đề có thể được nhấn bằng việc **không có** chỗ nối chuyển tiếp (như một bước nhảy), hoặc làm dịu bằng chuyển tiếp dần (sự liền mạch).

Ông đề nghị hai thuật ngữ: khi các chủ đề không khác nhau nhiều (đặc biệt khi cùng tempo), tương phản là **một bình diện** (одноплановый); khi khác nhau nhiều (đặc biệt khi đổi tempo), là **nhiều bình diện** (разноплановый).

### Nguyên tắc và chức năng

Như đã nói ở bài trước, Sposobin nhấn mạnh rằng các nguyên tắc phát triển "có ý nghĩa phổ quát và được dùng ngoài sự phụ thuộc trực tiếp vào chức năng của cấu trúc". Chỉ phát triển là thường gắn nhất với vị trí ở giữa và kiểu trình bày đoạn giữa *(Sposobin, §18)*. Tức là có thể có biến tấu trong trình bày, tương phản dẫn xuất trong phần nối, phát triển trong tái hiện hay coda.

## 2. Các thủ pháp biến đổi chủ đề (công việc chủ đề)

Để phát triển chủ đề ngay trong lần trình bày đầu, để lặp nó có biến đổi, để phát triển, và cuối cùng để rút ra chủ đề mới, có một loạt thủ pháp biến đổi. Sposobin gọi tổng thể chúng là **công việc chủ đề** (тематическая работа), vì chúng nhằm phát triển và chế biến những yếu tố có ý nghĩa chủ đề *(Sposobin, §19)*. Phần lớn thủ pháp áp dụng cho những cấu trúc giai điệu – chủ đề tương đối ngắn và đặc trưng, vì chúng dễ được tai nhận ra hơn khi bị biến đổi. Bất kỳ yếu tố nào cũng có thể bị biến đổi, ngay sau lần trình bày đầu hay muộn hơn.

Bảy thủ pháp:

| Thủ pháp | Nội dung | Ví dụ trong sách |
|---|---|---|
| a) Trang trí giai điệu | thêm âm ngoài hợp âm lân cận, thêm âm hợp âm mới với các âm bao quanh; có thể thành coloratura rộng | Mozart, Sonata số 12; Chopin, *Nocturne* op. 9 |
| b) Giãn hoặc nén quãng | thay quãng cũ bằng quãng rộng hơn hay hẹp hơn | Tchaikovsky, *Scherzo humoristique*; Rachmaninoff, Concerto piano số 3 |
| c) Đảo | cho các quãng hướng ngược lại; thường không chính xác, kết hợp với giãn hay nén | Mozart, Sonata số 4, chương II; Beethoven, Giao hưởng số 5, chương I |
| d) Tăng trường độ | thay trường độ bằng trường độ lớn hơn theo cùng một tỷ lệ (gấp đôi, gấp bốn...); thường không hoàn toàn chính xác | Borodin, Giao hưởng số 2, chương I; Liszt, Sonata Si thứ |
| e) Giảm trường độ | thay trường độ bằng trường độ nhỏ hơn theo cùng tỷ lệ; cũng thường gần đúng | Tchaikovsky, Giao hưởng số 1, chương IV |
| f) Chuyển động ngược (возвратное, ракоходное, "kiểu cua") | đưa cấu trúc từ cuối về đầu; dùng hiếm vì khó nhận ra bằng tai | Schumann, Biến tấu *Abegg* op. 1; Borodin, *Hoàng tử Igor* |
| g) Per arsin et thesin | dịch cấu trúc sang các phách khác của ô nhịp | — |

Có thể kết hợp các thủ pháp: tăng trường độ với đảo, giảm trường độ với đảo... nhưng các kết hợp này tương đối hiếm. Sposobin cho rằng **quan trọng hơn** là áp dụng một thủ pháp chính chỉ cho **một phần** của cấu trúc: chẳng hạn giãn, nén hay đảo một hai quãng *(Sposobin, §19)*. Về các thủ pháp này trong nhạc nói chung, xem thêm [[bien-doi-chu-de]] và [[ly-thuyet-chu-de]].

## 3. Sáu nguyên tắc của Mazel

### Danh sách

Mazel nêu "những nguyên tắc phát triển và tạo hình thức chủ yếu, quan trọng nhất về thực hành": **1) lặp lại** (повторность), **2) biến tấu** (вариационность), **3) phát triển** (разработка), **4) đối chiếu** những ý nhạc khác nhau (trong đó có tương phản), **5) triển khai tự do** (свободное развертывание), **6) tái hiện** (репризность) *(Mazel, ch. V §3)*.

So với Sposobin: Mazel gộp hai loại tương phản của Sposobin vào "đối chiếu" (và bàn tương phản dẫn xuất như một trường hợp của nó). Ông thêm "triển khai tự do", và đưa **tái hiện** vào danh sách nguyên tắc; Sposobin thì gọi tái hiện là "nguyên tắc tạo hình thức" ở §6 nhưng không đặt nó vào năm nguyên tắc phát triển.

### Lặp lại và biến tấu

Về lặp lại và biến tấu, Mazel dẫn lại chương IV: hai kiểu biến đổi (tính biến tấu và tính dị bản), các cấu trúc chu kỳ (xem [[hinh-thuc-nga-phan-doan-cau-truc]]).

### Phát triển khác biến tấu ở đâu

Mazel đưa ra một tiêu chí rõ hơn Sposobin. Dịch sát: "**biến tấu** giả định việc tái tạo (có biến đổi) **toàn bộ cấu trúc** của chỉnh thể được biến tấu (chủ đề, motif); chẳng hạn một biến tấu của chủ đề viết ở hình thức đoạn nhạc thì thường cũng là một đoạn nhạc. Còn **phát triển** như một nguyên tắc trước hết giả định việc **tách ra** từng hạt, từng yếu tố của chỉnh thể được phát triển (chủ đề) và phát triển độc lập những hạt ấy, trong quá trình đó chúng có thể đi vào đủ loại kết hợp mới" *(Mazel, ch. V §3)*.

### Đối chiếu và các loại tương phản

Nguyên tắc đối chiếu: cũng như sau một motif có thể không phải lặp biến đổi nó mà là một motif khác, mới, thì sau một chủ đề hay một phần có thể là chủ đề mới, phần mới, đặt cạnh phần trước. Trio của hình thức ba đoạn phức là chất liệu mới so với phần đầu; phát triển của hình thức ba đoạn phức dựa trên đối chiếu phần đầu với trio (và việc phần đầu trở lại) *(Mazel, ch. V §3)*.

Mazel bàn tương phản kỹ hơn Sposobin:

- Tương phản có ý nghĩa lớn, cả về giao tiếp lẫn nội dung; thiếu nó thì hầu như không thể có hình thức lớn.
- Có cả tương phản **đồng thời**: giữa các bè, nhóm bè, giữa những thuộc tính bên trong của một hình tượng ("tương phản đồng thời" theo cách gọi của T. N. Livanova).
- Theo nghĩa rộng, đối chiếu tương phản là một trong những yếu tố phát triển quan trọng nhất. Nhưng theo nghĩa hẹp, nó **khác** với phát triển thực sự và đôi khi đối lập với nó. Ví dụ: người ta phân biệt hình thức ba đoạn có đoạn giữa kiểu phát triển với hình thức ba đoạn có đoạn giữa chứa chủ đề mới, tương phản.
- Đối chiếu các chủ đề khác nhau không phải lúc nào cũng thể hiện tương phản gay gắt. Các chủ đề có thể **bổ sung** cho nhau, thể hiện những mặt khác nhau của một cảm xúc, một hình tượng. Khi ấy người ta nói về **tương phản bổ sung** hay **tương phản làm nổi**.
- Hai chủ đề tương phản có thể đặt **liền** nhau, hoặc nối bằng một phần chuyển tiếp. Khi chủ đề tương phản mới sinh ra từ việc chế biến motif của chủ đề trước, tương phản được gọi là **dẫn xuất**; Mazel ghi nó có vai trò lớn trong nhiều sonata (OCR chỗ này bị đứt).

### Triển khai tự do

Đây là nguyên tắc riêng của Mazel. Bản OCR đoạn này hỏng nhiều, chỉ đọc được ý chính: triển khai tự do là sự phát triển **không có** tính lặp lại tiết tấu rõ rệt ở quy mô đáng kể, **không có** đối chiếu tương phản, **không có** thủ pháp phát triển, nhưng **giữ** họ hàng giữa những khoảnh khắc kề nhau và sự thống nhất chung. Nguyên tắc này gắn chặt với **tính dị bản tự do** và giữ vai trò (OCR mất chữ, có lẽ là "quan trọng") trong **bài hát kéo dài Nga** (протяжная песня). Ví dụ trong sách là hai bài dân ca Nga, trong đó có bài "Горы" (tuyển của Lopatin và Prokunin) *(Mazel, ch. V §3)*.

### Tái hiện

Tái hiện là một dạng lặp lại (nguyên dạng hay biến đổi) đặc biệt: sự trở về **khép lại** của cấu trúc (phần) đầu sau một cái mới. Mazel ghi nó giữ vai trò (OCR mất chữ) trong hầu hết các hình thức âm nhạc, là sự khẳng định ý chính của tác phẩm sau đối chiếu tương phản hay sau phát triển. Đồng thời tái hiện giúp hình thức trọn vẹn, hoàn tất và thanh nhã *(Mazel, ch. V §3; OCR đoạn này hỏng nhiều)*.

### Vai trò của hoà âm và kế hoạch giọng

Mazel nhấn một điều mà danh sách nguyên tắc của Sposobin không nêu thành mục riêng: các nguyên tắc vừa kể chủ yếu dựa trên quan hệ giữa motif và chủ đề, nhưng "vai trò to lớn trong phát triển và tạo hình thức thuộc về **các quan hệ hoà âm và giọng**" *(Mazel, ch. V §3)*.

Một mặt, chúng **đi kèm** các quan hệ khác:

- tương phản hai chủ đề thường được bổ sung bằng việc trình bày chúng ở hai giọng khác nhau;
- tái hiện chủ đề chính thường đi cùng sự trở về giọng chính;
- chia nhỏ motif, sự "dồn hơi thở" (như trong chia nhỏ có khép) thường đi cùng đổi hoà âm thường xuyên hơn;
- sự tăng tiến, chuyển động tới cao trào thường đi cùng ưu thế của không ổn định giọng – hoà âm.

Mặt khác, chúng có ý nghĩa **hoàn toàn độc lập**:

- **tương tác hoà âm ở khoảng cách** gắn hai câu của đoạn nhạc thành một;
- **tương tác giọng ở khoảng cách**: trình bày sonata kết ở giọng át thì tái hiện kết tương ứng ở giọng chính;
- **kế hoạch giọng** quan trọng cho sự thống nhất và lôgic của sonata. Nó đi từ giọng chính sang giọng át trong trình bày, thường chạm vùng hạ át trong phát triển, và khẳng định giọng chính trong tái hiện (T – D – S – T). Hai chủ đề trình bày ở hai giọng khác nhau và **xích lại gần về giọng** (cùng một giọng) trong tái hiện;
- đặt liền những giọng không gần nhau nhiều khi được nghe như một **xung đột** cần được giải quyết bằng một giọng ít nhiều gần cả hai, như hợp nhất chúng quanh mình;
- hoà âm có thể tự tạo ra **cấu trúc tổng hợp** bằng phương tiện thuần hoà âm khi giai điệu không có cấu trúc ấy (kế hoạch hoà âm *Prélude* La trưởng của Chopin);
- trong phần mở đầu, hoà âm có thể **báo trước** kế hoạch giọng của phần sau (*Fantaisie* Fa thứ của Chopin), trong phần kết có thể **tóm tắt** sự phát triển giọng trước đó (kết cuối *Étude* Fa trưởng op. 10 №8 của Chopin đặt cạnh nhau, một cách cô đọng, giọng đoạn giữa Rê thứ và giọng hai đoạn ngoài Fa trưởng).

### Nguyên tắc và hình thức: không trùng khớp hoàn toàn

Các hình thức dựa trên những nguyên tắc nhất định. Mazel dẫn ba ví dụ *(Mazel, ch. V §3)*:

- hình thức ba đoạn có đoạn giữa chứa chất liệu mới dựa trên **đối chiếu tương phản** và **tái hiện**;
- rondo dùng chính những nguyên tắc ấy, nhưng **nhiều lần**;
- hình thức sonata dựa trên **đối chiếu** (hai chủ đề của trình bày), **phát triển** và **tái hiện**.

Nhưng ông cảnh báo: trong từng trường hợp cụ thể, hình thức và nguyên tắc điển hình của nó không phải lúc nào cũng khớp. Trong một số phát triển sonata, phương pháp chủ đạo là biến tấu chứ không phải phát triển. Ngược lại, trong nhiều hình thức biến tấu, đối chiếu tương phản và phát triển giữ vai trò lớn.

### Hệ thống hoá hình thức

Đây là chỗ Mazel rút ra hệ quả phương pháp luận. Ông viết: hình thức âm nhạc là những **kiểu cấu trúc hình thành trong lịch sử**, những kế hoạch bố cục điển hình. Chúng hình thành trong thực tiễn chơi nhạc, gắn với thuộc tính của thể loại và phong cách, với những quan hệ hình tượng và nguyên tắc phát triển điển hình, với sự phát triển chung của tư duy, cảm thụ và phương tiện âm nhạc. Những cấu trúc bền vững nhất là những cấu trúc linh hoạt, dung chứa nhiều nhất. Chúng đã qua một sự "chọn lọc xã hội", như nhạc cụ hiện đại đã đẩy lùi nhiều nhạc cụ cổ. Chú thích của Mazel ghi phép so sánh hình thức với nhạc cụ có trong sách của Asafyev.

Vì vậy **không thể** hệ thống hoá hình thức chỉ theo một yếu tố: không theo thể loại (một hình thức dùng cho nhiều thể loại và ngược lại), không chỉ theo nguyên tắc phát triển hay quan hệ hình tượng, không theo số chủ đề. Phải dựa trên **quy luật nội tại của chính hình thức**, tức chủ yếu theo dấu hiệu cấu trúc đặc thù *(Mazel, ch. V §3)*:

- các hình thức chủ điệu nhỏ (từ đoạn nhạc đến ba đoạn phức) được hệ thống theo **mức độ phức tạp cấu trúc**, lấy **đoạn nhạc làm đơn vị**;
- các hình thức còn lại (biến tấu, rondo, sonata...) theo **quan hệ chủ đề và giọng**, cùng với cấu trúc;
- trong phân loại chi tiết, ở hình thức nhỏ mới tính thêm quan hệ chủ đề và nguyên tắc phát triển; ở hình thức lớn mới tính mức phức tạp của các phần, nguyên tắc phát triển, đôi khi cả dấu hiệu thể loại và phong cách.

Mazel cũng tranh luận nhẹ với Catoire: không nên coi các kiểu hình thức chỉ là "những sơ đồ mà tác phẩm âm nhạc tiến gần đến ít nhiều nhưng hiếm khi trùng khớp hoàn toàn". Theo ông, tuyệt đại đa số tác phẩm khí nhạc có giọng **thuộc rõ** một kiểu hình thức quy chuẩn, và cần phân biệt **kiểu hình thức** (kế hoạch bố cục điển hình) với **đặc điểm của hình thức cá thể** (chẳng hạn tỷ lệ riêng) của tác phẩm *(Mazel, ch. V §3)*. Về hai nghĩa của chữ "hình thức", xem [[hinh-thuc-nga-khai-niem]].

## 4. Asafyev: đồng nhất và tương phản

### Hai nguyên tắc từ bản chất của sự cảm thụ

Asafyev không đếm năm hay sáu nguyên tắc. Ông quy mọi thứ về **hai**. Lập luận bắt đầu từ trí nhớ: vì cảm thụ âm nhạc buộc phải giữ trong ý thức một chất liệu âm thanh trôi chảy, nên ở nền của mọi quá trình tạo hình và mọi hình thức – sơ đồ đã kết tinh phải có hai nguyên tắc *(Asafyev, Q1 ch. VII)*:

- **nguyên tắc đồng nhất** (принцип тождества): nối tiếp hay trở về theo chu kỳ những kết hợp giống nhau, thậm chí hoàn toàn như nhau;
- **nguyên tắc tương phản** (принцип контраста): nối tiếp những ngữ điệu tự đặt mình đối lập với tổ hợp âm thanh trước đó.

Chú thích của ông: nếu đi ngược từ hoạt động cảm thụ đến hình thức, thì đó là **nhận ra sự lặp lại** và **phân biệt cái không giống**. Ở chương II, ông dùng hai cụm tương ứng: "nhận ra sự giống nhau" (узнавание сходства) và "xác nhận sự khác nhau" (констатирование различия).

Hai nguyên tắc **quy định lẫn nhau**: "nguyên tắc này, với sự tất yếu của lôgic biện chứng, kéo theo nguyên tắc kia". Ưu thế của một nguyên tắc tạo ra một loại hình thức, nhưng không xoá tác động (dù ẩn) của nguyên tắc kia *(Asafyev, Q1 ch. VII)*. Từ đó ông chia mọi hình thức thành hai loại:

- loại dựa chủ yếu trên **đồng nhất**: biến tấu, canon, fugue, rondo (tên chương VII);
- loại dựa chủ yếu trên **tương phản**: sonata, giao hưởng (chương VIII, X).

Asafyev cảnh báo: không được coi đồng nhất là thứ "nguyên sơ" so với tương phản. "Khác biệt nằm ở **mức độ**, không ở **bản chất**." Ông so 33 biến tấu Diabelli của Beethoven với một hình thức ba đoạn vũ điệu đơn giản nhất (hai giai điệu, trio, rồi lại hai giai điệu đầu): sự phức tạp thuộc về biến tấu. Ở đó nguyên tắc đồng nhất, không ngừng tác động, tự sinh ra những tân tạo táo bạo ngày càng tương phản với chủ đề. Còn trong vũ điệu đơn giản, tương phản tuy chiếm ưu thế (các giai điệu khác nhau) lại được cảm nhận yếu hơn *(Asafyev, Q1 ch. VII)*.

### Lặp lại: nuôi trí nhớ, nhưng dễ thành quán tính

Chương II bàn đồng nhất kỹ nhất. Lặp lại là "phương tiện đơn giản nhất và đồng thời dễ tiếp cận nhất để tiếp tục một tương quan âm thanh đã tìm ra", và là phương tiện "đáng tin cậy nhất" cho trí nhớ *(Asafyev, Q1 ch. II)*. Các kiểu lặp đa dạng, từ tái tạo nguyên văn đến đối chiếu tương phản trên cùng một chất liệu. Nhưng ông nhấn: lặp lại **không phải chất kích thích chuyển động** mà chủ yếu là phương tiện **củng cố trí nhớ**. Lặp nguyên văn chỉ được cảm nhận là chuyển động chừng nào còn hứng thú so sánh, phân biệt, ghi nhớ; khi hứng thú ấy cạn, lặp lại trở nên khó chịu.

Chỉ cần một khác biệt nhỏ, như lặp ở quãng tám hay đổi âm sắc, là đã có kích thích so sánh. Ví dụ trong sách: các quãng tám lặp lại của bassoon và timpani trong finale Giao hưởng số 8 của Beethoven, được nghe như yếu tố tổ chức chuyển động. Theo Asafyev, từ nhu cầu "lĩnh hội hai lần" mà có những lặp lại thường thấy trong nhạc cổ điển: lặp mỗi đoạn của chủ đề trước các biến tấu và, rõ hơn nữa, lặp cả trình bày trong allegro sonata.

Ông còn phân biệt mức độ khác nhau của lặp lại ở giọng khác *(Asafyev, Q1 ch. II)*:

- lặp nguyên văn ở giọng gần là dạng lặp không đồng nhất đơn giản nhất; giọng càng xa, tương phản màu sắc giọng càng sắc, tai càng có cớ "phán đoán so sánh";
- nhưng trong giao hưởng, lặp những episode lớn trong phát triển song song ở các giọng khác nhau (thường quan hệ quãng ba) không phải lúc nào cũng tạo độ căng, mà còn **giảm** kịch tính. Ví dụ ông nêu: Schumann, chương I Giao hưởng số 4 và số 1; Beethoven, chương I Giao hưởng số 6;
- ngược lại, với các nhà cổ điển, lặp cùng một nhạc ở **điệu thức khác** (trưởng – thứ) được nghe như **tương phản rõ rệt**, như biến tấu thứ ở giữa các biến tấu trưởng.

### Mô tiến: chuyển động theo quán tính

Asafyev có một phê phán sắc về mô tiến mà Sposobin và Mazel không có. Mô tiến là cách tiếp tục âm nhạc từ bất kỳ điểm nào sang bất kỳ điểm nào bằng lặp một đoạn lên hay xuống theo khoảng cách đều. Tai nhận những kích thích gần như đồng nhất, "biện minh" cho những dịch chuyển xa nhất, và tự đi vào chuyển động theo quán tính. "Dùng mô tiến quá mức là biểu hiện của **tư duy lười**" *(Asafyev, Q1 ch. V)*. Chú thích của ông làm dịu bớt: mô tiến có thể là phương tiện biểu cảm và khắc hoạ, như các "tăng tiến" bằng mô tiến đi lên của nhạc kịch và giao hưởng lãng mạn. Nhưng nó không phải kích thích sáng tạo thực sự: "trong mô tiến, chất liệu dịch chuyển từ vùng này sang vùng khác, nhưng không lớn lên và không biến thành gì cả".

Ở chương IX, ông nói lại: khi một mô tiến đã được "lên dây cót", chuyển động thành máy móc; âm nhạc đi "theo đường ít cản trở nhất". Ông nhắc ví dụ dùng mô tiến có lý do: "mô tiến của Tatyana" trong *Eugene Onegin* của Tchaikovsky, mô tiến của Wagner trong *Die Walküre* và *Tristan* *(Asafyev, Q1 ch. IX)*. Ông so mô tiến với mô phỏng: cả hai từng là phát minh có ý nghĩa cách mạng, rồi dần thành thủ pháp máy móc. Nhưng ông cũng thấy việc Bach đặt các mô tiến – interlude giữa những lần đưa chủ đề trong fugue là "hoàn toàn lôgic": nó làm nổi tương phản động lực giữa các ngữ điệu "thực sự" (dux – comes) và chuyển động quán tính nối chúng.

### Biến tấu, canon, fugue

Asafyev phác ba giai đoạn tiến hoá của biến tấu theo mức độ khó nhận ra sự giống nhau *(Asafyev, Q1 ch. II)*:

1. tai chưa rời được nền: bè trầm lặp mãi một chủ đề (ground của Anh; passacaglia, chaconne);
2. giữ nguyên cấu trúc chủ đề, trang trí khi lặp lại (các double của các nhà clavecin Pháp);
3. bộc lộ dần các khả năng của chủ đề, từ trang trí thuần tuý đến phát triển kiểu giao hưởng (từ Handel, Bach đến Mozart, Beethoven và về sau).

Ông dẫn *Goldberg-Variationen* của Bach (khoảng 1742) như đường phân thuỷ giữa biến tấu kiểu canon – đối âm và biến tấu chủ điệu – hoà âm, và finale Giao hưởng số 4 của Brahms (1885) như ví dụ sức sống của kiểu bè trầm cố định. Vì chủ đề luôn là cái đồng nhất, có thể kéo dài biến tấu "vô tận"; ông gọi đó là hình thức **mở** (разомкнутая) *(Asafyev, Q1 ch. II)*.

Mô phỏng thì mạnh hơn lặp lại vì một bè đồng nhất được **chen vào** trước khi bè đầu khép lại. Canon là mô phỏng chính xác khép thành cơ thể độc lập, xây dựng duy lý chặt chẽ. Theo Asafyev, nó là "một cấu tạo tĩnh", đẩy nguyên tắc đồng nhất đến chỗ phủ định ý tưởng phát triển. Fugue thì ngược lại, là hình thành **động**: sự lớn lên của chuyển động từ một tiền đề một chủ đề. Vì vậy chủ đề fugue phải nổi, đàn hồi, chứa sẵn "năng lượng" phát triển. Ông phân tích chủ đề fugue Đô thăng thứ tập I *Bình quân luật* của Bach để chỉ ra chuỗi ngữ điệu không ổn định trong đó *(Asafyev, Q1 ch. II)*. Chi tiết hơn về các hình thức này: [[hinh-thuc-nga-bien-tau]], [[hinh-thuc-nga-phuc-dieu]].

### Tương phản chỉ có nghĩa trên nền đồng nhất

Ở chương IX, Asafyev viết điều có thể coi là trục của cả học thuyết: "Nhịp điệu của sự hình thành âm nhạc thể hiện ở sự **thay phiên những hiện tượng tương phản**. Tính tương phản đẩy chuỗi hình tượng âm thanh đi tới. Nhưng không được quên rằng tính tương phản chỉ được cảm nhận khi có những **yếu tố đồng nhất**, và không có chúng thì nguyên tắc này sẽ biểu hiện một cách vô chính phủ" *(Asafyev, Q1 ch. IX)*.

Ông mô tả quá trình nghe như chuỗi **luận đề – phản đề – tổng hợp**. Mỗi lần đối chiếu một tổ hợp âm với tổ hợp đối lập, lúc đầu nghe như tương phản. Ngay sau đó, khi đã cảm thụ xong, nó trở thành **một thống nhất**, tức một luận đề phức tạp hơn đối với tổ hợp mới được đặt đối diện, và cứ thế. Từ đây ông đi tới cặp khái niệm then chốt: **hình thức đang hình thành** (форма становящаяся) và **hình thức đang kết tinh** (форма кристаллизующаяся). Biện chứng của tuần tự và đồng thời, nhìn từ hình thức, là biện chứng của hình thức – quá trình và hình thức – kết tinh. Xem thêm [[asafyev-qua-trinh-va-ket-tinh]].

### Chuyển động liền và chuyển động "nhảy"

Asafyev phân biệt chuyển động **tuần tự** (đi từ tổ hợp ngữ điệu này sang tổ hợp khác qua những công thức quen, ổn định của hệ thống) và chuyển động **bằng cú đẩy, lược bỏ, đột biến**. Lược bỏ (элизия) là việc bỏ đi hợp âm nối hay hợp âm "giải quyết" trong một chuỗi, hay mọi bước nhảy giọng gắt *(Asafyev, Q1 ch. IX)*. Ông cũng nhấn quy luật thay phiên giữa chuyển động **nhảy** (không lấp) và chuyển động **liền bậc** (đã lấp). Với ông, cùng với sự thay phiên co và giãn, đây là một trong những quy luật của sự hình thành âm nhạc (đã nêu ở chương II và IX). Đây là cách Asafyev nói về "phát triển" ở tầng vi mô, nơi Sposobin nói về "thủ pháp biến đổi chủ đề".

## 5. Quan hệ lôgic giữa các hình thức (Sposobin §145)

Ở chương XII, Sposobin dựng một chuỗi "suy ra" các hình thức từ nhau. Ông dặn kỹ: vì mọi hình thức đều thể hiện các nguyên tắc tạo hình thức cơ bản, những hình thức phức tạp hơn có thể hình dung như sự phát triển của những hình thức đơn giản nhất. Nhưng cái nhìn so sánh này "có tính **lôgic**, và con đường **lịch sử** của chúng chỉ trùng một phần với nó, thực tế phức tạp và quanh co hơn nhiều" *(Sposobin, §145)*. Chín mắt xích:

1. **Đoạn nhạc hai câu có kết nửa ở giữa** là nguyên mẫu của **hình thức hai đoạn đơn**. Lý do: cả hai đều có hai đoạn, có kết nửa (hay chuyển sang giọng phụ) ở cuối phần một và kết ở giọng chính. Về chủ đề, Sposobin nhắc rằng việc phần hai lặp chất liệu phần một hoàn toàn không bắt buộc với đoạn nhạc, càng không bắt buộc với hình thức hai đoạn ở dạng cổ của chúng (thế kỷ 17 – nửa đầu thế kỷ 18; OCR ghi số thế kỷ nhoè). Chỉ muộn hơn, ở các nhà cổ điển Vienna, sự giống nhau giữa đầu hai câu trong đoạn nhạc và giữa cuối hai đoạn trong hình thức hai đoạn mới thành điển hình.
2. **Hai đoạn đơn có tái hiện** là cơ sở cho **ba đoạn đơn có tái hiện**, nơi đoạn giữa và tái hiện phát triển rộng hơn và tách bạch hơn.
3. **Ba đoạn đơn có đoạn giữa tương phản** là nguyên mẫu của **ba đoạn phức**, nơi do kích thước lớn hơn mà tương phản đối chiếu thường sáng hơn.
4. **Hình thức đơn** là cơ sở của **biến tấu**, một chuỗi đoạn nhạc, hình thức hai đoạn hay ba đoạn, tuỳ cấu trúc chủ đề.
5. **Rondo** cũng dựa trên hình thức đơn: một chuỗi những hình thức như thế nối bằng các phần chung.
6. Tách riêng **chủ đề thứ hai**, đưa ở cuối phần một hình thức hai đoạn đơn trong giọng phụ và ở cuối phần hai trong giọng chính, dẫn đến **sonata hai đoạn cổ** từ hình thức hai đoạn đơn. Sposobin thêm: sonata trưởng thành mà bỏ phần chính trong tái hiện, về thực chất, cũng gần với kiểu cổ.
7. **Sonata đầy đủ** hình thành, có lẽ, một mặt dưới tác động của sonata hai đoạn cổ: chỉ còn phải đưa tái hiện phần chính vào, mọi yếu tố khác đã ít nhiều có trong dạng cổ, còn tương phản chủ đề giữa phần chính và phần phụ, vốn đã phác ra ở sonata cổ, về sau tăng dần. Mặt khác, sonata đầy đủ là sự phát triển của **ba đoạn đơn một chủ đề**: khác ở chỗ chủ đề mới được tách riêng ở hai đoạn ngoài, giống ở chỗ có tái hiện đầy đủ và phần hai mang tính đoạn giữa.
8. Liên hệ sonata với tính hai đoạn và ba đoạn còn hiện ra cả khi mọi loại hình thức đã định hình:
   - **đoạn nhạc phức có nét sonata**: câu một chuyển sang giọng phụ và có bổ sung dài ở giọng ấy, câu hai có cùng bổ sung chuyển về giọng chính; đường nét giống sonata không có phát triển (ví dụ trong sách: Scriabin, *Poème* op. 32 №1);
   - **ba đoạn đơn có dấu hiệu sonata**: cuối đoạn nhạc đầu chuyển giọng, hay bổ sung dài của nó, hơi khác chủ đề, ở cuối tái hiện được dịch về giọng chính, giống tái hiện phần phụ;
   - **ba đoạn đơn hay phức** mà chất liệu đoạn giữa (ở giọng phụ) được đưa lại trong coda ở giọng chính, như A B A B, giống sonata không có phát triển (ví dụ trong sách: Beethoven, Sonata op. 10 №2, finale; Sonata op. 101, chương I; Tchaikovsky, Quartet Rê trưởng, Andante cantabile; Giao hưởng số 6, finale).
9. **Rondo sonata** kết hợp nét rondo và sonata, và ở mức nào đó cũng gợi ba đoạn phức với hai đoạn ngoài ba đoạn.

Có thể vẽ lại chuỗi này như một cây:

::form Đoạn_nhạc Hai_phần_đơn Ba_phần_đơn Ba_phần_phức | Nhánh "đơn – phức" (§145, mắt xích 1–3)

::form Hai_phần_đơn Sonata_cổ_hai_phần Sonata_đầy_đủ Rondo_sonata | Nhánh sonata (§145, mắt xích 6–9); sonata đầy đủ còn nhận ảnh hưởng của ba đoạn đơn một chủ đề

Mazel không dựng chuỗi tương đương nhưng cũng nói về những hình thức "trung gian, hỗn hợp" và việc các hình thức "liên hệ với nhau", rồi nhắc rằng một số dạng hai đoạn ra đời từ quan hệ lĩnh xướng – điệp khúc, múa đơn – múa chung *(Mazel, ch. V §3)*. Còn Asafyev gợi ý rằng toàn bộ đường đi từ ba đoạn đơn đến sonata là con đường từ ưu thế đồng nhất sang ưu thế tương phản. Ông gắn sonata – giao hưởng với một thế giới quan "phê phán" mới, và đặt nó đối lập với tính một chủ đề của biến tấu, canon, fugue *(Asafyev, Q1 ch. IX)*. Đây là cách diễn giải xã hội học đặc trưng của Asafyev những năm 1930, khác hẳn giọng mô tả của Sposobin.

## Ba sách nói gì — đối chiếu

| Vấn đề | Sposobin | Mazel | Asafyev |
|---|---|---|---|
| Số nguyên tắc | 5: lặp lại, lặp lại biến đổi, phát triển, tương phản dẫn xuất, tương phản đối chiếu | 6: lặp lại, biến tấu, phát triển, đối chiếu, triển khai tự do, tái hiện | 2: đồng nhất và tương phản |
| Tái hiện | "nguyên tắc tạo hình thức quan trọng nhất" (§6), không nằm trong 5 nguyên tắc phát triển | một trong 6 nguyên tắc | một dạng đặc biệt của đồng nhất (trở về nguồn) |
| Phát triển và biến tấu | phát triển thay đổi cấu trúc chủ đề, sâu hơn biến tấu | tiêu chí rõ: biến tấu tái tạo cả cấu trúc, phát triển tách hạt | không đặt ranh giới; nói về "năng lượng" chủ đề |
| Tương phản | dẫn xuất / đối chiếu; một bình diện / nhiều bình diện | dẫn xuất; bổ sung, làm nổi; tương phản đồng thời (Livanova) | chỉ có nghĩa trên nền đồng nhất; luận đề – phản đề – tổng hợp |
| Hoà âm, giọng | rải trong mô tả kiểu trình bày | mục riêng: kế hoạch giọng, tương tác ở khoảng cách | modulation mở rộng khả năng hình thành; lược bỏ giọng |
| Mô tiến | trung tính; "mô tiến cách quãng" | đề cập trong phát triển | phê phán: chuyển động quán tính, "tư duy lười" nếu lạm dụng |
| Quan hệ hình thức | chuỗi lôgic 9 mắt xích (§145), khác với lịch sử | hệ thống hoá theo cấu trúc; hình thức như "nhạc cụ" | hai loại hình thức theo ưu thế đồng nhất hay tương phản |

**Chỗ giống:** cả ba đều xếp các nguyên tắc trên một thang từ **giống** đến **khác**. Cả ba đều coi tái hiện, sự trở về, là trụ cột của thống nhất. Cả ba đều cảnh báo rằng một hình thức cụ thể không bao giờ chỉ dùng một nguyên tắc.

**Chỗ khác:** Sposobin cho một hệ thống phân loại chi tiết, dùng được ngay. Mazel thêm tiêu chí phân biệt chặt hơn (biến tấu khác phát triển), thêm "triển khai tự do" gắn với dân ca Nga và cho hoà âm – giọng một vị trí riêng. Asafyev rút về hai nguyên tắc nhưng nhìn chúng như lực trong quá trình nghe, và có thái độ phê phán với những thủ pháp "máy móc" (mô tiến, canon).

**Thuật ngữ khác nhau:** Sposobin nói "повторение" và "измененное повторение (варьирование)"; Mazel nói "повторность" và "вариационность" (danh từ chỉ tính chất, nguyên tắc). Asafyev nói "тождество" (đồng nhất) thay cho lặp lại theo nghĩa rộng. "Tương phản dẫn xuất" có ở cả Sposobin và Mazel; Asafyev không dùng.

## Cách phân tích

1. **Đánh dấu chất liệu**: ghi chữ cái cho từng chủ đề và từng biến dạng (a, a₁, a₂, b...).
2. **Với mỗi lần chất liệu xuất hiện lại**, hỏi: lặp nguyên văn (cùng kết?), lặp biến đổi (giữ cấu trúc?), phát triển (chỉ còn mảnh, đổi khung hoà âm?), hay sinh ra chủ đề mới (tương phản dẫn xuất)?
3. **Áp quy tắc tính phần** của Sposobin: lặp liền yếu tố ngắn thì tính, lặp liền một lần cấu trúc lớn thì không tính, tái hiện thì luôn tính; lặp ở cao độ, bè hay kết khác thì tính.
4. **Gọi tên thủ pháp biến đổi** (trang trí, giãn/nén quãng, đảo, tăng/giảm trường độ, ngược, per arsin et thesin) và ghi rõ áp dụng cho cả cấu trúc hay chỉ một phần.
5. **Với chủ đề mới**: tương phản một bình diện hay nhiều bình diện? Đặt liền hay có chuyển tiếp? Bổ sung hay đối lập?
6. **Vẽ kế hoạch giọng** song song với kế hoạch chủ đề (Mazel): giọng nào đi cùng tương phản, giọng nào đi cùng tái hiện, chỗ nào có "xung đột" giọng xa được hoà giải?
7. **Kiểm theo Asafyev**: ở đâu chuyển động đi theo quán tính (chuỗi mô tiến), ở đâu có "đột biến"? Tương phản có dựa trên một yếu tố đồng nhất nào không?
8. **Định vị hình thức** trên chuỗi §145: nó gần với nguyên mẫu nào, có nét lai (ba đoạn có dấu hiệu sonata, đoạn nhạc phức có nét sonata) không?

## Bài tập

1. Schumann, Giao hưởng số 3, Scherzo (ví dụ của Sposobin §13): áp quy tắc tính phần cho những lần lặp ở đầu. Lặp nào tính, lặp nào không?
2. Borodin, Quartet số 2, chương I: tìm những chỗ trong phát triển mà hai chủ đề được kết hợp nối tiếp hay đồng thời (Sposobin §15).
3. Beethoven, Sonata op. 14 №1, chương I, và Giao hưởng số 2, chương I: tìm yếu tố mới được gắn vào phần chủ đề cũ, nối tiếp (sonata) và đồng thời (giao hưởng).
4. Beethoven, Giao hưởng số 3 *Eroica*, chương I: ví dụ của Sposobin về tương phản dẫn xuất. Chỉ ra chủ đề gốc và chủ đề dẫn xuất, gọi tên các thủ pháp biến đổi.
5. Tìm ví dụ cho mỗi thủ pháp ở §19 trong các tác phẩm Sposobin dẫn: Beethoven, Giao hưởng số 5, chương I (đảo); Liszt, Sonata Si thứ (tăng trường độ); Tchaikovsky, Giao hưởng số 1, chương IV (giảm trường độ); Schumann, Biến tấu *Abegg* op. 1 (chuyển động ngược).
6. Chopin, *Étude* Fa trưởng op. 10 №8: tìm chỗ kết cuối đặt liền hai giọng Rê thứ và Fa trưởng như Mazel mô tả. Vẽ kế hoạch giọng của cả bài.
7. Theo chuỗi §145, phân tích Beethoven, Sonata op. 10 №2, finale (hoặc Tchaikovsky, Andante cantabile trong Quartet Rê trưởng): ba đoạn (đơn hay phức) với chất liệu đoạn giữa trở lại ở coda trong giọng chính. Vẽ sơ đồ A B A B và so với sonata không có phát triển.
8. Nghe chương I Giao hưởng số 4 và số 1 của Schumann: tìm episode lớn được lặp song song ở giọng khác trong phát triển. Theo Asafyev, nó làm tăng hay giảm kịch tính? Lập luận cho nhận định của mình.

## Liên kết

- Bài trước: [[hinh-thuc-nga-chuc-nang-kieu-trinh-bay]] · tiếp theo: [[hinh-thuc-nga-doan-nhac]] · lộ trình: [[hinh-thuc-nga-lo-trinh]]
- Các hình thức theo chuỗi §145: [[hinh-thuc-nga-hinh-thuc-don]], [[hinh-thuc-nga-ba-phan-phuc]], [[hinh-thuc-nga-bien-tau]], [[hinh-thuc-nga-rondo]], [[hinh-thuc-nga-sonata-co-va-hai-phan-co]], [[hinh-thuc-nga-sonata]], [[hinh-thuc-nga-rondo-sonata]], [[hinh-thuc-nga-hon-hop-va-ghep-tuong-phan]]
- Thư viện chung: [[bien-doi-chu-de]], [[ly-thuyet-chu-de]], [[bien-tau]], [[rondo]], [[hinh-thuc-sonata]], [[fugue]]
- Bài tóm theo từng sách: [[sposobin-dan-nhap-chuc-nang-va-nguyen-tac]], [[sposobin-hinh-thuc-co-chu-ky-va-hon-hop]], [[mazel-cau-truc-cau-doan-va-chuc-nang]], [[asafyev-dong-nhat-va-tuong-phan]], [[asafyev-qua-trinh-va-ket-tinh]]
`,
  },
]
