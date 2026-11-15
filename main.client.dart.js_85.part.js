((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,H,D,I,K,F,L,M,N,G,O,P,Q,R,E,B={
xb(d){var x,w,v,u=A.I(A.w(d).target),t=A.w(A.w(b.G.document).querySelectorAll("details[data-jx-menu][open]"))
for(x=u!=null,w=0;w<A.am(t.length);++w){v=A.I(t.item(w))
if(v==null)v=A.w(v)
if(!x||!A.b0(v.contains(u)))v.open=!1}},
hj:function hj(d,e){this.a=d
this.b=e},
bJ:function bJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cy:function cy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
kr:function kr(d,e){this.a=d
this.b=e},
b7:function b7(d,e){this.c=d
this.a=e},
h9:function h9(){this.c=this.a=this.d=null},
k2:function k2(d){this.a=d},
k1:function k1(d){this.a=d},
k3:function k3(d){this.a=d},
k0:function k0(d){this.a=d}},C
A=c[0]
H=c[50]
D=c[44]
I=c[74]
K=c[46]
F=c[52]
L=c[49]
M=c[51]
N=c[54]
G=c[69]
O=c[53]
P=c[47]
Q=c[71]
R=c[67]
E=c[45]
B=a.updateHolder(c[19],B)
C=c[66]
B.hj.prototype={
N(){return"JxMenuAlign."+this.b}}
B.bJ.prototype={}
B.cy.prototype={
co(){var x,w=A.I(A.w(b.G.document).getElementById(this.c))
if(w==null||!A.b0(w.open))return
w.open=!1
x=A.I(w.querySelector("summary"))
if(x!=null)x.focus()},
dZ(d){A.w(d)
if(A.k(d.key)==="Escape"){d.preventDefault()
this.co()}},
e7(d){A.w(d)
if($.tv)return
$.tv=!0
A.w(b.G.document).addEventListener("pointerdown",A.nL(B.yM()))},
m(d){var x,w,v,u,t,s=this,r=null,q=y.l,p=D.J(A.a(["group relative inline-block",null],q)),o=A.B(["keydown",s.gdY(),"toggle",s.ge6()],y.w,y.a),n=D.J(A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 inline-flex ai:center jc:center gap:2 fw:semibold br:lg bw:1 cur:pointer us:none tr:all dur:150 td:none disabled:o:50 disabled:cur:not-allowed","c:gray-900 bg:transparent bc:gray-300 hover:bg:gray-100 active:sc:95 dark:c:gray-100 dark:bc:gray-500 dark:hover:bg:gray-700","fs:sm px:4 py:2 mnh:[40px]","lst:none"],q)),m=y.F,l=A.a([M.N(A.a([new A.f(s.d,r)],m),r,r,r,r),C.yO],m)
q=D.J(A.a(["bw:1 bc:gray-100 dark:bc:gray-700 absolute z:20 top:full mt:2 flex fd:col mnw:[12rem] p:1 br:lg bg:white sh:lg lst:none m:0 group-open:anim:fade-in motion-reduce:anim:none dark:bg:gray-900","left:0"],q))
x=A.a([],m)
for(w=s.e,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
if(t.f)x.push(C.yA)
else x.push(new E.aM(r,r,r,r,A.a([s.dP(t)],m),r))}return new A.F("details",s.c,p,r,C.oY,o,A.a([new A.F("summary",r,n,r,r,r,l,r),E.j0(x,r,q,r)],m),r)},
dP(d){var x,w,v,u,t=null,s=A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 flex ai:center gap:2 w:full px:3 py:2 br:md bw:0 bg:transparent fs:sm ta:left td:none cur:pointer tr:colors hover:bg:gray-100 dark:hover:bg:gray-700 disabled:o:50 disabled:cur:not-allowed",C.mI.k(0,d.d?"danger":"normal")],y.l),r=d.e
if(r&&d.b!=null)s.push("o:50 cur:not-allowed pe:none")
x=D.J(s)
w=d.b
s=w!=null
if(s){v=!r
u=w}else{u=t
v=!1}if(v)return K.dn(A.a([new A.f(d.a,t)],y.F),t,x,u,t)
if(s)return new A.F("a",t,x,t,C.nI,t,A.a([new A.f(d.a,t)],y.F),t)
return H.bz(A.a([new A.f(d.a,t)],y.F),t,x,r,t,t,new B.kr(this,d.c),I.z)}}
B.b7.prototype={
Z(){return new B.h9()}}
B.h9.prototype={
m(d){var x,w=this,v=null,u=w.a.c,t=A.a([C.dJ,C.dI,new B.bJ("Duplicate project",v,new B.k2(w),!1,!1,!1),C.dK,new B.bJ("Delete project",v,new B.k3(w),!0,!1,!1)],y.v),s=w.d
s=s==null?"Choose an action.":"Chosen: "+s
x=y.F
return O.u(A.a([new B.cy(u,"Account",t,v),P.aJ(A.a([new A.f(s,v)],x),v,"fs:sm c:gray-500",v)],x),v,"flex fd:col ai:start gap:3 mnh:[15rem]",v,v)}}
var z=a.updateTypes(["~(A)"])
B.kr.prototype={
$0(){var x=this.b
if(x!=null)x.$0()
this.a.co()},
$S:1}
B.k2.prototype={
$0(){var x=this.a
return x.G(new B.k1(x))},
$S:1}
B.k1.prototype={
$0(){return this.a.d="Duplicate project"},
$S:1}
B.k3.prototype={
$0(){var x=this.a
return x.G(new B.k0(x))},
$S:1}
B.k0.prototype={
$0(){return this.a.d="Delete project"},
$S:1};(function installTearOffs(){var x=a._static_1,w=a._instance_1u
x(B,"yM","xb",0)
var v
w(v=B.cy.prototype,"gdY","dZ",0)
w(v,"ge6","e7",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.hj,A.aG)
x(B.bJ,A.y)
x(B.cy,N.p)
w(A.ap,[B.kr,B.k2,B.k1,B.k3,B.k0])
x(B.b7,F.K)
x(B.h9,F.H)})()
A.L(b.typeUniverse,JSON.parse('{"cy":{"p":[],"i":[]},"hj":{"aj":[]},"b7":{"K":[],"i":[]},"h9":{"H":["b7"],"H.T":"b7"}}'))
var y={p:A.j("c<b,b>"),F:A.j("l<i>"),v:A.j("l<bJ>"),l:A.j("l<b?>"),w:A.j("b"),a:A.j("~(A)")};(function constants(){C.yS=new B.hj(0,"start")
C.dI=new B.bJ("Billing","#billing",null,!1,!0,!1)
C.dJ=new B.bJ("Profile","#profile",null,!1,!1,!1)
C.dK=new B.bJ("",null,null,!1,!1,!0)
C.bf=new A.c(G.V,["separator"],y.p)
C.rq={normal:0,danger:1}
C.mI=new A.c(C.rq,["c:gray-900 dark:c:gray-100","c:red-700 dark:c:red-300"],y.p)
C.q_={role:0,"aria-disabled":1}
C.nI=new A.c(C.q_,["link","true"],y.p)
C.qX={"data-jx-menu":0}
C.oY=new A.c(C.qX,[""],y.p)
C.yA=new E.aM(null,"h:px my:1 bg:gray-100 dark:bg:gray-700",C.bf,null,G.q,null)
C.yO=new L.bV("0 0 20 20","w:4 h:4",R.S,Q.a9,null)})();(function staticFields(){$.tv=!1})()};
(a=>{a["kla0JrcciIVKTsZHpCShtmIHtBk="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_85.part.js.map
