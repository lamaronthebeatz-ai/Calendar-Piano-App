import type { Article } from '../wiki'
import LICKS from './jazz-licks.json'

/**
 * Jazz Licks — by Lamar: 1001 licks written for the book from the library's own jazz theory. The licks and their
 * captions are generated and checked by scripts/licks/gen.py (music/ex/jazz-licks.txt, ./jazz-licks.json); the
 * prose here introduces each chapter.
 */
const L = LICKS as Record<string, string[]>

/** The licks of a chapter, ten per heading. */
const licks = (id: string) =>
  L[id]
    .map((line) => {
      const nums = [...line.matchAll(/(?:\| |;; )(\d+)=/g)].map((m) => m[1])
      return `## Lick ${nums[0]} – ${nums[nums.length - 1]}\n${line}`
    })
    .join('\n\n')

const range = (id: string) => {
  const all = L[id].flatMap((line) => [...line.matchAll(/(?:\| |;; )(\d+)=/g)].map((m) => +m[1]))
  return `${all[0]} – ${all[all.length - 1]}`
}

const PRACTICE = `## Cách luyện
1. Đọc chú thích trước khi chơi: hợp âm, âm giai, các thủ pháp, nốt kết. Biết lick "nghĩ gì" thì mới dùng lại được.
2. Chơi chậm với máy đếm nhịp ở phách 2 và 4, móc đơn [[swing]] (dài – ngắn). Đệm tay trái bằng [[the-bam-ba-not|thế bấm 3 nốt]] hoặc nốt 3 – 7 của hợp âm.
3. Chuyển lick sang ít nhất ba giọng khác — các lick trong mỗi chương đã được rải qua nhiều giọng.
4. Đổi tiết tấu: bắt đầu sớm hoặc muộn một móc đơn, kéo dài nốt kết, bỏ bớt nốt (xem [[tiet-tau-ngau-hung-jazz]]).
5. Đưa lick vào một bài thật có cùng hợp âm, rồi chế lại cho thành câu của bạn.`

const chapter = (slug: string, id: string, title: string, summary: string, aliases: string[], theory: string): Article => ({
  slug,
  title,
  category: 'jazz',
  also: ['improvisation'],
  unlisted: true,
  aliases,
  summary,
  body: `
${theory}

${PRACTICE}

${licks(id)}
`,
})

