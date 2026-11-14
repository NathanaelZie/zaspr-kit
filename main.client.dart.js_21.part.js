((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,E,F,D,A={jg:function jg(d){this.a=d},
rK(d,e){var x=new B.D($.C,e.h("D<0>")),w=new B.bz(x,e.h("bz<0>"))
d.then(B.aQ(new A.l_(w,e),1),B.aQ(new A.l0(w),1))
return x},
l_:function l_(d,e){this.a=d
this.b=e},
l0:function l0(d){this.a=d},
fQ:function fQ(d,e,f,g,h){var _=this
_.c=d
_.r=e
_.x=f
_.z=g
_.a=h},
fN:function fN(d,e,f){this.c=d
this.Q=e
this.a=f},
rq(d,e){var x,w,v,u,t,s=y.w
s=B.M(["fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","aria-hidden","true"],s,s)
x=y.F
w=B.a([],x)
for(v=C.iq.m(0,d),u=v.length,t=0;t<u;++t)w.push(new A.fN(v[t],B.a([],x),null))
return new A.fQ("0 0 24 24","shrink:0 "+e,s,w,null)},
oG(d){return new A.b3(d,null)},
b3:function b3(d,e){this.c=d
this.a=e},
cO:function cO(){var _=this
_.d=!1
_.c=_.a=_.e=null},
h0:function h0(d){this.a=d},
h1:function h1(d){this.a=d},
h_:function h_(d){this.a=d},
pA(d,e){var x=$.C
if(x===E.h)return B.lp(d,y.k.a(e))
return B.lp(d,y.k.a(x.bu(e)))}},C,G
B=c[0]
E=c[2]
F=c[16]
D=c[17]
A=a.updateHolder(c[8],A)
C=c[24]
G=c[14]
A.jg.prototype={
j(d){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.fQ.prototype={
F(d){var x=this,w=null,v=y.w
v=B.z(v,v)
v.t(0,x.x)
v.k(0,"viewBox",x.c)
return new B.R("svg",w,x.r,w,v,w,x.z,w)}}
A.fN.prototype={
F(d){var x=null,w=y.w
w=B.z(w,w)
w.k(0,"d",this.c)
return new B.R("path",x,x,x,w,x,this.Q,x)}}
A.b3.prototype={
af(){return new A.cO()}}
A.cO.prototype={
aJ(){var x=0,w=B.fC(y.v),v,u=2,t=[],s=this,r,q,p
var $async$aJ=B.fD(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.lz(A.rK(B.H(B.H(B.H(B.H(b.G.window).navigator).clipboard).writeText(s.a.c)),y.q),$async$aJ)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
x=1
break
x=6
break
case 3:x=2
break
case 6:q=s.e
if(q!=null)q.ab()
s.a1(new A.h0(s))
s.e=A.pA(C.aL,new A.h1(s))
case 1:return B.fA(v,w)
case 2:return B.fz(t.at(-1),w)}})
return B.fB($async$aJ,w)},
by(){var x=this.e
if(x!=null)x.ab()
this.cQ()},
F(d){var x,w,v,u=this,t=null,s=y.w,r=B.M(["aria-hidden","true"],s,s),q=y.F
r=F.lI(B.a([D.aS(B.a([new B.w("$ ",t)],q),r,"c:haze"),new B.w(u.a.c,t)],q),"mnw:0 ws:nowrap ovx:auto")
x=B.a(["flex ai:center jc:center w:10 h:10 br:md tr:all focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4"],y.x)
if(u.d)x.push("c:ident")
else x.push("c:haze hover:c:snow hover:bg:[rgba(255,255,255,0.08)]")
x=E.a.B(x," ")
w=u.d
v=w?"Command copied":"Copy the command"
s=B.M(["type","button","aria-label",v,"title",w?"Copied":"Copy"],s,s)
return D.W(B.a([r,G.lF(B.a([A.rq(u.d?"check":"copy","w:4 h:4")],q),s,x,u.gd6())],q),t,"flex ai:center jc:between gap:3 pl:5 pr:1 py:1 mnh:[48px] br:lg bg:[#07090D] bw:1 bc:edge ff:code fs:sm c:snow ta:left",t)}}
var z=a.updateTypes(["aj<~>()"])
A.l_.prototype={
$1(d){return this.a.ac(this.b.h("0/?").a(d))},
$S:6}
A.l0.prototype={
$1(d){if(d==null)return this.a.bw(new A.jg(d===undefined))
return this.a.bw(d)},
$S:6}
A.h0.prototype={
$0(){return this.a.d=!0},
$S:1}
A.h1.prototype={
$0(){var x=this.a
return x.a1(new A.h_(x))},
$S:1}
A.h_.prototype={
$0(){return this.a.d=!1},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(A.cO.prototype,"gd6","aJ",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.jg,B.u)
w(B.ai,[A.l_,A.l0])
w(D.A,[A.fQ,A.fN])
x(A.b3,D.Y)
x(A.cO,D.T)
w(B.aD,[A.h0,A.h1,A.h_])})()
B.ar(b.typeUniverse,JSON.parse('{"fQ":{"A":[],"p":[]},"fN":{"A":[],"p":[]},"b3":{"Y":[],"p":[]},"cO":{"T":["b3"],"T.T":"b3"}}'))
var y={F:B.o("m<p>"),x:B.o("m<b>"),w:B.o("b"),q:B.o("u?"),v:B.o("~"),k:B.o("~()")};(function constants(){var x=a.makeConstList
C.aL=new B.b5(2e6)
C.jf={terminal:0,code:1,zap:2,book:3,layers:4,copy:5,check:6,arrow:7}
C.dA=x(["M4 17l6-6-6-6","M12 19h8"],y.x)
C.cH=x(["M16 18l6-6-6-6","M8 6l-6 6 6 6"],y.x)
C.ea=x(["M13 2 3 14h9l-1 8 10-12h-9l1-8z"],y.x)
C.dU=x(["M4 19.5A2.5 2.5 0 0 1 6.5 17H20","M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"],y.x)
C.cK=x(["M12 2 2 7l10 5 10-5-10-5z","M2 17l10 5 10-5","M2 12l10 5 10-5"],y.x)
C.cQ=x(["M9 9h11v11H9z","M5 15H4V4h11v1"],y.x)
C.cI=x(["M20 6 9 17l-5-5"],y.x)
C.eQ=x(["M5 12h14","M12 5l7 7-7 7"],y.x)
C.iq=new B.c(C.jf,[C.dA,C.cH,C.ea,C.dU,C.cK,C.cQ,C.cI,C.eQ],B.o("c<b,h<b>>"))})()};
(a=>{a["nv85s/pZaqMzF8URZQLDUBRVf0w="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_21.part.js.map
