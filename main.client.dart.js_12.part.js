((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
nG(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=D.d.P(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
nD(){return Date.now()},
nF(){var w,v
if($.hR!==0)return
$.hR=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.hR=1e6
$.hS=new B.hQ(v)},
hQ:function hQ(d){this.a=d},
i3:function i3(){this.b=this.a=0},
fG:function fG(d,e,f){this.d=d
this.w=e
this.a=f},
fC:function fC(d,e,f){this.e=d
this.x=e
this.a=f},
fJ:function fJ(d,e,f,g,h,i){var _=this
_.Q=d
_.as=e
_.ax=f
_.CW=g
_.dx=h
_.a=i},
i2:function i2(d,e){this.a=d
this.b=e},
c8:function c8(){},
eu:function eu(){},
dm:function dm(d,e){this.a=d
this.$ti=e},
nh(d,e){var w,v,u=d.length,t=e.length
if(u!==t)return!1
for(w=0;w<u;++w){v=d[w]
if(!(w<t))return A.k(e,w)
if(v!==e[w])return!1}return!0},
aQ:function aQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hi:function hi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hj:function hj(){},
hk:function hk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hm:function hm(){},
hl:function hl(d,e){this.b=d
this.c=e},
nr(d,e){var w,v,u,t,s=d.c.bD("breakpoints").gM(),r=A.a_(s,A.j(s).h("e.E"))
s=A.c([],x.P)
for(w=0;w<r.length;++w){v=r[w]
s.push(new A.dG(w,v.a,B.nt(v.b)))}D.a.a4(s,new B.hB())
v=A.c([],x.s)
for(u=s.length,t=0;t<s.length;s.length===u||(0,A.M)(s),++t)v.push(s[t].b)
return new B.hA(d,C.h4,C.hz,v,C.h_,e)},
nt(d){var w,v,u,t=A.V("^([0-9.]+)(px|r?em)?$").aS(D.d.P(d))
if(t==null)return 1/0
w=t.b
if(1>=w.length)return A.k(w,1)
v=w[1]
v.toString
u=B.nG(v)
if(u==null)u=1/0
if(2>=w.length)return A.k(w,2)
w=w[2]
return w==null||w==="px"?u:u*16},
ns(d){return D.d.E(d,"@media ")?D.d.P(D.d.S(d,7)):D.d.P(d)},
hA:function hA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hB:function hB(){},
eo:function eo(d){this.a=d},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
ho:function ho(d){this.a=d},
ah:function ah(d,e){this.a=d
this.b=e},
hs:function hs(d,e){this.a=d
this.c=e},
c7:function c7(d,e){this.a=d
this.b=e},
nn(d){var w,v,u,t,s,r=A.c([],x.s)
for(w=d.length,v=0,u=0,t=0;t<w;++t){s=d.charCodeAt(t)
if(s===91)++v
else if(s===93){--v
if(v<0)throw A.h(C.aD)}else if(s===58&&v===0){D.a.p(r,D.d.T(d,u,t))
u=t+1}}if(v!==0)throw A.h(C.aE)
D.a.p(r,D.d.S(d,u))
return r},
nm(d){var w,v,u
if(!D.d.E(d,"[")){w=$.m7()
if(w.b.test(d))return null
return new A.a6(C.q,D.d.H(d,"!")?y.b:'invalid value "'+B.kP(d)+'" (use brackets for a free-form value)')}if(!D.d.bu(d,"]"))return C.lJ
v=B.kN(D.d.T(d,1,d.length-1))
if(D.d.P(v).length===0)return C.lI
u=G.kO(v)
if(u!=null)return new A.a6(C.aZ,"value rejected: "+u)
return null},
kP(d){return d.length<=80?d:D.d.T(d,0,77)+"\u2026"},
ep:function ep(d){this.a=d},
hu:function hu(d){this.a=d},
ht:function ht(){},
no(){return new B.hv(A.w(x.N,x.M),A.c([],x.D))},
hv:function hv(d,e){this.a=d
this.b=e},
hw:function hw(d){this.a=d},
er:function er(d,e){this.a=d
this.c=e},
np(){return new B.hx(A.w(x.N,x.A))},
nq(d){var w,v,u,t,s,r=B.np()
for(w=new A.am(d,A.j(d).h("am<1,2>")).gq(0);w.i();){v=w.d
for(u=v.b.gM(),u=u.gq(u),t=v.a;u.i();){s=u.gl()
r.cv(new B.bq(t,s.a,s.b))}}return r},
hx:function hx(d){this.a=d},
hy:function hy(){},
bq:function bq(d,e,f){this.a=d
this.b=e
this.c=f},
nC(){return new B.bc(null)},
bc:function bc(d){this.a=d},
eH:function eH(){var _=this
_.d=0
_.e=$
_.c=_.a=null},
hO:function hO(d,e){this.a=d
this.b=e},
hN:function hN(d,e){this.a=d
this.b=e},
hP:function hP(d){this.a=d},
hM:function hM(d,e){this.a=d
this.b=e},
kN(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=0,t="";u<w;++u){s=d.charCodeAt(u)
if(s===92){r=u+1
r=r<w&&d.charCodeAt(r)===95}else r=!1
if(r){t+=A.jM(95);++u
continue}if(v===0){r=u+4
r=r<=w&&D.d.T(d,u,r).toLowerCase()==="url("}else r=!1
if(r){t+=D.d.T(d,u,u+4)
u+=3
v=1
continue}if(v>0){if(s===40)++v
if(s===41)--v
t+=A.jM(s)
continue}t+=A.jM(s===95?32:s)}return t.charCodeAt(0)==0?t:t},
nj(){var w,v,u,t,s,r=x.N,q=A.K(["transparent","transparent","current","currentColor","black","#000000","white","#ffffff"],r,r)
for(r=C.fS.gM(),w=r.$ti,r=new A.ao(r.a(),w.h("ao<1>")),w=w.c;r.i();){v=r.b
if(v==null)v=w.a(v)
u=v.a
v=v.b
t=J.bx(v)
q.k(0,u,t.n(v,2))
for(u+="-",s=0;s<5;++s)q.k(0,u+C.cW[s],t.n(v,s))}return q}},C,H,I,F,K,G,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[5],B)
C=c[17]
H=c[10]
I=c[13]
F=c[15]
K=c[14]
G=c[12]
E=c[18]
B.i3.prototype={
gdF(){var w,v=this.b
if(v==null)v=$.hS.$0()
w=v-this.a
if($.ki()===1e6)return w
return w*1000}}
B.fG.prototype={
D(d){var w=null
return new A.P("pre",w,this.d,w,w,w,this.w,w)}}
B.fC.prototype={
D(d){var w=null,v=x.N
return new A.P("label",w,this.e,w,A.w(v,v),w,this.x,w)}}
B.fJ.prototype={
D(d){var w=this,v=null,u=x.N,t=A.w(u,u),s=D.f.j(w.Q)
t.k(0,"rows",s)
t.k(0,"spellcheck","false")
s=A.w(u,x.g)
s.t(0,F.jb().$1$2$onChange$onInput(v,w.ax,u))
return new A.P("textarea",v,w.CW,v,t,s,w.dx,v)}}
B.i2.prototype={
al(){return"SpellCheck."+this.b}}
B.c8.prototype={}
B.eu.prototype={}
B.dm.prototype={
J(d,e){if(e==null)return!1
return J.jy(e)===A.a8(this)&&this.$ti.b(e)&&e.a===this.a},
gv(d){return A.hK([A.a8(this),this.a])},
j(d){var w=this.$ti,v=w.c,u=""+this.a,t=A.ay(v)===C.m8?"<'"+u+"'>":"<"+u+">"
if(A.a8(this)===A.ay(w))return"["+t+"]"
return"["+A.ay(v).j(0)+" "+t+"]"}}
B.aQ.prototype={
gaT(){var w=this.c
return w!=null&&w.length!==0},
gar(){var w=this.c
return w!=null&&w.length!==0&&w.length>2&&D.d.E(w,"[")&&D.d.bu(w,"]")},
gdr(){if(!this.gar())return null
var w=this.c
return B.kN(D.d.T(w,1,w.length-1))},
J(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof B.aQ&&A.a8(v)===A.a8(e)&&v.a===e.a&&v.b===e.b&&v.c==e.c&&v.e===e.e&&v.f===e.f&&B.nh(v.d,e.d)
else w=!0
return w},
gv(d){var w=this
return A.bs(w.a,w.b,w.c,w.e,w.f,A.hK(w.d))},
j(d){var w=this
return"JxClassToken(raw: "+w.a+", id: "+w.b+", value: "+A.p(w.c)+", variants: "+A.p(w.d)+", important: "+w.e+", negative: "+w.f+")"}}
B.hi.prototype={
j(d){var w=this
return"JxCompileResult(rules: "+w.b.length+", cssLength: "+w.a.length+", matched: "+w.c.length+", unmatched: "+w.d.length+", duration: "+D.f.a9(w.f.a,1000)+"ms)"}}
B.hj.prototype={}
B.hk.prototype={
dv(d){var w,v,u,t,s,r,q,p,o,n,m=new B.i3()
$.ki()
w=$.hS.$0()
m.a=w
m.b=null
v=A.c([],x.T)
w=x.N
u=A.w(w,w)
t=this.b
s=D.d.P(d)
if(s.length!==0)for(w=D.d.cw(s,$.m5()),r=w.length,q=0;q<w.length;w.length===r||(0,A.M)(w),++q){p=t.dq(w[q])
o=p.a
if(o!=null)D.a.p(v,o)
else{n=p.b
u.k(0,n.a,n.c)}}return this.cQ(v,m,u)},
cQ(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
x.O.a(b0)
x.f.a(b2)
w=A.c([],x.T)
l=x.s
v=A.c([],l)
u=A.c([],l)
l=x.R
t=A.c([],l)
k=x.N
j=A.b9(k)
for(i=new A.am(b2,A.j(b2).h("am<1,2>")).gq(0);i.i();){h=i.d
g=h.a
f=h.b
J.aj(v,g)
h='Invalid class syntax: "'+g
h=f.length===0?h+'".':h+'" ('+f+")."
J.aj(u,h)}for(i=b0.length,h=a9.a,e=h.b,d=a9.d,h=h.c,a0=0;a0<b0.length;b0.length===i||(0,A.M)(b0),++a0){s=b0[a0]
if(!j.p(0,s.a))continue
r=h.cb(s)
if(r==null){J.aj(v,s.a)
a1=a9.dh(s)
if(a1!=null)J.aj(u,a1)
continue}try{q=A.c([],l)
for(a2=r.ah(s,e),a3=0;a3<1;++a3){p=a2[a3]
J.aj(q,d.c4(p,s.d))}o=q
J.mC(t,o)
J.aj(w,s)}catch(a4){a2=A.a9(a4)
if(a2 instanceof G.cW){n=a2
J.aj(v,s.a)
J.aj(u,'"'+s.a+'" ignored: '+n.a)}else{m=a2
J.aj(v,s.a)
J.aj(u,'Error while generating "'+s.a+'": '+A.p(m))}}}a5=a9.df(t)
q=A.c([],l)
D.a.t(q,a5)
a6=a9.c.co(q)
a7=a9.cP(a5)
if(a7.length===0)a8=a6
else if(a6.length===0)a8=a7
else{q=a6+"\n\n"+a7
a8=q}if(b1.b==null)b1.b=$.hS.$0()
return new B.hi(a8,A.d0(a5,x.l),A.d0(w,x.L),A.d0(v,k),A.d0(u,k),new A.b1(b1.gdF()))},
dh(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.c,d=e!=null
if(!(d&&e.length!==0)&&a0.d.length===0)return null
s=this.a
r=s.c
q=G.lM(a0.b,r.gdL())
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
w=new B.aQ(k,i,e,l,m,n)
v=r.cb(w)
if(v==null)break c$0
try{for(h=v.ah(w,s),g=0;g<1;++g){u=h[g]
o.c4(u,w.d)}}catch(f){if(A.a9(f) instanceof G.cW)break c$0
else throw f}s=A.a_(l,x.N)
s.push((n?"-":"")+i)
if(d&&e.length!==0)s.push(e)
t=D.a.F(s,":")
break}q.length===p||(0,A.M)(q);++j}if(t==null)return null
e=m?"!":""
return'Unknown class "'+k+'": did you mean "'+t+e+'"?'},
cP(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
x.y.a(d)
w=x.N
v=A.b9(w)
u=A.b9(w)
t=A.V("jx-[a-z-]+")
for(w=d.length,s=x.F,r=0;r<d.length;d.length===w||(0,A.M)(d),++r)for(q=d[r].b,p=q.length,o=0;o<q.length;q.length===p||(0,A.M)(q),++o){n=q[o]
m=n.a
if(D.d.E(m,"--jx-"))v.p(0,m)
if(m==="animation")for(m=t.aL(0,n.b),m=new A.cg(m.a,m.b,m.c);m.i();){l=m.d
k=(l==null?s.a(l):l).b
if(0>=k.length)return A.k(k,0)
if(C.aa.L(k[0])){if(0>=k.length)return A.k(k,0)
k=k[0]
k.toString
u.p(0,k)}}}if(v.a===0&&u.a===0)return""
w=x.s
s=A.c([],w)
for(q=A.jW(v,v.r,v.$ti.c),p=q.$ti.c;q.i();){m=q.d
s.push("@property "+(m==null?p.a(m):m)+' {\n  syntax: "*";\n  inherits: false;\n}')}for(q=A.jW(u,u.r,u.$ti.c),p=q.$ti.c;q.i();){m=q.d
if(m==null)m=p.a(m)
k=A.c(["@keyframes "+m+" {"],w)
for(m=C.aa.n(0,m).gM(),j=m.$ti,m=new A.ao(m.a(),j.h("ao<1>")),j=j.c;m.i();){i=m.b
if(i==null)i=j.a(i)
h=A.c(["  "+i.a+" {"],w)
for(i=i.b.gM(),i=i.gq(i);i.i();){g=i.gl()
h.push("    "+g.a+": "+g.b+";")}h.push("  }")
D.a.t(k,h)}k.push("}")
s.push(D.a.F(k,"\n"))}return D.a.F(s,"\n")},
df(d){var w,v,u,t,s,r
x.y.a(d)
w=A.c([],x.U)
for(v=this.d,u=0;u<d.length;++u)w.push(new A.dF(u,v.dU(d[u].c)))
D.a.a4(w,new B.hm())
v=A.c([],x.R)
for(t=w.length,s=0;s<w.length;w.length===t||(0,A.M)(w),++s){r=w[s].a
if(!(r>=0&&r<d.length))return A.k(d,r)
v.push(d[r])}return v}}
B.hl.prototype={}
B.hA.prototype={
gdP(){var w,v,u=this,t=u.b,s=A.kS(t.gB(),x.N)
for(t=t.gB(),t=t.gq(t);t.i();){w=t.gl()
for(w=["group-"+w,"peer-"+w],v=0;v<2;++v)s.p(0,w[v])}s.t(0,u.c.gB())
s.t(0,u.d)
s.t(0,u.e.gB())
return s},
d6(d){var w,v,u,t,s
for(w=0;w<2;++w){v=C.ep[w]
u=v.a
t=v.b
if(!D.d.E(d,u))continue
v=u.length
s=this.b.n(0,D.d.S(d,v))
if(s==null)return null
return"."+D.d.T(u,0,v-1)+s+t}return null},
c4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null
x.a.a(a3)
w=a3.length
if(w===0)return a2
v=a2.d
u=new A.bI(v==null?"":v)
v=a2.e
t=new A.bI(v==null?"":v)
v=x.s
s=A.c([],v)
v=A.c([],v)
r=a2.c
if(r!=null&&r.length!==0)v.push(B.ns(r))
for(r=a0.d,q=a0.b,p=a0.c,o=a0.e,n=a0.a,m=n.c.a,n=n.a,l=a1,k=0;k<w;++k){j=a3[k]
i=q.n(0,j)
h=p.n(0,j)
g=a0.d6(j)
f=g==null
e=f?o.n(0,j):a1
if(i!=null)u.a+=i
else if(h!=null){if(l!=null)throw A.h(G.b5('Only one pseudo-element per class: "'+j+'" in addition to "'+l+'".'))
l=h}else if(D.a.H(r,j)){f=m.n(0,"breakpoints")
f=f==null?a1:f.n(0,j)
d=f==null?a1:f.c
if(d==null)A.bz(G.b5('Breakpoint "'+j+'" is missing from theme "'+n+'".'))
f="@media (min-width: "+d+")"
D.a.p(v,D.d.E(f,"@media ")?D.d.P(D.d.S(f,7)):D.d.P(f))}else if(!f)t.a+=g
else if(e!=null)D.a.p(D.d.E(e,"(")?v:s,e)
else throw A.h(G.b5('Unsupported variant "'+j+'".'))}if(l!=null)u.a+=l
w=u.a
w=w.length===0?a1:w.charCodeAt(0)==0?w:w
r=t.a
r=r.length===0?a1:r.charCodeAt(0)==0?r:r
if(s.length===0&&v.length===0)v=a1
else{q=A.a_(s,x.N)
D.a.t(q,v)
v="@media "+D.a.F(q," and ")}return new G.ag(a2.a,a2.b,v,w,r)},
dU(d){var w,v,u,t,s,r
if(d==null||d.length===0)return 0
for(w=this.d,v=this.a.c.a,u=0;t=w.length,u<t;++u){t=w[u]
s=v.n(0,"breakpoints")
t=s==null?null:s.n(0,t)
r=t==null?null:t.c
if(r!=null&&d==="@media (min-width: "+r+")")return u+1}return t+1}}
B.eo.prototype={
co(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.y
k.a(d)
if(d.length===0)return""
w=new A.bI("")
v=A.R(d)
u=v.h("C(1)")
v=v.h("a1<1>")
t=v.h("e.E")
s=A.a_(new A.a1(d,u.a(new B.hp()),v),t)
r=A.a_(new A.a1(d,u.a(new B.hq()),v),t)
for(v=s.length,q=0;q<s.length;s.length===v||(0,A.M)(s),++q){this.c3(w,s[q],"","\n"," ")
w.a+="\n"}p=A.w(x.N,k)
for(k=r.length,q=0;q<r.length;r.length===k||(0,A.M)(r),++q){o=r[q]
v=o.c
v.toString
J.aj(p.cl(v,new B.hr()),o)}for(k=new A.am(p,p.$ti.h("am<1,2>")).gq(0);k.i();){n=k.d
m=n.a
l=n.b
w.a+=m+" {\n"
for(v=J.Y(l);v.i();){u=v.gl()
this.c3(w,u,"  ","\n"," ")
w.a+="\n"}w.a+="}\n"}k=w.a
return D.d.P(k.charCodeAt(0)==0?k:k)},
c3(d,e,f,g,h){var w,v,u,t,s,r,q=f+"  ",p=f+e.gcd()+h+"{"+g
p=d.a+=p
for(w=e.b,v=w.length,u=h+"!important",t=0;t<v;++t){s=w[t]
r=s.c?u:""
p+=q+s.a+":"+h+s.b+r+";"+g
d.a=p}d.a=p+(f+"}")},
$ink:1}
B.ho.prototype={}
B.ah.prototype={
al(){return"JxParseErrorCode."+this.b}}
B.hs.prototype={
j(d){return'Invalid class "'+this.a+'": '+this.c+"."}}
B.c7.prototype={}
B.ep.prototype={
dq(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.d.P(a2),a0=new B.hu(d),a1=d.length
if(a1===0)return a0.$2(C.L,"classe vide")
if(a1>512)return a0.$2(C.aY,"class too long (more than 512 characters)")
for(t=0;t<a1;++t){s=d.charCodeAt(t)
if(s<=32||s===127)return a0.$2(C.b_,"space or control character not allowed")}w=d
if(J.mE(w,"!")){w=J.mL(w,0,J.ak(w)-1)
r=!0}else{r=J.mH(w,"!")
if(r)w=J.mK(w,1)}if(J.ak(w)===0)return a0.$2(C.L,'class is only "!"')
v=null
try{v=B.nn(w)}catch(q){a1=A.a9(q)
if(a1 instanceof A.c1){u=a1
return a0.$2(C.b1,u.a)}else throw q}if(J.jv(v,new B.ht()))return a0.$2(C.b0,'segment vide (":" en trop ou valeur manquante)')
a1=this.a
p=0
for(;;){if(!(p<J.ak(v)-1&&a1.H(0,J.kx(v,p))))break;++p}o=J.mI(v,p)
n=J.mJ(v,0,p)
a1=o.length
if(a1===1){m=D.a.gbv(o)
l=null}else{D.a.t(n,D.a.b4(o,0,a1-2))
a1=o.length
k=a1-2
if(!(k>=0))return A.k(o,k)
m=o[k]
l=D.a.gcg(o)}a1=n.length
if(a1>8)return a0.$2(C.b2,"trop de variantes (maximum 8)")
k=x.N
j=A.b9(k)
for(i=0;i<n.length;n.length===a1||(0,A.M)(n),++i){h=n[i]
g=$.m8()
if(!g.b.test(h))return a0.$2(C.b3,'invalid variant "'+h+'"')
if(!j.p(0,h))return a0.$2(C.b4,'repeated variant "'+h+'"')}f=D.d.E(m,"-")
if(f){if(l==null)return a0.$2(C.r,'le signe "-" exige une valeur (ex. "-m:4")')
m=D.d.S(m,1)}if(l!=null&&D.d.E(l,"-")){if(f)return a0.$2(C.r,'double negation ("-m:-4")')
l=D.d.S(l,1)
if(l.length===0||D.d.E(l,"-"))return a0.$2(C.r,"incomplete negative value")
f=!0}a1=$.m6()
if(!a1.b.test(m)){a1=D.d.H(m,"!")?y.b:'invalid utility "'+m+'"'
return a0.$2(C.b5,a1)}if(l!=null){e=B.nm(l)
if(e!=null)return a0.$2(e.a,e.b)}return new B.c7(new B.aQ(d,m,l,A.d0(n,k),r,f),null)},
$inl:1}
B.hv.prototype={
e3(d){var w=this.a,v=d.a
if(w.L(v))D.a.e7(this.b,new B.hw(d))
w.k(0,v,d)
D.a.p(this.b,d)},
e4(d){var w,v
x.m.a(d)
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.M)(d),++v)this.e3(d[v])},
cb(d){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(t.aY(d))return t}return null},
gdL(){var w,v,u,t,s,r,q=A.b9(x.N)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
$label0$0:{if(t instanceof G.b6){s=t.b.gB()
break $label0$0}if(t instanceof G.i){s=t.b.gB()
break $label0$0}if(t instanceof G.c6){r=t.b
s=r
break $label0$0}if(t instanceof G.c5){r=t.b
s=r
break $label0$0}s=E.u
break $label0$0}s=J.Y(s)
while(s.i())q.p(0,A.x(s.gl()))}return q}}
B.er.prototype={
e9(d,e){var w=this.c.a.n(0,d)
w=w==null?null:w.n(0,e)
return w==null?null:w.c},
$ijH:1}
B.hx.prototype={
bD(d){var w,v,u,t=this.a.n(0,d)
if(t==null)return E.b
w=x.N
w=A.w(w,w)
for(v=t.ga2(),v=v.gq(v);v.i();){u=v.gl()
w.k(0,u.b,u.c)}return w},
cv(d){this.a.cl(d.a,new B.hy()).k(0,d.b,d)}}
B.bq.prototype={
J(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof B.bq&&A.a8(v)===A.a8(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gv(d){return A.bs(this.a,this.b,this.c,D.e,D.e,D.e)},
j(d){return this.a+"."+this.b+": "+this.c}}
B.bc.prototype={
an(){return new B.eH()}}
B.eH.prototype={
gc8(){var w=this.e
return w===$?this.e=D.a.gbv(C.n).a:w},
D(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="flex fd:col gap:2",d=$.mb().dv(g.gc8()),a0=x.s,a1=A.c([],a0)
for(w=d.b,v=w.length,u=0;u<v;++u){t=w[u]
s=t.c
if(!(s!=null&&s.length!==0)){s=t.d
s=!(s!=null&&s.length!==0)}else s=!1
if(s)for(s=t.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.M)(s),++q){p=s[q]
a1.push(p.a+": "+p.b)}}o=D.a.F(a1,"; ")
a1=x.N
w=A.K(["role","group","aria-label","Examples"],a1,a1)
s=x.i
r=A.c([],s)
for(n=H.kH(C.n,0,x.v),m=J.Y(n.a),l=n.b,n=new H.b2(m,l,A.j(n).h("b2<1>"));n.i();){k={}
j=n.c
j=j>=0?new A.a6(l+j,m.gl()):A.bz(A.cP())
k.a=k.b=null
i=k.b=j.a
h=j.b
k.a=h
j=A.c(["px:4 py:2 mnh:[44px] br:md fs:sm fw:semibold tr:all focus-visible:ol:2 focus-visible:olc:beam focus-visible:olo:4"],a0)
if(i===g.d)j.push("c:white bg:brand")
else j.push("c:haze bg:[rgba(255,255,255,0.06)] hover:c:snow hover:bg:[rgba(255,255,255,0.1)]")
r.push(new K.dW(new B.hO(k,g),D.a.F(j," "),A.K(["aria-pressed",""+(i===g.d)],a1,a1),A.c([new A.z(h.b,f)],s),f))}a0=F.a7(r,w,"flex wrap gap:2 mb:5",f)
w=F.bl(A.c([new A.z("Classes",f)],s),f,"fs:sm fw:semibold c:snow")
r=g.d
r=A.c([w,new B.fJ(3,C.lZ,new B.hP(g),"w:full px:4 py:3 br:lg c:snow bg:[#07090D] bw:1 bc:edge app:none caret:beam placeholder:c:[#6B7385] tr:all focus:ol:none focus:bc:brand focus:ring:4 ringc:[rgba(59,108,240,0.25)] ff:code fs:sm fsz:content rsz:none mnh:[6rem] mh:[12rem]",A.c([new A.z(g.gc8(),f)],s),new B.dm(r,x.h))],s)
w=F.bl(A.c([new A.z("Generated CSS",f)],s),f,"fw:semibold c:snow")
n=v===1?"":"s"
n=F.a7(A.c([w,F.bl(A.c([new A.z(""+v+" rule"+n,f)],s),f,"c:haze")],s),f,"flex jc:between fs:sm",f)
w=d.a
w=A.c([n,new B.fG("ff:code fs:sm lh:relaxed p:5 br:xl ov:auto ws:pre bg:[#07090D] bw:1 bc:edge c:[#C9D1DE] mh:[18rem]",A.c([I.lN(A.c([new A.z(w.length===0?"/* No class recognized */":w,f)],s),f)],s),f)],s)
v=d.e
n=v.length
if(n!==0){m=A.K(["role","status"],a1,a1)
l=A.c([],s)
for(u=0;u<n;++u)l.push(new G.ct(f,A.c([new A.z(v[u],f)],s),f))
w.push(G.q4(l,m,"flex fd:col gap:1 fs:sm c:bang"))}w=F.a7(A.c([new B.fC(e,r,f),F.a7(w,f,e,f)],s),f,"flex fd:col gap:5 p:5 md:p:6",f)
v=F.bl(A.c([new A.z("Preview",f)],s),f,"absolute top:4 left:5 fs:sm c:haze")
a1=A.K(["style",o],a1,a1)
r=g.d
if(!(r>=0&&r<6))return A.k(C.n,r)
return F.a7(A.c([a0,F.a7(A.c([w,F.a7(A.c([v,F.a7(A.c([new A.z(C.n[r].c,f)],s),a1,f,f)],s),f,"relative flex ai:center jc:center p:8 mnh:[18rem] bwt:1 lg:bwt:0 lg:bwl:1 bc:edge bg:[radial-gradient(rgba(155,164,180,0.18)_1px,transparent_1px)] bgs:[18px_18px]",f)],s),f,"grid cols:1 lg:cols:2 br:2xl bw:1 bc:edge bg:deep ov:hidden",f)],s),f,f,f)}}
var z=a.updateTypes(["C(ag)","f<ag>()","c7(ah,a)","C(S)","r<a,bq>()","d()"])
B.hQ.prototype={
$0(){return D.k.dI(1000*this.a.now())},
$S:42}
B.hm.prototype={
$2(d,e){var w,v=x.c
v.a(d)
v.a(e)
w=D.f.Y(d.b,e.b)
return w!==0?w:D.f.Y(d.a,e.a)},
$S:43}
B.hB.prototype={
$2(d,e){var w,v=x.V
v.a(d)
v.a(e)
w=D.k.Y(d.c,e.c)
return w!==0?w:D.f.Y(d.a,e.a)},
$S:44}
B.hp.prototype={
$1(d){var w=x.l.a(d).c
return!(w!=null&&w.length!==0)},
$S:z+0}
B.hq.prototype={
$1(d){var w=x.l.a(d).c
return w!=null&&w.length!==0},
$S:z+0}
B.hr.prototype={
$0(){return A.c([],x.R)},
$S:z+1}
B.hu.prototype={
$2(d,e){return new B.c7(null,new B.hs(B.kP(this.a),e))},
$S:z+2}
B.ht.prototype={
$1(d){return A.x(d).length===0},
$S:7}
B.hw.prototype={
$1(d){return x.M.a(d).a===this.a.a},
$S:z+3}
B.hy.prototype={
$0(){return A.w(x.N,x.S)},
$S:z+4}
B.hO.prototype={
$0(){var w=this.b
return w.a3(new B.hN(this.a,w))},
$S:0}
B.hN.prototype={
$0(){var w=this.b,v=this.a
w.d=v.b
w.e=v.a.a},
$S:0}
B.hP.prototype={
$1(d){var w=this.a
return w.a3(new B.hM(w,A.x(d)))},
$S:4}
B.hM.prototype={
$0(){return this.a.e=this.b},
$S:0};(function installTearOffs(){var w=a._static_0
w(B,"p4","nD",5)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.aP,[B.hQ,B.hr,B.hy,B.hO,B.hN,B.hM])
w(A.q,[B.i3,B.c8,B.aQ,B.hi,B.hj,B.hk,B.hl,B.hA,B.eo,B.ho,B.hs,B.c7,B.ep,B.hv,B.er,B.hx,B.bq])
w(F.y,[B.fG,B.fC,B.fJ])
w(A.dt,[B.i2,B.ah])
v(B.eu,B.c8)
v(B.dm,B.eu)
w(A.bD,[B.hm,B.hB,B.hu])
w(A.aq,[B.hp,B.hq,B.ht,B.hw,B.hP])
v(B.bc,F.a3)
v(B.eH,F.X)})()
A.aw(b.typeUniverse,JSON.parse('{"fG":{"y":[],"n":[]},"fC":{"y":[],"n":[]},"fJ":{"y":[],"n":[]},"eu":{"c8":[]},"dm":{"c8":[]},"eo":{"nk":[]},"ep":{"nl":[]},"er":{"jH":[]},"bc":{"a3":[],"n":[]},"eH":{"X":["bc"],"X.T":"bc"}}'))
var y={b:'"!" goes at the start or the end of the class'}
var x=(function rtii(){var w=A.t
return{w:w("b<a,a>"),j:w("b<a,r<a,a>>"),m:w("e<S>"),i:w("l<n>"),T:w("l<aQ>"),R:w("l<ag>"),D:w("l<S>"),U:w("l<+index,rank(d,d)>"),P:w("l<+index,name,width(d,a,v)>"),s:w("l<a>"),L:w("aQ"),l:w("ag"),M:w("S"),S:w("bq"),O:w("f<aQ>"),y:w("f<ag>"),a:w("f<a>"),A:w("r<a,bq>"),f:w("r<a,a>"),c:w("+index,rank(d,d)"),v:w("+classes,label,preview(a,a,a)"),V:w("+index,name,width(d,a,v)"),F:w("cd"),N:w("a"),h:w("dm<d>"),g:w("~(u)")}})();(function constants(){var w=a.makeConstList
C.mf=new B.hj()
C.aD=new A.c1('"]" without a matching "["',null)
C.aE=new A.c1('unclosed "["',null)
C.L=new B.ah(0,"empty")
C.aY=new B.ah(1,"tooLong")
C.q=new B.ah(10,"invalidValue")
C.aZ=new B.ah(11,"unsafeValue")
C.b_=new B.ah(2,"invalidCharacter")
C.b0=new B.ah(3,"emptySegment")
C.b1=new B.ah(4,"unbalancedBrackets")
C.b2=new B.ah(5,"tooManyVariants")
C.b3=new B.ah(6,"invalidVariant")
C.b4=new B.ah(7,"duplicateVariant")
C.r=new B.ah(8,"invalidNegative")
C.b5=new B.ah(9,"invalidIdentifier")
C.lT=new A.aV("px:6 py:3 br:lg bg:teal c:white fw:semibold hover:bg:teal-700 focus-visible:ring:2","Button","Confirm")
C.lS=new A.aV("p:6 br:xl bg:white c:gray-900 sh:xl mw:[16rem] lh:relaxed","Card","A card compiled by JX")
C.lQ=new A.aV("px:4 py:3 br:md bw:1 bc:gray-300 bg:white c:gray-700 w:[16rem] focus:ring:4 ringc:blue-300","Input","Your email")
C.lR=new A.aV("px:6 py:3 br:full fw:bold c:white grad:to-r from:blue via:teal to:teal-300","Gradient","New")
C.lU=new A.aV("p:6 br:2xl c:white bg:[rgba(255,255,255,0.12)] bblur:lg bw:1 bc:[rgba(255,255,255,0.3)]","Glass","Frosted glass")
C.lM=new A.aV("fs:4xl fw:extrabold ls:tight c:teal-300 md:fs:6xl","Heading","Hello JX")
C.n=w([C.lT,C.lS,C.lQ,C.lR,C.lU,C.lM],A.t("l<+classes,label,preview(a,a,a)>"))
C.cW=w(["100","300","500","700","900"],x.s)
C.lK=new A.a6("group-"," ")
C.lL=new A.a6("peer-"," ~ ")
C.ep=w([C.lK,C.lL],A.t("l<+(a,a)>"))
C.kB={xs:0,sm:1,base:2,lg:3,xl:4,"2xl":5,"3xl":6,"4xl":7,"5xl":8,"6xl":9}
C.eR=new A.b(C.kB,["0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.875rem","2.25rem","3rem","3.75rem"],x.w)
C.iU={sans:0,serif:1,mono:2}
C.eV=new A.b(C.iU,['ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif','ui-serif, Georgia, Cambria, "Times New Roman", serif','ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace'],x.w)
C.j2={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6,full:7}
C.eZ=new A.b(C.j2,["0px","0.125rem","0.375rem","0.5rem","0.75rem","1rem","1.5rem","9999px"],x.w)
C.lt={thin:0,extralight:1,light:2,normal:3,medium:4,semibold:5,bold:6,extrabold:7,black:8}
C.fr=new A.b(C.lt,["100","200","300","400","500","600","700","800","900"],x.w)
C.ja={gray:0,red:1,orange:2,yellow:3,green:4,teal:5,blue:6,indigo:7,purple:8,pink:9}
C.e0=w(["#f3f4f6","#d1d5db","#6b7280","#374151","#111827"],x.s)
C.dv=w(["#fee2e2","#fca5a5","#ef4444","#b91c1c","#7f1d1d"],x.s)
C.eC=w(["#ffedd5","#fdba74","#f97316","#c2410c","#7c2d12"],x.s)
C.ed=w(["#fef9c3","#fde047","#eab308","#a16207","#713f12"],x.s)
C.dA=w(["#dcfce7","#86efac","#22c55e","#15803d","#14532d"],x.s)
C.cS=w(["#ccfbf1","#5eead4","#14b8a6","#0f766e","#134e4a"],x.s)
C.du=w(["#dbeafe","#93c5fd","#3b82f6","#1d4ed8","#1e3a8a"],x.s)
C.d6=w(["#e0e7ff","#a5b4fc","#6366f1","#4338ca","#312e81"],x.s)
C.d8=w(["#f3e8ff","#d8b4fe","#a855f7","#7e22ce","#581c87"],x.s)
C.ej=w(["#fce7f3","#f9a8d4","#ec4899","#be185d","#831843"],x.s)
C.fS=new A.b(C.ja,[C.e0,C.dv,C.eC,C.ed,C.dA,C.cS,C.du,C.d6,C.d8,C.ej],A.t("b<a,f<a>>"))
C.jp={dark:0,"motion-safe":1,"motion-reduce":2,"contrast-more":3,portrait:4,landscape:5,print:6}
C.h_=new A.b(C.jp,["(prefers-color-scheme: dark)","(prefers-reduced-motion: no-preference)","(prefers-reduced-motion: reduce)","(prefers-contrast: more)","(orientation: portrait)","(orientation: landscape)","print"],x.w)
C.kq={hover:0,focus:1,active:2,visited:3,disabled:4,checked:5,"focus-within":6,"focus-visible":7,first:8,last:9,odd:10,even:11,enabled:12,required:13,optional:14,valid:15,invalid:16,"user-valid":17,"user-invalid":18,"read-only":19,"placeholder-shown":20,autofill:21,indeterminate:22}
C.h4=new A.b(C.kq,[":hover",":focus",":active",":visited",":disabled",":checked",":focus-within",":focus-visible",":first-child",":last-child",":nth-child(odd)",":nth-child(even)",":enabled",":required",":optional",":valid",":invalid",":user-valid",":user-invalid",":read-only",":placeholder-shown",":autofill",":indeterminate"],x.w)
C.l0={placeholder:0,file:1}
C.hz=new A.b(C.l0,["::placeholder","::file-selector-button"],x.w)
C.lw={sm:0,md:1,lg:2,xl:3,"2xl":4}
C.hS=new A.b(C.lw,["640px","768px","1024px","1280px","1536px"],x.w)
C.jm={sm:0,md:1,lg:2,xl:3,"2xl":4,inner:5,none:6}
C.hV=new A.b(C.jm,["0 1px 2px 0 rgb(0 0 0 / 0.05)","0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","0 25px 50px -12px rgb(0 0 0 / 0.25)","inset 0 2px 4px 0 rgb(0 0 0 / 0.05)","none"],x.w)
C.ji={"jx-spin":0,"jx-ping":1,"jx-pulse":2,"jx-bounce":3,"jx-fade-in":4,"jx-fade-out":5,"jx-slide-up":6,"jx-slide-down":7,"jx-zoom-in":8}
C.am={to:0}
C.l7={rotate:0}
C.fh=new A.b(C.l7,["360deg"],x.w)
C.hG=new A.b(C.am,[C.fh],x.j)
C.jE={"75%, 100%":0}
C.la={scale:0,opacity:1}
C.f9=new A.b(C.la,["2","0"],x.w)
C.fe=new A.b(C.jE,[C.f9],x.j)
C.kk={"50%":0}
C.aj={opacity:0}
C.fg=new A.b(C.aj,["0.5"],x.w)
C.hU=new A.b(C.kk,[C.fg],x.j)
C.kr={"0%, 100%":0,"50%":1}
C.ad={translate:0,"animation-timing-function":1}
C.iq=new A.b(C.ad,["0 -25%","cubic-bezier(0.8, 0, 1, 1)"],x.w)
C.ip=new A.b(C.ad,["0 0","cubic-bezier(0, 0, 0.2, 1)"],x.w)
C.iJ=new A.b(C.kr,[C.iq,C.ip],x.j)
C.p={from:0}
C.a4=new A.b(C.aj,["0"],x.w)
C.h8=new A.b(C.p,[C.a4],x.j)
C.hF=new A.b(C.am,[C.a4],x.j)
C.ak={opacity:0,translate:1}
C.hm=new A.b(C.ak,["0","0 1rem"],x.w)
C.ha=new A.b(C.p,[C.hm],x.j)
C.hl=new A.b(C.ak,["0","0 -1rem"],x.w)
C.h7=new A.b(C.p,[C.hl],x.j)
C.kV={opacity:0,scale:1}
C.i5=new A.b(C.kV,["0","0.95"],x.w)
C.h9=new A.b(C.p,[C.i5],x.j)
C.aa=new A.b(C.ji,[C.hG,C.fe,C.hU,C.iJ,C.h8,C.hF,C.ha,C.h7,C.h9],A.t("b<a,r<a,r<a,a>>>"))
C.jt={none:0,tight:1,snug:2,normal:3,relaxed:4,loose:5}
C.iM=new A.b(C.jt,["1","1.25","1.375","1.5","1.625","2"],x.w)
C.lI=new A.a6(C.q,"valeur arbitraire vide")
C.lJ=new A.a6(C.q,'une valeur arbitraire se termine par "]"')
C.lZ=new B.i2(2,"isFalse")
C.m8=A.au("a")})();(function staticFields(){$.hR=0
$.hS=B.p4()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"qt","ki",()=>{B.nF()
return $.hR})
w($,"qi","m5",()=>A.V("\\s+"))
w($,"qj","m6",()=>A.V("^[a-zA-Z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*$"))
w($,"ql","m8",()=>A.V("^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$"))
w($,"qk","m7",()=>A.V("^(?:#[0-9a-fA-F]{3,8}|[a-zA-Z0-9]+(?:[.\\-/][a-zA-Z0-9]+)*%?)$"))
w($,"qf","m2",()=>B.nj())
w($,"qh","m4",()=>{var v,u,t,s=x.N
s=A.w(s,s)
s.k(0,"0","0px")
s.k(0,"px","1px")
for(v=1;v<=16;++v){u=v*0.25
t=u===D.k.ek(u)?D.f.j(D.k.ei(u)):D.k.j(u)
s.k(0,""+v,t+"rem")}s.k(0,"auto","auto")
return s})
w($,"qg","m3",()=>{var v,u=x.N
u=A.w(u,u)
u.k(0,"0","0")
u.k(0,"5","0.05")
for(v=10;v<=90;v+=10)u.k(0,""+v,A.p(v/100))
u.k(0,"95","0.95")
u.k(0,"100","1")
return u})
w($,"qq","mb",()=>{var v,u,t,s,r,q=null,p=B.nq(A.K(["colors",$.m2(),"spacing",$.m4(),"breakpoints",C.hS,"font-family",C.eV,"font-size",C.eR,"font-weight",C.fr,"line-height",C.iM,"border-radius",C.eZ,"border-width",E.v,"opacity",$.m3(),"shadow",C.hV],x.N,x.f))
p=new B.er("default",p)
v=B.no()
u=A.et($.kq(),!0,x.M)
D.a.t(u,E.M)
D.a.t(u,E.W)
D.a.t(u,E.T)
D.a.t(u,E.Y)
D.a.t(u,E.O)
D.a.t(u,E.a0)
D.a.t(u,$.kv())
D.a.t(u,E.Z)
D.a.t(u,$.ku())
D.a.t(u,$.kt())
D.a.t(u,$.kr())
D.a.t(u,E.X)
D.a.t(u,E.U)
D.a.t(u,E.S)
D.a.t(u,E.a1)
D.a.t(u,$.ks())
D.a.t(u,E.N)
D.a.t(u,E.R)
D.a.t(u,E.V)
D.a.t(u,E.a_)
D.a.t(u,$.kw())
v.e4(u)
t=new B.hl(p,v)
s=t.b
r=B.nr(s,q)
p=r.gdP()
return new B.hk(t,new B.ep(p),new B.eo(new B.ho(!1)),r)})})()};
(a=>{a["CEbyFsPuANcAiasrwQD/ZSZEX7M="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_12.part.js.map
