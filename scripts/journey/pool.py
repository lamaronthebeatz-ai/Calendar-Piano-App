"""Kho cho chế độ Lữ hành vô tận: gom từ composers.ts + composer-details*.ts những dữ kiện đã có nguồn.
Ghi src/features/journey/pool.json (commit cùng code; chạy lại khi tiểu sử đổi: npm run journey:pool).
- people: tên, slug, năm, quốc gia, nhóm, mô tả, tác phẩm
- events: dòng bảng "Tiểu sử" có năm chắc chắn (bỏ năm ước lượng "k.", dòng ghi nguồn lệch "hoặc", "bài tiếng…")
- claims: gạch đầu dòng "Giai thoại và điều chưa chắc" (đề, lời nguồn, phán quyết chỉ khi lời nguồn mở đầu bằng kết luận rõ)
- năm ước lượng "k." được giữ cho câu hỏi "việc gì" nhưng không bao giờ làm đáp án câu hỏi "năm nào"
"""
import glob, json, re, unicodedata, os

ROOT = os.path.join(os.path.dirname(__file__), '..', '..')
C = os.path.join(ROOT, 'src/features/theory/content')

def slugify(s):
    s = unicodedata.normalize('NFD', s)
    s = ''.join(ch for ch in s if not unicodedata.combining(ch)).replace('đ', 'd').replace('Đ', 'd').lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')

STR = r"""(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")"""
def s(m, i): return (m.group(i) if m.group(i) is not None else m.group(i + 1)).replace("\\'", "'").replace('\\"', '"')

people, index = [], {}
row = re.compile(r"^\s*c\(" + STR + r",\s*" + STR + r",\s*" + STR + r",\s*" + STR + r",\s*" + STR + r",\s*\[(.*?)\]", re.M)
for m in row.finditer(open(f'{C}/composers.ts', encoding='utf-8').read()):
    name, years, country, group, desc = s(m, 1), s(m, 3), s(m, 5), s(m, 7), s(m, 9)
    works = [w.group(1) or w.group(2) for w in re.finditer(STR, m.group(11))]
    index[name] = len(people)
    people.append({'n': name, 's': slugify(name), 'y': years, 'c': country, 'g': group, 'd': desc, 'w': works})

def clean(t):
    t = re.sub(r'\[\[[^\]|]+\|([^\]]+)\]\]', r'\1', t)
    t = re.sub(r'\*+', '', t).replace('`', '').strip()
    return re.sub(r'\s+', ' ', t)

def clip(t, n=230):
    if len(t) <= n: return t
    cut = t[:n].rsplit('. ', 1)[0]
    return (cut if len(cut) > 80 else t[:n].rsplit(' ', 1)[0]) + '…'

DOUBT = re.compile(r'hoặc|bài tiếng|Wikipedia|nguồn|theo [A-ZĐ]|\?|chưa rõ|có lẽ|có thể|được cho là|khoảng', re.I)
FACT = re.compile(r'^(có thật|là sự thật|đúng là|đã được xác nhận)', re.I)
LEGEND = re.compile(r'^(không có (bất kỳ )?(chứng cứ|bằng chứng)|là giai thoại|chỉ là giai thoại|là truyền thuyết|là huyền thoại|không đúng|sai)', re.I)
UNSURE = re.compile(r'^(chưa (chắc|rõ|xác nhận|kiểm chứng|đối chiếu|có (chứng cứ|bằng chứng) chắc)|chỉ có (lời|một nguồn)|chỉ dựa vào|khó kiểm chứng|không chắc)', re.I)

events, claims = [], []
entry = re.compile(r"^  (?:'((?:[^'\\]|\\.)*)'|\"([^\"]*)\"): \{\n    more: `(.*?)`", re.M | re.S)
for f in sorted(glob.glob(f'{C}/composer-details*.ts')):
    for m in entry.finditer(open(f, encoding='utf-8').read()):
        name = (m.group(1) or m.group(2)).replace("\\'", "'")
        if name not in index: continue
        pi, more = index[name], m.group(3)
        sec = re.search(r'^## Tiểu sử[^\n]*\n(.*?)(?=^## |\Z)', more, re.M | re.S)
        for r in re.finditer(r'^\| ([^|\n]+) \| ([^|\n]+) \|$', sec.group(1) if sec else '', re.M):
            year, text = r.group(1).strip(), clean(r.group(2))
            if year in ('Năm', '---') or not re.search(r'\d{3,4}', year) or re.search(r'\?|–\s*$|hoặc|hay', year): continue
            if '[[' in text or DOUBT.search(text) or not 12 <= len(text) <= 150: continue
            events.append([pi, year, text])
        sec = re.search(r'^## Giai thoại[^\n]*\n(.*?)(?=^## |\Z)', more, re.M | re.S)
        for b in re.finditer(r'^- \*\*(.+?)\*\*:? ?(.+)$', sec.group(1) if sec else '', re.M):
            title, text = clean(b.group(1)).rstrip(':'), re.sub(r'^[\s:*]+', '', clean(b.group(2)))
            if '[[' in title or len(title) < 8: continue
            verdict = 'fact' if FACT.search(text) else 'legend' if LEGEND.search(text) else 'unsure' if UNSURE.search(text) else None
            if len(text) < 40: continue
            text = text[0].upper() + text[1:]
            claims.append([pi, title, clip(text), verdict])

json.dump({'people': people, 'events': events, 'claims': claims}, open(os.path.join(ROOT, 'src/features/journey/pool.json'), 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
by = {}
for e in events: by[people[e[0]]['g'].split(':')[0]] = by.get(people[e[0]]['g'].split(':')[0], 0) + 1
print(len(people), 'người,', len(events), 'mốc,', len(claims), 'giai thoại', {v: sum(c[3] == v for c in claims) for v in ('fact', 'legend', 'unsure')}, by)
