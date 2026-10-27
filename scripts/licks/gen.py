#!/usr/bin/env python3
"""
Writes the 1001 licks of "Jazz Licks — by Lamar":
  music/ex/jazz-licks.txt                         engraving blocks `=== jl-<chapter>-<n>` (ten licks each)
  src/features/theory/content/jazz-licks.json     per chapter, the markup listing its blocks with one caption per lick
Every lick is built from the figures of the library's jazz articles and must pass lick.check; the best of many
candidates (lick.score) is kept, and no two licks repeat the same intervals and rhythm.
Usage: python3 scripts/licks/gen.py   (deterministic: same seed, same book)
"""
import json, random, sys
from pathlib import Path
from theory import Chord, MAJOR_KEYS, MINOR_KEYS, degree_root
from lick import Gen, check, score, lilypond, caption, positions

ROOT = Path(__file__).resolve().parents[2]
BLOCK = 10
# chord symbols as jazz charts write them, all on one baseline
HEADER = r'''jlFlat = \markup { \raise #0.6 \small \flat }
jlEx = {
  <c e g b>1-\markup { "maj7" }  <c e g a>1-\markup { "6" }  <c ees g bes>1-\markup { "m7" }  <c e g bes>1-\markup { "7" }
  <c e gis bes dis'>1-\markup { "7alt" }  <c e g bes des'>1-\markup { "7" \jlFlat "9" }  <c ees ges bes>1-\markup { "m7" \jlFlat "5" }
  <c ees ges beses>1-\markup { "°7" }  <c ees g a>1-\markup { "m6" }  <c ees g b>1-\markup { "m(maj7)" }
}
\layout { \context { \ChordNames chordNameExceptions = #(append (sequential-music-to-chord-exceptions jlEx #t) ignatzekExceptions) } }
'''

GENERAL = [('scale', 3), ('bebop', 3), ('arp9', 2), ('arp', 1), ('arp-turn', 2), ('enclose', 2), ('enclose-r', 2), ('enclose-d', 1),
           ('approach', 2), ('turn', 1), ('long', 1), ('1235', 1), ('5321', 1)]
ALT = [('scale', 3), ('arp9', 2), ('arp-turn', 2), ('triads', 3), ('enclose', 2), ('enclose-r', 2), ('approach', 2), ('long', 1), ('turn', 1)]
BLUES = [('blues', 4), ('penta', 3), ('scale', 2), ('enclose', 1), ('approach', 1), ('arp9', 1), ('turn', 1), ('long', 1)]
MODAL = [('penta', 3), ('quartal', 3), ('scale', 3), ('arp9', 2), ('arp-turn', 1), ('approach', 1), ('long', 1)]


def ch(key, steps, semis, qual):
    return Chord(*degree_root(key, steps, semis), qual)


def tl(*parts):
    """Timeline from (chord, eighths) pairs."""
    out, p = [], 0
    for c, d in parts:
        out.append((c, p, p + d))
        p += d
    return out


# progressions: functions of (key, rng) returning a timeline
def single(*quals, bars=(1, 2, 2)):
    def f(k, r):
        return tl((ch(k, 0, 0, r.choice(quals)), 8 * r.choice(bars)))
    return f


def two_five_one(k, r):
    ii, v, i = ch(k, 1, 2, 'm7'), ch(k, 4, 7, '7'), ch(k, 0, 0, r.choice(('maj7', 'maj7', 'maj7L', '6')))
    return r.choice((tl((ii, 4), (v, 4), (i, 8)), tl((ii, 8), (v, 8), (i, 8)), tl((ii, 8), (v, 8), (i, 16))))


def minor_two_five(k, r):
    ii = ch(k, 1, 2, r.choice(('m7b5', 'm7b5N')))
    v = ch(k, 4, 7, r.choice(('alt', 'b9', 'b9P')))
    i = ch(k, 0, 0, r.choice(('m6', 'mM7')))
    return r.choice((tl((ii, 4), (v, 4), (i, 8)), tl((ii, 8), (v, 8), (i, 8)), tl((ii, 8), (v, 8), (i, 16))))


def tritone(k, r):
    ii, sub, i = ch(k, 1, 2, 'm7'), ch(k, 1, 1, '7'), ch(k, 0, 0, r.choice(('maj7', 'maj7L', '6')))
    return r.choice((tl((ii, 4), (sub, 4), (i, 8)), tl((ii, 8), (sub, 8), (i, 8))))


