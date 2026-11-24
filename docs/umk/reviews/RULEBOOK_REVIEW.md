# Rà soát sổ luật — UMK Phase 1.5 (24/11/2026)

Nguồn: hai sổ luật thật lấy qua sổ đăng ký UMK (`src/umk/rulebooks.ts` → `src/umre/rulebook/{counterpoint,harmony}.ts`, sổ trích dẫn `evidence.ts`); bài thư viện các luật trích; `docs/umre/ACADEMIC_VERIFICATION.md`; `docs/notes/counterpoint.md`; quyết định của Lamar (`docs/notes/decisions.md`, 17/11). Kết quả lưu ở `src/umk/reviews.json`.

**Giới hạn của lần rà này:** bản scan giáo trình Phạm Tú Hương và sách Rimsky-Korsakov **không có trong kho mã**, nên người rà (trợ lý máy) **không đọc lại trang sách**. Mọi nhận định dựa trên trích dẫn đã ghi trong sổ luật, các bài thư viện (người biên soạn chép từ sách) và ghi chú dự án. Vì vậy không mục nào được nâng lên "nguồn nói trực tiếp" trong lần này. Test chỉ chứng minh phần mềm làm đúng như code viết, không chứng minh luật đúng học thuật.

## B1. Danh sách và số đếm

- **9 mục** chỉ dựa trên cách hiểu của người biên soạn hoặc quy ước người dạy (chưa xác minh; không tính định nghĩa và câu hỏi mở) — **khớp số liệu báo cáo trước**: `dis-both`, `star`, `star-extra`, `end`, `range`, `cadence-step`, `no-gap`, `quarter-prep`, `h.crossing`.
- Tiêu chí mở rộng của Phase 1.5 (thêm: có caveat, nguồn chỉ đối chiếu một phần, định nghĩa dựa cách hiểu) cho **30 mục**: 9 mục trên + 15 mục dưới đây + 6 câu hỏi mở của sổ phức điệu. Câu hỏi mở thứ 7 (`a.iv-v-adjacent`, sổ hoà âm) có nguồn đã đối chiếu nên không lọt tiêu chí. Cả 7 câu hỏi rà ở `OPEN_QUESTIONS.md`.
- Phát hiện về phân loại nguồn: ở UMK 1.0.0, quy ước của người dạy (`unverified-claim`) và cách hiểu của người biên soạn (`internal-interpretation`) **cùng bị ánh xạ thành `editorial`**. Phase 1.5 tách thành `unsourced-claim` và `editorial`, đồng thời ghi người đối chiếu (`checkedBy`: mọi trích dẫn "đã đối chiếu" hiện là **trợ lý máy đọc scan, chưa người duyệt**) — xem `PHASE_1_5_REPORT.md` § Phase D.

## B2–B3. Bảng tổng hợp

| Rule ID | Sổ luật | Loại | Mức căn cứ | Trạng thái |
|---|---|---|---|---|
| `dis-both` | counterpoint | soft | **EDITORIAL_CONVENTION** | cần người dạy xác nhận |
| `star` | counterpoint | hard | **EDITORIAL_CONVENTION** | cần người dạy xác nhận |
| `star-extra` | counterpoint | hard | **EDITORIAL_CONVENTION** | cần người dạy xác nhận |
| `end` | counterpoint | hard | **EDITORIAL_CONVENTION** | cần đọc nguồn gốc |
| `range` | counterpoint | soft | **INSUFFICIENT_EVIDENCE** | cần đọc nguồn gốc |
| `cadence-step` | counterpoint | soft | **INSUFFICIENT_EVIDENCE** | cần đọc nguồn gốc |
| `no-gap` | counterpoint | hard | **CONTRADICTED_BY_SOURCE** | chờ người biên soạn quyết |
| `quarter-prep` | counterpoint | exception | **EDITORIAL_CONVENTION** | cần người dạy xác nhận |
| `h.crossing` | harmony | hard | **INSUFFICIENT_EVIDENCE** | cần đọc nguồn gốc |
| `chromatic-near` | counterpoint | soft | **SUPPORTED_WITH_INTERPRETATION** | cần người dạy xác nhận |
| `repeat3` | counterpoint | hard | **SUPPORTED_WITH_INTERPRETATION** | cần người dạy xác nhận |
| `rhythm-change` | counterpoint | hard | **SUPPORTED_WITH_INTERPRETATION** | cần người dạy xác nhận |
| `perfects3` | counterpoint | hard | **SUPPORTED_WITH_INTERPRETATION** | cần người dạy xác nhận |
| `suspension` | counterpoint | hard | **SUPPORTED_WITH_INTERPRETATION** | cần người dạy xác nhận |
| `dis-weak` | counterpoint | hard | **SUPPORTED_WITH_INTERPRETATION** | cần người dạy xác nhận |
| `weak-form` | counterpoint | soft | **SUPPORTED_WITH_INTERPRETATION** | không cần làm gì |
| `crossing` | counterpoint | hard | **SUPPORTED_WITH_INTERPRETATION** | cần đọc nguồn gốc |
| `p.weak-suspension` | counterpoint | permitted | **SUPPORTED_WITH_INTERPRETATION** | cần người dạy xác nhận |
| `def.strong-beat` | counterpoint | definition | **EDITORIAL_CONVENTION** | cần đọc nguồn gốc |
| `def.perfect` | harmony | definition | **INSUFFICIENT_EVIDENCE** | cần đọc nguồn gốc |
| `h.spacing` | harmony | hard | **SUPPORTED_WITH_INTERPRETATION** | chờ người biên soạn quyết |
| `h.upper-third` | harmony | hard | **SUPPORTED_WITH_INTERPRETATION** | chờ người biên soạn quyết |
| `h.repeat-change` | harmony | soft | **CONTRADICTED_BY_SOURCE** | chờ người biên soạn quyết |
| `h.strong-weak` | harmony | soft | **SUPPORTED_WITH_INTERPRETATION** | chờ người biên soạn quyết |

