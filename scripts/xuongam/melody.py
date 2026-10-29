"""
Tonal melodies over a chord plan, checked by rule:

  - every beat that starts a chord, and every main beat, carries a chord tone; other notes are passing or neighbour
    notes, entered and left by step;
  - a leap goes from a chord tone to a chord tone; after a leap larger than a fourth the line turns back; two leaps
    the same way outline one chord and stay within an octave;
  - a degree that the chord alters is sung altered (no cross relation inside a chord);
  - a raised note goes on upwards, a lowered note downwards (the leading tone to the tonic, ♭VI to V, ♯IV to V…);
  - augmented and diminished melodic intervals only where the lesson studies them, and then resolved: after an
    augmented interval the line goes on the same way by step, after a diminished one it turns back by step;
  - phrase ends: half cadence on a note of D, full cadence on the tonic reached by step.
"""
import random
from core import Key, midi, interval, quality, chords, name_vn
DEBUG = False

METERS = {
    # beats: list of beat lengths in sixteenths; bar: bar length; patterns: (durations, weight)
    '2/4': dict(beat=4, bar=8, pats=[([4, 4], 3), ([2, 2, 4], 3), ([4, 2, 2], 3), ([2, 2, 2, 2], 3), ([6, 2], 3), ([3, 1, 4], 2), ([3, 1, 2, 2], 2), ([1, 1, 2, 4], 1), ([2, 1, 1, 4], 1), ([4, 1, 1, 1, 1], 1), ([8], 1)],
                end=[[8]], half=[[6, 2], [4, 4], [8]]),
    '3/4': dict(beat=4, bar=12, pats=[([4, 4, 4], 3), ([8, 4], 2), ([6, 2, 4], 3), ([4, 2, 2, 4], 3), ([2, 2, 4, 4], 2), ([4, 4, 2, 2], 2), ([2, 2, 2, 2, 4], 2), ([3, 1, 4, 4], 1), ([4, 6, 2], 1)],
                end=[[12]], half=[[8, 4], [12], [6, 2, 4]]),
    '4/4': dict(beat=4, bar=16, pats=[([4, 4, 4, 4], 2), ([4, 4, 8], 2), ([6, 2, 4, 4], 3), ([4, 2, 2, 4, 4], 3), ([2, 2, 4, 6, 2], 2), ([4, 4, 2, 2, 4], 3), ([8, 4, 4], 1), ([3, 1, 4, 4, 4], 1), ([2, 2, 2, 2, 8], 2)],
                end=[[16]], half=[[8, 8], [12, 4], [4, 4, 8]]),
    '6/8': dict(beat=6, bar=12, pats=[([4, 2, 4, 2], 3), ([6, 4, 2], 3), ([2, 2, 2, 6], 3), ([4, 2, 6], 3), ([2, 2, 2, 4, 2], 2), ([3, 1, 2, 4, 2], 1), ([6, 6], 1)],
                end=[[12]], half=[[6, 6], [4, 2, 6], [12]]),
    '3/8': dict(beat=6, bar=6, pats=[([2, 2, 2], 3), ([4, 2], 3), ([2, 4], 1), ([1, 1, 2, 2], 2), ([3, 1, 2], 2), ([2, 1, 1, 2], 1), ([6], 1)],
                end=[[6]], half=[[6], [4, 2]]),
}


def variant_mods(key, variant, direction):
    """Usual chromatic mods of the degrees in a variety of the mode, for motion in `direction`."""
    m = {}
    if key.mode == 'maj':
        if variant == 'harm':
            m[5] = -1
        elif variant == 'mel' and direction < 0:
            m[5] = m[6] = -1
    else:
        if variant == 'harm':
            m[6] = 1
        elif variant == 'mel' and direction > 0:
            m[5] = m[6] = 1
    return m


def tendency(key, n):
    """+1 a raised note (goes up), −1 a lowered note (goes down), 0 free."""
    d, mod = key.degree(n)
    if mod > 0:
        return 1
    if mod < 0:
        return -1
    if key.mode == 'min' and d == 6:  # natural 7th of minor: comes down
        return -1
    return 0


def is_step(a, b):
    s = abs(a[0] - b[0])
    return s <= 1 and 0 < abs(midi(a) - midi(b)) <= 2


