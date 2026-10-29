"""
The 45 lessons of the book, chapter by chapter, in the order and with the topics of the conservatory course this book
follows (A. Agazhanov, Курс сольфеджио, вып. 2: Хроматизм и модуляция, Moscow: Muzyka, 1973 — structure and method
only; every text and every exercise here is new).

A lesson gives: the topics (the box at its head), a text, and the material the generator needs:
  mode     'maj' | 'min' | 'both'   keys      'C' (C major / c minor only) or 'all' (concentric order)
  variant  melody variety ('nat', 'harm', 'mel', or 'mix')
  targets  (degree, mod) the lesson is about — sung in the pop-phrases and degree drills, wanted in the melodies
  ivs      augmented / diminished intervals of drill IV, or ('from', [...]) for intervals from a given note
  pool     phrase plans (names from plans.py / core.chords) featuring the lesson's chords
  prog     chord progressions for drill VI
  kind     'period' | 'parallel' | 'mod' (+ rel) | 'chain' | 'enh'
"""

# the keys in concentric order, from C outwards by semitones (as in the course: up and down from C)
MAJ_KEYS = ['C', 'Db', 'B', 'D', 'Bb', 'Eb', 'A', 'E', 'Ab', 'F', 'G', 'F#']
MIN_KEYS = ['c', 'c#', 'b', 'd', 'bb', 'eb', 'a', 'e', 'g#', 'f', 'g', 'f#']

HARM_MAJ = {
    'half': [['T', 's', 'T', 'D'], ['T', 'VI', 's', 'D'], ['T', 'IIø7', 'K64 D', 'D'], ['T', 'S', 's', 'D']],
    'full': [['T', 's', 'VII7', 'T'], ['T', 'VI', 'IIø7 D7', 'T'], ['T', 's', 'K64 D7', 'T'], ['T', 'D VI', 's D7', 'T'], ['T', 'S', 'VII7', 'T']],
}
MEL_MAJ = {
    'half': [['T', 'bVII', 's', 'D'], ['T', 'S', 'bVII s', 'D'], ['T', 'bVI', 's', 'D']],
    'full': [['T', 'bVII', 's D7', 'T'], ['T', 's', 'IIø7 D7', 'T'], ['T', 'bVII s', 'K64 D7', 'T'], ['T', 'bVI', 's D7', 'T']],
}
MINOR3 = {
    'half': [['t', 'VII', 'III', 'D'], ['t', 'd', 's', 'D'], ['t', 'S', 'K64 D', 'D'], ['t', 'VI', 'IIø7', 'D']],
    'full': [['t', 'S', 'D7', 't'], ['t', 's', 'VII7', 't'], ['t', 'VI', 'IIø7 D7', 't'], ['t', 'VII III', 's D7', 't']],
}
DD_MAJ = {
    'half': [['T', 'S', 'DD', 'D'], ['T', 'VI', 'DD7', 'D'], ['T', 'II', 'DDVII7', 'D'], ['T', 'S DD7', 'K64 D', 'D']],
    'full': [['T', 'DD7', 'D7', 'T'], ['T', 'S DD7', 'K64 D7', 'T'], ['T', 'VI', 'DD D7', 'T'], ['T', 'II', 'DDVII7 D7', 'T']],
}
DD_MIN = {
    'half': [['t', 's', 'DD', 'D'], ['t', 'VI', 'DD7', 'D'], ['t', 's DD7', 'K64 D', 'D'], ['t', 'II', 'DDVII7', 'D']],
    'full': [['t', 'DD7', 'D7', 't'], ['t', 's DD7', 'K64 D7', 't'], ['t', 'VI', 'DD D7', 't'], ['t', 'II', 'DDVII7 D7', 't']],
}
N_MIN = {
    'half': [['t', 'N', 'D', 'D'], ['t', 's N', 'K64 D', 'D'], ['t', 'VI', 'N', 'D']],
    'full': [['t', 's N', 'K64 D7', 't'], ['t', 'VI', 'N D7', 't'], ['t', 'N', 'D7', 't']],
}
N_MAJ = {
    'half': [['T', 'N', 'D', 'D'], ['T', 's N', 'K64 D', 'D'], ['T', 'VI', 'N', 'D']],
    'full': [['T', 's N', 'K64 D7', 'T'], ['T', 'VI', 'N D7', 'T'], ['T', 'N', 'D7', 'T']],
}


def L(**kw):
    kw.setdefault('variant', 'harm')
    kw.setdefault('targets', [])
    kw.setdefault('allow', [])
    kw.setdefault('alters', [])
    kw.setdefault('pool', None)
    kw.setdefault('kind', 'period')
    kw.setdefault('melodies', 6)
    kw.setdefault('chromatic', False)
    kw.setdefault('seq', [(0, 2), (1, 2), (2, 4)])
    return kw


PRELUDE_CH1 = 'Trong sáu bài đầu chỉ dùng Đô trưởng và Đô thứ; từ bài 7 trở đi cùng nội dung ấy được đọc ở nhiều giọng khác nhau.'