## Từng luật

### `dis-both`

| Trường | Nội dung |
|---|---|
| Rule ID | `dis-both` (soft — Nghịch hai bè cùng đi) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Quãng nghịch ở phách nhẹ mà cả hai bè cùng đánh nốt mới (giáo trình không nói tới; thí dụ chỉ có một bè đi) |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | bộ kiểm: search-rules; luật mềm, trọng số 3 (chỉ xếp hạng) |
| Source | umre.internal-reading (internal-interpretation) không trang — unverified — giáo trình không nhắc; thí dụ chỉ có một bè đi |
| Locator | không có |
| Direct support | không |
| Editorial interpretation | Giáo trình không nhắc trường hợp cả hai bè cùng đánh nốt mới vào quãng nghịch ở phách nhẹ; các thí dụ chỉ có một bè đi — người biên soạn suy ra thành khuyến nghị. |
| Academic issue | Suy từ việc thí dụ không có, không từ chữ. |
| Solver impact | Chỉ xếp hạng (luật mềm, trọng số 3); không loại lời giải nào. |
| Proposed action | Giữ là khuyến nghị. Hỏi người dạy: hai bè cùng đi vào quãng nghịch phách nhẹ có được không? |
| Status | **EDITORIAL_CONVENTION** · cần người dạy xác nhận |

### `star`

| Trường | Nội dung |
|---|---|
| Rule ID | `star` (hard — Chỗ ✱) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Chỗ ✱ phải là quãng nghịch |
| Scope | nguyên thể, đề có đánh dấu ✱ |
| Current implementation | ngôn ngữ luật: star; bộ kiểm: verify, umre-rules, search-rules |
| Source | umre.exercise-convention (unverified-claim) không trang — unverified |
| Locator | không có |
| Direct support | không |
| Editorial interpretation | Quy ước ra đề của người dạy: chỗ đánh ✱ phải là quãng nghịch (notes/counterpoint.md: "quy ước đề của thầy, không phải luật sách"). |
| Academic issue | Luật bắt buộc dựa trên quy ước không có văn bản; chỉ áp khi đề có ✱. |
| Solver impact | Bắt buộc: lời giải không nghịch ở ✱ bị loại; bộ giải và ba bộ kiểm cùng áp. |
| Proposed action | Giữ. Cần người dạy xác nhận bằng văn bản (ai, khi nào, phạm vi bài tập). |
| Status | **EDITORIAL_CONVENTION** · cần người dạy xác nhận |

### `star-extra`

| Trường | Nội dung |
|---|---|
| Rule ID | `star-extra` (hard — Nghịch ngoài ✱) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Quãng nghịch ở phách mạnh nằm ngoài các chỗ ✱ |
| Scope | nguyên thể, khi đề chỉ cho nghịch ở chỗ ✱ |
| Current implementation | ngôn ngữ luật: star-extra; bộ kiểm: verify, umre-rules, search-rules |
| Source | umre.exercise-convention (unverified-claim) không trang — unverified |
| Locator | không có |
| Direct support | không |
| Editorial interpretation | Cùng quy ước ✱: ngoài các chỗ ✱ không đặt quãng nghịch ở phách mạnh. |
| Academic issue | Như star; mạnh hơn sách (sách cho nốt lưu ở phách mạnh). |
| Solver impact | Bắt buộc khi đề chỉ cho nghịch ở ✱ — thu hẹp lời giải so với sách. |
| Proposed action | Giữ. Cần người dạy xác nhận. |
| Status | **EDITORIAL_CONVENTION** · cần người dạy xác nhận |

### `end`

