"""World outline for the musicology map: Natural Earth 1:50m land and country borders (public domain), via the
world-atlas TopoJSON (ISC), projected Web Mercator to a 1000-wide plane (latitudes 75°N – 56°S) and written as two
SVG path strings to src/features/musicology/world.json.
Usage: python3 scripts/map/world.py land-50m.json countries-50m.json"""
import json, math, sys
from pathlib import Path

W = 1000
TOP, BOTTOM = 75, -56
def merc(lat): return math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))
Y0, Y1 = merc(TOP), merc(BOTTOM)
H = round(W * (Y0 - Y1) / (2 * math.pi), 1)

def project(lon, lat):
    lat = max(min(lat, 85), -85)
    return (lon + 180) / 360 * W, (Y0 - merc(lat)) / (2 * math.pi) * W

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
    for pts in lines:
        xy = simplify([project(*p) for p in pts], TOL)
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
# skip Antarctica-like rings entirely below the visible band
rings = [r for r in rings if max(p[1] for p in r) > BOTTOM]

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
out.write_text(json.dumps({'w': W, 'h': H, 'top': TOP, 'bottom': BOTTOM, 'land': path(rings, True), 'borders': path(borders, False)}, separators=(',', ':')))
print(out, out.stat().st_size, 'bytes; h =', H)
