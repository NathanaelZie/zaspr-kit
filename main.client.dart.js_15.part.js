((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,B={
mA(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=D.c.S(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
pp(){return Date.now()},
pr(){var w,v
if($.jp!==0)return
$.jp=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.jp=1e6
$.jq=new B.jo(v)},
jo:function jo(d){this.a=d},
jC:function jC(){this.b=this.a=0},
nz(d,e){return new B.fO(e,d,null)},
nv(d,e,f){return new B.fL(f,e,d,null)},
nD(d,e,f,g,h,i,j){return new B.fR(i,j,h,f,e,d,g)},
fO:function fO(d,e,f){this.d=d
this.w=e
this.a=f},
fL:function fL(d,e,f,g){var _=this
_.c=d
_.e=e
_.x=f
_.a=g},
fR:function fR(d,e,f,g,h,i,j){var _=this
_.Q=d
_.as=e
_.ax=f
_.ch=g
_.CW=h
_.dx=i
_.a=j},
jB:function jB(d,e){this.a=d
this.b=e},
p0(d,e){var w,v,u=d.length,t=e.length
if(u!==t)return!1
for(w=0;w<u;++w){v=d[w]
if(!(w<t))return C.n(e,w)
if(v!==e[w])return!1}return!0},
aW:function aW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hr:function hr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hs:function hs(){},
ms(){var w,v,u,t,s,r=null,q=x.N,p=B.pc(C.M(["colors",$.nK(),"spacing",$.nM(),"breakpoints",A.ib,"font-family",A.f6,"font-size",A.f2,"font-weight",A.fF,"line-height",A.j5,"border-radius",A.fb,"border-width",E.v,"opacity",$.nL(),"shadow",A.ie],q,x.f))
p=new B.eB("default",p)
w=x.M
q=new B.hE(C.z(q,w),C.a([],x.D))
v=$.m3()
w=C.a1(v,w)
D.a.t(w,E.M)
D.a.t(w,E.X)
D.a.t(w,E.U)
D.a.t(w,E.Z)
D.a.t(w,E.O)
D.a.t(w,E.a1)
D.a.t(w,$.m8())
D.a.t(w,E.a_)
D.a.t(w,$.m7())
D.a.t(w,$.m6())
D.a.t(w,$.m4())
D.a.t(w,E.Y)
D.a.t(w,E.V)
D.a.t(w,E.S)
D.a.t(w,E.a2)
D.a.t(w,$.m5())
D.a.t(w,E.N)
D.a.t(w,E.R)
D.a.t(w,E.W)
D.a.t(w,E.a0)
D.a.t(w,$.m9())
q.em(w)
u=new B.hu(p,q)
t=u.b
s=B.pd(t,r)
q=s.ge6()
return new B.ht(u,new B.ey(q),new B.ex(new B.hx(!1)),s)},
ht:function ht(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hv:function hv(){},
hu:function hu(d,e){this.b=d
this.c=e},
pd(d,e){var w,v,u,t,s=d.c.bG("breakpoints").gO(),r=C.a1(s,C.l(s).h("j.E"))
s=C.a([],x.P)
for(w=0;w<r.length;++w){v=r[w]
s.push(new C.dN(w,v.a,B.pf(v.b)))}D.a.a5(s,new B.j8())
v=C.a([],x.s)
for(u=s.length,t=0;t<s.length;s.length===u||(0,C.B)(s),++t)v.push(s[t].b)
return new B.j7(d,A.hj,A.hR,v,A.hd,e)},
pf(d){var w,v,u,t=C.O("^([0-9.]+)(px|r?em)?$").aU(D.c.S(d))
if(t==null)return 1/0
w=t.b
if(1>=w.length)return C.n(w,1)
v=w[1]
v.toString
u=B.mA(v)
if(u==null)u=1/0
if(2>=w.length)return C.n(w,2)
w=w[2]
return w==null||w==="px"?u:u*16},
pe(d){return D.c.v(d,"@media ")?D.c.S(D.c.J(d,7)):D.c.S(d)},
j7:function j7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j8:function j8(){},
ex:function ex(d){this.a=d},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hx:function hx(d){this.a=d},
al:function al(d,e){this.a=d
this.b=e},
hB:function hB(d,e){this.a=d
this.c=e},
ci:function ci(d,e){this.a=d
this.b=e},
p6(d){var w,v,u,t,s,r=C.a([],x.s)
for(w=d.length,v=0,u=0,t=0;t<w;++t){s=d.charCodeAt(t)
if(s===91)++v
else if(s===93){--v
if(v<0)throw C.i(A.aM)}else if(s===58&&v===0){D.a.n(r,D.c.L(d,u,t))
u=t+1}}if(v!==0)throw C.i(A.aN)
D.a.n(r,D.c.J(d,u))
return r},
p5(d){var w,v,u
if(!D.c.v(d,"[")){w=$.nP()
if(w.b.test(d))return null
return new C.f(A.r,D.c.A(d,"!")?y.b:'invalid value "'+B.mt(d)+'" (use brackets for a free-form value)')}if(!D.c.aR(d,"]"))return A.m7
v=B.mq(D.c.L(d,1,d.length-1))
if(D.c.S(v).length===0)return A.m9
u=F.mr(v)
if(u!=null)return new C.f(A.b7,"value rejected: "+u)
return null},
mt(d){return d.length<=80?d:D.c.L(d,0,77)+"\u2026"},
ey:function ey(d){this.a=d},
hD:function hD(d){this.a=d},
hC:function hC(){},
hE:function hE(d,e){this.a=d
this.b=e},
hF:function hF(d){this.a=d},
eB:function eB(d,e){this.a=d
this.c=e},
pb(){return new B.j4(C.z(x.N,x.A))},
pc(d){var w,v,u,t,s,r=B.pb()
for(w=new C.ap(d,C.l(d).h("ap<1,2>")).gq(0);w.i();){v=w.d
for(u=v.b.gO(),u=u.gq(u),t=v.a;u.i();){s=u.gl()
r.cG(new B.bw(t,s.a,s.b))}}return r},
j4:function j4(d){this.a=d},
j5:function j5(){},
bw:function bw(d,e,f){this.a=d
this.b=e
this.c=f},
mq(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=0,t="";u<w;++u){s=d.charCodeAt(u)
if(s===92){r=u+1
r=r<w&&d.charCodeAt(r)===95}else r=!1
if(r){t+=C.lk(95);++u
continue}if(v===0){r=u+4
r=r<=w&&D.c.L(d,u,r).toLowerCase()==="url("}else r=!1
if(r){t+=D.c.L(d,u,u+4)
u+=3
v=1
continue}if(v>0){if(s===40)++v
if(s===41)--v
t+=C.lk(s)
continue}t+=C.lk(s===95?32:s)}return t.charCodeAt(0)==0?t:t},
p2(){var w,v,u,t,s,r=x.N,q=C.M(["transparent","transparent","current","currentColor","black","#000000","white","#ffffff"],r,r)
for(r=A.h5.gO(),w=r.$ti,r=new C.ag(r.a(),w.h("ag<1>")),w=w.c;r.i();){v=r.b
if(v==null)v=w.a(v)
u=v.a
v=v.b
t=J.bD(v)
q.k(0,u,t.m(v,2))
for(u+="-",s=0;s<5;++s)q.k(0,u+A.d4[s],t.m(v,s))}return q}},A,G,F,E
J=c[1]
C=c[0]
D=c[2]
B=a.updateHolder(c[12],B)
A=c[20]
G=c[17]
F=c[15]
E=c[22]
B.jC.prototype={
gdX(){var w,v=this.b
if(v==null)v=$.jq.$0()
w=v-this.a
if($.lW()===1e6)return w
return w*1000}}
B.fO.prototype={
F(d){var w=null
return new C.R("pre",w,this.d,w,w,w,this.w,w)}}
B.fL.prototype={
F(d){var w,v=null,u=x.N
u=C.z(u,u)
w=this.c
if(w!=null)u.k(0,"for",w)
return new C.R("label",v,this.e,v,u,v,this.x,v)}}
B.fR.prototype={
F(d){var w=this,v=x.N,u=C.z(v,v),t=D.f.j(w.Q)
u.k(0,"rows",t)
u.k(0,"spellcheck","false")
t=C.z(v,x.v)
t.t(0,G.kL().$1$2$onChange$onInput(null,w.ax,v))
return new C.R("textarea",w.ch,w.CW,null,u,t,w.dx,null)}}
B.jB.prototype={
am(){return"SpellCheck."+this.b}}
B.aW.prototype={
gaV(){var w=this.c
return w!=null&&w.length!==0},
gau(){var w=this.c
return w!=null&&w.length!==0&&w.length>2&&D.c.v(w,"[")&&D.c.aR(w,"]")},
gdK(){if(!this.gau())return null
var w=this.c
return B.mq(D.c.L(w,1,w.length-1))},
K(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof B.aW&&C.ab(v)===C.ab(e)&&v.a===e.a&&v.b===e.b&&v.c==e.c&&v.e===e.e&&v.f===e.f&&B.p0(v.d,e.d)
else w=!0
return w},
gC(d){var w=this
return C.by(w.a,w.b,w.c,w.e,w.f,C.ji(w.d))},
j(d){var w=this
return"JxClassToken(raw: "+w.a+", id: "+w.b+", value: "+C.t(w.c)+", variants: "+C.t(w.d)+", important: "+w.e+", negative: "+w.f+")"}}
B.hr.prototype={
j(d){var w=this
return"JxCompileResult(rules: "+w.b.length+", cssLength: "+w.a.length+", matched: "+w.c.length+", unmatched: "+w.d.length+", duration: "+D.f.a9(w.f.a,1000)+"ms)"}}
B.hs.prototype={}
B.ht.prototype={
ce(d){var w,v,u,t,s,r,q,p,o,n,m=new B.jC()
$.lW()
w=$.jq.$0()
m.a=w
m.b=null
v=C.a([],x.T)
w=x.N
u=C.z(w,w)
t=this.b
s=D.c.S(d)
if(s.length!==0)for(w=D.c.bK(s,$.nN()),r=w.length,q=0;q<w.length;w.length===r||(0,C.B)(w),++q){p=t.dJ(w[q])
o=p.a
if(o!=null)D.a.n(v,o)
else{n=p.b
u.k(0,n.a,n.c)}}return this.d1(v,m,u)},
d1(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
x.O.a(b0)
x.f.a(b2)
w=C.a([],x.T)
l=x.s
v=C.a([],l)
u=C.a([],l)
l=x.R
t=C.a([],l)
k=x.N
j=C.bd(k)
for(i=new C.ap(b2,C.l(b2).h("ap<1,2>")).gq(0);i.i();){h=i.d
g=h.a
f=h.b
J.a8(v,g)
h='Invalid class syntax: "'+g
h=f.length===0?h+'".':h+'" ('+f+")."
J.a8(u,h)}for(i=b0.length,h=a9.a,e=h.b,d=a9.d,h=h.c,a0=0;a0<b0.length;b0.length===i||(0,C.B)(b0),++a0){s=b0[a0]
if(!j.n(0,s.a))continue
r=h.ci(s)
if(r==null){J.a8(v,s.a)
a1=a9.dA(s)
if(a1!=null)J.a8(u,a1)
continue}try{q=C.a([],l)
for(a2=r.ai(s,e),a3=0;a3<1;++a3){p=a2[a3]
J.a8(q,d.c9(p,s.d))}o=q
J.ol(t,o)
J.a8(w,s)}catch(a4){a2=C.ac(a4)
if(a2 instanceof F.d2){n=a2
J.a8(v,s.a)
J.a8(u,'"'+s.a+'" ignored: '+n.a)}else{m=a2
J.a8(v,s.a)
J.a8(u,'Error while generating "'+s.a+'": '+C.t(m))}}}a5=a9.dw(t)
q=C.a([],l)
D.a.t(q,a5)
a6=a9.c.cz(q)
a7=a9.cX(a5)
if(a7.length===0)a8=a6
else if(a6.length===0)a8=a7
else{q=a6+"\n\n"+a7
a8=q}if(b1.b==null)b1.b=$.jq.$0()
return new B.hr(a8,C.d8(a5,x.l),C.d8(w,x.L),C.d8(v,k),C.d8(u,k),new C.b5(b1.gdX()))},
dA(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.c,d=e!=null
if(!(d&&e.length!==0)&&a0.d.length===0)return null
s=this.a
r=s.c
q=F.ns(a0.b,r.ge2())
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
w=new B.aW(k,i,e,l,m,n)
v=r.ci(w)
if(v==null)break c$0
try{for(h=v.ai(w,s),g=0;g<1;++g){u=h[g]
o.c9(u,w.d)}}catch(f){if(C.ac(f) instanceof F.d2)break c$0
else throw f}s=C.a1(l,x.N)
s.push((n?"-":"")+i)
if(d&&e.length!==0)s.push(e)
t=D.a.B(s,":")
break}q.length===p||(0,C.B)(q);++j}if(t==null)return null
e=m?"!":""
return'Unknown class "'+k+'": did you mean "'+t+e+'"?'},
cX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
x.y.a(d)
w=x.N
v=C.bd(w)
u=C.bd(w)
t=C.O("jx-[a-z-]+")
for(w=d.length,s=x.F,r=0;r<d.length;d.length===w||(0,C.B)(d),++r)for(q=d[r].b,p=q.length,o=0;o<q.length;q.length===p||(0,C.B)(q),++o){n=q[o]
m=n.a
if(D.c.v(m,"--jx-"))v.n(0,m)
if(m==="animation")for(m=t.aM(0,n.b),m=new C.cq(m.a,m.b,m.c);m.i();){l=m.d
k=(l==null?s.a(l):l).b
if(0>=k.length)return C.n(k,0)
if(A.ab.M(k[0])){if(0>=k.length)return C.n(k,0)
k=k[0]
k.toString
u.n(0,k)}}}if(v.a===0&&u.a===0)return""
w=x.s
s=C.a([],w)
for(q=C.lu(v,v.r,v.$ti.c),p=q.$ti.c;q.i();){m=q.d
s.push("@property "+(m==null?p.a(m):m)+' {\n  syntax: "*";\n  inherits: false;\n}')}for(q=C.lu(u,u.r,u.$ti.c),p=q.$ti.c;q.i();){m=q.d
if(m==null)m=p.a(m)
k=C.a(["@keyframes "+m+" {"],w)
for(m=A.ab.m(0,m).gO(),j=m.$ti,m=new C.ag(m.a(),j.h("ag<1>")),j=j.c;m.i();){i=m.b
if(i==null)i=j.a(i)
h=C.a(["  "+i.a+" {"],w)
for(i=i.b.gO(),i=i.gq(i);i.i();){g=i.gl()
h.push("    "+g.a+": "+g.b+";")}h.push("  }")
D.a.t(k,h)}k.push("}")
s.push(D.a.B(k,"\n"))}return D.a.B(s,"\n")},
dw(d){var w,v,u,t,s,r
x.y.a(d)
w=C.a([],x.U)
for(v=this.d,u=0;u<d.length;++u)w.push(new C.dM(u,v.eb(d[u].c)))
D.a.a5(w,new B.hv())
v=C.a([],x.R)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.B)(w),++s){r=w[s].a
if(!(r>=0&&r<d.length))return C.n(d,r)
v.push(d[r])}return v}}
B.hu.prototype={}
B.j7.prototype={
ge6(){var w,v,u=this,t=u.b,s=C.mx(t.gE(),x.N)
for(t=t.gE(),t=t.gq(t);t.i();){w=t.gl()
for(w=["group-"+w,"peer-"+w],v=0;v<2;++v)s.n(0,w[v])}s.t(0,u.c.gE())
s.t(0,u.d)
s.t(0,u.e.gE())
return s},
dk(d){var w,v,u,t,s
for(w=0;w<2;++w){v=A.eB[w]
u=v.a
t=v.b
if(!D.c.v(d,u))continue
v=u.length
s=this.b.m(0,D.c.J(d,v))
if(s==null)return null
return"."+D.c.L(u,0,v-1)+s+t}return null},
c9(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null
x.a.a(a3)
w=a3.length
if(w===0)return a2
v=a2.d
u=new C.bT(v==null?"":v)
v=a2.e
t=new C.bT(v==null?"":v)
v=x.s
s=C.a([],v)
v=C.a([],v)
r=a2.c
if(r!=null&&r.length!==0)v.push(B.pe(r))
for(r=a0.d,q=a0.b,p=a0.c,o=a0.e,n=a0.a,m=n.c.a,n=n.a,l=a1,k=0;k<w;++k){j=a3[k]
i=q.m(0,j)
h=p.m(0,j)
g=a0.dk(j)
f=g==null
e=f?o.m(0,j):a1
if(i!=null)u.a+=i
else if(h!=null){if(l!=null)throw C.i(F.b9('Only one pseudo-element per class: "'+j+'" in addition to "'+l+'".'))
l=h}else if(D.a.A(r,j)){f=m.m(0,"breakpoints")
f=f==null?a1:f.m(0,j)
d=f==null?a1:f.c
if(d==null)C.bG(F.b9('Breakpoint "'+j+'" is missing from theme "'+n+'".'))
f="@media (min-width: "+d+")"
D.a.n(v,D.c.v(f,"@media ")?D.c.S(D.c.J(f,7)):D.c.S(f))}else if(!f)t.a+=g
else if(e!=null)D.a.n(D.c.v(e,"(")?v:s,e)
else throw C.i(F.b9('Unsupported variant "'+j+'".'))}if(l!=null)u.a+=l
w=u.a
w=w.length===0?a1:w.charCodeAt(0)==0?w:w
r=t.a
r=r.length===0?a1:r.charCodeAt(0)==0?r:r
if(s.length===0&&v.length===0)v=a1
else{q=C.a1(s,x.N)
D.a.t(q,v)
v="@media "+D.a.B(q," and ")}return new F.ak(a2.a,a2.b,v,w,r)},
eb(d){var w,v,u,t,s,r
if(d==null||d.length===0)return 0
for(w=this.d,v=this.a.c.a,u=0;t=w.length,u<t;++u){t=w[u]
s=v.m(0,"breakpoints")
t=s==null?null:s.m(0,t)
r=t==null?null:t.c
if(r!=null&&d==="@media (min-width: "+r+")")return u+1}return t+1}}
B.ex.prototype={
cz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.y
k.a(d)
if(d.length===0)return""
w=new C.bT("")
v=C.U(d)
u=v.h("E(1)")
v=v.h("a5<1>")
t=v.h("j.E")
s=C.a1(new C.a5(d,u.a(new B.hy()),v),t)
r=C.a1(new C.a5(d,u.a(new B.hz()),v),t)
for(v=s.length,q=0;q<s.length;s.length===v||(0,C.B)(s),++q){this.c8(w,s[q],"","\n"," ")
w.a+="\n"}p=C.z(x.N,k)
for(k=r.length,q=0;q<r.length;r.length===k||(0,C.B)(r),++q){o=r[q]
v=o.c
v.toString
J.a8(p.ct(v,new B.hA()),o)}for(k=new C.ap(p,p.$ti.h("ap<1,2>")).gq(0);k.i();){n=k.d
m=n.a
l=n.b
w.a+=m+" {\n"
for(v=J.a_(l);v.i();){u=v.gl()
this.c8(w,u,"  ","\n"," ")
w.a+="\n"}w.a+="}\n"}k=w.a
return D.c.S(k.charCodeAt(0)==0?k:k)},
c8(d,e,f,g,h){var w,v,u,t,s,r,q=f+"  ",p=f+e.gck()+h+"{"+g
p=d.a+=p
for(w=e.b,v=w.length,u=h+"!important",t=0;t<v;++t){s=w[t]
r=s.c?u:""
p+=q+s.a+":"+h+s.b+r+";"+g
d.a=p}d.a=p+(f+"}")},
$ip3:1}
B.hx.prototype={}
B.al.prototype={
am(){return"JxParseErrorCode."+this.b}}
B.hB.prototype={
j(d){return'Invalid class "'+this.a+'": '+this.c+"."}}
B.ci.prototype={}
B.ey.prototype={
dJ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.c.S(a2),a0=new B.hD(d),a1=d.length
if(a1===0)return a0.$2(A.L,"classe vide")
if(a1>512)return a0.$2(A.b6,"class too long (more than 512 characters)")
for(t=0;t<a1;++t){s=d.charCodeAt(t)
if(s<=32||s===127)return a0.$2(A.b8,"space or control character not allowed")}w=d
if(J.on(w,"!")){w=J.ou(w,0,J.an(w)-1)
r=!0}else{r=J.oq(w,"!")
if(r)w=J.ot(w,1)}if(J.an(w)===0)return a0.$2(A.L,'class is only "!"')
v=null
try{v=B.p6(w)}catch(q){a1=C.ac(q)
if(a1 instanceof C.cc){u=a1
return a0.$2(A.ba,u.a)}else throw q}if(J.l4(v,new B.hC()))return a0.$2(A.b9,'empty segment (extra ":" or missing value)')
a1=this.a
p=0
for(;;){if(!(p<J.an(v)-1&&a1.A(0,J.ma(v,p))))break;++p}o=J.or(v,p)
n=J.os(v,0,p)
a1=o.length
if(a1===1){m=D.a.gaT(o)
l=null}else{D.a.t(n,D.a.b7(o,0,a1-2))
a1=o.length
k=a1-2
if(!(k>=0))return C.n(o,k)
m=o[k]
l=D.a.gcn(o)}a1=n.length
if(a1>8)return a0.$2(A.bb,"too many variants (maximum 8)")
k=x.N
j=C.bd(k)
for(i=0;i<n.length;n.length===a1||(0,C.B)(n),++i){h=n[i]
g=$.nQ()
if(!g.b.test(h))return a0.$2(A.bc,'invalid variant "'+h+'"')
if(!j.n(0,h))return a0.$2(A.bd,'repeated variant "'+h+'"')}f=D.c.v(m,"-")
if(f){if(l==null)return a0.$2(A.t,'the "-" sign needs a value (for example "-m:4")')
m=D.c.J(m,1)}if(l!=null&&D.c.v(l,"-")){if(f)return a0.$2(A.t,'double negation ("-m:-4")')
l=D.c.J(l,1)
if(l.length===0||D.c.v(l,"-"))return a0.$2(A.t,"incomplete negative value")
f=!0}a1=$.nO()
if(!a1.b.test(m)){a1=D.c.A(m,"!")?y.b:'invalid utility "'+m+'"'
return a0.$2(A.be,a1)}if(l!=null){e=B.p5(l)
if(e!=null)return a0.$2(e.a,e.b)}return new B.ci(new B.aW(d,m,l,C.d8(n,k),r,f),null)},
$ip4:1}
B.hE.prototype={
el(d){var w=this.a,v=d.a
if(w.M(v))D.a.ep(this.b,new B.hF(d))
w.k(0,v,d)
D.a.n(this.b,d)},
em(d){var w,v
x.m.a(d)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.B)(d),++v)this.el(d[v])},
ci(d){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.B)(w),++u){t=w[u]
if(t.b0(d))return t}return null},
ge2(){var w,v,u,t,s,r,q=C.bd(x.N)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.B)(w),++u){t=w[u]
$label0$0:{if(t instanceof F.ba){s=t.b.gE()
break $label0$0}if(t instanceof F.k){s=t.b.gE()
break $label0$0}if(t instanceof F.ch){r=t.b
s=r
break $label0$0}if(t instanceof F.cg){r=t.b
s=r
break $label0$0}s=E.o
break $label0$0}s=J.a_(s)
while(s.i())q.n(0,C.e(s.gl()))}return q}}
B.eB.prototype={
er(d,e){var w=this.c.a.m(0,d)
w=w==null?null:w.m(0,e)
return w==null?null:w.c},
$ilf:1}
B.j4.prototype={
bG(d){var w,v,u,t=this.a.m(0,d)
if(t==null)return E.b
w=x.N
w=C.z(w,w)
for(v=t.ga4(),v=v.gq(v);v.i();){u=v.gl()
w.k(0,u.b,u.c)}return w},
cG(d){this.a.ct(d.a,new B.j5()).k(0,d.b,d)}}
B.bw.prototype={
K(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof B.bw&&C.ab(v)===C.ab(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gC(d){return C.by(this.a,this.b,this.c,D.e,D.e,D.e)},
j(d){return this.a+"."+this.b+": "+this.c}}
var z=a.updateTypes(["E(ak)","h<ak>()","ci(al,b)","E(V)","v<b,bw>()","d()"])
B.jo.prototype={
$0(){return D.k.e_(1000*this.a.now())},
$S:43}
B.hv.prototype={
$2(d,e){var w,v=x.c
v.a(d)
v.a(e)
w=D.f.Y(d.b,e.b)
return w!==0?w:D.f.Y(d.a,e.a)},
$S:44}
B.j8.prototype={
$2(d,e){var w,v=x.V
v.a(d)
v.a(e)
w=D.k.Y(d.c,e.c)
return w!==0?w:D.f.Y(d.a,e.a)},
$S:45}
B.hy.prototype={
$1(d){var w=x.l.a(d).c
return!(w!=null&&w.length!==0)},
$S:z+0}
B.hz.prototype={
$1(d){var w=x.l.a(d).c
return w!=null&&w.length!==0},
$S:z+0}
B.hA.prototype={
$0(){return C.a([],x.R)},
$S:z+1}
B.hD.prototype={
$2(d,e){return new B.ci(null,new B.hB(B.mt(this.a),e))},
$S:z+2}
B.hC.prototype={
$1(d){return C.e(d).length===0},
$S:8}
B.hF.prototype={
$1(d){return x.M.a(d).a===this.a.a},
$S:z+3}
B.j5.prototype={
$0(){return C.z(x.N,x.S)},
$S:z+4};(function installTearOffs(){var w=a._static_0
w(B,"qS","pp",5)})();(function inheritance(){var w=a.inheritMany
w(C.aD,[B.jo,B.hA,B.j5])
w(C.u,[B.jC,B.aW,B.hr,B.hs,B.ht,B.hu,B.j7,B.ex,B.hx,B.hB,B.ci,B.ey,B.hE,B.eB,B.j4,B.bw])
w(G.A,[B.fO,B.fL,B.fR])
w(C.dA,[B.jB,B.al])
w(C.bt,[B.hv,B.j8,B.hD])
w(C.ai,[B.hy,B.hz,B.hC,B.hF])})()
C.ar(b.typeUniverse,JSON.parse('{"fO":{"A":[],"p":[]},"fL":{"A":[],"p":[]},"fR":{"A":[],"p":[]},"ex":{"p3":[]},"ey":{"p4":[]},"eB":{"lf":[]}}'))
var y={b:'"!" goes at the start or the end of the class'}
var x=(function rtii(){var w=C.o
return{w:w("c<b,b>"),j:w("c<b,v<b,b>>"),m:w("j<V>"),T:w("m<aW>"),R:w("m<ak>"),D:w("m<V>"),U:w("m<+index,rank(d,d)>"),P:w("m<+index,name,width(d,b,y)>"),s:w("m<b>"),L:w("aW"),l:w("ak"),M:w("V"),S:w("bw"),O:w("h<aW>"),y:w("h<ak>"),a:w("h<b>"),A:w("v<b,bw>"),f:w("v<b,b>"),c:w("+index,rank(d,d)"),V:w("+index,name,width(d,b,y)"),F:w("co"),N:w("b"),v:w("~(x)")}})();(function constants(){var w=a.makeConstList
A.mU=new B.hs()
A.aM=new C.cc('"]" without a matching "["',null)
A.aN=new C.cc('unclosed "["',null)
A.L=new B.al(0,"empty")
A.b6=new B.al(1,"tooLong")
A.r=new B.al(10,"invalidValue")
A.b7=new B.al(11,"unsafeValue")
A.b8=new B.al(2,"invalidCharacter")
A.b9=new B.al(3,"emptySegment")
A.ba=new B.al(4,"unbalancedBrackets")
A.bb=new B.al(5,"tooManyVariants")
A.bc=new B.al(6,"invalidVariant")
A.bd=new B.al(7,"duplicateVariant")
A.t=new B.al(8,"invalidNegative")
A.be=new B.al(9,"invalidIdentifier")
A.d4=w(["100","300","500","700","900"],x.s)
A.mb=new C.f("group-"," ")
A.md=new C.f("peer-"," ~ ")
A.eB=w([A.mb,A.md],C.o("m<+(b,b)>"))
A.an={xs:0,sm:1,base:2,lg:3,xl:4,"2xl":5,"3xl":6,"4xl":7,"5xl":8,"6xl":9}
A.f2=new C.c(A.an,["0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.875rem","2.25rem","3rem","3.75rem"],x.w)
A.ae={sans:0,serif:1,mono:2}
A.f6=new C.c(A.ae,['ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif','ui-serif, Georgia, Cambria, "Times New Roman", serif','ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace'],x.w)
A.jl={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6,full:7}
A.fb=new C.c(A.jl,["0px","0.125rem","0.375rem","0.5rem","0.75rem","1rem","1.5rem","9999px"],x.w)
A.lU={thin:0,extralight:1,light:2,normal:3,medium:4,semibold:5,bold:6,extrabold:7,black:8}
A.fF=new C.c(A.lU,["100","200","300","400","500","600","700","800","900"],x.w)
A.ag={gray:0,red:1,orange:2,yellow:3,green:4,teal:5,blue:6,indigo:7,purple:8,pink:9}
A.eb=w(["#f3f4f6","#d1d5db","#6b7280","#374151","#111827"],x.s)
A.dF=w(["#fee2e2","#fca5a5","#ef4444","#b91c1c","#7f1d1d"],x.s)
A.eO=w(["#ffedd5","#fdba74","#f97316","#c2410c","#7c2d12"],x.s)
A.ep=w(["#fef9c3","#fde047","#eab308","#a16207","#713f12"],x.s)
A.dK=w(["#dcfce7","#86efac","#22c55e","#15803d","#14532d"],x.s)
A.d0=w(["#ccfbf1","#5eead4","#14b8a6","#0f766e","#134e4a"],x.s)
A.dE=w(["#dbeafe","#93c5fd","#3b82f6","#1d4ed8","#1e3a8a"],x.s)
A.dg=w(["#e0e7ff","#a5b4fc","#6366f1","#4338ca","#312e81"],x.s)
A.di=w(["#f3e8ff","#d8b4fe","#a855f7","#7e22ce","#581c87"],x.s)
A.ev=w(["#fce7f3","#f9a8d4","#ec4899","#be185d","#831843"],x.s)
A.h5=new C.c(A.ag,[A.eb,A.dF,A.eO,A.ep,A.dK,A.d0,A.dE,A.dg,A.di,A.ev],C.o("c<b,h<b>>"))
A.jL={dark:0,"motion-safe":1,"motion-reduce":2,"contrast-more":3,portrait:4,landscape:5,print:6}
A.hd=new C.c(A.jL,["(prefers-color-scheme: dark)","(prefers-reduced-motion: no-preference)","(prefers-reduced-motion: reduce)","(prefers-contrast: more)","(orientation: portrait)","(orientation: landscape)","print"],x.w)
A.kP={hover:0,focus:1,active:2,visited:3,disabled:4,checked:5,"focus-within":6,"focus-visible":7,first:8,last:9,odd:10,even:11,enabled:12,required:13,optional:14,valid:15,invalid:16,"user-valid":17,"user-invalid":18,"read-only":19,"placeholder-shown":20,autofill:21,indeterminate:22}
A.hj=new C.c(A.kP,[":hover",":focus",":active",":visited",":disabled",":checked",":focus-within",":focus-visible",":first-child",":last-child",":nth-child(odd)",":nth-child(even)",":enabled",":required",":optional",":valid",":invalid",":user-valid",":user-invalid",":read-only",":placeholder-shown",":autofill",":indeterminate"],x.w)
A.lp={placeholder:0,file:1}
A.hR=new C.c(A.lp,["::placeholder","::file-selector-button"],x.w)
A.lX={sm:0,md:1,lg:2,xl:3,"2xl":4}
A.ib=new C.c(A.lX,["640px","768px","1024px","1280px","1536px"],x.w)
A.jJ={sm:0,md:1,lg:2,xl:3,"2xl":4,inner:5,none:6}
A.ie=new C.c(A.jJ,["0 1px 2px 0 rgb(0 0 0 / 0.05)","0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","0 25px 50px -12px rgb(0 0 0 / 0.25)","inset 0 2px 4px 0 rgb(0 0 0 / 0.05)","none"],x.w)
A.jC={"jx-spin":0,"jx-ping":1,"jx-pulse":2,"jx-bounce":3,"jx-fade-in":4,"jx-fade-out":5,"jx-slide-up":6,"jx-slide-down":7,"jx-zoom-in":8}
A.at={to:0}
A.ly={rotate:0}
A.fv=new C.c(A.ly,["360deg"],x.w)
A.hY=new C.c(A.at,[A.fv],x.j)
A.k1={"75%, 100%":0}
A.lB={scale:0,opacity:1}
A.fn=new C.c(A.lB,["2","0"],x.w)
A.fs=new C.c(A.k1,[A.fn],x.j)
A.kJ={"50%":0}
A.aq={opacity:0}
A.fu=new C.c(A.aq,["0.5"],x.w)
A.id=new C.c(A.kJ,[A.fu],x.j)
A.kQ={"0%, 100%":0,"50%":1}
A.af={translate:0,"animation-timing-function":1}
A.iK=new C.c(A.af,["0 -25%","cubic-bezier(0.8, 0, 1, 1)"],x.w)
A.iJ=new C.c(A.af,["0 0","cubic-bezier(0, 0, 0.2, 1)"],x.w)
A.j2=new C.c(A.kQ,[A.iK,A.iJ],x.j)
A.q={from:0}
A.a5=new C.c(A.aq,["0"],x.w)
A.ho=new C.c(A.q,[A.a5],x.j)
A.hX=new C.c(A.at,[A.a5],x.j)
A.ar={opacity:0,translate:1}
A.hD=new C.c(A.ar,["0","0 1rem"],x.w)
A.hq=new C.c(A.q,[A.hD],x.j)
A.hC=new C.c(A.ar,["0","0 -1rem"],x.w)
A.hn=new C.c(A.q,[A.hC],x.j)
A.lj={opacity:0,scale:1}
A.ir=new C.c(A.lj,["0","0.95"],x.w)
A.hp=new C.c(A.q,[A.ir],x.j)
A.ab=new C.c(A.jC,[A.hY,A.fs,A.id,A.j2,A.ho,A.hX,A.hq,A.hn,A.hp],C.o("c<b,v<b,v<b,b>>>"))
A.jP={none:0,tight:1,snug:2,normal:3,relaxed:4,loose:5}
A.j5=new C.c(A.jP,["1","1.25","1.375","1.5","1.625","2"],x.w)
A.m7=new C.f(A.r,'an arbitrary value ends with "]"')
A.m9=new C.f(A.r,"empty arbitrary value")
A.ay=new B.jB(2,"isFalse")})();(function staticFields(){$.jp=0
$.jq=B.qS()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"tm","lW",()=>{B.pr()
return $.jp})
w($,"t8","nN",()=>C.O("\\s+"))
w($,"t9","nO",()=>C.O("^[a-zA-Z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*$"))
w($,"tb","nQ",()=>C.O("^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$"))
w($,"ta","nP",()=>C.O("^(?:#[0-9a-fA-F]{3,8}|[a-zA-Z0-9]+(?:[.\\-/][a-zA-Z0-9]+)*%?)$"))
w($,"t5","nK",()=>B.p2())
w($,"t7","nM",()=>{var v,u,t,s=x.N
s=C.z(s,s)
s.k(0,"0","0px")
s.k(0,"px","1px")
for(v=1;v<=16;++v){u=v*0.25
t=u===D.k.eE(u)?D.f.j(D.k.eB(u)):D.k.j(u)
s.k(0,""+v,t+"rem")}s.k(0,"auto","auto")
return s})
w($,"t6","nL",()=>{var v,u=x.N
u=C.z(u,u)
u.k(0,"0","0")
u.k(0,"5","0.05")
for(v=10;v<=90;v+=10)u.k(0,""+v,C.t(v/100))
u.k(0,"95","0.95")
u.k(0,"100","1")
return u})})()};
(a=>{a["0562SzP3lzh3a8d97G7G4jzflys="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_15.part.js.map
