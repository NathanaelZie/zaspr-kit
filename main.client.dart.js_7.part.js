((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,C={
mW(){throw B.h(B.ai("Cannot modify constant Set"))},
jL(d,e){var w,v=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(d)
if(v==null)return null
if(3>=v.length)return B.k(v,3)
w=v[3]
if(w!=null)return parseInt(d,10)
if(v[2]!=null)return parseInt(d,16)
return null},
cG:function cG(){},
bn:function bn(d,e,f){this.a=d
this.b=e
this.$ti=f},
q4(d,e,f){return new C.cw(f,e,d,null)},
cw:function cw(d,e,f,g){var _=this
_.d=d
_.f=e
_.w=f
_.a=g},
ct:function ct(d,e,f){this.e=d
this.x=e
this.a=f},
b5(d){return new C.cW(d,null)},
hn:function hn(){},
cW:function cW(d,e){this.a=d
this.b=e},
b4:function b4(d,e,f){this.a=d
this.b=e
this.c=f},
ni(d,e){var w,v
if(d.length!==e.length)return!1
for(w=0;w<d.length;++w){v=d[w]
if(!(w<e.length))return B.k(e,w)
if(!v.J(0,e[w]))return!1}return!0},
ag:function ag(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eq:function eq(){},
jG(d,e){return new C.b6(e,d)},
es(d,e,f,g,h,i,j){return new C.i(i,null,h,A.c,!0,e,g,null,j,f,d)},
lL(d){var w,v,u=d.gdr()
u.toString
w=D.d.P(u)
v=C.kO(w)
if(v!=null)throw B.h(C.b5('Arbitrary value rejected for "'+d.a+'": '+v+"."))
return w},
lM(d,e){var w,v,u,t,s,r,q,p=d.length
if(p===0)return A.u
w=B.c([],x.G)
for(v=J.Y(e);v.i();){u=v.gl()
if(u===d||u.length===0)continue
t=C.p5(d,u)
if(t>2||t>=p)continue
if(0>=u.length)return B.k(u,0)
s=u[0]
if(0>=p)return B.k(d,0)
s=s===d[0]?0:1
D.a.p(w,new B.a6(t*2+s,u))}p=B.c([],x.m)
for(r=0;r<w.length;++r)p.push(new B.a6(w[r],r))
D.a.a4(p,new C.j3())
v=B.c([],x.s)
for(u=p.length,q=0;q<p.length;p.length===u||(0,B.M)(p),++q)v.push(p[q].a.b)
return v},
p5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=e.length,k=l+1,j=x.S,i=J.kI(k,j)
for(w=0;w<k;++w)i[w]=w
for(v=d.length,u=x.t,w=0;w<v;w=s,i=t){t=B.bG(k,0,!1,j)
s=w+1
D.a.k(t,0,s)
for(r=0;r<l;r=p){q=d[w]===e[r]?0:1
p=r+1
o=t[r]
n=i.length
if(!(p<n))return B.k(i,p)
m=i[p]
if(!(r<n))return B.k(i,r)
D.a.k(t,p,D.a.e2(B.c([o+1,m+1,i[r]+q],u),new C.iO()))}}if(!(l<i.length))return B.k(i,l)
return i[l]},
b6:function b6(d,e){this.b=d
this.a=e},
i:function i(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
hz:function hz(d){this.a=d},
c6:function c6(d,e,f){this.b=d
this.c=e
this.a=f},
c5:function c5(d,e,f){this.b=d
this.e=e
this.a=f},
j3:function j3(){},
iO:function iO(){},
oK(d){var w=B.V("^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")
return w.b.test(d)?d:null},
p9(d){var w=$.cy()
return w.b.test(d)?d+"px":null},
oz(d){var w=$.cy()
return w.b.test(d)?d+"deg":null},
p7(d){var w=$.cy()
return w.b.test(d)?d+"ms":null},
oQ(d){var w=$.cy()
return w.b.test(d)?d:null},
pa(d){var w,v,u,t,s=$.cy()
if(!s.b.test(d))return null
w=C.pJ(d)
v=D.f.a9(w,100)
s=D.d.ck(D.f.j(D.f.bE(w,100)),2,"0")
u=B.V("0+$")
t=B.kf(s,u,"")
s=""+v
return t.length===0?s:s+"."+t},
op(d){var w,v,u,t=B.V("^([0-9]+)/([0-9]+)$").aS(d)
if(t==null)w=null
else{w=t.b
v=w.length
if(1>=v)return B.k(w,1)
u=w[1]
if(2>=v)return B.k(w,2)
w=B.p(u)+" / "+B.p(w[2])}return w},
aK(d,e,f,g,h,i,j,k){var w=B.K([e,B.c([f],x.s)],x.N,x.a),v=i?A.fF:A.hp
return C.es(d,h,v,j,k,w,g+"({})")},
ji:function ji(){},
pJ(d){var w=C.jL(d,null)
if(w!=null)return w
throw B.h(B.jA(d,null))},
kO(d){var w,v,u,t,s,r,q,p,o,n,m,l="commentaire CSS interdit",k="unbalanced parentheses"
if(D.d.P(d).length===0)return"valeur vide"
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
continue}$label0$1:{if(34===r||39===r){v=r
break $label0$1}if(40===r){++u
q=!1
if(t<0)if(s>=3){q=s-3
p=q+4
q=p<=w&&D.d.T(d,q,p).toLowerCase()==="url("}if(q)t=u
break $label0$1}if(41===r){if(u===t)t=-1;--u
if(u<0)return k
break $label0$1}if(59===r){if(t<0)return'character ";" not allowed'
break $label0$1}if(123===r||125===r)return"accolades interdites"
if(33===r)return'character "!" not allowed (use the class ! suffix)'}}if(v!=null)return"unclosed quotes"
if(u!==0)return k
w=B.V("\\s+")
o=B.kf(d.toLowerCase(),w,"")
if(D.d.E(o,"@"))return"@ rule not allowed"
for(w=A.fV.gM(),q=w.$ti,w=new B.ao(w.a(),q.h("ao<1>")),q=q.c;w.i();){p=w.b
if(p==null)p=q.a(p)
if(D.d.H(o,p.a))return p.b}n=D.d.aU(o,"data:")
while(n!==-1){w=n+5
m=D.d.S(o,w)
if(!D.d.E(m,"image/")&&!D.d.E(m,"font/"))return"only image or font data: URLs are allowed"
n=D.d.ce(o,"data:",w)}return null},
oL(d){var w=$.mv()
return w.b.test(d)?d:null},
oE(d){var w=C.jL(d,null)
if(w==null||w<100||w>900||D.f.bE(w,100)!==0)return null
return d},
or(d){var w=$.mw()
return w.b.test(d)?A.Q:null},
pk(d){var w=$.mx()
return w.b.test(d)?d:null},
oM(d){var w=$.mu()
return w.b.test(d)?d:null},
lI(d){var w,v,u=x.N
u=B.w(u,u)
for(w=1;w<=d;++w){v=""+w
u.k(0,v,"repeat("+v+", minmax(0, 1fr))")}u.k(0,"none","none")
return u},
oB(d){var w=C.jL(d,null)
return w==null?null:B.p(w)+"ms"},
cp(d){var w=x.N
return B.K(["transition-property",d,"transition-timing-function","cubic-bezier(0.4, 0, 0.2, 1)","transition-duration","150ms"],w,w)}},A
J=c[1]
B=c[0]
D=c[2]
E=c[15]
C=a.updateHolder(c[12],C)
A=c[18]
C.cG.prototype={
p(d,e){B.j(this).c.a(e)
C.mW()}}
C.bn.prototype={
gm(d){return this.b},
gA(d){return this.b===0},
gI(d){return this.b!==0},
gq(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new B.bO(w,w.length,v.$ti.h("bO<1>"))},
H(d,e){if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
C.cw.prototype={
D(d){var w=null
return new B.P("ul",w,this.d,w,this.f,w,this.w,w)}}
C.ct.prototype={
D(d){var w=null,v=x.N
return new B.P("li",w,this.e,w,B.w(v,v),w,this.x,w)}}
C.hn.prototype={
j(d){return B.a8(this).j(0)+": "+this.a}}
C.cW.prototype={}
C.b4.prototype={
eh(){var w=this.c?" !important":""
return this.a+": "+this.b+w+";"},
J(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.b4&&B.a8(v)===B.a8(e)&&v.a===e.a&&v.b===e.b&&v.c===e.c
else w=!0
return w},
gv(d){return B.bs(this.a,this.b,this.c,D.e,D.e,D.e)},
j(d){return this.eh()}}
C.ag.prototype={
gcd(){var w,v=this.e
if(v==null)v=""
w=this.d
if(w==null)w=""
return v+this.a+w},
J(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof C.ag&&B.a8(v)===B.a8(e)&&v.a===e.a&&v.c==e.c&&v.d==e.d&&v.e==e.e&&C.ni(v.b,e.b)
else w=!0
return w},
gv(d){var w=this
return B.bs(w.a,w.c,w.d,w.e,B.hK(w.b),D.e)},
j(d){var w,v,u,t,s,r=this.c,q=r!=null,p=q&&r.length!==0?r+" { ":""
p+=this.gcd()+" { "
for(w=this.b,v=w.length,u=0;u<v;++u){t=w[u]
s=t.c?" !important":""
p+=t.a+": "+t.b+s+"; "}p+="}"
r=q&&r.length!==0?p+" }":p
return r.charCodeAt(0)==0?r:r}}
C.eq.prototype={
aR(d){var w,v,u,t,s,r
for(w=d.length,v=0,u=".";v<w;++v){t=d[v]
s=B.V("[0-9]")
if(s.b.test(t))if(v!==0){s=v===1&&d[0]==="-"
r=s}else r=!0
else r=!1
if(r){if(0>=t.length)return B.k(t,0)
u+="\\"+D.f.ej(t.charCodeAt(0),16)+" "}else{s=$.m9()
u=s.b.test(t)?u+t:u+("\\"+t)}}return u.charCodeAt(0)==0?u:u},
$iS:1}
C.b6.prototype={
aY(d){return!d.gaT()&&!d.f&&this.b.L(d.b)},
ah(d,e){var w,v,u,t,s=d.b,r=this.b.n(0,s)
if(r==null)throw B.h(C.b5('Unknown class "'+s+'" for "'+this.a+'".'))
s=this.aR(d.a)
w=B.c([],x.K)
for(v=r.gM(),v=v.gq(v),u=d.e;v.i();){t=v.gl()
w.push(new C.b4(t.a,t.b,u))}return B.c([new C.ag(s,w,null,null,null)],x.R)}}
C.i.prototype={
aY(d){var w
if(d.gaT())w=(this.r||!d.f)&&this.b.L(d.b)
else w=!1
return w},
ah(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.b,l=o.b.n(0,m)
if(l==null)throw B.h(C.b5('Utility "'+m+'" is not handled by "'+o.a+'".'))
w=o.ea(d,e)
if(w==null||o.e.H(0,w))throw B.h(C.b5('Invalid value "'+B.p(d.c)+'" for "'+m+'".'+o.dD(d,e)))
if(d.f)w=o.d4(w,d)
m=o.x
v=m==null?n:m.$1(w)
if(v==null)v=l
m=o.y
if(m==null)u=n
else{m=B.kf(m,"{}",w)
u=m}if(u==null)u=w
m=o.aR(d.a)
t=B.c([],x.K)
for(s=J.Y(v),r=d.e;s.i();)t.push(new C.b4(s.gl(),u,r))
for(s=o.z.gM(),q=s.$ti,s=new B.ao(s.a(),q.h("ao<1>")),q=q.c;s.i();){p=s.b
if(p==null)p=q.a(p)
t.push(new C.b4(p.a,p.b,r))}return B.c([new C.ag(m,t,n,n,n)],x.R)},
ea(d,e){var w,v,u,t,s=this
if(d.gar()){if(!s.f)return null
return C.lL(d)}w=d.c
w.toString
v=s.c
if(v!=null){u=e.e9(v,w)
if(u!=null)return u}t=s.d.n(0,w)
if(t==null){t=s.w
w=t==null?null:t.$1(w)}else w=t
return w},
dD(d,e){var w,v,u,t,s,r,q,p=this,o=p.c,n=x.s,m=B.c([],n)
if(o!=null)D.a.t(m,e.c.bD(o).gB())
D.a.t(m,p.d.gB())
w=x.U
v=B.a_(new B.a1(m,x.Q.a(new C.hz(p)),w),w.h("e.E"))
u=B.c([],n)
t=d.gar()?null:d.c
s=t==null?null:B.c2(C.lM(t,v),x.N)
if(s!=null)D.a.p(u,'did you mean "'+d.b+":"+s+'"?')
if(v.length!==0){r=B.l3(v,0,B.fx(12,"count",x.S),B.R(v).c).F(0,", ")
n=v.length>12?"\u2026":""
D.a.p(u,"accepted values: "+r+n)}if(p.f)D.a.p(u,"or an arbitrary value in brackets")
if(u.length===0)return""
q=D.a.F(u,"; ")
if(0>=q.length)return B.k(q,0)
return" "+q[0].toUpperCase()+D.d.S(q,1)+"."},
d4(d,e){var w=$.ma()
if(w.b.test(d))return d
w=B.V("^[0-9.]")
if(w.b.test(d))return"-"+d
if(D.d.E(d,"-"))return D.d.S(d,1)
if(D.d.E(d,"calc(")||D.d.E(d,"var("))return"calc(-1 * "+d+")"
throw B.h(C.b5('Value "'+d+'" cannot be negative ('+e.a+")."))}}
C.c6.prototype={
aY(d){return d.gaT()&&!d.f&&!d.gar()&&this.b.H(0,d.b)},
ah(d,e){var w,v,u,t,s=d.c,r=this.c.n(0,s)
if(r==null)throw B.h(C.b5('Invalid value "'+B.p(s)+'" for "'+d.b+'".'))
s=this.aR(d.a)
w=B.c([],x.K)
for(v=r.gM(),v=v.gq(v),u=d.e;v.i();){t=v.gl()
w.push(new C.b4(t.a,t.b,u))}return B.c([new C.ag(s,w,null,null,null)],x.R)}}
C.c5.prototype={
aY(d){var w
if(d.gaT())w=!d.f&&this.b.H(0,d.b)
else w=!1
return w},
ah(d,e){var w,v,u,t,s,r=d.gar()?C.lL(d):d.c,q=this.e.$3(r,d,e)
if(q==null||q.gA(q))throw B.h(C.b5('Invalid value "'+B.p(d.c)+'" for "'+d.b+'".'))
w=this.aR(d.a)
v=B.c([],x.K)
for(u=q.gM(),u=u.gq(u),t=d.e;u.i();){s=u.gl()
v.push(new C.b4(s.a,s.b,t))}return B.c([new C.ag(w,v,null,null,null)],x.R)}}
var z=a.updateTypes(["a?(a)","r<a,a>?(a?,aQ,jH)","f<a>?(a)"])
C.hz.prototype={
$1(d){return!this.a.e.H(0,B.x(d))},
$S:7}
C.j3.prototype={
$2(d,e){var w,v=x.X
v.a(d)
v.a(e)
w=D.f.Y(d.a.a,e.a.a)
return w!==0?w:D.f.Y(d.b,e.b)},
$S:40}
C.iO.prototype={
$2(d,e){B.ap(d)
B.ap(e)
return d<e?d:e},
$S:41}
C.ji.prototype={
$3(d,e,f){var w
if(d==="none")return A.fT
if(d!=null){w=$.cy()
w=!w.b.test(d)}else w=!0
if(w)return null
w=x.N
return B.K(["overflow","hidden","display","-webkit-box","-webkit-box-orient","vertical","-webkit-line-clamp",d],w,w)},
$S:z+1};(function installTearOffs(){var w=a._static_1
w(C,"lZ","oK",0)
w(C,"m0","p9",0)
w(C,"jt","oz",0)
w(C,"m_","p7",0)
w(C,"qa","oQ",0)
w(C,"bX","pa",0)
w(C,"q9","op",0)
w(C,"fL","oL",0)
w(C,"q6","oE",0)
w(C,"q5","or",2)
w(C,"q7","pk",0)
w(C,"kg","oM",0)
w(C,"q8","oB",0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.cG,B.aT)
w(C.bn,C.cG)
v(E.y,[C.cw,C.ct])
v(B.q,[C.hn,C.b4,C.ag,C.eq])
w(C.cW,C.hn)
v(C.eq,[C.b6,C.i,C.c6,C.c5])
v(B.aq,[C.hz,C.ji])
v(B.bD,[C.j3,C.iO])})()
B.aw(b.typeUniverse,JSON.parse('{"cG":{"aT":["1"],"cf":["1"],"o":["1"],"e":["1"]},"bn":{"cG":["1"],"aT":["1"],"cf":["1"],"o":["1"],"e":["1"]},"cw":{"y":[],"n":[]},"ct":{"y":[],"n":[]},"eq":{"S":[]},"b6":{"S":[]},"i":{"S":[]},"c6":{"S":[]},"c5":{"S":[]}}'))
var y={j:"^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$",a:"var(--jx-bd-blur,) var(--jx-bd-brightness,) var(--jx-bd-contrast,) var(--jx-bd-grayscale,) var(--jx-bd-saturate,)",d:"var(--jx-blur,) var(--jx-brightness,) var(--jx-contrast,) var(--jx-grayscale,) var(--jx-hue-rotate,) var(--jx-invert,) var(--jx-saturate,) var(--jx-sepia,) var(--jx-drop-shadow,)"}
var x=(function rtii(){var w=B.t
return{w:w("b<a,a>"),M:w("b<a,f<a>>"),j:w("b<a,r<a,a>>"),O:w("bn<a>"),K:w("l<b4>"),R:w("l<ag>"),D:w("l<S>"),m:w("l<+(+(d,a),d)>"),G:w("l<+(d,a)>"),s:w("l<a>"),t:w("l<d>"),a:w("f<a>"),f:w("r<a,a>"),X:w("+(+(d,a),d)"),N:w("a"),U:w("a1<a>"),Q:w("C(a)"),S:w("d")}})();(function constants(){var w=a.makeConstList
A.j_={uppercase:0,lowercase:1,capitalize:2,"normal-case":3,italic:4,"not-italic":5,truncate:6,antialiased:7,"tabular-nums":8,"sr-only":9,"not-sr-only":10,visible:11,invisible:12,isolate:13,"scroll-smooth":14}
A.o={"text-transform":0}
A.iA=new B.b(A.o,["uppercase"],x.w)
A.iB=new B.b(A.o,["lowercase"],x.w)
A.iC=new B.b(A.o,["capitalize"],x.w)
A.iD=new B.b(A.o,["none"],x.w)
A.al={"font-style":0}
A.fJ=new B.b(A.al,["italic"],x.w)
A.fK=new B.b(A.al,["normal"],x.w)
A.jc={overflow:0,"text-overflow":1,"white-space":2}
A.iQ=new B.b(A.jc,["hidden","ellipsis","nowrap"],x.w)
A.j8={"-webkit-font-smoothing":0,"-moz-osx-font-smoothing":1}
A.ff=new B.b(A.j8,["antialiased","grayscale"],x.w)
A.js={"font-variant-numeric":0}
A.iO=new B.b(A.js,["tabular-nums"],x.w)
A.k7={position:0,width:1,height:2,padding:3,margin:4,overflow:5,clip:6,"white-space":7,"border-width":8}
A.fE=new B.b(A.k7,["absolute","1px","1px","0","-1px","hidden","rect(0, 0, 0, 0)","nowrap","0"],x.w)
A.je={position:0,width:1,height:2,padding:3,margin:4,overflow:5,clip:6,"white-space":7}
A.fz=new B.b(A.je,["static","auto","auto","0","0","visible","auto","normal"],x.w)
A.an={visibility:0}
A.fo=new B.b(A.an,["visible"],x.w)
A.fn=new B.b(A.an,["hidden"],x.w)
A.ku={isolation:0}
A.hd=new B.b(A.ku,["isolate"],x.w)
A.j9={"scroll-behavior":0}
A.hs=new B.b(A.j9,["smooth"],x.w)
A.fR=new B.b(A.j_,[A.iA,A.iB,A.iC,A.iD,A.fJ,A.fK,A.iQ,A.ff,A.iO,A.fE,A.fz,A.fo,A.fn,A.hd,A.hs],x.j)
A.b7=new C.b6(A.fR,"text-standalone")
A.jW={grayscale:0,invert:1,sepia:2,"filter-none":3}
A.jZ={"--jx-grayscale":0,filter:1}
A.hy=new B.b(A.jZ,["grayscale(1)",y.d],x.w)
A.jz={"--jx-invert":0,filter:1}
A.fv=new B.b(A.jz,["invert(1)",y.d],x.w)
A.l2={"--jx-sepia":0,filter:1}
A.fW=new B.b(A.l2,["sepia(1)",y.d],x.w)
A.af={filter:0}
A.hq=new B.b(A.af,["none"],x.w)
A.fX=new B.b(A.jW,[A.hy,A.fv,A.fW,A.hq],x.j)
A.b8=new C.b6(A.fX,"filter-standalone")
A.kp={gx:0,gy:1}
A.dy=w(["column-gap"],x.s)
A.e4=w(["row-gap"],x.s)
A.f2=new B.b(A.kp,[A.dy,A.e4],x.M)
A.b=new B.b(D.y,[],x.w)
A.ae={auto:0}
A.i=new C.bn(A.ae,1,x.O)
A.bk=new C.i(A.f2,"spacing",A.b,A.i,!0,!1,null,null,null,A.b,"gap-axis")
A.ko={grow:0,shrink:1}
A.cU=w(["flex-grow"],x.s)
A.eG=w(["flex-shrink"],x.s)
A.i_=new B.b(A.ko,[A.cU,A.eG],x.M)
A.iV={"0":0,"1":1}
A.fZ=new B.b(A.iV,["0","1"],x.w)
A.c=new C.bn(D.y,0,x.O)
A.bp=new C.i(A.i_,null,A.fZ,A.c,!0,!1,null,null,null,A.b,"flex-grow-shrink")
A.k9={ease:0}
A.cV=w(["transition-timing-function"],x.s)
A.iP=new B.b(A.k9,[A.cV],x.M)
A.iR={linear:0,in:1,out:2,"in-out":3}
A.hD=new B.b(A.iR,["linear","cubic-bezier(0.4, 0, 1, 1)","cubic-bezier(0, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],x.w)
A.bq=new C.i(A.iP,null,A.hD,A.c,!0,!1,null,null,null,A.b,"transition-timing-function")
A.k3={cur:0}
A.dS=w(["cursor"],x.s)
A.h6=new B.b(A.k3,[A.dS],x.M)
A.kY={auto:0,default:1,pointer:2,text:3,move:4,wait:5,grab:6,"not-allowed":7}
A.hb=new B.b(A.kY,["auto","default","pointer","text","move","wait","grab","not-allowed"],x.w)
A.by=new C.i(A.h6,null,A.hb,A.c,!1,!1,null,null,null,A.b,"cursor")
A.k4={d:0}
A.dU=w(["display"],x.s)
A.hn=new B.b(A.k4,[A.dU],x.M)
A.lC={flex:0,block:1,grid:2,inline:3,"inline-block":4,"inline-flex":5,"inline-grid":6,contents:7,none:8,hidden:9}
A.a3=new B.b(A.lC,["flex","block","grid","inline","inline-block","inline-flex","inline-grid","contents","none","none"],x.w)
A.bA=new C.i(A.hn,null,A.a3,A.c,!1,!1,null,null,null,A.b,"display")
A.lB={wb:0}
A.cL=w(["overflow-wrap"],x.s)
A.fI=new B.b(A.lB,[A.cL],x.M)
A.iW={normal:0,words:1,anywhere:2}
A.fq=new B.b(A.iW,["normal","break-word","anywhere"],x.w)
A.bP=new C.i(A.fI,null,A.fq,A.c,!1,!1,null,null,null,A.b,"word-break")
A.lq={tw:0}
A.di=w(["text-wrap"],x.s)
A.f0=new B.b(A.lq,[A.di],x.M)
A.jq={wrap:0,nowrap:1,balance:2,pretty:3}
A.ic=new B.b(A.jq,["wrap","nowrap","balance","pretty"],x.w)
A.c_=new C.i(A.f0,null,A.ic,A.c,!1,!1,null,null,null,A.b,"text-wrap")
A.l1={pos:0}
A.eq=w(["position"],x.s)
A.fb=new B.b(A.l1,[A.eq],x.M)
A.k8={static:0,relative:1,absolute:2,fixed:3,sticky:4}
A.a9=new B.b(A.k8,["static","relative","absolute","fixed","sticky"],x.w)
A.c0=new C.i(A.fb,null,A.a9,A.c,!1,!1,null,null,null,A.b,"position")
A.kd={fl:0}
A.dW=w(["flex"],x.s)
A.fN=new B.b(A.kd,[A.dW],x.M)
A.km={"1":0,auto:1,initial:2,none:3}
A.fy=new B.b(A.km,["1 1 0%","1 1 auto","0 1 auto","none"],x.w)
A.c4=new C.i(A.fN,null,A.fy,A.c,!0,!1,null,null,null,A.b,"flex")
A.jM={as:0}
A.cZ=w(["align-self"],x.s)
A.eS=new B.b(A.jM,[A.cZ],x.M)
A.j0={auto:0,start:1,end:2,center:3,stretch:4,baseline:5}
A.f3=new B.b(A.j0,["auto","flex-start","flex-end","center","stretch","baseline"],x.w)
A.c8=new C.i(A.eS,null,A.f3,A.c,!1,!1,null,null,null,A.b,"align-self")
A.lb={sh:0}
A.P=w(["box-shadow"],x.s)
A.fY=new B.b(A.lb,[A.P],x.M)
A.c9=new C.i(A.fY,"shadow",A.b,A.c,!0,!1,null,null,null,A.b,"box-shadow")
A.k6={dur:0}
A.dY=w(["transition-duration"],x.s)
A.i3=new B.b(A.k6,[A.dY],x.M)
A.cd=new C.i(A.i3,null,A.b,A.c,!0,!1,C.q8(),null,null,A.b,"transition-duration")
A.ke={flw:0}
A.ew=w(["flex-wrap"],x.s)
A.h5=new B.b(A.ke,[A.ew],x.M)
A.jv={wrap:0,nowrap:1,reverse:2}
A.ib=new B.b(A.jv,["wrap","nowrap","wrap-reverse"],x.w)
A.cn=new C.i(A.h5,null,A.ib,A.c,!1,!1,null,null,null,A.b,"flex-wrap")
A.lf={p:0,px:1,py:2,pt:3,pr:4,pb:5,pl:6}
A.en=w(["padding"],x.s)
A.cO=w(["padding-left","padding-right"],x.s)
A.ez=w(["padding-top","padding-bottom"],x.s)
A.dV=w(["padding-top"],x.s)
A.cY=w(["padding-right"],x.s)
A.d0=w(["padding-bottom"],x.s)
A.dT=w(["padding-left"],x.s)
A.fP=new B.b(A.lf,[A.en,A.cO,A.ez,A.dV,A.cY,A.d0,A.dT],x.M)
A.cj=new C.i(A.fP,"spacing",A.b,A.i,!0,!1,null,null,null,A.b,"padding")
A.j1={m:0,mx:1,my:2,mt:3,mr:4,mb:5,ml:6}
A.ec=w(["margin"],x.s)
A.d_=w(["margin-left","margin-right"],x.s)
A.dt=w(["margin-top","margin-bottom"],x.s)
A.dk=w(["margin-top"],x.s)
A.dX=w(["margin-right"],x.s)
A.cK=w(["margin-bottom"],x.s)
A.dF=w(["margin-left"],x.s)
A.i1=new B.b(A.j1,[A.ec,A.d_,A.dt,A.dk,A.dX,A.cK,A.dF],x.M)
A.cm=new C.i(A.i1,"spacing",A.b,A.c,!0,!0,null,null,null,A.b,"margin")
A.M=w([A.cj,A.cm],x.D)
A.kn={grad:0}
A.Q=w(["background-image"],x.s)
A.h2=new B.b(A.kn,[A.Q],x.M)
A.kG={"to-t":0,"to-tr":1,"to-r":2,"to-br":3,"to-b":4,"to-bl":5,"to-l":6,"to-tl":7}
A.it=new B.b(A.kG,["to top","to top right","to right","to bottom right","to bottom","to bottom left","to left","to top left"],x.w)
A.bg=new C.i(A.h2,null,A.it,A.c,!0,!1,C.jt(),null,"linear-gradient({}, var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))",A.b,"linear-gradient")
A.jA={"grad-radial":0,"grad-conic":1}
A.ai={"background-image":0}
A.fm=new B.b(A.ai,["radial-gradient(var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))"],x.w)
A.fl=new B.b(A.ai,["conic-gradient(var(--jx-from, transparent), var(--jx-via,) var(--jx-to, transparent))"],x.w)
A.ia=new B.b(A.jA,[A.fm,A.fl],x.j)
A.b6=new C.b6(A.ia,"gradient-standalone")
A.kf={from:0,to:1}
A.dr=w(["--jx-from"],x.s)
A.d1=w(["--jx-to"],x.s)
A.hY=new B.b(A.kf,[A.dr,A.d1],x.M)
A.lo={transparent:0,current:1}
A.a7=new B.b(A.lo,["transparent","currentColor"],x.w)
A.ba=new C.i(A.hY,"colors",A.a7,A.c,!0,!1,C.lZ(),null,null,A.b,"gradient-stops")
A.ly={via:0}
A.da=w(["--jx-via"],x.s)
A.f4=new B.b(A.ly,[A.da],x.M)
A.bH=new C.i(A.f4,"colors",A.a7,A.c,!0,!1,C.lZ(),null,"{},",A.b,"gradient-via")
A.N=w([A.bg,A.b6,A.ba,A.bH],x.D)
A.j7={bw:0,bwt:1,bwr:2,bwb:3,bwl:4,bwx:5,bwy:6}
A.ef=w(["border-width"],x.s)
A.cD=w(["border-top-width"],x.s)
A.es=w(["border-right-width"],x.s)
A.eb=w(["border-bottom-width"],x.s)
A.dH=w(["border-left-width"],x.s)
A.d2=w(["border-left-width","border-right-width"],x.s)
A.d4=w(["border-top-width","border-bottom-width"],x.s)
A.fL=new B.b(A.j7,[A.ef,A.cD,A.es,A.eb,A.dH,A.d2,A.d4],x.M)
A.bw=new C.i(A.fL,"border-width",A.b,A.c,!0,!1,null,null,null,A.b,"border-width")
A.jR={bc:0}
A.eo=w(["border-color"],x.s)
A.fp=new B.b(A.jR,[A.eo],x.M)
A.bF=new C.i(A.fp,"colors",A.b,A.c,!0,!1,C.fL(),null,null,A.b,"border-color")
A.jX={br:0}
A.e9=w(["border-radius"],x.s)
A.ig=new B.b(A.jX,[A.e9],x.M)
A.bi=new C.i(A.ig,"border-radius",A.b,A.c,!0,!1,null,null,null,A.b,"border-radius")
A.O=w([A.bw,A.bF,A.bi],x.D)
A.jJ={anim:0}
A.dO=w(["animation"],x.s)
A.hX=new B.b(A.jJ,[A.dO],x.M)
A.jb={none:0,spin:1,ping:2,pulse:3,bounce:4,"fade-in":5,"fade-out":6,"slide-up":7,"slide-down":8,"zoom-in":9}
A.im=new B.b(A.jb,["none","jx-spin 1s linear infinite","jx-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite","jx-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite","jx-bounce 1s infinite","jx-fade-in 0.3s ease-out both","jx-fade-out 0.3s ease-in both","jx-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both","jx-slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) both","jx-zoom-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both"],x.w)
A.cr=new C.i(A.hX,null,A.im,A.c,!0,!1,null,null,null,A.b,"animation")
A.jH={adur:0,adelay:1}
A.cG=w(["animation-duration"],x.s)
A.dl=w(["animation-delay"],x.s)
A.ho=new B.b(A.jH,[A.cG,A.dl],x.M)
A.bM=new C.i(A.ho,null,A.b,A.c,!0,!1,C.m_(),null,null,A.b,"animation-timing")
A.k5={delay:0}
A.dE=w(["transition-delay"],x.s)
A.hi=new B.b(A.k5,[A.dE],x.M)
A.bx=new C.i(A.hi,null,A.b,A.c,!0,!1,C.m_(),null,null,A.b,"transition-delay")
A.R=w([A.cr,A.bM,A.bx],x.D)
A.lH={z:0}
A.d7=w(["z-index"],x.s)
A.fs=new B.b(A.lH,[A.d7],x.M)
A.jj={"0":0,"10":1,"20":2,"30":3,"40":4,"50":5,auto:6}
A.eY=new B.b(A.jj,["0","10","20","30","40","50","auto"],x.w)
A.bn=new C.i(A.fs,null,A.eY,A.c,!0,!0,null,null,null,A.b,"z-index")
A.jw={top:0,right:1,bottom:2,left:3,inset:4}
A.eB=w(["top"],x.s)
A.eu=w(["right"],x.s)
A.dP=w(["bottom"],x.s)
A.ea=w(["left"],x.s)
A.e5=w(["inset"],x.s)
A.eQ=new B.b(A.jw,[A.eB,A.eu,A.dP,A.ea,A.e5],x.M)
A.lF={full:0,"1/2":1,auto:2}
A.x=new B.b(A.lF,["100%","50%","auto"],x.w)
A.c3=new C.i(A.eQ,"spacing",A.x,A.c,!0,!0,null,null,null,A.b,"inset")
A.ld={smt:0}
A.ex=w(["scroll-margin-top"],x.s)
A.iN=new B.b(A.ld,[A.ex],x.M)
A.cs=new C.i(A.iN,"spacing",A.b,A.i,!0,!1,null,null,null,A.b,"scroll-margin-top")
A.jN={ov:0,ovx:1,ovy:2}
A.em=w(["overflow"],x.s)
A.dn=w(["overflow-x"],x.s)
A.dp=w(["overflow-y"],x.s)
A.i8=new B.b(A.jN,[A.em,A.dn,A.dp],x.M)
A.jD={auto:0,hidden:1,clip:2,visible:3,scroll:4}
A.hC=new B.b(A.jD,["auto","hidden","clip","visible","scroll"],x.w)
A.c1=new C.i(A.i8,null,A.hC,A.c,!1,!1,null,null,null,A.b,"overflow")
A.S=w([A.bn,A.c3,A.cs,A.c1],x.D)
A.kg={fs:0}
A.ee=w(["font-size"],x.s)
A.hx=new B.b(A.kg,[A.ee],x.M)
A.bz=new C.i(A.hx,"font-size",A.b,A.c,!0,!1,null,null,null,A.b,"font-size")
A.kj={fw:0}
A.dx=w(["font-weight"],x.s)
A.hf=new B.b(A.kj,[A.dx],x.M)
A.bb=new C.i(A.hf,"font-weight",A.b,A.c,!0,!1,C.q6(),null,null,A.b,"font-weight")
A.kC={lh:0}
A.e7=w(["line-height"],x.s)
A.fB=new B.b(A.kC,[A.e7],x.M)
A.bh=new C.i(A.fB,"line-height",A.b,A.c,!0,!1,C.q7(),null,null,A.b,"line-height")
A.lg={ta:0}
A.eH=w(["text-align"],x.s)
A.eX=new B.b(A.lg,[A.eH],x.M)
A.jf={left:0,center:1,right:2,justify:3,start:4,end:5}
A.fj=new B.b(A.jf,["left","center","right","justify","start","end"],x.w)
A.cg=new C.i(A.eX,null,A.fj,A.c,!1,!1,null,null,null,A.b,"text-align")
A.lx={va:0}
A.cE=w(["vertical-align"],x.s)
A.hM=new B.b(A.lx,[A.cE],x.M)
A.j4={baseline:0,top:1,middle:2,bottom:3,"text-top":4,"text-bottom":5,sub:6,"super":7}
A.hI=new B.b(A.j4,["baseline","top","middle","bottom","text-top","text-bottom","sub","super"],x.w)
A.bY=new C.i(A.hM,null,A.hI,A.c,!0,!1,null,null,null,A.b,"vertical-align")
A.kF={lst:0}
A.cI=w(["list-style-type"],x.s)
A.fu=new B.b(A.kF,[A.cI],x.M)
A.jB={none:0,disc:1,circle:2,square:3,decimal:4}
A.i7=new B.b(A.jB,["none","disc","circle","square","decimal"],x.w)
A.bI=new C.i(A.fu,null,A.i7,A.c,!0,!1,null,null,null,A.b,"list-style-type")
A.kE={lsp:0}
A.er=w(["list-style-position"],x.s)
A.i2=new B.b(A.kE,[A.er],x.M)
A.kt={inside:0,outside:1}
A.fw=new B.b(A.kt,["inside","outside"],x.w)
A.c6=new C.i(A.i2,null,A.fw,A.c,!1,!1,null,null,null,A.b,"list-style-position")
A.kc={ff:0}
A.dz=w(["font-family"],x.s)
A.iH=new B.b(A.kc,[A.dz],x.M)
A.cq=new C.i(A.iH,"font-family",A.b,A.c,!0,!1,null,null,null,A.b,"font-family")
A.kD={ls:0}
A.dh=w(["letter-spacing"],x.s)
A.ik=new B.b(A.kD,[A.dh],x.M)
A.iT={tighter:0,tight:1,normal:2,wide:3,wider:4}
A.fQ=new B.b(A.iT,["-0.05em","-0.025em","0em","0.025em","0.05em"],x.w)
A.bU=new C.i(A.ik,null,A.fQ,A.c,!0,!0,null,null,null,A.b,"letter-spacing")
A.lh={td:0}
A.cT=w(["text-decoration-line"],x.s)
A.hg=new B.b(A.lh,[A.cT],x.M)
A.jC={underline:0,"line-through":1,none:2}
A.iF=new B.b(A.jC,["underline","line-through","none"],x.w)
A.c2=new C.i(A.hg,null,A.iF,A.c,!1,!1,null,null,null,A.b,"text-decoration-line")
A.li={tdc:0}
A.dG=w(["text-decoration-color"],x.s)
A.hH=new B.b(A.li,[A.dG],x.M)
A.br=new C.i(A.hH,"colors",A.b,A.c,!0,!1,C.fL(),null,null,A.b,"text-decoration-color")
A.lj={tdt:0}
A.cA=w(["text-decoration-thickness"],x.s)
A.hr=new B.b(A.lj,[A.cA],x.M)
A.jd={"1":0,"2":1,"4":2,auto:3}
A.fc=new B.b(A.jd,["1px","2px","4px","auto"],x.w)
A.bC=new C.i(A.hr,null,A.fc,A.c,!0,!1,null,null,null,A.b,"text-decoration-thickness")
A.lp={tuo:0}
A.dI=w(["text-underline-offset"],x.s)
A.eO=new B.b(A.lp,[A.dI],x.M)
A.l3={"1":0,"2":1,"4":2,"8":3,auto:4}
A.hK=new B.b(A.l3,["1px","2px","4px","8px","auto"],x.w)
A.c7=new C.i(A.eO,null,A.hK,A.c,!0,!1,null,null,null,A.b,"text-underline-offset")
A.lD={ws:0}
A.e8=w(["white-space"],x.s)
A.ht=new B.b(A.lD,[A.e8],x.M)
A.iY={normal:0,nowrap:1,pre:2,"pre-wrap":3,"pre-line":4}
A.f8=new B.b(A.iY,["normal","nowrap","pre","pre-wrap","pre-line"],x.w)
A.cv=new C.i(A.ht,null,A.f8,A.c,!1,!1,null,null,null,A.b,"white-space")
A.kh={fst:0}
A.dJ=w(["font-stretch"],x.s)
A.hP=new B.b(A.kh,[A.dJ],x.M)
A.jn={condensed:0,"semi-condensed":1,normal:2,"semi-expanded":3,expanded:4}
A.hh=new B.b(A.jn,["75%","87.5%","100%","112.5%","125%"],x.w)
A.bN=new C.i(A.hP,null,A.hh,A.c,!0,!1,null,null,null,A.b,"font-stretch")
A.kS={ol:0}
A.el=w(["outline"],x.s)
A.i9=new B.b(A.kS,[A.el],x.M)
A.hJ=new B.cM(["none","none","1","1px solid","2","2px solid","4","4px solid"],B.t("cM<a,a>"))
A.ci=new C.i(A.i9,null,A.hJ,A.c,!0,!1,null,null,null,A.b,"outline")
A.kT={olc:0}
A.d3=w(["outline-color"],x.s)
A.f6=new B.b(A.kT,[A.d3],x.M)
A.c5=new C.i(A.f6,"colors",A.b,A.c,!0,!1,C.fL(),null,null,A.b,"outline-color")
A.kU={olo:0}
A.cP=w(["outline-offset"],x.s)
A.fx=new B.b(A.kU,[A.cP],x.M)
A.ju={"0":0,"1":1,"2":2,"4":3,"8":4}
A.v=new B.b(A.ju,["0px","1px","2px","4px","8px"],x.w)
A.be=new C.i(A.fx,null,A.v,A.c,!0,!0,null,null,null,A.b,"outline-offset")
A.T=w([A.bz,A.bb,A.bh,A.cg,A.bY,A.bI,A.c6,A.cq,A.bU,A.c2,A.br,A.bC,A.c7,A.cv,A.bN,A.ci,A.c5,A.be],x.D)
A.l6={rot:0}
A.ev=w(["rotate"],x.s)
A.f7=new B.b(A.l6,[A.ev],x.M)
A.kN={none:0}
A.hO=new B.b(A.kN,["none"],x.w)
A.bT=new C.i(A.f7,null,A.hO,A.c,!0,!0,C.jt(),null,null,A.b,"rotate")
A.lc={skx:0,sky:1}
A.cM=w(["--jx-skew-x"],x.s)
A.cN=w(["--jx-skew-y"],x.s)
A.fa=new B.b(A.lc,[A.cM,A.cN],x.M)
A.lm={transform:0}
A.eJ=new B.b(A.lm,["skewX(var(--jx-skew-x, 0)) skewY(var(--jx-skew-y, 0))"],x.w)
A.bm=new C.i(A.fa,null,A.b,A.c,!0,!0,C.jt(),null,null,A.eJ,"skew")
A.kX={origin:0}
A.de=w(["transform-origin"],x.s)
A.ih=new B.b(A.kX,[A.de],x.M)
A.j3={center:0,top:1,bottom:2,left:3,right:4,"top-left":5,"top-right":6,"bottom-left":7,"bottom-right":8}
A.w=new B.b(A.j3,["center","top","bottom","left","right","top left","top right","bottom left","bottom right"],x.w)
A.bW=new C.i(A.ih,null,A.w,A.c,!0,!1,null,null,null,A.b,"transform-origin")
A.U=w([A.bT,A.bm,A.bW],x.D)
A.jL={ar:0}
A.eh=w(["aspect-ratio"],x.s)
A.hj=new B.b(A.jL,[A.eh],x.M)
A.kH={auto:0,square:1,video:2,photo:3,portrait:4}
A.ij=new B.b(A.kH,["auto","1 / 1","16 / 9","4 / 3","3 / 4"],x.w)
A.bK=new C.i(A.hj,null,A.ij,A.c,!0,!1,C.q9(),null,null,A.b,"aspect-ratio")
A.kQ={obf:0}
A.dg=w(["object-fit"],x.s)
A.hW=new B.b(A.kQ,[A.dg],x.M)
A.kb={contain:0,cover:1,fill:2,none:3,"scale-down":4}
A.eP=new B.b(A.kb,["contain","cover","fill","none","scale-down"],x.w)
A.bd=new C.i(A.hW,null,A.eP,A.c,!1,!1,null,null,null,A.b,"object-fit")
A.kR={obp:0}
A.dC=w(["object-position"],x.s)
A.id=new B.b(A.kR,[A.dC],x.M)
A.bR=new C.i(A.id,null,A.w,A.c,!0,!1,null,null,null,A.b,"object-position")
A.jT={bgp:0}
A.dm=w(["background-position"],x.s)
A.hA=new B.b(A.jT,[A.dm],x.M)
A.ca=new C.i(A.hA,null,A.w,A.c,!0,!1,null,null,null,A.b,"background-position")
A.jU={bgr:0}
A.e3=w(["background-repeat"],x.s)
A.iw=new B.b(A.jU,[A.e3],x.M)
A.iS={repeat:0,none:1,x:2,y:3,round:4,space:5}
A.h3=new B.b(A.iS,["repeat","no-repeat","repeat-x","repeat-y","round","space"],x.w)
A.bE=new C.i(A.iw,null,A.h3,A.c,!1,!1,null,null,null,A.b,"background-repeat")
A.kJ={mix:0}
A.cR=w(["mix-blend-mode"],x.s)
A.hk=new B.b(A.kJ,[A.cR],x.M)
A.j6={normal:0,multiply:1,screen:2,overlay:3,darken:4,lighten:5,difference:6,luminosity:7}
A.ft=new B.b(A.j6,["normal","multiply","screen","overlay","darken","lighten","difference","luminosity"],x.w)
A.bl=new C.i(A.hk,null,A.ft,A.c,!1,!1,null,null,null,A.b,"mix-blend-mode")
A.jY={bs:0}
A.dc=w(["border-style"],x.s)
A.hN=new B.b(A.jY,[A.dc],x.M)
A.lG={solid:0,dashed:1,dotted:2,double:3,none:4,hidden:5}
A.fM=new B.b(A.lG,["solid","dashed","dotted","double","none","hidden"],x.w)
A.ce=new C.i(A.hN,null,A.fM,A.c,!1,!1,null,null,null,A.b,"border-style")
A.V=w([A.bK,A.bd,A.bR,A.ca,A.bE,A.bl,A.ce],x.D)
A.k_={c:0}
A.dR=w(["color"],x.s)
A.iy=new B.b(A.k_,[A.dR],x.M)
A.bX=new C.i(A.iy,"colors",A.b,A.c,!0,!1,C.fL(),null,null,A.b,"color")
A.jS={bg:0}
A.dB=w(["background-color"],x.s)
A.hT=new B.b(A.jS,[A.dB],x.M)
A.cp=new C.i(A.hT,"colors",A.b,A.c,!0,!1,C.fL(),C.q5(),null,A.b,"background-color")
A.jV={bgs:0}
A.e6=w(["background-size"],x.s)
A.he=new B.b(A.jV,[A.e6],x.M)
A.jo={auto:0,cover:1,contain:2}
A.hZ=new B.b(A.jo,["auto","cover","contain"],x.w)
A.cw=new C.i(A.he,null,A.hZ,A.c,!0,!1,null,null,null,A.b,"background-size")
A.W=w([A.bX,A.cp,A.cw],x.D)
A.lr={tx:0}
A.db=w(["--jx-tx"],x.s)
A.fk=new B.b(A.lr,[A.db],x.M)
A.ln={translate:0}
A.ab=new B.b(A.ln,["var(--jx-tx, 0) var(--jx-ty, 0)"],x.w)
A.bB=new C.i(A.fk,"spacing",A.x,A.i,!0,!0,null,null,null,A.ab,"translate-x")
A.ls={ty:0}
A.cC=w(["--jx-ty"],x.s)
A.ii=new B.b(A.ls,[A.cC],x.M)
A.bS=new C.i(A.ii,"spacing",A.x,A.i,!0,!0,null,null,null,A.ab,"translate-y")
A.l9={sc:0}
A.ey=w(["scale"],x.s)
A.hv=new B.b(A.l9,[A.ey],x.M)
A.kz={"0":0,"50":1,"75":2,"90":3,"95":4,"100":5,"105":6,"110":7,"125":8,"150":9}
A.is=new B.b(A.kz,["0","0.5","0.75","0.9","0.95","1","1.05","1.1","1.25","1.5"],x.w)
A.cf=new C.i(A.hv,null,A.is,A.c,!0,!1,null,null,null,A.b,"scale")
A.X=w([A.bB,A.bS,A.cf],x.D)
A.lA={w:0}
A.eF=w(["width"],x.s)
A.hR=new B.b(A.lA,[A.eF],x.M)
A.ah={full:0,min:1,max:2,fit:3,"1/2":4,"1/3":5,"2/3":6,"1/4":7,"3/4":8,screen:9}
A.a5=new B.b(A.ah,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","100vw"],x.w)
A.bD=new C.i(A.hR,"spacing",A.a5,A.c,!0,!1,null,null,null,A.b,"width")
A.ks={h:0}
A.e2=w(["height"],x.s)
A.iI=new B.b(A.ks,[A.e2],x.M)
A.a6=new B.b(A.ah,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","100vh"],x.w)
A.bu=new C.i(A.iI,"spacing",A.a6,A.c,!0,!1,null,null,null,A.b,"height")
A.kM={mw:0}
A.cF=w(["max-width"],x.s)
A.f1=new B.b(A.kM,[A.cF],x.M)
A.ag={full:0,min:1,max:2,fit:3,"1/2":4,"1/3":5,"2/3":6,"1/4":7,"3/4":8,none:9,screen:10}
A.eK=new B.b(A.ag,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","none","100vw"],x.w)
A.cx=new C.i(A.f1,"spacing",A.eK,A.i,!0,!1,null,null,null,A.b,"max-width")
A.kI={mh:0}
A.d5=w(["max-height"],x.s)
A.fU=new B.b(A.kI,[A.d5],x.M)
A.eL=new B.b(A.ag,["100%","min-content","max-content","fit-content","50%","33.333333%","66.666667%","25%","75%","none","100vh"],x.w)
A.bL=new C.i(A.fU,"spacing",A.eL,A.i,!0,!1,null,null,null,A.b,"max-height")
A.kL={mnw:0}
A.cQ=w(["min-width"],x.s)
A.hu=new B.b(A.kL,[A.cQ],x.M)
A.bO=new C.i(A.hu,"spacing",A.a5,A.i,!0,!1,null,null,null,A.b,"min-width")
A.kK={mnh:0}
A.eg=w(["min-height"],x.s)
A.iE=new B.b(A.kK,[A.eg],x.M)
A.bV=new C.i(A.iE,"spacing",A.a6,A.i,!0,!1,null,null,null,A.b,"min-height")
A.Y=w([A.bD,A.bu,A.cx,A.bL,A.bO,A.bV],x.D)
A.u=w([],x.s)
A.kP={o:0}
A.ei=w(["opacity"],x.s)
A.iz=new B.b(A.kP,[A.ei],x.M)
A.bQ=new C.i(A.iz,"opacity",A.b,A.c,!0,!1,null,null,null,A.b,"opacity")
A.Z=w([A.bQ],x.D)
A.jF={ac:0}
A.ds=w(["align-content"],x.s)
A.iu=new B.b(A.jF,[A.ds],x.M)
A.lk={start:0,end:1,center:2,between:3,around:4,evenly:5,stretch:6,normal:7}
A.a2=new B.b(A.lk,["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch","normal"],x.w)
A.ck=new C.i(A.iu,null,A.a2,A.c,!1,!1,null,null,null,A.b,"align-content")
A.kZ={pc:0}
A.eD=w(["place-content"],x.s)
A.iK=new B.b(A.kZ,[A.eD],x.M)
A.cu=new C.i(A.iK,null,A.a2,A.c,!1,!1,null,null,null,A.b,"place-content")
A.kx={ji:0,pi:1}
A.dQ=w(["justify-items"],x.s)
A.d9=w(["place-items"],x.s)
A.hQ=new B.b(A.kx,[A.dQ,A.d9],x.M)
A.kA={start:0,end:1,center:2,stretch:3,baseline:4}
A.iL=new B.b(A.kA,["start","end","center","stretch","baseline"],x.w)
A.cl=new C.i(A.hQ,null,A.iL,A.c,!1,!1,null,null,null,A.b,"justify-items")
A.ky={js:0}
A.eA=w(["justify-self"],x.s)
A.eN=new B.b(A.ky,[A.eA],x.M)
A.jx={start:0,end:1,center:2,stretch:3,baseline:4,auto:5}
A.h0=new B.b(A.jx,["start","end","center","stretch","baseline","auto"],x.w)
A.bf=new C.i(A.eN,null,A.h0,A.c,!1,!1,null,null,null,A.b,"justify-self")
A.kW={order:0}
A.ek=w(["order"],x.s)
A.hE=new B.b(A.kW,[A.ek],x.M)
A.lE={first:0,last:1,none:2}
A.il=new B.b(A.lE,["-9999","9999","0"],x.w)
A.cc=new C.i(A.hE,null,A.il,A.c,!0,!0,C.qa(),null,null,A.b,"order")
A.jQ={basis:0}
A.eI=w(["flex-basis"],x.s)
A.fi=new B.b(A.jQ,[A.eI],x.M)
A.jk={auto:0,full:1,"1/2":2,"1/3":3,"2/3":4,"1/4":5,"3/4":6}
A.i6=new B.b(A.jk,["auto","100%","50%","33.333333%","66.666667%","25%","75%"],x.w)
A.bs=new C.i(A.fi,"spacing",A.i6,A.c,!0,!1,null,null,null,A.b,"flex-basis")
A.a_=w([A.ck,A.cu,A.cl,A.bf,A.cc,A.bs],x.D)
A.jI={ai:0}
A.dN=w(["align-items"],x.s)
A.fG=new B.b(A.jI,[A.dN],x.M)
A.kv={start:0,end:1,center:2,baseline:3,stretch:4}
A.fd=new B.b(A.kv,["flex-start","flex-end","center","baseline","stretch"],x.w)
A.bc=new C.i(A.fG,null,A.fd,A.c,!1,!1,null,null,null,A.b,"align-items")
A.kw={jc:0}
A.e1=w(["justify-content"],x.s)
A.ix=new B.b(A.kw,[A.e1],x.M)
A.iZ={start:0,end:1,center:2,between:3,around:4,evenly:5,stretch:6}
A.fD=new B.b(A.iZ,["flex-start","flex-end","center","space-between","space-around","space-evenly","stretch"],x.w)
A.bt=new C.i(A.ix,null,A.fD,A.c,!1,!1,null,null,null,A.b,"justify-content")
A.ka={fd:0}
A.dD=w(["flex-direction"],x.s)
A.io=new B.b(A.ka,[A.dD],x.M)
A.lz={row:0,"row-reverse":1,col:2,"col-reverse":3,column:4,"column-reverse":5}
A.iG=new B.b(A.lz,["row","row-reverse","column","column-reverse","column","column-reverse"],x.w)
A.bo=new C.i(A.io,null,A.iG,A.c,!1,!1,null,null,null,A.b,"flex-direction")
A.kl={gap:0}
A.dZ=w(["gap"],x.s)
A.hc=new B.b(A.kl,[A.dZ],x.M)
A.bJ=new C.i(A.hc,"spacing",A.b,A.i,!0,!1,null,null,null,A.b,"gap")
A.a0=w([A.bc,A.bt,A.bo,A.bJ],x.D)
A.jK={app:0}
A.dj=w(["-webkit-appearance","appearance"],x.s)
A.fO=new B.b(A.jK,[A.dj],x.M)
A.kO={none:0,auto:1}
A.ac=new B.b(A.kO,["none","auto"],x.w)
A.bG=new C.i(A.fO,null,A.ac,A.c,!1,!1,null,null,null,A.b,"appearance")
A.jG={accent:0}
A.cJ=w(["accent-color"],x.s)
A.iv=new B.b(A.jG,[A.cJ],x.M)
A.eM=new B.b(A.ae,["auto"],x.w)
A.bj=new C.i(A.iv,"colors",A.eM,A.c,!0,!1,C.kg(),null,null,A.b,"accent-color")
A.k0={caret:0}
A.dw=w(["caret-color"],x.s)
A.h1=new B.b(A.k0,[A.dw],x.M)
A.jO={auto:0,transparent:1}
A.hw=new B.b(A.jO,["auto","transparent"],x.w)
A.b9=new C.i(A.h1,"colors",A.hw,A.c,!0,!1,C.kg(),null,null,A.b,"caret-color")
A.l8={rsz:0}
A.et=w(["resize"],x.s)
A.f_=new B.b(A.l8,[A.et],x.M)
A.j5={none:0,x:1,y:2,both:3}
A.ir=new B.b(A.j5,["none","horizontal","vertical","both"],x.w)
A.bZ=new C.i(A.f_,null,A.ir,A.c,!1,!1,null,null,null,A.b,"resize")
A.ki={fsz:0}
A.dL=w(["field-sizing"],x.s)
A.fA=new B.b(A.ki,[A.dL],x.M)
A.k2={content:0,fixed:1}
A.eT=new B.b(A.k2,["content","fixed"],x.w)
A.ct=new C.i(A.fA,null,A.eT,A.c,!1,!1,null,null,null,A.b,"field-sizing")
A.l_={pe:0}
A.df=w(["pointer-events"],x.s)
A.fC=new B.b(A.l_,[A.df],x.M)
A.co=new C.i(A.fC,null,A.ac,A.c,!1,!1,null,null,null,A.b,"pointer-events")
A.lu={us:0}
A.cX=w(["-webkit-user-select","user-select"],x.s)
A.fH=new B.b(A.lu,[A.cX],x.M)
A.jP={none:0,text:1,all:2,auto:3}
A.i0=new B.b(A.jP,["none","text","all","auto"],x.w)
A.ch=new C.i(A.fH,null,A.i0,A.c,!1,!1,null,null,null,A.b,"user-select")
A.l4={ring:0}
A.f5=new B.b(A.l4,[A.P],x.M)
A.bv=new C.i(A.f5,null,A.v,A.c,!0,!1,null,null,"0 0 0 {} var(--jx-ring-color, currentColor)",A.b,"ring")
A.l5={ringc:0}
A.dM=w(["--jx-ring-color"],x.s)
A.hL=new B.b(A.l5,[A.dM],x.M)
A.cb=new C.i(A.hL,"colors",A.b,A.c,!0,!1,C.kg(),null,null,A.b,"ring-color")
A.a1=w([A.bG,A.bj,A.b9,A.bZ,A.ct,A.co,A.ch,A.bv,A.cb],x.D)
A.lv={wrap:0,nowrap:1,"wrap-reverse":2}
A.eU=new B.b(A.lv,["wrap","nowrap","wrap-reverse"],x.w)
A.jl={"transition-property":0}
A.eW=new B.b(A.jl,["none"],x.w)
A.jy={"-webkit-backdrop-filter":0,"backdrop-filter":1}
A.fF=new B.b(A.jy,[y.a,y.a],x.w)
A.jg={overflow:0,display:1,"-webkit-box-orient":2,"-webkit-line-clamp":3}
A.fT=new B.b(A.jg,["visible","block","horizontal","unset"],x.w)
A.jh={"expression(":0,"javascript:":1,"vbscript:":2,"-moz-binding":3,"behavior:":4,"@import":5,"@charset":6}
A.fV=new B.b(A.jh,["la fonction expression() est interdite","the javascript: scheme is not allowed","the vbscript: scheme is not allowed","-moz-binding est interdit","behavior est interdit","@import est interdit","@charset est interdit"],x.w)
A.hp=new B.b(A.af,[y.d],x.w)
A.jr={none:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6}
A.a8=new B.b(A.jr,["0","4px","8px","16px","24px","40px","64px"],x.w)
A.ll={tr:0}
A.lX=new C.bn(A.ll,1,x.O)
A.k1={clamp:0}
A.lY=new C.bn(A.k1,1,x.O)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"qm","m9",()=>B.V("[a-zA-Z0-9_-]"))
w($,"qn","ma",()=>B.V("^0([a-z%]*)$"))
w($,"qT","mv",()=>B.V(y.j))
w($,"qY","mx",()=>B.V("^\\d+(\\.\\d+)?$"))
w($,"qV","mw",()=>B.V("^(repeating-)?(linear|radial|conic)-gradient\\(|^url\\(|^image-set\\("))
w($,"r2","kq",()=>{var v,u,t,s=x.N,r=B.w(s,x.f)
for(v=A.a3.gM().gq(0);v.i();){u=v.gl()
t=u.a
if(t!=="none")r.k(0,t,B.K(["display",u.b],s,s))}return B.c([A.bA,C.jG("display-standalone",r)],x.D)})
w($,"r7","kv",()=>{var v,u,t=x.N,s=B.w(t,x.f)
for(v=A.a9.gM().gq(0);v.i();){u=v.gl()
s.k(0,u.a,B.K(["position",u.b],t,t))}return B.c([A.c0,C.jG("position-standalone",s)],x.D)})
w($,"qU","mu",()=>B.V(y.j))
w($,"r6","ku",()=>{var v,u,t,s,r,q="grid-template-columns",p=null,o="grid-template-rows",n=x.s,m=x.N,l=x.a,k=B.K(["cols",B.c([q],n)],m,l)
k=C.es(q,!1,A.b,p,C.lI(12),k,p)
v=B.K(["rows",B.c([o],n)],m,l)
v=C.es(o,!1,A.b,p,C.lI(6),v,p)
u=B.K(["span",B.c(["grid-column"],n)],m,l)
t=B.w(m,m)
for(s=1;s<=12;++s){r=""+s
t.k(0,r,"span "+r+" / span "+r)}t.k(0,"full","1 / -1")
u=C.es("grid-column",!1,A.b,p,t,u,p)
l=B.K(["rspan",B.c(["grid-row"],n)],m,l)
m=B.w(m,m)
for(s=1;s<=6;++s){n=""+s
m.k(0,n,"span "+n+" / span "+n)}m.k(0,"full","1 / -1")
return B.c([k,v,u,C.es("grid-row",!1,A.b,p,m,l,p),A.bk],x.D)})
w($,"r5","kt",()=>{var v,u,t=x.N,s=B.w(t,x.f)
for(v=A.eU.gM().gq(0);v.i();){u=v.gl()
s.k(0,u.a,B.K(["flex-wrap",u.b],t,t))}return B.c([C.jG("flex-wrap-standalone",s),A.cn,A.c4,A.bp,A.c8],x.D)})
w($,"r3","kr",()=>B.c([A.c9,new C.c6(A.lX,B.K(["none",A.eW,"all",C.cp("all"),"colors",C.cp("color, background-color, border-color, text-decoration-color, fill, stroke"),"opacity",C.cp("opacity"),"shadow",C.cp("box-shadow"),"transform",C.cp("transform, translate, scale, rotate"),"filter",C.cp("filter, backdrop-filter"),"default",C.cp("color, background-color, border-color, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter")],x.N,x.f),"transition"),A.cd,A.bq,A.by],x.D))
w($,"qW","cy",()=>B.V("^[0-9]+$"))
w($,"r4","ks",()=>{var v="blur",u="brightness",t="contrast",s="grayscale",r="hue-rotate",q="saturate",p="drop-shadow",o=x.N
return B.c([C.aK(v,v,"--jx-blur",v,!1,!1,C.m0(),A.a8),C.aK(u,"bri","--jx-brightness",u,!1,!1,C.bX(),A.b),C.aK(t,"con","--jx-contrast",t,!1,!1,C.bX(),A.b),C.aK(s,"gs","--jx-grayscale",s,!1,!1,C.bX(),A.b),C.aK(r,"hue","--jx-hue-rotate",r,!0,!1,C.jt(),A.b),C.aK(q,"sat","--jx-saturate",q,!1,!1,C.bX(),A.b),C.aK(p,"dsh","--jx-drop-shadow",p,!1,!1,null,B.K(["sm","0 1px 1px rgb(0 0 0 / 0.05)","md","0 3px 3px rgb(0 0 0 / 0.12)","lg","0 8px 10px rgb(0 0 0 / 0.15)","xl","0 16px 24px rgb(0 0 0 / 0.18)","none","0 0 #0000"],o,o)),A.b8,C.aK("backdrop-blur","bblur","--jx-bd-blur",v,!1,!0,C.m0(),A.a8),C.aK("backdrop-brightness","bbri","--jx-bd-brightness",u,!1,!0,C.bX(),A.b),C.aK("backdrop-contrast","bcon","--jx-bd-contrast",t,!1,!0,C.bX(),A.b),C.aK("backdrop-grayscale","bgray","--jx-bd-grayscale",s,!1,!0,C.bX(),A.b),C.aK("backdrop-saturate","bsat","--jx-bd-saturate",q,!1,!0,C.bX(),A.b)],x.D)})
w($,"r8","kw",()=>B.c([A.b7,A.c_,A.bP,new C.c5(A.lY,new C.ji(),"line-clamp")],x.D))})()};
(a=>{a["eaKp2XelZLV5ZH1BOP8IGLBNnqY="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_7.part.js.map
