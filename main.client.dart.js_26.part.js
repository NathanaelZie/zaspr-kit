((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,I,F,E,K,C,L,B={
nD(d){var x=null
switch(d){case!0:x="true"
break
case!1:x="false"
break
case null:case void 0:break}return x},
fX:function fX(d,e,f){this.d=d
this.w=e
this.a=f},
h2:function h2(d,e){this.w=d
this.a=e},
ea:function ea(d,e,f,g,h,i){var _=this
_.c=d
_.x=e
_.Q=f
_.at=g
_.a=h
_.$ti=i},
rW(d){var x,w,v,u,t,s,r,q,p,o,n
$label0$0:{if(d instanceof E.bh){x=d.b
w=x.gF()
w=A.Z(w,A.l(w).h("j.E"))
v=A.bk(y.N)
for(u=x.ga5(),u=u.gt(u);u.i();)for(t=u.gl().gF(),t=t.gt(t);t.i();)v.n(0,A.e(t.gl()))
v=A.Z(v,v.$ti.c)
w=new A.bG(w,v,"Class without a value")
break $label0$0}if(d instanceof E.k){s=d.b
r=d.c
q=d.d
w=y.s
v=A.a([],w)
for(u=s.gF(),u=u.gt(u);u.i();)v.push(u.gl()+":")
u=A.bk(y.N)
for(t=s.ga5(),t=t.gt(t);t.i();)for(p=J.X(t.gl());p.i();)u.n(0,A.e(p.gl()))
u=A.Z(u,u.$ti.c)
w=A.a([],w)
if(r!=null)w.push("theme: "+r)
if(q.gH(q))w.push(B.nR(q.gF()))
if(d.f)w.push("[arbitrary]")
w=new A.bG(v,u,D.a.C(w,"; "))
break $label0$0}if(d instanceof E.cn){o=d.b
n=d.c
w=A.a([],y.s)
for(v=o.gt(o);v.i();)w.push(v.gl()+":")
v=A.bk(y.N)
for(u=A.l(n),t=new A.bi(n,n.r,n.e,u.h("bi<2>"));t.i();)for(p=t.d.gF(),p=p.gt(p);p.i();)v.n(0,A.e(p.gl()))
v=A.Z(v,v.$ti.c)
w=new A.bG(w,v,B.nR(new A.aA(n,u.h("aA<1>"))))
break $label0$0}if(d instanceof E.cm){o=d.b
w=A.a([],y.s)
for(v=o.gt(o);v.i();){u=v.gl()
w.push(u+":")}w=new A.bG(w,K.o,"number; [arbitrary]")
break $label0$0}w=null
break $label0$0}return w},
nR(d){var x=A.Z(d,A.l(d).h("j.E"))
return x.length<=6?D.a.C(x,", "):A.fd(x,0,A.fU(6,"count",y.S),A.W(x).c).C(0,", ")+"\u2026"},
q3(){return new B.bn(null)},
bn:function bn(d){this.a=d},
dr:function dr(){this.d=""
this.c=this.a=null},
jV:function jV(d){this.a=d},
jW:function jW(d){this.a=d},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(d){this.a=d},
jX:function jX(d,e){this.a=d
this.b=e},
lw:function lw(){}},M,G,H
J=c[1]
A=c[0]
D=c[2]
I=c[15]
F=c[11]
E=c[16]
K=c[26]
C=c[20]
L=c[17]
B=a.updateHolder(c[7],B)
M=c[25]
G=c[14]
H=c[19]
B.fX.prototype={
A(d){var x=null
return new A.J("h2",x,this.d,x,x,x,this.w,x)}}
B.h2.prototype={
A(d){var x=null
return new A.J("section",x,x,x,x,x,this.w,x)}}
B.ea.prototype={
A(d){var x,w=this,v=null,u=y.N,t=A.z(u,u)
t.q(0,w.at)
t.j(0,"type",w.c.c)
x=B.nD(v)
if(x!=null)t.j(0,"checked",x)
x=B.nD(v)
if(x!=null)t.j(0,"indeterminate",x)
u=A.z(u,y.g)
u.q(0,C.le().$1$2$onChange$onInput(v,w.x,w.$ti.c))
return new A.J("input",v,w.Q,v,t,u,v,v)}}
B.bn.prototype={
a7(){return new B.dr()}}
B.dr.prototype={
dl(d){var x
y.t.a(d)
x=D.c.S(this.d).toLowerCase()
if(x.length===0)return!0
return J.lz(d.a,new B.jV(x))||J.lz(d.b,new B.jW(x))},
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=A.a([],y.i)
for(x=$.ou(),w=x.length,v=g.gdk(),u=0;u<x.length;x.length===w||(0,A.C)(x),++u){t=x[u]
s=J.mK(t.b,v)
s=A.Z(s,s.$ti.h("j.E"))
e.push(new A.f(t.a,s))}x=y.H
r=A.Z(new A.a0(e,y.b.a(new B.jY()),x),x.h("j.E"))
q=D.a.cm(r,0,new B.jZ(),y.S)
e=y.N
x=y.V
w=C.T(A.a([new B.ea(M.L,new B.k_(g),"w:full px:4 py:3 br:lg c:snow bg:[#07090D] bw:1 bc:edge app:none caret:beam placeholder:c:[#6B7385] tr:all focus:ol:none focus:bc:brand focus:ring:4 ringc:[rgba(59,108,240,0.25)]",A.F(["placeholder","Search: bg, grid, ring, padding\u2026","aria-label","Search for a class or a CSS property"],e,e),f,y.v)],x),f,"fl:1",f)
e=A.F(["role","status"],e,e)
if(D.c.S(g.d).length===0)v=""+$.oT()+" rules"
else{v=q===1?"":"s"
v=""+q+" result"+v}e=A.a([C.T(A.a([w,F.o2(A.a([new A.t(v,f)],x),e,"fs:sm c:haze ws:nowrap")],x),f,"flex fd:col sm:fd:row sm:ai:center gap:3 mb:8",f)],x)
if(r.length===0)e.push(F.o2(A.a([new A.t('No rule matches "'+D.c.S(g.d)+'".',f)],x),f,"c:haze"))
else{w=A.a([],x)
for(v=r.length,t=y.t,s=y.s,u=0;u<r.length;r.length===v||(0,A.C)(r),++u){p=r[u]
o=p.a.a
n=A.a([new A.t(o[3],f)],x)
o="/docs/utilities/"+o[2]
if(D.c.v(o,"/"))o="/zaspr-kit"+o
o=A.a([new B.fX("fs:xl fw:bold c:snow",n,f),I.fS(A.a([new A.t("Detailed page",f)],x),f,"fs:sm fw:semibold c:beam td:underline tdt:1 tuo:4 tdc:[rgba(126,162,255,0.4)] tr:colors hover:c:snow hover:tdc:snow focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4",o)],x)
n=A.a([],x)
for(p=G.hN(p.b,0,t),m=J.X(p.a),l=p.b,p=new G.ax(m,l,A.l(p).h("ax<1>"));p.i();){k=p.c
k=k>=0?new A.f(l+k,m.gl()):A.b7(A.bQ())
j=k.b
i=A.a(["grid cols:1 md:cols:[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)] gap:2 md:gap:6 px:5 py:4"],s)
if(k.a>0)i.push("bwt:1 bc:edge")
k=D.a.C(i," ")
i=A.a([],x)
for(h=J.X(j.a);h.i();)i.push(new L.e9("ff:code fs:sm c:ident",A.a([new A.t(h.gl(),f)],x),f))
n.push(new H.b6(k,A.a([new C.c9(f,"flex wrap gap:2",f,i,f),new C.aY("ff:code fs:xs c:[#C9D1DE] lh:relaxed",f,A.a([new A.t(J.mJ(j.b,", "),f)],x),f),new C.aY("fs:sm c:haze lh:relaxed",f,A.a([new A.t(j.c,f)],x),f)],x),f))}w.push(new B.h2(A.a([new C.c9(f,"flex ai:baseline jc:between gap:4 mb:4",f,o,f),new H.cM("br:2xl bw:1 bc:edge bg:deep ov:hidden",f,n,f)],x),f))}e.push(C.T(w,f,"flex fd:col gap:10",f))}return C.T(e,f,f,f)}}
var z=a.updateTypes(["B(+classes,properties,values(h<b>,h<b>,b))","B(+(+lead,rules,slug,title(b,h<Y>,b,b),h<+classes,properties,values(h<b>,h<b>,b)>))","d(d,+(+lead,rules,slug,title(b,h<Y>,b,b),h<+classes,properties,values(h<b>,h<b>,b)>))","d(d,+lead,rules,slug,title(b,h<Y>,b,b))"])
B.jV.prototype={
$1(d){return D.c.B(A.e(d).toLowerCase(),this.a)},
$S:8}
B.jW.prototype={
$1(d){return D.c.B(A.e(d).toLowerCase(),this.a)},
$S:8}
B.jY.prototype={
$1(d){return J.lB(y.G.a(d).b)},
$S:z+1}
B.jZ.prototype={
$2(d,e){return A.ap(d)+J.aq(y.G.a(e).b)},
$S:z+2}
B.k_.prototype={
$1(d){var x=this.a
return x.Y(new B.jX(x,A.e(d)))},
$S:5}
B.jX.prototype={
$0(){return this.a.d=this.b},
$S:1}
B.lw.prototype={
$2(d,e){return A.ap(d)+J.aq(y.C.a(e).a[1])},
$S:z+3};(function installTearOffs(){var x=a._instance_1u
x(B.dr.prototype,"gdk","dl",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.x,[B.fX,B.h2,B.ea])
w(B.bn,C.V)
w(B.dr,C.Q)
x(A.ag,[B.jV,B.jW,B.jY,B.k_])
x(A.b9,[B.jZ,B.lw])
w(B.jX,A.aw)})()
A.ac(b.typeUniverse,JSON.parse('{"fX":{"x":[],"m":[]},"h2":{"x":[],"m":[]},"ea":{"x":[],"m":[]},"bn":{"V":[],"m":[]},"dr":{"Q":["bn"],"Q.T":"bn"}}'))
var y=(function rtii(){var x=A.p
return{V:x("n<m>"),i:x("n<+(+lead,rules,slug,title(b,h<Y>,b,b),h<+classes,properties,values(h<b>,h<b>,b)>)>"),s:x("n<b>"),G:x("+(+lead,rules,slug,title(b,h<Y>,b,b),h<+classes,properties,values(h<b>,h<b>,b)>)"),t:x("+classes,properties,values(h<b>,h<b>,b)"),C:x("+lead,rules,slug,title(b,h<Y>,b,b)"),N:x("b"),H:x("a0<+(+lead,rules,slug,title(b,h<Y>,b,b),h<+classes,properties,values(h<b>,h<b>,b)>)>"),b:x("B(+(+lead,rules,slug,title(b,h<Y>,b,b),h<+classes,properties,values(h<b>,h<b>,b)>))"),v:x("ea<b>"),S:x("d"),g:x("~(y)")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"tY","ou",()=>{var w,v,u,t,s,r,q,p=A.a([],y.i)
for(w=$.ly(),v=A.p("n<+classes,properties,values(h<b>,h<b>,b)>"),u=0;u<15;++u){t=w[u]
s=A.a([],v)
for(r=J.X(t.a[1]);r.i();){q=B.rW(r.gl())
if(q!=null)s.push(q)}p.push(new A.f(t,s))}return p})
x($,"uG","oT",()=>D.a.cm($.ly(),0,new B.lw(),y.S))})()};
(a=>{a["fjTMwXCku4wP9M+6SQJi432WOPg="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_26.part.js.map
