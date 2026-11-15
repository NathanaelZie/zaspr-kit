((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,H,E,K,L,F,M,I,N,O,G,P,D,B={ho:function ho(d,e){this.a=d
this.b=e},ba:function ba(d,e,f){this.a=d
this.b=e
this.c=f},c8:function c8(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},ey:function ey(){this.d=$
this.c=this.a=null},kL:function kL(d,e){this.a=d
this.b=e},kM:function kM(d,e){this.a=d
this.b=e},bP:function bP(d,e){this.c=d
this.a=e}},C
J=c[1]
A=c[0]
H=c[2]
E=c[27]
K=c[60]
L=c[50]
F=c[44]
M=c[74]
I=c[52]
N=c[54]
O=c[69]
G=c[53]
P=c[64]
D=c[42]
B=a.updateHolder(c[21],B)
C=c[82]
B.ho.prototype={
N(){return"JxTabsOrientation."+this.b}}
B.ba.prototype={}
B.c8.prototype={
Z(){return new B.ey()}}
B.ey.prototype={
gab(){var x,w=this.d
if(w===$){x=this.a.c.length
w=this.d=x===0?0:H.e.aC(0,0,x-1)}return w},
cz(d,e){var x=this,w=x.a.c
if(!(d>=0&&d<w.length))return A.v(w,d)
if(w[d].c)return
if(d!==x.gab()){x.G(new B.kL(x,d))
x.a.toString}if(e){w=A.I(A.w(b.G.document).getElementById(x.a.e+"-tab-"+d))
if(w!=null)w.focus()}},
em(d){return this.cz(d,!1)},
b0(d,e){var x,w,v=this.a.c,u=v.length
for(x=d,w=0;w<u;++w){x=H.e.ag(x+e,u)
if(!(x<u))return A.v(v,x)
if(!v[x].c)return x}return d},
e5(d){var x,w,v,u=this
A.w(d)
x=A.k(d.key)
w=u.a.c.length
A:{if("ArrowRight"===x){v=u.b0(u.gab(),1)
break A}if("ArrowLeft"===x){v=u.b0(u.gab(),-1)
break A}if("Home"===x){v=u.b0(w-1,1)
break A}if("End"===x){v=u.b0(0,-1)
break A}v=null
break A}if(v==null)return
d.preventDefault()
u.cz(v,!0)},
m(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a.c,d=y.l,a0=F.J(A.a(["flex fd:col gap:4",null],d)),a1=y.w,a2=A.x(a1,a1)
a2.i(0,"role","tablist")
x=g.a.f
if(x!=null)a2.i(0,"aria-label",x)
x=y.F
w=A.a([],x)
for(v=y.m,u=D.cu(e,0,v),t=J.Z(u.a),s=u.b,u=new D.aa(t,s,A.r(u).h("aa<1>")),r=g.ge4(),q=y.a;u.j();){p={}
o=u.c
o=o>=0?new A.e(s+o,t.gl()):A.aw(A.ay())
p.a=null
n=p.a=o.a
m=o.b
o=g.a.e
l=""+n
k=F.J(A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 inline-flex ai:center gap:2 shrink:0 px:4 py:2 mnh:[40px] bw:0 bg:transparent fs:sm fw:medium ws:nowrap cur:pointer tr:colors disabled:o:50 disabled:cur:not-allowed","-mb:px bwb:2",n===g.gab()?"bc:blue-700 c:blue-700 dark:c:blue-300 dark:bc:blue-300":"bc:transparent c:gray-500 hover:c:gray-900 hover:bc:gray-300 dark:hover:c:gray-100"],d))
j=g.gab()
i=g.a.e
h=n===g.gab()?"0":"-1"
w.push(new L.dp(m.c,M.z,new B.kM(p,g),o+"-tab-"+l,k,A.B(["role","tab","aria-selected",""+(n===j),"aria-controls",i+"-panel-"+l,"tabindex",h],a1,a1),A.B(["keydown",r],a1,q),A.a([new A.f(m.a,f)],x),f))}a2=A.a([G.u(w,a2,"flex ai:end gap:1 bwb:1 bc:gray-100 ovx:auto dark:bc:gray-700",f,f)],x)
for(x=D.cu(e,0,v),w=J.Z(x.a),v=x.b,x=new D.aa(w,v,A.r(x).h("aa<1>"));x.j();){u=x.c
u=u>=0?new A.e(v+u,w.gl()):A.aw(A.ay())
n=u.a
t=g.a.e
s=""+n
r=A.a(["focus-visible:ol:2 focus-visible:olc:blue-500 focus-visible:olo:2 br:md fs:sm lh:relaxed"],d)
r=F.J(r)
q=A.x(a1,a1)
q.i(0,"role","tabpanel")
q.i(0,"aria-labelledby",g.a.e+"-tab-"+s)
q.i(0,"tabindex","0")
if(n!==g.gab())q.i(0,"hidden","")
a2.push(new G.aP(t+"-panel-"+s,r,f,q,u.b.b,f))}return G.u(a2,f,a0,f,f)}}
B.bP.prototype={
m(d){return new B.c8(A.a([C.eJ,C.eP,C.eN,C.eL],y.d),this.c,"Account settings",null)}}
var z=a.updateTypes(["~(A)"])
B.kL.prototype={
$0(){return this.a.d=this.b},
$S:1}
B.kM.prototype={
$0(){return this.b.em(this.a.a)},
$S:1};(function installTearOffs(){var x=a._instance_1u
x(B.ey.prototype,"ge4","e5",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ho,A.aG)
x(B.ba,A.y)
x(B.c8,I.K)
x(B.ey,I.H)
w(A.ap,[B.kL,B.kM])
x(B.bP,N.p)})()
A.L(b.typeUniverse,JSON.parse('{"c8":{"K":[],"i":[]},"ho":{"aj":[]},"ey":{"H":["c8"],"H.T":"c8"},"bP":{"p":[],"i":[]}}'))
var y={F:A.j("l<i>"),d:A.j("l<ba>"),l:A.j("l<b?>"),m:A.j("ba"),w:A.j("b"),a:A.j("~(A)")};(function constants(){var x=a.makeConstList
C.eX=new E.aW("tabs-demo-name","Display name",P.v,"Grace Hopper",null,null,null,!1,!1,null,null)
C.l3=x([C.eX],y.F)
C.eJ=new B.ba("Profile",C.l3,!1)
C.eL=new B.ba("Audit log",O.q,!0)
C.xy=new A.f("Your plan renews on 1 December.",null)
C.kE=x([C.xy],y.F)
C.cE=new E.bl(C.kE,K.A,null,null)
C.kx=x([C.cE],y.F)
C.eN=new B.ba("Billing",C.kx,!1)
C.eF=new E.bo("tabs-demo-email","Email notifications",!0,!1,null,null)
C.kb=x([C.eF],y.F)
C.eP=new B.ba("Notifications",C.kb,!1)
C.yT=new B.ho(0,"horizontal")})()};
(a=>{a["5HKyh7joN3BJx8kEJeae7wCuSJQ="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_84.part.js.map
