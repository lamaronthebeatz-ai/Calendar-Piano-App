# Vẽ nhãn hợp âm dưới từng ô. Ảnh gốc + danh mục gốc: git show a358b3c:<path> (public/scans/scriabin2/, src/features/theory/scans/scriabin2.json)
# python3 scripts/scriabin2/annot.py <thư mục ảnh gốc>/ <json gốc>
import json,re,sys,os
sys.path.insert(0,os.path.dirname(__file__))
from labels import I,II,I18
from PIL import Image,ImageDraw,ImageFont
SP=os.path.dirname(__file__);R=sys.argv[1];O='public/scans/scriabin2/'
os.makedirs(O,exist_ok=True)
b1=json.load(open(SP+'/barl.json'));b2=json.load(open(SP+'/bl2.json'))
M2={10,16,20,22,26,33}
OV={8:[[537,919,1358],[522,916,1356],[696,1356],[760]],12:[[443,755,1057,1359],[403,716,1040,1359]],
19:[[764,1296],[570,986,1373],[554,965,1362]],31:[[592,973,1363],[582,975]],32:[[198,596],[585,967,1368]],35:[None,None,None,[982,1360]]}
F1=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',19)
F2=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',16)
FX={k:ImageFont.truetype('/usr/share/fonts/truetype/freefont/FreeSerif.ttf',v) for k,v in ((19,24),(16,20))}
def tw(t,f):
    return sum((FX[f.size].getlength(c) if c in '𝄪𝄫' else f.getlength(c)) for c in t)
def fit(t,f,w):
    while t and tw(t,f)>w-6:
        f=ImageFont.truetype(f.path,f.size-1)
        if f.size<11: break
    return f
def text(d,x,y,t,f,col):
    for c in t:
        if c in '𝄪𝄫':
            g=ImageFont.truetype(FX[min(FX,key=lambda k:abs(k-f.size))].path,int(f.size*1.25));d.text((x,y-f.size*0.2),c,font=g,fill=col);x+=g.getlength(c)
        else: d.text((x,y),c,font=f,fill=col);x+=f.getlength(c)
def segs(xs,w):
    xs=sorted(set(0 if x==52 else x for x in xs))
    if not xs or xs[0]>60: xs=[0]+xs
    if w-xs[-1]>40: xs=xs+[w]
    s=[(a,c) for a,c in zip(xs,xs[1:]) if c-a>30]
    if s and s[0][1]<205: s=s[1:]
    return s
def draw(src,dst,lab):
    im=Image.open(R+src).convert('RGB');w,h=im.size;H=58
    out=Image.new('RGB',(w,h+H),'white');out.paste(im,(0,0));d=ImageDraw.Draw(out)
    d.line([(0,h+2),(w,h+2)],fill=(200,190,170),width=1)
    for x0,x1,l1,l2 in lab:
        if x0>0: d.line([(x0,h+4),(x0,h+H-4)],fill=(200,190,170),width=1)
        cw=x1-x0;f1=fit(l1,F1,cw);f2=fit(l2,F2,cw)
        text(d,x0+(cw-tw(l1,f1))/2,h+6,l1,f1,(150,30,30))
        if l2: text(d,x0+(cw-tw(l2,f2))/2,h+32,l2,f2,(90,90,90))
    out.quantize(colors=16,method=Image.Quantize.MEDIANCUT).save(O+dst,optimize=True)
d=json.load(open(sys.argv[2]));new=[]
for it in d:
    n=it['n'];m=re.findall(r'(\d+)',it['label']);lo=0 if 'lấy đà' in it['label'] else int(m[0])
    L=I if n<=18 else II;bar=lo;files=[]
    for k,fl in enumerate(it['files']):
        f=fl['f']
        if n==18:
            S=segs(b1[str(n)][k][2],fl['w']) if k==0 else [(0,fl['w'])]
            lab=[(a,c)+I18[k][j] for j,(a,c) in enumerate(S)]
        else:
            if n in OV and OV[n][k]: xs=OV[n][k]
            elif n in M2: xs=[x for x in b2[str(n)][k][3]]
            else: xs=b1[str(n)][k][2]
            S=segs(xs,fl['w']);lab=[]
            for a,c in S: lab.append((a,c)+L.get(bar,("","")));bar+=1
        draw(f,f,lab);files.append({**fl,'h':fl['h']+58})
    new.append({**it,'files':files})
json.dump(new,open('src/features/theory/scans/scriabin2.json','w'),ensure_ascii=False)
print('done')
