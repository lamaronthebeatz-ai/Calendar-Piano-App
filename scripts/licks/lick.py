"""
Builds, checks and writes out one lick.

A lick is a chord timeline [(Chord, start, end)] in eighth notes and events [(midi | None, dur, device)], where
device names the figure the note belongs to (for the caption). The checker works only from the sounding notes and
the chords, independently of how the generator built them.
"""
import random
from theory import Chord, LET, ly, simple, spell

DUR = {1: '8', 2: '4', 3: '4.', 4: '2', 6: '2.', 8: '1'}
LO, HI = 60, 86  # C4 .. D6, the comfortable right-hand range written in treble clef


def chord_at(tl, pos):
    for c, a, b in tl:
        if a <= pos < b:
            return c
    return tl[-1][0]


def positions(events):
    p, out = 0, []
    for m, d, dev in events:
        out.append((p, m, d, dev))
        p += d
    return out


# ---------------------------------------------------------------- checker
def check(tl, events, end_roles=('ct',), allow_end_t=True):
    """Return a list of broken rules (empty = the lick is good)."""
    errs = []
    ev = positions(events)
    notes = [(p, m, d) for p, m, d, _ in ev if m is not None]
    total = tl[-1][2]
    if sum(d for _, d, _ in events) != total:
        errs.append('length')
    last = max(i for i, e in enumerate(ev) if e[1] is not None)
    for i, (p, m, d, _) in enumerate(ev):
        if p // 8 != (p + d - 1) // 8 and i != last:
            errs.append(f'bar-cross@{p}')
    if not notes:
        return ['empty']
    for i, (p, m, d) in enumerate(notes):
        c = chord_at(tl, p)
        role = c.role(m)
        nxt = notes[i + 1] if i + 1 < len(notes) else None
        if not LO <= m <= HI:
            errs.append(f'range@{p}')
        # chord tones and tensions only may be held (a quarter or more)
        if d >= 2 and role not in ('ct', 't'):
            errs.append(f'held-{role}@{p}')
        # at a change of chord the new chord is stated by a chord tone or tension
        if any(a == p for _, a, _ in tl[1:]) and role not in ('ct', 't'):
            errs.append(f'change-{role}@{p}')
        on_beat = p % 2 == 0
        if role == 'av' and on_beat:
            errs.append(f'avoid-on-beat@{p}')
        if role in ('av', 'p', 'c'):
            if not nxt:
                errs.append(f'ends-on-{role}')
                continue
            step = abs(nxt[1] - m)
            if on_beat and role != 'av':
                # an accented approach/enclosure note: the chord tone it aims at follows on the next beat
                tgt = [n for n in notes if n[0] == p + 2]
                tc = chord_at(tl, p + 2)
                if not tgt or tc.role(tgt[0][1]) not in ('ct', 't') or abs(tgt[0][1] - m) > 2 or abs(nxt[1] - tgt[0][1]) > 2:
                    errs.append(f'accent-{role}@{p}')
            elif step > (1 if role == 'c' else 2):
                # off the beat: a passing, avoid or chromatic note moves on by step — except the first note of an
                # enclosure, whose partner on the other side then lands on the target
                aft = notes[i + 2] if i + 2 < len(notes) else None
                enclosure = aft and abs(aft[1] - m) <= 2 and abs(aft[1] - nxt[1]) <= 2 and chord_at(tl, aft[0]).role(aft[1]) in ('ct', 't') and aft[0] % 2 == 0
                if not enclosure:
                    errs.append(f'unresolved-{role}@{p}')
    # leaps
    for i in range(1, len(notes)):
        a, b = notes[i - 1], notes[i]
        iv = b[1] - a[1]
        if abs(iv) > 12:
            errs.append(f'leap>8ve@{b[0]}')
        if abs(iv) in (6, 11) or abs(iv) > 9:
            ra, rb = chord_at(tl, a[0]).role(a[1]), chord_at(tl, b[0]).role(b[1])
            if ra != 'ct' or rb not in ('ct', 't'):
                errs.append(f'awkward-leap@{b[0]}')
        if abs(iv) > 7 and i + 1 < len(notes):
            iv2 = notes[i + 1][1] - b[1]
            if iv2 * iv > 0 and abs(iv2) > 4:
                errs.append(f'leap-not-recovered@{b[0]}')
    # no pitch struck twice in a row, no a – b – a – b shuttling
    for i in range(1, len(notes)):
        if notes[i][1] == notes[i - 1][1]:
            errs.append(f'repeat@{notes[i][0]}')
        if i >= 3 and notes[i][1] == notes[i - 2][1] and notes[i - 1][1] == notes[i - 3][1]:
            errs.append(f'shuttle@{notes[i][0]}')
    # the last note: a chord tone (or the 9th / 13th), on the beat
    p, m, d = notes[-1]
    c = chord_at(tl, p)
    r = c.roles.get(m % 12)
    if not r or not (r[2] in end_roles or (allow_end_t and r[2] == 't' and r[0] in (2, 6))):
        errs.append('bad-ending')
    if p % 2 and not (p % 8 == 7 and d > 1):  # off the beat only as an anticipation tied into the next bar
        errs.append('ending-off-beat')
    return errs