class Bar:
    def __init__(self, key, segs, variant='harm', end=None):
        """segs: [(chord name, start16)]; end: None | 'half' | 'full' | 'final'."""
        self.key, self.segs, self.variant, self.end = key, segs, variant, end
        self.copy = None
        self.need = []      # (degree, mod) the bar must sing
        self.min_tones = 0  # at least this many different notes of the chord

    def chord_at(self, pos):
        name = self.segs[0][0]
        for nm, st in self.segs:
            if st <= pos:
                name = nm
        return name


class Spec:
    def __init__(self, allow=(), alters=(), want=(), chromatic=False, lo=60, hi=79, chrom_to=(0, 1, 2, 3, 4, 5, 6), chrom_kind='both'):
        self.allow = set(allow)        # altered melodic intervals allowed, e.g. {'A2', 'd7'}
        self.alters = list(alters)     # extra (deg, mod) a melody may use as non-chord notes, e.g. [(3, -1)] (♭IV in minor)
        self.want = list(want)         # (deg, mod) that the melody must sing at least twice, in the first key
        self.chromatic = chromatic     # chromatic neighbour / passing notes (chapter III)
        self.lo, self.hi = lo, hi
        self.chrom_to = set(chrom_to)  # chapter III: degrees the chromatic notes lead to
        self.chrom_kind = chrom_kind   # 'aux' (neighbour notes), 'pass' (passing notes) or 'both'


def candidates(bar, chord, prev, spec, direction_hint):
    """Spelled notes that could follow prev within the bar's key."""
    key = bar.key
    tones = chords(key.mode)[chord]
    out = set()
    for step in range(prev[0] - 8, prev[0] + 9):
        letter = step % 7
        d = (letter - key.letter) % 7
        mods = {0}
        for dir_ in (1, -1):
            mods.add(variant_mods(key, bar.variant, dir_).get(d, 0))
        if key.mode == 'min':
            mods.add(1 if d in (5, 6) else 0)
        for td, tm in tones:
            if td == d:
                mods = {tm}
        else:
            pass
        for ad, am in spec.alters:
            if ad == d and not any(td == d for td, _ in tones):
                mods.add(am)
        if spec.chromatic:  # chromatic passing / neighbour notes, also on the letters of the chord
            mods = set(mods) | {m + 1 for m in mods} | {m - 1 for m in mods}
        for m in mods:
            n = (step, key.base_alter(d) + m)
            if abs(n[1]) <= 2 and spec.lo <= midi(n) <= spec.hi:
                out.add(n)
    return out


def chord_tone(key, chord, n):
    return key.degree(n) in chords(key.mode)[chord]


def mel_iv_ok(a, b, spec):
    num, semis = interval(a, b)
    if num > 8 or semis > 12:
        return False
    if semis == 0:
        return False
    if num == 1:  # C – C♯: a chromatic step, only for chromatic passing / neighbour notes
        return spec.chromatic and semis == 1
    q = quality(num, semis)
    if q in ('P', 'M', 'm'):
        return num != 7 or 'm7' in spec.allow or 'M7' in spec.allow
    return f'{q}{num}' in spec.allow


