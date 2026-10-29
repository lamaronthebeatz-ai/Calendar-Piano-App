"""
Chord plans for the melodies: phrases of four bars, periods, and modulating phrases through a common chord
(diatonic or altered), through the shared dominant (parallel keys) or through an enharmonic chord.
"""
from core import Key, chords, midi, NAT
from melody import Bar, METERS

# four-bar phrases; a bar is one chord or two ('S D7' = S then D7 at the half bar); the last bar is the cadence
BASE = {
    'maj': {
        'half': [['T', 'S', 'T', 'D'], ['T', 'VI', 'II', 'D'], ['T', 'S', 'K64 D', 'D'], ['T', 'D', 'VI', 'D'], ['T', 'II', 'D', 'D']],
        'full': [['T', 'S', 'D7', 'T'], ['T', 'II', 'D7', 'T'], ['T', 'VI', 'S D7', 'T'], ['T', 'S', 'K64 D7', 'T'], ['T', 'D T', 'II D7', 'T']],
    },
    'min': {
        'half': [['t', 's', 't', 'D'], ['t', 'VI', 'II', 'D'], ['t', 's', 'K64 D', 'D'], ['t', 'D', 'VI', 'D'], ['t', 'III', 's', 'D']],
        'full': [['t', 's', 'D7', 't'], ['t', 'II', 'D7', 't'], ['t', 'VI', 's D7', 't'], ['t', 's', 'K64 D7', 't'], ['t', 'D t', 'II D7', 't']],
    },
}

DIATONIC = {'maj': ['T', 'II', 'III', 'S', 'D', 'VI'], 'min': ['t', 'III', 's', 'd', 'D', 'VI', 'VII', 'II']}


def tonic(key):
    return 'T' if key.mode == 'maj' else 't'


def pitch_set(key, name):
    return tuple(sorted({(key.note(d, m)[0] % 7, key.note(d, m)[1]) for d, m in chords(key.mode)[name]}))


def pc_set(key, name):
    return frozenset(midi(key.note(d, m)) % 12 for d, m in chords(key.mode)[name])


def pivots(a, b, extra=(), only_extra=False):
    """Chords of key a (diatonic, plus `extra`) that are diatonic chords of key b, as (name in a, name in b)."""
    out = []
    for na in ([] if only_extra else DIATONIC[a.mode]) + list(extra):
        if na not in chords(a.mode):
            continue
        for nb in DIATONIC[b.mode]:
            if pitch_set(a, na) == pitch_set(b, nb):
                out.append((na, nb))
    return out