| Trường | Nội dung |
|---|---|
| Rule ID | `end` (hard — Đi đến hết bài) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Bè đối vị phải kéo dài đến hết bài |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | ngôn ngữ luật: end; bộ kiểm: verify, umre-native, umre-rules, search-rules |
| Source | umre.internal-reading (internal-interpretation) không trang — unverified — định nghĩa bài tập: bè đối vị đi suốt bài |
| Locator | không có |
| Direct support | không |
| Editorial interpretation | Định nghĩa dạng bài tập: bè đối vị đi suốt bài. |
| Academic issue | Chưa ghim trang giáo trình nói về dạng bài; rủi ro học thuật thấp (định nghĩa bài tập). |
| Solver impact | Bắt buộc: lời giải dừng sớm bị loại. |
| Proposed action | Tìm trang giáo trình mô tả dạng bài tập đối vị đơn giản để ghim nguồn. |
| Status | **EDITORIAL_CONVENTION** · cần đọc nguồn gốc |

### `range`

| Trường | Nội dung |
|---|---|
| Rule ID | `range` (soft — Âm vực) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Âm vực bè đối vị quá rộng |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | bộ kiểm: search-rules; luật mềm, trọng số 4 (chỉ xếp hạng) |
| Source | umre.internal-reading (internal-interpretation) không trang — unverified — không có dòng nào trong bảng kiểm toán |
| Locator | không có |
| Direct support | không |
| Editorial interpretation | Phạt âm vực bè đối vị "quá rộng" — không có dòng nào trong bảng kiểm toán giáo trình. |
| Academic issue | Không có nguồn; ngưỡng là của bộ giải. |
| Solver impact | Chỉ xếp hạng (luật mềm, trọng số 4). |
| Proposed action | Tìm trong chương giai điệu phức điệu (tr. 5–7) có giới hạn âm vực không; không có thì người biên soạn quyết giữ làm quy ước hay bỏ. |
| Status | **INSUFFICIENT_EVIDENCE** · cần đọc nguồn gốc |

### `cadence-step`

| Trường | Nội dung |
|---|---|
| Rule ID | `cadence-step` (soft — Kết liền bậc) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Nên vào nốt kết bằng liền bậc |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | bộ kiểm: search-rules; luật mềm, trọng số 5 (chỉ xếp hạng) |
| Source | umre.internal-reading (internal-interpretation) không trang — unverified — không có dòng nào trong bảng kiểm toán |
| Locator | không có |
| Direct support | không |
| Editorial interpretation | "Nên vào nốt kết bằng liền bậc" — không có dòng nào trong bảng kiểm toán. |
| Academic issue | Không có nguồn trong truyền thống của sổ luật này; không được mượn từ truyền thống khác (Fux) để làm căn cứ. |
| Solver impact | Chỉ xếp hạng (luật mềm, trọng số 5). |
| Proposed action | Tìm trang giáo trình; không có thì người biên soạn quyết. |
| Status | **INSUFFICIENT_EVIDENCE** · cần đọc nguồn gốc |

### `no-gap`

| Trường | Nội dung |
|---|---|
| Rule ID | `no-gap` (hard — Không chỗ trống) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Bè đối vị đi liền, không có chỗ trống (dấu lặng) giữa chừng |
| Scope | bè đối vị (bè tự do) |
| Current implementation | ngôn ngữ luật: no-gap; bộ kiểm: verify, umre-native, umre-rules |
| Source | umre.internal-reading (internal-interpretation) không trang — unverified — miền tìm kiếm của bộ giải: bè đối vị không dấu lặng; giáo trình (tr. 7) chỉ khuyên tránh nhiều dấu lặng |
| Locator | không có |
| Direct support | một phần |
| Editorial interpretation | Bộ giải và các bộ kiểm cấm MỌI dấu lặng giữa chừng trong bè đối vị (miền tìm kiếm của bộ giải). |
| Academic issue | Giáo trình tr. 7 (Thí dụ 14) chỉ xếp "dùng nhiều dấu lặng" vào mục "Không nên". Theo quyết định 17/11 của Lamar, chữ "không nên/tránh" là khuyến nghị. Luật bắt buộc hiện tại mạnh hơn nguồn: bài làm của học viên có một dấu lặng bị chấm là sai luật bắt buộc. |
| Solver impact | Bắt buộc ở verify, umre-native, umre-rules: bài có dấu lặng bị loại hoặc bị chấm vi phạm. Đổi luật sẽ đổi miền tìm kiếm của bộ giải (thay đổi lớn). |
| Proposed action | KHÔNG tự sửa. Người biên soạn chọn: (a) giữ, nhưng ghi rõ là giới hạn miền tìm kiếm của máy chứ không phải luật sách, và chấm bài học viên không coi là vi phạm bắt buộc; (b) đổi thành khuyến nghị "nhiều dấu lặng" và cho bộ giải tìm cả dấu lặng; (c) giữ nguyên. |
| Status | **CONTRADICTED_BY_SOURCE** · chờ người biên soạn quyết |

