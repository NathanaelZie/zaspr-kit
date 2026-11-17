((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,F,O,P,Q,G,R,H,I,S,T,D,K,L,M,U,V,E,A={hC:function hC(d,e){this.a=d
this.b=e},ch:function ch(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.a=j},hD:function hD(d,e){this.c=d
this.a=e},bj:function bj(d){this.a=d},ia:function ia(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.c=_.a=null},nK:function nK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},nL:function nL(d,e){this.a=d
this.b=e},nJ:function nJ(d,e){this.a=d
this.b=e},nI:function nI(d){this.a=d},nM:function nM(d){this.a=d},nN:function nN(d){this.a=d},nO:function nO(d,e){this.a=d
this.b=e}},C,N,W
B=c[0]
F=c[2]
O=c[35]
P=c[33]
Q=c[59]
G=c[50]
R=c[83]
H=c[62]
I=c[58]
S=c[63]
T=c[78]
D=c[60]
K=c[56]
L=c[66]
M=c[38]
U=c[48]
V=c[65]
E=c[72]
A=a.updateHolder(c[24],A)
C=c[81]
N=c[67]
W=c[71]
A.hC.prototype={
P(){return"JxToastPosition."+this.b}}
A.ch.prototype={
n(d){var x,w,v,u,t,s,r=this,q=null,p=r.e,o=p===E.B||p===E.w,n=r.r
p=G.M(B.a(["c:gray-900 dark:c:gray-100 bw:1 bc:gray-100 dark:bc:gray-700 flex ai:start gap:3 p:4 br:lg bwl:4 bg:white sh:lg fs:sm pe:auto anim:slide-up motion-reduce:anim:none dark:bg:gray-900",C.om.k(0,p.b),r.x],y.l))
x=o?"alert":"status"
w=y.w
x=B.r(["role",x],w,w)
v=y.F
u=B.a([],v)
t=r.d
if(t!=null)u.push(K.ax(B.a([new B.e(t,q)],v),q,"fw:semibold",q))
u.push(K.ax(B.a([new B.e(r.c,q)],v),q,"lh:relaxed c:gray-700 dark:c:gray-300",q))
s=r.f
if(s!=null)u.push(D.t(B.a([s],v),q,"mt:2",q,q))
u=B.a([D.t(u,q,"flex fd:col gap:1 grow:1 mnw:0",q,q)],v)
if(n!=null){w=B.r(["aria-label","Dismiss"],w,w)
u.push(Q.b8(B.a([C.zf],v),w,"focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 inline-flex ai:center jc:center shrink:0 w:8 h:8 -mt:1 -mr:2 br:md bw:0 bg:transparent c:gray-500 cur:pointer tr:colors hover:bg:gray-100 hover:c:gray-900 dark:hover:bg:gray-700 dark:hover:c:gray-100",!1,q,q,n,R.z))}return D.t(u,x,p,q,q)}}
A.hD.prototype={
n(d){var x=G.M(B.a(["fixed z:50 flex fd:col gap:3 w:[min(24rem,calc(100%_-_2rem))] pe:none","bottom:4 right:4",null],y.l)),w=y.w
return O.zV(this.c,B.r(["aria-label","Notifications"],w,w),x)}}
A.bj.prototype={
X(){return new A.ia(B.a([],y.v),B.y(y.e,y.g))}}
A.ia.prototype={
cN(d,e){var x=this,w=x.f++
x.A(new A.nK(x,w,d,e))
x.e.i(0,w,U.rp(C.cn,new A.nL(x,w)))},
co(d){var x=this.e.W(0,d)
if(x!=null)x.a2()
this.A(new A.nJ(this,d))},
aq(){for(var x=this.e,x=new B.by(x,x.r,x.e,B.q(x).h("by<2>"));x.j();)x.d.a2()
this.aV()},
n(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=M.cG(C.ju,n,n,!1,!1,!1,new A.nM(o),L.j,V.m),l=M.cG(C.jW,n,n,!1,!1,!1,new A.nN(o),L.j,W.K),k=y.F,j=B.a([],k)
for(x=o.d,w=x.length,v=y.o,u=0;u<x.length;x.length===w||(0,B.L)(x),++u){t={}
s=x[u]
t.a=null
r=s.a
t.a=r
q=s.b
p=q===E.w?"Payment failed":"Saved"
j.push(new A.ch(s.c,p,q,n,new A.nO(t,o),n,new P.dm(r,v)))}return D.t(B.a([m,l,new A.hD(j,n)],k),n,"flex wrap gap:3",n,n)}}
var z=a.updateTypes(["D(+(d,ai,b))"])
A.nK.prototype={
$0(){var x=this
return F.a.t(x.a.d,new B.as(x.b,x.c,x.d))},
$S:1}
A.nL.prototype={
$0(){return this.a.co(this.b)},
$S:1}
A.nJ.prototype={
$0(){return F.a.da(this.a.d,new A.nI(this.b))},
$S:1}
A.nI.prototype={
$1(d){return y.A.a(d).a===this.a},
$S:z+0}
A.nM.prototype={
$0(){return this.a.cN(N.x,"Your changes are online.")},
$S:1}
A.nN.prototype={
$0(){return this.a.cN(E.w,"The card was declined.")},
$S:1}
A.nO.prototype={
$0(){return this.b.co(this.a.a)},
$S:1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.hC,B.aG)
w(S.p,[A.ch,A.hD])
x(A.bj,H.I)
x(A.ia,H.H)
w(B.ad,[A.nK,A.nL,A.nJ,A.nM,A.nN,A.nO])
x(A.nI,B.a8)})()
B.J(b.typeUniverse,JSON.parse('{"ch":{"p":[],"h":[]},"hC":{"ap":[]},"hD":{"p":[],"h":[]},"bj":{"I":[],"h":[]},"ia":{"H":["bj"],"H.T":"bj"}}'))
var y={p:B.j("c<b,b>"),F:B.j("l<h>"),v:B.j("l<+(d,ai,b)>"),l:B.j("l<b?>"),A:B.j("+(d,ai,b)"),w:B.j("b"),g:B.j("tU"),o:B.j("dm<d>"),e:B.j("d")};(function constants(){var x=a.makeConstList
C.cn=new B.bM(5e6)
C.zo=new A.hC(0,"bottomEnd")
C.yr=new B.e("Save",null)
C.ju=x([C.yr],y.F)
C.yz=new B.e("Fail a payment",null)
C.jW=x([C.yz],y.F)
C.om=new B.c(N.bA,["bc:gray-300","bc:blue-500","bc:green-500","bc:yellow-500","bc:red-500"],y.p)
C.pz={fill:0,stroke:1,"stroke-width":2,"stroke-linecap":3,"aria-hidden":4}
C.br=new B.c(C.pz,["none","currentColor","2","round","true"],y.p)
C.z8=new I.cV("M18 6 6 18M6 6l12 12",null,T.q,null)
C.b9=x([C.z8],y.F)
C.zf=new I.c1("0 0 24 24","w:4 h:4",C.br,C.b9,null)})()};
(a=>{a["jjEkGiFjXvtNW0wX6zWYA6WaXdk="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_89.part.js.map
