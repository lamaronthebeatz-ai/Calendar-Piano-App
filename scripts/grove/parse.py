"""Split the OCR of Grove's Dictionary of Music and Musicians (2nd ed., vol. III "M to P", New York: Macmillan, 1907;
Internet Archive cu31924021782853, scan of Cornell University Library) into entries with their printed page.

Usage: python3 scripts/grove/parse.py <cu31924021782853_djvu.xml> <out.json>
The XML keeps each page, paragraph and line; an entry starts with a paragraph whose first word is a capitalised
headword followed by a comma or a full stop ("MACBETH.", "MacCUNN, Hamish").
"""
import json, re, sys, html

src, out = sys.argv[1], sys.argv[2]
raw = open(src, encoding='utf-8').read()
pages = raw.split('<OBJECT')[1:]

WORD = re.compile(r'<WORD coords="(\d+),(\d+),(\d+),(\d+)"[^>]*>(.*?)</WORD>')

def page_paragraphs(obj):
    """Paragraphs as lists of lines (lists of (x, y, word)), running heads at the top dropped."""
    paras = []
    for p in obj.split('<PARAGRAPH>')[1:]:
        lines = []
        for l in p.split('<LINE>')[1:]:
            ws = [(int(a), int(d), html.unescape(w).strip()) for a, b, c, d, w in WORD.findall(l) if w.strip()]
            if ws: lines.append(ws)
        if lines: paras.append(lines)
    return paras

def page_number(paras):
    for para in paras[:4]:
        for line in para[:1]:
            if line[0][1] < 260 and len(line) == 1 and re.fullmatch(r'\d{1,3}', line[0][2]):
                return int(line[0][2])
    return None

parsed = [page_paragraphs(o) for o in pages]
nums = [page_number(p) for p in parsed]
# trust a printed number only when a neighbour agrees with it; interpolate the rest
good = [(i, n) for i, n in enumerate(nums) if n and any(nums[j] == n + (j - i) for j in (i - 2, i - 1, i + 1, i + 2) if 0 <= j < len(nums))]
# the dictionary starts on the 21st leaf, page 1 (its number is not printed)
good = sorted({(20, 1), *good})
def page_of(leaf):
    before = [(i, n) for i, n in good if i <= leaf]
    if before: return before[-1][1] + (leaf - before[-1][0])
    after = [(i, n) for i, n in good if i >= leaf]
    return after[0][1] - (after[0][0] - leaf) if after else None

HEAD = re.compile(r"^((?:Mac|Mc|M'|O'|De|Di|Du|La|Le|Van|Von)?[A-Z][A-Z'’\-]{1,}(?:[ \-](?:[A-Z][A-Z'’\-]+|DE|DI|DA|DU|LA|LE|VON|VAN))*)([,.])$")
STOP = {'II', 'III', 'IV', 'VI', 'VII', 'VIII', 'IX', 'XI', 'XII', 'XIII', 'THE', 'AND', 'NOTE', 'OPERAS', 'CANTATAS',
        'ORCHESTRAL', 'CHAMBER', 'CHURCH', 'SONGS', 'PIANOFORTE', 'VOCAL', 'INSTRUMENTAL', 'WORKS', 'APPENDIX', 'LIST'}

def headword(para):
    first = para[0]
    # the headword may be one or more words: collect capitalised words up to the first ending in , or .
    words = []
    for x, y, w in first[:8]:
        if w.startswith(('(', '[')) and words:  # 'ODE (Gr. …', 'OFFERTORIUM (Eng. …'
            words[-1] += ','
            break
        words.append(w)
        if w.endswith((',', '.')): break
    cand = ' '.join(words)
    m = HEAD.match(cand)
    if not m: return None
    h = m.group(1)
    letters = [c for c in h if c.isalpha()]
    if len(letters) < 3 or h in STOP: return None
    if sum(c.isupper() for c in letters) / len(letters) < 0.7: return None
    return h

entries, cur = [], None
TOP = 230  # running heads and page numbers sit above this (300 dpi scan)
for leaf, paras in enumerate(parsed):
    for para in paras:
        if para[0][0][1] < TOP and len(para) == 1 and len(para[0]) <= 3: continue
        first = para[0][0][2]
        # the signature line at the foot of a sheet ("VOL. III") is not an entry and does not end one
        if re.fullmatch(r'VOL\.?', first) and len(para) == 1: continue
        h = headword(para)
        text = ' '.join(w for line in para for _, _, w in line)
        if h:
            cur = {'head': h, 'leaf': leaf, 'page': page_of(leaf), 'text': text}
            entries.append(cur)
        elif cur:
            cur['text'] += '\n' + text

def clean(t):
    t = re.sub(r'(\w)- (\w)', r'\1\2', t)   # trag- edy → tragedy (line-end hyphens)
    t = re.sub(r'\s*\n\s*', '\n\n', t)
    t = re.sub(r'[ \t]{2,}', ' ', t)
    return t.strip()

first = next(i for i, e in enumerate(entries) if e['head'].startswith('MA') or 'AAS' in e['head'])
entries = entries[first:]
for e in entries:
    e['text'] = clean(e['text'])
    e['words'] = len(e['text'].split())
json.dump(entries, open(out, 'w'), ensure_ascii=False)
print(len(entries), 'entries;', sum(e['words'] for e in entries), 'words; pages', entries[0]['page'], '…', entries[-1]['page'])
