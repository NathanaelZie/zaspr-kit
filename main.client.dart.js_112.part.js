((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
yh(d){var x,w,v,u,t,s,r,q,p,o,n
A:{if(d instanceof E.c7){x=d.b
w=x.gF()
w=A.a7(w,A.r(w).h("o.E"))
v=A.cc(y.w)
for(u=x.gaa(),u=u.gu(u);u.j();)for(t=u.gl().gF(),t=t.gu(t);t.j();)v.t(0,A.k(t.gl()))
v=A.a7(v,v.$ti.c)
w=new A.cH(w,v,"Class without a value")
break A}if(d instanceof E.q){s=d.b
r=d.c
q=d.d
w=y.x
v=A.a([],w)
for(u=s.gF(),u=u.gu(u);u.j();)v.push(u.gl()+":")
u=A.cc(y.w)
for(t=s.gaa(),t=t.gu(t);t.j();)for(p=J.Z(t.gl());p.j();)u.t(0,A.k(p.gl()))
u=A.a7(u,u.$ti.c)
w=A.a([],w)
if(r!=null)w.push("theme: "+r)
if(q.gJ(q))w.push(B.tz(q.gF()))
if(d.f)w.push("[arbitrary]")
w=new A.cH(v,u,C.a.v(w,"; "))
break A}if(d instanceof E.dF){o=d.b
n=d.c
w=A.a([],y.x)
for(v=o.gu(o);v.j();)w.push(v.gl()+":")
v=A.cc(y.w)
for(u=A.r(n),t=new A.bq(n,n.r,n.e,u.h("bq<2>"));t.j();)for(p=t.d.gF(),p=p.gu(p);p.j();)v.t(0,A.k(p.gl()))
v=A.a7(v,v.$ti.c)
w=new A.cH(w,v,B.tz(new A.aX(n,u.h("aX<1>"))))
break A}if(d instanceof E.dE){o=d.b
w=A.a([],y.x)
for(v=o.gu(o);v.j();){u=v.gl()
w.push(u+":")}w=new A.cH(w,P.f,"number; [arbitrary]")
break A}w=null
break A}return w},
tz(d){var x=A.a7(d,A.r(d).h("o.E"))
return x.length<=6?C.a.v(x,", "):A.f0(x,0,A.e0(6,"count",y.e),A.a0(x).c).v(0,", ")+"\u2026"},
wa(){return new B.cg(null)},
cg:function cg(d){this.a=d},
eR:function eR(){this.d=""
this.c=this.a=null},
mz:function mz(d){this.a=d},
mA:function mA(d){this.a=d},
mC:function mC(){},
mD:function mD(){},
mE:function mE(d){this.a=d},
mB:function mB(d,e){this.a=d
this.b=e},
q1:function q1(){}},L,F,G,D,H,M,N,O,I,K,E,P,Q,R
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[10],B)
L=c[46]
F=c[52]
G=c[51]
D=c[53]
H=c[47]
M=c[64]
N=c[40]
O=c[41]
I=c[42]
K=c[45]
E=c[34]
P=c[73]
Q=c[20]
R=c[31]
B.cg.prototype={
Z(){return new B.eR()}}
B.eR.prototype={
dX(d){var x
y.c.a(d)
x=C.c.P(this.d).toLowerCase()
if(x.length===0)return!0
return J.q7(d.a,new B.mz(x))||J.q7(d.b,new B.mA(x))},
m(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.a([],y.d)
for(x=$.uf(),w=x.length,v=g.gdW(),u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u]
s=J.rl(t.b,v)
s=A.a7(s,s.$ti.h("o.E"))
e.push(new A.e(t.a,s))}x=y.f
r=A.a7(new A.a_(e,y.g.a(new B.mC()),x),x.h("o.E"))
q=C.a.cR(r,0,new B.mD(),y.e)
e=y.w
x=y.F
w=D.u(A.a([N.dr(A.B(["placeholder","Search: bg, grid, ring, padding\u2026","aria-label","Search for a class or a CSS property"],e,e),f,"w:full px:4 py:3 br:lg c:snow bg:[#07090D] bw:1 bc:edge app:none caret:beam placeholder:c:[#6B7385] tr:all focus:ol:none focus:bc:brand focus:ring:4 ringc:[rgba(59,108,240,0.25)]",!1,f,f,f,f,new B.mE(g),M.aw,f,e)],x),f,"fl:1",f,f)
e=A.B(["role","status"],e,e)
if(C.c.P(g.d).length===0)v=""+$.uF()+" rules"
else{v=q===1?"":"s"
v=""+q+" result"+v}e=A.a([D.u(A.a([w,H.aJ(A.a([new A.f(v,f)],x),e,"fs:sm c:haze ws:nowrap",f)],x),f,"flex fd:col sm:fd:row sm:ai:center gap:3 mb:8",f,f)],x)
if(r.length===0)e.push(H.aJ(A.a([new A.f('No rule matches "'+C.c.P(g.d)+'".',f)],x),f,"c:haze",f))
else{w=A.a([],x)
for(v=r.length,t=y.c,s=y.x,u=0;u<r.length;r.length===v||(0,A.G)(r),++u){p=r[u]
o=p.a.a
n=A.a([new A.f(o[3],f)],x)
o="/docs/utilities/"+o[2]
if(C.c.B(o,"/"))o="/zaspr-kit"+o
o=A.a([new Q.fH(f,"fs:xl fw:bold c:snow",n,f),L.dn(A.a([new A.f("Detailed page",f)],x),f,"fs:sm fw:semibold c:beam td:underline tdt:1 tuo:4 tdc:[rgba(126,162,255,0.4)] tr:colors hover:c:snow hover:tdc:snow focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4",o,f)],x)
n=A.a([],x)
for(p=I.cu(p.b,0,t),m=J.Z(p.a),l=p.b,p=new I.aa(m,l,A.r(p).h("aa<1>"));p.j();){k=p.c
k=k>=0?new A.e(l+k,m.gl()):A.aw(A.ay())
j=k.b
i=A.a(["grid cols:1 md:cols:[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)] gap:2 md:gap:6 px:5 py:4"],s)
if(k.a>0)i.push("bwt:1 bc:edge")
k=C.a.v(i," ")
i=A.a([],x)
for(h=J.Z(j.a);h.j();)i.push(new O.fG("ff:code fs:sm c:ident",A.a([new A.f(h.gl(),f)],x),f))
n.push(new K.aM(f,k,f,f,A.a([new D.aP(f,"flex wrap gap:2",f,f,i,f),new G.W(f,"ff:code fs:xs c:[#C9D1DE] lh:relaxed",f,f,A.a([new A.f(J.rk(j.b,", "),f)],x),f),new G.W(f,"fs:sm c:haze lh:relaxed",f,f,A.a([new A.f(j.c,f)],x),f)],x),f))}w.push(new R.fJ(f,f,A.a([new D.aP(f,"flex ai:baseline jc:between gap:4 mb:4",f,f,o,f),new K.e6(f,"br:2xl bw:1 bc:edge bg:deep ov:hidden",f,n,f)],x),f))}e.push(D.u(w,f,"flex fd:col gap:10",f,f))}return D.u(e,f,f,f,f)}}
var z=a.updateTypes(["C(+classes,properties,values(m<b>,m<b>,b))","C(+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>))","d(d,+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>))","d(d,+lead,rules,slug,title(b,m<ab>,b,b))"])
B.mz.prototype={
$1(d){return C.c.C(A.k(d).toLowerCase(),this.a)},
$S:8}
B.mA.prototype={
$1(d){return C.c.C(A.k(d).toLowerCase(),this.a)},
$S:8}
B.mC.prototype={
$1(d){return J.qa(y.j.a(d).b)},
$S:z+1}
B.mD.prototype={
$2(d,e){return A.am(d)+J.aK(y.j.a(e).b)},
$S:z+2}
B.mE.prototype={
$1(d){var x=this.a
return x.G(new B.mB(x,A.k(d)))},
$S:3}
B.mB.prototype={
$0(){return this.a.d=this.b},
$S:1}
B.q1.prototype={
$2(d,e){return A.am(d)+J.aK(y.y.a(e).a[1])},
$S:z+3};(function installTearOffs(){var x=a._instance_1u
x(B.eR.prototype,"gdW","dX",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cg,F.K)
x(B.eR,F.H)
w(A.a9,[B.mz,B.mA,B.mC,B.mE])
w(A.bg,[B.mD,B.q1])
x(B.mB,A.ap)})()
A.L(b.typeUniverse,JSON.parse('{"cg":{"K":[],"i":[]},"eR":{"H":["cg"],"H.T":"cg"}}'))
var y=(function rtii(){var x=A.j
return{F:x("l<i>"),d:x("l<+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>)>"),x:x("l<b>"),j:x("+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>)"),c:x("+classes,properties,values(m<b>,m<b>,b)"),y:x("+lead,rules,slug,title(b,m<ab>,b,b)"),w:x("b"),f:x("a_<+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>)>"),g:x("C(+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>))"),e:x("d")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"zp","uf",()=>{var w,v,u,t,s,r,q,p=A.a([],y.d)
for(w=$.q5(),v=A.j("l<+classes,properties,values(m<b>,m<b>,b)>"),u=0;u<15;++u){t=w[u]
s=A.a([],v)
for(r=J.Z(t.a[1]);r.j();){q=B.yh(r.gl())
if(q!=null)s.push(q)}p.push(new A.e(t,s))}return p})
x($,"A8","uF",()=>C.a.cR($.q5(),0,new B.q1(),y.e))})()};
(a=>{a["bG9ZuAtVkG34M/S+LEdfikgOMWQ="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_112.part.js.map
