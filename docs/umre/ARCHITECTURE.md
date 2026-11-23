# Kiến trúc UMRE

```
src/umre/
  version.ts                 UMRE_ENGINE_VERSION (ghi vào mọi truy vết, kết quả; bộ giải khai báo major.minor nó cần)
  task.ts                    Task {id, type, domain, rulebook, score, params}
  engine.ts                  createEngine(): sổ luật + bộ kiểm + bộ giải phức điệu, sẵn một Orchestrator
  repr/                      GĐ1 — biểu diễn (xem UNIFIED_MUSIC_REPRESENTATION.md)
  rulebook/                  GĐ2 (tối thiểu)
    rulebook.ts              RuleSpec, ExceptionSpec, Definition, Rulebook, auditRulebook, RulebookRegistry
    counterpoint.ts          sổ luật phức điệu nghiêm khắc (34 luật, 2 ngoại lệ, 2 định nghĩa)
  evidence/evidence.ts       GĐ6 — SourceRecord, Citation, EvidenceRegistry, formatCitation (dữ liệu sách lấy từ features/sources/curated.ts)
  domains/counterpoint/task.ts   loại bài counterpoint.two-voice / multi-voice, kiểm đầu vào, đổi Task ⇄ Problem / MProblem, dựng tổng phổ lời giải
  repr/texture.ts            truy vấn chuẩn: điểm cùng vang, chuyển động, lớp quãng, vị trí trong ô
  rules/                     GĐ2 — lang.ts (ngôn ngữ luật + bộ đánh giá), queries.ts (sự kiện), counterpoint.ts, harmony.ts (luật)
  constraints/model.ts       GĐ3 — CspModel: bè tự do, miền, cách ghi nốt, các góc nhìn (nguyên thể, biến thể), vi phạm chắc chắn
  search/search.ts           GĐ4 — tìm kiếm chung: quay lui, nhớ trạng thái chết, ba kết luận
  domains/counterpoint/      versions.ts (tự dựng biến thể), csp.ts (miền phức điệu)
  domains/harmony/           task.ts (bài bốn bè + miền), check.ts (bộ kiểm viết tay)
  rulebook/harmony.ts        sổ luật hoà âm bốn bè (Rimsky-Korsakov)
  validation/                GĐ5
    types.ts                 ValidationStatus, Violation, RuleOutcome, Coverage, ValidationResult, Validator, digest
    native.ts                bộ kiểm thứ ba viết trên biểu diễn UMRE (một phần luật)
    counterpoint.ts          twoVoiceValidator, multiVoiceValidator
  explain/                   GĐ6
    trace.ts                 Tracer, TraceStep, ba mức truy vết
    explain.ts               explain() → Explanation (câu có loại + tham chiếu), renderExplanation(basic | technical | academic)
  orchestration/             GĐ7
    solver.ts                hợp đồng Solver / SolverDescriptor / SolverOutput / UnifiedResult
    registry.ts              SolverRegistry, ValidatorRegistry, checkDescriptor
    orchestrator.ts          Orchestrator.run, decideStatus (hàm thuần), checkOutput, auditResult
  solvers/counterpoint.ts    adapter: twoVoiceSolver (solveMany), multiVoiceSolver (msolve)
  solvers/csp.ts             umre.csp.counterpoint, umre.csp.harmony — mô hình lĩnh vực + tìm kiếm chung
  testing/fixtures.ts        dựng bài mẫu cho test
```

## Chu trình một nhiệm vụ
```
Task ──▶ Orchestrator.run
          1 receive · 2 loại bài ↔ lĩnh vực · 3 sổ luật (RulebookRegistry) · 4 bộ kiểm (ValidatorRegistry)
          5 route: SolverRegistry.match (lĩnh vực, loại bài, biểu diễn, sổ luật, sẵn sàng, bật/tắt) — không có thì ERROR, không tự thay
          6 checkInput · 7 strategy (thời gian, số lời giải trong giới hạn của bộ giải)
          8 solve (đua với hẹn giờ và tín hiệu huỷ) · 9 checkOutput (hợp đồng)
          10 validate TỪNG phương án (bộ kiểm độc lập) · decideStatus
          11 explain (từ truy vết + kết quả kiểm + sổ luật) · 12 evidence (trích dẫn đã giải được)
      ──▶ UnifiedResult {status, solutions (chỉ VALID), rejected, explanation, evidence, trace, metadata}
```

## Hướng phụ thuộc
- `repr/` không import gì ngoài `repr/`.
- `validation/` không import `solvers/` hay `orchestration/`: bộ kiểm không biết bộ giải nào đã sinh lời giải.
- `orchestration/` không import mô-đun lĩnh vực nào; lĩnh vực chỉ vào qua `engine.ts`.
- Mô-đun cũ (`features/*`) không import UMRE. UMRE gọi hàm của chúng, không sửa chúng.
