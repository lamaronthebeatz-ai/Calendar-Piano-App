# UMK — Unified Music Knowledge: kiểm kê, kiến trúc, nghiệm thu (24/11/2026)

Lược đồ UMK 1.0.0 · UMRE máy 1.0.0, API 1.1.0 · mã: `src/umk/` · trang: `/umk` (Trung tâm tri thức).

Trạng thái dùng trong báo cáo: **IMPLEMENTED AND VERIFIED** (có test chạy thật) · **IMPLEMENTED BUT NOT FULLY VERIFIED** · **PARTIALLY IMPLEMENTED** · **NOT IMPLEMENTED** · **BLOCKED**.

## 1. Kiểm kê trước khi sửa (Phase 1)

| Nguồn tri thức | Nơi ở (một nơi duy nhất) | Cấu trúc | Số lượng (đếm từ dữ liệu) |
|---|---|---|---|
| Bài thư viện (lý thuyết + âm nhạc học) | `src/features/theory/content/*.ts` → build `content/index.<h>.json` (`virtual:theory-index`) | `Article`: slug, category (+`also`), aliases, summary, body, refs, wiki | 1.538 |
| Mục thư viện (cho người học) | `theory/categories.ts` + `topicGroups.ts` | 28 mục / 6 nhóm | 28 |
| Bản đồ âm nhạc học (sơ đồ Adler) | `features/musicology/taxonomy.ts` | 5 phần → 28 nhánh (mỗi nhánh một bài trục có nguồn) → nhóm → bài, một bài ở nhiều nhánh | 28 nhánh |
| Thuật ngữ đa ngữ | `features/terms/terms.json` (build `scripts/terms/build.py`) | vi, biến thể, en/ru/de/fr/it, Wikidata, định nghĩa | 258 |
| Từ điển Grove 1904–1910 | `features/terms/grove*` (sinh lúc build) | mục từ có tập/trang | 6.430 |
| Thư mục học | `features/sources/curated.ts` (mô tả đủ) + build `content/sources.<h>.json` (mọi tham chiếu, `uses`, `pages`, `open` = dòng `::verify`) | `CuratedSource`, `access` | 35 mô tả đủ |
| Sổ luật | `src/umre/rulebook/{counterpoint,harmony}.ts` + `evidence/evidence.ts` | luật, ngoại lệ, định nghĩa, cho phép, câu hỏi mở, trích dẫn có trang | 47 + 20 mục |
| Quan hệ | `features/knowledge/` (`ids.ts`, `relations.ts`, `graph.ts`) | mã `a: w: s: ms: p: n: c: e: t: m:`, cạnh có nguồn gốc | — |
| Quan điểm trường phái | `features/terms/schools.ts` | khái niệm → các bài nêu từng quan điểm | 15 cạnh |
| Phương pháp phân tích | `features/knowledge/methods.ts`, nhãn `/analyze` → bài `features/analyze/links.ts` | 7 phương pháp | 36 cạnh |
| Bài nêu luật UMRE | `umre/theorySlugs.ts`, `features/counterpoint/rules.ts` (`ref`) | luật → bài | — |
| Dữ liệu nghiên cứu của người dùng | IndexedDB `musicology-knowledge`, `research:projects`, `brain:notes` | nguồn của tôi, luận điểm, bằng chứng | (trên máy) |

**UMRE nhận tri thức qua đâu (trước):** mỗi nơi tự dựng sổ luật — `engine.ts`, `solvers/csp.ts` (3 chỗ), `domains/counterpoint/page.ts` (2 chỗ), `umre/theory.ts` gọi `counterpointRulebook()` / `harmonyRulebook()` riêng; giọng chủ qua `context.globalKey`; không có khái niệm, thuật ngữ hay nguồn nào đi kèm yêu cầu.

**Vấn đề kiến trúc tìm thấy:**
1. Sổ luật được dựng ở 7 chỗ (không có nơi đăng ký duy nhất).
2. Bốn bộ từ vựng nguồn gốc khác nhau (UMRE `SourceType/Verification`, thư mục `access`, đồ thị `library/wikidata/computed/research`, Nguồn của tôi `unverified/record/original/disputed`).
3. Ba cách phân loại song song không nối nhau (bản đồ âm nhạc học, mục thư viện, lĩnh vực của UMRE).
4. Hệ mã thống nhất không có luật, sổ luật, thuật ngữ đa ngữ, lĩnh vực → đồ thị không thấy luật nào.
5. Thuật ngữ: biến thể ghi trong bảng thuật ngữ có khi trỏ sang bài khác (9 chỗ) — chưa ai thấy.
6. Kết quả UMRE không ghi lại đã dựa vào tri thức nào; không có đường báo khoảng trống về.