### `quarter-prep`

| Trường | Nội dung |
|---|---|
| Rule ID | `quarter-prep` (exception) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Nốt đen được làm nốt chuẩn bị (và được nối sang) nốt lưu ở phách mạnh |
| Scope | chỉ khi đề bật tuỳ chọn này; chỉ nối qua vạch nhịp vào quãng nghịch |
| Current implementation | ngoại lệ nới tie, dis-strong; bật bởi task-option |
| Source | umre.exercise-convention (unverified-claim) không trang — unverified |
| Locator | không có |
| Direct support | không (sách nói ngược lại) |
| Editorial interpretation | Ngoại lệ do người dạy cho phép: nốt đen được làm nốt chuẩn bị, chỉ khi đề bật tuỳ chọn. |
| Academic issue | Giáo trình tr. 10 nói "không dùng nốt đen làm nốt chuẩn bị"; ngoại lệ là quy ước của người dạy, chưa có văn bản. |
| Solver impact | Chỉ có hiệu lực khi đề bật tuỳ chọn quarterPrep; mặc định luật sách giữ nguyên. |
| Proposed action | Giữ là tuỳ chọn. Cần người dạy xác nhận phạm vi (bài nào, cấp nào). |
| Status | **EDITORIAL_CONVENTION** · cần người dạy xác nhận |

### `h.crossing`

| Trường | Nội dung |
|---|---|
| Rule ID | `h.crossing` (hard) |
| Rulebook | `harmony.four-part.rimsky-korsakov-1886@2` |
| Tradition | Hoà âm thực hành trường Petersburg — Rimsky-Korsakov 1886 |
| Statement | Bè dưới không vượt lên trên bè trên |
| Scope | mọi cặp bè |
| Current implementation | bộ kiểm hoà âm: umre-rules, harmony-native (validation/harmony.ts) |
| Source | umre.internal-reading (internal-interpretation) không trang — unverified — đoạn sách được dẫn không nói; quy ước chung của bài tập bốn bè |
| Locator | không có |
| Direct support | chưa rõ |
| Editorial interpretation | "Bè dưới không vượt lên trên bè trên" — đoạn Rimsky-Korsakov được dẫn không nói; ghi chú nguồn: "quy ước chung của bài tập bốn bè". |
| Academic issue | Bài luat-hoa-am-bon-be nêu luật này nhưng đoạn đó không có trích dẫn trang. |
| Solver impact | Bắt buộc ở umre-rules, harmony-native: phương án bắt chéo bè bị loại. |
| Proposed action | Tìm trang Rimsky-Korsakov (chương xếp bè, § 2–§ 11) có nói về bắt chéo bè không; ghim trang hoặc ghi là quy ước. |
| Status | **INSUFFICIENT_EVIDENCE** · cần đọc nguồn gốc |

### `chromatic-near`

| Trường | Nội dung |
|---|---|
| Rule ID | `chromatic-near` (soft — Biến âm cách xa) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Âm nguyên và âm biến đứng gần nhau — giáo trình: "phải ở xa nhau" |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | bộ kiểm: search-rules; luật mềm, trọng số 4 (chỉ xếp hạng) |
| Source | pham-tu-huong-1991 (secondary) tr. 6 — verified bởi assistant |
| Locator | tr. 6 |
| Direct support | có (không định lượng) |
| Editorial interpretation | "Cách một nốt" được coi là gần. — caveat trong sổ luật: Giáo trình nói "phải ở xa nhau" nhưng không định lượng; cách một nốt được coi là gần (cách hiểu của người biên soạn). |
| Academic issue | Sách: âm nguyên và âm biến "phải ở xa nhau", không nói bao xa. |
| Solver impact | Luật mềm: chỉ xếp hạng. |
| Proposed action | Giữ; ngưỡng do người dạy chốt. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · cần người dạy xác nhận |

### `repeat3`

| Trường | Nội dung |
|---|---|
| Rule ID | `repeat3` (hard — Nhắc nốt ba lần) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Nhắc một nốt ba lần liền |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | ngôn ngữ luật: repeat3; bộ kiểm: verify, umre-native, umre-rules, search-rules |
| Source | pham-tu-huong-1991 (secondary) tr. 7 — partially-verified bởi assistant — chữ và Thí dụ 12 lệch nhau |
| Locator | tr. 7 |
| Direct support | có (chữ và thí dụ lệch nhau) |
| Editorial interpretation | Bắt buộc từ ba lần liền; hai lần là khuyến nghị. — caveat trong sổ luật: Bắt buộc từ ba lần liền là cách đọc của người biên soạn: lời văn và Thí dụ 12 không khớp nhau. |
| Academic issue | Lời văn tr. 7 và Thí dụ 12 không khớp (câu hỏi mở a.repeat-count). |
| Solver impact | Bắt buộc từ ba lần. |
| Proposed action | Chờ giải câu hỏi a.repeat-count. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · cần người dạy xác nhận |

