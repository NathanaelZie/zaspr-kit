((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,C={
uI(){throw B.o(B.ax("Cannot modify constant Set"))},
ds:function ds(){},
ad:function ad(d,e,f){this.a=d
this.b=e
this.$ti=f},
eh:function eh(d,e){this.a=d
this.$ti=e},
c2(d){return new C.er(d,null)},
kj:function kj(){},
er:function er(d,e){this.a=d
this.b=e},
bZ:function bZ(d,e,f){this.a=d
this.b=e
this.c=f},
vc(d,e){var w,v
if(d.length!==e.length)return!1
for(w=0;w<d.length;++w){v=d[w]
if(!(w<e.length))return B.v(e,w)
if(!v.L(0,e[w]))return!1}return!0},
aD:function aD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
he:function he(){},
pV(d,e){return new C.c4(e,d)},
hk(d,e,f,g,h,i,j){return new C.q(i,null,h,A.d,!0,e,g,null,j,f,d)},
tj(d){var w,v,u=d.gek()
u.toString
w=D.c.U(u)
v=C.rb(w)
if(v!=null)throw B.o(C.c2('Arbitrary value rejected for "'+d.a+'": '+v+"."))
return w},
tk(d,e){var w,v,u,t,s,r,q,p=d.length
if(p===0)return A.f
w=B.a([],x.G)
for(v=J.Z(e);v.j();){u=v.gm()
if(u===d||u.length===0)continue
t=C.xj(d,u)
if(t>2||t>=p)continue
if(0>=u.length)return B.v(u,0)
s=u[0]
if(0>=p)return B.v(d,0)
s=s===d[0]?0:1
D.a.t(w,new B.e(t*2+s,u))}p=B.a([],x.m)
for(r=0;r<w.length;++r)p.push(new B.e(w[r],r))
D.a.a7(p,new C.nF())
v=B.a([],x.s)
for(u=p.length,q=0;q<p.length;p.length===u||(0,B.G)(p),++q)v.push(p[q].a.b)
return v},
xj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=e.length,k=l+1,j=x.S,i=J.r5(k,j)
for(w=0;w<k;++w)i[w]=w
for(v=d.length,u=x.t,w=0;w<v;w=s,i=t){t=B.d0(k,0,!1,j)
s=w+1
D.a.i(t,0,s)
for(r=0;r<l;r=p){q=d[w]===e[r]?0:1
p=r+1
o=t[r]
n=i.length
if(!(p<n))return B.v(i,p)
m=i[p]
if(!(r<n))return B.v(i,r)
D.a.i(t,p,D.a.f1(B.a([o+1,m+1,i[r]+q],u),new C.np()))}}if(!(l<i.length))return B.v(i,l)
return i[l]},
c4:function c4(d,e){this.b=d
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
m2:function m2(d){this.a=d},
dB:function dB(d,e,f){this.b=d
this.c=e
this.a=f},
dA:function dA(d,e,f){this.b=d
this.e=e
this.a=f},
nF:function nF(){},
np:function np(){},
wY(d){var w=B.X("^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")
return w.b.test(d)?d:null},
xn(d){var w=$.e1()
return w.b.test(d)?d+"px":null},
wN(d){var w=$.e1()
return w.b.test(d)?d+"deg":null},
xl(d){var w=$.e1()
return w.b.test(d)?d+"ms":null},
x3(d){var w=$.e1()
return w.b.test(d)?d:null},
xo(d){var w,v,u,t,s=$.e1()
if(!s.b.test(d))return null
w=C.xY(d)
v=D.e.ai(w,100)
s=D.c.cQ(D.e.n(D.e.bi(w,100)),2,"0")
u=B.X("0+$")
t=B.fC(s,u,"")
s=""+v
return t.length===0?s:s+"."+t},
wC(d){var w,v,u,t=B.X("^([0-9]+)/([0-9]+)$").b4(d)
if(t==null)w=null
else{w=t.b
v=w.length
if(1>=v)return B.v(w,1)
u=w[1]
if(2>=v)return B.v(w,2)
w=B.z(u)+" / "+B.z(w[2])}return w},
bw(d,e,f,g,h,i,j,k){var w=B.F([e,B.a([f],x.s)],x.N,x.a),v=i?A.mk:A.nq
return C.hk(d,h,v,j,k,w,g+"({})")},
ps:function ps(){},
xY(d){var w=E.mk(d,null)
if(w!=null)return w
throw B.o(B.k_(d,null))},
rb(d){var w,v,u,t,s,r,q,p,o,n,m,l="CSS comments are not allowed",k="unbalanced parentheses"
if(D.c.U(d).length===0)return"empty value"
w=d.length
if(w>512)return"value too long (more than 512 characters)"
for(v=null,u=0,t=-1,s=0;s<w;++s){r=d.charCodeAt(s)
if(r<32||r===127)return"control character not allowed"
if(r===92)return'character "\\" not allowed'
if(r===60)return'character "<" not allowed'
if(r===47){q=s+1
q=q<w&&d.charCodeAt(q)===42}else q=!1
if(q)return l
if(r===42){q=s+1
q=q<w&&d.charCodeAt(q)===47}else q=!1
if(q)return l
if(v!=null){if(r===v)v=null
continue}A:{if(34===r||39===r){v=r
break A}if(40===r){++u
q=!1
if(t<0)if(s>=3){q=s-3
p=q+4
q=p<=w&&D.c.R(d,q,p).toLowerCase()==="url("}if(q)t=u
break A}if(41===r){if(u===t)t=-1;--u
if(u<0)return k
break A}if(59===r){if(t<0)return'character ";" not allowed'
break A}if(123===r||125===r)return"braces are not allowed"
if(33===r)return'character "!" not allowed (use the class ! suffix)'}}if(v!=null)return"unclosed quotes"
if(u!==0)return k
w=B.X("\\s+")
o=B.fC(d.toLowerCase(),w,"")
if(D.c.v(o,"@"))return"@ rule not allowed"
for(w=A.mH.gN(),q=w.$ti,w=new B.ay(w.a(),q.h("ay<1>")),q=q.c;w.j();){p=w.b
if(p==null)p=q.a(p)
if(D.c.C(o,p.a))return p.b}n=D.c.b6(o,"data:")
while(n!==-1){w=n+5
m=D.c.K(o,w)
if(!D.c.v(m,"image/")&&!D.c.v(m,"font/"))return"only image or font data: URLs are allowed"
n=D.c.cK(o,"data:",w)}return null},
wZ(d){var w=$.ud()
return w.b.test(d)?d:null},
wS(d){var w=E.mk(d,null)
if(w==null||w<100||w>900||D.e.bi(w,100)!==0)return null
return d},
wE(d){var w=$.ue()
return w.b.test(d)?A.aQ:null},
xy(d){var w=$.uf()
return w.b.test(d)?d:null},
x_(d){var w=$.uc()
return w.b.test(d)?d:null},
tf(d){var w,v,u=x.N
u=B.w(u,u)
for(w=1;w<=d;++w){v=""+w
u.i(0,v,"repeat("+v+", minmax(0, 1fr))")}u.i(0,"none","none")
return u},
wP(d){var w=E.mk(d,null)
return w==null?null:B.z(w)+"ms"},
dS(d){var w=x.N
return B.F(["transition-property",d,"transition-timing-function","cubic-bezier(0.4, 0, 0.2, 1)","transition-duration","150ms"],w,w)}},A
J=c[1]
B=c[0]
D=c[2]
E=c[40]
C=a.updateHolder(c[35],C)
A=c[72]
C.ds.prototype={
t(d,e){B.r(this).c.a(e)
C.uI()}}
C.ad.prototype={
gq(d){return this.b},
gD(d){return this.b===0},
gI(d){return this.b!==0},
gu(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new B.ci(w,w.length,v.$ti.h("ci<1>"))},
C(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
C.eh.prototype={
gq(d){return this.a.length},
gD(d){return this.a.length===0},
gI(d){return this.a.length!==0},
gu(d){var w=this.a
return new B.ci(w,w.length,this.$ti.h("ci<1>"))},
a8(){var w,v,u,t,s=this,r=s.$map
if(r==null){r=new B.cU(s.$ti.h("cU<1,1>"))
for(w=s.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.G)(w),++u){t=w[u]
r.i(0,t,t)}s.$map=r}return r},
C(d,e){return this.a8().T(e)}}
C.kj.prototype={
n(d){return B.as(this).n(0)+": "+this.a}}
C.er.prototype={}
C.bZ.prototype={
fe(){var w=this.c?" !important":""
return this.a+": "+this.b+w+";"},
L(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.bZ&&B.as(v)===B.as(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gF(d){return B.cA(this.a,this.b,this.c,D.i,D.i,D.i)},
n(d){return this.fe()}}
C.aD.prototype={
gcJ(){var w,v=this.e
if(v==null)v=""
w=this.d
if(w==null)w=""
return v+this.a+w},
L(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.aD&&B.as(v)===B.as(e)&&v.a===e.a&&v.c==e.c&&v.d==e.d&&v.e==e.e&&C.vc(v.b,e.b)
else w=!0
return w},
gF(d){var w=this
return B.cA(w.a,w.c,w.d,w.e,B.md(w.b),D.i)},
n(d){var w,v,u,t,s,r=this.c,q=r!=null,p=q&&r.length!==0?r+" { ":""
p+=this.gcJ()+" { "
for(w=this.b,v=w.length,u=0;u<v;++u){t=w[u]
s=t.c?" !important":""
p+=t.a+": "+t.b+s+"; "}p+="}"
r=q&&r.length!==0?p+" }":p
return r.charCodeAt(0)==0?r:r}}
C.he.prototype={
b3(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=".";v<w;++v){t=d[v]
s=B.X("[0-9]")
if(s.b.test(t))if(v!==0){s=v===1&&d[0]==="-"
r=s}else r=!0
else r=!1
if(r){if(0>=t.length)return B.v(t,0)
u+="\\"+D.e.fg(t.charCodeAt(0),16)+" "}else{s=$.tQ()
u=s.b.test(t)?u+t:u+("\\"+t)}}return u.charCodeAt(0)==0?u:u},
$ia9:1}
C.c4.prototype={
bb(d){return!d.gb5()&&!d.f&&this.b.T(d.b)},
aq(d,e){var w,v,u,t,s=d.b,r=this.b.k(0,s)
if(r==null)throw B.o(C.c2('Unknown class "'+s+'" for "'+this.a+'".'))
s=this.b3(d.a)
w=B.a([],x.K)
for(v=r.gN(),v=v.gu(v),u=d.e;v.j();){t=v.gm()
w.push(new C.bZ(t.a,t.b,u))}return B.a([new C.aD(s,w,null,null,null)],x.R)}}
C.q.prototype={
bb(d){var w
if(d.gb5())w=(this.r||!d.f)&&this.b.T(d.b)
else w=!1
return w},
aq(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.b,l=o.b.k(0,m)
if(l==null)throw B.o(C.c2('Utility "'+m+'" is not handled by "'+o.a+'".'))
w=o.f8(d,e)
if(w==null||o.e.C(0,w))throw B.o(C.c2('Invalid value "'+B.z(d.c)+'" for "'+m+'".'+o.ex(d,e)))
if(d.f)w=o.dQ(w,d)
m=o.x
v=m==null?n:m.$1(w)
if(v==null)v=l
m=o.y
if(m==null)u=n
else{m=B.fC(m,"{}",w)
u=m}if(u==null)u=w
m=o.b3(d.a)
t=B.a([],x.K)
for(s=J.Z(v),r=d.e;s.j();)t.push(new C.bZ(s.gm(),u,r))
for(s=o.z.gN(),q=s.$ti,s=new B.ay(s.a(),q.h("ay<1>")),q=q.c;s.j();){p=s.b
if(p==null)p=q.a(p)
t.push(new C.bZ(p.a,p.b,r))}return B.a([new C.aD(m,t,n,n,n)],x.R)},
f8(d,e){var w,v,u,t,s=this
if(d.gaG()){if(!s.f)return null
return C.tj(d)}w=d.c
w.toString
v=s.c
if(v!=null){u=e.f7(v,w)
if(u!=null)return u}t=s.d.k(0,w)
if(t==null){t=s.w
w=t==null?null:t.$1(w)}else w=t
return w},
ex(d,e){var w,v,u,t,s,r,q,p=this,o=p.c,n=x.s,m=B.a([],n)
if(o!=null)D.a.p(m,e.c.bV(o).gE())
D.a.p(m,p.d.gE())
w=x.U
v=B.a6(new B.a2(m,x.Q.a(new C.m2(p)),w),w.h("n.E"))
u=B.a([],n)
t=d.gaG()?null:d.c
s=t==null?null:B.dw(C.tk(t,v),x.N)
if(s!=null)D.a.t(u,'did you mean "'+d.b+":"+s+'"?')
if(v.length!==0){r=B.hM(v,0,B.ir(12,"count",x.S),B.a3(v).c).B(0,", ")
n=v.length>12?"\u2026":""
D.a.t(u,"accepted values: "+r+n)}if(p.f)D.a.t(u,"or an arbitrary value in brackets")
if(u.length===0)return""
q=D.a.B(u,"; ")
if(0>=q.length)return B.v(q,0)
return" "+q[0].toUpperCase()+D.c.K(q,1)+"."},
dQ(d,e){var w=$.tS()
if(w.b.test(d))return d
w=B.X("^[0-9.]")
if(w.b.test(d))return"-"+d
if(D.c.v(d,"-"))return D.c.K(d,1)
if(D.c.v(d,"calc(")||D.c.v(d,"var("))return"calc(-1 * "+d+")"
throw B.o(C.c2('Value "'+d+'" cannot be negative ('+e.a+")."))}}
C.dB.prototype={
bb(d){return d.gb5()&&!d.f&&!d.gaG()&&this.b.C(0,d.b)},
aq(d,e){var w,v,u,t,s=d.c,r=this.c.k(0,s)
if(r==null)throw B.o(C.c2('Invalid value "'+B.z(s)+'" for "'+d.b+'".'))
s=this.b3(d.a)
w=B.a([],x.K)
for(v=r.gN(),v=v.gu(v),u=d.e;v.j();){t=v.gm()
w.push(new C.bZ(t.a,t.b,u))}return B.a([new C.aD(s,w,null,null,null)],x.R)}}
C.dA.prototype={
bb(d){var w
if(d.gb5())w=!d.f&&this.b.C(0,d.b)
else w=!1
return w},
aq(d,e){var w,v,u,t,s,r=d.gaG()?C.tj(d):d.c,q=this.e.$3(r,d,e)
if(q==null||q.gD(q))throw B.o(C.c2('Invalid value "'+B.z(d.c)+'" for "'+d.b+'".'))
w=this.b3(d.a)
v=B.a([],x.K)
for(u=q.gN(),u=u.gu(u),t=d.e;u.j();){s=u.gm()
v.push(new C.bZ(s.a,s.b,t))}return B.a([new C.aD(w,v,null,null,null)],x.R)}}
var z=a.updateTypes(["b?(b)","t<b,b>?(b?,bG,pW)","l<b>?(b)"])
C.m2.prototype={
$1(d){return!this.a.e.C(0,B.k(d))},
$S:7}
C.nF.prototype={
$2(d,e){var w,v=x.X
v.a(d)
v.a(e)
w=D.e.S(d.a.a,e.a.a)
return w!==0?w:D.e.S(d.b,e.b)},
$S:48}
C.np.prototype={
$2(d,e){B.az(d)
B.az(e)
return d<e?d:e},
$S:49}
C.ps.prototype={
$3(d,e,f){var w
if(d==="none")return A.mF
if(d!=null){w=$.e1()
w=!w.b.test(d)}else w=!0
if(w)return null
w=x.N
return B.F(["overflow","hidden","display","-webkit-box","-webkit-box-orient","vertical","-webkit-line-clamp",d],w,w)},
$S:z+1};(function installTearOffs(){var w=a._static_1
w(C,"tE","wY",0)
w(C,"tG","xn",0)
w(C,"pH","wN",0)
w(C,"tF","xl",0)
w(C,"yy","x3",0)
w(C,"dp","xo",0)
w(C,"yx","wC",0)
w(C,"iR","wZ",0)
w(C,"yu","wS",0)
w(C,"yt","wE",2)
w(C,"yv","xy",0)
w(C,"qE","x_",0)
w(C,"yw","wP",0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.ds,B.bq)
v(C.ds,[C.ad,C.eh])
v(B.y,[C.kj,C.bZ,C.aD,C.he])
w(C.er,C.kj)
v(C.he,[C.c4,C.q,C.dB,C.dA])
v(B.ab,[C.m2,C.ps])
v(B.bB,[C.nF,C.np])})()
B.J(b.typeUniverse,JSON.parse('{"ds":{"bq":["1"],"d4":["1"],"A":["1"],"n":["1"]},"ad":{"ds":["1"],"bq":["1"],"d4":["1"],"A":["1"],"n":["1"]},"eh":{"ds":["1"],"bq":["1"],"d4":["1"],"A":["1"],"n":["1"]},"he":{"a9":[]},"c4":{"a9":[]},"q":{"a9":[]},"dB":{"a9":[]},"dA":{"a9":[]}}'))
var y={j:"^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$",a:"var(--jx-bd-blur,) var(--jx-bd-brightness,) var(--jx-bd-contrast,) var(--jx-bd-grayscale,) var(--jx-bd-saturate,)",d:"var(--jx-blur,) var(--jx-brightness,) var(--jx-contrast,) var(--jx-grayscale,) var(--jx-hue-rotate,) var(--jx-invert,) var(--jx-saturate,) var(--jx-sepia,) var(--jx-drop-shadow,)"}
var x=(function rtii(){var w=B.j
return{w:w("c<b,b>"),M:w("c<b,l<b>>"),j:w("c<b,t<b,b>>"),O:w("ad<b>"),K:w("m<bZ>"),R:w("m<aD>"),D:w("m<a9>"),m:w("m<+(+(d,b),d)>"),G:w("m<+(d,b)>"),s:w("m<b>"),t:w("m<d>"),a:w("l<b>"),f:w("t<b,b>"),X:w("+(+(d,b),d)"),N:w("b"),U:w("a2<b>"),Q:w("E(b)"),S:w("d")}})();(function constants(){var w=a.makeConstList
A.pg={uppercase:0,lowercase:1,capitalize:2,"normal-case":3,italic:4,"not-italic":5,truncate:6,antialiased:7,"tabular-nums":8,"sr-only":9,"not-sr-only":10,visible:11,invisible:12,isolate:13,"scroll-smooth":14}
A.T={"text-transform":0}
A.oL=new B.c(A.T,["uppercase"],x.w)
A.oM=new B.c(A.T,["lowercase"],x.w)
A.oN=new B.c(A.T,["capitalize"],x.w)
A.oO=new B.c(A.T,["none"],x.w)
A.bH={"font-style":0}
A.mq=new B.c(A.bH,["italic"],x.w)
A.mr=new B.c(A.bH,["normal"],x.w)
A.pu={overflow:0,"text-overflow":1,"white-space":2}
A.p4=new B.c(A.pu,["hidden","ellipsis","nowrap"],x.w)
A.pr={"-webkit-font-smoothing":0,"-moz-osx-font-smoothing":1}
A.lS=new B.c(A.pr,["antialiased","grayscale"],x.w)
A.pP={"font-variant-numeric":0}
A.p2=new B.c(A.pP,["tabular-nums"],x.w)
A.qG={position:0,width:1,height:2,padding:3,margin:4,overflow:5,clip:6,"white-space":7,"border-width":8}
A.mh=new B.c(A.qG,["absolute","1px","1px","0","-1px","hidden","rect(0, 0, 0, 0)","nowrap","0"],x.w)
A.pw={position:0,width:1,height:2,padding:3,margin:4,overflow:5,clip:6,"white-space":7}
A.mb=new B.c(A.pw,["static","auto","auto","0","0","visible","auto","normal"],x.w)
A.bJ={visibility:0}
A.m0=new B.c(A.bJ,["visible"],x.w)
A.m_=new B.c(A.bJ,["hidden"],x.w)
A.r2={isolation:0}
A.nb=new B.c(A.r2,["isolate"],x.w)
A.ps={"scroll-behavior":0}
A.nt=new B.c(A.ps,["smooth"],x.w)
A.mC=new B.c(A.pg,[A.oL,A.oM,A.oN,A.oO,A.mq,A.mr,A.p4,A.lS,A.p2,A.mh,A.mb,A.m0,A.m_,A.nb,A.nt],x.j)
A.et=new C.c4(A.mC,"text-standalone")
A.qp={grayscale:0,invert:1,sepia:2,"filter-none":3}
A.qs={"--jx-grayscale":0,filter:1}
A.nA=new B.c(A.qs,["grayscale(1)",y.d],x.w)
A.pZ={"--jx-invert":0,filter:1}
A.m7=new B.c(A.pZ,["invert(1)",y.d],x.w)
A.rC={"--jx-sepia":0,filter:1}
A.mI=new B.c(A.rC,["sepia(1)",y.d],x.w)
A.by={filter:0}
A.nr=new B.c(A.by,["none"],x.w)
A.mO=new B.c(A.qp,[A.nA,A.m7,A.mI,A.nr],x.j)
A.eu=new C.c4(A.mO,"filter-standalone")
A.qY={gx:0,gy:1}
A.j7=w(["column-gap"],x.s)
A.ke=w(["row-gap"],x.s)
A.lB=new B.c(A.qY,[A.j7,A.ke],x.M)
A.b=new B.c(D.aa,[],x.w)
A.bw={auto:0}
A.t=new C.ad(A.bw,1,x.O)
A.fh=new C.q(A.lB,"spacing",A.b,A.t,!0,!1,null,null,null,A.b,"gap-axis")
A.qX={grow:0,shrink:1}
A.i9=w(["flex-grow"],x.s)
A.l6=w(["flex-shrink"],x.s)
A.oc=new B.c(A.qX,[A.i9,A.l6],x.M)
A.pa={"0":0,"1":1}
A.mT=new B.c(A.pa,["0","1"],x.w)
A.d=new C.ad(D.aa,0,x.O)
A.fm=new C.q(A.oc,null,A.mT,A.d,!0,!1,null,null,null,A.b,"flex-grow-shrink")
A.qI={ease:0}
A.ia=w(["transition-timing-function"],x.s)
A.p3=new B.c(A.qI,[A.ia],x.M)
A.p5={linear:0,in:1,out:2,"in-out":3}
A.nH=new B.c(A.p5,["linear","cubic-bezier(0.4, 0, 1, 1)","cubic-bezier(0, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],x.w)
A.fn=new C.q(A.p3,null,A.nH,A.d,!0,!1,null,null,null,A.b,"transition-timing-function")
A.qB={cur:0}
A.jT=w(["cursor"],x.s)
A.n2=new B.c(A.qB,[A.jT],x.M)
A.ry={auto:0,default:1,pointer:2,text:3,move:4,wait:5,grab:6,"not-allowed":7}
A.n9=new B.c(A.ry,["auto","default","pointer","text","move","wait","grab","not-allowed"],x.w)
A.fw=new C.q(A.n2,null,A.n9,A.d,!1,!1,null,null,null,A.b,"cursor")
A.qD={d:0}
A.jW=w(["display"],x.s)
A.no=new B.c(A.qD,[A.jW],x.M)
A.th={flex:0,block:1,grid:2,inline:3,"inline-block":4,"inline-flex":5,"inline-grid":6,contents:7,none:8,hidden:9}
A.bb=new B.c(A.th,["flex","block","grid","inline","inline-block","inline-flex","inline-grid","contents","none","none"],x.w)
A.fy=new C.q(A.no,null,A.bb,A.d,!1,!1,null,null,null,A.b,"display")
A.tg={wb:0}
A.hY=w(["overflow-wrap"],x.s)
A.mp=new B.c(A.tg,[A.hY],x.M)
A.pb={normal:0,words:1,anywhere:2}
A.m2=new B.c(A.pb,["normal","break-word","anywhere"],x.w)
A.fN=new C.q(A.mp,null,A.m2,A.d,!1,!1,null,null,null,A.b,"word-break")
A.t4={tw:0}
A.iJ=w(["text-wrap"],x.s)
A.lz=new B.c(A.t4,[A.iJ],x.M)
A.pL={wrap:0,nowrap:1,balance:2,pretty:3}
A.op=new B.c(A.pL,["wrap","nowrap","balance","pretty"],x.w)
A.h_=new C.q(A.lz,null,A.op,A.d,!1,!1,null,null,null,A.b,"text-wrap")
A.rB={pos:0}
A.kN=w(["position"],x.s)
A.lO=new B.c(A.rB,[A.kN],x.M)
A.qH={static:0,relative:1,absolute:2,fixed:3,sticky:4}
A.bj=new B.c(A.qH,["static","relative","absolute","fixed","sticky"],x.w)
A.h0=new C.q(A.lO,null,A.bj,A.d,!1,!1,null,null,null,A.b,"position")
A.qM={fl:0}
A.k1=w(["flex"],x.s)
A.mu=new B.c(A.qM,[A.k1],x.M)
A.qV={"1":0,auto:1,initial:2,none:3}
A.ma=new B.c(A.qV,["1 1 0%","1 1 auto","0 1 auto","none"],x.w)
A.h5=new C.q(A.mu,null,A.ma,A.d,!0,!1,null,null,null,A.b,"flex")
A.qd={as:0}
A.ih=w(["align-self"],x.s)
A.lm=new B.c(A.qd,[A.ih],x.M)
A.pi={auto:0,start:1,end:2,center:3,stretch:4,baseline:5}
A.lD=new B.c(A.pi,["auto","flex-start","flex-end","center","stretch","baseline"],x.w)
A.h9=new C.q(A.lm,null,A.lD,A.d,!1,!1,null,null,null,A.b,"align-self")
A.rO={sh:0}
A.aP=w(["box-shadow"],x.s)
A.mP=new B.c(A.rO,[A.aP],x.M)
A.ha=new C.q(A.mP,"shadow",A.b,A.d,!0,!1,null,null,null,A.b,"box-shadow")
A.qF={dur:0}
A.k3=w(["transition-duration"],x.s)
A.og=new B.c(A.qF,[A.k3],x.M)
A.he=new C.q(A.og,null,A.b,A.d,!0,!1,C.yw(),null,null,A.b,"transition-duration")
A.qN={flw:0}
A.kT=w(["flex-wrap"],x.s)
A.n_=new B.c(A.qN,[A.kT],x.M)
A.pU={wrap:0,nowrap:1,reverse:2}
A.oo=new B.c(A.pU,["wrap","nowrap","wrap-reverse"],x.w)
A.ho=new C.q(A.n_,null,A.oo,A.d,!1,!1,null,null,null,A.b,"flex-wrap")
A.rT={p:0,px:1,py:2,pt:3,pr:4,pb:5,pl:6}
A.kI=w(["padding"],x.s)
A.i0=w(["padding-left","padding-right"],x.s)
A.kW=w(["padding-top","padding-bottom"],x.s)
A.jZ=w(["padding-top"],x.s)
A.ig=w(["padding-right"],x.s)
A.ij=w(["padding-bottom"],x.s)
A.jU=w(["padding-left"],x.s)
A.mx=new B.c(A.rT,[A.kI,A.i0,A.kW,A.jZ,A.ig,A.ij,A.jU],x.M)
A.hk=new C.q(A.mx,"spacing",A.b,A.t,!0,!1,null,null,null,A.b,"padding")
A.pj={m:0,mx:1,my:2,mt:3,mr:4,mb:5,ml:6}
A.kt=w(["margin"],x.s)
A.ii=w(["margin-left","margin-right"],x.s)
A.iV=w(["margin-top","margin-bottom"],x.s)
A.iL=w(["margin-top"],x.s)
A.k2=w(["margin-right"],x.s)
A.hX=w(["margin-bottom"],x.s)
A.jA=w(["margin-left"],x.s)
A.oe=new B.c(A.pj,[A.kt,A.ii,A.iV,A.iL,A.k2,A.hX,A.jA],x.M)
A.hn=new C.q(A.oe,"spacing",A.b,A.d,!0,!0,null,null,null,A.b,"margin")
A.aL=w([A.hk,A.hn],x.D)
A.qW={grad:0}
A.aQ=w(["background-image"],x.s)
A.mY=new B.c(A.qW,[A.aQ],x.M)
A.rd={"to-t":0,"to-tr":1,"to-r":2,"to-br":3,"to-b":4,"to-bl":5,"to-l":6,"to-tl":7}
A.oE=new B.c(A.rd,["to top","to top right","to right","to bottom right","to bottom","to bottom left","to left","to top left"],x.w)
A.fd=new C.q(A.mY,null,A.oE,A.d,!0,!1,C.pH(),null,"linear-gradient({}, var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))",A.b,"linear-gradient")
A.q0={"grad-radial":0,"grad-conic":1}
A.bD={"background-image":0}
A.lZ=new B.c(A.bD,["radial-gradient(var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))"],x.w)
A.lY=new B.c(A.bD,["conic-gradient(var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))"],x.w)
A.on=new B.c(A.q0,[A.lZ,A.lY],x.j)
A.es=new C.c4(A.on,"gradient-standalone")
A.bz={from:0,to:1}
A.iT=w(["--jx-from"],x.s)
A.ik=w(["--jx-to"],x.s)
A.o9=new B.c(A.bz,[A.iT,A.ik],x.M)
A.t2={transparent:0,current:1}
A.bg=new B.c(A.t2,["transparent","currentColor"],x.w)
A.f7=new C.q(A.o9,"colors",A.bg,A.d,!0,!1,C.tE(),null,null,A.b,"gradient-stops")
A.td={via:0}
A.iy=w(["--jx-via"],x.s)
A.lE=new B.c(A.td,[A.iy],x.M)
A.fF=new C.q(A.lE,"colors",A.bg,A.d,!0,!1,C.tE(),null,"{},",A.b,"gradient-via")
A.aN=w([A.fd,A.es,A.f7,A.fF],x.D)
A.pp={bw:0,bwt:1,bwr:2,bwb:3,bwl:4,bwx:5,bwy:6}
A.ky=w(["border-width"],x.s)
A.hN=w(["border-top-width"],x.s)
A.kP=w(["border-right-width"],x.s)
A.ks=w(["border-bottom-width"],x.s)
A.jC=w(["border-left-width"],x.s)
A.il=w(["border-left-width","border-right-width"],x.s)
A.ip=w(["border-top-width","border-bottom-width"],x.s)
A.ms=new B.c(A.pp,[A.ky,A.hN,A.kP,A.ks,A.jC,A.il,A.ip],x.M)
A.ft=new C.q(A.ms,"border-width",A.b,A.d,!0,!1,null,null,null,A.b,"border-width")
A.qj={bc:0}
A.kL=w(["border-color"],x.s)
A.m1=new B.c(A.qj,[A.kL],x.M)
A.fD=new C.q(A.m1,"colors",A.b,A.d,!0,!1,C.iR(),null,null,A.b,"border-color")
A.qq={br:0}
A.kp=w(["border-radius"],x.s)
A.ot=new B.c(A.qq,[A.kp],x.M)
A.ff=new C.q(A.ot,"border-radius",A.b,A.d,!0,!1,null,null,null,A.b,"border-radius")
A.aO=w([A.ft,A.fD,A.ff],x.D)
A.qa={anim:0}
A.jK=w(["animation"],x.s)
A.o8=new B.c(A.qa,[A.jK],x.M)
A.rx={none:0,spin:1,ping:2,pulse:3,bounce:4,"fade-in":5,"fade-out":6,"slide-up":7,"slide-down":8,"zoom-in":9,"slide-in-right":10,"slide-in-left":11,indeterminate:12}
A.mQ=new B.c(A.rx,["none","jx-spin 1s linear infinite","jx-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite","jx-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite","jx-bounce 1s infinite","jx-fade-in 0.3s ease-out both","jx-fade-out 0.3s ease-in both","jx-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) both","jx-zoom-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-in-right 0.35s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-in-left 0.35s cubic-bezier(0.16, 1, 0.3, 1) both","jx-indeterminate 1.4s ease-in-out infinite"],x.w)
A.hr=new C.q(A.o8,null,A.mQ,A.d,!0,!1,null,null,null,A.b,"animation")
A.q8={adur:0,adelay:1}
A.hT=w(["animation-duration"],x.s)
A.iM=w(["animation-delay"],x.s)
A.np=new B.c(A.q8,[A.hT,A.iM],x.M)
A.fK=new C.q(A.np,null,A.b,A.d,!0,!1,C.tF(),null,null,A.b,"animation-timing")
A.qE={delay:0}
A.jx=w(["transition-delay"],x.s)
A.ni=new B.c(A.qE,[A.jx],x.M)
A.fu=new C.q(A.ni,null,A.b,A.d,!0,!1,C.tF(),null,null,A.b,"transition-delay")
A.aR=w([A.hr,A.fK,A.fu],x.D)
A.tm={z:0}
A.it=w(["z-index"],x.s)
A.m4=new B.c(A.tm,[A.it],x.M)
A.pC={"0":0,"10":1,"20":2,"30":3,"40":4,"50":5,auto:6}
A.lv=new B.c(A.pC,["0","10","20","30","40","50","auto"],x.w)
A.fk=new C.q(A.m4,null,A.lv,A.d,!0,!0,null,null,null,A.b,"z-index")
A.pV={top:0,right:1,bottom:2,left:3,inset:4}
A.kY=w(["top"],x.s)
A.kR=w(["right"],x.s)
A.jM=w(["bottom"],x.s)
A.kq=w(["left"],x.s)
A.kf=w(["inset"],x.s)
A.lk=new B.c(A.pV,[A.kY,A.kR,A.jM,A.kq,A.kf],x.M)
A.tl={full:0,"1/2":1,auto:2}
A.a9=new B.c(A.tl,["100%","50%","auto"],x.w)
A.h4=new C.q(A.lk,"spacing",A.a9,A.d,!0,!0,null,null,null,A.b,"inset")
A.rQ={smt:0}
A.kU=w(["scroll-margin-top"],x.s)
A.p1=new B.c(A.rQ,[A.kU],x.M)
A.ht=new C.q(A.p1,"spacing",A.b,A.t,!0,!1,null,null,null,A.b,"scroll-margin-top")
A.qe={ov:0,ovx:1,ovy:2}
A.kH=w(["overflow"],x.s)
A.iO=w(["overflow-x"],x.s)
A.iP=w(["overflow-y"],x.s)
A.ol=new B.c(A.qe,[A.kH,A.iO,A.iP],x.M)
A.q4={auto:0,hidden:1,clip:2,visible:3,scroll:4}
A.nG=new B.c(A.q4,["auto","hidden","clip","visible","scroll"],x.w)
A.h2=new C.q(A.ol,null,A.nG,A.d,!1,!1,null,null,null,A.b,"overflow")
A.aT=w([A.fk,A.h4,A.ht,A.h2],x.D)
A.qO={fs:0}
A.kx=w(["font-size"],x.s)
A.ny=new B.c(A.qO,[A.kx],x.M)
A.fx=new C.q(A.ny,"font-size",A.b,A.d,!0,!1,null,null,null,A.b,"font-size")
A.qR={fw:0}
A.j3=w(["font-weight"],x.s)
A.nf=new B.c(A.qR,[A.j3],x.M)
A.f8=new C.q(A.nf,"font-weight",A.b,A.d,!0,!1,C.yu(),null,null,A.b,"font-weight")
A.r9={lh:0}
A.kl=w(["line-height"],x.s)
A.md=new B.c(A.r9,[A.kl],x.M)
A.fe=new C.q(A.md,"line-height",A.b,A.d,!0,!1,C.yv(),null,null,A.b,"line-height")
A.rU={ta:0}
A.l7=w(["text-align"],x.s)
A.lr=new B.c(A.rU,[A.l7],x.M)
A.bs={left:0,center:1,right:2,justify:3,start:4,end:5}
A.lW=new B.c(A.bs,["left","center","right","justify","start","end"],x.w)
A.hh=new C.q(A.lr,null,A.lW,A.d,!1,!1,null,null,null,A.b,"text-align")
A.tc={va:0}
A.hO=w(["vertical-align"],x.s)
A.nU=new B.c(A.tc,[A.hO],x.M)
A.pm={baseline:0,top:1,middle:2,bottom:3,"text-top":4,"text-bottom":5,sub:6,"super":7}
A.nP=new B.c(A.pm,["baseline","top","middle","bottom","text-top","text-bottom","sub","super"],x.w)
A.fY=new C.q(A.nU,null,A.nP,A.d,!0,!1,null,null,null,A.b,"vertical-align")
A.rc={lst:0}
A.hV=w(["list-style-type"],x.s)
A.m6=new B.c(A.rc,[A.hV],x.M)
A.q1={none:0,disc:1,circle:2,square:3,decimal:4}
A.ok=new B.c(A.q1,["none","disc","circle","square","decimal"],x.w)
A.fG=new C.q(A.m6,null,A.ok,A.d,!0,!1,null,null,null,A.b,"list-style-type")
A.rb={lsp:0}
A.kO=w(["list-style-position"],x.s)
A.of=new B.c(A.rb,[A.kO],x.M)
A.r1={inside:0,outside:1}
A.m8=new B.c(A.r1,["inside","outside"],x.w)
A.h7=new C.q(A.of,null,A.m8,A.d,!1,!1,null,null,null,A.b,"list-style-position")
A.qK={ff:0}
A.jr=w(["font-family"],x.s)
A.oV=new B.c(A.qK,[A.jr],x.M)
A.hs=new C.q(A.oV,"font-family",A.b,A.d,!0,!1,null,null,null,A.b,"font-family")
A.ra={ls:0}
A.iH=w(["letter-spacing"],x.s)
A.ox=new B.c(A.ra,[A.iH],x.M)
A.p7={tighter:0,tight:1,normal:2,wide:3,wider:4}
A.my=new B.c(A.p7,["-0.05em","-0.025em","0em","0.025em","0.05em"],x.w)
A.fT=new C.q(A.ox,null,A.my,A.d,!0,!0,null,null,null,A.b,"letter-spacing")
A.rV={td:0}
A.i7=w(["text-decoration-line"],x.s)
A.ng=new B.c(A.rV,[A.i7],x.M)
A.q3={underline:0,"line-through":1,none:2}
A.oQ=new B.c(A.q3,["underline","line-through","none"],x.w)
A.h3=new C.q(A.ng,null,A.oQ,A.d,!1,!1,null,null,null,A.b,"text-decoration-line")
A.rW={tdc:0}
A.jB=w(["text-decoration-color"],x.s)
A.nN=new B.c(A.rW,[A.jB],x.M)
A.fo=new C.q(A.nN,"colors",A.b,A.d,!0,!1,C.iR(),null,null,A.b,"text-decoration-color")
A.rX={tdt:0}
A.hI=w(["text-decoration-thickness"],x.s)
A.ns=new B.c(A.rX,[A.hI],x.M)
A.pv={"1":0,"2":1,"4":2,auto:3}
A.lP=new B.c(A.pv,["1px","2px","4px","auto"],x.w)
A.fA=new C.q(A.ns,null,A.lP,A.d,!0,!1,null,null,null,A.b,"text-decoration-thickness")
A.t3={tuo:0}
A.jD=w(["text-underline-offset"],x.s)
A.lh=new B.c(A.t3,[A.jD],x.M)
A.rD={"1":0,"2":1,"4":2,"8":3,auto:4}
A.nS=new B.c(A.rD,["1px","2px","4px","8px","auto"],x.w)
A.h8=new C.q(A.lh,null,A.nS,A.d,!0,!1,null,null,null,A.b,"text-underline-offset")
A.ti={ws:0}
A.km=w(["white-space"],x.s)
A.nu=new B.c(A.ti,[A.km],x.M)
A.pe={normal:0,nowrap:1,pre:2,"pre-wrap":3,"pre-line":4}
A.lJ=new B.c(A.pe,["normal","nowrap","pre","pre-wrap","pre-line"],x.w)
A.hw=new C.q(A.nu,null,A.lJ,A.d,!1,!1,null,null,null,A.b,"white-space")
A.qP={fst:0}
A.jE=w(["font-stretch"],x.s)
A.nX=new B.c(A.qP,[A.jE],x.M)
A.pI={condensed:0,"semi-condensed":1,normal:2,"semi-expanded":3,expanded:4}
A.nh=new B.c(A.pI,["75%","87.5%","100%","112.5%","125%"],x.w)
A.fL=new C.q(A.nX,null,A.nh,A.d,!0,!1,null,null,null,A.b,"font-stretch")
A.rr={ol:0}
A.kG=w(["outline"],x.s)
A.om=new B.c(A.rr,[A.kG],x.M)
A.nQ=new B.bf(["none","none","1","1px solid","2","2px solid","4","4px solid"],B.j("bf<b,b>"))
A.hj=new C.q(A.om,null,A.nQ,A.d,!0,!1,null,null,null,A.b,"outline")
A.rs={olc:0}
A.im=w(["outline-color"],x.s)
A.lH=new B.c(A.rs,[A.im],x.M)
A.h6=new C.q(A.lH,"colors",A.b,A.d,!0,!1,C.iR(),null,null,A.b,"outline-color")
A.rt={olo:0}
A.i1=w(["outline-offset"],x.s)
A.m9=new B.c(A.rt,[A.i1],x.M)
A.pT={"0":0,"1":1,"2":2,"4":3,"8":4}
A.a7=new B.c(A.pT,["0px","1px","2px","4px","8px"],x.w)
A.fb=new C.q(A.m9,null,A.a7,A.d,!0,!0,null,null,null,A.b,"outline-offset")
A.aW=w([A.fx,A.f8,A.fe,A.hh,A.fY,A.fG,A.h7,A.hs,A.fT,A.h3,A.fo,A.fA,A.h8,A.hw,A.fL,A.hj,A.h6,A.fb],x.D)
A.rI={rot:0}
A.kS=w(["rotate"],x.s)
A.lI=new B.c(A.rI,[A.kS],x.M)
A.rk={none:0}
A.nW=new B.c(A.rk,["none"],x.w)
A.fS=new C.q(A.lI,null,A.nW,A.d,!0,!0,C.pH(),null,null,A.b,"rotate")
A.rP={skx:0,sky:1}
A.hZ=w(["--jx-skew-x"],x.s)
A.i_=w(["--jx-skew-y"],x.s)
A.lM=new B.c(A.rP,[A.hZ,A.i_],x.M)
A.t1={transform:0}
A.lb=new B.c(A.t1,["skewX(var(--jx-skew-x, 0)) skewY(var(--jx-skew-y, 0))"],x.w)
A.fj=new C.q(A.lM,null,A.b,A.d,!0,!0,C.pH(),null,null,A.lb,"skew")
A.rw={origin:0}
A.iE=w(["transform-origin"],x.s)
A.ou=new B.c(A.rw,[A.iE],x.M)
A.pl={center:0,top:1,bottom:2,left:3,right:4,"top-left":5,"top-right":6,"bottom-left":7,"bottom-right":8}
A.a8=new B.c(A.pl,["center","top","bottom","left","right","top left","top right","bottom left","bottom right"],x.w)
A.fW=new C.q(A.ou,null,A.a8,A.d,!0,!1,null,null,null,A.b,"transform-origin")
A.aX=w([A.fS,A.fj,A.fW],x.D)
A.qc={ar:0}
A.kB=w(["aspect-ratio"],x.s)
A.nj=new B.c(A.qc,[A.kB],x.M)
A.re={auto:0,square:1,video:2,photo:3,portrait:4}
A.ow=new B.c(A.re,["auto","1 / 1","16 / 9","4 / 3","3 / 4"],x.w)
A.fI=new C.q(A.nj,null,A.ow,A.d,!0,!1,C.yx(),null,null,A.b,"aspect-ratio")
A.rp={obf:0}
A.iG=w(["object-fit"],x.s)
A.o7=new B.c(A.rp,[A.iG],x.M)
A.bx={contain:0,cover:1,fill:2,none:3,"scale-down":4}
A.li=new B.c(A.bx,["contain","cover","fill","none","scale-down"],x.w)
A.fa=new C.q(A.o7,null,A.li,A.d,!1,!1,null,null,null,A.b,"object-fit")
A.rq={obp:0}
A.jv=w(["object-position"],x.s)
A.or=new B.c(A.rq,[A.jv],x.M)
A.fQ=new C.q(A.or,null,A.a8,A.d,!0,!1,null,null,null,A.b,"object-position")
A.qm={bgp:0}
A.iN=w(["background-position"],x.s)
A.nB=new B.c(A.qm,[A.iN],x.M)
A.hb=new C.q(A.nB,null,A.a8,A.d,!0,!1,null,null,null,A.b,"background-position")
A.qn={bgr:0}
A.kc=w(["background-repeat"],x.s)
A.oH=new B.c(A.qn,[A.kc],x.M)
A.p6={repeat:0,none:1,x:2,y:3,round:4,space:5}
A.mZ=new B.c(A.p6,["repeat","no-repeat","repeat-x","repeat-y","round","space"],x.w)
A.fC=new C.q(A.oH,null,A.mZ,A.d,!1,!1,null,null,null,A.b,"background-repeat")
A.rg={mix:0}
A.i5=w(["mix-blend-mode"],x.s)
A.nk=new B.c(A.rg,[A.i5],x.M)
A.po={normal:0,multiply:1,screen:2,overlay:3,darken:4,lighten:5,difference:6,luminosity:7}
A.m5=new B.c(A.po,["normal","multiply","screen","overlay","darken","lighten","difference","luminosity"],x.w)
A.fi=new C.q(A.nk,null,A.m5,A.d,!1,!1,null,null,null,A.b,"mix-blend-mode")
A.qr={bs:0}
A.iB=w(["border-style"],x.s)
A.nV=new B.c(A.qr,[A.iB],x.M)
A.bK={solid:0,dashed:1,dotted:2,double:3,none:4,hidden:5}
A.mt=new B.c(A.bK,["solid","dashed","dotted","double","none","hidden"],x.w)
A.hf=new C.q(A.nV,null,A.mt,A.d,!1,!1,null,null,null,A.b,"border-style")
A.aY=w([A.fI,A.fa,A.fQ,A.hb,A.fC,A.fi,A.hf],x.D)
A.qu={c:0}
A.jS=w(["color"],x.s)
A.oJ=new B.c(A.qu,[A.jS],x.M)
A.fX=new C.q(A.oJ,"colors",A.b,A.d,!0,!1,C.iR(),null,null,A.b,"color")
A.ql={bg:0}
A.ju=w(["background-color"],x.s)
A.o4=new B.c(A.ql,[A.ju],x.M)
A.hq=new C.q(A.o4,"colors",A.b,A.d,!0,!1,C.iR(),C.yt(),null,A.b,"background-color")
A.qo={bgs:0}
A.kg=w(["background-size"],x.s)
A.nd=new B.c(A.qo,[A.kg],x.M)
A.bt={auto:0,cover:1,contain:2}
A.ob=new B.c(A.bt,["auto","cover","contain"],x.w)
A.hx=new C.q(A.nd,null,A.ob,A.d,!0,!1,null,null,null,A.b,"background-size")
A.aZ=w([A.fX,A.hq,A.hx],x.D)
A.t5={tx:0}
A.iz=w(["--jx-tx"],x.s)
A.lX=new B.c(A.t5,[A.iz],x.M)
A.W={translate:0}
A.bk=new B.c(A.W,["var(--jx-tx, 0) var(--jx-ty, 0)"],x.w)
A.fz=new C.q(A.lX,"spacing",A.a9,A.t,!0,!0,null,null,null,A.bk,"translate-x")
A.t6={ty:0}
A.hL=w(["--jx-ty"],x.s)
A.ov=new B.c(A.t6,[A.hL],x.M)
A.fR=new C.q(A.ov,"spacing",A.a9,A.t,!0,!0,null,null,null,A.bk,"translate-y")
A.rL={sc:0}
A.kV=w(["scale"],x.s)
A.nw=new B.c(A.rL,[A.kV],x.M)
A.r7={"0":0,"50":1,"75":2,"90":3,"95":4,"100":5,"105":6,"110":7,"125":8,"150":9}
A.oD=new B.c(A.r7,["0","0.5","0.75","0.9","0.95","1","1.05","1.1","1.25","1.5"],x.w)
A.hg=new C.q(A.nw,null,A.oD,A.d,!0,!1,null,null,null,A.b,"scale")
A.b0=w([A.fz,A.fR,A.hg],x.D)
A.tf={w:0}
A.l4=w(["width"],x.s)
A.nZ=new B.c(A.tf,[A.l4],x.M)
A.bC={full:0,min:1,max:2,fit:3,"1/2":4,"1/3":5,"2/3":6,"1/4":7,"3/4":8,screen:9}
A.bd=new B.c(A.bC,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","100vw"],x.w)
A.fB=new C.q(A.nZ,"spacing",A.bd,A.d,!0,!1,null,null,null,A.b,"width")
A.r_={h:0}
A.kb=w(["height"],x.s)
A.oW=new B.c(A.r_,[A.kb],x.M)
A.be=new B.c(A.bC,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","100vh"],x.w)
A.fr=new C.q(A.oW,"spacing",A.be,A.d,!0,!1,null,null,null,A.b,"height")
A.rj={mw:0}
A.hQ=w(["max-width"],x.s)
A.lA=new B.c(A.rj,[A.hQ],x.M)
A.bA={full:0,min:1,max:2,fit:3,"1/2":4,"1/3":5,"2/3":6,"1/4":7,"3/4":8,none:9,screen:10}
A.lc=new B.c(A.bA,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","none","100vw"],x.w)
A.hy=new C.q(A.lA,"spacing",A.lc,A.t,!0,!1,null,null,null,A.b,"max-width")
A.rf={mh:0}
A.iq=w(["max-height"],x.s)
A.mG=new B.c(A.rf,[A.iq],x.M)
A.ld=new B.c(A.bA,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","none","100vh"],x.w)
A.fJ=new C.q(A.mG,"spacing",A.ld,A.t,!0,!1,null,null,null,A.b,"max-height")
A.ri={mnw:0}
A.i2=w(["min-width"],x.s)
A.nv=new B.c(A.ri,[A.i2],x.M)
A.fM=new C.q(A.nv,"spacing",A.bd,A.t,!0,!1,null,null,null,A.b,"min-width")
A.rh={mnh:0}
A.kA=w(["min-height"],x.s)
A.oP=new B.c(A.rh,[A.kA],x.M)
A.fV=new C.q(A.oP,"spacing",A.be,A.t,!0,!1,null,null,null,A.b,"min-height")
A.b2=w([A.fB,A.fr,A.hy,A.fJ,A.fM,A.fV],x.D)
A.f=w([],x.s)
A.ro={o:0}
A.kD=w(["opacity"],x.s)
A.oK=new B.c(A.ro,[A.kD],x.M)
A.fO=new C.q(A.oK,"opacity",A.b,A.d,!0,!1,null,null,null,A.b,"opacity")
A.b3=w([A.fO],x.D)
A.qb={app:0}
A.iK=w(["-webkit-appearance","appearance"],x.s)
A.mw=new B.c(A.qb,[A.iK],x.M)
A.rl={none:0,auto:1}
A.bn=new B.c(A.rl,["none","auto"],x.w)
A.fE=new C.q(A.mw,null,A.bn,A.d,!1,!1,null,null,null,A.b,"appearance")
A.q7={accent:0}
A.hW=w(["accent-color"],x.s)
A.oG=new B.c(A.q7,[A.hW],x.M)
A.le=new B.c(A.bw,["auto"],x.w)
A.fg=new C.q(A.oG,"colors",A.le,A.d,!0,!1,C.qE(),null,null,A.b,"accent-color")
A.qw={caret:0}
A.j0=w(["caret-color"],x.s)
A.mX=new B.c(A.qw,[A.j0],x.M)
A.qg={auto:0,transparent:1}
A.nx=new B.c(A.qg,["auto","transparent"],x.w)
A.f6=new C.q(A.mX,"colors",A.nx,A.d,!0,!1,C.qE(),null,null,A.b,"caret-color")
A.rN={scheme:0}
A.j6=w(["color-scheme"],x.s)
A.lC=new B.c(A.rN,[A.j6],x.M)
A.qx={normal:0,light:1,dark:2,"light-dark":3}
A.mi=new B.c(A.qx,["normal","light","dark","light dark"],x.w)
A.fU=new C.q(A.lC,null,A.mi,A.d,!1,!1,null,null,null,A.b,"color-scheme")
A.rK={rsz:0}
A.kQ=w(["resize"],x.s)
A.ly=new B.c(A.rK,[A.kQ],x.M)
A.pn={none:0,x:1,y:2,both:3}
A.oC=new B.c(A.pn,["none","horizontal","vertical","both"],x.w)
A.fZ=new C.q(A.ly,null,A.oC,A.d,!1,!1,null,null,null,A.b,"resize")
A.qQ={fsz:0}
A.jG=w(["field-sizing"],x.s)
A.mc=new B.c(A.qQ,[A.jG],x.M)
A.qA={content:0,fixed:1}
A.ln=new B.c(A.qA,["content","fixed"],x.w)
A.hu=new C.q(A.mc,null,A.ln,A.d,!1,!1,null,null,null,A.b,"field-sizing")
A.rA={pe:0}
A.iF=w(["pointer-events"],x.s)
A.me=new B.c(A.rA,[A.iF],x.M)
A.hp=new C.q(A.me,null,A.bn,A.d,!1,!1,null,null,null,A.b,"pointer-events")
A.t9={us:0}
A.ie=w(["-webkit-user-select","user-select"],x.s)
A.mo=new B.c(A.t9,[A.ie],x.M)
A.qh={none:0,text:1,all:2,auto:3}
A.od=new B.c(A.qh,["none","text","all","auto"],x.w)
A.hi=new C.q(A.mo,null,A.od,A.d,!1,!1,null,null,null,A.b,"user-select")
A.rG={ring:0}
A.lG=new B.c(A.rG,[A.aP],x.M)
A.fs=new C.q(A.lG,null,A.a7,A.d,!0,!1,null,null,"0 0 0 {} var(--jx-ring-color, currentColor)",A.b,"ring")
A.rH={ringc:0}
A.jH=w(["--jx-ring-color"],x.s)
A.nT=new B.c(A.rH,[A.jH],x.M)
A.hc=new C.q(A.nT,"colors",A.b,A.d,!0,!1,C.qE(),null,null,A.b,"ring-color")
A.b5=w([A.fE,A.fg,A.f6,A.fU,A.fZ,A.hu,A.hp,A.hi,A.fs,A.hc],x.D)
A.q6={ac:0}
A.iU=w(["align-content"],x.s)
A.oF=new B.c(A.q6,[A.iU],x.M)
A.rY={start:0,end:1,center:2,between:3,around:4,evenly:5,stretch:6,normal:7}
A.ba=new B.c(A.rY,["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch","normal"],x.w)
A.hl=new C.q(A.oF,null,A.ba,A.d,!1,!1,null,null,null,A.b,"align-content")
A.rz={pc:0}
A.l_=w(["place-content"],x.s)
A.oY=new B.c(A.rz,[A.l_],x.M)
A.hv=new C.q(A.oY,null,A.ba,A.d,!1,!1,null,null,null,A.b,"place-content")
A.r5={ji:0,pi:1}
A.jO=w(["justify-items"],x.s)
A.ix=w(["place-items"],x.s)
A.nY=new B.c(A.r5,[A.jO,A.ix],x.M)
A.r8={start:0,end:1,center:2,stretch:3,baseline:4}
A.oZ=new B.c(A.r8,["start","end","center","stretch","baseline"],x.w)
A.hm=new C.q(A.nY,null,A.oZ,A.d,!1,!1,null,null,null,A.b,"justify-items")
A.r6={js:0}
A.kX=w(["justify-self"],x.s)
A.lg=new B.c(A.r6,[A.kX],x.M)
A.pX={start:0,end:1,center:2,stretch:3,baseline:4,auto:5}
A.mV=new B.c(A.pX,["start","end","center","stretch","baseline","auto"],x.w)
A.fc=new C.q(A.lg,null,A.mV,A.d,!1,!1,null,null,null,A.b,"justify-self")
A.rv={order:0}
A.kF=w(["order"],x.s)
A.nK=new B.c(A.rv,[A.kF],x.M)
A.tj={first:0,last:1,none:2}
A.oy=new B.c(A.tj,["-9999","9999","0"],x.w)
A.hd=new C.q(A.nK,null,A.oy,A.d,!0,!0,C.yy(),null,null,A.b,"order")
A.qi={basis:0}
A.la=w(["flex-basis"],x.s)
A.lV=new B.c(A.qi,[A.la],x.M)
A.pD={auto:0,full:1,"1/2":2,"1/3":3,"2/3":4,"1/4":5,"3/4":6}
A.oj=new B.c(A.pD,["auto","100%","50%","33.333333%","66.666667%","25%","75%"],x.w)
A.fp=new C.q(A.lV,"spacing",A.oj,A.d,!0,!1,null,null,null,A.b,"flex-basis")
A.b7=w([A.hl,A.hv,A.hm,A.fc,A.hd,A.fp],x.D)
A.q9={ai:0}
A.jI=w(["align-items"],x.s)
A.mn=new B.c(A.q9,[A.jI],x.M)
A.r3={start:0,end:1,center:2,baseline:3,stretch:4}
A.lQ=new B.c(A.r3,["flex-start","flex-end","center","baseline","stretch"],x.w)
A.f9=new C.q(A.mn,null,A.lQ,A.d,!1,!1,null,null,null,A.b,"align-items")
A.r4={jc:0}
A.k9=w(["justify-content"],x.s)
A.oI=new B.c(A.r4,[A.k9],x.M)
A.pf={start:0,end:1,center:2,between:3,around:4,evenly:5,stretch:6}
A.mg=new B.c(A.pf,["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch"],x.w)
A.fq=new C.q(A.oI,null,A.mg,A.d,!1,!1,null,null,null,A.b,"justify-content")
A.qJ={fd:0}
A.jw=w(["flex-direction"],x.s)
A.oz=new B.c(A.qJ,[A.jw],x.M)
A.te={row:0,"row-reverse":1,col:2,"col-reverse":3,column:4,"column-reverse":5}
A.oT=new B.c(A.te,["row","row-reverse","column","column-reverse","column","column-reverse"],x.w)
A.fl=new C.q(A.oz,null,A.oT,A.d,!1,!1,null,null,null,A.b,"flex-direction")
A.qU={gap:0}
A.k4=w(["gap"],x.s)
A.na=new B.c(A.qU,[A.k4],x.M)
A.fH=new C.q(A.na,"spacing",A.b,A.t,!0,!1,null,null,null,A.b,"gap")
A.b8=w([A.f9,A.fq,A.fl,A.fH],x.D)
A.ta={wrap:0,nowrap:1,"wrap-reverse":2}
A.lo=new B.c(A.ta,["wrap","nowrap","wrap-reverse"],x.w)
A.pF={"transition-property":0}
A.lq=new B.c(A.pF,["none"],x.w)
A.pY={"-webkit-backdrop-filter":0,"backdrop-filter":1}
A.mk=new B.c(A.pY,[y.a,y.a],x.w)
A.py={overflow:0,display:1,"-webkit-box-orient":2,"-webkit-line-clamp":3}
A.mF=new B.c(A.py,["visible","block","horizontal","unset"],x.w)
A.pz={"expression(":0,"javascript:":1,"vbscript:":2,"-moz-binding":3,"behavior:":4,"@import":5,"@charset":6}
A.mH=new B.c(A.pz,["the expression() function is not allowed","the javascript: scheme is not allowed","the vbscript: scheme is not allowed","-moz-binding is not allowed","behavior is not allowed","@import is not allowed","@charset is not allowed"],x.w)
A.nq=new B.c(A.by,[y.d],x.w)
A.pM={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6}
A.bi=new B.c(A.pM,["0","4px","8px","16px","24px","40px","64px"],x.w)
A.t0={tr:0}
A.x9=new C.ad(A.t0,1,x.O)
A.qy={clamp:0}
A.xm=new C.ad(A.qy,1,x.O)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"yL","tQ",()=>B.X("[a-zA-Z0-9_-]"))
w($,"yP","tS",()=>B.X("^0([a-z%]*)$"))
w($,"zl","ud",()=>B.X(y.j))
w($,"zq","uf",()=>B.X("^\\d+(\\.\\d+)?$"))
w($,"zn","ue",()=>B.X("^(repeating-)?(linear|radial|conic)-gradient\\(|^url\\(|^image-set\\("))
w($,"zw","qP",()=>{var v,u,t,s=x.N,r=B.w(s,x.f)
for(v=A.bb.gN().gu(0);v.j();){u=v.gm()
t=u.a
if(t!=="none")r.i(0,t,B.F(["display",u.b],s,s))}return B.a([A.fy,C.pV("display-standalone",r)],x.D)})
w($,"zB","qU",()=>{var v,u,t=x.N,s=B.w(t,x.f)
for(v=A.bj.gN().gu(0);v.j();){u=v.gm()
s.i(0,u.a,B.F(["position",u.b],t,t))}return B.a([A.h0,C.pV("position-standalone",s)],x.D)})
w($,"zm","uc",()=>B.X(y.j))
w($,"zA","qT",()=>{var v,u,t,s,r,q="grid-template-columns",p=null,o="grid-template-rows",n=x.s,m=x.N,l=x.a,k=B.F(["cols",B.a([q],n)],m,l)
k=C.hk(q,!1,A.b,p,C.tf(12),k,p)
v=B.F(["rows",B.a([o],n)],m,l)
v=C.hk(o,!1,A.b,p,C.tf(6),v,p)
u=B.F(["span",B.a(["grid-column"],n)],m,l)
t=B.w(m,m)
for(s=1;s<=12;++s){r=""+s
t.i(0,r,"span "+r+" / span "+r)}t.i(0,"full","1 / -1")
u=C.hk("grid-column",!1,A.b,p,t,u,p)
l=B.F(["rspan",B.a(["grid-row"],n)],m,l)
m=B.w(m,m)
for(s=1;s<=6;++s){n=""+s
m.i(0,n,"span "+n+" / span "+n)}m.i(0,"full","1 / -1")
return B.a([k,v,u,C.hk("grid-row",!1,A.b,p,m,l,p),A.fh],x.D)})
w($,"zz","qS",()=>{var v,u,t=x.N,s=B.w(t,x.f)
for(v=A.lo.gN().gu(0);v.j();){u=v.gm()
s.i(0,u.a,B.F(["flex-wrap",u.b],t,t))}return B.a([C.pV("flex-wrap-standalone",s),A.ho,A.h5,A.fm,A.h9],x.D)})
w($,"zx","qQ",()=>B.a([A.ha,new C.dB(A.x9,B.F(["none",A.lq,"all",C.dS("all"),"colors",C.dS("color, background-color, border-color, text-decoration-color, fill, stroke"),"opacity",C.dS("opacity"),"shadow",C.dS("box-shadow"),"transform",C.dS("transform, translate, scale, rotate"),"filter",C.dS("filter, backdrop-filter"),"default",C.dS("color, background-color, border-color, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter")],x.N,x.f),"transition"),A.he,A.fn,A.fw],x.D))
w($,"zo","e1",()=>B.X("^[0-9]+$"))
w($,"zy","qR",()=>{var v="blur",u="brightness",t="contrast",s="grayscale",r="hue-rotate",q="saturate",p="drop-shadow",o=x.N
return B.a([C.bw(v,v,"--jx-blur",v,!1,!1,C.tG(),A.bi),C.bw(u,"bri","--jx-brightness",u,!1,!1,C.dp(),A.b),C.bw(t,"con","--jx-contrast",t,!1,!1,C.dp(),A.b),C.bw(s,"gs","--jx-grayscale",s,!1,!1,C.dp(),A.b),C.bw(r,"hue","--jx-hue-rotate",r,!0,!1,C.pH(),A.b),C.bw(q,"sat","--jx-saturate",q,!1,!1,C.dp(),A.b),C.bw(p,"dsh","--jx-drop-shadow",p,!1,!1,null,B.F(["sm","0 1px 1px rgb(0 0 0 / 0.05)","md","0 3px 3px rgb(0 0 0 / 0.12)","lg","0 8px 10px rgb(0 0 0 / 0.15)","xl","0 16px 24px rgb(0 0 0 / 0.18)","none","0 0 #0000"],o,o)),A.eu,C.bw("backdrop-blur","bblur","--jx-bd-blur",v,!1,!0,C.tG(),A.bi),C.bw("backdrop-brightness","bbri","--jx-bd-brightness",u,!1,!0,C.dp(),A.b),C.bw("backdrop-contrast","bcon","--jx-bd-contrast",t,!1,!0,C.dp(),A.b),C.bw("backdrop-grayscale","bgray","--jx-bd-grayscale",s,!1,!0,C.dp(),A.b),C.bw("backdrop-saturate","bsat","--jx-bd-saturate",q,!1,!0,C.dp(),A.b)],x.D)})
w($,"zC","qV",()=>B.a([A.et,A.h_,A.fN,new C.dA(A.xm,new C.ps(),"line-clamp")],x.D))})()};
(a=>{a["GphZ35LMKVCd5W+xN2eHG1G0v0Y="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_74.part.js.map
