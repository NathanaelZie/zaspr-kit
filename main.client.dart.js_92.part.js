((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,H,D,I,K,F,L,M,N,G,O,P,Q,R,E,B={
yg(d){var x,w,v,u=A.G(A.w(d).target),t=A.w(A.w(b.G.document).querySelectorAll("details[data-jx-menu][open]"))
for(x=u!=null,w=0;w<A.am(t.length);++w){v=A.G(t.item(w))
if(v==null)v=A.w(v)
if(!x||!A.aL(v.contains(u)))v.open=!1}},
hu:function hu(d,e){this.a=d
this.b=e},
bQ:function bQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cI:function cI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
kD:function kD(d,e){this.a=d
this.b=e},
be:function be(d,e){this.c=d
this.a=e},
hj:function hj(){this.c=this.a=this.d=null},
kf:function kf(d){this.a=d},
ke:function ke(d){this.a=d},
kg:function kg(d){this.a=d},
kd:function kd(d){this.a=d}},C
A=c[0]
H=c[59]
D=c[50]
I=c[83]
K=c[54]
F=c[62]
L=c[58]
M=c[61]
N=c[63]
G=c[78]
O=c[60]
P=c[56]
Q=c[80]
R=c[76]
E=c[52]
B=a.updateHolder(c[21],B)
C=c[75]
B.hu.prototype={
P(){return"JxMenuAlign."+this.b}}
B.bQ.prototype={}
B.cI.prototype={
cA(){var x,w=A.G(A.w(b.G.document).getElementById(this.c))
if(w==null||!A.aL(w.open))return
w.open=!1
x=A.G(w.querySelector("summary"))
if(x!=null)x.focus()},
e8(d){A.w(d)
if(A.k(d.key)==="Escape"){d.preventDefault()
this.cA()}},
eh(d){A.w(d)
if($.ut)return
$.ut=!0
A.w(b.G.document).addEventListener("pointerdown",A.ov(B.zS()))},
n(d){var x,w,v,u,t,s=this,r=null,q=y.l,p=D.M(A.a(["group relative inline-block",null],q)),o=A.r(["keydown",s.ge7(),"toggle",s.geg()],y.w,y.a),n=D.M(A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 inline-flex ai:center jc:center gap:2 fw:semibold br:lg bw:1 cur:pointer us:none tr:all dur:150 td:none disabled:o:50 disabled:cur:not-allowed","c:gray-900 bg:transparent bc:gray-300 hover:bg:gray-100 active:sc:95 dark:c:gray-100 dark:bc:gray-500 dark:hover:bg:gray-700","fs:sm px:4 py:2 mnh:[40px]","lst:none"],q)),m=y.F,l=A.a([M.O(A.a([new A.e(s.d,r)],m),r,r,r,r),C.zk],m)
q=D.M(A.a(["bw:1 bc:gray-100 dark:bc:gray-700 absolute z:20 top:full mt:2 flex fd:col mnw:[12rem] p:1 br:lg bg:white sh:lg lst:none m:0 group-open:anim:fade-in motion-reduce:anim:none dark:bg:gray-900","left:0"],q))
x=A.a([],m)
for(w=s.e,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(t.f)x.push(C.z6)
else x.push(new E.aQ(r,r,r,r,A.a([s.dZ(t)],m),r))}return new A.E("details",s.c,p,r,C.pd,o,A.a([new A.E("summary",r,n,r,r,r,l,r),E.jd(x,r,q,r)],m),r)},
dZ(d){var x,w,v,u,t=null,s=A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 flex ai:center gap:2 w:full px:3 py:2 br:md bw:0 bg:transparent fs:sm ta:left td:none cur:pointer tr:colors hover:bg:gray-100 dark:hover:bg:gray-700 disabled:o:50 disabled:cur:not-allowed",C.mY.k(0,d.d?"danger":"normal")],y.l),r=d.e
if(r&&d.b!=null)s.push("o:50 cur:not-allowed pe:none")
x=D.M(s)
w=d.b
s=w!=null
if(s){v=!r
u=w}else{u=t
v=!1}if(v)return K.dA(A.a([new A.e(d.a,t)],y.F),t,x,u,t)
if(s)return new A.E("a",t,x,t,C.nZ,t,A.a([new A.e(d.a,t)],y.F),t)
return H.b8(A.a([new A.e(d.a,t)],y.F),t,x,r,t,t,new B.kD(this,d.c),I.z)}}
B.be.prototype={
X(){return new B.hj()}}
B.hj.prototype={
n(d){var x,w=this,v=null,u=w.a.c,t=A.a([C.dP,C.dO,new B.bQ("Duplicate project",v,new B.kf(w),!1,!1,!1),C.dQ,new B.bQ("Delete project",v,new B.kg(w),!0,!1,!1)],y.v),s=w.d
s=s==null?"Choose an action.":"Chosen: "+s
x=y.F
return O.t(A.a([new B.cI(u,"Account",t,v),P.ax(A.a([new A.e(s,v)],x),v,"fs:sm c:gray-500",v)],x),v,"flex fd:col ai:start gap:3 mnh:[15rem]",v,v)}}
var z=a.updateTypes(["~(C)"])
B.kD.prototype={
$0(){var x=this.b
if(x!=null)x.$0()
this.a.cA()},
$S:1}
B.kf.prototype={
$0(){var x=this.a
return x.A(new B.ke(x))},
$S:1}
B.ke.prototype={
$0(){return this.a.d="Duplicate project"},
$S:1}
B.kg.prototype={
$0(){var x=this.a
return x.A(new B.kd(x))},
$S:1}
B.kd.prototype={
$0(){return this.a.d="Delete project"},
$S:1};(function installTearOffs(){var x=a._static_1,w=a._instance_1u
x(B,"zS","yg",0)
var v
w(v=B.cI.prototype,"ge7","e8",0)
w(v,"geg","eh",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.hu,A.aG)
x(B.bQ,A.A)
x(B.cI,N.p)
w(A.ad,[B.kD,B.kf,B.ke,B.kg,B.kd])
x(B.be,F.I)
x(B.hj,F.H)})()
A.J(b.typeUniverse,JSON.parse('{"cI":{"p":[],"h":[]},"hu":{"ap":[]},"be":{"I":[],"h":[]},"hj":{"H":["be"],"H.T":"be"}}'))
var y={p:A.j("c<b,b>"),F:A.j("l<h>"),v:A.j("l<bQ>"),l:A.j("l<b?>"),w:A.j("b"),a:A.j("~(C)")};(function constants(){C.zn=new B.hu(0,"start")
C.dO=new B.bQ("Billing","#billing",null,!1,!0,!1)
C.dP=new B.bQ("Profile","#profile",null,!1,!1,!1)
C.dQ=new B.bQ("",null,null,!1,!1,!0)
C.bk=new A.c(G.W,["separator"],y.p)
C.rG={normal:0,danger:1}
C.mY=new A.c(C.rG,["c:gray-900 dark:c:gray-100","c:red-700 dark:c:red-300"],y.p)
C.qf={role:0,"aria-disabled":1}
C.nZ=new A.c(C.qf,["link","true"],y.p)
C.rc={"data-jx-menu":0}
C.pd=new A.c(C.rc,[""],y.p)
C.z6=new E.aQ(null,"h:px my:1 bg:gray-100 dark:bg:gray-700",C.bk,null,G.q,null)
C.zk=new L.c1("0 0 20 20","w:4 h:4",R.T,Q.ad,null)})();(function staticFields(){$.ut=!1})()};
(a=>{a["n+UQe2Bxh2Xo02jwyESR11afNgg="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_92.part.js.map
