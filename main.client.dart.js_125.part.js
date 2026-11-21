((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C={
wY(){return Date.now()},
x6(){var w,v
if($.mM!==0)return
$.mM=1000
if(typeof window=="undefined")return
w=window
if(w==null)return
if(!!w.dartUseDateNowForTicks)return
v=w.performance
if(v==null)return
if(typeof v.now!="function")return
$.mM=1e6
$.mN=new C.mK(v)},
mK:function mK(d){this.a=d},
na:function na(){this.b=this.a=0},
wy(d,e){var w,v,u=d.length,t=e.length
if(u!==t)return!1
for(w=0;w<u;++w){v=d[w]
if(!(w<t))return B.x(e,w)
if(v!==e[w])return!1}return!0},
bP:function bP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
kA:function kA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hq:function hq(d){this.c=d},
kG(d){var w=d==null?C.rb(A.dx,null):d,v=C.wN(w.b,null),u=v.gfi()
return new C.kE(w,new C.hx(u),new C.ht(new C.kJ(!1)),v)},
kE:function kE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kH:function kH(){},
rb(d,e){var w=e==null?C.tB(C.tC(C.tv()),"default"):e,v=x.O,u=new C.kT(B.y(x.N,v),B.a([],x.D)),t=$.t5()
v=B.aa(t,v)
D.a.m(v,E.aP)
D.a.m(v,E.b2)
D.a.m(v,E.b_)
D.a.m(v,E.b7)
D.a.m(v,E.aS)
D.a.m(v,E.bd)
D.a.m(v,$.ta())
D.a.m(v,E.b8)
D.a.m(v,$.t9())
D.a.m(v,$.t8())
D.a.m(v,$.t6())
D.a.m(v,E.b4)
D.a.m(v,E.b0)
D.a.m(v,E.aX)
D.a.m(v,E.ba)
D.a.m(v,$.t7())
D.a.m(v,E.aR)
D.a.m(v,E.aV)
D.a.m(v,E.b1)
D.a.m(v,E.bc)
D.a.m(v,$.tb())
D.a.m(v,A.hL)
u.fB(v)
v=u
return new C.kF(d,w,v)},
kF:function kF(d,e,f){this.a=d
this.b=e
this.c=f},
wN(d,e){var w,v,u,t,s=d.c.c6("breakpoints").gM(),r=B.aa(s,B.q(s).h("o.E"))
s=B.a([],x.P)
for(w=0;w<r.length;++w){v=r[w]
s.push(new B.fv(w,v.a,C.wP(v.b)))}D.a.a5(s,new C.mt())
v=B.a([],x.s)
for(u=s.length,t=0;t<s.length;s.length===u||(0,B.L)(s),++t)v.push(s[t].b)
return new C.ms(d,A.m3,A.oo,v,A.nd,e)},
wP(d){var w,v,u,t=B.N("^([0-9.]+)(px|r?em)?$").aK(D.c.O(d))
if(t==null)return 1/0
w=t.b
if(1>=w.length)return B.x(w,1)
v=w[1]
v.toString
u=G.rj(v)
if(u==null)u=1/0
if(2>=w.length)return B.x(w,2)
w=w[2]
return w==null||w==="px"?u:u*16},
wO(d){return D.c.C(d,"@media ")?D.c.O(D.c.I(d,7)):D.c.O(d)},
ms:function ms(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mt:function mt(){},
ht:function ht(d){this.a=d},
kK:function kK(){},
kL:function kL(){},
kM:function kM(){},
kJ:function kJ(d){this.a=d},
aD:function aD(d,e){this.a=d
this.b=e},
kQ:function kQ(d,e){this.a=d
this.c=e},
dU:function dU(d,e){this.a=d
this.b=e},
wF(d){var w,v,u,t,s,r=B.a([],x.s)
for(w=d.length,v=0,u=0,t=0;t<w;++t){s=d.charCodeAt(t)
if(s===91)++v
else if(s===93){--v
if(v<0)throw B.n(A.co)}else if(s===58&&v===0){D.a.t(r,D.c.R(d,u,t))
u=t+1}}if(v!==0)throw B.n(A.cp)
D.a.t(r,D.c.I(d,u))
return r},
wE(d){var w,v,u
if(!D.c.C(d,"[")){w=$.v7()
if(w.b.test(d))return null
return new B.f(A.a8,D.c.D(d,"!")?y.b:'invalid value "'+C.tw(d)+'" (use brackets for a free-form value)')}if(!D.c.ba(d,"]"))return A.tI
v=C.tt(D.c.R(d,1,d.length-1))
if(D.c.O(v).length===0)return A.tW
u=F.tu(v)
if(u!=null)return new B.f(A.dW,"value rejected: "+u)
return null},
tw(d){return d.length<=80?d:D.c.R(d,0,77)+"\u2026"},
hx:function hx(d){this.a=d},
kS:function kS(d){this.a=d},
kR:function kR(){},
kT:function kT(d,e){this.a=d
this.b=e},
kU:function kU(d){this.a=d},
tB(d,e){return new C.hB(e,d)},
hB:function hB(d,e){this.a=d
this.c=e},
wK(){return new C.mp(B.y(x.N,x.A))},
tC(d){var w,v,u,t,s,r=C.wK()
for(w=new B.aj(d,B.q(d).h("aj<1,2>")).gu(0);w.j();){v=w.d
for(u=v.b.gM(),u=u.gu(u),t=v.a;u.j();){s=u.gl()
r.dm(new C.cN(t,s.a,s.b))}}return r},
mp:function mp(d){this.a=d},
mq:function mq(){},
cN:function cN(d,e,f){this.a=d
this.b=e
this.c=f},
tt(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=0,t="";u<w;++u){s=d.charCodeAt(u)
if(s===92){r=u+1
r=r<w&&d.charCodeAt(r)===95}else r=!1
if(r){t+=B.mL(95);++u
continue}if(v===0){r=u+4
r=r<=w&&D.c.R(d,u,r).toLowerCase()==="url("}else r=!1
if(r){t+=D.c.R(d,u,u+4)
u+=3
v=1
continue}if(v>0){if(s===40)++v
if(s===41)--v
t+=B.mL(s)
continue}t+=B.mL(s===95?32:s)}return t.charCodeAt(0)==0?t:t},
ae(d,e){var w,v,u=B.a([],x.K)
for(w=new B.aj(e,B.q(e).h("aj<1,2>")).gu(0);w.j();){v=w.d
u.push(new F.bt(v.a,v.b,!1))}return new F.aC(d,u,null,null,null)},
tv(){return B.r(["colors",$.v2(),"spacing",$.v4(),"breakpoints",A.ol,"font-family",A.lJ,"font-size",A.lF,"font-weight",A.mn,"line-height",A.pj,"border-radius",A.lR,"border-width",E.af,"opacity",$.v3(),"shadow",A.or],x.N,x.f)},
wA(){var w,v,u,t,s,r=x.N,q=B.r(["transparent","transparent","current","currentColor","black","#000000","white","#ffffff"],r,r)
for(r=A.mX.gM(),w=r.$ti,r=new B.aH(r.a(),w.h("aH<1>")),w=w.c;r.j();){v=r.b
if(v==null)v=w.a(v)
u=v.a
v=v.b
t=J.cB(v)
q.i(0,u,t.k(v,2))
for(u+="-",s=0;s<5;++s)q.i(0,u+A.ij[s],t.k(v,s))}return q}},A,F,E,G
J=c[1]
B=c[0]
D=c[2]
C=a.updateHolder(c[36],C)
A=c[90]
F=c[44]
E=c[82]
G=c[40]
C.na.prototype={
gf3(){var w,v=this.b
if(v==null)v=$.mN.$0()
w=v-this.a
if($.rY()===1e6)return w
return w*1000}}
C.bP.prototype={
gbc(){var w=this.c
return w!=null&&w.length!==0},
gaM(){var w=this.c
return w!=null&&w.length!==0&&w.length>2&&D.c.C(w,"[")&&D.c.ba(w,"]")},
geO(){if(!this.gaM())return null
var w=this.c
return C.tt(D.c.R(w,1,w.length-1))},
N(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.bP&&B.aA(v)===B.aA(e)&&v.a===e.a&&v.b===e.b&&v.c==e.c&&v.e===e.e&&v.f===e.f&&C.wy(v.d,e.d)
else w=!0
return w},
gF(d){var w=this
return B.cl(w.a,w.b,w.c,w.e,w.f,B.mD(w.d))},
p(d){var w=this
return"JxClassToken(raw: "+w.a+", id: "+w.b+", value: "+B.z(w.c)+", variants: "+B.z(w.d)+", important: "+w.e+", negative: "+w.f+")"}}
C.kA.prototype={
p(d){var w=this
return"JxCompileResult(rules: "+w.b.length+", cssLength: "+w.a.length+", matched: "+w.c.length+", unmatched: "+w.d.length+", duration: "+D.e.ae(w.f.a,1000)+"ms)"}}
C.hq.prototype={}
C.kE.prototype={
b8(d){var w,v,u,t,s,r,q,p,o,n,m=new C.na()
$.rY()
w=$.mN.$0()
m.a=w
m.b=null
v=B.a([],x.T)
w=x.N
u=B.y(w,w)
t=this.b
s=D.c.O(d)
if(s.length!==0)for(w=D.c.aT(s,$.v5()),r=w.length,q=0;q<w.length;w.length===r||(0,B.L)(w),++q){p=t.eN(w[q])
o=p.a
if(o!=null)D.a.t(v,o)
else{n=p.b
u.i(0,n.a,n.c)}}return this.dN(v,m,u)},
dN(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
x.W.a(b1)
x.f.a(b3)
w=B.a([],x.T)
l=x.s
v=B.a([],l)
u=B.a([],l)
l=x.R
t=B.a([],l)
k=x.N
j=B.cj(k)
for(i=new B.aj(b3,B.q(b3).h("aj<1,2>")).gu(0);i.j();){h=i.d
g=h.a
f=h.b
J.au(v,g)
h='Invalid class syntax: "'+g
h=f.length===0?h+'".':h+'" ('+f+")."
J.au(u,h)}for(i=b1.length,h=b0.a,e=h.b,d=b0.d,a0=h.c,a1=0;a1<b1.length;b1.length===i||(0,B.L)(b1),++a1){s=b1[a1]
if(!j.t(0,s.a))continue
r=a0.d1(s)
if(r==null){J.au(v,s.a)
a2=b0.eD(s)
if(a2!=null)J.au(u,a2)
continue}try{q=B.a([],l)
for(a3=r.az(s,e),a4=0;a4<1;++a4){p=a3[a4]
J.au(q,d.cU(p,s.d))}o=q
J.vI(t,o)
J.au(w,s)}catch(a5){a3=B.aB(a5)
if(a3 instanceof F.eK){n=a3
J.au(v,s.a)
J.au(u,'"'+s.a+'" ignored: '+n.a)}else{m=a3
J.au(v,s.a)
J.au(u,'Error while generating "'+s.a+'": '+B.z(m))}}}a6=b0.eA(t)
q=B.a([],l)
if(h.a.c)D.a.m(q,$.v9())
D.a.m(q,a6)
a7=b0.c.df(q)
a8=b0.dF(a6)
if(a8.length===0)a9=a7
else if(a7.length===0)a9=a8
else{q=a7+"\n\n"+a8
a9=q}if(b2.b==null)b2.b=$.mN.$0()
return new C.kA(a9,B.dX(a6,x.l),B.dX(w,x.L),B.dX(v,k),B.dX(u,k),new B.bM(b2.gf3()))},
eD(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.c,d=e!=null
if(!(d&&e.length!==0)&&a0.d.length===0)return null
s=this.a
r=s.c
q=F.uF(a0.b,r.gfd())
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
w=new C.bP(k,i,e,l,m,n)
v=r.d1(w)
if(v==null)break A
try{for(h=v.az(w,s),g=0;g<1;++g){u=h[g]
o.cU(u,w.d)}}catch(f){if(B.aB(f) instanceof F.eK)break A
else throw f}s=B.aa(l,x.N)
s.push((n?"-":"")+i)
if(d&&e.length!==0)s.push(e)
t=D.a.v(s,":")
break}q.length===p||(0,B.L)(q);++j}if(t==null)return null
e=m?"!":""
return'Unknown class "'+k+'": did you mean "'+t+e+'"?'},
dF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
x.y.a(d)
w=x.N
v=B.cj(w)
u=B.cj(w)
t=B.N("jx-[a-z-]+")
for(w=d.length,s=x.F,r=0;r<d.length;d.length===w||(0,B.L)(d),++r)for(q=d[r].b,p=q.length,o=0;o<q.length;q.length===p||(0,B.L)(q),++o){n=q[o]
m=n.a
if(D.c.C(m,"--jx-"))v.t(0,m)
if(m==="animation")for(m=t.aE(0,n.b),m=new B.e4(m.a,m.b,m.c);m.j();){l=m.d
k=(l==null?s.a(l):l).b
if(0>=k.length)return B.x(k,0)
if(A.bm.V(k[0])){if(0>=k.length)return B.x(k,0)
k=k[0]
k.toString
u.t(0,k)}}}if(v.a===0&&u.a===0)return""
w=x.s
s=B.a([],w)
for(q=B.rv(v,v.r,v.$ti.c),p=q.$ti.c;q.j();){m=q.d
s.push("@property "+(m==null?p.a(m):m)+' {\n  syntax: "*";\n  inherits: false;\n}')}for(q=B.rv(u,u.r,u.$ti.c),p=q.$ti.c;q.j();){m=q.d
if(m==null)m=p.a(m)
k=B.a(["@keyframes "+m+" {"],w)
for(m=A.bm.k(0,m).gM(),j=m.$ti,m=new B.aH(m.a(),j.h("aH<1>")),j=j.c;m.j();){i=m.b
if(i==null)i=j.a(i)
h=B.a(["  "+i.a+" {"],w)
for(i=i.b.gM(),i=i.gu(i);i.j();){g=i.gl()
h.push("    "+g.a+": "+g.b+";")}h.push("  }")
D.a.m(k,h)}k.push("}")
s.push(D.a.v(k,"\n"))}return D.a.v(s,"\n")},
eA(d){var w,v,u,t,s,r
x.y.a(d)
w=B.a([],x.U)
for(v=this.d,u=0;u<d.length;++u)w.push(new B.fu(u,v.fn(d[u].c)))
D.a.a5(w,new C.kH())
v=B.a([],x.R)
for(t=w.length,s=0;s<w.length;w.length===t||(0,B.L)(w),++s){r=w[s].a
if(!(r>=0&&r<d.length))return B.x(d,r)
v.push(d[r])}return v}}
C.kF.prototype={}
C.ms.prototype={
gfi(){var w,v,u=this,t=u.b,s=B.tH(t.gG(),x.N)
for(t=t.gG(),t=t.gu(t);t.j();){w=t.gl()
for(w=["group-"+w,"peer-"+w],v=0;v<2;++v)s.t(0,w[v])}s.m(0,u.c.gG())
s.m(0,u.d)
s.m(0,u.e.gG())
return s},
en(d){var w,v,u,t,s
for(w=0;w<2;++w){v=A.l4[w]
u=v.a
t=v.b
if(!D.c.C(d,u))continue
v=u.length
s=this.b.k(0,D.c.I(d,v))
if(s==null)return null
return"."+D.c.R(u,0,v-1)+s+t}return null},
cU(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null
x.a.a(a3)
w=a3.length
if(w===0)return a2
v=a2.d
u=new B.dj(v==null?"":v)
v=a2.e
t=new B.dj(v==null?"":v)
v=x.s
s=B.a([],v)
v=B.a([],v)
r=a2.c
if(r!=null&&r.length!==0)v.push(C.wO(r))
for(r=a0.d,q=a0.b,p=a0.c,o=a0.e,n=a0.a,m=n.c.a,n=n.a,l=a1,k=0;k<w;++k){j=a3[k]
i=q.k(0,j)
h=p.k(0,j)
g=a0.en(j)
f=g==null
e=f?o.k(0,j):a1
if(i!=null)u.a+=i
else if(h!=null){if(l!=null)throw B.n(F.cc('Only one pseudo-element per class: "'+j+'" in addition to "'+l+'".'))
l=h}else if(D.a.D(r,j)){f=m.k(0,"breakpoints")
f=f==null?a1:f.k(0,j)
d=f==null?a1:f.c
if(d==null)B.an(F.cc('Breakpoint "'+j+'" is missing from theme "'+n+'".'))
f="@media (min-width: "+d+")"
D.a.t(v,D.c.C(f,"@media ")?D.c.O(D.c.I(f,7)):D.c.O(f))}else if(!f)t.a+=g
else if(e!=null)D.a.t(D.c.C(e,"(")?v:s,e)
else throw B.n(F.cc('Unsupported variant "'+j+'".'))}if(l!=null)u.a+=l
w=u.a
w=w.length===0?a1:w.charCodeAt(0)==0?w:w
r=t.a
r=r.length===0?a1:r.charCodeAt(0)==0?r:r
if(s.length===0&&v.length===0)v=a1
else{q=B.aa(s,x.N)
D.a.m(q,v)
v="@media "+D.a.v(q," and ")}return new F.aC(a2.a,a2.b,v,w,r)},
fn(d){var w,v,u,t,s,r
if(d==null||d.length===0)return 0
for(w=this.d,v=this.a.c.a,u=0;t=w.length,u<t;++u){t=w[u]
s=v.k(0,"breakpoints")
t=s==null?null:s.k(0,t)
r=t==null?null:t.c
if(r!=null&&d==="@media (min-width: "+r+")")return u+1}return t+1}}
C.ht.prototype={
df(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.y
k.a(d)
if(d.length===0)return""
w=new B.dj("")
v=B.a4(d)
u=v.h("D(1)")
v=v.h("a2<1>")
t=v.h("o.E")
s=B.aa(new B.a2(d,u.a(new C.kK()),v),t)
r=B.aa(new B.a2(d,u.a(new C.kL()),v),t)
for(v=s.length,q=0;q<s.length;s.length===v||(0,B.L)(s),++q){this.cT(w,s[q],"","\n"," ")
w.a+="\n"}p=B.y(x.N,k)
for(k=r.length,q=0;q<r.length;r.length===k||(0,B.L)(r),++q){o=r[q]
v=o.c
v.toString
J.au(p.bk(v,new C.kM()),o)}for(k=new B.aj(p,p.$ti.h("aj<1,2>")).gu(0);k.j();){n=k.d
m=n.a
l=n.b
w.a+=m+" {\n"
for(v=J.a_(l);v.j();){u=v.gl()
this.cT(w,u,"  ","\n"," ")
w.a+="\n"}w.a+="}\n"}k=w.a
return D.c.O(k.charCodeAt(0)==0?k:k)},
cT(d,e,f,g,h){var w,v,u,t,s,r,q=f+"  ",p=f+e.gd3()+h+"{"+g
p=d.a+=p
for(w=e.b,v=w.length,u=h+"!important",t=0;t<v;++t){s=w[t]
r=s.c?u:""
p+=q+s.a+":"+h+s.b+r+";"+g
d.a=p}d.a=p+(f+"}")},
$iwB:1}
C.kJ.prototype={}
C.aD.prototype={
P(){return"JxParseErrorCode."+this.b}}
C.kQ.prototype={
p(d){return'Invalid class "'+this.a+'": '+this.c+"."}}
C.dU.prototype={}
C.hx.prototype={
eN(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=D.c.O(a2),a0=new C.kS(d),a1=d.length
if(a1===0)return a0.$2(A.aK,"classe vide")
if(a1>512)return a0.$2(A.dV,"class too long (more than 512 characters)")
for(t=0;t<a1;++t){s=d.charCodeAt(t)
if(s<=32||s===127)return a0.$2(A.dX,"space or control character not allowed")}w=d
if(J.vK(w,"!")){w=J.vR(w,0,J.aN(w)-1)
r=!0}else{r=J.vN(w,"!")
if(r)w=J.vQ(w,1)}if(J.aN(w)===0)return a0.$2(A.aK,'class is only "!"')
v=null
try{v=C.wF(w)}catch(q){a1=B.aB(q)
if(a1 instanceof B.dM){u=a1
return a0.$2(A.dZ,u.a)}else throw q}if(J.r_(v,new C.kR()))return a0.$2(A.dY,'empty segment (extra ":" or missing value)')
a1=this.a
p=0
for(;;){if(!(p<J.aN(v)-1&&a1.D(0,J.tc(v,p))))break;++p}o=J.vO(v,p)
n=J.vP(v,0,p)
a1=o.length
if(a1===1){m=D.a.gT(o)
l=null}else{D.a.m(n,D.a.bu(o,0,a1-2))
a1=o.length
k=a1-2
if(!(k>=0))return B.x(o,k)
m=o[k]
l=D.a.gbh(o)}a1=n.length
if(a1>8)return a0.$2(A.e_,"too many variants (maximum 8)")
k=x.N
j=B.cj(k)
for(i=0;i<n.length;n.length===a1||(0,B.L)(n),++i){h=n[i]
g=$.v8()
if(!g.b.test(h))return a0.$2(A.e0,'invalid variant "'+h+'"')
if(!j.t(0,h))return a0.$2(A.e1,'repeated variant "'+h+'"')}f=D.c.C(m,"-")
if(f){if(l==null)return a0.$2(A.a9,'the "-" sign needs a value (for example "-m:4")')
m=D.c.I(m,1)}if(l!=null&&D.c.C(l,"-")){if(f)return a0.$2(A.a9,'double negation ("-m:-4")')
l=D.c.I(l,1)
if(l.length===0||D.c.C(l,"-"))return a0.$2(A.a9,"incomplete negative value")
f=!0}a1=$.v6()
if(!a1.b.test(m)){a1=D.c.D(m,"!")?y.b:'invalid utility "'+m+'"'
return a0.$2(A.e2,a1)}if(l!=null){e=C.wE(l)
if(e!=null)return a0.$2(e.a,e.b)}return new C.dU(new C.bP(d,m,l,B.dX(n,k),r,f),null)},
$iwD:1}
C.kT.prototype={
fA(d){var w=this.a,v=d.a
if(w.V(v))D.a.da(this.b,new C.kU(d))
w.i(0,v,d)
D.a.t(this.b,d)},
fB(d){var w,v
x.m.a(d)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.L)(d),++v)this.fA(d[v])},
d1(d){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.bj(d))return t}return null},
gfd(){var w,v,u,t,s,r,q=B.cj(x.N)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
A:{if(t instanceof F.ce){s=t.b.gG()
break A}if(t instanceof F.u){s=t.b.gG()
break A}if(t instanceof F.dS){r=t.b
s=r
break A}if(t instanceof F.dR){r=t.b
s=r
break A}s=E.f
break A}s=J.a_(s)
while(s.j())q.t(0,B.k(s.gl()))}return q}}
C.hB.prototype={
fF(d,e){var w=this.c.a.k(0,d)
w=w==null?null:w.k(0,e)
return w==null?null:w.c},
$ird:1}
C.mp.prototype={
c6(d){var w,v,u,t=this.a.k(0,d)
if(t==null)return E.b
w=x.N
w=B.y(w,w)
for(v=t.gaa(),v=v.gu(v);v.j();){u=v.gl()
w.i(0,u.b,u.c)}return w},
dm(d){this.a.bk(d.a,new C.mq()).i(0,d.b,d)}}
C.cN.prototype={
N(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.cN&&B.aA(v)===B.aA(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gF(d){return B.cl(this.a,this.b,this.c,D.h,D.h,D.h)},
p(d){return this.a+"."+this.b+": "+this.c}}
var z=a.updateTypes(["D(aC)","m<aC>()","dU(aD,b)","D(ab)","v<b,cN>()","d()"])
C.mK.prototype={
$0(){return D.k.fa(1000*this.a.now())},
$S:55}
C.kH.prototype={
$2(d,e){var w,v=x.c
v.a(d)
v.a(e)
w=D.e.L(d.b,e.b)
return w!==0?w:D.e.L(d.a,e.a)},
$S:56}
C.mt.prototype={
$2(d,e){var w,v=x.V
v.a(d)
v.a(e)
w=D.k.L(d.c,e.c)
return w!==0?w:D.e.L(d.a,e.a)},
$S:57}
C.kK.prototype={
$1(d){var w=x.l.a(d).c
return!(w!=null&&w.length!==0)},
$S:z+0}
C.kL.prototype={
$1(d){var w=x.l.a(d).c
return w!=null&&w.length!==0},
$S:z+0}
C.kM.prototype={
$0(){return B.a([],x.R)},
$S:z+1}
C.kS.prototype={
$2(d,e){return new C.dU(null,new C.kQ(C.tw(this.a),e))},
$S:z+2}
C.kR.prototype={
$1(d){return B.k(d).length===0},
$S:9}
C.kU.prototype={
$1(d){return x.O.a(d).a===this.a.a},
$S:z+3}
C.mq.prototype={
$0(){return B.y(x.N,x.S)},
$S:z+4};(function installTearOffs(){var w=a._static_0
w(C,"yU","wY",5)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(B.ad,[C.mK,C.kM,C.mq])
w(B.A,[C.na,C.bP,C.kA,C.hq,C.kE,C.kF,C.ms,C.ht,C.kJ,C.kQ,C.dU,C.hx,C.kT,C.hB,C.mp,C.cN])
w(B.bb,[C.kH,C.mt,C.kS])
w(B.a8,[C.kK,C.kL,C.kR,C.kU])
v(C.aD,B.aG)})()
B.J(b.typeUniverse,JSON.parse('{"ht":{"wB":[]},"aD":{"ap":[]},"hx":{"wD":[]},"hB":{"rd":[]}}'))
var y={b:'"!" goes at the start or the end of the class',a:'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'}
var x=(function rtii(){var w=B.j
return{w:w("c<b,b>"),M:w("c<b,m<b>>"),j:w("c<b,v<b,b>>"),m:w("o<ab>"),T:w("l<bP>"),K:w("l<bt>"),R:w("l<aC>"),D:w("l<ab>"),U:w("l<+index,rank(d,d)>"),P:w("l<+index,name,width(d,b,K)>"),s:w("l<b>"),L:w("bP"),l:w("aC"),O:w("ab"),S:w("cN"),W:w("m<bP>"),y:w("m<aC>"),a:w("m<b>"),A:w("v<b,cN>"),f:w("v<b,b>"),c:w("+index,rank(d,d)"),V:w("+index,name,width(d,b,K)"),F:w("e1"),N:w("b")}})();(function constants(){var w=a.makeConstList
A.co=new B.dM('"]" without a matching "["',null)
A.cp=new B.dM('unclosed "["',null)
A.dx=new C.hq(!1)
A.aK=new C.aD(0,"empty")
A.dV=new C.aD(1,"tooLong")
A.a8=new C.aD(10,"invalidValue")
A.dW=new C.aD(11,"unsafeValue")
A.dX=new C.aD(2,"invalidCharacter")
A.dY=new C.aD(3,"emptySegment")
A.dZ=new C.aD(4,"unbalancedBrackets")
A.e_=new C.aD(5,"tooManyVariants")
A.e0=new C.aD(6,"invalidVariant")
A.e1=new C.aD(7,"duplicateVariant")
A.a9=new C.aD(8,"invalidNegative")
A.e2=new C.aD(9,"invalidIdentifier")
A.qE={bcol:0}
A.hZ=w(["border-collapse"],x.s)
A.m6=new B.c(A.qE,[A.hZ],x.M)
A.qT={collapse:0,separate:1}
A.mz=new B.c(A.qT,["collapse","separate"],x.w)
A.fA=new F.u(A.m6,null,A.mz,E.d,!1,!1,null,null,null,E.b,"border-collapse")
A.ti={tl:0}
A.hV=w(["table-layout"],x.s)
A.nG=new B.c(A.ti,[A.hV],x.M)
A.qz={auto:0,fixed:1}
A.mU=new B.c(A.qz,["auto","fixed"],x.w)
A.h6=new F.u(A.nG,null,A.mU,E.d,!1,!1,null,null,null,E.b,"table-layout")
A.qP={cap:0}
A.hQ=w(["caption-side"],x.s)
A.n6=new B.c(A.qP,[A.hQ],x.M)
A.tj={top:0,bottom:1}
A.o3=new B.c(A.tj,["top","bottom"],x.w)
A.fU=new F.u(A.n6,null,A.o3,E.d,!1,!1,null,null,null,E.b,"caption-side")
A.hL=w([A.fA,A.h6,A.fU],x.D)
A.ij=w(["100","300","500","700","900"],x.s)
A.u4=new B.f("group-"," ")
A.uB=new B.f("peer-"," ~ ")
A.l4=w([A.u4,A.uB],B.j("l<+(b,b)>"))
A.bG={xs:0,sm:1,base:2,lg:3,xl:4,"2xl":5,"3xl":6,"4xl":7,"5xl":8,"6xl":9}
A.lF=new B.c(A.bG,["0.75rem","0.875rem","1rem","1.125rem","1.25rem","1.5rem","1.875rem","2.25rem","3rem","3.75rem"],x.w)
A.bt={sans:0,serif:1,mono:2}
A.lJ=new B.c(A.bt,[y.a,'ui-serif, Georgia, Cambria, "Times New Roman", serif','ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace'],x.w)
A.pD={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6,full:7}
A.lR=new B.c(A.pD,["0px","0.125rem","0.375rem","0.5rem","0.75rem","1rem","1.5rem","9999px"],x.w)
A.ps={hover:0,focus:1,active:2,visited:3,disabled:4,checked:5,"focus-within":6,"focus-visible":7,first:8,last:9,odd:10,even:11,enabled:12,required:13,optional:14,valid:15,invalid:16,"user-valid":17,"user-invalid":18,"read-only":19,"placeholder-shown":20,autofill:21,indeterminate:22,open:23,modal:24}
A.m3=new B.c(A.ps,[":hover",":focus",":active",":visited",":disabled",":checked",":focus-within",":focus-visible",":first-child",":last-child",":nth-child(odd)",":nth-child(even)",":enabled",":required",":optional",":valid",":invalid",":user-valid",":user-invalid",":read-only",":placeholder-shown",":autofill",":indeterminate","[open]",":modal"],x.w)
A.tr={thin:0,extralight:1,light:2,normal:3,medium:4,semibold:5,bold:6,extrabold:7,black:8}
A.mn=new B.c(A.tr,["100","200","300","400","500","600","700","800","900"],x.w)
A.bw={gray:0,red:1,orange:2,yellow:3,green:4,teal:5,blue:6,indigo:7,purple:8,pink:9}
A.kk=w(["#f3f4f6","#d1d5db","#6b7280","#374151","#111827"],x.s)
A.j7=w(["#fee2e2","#fca5a5","#ef4444","#b91c1c","#7f1d1d"],x.s)
A.lh=w(["#ffedd5","#fdba74","#f97316","#c2410c","#7c2d12"],x.s)
A.kK=w(["#fef9c3","#fde047","#eab308","#a16207","#713f12"],x.s)
A.jD=w(["#dcfce7","#86efac","#22c55e","#15803d","#14532d"],x.s)
A.id=w(["#ccfbf1","#5eead4","#14b8a6","#0f766e","#134e4a"],x.s)
A.j6=w(["#dbeafe","#93c5fd","#3b82f6","#1d4ed8","#1e3a8a"],x.s)
A.iA=w(["#e0e7ff","#a5b4fc","#6366f1","#4338ca","#312e81"],x.s)
A.iF=w(["#f3e8ff","#d8b4fe","#a855f7","#7e22ce","#581c87"],x.s)
A.kV=w(["#fce7f3","#f9a8d4","#ec4899","#be185d","#831843"],x.s)
A.mX=new B.c(A.bw,[A.kk,A.j7,A.lh,A.kK,A.jD,A.id,A.j6,A.iA,A.iF,A.kV],x.M)
A.q2={dark:0,"motion-safe":1,"motion-reduce":2,"contrast-more":3,portrait:4,landscape:5,print:6}
A.nd=new B.c(A.q2,["(prefers-color-scheme: dark)","(prefers-reduced-motion: no-preference)","(prefers-reduced-motion: reduce)","(prefers-contrast: more)","(orientation: portrait)","(orientation: landscape)","print"],x.w)
A.q7={"jx-spin":0,"jx-ping":1,"jx-pulse":2,"jx-bounce":3,"jx-fade-in":4,"jx-fade-out":5,"jx-slide-up":6,"jx-slide-down":7,"jx-zoom-in":8,"jx-slide-in-right":9,"jx-slide-in-left":10,"jx-indeterminate":11}
A.bN={to:0}
A.t2={rotate:0}
A.md=new B.c(A.t2,["360deg"],x.w)
A.o6=new B.c(A.bN,[A.md],x.j)
A.qp={"75%, 100%":0}
A.t5={scale:0,opacity:1}
A.m4=new B.c(A.t5,["2","0"],x.w)
A.ma=new B.c(A.qp,[A.m4],x.j)
A.rb={"50%":0}
A.bJ={opacity:0}
A.mc=new B.c(A.bJ,["0.5"],x.w)
A.oq=new B.c(A.rb,[A.mc],x.j)
A.ri={"0%, 100%":0,"50%":1}
A.bu={translate:0,"animation-timing-function":1}
A.oV=new B.c(A.bu,["0 -25%","cubic-bezier(0.8, 0, 1, 1)"],x.w)
A.oU=new B.c(A.bu,["0 0","cubic-bezier(0, 0, 0.2, 1)"],x.w)
A.pg=new B.c(A.ri,[A.oV,A.oU],x.j)
A.G={from:0}
A.bh=new B.c(A.bJ,["0"],x.w)
A.no=new B.c(A.G,[A.bh],x.j)
A.o5=new B.c(A.bN,[A.bh],x.j)
A.bK={opacity:0,translate:1}
A.nI=new B.c(A.bK,["0","0 1rem"],x.w)
A.ns=new B.c(A.G,[A.nI],x.j)
A.nH=new B.c(A.bK,["0","0 -1rem"],x.w)
A.nn=new B.c(A.G,[A.nH],x.j)
A.rO={opacity:0,scale:1}
A.oC=new B.c(A.rO,["0","0.95"],x.w)
A.nr=new B.c(A.G,[A.oC],x.j)
A.pb=new B.c(E.X,["100% 0"],x.w)
A.nq=new B.c(A.G,[A.pb],x.j)
A.bq=new B.c(E.X,["-100% 0"],x.w)
A.np=new B.c(A.G,[A.bq],x.j)
A.pa=new B.c(E.X,["300% 0"],x.w)
A.ov=new B.c(E.bE,[A.bq,A.pa],x.j)
A.bm=new B.c(A.q7,[A.o6,A.ma,A.oq,A.pg,A.no,A.o5,A.ns,A.nn,A.nr,A.nq,A.np,A.ov],B.j("c<b,v<b,v<b,b>>>"))
A.tv={sm:0,md:1,lg:2,xl:3,"2xl":4}
A.ol=new B.c(A.tv,["640px","768px","1024px","1280px","1536px"],x.w)
A.pU={placeholder:0,file:1,backdrop:2}
A.oo=new B.c(A.pU,["::placeholder","::file-selector-button","::backdrop"],x.w)
A.q0={sm:0,md:1,lg:2,xl:3,"2xl":4,inner:5,none:6}
A.or=new B.c(A.q0,["0 1px 2px 0 rgb(0 0 0 / 0.05)","0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)","0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","0 25px 50px -12px rgb(0 0 0 / 0.25)","inset 0 2px 4px 0 rgb(0 0 0 / 0.05)","none"],x.w)
A.qa={none:0,tight:1,snug:2,normal:3,relaxed:4,loose:5}
A.pj=new B.c(A.qa,["1","1.25","1.375","1.5","1.625","2"],x.w)
A.tI=new B.f(A.a8,'an arbitrary value ends with "]"')
A.tW=new B.f(A.a8,"empty arbitrary value")})();(function staticFields(){$.mM=0
$.mN=C.yU()})();(function lazyInitializers(){var w=a.lazyFinal
w($,"Ax","rY",()=>{C.x6()
return $.mM})
w($,"Ah","v5",()=>B.N("\\s+"))
w($,"Al","v9",()=>{var v="-webkit-appearance",u=x.N
return B.dX([C.ae("*, ::before, ::after",B.r(["box-sizing","border-box","border-width","0","border-style","solid","border-color","currentColor"],u,u)),C.ae("html",B.r(["line-height","1.5","-webkit-text-size-adjust","100%","tab-size","4","font-family",y.a],u,u)),C.ae("body",B.r(["margin","0","line-height","inherit"],u,u)),C.ae("h1, h2, h3, h4, h5, h6, p, blockquote, figure, pre, hr, dl, dd",B.r(["margin","0"],u,u)),C.ae("h1, h2, h3, h4, h5, h6",B.r(["font-size","inherit","font-weight","inherit"],u,u)),C.ae("ol, ul, menu",B.r(["list-style","none","margin","0","padding","0"],u,u)),C.ae("a",B.r(["color","inherit","text-decoration","inherit"],u,u)),C.ae("img, svg, video, canvas, audio, iframe, embed, object",B.r(["display","block","vertical-align","middle"],u,u)),C.ae("img, video",B.r(["max-width","100%","height","auto"],u,u)),C.ae("button, input, optgroup, select, textarea",B.r(["font","inherit","color","inherit","margin","0","padding","0","background-color","transparent"],u,u)),C.ae('button, [role="button"]',B.r(["cursor","pointer"],u,u)),C.ae("button, select",B.r(["text-transform","none"],u,u)),C.ae('button, [type="button"], [type="reset"], [type="submit"]',B.r([v,"button","background-image","none"],u,u)),C.ae("input::placeholder, textarea::placeholder",B.r(["opacity","1","color","#9ca3af"],u,u)),C.ae("textarea",B.r(["resize","vertical"],u,u)),C.ae("fieldset",B.r(["margin","0","padding","0","min-width","0"],u,u)),C.ae("legend",B.r(["padding","0"],u,u)),C.ae('[type="search"]',B.r([v,"textfield","outline-offset","-2px"],u,u)),C.ae("::-webkit-search-decoration",B.r([v,"none"],u,u)),C.ae("::-webkit-inner-spin-button, ::-webkit-outer-spin-button",B.r(["height","auto"],u,u)),C.ae(":disabled",B.r(["cursor","default"],u,u)),C.ae("table",B.r(["border-collapse","collapse","text-indent","0"],u,u)),C.ae("[hidden]",B.r(["display","none"],u,u))],x.l)})
w($,"Ai","v6",()=>B.N("^[a-zA-Z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*$"))
w($,"Ak","v8",()=>B.N("^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$"))
w($,"Aj","v7",()=>B.N("^(?:#[0-9a-fA-F]{3,8}|[a-zA-Z0-9]+(?:[.\\-/][a-zA-Z0-9]+)*%?)$"))
w($,"Ae","v2",()=>C.wA())
w($,"Ag","v4",()=>{var v,u,t,s=x.N
s=B.y(s,s)
s.i(0,"0","0px")
s.i(0,"px","1px")
for(v=1;v<=16;++v){u=v*0.25
t=u===D.k.fO(u)?D.e.p(D.k.c3(u)):D.k.p(u)
s.i(0,""+v,t+"rem")}s.i(0,"auto","auto")
return s})
w($,"Af","v3",()=>{var v,u=x.N
u=B.y(u,u)
u.i(0,"0","0")
u.i(0,"5","0.05")
for(v=10;v<=90;v+=10)u.i(0,""+v,B.z(v/100))
u.i(0,"95","0.95")
u.i(0,"100","1")
return u})})()};
(a=>{a["qCT7AwdlPryB49Up5HRIXvdi1Dk="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_125.part.js.map
