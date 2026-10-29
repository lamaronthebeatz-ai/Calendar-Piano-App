import type { Article } from '../wiki'
import DATA from './xuong-am.json'

/**
 * Xướng âm cromatic và chuyển giọng — by Lamar: a one-voice sight-singing course on chromaticism and modulation,
 * following the plan and method of A. Agazhanov's Курс сольфеджио, вып. 2 (Moscow, 1973). Every exercise is new:
 * written and checked by scripts/xuongam/gen.py (music/ex/xuong-am.txt, ./xuong-am.json); the prose of the lessons
 * lives in scripts/xuongam/lessons.py, the method here.
 */
type Lesson = { ch: number; n: number; title: string; topics: string[]; text: string; drills: string; melodies: string[] }
const D = DATA as { lessons: Lesson[]; prelude: string[] }

export const XA_HUB = 'xuong-am-cromatic-lo-trinh'
export const XA_PRELUDE = 'xuong-am-cromatic-phan-chuan-bi'
export const xaSlug = (ch: number, n: number) => `xuong-am-cromatic-${ch}-${n}`

const SOURCE: [string, string][] = [
  ['A. Agazhanov, Курс сольфеджио, вып. 2: Хроматизм и модуляция (Moskva: Muzyka, 1973) — trang sách ở thư viện classON', 'http://www.classon.ru/lib/catalog/agazhanov_a/Book/kurs-sol-fedzhio-vypusk-2-hromatizm-i-modulyaciya/'],
  ['Wikipedia tiếng Nga: Хроматическая гамма (quy tắc ghi âm giai cromatic)', 'https://ru.wikipedia.org/wiki/Хроматическая_гамма'],
  ['M. Kharin, Хроматизм и альтерация (quy tắc ghi âm giai cromatic)', 'https://www.kharin.info/music-theory/16-alterations/'],
]

const PLAN = `## Kế hoạch đọc một giai điệu
1. Xác định giọng, nhịp, đặc điểm tiết tấu; chia bài thành câu và tìm ranh giới các câu; xem phách chính đi theo nốt dài hay chia nhỏ.
2. Tìm các nốt tựa của điều thức (bậc I, III, V).
3. Nghe trong đầu rồi hát các bậc của điều thức.
4. Đọc không chỉ câu đầu mà cả các câu sau; hát thử từng câu.
5. Phân tích đường cao độ theo quãng, xác định hướng đi của giai điệu trong mỗi câu.
6. Đọc tên nốt theo tiết tấu (đọc nhịp có tên nốt), rồi gõ tiết tấu.
7. Hình dung và giữ nhịp độ của bài.
8. Xướng âm bằng giọng đẹp, **luôn đánh nhịp**.
9. Hát lại bằng nguyên âm (vocalise).

Làm như vậy cho tới khi bạn tự thao tác được với các hình dung âm nhạc mà không cần từng bước.`

const BUTTONS = `**Các nút dưới mỗi bài:** *♪ Lên dây* phát hợp âm chủ rồi âm chủ của giọng đầu bài (như dùng âm thoa trong lớp); *Nốt đầu* để kiểm tra nốt đầu sau khi bạn đã hát nó; *▶ Nghe* phát cả bài để so sau khi đọc xong; *Đàn* mở bàn phím để dò một cao độ. Đừng bấm *Nghe* trước khi đọc — mục đích là tự nghe trong đầu.`

