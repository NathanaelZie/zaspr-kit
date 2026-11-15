((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={iD:function iD(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h
_.a=i},
xi(d){var x,w,v,u,t,s,r,q,p=A.a([],y.y)
for(x=d.split("\n"),w=x.length,v=0;v<w;++v){u=x[v].split("\t")
t=u.length
if(t===4){if(0>=t)return A.v(u,0)
s=u[0]
if(1>=t)return A.v(u,1)
r=u[1]
if(2>=t)return A.v(u,2)
q=u[2]
if(3>=t)return A.v(u,3)
p.push(new A.fm([u[3].toLowerCase(),q,s,r]))}}return p},
we(d){return new B.ch(d,null)},
ch:function ch(d,e){this.c=d
this.a=e},
eT:function eT(){var _=this
_.d=$
_.e=""
_.f=0
_.c=_.a=_.r=null},
mJ:function mJ(d){this.a=d},
mK:function mK(d){this.a=d},
mL:function mL(){},
mG:function mG(d,e){this.a=d
this.b=e},
mH:function mH(d,e){this.a=d
this.b=e},
mI:function mI(d,e){this.a=d
this.b=e},
mM:function mM(d){this.a=d},
mO:function mO(d){this.a=d},
mP:function mP(d,e){this.a=d
this.b=e},
mQ:function mQ(d,e){this.a=d
this.b=e},
mN:function mN(d,e){this.a=d
this.b=e}},G,H,I,D,N,E,K,O,P,F,Q,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[11],B)
G=c[78]
H=c[50]
I=c[52]
D=c[51]
N=c[54]
E=c[53]
K=c[47]
O=c[64]
P=c[40]
F=c[32]
Q=c[41]
L=c[42]
M=c[45]
B.iD.prototype={
m(d){var x=this,w=y.w
w=A.x(w,w)
w.n(0,x.r)
return new A.F("dialog",x.d,x.e,null,w,x.w,x.x,null)}}
B.ch.prototype={
Z(){return new B.eT()}}
B.eT.prototype={
gce(){var x,w=this,v=w.d
if(v===$){x=B.xi(w.a.c)
w.d!==$&&A.q3()
w.d=x
v=x}return v},
bO(){this.dn()
var x=A.nL(this.ge0())
this.r=x
A.w(b.G.document).addEventListener("keydown",x)},
ao(){var x=this.r
if(x!=null)A.w(b.G.document).removeEventListener("keydown",x)
this.aS()},
e1(d){var x,w,v,u,t,s,r,q
A.w(d)
try{x=d
w=A.k(x.key)
v=(A.b0(x.ctrlKey)||A.b0(x.metaKey))&&w.toLowerCase()==="k"
if(!v){u=!0
if(J.as(w,"/")){A.I(x.target)
t=A.I(A.w(b.G.document).activeElement)
s=t==null
r=s?null:A.k(t.tagName)
if(r==null)r=""
if(r!=="INPUT")if(r!=="TEXTAREA")if(r!=="SELECT"){u=s?null:A.b0(t.isContentEditable)
u=u===!0}}}else u=!1
if(u)return
x.preventDefault()
this.cs()}catch(q){return}},
cs(){var x=b.G,w=A.I(A.w(x.document).getElementById("site-search"))
if(w==null||A.b0(w.open))return
w.showModal()
x=A.I(A.w(x.document).getElementById("site-search-input"))
if(x!=null)x.focus()},
c5(){var x=A.I(A.w(b.G.document).getElementById("site-search"))
return x==null?null:x.close()},
eg(){var x=A.I(A.w(b.G.document).getElementById("site-search-input"))
if(x!=null)x.value=""
this.G(new B.mJ(this))},
gcv(){var x,w,v,u,t,s,r,q,p,o,n,m=C.c.P(this.e).toLowerCase()
if(m.length===0){x=A.a([],y.y)
for(w=0;w<5;++w){v=G.l7[w]
u=this.gce()
t=A.a0(u)
s=t.h("a_<1>")
C.a.n(x,A.rV(new A.a_(u,t.h("C(1)").a(new B.mK(v)),s),1,s.h("o.E")))}return x}r=C.c.aQ(m,A.Y("\\s+"))
q=A.a([],y.A)
for(x=this.gce(),u=x.length,w=0;w<x.length;x.length===u||(0,A.G)(x),++w){p=x[w]
t=p.a
o=t[3].toLowerCase()
if(!C.a.eV(r,C.c.geK(o+" "+t[2].toLowerCase()+" "+t[0])))continue
if(o===m)n=0
else if(C.c.B(o,m))n=1
else{if(A.q2(o,m,0))t=2
else{t=t[2]
t=A.q2(t.toLowerCase(),m,0)?3:4}n=t}C.a.t(q,new A.e(n,p))}C.a.a5(q,new B.mL())
x=A.a([],y.y)
for(u=A.f0(q,0,A.e0(12,"count",y.e),y.b),t=u.$ti,u=new A.aY(u,u.gq(0),t.h("aY<ah.E>")),t=t.h("ah.E");u.j();){s=u.d
x.push((s==null?t.a(s):s).b)}return x},
ck(d){var x,w
this.c5()
x=A.w(A.w(b.G.window).location)
w=d.a[1]
if(C.c.B(w,"/"))w="/zaspr-kit"+w
x.href=w},
e3(d){var x=A.I(A.w(d).target)
if(x==null)x=A.w(x)
this.G(new B.mG(this,A.k(x.value)))},
el(d){var x,w,v=this
A.w(d)
x=v.gcv()
if(x.length===0)return
switch(A.k(d.key)){case"ArrowDown":d.preventDefault()
v.G(new B.mH(v,x))
v.cw()
break
case"ArrowUp":d.preventDefault()
v.G(new B.mI(v,x))
v.cw()
break
case"Enter":d.preventDefault()
w=C.e.aC(v.f,0,x.length-1)
if(!(w>=0&&w<x.length))return A.v(x,w)
v.ck(x[w])
break}},
cw(){A.am(A.w(b.G.window).requestAnimationFrame(A.nL(new B.mM(this))))},
m(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="site-search-results",a1="site-search-option-",a2=e.gcv(),a3=a2.length,a4=a3===0?-1:C.e.aC(e.f,0,a3-1)
a3=y.w
x=A.B(["type","button","aria-haspopup","dialog","aria-controls","site-search","aria-keyshortcuts","Control+K Meta+K /"],a3,a3)
w=y.F
x=H.bz(A.a([F.iM("search","w:4 h:4"),D.N(A.a([new A.f("Search the docs",d)],w),d,"sr-only lg:not-sr-only grow:1 ta:left",d,d),new A.F("kbd",d,"hidden lg:inline-flex ai:center px:2 py:[0.1rem] br:md ff:code fs:xs c:haze bg:[rgba(255,255,255,0.06)] bw:1 bc:edge",d,d,d,A.a([new A.f("Ctrl K",d)],w),d)],w),x,"flex ai:center gap:3 h:10 px:3 lg:pr:2 br:lg fs:sm c:haze bw:1 bc:edge bg:[rgba(255,255,255,0.03)] tr:all hover:c:snow hover:bc:[rgba(255,255,255,0.18)] lg:w:[15rem] focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4",!1,d,d,e.ge8(),d)
v=A.B(["aria-label","Search the documentation"],a3,a3)
u=y.a
t=A.B(["close",new B.mO(e)],a3,u)
s=D.N(A.a([F.iM("search","w:5 h:5")],w),d,"c:haze",d,d)
r=A.x(a3,a3)
r.i(0,"placeholder","Search pages, utilities, components\u2026")
r.i(0,"autocomplete","off")
r.i(0,"spellcheck","false")
r.i(0,"role","combobox")
r.i(0,"aria-expanded","true")
r.i(0,"aria-controls",a0)
r.i(0,"aria-autocomplete","list")
if(a4>=0)r.i(0,"aria-activedescendant",a1+a4)
r=P.dr(r,d,"grow:1 mnw:0 h:[3.5rem] bg:transparent c:snow fs:base caret:beam placeholder:c:[#6B7385] focus:ol:none app:none",!1,A.B(["input",e.ge2(),"keydown",e.gek()],a3,u),"site-search-input",d,d,d,O.v,d,y.m)
q=A.B(["type","button","aria-label","Close the search"],a3,a3)
q=A.a([E.u(A.a([s,r,H.bz(A.a([new A.f("Esc",d)],w),q,"shrink:0 px:2 py:1 br:md ff:code fs:xs c:haze bw:1 bc:edge hover:c:snow focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4",!1,d,d,e.gdB(),d)],w),d,"flex ai:center gap:3 px:5 bwb:1 bc:edge",d,d)],w)
if(a2.length===0)q.push(K.aJ(A.a([new A.f("No page matches \u201c"+e.e+"\u201d. Try a utility family, such as ",d),Q.iB(A.a([new A.f("spacing",d)],w),"ff:code c:snow"),new A.f(", or a component name.",d)],w),d,"px:5 py:10 ta:center fs:sm c:haze",d))
else{s=A.a([],w)
if(C.c.P(e.e).length===0)s.push(K.aJ(A.a([new A.f("Suggested",d)],w),d,"px:5 pt:4 pb:1 fs:xs fw:semibold c:haze",d))
r=A.B(["role","listbox","aria-label","Pages"],a3,a3)
p=A.a([],w)
for(o=L.cu(a2,0,y.z),n=J.Z(o.a),m=o.b,o=new L.aa(n,m,A.r(o).h("aa<1>")),l=y.x;o.j();){k={}
j=o.c
j=j>=0?new A.e(m+j,n.gl()):A.aw(A.ay())
k.a=k.b=null
i=k.b=j.a
k.a=j.b
j=A.a(["flex ai:center jc:between gap:4 px:3 py:3 br:lg cur:pointer"],l)
h=i===a4
if(h)j.push("bg:[rgba(59,108,240,0.18)]")
j=C.a.v(j," ")
h=A.B(["role","option","aria-selected",""+h],a3,a3)
g=A.B(["click",new B.mP(k,e),"pointermove",new B.mQ(k,e)],a3,u)
f=A.a([new D.W(d,"flex fd:col mnw:0",d,d,A.a([new D.W(d,"fw:medium c:snow truncate",d,d,A.a([new A.f(k.a.a[3],d)],w),d),new D.W(d,"fs:xs c:haze truncate",d,d,A.a([new A.f(k.a.a[2],d)],w),d)],w),d)],w)
if(k.b===a4)f.push(new D.W(d,"shrink:0 c:beam",d,d,A.a([F.iM("arrow","w:4 h:4")],w),d))
p.push(new M.aM(a1+i,j,h,g,f,d))}s.push(M.j0(p,r,"mh:[min(24rem,60vh)] ovy:auto p:2",a0))
C.a.n(q,s)}a3=A.B(["aria-hidden","true"],a3,a3)
q.push(E.u(A.a([D.N(A.a([new A.f("\u2191 \u2193 to move",d)],w),d,d,d,d),D.N(A.a([new A.f("Enter to open",d)],w),d,d,d,d),D.N(A.a([new A.f("Esc to close",d)],w),d,d,d,d)],w),a3,"flex ai:center gap:5 px:5 py:3 bwt:1 bc:edge fs:xs c:haze",d,d))
return E.u(A.a([x,new B.iD("site-search","m:auto mt:[12vh] w:[calc(100%_-_2rem)] mw:[40rem] p:0 br:2xl c:snow bg:deep bw:1 bc:[rgba(255,255,255,0.12)] sh:2xl ov:hidden backdrop:bg:[rgba(5,7,10,0.72)] backdrop:bblur:sm open:anim:fade-in motion-reduce:anim:none",v,t,q,d)],w),d,"flex ai:center",d,d)}}
var z=a.updateTypes(["~(A)","~()"])
B.mJ.prototype={
$0(){var x=this.a
x.e=""
x.f=0},
$S:1}
B.mK.prototype={
$1(d){return y.z.a(d).a[1]===this.a},
$S:74}
B.mL.prototype={
$2(d,e){var x=y.b
return C.e.L(x.a(d).a,x.a(e).a)},
$S:75}
B.mG.prototype={
$0(){var x=this.a
x.e=this.b
x.f=0},
$S:1}
B.mH.prototype={
$0(){var x=this.a
return x.f=C.e.ag(x.f+1,this.b.length)},
$S:1}
B.mI.prototype={
$0(){var x=this.a,w=x.f,v=this.b.length
return x.f=C.e.ag(w-1+v,v)},
$S:1}
B.mM.prototype={
$1(d){var x
A.qF(d)
x=A.I(A.w(b.G.document).getElementById("site-search-option-"+this.a.f))
if(x!=null)x.scrollIntoView({block:"nearest"})},
$S:76}
B.mO.prototype={
$1(d){A.w(d)
return this.a.eg()},
$S:6}
B.mP.prototype={
$1(d){A.w(d)
return this.b.ck(this.a.a)},
$S:6}
B.mQ.prototype={
$1(d){var x,w
A.w(d)
x=this.b
w=this.a
if(x.f!==w.b)x.G(new B.mN(w,x))},
$S:6}
B.mN.prototype={
$0(){return this.b.f=this.a.b},
$S:1};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.eT.prototype,"ge0","e1",0)
w(v,"ge8","cs",1)
w(v,"gdB","c5",1)
x(v,"ge2","e3",0)
x(v,"gek","el",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iD,N.p)
x(B.ch,I.K)
x(B.eT,I.H)
w(A.ap,[B.mJ,B.mG,B.mH,B.mI,B.mN])
w(A.a9,[B.mK,B.mM,B.mO,B.mP,B.mQ])
x(B.mL,A.bg)})()
A.L(b.typeUniverse,JSON.parse('{"iD":{"p":[],"i":[]},"ch":{"K":[],"i":[]},"eT":{"H":["ch"],"H.T":"ch"}}'))
var y=(function rtii(){var x=A.j
return{F:x("l<i>"),A:x("l<+(d,+keywords,path,section,title(b,b,b,b))>"),y:x("l<+keywords,path,section,title(b,b,b,b)>"),x:x("l<b>"),b:x("+(d,+keywords,path,section,title(b,b,b,b))"),z:x("+keywords,path,section,title(b,b,b,b)"),w:x("b"),m:x("@"),e:x("d"),a:x("~(A)")}})();(function constants(){var x=a.makeConstList
G.l7=x(["/docs/installation","/docs/syntax","/docs/utilities","/docs/components","/playground"],y.x)})()};
(a=>{a["1mxq64IZhI3R1sDlwKBVhio/018="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_114.part.js.map
