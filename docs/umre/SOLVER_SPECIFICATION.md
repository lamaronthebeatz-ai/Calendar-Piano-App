# Đặc tả bộ giải và điều phối (GĐ7)

## Hợp đồng bộ giải (`orchestration/solver.ts`)
`Solver {descriptor, available?(), checkInput(task), solve(task, {timeMs, maxSolutions, signal})}`.

`SolverDescriptor`: `id`, `version` (x.y.z), `domain`, `taskTypes`, `representations` (`umre.score@1`), `rulebooks` [{id, versions}], `input`/`output` {schema, description}, `capabilities` {`proofOfUnsat`, `multipleSolutions`, `cancellation`: none | cooperative}, `defaults` {timeMs, maxSolutions}, `limits` {maxTimeMs, maxSolutions}, `requires.umre` (major.minor), `priority`.

`SolverOutput`: `status` solved | unsat | unknown | timeout, `solutions` (tổng phổ UMRE), `proof`, `reason`, `diagnostics`, `steps` (vào truy vết). Bộ giải **không** chứng nhận lời giải.

## Sổ đăng ký (`registry.ts`)
Đăng ký (từ chối mô tả sai, trùng id@version, khác major.minor của máy), gỡ, tắt/bật kèm lý do, tra theo id (bản mới nhất) hoặc id@version, `match(task, rulebook)` → ứng viên (ưu tiên, rồi phiên bản mới) + lý do loại từng bộ.

## Bộ điều phối (`orchestrator.ts`)
12 bước ở `ARCHITECTURE.md`. Trạng thái chạy:

| | Khi nào |
|---|---|
| `SOLVED` | bộ giải báo solved **và** bộ kiểm độc lập công nhận ≥ 1 phương án VALID |
| `PROVEN_UNSAT` | bộ giải báo unsat, có năng lực chứng minh, không trả phương án |
| `UNKNOWN` | bộ giải báo solved mà không phương án nào VALID; báo unknown; báo unsat mà không có năng lực chứng minh |
| `TIMEOUT` | bộ giải báo hết giờ, hoặc không trả lời trong thời hạn + phần dư |
| `ERROR` | không bộ giải / bộ kiểm / sổ luật; đầu vào sai; bộ giải ném lỗi (`solver-error`), hết tài nguyên (`resource`), trả sai hợp đồng (`output-schema`) — **không bao giờ là vô nghiệm** |
| `CANCELLED` | tín hiệu huỷ trước hoặc trong khi giải |

`decideStatus` là hàm thuần, đầu vào ghi trong bước `decide` của truy vết; `auditResult` dựng lại và so.

## Bộ giải đã tích hợp
| id | gọi | ánh xạ trạng thái |
|---|---|---|
| `counterpoint.two-voice.search@1.0.0` | `solveMany` (như worker của trang) | valid → solved; unsat → unsat (bằng chứng: ✱ bất khả hoặc đã duyệt hết miền); unknown → unknown nếu `disputed` > 0, còn lại timeout |
| `counterpoint.multi-voice.search@1.0.0` | `msolve` | như trên |

Cả hai chạy đồng bộ tới giới hạn giờ của chính chúng (`cancellation: 'none'`): huỷ giữa chừng chỉ có tác dụng với bộ giải bất đồng bộ.
