# Nền tảng tri thức (đồ thị, nguồn của tôi, luận điểm) — `src/features/knowledge/`

Đợt 16/11/2026: biến các phần sẵn có (thư viện bài, `/explore`, `/sources`, `/research`, `/brain`, `/analyze`) thành **một mạng chung**, không viết lại phần nào, không server đồ thị.

## Mã thống nhất (`ids.ts`)
- `"<tiền tố>:<mã>"`, mở rộng ngữ pháp `[[ ]]` của sổ tay (khoá cũ `a: n: p: s:` vẫn hợp lệ): `a:` bài thư viện (người, thời kỳ, thể loại, hình thức, trường phái, khái niệm, nhạc cụ, phân tích — **loại đọc từ bài**: `articleKind`, theo `person`/category/slug), `w:` tác phẩm (QID Wikidata), `s:` nguồn thư mục thư viện, `ms:` tài liệu người dùng nhập, `p:` đề tài, `n:` ghi chú, `c:` luận điểm, `e:` bằng chứng, `t:` mục Grove, `m:` phương pháp phân tích.
- `hrefOf` trang riêng của đối tượng; `graphHref` → `/graph?id=…`. Người không có bài (page false) mở `/explore?p=`.

## Quan hệ (`relations.ts`, `graph.ts`)
- Mỗi cạnh lưu một lần (from → to), đọc từ cả hai đầu (`RELATIONS[rel].out / .in`, `around`, `grouped`). Thêm quan hệ = thêm một dòng `RELATIONS`.
- **Nguồn gốc mỗi cạnh** (`Provenance`), hiện thành nhãn trên trang: `library` (người biên soạn ghi, có nguồn ở bài), `wikidata` (thu lúc build, chưa đối chiếu từng mục), `computed` (app suy ra: nhóm thể loại đọc từ tên tác phẩm, phương pháp phân tích), `research` (người dùng ghi — nhận định cho tới khi kiểm). **Không trộn**: dữ liệu xác thực / kết quả tính toán / nhận định nghiên cứu luôn tách nhãn.
- Bộ dựng từ dữ liệu thật: `peopleEdges` (thời kỳ `PERIOD_ARTICLE`, chủ đề), `workEdges` (tác giả, bài về tác phẩm, thể loại `GENRE_ARTICLE`), `lineageEdges` (`relations.json`: thầy–trò P1066/P802, ảnh hưởng P737 — chỉ người trong thư viện), `bibliographyEdges` (`uses` + `pages` của sources.json), `schoolEdges` (`terms/schools.ts`), `methodEdges`, `articleEdges` (liên kết và liên kết ngược **từ JSON của bài đang mở**, nạp lười), `userEdges` (luận điểm, bằng chứng, tài liệu, liên kết, đề tài, ghi chú `[[ ]]`).
- `useGraph.ts`: dữ liệu build nạp một lần (`loadBase`) và lập chỉ mục `EdgeIndex` (theo cả hai đầu) một lần; dữ liệu người dùng lập lại khi đổi. `label`, `exists`.
- `check-links` kiểm mọi slug của `PERIOD_ARTICLE`, `GENRE_ARTICLE`, `METHODS` (đổi tên bài là build hỏng, không thành link chết).

## Kho nguồn – luận điểm (`model.ts`, `store.ts`)
- IndexedDB riêng **`musicology-knowledge`** (Dexie v1: `rows` {id = `bảng/mã`, table, data}, `meta`), **không đụng `db.ts`**. Mỗi bản ghi niêm phong `enc1:` khi kho mở (như thân bản nhạc ở `/analyze`); kho khoá mà có dòng niêm phong → `knowledgeLocked()`, mọi thao tác ghi bị chặn (không ghi đè dữ liệu chưa đọc được).
- Bảng: `sources` (loại sách/chương/bài báo/luận văn/bản nhạc/lưu trữ/bản thu/web; tác giả, năm, NXB, nơi, lần in, tạp chí, tập, trang, ISBN, DOI, URL, nơi lưu trữ; sơ cấp/thứ cấp; **kiểm chứng** `unverified | record | original | disputed` + `checkedWith` bắt buộc khi đánh dấu đã đối chiếu; `libRef` → nguồn thư viện; `about` mã đối tượng), `excerpts` (trang + câu trích ngắn / ghi chú), `claims` (luận điểm, đề tài, `about`, trạng thái do người dùng chọn), `evidence` (luận điểm, ủng hộ/phản bác/bối cảnh, nguồn `s:`/`ms:`, trang, câu trích, `checked`), `links`.
- **Lược đồ có phiên bản**: `v` trên từng bản ghi + `migrate(table, raw)` (v0 → v1; bản ghi của bản build mới hơn giữ nguyên). Trước khi viết lại dòng sang dạng mới: chép dòng thô vào `meta` (`pre-v<n>-<thời điểm>`); nhập sao lưu kiểu "thay thế" cũng chép trước (`pre-import-…`). Thêm bước chuyển đổi = thêm nhánh trong `migrate` + tăng `SCHEMA_VERSION`.
- App **không tự điền metadata**: ô trống để trống; ISBN chỉ kiểm số kiểm (`isbnOk`), DOI chỉ kiểm cú pháp (`doiOf`) — không tra mạng, không đoán.
- Sao lưu: `BackupPayload.version` 3 thêm `knowledge` (KnowledgeDump `{schema, …bảng}`); file v2 nhập như cũ (không có `knowledge` thì không đụng kho).

