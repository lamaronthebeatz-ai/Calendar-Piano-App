"""
Tonal pitch model for the sight-singing book: notes spelled by letter, keys, scale degrees with chromatic alteration,
chords named by function, and LilyPond output.

A note is (step, alter): step counts diatonic letters from C0 (C4 = 28), alter is −2…+2 semitones.
"""
from functools import lru_cache
NAT = [0, 2, 4, 5, 7, 9, 11]
LET = 'cdefgab'
VN = ['Đô', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']
MAJ = [0, 2, 4, 5, 7, 9, 11]
MIN = [0, 2, 3, 5, 7, 8, 10]
ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']


def midi(n):
    s, a = n
    return 12 * (s // 7 + 1) + NAT[s % 7] + a


def name_vn(n, octave=False):
    s, a = n
    acc = {1: '♯', -1: '♭', 2: '𝄪', -2: '𝄫', 0: ''}[a]
    return VN[s % 7] + acc + (str(s // 7) if octave else '')


def ly_pitch(n):
    s, a = n
    nm = LET[s % 7] + {1: 'is', -1: 'es', 2: 'isis', -2: 'eses', 0: ''}[a]
    if nm in ('ees', 'aes'):
        nm = nm[0] + 's'
    o = s // 7 - 3
    return nm + ("'" * o if o > 0 else ',' * -o)


class Key:
    """tonic letter (0 = C), tonic alter, mode 'maj' | 'min'."""

    def __init__(self, letter, alter, mode):
        self.letter, self.alter, self.mode = letter, alter, mode
        self.pc = (NAT[letter] + alter) % 12
        self.ivs = MAJ if mode == 'maj' else MIN

    @staticmethod
    def parse(s):
        """'C', 'f#', 'Bb', 'eb' — upper case major, lower case minor."""
        letter = LET.index(s[0].lower())
        alter = s[1:].count('#') - s[1:].count('b')
        return Key(letter, alter, 'maj' if s[0].isupper() else 'min')

    def __eq__(self, o):
        return isinstance(o, Key) and (self.letter, self.alter, self.mode) == (o.letter, o.alter, o.mode)

    def __hash__(self):
        return hash((self.letter, self.alter, self.mode))

    @lru_cache(None)
    def base_alter(self, deg):
        """Alteration of degree deg (0–6) in the key signature."""
        letter = (self.letter + deg) % 7
        return (self.pc + self.ivs[deg] - NAT[letter] + 6) % 12 - 6

    def note(self, deg, mod=0, near=None, octave=4):
        """Degree deg (any integer, 7 = upper tonic) with chromatic mod, placed in `octave` or nearest to step `near`."""
        d = deg % 7
        letter = (self.letter + d) % 7
        a = self.base_alter(d) + mod
        if near is not None:
            s = near - ((near - letter) % 7)
            cands = [s, s + 7]
            s = min(cands, key=lambda x: abs(x - near))
            return (s, a)
        return (octave * 7 + self.letter + deg, a)

    @lru_cache(None)
    def degree(self, n):
        """(deg 0–6, mod) of a note in this key."""
        s, a = n
        d = (s % 7 - self.letter) % 7
        return d, a - self.base_alter(d)

    def tonic_name(self):
        n = (self.letter, self.alter)
        return name_vn(n) + (' trưởng' if self.mode == 'maj' else ' thứ')

    def ly(self):
        nm = LET[self.letter] + {1: 'is', -1: 'es', 0: ''}[self.alter]
        if nm in ('ees', 'aes'):
            nm = nm[0] + 's'
        return f'\\key {nm} \\{"major" if self.mode == "maj" else "minor"}'

    def signature(self):
        """Number of sharps (+) or flats (−) in the key signature."""
        maj_pc = self.pc if self.mode == 'maj' else (self.pc + 3) % 12
        letter = self.letter if self.mode == 'maj' else (self.letter + 2) % 7
        alter = (maj_pc - NAT[letter] + 6) % 12 - 6
        return [0, 2, 4, -1, 1, 3, 5][letter] + 7 * alter

    def relative(self, deg, mode):
        """The key on degree deg (diatonic) with the given mode."""
        n = self.note(deg, 0, octave=4)
        return Key(n[0] % 7, n[1], mode)

    def parallel(self):
        return Key(self.letter, self.alter, 'min' if self.mode == 'maj' else 'maj')


def key_of(letter, alter, mode):
    return Key(letter, alter, mode)


def interval(a, b):
    """(number, semitones) from a up to b (both notes); number 1 = unison, 8 = octave."""
    if b[0] < a[0] or (b[0] == a[0] and midi(b) < midi(a)):
        a, b = b, a
    return b[0] - a[0] + 1, midi(b) - midi(a)


PERFECT = {1: 0, 4: 5, 5: 7, 8: 12}
MAJOR = {2: 2, 3: 4, 6: 9, 7: 11, 9: 14}


def quality(num, semis):
    """'P', 'M', 'm', 'A', 'd', 'AA', 'dd' for an interval up to a ninth."""
    if num in PERFECT:
        d = semis - PERFECT[num]
        return {0: 'P', 1: 'A', -1: 'd', 2: 'AA', -2: 'dd'}.get(d, '?')
    if num in MAJOR:
        d = semis - MAJOR[num]
        return {0: 'M', -1: 'm', 1: 'A', -2: 'd', 2: 'AA', -3: 'dd'}.get(d, '?')
    return '?'


def iv_name(a, b):
    num, semis = interval(a, b)
    return quality(num, semis) + str(num)


VN_Q = {'P': 'đúng', 'M': 'trưởng', 'm': 'thứ', 'A': 'tăng', 'd': 'giảm', 'AA': 'tăng kép', 'dd': 'giảm kép'}


def iv_vn(code):
    q, num = code.rstrip('0123456789'), code[len(code.rstrip('0123456789')):]
    return f'{num} {VN_Q[q]}'


# ---- chords: tones as (degree, mod) relative to the key; first tone is the root ----

from functools import lru_cache


@lru_cache(None)
def chords(mode):
    if mode == 'maj':
        return {
            'T': [(0, 0), (2, 0), (4, 0)],
            'K64': [(0, 0), (2, 0), (4, 0)],
            'II': [(1, 0), (3, 0), (5, 0)],
            'II7': [(1, 0), (3, 0), (5, 0), (0, 0)],
            'III': [(2, 0), (4, 0), (6, 0)],
            'S': [(3, 0), (5, 0), (0, 0)],
            's': [(3, 0), (5, -1), (0, 0)],
            'D': [(4, 0), (6, 0), (1, 0)],
            'D7': [(4, 0), (6, 0), (1, 0), (3, 0)],
            'D9': [(4, 0), (6, 0), (1, 0), (3, 0), (5, 0)],
            'D9b': [(4, 0), (6, 0), (1, 0), (3, 0), (5, -1)],
            'VI': [(5, 0), (0, 0), (2, 0)],
            'bVI': [(5, -1), (0, 0), (2, -1)],
            'VII7': [(6, 0), (1, 0), (3, 0), (5, -1)],
            'VIIø7': [(6, 0), (1, 0), (3, 0), (5, 0)],
            'IIø7': [(1, 0), (3, 0), (5, -1), (0, 0)],
            'DD': [(1, 0), (3, 1), (5, 0)],
            'DD7': [(1, 0), (3, 1), (5, 0), (0, 0)],
            'DDVII7': [(3, 1), (5, 0), (0, 0), (2, -1)],
            'N': [(1, -1), (3, 0), (5, -1)],
            'bII#': [(1, 1), (3, 1), (5, 0)],
            'Ger': [(5, -1), (0, 0), (2, -1), (3, 1)],
            'bVII': [(6, -1), (1, 0), (3, 0)],
            'D+': [(4, 0), (6, 0), (1, 1)],
        }
    return {
        't': [(0, 0), (2, 0), (4, 0)],
        'K64': [(0, 0), (2, 0), (4, 0)],
        'T': [(0, 0), (2, 1), (4, 0)],
        'II': [(1, 0), (3, 0), (5, 0)],
        'IIø7': [(1, 0), (3, 0), (5, 0), (0, 0)],
        'III': [(2, 0), (4, 0), (6, 0)],
        's': [(3, 0), (5, 0), (0, 0)],
        'S': [(3, 0), (5, 1), (0, 0)],
        'd': [(4, 0), (6, 0), (1, 0)],
        'D': [(4, 0), (6, 1), (1, 0)],
        'D7': [(4, 0), (6, 1), (1, 0), (3, 0)],
        'D9': [(4, 0), (6, 1), (1, 0), (3, 0), (5, 0)],
        'VI': [(5, 0), (0, 0), (2, 0)],
        'VII': [(6, 0), (1, 0), (3, 0)],
        'VII7': [(6, 1), (1, 0), (3, 0), (5, 0)],
        'DD': [(1, 0), (3, 1), (5, 1)],
        'DD7': [(1, 0), (3, 1), (5, 1), (0, 0)],
        'DDVII7': [(3, 1), (5, 0), (0, 0), (2, 0)],
        'N': [(1, -1), (3, 0), (5, 0)],
        'Ger': [(5, 0), (0, 0), (2, 0), (3, 1)],
        'bIV': [(3, -1), (5, 0), (0, 0)],
        'D+': [(4, 0), (6, 1), (1, 1)],
    }


# chord label for the analysis lines under the progressions
LABEL = {
    'T': 'T', 't': 't', 'K64': 'K₆₄', 'II': 'II', 'II7': 'II₇', 'III': 'III', 'S': 'S', 's': 's', 'D': 'D', 'd': 'd',
    'D7': 'D₇', 'D9': 'D₉', 'D9b': 'D♭₉', 'VI': 'VI', 'bVI': '♭VI', 'VII': 'VII', 'VII7': 'VII₇', 'VIIø7': 'VII₇', 'IIø7': 'II₇',
    'DD': 'DD', 'DD7': 'DD₇', 'DDVII7': 'DDVII₇', 'N': 'N', 'Ger': '+6', 'bVII': '♭VII', 'bII#': '♭II', 'bIV': '♭IV', 'D+': 'D₅₊',
}


def chord_notes(key, name):
    return chords(key.mode)[name]
