((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C={
w_(){return Date.now()},
w8(){var w,v
if($.mx!==0)return
$.mx=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.mx=1e6
$.my=new C.mu(v)},
mu:function mu(d){this.a=d},
mU:function mU(){this.b=this.a=0},
hQ:function hQ(d,e){this.a=d
this.b=e},
vy(d,e){var w,v,u=d.length,t=e.length
if(u!==t)return!1
for(w=0;w<u;++w){v=d[w]
if(!(w<t))return B.v(e,w)
if(v!==e[w])return!1}return!0},
bI:function bI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
kn:function kn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ko:function ko(){},
rA(){var w,v,u,t,s,r=null,q=x.N,p=C.vL(B.B(["colors",$.u4(),"spacing",$.u6(),"breakpoints",A.o5,"font-family",A.lt,"font-size",A.lp,"font-weight",A.m7,"line-height",A.p3,"border-radius",A.lB,"border-width",E.aa,"opacity",$.u5(),"shadow",A.ob],q,x.f))
p=new C.hq("default",p)
w=x.O
q=new C.kG(B.x(q,w),B.a([],x.D))
v=$.rb()
w=B.a7(v,w)
D.a.n(w,E.aL)
D.a.n(w,E.aZ)
D.a.n(w,E.aW)
D.a.n(w,E.b2)
D.a.n(w,E.aO)
D.a.n(w,E.b8)
D.a.n(w,$.rg())
D.a.n(w,E.b3)
D.a.n(w,$.rf())
D.a.n(w,$.re())
D.a.n(w,$.rc())
D.a.n(w,E.b0)
D.a.n(w,E.aX)
D.a.n(w,E.aT)
D.a.n(w,E.b5)
D.a.n(w,$.rd())
D.a.n(w,E.aN)
D.a.n(w,E.aR)
D.a.n(w,E.aY)
D.a.n(w,E.b7)
D.a.n(w,$.rh())
D.a.n(w,A.hF)
q.fn(w)
u=new C.kt(p,q)
t=u.b
s=C.vO(t,r)
q=s.gf7()
return new C.ks(u,new C.hm(q),new C.hi(new C.kw(!1)),s)},
ks:function ks(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ku:function ku(){},
kt:function kt(d,e){this.b=d
this.c=e},
vO(d,e){var w,v,u,t,s=d.c.bX("breakpoints").gO(),r=B.a7(s,B.r(s).h("o.E"))
s=B.a([],x.P)
for(w=0;w<r.length;++w){v=r[w]
s.push(new B.fl(w,v.a,C.vQ(v.b)))}D.a.a5(s,new C.mg())
v=B.a([],x.s)
for(u=s.length,t=0;t<s.length;s.length===u||(0,B.G)(s),++t)v.push(s[t].b)
return new C.mf(d,A.lO,A.o8,v,A.mY,e)},
vQ(d){var w,v,u,t=B.Y("^([0-9.]+)(px|r?em)?$").b8(D.c.P(d))
if(t==null)return 1/0
w=t.b
if(1>=w.length)return B.v(w,1)
v=w[1]
v.toString
u=G.rL(v)
if(u==null)u=1/0
if(2>=w.length)return B.v(w,2)
w=w[2]
return w==null||w==="px"?u:u*16},
vP(d){return D.c.B(d,"@media ")?D.c.P(D.c.I(d,7)):D.c.P(d)},
mf:function mf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mg:function mg(){},
hi:function hi(d){this.a=d},
kx:function kx(){},
ky:function ky(){},
kz:function kz(){},
kw:function kw(d){this.a=d},
az:function az(d,e){this.a=d
this.b=e},
kD:function kD(d,e){this.a=d
this.c=e},
dH:function dH(d,e){this.a=d
this.b=e},
vF(d){var w,v,u,t,s,r=B.a([],x.s)
for(w=d.length,v=0,u=0,t=0;t<w;++t){s=d.charCodeAt(t)
if(s===91)++v
else if(s===93){--v
if(v<0)throw B.n(A.cj)}else if(s===58&&v===0){D.a.t(r,D.c.T(d,u,t))
u=t+1}}if(v!==0)throw B.n(A.ck)
D.a.t(r,D.c.I(d,u))
return r},
vE(d){var w,v,u
if(!D.c.B(d,"[")){w=$.u9()
if(w.b.test(d))return null
return new B.e(A.a6,D.c.C(d,"!")?y.b:'invalid value "'+C.rB(d)+'" (use brackets for a free-form value)')}if(!D.c.b6(d,"]"))return A.ts
v=C.ry(D.c.T(d,1,d.length-1))
if(D.c.P(v).length===0)return A.tE
u=F.rz(v)
if(u!=null)return new B.e(A.dQ,"value rejected: "+u)
return null},
rB(d){return d.length<=80?d:D.c.T(d,0,77)+"\u2026"},
hm:function hm(d){this.a=d},
kF:function kF(d){this.a=d},
kE:function kE(){},
kG:function kG(d,e){this.a=d
this.b=e},
kH:function kH(d){this.a=d},
hq:function hq(d,e){this.a=d
this.c=e},
vK(){return new C.mc(B.x(x.N,x.A))},
vL(d){var w,v,u,t,s,r=C.vK()
for(w=new B.bp(d,B.r(d).h("bp<1,2>")).gu(0);w.j();){v=w.d
for(u=v.b.gO(),u=u.gu(u),t=v.a;u.j();){s=u.gl()
r.dc(new C.cD(t,s.a,s.b))}}return r},
mc:function mc(d){this.a=d},
md:function md(){},
cD:function cD(d,e,f){this.a=d
this.b=e
this.c=f},
ry(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=0,t="";u<w;++u){s=d.charCodeAt(u)
if(s===92){r=u+1
r=r<w&&d.charCodeAt(r)===95}else r=!1
if(r){t+=B.mw(95);++u
continue}if(v===0){r=u+4
r=r<=w&&D.c.T(d,u,r).toLowerCase()==="url("}else r=!1
if(r){t+=D.c.T(d,u,u+4)
u+=3
v=1
continue}if(v>0){if(s===40)++v
if(s===41)--v
t+=B.mw(s)
continue}t+=B.mw(s===95?32:s)}return t.charCodeAt(0)==0?t:t},
vA(){var w,v,u,t,s,r=x.N,q=B.B(["transparent","transparent","current","currentColor","black","#000000","white","#ffffff"],r,r)
for(r=A.mH.gO(),w=r.$ti,r=new B.aB(r.a(),w.h("aB<1>")),w=w.c;r.j();){v=r.b
if(v==null)v=w.a(v)
u=v.a
v=v.b
t=J.cq(v)
q.i(0,u,t.k(v,2))
for(u+="-",s=0;s<5;++s)q.i(0,u+A.ia[s],t.k(v,s))}return q}},A,F,E,G
J=c[1]
B=c[0]
D=c[2]
C=a.updateHolder(c[24],C)
A=c[77]
F=c[34]
E=c[73]
G=c[29]
C.mU.prototype={
geS(){var w,v=this.b
if(v==null)v=$.my.$0()
w=v-this.a
if($.r3()===1e6)return w
return w*1000}}
C.hQ.prototype={
N(){return"SpellCheck."+this.b}}
C.bI.prototype={
gb9(){var w=this.c
return w!=null&&w.length!==0},
gaI(){var w=this.c
return w!=null&&w.length!==0&&w.length>2&&D.c.B(w,"[")&&D.c.b6(w,"]")},
geD(){if(!this.gaI())return null
var w=this.c
return C.ry(D.c.T(w,1,w.length-1))},
M(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.bI&&B.av(v)===B.av(e)&&v.a===e.a&&v.b===e.b&&v.c==e.c&&v.e===e.e&&v.f===e.f&&C.vy(v.d,e.d)
else w=!0
return w},
gE(d){var w=this
return B.ce(w.a,w.b,w.c,w.e,w.f,B.mp(w.d))},
p(d){var w=this
return"JxClassToken(raw: "+w.a+", id: "+w.b+", value: "+B.D(w.c)+", variants: "+B.D(w.d)+", important: "+w.e+", negative: "+w.f+")"}}
C.kn.prototype={
p(d){var w=this
return"JxCompileResult(rules: "+w.b.length+", cssLength: "+w.a.length+", matched: "+w.c.length+", unmatched: "+w.d.length+", duration: "+D.e.ad(w.f.a,1000)+"ms)"}}
C.ko.prototype={}
C.ks.prototype={
cM(d){var w,v,u,t,s,r,q,p,o,n,m=new C.mU()
$.r3()
w=$.my.$0()
m.a=w
m.b=null
v=B.a([],x.T)
w=x.N
u=B.x(w,w)
t=this.b
s=D.c.P(d)
if(s.length!==0)for(w=D.c.aQ(s,$.u7()),r=w.length,q=0;q<w.length;w.length===r||(0,B.G)(w),++q){p=t.eC(w[q])
o=p.a
if(o!=null)D.a.t(v,o)
else{n=p.b
u.i(0,n.a,n.c)}}return this.dD(v,m,u)},
dD(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
x.W.a(b0)
x.f.a(b2)
w=B.a([],x.T)
l=x.s
v=B.a([],l)
u=B.a([],l)
l=x.R
t=B.a([],l)
k=x.N
j=B.cc(k)
for(i=new B.bp(b2,B.r(b2).h("bp<1,2>")).gu(0);i.j();){h=i.d
g=h.a
f=h.b
J.ao(v,g)
h='Invalid class syntax: "'+g
h=f.length===0?h+'".':h+'" ('+f+")."
J.ao(u,h)}for(i=b0.length,h=a9.a,e=h.b,d=a9.d,h=h.c,a0=0;a0<b0.length;b0.length===i||(0,B.G)(b0),++a0){s=b0[a0]
if(!j.t(0,s.a))continue
r=h.cQ(s)
if(r==null){J.ao(v,s.a)
a1=a9.eu(s)
if(a1!=null)J.ao(u,a1)
continue}try{q=B.a([],l)
for(a2=r.au(s,e),a3=0;a3<1;++a3){p=a2[a3]
J.ao(q,d.cH(p,s.d))}o=q
J.uH(t,o)
J.ao(w,s)}catch(a4){a2=B.ax(a4)
if(a2 instanceof F.ex){n=a2
J.ao(v,s.a)
J.ao(u,'"'+s.a+'" ignored: '+n.a)}else{m=a2
J.ao(v,s.a)
J.ao(u,'Error while generating "'+s.a+'": '+B.D(m))}}}a5=a9.eq(t)
q=B.a([],l)
D.a.n(q,a5)
a6=a9.c.d4(q)
a7=a9.du(a5)
if(a7.length===0)a8=a6
else if(a6.length===0)a8=a7
else{q=a6+"\n\n"+a7
a8=q}if(b1.b==null)b1.b=$.my.$0()
return new C.kn(a8,B.eF(a5,x.l),B.eF(w,x.L),B.eF(v,k),B.eF(u,k),new B.bF(b1.geS()))},
eu(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.c,d=e!=null
if(!(d&&e.length!==0)&&a0.d.length===0)return null
s=this.a
r=s.c
q=F.tH(a0.b,r.gf1())
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
w=new C.bI(k,i,e,l,m,n)
v=r.cQ(w)
if(v==null)break A
try{for(h=v.au(w,s),g=0;g<1;++g){u=h[g]
o.cH(u,w.d)}}catch(f){if(B.ax(f) instanceof F.ex)break A
else throw f}s=B.a7(l,x.N)
s.push((n?"-":"")+i)
if(d&&e.length!==0)s.push(e)
t=D.a.v(s,":")
break}q.length===p||(0,B.G)(q);++j}if(t==null)return null
e=m?"!":""
return'Unknown class "'+k+'": did you mean "'+t+e+'"?'},
du(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
x.y.a(d)
w=x.N
v=B.cc(w)
u=B.cc(w)
t=B.Y("jx-[a-z-]+")
for(w=d.length,s=x.F,r=0;r<d.length;d.length===w||(0,B.G)(d),++r)for(q=d[r].b,p=q.length,o=0;o<q.length;q.length===p||(0,B.G)(q),++o){n=q[o]
m=n.a
if(D.c.B(m,"--jx-"))v.t(0,m)
if(m==="animation")for(m=t.b2(0,n.b),m=new B.dR(m.a,m.b,m.c);m.j();){l=m.d
k=(l==null?s.a(l):l).b
if(0>=k.length)return B.v(k,0)
if(A.bh.U(k[0])){if(0>=k.length)return B.v(k,0)
k=k[0]
k.toString
u.t(0,k)}}}if(v.a===0&&u.a===0)return""
w=x.s
s=B.a([],w)
for(q=B.qA(v,v.r,v.$ti.c),p=q.$ti.c;q.j();){m=q.d
s.push("@property "+(m==null?p.a(m):m)+' {\n  syntax: "*";\n  inherits: false;\n}')}for(q=B.qA(u,u.r,u.$ti.c),p=q.$ti.c;q.j();){m=q.d
if(m==null)m=p.a(m)
k=B.a(["@keyframes "+m+" {"],w)
for(m=A.bh.k(0,m).gO(),j=m.$ti,m=new B.aB(m.a(),j.h("aB<1>")),j=j.c;m.j();){i=m.b
if(i==null)i=j.a(i)
h=B.a(["  "+i.a+" {"],w)
for(i=i.b.gO(),i=i.gu(i);i.j();){g=i.gl()
h.push("    "+g.a+": "+g.b+";")}h.push("  }")
D.a.n(k,h)}k.push("}")
s.push(D.a.v(k,"\n"))}return D.a.v(s,"\n")},
eq(d){var w,v,u,t,s,r
x.y.a(d)
w=B.a([],x.U)
for(v=this.d,u=0;u<d.length;++u)w.push(new B.fk(u,v.fc(d[u].c)))
D.a.a5(w,new C.ku())
v=B.a([],x.R)
for(t=w.length,s=0;s<w.length;w.length===t||(0,B.G)(w),++s){r=w[s].a
if(!(r>=0&&r<d.length))return B.v(d,r)
v.push(d[r])}return v}}
C.kt.prototype={}
C.mf.prototype={
gf7(){var w,v,u=this,t=u.b,s=B.rJ(t.gF(),x.N)
for(t=t.gF(),t=t.gu(t);t.j();){w=t.gl()
for(w=["group-"+w,"peer-"+w],v=0;v<2;++v)s.t(0,w[v])}s.n(0,u.c.gF())
s.n(0,u.d)
s.n(0,u.e.gF())
return s},
ed(d){var w,v,u,t,s
for(w=0;w<2;++w){v=A.kO[w]
u=v.a
t=v.b
if(!D.c.B(d,u))continue
v=u.length
s=this.b.k(0,D.c.I(d,v))
if(s==null)return null
return"."+D.c.T(u,0,v-1)+s+t}return null},
cH(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null
x.a.a(a3)
w=a3.length
if(w===0)return a2
v=a2.d
u=new B.d8(v==null?"":v)
v=a2.e
t=new B.d8(v==null?"":v)
v=x.s
s=B.a([],v)
v=B.a([],v)
r=a2.c
if(r!=null&&r.length!==0)v.push(C.vP(r))
for(r=a0.d,q=a0.b,p=a0.c,o=a0.e,n=a0.a,m=n.c.a,n=n.a,l=a1,k=0;k<w;++k){j=a3[k]
i=q.k(0,j)
h=p.k(0,j)
g=a0.ed(j)
f=g==null
e=f?o.k(0,j):a1
if(i!=null)u.a+=i
else if(h!=null){if(l!=null)throw B.n(F.c5('Only one pseudo-element per class: "'+j+'" in addition to "'+l+'".'))
l=h}else if(D.a.C(r,j)){f=m.k(0,"breakpoints")
f=f==null?a1:f.k(0,j)
d=f==null?a1:f.c
if(d==null)B.aw(F.c5('Breakpoint "'+j+'" is missing from theme "'+n+'".'))
f="@media (min-width: "+d+")"
D.a.t(v,D.c.B(f,"@media ")?D.c.P(D.c.I(f,7)):D.c.P(f))}else if(!f)t.a+=g
else if(e!=null)D.a.t(D.c.B(e,"(")?v:s,e)
else throw B.n(F.c5('Unsupported variant "'+j+'".'))}if(l!=null)u.a+=l
w=u.a
w=w.length===0?a1:w.charCodeAt(0)==0?w:w
r=t.a
r=r.length===0?a1:r.charCodeAt(0)==0?r:r
if(s.length===0&&v.length===0)v=a1
else{q=B.a7(s,x.N)
D.a.n(q,v)
v="@media "+D.a.v(q," and ")}return new F.aE(a2.a,a2.b,v,w,r)},
fc(d){var w,v,u,t,s,r
if(d==null||d.length===0)return 0
for(w=this.d,v=this.a.c.a,u=0;t=w.length,u<t;++u){t=w[u]
s=v.k(0,"breakpoints")
t=s==null?null:s.k(0,t)
r=t==null?null:t.c
if(r!=null&&d==="@media (min-width: "+r+")")return u+1}return t+1}}
C.hi.prototype={
d4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.y
k.a(d)
if(d.length===0)return""
w=new B.d8("")
v=B.a0(d)
u=v.h("C(1)")
v=v.h("a_<1>")
t=v.h("o.E")
s=B.a7(new B.a_(d,u.a(new C.kx()),v),t)
r=B.a7(new B.a_(d,u.a(new C.ky()),v),t)
for(v=s.length,q=0;q<s.length;s.length===v||(0,B.G)(s),++q){this.cG(w,s[q],"","\n"," ")
w.a+="\n"}p=B.x(x.N,k)
for(k=r.length,q=0;q<r.length;r.length===k||(0,B.G)(r),++q){o=r[q]
v=o.c
v.toString
J.ao(p.d_(v,new C.kz()),o)}for(k=new B.bp(p,p.$ti.h("bp<1,2>")).gu(0);k.j();){n=k.d
m=n.a
l=n.b
w.a+=m+" {\n"
for(v=J.Z(l);v.j();){u=v.gl()
this.cG(w,u,"  ","\n"," ")
w.a+="\n"}w.a+="}\n"}k=w.a
return D.c.P(k.charCodeAt(0)==0?k:k)},
cG(d,e,f,g,h){var w,v,u,t,s,r,q=f+"  ",p=f+e.gcS()+h+"{"+g
p=d.a+=p
for(w=e.b,v=w.length,u=h+"!important",t=0;t<v;++t){s=w[t]
r=s.c?u:""
p+=q+s.a+":"+h+s.b+r+";"+g
d.a=p}d.a=p+(f+"}")},
$ivB:1}
C.kw.prototype={}
C.az.prototype={
N(){return"JxParseErrorCode."+this.b}}
C.kD.prototype={
p(d){return'Invalid class "'+this.a+'": '+this.c+"."}}
C.dH.prototype={}
C.hm.prototype={
eC(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.c.P(a2),a0=new C.kF(d),a1=d.length
if(a1===0)return a0.$2(A.aG,"classe vide")
if(a1>512)return a0.$2(A.dP,"class too long (more than 512 characters)")
for(t=0;t<a1;++t){s=d.charCodeAt(t)
if(s<=32||s===127)return a0.$2(A.dR,"space or control character not allowed")}w=d
if(J.uJ(w,"!")){w=J.uQ(w,0,J.aK(w)-1)
r=!0}else{r=J.uM(w,"!")
if(r)w=J.uP(w,1)}if(J.aK(w)===0)return a0.$2(A.aG,'class is only "!"')
v=null
try{v=C.vF(w)}catch(q){a1=B.ax(q)
if(a1 instanceof B.dz){u=a1
return a0.$2(A.dT,u.a)}else throw q}if(J.q7(v,new C.kE()))return a0.$2(A.dS,'empty segment (extra ":" or missing value)')
a1=this.a
p=0
for(;;){if(!(p<J.aK(v)-1&&a1.C(0,J.ri(v,p))))break;++p}o=J.uN(v,p)
n=J.uO(v,0,p)
a1=o.length
if(a1===1){m=D.a.gS(o)
l=null}else{D.a.n(n,D.a.bn(o,0,a1-2))
a1=o.length
k=a1-2
if(!(k>=0))return B.v(o,k)
m=o[k]
l=D.a.gbd(o)}a1=n.length
if(a1>8)return a0.$2(A.dU,"too many variants (maximum 8)")
k=x.N
j=B.cc(k)
for(i=0;i<n.length;n.length===a1||(0,B.G)(n),++i){h=n[i]
g=$.ua()
if(!g.b.test(h))return a0.$2(A.dV,'invalid variant "'+h+'"')
if(!j.t(0,h))return a0.$2(A.dW,'repeated variant "'+h+'"')}f=D.c.B(m,"-")
if(f){if(l==null)return a0.$2(A.a7,'the "-" sign needs a value (for example "-m:4")')
m=D.c.I(m,1)}if(l!=null&&D.c.B(l,"-")){if(f)return a0.$2(A.a7,'double negation ("-m:-4")')
l=D.c.I(l,1)
if(l.length===0||D.c.B(l,"-"))return a0.$2(A.a7,"incomplete negative value")
f=!0}a1=$.u8()
if(!a1.b.test(m)){a1=D.c.C(m,"!")?y.b:'invalid utility "'+m+'"'
return a0.$2(A.dX,a1)}if(l!=null){e=C.vE(l)
if(e!=null)return a0.$2(e.a,e.b)}return new C.dH(new C.bI(d,m,l,B.eF(n,k),r,f),null)},
$ivD:1}
C.kG.prototype={
fm(d){var w=this.a,v=d.a
if(w.U(v))D.a.d0(this.b,new C.kH(d))
w.i(0,v,d)
D.a.t(this.b,d)},
fn(d){var w,v
x.m.a(d)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.G)(d),++v)this.fm(d[v])},
cQ(d){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.G)(w),++u){t=w[u]
if(t.bf(d))return t}return null},
gf1(){var w,v,u,t,s,r,q=B.cc(x.N)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.G)(w),++u){t=w[u]
A:{if(t instanceof F.c7){s=t.b.gF()
break A}if(t instanceof F.q){s=t.b.gF()
break A}if(t instanceof F.dF){r=t.b
s=r
break A}if(t instanceof F.dE){r=t.b
s=r
break A}s=E.f
break A}s=J.Z(s)
while(s.j())q.t(0,B.k(s.gl()))}return q}}
C.hq.prototype={
fs(d,e){var w=this.c.a.k(0,d)
w=w==null?null:w.k(0,e)
return w==null?null:w.c},
$iqk:1}
C.mc.prototype={
bX(d){var w,v,u,t=this.a.k(0,d)
if(t==null)return E.b
w=x.N
w=B.x(w,w)
for(v=t.gaa(),v=v.gu(v);v.j();){u=v.gl()
w.i(0,u.b,u.c)}return w},
dc(d){this.a.d_(d.a,new C.md()).i(0,d.b,d)}}
C.cD.prototype={
M(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.cD&&B.av(v)===B.av(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gE(d){return B.ce(this.a,this.b,this.c,D.h,D.h,D.h)},
p(d){return this.a+"."+this.b+": "+this.c}}
var z=a.updateTypes(["C(aE)","m<aE>()","dH(az,b)","C(ab)","t<b,cD>()","d()"])
C.mu.prototype={
$0(){return D.l.eZ(1000*this.a.now())},
$S:52}
C.ku.prototype={
$2(d,e){var w,v=x.c
v.a(d)
v.a(e)
w=D.e.L(d.b,e.b)
return w!==0?w:D.e.L(d.a,e.a)},
$S:53}
C.mg.prototype={
$2(d,e){var w,v=x.V
v.a(d)
v.a(e)
w=D.l.L(d.c,e.c)
return w!==0?w:D.e.L(d.a,e.a)},
$S:82}
C.kx.prototype={
$1(d){var w=x.l.a(d).c
return!(w!=null&&w.length!==0)},
$S:z+0}
C.ky.prototype={
$1(d){var w=x.l.a(d).c
return w!=null&&w.length!==0},
$S:z+0}
C.kz.prototype={
$0(){return B.a([],x.R)},
$S:z+1}
C.kF.prototype={
$2(d,e){return new C.dH(null,new C.kD(C.rB(this.a),e))},
$S:z+2}
C.kE.prototype={
$1(d){return B.k(d).length===0},
$S:8}
C.kH.prototype={
$1(d){return x.O.a(d).a===this.a.a},
$S:z+3}
C.md.prototype={
$0(){return B.x(x.N,x.S)},
$S:z+4};(function installTearOffs(){var w=a._static_0
w(C,"xP","w_",5)})();(function inheritance(){var w=a.inheritMany
w(B.ap,[C.mu,C.kz,C.md])
w(B.y,[C.mU,C.bI,C.kn,C.ko,C.ks,C.kt,C.mf,C.hi,C.kw,C.kD,C.dH,C.hm,C.kG,C.hq,C.mc,C.cD])
w(B.aG,[C.hQ,C.az])
w(B.bg,[C.ku,C.mg,C.kF])
w(B.a9,[C.kx,C.ky,C.kE,C.kH])})()
B.L(b.typeUniverse,JSON.parse('{"hQ":{"aj":[]},"hi":{"vB":[]},"az":{"aj":[]},"hm":{"vD":[]},"hq":{"qk":[]}}'))
var y={b:'"!" goes at the start or the end of the class'}
var x=(function rtii(){var w=B.j
return{w:w("c<b,b>"),M:w("c<b,m<b>>"),j:w("c<b,t<b,b>>"),m:w("o<ab>"),T:w("l<bI>"),R:w("l<aE>"),D:w("l<ab>"),U:w("l<+index,rank(d,d)>"),P:w("l<+index,name,width(d,b,M)>"),s:w("l<b>"),L:w("bI"),l:w("aE"),O:w("ab"),S:w("cD"),W:w("m<bI>"),y:w("m<aE>"),a:w("m<b>"),A:w("t<b,cD>"),f:w("t<b,b>"),c:w("+index,rank(d,d)"),V:w("+index,name,width(d,b,M)"),F:w("dO"),N:w("b")}})();(function constants(){var w=a.makeConstList
A.yQ=new C.ko()
A.cj=new B.dz('"]" without a matching "["',null)
A.ck=new B.dz('unclosed "["',null)
A.aG=new C.az(0,"empty")
A.dP=new C.az(1,"tooLong")
A.a6=new C.az(10,"invalidValue")
A.dQ=new C.az(11,"unsafeValue")
A.dR=new C.az(2,"invalidCharacter")
A.dS=new C.az(3,"emptySegment")
A.dT=new C.az(4,"unbalancedBrackets")
A.dU=new C.az(5,"tooManyVariants")
A.dV=new C.az(6,"invalidVariant")
A.dW=new C.az(7,"duplicateVariant")
A.a7=new C.az(8,"invalidNegative")
A.dX=new C.az(9,"invalidIdentifier")
A.qo={bcol:0}
A.hR=w(["border-collapse"],x.s)
A.lR=new B.c(A.qo,[A.hR],x.M)
A.qD={collapse:0,separate:1}
A.mj=new B.c(A.qD,["collapse","separate"],x.w)
A.fu=new F.q(A.lR,null,A.mj,E.d,!1,!1,null,null,null,E.b,"border-collapse")
A.t2={tl:0}
A.hO=w(["table-layout"],x.s)
A.np=new B.c(A.t2,[A.hO],x.M)
A.qj={auto:0,fixed:1}
A.mE=new B.c(A.qj,["auto","fixed"],x.w)
A.h0=new F.q(A.np,null,A.mE,E.d,!1,!1,null,null,null,E.b,"table-layout")
A.qz={cap:0}
A.hJ=w(["caption-side"],x.s)
A.mR=new B.c(A.qz,[A.hJ],x.M)
A.t3={top:0,bottom:1}
A.nN=new B.c(A.t3,["top","bottom"],x.w)
A.fO=new F.q(A.mR,null,A.nN,E.d,!1,!1,null,null,null,E.b,"caption-side")
A.hF=w([A.fu,A.h0,A.fO],x.D)
A.ia=w(["100","300","500","700","900"],x.s)
A.tK=new B.e("group-"," ")
A.u9=new B.e("peer-"," ~ ")
A.kO=w([A.tK,A.u9],B.j("l<+(b,b)>"))
A.bB={xs:0,sm:1,base:2,lg:3,xl:4,"2xl":5,"3xl":6,"4xl":7,"5xl":8,"6xl":9}
A.lp=new B.c(A.bB,["0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.875rem","2.25rem","3rem","3.75rem"],x.w)
A.bo={sans:0,serif:1,mono:2}
A.lt=new B.c(A.bo,['ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif','ui-serif, Georgia, Cambria, "Times New Roman", serif','ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace'],x.w)
A.pn={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6,full:7}
A.lB=new B.c(A.pn,["0px","0.125rem","0.375rem","0.5rem","0.75rem","1rem","1.5rem","9999px"],x.w)
A.pc={hover:0,focus:1,active:2,visited:3,disabled:4,checked:5,"focus-within":6,"focus-visible":7,first:8,last:9,odd:10,even:11,enabled:12,required:13,optional:14,valid:15,invalid:16,"user-valid":17,"user-invalid":18,"read-only":19,"placeholder-shown":20,autofill:21,indeterminate:22,open:23,modal:24}
A.lO=new B.c(A.pc,[":hover",":focus",":active",":visited",":disabled",":checked",":focus-within",":focus-visible",":first-child",":last-child",":nth-child(odd)",":nth-child(even)",":enabled",":required",":optional",":valid",":invalid",":user-valid",":user-invalid",":read-only",":placeholder-shown",":autofill",":indeterminate","[open]",":modal"],x.w)
A.tb={thin:0,extralight:1,light:2,normal:3,medium:4,semibold:5,bold:6,extrabold:7,black:8}
A.m7=new B.c(A.tb,["100","200","300","400","500","600","700","800","900"],x.w)
A.br={gray:0,red:1,orange:2,yellow:3,green:4,teal:5,blue:6,indigo:7,purple:8,pink:9}
A.ka=w(["#f3f4f6","#d1d5db","#6b7280","#374151","#111827"],x.s)
A.iZ=w(["#fee2e2","#fca5a5","#ef4444","#b91c1c","#7f1d1d"],x.s)
A.l0=w(["#ffedd5","#fdba74","#f97316","#c2410c","#7c2d12"],x.s)
A.ky=w(["#fef9c3","#fde047","#eab308","#a16207","#713f12"],x.s)
A.ju=w(["#dcfce7","#86efac","#22c55e","#15803d","#14532d"],x.s)
A.i5=w(["#ccfbf1","#5eead4","#14b8a6","#0f766e","#134e4a"],x.s)
A.iY=w(["#dbeafe","#93c5fd","#3b82f6","#1d4ed8","#1e3a8a"],x.s)
A.is=w(["#e0e7ff","#a5b4fc","#6366f1","#4338ca","#312e81"],x.s)
A.ix=w(["#f3e8ff","#d8b4fe","#a855f7","#7e22ce","#581c87"],x.s)
A.kG=w(["#fce7f3","#f9a8d4","#ec4899","#be185d","#831843"],x.s)
A.mH=new B.c(A.br,[A.ka,A.iZ,A.l0,A.ky,A.ju,A.i5,A.iY,A.is,A.ix,A.kG],x.M)
A.pN={dark:0,"motion-safe":1,"motion-reduce":2,"contrast-more":3,portrait:4,landscape:5,print:6}
A.mY=new B.c(A.pN,["(prefers-color-scheme: dark)","(prefers-reduced-motion: no-preference)","(prefers-reduced-motion: reduce)","(prefers-contrast: more)","(orientation: portrait)","(orientation: landscape)","print"],x.w)
A.pS={"jx-spin":0,"jx-ping":1,"jx-pulse":2,"jx-bounce":3,"jx-fade-in":4,"jx-fade-out":5,"jx-slide-up":6,"jx-slide-down":7,"jx-zoom-in":8,"jx-slide-in-right":9,"jx-slide-in-left":10,"jx-indeterminate":11}
A.bI={to:0}
A.rN={rotate:0}
A.lY=new B.c(A.rN,["360deg"],x.w)
A.nQ=new B.c(A.bI,[A.lY],x.j)
A.q9={"75%, 100%":0}
A.rQ={scale:0,opacity:1}
A.lP=new B.c(A.rQ,["2","0"],x.w)
A.lV=new B.c(A.q9,[A.lP],x.j)
A.qW={"50%":0}
A.bE={opacity:0}
A.lX=new B.c(A.bE,["0.5"],x.w)
A.oa=new B.c(A.qW,[A.lX],x.j)
A.r2={"0%, 100%":0,"50%":1}
A.bp={translate:0,"animation-timing-function":1}
A.oF=new B.c(A.bp,["0 -25%","cubic-bezier(0.8, 0, 1, 1)"],x.w)
A.oE=new B.c(A.bp,["0 0","cubic-bezier(0, 0, 0.2, 1)"],x.w)
A.p0=new B.c(A.r2,[A.oF,A.oE],x.j)
A.G={from:0}
A.bc=new B.c(A.bE,["0"],x.w)
A.n8=new B.c(A.G,[A.bc],x.j)
A.nP=new B.c(A.bI,[A.bc],x.j)
A.bF={opacity:0,translate:1}
A.nr=new B.c(A.bF,["0","0 1rem"],x.w)
A.nc=new B.c(A.G,[A.nr],x.j)
A.nq=new B.c(A.bF,["0","0 -1rem"],x.w)
A.n7=new B.c(A.G,[A.nq],x.j)
A.ry={opacity:0,scale:1}
A.om=new B.c(A.ry,["0","0.95"],x.w)
A.nb=new B.c(A.G,[A.om],x.j)
A.oW=new B.c(E.W,["100% 0"],x.w)
A.na=new B.c(A.G,[A.oW],x.j)
A.bl=new B.c(E.W,["-100% 0"],x.w)
A.n9=new B.c(A.G,[A.bl],x.j)
A.oV=new B.c(E.W,["300% 0"],x.w)
A.of=new B.c(E.bz,[A.bl,A.oV],x.j)
A.bh=new B.c(A.pS,[A.nQ,A.lV,A.oa,A.p0,A.n8,A.nP,A.nc,A.n7,A.nb,A.na,A.n9,A.of],B.j("c<b,t<b,t<b,b>>>"))
A.tf={sm:0,md:1,lg:2,xl:3,"2xl":4}
A.o5=new B.c(A.tf,["640px","768px","1024px","1280px","1536px"],x.w)
A.pE={placeholder:0,file:1,backdrop:2}
A.o8=new B.c(A.pE,["::placeholder","::file-selector-button","::backdrop"],x.w)
A.pL={sm:0,md:1,lg:2,xl:3,"2xl":4,inner:5,none:6}
A.ob=new B.c(A.pL,["0 1px 2px 0 rgb(0 0 0 / 0.05)","0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","0 25px 50px -12px rgb(0 0 0 / 0.25)","inset 0 2px 4px 0 rgb(0 0 0 / 0.05)","none"],x.w)
A.pV={none:0,tight:1,snug:2,normal:3,relaxed:4,loose:5}
A.p3=new B.c(A.pV,["1","1.25","1.375","1.5","1.625","2"],x.w)
A.ts=new B.e(A.a6,'an arbitrary value ends with "]"')
A.tE=new B.e(A.a6,"empty arbitrary value")
A.c2=new C.hQ(2,"isFalse")})();(function staticFields(){$.mx=0
$.my=C.xP()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"zq","r3",()=>{C.w8()
return $.mx})
w($,"zc","u7",()=>B.Y("\\s+"))
w($,"zd","u8",()=>B.Y("^[a-zA-Z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*$"))
w($,"zf","ua",()=>B.Y("^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$"))
w($,"ze","u9",()=>B.Y("^(?:#[0-9a-fA-F]{3,8}|[a-zA-Z0-9]+(?:[.\\-/][a-zA-Z0-9]+)*%?)$"))
w($,"z9","u4",()=>C.vA())
w($,"zb","u6",()=>{var v,u,t,s=x.N
s=B.x(s,s)
s.i(0,"0","0px")
s.i(0,"px","1px")
for(v=1;v<=16;++v){u=v*0.25
t=u===D.l.fE(u)?D.e.p(D.l.bU(u)):D.l.p(u)
s.i(0,""+v,t+"rem")}s.i(0,"auto","auto")
return s})
w($,"za","u5",()=>{var v,u=x.N
u=B.x(u,u)
u.i(0,"0","0")
u.i(0,"5","0.05")
for(v=10;v<=90;v+=10)u.i(0,""+v,B.D(v/100))
u.i(0,"95","0.95")
u.i(0,"100","1")
return u})})()};
(a=>{a["cQSWsyuEvpNxnn10ywUAwMeZn6c="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_111.part.js.map