const hub: Article = {
  slug: XA_HUB,
  title: 'Xướng âm cromatic và chuyển giọng — lộ trình',
  category: 'musicianship',
  aliases: ['xướng âm cromatic', 'xướng âm chuyển giọng', 'giáo trình xướng âm', 'solfège cromatic', 'Agazhanov', 'Агажанов'],
  summary: 'Giáo trình xướng âm một bè bậc cao đẳng – đại học về cromatic và chuyển giọng: 5 chương, 45 bài, 270 giai điệu mới khắc LilyPond, có nút nghe và lên dây — theo kế hoạch và phương pháp giáo trình Agazhanov (Moskva, 1973).',
  refs: SOURCE,
  body: `
Cuốn sách này là giáo trình **xướng âm một bè** cho sinh viên đã đọc vững điều thức diatonic: nó đưa người học qua các nốt biến âm, các nốt cromatic và các kiểu chuyển giọng — từ trưởng hoà thanh tới chuyển giọng trùng âm. Kế hoạch các chương, thứ tự các bài và **phương pháp** đi theo giáo trình xướng âm của Artyom Agazhanov ở Nhạc viện Moskva (tập 2, *Хроматизм и модуляция*, 1973) — tập tiếp theo của tập 1 về diatonic (1965), viết cho học sinh năm cuối trung cấp và sinh viên nhạc viện. **Mọi bài tập và mọi giai điệu ở đây đều mới**, soạn riêng cho cuốn sách này; lời giảng là lời của người biên soạn.

## Mục đích
Xướng âm rèn **thính giác** và sự hiểu biết vững chắc về các hiện tượng âm nhạc mà mọi nghề nhạc đều cần; nó là nền cho hoà âm, phức điệu, hình thức, phối khí — và ngược lại, không có lý thuyết âm nhạc, hoà âm, phân tích thì học xướng âm rất vất vả. Những kiến thức lý thuyết ấy bạn học ở các môn tương ứng; ở đây chỉ nhắc lại phần cần để hát. Trong giờ xướng âm cũng cần luyện **phân tích**: nhìn được cả bài và các chi tiết, thấy quan hệ giữa các phần.

Giáo trình dành cho **một bè** và chủ yếu rèn **thính giác giai điệu**: kể cả các chuỗi hợp âm cũng được hát rải trên một bè. Trước khi hát, mỗi bài phải được phân tích, hiểu và nghe trong đầu.

${PLAN}

## Năm chương
| Chương | Nội dung | Bài |
|---|---|---|
| I | Các dạng trưởng và thứ (tự nhiên, hoà thanh, giai điệu); trưởng – thứ cùng tên | 12 |
| II | Nốt biến âm kề các bậc chính: bậc IV nâng, IV hạ, II nâng, II hạ | 9 |
| III | Nốt thêu và nốt lướt cromatic; âm giai cromatic | 5 |
| IV | Chuyển giọng sang các giọng họ hàng bậc một — từ trưởng (6 bài) và từ thứ (6 bài) | 12 |
| V | Chuyển giọng sang các giọng xa: chuyển điều thức, khác hai – ba dấu hoá trở lên, qua hợp âm mượn, chuyển giọng trùng âm | 7 |

Mở đầu là [[${XA_PRELUDE}|Phần chuẩn bị]]: câu mẫu, cách hát nốt cromatic, cách "đổi tai" khi chuyển giọng.

Giáo trình **không có chương riêng về chuyển hướng**: chuyển hướng được coi là một dạng chuyển giọng. Khi đọc, bạn tự tìm mọi chỗ ghé sang giọng khác và hình dung rõ từng chỗ ấy.

## Phương pháp
**Đô cố định.** Như phần lớn nhạc sĩ được đào tạo theo hệ thống nhạc viện, sách dùng **Đô cố định** (tên nốt chỉ cao độ tuyệt đối), khác với Đô di động hay hệ thống số. Hệ thống này dựa trước hết vào việc học **điều thức và giọng**: mỗi âm vừa có vị trí trong toàn bộ hệ thống âm thanh, vừa có vai trò (bậc, chức năng) trong một giọng cụ thể — cùng một nốt lúc là bậc I, lúc là bậc II, lúc là bậc V.

**Quãng học trên bậc của điều thức, rồi mới từ một nốt cho trước.** Cùng một quãng mang nghĩa khác nhau tuỳ vị trí: quãng 4 Sol – Đô dễ hát trong Đô trưởng hơn trong Sol trưởng. Vì vậy quãng được học trước hết trên các bậc của điều thức; sau đó mới hát quãng từ một nốt bất kỳ — kỹ năng không thể thiếu khi chuyển giọng.

**Điều thức như một cơ thể nhiều âm.** Lối học phổ biến là dựa vào các bậc ổn định và nghe bậc không ổn định như nốt "đi về" bậc ổn định bên cạnh. Giáo trình này cũng dựa vào điều thức nhưng nhìn nó **như một hệ thống**, bảy âm được cảm nhận cùng lúc: người nhạc sĩ phải hát được **bất kỳ bậc nào mà không cần dựa vào nốt bên cạnh** — xác định bậc, hình dung tiếng của nó, rồi hát.

**Câu mẫu đi từ bậc phụ về âm chủ.** Lối thường gặp là nghe âm chủ trước rồi tìm bậc cần hát (hát thầm âm giai từ bậc I lên, hay dùng quãng 5). Ở đây ngược lại: mỗi bậc được nhớ bằng một **câu mẫu** (tiếng Nga: *попевка*) đi **từ bậc ấy về âm chủ** — muốn hát Mi trong Đô trưởng, hãy nghe nó như Mi – Rê – Đô. Như người chơi violin kiểm tra một nốt bằng dây buông, bạn nhớ cùng lúc bậc phụ và quan hệ của nó với âm chủ. Thuộc các câu mẫu rồi, bước tiếp theo là chỉ hát **nốt đầu** của câu mẫu — tức là chính bậc cần hát. Câu mẫu hát ở nhiều quãng 8 vừa giọng, gọi cả tên nốt và tên bậc. Sau đó các bậc được luyện trong nhiều tiết tấu khác nhau; câu mẫu chỉ còn là công cụ **lên dây** khi vào giọng mới.

**Nốt cromatic dựa vào bậc diatonic.** Nốt cromatic sinh ra khi nâng hay hạ một bậc chính; hãy nghe trước bậc diatonic rồi từ đó tìm nốt cromatic, và hiểu mỗi nốt cromatic là **nốt chuyển tiếp tới bậc diatonic kế đó**. Trong hệ âm bình quân, **nửa cung cromatic hát rộng, nửa cung diatonic hát hẹp**: bậc II nâng hát rộng so với bậc II và kéo sát lên bậc III; bậc IV nâng là nửa cung kéo về bậc V; bậc V nâng hát rộng và kéo lên bậc VI; bậc II hạ kéo về bậc I. Hát được nốt cromatic theo nửa cung rồi, phải hát được nó **bằng bất kỳ bước nhảy nào**.

**Chuyển giọng: thời điểm và "đổi tai".** Khi chuyển giọng, các âm đổi vai trò. Phải xác định **thời điểm chuyển**, hiểu nghĩa mới của nốt biến âm hay nốt diatonic, và chuyển tai sang âm chủ mới — dùng câu mẫu của giọng mới để đặt lại điểm tựa.

**Thứ tự các giọng.** Ở giáo trình tập 1, các giọng xếp theo vòng quãng 5 tới ba dấu hoá; ở đây dùng mọi giọng thông dụng, xếp **đồng tâm**: từ Đô trưởng đi lên và đi xuống từng nửa cung (Đô, Rê♭, Si, Rê, Si♭, Mi♭, La…), để tận dụng tầm giọng.

## Cấu trúc mỗi bài
Mỗi bài mở bằng khung nội dung (như các bài của giáo trình gốc), một đoạn giảng, rồi:
- **Bài tập** trên âm giai, quãng và hợp âm — chuẩn bị cho việc đọc giai điệu, cần làm kỹ: I. âm giai, đánh nhịp, đổi tiết tấu; II. câu mẫu; III. hát các bậc ở quãng 8 thầy cô chỉ định; IV. quãng tăng, giảm và giải quyết (chương III: quãng từ một nốt cho trước); V. mô tiến theo bậc; VI. hợp âm và chuỗi hợp âm hát rải, chức năng ghi dưới nốt (chương IV – V: chuỗi hợp âm chuyển giọng).
- **Bài xướng âm**: sáu giai điệu, đánh số liên tục từ đầu sách (270 bài), ở nhiều nhịp (2/4, 3/4, 4/4, 6/8, 3/8) và nhịp độ, khoảng một phần tư viết ở **khoá Fa** cho giọng nam. Số bài làm ở nhà tuỳ khối lượng các phần khác của môn học.

${BUTTONS}

## Các giai điệu được soạn thế nào
Giáo trình gốc dùng chủ yếu giai điệu do tác giả viết và một ít trích đoạn tác phẩm; giai điệu trong cuốn này đều **mới**, do một chương trình soạn trên khung hoà âm (đoạn nhạc 8 hay 16 ô, câu hỏi – câu đáp, câu sau mở đầu như câu trước) rồi **kiểm tra theo luật**:
- phách mạnh và mọi chỗ đổi hợp âm là nốt của hợp âm; nốt ngoài hợp âm là nốt lướt hay nốt thêu, vào và ra bằng bước liền;
- bước nhảy đi từ nốt hợp âm tới nốt hợp âm; sau bước nhảy lớn hơn quãng 4 giai điệu quay lại; hai bước nhảy cùng chiều nằm trong một hợp âm và không quá quãng 8;
- bậc mà hợp âm biến âm thì giai điệu hát biến âm theo (không có đối ứng chéo trong một hợp âm);
- nốt nâng đi lên, nốt hạ đi xuống; quãng tăng, giảm chỉ xuất hiện ở bài học về chúng, và luôn được giải quyết (sau quãng tăng đi tiếp cùng chiều, sau quãng giảm quay lại, đều bằng bước liền);
- nốt cromatic (chương III) là nốt thêu hay nốt lướt đúng loại của bài, ghi đúng quy tắc âm giai cromatic, không dùng dấu kép;
- câu kết nửa dừng ở nốt của hợp âm át, câu kết trọn về âm chủ bằng bước liền; ở bài chuyển giọng, ô trước âm chủ mới luôn có **cảm âm của giọng mới**, hợp âm trùng âm được hát đủ ít nhất ba âm của nó;
- mọi nốt nằm trong quãng 8 số 3 – 5.

Phần phụ lục của giáo trình gốc (bài đọc thị xướng có đệm piano) không có trong cuốn này.
`,
}

