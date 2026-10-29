"""
The six kinds of drill that open every lesson, after the plan of the conservatory solfège course:
  I   the scale, in a rhythm, with conducting
  II  pop-phrases (short phrases that end on the tonic) to fix the new degree in the ear
  III degrees of the mode sung from the tonic, in any order
  IV  augmented and diminished intervals of the mode, each followed by its resolution
  V   sequences on the degrees of the mode
  VI  chords and chord progressions, sung as arpeggios, with their functions written under them

A block is a list of events: ('n', [notes], dur16, label_below, text_above) or ('|',) for a double bar.
"""
from core import Key, midi, chords, LABEL, iv_name, iv_vn, interval, quality, ly_pitch, name_vn
from melody import variant_mods

DUR = {1: '16', 2: '8', 3: '8.', 4: '4', 6: '4.', 8: '2', 12: '2.', 16: '1'}


def n(notes, dur, below=None, above=None):
    return ('n', notes if isinstance(notes, list) else [notes], dur, below, above)


BAR = ('|',)


def deg_note(key, d, mod, near):
    return key.note(d, mod, near=near)


def place(key, d, mod, lo_step):
    """The degree at or above step lo_step."""
    x = key.note(d, mod, near=lo_step + 3)
    while x[0] < lo_step:
        x = (x[0] + 7, x[1])
    while x[0] >= lo_step + 7:
        x = (x[0] - 7, x[1])
    return x


def tonic_step(key, clef):
    """Step of the tonic to start from: around C4 – G4 (treble) or C3 – G3 (bass)."""
    base = 28 if clef == 'treble' else 21
    s = base + ((key.letter - base) % 7)
    if s - base > 4:
        s -= 7
    t = (s, key.alter)
    if midi(t) < (59 if clef == 'treble' else 47):
        s += 7
    return s


def scale_notes(key, variant, clef):
    t = tonic_step(key, clef)
    up = [key.note(d, variant_mods(key, variant, 1).get(d % 7, 0), near=t + d) for d in range(8)]
    down = [key.note(d, variant_mods(key, variant, -1).get(d % 7, 0), near=t + d) for d in range(7, -1, -1)]
    return up + down[1:]


def chromatic_scale(key, clef, part=None):
    """Chromatic scale by the usual Russian spelling rule: major — up all degrees raised except VI (♭VII instead),
    down all lowered except V (♯IV instead); minor — up all raised except I (♭II instead), down as the parallel
    major. part: 'low' (I – V), 'high' (V – I) or None."""
    t = tonic_step(key, clef)
    if key.mode == 'maj':
        up = [(0, 0), (0, 1), (1, 0), (1, 1), (2, 0), (3, 0), (3, 1), (4, 0), (4, 1), (5, 0), (6, -1), (6, 0), (7, 0)]
        down_key, down = key, [(7, 0), (6, 0), (6, -1), (5, 0), (5, -1), (4, 0), (3, 1), (3, 0), (2, 0), (2, -1), (1, 0), (1, -1), (0, 0)]
    else:
        up = [(0, 0), (1, -1), (1, 0), (2, 0), (2, 1), (3, 0), (3, 1), (4, 0), (5, 0), (5, 1), (6, 0), (6, 1), (7, 0)]
        down_key, down = key.parallel(), [(7, 0), (6, 0), (6, -1), (5, 0), (5, -1), (4, 0), (3, 1), (3, 0), (2, 0), (2, -1), (1, 0), (1, -1), (0, 0)]
    a = [key.note(d, m, near=t + d) for d, m in up]
    b = [down_key.note(d, m, near=t + d) for d, m in down]
    if part == 'low':
        i = next(i for i, x in enumerate(a) if key.degree(x) == (4, 0))
        a = a[:i + 1]
        j = next(j for j, x in enumerate(b) if key.degree(x) == (4, 0))
        b = b[j:]
    elif part == 'high':
        i = next(i for i, x in enumerate(a) if key.degree(x) == (4, 0))
        a = a[i:]
        j = next(j for j, x in enumerate(b) if key.degree(x) == (4, 0))
        b = b[:j + 1]
    return a + b[1:]


def rhythm_fill(notes, pattern, bar):
    """Durations cycling through `pattern`; the last note lengthened to complete its bar."""
    durs = [pattern[i % len(pattern)] for i in range(len(notes) - 1)]
    used = sum(durs) % bar
    last = bar - used
    while last not in DUR:
        last += bar
        if last > 16:
            durs[-1] = 4 if bar % 4 == 0 else durs[-1]
            used = sum(durs) % bar
            last = bar - used
            break
    return durs + [last]


def drill_scale(key, variant, clef, pattern=(4,), chromatic=None):
    notes = chromatic_scale(key, clef, chromatic if chromatic != 'full' else None) if chromatic else scale_notes(key, variant, clef)
    durs = rhythm_fill(notes, list(pattern), 8)
    return [n(x, d) for x, d in zip(notes, durs)], '2/4'


