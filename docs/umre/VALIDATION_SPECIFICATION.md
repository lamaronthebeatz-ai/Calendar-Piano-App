# Đặc tả kiểm chứng

Hai tầng: kiểm **cấu trúc** tổng phổ (GĐ1, `repr/validate.ts`) và kiểm chứng **lời giải** theo sổ luật (GĐ5, `validation/`).

## 1. Kiểm cấu trúc — `validateScore(s): Issue[]`
Chỉ kiểm cấu trúc và ký hiệu, không kiểm luật âm nhạc. Mã lỗi: `schema`, `version`, `id-missing`, `id-duplicate`, `ref`, `clef-start`, `meter-start`, `keysig-start`, `order`, `meter`, `keysig`, `mode`, `pickup`, `meter-barline`, `layout`, `time`, `onset`, `duration`, `pitch`, `overlap`, `tie`, `span`, `chord-bass`, `form-nest`. Cảnh báo: `range` (ngoài MIDI 0–127), `group` (nốt cùng onset trong một bè không chung `group`), `span-end`.

## 2. Kiểm chứng lời giải (GĐ5) — `Validator.validate(task, solution, rulebook)`
Bộ kiểm nhận **bài gốc, một phương án, sổ luật**; không nhận gì từ bộ giải. Đã có: `umre.validate.counterpoint.two-voice`, `umre.validate.counterpoint.multi-voice` (phiên bản 1, sổ luật `counterpoint.strict.pham-tu-huong-1991@1`).

### Trạng thái của MỘT phương án
| | Khi nào |
|---|---|
| `VALID` | mọi luật bắt buộc áp dụng được đều có ít nhất một bộ kiểm độc lập xét, không luật nào hỏng, không bất đồng |
| `INVALID` | ít nhất một luật bắt buộc hỏng (bộ kiểm độc lập thấy); tổng phổ hỏng cấu trúc (`umre.repr/*`); thừa bè; sửa bè đề (`umre.task/given-preserved`) |
| `INCOMPLETE` | thiếu bè, bè tự do trống, bè đối vị dừng trước cuối bài — lỗi đã thấy để ở `provisional`, không tính |
| `UNKNOWN` | sổ luật không được hỗ trợ; có luật bắt buộc không bộ kiểm nào phủ; hai bộ kiểm độc lập bất đồng; bộ kiểm của bộ giải báo lỗi mà bộ kiểm độc lập không thấy |

Trạng thái **bài toán** (PROVEN_UNSAT, TIMEOUT…) là của quá trình giải, ở `UnifiedResult.status` (GĐ7), không bao giờ ở đây.

### Ba bộ kiểm
| id | độc lập | phủ |
|---|---|---|
| `verify` | có | mọi luật bắt buộc (`features/counterpoint/verify.ts`, viết riêng khỏi `rules.ts`, lưới phách đen) |
| `umre-native` | có | `leap`, `leap-response`, `leap3-response`, `repeat3`, `no-gap`, `end` (mọi bản, vì đường giai điệu giống nhau ở mọi bản); `crossing`, `parallel`, `perfects3` **chỉ ở nguyên thể** — viết lại trên biểu diễn UMRE, không dùng chung code với hai bộ kia |
| `search-rules` | **không** | mọi luật (`rules.ts` `check` / `mcheck` — chính bộ kiểm bộ giải dùng khi tìm). Chỉ là nhân chứng; chấm luật mềm |

Luật nào cả `verify` và `umre-native` cùng phủ thì so từng lỗi (luật, bè, thời điểm) trong phạm vi chung; khác nhau → `disputed`. `search-rules` báo lỗi cứng mà hai bộ độc lập không thấy → `disputed`. Bộ độc lập thấy mà `search-rules` không thấy → vẫn `fail` (đây chính là ca "bộ giải nhận nhầm").

### Vi phạm (`Violation`)
`ruleId`, `rulebookId`, `rulebookVersion`, `severity`, `location {at (nốt tròn), measure, offset, version, voices, eventIds}`, `actual` (cao độ và quãng **tính từ tổng phổ** ở chỗ đó, kể cả ở bản biến thể), `expected` (phát biểu luật trong sổ luật), `description`, `citations` (id trích dẫn), `checkers`, `exceptionOutOfScope` (ví dụ quãng 4 ở cặp có bè trầm: ngoại lệ "quãng 4 ở cặp trên" không áp).

### Độ phủ (`Coverage`)
Số luật bắt buộc; đã kiểm; qua; hỏng; không kiểm được; bất đồng; không áp dụng; số luật mềm đã chấm; các chỗ đã dùng ngoại lệ (`quarter-prep`, `fourth-upper-pair`); tỉ lệ = đã kiểm ÷ (bắt buộc − không áp dụng).

### Tái kiểm
`inputDigest` = FNV-1a của JSON chuẩn hoá (khoá xếp thứ tự) của (bài, phương án, sổ luật). Cùng digest → cùng kết quả (test). Bước `validate` trong truy vết ghi digest.

## Kiểm thử (đã chạy)
`src/umre/validation/validation.test.ts`: 13 test. Gồm 300 lời giải đột biến ngẫu nhiên (kiểm sai khác): hai bộ kiểm độc lập không lần nào bất đồng; `VALID` ⇔ `verify` sạch ⇔ `check` sạch luật cứng.