## Kiểm luận điểm (`check.ts`)
- Chuỗi **Luận điểm → Bằng chứng → Trích dẫn → Tài liệu gốc → Trang** (`chainOf`, giao diện `ClaimChain.tsx`). `checkClaim`: không có bằng chứng (lỗi), không có bằng chứng ủng hộ (lỗi), tài liệu không còn (lỗi), thiếu trang, tài liệu chưa đối chiếu / có nghi vấn, đánh dấu "đã vững" mà còn phản bác (cảnh báo), câu trích chưa đối chiếu bản gốc, chỉ có nguồn thứ cấp (ghi chú). `unsupported` = luận điểm chưa có nguồn đứng được.
- `uncitedParagraphs(draft)`: đoạn ≥ 160 ký tự trong bản nháp đề tài không có `[^…]` (bỏ tiêu đề, trích, danh sách, bảng).
- Trích dẫn tài liệu tự nhập: `cite.ts` `citeMine` đi qua `citeSource` của thư viện (Chicago/APA/BibTeX) + DOI/ISBN/trang/nơi lưu trữ nếu có.

## Giao diện
- `/graph?id=` (`GraphPage.tsx`): ô tìm (bài, tác phẩm, tài liệu, luận điểm, hoặc dán mã), thẻ đối tượng (tác phẩm: tác giả, năm, giọng, danh mục, thể loại, nguồn dữ kiện; phương pháp: cách làm, căn cứ, độ đúng đo, giới hạn), nhóm quan hệ hai chiều có nhãn nguồn gốc, chú giải nguồn gốc. Mục trong thanh bên máy tính + `ResearchTools`.
- `/sources/cua-toi` (`MySources.tsx`): thêm/sửa tài liệu, cảnh báo ISBN/DOI/đối chiếu, trích dẫn 3 kiểu, trích đoạn theo trang, "dùng cho", xoá báo trước nếu tài liệu đang làm nguồn của bằng chứng.
- `/research/:id` tab **Luận điểm** (`ProjectClaims.tsx`): thêm luận điểm, bằng chứng từ tài liệu của bạn / nguồn thư viện của đề tài / mã thư viện bất kỳ, chuỗi + cảnh báo, đoạn nháp chưa trích nguồn; nút "Đồ thị đề tài".
- Lối vào: trang bài (dưới tiêu đề), hồ sơ `/explore` + từng tác phẩm Wikidata, trang một nguồn thư viện, `/analyze` khối **Phương pháp và căn cứ** (`MethodsPanel.tsx`, nội dung `methods.ts` lấy từ `notes/analyze.md`, gắn nhãn "kết quả tính toán").

## Test
- `knowledge.test.ts` (mã, phân loại bài, chuyển đổi lược đồ, gộp, ISBN/DOI, kiểm luận điểm, đoạn chưa trích, đồ thị từ dữ liệu mẫu, trích dẫn) — dữ liệu mẫu trong test là giả rõ ràng ("Sách mẫu kiểm thử", DOI 10.1000/…).
- `tests/knowledge.spec.ts` (đồ thị Mozart → tác phẩm → tác giả/thể loại, phương pháp; nguồn của tôi → luận điểm → bằng chứng, còn sau khi tải lại; kho mở thì dòng IndexedDB là `enc1:`); smoke thêm 4 trang.

## Chưa làm / có thể làm tiếp
- Sao lưu: phần đọc/gộp (`readDump`, `mergeData`, `migrate`) có test đơn vị; chưa có test e2e xuất – nhập file (cả app chưa có test này).
- Đồ thị là danh sách nhóm, chưa có hình vẽ vòng như `LocalGraph` của sổ tay.
- Liên kết `[[w:Q…]]`, `[[c:…]]` trong ghi chú sổ tay chưa có trong ngữ pháp `brain/links.ts` (mã đã thống nhất, chỉ cần mở regex).
