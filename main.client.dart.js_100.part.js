((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C={
vD(){return Date.now()},
vF(){var w,v
if($.mm!==0)return
$.mm=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.mm=1e6
$.mn=new C.mj(v)},
mj:function mj(d){this.a=d},
my:function my(){this.b=this.a=0},
hH:function hH(d,e){this.a=d
this.b=e},
vb(d,e){var w,v,u=d.length,t=e.length
if(u!==t)return!1
for(w=0;w<u;++w){v=d[w]
if(!(w<t))return B.v(e,w)
if(v!==e[w])return!1}return!0},
bG:function bG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
kb:function kb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
kc:function kc(){},
rc(){var w,v,u,t,s,r=null,q=x.N,p=C.vo(B.F(["colors",$.tJ(),"spacing",$.tL(),"breakpoints",A.o0,"font-family",A.lp,"font-size",A.ll,"font-weight",A.m3,"line-height",A.p_,"border-radius",A.lx,"border-width",E.a7,"opacity",$.tK(),"shadow",A.o6],q,x.f))
p=new C.hh("default",p)
w=x.O
q=new C.ku(B.w(q,w),B.a([],x.D))
v=$.qP()
w=B.a6(v,w)
D.a.p(w,E.aL)
D.a.p(w,E.aZ)
D.a.p(w,E.aW)
D.a.p(w,E.b2)
D.a.p(w,E.aO)
D.a.p(w,E.b8)
D.a.p(w,$.qU())
D.a.p(w,E.b3)
D.a.p(w,$.qT())
D.a.p(w,$.qS())
D.a.p(w,$.qQ())
D.a.p(w,E.b0)
D.a.p(w,E.aX)
D.a.p(w,E.aT)
D.a.p(w,E.b5)
D.a.p(w,$.qR())
D.a.p(w,E.aN)
D.a.p(w,E.aR)
D.a.p(w,E.aY)
D.a.p(w,E.b7)
D.a.p(w,$.qV())
D.a.p(w,A.hG)
q.f3(w)
u=new C.kh(p,q)
t=u.b
s=C.vr(t,r)
q=s.geO()
return new C.kg(u,new C.hd(q),new C.h9(new C.kk(!1)),s)},
kg:function kg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ki:function ki(){},
kh:function kh(d,e){this.b=d
this.c=e},
vr(d,e){var w,v,u,t,s=d.c.bV("breakpoints").gN(),r=B.a6(s,B.r(s).h("n.E"))
s=B.a([],x.P)
for(w=0;w<r.length;++w){v=r[w]
s.push(new B.fe(w,v.a,C.vt(v.b)))}D.a.a7(s,new C.m4())
v=B.a([],x.s)
for(u=s.length,t=0;t<s.length;s.length===u||(0,B.G)(s),++t)v.push(s[t].b)
return new C.m3(d,A.lK,A.o3,v,A.mU,e)},
vt(d){var w,v,u,t=B.X("^([0-9.]+)(px|r?em)?$").b4(D.c.U(d))
if(t==null)return 1/0
w=t.b
if(1>=w.length)return B.v(w,1)
v=w[1]
v.toString
u=G.rn(v)
if(u==null)u=1/0
if(2>=w.length)return B.v(w,2)
w=w[2]
return w==null||w==="px"?u:u*16},
vs(d){return D.c.v(d,"@media ")?D.c.U(D.c.K(d,7)):D.c.U(d)},
m3:function m3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
m4:function m4(){},
h9:function h9(d){this.a=d},
kl:function kl(){},
km:function km(){},
kn:function kn(){},
kk:function kk(d){this.a=d},
aw:function aw(d,e){this.a=d
this.b=e},
kr:function kr(d,e){this.a=d
this.c=e},
dD:function dD(d,e){this.a=d
this.b=e},
vi(d){var w,v,u,t,s,r=B.a([],x.s)
for(w=d.length,v=0,u=0,t=0;t<w;++t){s=d.charCodeAt(t)
if(s===91)++v
else if(s===93){--v
if(v<0)throw B.o(A.cj)}else if(s===58&&v===0){D.a.t(r,D.c.R(d,u,t))
u=t+1}}if(v!==0)throw B.o(A.ck)
D.a.t(r,D.c.K(d,u))
return r},
vh(d){var w,v,u
if(!D.c.v(d,"[")){w=$.tO()
if(w.b.test(d))return null
return new B.e(A.a2,D.c.C(d,"!")?y.b:'invalid value "'+C.rd(d)+'" (use brackets for a free-form value)')}if(!D.c.b2(d,"]"))return A.to
v=C.ra(D.c.R(d,1,d.length-1))
if(D.c.U(v).length===0)return A.tA
u=F.rb(v)
if(u!=null)return new B.e(A.dR,"value rejected: "+u)
return null},
rd(d){return d.length<=80?d:D.c.R(d,0,77)+"\u2026"},
hd:function hd(d){this.a=d},
kt:function kt(d){this.a=d},
ks:function ks(){},
ku:function ku(d,e){this.a=d
this.b=e},
kv:function kv(d){this.a=d},
hh:function hh(d,e){this.a=d
this.c=e},
vn(){return new C.m0(B.w(x.N,x.A))},
vo(d){var w,v,u,t,s,r=C.vn()
for(w=new B.bm(d,B.r(d).h("bm<1,2>")).gu(0);w.j();){v=w.d
for(u=v.b.gN(),u=u.gu(u),t=v.a;u.j();){s=u.gm()
r.d2(new C.cy(t,s.a,s.b))}}return r},
m0:function m0(d){this.a=d},
m1:function m1(){},
cy:function cy(d,e,f){this.a=d
this.b=e
this.c=f},
ra(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=0,t="";u<w;++u){s=d.charCodeAt(u)
if(s===92){r=u+1
r=r<w&&d.charCodeAt(r)===95}else r=!1
if(r){t+=B.ml(95);++u
continue}if(v===0){r=u+4
r=r<=w&&D.c.R(d,u,r).toLowerCase()==="url("}else r=!1
if(r){t+=D.c.R(d,u,u+4)
u+=3
v=1
continue}if(v>0){if(s===40)++v
if(s===41)--v
t+=B.ml(s)
continue}t+=B.ml(s===95?32:s)}return t.charCodeAt(0)==0?t:t},
vd(){var w,v,u,t,s,r=x.N,q=B.F(["transparent","transparent","current","currentColor","black","#000000","white","#ffffff"],r,r)
for(r=A.mD.gN(),w=r.$ti,r=new B.ay(r.a(),w.h("ay<1>")),w=w.c;r.j();){v=r.b
if(v==null)v=w.a(v)
u=v.a
v=v.b
t=J.cm(v)
q.i(0,u,t.k(v,2))
for(u+="-",s=0;s<5;++s)q.i(0,u+A.ib[s],t.k(v,s))}return q}},A,F,E,G
J=c[1]
B=c[0]
D=c[2]
C=a.updateHolder(c[23],C)
A=c[76]
F=c[35]
E=c[72]
G=c[30]
C.my.prototype={
gez(){var w,v=this.b
if(v==null)v=$.mn.$0()
w=v-this.a
if($.qH()===1e6)return w
return w*1000}}
C.hH.prototype={
M(){return"SpellCheck."+this.b}}
C.bG.prototype={
gb5(){var w=this.c
return w!=null&&w.length!==0},
gaG(){var w=this.c
return w!=null&&w.length!==0&&w.length>2&&D.c.v(w,"[")&&D.c.b2(w,"]")},
gek(){if(!this.gaG())return null
var w=this.c
return C.ra(D.c.R(w,1,w.length-1))},
L(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.bG&&B.as(v)===B.as(e)&&v.a===e.a&&v.b===e.b&&v.c==e.c&&v.e===e.e&&v.f===e.f&&C.vb(v.d,e.d)
else w=!0
return w},
gF(d){var w=this
return B.cA(w.a,w.b,w.c,w.e,w.f,B.md(w.d))},
n(d){var w=this
return"JxClassToken(raw: "+w.a+", id: "+w.b+", value: "+B.z(w.c)+", variants: "+B.z(w.d)+", important: "+w.e+", negative: "+w.f+")"}}
C.kb.prototype={
n(d){var w=this
return"JxCompileResult(rules: "+w.b.length+", cssLength: "+w.a.length+", matched: "+w.c.length+", unmatched: "+w.d.length+", duration: "+D.e.ai(w.f.a,1000)+"ms)"}}
C.kc.prototype={}
C.kg.prototype={
cE(d){var w,v,u,t,s,r,q,p,o,n,m=new C.my()
$.qH()
w=$.mn.$0()
m.a=w
m.b=null
v=B.a([],x.T)
w=x.N
u=B.w(w,w)
t=this.b
s=D.c.U(d)
if(s.length!==0)for(w=D.c.bj(s,$.tM()),r=w.length,q=0;q<w.length;w.length===r||(0,B.G)(w),++q){p=t.ej(w[q])
o=p.a
if(o!=null)D.a.t(v,o)
else{n=p.b
u.i(0,n.a,n.c)}}return this.dr(v,m,u)},
dr(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
x.W.a(b0)
x.f.a(b2)
w=B.a([],x.T)
l=x.s
v=B.a([],l)
u=B.a([],l)
l=x.R
t=B.a([],l)
k=x.N
j=B.c9(k)
for(i=new B.bm(b2,B.r(b2).h("bm<1,2>")).gu(0);i.j();){h=i.d
g=h.a
f=h.b
J.am(v,g)
h='Invalid class syntax: "'+g
h=f.length===0?h+'".':h+'" ('+f+")."
J.am(u,h)}for(i=b0.length,h=a9.a,e=h.b,d=a9.d,h=h.c,a0=0;a0<b0.length;b0.length===i||(0,B.G)(b0),++a0){s=b0[a0]
if(!j.t(0,s.a))continue
r=h.cH(s)
if(r==null){J.am(v,s.a)
a1=a9.eb(s)
if(a1!=null)J.am(u,a1)
continue}try{q=B.a([],l)
for(a2=r.aq(s,e),a3=0;a3<1;++a3){p=a2[a3]
J.am(q,d.cz(p,s.d))}o=q
J.ul(t,o)
J.am(w,s)}catch(a4){a2=B.at(a4)
if(a2 instanceof F.er){n=a2
J.am(v,s.a)
J.am(u,'"'+s.a+'" ignored: '+n.a)}else{m=a2
J.am(v,s.a)
J.am(u,'Error while generating "'+s.a+'": '+B.z(m))}}}a5=a9.e8(t)
q=B.a([],l)
D.a.p(q,a5)
a6=a9.c.cW(q)
a7=a9.dj(a5)
if(a7.length===0)a8=a6
else if(a6.length===0)a8=a7
else{q=a6+"\n\n"+a7
a8=q}if(b1.b==null)b1.b=$.mn.$0()
return new C.kb(a8,B.ez(a5,x.l),B.ez(w,x.L),B.ez(v,k),B.ez(u,k),new B.bD(b1.gez()))},
eb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.c,d=e!=null
if(!(d&&e.length!==0)&&a0.d.length===0)return null
s=this.a
r=s.c
q=F.tk(a0.b,r.geI())
p=q.length
s=s.b
o=this.d
n=a0.f
m=a0.e
l=a0.d
k=a0.a
j=0
for(;;){if(!(j<q.length)){t=null
break}A:{i=q[j]
w=new C.bG(k,i,e,l,m,n)
v=r.cH(w)
if(v==null)break A
try{for(h=v.aq(w,s),g=0;g<1;++g){u=h[g]
o.cz(u,w.d)}}catch(f){if(B.at(f) instanceof F.er)break A
else throw f}s=B.a6(l,x.N)
s.push((n?"-":"")+i)
if(d&&e.length!==0)s.push(e)
t=D.a.B(s,":")
break}q.length===p||(0,B.G)(q);++j}if(t==null)return null
e=m?"!":""
return'Unknown class "'+k+'": did you mean "'+t+e+'"?'},
dj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
x.y.a(d)
w=x.N
v=B.c9(w)
u=B.c9(w)
t=B.X("jx-[a-z-]+")
for(w=d.length,s=x.F,r=0;r<d.length;d.length===w||(0,B.G)(d),++r)for(q=d[r].b,p=q.length,o=0;o<q.length;q.length===p||(0,B.G)(q),++o){n=q[o]
m=n.a
if(D.c.v(m,"--jx-"))v.t(0,m)
if(m==="animation")for(m=t.aZ(0,n.b),m=new B.dL(m.a,m.b,m.c);m.j();){l=m.d
k=(l==null?s.a(l):l).b
if(0>=k.length)return B.v(k,0)
if(A.bh.T(k[0])){if(0>=k.length)return B.v(k,0)
k=k[0]
k.toString
u.t(0,k)}}}if(v.a===0&&u.a===0)return""
w=x.s
s=B.a([],w)
for(q=B.qb(v,v.r,v.$ti.c),p=q.$ti.c;q.j();){m=q.d
s.push("@property "+(m==null?p.a(m):m)+' {\n  syntax: "*";\n  inherits: false;\n}')}for(q=B.qb(u,u.r,u.$ti.c),p=q.$ti.c;q.j();){m=q.d
if(m==null)m=p.a(m)
k=B.a(["@keyframes "+m+" {"],w)
for(m=A.bh.k(0,m).gN(),j=m.$ti,m=new B.ay(m.a(),j.h("ay<1>")),j=j.c;m.j();){i=m.b
if(i==null)i=j.a(i)
h=B.a(["  "+i.a+" {"],w)
for(i=i.b.gN(),i=i.gu(i);i.j();){g=i.gm()
h.push("    "+g.a+": "+g.b+";")}h.push("  }")
D.a.p(k,h)}k.push("}")
s.push(D.a.B(k,"\n"))}return D.a.B(s,"\n")},
e8(d){var w,v,u,t,s,r
x.y.a(d)
w=B.a([],x.U)
for(v=this.d,u=0;u<d.length;++u)w.push(new B.fd(u,v.eT(d[u].c)))
D.a.a7(w,new C.ki())
v=B.a([],x.R)
for(t=w.length,s=0;s<w.length;w.length===t||(0,B.G)(w),++s){r=w[s].a
if(!(r>=0&&r<d.length))return B.v(d,r)
v.push(d[r])}return v}}
C.kh.prototype={}
C.m3.prototype={
geO(){var w,v,u=this,t=u.b,s=B.rl(t.gE(),x.N)
for(t=t.gE(),t=t.gu(t);t.j();){w=t.gm()
for(w=["group-"+w,"peer-"+w],v=0;v<2;++v)s.t(0,w[v])}s.p(0,u.c.gE())
s.p(0,u.d)
s.p(0,u.e.gE())
return s},
dZ(d){var w,v,u,t,s
for(w=0;w<2;++w){v=A.kM[w]
u=v.a
t=v.b
if(!D.c.v(d,u))continue
v=u.length
s=this.b.k(0,D.c.K(d,v))
if(s==null)return null
return"."+D.c.R(u,0,v-1)+s+t}return null},
cz(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null
x.a.a(a3)
w=a3.length
if(w===0)return a2
v=a2.d
u=new B.d5(v==null?"":v)
v=a2.e
t=new B.d5(v==null?"":v)
v=x.s
s=B.a([],v)
v=B.a([],v)
r=a2.c
if(r!=null&&r.length!==0)v.push(C.vs(r))
for(r=a0.d,q=a0.b,p=a0.c,o=a0.e,n=a0.a,m=n.c.a,n=n.a,l=a1,k=0;k<w;++k){j=a3[k]
i=q.k(0,j)
h=p.k(0,j)
g=a0.dZ(j)
f=g==null
e=f?o.k(0,j):a1
if(i!=null)u.a+=i
else if(h!=null){if(l!=null)throw B.o(F.c2('Only one pseudo-element per class: "'+j+'" in addition to "'+l+'".'))
l=h}else if(D.a.C(r,j)){f=m.k(0,"breakpoints")
f=f==null?a1:f.k(0,j)
d=f==null?a1:f.c
if(d==null)B.aP(F.c2('Breakpoint "'+j+'" is missing from theme "'+n+'".'))
f="@media (min-width: "+d+")"
D.a.t(v,D.c.v(f,"@media ")?D.c.U(D.c.K(f,7)):D.c.U(f))}else if(!f)t.a+=g
else if(e!=null)D.a.t(D.c.v(e,"(")?v:s,e)
else throw B.o(F.c2('Unsupported variant "'+j+'".'))}if(l!=null)u.a+=l
w=u.a
w=w.length===0?a1:w.charCodeAt(0)==0?w:w
r=t.a
r=r.length===0?a1:r.charCodeAt(0)==0?r:r
if(s.length===0&&v.length===0)v=a1
else{q=B.a6(s,x.N)
D.a.p(q,v)
v="@media "+D.a.B(q," and ")}return new F.aD(a2.a,a2.b,v,w,r)},
eT(d){var w,v,u,t,s,r
if(d==null||d.length===0)return 0
for(w=this.d,v=this.a.c.a,u=0;t=w.length,u<t;++u){t=w[u]
s=v.k(0,"breakpoints")
t=s==null?null:s.k(0,t)
r=t==null?null:t.c
if(r!=null&&d==="@media (min-width: "+r+")")return u+1}return t+1}}
C.h9.prototype={
cW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.y
k.a(d)
if(d.length===0)return""
w=new B.d5("")
v=B.a3(d)
u=v.h("E(1)")
v=v.h("a2<1>")
t=v.h("n.E")
s=B.a6(new B.a2(d,u.a(new C.kl()),v),t)
r=B.a6(new B.a2(d,u.a(new C.km()),v),t)
for(v=s.length,q=0;q<s.length;s.length===v||(0,B.G)(s),++q){this.cw(w,s[q],"","\n"," ")
w.a+="\n"}p=B.w(x.N,k)
for(k=r.length,q=0;q<r.length;r.length===k||(0,B.G)(r),++q){o=r[q]
v=o.c
v.toString
J.am(p.cR(v,new C.kn()),o)}for(k=new B.bm(p,p.$ti.h("bm<1,2>")).gu(0);k.j();){n=k.d
m=n.a
l=n.b
w.a+=m+" {\n"
for(v=J.Z(l);v.j();){u=v.gm()
this.cw(w,u,"  ","\n"," ")
w.a+="\n"}w.a+="}\n"}k=w.a
return D.c.U(k.charCodeAt(0)==0?k:k)},
cw(d,e,f,g,h){var w,v,u,t,s,r,q=f+"  ",p=f+e.gcJ()+h+"{"+g
p=d.a+=p
for(w=e.b,v=w.length,u=h+"!important",t=0;t<v;++t){s=w[t]
r=s.c?u:""
p+=q+s.a+":"+h+s.b+r+";"+g
d.a=p}d.a=p+(f+"}")},
$ive:1}
C.kk.prototype={}
C.aw.prototype={
M(){return"JxParseErrorCode."+this.b}}
C.kr.prototype={
n(d){return'Invalid class "'+this.a+'": '+this.c+"."}}
C.dD.prototype={}
C.hd.prototype={
ej(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.c.U(a2),a0=new C.kt(d),a1=d.length
if(a1===0)return a0.$2(A.aG,"classe vide")
if(a1>512)return a0.$2(A.dQ,"class too long (more than 512 characters)")
for(t=0;t<a1;++t){s=d.charCodeAt(t)
if(s<=32||s===127)return a0.$2(A.dS,"space or control character not allowed")}w=d
if(J.un(w,"!")){w=J.uu(w,0,J.aG(w)-1)
r=!0}else{r=J.uq(w,"!")
if(r)w=J.ut(w,1)}if(J.aG(w)===0)return a0.$2(A.aG,'class is only "!"')
v=null
try{v=C.vi(w)}catch(q){a1=B.at(q)
if(a1 instanceof B.du){u=a1
return a0.$2(A.dU,u.a)}else throw q}if(J.pJ(v,new C.ks()))return a0.$2(A.dT,'empty segment (extra ":" or missing value)')
a1=this.a
p=0
for(;;){if(!(p<J.aG(v)-1&&a1.C(0,J.qW(v,p))))break;++p}o=J.ur(v,p)
n=J.us(v,0,p)
a1=o.length
if(a1===1){m=D.a.gP(o)
l=null}else{D.a.p(n,D.a.bl(o,0,a1-2))
a1=o.length
k=a1-2
if(!(k>=0))return B.v(o,k)
m=o[k]
l=D.a.gb9(o)}a1=n.length
if(a1>8)return a0.$2(A.dV,"too many variants (maximum 8)")
k=x.N
j=B.c9(k)
for(i=0;i<n.length;n.length===a1||(0,B.G)(n),++i){h=n[i]
g=$.tP()
if(!g.b.test(h))return a0.$2(A.dW,'invalid variant "'+h+'"')
if(!j.t(0,h))return a0.$2(A.dX,'repeated variant "'+h+'"')}f=D.c.v(m,"-")
if(f){if(l==null)return a0.$2(A.a3,'the "-" sign needs a value (for example "-m:4")')
m=D.c.K(m,1)}if(l!=null&&D.c.v(l,"-")){if(f)return a0.$2(A.a3,'double negation ("-m:-4")')
l=D.c.K(l,1)
if(l.length===0||D.c.v(l,"-"))return a0.$2(A.a3,"incomplete negative value")
f=!0}a1=$.tN()
if(!a1.b.test(m)){a1=D.c.C(m,"!")?y.b:'invalid utility "'+m+'"'
return a0.$2(A.dY,a1)}if(l!=null){e=C.vh(l)
if(e!=null)return a0.$2(e.a,e.b)}return new C.dD(new C.bG(d,m,l,B.ez(n,k),r,f),null)},
$ivg:1}
C.ku.prototype={
f2(d){var w=this.a,v=d.a
if(w.T(v))D.a.cS(this.b,new C.kv(d))
w.i(0,v,d)
D.a.t(this.b,d)},
f3(d){var w,v
x.m.a(d)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.G)(d),++v)this.f2(d[v])},
cH(d){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.G)(w),++u){t=w[u]
if(t.bb(d))return t}return null},
geI(){var w,v,u,t,s,r,q=B.c9(x.N)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.G)(w),++u){t=w[u]
A:{if(t instanceof F.c4){s=t.b.gE()
break A}if(t instanceof F.q){s=t.b.gE()
break A}if(t instanceof F.dB){r=t.b
s=r
break A}if(t instanceof F.dA){r=t.b
s=r
break A}s=E.f
break A}s=J.Z(s)
while(s.j())q.t(0,B.k(s.gm()))}return q}}
C.hh.prototype={
f7(d,e){var w=this.c.a.k(0,d)
w=w==null?null:w.k(0,e)
return w==null?null:w.c},
$ipW:1}
C.m0.prototype={
bV(d){var w,v,u,t=this.a.k(0,d)
if(t==null)return E.b
w=x.N
w=B.w(w,w)
for(v=t.gaa(),v=v.gu(v);v.j();){u=v.gm()
w.i(0,u.b,u.c)}return w},
d2(d){this.a.cR(d.a,new C.m1()).i(0,d.b,d)}}
C.cy.prototype={
L(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.cy&&B.as(v)===B.as(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gF(d){return B.cA(this.a,this.b,this.c,D.i,D.i,D.i)},
n(d){return this.a+"."+this.b+": "+this.c}}
var z=a.updateTypes(["E(aD)","l<aD>()","dD(aw,b)","E(a9)","t<b,cy>()","d()"])
C.mj.prototype={
$0(){return D.p.eF(1000*this.a.now())},
$S:76}
C.ki.prototype={
$2(d,e){var w,v=x.c
v.a(d)
v.a(e)
w=D.e.S(d.b,e.b)
return w!==0?w:D.e.S(d.a,e.a)},
$S:51}
C.m4.prototype={
$2(d,e){var w,v=x.V
v.a(d)
v.a(e)
w=D.p.S(d.c,e.c)
return w!==0?w:D.e.S(d.a,e.a)},
$S:52}
C.kl.prototype={
$1(d){var w=x.l.a(d).c
return!(w!=null&&w.length!==0)},
$S:z+0}
C.km.prototype={
$1(d){var w=x.l.a(d).c
return w!=null&&w.length!==0},
$S:z+0}
C.kn.prototype={
$0(){return B.a([],x.R)},
$S:z+1}
C.kt.prototype={
$2(d,e){return new C.dD(null,new C.kr(C.rd(this.a),e))},
$S:z+2}
C.ks.prototype={
$1(d){return B.k(d).length===0},
$S:7}
C.kv.prototype={
$1(d){return x.O.a(d).a===this.a.a},
$S:z+3}
C.m1.prototype={
$0(){return B.w(x.N,x.S)},
$S:z+4};(function installTearOffs(){var w=a._static_0
w(C,"xi","vD",5)})();(function inheritance(){var w=a.inheritMany
w(B.aq,[C.mj,C.kn,C.m1])
w(B.y,[C.my,C.bG,C.kb,C.kc,C.kg,C.kh,C.m3,C.h9,C.kk,C.kr,C.dD,C.hd,C.ku,C.hh,C.m0,C.cy])
w(B.aE,[C.hH,C.aw])
w(B.bB,[C.ki,C.m4,C.kt])
w(B.ab,[C.kl,C.km,C.ks,C.kv])})()
B.J(b.typeUniverse,JSON.parse('{"hH":{"ai":[]},"h9":{"ve":[]},"aw":{"ai":[]},"hd":{"vg":[]},"hh":{"pW":[]}}'))
var y={b:'"!" goes at the start or the end of the class'}
var x=(function rtii(){var w=B.j
return{w:w("c<b,b>"),M:w("c<b,l<b>>"),j:w("c<b,t<b,b>>"),m:w("n<a9>"),T:w("m<bG>"),R:w("m<aD>"),D:w("m<a9>"),U:w("m<+index,rank(d,d)>"),P:w("m<+index,name,width(d,b,K)>"),s:w("m<b>"),L:w("bG"),l:w("aD"),O:w("a9"),S:w("cy"),W:w("l<bG>"),y:w("l<aD>"),a:w("l<b>"),A:w("t<b,cy>"),f:w("t<b,b>"),c:w("+index,rank(d,d)"),V:w("+index,name,width(d,b,K)"),F:w("dI"),N:w("b")}})();(function constants(){var w=a.makeConstList
A.yL=new C.kc()
A.cj=new B.du('"]" without a matching "["',null)
A.ck=new B.du('unclosed "["',null)
A.aG=new C.aw(0,"empty")
A.dQ=new C.aw(1,"tooLong")
A.a2=new C.aw(10,"invalidValue")
A.dR=new C.aw(11,"unsafeValue")
A.dS=new C.aw(2,"invalidCharacter")
A.dT=new C.aw(3,"emptySegment")
A.dU=new C.aw(4,"unbalancedBrackets")
A.dV=new C.aw(5,"tooManyVariants")
A.dW=new C.aw(6,"invalidVariant")
A.dX=new C.aw(7,"duplicateVariant")
A.a3=new C.aw(8,"invalidNegative")
A.dY=new C.aw(9,"invalidIdentifier")
A.qk={bcol:0}
A.hS=w(["border-collapse"],x.s)
A.lN=new B.c(A.qk,[A.hS],x.M)
A.qz={collapse:0,separate:1}
A.mf=new B.c(A.qz,["collapse","separate"],x.w)
A.fv=new F.q(A.lN,null,A.mf,E.d,!1,!1,null,null,null,E.b,"border-collapse")
A.rZ={tl:0}
A.hP=w(["table-layout"],x.s)
A.nl=new B.c(A.rZ,[A.hP],x.M)
A.qf={auto:0,fixed:1}
A.mA=new B.c(A.qf,["auto","fixed"],x.w)
A.h1=new F.q(A.nl,null,A.mA,E.d,!1,!1,null,null,null,E.b,"table-layout")
A.qv={cap:0}
A.hK=w(["caption-side"],x.s)
A.mN=new B.c(A.qv,[A.hK],x.M)
A.t_={top:0,bottom:1}
A.nJ=new B.c(A.t_,["top","bottom"],x.w)
A.fP=new F.q(A.mN,null,A.nJ,E.d,!1,!1,null,null,null,E.b,"caption-side")
A.hG=w([A.fv,A.h1,A.fP],x.D)
A.ib=w(["100","300","500","700","900"],x.s)
A.tG=new B.e("group-"," ")
A.u5=new B.e("peer-"," ~ ")
A.kM=w([A.tG,A.u5],B.j("m<+(b,b)>"))
A.bB={xs:0,sm:1,base:2,lg:3,xl:4,"2xl":5,"3xl":6,"4xl":7,"5xl":8,"6xl":9}
A.ll=new B.c(A.bB,["0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.875rem","2.25rem","3rem","3.75rem"],x.w)
A.bo={sans:0,serif:1,mono:2}
A.lp=new B.c(A.bo,['ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif','ui-serif, Georgia, Cambria, "Times New Roman", serif','ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace'],x.w)
A.pk={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6,full:7}
A.lx=new B.c(A.pk,["0px","0.125rem","0.375rem","0.5rem","0.75rem","1rem","1.5rem","9999px"],x.w)
A.p8={hover:0,focus:1,active:2,visited:3,disabled:4,checked:5,"focus-within":6,"focus-visible":7,first:8,last:9,odd:10,even:11,enabled:12,required:13,optional:14,valid:15,invalid:16,"user-valid":17,"user-invalid":18,"read-only":19,"placeholder-shown":20,autofill:21,indeterminate:22,open:23,modal:24}
A.lK=new B.c(A.p8,[":hover",":focus",":active",":visited",":disabled",":checked",":focus-within",":focus-visible",":first-child",":last-child",":nth-child(odd)",":nth-child(even)",":enabled",":required",":optional",":valid",":invalid",":user-valid",":user-invalid",":read-only",":placeholder-shown",":autofill",":indeterminate","[open]",":modal"],x.w)
A.t7={thin:0,extralight:1,light:2,normal:3,medium:4,semibold:5,bold:6,extrabold:7,black:8}
A.m3=new B.c(A.t7,["100","200","300","400","500","600","700","800","900"],x.w)
A.br={gray:0,red:1,orange:2,yellow:3,green:4,teal:5,blue:6,indigo:7,purple:8,pink:9}
A.k7=w(["#f3f4f6","#d1d5db","#6b7280","#374151","#111827"],x.s)
A.iZ=w(["#fee2e2","#fca5a5","#ef4444","#b91c1c","#7f1d1d"],x.s)
A.kZ=w(["#ffedd5","#fdba74","#f97316","#c2410c","#7c2d12"],x.s)
A.kw=w(["#fef9c3","#fde047","#eab308","#a16207","#713f12"],x.s)
A.jt=w(["#dcfce7","#86efac","#22c55e","#15803d","#14532d"],x.s)
A.i6=w(["#ccfbf1","#5eead4","#14b8a6","#0f766e","#134e4a"],x.s)
A.iY=w(["#dbeafe","#93c5fd","#3b82f6","#1d4ed8","#1e3a8a"],x.s)
A.is=w(["#e0e7ff","#a5b4fc","#6366f1","#4338ca","#312e81"],x.s)
A.iw=w(["#f3e8ff","#d8b4fe","#a855f7","#7e22ce","#581c87"],x.s)
A.kE=w(["#fce7f3","#f9a8d4","#ec4899","#be185d","#831843"],x.s)
A.mD=new B.c(A.br,[A.k7,A.iZ,A.kZ,A.kw,A.jt,A.i6,A.iY,A.is,A.iw,A.kE],x.M)
A.pJ={dark:0,"motion-safe":1,"motion-reduce":2,"contrast-more":3,portrait:4,landscape:5,print:6}
A.mU=new B.c(A.pJ,["(prefers-color-scheme: dark)","(prefers-reduced-motion: no-preference)","(prefers-reduced-motion: reduce)","(prefers-contrast: more)","(orientation: portrait)","(orientation: landscape)","print"],x.w)
A.pO={"jx-spin":0,"jx-ping":1,"jx-pulse":2,"jx-bounce":3,"jx-fade-in":4,"jx-fade-out":5,"jx-slide-up":6,"jx-slide-down":7,"jx-zoom-in":8,"jx-slide-in-right":9,"jx-slide-in-left":10,"jx-indeterminate":11}
A.bI={to:0}
A.rJ={rotate:0}
A.lU=new B.c(A.rJ,["360deg"],x.w)
A.nM=new B.c(A.bI,[A.lU],x.j)
A.q5={"75%, 100%":0}
A.rM={scale:0,opacity:1}
A.lL=new B.c(A.rM,["2","0"],x.w)
A.lR=new B.c(A.q5,[A.lL],x.j)
A.qS={"50%":0}
A.bE={opacity:0}
A.lT=new B.c(A.bE,["0.5"],x.w)
A.o5=new B.c(A.qS,[A.lT],x.j)
A.qZ={"0%, 100%":0,"50%":1}
A.bp={translate:0,"animation-timing-function":1}
A.oB=new B.c(A.bp,["0 -25%","cubic-bezier(0.8, 0, 1, 1)"],x.w)
A.oA=new B.c(A.bp,["0 0","cubic-bezier(0, 0, 0.2, 1)"],x.w)
A.oX=new B.c(A.qZ,[A.oB,A.oA],x.j)
A.G={from:0}
A.bc=new B.c(A.bE,["0"],x.w)
A.n4=new B.c(A.G,[A.bc],x.j)
A.nL=new B.c(A.bI,[A.bc],x.j)
A.bF={opacity:0,translate:1}
A.nn=new B.c(A.bF,["0","0 1rem"],x.w)
A.n8=new B.c(A.G,[A.nn],x.j)
A.nm=new B.c(A.bF,["0","0 -1rem"],x.w)
A.n3=new B.c(A.G,[A.nm],x.j)
A.ru={opacity:0,scale:1}
A.oi=new B.c(A.ru,["0","0.95"],x.w)
A.n7=new B.c(A.G,[A.oi],x.j)
A.oS=new B.c(E.W,["100% 0"],x.w)
A.n6=new B.c(A.G,[A.oS],x.j)
A.bl=new B.c(E.W,["-100% 0"],x.w)
A.n5=new B.c(A.G,[A.bl],x.j)
A.oR=new B.c(E.W,["300% 0"],x.w)
A.oa=new B.c(E.bz,[A.bl,A.oR],x.j)
A.bh=new B.c(A.pO,[A.nM,A.lR,A.o5,A.oX,A.n4,A.nL,A.n8,A.n3,A.n7,A.n6,A.n5,A.oa],B.j("c<b,t<b,t<b,b>>>"))
A.tb={sm:0,md:1,lg:2,xl:3,"2xl":4}
A.o0=new B.c(A.tb,["640px","768px","1024px","1280px","1536px"],x.w)
A.pB={placeholder:0,file:1,backdrop:2}
A.o3=new B.c(A.pB,["::placeholder","::file-selector-button","::backdrop"],x.w)
A.pH={sm:0,md:1,lg:2,xl:3,"2xl":4,inner:5,none:6}
A.o6=new B.c(A.pH,["0 1px 2px 0 rgb(0 0 0 / 0.05)","0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","0 25px 50px -12px rgb(0 0 0 / 0.25)","inset 0 2px 4px 0 rgb(0 0 0 / 0.05)","none"],x.w)
A.pR={none:0,tight:1,snug:2,normal:3,relaxed:4,loose:5}
A.p_=new B.c(A.pR,["1","1.25","1.375","1.5","1.625","2"],x.w)
A.to=new B.e(A.a2,'an arbitrary value ends with "]"')
A.tA=new B.e(A.a2,"empty arbitrary value")
A.c2=new C.hH(2,"isFalse")})();(function staticFields(){$.mm=0
$.mn=C.xi()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"yV","qH",()=>{C.vF()
return $.mm})
w($,"yH","tM",()=>B.X("\\s+"))
w($,"yI","tN",()=>B.X("^[a-zA-Z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*$"))
w($,"yK","tP",()=>B.X("^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$"))
w($,"yJ","tO",()=>B.X("^(?:#[0-9a-fA-F]{3,8}|[a-zA-Z0-9]+(?:[.\\-/][a-zA-Z0-9]+)*%?)$"))
w($,"yE","tJ",()=>C.vd())
w($,"yG","tL",()=>{var v,u,t,s=x.N
s=B.w(s,s)
s.i(0,"0","0px")
s.i(0,"px","1px")
for(v=1;v<=16;++v){u=v*0.25
t=u===D.p.fi(u)?D.e.n(D.p.ff(u)):D.p.n(u)
s.i(0,""+v,t+"rem")}s.i(0,"auto","auto")
return s})
w($,"yF","tK",()=>{var v,u=x.N
u=B.w(u,u)
u.i(0,"0","0")
u.i(0,"5","0.05")
for(v=10;v<=90;v+=10)u.i(0,""+v,B.z(v/100))
u.i(0,"95","0.95")
u.i(0,"100","1")
return u})})()};
(a=>{a["t/8tBlHJm4TsNFZcqtPVGxoGlK4="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_100.part.js.map