export const jazzLicks: Article[] = [
  {
    slug: 'jazz-licks-lo-trinh',
    title: 'Jazz Licks: cách dùng sách',
    category: 'jazz',
    also: ['improvisation'],
    unlisted: true,
    aliases: ['jazz licks', '1001 lick', 'sách lick jazz', 'jazz licks by lamar'],
    summary: '1001 lick jazz Lamar soạn trên nền lý thuyết của thư viện: ba phần — lick theo loại hợp âm, lick trên tiến trình kiểu standard, lick theo phong cách; mỗi lick có đủ ký hiệu hợp âm và một dòng phân tích.',
    refs: [
      ['AbeBooks — 1001 Jazz Licks (Jack Shneidman, Cherry Lane Music, 2000)', 'https://www.abebooks.com/9781575602783/1001-Jazz-Licks-Complete-Vocabulary-1575602784/plp'],
      ['Wikipedia — The Lick', 'https://en.wikipedia.org/wiki/The_Lick'],
    ],
    body: `
## Sách này là gì
**1001 lick** — câu nhạc ngắn một đến bốn ô — để học "từ vựng" của ngôn ngữ jazz (xem [[lick-va-trich-dan]]). Tất cả do người biên soạn viết mới cho sách này, dựa trên hệ thống lý thuyết của thư viện: [[he-thong-hop-am-am-giai|hợp âm – âm giai]], [[am-giai-bebop|âm giai bebop]], [[not-tiep-can-jazz|nốt mục tiêu, nốt tiếp cận và bao vây]], [[not-tranh-va-quang-nghich|nốt tránh]], [[not-dan-huong|nốt dẫn hướng]]. Ngoại lệ duy nhất là *The Lick* ở chương cuối — câu sáo nổi tiếng, ghi rõ nguồn.

Bố cục ba nhóm — lick cơ bản, lick trên tiến trình kiểu standard, lick theo phong cách — theo cách chia của *1001 Jazz Licks* (Jack Shneidman, Cherry Lane Music, 2000) như các nhà sách mô tả (người biên soạn chưa đối chiếu mục lục bản in); không lick nào chép từ sách đó.

## Ba phần
| Phần | Nội dung | Lick |
|---|---|---|
| I. Lick theo loại hợp âm | maj7 – 6, m7, 7, át biến hoá, m7♭5, °7, thứ giai điệu | 1 – 480 |
| II. Lick trên tiến trình | ii – V – I trưởng và thứ, thay thế tritone, chuỗi át, turnaround, blues | 481 – 930 |
| III. Lick theo phong cách | blues – soul, điệu thức – ngũ cung – quãng 4, *The Lick* | 931 – 1001 |

## Đọc một lick
Mỗi lick có **số thứ tự**, **ký hiệu hợp âm** trên khuông và một dòng phân tích:
- **Hợp âm · âm giai** dùng cho từng hợp âm (theo bảng [[he-thong-hop-am-am-giai]]).
- **Thủ pháp**: đoạn âm giai, âm giai bebop, rải hợp âm (1-3-5-7-9), mẫu 1-2-3-5, bao vây, nốt tiếp cận cromatic, nốt thêu, ngũ cung, quãng 4 chồng, cặp hợp âm ba…
- **Nối hợp âm**: nốt trước và nốt sau mỗi lần đổi hợp âm, tính theo bậc của hợp âm (vd. ♭7→3 là nốt 7 của ii đi xuống nốt 3 của V — nốt dẫn hướng).
- **Kết ở nốt**: bậc của nốt cuối so với hợp âm cuối.
Ký hiệu: **7alt** = hợp âm át dùng âm giai biến đổi (♭9, ♯9, ♯11, ♭13); **7♭9** = át có ♭9 (bát cung nửa cung – cung, hoặc Phrygian át khi về hợp âm thứ); **m7♭5** = nửa giảm; **°7** = bảy giảm; **m(maj7)**, **m6** = hợp âm chủ thứ dùng âm giai thứ giai điệu. Lick viết không có hoá biểu, dấu hoá ghi trực tiếp; nốt ngoài âm giai được ghi theo hướng giải quyết (D♯ lên E, D♭ xuống C).

## Các quy tắc mọi lick đều tuân theo
Mỗi lick được viết rồi **kiểm tra bằng chương trình** theo đúng các quy tắc của thư viện; lick nào sai một quy tắc bị loại:
1. Ở **phách** (phách 1, 2, 3, 4) là nốt hợp âm hoặc nốt căng dùng được. Nốt ngoài hợp âm chỉ đứng ở phách khi là nốt **tiếp cận / bao vây** dẫn vào một nốt hợp âm ở phách kế tiếp.
2. **Nốt tránh** (nửa cung trên một nốt hợp âm: bậc 4 trên maj7 và 7; bậc 6 trên m7; bậc 2 và 6 trên m7♭5) không bao giờ ở phách, không ngân; chỉ lướt qua rồi đi liền bậc.
3. Nốt **cromatic** đi tiếp **nửa cung**; **nốt lướt bebop** và nốt tránh đi tiếp liền bậc — trừ nốt đầu của một cặp bao vây, khi nốt thứ hai ở phía bên kia nốt mục tiêu.
4. Mỗi lần **đổi hợp âm**, nốt đầu tiên của hợp âm mới là nốt hợp âm hoặc nốt căng; chương trình ưu tiên lick nối bằng bước liền — tốt nhất là ♭7 → 3.
5. Chỉ **nốt hợp âm / nốt căng** được ngân (từ nốt đen trở lên); lick kết ở nốt hợp âm hoặc nốt căng 9, 13, trên phách (hoặc nốt đảo phách nối sang ô sau).
6. Bước nhảy **tritone** hoặc từ **quãng 7** trở lên chỉ đi giữa các nốt hợp âm; sau bước nhảy lớn hơn quãng 5, câu quay đầu hoặc chỉ đi tiếp một bước nhỏ; không bước nhảy quá quãng 8; không nốt nào lặp liền, không lắc qua lại hai nốt.
7. Tầm cữ tay phải Đô 4 – Rê 6; không có hai lick nào trùng cả quãng lẫn tiết tấu.
Quy tắc bảo đảm lick **đúng ngữ pháp**; còn nó có "hay" và có "chất" hay không thì phải chơi và nghe — tai bạn là trọng tài cuối cùng. Lick nào nghe chưa vừa ý, hãy sửa nó: đó chính là bài tập.

${PRACTICE}

## Lộ trình gợi ý
1. Phần I theo thứ tự: maj7 → m7 → 7, rồi át biến hoá và các hợp âm còn lại.
2. Phần II: [[jazz-licks-ii-v-i]] là chương lớn nhất — học song song với [[ii-v-i]] và [[not-dan-huong]].
3. Phần III: chơi các chương phong cách khi đã quen ngôn ngữ bebop của hai phần đầu.
Đọc thêm lý thuyết: [[hoa-am-jazz]], [[ngau-hung-jazz]], [[phuong-phap-luyen-ngau-hung]].
`,
  },

  // ---------- Phần I: lick theo loại hợp âm ----------
  chapter('jazz-licks-maj7', 'maj', 'Lick trên hợp âm maj7 và 6', `Lick ${range('maj')}: hợp âm chủ trưởng — Ionian (bậc 4 là nốt tránh), Lydian (♯11) và bebop trưởng (nốt lướt ♯5).`, ['lick maj7', 'lick hợp âm trưởng bảy', 'lick 6'], `
Lick ${range('maj')} trên **hợp âm chủ trưởng** — Cmaj7 hoặc C6 — viết ở đủ 12 giọng.

## Âm giai
| Lựa chọn | Nốt (trên C) | Ghi chú |
|---|---|---|
| Ionian | C D E F G A B | F là [[not-tranh-va-quang-nghich|nốt tránh]] — chỉ lướt qua, không đặt ở phách |
| Lydian | C D E F♯ G A B | ♯11 thay nốt tránh, dùng được ở phách |
| Bebop trưởng | C D E F G G♯ A B | G♯ là nốt lướt: chạy xuống từ nốt hợp âm thì nốt hợp âm rơi vào phách (xem [[am-giai-bebop]]) |
Nốt căng dùng được: **9, 13 (6)** và ♯11 khi nghĩ Lydian. Nốt kết đẹp: **3, 9, 5, 7**.
Đọc thêm: [[he-thong-hop-am-am-giai]], [[hop-am-bay]].
`),
  chapter('jazz-licks-m7', 'm7', 'Lick trên hợp âm m7', `Lick ${range('m7')}: hợp âm thứ bảy — Dorian, bebop Dorian (nốt lướt 3 trưởng); bậc 6 là nốt tránh khi đứng ở phách.`, ['lick m7', 'lick hợp âm thứ bảy', 'lick dorian'], `
Lick ${range('m7')} trên **hợp âm thứ bảy** (thường là ii trong [[ii-v-i]]).

## Âm giai
| Lựa chọn | Nốt (trên Dm7) | Ghi chú |
|---|---|---|
| Dorian | D E F G A B C | B (bậc 6) tạo tritone với F: bảng nốt tránh của thư viện xếp nó vào nốt tránh — ở đây chỉ dùng làm nốt lướt |
| Bebop Dorian | D E F F♯ G A B C | F♯ là nốt lướt giữa ♭3 và 4 (xem [[am-giai-bebop]]) |
Nốt căng: **9, 11**. Nốt dẫn hướng: **♭3 và ♭7** — ♭7 của ii đi xuống nửa cung thành 3 của V (xem [[not-dan-huong]]).
Đọc thêm: [[dieu-thuc]], [[he-thong-hop-am-am-giai]].
`),
  chapter('jazz-licks-at', 'dom', 'Lick trên hợp âm át 7', `Lick ${range('dom')}: hợp âm át không biến hoá — Mixolydian và bebop át (nốt lướt 7 trưởng); bậc 4 là nốt tránh.`, ['lick hợp âm át', 'lick dominant', 'lick mixolydian', 'lick bebop át'], `
Lick ${range('dom')} trên **hợp âm 7 (át)** không biến hoá.

## Âm giai
| Lựa chọn | Nốt (trên G7) | Ghi chú |
|---|---|---|
| Mixolydian | G A B C D E F | C (bậc 4) là nốt tránh — nửa cung trên nốt 3 |
| Bebop át | G A B C D E F F♯ | F♯ là nốt lướt: chạy xuống từ G, B, D hay F thì G – F – D – B rơi đúng bốn phách (xem [[am-giai-bebop]]) |
Nốt căng: **9, 13**. Tritone **3 – ♭7** là "lõi" của hợp âm át — đặt chúng ở phách là nghe ra ngay hợp âm.
Đọc thêm: [[he-thong-hop-am-am-giai]], [[hop-am-at-bien-hoa]].
`),
  chapter('jazz-licks-at-bien-hoa', 'alt', 'Lick trên hợp âm át biến hoá (7alt, 7♭9)', `Lick ${range('alt')}: âm giai biến đổi, bát cung nửa cung – cung, Phrygian át và cặp hợp âm ba upper structure.`, ['lick 7alt', 'lick altered', 'lick 7b9', 'lick át biến hoá', 'lick bát cung'], `
Lick ${range('alt')} trên **hợp âm át biến hoá** — nhiều căng thẳng, kéo mạnh về chủ (xem [[hop-am-at-bien-hoa]]).

## Âm giai
| Ký hiệu | Âm giai | Nốt (trên G7) | Nốt căng |
|---|---|---|---|
| G7alt | Biến đổi (điệu thức 7 của [[dieu-thuc-thu-giai-dieu|thứ giai điệu]]) | G A♭ A♯ B C♯ E♭ F | ♭9, ♯9, ♯11, ♭13 |
| G7♭9 | Bát cung nửa cung – cung ([[am-giai-doi-xung-jazz]]) | G A♭ A♯ B C♯ D E F | ♭9, ♯9, ♯11, 13 |
| G7♭9 | Phrygian át (về hợp âm thứ) | G A♭ B C D E♭ F | ♭9, ♭13 (C là nốt tránh) |
Âm giai biến đổi không có nốt 5 và không có nốt tránh. Nốt căng được ghi theo bậc (trên G7: ♭9 = A♭, ♯9 = A♯, ♯11 = C♯, ♭13 = E♭); ở các giọng nhiều dấu, nốt cần dấu hoá kép được ghi bằng tên đơn giản cùng cao độ, theo thói quen bản nhạc jazz.

## Cặp hợp âm ba
Trên G7alt, hai hợp âm ba trưởng **E♭** (♭13 – 1 – ♯9) và **D♭** (♯11 – 7 – ♭9) nằm trọn trong âm giai biến đổi — rải chúng là một cách nghe "alt" rất rõ (xem [[upper-structure]], [[triad-pairs]]).
`),
  chapter('jazz-licks-nua-giam', 'm7b5', 'Lick trên hợp âm nửa giảm (m7♭5)', `Lick ${range('m7b5')}: Locrian (bậc 2 và 6 là nốt tránh) và Locrian ♮2.`, ['lick m7b5', 'lick nửa giảm', 'lick locrian'], `
Lick ${range('m7b5')} trên **hợp âm nửa giảm** — thường là ii trong [[ii-v-i|ii – V – i thứ]].

## Âm giai
| Lựa chọn | Nốt (trên Bm7♭5) | Ghi chú |
|---|---|---|
| Locrian | B C D E F G A | C (♭2) và G (♭6) là nốt tránh theo bảng của thư viện |
| Locrian ♮2 | B C♯ D E F G A | điệu thức 6 của thứ giai điệu; C♯ (9) dùng được ở phách |
Nốt căng: **11** (và **9** với Locrian ♮2). Nốt dẫn hướng: **♭3 và ♭7**.
Đọc thêm: [[dieu-thuc]], [[dieu-thuc-thu-giai-dieu]].
`),
  chapter('jazz-licks-giam', 'dim', 'Lick trên hợp âm bảy giảm (°7)', `Lick ${range('dim')}: âm giai bát cung cung – nửa cung; nốt căng cách mỗi nốt hợp âm một cung.`, ['lick dim7', 'lick bảy giảm', 'lick bát cung cung nửa cung'], `
Lick ${range('dim')} trên **hợp âm bảy giảm** — bốn nốt cách đều nhau ba nửa cung.

## Âm giai
**Bát cung cung – nửa cung**: C D E♭ F G♭ A♭ A B trên C°7 (xem [[am-giai-bat-cung]], [[am-giai-doi-xung-jazz]]). Nốt hợp âm: C E♭ G♭ A (ghi A thay cho B♭♭ như bản nhạc jazz); nốt căng: **D, F, A♭, B** — mỗi nốt cách một nốt hợp âm một cung.
Vì âm giai đối xứng, một lick trên C°7 dùng được nguyên vẹn trên E♭°7, G♭°7, A°7 — và dịch lên/xuống ba nửa cung vẫn đúng.
`),
  chapter('jazz-licks-thu-giai-dieu', 'mm', 'Lick trên hợp âm chủ thứ (m6, m(maj7))', `Lick ${range('mm')}: hợp âm chủ thứ với âm giai thứ giai điệu.`, ['lick m6', 'lick mmaj7', 'lick thứ giai điệu', 'lick melodic minor'], `
Lick ${range('mm')} trên **hợp âm chủ thứ** — i trong [[ii-v-i|ii – V – i thứ]].

## Âm giai
**Thứ giai điệu** (đi lên): C D E♭ F G A B trên Cm6 hoặc Cm(maj7) (xem [[am-giai-thu]], [[dieu-thuc-thu-giai-dieu]]). Trên m6 nốt hợp âm là 1 – ♭3 – 5 – 6, nốt 7 trưởng là nốt căng; trên m(maj7) thì ngược lại. Không có nốt tránh: mọi nốt của âm giai đều dùng được ở phách.
`),

  // ---------- Phần II: lick trên tiến trình ----------
  chapter('jazz-licks-ii-v-i', '251', 'Lick trên ii – V – I trưởng', `Lick ${range('251')}: ii – V – I trưởng, hai ô (ii và V mỗi hợp âm hai phách) và ba – bốn ô; nối bằng nốt dẫn hướng.`, ['lick ii v i', 'lick 2 5 1', 'ii-V-I lick', 'lick ii-v-i trưởng'], `
Lick ${range('251')} trên **[[ii-v-i]]** — tiến trình quan trọng nhất của jazz. Ba dạng: ii và V mỗi hợp âm **hai phách** rồi I một ô; mỗi hợp âm **một ô**; và dạng có I kéo dài hai ô.

## Âm giai
Dm7 → D Dorian, G7 → G Mixolydian / bebop át, Cmaj7 → C Ionian, Lydian hoặc bebop trưởng (bảng ở [[he-thong-hop-am-am-giai]]). Ba âm giai này cùng nốt (trừ nốt lướt và ♯11): điều làm lick "đúng hợp âm" là **nốt nào rơi vào phách**.

## Nốt dẫn hướng
Ở mỗi chỗ đổi hợp âm, chú thích ghi nốt trước → nốt sau. Đẹp nhất là **♭7 → 3**: C (♭7 của Dm7) xuống B (3 của G7), F (♭7 của G7) xuống E (3 của Cmaj7) — mỗi lần chỉ nửa cung (xem [[not-dan-huong]]).
`),
  chapter('jazz-licks-ii-v-i-thu', '251m', 'Lick trên ii – V – i thứ', `Lick ${range('251m')}: m7♭5 – 7alt / 7♭9 – m6 / m(maj7).`, ['lick ii v i thứ', 'lick minor ii v', 'lick 2 5 1 thứ'], `
Lick ${range('251m')} trên **ii – V – i thứ**: Dm7♭5 – G7alt (hoặc G7♭9) – Cm6 (hoặc Cm(maj7)).

## Âm giai
Theo gợi ý của thư viện ở [[lick-va-trich-dan]]: **Locrian** (hoặc Locrian ♮2) trên ii, **biến đổi** trên V7, **thứ giai điệu** trên i. Với V7♭9 có thể dùng bát cung nửa cung – cung hoặc Phrygian át (xem chương [[jazz-licks-at-bien-hoa]]).
Nốt dẫn hướng: C (♭7 của Dm7♭5) → B (3 của G7) → … → E♭ (♭3 của Cm). Nốt ♭9 (A♭) của G7 xuống G (5 của Cm), ♭13 (E♭) giữ thành ♭3 của Cm.
`),
  chapter('jazz-licks-thay-the-tritone', 'tritone', 'Lick trên ii – ♭II7 – I (thay thế tritone)', `Lick ${range('tritone')}: V7 được thay bằng hợp âm át cách nó một tritone.`, ['lick tritone', 'lick subV', 'lick thay thế tritone'], `
Lick ${range('tritone')} trên **ii – ♭II7 – I**: Dm7 – D♭7 – Cmaj7 (xem [[thay-the-tritone]]). D♭7 và G7 có chung tritone F – C♭ (B), nên nốt dẫn hướng vẫn nối êm: C (♭7 của Dm7) xuống C♭ (♭7 của D♭7), F (3 của D♭7) xuống E (3 của Cmaj7).
Bè trầm đi xuống liền nửa cung D – D♭ – C; tay phải dùng D♭ Mixolydian trên D♭7.
`),
  chapter('jazz-licks-chuoi-at', 'cycle', 'Lick trên chuỗi hợp âm át', `Lick ${range('cycle')}: III7 – VI7 – II7 – V7 – I, mỗi hợp âm hai phách hoặc một ô.`, ['lick chuỗi át', 'lick át phụ', 'lick rhythm changes bridge'], `
Lick ${range('cycle')} trên **chuỗi hợp âm át** đi theo vòng quãng 5: E7 – A7 – D7 – G7 – C (trong Đô trưởng). Đây là các [[hop-am-at-phu|hợp âm át phụ]]; dạng mỗi hợp âm hai ô là đoạn giữa của [[rhythm-changes]].

## Âm giai
Mỗi hợp âm át dùng Mixolydian / bebop át; khi hợp âm sau là thứ (E7 → Am, A7 → Dm), lick có thể dùng **7♭9** với Phrygian át. Nốt dẫn hướng: 3 của hợp âm này xuống nửa cung thành ♭7 của hợp âm sau (G♯ → G, C♯ → C, F♯ → F…), và ngược lại.
`),
  chapter('jazz-licks-turnaround', 'turn', 'Lick trên turnaround', `Lick ${range('turn')}: I – vi – ii – V, I – VI7 – ii – V, iii – VI7 – ii – V, mỗi hợp âm hai phách, về I.`, ['lick turnaround', 'lick 1 6 2 5', 'lick vòng quay'], `
Lick ${range('turn')} trên **turnaround** — hai ô quay về chủ ở cuối đoạn (xem [[turnaround-jazz]]). Ba dạng: **I – vi – ii – V**, **I – VI7 – ii – V** (VI7 là át phụ của ii) và **iii – VI7 – ii – V**; mỗi hợp âm hai phách, rồi về I.
Hợp âm đổi mỗi hai phách nên lick phải "nói" từng hợp âm thật gọn: nốt hợp âm ở phách 1 và 3, nốt nối nửa cung giữa các hợp âm.
`),
  chapter('jazz-licks-blues', 'blues', 'Lick trên blues 12 ô', `Lick ${range('blues')}: các đoạn của blues jazz — I7 – IV7, ô 5 – 6, ii – V – I của ô 9 – 11, turnaround cuối.`, ['lick blues', 'lick blues 12 ô', 'jazz blues lick'], `
Lick ${range('blues')} trên các đoạn của **[[blues-12-nhip|blues 12 ô]]** dạng jazz: I7 – IV7 (ô 1 – 2), IV7 – I7 (ô 5 – 7), ii – V – I (ô 9 – 11) và turnaround I – VI7 – ii – V.

## Âm giai
Trên I7 và IV7: Mixolydian của chính hợp âm cộng **nốt xanh** — ♭3 (nghe như ♯9, được đứng ở phách) và ♭5 (chỉ lướt qua); thêm ngũ cung thứ và [[am-giai-blues|âm giai blues]] trên nốt gốc của hợp âm. Ở ii – V – I và turnaround, ngôn ngữ trở lại bebop như Phần II.
`),

  // ---------- Phần III: lick theo phong cách ----------
  chapter('jazz-licks-blues-soul', 'soul', 'Lick blues – soul', `Lick ${range('soul')}: âm giai blues, ngũ cung thứ và nốt xanh trên một hợp âm 7.`, ['lick soul', 'lick âm giai blues', 'lick nốt xanh'], `
Lick ${range('soul')} kiểu **blues – soul** trên một hợp âm 7 kéo dài hai ô: ít bebop, nhiều [[am-giai-blues|âm giai blues]] (1 – ♭3 – 4 – ♭5 – 5 – ♭7) và ngũ cung thứ. Nốt ♭3 chạm vào 3 của hợp âm là âm sắc blues; ♭5 chỉ lướt qua. Chơi hơi sau phách, nhấn mạnh nốt ♭3 và ♭7.
`),
  chapter('jazz-licks-dieu-thuc', 'modal', 'Lick điệu thức: Dorian, ngũ cung, quãng 4', `Lick ${range('modal')}: một hợp âm m7 kéo dài kiểu jazz điệu thức — ngũ cung thứ, quãng 4 chồng, Dorian với bậc 6 là nốt màu.`, ['lick modal', 'lick điệu thức', 'lick quãng 4', 'lick ngũ cung', 'so what lick'], `
Lick ${range('modal')} trên **một hợp âm m7 kéo dài** hai đến bốn ô, kiểu [[jazz-dieu-thuc|jazz điệu thức]]. Ở đây **bậc 6 Dorian là nốt màu** của điệu thức, được đứng ở phách — chính bảng nốt tránh của thư viện ghi rằng nhiều người không coi nó là nốt tránh (xem [[not-tranh-va-quang-nghich]]).

## Thủ pháp
- **Ngũ cung thứ** trên nốt gốc (1 – ♭3 – 4 – 5 – ♭7): không có nốt nào va với hợp âm (xem [[am-giai-ngu-cung]]).
- **Quãng 4 chồng** trong âm giai Dorian — âm thanh "mở" của [[hoa-am-quang-bon|hoà âm quãng 4]].
- Đoạn âm giai Dorian và rải hợp âm 1-3-5-7-9.
`),
  {
    slug: 'jazz-licks-the-lick',
    title: '"The Lick" và biến thể',
    category: 'jazz',
    also: ['improvisation'],
    unlisted: true,
    aliases: ['the lick', 'lick nổi tiếng', 'câu sáo jazz'],
    summary: `Lick ${range('lick')}: câu sáo "The Lick" (1 – 2 – ♭3 – 4 – 2 – ♭7 – 1) ở sáu giọng, rồi đặt làm ii của ii – V – I trưởng và thứ, nối tiếp bằng câu mới.`,
    refs: [['Wikipedia — The Lick', 'https://en.wikipedia.org/wiki/The_Lick']],
    body: `
Lick ${range('lick')} dành cho **"The Lick"** — câu bảy nốt với các bậc **1 – 2 – ♭3 – 4 – 2 – ♭7 – 1** xuất hiện trong vô số solo; cái tên ra đời trên mạng xã hội những năm 2010 (Wikipedia, "The Lick"; xem [[lick-va-trich-dan]]). Đây là lick duy nhất trong sách không do người biên soạn viết. Tiết tấu ở đây là một cách ghi thường gặp — các bản ghi khác nhau về tiết tấu, chỉ giống nhau ở bảy cao độ.

## Hai cách dùng
1. **Nguyên dạng** trên hợp âm m7, ở sáu giọng.
2. **Làm ii của ii – V – I**: The Lick chiếm ô đầu (hợp âm m7, hoặc m7♭5 với Locrian ♮2 — nốt 2 tự nhiên của The Lick hợp với âm giai này), các ô sau là câu mới viết theo cùng quy tắc của sách, nối vào V và I bằng nốt dẫn hướng.
Nhạc công ngày nay thường chèn The Lick vào solo như một câu đùa nội bộ — dùng ít thôi.

${PRACTICE}

${licks('lick')}
`,
  },
]
