((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={iP:function iP(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h
_.a=i},
yn(d){var x,w,v,u,t,s,r,q,p=A.a([],y.y)
for(x=d.split("\n"),w=x.length,v=0;v<w;++v){u=x[v].split("\t")
t=u.length
if(t===4){if(0>=t)return A.x(u,0)
s=u[0]
if(1>=t)return A.x(u,1)
r=u[1]
if(2>=t)return A.x(u,2)
q=u[2]
if(3>=t)return A.x(u,3)
p.push(new A.fw([u[3].toLowerCase(),q,s,r]))}}return p},
xc(d){return new B.co(d,null)},
co:function co(d,e){this.c=d
this.a=e},
f1:function f1(){var _=this
_.d=$
_.e=""
_.f=0
_.r=null
_.w=!1
_.c=_.a=null},
mY:function mY(d){this.a=d},
mZ:function mZ(d){this.a=d},
n_:function n_(d){this.a=d},
n0:function n0(){},
mV:function mV(d,e){this.a=d
this.b=e},
mW:function mW(d,e){this.a=d
this.b=e},
mX:function mX(d,e){this.a=d
this.b=e},
n1:function n1(d){this.a=d},
n3:function n3(d){this.a=d},
n4:function n4(d){this.a=d},
n5:function n5(d,e){this.a=d
this.b=e},
n6:function n6(d,e){this.a=d
this.b=e},
n2:function n2(d,e){this.a=d
this.b=e}},G,H,I,D,N,E,K,O,P,F,Q,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[11],B)
G=c[88]
H=c[59]
I=c[62]
D=c[61]
N=c[63]
E=c[60]
K=c[56]
O=c[73]
P=c[47]
F=c[49]
Q=c[51]
L=c[53]
M=c[52]
B.iP.prototype={
n(d){var x=this,w=y.w
w=A.y(w,w)
w.m(0,x.r)
return new A.E("dialog",x.d,x.e,null,w,x.w,x.x,null)}}
B.co.prototype={
X(){return new B.f1()}}
B.f1.prototype={
gcp(){var x,w=this,v=w.d
if(v===$){x=B.yn(w.a.c)
w.d!==$&&A.qV()
w.d=x
v=x}return v},
be(){this.cc()
var x=A.ov(this.gea())
this.r=x
A.w(b.G.document).addEventListener("keydown",x)},
aq(){var x=this.r
if(x!=null)A.w(b.G.document).removeEventListener("keydown",x)
this.aV()},
eb(d){var x,w,v,u,t,s,r,q
A.w(d)
try{x=d
w=A.k(x.key)
v=(A.aL(x.ctrlKey)||A.aL(x.metaKey))&&w.toLowerCase()==="k"
if(!v){u=!0
if(J.ay(w,"/")){A.G(x.target)
t=A.G(A.w(b.G.document).activeElement)
s=t==null
r=s?null:A.k(t.tagName)
if(r==null)r=""
if(r!=="INPUT")if(r!=="TEXTAREA")if(r!=="SELECT"){u=s?null:A.aL(t.isContentEditable)
u=u===!0}}}else u=!1
if(u)return
x.preventDefault()
this.cF()}catch(q){return}},
cF(){var x=b.G,w=A.G(A.w(x.document).getElementById("site-search"))
if(w==null||A.aL(w.open))return
w.showModal()
this.A(new B.mY(this))
x=A.G(A.w(x.document).getElementById("site-search-input"))
if(x!=null)x.focus()},
bD(){var x=A.G(A.w(b.G.document).getElementById("site-search"))
if(x!=null)x.close()
if(this.w)this.cJ()},
cJ(){var x=A.G(A.w(b.G.document).getElementById("site-search-input"))
if(x!=null)x.value=""
this.A(new B.mZ(this))},
gcK(){var x,w,v,u,t,s,r,q,p,o,n,m=C.c.O(this.e).toLowerCase()
if(m.length===0){x=A.a([],y.y)
for(w=0;w<5;++w){v=G.lo[w]
u=this.gcp()
t=A.a4(u)
s=t.h("a2<1>")
C.a.m(x,A.tR(new A.a2(u,t.h("D(1)").a(new B.n_(v)),s),1,s.h("o.E")))}return x}r=C.c.aT(m,A.N("\\s+"))
q=A.a([],y.A)
for(x=this.gcp(),u=x.length,w=0;w<x.length;x.length===u||(0,A.L)(x),++w){p=x[w]
t=p.a
o=t[3].toLowerCase()
if(!C.a.f6(r,C.c.geW(o+" "+t[2].toLowerCase()+" "+t[0])))continue
if(o===m)n=0
else if(C.c.C(o,m))n=1
else{if(A.qU(o,m,0))t=2
else{t=t[2]
t=A.qU(t.toLowerCase(),m,0)?3:4}n=t}C.a.t(q,new A.f(n,p))}C.a.a5(q,new B.n0())
x=A.a([],y.y)
for(u=A.f9(q,0,A.ee(12,"count",y.e),y.b),t=u.$ti,u=new A.b3(u,u.gq(0),t.h("b3<ak.E>")),t=t.h("ak.E");u.j();){s=u.d
x.push((s==null?t.a(s):s).b)}return x},
cu(d){var x,w
this.bD()
x=A.w(A.w(b.G.window).location)
w=d.a[1]
if(C.c.C(w,"/"))w="/zaspr-kit"+w
x.href=w},
ed(d){var x=A.G(A.w(d).target)
if(x==null)x=A.w(x)
this.A(new B.mV(this,A.k(x.value)))},
ev(d){var x,w,v=this
A.w(d)
x=v.gcK()
if(x.length===0)return
switch(A.k(d.key)){case"ArrowDown":d.preventDefault()
v.A(new B.mW(v,x))
v.cL()
break
case"ArrowUp":d.preventDefault()
v.A(new B.mX(v,x))
v.cL()
break
case"Enter":d.preventDefault()
w=C.e.af(v.f,0,x.length-1)
if(!(w>=0&&w<x.length))return A.x(x,w)
v.cu(x[w])
break}},
cL(){A.am(A.w(b.G.window).requestAnimationFrame(A.ov(new B.n1(this))))},
n(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="site-search-results",a1="site-search-option-",a2=e.gcK(),a3=a2.length,a4=a3===0?-1:C.e.af(e.f,0,a3-1)
a3=y.w
x=A.r(["type","button","aria-haspopup","dialog","aria-controls","site-search","aria-keyshortcuts","Control+K Meta+K /"],a3,a3)
w=y.F
x=H.b8(A.a([F.dC("search","w:4 h:4"),D.O(A.a([new A.e("Search the docs",d)],w),d,"sr-only xl:not-sr-only grow:1 ta:left",d,d),new A.E("kbd",d,"hidden xl:inline-flex ai:center px:2 py:[0.1rem] br:md ff:code fs:xs c:haze bg:tint bw:1 bc:edge",d,d,d,A.a([new A.e("Ctrl K",d)],w),d)],w),x,"flex ai:center gap:3 h:10 px:3 xl:pr:2 br:lg fs:sm c:haze bw:1 bc:edge bg:tint tr:all hover:c:snow hover:bc:edge-strong xl:w:[15rem] focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4",!1,d,d,e.gei(),d)
v=A.y(a3,a3)
v.i(0,"aria-label","Search the documentation")
if(e.w)v.i(0,"open","")
u=y.a
t=A.r(["cancel",new B.n3(e),"close",new B.n4(e)],a3,u)
s=D.O(A.a([F.dC("search","w:5 h:5")],w),d,"c:haze",d,d)
r=A.y(a3,a3)
r.i(0,"placeholder","Search pages, utilities, components\u2026")
r.i(0,"autocomplete","off")
r.i(0,"spellcheck","false")
r.i(0,"role","combobox")
r.i(0,"aria-expanded","true")
r.i(0,"aria-controls",a0)
r.i(0,"aria-autocomplete","list")
if(a4>=0)r.i(0,"aria-activedescendant",a1+a4)
r=P.bI(r,d,"grow:1 mnw:0 h:[3.5rem] bg:transparent c:snow fs:base caret:beam placeholder:c:faint focus:ol:none app:none",!1,A.r(["input",e.gec(),"keydown",e.geu()],a3,u),"site-search-input",d,d,d,O.t,d,y.m)
q=A.r(["type","button","aria-label","Close the search"],a3,a3)
q=A.a([E.t(A.a([s,r,H.b8(A.a([new A.e("Esc",d)],w),q,"shrink:0 px:2 py:1 br:md ff:code fs:xs c:haze bw:1 bc:edge hover:c:snow focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4",!1,d,d,e.gdK(),d)],w),d,"flex ai:center gap:3 px:5 bwb:1 bc:edge",d,d)],w)
if(a2.length===0)q.push(K.ax(A.a([new A.e("No page matches \u201c"+e.e+"\u201d. Try a utility family, such as ",d),Q.fR(A.a([new A.e("spacing",d)],w),"ff:code c:snow"),new A.e(", or a component name.",d)],w),d,"px:5 py:10 ta:center fs:sm c:haze",d))
else{s=A.a([],w)
if(C.c.O(e.e).length===0)s.push(K.ax(A.a([new A.e("Suggested",d)],w),d,"px:5 pt:4 pb:1 fs:xs fw:semibold c:haze",d))
r=A.r(["role","listbox","aria-label","Pages"],a3,a3)
p=A.a([],w)
for(o=L.bp(a2,0,y.z),n=J.a_(o.a),m=o.b,o=new L.a1(n,m,A.q(o).h("a1<1>")),l=y.x;o.j();){k={}
j=o.c
j=j>=0?new A.f(m+j,n.gl()):A.an(A.aq())
k.a=k.b=null
i=k.b=j.a
k.a=j.b
j=A.a(["flex ai:center jc:between gap:4 px:3 py:3 br:lg cur:pointer"],l)
h=i===a4
if(h)j.push("bg:brand-soft")
j=C.a.v(j," ")
h=A.r(["role","option","aria-selected",""+h],a3,a3)
g=A.r(["click",new B.n5(k,e),"pointermove",new B.n6(k,e)],a3,u)
f=A.a([new D.W(d,"flex fd:col mnw:0",d,d,A.a([new D.W(d,"fw:medium c:snow truncate",d,d,A.a([new A.e(k.a.a[3],d)],w),d),new D.W(d,"fs:xs c:haze truncate",d,d,A.a([new A.e(k.a.a[2],d)],w),d)],w),d)],w)
if(k.b===a4)f.push(new D.W(d,"shrink:0 c:beam",d,d,A.a([F.dC("arrow","w:4 h:4")],w),d))
p.push(new M.aQ(a1+i,j,h,g,f,d))}s.push(M.jd(p,r,"mh:[min(24rem,60vh)] ovy:auto p:2",a0))
C.a.m(q,s)}a3=A.r(["aria-hidden","true"],a3,a3)
q.push(E.t(A.a([D.O(A.a([new A.e("\u2191 \u2193 to move",d)],w),d,d,d,d),D.O(A.a([new A.e("Enter to open",d)],w),d,d,d,d),D.O(A.a([new A.e("Esc to close",d)],w),d,d,d,d)],w),a3,"flex ai:center gap:5 px:5 py:3 bwt:1 bc:edge fs:xs c:haze",d,d))
return E.t(A.a([x,new B.iP("site-search","m:auto mt:[12vh] w:[calc(100%_-_2rem)] mw:[40rem] p:0 br:2xl c:snow bg:deep bw:1 bc:edge-strong sh:2xl ov:hidden backdrop:bg:[rgba(5,7,10,0.72)] backdrop:bblur:sm open:anim:fade-in motion-reduce:anim:none",v,t,q,d)],w),d,"flex ai:center",d,d)}}
var z=a.updateTypes(["~(C)","~()"])
B.mY.prototype={
$0(){return this.a.w=!0},
$S:1}
B.mZ.prototype={
$0(){var x=this.a
x.w=!1
x.e=""
x.f=0},
$S:1}
B.n_.prototype={
$1(d){return y.z.a(d).a[1]===this.a},
$S:75}
B.n0.prototype={
$2(d,e){var x=y.b
return C.e.L(x.a(d).a,x.a(e).a)},
$S:76}
B.mV.prototype={
$0(){var x=this.a
x.e=this.b
x.f=0},
$S:1}
B.mW.prototype={
$0(){var x=this.a
return x.f=C.e.ai(x.f+1,this.b.length)},
$S:1}
B.mX.prototype={
$0(){var x=this.a,w=x.f,v=this.b.length
return x.f=C.e.ai(w-1+v,v)},
$S:1}
B.n1.prototype={
$1(d){var x
A.rA(d)
x=A.G(A.w(b.G.document).getElementById("site-search-option-"+this.a.f))
if(x!=null)x.scrollIntoView({block:"nearest"})},
$S:77}
B.n3.prototype={
$1(d){A.w(d).preventDefault()
this.a.bD()},
$S:3}
B.n4.prototype={
$1(d){var x
A.w(d)
x=this.a
if(x.w)x.cJ()},
$S:3}
B.n5.prototype={
$1(d){A.w(d)
return this.b.cu(this.a.a)},
$S:3}
B.n6.prototype={
$1(d){var x,w
A.w(d)
x=this.b
w=this.a
if(x.f!==w.b)x.A(new B.n2(w,x))},
$S:3}
B.n2.prototype={
$0(){return this.b.f=this.a.b},
$S:1};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.f1.prototype,"gea","eb",0)
w(v,"gei","cF",1)
w(v,"gdK","bD",1)
x(v,"gec","ed",0)
x(v,"geu","ev",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.iP,N.p)
x(B.co,I.I)
x(B.f1,I.H)
w(A.ad,[B.mY,B.mZ,B.mV,B.mW,B.mX,B.n2])
w(A.a8,[B.n_,B.n1,B.n3,B.n4,B.n5,B.n6])
x(B.n0,A.bb)})()
A.J(b.typeUniverse,JSON.parse('{"iP":{"p":[],"h":[]},"co":{"I":[],"h":[]},"f1":{"H":["co"],"H.T":"co"}}'))
var y=(function rtii(){var x=A.j
return{F:x("l<h>"),A:x("l<+(d,+keywords,path,section,title(b,b,b,b))>"),y:x("l<+keywords,path,section,title(b,b,b,b)>"),x:x("l<b>"),b:x("+(d,+keywords,path,section,title(b,b,b,b))"),z:x("+keywords,path,section,title(b,b,b,b)"),w:x("b"),m:x("@"),e:x("d"),a:x("~(C)")}})();(function constants(){var x=a.makeConstList
G.lo=x(["/docs/installation","/docs/syntax","/docs/utilities","/docs/components","/playground"],y.x)})()};
(a=>{a["mZTOzS/9FEpd7zuampurSvDvjAc="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_131.part.js.map
