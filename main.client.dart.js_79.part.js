((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,I,D,K,L,F,M,G,N,H,O,P,Q,E,B={
wG(d){var x,w,v,u=A.N(A.D(d).target),t=A.D(A.D(b.G.document).querySelectorAll("details[data-jx-menu][open]"))
for(x=u!=null,w=0;w<A.az(t.length);++w){v=A.N(t.item(w))
if(v==null)v=A.D(v)
if(!x||!A.cj(v.contains(u)))v.open=!1}},
ha:function ha(d,e){this.a=d
this.b=e},
bH:function bH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ct:function ct(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
kf:function kf(d,e){this.a=d
this.b=e},
b2:function b2(d,e){this.c=d
this.a=e},
h0:function h0(){this.c=this.a=this.d=null},
jR:function jR(d){this.a=d},
jQ:function jQ(d){this.a=d},
jS:function jS(d){this.a=d},
jP:function jP(d){this.a=d}},C
A=c[0]
I=c[50]
D=c[46]
K=c[73]
L=c[49]
F=c[51]
M=c[48]
G=c[52]
N=c[53]
H=c[68]
O=c[47]
P=c[70]
Q=c[66]
E=c[44]
B=a.updateHolder(c[18],B)
C=c[65]
B.ha.prototype={
M(){return"JxMenuAlign."+this.b}}
B.bH.prototype={}
B.ct.prototype={
c3(){var x,w=A.N(A.D(b.G.document).getElementById(this.c))
if(w==null||!A.cj(w.open))return
w.open=!1
x=A.N(w.querySelector("summary"))
if(x!=null)x.focus()},
dP(d){A.D(d)
if(A.k(d.key)==="Escape"){d.preventDefault()
this.c3()}},
dU(d){A.D(d)
if($.t8)return
$.t8=!0
A.D(b.G.document).addEventListener("pointerdown",A.t_(B.yf()))},
l(d){var x,w,v,u,t,s=this,r=null,q=y.l,p=D.H(A.a(["group relative inline-block",null],q)),o=A.F(["keydown",s.gdO(),"toggle",s.gdT()],y.w,y.a),n=D.H(A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 inline-flex ai:center jc:center gap:2 fw:semibold br:lg bw:1 cur:pointer us:none tr:all dur:150 td:none disabled:o:50 disabled:cur:not-allowed","c:gray-900 bg:transparent bc:gray-300 hover:bg:gray-100 active:sc:95 dark:c:gray-100 dark:bc:gray-500 dark:hover:bg:gray-700","fs:sm px:4 py:2 mnh:[40px]","lst:none"],q)),m=y.F,l=A.a([G.Q(A.a([new A.h(s.d,r)],m),r,r,r,r),C.yJ],m)
q=D.H(A.a(["bw:1 bc:gray-100 dark:bc:gray-700 absolute z:20 top:full mt:2 flex fd:col mnw:[12rem] p:1 br:lg bg:white sh:lg lst:none m:0 group-open:anim:fade-in motion-reduce:anim:none dark:bg:gray-900","left:0"],q))
x=A.a([],m)
for(w=s.e,v=w.length,u=0;u<w.length;w.length===v||(0,A.G)(w),++u){t=w[u]
if(t.f)x.push(C.yv)
else x.push(new E.aM(r,r,A.a([s.dF(t)],m),r))}return new A.B("details",s.c,p,r,C.oU,o,A.a([new A.B("summary",r,n,r,r,r,l,r),E.pG(x,r,q)],m),r)},
dF(d){var x,w,v,u,t=null,s=A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 flex ai:center gap:2 w:full px:3 py:2 br:md bw:0 bg:transparent fs:sm ta:left td:none cur:pointer tr:colors hover:bg:gray-100 dark:hover:bg:gray-700 disabled:o:50 disabled:cur:not-allowed",C.mE.k(0,d.d?"danger":"normal")],y.l),r=d.e
if(r&&d.b!=null)s.push("o:50 cur:not-allowed pe:none")
x=D.H(s)
w=d.b
s=w!=null
if(s){v=!r
u=w}else{u=t
v=!1}if(v)return L.cG(A.a([new A.h(d.a,t)],y.F),t,x,u,t)
if(s)return new A.B("a",t,x,t,C.nE,t,A.a([new A.h(d.a,t)],y.F),t)
return I.cl(A.a([new A.h(d.a,t)],y.F),t,x,r,t,t,new B.kf(this,d.c),K.z)}}
B.b2.prototype={
Z(){return new B.h0()}}
B.h0.prototype={
l(d){var x,w=this,v=null,u=w.a.c,t=A.a([C.dK,C.dJ,new B.bH("Duplicate project",v,new B.jR(w),!1,!1,!1),C.dL,new B.bH("Delete project",v,new B.jS(w),!0,!1,!1)],y.v),s=w.d
s=s==null?"Choose an action.":"Chosen: "+s
x=y.F
return G.u(A.a([new B.ct(u,"Account",t,v),O.aO(A.a([new A.h(s,v)],x),v,"fs:sm c:gray-500",v)],x),v,"flex fd:col ai:start gap:3 mnh:[15rem]",v,v)}}
var z=a.updateTypes(["~(C)"])
B.kf.prototype={
$0(){var x=this.b
if(x!=null)x.$0()
this.a.c3()},
$S:1}
B.jR.prototype={
$0(){var x=this.a
return x.H(new B.jQ(x))},
$S:1}
B.jQ.prototype={
$0(){return this.a.d="Duplicate project"},
$S:1}
B.jS.prototype={
$0(){var x=this.a
return x.H(new B.jP(x))},
$S:1}
B.jP.prototype={
$0(){return this.a.d="Delete project"},
$S:1};(function installTearOffs(){var x=a._static_1,w=a._instance_1u
x(B,"yf","wG",0)
var v
w(v=B.ct.prototype,"gdO","dP",0)
w(v,"gdT","dU",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ha,A.aE)
x(B.bH,A.y)
x(B.ct,N.p)
w(A.aq,[B.kf,B.jR,B.jQ,B.jS,B.jP])
x(B.b2,F.L)
x(B.h0,F.I)})()
A.J(b.typeUniverse,JSON.parse('{"ct":{"p":[],"i":[]},"ha":{"ai":[]},"b2":{"L":[],"i":[]},"h0":{"I":["b2"],"I.T":"b2"}}'))
var y={p:A.j("c<b,b>"),F:A.j("m<i>"),v:A.j("m<bH>"),l:A.j("m<b?>"),w:A.j("b"),a:A.j("~(C)")};(function constants(){C.yN=new B.ha(0,"start")
C.dJ=new B.bH("Billing","#billing",null,!1,!0,!1)
C.dK=new B.bH("Profile","#profile",null,!1,!1,!1)
C.dL=new B.bH("",null,null,!1,!1,!0)
C.bf=new A.c(H.V,["separator"],y.p)
C.rm={normal:0,danger:1}
C.mE=new A.c(C.rm,["c:gray-900 dark:c:gray-100","c:red-700 dark:c:red-300"],y.p)
C.pW={role:0,"aria-disabled":1}
C.nE=new A.c(C.pW,["link","true"],y.p)
C.qT={"data-jx-menu":0}
C.oU=new A.c(C.qT,[""],y.p)
C.yv=new E.aM("h:px my:1 bg:gray-100 dark:bg:gray-700",C.bf,H.q,null)
C.yJ=new M.bT("0 0 20 20","w:4 h:4",Q.S,P.a6,null)})();(function staticFields(){$.t8=!1})()};
(a=>{a["LfoZ1L/nyaLXXa+GcT2F0rLuQA4="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_79.part.js.map
