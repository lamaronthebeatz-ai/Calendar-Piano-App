# Đặc tả sổ luật (GĐ2 — mới có bản tối thiểu)

## Đã có (`src/umre/rulebook/`)
- `Rulebook {id, version, domain, title, rules, exceptions, definitions, evidence}`.
- `RuleSpec {id, statement, severity: hard | soft, citations, scope, caveat?}` — `caveat` = chỗ người biên soạn đọc thêm vào nguồn (một ngưỡng, một trang chưa ghim); giải thích trình bày nó như **giả thuyết**.
- `ExceptionSpec {id, statement, lifts, scope, citations, enabledBy: task-option | context}`.
- `Definition` (quãng nghịch là gì, phách nào mạnh).
- `auditRulebook`: id không trùng, mọi mục có trích dẫn, trích dẫn tồn tại, ngoại lệ nới luật có thật. `RulebookRegistry` từ chối sổ luật không qua kiểm.

## Sổ luật phức điệu `counterpoint.strict.pham-tu-huong-1991@2` (v1 trước Wave C)
- 34 luật = 33 `RuleId` của `features/counterpoint/rules.ts` + `no-gap` (bè đối vị không chỗ trống — miền của bộ giải). Phát biểu và cứng/mềm **lấy thẳng từ `RULES`, `isSoft`** nên không lệch được với code.
- Số trang lấy từ bảng kiểm toán `docs/notes/counterpoint.md` (17/11/2026). Test buộc mỗi số trang phải nằm đúng dòng của luật đó trong bảng.
- Ngoại lệ: `fourth-upper-pair` (quãng 4 thuận ở cặp trên ba – bốn bè, tr. 37–45), `quarter-prep` (nốt đen chuẩn bị — quy ước người dạy).
- Định nghĩa: `def.dissonance` (tr. 10), `def.strong-beat` (quy ước của bộ giải, chưa đối chiếu sách).

## Ngôn ngữ luật (từ 23/11) — `src/umre/rules/`
- `lang.ts`: biểu thức dữ liệu (`var`, `const`, so sánh, `and`/`or`/`not`, `in`, `abs`, `sign`, `add`), `RuleDef {id, query, when?, require, exceptions?}`, `evaluate(rules, queries, ngoại lệ bật)` → vi phạm + chỗ dùng ngoại lệ. Luật tuần tự hoá JSON được.
- `queries.ts`: truy vấn sinh **sự kiện** (bước giai điệu, bộ ba nốt, nốt viết, dấu nối, điểm cùng vang, quãng nghịch kèm chuẩn bị / giải quyết / cách đến – đi), không phán xét.
- `counterpoint.ts`: 17 luật cứng; mỗi luật một dòng chú thích dẫn câu chữ. Bảng quãng thuận đọc từ `def.dissonance.data` của sổ luật.

## Sổ luật hoà âm bốn bè `harmony.four-part.rimsky-korsakov-1886@2` (v1 = thí điểm 7 luật)
7 luật cứng: âm của hợp âm (tr. 11), thế gốc (tr. 12 – 13), nhân đôi âm gốc (tr. 19), khoảng cách ba bè trên (tr. 20, caveat: giới hạn quãng 6 là cách hiểu), quãng 5 / 8 song song hoặc ngược hướng (tr. 22), quãng tăng (tr. 22), chéo bè (cách hiểu của người biên soạn). Số trang theo bài `luat-hoa-am-bon-be`; test buộc khớp dòng bài. Âm vực KHÔNG là luật — chỉ giới hạn miền tìm kiếm.

## Chưa có
Sổ luật thứ hai (hoà âm cổ điển…), so sánh hai sổ luật, kế thừa sổ luật. Kiểm luật thật vẫn do code của từng lĩnh vực làm.