### `rhythm-change`

| Trường | Nội dung |
|---|---|
| Rule ID | `rhythm-change` (hard — Đổi trường độ) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Đổi sang nốt ngắn hơn ở phách mạnh mà không chuẩn bị bằng nốt lưu |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | ngôn ngữ luật: rhythm-change; bộ kiểm: verify, umre-rules, search-rules |
| Source | pham-tu-huong-1991 (secondary) tr. 8 — verified bởi assistant |
| Locator | tr. 8 |
| Direct support | có (tr. 8) |
| Editorial interpretation | Chỉ áp ở phách đầu ô. — caveat trong sổ luật: Mới áp ở phách đầu ô; các phách khác chưa cài (cần xác minh). |
| Academic issue | Sách: "không được thay đổi đột ngột, nhất là ở phách mạnh" — có thể áp cả phách khác (câu hỏi mở a.rhythm-change-beats). |
| Solver impact | Bắt buộc ở phách đầu ô; phách khác chưa kiểm. |
| Proposed action | Chờ giải câu hỏi a.rhythm-change-beats. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · cần người dạy xác nhận |

### `perfects3`

| Trường | Nội dung |
|---|---|
| Rule ID | `perfects3` (hard — Nhiều quãng hoàn toàn liền) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Nhiều quãng thuận hoàn toàn liền nhau (từ ba quãng) — giáo trình: "không được phép" |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | ngôn ngữ luật: perfects3; bộ kiểm: verify, umre-native, umre-rules, search-rules |
| Source | pham-tu-huong-1991 (secondary) tr. 9 — partially-verified bởi assistant — "nhiều" không định lượng |
| Locator | tr. 9 |
| Direct support | có ("nhiều" không định lượng) |
| Editorial interpretation | Ngưỡng ba quãng. — caveat trong sổ luật: Giáo trình cấm "nhiều" quãng thuận hoàn toàn liền nhau; ngưỡng ba quãng là cách hiểu của người biên soạn. |
| Academic issue | Câu hỏi mở a.many-perfects. |
| Solver impact | Bắt buộc từ ba quãng; hai quãng là khuyến nghị. |
| Proposed action | Chờ giải câu hỏi a.many-perfects. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · cần người dạy xác nhận |

### `suspension`

| Trường | Nội dung |
|---|---|
| Rule ID | `suspension` (hard — Nốt lưu) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Nốt lưu sai luật |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | bộ kiểm: verify, umre-rules, search-rules |
| Source | pham-tu-huong-1991 (secondary) tr. 10 — verified bởi assistant; pham-tu-huong-1991 (secondary) tr. 11 — verified bởi assistant |
| Locator | tr. 10, tr. 11 |
| Direct support | có (tr. 10–11) |
| Editorial interpretation | Quãng nghịch ngoài sơ đồ 2 đang được cho phép; giải quyết có trang trí theo Thí dụ 30–31. — caveat trong sổ luật: Nốt lưu ở các quãng nghịch ngoài sơ đồ 2 đang được cho phép (sơ đồ không nhắc tới) — cần xác minh. Giải quyết có trang trí: nốt nghịch NHẢY (không đi liền bậc) sang nốt thuận với nốt tự do — nốt nhảy là nốt đen như ở cả hai thí dụ 30–31 — rồi xuống liền bậc; bè tự do đứng yên cho tới lúc giải quyết. |
| Academic issue | Câu hỏi mở a.suspension-intervals. |
| Solver impact | Bắt buộc. |
| Proposed action | Chờ giải câu hỏi a.suspension-intervals. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · cần người dạy xác nhận |

### `dis-weak`

| Trường | Nội dung |
|---|---|
| Rule ID | `dis-weak` (hard — Nghịch phách nhẹ) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Quãng nghịch ở phách nhẹ chỉ được là nốt lướt, nốt thêu, nốt sớm hay nốt thoát, trước và sau là quãng thuận |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | ngôn ngữ luật: dis-weak; bộ kiểm: verify, umre-rules, search-rules |
| Source | pham-tu-huong-1991 (secondary) tr. 11–12 — verified bởi assistant |
| Locator | tr. 11–12 |
| Direct support | có (tr. 11–12) |
| Editorial interpretation | Nốt lưu phách nhẹ được chấp nhận; nốt sớm phải đúng cao độ và đến bằng liền bậc. — caveat trong sổ luật: Nốt lưu ở phách nhẹ (phách 2 của nhịp 2/2) được chấp nhận vì giáo trình nói quãng nghịch phách mạnh "chủ yếu" là nốt lưu; giữa hai phách chỉ chấp nhận nốt lướt, thêu, sớm, thoát. Nốt sớm phải đúng cao độ của nốt sau và đến bằng liền bậc (sách chỉ nêu nốt thoát là dạng có bước nhảy). Cách hiểu của người biên soạn — cần xác minh. |
| Academic issue | Chữ "chủ yếu" được đọc thành cho phép; chi tiết nốt sớm là cách hiểu. |
| Solver impact | Bắt buộc. |
| Proposed action | Người dạy xác nhận hai điểm diễn giải. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · cần người dạy xác nhận |

