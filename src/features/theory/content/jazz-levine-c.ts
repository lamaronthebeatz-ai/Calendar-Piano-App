import type { Article } from '../wiki'
import { LEVINE_REF } from './levine-refs'

export const jazzLevineC: Article[] = [
  {
    slug: 'tai-hoa-am-nang-cao',
    title: 'Tái hoà âm nâng cao: đối hướng, song song, đường bass và nốt chung',
    category: 'jazz',
    aliases: ['advanced reharmonization', 'tái hoà âm nâng cao', 'đối hướng', 'contrary motion', 'parallelism', 'hợp âm song song', 'đường bass đi xuống', 'hợp âm trên mọi nốt bass', 'pedal point', 'nốt pedal', 'nốt chung tái hoà âm'],
    summary: 'Những kỹ thuật biến tái hoà âm thành gần như soạn lại một bài: đối hướng giữa giai điệu và bass; hợp âm song song (cùng loại, cùng thế bấm, không cần chức năng); slash chord; đường bass đi lên – đi xuống dưới giai điệu; dựng hợp âm trên bất kỳ nốt bass nào trong 12 nốt; hợp âm giảm có một nốt nâng lên một cung; nốt chung (một nốt giai điệu lặp lại, mỗi lần một hợp âm); nốt pedal; và phối các kỹ thuật với nhau.',
    refs: [LEVINE_REF],
    body: `
Chương [[tai-hoa-am]] và [[thay-the-hop-am]] cho bạn các phép thay thế cơ bản: ii – V thay cho V, thay thế tritone, át phụ. Chương này đi xa hơn: những kỹ thuật cho phép bạn **gần như soạn lại** một bài chuẩn. Mọi ví dụ dưới đây dùng một câu giai điệu bốn ô do Lamar viết, để bạn so sánh các cách hoà âm trên cùng một giai điệu.

::ex lv-rh-melody | Câu giai điệu dùng cho cả chương, với hoà âm "gốc" đơn giản (Lamar soạn)

## Đối hướng
**Đối hướng** là khi hai bè đi ngược chiều nhau: vào trong (lại gần nhau) hoặc ra ngoài (xa nhau). Cho giai điệu đi lên trong khi bass đi xuống cromatic, rồi đặt trên **mỗi** nốt bass một hợp âm, bạn mở ra cả một kho khả năng hoà âm.

::ex lv-rh-contrary | Cùng câu giai điệu, bass đi xuống cromatic trong khi giai điệu đi lên: mỗi nốt giai điệu một hợp âm mới

Vì sao nó hay? Con người phản ứng với **cấu trúc**, và đối hướng làm cấu trúc lộ ra: vừa nghe giàu (hoà âm dày lên), vừa thoả trí óc (thấy rõ một trật tự).

## Song song
**Song song** là những hợp âm **giống hệt nhau** (cùng loại, cùng thế bấm) đi cùng hướng. Giai điệu đi cromatic là chỗ lý tưởng để dùng song song. Chọn hợp âm nào? Chọn cái bạn **thích tiếng**. Chức năng (ii, V hay I) không còn quan trọng, vì các hợp âm song song không giải quyết hợp âm này sang hợp âm kia. (Đây cũng là ý của [[constant-structures]].)

::grand G4+B4+E5/F3+A3=G7(13) Gb4+Bb4+Eb5/E3+Ab3=G♭7(13) F4+A4+D5/Eb3+G3=F7(13) E4+G#4+C#5/D3+F#3=E7(13) | Một thế bấm 7(13) trượt xuống cromatic: cùng hình, cùng loại

Hoà âm giảm, nơi mọi thứ lặp lại sau mỗi quãng 3 thứ, là chỗ tuyệt cho song song: thấy giai điệu đi theo quãng 3 thứ thì thử cho cả hợp âm đi lên theo quãng 3 thứ.

## Slash chord
[[slash-chord-tren-mot-not-bass|Slash chord]] là công cụ tái hoà âm rất mạnh: đặt một hợp âm ba trên nốt bass sao cho nốt giai điệu là một nốt của hợp âm ba. Slash chord không nhất thiết là hợp âm ba trên bass; có thể là hợp âm bảy trên bass, ví dụ Cmaj7♯5/B♭ thay cho B♭7.

## Đường bass đi lên và đi xuống
Dựng hợp âm trên một đường bass đi lên hay đi xuống dưới giai điệu là tạo ra một **giai điệu phụ** tương phản với giai điệu chính. Khác đối hướng ở chỗ giai điệu không nhất thiết đi ngược chiều bass. Một cách quen thuộc: đổi hợp âm I thành hợp âm vi (Cmaj7 → Am7), rồi đi xuống qua một ii – V (Gm7 – C7) để tới hợp âm IV.

::grand E4+G4+C5/A2+G3=Am7 E4+Bb4+D5/G2+F3=Gm7 E4+Bb4+D5/C3+Bb3=C7 E4+A4+C5/F2+E3=Fmaj7 | Am7 – Gm7 – C7 – Fmaj7: bass đi xuống A – G – C – F, nốt E giữ ở tay phải

## Dựng hợp âm trên bất kỳ nốt bass nào
Đây là kỹ thuật mở toang mọi cánh cửa: một nốt giai điệu có thể được hoà âm bằng một hợp âm dựng trên **bất kỳ nốt nào trong 12 nốt**. Nếu giai điệu là C, luôn có một hợp âm nghe hay dựng trên C, D♭, D, E♭… cho tới B.

Cách làm: chọn một đường bass (đi xuống cromatic, đi lên cromatic, hay đi vòng quãng 5), rồi với mỗi nốt bass, hỏi: **nốt giai điệu là nốt gì của hợp âm trên bass này, và những loại hợp âm nào chứa nốt đó?**
- Giai điệu D, bass E: D là ♭7 của E → chọn được Em7, E7, Esus… (chẳng hạn E7♯9).
- Giai điệu E♭, bass E♭: là gốc → gần như mọi hợp âm E♭ đều được: E♭maj7, E♭maj7♯4, E♭m7, E♭7, E♭sus… Sus thì "trôi" và giải quyết êm về đâu cũng được.
- Giai điệu D, bass A: D là 11 của A → loại bỏ hợp âm trưởng và át (không có 11 thường), còn Am7, Aø, Asus.

Lựa chọn loại hợp âm và nốt biến hoá dựa trên **tiếng bạn thích**, không dựa trên xu hướng giải quyết. Và đừng đi xuống cromatic mãi — quá nhiều thứ gì cũng chán; đổi sang bước cung ở mấy hợp âm cuối.

## Hợp âm giảm "có răng"
Hợp âm bảy giảm thuần nghe khá hiền. Dân piano và guitar hay **nâng một nốt của hợp âm giảm lên một cung** cho nó "cắn" hơn. Nốt nâng lên vẫn thuộc cùng **âm giai giảm** (cung – nửa cung), nên vẫn đúng hoà âm.

::grand C4+Eb4+Gb4+A4/F#2=F♯°7 D4+Eb4+Gb4+A4/F#2=nâng_C C4+F4+Gb4+A4/F#2=nâng_E♭ | F♯°7, rồi nâng C lên D, rồi nâng E♭ lên F: vẫn trong âm giai giảm F♯ cung – nửa cung

## Nốt chung
Khi giai điệu **lặp lại một nốt**, hoà âm mỗi lần lặp bằng một hợp âm khác là một hiệu ứng đẹp, miễn là nốt đó thuộc âm giai của mỗi hợp âm mới. Hợp âm át đặc biệt hợp, vì chúng biến hoá được theo rất nhiều cách.

::grand G4/C3+E3+Bb3=C7 G4/B2+D#3+A3=B7♯5 G4/Bb2+D3+Ab3=B♭13 G4/A2+C#3+G3=A7 | Nốt G lặp bốn lần trên bốn hợp âm át đi xuống cromatic: G là 5 của C7, ♯5 của B7, 13 của B♭7, 7 của A7

## Nốt pedal
**Pedal** (nốt đạp) là chơi một chuỗi hợp âm trên **cùng một nốt bass**. Bass đứng yên, hoà âm ở trên chuyển động: căng thẳng tích tụ dần cho tới khi bass được "thả".

::grand E4+G4+B4/C2=Cmaj7 F4+A4+C5/C2=F/C Eb4+G4+Bb4/C2=Cm7 F4+Ab4+C5/C2=Fm/C D4+G4+B4/C2=G/C | Năm hợp âm trên pedal C

## Phối các kỹ thuật
Phần lớn các bản tái hoà âm hay nhất dùng **nhiều** kỹ thuật cùng lúc: một pedal ở hai ô đầu, slash chord, một hợp âm sus thay cho ii – V, một ii – V tiếp cận cromatic, rồi một đường bass đi xuống dưới nốt giai điệu chung. Levine phân tích kiểu tái hoà âm này trong các bản thu "Skylark" của Art Blakey (Cedar Walton chơi piano) và "Body And Soul" của Freddie Hubbard — nghe để thấy các kỹ thuật này nghe ra sao trong tay người giỏi.

::ex lv-rh-combined | Cùng câu giai điệu, phối nhiều kỹ thuật: pedal, slash chord, hợp âm sus, tiếp cận cromatic (Lamar soạn)

## Câu hỏi và bài tập
1. Hoà âm lại câu giai điệu của chương bằng một đường bass đi lên cromatic, bắt đầu từ một nốt khác với ví dụ.
2. Chọn một thế bấm bạn thích; chơi nó song song qua một câu giai điệu đi cromatic.
3. Tìm một nốt giai điệu lặp lại trong một bài chuẩn; hoà âm mỗi lần lặp bằng một hợp âm át khác.
4. Viết bốn ô trên pedal F, ít nhất bốn hợp âm.
`,
  },
  {
    slug: 'ket-lua-va-tiep-can-hop-am',
    title: 'Kết lừa, tiếp cận cromatic và hợp âm giảm bốn hướng',
    category: 'jazz',
    aliases: ['deceptive cadence jazz', 'kết lừa jazz', 'kết ngắt', 'V chord a major third below', 'át cách quãng 3 trưởng dưới', 'chromatic approach', 'tiếp cận cromatic', 'hợp âm giảm bốn hướng', 'đổi giai điệu', 'đổi hợp âm'],
    summary: 'Phần hai của tái hoà âm nâng cao: hợp âm sus thay cho ii – V; kết lừa (V không đi xuống quãng 5) và kiểu kết lừa của Billy Strayhorn — hợp âm V cách quãng 3 trưởng dưới hợp âm I; biến kết lừa quen thuộc thành kết thật; tiếp cận một hợp âm từ nửa cung trên hoặc dưới (một hợp âm, hai hợp âm, một ii – V); tiếp cận bằng hợp âm V của nó; hợp âm giảm giải quyết theo bốn hướng; đổi giai điệu cho hợp với hợp âm mới, hoặc đổi hợp âm cho nốt giai điệu bớt nhạt.',
    refs: [LEVINE_REF],
    body: `
Chương này tiếp nối [[tai-hoa-am-nang-cao]]: thêm những cách đặt một hợp âm mới vào đúng chỗ người nghe không ngờ.

## Hợp âm sus thay cho ii – V
Hợp âm sus và sus♭9 hay được dùng để thay hợp âm ii, hợp âm V, hoặc cả cặp ii – V. Quy tắc: hợp âm sus chọn **cùng gốc với hợp âm V** nó thay. Em7 – A7 thành A9sus; Cm7 – F7 thành Fsus. (Xem [[hop-am-sus-jazz]].)

## Kết lừa
**Kết lừa** xảy ra khi một hợp âm V **không** đi xuống quãng 5 như người ta chờ. Bài chuẩn đầy kết lừa: F7 đi về Gmaj7 thay vì B♭; C7alt đi về A♭m7 thay vì F; B7 đi về D thay vì E.

Một kiểu kết lừa đẹp lạ thường mà Levine tìm thấy ở cuối "Upper Manhattan Medical Group" của Billy Strayhorn: **tiếp cận hợp âm I bằng một hợp âm V cách nó quãng 3 trưởng ở dưới**. A7 về D♭: nốt C♯ (3 của A7) chính là D♭, gốc của hợp âm đích — một **nốt chung** làm bước đi êm như nhung. Bấm A7 với C♯ ở bass, viết A7/D♭, là thấy ngay.

::grand C#4+E4+G4+B4/C#3=A7/D♭ C4+F4+Ab4+Eb5/Db3=D♭maj9 | A7 (C♯ ở bass, viết A7/D♭) giải quyết về D♭: nốt C♯ = D♭ là cầu nối

Kiểu này đặc biệt hiệu quả khi **giai điệu là nốt 9 của hợp âm I**. Ví dụ: hợp âm đích E♭6, giai điệu F; tiếp cận bằng B7 (cách E♭ quãng 3 trưởng dưới; D♯ = E♭ là nốt chung). Hay đích Gmaj7, tiếp cận bằng E♭7 (G là 3 của E♭7 và gốc của đích).

::grand A3+D#4+F#4+F5/B2=B7 G3+Bb3+C4+F5/Eb3=E♭6/9 | B7 → E♭6/9 với giai điệu F (9 của E♭): D♯ của B7 = E♭

## Biến kết lừa thành kết thật
Một tái hoà âm gây bất ngờ: lấy một kết lừa **quen thuộc** và cho nó đi xuống quãng 5 như thể nó vốn thế. Ví dụ câu ii – V A♭m7 – D♭7 mà bài gốc lại trượt xuống Gm7 – C7: bạn cho nó về luôn G♭maj7, thành một ii – V – I trọn vẹn. Chỉ hiệu quả với bài **ai cũng thuộc** — không thì chẳng ai biết bạn vừa "lừa lại".

## Tiếp cận cromatic
**Tiếp cận cromatic** là đặt trước một hợp âm một hợp âm khác cách nó **nửa cung** (trên hoặc dưới). Hợp âm tiếp cận có thể cùng loại (Bm7 → Cm7) hoặc khác loại (B7alt → Cm7, D♭7♯11 → Cm7).

::grand F4+G4+Cb5/Db3=D♭7♯11 Eb4+G4+Bb4+D5/C3=Cm9 | D♭7♯11 tiếp cận Cm9 từ nửa cung trên

Tiếp cận được bằng:
- **một** hợp âm nửa cung trên hoặc dưới;
- **hai** hợp âm, một nửa cung trên và một nửa cung dưới (A♭7♯11 – F♯7♯11 → Gsus);
- **một ii – V** nửa cung trên hoặc dưới: tiếp cận Gm7 – C7 bằng A♭m7 – D♭7 (trên); tiếp cận B♭6 bằng Em7 – A7 (dưới).

Dân piano và guitar còn có thể "trượt" vào hợp âm từ nửa cung trên hoặc dưới ngay khi đang đệm. Chỉ cần nghe kỹ để không giẫm lên người solo.

## Tiếp cận bằng hợp âm V của nó
Mọi hợp âm G (Gmaj7, G7, Gm7, Gsus…) đều tiếp cận được bằng **D7**, hợp âm V của nó, với bất kỳ biến hoá nào: D7♯9 → Gm7 nghe rất hay.

## Hợp âm giảm: bốn hợp âm V trá hình
Bốn nốt của một hợp âm bảy giảm là **3 – 5 – 7 – ♭9** của một hợp âm V7♭9. Vì hoà âm giảm lặp lại sau mỗi quãng 3 thứ, một hợp âm giảm có thể là **bốn** hợp âm V7♭9 trá hình, giải quyết theo **bốn** hướng. Lấy F♯°7 (F♯ – A – C – E♭):

| F♯°7 là | của | giải quyết về |
| --- | --- | --- |
| 3 – 5 – 7 – ♭9 | D7♭9 | G |
| 5 – 7 – ♭9 – 3 | B7♭9 | E |
| 7 – ♭9 – 3 – 5 | A♭7♭9 | D♭ |
| ♭9 – 3 – 5 – 7 | F7♭9 | B♭ |

::grand C4+Eb4+F#4+A4/F#2=F♯°7 B3+D4+G4/G2=G C4+Eb4+F#4+A4/F#2=F♯°7 B3+E4+G4/E2=Em C4+Eb4+F#4+A4/F#2=F♯°7 Ab3+Db4+F4/Db3=D♭ C4+Eb4+F#4+A4/F#2=F♯°7 Bb3+D4+F4/Bb2=B♭ | Cùng một F♯°7 giải quyết về G, Em, D♭, B♭

Đây là một cách **chuyển giọng bất ngờ** rất gọn: Levine dẫn Donald Brown dùng F♯°7 để chuyển "Embraceable You" từ E♭ sang G ngay trong hai ô đầu.

## Đổi giai điệu
Nếu bạn nghĩ ra một hợp âm hay một tiến trình rất "chất" mà giai điệu không chịu khớp, thì **đổi giai điệu**. Một nốt giai điệu chỏi với hợp âm mới có thể dịch nửa cung; cả một câu có thể dịch lên theo các ii – V đi lên cromatic. Dùng có chừng: người nghe vẫn phải nhận ra bài.

## Đổi hợp âm
Ngược lại, có khi nốt giai điệu nghe **nhạt** vì nó là gốc hay nốt 5 của hợp âm. Đổi hợp âm, giữ nốt giai điệu, nốt ấy sống lại. Ví dụ bài kết ở A♭ với giai điệu A♭ (gốc): thay A♭maj7 bằng **G♭sus** — A♭ giờ là nốt 9 của G♭sus, thú vị hơn nhiều, nhất là ở hợp âm cuối bài.

::grand C4+Eb4+G4+Ab4/Ab2=A♭maj7 Cb4+Db4+Fb4+Ab4/Gb2=G♭9sus | Giai điệu A♭ ở trên cùng: là gốc của A♭maj7, là 9 của G♭9sus

## Câu hỏi và bài tập
1. Tiếp cận Fmaj7 bằng hợp âm V cách nó quãng 3 trưởng dưới. Đó là hợp âm gì, nốt chung là nốt nào?
2. Cho B°7 giải quyết theo bốn hướng; viết tên bốn hợp âm V7♭9 tương ứng.
3. Trong một bài chuẩn bạn biết, tìm một hợp âm có nốt giai điệu là gốc; thay bằng một hợp âm làm nốt đó thành 9 hoặc 11.
4. Tiếp cận Dm7 – G7 bằng một ii – V nửa cung trên.
`,
  },
  {
    slug: 'clave-va-latin-jazz',
    title: 'Clave và latin jazz',
    category: 'jazz',
    aliases: ['clave', 'son clave', 'rumba clave', '3-2 clave', '2-3 clave', 'salsa', 'Afro-Cuban jazz', 'latin jazz', 'montuno', 'tumbao', 'vạch nhịp vô hình'],
    summary: 'Những gì một người chơi jazz cần để đưa bài jazz vào nhịp Afro-Cuban: "latin" là một bức khảm chứ không phải một thứ nhạc; clave là hình tiết tấu hai ô (3 – 2 xuôi, 2 – 3 ngược, rumba clave) mà mọi bè đều khớp vào; luật quan trọng nhất là clave không đổi khi bài đã bắt đầu; cách chọn chiều clave theo tiết tấu giai điệu và sửa giai điệu cho khớp; montuno và tumbao; lối viết bỏ "vạch nhịp vô hình"; và vài nét lịch sử.',
    refs: [LEVINE_REF, ['Wikipedia — Clave (rhythm)', 'https://en.wikipedia.org/wiki/Clave_(rhythm)']],
    body: `
Người Bắc Mỹ hay nói "nhạc latin" như thể đó là một thứ nhạc thuần nhất. Thực ra nó là một **bức khảm** vô cùng phức tạp: từ biên giới Mexico xuống tới Tierra del Fuego có ảnh hưởng của châu Phi, Tây Ban Nha, Bồ Đào Nha và hàng nghìn nền văn hoá bản địa. Nhạc vùng cao nguyên Andes giống nhạc mariachi Mexico chừng như Mozart giống B.B. King: có liên hệ, nhưng mong manh.

Hai dòng latin ảnh hưởng mạnh nhất tới jazz là **Brazil** và **Afro-Cuban**. Dòng Brazil có ở [[dem-bossa-nova]]. Chương này lo phần Afro-Cuban: muốn chơi bài jazz trên nhịp Afro-Cuban, bạn phải biết một chút về **clave**.

## Clave
Nét độc nhất của nhạc Afro-Cuban (còn gọi salsa) là nó **tuân thủ nghiêm ngặt** một hình tiết tấu tên là **clave** (đọc "cla-vê"). Trong một ban salsa, mỗi nhạc cụ nhịp điệu — piano, bass, timbales, congas, bongo, güiro, chuông — chơi một hình khác nhau, và chúng khớp vào nhau như các mảnh ghép. Chất keo giữ tất cả lại là clave.

Clave là một hình **hai ô**, có hai chiều:
- **Clave xuôi**, hay **3 – 2**: ô đầu có ba tiếng (phách 1, "và" của phách 2, phách 4), ô sau có hai tiếng (phách 2 và 3).

::rhythm 4/4 >q. >q. >q / rq >q >q rq // | Clave 3 – 2 (son clave): 1, "và" 2, 4 / 2, 3

- **Clave ngược**, hay **2 – 3**: đảo hai ô.

::rhythm 4/4 rq >q >q rq / >q. >q. >q // | Clave 2 – 3: hai tiếng trước, ba tiếng sau

- **Rumba clave** (clave châu Phi): như 3 – 2 nhưng tiếng cuối của ô "3" lùi nửa phách, rơi vào "và" của phách 4.

::rhythm 4/4 >q. >q. re >e / rq >q >q rq // | Rumba clave 3 – 2: tiếng thứ ba rơi vào "và" của phách 4

Mọi thành phần của nhịp Afro-Cuban — hình trống, montuno của piano, đường bass, cách nhả giai điệu, câu kèn — đều xoay quanh clave.

## Luật quan trọng nhất
**Khi bài đã bắt đầu, clave không đổi.** Luật này gây không ít rắc rối khi đưa một bài jazz vào nhịp Afro-Cuban: bạn phải quyết định bài chơi ở 3 – 2 hay 2 – 3. Thường thì tiết tấu giai điệu tự trả lời: đếm xem các nốt giai điệu **trùng** với tiếng clave bao nhiêu lần ở mỗi chiều, chiều nào trùng nhiều (nhất là ở các điểm mạnh — "và" phách 2 và phách 4 của ô "3") thì chọn chiều đó.

Nhưng tác giả jazz hiếm khi để ý tới clave, nên phần lớn bài jazz có đoạn ở 2 – 3, đoạn ở 3 – 2, và đa số chẳng theo chiều nào. Vì thế nhiều lần "chơi bài này kiểu mambo đi" nghe không ổn. Hai cách sửa mà dân latin jazz vẫn làm:
1. **Đổi tiết tấu một vài nốt giai điệu** cho khớp clave. Thường chỉ cần đổi một hai nốt: ba nốt đen trong ô "3" chẳng hạn, viết lại thành hai nốt đen chấm dôi và một nốt đen là khớp ngay.
2. **Thêm hoặc bớt một ô** để clave quay về đúng chiều.

::rhythm 4/4 q q q rq // | Ba nốt đen: không khớp ô "3" của clave
::rhythm 4/4 q. q. q // | Viết lại thành đen chấm dôi – đen chấm dôi – đen: trùng đủ ba tiếng của ô "3"

Một bài học kinh điển, theo Levine: trong ba bản thu "Un Poco Loco" của Bud Powell (1951), tay trống Max Roach đổi dần hình chuông của mình qua các bản thu cho tới khi nó khớp clave mà giai điệu của Bud gợi ra. Blue Note phát hành cả ba bản, nên bạn nghe được cả quá trình.

## Montuno và tumbao
**Montuno** là hình đệm lặp lại của piano, thường chơi quãng tám có nốt hợp âm ở giữa, đảo phách theo clave. **Tumbao** là hình bass: không đánh phách 1, mà đánh "và" của phách 2 và phách 4 — thường **đón trước** hợp âm của ô sau. Hai hình dưới đây là mẫu đơn giản để bắt đầu, khớp với clave 2 – 3.

::ex lv-montuno | Một montuno đơn giản trên C – F – G7 với bass tumbao, khớp clave 2 – 3 (Lamar soạn)

## "Vạch nhịp vô hình"
Lối ký âm phương Tây có một luật: đừng viết một nốt vắt qua **vạch nhịp vô hình** chia đôi ô 4/4 (giữa phách 2 và 3); phải tách thành hai nốt nối dây. Với hầu hết nhạc phương Tây thì hợp lý, nhưng với nhạc latin đầy đảo phách thì nó làm bản nhạc rối mắt: một hình montuno viết đúng luật có thể có 12 nốt và 3 dây nối, viết theo lối latin chỉ 10 nốt và 1 dây nối. Dân latin **bỏ qua** luật này, và quen rồi bạn sẽ thấy cách đó dễ đọc hơn hẳn.

::rhythm 4/4 e q q q e // | Viết theo lối latin: nốt đen vắt qua giữa ô, ít dây nối, dễ đọc

## Vài nét lịch sử
Trống, các hình tiết tấu và lối hát xướng – đáp được người nô lệ châu Phi mang tới Cuba; hoà trộn với hoà âm, giai điệu và các thể ca – vũ Tây Ban Nha, chúng thành nhạc Afro-Cuban. Từ cuối thế kỷ XIX nó đã chịu ảnh hưởng jazz, và ngược lại: jazz từ buổi đầu đã có "chút gia vị Tây Ban Nha" (Jelly Roll Morton gọi là *Spanish tinge*) nhờ đường giao thương giữa New Orleans, Havana và các cảng vùng Caribe. Thập niên 1940, Dizzy Gillespie hợp tác với tay trống conga Chano Pozo, còn ban Machito (với Mario Bauzá) mở đường cho "Cubop". Chữ **salsa** ("nước sốt") do giới bầu show latin ở New York đặt ra, và cũng như chữ "jazz", không phải nghệ sĩ nào cũng thích nó.

Levine gợi ý nghe *Ya Yo Me Curé* của Jerry González và *El Sonido Nuevo* của Eddie Palmieri với Cal Tjader, và đọc *The Salsa Guidebook* của Rebeca Mauleón để đi sâu hơn về clave.

## Câu hỏi và bài tập
1. Vỗ clave 3 – 2 bằng tay, chân giậm bốn phách đều. Rồi đổi sang 2 – 3 mà không dừng.
2. Lấy giai điệu bốn ô đầu một bài jazz bạn biết; đếm số nốt trùng với clave 3 – 2 và 2 – 3. Chọn chiều nào?
3. Chơi montuno trong chương với clave phát từ máy đếm nhịp hoặc bạn tập vỗ.
4. Viết lại một ô ba nốt đen cho khớp ô "3" của clave.
`,
  },
  {
    slug: 'doc-lead-sheet-va-thuoc-bai',
    title: 'Đọc lead sheet và thuộc một bài',
    category: 'jazz',
    aliases: ['lead sheet', 'đọc lead sheet', 'fake book', 'real book', 'thuộc bài', 'học thuộc bài jazz', 'memorizing a tune', 'ký hiệu hợp âm đúng sai', 'hợp âm gốc của bài chuẩn'],
    summary: 'Lead sheet cho bạn rất ít thông tin, phần lớn bằng mật mã. Cách đọc: hoá biểu chỉ áp dụng cho giai điệu; giai điệu chơi ở quãng nào cũng được; ký hiệu hợp âm của bài chuẩn là kết quả một quá trình tiến hoá dài nên không có "hợp âm gốc" tuyệt đối; nhịp độ và cảm giác (swing hay móc đơn đều); và cách soát từng ký hiệu — nốt mở rộng, nốt biến hoá, nốt 7 của hợp âm thứ — xem đúng, sai hay chỉ là tuỳ chọn. Rồi thuộc bài theo ba lớp: hình thức, giai điệu, hợp âm.',
    refs: [LEVINE_REF],
    body: `
**Lead sheet** là một tờ giấy có giai điệu, ký hiệu hợp âm và thường là lời ca. Đôi khi có thêm dạo đầu, thế bấm, các cú "hit" tiết tấu, đoạn kết. Nhưng phần lớn thì nó cho bạn rất ít, và cái ít ấy lại bằng mật mã. Vậy mà người chơi jazz làm ra phép màu từ vài ký hiệu đó. Chương này nói cách đọc cái mật mã ấy, rồi cách học thuộc một bài để khỏi phải đọc nữa. (Cách đọc từng ký hiệu hợp âm có ở [[ky-hieu-hop-am]].)

## Hoá biểu
Việc đầu tiên khi cầm một lead sheet lạ: nhìn **hoá biểu**. Hai điều cần nhớ:
- **Hoá biểu chỉ áp dụng cho giai điệu, không áp dụng cho hợp âm.** Người mới hay nghĩ không được chơi F♯ trên Gmaj7 khi bài có một dấu giáng. Được chứ: Gmaj7 là Gmaj7, dù hoá biểu là gì.
- Lead sheet thường chỉ ghi hoá biểu **ở dòng đầu**. Và hợp âm ô đầu có thể đánh lừa bạn về giọng của bài (có bài mở đầu bằng một hợp âm cách xa chủ âm). Nhìn hoá biểu trước.

## Giai điệu
Giai điệu trên lead sheet thường viết ở **quãng giữa khoá Sol** cho dễ đọc, ít dòng kẻ phụ. Nhưng bạn **chơi ở quãng nào cũng được**. Đổi quãng tám giữa câu là một hiệu ứng hay, làm câu nhạc nghe như đang trò chuyện — miễn đừng lạm dụng kẻo nghe như cái yo-yo. Nhả lại tiết tấu giai điệu (sớm một chút, muộn một chút) cũng vậy.

## Hợp âm: không có "bản gốc" tuyệt đối
Ký hiệu hợp âm trên lead sheet không đáng tin như tấm bia đá Moses mang xuống núi. Hợp âm mà dân jazz chơi trên một bài chuẩn thời 1920 – 1930 là kết quả một chuỗi tiến hoá:
1. Nhạc sĩ viết bài.
2. Nhà xuất bản đưa bài cho một tay piano soạn bản "nhạc tờ" dễ đọc cho công chúng — thường giản lược hoà âm.
3. Bài được thu âm, nổi tiếng, người ta mua nhạc tờ.
4. Dân jazz thích bài, sửa hợp âm.
5. Một nghệ sĩ jazz nổi tiếng thu bài, đổi hợp âm, thêm dạo đầu, đoạn chuyển hay đoạn kết riêng.
6. Bản thu ấy thành "bản chuẩn mới" trong giới jazz.

Vì vậy gần như không thể xác định "hợp âm gốc" của một bài chuẩn, trừ khi bạn có bản thảo tay của tác giả. Với bài do chính dân jazz viết (Coltrane, Wayne Shorter…), bản ta chơi gần bản gốc hơn nhiều: hợp âm vốn đã được viết cho người chơi jazz, và bài được chép thẳng từ bản thu gốc.

Làm gì với sự không chắc chắn này? **Chép bài từ bản thu.** Fake book là công cụ tuyệt vời, nếu nó chính xác; tự chép từ bản thu là cách chắc chắn duy nhất. Nhưng ngay cả bản thu cũng có thể đã đổi hợp âm: Levine nêu Miles Davis thay hẳn đoạn giữa của "Well, You Needn't" (Monk) và "When Lights Are Low" (Benny Carter). Khi có người gọi một trong hai bài ấy, thường phải bàn nhanh trên sân khấu: "bản Monk hay bản Miles?". Đôi khi bạn phải biết **hơn một** bộ hợp âm.

## Nhịp và cách nhả
Tiết tấu và cách nhả là thứ khó truyền qua giấy nhất. Đã nghe bản thu thì bạn biết bài nghe ra sao; chưa nghe thì phải tìm manh mối. Lead sheet hiếm khi ghi nhịp độ chính xác, chỉ "ballad", "nhanh", "medium walk". Swing hay móc đơn đều? Các nhãn "bossa", "samba", "latin", "jazz rock" nghĩa là móc đơn đều; không có nhãn gì thì cứ mặc định là swing.

## Ký hiệu hợp âm: đúng, sai hay tuỳ chọn
Khi đọc một lead sheet, hãy hoài nghi lành mạnh, nhất là với **nốt mở rộng** (9, 11, 13), **nốt biến hoá** (♭9, ♯9, ♯11, ♭5, ♯5, ♭13) và **nốt 7 của hợp âm thứ** (thứ có thể là m7 hoặc m(maj7)). Coi chúng là **tuỳ chọn** cho tới khi kiểm xong. Giả định gốc và loại hợp âm (trưởng, thứ, át) là đúng; còn lại thì soát với **giai điệu**:

| Trên lead sheet | Giai điệu có | Kết luận |
| --- | --- | --- |
| Cm7, không đi tiếp tới F7 | không có B♭ | là hợp âm i thứ: Cm6, Cm(maj7) đều được; m7 chỉ là tuỳ chọn |
| E♭maj7♯4 | A♭ (bậc 4 thường) | ♯4 **sai**: chỏi với giai điệu |
| C7alt | G (nốt 5 thường) | alt **sai** ở chỗ đó: hợp âm alt không có nốt 5 thường |
| F7alt | D (13 thường) | alt sai; F7♭9 (âm giai giảm có D) hợp hơn |
| G7♭9 | A (9 thường) | ♭9 sai |
| Dø | B (6 thường của Rê thứ) | Dm7 hợp hơn |

Nguyên tắc: **giai điệu thắng**. Lúc chơi giai điệu, ký hiệu phải khớp với nó. Lúc solo, bạn tự do hơn nhiều. Và nhớ thêm vài kinh nghiệm: ♭9 nghe hay trên hợp âm V **đi xuống quãng 5**; V7♯11 thường **không** nằm trong một ii – V và không đi xuống quãng 5; hợp âm ø trong một ii – V thường đi với V7♭9 hoặc V7alt.

## Thuộc một bài
Có ba thứ cần thuộc: **hình thức, giai điệu, hợp âm**.

**Hình thức.** Làm thám tử trước. Nhìn từng đoạn tám ô: đoạn nào giống nhau? Một bài 32 ô với 40 – 50 hợp âm nghe thì đáng sợ, nhưng nếu ba đoạn A gần như giống hệt (chỉ khác ô cuối) thì đó là một bài AABA (xem [[hinh-thuc-ca-khuc-32]]), và viết lại bằng dấu nhắc lại thì chỉ còn chừng 18 ô. Bạn vừa giảm một nửa việc phải nhớ.

**Giai điệu.** Chơi vài lần, rồi **hát**. Chia thành câu; thuộc câu một, câu hai… Để ý hình dáng câu, chỗ giai điệu rải hợp âm, chỗ nó tiếp cận cromatic vào nốt hợp âm. Thuộc lời ca càng tốt: lời giúp nhớ giai điệu và cho bạn biết bài nói về điều gì. Có bản thu tốt thì nghe đi nghe lại, hát theo, kể cả qua phần solo.

**Hợp âm.** Đừng thuộc từng hợp âm như thuộc số điện thoại. Thuộc **theo giọng và theo khối**: "hai ô ii – V về F, rồi ii – V về E♭, rồi một turnaround"; nghĩ bằng bậc La Mã (xem [[phan-tich-tien-trinh-jazz]]) để bài chuyển sang giọng nào bạn cũng chơi được. Chơi bass của bài một mình; chơi nốt dẫn hướng 3 – 7 qua cả bài (xem [[not-dan-huong]]).

## Câu hỏi và bài tập
1. Lấy một lead sheet trong fake book; soát từng ký hiệu có nốt mở rộng hoặc biến hoá theo bảng trong chương.
2. Tìm hai bản thu khác nhau của cùng một bài chuẩn; ghi lại chỗ hợp âm khác nhau.
3. Viết lại một bài AABA bằng dấu nhắc lại; đếm xem còn bao nhiêu ô phải nhớ.
4. Thuộc một bài mới trong một tuần theo thứ tự hình thức – giai điệu – hợp âm; ngày cuối chơi nó ở một giọng khác.
`,
  },
  {
    slug: 'head-dao-dau-va-ket',
    title: 'Head, dạo đầu, đoạn chuyển và đoạn kết',
    category: 'jazz',
    aliases: ['head', 'contrafact', 'giai điệu mới trên hợp âm cũ', 'intro jazz', 'dạo đầu jazz', 'interlude', 'đoạn chuyển', 'special ending', 'shout chorus', 'verse', 'vamp til cue'],
    summary: 'Hai mảng của một bài jazz ngoài thân bài: head (contrafact) — giai điệu mới viết trên hợp âm của một bài có sẵn, như "Anthropology" trên "I Got Rhythm" hay "Donna Lee" trên "Indiana"; và những phần thêm thuộc phần phối: dạo đầu, đoạn chuyển, đoạn kết riêng, shout chorus, verse, các đoạn để trống cho ngẫu hứng. Biết chúng cũng cần như biết thân bài.',
    refs: [LEVINE_REF, ['Wikipedia — Contrafact', 'https://en.wikipedia.org/wiki/Contrafact']],
    body: `
## Head
Trong nhạc cổ điển, một giai điệu viết trên hoà âm của một bài có sẵn gọi là **contrafact**. Trong jazz, những giai điệu mới viết trên hợp âm của bài chuẩn thường được gọi là **head**. Có head bám sát hợp âm gốc; có head chỉ còn họ hàng xa. Có head lấy hợp âm của **hai** bài; thậm chí có head viết trên một head khác.

Vì sao dân bebop viết head? Chơi trên hợp âm của một bài quen thì ai cũng chơi được ngay, và một giai điệu mới (đầy nốt bebop) biến bài cũ thành bài của mình. Một lý do thực tế thường được nhắc: hợp âm không có bản quyền, giai điệu thì có.

| Head | Hợp âm của | Tác giả head |
| --- | --- | --- |
| Anthropology | I Got Rhythm | Charlie Parker (với Dizzy Gillespie) |
| Dizzy Atmosphere | I Got Rhythm | Dizzy Gillespie |
| Cottontail | I Got Rhythm | Duke Ellington |
| Oleo | I Got Rhythm | Sonny Rollins |
| Donna Lee | (Back Home Again In) Indiana | ghi tên Charlie Parker (Miles Davis cũng nhận là tác giả) |
| Ornithology | How High The Moon | Charlie Parker, Benny Harris |
| Bird Of Paradise | All The Things You Are | Charlie Parker |
| Hot House | What Is This Thing Called Love | Tadd Dameron |
| Dig | Sweet Georgia Brown | Miles Davis |
| Evidence | Just You, Just Me | Thelonious Monk |
| Groovin' High | Whispering | Dizzy Gillespie |

Hợp âm "I Got Rhythm" của Gershwin là nguồn head lớn nhất — đủ để có cả một chương riêng: [[rhythm-changes]]. Một vài head phức tạp hơn: "Ah-Leu-Cha" của Parker lấy đoạn A từ "Honeysuckle Rose" và đoạn B từ "I Got Rhythm"; "Fifth House" của Coltrane viết trên "Hot House", tức là head của một head.

**Bài tập hay nhất của chương:** tự viết một head. Chọn một bài chuẩn bạn thuộc hợp âm, viết một giai điệu bebop mới trên đó (xem [[sang-tac-jazz]] và [[am-giai-bebop]]). Bạn vừa sáng tác, vừa học hợp âm của bài tới tận xương.

## Dạo đầu, đoạn chuyển, đoạn kết
Dân jazz dùng rất sáng tạo những phần thêm này, và chúng gần như luôn được chơi như **một phần của bài**. Bạn cần thuộc chúng như thuộc thân bài: khi có người gọi một bài có dạo đầu riêng nổi tiếng, bạn không muốn là người duy nhất trên sân khấu không biết nó. Nhìn chung, các phần thêm này **không** nằm trong khung để solo.

**Dạo đầu (intro)** là phần mở đầu viết riêng. Có dạo đầu ngắn bốn ô, có cái dài hơn chục ô; có cái là một **vamp** của bè nhịp điệu lặp "tới khi có hiệu lệnh" (*vamp 'til cue*). Có dạo đầu do tác giả viết, có cái do một nghệ sĩ thêm vào trong một bản thu nổi tiếng rồi thành chuẩn — chẳng hạn đoạn dạo đầu tám ô của "All The Things You Are" mà mọi người chơi không phải do Kern viết.

**Đoạn chuyển (interlude)** là phần viết riêng chơi giữa hai chorus, thường là giữa phần giai điệu và solo đầu tiên. Ví dụ nổi tiếng: đoạn chuyển 16 ô và đoạn break bốn ô của "A Night In Tunisia".

**Đoạn kết riêng (special ending)** là đoạn kết viết riêng, chơi ở chorus cuối. Có những đoạn kết theo "luật miệng": nhiều người nhắc lại hai ô gần cuối một bài lên một cung hay một quãng 3 thứ rồi mới về — và chẳng ai báo trước sẽ chơi kiểu nào, nên phải nhảy theo thật nhanh.

Nhiều bài có **cả** dạo đầu, đoạn chuyển và đoạn kết; có bài dùng **cùng một** đoạn cho cả ba.

::ex lv-intro-ending | Một kiểu dạo đầu – kết quen thuộc mà ai cũng nên biết: vamp iii – VI – ii – V trên pedal V, kết bằng cú "tag" lặp ba lần câu ii – V (Lamar soạn, ở Fa trưởng)

**Shout chorus** là một chorus viết riêng, chơi giữa solo cuối và phần giai điệu cuối, thường là chỗ cả ban "hét" to nhất.

**Verse** là một đoạn mở đầu đặc biệt, hay chơi tự do nhịp (rubato). Phổ biến trong nhạc hát, hiếm trong nhạc khí; ba verse nổi tiếng mà Levine nêu: "Lush Life" (Billy Strayhorn), "I Remember Clifford" (Benny Golson), "Stardust" (Hoagy Carmichael).

## Phần để trống cho ngẫu hứng
Có bài mà một đoạn chỉ có hợp âm, không giai điệu: người chơi ứng tác ngay trong phần giai điệu. "Oleo" của Sonny Rollins là ví dụ quen nhất — đoạn giữa (bridge) để trống.

## Không có gì là bất khả xâm phạm
Dân jazz đôi khi sửa hẳn bài của người khác: Miles Davis thay đoạn giữa của hai bài (xem [[doc-lead-sheet-va-thuoc-bai]]); khi solo trên "A Child Is Born" (Thad Jones, 32 ô), người ta thường bỏ hai ô cuối, còn khung solo 30 ô. Nghe bản thu là cách duy nhất để biết bài được chơi thật ra sao.

## Câu hỏi và bài tập
1. Chọn một head trong bảng; tìm bản thu và chơi hợp âm của bài gốc trong lúc nghe.
2. Viết một head 32 ô trên hợp âm rhythm changes.
3. Viết một đoạn dạo đầu bốn ô và một đoạn kết "tag" cho một bài bạn đang tập.
4. Nghe một bản thu có verse; chơi verse rubato rồi vào thân bài đúng nhịp.
`,
  },
  {
    slug: 'nhung-ngo-nhan-trong-ly-thuyet-jazz',
    title: 'Những ngộ nhận và giới hạn của lý thuyết jazz',
    category: 'jazz',
    aliases: ['ngộ nhận jazz', 'four myths', 'bốn ngộ nhận', 'nốt sai', 'wrong notes', 'giới hạn của lý thuyết', 'phê bình jazz', 'sách về jazz'],
    summary: 'Bốn điều nhiều thầy dạy mà không đúng: dân piano không nên bấm hợp âm thế gốc; hợp âm át phải có cả nốt 3 và 7; nốt 4 thay cho nốt 3 trong hợp âm sus; có nốt "hay" hơn nốt khác. Ý nghĩa mới của "nốt hợp âm" với hợp âm sus và sus♭9. Lý thuyết chỉ là một điệu nhảy quanh âm nhạc. Cách nghĩ về nốt sai, lời phê bình, và vài cuốn sách nên đọc.',
    refs: [LEVINE_REF],
    body: `
Chương cuối gom những thứ lặt vặt không vừa chương nào, nhưng lại thiết thực bậc nhất.

## Bốn ngộ nhận
Đây là bốn điều có thể bạn đã được những người thầy rất có thiện ý dạy. Theo Levine, cả bốn đều không đúng.

**1. "Dân piano không nên bấm hợp âm ở thế gốc khi có bass."** Bud Powell và Thelonious Monk bấm thế gốc gần như mọi lúc; McCoy Tyner, Kenny Barron, Cedar Walton cũng bấm thế gốc rất nhiều. Nguồn gốc ngộ nhận có lẽ thế này: cuối thập niên 1950, Red Garland, Wynton Kelly và Bill Evans phổ biến [[xep-hop-am|thế bấm không gốc]]; các thầy học được và bảo học trò "thế bấm không gốc cho tay bass nhiều chỗ hơn" — đúng. Rồi câu đó biến dạng thành "đừng bấm thế gốc, sẽ vướng tay bass". Với một cậu học trò ban nhạc trường đang vất vả tìm cho ra thế Cmaj7 gốc, nghe câu cấm ấy thật oan.

**2. "Hợp âm át phải có cả nốt 3 và nốt 7."** Bud Powell đã chơi thế bấm át không có nốt 3 từ thập niên 1940. Hợp âm át **không biến hoá** thường cần cả 3 và 7 để làm chức năng V; nhưng khi đã biến hoá (♭9, ♯9, ♯11, ♭13…), nốt 3 và 7 mất bớt vai trò.

::grand F3/G2=G7_(1–♭7) F4+Ab4+Bb4+Eb5/G2=G7alt_(không_3) | Thế bấm kiểu Bud Powell chỉ có gốc và ♭7; rồi một G7alt không có nốt 3 (♭7, ♭9, ♯9, ♭13)

**3. "Nốt 4 thay cho nốt 3 trong hợp âm sus."** Xem [[hop-am-sus-jazz]]: nốt 3 đặt trên cao là một trong những nốt đẹp nhất trên hợp âm sus.

**4. "Có nốt hay hơn nốt khác"** — 9, 11, 13 thú vị hơn; nốt biến hoá thú vị hơn nốt thường; gốc và nốt 5 thì nhạt. Có một hạt sự thật ở đây. Nhưng khi chơi với người khác, nốt của bạn là một mảnh trong bức khảm gồm nốt của **cả ban**. Tuỳ bạn cùng chơi đang chơi gì, nốt gốc có thể là nốt **căng** nhất bạn chơi được. Gốc của một hợp âm trưởng có thể là nốt tối nhất hoặc đẹp nhất mà một kèn hay một giọng hát có thể ngân. Thành công của mỗi nốt phụ thuộc một phần vào những người cùng chơi — và yếu tố may rủi ấy chính là phép màu của nhạc ngẫu hứng. Nếu bạn là trưởng ban, đừng ra lệnh cho từng người chơi nốt gì: jazz là **ngẫu hứng tập thể**.

## "Nốt hợp âm" không còn như xưa
Theo truyền thống, gốc – 3 – 5 – 7 là **nốt hợp âm**, những nốt quyết định chất trưởng, thứ hay át. Định nghĩa ấy dùng tốt cho vài thế kỷ nhạc cổ điển và cho jazz tới thập niên 1940. Nhưng với nhiều hợp âm jazz hôm nay, nó vô nghĩa:
- Chất của hợp âm **sus** do **1 – 4 – ♭7** quyết định.
- Chất của hợp âm **sus♭9** do **1 – ♭9 – 4** quyết định.

::grand F4+Bb4/C3=Csus_(1–4–♭7) Db4+F4/C3=Csus♭9_(1–♭9–4) | Ba nốt quyết định chất của Csus và Csus♭9 — dân piano, guitar hay bấm đúng ba nốt này

Hợp âm sus, sus♭9, slash chord vẫn có "nốt hợp âm", chỉ không phải gốc – 3 – 5 – 7.

## Lý thuyết không phải sự thật
Có lý do người ta gọi môn này là lý thuyết âm nhạc, chứ không phải sự thật âm nhạc. Lý thuyết cố giải thích bằng lý trí một trải nghiệm vốn phi lý trí. Ký hiệu hợp âm chỉ **xấp xỉ** cái ta nghe: có những hợp âm (Levine dẫn một hợp âm Herbie Hancock bấm ở dạo đầu "Fee-Fi-Fo-Fum" của Wayne Shorter) mà không ký hiệu nào gọi đúng tên, vì nó chứa ba nốt cromatic liền nhau mà không âm giai nào trong sách có. Hãy để lý thuyết là kim chỉ nam, không phải cái áo bó. Trên hết: **nghe**.

## Nốt sai
Là nghệ sĩ, bạn nên nhắm tới hoàn hảo; nhưng đừng để nốt sai làm bạn nản. Nhạc ngẫu hứng, tự bản chất, đầy lỗi. Art Blakey có câu (như Levine ghi): "Có ai đó chơi một nốt sai, và jazz ra đời." Cách nghĩ tích cực: **nốt tiếp theo là nốt đầu tiên của phần còn lại trong bài solo của bạn.** Và một nốt "sai" lặp lại có chủ ý, hoặc trượt nửa cung vào nốt đúng, thường nghe như bạn cố ý.

## Phê bình
Là học trò, bạn mở lòng đón nhận phê bình và lời khuyên. Nhưng hãy nhận mọi lời phê bình với một nhúm muối: thầy không phải không bao giờ sai, dù họ chơi hay dạy giỏi đến đâu. Người này bảo nhịp bạn tốt, người kia bảo bạn chơi vội. Lời khuyên thì miễn phí, nhưng miễn phí không có nghĩa là đúng. Người phê bình tốt nhất là chính bạn: **thu âm mình thường xuyên** và nghe lại thật kỹ.

Với lời bình trên báo chí thì nên dày da. Levine nhắc rằng chính những album nay được coi là kinh điển, như *Now He Sings, Now He Sobs* của Chick Corea, từng nhận điểm thấp nhất từ tạp chí jazz hàng đầu; và Coltrane cùng Red Garland từng bị một nhà phê bình nổi tiếng chê thậm tệ. Họ còn bị nói vậy, thì bạn cũng sẽ bị nói gì đó.

## Vài cuốn sách nên đọc
Levine đặc biệt giới thiệu những cuốn do chính người chơi jazz viết, vì chúng cho cái nhìn từ bên trong:
- *Notes And Tones* của tay trống Arthur Taylor — phỏng vấn ba mươi nghệ sĩ jazz cuối thập niên 1960, thẳng thắn cả về âm nhạc lẫn chuyện chủng tộc thời đó.
- *Self-Portrait Of A Jazz Artist* của nghệ sĩ saxophone Dave Liebman — tự truyện về đời một người chơi jazz.

## Câu hỏi và bài tập
1. Chơi một chorus blues chỉ bằng thế bấm thế gốc hai tay; rồi một chorus bằng thế bấm không gốc. Tay bass (hoặc bản phát đệm) có bị vướng không?
2. Bấm Csus với nốt 3 ở trên cùng; so với Csus không có nốt 3.
3. Thu âm một chorus solo của bạn; ghi ra ba điều bạn thích và ba điều muốn sửa.
4. Đọc một bài phê bình về một album jazz bạn thích; bạn đồng ý tới đâu?
`,
  },
]
