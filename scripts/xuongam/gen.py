#!/usr/bin/env python3
"""
Writes the sight-singing book "Xướng âm cromatic và chuyển giọng":

  music/ex/xuong-am.txt                         one engraving block per drill and per melody (`xa-…`)
  src/features/theory/content/xuong-am.json     the 45 lessons and the preliminary chapter (title, summary, body)
  src/features/theory/xuong-am-play.json        pitches and durations of every block, for playback

Deterministic (fixed seed). Usage: python3 scripts/xuongam/gen.py, then scripts/sheets/build.py.
"""
import json, random, re, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from core import Key, midi, ly_pitch, chords, name_vn, LABEL, NAT
from melody import Spec, make, METERS
import plans
from plans import period, modulation_plan, pivots, pc_set
import drills as D
from lessons import LESSONS, MAJ_KEYS, MIN_KEYS

ROOT = Path(__file__).resolve().parents[2]
HEAD = '#(set-global-staff-size 21)\n'
TEMPI = [('Andante', 72), ('Moderato', 92), ('Allegretto', 108), ('Andantino', 80), ('Andante cantabile', 66), ('Allegro moderato', 116), ('Moderato con moto', 100), ('Lento', 56)]
METER_CYCLE = ['2/4', '3/4', '4/4', '6/8', '2/4', '3/8', '3/4']

blocks, play = [], {}


def label_markup(text):
    """'VII₇' → \\markup \\concat { "VII" \\sub "7" }; plain text stays a string."""
    sub = '₀₁₂₃₄₅₆₇₈₉₊'
    m = re.match(r'^(.*?)([' + sub + r']+)$', text)
    if not m:
        return '"' + text + '"'
    tr = str.maketrans(sub, '0123456789+')
    return '\\markup \\concat { "' + m.group(1) + '" \\sub "' + m.group(2).translate(tr) + '" }'


def emit_drill(bid, events, key, clef='treble', time=None, bpm=80, tonic=True):
    notes, lyrics, steps = [], [], []
    allm = [midi(x) for e in events if e[0] == 'n' for x in e[1]]
    if allm and max(allm) > 83 and min(allm) - 12 >= 50:  # a block that climbs too high is sung an octave lower
        events = [e if e[0] != 'n' else ('n', [(x[0] - 7, x[1]) for x in e[1]], *e[2:]) for e in events]
    has_lyr = any(e[0] == 'n' and e[3] for e in events)
    for e in events:
        if e[0] == '|':
            notes.append('\\bar "||"')
            continue
        _, ns, dur, below, above = e
        p = ly_pitch(ns[0]) if len(ns) == 1 else '<' + ' '.join(ly_pitch(x) for x in ns) + '>'
        txt = (f'^\\markup \\small "{above}"' if above else '')
        notes.append(p + D.DUR[dur] + txt)
        lyrics.append(label_markup(below) if below else '""')
        steps.append([[midi(x) for x in ns], dur])
    body = ' '.join(notes)
    timing = f'\\time {time}' if time else '\\cadenzaOn \\omit Staff.TimeSignature'
    lyr = f' \\addlyrics {{ \\override LyricText.font-size = #-1 \\override LyricSpace.minimum-distance = #1.2 {" ".join(lyrics)} }}' if has_lyr else ''
    src = (HEAD + f'\\score {{ << \\new Staff {{ \\clef {clef} {key.ly()} {timing} {body} \\bar "|." }}{lyr} >> \\layout {{ }} }}')
    blocks.append(f'=== {bid}\n{src}')
    play[bid] = {'q': bpm, 'k': tonic_chord(key, clef), 'n': steps}


def tonic_chord(key, clef):
    t = D.tonic_step(key, clef)
    return [midi(key.note(d, 0, near=t + d)) for d in (0, 2, 4)]


DUMP = []


def emit_melody(bid, notes, key, meter, clef, tempo, bpm):
    DUMP.append(bid + ' ' + ' '.join(name_vn(n) + '/' + str(d) + ('' if k == key else '[' + k.tonic_name() + ']') for n, d, k in notes))
    out = []
    for n, d, _ in notes:
        out.append(ly_pitch(n) + D.DUR[d])
    src = (HEAD + f'\\score {{ \\new Staff {{ \\clef {clef} {key.ly()} \\time {meter} \\tempo "{tempo}" {" ".join(out)} \\bar "|." }} \\layout {{ }} }}')
    blocks.append(f'=== {bid}\n{src}')
    play[bid] = {'q': bpm, 'k': tonic_chord(key, clef), 'n': [[[midi(n)], d] for n, d, _ in notes]}


