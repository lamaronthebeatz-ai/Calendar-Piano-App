import type { Article } from '../wiki'
import { LEVINE_REF } from './levine-refs'

export const jazzLevineA: Article[] = [
  {
    slug: 'ngu-cung-trong-jazz',
    title: 'Âm giai ngũ cung trong jazz',
    category: 'jazz',
    aliases: ['pentatonic jazz', 'ngũ cung jazz', 'V pentatonic', 'ngũ cung bậc V', 'In-sen', 'âm giai In-sen', 'ngũ cung trên hợp âm alt', 'minor pentatonic jazz', 'pentatonic trên Giant Steps'],
    summary: 'Âm giai năm nốt 1 – 2 – 3 – 5 – 6 trong jazz: ba âm giai ngũ cung có sẵn trong mỗi giọng trưởng (I, IV, V) và nên chơi cái nào trên ii, V, I; vì sao ngũ cung bậc V chơi được trên cả ii – V – I; ngũ cung bậc II trên hợp âm maj7 (âm hưởng Lydian), ngũ cung bậc IV trên hợp âm thứ giai điệu, mẹo "cách một tritone" trên hợp âm alt; âm giai In-sen; ngũ cung thứ và âm giai blues; cách tập theo nhóm bốn nốt.',
    refs: [LEVINE_REF],
    body: `
Thử ngay đi: tay trái bấm Dm7, tay phải chạy G – A – B – D – E rồi quay xuống. Giờ đổi tay trái sang G7, rồi Cmaj7, tay phải vẫn năm nốt ấy. Không có nốt nào "chỏi". Năm nốt đó là **âm giai ngũ cung Sol**, và chương này sẽ chỉ cho bạn vì sao một âm giai nhỏ bé như vậy lại dùng được ở khắp nơi.

## Âm giai ngũ cung là gì
Có hàng nghìn cách xếp năm nốt, nhưng khi dân jazz nói "pentatonic" họ hầu như luôn muốn nói âm giai trong hình dưới. Có ba cách nhìn nó, chọn cách nào dễ nhớ nhất với bạn:
- Nó là bậc **1 – 2 – 3 – 5 – 6** của âm giai trưởng.
- Nó là âm giai trưởng **bỏ bậc 4 và bậc 7** (ở Đô: bỏ F và B).
- Theo quãng: **cung – cung – quãng 3 thứ – cung** (rồi quãng 3 thứ nữa để về chủ âm).

::staff treble C4 D4 E4 G4 A4 C5 | Ngũ cung Đô: C – D – E – G – A. Không có nửa cung nào

Vì chỉ có cung và quãng 3 thứ, không có nửa cung, ngũ cung nghe **thoáng**: ít tính cromatic, nhiều "khoảng trời". Thời swing, Art Tatum, Teddy Wilson, Lester Young hay chạy ngũ cung; thời bebop thì ít hẳn; đầu thập niên 1960, John Coltrane và McCoy Tyner đưa nó trở lại và từ đó nó thành món ăn hằng ngày của jazz hiện đại.

## Các điệu thức và ngũ cung thứ
Như mọi âm giai, ngũ cung có điệu thức: bắt đầu từ mỗi nốt trong năm nốt là một điệu thức. Điệu thức bắt đầu từ bậc 5 (nốt thứ năm) được chơi nhiều tới mức có tên riêng: **ngũ cung thứ** (minor pentatonic). Ngũ cung thứ La có đúng năm nốt của ngũ cung Đô, chỉ đổi điểm xuất phát.

::staff treble A3 C4 D4 E4 G4 A4 | Ngũ cung thứ La = ngũ cung Đô bắt đầu từ A

Ngũ cung thứ là họ hàng ruột của [[am-giai-blues|âm giai blues]]: thêm một nốt lướt giữa bậc 4 và 5 là thành âm giai blues (xem cuối chương).

## Ba âm giai ngũ cung trên ii – V – I
Trong mỗi giọng trưởng có sẵn **ba** âm giai ngũ cung. Ở Đô trưởng đó là ngũ cung **Đô, Fa và Sol**, tức dựng trên bậc I, IV và V. Ta gọi tắt là ngũ cung I, IV, V. (Lưu ý: đây là cách gọi để học, không phải thuật ngữ chuẩn. Nếu bạn nói với tay bass "tôi đang chơi ngũ cung IV", anh ta sẽ nghĩ bạn là thiên tài, hoặc hơi dở hơi — khả năng thứ hai cao hơn.)

::staff treble C4 D4 E4 G4 A4 / F4 G4 A4 C5 D5 / G4 A4 B4 D5 E5 | Ba ngũ cung có sẵn trong Đô trưởng: I (Đô), IV (Fa), V (Sol)

Giờ thử từng cái trên từng hợp âm của ii – V – I ở Đô. Tay trái giữ hợp âm, tay phải chạy âm giai, và **nghe**:
- **Trên Dm7 (ii):** cả ba đều nghe ổn. Ngũ cung V (Sol) thú vị nhất vì có B và E, tức nốt **6 và 9** của Dm7.
- **Trên G7 (V):** ngũ cung I và IV đều chứa C, nốt tránh của G7 (xem [[not-tranh-va-quang-nghich]]). Không phải là cấm, nhưng mỗi âm giai mang sẵn một chỗ chỏi. Ngũ cung V thì **không có nốt tránh** nào, lại có A và E là **9 và 13** của G7.
- **Trên Cmaj7 (I):** ngũ cung IV có F, nốt tránh của Cmaj7. Ngũ cung I và V đều êm; ngũ cung V giàu màu hơn vì có B và D, tức **7 và 9**.

::grand G4+B4+D5+E5/D3+C4=Dm7 G4+A4+B4+E5/G2+F3=G7 G4+B4+D5+E5/C3+B3=Cmaj7 | Bốn nốt của ngũ cung Sol đặt trên ii – V – I ở Đô: Dm7 (thêm 6 và 9), G7 (9, 13), Cmaj7 (7, 9) — không nốt nào phải tránh

Bạn để ý chưa: **ngũ cung V nghe êm trên cả ba hợp âm**. Điều này làm việc chơi trên ii – V – I đơn giản đi rất nhiều. Tóm lại thành bốn quy tắc:
1. Trên hợp âm **ii**: chơi ngũ cung I, IV hoặc V.
2. Trên hợp âm **V**: chơi ngũ cung V.
3. Trên hợp âm **I**: chơi ngũ cung I hoặc V.
4. Trên **cả câu ii – V – I**: chơi ngũ cung V.

Hình dưới là một câu bốn ô chỉ dùng ngũ cung Sol trên ii – V – I ở Đô. Chơi nó, rồi tự đặt câu của bạn.

::ex lv-pent-251 | Một câu chỉ dùng năm nốt của ngũ cung Sol trên Dm7 – G7 – Cmaj7 (Lamar soạn)

## Vì sao ngũ cung V "không bao giờ sai"
Nốt tránh của ii – V – I ở Đô là gì?
- Trên Dm7: không có nốt tránh.
- Trên G7: nốt tránh là C.
- Trên Cmaj7: nốt tránh là F.

Lấy âm giai Đô trưởng, bỏ C và F, còn lại năm nốt D – E – G – A – B. Xếp lại: **G – A – B – D – E**. Chính là ngũ cung Sol! Nói gọn: **ngũ cung V là âm giai trưởng bỏ đi các nốt tránh.** Vì thế bạn chơi nó được trên mọi hợp âm của giọng Đô: Cmaj7, Dm7, Esus♭9, Fmaj7♯4, G7, Gsus, Bø.

## Một ngũ cung, nhiều giọng
Mỗi ngũ cung thuộc về **ba** giọng trưởng: ngũ cung Đô là I trong Đô trưởng, IV trong Sol trưởng, V trong Fa trưởng. Nên bạn thường chơi được **cùng một ngũ cung** trên hai hợp âm liền nhau thuộc hai giọng khác nhau. Chỗ hay gặp nhất: hai hợp âm ii cách nhau một cung. Ví dụ ngũ cung Sol giáng (G♭ – A♭ – B♭ – D♭ – E♭) trên E♭m7 rồi D♭m7: Sol giáng là ngũ cung IV của Rê giáng trưởng (giọng của E♭m7) và ngũ cung V của Đô giáng trưởng (giọng của D♭m7). Một ý giai điệu duy nhất, kéo căng qua hai giọng — Joe Henderson làm đúng điều này (Levine dẫn solo của ông trong "Pretty Eyes" của Horace Silver).

## Ngũ cung II trên hợp âm maj7
Chơi ngũ cung Mi (E – F♯ – G♯ – B – C♯) trên Dmaj7: nốt G♯ biến Dmaj7 thành **Dmaj7♯4**, tức màu Lydian. Ngũ cung này dựng trên bậc 2 của hợp âm nên ta gọi là **ngũ cung II**. Bạn không cần đợi thấy ♯4 trong ký hiệu: cũng như có thể nâng bậc 4 trên mọi hợp âm maj7, bạn có thể chơi ngũ cung II trên mọi hợp âm maj7.

::grand D5+E5+F#5+A5/C3+E3+B3=Cmaj7♯11 | Bốn nốt của ngũ cung Rê (D – E – F♯ – A) trên Cmaj7: 9, 3, ♯11, 13 — màu Lydian

::staff treble D4 E4 F#4 A4 B4 D5 | Ngũ cung II trên Cmaj7 = ngũ cung Rê

Mẹo đi kèm, khi bạn đã học [[thay-the-tritone]]: nếu thay D7 bằng A♭7 (cách một tritone), bạn chơi được **ngũ cung A♭** trên D7.

## Ngũ cung IV trên hợp âm thứ giai điệu
Trong âm giai [[dieu-thuc-thu-giai-dieu|thứ giai điệu]] chỉ có **một** ngũ cung có sẵn, dựng trên **bậc 4**. Ở Đô thứ giai điệu (C – D – E♭ – F – G – A – B) đó là ngũ cung Fa: F – G – A – C – D. Nó nghe hơi lạ lúc đầu: ngũ cung có âm hưởng rất "trưởng", đặt lên các hợp âm thứ giai điệu vốn đầy màu sắc thì những điều lạ (và đẹp) xảy ra. Không thích thì cũng không sao, gu mỗi người một khác — và gu thì thay đổi.

Hợp âm được dùng ngũ cung nhiều nhất trong họ thứ giai điệu là [[hop-am-at-bien-hoa|hợp âm alt]]. G7alt là điệu thức 7 của **La giáng thứ giai điệu**; ngũ cung dựng trên bậc 4 của La giáng thứ giai điệu là **ngũ cung Rê giáng**. Khỏi tính toán, nhớ câu này: **trên hợp âm alt, chơi ngũ cung cách gốc một tritone.**

::grand Db5+Eb5+F5+Ab5+Bb5/G2+F3+B3=G7alt | Ngũ cung Rê giáng trên G7alt: D♭ = ♭5, E♭ = ♯5, F = ♭7, A♭ = ♭9, B♭ = ♯9 — toàn nốt biến hoá

Âm giai [[am-giai-doi-xung-jazz|giảm và toàn cung]] không chứa âm giai ngũ cung nào.

## Âm giai In-sen và các âm giai năm nốt khác
Một âm giai năm nốt khác hay được chơi là **In-sen** (tên Nhật), được Coltrane và McCoy Tyner đưa vào jazz. Cấu trúc lạ: **nửa cung – quãng 3 trưởng – cung – quãng 3 thứ** (rồi một cung để về chủ âm).

::staff treble E4 F4 A4 B4 D5 E5 | In-sen trên Mi: E – F – A – B – D

In-sen Mi nằm trọn trong Đô trưởng (dựng từ bậc 3) và cả trong Rê thứ giai điệu (dựng từ bậc 2). Nó hợp nhất với [[hop-am-sus-jazz|hợp âm sus♭9]]: E – F – A – B – D trên Esus♭9 cho đúng gốc, ♭9, 4, 5 và ♭7.

## Ngũ cung thứ và âm giai blues
Ngũ cung thứ và âm giai blues gần như dùng thay cho nhau được. Ngũ cung thứ Đô là C – E♭ – F – G – B♭; âm giai blues Đô thêm F♯ (G♭), một nốt lướt cromatic giữa F và G. Trên C7♯9 cả hai đều "bluesy" ngay lập tức.

::staff treble C4 Eb4 F4 G4 Bb4 C5 / C4 Eb4 F4 F#4 G4 Bb4 C5 | Ngũ cung thứ Đô, rồi âm giai blues Đô: chỉ khác nốt F♯

## Bài có giai điệu ngũ cung
Levine nêu vài bài dựng giai điệu trên ngũ cung: "The Pennywhistle Call" (Gary Bartz), "You Are There" (Johnny Mandel), "Dizzy Atmosphere" (Dizzy Gillespie); 15 ô đầu "Black Narcissus" (Joe Henderson) dựng trên hai âm giai ngũ cung; sáu nốt mở đầu "Sonnymoon For Two" (Sonny Rollins) rải ngũ cung thứ Si giáng. Nghe các bản thu này là cách nhanh nhất để tai bạn "bắt" được âm hưởng ngũ cung.

## Tập ngũ cung thế nào
Phần lớn nhạc ta chơi ở 4/4, nên âm giai năm nốt thường được tập theo **nhóm bốn nốt**: 1-2-3-5, 2-3-5-6, 3-5-6-1, 5-6-1-2… lên rồi xuống.

::staff treble F4 G4 A4 C5 / G4 A4 C5 D5 / A4 C5 D5 F5 / C5 D5 F5 G5 | Ngũ cung Fa theo nhóm bốn nốt đi lên

Mẫu như vậy bạn phải thuộc tới mức tay tự chạy, nhưng tập mãi thì chán. Thuộc rồi thì đổi tiết tấu cho nó swing hơn, hoặc nhảy cóc qua nốt (1-3-2-5, 2-5-3-6…). Tự nghĩ mẫu của bạn. Chỉ có một luật: **mẫu nào nghe không ra nhạc thì đừng tốn thời gian tập.**

Một lời cảnh báo cuối: cả bài solo toàn ngũ cung thì rất nhàm. Trộn ngũ cung vào lối "chơi theo hợp âm" bình thường, nó sẽ cho bài solo của bạn **cấu trúc** và cảm giác **thoáng đãng**. Muốn thử trên một bài khó, xem cách ba ngũ cung V (F♯, Rê, B♭) phủ trọn "Giant Steps" ở [[phan-tich-giant-steps]]; nhưng để bắt đầu thì chọn bài dễ hơn như "Just Friends" hay "Tune Up".

## Câu hỏi và bài tập
1. Viết ba ngũ cung I, IV, V của Si giáng trưởng. Cái nào chơi được trên cả Cm7 – F7 – B♭maj7?
2. Trên E7alt, bạn chơi ngũ cung nào? Kiểm từng nốt xem nó là nốt biến hoá gì của E7.
3. Chơi ii – V – I ở 12 giọng theo vòng quãng 5; tay phải chỉ dùng ngũ cung V, theo nhóm bốn nốt.
4. Trên một vamp Esus♭9, ứng tác hai phút chỉ bằng âm giai In-sen Mi.
`,
  },
  {
    slug: 'luyen-am-giai-jazz',
    title: 'Luyện âm giai cho người chơi jazz',
    category: 'jazz',
    aliases: ['cách tập âm giai jazz', 'how to practice scales', 'luyện âm giai', 'mẫu âm giai', 'scale patterns', 'tập quãng 3 trên âm giai', 'root bias', 'thiên vị nốt gốc'],
    summary: 'Chạy âm giai lên xuống từ chủ âm như lối cổ điển không làm bạn ứng tác giỏi hơn. Chương này đưa cách tập để nhìn âm giai như một "bể nốt": đổi chiều trên mọi nốt (Ionian lên, Dorian xuống…), mỗi ngày bắt đầu một nốt khác, rồi chia âm giai thành quãng 3, quãng 4, nhóm bốn nốt, nốt bao vây — trên âm giai trưởng, thứ giai điệu, giảm và toàn cung, ở cả 12 giọng.',
    refs: [LEVINE_REF],
    body: `
Bạn đã biết các âm giai. Vậy tập chúng thế nào? Chạy lên chạy xuống vô tâm có thể tốt cho ngón, nhưng **không** làm bạn thành người chơi jazz giỏi hơn. Trước hết, chép câu này lên đầu cuốn sổ tập:

> **Tập mọi thứ ở mọi giọng.**

Có thể không nhiều bài viết ở D♭, G♭ hay B, nhưng ii – V – I ở các giọng đó thì có khắp nơi. Và có những bài rất hay ở các giọng "khó" ấy: "Lush Life" và "Body And Soul" ở D♭, "Giant Steps" đi qua B.

## Bệnh "thiên vị nốt gốc"
Lối tập cổ điển — chạy một hai quãng tám từ chủ âm lên rồi quay về chủ âm — chỉ dùng một phần nhỏ khả năng của âm giai. Lúc nào cũng bắt đầu ở gốc, đổi chiều ở gốc, kết thúc ở gốc. Kết quả: người mới chơi ii – V – I thường nghe như thế này — mỗi hợp âm lại bắt đầu từ nốt gốc của nó.

::staff treble D4 E4 F4 G4 / G4 A4 B4 C5 / C5 D5 E5 F5 | Ai cũng từng chơi thế này: Dm7 từ D, G7 từ G, Cmaj7 từ C. Không sai, nhưng nhạc đâu phải lúc nào cũng bắt đầu từ gốc

Cách tốt hơn: **đi lên Ionian, đi xuống Dorian, đi lên Phrygian, đi xuống Lydian**, và cứ thế. Như vậy bạn bắt đầu trên mỗi nốt, đổi chiều trên mỗi nốt và kết thúc trên mỗi nốt của Đô trưởng. Mọi nốt trở nên quan trọng ngang nhau, và khi solo, **tai** bạn chọn nốt, chứ không phải ngón tay lao về nốt gốc theo thói quen.

::staff treble C4 D4 E4 F4 G4 A4 B4 C5 / D5 C5 B4 A4 G4 F4 E4 D4 / E4 F4 G4 A4 B4 C5 D5 E5 / F5 E5 D5 C5 B4 A4 G4 F4 | Đô trưởng: Ionian lên, Dorian xuống, Phrygian lên, Lydian xuống… (tiếp tục tới Locrian)

Đó mới là một nửa. Đảo lại: **xuống Ionian, lên Dorian, xuống Phrygian, lên Lydian**… Tập y như vậy trên thứ giai điệu (bảy điệu thức của Đô thứ giai điệu), trên âm giai giảm và toàn cung.

Tập thế mỗi ngày thì bạn vẫn bắt đầu Đô trưởng từ C mỗi ngày. Đẩy xa hơn: hôm nay bắt đầu từ C, mai từ D, ngày kia từ E… Nghe có vẻ cực đoan? Hãy nhớ mục tiêu: **gỡ bỏ thói quen thiên vị nốt gốc** đã ăn sâu sau nhiều năm.

## Có nên viết các mẫu này ra cả 12 giọng?
Đừng. Viết ra thì bạn sẽ chỉ **đọc** chúng. Mục tiêu là **thuộc vào người**: luyện tai và tay, không phải mắt. Nhạc cổ điển là nhạc của cả tai lẫn mắt; jazz gần như hoàn toàn là nhạc của tai. Người chơi jazz chơi hay nhất khi không phải đọc. Charlie Parker được truyền tụng với lời khuyên đại ý "học thuộc hợp âm, rồi quên chúng đi" (câu này được nhắc rất nhiều, kể cả ở Levine; người biên soạn chưa tìm được nguồn ghi gốc).

## Chia âm giai thành nhóm
Mục tiêu của bạn: **nhìn, nghĩ và chơi âm giai như một bể nốt**, trong đó đô – rê – mi – fa – son – la – si – đô chỉ là một cách kết hợp. Các mẫu dưới đây viết ở Đô trưởng; hãy tập ở mọi giọng và trên cả thứ giai điệu, giảm, toàn cung.

**Quãng 3 đi lên:**
::staff treble C4 E4 D4 F4 E4 G4 F4 A4 G4 B4 A4 C5 B4 D5 C5 | Quãng 3 đi lên: C–E, D–F, E–G…

**Quãng 3 đi xuống:**
::staff treble C5 A4 B4 G4 A4 F4 G4 E4 F4 D4 E4 C4 | Quãng 3 đi xuống

**Quãng 3 đảo chiều** (lên một quãng, xuống một quãng), rồi ngược lại:
::staff treble C4 E4 F4 D4 E4 G4 A4 F4 G4 B4 C5 A4 | Quãng 3 xen kẽ lên – xuống: C–E, F–D, E–G, A–F…

**Quãng 4:**
::staff treble C4 F4 D4 G4 E4 A4 F4 B4 G4 C5 | Âm giai chia theo quãng 4 (F–B là quãng 4 tăng: cứ để nguyên nốt của âm giai)

**Nhóm bốn nốt:**
::staff treble C4 D4 E4 F4 D4 E4 F4 G4 E4 F4 G4 A4 F4 G4 A4 B4 | Nhóm bốn nốt đi lên: 1-2-3-4, 2-3-4-5, 3-4-5-6…

**Bao vây cromatic từ dưới** (nhún xuống nửa cung dưới mỗi nốt rồi lên nốt kế):
::staff treble B3 C4 D4 C#4 D4 E4 D#4 E4 F4 E4 F4 G4 | Nhún nửa cung dưới mỗi bậc rồi đi lên — mầm của lối [[not-tiep-can-jazz|nốt tiếp cận]]

Tập mỗi mẫu theo cả bốn cách: đi lên, đi xuống, và đảo chiều theo cả hai hướng. Rồi tự nghĩ mẫu của bạn. Có cả tỉ cách chia một âm giai, nhưng chỉ một luật: **mẫu nào nghe không ra nhạc thì đừng tập.**

## Tập trên âm giai giảm và toàn cung
Âm giai đối xứng cũng cần đổi chiều trên mọi nốt. Với âm giai giảm nửa cung – cung trên C (C – D♭ – E♭ – E – F♯ – G – A – B♭), tập quãng 3 sẽ cho bạn **toàn quãng 3 thứ** — vì mọi nốt cách một trong âm giai giảm đều cách nhau quãng 3 thứ. Trên toàn cung, mọi quãng 3 là quãng 3 trưởng.

::staff treble C4 Eb4 C#4 E4 Eb4 F#4 E4 G4 F#4 A4 G4 Bb4 | Quãng 3 trên âm giai giảm nửa cung – cung (C): mọi cặp đều là quãng 3 thứ

## Câu hỏi và bài tập
1. Tập Fa trưởng theo lối "Ionian lên, Dorian xuống…" tới hết bảy điệu thức, rồi đảo lại.
2. Tuần này mỗi ngày bắt đầu Đô trưởng từ một nốt khác (C, D, E, F, G, A, B).
3. Chọn hai mẫu trong chương, tập trên Đô thứ giai điệu và trên âm giai toàn cung C.
4. Tự nghĩ một mẫu mới; chơi cho bạn tập nghe. Nếu nghe không ra nhạc, bỏ nó.
`,
  },
  {
    slug: 'slash-chord-tren-mot-not-bass',
    title: 'Mười hai hợp âm ba trên một nốt bass',
    category: 'jazz',
    aliases: ['slash chord', '12 slash chord', 'hợp âm ba trên nốt bass', 'triad over bass', 'D/C', 'B/C', 'A♭/C', 'âm giai cho slash chord'],
    summary: 'Định nghĩa đơn giản nhất của slash chord: một hợp âm ba trưởng đặt trên một nốt bass. Đặt lần lượt 12 hợp âm ba trưởng trên nốt C, nghe từng cái nghe như hợp âm gì (D♭/C = D♭maj7 có 7 ở bass, D/C = Lydian, E/C = maj7♯5, G♭/C và A♭/C = C7alt, A/C = C7♭9, B♭/C = Csus, B/C…), chúng thay được cho hợp âm nào, và chơi âm giai gì trên mỗi cái.',
    refs: [LEVINE_REF],
    body: `
Định nghĩa đơn giản nhất của slash chord là: **một hợp âm ba đặt trên một nốt bass**. Bên trái gạch chéo là hợp âm ba, bên phải là nốt bass. Từ thập niên 1960, slash chord được dùng rất nhiều để [[tai-hoa-am|tái hoà âm]] các bài chuẩn: đổi hoà âm theo cách này làm một bài cũ nghe tươi hẳn. (Cách đọc ký hiệu và các loại hợp âm gạch chéo nói chung ở [[hop-am-gach-cheo]]; chương này đi sâu vào **hợp âm ba trưởng trên nốt bass**.)

Đặt **12 hợp âm ba trưởng** lên cùng một nốt C ở bass. Tất cả viết ở thế đảo hai (nốt 5 ở dưới): hợp âm ba nghe được ở thế nào cũng được, nhưng khi mọi thứ khác như nhau, **thế đảo hai nghe chắc nhất**. Chơi từng cái và nghe.

::grand Ab3+Db4+F4/C3=D♭/C A3+D4+F#4/C3=D/C Bb3+Eb4+G4/C3=E♭/C B3+E4+G#4/C3=E/C C4+F4+A4/C3=F/C Db4+Gb4+Bb4/C3=G♭/C | Sáu hợp âm ba đầu trên bass C (thế đảo hai)

::grand D4+G4+B4/C3=G/C Eb4+Ab4+C5/C3=A♭/C E4+A4+C#5/C3=A/C F4+Bb4+D5/C3=B♭/C F#4+B4+D#5/C3=B/C | Năm hợp âm ba còn lại trên bass C

## Từng cái một
| Slash chord | Hợp âm ba cách bass | Nghe như | Chơi âm giai |
| --- | --- | --- | --- |
| D♭/C | nửa cung trên | D♭maj7 có nốt 7 ở bass; hoặc một hợp âm át về Fa | C Phrygian, C Locrian |
| D/C | một cung trên | Cmaj7♯4 (Lydian) | C Lydian |
| E♭/C | quãng 3 thứ trên | chỉ là Cm7 | C Dorian |
| E/C | quãng 3 trưởng trên | Cmaj7♯5 (Lydian tăng) | điệu thức 3 của A thứ giai điệu |
| F/C | quãng 4 đúng trên | hợp âm ba Fa thế đảo hai | Fa trưởng |
| G♭/C | tritone | C7♭9 không có nốt 3 | C altered, C giảm nửa cung – cung |
| G/C | quãng 5 trên | Cmaj9 (gần như không ai viết thế này) | Đô trưởng |
| A♭/C | quãng 6 thứ trên | hợp âm ba A♭ thế đảo một; với G♭/C gợi C7alt | La giáng trưởng |
| A/C | quãng 6 trưởng trên | thay cho C7♭9 | C giảm nửa cung – cung |
| B♭/C | một cung dưới | Csus | C Mixolydian |
| B/C | nửa cung dưới | Cmaj7♯4♯9 — thay cho hợp âm I | C giảm cung – nửa cung |

**C/C** thì vô nghĩa (chỉ là hợp âm Đô có nốt gốc ở dưới), bạn sẽ không bao giờ thấy nó viết như vậy.

**D♭/C** là D♭maj7 với nốt 7 ở bass. Hay gặp trong một chuỗi slash chord đi xuống cromatic, như tám ô đầu "On Green Dolphin Street": E♭/C – D/C – D♭/C. Nó cũng làm được hợp âm át về Fa trưởng: D♭/C → Fmaj7.

::grand Ab3+Db4+F4/C3=D♭/C A3+C4+E4/F2=Fmaj7 | D♭/C giải quyết về Fmaj7: nghe như một Csus♭9 có ♭13

**D/C** nghe như Lydian, tức **Cmaj7♯4**. **E♭/C** chỉ là Cm7; người ta chỉ viết như vậy khi nó nằm trong một chuỗi slash chord. **E/C** là cách viết khác của **Cmaj7♯5**, hợp âm Lydian tăng của họ thứ giai điệu.

**F/C** là hợp âm ba Fa thế đảo hai, thường xuất hiện khi bass đang đi một đường cromatic: viết F/C để giữ đường bass liền.

**G♭/C** và **A♭/C**: G♭/C (hợp âm ba cách một tritone) hay được chơi thay cho C7, nghe như C7♭9 dù không có nốt 3. Chơi G♭/C rồi A♭/C liền nhau là gợi **C7alt**: D♭ và G♭ của hợp âm ba G♭, E♭ và A♭ của hợp âm ba A♭ chính là bốn nốt biến hoá ♭9, ♯11, ♯9, ♭13 của C7alt.

::grand Db4+Gb4+Bb4/C3+E3=G♭/C Eb4+Ab4+C5/C3+E3=A♭/C | G♭/C rồi A♭/C trên tay trái C – E: đủ bốn nốt biến hoá của C7alt

**G/C** hiếm khi được viết, vì nó là 1 – 5 – 7 – 9 của Cmaj7, gần như ai cũng chơi Cmaj7 như vậy rồi.

**A/C** hay được dùng **thay cho C7♭9**. **B♭/C** là cách viết khác của **Csus**.

**B/C** là ví dụ đẹp cho thấy vì sao ký hiệu slash chord đôi khi rõ hơn ký hiệu thường: viết kiểu thường thì thành Cmaj7♯4♯9 — chẳng ai muốn giải mã cái đó. Hợp âm này thường thay cho **hợp âm I**, rất hay được chơi **ngay trước** hợp âm Đô trưởng, hoặc làm **hợp âm cuối bài** (Levine nghe thấy Red Garland làm vậy ở cuối "Four" của Miles Davis và "If I Were A Bell").

::grand F#4+B4+D#5/C3=B/C G4+C5+E5/C3+B3=Cmaj7 | B/C rồi Cmaj7: nghe như một nét "lấp lánh" trước khi về chủ âm

## Slash chord trên đường bass đi xuống
Slash chord hay xuất hiện trên một đường bass đi xuống. Mỗi nốt bass một hợp âm ba khác, hợp âm ba ở trên đi tự do.

::grand Bb3+D4+F4/D3=B♭/D Bb3+Eb4+G4/Db3=E♭/D♭ A3+C4+F4/C3=F/C Ab3+Db4+F4/B2=D♭/B | Bass đi xuống D – D♭ – C – B, trên mỗi nốt là một hợp âm ba trưởng (Lamar soạn)

## Bud Powell, người đi trước
Levine cho rằng **Bud Powell** là người chơi jazz đầu tiên dùng slash chord, trong "Glass Enclosure" (thu năm 1953), gần mười năm trước khi slash chord thành phổ biến.

## Câu hỏi và bài tập
1. Dựng 12 hợp âm ba trưởng trên bass F; gọi tên từng cái theo bảng.
2. Hợp âm nào trong bảng hợp làm hợp âm cuối cho một bài ở Đô trưởng? Thử B/C, D/C và G/C.
3. Thay C7 trong một câu G – C7 – Fmaj7 bằng G♭/C, rồi bằng A/C. Nghe khác nhau thế nào?
4. Viết bốn ô bass đi xuống cromatic từ C, mỗi nốt đặt một hợp âm ba trưởng bạn thích.
`,
  },
]
