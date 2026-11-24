# UMRE — hợp đồng API công khai (API 1.1.0, máy 1.0.0)

Mọi phần app gọi UMRE qua **một** hàm `handle(req, signal?)` ở `src/umre/api.ts`, trực tiếp hoặc qua worker (`UmreHost`, `src/umre/runtime/host.ts`). Trang không import bộ giải, bộ kiểm hay sổ luật bên trong — chỉ `api.ts`, kiểu dữ liệu của nó, các bộ dựng bài (`domains/*/task.ts`) và bộ chuyển đổi biểu diễn (`repr/adapters/*`). Ngoại lệ có ghi lý do: trang phức điệu gọi `domains/counterpoint/page.ts` trong worker cũ của nó (giữ đúng trải nghiệm cũ); trang Lý thuyết đọc `src/umre/theory.ts` (chỉ đọc sổ luật).

## Yêu cầu (`UmreRequest`)
| `op` | Vào | Ra (`result`) | Tái lập |
|---|---|---|---|
| `solve` | `task` (Task: id, type, domain, rulebook {id, version}, score, params), `options` {timeMs, maxSolutions, solverId?, traceLevel?, graceMs?} | `UnifiedResult` | qua cache (bộ giải chạy theo thời gian) |
| `analyze` | `score` (umre.score@1), `context?` {task, rulebook, melodyLimits, rhythmLimits, attribute}, `modules?` | `AnalysisResult` | có |
| `counterpoint.generate` | level 'de' / 'vua' / 'kho', seed, timeMs | `Exercise` \| null | không (theo thời gian) |
| `counterpoint.hints` | task, partial, timeMs | `NextNote[]` | không |
| `counterpoint.diagnose` | task, timeMs, iv? | `Diagnosis` | không |
| `harmony.identify` | notes (cách viết), bass?, spelled? | `Identification` | có |
| `harmony.continuations` | task (phối hoà âm), prefix (bậc đã chọn) | `Continuation[]` | có |
| `harmony.consequences` | task, solution, change {voice, index, pitch} | `Consequence` | có |
| `rulebook` | ref {id, version} | sổ luật: các mục theo phân loại, luật, trích dẫn | có |
| `diagnostics` / `cache.clear` | — | các sự kiện gần nhất (≤ 200, không chứa nốt nhạc), thống kê cache | — |

## Trả lời (`Answer`)
Mỗi trả lời có `meta` {api, engine, fingerprint, cached, elapsedMs, reproducible}. `handle` **không bao giờ ném lỗi**: lỗi thành `{ op: 'error', error: { code, category, stage, message, context, recovery } }` (nhóm: input / unsupported / solver / validation / resource / internal; `context` chỉ gồm loại yêu cầu và mã bài, không có nốt nhạc).

**Trạng thái giải** (`UnifiedResult.status`): SOLVED (có phương án được bộ kiểm độc lập xác nhận bởi bộ kiểm mà bộ giải không chạy) · PROVEN_UNSAT (vô nghiệm đã chứng minh trong miền tìm kiếm khai báo) · UNKNOWN · TIMEOUT · CANCELLED · ERROR. Từng phương án: VALID / INVALID / INCOMPLETE / UNKNOWN, kèm `confirmation` và `rank` (điểm trừ luật mềm). Hết giờ **không bao giờ** thành vô nghiệm; phương án chưa được xác nhận độc lập **không bao giờ** nằm trong `solutions`.

**Trạng thái phân tích** (`AnalysisResult.status`): COMPLETED · PARTIAL · AMBIGUOUS · INSUFFICIENT_DATA (kèm `missing`) · UNKNOWN · ERROR. Mỗi phát hiện: `kind` ∈ premise / fact / interpretation / hypothesis / estimate / rule-check (`premise` — API 1.1.0: điều người phân tích khẳng định, mô-đun nhận làm tiền đề, không phải kết quả, không có độ tin cậy); diễn giải, giả thuyết, ước lượng bắt buộc có `confidence {value, basis}`; `alternatives` khi có cách đọc khác; `evidence` không rỗng; `citations` chỉ là mã có thật trong kho bằng chứng.

