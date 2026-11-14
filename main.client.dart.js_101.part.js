((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
xL(d){var x,w,v,u,t,s,r,q,p,o,n
A:{if(d instanceof E.c4){x=d.b
w=x.gE()
w=A.a6(w,A.r(w).h("n.E"))
v=A.c9(y.w)
for(u=x.gaa(),u=u.gu(u);u.j();)for(t=u.gm().gE(),t=t.gu(t);t.j();)v.t(0,A.k(t.gm()))
v=A.a6(v,v.$ti.c)
w=new A.cE(w,v,"Class without a value")
break A}if(d instanceof E.q){s=d.b
r=d.c
q=d.d
w=y.x
v=A.a([],w)
for(u=s.gE(),u=u.gu(u);u.j();)v.push(u.gm()+":")
u=A.c9(y.w)
for(t=s.gaa(),t=t.gu(t);t.j();)for(p=J.Z(t.gm());p.j();)u.t(0,A.k(p.gm()))
u=A.a6(u,u.$ti.c)
w=A.a([],w)
if(r!=null)w.push("theme: "+r)
if(q.gI(q))w.push(B.tc(q.gE()))
if(d.f)w.push("[arbitrary]")
w=new A.cE(v,u,C.a.B(w,"; "))
break A}if(d instanceof E.dB){o=d.b
n=d.c
w=A.a([],y.x)
for(v=o.gu(o);v.j();)w.push(v.gm()+":")
v=A.c9(y.w)
for(u=A.r(n),t=new A.bn(n,n.r,n.e,u.h("bn<2>"));t.j();)for(p=t.d.gE(),p=p.gu(p);p.j();)v.t(0,A.k(p.gm()))
v=A.a6(v,v.$ti.c)
w=new A.cE(w,v,B.tc(new A.aV(n,u.h("aV<1>"))))
break A}if(d instanceof E.dA){o=d.b
w=A.a([],y.x)
for(v=o.gu(o);v.j();){u=v.gm()
w.push(u+":")}w=new A.cE(w,O.f,"number; [arbitrary]")
break A}w=null
break A}return w},
tc(d){var x=A.a6(d,A.r(d).h("n.E"))
return x.length<=6?C.a.B(x,", "):A.hM(x,0,A.ir(6,"count",y.e),A.a3(x).c).B(0,", ")+"\u2026"},
vG(){return new B.cc(null)},
cc:function cc(d){this.a=d},
eL:function eL(){this.d=""
this.c=this.a=null},
mo:function mo(d){this.a=d},
mp:function mp(d){this.a=d},
mr:function mr(){},
ms:function ms(){},
mt:function mt(d){this.a=d},
mq:function mq(d,e){this.a=d
this.b=e},
pE:function pE(){}},K,F,D,G,L,M,N,H,I,E,O,P,Q
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[10],B)
K=c[49]
F=c[51]
D=c[52]
G=c[47]
L=c[63]
M=c[33]
N=c[42]
H=c[43]
I=c[44]
E=c[35]
O=c[72]
P=c[19]
Q=c[32]
B.cc.prototype={
Z(){return new B.eL()}}
B.eL.prototype={
dN(d){var x
y.c.a(d)
x=C.c.U(this.d).toLowerCase()
if(x.length===0)return!0
return J.pJ(d.a,new B.mo(x))||J.pJ(d.b,new B.mp(x))},
l(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.a([],y.d)
for(x=$.tU(),w=x.length,v=g.gdM(),u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u]
s=J.r_(t.b,v)
s=A.a6(s,s.$ti.h("n.E"))
e.push(new A.e(t.a,s))}x=y.f
r=A.a6(new A.a2(e,y.g.a(new B.mr()),x),x.h("n.E"))
q=C.a.cI(r,0,new B.ms(),y.e)
e=y.w
x=y.F
w=D.u(A.a([M.dV(A.F(["placeholder","Search: bg, grid, ring, padding\u2026","aria-label","Search for a class or a CSS property"],e,e),f,"w:full px:4 py:3 br:lg c:snow bg:[#07090D] bw:1 bc:edge app:none caret:beam placeholder:c:[#6B7385] tr:all focus:ol:none focus:bc:brand focus:ring:4 ringc:[rgba(59,108,240,0.25)]",!1,f,f,f,f,new B.mt(g),L.au,f,e)],x),f,"fl:1",f,f)
e=A.F(["role","status"],e,e)
if(C.c.U(g.d).length===0)v=""+$.uj()+" rules"
else{v=q===1?"":"s"
v=""+q+" result"+v}e=A.a([D.u(A.a([w,G.aO(A.a([new A.h(v,f)],x),e,"fs:sm c:haze ws:nowrap",f)],x),f,"flex fd:col sm:fd:row sm:ai:center gap:3 mb:8",f,f)],x)
if(r.length===0)e.push(G.aO(A.a([new A.h('No rule matches "'+C.c.U(g.d)+'".',f)],x),f,"c:haze",f))
else{w=A.a([],x)
for(v=r.length,t=y.c,s=y.x,u=0;u<r.length;r.length===v||(0,A.G)(r),++u){p=r[u]
o=p.a.a
n=A.a([new A.h(o[3],f)],x)
o="/docs/utilities/"+o[2]
if(C.c.v(o,"/"))o="/zaspr-kit"+o
o=A.a([new P.fz(f,"fs:xl fw:bold c:snow",n,f),K.cG(A.a([new A.h("Detailed page",f)],x),f,"fs:sm fw:semibold c:beam td:underline tdt:1 tuo:4 tdc:[rgba(126,162,255,0.4)] tr:colors hover:c:snow hover:tdc:snow focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4",o,f)],x)
n=A.a([],x)
for(p=H.cT(p.b,0,t),m=J.Z(p.a),l=p.b,p=new H.ae(m,l,A.r(p).h("ae<1>"));p.j();){k=p.c
k=k>=0?new A.e(l+k,m.gm()):A.aP(A.aC())
j=k.b
i=A.a(["grid cols:1 md:cols:[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)] gap:2 md:gap:6 px:5 py:4"],s)
if(k.a>0)i.push("bwt:1 bc:edge")
k=C.a.B(i," ")
i=A.a([],x)
for(h=J.Z(j.a);h.j();)i.push(new N.fy("ff:code fs:sm c:ident",A.a([new A.h(h.gm(),f)],x),f))
n.push(new I.aM(k,f,A.a([new D.aK(f,"flex wrap gap:2",f,f,i,f),new D.Y(f,"ff:code fs:xs c:[#C9D1DE] lh:relaxed",f,f,A.a([new A.h(J.qZ(j.b,", "),f)],x),f),new D.Y(f,"fs:sm c:haze lh:relaxed",f,f,A.a([new A.h(j.c,f)],x),f)],x),f))}w.push(new Q.fB(f,f,A.a([new D.aK(f,"flex ai:baseline jc:between gap:4 mb:4",f,f,o,f),new I.e_("br:2xl bw:1 bc:edge bg:deep ov:hidden",f,n,f)],x),f))}e.push(D.u(w,f,"flex fd:col gap:10",f,f))}return D.u(e,f,f,f,f)}}
var z=a.updateTypes(["E(+classes,properties,values(l<b>,l<b>,b))","E(+(+lead,rules,slug,title(b,l<a9>,b,b),l<+classes,properties,values(l<b>,l<b>,b)>))","d(d,+(+lead,rules,slug,title(b,l<a9>,b,b),l<+classes,properties,values(l<b>,l<b>,b)>))","d(d,+lead,rules,slug,title(b,l<a9>,b,b))"])
B.mo.prototype={
$1(d){return C.c.C(A.k(d).toLowerCase(),this.a)},
$S:7}
B.mp.prototype={
$1(d){return C.c.C(A.k(d).toLowerCase(),this.a)},
$S:7}
B.mr.prototype={
$1(d){return J.pM(y.j.a(d).b)},
$S:z+1}
B.ms.prototype={
$2(d,e){return A.az(d)+J.aG(y.j.a(e).b)},
$S:z+2}
B.mt.prototype={
$1(d){var x=this.a
return x.H(new B.mq(x,A.k(d)))},
$S:3}
B.mq.prototype={
$0(){return this.a.d=this.b},
$S:1}
B.pE.prototype={
$2(d,e){return A.az(d)+J.aG(y.y.a(e).a[1])},
$S:z+3};(function installTearOffs(){var x=a._instance_1u
x(B.eL.prototype,"gdM","dN",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cc,F.L)
x(B.eL,F.I)
w(A.ab,[B.mo,B.mp,B.mr,B.mt])
w(A.bB,[B.ms,B.pE])
x(B.mq,A.aq)})()
A.J(b.typeUniverse,JSON.parse('{"cc":{"L":[],"i":[]},"eL":{"I":["cc"],"I.T":"cc"}}'))
var y=(function rtii(){var x=A.j
return{F:x("m<i>"),d:x("m<+(+lead,rules,slug,title(b,l<a9>,b,b),l<+classes,properties,values(l<b>,l<b>,b)>)>"),x:x("m<b>"),j:x("+(+lead,rules,slug,title(b,l<a9>,b,b),l<+classes,properties,values(l<b>,l<b>,b)>)"),c:x("+classes,properties,values(l<b>,l<b>,b)"),y:x("+lead,rules,slug,title(b,l<a9>,b,b)"),w:x("b"),f:x("a2<+(+lead,rules,slug,title(b,l<a9>,b,b),l<+classes,properties,values(l<b>,l<b>,b)>)>"),g:x("E(+(+lead,rules,slug,title(b,l<a9>,b,b),l<+classes,properties,values(l<b>,l<b>,b)>))"),e:x("d")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"yU","tU",()=>{var w,v,u,t,s,r,q,p=A.a([],y.d)
for(w=$.pI(),v=A.j("m<+classes,properties,values(l<b>,l<b>,b)>"),u=0;u<15;++u){t=w[u]
s=A.a([],v)
for(r=J.Z(t.a[1]);r.j();){q=B.xL(r.gm())
if(q!=null)s.push(q)}p.push(new A.e(t,s))}return p})
x($,"zD","uj",()=>C.a.cI($.pI(),0,new B.pE(),y.e))})()};
(a=>{a["tlhZNkDQke8fC6pbhoYuStRR5uA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_101.part.js.map
