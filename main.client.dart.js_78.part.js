((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,H,E,K,L,F,M,I,G,N,O,P,D,B={hf:function hf(d,e){this.a=d
this.b=e},b5:function b5(d,e,f){this.a=d
this.b=e
this.c=f},c5:function c5(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},es:function es(){this.d=$
this.c=this.a=null},kz:function kz(d,e){this.a=d
this.b=e},kA:function kA(d,e){this.a=d
this.b=e},bN:function bN(d,e){this.c=d
this.a=e}},C
J=c[1]
A=c[0]
H=c[2]
E=c[27]
K=c[59]
L=c[50]
F=c[46]
M=c[73]
I=c[51]
G=c[52]
N=c[53]
O=c[68]
P=c[63]
D=c[43]
B=a.updateHolder(c[20],B)
C=c[80]
B.hf.prototype={
M(){return"JxTabsOrientation."+this.b}}
B.b5.prototype={}
B.c5.prototype={
Z(){return new B.es()}}
B.es.prototype={
gab(){var x,w=this.d
if(w===$){x=this.a.c.length
w=this.d=x===0?0:H.e.bL(0,0,x-1)}return w},
cp(d,e){var x=this,w=x.a.c
if(!(d>=0&&d<w.length))return A.v(w,d)
if(w[d].c)return
if(d!==x.gab()){x.H(new B.kz(x,d))
x.a.toString}if(e){w=A.N(A.D(b.G.document).getElementById(x.a.e+"-tab-"+d))
if(w!=null)w.focus()}},
e4(d){return this.cp(d,!1)},
aX(d,e){var x,w,v=this.a.c,u=v.length
for(x=d,w=0;w<u;++w){x=H.e.bi(x+e,u)
if(!(x<u))return A.v(v,x)
if(!v[x].c)return x}return d},
dS(d){var x,w,v,u=this
A.D(d)
x=A.k(d.key)
w=u.a.c.length
A:{if("ArrowRight"===x){v=u.aX(u.gab(),1)
break A}if("ArrowLeft"===x){v=u.aX(u.gab(),-1)
break A}if("Home"===x){v=u.aX(w-1,1)
break A}if("End"===x){v=u.aX(0,-1)
break A}v=null
break A}if(v==null)return
d.preventDefault()
u.cp(v,!0)},
l(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a.c,d=y.l,a0=F.H(A.a(["flex fd:col gap:4",null],d)),a1=y.w,a2=A.w(a1,a1)
a2.i(0,"role","tablist")
x=g.a.f
if(x!=null)a2.i(0,"aria-label",x)
x=y.F
w=A.a([],x)
for(v=y.m,u=D.cT(e,0,v),t=J.Z(u.a),s=u.b,u=new D.ae(t,s,A.r(u).h("ae<1>")),r=g.gdR(),q=y.a;u.j();){p={}
o=u.c
o=o>=0?new A.e(s+o,t.gm()):A.aP(A.aC())
p.a=null
n=p.a=o.a
m=o.b
o=g.a.e
l=""+n
k=F.H(A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 inline-flex ai:center gap:2 shrink:0 px:4 py:2 mnh:[40px] bw:0 bg:transparent fs:sm fw:medium ws:nowrap cur:pointer tr:colors disabled:o:50 disabled:cur:not-allowed","-mb:px bwb:2",n===g.gab()?"bc:blue-700 c:blue-700 dark:c:blue-300 dark:bc:blue-300":"bc:transparent c:gray-500 hover:c:gray-900 hover:bc:gray-300 dark:hover:c:gray-100"],d))
j=g.gab()
i=g.a.e
h=n===g.gab()?"0":"-1"
w.push(new L.dl(m.c,M.z,new B.kA(p,g),o+"-tab-"+l,k,A.F(["role","tab","aria-selected",""+(n===j),"aria-controls",i+"-panel-"+l,"tabindex",h],a1,a1),A.F(["keydown",r],a1,q),A.a([new A.h(m.a,f)],x),f))}a2=A.a([G.u(w,a2,"flex ai:end gap:1 bwb:1 bc:gray-100 ovx:auto dark:bc:gray-700",f,f)],x)
for(x=D.cT(e,0,v),w=J.Z(x.a),v=x.b,x=new D.ae(w,v,A.r(x).h("ae<1>"));x.j();){u=x.c
u=u>=0?new A.e(v+u,w.gm()):A.aP(A.aC())
n=u.a
t=g.a.e
s=""+n
r=A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 br:md fs:sm lh:relaxed"],d)
r=F.H(r)
q=A.w(a1,a1)
q.i(0,"role","tabpanel")
q.i(0,"aria-labelledby",g.a.e+"-tab-"+s)
q.i(0,"tabindex","0")
if(n!==g.gab())q.i(0,"hidden","")
a2.push(new G.aK(t+"-panel-"+s,r,f,q,u.b.b,f))}return G.u(a2,f,a0,f,f)}}
B.bN.prototype={
l(d){return new B.c5(A.a([C.eP,C.eQ,C.eN,C.eL],y.d),this.c,"Account settings",null)}}
var z=a.updateTypes(["~(C)"])
B.kz.prototype={
$0(){return this.a.d=this.b},
$S:1}
B.kA.prototype={
$0(){return this.b.e4(this.a.a)},
$S:1};(function installTearOffs(){var x=a._instance_1u
x(B.es.prototype,"gdR","dS",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.hf,A.aE)
x(B.b5,A.y)
x(B.c5,I.L)
x(B.es,I.I)
w(A.aq,[B.kz,B.kA])
x(B.bN,N.p)})()
A.J(b.typeUniverse,JSON.parse('{"c5":{"L":[],"i":[]},"hf":{"ai":[]},"es":{"I":["c5"],"I.T":"c5"},"bN":{"p":[],"i":[]}}'))
var y={F:A.j("m<i>"),d:A.j("m<b5>"),l:A.j("m<b?>"),m:A.j("b5"),w:A.j("b"),a:A.j("~(C)")};(function constants(){var x=a.makeConstList
C.eL=new B.b5("Audit log",O.q,!0)
C.xt=new A.h("Your plan renews on 1 December.",null)
C.kC=x([C.xt],y.F)
C.cF=new E.bi(C.kC,K.A,null,null)
C.kv=x([C.cF],y.F)
C.eN=new B.b5("Billing",C.kv,!1)
C.f0=new E.aU("tabs-demo-name","Display name",P.w,"Grace Hopper",null,null,null,!1,!1,null,null)
C.kn=x([C.f0],y.F)
C.eP=new B.b5("Profile",C.kn,!1)
C.eG=new E.bl("tabs-demo-email","Email notifications",!0,!1,null,null)
C.k8=x([C.eG],y.F)
C.eQ=new B.b5("Notifications",C.k8,!1)
C.yO=new B.hf(0,"horizontal")})()};
(a=>{a["R32R12dRAbkMe51D+yEnMdQEM48="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_78.part.js.map
