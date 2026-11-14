((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,F,E,G,C={
n6(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=D.c.S(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
q0(){return Date.now()},
q2(){var w,v
if($.jT!==0)return
$.jT=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.jT=1e6
$.jU=new C.jS(v)},
jS:function jS(d){this.a=d},
k4:function k4(){this.b=this.a=0},
o6(d,e){return new C.h1(e,d,null)},
o0(d,e,f){return new C.fZ(f,e,d,null)},
oc(d,e,f,g,h,i,j){return new C.h6(i,j,h,f,e,d,g)},
h1:function h1(d,e,f){this.d=d
this.w=e
this.a=f},
fZ:function fZ(d,e,f,g){var _=this
_.c=d
_.e=e
_.x=f
_.a=g},
h6:function h6(d,e,f,g,h,i,j){var _=this
_.Q=d
_.as=e
_.ax=f
_.ch=g
_.CW=h
_.dx=i
_.a=j},
k3:function k3(d,e){this.a=d
this.b=e},
pC(d,e){var w,v,u=d.length,t=e.length
if(u!==t)return!1
for(w=0;w<u;++w){v=d[w]
if(!(w<t))return B.o(e,w)
if(v!==e[w])return!1}return!0},
b0:function b0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hS:function hS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hT:function hT(){},
mY(){var w,v,u,t,s,r=null,q=x.N,p=C.pP(B.F(["colors",$.oj(),"spacing",$.ol(),"breakpoints",A.iB,"font-family",A.fp,"font-size",A.fl,"font-weight",A.h_,"line-height",A.jw,"border-radius",A.fu,"border-width",E.v,"opacity",$.ok(),"shadow",A.iG],q,x.f))
p=new C.eM("default",p)
w=x.O
q=new C.i7(B.z(q,w),B.a([],x.D))
v=$.mz()
w=B.Z(v,w)
D.a.q(w,E.N)
D.a.q(w,E.Y)
D.a.q(w,E.V)
D.a.q(w,E.a_)
D.a.q(w,E.P)
D.a.q(w,E.a2)
D.a.q(w,$.mE())
D.a.q(w,E.a0)
D.a.q(w,$.mD())
D.a.q(w,$.mC())
D.a.q(w,$.mA())
D.a.q(w,E.Z)
D.a.q(w,E.W)
D.a.q(w,E.T)
D.a.q(w,E.a3)
D.a.q(w,$.mB())
D.a.q(w,E.O)
D.a.q(w,E.S)
D.a.q(w,E.X)
D.a.q(w,E.a1)
D.a.q(w,$.mF())
D.a.q(w,A.cU)
q.eu(w)
u=new C.hW(p,q)
t=u.b
s=C.pQ(t,r)
q=s.ged()
return new C.hV(u,new C.eJ(q),new C.eH(new C.hZ(!1)),s)},
hV:function hV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hX:function hX(){},
hW:function hW(d,e){this.b=d
this.c=e},
pQ(d,e){var w,v,u,t,s=d.c.bH("breakpoints").gL(),r=B.Z(s,B.l(s).h("j.E"))
s=B.a([],x.P)
for(w=0;w<r.length;++w){v=r[w]
s.push(new B.dT(w,v.a,C.pS(v.b)))}D.a.a2(s,new C.jC())
v=B.a([],x.s)
for(u=s.length,t=0;t<s.length;s.length===u||(0,B.C)(s),++t)v.push(s[t].b)
return new C.jB(d,A.fG,A.iD,v,A.hB,e)},
pS(d){var w,v,u,t=B.O("^([0-9.]+)(px|r?em)?$").aU(D.c.S(d))
if(t==null)return 1/0
w=t.b
if(1>=w.length)return B.o(w,1)
v=w[1]
v.toString
u=C.n6(v)
if(u==null)u=1/0
if(2>=w.length)return B.o(w,2)
w=w[2]
return w==null||w==="px"?u:u*16},
pR(d){return D.c.v(d,"@media ")?D.c.S(D.c.J(d,7)):D.c.S(d)},
jB:function jB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jC:function jC(){},
eH:function eH(d){this.a=d},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
hZ:function hZ(d){this.a=d},
an:function an(d,e){this.a=d
this.b=e},
i4:function i4(d,e){this.a=d
this.c=e},
co:function co(d,e){this.a=d
this.b=e},
pJ(d){var w,v,u,t,s,r=B.a([],x.s)
for(w=d.length,v=0,u=0,t=0;t<w;++t){s=d.charCodeAt(t)
if(s===91)++v
else if(s===93){--v
if(v<0)throw B.i(A.aN)}else if(s===58&&v===0){D.a.n(r,D.c.M(d,u,t))
u=t+1}}if(v!==0)throw B.i(A.aO)
D.a.n(r,D.c.J(d,u))
return r},
pI(d){var w,v,u
if(!D.c.v(d,"[")){w=$.oo()
if(w.b.test(d))return null
return new B.f(A.r,D.c.B(d,"!")?y.b:'invalid value "'+C.mZ(d)+'" (use brackets for a free-form value)')}if(!D.c.aR(d,"]"))return A.mH
v=C.mW(D.c.M(d,1,d.length-1))
if(D.c.S(v).length===0)return A.mJ
u=F.mX(v)
if(u!=null)return new B.f(A.bc,"value rejected: "+u)
return null},
mZ(d){return d.length<=80?d:D.c.M(d,0,77)+"\u2026"},
eJ:function eJ(d){this.a=d},
i6:function i6(d){this.a=d},
i5:function i5(){},
i7:function i7(d,e){this.a=d
this.b=e},
i8:function i8(d){this.a=d},
eM:function eM(d,e){this.a=d
this.c=e},
pO(){return new C.jy(B.z(x.N,x.A))},
pP(d){var w,v,u,t,s,r=C.pO()
for(w=new B.aP(d,B.l(d).h("aP<1,2>")).gt(0);w.i();){v=w.d
for(u=v.b.gL(),u=u.gt(u),t=v.a;u.i();){s=u.gl()
r.cI(new C.bB(t,s.a,s.b))}}return r},
jy:function jy(d){this.a=d},
jz:function jz(){},
bB:function bB(d,e,f){this.a=d
this.b=e
this.c=f},
mW(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=0,t="";u<w;++u){s=d.charCodeAt(u)
if(s===92){r=u+1
r=r<w&&d.charCodeAt(r)===95}else r=!1
if(r){t+=B.lP(95);++u
continue}if(v===0){r=u+4
r=r<=w&&D.c.M(d,u,r).toLowerCase()==="url("}else r=!1
if(r){t+=D.c.M(d,u,u+4)
u+=3
v=1
continue}if(v>0){if(s===40)++v
if(s===41)--v
t+=B.lP(s)
continue}t+=B.lP(s===95?32:s)}return t.charCodeAt(0)==0?t:t},
pE(){var w,v,u,t,s,r=x.N,q=B.F(["transparent","transparent","current","currentColor","black","#000000","white","#ffffff"],r,r)
for(r=A.hs.gL(),w=r.$ti,r=new B.aj(r.a(),w.h("aj<1>")),w=w.c;r.i();){v=r.b
if(v==null)v=w.a(v)
u=v.a
v=v.b
t=J.bI(v)
q.j(0,u,t.m(v,2))
for(u+="-",s=0;s<5;++s)q.j(0,u+A.dk[s],t.m(v,s))}return q}},A
J=c[1]
B=c[0]
D=c[2]
F=c[16]
E=c[26]
G=c[20]
C=a.updateHolder(c[12],C)
A=c[24]
C.k4.prototype={
ge3(){var w,v=this.b
if(v==null)v=$.jU.$0()
w=v-this.a
if($.mr()===1e6)return w
return w*1000}}
C.h1.prototype={
A(d){var w=null
return new B.J("pre",w,this.d,w,w,w,this.w,w)}}
C.fZ.prototype={
A(d){var w,v=null,u=x.N
u=B.z(u,u)
w=this.c
if(w!=null)u.j(0,"for",w)
return new B.J("label",v,this.e,v,u,v,this.x,v)}}
C.h6.prototype={
A(d){var w=this,v=x.N,u=B.z(v,v),t=D.f.k(w.Q)
u.j(0,"rows",t)
u.j(0,"spellcheck","false")
t=B.z(v,x.v)
t.q(0,G.le().$1$2$onChange$onInput(null,w.ax,v))
return new B.J("textarea",w.ch,w.CW,null,u,t,w.dx,null)}}
C.k3.prototype={
a6(){return"SpellCheck."+this.b}}
C.b0.prototype={
gaV(){var w=this.c
return w!=null&&w.length!==0},
gau(){var w=this.c
return w!=null&&w.length!==0&&w.length>2&&D.c.v(w,"[")&&D.c.aR(w,"]")},
gdQ(){if(!this.gau())return null
var w=this.c
return C.mW(D.c.M(w,1,w.length-1))},
K(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.b0&&B.ad(v)===B.ad(e)&&v.a===e.a&&v.b===e.b&&v.c==e.c&&v.e===e.e&&v.f===e.f&&C.pC(v.d,e.d)
else w=!0
return w},
gE(d){var w=this
return B.bD(w.a,w.b,w.c,w.e,w.f,B.jM(w.d))},
k(d){var w=this
return"JxClassToken(raw: "+w.a+", id: "+w.b+", value: "+B.u(w.c)+", variants: "+B.u(w.d)+", important: "+w.e+", negative: "+w.f+")"}}
C.hS.prototype={
k(d){var w=this
return"JxCompileResult(rules: "+w.b.length+", cssLength: "+w.a.length+", matched: "+w.c.length+", unmatched: "+w.d.length+", duration: "+D.f.ab(w.f.a,1000)+"ms)"}}
C.hT.prototype={}
C.hV.prototype={
ci(d){var w,v,u,t,s,r,q,p,o,n,m=new C.k4()
$.mr()
w=$.jU.$0()
m.a=w
m.b=null
v=B.a([],x.T)
w=x.N
u=B.z(w,w)
t=this.b
s=D.c.S(d)
if(s.length!==0)for(w=D.c.bL(s,$.om()),r=w.length,q=0;q<w.length;w.length===r||(0,B.C)(w),++q){p=t.dP(w[q])
o=p.a
if(o!=null)D.a.n(v,o)
else{n=p.b
u.j(0,n.a,n.c)}}return this.d4(v,m,u)},
d4(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
x.W.a(b0)
x.f.a(b2)
w=B.a([],x.T)
l=x.s
v=B.a([],l)
u=B.a([],l)
l=x.R
t=B.a([],l)
k=x.N
j=B.bk(k)
for(i=new B.aP(b2,B.l(b2).h("aP<1,2>")).gt(0);i.i();){h=i.d
g=h.a
f=h.b
J.a8(v,g)
h='Invalid class syntax: "'+g
h=f.length===0?h+'".':h+'" ('+f+")."
J.a8(u,h)}for(i=b0.length,h=a9.a,e=h.b,d=a9.d,h=h.c,a0=0;a0<b0.length;b0.length===i||(0,B.C)(b0),++a0){s=b0[a0]
if(!j.n(0,s.a))continue
r=h.cl(s)
if(r==null){J.a8(v,s.a)
a1=a9.dG(s)
if(a1!=null)J.a8(u,a1)
continue}try{q=B.a([],l)
for(a2=r.aj(s,e),a3=0;a3<1;++a3){p=a2[a3]
J.a8(q,d.cc(p,s.d))}o=q
J.oV(t,o)
J.a8(w,s)}catch(a4){a2=B.ae(a4)
if(a2 instanceof F.d9){n=a2
J.a8(v,s.a)
J.a8(u,'"'+s.a+'" ignored: '+n.a)}else{m=a2
J.a8(v,s.a)
J.a8(u,'Error while generating "'+s.a+'": '+B.u(m))}}}a5=a9.dD(t)
q=B.a([],l)
D.a.q(q,a5)
a6=a9.c.cB(q)
a7=a9.d_(a5)
if(a7.length===0)a8=a6
else if(a6.length===0)a8=a7
else{q=a6+"\n\n"+a7
a8=q}if(b1.b==null)b1.b=$.jU.$0()
return new C.hS(a8,B.df(a5,x.l),B.df(w,x.L),B.df(v,k),B.df(u,k),new B.bd(b1.ge3()))},
dG(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.c,d=e!=null
if(!(d&&e.length!==0)&&a0.d.length===0)return null
s=this.a
r=s.c
q=F.nY(a0.b,r.ge9())
p=q.length
s=s.b
o=this.d
n=a0.f
m=a0.e
l=a0.d
k=a0.a
j=0
for(;;){if(!(j<q.length)){t=null
break}c$0:{i=q[j]
w=new C.b0(k,i,e,l,m,n)
v=r.cl(w)
if(v==null)break c$0
try{for(h=v.aj(w,s),g=0;g<1;++g){u=h[g]
o.cc(u,w.d)}}catch(f){if(B.ae(f) instanceof F.d9)break c$0
else throw f}s=B.Z(l,x.N)
s.push((n?"-":"")+i)
if(d&&e.length!==0)s.push(e)
t=D.a.C(s,":")
break}q.length===p||(0,B.C)(q);++j}if(t==null)return null
e=m?"!":""
return'Unknown class "'+k+'": did you mean "'+t+e+'"?'},
d_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
x.y.a(d)
w=x.N
v=B.bk(w)
u=B.bk(w)
t=B.O("jx-[a-z-]+")
for(w=d.length,s=x.F,r=0;r<d.length;d.length===w||(0,B.C)(d),++r)for(q=d[r].b,p=q.length,o=0;o<q.length;q.length===p||(0,B.C)(q),++o){n=q[o]
m=n.a
if(D.c.v(m,"--jx-"))v.n(0,m)
if(m==="animation")for(m=t.aM(0,n.b),m=new B.cx(m.a,m.b,m.c);m.i();){l=m.d
k=(l==null?s.a(l):l).b
if(0>=k.length)return B.o(k,0)
if(A.ac.N(k[0])){if(0>=k.length)return B.o(k,0)
k=k[0]
k.toString
u.n(0,k)}}}if(v.a===0&&u.a===0)return""
w=x.s
s=B.a([],w)
for(q=B.lZ(v,v.r,v.$ti.c),p=q.$ti.c;q.i();){m=q.d
s.push("@property "+(m==null?p.a(m):m)+' {\n  syntax: "*";\n  inherits: false;\n}')}for(q=B.lZ(u,u.r,u.$ti.c),p=q.$ti.c;q.i();){m=q.d
if(m==null)m=p.a(m)
k=B.a(["@keyframes "+m+" {"],w)
for(m=A.ac.m(0,m).gL(),j=m.$ti,m=new B.aj(m.a(),j.h("aj<1>")),j=j.c;m.i();){i=m.b
if(i==null)i=j.a(i)
h=B.a(["  "+i.a+" {"],w)
for(i=i.b.gL(),i=i.gt(i);i.i();){g=i.gl()
h.push("    "+g.a+": "+g.b+";")}h.push("  }")
D.a.q(k,h)}k.push("}")
s.push(D.a.C(k,"\n"))}return D.a.C(s,"\n")},
dD(d){var w,v,u,t,s,r
x.y.a(d)
w=B.a([],x.U)
for(v=this.d,u=0;u<d.length;++u)w.push(new B.dS(u,v.ei(d[u].c)))
D.a.a2(w,new C.hX())
v=B.a([],x.R)
for(t=w.length,s=0;s<w.length;w.length===t||(0,B.C)(w),++s){r=w[s].a
if(!(r>=0&&r<d.length))return B.o(d,r)
v.push(d[r])}return v}}
C.hW.prototype={}
C.jB.prototype={
ged(){var w,v,u=this,t=u.b,s=B.n3(t.gF(),x.N)
for(t=t.gF(),t=t.gt(t);t.i();){w=t.gl()
for(w=["group-"+w,"peer-"+w],v=0;v<2;++v)s.n(0,w[v])}s.q(0,u.c.gF())
s.q(0,u.d)
s.q(0,u.e.gF())
return s},
dr(d){var w,v,u,t,s
for(w=0;w<2;++w){v=A.eT[w]
u=v.a
t=v.b
if(!D.c.v(d,u))continue
v=u.length
s=this.b.m(0,D.c.J(d,v))
if(s==null)return null
return"."+D.c.M(u,0,v-1)+s+t}return null},
cc(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null
x.a.a(a3)
w=a3.length
if(w===0)return a2
v=a2.d
u=new B.bX(v==null?"":v)
v=a2.e
t=new B.bX(v==null?"":v)
v=x.s
s=B.a([],v)
v=B.a([],v)
r=a2.c
if(r!=null&&r.length!==0)v.push(C.pR(r))
for(r=a0.d,q=a0.b,p=a0.c,o=a0.e,n=a0.a,m=n.c.a,n=n.a,l=a1,k=0;k<w;++k){j=a3[k]
i=q.m(0,j)
h=p.m(0,j)
g=a0.dr(j)
f=g==null
e=f?o.m(0,j):a1
if(i!=null)u.a+=i
else if(h!=null){if(l!=null)throw B.i(F.bg('Only one pseudo-element per class: "'+j+'" in addition to "'+l+'".'))
l=h}else if(D.a.B(r,j)){f=m.m(0,"breakpoints")
f=f==null?a1:f.m(0,j)
d=f==null?a1:f.c
if(d==null)B.b7(F.bg('Breakpoint "'+j+'" is missing from theme "'+n+'".'))
f="@media (min-width: "+d+")"
D.a.n(v,D.c.v(f,"@media ")?D.c.S(D.c.J(f,7)):D.c.S(f))}else if(!f)t.a+=g
else if(e!=null)D.a.n(D.c.v(e,"(")?v:s,e)
else throw B.i(F.bg('Unsupported variant "'+j+'".'))}if(l!=null)u.a+=l
w=u.a
w=w.length===0?a1:w.charCodeAt(0)==0?w:w
r=t.a
r=r.length===0?a1:r.charCodeAt(0)==0?r:r
if(s.length===0&&v.length===0)v=a1
else{q=B.Z(s,x.N)
D.a.q(q,v)
v="@media "+D.a.C(q," and ")}return new F.am(a2.a,a2.b,v,w,r)},
ei(d){var w,v,u,t,s,r
if(d==null||d.length===0)return 0
for(w=this.d,v=this.a.c.a,u=0;t=w.length,u<t;++u){t=w[u]
s=v.m(0,"breakpoints")
t=s==null?null:s.m(0,t)
r=t==null?null:t.c
if(r!=null&&d==="@media (min-width: "+r+")")return u+1}return t+1}}
C.eH.prototype={
cB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.y
k.a(d)
if(d.length===0)return""
w=new B.bX("")
v=B.W(d)
u=v.h("B(1)")
v=v.h("a0<1>")
t=v.h("j.E")
s=B.Z(new B.a0(d,u.a(new C.i_()),v),t)
r=B.Z(new B.a0(d,u.a(new C.i0()),v),t)
for(v=s.length,q=0;q<s.length;s.length===v||(0,B.C)(s),++q){this.cb(w,s[q],"","\n"," ")
w.a+="\n"}p=B.z(x.N,k)
for(k=r.length,q=0;q<r.length;r.length===k||(0,B.C)(r),++q){o=r[q]
v=o.c
v.toString
J.a8(p.cv(v,new C.i1()),o)}for(k=new B.aP(p,p.$ti.h("aP<1,2>")).gt(0);k.i();){n=k.d
m=n.a
l=n.b
w.a+=m+" {\n"
for(v=J.X(l);v.i();){u=v.gl()
this.cb(w,u,"  ","\n"," ")
w.a+="\n"}w.a+="}\n"}k=w.a
return D.c.S(k.charCodeAt(0)==0?k:k)},
cb(d,e,f,g,h){var w,v,u,t,s,r,q=f+"  ",p=f+e.gcn()+h+"{"+g
p=d.a+=p
for(w=e.b,v=w.length,u=h+"!important",t=0;t<v;++t){s=w[t]
r=s.c?u:""
p+=q+s.a+":"+h+s.b+r+";"+g
d.a=p}d.a=p+(f+"}")},
$ipF:1}
C.hZ.prototype={}
C.an.prototype={
a6(){return"JxParseErrorCode."+this.b}}
C.i4.prototype={
k(d){return'Invalid class "'+this.a+'": '+this.c+"."}}
C.co.prototype={}
C.eJ.prototype={
dP(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.c.S(a2),a0=new C.i6(d),a1=d.length
if(a1===0)return a0.$2(A.M,"classe vide")
if(a1>512)return a0.$2(A.bb,"class too long (more than 512 characters)")
for(t=0;t<a1;++t){s=d.charCodeAt(t)
if(s<=32||s===127)return a0.$2(A.bd,"space or control character not allowed")}w=d
if(J.oX(w,"!")){w=J.p3(w,0,J.aq(w)-1)
r=!0}else{r=J.p_(w,"!")
if(r)w=J.p2(w,1)}if(J.aq(w)===0)return a0.$2(A.M,'class is only "!"')
v=null
try{v=C.pJ(w)}catch(q){a1=B.ae(q)
if(a1 instanceof B.ci){u=a1
return a0.$2(A.bf,u.a)}else throw q}if(J.lz(v,new C.i5()))return a0.$2(A.be,'empty segment (extra ":" or missing value)')
a1=this.a
p=0
for(;;){if(!(p<J.aq(v)-1&&a1.B(0,J.mG(v,p))))break;++p}o=J.p0(v,p)
n=J.p1(v,0,p)
a1=o.length
if(a1===1){m=D.a.gaT(o)
l=null}else{D.a.q(n,D.a.b8(o,0,a1-2))
a1=o.length
k=a1-2
if(!(k>=0))return B.o(o,k)
m=o[k]
l=D.a.gb_(o)}a1=n.length
if(a1>8)return a0.$2(A.bg,"too many variants (maximum 8)")
k=x.N
j=B.bk(k)
for(i=0;i<n.length;n.length===a1||(0,B.C)(n),++i){h=n[i]
g=$.op()
if(!g.b.test(h))return a0.$2(A.bh,'invalid variant "'+h+'"')
if(!j.n(0,h))return a0.$2(A.bi,'repeated variant "'+h+'"')}f=D.c.v(m,"-")
if(f){if(l==null)return a0.$2(A.t,'the "-" sign needs a value (for example "-m:4")')
m=D.c.J(m,1)}if(l!=null&&D.c.v(l,"-")){if(f)return a0.$2(A.t,'double negation ("-m:-4")')
l=D.c.J(l,1)
if(l.length===0||D.c.v(l,"-"))return a0.$2(A.t,"incomplete negative value")
f=!0}a1=$.on()
if(!a1.b.test(m)){a1=D.c.B(m,"!")?y.b:'invalid utility "'+m+'"'
return a0.$2(A.bj,a1)}if(l!=null){e=C.pI(l)
if(e!=null)return a0.$2(e.a,e.b)}return new C.co(new C.b0(d,m,l,B.df(n,k),r,f),null)},
$ipH:1}
C.i7.prototype={
es(d){var w=this.a,v=d.a
if(w.N(v))D.a.ex(this.b,new C.i8(d))
w.j(0,v,d)
D.a.n(this.b,d)},
eu(d){var w,v
x.m.a(d)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.C)(d),++v)this.es(d[v])},
cl(d){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.C)(w),++u){t=w[u]
if(t.b1(d))return t}return null},
ge9(){var w,v,u,t,s,r,q=B.bk(x.N)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.C)(w),++u){t=w[u]
$label0$0:{if(t instanceof F.bh){s=t.b.gF()
break $label0$0}if(t instanceof F.k){s=t.b.gF()
break $label0$0}if(t instanceof F.cn){r=t.b
s=r
break $label0$0}if(t instanceof F.cm){r=t.b
s=r
break $label0$0}s=E.o
break $label0$0}s=J.X(s)
while(s.i())q.n(0,B.e(s.gl()))}return q}}
C.eM.prototype={
ez(d,e){var w=this.c.a.m(0,d)
w=w==null?null:w.m(0,e)
return w==null?null:w.c},
$ilK:1}
C.jy.prototype={
bH(d){var w,v,u,t=this.a.m(0,d)
if(t==null)return E.b
w=x.N
w=B.z(w,w)
for(v=t.ga5(),v=v.gt(v);v.i();){u=v.gl()
w.j(0,u.b,u.c)}return w},
cI(d){this.a.cv(d.a,new C.jz()).j(0,d.b,d)}}
C.bB.prototype={
K(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.bB&&B.ad(v)===B.ad(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gE(d){return B.bD(this.a,this.b,this.c,D.e,D.e,D.e)},
k(d){return this.a+"."+this.b+": "+this.c}}
var z=a.updateTypes(["B(am)","h<am>()","co(an,b)","B(Y)","w<b,bB>()","d()"])
C.jS.prototype={
$0(){return D.k.e6(1000*this.a.now())},
$S:44}
C.hX.prototype={
$2(d,e){var w,v=x.c
v.a(d)
v.a(e)
w=D.f.T(d.b,e.b)
return w!==0?w:D.f.T(d.a,e.a)},
$S:45}
C.jC.prototype={
$2(d,e){var w,v=x.V
v.a(d)
v.a(e)
w=D.k.T(d.c,e.c)
return w!==0?w:D.f.T(d.a,e.a)},
$S:46}
C.i_.prototype={
$1(d){var w=x.l.a(d).c
return!(w!=null&&w.length!==0)},
$S:z+0}
C.i0.prototype={
$1(d){var w=x.l.a(d).c
return w!=null&&w.length!==0},
$S:z+0}
C.i1.prototype={
$0(){return B.a([],x.R)},
$S:z+1}
C.i6.prototype={
$2(d,e){return new C.co(null,new C.i4(C.mZ(this.a),e))},
$S:z+2}
C.i5.prototype={
$1(d){return B.e(d).length===0},
$S:8}
C.i8.prototype={
$1(d){return x.O.a(d).a===this.a.a},
$S:z+3}
C.jz.prototype={
$0(){return B.z(x.N,x.S)},
$S:z+4};(function installTearOffs(){var w=a._static_0
w(C,"ru","q0",5)})();(function inheritance(){var w=a.inheritMany
w(B.aw,[C.jS,C.i1,C.jz])
w(B.v,[C.k4,C.b0,C.hS,C.hT,C.hV,C.hW,C.jB,C.eH,C.hZ,C.i4,C.co,C.eJ,C.i7,C.eM,C.jy,C.bB])
w(G.x,[C.h1,C.fZ,C.h6])
w(B.cB,[C.k3,C.an])
w(B.b9,[C.hX,C.jC,C.i6])
w(B.ag,[C.i_,C.i0,C.i5,C.i8])})()
B.ac(b.typeUniverse,JSON.parse('{"h1":{"x":[],"m":[]},"fZ":{"x":[],"m":[]},"h6":{"x":[],"m":[]},"eH":{"pF":[]},"eJ":{"pH":[]},"eM":{"lK":[]}}'))
var y={b:'"!" goes at the start or the end of the class'}
var x=(function rtii(){var w=B.p
return{w:w("c<b,b>"),M:w("c<b,h<b>>"),j:w("c<b,w<b,b>>"),m:w("j<Y>"),T:w("n<b0>"),R:w("n<am>"),D:w("n<Y>"),U:w("n<+index,rank(d,d)>"),P:w("n<+index,name,width(d,b,A)>"),s:w("n<b>"),L:w("b0"),l:w("am"),O:w("Y"),S:w("bB"),W:w("h<b0>"),y:w("h<am>"),a:w("h<b>"),A:w("w<b,bB>"),f:w("w<b,b>"),c:w("+index,rank(d,d)"),V:w("+index,name,width(d,b,A)"),F:w("cv"),N:w("b"),v:w("~(y)")}})();(function constants(){var w=a.makeConstList
A.nH=new C.hT()
A.aN=new B.ci('"]" without a matching "["',null)
A.aO=new B.ci('unclosed "["',null)
A.M=new C.an(0,"empty")
A.bb=new C.an(1,"tooLong")
A.r=new C.an(10,"invalidValue")
A.bc=new C.an(11,"unsafeValue")
A.bd=new C.an(2,"invalidCharacter")
A.be=new C.an(3,"emptySegment")
A.bf=new C.an(4,"unbalancedBrackets")
A.bg=new C.an(5,"tooManyVariants")
A.bh=new C.an(6,"invalidVariant")
A.bi=new C.an(7,"duplicateVariant")
A.t=new C.an(8,"invalidNegative")
A.bj=new C.an(9,"invalidIdentifier")
A.kM={bcol:0}
A.d2=w(["border-collapse"],x.s)
A.fJ=new B.c(A.kM,[A.d2],x.M)
A.l_={collapse:0,separate:1}
A.hb=new B.c(A.l_,["collapse","separate"],x.w)
A.bP=new F.k(A.fJ,null,A.hb,E.d,!1,!1,null,null,null,E.b,"border-collapse")
A.mj={tl:0}
A.d0=w(["table-layout"],x.s)
A.hZ=new B.c(A.mj,[A.d0],x.M)
A.kH={auto:0,fixed:1}
A.hq=new B.c(A.kH,["auto","fixed"],x.w)
A.ck=new F.k(A.hZ,null,A.hq,E.d,!1,!1,null,null,null,E.b,"table-layout")
A.kX={cap:0}
A.cX=w(["caption-side"],x.s)
A.hx=new B.c(A.kX,[A.cX],x.M)
A.mk={top:0,bottom:1}
A.ij=new B.c(A.mk,["top","bottom"],x.w)
A.c8=new F.k(A.hx,null,A.ij,E.d,!1,!1,null,null,null,E.b,"caption-side")
A.cU=w([A.bP,A.ck,A.c8],x.D)
A.dk=w(["100","300","500","700","900"],x.s)
A.mL=new B.f("group-"," ")
A.mN=new B.f("peer-"," ~ ")
A.eT=w([A.mL,A.mN],B.p("n<+(b,b)>"))
A.ao={xs:0,sm:1,base:2,lg:3,xl:4,"2xl":5,"3xl":6,"4xl":7,"5xl":8,"6xl":9}
A.fl=new B.c(A.ao,["0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.875rem","2.25rem","3rem","3.75rem"],x.w)
A.af={sans:0,serif:1,mono:2}
A.fp=new B.c(A.af,['ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif','ui-serif, Georgia, Cambria, "Times New Roman", serif','ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace'],x.w)
A.jO={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6,full:7}
A.fu=new B.c(A.jO,["0px","0.125rem","0.375rem","0.5rem","0.75rem","1rem","1.5rem","9999px"],x.w)
A.jE={hover:0,focus:1,active:2,visited:3,disabled:4,checked:5,"focus-within":6,"focus-visible":7,first:8,last:9,odd:10,even:11,enabled:12,required:13,optional:14,valid:15,invalid:16,"user-valid":17,"user-invalid":18,"read-only":19,"placeholder-shown":20,autofill:21,indeterminate:22,open:23,modal:24}
A.fG=new B.c(A.jE,[":hover",":focus",":active",":visited",":disabled",":checked",":focus-within",":focus-visible",":first-child",":last-child",":nth-child(odd)",":nth-child(even)",":enabled",":required",":optional",":valid",":invalid",":user-valid",":user-invalid",":read-only",":placeholder-shown",":autofill",":indeterminate","[open]",":modal"],x.w)
A.mt={thin:0,extralight:1,light:2,normal:3,medium:4,semibold:5,bold:6,extrabold:7,black:8}
A.h_=new B.c(A.mt,["100","200","300","400","500","600","700","800","900"],x.w)
A.ah={gray:0,red:1,orange:2,yellow:3,green:4,teal:5,blue:6,indigo:7,purple:8,pink:9}
A.es=w(["#f3f4f6","#d1d5db","#6b7280","#374151","#111827"],x.s)
A.dV=w(["#fee2e2","#fca5a5","#ef4444","#b91c1c","#7f1d1d"],x.s)
A.f5=w(["#ffedd5","#fdba74","#f97316","#c2410c","#7c2d12"],x.s)
A.eH=w(["#fef9c3","#fde047","#eab308","#a16207","#713f12"],x.s)
A.e0=w(["#dcfce7","#86efac","#22c55e","#15803d","#14532d"],x.s)
A.df=w(["#ccfbf1","#5eead4","#14b8a6","#0f766e","#134e4a"],x.s)
A.dU=w(["#dbeafe","#93c5fd","#3b82f6","#1d4ed8","#1e3a8a"],x.s)
A.dx=w(["#e0e7ff","#a5b4fc","#6366f1","#4338ca","#312e81"],x.s)
A.dz=w(["#f3e8ff","#d8b4fe","#a855f7","#7e22ce","#581c87"],x.s)
A.eN=w(["#fce7f3","#f9a8d4","#ec4899","#be185d","#831843"],x.s)
A.hs=new B.c(A.ah,[A.es,A.dV,A.f5,A.eH,A.e0,A.df,A.dU,A.dx,A.dz,A.eN],x.M)
A.ke={dark:0,"motion-safe":1,"motion-reduce":2,"contrast-more":3,portrait:4,landscape:5,print:6}
A.hB=new B.c(A.ke,["(prefers-color-scheme: dark)","(prefers-reduced-motion: no-preference)","(prefers-reduced-motion: reduce)","(prefers-contrast: more)","(orientation: portrait)","(orientation: landscape)","print"],x.w)
A.mw={sm:0,md:1,lg:2,xl:3,"2xl":4}
A.iB=new B.c(A.mw,["640px","768px","1024px","1280px","1536px"],x.w)
A.k6={placeholder:0,file:1,backdrop:2}
A.iD=new B.c(A.k6,["::placeholder","::file-selector-button","::backdrop"],x.w)
A.kc={sm:0,md:1,lg:2,xl:3,"2xl":4,inner:5,none:6}
A.iG=new B.c(A.kc,["0 1px 2px 0 rgb(0 0 0 / 0.05)","0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","0 25px 50px -12px rgb(0 0 0 / 0.25)","inset 0 2px 4px 0 rgb(0 0 0 / 0.05)","none"],x.w)
A.k4={"jx-spin":0,"jx-ping":1,"jx-pulse":2,"jx-bounce":3,"jx-fade-in":4,"jx-fade-out":5,"jx-slide-up":6,"jx-slide-down":7,"jx-zoom-in":8}
A.au={to:0}
A.m5={rotate:0}
A.fQ=new B.c(A.m5,["360deg"],x.w)
A.im=new B.c(A.au,[A.fQ],x.j)
A.kx={"75%, 100%":0}
A.m8={scale:0,opacity:1}
A.fH=new B.c(A.m8,["2","0"],x.w)
A.fN=new B.c(A.kx,[A.fH],x.j)
A.li={"50%":0}
A.ar={opacity:0}
A.fP=new B.c(A.ar,["0.5"],x.w)
A.iF=new B.c(A.li,[A.fP],x.j)
A.lo={"0%, 100%":0,"50%":1}
A.ag={translate:0,"animation-timing-function":1}
A.ja=new B.c(A.ag,["0 -25%","cubic-bezier(0.8, 0, 1, 1)"],x.w)
A.j9=new B.c(A.ag,["0 0","cubic-bezier(0, 0, 0.2, 1)"],x.w)
A.jt=new B.c(A.lo,[A.ja,A.j9],x.j)
A.q={from:0}
A.a6=new B.c(A.ar,["0"],x.w)
A.hL=new B.c(A.q,[A.a6],x.j)
A.il=new B.c(A.au,[A.a6],x.j)
A.as={opacity:0,translate:1}
A.i0=new B.c(A.as,["0","0 1rem"],x.w)
A.hN=new B.c(A.q,[A.i0],x.j)
A.i_=new B.c(A.as,["0","0 -1rem"],x.w)
A.hK=new B.c(A.q,[A.i_],x.j)
A.lS={opacity:0,scale:1}
A.iS=new B.c(A.lS,["0","0.95"],x.w)
A.hM=new B.c(A.q,[A.iS],x.j)
A.ac=new B.c(A.k4,[A.im,A.fN,A.iF,A.jt,A.hL,A.il,A.hN,A.hK,A.hM],B.p("c<b,w<b,w<b,b>>>"))
A.ki={none:0,tight:1,snug:2,normal:3,relaxed:4,loose:5}
A.jw=new B.c(A.ki,["1","1.25","1.375","1.5","1.625","2"],x.w)
A.mH=new B.f(A.r,'an arbitrary value ends with "]"')
A.mJ=new B.f(A.r,"empty arbitrary value")
A.az=new C.k3(2,"isFalse")})();(function staticFields(){$.jT=0
$.jU=C.ru()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"tZ","mr",()=>{C.q2()
return $.jT})
w($,"tL","om",()=>B.O("\\s+"))
w($,"tM","on",()=>B.O("^[a-zA-Z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*$"))
w($,"tO","op",()=>B.O("^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$"))
w($,"tN","oo",()=>B.O("^(?:#[0-9a-fA-F]{3,8}|[a-zA-Z0-9]+(?:[.\\-/][a-zA-Z0-9]+)*%?)$"))
w($,"tI","oj",()=>C.pE())
w($,"tK","ol",()=>{var v,u,t,s=x.N
s=B.z(s,s)
s.j(0,"0","0px")
s.j(0,"px","1px")
for(v=1;v<=16;++v){u=v*0.25
t=u===D.k.eM(u)?D.f.k(D.k.eJ(u)):D.k.k(u)
s.j(0,""+v,t+"rem")}s.j(0,"auto","auto")
return s})
w($,"tJ","ok",()=>{var v,u=x.N
u=B.z(u,u)
u.j(0,"0","0")
u.j(0,"5","0.05")
for(v=10;v<=90;v+=10)u.j(0,""+v,B.u(v/100))
u.j(0,"95","0.95")
u.j(0,"100","1")
return u})})()};
(a=>{a["g7KSK7drysTBA2TwWTz7xUM6cg8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_23.part.js.map
