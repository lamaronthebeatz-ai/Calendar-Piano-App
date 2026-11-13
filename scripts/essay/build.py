"""Library essay (Markup) -> paged HTML in the Vietnamese thesis format (TL-LV). See docs/notes/workflow.md.
python3 scripts/essay/build.py chapters.json cover.json out_dir   (then: node scripts/essay/render.cjs out_dir/essay.html out.pdf)"""
import re, json, html, subprocess, os, sys
REPO=os.path.abspath(os.path.join(os.path.dirname(__file__),'..','..'))
HERE=os.path.dirname(os.path.abspath(__file__))
src_json, cover_json, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(os.path.join(OUT,'img'), exist_ok=True)
data=json.load(open(src_json)); cover=json.load(open(cover_json))
arts=[(c['title'], c['body']) for c in data['chapters']]
def scan_items(book):
    p=f'{REPO}/src/features/theory/scans/{book}.json'
    return {e['n']:e for e in json.load(open(p))} if os.path.exists(p) else {}
def esc(t): return html.escape(t, quote=False)
def inline(t):
    t=re.sub(r'\s*\(xem (?:thêm )?(?:\[\[[^\]]+\]\](?:,\s*)?)+\)', '', t)
    t=re.sub(r'\[\[[^\]|]+\|([^\]]+)\]\]', r'\1', t)
    assert '[[' not in t, t[:200]
    t=esc(t)
    t=re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)
    t=re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?!\w)', r'<i>\1</i>', t)
    t=re.sub(r'`([^`]+)`', r'\1', t)
    return t

# --- LilyPond grand staff examples
def lyp(n):
    m=re.fullmatch(r'([A-G])(##|#|bb|b|n)?(-?\d)', n); assert m, n
    L,acc,o=m.group(1).lower(),m.group(2) or '',int(m.group(3))
    s={'#':'is','##':'isis','b':'es','bb':'eses','n':'','':''}[acc]
    if L in 'ae' and s.startswith('es'): s=s[1:]
    oc=o-3
    return L+s+("'"*oc if oc>0 else ','*(-oc))+('!' if acc=='n' else '')
gcount=[0]
def grand(spec):
    gcount[0]+=1; name=os.path.join(OUT,f'img/grand{gcount[0]}')
    up,lo,lab=[],[],[]
    for tok in spec.split():
        ch,l=tok.split('=',1); u,b=ch.split('/')
        up.append('<'+' '.join(lyp(x) for x in u.split('+'))+'>1')
        lo.append('<'+' '.join(lyp(x) for x in b.split('+'))+'>1_\\markup{\\override #\'(font-name . "Liberation Serif") \\bold "'+l.replace('_',' ')+'"}')
    ly=r'''\version "2.24.0"
\paper{ indent=0 line-width=13\cm oddFooterMarkup=##f oddHeaderMarkup=##f evenHeaderMarkup=##f evenFooterMarkup=##f}
\layout{ \context{\Score \remove "Bar_number_engraver"} \context{\Staff \remove "Time_signature_engraver"} }
\new PianoStaff << \new Staff { \accidentalStyle forget \cadenzaOn %s } \new Staff { \clef bass \accidentalStyle forget \cadenzaOn %s } >>
'''%(' \\bar "|" '.join(up)+' \\bar "|"',' \\bar "|" '.join(lo)+' \\bar "|"')
    open(name+'.ly','w').write(ly)
    r=subprocess.run(['lilypond','-dcrop','-dno-point-and-click','--svg','-o',name,name+'.ly'],capture_output=True,text=True)
    assert r.returncode==0, r.stderr[-800:]
    return f'img/grand{gcount[0]}.cropped.svg'

def table(rows):
    rows=[re.sub(r'\[\[[^\]|]+\|([^\]]+)\]\]', r'\1', r) for r in rows]
    cells=[[c.strip() for c in r.strip().strip('|').split('|')] for r in rows]
    head,body=cells[0],[c for c in cells[2:]]
    o='<table><thead><tr>'+''.join(f'<th>{inline(c)}</th>' for c in head)+'</tr></thead><tbody>'
    for r in body: o+='<tr>'+''.join(f'<td>{inline(c)}</td>' for c in r)+'</tr>'
    return o+'</tbody></table>'

def form(spec):
    parts,cap=spec.split('|',1)
    blocks=[p.rsplit(':',1) for p in parts.split()]
    tot=sum(int(n) for _,n in blocks)
    o='<figure class="ex form"><div class="formbar">'
    for nm,n in blocks:
        o+=f'<div style="flex:{n} 1 0"><span class="nm">{esc(nm.replace("_"," "))}</span><span class="n">{n}</span></div>'
    return o+f'</div><figcaption>{inline(cap.strip())}</figcaption></figure>'

toc=[]; hid=[0]
def head(level,text,cls=''):
    hid[0]+=1; i=f'h{hid[0]}'
    toc.append((level,re.sub(r'<[^>]+>','',text.replace('<br>',' – ')),i))
    return f'<h{level} id="{i}"{cls}>{text}</h{level}>'