## 2. Kiến trúc sau

```
Module (Phân tích, Phức điệu, Phối hoà âm, Lý thuyết, Đồ thị)
   │ assembleReasoningContext(task)            getKnowledge / searchKnowledge / getConcept /
   ▼                                           getRelatedConcepts / getApplicableRules / getRulebook / getSources
UMK  src/umk/ ── đọc tại chỗ: thư viện · bản đồ · mục · terms.json · curated.ts · thư mục build · sổ luật
   │ ReasoningContext {sổ luật@bản, luật, khái niệm, nguồn, tiền đề, khoảng trống}
   │ toUmreRequest (từ chối nếu sổ luật của bài toán ≠ sổ luật ngữ cảnh; câu hỏi không hình thức hoá → không gọi bộ giải)
   ▼
UMRE  handle / UmreHost (worker) — sổ luật lấy từ sổ đăng ký UMK (src/umk/rulebooks.ts)
   │ bộ giải theo lĩnh vực → bộ kiểm độc lập → giải thích + bằng chứng
   ▼
recordOf → ReasoningRecord {khái niệm, luật, nguồn đã dùng; bộ giải, bộ kiểm, dấu vân; mức xác lập; khoảng trống}
   │                                   └── reportKnowledgeGap / proposeKnowledgeUpdate → umk:feedback (danh sách việc, có trạng thái)
   ▼
Module hiển thị kết quả + "Tri thức UMK đã dùng"
```

**Quyết định thiết kế:** UMK **không chép** tri thức sang kho mới. Mỗi loại tri thức đã có đúng một nhà được biên soạn và kiểm (nội dung bài, `terms.json`, `curated.ts`, sổ luật). Chép sang kho thứ hai là tạo đúng thứ chỉ thị cấm (kho song song) và mở chỗ cho hai bản lệch nhau. UMK là lớp hợp nhất: một hệ mã, một lược đồ, một bộ từ vựng nguồn gốc, một phân loại nối ba cách xếp, một sổ đăng ký sổ luật, một hệ quan hệ (cạnh của đồ thị tri thức sẵn có), và là đường duy nhất UMRE lấy tri thức.

| Lớp (chỉ thị) | Hiện thực | Trạng thái |
|---|---|---|
| 1 Phân loại | `taxonomy.ts`: 77 nút = trường âm nhạc học → 5 phần → 28 nhánh (bản đồ) + thư viện → 6 nhóm → 28 mục + 7 lĩnh vực suy luận nối về nhánh chúng hình thức hoá; nhiều-nhiều (`domainsOf`); `coverage()` đối chiếu danh sách ngành của chỉ thị | IMPLEMENTED AND VERIFIED |
| 2 Kho tri thức | `api.ts` `getKnowledge` cho `a: x: rb: r: d: m: s:`; thân bài vẫn tải theo bài | IMPLEMENTED AND VERIFIED |
| 3 Thuật ngữ | `terminology.ts`: dạng chính, biến thể bảng thuật ngữ, tên khác của bài, tên nước ngoài — giữ quan hệ riêng, **không gộp đồng nghĩa**; `termConflicts` báo dạng trỏ hai nơi; Grove giữ riêng (nguồn lịch sử) | IMPLEMENTED AND VERIFIED |
| 4 Sổ luật & phương pháp | `rulebooks.ts`: sổ đăng ký duy nhất; mỗi sổ ghi truyền thống, lĩnh vực, bài nêu từng luật, nguồn, tệp test; mục: luật cứng/khuyến nghị/định nghĩa/ngoại lệ/cho phép/câu hỏi mở + quan hệ nới/thuộc/ảnh hưởng; phương pháp phân tích từ `methods.ts` | IMPLEMENTED AND VERIFIED |
| 5 Nguồn gốc | `provenance.ts`: 8 loại (gốc, thứ cấp, tra cứu, học tập, cách hiểu biên soạn, máy, dữ liệu ngoài, người dùng) × 4 mức kiểm; ánh xạ từ 4 bộ từ vựng cũ, **giữ giá trị gốc**; luật lấy mức của trích dẫn yếu nhất; kết quả máy không bao giờ "đã kiểm" | IMPLEMENTED AND VERIFIED |
| 6 Quan hệ | `edges.ts` thêm vào đồ thị tri thức: bài–nêu→luật, sổ–gồm→mục, mục–trích→nguồn (trang), ngoại lệ–nới→luật, cho phép–trong→luật, câu hỏi–ảnh hưởng→luật, thuật ngữ–gọi tên→bài, lĩnh vực suy luận–hình thức hoá→nhánh; `getRelatedConcepts` hai chiều | IMPLEMENTED AND VERIFIED |