LESSONS = [
    # ---------------- Chapter I: the varieties of major and minor ----------------
    L(ch=1, n=1, title='Trưởng hoà thanh', mode='maj', keys='C', variant='harm', targets=[(5, -1)],
      topics=['Trưởng hoà thanh', 'Bậc VI hạ', '2 tăng và 7 giảm', 'Mô tiến', 'Hợp âm bảy bậc VII'],
      allow=['A2', 'd7'], ivs=['A2', 'd7'], pool=HARM_MAJ,
      prog=[['VII7', 'T'], ['S', 'VII7', 'T'], ['T', 's', 'VII7', 'T']],
      text='''Trưởng hoà thanh khác trưởng tự nhiên ở đúng một bậc: **bậc VI hạ nửa cung** (ở Đô trưởng là La♭). Bậc này nằm sát bậc V nên bị bậc V hút mạnh — hát La♭ là phải nghe trước được Sol mà nó đi về. Giữa bậc VI hạ và bậc VII xuất hiện quãng **2 tăng** (La♭ – Si), đảo lại là **7 giảm** (Si – La♭): hai quãng đặc trưng nhất của điều thức này.

Bậc VI hạ biến hợp âm IV thành hợp âm thứ (Fa – La♭ – Đô, ký hiệu s: hạ át "thứ" trong giọng trưởng) và biến hợp âm bảy bậc VII thành **hợp âm bảy giảm** (Si – Rê – Fa – La♭). Cả hai mang màu u tối, rất hay gặp trong âm nhạc thế kỷ XIX.

**Cách hát.** Bậc VI hạ là nửa cung *hẹp* phía trên bậc V: hát như một nốt "dựa" xuống Sol. Quãng 2 tăng La♭ – Si phải hát *rộng* (dù trên phím đàn nó trùng một quãng 3 thứ): La♭ kéo xuống, Si kéo lên, hai nốt đẩy nhau ra. Khi đọc hợp âm bảy giảm, nghe trước âm chủ mà nó giải quyết về.'''),
    L(ch=1, n=2, title='Trưởng giai điệu', mode='maj', keys='C', variant='mel', targets=[(6, -1), (5, -1)],
      topics=['Trưởng giai điệu', 'Bậc VI và VII hạ', '4 tăng và 5 giảm', 'Mô tiến', 'Hợp âm bảy bậc II'],
      allow=['A4', 'd5'], ivs=['A4', 'd5'], pool=MEL_MAJ,
      prog=[['IIø7', 'D7', 'T'], ['T', 'IIø7', 'K64', 'D7', 'T'], ['T', 'bVII', 's', 'T']],
      text='''Trưởng giai điệu đi lên như trưởng tự nhiên, còn khi đi xuống thì **hạ bậc VII và bậc VI** (ở Đô trưởng: Đô – Si♭ – La♭ – Sol). Bốn nốt trên cùng của âm giai đi xuống vì thế giống hệt Đô thứ tự nhiên — một "góc thứ" trong giọng trưởng.

Hai bậc hạ đều có hướng đi xuống: Si♭ về La♭, La♭ về Sol. Trong điều thức này xuất hiện cặp quãng **4 tăng – 5 giảm** mới (ví dụ Si♭ – Mi và Mi – Si♭), và hợp âm bảy bậc II trở thành **hợp âm bảy nửa giảm** (Rê – Fa – La♭ – Đô), một hợp âm hạ át rất mềm trước át.

**Cách hát.** Khi đọc đoạn đi xuống, hãy nghĩ trước Đô thứ: Đô – Si♭ – La♭ – Sol là bốn nốt cuối của Đô thứ tự nhiên. Si♭ ở đây không kéo lên Đô như cảm âm mà trượt xuống — hát hơi thấp, thả lỏng.'''),
    L(ch=1, n=3, title='Kết hợp ba dạng trưởng', mode='maj', keys='C', variant='mix', targets=[(5, -1), (6, -1)],
      topics=['Ba dạng trưởng nối tiếp nhau', '5 tăng và 4 giảm', 'Mô tiến', 'Hợp âm chín át'],
      allow=['A2', 'd7', 'A5', 'd4'], ivs=['A5', 'd4'], pool={'half': HARM_MAJ['half'] + MEL_MAJ['half'], 'full': HARM_MAJ['full'] + MEL_MAJ['full']},
      prog=[['D9', 'T'], ['D9b', 'T'], ['T', 'S', 'D9', 'T']],
      text='''Bài này ghép cả ba dạng trưởng — tự nhiên, hoà thanh, giai điệu — trong cùng một giai điệu: một câu có thể dùng La, câu sau dùng La♭, đoạn đi xuống lại thêm Si♭. Vì thế người đọc phải **xác định dạng trưởng theo từng câu**, trước khi hát.

Trưởng hoà thanh còn có cặp **4 giảm – 5 tăng** giữa bậc III và bậc VI hạ: Mi – La♭ (Mi ở dưới) là 4 giảm, La♭ – Mi (La♭ ở dưới) là 5 tăng. Bậc III đứng yên, bậc VI hạ đi xuống Sol: 4 giảm Mi – La♭ về 3 thứ Mi – Sol, 5 tăng La♭ – Mi về 6 trưởng Sol – Mi.

Hợp âm chín át (Sol – Si – Rê – Fa – La) có hai dạng: nốt chín trưởng (La) trong trưởng tự nhiên và nốt chín thứ (La♭) trong trưởng hoà thanh. Hát rải lên rồi giải quyết về chủ, nghe rõ hai màu khác nhau.'''),
    L(ch=1, n=4, title='Ba dạng thứ', mode='min', keys='C', variant='mix', targets=[(6, 1), (5, 1), (6, 0)],
      topics=['Thứ tự nhiên, hoà thanh, giai điệu', 'Các quãng tăng, giảm của thứ hoà thanh', 'Mô tiến', 'Hợp âm bảy bậc VII và bậc II trong giọng thứ'],
      allow=['A2', 'd7', 'A5', 'd4', 'A4', 'd5'], ivs=['A2', 'd7', 'A5', 'd4', 'A4', 'd5'], pool=MINOR3,
      prog=[['VII7', 't'], ['IIø7', 'D7', 't'], ['t', 's', 'VII7', 't']],
      text='''Giọng thứ có ba dạng: **tự nhiên** (bậc VII cách âm chủ một cung, không có cảm âm), **hoà thanh** (nâng bậc VII thành cảm âm) và **giai điệu** (đi lên nâng cả bậc VI và VII, đi xuống trở lại tự nhiên). Trong một giai điệu thật, ba dạng thường xen nhau: hợp âm át (Sol – Si – Rê ở Đô thứ) đòi Si♮, hợp âm thứ bậc V và bậc VII tự nhiên dùng Si♭, còn câu chạy lên âm chủ thường đi La♮ – Si♮ – Đô.

Thứ hoà thanh có ba cặp quãng đặc trưng: **2 tăng – 7 giảm** (La♭ – Si), **5 tăng – 4 giảm** (Mi♭ – Si), **4 tăng – 5 giảm** (Fa – Si và La♭ – Rê). Bài tập IV cho hát cả ba cặp, mỗi quãng kèm cách giải quyết.

**Cách hát.** Cảm âm nâng (Si♮) hát cao, sát âm chủ; bậc VII tự nhiên (Si♭) hát thấp và hướng xuống La♭. Bậc VI nâng (La♮) chỉ dùng khi đi lên Si♮ – Đô.'''),
    L(ch=1, n=5, title='Trưởng và thứ cùng tên (từ trưởng sang thứ)', mode='maj', keys='C', variant='harm', kind='parallel', targets=[(2, 0)],
      topics=['Đặt cạnh nhau hai giọng cùng tên: Đô trưởng – Đô thứ', 'Giải quyết quãng tăng, giảm trong hai giọng cùng tên', 'Mô tiến', 'Giải quyết hợp âm bảy át trong hai giọng cùng tên'],
      allow=['A2', 'd7', 'A4', 'd5'], ivs=['A4', 'd5'],
      prog=[['D7', 'T'], ['D7', 't'], ['T', 'S', 'D7', 'T']],
      text='''Hai giọng **cùng tên** (cùng âm chủ, khác điều thức: Đô trưởng và Đô thứ) dùng chung hợp âm át. Cho nên một hợp âm bảy át Sol – Si – Rê – Fa có hai cách giải quyết: về Đô – Mi – Sol hoặc về Đô – Mi♭ – Sol. Đây là cách chuyển điều thức đơn giản nhất và rất hay gặp (Schubert đặc biệt thích đổi trưởng – thứ ngay trong một câu).

Bài này luyện phản xạ: hát một câu trong Đô trưởng, sang câu sau **cùng âm chủ** nhưng bậc III, VI (và VII tự nhiên) hạ xuống. Quãng 4 tăng Fa – Si trong cả hai giọng đều về Mi – Đô / Mi♭ – Đô: chỉ đổi màu bậc III.

**Cách hát.** Giữ nguyên cảm giác âm chủ Đô; trước câu thứ, hát thầm Đô – Mi♭ – Sol để "đổi màu" tai. Bậc III thứ (Mi♭) nằm thấp hơn Mi một nửa cung — đừng để giọng trượt lại Mi.'''),
    L(ch=1, n=6, title='Thứ và trưởng cùng tên (từ thứ sang trưởng)', mode='min', keys='C', variant='harm', kind='parallel', targets=[(2, 1)],
      topics=['Đặt cạnh nhau hai giọng cùng tên: Đô thứ – Đô trưởng', 'Giải quyết quãng 2 trưởng và 7 thứ', 'Mô tiến', 'Hợp âm chín át và giải quyết trong hai giọng cùng tên'],
      allow=['A2', 'd7'], ivs=['M2', 'm7'],
      prog=[['D9b', 't'], ['D9', 'T'], ['t', 's', 'D7', 'T']],
      text='''Ngược với bài 5: giai điệu mở ở Đô thứ rồi sáng ra Đô trưởng — lối kết "Picardy" (kết trưởng sau cả bài thứ) của nhạc Baroque và cũng là chuyển động quen thuộc của nhạc lãng mạn.

Bài tập quãng nói về **2 trưởng và 7 thứ** (Sol – La / Sol – Fa trên át): trong hợp âm bảy át, quãng 7 thứ Sol – Fa đi về 3 (Đô – Mi hay Đô – Mi♭), quãng 2 trưởng Fa – Sol (đảo của nó) đi về 3 hoặc đồng âm. Hợp âm chín át có hai dạng tuỳ giọng: nốt chín thứ (La♭) cho Đô thứ, nốt chín trưởng (La) cho Đô trưởng.

**Cách hát.** Ở chỗ đổi sang trưởng, hát thầm Đô – Mi – Sol; Mi♮ sáng và cao, nằm ngay dưới Fa.'''),
    L(ch=1, n=7, title='Trưởng hoà thanh ở nhiều giọng', mode='maj', keys='all', variant='harm', targets=[(5, -1)],
      topics=['Trưởng hoà thanh', 'Nhiều giọng khác nhau', '2 tăng và 7 giảm', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7'], ivs=['A2', 'd7'], pool=HARM_MAJ,
      prog=[['T', 's', 'VII7', 'T'], ['T', 'IIø7', 'D7', 'T'], ['T', 'VI', 's', 'K64', 'D7', 'T']],
      text='''Nội dung của bài 1 — bậc VI hạ, cặp quãng 2 tăng / 7 giảm, hợp âm bảy giảm — nay đọc ở **nhiều giọng**. Các giọng được xếp theo vòng đồng tâm quanh Đô: Đô, Rê♭, Si, Rê, Si♭, Mi♭, La… (lên và xuống từng nửa cung), để tầm hát luôn vừa giọng.

Ở giọng có nhiều dấu hoá, bậc VI hạ có thể là một nốt **bình** (ví dụ Rê♮ trong Fa♯ trưởng) hay một nốt **giáng kép**: tên nốt đổi, chức năng giữ nguyên. Trước khi hát, gọi tên bậc trước rồi mới tới tên nốt: "bậc VI hạ — Rê♮".

Chuỗi hợp âm của bài là chuỗi bốn bè rút về một bè (hát rải từ bè trầm lên), mỗi hợp âm ghi chức năng bên dưới.'''),
    L(ch=1, n=8, title='Trưởng giai điệu ở nhiều giọng', mode='maj', keys='all', variant='mel', targets=[(6, -1), (5, -1)],
      topics=['Trưởng giai điệu', 'Nhiều giọng khác nhau', '4 tăng và 5 giảm', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A4', 'd5'], ivs=['A4', 'd5'], pool=MEL_MAJ,
      prog=[['T', 'bVII', 's', 'T'], ['T', 'IIø7', 'K64', 'D7', 'T'], ['T', 'bVI', 's', 'D7', 'T']],
      text='''Nhắc lại bài 2 ở nhiều giọng: đoạn đi xuống hạ bậc VII và VI. Lưu ý hai hợp âm "mượn" từ giọng thứ cùng tên mà dạng trưởng này tạo ra: **♭VII** (ở Đô trưởng: Si♭ – Rê – Fa) và **♭VI** (La♭ – Đô – Mi♭); chúng thường đi xuống hạ át thứ rồi về chủ.

Khi giọng đổi, hãy tìm ngay hai nốt hạ trên khuông trước khi đọc: đó là hai chỗ dễ hát sai nhất.'''),
    L(ch=1, n=9, title='Ba dạng trưởng ở nhiều giọng', mode='maj', keys='all', variant='mix', targets=[(5, -1), (6, -1)],
      topics=['Ba dạng trưởng nối tiếp nhau', 'Nhiều giọng khác nhau', '5 tăng và 4 giảm', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'A5', 'd4'], ivs=['A5', 'd4'], pool={'half': HARM_MAJ['half'] + MEL_MAJ['half'], 'full': HARM_MAJ['full'] + MEL_MAJ['full']},
      prog=[['T', 'S', 'D9', 'T'], ['T', 's', 'D9b', 'T'], ['T', 'bVII', 's', 'D7', 'T']],
      text='''Như bài 3, ở nhiều giọng: mỗi câu có thể là một dạng trưởng khác. Cách làm chắc chắn: đọc lướt cả bài, **đánh dấu bằng bút chì** chỗ nào bậc VI, VII bị hạ; rồi tìm hợp âm đứng sau mỗi chỗ đó (thường là hạ át thứ hay át) để biết nốt hạ đi về đâu.'''),
    L(ch=1, n=10, title='Ba dạng thứ ở nhiều giọng', mode='min', keys='all', variant='mix', targets=[(6, 1), (5, 1), (6, 0)],
      topics=['Ba dạng thứ', 'Nhiều giọng khác nhau', 'Các quãng tăng, giảm của thứ hoà thanh', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'A5', 'd4', 'A4', 'd5'], ivs=['A2', 'd7', 'A5', 'd4'], pool=MINOR3,
      prog=[['t', 'S', 'D7', 't'], ['t', 'VII', 'III', 's', 'D7', 't'], ['t', 'VI', 'IIø7', 'VII7', 't']],
      text='''Nhắc lại bài 4 ở nhiều giọng thứ. Chú ý chuỗi **t – VII – III** của thứ tự nhiên (ở La thứ: La – Sol – Đô): bậc VII không nâng ở đây vì nó là nốt gốc của một hợp âm trưởng, không phải cảm âm. Ngay sau đó, khi giai điệu về át, bậc VII lại được nâng — hai tên của cùng một bậc nằm rất gần nhau, phải đọc tỉnh táo.'''),
    L(ch=1, n=11, title='Trưởng – thứ cùng tên ở nhiều giọng', mode='maj', keys='all', variant='harm', kind='parallel', targets=[(2, 0)],
      topics=['Trưởng và thứ cùng tên', 'Nhiều giọng khác nhau', 'Quãng tăng, giảm trong hai giọng cùng tên', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'A4', 'd5'], ivs=['A4', 'd5', 'A2', 'd7'],
      prog=[['T', 'S', 'D7', 't'], ['t', 's', 'D7', 'T'], ['T', 's', 'VII7', 't']],
      text='''Nhắc lại bài 5 ở nhiều giọng: từ trưởng sang thứ cùng tên qua hợp âm át chung. Ở giọng nhiều dấu, đổi sang thứ cùng tên nghĩa là **thêm ba dấu giáng** (hoặc bớt ba dấu thăng) — ví dụ Mi trưởng (4 thăng) sang Mi thứ (1 thăng): Sol♯ → Sol, Đô♯ → Đô, Rê♯ (cảm âm) giữ nguyên.'''),
    L(ch=1, n=12, title='Thứ – trưởng cùng tên ở nhiều giọng', mode='min', keys='all', variant='harm', kind='parallel', targets=[(2, 1)],
      topics=['Thứ và trưởng cùng tên', 'Nhiều giọng khác nhau', 'Giải quyết 2 trưởng và 7 thứ', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'A4', 'd5'], ivs=['M2', 'm7'],
      prog=[['t', 's', 'D9b', 't'], ['t', 'VI', 'D9', 'T'], ['t', 'D7', 'T']],
      text='''Nhắc lại bài 6 ở nhiều giọng: câu mở ở giọng thứ, câu sau sáng ra trưởng cùng tên. Bậc III nâng là nốt quyết định: nó vừa là nốt của hợp âm chủ trưởng vừa là "cảm âm" kéo lên bậc IV — hát sáng và chắc.'''),

    # ---------------- Chapter II: altered notes next to the main degrees ----------------
    L(ch=2, n=1, title='Bậc IV nâng trong trưởng tự nhiên', mode='maj', keys='all', variant='nat', targets=[(3, 1)],
      topics=['Bậc IV nâng của trưởng tự nhiên', '4 tăng và 5 giảm', 'Mô tiến', 'Chuỗi hợp âm có át của át'],
      allow=['A4', 'd5'], ivs=['A4', 'd5'], extra=[(3, 1)], pool=DD_MAJ,
      prog=[['T', 'DD7', 'D7', 'T'], ['T', 'S', 'DD', 'K64', 'D7', 'T'], ['T', 'II', 'DDVII7', 'D', 'T']],
      text='''Chương II đưa vào các **nốt biến âm** — bậc chính được nâng hay hạ nửa cung để kéo mạnh hơn về một bậc ổn định bên cạnh. Theo cách học của giáo trình, một nốt biến âm luôn được nghe *từ* bậc nó đi tới: bậc IV nâng (ở Đô trưởng: Fa♯) là "cảm âm của bậc V".

Bậc IV nâng xuất hiện tự nhiên nhất trong **hợp âm át của át** (DD: Rê – Fa♯ – La, DD₇: Rê – Fa♯ – La – Đô, DDVII₇: Fa♯ – La – Đô – Mi♭) — hợp âm át tạm thời của bậc V, đứng ngay trước át hay trước hợp âm bốn – sáu kết. Với bậc I, nó tạo **4 tăng** (Đô – Fa♯) và **5 giảm** (Fa♯ – Đô).

**Cách hát.** Bậc IV nâng hát *cao*, sát Sol — một nửa cung hẹp đi lên. Đừng nghĩ nó từ Fa♮ ("Fa rồi thăng lên"), mà nghe Sol trước rồi hát nốt ngay dưới. Khi nhảy tới Fa♯ từ xa (ví dụ từ Rê hay Đô), cũng nhắm vào Sol.'''),
    L(ch=2, n=2, title='Bậc IV nâng trong các dạng trưởng khác', mode='maj', keys='all', variant='harm', targets=[(3, 1)],
      topics=['Bậc IV nâng trong trưởng hoà thanh và giai điệu', '6 tăng và 3 giảm', 'Mô tiến', 'Chuỗi hợp âm có át của át'],
      allow=['A6', 'd3', 'A2', 'd7', 'A4', 'd5'], ivs=['A6', 'd3'], extra=[(3, 1)], pool={'half': DD_MAJ['half'] + HARM_MAJ['half'], 'full': DD_MAJ['full'] + HARM_MAJ['full']},
      prog=[['T', 's', 'DDVII7', 'D', 'T'], ['T', 'DDVII7', 'K64', 'D7', 'T'], ['T', 'IIø7', 'DD7', 'D7', 'T']],
      text='''Khi bậc IV nâng gặp bậc VI hạ (trưởng hoà thanh), giữa chúng có cặp quãng **6 tăng** (La♭ – Fa♯) và **3 giảm** (Fa♯ – La♭). Cả hai cùng thu về một nốt: hai đầu quãng kéo nhau về bậc V (La♭ xuống Sol, Fa♯ lên Sol) — nên 6 tăng giải quyết vào quãng 8 Sol – Sol, 3 giảm vào đồng âm.

Đây chính là "lõi" của các **hợp âm sáu tăng** sẽ học kỹ ở phần hoà âm. Ở đây hai nốt xuất hiện trong hợp âm bảy giảm của át của át (Fa♯ – La – Đô – Mi♭) và trong hạ át thứ.

**Cách hát.** Quãng 6 tăng nghe như 7 thứ trên phím đàn nhưng phải hát *rộng hơn*: La♭ hạ thấp, Fa♯ nâng cao — cả hai đều nhắm về Sol.'''),
    L(ch=2, n=3, title='Bậc IV nâng trong giọng thứ', mode='min', keys='all', variant='harm', targets=[(3, 1)],
      topics=['Bậc IV nâng trong giọng thứ', '2 tăng và 7 giảm', 'Mô tiến', 'Chuỗi hợp âm có át của át'],
      allow=['A2', 'd7', 'A4', 'd5'], ivs=['A2', 'd7'], extra=[(3, 1)], pool=DD_MIN,
      prog=[['t', 'DD7', 'D7', 't'], ['t', 's', 'DDVII7', 'D', 't'], ['t', 'VI', 'DD', 'K64', 'D7', 't']],
      text='''Ở giọng thứ, bậc IV nâng (ở La thứ: Rê♯) tạo với bậc III quãng **2 tăng** (Đô – Rê♯) và **7 giảm** (Rê♯ – Đô). Khác với 2 tăng của thứ hoà thanh (Fa – Sol♯, ở phía trên), cặp này nằm ở *giữa* âm giai: bậc III đứng yên, Rê♯ lên Mi — 2 tăng về 3 trưởng Đô – Mi, 7 giảm về 6 thứ Mi – Đô.

Thứ có bậc IV nâng còn là âm giai đặc trưng của nhiều nền dân ca (thứ "Hungary", thứ "Gipsy" khi đi cùng bậc VII nâng) — chương này không đi sâu vào các điều thức dân gian, nhưng nốt nâng ấy là cùng một nốt.

Hợp âm át của át ở giọng thứ là hợp âm trưởng trên bậc II (Si – Rê♯ – Fa♯), bậc VI cũng nâng theo (Fa♯).'''),
    L(ch=2, n=4, title='Bậc IV nâng trong trưởng và thứ cùng tên', mode='maj', keys='all', variant='harm', kind='parallel', targets=[(3, 1)],
      topics=['Bậc IV nâng trong hai giọng cùng tên', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'A4', 'd5', 'A6', 'd3'], ivs=['A4', 'd5', 'A2', 'd7'], extra=[(3, 1)], pool=DD_MAJ,
      prog=[['T', 'DD7', 'D7', 't'], ['t', 'DD7', 'K64', 'D7', 'T'], ['T', 'DDVII7', 'D', 't']],
      text='''Bậc IV nâng là chung cho trưởng và thứ cùng tên (Fa♯ trong Đô trưởng và Đô thứ), vì cả hai giọng chung hợp âm át và át của át. Bài này cho hai giọng nối nhau: so sánh 4 tăng Đô – Fa♯ (trưởng) với 2 tăng Mi♭ – Fa♯ (thứ) — cùng nốt Fa♯ nhưng "quanh nó" là hai màu khác nhau.'''),
    L(ch=2, n=5, title='Bậc IV hạ trong giọng thứ', mode='min', keys='all', variant='harm', targets=[(3, -1)], alters=[(3, -1)],
      topics=['Bậc IV hạ trong giọng thứ', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'd4', 'A5'], ivs=['d4', 'A5'], extra=[(3, -1)],
      prog=[['t', 's', 'D7', 't'], ['t', 'VI', 'D', 't']],
      text='''Bậc IV hạ trong giọng thứ (ở Đô thứ: Fa♭; ở La thứ: Rê♭) là nốt biến âm **đi xuống bậc III**. Nó tạo với âm chủ quãng **4 giảm** (La – Rê♭) và đảo lại **5 tăng** (Rê♭ – La), nghe rất "u ám". Điều thức thứ có bậc IV hạ (đôi khi cả bậc II hạ) gắn với tiếng nói riêng của Shostakovich, và cũng có trong dân ca một số dân tộc.

Nốt này thường đứng ở phách yếu, đi xuống bậc III; giai điệu cũng có thể đi xuống từ bậc V qua nó (Mi – Rê♭ – Đô: một quãng 2 tăng đi xuống rồi một nửa cung).

**Cách hát.** Hát bậc IV hạ *thấp*, dựa sát xuống bậc III; giữ bậc III làm điểm tựa trong đầu trước khi hát.'''),
    L(ch=2, n=6, title='Bậc II nâng và bậc II hạ trong trưởng tự nhiên', mode='maj', keys='all', variant='nat', targets=[(1, 1), (1, -1)], alters=[(1, 1), (1, -1)],
      topics=['Bậc II nâng và bậc II hạ trong trưởng tự nhiên', '2 tăng', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7'], ivs=['A2', 'd7'], extra=[(1, 1), (1, -1)],
      prog=[['T', 'S', 'D7', 'T'], ['T', 'VI', 'II', 'D7', 'T']],
      text='''Bậc II có hai nốt biến âm với hai hướng ngược nhau: **bậc II nâng** (Rê♯ ở Đô trưởng) đi *lên* bậc III, **bậc II hạ** (Rê♭) đi *xuống* bậc I. Cả hai kề hai bậc ổn định nhất của điều thức nên rất dễ nghe nếu bạn nghĩ tới nốt đích trước.

Với bậc I, bậc II nâng tạo **2 tăng** (Đô – Rê♯, giải quyết vào 3 trưởng Đô – Mi); bậc II hạ với bậc III cũng tạo 2 tăng (Rê♭ – Mi, giải quyết vào Đô – Mi). Đảo lại là các quãng 7 giảm.

**Cách hát.** Rê♯ hát sát Mi, Rê♭ hát sát Đô. Hai nốt này trùng nhau trên phím đàn nhưng **không trùng nhau khi hát**: đó là điều cốt lõi của cả chương — nửa cung cromatic (Rê – Rê♯) hát rộng, nửa cung diatonic (Rê♯ – Mi) hát hẹp.'''),
    L(ch=2, n=7, title='Bậc II nâng và bậc II hạ trong các dạng trưởng khác', mode='maj', keys='all', variant='harm', targets=[(1, 1), (1, -1)], alters=[(1, 1), (1, -1)],
      topics=['Bậc II nâng và bậc II hạ trong trưởng hoà thanh và giai điệu', '4 tăng kép và 5 giảm kép', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'AA4', 'dd5', 'A4', 'd5'], ivs=['AA4', 'dd5'], extra=[(1, 1), (1, -1)],
      pool=HARM_MAJ,
      prog=[['T', 's', 'VII7', 'T'], ['T', 'N', 'K64', 'D7', 'T']],
      text='''Khi bậc II nâng gặp bậc VI hạ (trưởng hoà thanh) ta có những quãng hiếm: **4 tăng kép** (La♭ – Rê♯: hai nốt cùng kéo ra xa nhau, giải quyết vào 6 Sol – Mi) và đảo của nó **5 giảm kép** (Rê♯ – La♭, giải quyết vào 3 Mi – Sol). Trên phím đàn chúng trùng quãng 5 đúng và 4 đúng — vì thế tai rất dễ "nghe nhầm" thành quãng đúng; phải nghĩ theo hướng giải quyết.

Bậc II hạ trong trưởng hoà thanh cũng là nốt gốc của **hợp âm Napoli** (Rê♭ – Fa – La♭), hợp âm hạ át đứng trước át hay bốn – sáu kết.'''),
    L(ch=2, n=8, title='Bậc II hạ trong giọng thứ', mode='min', keys='all', variant='harm', targets=[(1, -1)],
      topics=['Bậc II hạ trong giọng thứ', '3 giảm và 6 tăng', 'Mô tiến', 'Chuỗi hợp âm có hợp âm Napoli'],
      allow=['A2', 'd7', 'd3', 'A6'], ivs=['d3', 'A6'], extra=[(1, -1)], pool=N_MIN,
      prog=[['t', 'N', 'D7', 't'], ['t', 's', 'N', 'K64', 'D7', 't'], ['t', 'VI', 'N', 'D', 't']],
      text='''Ở giọng thứ, bậc II hạ (La thứ: Si♭) là nốt gốc của **hợp âm Napoli** (Si♭ – Rê – Fa, thường ở thế sáu: N₆). Trong giai điệu nó đi xuống âm chủ, hay nhảy xuống cảm âm qua quãng **3 giảm** (từ Si♭ xuống Sol♯) — một bước nhảy kinh điển ở các câu kết giọng thứ của thế kỷ XVIII – XIX. Viết thành quãng: Sol♯ ở dưới, Si♭ ở trên là 3 giảm (giải quyết vào đồng âm La); Si♭ ở dưới, Sol♯ ở trên là **6 tăng** (giải quyết vào quãng 8 La – La).

**Cách hát.** Sau Si♭, hãy chuẩn bị nghe Sol♯ ngay: Si♭ hát thấp, Sol♯ hát cao, giữa chúng là một khoảng *nhỏ hơn* quãng 3 thứ thông thường. Kiểm tra bằng cách đánh đàn: hai nốt trùng Si♭ – La♭ trên phím, nhưng hướng giải quyết thì khác hẳn.'''),
    L(ch=2, n=9, title='Bậc II hạ trong trưởng và thứ cùng tên', mode='maj', keys='all', variant='harm', kind='parallel', targets=[(1, -1)],
      topics=['Bậc II hạ trong hai giọng cùng tên', 'Ôn các quãng biến âm', 'Mô tiến', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'd3', 'A6', 'A4', 'd5'], ivs=['d3', 'A6', 'A4', 'd5', 'A2', 'd7'], extra=[(1, -1)], pool=N_MAJ,
      prog=[['T', 'N', 'K64', 'D7', 't'], ['t', 'N', 'D7', 'T']],
      text='''Bài ôn cuối chương II: bậc II hạ và hợp âm Napoli trong cả trưởng (hoà thanh) và thứ cùng tên, cùng toàn bộ các quãng biến âm đã học. Trước khi đọc mỗi giai điệu, gạch dưới mọi nốt biến âm và ghi bên cạnh mũi tên chỉ hướng giải quyết của nó (↑ hay ↓).'''),

    # ---------------- Chapter III: chromatic neighbour and passing notes ----------------
    L(ch=3, n=1, title='Nốt thêu cromatic quanh bậc I, III, V', mode='both', keys='all', variant='nat', chromatic=True, chrom_to=(0, 2, 4), chrom_kind='aux',
      topics=['Nốt thêu cromatic quanh bậc I, III, V của trưởng và thứ', '2 thứ và 2 trưởng từ một nốt cho trước', 'Mô tiến', 'Hợp âm bảy bậc VII từ một nốt cho trước'],
      ivs=('from', ['m2', 'M2']), chord_from='VII7',
      prog=[],
      text='''Chương III không còn biến âm "có hợp âm riêng" mà là các **nốt cromatic trang trí**: nốt thêu và nốt lướt cách bậc chính nửa cung. Nguyên tắc của giáo trình: hát nốt cromatic bằng cách **dựa vào bậc diatonic** — nốt thêu là bậc chính "rung" sang nửa cung bên cạnh rồi trở về.

Bài này chỉ có nốt thêu quanh ba bậc ổn định I, III, V. Nốt thêu dưới là nốt **nâng** (ở Đô trưởng: Rê♯ quanh Mi, Fa♯ quanh Sol; quanh Đô thì đã có sẵn Si), nốt thêu trên là nốt **hạ** (La♭ quanh Sol, Rê♭ quanh Đô; quanh Mi đã có sẵn Fa).

Bài tập quãng đổi cách: hát **2 thứ, 2 trưởng từ một nốt cho trước**, đi lên và đi xuống — không dựa vào giọng nào. Đây là kỹ năng cần cho mọi chỗ chuyển giọng sau này.'''),
    L(ch=3, n=2, title='Nốt thêu cromatic quanh mọi bậc', mode='both', keys='all', variant='nat', chromatic=True, chrom_kind='aux',
      topics=['Nốt thêu cromatic quanh mọi bậc của trưởng và thứ', '3 thứ và 3 trưởng từ một nốt cho trước', 'Mô tiến', 'Hợp âm bảy bậc VII từ một nốt cho trước'],
      ivs=('from', ['m3', 'M3']), chord_from='VII7',
      prog=[],
      text='''Như bài 1, nhưng nốt thêu cromatic có thể đứng quanh **bất kỳ bậc nào**. Quanh các bậc không ổn định (II, IV, VI, VII), nốt thêu làm giai điệu "lượn" mềm mà không đổi hợp âm.

Cách nhận ra: nốt có dấu hoá bất thường, đứng giữa hai nốt giống nhau. Hát bậc chính trước trong đầu (nốt đứng hai bên), rồi mới hát nốt thêu như một nửa cung hẹp.'''),
    L(ch=3, n=3, title='Nốt lướt cromatic — nửa dưới âm giai cromatic', mode='both', keys='all', variant='nat', chromatic=True, chrom_to=(0, 1, 2, 3, 4), chrom_kind='pass', scale='low',
      topics=['Nốt lướt cromatic; bốn nốt dưới của âm giai cromatic trưởng và thứ', '4 đúng và 5 đúng từ một nốt cho trước', 'Hợp âm bảy bậc II từ một nốt cho trước'],
      ivs=('from', ['P4', 'P5']), chord_from='II7',
      prog=[],
      text='''**Nốt lướt cromatic** chia một quãng 2 trưởng thành hai nửa cung: Đô – Đô♯ – Rê, Rê – Rê♭ – Đô. Quy tắc viết: đi lên dùng nốt nâng, đi xuống dùng nốt hạ — với vài ngoại lệ để tôn trọng các bậc của giọng (xem âm giai cromatic dưới đây).

Bài này dùng nửa dưới của âm giai cromatic (bậc I tới V). **Quy tắc ghi âm giai cromatic** theo giáo trình lý thuyết Nga: ở **trưởng**, đi lên nâng mọi bậc trừ bậc VI (thay bằng bậc VII hạ), đi xuống hạ mọi bậc trừ bậc V (thay bằng bậc IV nâng); ở **thứ**, đi lên nâng mọi bậc trừ bậc I (thay bằng bậc II hạ), đi xuống ghi như trưởng cùng tên.

**Cách hát.** Âm giai cromatic hát chậm, dừng ở các bậc diatonic: mỗi nốt cromatic là đường đi tới bậc diatonic kế tiếp.'''),
    L(ch=3, n=4, title='Nốt lướt cromatic — nửa trên âm giai cromatic', mode='both', keys='all', variant='nat', chromatic=True, chrom_to=(4, 5, 6, 0), chrom_kind='pass', scale='high',
      topics=['Nốt lướt cromatic; bốn nốt trên của âm giai cromatic trưởng và thứ', '6 thứ và 6 trưởng từ một nốt cho trước', 'Hợp âm bảy át từ một nốt cho trước'],
      ivs=('from', ['m6', 'M6']), chord_from='D7',
      prog=[],
      text='''Nửa trên của âm giai cromatic (bậc V tới I) — chỗ các ngoại lệ của quy tắc ghi xuất hiện: ở trưởng, đi lên giữa bậc VI và VII dùng **bậc VII hạ** (Sol – Sol♯ – La – Si♭ – Si – Đô ở Đô trưởng), đi xuống giữa bậc V và IV dùng **bậc IV nâng** (Sol – Fa♯ – Fa).

Lý do của ngoại lệ: giữ cho tên các bậc của giọng không bị đổi (trong Đô trưởng không viết La♯ vì đã có Si♭ là bậc VII hạ quen thuộc của trưởng giai điệu; không viết Sol♭ vì bậc V là bậc chính không được hạ).'''),
    L(ch=3, n=5, title='Âm giai cromatic đầy đủ', mode='both', keys='all', variant='nat', chromatic=True, chrom_kind='both', scale='full',
      topics=['Âm giai cromatic đầy đủ của trưởng và thứ', '7 thứ và 7 trưởng từ một nốt cho trước', 'Mô tiến', 'Hợp âm bảy bậc VII và bậc II từ một nốt cho trước'],
      ivs=('from', ['m7', 'M7']), chord_from='both',
      prog=[],
      text='''Bài cuối chương III: cả âm giai cromatic, đi lên và đi xuống, và giai điệu dùng cả nốt thêu lẫn nốt lướt cromatic ở mọi bậc. Đây là trình độ của phần lớn các giai điệu lãng mạn: khung diatonic rõ ràng, phủ lên một lớp cromatic dày.

Quãng 7 từ một nốt cho trước là quãng khó nhất để hát chính xác; mẹo của các nhạc viện là nghĩ **quãng 8 trừ đi** (7 thứ = quãng 8 trừ một cung; 7 trưởng = quãng 8 trừ nửa cung) rồi kiểm tra bằng đàn.'''),

    # ---------------- Chapter IV: modulation to closely related keys ----------------
    L(ch=4, n=1, title='Từ trưởng sang giọng bậc VI', mode='maj', keys='all', kind='mod', rel=(5, 'min'), variant='nat',
      topics=['Chuyển giọng sang giọng bậc VI (giọng thứ song song)', 'Mô tiến', 'Chuỗi hợp âm chuyển giọng'],
      allow=['A2', 'd7'],
      text='''Chương IV là **chuyển giọng sang các giọng họ hàng bậc một** — các giọng khác giọng gốc không quá một dấu hoá. Giáo trình không có mục riêng cho *chuyển hướng* (ghé qua một giọng khác trong chốc lát): chuyển hướng được coi là một dạng chuyển giọng, và người đọc phải tự tìm ra mọi chỗ chuyển hướng khi phân tích bài.

Kỹ năng then chốt là **xác định thời điểm chuyển** và **đổi điểm tựa của tai**: cùng một nốt, trước chỗ chuyển là bậc này, sau chỗ chuyển là bậc khác. Từ Đô trưởng sang La thứ, nốt Đô từ bậc I thành bậc III; nốt mới Sol♯ (cảm âm của La thứ) báo hiệu giọng mới.

Giai điệu chuyển giọng của sách đi qua **hợp âm chung** (một hợp âm có mặt trong cả hai giọng, ví dụ Rê – Fa – La: bậc II của Đô trưởng = bậc IV của La thứ), rồi đến át và chủ của giọng mới. Ở bài 16 ô, giai điệu còn trở về giọng gốc.

**Cách hát.** Ngay sau hợp âm chung, hát thầm câu mẫu kết của giọng mới (ví dụ Đô – Si – La hay Mi – Sol♯ – La) để "đặt lại" âm chủ trong đầu.'''),
    L(ch=4, n=2, title='Từ trưởng sang giọng bậc V', mode='maj', keys='all', kind='mod', rel=(4, 'maj'), variant='nat',
      topics=['Chuyển giọng sang giọng bậc V (giọng át)', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Chuyển sang giọng át là chuyển giọng phổ biến nhất của âm nhạc cổ điển (phần thứ hai của trình bày sonata ở giọng trưởng thường ở giọng này). Dấu hiệu: **bậc IV nâng** (ở Đô trưởng: Fa♯) — trở thành cảm âm của giọng mới.

Sau chỗ chuyển, hãy nghe Sol như âm chủ: Rê là bậc V mới, Fa♯ kéo lên Sol. Một lỗi thường gặp là vẫn nghe Fa♯ như "biến âm" và hát hơi thấp; trong giọng mới nó là cảm âm thực thụ, phải hát cao.'''),
    L(ch=4, n=3, title='Từ trưởng sang giọng bậc III', mode='maj', keys='all', kind='mod', rel=(2, 'min'), variant='nat',
      topics=['Chuyển giọng sang giọng bậc III', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Giọng bậc III của trưởng là một giọng thứ (Đô trưởng → Mi thứ); nốt mới là Rê♯ (cảm âm) và đôi khi Đô♯ (bậc VI nâng của Mi thứ giai điệu). Hợp âm chung hay dùng: Mi – Sol – Si (bậc III của Đô = bậc I của Mi thứ) hay La – Đô – Mi (bậc VI = bậc IV).

Chỗ khó: Rê♯ nằm ngay dưới Mi, rất gần Rê♮ của giọng gốc vừa hát xong. Nghĩ Rê♯ từ Mi (nửa cung hẹp đi lên).'''),
    L(ch=4, n=4, title='Từ trưởng sang giọng bậc IV', mode='maj', keys='all', kind='mod', rel=(3, 'maj'), variant='nat',
      topics=['Chuyển giọng sang giọng bậc IV (giọng hạ át)', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Giọng hạ át (Đô trưởng → Fa trưởng) được báo bằng **bậc VII hạ** (Si♭) — trở thành bậc IV của giọng mới và đi xuống La. Vì hợp âm chủ của giọng gốc chính là át của giọng mới, chỉ cần thêm Si♭ (Đô – Mi – Sol – Si♭ = át bảy của Fa) là đã sang giọng.

Cảm giác của chuyển giọng này là "dịu xuống", ngược với "sáng lên" của giọng át. Khi hát, Si♭ hạ thấp, Mi kéo lên Fa.'''),
    L(ch=4, n=5, title='Từ trưởng sang giọng bậc II', mode='maj', keys='all', kind='mod', rel=(1, 'min'), variant='nat',
      topics=['Chuyển giọng sang giọng bậc II', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Giọng bậc II của trưởng là một giọng thứ (Đô trưởng → Rê thứ), cùng hoá biểu với giọng hạ át. Nốt mới: Đô♯ (cảm âm của Rê thứ) và Si♭ (bậc VI). Hai nốt này cách nhau quãng **2 tăng** khi đứng cạnh nhau (Si♭ – Đô♯) — chính quãng đặc trưng của thứ hoà thanh đã học ở chương I.'''),
    L(ch=4, n=6, title='Từ trưởng sang giọng hạ át thứ', mode='maj', keys='all', kind='mod', rel=(3, 'min'), variant='harm', extra=['s'],
      topics=['Chuyển giọng sang giọng bậc IV thứ (hạ át thứ)', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      allow=['A2', 'd7'],
      text='''Giọng hạ át thứ (Đô trưởng → Fa thứ) không còn là họ hàng diatonic thuần, nhưng rất gần nhờ **trưởng hoà thanh**: hạ át thứ Fa – La♭ – Đô của Đô trưởng hoà thanh chính là hợp âm chủ của Fa thứ. Giai điệu đi qua hợp âm này (hợp âm chung) rồi đến át của Fa thứ (Đô – Mi – Sol – Si♭).

Ba nốt mới cùng xuất hiện: La♭, Si♭, Rê♭. Hãy để ý cảm âm Mi của giọng mới: nó cũng là bậc III của giọng cũ, nên tai dễ nhận nhưng phải đổi chức năng — từ nốt ổn định thành nốt kéo lên.'''),
    L(ch=4, n=7, title='Từ thứ sang giọng bậc III', mode='min', keys='all', kind='mod', rel=(2, 'maj'), variant='harm',
      topics=['Chuyển giọng sang giọng bậc III (giọng trưởng song song)', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Phần thứ hai của chương IV đi từ **giọng thứ**. Giọng bậc III là trưởng song song (La thứ → Đô trưởng): cùng hoá biểu, nên giọng mới chỉ lộ ra khi **cảm âm Sol♯ biến mất** và Sol♮ trở thành bậc V vững chắc. Hợp âm chung: Fa – La – Đô (bậc VI = bậc IV), Rê – Fa – La (bậc IV = bậc II).

Đây là chuyển giọng "không có dấu hoá mới", vì vậy khó nhận nhất khi đọc: phải phân tích hoà âm và câu kết, chứ không thể chỉ nhìn dấu hoá.'''),
    L(ch=4, n=8, title='Từ thứ sang giọng át thứ', mode='min', keys='all', kind='mod', rel=(4, 'min'), variant='harm',
      topics=['Chuyển giọng sang giọng bậc V thứ', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Từ La thứ sang Mi thứ: nốt mới là Fa♯ (bậc II của giọng mới) và Rê♯ (cảm âm). Hợp âm chung hay dùng là La – Đô – Mi (bậc I = bậc IV) hay Đô – Mi – Sol (bậc III = bậc VI).

Lưu ý Sol♯ của giọng gốc và Sol♮ của giọng mới: trong Mi thứ, Sol là bậc III — hát chắc, không còn "kéo lên La".'''),
    L(ch=4, n=9, title='Từ thứ sang giọng bậc VII', mode='min', keys='all', kind='mod', rel=(6, 'maj'), variant='nat',
      topics=['Chuyển giọng sang giọng bậc VII', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Giọng bậc VII của thứ là một giọng trưởng xây trên bậc VII **tự nhiên** (La thứ → Sol trưởng). Nó chỉ dùng được khi giọng gốc ở dạng tự nhiên — Sol♮ chứ không phải Sol♯. Nốt mới: Fa♯ (cảm âm của Sol trưởng).

Chuyển giọng này nghe "thoáng" và hơi cổ, hay gặp trong dân ca và nhạc Nga.'''),
    L(ch=4, n=10, title='Từ thứ sang giọng hạ át thứ', mode='min', keys='all', kind='mod', rel=(3, 'min'), variant='harm',
      topics=['Chuyển giọng sang giọng bậc IV', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''La thứ → Rê thứ: nốt mới là Si♭ (bậc VI của giọng mới) và Đô♯ (cảm âm). Như chuyển sang hạ át ở giọng trưởng, hợp âm chủ của giọng gốc trở thành át của giọng mới khi thêm nốt Sol (La – Đô♯ – Mi – Sol) — ở giọng thứ, phải nâng Đô thành Đô♯.'''),
    L(ch=4, n=11, title='Từ thứ sang giọng bậc VI', mode='min', keys='all', kind='mod', rel=(5, 'maj'), variant='harm',
      topics=['Chuyển giọng sang giọng bậc VI', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''La thứ → Fa trưởng: nốt mới Si♭ (bậc IV của Fa trưởng). Giọng bậc VI rất gần: hợp âm chủ La – Đô – Mi chính là bậc III của Fa trưởng, Rê – Fa – La là bậc VI.

Chú ý: Mi (bậc V của giọng gốc) thành **cảm âm** của Fa trưởng — phải hát cao hơn, sát Fa.'''),
    L(ch=4, n=12, title='Từ thứ sang giọng át trưởng', mode='min', keys='all', kind='mod', rel=(4, 'maj'), variant='harm',
      topics=['Chuyển giọng sang giọng bậc V trưởng', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''La thứ → Mi trưởng: hợp âm át của giọng gốc (Mi – Sol♯ – Si) trở thành **hợp âm chủ** của giọng mới. Giọng mới có bốn dấu thăng, nhưng sự chuyển rất tự nhiên vì hợp âm chung chính là át.

Hai giọng cách nhau bốn dấu hoá nhưng vẫn được xếp vào họ hàng bậc một: lý do là hợp âm át chung (theo cùng lối ấy, giọng trưởng có họ hàng gần là giọng hạ át thứ — bài 6).'''),

    # ---------------- Chapter V: modulation to more distant keys ----------------
    L(ch=5, n=1, title='Chuyển điều thức: sang trưởng cùng tên', mode='min', keys='all', kind='parallel', variant='harm', targets=[(2, 1)],
      topics=['Chuyển điều thức sang giọng trưởng cùng tên', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      allow=['A2', 'd7'],
      text='''Chương V học chuyển giọng sang các giọng **xa hơn**: thay đổi hai, ba dấu hoá trở lên, rồi chuyển giọng trùng âm. Mở đầu là **chuyển điều thức**: giữ âm chủ, đổi trưởng – thứ — đã làm quen ở chương I, nay là một phần của kế hoạch chuyển giọng: câu kết ở giọng mới phải được củng cố bằng một câu nữa.

Giọng thứ → trưởng cùng tên: ba nốt đổi cùng lúc (bậc III, VI, VII tự nhiên nâng lên). Hãy hát thầm âm giai trưởng mới trước khi vào câu.'''),
    L(ch=5, n=2, title='Chuyển điều thức: sang thứ cùng tên', mode='maj', keys='all', kind='parallel', variant='harm', targets=[(2, 0)],
      topics=['Chuyển điều thức sang giọng thứ cùng tên', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      allow=['A2', 'd7'],
      text='''Giọng trưởng → thứ cùng tên: bậc III và VI hạ xuống. Ở các giọng nhiều dấu thăng, chuyển điều thức có nghĩa là **bỏ ba dấu thăng** — ví dụ La trưởng sang La thứ: Đô♯ → Đô, Fa♯ → Fa, Sol♯ giữ lại làm cảm âm.'''),
    L(ch=5, n=3, title='Chuyển giọng khác hai dấu hoá', mode='both', keys='all', kind='chain', steps=2, variant='harm',
      topics=['Chuyển giọng sang giọng khác hai dấu hoá', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Các giọng khác hai dấu hoá (Đô trưởng → Rê trưởng, Si♭ trưởng…) là họ hàng bậc hai. Theo giáo trình, ở trình độ này giai điệu chuyển **dần dần**: đi qua một giọng trung gian họ hàng gần với cả hai (Đô trưởng → Sol trưởng → Rê trưởng), mỗi chặng qua một hợp âm chung.

Phân tích trước khi hát: đánh dấu hai chỗ chuyển và tên hai giọng mới. Mỗi chỗ chuyển là một lần "đặt lại" âm chủ.'''),
    L(ch=5, n=4, title='Chuyển giọng khác ba dấu hoá trở lên', mode='both', keys='all', kind='chain', steps=3, variant='harm',
      topics=['Chuyển giọng sang giọng khác ba dấu hoá trở lên', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      text='''Chuyển giọng xa hơn (ba dấu hoá trở lên) đi qua hai giọng trung gian. Mỗi chặng ngắn (bốn ô), nên tai phải đổi điểm tựa nhanh. Một cách luyện của các nhạc viện: trước bài, hát lần lượt **câu mẫu kết** (bậc III – II – I) của từng giọng trên đường đi.'''),
    L(ch=5, n=5, title='Chuyển giọng qua ♭II, ♭VI và thứ cùng tên', mode='maj', keys='all', kind='mod-extra', variant='harm', extra=['N', 'bVI', 's'],
      topics=['Chuyển giọng qua hợp âm bậc II hạ, bậc VI hạ và giọng thứ cùng tên', 'Chuỗi hợp âm chuyển giọng', 'Mô tiến'],
      allow=['A2', 'd7', 'd3', 'A6'],
      text='''Các hợp âm "mượn" từ giọng thứ cùng tên — **hạ át thứ** (s), **♭VI** và **Napoli** (♭II) — mở cửa sang những giọng xa theo hướng giáng: trong Đô trưởng, hợp âm Napoli Rê♭ – Fa – La♭ là chủ của Rê♭ trưởng, hạ át của La♭ trưởng; ♭VI La♭ – Đô – Mi♭ là chủ của La♭ trưởng, hạ át của Mi♭ trưởng.

Giai điệu đi tới hợp âm mượn như bình thường trong giọng gốc, rồi **giữ hợp âm đó làm chỗ đứng mới**. Đây là con đường chuyển giọng ưa thích của Schubert và các nhạc sĩ lãng mạn.'''),
    L(ch=5, n=6, title='Chuyển giọng trùng âm qua hợp âm bảy giảm', mode='both', keys='all', kind='enh', via='enh-dim', variant='harm',
      topics=['Chuyển giọng trùng âm qua hợp âm bảy giảm', 'Hát hợp âm bảy giảm và giải quyết', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'A4', 'd5', 'd3', 'A6', 'dd5', 'AA4', 'd4', 'A5'],
      text='''**Chuyển giọng trùng âm** dùng một hợp âm nghe giống hệt nhau nhưng được hiểu (và viết) theo giọng khác. Hợp âm bảy giảm là trường hợp rõ nhất: bốn nốt cách đều nhau từng quãng 3 thứ, nên bất kỳ nốt nào cũng có thể làm cảm âm. Si – Rê – Fa – La♭ (bậc VII của Đô) viết lại thành Rê – Fa – La♭ – Đô♭ là bậc VII của Mi♭; thành Fa – La♭ – Đô♭ – Mi♭♭ là bậc VII của Sol♭ (= Fa♯); thành Sol♯ – Si – Rê – Fa là bậc VII của La.

Trong giai điệu, sách ghi hợp âm hai lần: một ô theo giọng cũ, ô sau **cùng các âm ấy viết theo giọng mới** — bạn nhìn thấy sự trùng âm trên khuông. Khi hát, giữ nguyên cao độ và chỉ đổi cách nghe: nốt nào giờ là cảm âm?

Bài tập I: hát hợp âm bảy giảm và các cách giải quyết của nó (bốn giọng thứ, bốn giọng trưởng hoà thanh).'''),
    L(ch=5, n=7, title='Chuyển giọng trùng âm qua hợp âm bảy át và hợp âm ba tăng', mode='both', keys='all', kind='enh', via='enh-ger', variant='harm',
      topics=['Chuyển giọng trùng âm qua hợp âm bảy át và hợp âm ba tăng', 'Các cách giải quyết hợp âm bảy át và hợp âm ba tăng', 'Chuỗi hợp âm'],
      allow=['A2', 'd7', 'A4', 'd5', 'd3', 'A6', 'dd5', 'AA4', 'd4', 'A5'],
      text='''Hợp âm bảy át nghe giống hệt **hợp âm sáu tăng kiểu Đức** của giọng cách nó nửa cung xuống: Sol – Si – Rê – Fa (át bảy của Đô) = Sol – Si – Rê – Mi♯ (sáu tăng của Si thứ / Si trưởng), giải quyết về bốn – sáu kết Fa♯ – Si – Rê rồi át – chủ của Si. Ngược lại, hợp âm sáu tăng của một giọng có thể nghe như át bảy để sang giọng nửa cung lên.

**Hợp âm ba tăng** (ví dụ át có quint nâng: Sol – Si – Rê♯) chia quãng 8 thành ba quãng 3 trưởng bằng nhau, nên mỗi nốt đều có thể là nốt gốc: Sol – Si – Rê♯ = Si – Rê♯ – Fa𝄪 = Mi♭ – Sol – Si. Giải quyết theo cách thứ nhất về Đô, theo cách thứ hai về Mi, theo cách thứ ba về La♭.

Giai điệu của bài dùng cả hai con đường; một số bài kết ở giọng xa mà không trở về.'''),
]

# a few melodies of the last lesson take the augmented-triad road and the other way round
ENH_MIX = {7: ['enh-ger', 'enh-ger2', 'enh-aug']}