def bars_of(key, row, variant, meter, end_last):
    bar = METERS[meter]['bar']
    out = []
    for i, cell in enumerate(row):
        names = cell.split()
        segs = [(names[0], 0)] + ([(names[1], bar // 2 if meter != '3/4' else 8)] if len(names) > 1 else [])
        out.append(Bar(key, segs, variant, end_last if i == len(row) - 1 else None))
    return out


def phrase(rng, key, cadence, variant, meter, pool=None, end=None):
    rows = (pool or {}).get(cadence) or BASE[key.mode][cadence]
    row = rng.choice(rows)
    return bars_of(key, row, variant, meter, end or cadence)


def lead(key):
    return (6, 1) if key.mode == 'min' else (6, 0)


def modulating(rng, a, b, variant, meter, extra=(), end='full', via=None, only_extra=False):
    """Four bars from key a to key b: a's tonic, the pivot, b's cadence. The bars that carry the change must sing it:
    the pivot and enharmonic chords at least three of their notes, the new dominant the new leading tone."""
    row, pv = _modulating(rng, a, b, variant, meter, extra, end, via, only_extra)
    if row:
        # the bar before the new tonic sings the new leading tone
        row[-2].need = [lead(b)]
        for bar in row:
            names = [s[0] for s in bar.segs]
            if via in ('enh-dim', 'enh-ger', 'enh-ger2', 'enh-aug') and len(names) == 1 and names[0] in ('VII7', 'D7', 'Ger', 'D+'):
                bar.min_tones = 3
                if names[0] == 'Ger':
                    bar.need = bar.need + [(3, 1)]
                if names[0] == 'D7':
                    bar.need = bar.need + [(3, 0)]
                if names[0] == 'VII7':
                    bar.need = bar.need + [(5, -1 if bar.key.mode == 'maj' else 0)]
                if names[0] == 'D+' and bar.key == b:
                    bar.need = bar.need + [(1, 1)]
                if names[0] == 'D+' and bar.key == a:
                    bar.min_tones = 2
    return row, pv


def _modulating(rng, a, b, variant, meter, extra, end, via, only_extra):
    bar = METERS[meter]['bar']
    half = bar // 2 if meter != '3/4' else 8
    if via == 'enh-dim':
        row = [Bar(a, [(tonic(a), 0)], variant), Bar(a, [('VII7', 0)], 'harm'), Bar(b, [('VII7', 0)], 'harm'), Bar(b, [(tonic(b), 0)], 'harm', end)]
        return row, ('VII7', 'VII7')
    if via == 'enh-ger':
        row = [Bar(a, [(tonic(a), 0)], variant), Bar(a, [('D7', 0)], 'harm'), Bar(b, [('Ger', 0)], 'harm'), Bar(b, [('K64', 0), ('D7', half)], 'harm'), Bar(b, [(tonic(b), 0)], 'harm', end)]
        return row, ('D7', '+6')
    if via == 'enh-ger2':  # an augmented sixth chord of a heard as the dominant seventh of b
        row = [Bar(a, [(tonic(a), 0)], variant), Bar(a, [('Ger', 0)], 'harm'), Bar(b, [('D7', 0)], 'harm'), Bar(b, [(tonic(b), 0)], 'harm', end)]
        return row, ('+6', 'D7')
    if via == 'enh-aug':
        row = [Bar(a, [(tonic(a), 0)], variant), Bar(a, [('D+', 0)], 'harm'), Bar(b, [('D+', 0)], 'harm'), Bar(b, [(tonic(b), 0)], 'harm', end)]
        return row, ('D+', 'D+')
    if via == 'dominant':  # parallel keys share the dominant
        row = [Bar(a, [(tonic(a), 0)], variant), Bar(a, [('S' if a.mode == 'maj' else 's', 0)], variant), Bar(b, [('K64', 0), ('D7', half)], 'harm'), Bar(b, [(tonic(b), 0)], 'harm', end)]
        return row, ('D', 'D')
    ps = pivots(a, b, extra, only_extra)
    if not ps:
        return None, None
    # prefer a pivot that is a subdominant-family chord in the new key
    pref = [p for p in ps if p[1] in ('S', 's', 'II', 'VI')]
    na, nb = rng.choice(pref or ps)
    row = [Bar(a, [(tonic(a), 0)], variant), Bar(a, [(na, 0)], variant)]
    if nb in ('S', 's', 'II') and rng.random() < 0.5:
        row.append(Bar(b, [('K64', 0), ('D7', half)], 'harm'))
    elif nb in ('S', 's', 'II'):
        row.append(Bar(b, [('D7', 0)], 'harm'))
    else:
        row.append(Bar(b, [('S' if b.mode == 'maj' else 's', 0), ('D7', half)], 'harm'))
    row.append(Bar(b, [(tonic(b), 0)], 'harm', end))
    return row, (na, nb)


def period(rng, key, variant, meter, length, pool=None):
    """8 bars (a half – b full) or 16 bars (a half, a' full, b half, a'' final); a' and a'' start like a."""
    if length == 8:
        a = phrase(rng, key, 'half', variant, meter, pool)
        b = phrase(rng, key, 'full', variant, meter, pool, end='final')
        if a[0].segs == b[0].segs:
            b[0].copy = 0
        return a + b
    a = phrase(rng, key, 'half', variant, meter, pool)
    a2 = phrase(rng, key, 'full', variant, meter, pool)
    b = phrase(rng, key, 'half', variant, meter, pool)
    a3 = phrase(rng, key, 'full', variant, meter, pool, end='final')
    if a[0].segs == a2[0].segs:
        a2[0].copy = 0
    if a[0].segs == a3[0].segs:
        a3[0].copy = 0
    return a + a2 + b + a3


def modulation_plan(rng, keys, variant, meter, length, pool=None, extra=(), via=None, back=True, only_extra=False):
    """keys: [a, b] or a chain [a, x, b]; 8 bars = a phrase in a then the move; 16 bars = a phrase, the chain of
    moves, and — when `back` — a return to a."""
    a = keys[0]
    out = phrase(rng, a, 'half' if length == 8 else 'full', variant, meter, pool)
    pivots_used = []
    cur = a
    targets = keys[1:]
    if length >= 16 and back and len(keys) == 2 and via in (None, 'dominant'):
        targets = [keys[1], a]
    for i, b in enumerate(targets):
        last = i == len(targets) - 1
        row, pv = modulating(rng, cur, b, variant, meter, extra, end='final' if last else 'full', via=via if (i == 0 or via == 'dominant') else None, only_extra=only_extra and i == 0)
        if row is None:
            return None, None
        out += row
        pivots_used.append((cur, b, pv))
        cur = b
    # pad 16-bar plans, and every enharmonic modulation, with a confirming phrase in the last key
    if (length >= 16 and len(out) < 16) or (via or '').startswith('enh'):
        tail = phrase(rng, cur, 'full', 'harm', meter, end='final')
        out[-1].end = 'full'
        out += tail
    return out, pivots_used
