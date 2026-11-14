((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,G,I,K,F,A={
pa(d){var w,v,u,t,s,r=B.a([],x.x)
for(w=d.length,v=0,u=0,t=0;t<w;++t){s=d[t]
if(s==="["||s==="(")++v
if(s==="]"||s===")")--v
if(s===":"&&v===0){D.a.n(r,D.c.L(d,u,t))
u=t+1}}D.a.n(r,D.c.J(d,u))
return r},
ay(d){var w
if(D.c.v(d,"[")||C.mC.A(0,d))return d
if(D.c.A(d,"/")||C.mx.A(0,d))return d
w=$.bH()
if(w.b.test(d))return"["+A.mu(A.lJ(d)/4)+"]"
return null},
d3(d){if(d==="svh"||d==="dvh"||d==="lvh")return"[100"+d+"]"
if(d==="svw"||d==="dvw")return"[100"+d+"]"
return A.ay(d)},
p8(d){var w=C.hP.m(0,d)
if(w!=null)return"["+w+"]"
return A.ay(d)},
mu(d){return D.c.cu(D.c.cu(D.k.eD(d,4),B.O("0+$"),""),B.O("\\.$"),"")+"rem"},
p9(d){var w
if(D.c.v(d,"["))return d
w=$.bH()
if(!w.b.test(d))return null
if(C.mz.A(0,d))return d
return"["+B.t(A.lJ(d)/100)+"]"},
p7(d){var w
if(!D.c.v(d,"[")){w=$.bH()
w=!w.b.test(d)}else w=!0
if(w)return d
return"["+A.mu(A.lJ(d)/4)+"]"},
aX(d,e){var w,v,u,t,s,r,q,p=D.c.co(d,"/")
if(p>0&&!D.c.v(d,"[")){J.a8(e,'opacity modifier "'+D.c.J(d,p)+'" dropped')
w=D.c.L(d,0,p)}else w=d
if(D.c.v(w,"["))return w
if(C.my.A(0,w))return w
if(w==="inherit")return null
v=D.c.co(w,"-")
if(v<=0)return null
u=D.c.L(w,0,v)
t=D.c.J(w,v+1)
s=C.mA.A(0,u)?u:C.ia.m(0,u)
r=C.hf.m(0,t)
if(s==null||r==null)return null
q=s+"-"+r
if(q!==w)J.a8(e,w+" approximated as "+q)
return q},
bO:function bO(d,e,f){this.a=d
this.b=e
this.c=f},
j3:function j3(d){this.a=d},
eA:function eA(d){this.a=d
this.b=$},
hG:function hG(d){this.a=d},
hH:function hH(d){this.a=d},
hI:function hI(){},
hT:function hT(){},
i3:function i3(){},
ie:function ie(){},
ir:function ir(){},
iC:function iC(){},
iN:function iN(){},
iY:function iY(){},
j2:function j2(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(d){this.a=d},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
iT:function iT(){},
iU:function iU(){},
iV:function iV(){},
iW:function iW(){},
iX:function iX(){},
iZ:function iZ(){},
j_:function j_(){},
j0:function j0(){},
j1:function j1(){},
py(){return new A.bi(null)},
bi:function bi(d){this.a=d},
f1:function f1(){this.d="flex items-center justify-between gap-4 px-6 py-3 rounded-xl bg-white shadow-md md:px-8 hover:bg-sky-50 space-y-2"
this.c=this.a=null},
jG:function jG(d){this.a=d},
jF:function jF(d,e){this.a=d
this.b=e},
lJ(d){var w=G.mA(d)
if(w!=null)return w
throw B.i(B.hi("Invalid double",d))}},C,E,H
J=c[1]
B=c[0]
D=c[2]
G=c[12]
I=c[20]
K=c[16]
F=c[17]
A=a.updateHolder(c[7],A)
C=c[23]
E=c[15]
H=c[22]
A.bO.prototype={
j(d){var w,v=this,u=v.b,t=v.a
if(u==null)u=t+" -> (not converted: "+D.a.B(v.c,"; ")+")"
else{w=v.c
w=w.length===0?"":" ("+D.a.B(w,"; ")+")"
w=t+" -> "+u+w
u=w}return u}}
A.j3.prototype={
gcr(){var w,v,u,t,s,r=B.a([],x.x)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.B)(w),++u){t=w[u]
s=t.b
r.push(s==null?t.a:s)}return D.a.B(r," ")},
gbs(){var w,v,u,t,s,r=B.a([],x.E)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.B)(w),++u){t=w[u]
if(t.b!=null){s=t.c.length
s=s!==0}else s=!1
if(s)r.push(t)}return r},
gbE(){var w,v,u,t,s=B.a([],x.E)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.B)(w),++u){t=w[u]
if(t.b==null)s.push(t)}return s}}
A.eA.prototype={
dQ(d){var w,v,u,t,s=B.a([],x.E)
for(w=D.c.bK(d,B.O("\\s+")),v=w.length,u=0;u<w.length;w.length===v||(0,B.B)(w),++u){t=w[u]
if(t.length!==0)s.push(this.dR(t))}return new A.j3(s)},
dR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=A.pa(d)
if(0>=g.length)return B.n(g,-1)
w=g.pop()
v=x.x
u=B.a([],v)
D.a.t(u,g)
if(D.c.v(w,"!")){w=D.c.J(w,1)
t=!0}else{t=D.c.aR(w,"!")
if(t)w=D.c.L(w,0,w.length-1)}s=D.c.v(w,"-")
if(s)w=D.c.J(w,1)
if(C.mr.A(0,w)&&u.length===0&&!t)return new A.bO(d,w,H.o)
r=B.a([],v)
q=this.de(w,r)
if(q==null)return new A.bO(d,null,r.length===0?C.ei:r)
p=u.length===0?"":D.a.B(u,":")+":"
o=B.a([],v)
for(n=J.a_(q);n.i();){m=n.gl()
l=s?"-":""
k=t?"!":""
o.push(p+l+m+k)}for(n=o.length,m=this.a,j=0;j<o.length;o.length===n||(0,B.B)(o),++j){i=o[j]
h=m.ce(i)
l=h.e
k=l.length===0
if(!k||h.b.length===0){o=B.a([],v)
v='no JX equivalent ("'+i
if(!k)o.push(v+'": '+D.a.gaT(l)+")")
else o.push(v+'" produces no CSS)')
return new A.bO(d,null,o)}}return new A.bO(d,D.a.B(o," "),r)},
de(d,e){var w,v,u,t,s,r,q,p,o,n
x.B.a(e)
w=C.hl.m(0,d)
if(w!=null)return B.a([w],x.x)
v=C.hu.m(0,d)
if(v!=null){D.a.n(e,v.b)
return B.a([v.a],x.x)}for(u=C.i1.gO(),t=u.$ti,u=new B.ag(u.a(),t.h("ag<1>")),t=t.c;u.i();){s=u.b
if(s==null)s=t.a(s)
r=s.a
if(d===r||D.c.v(d,r+"-")){D.a.n(e,s.b)
return null}}for(u=this.gdi(),t=u.length,q=0;q<t;++q){s=u[q]
p=s.a
o=s.b
if(D.c.v(d,p)){n=D.c.J(d,p.length)
if(n.length===0)continue
return o.$2(n,e)}}return null},
gdi(){var w,v,u,t=this,s=t.b
if(s===$){w=B.a([],x.C)
for(v=0;v<7;++v){u=C.T[v]
w.push(new B.f("p"+u+"-",new A.hG(u)))}for(v=0;v<7;++v){u=C.T[v]
w.push(new B.f("m"+u+"-",new A.hH(u)))}w.push(new B.f("gap-x-",new A.hI()))
w.push(new B.f("gap-y-",new A.hT()))
w.push(new B.f("gap-",new A.i3()))
w.push(new B.f("min-w-",new A.ie()))
w.push(new B.f("min-h-",new A.ir()))
w.push(new B.f("max-w-",new A.iC()))
w.push(new B.f("max-h-",new A.iN()))
w.push(new B.f("size-",new A.iY()))
w.push(new B.f("w-",new A.j2()))
w.push(new B.f("h-",new A.hJ()))
w.push(new B.f("inset-x-",new A.hK()))
w.push(new B.f("inset-y-",new A.hL()))
for(v=0;v<5;++v){u=C.d5[v]
w.push(new B.f(u+"-",new A.hM(u)))}w.push(new B.f("translate-x-",new A.hN()))
w.push(new B.f("translate-y-",new A.hO()))
w.push(new B.f("scale-",new A.hP()))
w.push(new B.f("rotate-",new A.hQ()))
w.push(new B.f("skew-x-",new A.hR()))
w.push(new B.f("skew-y-",new A.hS()))
w.push(new B.f("origin-",new A.hU()))
w.push(new B.f("z-",new A.hV()))
w.push(new B.f("order-",new A.hW()))
w.push(new B.f("basis-",new A.hX()))
w.push(new B.f("grid-cols-",new A.hY()))
w.push(new B.f("grid-rows-",new A.hZ()))
w.push(new B.f("col-span-",new A.i_()))
w.push(new B.f("row-span-",new A.i0()))
w.push(new B.f("items-",new A.i1()))
w.push(new B.f("justify-items-",new A.i2()))
w.push(new B.f("justify-self-",new A.i4()))
w.push(new B.f("justify-",new A.i5()))
w.push(new B.f("self-",new A.i6()))
w.push(new B.f("place-content-",new A.i7()))
w.push(new B.f("place-items-",new A.i8()))
w.push(new B.f("content-",new A.i9()))
w.push(new B.f("overflow-x-",new A.ia()))
w.push(new B.f("overflow-y-",new A.ib()))
w.push(new B.f("overflow-",new A.ic()))
w.push(new B.f("opacity-",new A.id()))
w.push(new B.f("cursor-",new A.ig()))
w.push(new B.f("duration-",new A.ih()))
w.push(new B.f("delay-",new A.ii()))
w.push(new B.f("ease-",new A.ij()))
w.push(new B.f("animate-",new A.ik()))
w.push(new B.f("object-",new A.il()))
w.push(new B.f("mix-blend-",new A.im()))
w.push(new B.f("aspect-",new A.io()))
w.push(new B.f("leading-",new A.ip()))
w.push(new B.f("tracking-",new A.iq()))
w.push(new B.f("font-",new A.is()))
w.push(new B.f("text-",t.gdC()))
w.push(new B.f("bg-gradient-",new A.it()))
w.push(new B.f("bg-linear-",new A.iu()))
w.push(new B.f("bg-",t.gcY()))
w.push(new B.f("border-",t.gd_()))
w.push(new B.f("rounded-",t.gdr()))
w.push(new B.f("shadow-",new A.iv()))
w.push(new B.f("ring-",new A.iw()))
w.push(new B.f("outline-offset-",new A.ix()))
w.push(new B.f("outline-",new A.iy()))
w.push(new B.f("underline-offset-",new A.iz()))
w.push(new B.f("decoration-",new A.iA()))
w.push(new B.f("from-",new A.iB()))
w.push(new B.f("via-",new A.iD()))
w.push(new B.f("to-",new A.iE()))
w.push(new B.f("backdrop-blur-",new A.iF()))
w.push(new B.f("backdrop-brightness-",new A.iG()))
w.push(new B.f("backdrop-contrast-",new A.iH()))
w.push(new B.f("backdrop-grayscale-",new A.iI()))
w.push(new B.f("backdrop-saturate-",new A.iJ()))
w.push(new B.f("blur-",new A.iK()))
w.push(new B.f("brightness-",new A.iL()))
w.push(new B.f("contrast-",new A.iM()))
w.push(new B.f("grayscale-",new A.iO()))
w.push(new B.f("hue-rotate-",new A.iP()))
w.push(new B.f("saturate-",new A.iQ()))
w.push(new B.f("drop-shadow-",new A.iR()))
w.push(new B.f("accent-",new A.iS()))
w.push(new B.f("caret-",new A.iT()))
w.push(new B.f("align-",new A.iU()))
w.push(new B.f("scroll-mt-",new A.iV()))
w.push(new B.f("resize-",new A.iW()))
w.push(new B.f("whitespace-",new A.iX()))
w.push(new B.f("line-clamp-",new A.iZ()))
w.push(new B.f("list-",new A.j_()))
w.push(new B.f("select-",new A.j0()))
w.push(new B.f("pointer-events-",new A.j1()))
t.b!==$&&B.lS()
t.b=w
s=w}return s},
dD(d,e){var w,v
B.e(d)
x.B.a(e)
if(C.mB.A(0,d)){w=B.a(["ta:"+d],x.x)
return w}if(C.mu.A(0,d)){w=B.a(["fs:"+d],x.x)
return w}v=C.f9.m(0,d)
if(v!=null){w=B.a(["fs:"+("["+v+"]")],x.x)
return w}if(D.c.v(d,"[")){w=$.lV()
w=w.b.test(d)||D.c.v(d,"[clamp(")}else w=!1
if(w){w=B.a(["fs:"+d],x.x)
return w}if(d==="ellipsis"||d==="clip"){J.a8(e,"use truncate for an ellipsis")
return null}w=A.aX(d,e)
return w==null?null:B.a(["c:"+w],x.x)},
cZ(d,e){var w,v
B.e(d)
x.B.a(e)
if(C.mw.A(0,d)){w=B.a(["bgs:"+d],x.x)
return w}if(C.mt.A(0,d)){w=B.a(["bgp:"+(D.c.A(d,"-")?new B.bR(B.a(d.split("-"),x.x),x.A).B(0,"-"):d)],x.x)
return w}v=C.fi.m(0,d)
if(v!=null){w=B.a(["bgr:"+v],x.x)
return w}w=A.aX(d,e)
return w==null?null:B.a(["bg:"+w],x.x)},
d0(d,e){var w,v,u,t
B.e(d)
x.B.a(e)
for(w=0;w<6;++w){v=C.e3[w]
if(D.c.v(d,v+"-")){u=D.c.J(d,2)
t=$.bH()
if(t.b.test(u)||D.c.v(u,"[")){t=B.a(["bw"+v+":"+u],x.x)
return t}}}t=$.bH()
if(!t.b.test(d)){t=$.lV()
t=t.b.test(d)}else t=!0
if(t){t=B.a(["bw:"+d],x.x)
return t}if(C.ms.A(0,d)){t=B.a(["bs:"+d],x.x)
return t}t=A.aX(d,e)
return t==null?null:B.a(["bc:"+t],x.x)},
ds(d,e){var w
B.e(d)
x.B.a(e)
w=$.nS()
if(w.b.test(d)){J.a8(e,"no per-corner radius utility")
return null}if(d==="DEFAULT")return B.a(["br:[0.25rem]"],x.x)
w=B.a(["br:"+d],x.x)
return w}}
A.bi.prototype={
af(){return new A.f1()}}
A.f1.prototype={
F(d){var w,v,u,t,s,r,q,p="tw-input",o=null,n="c:[#C5CCD8]",m=$.nW().dQ(this.d),l=m.gbE().length,k=m.gbs().length,j=x.F,i=F.W(B.a([G.nv(B.a([new B.w("Tailwind classes",o)],j),"fs:sm fw:semibold c:snow",p),G.nD(B.a([new B.w(this.d,o)],j),"w:full px:4 py:3 br:lg c:snow bg:[#07090D] bw:1 bc:edge app:none caret:beam placeholder:c:[#6B7385] tr:all focus:ol:none focus:bc:brand focus:ring:4 ringc:[rgba(59,108,240,0.25)] ff:code fs:sm rsz:none mnh:[7rem]",p,o,new A.jG(this),4,I.ay)],j),o,"flex fd:col gap:2 p:5 md:p:6",o),h=F.W(B.a([F.aS(B.a([new B.w("JX classes",o)],j),o,"fw:semibold c:snow"),F.aS(B.a([new B.w(""+k+" approximated, "+l+" kept",o)],j),o,"c:haze")],j),o,"flex jc:between fs:sm",o)
i=B.a([F.W(B.a([i,F.W(B.a([h,G.nz(B.a([K.lI(B.a([new B.w(m.gcr().length===0?" ":m.gcr(),o)],j),o)],j),"ff:code fs:sm lh:relaxed p:5 br:xl ov:auto ws:pre bg:[#07090D] bw:1 bc:edge c:[#C9D1DE] mnh:[7rem] ws:pre-wrap")],j),o,"flex fd:col gap:2 p:5 md:p:6 bwt:1 lg:bwt:0 lg:bwl:1 bc:edge",o)],j),o,"grid cols:1 lg:cols:2",o)],j)
if(m.gbs().length!==0||m.gbE().length!==0){h=x.w
h=B.M(["role","status","aria-label","Conversion notes"],h,h)
w=B.a([],j)
for(v=m.gbs(),u=v.length,t=0;t<v.length;v.length===u||(0,B.B)(v),++t){s=v[t]
r=B.a([new B.w(s.a,o)],j)
q=s.b
w.push(new E.bE(n,B.a([new F.br("ff:code c:variant",o,r,o),new B.w(" becomes ",o),new F.br("ff:code c:ident",o,B.a([new B.w(q==null?"":q,o)],j),o),new B.w(": "+D.a.B(s.c,"; "),o)],j),o))}for(v=m.gbE(),u=v.length,t=0;t<v.length;v.length===u||(0,B.B)(v),++t){s=v[t]
w.push(new E.bE(n,B.a([new F.br("ff:code c:bang",o,B.a([new B.w(s.a,o)],j),o),new B.w(" is kept: "+D.a.B(s.c,"; "),o)],j),o))}i.push(E.nE(w,h,"flex fd:col gap:2 px:5 md:px:6 py:4 bwt:1 bc:edge fs:sm"))}return F.W(i,o,"br:2xl bw:1 bc:edge bg:deep ov:hidden",o)}}
var z=a.updateTypes(["h<b>?(b,h<b>)"])
A.hG.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["p"+this.a+":"+w],x.x)},
$S:0}
A.hH.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["m"+this.a+":"+w],x.x)},
$S:0}
A.hI.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["gx:"+w],x.x)},
$S:0}
A.hT.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["gy:"+w],x.x)},
$S:0}
A.i3.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["gap:"+w],x.x)},
$S:0}
A.ie.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.d3(d)
return w==null?null:B.a(["mnw:"+w],x.x)},
$S:0}
A.ir.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.d3(d)
return w==null?null:B.a(["mnh:"+w],x.x)},
$S:0}
A.iC.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.p8(d)
return w==null?null:B.a(["mw:"+w],x.x)},
$S:0}
A.iN.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.d3(d)
return w==null?null:B.a(["mh:"+w],x.x)},
$S:0}
A.iY.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.d3(d)
return w==null?null:B.a(["w:"+w,"h:"+w],x.x)},
$S:0}
A.j2.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.d3(d)
return w==null?null:B.a(["w:"+w],x.x)},
$S:0}
A.hJ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.d3(d)
return w==null?null:B.a(["h:"+w],x.x)},
$S:0}
A.hK.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["left:"+w,"right:"+w],x.x)},
$S:0}
A.hL.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["top:"+w,"bottom:"+w],x.x)},
$S:0}
A.hM.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a([this.a+":"+w],x.x)},
$S:0}
A.hN.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["tx:"+w],x.x)},
$S:0}
A.hO.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["ty:"+w],x.x)},
$S:0}
A.hP.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["sc:"+d],x.x)
return w},
$S:0}
A.hQ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["rot:"+d],x.x)
return w},
$S:0}
A.hR.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["skx:"+d],x.x)
return w},
$S:0}
A.hS.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["sky:"+d],x.x)
return w},
$S:0}
A.hU.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["origin:"+d],x.x)
return w},
$S:0}
A.hV.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["z:"+d],x.x)
return w},
$S:0}
A.hW.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["order:"+d],x.x)
return w},
$S:0}
A.hX.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["basis:"+w],x.x)},
$S:0}
A.hY.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["cols:"+d],x.x)
return w},
$S:0}
A.hZ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["rows:"+d],x.x)
return w},
$S:0}
A.i_.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["span:"+d],x.x)
return w},
$S:0}
A.i0.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["rspan:"+d],x.x)
return w},
$S:0}
A.i1.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ai:"+d],x.x)
return w},
$S:0}
A.i2.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ji:"+d],x.x)
return w},
$S:0}
A.i4.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["js:"+d],x.x)
return w},
$S:0}
A.i5.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["jc:"+d],x.x)
return w},
$S:0}
A.i6.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["as:"+d],x.x)
return w},
$S:0}
A.i7.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["pc:"+d],x.x)
return w},
$S:0}
A.i8.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["pi:"+d],x.x)
return w},
$S:0}
A.i9.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ac:"+d],x.x)
return w},
$S:0}
A.ia.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ovx:"+d],x.x)
return w},
$S:0}
A.ib.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ovy:"+d],x.x)
return w},
$S:0}
A.ic.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ov:"+d],x.x)
return w},
$S:0}
A.id.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.p9(d)
return w==null?null:B.a(["o:"+w],x.x)},
$S:0}
A.ig.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["cur:"+d],x.x)
return w},
$S:0}
A.ih.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["dur:"+d],x.x)
return w},
$S:0}
A.ii.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["delay:"+d],x.x)
return w},
$S:0}
A.ij.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ease:"+d],x.x)
return w},
$S:0}
A.ik.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["anim:"+d],x.x)
return w},
$S:0}
A.il.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a([(C.mp.A(0,d)?"obf":"obp")+":"+d],x.x)
return w},
$S:0}
A.im.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["mix:"+d],x.x)
return w},
$S:0}
A.io.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ar:"+d],x.x)
return w},
$S:0}
A.ip.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["lh:"+A.p7(d)],x.x)
return w},
$S:0}
A.iq.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ls:"+(d==="widest"?"[0.1em]":d)],x.x)
return w},
$S:0}
A.is.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a([(C.mv.A(0,d)?"ff":"fw")+":"+d],x.x)
return w},
$S:0}
A.it.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["grad:"+d],x.x)
return w},
$S:0}
A.iu.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["grad:"+d],x.x)
return w},
$S:0}
A.iv.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["sh:"+d],x.x)
return w},
$S:0}
A.iw.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=$.bH()
if(w.b.test(d)||D.c.v(d,"["))w=B.a(["ring:"+d],x.x)
else{w=A.aX(d,e)
w=w==null?null:B.a(["ringc:"+w],x.x)}return w},
$S:0}
A.ix.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["olo:"+d],x.x)
return w},
$S:0}
A.iy.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=$.bH()
if(w.b.test(d))w=B.a(["ol:"+d],x.x)
else{w=A.aX(d,e)
w=w==null?null:B.a(["olc:"+w],x.x)}return w},
$S:0}
A.iz.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["tuo:"+d],x.x)
return w},
$S:0}
A.iA.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=$.bH()
if(w.b.test(d))w=B.a(["tdt:"+d],x.x)
else{w=A.aX(d,e)
w=w==null?null:B.a(["tdc:"+w],x.x)}return w},
$S:0}
A.iB.prototype={
$2(d,e){var w=A.aX(B.e(d),x.B.a(e))
return w==null?null:B.a(["from:"+w],x.x)},
$S:0}
A.iD.prototype={
$2(d,e){var w=A.aX(B.e(d),x.B.a(e))
return w==null?null:B.a(["via:"+w],x.x)},
$S:0}
A.iE.prototype={
$2(d,e){var w=A.aX(B.e(d),x.B.a(e))
return w==null?null:B.a(["to:"+w],x.x)},
$S:0}
A.iF.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bblur:"+d],x.x)
return w},
$S:0}
A.iG.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bbri:"+d],x.x)
return w},
$S:0}
A.iH.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bcon:"+d],x.x)
return w},
$S:0}
A.iI.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bgray:"+d],x.x)
return w},
$S:0}
A.iJ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bsat:"+d],x.x)
return w},
$S:0}
A.iK.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["blur:"+d],x.x)
return w},
$S:0}
A.iL.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["bri:"+d],x.x)
return w},
$S:0}
A.iM.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["con:"+d],x.x)
return w},
$S:0}
A.iO.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["gs:"+d],x.x)
return w},
$S:0}
A.iP.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["hue:"+d],x.x)
return w},
$S:0}
A.iQ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["sat:"+d],x.x)
return w},
$S:0}
A.iR.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["dsh:"+d],x.x)
return w},
$S:0}
A.iS.prototype={
$2(d,e){var w=A.aX(B.e(d),x.B.a(e))
return w==null?null:B.a(["accent:"+w],x.x)},
$S:0}
A.iT.prototype={
$2(d,e){var w=A.aX(B.e(d),x.B.a(e))
return w==null?null:B.a(["caret:"+w],x.x)},
$S:0}
A.iU.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["va:"+d],x.x)
return w},
$S:0}
A.iV.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=A.ay(d)
return w==null?null:B.a(["smt:"+w],x.x)},
$S:0}
A.iW.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["rsz:"+d],x.x)
return w},
$S:0}
A.iX.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["ws:"+d],x.x)
return w},
$S:0}
A.iZ.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["clamp:"+d],x.x)
return w},
$S:0}
A.j_.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["lst:"+d],x.x)
return w},
$S:0}
A.j0.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["us:"+d],x.x)
return w},
$S:0}
A.j1.prototype={
$2(d,e){var w
B.e(d)
x.B.a(e)
w=B.a(["pe:"+d],x.x)
return w},
$S:0}
A.jG.prototype={
$1(d){var w=this.a
return w.a1(new A.jF(w,B.e(d)))},
$S:5}
A.jF.prototype={
$0(){return this.a.d=this.b},
$S:1};(function installTearOffs(){var w=a._instance_2u
var v
w(v=A.eA.prototype,"gdC","dD",0)
w(v,"gcY","cZ",0)
w(v,"gd_","d0",0)
w(v,"gdr","ds",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(B.u,[A.bO,A.j3,A.eA])
w(B.bt,[A.hG,A.hH,A.hI,A.hT,A.i3,A.ie,A.ir,A.iC,A.iN,A.iY,A.j2,A.hJ,A.hK,A.hL,A.hM,A.hN,A.hO,A.hP,A.hQ,A.hR,A.hS,A.hU,A.hV,A.hW,A.hX,A.hY,A.hZ,A.i_,A.i0,A.i1,A.i2,A.i4,A.i5,A.i6,A.i7,A.i8,A.i9,A.ia,A.ib,A.ic,A.id,A.ig,A.ih,A.ii,A.ij,A.ik,A.il,A.im,A.io,A.ip,A.iq,A.is,A.it,A.iu,A.iv,A.iw,A.ix,A.iy,A.iz,A.iA,A.iB,A.iD,A.iE,A.iF,A.iG,A.iH,A.iI,A.iJ,A.iK,A.iL,A.iM,A.iO,A.iP,A.iQ,A.iR,A.iS,A.iT,A.iU,A.iV,A.iW,A.iX,A.iZ,A.j_,A.j0,A.j1])
v(A.bi,F.Y)
v(A.f1,F.T)
v(A.jG,B.ai)
v(A.jF,B.aD)})()
B.ar(b.typeUniverse,JSON.parse('{"bi":{"Y":[],"p":[]},"f1":{"T":["bi"],"T.T":"bi"}}'))
var y={d:"no divide utility; use borders on the children"}
var x={s:B.o("c<b,b>"),p:B.o("a0<b>"),F:B.o("m<p>"),E:B.o("m<bO>"),C:B.o("m<+(b,h<b>?(b,h<b>))>"),x:B.o("m<b>"),B:B.o("h<b>"),A:B.o("bR<b>"),w:B.o("b")};(function constants(){var w=a.makeConstList
C.d5=w(["inset","top","right","bottom","left"],x.x)
C.T=w(["x","y","t","r","b","l",""],x.x)
C.e3=w(["x","y","t","r","b","l"],x.x)
C.ei=w(["no JX equivalent"],x.x)
C.ju={"7xl":0,"8xl":1,"9xl":2}
C.f9=new B.c(C.ju,["4.5rem","6rem","8rem"],x.s)
C.lt={repeat:0,"no-repeat":1,"repeat-x":2,"repeat-y":3,"repeat-round":4,"repeat-space":5}
C.fi=new B.c(C.lt,["repeat","none","x","y","round","space"],x.s)
C.jQ={"50":0,"100":1,"200":2,"300":3,"400":4,"500":5,"600":6,"700":7,"800":8,"900":9,"950":10}
C.hf=new B.c(C.jQ,["100","100","300","300","500","500","700","700","900","900","900"],x.s)
C.jr={flex:0,grid:1,block:2,inline:3,"inline-block":4,"inline-flex":5,"inline-grid":6,contents:7,hidden:8,static:9,relative:10,absolute:11,fixed:12,sticky:13,uppercase:14,lowercase:15,capitalize:16,"normal-case":17,italic:18,"not-italic":19,truncate:20,antialiased:21,"tabular-nums":22,"sr-only":23,"not-sr-only":24,visible:25,invisible:26,isolate:27,grayscale:28,invert:29,sepia:30,"filter-none":31,"scroll-smooth":32,"flex-wrap":33,"flex-nowrap":34,"flex-wrap-reverse":35,"flex-row":36,"flex-row-reverse":37,"flex-col":38,"flex-col-reverse":39,"flex-1":40,"flex-auto":41,"flex-initial":42,"flex-none":43,grow:44,"grow-0":45,"flex-grow":46,"flex-grow-0":47,shrink:48,"shrink-0":49,"flex-shrink":50,"flex-shrink-0":51,underline:52,"line-through":53,"no-underline":54,transition:55,"transition-all":56,"transition-colors":57,"transition-opacity":58,"transition-shadow":59,"transition-transform":60,"transition-none":61,border:62,"border-t":63,"border-r":64,"border-b":65,"border-l":66,"border-x":67,"border-y":68,rounded:69,"outline-none":70,outline:71,ring:72,resize:73,"break-words":74,"break-normal":75,"text-wrap":76,"text-nowrap":77,"text-balance":78,"text-pretty":79,"list-inside":80,"list-outside":81,"aspect-auto":82,"aspect-square":83,"aspect-video":84,"pointer-events-none":85,"pointer-events-auto":86,"appearance-none":87,"appearance-auto":88}
C.hl=new B.c(C.jr,["flex","grid","block","inline","inline-block","inline-flex","inline-grid","contents","hidden","static","relative","absolute","fixed","sticky","uppercase","lowercase","capitalize","normal-case","italic","not-italic","truncate","antialiased","tabular-nums","sr-only","not-sr-only","visible","invisible","isolate","grayscale","invert","sepia","filter-none","scroll-smooth","wrap","nowrap","wrap-reverse","fd:row","fd:row-reverse","fd:col","fd:col-reverse","fl:1","fl:auto","fl:initial","fl:none","grow:1","grow:0","grow:1","grow:0","shrink:1","shrink:0","shrink:1","shrink:0","td:underline","td:line-through","td:none","tr:default","tr:all","tr:colors","tr:opacity","tr:shadow","tr:transform","tr:none","bw:1","bwt:1","bwr:1","bwb:1","bwl:1","bwx:1","bwy:1","br:[0.25rem]","ol:none","ol:1","ring:[3px]","rsz:both","wb:words","wb:normal","tw:wrap","tw:nowrap","tw:balance","tw:pretty","lsp:inside","lsp:outside","ar:auto","ar:square","ar:video","pe:none","pe:auto","app:none","app:auto"],x.s)
C.kn={shadow:0,blur:1,"backdrop-blur":2}
C.m8=new B.f("sh:sm",'Tailwind "shadow" is slightly stronger than sh:sm')
C.ma=new B.f("blur:md",'Tailwind "blur" is 8px')
C.mc=new B.f("bblur:md",'Tailwind "backdrop-blur" is 8px')
C.hu=new B.c(C.kn,[C.m8,C.ma,C.mc],B.o("c<b,+(b,b)>"))
C.kS={xs:0,sm:1,md:2,lg:3,xl:4,"2xl":5,"3xl":6,"4xl":7,"5xl":8,"6xl":9,"7xl":10,prose:11,"screen-sm":12,"screen-md":13,"screen-lg":14,"screen-xl":15,"screen-2xl":16}
C.hP=new B.c(C.kS,["20rem","24rem","28rem","32rem","36rem","42rem","48rem","56rem","64rem","72rem","80rem","65ch","640px","768px","1024px","1280px","1536px"],x.s)
C.jZ={"space-x":0,"space-y":1,"divide-x":2,"divide-y":3,container:4,prose:5}
C.i1=new B.c(C.jZ,["use gap: on a flex or grid parent","use gap: on a flex or grid parent",y.d,y.d,"no container utility; use mw:\u2026 mx:auto","no typography plugin"],x.s)
C.lu={slate:0,zinc:1,neutral:2,stone:3,amber:4,lime:5,emerald:6,cyan:7,sky:8,violet:9,fuchsia:10,rose:11}
C.ia=new B.c(C.lu,["gray","gray","gray","gray","yellow","green","green","teal","blue","purple","pink","pink"],x.s)
C.mp=new E.a0(H.ak,5,x.p)
C.jz={group:0,peer:1,dark:2}
C.mr=new E.a0(C.jz,3,x.p)
C.ms=new E.a0(H.av,6,x.p)
C.kt={center:0,top:1,bottom:2,left:3,right:4,"left-top":5,"left-bottom":6,"right-top":7,"right-bottom":8}
C.mt=new E.a0(C.kt,9,x.p)
C.mu=new E.a0(I.an,10,x.p)
C.mv=new E.a0(I.ae,3,x.p)
C.mw=new E.a0(H.ai,3,x.p)
C.jI={full:0,screen:1,min:2,max:3,fit:4}
C.mx=new E.a0(C.jI,5,x.p)
C.jG={transparent:0,current:1,black:2,white:3}
C.my=new E.a0(C.jG,4,x.p)
C.jD={"0":0,"5":1,"10":2,"20":3,"30":4,"40":5,"50":6,"60":7,"70":8,"80":9,"90":10,"95":11,"100":12}
C.mz=new E.a0(C.jD,13,x.p)
C.mA=new E.a0(I.ag,10,x.p)
C.mB=new E.a0(H.ah,6,x.p)
C.mC=new E.cU(["0","px","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","auto"],B.o("cU<b>"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"tf","bH",()=>B.O("^\\d+(\\.\\d+)?$"))
w($,"te","lV",()=>B.O("^\\[[\\d.]+(px|r?em|%|vw|vh|ch|pt)\\]$"))
w($,"td","nS",()=>B.O("^(t|r|b|l|tl|tr|bl|br|s|e|ss|se|es|ee)(-|$)"))
w($,"to","nW",()=>{var v=G.ms()
return new A.eA(v)})})()};
(a=>{a["mL71gMPshd2djkRH105b7HjxUKk="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_20.part.js.map
