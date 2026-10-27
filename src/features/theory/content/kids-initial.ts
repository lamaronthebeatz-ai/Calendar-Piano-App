import type { Article } from '../wiki'

/**
 * Piano cho Trẻ em — Initial: the theory chapters of the first volume (sound and the keyboard, first
 * reading, first playing). Written for children reading with a parent or teacher; every music example is
 * engraved for the book (music/ex/initial.txt, `::ex`). Unlisted: they are read in the book, and reached
 * from the library by links and search.
 */
const ABRSM_INITIAL: [string, string] = ['ABRSM — Piano Practical Grades Qualification Specification 2027 & 2028', 'https://www.abrsm.org/sites/default/files/2026-06/Piano%20Practical%20Grades%20Qualification%20Specification%202027%20&%202028.pdf']

export const kidsInitial: Article[] = [
  {
    slug: 'tre-em-am-thanh-quanh-ta',
    title: 'Âm thanh quanh ta: cao – thấp, dài – ngắn, to – nhỏ',
    category: 'musicianship',
    unlisted: true,
    aliases: ['cao thấp dài ngắn', 'nghe âm thanh cho trẻ'],
    summary: 'Bài mở đầu cuốn Initial: trước khi đọc nốt, bạn nghe và chơi bốn cặp tính chất của âm thanh — cao/thấp, dài/ngắn, to/nhỏ, nhanh/chậm — trên chính cây đàn của mình.',
    body: `
Mỗi âm thanh bạn nghe — tiếng chim hót, tiếng trống trường, tiếng mẹ gọi — đều có vài tính chất mà tai nhận ra rất nhanh. Âm nhạc chỉ là cách sắp xếp những tính chất ấy cho thật đẹp. Trước khi học đọc nốt, bạn hãy làm quen với chúng bằng tai và bằng tay.

## Cao và thấp
Trên đàn piano, càng đi về **bên phải** âm thanh càng **cao** (trong, nhỏ nhắn như tiếng chim); càng đi về **bên trái** âm thanh càng **thấp** (trầm, to lớn như tiếng gấu). Người ta gọi độ cao – thấp ấy là **cao độ**.

::ex i-cao-thap | Một nốt rất cao ở khuông trên và một nốt rất thấp ở khuông dưới. Nốt nằm càng cao trên giấy thì nghe càng cao.

- Chơi một phím ở tận cùng bên phải, rồi một phím ở tận cùng bên trái. Bạn nghe thấy con vật nào?
- Chơi ba phím: một ở bên trái, một ở giữa, một ở bên phải. Hỏi người lớn chơi lại một phím bất kỳ, bạn nhắm mắt và chỉ tay lên hay xuống.

## Dài và ngắn
Có âm ngân rất lâu, có âm vụt tắt. Trong bản nhạc, âm dài được ghi bằng hình nốt khác âm ngắn — bạn sẽ học ở [[tre-em-not-den-not-trang]].

::ex i-dai-ngan | Một âm dài bằng cả ô nhịp, rồi bốn âm ngắn.

## To và nhỏ
Gõ phím nhẹ thì tiếng nhỏ, gõ mạnh hơn thì tiếng to. Nhạc sĩ ghi **p** (*piano* — nhỏ) và **f** (*forte* — to) dưới bản nhạc. Chính cái tên "piano" là rút gọn từ *pianoforte* — cây đàn chơi được cả nhỏ lẫn to (xem [[lich-su-piano]]).

::ex i-to-nho | Bốn nốt **f** (to) rồi bốn nốt **p** (nhỏ) — cùng một phím, chỉ khác sức tay.

## Nhanh và chậm
Cùng một bài, chơi nhanh nghe vui nhộn, chơi chậm nghe êm ả. Tốc độ của bài gọi là **nhịp độ** (*tempo*).

## Trò chơi
1. **Mưa nhỏ, sấm to:** chơi lách tách nhẹ nhàng ở vùng cao (mưa), rồi ấn mạnh vài phím ở vùng trầm (sấm).
2. **Con vật bí ẩn:** người lớn chơi một đoạn ngắn, bạn đoán: chim (cao, nhanh, nhỏ), voi (thấp, chậm, to), mèo (giữa, nhẹ nhàng)…
3. **Đi theo nhạc:** người lớn chơi nhanh thì bạn chạy nhẹ, chơi chậm thì bạn đi chậm, nhạc dừng thì đứng im.

## Gợi ý cho phụ huynh và giáo viên
Học "âm thanh trước ký hiệu" (Kodály, Orff, Dalcroze — xem [[phuong-phap-giao-duc-am-nhac]]) nghĩa là cho trẻ trải nghiệm bằng tai và cơ thể trước khi gắn tên gọi. Đừng sửa "sai" ở bài này; hãy hỏi "con nghe thấy gì?" và để trẻ tự mô tả bằng lời của mình.
`,
  },
  {
    slug: 'tre-em-phach-va-nhip',
    title: 'Phách – nhịp tim của âm nhạc',
    category: 'rhythm',
    unlisted: true,
    aliases: ['phách cho trẻ', 'giữ phách'],
    summary: 'Phách là dòng nhịp đều chảy bên dưới mọi bài nhạc. Bạn giữ phách bằng chân, bằng tay, rồi nhận ra phách mạnh: nhịp đi hai (MỘT – hai) và nhịp đi ba (MỘT – hai – ba).',
    body: `
Đặt tay lên ngực, bạn thấy tim đập đều: thình – thình – thình. Âm nhạc cũng có một nhịp đều như thế, gọi là **phách**. Phách không phải lúc nào cũng nghe thấy, nhưng ai hát, ai múa, ai chơi đàn cũng cùng đi theo nó.

## Đi đều theo phách
::ex i-phach-deu | Mỗi nốt là một phách. Bốn phách đầu bạn bước chân, bốn phách sau vỗ tay.

Hãy bật một bài hát quen (*Một con vịt*, *Cả nhà thương nhau*…) và bước tại chỗ theo nhạc. Khi bước đã đều, đổi sang vỗ tay, rồi vỗ đùi.

## Phách mạnh, phách nhẹ
Các phách không bằng nhau: có phách **mạnh** (như khi bạn dậm chân) và phách **nhẹ**. Phách mạnh lặp lại đều đặn tạo thành **nhịp**.

::ex i-phach-hai | Nhịp đi hai: MỘT – hai. Dấu > trên nốt nghĩa là nhấn mạnh. Nghe như bước chân đi đều.

::ex i-phach-ba | Nhịp đi ba: MỘT – hai – ba. Nghe như điệu valse, như chiếc võng đưa.

## Trò chơi
1. **Dậm – vỗ:** phách mạnh dậm chân, phách nhẹ vỗ tay. Nhịp đi hai: *dậm – vỗ*; nhịp đi ba: *dậm – vỗ – vỗ*.
2. **Đoán nhịp:** người lớn chơi một bài, bạn đoán đó là nhịp đi hai hay đi ba bằng cách thử dậm – vỗ theo.
3. **Giữ phách khi người khác đổi:** bạn vỗ phách đều, người lớn hát nhanh – chậm lộn xộn để "đánh lừa". Ai giữ được phách đều là thắng.

## Gợi ý cho phụ huynh và giáo viên
Giữ phách là nền móng của mọi kỹ năng sau này; bài thi nghe ABRSM từ Grade 1 bắt đầu bằng việc vỗ phách theo nhạc và nhận ra nhịp đi hai hay đi ba (xem phần Kiểm tra cuối cấp). Xem thêm [[cam-nhan-phach]].
`,
  },
  {
    slug: 'tre-em-ban-phim',
    title: 'Bàn phím: phím đen, phím trắng và nốt Đô',
    category: 'basics',
    unlisted: true,
    aliases: ['tìm nốt Đô', 'tên phím trắng'],
    summary: 'Phím đen xếp thành nhóm hai và nhóm ba; nhờ chúng bạn tìm ra mọi phím Đô và Fa, rồi gọi tên bảy phím trắng Đô – Rê – Mi – Fa – Sol – La – Si.',
    body: `
Đàn piano thường có **88 phím**: 52 phím trắng và 36 phím đen. Nhiều phím như vậy nhưng bạn chỉ cần nhớ **bảy cái tên**, vì chúng lặp lại suốt từ trái sang phải.

## Nhóm hai và nhóm ba phím đen
Nhìn kỹ, phím đen không đứng rải rác mà xếp thành **nhóm hai** và **nhóm ba**, xen kẽ nhau.

::keyboard C#4 D#4 | Nhóm hai phím đen

::keyboard F#4 G#4 A#4 | Nhóm ba phím đen

## Đô nằm bên trái nhóm hai
Phím trắng ngay **bên trái nhóm hai phím đen** là **Đô** (tên quốc tế: **C**). Phím trắng ngay **bên trái nhóm ba phím đen** là **Fa** (**F**).

::keyboard C4 F4 | Đô ở bên trái nhóm hai, Fa ở bên trái nhóm ba

Phím Đô gần giữa đàn nhất, thường nằm ngay trước tên hãng đàn, gọi là **Đô giữa**. Đây là "ngôi nhà" của bạn trong cả cuốn sách.

## Bảy tên phím trắng
Từ Đô đi sang phải: **Đô – Rê – Mi – Fa – Sol – La – Si**, rồi lại Đô. Tên quốc tế dùng chữ cái: **C – D – E – F – G – A – B**.

::keyboard C4 D4 E4 F4 G4 A4 B4 C5 | Đô – Rê – Mi – Fa – Sol – La – Si – Đô (C D E F G A B C)

## Luyện tập
1. Tìm **tất cả** phím Đô trên đàn, từ trái sang phải, vừa chơi vừa gọi to "Đô!". Đàn 88 phím có tám phím Đô.
2. Làm như vậy với các phím Fa.
3. Đặt ngón 2 và 3 lên một nhóm hai phím đen, ngón 2 – 3 – 4 lên một nhóm ba; chơi lần lượt từ trái sang phải khắp bàn phím.
4. Người lớn đọc một tên nốt (ví dụ "Mi!"), bạn tìm thật nhanh.

## Gợi ý cho phụ huynh và giáo viên
Cho trẻ dùng nhóm phím đen làm "biển báo", không dán nhãn tên lên phím: nhãn khiến mắt dính vào phím thay vì học vị trí. Đọc thêm [[ban-phim]].
`,
  },
  {
    slug: 'tre-em-tu-the-va-ngon-tay',
    title: 'Tư thế ngồi, bàn tay và số ngón',
    category: 'technique',
    unlisted: true,
    aliases: ['số ngón tay piano', 'tư thế cho trẻ'],
    summary: 'Ngồi đúng chiều cao, chân có chỗ tựa, bàn tay tròn như ôm quả cam; hai tay đánh số ngón từ 1 (ngón cái) đến 5 (ngón út) — những con số bạn sẽ thấy trên bản nhạc.',
    body: `
Tiếng đàn đẹp bắt đầu từ cách ngồi. Một tư thế thoải mái giúp tay bạn thả lỏng, chơi lâu không mỏi.

## Ngồi thế nào
- Ngồi ở **nửa trước** ghế, lưng thẳng nhưng không gồng.
- Ghế cao vừa đủ để **khuỷu tay ngang hoặc cao hơn mặt phím** một chút khi đặt tay lên đàn.
- Hai chân phải có chỗ tựa: nếu chân chưa chạm sàn, đặt một chiếc **bục kê chân** hoặc chồng sách chắc chắn.
- Ngồi chính giữa, trước Đô giữa; khoảng cách đủ để khuỷu tay hơi đưa về phía trước.

## Bàn tay tròn
Thả hai tay xuôi theo người, rồi đưa lên mặt phím mà giữ nguyên hình dáng: các ngón cong tự nhiên như đang **ôm một quả cam nhỏ**. Chơi bằng **đầu ngón** (không phải móng, không phải bụng ngón), ngón cái chạm phím bằng cạnh bên.

## Số ngón
Hai tay đều đánh số giống nhau: **ngón cái là 1**, ngón trỏ 2, ngón giữa 3, ngón áp út 4, **ngón út 5**. Những con số nhỏ trên nốt nhạc cho biết dùng ngón nào.

::ex i-ngon-tay-phai | Tay phải ở vị trí Đô: ngón 1 trên Đô, ngón 5 trên Sol.

::ex i-ngon-tay-trai | Tay trái ở vị trí Đô (khuông dưới): ngón 5 trên Đô, ngón 1 trên Sol — cùng năm nốt nhưng thứ tự ngón ngược lại.

## Luyện tập
1. **Ngón nào?** Người lớn đọc "tay trái, ngón 3!", bạn ngọ nguậy đúng ngón ấy.
2. **Thả nặng:** đặt ngón 3 lên một phím, để cả cánh tay "rơi" nhẹ xuống qua đầu ngón, rồi nhấc lên như quả bóng nảy. Làm với từng ngón.
3. Chơi năm nốt Đô – Rê – Mi – Fa – Sol bằng ngón 1 – 2 – 3 – 4 – 5 tay phải, rồi 5 – 4 – 3 – 2 – 1 tay trái, vừa chơi vừa đọc tên nốt.

## Gợi ý cho phụ huynh và giáo viên
Ở tuổi này, sự căng cứng thường bắt đầu từ vai và cổ tay; nhắc trẻ thả vai sau mỗi câu nhạc. Xem [[tu-the]], [[ngon-bam]] và [[ky-thuat-cham-phim]].
`,
  },
  {
    slug: 'tre-em-phim-den-ngu-cung',
    title: 'Năm phím đen và âm giai ngũ cung',
    category: 'scales',
    unlisted: true,
    aliases: ['phím đen ngũ cung', 'ngẫu hứng phím đen'],
    summary: 'Năm phím đen liền nhau tạo thành một âm giai ngũ cung — họ hàng gần với thang âm của nhiều làn điệu dân ca Việt. Trên năm phím ấy, bạn ngẫu hứng mà không có nốt "sai".',
    body: `
Thử chơi bất kỳ phím đen nào, theo bất kỳ thứ tự nào: nghe vẫn hay! Bí mật là năm phím đen (một nhóm hai cộng một nhóm ba) tạo thành **âm giai ngũ cung** — một thang âm năm nốt có ở âm nhạc khắp thế giới, trong đó có nhiều làn điệu dân ca Việt Nam (xem [[am-giai-ngu-cung]]).

::keyboard F#4 G#4 A#4 C#5 D#5 | Năm phím đen liền nhau: một âm giai ngũ cung

## Hỏi – đáp trên phím đen
Người lớn chơi hai nốt trầm lặp đi lặp lại (một "tấm thảm" nhạc), bạn chơi một câu ngắn trên phím đen. Người lớn chơi một câu "hỏi", bạn chơi một câu "đáp". Không có nốt sai — chỉ có câu hay và câu hay hơn.

::ex i-phim-den-ostinato | Bản ghi dành cho người lớn đọc: tay phải chơi trên năm phím đen, tay trái giữ hai nốt trầm Fa♯ – Đô♯. Bạn nhỏ chơi theo **hình phím**, chưa cần đọc các dấu thăng.

## Ngũ cung trên phím trắng
Năm nốt **Đô – Rê – Mi – Sol – La** (bỏ Fa và Si) cũng là một âm giai ngũ cung, ở ngay vị trí tay bạn đang học. Bản *Mưa rơi* ở phần Tác phẩm được viết trên năm nốt này.

## Chơi bằng tai
Bạn có thể mò một bài đồng dao quen trên phím đen — ví dụ câu đầu *Bắc kim thang* — bằng cách hát từng tiếng rồi tìm phím cho đúng tiếng hát. Đây là chơi bằng tai, chưa cần bản nhạc.

## Gợi ý cho phụ huynh và giáo viên
Ngẫu hứng sớm giúp trẻ coi cây đàn là nơi để "nói", không chỉ để đọc. Giữ tấm thảm trầm đều và chậm; khen ý tưởng (một câu lặp lại, một câu kết dừng đúng chỗ) hơn là khen ngón tay. Đọc thêm [[ngau-hung-piano]].
`,
  },
  {
    slug: 'tre-em-not-den-not-trang',
    title: 'Nốt đen, nốt trắng, nốt tròn và dấu lặng',
    category: 'rhythm',
    unlisted: true,
    aliases: ['trường độ cho trẻ', 'ta ti-ti', 'dấu lặng đen'],
    summary: 'Hình nốt cho biết âm kéo dài bao nhiêu phách: nốt đen 1 phách, nốt trắng 2, nốt trắng chấm dôi 3, nốt tròn 4. Mỗi hình nốt có một dấu lặng tương ứng — lúc im lặng cũng được đếm.',
    body: `
Ở bài trước bạn đã giữ phách. Giờ ta ghi lại **mỗi âm dài bao nhiêu phách** — đó là **trường độ**, và mỗi trường độ có một hình nốt riêng.

## Bốn hình nốt đầu tiên
| Hình nốt | Tên | Số phách | Đọc |
|---|---|---|---|
| đầu đen có đuôi | **nốt đen** | 1 | ta |
| đầu trắng có đuôi | **nốt trắng** | 2 | ta-a |
| nốt trắng có chấm bên phải | **nốt trắng chấm dôi** | 3 | ta-a-a |
| đầu trắng không đuôi | **nốt tròn** | 4 | ta-a-a-a |

::ex i-not-den-trang | Đọc to bằng âm tiết rồi vỗ tay: mỗi "a" kéo dài thêm một phách, tay vẫn giữ phách đều.

Dấu chấm bên phải nốt (**chấm dôi**) làm nốt dài thêm một nửa: nốt trắng 2 phách + 1 = 3 phách.

::ex i-bang-truong-do | Cùng một thời gian 4 phách: một nốt tròn = hai nốt trắng = bốn nốt đen = tám nốt móc đơn (nốt móc đơn bạn sẽ gặp kỹ ở Grade 1).

## Dấu lặng: im lặng cũng là âm nhạc
Khi gặp **dấu lặng**, bạn nhấc tay lên và **đếm thầm** — phách vẫn trôi. Mỗi hình nốt có dấu lặng cùng độ dài.

::ex i-lang-cac-loai | Từ trái sang phải: dấu lặng tròn (cả ô nhịp), dấu lặng trắng (2 phách, ngồi trên dòng 3), dấu lặng đen (1 phách).

::ex i-dau-lang | Ở chỗ dấu lặng, mở hai bàn tay ra (hoặc thì thầm "suỵt") rồi vỗ tiếp đúng phách.

## Luyện tập
1. Người lớn vỗ một ô nhịp 4 phách, bạn vỗ lại và nói tên các hình nốt.
2. Viết thẻ tiết tấu: mỗi thẻ một ô 4 phách. Rút thẻ, đọc bằng âm tiết, vỗ, rồi chơi trên một phím bất kỳ.
3. Tự viết một ô nhịp của riêng bạn và đố người lớn vỗ lại.

## Gợi ý cho phụ huynh và giáo viên
Âm tiết "ta / ti-ti" theo truyền thống Kodály (xem [[am-tiet-nhip]]); đọc tiết tấu bằng âm tiết trước rồi mới đếm số. Bảng trường độ đầy đủ ở [[truong-do]] và [[dau-lang]].
`,
  },
  {
    slug: 'tre-em-o-nhip-va-so-chi-nhip',
    title: 'Ô nhịp, vạch nhịp và số chỉ nhịp',
    category: 'rhythm',
    unlisted: true,
    aliases: ['số chỉ nhịp cho trẻ', '2/4 3/4 4/4'],
    summary: 'Vạch nhịp chia bản nhạc thành các ô nhịp bằng nhau; số chỉ nhịp ở đầu bài cho biết mỗi ô có mấy phách — 2/4, 3/4 hay 4/4. Phách đầu mỗi ô là phách mạnh.',
    body: `
Nhớ phách mạnh ở bài [[tre-em-phach-va-nhip]] không? Trên bản nhạc, người ta kẻ một vạch dọc ngay **trước mỗi phách mạnh**. Vạch ấy là **vạch nhịp**, khoảng giữa hai vạch là một **ô nhịp**.

## Vạch nhịp và vạch kết
- **Vạch nhịp**: một nét mảnh, chia các ô.
- **Vạch kép**: hai nét mảnh — hết một đoạn.
- **Vạch kết**: một nét mảnh và một nét đậm — hết bài.

::ex i-o-nhip | Bài có số chỉ nhịp 4/4: mỗi ô bốn phách. Đếm "1 – 2 – 3 – 4" và nhấn nhẹ số 1. Nốt trắng chiếm hai phách "3–4".

## Số chỉ nhịp
Hai con số chồng lên nhau ở đầu bài là **số chỉ nhịp**. Ở cấp này:
- **Số trên** cho biết mỗi ô có **mấy phách**.
- **Số dưới là 4** nghĩa là mỗi phách là **một nốt đen**.

| Số chỉ nhịp | Mỗi ô có | Đếm |
|---|---|---|
| 2/4 | 2 phách đen | **1** – 2 |
| 3/4 | 3 phách đen | **1** – 2 – 3 |
| 4/4 (hay chữ **C**) | 4 phách đen | **1** – 2 – 3 – 4 |

::ex i-nhip-hai-ba-bon | Ba số chỉ nhịp trong một dòng nhạc. Nhịp 4/4 thường được ghi bằng chữ C.

## Luyện tập
1. Đếm to từng ô của ví dụ trên trong khi người lớn chơi, vỗ mạnh ở số 1.
2. Viết số chỉ nhịp cho các ô sau: nốt trắng + nốt đen (3/4); bốn nốt đen (4/4); hai nốt đen (2/4).
3. Kẻ vạch nhịp cho một dòng nốt đã cho biết số chỉ nhịp.

## Gợi ý cho phụ huynh và giáo viên
Chi tiết hơn ở [[so-chi-nhip]] và [[nhip-lay-da]] (ô nhịp thiếu ở đầu bài, sẽ gặp ở Grade 1). Ở Initial chỉ cần số dưới là 4; số dưới 2 và 8 sẽ đến ở Grade 2 – 3.
`,
  },
  {
    slug: 'tre-em-khuong-nhac-va-khoa',
    title: 'Khuông nhạc, khoá Sol và khoá Fa',
    category: 'basics',
    unlisted: true,
    aliases: ['khuông nhạc cho trẻ', 'khuông lớn'],
    summary: 'Năm dòng kẻ và bốn khe là "nhà" của nốt nhạc. Khoá Sol cho tay phải, khoá Fa cho tay trái; hai khuông nối bằng dấu ngoặc thành khuông lớn — bản đồ của cả bàn phím.',
    body: `
Nốt nhạc cần một chỗ để "ở" sao cho nhìn vào là biết cao hay thấp. Chỗ ấy là **khuông nhạc**: năm dòng kẻ ngang song song.

## Dòng và khe
Khuông có **5 dòng** và **4 khe** (khoảng trống giữa hai dòng). Ta đếm **từ dưới lên**. Nốt có thể nằm **trên dòng** (dòng kẻ cắt ngang đầu nốt) hoặc **trong khe**.

::ex i-dong-va-khe | Năm nốt trên năm dòng, rồi bốn nốt trong bốn khe — đếm từ dưới lên.

Nốt nằm càng cao trên khuông thì âm càng cao.

## Khoá nhạc
Ký hiệu đứng đầu khuông là **khoá nhạc**: nó cho biết dòng nào là nốt gì.

- **Khoá Sol** cuộn tròn quanh **dòng 2** — nốt nằm trên dòng 2 là **Sol**. Khoá Sol dùng cho các âm cao, thường là tay phải.
- **Khoá Fa** có hai dấu chấm kẹp lấy **dòng 4** — nốt nằm trên dòng 4 là **Fa**. Khoá Fa dùng cho các âm thấp, thường là tay trái.

::ex i-khoa-sol-fa | Khuông trên: khoá Sol và nốt Sol trên dòng 2. Khuông dưới: khoá Fa và nốt Fa trên dòng 4.

## Khuông lớn
Nhạc piano viết trên **hai khuông** nối bằng một dấu ngoặc: khuông trên khoá Sol, khuông dưới khoá Fa. Đó là **khuông lớn**. **Đô giữa** nằm đúng ở giữa hai khuông, trên một dòng kẻ ngắn gọi là **dòng kẻ phụ**: viết sát dưới khuông Sol, hoặc sát trên khuông Fa — cùng một phím.

::ex i-khuong-lon-do-giua | Đô giữa viết ở hai chỗ: dòng kẻ phụ dưới khuông Sol và dòng kẻ phụ trên khuông Fa. Cả hai là cùng một phím.

## Luyện tập
1. Tập vẽ khoá Sol: bắt đầu từ dòng 2, cuộn một vòng, vút lên cao, rồi kéo xuống.
2. Tập vẽ khoá Fa: chấm một chấm trên dòng 4, vẽ hình dấu phẩy lớn, rồi chấm hai chấm hai bên dòng 4.
3. Người lớn chỉ một nốt trên khuông, bạn nói "dòng mấy" hay "khe mấy".

## Gợi ý cho phụ huynh và giáo viên
Nguồn gốc các khoá ở [[khoa-nhac]]; chi tiết ở [[khoa-sol]], [[khoa-fa]], [[khuong-nhac]].
`,
  },
  {
    slug: 'tre-em-not-moc',
    title: 'Nốt mốc: đọc nốt bằng ba "cột mốc"',
    category: 'basics',
    unlisted: true,
    aliases: ['landmark notes', 'đọc nốt theo hướng'],
    summary: 'Thay vì học thuộc từng nốt, bạn nhớ vài nốt mốc — Đô giữa, Sol khoá Sol, Fa khoá Fa — rồi đọc các nốt khác theo hướng đi: liền bậc, nhảy bậc hay lặp lại.',
    body: `
Người đi đường xa nhớ vài **cột mốc** rồi đếm tiếp từ đó. Đọc nhạc cũng thế: nhớ thật chắc vài **nốt mốc**, các nốt còn lại tìm bằng cách đếm lên hay xuống.

## Năm nốt mốc đầu tiên
::ex i-not-moc | Khuông dưới: Đô trầm, Fa (dòng 4), Đô giữa. Khuông trên: Đô giữa, Sol (dòng 2), Đô cao (khe 3).

- **Đô giữa** — dòng kẻ phụ giữa hai khuông.
- **Sol** của khoá Sol — dòng 2 (chính chỗ khoá cuộn tròn).
- **Fa** của khoá Fa — dòng 4 (giữa hai dấu chấm).
- **Đô cao** — khe 3 khuông Sol; **Đô trầm** — khe 2 khuông Fa.

## Đọc theo hướng
Từ một nốt, nốt tiếp theo có thể:
- **Liền bậc**: từ dòng sang khe kề bên (hoặc ngược lại) — trên đàn là phím **kế bên**.
- **Nhảy bậc**: từ dòng sang dòng kề, hoặc khe sang khe kề — trên đàn **bỏ qua một phím**.
- **Lặp lại**: cùng chỗ — cùng phím.

::ex i-lien-nhay-lap | Liền bậc đi lên, lặp lại, rồi nhảy bậc.

Khoảng cách giữa hai nốt gọi là **quãng**: liền bậc là **quãng 2**, nhảy bậc là **quãng 3** (xem [[quang]]).

## Luyện tập
1. **Thẻ nốt mốc:** mỗi ngày đọc năm thẻ nốt mốc thật nhanh, rồi chơi đúng phím.
2. Người lớn chơi hai nốt, bạn nói "liền bậc", "nhảy bậc" hay "lặp lại".
3. Nhìn một dòng nhạc, chưa chơi, dùng ngón tay vẽ hướng đi của giai điệu lên không trung.

## Gợi ý cho phụ huynh và giáo viên
Cách đọc bằng nốt mốc và hướng đi giúp trẻ không lệ thuộc vào câu thần chú học thuộc (kiểu đọc tên từng dòng). Xem [[doc-not-nhanh]].
`,
  },
  {
    slug: 'tre-em-vi-tri-nam-ngon',
    title: 'Vị trí năm ngón: Đô, Đô giữa và Sol',
    category: 'technique',
    unlisted: true,
    aliases: ['vị trí Đô', 'five finger position'],
    summary: 'Đặt năm ngón lên năm phím liền nhau là bạn đã có một "vị trí". Bài này học vị trí Đô (hai tay), vị trí Đô giữa (hai ngón cái chung Đô giữa) và vị trí Sol.',
    body: `
Ở cấp Initial, phần lớn bài nhạc nằm gọn trong **năm nốt liền nhau**: mỗi ngón một phím, không phải xê dịch tay. Cách đặt tay như vậy gọi là **vị trí năm ngón**.

## Vị trí Đô
Tay phải: ngón 1 trên Đô giữa, các ngón khác trên Rê – Mi – Fa – Sol. Tay trái: ngón 5 trên Đô trầm (Đô thấp hơn Đô giữa), ngón 1 trên Sol.

::ex i-vi-tri-do-hai-tay | Tay phải đi lên rồi xuống; tay trái đi lên. Số ngón ghi trên đầu nốt.

## Vị trí Đô giữa
Hai ngón cái cùng đặt trên **Đô giữa**: tay phải đi lên Đô – Rê – Mi – Fa – Sol, tay trái đi xuống Đô – Si – La – Sol – Fa. Nhiều bài cho người mới học được viết ở vị trí này vì giai điệu chuyền qua lại hai tay quanh giữa đàn.

::ex i-vi-tri-do-giua | Tay phải đi lên từ Đô giữa, tay trái đi xuống từ Đô giữa.

## Vị trí Sol
Dời tay phải sang phải để ngón 1 nằm trên **Sol**: Sol – La – Si – Đô – Rê. Cùng hình dáng bàn tay, chỉ đổi chỗ.

::ex i-vi-tri-sol | Một câu nhạc ở vị trí Sol tay phải.

## Luyện tập
1. Mỗi ngày: 1 – 2 – 3 – 4 – 5 – 4 – 3 – 2 – 1 từng tay ở vị trí Đô, vừa chơi vừa hát tên nốt.
2. Chơi lại câu ở vị trí Sol, rồi thử chơi **cùng hình** ấy bắt đầu từ Đô. Nghe có giống nhau không?
3. Trước khi chơi một bài, hỏi: "Bài này ở vị trí nào? Ngón 1 đặt ở đâu?"

## Gợi ý cho phụ huynh và giáo viên
Đổi vị trí sớm (Đô → Sol → Fa) để trẻ đọc nốt thật chứ không đọc số ngón — đây là lời khuyên rút từ phần đánh giá giáo trình ở [[danh-gia-giao-trinh-piano-va-nhac-ly]]. Xem thêm [[vi-tri-nam-ngon-va-am-giai-nam-not]].
`,
  },
  {
    slug: 'tre-em-cuong-do-va-cach-choi',
    title: 'To – nhỏ, liền tiếng và nảy tiếng',
    category: 'expression',
    unlisted: true,
    aliases: ['legato staccato cho trẻ', 'p f mp mf'],
    summary: 'Bốn ký hiệu cường độ p, mp, mf, f; dấu luyến (chơi liền tiếng, legato) và dấu chấm trên nốt (chơi nảy tiếng, staccato) — những cách để bản nhạc có "giọng nói".',
    body: `
Hai người có thể nói cùng một câu mà nghe khác hẳn: người thì thầm, người reo vui. Chơi đàn cũng vậy. Các ký hiệu trong bài này cho biết **nói câu nhạc bằng giọng nào**.

## Bốn mức to – nhỏ
| Ký hiệu | Tiếng Ý | Nghĩa |
|---|---|---|
| **p** | piano | nhỏ |
| **mp** | mezzo piano | hơi nhỏ |
| **mf** | mezzo forte | hơi to |
| **f** | forte | to |

::ex i-cuong-do | Cùng một câu nhạc chơi ba lần với ba mức to nhỏ khác nhau: p, mf, f.

Tiếng to hay nhỏ đến từ **sức nặng của cánh tay** và tốc độ ngón đi xuống — không phải từ việc đập mạnh hay ấn gồng.

## Liền tiếng và nảy tiếng
- **Dấu luyến** (đường cong nối nhiều nốt): chơi **liền tiếng** (*legato*) — nốt này vừa nhấc thì nốt sau vừa vang, không có khe hở, như đang hát một hơi.
- **Dấu chấm** trên hoặc dưới đầu nốt: chơi **nảy tiếng** (*staccato*) — ngắn, nhẹ, như bóng nảy hay mưa rơi.

::ex i-legato-staccato | Bốn nốt liền tiếng trong một dấu luyến, rồi bốn nốt nảy tiếng.

## Luyện tập
1. Chơi năm nốt vị trí Đô bốn lần: p, mp, mf, f. Người nghe nhắm mắt đoán mức nào.
2. Chơi legato như "đi bộ" (một chân rời đất thì chân kia đã chạm), chơi staccato như "chạm bếp nóng".
3. Đặt cho câu *Mary had a little lamb* hai "giọng": thì thầm (p, legato) và vui nhộn (f, staccato).

## Gợi ý cho phụ huynh và giáo viên
Tên tiếng Ý của thuật ngữ sẽ có trong nhạc lý ABRSM Grade 1. Xem [[cuong-do]] và [[cach-dien-tau]].
`,
  },
  {
    slug: 'tre-em-hai-tay-va-am-giai-dau-tien',
    title: 'Hai tay lần lượt, âm giai và hợp âm rải đầu tiên',
    category: 'technique',
    unlisted: true,
    aliases: ['âm giai năm nốt', 'âm giai Đô trưởng cho trẻ'],
    summary: 'Giai điệu chuyền từ tay phải sang tay trái; âm giai năm nốt; âm giai Đô trưởng một quãng tám có luồn ngón; hợp âm rải Đô – Mi – Sol — các bài kỹ thuật của cấp Initial.',
    body: `
Ở cấp này hai tay chưa cần chơi cùng lúc nhiều: phần lớn bài nhạc cho **hai tay lần lượt** — tay phải hỏi, tay trái đáp.

## Hỏi – đáp giữa hai tay
::ex i-hai-tay-hoi-dap | Tay phải chơi câu "hỏi", tay trái "đáp" lại; trong lúc một tay chơi, tay kia đặt sẵn trên phím, không nhấc khỏi đàn.

Mẹo: khi tay phải đang chơi ô cuối, mắt đã nhìn sang khuông dưới để biết tay trái sẽ bắt đầu ở đâu.

## Âm giai năm nốt
Năm nốt liền nhau đi lên rồi xuống, mỗi ngón một phím. Tập ở vị trí Đô rồi vị trí Sol.

::ex i-am-giai-nam-not | Âm giai năm nốt ở vị trí Đô, rồi ở vị trí Sol.

## Âm giai của kỳ thi Initial
Theo đặc tả ABRSM 2027 & 2028, âm giai và hợp âm rải chơi **thuộc lòng**, **liền tiếng** và **đều**:

| Yêu cầu | Giọng | Tầm | Cách chơi |
|---|---|---|---|
| Âm giai | Đô trưởng; Rê thứ (tự nhiên, hoà âm hoặc giai điệu — tuỳ chọn) | 1 quãng tám | từng tay |
| Âm giai ngược chiều | Đô trưởng | một quãng 5 | hai tay cùng bắt đầu từ Đô |
| Hợp âm rải | Đô trưởng, Rê thứ | một quãng 5 | từng tay |

Tám nốt từ Đô đến Đô không đủ năm ngón, nên tay phải **luồn ngón cái** xuống dưới ngón 3 để sang Fa (ngón: 1 2 3 – 1 2 3 4 5); khi đi xuống, **vắt ngón 3** qua ngón cái.

::ex i-am-giai-do-truong | Âm giai Đô trưởng tay phải, một quãng tám, lên và xuống, có ghi số ngón.

Rê thứ tự nhiên đi trên các phím trắng từ Rê đến Rê, chỉ thay Si bằng phím đen **Si♭** (dấu giáng ở đầu khuông). Âm giai thứ sẽ học kỹ ở Grade 1; ở đây bạn chơi theo ngón ghi sẵn.

::ex i-am-giai-re-thu | Âm giai Rê thứ tự nhiên tay phải, một quãng tám — cùng thế ngón với Đô trưởng.

**Ngược chiều**: hai ngón cái cùng đặt trên Đô giữa, tay phải đi lên, tay trái đi xuống — như gương soi.

::ex i-nguoc-chieu-do | Âm giai Đô trưởng ngược chiều, tầm một quãng 5: hai tay đi xa nhau rồi trở về.

## Hợp âm rải
Ba nốt Đô – Mi – Sol cách nhau một nhảy bậc là **hợp âm Đô trưởng**. Chơi lần lượt từng nốt, lên rồi xuống, là **rải** hợp âm.

::ex i-hop-am-rai-do | Hợp âm rải Đô trưởng: tay phải ngón 1 – 3 – 5, tay trái ngón 5 – 3 – 1.

::ex i-hop-am-rai-re-thu | Hợp âm rải Rê thứ: Rê – Fa – La, cùng thế ngón.

## Gợi ý cho phụ huynh và giáo viên
Tập luồn ngón chậm, chỉ với ba nốt (Mi – Fa – Sol bằng ngón 3 – 1 – 2) trước khi chơi cả âm giai. Xem [[am-giai]] và [[ngon-bam]].
`,
    refs: [ABRSM_INITIAL],
  },
  {
    slug: 'tre-em-thi-tau-va-nghe',
    title: 'Đọc bài mới và luyện tai',
    category: 'musicianship',
    unlisted: true,
    aliases: ['thị tấu cho trẻ', 'luyện tai cho trẻ'],
    summary: 'Ba mươi giây trước khi chơi một bài lạ: số chỉ nhịp, vị trí tay, nốt đầu, hướng đi. Và những trò chơi nghe — hát lại, vỗ lại, nhận ra chỗ thay đổi — chuẩn bị cho phần nghe của kỳ thi.',
    body: `
**Thị tấu** là chơi một bài **lần đầu tiên nhìn thấy**. Người đọc giỏi không phải người chơi nhanh, mà là người **nhìn trước** và **không dừng lại**.

## Ba mươi giây chuẩn bị
Trước khi chơi, hãy tự hỏi năm câu:
1. **Số chỉ nhịp** là gì? Mỗi ô mấy phách?
2. **Vị trí tay** nào? Ngón 1 đặt ở đâu, tay nào bắt đầu?
3. **Nốt đầu tiên** là nốt gì?
4. Giai điệu **đi lên, đi xuống**, liền bậc hay nhảy bậc?
5. Có **ký hiệu** nào: mf, p, dấu luyến, dấu chấm?

Rồi đếm một ô "1 – 2 – 3 – 4" trong đầu và bắt đầu. Nếu lỡ sai, **cứ đi tiếp** — phách quan trọng hơn một nốt.

Ở kỳ thi Initial, bài thị tấu dài **4 ô nhịp**, nhịp **4/4**, giọng **Đô trưởng** hoặc **Rê thứ**; mỗi tay chơi riêng, trong vị trí năm ngón (từ âm chủ đến âm át); có thể có câu legato, staccato, **f** và **p**. Bạn có nửa phút để xem và chơi thử trước.

::ex i-thi-tau-1 | Bài đọc 1: tay phải, vị trí Đô, nhịp 4/4.

::ex i-thi-tau-2 | Bài đọc 2: hai tay lần lượt, nhịp 3/4. Tay trái bắt đầu ở nốt nào?

## Bốn bài nghe của kỳ thi Initial
Theo đặc tả ABRSM 2027 & 2028, giám khảo chơi đàn và bạn:
- **A.** Vỗ tay theo **phách** của một đoạn nhạc, nhập vào càng sớm càng tốt.
- **B.** Vỗ lại như **tiếng vọng** tiết tấu của hai câu, mỗi câu hai ô nhịp (nhịp ba hoặc bốn), vỗ ngay, không ngừng.
- **C.** Hát lại như tiếng vọng hai câu, mỗi câu một ô nhịp 4/4, giọng trưởng, trong khoảng từ âm chủ đến bậc ba (Đô – Rê – Mi).
- **D.** Trả lời một câu hỏi về **một đặc điểm** của bản nhạc: to hay nhỏ, hoặc liền tiếng hay tách tiếng.

## Trò chơi nghe
1. **Tiếng vọng:** người lớn hát hoặc chơi một câu ba nốt Đô – Rê – Mi, bạn hát lại ngay, đúng phách.
2. **Vỗ lại:** người lớn vỗ một tiết tấu hai ô, bạn vỗ lại liền sau đó.
3. **Thám tử:** người lớn chơi một câu hai lần, lần hai đổi một nốt. Bạn nói chỗ đổi ở gần đầu hay gần cuối — đây là dạng bài của Grade 1.
4. **To hay nhỏ, liền hay nảy:** nghe một đoạn và nói nó được chơi thế nào.

## Gợi ý cho phụ huynh và giáo viên
Mô tả bài thi lấy từ đặc tả ABRSM Piano Practical Grades 2027 & 2028 (áp dụng từ 1/1/2027). Mỗi ngày một bài đọc mới thật dễ có ích hơn một bài khó mỗi tuần. Xem [[luyen-tai]] và [[thi-tau]].
`,
    refs: [ABRSM_INITIAL],
  },
]
