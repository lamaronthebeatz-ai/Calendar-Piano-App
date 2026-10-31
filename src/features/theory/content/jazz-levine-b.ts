import type { Article } from '../wiki'
import { LEVINE_REF } from './levine-refs'

export const jazzLevineB: Article[] = [
  {
    slug: 'hop-am-sus-jazz',
    title: 'Hợp âm sus và sus♭9',
    category: 'jazz',
    aliases: ['sus chord', 'hợp âm sus', '9sus', 'sus4 jazz', 'sus♭9', 'Phrygian chord', 'hợp âm Phrygian', 'Gm7/C', 'B♭/C', 'Maiden Voyage'],
    summary: 'Hợp âm sus trong jazz là một hợp âm át có nốt 4 không giải quyết: âm giai Mixolydian mà nốt 4 thôi là nốt tránh. Viết Csus, C9sus, B♭/C hay Gm7/C đều chỉ một thứ: một ii – V gói trong một hợp âm. Hợp âm sus♭9 (Phrygian) đến từ điệu thức Phrygian của âm giai trưởng hoặc điệu thức 2 của thứ giai điệu. Chương nói cách bấm, cách dùng để thay ii – V, và vì sao nốt 3 trên hợp âm sus là nốt đẹp chứ không phải nốt cấm.',
    refs: [LEVINE_REF],
    body: `
Chơi một hợp âm G7, rồi đổi nốt B thành C. Bạn vừa nghe hợp âm **Gsus**. Trong hoà âm cổ điển, nốt 4 "treo" này phải giải quyết xuống nốt 3. Trong jazz thì không: hợp âm sus đứng một mình được, lơ lửng bao lâu cũng được, và đó chính là cái hay của nó. Sus chords **trôi** — và vì trôi nên chúng giải quyết êm về gần như bất kỳ đâu.

## Âm giai của hợp âm sus
Hợp âm sus đi với điệu thức **Mixolydian**, như G7. Khác biệt duy nhất: trên G7 thì C là nốt tránh; trên Gsus thì C là **nốt của hợp âm**, không còn phải tránh nữa.

::staff treble G4 A4 B4 C5 D5 E5 F5 G5 | Gsus: Mixolydian Sol — nốt C (4) giờ là nốt hợp âm

Hợp âm sus có nhiều tên, và bạn cần đọc được hết:

| Ký hiệu | Nghĩa |
| --- | --- |
| Gsus, G7sus, G7sus4 | Sol – Đô – Rê – Fa (1 – 4 – 5 – ♭7) |
| G9sus, G11 | thêm nốt 9 (A) |
| F/G | hợp âm ba Fa trên bass Sol |
| Dm7/G | hợp âm Rê thứ bảy trên bass Sol |

Hai dòng cuối là cách nhìn hữu ích nhất: **F/G và Dm7/G chính là ii – V gói lại thành một hợp âm** — tay phải chơi hợp âm ii (Dm7) hoặc hợp âm ba bậc IV (F), tay trái (hay tay bass) chơi nốt V.

::grand F4+A4+C5/G2+F3=F/G C4+F4+A4+D5/G2+F3=G9sus D4+F4+A4+C5/G2=Dm7/G | Ba cách bấm Gsus: F/G, G9sus, Dm7/G

## Cách bấm
Nốt quyết định "chất" của hợp âm sus là **1 – 4 – ♭7** (với Gsus: G – C – F). Dân piano và guitar hay chơi đúng ba nốt đó. Thêm 9 (A) và 13 (E) cho đầy:

::grand C4+F4+A4+E5/G2+D3=G13sus F4+G4+C5/G2=G7sus4 | G13sus (thêm A, E) và Gsus chỉ ba nốt cốt lõi

Thế bấm [[hop-am-so-what-barron|So What]] D – G – C – F – A chứa đúng năm nốt của G9sus, nên trên bass G nó là một hợp âm sus rất đẹp (xem chương đó).

## Hợp âm sus thay cho ii – V
Vì Dm7/G = G9sus, bạn có thể **gói một ii – V vào một hợp âm sus cùng gốc với hợp âm V**: Dm7 – G7 thành G9sus suốt hai ô. Nghe nhẹ hơn, "hiện đại" hơn, bớt cảm giác kéo về.

::grand F4+A4+C5+E5/D3=Dm9 F4+A4+B4+E5/G2=G13 / F4+A4+C5+E5/G2=G13sus F4+A4+C5+E5/G2=G13sus | Hai ô Dm9 – G13, rồi thay cả hai bằng G13sus: tay phải giữ nguyên thế bấm của Dm9, chỉ có bass đổi sang G

Ngược lại, khi gặp hợp âm sus trên lead sheet mà bí, cứ nghĩ đó là một ii – V: trên Gsus, ứng tác như trên Dm7 – G7 ở Đô trưởng.

Nhiều bài thời 1960 dựng **toàn bằng hợp âm sus**. Ví dụ nổi tiếng nhất là "Maiden Voyage" của Herbie Hancock (1965): bốn hợp âm sus nối nhau, không một ii – V nào; mỗi hợp âm là một mặt hồ để bạn bơi.

## Hợp âm sus♭9 (Phrygian)
Đổi nốt A (9) của G9sus thành A♭ (♭9) là bạn có **Gsus♭9**. Âm giai của nó là **Sol Phrygian**: G – A♭ – B♭ – C – D – E♭ – F, điệu thức 3 của Mi giáng trưởng.

::staff treble G4 Ab4 Bb4 C5 D5 Eb5 F5 G5 | Sol Phrygian (điệu thức 3 của E♭ trưởng): âm giai của Gsus♭9

Hợp âm Phrygian thường bấm bằng một hợp âm ba trên bass, giống như [[slash-chord-tren-mot-not-bass|slash chord]]: **A♭/G** (A♭ – C – E♭ trên G) cho đúng ♭9, 4 và ♭13.

::grand Eb4+Ab4+C5/G2+F3=A♭/G F4+Ab4+C5/G2+D3=Gsus♭9 | Hai cách bấm Gsus♭9: A♭/G và thế bấm 1 – 5 dưới, ♭7 – ♭9 – 4 trên

Sus♭9 cũng có trong họ [[dieu-thuc-thu-giai-dieu|thứ giai điệu]]: điệu thức 2 của Fa thứ giai điệu là G – A♭ – B♭ – C – D – E – F (giống Phrygian nhưng có nốt 6 thường, E). Khi có nốt 13 thường, hãy nghĩ "thứ giai điệu"; khi có ♭13, nghĩ "Phrygian".

Cách dùng hay gặp: sus♭9 là một hợp âm V "tối" giải quyết về hợp âm thứ hoặc trưởng, và là màu chủ đạo của nhiều bài điệu thức – Tây Ban Nha.

## Nốt 3 trên hợp âm sus: không phải nốt cấm
Có thầy dạy "nốt 4 thay cho nốt 3 trong hợp âm sus, nên đừng bao giờ chơi nốt 3". Levine gọi đây là một **ngộ nhận** và đưa ví dụ Wynton Kelly mở đầu "Someday My Prince Will Come" (bản thu của Miles Davis) bằng một hợp âm Fsus có nốt **3 (A) ở trên cùng**. Nốt 3 đặt cao, trên nốt 4 ở dưới, là một trong những nốt đẹp nhất bạn có thể chơi trên hợp âm sus.

::grand Eb4+G4+A4/F2+Bb3=Fsus_(có_3) | Fsus với nốt 3 (A) ở trên cùng, nốt 4 (B♭) ở giữa

Như mọi thế bấm, hãy để tai bạn quyết định chỗ đặt nốt 3.

## Câu hỏi và bài tập
1. Viết bốn cách ký hiệu cho cùng một hợp âm Csus; bấm từng cái.
2. Thay mọi ii – V trong 8 ô đầu một bài chuẩn bằng hợp âm sus cùng gốc với V. Nghe khác gì?
3. Chơi A♭/G, rồi giải quyết về Cm(maj7) và Cmaj7. Cái nào bạn thích hơn?
4. Ứng tác hai phút trên một vamp Dsus, nghĩ như đang chơi trên Am7 – D7.
`,
  },
  {
    slug: 'am-giai-hoa-thanh-va-am-giai-bon-not',
    title: 'Âm giai thứ hoà thanh, trưởng hoà thanh và âm giai bốn nốt',
    category: 'jazz',
    aliases: ['harmonic minor jazz', 'thứ hoà thanh trong jazz', 'harmonic major', 'trưởng hoà thanh', 'minor sixth scale', 'âm giai thứ sáu', 'âm giai bốn nốt', 'four-note scale', 'maj7♭6'],
    summary: 'Vì sao âm giai thứ hoà thanh — thứ mà nhiều sách gọi là "âm giai của ii – V – i thứ" — lại ít được chơi trọn vẹn trong jazz: nó không khớp riêng hợp âm nào, mỗi hợp âm của ii – V – i thứ đều có ít nhất một nốt chỏi. Chỗ dùng đúng của nó (câu nhanh trên V7♭9 về thứ, đa hợp âm C trên D♭). Âm giai trưởng hoà thanh và hợp âm maj7♭6 thay cho maj7 khi giai điệu là nốt 5. Âm giai bốn nốt "thứ sáu" (1 – ♭3 – 5 – 6) và chỗ chơi được nó.',
    refs: [LEVINE_REF],
    body: `
Trong hoà âm trưởng, một âm giai mẹ phủ trọn ii – V – I: Rê Dorian, Sol Mixolydian, Đô Ionian đều là Đô trưởng. Giá mà có một âm giai nghe hay trên cả ba hợp âm của **ii – V – i thứ** thì tốt quá nhỉ? Tiếc là **không có**. Nhiều sách lý thuyết ghi "âm giai thứ hoà thanh là âm giai của ii – V – i thứ". Nếu đúng thế, bạn sẽ nghe các bậc thầy chơi thứ hoà thanh suốt trên ii – V – i. Họ không làm vậy. Họ chơi **mảnh** của nó, hiếm khi chơi trọn.

## Âm giai thứ hoà thanh
::staff treble C4 D4 Eb4 F4 G4 Ab4 B4 C5 | Đô thứ hoà thanh: quãng 2 tăng A♭ – B giữa bậc 6 và 7

Nét đặc trưng là **quãng 2 tăng** (ba nửa cung) giữa bậc 6 và 7 (A♭ – B), thứ bạn không gặp giữa hai nốt liền nhau trong âm giai trưởng, thứ giai điệu, giảm hay toàn cung. Nó gợi ngay âm hưởng Đông Âu, Trung Đông. Có người chơi nó nhiều (Levine nêu Bud Powell và Booker Ervin), có người không đụng tới.

## Vì sao nó không khớp riêng hợp âm nào
Đặt Đô thứ hoà thanh lên từng hợp âm của ii – V – i ở Đô thứ: Dø – G7♭9 – Cm(maj7). Chơi âm giai trên mỗi hợp âm, rồi **giữ ngân** từng nốt nghi vấn trên hợp âm:
- Trên **Dø**: E♭ và B nghe rất chỏi (B đụng nốt C, ♭7 của Dø; E♭ là ♭9).
- Trên **G7♭9**: C (nốt tránh của hợp âm át) và E♭ (♭13) đều gắt khi ngân.
- Trên **Cm(maj7)**: A♭ (♭6) chỏi với nốt 5 G.

::grand Eb5/D3+C4+F4+Ab4=Dø C5/G2+F3+B3+Ab4=G7♭9 Ab4/C3+Eb3+G3+B3=Cm(maj7) | Giữ ngân nốt chỏi: E♭ trên Dø, C trên G7♭9, A♭ trên Cm(maj7)

Phần lớn nốt của thứ hoà thanh nghe ổn trên ii – V – i thứ, nhưng **cả âm giai không khớp riêng hợp âm nào**. Nên khi chạy nhanh bằng móc đơn, tai chấp nhận; khi ngân lâu, tai phản đối.

## Chỗ dùng đúng của thứ hoà thanh
1. **Câu nhanh trên V7♭9 về hợp âm thứ.** Đây là chỗ nó hay được chơi nhất: trên G7♭9 → Cm, dùng Đô thứ hoà thanh (nghĩa là điệu thức 5 của nó, "Phrygian trưởng"). Một câu móc đơn chạy trọn âm giai qua Dø – G7♭9 – Cm nghe rất ổn và nhiều người đã chơi — miễn là bạn đừng dừng lại trên nốt chỏi.

::ex lv-harm-minor | Một câu thứ hoà thanh Đô qua Dø – G7♭9 – Cm(maj7) (Lamar soạn): nốt chỏi chỉ đi qua, không đứng lại

2. **Một hợp âm "đòi" thứ hoà thanh.** Đặt hợp âm ba Đô trưởng (C – E – G) lên trên hợp âm ba Rê giáng trưởng (D♭ – F – A♭): sáu nốt này là sáu trong bảy nốt của **Fa thứ hoà thanh** (chỉ thiếu B♭). Trên hợp âm chồng này, cứ chạy Fa thứ hoà thanh thoải mái.

::grand C5+E5+G5/Db3+F3+Ab3=C/D♭ | Hợp âm ba Đô trên hợp âm ba Rê giáng: sáu nốt của Fa thứ hoà thanh (F – G – A♭ – C – D♭ – E)

Đừng hiểu chương này thành "đừng chơi thứ hoà thanh"! Nó là một chuỗi nốt rất đẹp. Chỉ là: đọc sách lý thuyết nào (kể cả sách này) cũng nên kèm một nhúm muối.

## Âm giai trưởng hoà thanh
Âm giai **trưởng hoà thanh** có cùng quãng 2 tăng giữa bậc 6 và 7, nhưng từ chủ âm lên bậc 3 là quãng 3 **trưởng**: tức âm giai trưởng hạ bậc 6.

::staff treble Eb4 F4 G4 Ab4 Bb4 Cb5 D5 Eb5 | Mi giáng trưởng hoà thanh: E♭ trưởng với C♭ (♭6)

Hợp âm dựng từ nó, tạm ghi **E♭maj7♭6** (không phải ký hiệu chuẩn — viết thế thì chuẩn bị trả lời vài câu hỏi), nghe bí ẩn, trầm tư; Levine dẫn Herbie Hancock bấm một hợp âm như vậy trong "Dolphin Dance".

::grand Bb4+Cb5+D5+G5/Eb3+Bb3=E♭maj7♭6 Bb4+C5+D5+G5/Eb3+Bb3=E♭maj7(13) | E♭maj7♭6 rồi E♭maj7 thường: nốt C♭ làm hợp âm tối hẳn đi

**Cách dùng:** thay một hợp âm maj7 bằng maj7♭6 khi **giai điệu đang ở nốt 5** của hợp âm. Lật lead sheet ra, tìm các hợp âm maj7 có nốt 5 ở giai điệu, và thử xem bạn có thích màu này không.

## Âm giai bốn nốt "thứ sáu"
Âm giai **thứ sáu** (minor 6th scale) chỉ có bốn nốt, rải hợp âm thứ sáu: **1 – ♭3 – 5 – 6**. Đô thứ sáu: C – E♭ – G – A.

::staff treble C4 Eb4 G4 A4 C5 Eb5 G5 A5 | Âm giai "thứ sáu" Đô: C – E♭ – G – A

Nó có một chất "vượt thời gian": từ Lester Young tới McCoy Tyner và Mulgrew Miller đều chơi. Chơi được ở đâu? Tìm những âm giai chứa đủ bốn nốt C – E♭ – G – A:
- **Si giáng trưởng** (giọng trưởng duy nhất chứa cả bốn): chơi được trên Cm7, Dsus♭9, E♭maj7♯4, F7, Fsus. Nhưng **không** trên B♭maj7, vì E♭ là nốt tránh của nó.
- **Si giáng thứ giai điệu** (B♭ – C – D♭ – E♭ – F – G – A): chơi được trên mọi hợp âm của họ này, trong đó có **E♭7♯11** và **A7alt**.
- **Âm giai giảm nửa cung – cung trên C**: chơi được trên C7♭9, E♭7♭9, F♯7♭9, A7♭9.

Cách dùng đẹp nhất: trên một chuỗi **IIø – V7alt**, mỗi hợp âm chơi âm giai thứ sáu của **âm giai thứ giai điệu mẹ** của nó. Ví dụ ở Đô thứ: Dø thuộc Fa thứ giai điệu → âm giai thứ sáu **Fa** (F – A♭ – C – D); G7alt thuộc La giáng thứ giai điệu → âm giai thứ sáu **La giáng** (A♭ – C♭ – E♭ – F).

::staff treble F4 Ab4 C5 D5 / Ab4 Cb5 Eb5 F5 | Trên Dø – G7alt: âm giai thứ sáu Fa, rồi âm giai thứ sáu La giáng

Âm giai thứ sáu rất gần **ngũ cung thứ** và **âm giai blues** (xem [[ngu-cung-trong-jazz]]): cả ba có chung âm hưởng "bluesy" và thường được dùng thay cho nhau. Nó không hợp với hợp âm toàn cung, vì trong âm giai toàn cung không có quãng 3 thứ.

Các âm giai bốn nốt khác thì vô số, nhất là trong hoà âm giảm (đối xứng theo quãng 3 thứ). Thử tự dựng một cái: chọn bốn nốt của âm giai giảm, xem nó vẽ ra hình gì trên hợp âm V7♭9.

## Câu hỏi và bài tập
1. Chơi Rê thứ hoà thanh trên Eø – A7♭9 – Dm(maj7); tìm và ngân từng nốt chỏi.
2. Tìm trong một bài chuẩn bạn biết một hợp âm maj7 có nốt 5 ở giai điệu; thử maj7♭6.
3. Trên chuỗi Eø – A7alt – Dm6, chơi âm giai thứ sáu tương ứng (G, B♭, D).
4. Đặt âm giai thứ sáu Đô lên F7, A7alt và C7♭9. Kiểm từng nốt là nốt gì của hợp âm.
`,
  },
  {
    slug: 'tu-am-giai-den-am-nhac',
    title: 'Từ âm giai đến âm nhạc: mô tiến, hợp âm ba và nốt chung',
    category: 'jazz',
    aliases: ['from scales to music', 'mô tiến trong ứng tác', 'sequence jazz', 'continuous scale exercise', 'bài tập âm giai liên tục', 'triadic improvisation', 'ứng tác bằng hợp âm ba', 'nốt chung', 'common tones', 'kéo giãn hợp âm', 'stretching the changes'],
    summary: 'Âm giai là bảng chữ cái, không phải bài thơ. Chương này đưa các bài tập biến âm giai thành nhạc: mô tiến giai điệu và mô tiến tiết tấu; bài tập âm giai liên tục (nối âm giai của hợp âm này sang hợp âm sau, không quay về nốt gốc) trên 8 ô kiểu "Stella By Starlight"; mẹo IIø – V7alt (lặp lại câu lên quãng 3 thứ); ứng tác bằng hợp âm ba và hợp âm bảy của từng họ âm giai; nốt chung giữa các hợp âm; và kéo giãn – rút ngắn hợp âm.',
    refs: [LEVINE_REF],
    body: `
Âm giai là **bảng chữ cái** của âm nhạc, không phải **bài thơ**. Bạn phải biết chữ, ngữ pháp, từ vựng trước khi viết được câu, rồi thơ. Cũng vậy, phải biết âm giai trước khi làm ra nhạc hay. Mục tiêu: thuộc âm giai tới mức nó thành một **bể nốt** mà bạn nhúng tay vào lấy nốt nào cũng được. Chương này là một loạt bài tập để đi từ âm giai tới nhạc.

## Mô tiến
Trong thuật ngữ cổ điển, **mô tiến** có hai loại:
- **Mô tiến giai điệu**: lặp lại một câu ở cao độ khác, tiết tấu gần như giữ nguyên. Các quãng không cần y hệt, nhưng **hình dáng** thường giống.
- **Mô tiến tiết tấu**: lặp lại một hình tiết tấu, còn nốt thì không nhất thiết lặp lại ở cao độ khác.

Mô tiến trôi từ hợp âm này sang hợp âm sau, tạo căng – giãn bất ngờ, và cho bài solo một **cấu trúc**. Nó còn là cách hay để đi "ra ngoài" hợp âm: đặt một câu ba nốt, rồi mô tiến nó lệch khỏi hoà âm đang viết.

::ex lv-seq-motif | Một motif bốn nốt mô tiến qua ii – V – I – vi (Lamar soạn): hình dáng giữ nguyên, nốt điều chỉnh theo từng hợp âm

Một cách hay là **nới rộng dần một bước nhảy**: giữ nốt dưới cố định, nốt trên lên quãng 4, rồi tritone, rồi quãng 5, quãng 6 thứ, quãng 6 trưởng… Bạn sẽ nghe độ căng tăng lên theo từng ô. (Levine dẫn Herbie Hancock làm đúng điều này trong solo "Dolphin Dance".)

::staff treble E4 A4 / E4 Bb4 / E4 B4 / E4 C5 / E4 C#5 | Nốt E giữ nguyên, nốt trên nới dần: quãng 4, tritone, quãng 5, quãng 6 thứ, quãng 6 trưởng

Mô tiến thành món tủ của jazz từ thập niên 1960 (Herbie Hancock, Joe Henderson, Woody Shaw, Freddie Hubbard dẫn đầu), nhưng không mới: Levine chỉ ra Louis Armstrong đã hát một mô tiến tiết tấu chín ô trong "Hotter Than That" năm 1927. Và một bài học từ McCoy Tyner: bắt đầu mô tiến ở ô **cuối** của một câu tám ô và kéo nó sang câu sau — đừng để khung tám ô nhốt bạn lại.

## Bài tập âm giai liên tục
Đây là bài tập chuẩn bị cho mô tiến: **nối nốt của âm giai hợp âm này sang âm giai hợp âm sau**, không bao giờ nhảy về nốt gốc. Ta dùng tám ô đầu của "Stella By Starlight" (hoà âm, không phải giai điệu), vì nó có đủ loại hợp âm.

Trước hết, với mỗi hợp âm, hỏi: **nó thuộc họ hoà âm nào?** Trưởng, thứ giai điệu, giảm hay toàn cung? (Nhớ số điệu thức của thứ giai điệu: m(maj7) là I, sus♭9 là II, maj7♯5 là III, át ♯11 là IV, ø là VI, alt là VII.)

| Ô | Hợp âm | Âm giai mẹ |
| --- | --- | --- |
| 1 | Eø | Sol thứ giai điệu (điệu thức VI) |
| 2 | A7alt | Si giáng thứ giai điệu (VII) |
| 3 | Cm7 | Si giáng trưởng (Dorian) |
| 4 | F7 | Si giáng trưởng (Mixolydian) |
| 5 | Fm7 | Mi giáng trưởng (Dorian) |
| 6 | B♭7 | Mi giáng trưởng (Mixolydian) |
| 7 | E♭maj7 | Mi giáng trưởng (Ionian) |
| 8 | A♭7♯11 | Mi giáng thứ giai điệu (IV) |

Giờ chơi nốt đen, bắt đầu **không phải** từ gốc — gốc thì dễ quá. Đi lên âm giai; sang ô mới, nốt đầu là **nốt kế tiếp thuộc âm giai mới** theo cùng hướng. Đổi chiều khi lên quá cao hay xuống quá thấp.

::ex lv-continuous | Bài tập âm giai liên tục trên tám ô Eø – A7alt – Cm7 – F7 – Fm7 – B♭7 – E♭maj7 – A♭7♯11 (Lamar soạn, bắt đầu từ D, nốt ♭7 của Eø)

Để ý ô 4 và 6: nốt tránh của hợp âm át (B♭ trên F7, E♭ trên B♭7) được **nâng lên** nửa cung; ô 7 cũng nâng nốt tránh A♭ của E♭maj7 thành A. Khi tập bài này, **nâng mọi nốt tránh**: bậc 4 trên hợp âm trưởng, bậc 11 trên hợp âm át không biến hoá. Ngoài đời bạn không phải lúc nào cũng làm vậy — nốt tránh không phải nốt "xấu" — nhưng tập thế này luyện cho bạn **để ý** tới chúng.

Cái hay của bài tập:
1. Nó tập cho bạn bắt đầu mỗi âm giai **ở nơi hợp âm trước thả bạn xuống**, thay vì nhảy về gốc.
2. Quan trọng nhất: bạn học cách **nối các âm giai** thành những câu dài liền mạch, và xoá bệnh thiên vị nốt gốc (xem [[luyen-am-giai-jazz]]).

Ô có hai hợp âm thì mỗi hợp âm hai nốt. Rồi biến tấu: chơi móc đơn; móc đơn chia quãng 3 lên và xuống; quãng 3 đảo chiều; liên ba; đổi chiều ở bất kỳ chỗ nào trong ô.

Bài tập này không cần cả đàn. Đánh số phản xạ: "Bø là điệu thức VI của Rê thứ giai điệu" — lúc đầu mất mười giây, rồi ba giây, một giây, nửa giây… tới khi nó tự bật ra. Đi vòng quãng 5 với các hợp âm alt: "C7alt thuộc Rê giáng thứ giai điệu, F7alt thuộc Fa thăng thứ giai điệu…" — làm được cả khi đang tắm hay đang chạy xe (đừng lỡ lối rẽ).

## Mẹo IIø – V7alt: lên một quãng 3 thứ
Eø thuộc Sol thứ giai điệu, A7alt thuộc Si giáng thứ giai điệu — cao hơn **một quãng 3 thứ**. Vì trong một âm giai thứ giai điệu không có nốt tránh, mọi thứ trong cùng giọng đều đổi chỗ cho nhau được. Vậy: **câu nào, lick nào, thế bấm nào bạn chơi trên hợp âm ø, dịch lên quãng 3 thứ là chơi được trên hợp âm alt kế sau.**

::ex lv-iio-valt | Một câu trên Eø, dịch nguyên lên quãng 3 thứ cho A7alt (Lamar soạn)

Bạn tưởng mình đang chơi Eø – A7alt, nhưng ở tầng sâu hơn bạn đang chơi **Sol thứ giai điệu rồi Si giáng thứ giai điệu**. Nhớ: **nghĩ theo giọng, đừng nghĩ theo hợp âm.**

## Ứng tác bằng hợp âm ba
Hợp âm ba là hợp âm cơ bản của hoà âm phương Tây; đặt chúng vào bài solo thì hoà âm vững lại và câu nhạc có xương sống. Muốn dùng được, phải thuộc **hợp âm ba của từng họ âm giai**:

- **Âm giai trưởng**: trưởng – thứ – thứ – trưởng – trưởng – thứ – giảm.
::staff treble C4+E4+G4=C D4+F4+A4=Dm E4+G4+B4=Em F4+A4+C5=F G4+B4+D5=G A4+C5+E5=Am B4+D5+F5=B° | Bảy hợp âm ba của Đô trưởng

- **Thứ giai điệu**: hai thứ, một tăng, hai trưởng, hai giảm.
::staff treble C4+Eb4+G4=Cm D4+F4+A4=Dm Eb4+G4+B4=E♭+ F4+A4+C5=F G4+B4+D5=G A4+C5+Eb5=A° B4+D5+F5=B° | Bảy hợp âm ba của Đô thứ giai điệu

- **Âm giai giảm**: toàn hợp âm ba giảm. **Âm giai toàn cung**: toàn hợp âm ba tăng.

Bài tập: rải lần lượt các hợp âm ba của âm giai, đi lên, ở mọi giọng; rồi đổi thứ tự nốt (3 – 1 – 3 – 5 cho mỗi hợp âm ba) cho bớt máy móc.

::staff treble E4 C4 E4 G4 / F4 D4 F4 A4 / G4 E4 G4 B4 / A4 F4 A4 C5 | Mẫu 3 – 1 – 3 – 5 trên các hợp âm ba của Đô trưởng

## Hợp âm bảy
Hợp âm bảy là hợp âm cơ bản của jazz, và rải chúng trong solo cũng cho cấu trúc như hợp âm ba. Thuộc thứ tự:
- **Âm giai trưởng**: maj7 – m7 – m7 – maj7 – 7 – m7 – ø.
- **Thứ giai điệu**: m(maj7) – m7 – maj7♯5 – 7 – 7 – ø – ø.

::staff treble C4+E4+G4+B4=Cmaj7 D4+F4+A4+C5=Dm7 E4+G4+B4+D5=Em7 F4+A4+C5+E5=Fmaj7 G4+B4+D5+F5=G7 A4+C5+E5+G5=Am7 B4+D5+F5+A5=Bø | Bảy hợp âm bảy của Đô trưởng

Tập đi lên, đi xuống, đảo chiều, ở mọi giọng và mọi họ âm giai. Một mẹo dùng ngay: trên một hợp âm Gm7 kéo dài, rải lần lượt **mọi hợp âm bảy của Fa trưởng** từ trên xuống — bạn vẫn ở trong giọng, nhưng màu đổi liên tục.

Những mẫu này là bài tập tuyệt vời, nhưng chơi quá nhiều trong solo thì nghe như bài tập. Thay tiết tấu, chèn lặng, và tìm cách biến chúng thành nhạc.

## Nốt chung
Bạn không phải chơi hết nốt của mỗi âm giai. Một lối ứng tác thoáng hơn, ít cromatic hơn: tìm **nốt chung** — nốt thuộc hai hay nhiều hợp âm liền nhau. Nốt chung là chất keo giữ bài solo lại.

::grand G4/F3+Ab3+C4+Eb4=Fm7 G4/Bb2+Ab3+D4=B♭7 G4/Eb3+D4=E♭maj7 G4/Ab2+C4+Eb4=A♭maj7 | Nốt G là nốt chung của Fm7, B♭7, E♭maj7, A♭maj7 (9, 13, 3, 7): một nốt, bốn màu

Khi gặp một chuỗi hợp âm nhìn như bãi mìn — không một ii – V nào, nhảy giữa trưởng, thứ giai điệu, giảm — hãy viết các âm giai ra và tìm nốt chung giữa chúng. Năm nốt chung đôi khi tình cờ lại là một âm giai ngũ cung (xem [[ngu-cung-trong-jazz]]): bạn vừa tìm được đường đi qua bãi mìn.

## Kéo giãn hợp âm
Nghe các bậc thầy, bạn sẽ thấy độ dài mỗi hợp âm **co giãn được**. Bạn có thể bắt đầu hợp âm sau sớm hơn vài phách (**đón trước**), hoặc kéo hợp âm trước sang ô sau (**kéo dài**). Ví dụ: trên ii – V – I bốn ô, bắt đầu chơi nốt của G7 từ phách 3 ô Dm7, và vẫn giữ màu G7 tới phách 2 ô Cmaj7 rồi mới giải quyết. Tai người nghe chấp nhận, vì bè bass và hoà âm vẫn giữ khung. Chỉ làm khi bạn đã chơi đúng hợp âm như viết một cách thuần thục.

Một câu cần nhớ suốt chương: **ký hiệu hợp âm là kim chỉ nam, không phải cái áo bó.** Nhưng muốn được như những người chơi tự do nhất, trước hết bạn phải chơi được hợp âm đúng như nó được viết.

## Câu hỏi và bài tập
1. Làm bài tập âm giai liên tục trên tám ô Eø – A7alt – Cm7 – F7 – Fm7 – B♭7 – E♭maj7 – A♭7♯11, bắt đầu từ nốt G; rồi làm lại bằng móc đơn.
2. Viết một câu hai ô trên Bø, dịch lên quãng 3 thứ cho E7alt; giải quyết về Am.
3. Rải bảy hợp âm ba của Fa thứ giai điệu theo mẫu 3 – 1 – 3 – 5.
4. Tìm một nốt chung cho chuỗi Cm7 – F7 – B♭maj7 – E♭maj7 và chơi một chorus giữ nốt đó, chỉ đổi tiết tấu.
`,
  },
]
