((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,E,F,A={hI:function hI(d){this.a=d},
pW(d,e){var x=new B.B($.A,e.h("B<0>")),w=new B.bt(x,e.h("bt<0>"))
d.then(B.aL(new A.jq(w,e),1),B.aL(new A.jr(w),1))
return x},
jq:function jq(d,e){this.a=d
this.b=e},
jr:function jr(d){this.a=d},
fI:function fI(d,e,f,g,h){var _=this
_.c=d
_.r=e
_.x=f
_.z=g
_.a=h},
fF:function fF(d,e,f){this.c=d
this.Q=e
this.a=f},
pD(d,e){var x,w,v,u,t,s=y.w
s=B.K(["fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","aria-hidden","true"],s,s)
x=y.F
w=B.c([],x)
for(v=C.i4.n(0,d),u=v.length,t=0;t<u;++t)w.push(new A.fF(v[t],B.c([],x),null))
return new A.fI("0 0 24 24","shrink:0 "+e,s,w,null)},
mX(d){return new A.b_(d,null)},
b_:function b_(d,e){this.c=d
this.a=e},
cH:function cH(){var _=this
_.d=!1
_.c=_.a=_.e=null},
fT:function fT(d){this.a=d},
fU:function fU(d){this.a=d},
fS:function fS(d){this.a=d},
nO(d,e){var x=$.A
if(x===E.h)return B.jR(d,y.k.a(e))
return B.jR(d,y.k.a(x.bp(e)))}},C,D,G
B=c[0]
E=c[2]
F=c[13]
A=a.updateHolder(c[7],A)
C=c[20]
D=c[15]
G=c[14]
A.hI.prototype={
j(d){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.fI.prototype={
D(d){var x=this,w=null,v=y.w
v=B.w(v,v)
v.t(0,x.x)
v.k(0,"viewBox",x.c)
return new B.P("svg",w,x.r,w,v,w,x.z,w)}}
A.fF.prototype={
D(d){var x=null,w=y.w
w=B.w(w,w)
w.k(0,"d",this.c)
return new B.P("path",x,x,x,w,x,this.Q,x)}}
A.b_.prototype={
an(){return new A.cH()}}
A.cH.prototype={
aI(){var x=0,w=B.fs(y.v),v,u=2,t=[],s=this,r,q,p
var $async$aI=B.ft(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k0(A.pW(B.F(B.F(B.F(B.F(b.G.window).navigator).clipboard).writeText(s.a.c)),y.q),$async$aI)
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
s.a3(new A.fT(s))
s.e=A.nO(C.aC,new A.fU(s))
case 1:return B.fq(v,w)
case 2:return B.fp(t.at(-1),w)}})
return B.fr($async$aI,w)},
bt(){var x=this.e
if(x!=null)x.ab()
this.cI()},
D(d){var x,w,v,u=this,t=null,s=y.w,r=B.K(["aria-hidden","true"],s,s),q=y.F
r=F.lN(B.c([D.bl(B.c([new B.z("$ ",t)],q),r,"c:haze"),new B.z(u.a.c,t)],q),"mnw:0 ws:nowrap ovx:auto")
x=B.c(["flex ai:center jc:center w:10 h:10 br:md tr:all focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4"],y.x)
if(u.d)x.push("c:ident")
else x.push("c:haze hover:c:snow hover:bg:[rgba(255,255,255,0.08)]")
x=E.a.F(x," ")
w=u.d
v=w?"Commande copi\xe9e":"Copier la commande"
s=B.K(["type","button","aria-label",v,"title",w?"Copi\xe9":"Copier"],s,s)
return D.a7(B.c([r,G.k6(B.c([A.pD(u.d?"check":"copy","w:4 h:4")],q),s,x,u.gcV())],q),t,"flex ai:center jc:between gap:3 pl:5 pr:1 py:1 mnh:[48px] br:lg bg:[#07090D] bw:1 bc:edge ff:code fs:sm c:snow ta:left",t)}}
var z=a.updateTypes(["af<~>()"])
A.jq.prototype={
$1(d){return this.a.ac(this.b.h("0/?").a(d))},
$S:5}
A.jr.prototype={
$1(d){if(d==null)return this.a.br(new A.hI(d===undefined))
return this.a.br(d)},
$S:5}
A.fT.prototype={
$0(){return this.a.d=!0},
$S:0}
A.fU.prototype={
$0(){var x=this.a
return x.a3(new A.fS(x))},
$S:0}
A.fS.prototype={
$0(){return this.a.d=!1},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(A.cH.prototype,"gcV","aI",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.hI,B.q)
w(B.aq,[A.jq,A.jr])
w(D.y,[A.fI,A.fF])
x(A.b_,D.a3)
x(A.cH,D.X)
w(B.aP,[A.fT,A.fU,A.fS])})()
B.aw(b.typeUniverse,JSON.parse('{"fI":{"y":[],"n":[]},"fF":{"y":[],"n":[]},"b_":{"a3":[],"n":[]},"cH":{"X":["b_"],"X.T":"b_"}}'))
var y={F:B.t("l<n>"),x:B.t("l<a>"),w:B.t("a"),q:B.t("q?"),v:B.t("~"),k:B.t("~()")};(function constants(){var x=a.makeConstList
C.aC=new B.b1(2e6)
C.iX={terminal:0,code:1,zap:2,book:3,layers:4,copy:5,check:6,arrow:7}
C.dq=x(["M4 17l6-6-6-6","M12 19h8"],y.x)
C.cy=x(["M16 18l6-6-6-6","M8 6l-6 6 6 6"],y.x)
C.e_=x(["M13 2 3 14h9l-1 8 10-12h-9l1-8z"],y.x)
C.dK=x(["M4 19.5A2.5 2.5 0 0 1 6.5 17H20","M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"],y.x)
C.cB=x(["M12 2 2 7l10 5 10-5-10-5z","M2 17l10 5 10-5","M2 12l10 5 10-5"],y.x)
C.cH=x(["M9 9h11v11H9z","M5 15H4V4h11v1"],y.x)
C.cz=x(["M20 6 9 17l-5-5"],y.x)
C.eE=x(["M5 12h14","M12 5l7 7-7 7"],y.x)
C.i4=new B.b(C.iX,[C.dq,C.cy,C.e_,C.dK,C.cB,C.cH,C.cz,C.eE],B.t("b<a,f<a>>"))})()};
(a=>{a["sccgOZ8ovmyq7y8ulOJHfManquw="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_16.part.js.map