def cycle(k, r):
    q = lambda: r.choice(('7', '7', 'b9P'))
    cs = [ch(k, 2, 4, q()), ch(k, 5, 9, q()), ch(k, 1, 2, '7'), ch(k, 4, 7, '7')]
    i = ch(k, 0, 0, r.choice(('maj7', '6')))
    d = r.choice((4, 8))
    return tl(*[(c, d) for c in cs], (i, 8))


def turnaround(k, r):
    kind = r.choice(('I-vi', 'I-VI7', 'iii-VI7'))
    first = ch(k, 0, 0, 'maj7') if kind != 'iii-VI7' else ch(k, 2, 4, 'm7')
    six = ch(k, 5, 9, 'm7') if kind == 'I-vi' else ch(k, 5, 9, r.choice(('b9P', 'b9')))
    return tl((first, 4), (six, 4), (ch(k, 1, 2, 'm7'), 4), (ch(k, 4, 7, '7'), 4), (ch(k, 0, 0, r.choice(('maj7', '6'))), 8))


def blues(k, r):
    I, IV = ch(k, 0, 0, '7B'), ch(k, 3, 5, '7B')
    kind = r.choice(('1-2', '1-4', '5-6', '9-12', 'turn'))
    if kind == '1-2':
        return tl((I, 8), (IV, 8), (I, 8))
    if kind == '1-4':
        return tl((I, 8), (IV, 8), (I, 16))
    if kind == '5-6':
        return tl((IV, 16), (I, 8))
    if kind == '9-12':
        return tl((ch(k, 1, 2, 'm7'), 8), (ch(k, 4, 7, '7'), 8), (I, 8))
    return tl((I, 4), (ch(k, 5, 9, 'b9P'), 4), (ch(k, 1, 2, 'm7'), 4), (ch(k, 4, 7, '7'), 4), (I, 8))


def modal(k, r):
    return tl((ch(k, 0, 0, 'm7M'), 8 * r.choice((2, 2, 4))))


CHAPTERS = [
    # (id, count, keys, progression, figures)
    ('maj', 90, MAJOR_KEYS, single('maj7', 'maj7L', '6'), GENERAL),
    ('m7', 90, MAJOR_KEYS, single('m7'), GENERAL),
    ('dom', 90, MAJOR_KEYS, single('7'), GENERAL),
    ('alt', 80, MAJOR_KEYS, single('alt', 'alt', 'b9', 'b9P'), ALT),
    ('m7b5', 50, MAJOR_KEYS, single('m7b5', 'm7b5N'), GENERAL),
    ('dim', 40, MAJOR_KEYS, single('dim7'), GENERAL),
    ('mm', 40, MINOR_KEYS, single('m6', 'mM7'), GENERAL),
    ('251', 130, MAJOR_KEYS, two_five_one, GENERAL),
    ('251m', 80, MINOR_KEYS, minor_two_five, ALT[:2] + GENERAL),
    ('tritone', 40, MAJOR_KEYS, tritone, GENERAL),
    ('cycle', 40, MAJOR_KEYS, cycle, GENERAL),
    ('turn', 70, MAJOR_KEYS, turnaround, GENERAL),
    ('blues', 90, MAJOR_KEYS, blues, BLUES + GENERAL[:4]),
    ('soul', 30, MAJOR_KEYS, single('7B', bars=(2,)), BLUES),
    ('modal', 30, MAJOR_KEYS, modal, MODAL),
]

# "The Lick": 1 – 2 – ♭3 – 4 – 2 – ♭7 – 1 (Wikipedia, "The Lick"); written here in one common rhythm
LICK = [(0, 1), (2, 1), (3, 1), (5, 1), (2, 2), (-2, 1), (0, 1)]


