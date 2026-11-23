# Đặc tả sổ luật (GĐ2 — mới có bản tối thiểu)

## Đã có (`src/umre/rulebook/`)
- `Rulebook {id, version, domain, title, rules, exceptions, definitions, evidence}`.
- `RuleSpec {id, statement, severity: hard | soft, citations, scope, caveat?}` — `caveat` = chỗ người biên soạn đọc thêm vào nguồn (một ngưỡng, một trang chưa ghim); giải thích trình bày nó như **giả thuyết**.
- `ExceptionSpec {id, statement, lifts, scope, citations, enabledBy: task-option | context}`.
- `Definition` (quãng nghịch là gì, phách nào mạnh).
- `auditRulebook`: id không trùng, mọi mục có trích dẫn, trích dẫn tồn tại, ngoại lệ nới luật có thật. `RulebookRegistry` từ chối sổ luật không qua kiểm.

## Sổ luật phức điệu `counterpoint.strict.pham-tu-huong-1991@1`
- 34 luật = 33 `RuleId` của `features/counterpoint/rules.ts` + `no-gap` (bè đối vị không chỗ trống — miền của bộ giải). Phát biểu và cứng/mềm **lấy thẳng từ `RULES`, `isSoft`** nên không lệch được với code.
- Số trang lấy từ bảng kiểm toán `docs/notes/counterpoint.md` (17/11/2026). Test buộc mỗi số trang phải nằm đúng dòng của luật đó trong bảng.
- Ngoại lệ: `fourth-upper-pair` (quãng 4 thuận ở cặp trên ba – bốn bè, tr. 37–45), `quarter-prep` (nốt đen chuẩn bị — quy ước người dạy).
- Định nghĩa: `def.dissonance` (tr. 10), `def.strong-beat` (quy ước của bộ giải, chưa đối chiếu sách).

## Chưa có
Ngôn ngữ luật, bộ chạy luật chung, sổ luật thứ hai (hoà âm cổ điển…), so sánh hai sổ luật, kế thừa sổ luật. Kiểm luật thật vẫn do code của từng lĩnh vực làm.
