#!/usr/bin/env python3
"""
Chromatic sight-singing exercises for the Solfège page, in the manner of the atonal reading drills of conservatory
solfège classes: leaps between any of the twelve notes, no key.

  music/ex/sightsing.txt                  one engraving block per exercise (`ss-<kind>-<level>-<n>`)
  src/features/solfege/sightsing.json     the pitches and rhythm of every exercise, for playback

Two kinds:
  g  five groups of five notes (♪♪ ♪♪ ♩), read forwards then backwards
  m  a three-line melody of beamed eighth pairs and quarters, phrases closed by a fermata
Three levels widen the intervals and the range. Rules: no pitch class comes back within the last six notes (so the
line keeps moving through the chromatic total), no interval larger than the level allows, two leaps the same way
never add up to more than an octave, the same interval is never taken three times running, and every interval is
spelled as its plainest name (a minor third as a third, not an augmented second).
Usage: python3 scripts/solfege/gen.py   (deterministic)
"""
import json, random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
NAT = [0, 2, 4, 5, 7, 9, 11]
LET = 'cdefgab'
# semitones → interval number used for its plainest spelling (tritone: 4 or 5)
NUM = {1: 2, 2: 2, 3: 3, 4: 3, 5: 4, 6: 4, 7: 5, 8: 6, 9: 6, 10: 7, 11: 7, 12: 8, 13: 9, 14: 9}
LEVELS = {
    1: dict(ivs=[1, 2, 3, 4, 5, 7, 8, 9], lo=62, hi=77, weights=[3, 3, 3, 3, 3, 2, 1, 1]),
    2: dict(ivs=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], lo=60, hi=79, weights=[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]),
    3: dict(ivs=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], lo=59, hi=81, weights=[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1]),
}
WEIRD = {(2, 1), (6, 1), (3, -1), (0, -1)}  # E♯ B♯ F♭ C♭


def spell_alone(midi, rng):
    pc = midi % 12
    if pc in NAT:
        return NAT.index(pc), 0
    return (NAT.index(pc - 1), 1) if rng.random() < 0.5 else (NAT.index(pc + 1), -1)


def spell_from(prev, midi):
    """Spell midi so that the interval from prev reads as its plainest name; fall back to sharps up / flats down."""
    pm, pl, pa = prev
    semis = midi - pm
    num = NUM[abs(semis)]
    if abs(semis) == 6:
        num = 4 if (pl + pa) % 2 else 5  # vary the tritone's spelling
    step = (num - 1) * (1 if semis > 0 else -1)
    letter = (pl + step) % 7
    alter = (midi - NAT[letter] + 6) % 12 - 6
    if abs(alter) <= 1 and (letter, alter) not in WEIRD:
        return letter, alter
    pc = midi % 12
    if pc in NAT:
        return NAT.index(pc), 0
    return (NAT.index(pc - 1), 1) if semis > 0 else (NAT.index(pc + 1), -1)


def ly(midi, letter, alter):
    name = LET[letter] + ('is' if alter == 1 else 'es' if alter == -1 else '')
    o = (midi - alter) // 12 - 4
    return name + ("'" * o if o > 0 else ',' * -o)


def line(rng, level, count, first=None):
    """A chromatic line of `count` notes following the rules above; None if it painted itself into a corner."""
    L = LEVELS[level]
    m = first if first is not None else rng.randint(L['lo'] + 3, L['hi'] - 3)
    notes = [m]
    ivs = []
    while len(notes) < count:
        ok = False
        for _ in range(60):
            iv = rng.choices(L['ivs'], L['weights'])[0] * rng.choice((1, -1))
            n = notes[-1] + iv
            if not L['lo'] <= n <= L['hi']:
                continue
            if any(n % 12 == x % 12 for x in notes[-6:]):
                continue
            if ivs and ivs[-1] * iv > 0 and abs(ivs[-1]) > 4 and abs(iv) > 4 and abs(ivs[-1] + iv) > 12:
                continue
            if len(ivs) >= 2 and ivs[-1] == ivs[-2] == iv:
                continue
            notes.append(n)
            ivs.append(iv)
            ok = True
            break
        if not ok:
            return None
    return notes


def spelled(rng, notes):
    out = [(notes[0], *spell_alone(notes[0], rng))]
    for m in notes[1:]:
        out.append((m, *spell_from(out[-1], m)))
    return out


HEAD = '#(set-global-staff-size 22)\n'


