"""Orchestral samples for the score editor, from VSCO 2: Community Edition (Versilian Studios, CC0).

Usage: python3 scripts/instruments/build.py <VSCO-2-CE checkout> [inst …]   (git clone https://github.com/sgossner/VSCO-2-CE
and fetch its SFZ branch: each instrument's .sfz gives the samples, their pitch and velocity layers). Writes
public/media/instruments/<inst>/<midi>-<p|f>.{ogg,m4a} and prints, per instrument, the pitches and the loop to paste
into STRING_NOTES / LOOPS in src/features/theory/audio.ts (and the cents off equal temperament, measured).

For each pitch the softest and the loudest take (the same file twice when the library has one layer). Each sample:
leading silence cut, mono, levelled per instrument (one gain for all its samples, so soft stays soft), cut at the loop
end (+ TAIL) with the last XFADE seconds crossfaded into the audio before the loop start, so the player can repeat the
loop for notes held longer than the file. Shorter instruments (winds) get a shorter loop, from their shortest take.
"""
import json, os, re, subprocess, sys, tempfile, warnings
import numpy as np
from scipy.io import wavfile

LOOP_START, LOOP_END, XFADE, TAIL = 1.4, 4.6, 0.5, 0.3
OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'media', 'instruments')
INSTS = {
    'violin': 'ViolinEnsSusVib.sfz',
    'viola': 'ViolaEnsSusVib.sfz',
    'cello': 'CelloEnsSusVib.sfz',
    'contrabass': 'ContrabassSusVB.sfz',
    'flute': 'FluteSusVib.sfz',
    'oboe': 'OboeSusVib.sfz',
    'clarinet': 'ClarinetSus.sfz',
    'bassoon': 'BassoonSus.sfz',
    'horn': 'FHornSus.sfz',
    'trumpet': 'TrumpetSusVib.sfz',
    'trombone': 'TromboneSus.sfz',
    'tuba': 'TubaSus.sfz',
}


def regions(repo, sfz):
    """(file, key centre, lovel, hivel) of every region, with the folder the SFZ names."""
    text = subprocess.run(['git', '-C', repo, 'show', f'origin/SFZ:{sfz}'], capture_output=True, text=True, check=True).stdout
    folder = re.search(r'default_path=([^\r\n]+)', text).group(1).strip().replace('\\', '/').rstrip('/')
    out = []
    for chunk in text.split('<region>')[1:]:
        get = lambda k, d=None: (m.group(1) if (m := re.search(rf'\b{k}=(\S+)', chunk)) else d)
        out.append((get('sample'), int(get('pitch_keycenter')), int(get('lovel', 0)), int(get('hivel', 127))))
    return folder, out


def load(path):
    warnings.filterwarnings('ignore', category=wavfile.WavFileWarning)  # loop and cue chunks the files carry
    sr, y = wavfile.read(path)
    scale = {np.dtype('int16'): 2 ** 15, np.dtype('int32'): 2 ** 31}.get(y.dtype, 1)  # 24-bit files arrive as int32
    y = y.astype(np.float64) / scale
    if y.ndim > 1:
        y = y.mean(axis=1)
    peak = np.abs(y).max()
    start = max(0, int(np.argmax(np.abs(y) > peak * 0.03)) - int(0.004 * sr))
    return sr, y[start:]


def cents(y, sr, midi):
    """Median pitch over the steady part, by autocorrelation near the expected period."""
    f0 = 440 * 2 ** ((midi - 69) / 12)
    n = 8192
    res = []
    for s in range(int(0.5 * sr), min(len(y) - n, int(3.0 * sr)), n // 2):
        fr = y[s:s + n] * np.hanning(n)
        ac = np.fft.irfft(np.abs(np.fft.rfft(fr, 2 * n)) ** 2)[:n]
        lo, hi = int(sr / (f0 * 2 ** (1 / 12))), int(sr / (f0 / 2 ** (1 / 12))) + 1
        k = lo + int(np.argmax(ac[lo:hi]))
        a, b, c = ac[k - 1], ac[k], ac[k + 1]
        k += 0.5 * (a - c) / (a - 2 * b + c)
        res.append(1200 * np.log2((sr / k) / f0))
    return float(np.median(res))


def looped(y, sr, ls, le):
    a, b, x = int(ls * sr), int(le * sr), int(XFADE * sr)
    if len(y) < b + int(TAIL * sr):
        y = np.pad(y, (0, b + int(TAIL * sr) - len(y)))
    out = y[:b].copy()
    t = np.linspace(0, np.pi / 2, x)
    out[b - x:b] = y[b - x:b] * np.cos(t) + y[a - x:a] * np.sin(t)
    # the audio after the loop start goes on past the loop end, so the loop point is not the codec's last frame
    return np.concatenate([out, y[a:a + int(TAIL * sr)]])


def main(repo, only):
    table = {}
    for inst, sfz in INSTS.items():
        if only and inst not in only:
            continue
        folder, regs = regions(repo, sfz)
        data = {}
        for key in sorted({r[1] for r in regs}):
            here = [r for r in regs if r[1] == key]
            soft = min(here, key=lambda r: (r[2], r[3]))
            loud = max(here, key=lambda r: (r[3], r[2]))
            data[(key, 'p')] = load(os.path.join(repo, folder, soft[0]))
            data[(key, 'f')] = data[(key, 'p')] if loud is soft else load(os.path.join(repo, folder, loud[0]))
        shortest = min(len(y) / sr for sr, y in data.values())
        le = round(min(LOOP_END, shortest - TAIL - 0.05), 2)
        ls = round(min(LOOP_START, le * 0.4), 2)
        loud_rms = [np.sqrt(np.mean(y[int(0.3 * sr):int(min(2, le) * sr)] ** 2)) for (k, l), (sr, y) in data.items() if l == 'f']
        gain = 10 ** (-20 / 20) / float(np.median(loud_rms))
        os.makedirs(os.path.join(OUT, inst), exist_ok=True)
        tune = {}
        for (k, layer), (sr, y) in sorted(data.items()):
            tune[f'{k}-{layer}'] = round(-cents(y, sr, k), 1)
            z = np.clip(looped(y, sr, ls, le) * gain, -1, 1)
            with tempfile.NamedTemporaryFile(suffix='.wav') as tmp:
                wavfile.write(tmp.name, sr, (z * 32767).astype(np.int16))
                base = os.path.join(OUT, inst, f'{k}-{layer}')
                subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', tmp.name, '-c:a', 'libopus', '-b:a', '40k', base + '.ogg'], check=True)
                subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', tmp.name, '-c:a', 'aac', '-b:a', '56k', base + '.m4a'], check=True)
        table[inst] = {'notes': sorted({k for k, _ in data}), 'loop': [ls, le], 'worstCents': max(abs(v) for v in tune.values())}
        print(inst, len(data), 'samples, gain', round(gain, 2), 'loop', ls, le, 'shortest', round(shortest, 2), file=sys.stderr)
    print(json.dumps(table))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2:])