## 3. API và hợp đồng thực tế (`src/umk/`)

| Chức năng (chỉ thị) | Hàm | Ghi chú |
|---|---|---|
| getKnowledge | `getKnowledge(id)` | `KnowledgeUnit` có `provenance`, `domains`, `href` |
| searchKnowledge | `searchKnowledge(q, {domain, kinds, limit})` | bài (tên, tên khác, tên nước ngoài, tóm tắt), thuật ngữ, mục sổ luật, lĩnh vực, phương pháp; lọc theo nút và mọi nút con |
| getConcept | `getConcept(id)` | thuật ngữ, nơi trong phân loại, luật nêu trong bài, phương pháp, nhãn /analyze |
| getRelatedConcepts | `getRelatedConcepts(id, {rels, bodyLinks})` | cạnh hai chiều có nguồn gốc |
| getApplicableRules | `getApplicableRules({domain, tradition, articles})` | mỗi nhóm một sổ luật (một truyền thống), `choose` khi có nhiều |
| getRulebook | `getRulebook(id)` / `listRulebooks()` | `RulebookRecord` |
| getSources | `getSources(id)`, `getArticleSources(slug)` | chỉ bản ghi thư mục có thật |
| assembleReasoningContext | `assembleReasoningContext(task)` | counterpoint · harmonize · harmony-analysis (giọng chủ) · musicology-question |
| submitReasoningRequest | `submitReasoningRequest(ctx, input, runner)`, `toUmreRequest`, `recordOf`, `inProcess`, `viaHost` | chạy trong tiến trình hay worker |
| reportKnowledgeGap | `reportKnowledgeGap(gaps, ctxId)`, `setGapStatus` | `umk:feedback` (secureStore, mã hoá khi kho mở) |
| proposeKnowledgeUpdate | `proposeKnowledgeUpdate`, `decideProposal` | quyết định chỉ được ghi lại, không sửa tri thức |

Kiểu TS ở `schema.ts` (`UMK_SCHEMA_VERSION` 1.0.0); kiểm hợp lệ `checkUnit`, `checkProvenance`, `checkContext`, `checkRecord`; lỗi `ReasoningError`; kho phản hồi có `v: 1` và bộ lọc khi đọc.

**Mức xác lập** (`Epistemic`): `validated` chỉ khi có lời giải được bộ kiểm độc lập xác nhận; kết quả phân tích là `interpretation`; mơ hồ / thiếu dữ liệu / chưa kết luận là `unresolved`; câu hỏi âm nhạc học là `not-formalised` (không gọi bộ giải).

## 4. Module đã tích hợp

| Module | Tích hợp | Trạng thái |
|---|---|---|
| UMRE lõi | `engine.ts`, `solvers/csp.ts`, `domains/counterpoint/page.ts`, `umre/theory.ts` lấy sổ luật từ sổ đăng ký UMK (bỏ 7 chỗ tự dựng) | IMPLEMENTED AND VERIFIED (test: engine giữ đúng đối tượng sổ luật của UMK) |
| Phân tích `/analyze` | khối UMRE dựng ngữ cảnh `harmony-analysis` (giọng chủ, phương pháp, khái niệm), hiện "Tri thức UMK đã dùng" + mức xác lập; khoảng trống từ UMRE báo về UMK | IMPLEMENTED AND VERIFIED (E2E `tests/umk.spec.ts`) |
| Soạn nhạc — phối hoà âm | ngữ cảnh `harmonize`, bài toán phải đúng sổ luật ngữ cảnh, hiện tri thức đã dùng | IMPLEMENTED BUT NOT FULLY VERIFIED (test đơn vị cho phần UMK; E2E phối hoà âm cũ vẫn chạy, chưa có E2E riêng cho khối tri thức) |
| Phức điệu | kết quả mang truyền thống từ sổ đăng ký + link Trung tâm tri thức | IMPLEMENTED BUT NOT FULLY VERIFIED (chưa có E2E cho dòng này) |
| Lý thuyết | "Luật trong bộ máy UMRE" đọc từ sổ đăng ký | IMPLEMENTED AND VERIFIED (test cũ `theory.test.ts`, E2E cũ) |
| Đồ thị `/graph` | cạnh UMK + tên cho `x: d: rb: r:` | IMPLEMENTED BUT NOT FULLY VERIFIED (smoke trang; chưa E2E mở một luật trên đồ thị) |
| Trung tâm tri thức `/umk` | tổng quan, cấu trúc & tra cứu, sổ luật, khoảng trống, thẻ từng đối tượng | IMPLEMENTED AND VERIFIED (E2E + smoke, điện thoại + màn rộng) |
| Solfège, Nghe hợp âm, Hành trình, Sổ tay, Công cụ | không cần suy luận; Hành trình/Sổ tay đã dùng mã thống nhất | NOT IMPLEMENTED (không cần) |

