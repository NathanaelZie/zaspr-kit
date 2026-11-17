((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,B={
zm(d){var x,w,v,u,t,s,r,q,p,o,n
A:{if(d instanceof E.ce){x=d.b
w=x.gG()
w=A.aa(w,A.q(w).h("o.E"))
v=A.cj(y.w)
for(u=x.gaa(),u=u.gu(u);u.j();)for(t=u.gl().gG(),t=t.gu(t);t.j();)v.t(0,A.k(t.gl()))
v=A.aa(v,v.$ti.c)
w=new A.cT(w,v,"Class without a value")
break A}if(d instanceof E.u){s=d.b
r=d.c
q=d.d
w=y.x
v=A.a([],w)
for(u=s.gG(),u=u.gu(u);u.j();)v.push(u.gl()+":")
u=A.cj(y.w)
for(t=s.gaa(),t=t.gu(t);t.j();)for(p=J.a_(t.gl());p.j();)u.t(0,A.k(p.gl()))
u=A.aa(u,u.$ti.c)
w=A.a([],w)
if(r!=null)w.push("theme: "+r)
if(q.gJ(q))w.push(B.ux(q.gG()))
if(d.f)w.push("[arbitrary]")
w=new A.cT(v,u,C.a.v(w,"; "))
break A}if(d instanceof E.dS){o=d.b
n=d.c
w=A.a([],y.x)
for(v=o.gu(o);v.j();)w.push(v.gl()+":")
v=A.cj(y.w)
for(u=A.q(n),t=new A.by(n,n.r,n.e,u.h("by<2>"));t.j();)for(p=t.d.gG(),p=p.gu(p);p.j();)v.t(0,A.k(p.gl()))
v=A.aa(v,v.$ti.c)
w=new A.cT(w,v,B.ux(new A.b2(n,u.h("b2<1>"))))
break A}if(d instanceof E.dR){o=d.b
w=A.a([],y.x)
for(v=o.gu(o);v.j();){u=v.gl()
w.push(u+":")}w=new A.cT(w,Q.f,"number; [arbitrary]")
break A}w=null
break A}return w},
ux(d){var x=A.aa(d,A.q(d).h("o.E"))
return x.length<=6?C.a.v(x,", "):A.f9(x,0,A.ee(6,"count",y.e),A.a4(x).c).v(0,", ")+"\u2026"},
x8(){return new B.cn(null)},
cn:function cn(d){this.a=d},
f_:function f_(){this.d=""
this.c=this.a=null},
mO:function mO(d){this.a=d},
mP:function mP(d){this.a=d},
mR:function mR(){},
mS:function mS(){},
mT:function mT(d){this.a=d},
mQ:function mQ(d,e){this.a=d
this.b=e},
qT:function qT(){}},M,F,G,D,H,N,O,P,I,K,E,Q,R
J=c[1]
A=c[0]
C=c[2]
L=c[35]
B=a.updateHolder(c[10],B)
M=c[54]
F=c[62]
G=c[61]
D=c[60]
H=c[56]
N=c[73]
O=c[47]
P=c[51]
I=c[53]
K=c[52]
E=c[44]
Q=c[82]
R=c[34]
B.cn.prototype={
X(){return new B.f_()}}
B.f_.prototype={
e6(d){var x
y.c.a(d)
x=C.c.O(this.d).toLowerCase()
if(x.length===0)return!0
return J.r_(d.a,new B.mO(x))||J.r_(d.b,new B.mP(x))},
n(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.a([],y.d)
for(x=$.vf(),w=x.length,v=g.ge5(),u=0;u<x.length;x.length===w||(0,A.L)(x),++u){t=x[u]
s=J.tf(t.b,v)
s=A.aa(s,s.$ti.h("o.E"))
e.push(new A.f(t.a,s))}x=y.f
r=A.aa(new A.a2(e,y.g.a(new B.mR()),x),x.h("o.E"))
q=C.a.d2(r,0,new B.mS(),y.e)
e=y.w
x=y.F
w=D.t(A.a([O.bI(A.r(["placeholder","Search: bg, grid, ring, padding\u2026","aria-label","Search for a class or a CSS property"],e,e),f,"w:full px:4 py:3 br:lg c:snow bg:ink bw:1 bc:edge app:none caret:beam placeholder:c:faint tr:all focus:ol:none focus:bc:brand focus:ring:4 ringc:brand-soft",!1,f,f,f,f,new B.mT(g),N.az,f,e)],x),f,"fl:1",f,f)
e=A.r(["role","status"],e,e)
if(C.c.O(g.d).length===0)v=""+$.vG()+" rules"
else{v=q===1?"":"s"
v=""+q+" result"+v}e=A.a([D.t(A.a([w,H.ax(A.a([new A.e(v,f)],x),e,"fs:sm c:haze ws:nowrap",f)],x),f,"flex fd:col sm:fd:row sm:ai:center gap:3 mb:8",f,f)],x)
if(r.length===0)e.push(H.ax(A.a([new A.e('No rule matches "'+C.c.O(g.d)+'".',f)],x),f,"c:haze",f))
else{w=A.a([],x)
for(v=r.length,t=y.c,s=y.x,u=0;u<r.length;r.length===v||(0,A.L)(r),++u){p=r[u]
o=p.a.a
n=A.a([new A.e(o[3],f)],x)
o="/docs/utilities/"+o[2]
if(C.c.C(o,"/"))o="/zaspr-kit"+o
o=A.a([new R.fS(f,"fs:xl fw:bold c:snow",n,f),M.dA(A.a([new A.e("Detailed page",f)],x),f,"fs:sm fw:semibold c:beam td:underline tdt:1 tuo:4 tdc:brand-line tr:colors hover:c:snow hover:tdc:snow focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4",o,f)],x)
n=A.a([],x)
for(p=I.bp(p.b,0,t),m=J.a_(p.a),l=p.b,p=new I.a1(m,l,A.q(p).h("a1<1>"));p.j();){k=p.c
k=k>=0?new A.f(l+k,m.gl()):A.an(A.aq())
j=k.b
i=A.a(["grid cols:1 md:cols:[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)] gap:2 md:gap:6 px:5 py:4"],s)
if(k.a>0)i.push("bwt:1 bc:edge")
k=C.a.v(i," ")
i=A.a([],x)
for(h=J.a_(j.a);h.j();)i.push(new P.fQ("ff:code fs:sm c:ident",A.a([new A.e(h.gl(),f)],x),f))
n.push(new K.aQ(f,k,f,f,A.a([new D.aV(f,"flex wrap gap:2",f,f,i,f),new G.W(f,"ff:code fs:xs c:soft lh:relaxed",f,f,A.a([new A.e(J.te(j.b,", "),f)],x),f),new G.W(f,"fs:sm c:haze lh:relaxed",f,f,A.a([new A.e(j.c,f)],x),f)],x),f))}w.push(new L.fU(f,f,A.a([new D.aV(f,"flex ai:baseline jc:between gap:4 mb:4",f,f,o,f),new K.ej(f,"br:2xl bw:1 bc:edge bg:deep ov:hidden",f,n,f)],x),f))}e.push(D.t(w,f,"flex fd:col gap:10",f,f))}return D.t(e,f,f,f,f)}}
var z=a.updateTypes(["D(+classes,properties,values(m<b>,m<b>,b))","D(+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>))","d(d,+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>))","d(d,+lead,rules,slug,title(b,m<ab>,b,b))"])
B.mO.prototype={
$1(d){return C.c.D(A.k(d).toLowerCase(),this.a)},
$S:9}
B.mP.prototype={
$1(d){return C.c.D(A.k(d).toLowerCase(),this.a)},
$S:9}
B.mR.prototype={
$1(d){return J.r2(y.j.a(d).b)},
$S:z+1}
B.mS.prototype={
$2(d,e){return A.am(d)+J.aN(y.j.a(e).b)},
$S:z+2}
B.mT.prototype={
$1(d){var x=this.a
return x.A(new B.mQ(x,A.k(d)))},
$S:4}
B.mQ.prototype={
$0(){return this.a.d=this.b},
$S:1}
B.qT.prototype={
$2(d,e){return A.am(d)+J.aN(y.y.a(e).a[1])},
$S:z+3};(function installTearOffs(){var x=a._instance_1u
x(B.f_.prototype,"ge5","e6",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.cn,F.I)
x(B.f_,F.H)
w(A.a8,[B.mO,B.mP,B.mR,B.mT])
w(A.bb,[B.mS,B.qT])
x(B.mQ,A.ad)})()
A.J(b.typeUniverse,JSON.parse('{"cn":{"I":[],"h":[]},"f_":{"H":["cn"],"H.T":"cn"}}'))
var y=(function rtii(){var x=A.j
return{F:x("l<h>"),d:x("l<+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>)>"),x:x("l<b>"),j:x("+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>)"),c:x("+classes,properties,values(m<b>,m<b>,b)"),y:x("+lead,rules,slug,title(b,m<ab>,b,b)"),w:x("b"),f:x("a2<+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>)>"),g:x("D(+(+lead,rules,slug,title(b,m<ab>,b,b),m<+classes,properties,values(m<b>,m<b>,b)>))"),e:x("d")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"Aw","vf",()=>{var w,v,u,t,s,r,q,p=A.a([],y.d)
for(w=$.qY(),v=A.j("l<+classes,properties,values(m<b>,m<b>,b)>"),u=0;u<15;++u){t=w[u]
s=A.a([],v)
for(r=J.a_(t.a[1]);r.j();){q=B.zm(r.gl())
if(q!=null)s.push(q)}p.push(new A.f(t,s))}return p})
x($,"Bh","vG",()=>C.a.d2($.qY(),0,new B.qT(),y.e))})()};
(a=>{a["KUkMtnAnAhH5AL8o/UZfYWGya/M="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_127.part.js.map
