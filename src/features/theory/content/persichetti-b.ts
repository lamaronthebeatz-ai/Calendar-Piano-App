import type { Article } from '../wiki'
import { PERSICHETTI_REFS } from './persichetti-hub'

/** "Hoà âm thế kỷ XX" theo Persichetti, chương 7 – 13: hợp âm chồng, ghép và soi gương, hướng hoà âm, thời gian, trang trí, trung tâm giọng, tổng hợp. */
export const persichettiB: Article[] = [
  {
    slug: 'persichetti-hop-am-chong',
    title: 'Hoà âm thế kỷ XX (7) — Hợp âm chồng (polychord)',
    category: 'harmony',
    aliases: ['polychord', 'hợp âm chồng Persichetti', 'đa hợp âm', 'polyharmony', 'counterchord', 'đối hợp âm'],
    summary: 'Chương 7 Twentieth-Century Harmony: hợp âm chồng khác đa điệu tính; độ vang tuỳ lớp dưới (hợp âm sáu – bốn trưởng vang nhất); bảng xếp theo vòng quãng 5; khoảng cách, âm vực, phối khí; hai kỹ thuật đối hợp âm; hợp âm chồng ba lớp trở lên, lớp hợp âm bảy, lớp quãng 4, quãng 2.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 7 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. **Hợp âm chồng** là hai hay nhiều hợp âm từ các vùng hoà âm khác nhau vang cùng lúc; mỗi phần gọi là **lớp** (chordal unit). Mầm của nó là pedal kép, pedal ba: hợp âm lướt trên pedal đã hé ra hai điệu tính [^persichetti-1961, tr. 135]. Xem thêm [[hop-am-chong]].

## Hợp âm chồng không phải đa điệu tính
Đa hợp âm **hiếm khi đa điệu tính**: chỉ khi mỗi lớp bám một thang riêng mới thành [[da-dieu-tinh|đa điệu tính]]. Hợp âm chồng không đa điệu tính dẻo hơn nhiều, vì vùng hoà âm của cả hai lớp đổi liên tục [^persichetti-1961, tr. 136]. Điều kiện bắt buộc: **các lớp phải tách bạch**; xếp lại âm mà làm lẫn lớp thì không còn hợp âm chồng [^persichetti-1961, tr. 137].

## Độ vang
- Độ vang do **lớp dưới** quyết định. Lớp dưới vang nhất là **hợp âm ba trưởng thể sáu – bốn**, vì quãng 4 bên trong gần với quãng 5 của chuỗi bồi âm hơn quãng 3 của thế gốc xếp hẹp; nếu lớp dưới xếp rộng thì thế gốc vang nhất [^persichetti-1961, tr. 138].
- Lớp trên dựa vào sự gần gũi với bồi âm của quãng 3 và quãng 5 lớp dưới. Persichetti kê đủ các hợp âm chồng trưởng – trưởng bằng cách dựng lớp trên lần lượt trên các âm của **vòng quãng 5** bắt đầu từ bè trầm lớp dưới: thứ tự ấy là thứ tự **thuận giảm dần, nghịch tăng dần** [^persichetti-1961, tr. 138].

::grand D5+F#5+A5/G3+C4+E4=D/C E5+G#5+B5/G3+C4+E4=E/C F#5+A#5+C#6/G3+C4+E4=F♯/C | Lớp dưới Đô trưởng sáu – bốn, lớp trên lần lượt Rê, Mi, Fa♯ trưởng: càng xa trên vòng quãng 5 càng nghịch (ví dụ của người biên soạn)

- Tách lớp xa nhau cho âm rung tối đa; phối hai lớp bằng hai màu nhạc cụ tương phản làm rõ hai vùng; tăng đôi quãng thuận cho vững; **một âm chung** giữa hai lớp giúp hoà trộn [^persichetti-1961, tr. 139].
- Hai bè ngoài thuận thì độ vang lan khắp hợp âm. Quãng nhỏ ở trên, quãng rộng ở dưới thì vang hơn [^persichetti-1961, tr. 139]. Xếp hẹp và phối một màu cho ra âm thanh "đục" — vẫn là chất liệu có giá trị [^persichetti-1961, tr. 140].
- Âm thấp nhất dưới Fa trầm của khoá Fa thì đục, trừ khi dùng hợp âm xếp rộng; dịch lên cao thì mất thân, được độ sáng [^persichetti-1961, tr. 141].
- Trưởng – trưởng thuận và vang nhất; kém dần khi có thứ, rồi tăng, rồi giảm. **Thứ trên trưởng giàu hơn trưởng trên thứ**, vì lớp trên được nhiều âm của lớp dưới đỡ [^persichetti-1961, tr. 142]. Hợp âm chồng có hợp âm tăng hay giảm gọi là **hợp âm chồng cromatic** [^persichetti-1961, tr. 144].

## Đối hợp âm
Hướng đi của đa hợp âm do chuyển động giai điệu quyết định. "Đối hợp âm" (counterchords) được dựng từ một khung đối âm hai bè, theo hai cách [^persichetti-1961, tr. 145]:
1. đối âm hai bè làm **hai bè ngoài** của chuỗi hợp âm chồng;
2. đối âm hai bè làm **âm gốc** của hợp âm ba ở hai lớp; các âm của khung đi tự do giữa bè ngoài và bè trong.

Nốt nào của giai điệu cũng có thể là gốc, 3, 5 của hợp âm trưởng, thứ, giảm, tăng, nên số tổ hợp rất lớn và độ căng có thể dao động tuỳ ý [^persichetti-1961, tr. 146].

## Điệu tính và kết cấu
Tiến trình đa hợp âm chạm quá nhiều vùng giọng, nên điệu tính không thể bảo đảm bằng một thang; nó được xác lập bằng **giai điệu chủ đạo** hoặc bằng **lực hút về một hợp âm chủ đạo**. Hợp âm chồng vang nhất đóng vai chủ thuyết phục nhất, và cần dành sự sáng tạo cho chỗ kết nếu muốn một trung tâm vững [^persichetti-1961, tr. 147]. Đoạn đa hợp âm thuần kéo dài làm mệt và bóp nghẹt bè trong; trang trí giai điệu, chen đồng âm hay hai bè, bỏ bớt âm ở một lớp sẽ làm nhẹ kết cấu [^persichetti-1961, tr. 147 – 149].

## Ba lớp trở lên
Các lớp thường dựng trên những bồi âm khác nhau của cùng một chuỗi. Bốn kiểu: lớp trên dựng trên **quãng 3 và quãng 5** của hợp âm dưới; trên **bồi âm** của quãng 3, quãng 5 ấy; trên **bồi âm của bồi âm**; trên bồi âm của các hợp âm khác ngoài hợp âm dưới cùng [^persichetti-1961, tr. 150 – 151]. Khối này đồ sộ nên lớp dưới phải xếp rộng, chồng lấn vài lớp, giãn khoảng ở lớp khác; nó dùng trong thời gian ngắn, chỗ ở tự nhiên là **cao trào** [^persichetti-1961, tr. 152].

## Lớp hợp âm bảy và lớp không phải hợp âm ba
- Hợp âm chồng mà mỗi lớp là hợp âm bảy hiếm dùng dài; thường là nhóm ngắn làm đậm một nét hay một câu hai bè. Có loại chung âm (đồng nhất hơn), có loại không chung âm [^persichetti-1961, tr. 153 – 155].
- Lớp quãng 4 chồng lên nhau chỉ là hợp âm quãng 4 lớn hơn; các lớp đều là quãng 2 thì thành **đa cụm âm**. Hợp âm quãng 2 vang tốt khi làm **lớp trên cùng** của hợp âm chồng nhiều lớp hỗn hợp [^persichetti-1961, tr. 155].
- Ghép hợp âm ba với hợp âm quãng 4: đặt **hợp âm ba ở dưới** cho bè tự do; đặt hợp âm ba ở trên thì kém vang nhưng cho những hợp âm tinh tế [^persichetti-1961, tr. 155 – 156].

## Câu hỏi và bài tập
1. Dựng lớp dưới Đô trưởng sáu – bốn, đặt lần lượt mười một hợp âm trưởng lên trên theo vòng quãng 5 và nghe sự thay đổi độ vang.
2. Viết tám ô đối hợp âm theo cách thứ hai: một đối âm hai bè làm âm gốc của hai lớp.
3. Viết một đoạn chủ yếu là hợp âm chồng cho piano, thỉnh thoảng nghỉ bằng đồng âm (theo bài tập của sách, tr. 159).
`,
  },
  {
    slug: 'persichetti-hop-am-ghep-soi-guong',
    title: 'Hoà âm thế kỷ XX (8) — Hợp âm ghép và hoà âm soi gương',
    category: 'harmony',
    aliases: ['hợp âm ghép', 'compound chord', 'hợp âm soi gương', 'mirror harmony', 'hoà âm phản chiếu', 'hợp âm hoà nhập', 'fused chord'],
    summary: 'Chương 8 Twentieth-Century Harmony: hợp âm ghép từ quãng hỗn hợp — vùng căng, sơ đồ hình học, kim tự tháp, phân biệt với hợp âm thêm nốt; sáu hợp âm "hoà nhập" từ hai hợp âm ba; hoà âm soi gương, thang phản chiếu, gương bàn phím quanh D và G♯.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 8 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]].

## Hợp âm ghép
Ngoài hợp âm chồng quãng 3, quãng 4, quãng 2, còn loại hợp âm dựng bằng **quãng hỗn hợp, không xếp thành lớp**: hợp âm ghép (compound chord). Hợp âm do đảo hợp âm quãng 3, 4, 2 mà ra thì không tính, vì chúng vẫn giữ cảm giác âm gốc. Hợp âm ghép lớn là khối âm vang dội, đặc biệt hiệu quả với dàn nhạc, kèn hơi và organ [^persichetti-1961, tr. 163].

- Quãng có thể sắp theo mọi tổ hợp căng: tạo vùng thuận hay nghịch ở phần dưới, giữa hay trên của hợp âm [^persichetti-1961, tr. 164].
- Có hợp âm ghép mang **sơ đồ bên trong** thay vì sơ đồ căng: chứa đủ 12 âm và 11 quãng xếp đối xứng; xếp xen kẽ quãng có số nửa cung lẻ và chẵn; dựng theo hình chuỗi bồi âm; **kim tự tháp** — quãng nhỏ dần từ dưới lên (có thể đủ 12 loại quãng nhưng không nhất thiết đủ 12 âm) [^persichetti-1961, tr. 164 – 166].
- Kết cấu đa quãng cho phép vùng hoà âm dịch theo mọi hướng; tiến trình hay khi chất liệu đi theo **một kế hoạch độ căng rõ** — ví dụ thuận êm và nghịch nhẹ ở trên, thuận mở và nghịch gắt ở dưới; hoặc nghịch gắt ở trên, thuận mở ở dưới. Âm trên của một quãng gắt đặt cao, neo bằng quãng 5 hay quãng 10 bên dưới, cho thêm căng và sáng [^persichetti-1961, tr. 166 – 167].
- Hợp âm ghép nhỏ năm – sáu âm đặt khéo thì **co giãn** được [^persichetti-1961, tr. 168].

::staff bass C2+G2+D3+A3+C4+E4+F4 | Một hợp âm ghép kiểu "kim tự tháp": quãng 5, 5, 5, 3 thứ, 3 lớn, 2 thứ — quãng thu hẹp dần lên trên (ví dụ của người biên soạn)

**Ghép hay thêm nốt?** Chỉ văn cảnh trả lời: nếu hợp âm có xu hướng mạnh đi trong một khung điệu tính, đó là hợp âm thêm nốt; nếu không, là hợp âm ghép. Hợp âm ghép ít ý nghĩa âm gốc, thường được xử lý như **khối âm**; bất kỳ hợp âm ghép nào cũng có thể được xác lập làm hợp âm trung tâm nhờ độ căng của các hợp âm xung quanh [^persichetti-1961, tr. 168 – 169]. Chuyển động hoà âm đến từ **mật độ dao động** giữa bè cao và bè thấp và mức căng của quãng thay đổi; tốc độ đổi của mật độ và độ thuận – nghịch tạo nên nhịp điệu hoà âm. Chúng hợp làm tuyên bố, điểm đến, câu mở và câu đóng; quãng nhỏ đặt thấp thì thành hợp âm bộ gõ [^persichetti-1961, tr. 169]. Ở kết, hợp âm đến thường được đi trước bởi một khối dày hơn [^persichetti-1961, tr. 170].

## Hợp âm "hoà nhập"
Hợp âm ghép dùng nhiều nhất là **hợp âm ba nốt quãng 4 thêm một quãng 3** (bài 4). Một loại riêng: hợp âm ba có quãng 2 thêm ở bè trầm (bài 5) xếp rộng. Loại khác: **hoà nhập hai hợp âm ba khác loại** sao cho hai âm trùng nhau ở bè giữa, còn lại bốn âm. Chỉ có **sáu hợp âm** như vậy (các tổ hợp khác thành hợp âm bảy hay hợp âm ba); sáu hợp âm này hoán đổi tự do cho nhau, là sáu hợp âm chính của loại; hợp âm phụ của chúng là các hợp âm bảy, chín, mười một có một quãng nghịch gắt làm "chất kết dính". Hoà âm hoà nhập đi trôi chảy ở bốn bè [^persichetti-1961, tr. 170 – 172].

## Hoà âm soi gương
Hợp âm nào (quãng 3, 4, 2, chồng, ghép) cũng soi gương được bằng cách thêm **bên dưới** các quãng đảo đúng đối xứng: nửa này là đảo chính xác, đồng thời của nửa kia [^persichetti-1961, tr. 172]. Âm thanh của nó khác mọi loại, vì soi gương đi ngược tính chất âm học: bồi âm sinh từ dưới lên, không từ giữa ra; "chuỗi âm dưới" chỉ là lý thuyết [^persichetti-1961, tr. 172 – 173].

::staff treble G3+Bb3+D4+F#4+A4=soi_quanh_D C4+E4+G4+Bb4+D5=soi_quanh_G | Hợp âm soi gương: quanh trục D, phía trên quãng 3 lớn và quãng 5 đúng, phía dưới quãng 3 lớn và quãng 5 đúng đi xuống; quanh trục G, quãng 3 nhỏ và quãng 5 đúng hai phía (ví dụ của người biên soạn)

- Soi gương hợp âm quãng 3, 4, 2 thế gốc sinh ra hợp âm lớn hơn cùng loại; soi thể đảo sinh ra hợp âm chồng; soi hợp âm chồng hay ghép sinh ra bản phức tạp hơn [^persichetti-1961, tr. 173].
- Bốn cách viết: âm trục đứng yên hay di chuyển, các bè soi theo hay đi ngược chiều mà thành soi gương [^persichetti-1961, tr. 174]. Có thể soi gương kép.
- **Âm trục không bao giờ nghe như âm gốc**: cả khối nổi lên như một hợp âm riêng, thường mang tính chất của nửa dưới [^persichetti-1961, tr. 175].
- Toàn hệ thống điệu thức diatonic đối xứng: soi gương các điệu thức ra thứ tự màu ngược lại (dorian soi ra chính nó). Mọi thang đều soi được; có thang như Double Harmonic soi ra chính nó. Thang phản chiếu ngầm chứa hoà âm soi gương [^persichetti-1961, tr. 175 – 177].
- Muốn tự do hơn: chỉ soi hai bè ngoài, bè trong đi tự do. Soi gương cũng có thể sinh từ chủ đề: một giai điệu mà một phần là đảo của phần kia [^persichetti-1961, tr. 178].
- **Gương bàn phím**: trục phản chiếu của bàn phím là **D và G♯** — tay trái và tay phải đánh hai hình đối xứng với cùng ngón. Bắt đầu đảo đồng thời từ bất kỳ cặp âm tương ứng nào cũng được gương chính xác [^persichetti-1961, tr. 179].

## Câu hỏi và bài tập
1. Dựng một hợp âm ghép bảy âm theo kế hoạch "gắt ở trên, thuận mở ở dưới", rồi cho nó dịch dần thành một hợp âm ghép khác.
2. Soi gương hợp âm D–F♯–A quanh trục D, rồi quanh trục A; so sánh.
3. Viết một đoạn allegro cho piano theo gương bàn phím quanh D (bài tập 9, tr. 181).
`,
  },
  {
    slug: 'persichetti-huong-hoa-am',
    title: 'Hoà âm thế kỷ XX (9) — Hướng hoà âm: tiến trình, nối hợp âm, nghịch âm, hoà âm song song, kết',
    category: 'harmony',
    aliases: ['hướng hoà âm', 'harmonic direction', 'hoà âm song song Persichetti', 'quãng 5 liên tiếp', 'kết thế kỷ 20', 'kết lừa theo vòng'],
    summary: 'Chương 9 Twentieth-Century Harmony: tiến trình — hướng âm gốc và bè trầm; quãng 5 mạnh, quãng 3 mềm, quãng 2 nhạt, tritone mơ hồ; các lối tiến trình đặc biệt; nối hợp âm cho tươi; nghịch âm tương đối và cách giải quyết; hoà âm song song thực và theo thang, cách làm mới; quãng 5 liên tiếp; kết và kết lừa theo từng vòng.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 9 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]].

## Tiến trình
Một chuỗi hợp âm có hướng rõ thì có chức năng hình thức và gọi là **tiến trình**; đích có thể đạt hay bỏ, điệu tính có thể giữ hay quên [^persichetti-1961, tr. 182]. Trong tiến trình âm gốc có hai yếu tố hướng: **chuyển động của âm gốc** và **vị trí bè trầm** — âm gốc có thể đi xuống khi bè trầm đi lên, và ngược lại.

- Âm gốc cách nhau **quãng 5: mạnh**; **quãng 3: mềm**; **quãng 2: nhạt**; **tritone: mơ hồ** — bốn quãng này bao trùm cả mười hai âm [^persichetti-1961, tr. 184].
- Hướng âm gốc của I – V, I – III, I – II là **lên**, của I – IV, I – VI, I – VII là **xuống**, bất kể thể đảo; tritone không xác định hướng [^persichetti-1961, tr. 184].
- Mỗi vòng bao trọn mười hai âm: chuỗi quãng 5 đúng; quãng 3 lớn, nhỏ xen kẽ; quãng 2 lớn, nhỏ [^persichetti-1961, tr. 184 – 185].
- Hợp âm ba tăng, bảy giảm, quãng 4 đúng, quãng 2 lớn **không có gốc rõ**: chúng làm hợp âm "nối" giữa các loại kết cấu [^persichetti-1961, tr. 185].
- Khi viết không có giai điệu cho trước: chú ý **hai bè ngoài**; phân vân bè trên thì viết trước vài nốt bè trầm, và ngược lại. Thử một chủ đề ở nhiều độ cao — dịch âm vực chút ít cũng đổi nghĩa [^persichetti-1961, tr. 186].

Các lối tiến trình đặc biệt [^persichetti-1961, tr. 186 – 188]: luân phiên hai – ba hợp âm cho đoạn "không khí" hay nhạc gốc dân gian; quay lại hợp âm vừa qua; đọc ngược cả chuỗi về hợp âm đầu; hợp âm bất ngờ ở điểm giải quyết; **lược bỏ** hợp âm được chờ đợi; xáo trộn hay "tháo rời" chuỗi hợp âm của một đoạn đã quen tai.

## Nối hợp âm
Bè ngoài quyết định hướng, bè trong giữ quan hệ. Muốn êm: bè trong đi ít, giữ âm chung; song song làm giảm cá tính của bè, ngược và xiên cho bè độc lập. Nhưng êm quá thì nhạt; các cách giữ cho tươi [^persichetti-1961, tr. 189 – 193]:
- đảo hoặc chuyển quãng chứa âm chung để mở rộng âm vực;
- cho một bè vượt lên trên âm bè trên vừa rời (hoặc xuống dưới âm bè dưới vừa rời) để tạo cú nâng hay hạ;
- đổi quãng 8 vài nốt giai điệu; dịch đột ngột âm vực cả khối;
- nhân quãng 8, quãng 5 hay hoà âm song song để đỡ chỗ giai điệu lên xuống; quãng 5, 8 ẩn cho hoà âm hai bè thêm chắc;
- tăng giảm số bè; cho các bè thay nhau mang giai điệu;
- cho **mọi bè đi nửa cung**: khi đó bất kỳ tổ hợp nghịch nào cũng có hướng và nghĩa — tách xa hai bè chứa quãng gắt nhất.

## Nghịch âm
Mọi tổ hợp đều **tương đối thuận** nếu xung quanh có tổ hợp nghịch hơn; đặt hai hợp âm khác độ căng cạnh nhau mới tạo căng mạnh. Một hợp âm chỉ nghịch so với toàn bộ kế hoạch hoà âm; đôi khi chính hợp âm "thuận" mới là hợp âm bứt rứt. Hợp âm chín nghịch giữa hợp âm ba và bảy, nhưng yên ổn giữa hợp âm 11, 13 và hợp âm chồng [^persichetti-1961, tr. 194 – 195].

> Nghịch âm chỉ tồn tại ở nơi có một chuẩn thuận được ngụ ý hay được nêu ra. [^persichetti-1961, tr. 194]

- Có thể đảo quan hệ: lấy hợp âm nghịch làm chuẩn, và thuận "giải quyết" về nghịch [^persichetti-1961, tr. 195].
- Hợp âm rất nghịch được kiềm bằng mô tiến, giai điệu lấn át, quãng giai điệu đặc trưng; hợp âm nghịch có thể kết câu này và mở câu sau, hoặc nhắc lại mạnh tới mức hết đòi giải quyết [^persichetti-1961, tr. 195].
- Giải quyết: âm nghịch nhất về **âm gần nhất của thang đang dùng**; có thể chống xu hướng ấy bằng đi theo gam ngược chiều, đứng yên, nhảy quãng 8, nhảy sang âm khác của cùng hợp âm, "đóng băng" trong hoà âm song song tới cuối đoạn, hoặc giải quyết ở **bè khác** [^persichetti-1961, tr. 196].
- Nhân đôi âm nghịch với quãng thuận thì dịu; nhân đôi chính âm nghịch thì căng lên — cách giúp hợp âm đơn đứng cạnh hợp âm phức [^persichetti-1961, tr. 197].

## Hoà âm song song
Mọi bè đi cùng chiều. Có **song song thực** (dịch nguyên xi) — dễ cắt đứt quan hệ với giọng, dùng để vào ra phi điệu tính, chuyển tiếp, chủ đề mờ giọng — và **song song theo thang** (quãng đổi theo thang) — giữ điệu tính [^persichetti-1961, tr. 198]. Hoà âm song song là **giai điệu được làm dày**; trong đó quãng 4, 5 trôi như quãng 3, 6, quãng 2, 7 cũng thành ngang [^persichetti-1961, tr. 198]. Xem [[hoa-am-song-song]].

::staff treble C4+E4+G4 D4+F#4+A4 E4+G#4+B4 / C4+E4+G4 D4+F4+A4 E4+G4+B4 | Song song thực (toàn hợp âm trưởng) rồi song song theo thang Đô trưởng (ví dụ của người biên soạn)

Song song kéo dài thì mỏi nhanh; cách làm mới [^persichetti-1961, tr. 199 – 201]: một bè đi ngược dòng; đổi song song theo thang sang song song thực; đổi song song sang cùng chiều; cho âm gốc đi ngược chiều bè; đổi hướng và âm vực; bỏ bớt âm; chen trang trí và mô phỏng; đổi phối khí; nâng hoặc hạ lần lượt từng âm tới khi hợp âm trùng ở bậc khác; xen đoạn không song song; hai lớp song song đi ngược nhau; rải hợp âm chủ đạo thành giai điệu rồi đặt một chuỗi song song mới dưới các nốt ấy.

## Quãng 5 liên tiếp
Quãng 5 "mênh mông, mơ hồ, xa xăm, hoặc trơ trọi và áp đảo" — nguyên liệu quan trọng [^persichetti-1961, tr. 201]. Chúng có ở viết hai bè, ở cuối mẫu mô tiến này và đầu mẫu sau. Cách đẩy chúng ra hậu cảnh [^persichetti-1961, tr. 203 – 205]: đặt quãng 5 liền bậc ở bè thấp, bè khác đi ngược hay xiên; bè đệm linh hoạt về tiết tấu khi quãng 5 ở bè cao; một bè ngược chiều khi quãng 5 đi cromatic; chen quãng khác; hai bè ngoài ngược nhau, quãng 5 ở bè trong; đặt quãng 3 bên dưới quãng 5 ở bè cao; nhảy quãng 5 sang âm cùng hợp âm; bè trong hoa mỹ.

## Kết
Kết là sự tổ chức giai điệu và hoà âm trong thời gian, mang nghĩa nghỉ; chỉ chắc khi **tiết tấu xác nhận** [^persichetti-1961, tr. 206]. Dù hợp âm phức đến đâu, **hai âm gốc cuối** quyết định chất kết: hợp âm áp chót đi "hoàn toàn" về chủ có gốc thấp hơn nó đúng quãng của vòng đang dùng [^persichetti-1961, tr. 206]. Hợp âm cuối rơi phách yếu thì cần nhắc âm, nối, hay trang trí để lấy lại sức; kết cromatic **tránh âm chung** để chủ đứng chắc [^persichetti-1961, tr. 207].

**Kết lừa** đi tới hợp âm có gốc tạo quãng không đặc trưng của vòng đang dùng [^persichetti-1961, tr. 207 – 208]:
- vòng quãng 5: gốc đi **lên quãng 2** (V – VI quen thuộc);
- vòng quãng 3: gốc đi **lên quãng 5**;
- vòng quãng 2: gốc đi **lên quãng 3**.

Còn có kết bằng cách xoá dần mọi bè trừ một, hoặc chỉ còn một nốt bộ gõ không định âm; hợp âm chủ cuối có thể thêm nốt tự do, thêm âm dưới mà không mất nghĩa chủ; hợp âm cuối có thể trùng hợp âm đầu bất kể quan hệ giọng. Kết dùng được mọi loại hoà âm: quãng 3, quãng 4, thêm nốt, quãng 2, hợp âm chồng, ghép, soi gương, toàn diatonic [^persichetti-1961, tr. 208].

## Câu hỏi và bài tập
1. Viết một arioso cho viola và piano trong đó các giọng thoáng qua đi trọn vòng quãng 3 (bài tập 3, tr. 211).
2. Viết thật nhiều nghịch âm cho dàn nhạc thính phòng sao cho kết cấu nghe tương đối thuận.
3. Viết một chuỗi song song tám hợp âm, dùng ít nhất bốn cách làm mới ở trên.
`,
  },
  {
    slug: 'persichetti-thoi-gian-cuong-do',
    title: 'Hoà âm thế kỷ XX (10) — Thời gian và cường độ: nhịp điệu hoà âm, tiết tấu, hoà âm bộ gõ, toàn diatonic',
    category: 'harmony',
    aliases: ['nhịp điệu hoà âm Persichetti', 'isorhythm', 'isomelos', 'hoà âm bộ gõ', 'hoà âm tĩnh', 'pandiatonic', 'white-key fever'],
    summary: 'Chương 10 Twentieth-Century Harmony: nhịp điệu hoà âm, nhịp và tiết tấu, đa tiết tấu, đa nhịp, đảo phách, isorhythm và isomelos; dùng hợp âm như bộ gõ; hoà âm tĩnh và lối viết toàn diatonic; cường độ và dấu lặng như lực sáng tác.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 10 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. Hoà âm chỉ thật sự "nói" khi hợp âm diễn ra trong một hình thức tiết tấu [^persichetti-1961, tr. 212].

## Nhịp điệu hoà âm
Nhịp điệu ngầm do tốc độ đổi hợp âm tạo ra: đổi nhanh thì có dòng ngầm bứt rứt, đổi thưa thì rộng rãi. Tốc độ có thể biến chuỗi đổi hợp âm nhanh thành hợp âm trang trí, và chuỗi hợp âm đơn giản chạy rất nhanh có thể tạo ra âm thanh tương đối phức [^persichetti-1961, tr. 212 – 213]. Xem [[nhip-dieu-hoa-am]].

## Nhịp và tiết tấu
- Nhịp là thước đo của tiết tấu, tự nó không có tiết tấu; phách mạnh, yếu nằm ở nơi câu nhạc đặt nó, bất kể số chỉ nhịp [^persichetti-1961, tr. 213].
- Các nhóm phách bất đối xứng có thể ghi bằng số chỉ nhịp ghép hay vạch chấm. Hai mẫu trường độ khác nhau gặp nhau thỉnh thoảng vẫn trôi mà không hỗn loạn; hai câu tiết tấu dài ngắn khác nhau lặp tới khi trùng lại tổ hợp đầu là **đa tiết tấu**; chia phách khác nhau đều đặn thì ghi nhiều số chỉ nhịp cùng lúc (**đa nhịp**); độc lập hoàn toàn thì vạch nhịp lệch nhau [^persichetti-1961, tr. 214 – 215]. Xem [[da-nhip]].
- Đổi nhịp là cách thường để biến hoá; lời văn xuôi tạo tiết tấu tự do của vạch nhịp. Trọng âm do cao độ, cường độ, màu, trường độ; càng nhiều yếu tố góp vào, trọng âm càng đủ [^persichetti-1961, tr. 215].
- Đảo phách không nhất thiết chống lại nhịp. Giai điệu và hoà âm có thể đảo phách ngược nhau; hợp âm nghịch đảo phách thúc nhịp điệu hoà âm đi nhanh hơn, hợp âm thuận đảo phách kìm lại [^persichetti-1961, tr. 215 – 216]. Xem [[dao-phach]].
- **Isorhythm**: một hay nhiều bè giữ một mẫu tiết tấu, cao độ thay đổi; mẫu dài thì vượt khỏi khả năng nghe ngay. **Isomelos**: lặp một mẫu giai điệu với tiết tấu tự do. Kết hợp hai thứ, cho một mẫu bắt đầu lặp trước mẫu kia [^persichetti-1961, tr. 216 – 218].

## Hoà âm như bộ gõ
Trọng âm sinh từ bất cứ thứ gì gây chú ý: nhấn, trường độ, cao độ, màu, giá trị hoà âm, lặp lại. Tương đương có cao độ của tiếng trống là **nốt lặp**; lặp nốt giai điệu kéo theo lặp hợp âm [^persichetti-1961, tr. 220]. Một hợp âm có thể trả lời một hình trống, hay thay một cú trống cái; hợp âm ghép lớn đột ngột hay cụm âm trầm tạo **sforzando hoà âm**; hợp âm ngoài giọng hay số bè tăng vọt cũng tạo trọng âm hoà âm; quãng nhỏ đặt dưới đáy làm hợp âm "gõ" hơn; nhiều nhạc cụ chơi âm thấp làm mờ cao độ, tăng chất gõ [^persichetti-1961, tr. 221 – 222].

## Hoà âm tĩnh và toàn diatonic
Không có nhịp điệu hoà âm (một hợp âm) tạo hoà âm tĩnh, cảm giác rộng hoặc thư giãn; hữu ích khi muốn tập trung vào motif tiết tấu, hoặc khi lặp hợp âm để báo trước tiết tấu của giai điệu không đệm sắp tới [^persichetti-1961, tr. 223].

**Toàn diatonic** (pandiatonic) là một dạng hoà âm tĩnh: cả thang làm thành một hợp âm quãng 2 tĩnh ngầm; các khối dọc là tổ hợp bất kỳ của các âm trong thang, xếp khoảng cách thay đổi; chuỗi dọc **không có hướng điệu tính**, không có chức năng đặc trưng; đối âm hoạt động mạnh về tiết tấu, khoảng cách hợp âm thất thường [^persichetti-1961, tr. 223]. Xem [[toan-diatonic]].

- Quãng 5 và 10 tính từ bè trầm trôi hơn quãng 3 dày hay quãng 4 cứng đầu; quãng 4 hay ở phần trên hợp âm; quãng 2, 7 giúp sớm đến kết [^persichetti-1961, tr. 224].
- Ít khi dùng một điệu thức cho cả đoạn, nhất là điệu thức không dấu hoá — Persichetti gọi là bệnh **"sốt phím trắng"** (white-key fever) [^persichetti-1961, tr. 224].
- Ba bè: mỗi hợp âm sau thường có ba âm mới, để cả bảy âm lần lượt vào tai; hầu như không tăng đôi, kể cả ở năm, sáu bè; bảy bè thì bảy bậc luôn có mặt. Thang nào (kể cả nhân tạo) cũng dùng được [^persichetti-1961, tr. 224 – 225].

::staff treble G4+C5+D5 E4+A4+B4 F4+G4+C5 D4+E4+A4 B3+F4+G4 C4+D4+E4+G4 | Toàn diatonic trên Đô trưởng: mỗi hợp âm lấy âm mới, không chức năng, kết bằng một khối quãng 2 (ví dụ của người biên soạn)

## Cường độ và dấu lặng
Cường độ là yếu tố sáng tác: một tiến trình nghịch bứt rứt trong pianissimo dễ nổ thành subito forte hợp âm chồng dữ dội, nhưng trong forte lại có thể thoả mãn ngay trong độ căng của nó. Hợp âm rất cromatic hoà dễ hơn khi nhỏ. Crescendo qua một đoạn căng dần cho sức tích tụ; diminuendo qua cùng đoạn ấy cho một loại căng khác [^persichetti-1961, tr. 226].

Dấu lặng làm nhẹ kết cấu, làm rõ motif, giúp các bè mô phỏng không che nhau, tăng đà hoà âm: một hợp âm căng bị cắt bằng im lặng tạo dòng ngầm chờ đợi. Trong một mẫu trọng âm đã thành nếp, **một phách lặng mạnh hơn một phách vang** [^persichetti-1961, tr. 226 – 227].

## Câu hỏi và bài tập
1. Cho oboe chơi nhịp ba và bassoon nhịp bốn cùng lúc, chỉnh tốc độ để vạch nhịp trùng (bài tập 9, tr. 228).
2. Viết một đoạn isorhythm và một đoạn isomelos cho bộ gỗ (bài tập 11 – 12).
3. Viết tám ô toàn diatonic trên một thang không phải Đô trưởng, tránh "sốt phím trắng".
`,
  },
  {
    slug: 'persichetti-trang-tri-bien-doi',
    title: 'Hoà âm thế kỷ XX (11) — Trang trí và biến đổi: âm trang trí, mở rộng, biến âm, pedal, ostinato, đồng âm',
    category: 'harmony',
    aliases: ['âm trang trí Persichetti', 'biến âm hợp âm', 'quan hệ chéo', 'ostinato', 'viết đồng âm', 'unison writing'],
    summary: 'Chương 11 Twentieth-Century Harmony: âm trang trí hoà âm và ngoài hoà âm, lấy âm trang trí từ thang dựng trên gốc hợp âm; hợp âm trang trí; mở rộng và mô phỏng; biến âm đổi màu không đổi chức năng, biến âm thường gặp theo vòng; quan hệ chéo; pedal và ostinato; viết đồng âm.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 11 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]].

## Âm trang trí
Khung dọc là bộ xương; hình giai điệu trang trí đặt lên nó, gồm **âm hoà âm** (nhắc lại, rải hợp âm — không gây cản quãng) và **âm ngoài hoà âm** [^persichetti-1961, tr. 230]. Âm ngoài hoà âm có nhấn khi rơi đúng lúc đổi hợp âm, bất kể vị trí trong ô. Bốn nhóm: âm lướt và âm thêu (vào ra liền bậc); âm đổi (vào liền bậc, ra bằng nhảy); appoggiatura (vào bằng nhảy, ra liền bậc); và nhóm lai do lệch thời gian của âm hợp âm — âm treo, âm đến trước [^persichetti-1961, tr. 231]. Xem [[not-ngoai-hop-am]].

- Có thể nhảy tới và rời âm ngoài hoà âm nếu nó trở thành âm của hợp âm sau, hoặc gợi một hợp âm lớn hơn trên cùng gốc [^persichetti-1961, tr. 232].
- **Âm trang trí lấy từ một thang dựng trên gốc hợp âm**: mỗi gốc được trang trí như chủ của một thang nào đó; thang có thể từ các trung tâm tương phản, tạo đa điệu tính thoáng qua [^persichetti-1961, tr. 232 – 233].
- Âm ngoài hoà âm gom thành hợp âm: hợp âm lướt, hợp âm thêu… Âm trang trí có thể không giải quyết và trở thành âm của hợp âm mới; hai hợp âm có thể "đâm" vào nhau, tạo âm thanh hợp âm chồng ở chỗ gặp [^persichetti-1961, tr. 233 – 234].

## Mở rộng và mô phỏng
Lặp lại là công cụ quan trọng nhất (mô tiến, mô phỏng, biến tấu, ostinato), và lặp nguyên văn là khó nhất — cần cảm thời gian tốt [^persichetti-1961, tr. 235]. Mô tiến đi lên thêm căng, đi xuống thả lỏng; mô tiến làm dịu đoạn rất nghịch. Thu nhỏ trường độ thúc đi, mở rộng trường độ làm chậm. Các cách khác: nới hay thu quãng đặc trưng, đảo, bỏ bớt nốt, lấp thêm trang trí, cắt rời để dành phát triển sau, đổi quãng 8, đi ngược, đảo ngược, biến tiết tấu [^persichetti-1961, tr. 235 – 236]. Mô phỏng là lặp chuyển từ bè này sang bè khác; độ chặt của mô phỏng không phải thước đo giá trị [^persichetti-1961, tr. 236 – 237].

## Biến âm
Tác dụng chính: **đổi màu hoà âm mà không đổi chức năng**; có thể tăng hay giảm nghịch. Biến âm chỉ tồn tại khi có một vùng thang xác định hoặc một hợp âm làm chuẩn: hợp âm G – B♭ – E♭ là hợp âm sáu Napoli (biến âm) ở Rê trưởng, nhưng là hợp âm "không biến" trong Rê Double Harmonic [^persichetti-1961, tr. 237 – 238]. Hạ cromatic làm giảm căng, nâng cromatic làm "nhấc" chuỗi; dùng quá nhiều thì mất liên hệ với chuẩn [^persichetti-1961, tr. 238 – 239].

Biến âm thường gặp lấy từ các giọng gần [^persichetti-1961, tr. 239]:
- giọng trưởng theo vòng quãng 5: dấu hoá của giọng trưởng quãng 5 trên và dưới, của các giọng thứ song song và cùng tên;
- giọng thứ: từ hai nhánh — các giọng liên quan với cả trưởng song song lẫn trưởng cùng tên;
- giọng theo vòng quãng 3: từ các giọng cách quãng 3 lớn, nhỏ trên và dưới;
- thang nhân tạo: từ các vùng mà nó chuyển giọng tới.

**Quan hệ chéo**: một âm ở bè này bị biến âm ở bè khác trong hợp âm sau. Căng trong hoà âm đơn giản, gần như không nghe thấy trong hoà âm rất cromatic, mất hẳn khi mười hai âm được dùng ngang nhau; xảy ra tự nhiên giữa hai hợp âm ba quan hệ quãng 3 cromatic. Âm biến và không biến vang cùng lúc cho vị "hăng"; trong hợp âm ghép trưởng – thứ, âm thanh ấy được xác lập vững [^persichetti-1961, tr. 240].

::staff treble C4+E4+G4 Ab3+C4+Eb4 E4+G#4+B4 C4+E4+G4 | Quan hệ quãng 3 cromatic: E – E♭ và G – G♯ tạo quan hệ chéo tự nhiên (ví dụ của người biên soạn)

## Pedal và ostinato
**Pedal**: một hay vài âm được giữ, nhắc, hay trang trí trong khi các bè khác đi qua chuỗi hợp âm, có cái xa lạ với pedal. Pedal ba thường gợi đa điệu tính; pedal chủ yên, pedal khác bứt rứt; pedal cuối củng cố giọng hay cho hình trang trí thời gian khép lại; đặt pedal quãng 5 hoặc 9 dưới khối hoà âm cho "ánh" [^persichetti-1961, tr. 241 – 242]. **Ostinato**: một đoạn giai điệu rõ nét lặp dai dẳng; sự giản dị của nó làm rõ kết cấu. Ở bè cao nó "cứng đầu", ở bè giữa nó "chen ngang"; nhiều ostinato cùng lúc thì căng tăng [^persichetti-1961, tr. 242].

## Viết đồng âm
Nhiều nhạc cụ cùng một nét, cùng độ cao hoặc cách quãng 8. Giá trị chính trong hoà âm là **tương phản kết cấu**; thành công tuỳ vào canh thời điểm. Dùng cho: mở đầu, khúc chen đồng nội, nét mờ cách nhiều quãng 8, đáp đối, tăng sức dây, rải hợp âm phác hoạ hoà âm, nêu chủ đề không có hoà âm, đối một nét đơn với khối hợp âm, tăng sức đoạn to, âm thanh lắng xuống, chuỗi quãng 8 dồn tới cao trào, phác gam của vùng giọng mới, biến tiết tấu kiểu hát nói [^persichetti-1961, tr. 243 – 245].

## Câu hỏi và bài tập
1. Phối một giai điệu sao cho những nốt được đánh dấu trở thành âm ngoài hoà âm (bài tập theo tr. 246).
2. Viết một bản organ ngắn nổi bật biến âm, dùng cả quan hệ chéo.
3. Đẩy độ căng của một đoạn dàn nhạc bằng một chỗ đồng âm đột ngột (bài tập 18, tr. 247).
`,
  },
  {
    slug: 'persichetti-trung-tam-giong',
    title: 'Hoà âm thế kỷ XX (12) — Trung tâm giọng: điệu tính, chuyển giọng, đa điệu tính, phi điệu tính, hoà âm chuỗi',
    category: 'harmony',
    aliases: ['trung tâm giọng', 'key center', 'chuyển giọng thế kỷ 20', 'đa điệu tính Persichetti', 'chuỗi tự do', 'free serial', 'serial harmony'],
    summary: 'Chương 12 Twentieth-Century Harmony: điệu tính là tương đối, các cách xác lập trung tâm; chuyển giọng — trục chuyển, cromatic, quãng chuyển khác quãng tiến trình, giọng trôi; đa điệu tính — mặt phẳng giọng, thứ tự vang theo vòng quãng 5, tritone; phi điệu tính; hoà âm chuỗi tự do với hợp âm trung tâm.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 12 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]].

## Điệu tính
Nghĩa giọng của một hợp âm đứng riêng là bất định; xung quanh mới quyết định nó thuộc một giọng, dao động giữa nhiều giọng, hay cố ý phi điệu tính. **Điệu tính không tồn tại tuyệt đối**: nó được ngụ ý qua cách phát âm hoà âm và sự căng – giãn quanh một âm hay hợp âm nền; âm nhạc thế kỷ XX dùng nhiều mức độ điệu tính [^persichetti-1961, tr. 248]. Xem [[dieu-tinh]].

- Thường cần ba hợp âm: một trên chủ âm, một dưới chủ âm, và chính chủ; hoà âm có lực hút tritone giúp xác lập [^persichetti-1961, tr. 248]. Theo ba vòng (bài 3): IV – V đỡ I; VI – III đỡ I; VII – II đỡ I; hoặc các bậc ôm tritone [^persichetti-1961, tr. 249].
- Ngoài lực hút của các cột hợp âm, giọng còn được tạo bởi: một hợp âm rất nghịch không chịu thành thuận; một chuỗi hợp âm đơn chống lại sức ép phức tạp; hai giọng hội tụ thành một hợp âm chồng chủ đạo; một nhóm âm quan trọng trở lại ở điểm quyết định; nhạc phi điệu tính "tìm giọng" ở chỗ kết [^persichetti-1961, tr. 249]. Sự **tìm kiếm điệu tính** tự nó có thể là động lực sáng tác [^persichetti-1961, tr. 250].
- Với hoà âm cách đều không gốc, âm nào cũng có thể làm trung tâm nhờ giai điệu nhấn, khoảng cách hay phối khí. Giữa điệu tính và phi điệu tính có vô số mức; điểm một bên dứt, một bên bắt đầu là không xác định. Phi điệu tính một phần có ích ở mở đầu mờ, đoạn chuyển, chuẩn bị chủ đề trở lại [^persichetti-1961, tr. 251].

## Chuyển giọng
- Muốn đổi giọng rõ: xác lập mỗi giọng bằng **ít nhất ba hợp âm** khẳng định trung tâm. Hợp âm trục: diatonic khi thuộc cả hai thang, cromatic khi không thuộc hoặc chỉ thuộc một; trục mơ hồ càng đẹp [^persichetti-1961, tr. 251].
- Chuyển hẳn sang giọng mới: nhắm tới hợp âm khác chủ để có thời gian "ngấm"; tránh kết sớm bằng cách nhảy tới giọng xa rồi đi dần về [^persichetti-1961, tr. 251].
- **Chuyển giọng cromatic**: dịch nguyên hợp âm nửa cung bằng song song đột ngột; chuyển đột ngột làm chủ mới nghe như hợp âm xa, cần tiến trình dài để giữ [^persichetti-1961, tr. 251]. Mọi giọng có chung mười hai âm khi chiều ngang lấn chiều dọc, nên tới được nhanh bằng cromatic [^persichetti-1961, tr. 252].
- Thay đổi mới mẻ khi **quãng chuyển giọng khác quãng đặc trưng của tiến trình gốc**: chuyển quãng 3 trong hoà âm vòng quãng 2, chuyển quãng 2 trong hoà âm vòng quãng 3; kèm một cú nhảy quãng 8 về âm vực thì càng "bay" [^persichetti-1961, tr. 252].
- Đổi giọng liên tục, nhanh tạo cảm giác **điệu tính bị dịch chỗ** hơn là chuyển giọng. Lực hút trung tâm có thể nới dần hay siết dần [^persichetti-1961, tr. 252 – 253]. Chuyển giọng thoáng qua hữu ích trong đoạn tương đối thuận, ít tác dụng trong đoạn rất nghịch — ở đó chuyển giọng dùng để đi từ phần này sang phần khác [^persichetti-1961, tr. 254].

## Đa điệu tính
Hai hay nhiều giọng cùng lúc (hai giọng thì gọi riêng là song điệu tính). Thang của các mặt phẳng giọng có thể giống hay khác, truyền thống hay nhân tạo [^persichetti-1961, tr. 255]. Phải nghĩ trong văn cảnh đa điệu tính chứ không phải "khoác" dấu hoá ngẫu nhiên: mỗi nét giữ cá tính, nhưng tổng hoà âm phải có hướng, kế hoạch căng và kết cấu nhất quán; thường vẫn nghe một **hợp âm chủ chồng tổng thể từ bè trầm** [^persichetti-1961, tr. 255]. Xem [[da-dieu-tinh]].

- Đa điệu tính chỉ hiệu quả khi mỗi mặt phẳng giữ trong một thang rõ; dịch điệu thức bằng biến âm sẽ làm đục hay chỉ còn hợp âm chồng lẻ tẻ. Đưa từng giọng vào lần lượt; **các bậc tạo tritone phải sớm xuất hiện**, nếu không đa điệu tính không vận hành (một nét Fa trưởng thiếu B♭, E chồng với nét Đô trưởng thiếu F, B thì mơ hồ) [^persichetti-1961, tr. 256 – 257].
- Các giọng đặt quá gần nhau thì đục; phải chừa chỗ cho bè hoạt động [^persichetti-1961, tr. 257].
- Thứ tự từ thuận tới nghịch khi chồng hai giọng trưởng: cách nhau quãng 5 đúng, 9 lớn, 6 lớn, 3 lớn, 7 lớn… theo vòng quãng 5; điểm vang cao nhất nằm ở giữa thứ tự. **Tritone là quan hệ đa điệu tính hàng đầu** vì vang nhất trong các tổ hợp nghịch [^persichetti-1961, tr. 257 – 258]. Giọng thứ ở dưới cho ít tổ hợp thuận hơn. Ba giọng trở lên: khoảng lớn hơn nằm giữa các giọng dưới; giọng trên cùng được điều chỉnh theo quan hệ vang với giọng dưới cùng [^persichetti-1961, tr. 258].

::grand C5+E5+G5/F#3+A#3+C#4=C/F♯ G5+B5+D6/C3+E3+G3=G/C | Hai hợp âm chủ chồng của song điệu tính: quan hệ tritone (nghịch mà vang) và quan hệ quãng 5 (thuận nhất) (ví dụ của người biên soạn)

- Kết cấu lướt giữa các "cột" hợp âm chồng vang thường dày; giảm bằng bỏ âm, tăng đôi quãng mạnh, trang trí, chen đồng âm, hai bè, ostinato. Đa điệu tính có thể là hợp âm (nhiều mặt phẳng hoà âm) hay **ngang** (mô phỏng; canon thực ở quãng khác quãng 8); khối hợp âm chống một nét đơn ở giọng tương phản; pedal dịch chuyển làm dịu; thang soi gương cho đa điệu tính cân bằng [^persichetti-1961, tr. 258 – 260].

## Phi điệu tính
Từ dùng lỏng cho nhạc mà cảm giác giọng bị làm yếu hay mất, và nhạc chưa từng có lực hút giọng. Đó là tổ chức âm thanh không xác lập giọng bằng quan hệ âm gốc; nhưng tổ hợp âm hay vùng âm vẫn có thể tạo "tương đương điệu tính". Lực trung tâm thường là giai điệu; cú pháp ưa hợp âm nghịch, tổ chức dựa trên độ căng quãng thay đổi. Các yếu tố gắn chặt bằng tập trung motif cao độ; tiết tấu bất đối xứng, nhịp bất thường [^persichetti-1961, tr. 261 – 262]. Xem [[phi-dieu-tinh]].

## Hoà âm chuỗi
Kỹ thuật mười hai âm chủ yếu là thực hành **phức điệu**; khi hoà âm được một ý ngang thống nhất điều tiết (mười hai âm hay không), kết cấu là **chuỗi**. Hợp âm sinh từ đó ít hoặc không có chức năng thang [^persichetti-1961, tr. 262]. Persichetti nghiêng về một quá trình sáng tác linh hoạt dung hợp cả tài nguyên điệu tính lẫn phi điệu tính [^persichetti-1961, tr. 262]. Xem [[ky-thuat-12-am]].

Trong lối **chuỗi tự do**, một dãy âm bất kỳ (không nhất thiết khác nhau) có thể dùng ở nhiều bè cùng lúc, sinh hoà âm từ chuyển động ngang, hoặc chia giữa các bè, sinh hoà âm dọc [^persichetti-1961, tr. 263]. Có thể dựng một "điệu tính" [^persichetti-1961, tr. 264 – 266]:
- ba âm trở lên liên tiếp của dãy làm **hợp âm trung tâm**;
- dịch hợp âm trung tâm lên trên âm cao nhất của nó → hợp âm kết phía trên; soi gương hợp âm trung tâm → hợp âm chính phía dưới; đổi quãng 8 cho ra thể đảo và thêm bộ hợp âm chính; mọi tổ hợp khác là hoà âm phụ;
- đổi thứ tự hợp âm để tăng lực hút về hợp âm trung tâm; dịch giọng của dãy tạo "chuyển giọng";
- hợp âm trùng nhau giữa hai dạng của dãy (gốc, ngược, đảo, đảo ngược) làm **trục** sang vùng mới; vùng gần là dạng đảo hay đảo ngược bắt đầu cách quãng 5;
- trang trí hợp âm bằng âm ngoài hoà âm, âm hoà âm, hay âm sinh từ hai dạng của dãy chạy cùng lúc.

Dãy mười hai âm khác nhau cho chuỗi hợp âm phủ cả trường mười hai âm, và việc hoàn tất dãy có thể tạo ra một trung tâm mạnh. Persichetti cảnh báo: kỹ thuật chuỗi tự nó không bảo đảm giao tiếp; tránh viết máy móc thì sức thống nhất của chuỗi cho rất nhiều biến hoá hoà âm [^persichetti-1961, tr. 267].

## Câu hỏi và bài tập
1. Viết một đoạn bộ gỗ có giọng gốc Mi♭ với điểm nhấn tritone vào La trưởng (bài tập 1, tr. 269).
2. Chồng hai nét Đô trưởng và Fa♯ trưởng, cho các bậc tạo tritone của mỗi giọng xuất hiện trong hai ô đầu.
3. Chọn một dãy năm âm, dựng hợp âm trung tâm, hợp âm kết phía trên và hợp âm soi gương phía dưới, rồi viết một câu kết.
`,
  },
  {
    slug: 'persichetti-tong-hop',
    title: 'Hoà âm thế kỷ XX (13) — Tổng hợp hoà âm: chuyển giữa các kết cấu, chủ đề và hình thức',
    category: 'harmony',
    aliases: ['tổng hợp hoà âm', 'harmonic synthesis', 'chuyển kết cấu hoà âm', 'Persichetti chủ đề và hình thức'],
    summary: 'Chương 13 Twentieth-Century Harmony: phối nhiều ngôn ngữ hoà âm; chuyển từ kết cấu này sang kết cấu khác bằng đảo quãng đặc trưng, đồng âm, âm trang trí, hợp âm cách đều, rút cụm âm; ý chủ đề, "mơ hồ một cách chắc chắn", hình thức và phong cách.',
    refs: PERSICHETTI_REFS,
    body: `
Bài cuối bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. Viết hoà âm đương đại thường là quá trình **tổng hợp**: đặt chuẩn nghịch ở nhiều mức, chọn một ngôn ngữ hay liên minh nhiều ngôn ngữ, hoà các điệu tính, đặt cạnh nhau mặt điệu tính và phi điệu tính. Chấp nhận lối này không loại trừ lối kia: một fugue có thể trên cantus firmus, một thánh ca đặt dưới một dãy âm [^persichetti-1961, tr. 271].

## Chuyển giữa các kết cấu
Kết hợp dọc các kết cấu sinh ra hợp âm chồng và hợp âm ghép; kết hợp nối tiếp đòi những chất liệu chuyển tiếp. Nguyên tắc chính: **quãng đặc trưng của loại hoà âm này có trong mọi loại khác**, và có thể đưa lên bề mặt bằng đảo quãng [^persichetti-1961, tr. 271 – 272]:
- để hợp âm quãng 4 vào, cho quãng 4 nổi trong hợp âm quãng 3 — đảo quãng 5 của hợp âm ba;
- trong hợp âm bảy, đảo quãng 5 tính từ gốc hay từ quãng 3 để dẫn vào hoà âm quãng 4;
- xếp hợp âm bảy đảo sao cho quãng 2 nổi, mở đường cho hoà âm quãng 2;
- trong hợp âm chín, đảo quãng 7 tính từ gốc hay quãng 3 để gợi kết cấu quãng 2 của cụm âm.

::staff treble G4+C5+E5 G4+C5+D5 G4+C5+F5 | Từ hợp âm ba sáu – bốn (quãng 4 G–C đã nổi) sang hợp âm quãng 4 qua một hợp âm ghép (ví dụ của người biên soạn)

Quãng đặc trưng của loại mới nên được giới thiệu **sớm**. Các công cụ khác [^persichetti-1961, tr. 272 – 275]:
- tăng đôi một âm có màu (quãng 3 lớn, quãng 7 lớn, âm ngoài hoà âm nổi bật) gợi tới đồng âm; **đồng âm** là cửa cho bất kỳ kết cấu nào vào;
- âm trang trí, nhất là appoggiatura và âm treo, chuẩn bị kết cấu quãng; hợp âm rải cho phép xen hợp âm khác loại;
- nhấn các nốt giai điệu phác ra quãng đặc trưng của vùng mới; rút bớt nốt của một motif để chỉ còn âm của loại hợp âm mới;
- **hợp âm cách đều** không có gốc, không cưỡng lại, đi cromatic dệt chuyển từ kết cấu này sang kết cấu khác; quan hệ tritone thô hay quãng 5 ẩn nổi bật làm phân tán sự chú ý khỏi phép biến hình; mô tiến lái nhiều loại hợp âm đi xa;
- **rút dần âm của cụm âm** tới khi còn lại hợp âm gợi loại hoà âm tiếp theo — và ngược lại;
- đến hợp âm chồng bằng hợp âm ba nhân đôi hoặc biến đổi cromatic; rời hợp âm chồng bằng cách cho một lớp "bay hơi";
- các lớp của chuỗi hợp âm chồng có điệu tính gặp nhau ở chỗ mỗi lớp đi trong một vùng giọng riêng ổn định: đa hợp âm thành đa điệu tính; vào phi điệu tính qua lối viết hoa mỹ, khi các nét được tự do cromatic tới mức hoà âm ngụ ý tan đi.

## Chủ đề
Một hạt nhân giai điệu hai âm trở lên có thể sinh ra cả tác phẩm. Quá trình chỉ có nghĩa khi chủ đề **nhận ra được**, vì liên tục và mạch lạc đến từ việc tai giữ được motif. Tốc độ, cường độ, chất liệu phải là phần của ý chủ đề: một nốt Đô giữa pianissimo do viola độc tấu và cùng nốt ấy staccato, to, do ba trombone có hai thứ năng lượng khác nhau [^persichetti-1961, tr. 275 – 276]. Động lực có thể đến từ một thang, một dãy âm ngoài thang, một hợp âm, một âm lặp mãi trước khi tìm được âm để "cất cánh", đường nét của một hợp âm phức đang cố rũ bỏ âm nghịch…

Phải kiểm kê kỹ các mặt giai điệu, tiết tấu, hoà âm của ý chủ đề, vì về sau chúng thường được dùng độc lập. Ý chủ đề có thể cố ý bí ẩn, mơ hồ, trọn vẹn hay trung tính, nhưng — câu của Persichetti — phải **"mơ hồ một cách chắc chắn, chứ không chắc chắn một cách mơ hồ"** ("positively vague, not vaguely positive") [^persichetti-1961, tr. 276].

## Hình thức và phong cách
Hình thức và phong cách không tách rời: hình thức là tương đương bên ngoài của bản năng, khiếu thẩm mỹ và phong cách. Đưa chất liệu khác biệt vào tác phẩm là quyết định của sự nhạy cảm; yếu tố hình thức xung đột thường cho ra những hình thức tự do, nhưng xung lực đi chệch khỏi điều dự đoán phải đồng thời tạo **cảm giác tất yếu** [^persichetti-1961, tr. 276]. Ý tưởng định hình có thể nảy ra trong lúc viết: chuỗi hợp âm đơn chống lại sức ép nghịch, hợp âm nghịch không chịu thành thuận, làm sáng hoà âm khi nốt chậm lại và tối đi khi nốt nhanh lên… [^persichetti-1961, tr. 277].

Sách khép lại bằng chính câu mở đầu: âm nào cũng có thể nối hay vang cùng âm nào, nhóm âm nào cũng có thể theo sau nhóm nào; thành bại tuỳ vào điều kiện văn cảnh, hình thức, và tay nghề cùng tâm hồn người soạn nhạc [^persichetti-1961, tr. 277].

## Câu hỏi và bài tập
1. Dệt một đoạn organ đi qua hoà âm quãng 3, quãng 4, quãng 2, hợp âm chồng và hợp âm ghép (bài tập 3, tr. 279).
2. Lấy một hợp âm bảy, đảo để quãng 2 nổi lên, rồi dẫn sang một cụm âm và rút cụm âm ấy thành hợp âm quãng 4.
3. Chọn một ý chủ đề ba – bốn nốt, kê riêng mặt giai điệu, tiết tấu, hoà âm của nó, và viết ba biến dạng mỗi mặt một cái.
`,
  },
]
