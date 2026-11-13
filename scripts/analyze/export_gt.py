import json, os, glob, re, sys
from music21 import corpus, converter, roman, key as m21key
C=os.path.join(os.path.dirname(corpus.__file__))
out=[]
for f in sorted(glob.glob(C+'/bach/choraleAnalyses/*.rntxt')):
    txt=open(f).read()
    bwv=re.search(r'^BWV:\s*(\S+)',txt,re.M).group(1)
    name=os.path.basename(f).replace('.rntxt','')
    try:
        sc=corpus.parse('bach/bwv'+bwv.rstrip('s'))
    except Exception as e:
        print('no score',name,bwv,e); continue
    xml=f'eval/{name}.musicxml'
    sc.write('musicxml',fp=xml)
    an=converter.parse(f,format='romantext')
    rows=[]
    for rn in an.recurse().getElementsByClass(roman.RomanNumeral):
        m=rn.measureNumber; b=rn.beat
        k=rn.key
        rows.append({'m':m,'beat':float(b),'key':k.tonic.name+('' if k.mode=='major' else 'm'),'tonicPc':k.tonic.pitchClass,'minor':k.mode=='minor',
          'figure':rn.figure,'rootPc':rn.root().pitchClass,'bassPc':rn.bass().pitchClass,'pcs':sorted({p.pitchClass for p in rn.pitches}),
          'quality':rn.quality,'inversion':rn.inversion(),'degree':rn.scaleDegree,'secondary':bool(rn.secondaryRomanNumeral),'seventh':rn.isSeventh()})
    # first measure number of the analysis (0 = pickup)
    first=min(r['m'] for r in rows)
    ts=an.recurse().getElementsByClass('TimeSignature')
    out.append({'name':name,'bwv':bwv,'score':xml,'first':first,'time':ts[0].ratioString if ts else '4/4','rn':rows})
json.dump(out,open('eval/gt.json','w'),ensure_ascii=False)
print(len(out),'pieces', sum(len(o['rn']) for o in out),'labels')