def related(key):
    rel = [(5, 'min'), (4, 'maj'), (2, 'min'), (3, 'maj'), (1, 'min')] if key.mode == 'maj' else [(2, 'maj'), (4, 'min'), (6, 'maj'), (3, 'min'), (5, 'maj')]
    return [key.relative(d, m) for d, m in rel]


def ok_sig(k):
    return abs(k.signature()) <= 6


def all_keys():
    return [Key.parse(k) for k in MAJ_KEYS + MIN_KEYS]


def key_list(lesson, mode, start):
    if lesson['keys'] == 'C':
        return [Key.parse('C' if mode == 'maj' else 'c')]
    names = MAJ_KEYS if mode == 'maj' else MIN_KEYS
    return [Key.parse(names[(start + i) % len(names)]) for i in range(len(names))]


def enh_target(rng, a, via):
    cands = []
    for b in all_keys():
        if b == a or not ok_sig(b) or b in related(a) or b == a.parallel():
            continue
        if via == 'enh-dim' and pc_set(a, 'VII7') == pc_set(b, 'VII7'):
            cands.append(b)
        if via == 'enh-ger' and pc_set(a, 'D7') == pc_set(b, 'Ger'):
            cands.append(b)
        if via == 'enh-ger2' and pc_set(a, 'Ger') == pc_set(b, 'D7'):
            cands.append(b)
        if via == 'enh-aug' and pc_set(a, 'D+') == pc_set(b, 'D+'):
            cands.append(b)
    return rng.choice(cands) if cands else None


def chain_path(rng, a, steps, min_diff):
    for _ in range(200):
        path = [a]
        for _ in range(steps):
            nxt = [k for k in related(path[-1]) if ok_sig(k) and k not in path]
            if not nxt:
                break
            path.append(rng.choice(nxt))
        if len(path) == steps + 1 and abs(path[-1].signature() - a.signature()) >= min_diff and path[-1] not in related(a):
            return path
    return None