def roman(d, mod):
    acc = {1: '♯', -1: '♭', 0: ''}[mod]
    return acc + ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][d % 7]


def popevki(key, targets, clef, variant):
    """Short phrases from each target degree to the tonic: down by step through the mode, up by step, and from the
    tonic out to the target and back home."""
    t = tonic_step(key, clef)
    ev = []
    for d, m in targets:
        tgt = key.note(d, m, near=t + d)
        res = 1 if (m > 0 or (key.mode == 'min' and d == 6 and m == 0 and False)) else -1
        if m == 0:
            res = -1 if d in (1, 3, 5) else 1
        # 1) target, its resolution, then by step to the tonic in the same direction
        path = [d]
        cur = d + res
        while True:
            path.append(cur)
            if cur % 7 == 0:
                break
            cur += res
            if len(path) > 8:
                break
        notes = []
        for i, k in enumerate(path):
            mod = m if i == 0 else variant_mods(key, variant, res).get(k % 7, 0)
            notes.append(key.note(k, mod, near=t + k))
        ev += [n(x, 2, roman(*key.degree(x)) if j == 0 else None) for j, x in enumerate(notes[:-1])] + [n(notes[-1], 4)] + [BAR]
        # 2) tonic – target – resolution – tonic
        home = key.note(0, 0, near=t + (7 if d >= 4 and res > 0 else 0))
        r = key.note(d + res, variant_mods(key, variant, res).get((d + res) % 7, 0), near=t + d + res)
        seq = [home, tgt, r]
        if r[0] % 7 != home[0] % 7:
            seq.append(key.note(0, 0, near=r[0]))
        ev += [n(x, 2) for x in seq[:-1]] + [n(seq[-1], 4)] + [BAR]
    return ev[:-1]


def degrees(rng, key, targets, clef, variant, count=14):
    t = tonic_step(key, clef)
    pool = [(d, variant_mods(key, variant, 1).get(d, 0)) for d in range(7)] + list(targets) * 2
    seq = [(0, 0)]
    while len(seq) < count:
        x = rng.choice(pool)
        if x != seq[-1]:
            seq.append(x)
    if seq[-1] == (0, 0):
        seq.pop()
    seq.append((0, 0))
    ev = []
    for i, (d, m) in enumerate(seq):
        x = key.note(d, m, near=t + d)
        ev.append(n(x, 16, roman(d, m) if i else 'T'))
    return ev


def resolve_tone(key, x, partner_up):
    """Where one tone of an interval goes: tendency notes by step in their direction, the other unstable degrees to the
    nearest tone of the tonic triad, the stable degrees stay."""
    d, m = key.degree(x)
    if m > 0 or (key.mode == 'min' and d == 6 and m > 0):
        return key.note(d + 1, 0 if (d + 1) % 7 in (0, 2, 4) else variant_mods(key, 'harm', 1).get((d + 1) % 7, 0), near=x[0] + 1)
    if m < 0:
        return key.note(d - 1, 0, near=x[0] - 1)
    if d in (0, 2, 4):
        return x
    if key.mode == 'maj' and d == 6:
        return key.note(7, 0, near=x[0] + 1)
    if d == 1:
        return key.note(0, 0, near=x[0] - 1) if partner_up else key.note(2, 0, near=x[0] + 1)
    if d == 3:
        return key.note(2, 0, near=x[0] - 1)
    if d == 5:
        return key.note(4, 0, near=x[0] - 1)
    return key.note(0, 0, near=x[0] + 1)


def altered_intervals(key, variant, codes, clef):
    """All intervals of the given kinds (e.g. 'A2', 'd7') inside an octave of the mode, with resolutions."""
    t = tonic_step(key, clef)
    degs = [(d, variant_mods(key, variant, 1).get(d, 0)) for d in range(7)]
    if variant == 'mel' and key.mode == 'maj':
        degs = [(d, -1 if d in (5, 6) else 0) for d in range(7)] + [(5, 0), (6, 0)]
    if variant == 'mel' and key.mode == 'min':
        degs = [(d, 1 if d in (5, 6) else 0) for d in range(7)]
    found = []
    seen = set()
    for i, (d1, m1) in enumerate(degs):
        for d2, m2 in degs:
            lo = key.note(d1, m1, near=t + d1)
            hi = key.note(d2, m2, near=lo[0] + 1)
            while hi[0] <= lo[0]:
                hi = (hi[0] + 7, hi[1])
            code = iv_name(lo, hi)
            if code in codes and code + str(d1) not in seen:
                seen.add(code + str(d1))
                rl, rh = resolve_tone(key, lo, True), resolve_tone(key, hi, False)
                if rl == lo and rh == hi:
                    continue
                found.append((code, lo, hi, rl, rh))
    found.sort(key=lambda f: codes.index(f[0]))
    ev = []
    for code, lo, hi, rl, rh in found:
        ev += [n([lo, hi], 8, None, iv_vn(code)), n([rl, rh], 8), BAR]
        ev += [n(lo, 4), n(hi, 4), n(rh, 4), n(rl, 4), BAR]
    return ev[:-1]