### `weak-form`

| Trường | Nội dung |
|---|---|
| Rule ID | `weak-form` (soft — Hình nghịch phách nhẹ) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Nốt nghịch phách nhẹ khác các thí dụ của giáo trình (ở phách mà không phải nốt lướt, hoặc dài hơn nốt đen mà không phải nốt trắng lướt) — giáo trình không nêu thành luật |
| Scope | đối vị đơn giản hai bè và từng cặp bè của ba – bốn bè, mọi bản |
| Current implementation | bộ kiểm: search-rules; luật mềm, trọng số 3 (chỉ xếp hạng) |
| Source | pham-tu-huong-1991 (secondary) Thí dụ 25–28 — partially-verified bởi assistant — chỉ thấy trong thí dụ, không thành chữ |
| Locator | Thí dụ 25–28 |
| Direct support | chỉ trong thí dụ |
| Editorial interpretation | Hình nốt nghịch phách nhẹ theo Thí dụ 25–28. |
| Academic issue | Sách không nêu thành chữ; đã hạ thành khuyến nghị (17/11). |
| Solver impact | Luật mềm. |
| Proposed action | Không cần đổi; giữ khuyến nghị. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · không cần làm gì |

### `crossing`

| Trường | Nội dung |
|---|---|
| Rule ID | `crossing` (hard — Chéo bè) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Hai bè chéo nhau (ở biến thể: khoảng cách ở nguyên thể vượt giới hạn của Iv) |
| Scope | mọi bản (nguyên thể và biến thể) |
| Current implementation | ngôn ngữ luật: crossing; bộ kiểm: verify, umre-native, umre-rules, search-rules |
| Source | pham-tu-huong-1991 (secondary) không trang — partially-verified bởi assistant — bài chuyển động chiều dọc; chưa ghim số trang |
| Locator | không có |
| Direct support | có (chưa ghim trang) |
| Editorial interpretation | Ở biến thể: chéo bè = vượt giới hạn Iv. |
| Academic issue | Trích dẫn chưa có số trang (bài chuyển động chiều dọc). |
| Solver impact | Bắt buộc ở mọi bản. |
| Proposed action | Ghim trang chương chuyển động chiều dọc (tr. 30–33). |
| Status | **SUPPORTED_WITH_INTERPRETATION** · cần đọc nguồn gốc |

### `p.weak-suspension`

| Trường | Nội dung |
|---|---|
| Rule ID | `p.weak-suspension` (permitted) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Nốt lưu ở phách nhẹ (phách 2 của nhịp 2/2) là hình nghịch được phép |
| Scope | nhịp 2/2 trở lên |
| Current implementation | cho phép trong dis-weak |
| Source | pham-tu-huong-1991 (secondary) tr. 11–12 — partially-verified bởi assistant — sách nói nghịch phách mạnh "chủ yếu" là nốt lưu |
| Locator | tr. 11–12 |
| Direct support | một phần |
| Editorial interpretation | Đọc "chủ yếu là nốt lưu" thành cho phép nốt lưu ở phách nhẹ. |
| Academic issue | Như dis-weak. |
| Solver impact | Cho phép (nới dis-weak). |
| Proposed action | Người dạy xác nhận. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · cần người dạy xác nhận |

### `def.strong-beat`

| Trường | Nội dung |
|---|---|
| Rule ID | `def.strong-beat` (definition) |
| Rulebook | `counterpoint.strict.pham-tu-huong-1991@2` |
| Tradition | Phức điệu nghiêm khắc hệ Taneyev — Phạm Tú Hương 1991 |
| Statement | Phách mạnh = phách đầu ô nhịp (mức 3 trong mã); phách nhẹ = các phách còn lại |
| Scope | — |
| Current implementation | định nghĩa đọc làm dữ liệu |
| Source | umre.internal-reading (internal-interpretation) không trang — unverified — cách bộ giải đặt mức phách (model.strength); chưa đối chiếu chữ của sách |
| Locator | không có |
| Direct support | không |
| Editorial interpretation | Phách mạnh = phách đầu ô (mức của bộ giải). — caveat trong sổ luật: Độ mạnh phách là quy ước của bộ giải, chưa đối chiếu nguyên văn giáo trình. |
| Academic issue | Chưa đối chiếu chữ sách; nhịp 4/4 có phách 3 nửa mạnh không được tính. |
| Solver impact | Mọi luật phân biệt phách mạnh/nhẹ đọc định nghĩa này. |
| Proposed action | Ghim trang giáo trình về phách mạnh, nhẹ hoặc ghi là quy ước. |
| Status | **EDITORIAL_CONVENTION** · cần đọc nguồn gốc |