def make(rng, bars, meter, spec, contour=None):
    """Returns [(note | None, dur16, key)] or None when the rules could not be met."""
    M = METERS[meter]
    nbars = len(bars)
    first_key = bars[0].key
    # tonic for the end, near the middle of the range
    mid = (spec.lo + spec.hi) // 2
    final_key = bars[-1].key
    tonics = [n for n in [(s, final_key.alter) for s in range(14, 50) if s % 7 == final_key.letter] if spec.lo + 2 <= midi(n) <= spec.hi - 5]
    if not tonics:
        return None
    final = min(tonics, key=lambda n: abs(midi(n) - (mid - 3)))
    peak_at = rng.uniform(0.55, 0.8)
    top = spec.hi - rng.randint(0, 3)

    def target(i):
        x = i / max(1, nbars - 1)
        base = midi(final)
        if x < peak_at:
            return base + (top - base) * (0.35 + 0.65 * x / peak_at)
        return top + (base - top) * ((x - peak_at) / (1 - peak_at))

    # rhythms: a motif rhythm repeated at the start of each phrase keeps the melody together
    pats = [p for p, _ in M['pats']]
    wts = [w for _, w in M['pats']]
    motif = rng.choices(pats, wts)[0]
    rhythms = []
    for i, b in enumerate(bars):
        if b.end in ('final', 'full'):
            rhythms.append(rng.choice(M['end']))
        elif b.end == 'half':
            rhythms.append(rng.choice(M['half']))
        elif i == 0 or (bars[i - 1].end and rng.random() < 0.8):
            rhythms.append(motif)
        else:
            rhythms.append(rng.choices(pats, wts)[0])

    out = []  # (note, dur, key, chord, is_ct)

    def ok_next(n, pos, bar, chord, beat_start, last_note_of_melody):
        key = bar.key
        if out:
            p, _, pk, pch, pct = out[-1]
            if not mel_iv_ok(p, n, spec):
                return False
            semis = midi(n) - midi(p)
            # the previous note's own pull
            t = tendency(pk, p)
            q = quality(*interval(p, n))
            altered_move = q not in ('P', 'M', 'm')
            # (B♭ – B♮, F♯ – F♮: the spelling rule of the chromatic scale lets these go against their pull)
            if t and not altered_move and not (spec.chromatic and p[0] == n[0]):
                if not (is_step(p, n) and (semis > 0) == (t > 0)):
                    return False
            # a non-chord note is left by step
            if not pct and not is_step(p, n):
                return False
            # after an augmented interval go on the same way by step; after a diminished one turn back by step
            if len(out) >= 2:
                pp = out[-2][0]
                q1 = quality(*interval(pp, p))
                d1 = midi(p) - midi(pp)
                if q1 in ('A', 'AA') and not (is_step(p, n) and (semis > 0) == (d1 > 0)):
                    return False
                if q1 in ('d', 'dd') and not (is_step(p, n) and (semis > 0) != (d1 > 0)):
                    return False
                # after a leap larger than a fourth, turn back
                if abs(d1) > 5 and ((semis > 0) == (d1 > 0) or abs(semis) > 4):
                    return False
                # two leaps the same way: one chord, within an octave
                if abs(d1) > 2 and abs(semis) > 2 and (semis > 0) == (d1 > 0):
                    if abs(d1 + semis) > 12 or not (chord_tone(key, chord, n) and chord_tone(pk, pch, p)) or pch != chord:
                        return False
                # a passing note goes on the same way; a neighbour comes back
                if not pct and len(out) >= 2:
                    pass
            ct = chord_tone(key, chord, n)
            if abs(semis) > 2:
                if not (ct and pct) and not (altered_move and pct):
                    return False
            # same letter, other alteration (C – C♯): only as chromatic passing / neighbour
            if p[0] == n[0] and not spec.chromatic:
                return False
            if len(out) >= 3 and midi(n) == midi(out[-2][0]) and midi(p) == midi(out[-3][0]):
                return False  # no shuttling a–b–a–b
        ct = chord_tone(key, chord, n)
        if not ct and abs(n[1]) == 2:
            return False
        if spec.chromatic and not ct and out:
            d, m = key.degree(n)
            usual = {0} | {variant_mods(key, bar.variant, x).get(d, 0) for x in (1, -1)} | ({1} if key.mode == 'min' and d in (5, 6) else set())
            if m not in usual and (d, m) not in spec.alters:
                # spellings the chromatic scale never uses: lowered I and V, raised VII (major), raised VI (major)
                banned = {(0, -1), (4, -1), (6, 1), (5, 1)} if key.mode == 'maj' else {(0, -1), (4, -1), (0, 1)}
                if (d, m) in banned:
                    return False
                goal = (d + (1 if m > 0 else -1)) % 7
                if goal not in spec.chrom_to:
                    return False
                p = out[-1][0]
                aux = key.degree(p)[0] == goal
                pd = key.degree(p)
                pas = p[0] == n[0] or (key.mode == 'maj' and (d, m) == (6, -1) and pd == (5, 0)) or \
                    (key.mode == 'maj' and (d, m) == (3, 1) and pd == (4, 0)) or (key.mode == 'min' and (d, m) == (1, -1) and pd == (0, 0))
                if spec.chrom_kind == 'aux' and not aux or spec.chrom_kind == 'pass' and not pas or not (aux or pas):
                    return False
        if beat_start and not ct:
            return False
        if not ct and out:
            if not is_step(out[-1][0], n):
                return False
        if not ct and not out:
            return False
        return True

    def try_bar(bi, copy):
        bar = bars[bi]
        rhythm = rhythms[bi]
        pos = 0
        src = None
        if copy:
            src = [x for x in bar_notes[bar.copy]]
            if [d for _, d in src] != rhythm:
                return False
        for ni, dur in enumerate(rhythm):
            chord = bar.chord_at(pos)
            beat_start = pos % M['beat'] == 0
            last = bi == nbars - 1 and ni == len(rhythm) - 1
            if last or (bar.end == 'final' and ni == 0):
                cands = [final]
            elif src:
                cands = [src[ni][0]]
            elif out:
                cands = list(candidates(bar, chord, out[-1][0], spec, 0))
            else:
                cands = [bar.key.note(d, m, near=final[0] + rng.choice([0, 2, 4])) for d, m in chords(bar.key.mode)[chord]]
            valid = [c for c in cands if spec.lo <= midi(c) <= spec.hi and ok_next(c, pos, bar, chord, beat_start, last)]
            if out and (dur == 1 or out[-1][1] == 1):
                valid = [c for c in valid if abs(midi(c) - midi(out[-1][0])) <= 7]
            if bar.end == 'half' and ni == len(rhythm) - 1:
                valid = [c for c in valid if chord_tone(bar.key, chord, c)]
            if bar.end == 'final' and out and ni == 0:
                valid = [c for c in valid if is_step(out[-1][0], c)]
            if bar.end == 'full' and ni == 0:  # a cadence inside the melody may close on the third or fifth
                valid = [c for c in valid if out and is_step(out[-1][0], c)]
            if not valid and DEBUG and bar.end == "full":
                print("FAIL", ni, rhythm, [name_vn(x[0], True) for x in out[-3:]], [name_vn(c, True) for c in cands][:12])
            if not valid:
                return False
            tgt = target(bi + pos / M['bar'])
            weights = []
            for c in valid:
                w = 1.0
                if out:
                    s = abs(midi(c) - midi(out[-1][0]))
                    w *= {0: 0.05, 1: 3, 2: 3, 3: 1.6, 4: 1.6, 5: 1.0, 7: 0.8}.get(s, 0.45)
                w *= 1 / (1 + abs(midi(c) - tgt) / 3)
                dg = bar.key.degree(c)
                if dg in spec.want:
                    w *= 3
                elif spec.chromatic and not chord_tone(bar.key, chord, c) and dg[1] not in (0,) + tuple(variant_mods(bar.key, bar.variant, x).get(dg[0], 0) for x in (1, -1)):
                    w *= 5
                elif dg[1] != 0 and dg not in ((5, 1), (6, 1)):
                    w *= 2.5
                weights.append(w)
            n = rng.choices(valid, weights)[0]
            out.append((n, dur, bar.key, chord, chord_tone(bar.key, chord, n)))
            pos += dur
        mine = out[len(out) - len(rhythm):]
        degs = {bar.key.degree(x[0]) for x in mine}
        if any(nd not in degs for nd in bar.need):
            return False
        if bar.min_tones and len({x[0][0] % 7 for x in mine if x[4]}) < bar.min_tones:
            return False
        return True

    starts = [0] * nbars
    tries = [0] * nbars
    bar_notes = {}
    bi, budget = 0, 45 * nbars
    while bi < nbars:
        budget -= 1
        if budget < 0:
            return None
        del out[starts[bi]:]
        bar = bars[bi]
        copy = getattr(bar, 'copy', None) is not None and tries[bi] < 2 and bar.copy in bar_notes
        if copy:
            rhythms[bi] = [d for _, d in bar_notes[bar.copy]]
        elif tries[bi] and tries[bi] % 8 == 0 and not bar.end:
            rhythms[bi] = rng.choices(pats, wts)[0]
            if bar.min_tones and len(rhythms[bi]) < bar.min_tones + 1:
                rhythms[bi] = max(pats, key=len)
        make.deep = max(getattr(make, "deep", 0), bi)
        if try_bar(bi, copy):
            bar_notes[bi] = [(n, d) for n, d, *_ in out[starts[bi]:]]
            bi += 1
            if bi < nbars:
                starts[bi] = len(out)
                tries[bi] = 0
        else:
            tries[bi] += 1
            if tries[bi] > 30:
                tries[bi] = 0
                bi -= 1
                if bi < 0:
                    return None
                tries[bi] += 1
    # a non-chord or tendency note at the very end of the last bar is impossible (the last note is the tonic)
    if spec.chromatic:
        cnt = 0
        for n, _, k, ch, ct in out:
            d, m = k.degree(n)
            if not ct and m not in {0} | {variant_mods(k, 'harm', x).get(d, 0) for x in (1, -1)} | ({1} if k.mode == 'min' and d in (5, 6) else set()):
                cnt += 1
        if cnt < getattr(spec, "min_chrom", 3):
            return None
    if spec.want:
        k0 = first_key
        cnt = sum(1 for n, _, k, _, _ in out if k == k0 and k.degree(n) in spec.want)
        if cnt < 2:
            return None
    return [(n, d, k) for n, d, k, _, _ in out]