def intervals_from(rng, codes, clef, count=6):
    """Intervals built up and down from given notes (chapter III: 'from a given sound')."""
    from core import NAT
    base = 30 if clef == 'treble' else 23
    ev = []
    for i in range(count):
        code = codes[i % len(codes)]
        q, num = code[0], int(code[1:])
        for _ in range(50):
            s = base + rng.randint(0, 5)
            a = rng.choice([0, 0, 1, -1])
            lo = (s, a)
            hi_step = s + num - 1
            target = midi(lo) + {'m2': 1, 'M2': 2, 'm3': 3, 'M3': 4, 'P4': 5, 'P5': 7, 'm6': 8, 'M6': 9, 'm7': 10, 'M7': 11}[code]
            hi = (hi_step, target - midi((hi_step, 0)))
            if abs(hi[1]) <= 1 and (lo[1] == 0 or rng.random() < 0.6):
                break
        up = rng.random() < 0.5
        pair = [lo, hi] if up else [hi, lo]
        ev += [n(pair[0], 4, None, iv_vn(code) + (' ↑' if up else ' ↓')), n(pair[1], 4), BAR]
    return ev[:-1]


def sequence(key, variant, clef, motif, steps=4):
    """A motif (degrees relative to its first note) moved up the scale by step, then down."""
    t = tonic_step(key, clef)
    ev = []
    for direction in (1, -1):
        for k in range(steps):
            start = k * direction if direction > 0 else 7 - k
            for j, (off, dur) in enumerate(motif):
                deg = start + off * (1 if direction > 0 else -1) if False else start + off
                if direction < 0:
                    deg = start - off
                x = key.note(deg, variant_mods(key, variant, direction).get(deg % 7, 0), near=t + deg)
                ev.append(n(x, dur, None, ('lên' if direction > 0 else 'xuống') if k == 0 and j == 0 else None))
        ev.append(BAR)
    return ev[:-1]


def arpeggio(key, name, clef, lo_step, inversion=0):
    tones = chords(key.mode)[name]
    order = tones[inversion:] + tones[:inversion]
    out = []
    s = lo_step
    for d, m in order:
        x = key.note(d, m, near=s)
        while out and x[0] <= out[-1][0]:
            x = (x[0] + 7, x[1])
        while not out and x[0] < lo_step:
            x = (x[0] + 7, x[1])
        out.append(x)
        s = x[0] + 2
    if midi(out[-1]) > 81:  # keep the arpeggio within the singing range
        out = [(x[0] - 7, x[1]) for x in out]
    return out


INV = {3: ['', '₆', '₆₄'], 4: ['₇', '₆₅', '₄₃', '₂'], 5: ['₉']}


def chord_label(name, inversion, size):
    lab = LABEL[name]
    if size == 3 and name not in ('K64',):
        return lab + INV[3][inversion]
    if size == 4:
        lab = lab.rstrip('₇')
        return lab + INV[4][inversion]
    return lab


def short(k):
    """Key name for analysis lines: the tonic, lower case for minor (Fa = Fa trưởng, rê = Rê thứ)."""
    t = name_vn((k.letter, k.alter))
    return t if k.mode == 'maj' else t[0].lower() + t[1:]


def progression(key, names, clef, inversions=None, keys=None, labels=None):
    """Chords sung as arpeggios (up the chord, a quarter note each, the last chord's root held), function under the
    first note of each chord. keys: a key per chord (for modulating progressions)."""
    t = tonic_step(key, clef)
    ev = []
    for i, name in enumerate(names):
        k = keys[i] if keys else key
        inv = (inversions or [0] * len(names))[i]
        tones = chords(k.mode)[name]
        lo = t - 2 if clef == 'treble' else t - 2
        notes = arpeggio(k, name, clef, lo + (0 if name in ('T', 't', 'K64') else 0), inv if name != 'K64' else 2)
        lab = chord_label(name, inv if name != 'K64' else 0, len(tones))
        if keys and (i == 0 or keys[i] != keys[i - 1]):
            lab = f'{short(k)}: {lab}' if i else lab
        if labels and labels[i]:
            lab = labels[i]
        for j, x in enumerate(notes):
            ev.append(n(x, 2 if len(notes) == 4 else 4 if len(notes) == 2 else 2, lab if j == 0 else None))
        ev.append(BAR)
    return ev[:-1]