### `def.perfect`

| Trường | Nội dung |
|---|---|
| Rule ID | `def.perfect` (definition) |
| Rulebook | `harmony.four-part.rimsky-korsakov-1886@2` |
| Tradition | Hoà âm thực hành trường Petersburg — Rimsky-Korsakov 1886 |
| Statement | Quãng thuận hoàn toàn: đồng âm, 5 đúng, 8 đúng (và quãng kép) |
| Scope | — |
| Current implementation | bộ kiểm hoà âm: umre-rules, harmony-native (validation/harmony.ts); định nghĩa đọc làm dữ liệu |
| Source | umre.internal-reading (internal-interpretation) không trang — unverified — định nghĩa dùng cho luật quãng song song |
| Locator | không có |
| Direct support | chưa ghim |
| Editorial interpretation | Quãng thuận hoàn toàn: đồng âm, 5 đúng, 8 đúng (và quãng kép). |
| Academic issue | Định nghĩa thông dụng nhưng trong sổ luật hoà âm chưa có trang Rimsky-Korsakov. |
| Solver impact | Luật quãng song song đọc định nghĩa này. |
| Proposed action | Ghim trang Rimsky-Korsakov. |
| Status | **INSUFFICIENT_EVIDENCE** · cần đọc nguồn gốc |

### `h.spacing`

| Trường | Nội dung |
|---|---|
| Rule ID | `h.spacing` (hard) |
| Rulebook | `harmony.four-part.rimsky-korsakov-1886@2` |
| Tradition | Hoà âm thực hành trường Petersburg — Rimsky-Korsakov 1886 |
| Statement | Ba bè trên cách nhau quãng 3, 4 (xếp gần) hoặc quãng 5, 6 (xếp xa): hai bè trên liền nhau không xa hơn quãng 6 |
| Scope | soprano–alto, alto–tenor |
| Current implementation | bộ kiểm hoà âm: umre-rules, harmony-native (validation/harmony.ts) |
| Source | rimsky-korsakov-1886 (primary) tr. 20 — verified bởi assistant |
| Locator | tr. 20 |
| Direct support | có (tr. 20) |
| Editorial interpretation | Đọc xếp gần (3, 4) / xếp xa (5, 6) thành giới hạn "không xa hơn quãng 6". — caveat trong sổ luật: Sách mô tả xếp gần (3, 4) và xếp xa (5, 6); đọc thành giới hạn "không xa hơn quãng 6" giữa hai bè trên liền nhau là cách hiểu của người biên soạn. |
| Academic issue | Bài luat-hoa-am-bon-be lại viết "không quá một quãng 8". Hai mức khác nhau trong cùng app. |
| Solver impact | Bắt buộc: phương án cách quãng 7 – 8 giữa hai bè trên bị loại, dù bài thư viện cho phép tới quãng 8. |
| Proposed action | Người biên soạn đối chiếu tr. 20 và chọn một mức; sau đó sửa bài hoặc sửa luật (thay đổi logic → tăng phiên bản sổ luật). |
| Status | **SUPPORTED_WITH_INTERPRETATION** · chờ người biên soạn quyết |

### `h.upper-third`

| Trường | Nội dung |
|---|---|
| Rule ID | `h.upper-third` (hard — Bè trên không đi xa hơn quãng 3) |
| Rulebook | `harmony.four-part.rimsky-korsakov-1886@2` |
| Tradition | Hoà âm thực hành trường Petersburg — Rimsky-Korsakov 1886 |
| Statement | Nối hai hợp âm ba khác bậc khi nhân đôi âm gốc: không bè trên nào đi xa hơn quãng 3 |
| Scope | alto, tenor; hai hợp âm khác bậc liền nhau |
| Current implementation | bộ kiểm hoà âm: umre-rules, harmony-native (validation/harmony.ts) |
| Source | rimsky-korsakov-1886 (primary) tr. 21 — verified bởi assistant |
| Locator | tr. 21 |
| Direct support | có (tr. 21) |
| Editorial interpretation | Không xét soprano (giai điệu cho sẵn). — caveat trong sổ luật: Soprano là giai điệu cho sẵn nên không xét ở đây (bước nhảy của giai điệu do § 13 luật 3 quy định) — cách hiểu của người biên soạn. |
| Academic issue | Phạm vi là cách hiểu. |
| Solver impact | Bắt buộc cho alto, tenor. |
| Proposed action | Người biên soạn xác nhận phạm vi. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · chờ người biên soạn quyết |