def melody_for(rng, lesson, idx, keys):
    meter = METER_CYCLE[(idx + lesson['n']) % len(METER_CYCLE)]
    long_ = meter in ('2/4', '3/8') or (meter == '3/4' and idx % 2)
    length = 16 if long_ else 8
    bass = idx % 4 == 3
    lo, hi = (48, 67) if bass else (60, 79)
    tempo, bpm = TEMPI[(idx * 3 + lesson['n']) % len(TEMPI)]
    if meter in ('6/8', '3/8'):
        bpm = int(bpm * 1.3)
    kind = lesson['kind']
    for attempt in range(400):
        key = keys[(idx + attempt // 40) % len(keys)]
        variant = lesson['variant']
        if variant == 'mix':
            variant = rng.choice(['nat', 'harm', 'mel'])
        spec = Spec(allow=lesson['allow'], alters=lesson['alters'], want=lesson['targets'] if kind == 'period' else [],
                    chromatic=lesson['chromatic'], lo=lo, hi=hi,
                    chrom_to=lesson.get('chrom_to', range(7)), chrom_kind=lesson.get('chrom_kind', 'both'))
        info = ''
        if kind == 'period':
            plan = period(rng, key, variant, meter, length, lesson['pool'])
        elif kind == 'parallel':
            plan, _ = modulation_plan(rng, [key, key.parallel()], variant, meter, length, via='dominant')
            info = f'{key.tonic_name()} → {key.parallel().tonic_name()}'
        elif kind == 'mod':
            d, m = lesson['rel']
            b = key.relative(d, m)
            if not ok_sig(b):
                continue
            plan, _ = modulation_plan(rng, [key, b], variant, meter, length, extra=lesson.get('extra', ()))
            info = f'{key.tonic_name()} → {b.tonic_name()}'
        elif kind == 'mod-extra':
            cands = [b for b in all_keys() if ok_sig(b) and b not in related(key) and b != key and pivots(key, b, lesson['extra'], True)]
            if not cands:
                continue
            b = rng.choice(cands)
            plan, pv = modulation_plan(rng, [key, b], variant, meter, max(length, 12), extra=lesson['extra'], only_extra=True, back=False)
            info = f'{key.tonic_name()} → {b.tonic_name()}' + (f' (hợp âm chung {LABEL[pv[0][2][0]]})' if plan else '')
        elif kind == 'chain':
            path = chain_path(rng, key, 2 if lesson['steps'] == 2 else rng.choice([2, 3]), lesson['steps'])
            if not path:
                continue
            plan, _ = modulation_plan(rng, path, variant, meter, 16, back=False)
            info = ' → '.join(k.tonic_name() for k in path)
        elif kind == 'enh':
            via = lesson['via'] if lesson['n'] != 7 else ['enh-ger', 'enh-ger2', 'enh-aug'][idx % 3]
            b = enh_target(rng, key, via)
            if not b:
                continue
            plan, _ = modulation_plan(rng, [key, b], variant, meter, 12, via=via, back=False)
            what = {'enh-dim': 'hợp âm bảy giảm', 'enh-ger': 'hợp âm bảy át = sáu tăng', 'enh-ger2': 'hợp âm sáu tăng = bảy át', 'enh-aug': 'hợp âm ba tăng'}[via]
            info = f'{key.tonic_name()} → {b.tonic_name()} ({what})'
        if not plan:
            continue
        mel = make(rng, plan, meter, spec)
        if mel:
            return mel, key, meter, 'bass' if bass else 'treble', tempo, bpm, info
    raise SystemExit(f'no melody for lesson {lesson["ch"]}.{lesson["n"]} #{idx}')


def neighbour_scale(key, degs, clef):
    t = D.tonic_step(key, clef)
    ev = []
    for d in range(8):
        x = key.note(d, D.variant_mods(key, 'harm', 1).get(d % 7, 0), near=t + d)
        if d % 7 in degs:
            nb = (x[0] - 1, midi(x) - 1 - (12 * ((x[0] - 1) // 7 + 1) + NAT[(x[0] - 1) % 7]))
            ev += [D.n(x, 2), D.n(nb, 2), D.n(x, 4)]
        else:
            ev.append(D.n(x, 4))
    return ev


def chord_from_notes(rng, kind, clef, count=4):
    """Seventh chords built up from given notes (the given note is the root)."""
    shapes = {'VII7': [('VII₇ nhỏ', [0, 3, 6, 10], [0, 2, 4, 6]), ('VII₇ giảm', [0, 3, 6, 9], [0, 2, 4, 6])],
              'II7': [('II₇ trưởng', [0, 3, 7, 10], [0, 2, 4, 6]), ('II₇ thứ', [0, 3, 6, 10], [0, 2, 4, 6])],
              'D7': [('D₇', [0, 4, 7, 10], [0, 2, 4, 6])]}
    pool = shapes['VII7'] + shapes['II7'] if kind == 'both' else shapes[kind]
    base = 29 if clef == 'treble' else 22
    ev = []
    for i in range(count):
        lab, semis, steps = pool[i % len(pool)]
        for _ in range(50):
            s = base + rng.randint(0, 4)
            a = rng.choice([0, 0, 1, -1])
            root = (s, a)
            ns = []
            for st, se in zip(steps, semis):
                step = s + st
                want = midi(root) + se
                ns.append((step, want - (12 * (step // 7 + 1) + NAT[step % 7])))
            if all(abs(x[1]) <= 1 for x in ns):
                break
        ev += [D.n(x, 2, lab if j == 0 else None) for j, x in enumerate(ns)] + [D.BAR]
    return ev[:-1]


SEQ_MOTIFS = [[(0, 2), (1, 2), (2, 4)], [(0, 2), (2, 2), (1, 4)], [(0, 2), (1, 2), (2, 2), (0, 2)], [(2, 2), (1, 2), (0, 4)], [(0, 4), (4, 2), (2, 2)]]


def lesson_body(rng, L, mel_no):
    ch, n = L['ch'], L['n']
    pre = f'xa-{ch}-{n:02d}'
    mode = 'maj' if L['mode'] in ('maj', 'both') else 'min'
    if L['keys'] == 'C':
        key = Key.parse('C' if mode == 'maj' else 'c')
    else:
        key = Key.parse((MAJ_KEYS if mode == 'maj' else MIN_KEYS)[(n * 5 + ch) % 12])
        if abs(key.signature()) > 4:
            key = Key.parse('G' if mode == 'maj' else 'e')
    sections = []
    k2 = None
    if L['kind'] == 'parallel':
        k2 = key.parallel()
    elif L['kind'] == 'mod':
        k2 = key.relative(*L['rel'])
    ex = 0

    def add(title, events, k=key, time=None, note=''):
        nonlocal ex
        ex += 1
        bid = f'{pre}-d{ex}'
        emit_drill(bid, events, k, time=time, bpm=72 if time else 66)
        cap = title.split(' — ', 1)[1] if ' — ' in title else ''
        sections.append(f'## {title}\n{note}\n::solf {bid}' + (f' | {cap}' if cap else ''))

    variant = L['variant'] if L['variant'] != 'mix' else 'harm'
    targets = L['targets']
    pattern = [[4], [2, 2, 4], [6, 2], [2, 2, 2, 2], [3, 1, 4]][(n + ch) % 5]
    if ch in (1, 2):
        ev, t = D.drill_scale(key, variant if L['variant'] != 'mix' else 'mel', 'treble', pattern)
        if ch == 2:
            # the scale with the altered degree: raised on the way up, lowered on the way down
            sc = D.scale_notes(key, variant, 'treble')
            for d, m in targets:
                for i, x in enumerate(sc):
                    if key.degree(x)[0] == d and ((m > 0 and i < 8) or (m < 0 and i >= 8)):
                        sc[i] = key.note(d, m, near=x[0])
            durs = D.rhythm_fill(sc, pattern, 8)
            ev = [D.n(x, dd) for x, dd in zip(sc, durs)]
        add(f'I. Âm giai — {key.tonic_name()}', ev, time='2/4', note='Hát âm giai, giữ đúng trường độ từng nốt và đánh nhịp. Sau đó hát lại theo các tiết tấu khác: ♫ ♩, ♩. ♪, ♬ ♬.')
        if L['kind'] == 'parallel':
            add(f'I b. Âm giai — {k2.tonic_name()}', D.drill_scale(k2, 'harm', 'treble', pattern)[0], k=k2, time='2/4')
        tg = targets or [(2, 0 if mode == 'maj' else 0)]
        add('II. Câu mẫu', D.popevki(key, tg, 'treble', variant),
            note='Hát và học thuộc các câu mẫu: mỗi câu đi từ bậc cần nhớ về âm chủ. Gọi tên nốt rồi gọi tên bậc.')
        add('III. Hát các bậc', D.degrees(rng, key, tg, 'treble', variant),
            note='Nghe hợp âm chủ (nút ♪ Lên dây), rồi hát từng bậc ở quãng 8 thầy cô chỉ định — không hát lướt qua các nốt ở giữa.')
        ivs = [c for c in L.get('ivs', []) if isinstance(c, str)]
        if ivs:
            degs_extra = L.get('extra', [])
            ev = D.altered_intervals(key, variant, ivs, 'treble') if not degs_extra else altered_with(key, variant, ivs, degs_extra)
            if ev:
                add('IV. Quãng tăng, giảm và giải quyết', ev,
                    note='Một người đánh đàn quãng hoà âm, một người hát; rồi hát tách hai nốt và giải quyết. Nhớ màu của từng quãng để nhận ra khi nghe.')
        motif = SEQ_MOTIFS[(n + ch) % len(SEQ_MOTIFS)]
        add('V. Mô tiến', D.sequence(key, variant, 'treble', motif), note='Hát mô tiến theo các bậc của điều thức, đi lên rồi đi xuống.')
        for i, names in enumerate(L.get('prog', [])[:2]):
            keys = [key if x in chords(key.mode) else key.parallel() for x in names]
            add(f'VI{"" if i == 0 else " b"}. Chuỗi hợp âm', D.progression(key, names, 'treble', keys=keys if any(k != key for k in keys) else None),
                note='Hát rải từng hợp âm từ bè trầm lên; nghe trước hợp âm tiếp theo trước khi hát nốt đầu của nó.' if i == 0 else '')
    elif ch == 3:
        part = L.get('scale')
        if part:
            ev = D.chromatic_scale(key, 'treble', None if part == 'full' else part)
            durs = D.rhythm_fill(ev, [2] if part == 'full' else [4], 8)
            add(f'I. Âm giai cromatic — {key.tonic_name()}', [D.n(x, dd) for x, dd in zip(ev, durs)], time='2/4',
                note='Hát chậm, nghĩ trước bậc diatonic mà mỗi nốt cromatic đi tới.')
            km = key.relative(5, 'min') if key.mode == 'maj' else key
            ev = D.chromatic_scale(km, 'treble', None if part == 'full' else part)
            durs = D.rhythm_fill(ev, [2] if part == 'full' else [4], 8)
            add(f'I b. Âm giai cromatic — {km.tonic_name()}', [D.n(x, dd) for x, dd in zip(ev, durs)], k=km, time='2/4')
        else:
            degs = L.get('chrom_to', range(7))
            add(f'I. Âm giai có nốt thêu cromatic — {key.tonic_name()}', neighbour_scale(key, set(degs) if n == 1 else {1, 2, 3, 4, 5, 6, 0}, 'treble'),
                note='Mỗi bậc được "thêu" bằng nốt cách nửa cung bên dưới rồi trở về.')
        codes = L['ivs'][1]
        add('II. Quãng từ một nốt cho trước', D.intervals_from(rng, codes, 'treble', 8),
            note='Hát nốt đầu, rồi hát quãng theo hướng mũi tên. Không dựa vào giọng nào: chỉ nghe khoảng cách.')
        add('III. Hợp âm bảy từ một nốt cho trước', chord_from_notes(rng, L['chord_from'], 'treble'),
            note='Nốt cho trước là nốt gốc của hợp âm.')
        motif = SEQ_MOTIFS[n % len(SEQ_MOTIFS)]
        add('IV. Mô tiến', D.sequence(key, 'harm', 'treble', motif), note='Hát mô tiến, rồi hát lại và thêm nốt thêu cromatic vào trước mỗi phách mạnh.')
    else:
        if L['kind'] in ('mod', 'parallel'):
            b = k2
            add(f'I. Âm giai hai giọng — {key.tonic_name()} và {b.tonic_name()}', D.drill_scale(key, 'harm', 'treble', pattern)[0] + [D.BAR] + D.drill_scale(b, 'harm', 'treble', pattern)[0], time=None,
                note='Hát âm giai giọng gốc rồi giọng mới; đánh dấu những nốt khác nhau giữa hai giọng.')
            add('II. Câu mẫu chuyển giọng', switch_phrase(key, b), note='Hát hợp âm chủ của giọng gốc, rồi câu mẫu kết của giọng mới: tai "đặt lại" âm chủ.')
            prog = modulating_prog(rng, key, b)
            if prog:
                add('III. Chuỗi hợp âm chuyển giọng', prog, note='Hát rải từng hợp âm; chữ dưới nốt ghi giọng và chức năng, chỗ đổi giọng ghi tên giọng mới.')
        else:
            add(f'I. Âm giai — {key.tonic_name()}', D.drill_scale(key, 'harm', 'treble', pattern)[0], time='2/4', note='Hát âm giai của giọng xuất phát.')
            if L['kind'] == 'enh':
                for via in (['enh-dim'] if n == 6 else ['enh-ger', 'enh-aug']):
                    b = enh_target(random.Random(n), key, via)
                    if b:
                        names = {'enh-dim': ('VII7', 'VII7'), 'enh-ger': ('D7', 'Ger'), 'enh-aug': ('D+', 'D+')}[via]
                        ev = D.progression(key, ['T' if key.mode == 'maj' else 't', names[0]], 'treble') + [D.BAR] + \
                            D.progression(b, [names[1], 'K64' if via == 'enh-ger' else ('T' if b.mode == 'maj' else 't')], 'treble', keys=None)
                        lab = {'enh-dim': 'hợp âm bảy giảm', 'enh-ger': 'bảy át → sáu tăng', 'enh-aug': 'hợp âm ba tăng'}[via]
                        add(f'II. Trùng âm: {lab} ({key.tonic_name()} → {b.tonic_name()})', ev,
                            note='Hai lần cùng các âm ấy: lần đầu viết theo giọng cũ, lần sau viết theo giọng mới. Giữ cao độ, đổi cách nghe.')
            add('III. Mô tiến', D.sequence(key, 'harm', 'treble', SEQ_MOTIFS[n % len(SEQ_MOTIFS)]), note='Hát mô tiến; ở bài có chuyển giọng, hát lại mô tiến trong giọng đích.')

    # melodies
    keys = []
    if L['mode'] == 'both':
        km = key_list(L, 'maj', n + ch)
        kn = key_list(L, 'min', n + ch + 3)
        keys = [x for pair in zip(km, kn) for x in pair]
    else:
        keys = key_list(L, mode, n * 2 + ch)
    mels = []
    for i in range(L['melodies']):
        mel, k, meter, clef, tempo, bpm, info = melody_for(rng, L, i, keys)
        bid = f'{pre}-m{i + 1}'
        emit_melody(bid, mel, k, meter, clef, tempo, bpm)
        cap = f'Số {mel_no + i} · {tempo} · ' + (info or k.tonic_name()) + (' · khoá Fa' if clef == 'bass' else '')
        mels.append(f'::solf {bid} | {cap}')
    body = '\n\n'.join(sections)
    return body, mels


def altered_with(key, variant, codes, extra):
    """Altered intervals using the lesson's altered degrees as well as the mode's."""
    t = D.tonic_step(key, 'treble')
    degs = [(d, D.variant_mods(key, variant, 1).get(d, 0)) for d in range(7)] + list(extra)
    ev, seen = [], set()
    for d1, m1 in degs:
        for d2, m2 in degs:
            if (d1, m1) not in extra and (d2, m2) not in extra:
                continue
            lo = key.note(d1, m1, near=t + d1)
            hi = key.note(d2, m2, near=lo[0] + 1)
            while hi[0] <= lo[0]:
                hi = (hi[0] + 7, hi[1])
            from core import iv_name, iv_vn
            code = iv_name(lo, hi)
            if code in codes and code + str(d1) + str(m1) not in seen:
                rl, rh = D.resolve_tone(key, lo, True), D.resolve_tone(key, hi, False)
                if (rl, rh) == (lo, hi):
                    continue
                seen.add(code + str(d1) + str(m1))
                ev += [D.n([lo, hi], 8, None, iv_vn(code)), D.n([rl, rh], 8), D.BAR, D.n(lo, 4), D.n(hi, 4), D.n(rh, 4), D.n(rl, 4), D.BAR]
    return ev[:-1]


def switch_phrase(a, b):
    """The old key's tonic chord, then the new key's cadence phrase (3 – 2 – 1 and 5 – 7 – 1)."""
    ev = [D.n(x, 2, D.short(a) + ': T' if i == 0 else None) for i, x in enumerate(D.arpeggio(a, 'T' if a.mode == 'maj' else 't', 'treble', D.tonic_step(a, 'treble')))]
    ev.append(D.BAR)
    t = D.tonic_step(b, 'treble')
    for i, (d, m) in enumerate([(2, 0), (1, 0), (0, 0)]):
        ev.append(D.n(b.note(d, m, near=t + d), 2 if i < 2 else 4, D.short(b) + ': III' if i == 0 else None))
    ev.append(D.BAR)
    for i, (d, m) in enumerate([(4, 0), (6, 1 if b.mode == 'min' else 0), (7, 0)]):
        ev.append(D.n(b.note(d, m, near=t + d - (7 if d >= 4 and i == 0 else 0)), 2 if i < 2 else 4))
    return ev


def modulating_prog(rng, a, b):
    if a.parallel() == b:
        names, keys = ['T' if a.mode == 'maj' else 't', 'S' if a.mode == 'maj' else 's', 'D7', 'T' if b.mode == 'maj' else 't'], [a, a, b, b]
    else:
        ps = pivots(a, b)
        if not ps:
            return None
        pref = [p for p in ps if p[1] in ('S', 's', 'II', 'VI') and p[0] not in ('T', 't')] or ps
        na, nb = pref[0]
        names = ['T' if a.mode == 'maj' else 't', na, 'K64', 'D7', 'T' if b.mode == 'maj' else 't']
        keys = [a, a, b, b, b]
        labels = [None, f'{LABEL[na]} = {D.short(b)}: {LABEL[nb]}', 'K₆₄', None, None]
        return D.progression(a, names, 'treble', keys=keys, labels=labels)
    return D.progression(a, names, 'treble', keys=keys)


def preliminary():
    """The preliminary chapter: pop-phrases of the three kinds of major and minor, chromatic intonation, modulation."""
    out = []
    C, c = Key.parse('C'), Key.parse('c')
    ex = 0

    def add(events, k, cap, time=None):
        nonlocal ex
        ex += 1
        bid = f'xa-0-d{ex}'
        emit_drill(bid, events, k, time=time, bpm=66)
        out.append(f'::solf {bid} | {cap}')

    # pop-phrases: every degree led to the tonic (major), from a side degree to the main one
    for k, variant, title in ((C, 'nat', 'Câu mẫu của Đô trưởng tự nhiên'), (C, 'harm', 'Câu mẫu của Đô trưởng hoà thanh (bậc VI hạ)'), (c, 'harm', 'Câu mẫu của Đô thứ hoà thanh'), (c, 'mel', 'Câu mẫu của Đô thứ giai điệu')):
        tg = [(d, D.variant_mods(k, variant, 1 if d >= 4 else -1).get(d, 0)) for d in (2, 4, 5, 6, 1)]
        add(D.popevki(k, tg[:3], 'treble', variant), k, title)
    # chromatic notes heard from the degree they lead to: wide chromatic semitone, narrow diatonic one
    t = D.tonic_step(C, 'treble')
    ev = []
    for (d, m), lab in (((1, 1), '♯II → III'), ((3, 1), '♯IV → V'), ((4, 1), '♯V → VI'), ((1, -1), '♭II → I')):
        x = C.note(d, 0, near=t + d)
        y = C.note(d, m, near=t + d)
        z = C.note(d + (1 if m > 0 else -1), 0, near=t + d + (1 if m > 0 else -1))
        ev += [D.n(x, 4, lab), D.n(y, 4), D.n(z, 8), D.BAR]
    add(ev[:-1], C, 'Nốt cromatic đi tới bậc diatonic: nửa cung cromatic (Rê – Rê♯) hát rộng, nửa cung diatonic (Rê♯ – Mi) hát hẹp')
    # switching the ear into the new key through a pop-phrase
    for b in (Key.parse('a'), Key.parse('e')):
        add(switch_phrase(C, b), C, f'Từ Đô trưởng sang {b.tonic_name()}: hợp âm chủ của giọng cũ, rồi câu mẫu kết của giọng mới')
    return out


def main():
    rng = random.Random(1973)
    lessons = []
    mel_no = 1
    for L in LESSONS:
        body, mels = lesson_body(rng, L, mel_no)
        mel_no += len(mels)
        lessons.append({'ch': L['ch'], 'n': L['n'], 'title': L['title'], 'topics': L['topics'], 'text': L['text'], 'drills': body, 'melodies': mels})
        print(f'{L["ch"]}.{L["n"]}: {len(mels)} melodies', flush=True)
    pre = preliminary()
    (ROOT / 'music' / 'ex' / 'xuong-am.txt').write_text('% Sight-singing book (chromaticism and modulation): written by scripts/xuongam/gen.py, do not edit by hand.\n\n' + '\n\n'.join(blocks) + '\n')
    (ROOT / 'src' / 'features' / 'theory' / 'content' / 'xuong-am.json').write_text(json.dumps({'lessons': lessons, 'prelude': pre}, ensure_ascii=False, indent=1) + '\n')
    (ROOT / 'src' / 'features' / 'theory' / 'xuong-am-play.json').write_text(json.dumps(play, separators=(',', ':')) + '\n')
    print(len(blocks), 'blocks,', mel_no - 1, 'melodies')
    if len(sys.argv) > 1:
        Path(sys.argv[1]).write_text('\n'.join(DUMP) + '\n')


if __name__ == '__main__':
    main()
