"""Split the OCR of one volume of Grove's Dictionary of Music and Musicians (2nd ed., ed. J. A. Fuller Maitland,
New York: Macmillan, 1904–1910, 5 vols; Internet Archive scans of Cornell University Library, ids in VOLUMES of
build.py) into entries with their printed page.

Usage: python3 scripts/grove/parse.py <id_djvu.xml> <out.json>
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
# leaf − page only grows (plates add leaves); a run of misread numbers ('646, 647' for 546, 547) breaks that, so keep
# the longest run where it never decreases
def longest_nondecreasing(pairs):
    import bisect
    tails, idx, prev = [], [], [None] * len(pairs)
    for k, (i, n) in enumerate(pairs):
        o = i - n
        pos = bisect.bisect_right([pairs[t][0] - pairs[t][1] for t in idx], o)
        prev[k] = idx[pos - 1] if pos else None
        if pos == len(idx): idx.append(k)
        else: idx[pos] = k
    out, k = [], idx[-1] if idx else None
    while k is not None:
        out.append(pairs[k]); k = prev[k]
    return out[::-1]
good = longest_nondecreasing(good)
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
    if len(set(letters)) == 1: return None  # 'AAA' — OCR of a music example
    if sum(c.isupper() for c in letters) / len(letters) < 0.7: return None
    return h

# page 1 carries no number; it is the last leaf headed "(A) DICTIONARY (OF MUSIC …)" before the first verified number
# (plates between pages make leaf − page drift, so it cannot be inferred from later numbers)
first_good = good[0][0]
first_leaf = max(i for i, p in enumerate(parsed) if 8 < i < first_good and any(w.strip('.,') == 'DICTIONARY' for para in p[:2] for line in para for _, _, w in line))
good = sorted({(first_leaf, 1), *[(i, n) for i, n in good if i > first_leaf]})
def page_of(leaf):
    before = [(i, n) for i, n in good if i <= leaf]
    if before: return before[-1][1] + (leaf - before[-1][0])
    after = [(i, n) for i, n in good if i >= leaf]
    return after[0][1] - (after[0][0] - leaf) if after else None

entries, cur, drop = [], None, None
TOP = 230  # running heads and page numbers sit above this (300 dpi scan)
for leaf, paras in enumerate(parsed):
    for para in paras:
        if para[0][0][1] < TOP and len(para) == 1 and len(para[0]) <= 3: continue
        first = para[0][0][2]
        # the signature line at the foot of a sheet ("VOL. III") is not an entry and does not end one
        if re.fullmatch(r'VOL\.?', first) and len(para) == 1: continue
        # page 1 opens with a drop capital read as its own paragraph ("T" + "rPABLATURE") — put it back on the word
        if leaf == first_leaf and len(para) == 1 and re.fullmatch(r'[A-Z]', first):
            drop = first
            continue
        if leaf == first_leaf and drop:
            w = para[0][0]
            para[0][0] = (w[0], w[1], drop + re.sub(r'^[^A-Z]*[A-Z]', '', w[2]))
            drop = None
        h = headword(para)
        text = ' '.join(w for line in para for _, _, w in line)
        if h:
            cur = {'head': h, 'leaf': leaf, 'page': page_of(leaf), 'text': text}
            entries.append(cur)
        elif cur:
            cur['text'] += '\n' + text

END = re.compile(r'^(.ND OF VOL|ADDENDA ET C|LIST OF C[^ ]*BUTORS)')
AD = re.compile(r'Cloth, \d*\s*vo|\$\d[\d.,^]* net')
stop = next((i for i, e in enumerate(entries) if END.match(e['head']) or (e['leaf'] > 0.95 * len(parsed) and AD.search(e['text'][:400]))), len(entries))
entries = entries[:stop]

def clean(t):
    t = re.sub(r'(\w)- (\w)', r'\1\2', t)   # trag- edy → tragedy (line-end hyphens)
    t = re.sub(r'\s*\n\s*', '\n\n', t)
    t = re.sub(r'[ \t]{2,}', ' ', t)
    return t.strip()

entries = [e for e in entries if e['leaf'] >= first_leaf]
for e in entries:
    e['text'] = clean(e['text'])
    e['words'] = len(e['text'].split())
json.dump(entries, open(out, 'w'), ensure_ascii=False)
print('page 1 = leaf', first_leaf, ';', len(entries), 'entries;', sum(e['words'] for e in entries), 'words; pages', entries[0]['page'], '…', entries[-1]['page'])