### `h.repeat-change`

| Trường | Nội dung |
|---|---|
| Rule ID | `h.repeat-change` (soft — Nốt lặp đổi hợp âm hoặc cách xếp) |
| Rulebook | `harmony.four-part.rimsky-korsakov-1886@2` |
| Tradition | Hoà âm thực hành trường Petersburg — Rimsky-Korsakov 1886 |
| Statement | Nốt giai điệu lặp lại thì đổi hợp âm hoặc đổi cách xếp |
| Scope | bài phối hoà âm giai điệu |
| Current implementation | bộ kiểm hoà âm: umre-rules, harmony-native (validation/harmony.ts); luật mềm, trọng số 3 (chỉ xếp hạng) |
| Source | rimsky-korsakov-1886 (primary) tr. 23 — verified bởi assistant |
| Locator | tr. 23 |
| Direct support | có (tr. 23, dạng bắt buộc) |
| Editorial interpretation | Bộ máy coi là khuyến nghị. — caveat trong sổ luật: Sách nêu như một điều phải làm; bộ máy coi là khuyến nghị để xếp hạng vì giữ nguyên cả hợp âm lẫn cách xếp không sinh lỗi dẫn giọng nào — cách hiểu của người biên soạn. |
| Academic issue | Sách nêu như điều phải làm; triển khai YẾU hơn nguồn (lời giải giữ nguyên hợp âm và xếp bè vẫn được nhận). |
| Solver impact | Chỉ xếp hạng, nên phương án sai theo sách vẫn có thể hiện ra. |
| Proposed action | KHÔNG tự sửa. Người biên soạn chọn: nâng thành bắt buộc (đổi logic, tăng phiên bản sổ luật) hay giữ và ghi lý do. |
| Status | **CONTRADICTED_BY_SOURCE** · chờ người biên soạn quyết |

### `h.strong-weak`

| Trường | Nội dung |
|---|---|
| Rule ID | `h.strong-weak` (soft — Không giữ hợp âm từ phách nhẹ sang phách mạnh) |
| Rulebook | `harmony.four-part.rimsky-korsakov-1886@2` |
| Tradition | Hoà âm thực hành trường Petersburg — Rimsky-Korsakov 1886 |
| Statement | Không đặt ở phách mạnh cùng hợp âm vừa có ở phách nhẹ trước đó |
| Scope | bài phối hoà âm giai điệu |
| Current implementation | bộ kiểm hoà âm: umre-rules, harmony-native (validation/harmony.ts); luật mềm, trọng số 4 (chỉ xếp hạng) |
| Source | rimsky-korsakov-1886 (primary) tr. 23 — verified bởi assistant |
| Locator | tr. 23 |
| Direct support | có (tr. 23) |
| Editorial interpretation | Phách mạnh = phách đầu ô; ở 4/4 phách 3 coi là nhẹ. — caveat trong sổ luật: Phách mạnh = phách đầu ô (nhịp 4/4: phách 3 coi là nhẹ) — cách hiểu của người biên soạn. |
| Academic issue | Định nghĩa phách mạnh là cách hiểu. |
| Solver impact | Luật mềm. |
| Proposed action | Người biên soạn xác nhận cách tính phách. |
| Status | **SUPPORTED_WITH_INTERPRETATION** · chờ người biên soạn quyết |

## Phát hiện cần chú ý

1. **`no-gap` mạnh hơn nguồn.** Giáo trình tr. 7 chỉ xếp "dùng nhiều dấu lặng" vào mục "Không nên". Theo quyết định 17/11 của Lamar, chữ "không nên/tránh" là khuyến nghị. Thế nhưng bài làm của học viên có một dấu lặng đang bị chấm là vi phạm luật bắt buộc.
2. **`h.repeat-change` yếu hơn nguồn.** Sách nêu như điều phải làm, bộ máy chỉ dùng để xếp hạng.
3. **`h.spacing` lệch với bài thư viện.** Sổ luật cấm hai bè trên liền nhau xa hơn quãng 6, còn bài `luat-hoa-am-bon-be` viết "không quá một quãng 8".
4. **Đối chiếu nguồn chỉ là trợ lý máy.** Mọi trích dẫn "đã đối chiếu" của hai sổ luật là trợ lý máy đọc bản scan. Chưa luật nào có người dạy hay chuyên gia xác nhận.

Không luật nào bị sửa, xoá, đổi bắt buộc ↔ khuyến nghị, đổi phạm vi hay đổi logic trong Phase 1.5. Bộ đo UMRE `--check` cho kết quả giống lần đo chuẩn.