## Worker (`UmreHost`)
`new UmreHost(spawn, { onEvent })`; `run(req, { timeMs, signal })` → `Outcome`: done (kèm `response`) / timeout / cancelled / superseded / error. Huỷ và hết giờ **dừng thật** (terminate worker, worker mới cho yêu cầu sau); mỗi yêu cầu có mã, trả lời mang mã cũ bị bỏ; yêu cầu mới thay yêu cầu đang chạy (`superseded`). `state` (idle / running), `onEvent` (start rồi một trạng thái kết thúc, không chứa nội dung yêu cầu).

## Dấu vân, cache, tái lập
`fingerprint` = digest(yêu cầu, phiên bản máy, API, mọi bộ giải / bộ kiểm / sổ luật / mô-đun phân tích đã đăng ký kèm phiên bản). Đổi bất kỳ thành phần nào → mọi dấu vân đổi → cache cũ không dùng lại. Cache: LRU 32 mục, chỉ giữ kết quả đã kết luận (SOLVED / PROVEN_UNSAT, phân tích không lỗi, các op tái lập); không bao giờ giữ TIMEOUT / UNKNOWN / CANCELLED. `reproducible: true` = chạy lại cùng phiên bản cho cùng kết quả; giải bài phụ thuộc thời gian nên chỉ tái lập qua cache (hoặc lưu kết quả cùng dấu vân). Muốn dựng lại một kết quả cũ: lấy commit có `UMRE_ENGINE_VERSION` đó (git), chạy cùng yêu cầu.

## Phiên bản
| Thành phần | Hằng | Hiện tại | Đổi khi |
|---|---|---|---|
| Máy | `UMRE_ENGINE_VERSION` (`version.ts`) | 1.0.0 | major.minor phải khớp `requires.umre` của bộ giải đăng ký |
| API | `UMRE_API_VERSION` (`runtime/ops.ts`) | 1.1.0 | đổi yêu cầu / trả lời (major khi phá tương thích) |
| Biểu diễn | lược đồ `umre.score` | 1 | đổi cấu trúc tổng phổ |
| Sổ luật | `*_RULEBOOK_VERSION` | phức điệu 2, hoà âm 2 | đổi luật, ngưỡng, phạm vi, cách áp ngoại lệ (`RULEBOOK_CHANGELOG.md`) |
| Bộ giải / bộ kiểm / mô-đun | `descriptor.version` / `version` | mỗi cái riêng | đổi thuật toán làm đổi kết quả |
Bài mang sổ luật phiên bản cũ bị từ chối (`rulebook-unknown`), không âm thầm chạy với luật mới.

## Giọng chủ (API 1.1.0, 24/11/2026)
`{ op: 'analyze', score, context: { globalKey: { step, alter, minor } } }` — `step` 0–6 tính từ C, `alter` −1/0/+1, do **người phân tích chọn**. `harmony.tonal` không có nó → `INSUFFICIENT_DATA` (`missing`: "giọng chủ do người phân tích chọn"), không đoán, không lấy Đô trưởng, không lấy theo hoá biểu. Có nó: phát hiện `harmony.tonal#home` loại `premise`; ước lượng của máy chỉ hiện thành `#home-evidence` (loại `estimate`, chủ đề "cảnh báo giọng chủ" khi < 20% thời lượng ở giọng đã chọn và không kết ở đó) khi khác giọng đã chọn; vùng giọng (`chuyển giọng`) ghi `degree` (bậc so với giọng chủ: V, ♭VI, iii…) và `relation`; hợp âm ghi `class` (diatonic / applied / special / borrowed / chromatic, so với giọng **cục bộ**). Giọng chủ không đổi giọng cục bộ hay số La Mã trong vùng (Viterbi chạy độc lập). `form.sections` dùng giọng chủ khi có. Dấu vân gồm `context` nên đổi giọng → kết quả khác, không lấy nhầm cache.