def body(md):
    out=[]; lines=md.strip('\n').split('\n'); i=0; para=[]
    def flush():
        if para: out.append('<p>'+inline(' '.join(para))+'</p>'); para.clear()
    while i<len(lines):
        l=lines[i]
        if not l.strip(): flush(); i+=1; continue
        if l.startswith('::wiki'): i+=1; continue
        if l.startswith('::scan'):
            flush(); m=re.match(r'::scan (\S+) #(\d+)\s*\|\s*(.*)',l)
            if not m: print('skip (only #n refs):', l[:80], file=sys.stderr); i+=1; continue
            e=scan_items(m.group(1)).get(int(m.group(2)))
            if not e: print('missing scan:', l[:80], file=sys.stderr); i+=1; continue
            imgs=''.join(f'<img src="{REPO}/public/scans/{m.group(1)}/{f["f"]}" style="width:{f["w"]*0.4:.0f}px">' for f in e['files'])
            out.append(f'<figure class="ex"><div class="imgs">{imgs}</div><figcaption>{inline(m.group(3))}</figcaption></figure>'); i+=1; continue
        if l.startswith('::grand'):
            flush(); spec,cap=l[8:].split('|',1)
            out.append(f'<figure class="ex"><div class="imgs"><img class="grand" src="{grand(spec.strip())}"></div><figcaption>{inline(cap.strip())}</figcaption></figure>'); i+=1; continue
        if l.startswith('::form'): flush(); out.append(form(l[7:])); i+=1; continue
        assert not l.startswith('::'), l
        if l.startswith('|'):
            flush(); rows=[]
            while True:
                while i<len(lines) and lines[i].startswith('|'): rows.append(lines[i]); i+=1
                j=i
                while j<len(lines) and not lines[j].strip(): j+=1
                if j+1<len(lines) and lines[j].strip()==rows[0].strip() and lines[j+1].startswith('|-'): i=j+2; continue
                break
            out.append(table(rows)); continue
        m=re.match(r'(#{2,3}) (.*)',l)
        if m:
            flush(); lv=len(m.group(1)); out.append(head(lv,inline(m.group(2)))); i+=1; continue
        m=re.fullmatch(r'\*\*(\d+(?:\.\d+)+\.? .*)\*\*',l.strip())
        if m: flush(); out.append(head(3,inline(m.group(1)))); i+=1; continue
        if re.match(r'(- |\d+\. )',l):
            flush(); ordered=bool(re.match(r'\d',l)); items=[]
            while i<len(lines) and re.match(r'(- |\d+\. )',lines[i]): items.append(re.sub(r'^(- |\d+\. )','',lines[i])); i+=1
            tag='ol' if ordered else 'ul'
            out.append(f'<{tag}>'+''.join(f'<li>{inline(x)}</li>' for x in items)+f'</{tag}>'); continue
        para.append(l.strip()); i+=1
    flush(); return '\n'.join(out)

chap=[]
for k,(title,md) in enumerate(arts):
    appendix=title.lower().startswith('phụ lục')
    t='MỞ ĐẦU' if re.search(r'—\s*Mở đầu$',title) else ('PHỤ LỤC' if appendix else title.upper())
    if '## Tài liệu tham khảo' in md:
        a_,b_=md.split('## Tài liệu tham khảo',1)
        a_=re.sub(r'^\s*## Kết luận\s*\n','',a_)
        chap.append('<section class="chapter">'+head(1,'KẾT LUẬN' if t.startswith('KẾT LUẬN') else esc(t))+body(a_)+'</section>')
        chap.append('<section class="chapter refs">'+head(1,'TÀI LIỆU THAM KHẢO')+body(b_)+'</section>')
        continue
    h=head(1,'PHỤ LỤC<br><span class="sub">'+esc(re.sub(r'^Phụ lục\.?\s*','',title))+'</span>' if appendix else esc(t))
    chap.append(f'<section class="chapter{" appendix" if appendix else ""}{" first-body" if k==0 else ""}">'+h+body(md)+'</section>')

toch=''.join(f'<li class="l{lv}"><a href="#{i}"><span class="t">{t}</span><span class="dots"></span></a></li>' for lv,t,i in toc if lv<=3)
tpl=open(os.path.join(HERE,'template.html')).read()
cover.setdefault('PAGED', f'{REPO}/node_modules/pagedjs/dist/paged.polyfill.js')
for k,v in cover.items(): tpl=tpl.replace('{{'+k+'}}',v)
open(os.path.join(OUT,'essay.html'),'w').write(tpl.replace('{{TOC}}',toch).replace('{{BODY}}','\n'.join(chap)))
txt=re.sub(r'<table.*?</table>|<figure.*?</figure>','',''.join(chap),flags=re.S)
print('headings',len(toc),'words(no tables/figures)',len(re.sub(r'<[^>]+>',' ',txt).split()))
