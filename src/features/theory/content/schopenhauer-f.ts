import type { Article } from '../wiki'
import { SCHOPENHAUER_REFS } from './schopenhauer-refs'

/** Tập II bản Đức 1844 = tập III bản Haldane & Kemp; tập I dùng để đối chiếu §52. */
const HK_REFS: [string, string][] = [
  ['Arthur Schopenhauer, The World as Will and Idea, Vol. III, transl. R. B. Haldane & J. Kemp (Project Gutenberg #40868)', 'https://www.gutenberg.org/ebooks/40868'],
  ['Arthur Schopenhauer, The World as Will and Idea, Vol. I, transl. R. B. Haldane & J. Kemp (Project Gutenberg #38427)', 'https://www.gutenberg.org/ebooks/38427'],
  ...SCHOPENHAUER_REFS.filter(r => !r[1].includes('gutenberg')),
]

export const schopenhauerF: Article[] = [
  {
    slug: 'schopenhauer-sieu-hinh-hoc-am-nhac',
    title: 'Schopenhauer, chương XXXIX (1) — Siêu hình học của âm nhạc: bốn bè, lời ca và opera',
    category: 'musicology',
    also: ['philosophy', 'harmony'],
    aliases: ['Về siêu hình học của âm nhạc', 'On the Metaphysics of Music', 'Zur Metaphysik der Musik', 'chương 39 Schopenhauer', 'bốn bè và bốn giới tự nhiên', 'hoà âm mở và hoà âm hẹp', 'lời ca phụ thuộc âm nhạc', 'âm nhạc là linh hồn của kịch', 'rerum concordia discors', 'giao hưởng Beethoven Schopenhauer'],
    summary: 'Nửa đầu chương XXXIX — chương bổ sung cho §52, viết cho bản 1844: bốn bè của hoà âm (bass, tenor, alto, soprano) ứng với bốn giới khoáng vật, thực vật, động vật, con người; vì sao bè trầm phải cách xa ba bè trên (hoà âm mở); âm nhạc tác động thẳng lên ý chí; lời ca là phần thêm "xa lạ", nhưng âm nhạc làm lộ linh hồn của lời và của kịch; âm nhạc opera dửng dưng với câu chuyện "như Thượng đế chỉ nhìn thấu trái tim"; giao hưởng Beethoven là "sự hoà hợp trong bất hoà" của thế giới.',
    refs: HK_REFS,
    body: `
Năm 1844, khi in lại *Thế giới như là ý chí và biểu tượng*, Schopenhauer thêm một tập thứ hai gồm 50 chương bổ sung, xếp theo bốn quyển của tập I. Chương **XXXIX, "Về siêu hình học của âm nhạc"**, bổ sung cho §52 ([[schopenhauer-am-nhac-ban-sao-cua-y-chi]], [[schopenhauer-giai-dieu-va-cam-xuc]]). Trong bản dịch Anh của **Haldane & Kemp**, các chương này nằm ở tập III (Project Gutenberg #40868).

Về nguồn: bản Haldane & Kemp (1883 – 1886) đã thuộc phạm vi công cộng và là văn bản số, không cần OCR. Trích dẫn dưới đây dịch từ bản ấy rồi **đối chiếu với nguyên văn tiếng Đức** (*Zur Metaphysik der Musik*, Zürcher Ausgabe 1977, Bd. 4, tr. 526 – 539; văn bản số trên zeno.org, phạm vi công cộng); chỗ bản Anh lệch nghĩa thì dịch theo bản Đức, chữ Đức quan trọng ghi trong ngoặc. Bản Gutenberg không giữ số trang in, nên bài ghi theo **chương**. Lưu ý Haldane & Kemp dịch *Vorstellung* là "idea" (chữ thường), dễ lẫn với Ý niệm; bộ bài vẫn dùng **biểu tượng** như ở [[schopenhauer-lo-trinh]].

## Một sự song song, không phải giống nhau
Schopenhauer nhắc lại kết luận của §52: giữa các sản phẩm của âm nhạc và thế giới như biểu tượng (tức tự nhiên) **không có sự giống nhau**, nhưng phải có một **sự song song** rõ ràng. Chương này bổ sung chi tiết cho sự song song ấy.

## Bốn bè, bốn giới
> "Bốn bè của mọi hoà âm — **bass, tenor, alto và soprano**, hay âm gốc, quãng ba, quãng năm và quãng tám — ứng với bốn bậc trong chuỗi các tồn tại: **giới khoáng vật, giới thực vật, giới động vật và con người**." (ch. XXXIX)

Ông thấy một "xác nhận nổi bật" trong một quy tắc hoà âm:

> "Bè trầm phải cách ba bè trên **xa hơn nhiều** so với khoảng cách giữa ba bè ấy với nhau, nên nó không bao giờ được tới gần chúng hơn một quãng tám, và thường còn ở thấp hơn nữa; theo đó hợp âm ba đúng phép nằm ở quãng tám thứ ba tính từ âm gốc. […] Vì thế hiệu quả của **hoà âm mở**, trong đó bè trầm cách xa các bè khác, mạnh mẽ và đẹp hơn nhiều so với **hoà âm hẹp**, trong đó nó bị đẩy lên gần chúng — thứ chỉ được dùng vì âm vực giới hạn của nhạc cụ." (ch. XXXIX)

Quy tắc ấy, theo ông, có gốc trong tự nhiên của hệ thống âm thanh: những quãng thuận gần nhất vang theo âm gốc qua dao động của nó là **quãng tám, rồi quãng năm của quãng tám ấy** (*die Oktave und deren Quinte*, tức quãng mười hai; xem [[chuoi-boi-am]]). Và nó tương ứng với "đặc điểm cơ bản của tự nhiên": các sinh vật có tổ chức gần nhau hơn nhiều so với khối vô cơ của giới khoáng vật — giữa hai bên là "ranh giới rõ nhất và vực thẳm rộng nhất trong toàn bộ tự nhiên". Còn việc giọng cao hát giai điệu vẫn là một phần của hoà âm, hợp với cả bè trầm sâu nhất, ứng với việc **cùng một vật chất** mang Ý niệm con người cũng phải mang các Ý niệm của trọng lực và hoá tính.

Đọc bằng nhạc lý hôm nay:
- Gắn bốn bè với "âm gốc – ba – năm – tám" chỉ đúng cho **một** thế bấm của hợp âm ba ở thể nguyên vị; trong hoà âm bốn bè thật, nốt nào cũng có thể nằm ở bè nào (xem [[luat-hoa-am-bon-be]]).
- Quy tắc trong sách giáo khoa hoà âm thường là: khoảng cách giữa **ba bè trên** không quá một quãng tám, còn giữa tenor và bass thì được rộng hơn. Schopenhauer đẩy quy tắc ấy thành "bè trầm không bao giờ được gần hơn một quãng tám" — cách nói mạnh hơn thực hành.

## Âm nhạc tác động thẳng lên ý chí
> "Âm nhạc tác động trực tiếp lên ý chí, tức lên cảm xúc, đam mê và xúc động của người nghe, nên nó nhanh chóng nâng chúng lên hay thay đổi chúng — điều này giải thích được vì, khác mọi nghệ thuật khác, nó không biểu hiện các Ý niệm, tức các bậc khách thể hoá của ý chí, mà biểu hiện **trực tiếp chính ý chí**." (ch. XXXIX)

## Lời ca: phần thêm xa lạ
Âm nhạc là một nghệ thuật độc lập, "mạnh nhất trong mọi nghệ thuật", nên nó không cần lời của bài hát hay hành động của vở opera. Với âm nhạc, ngay **giọng người** cũng chỉ là một âm thanh được biến đổi, như âm của một nhạc cụ, với ưu và nhược riêng; việc chính nhạc cụ ấy, là cơ quan phát âm, cũng dùng để truyền đạt khái niệm là chuyện **ngẫu nhiên**. Âm nhạc có thể tận dụng điều đó để kết hợp với thơ,

> "nhưng nó không bao giờ được biến điều đó thành chuyện chính, và chỉ lo biểu hiện những câu thơ mà phần lớn — thậm chí (như Diderot cho ta hiểu trong *Cháu của Rameau*) về bản chất — là **nhạt nhẽo**. Lời ca là và vẫn là một **phần thêm xa lạ**, giá trị thứ yếu đối với âm nhạc, vì hiệu quả của âm thanh mạnh hơn, chắc chắn hơn và nhanh hơn lời không gì sánh được." (ch. XXXIX)

Nhưng khi âm nhạc được viết cho một bài thơ hay một libretto có sẵn, nó lập tức cho thấy sức mạnh của mình:

> "làm lộ ra ý nghĩa sâu xa nhất, tối hậu và thầm kín nhất của cảm xúc được diễn tả bằng lời hay của hành động được trình bày trong opera, nói lên bản chất thật của chúng, và **dạy ta linh hồn sâu nhất của những hành động và biến cố** mà sân khấu chỉ cho ta thấy áo quần và thân xác." (ch. XXXIX)

Vì âm nhạc đứng với libretto như **cái phổ quát với cái riêng, quy tắc với ví dụ**, Schopenhauer cho rằng có lẽ đúng hơn nếu **libretto được viết cho âm nhạc** chứ không phải ngược lại. Trong thực tế, lời và hành động dẫn nhà soạn nhạc tới những xúc động của ý chí làm nền cho chúng, tức là chất kích thích cho trí tưởng tượng âm nhạc của ông.

### Vì sao ta thích bài hát có lời
> "Ở đó, cách nhận biết **trực tiếp nhất** và cách **gián tiếp nhất** của ta được huy động cùng lúc và liên kết với nhau. Trực tiếp nhất là cách mà âm nhạc biểu hiện xúc động của chính ý chí; gián tiếp nhất là cách của những khái niệm được biểu thị bằng lời. Khi đang nói ngôn ngữ của cảm xúc, lý trí không muốn ngồi yên hoàn toàn. Âm nhạc tự nó biểu hiện được mọi chuyển động của ý chí, mọi cảm xúc; nhưng thêm lời, ta còn nhận được **đối tượng** của những cảm xúc ấy, những **động cơ** gây ra chúng." (ch. XXXIX)

Đây là bổ sung quan trọng cho §52, nơi ông nói âm nhạc biểu hiện cảm xúc "không có động cơ": lời ca chính là chỗ đưa động cơ trở lại — xem [[schopenhauer-giai-dieu-va-cam-xuc]].

## Âm nhạc opera: "như Thượng đế, chỉ nhìn thấu trái tim"
Nhạc của một vở opera, trong tổng phổ, có một đời sống **hoàn toàn độc lập**, "trừu tượng", theo những quy luật bất biến của nó, nên có thể tạo đủ hiệu quả mà không cần libretto. Nhưng vì được viết cho vở kịch, nó như **linh hồn** của vở kịch: gắn với biến cố, nhân vật và lời, nó thành biểu hiện của ý nghĩa bên trong và sự tất yếu thầm kín của chúng. Đồng thời nó tỏ ra dửng dưng với toàn bộ chất liệu của câu chuyện:

> "Nó biểu hiện cơn bão đam mê và nỗi bi thương của cảm xúc theo cùng một cách ở mọi nơi, và âm thanh của nó đi kèm vở kịch với cùng sự trang trọng, dù chất liệu là Agamemnon và Achilles hay cuộc cãi cọ của một gia đình tiểu tư sản. Vì với nó chỉ có đam mê, những chuyển động của ý chí, và **như Thượng đế, nó chỉ nhìn thấu trái tim** (*sie sieht, wie Gott, nur die Herzen*)." (ch. XXXIX)

Vì thế ngay cả khi đi kèm những trò hề lố bịch nhất của **opera hài**, âm nhạc vẫn giữ vẻ đẹp, sự thuần khiết và cao cả của nó — "như ý nghĩa sâu xa và nghiêm trang của sự tồn tại treo trên trò hề và những khốn khổ vô tận của đời người, không rời nó lấy một khoảnh khắc". Liên hệ với nhận xét của Hanslick về Mozart: [[hanslick-loi-ca-va-opera]].

## Một bản giao hưởng của Beethoven
> "Nếu giờ ta nhìn vào khí nhạc thuần tuý, một bản giao hưởng của **Beethoven** bày ra trước ta sự hỗn loạn lớn nhất mà nền móng là trật tự hoàn hảo nhất; cuộc xung đột dữ dội nhất, lập tức biến thành sự hoà hợp đẹp nhất. Đó là *rerum concordia discors* — **sự hoà hợp trong bất hoà của vạn vật** —, một bức tranh đúng và trọn vẹn về bản chất của thế giới, cuộn đi trong mê cung vô tận của vô số hình thể và tự duy trì qua sự huỷ diệt không ngừng." (ch. XXXIX)

Mọi đam mê và xúc động — niềm vui, nỗi buồn, tình yêu, thù hận, kinh hoàng, hy vọng — đều được nói lên trong đó, nhưng "chỉ *in abstracto*", không cụ thể hoá; "hình thức thuần tuý không có chất liệu, như một thế giới tinh thần không có vật chất". Ta có xu hướng khoác cho chúng da thịt, thấy cảnh đời và cảnh thiên nhiên; nhưng điều ấy không cần cho việc hiểu và thưởng thức, mà còn thêm vào "một phần ngoại lai, tuỳ tiện": "vì thế tốt hơn là **nắm lấy chúng trong tính trực tiếp và thuần khiết** của chúng". Ở đây Schopenhauer gần với tư tưởng [[am-nhac-tuyet-doi|âm nhạc tuyệt đối]] hơn bao giờ hết.

## Câu hỏi và bài tập
1. Viết hợp âm Đô trưởng bốn bè ở thế mở và thế hẹp. Nghe và so sánh với nhận xét "hoà âm mở mạnh và đẹp hơn".
2. Schopenhauer nói lời ca đưa "động cơ" trở lại vào âm nhạc. Nghe một aria của Mozart không xem lời, rồi xem lời: điều gì được thêm vào?
3. "Như Thượng đế, nó chỉ nhìn thấu trái tim." Tìm một đoạn opera hài mà âm nhạc nghiêm trang hơn hẳn tình huống.
4. Nghe chương I Giao hưởng số 5 của Beethoven và mô tả nó bằng ý "sự hoà hợp trong bất hoà".
`,
  },
  {
    slug: 'schopenhauer-nhip-giai-dieu-va-nghich-am',
    title: 'Schopenhauer, chương XXXIX (2) — Thuận – nghịch, nhịp và sự ra đời của giai điệu',
    category: 'musicology',
    also: ['philosophy', 'harmony', 'rhythm'],
    aliases: ['thuận âm nghịch âm Schopenhauer', 'nghịch âm là cái cưỡng lại ý chí', 'âm nhạc không gây buồn thật', 'soprano hát giai điệu', 'bè trầm hát giai điệu', 'nhịp là đối xứng trong thời gian', 'kiến trúc là âm nhạc đông cứng', 'cadenza đông cứng', 'chia lìa và hoà giải', 'giai điệu là nhịp và hoà âm', 'nốt treo Schopenhauer', 'hợp âm át bảy và câu kết', 'trưởng và thứ hai tâm trạng'],
    summary: 'Nửa sau chương XXXIX: nối siêu hình học với vật lý âm thanh — thuận âm là tỉ lệ dao động hữu tỉ, số nhỏ; nghịch âm là cái cưỡng lại tri giác, nên thành hình ảnh của cái cưỡng lại ý chí; vì thế nhạc buồn không làm ta buồn thật. Vì sao soprano hát giai điệu và bè trầm thì không. Nhịp là đối xứng trong thời gian: kiến trúc và âm nhạc là hai cực; "kiến trúc là âm nhạc đông cứng". Giai điệu là sự chia lìa và hoà giải liên tục giữa yếu tố nhịp và yếu tố hoà âm (kèm ví dụ nhạc của chính Schopenhauer); nốt treo, hợp âm át bảy, hai hợp âm cơ bản, trưởng – thứ.',
    refs: HK_REFS,
    body: `
Tiếp [[schopenhauer-sieu-hinh-hoc-am-nhac]]. Ở nửa sau chương XXXIX, Schopenhauer nói ông đã xét âm nhạc "chỉ từ mặt siêu hình học", và giờ cần chỉ ra **phương tiện** mà nó dùng để tác động lên ta — tức nối mặt siêu hình học với **mặt vật lý**, vốn "đã được nghiên cứu đầy đủ và ai cũng biết".

## Thuận âm, nghịch âm và ý chí
Ông dựa trên lý thuyết phổ biến thời ấy: hoà âm của các nốt tuỳ vào sự **trùng khớp của dao động** — trùng ở mỗi dao động thứ hai, thứ ba, thứ tư… thì chúng là quãng tám, quãng năm, quãng bốn của nhau.
- Khi tỉ lệ dao động **hữu tỉ, biểu thị bằng số nhỏ**, các nốt hoà làm một trong tri giác của ta: **thuận âm**.
- Khi tỉ lệ **vô tỉ hay chỉ biểu thị bằng số lớn**, không có sự trùng khớp nào cảm nhận được, chúng "cãi nhau mãi" (*obstrepunt sibi perpetuo*): **nghịch âm**.

Theo lý thuyết ấy, âm nhạc là cách làm cho các tỉ lệ số hữu tỉ và vô tỉ trở nên **hiểu được bằng giác quan**, không qua khái niệm như số học. Rồi đến bước nối với siêu hình học:

> "Cái cưỡng lại **tri giác** của ta — tỉ lệ vô tỉ, tức nghịch âm — trở thành hình mẫu tự nhiên của cái cưỡng lại **ý chí** của ta; và ngược lại, thuận âm, tức tỉ lệ hữu tỉ, dễ dàng thích ứng với tri giác, trở thành hình mẫu của **sự thoả mãn của ý chí**." (ch. XXXIX)

Vì yếu tố hữu tỉ và vô tỉ ấy có vô số bậc, sắc thái, chuỗi và biến hoá, âm nhạc thành chất liệu để vẽ trung thành mọi chuyển động của trái tim con người — vốn về bản chất luôn là thoả mãn và không thoả mãn — "điều diễn ra qua việc **sáng tạo giai điệu**".

## Vì sao nhạc buồn không làm ta buồn thật
Nghệ thuật đòi hỏi ý chí không xen vào, ta phải là **chủ thể nhận thức thuần tuý** ([[schopenhauer-cai-dep-va-cai-sieu-pham]]). Vì thế âm nhạc không được khơi dậy đau đớn và khoái lạc thật, mà chỉ những **vật thay thế** của chúng: cái dễ chịu với trí tuệ như **hình ảnh** của sự thoả mãn, cái khó chịu như **hình ảnh** của nỗi đau.

> "Chỉ vì thế mà âm nhạc không bao giờ gây cho ta nỗi buồn thật, mà ngay trong những **hợp âm đau đớn nhất** vẫn dễ chịu, và ta vui lòng nghe trong ngôn ngữ của nó **lịch sử thầm kín của ý chí ta** (*die geheime Geschichte unsers Willens*) với mọi trì hoãn, trở ngại và dày vò — kể cả trong những giai điệu u sầu nhất. Còn khi, trong thực tại và những kinh hoàng của nó, chính ý chí của ta bị khuấy động và hành hạ, thì ta không còn làm việc với các âm và tỉ lệ số của chúng nữa, mà chính ta là **sợi dây bị kéo căng, bị gảy và run rẩy** (*die gespannte, gekniffene und zitternde Saite*)." (ch. XXXIX)

## Vì sao soprano hát giai điệu, còn bè trầm thì không
Chất "âm nhạc" của nốt tuỳ vào **tốc độ dao động** chứ không vào cường độ, nên trong hoà âm, tai luôn theo **nốt cao nhất**, không phải nốt to nhất. Vì thế ngay trong phần đệm dàn nhạc mạnh nhất, giọng soprano vẫn nổi rõ và có "quyền tự nhiên" hát giai điệu. Nó lại linh hoạt nhất — thấy ở những đoạn hoa mỹ — nên là đại diện của **ý thức phát triển cao nhất**, ở bậc trên cùng của thang tồn tại.

Đối cực là **bè trầm**: cứng nhắc, chỉ lên xuống bằng những bước lớn — quãng ba, bốn, năm —, mỗi bước bị những quy tắc cứng điều khiển; nên là đại diện tự nhiên của giới vô cơ. Ông viết rằng bè trầm "không bao giờ được đi lên một cung, chẳng hạn từ bậc bốn lên bậc năm, vì như thế tạo ra ở các bè trên những quãng năm và quãng tám liên tiếp sai luật"; nên tự bản chất nó không thể mang giai điệu. Nếu giai điệu được giao cho bè trầm, đó là nhờ **đối âm**: một bè trên bị hạ xuống, "cải trang thành bè trầm", và thật ra nó cần thêm một bè trầm nền thứ hai đi kèm. Vì thế các **aria cho giọng bass** với phần đệm đầy đủ "không bao giờ cho ta niềm vui thuần khiết như aria soprano". Một bè trầm có giai điệu như vậy giống **khối đá cẩm thạch được khoác hình người** — nên nó hợp tuyệt vời với **Người khách bằng đá** trong *Don Giovanni* (ch. XXXIX).

Đọc bằng nhạc lý hôm nay:
- Bước IV → V ở bè trầm **có** nguy cơ tạo quãng năm, quãng tám song song nếu các bè trên đi cùng chiều; nhưng sách hoà âm giải quyết bằng cách cho các bè trên đi **ngược chiều**, chứ không cấm bè trầm đi liền bậc. Câu "không bao giờ" của Schopenhauer là phóng đại.
- Bè trầm có giai điệu là chuyện thường trong Baroque và jazz (xem [[bass-so]], [[bass-di-jazz]]). Nhận xét về aria bass phản ánh khẩu vị của ông hơn là một quy luật.

## Nhịp là đối xứng trong thời gian
Giai điệu có hai yếu tố: **nhịp điệu** (lượng, độ dài) và **hoà âm** (chất, cao độ). Trên bản nhạc, ông nói, yếu tố thứ nhất gắn với các **đường dọc** (vạch nhịp), yếu tố thứ hai với các **đường ngang** (dòng kẻ). Cả hai dựa trên tỉ lệ thuần số học, tức tỉ lệ thời gian. Yếu tố nhịp là **cốt yếu**: tự nó tạo được một kiểu giai điệu, như trên trống.

> "**Nhịp điệu** trong thời gian là điều **đối xứng** trong không gian: sự chia thành những phần bằng nhau tương ứng với nhau." (ch. XXXIX)

Trong chuỗi nghệ thuật của ông, **kiến trúc và âm nhạc là hai đầu** — khác nhau nhất về bản chất, sức mạnh, phạm vi; kiến trúc chỉ ở trong không gian, âm nhạc chỉ ở trong thời gian. Chính từ đó sinh ra điểm tương tự duy nhất: như cái giữ trật tự trong kiến trúc là đối xứng, trong âm nhạc là nhịp — "các cực đoan gặp nhau". Viên đá giống hệt nhau của toà nhà ứng với những phách giống hệt nhau của bản nhạc.

Rồi ông tả cấu trúc thứ bậc của một tác phẩm như một người học [[hinh-thuc-am-nhac|hình thức]]:
- **Câu nhạc** gồm vài ô nhịp và có hai nửa bằng nhau: một nửa **đi lên, vươn tới**, thường tới **âm át**; một nửa **đi xuống, lắng lại**, trở về âm chủ (xem [[cau-ket]]).
- Hai hay nhiều câu làm thành một **phần**, thường được nhân đôi bằng dấu nhắc lại; hai phần làm thành một bản nhỏ hay một chương.
- Concerto hay sonata thường có ba chương, giao hưởng bốn, thánh lễ năm.

Từ đó câu nói "kiến trúc là âm nhạc đông cứng". Schopenhauer truy nguồn nó về **Goethe**, dẫn *Trò chuyện với Goethe* của Eckermann: Goethe kể đã tìm thấy trong giấy tờ một trang gọi kiến trúc là "một thứ âm nhạc đã cứng lại" (*eine erstarrte Musik*), vì tâm trạng kiến trúc tạo ra gần với hiệu quả của âm nhạc (Eckermann, tập II, tr. 88, theo dẫn của Schopenhauer). Schopenhauer gọi câu "kiến trúc là âm nhạc đông cứng" (*gefrorene Musik*) là một "câu đùa táo bạo" được nhắc đi nhắc lại suốt 30 năm, và đoán Goethe đã buột ra nó trong trò chuyện từ lâu, rồi người khác nhặt lấy để khoe. Schopenhauer nhấn mạnh sự tương tự ấy **chỉ ở hình thức bên ngoài** (nhịp ↔ đối xứng), không ở bản chất — "thật lố bịch nếu muốn đặt nghệ thuật hạn hẹp và yếu nhất ngang hàng về bản chất với nghệ thuật rộng lớn và mạnh nhất"; và đùa thêm: khi âm nhạc, như "trong một cơn thèm độc lập", nhân một chỗ ngừng để thoát khỏi nhịp mà bay vào một **cadenza** tự do, đoạn nhạc không nhịp ấy giống **phế tích** không còn đối xứng — có thể gọi là "một cadenza đông cứng" (ch. XXXIX). (Câu "kiến trúc là âm nhạc đông cứng" thường được gán cho Goethe hay Schelling; ở đây ta có lời của chính Schopenhauer dẫn Eckermann — chưa đối chiếu trực tiếp bản Eckermann.)

## Giai điệu: chia lìa và hoà giải
Đây là phân tích hay nhất của chương:

> "Bản chất của giai điệu là **sự chia lìa và hoà giải** không ngừng được làm mới giữa yếu tố nhịp và yếu tố hoà âm của nó." (ch. XXXIX)

- Yếu tố **hoà âm** lấy âm chủ làm tiền đề, lang thang qua các nốt của âm giai, tới một quãng hài hoà — thường là **âm át** hay **âm hạ át** —, cho một sự thoả mãn **chưa trọn**; rồi qua một đường dài tương tự, trở về **âm chủ**, nơi thoả mãn trọn vẹn.
- Yếu tố **nhịp** đòi những **thời điểm** nhất định: những ô nhịp được đếm, những phách mạnh ("phách tốt") đối lập với phách nhẹ.
- **Chia lìa**: một yếu tố được thoả mà yếu tố kia thì không. **Hoà giải**: cả hai được thoả cùng lúc.

Schopenhauer đưa ra một ví dụ nhạc rất đơn giản (nhịp 2/4, bốn ô):

::rhythm 2/4 e-e-e-e / q rq / e-e-e-e / h // | Nhịp của ví dụ (chép lại theo hình trong bản Haldane & Kemp, Project Gutenberg #40868): ô 1 và 3 là bốn móc đơn, ô 2 là một nốt đen và dấu lặng đen, ô 4 là một nốt trắng

::staff treble C5 E5 G5 C6 / B5 / B4 D5 G5 B5 / C6 | Cao độ của ví dụ: ô 1 đi lên Đô – Mi – Son – Đô; ô 2 dừng ở Si; ô 3 đi lên Si – Rê – Son – Si; ô 4 về Đô

> "Ở đây chuỗi hoà âm tìm thấy âm chủ đúng ở cuối ô thứ nhất; nhưng nó không nhận được thoả mãn nào từ đó, vì nhịp lại đang ở **phần nhẹ nhất** của ô. Ngay sau đó, ở ô thứ hai, nhịp có **phần mạnh** của ô, nhưng chuỗi nốt lại đang ở **bậc bảy**. Vậy ở đây hai yếu tố của giai điệu hoàn toàn **chia lìa**, và ta thấy bất an. Ở nửa sau của câu, mọi thứ đảo ngược, và ở nốt cuối chúng **hoà giải**." (ch. XXXIX)

Xét về siêu hình học, sự chia lìa và hoà giải không ngừng ấy là bản sao của việc **những ước muốn mới nảy sinh rồi được thoả mãn**. Ông còn thấy trong đó một điều kiện *bên trong* (hoà âm) gặp một điều kiện *bên ngoài* (nhịp) như thể **tình cờ** — do nhà soạn nhạc sắp đặt —, có thể so với **vần** trong thơ; và đó là hình ảnh của việc ước muốn của ta gặp những hoàn cảnh bên ngoài thuận lợi không phụ thuộc vào nó, tức **hình ảnh của hạnh phúc**. Cũng vì thế mà âm nhạc "len vào lòng ta" (*schmeichelt sich in unser Herz*): nó luôn bày ra trước mắt ta **sự thoả mãn trọn vẹn của mọi ước muốn**.

## Nốt treo, át bảy, hai hợp âm cơ bản
- **Nốt treo** (suspension): "một nghịch âm trì hoãn thuận âm cuối cùng, vốn được chờ đợi chắc chắn; nên sự khao khát nó được tăng lên, và khi nó đến thì thoả mãn hơn" — tương tự sự thoả mãn của ý chí được nâng cao nhờ trì hoãn (xem [[not-ngoai-hop-am]]).
- **Câu kết trọn vẹn** đòi **hợp âm át bảy** đứng trước, "vì sự thoả mãn sâu nhất và sự giải toả trọn nhất chỉ có thể đến sau khao khát tha thiết nhất" (xem [[cau-ket]]).
- Âm nhạc nói chung là một chuỗi hợp âm ít nhiều **gây bất an** (khơi khao khát) và ít nhiều **làm lắng, làm thoả**; một chuỗi chỉ toàn hợp âm thuận "sẽ ngấy, mệt mỏi và trống rỗng, như sự uể oải sinh ra khi mọi ước muốn được thoả".
- "Trong toàn bộ âm nhạc thật ra chỉ có **hai hợp âm cơ bản**: hợp âm bảy nghịch và hợp âm ba thuận, mọi hợp âm đều quy về chúng được" — ứng với việc với ý chí, rốt cuộc chỉ có **không thoả mãn và thoả mãn**. (Một cách nói giản lược theo lý thuyết hoà âm thế kỷ XVIII – XIX.)

## Trưởng và thứ
Như có hai tâm trạng cơ bản — thanh thản (hay ít ra là khoẻ mạnh) và buồn (hay ít ra là ngột ngạt — *Beklemmung*) —, âm nhạc có hai giọng chung là **trưởng và thứ**, và luôn ở một trong hai.

> "Thật kỳ diệu là có một **dấu hiệu của nỗi đau** không gây đau về thể chất mà cũng không do quy ước, nhưng vẫn thích hợp và không thể nhầm: **giọng thứ**. Từ đó ta đo được âm nhạc bắt rễ sâu đến đâu trong bản chất của sự vật và con người." (ch. XXXIX)

Hai nhận xét kèm theo là những khái quát dân tộc của thời ông, không có giá trị như nhận định khoa học: ở các dân tộc phương Bắc sống trong điều kiện khắc nghiệt, "nhất là người Nga", giọng thứ chiếm ưu thế, cả trong nhạc nhà thờ; và **allegro ở giọng thứ** rất phổ biến, đặc trưng trong nhạc Pháp, "như thể người ta nhảy múa trong khi giày đang cấn chân". Xem thêm [[am-giai-thu]].

## Những nốt nhạc như diễn viên
Khi âm chủ đổi, giá trị mọi quãng đổi theo, cùng một nốt lúc là bậc hai, lúc bậc ba, bậc bốn: các nốt của âm giai giống **diễn viên** phải lúc đóng vai này lúc vai khác mà con người vẫn là một; việc họ không luôn hợp vai ứng với sự **không thuần không tránh được** của mọi hệ thống mà luật bình quân đem lại — như ông đã nói cuối §52 ([[schopenhauer-am-nhac-ban-sao-cua-y-chi]], [[luat-binh-quan]], [[chuyen-giong]]).

## Âm nhạc chỉ tâng bốc ý chí?
Chương kết bằng một lời tự vấn: có người sẽ phật lòng vì theo siêu hình học này, âm nhạc — thứ thường nâng tâm hồn ta lên, như nói về những thế giới khác tốt đẹp hơn — thật ra **chỉ tâng bốc ý chí sống**, phô cho nó bản chất của nó, đánh lừa nó bằng hình ảnh thành công, và cuối cùng biểu hiện sự thoả mãn của nó. Ông chỉ đáp bằng một câu Upanishad (theo bản Latin *Oupnek'hat*): ở đâu có niềm vui, đó là một mảnh của niềm vui của Atman. Câu trả lời này rất ngắn; mâu thuẫn giữa niềm vui âm nhạc và thuyết bi quan của ông vẫn là đề tài tranh luận (xem [[schopenhauer-di-san-am-nhac]]).

## Câu hỏi và bài tập
1. Chơi ví dụ nhạc của Schopenhauer trên đàn (2/4: Đô–Mi–Son–Đô | Si — | Si–Rê–Son–Si | Đô). Rồi tự viết một biến thể trong đó âm chủ rơi đúng phách mạnh ở ô 1. Cảm giác thay đổi thế nào?
2. Tìm một nốt treo 4–3 trong một bản hợp xướng của Bach và giải thích theo ngôn ngữ của Schopenhauer.
3. "Nhịp là đối xứng trong thời gian." Phân tích một câu nhạc 8 ô của Mozart thành hai nửa "đi lên tới âm át" và "trở về âm chủ".
4. Viết một đoạn ngắn về một aria bass mà bạn thích, phản bác (hoặc ủng hộ) nhận xét của Schopenhauer.
`,
  },
  {
    slug: 'schopenhauer-bo-sung-quyen-ba',
    title: 'Schopenhauer, chương XXIX – XXXVIII — Các chương bổ sung cho Quyển III',
    category: 'musicology',
    also: ['philosophy'],
    aliases: ['bổ sung Quyển III Schopenhauer', 'chương 29 38 Schopenhauer', 'nghệ thuật trả lời đời sống là gì', 'tài năng và thiên tài', 'người bắn cung trúng đích không ai thấy', 'thiên tài là đứa trẻ lớn', 'Mozart mãi là đứa trẻ', 'tác phẩm của thiên tài vô dụng', 'không dân tộc nào không có âm nhạc', 'vần và nhịp thành âm nhạc', 'Norma Qual cor tradisti'],
    summary: 'Các chương bổ sung bản 1844 cho Quyển III (theo Haldane & Kemp, tập III), đọc theo những gì liên quan tới âm nhạc: nghệ thuật trả lời câu hỏi "đời sống là gì?" và âm nhạc trả lời sâu nhất; tài năng và thiên tài (người bắn trúng đích không ai thấy); thiên tài như đứa trẻ lớn, Mozart; tác phẩm thiên tài "vô dụng" là hoa của tồn tại; cái đẹp tự nhiên thanh lọc trí óc như âm nhạc thanh lọc cảm xúc; kiến trúc và âm nhạc không mô phỏng; giai điệu đi khắp thế giới, không dân tộc nào thiếu âm nhạc; vần và nhịp biến thơ thành âm nhạc; Norma của Bellini như mẫu bi kịch.',
    refs: HK_REFS,
    body: `
Ngoài chương XXXIX về âm nhạc ([[schopenhauer-sieu-hinh-hoc-am-nhac]], [[schopenhauer-nhip-giai-dieu-va-nghich-am]]), Schopenhauer viết cho Quyển III mười chương bổ sung khác (bản Đức 1844; trong bản Haldane & Kemp nằm ở tập III):

| Chương | Tên | Bổ sung cho |
|---|---|---|
| XXIX | Về nhận thức các Ý niệm | §30 – 32 |
| XXX | Về chủ thể nhận thức thuần tuý | §33 – 34, 38 |
| XXXI | Về thiên tài | §36 – 37 |
| XXXII | Về điên loạn | §36 |
| XXXIII | Nhận xét rời về cái đẹp tự nhiên | §38 – 39 |
| XXXIV | Về bản chất bên trong của nghệ thuật | §36, 49 |
| XXXV | Về mỹ học kiến trúc | §43 |
| XXXVI | Nhận xét rời về mỹ học của điêu khắc và hội hoạ | §44 – 50 |
| XXXVII | Về mỹ học thi ca | §51 |
| XXXVIII | Về lịch sử | §51 |
| XXXIX | Về siêu hình học của âm nhạc | §52 |

Bài này không dịch hết mười chương mà gom những đoạn **nói về âm nhạc** hoặc đáng chú ý nhất cho người học nhạc. Trích dẫn dịch từ bản Haldane & Kemp, ghi theo chương, và đã đối chiếu với nguyên văn tiếng Đức (Zürcher Ausgabe, Bd. 4, trên zeno.org).

## Nghệ thuật trả lời "đời sống là gì?" (XXXIV)
Kết quả của sự nắm bắt thuần khách quan là một câu trả lời cho câu hỏi "**Đời sống là gì?**". Mọi tác phẩm thật đều trả lời theo cách của nó, nhưng bằng "ngôn ngữ ngây thơ, trẻ con của trực quan", nên câu trả lời chỉ là một hình ảnh thoáng qua.

> "Mọi tác phẩm nghệ thuật trả lời câu hỏi ấy cho trực quan — mọi bức tranh, mọi pho tượng, mọi bài thơ, mọi cảnh trên sân khấu; **âm nhạc cũng trả lời**, và thật ra **sâu hơn tất cả**, vì trong ngôn ngữ của nó — được hiểu hoàn toàn trực tiếp, nhưng không dịch được sang ngôn ngữ của lý trí — bản chất bên trong của mọi đời sống và tồn tại tự biểu hiện." (ch. XXXIV)

Các nghệ thuật khác giơ ra một hình ảnh và nói: "Hãy nhìn đây, đời sống là thế này." Câu trả lời ấy, dù đúng, chỉ cho một sự thoả mãn tạm thời — triết học mới cho câu trả lời bằng khái niệm.

## Kẻ chơi nghệ thuật nghiệp dư (XXXIV)
> "Một sự đùa giỡn tuỳ tiện với các phương tiện của nghệ thuật mà không biết đúng mục đích là đặc điểm cơ bản của kẻ nghiệp dư trong mọi nghệ thuật. Hắn lộ ra ở những cây cột không đỡ gì, những đường xoắn vô mục đích […] của kiến trúc tồi, ở **những đoạn chạy và hình nốt vô nghĩa, cùng tiếng ồn vô mục đích của âm nhạc tồi**, ở tiếng leng keng của vần trong thơ vô nghĩa." (ch. XXXIV)

Ông nhắc lại lập luận của §49 – 50: tác phẩm sinh ra từ khái niệm rõ ràng luôn **giả**. Ta khó chịu khi, nghe một bản nhạc "nhằm miêu tả một điều xác định", thấy cái khái niệm lạnh lùng, khô khan lộ ra qua mọi chất liệu phong phú. Dấu hiệu nhận ra: tác giả có thể nói rõ bằng lời điều mình định trình bày **trước khi** bắt tay vào làm — vậy thì lời đã đủ.

Ngược lại, những gì làm "một mạch", như bản phác của hoạ sĩ, như **giai điệu đến hoàn toàn không cần suy nghĩ, như thể nhờ cảm hứng**, như bài thơ trữ tình, có ưu thế là thuần tuý sản phẩm của khoảnh khắc. Còn những tác phẩm lớn làm chậm — tranh lịch sử lớn, sử thi dài, **opera lớn** — không tránh khỏi những đoạn nhạt, nơi lý trí, kỹ thuật và thói quen phải lấp chỗ trống mà cảm hứng để lại; chỉ trừ những kiệt tác tuyệt đỉnh như *Hamlet*, *Faust*, **opera *Don Juan*** (*Don Giovanni*). Ông dẫn làm ví dụ những sử thi dài: *Messiade* của Klopstock, *Gerusalemme liberata* của Tasso, cả *Paradise Lost* và *Aeneid* — và câu của Horace: "có khi Homer hiền lành cũng ngủ gật". (Bản dịch Anh ghi "the Messiah", dễ tưởng là oratorio của Handel; nguyên văn Đức *Messiade* là sử thi của Klopstock.)

## Tài năng và thiên tài (XXXI)
Thiên tài là năng lực trội về nhận thức **trực quan**; tài năng là sự nhanh nhạy của nhận thức **diễn ngôn**. Câu nổi tiếng nhất của chương — thường bị trích mà không ghi nguồn — có ở đây:

> "Người có tài làm được điều vượt quá **năng lực làm** của người khác, nhưng không vượt quá **năng lực hiểu** của họ; vì thế anh ta lập tức có người đánh giá cao. Còn thành tựu của người thiên tài vượt quá cả năng lực làm lẫn năng lực hiểu của người khác; nên họ không nhận ra anh ta ngay. **Người có tài như người bắn cung bắn trúng đích mà người khác không bắn trúng; người thiên tài như người bắn trúng đích mà người khác thậm chí không nhìn thấy**; vì thế họ chỉ biết về anh ta gián tiếp, và do đó muộn." (ch. XXXI)

Cũng trong chương này: tác phẩm của thiên tài — "âm nhạc, triết học, tranh, thơ" — **không để dùng vào việc gì**; "vô dụng là thuộc tính của tác phẩm thiên tài, là bằng quý tộc của nó". Mọi việc khác của con người là để duy trì hay làm nhẹ sự tồn tại; chỉ những tác phẩm này tồn tại vì chính nó, là "**hoa hay lợi nhuận ròng của sự tồn tại**" — như cách §52 gọi nghệ thuật là "hoa của đời sống".

Thiên tài và đứa trẻ có họ hàng: sự ngây thơ, giản dị cao cả. Herder và người khác chê Goethe "luôn là một đứa trẻ lớn"; và người ta nói về **Mozart** rằng cả đời ông vẫn là một đứa trẻ. Schopenhauer dẫn tiểu sử Mozart của Nissen và *Nekrolog* năm 1791 của Schlichtegroll: "Trong nghệ thuật, ông sớm thành người lớn, nhưng trong mọi quan hệ khác, ông luôn là một đứa trẻ." (ch. XXXI)

## Cái đẹp tự nhiên như âm nhạc (XXXIII)
Nhìn một phong cảnh đẹp, xét như hiện tượng của não, là hiện tượng duy nhất luôn hoàn toàn đều đặn và không tì vết; nó đặt cả bộ não vào nhịp hoạt động đúng, và tư duy cố theo phương pháp của tự nhiên trong sự nhất quán, liên kết, hài hoà.

> "Một phong cảnh đẹp vì thế là **sự thanh lọc của trí óc**, như âm nhạc, theo Aristotle, là sự thanh lọc của cảm xúc; và trước nó, người ta nghĩ đúng nhất." (ch. XXXIII)

## Kiến trúc và âm nhạc không mô phỏng (XXXV)
Ông bác ý cho rằng thân cây hay hình người (như Vitruvius nói) là nguyên mẫu của cây cột. Nếu hình dạng cột chỉ là thứ tình cờ lấy từ bên ngoài, ta đã không thấy nó hài hoà, cũng không thấy một sai lệch nhỏ về tỉ lệ khó chịu ngay "**như một nốt sai trong âm nhạc**". Điều đó chỉ có thể vì, với mục đích và phương tiện cho trước, mọi thứ còn lại được xác định tiên nghiệm — "như trong âm nhạc, **với giai điệu và giọng cho trước, toàn bộ hoà âm về cơ bản được xác định**. Và như âm nhạc, kiến trúc nói chung **không phải nghệ thuật mô phỏng**, dù cả hai thường bị coi lầm là vậy." (ch. XXXV)

## Giai điệu đi khắp thế giới (XXXVII)
Ông kể năm 1823 ở Florence người ta tìm ra một bức Đức Mẹ của Raphael treo nhiều năm trong phòng gia nhân của một cung điện — bằng chứng rằng tranh tượng cần nhiều học vấn mới được trân trọng. Ngược lại:

> "Một **giai điệu đẹp chạm tới trái tim** chắc chắn sẽ đi vòng quanh thế giới, và một bài thơ xuất sắc lang thang từ dân tộc này sang dân tộc khác. […] Các nghệ thuật tạo hình có thể thiếu được: cả những dân tộc — như các dân tộc Hồi giáo — không có chúng; nhưng **không dân tộc nào không có âm nhạc và thơ ca**." (ch. XXXVII)

(Nhận xét về các dân tộc Hồi giáo là khái quát của thời ông về việc kiêng hình tượng; nghệ thuật Hồi giáo thật ra rất phong phú về trang trí, thư pháp và kiến trúc.)

## Vần và nhịp biến thơ thành âm nhạc (XXXVII)
Bổ sung cho §51 ([[schopenhauer-thi-ca-va-bi-kich]]): vì sao những phương tiện "vụn vặt, gần như trẻ con" như vần và nhịp lại có sức mạnh lớn đến thế?

> "Cái được cho trực tiếp cho thính giác, tức âm thanh thuần tuý của lời, nhận từ nhịp và vần một sự trọn vẹn và ý nghĩa tự thân, vì **nhờ đó nó trở thành một kiểu âm nhạc**; nên nó dường như tồn tại vì chính nó, không còn chỉ là phương tiện. […] Việc nó còn chứa một ý nghĩa, diễn đạt một tư tưởng, hiện ra như một món thêm bất ngờ — **như lời được thêm vào âm nhạc**." (ch. XXXVII)

Ông kể khi còn nhỏ, ông đã thích âm thanh của thơ rất lâu trước khi phát hiện ra thơ còn có nghĩa. Trong thơ trữ tình, sự chuyển nhanh giữa các hình ảnh được nối bằng một tâm trạng chung, "**như trong âm nhạc, sự chuyển từ giọng này sang giọng khác được thực hiện bằng hợp âm bảy**, qua đó âm gốc còn đang vang trở thành âm át của giọng mới" (ch. XXXVII) — mô tả đúng cách [[chuyen-giong|chuyển giọng]] qua hợp âm át bảy.

## Norma của Bellini như mẫu bi kịch (XXXVII)
Hiệu quả bi kịch thật — sự cam chịu và thăng hoa của nhân vật — hiếm khi được thể hiện thuần khiết như trong **opera *Norma*** (Bellini), ở song ca "*Qual cor tradisti, qual cor perdesti*", nơi sự chuyển biến của ý chí được báo hiệu bằng **sự lặng yên đột ngột trong âm nhạc**. Xét riêng động cơ và cấu trúc bên trong — bỏ qua "âm nhạc xuất sắc" và lời vốn chỉ là lời libretto —, *Norma* là "một bi kịch rất hoàn hảo" (ch. XXXVII). Cùng với lời khen Rossini ở §52, đây là dấu hiệu khẩu vị opera Ý của Schopenhauer.

## Câu hỏi và bài tập
1. Nghe song ca "Qual cor tradisti" trong *Norma* (cảnh cuối). Chỗ nào âm nhạc "lặng yên đột ngột"?
2. Tìm một bản nhạc mà bạn có thể "nói rõ bằng lời điều nó định trình bày trước khi viết". Theo chương XXXIV, đó là dấu hiệu gì?
3. Chơi một chuyển giọng từ Đô trưởng sang Fa trưởng bằng hợp âm Đô bảy (C7). Đối chiếu với mô tả trong chương XXXVII.
4. "Người thiên tài bắn trúng đích người khác không nhìn thấy." Tìm một nhà soạn nhạc được nhận ra muộn và lý giải theo chương XXXI.
`,
  },
]
