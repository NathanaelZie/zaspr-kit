((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,C={
v3(){throw B.n(B.aA("Cannot modify constant Set"))},
dx:function dx(){},
af:function af(d,e,f){this.a=d
this.b=e
this.$ti=f},
en:function en(d,e){this.a=d
this.$ti=e},
c5(d){return new C.ex(d,null)},
kv:function kv(){},
ex:function ex(d,e){this.a=d
this.b=e},
c1:function c1(d,e,f){this.a=d
this.b=e
this.c=f},
vz(d,e){var w,v
if(d.length!==e.length)return!1
for(w=0;w<d.length;++w){v=d[w]
if(!(w<e.length))return B.v(e,w)
if(!v.M(0,e[w]))return!1}return!0},
aE:function aE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hn:function hn(){},
qj(d,e){return new C.c7(e,d)},
ht(d,e,f,g,h,i,j){return new C.q(i,null,h,A.d,!0,e,g,null,j,f,d)},
tG(d){var w,v,u=d.geD()
u.toString
w=D.c.P(u)
v=C.rz(w)
if(v!=null)throw B.n(C.c5('Arbitrary value rejected for "'+d.a+'": '+v+"."))
return w},
tH(d,e){var w,v,u,t,s,r,q,p=d.length
if(p===0)return A.f
w=B.a([],x.G)
for(v=J.Z(e);v.j();){u=v.gl()
if(u===d||u.length===0)continue
t=C.xQ(d,u)
if(t>2||t>=p)continue
if(0>=u.length)return B.v(u,0)
s=u[0]
if(0>=p)return B.v(d,0)
s=s===d[0]?0:1
D.a.t(w,new B.e(t*2+s,u))}p=B.a([],x.m)
for(r=0;r<w.length;++r)p.push(new B.e(w[r],r))
D.a.a5(p,new C.o1())
v=B.a([],x.s)
for(u=p.length,q=0;q<p.length;p.length===u||(0,B.G)(p),++q)v.push(p[q].a.b)
return v},
xQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=e.length,k=l+1,j=x.S,i=J.rs(k,j)
for(w=0;w<k;++w)i[w]=w
for(v=d.length,u=x.t,w=0;w<v;w=s,i=t){t=B.d3(k,0,!1,j)
s=w+1
D.a.i(t,0,s)
for(r=0;r<l;r=p){q=d[w]===e[r]?0:1
p=r+1
o=t[r]
n=i.length
if(!(p<n))return B.v(i,p)
m=i[p]
if(!(r<n))return B.v(i,r)
D.a.i(t,p,D.a.fl(B.a([o+1,m+1,i[r]+q],u),new C.nM()))}}if(!(l<i.length))return B.v(i,l)
return i[l]},
c7:function c7(d,e){this.b=d
this.a=e},
q:function q(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.a=n},
me:function me(d){this.a=d},
dF:function dF(d,e,f){this.b=d
this.c=e
this.a=f},
dE:function dE(d,e,f){this.b=d
this.e=e
this.a=f},
o1:function o1(){},
nM:function nM(){},
xu(d){var w=B.Y("^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")
return w.b.test(d)?d:null},
xU(d){var w=$.e8()
return w.b.test(d)?d+"px":null},
xj(d){var w=$.e8()
return w.b.test(d)?d+"deg":null},
xS(d){var w=$.e8()
return w.b.test(d)?d+"ms":null},
xA(d){var w=$.e8()
return w.b.test(d)?d:null},
xV(d){var w,v,u,t,s=$.e8()
if(!s.b.test(d))return null
w=C.yt(d)
v=D.e.ad(w,100)
s=D.c.cZ(D.e.p(D.e.ag(w,100)),2,"0")
u=B.Y("0+$")
t=B.fK(s,u,"")
s=""+v
return t.length===0?s:s+"."+t},
x7(d){var w,v,u,t=B.Y("^([0-9]+)/([0-9]+)$").b8(d)
if(t==null)w=null
else{w=t.b
v=w.length
if(1>=v)return B.v(w,1)
u=w[1]
if(2>=v)return B.v(w,2)
w=B.D(u)+" / "+B.D(w[2])}return w},
by(d,e,f,g,h,i,j,k){var w=B.B([e,B.a([f],x.s)],x.N,x.a),v=i?A.mo:A.nu
return C.ht(d,h,v,j,k,w,g+"({})")},
pP:function pP(){},
yt(d){var w=E.mv(d,null)
if(w!=null)return w
throw B.n(B.kb(d,null))},
rz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k="CSS comments are not allowed",j="unbalanced parentheses"
if(D.c.P(d).length===0)return"empty value"
w=d.length
if(w>512)return"value too long (more than 512 characters)"
for(v=null,u=0,t=-1,s=0;s<w;++s){r=d.charCodeAt(s)
if(r<32||r===127)return"control character not allowed"
if(r===92)return'character "\\" not allowed'
if(r===60)return'character "<" not allowed'
if(r===47){q=s+1
q=q<w&&d.charCodeAt(q)===42}else q=!1
if(q)return k
if(r===42){q=s+1
q=q<w&&d.charCodeAt(q)===47}else q=!1
if(q)return k
if(v!=null){if(r===v)v=null
continue}A:{if(34===r||39===r){v=r
break A}if(40===r){++u
q=!1
if(t<0)if(s>=3){q=s-3
p=q+4
q=p<=w&&D.c.T(d,q,p).toLowerCase()==="url("}if(q)t=u
break A}if(41===r){if(u===t)t=-1;--u
if(u<0)return j
break A}if(59===r){if(t<0)return'character ";" not allowed'
break A}if(123===r||125===r)return"braces are not allowed"
if(33===r)return'character "!" not allowed (use the class ! suffix)'}}if(v!=null)return"unclosed quotes"
if(u!==0)return j
w=B.Y("\\s+")
o=B.fK(d.toLowerCase(),w,"")
if(D.c.B(o,"@"))return"@ rule not allowed"
for(w=A.mL.gO(),q=w.$ti,w=new B.aB(w.a(),q.h("aB<1>")),q=q.c;w.j();){p=w.b
if(p==null)p=q.a(p)
n=p.a
if(B.q2(o,n,0))return p.b}m=D.c.ba(o,"data:")
while(m!==-1){w=m+5
l=D.c.I(o,w)
if(!D.c.B(l,"image/")&&!D.c.B(l,"font/"))return"only image or font data: URLs are allowed"
m=D.c.cT(o,"data:",w)}return null},
xv(d){var w=$.uz()
return w.b.test(d)?d:null},
xo(d){var w=E.mv(d,null)
if(w==null||w<100||w>900||D.e.ag(w,100)!==0)return null
return d},
x9(d){var w=$.uA()
return w.b.test(d)?A.aQ:null},
y4(d){var w=$.uB()
return w.b.test(d)?d:null},
xw(d){var w=$.uy()
return w.b.test(d)?d:null},
tC(d){var w,v,u=x.N
u=B.x(u,u)
for(w=1;w<=d;++w){v=""+w
u.i(0,v,"repeat("+v+", minmax(0, 1fr))")}u.i(0,"none","none")
return u},
xl(d){var w=E.mv(d,null)
return w==null?null:B.D(w)+"ms"},
dZ(d){var w=x.N
return B.B(["transition-property",d,"transition-timing-function","cubic-bezier(0.4, 0, 0.2, 1)","transition-duration","150ms"],w,w)}},A
J=c[1]
B=c[0]
D=c[2]
E=c[38]
C=a.updateHolder(c[34],C)
A=c[73]
C.dx.prototype={
t(d,e){B.r(this).c.a(e)
C.v3()}}
C.af.prototype={
gq(d){return this.b},
gD(d){return this.b===0},
gJ(d){return this.b!==0},
gu(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new B.cn(w,w.length,v.$ti.h("cn<1>"))},
C(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
C.en.prototype={
gq(d){return this.a.length},
gD(d){return this.a.length===0},
gJ(d){return this.a.length!==0},
gu(d){var w=this.a
return new B.cn(w,w.length,this.$ti.h("cn<1>"))},
a8(){var w,v,u,t,s=this,r=s.$map
if(r==null){r=new B.cX(s.$ti.h("cX<1,1>"))
for(w=s.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.G)(w),++u){t=w[u]
r.i(0,t,t)}s.$map=r}return r},
C(d,e){return this.a8().U(e)}}
C.kv.prototype={
p(d){return B.av(this).p(0)+": "+this.a}}
C.ex.prototype={}
C.c1.prototype={
fB(){var w=this.c?" !important":""
return this.a+": "+this.b+w+";"},
M(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.c1&&B.av(v)===B.av(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gE(d){return B.ce(this.a,this.b,this.c,D.h,D.h,D.h)},
p(d){return this.fB()}}
C.aE.prototype={
gcS(){var w,v=this.e
if(v==null)v=""
w=this.d
if(w==null)w=""
return v+this.a+w},
M(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.aE&&B.av(v)===B.av(e)&&v.a===e.a&&v.c==e.c&&v.d==e.d&&v.e==e.e&&C.vz(v.b,e.b)
else w=!0
return w},
gE(d){var w=this
return B.ce(w.a,w.c,w.d,w.e,B.mp(w.b),D.h)},
p(d){var w,v,u,t,s,r=this.c,q=r!=null,p=q&&r.length!==0?r+" { ":""
p+=this.gcS()+" { "
for(w=this.b,v=w.length,u=0;u<v;++u){t=w[u]
s=t.c?" !important":""
p+=t.a+": "+t.b+s+"; "}p+="}"
r=q&&r.length!==0?p+" }":p
return r.charCodeAt(0)==0?r:r}}
C.hn.prototype={
b7(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=".";v<w;++v){t=d[v]
s=B.Y("[0-9]")
if(s.b.test(t))if(v!==0){s=v===1&&d[0]==="-"
r=s}else r=!0
else r=!1
if(r){if(0>=t.length)return B.v(t,0)
u+="\\"+D.e.fC(t.charCodeAt(0),16)+" "}else{s=$.ub()
u=s.b.test(t)?u+t:u+("\\"+t)}}return u.charCodeAt(0)==0?u:u},
$iab:1}
C.c7.prototype={
bf(d){return!d.gb9()&&!d.f&&this.b.U(d.b)},
au(d,e){var w,v,u,t,s=d.b,r=this.b.k(0,s)
if(r==null)throw B.n(C.c5('Unknown class "'+s+'" for "'+this.a+'".'))
s=this.b7(d.a)
w=B.a([],x.K)
for(v=r.gO(),v=v.gu(v),u=d.e;v.j();){t=v.gl()
w.push(new C.c1(t.a,t.b,u))}return B.a([new C.aE(s,w,null,null,null)],x.R)}}
C.q.prototype={
bf(d){var w
if(d.gb9())w=(this.r||!d.f)&&this.b.U(d.b)
else w=!1
return w},
au(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.b,l=o.b.k(0,m)
if(l==null)throw B.n(C.c5('Utility "'+m+'" is not handled by "'+o.a+'".'))
w=o.ft(d,e)
if(w==null||o.e.C(0,w))throw B.n(C.c5('Invalid value "'+B.D(d.c)+'" for "'+m+'".'+o.eQ(d,e)))
if(d.f)w=o.e_(w,d)
m=o.x
v=m==null?n:m.$1(w)
if(v==null)v=l
m=o.y
if(m==null)u=n
else{m=B.fK(m,"{}",w)
u=m}if(u==null)u=w
m=o.b7(d.a)
t=B.a([],x.K)
for(s=J.Z(v),r=d.e;s.j();)t.push(new C.c1(s.gl(),u,r))
for(s=o.z.gO(),q=s.$ti,s=new B.aB(s.a(),q.h("aB<1>")),q=q.c;s.j();){p=s.b
if(p==null)p=q.a(p)
t.push(new C.c1(p.a,p.b,r))}return B.a([new C.aE(m,t,n,n,n)],x.R)},
ft(d,e){var w,v,u,t,s=this
if(d.gaI()){if(!s.f)return null
return C.tG(d)}w=d.c
w.toString
v=s.c
if(v!=null){u=e.fs(v,w)
if(u!=null)return u}t=s.d.k(0,w)
if(t==null){t=s.w
w=t==null?null:t.$1(w)}else w=t
return w},
eQ(d,e){var w,v,u,t,s,r,q,p=this,o=p.c,n=x.s,m=B.a([],n)
if(o!=null)D.a.n(m,e.c.bX(o).gF())
D.a.n(m,p.d.gF())
w=x.U
v=B.a7(new B.a_(m,x.Q.a(new C.me(p)),w),w.h("o.E"))
u=B.a([],n)
t=d.gaI()?null:d.c
s=t==null?null:B.dB(C.tH(t,v),x.N)
if(s!=null)D.a.t(u,'did you mean "'+d.b+":"+s+'"?')
if(v.length!==0){r=B.f0(v,0,B.e0(12,"count",x.S),B.a0(v).c).v(0,", ")
n=v.length>12?"\u2026":""
D.a.t(u,"accepted values: "+r+n)}if(p.f)D.a.t(u,"or an arbitrary value in brackets")
if(u.length===0)return""
q=D.a.v(u,"; ")
if(0>=q.length)return B.v(q,0)
return" "+q[0].toUpperCase()+D.c.I(q,1)+"."},
e_(d,e){var w=$.ud()
if(w.b.test(d))return d
w=B.Y("^[0-9.]")
if(w.b.test(d))return"-"+d
if(D.c.B(d,"-"))return D.c.I(d,1)
if(D.c.B(d,"calc(")||D.c.B(d,"var("))return"calc(-1 * "+d+")"
throw B.n(C.c5('Value "'+d+'" cannot be negative ('+e.a+")."))}}
C.dF.prototype={
bf(d){return d.gb9()&&!d.f&&!d.gaI()&&this.b.C(0,d.b)},
au(d,e){var w,v,u,t,s=d.c,r=this.c.k(0,s)
if(r==null)throw B.n(C.c5('Invalid value "'+B.D(s)+'" for "'+d.b+'".'))
s=this.b7(d.a)
w=B.a([],x.K)
for(v=r.gO(),v=v.gu(v),u=d.e;v.j();){t=v.gl()
w.push(new C.c1(t.a,t.b,u))}return B.a([new C.aE(s,w,null,null,null)],x.R)}}
C.dE.prototype={
bf(d){var w
if(d.gb9())w=!d.f&&this.b.C(0,d.b)
else w=!1
return w},
au(d,e){var w,v,u,t,s,r=d.gaI()?C.tG(d):d.c,q=this.e.$3(r,d,e)
if(q==null||q.gD(q))throw B.n(C.c5('Invalid value "'+B.D(d.c)+'" for "'+d.b+'".'))
w=this.b7(d.a)
v=B.a([],x.K)
for(u=q.gO(),u=u.gu(u),t=d.e;u.j();){s=u.gl()
v.push(new C.c1(s.a,s.b,t))}return B.a([new C.aE(w,v,null,null,null)],x.R)}}
var z=a.updateTypes(["b?(b)","t<b,b>?(b?,bI,qk)","m<b>?(b)"])
C.me.prototype={
$1(d){return!this.a.e.C(0,B.k(d))},
$S:8}
C.o1.prototype={
$2(d,e){var w,v=x.X
v.a(d)
v.a(e)
w=D.e.L(d.a.a,e.a.a)
return w!==0?w:D.e.L(d.b,e.b)},
$S:50}
C.nM.prototype={
$2(d,e){B.am(d)
B.am(e)
return d<e?d:e},
$S:51}
C.pP.prototype={
$3(d,e,f){var w
if(d==="none")return A.mJ
if(d!=null){w=$.e8()
w=!w.b.test(d)}else w=!0
if(w)return null
w=x.N
return B.B(["overflow","hidden","display","-webkit-box","-webkit-box-orient","vertical","-webkit-line-clamp",d],w,w)},
$S:z+1};(function installTearOffs(){var w=a._static_1
w(C,"u_","xu",0)
w(C,"u1","xU",0)
w(C,"q4","xj",0)
w(C,"u0","xS",0)
w(C,"z3","xA",0)
w(C,"dt","xV",0)
w(C,"z2","x7",0)
w(C,"j1","xv",0)
w(C,"z_","xo",0)
w(C,"yZ","x9",2)
w(C,"z0","y4",0)
w(C,"r0","xw",0)
w(C,"z1","xl",0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.dx,B.bs)
v(C.dx,[C.af,C.en])
v(B.y,[C.kv,C.c1,C.aE,C.hn])
w(C.ex,C.kv)
v(C.hn,[C.c7,C.q,C.dF,C.dE])
v(B.a9,[C.me,C.pP])
v(B.bg,[C.o1,C.nM])})()
B.L(b.typeUniverse,JSON.parse('{"dx":{"bs":["1"],"d7":["1"],"E":["1"],"o":["1"]},"af":{"dx":["1"],"bs":["1"],"d7":["1"],"E":["1"],"o":["1"]},"en":{"dx":["1"],"bs":["1"],"d7":["1"],"E":["1"],"o":["1"]},"hn":{"ab":[]},"c7":{"ab":[]},"q":{"ab":[]},"dF":{"ab":[]},"dE":{"ab":[]}}'))
var y={j:"^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$",a:"var(--jx-bd-blur,) var(--jx-bd-brightness,) var(--jx-bd-contrast,) var(--jx-bd-grayscale,) var(--jx-bd-saturate,)",d:"var(--jx-blur,) var(--jx-brightness,) var(--jx-contrast,) var(--jx-grayscale,) var(--jx-hue-rotate,) var(--jx-invert,) var(--jx-saturate,) var(--jx-sepia,) var(--jx-drop-shadow,)"}
var x=(function rtii(){var w=B.j
return{w:w("c<b,b>"),M:w("c<b,m<b>>"),j:w("c<b,t<b,b>>"),O:w("af<b>"),K:w("l<c1>"),R:w("l<aE>"),D:w("l<ab>"),m:w("l<+(+(d,b),d)>"),G:w("l<+(d,b)>"),s:w("l<b>"),t:w("l<d>"),a:w("m<b>"),f:w("t<b,b>"),X:w("+(+(d,b),d)"),N:w("b"),U:w("a_<b>"),Q:w("C(b)"),S:w("d")}})();(function constants(){var w=a.makeConstList
A.pj={uppercase:0,lowercase:1,capitalize:2,"normal-case":3,italic:4,"not-italic":5,truncate:6,antialiased:7,"tabular-nums":8,"sr-only":9,"not-sr-only":10,visible:11,invisible:12,isolate:13,"scroll-smooth":14}
A.T={"text-transform":0}
A.oP=new B.c(A.T,["uppercase"],x.w)
A.oQ=new B.c(A.T,["lowercase"],x.w)
A.oR=new B.c(A.T,["capitalize"],x.w)
A.oS=new B.c(A.T,["none"],x.w)
A.bH={"font-style":0}
A.mu=new B.c(A.bH,["italic"],x.w)
A.mv=new B.c(A.bH,["normal"],x.w)
A.px={overflow:0,"text-overflow":1,"white-space":2}
A.p8=new B.c(A.px,["hidden","ellipsis","nowrap"],x.w)
A.pu={"-webkit-font-smoothing":0,"-moz-osx-font-smoothing":1}
A.lW=new B.c(A.pu,["antialiased","grayscale"],x.w)
A.pT={"font-variant-numeric":0}
A.p6=new B.c(A.pT,["tabular-nums"],x.w)
A.qK={position:0,width:1,height:2,padding:3,margin:4,overflow:5,clip:6,"white-space":7,"border-width":8}
A.ml=new B.c(A.qK,["absolute","1px","1px","0","-1px","hidden","rect(0, 0, 0, 0)","nowrap","0"],x.w)
A.pz={position:0,width:1,height:2,padding:3,margin:4,overflow:5,clip:6,"white-space":7}
A.mf=new B.c(A.pz,["static","auto","auto","0","0","visible","auto","normal"],x.w)
A.bJ={visibility:0}
A.m4=new B.c(A.bJ,["visible"],x.w)
A.m3=new B.c(A.bJ,["hidden"],x.w)
A.r6={isolation:0}
A.nf=new B.c(A.r6,["isolate"],x.w)
A.pv={"scroll-behavior":0}
A.nx=new B.c(A.pv,["smooth"],x.w)
A.mG=new B.c(A.pj,[A.oP,A.oQ,A.oR,A.oS,A.mu,A.mv,A.p8,A.lW,A.p6,A.ml,A.mf,A.m4,A.m3,A.nf,A.nx],x.j)
A.es=new C.c7(A.mG,"text-standalone")
A.qt={grayscale:0,invert:1,sepia:2,"filter-none":3}
A.qw={"--jx-grayscale":0,filter:1}
A.nE=new B.c(A.qw,["grayscale(1)",y.d],x.w)
A.q2={"--jx-invert":0,filter:1}
A.mb=new B.c(A.q2,["invert(1)",y.d],x.w)
A.rG={"--jx-sepia":0,filter:1}
A.mM=new B.c(A.rG,["sepia(1)",y.d],x.w)
A.by={filter:0}
A.nv=new B.c(A.by,["none"],x.w)
A.mS=new B.c(A.qt,[A.nE,A.mb,A.mM,A.nv],x.j)
A.et=new C.c7(A.mS,"filter-standalone")
A.r1={gx:0,gy:1}
A.j8=w(["column-gap"],x.s)
A.kh=w(["row-gap"],x.s)
A.lF=new B.c(A.r1,[A.j8,A.kh],x.M)
A.b=new B.c(D.ad,[],x.w)
A.bw={auto:0}
A.t=new C.af(A.bw,1,x.O)
A.fg=new C.q(A.lF,"spacing",A.b,A.t,!0,!1,null,null,null,A.b,"gap-axis")
A.r0={grow:0,shrink:1}
A.i8=w(["flex-grow"],x.s)
A.la=w(["flex-shrink"],x.s)
A.oh=new B.c(A.r0,[A.i8,A.la],x.M)
A.pe={"0":0,"1":1}
A.mX=new B.c(A.pe,["0","1"],x.w)
A.d=new C.af(D.ad,0,x.O)
A.fl=new C.q(A.oh,null,A.mX,A.d,!0,!1,null,null,null,A.b,"flex-grow-shrink")
A.qM={ease:0}
A.i9=w(["transition-timing-function"],x.s)
A.p7=new B.c(A.qM,[A.i9],x.M)
A.p9={linear:0,in:1,out:2,"in-out":3}
A.nL=new B.c(A.p9,["linear","cubic-bezier(0.4, 0, 1, 1)","cubic-bezier(0, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],x.w)
A.fm=new C.q(A.p7,null,A.nL,A.d,!0,!1,null,null,null,A.b,"transition-timing-function")
A.qF={cur:0}
A.jV=w(["cursor"],x.s)
A.n6=new B.c(A.qF,[A.jV],x.M)
A.rC={auto:0,default:1,pointer:2,text:3,move:4,wait:5,grab:6,"not-allowed":7}
A.nd=new B.c(A.rC,["auto","default","pointer","text","move","wait","grab","not-allowed"],x.w)
A.fv=new C.q(A.n6,null,A.nd,A.d,!1,!1,null,null,null,A.b,"cursor")
A.qH={d:0}
A.jY=w(["display"],x.s)
A.ns=new B.c(A.qH,[A.jY],x.M)
A.tl={flex:0,block:1,grid:2,inline:3,"inline-block":4,"inline-flex":5,"inline-grid":6,contents:7,none:8,hidden:9}
A.bb=new B.c(A.tl,["flex","block","grid","inline","inline-block","inline-flex","inline-grid","contents","none","none"],x.w)
A.fx=new C.q(A.ns,null,A.bb,A.d,!1,!1,null,null,null,A.b,"display")
A.tk={wb:0}
A.hX=w(["overflow-wrap"],x.s)
A.mt=new B.c(A.tk,[A.hX],x.M)
A.pf={normal:0,words:1,anywhere:2}
A.m6=new B.c(A.pf,["normal","break-word","anywhere"],x.w)
A.fM=new C.q(A.mt,null,A.m6,A.d,!1,!1,null,null,null,A.b,"word-break")
A.t8={tw:0}
A.iJ=w(["text-wrap"],x.s)
A.lD=new B.c(A.t8,[A.iJ],x.M)
A.pP={wrap:0,nowrap:1,balance:2,pretty:3}
A.ot=new B.c(A.pP,["wrap","nowrap","balance","pretty"],x.w)
A.fZ=new C.q(A.lD,null,A.ot,A.d,!1,!1,null,null,null,A.b,"text-wrap")
A.rF={pos:0}
A.kP=w(["position"],x.s)
A.lS=new B.c(A.rF,[A.kP],x.M)
A.qL={static:0,relative:1,absolute:2,fixed:3,sticky:4}
A.bj=new B.c(A.qL,["static","relative","absolute","fixed","sticky"],x.w)
A.h_=new C.q(A.lS,null,A.bj,A.d,!1,!1,null,null,null,A.b,"position")
A.qQ={fl:0}
A.k4=w(["flex"],x.s)
A.my=new B.c(A.qQ,[A.k4],x.M)
A.qZ={"1":0,auto:1,initial:2,none:3}
A.me=new B.c(A.qZ,["1 1 0%","1 1 auto","0 1 auto","none"],x.w)
A.h4=new C.q(A.my,null,A.me,A.d,!0,!1,null,null,null,A.b,"flex")
A.qh={as:0}
A.ig=w(["align-self"],x.s)
A.lq=new B.c(A.qh,[A.ig],x.M)
A.pl={auto:0,start:1,end:2,center:3,stretch:4,baseline:5}
A.lH=new B.c(A.pl,["auto","flex-start","flex-end","center","stretch","baseline"],x.w)
A.h8=new C.q(A.lq,null,A.lH,A.d,!1,!1,null,null,null,A.b,"align-self")
A.rS={sh:0}
A.aP=w(["box-shadow"],x.s)
A.mT=new B.c(A.rS,[A.aP],x.M)
A.h9=new C.q(A.mT,"shadow",A.b,A.d,!0,!1,null,null,null,A.b,"box-shadow")
A.qJ={dur:0}
A.k6=w(["transition-duration"],x.s)
A.ol=new B.c(A.qJ,[A.k6],x.M)
A.hd=new C.q(A.ol,null,A.b,A.d,!0,!1,C.z1(),null,null,A.b,"transition-duration")
A.qR={flw:0}
A.kV=w(["flex-wrap"],x.s)
A.n3=new B.c(A.qR,[A.kV],x.M)
A.pY={wrap:0,nowrap:1,reverse:2}
A.os=new B.c(A.pY,["wrap","nowrap","wrap-reverse"],x.w)
A.hn=new C.q(A.n3,null,A.os,A.d,!1,!1,null,null,null,A.b,"flex-wrap")
A.rX={p:0,px:1,py:2,pt:3,pr:4,pb:5,pl:6}
A.kK=w(["padding"],x.s)
A.i_=w(["padding-left","padding-right"],x.s)
A.kY=w(["padding-top","padding-bottom"],x.s)
A.k0=w(["padding-top"],x.s)
A.ie=w(["padding-right"],x.s)
A.ii=w(["padding-bottom"],x.s)
A.jW=w(["padding-left"],x.s)
A.mB=new B.c(A.rX,[A.kK,A.i_,A.kY,A.k0,A.ie,A.ii,A.jW],x.M)
A.hj=new C.q(A.mB,"spacing",A.b,A.t,!0,!1,null,null,null,A.b,"padding")
A.pm={m:0,mx:1,my:2,mt:3,mr:4,mb:5,ml:6}
A.kv=w(["margin"],x.s)
A.ih=w(["margin-left","margin-right"],x.s)
A.iV=w(["margin-top","margin-bottom"],x.s)
A.iL=w(["margin-top"],x.s)
A.k5=w(["margin-right"],x.s)
A.hW=w(["margin-bottom"],x.s)
A.jC=w(["margin-left"],x.s)
A.oj=new B.c(A.pm,[A.kv,A.ih,A.iV,A.iL,A.k5,A.hW,A.jC],x.M)
A.hm=new C.q(A.oj,"spacing",A.b,A.d,!0,!0,null,null,null,A.b,"margin")
A.aL=w([A.hj,A.hm],x.D)
A.r_={grad:0}
A.aQ=w(["background-image"],x.s)
A.n1=new B.c(A.r_,[A.aQ],x.M)
A.rh={"to-t":0,"to-tr":1,"to-r":2,"to-br":3,"to-b":4,"to-bl":5,"to-l":6,"to-tl":7}
A.oI=new B.c(A.rh,["to top","to top right","to right","to bottom right","to bottom","to bottom left","to left","to top left"],x.w)
A.fc=new C.q(A.n1,null,A.oI,A.d,!0,!1,C.q4(),null,"linear-gradient({}, var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))",A.b,"linear-gradient")
A.q4={"grad-radial":0,"grad-conic":1}
A.bD={"background-image":0}
A.m2=new B.c(A.bD,["radial-gradient(var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))"],x.w)
A.m1=new B.c(A.bD,["conic-gradient(var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))"],x.w)
A.or=new B.c(A.q4,[A.m2,A.m1],x.j)
A.er=new C.c7(A.or,"gradient-standalone")
A.bz={from:0,to:1}
A.iT=w(["--jx-from"],x.s)
A.ij=w(["--jx-to"],x.s)
A.oe=new B.c(A.bz,[A.iT,A.ij],x.M)
A.t6={transparent:0,current:1}
A.bg=new B.c(A.t6,["transparent","currentColor"],x.w)
A.f6=new C.q(A.oe,"colors",A.bg,A.d,!0,!1,C.u_(),null,null,A.b,"gradient-stops")
A.th={via:0}
A.iz=w(["--jx-via"],x.s)
A.lI=new B.c(A.th,[A.iz],x.M)
A.fE=new C.q(A.lI,"colors",A.bg,A.d,!0,!1,C.u_(),null,"{},",A.b,"gradient-via")
A.aN=w([A.fc,A.er,A.f6,A.fE],x.D)
A.ps={bw:0,bwt:1,bwr:2,bwb:3,bwl:4,bwx:5,bwy:6}
A.kA=w(["border-width"],x.s)
A.hM=w(["border-top-width"],x.s)
A.kR=w(["border-right-width"],x.s)
A.ku=w(["border-bottom-width"],x.s)
A.jE=w(["border-left-width"],x.s)
A.ik=w(["border-left-width","border-right-width"],x.s)
A.ip=w(["border-top-width","border-bottom-width"],x.s)
A.mw=new B.c(A.ps,[A.kA,A.hM,A.kR,A.ku,A.jE,A.ik,A.ip],x.M)
A.fs=new C.q(A.mw,"border-width",A.b,A.d,!0,!1,null,null,null,A.b,"border-width")
A.qn={bc:0}
A.kN=w(["border-color"],x.s)
A.m5=new B.c(A.qn,[A.kN],x.M)
A.fC=new C.q(A.m5,"colors",A.b,A.d,!0,!1,C.j1(),null,null,A.b,"border-color")
A.qu={br:0}
A.kr=w(["border-radius"],x.s)
A.ox=new B.c(A.qu,[A.kr],x.M)
A.fe=new C.q(A.ox,"border-radius",A.b,A.d,!0,!1,null,null,null,A.b,"border-radius")
A.aO=w([A.fs,A.fC,A.fe],x.D)
A.qe={anim:0}
A.jM=w(["animation"],x.s)
A.od=new B.c(A.qe,[A.jM],x.M)
A.rB={none:0,spin:1,ping:2,pulse:3,bounce:4,"fade-in":5,"fade-out":6,"slide-up":7,"slide-down":8,"zoom-in":9,"slide-in-right":10,"slide-in-left":11,indeterminate:12}
A.mU=new B.c(A.rB,["none","jx-spin 1s linear infinite","jx-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite","jx-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite","jx-bounce 1s infinite","jx-fade-in 0.3s ease-out both","jx-fade-out 0.3s ease-in both","jx-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) both","jx-zoom-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-in-right 0.35s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-in-left 0.35s cubic-bezier(0.16, 1, 0.3, 1) both","jx-indeterminate 1.4s ease-in-out infinite"],x.w)
A.hq=new C.q(A.od,null,A.mU,A.d,!0,!1,null,null,null,A.b,"animation")
A.qc={adur:0,adelay:1}
A.hS=w(["animation-duration"],x.s)
A.iM=w(["animation-delay"],x.s)
A.nt=new B.c(A.qc,[A.hS,A.iM],x.M)
A.fJ=new C.q(A.nt,null,A.b,A.d,!0,!1,C.u0(),null,null,A.b,"animation-timing")
A.qI={delay:0}
A.jz=w(["transition-delay"],x.s)
A.nm=new B.c(A.qI,[A.jz],x.M)
A.ft=new C.q(A.nm,null,A.b,A.d,!0,!1,C.u0(),null,null,A.b,"transition-delay")
A.aR=w([A.hq,A.fJ,A.ft],x.D)
A.tq={z:0}
A.it=w(["z-index"],x.s)
A.m8=new B.c(A.tq,[A.it],x.M)
A.pF={"0":0,"10":1,"20":2,"30":3,"40":4,"50":5,auto:6}
A.lz=new B.c(A.pF,["0","10","20","30","40","50","auto"],x.w)
A.fj=new C.q(A.m8,null,A.lz,A.d,!0,!0,null,null,null,A.b,"z-index")
A.pZ={top:0,right:1,bottom:2,left:3,inset:4}
A.l_=w(["top"],x.s)
A.kT=w(["right"],x.s)
A.jO=w(["bottom"],x.s)
A.ks=w(["left"],x.s)
A.ki=w(["inset"],x.s)
A.lo=new B.c(A.pZ,[A.l_,A.kT,A.jO,A.ks,A.ki],x.M)
A.tp={full:0,"1/2":1,auto:2}
A.ac=new B.c(A.tp,["100%","50%","auto"],x.w)
A.h3=new C.q(A.lo,"spacing",A.ac,A.d,!0,!0,null,null,null,A.b,"inset")
A.rU={smt:0}
A.kW=w(["scroll-margin-top"],x.s)
A.p5=new B.c(A.rU,[A.kW],x.M)
A.hs=new C.q(A.p5,"spacing",A.b,A.t,!0,!1,null,null,null,A.b,"scroll-margin-top")
A.qi={ov:0,ovx:1,ovy:2}
A.kJ=w(["overflow"],x.s)
A.iO=w(["overflow-x"],x.s)
A.iP=w(["overflow-y"],x.s)
A.op=new B.c(A.qi,[A.kJ,A.iO,A.iP],x.M)
A.q8={auto:0,hidden:1,clip:2,visible:3,scroll:4}
A.nK=new B.c(A.q8,["auto","hidden","clip","visible","scroll"],x.w)
A.h1=new C.q(A.op,null,A.nK,A.d,!1,!1,null,null,null,A.b,"overflow")
A.aT=w([A.fj,A.h3,A.hs,A.h1],x.D)
A.qS={fs:0}
A.kz=w(["font-size"],x.s)
A.nC=new B.c(A.qS,[A.kz],x.M)
A.fw=new C.q(A.nC,"font-size",A.b,A.d,!0,!1,null,null,null,A.b,"font-size")
A.qV={fw:0}
A.j4=w(["font-weight"],x.s)
A.nj=new B.c(A.qV,[A.j4],x.M)
A.f7=new C.q(A.nj,"font-weight",A.b,A.d,!0,!1,C.z_(),null,null,A.b,"font-weight")
A.rd={lh:0}
A.ko=w(["line-height"],x.s)
A.mh=new B.c(A.rd,[A.ko],x.M)
A.fd=new C.q(A.mh,"line-height",A.b,A.d,!0,!1,C.z0(),null,null,A.b,"line-height")
A.rY={ta:0}
A.lc=w(["text-align"],x.s)
A.lv=new B.c(A.rY,[A.lc],x.M)
A.bs={left:0,center:1,right:2,justify:3,start:4,end:5}
A.m_=new B.c(A.bs,["left","center","right","justify","start","end"],x.w)
A.hg=new C.q(A.lv,null,A.m_,A.d,!1,!1,null,null,null,A.b,"text-align")
A.tg={va:0}
A.hN=w(["vertical-align"],x.s)
A.nZ=new B.c(A.tg,[A.hN],x.M)
A.pp={baseline:0,top:1,middle:2,bottom:3,"text-top":4,"text-bottom":5,sub:6,"super":7}
A.nT=new B.c(A.pp,["baseline","top","middle","bottom","text-top","text-bottom","sub","super"],x.w)
A.fX=new C.q(A.nZ,null,A.nT,A.d,!0,!1,null,null,null,A.b,"vertical-align")
A.rg={lst:0}
A.hU=w(["list-style-type"],x.s)
A.ma=new B.c(A.rg,[A.hU],x.M)
A.q5={none:0,disc:1,circle:2,square:3,decimal:4}
A.oo=new B.c(A.q5,["none","disc","circle","square","decimal"],x.w)
A.fF=new C.q(A.ma,null,A.oo,A.d,!0,!1,null,null,null,A.b,"list-style-type")
A.rf={lsp:0}
A.kQ=w(["list-style-position"],x.s)
A.ok=new B.c(A.rf,[A.kQ],x.M)
A.r5={inside:0,outside:1}
A.mc=new B.c(A.r5,["inside","outside"],x.w)
A.h6=new C.q(A.ok,null,A.mc,A.d,!1,!1,null,null,null,A.b,"list-style-position")
A.qO={ff:0}
A.js=w(["font-family"],x.s)
A.oZ=new B.c(A.qO,[A.js],x.M)
A.hr=new C.q(A.oZ,"font-family",A.b,A.d,!0,!1,null,null,null,A.b,"font-family")
A.re={ls:0}
A.iH=w(["letter-spacing"],x.s)
A.oB=new B.c(A.re,[A.iH],x.M)
A.pb={tighter:0,tight:1,normal:2,wide:3,wider:4}
A.mC=new B.c(A.pb,["-0.05em","-0.025em","0em","0.025em","0.05em"],x.w)
A.fS=new C.q(A.oB,null,A.mC,A.d,!0,!0,null,null,null,A.b,"letter-spacing")
A.rZ={td:0}
A.i6=w(["text-decoration-line"],x.s)
A.nk=new B.c(A.rZ,[A.i6],x.M)
A.q7={underline:0,"line-through":1,none:2}
A.oU=new B.c(A.q7,["underline","line-through","none"],x.w)
A.h2=new C.q(A.nk,null,A.oU,A.d,!1,!1,null,null,null,A.b,"text-decoration-line")
A.t_={tdc:0}
A.jD=w(["text-decoration-color"],x.s)
A.nR=new B.c(A.t_,[A.jD],x.M)
A.fn=new C.q(A.nR,"colors",A.b,A.d,!0,!1,C.j1(),null,null,A.b,"text-decoration-color")
A.t0={tdt:0}
A.hH=w(["text-decoration-thickness"],x.s)
A.nw=new B.c(A.t0,[A.hH],x.M)
A.py={"1":0,"2":1,"4":2,auto:3}
A.lT=new B.c(A.py,["1px","2px","4px","auto"],x.w)
A.fz=new C.q(A.nw,null,A.lT,A.d,!0,!1,null,null,null,A.b,"text-decoration-thickness")
A.t7={tuo:0}
A.jF=w(["text-underline-offset"],x.s)
A.ll=new B.c(A.t7,[A.jF],x.M)
A.rH={"1":0,"2":1,"4":2,"8":3,auto:4}
A.nX=new B.c(A.rH,["1px","2px","4px","8px","auto"],x.w)
A.h7=new C.q(A.ll,null,A.nX,A.d,!0,!1,null,null,null,A.b,"text-underline-offset")
A.tm={ws:0}
A.kp=w(["white-space"],x.s)
A.ny=new B.c(A.tm,[A.kp],x.M)
A.ph={normal:0,nowrap:1,pre:2,"pre-wrap":3,"pre-line":4}
A.lN=new B.c(A.ph,["normal","nowrap","pre","pre-wrap","pre-line"],x.w)
A.hv=new C.q(A.ny,null,A.lN,A.d,!1,!1,null,null,null,A.b,"white-space")
A.qT={fst:0}
A.jG=w(["font-stretch"],x.s)
A.o1=new B.c(A.qT,[A.jG],x.M)
A.pM={condensed:0,"semi-condensed":1,normal:2,"semi-expanded":3,expanded:4}
A.nl=new B.c(A.pM,["75%","87.5%","100%","112.5%","125%"],x.w)
A.fK=new C.q(A.o1,null,A.nl,A.d,!0,!1,null,null,null,A.b,"font-stretch")
A.rv={ol:0}
A.kI=w(["outline"],x.s)
A.oq=new B.c(A.rv,[A.kI],x.M)
A.nU=new B.bi(["none","none","1","1px solid","2","2px solid","4","4px solid"],B.j("bi<b,b>"))
A.hi=new C.q(A.oq,null,A.nU,A.d,!0,!1,null,null,null,A.b,"outline")
A.rw={olc:0}
A.il=w(["outline-color"],x.s)
A.lL=new B.c(A.rw,[A.il],x.M)
A.h5=new C.q(A.lL,"colors",A.b,A.d,!0,!1,C.j1(),null,null,A.b,"outline-color")
A.rx={olo:0}
A.i0=w(["outline-offset"],x.s)
A.md=new B.c(A.rx,[A.i0],x.M)
A.pX={"0":0,"1":1,"2":2,"4":3,"8":4}
A.aa=new B.c(A.pX,["0px","1px","2px","4px","8px"],x.w)
A.fa=new C.q(A.md,null,A.aa,A.d,!0,!0,null,null,null,A.b,"outline-offset")
A.aW=w([A.fw,A.f7,A.fd,A.hg,A.fX,A.fF,A.h6,A.hr,A.fS,A.h2,A.fn,A.fz,A.h7,A.hv,A.fK,A.hi,A.h5,A.fa],x.D)
A.rM={rot:0}
A.kU=w(["rotate"],x.s)
A.lM=new B.c(A.rM,[A.kU],x.M)
A.ro={none:0}
A.o0=new B.c(A.ro,["none"],x.w)
A.fR=new C.q(A.lM,null,A.o0,A.d,!0,!0,C.q4(),null,null,A.b,"rotate")
A.rT={skx:0,sky:1}
A.hY=w(["--jx-skew-x"],x.s)
A.hZ=w(["--jx-skew-y"],x.s)
A.lQ=new B.c(A.rT,[A.hY,A.hZ],x.M)
A.t5={transform:0}
A.lf=new B.c(A.t5,["skewX(var(--jx-skew-x, 0)) skewY(var(--jx-skew-y, 0))"],x.w)
A.fi=new C.q(A.lQ,null,A.b,A.d,!0,!0,C.q4(),null,null,A.lf,"skew")
A.rA={origin:0}
A.iE=w(["transform-origin"],x.s)
A.oy=new B.c(A.rA,[A.iE],x.M)
A.po={center:0,top:1,bottom:2,left:3,right:4,"top-left":5,"top-right":6,"bottom-left":7,"bottom-right":8}
A.ab=new B.c(A.po,["center","top","bottom","left","right","top left","top right","bottom left","bottom right"],x.w)
A.fV=new C.q(A.oy,null,A.ab,A.d,!0,!1,null,null,null,A.b,"transform-origin")
A.aX=w([A.fR,A.fi,A.fV],x.D)
A.qg={ar:0}
A.kD=w(["aspect-ratio"],x.s)
A.nn=new B.c(A.qg,[A.kD],x.M)
A.ri={auto:0,square:1,video:2,photo:3,portrait:4}
A.oA=new B.c(A.ri,["auto","1 / 1","16 / 9","4 / 3","3 / 4"],x.w)
A.fH=new C.q(A.nn,null,A.oA,A.d,!0,!1,C.z2(),null,null,A.b,"aspect-ratio")
A.rt={obf:0}
A.iG=w(["object-fit"],x.s)
A.oc=new B.c(A.rt,[A.iG],x.M)
A.bx={contain:0,cover:1,fill:2,none:3,"scale-down":4}
A.lm=new B.c(A.bx,["contain","cover","fill","none","scale-down"],x.w)
A.f9=new C.q(A.oc,null,A.lm,A.d,!1,!1,null,null,null,A.b,"object-fit")
A.ru={obp:0}
A.jx=w(["object-position"],x.s)
A.ov=new B.c(A.ru,[A.jx],x.M)
A.fP=new C.q(A.ov,null,A.ab,A.d,!0,!1,null,null,null,A.b,"object-position")
A.qq={bgp:0}
A.iN=w(["background-position"],x.s)
A.nF=new B.c(A.qq,[A.iN],x.M)
A.ha=new C.q(A.nF,null,A.ab,A.d,!0,!1,null,null,null,A.b,"background-position")
A.qr={bgr:0}
A.kf=w(["background-repeat"],x.s)
A.oL=new B.c(A.qr,[A.kf],x.M)
A.pa={repeat:0,none:1,x:2,y:3,round:4,space:5}
A.n2=new B.c(A.pa,["repeat","no-repeat","repeat-x","repeat-y","round","space"],x.w)
A.fB=new C.q(A.oL,null,A.n2,A.d,!1,!1,null,null,null,A.b,"background-repeat")
A.rk={mix:0}
A.i4=w(["mix-blend-mode"],x.s)
A.no=new B.c(A.rk,[A.i4],x.M)
A.pr={normal:0,multiply:1,screen:2,overlay:3,darken:4,lighten:5,difference:6,luminosity:7}
A.m9=new B.c(A.pr,["normal","multiply","screen","overlay","darken","lighten","difference","luminosity"],x.w)
A.fh=new C.q(A.no,null,A.m9,A.d,!1,!1,null,null,null,A.b,"mix-blend-mode")
A.qv={bs:0}
A.iC=w(["border-style"],x.s)
A.o_=new B.c(A.qv,[A.iC],x.M)
A.bK={solid:0,dashed:1,dotted:2,double:3,none:4,hidden:5}
A.mx=new B.c(A.bK,["solid","dashed","dotted","double","none","hidden"],x.w)
A.he=new C.q(A.o_,null,A.mx,A.d,!1,!1,null,null,null,A.b,"border-style")
A.aY=w([A.fH,A.f9,A.fP,A.ha,A.fB,A.fh,A.he],x.D)
A.qy={c:0}
A.jU=w(["color"],x.s)
A.oN=new B.c(A.qy,[A.jU],x.M)
A.fW=new C.q(A.oN,"colors",A.b,A.d,!0,!1,C.j1(),null,null,A.b,"color")
A.qp={bg:0}
A.jw=w(["background-color"],x.s)
A.o9=new B.c(A.qp,[A.jw],x.M)
A.hp=new C.q(A.o9,"colors",A.b,A.d,!0,!1,C.j1(),C.yZ(),null,A.b,"background-color")
A.qs={bgs:0}
A.kj=w(["background-size"],x.s)
A.nh=new B.c(A.qs,[A.kj],x.M)
A.bt={auto:0,cover:1,contain:2}
A.og=new B.c(A.bt,["auto","cover","contain"],x.w)
A.hw=new C.q(A.nh,null,A.og,A.d,!0,!1,null,null,null,A.b,"background-size")
A.aZ=w([A.fW,A.hp,A.hw],x.D)
A.t9={tx:0}
A.iA=w(["--jx-tx"],x.s)
A.m0=new B.c(A.t9,[A.iA],x.M)
A.W={translate:0}
A.bk=new B.c(A.W,["var(--jx-tx, 0) var(--jx-ty, 0)"],x.w)
A.fy=new C.q(A.m0,"spacing",A.ac,A.t,!0,!0,null,null,null,A.bk,"translate-x")
A.ta={ty:0}
A.hK=w(["--jx-ty"],x.s)
A.oz=new B.c(A.ta,[A.hK],x.M)
A.fQ=new C.q(A.oz,"spacing",A.ac,A.t,!0,!0,null,null,null,A.bk,"translate-y")
A.rP={sc:0}
A.kX=w(["scale"],x.s)
A.nA=new B.c(A.rP,[A.kX],x.M)
A.rb={"0":0,"50":1,"75":2,"90":3,"95":4,"100":5,"105":6,"110":7,"125":8,"150":9}
A.oH=new B.c(A.rb,["0","0.5","0.75","0.9","0.95","1","1.05","1.1","1.25","1.5"],x.w)
A.hf=new C.q(A.nA,null,A.oH,A.d,!0,!1,null,null,null,A.b,"scale")
A.b0=w([A.fy,A.fQ,A.hf],x.D)
A.tj={w:0}
A.l8=w(["width"],x.s)
A.o3=new B.c(A.tj,[A.l8],x.M)
A.bC={full:0,min:1,max:2,fit:3,"1/2":4,"1/3":5,"2/3":6,"1/4":7,"3/4":8,screen:9}
A.bd=new B.c(A.bC,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","100vw"],x.w)
A.fA=new C.q(A.o3,"spacing",A.bd,A.d,!0,!1,null,null,null,A.b,"width")
A.r3={h:0}
A.ke=w(["height"],x.s)
A.p_=new B.c(A.r3,[A.ke],x.M)
A.be=new B.c(A.bC,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","100vh"],x.w)
A.fq=new C.q(A.p_,"spacing",A.be,A.d,!0,!1,null,null,null,A.b,"height")
A.rn={mw:0}
A.hP=w(["max-width"],x.s)
A.lE=new B.c(A.rn,[A.hP],x.M)
A.bA={full:0,min:1,max:2,fit:3,"1/2":4,"1/3":5,"2/3":6,"1/4":7,"3/4":8,none:9,screen:10}
A.lg=new B.c(A.bA,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","none","100vw"],x.w)
A.hx=new C.q(A.lE,"spacing",A.lg,A.t,!0,!1,null,null,null,A.b,"max-width")
A.rj={mh:0}
A.iq=w(["max-height"],x.s)
A.mK=new B.c(A.rj,[A.iq],x.M)
A.lh=new B.c(A.bA,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","none","100vh"],x.w)
A.fI=new C.q(A.mK,"spacing",A.lh,A.t,!0,!1,null,null,null,A.b,"max-height")
A.rm={mnw:0}
A.i1=w(["min-width"],x.s)
A.nz=new B.c(A.rm,[A.i1],x.M)
A.fL=new C.q(A.nz,"spacing",A.bd,A.t,!0,!1,null,null,null,A.b,"min-width")
A.rl={mnh:0}
A.kC=w(["min-height"],x.s)
A.oT=new B.c(A.rl,[A.kC],x.M)
A.fU=new C.q(A.oT,"spacing",A.be,A.t,!0,!1,null,null,null,A.b,"min-height")
A.b2=w([A.fA,A.fq,A.hx,A.fI,A.fL,A.fU],x.D)
A.f=w([],x.s)
A.rs={o:0}
A.kF=w(["opacity"],x.s)
A.oO=new B.c(A.rs,[A.kF],x.M)
A.fN=new C.q(A.oO,"opacity",A.b,A.d,!0,!1,null,null,null,A.b,"opacity")
A.b3=w([A.fN],x.D)
A.qf={app:0}
A.iK=w(["-webkit-appearance","appearance"],x.s)
A.mA=new B.c(A.qf,[A.iK],x.M)
A.rp={none:0,auto:1}
A.bn=new B.c(A.rp,["none","auto"],x.w)
A.fD=new C.q(A.mA,null,A.bn,A.d,!1,!1,null,null,null,A.b,"appearance")
A.qb={accent:0}
A.hV=w(["accent-color"],x.s)
A.oK=new B.c(A.qb,[A.hV],x.M)
A.li=new B.c(A.bw,["auto"],x.w)
A.ff=new C.q(A.oK,"colors",A.li,A.d,!0,!1,C.r0(),null,null,A.b,"accent-color")
A.qA={caret:0}
A.j1=w(["caret-color"],x.s)
A.n0=new B.c(A.qA,[A.j1],x.M)
A.qk={auto:0,transparent:1}
A.nB=new B.c(A.qk,["auto","transparent"],x.w)
A.f5=new C.q(A.n0,"colors",A.nB,A.d,!0,!1,C.r0(),null,null,A.b,"caret-color")
A.rR={scheme:0}
A.j7=w(["color-scheme"],x.s)
A.lG=new B.c(A.rR,[A.j7],x.M)
A.qB={normal:0,light:1,dark:2,"light-dark":3}
A.mm=new B.c(A.qB,["normal","light","dark","light dark"],x.w)
A.fT=new C.q(A.lG,null,A.mm,A.d,!1,!1,null,null,null,A.b,"color-scheme")
A.rO={rsz:0}
A.kS=w(["resize"],x.s)
A.lC=new B.c(A.rO,[A.kS],x.M)
A.pq={none:0,x:1,y:2,both:3}
A.oG=new B.c(A.pq,["none","horizontal","vertical","both"],x.w)
A.fY=new C.q(A.lC,null,A.oG,A.d,!1,!1,null,null,null,A.b,"resize")
A.qU={fsz:0}
A.jI=w(["field-sizing"],x.s)
A.mg=new B.c(A.qU,[A.jI],x.M)
A.qE={content:0,fixed:1}
A.lr=new B.c(A.qE,["content","fixed"],x.w)
A.ht=new C.q(A.mg,null,A.lr,A.d,!1,!1,null,null,null,A.b,"field-sizing")
A.rE={pe:0}
A.iF=w(["pointer-events"],x.s)
A.mi=new B.c(A.rE,[A.iF],x.M)
A.ho=new C.q(A.mi,null,A.bn,A.d,!1,!1,null,null,null,A.b,"pointer-events")
A.td={us:0}
A.id=w(["-webkit-user-select","user-select"],x.s)
A.ms=new B.c(A.td,[A.id],x.M)
A.ql={none:0,text:1,all:2,auto:3}
A.oi=new B.c(A.ql,["none","text","all","auto"],x.w)
A.hh=new C.q(A.ms,null,A.oi,A.d,!1,!1,null,null,null,A.b,"user-select")
A.rK={ring:0}
A.lK=new B.c(A.rK,[A.aP],x.M)
A.fr=new C.q(A.lK,null,A.aa,A.d,!0,!1,null,null,"0 0 0 {} var(--jx-ring-color, currentColor)",A.b,"ring")
A.rL={ringc:0}
A.jJ=w(["--jx-ring-color"],x.s)
A.nY=new B.c(A.rL,[A.jJ],x.M)
A.hb=new C.q(A.nY,"colors",A.b,A.d,!0,!1,C.r0(),null,null,A.b,"ring-color")
A.b5=w([A.fD,A.ff,A.f5,A.fT,A.fY,A.ht,A.ho,A.hh,A.fr,A.hb],x.D)
A.qa={ac:0}
A.iU=w(["align-content"],x.s)
A.oJ=new B.c(A.qa,[A.iU],x.M)
A.t1={start:0,end:1,center:2,between:3,around:4,evenly:5,stretch:6,normal:7}
A.ba=new B.c(A.t1,["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch","normal"],x.w)
A.hk=new C.q(A.oJ,null,A.ba,A.d,!1,!1,null,null,null,A.b,"align-content")
A.rD={pc:0}
A.l1=w(["place-content"],x.s)
A.p1=new B.c(A.rD,[A.l1],x.M)
A.hu=new C.q(A.p1,null,A.ba,A.d,!1,!1,null,null,null,A.b,"place-content")
A.r9={ji:0,pi:1}
A.jQ=w(["justify-items"],x.s)
A.iy=w(["place-items"],x.s)
A.o2=new B.c(A.r9,[A.jQ,A.iy],x.M)
A.rc={start:0,end:1,center:2,stretch:3,baseline:4}
A.p2=new B.c(A.rc,["start","end","center","stretch","baseline"],x.w)
A.hl=new C.q(A.o2,null,A.p2,A.d,!1,!1,null,null,null,A.b,"justify-items")
A.ra={js:0}
A.kZ=w(["justify-self"],x.s)
A.lk=new B.c(A.ra,[A.kZ],x.M)
A.q0={start:0,end:1,center:2,stretch:3,baseline:4,auto:5}
A.mZ=new B.c(A.q0,["start","end","center","stretch","baseline","auto"],x.w)
A.fb=new C.q(A.lk,null,A.mZ,A.d,!1,!1,null,null,null,A.b,"justify-self")
A.rz={order:0}
A.kH=w(["order"],x.s)
A.nO=new B.c(A.rz,[A.kH],x.M)
A.tn={first:0,last:1,none:2}
A.oC=new B.c(A.tn,["-9999","9999","0"],x.w)
A.hc=new C.q(A.nO,null,A.oC,A.d,!0,!0,C.z3(),null,null,A.b,"order")
A.qm={basis:0}
A.le=w(["flex-basis"],x.s)
A.lZ=new B.c(A.qm,[A.le],x.M)
A.pH={auto:0,full:1,"1/2":2,"1/3":3,"2/3":4,"1/4":5,"3/4":6}
A.on=new B.c(A.pH,["auto","100%","50%","33.333333%","66.666667%","25%","75%"],x.w)
A.fo=new C.q(A.lZ,"spacing",A.on,A.d,!0,!1,null,null,null,A.b,"flex-basis")
A.b7=w([A.hk,A.hu,A.hl,A.fb,A.hc,A.fo],x.D)
A.qd={ai:0}
A.jK=w(["align-items"],x.s)
A.mr=new B.c(A.qd,[A.jK],x.M)
A.r7={start:0,end:1,center:2,baseline:3,stretch:4}
A.lU=new B.c(A.r7,["flex-start","flex-end","center","baseline","stretch"],x.w)
A.f8=new C.q(A.mr,null,A.lU,A.d,!1,!1,null,null,null,A.b,"align-items")
A.r8={jc:0}
A.kc=w(["justify-content"],x.s)
A.oM=new B.c(A.r8,[A.kc],x.M)
A.pi={start:0,end:1,center:2,between:3,around:4,evenly:5,stretch:6}
A.mk=new B.c(A.pi,["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch"],x.w)
A.fp=new C.q(A.oM,null,A.mk,A.d,!1,!1,null,null,null,A.b,"justify-content")
A.qN={fd:0}
A.jy=w(["flex-direction"],x.s)
A.oD=new B.c(A.qN,[A.jy],x.M)
A.ti={row:0,"row-reverse":1,col:2,"col-reverse":3,column:4,"column-reverse":5}
A.oX=new B.c(A.ti,["row","row-reverse","column","column-reverse","column","column-reverse"],x.w)
A.fk=new C.q(A.oD,null,A.oX,A.d,!1,!1,null,null,null,A.b,"flex-direction")
A.qY={gap:0}
A.k7=w(["gap"],x.s)
A.ne=new B.c(A.qY,[A.k7],x.M)
A.fG=new C.q(A.ne,"spacing",A.b,A.t,!0,!1,null,null,null,A.b,"gap")
A.b8=w([A.f8,A.fp,A.fk,A.fG],x.D)
A.te={wrap:0,nowrap:1,"wrap-reverse":2}
A.ls=new B.c(A.te,["wrap","nowrap","wrap-reverse"],x.w)
A.pJ={"transition-property":0}
A.lu=new B.c(A.pJ,["none"],x.w)
A.q1={"-webkit-backdrop-filter":0,"backdrop-filter":1}
A.mo=new B.c(A.q1,[y.a,y.a],x.w)
A.pB={overflow:0,display:1,"-webkit-box-orient":2,"-webkit-line-clamp":3}
A.mJ=new B.c(A.pB,["visible","block","horizontal","unset"],x.w)
A.pC={"expression(":0,"javascript:":1,"vbscript:":2,"-moz-binding":3,"behavior:":4,"@import":5,"@charset":6}
A.mL=new B.c(A.pC,["the expression() function is not allowed","the javascript: scheme is not allowed","the vbscript: scheme is not allowed","-moz-binding is not allowed","behavior is not allowed","@import is not allowed","@charset is not allowed"],x.w)
A.nu=new B.c(A.by,[y.d],x.w)
A.pQ={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6}
A.bi=new B.c(A.pQ,["0","4px","8px","16px","24px","40px","64px"],x.w)
A.t4={tr:0}
A.xe=new C.af(A.t4,1,x.O)
A.qC={clamp:0}
A.xr=new C.af(A.qC,1,x.O)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"zg","ub",()=>B.Y("[a-zA-Z0-9_-]"))
w($,"zk","ud",()=>B.Y("^0([a-z%]*)$"))
w($,"zR","uz",()=>B.Y(y.j))
w($,"zW","uB",()=>B.Y("^\\d+(\\.\\d+)?$"))
w($,"zT","uA",()=>B.Y("^(repeating-)?(linear|radial|conic)-gradient\\(|^url\\(|^image-set\\("))
w($,"A1","rb",()=>{var v,u,t,s=x.N,r=B.x(s,x.f)
for(v=A.bb.gO().gu(0);v.j();){u=v.gl()
t=u.a
if(t!=="none")r.i(0,t,B.B(["display",u.b],s,s))}return B.a([A.fx,C.qj("display-standalone",r)],x.D)})
w($,"A6","rg",()=>{var v,u,t=x.N,s=B.x(t,x.f)
for(v=A.bj.gO().gu(0);v.j();){u=v.gl()
s.i(0,u.a,B.B(["position",u.b],t,t))}return B.a([A.h_,C.qj("position-standalone",s)],x.D)})
w($,"zS","uy",()=>B.Y(y.j))
w($,"A5","rf",()=>{var v,u,t,s,r,q="grid-template-columns",p=null,o="grid-template-rows",n=x.s,m=x.N,l=x.a,k=B.B(["cols",B.a([q],n)],m,l)
k=C.ht(q,!1,A.b,p,C.tC(12),k,p)
v=B.B(["rows",B.a([o],n)],m,l)
v=C.ht(o,!1,A.b,p,C.tC(6),v,p)
u=B.B(["span",B.a(["grid-column"],n)],m,l)
t=B.x(m,m)
for(s=1;s<=12;++s){r=""+s
t.i(0,r,"span "+r+" / span "+r)}t.i(0,"full","1 / -1")
u=C.ht("grid-column",!1,A.b,p,t,u,p)
l=B.B(["rspan",B.a(["grid-row"],n)],m,l)
m=B.x(m,m)
for(s=1;s<=6;++s){n=""+s
m.i(0,n,"span "+n+" / span "+n)}m.i(0,"full","1 / -1")
return B.a([k,v,u,C.ht("grid-row",!1,A.b,p,m,l,p),A.fg],x.D)})
w($,"A4","re",()=>{var v,u,t=x.N,s=B.x(t,x.f)
for(v=A.ls.gO().gu(0);v.j();){u=v.gl()
s.i(0,u.a,B.B(["flex-wrap",u.b],t,t))}return B.a([C.qj("flex-wrap-standalone",s),A.hn,A.h4,A.fl,A.h8],x.D)})
w($,"A2","rc",()=>B.a([A.h9,new C.dF(A.xe,B.B(["none",A.lu,"all",C.dZ("all"),"colors",C.dZ("color, background-color, border-color, text-decoration-color, fill, stroke"),"opacity",C.dZ("opacity"),"shadow",C.dZ("box-shadow"),"transform",C.dZ("transform, translate, scale, rotate"),"filter",C.dZ("filter, backdrop-filter"),"default",C.dZ("color, background-color, border-color, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter")],x.N,x.f),"transition"),A.hd,A.fm,A.fv],x.D))
w($,"zU","e8",()=>B.Y("^[0-9]+$"))
w($,"A3","rd",()=>{var v="blur",u="brightness",t="contrast",s="grayscale",r="hue-rotate",q="saturate",p="drop-shadow",o=x.N
return B.a([C.by(v,v,"--jx-blur",v,!1,!1,C.u1(),A.bi),C.by(u,"bri","--jx-brightness",u,!1,!1,C.dt(),A.b),C.by(t,"con","--jx-contrast",t,!1,!1,C.dt(),A.b),C.by(s,"gs","--jx-grayscale",s,!1,!1,C.dt(),A.b),C.by(r,"hue","--jx-hue-rotate",r,!0,!1,C.q4(),A.b),C.by(q,"sat","--jx-saturate",q,!1,!1,C.dt(),A.b),C.by(p,"dsh","--jx-drop-shadow",p,!1,!1,null,B.B(["sm","0 1px 1px rgb(0 0 0 / 0.05)","md","0 3px 3px rgb(0 0 0 / 0.12)","lg","0 8px 10px rgb(0 0 0 / 0.15)","xl","0 16px 24px rgb(0 0 0 / 0.18)","none","0 0 #0000"],o,o)),A.et,C.by("backdrop-blur","bblur","--jx-bd-blur",v,!1,!0,C.u1(),A.bi),C.by("backdrop-brightness","bbri","--jx-bd-brightness",u,!1,!0,C.dt(),A.b),C.by("backdrop-contrast","bcon","--jx-bd-contrast",t,!1,!0,C.dt(),A.b),C.by("backdrop-grayscale","bgray","--jx-bd-grayscale",s,!1,!0,C.dt(),A.b),C.by("backdrop-saturate","bsat","--jx-bd-saturate",q,!1,!0,C.dt(),A.b)],x.D)})
w($,"A7","rh",()=>B.a([A.es,A.fZ,A.fM,new C.dE(A.xr,new C.pP(),"line-clamp")],x.D))})()};
(a=>{a["ghXHKNOQGq0Zd0KwRvcqfLjfvGI="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_80.part.js.map