def groups_exercise(rng, level):
    """Five groups of five different notes: ♪♪ ♪♪ ♩."""
    groups = []
    while len(groups) < 5:
        g = line(rng, level, 5)
        if g and len({x % 12 for x in g}) == 5:
            groups.append(g)
    parts, play = [], []
    for g in groups:
        sp = spelled(rng, g)
        a, b, c, d, e = [ly(*x) for x in sp]
        parts.append(f'{a}8[ {b}] {c}[ {d}] {e}4 \\bar "||"')
        play.append([[x, 1] for x in g[:4]] + [[g[4], 2]])
    body = ' '.join(parts)[:-len('\\bar "||"')] + '\\bar "|."'
    ly_src = (HEAD + '\\score { \\new Staff \\with { \\remove "Time_signature_engraver" } { \\cadenzaOn '
              '\\override Score.NonMusicalPaperColumn.line-break-permission = ##f ' + body + ' } \\layout { } }')
    return ly_src, {'groups': play}


def melody_exercise(rng, level):
    """Three lines of beamed eighth pairs and quarters; each phrase of 8–13 notes ends on a quarter with a fermata."""
    for _ in range(200):
        n = rng.randint(38, 46)
        notes = line(rng, level, n)
        if notes:
            break
    sp = spelled(rng, notes)
    # rhythm: cells of two eighths or one quarter; phrase ends forced to a quarter with a fermata
    cells, i, since = [], 0, 0
    phrase_len = rng.randint(8, 13)
    while i < len(notes):
        left = len(notes) - i
        # a phrase that would leave fewer than six notes after it runs on to the end
        end_here = left == 1 or (since + 1 >= phrase_len and left - 1 >= 6)
        if end_here:
            cells.append(('q', [i], True))
            i += 1
            since = 0
            phrase_len = rng.randint(8, 13)
        elif rng.random() < 0.62 and left >= 3:
            cells.append(('ee', [i, i + 1], False))
            i += 2
            since += 2
        else:
            cells.append(('q', [i], False))
            i += 1
            since += 1
    # three lines, broken between cells as evenly as possible
    total = len(notes)
    breaks, acc = set(), 0
    for k, c in enumerate(cells[:-1]):
        acc += len(c[1])
        if len(breaks) < 2 and acc >= total * (len(breaks) + 1) / 3:
            breaks.add(k)
    out, play = [], []
    for k, (kind, idx, ferm) in enumerate(cells):
        if kind == 'ee':
            a, b = idx
            out.append(f'{ly(*sp[a])}8[ {ly(*sp[b])}]')
            play += [[notes[a], 1, 0], [notes[b], 1, 0]]
        else:
            out.append(f'{ly(*sp[idx[0]])}4' + ('\\fermata' if ferm else ''))
            play.append([notes[idx[0]], 2, 1 if ferm else 0])
        if k in breaks:
            out.append('\\break')
    ly_src = (HEAD + '\\score { \\new Staff \\with { \\remove "Time_signature_engraver" } { \\cadenzaOn '
              '\\override Score.NonMusicalPaperColumn.line-break-permission = ##f ' + ' '.join(out) + ' \\bar "|." } \\layout { ragged-right = ##f } }')
    return ly_src, {'notes': play}


def main():
    rng = random.Random(2026)
    blocks, data = [], {'g': {1: [], 2: [], 3: []}, 'm': {1: [], 2: [], 3: []}}
    counts = {'g': 80, 'm': 100}
    seen = set()
    for kind, make in (('g', groups_exercise), ('m', melody_exercise)):
        for level in (1, 2, 3):
            while len(data[kind][level]) < counts[kind]:
                src, play = make(rng, level)
                if src in seen:
                    continue
                seen.add(src)
                n = len(data[kind][level]) + 1
                bid = f'ss-{kind}-{level}-{n}'
                blocks.append(f'=== {bid}\n{src}')
                data[kind][level].append({'id': bid, **play})
    (ROOT / 'music' / 'ex' / 'sightsing.txt').write_text('% Sight-singing exercises of the Solfège page: written by scripts/solfege/gen.py, do not edit by hand.\n\n' + '\n\n'.join(blocks) + '\n')
    (ROOT / 'src' / 'features' / 'solfege' / 'sightsing.json').write_text(json.dumps(data, separators=(',', ':')) + '\n')
    print(sum(len(v) for k in data.values() for v in k.values()), 'exercises')


main()
