import type { Article } from '../wiki'
import { PERSICHETTI_REFS } from './persichetti-hub'

/** "Hoà âm thế kỷ XX" theo Persichetti, chương 1 – 6: quãng, thang âm, hợp âm chồng quãng 3, quãng 4, thêm nốt, quãng 2. */
export const persichettiA: Article[] = [
  {
    slug: 'persichetti-quang',
    title: 'Hoà âm thế kỷ XX (1) — Quãng: độ căng, thể đảo, độ vang',
    category: 'harmony',
    aliases: ['độ căng của quãng', 'thuận mở thuận êm nghịch nhẹ nghịch gắt', 'interval tension', 'Persichetti quãng'],
    summary: 'Chương 1 Twentieth-Century Harmony: xếp 12 quãng theo bốn mức căng, quãng 4 và tritone tuỳ ngữ cảnh; thể đảo và khoảng cách đổi tính chất; phân loại hợp âm theo nghịch gắt và tritone; chuỗi bồi âm và chất liệu nhạc cụ.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 1 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. Persichetti bắt đầu không từ hợp âm mà từ **quãng**: muốn điều khiển độ căng của hoà âm mới, trước hết phải nghe được độ căng của từng quãng bên trong nó.

## Bốn mức căng
Tính chất của quãng thay đổi theo phong cách, nhưng một quãng đứng riêng có một "chất" cơ bản do chuỗi bồi âm quy định. Sách chia 12 quãng của hệ bình quân thành [^persichetti-1961, tr. 14]:
- **thuận mở**: quãng 5 đúng, quãng 8;
- **thuận êm**: quãng 3 và quãng 6 lớn, nhỏ;
- **nghịch nhẹ**: quãng 2 lớn, quãng 7 nhỏ;
- **nghịch gắt**: quãng 2 nhỏ, quãng 7 lớn;
- **quãng 4 đúng**: thuận hoặc nghịch;
- **tritone**: lưỡng nghĩa — trung tính hoặc bứt rứt.

::staff treble C4+G4=thuận_mở C4+E4=thuận_êm C4+D4=nghịch_nhẹ C4+Db4=nghịch_gắt C4+F4=quãng_4 C4+F#4=tritone | Đại diện cho sáu nhóm, cùng âm gốc C (ví dụ của người biên soạn)

Hai quãng cuối chỉ xếp được trong ngữ cảnh: tritone chia đôi quãng 8, nghe **trung tính trong đoạn cromatic** và **bứt rứt trong đoạn diatonic**; quãng 4 nghe **thuận giữa môi trường nghịch** và **nghịch giữa môi trường thuận** [^persichetti-1961, tr. 15].

## Đường căng
Các quãng nối nhau theo bất kỳ trật tự nào, nên người viết có thể vẽ một "đường căng": đi từ quãng ít căng tới quãng rất căng, hoặc ngược lại. Độ căng của quãng có thể **cùng chiều hoặc ngược chiều** với âm sắc, cường độ, tốc độ: nghịch gắt giao cho kèn kép thổi to nghe "khớp", giao cho dây chặn tiếng thì thành nội tâm [^persichetti-1961, tr. 16]. Khái niệm thuận – nghịch cũng trượt: trong một đoạn toàn nghịch gắt, chính nghịch gắt trở thành "chuẩn thuận" của đoạn ấy [^persichetti-1961, tr. 17].

## Thể đảo và khoảng cách
- Đảo quãng là đổi khoảng cách và âm vực, nên đổi tính chất: quãng 5 vững thành quãng 4 kém vững; quãng 2 nhỏ "cắt" mở ra thành quãng 7 lớn bớt gai; tritone đảo vẫn là tritone nhưng đổi âm vực rõ [^persichetti-1961, tr. 17].
- Giãn quá một quãng 8: quãng 3, 6 giàu hơn; quãng 8, 5 và quãng 4 thuận trở nên rỗng hơn; quãng 2, 7 bớt cắn nhưng mơ hồ hơn; tritone càng "khó đoán", càng ít đòi giải quyết [^persichetti-1961, tr. 17 – 18].

## Quãng trong hợp âm
Hợp âm có thể xếp bằng quãng cách đều, bằng các dạng khác nhau của cùng một quãng, hoặc bằng quãng hỗn hợp [^persichetti-1961, tr. 19]. Trước khi cho hợp âm chuyển động, hãy kê tính chất của **mọi quãng bên trong**: hợp âm ba nốt có ba quãng, bốn nốt có sáu, năm nốt có mười [^persichetti-1961, tr. 20].

Persichetti đề nghị một phân loại thô cho mọi hợp âm [^persichetti-1961, tr. 20 – 21]:
1. có ít nhất một **nghịch gắt** / không có nghịch gắt;
2. trong mỗi nhóm: có **tritone** / không có tritone.

Hợp âm có tritone thường bứt rứt; không có tritone thì vững, kể cả khi rất nghịch. Quãng 4 trong hợp âm được "phân xử" bằng **quãng giữa âm trầm và âm không thuộc quãng 4**: nếu quãng ấy nghịch thì quãng 4 nghe như thuận mở, nếu quãng ấy thuận êm thì quãng 4 nghe nghịch [^persichetti-1961, tr. 21].

::staff treble C4+F4+B4=bè_trầm–B:_nghịch_gắt C4+F4+Bb4=bè_trầm–Bb:_nghịch_nhẹ C4+F4+A4=bè_trầm–A:_thuận_êm | Cùng quãng 4 C–F, âm thứ ba quyết định quãng 4 nghe thuận hay nghịch (ví dụ của người biên soạn)

## Tăng đôi và xếp khoảng cách
- Âm nào cũng có thể tăng đôi, nhân ba hay bỏ đi tuỳ mục đích: tăng đôi quãng 3 lớn thêm màu, tăng đôi âm nghịch thêm cắn; tăng đôi mọi bè cho ra hoà âm nghe như bộ gõ [^persichetti-1961, tr. 21].
- Xếp bình thường: quãng rộng ở dưới; muốn "căng" thì đặt quãng rộng ở trên. Hoà âm dày đặc quãng nhỏ sẽ sáng lại nếu rải thành chuỗi quãng hai bè — nhưng hoà âm "đục" cũng là chất liệu cần thiết [^persichetti-1961, tr. 22 – 23].

## Chuỗi bồi âm
- Hợp âm ba trưởng ứng với bồi âm 1 – 3 – 5; từ bồi âm thứ 7 trở lên lệch khỏi hệ bình quân, nên suy hoà âm từ các bồi âm cao "chỉ là lý trí, không còn là tai" [^persichetti-1961, tr. 24].
- Hoà âm vang **không** đến từ việc thêm bồi âm ngày càng cao, mà từ **bồi âm của bồi âm**: trong C – E – G – B, B là quãng 5 trên E, nên cả C lẫn E đều có quãng 5 của mình đi kèm [^persichetti-1961, tr. 24].
- Hợp âm vang nhất khi khoảng cách giống chuỗi bồi âm: thưa ở dưới, dày ở trên. Một âm đỡ ở quãng 5 hoặc quãng 9 dưới bè trầm (ví dụ contrebasse gảy) phủ lên hoà âm một lớp "ánh" [^persichetti-1961, tr. 25].

## Chất liệu nhạc cụ
Cùng một chuỗi hợp âm, viết cho hợp xướng hay dàn nhạc sẽ thành hai bản hoà âm khác hẳn về độ căng, khoảng cách và cường độ [^persichetti-1961, tr. 25 – 26]. Màu dàn nhạc có thể làm dịu hợp âm 13, làm mất vẻ êm của hợp âm ba; cụm âm quãng 2 nới ra khi tách các âm cho những bè nhạc cụ khác nhau; hợp âm chồng trong suốt khi mỗi lớp giao cho một bộ [^persichetti-1961, tr. 26 – 27]. Nhạc viết cho dàn nhạc chơi trên piano sẽ cho ấn tượng sai.

## Câu hỏi và bài tập
1. Viết một câu nhạc hai bè chủ yếu bằng quãng nghịch nhưng hát êm, nhỏ; rồi một câu nhanh, dữ mà không có nghịch gắt nào. (Theo tinh thần bài tập 2 – 3 của sách, tr. 29.)
2. Viết cho hai nhạc cụ một đoạn có "crescendo độ căng quãng" mà **cường độ không đi cùng** độ căng (bài tập 5, tr. 29).
3. Lấy ba hợp âm ba nốt bất kỳ, kê ba quãng bên trong và xếp vào bốn nhóm của Persichetti.
`,
  },
  {
    slug: 'persichetti-thang-am',
    title: 'Hoà âm thế kỷ XX (2) — Chất liệu thang âm: điệu thức, thang nhân tạo, ngũ cung, lục âm, cromatic',
    category: 'harmony',
    aliases: ['hợp âm chính của điệu thức', 'thang âm nhân tạo', 'synthetic scale', 'đa điệu thức', 'polymodality', 'thang toàn cung', 'Persichetti điệu thức'],
    summary: 'Chương 2 Twentieth-Century Harmony: bảy điệu thức và hợp âm chính mang âm đặc trưng; thứ tự từ tối tới sáng; đa điệu thức; thang nhân tạo, thang hai quãng 8; ngũ cung và lục âm; thang toàn cung và các cách cứu nó khỏi đơn điệu; các lối viết cromatic.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 2 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. Một âm trung tâm tạo ra **điệu tính**; cách các âm khác xếp quanh nó tạo ra **điệu thức** [^persichetti-1961, tr. 31]. Xem thêm [[dieu-thuc]], [[hoa-am-dieu-thuc]].

## Bảy điệu thức và âm đặc trưng
Tên điệu thức giữ từ thời Trung cổ, nhưng giống ở cấu tạo, không ở cách dùng [^persichetti-1961, tr. 32]. Bốn điệu thức "có màu" được nhận ra nhờ **một bậc đặc trưng** so với trưởng hoặc thứ tự nhiên: lydia (bậc IV nâng), mixolydia (bậc VII hạ), dorian (bậc VI nâng so với thứ tự nhiên), phrygia (bậc II hạ). Muốn giữ màu thì chuỗi hợp âm phải chứa bậc ấy thường xuyên — một đoạn Rê lydia phải nhiều hợp âm có G♯.

Hợp âm chính của mỗi điệu thức là **hợp âm chủ cộng hai "át tương đương"** — hai hợp âm ba trưởng hoặc thứ chứa bậc đặc trưng [^persichetti-1961, tr. 32 – 34]:

| Điệu thức | Bậc đặc trưng | Hợp âm chính | Hợp âm phụ | Hợp âm ba giảm |
|---|---|---|---|---|
| Lydia | IV nâng | I, II, VII | III, V, VI | IV |
| Mixolydia | VII hạ | I, V, VII | II, IV, VI | III |
| Dorian | VI nâng | I, II, IV | III, V, VII | VI |
| Phrygia | II hạ | I, II, VII | III, IV, VI | V |

::staff treble D4+F#4+A4=I E4+G#4+B4=II C#4+E4+G#4=VII | Rê lydia: ba hợp âm chính, hai hợp âm sau chứa G♯ (ví dụ của người biên soạn)

- Hợp âm ba giảm khó dùng vì tritone của nó gợi hợp âm bảy át của giọng trưởng cùng hoá biểu; thường được sửa bằng cách hạ âm gốc hoặc nâng quãng 5. Ở phrygia, hợp âm giảm nằm trên bậc V; sửa đi thì được thêm một át tương đương thứ ba [^persichetti-1961, tr. 33, 37].
- Hợp âm bảy, chín trong điệu thức nên **tránh tritone**, nếu không điệu thức trượt sang trưởng [^persichetti-1961, tr. 34].
- Locria (chủ là hợp âm giảm) thường để hợp âm chủ không có quãng 5, thêm nốt, ở thể sáu, hoặc chỉ là đồng âm; có thể biến tritone giữa bậc I và bậc V thành nét chủ đề [^persichetti-1961, tr. 37 – 38].

## Từ tối tới sáng
Đặt cả bảy điệu thức trên cùng một chủ âm, thêm dần dấu giáng sẽ được điệu thức "tối" nhất (locria); bớt giáng rồi thêm thăng theo thứ tự hoá biểu sẽ đi về "sáng" nhất (lydia). **Dorian ở chính giữa** và làm chuẩn [^persichetti-1961, tr. 35]: locria – phrygia – aeolia – dorian – mixolydia – ionia – lydia. Đổi điệu thức trên một chủ âm đứng yên thì cần nhắc chủ âm nhiều trong giai điệu (vòng quanh chủ âm, lặp kiểu tụng ca, kết thường xuyên), nếu không tritone kéo về trưởng [^persichetti-1961, tr. 36].

## Đa điệu thức và chuyển điệu thức
- **Thuần điệu thức**: giai điệu và hợp âm cùng một điệu thức, cùng chủ âm.
- **Đa điệu thức**: hai điệu thức khác nhau cùng lúc, cùng hoặc khác chủ âm. Cùng điệu thức nhưng khác chủ âm thì là đa điệu tính, chưa phải đa điệu thức [^persichetti-1961, tr. 38 – 39].
- Giữ điệu thức, đổi chủ âm là **chuyển điệu thức**; giữ chủ âm, đổi điệu thức là **hoán đổi điệu thức** [^persichetti-1961, tr. 40].
- Hoá biểu ít dùng vì trung tâm và điệu thức đổi nhanh; cách viết dấu hoá chọn theo cái dễ đọc [^persichetti-1961, tr. 41].

## Thang âm nhân tạo
Ngoài trưởng – thứ, có thể xếp quãng 2 lớn, nhỏ và quãng 2 tăng theo bất kỳ trật tự nào. Số hoán vị rất lớn nhưng phép tính ít liên quan tới sáng tác: tốt nhất để thang **hình thành từ nét giai điệu hoặc hợp âm** rồi mới gom lại thành thang [^persichetti-1961, tr. 43]. Một số thang hay dùng có tên: Super Locrian, Napoli thứ, Napoli trưởng, Phương Đông, Double Harmonic, Enigmatic, Hungary thứ, Hungary trưởng, Locria trưởng, Lydia thứ, Leading Whole-tone… [^persichetti-1961, tr. 44].

- Thang bảy âm là hai **tứ âm** (giống hoặc khác nhau); áp nguyên tắc điệu thức lên bất kỳ thang nào sẽ được nhiều "phiên bản điệu thức" của nó [^persichetti-1961, tr. 44].
- **Hợp âm chính** của thang nhân tạo: hợp âm chủ cộng hai hợp âm chứa bậc mang màu rõ nhất. Nếu thang có một tứ âm của giọng trưởng, bậc màu là các bậc ngoài tứ âm ấy; nếu không, lấy các hợp âm ba trưởng/thứ viết trùng âm; nếu cũng không có, bậc màu là bậc tạo quãng tăng hoặc giảm với chủ âm [^persichetti-1961, tr. 45].
- Thang nhân tạo hay sinh hợp âm ba có quãng 3 tăng hoặc giảm; thường đổi thành một trong bốn hợp âm ba cơ bản, còn **giai điệu giữ nguyên các âm của thang** để mang màu [^persichetti-1961, tr. 46].
- Soi gương thang (đảo quãng) để tìm thêm công thức kết, hợp âm lướt, đường bè ngoài; có thang soi gương ra chính nó [^persichetti-1961, tr. 46 – 47].
- **Thang hai quãng 8**: tứ âm nối tiếp không lặp chủ âm ở quãng 8 đầu, hoặc ghép hai thang một quãng 8 chung chủ âm; hợp âm chính của nó là những khối lớn trải hết hai quãng 8 [^persichetti-1961, tr. 48 – 49].

## Ngũ cung và lục âm
- Ngũ cung: diatonic, Pelog, Hirajoshi, Kumoi…; mỗi loại có năm phiên bản điệu thức [^persichetti-1961, tr. 50]. Thiếu nửa cung nên khó tạo hướng; ngũ cung thuần hiệu quả nhất trong **đoạn ngắn**, và thường chỉ phát huy ở **giai điệu hoặc hoà âm, hiếm khi cả hai** — giai điệu ngũ cung hay được phối bằng hợp âm ngoài thang [^persichetti-1961, tr. 51 – 52]. Xem [[am-giai-ngu-cung]].
- Lục âm: thang sáu âm đối xứng, Prometheus, Prometheus Napoli, toàn cung [^persichetti-1961, tr. 53]. Trừ toàn cung, lục âm chủ yếu là chất liệu giai điệu; hoà âm thường đi độc lập, nhiều khi thành quan hệ đa điệu tính với giai điệu [^persichetti-1961, tr. 54].

## Thang toàn cung
Chỉ có hai thang toàn cung; không có quãng 4, quãng 5 đúng, không có âm dẫn; sáu hợp âm ba đều tăng [^persichetti-1961, tr. 54 – 55]. Sách đề xuất cách giữ hứng thú: **luân phiên hai thang**, vang cả sáu âm cùng lúc, đổi mật độ và khoảng cách, dùng **cả hai thang một lúc** [^persichetti-1961, tr. 55 – 56]. Giá trị thật của nó nằm ở **tương phản khi kết hợp**: giai điệu toàn cung trên hợp âm khác, giai điệu diatonic trên nền toàn cung, hoặc ghép với thang khác [^persichetti-1961, tr. 57 – 59].

::staff treble C4+E4+G#4 D4+F#4+A#4 C#4+F4+A4 D#4+G4+B4 | Hai thang toàn cung luân phiên: hai hợp âm ba tăng của thang thứ nhất rồi của thang thứ hai (ví dụ của người biên soạn)

## Thang cromatic
Thang mười hai nửa cung dùng như trang trí cho thang diatonic hoặc như thang độc lập (mười hai bậc ngang nhau); không có phiên bản điệu thức. Bốn lối viết cromatic: trang trí cromatic trên hoà âm không cromatic; giai điệu cromatic sinh từ hoà âm cromatic; hợp âm hỗn hợp do các bè đi cromatic; hoà âm cromatic sinh từ giai điệu cromatic — dựng dọc các nhóm âm của nét giai điệu, như trong kỹ thuật mười hai âm [^persichetti-1961, tr. 60 – 62]. Xem [[am-giai-cromatic]].

## Câu hỏi và bài tập
1. Viết một bản piano ngắn ở mixolydia, cho bậc VII hạ xuất hiện dày (bài tập 1, tr. 63).
2. Viết một đoạn cho organ có chuyển điệu thức, rồi một đoạn cho harp có hoán đổi điệu thức (bài tập 3 – 4).
3. Tự dựng một thang nhân tạo từ một motif bốn – năm nốt, tìm ba hợp âm chính của nó theo quy tắc ở trên.
`,
  },
  {
    slug: 'persichetti-hop-am-quang-3',
    title: 'Hoà âm thế kỷ XX (3) — Hợp âm chồng quãng 3: ba vòng quan hệ, hợp âm bảy, chín, mười một đến mười hai âm',
    category: 'harmony',
    aliases: ['vòng quãng 3', 'vòng quãng 2', 'cycle of thirds', 'hợp âm chín Persichetti', 'hợp âm mười hai âm', 'tertian harmony'],
    summary: 'Chương 3 Twentieth-Century Harmony: ngoài vòng quãng 5 còn vòng quãng 3 và vòng quãng 2 với hợp âm chính riêng; hợp âm ba cromatic; hợp âm bảy, chín như thực thể ổn định; mười hai hợp âm chín từ tối tới sáng; hợp âm 11, 13, 15, 17 và hợp âm mười hai âm.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 3 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. Hợp âm ba vẫn được dùng ở thế kỷ XX, nhưng theo những cách mà thế kỷ XVIII – XIX không nhấn mạnh [^persichetti-1961, tr. 66].

## Ba vòng quan hệ
Hoà âm cổ điển xoay quanh ba cột chủ – át – hạ át, cân bằng hai bên chủ âm bằng quãng 5: đó là **vòng quãng 5**. Persichetti chỉ ra hai vòng khác, mỗi vòng có hợp âm chính riêng [^persichetti-1961, tr. 66 – 67]:
- **vòng quãng 3**: III và VI đỡ chủ âm từ quãng 3 trên và dưới; hợp âm chính I, III, VI;
- **vòng quãng 2**: II và VII đỡ từ quãng 2 hai phía; hợp âm chính I, II, VII.

Chuỗi hợp âm tự nhiên của mỗi vòng song song với chuỗi quen thuộc của vòng quãng 5, với chức năng (kết, chuyển giọng…) tương ứng [^persichetti-1961, tr. 68]. Trong Đô trưởng theo vòng quãng 3, hợp âm E – G – B đóng vai "át" và nghe tươi như một hợp âm át thật [^persichetti-1961, tr. 69].

::staff treble C4+E4+G4=I E4+G4+B4=III A3+C4+E4=VI C4+E4+G4=I | Đô trưởng, vòng quãng 3: III và VI là hai "trụ" quanh chủ (ví dụ của người biên soạn)

- Vòng nào cũng dựng được trên thang nào; màu của hợp âm chính tuỳ thang (ở trưởng theo vòng 5 đều trưởng, ở aeolia đều thứ, ở thang nhân tạo thì lẫn) [^persichetti-1961, tr. 69].
- Đổi qua lại giữa ba vòng cho **hoàn toàn tự do về chuyển động âm gốc** trong một thang; vì quãng 2, 3, 5 đảo thành 7, 6, 4 và mang đủ dạng lớn, nhỏ, đúng, tăng, cả mười hai khoảng cách âm gốc đều dùng được [^persichetti-1961, tr. 70].
- Âm trang trí: coi mỗi hợp âm là "chủ" của một thang nào đó (kể cả thang nhân tạo) rồi lấy âm trang trí từ thang ấy [^persichetti-1961, tr. 70].

## Hợp âm ba cromatic
Khi không có thang chi phối, hợp âm ba nào cũng nối được với hợp âm ba nào. Âm gốc đi quãng 5 đúng có xu hướng xác lập điệu tính nên **ít dùng** trong văn cảnh cromatic tự do; âm gốc đi **quãng 2, quãng 3** thường hơn, thêm **quãng 4 tăng** cho đa dạng [^persichetti-1961, tr. 71]. Chuỗi cromatic dễ lan man; một giai điệu diatonic sẽ "lấy nét" cho nó [^persichetti-1961, tr. 72]. Một âm bất kỳ có thể là gốc, quãng 3 hay quãng 5 của **ba hợp âm trưởng và ba hợp âm thứ** — nguồn lựa chọn khi phối giai điệu [^persichetti-1961, tr. 72]. Quãng 5 song song ở hai bè dưới chấp nhận được nếu sự chú ý bị kéo đi bằng chuyển động ngược nhiều, và thỉnh thoảng đảo hợp âm [^persichetti-1961, tr. 73]. Xem [[trung-am-cromatic]].

## Hợp âm bảy và chín
- Âm 7 và âm 9 không bắt buộc chuẩn bị hay giải quyết; hợp âm bảy, chín trở thành **thực thể ổn định**, linh hoạt như hợp âm ba [^persichetti-1961, tr. 74 – 75].
- Có bảy loại hợp âm bảy dựng bằng quãng 3 lớn, nhỏ; thể đảo một xếp theo quãng 5 có âm thanh rất riêng [^persichetti-1961, tr. 75]. Quan hệ âm gốc quãng 4 tăng giữa hai hợp âm bảy át cho chuyển động tươi [^persichetti-1961, tr. 76].
- Về lý thuyết có 16 hợp âm chín trên một âm, nhưng do trùng âm chỉ còn **12**. Để soi, coi hợp âm chín là **hai hợp âm ba**, hợp âm trên "neo" vào âm cao nhất của hợp âm dưới. Sách xếp 12 hợp âm chín từ tối tới sáng [^persichetti-1961, tr. 77].
- Bỏ âm: bỏ quãng 5 cho giàu, bỏ quãng 3 hoặc 7 cho bớt màu. Tăng đôi: gốc hoặc quãng 5 cho vững, quãng 3 hoặc 7 cho đậm màu, quãng 9 cho căng [^persichetti-1961, tr. 78]. Thể đảo bốn (âm 9 ở bè trầm) là chất liệu "thô ráp" [^persichetti-1961, tr. 79].
- Một âm có thể là gốc, 3, 5, 7 hoặc 9 của 12 hợp âm chín: **60 cách phối** cho một âm [^persichetti-1961, tr. 80]. Hợp âm chín nặng nên dễ ì; có thể chỉ "chạm" âm 9 bằng một bè đi qua [^persichetti-1961, tr. 81].

::staff treble C4+E4+G4+B4+D5=Cmaj9 C4+Eb4+G4+Bb4+D5=Cm9 C4+E4+G4+Bb4+Db5=C7♭9 | Ba trong mười hai hợp âm chín trên C, mỗi hợp âm là hai hợp âm ba chồng nhau (ví dụ của người biên soạn)

## Hợp âm 11, 13 và lớn hơn
- Hợp âm 11 = hai hợp âm ba cách nhau quãng 3; hợp âm 13 = ba hợp âm ba. Hợp âm 13 **không đảo được**: đảo sẽ ra một hợp âm 11 hay 13 khác [^persichetti-1961, tr. 82].
- Nhiều "hợp âm 11, 13" thật ra là hợp âm nhỏ hơn cộng âm trang trí hoặc pedal; khi phân tích, quy về hợp âm ít âm nhất [^persichetti-1961, tr. 82 – 83].
- Hợp âm 11, 13 thường có hai quãng nghịch gắt; bỏ một âm của quãng gắt sẽ cho chuyển động mềm hơn. Xếp thành hai khối hợp âm ba tách rời thì thành [[hop-am-chong|hợp âm chồng]]; nhiều quãng 4 thì thành hợp âm quãng 4 [^persichetti-1961, tr. 83 – 84].
- Cấu tạo quãng của hợp âm 11, 13 thường trùng với một thang (Super Locrian, phrygia, thang bồi âm, Hungary trưởng…), nên chúng là **hợp âm chủ sáu – bảy âm** tốt, dẫn bởi giai điệu lấy từ chính thang ấy [^persichetti-1961, tr. 84].
- Hợp âm 15, 17: chồng tiếp quãng 3 không lặp âm; thao tác thì bỏ bớt hai – ba âm giữa; dùng nguyên vẹn hợp nhất trong hoà âm song song hoặc làm dấu chấm câu [^persichetti-1961, tr. 85 – 86].
- **Hợp âm mười hai âm** (chồng quãng 3 tới khi đủ 12 âm): dày, cần chăm chút âm vực và phối khí (đặt cao, tách phần thuận cho từng bộ). Công dụng hẹp: **chấm câu**, **căng lặng kéo dài**, **đáp lại** một câu đồng âm hay hai bè. Cho vài bè đi ngược chiều thì nó biến thành hợp âm quãng 4, quãng 2, hợp âm chồng, ghép hay soi gương [^persichetti-1961, tr. 87 – 89].

## Câu hỏi và bài tập
1. Viết một đoạn mixolydia cho hai oboe và hai bassoon mà hoà âm theo **vòng quãng 2** (bài tập 3, tr. 91).
2. Phối một thang trưởng đi xuống chỉ bằng hợp âm ba trưởng (bài tập 5).
3. Lấy âm E làm âm cao nhất, viết năm hợp âm chín khác nhau chứa nó ở năm vị trí (gốc, 3, 5, 7, 9).
`,
  },
  {
    slug: 'persichetti-hop-am-quang-4',
    title: 'Hoà âm thế kỷ XX (4) — Hợp âm chồng quãng 4',
    category: 'harmony',
    aliases: ['hợp âm quãng 4', 'quartal harmony', 'hoà âm quãng 4', 'chord by fourths', 'Persichetti quartal'],
    summary: 'Chương 4 Twentieth-Century Harmony: nguồn gốc của hoà âm quãng 4; ba loại hợp âm ba nốt (đúng – đúng, đúng – tăng, tăng – đúng) và thể đảo; nối với hợp âm quãng 3; kết quãng 4; hợp âm bốn nốt, hợp âm ghép quãng 4 thêm quãng 3; hợp âm nhiều nốt đến mười hai âm.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 4 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. Bên cạnh hoà âm quãng 3 của thời Cổ điển – Lãng mạn, nhà soạn nhạc thế kỷ XX dùng **hoà âm quãng 4**. Nguồn gốc của nó: trang trí hợp âm ba và kỹ thuật organum Trung cổ [^persichetti-1961, tr. 93].

## Tính chất chung
- Muốn nghe "quãng 4" thì phần lớn các âm phải cách nhau quãng 4; xếp khác đi chúng dễ nghe thành hợp âm 11, 13 hay hợp âm thêm nốt [^persichetti-1961, tr. 94].
- Hợp âm ba, bốn, năm nốt bằng quãng 4 đúng có màu ngũ cung; hợp âm năm nốt chứa đủ năm bậc ngũ cung [^persichetti-1961, tr. 94].
- Như mọi hợp âm quãng cách đều (hợp âm bảy giảm, hợp âm ba tăng), hợp âm quãng 4 đúng **mơ hồ về âm gốc**: âm nào cũng có thể làm gốc, nên trách nhiệm xác định giọng thuộc về **bè có giai điệu hoạt động nhất** [^persichetti-1961, tr. 94].

## Hợp âm ba nốt
Có ba loại: **đúng – đúng**, **đúng – tăng**, **tăng – đúng**; loại tăng – tăng không dùng được vì hai âm ngoài trùng âm với quãng 8 [^persichetti-1961, tr. 95].

::staff treble D4+G4+C5=đúng–đúng B3+E4+A#4=đúng–tăng C4+F#4+B4=tăng–đúng G4+C5+D5=đảo:_quãng_5_nổi | Ba loại hợp âm ba nốt bằng quãng 4 và một thể đảo của D–G–C (ví dụ của người biên soạn)

- Mỗi loại có hai thể đảo. Đảo hợp âm đúng – đúng tránh đơn điệu; vì có quãng 5 đúng mạnh, thể đảo nào cũng dùng làm thế gốc được. Khi quãng 5 trội, quãng 2 sinh ra từ quãng 7 đảo nghe như một **nốt thêm** vào hợp âm đơn giản [^persichetti-1961, tr. 95].
- Hợp âm đúng – đúng **hiếm khi nghe nghịch**: không có quãng gắt, hai quãng 4 ngang nhau, quãng 7 nhỏ êm; trong văn cảnh quãng 4 nó là hợp âm thuận [^persichetti-1961, tr. 96].
- Chuỗi hợp âm quãng 4 đúng không nằm gọn trong một thang; muốn khớp thang phải dùng quãng 4 hỗn hợp. Vì thế hợp âm quãng 4 đúng **dẻo về cromatic** hơn loại có quãng 4 tăng, và có tiềm năng đa điệu tính [^persichetti-1961, tr. 96].
- Ở hợp âm có quãng 4 tăng, âm trên của tritone giải quyết về âm gần nhất của thang hay nét giai điệu đang chi phối [^persichetti-1961, tr. 97].
- Một âm có thể nhảy quãng 4 hoặc 7 trong khi các âm khác đứng yên: hợp âm nở thành bản bốn – năm nốt cùng loại [^persichetti-1961, tr. 97]. Hợp âm quãng 4 nào cũng đi được tới hợp âm quãng 4 nào nếu một bè đi có chủ đích giai điệu [^persichetti-1961, tr. 98].
- Ở âm vực thấp hợp âm quãng 4 kém trong; nó hợp với bè cao (bộ gỗ, giọng nữ). Pedal làm dịu âm nghịch; thêm một bè hoa mỹ thì hoà âm càng tự do [^persichetti-1961, tr. 98].

## Nối với hợp âm quãng 3
Hợp âm quãng 4 có thể đến từ hoặc đi tới [^persichetti-1961, tr. 99 – 100]:
- hợp âm ba, khi âm trên cùng được chuẩn bị;
- hợp âm chủ có thêm quãng 6 hoặc quãng 9 ở kết;
- hợp âm chín ở thể đảo bốn với âm gốc ở bè cao (quãng 7 nổi, trải hai quãng 4, làm "keo" giữa hai loại);
- chuỗi hợp âm bảy song song khi quãng 3 và 5 được thay bằng quãng 4;
- hợp âm 13 xếp sao cho quãng 4 lộ ra.

Khi hai loại cùng có mặt, nên dùng trong hoà âm quãng 3 những thủ pháp làm nổi vị quãng 4.

## Kết quãng 4
Ở kết thuần quãng 4, các bè đi rất tự do; hợp âm quãng 4 có thể đóng vai **"át"** trong kết của bất kỳ ngôn ngữ hoà âm nào, miễn quãng 4 trội trong kết cấu [^persichetti-1961, tr. 100 – 101].

## Hợp âm bốn nốt và hợp âm ghép
- Thêm một quãng 4 nữa: âm mới tạo quãng 10 thuận với bè trầm, vang hơn. Ba thể đảo cho nhiều loại quãng; **đi qua các thể đảo của cùng một hợp âm** đã tạo chuyển động hoà âm thật mà không đổi gốc [^persichetti-1961, tr. 101 – 102].
- Hợp âm bốn nốt giải quyết dễ về hợp âm quãng 3 khi hai bè đi liền bậc, các bè khác đứng yên. Có tritone thì đặt nó ở trên cùng cho dễ đi [^persichetti-1961, tr. 102].
- **Hợp âm ghép quãng 4 + quãng 3**: thêm một quãng 3 trên hoặc dưới hợp âm ba nốt quãng 4. Quãng 3 lớn cho âm thanh thuận (rất hợp làm chủ ở kết), quãng 3 nhỏ kém thuận hơn; thêm quãng 3 cả trên lẫn dưới được hợp âm năm nốt "mượt", hợp đi cùng hoà âm quãng 3 hay hợp âm chồng [^persichetti-1961, tr. 102 – 103].

::staff treble A3+D4+G4+C5=bốn_nốt D4+G4+C5+E5=thêm_quãng_3_lớn_trên Bb3+D4+G4+C5+E5=thêm_quãng_3_trên_và_dưới | Hợp âm bốn nốt quãng 4 và hai dạng ghép với quãng 3 (ví dụ của người biên soạn)

- Đưa hợp âm quãng 4 vào bằng cromatic có thể đổi giọng hay thang đột ngột [^persichetti-1961, tr. 103]. Hợp âm quãng 4 xếp thành quãng 5 dễ như hợp âm quãng 3 xếp thành quãng 6; khi quãng 5 trội, quãng 4 bứt rứt — nên giải quyết quãng 4 về quãng 3 của hợp âm ghép trước khi trở lại hợp âm quãng 4 thuần [^persichetti-1961, tr. 104].

## Hợp âm nhiều nốt
Chồng quãng 4 đúng vẫn thuận tới hợp âm năm nốt; tới sáu nốt thì xuất hiện quãng nghịch gắt và hợp âm sang nhóm nghịch. Hợp âm 13 và hợp âm quãng 4 nhiều nốt hay có cùng các âm: giống nhau trên lý thuyết, không giống trên tai — quãng nào trội thì tai nghe thành loại đó; số quãng 3 và quãng 4 bằng nhau thì hợp âm làm **trục chuyển** giữa hai loại [^persichetti-1961, tr. 104 – 105]. Có thể chồng mười hai quãng 4 đúng trước khi lặp âm. Càng nhiều âm, khả năng giai điệu càng giảm: một đoạn song song, một đồng âm chen vào, một hợp âm át đột ngột làm giàu sẽ tránh "ngạt" [^persichetti-1961, tr. 105].

## Câu hỏi và bài tập
1. Viết chuỗi mô tiến cho flute, oboe, clarinet chỉ bằng hợp âm quãng 4 đúng (bài tập 1, tr. 106).
2. Viết hoà âm ba bè quãng 4 cho hai violin và viola trên pedal cello, rồi trang trí pedal (bài tập 3).
3. Viết bốn ô nhịp đi từ hợp âm ba sang hợp âm quãng 4 bằng ba trong năm cách nối ở trên.
`,
  },
  {
    slug: 'persichetti-hop-am-them-not',
    title: 'Hoà âm thế kỷ XX (5) — Hợp âm thêm nốt',
    category: 'harmony',
    aliases: ['hợp âm thêm nốt', 'added-note chord', 'nốt thêm quãng 2', 'hợp âm sáu tăng thêm nốt', 'Persichetti added note'],
    summary: 'Chương 5 Twentieth-Century Harmony: thêm quãng 2 lớn, nhỏ vào hợp âm quãng 3, quãng 4 để đổi màu mà không đổi chức năng; năm hợp âm sáu tăng gốc; quy tắc thêm nốt vào từng loại hợp âm; loại êm và loại gắt; hợp âm ba có nốt thêm ở bè trầm.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 5 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. **Hợp âm thêm nốt** là một hợp âm cơ bản bị đổi chất bằng những âm không thuộc nó: các âm thêm tạo **quãng 2 lớn hoặc nhỏ** với một âm nào đó của hợp âm quãng 3 hay quãng 4, thường đặt sát trên hoặc dưới để khỏi biến thành hợp âm bảy, chín hay hợp âm ghép. Âm thêm **đổi kết cấu, không đổi chức năng** của hợp âm vốn có hướng đi rõ [^persichetti-1961, tr. 109]. Ví dụ truyền thống: hợp âm chủ sáu – năm ở kết và hợp âm sáu tăng kiểu Pháp. Xem [[hop-am-6-va-add]].

## Hợp âm sáu tăng
Hợp âm sáu tăng có lực kéo đủ mạnh để chịu thêm nốt mà không yếu đi. Hợp âm Pháp chính là **hợp âm Ý thêm một quãng 2 lớn** trên âm giữa: âm thêm không đổi chức năng, chỉ tạo "màu viền" — quãng 6 tăng cho lực đẩy, quãng ở cách bè trầm một quãng 3 cho vị cơ bản [^persichetti-1961, tr. 110]. Xem [[hop-am-sau-tang]].

::staff treble Ab3+C4+F#4=Ý Ab3+C4+D4+F#4=Pháp_=_Ý_+_D Ab3+Cb4+F#4=quãng_3_nhỏ | Hợp âm Ý, hợp âm Pháp (Ý thêm quãng 2 lớn) và biến thể quãng 3 nhỏ (ví dụ của người biên soạn)

Kỹ thuật thế kỷ XX dùng **năm hợp âm sáu tăng gốc** để gắn thêm quãng 2: quãng 6 tăng cộng quãng 3 lớn (Ý); cộng quãng 3 nhỏ; cộng quãng 8 tăng và quãng 3 lớn; cộng quãng 8 tăng kép và quãng 3 lớn; cộng quãng 3 tăng. Loại quãng 3 nhỏ là biến thể màu của hợp âm Ý; hai loại có quãng 8 tăng là kết cấu "hợp âm chín", hợp đi với hợp âm 9, 11, 13; loại quãng 3 tăng hợp văn cảnh quãng 4 và thường viết trùng âm [^persichetti-1961, tr. 110]. Hai bè trải quãng 6 tăng có xu hướng mở ra, đi xuống cromatic hoặc chuyển động xiên; thêm bao nhiêu quãng 2 hợp âm vẫn muốn đi tiếp, và tự nhiên nhất là đi tới một hợp âm thêm nốt khác [^persichetti-1961, tr. 111].

## Thêm nốt vào hợp âm khác
Âm thêm **không phải âm trang trí** vang cùng hợp âm, mà là thành viên màu ngang ngửa quãng 3 [^persichetti-1961, tr. 111 – 112]:
- hợp âm ba trưởng, thứ: thêm trên hay dưới âm nào cũng được, nhưng **càng thấp càng kém vang**; thêm sát trên quãng 3 lớn làm nhoè màu của nó, quãng 3 nhỏ ít bị ảnh hưởng hơn;
- hợp âm ba giảm: thêm gì cũng vẫn gắt;
- hợp âm ba tăng: thêm quãng 2 lớn vẫn là toàn cung, thêm **quãng 2 nhỏ** hữu ích hơn vì cho thêm loại quãng;
- hợp âm bảy, chín: thường thêm quãng 2 nhỏ, vì thêm quãng 2 lớn dễ trùng một âm có sẵn.

::staff treble C4+E4+G4+A4=C+6 C4+D4+E4+G4=C+2 C4+E4+F#4+G4=C+♯4 C4+Eb4+E4+G4=C+♭3 | Hợp âm C thêm nốt ở bốn chỗ: hai dạng êm và hai dạng gắt (ví dụ của người biên soạn)

Âm thêm không tranh quyền giải quyết với âm 7, âm 9; nó bám theo cả hợp âm đảo lẫn thế gốc, tăng đôi tuỳ ý; nhân đôi âm thêm ở bè ngoài thành chuỗi quãng 8 nghe hiệu quả [^persichetti-1961, tr. 113]. Một hợp âm ba hay bảy thêm nốt có thể giống hợp âm chín — văn cảnh quyết định.

## Thêm nốt vào hợp âm quãng 4
Thứ tự thêm quãng 2 vào hợp âm quãng 4 đúng, xếp theo độ vang: loại êm (quãng 2 lớn) — dưới âm 7, trên âm 4, dưới âm 4, trên "gốc"; loại gắt (quãng 2 nhỏ) — trên âm 7, dưới âm 7, trên âm 4, dưới âm 4, trên "gốc". Càng thấp càng kém vang [^persichetti-1961, tr. 113]. Thêm nốt vào hợp âm quãng 4 tăng thì luôn gắt vì đã có quãng 7 lớn; hai loại đứng cạnh nhau rất hợp [^persichetti-1961, tr. 114].

## Loại êm và loại gắt
Mọi hợp âm thêm nốt chia hai: **êm** (không có nghịch gắt) và **gắt** (có ít nhất một). Loại êm hay dừng dòng chảy vì có xu hướng tạo kết; dùng nhiều thì tiến trình "tê liệt". Trộn hai loại để giữ dòng chảy; chuyển động do hợp âm gốc chi phối, nên các công cụ như kết, mô tiến, công thức quen thuộc giúp hợp âm gốc khỏi bị "đám đông" âm thêm làm yếu [^persichetti-1961, tr. 115].

Hợp âm thêm nốt chỉ nghe ra là thêm nốt khi **tiến trình gốc rõ ràng** hoặc đã được xác lập trước bằng hợp âm không thêm nốt; nếu không, tai sẽ nghe một hợp âm lớn hơn — hợp âm ghép hay hợp âm quãng 2 [^persichetti-1961, tr. 116].

## Hợp âm ba có nốt thêm ở bè trầm
Đặt âm thêm ra ngoài quãng 8 cho chuyển động tự do và âm nghịch rõ nét hơn. Một loại riêng: **hợp âm ba xếp hẹp ở bè trên, bè trầm là một âm cách một thành viên của hợp âm một quãng 2** (thường nhân quãng 8). Có 36 hợp âm như vậy; dù vài cái giống hợp âm quãng 3 quen thuộc, chúng không vận hành như thế [^persichetti-1961, tr. 116 – 117].

::grand C5+E5+G5/F3+F2 C5+E5+G5/D3+D2 A4+C5+E5/B2+B1 | Hợp âm ba ở trên, bè trầm cách một thành viên một quãng 2 (ví dụ của người biên soạn)

Tiến trình loại này thường do **giai điệu trên** dẫn: mỗi nốt giai điệu (trừ âm trang trí) được coi là thành viên của một hợp âm ba trưởng, thứ, giảm hay tăng, rồi dựng bè trầm từ các âm cách một thành viên một quãng 2, chọn sao cho quan hệ hai bè ngoài hợp với câu nhạc. Hiệu quả nhất khi cả đoạn chỉ dùng loại này; quan hệ chính – phụ không còn ý nghĩa, giai điệu là yếu tố chi phối [^persichetti-1961, tr. 117 – 118].

## Câu hỏi và bài tập
1. Chuyển giọng qua vài giọng bằng các loại hợp âm sáu tăng, viết cho hai piano (bài tập 2, tr. 119).
2. Phối một bài dân ca bằng hợp âm thêm nốt loại êm cho giọng hát và piano (bài tập 5).
3. Với một giai điệu tám nốt, dựng bè trầm theo lối "hợp âm ba có nốt thêm ở bè trầm".
`,
  },
  {
    slug: 'persichetti-hop-am-quang-2',
    title: 'Hoà âm thế kỷ XX (6) — Hợp âm chồng quãng 2 và cụm âm',
    category: 'harmony',
    aliases: ['hợp âm quãng 2', 'secundal harmony', 'chord by seconds', 'cụm âm Persichetti', 'polycluster', 'đa cụm âm'],
    summary: 'Chương 6 Twentieth-Century Harmony: bốn loại hợp âm ba nốt bằng quãng 2, thể đảo, xếp thành quãng 7, tăng đôi và âm nghịch; hợp âm nhiều nốt; cụm âm — khung hai bè ngoài, cụm âm theo thang, ký hiệu, nở – co, rải, đa cụm âm.',
    refs: PERSICHETTI_REFS,
    body: `
Bài 6 bộ [[hoa-am-the-ky-xx-lo-trinh|Hoà âm thế kỷ XX]]. Có ba nhóm vật liệu dựng hợp âm: **quãng 3 hoặc 6** (tertian), **quãng 4 hoặc 5** (quartal), **quãng 2 hoặc 7** (secundal). Thêm quãng 2 vào hợp âm quãng 3, 4 hay lấp đầy hợp âm ghép để lấy màu thì vẫn là hợp âm thêm nốt, không phải hợp âm quãng 2 — dù ngoài văn cảnh có thể gọi cách nào cũng được [^persichetti-1961, tr. 121].

## Hợp âm ba nốt bằng quãng 2
Dùng quãng 2 lớn và nhỏ (quãng 2 tăng nghe như quãng 3). Có **bốn loại**, xếp từ thuận tới nghịch: lớn – lớn, lớn – nhỏ, nhỏ – lớn, nhỏ – nhỏ; mỗi loại có hai thể đảo [^persichetti-1961, tr. 121 – 122]. Trong trưởng, thứ và năm điệu thức kia chỉ có ba loại đầu; loại nhỏ – nhỏ đến từ thang cromatic hay nhân tạo [^persichetti-1961, tr. 123].

::staff treble C4+D4+E4=lớn–lớn C4+D4+Eb4=lớn–nhỏ D4+Eb4+F4=nhỏ–lớn C4+D4+E5=xếp_thành_quãng_9 | Ba loại có trong thang diatonic, và một hợp âm quãng 2 xếp rộng (ví dụ của người biên soạn)

- Xếp hẹp ở âm vực thấp, hợp âm quãng 2 bị "bó" và nghe như bộ gõ. Hợp âm quãng 2 xếp được thành quãng 7 như hợp âm quãng 3 xếp thành quãng 6; giãn ra quãng 7, quãng 9 cho các bè chỗ để hoạt động. Xếp như thế trông giống hợp âm chín, nhưng trong văn cảnh quãng 2 thì vẫn là hợp âm quãng 2 [^persichetti-1961, tr. 122].
- **Tăng đôi**: muốn vững thì tăng đôi âm trầm (dù là gốc, quãng 2 hay quãng 3); muốn êm thì tăng đôi âm thuận nhất so với bè trầm; muốn gắt thì tăng đôi âm nghịch nhất [^persichetti-1961, tr. 123].
- **Âm nghịch** (âm bứt rứt hay đòi giải quyết): ở thế gốc và thể đảo hai là âm quãng 2 của hợp âm; ở thể đảo một là âm quãng 3 — trừ loại nhỏ – lớn đảo một, nơi âm gốc nghịch nhất [^persichetti-1961, tr. 123 – 124].
- Nếu âm nghịch thuộc một quãng gắt (quãng 7 lớn, quãng 2 nhỏ), một trong hai âm của quãng ấy nên vào và ra liền bậc hoặc bằng nhắc lại; nếu không, vào ra tự do [^persichetti-1961, tr. 124].

## Hợp âm nhiều nốt
Hợp âm bốn, năm nốt bằng quãng 2 khó đi theo lối phức điệu; xen hợp âm ba nốt quãng 2 hoặc hợp âm quãng 4 vào tiến trình sẽ cho các bè chỗ trống, vì quãng 7 trong hợp âm quãng 4 hoà với quãng 2 của hợp âm quãng 2 [^persichetti-1961, tr. 125]. Một hợp âm quãng 2 có thể nở ra trùm cả một thang; nên kết hợp với hoà âm chồng hay ghép trước khi nó "cứng" lại.

## Cụm âm
Khi các hợp âm quãng 2 chủ yếu ở thế không đảo, phần lớn bè cách nhau quãng 2, ta có **cụm âm**. Đó không hẳn là hợp âm quãng 2 vì khoảng cách đều và nhất là **không có chuyển động bè trong rõ ràng**: với cụm âm lớn, chỉ cần lo **khung hai bè ngoài**, phần giữa lấp bằng quãng 2, nở ra co vào theo khung [^persichetti-1961, tr. 126]. Xem [[am-cum]].

- Phần lớn các thang hay đoạn thang đều "cụm" được; thang cromatic ít dùng nhất vì nhanh nhàm. Thang bảy âm cụm được theo bảy cách điệu thức, thang hai quãng 8 theo mười bốn cách [^persichetti-1961, tr. 127].
- Đổi cấu tạo quãng và số âm trong tiến trình cho cụm âm có hứng thú [^persichetti-1961, tr. 127].
- Piano khó thể hiện tinh tế; hoà tấu thính phòng và dàn nhạc làm tốt hơn. Cụm âm cromatic cho phím đàn thường ký hiệu bằng một nốt có vạch kéo suốt cụm, đánh bằng lòng bàn tay hoặc cánh tay; với dàn nhạc có thể tách thành các khối hợp âm [^persichetti-1961, tr. 128].
- Cụm âm đi song song thuần tuý là giai điệu; cho vài bè đi cùng chiều thay vì song song, thêm quãng 8 ở hai bè ngoài sẽ thêm màu. Cụm âm tiến hành bằng **nở – co, đổi cấu tạo, bỏ âm, đổi màu bè**. Cụm lớn mạnh ở chỗ chấm câu kịch tính; cụm nhỏ linh hoạt hơn [^persichetti-1961, tr. 128].
- Độ thuận – nghịch của cụm âm có thể song song hoặc trái với đối âm của hai bè ngoài, theo mọi tổ hợp [^persichetti-1961, tr. 128 – 129].
- **Cụm âm rải**: các âm vào lần lượt và giữ tới khi âm cuối vào — từ trên xuống, dưới lên, hay từ giữa ra. Có thể làm nổi phía thuận hay nghịch của cụm bằng thứ tự vào, hoặc bằng cách cho vang trước quãng thuận hay nghịch của nó [^persichetti-1961, tr. 129].
- Cụm âm lớn có thể tích tụ dần từ hợp âm quãng 3, quãng 4, hợp âm chồng hay cụm nhỏ [^persichetti-1961, tr. 130].
- **Đa cụm âm**: hai cụm trở lên cùng lúc, từ một thang hay nhiều thang; phải chừa khoảng giữa các cụm, cụm càng lớn khoảng càng rộng. Cụm co giãn thì số bè đối âm tự nhân đôi: mỗi cụm có hai bè viền độc lập [^persichetti-1961, tr. 130 – 131].
- Cụm âm "vỡ" (rải quãng 2) chỉ nghe ra là cụm khi hoà âm cụm âm đã được xác lập; nếu không nó nghe như gam [^persichetti-1961, tr. 131]. Âm trang trí giúp không khí lưu thông trong đoạn cụm âm [^persichetti-1961, tr. 132].

::grand C5+D5+E5+F5+G5/C3+D3+E3 B4+C5+D5+E5/D3+E3+F3+G3 | Hai cụm âm diatonic co – nở theo khung hai bè ngoài (ví dụ của người biên soạn)

Persichetti cảnh báo: "dịch" hoà âm truyền thống sang cụm âm bằng cách lấp đầy khoảng trống một cách tuỳ tiện là **tính toán, thường không có động lực âm nhạc**; cụm âm hay hơn khi sinh ra từ hoà âm quãng 2 vì chung quãng 2 [^persichetti-1961, tr. 132]. Đi cùng hợp âm quãng 3, quãng 4, cụm âm và hợp âm quãng 2 vẫn tham gia được tiến trình có chức năng.

## Câu hỏi và bài tập
1. Viết một khúc dạo bốn bè cho tứ tấu dây dùng hợp âm ba nốt quãng 2 (có tăng đôi), bốn nốt quãng 2 và hợp âm quãng 4 có quãng 7 đảo (theo tr. 133).
2. Viết một câu cụm âm cho piano, vẽ trước khung hai bè ngoài rồi mới lấp quãng 2.
3. Viết một cụm âm rải từ giữa ra hai phía, làm nổi phía nghịch của nó.
`,
  },
]
