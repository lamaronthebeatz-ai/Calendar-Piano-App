# Bằng chứng, giải thích và truy vết (GĐ6)

## Bằng chứng (`src/umre/evidence/evidence.ts`)
- `SourceRecord {id, type, verification, authors, title, year, edition, publisher, place, origin, note}`.
  - `type`: `primary` | `secondary` | `tertiary` | `internal-interpretation` | `unverified-claim`.
  - `verification`: `verified` | `partially-verified` | `unverified`.
  - `origin: 'curated'`: dữ liệu thư mục **chép nguyên từ `features/sources/curated.ts`** qua `fromCurated(id, …)` (không có id trong thư mục → lỗi). `origin: 'umre'` chỉ dành cho điều không có ấn phẩm (cách hiểu của người biên soạn, quy ước của người dạy); kho từ chối nguồn xuất bản gõ tay.
- `Citation {id, sourceId, locator (tr. …, Thí dụ … hoặc null), verification, scope (luật được đỡ), note}`. Kho từ chối: trích dẫn "xác minh" hơn nguồn của nó; "đã đối chiếu" mà không có vị trí; nguồn nội bộ mà có số trang.
- Sổ luật phức điệu dùng ba nguồn: Phạm Tú Hương 1991 (`secondary` — giáo trình theo hệ Taneyev; `verified`); quy ước ra đề của người dạy (`unverified-claim`: ✱, nốt đen chuẩn bị); cách hiểu của người biên soạn (`internal-interpretation`: `end`, `no-gap`, `dis-both`, `range`, `cadence-step`, độ mạnh phách).

## Truy vết (`src/umre/explain/trace.ts`)
`TraceStep {id, seq, at (ms), taskId, component, solverId, operation, ruleIds, input, output, check, level, engineVersion}`. Ba mức: `summary` (các mốc điều phối), `detailed` (+ bước bộ giải tự báo, từng lần kiểm), `diagnostic` (+ kết quả từng bộ kiểm theo từng luật). Chỉ lưu tóm tắt (số đếm, id, trạng thái), không lưu trạng thái trung gian của tìm kiếm.

Các bước của một lần chạy: `receive`, `rulebook`, `route`, `check-input`, `strategy`, `solver:problem`, `solver:domain`, `solver:search`, `solver:blockers`, `solver:proof`, `validate`, `validate:checkers`, `decide`, `evidence`, `explain`.

**Dựng lại:** `auditResult(result)` chạy lại `decideStatus` trên đầu vào ghi ở bước `decide`, so trạng thái từng bước `validate` với kết quả, và kiểm chỉ phương án VALID được gọi là lời giải.

## Giải thích (`src/umre/explain/explain.ts`)
`explain()` chỉ đọc truy vết, kết quả kiểm và sổ luật. Mỗi `Statement` có:
- `kind`: `fact` (dữ kiện) · `rule` (luật từ sổ luật) · `inference` (suy luận) · `hypothesis` (giả thuyết — các `caveat` của luật) · `limitation` (giới hạn);
- `refs`: bước truy vết, mã luật, mã trích dẫn, chỉ số phương án — test kiểm mọi tham chiếu đều tồn tại.

Nội dung: bài toán, sổ luật, miền tìm kiếm (giả định), luật đã kiểm, các luật là giả thuyết, luật dựa nguồn chưa xác minh, quá trình tìm (số nút, số phương án), nhánh bị loại ở điểm xa nhất (luật, ô, số lần — lấy từ `blockers` của bộ giải), kết quả kiểm từng phương án, kết luận.

Kết luận theo trạng thái: chỉ `SOLVED` và `PROVEN_UNSAT` có câu loại `inference`; `UNKNOWN`, `TIMEOUT` chỉ có `limitation` ("không suy ra có hay không có lời giải"); `ERROR` nói rõ lỗi kỹ thuật không phải vô nghiệm.

`renderExplanation(e, 'basic' | 'technical' | 'academic', evidence)`: basic cho người học (không mã), technical có mã và số liệu, academic thêm loại nhận định và trích dẫn kiểu Chicago kèm trạng thái đối chiếu, gộp theo nguồn.

Chưa có mô hình ngôn ngữ nào tham gia. Nếu sau này thêm, nó chỉ được viết lại câu chữ của `text`, không thêm câu, không đổi `kind` hay `refs`.
