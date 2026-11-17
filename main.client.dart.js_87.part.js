((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,C={
w3(){throw B.n(B.aF("Cannot modify constant Set"))},
dK:function dK(){},
ah:function ah(d,e,f){this.a=d
this.b=e
this.$ti=f},
eA:function eA(d,e){this.a=d
this.$ti=e},
cc(d){return new C.eK(d,null)},
kI:function kI(){},
eK:function eK(d,e){this.a=d
this.b=e},
bt:function bt(d,e,f){this.a=d
this.b=e
this.c=f},
wz(d,e){var w,v
if(d.length!==e.length)return!1
for(w=0;w<d.length;++w){v=d[w]
if(!(w<e.length))return B.x(e,w)
if(!v.N(0,e[w]))return!1}return!0},
aC:function aC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hy:function hy(){},
rc(d,e){return new C.ce(e,d)},
hE(d,e,f,g,h,i,j){return new C.u(i,null,h,A.d,!0,e,g,null,j,f,d)},
uE(d){var w,v,u=d.geO()
u.toString
w=D.c.O(u)
v=C.tu(w)
if(v!=null)throw B.n(C.cc('Arbitrary value rejected for "'+d.a+'": '+v+"."))
return w},
uF(d,e){var w,v,u,t,s,r,q,p=d.length
if(p===0)return A.f
w=B.a([],x.G)
for(v=J.a_(e);v.j();){u=v.gl()
if(u===d||u.length===0)continue
t=C.yV(d,u)
if(t>2||t>=p)continue
if(0>=u.length)return B.x(u,0)
s=u[0]
if(0>=p)return B.x(d,0)
s=s===d[0]?0:1
D.a.t(w,new B.f(t*2+s,u))}p=B.a([],x.m)
for(r=0;r<w.length;++r)p.push(new B.f(w[r],r))
D.a.a5(p,new C.oM())
v=B.a([],x.s)
for(u=p.length,q=0;q<p.length;p.length===u||(0,B.L)(p),++q)v.push(p[q].a.b)
return v},
yV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=e.length,k=l+1,j=x.S,i=J.tn(k,j)
for(w=0;w<k;++w)i[w]=w
for(v=d.length,u=x.t,w=0;w<v;w=s,i=t){t=B.dd(k,0,!1,j)
s=w+1
D.a.i(t,0,s)
for(r=0;r<l;r=p){q=d[w]===e[r]?0:1
p=r+1
o=t[r]
n=i.length
if(!(p<n))return B.x(i,p)
m=i[p]
if(!(r<n))return B.x(i,r)
D.a.i(t,p,D.a.fz(B.a([o+1,m+1,i[r]+q],u),new C.ow()))}}if(!(l<i.length))return B.x(i,l)
return i[l]},
ce:function ce(d,e){this.b=d
this.a=e},
u:function u(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
mr:function mr(d){this.a=d},
dS:function dS(d,e,f){this.b=d
this.c=e
this.a=f},
dR:function dR(d,e,f){this.b=d
this.e=e
this.a=f},
oM:function oM(){},
ow:function ow(){},
yz(d){var w=B.N("^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")
return w.b.test(d)?d:null},
yZ(d){var w=$.el()
return w.b.test(d)?d+"px":null},
yo(d){var w=$.el()
return w.b.test(d)?d+"deg":null},
yX(d){var w=$.el()
return w.b.test(d)?d+"ms":null},
yF(d){var w=$.el()
return w.b.test(d)?d:null},
z_(d){var w,v,u,t,s=$.el()
if(!s.b.test(d))return null
w=C.qB(d,null)
v=D.e.ae(w,100)
s=D.c.bZ(D.e.p(D.e.ai(w,100)),2,"0")
u=B.N("0+$")
t=B.ba(s,u,"")
s=""+v
return t.length===0?s:s+"."+t},
yc(d){var w,v,u,t=B.N("^([0-9]+)/([0-9]+)$").aK(d)
if(t==null)w=null
else{w=t.b
v=w.length
if(1>=v)return B.x(w,1)
u=w[1]
if(2>=v)return B.x(w,2)
w=B.z(u)+" / "+B.z(w[2])}return w},
bF(d,e,f,g,h,i,j,k){var w=B.r([e,B.a([f],x.s)],x.N,x.a),v=i?A.mE:A.nK
return C.hE(d,h,v,j,k,w,g+"({})")},
qE:function qE(){},
qB(d,e){var w=E.hV(d,e)
if(w!=null)return w
throw B.n(B.ko(d,null))},
tu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k="CSS comments are not allowed",j="unbalanced parentheses"
if(D.c.O(d).length===0)return"empty value"
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
q=p<=w&&D.c.R(d,q,p).toLowerCase()==="url("}if(q)t=u
break A}if(41===r){if(u===t)t=-1;--u
if(u<0)return j
break A}if(59===r){if(t<0)return'character ";" not allowed'
break A}if(123===r||125===r)return"braces are not allowed"
if(33===r)return'character "!" not allowed (use the class ! suffix)'}}if(v!=null)return"unclosed quotes"
if(u!==0)return j
w=B.N("\\s+")
o=B.ba(d.toLowerCase(),w,"")
if(D.c.C(o,"@"))return"@ rule not allowed"
for(w=A.n0.gM(),q=w.$ti,w=new B.aH(w.a(),q.h("aH<1>")),q=q.c;w.j();){p=w.b
if(p==null)p=q.a(p)
n=p.a
if(B.qU(o,n,0))return p.b}m=D.c.bd(o,"data:")
while(m!==-1){w=m+5
l=D.c.I(o,w)
if(!D.c.C(l,"image/")&&!D.c.C(l,"font/"))return"only image or font data: URLs are allowed"
m=D.c.d4(o,"data:",w)}return null},
yA(d){var w=$.vA()
return w.b.test(d)?d:null},
yt(d){var w=E.hV(d,null)
if(w==null||w<100||w>900||D.e.ai(w,100)!==0)return null
return d},
ye(d){var w=$.vB()
return w.b.test(d)?A.aU:null},
z9(d){var w=$.vC()
return w.b.test(d)?d:null},
yB(d){var w=$.vz()
return w.b.test(d)?d:null},
uA(d){var w,v,u=x.N
u=B.y(u,u)
for(w=1;w<=d;++w){v=""+w
u.i(0,v,"repeat("+v+", minmax(0, 1fr))")}u.i(0,"none","none")
return u},
yq(d){var w=E.hV(d,null)
return w==null?null:B.z(w)+"ms"},
ec(d){var w=x.N
return B.r(["transition-property",d,"transition-timing-function","cubic-bezier(0.4, 0, 0.2, 1)","transition-duration","150ms"],w,w)}},A
J=c[1]
B=c[0]
D=c[2]
E=c[45]
C=a.updateHolder(c[44],C)
A=c[82]
C.dK.prototype={
t(d,e){B.q(this).c.a(e)
C.w3()}}
C.ah.prototype={
gq(d){return this.b},
gE(d){return this.b===0},
gJ(d){return this.b!==0},
gu(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new B.cw(w,w.length,v.$ti.h("cw<1>"))},
D(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
C.eA.prototype={
gq(d){return this.a.length},
gE(d){return this.a.length===0},
gJ(d){return this.a.length!==0},
gu(d){var w=this.a
return new B.cw(w,w.length,this.$ti.h("cw<1>"))},
a9(){var w,v,u,t,s=this,r=s.$map
if(r==null){r=new B.d5(s.$ti.h("d5<1,1>"))
for(w=s.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
r.i(0,t,t)}s.$map=r}return r},
D(d,e){return this.a9().V(e)}}
C.kI.prototype={
p(d){return B.aA(this).p(0)+": "+this.a}}
C.eK.prototype={}
C.bt.prototype={
fM(){var w=this.c?" !important":""
return this.a+": "+this.b+w+";"},
N(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.bt&&B.aA(v)===B.aA(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gF(d){return B.cl(this.a,this.b,this.c,D.h,D.h,D.h)},
p(d){return this.fM()}}
C.aC.prototype={
gd3(){var w,v=this.e
if(v==null)v=""
w=this.d
if(w==null)w=""
return v+this.a+w},
N(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.aC&&B.aA(v)===B.aA(e)&&v.a===e.a&&v.c==e.c&&v.d==e.d&&v.e==e.e&&C.wz(v.b,e.b)
else w=!0
return w},
gF(d){var w=this
return B.cl(w.a,w.c,w.d,w.e,B.mD(w.b),D.h)},
p(d){var w,v,u,t,s,r=this.c,q=r!=null,p=q&&r.length!==0?r+" { ":""
p+=this.gd3()+" { "
for(w=this.b,v=w.length,u=0;u<v;++u){t=w[u]
s=t.c?" !important":""
p+=t.a+": "+t.b+s+"; "}p+="}"
r=q&&r.length!==0?p+" }":p
return r.charCodeAt(0)==0?r:r}}
C.hy.prototype={
bb(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=".";v<w;++v){t=d[v]
s=B.N("[0-9]")
if(s.b.test(t))if(v!==0){s=v===1&&d[0]==="-"
r=s}else r=!0
else r=!1
if(r){if(0>=t.length)return B.x(t,0)
u+="\\"+D.e.dc(t.charCodeAt(0),16)+" "}else{s=$.va()
u=s.b.test(t)?u+t:u+("\\"+t)}}return u.charCodeAt(0)==0?u:u},
$iab:1}
C.ce.prototype={
bj(d){return!d.gbc()&&!d.f&&this.b.V(d.b)},
az(d,e){var w,v,u,t,s=d.b,r=this.b.k(0,s)
if(r==null)throw B.n(C.cc('Unknown class "'+s+'" for "'+this.a+'".'))
s=this.bb(d.a)
w=B.a([],x.K)
for(v=r.gM(),v=v.gu(v),u=d.e;v.j();){t=v.gl()
w.push(new C.bt(t.a,t.b,u))}return B.a([new C.aC(s,w,null,null,null)],x.R)}}
C.u.prototype={
bj(d){var w
if(d.gbc())w=(this.r||!d.f)&&this.b.V(d.b)
else w=!1
return w},
az(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.b,l=o.b.k(0,m)
if(l==null)throw B.n(C.cc('Utility "'+m+'" is not handled by "'+o.a+'".'))
w=o.fG(d,e)
if(w==null||o.e.D(0,w))throw B.n(C.cc('Invalid value "'+B.z(d.c)+'" for "'+m+'".'+o.f1(d,e)))
if(d.f)w=o.e9(w,d)
m=o.x
v=m==null?n:m.$1(w)
if(v==null)v=l
m=o.y
if(m==null)u=n
else{m=B.ba(m,"{}",w)
u=m}if(u==null)u=w
m=o.bb(d.a)
t=B.a([],x.K)
for(s=J.a_(v),r=d.e;s.j();)t.push(new C.bt(s.gl(),u,r))
for(s=o.z.gM(),q=s.$ti,s=new B.aH(s.a(),q.h("aH<1>")),q=q.c;s.j();){p=s.b
if(p==null)p=q.a(p)
t.push(new C.bt(p.a,p.b,r))}return B.a([new C.aC(m,t,n,n,n)],x.R)},
fG(d,e){var w,v,u,t,s=this
if(d.gaM()){if(!s.f)return null
return C.uE(d)}w=d.c
w.toString
v=s.c
if(v!=null){u=e.fF(v,w)
if(u!=null)return u}t=s.d.k(0,w)
if(t==null){t=s.w
w=t==null?null:t.$1(w)}else w=t
return w},
f1(d,e){var w,v,u,t,s,r,q,p=this,o=p.c,n=x.s,m=B.a([],n)
if(o!=null)D.a.m(m,e.c.c6(o).gG())
D.a.m(m,p.d.gG())
w=x.U
v=B.aa(new B.a2(m,x.Q.a(new C.mr(p)),w),w.h("o.E"))
u=B.a([],n)
t=d.gaM()?null:d.c
s=t==null?null:B.dO(C.uF(t,v),x.N)
if(s!=null)D.a.t(u,'did you mean "'+d.b+":"+s+'"?')
if(v.length!==0){r=B.f9(v,0,B.ee(12,"count",x.S),B.a4(v).c).v(0,", ")
n=v.length>12?"\u2026":""
D.a.t(u,"accepted values: "+r+n)}if(p.f)D.a.t(u,"or an arbitrary value in brackets")
if(u.length===0)return""
q=D.a.v(u,"; ")
if(0>=q.length)return B.x(q,0)
return" "+q[0].toUpperCase()+D.c.I(q,1)+"."},
e9(d,e){var w=$.vc()
if(w.b.test(d))return d
w=B.N("^[0-9.]")
if(w.b.test(d))return"-"+d
if(D.c.C(d,"-"))return D.c.I(d,1)
if(D.c.C(d,"calc(")||D.c.C(d,"var("))return"calc(-1 * "+d+")"
throw B.n(C.cc('Value "'+d+'" cannot be negative ('+e.a+")."))}}
C.dS.prototype={
bj(d){return d.gbc()&&!d.f&&!d.gaM()&&this.b.D(0,d.b)},
az(d,e){var w,v,u,t,s=d.c,r=this.c.k(0,s)
if(r==null)throw B.n(C.cc('Invalid value "'+B.z(s)+'" for "'+d.b+'".'))
s=this.bb(d.a)
w=B.a([],x.K)
for(v=r.gM(),v=v.gu(v),u=d.e;v.j();){t=v.gl()
w.push(new C.bt(t.a,t.b,u))}return B.a([new C.aC(s,w,null,null,null)],x.R)}}
C.dR.prototype={
bj(d){var w
if(d.gbc())w=!d.f&&this.b.D(0,d.b)
else w=!1
return w},
az(d,e){var w,v,u,t,s,r=d.gaM()?C.uE(d):d.c,q=this.e.$3(r,d,e)
if(q==null||q.gE(q))throw B.n(C.cc('Invalid value "'+B.z(d.c)+'" for "'+d.b+'".'))
w=this.bb(d.a)
v=B.a([],x.K)
for(u=q.gM(),u=u.gu(u),t=d.e;u.j();){s=u.gl()
v.push(new C.bt(s.a,s.b,t))}return B.a([new C.aC(w,v,null,null,null)],x.R)}}
var z=a.updateTypes(["b?(b)","v<b,b>?(b?,bP,rd)","m<b>?(b)"])
C.mr.prototype={
$1(d){return!this.a.e.D(0,B.k(d))},
$S:9}
C.oM.prototype={
$2(d,e){var w,v=x.X
v.a(d)
v.a(e)
w=D.e.L(d.a.a,e.a.a)
return w!==0?w:D.e.L(d.b,e.b)},
$S:53}
C.ow.prototype={
$2(d,e){B.am(d)
B.am(e)
return d<e?d:e},
$S:54}
C.qE.prototype={
$3(d,e,f){var w
if(d==="none")return A.mZ
if(d!=null){w=$.el()
w=!w.b.test(d)}else w=!0
if(w)return null
w=x.N
return B.r(["overflow","hidden","display","-webkit-box","-webkit-box-orient","vertical","-webkit-line-clamp",d],w,w)},
$S:z+1};(function installTearOffs(){var w=a._static_1
w(C,"uX","yz",0)
w(C,"uZ","yZ",0)
w(C,"qW","yo",0)
w(C,"uY","yX",0)
w(C,"A8","yF",0)
w(C,"dF","z_",0)
w(C,"A7","yc",0)
w(C,"je","yA",0)
w(C,"A4","yt",0)
w(C,"A3","ye",2)
w(C,"A5","z9",0)
w(C,"rV","yB",0)
w(C,"A6","yq",0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.dK,B.bA)
v(C.dK,[C.ah,C.eA])
v(B.A,[C.kI,C.bt,C.aC,C.hy])
w(C.eK,C.kI)
v(C.hy,[C.ce,C.u,C.dS,C.dR])
v(B.a8,[C.mr,C.qE])
v(B.bb,[C.oM,C.ow])})()
B.J(b.typeUniverse,JSON.parse('{"dK":{"bA":["1"],"di":["1"],"F":["1"],"o":["1"]},"ah":{"dK":["1"],"bA":["1"],"di":["1"],"F":["1"],"o":["1"]},"eA":{"dK":["1"],"bA":["1"],"di":["1"],"F":["1"],"o":["1"]},"hy":{"ab":[]},"ce":{"ab":[]},"u":{"ab":[]},"dS":{"ab":[]},"dR":{"ab":[]}}'))
var y={j:"^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$",a:"var(--jx-bd-blur,) var(--jx-bd-brightness,) var(--jx-bd-contrast,) var(--jx-bd-grayscale,) var(--jx-bd-saturate,)",d:"var(--jx-blur,) var(--jx-brightness,) var(--jx-contrast,) var(--jx-grayscale,) var(--jx-hue-rotate,) var(--jx-invert,) var(--jx-saturate,) var(--jx-sepia,) var(--jx-drop-shadow,)"}
var x=(function rtii(){var w=B.j
return{w:w("c<b,b>"),M:w("c<b,m<b>>"),j:w("c<b,v<b,b>>"),O:w("ah<b>"),K:w("l<bt>"),R:w("l<aC>"),D:w("l<ab>"),m:w("l<+(+(d,b),d)>"),G:w("l<+(d,b)>"),s:w("l<b>"),t:w("l<d>"),a:w("m<b>"),f:w("v<b,b>"),X:w("+(+(d,b),d)"),N:w("b"),U:w("a2<b>"),Q:w("D(b)"),S:w("d")}})();(function constants(){var w=a.makeConstList
A.py={uppercase:0,lowercase:1,capitalize:2,"normal-case":3,italic:4,"not-italic":5,truncate:6,antialiased:7,"tabular-nums":8,"sr-only":9,"not-sr-only":10,visible:11,invisible:12,isolate:13,"scroll-smooth":14}
A.U={"text-transform":0}
A.p3=new B.c(A.U,["uppercase"],x.w)
A.p4=new B.c(A.U,["lowercase"],x.w)
A.p5=new B.c(A.U,["capitalize"],x.w)
A.p6=new B.c(A.U,["none"],x.w)
A.bM={"font-style":0}
A.mK=new B.c(A.bM,["italic"],x.w)
A.mL=new B.c(A.bM,["normal"],x.w)
A.pN={overflow:0,"text-overflow":1,"white-space":2}
A.pn=new B.c(A.pN,["hidden","ellipsis","nowrap"],x.w)
A.pK={"-webkit-font-smoothing":0,"-moz-osx-font-smoothing":1}
A.mb=new B.c(A.pK,["antialiased","grayscale"],x.w)
A.q7={"font-variant-numeric":0}
A.pl=new B.c(A.q7,["tabular-nums"],x.w)
A.qZ={position:0,width:1,height:2,padding:3,margin:4,overflow:5,clip:6,"white-space":7,"border-width":8}
A.mB=new B.c(A.qZ,["absolute","1px","1px","0","-1px","hidden","rect(0, 0, 0, 0)","nowrap","0"],x.w)
A.pP={position:0,width:1,height:2,padding:3,margin:4,overflow:5,clip:6,"white-space":7}
A.mv=new B.c(A.pP,["static","auto","auto","0","0","visible","auto","normal"],x.w)
A.bO={visibility:0}
A.mk=new B.c(A.bO,["visible"],x.w)
A.mj=new B.c(A.bO,["hidden"],x.w)
A.rl={isolation:0}
A.nv=new B.c(A.rl,["isolate"],x.w)
A.pL={"scroll-behavior":0}
A.nN=new B.c(A.pL,["smooth"],x.w)
A.mW=new B.c(A.py,[A.p3,A.p4,A.p5,A.p6,A.mK,A.mL,A.pn,A.mb,A.pl,A.mB,A.mv,A.mk,A.mj,A.nv,A.nN],x.j)
A.ey=new C.ce(A.mW,"text-standalone")
A.qI={grayscale:0,invert:1,sepia:2,"filter-none":3}
A.qL={"--jx-grayscale":0,filter:1}
A.nU=new B.c(A.qL,["grayscale(1)",y.d],x.w)
A.qh={"--jx-invert":0,filter:1}
A.mr=new B.c(A.qh,["invert(1)",y.d],x.w)
A.rV={"--jx-sepia":0,filter:1}
A.n1=new B.c(A.rV,["sepia(1)",y.d],x.w)
A.bD={filter:0}
A.nL=new B.c(A.bD,["none"],x.w)
A.n7=new B.c(A.qI,[A.nU,A.mr,A.n1,A.nL],x.j)
A.ez=new C.ce(A.n7,"filter-standalone")
A.rg={gx:0,gy:1}
A.jh=w(["column-gap"],x.s)
A.kr=w(["row-gap"],x.s)
A.lU=new B.c(A.rg,[A.jh,A.kr],x.M)
A.b=new B.c(D.ai,[],x.w)
A.bB={auto:0}
A.u=new C.ah(A.bB,1,x.O)
A.fm=new C.u(A.lU,"spacing",A.b,A.u,!0,!1,null,null,null,A.b,"gap-axis")
A.rf={grow:0,shrink:1}
A.ih=w(["flex-grow"],x.s)
A.lq=w(["flex-shrink"],x.s)
A.ow=new B.c(A.rf,[A.ih,A.lq],x.M)
A.pt={"0":0,"1":1}
A.nc=new B.c(A.pt,["0","1"],x.w)
A.d=new C.ah(D.ai,0,x.O)
A.fr=new C.u(A.ow,null,A.nc,A.d,!0,!1,null,null,null,A.b,"flex-grow-shrink")
A.r0={ease:0}
A.ii=w(["transition-timing-function"],x.s)
A.pm=new B.c(A.r0,[A.ii],x.M)
A.po={linear:0,in:1,out:2,"in-out":3}
A.o0=new B.c(A.po,["linear","cubic-bezier(0.4, 0, 1, 1)","cubic-bezier(0, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],x.w)
A.fs=new C.u(A.pm,null,A.o0,A.d,!0,!1,null,null,null,A.b,"transition-timing-function")
A.qU={cur:0}
A.k4=w(["cursor"],x.s)
A.nm=new B.c(A.qU,[A.k4],x.M)
A.rR={auto:0,default:1,pointer:2,text:3,move:4,wait:5,grab:6,"not-allowed":7}
A.nt=new B.c(A.rR,["auto","default","pointer","text","move","wait","grab","not-allowed"],x.w)
A.fB=new C.u(A.nm,null,A.nt,A.d,!1,!1,null,null,null,A.b,"cursor")
A.qW={d:0}
A.k7=w(["display"],x.s)
A.nI=new B.c(A.qW,[A.k7],x.M)
A.tA={flex:0,block:1,grid:2,inline:3,"inline-block":4,"inline-flex":5,"inline-grid":6,contents:7,none:8,hidden:9}
A.bg=new B.c(A.tA,["flex","block","grid","inline","inline-block","inline-flex","inline-grid","contents","none","none"],x.w)
A.fD=new C.u(A.nI,null,A.bg,A.d,!1,!1,null,null,null,A.b,"display")
A.tz={wb:0}
A.i4=w(["overflow-wrap"],x.s)
A.mJ=new B.c(A.tz,[A.i4],x.M)
A.pu={normal:0,words:1,anywhere:2}
A.mm=new B.c(A.pu,["normal","break-word","anywhere"],x.w)
A.fS=new C.u(A.mJ,null,A.mm,A.d,!1,!1,null,null,null,A.b,"word-break")
A.tn={tw:0}
A.iR=w(["text-wrap"],x.s)
A.lS=new B.c(A.tn,[A.iR],x.M)
A.q3={wrap:0,nowrap:1,balance:2,pretty:3}
A.oI=new B.c(A.q3,["wrap","nowrap","balance","pretty"],x.w)
A.h4=new C.u(A.lS,null,A.oI,A.d,!1,!1,null,null,null,A.b,"text-wrap")
A.rU={pos:0}
A.l4=w(["position"],x.s)
A.m7=new B.c(A.rU,[A.l4],x.M)
A.r_={static:0,relative:1,absolute:2,fixed:3,sticky:4}
A.bo=new B.c(A.r_,["static","relative","absolute","fixed","sticky"],x.w)
A.h5=new C.u(A.m7,null,A.bo,A.d,!1,!1,null,null,null,A.b,"position")
A.r4={fl:0}
A.ke=w(["flex"],x.s)
A.mO=new B.c(A.r4,[A.ke],x.M)
A.rd={"1":0,auto:1,initial:2,none:3}
A.mu=new B.c(A.rd,["1 1 0%","1 1 auto","0 1 auto","none"],x.w)
A.ha=new C.u(A.mO,null,A.mu,A.d,!0,!1,null,null,null,A.b,"flex")
A.qw={as:0}
A.ip=w(["align-self"],x.s)
A.lF=new B.c(A.qw,[A.ip],x.M)
A.pA={auto:0,start:1,end:2,center:3,stretch:4,baseline:5}
A.lW=new B.c(A.pA,["auto","flex-start","flex-end","center","stretch","baseline"],x.w)
A.he=new C.u(A.lF,null,A.lW,A.d,!1,!1,null,null,null,A.b,"align-self")
A.t6={sh:0}
A.aT=w(["box-shadow"],x.s)
A.n8=new B.c(A.t6,[A.aT],x.M)
A.hf=new C.u(A.n8,"shadow",A.b,A.d,!0,!1,null,null,null,A.b,"box-shadow")
A.qY={dur:0}
A.kg=w(["transition-duration"],x.s)
A.oA=new B.c(A.qY,[A.kg],x.M)
A.hj=new C.u(A.oA,null,A.b,A.d,!0,!1,C.A6(),null,null,A.b,"transition-duration")
A.r5={flw:0}
A.la=w(["flex-wrap"],x.s)
A.nj=new B.c(A.r5,[A.la],x.M)
A.qc={wrap:0,nowrap:1,reverse:2}
A.oH=new B.c(A.qc,["wrap","nowrap","wrap-reverse"],x.w)
A.ht=new C.u(A.nj,null,A.oH,A.d,!1,!1,null,null,null,A.b,"flex-wrap")
A.tb={p:0,px:1,py:2,pt:3,pr:4,pb:5,pl:6}
A.l_=w(["padding"],x.s)
A.i7=w(["padding-left","padding-right"],x.s)
A.ld=w(["padding-top","padding-bottom"],x.s)
A.ka=w(["padding-top"],x.s)
A.io=w(["padding-right"],x.s)
A.ir=w(["padding-bottom"],x.s)
A.k5=w(["padding-left"],x.s)
A.mR=new B.c(A.tb,[A.l_,A.i7,A.ld,A.ka,A.io,A.ir,A.k5],x.M)
A.hp=new C.u(A.mR,"spacing",A.b,A.u,!0,!1,null,null,null,A.b,"padding")
A.pB={m:0,mx:1,my:2,mt:3,mr:4,mb:5,ml:6}
A.kH=w(["margin"],x.s)
A.iq=w(["margin-left","margin-right"],x.s)
A.j3=w(["margin-top","margin-bottom"],x.s)
A.iT=w(["margin-top"],x.s)
A.kf=w(["margin-right"],x.s)
A.i3=w(["margin-bottom"],x.s)
A.jL=w(["margin-left"],x.s)
A.oy=new B.c(A.pB,[A.kH,A.iq,A.j3,A.iT,A.kf,A.i3,A.jL],x.M)
A.hs=new C.u(A.oy,"spacing",A.b,A.d,!0,!0,null,null,null,A.b,"margin")
A.aP=w([A.hp,A.hs],x.D)
A.re={grad:0}
A.aU=w(["background-image"],x.s)
A.nh=new B.c(A.re,[A.aU],x.M)
A.rw={"to-t":0,"to-tr":1,"to-r":2,"to-br":3,"to-b":4,"to-bl":5,"to-l":6,"to-tl":7}
A.oX=new B.c(A.rw,["to top","to top right","to right","to bottom right","to bottom","to bottom left","to left","to top left"],x.w)
A.fi=new C.u(A.nh,null,A.oX,A.d,!0,!1,C.qW(),null,"linear-gradient({}, var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))",A.b,"linear-gradient")
A.qj={"grad-radial":0,"grad-conic":1}
A.bI={"background-image":0}
A.mi=new B.c(A.bI,["radial-gradient(var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))"],x.w)
A.mh=new B.c(A.bI,["conic-gradient(var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))"],x.w)
A.oG=new B.c(A.qj,[A.mi,A.mh],x.j)
A.ex=new C.ce(A.oG,"gradient-standalone")
A.bE={from:0,to:1}
A.j0=w(["--jx-from"],x.s)
A.is=w(["--jx-to"],x.s)
A.ot=new B.c(A.bE,[A.j0,A.is],x.M)
A.tl={transparent:0,current:1}
A.bl=new B.c(A.tl,["transparent","currentColor"],x.w)
A.fc=new C.u(A.ot,"colors",A.bl,A.d,!0,!1,C.uX(),null,null,A.b,"gradient-stops")
A.tw={via:0}
A.iH=w(["--jx-via"],x.s)
A.lX=new B.c(A.tw,[A.iH],x.M)
A.fK=new C.u(A.lX,"colors",A.bl,A.d,!0,!1,C.uX(),null,"{},",A.b,"gradient-via")
A.aR=w([A.fi,A.ex,A.fc,A.fK],x.D)
A.pH={bw:0,bwt:1,bwr:2,bwb:3,bwl:4,bwx:5,bwy:6}
A.kN=w(["border-width"],x.s)
A.hT=w(["border-top-width"],x.s)
A.l6=w(["border-right-width"],x.s)
A.kG=w(["border-bottom-width"],x.s)
A.jN=w(["border-left-width"],x.s)
A.it=w(["border-left-width","border-right-width"],x.s)
A.ix=w(["border-top-width","border-bottom-width"],x.s)
A.mM=new B.c(A.pH,[A.kN,A.hT,A.l6,A.kG,A.jN,A.it,A.ix],x.M)
A.fy=new C.u(A.mM,"border-width",A.b,A.d,!0,!1,null,null,null,A.b,"border-width")
A.qC={bc:0}
A.l2=w(["border-color"],x.s)
A.ml=new B.c(A.qC,[A.l2],x.M)
A.fI=new C.u(A.ml,"colors",A.b,A.d,!0,!1,C.je(),null,null,A.b,"border-color")
A.qJ={br:0}
A.kD=w(["border-radius"],x.s)
A.oM=new B.c(A.qJ,[A.kD],x.M)
A.fk=new C.u(A.oM,"border-radius",A.b,A.d,!0,!1,null,null,null,A.b,"border-radius")
A.aS=w([A.fy,A.fI,A.fk],x.D)
A.qt={anim:0}
A.jV=w(["animation"],x.s)
A.os=new B.c(A.qt,[A.jV],x.M)
A.rQ={none:0,spin:1,ping:2,pulse:3,bounce:4,"fade-in":5,"fade-out":6,"slide-up":7,"slide-down":8,"zoom-in":9,"slide-in-right":10,"slide-in-left":11,indeterminate:12}
A.n9=new B.c(A.rQ,["none","jx-spin 1s linear infinite","jx-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite","jx-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite","jx-bounce 1s infinite","jx-fade-in 0.3s ease-out both","jx-fade-out 0.3s ease-in both","jx-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) both","jx-zoom-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-in-right 0.35s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-in-left 0.35s cubic-bezier(0.16, 1, 0.3, 1) both","jx-indeterminate 1.4s ease-in-out infinite"],x.w)
A.hw=new C.u(A.os,null,A.n9,A.d,!0,!1,null,null,null,A.b,"animation")
A.qr={adur:0,adelay:1}
A.i_=w(["animation-duration"],x.s)
A.iU=w(["animation-delay"],x.s)
A.nJ=new B.c(A.qr,[A.i_,A.iU],x.M)
A.fP=new C.u(A.nJ,null,A.b,A.d,!0,!1,C.uY(),null,null,A.b,"animation-timing")
A.qX={delay:0}
A.jI=w(["transition-delay"],x.s)
A.nC=new B.c(A.qX,[A.jI],x.M)
A.fz=new C.u(A.nC,null,A.b,A.d,!0,!1,C.uY(),null,null,A.b,"transition-delay")
A.aV=w([A.hw,A.fP,A.fz],x.D)
A.tF={z:0}
A.iB=w(["z-index"],x.s)
A.mo=new B.c(A.tF,[A.iB],x.M)
A.pV={"0":0,"10":1,"20":2,"30":3,"40":4,"50":5,auto:6}
A.lO=new B.c(A.pV,["0","10","20","30","40","50","auto"],x.w)
A.fp=new C.u(A.mo,null,A.lO,A.d,!0,!0,null,null,null,A.b,"z-index")
A.qd={top:0,right:1,bottom:2,left:3,inset:4}
A.lf=w(["top"],x.s)
A.l8=w(["right"],x.s)
A.jX=w(["bottom"],x.s)
A.kE=w(["left"],x.s)
A.ks=w(["inset"],x.s)
A.lD=new B.c(A.qd,[A.lf,A.l8,A.jX,A.kE,A.ks],x.M)
A.tE={full:0,"1/2":1,auto:2}
A.ah=new B.c(A.tE,["100%","50%","auto"],x.w)
A.h9=new C.u(A.lD,"spacing",A.ah,A.d,!0,!0,null,null,null,A.b,"inset")
A.t8={smt:0}
A.lb=w(["scroll-margin-top"],x.s)
A.pk=new B.c(A.t8,[A.lb],x.M)
A.hy=new C.u(A.pk,"spacing",A.b,A.u,!0,!1,null,null,null,A.b,"scroll-margin-top")
A.qx={ov:0,ovx:1,ovy:2}
A.kX=w(["overflow"],x.s)
A.iW=w(["overflow-x"],x.s)
A.iX=w(["overflow-y"],x.s)
A.oE=new B.c(A.qx,[A.kX,A.iW,A.iX],x.M)
A.qn={auto:0,hidden:1,clip:2,visible:3,scroll:4}
A.o_=new B.c(A.qn,["auto","hidden","clip","visible","scroll"],x.w)
A.h7=new C.u(A.oE,null,A.o_,A.d,!1,!1,null,null,null,A.b,"overflow")
A.aX=w([A.fp,A.h9,A.hy,A.h7],x.D)
A.r6={fs:0}
A.kM=w(["font-size"],x.s)
A.nS=new B.c(A.r6,[A.kM],x.M)
A.fC=new C.u(A.nS,"font-size",A.b,A.d,!0,!1,null,null,null,A.b,"font-size")
A.r9={fw:0}
A.jd=w(["font-weight"],x.s)
A.nz=new B.c(A.r9,[A.jd],x.M)
A.fd=new C.u(A.nz,"font-weight",A.b,A.d,!0,!1,C.A4(),null,null,A.b,"font-weight")
A.rs={lh:0}
A.ky=w(["line-height"],x.s)
A.mx=new B.c(A.rs,[A.ky],x.M)
A.fj=new C.u(A.mx,"line-height",A.b,A.d,!0,!1,C.A5(),null,null,A.b,"line-height")
A.tc={ta:0}
A.lr=w(["text-align"],x.s)
A.lK=new B.c(A.tc,[A.lr],x.M)
A.bx={left:0,center:1,right:2,justify:3,start:4,end:5}
A.mf=new B.c(A.bx,["left","center","right","justify","start","end"],x.w)
A.hm=new C.u(A.lK,null,A.mf,A.d,!1,!1,null,null,null,A.b,"text-align")
A.tv={va:0}
A.hU=w(["vertical-align"],x.s)
A.od=new B.c(A.tv,[A.hU],x.M)
A.pE={baseline:0,top:1,middle:2,bottom:3,"text-top":4,"text-bottom":5,sub:6,"super":7}
A.o8=new B.c(A.pE,["baseline","top","middle","bottom","text-top","text-bottom","sub","super"],x.w)
A.h2=new C.u(A.od,null,A.o8,A.d,!0,!1,null,null,null,A.b,"vertical-align")
A.rv={lst:0}
A.i1=w(["list-style-type"],x.s)
A.mq=new B.c(A.rv,[A.i1],x.M)
A.qk={none:0,disc:1,circle:2,square:3,decimal:4}
A.oD=new B.c(A.qk,["none","disc","circle","square","decimal"],x.w)
A.fL=new C.u(A.mq,null,A.oD,A.d,!0,!1,null,null,null,A.b,"list-style-type")
A.ru={lsp:0}
A.l5=w(["list-style-position"],x.s)
A.oz=new B.c(A.ru,[A.l5],x.M)
A.rk={inside:0,outside:1}
A.ms=new B.c(A.rk,["inside","outside"],x.w)
A.hc=new C.u(A.oz,null,A.ms,A.d,!1,!1,null,null,null,A.b,"list-style-position")
A.r2={ff:0}
A.jB=w(["font-family"],x.s)
A.pd=new B.c(A.r2,[A.jB],x.M)
A.hx=new C.u(A.pd,"font-family",A.b,A.d,!0,!1,null,null,null,A.b,"font-family")
A.rt={ls:0}
A.iP=w(["letter-spacing"],x.s)
A.oQ=new B.c(A.rt,[A.iP],x.M)
A.pq={tighter:0,tight:1,normal:2,wide:3,wider:4}
A.mS=new B.c(A.pq,["-0.05em","-0.025em","0em","0.025em","0.05em"],x.w)
A.fY=new C.u(A.oQ,null,A.mS,A.d,!0,!0,null,null,null,A.b,"letter-spacing")
A.td={td:0}
A.ie=w(["text-decoration-line"],x.s)
A.nA=new B.c(A.td,[A.ie],x.M)
A.qm={underline:0,"line-through":1,none:2}
A.p8=new B.c(A.qm,["underline","line-through","none"],x.w)
A.h8=new C.u(A.nA,null,A.p8,A.d,!1,!1,null,null,null,A.b,"text-decoration-line")
A.te={tdc:0}
A.jM=w(["text-decoration-color"],x.s)
A.o6=new B.c(A.te,[A.jM],x.M)
A.ft=new C.u(A.o6,"colors",A.b,A.d,!0,!1,C.je(),null,null,A.b,"text-decoration-color")
A.tf={tdt:0}
A.hO=w(["text-decoration-thickness"],x.s)
A.nM=new B.c(A.tf,[A.hO],x.M)
A.pO={"1":0,"2":1,"4":2,auto:3}
A.m8=new B.c(A.pO,["1px","2px","4px","auto"],x.w)
A.fF=new C.u(A.nM,null,A.m8,A.d,!0,!1,null,null,null,A.b,"text-decoration-thickness")
A.tm={tuo:0}
A.jO=w(["text-underline-offset"],x.s)
A.lA=new B.c(A.tm,[A.jO],x.M)
A.rW={"1":0,"2":1,"4":2,"8":3,auto:4}
A.ob=new B.c(A.rW,["1px","2px","4px","8px","auto"],x.w)
A.hd=new C.u(A.lA,null,A.ob,A.d,!0,!1,null,null,null,A.b,"text-underline-offset")
A.tB={ws:0}
A.kB=w(["white-space"],x.s)
A.nO=new B.c(A.tB,[A.kB],x.M)
A.pw={normal:0,nowrap:1,pre:2,"pre-wrap":3,"pre-line":4}
A.m1=new B.c(A.pw,["normal","nowrap","pre","pre-wrap","pre-line"],x.w)
A.hB=new C.u(A.nO,null,A.m1,A.d,!1,!1,null,null,null,A.b,"white-space")
A.r7={fst:0}
A.jP=w(["font-stretch"],x.s)
A.og=new B.c(A.r7,[A.jP],x.M)
A.q0={condensed:0,"semi-condensed":1,normal:2,"semi-expanded":3,expanded:4}
A.nB=new B.c(A.q0,["75%","87.5%","100%","112.5%","125%"],x.w)
A.fQ=new C.u(A.og,null,A.nB,A.d,!0,!1,null,null,null,A.b,"font-stretch")
A.rK={ol:0}
A.kW=w(["outline"],x.s)
A.oF=new B.c(A.rK,[A.kW],x.M)
A.o9=new B.bo(["none","none","1","1px solid","2","2px solid","4","4px solid"],B.j("bo<b,b>"))
A.ho=new C.u(A.oF,null,A.o9,A.d,!0,!1,null,null,null,A.b,"outline")
A.rL={olc:0}
A.iu=w(["outline-color"],x.s)
A.m_=new B.c(A.rL,[A.iu],x.M)
A.hb=new C.u(A.m_,"colors",A.b,A.d,!0,!1,C.je(),null,null,A.b,"outline-color")
A.rM={olo:0}
A.i8=w(["outline-offset"],x.s)
A.mt=new B.c(A.rM,[A.i8],x.M)
A.qb={"0":0,"1":1,"2":2,"4":3,"8":4}
A.af=new B.c(A.qb,["0px","1px","2px","4px","8px"],x.w)
A.fg=new C.u(A.mt,null,A.af,A.d,!0,!0,null,null,null,A.b,"outline-offset")
A.b_=w([A.fC,A.fd,A.fj,A.hm,A.h2,A.fL,A.hc,A.hx,A.fY,A.h8,A.ft,A.fF,A.hd,A.hB,A.fQ,A.ho,A.hb,A.fg],x.D)
A.t0={rot:0}
A.l9=w(["rotate"],x.s)
A.m0=new B.c(A.t0,[A.l9],x.M)
A.rD={none:0}
A.of=new B.c(A.rD,["none"],x.w)
A.fX=new C.u(A.m0,null,A.of,A.d,!0,!0,C.qW(),null,null,A.b,"rotate")
A.t7={skx:0,sky:1}
A.i5=w(["--jx-skew-x"],x.s)
A.i6=w(["--jx-skew-y"],x.s)
A.m5=new B.c(A.t7,[A.i5,A.i6],x.M)
A.tk={transform:0}
A.lu=new B.c(A.tk,["skewX(var(--jx-skew-x, 0)) skewY(var(--jx-skew-y, 0))"],x.w)
A.fo=new C.u(A.m5,null,A.b,A.d,!0,!0,C.qW(),null,null,A.lu,"skew")
A.rP={origin:0}
A.iM=w(["transform-origin"],x.s)
A.oN=new B.c(A.rP,[A.iM],x.M)
A.pD={center:0,top:1,bottom:2,left:3,right:4,"top-left":5,"top-right":6,"bottom-left":7,"bottom-right":8}
A.ag=new B.c(A.pD,["center","top","bottom","left","right","top left","top right","bottom left","bottom right"],x.w)
A.h0=new C.u(A.oN,null,A.ag,A.d,!0,!1,null,null,null,A.b,"transform-origin")
A.b0=w([A.fX,A.fo,A.h0],x.D)
A.qv={ar:0}
A.kQ=w(["aspect-ratio"],x.s)
A.nD=new B.c(A.qv,[A.kQ],x.M)
A.rx={auto:0,square:1,video:2,photo:3,portrait:4}
A.oP=new B.c(A.rx,["auto","1 / 1","16 / 9","4 / 3","3 / 4"],x.w)
A.fN=new C.u(A.nD,null,A.oP,A.d,!0,!1,C.A7(),null,null,A.b,"aspect-ratio")
A.rI={obf:0}
A.iO=w(["object-fit"],x.s)
A.or=new B.c(A.rI,[A.iO],x.M)
A.bC={contain:0,cover:1,fill:2,none:3,"scale-down":4}
A.lB=new B.c(A.bC,["contain","cover","fill","none","scale-down"],x.w)
A.ff=new C.u(A.or,null,A.lB,A.d,!1,!1,null,null,null,A.b,"object-fit")
A.rJ={obp:0}
A.jG=w(["object-position"],x.s)
A.oK=new B.c(A.rJ,[A.jG],x.M)
A.fV=new C.u(A.oK,null,A.ag,A.d,!0,!1,null,null,null,A.b,"object-position")
A.qF={bgp:0}
A.iV=w(["background-position"],x.s)
A.nV=new B.c(A.qF,[A.iV],x.M)
A.hg=new C.u(A.nV,null,A.ag,A.d,!0,!1,null,null,null,A.b,"background-position")
A.qG={bgr:0}
A.kp=w(["background-repeat"],x.s)
A.p_=new B.c(A.qG,[A.kp],x.M)
A.pp={repeat:0,none:1,x:2,y:3,round:4,space:5}
A.ni=new B.c(A.pp,["repeat","no-repeat","repeat-x","repeat-y","round","space"],x.w)
A.fH=new C.u(A.p_,null,A.ni,A.d,!1,!1,null,null,null,A.b,"background-repeat")
A.rz={mix:0}
A.ic=w(["mix-blend-mode"],x.s)
A.nE=new B.c(A.rz,[A.ic],x.M)
A.pG={normal:0,multiply:1,screen:2,overlay:3,darken:4,lighten:5,difference:6,luminosity:7}
A.mp=new B.c(A.pG,["normal","multiply","screen","overlay","darken","lighten","difference","luminosity"],x.w)
A.fn=new C.u(A.nE,null,A.mp,A.d,!1,!1,null,null,null,A.b,"mix-blend-mode")
A.qK={bs:0}
A.iK=w(["border-style"],x.s)
A.oe=new B.c(A.qK,[A.iK],x.M)
A.bP={solid:0,dashed:1,dotted:2,double:3,none:4,hidden:5}
A.mN=new B.c(A.bP,["solid","dashed","dotted","double","none","hidden"],x.w)
A.hk=new C.u(A.oe,null,A.mN,A.d,!1,!1,null,null,null,A.b,"border-style")
A.b1=w([A.fN,A.ff,A.fV,A.hg,A.fH,A.fn,A.hk],x.D)
A.qN={c:0}
A.k3=w(["color"],x.s)
A.p1=new B.c(A.qN,[A.k3],x.M)
A.h1=new C.u(A.p1,"colors",A.b,A.d,!0,!1,C.je(),null,null,A.b,"color")
A.qE={bg:0}
A.jF=w(["background-color"],x.s)
A.oo=new B.c(A.qE,[A.jF],x.M)
A.hv=new C.u(A.oo,"colors",A.b,A.d,!0,!1,C.je(),C.A3(),null,A.b,"background-color")
A.qH={bgs:0}
A.kt=w(["background-size"],x.s)
A.nx=new B.c(A.qH,[A.kt],x.M)
A.by={auto:0,cover:1,contain:2}
A.ov=new B.c(A.by,["auto","cover","contain"],x.w)
A.hC=new C.u(A.nx,null,A.ov,A.d,!0,!1,null,null,null,A.b,"background-size")
A.b2=w([A.h1,A.hv,A.hC],x.D)
A.to={tx:0}
A.iI=w(["--jx-tx"],x.s)
A.mg=new B.c(A.to,[A.iI],x.M)
A.X={translate:0}
A.bp=new B.c(A.X,["var(--jx-tx, 0) var(--jx-ty, 0)"],x.w)
A.fE=new C.u(A.mg,"spacing",A.ah,A.u,!0,!0,null,null,null,A.bp,"translate-x")
A.tp={ty:0}
A.hR=w(["--jx-ty"],x.s)
A.oO=new B.c(A.tp,[A.hR],x.M)
A.fW=new C.u(A.oO,"spacing",A.ah,A.u,!0,!0,null,null,null,A.bp,"translate-y")
A.t3={sc:0}
A.lc=w(["scale"],x.s)
A.nQ=new B.c(A.t3,[A.lc],x.M)
A.rq={"0":0,"50":1,"75":2,"90":3,"95":4,"100":5,"105":6,"110":7,"125":8,"150":9}
A.oW=new B.c(A.rq,["0","0.5","0.75","0.9","0.95","1","1.05","1.1","1.25","1.5"],x.w)
A.hl=new C.u(A.nQ,null,A.oW,A.d,!0,!1,null,null,null,A.b,"scale")
A.b4=w([A.fE,A.fW,A.hl],x.D)
A.ty={w:0}
A.lo=w(["width"],x.s)
A.oi=new B.c(A.ty,[A.lo],x.M)
A.bH={full:0,min:1,max:2,fit:3,"1/2":4,"1/3":5,"2/3":6,"1/4":7,"3/4":8,screen:9}
A.bi=new B.c(A.bH,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","100vw"],x.w)
A.fG=new C.u(A.oi,"spacing",A.bi,A.d,!0,!1,null,null,null,A.b,"width")
A.ri={h:0}
A.ko=w(["height"],x.s)
A.pe=new B.c(A.ri,[A.ko],x.M)
A.bj=new B.c(A.bH,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","100vh"],x.w)
A.fw=new C.u(A.pe,"spacing",A.bj,A.d,!0,!1,null,null,null,A.b,"height")
A.rC={mw:0}
A.hX=w(["max-width"],x.s)
A.lT=new B.c(A.rC,[A.hX],x.M)
A.bF={full:0,min:1,max:2,fit:3,"1/2":4,"1/3":5,"2/3":6,"1/4":7,"3/4":8,none:9,screen:10}
A.lv=new B.c(A.bF,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","none","100vw"],x.w)
A.hD=new C.u(A.lT,"spacing",A.lv,A.u,!0,!1,null,null,null,A.b,"max-width")
A.ry={mh:0}
A.iy=w(["max-height"],x.s)
A.n_=new B.c(A.ry,[A.iy],x.M)
A.lw=new B.c(A.bF,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","none","100vh"],x.w)
A.fO=new C.u(A.n_,"spacing",A.lw,A.u,!0,!1,null,null,null,A.b,"max-height")
A.rB={mnw:0}
A.i9=w(["min-width"],x.s)
A.nP=new B.c(A.rB,[A.i9],x.M)
A.fR=new C.u(A.nP,"spacing",A.bi,A.u,!0,!1,null,null,null,A.b,"min-width")
A.rA={mnh:0}
A.kP=w(["min-height"],x.s)
A.p7=new B.c(A.rA,[A.kP],x.M)
A.h_=new C.u(A.p7,"spacing",A.bj,A.u,!0,!1,null,null,null,A.b,"min-height")
A.b7=w([A.fG,A.fw,A.hD,A.fO,A.fR,A.h_],x.D)
A.f=w([],x.s)
A.rH={o:0}
A.kT=w(["opacity"],x.s)
A.p2=new B.c(A.rH,[A.kT],x.M)
A.fT=new C.u(A.p2,"opacity",A.b,A.d,!0,!1,null,null,null,A.b,"opacity")
A.b8=w([A.fT],x.D)
A.qu={app:0}
A.iS=w(["-webkit-appearance","appearance"],x.s)
A.mQ=new B.c(A.qu,[A.iS],x.M)
A.rE={none:0,auto:1}
A.bs=new B.c(A.rE,["none","auto"],x.w)
A.fJ=new C.u(A.mQ,null,A.bs,A.d,!1,!1,null,null,null,A.b,"appearance")
A.qq={accent:0}
A.i2=w(["accent-color"],x.s)
A.oZ=new B.c(A.qq,[A.i2],x.M)
A.lx=new B.c(A.bB,["auto"],x.w)
A.fl=new C.u(A.oZ,"colors",A.lx,A.d,!0,!1,C.rV(),null,null,A.b,"accent-color")
A.qP={caret:0}
A.ja=w(["caret-color"],x.s)
A.ng=new B.c(A.qP,[A.ja],x.M)
A.qz={auto:0,transparent:1}
A.nR=new B.c(A.qz,["auto","transparent"],x.w)
A.fb=new C.u(A.ng,"colors",A.nR,A.d,!0,!1,C.rV(),null,null,A.b,"caret-color")
A.t5={scheme:0}
A.jg=w(["color-scheme"],x.s)
A.lV=new B.c(A.t5,[A.jg],x.M)
A.qQ={normal:0,light:1,dark:2,"light-dark":3}
A.mC=new B.c(A.qQ,["normal","light","dark","light dark"],x.w)
A.fZ=new C.u(A.lV,null,A.mC,A.d,!1,!1,null,null,null,A.b,"color-scheme")
A.t2={rsz:0}
A.l7=w(["resize"],x.s)
A.lR=new B.c(A.t2,[A.l7],x.M)
A.pF={none:0,x:1,y:2,both:3}
A.oV=new B.c(A.pF,["none","horizontal","vertical","both"],x.w)
A.h3=new C.u(A.lR,null,A.oV,A.d,!1,!1,null,null,null,A.b,"resize")
A.r8={fsz:0}
A.jR=w(["field-sizing"],x.s)
A.mw=new B.c(A.r8,[A.jR],x.M)
A.qT={content:0,fixed:1}
A.lG=new B.c(A.qT,["content","fixed"],x.w)
A.hz=new C.u(A.mw,null,A.lG,A.d,!1,!1,null,null,null,A.b,"field-sizing")
A.rT={pe:0}
A.iN=w(["pointer-events"],x.s)
A.my=new B.c(A.rT,[A.iN],x.M)
A.hu=new C.u(A.my,null,A.bs,A.d,!1,!1,null,null,null,A.b,"pointer-events")
A.ts={us:0}
A.im=w(["-webkit-user-select","user-select"],x.s)
A.mI=new B.c(A.ts,[A.im],x.M)
A.qA={none:0,text:1,all:2,auto:3}
A.ox=new B.c(A.qA,["none","text","all","auto"],x.w)
A.hn=new C.u(A.mI,null,A.ox,A.d,!1,!1,null,null,null,A.b,"user-select")
A.rZ={ring:0}
A.lZ=new B.c(A.rZ,[A.aT],x.M)
A.fx=new C.u(A.lZ,null,A.af,A.d,!0,!1,null,null,"0 0 0 {} var(--jx-ring-color, currentColor)",A.b,"ring")
A.t_={ringc:0}
A.jS=w(["--jx-ring-color"],x.s)
A.oc=new B.c(A.t_,[A.jS],x.M)
A.hh=new C.u(A.oc,"colors",A.b,A.d,!0,!1,C.rV(),null,null,A.b,"ring-color")
A.ba=w([A.fJ,A.fl,A.fb,A.fZ,A.h3,A.hz,A.hu,A.hn,A.fx,A.hh],x.D)
A.qp={ac:0}
A.j2=w(["align-content"],x.s)
A.oY=new B.c(A.qp,[A.j2],x.M)
A.tg={start:0,end:1,center:2,between:3,around:4,evenly:5,stretch:6,normal:7}
A.bf=new B.c(A.tg,["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch","normal"],x.w)
A.hq=new C.u(A.oY,null,A.bf,A.d,!1,!1,null,null,null,A.b,"align-content")
A.rS={pc:0}
A.lh=w(["place-content"],x.s)
A.pg=new B.c(A.rS,[A.lh],x.M)
A.hA=new C.u(A.pg,null,A.bf,A.d,!1,!1,null,null,null,A.b,"place-content")
A.ro={ji:0,pi:1}
A.jZ=w(["justify-items"],x.s)
A.iG=w(["place-items"],x.s)
A.oh=new B.c(A.ro,[A.jZ,A.iG],x.M)
A.rr={start:0,end:1,center:2,stretch:3,baseline:4}
A.ph=new B.c(A.rr,["start","end","center","stretch","baseline"],x.w)
A.hr=new C.u(A.oh,null,A.ph,A.d,!1,!1,null,null,null,A.b,"justify-items")
A.rp={js:0}
A.le=w(["justify-self"],x.s)
A.lz=new B.c(A.rp,[A.le],x.M)
A.qf={start:0,end:1,center:2,stretch:3,baseline:4,auto:5}
A.ne=new B.c(A.qf,["start","end","center","stretch","baseline","auto"],x.w)
A.fh=new C.u(A.lz,null,A.ne,A.d,!1,!1,null,null,null,A.b,"justify-self")
A.rO={order:0}
A.kV=w(["order"],x.s)
A.o3=new B.c(A.rO,[A.kV],x.M)
A.tC={first:0,last:1,none:2}
A.oR=new B.c(A.tC,["-9999","9999","0"],x.w)
A.hi=new C.u(A.o3,null,A.oR,A.d,!0,!0,C.A8(),null,null,A.b,"order")
A.qB={basis:0}
A.lt=w(["flex-basis"],x.s)
A.me=new B.c(A.qB,[A.lt],x.M)
A.pW={auto:0,full:1,"1/2":2,"1/3":3,"2/3":4,"1/4":5,"3/4":6}
A.oC=new B.c(A.pW,["auto","100%","50%","33.333333%","66.666667%","25%","75%"],x.w)
A.fu=new C.u(A.me,"spacing",A.oC,A.d,!0,!1,null,null,null,A.b,"flex-basis")
A.bc=w([A.hq,A.hA,A.hr,A.fh,A.hi,A.fu],x.D)
A.qs={ai:0}
A.jT=w(["align-items"],x.s)
A.mH=new B.c(A.qs,[A.jT],x.M)
A.rm={start:0,end:1,center:2,baseline:3,stretch:4}
A.m9=new B.c(A.rm,["flex-start","flex-end","center","baseline","stretch"],x.w)
A.fe=new C.u(A.mH,null,A.m9,A.d,!1,!1,null,null,null,A.b,"align-items")
A.rn={jc:0}
A.km=w(["justify-content"],x.s)
A.p0=new B.c(A.rn,[A.km],x.M)
A.px={start:0,end:1,center:2,between:3,around:4,evenly:5,stretch:6}
A.mA=new B.c(A.px,["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch"],x.w)
A.fv=new C.u(A.p0,null,A.mA,A.d,!1,!1,null,null,null,A.b,"justify-content")
A.r1={fd:0}
A.jH=w(["flex-direction"],x.s)
A.oS=new B.c(A.r1,[A.jH],x.M)
A.tx={row:0,"row-reverse":1,col:2,"col-reverse":3,column:4,"column-reverse":5}
A.pb=new B.c(A.tx,["row","row-reverse","column","column-reverse","column","column-reverse"],x.w)
A.fq=new C.u(A.oS,null,A.pb,A.d,!1,!1,null,null,null,A.b,"flex-direction")
A.rc={gap:0}
A.kh=w(["gap"],x.s)
A.nu=new B.c(A.rc,[A.kh],x.M)
A.fM=new C.u(A.nu,"spacing",A.b,A.u,!0,!1,null,null,null,A.b,"gap")
A.bd=w([A.fe,A.fv,A.fq,A.fM],x.D)
A.tt={wrap:0,nowrap:1,"wrap-reverse":2}
A.lH=new B.c(A.tt,["wrap","nowrap","wrap-reverse"],x.w)
A.pY={"transition-property":0}
A.lJ=new B.c(A.pY,["none"],x.w)
A.qg={"-webkit-backdrop-filter":0,"backdrop-filter":1}
A.mE=new B.c(A.qg,[y.a,y.a],x.w)
A.pR={overflow:0,display:1,"-webkit-box-orient":2,"-webkit-line-clamp":3}
A.mZ=new B.c(A.pR,["visible","block","horizontal","unset"],x.w)
A.pS={"expression(":0,"javascript:":1,"vbscript:":2,"-moz-binding":3,"behavior:":4,"@import":5,"@charset":6}
A.n0=new B.c(A.pS,["the expression() function is not allowed","the javascript: scheme is not allowed","the vbscript: scheme is not allowed","-moz-binding is not allowed","behavior is not allowed","@import is not allowed","@charset is not allowed"],x.w)
A.nK=new B.c(A.bD,[y.d],x.w)
A.q4={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6}
A.bn=new B.c(A.q4,["0","4px","8px","16px","24px","40px","64px"],x.w)
A.tj={tr:0}
A.xK=new C.ah(A.tj,1,x.O)
A.qR={clamp:0}
A.xX=new C.ah(A.qR,1,x.O)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"Am","va",()=>B.N("[a-zA-Z0-9_-]"))
w($,"Aq","vc",()=>B.N("^0([a-z%]*)$"))
w($,"B_","vA",()=>B.N(y.j))
w($,"B4","vC",()=>B.N("^\\d+(\\.\\d+)?$"))
w($,"B1","vB",()=>B.N("^(repeating-)?(linear|radial|conic)-gradient\\(|^url\\(|^image-set\\("))
w($,"Ba","t5",()=>{var v,u,t,s=x.N,r=B.y(s,x.f)
for(v=A.bg.gM().gu(0);v.j();){u=v.gl()
t=u.a
if(t!=="none")r.i(0,t,B.r(["display",u.b],s,s))}return B.a([A.fD,C.rc("display-standalone",r)],x.D)})
w($,"Bf","ta",()=>{var v,u,t=x.N,s=B.y(t,x.f)
for(v=A.bo.gM().gu(0);v.j();){u=v.gl()
s.i(0,u.a,B.r(["position",u.b],t,t))}return B.a([A.h5,C.rc("position-standalone",s)],x.D)})
w($,"B0","vz",()=>B.N(y.j))
w($,"Be","t9",()=>{var v,u,t,s,r,q="grid-template-columns",p=null,o="grid-template-rows",n=x.s,m=x.N,l=x.a,k=B.r(["cols",B.a([q],n)],m,l)
k=C.hE(q,!1,A.b,p,C.uA(12),k,p)
v=B.r(["rows",B.a([o],n)],m,l)
v=C.hE(o,!1,A.b,p,C.uA(6),v,p)
u=B.r(["span",B.a(["grid-column"],n)],m,l)
t=B.y(m,m)
for(s=1;s<=12;++s){r=""+s
t.i(0,r,"span "+r+" / span "+r)}t.i(0,"full","1 / -1")
u=C.hE("grid-column",!1,A.b,p,t,u,p)
l=B.r(["rspan",B.a(["grid-row"],n)],m,l)
m=B.y(m,m)
for(s=1;s<=6;++s){n=""+s
m.i(0,n,"span "+n+" / span "+n)}m.i(0,"full","1 / -1")
return B.a([k,v,u,C.hE("grid-row",!1,A.b,p,m,l,p),A.fm],x.D)})
w($,"Bd","t8",()=>{var v,u,t=x.N,s=B.y(t,x.f)
for(v=A.lH.gM().gu(0);v.j();){u=v.gl()
s.i(0,u.a,B.r(["flex-wrap",u.b],t,t))}return B.a([C.rc("flex-wrap-standalone",s),A.ht,A.ha,A.fr,A.he],x.D)})
w($,"Bb","t6",()=>B.a([A.hf,new C.dS(A.xK,B.r(["none",A.lJ,"all",C.ec("all"),"colors",C.ec("color, background-color, border-color, text-decoration-color, fill, stroke"),"opacity",C.ec("opacity"),"shadow",C.ec("box-shadow"),"transform",C.ec("transform, translate, scale, rotate"),"filter",C.ec("filter, backdrop-filter"),"default",C.ec("color, background-color, border-color, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter")],x.N,x.f),"transition"),A.hj,A.fs,A.fB],x.D))
w($,"B2","el",()=>B.N("^[0-9]+$"))
w($,"Bc","t7",()=>{var v="blur",u="brightness",t="contrast",s="grayscale",r="hue-rotate",q="saturate",p="drop-shadow",o=x.N
return B.a([C.bF(v,v,"--jx-blur",v,!1,!1,C.uZ(),A.bn),C.bF(u,"bri","--jx-brightness",u,!1,!1,C.dF(),A.b),C.bF(t,"con","--jx-contrast",t,!1,!1,C.dF(),A.b),C.bF(s,"gs","--jx-grayscale",s,!1,!1,C.dF(),A.b),C.bF(r,"hue","--jx-hue-rotate",r,!0,!1,C.qW(),A.b),C.bF(q,"sat","--jx-saturate",q,!1,!1,C.dF(),A.b),C.bF(p,"dsh","--jx-drop-shadow",p,!1,!1,null,B.r(["sm","0 1px 1px rgb(0 0 0 / 0.05)","md","0 3px 3px rgb(0 0 0 / 0.12)","lg","0 8px 10px rgb(0 0 0 / 0.15)","xl","0 16px 24px rgb(0 0 0 / 0.18)","none","0 0 #0000"],o,o)),A.ez,C.bF("backdrop-blur","bblur","--jx-bd-blur",v,!1,!0,C.uZ(),A.bn),C.bF("backdrop-brightness","bbri","--jx-bd-brightness",u,!1,!0,C.dF(),A.b),C.bF("backdrop-contrast","bcon","--jx-bd-contrast",t,!1,!0,C.dF(),A.b),C.bF("backdrop-grayscale","bgray","--jx-bd-grayscale",s,!1,!0,C.dF(),A.b),C.bF("backdrop-saturate","bsat","--jx-bd-saturate",q,!1,!0,C.dF(),A.b)],x.D)})
w($,"Bg","tb",()=>B.a([A.ey,A.h4,A.fS,new C.dR(A.xX,new C.qE(),"line-clamp")],x.D))})()};
(a=>{a["784TKdz2jJ1FJQadN70MpF1sn7o="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_87.part.js.map
