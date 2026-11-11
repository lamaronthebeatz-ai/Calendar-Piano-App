"""String samples for the score editor, from VSCO 2: Community Edition (Versilian Studios, CC0).

Usage: python3 scripts/strings/build.py <VSCO-2-CE checkout>   (git clone https://github.com/sgossner/VSCO-2-CE;
the SFZ branch gives each sample's pitch). Writes public/media/strings/<inst>/<midi>-<p|f>.{ogg,m4a} and prints the
table for src/features/theory/strings.ts: cents to equal temperament (measured) and the level of each instrument.

Each sample: leading silence cut, mono, levelled per instrument (one gain for all its samples, so soft stays soft),
then cut at LOOP_END (+ TAIL) with the last XFADE seconds crossfaded into the audio before LOOP_START — the player loops
LOOP_START…LOOP_END for notes held longer than the file without a click.
"""
import json, os, re, subprocess, sys, tempfile, warnings
import numpy as np
from scipy.io import wavfile

LOOP_START, LOOP_END, XFADE, TAIL = 1.4, 4.6, 0.5, 0.3
OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'media', 'strings')
INSTS = {
    # id: (sfz file, folder, soft layer tag, loud layer tag)
    'violin': ('ViolinEnsSusVib.sfz', 'Strings/Violin Section/susVib', '_v1', '_v2'),
    'viola': ('ViolaEnsSusVib.sfz', 'Strings/Viola Section/susvib', '_v1_', '_v2_'),
    'cello': ('CelloEnsSusVib.sfz', 'Strings/Cello Section/susvib', '_v1_1', '_v3_'),
    'contrabass': ('ContrabassSusVB.sfz', 'Strings/Solo Contrabass/SusVib', '_v1_', '_v3_'),
}


def regions(repo, sfz):
    text = subprocess.run(['git', '-C', repo, 'show', f'origin/SFZ:{sfz}'], capture_output=True, text=True, check=True).stdout
    out = []
    for m in re.finditer(r'sample=(\S+\.wav)\s+lokey=\d+\s+hikey=\d+\s+pitch_keycenter=(\d+)', text):
        out.append((m.group(1), int(m.group(2))))
    return out


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


def looped(y, sr):
    a, b, x = int(LOOP_START * sr), int(LOOP_END * sr), int(XFADE * sr)
    if len(y) < b + 1:
        y = np.pad(y, (0, b + 1 - len(y)))
    out = y[:b].copy()
    t = np.linspace(0, np.pi / 2, x)
    out[b - x:b] = y[b - x:b] * np.cos(t) + y[a - x:a] * np.sin(t)
    # the audio after the loop start goes on past LOOP_END, so the loop point is not the codec's last frame
    return np.concatenate([out, y[a:a + int(TAIL * sr)]])


def main(repo):
    table = {}
    for inst, (sfz, folder, soft, loud) in INSTS.items():
        regs = [r for r in regions(repo, sfz) if soft in r[0] or loud in r[0]]
        # cello's low E has two soft takes: keep the first
        seen, keep = set(), []
        for f, k in regs:
            layer = 'f' if loud in f else 'p'
            if (k, layer) not in seen:
                seen.add((k, layer))
                keep.append((f, k, layer))
        data = {(k, layer): load(os.path.join(repo, folder, f)) for f, k, layer in keep}
        loud_rms = [np.sqrt(np.mean(y[int(0.3 * sr):int(2 * sr)] ** 2)) for (k, l), (sr, y) in data.items() if l == 'f']
        gain = 10 ** (-20 / 20) / float(np.median(loud_rms))
        os.makedirs(os.path.join(OUT, inst), exist_ok=True)
        tune = {}
        for (k, layer), (sr, y) in sorted(data.items()):
            tune[f'{k}-{layer}'] = round(-cents(y, sr, k), 1)
            z = np.clip(looped(y, sr) * gain, -1, 1)
            with tempfile.NamedTemporaryFile(suffix='.wav') as tmp:
                wavfile.write(tmp.name, sr, (z * 32767).astype(np.int16))
                base = os.path.join(OUT, inst, f'{k}-{layer}')
                subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', tmp.name, '-c:a', 'libopus', '-b:a', '40k', base + '.ogg'], check=True)
                subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', tmp.name, '-c:a', 'aac', '-b:a', '56k', base + '.m4a'], check=True)
        table[inst] = {'notes': sorted({k for k, _ in data}), 'retune': tune}
        print(inst, len(data), 'samples, gain', round(gain, 2), file=sys.stderr)
    print(json.dumps(table))


if __name__ == '__main__':
    main(sys.argv[1])
