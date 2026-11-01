"""World outline for the musicology map: Natural Earth 1:50m land and country borders (public domain), via the
world-atlas TopoJSON (ISC), in the Equal Earth projection (Šavrič, Patterson & Jenny 2018) scaled to a plane 1000
wide, written as two SVG path strings to src/features/musicology/world.json. MusicMap.tsx uses the same formulas.
Usage: python3 scripts/map/world.py land-50m.json countries-50m.json"""
import json, math, sys
from pathlib import Path

W = 1000
A1, A2, A3, A4 = 1.340264, -0.081106, 0.000893, 0.003796
M = math.sqrt(3) / 2
def _raw(lon, lat):
    l, p = math.radians(lon), math.radians(lat)
    t = math.asin(M * math.sin(p)); t2 = t * t; t6 = t2 * t2 * t2
    x = l * math.cos(t) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)))
    y = t * (A1 + A2 * t2 + t6 * (A3 + A4 * t2))
    return x, y
XMAX = _raw(180, 0)[0]; YMAX = _raw(0, 90)[1]
S = W / (2 * XMAX)
H = round(2 * YMAX * S, 1)

def project(lon, lat):
    x, y = _raw(lon, lat)
    return W / 2 + x * S, (YMAX - y) * S

def arcs_of(topo):
    sx, sy = topo['transform']['scale']; tx, ty = topo['transform']['translate']
    out = []
    for arc in topo['arcs']:
        x = y = 0; pts = []
        for dx, dy in arc:
            x += dx; y += dy
            pts.append((x * sx + tx, y * sy + ty))
        out.append(pts)
    return out

def simplify(pts, tol):
    """Douglas – Peucker on projected points."""
    if len(pts) < 3: return pts
    keep = [False] * len(pts); keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        (x1, y1), (x2, y2) = pts[a], pts[b]
        dx, dy = x2 - x1, y2 - y1; n = math.hypot(dx, dy) or 1e-9
        best, bi = 0, -1
        for i in range(a + 1, b):
            x, y = pts[i]
            d = abs(dy * (x - x1) - dx * (y - y1)) / n if n > 1e-9 else math.hypot(x - x1, y - y1)
            if d > best: best, bi = d, i
        if best > tol:
            keep[bi] = True; stack += [(a, bi), (bi, b)]
    return [p for p, k in zip(pts, keep) if k]

TOL = 0.06  # map units (the plane is 1000 wide): under half a pixel even at 8x zoom on a phone

def path(lines, closed):
    """Relative SVG path, coordinates in tenths of a unit."""
    parts = []
    runs = []
    for pts in lines:
        # a ring that crosses the 180° meridian jumps across the whole plane: cut it there into separate runs
        run = []
        for p in pts:
            q = project(*p)
            if run and abs(q[0] - run[-1][0]) > W / 2:
                runs.append(run); run = []
            run.append(q)
        runs.append(run)
    for xy in runs:
        xy = simplify(xy, TOL)
        q = [(round(x * 10), round(y * 10)) for x, y in xy]
        if len(q) < (4 if closed else 2): continue
        steps = [f'{(x-px)/10:g},{(y-py)/10:g}' for (px, py), (x, y) in zip(q, q[1:]) if (x, y) != (px, py)]
        if not steps: continue
        parts.append(f'M{q[0][0]/10:g},{q[0][1]/10:g}l' + ' '.join(steps) + ('z' if closed else ''))
    return ''.join(parts)

def ring(arcs, idx):
    pts = []
    for i in idx:
        a = arcs[i] if i >= 0 else arcs[~i][::-1]
        pts.extend(a if not pts else a[1:])
    return pts

land_t = json.load(open(sys.argv[1])); land_a = arcs_of(land_t)
rings = []
for g in land_t['objects']['land']['geometries']:
    polys = g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']]
    for poly in polys:
        for r in poly: rings.append(ring(land_a, r))

ct = json.load(open(sys.argv[2])); ca = arcs_of(ct)
count = {}
for g in ct['objects']['countries']['geometries']:
    polys = g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']] if g['type'] == 'Polygon' else []
    for poly in polys:
        for r in poly:
            for i in r:
                k = i if i >= 0 else ~i
                count[k] = count.get(k, 0) + 1
borders = [ca[k] for k, n in count.items() if n > 1]

out = Path(__file__).resolve().parents[2] / 'src/features/musicology/world.json'
out.write_text(json.dumps({'w': W, 'h': H, 'land': path(rings, True), 'borders': path(borders, False)}, separators=(',', ':')))
print(out, out.stat().st_size, 'bytes; h =', H)
