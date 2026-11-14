((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,G,F,H,I,L,A={
pN(d){var w,v,u,t,s,r=B.a([],x.x)
for(w=d.length,v=0,u=0,t=0;t<w;++t){s=d[t]
if(s==="["||s==="(")++v
if(s==="]"||s===")")--v
if(s===":"&&v===0){D.a.n(r,D.c.M(d,u,t))
u=t+1}}D.a.n(r,D.c.J(d,u))
return r},
az(d){var w
if(D.c.v(d,"[")||C.nn.B(0,d))return d
if(D.c.B(d,"/")||C.ni.B(0,d))return d
w=$.bK()
if(w.b.test(d))return"["+A.n_(A.mc(d)/4)+"]"
return null},
da(d){if(d==="svh"||d==="dvh"||d==="lvh")return"[100"+d+"]"
if(d==="svw"||d==="dvw")return"[100"+d+"]"
return A.az(d)},
pL(d){var w=C.ic.m(0,d)
if(w!=null)return"["+w+"]"
return A.az(d)},
n_(d){return D.c.cw(D.c.cw(D.k.eL(d,4),B.O("0+$"),""),B.O("\\.$"),"")+"rem"},
pM(d){var w
if(D.c.v(d,"["))return d
w=$.bK()
if(!w.b.test(d))return null
if(C.nk.B(0,d))return d
return"["+B.u(A.mc(d)/100)+"]"},
pK(d){var w
if(!D.c.v(d,"[")){w=$.bK()
w=!w.b.test(d)}else w=!0
if(w)return d
return"["+A.n_(A.mc(d)/4)+"]"},
b1(d,e){var w,v,u,t,s,r,q,p=D.c.cq(d,"/")
if(p>0&&!D.c.v(d,"[")){J.a8(e,'opacity modifier "'+D.c.J(d,p)+'" dropped')
w=D.c.M(d,0,p)}else w=d
if(D.c.v(w,"["))return w
if(C.nj.B(0,w))return w
if(w==="inherit")return null
v=D.c.cq(w,"-")
if(v<=0)return null
u=D.c.M(w,0,v)
t=D.c.J(w,v+1)
s=C.nl.B(0,u)?u:C.iA.m(0,u)
r=C.hD.m(0,t)
if(s==null||r==null)return null
q=s+"-"+r
if(q!==w)J.a8(e,w+" approximated as "+q)
return q},
bS:function bS(d,e,f){this.a=d
this.b=e
this.c=f},
jx:function jx(d){this.a=d},
eL:function eL(d){this.a=d
this.b=$},
i9:function i9(d){this.a=d},
ia:function ia(d){this.a=d},
ib:function ib(){},
io:function io(){},
iz:function iz(){},
iK:function iK(){},
iV:function iV(){},
j5:function j5(){},
jg:function jg(){},
jr:function jr(){},
jw:function jw(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
ig:function ig(d){this.a=d},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
iU:function iU(){},
iW:function iW(){},
iX:function iX(){},
iY:function iY(){},
iZ:function iZ(){},
j_:function j_(){},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
j4:function j4(){},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
je:function je(){},
jf:function jf(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
js:function js(){},
jt:function jt(){},
ju:function ju(){},
jv:function jv(){},
q9(){return new A.bo(null)},
bo:function bo(d){this.a=d},
fe:function fe(){this.d="flex items-center justify-between gap-4 px-6 py-3 rounded-xl bg-white shadow-md md:px-8 hover:bg-sky-50 space-y-2"
this.c=this.a=null},
k8:function k8(d){this.a=d},
k7:function k7(d,e){this.a=d
this.b=e},
mc(d){var w=H.n6(d)
if(w!=null)return w
throw B.i(B.hI("Invalid double",d))}},C,K
J=c[1]
B=c[0]
D=c[2]
E=c[16]
G=c[26]
F=c[20]
H=c[12]
I=c[24]
L=c[17]
A=a.updateHolder(c[8],A)
C=c[27]
K=c[19]
A.bS.prototype={
k(d){var w,v=this,u=v.b,t=v.a
if(u==null)u=t+" -> (not converted: "+D.a.C(v.c,"; ")+")"
else{w=v.c
w=w.length===0?"":" ("+D.a.C(w,"; ")+")"
w=t+" -> "+u+w
u=w}return u}}
A.jx.prototype={
gct(){var w,v,u,t,s,r=B.a([],x.x)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.C)(w),++u){t=w[u]
s=t.b
r.push(s==null?t.a:s)}return D.a.C(r," ")},
gbt(){var w,v,u,t,s,r=B.a([],x.E)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.C)(w),++u){t=w[u]
if(t.b!=null){s=t.c.length
s=s!==0}else s=!1
if(s)r.push(t)}return r},
gbF(){var w,v,u,t,s=B.a([],x.E)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.C)(w),++u){t=w[u]
if(t.b==null)s.push(t)}return s}}
A.eL.prototype={
dX(d){var w,v,u,t,s=B.a([],x.E)
for(w=D.c.bL(d,B.O("\\s+")),v=w.length,u=0;u<w.length;w.length===v||(0,B.C)(w),++u){t=w[u]
if(t.length!==0)s.push(this.dY(t))}return new A.jx(s)},
dY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.pN(d)
if(0>=g.length)return B.o(g,-1)
w=g.pop()
v=x.x
u=B.a([],v)
D.a.q(u,g)
if(D.c.v(w,"!")){w=D.c.J(w,1)
t=!0}else{t=D.c.aR(w,"!")
if(t)w=D.c.M(w,0,w.length-1)}s=D.c.v(w,"-")
if(s)w=D.c.J(w,1)
if(C.nc.B(0,w)&&u.length===0&&!t)return new A.bS(d,w,G.o)
r=B.a([],v)
q=this.dj(w,r)
if(q==null)return new A.bS(d,null,r.length===0?C.eA:r)
p=u.length===0?"":D.a.C(u,":")+":"
o=B.a([],v)
for(n=J.X(q);n.i();){m=n.gl()
l=s?"-":""
k=t?"!":""
o.push(p+l+m+k)}for(n=o.length,m=this.a,j=0;j<o.length;o.length===n||(0,B.C)(o),++j){i=o[j]
h=m.ci(i)
l=h.e
k=l.length===0
if(!k||h.b.length===0){o=B.a([],v)
v='no JX equivalent ("'+i
if(!k)o.push(v+'": '+D.a.gaT(l)+")")
else o.push(v+'" produces no CSS)')
return new A.bS(d,null,o)}}return new A.bS(d,D.a.C(o," "),r)},
dj(d,e){var w,v,u,t,s,r,q,p,o,n
x.B.a(e)
w=C.hI.m(0,d)
if(w!=null)return B.a([w],x.x)
v=C.hR.m(0,d)
if(v!=null){D.a.n(e,v.b)
return B.a([v.a],x.x)}for(u=C.ir.gL(),t=u.$ti,u=new B.aj(u.a(),t.h("aj<1>")),t=t.c;u.i();){s=u.b
if(s==null)s=t.a(s)
r=s.a
if(d===r||D.c.v(d,r+"-")){D.a.n(e,s.b)
return null}}for(u=this.gdn(),t=u.length,q=0;q<t;++q){s=u[q]
p=s.a
o=s.b
if(D.c.v(d,p)){n=D.c.J(d,p.length)
if(n.length===0)continue
return o.$2(n,e)}}return null},
gdn(){var w,v,u,t=this,s=t.b
if(s===$){w=B.a([],x.C)
for(v=0;v<7;++v){u=C.U[v]
w.push(new B.f("p"+u+"-",new A.i9(u)))}for(v=0;v<7;++v){u=C.U[v]
w.push(new B.f("m"+u+"-",new A.ia(u)))}w.push(new B.f("gap-x-",new A.ib()))
w.push(new B.f("gap-y-",new A.io()))
w.push(new B.f("gap-",new A.iz()))
w.push(new B.f("min-w-",new A.iK()))
w.push(new B.f("min-h-",new A.iV()))
w.push(new B.f("max-w-",new A.j5()))
w.push(new B.f("max-h-",new A.jg()))
w.push(new B.f("size-",new A.jr()))
w.push(new B.f("w-",new A.jw()))
w.push(new B.f("h-",new A.ic()))
w.push(new B.f("inset-x-",new A.id()))
w.push(new B.f("inset-y-",new A.ie()))
for(v=0;v<5;++v){u=C.dl[v]
w.push(new B.f(u+"-",new A.ig(u)))}w.push(new B.f("translate-x-",new A.ih()))
w.push(new B.f("translate-y-",new A.ii()))
w.push(new B.f("scale-",new A.ij()))
w.push(new B.f("rotate-",new A.ik()))
w.push(new B.f("skew-x-",new A.il()))
w.push(new B.f("skew-y-",new A.im()))
w.push(new B.f("origin-",new A.ip()))
w.push(new B.f("z-",new A.iq()))
w.push(new B.f("order-",new A.ir()))
w.push(new B.f("basis-",new A.is()))
w.push(new B.f("grid-cols-",new A.it()))
w.push(new B.f("grid-rows-",new A.iu()))
w.push(new B.f("col-span-",new A.iv()))
w.push(new B.f("row-span-",new A.iw()))
w.push(new B.f("items-",new A.ix()))
w.push(new B.f("justify-items-",new A.iy()))
w.push(new B.f("justify-self-",new A.iA()))
w.push(new B.f("justify-",new A.iB()))
w.push(new B.f("self-",new A.iC()))
w.push(new B.f("place-content-",new A.iD()))
w.push(new B.f("place-items-",new A.iE()))
w.push(new B.f("content-",new A.iF()))
w.push(new B.f("overflow-x-",new A.iG()))
w.push(new B.f("overflow-y-",new A.iH()))
w.push(new B.f("overflow-",new A.iI()))
w.push(new B.f("opacity-",new A.iJ()))
w.push(new B.f("cursor-",new A.iL()))
w.push(new B.f("duration-",new A.iM()))
w.push(new B.f("delay-",new A.iN()))
w.push(new B.f("ease-",new A.iO()))
w.push(new B.f("animate-",new A.iP()))
w.push(new B.f("object-",new A.iQ()))
w.push(new B.f("mix-blend-",new A.iR()))
w.push(new B.f("aspect-",new A.iS()))
w.push(new B.f("leading-",new A.iT()))
w.push(new B.f("tracking-",new A.iU()))
w.push(new B.f("font-",new A.iW()))
w.push(new B.f("text-",t.gdI()))
w.push(new B.f("bg-gradient-",new A.iX()))
w.push(new B.f("bg-linear-",new A.iY()))
w.push(new B.f("bg-",t.gd0()))
w.push(new B.f("border-",t.gd2()))
w.push(new B.f("rounded-",t.gdw()))
w.push(new B.f("shadow-",new A.iZ()))
w.push(new B.f("ring-",new A.j_()))
w.push(new B.f("outline-offset-",new A.j0()))
w.push(new B.f("outline-",new A.j1()))
w.push(new B.f("underline-offset-",new A.j2()))
w.push(new B.f("decoration-",new A.j3()))
w.push(new B.f("from-",new A.j4()))
w.push(new B.f("via-",new A.j6()))
w.push(new B.f("to-",new A.j7()))
w.push(new B.f("backdrop-blur-",new A.j8()))
w.push(new B.f("backdrop-brightness-",new A.j9()))
w.push(new B.f("backdrop-contrast-",new A.ja()))
w.push(new B.f("backdrop-grayscale-",new A.jb()))
w.push(new B.f("backdrop-saturate-",new A.jc()))
w.push(new B.f("blur-",new A.jd()))
w.push(new B.f("brightness-",new A.je()))
w.push(new B.f("contrast-",new A.jf()))
w.push(new B.f("grayscale-",new A.jh()))
w.push(new B.f("hue-rotate-",new A.ji()))
w.push(new B.f("saturate-",new A.jj()))
w.push(new B.f("drop-shadow-",new A.jk()))
w.push(new B.f("accent-",new A.jl()))
w.push(new B.f("caret-",new A.jm()))
w.push(new B.f("align-",new A.jn()))
w.push(new B.f("scroll-mt-",new A.jo()))
w.push(new B.f("resize-",new A.jp()))
w.push(new B.f("whitespace-",new A.jq()))
w.push(new B.f("line-clamp-",new A.js()))
w.push(new B.f("list-",new A.jt()))
w.push(new B.f("select-",new A.ju()))
w.push(new B.f("pointer-events-",new A.jv()))
t.b!==$&&B.mm()
t.b=w
s=w}return s},
dJ(d,e){var w,v
B.e(d)
x.B.a(e)
if(C.nm.B(0,d)){w=B.a(["ta:"+d],x.x)
return w}if(C.nf.B(0,d)){w=B.a(["fs:"+d],x.x)
return w}v=C.fs.m(0,d)
if(v!=null){w=B.a(["fs:"+("["+v+"]")],x.x)
return w}if(D.c.v(d,"[")){w=$.mq()
w=w.b.test(d)||D.c.v(d,"[clamp(")}else w=!1
if(w){w=B.a(["fs:"+d],x.x)
return w}if(d==="ellipsis"||d==="clip"){J.a8(e,"use truncate for an ellipsis")
return null}w=A.b1(d,e)
return w==null?null:B.a(["c:"+w],x.x)},
d1(d,e){var w,v
B.e(d)
x.B.a(e)
if(C.nh.B(0,d)){w=B.a(["bgs:"+d],x.x)
return w}if(C.ne.B(0,d)){w=B.a(["bgp:"+(D.c.B(d,"-")?new B.bV(B.a(d.split("-"),x.x),x.A).C(0,"-"):d)],x.x)
return w}v=C.fB.m(0,d)
if(v!=null){w=B.a(["bgr:"+v],x.x)
return w}w=A.b1(d,e)
return w==null?null:B.a(["bg:"+w],x.x)},
d3(d,e){var w,v,u,t
B.e(d)
x.B.a(e)
for(w=0;w<6;++w){v=C.ek[w]
if(D.c.v(d,v+"-")){u=D.c.J(d,2)
t=$.bK()
if(t.b.test(u)||D.c.v(u,"[")){t=B.a(["bw"+v+":"+u],x.x)
return t}}}t=$.bK()
if(!t.b.test(d)){t=$.mq()
t=t.b.test(d)}else t=!0
if(t){t=B.a(["bw:"+d],x.x)
return t}if(C.nd.B(0,d)){t=B.a(["bs:"+d],x.x)
return t}t=A.b1(d,e)
return t==null?null:B.a(["bc:"+t],x.x)},
dz(d,e){var w
B.e(d)
x.B.a(e)
w=$.or()
if(w.b.test(d)){J.a8(e,"no per-corner radius utility")
return null}if(d==="DEFAULT")return B.a(["br:[0.25rem]"],x.x)
w=B.a(["br:"+d],x.x)
return w}}
A.bo.prototype={
a7(){return new A.fe()}}
A.fe.prototype={
A(d){var w,v,u,t,s,r,q,p="tw-input",o=null,n="c:[#C5CCD8]",m=$.ov().dX(this.d),l=m.gbF().length,k=m.gbt().length,j=x.F,i=F.T(B.a([H.o0(B.a([new B.t("Tailwind classes",o)],j),"fs:sm fw:semibold c:snow",p),H.oc(B.a([new B.t(this.d,o)],j),"w:full px:4 py:3 br:lg c:snow bg:[#07090D] bw:1 bc:edge app:none caret:beam placeholder:c:[#6B7385] tr:all focus:ol:none focus:bc:brand focus:ring:4 ringc:[rgba(59,108,240,0.25)] ff:code fs:sm rsz:none mnh:[7rem]",p,o,new A.k8(this),4,I.az)],j),o,"flex fd:col gap:2 p:5 md:p:6",o),h=F.T(B.a([F.aE(B.a([new B.t("JX classes",o)],j),o,"fw:semibold c:snow"),F.aE(B.a([new B.t(""+k+" approximated, "+l+" kept",o)],j),o,"c:haze")],j),o,"flex jc:between fs:sm",o)
i=B.a([F.T(B.a([i,F.T(B.a([h,H.o6(B.a([L.mb(B.a([new B.t(m.gct().length===0?" ":m.gct(),o)],j),o)],j),"ff:code fs:sm lh:relaxed p:5 br:xl ov:auto ws:pre bg:[#07090D] bw:1 bc:edge c:[#C9D1DE] mnh:[7rem] ws:pre-wrap")],j),o,"flex fd:col gap:2 p:5 md:p:6 bwt:1 lg:bwt:0 lg:bwl:1 bc:edge",o)],j),o,"grid cols:1 lg:cols:2",o)],j)
if(m.gbt().length!==0||m.gbF().length!==0){h=x.w
h=B.F(["role","status","aria-label","Conversion notes"],h,h)
w=B.a([],j)
for(v=m.gbt(),u=v.length,t=0;t<v.length;v.length===u||(0,B.C)(v),++t){s=v[t]
r=B.a([new B.t(s.a,o)],j)
q=s.b
w.push(new K.b6(n,B.a([new F.aY("ff:code c:variant",o,r,o),new B.t(" becomes ",o),new F.aY("ff:code c:ident",o,B.a([new B.t(q==null?"":q,o)],j),o),new B.t(": "+D.a.C(s.c,"; "),o)],j),o))}for(v=m.gbF(),u=v.length,t=0;t<v.length;v.length===u||(0,B.C)(v),++t){s=v[t]
w.push(new K.b6(n,B.a([new F.aY("ff:code c:bang",o,B.a([new B.t(s.a,o)],j),o),new B.t(" is kept: "+D.a.C(s.c,"; "),o)],j),o))}i.push(K.mn(w,h,"flex fd:col gap:2 px:5 md:px:6 py:4 bwt:1 bc:edge fs:sm"))}return F.T(i,o,"br:2xl bw:1 bc:edge bg:deep ov:hidden",o)}}
var z=a.updateTypes(["h<b>?(b,h<b>)"])
A.i9.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["p"+this.a+":"+w],x.x)},
$S:0}
A.ia.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["m"+this.a+":"+w],x.x)},
$S:0}
A.ib.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["gx:"+w],x.x)},
$S:0}
A.io.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["gy:"+w],x.x)},
$S:0}
A.iz.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["gap:"+w],x.x)},
$S:0}
A.iK.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.da(d)
return w==null?null:B.a(["mnw:"+w],x.x)},
$S:0}
A.iV.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.da(d)
return w==null?null:B.a(["mnh:"+w],x.x)},
$S:0}
A.j5.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.pL(d)
return w==null?null:B.a(["mw:"+w],x.x)},
$S:0}
A.jg.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.da(d)
return w==null?null:B.a(["mh:"+w],x.x)},
$S:0}
A.jr.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.da(d)
return w==null?null:B.a(["w:"+w,"h:"+w],x.x)},
$S:0}
A.jw.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.da(d)
return w==null?null:B.a(["w:"+w],x.x)},
$S:0}
A.ic.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.da(d)
return w==null?null:B.a(["h:"+w],x.x)},
$S:0}
A.id.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["left:"+w,"right:"+w],x.x)},
$S:0}
A.ie.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["top:"+w,"bottom:"+w],x.x)},
$S:0}
A.ig.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a([this.a+":"+w],x.x)},
$S:0}
A.ih.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["tx:"+w],x.x)},
$S:0}
A.ii.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["ty:"+w],x.x)},
$S:0}
A.ij.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["sc:"+d],x.x)
return w},
$S:0}
A.ik.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["rot:"+d],x.x)
return w},
$S:0}
A.il.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["skx:"+d],x.x)
return w},
$S:0}
A.im.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["sky:"+d],x.x)
return w},
$S:0}
A.ip.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["origin:"+d],x.x)
return w},
$S:0}
A.iq.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["z:"+d],x.x)
return w},
$S:0}
A.ir.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["order:"+d],x.x)
return w},
$S:0}
A.is.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["basis:"+w],x.x)},
$S:0}
A.it.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["cols:"+d],x.x)
return w},
$S:0}
A.iu.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["rows:"+d],x.x)
return w},
$S:0}
A.iv.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["span:"+d],x.x)
return w},
$S:0}
A.iw.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["rspan:"+d],x.x)
return w},
$S:0}
A.ix.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ai:"+d],x.x)
return w},
$S:0}
A.iy.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ji:"+d],x.x)
return w},
$S:0}
A.iA.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["js:"+d],x.x)
return w},
$S:0}
A.iB.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["jc:"+d],x.x)
return w},
$S:0}
A.iC.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["as:"+d],x.x)
return w},
$S:0}
A.iD.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["pc:"+d],x.x)
return w},
$S:0}
A.iE.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["pi:"+d],x.x)
return w},
$S:0}
A.iF.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ac:"+d],x.x)
return w},
$S:0}
A.iG.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ovx:"+d],x.x)
return w},
$S:0}
A.iH.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ovy:"+d],x.x)
return w},
$S:0}
A.iI.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ov:"+d],x.x)
return w},
$S:0}
A.iJ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.pM(d)
return w==null?null:B.a(["o:"+w],x.x)},
$S:0}
A.iL.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["cur:"+d],x.x)
return w},
$S:0}
A.iM.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["dur:"+d],x.x)
return w},
$S:0}
A.iN.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["delay:"+d],x.x)
return w},
$S:0}
A.iO.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ease:"+d],x.x)
return w},
$S:0}
A.iP.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["anim:"+d],x.x)
return w},
$S:0}
A.iQ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a([(C.na.B(0,d)?"obf":"obp")+":"+d],x.x)
return w},
$S:0}
A.iR.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["mix:"+d],x.x)
return w},
$S:0}
A.iS.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ar:"+d],x.x)
return w},
$S:0}
A.iT.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["lh:"+A.pK(d)],x.x)
return w},
$S:0}
A.iU.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ls:"+(d==="widest"?"[0.1em]":d)],x.x)
return w},
$S:0}
A.iW.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a([(C.ng.B(0,d)?"ff":"fw")+":"+d],x.x)
return w},
$S:0}
A.iX.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["grad:"+d],x.x)
return w},
$S:0}
A.iY.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["grad:"+d],x.x)
return w},
$S:0}
A.iZ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["sh:"+d],x.x)
return w},
$S:0}
A.j_.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=$.bK()
if(w.b.test(d)||D.c.v(d,"["))w=B.a(["ring:"+d],x.x)
else{w=A.b1(d,e)
w=w==null?null:B.a(["ringc:"+w],x.x)}return w},
$S:0}
A.j0.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["olo:"+d],x.x)
return w},
$S:0}
A.j1.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=$.bK()
if(w.b.test(d))w=B.a(["ol:"+d],x.x)
else{w=A.b1(d,e)
w=w==null?null:B.a(["olc:"+w],x.x)}return w},
$S:0}
A.j2.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["tuo:"+d],x.x)
return w},
$S:0}
A.j3.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=$.bK()
if(w.b.test(d))w=B.a(["tdt:"+d],x.x)
else{w=A.b1(d,e)
w=w==null?null:B.a(["tdc:"+w],x.x)}return w},
$S:0}
A.j4.prototype={
$2(d,e){var w=A.b1(B.e(d),x.B.a(e))
return w==null?null:B.a(["from:"+w],x.x)},
$S:0}
A.j6.prototype={
$2(d,e){var w=A.b1(B.e(d),x.B.a(e))
return w==null?null:B.a(["via:"+w],x.x)},
$S:0}
A.j7.prototype={
$2(d,e){var w=A.b1(B.e(d),x.B.a(e))
return w==null?null:B.a(["to:"+w],x.x)},
$S:0}
A.j8.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bblur:"+d],x.x)
return w},
$S:0}
A.j9.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bbri:"+d],x.x)
return w},
$S:0}
A.ja.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bcon:"+d],x.x)
return w},
$S:0}
A.jb.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bgray:"+d],x.x)
return w},
$S:0}
A.jc.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bsat:"+d],x.x)
return w},
$S:0}
A.jd.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["blur:"+d],x.x)
return w},
$S:0}
A.je.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bri:"+d],x.x)
return w},
$S:0}
A.jf.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["con:"+d],x.x)
return w},
$S:0}
A.jh.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["gs:"+d],x.x)
return w},
$S:0}
A.ji.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["hue:"+d],x.x)
return w},
$S:0}
A.jj.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["sat:"+d],x.x)
return w},
$S:0}
A.jk.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["dsh:"+d],x.x)
return w},
$S:0}
A.jl.prototype={
$2(d,e){var w=A.b1(B.e(d),x.B.a(e))
return w==null?null:B.a(["accent:"+w],x.x)},
$S:0}
A.jm.prototype={
$2(d,e){var w=A.b1(B.e(d),x.B.a(e))
return w==null?null:B.a(["caret:"+w],x.x)},
$S:0}
A.jn.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["va:"+d],x.x)
return w},
$S:0}
A.jo.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.az(d)
return w==null?null:B.a(["smt:"+w],x.x)},
$S:0}
A.jp.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["rsz:"+d],x.x)
return w},
$S:0}
A.jq.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ws:"+d],x.x)
return w},
$S:0}
A.js.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["clamp:"+d],x.x)
return w},
$S:0}
A.jt.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["lst:"+d],x.x)
return w},
$S:0}
A.ju.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["us:"+d],x.x)
return w},
$S:0}
A.jv.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["pe:"+d],x.x)
return w},
$S:0}
A.k8.prototype={
$1(d){var w=this.a
return w.Y(new A.k7(w,B.e(d)))},
$S:5}
A.k7.prototype={
$0(){return this.a.d=this.b},
$S:1};(function installTearOffs(){var w=a._instance_2u
var v
w(v=A.eL.prototype,"gdI","dJ",0)
w(v,"gd0","d1",0)
w(v,"gd2","d3",0)
w(v,"gdw","dz",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(B.v,[A.bS,A.jx,A.eL])
w(B.b9,[A.i9,A.ia,A.ib,A.io,A.iz,A.iK,A.iV,A.j5,A.jg,A.jr,A.jw,A.ic,A.id,A.ie,A.ig,A.ih,A.ii,A.ij,A.ik,A.il,A.im,A.ip,A.iq,A.ir,A.is,A.it,A.iu,A.iv,A.iw,A.ix,A.iy,A.iA,A.iB,A.iC,A.iD,A.iE,A.iF,A.iG,A.iH,A.iI,A.iJ,A.iL,A.iM,A.iN,A.iO,A.iP,A.iQ,A.iR,A.iS,A.iT,A.iU,A.iW,A.iX,A.iY,A.iZ,A.j_,A.j0,A.j1,A.j2,A.j3,A.j4,A.j6,A.j7,A.j8,A.j9,A.ja,A.jb,A.jc,A.jd,A.je,A.jf,A.jh,A.ji,A.jj,A.jk,A.jl,A.jm,A.jn,A.jo,A.jp,A.jq,A.js,A.jt,A.ju,A.jv])
v(A.bo,F.V)
v(A.fe,F.Q)
v(A.k8,B.ag)
v(A.k7,B.aw)})()
B.ac(b.typeUniverse,JSON.parse('{"bo":{"V":[],"m":[]},"fe":{"Q":["bo"],"Q.T":"bo"}}'))
var y={d:"no divide utility; use borders on the children"}
var x={s:B.p("c<b,b>"),p:B.p("a2<b>"),F:B.p("n<m>"),E:B.p("n<bS>"),C:B.p("n<+(b,h<b>?(b,h<b>))>"),x:B.p("n<b>"),B:B.p("h<b>"),A:B.p("bV<b>"),w:B.p("b")};(function constants(){var w=a.makeConstList
C.dl=w(["inset","top","right","bottom","left"],x.x)
C.U=w(["x","y","t","r","b","l",""],x.x)
C.ek=w(["x","y","t","r","b","l"],x.x)
C.eA=w(["no JX equivalent"],x.x)
C.jX={"7xl":0,"8xl":1,"9xl":2}
C.fs=new B.c(C.jX,["4.5rem","6rem","8rem"],x.s)
C.m0={repeat:0,"no-repeat":1,"repeat-x":2,"repeat-y":3,"repeat-round":4,"repeat-space":5}
C.fB=new B.c(C.m0,["repeat","none","x","y","round","space"],x.s)
C.kk={"50":0,"100":1,"200":2,"300":3,"400":4,"500":5,"600":6,"700":7,"800":8,"900":9,"950":10}
C.hD=new B.c(C.kk,["100","100","300","300","500","500","700","700","900","900","900"],x.s)
C.jU={flex:0,grid:1,block:2,inline:3,"inline-block":4,"inline-flex":5,"inline-grid":6,contents:7,hidden:8,static:9,relative:10,absolute:11,fixed:12,sticky:13,uppercase:14,lowercase:15,capitalize:16,"normal-case":17,italic:18,"not-italic":19,truncate:20,antialiased:21,"tabular-nums":22,"sr-only":23,"not-sr-only":24,visible:25,invisible:26,isolate:27,grayscale:28,invert:29,sepia:30,"filter-none":31,"scroll-smooth":32,"flex-wrap":33,"flex-nowrap":34,"flex-wrap-reverse":35,"flex-row":36,"flex-row-reverse":37,"flex-col":38,"flex-col-reverse":39,"flex-1":40,"flex-auto":41,"flex-initial":42,"flex-none":43,grow:44,"grow-0":45,"flex-grow":46,"flex-grow-0":47,shrink:48,"shrink-0":49,"flex-shrink":50,"flex-shrink-0":51,underline:52,"line-through":53,"no-underline":54,transition:55,"transition-all":56,"transition-colors":57,"transition-opacity":58,"transition-shadow":59,"transition-transform":60,"transition-none":61,border:62,"border-t":63,"border-r":64,"border-b":65,"border-l":66,"border-x":67,"border-y":68,rounded:69,"outline-none":70,outline:71,ring:72,resize:73,"break-words":74,"break-normal":75,"text-wrap":76,"text-nowrap":77,"text-balance":78,"text-pretty":79,"list-inside":80,"list-outside":81,"aspect-auto":82,"aspect-square":83,"aspect-video":84,"pointer-events-none":85,"pointer-events-auto":86,"appearance-none":87,"appearance-auto":88}
C.hI=new B.c(C.jU,["flex","grid","block","inline","inline-block","inline-flex","inline-grid","contents","hidden","static","relative","absolute","fixed","sticky","uppercase","lowercase","capitalize","normal-case","italic","not-italic","truncate","antialiased","tabular-nums","sr-only","not-sr-only","visible","invisible","isolate","grayscale","invert","sepia","filter-none","scroll-smooth","wrap","nowrap","wrap-reverse","fd:row","fd:row-reverse","fd:col","fd:col-reverse","fl:1","fl:auto","fl:initial","fl:none","grow:1","grow:0","grow:1","grow:0","shrink:1","shrink:0","shrink:1","shrink:0","td:underline","td:line-through","td:none","tr:default","tr:all","tr:colors","tr:opacity","tr:shadow","tr:transform","tr:none","bw:1","bwt:1","bwr:1","bwb:1","bwl:1","bwx:1","bwy:1","br:[0.25rem]","ol:none","ol:1","ring:[3px]","rsz:both","wb:words","wb:normal","tw:wrap","tw:nowrap","tw:balance","tw:pretty","lsp:inside","lsp:outside","ar:auto","ar:square","ar:video","pe:none","pe:auto","app:none","app:auto"],x.s)
C.kV={shadow:0,blur:1,"backdrop-blur":2}
C.mI=new B.f("sh:sm",'Tailwind "shadow" is slightly stronger than sh:sm')
C.mK=new B.f("blur:md",'Tailwind "blur" is 8px')
C.mM=new B.f("bblur:md",'Tailwind "backdrop-blur" is 8px')
C.hR=new B.c(C.kV,[C.mI,C.mK,C.mM],B.p("c<b,+(b,b)>"))
C.lq={xs:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6,"4xl":7,"5xl":8,"6xl":9,"7xl":10,prose:11,"screen-sm":12,"screen-md":13,"screen-lg":14,"screen-xl":15,"screen-2xl":16}
C.ic=new B.c(C.lq,["20rem","24rem","28rem","32rem","36rem","42rem","48rem","56rem","64rem","72rem","80rem","65ch","640px","768px","1024px","1280px","1536px"],x.s)
C.ku={"space-x":0,"space-y":1,"divide-x":2,"divide-y":3,container:4,prose:5}
C.ir=new B.c(C.ku,["use gap: on a flex or grid parent","use gap: on a flex or grid parent",y.d,y.d,"no container utility; use mw:\u2026 mx:auto","no typography plugin"],x.s)
C.m1={slate:0,zinc:1,neutral:2,stone:3,amber:4,lime:5,emerald:6,cyan:7,sky:8,violet:9,fuchsia:10,rose:11}
C.iA=new B.c(C.m1,["gray","gray","gray","gray","yellow","green","green","teal","blue","purple","pink","pink"],x.s)
C.na=new E.a2(G.al,5,x.p)
C.k1={group:0,peer:1,dark:2}
C.nc=new E.a2(C.k1,3,x.p)
C.nd=new E.a2(G.aw,6,x.p)
C.l2={center:0,top:1,bottom:2,left:3,right:4,"left-top":5,"left-bottom":6,"right-top":7,"right-bottom":8}
C.ne=new E.a2(C.l2,9,x.p)
C.nf=new E.a2(I.ao,10,x.p)
C.ng=new E.a2(I.af,3,x.p)
C.nh=new E.a2(G.aj,3,x.p)
C.kb={full:0,screen:1,min:2,max:3,fit:4}
C.ni=new E.a2(C.kb,5,x.p)
C.k9={transparent:0,current:1,black:2,white:3}
C.nj=new E.a2(C.k9,4,x.p)
C.k5={"0":0,"5":1,"10":2,"20":3,"30":4,"40":5,"50":6,"60":7,"70":8,"80":9,"90":10,"95":11,"100":12}
C.nk=new E.a2(C.k5,13,x.p)
C.nl=new E.a2(I.ah,10,x.p)
C.nm=new E.a2(G.ai,6,x.p)
C.nn=new E.d1(["0","px","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","auto"],B.p("d1<b>"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"tS","bK",()=>B.O("^\\d+(\\.\\d+)?$"))
w($,"tR","mq",()=>B.O("^\\[[\\d.]+(px|r?em|%|vw|vh|ch|pt)\\]$"))
w($,"tQ","or",()=>B.O("^(t|r|b|l|tl|tr|bl|br|s|e|ss|se|es|ee)(-|$)"))
w($,"u0","ov",()=>{var v=H.mY()
return new A.eL(v)})})()};
(a=>{a["zBXljCTYBDqlHNz2E3iXPLE3oh8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_28.part.js.map