def the_lick(seen, gen_rng):
    out = []
    # plain, on a minor seventh chord, in six keys
    for key in [(1, 2), (4, 7), (0, 0), (3, 5), (6, 10), (2, 3)]:
        c = Chord(key[0], key[1], 'm7')
        base = c.pc + 60 if c.pc >= 2 else c.pc + 72  # the ♭7 under the root stays above middle C
        ev = [(base + i, d, 'quote') for i, d in LICK[:-1]] + [(base, 5, 'end'), (None, 4, 'rest')]
        t = tl((c, 16))
        assert not check(t, ev), check(t, ev)
        out.append((t, ev, f'The Lick trên {c.text()}: 1 – 2 – ♭3 – 4 – 2 – ♭7 – 1, nguyên dạng'))
    # as the ii of a ii – V – I, continued (generated) through V and I
    g = Gen(gen_rng, GENERAL)
    for k, minor in [(MAJOR_KEYS[0], False), (MAJOR_KEYS[1], False), (MAJOR_KEYS[2], False), (MINOR_KEYS[4], True), (MINOR_KEYS[3], True)]:
        best = None
        for _ in range(400):
            if minor:
                t = tl((ch(k, 1, 2, 'm7b5N'), 8), (ch(k, 4, 7, 'alt'), 8), (ch(k, 0, 0, 'm6'), 8))
            else:
                t = tl((ch(k, 1, 2, 'm7'), 8), (ch(k, 4, 7, '7'), 8), (ch(k, 0, 0, 'maj7'), 8))
            c = t[0][0]
            base = c.pc + 60 if c.pc >= 2 else c.pc + 72
            ev = g.line(t, prefix=[(base + i, d) for i, d in LICK])
            if ev and not check(t, ev):
                s = score(t, ev)
                if not best or s > best[0]:
                    best = (s, t, ev)
        assert best, 'the lick'
        _, t, ev = best
        out.append((t, ev, f'The Lick trên {t[0][0].text()} ({t[0][0].scale_name}), nối tiếp qua {t[1][0].text()} – {t[2][0].text()} · {caption(t, ev).split(" · ", 2)[2]}'))
    return out


def signature(t, ev):
    notes = [(m, d) for m, d, _ in ev]
    first = next(m for m, _, _ in ev if m is not None)
    return (tuple((c.qual, (c.pc - t[0][0].pc) % 12, b - a) for c, a, b in t),
            tuple((None if m is None else m - first, d) for m, d in notes))


def main():
    rng = random.Random(1001)
    seen = set()
    chapters, blocks, n = {}, [], 0
    for cid, count, keys, prog, figs in CHAPTERS:
        g = Gen(rng, figs)
        licks = []
        tries = 0
        while len(licks) < count:
            key = keys[len(licks) % len(keys)]
            best = None
            for _ in range(70):
                tries += 1
                t = prog(key, rng)
                ev = g.line(t)
                if not ev or check(t, ev):
                    continue
                sig = signature(t, ev)
                if sig in seen:
                    continue
                s = score(t, ev)
                if not best or s > best[0]:
                    best = (s, t, ev, sig)
            if best:
                seen.add(best[3])
                licks.append((best[1], best[2], caption(best[1], best[2])))
        print(f'{cid}: {count} licks ({tries} candidates)', file=sys.stderr)
        chapters[cid] = licks
        if cid == 'modal':
            chapters['lick'] = the_lick(seen, rng)
    order = [c[0] for c in CHAPTERS] + ['lick']
    order.remove('lick'), order.append('lick')
    body = {}
    for cid in order:
        licks = chapters[cid]
        lines = []
        for b in range(0, len(licks), BLOCK):
            bid = f'jl-{cid}-{b // BLOCK + 1}'
            chunk = licks[b:b + BLOCK]
            blocks.append(f'=== {bid}\n' + HEADER + '\n'.join(lilypond(t, ev) for t, ev, _ in chunk))
            caps = []
            for t, ev, cap in chunk:
                n += 1
                k = 1 + len(__import__('lick').systems(t))
                caps.append(f'{n}={cap}' if k == 1 else f'{n}#{k}={cap}')
            lines.append(f'::licks {bid} | ' + ' ;; '.join(caps))
        body[cid] = lines
    assert n == 1001, n
    (ROOT / 'music' / 'ex' / 'jazz-licks.txt').write_text('% Jazz Licks — by Lamar: written by scripts/licks/gen.py, do not edit by hand.\n\n' + '\n\n'.join(blocks) + '\n')
    (ROOT / 'src' / 'features' / 'theory' / 'content' / 'jazz-licks.json').write_text(json.dumps(body, ensure_ascii=False, indent=0) + '\n')
    print(n, 'licks', file=sys.stderr)


if __name__ == '__main__':
    main()