const prelude: Article = {
  slug: XA_PRELUDE,
  title: 'Phần chuẩn bị: câu mẫu, cromatic, chuyển giọng',
  category: 'musicianship',
  unlisted: true,
  summary: 'Ba công cụ dùng suốt cuốn sách: câu mẫu đi từ bậc phụ về âm chủ, cách hát nốt cromatic dựa vào bậc diatonic, và cách đổi điểm tựa của tai khi chuyển giọng.',
  refs: SOURCE,
  body: `
Phần chuẩn bị nhắc lại ba công cụ dùng trong mọi bài sau. Phần diatonic đầy đủ thuộc tập trước của giáo trình (tập 1, 1965); ở đây chỉ ôn đủ để bắt đầu.

## Câu mẫu
Để nắm các bậc diatonic và vị trí cao độ của chúng so với âm chủ, hãy dùng **câu mẫu đi về bậc I**, xây trên âm giai trưởng và thứ. Khi đã nghe quen quan hệ giữa các âm trong câu mẫu, chỉ cần nhìn nốt đầu là bạn hát ngay được bậc cần hát. Hát và học thuộc các câu mẫu của ba dạng trưởng và thứ, gọi cả tên nốt lẫn tên bậc ("ba – hai – một", "sáu – năm"…).

${D.prelude.slice(0, 4).join('\n\n')}

## Cromatic
Nốt cromatic xuất hiện theo ba cách: (1) là **bậc biến âm** của điều thức (♭VI, ♭VII…); (2) là **nốt lướt hay nốt thêu**; (3) là nốt **đổi chức năng** và trở thành bậc của một giọng mới (chuyển giọng).

Hát chắc nốt cromatic lướt và thêu nhờ **dựa vào âm giai diatonic gốc**: hãy nghe trước nốt cromatic như nửa cung nối với bậc chính của trưởng hay thứ. Điều quan trọng nhất là phân biệt cung và nửa cung: trong hệ bình quân, **nửa cung cromatic hát rộng, nửa cung diatonic hát hẹp**.
- Bậc II nâng hát rộng so với bậc II, kéo về bậc III.
- Bậc IV nâng là nửa cung kéo về bậc V.
- Bậc V nâng hát rộng, kéo về bậc VI.
- Bậc II hạ kéo về bậc I.

Giọng thứ cũng vậy; chú ý bậc V nâng của giọng thứ (kéo lên âm chủ qua bậc VII nâng) và bậc IV hạ của giọng thứ, hiếm hơn.

${D.prelude[4]}

## Chuyển giọng
Khi chuyển giọng, các âm đổi vai trò bậc. Điều quan trọng là xác định **lúc chuyển sang giọng khác**, hiểu nghĩa mới của nốt biến âm hay nốt diatonic và **chuyển tai sang điểm tựa mới**. Để chuyển tai, hãy dùng câu mẫu: ví dụ từ Đô trưởng sang La thứ, hoặc từ Đô trưởng sang Mi thứ. Bạn có thể tự đặt câu mẫu khác cho mình.

${D.prelude.slice(5).join('\n\n')}

${BUTTONS}
`,
}

const CHAPTER = ['', 'Chương I', 'Chương II', 'Chương III', 'Chương IV', 'Chương V']

const lessons: Article[] = D.lessons.map((L) => ({
  slug: xaSlug(L.ch, L.n),
  title: `${L.title}`,
  category: 'musicianship',
  unlisted: true,
  aliases: [`xướng âm ${L.ch}.${L.n}`],
  summary: `${CHAPTER[L.ch]}, bài ${L.n}: ${L.topics.join('; ')}.`,
  body: `
**Nội dung:** ${L.topics.join(' · ')}.

${L.text}

Đọc mỗi giai điệu theo kế hoạch chín bước ở [[${XA_HUB}|bài lộ trình]]; trước bài, hát lại câu mẫu của giọng để lên dây.

${L.drills}

## Bài xướng âm
Trước khi hát: xác định giọng, chia câu, tìm các nốt biến âm (gạch dưới, ghi hướng giải quyết ↑ ↓) và — ở bài chuyển giọng — đánh dấu chỗ chuyển và giọng mới.

${L.melodies.join('\n\n')}
`,
}))

export const xuongAm: Article[] = [hub, prelude, ...lessons]
