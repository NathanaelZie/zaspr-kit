((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,H,E,K,L,F,M,I,N,O,G,P,D,B={hz:function hz(d,e){this.a=d
this.b=e},bh:function bh(d,e,f){this.a=d
this.b=e
this.c=f},cf:function cf(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},eL:function eL(){this.d=$
this.c=this.a=null},kY:function kY(d,e){this.a=d
this.b=e},kZ:function kZ(d,e){this.a=d
this.b=e},bW:function bW(d,e){this.c=d
this.a=e}},C
J=c[1]
A=c[0]
H=c[2]
E=c[30]
K=c[69]
L=c[59]
F=c[50]
M=c[83]
I=c[62]
N=c[63]
O=c[78]
G=c[60]
P=c[73]
D=c[53]
B=a.updateHolder(c[22],B)
C=c[94]
B.hz.prototype={
P(){return"JxTabsOrientation."+this.b}}
B.bh.prototype={}
B.cf.prototype={
X(){return new B.eL()}}
B.eL.prototype={
gab(){var x,w=this.d
if(w===$){x=this.a.c.length
w=this.d=x===0?0:H.e.af(0,0,x-1)}return w},
cM(d,e){var x=this,w=x.a.c
if(!(d>=0&&d<w.length))return A.x(w,d)
if(w[d].c)return
if(d!==x.gab()){x.A(new B.kY(x,d))
x.a.toString}if(e){w=A.G(A.w(b.G.document).getElementById(x.a.e+"-tab-"+d))
if(w!=null)w.focus()}},
ew(d){return this.cM(d,!1)},
b3(d,e){var x,w,v=this.a.c,u=v.length
for(x=d,w=0;w<u;++w){x=H.e.ai(x+e,u)
if(!(x<u))return A.x(v,x)
if(!v[x].c)return x}return d},
ef(d){var x,w,v,u=this
A.w(d)
x=A.k(d.key)
w=u.a.c.length
A:{if("ArrowRight"===x){v=u.b3(u.gab(),1)
break A}if("ArrowLeft"===x){v=u.b3(u.gab(),-1)
break A}if("Home"===x){v=u.b3(w-1,1)
break A}if("End"===x){v=u.b3(0,-1)
break A}v=null
break A}if(v==null)return
d.preventDefault()
u.cM(v,!0)},
n(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a.c,d=y.l,a0=F.M(A.a(["flex fd:col gap:4",null],d)),a1=y.w,a2=A.y(a1,a1)
a2.i(0,"role","tablist")
x=g.a.f
if(x!=null)a2.i(0,"aria-label",x)
x=y.F
w=A.a([],x)
for(v=y.m,u=D.bp(e,0,v),t=J.a_(u.a),s=u.b,u=new D.a1(t,s,A.q(u).h("a1<1>")),r=g.gee(),q=y.a;u.j();){p={}
o=u.c
o=o>=0?new A.f(s+o,t.gl()):A.an(A.aq())
p.a=null
n=p.a=o.a
m=o.b
o=g.a.e
l=""+n
k=F.M(A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 inline-flex ai:center gap:2 shrink:0 px:4 py:2 mnh:[40px] bw:0 bg:transparent fs:sm fw:medium ws:nowrap cur:pointer tr:colors disabled:o:50 disabled:cur:not-allowed","-mb:px bwb:2",n===g.gab()?"bc:blue-700 c:blue-700 dark:c:blue-300 dark:bc:blue-300":"bc:transparent c:gray-500 hover:c:gray-900 hover:bc:gray-300 dark:hover:c:gray-100"],d))
j=g.gab()
i=g.a.e
h=n===g.gab()?"0":"-1"
w.push(new L.cA(m.c,M.z,new B.kZ(p,g),o+"-tab-"+l,k,A.r(["role","tab","aria-selected",""+(n===j),"aria-controls",i+"-panel-"+l,"tabindex",h],a1,a1),A.r(["keydown",r],a1,q),A.a([new A.e(m.a,f)],x),f))}a2=A.a([G.t(w,a2,"flex ai:end gap:1 bwb:1 bc:gray-100 ovx:auto dark:bc:gray-700",f,f)],x)
for(x=D.bp(e,0,v),w=J.a_(x.a),v=x.b,x=new D.a1(w,v,A.q(x).h("a1<1>"));x.j();){u=x.c
u=u>=0?new A.f(v+u,w.gl()):A.an(A.aq())
n=u.a
t=g.a.e
s=""+n
r=A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 br:md fs:sm lh:relaxed"],d)
r=F.M(r)
q=A.y(a1,a1)
q.i(0,"role","tabpanel")
q.i(0,"aria-labelledby",g.a.e+"-tab-"+s)
q.i(0,"tabindex","0")
if(n!==g.gab())q.i(0,"hidden","")
a2.push(new G.aV(t+"-panel-"+s,r,f,q,u.b.b,f))}return G.t(a2,f,a0,f,f)}}
B.bW.prototype={
n(d){return new B.cf(A.a([C.eP,C.eV,C.eT,C.eR],y.d),this.c,"Account settings",null)}}
var z=a.updateTypes(["~(C)"])
B.kY.prototype={
$0(){return this.a.d=this.b},
$S:1}
B.kZ.prototype={
$0(){return this.b.ew(this.a.a)},
$S:1};(function installTearOffs(){var x=a._instance_1u
x(B.eL.prototype,"gee","ef",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.hz,A.aG)
x(B.bh,A.A)
x(B.cf,I.I)
x(B.eL,I.H)
w(A.ad,[B.kY,B.kZ])
x(B.bW,N.p)})()
A.J(b.typeUniverse,JSON.parse('{"cf":{"I":[],"h":[]},"hz":{"ap":[]},"eL":{"H":["cf"],"H.T":"cf"},"bW":{"p":[],"h":[]}}'))
var y={F:A.j("l<h>"),d:A.j("l<bh>"),l:A.j("l<b?>"),m:A.j("bh"),w:A.j("b"),a:A.j("~(C)")};(function constants(){var x=a.makeConstList
C.f2=new E.b1("tabs-demo-name","Display name",P.t,"Grace Hopper",null,null,null,!1,!1,null,null)
C.lk=x([C.f2],y.F)
C.eP=new B.bh("Profile",C.lk,!1)
C.eR=new B.bh("Audit log",O.q,!0)
C.y4=new A.e("Your plan renews on 1 December.",null)
C.kS=x([C.y4],y.F)
C.cJ=new E.bs(C.kS,K.A,null,null)
C.kJ=x([C.cJ],y.F)
C.eT=new B.bh("Billing",C.kJ,!1)
C.eL=new E.bw("tabs-demo-email","Email notifications",!0,!1,null,null)
C.kl=x([C.eL],y.F)
C.eV=new B.bh("Notifications",C.kl,!1)
C.zo=new B.hz(0,"horizontal")})()};
(a=>{a["IE39VyuL5Z/IsAlWCL7MertUcWY="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_91.part.js.map