## 5. Dữ liệu và chuyển đổi
- **Không có chuyển đổi dữ liệu lưu trữ**: không kho nào của người dùng đổi lược đồ; tri thức nội dung ở mã nguồn, không chép. Hệ mã mở rộng thêm tiền tố (`x d rb r`), mã cũ giữ nguyên. Kho mới duy nhất: `umk:feedback` (v1).
- Bảo toàn đếm bằng test (so với nơi gốc, không so số gõ tay): 1.538/1.538 bài là đơn vị hợp lệ có chỗ trong phân loại; 258/258 thuật ngữ, mọi biến thể giữ nguyên; 35/35 nguồn mô tả đủ; 47/47 và 20/20 mục sổ luật; 0 cạnh treo.
- Lùi lại: UMK chỉ thêm; gỡ `src/umk` + 4 dòng nối trong UMRE là về như cũ, không dữ liệu nào phải chuyển ngược.

## 6. Kết quả kiểm thử (chạy thật)
Xem `docs/STATUS.md` phiên 24/11 và mục 8 dưới; `src/umk/umk.test.ts` 14 ca (toàn vẹn, truy xuất, nối UMRE: giải phức điệu thật qua `handle`, phân tích Bach thật với/không/sai giọng chủ, câu hỏi âm nhạc học; phản hồi). E2E `tests/umk.spec.ts` (2 ca × điện thoại + màn rộng), smoke 2 trang mới.

## 7. Giới hạn
- Định nghĩa luật vẫn nằm vật lý ở `src/umre/rulebook/*` vì mỗi luật gắn với logic kiểm (định nghĩa ngôn ngữ luật, mã bộ kiểm) và test của chúng ở đó; sổ đăng ký UMK quyết định quyền sở hữu và là nơi duy nhất dựng. **PARTIALLY IMPLEMENTED** theo nghĩa "dữ liệu sổ luật nằm trong UMK".
- Chỉ có 2 sổ luật (phức điệu nghiêm khắc Taneyev/Phạm Tú Hương; hoà âm bốn bè Rimsky-Korsakov). Phân tích dùng bộ /analyze (phương pháp có đo độ đúng), không có sổ luật phân tích.
- Ngành chưa có trong thư viện: nhân học âm nhạc, khảo cổ âm nhạc (không nhánh, không bài); âm nhạc học so sánh và nghiên cứu âm nhạc đại chúng chỉ được nhắc trong bài, chưa có nhánh — báo ở Trung tâm tri thức, không bịa nút.
- Ánh xạ thuật ngữ → bài theo mã hoặc tên tiếng Việt; có thể còn ghép chưa khéo (9 chỗ đã báo).
- Câu hỏi âm nhạc học chỉ có ngữ cảnh (khái niệm + nguồn), không có suy luận.
- Phản hồi lưu trên từng máy (local-first), không đồng bộ.

## 8. Việc tiếp
- Người biên soạn xử lý 9 chỗ thuật ngữ trỏ hai nơi, 9 luật chỉ dựa cách hiểu/quy ước, 7 câu hỏi mở của sổ luật (`/umk?tab=gaps`).
- Thêm sổ luật thứ hai cho hoà âm (truyền thống khác) = sổ mới trong sổ đăng ký, không thêm luật vào sổ cũ.
- E2E cho khối tri thức ở Phối hoà âm và Phức điệu; mở một luật trên `/graph`.