# ---------------------------------------------------------------- scoring
def score(tl, events):
    notes = [(p, m, d) for p, m, d, _ in positions(events) if m is not None]
    s = 0.0
    ivs = [notes[i][1] - notes[i - 1][1] for i in range(1, len(notes))]
    steps = sum(1 for v in ivs if abs(v) <= 2)
    ratio = steps / max(1, len(ivs))
    s -= abs(ratio - 0.68) * 6
    span = max(m for _, m, _ in notes) - min(m for _, m, _ in notes)
    s -= max(0, 6 - span) + max(0, span - 17) * 0.7
    turns = sum(1 for i in range(1, len(ivs)) if ivs[i] * ivs[i - 1] < 0)
    s -= abs(turns - max(2, len(ivs) // 4)) * 0.5
    # guide tones: across each change of chord, a step into a chord tone; best of all 7 → 3 by a half step
    for c, a, _ in tl[1:]:
        before = [n for n in notes if n[0] < a]
        at = [n for n in notes if n[0] == a]
        if before and at:
            pm, m = before[-1][1], at[0][1]
            pc = chord_at(tl, before[-1][0])
            if abs(m - pm) <= 2:
                s += 2
                if pc.deg(pm) in ('♭7', '7') and c.deg(m) in ('3', '♭3'):
                    s += 2.5
    end = chord_at(tl, notes[-1][0]).deg(notes[-1][1])
    s += {'3': 2, '♭3': 2, '9': 1.6, '5': 0.8, '1': 0.6, '6': 1, '13': 1, '7': 1.2}.get(end, 0)
    chrom = sum(1 for p, m, _ in notes if chord_at(tl, p).role(m) == 'c')
    s += 1 if 1 <= chrom <= 3 else (-1.5 if chrom > 5 else 0)
    from collections import Counter
    most = Counter(m for _, m, _ in notes).most_common(1)[0][1]
    s -= max(0, most - 3) * 1.2
    return s


# ---------------------------------------------------------------- generator
class Gen:
    """Proposes lines figure by figure; every figure is two beats (four eighths) starting on a beat."""

    def __init__(self, rng: random.Random, figures):
        self.r = rng
        self.figures = figures  # names of the figures allowed in this chapter, with weights

    def ladder(self, c: Chord, kind):
        if kind == 'scale':
            return c.notes(('ct', 't', 'av'))
        if kind == 'bebop':
            return c.notes(('ct', 't', 'av', 'p'))
        if kind == 'arp':
            return c.notes(('ct',))
        if kind == 'arp9':
            return sorted(set(c.notes(('ct',))) | {m for m in c.notes(('t',)) if c.deg(m) in ('9', '♭9', '♯9')})
        if kind == 'penta':  # minor pentatonic on the root (1 ♭3 4 5 ♭7) — or major pentatonic (1 2 3 5 6)
            minor = c.sym in ('m7', 'm6', 'mM7', 'm7b5') or c.qual == '7B'
            pcs = {(c.pc + s) % 12 for s in ((0, 3, 5, 7, 10) if minor else (0, 2, 4, 7, 9))}
            return [m for m in range(50, 96) if m % 12 in pcs]
        if kind == 'blues':
            pcs = {(c.pc + s) % 12 for s in (0, 3, 5, 6, 7, 10)}
            return [m for m in range(50, 96) if m % 12 in pcs]
        raise ValueError(kind)

    @staticmethod
    def step(lad, m, d, n=1):
        if m is None:
            return None
        if m not in lad:
            lad = sorted(set(lad) | {m})
        i = lad.index(m) + d * n
        return lad[i] if 0 <= i < len(lad) else None

    def near_target(self, c: Chord, m, d, prefer=('3', '♭3', '7', '♭7')):
        """A chord tone (or tension) of c a step or two from m, in direction d when possible."""
        opts = [x for x in c.notes(('ct', 't')) if 0 < abs(x - m) <= 2]
        if not opts:
            opts = [x for x in c.notes(('ct',)) if 0 < abs(x - m) <= 4]
        if not opts:
            return None
        self.r.shuffle(opts)
        opts.sort(key=lambda x: ((x - m) * d < 0, c.deg(x) not in prefer, c.role(x) != 'ct'))
        return opts[0]

    def dir(self, m):
        if m > HI - 6:
            return -1
        if m < LO + 6:
            return 1
        return self.r.choice((-1, 1))

    def figure(self, name, c: Chord, nc: Chord, m):
        """Four eighths from m (on the beat); returns (notes [(midi, dur)], next start) or None."""
        r, st = self.r, self.step
        d = self.dir(m)
        if name in ('scale', 'bebop'):
            lad = self.ladder(c, 'bebop' if name == 'bebop' else 'scale')
            if name == 'bebop':
                d = -1 if m > LO + 8 else d
            seq = [m]
            for _ in range(4):
                x = st(lad, seq[-1], d)
                if x is None:
                    return None
                seq.append(x)
            return [(x, 1) for x in seq[:4]], seq[4]
        if name in ('arp', 'arp9'):
            lad = self.ladder(c, name)
            seq = [m]
            for _ in range(3):
                x = st(lad, seq[-1], d)
                if x is None:
                    return None
                seq.append(x)
            nxt = st(self.ladder(c, 'scale'), seq[-1], r.choice((d, -d)))
            return [(x, 1) for x in seq], nxt
        if name == 'arp-turn':  # up (or down) an arpeggio, then turn back by step
            lad = self.ladder(c, 'arp9')
            a1, a2 = st(lad, m, d), None
            a2 = a1 and st(lad, a1, d)
            if not a2:
                return None
            s1 = st(self.ladder(c, 'scale'), a2, -d)
            return [(m, 1), (a1, 1), (a2, 1), (s1, 1)], st(self.ladder(c, 'scale'), s1, -d)
        if name == '1235':  # digital pattern 1-2-3-5 on the chord (from its root or 5th)
            lad = self.ladder(c, 'scale')
            roots = [x for x in lad if c.deg(x) == '1' and abs(x - m) <= 7] + [x for x in lad if c.deg(x) == '5' and abs(x - m) <= 5]
            if not roots or m not in roots:
                return None
            s1, s2 = st(lad, m, 1), st(lad, m, 2)
            top = st(self.ladder(c, 'arp9'), s2, 1)
            return [(m, 1), (s1, 1), (s2, 1), (top, 1)], st(lad, top, -1)
        if name == '5321':
            lad = self.ladder(c, 'scale')
            if c.deg(m) not in ('5', '♭5'):
                return None
            a = st(self.ladder(c, 'arp'), m, -1)
            s1 = st(lad, a, -1)
            s2 = st(lad, s1, -1)
            return [(m, 1), (a, 1), (s1, 1), (s2, 1)], st(lad, s2, -1)
        if name in ('enclose', 'enclose-r', 'enclose-d'):  # m, a step, then the two notes either side of the target
            tgt = self.near_target(nc, m + d * r.choice((3, 4, 5)), d) if name != 'enclose-d' else None
            if name == 'enclose-d':  # double chromatic from below
                tgt = self.near_target(nc, m + r.choice((3, 4)), 1)
            if not tgt:
                return None
            if name == 'enclose-d':
                a, b = tgt - 2, tgt - 1
            else:
                up = min((x for x in nc.notes(('ct', 't', 'av', 'p')) if x > tgt), default=tgt + 1)
                if up - tgt > 2:
                    up = tgt + 1
                lo_ = tgt - 1
                a, b = (up, lo_) if name == 'enclose' else (lo_, up)
            x = st(self.ladder(c, 'scale'), m, 1 if a > m else -1)
            return [(m, 1), (x, 1), (a, 1), (b, 1)], tgt
        if name == 'approach':  # two scale steps, then a chromatic note into the target
            lad = self.ladder(c, 'scale')
            s1 = st(lad, m, d)
            s2 = s1 and st(lad, s1, d)
            if not s2:
                return None
            tgt = self.near_target(nc, s2 + 2 * d, d)
            if not tgt or tgt == s2:
                return None
            return [(m, 1), (s1, 1), (s2, 1), (tgt - d if abs(tgt - s2) > 1 else tgt + d, 1)], tgt
        if name == 'turn':  # m, upper neighbour, m, chromatic lower neighbour
            up = st(self.ladder(c, 'scale'), m, 1)
            return [(m, 1), (up, 1), (m, 1), (m - 1, 1)], m if r.random() < 0.3 else st(self.ladder(c, 'arp9'), m, 1)
        if name == 'long':  # a held target, then two eighths into the next one
            lad = self.ladder(c, 'scale')
            s1 = st(lad, m, d)
            tgt = self.near_target(nc, s1 + d, d) if s1 else None
            if not tgt or tgt == s1:
                return None
            return [(m, 2), (s1, 1), (tgt - d if abs(tgt - s1) >= 2 else st(lad, s1, d), 1)], tgt
        if name in ('penta', 'blues'):
            lad = self.ladder(c, name)
            seq = [m]
            for _ in range(4):
                x = st(lad, seq[-1], d if r.random() < 0.8 else -d)
                if x is None:
                    return None
                seq.append(x)
            return [(x, 1) for x in seq[:4]], seq[4]
        if name == 'quartal':  # stacked 4ths inside the scale
            lad = self.ladder(c, 'scale')
            seq = [m]
            for _ in range(3):
                x = st(lad, seq[-1], d, 3)
                if x is None or abs(x - seq[-1]) not in (5, 6):
                    return None
                seq.append(x)
            return [(x, 1) for x in seq], st(lad, seq[-1], -d)
        if name == 'triads':  # upper-structure triad pair of the altered dominant: major triads on ♭6 and ♭5
            roots = [(c.pc + 8) % 12, (c.pc + 6) % 12]
            rt = r.choice(roots)
            tri = sorted(x for x in range(50, 96) if (x - rt) % 12 in (0, 4, 7))
            if m not in tri:
                return None
            seq = [m]
            for _ in range(3):
                seq.append(st(tri, seq[-1], d))
            if None in seq:
                return None
            return [(x, 1) for x in seq], st(self.ladder(c, 'scale'), seq[-1], -d)
        raise ValueError(name)

    def line(self, tl, end_len=None, pickup=0.25, prefix=()):
        """A whole lick over the timeline; the last 2–8 eighths hold the final note."""
        r = self.r
        total = tl[-1][2]
        if end_len is None:
            end_len = r.choice((2, 4, 4, 4, 6, 8)) if total > 8 else 4
        end_at = total - end_len
        if end_at % 8 + end_len > 8:  # the final note stays inside its bar
            end_len = 8 - end_at % 8
        c0 = chord_at(tl, 0)
        m = r.choice([x for x in c0.notes(('ct', 't')) if 64 <= x <= 79])
        events, pos = [], 0
        if prefix:
            events = [(x, d, 'quote') for x, d in prefix]
            pos = sum(d for _, d in prefix)
            last = prefix[-1][0]
            c1 = chord_at(tl, pos)
            m = self.near_target(c1, last, 1) or last
            pickup = 0
        while pos < end_at:
            c, nc = chord_at(tl, pos), chord_at(tl, pos + 4)
            if pos + 4 > end_at:  # a two-eighth gap before the ending
                x = self.step(self.ladder(c, 'scale'), m, self.dir(m))
                events += [(m, 1, 'scale'), (x, 1, 'scale')]
                m, pos = x, pos + 2
                continue
            got = None
            for _ in range(8):
                name = r.choices(*zip(*self.figures))[0]
                got = self.figure(name, c, nc, m)
                if got and None not in [x for x, _ in got[0]] and got[1] is not None:
                    break
                got = None
            if not got:
                return None
            fig, m = got
            events += [(x, d, name) for x, d in fig]
            pos += 4
            if pos in [a for _, a, _ in tl] or pos == end_at:
                # land on the new chord: snap to its nearest chord tone or tension
                c2 = chord_at(tl, pos)
                if not c2.is_target(m):
                    t = self.near_target(c2, m, 1 if events[-1][0] < m else -1)
                    if t is None:
                        return None
                    m = t
        # final note: a chord tone (or 9th) near where the line arrived
        cf = chord_at(tl, end_at)
        ends = [x for x in cf.notes(('ct', 't')) if abs(x - m) <= 2 and (cf.role(x) == 'ct' or cf.deg(x) in ('9', '♭9', '6', '13'))]
        if not ends:
            return None
        events.append((r.choice(ends) if m not in ends else m, end_len, 'end'))
        if r.random() < pickup and events[0][2] not in ('end',):
            events[0] = (None, 1, 'rest')
        return events


# ---------------------------------------------------------------- output
def systems(tl):
    """Licks of up to three bars sit on one line; longer ones break after bar 2 (four bars) or bar 3 (five)."""
    bars = tl[-1][2] // 8
    return [] if bars <= 3 else [8 * (bars - bars // 2)]


def spell_events(tl, events):
    """LilyPond notes for the events, each pitch spelled from its chord (scale degree) or its direction."""
    ev = positions(events)
    breaks = systems(tl)
    out = []
    for i, (p, m, d, _) in enumerate(ev):
        if m is None:
            out.append('r' + DUR[d])
            if p + d in breaks:
                out.append('\\break')
            continue
        c = chord_at(tl, p)
        sp = None
        if c.role(m) != 'c':
            sp = c.spell_scale(m)
        if not sp:
            later = [n for n in ev[i + 1:] if n[1] is not None]
            nxt = later[0] if later else None
            if nxt and abs(nxt[1] - m) > 1 and len(later) > 1 and abs(later[1][1] - m) <= 2:
                nxt = later[1]  # first note of an enclosure: it resolves to the target after its partner
            if nxt:
                nl = out_letter(tl, nxt)
                up = nxt[1] > m
                # approach from below borrows the letter under the target (D♯ → E); from above, the letter over it (D♭ → C)
                cand = spell(m, (nl - 1) % 7 if up else (nl + 1) % 7)
                if cand and abs(cand[1]) <= 1:
                    sp = simple(m, *cand, prefer=1 if up else -1)
            if not sp:
                sp = simple(m, *(spell(m, next(l for l in range(7) if spell(m, l))) or (0, 0)), prefer=-1)
        name = ly(m, *sp)
        first = min(d, 8 - p % 8)
        out.append(name + DUR[first] + ('~ ' + name + DUR[d - first] if d > first else ''))
        if p + d in breaks:
            out.append('\\break')
    return ' '.join(out)


def out_letter(tl, n):
    p, m = n[0], n[1]
    c = chord_at(tl, p)
    if c.role(m) != 'c':
        sp = c.spell_scale(m)
        if sp:
            return sp[0]
    return next(l for l in range(7) if spell(m, l) and spell(m, l)[1] == 0) if any(spell(m, l) and spell(m, l)[1] == 0 for l in range(7)) else 0


def chord_line(tl):
    parts = []
    for c, a, b in tl:
        d = b - a
        if d in DUR:
            parts.append(c.chordmode(DUR[d]))
        else:  # several bars: one symbol, then spacer bars
            parts.append(c.chordmode('1') + ''.join(' s1' for _ in range(d // 8 - 1)))
    return ' '.join(parts)


def lilypond(tl, events):
    return ('\\score { <<\n  \\new ChordNames \\chordmode { ' + chord_line(tl) + ' }\n'
            '  \\new Staff { \\accidentalStyle modern \\time 4/4 \\override Score.NonMusicalPaperColumn.line-break-permission = ##f ' + spell_events(tl, events) + ' \\bar "|." }\n>> }')


DEVICE = {'scale': 'đoạn âm giai', 'bebop': 'âm giai bebop', 'arp': 'rải hợp âm', 'arp9': 'rải 1-3-5-7-9', 'arp-turn': 'rải lên rồi quay đầu',
          '1235': 'mẫu 1-2-3-5', '5321': 'mẫu 5-3-2-1', 'enclose': 'bao vây (trên – dưới)', 'enclose-r': 'bao vây (dưới – trên)',
          'enclose-d': 'tiếp cận cromatic kép', 'approach': 'nốt tiếp cận cromatic', 'turn': 'nốt thêu', 'long': 'nốt ngân + tiếp cận',
          'penta': 'ngũ cung', 'blues': 'âm giai blues', 'quartal': 'quãng 4 chồng', 'triads': 'cặp hợp âm ba (upper structure)'}


def caption(tl, events):
    notes = [(p, m) for p, m, _, _ in positions(events) if m is not None]
    seen = []
    for _, _, dev in events:
        if dev in DEVICE and DEVICE[dev] not in seen:
            seen.append(DEVICE[dev])
    chords = ' – '.join(dict.fromkeys(c.text() for c, _, _ in tl))
    scales = ', '.join(dict.fromkeys(f'{c.root_name()[0]} {c.scale_name}' for c, _, _ in tl))
    gt = []
    for c, a, _ in tl[1:]:
        before = [n for n in notes if n[0] < a]
        at = [n for n in notes if n[0] == a]
        if before and at and abs(at[0][1] - before[-1][1]) <= 2:
            pd, nd = chord_at(tl, before[-1][0]).deg(before[-1][1]), c.deg(at[0][1])
            if pd and nd:
                gt.append(f'{pd}→{nd}')
    end = chord_at(tl, notes[-1][0]).deg(notes[-1][1])
    s = f'{chords} · {scales} · {", ".join(seen)}'
    if gt:
        s += f' · nối hợp âm {", ".join(gt)}'
    return s + f' · kết ở nốt {end}'
