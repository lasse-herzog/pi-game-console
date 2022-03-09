function Yc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Qg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e0=Yc(Qg);function np(n){return!!n||n===""}function Kc(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=At(i)?i0(i):Kc(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(At(n))return n;if(Rt(n))return n}}const t0=/;(?![^(]*\))/g,n0=/:(.+)/;function i0(n){const e={};return n.split(t0).forEach(t=>{if(t){const i=t.split(n0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function $c(n){let e="";if(At(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=$c(n[t]);i&&(e+=i+" ")}else if(Rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const it={},Pr=[],sn=()=>{},r0=()=>!1,s0=/^on[^a-z]/,So=n=>s0.test(n),Jc=n=>n.startsWith("onUpdate:"),Ot=Object.assign,Zc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},a0=Object.prototype.hasOwnProperty,je=(n,e)=>a0.call(n,e),Oe=Array.isArray,Ts=n=>Eo(n)==="[object Map]",o0=n=>Eo(n)==="[object Set]",Be=n=>typeof n=="function",At=n=>typeof n=="string",Qc=n=>typeof n=="symbol",Rt=n=>n!==null&&typeof n=="object",ip=n=>Rt(n)&&Be(n.then)&&Be(n.catch),l0=Object.prototype.toString,Eo=n=>l0.call(n),c0=n=>Eo(n).slice(8,-1),u0=n=>Eo(n)==="[object Object]",eu=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Za=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),To=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},f0=/-(\w)/g,_n=To(n=>n.replace(f0,(e,t)=>t?t.toUpperCase():"")),h0=/\B([A-Z])/g,Kr=To(n=>n.replace(h0,"-$1").toLowerCase()),Ao=To(n=>n.charAt(0).toUpperCase()+n.slice(1)),il=To(n=>n?`on${Ao(n)}`:""),Hs=(n,e)=>!Object.is(n,e),rl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ao=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},d0=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let sf;const p0=()=>sf||(sf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Pn;class m0{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Pn&&(this.parent=Pn,this.index=(Pn.scopes||(Pn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Pn=this,e()}finally{Pn=this.parent}}on(){Pn=this}off(){Pn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function g0(n,e=Pn){e&&e.active&&e.effects.push(n)}const tu=n=>{const e=new Set(n);return e.w=0,e.n=0,e},rp=n=>(n.w&mi)>0,sp=n=>(n.n&mi)>0,v0=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=mi},x0=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];rp(r)&&!sp(r)?r.delete(n):e[t++]=r,r.w&=~mi,r.n&=~mi}e.length=t}},ec=new WeakMap;let ys=0,mi=1;const tc=30;let mn;const Ni=Symbol(""),nc=Symbol("");class nu{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,g0(this,i)}run(){if(!this.active)return this.fn();let e=mn,t=oi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mn,mn=this,oi=!0,mi=1<<++ys,ys<=tc?v0(this):af(this),this.fn()}finally{ys<=tc&&x0(this),mi=1<<--ys,mn=this.parent,oi=t,this.parent=void 0}}stop(){this.active&&(af(this),this.onStop&&this.onStop(),this.active=!1)}}function af(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let oi=!0;const ap=[];function $r(){ap.push(oi),oi=!1}function Jr(){const n=ap.pop();oi=n===void 0?!0:n}function qt(n,e,t){if(oi&&mn){let i=ec.get(n);i||ec.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=tu()),op(r)}}function op(n,e){let t=!1;ys<=tc?sp(n)||(n.n|=mi,t=!rp(n)):t=!n.has(mn),t&&(n.add(mn),mn.deps.push(n))}function On(n,e,t,i,r,s){const a=ec.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Oe(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Oe(n)?eu(t)&&o.push(a.get("length")):(o.push(a.get(Ni)),Ts(n)&&o.push(a.get(nc)));break;case"delete":Oe(n)||(o.push(a.get(Ni)),Ts(n)&&o.push(a.get(nc)));break;case"set":Ts(n)&&o.push(a.get(Ni));break}if(o.length===1)o[0]&&ic(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ic(tu(l))}}function ic(n,e){for(const t of Oe(n)?n:[...n])(t!==mn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const _0=Yc("__proto__,__v_isRef,__isVue"),lp=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(Qc)),y0=iu(),b0=iu(!1,!0),M0=iu(!0),of=w0();function w0(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let s=0,a=this.length;s<a;s++)qt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){$r();const i=Ke(this)[e].apply(this,t);return Jr(),i}}),n}function iu(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?z0:dp:e?hp:fp).get(i))return i;const a=Oe(i);if(!n&&a&&je(of,r))return Reflect.get(of,r,s);const o=Reflect.get(i,r,s);return(Qc(r)?lp.has(r):_0(r))||(n||qt(i,"get",r),e)?o:wt(o)?!a||!eu(r)?o.value:o:Rt(o)?n?pp(o):oa(o):o}}const S0=cp(),E0=cp(!0);function cp(n=!1){return function(t,i,r,s){let a=t[i];if(Gs(a)&&wt(a)&&!wt(r))return!1;if(!n&&!Gs(r)&&(mp(r)||(r=Ke(r),a=Ke(a)),!Oe(t)&&wt(a)&&!wt(r)))return a.value=r,!0;const o=Oe(t)&&eu(i)?Number(i)<t.length:je(t,i),l=Reflect.set(t,i,r,s);return t===Ke(s)&&(o?Hs(r,a)&&On(t,"set",i,r):On(t,"add",i,r)),l}}function T0(n,e){const t=je(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&On(n,"delete",e,void 0),i}function A0(n,e){const t=Reflect.has(n,e);return(!Qc(e)||!lp.has(e))&&qt(n,"has",e),t}function R0(n){return qt(n,"iterate",Oe(n)?"length":Ni),Reflect.ownKeys(n)}const up={get:y0,set:S0,deleteProperty:T0,has:A0,ownKeys:R0},C0={get:M0,set(n,e){return!0},deleteProperty(n,e){return!0}},L0=Ot({},up,{get:b0,set:E0}),ru=n=>n,Ro=n=>Reflect.getPrototypeOf(n);function da(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ke(n),s=Ke(e);e!==s&&!t&&qt(r,"get",e),!t&&qt(r,"get",s);const{has:a}=Ro(r),o=i?ru:t?ou:Vs;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function pa(n,e=!1){const t=this.__v_raw,i=Ke(t),r=Ke(n);return n!==r&&!e&&qt(i,"has",n),!e&&qt(i,"has",r),n===r?t.has(n):t.has(n)||t.has(r)}function ma(n,e=!1){return n=n.__v_raw,!e&&qt(Ke(n),"iterate",Ni),Reflect.get(n,"size",n)}function lf(n){n=Ke(n);const e=Ke(this);return Ro(e).has.call(e,n)||(e.add(n),On(e,"add",n,n)),this}function cf(n,e){e=Ke(e);const t=Ke(this),{has:i,get:r}=Ro(t);let s=i.call(t,n);s||(n=Ke(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Hs(e,a)&&On(t,"set",n,e):On(t,"add",n,e),this}function uf(n){const e=Ke(this),{has:t,get:i}=Ro(e);let r=t.call(e,n);r||(n=Ke(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&On(e,"delete",n,void 0),s}function ff(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&On(n,"clear",void 0,void 0),t}function ga(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Ke(a),l=e?ru:n?ou:Vs;return!n&&qt(o,"iterate",Ni),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function va(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),a=Ts(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ru:e?ou:Vs;return!e&&qt(s,"iterate",l?nc:Ni),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Wn(n){return function(...e){return n==="delete"?!1:this}}function P0(){const n={get(s){return da(this,s)},get size(){return ma(this)},has:pa,add:lf,set:cf,delete:uf,clear:ff,forEach:ga(!1,!1)},e={get(s){return da(this,s,!1,!0)},get size(){return ma(this)},has:pa,add:lf,set:cf,delete:uf,clear:ff,forEach:ga(!1,!0)},t={get(s){return da(this,s,!0)},get size(){return ma(this,!0)},has(s){return pa.call(this,s,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:ga(!0,!1)},i={get(s){return da(this,s,!0,!0)},get size(){return ma(this,!0)},has(s){return pa.call(this,s,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=va(s,!1,!1),t[s]=va(s,!0,!1),e[s]=va(s,!1,!0),i[s]=va(s,!0,!0)}),[n,t,e,i]}const[I0,D0,N0,F0]=P0();function su(n,e){const t=e?n?F0:N0:n?D0:I0;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(je(t,r)&&r in i?t:i,r,s)}const O0={get:su(!1,!1)},k0={get:su(!1,!0)},B0={get:su(!0,!1)},fp=new WeakMap,hp=new WeakMap,dp=new WeakMap,z0=new WeakMap;function U0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function H0(n){return n.__v_skip||!Object.isExtensible(n)?0:U0(c0(n))}function oa(n){return Gs(n)?n:au(n,!1,up,O0,fp)}function G0(n){return au(n,!1,L0,k0,hp)}function pp(n){return au(n,!0,C0,B0,dp)}function au(n,e,t,i,r){if(!Rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=H0(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ir(n){return Gs(n)?Ir(n.__v_raw):!!(n&&n.__v_isReactive)}function Gs(n){return!!(n&&n.__v_isReadonly)}function mp(n){return!!(n&&n.__v_isShallow)}function gp(n){return Ir(n)||Gs(n)}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function vp(n){return ao(n,"__v_skip",!0),n}const Vs=n=>Rt(n)?oa(n):n,ou=n=>Rt(n)?pp(n):n;function xp(n){oi&&mn&&(n=Ke(n),op(n.dep||(n.dep=tu())))}function _p(n,e){n=Ke(n),n.dep&&ic(n.dep)}function wt(n){return!!(n&&n.__v_isRef===!0)}function V0(n){return yp(n,!1)}function W0(n){return yp(n,!0)}function yp(n,e){return wt(n)?n:new j0(n,e)}class j0{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:Vs(e)}get value(){return xp(this),this._value}set value(e){e=this.__v_isShallow?e:Ke(e),Hs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Vs(e),_p(this))}}function As(n){return wt(n)?n.value:n}const q0={get:(n,e,t)=>As(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return wt(r)&&!wt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function bp(n){return Ir(n)?n:new Proxy(n,q0)}class X0{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new nu(e,()=>{this._dirty||(this._dirty=!0,_p(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ke(this);return xp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Y0(n,e,t=!1){let i,r;const s=Be(n);return s?(i=n,r=sn):(i=n.get,r=n.set),new X0(i,r,s||!r,t)}Promise.resolve();function li(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Co(s,e,t)}return r}function an(n,e,t,i){if(Be(n)){const s=li(n,e,t,i);return s&&ip(s)&&s.catch(a=>{Co(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(an(n[s],e,t,i));return r}function Co(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[n,a,o]);return}}K0(n,t,r,i)}function K0(n,e,t,i=!0){console.error(n)}let oo=!1,rc=!1;const Vt=[];let Nn=0;const Rs=[];let bs=null,yr=0;const Cs=[];let ii=null,br=0;const Mp=Promise.resolve();let lu=null,sc=null;function wp(n){const e=lu||Mp;return n?e.then(this?n.bind(this):n):e}function $0(n){let e=Nn+1,t=Vt.length;for(;e<t;){const i=e+t>>>1;Ws(Vt[i])<n?e=i+1:t=i}return e}function Sp(n){(!Vt.length||!Vt.includes(n,oo&&n.allowRecurse?Nn+1:Nn))&&n!==sc&&(n.id==null?Vt.push(n):Vt.splice($0(n.id),0,n),Ep())}function Ep(){!oo&&!rc&&(rc=!0,lu=Mp.then(Rp))}function J0(n){const e=Vt.indexOf(n);e>Nn&&Vt.splice(e,1)}function Tp(n,e,t,i){Oe(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Ep()}function Z0(n){Tp(n,bs,Rs,yr)}function Q0(n){Tp(n,ii,Cs,br)}function cu(n,e=null){if(Rs.length){for(sc=e,bs=[...new Set(Rs)],Rs.length=0,yr=0;yr<bs.length;yr++)bs[yr]();bs=null,yr=0,sc=null,cu(n,e)}}function Ap(n){if(Cs.length){const e=[...new Set(Cs)];if(Cs.length=0,ii){ii.push(...e);return}for(ii=e,ii.sort((t,i)=>Ws(t)-Ws(i)),br=0;br<ii.length;br++)ii[br]();ii=null,br=0}}const Ws=n=>n.id==null?1/0:n.id;function Rp(n){rc=!1,oo=!0,cu(n),Vt.sort((t,i)=>Ws(t)-Ws(i));const e=sn;try{for(Nn=0;Nn<Vt.length;Nn++){const t=Vt[Nn];t&&t.active!==!1&&li(t,null,14)}}finally{Nn=0,Vt.length=0,Ap(),oo=!1,lu=null,(Vt.length||Rs.length||Cs.length)&&Rp(n)}}function ev(n,e,...t){const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||it;h?r=t.map(d=>d.trim()):f&&(r=t.map(d0))}let o,l=i[o=il(e)]||i[o=il(_n(e))];!l&&s&&(l=i[o=il(Kr(e))]),l&&an(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,an(c,n,6,r)}}function Cp(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Be(n)){const l=c=>{const u=Cp(c,e,!0);u&&(o=!0,Ot(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(i.set(n,null),null):(Oe(s)?s.forEach(l=>a[l]=null):Ot(a,s),i.set(n,a),a)}function uu(n,e){return!n||!So(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,Kr(e))||je(n,e))}let gn=null,Lo=null;function lo(n){const e=gn;return gn=n,Lo=n&&n.type.__scopeId||null,e}function u3(n){Lo=n}function f3(){Lo=null}function tv(n,e=gn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&bf(-1);const s=lo(e),a=n(...r);return lo(s),i._d&&bf(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function sl(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=n;let x,p;const m=lo(n);try{if(t.shapeFlag&4){const w=r||i;x=dn(u.call(w,w,f,s,d,h,g)),p=l}else{const w=e;x=dn(w.length>1?w(s,{attrs:l,slots:o,emit:c}):w(s,null)),p=e.props?l:nv(l)}}catch(w){Ps.length=0,Co(w,n,1),x=Wt(js)}let S=x;if(p&&v!==!1){const w=Object.keys(p),{shapeFlag:E}=S;w.length&&E&7&&(a&&w.some(Jc)&&(p=iv(p,a)),S=qs(S,p))}return t.dirs&&(S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),x=S,lo(m),x}const nv=n=>{let e;for(const t in n)(t==="class"||t==="style"||So(t))&&((e||(e={}))[t]=n[t]);return e},iv=(n,e)=>{const t={};for(const i in n)(!Jc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function rv(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!uu(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hf(i,a,c):!0:!!a;return!1}function hf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!uu(t,s))return!0}return!1}function sv({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const av=n=>n.__isSuspense;function ov(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):Q0(n)}function Qa(n,e){if(Mt){let t=Mt.provides;const i=Mt.parent&&Mt.parent.provides;i===t&&(t=Mt.provides=Object.create(i)),t[n]=e}}function ci(n,e,t=!1){const i=Mt||gn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i.proxy):e}}const df={};function Ls(n,e,t){return Lp(n,e,t)}function Lp(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=it){const o=Mt;let l,c=!1,u=!1;if(wt(n)?(l=()=>n.value,c=mp(n)):Ir(n)?(l=()=>n,i=!0):Oe(n)?(u=!0,c=n.some(Ir),l=()=>n.map(p=>{if(wt(p))return p.value;if(Ir(p))return Sr(p);if(Be(p))return li(p,o,2)})):Be(n)?e?l=()=>li(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),an(n,o,3,[h])}:l=sn,e&&i){const p=l;l=()=>Sr(p())}let f,h=p=>{f=x.onStop=()=>{li(p,o,4)}};if(Xs)return h=sn,e?t&&an(e,o,3,[l(),u?[]:void 0,h]):l(),sn;let d=u?[]:df;const g=()=>{if(!!x.active)if(e){const p=x.run();(i||c||(u?p.some((m,S)=>Hs(m,d[S])):Hs(p,d)))&&(f&&f(),an(e,o,3,[p,d===df?void 0:d,h]),d=p)}else x.run()};g.allowRecurse=!!e;let v;r==="sync"?v=g:r==="post"?v=()=>Bt(g,o&&o.suspense):v=()=>{!o||o.isMounted?Z0(g):g()};const x=new nu(l,v);return e?t?g():d=x.run():r==="post"?Bt(x.run.bind(x),o&&o.suspense):x.run(),()=>{x.stop(),o&&o.scope&&Zc(o.scope.effects,x)}}function lv(n,e,t){const i=this.proxy,r=At(n)?n.includes(".")?Pp(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const a=Mt;kr(this);const o=Lp(r,s.bind(i),t);return a?kr(a):Oi(),o}function Pp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Sr(n,e){if(!Rt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),wt(n))Sr(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)Sr(n[t],e);else if(o0(n)||Ts(n))n.forEach(t=>{Sr(t,e)});else if(u0(n))for(const t in n)Sr(n[t],e);return n}function la(n){return Be(n)?{setup:n,name:n.name}:n}const ac=n=>!!n.type.__asyncLoader,Ip=n=>n.type.__isKeepAlive;function cv(n,e){Dp(n,"a",e)}function uv(n,e){Dp(n,"da",e)}function Dp(n,e,t=Mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Po(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ip(r.parent.vnode)&&fv(i,e,t,r),r=r.parent}}function fv(n,e,t,i){const r=Po(e,n,i,!0);Np(()=>{Zc(i[e],r)},t)}function Po(n,e,t=Mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;$r(),kr(t);const o=an(e,t,n,a);return Oi(),Jr(),o});return i?r.unshift(s):r.push(s),s}}const Hn=n=>(e,t=Mt)=>(!Xs||n==="sp")&&Po(n,e,t),hv=Hn("bm"),dv=Hn("m"),pv=Hn("bu"),mv=Hn("u"),gv=Hn("bum"),Np=Hn("um"),vv=Hn("sp"),xv=Hn("rtg"),_v=Hn("rtc");function yv(n,e=Mt){Po("ec",n,e)}let oc=!0;function bv(n){const e=Op(n),t=n.proxy,i=n.ctx;oc=!1,e.beforeCreate&&pf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:x,beforeDestroy:p,beforeUnmount:m,destroyed:S,unmounted:w,render:E,renderTracked:L,renderTriggered:I,errorCaptured:K,serverPrefetch:Z,expose:j,inheritAttrs:y,components:C,directives:z,filters:q}=e;if(c&&Mv(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const H in a){const D=a[H];Be(D)&&(i[H]=D.bind(t))}if(r){const H=r.call(t,t);Rt(H)&&(n.data=oa(H))}if(oc=!0,s)for(const H in s){const D=s[H],ne=Be(D)?D.bind(t,t):Be(D.get)?D.get.bind(t,t):sn,ue=!Be(D)&&Be(D.set)?D.set.bind(t):sn,le=ht({get:ne,set:ue});Object.defineProperty(i,H,{enumerable:!0,configurable:!0,get:()=>le.value,set:ce=>le.value=ce})}if(o)for(const H in o)Fp(o[H],i,t,H);if(l){const H=Be(l)?l.call(t):l;Reflect.ownKeys(H).forEach(D=>{Qa(D,H[D])})}u&&pf(u,n,"c");function G(H,D){Oe(D)?D.forEach(ne=>H(ne.bind(t))):D&&H(D.bind(t))}if(G(hv,f),G(dv,h),G(pv,d),G(mv,g),G(cv,v),G(uv,x),G(yv,K),G(_v,L),G(xv,I),G(gv,m),G(Np,w),G(vv,Z),Oe(j))if(j.length){const H=n.exposed||(n.exposed={});j.forEach(D=>{Object.defineProperty(H,D,{get:()=>t[D],set:ne=>t[D]=ne})})}else n.exposed||(n.exposed={});E&&n.render===sn&&(n.render=E),y!=null&&(n.inheritAttrs=y),C&&(n.components=C),z&&(n.directives=z)}function Mv(n,e,t=sn,i=!1){Oe(n)&&(n=lc(n));for(const r in n){const s=n[r];let a;Rt(s)?"default"in s?a=ci(s.from||r,s.default,!0):a=ci(s.from||r):a=ci(s),wt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function pf(n,e,t){an(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Fp(n,e,t,i){const r=i.includes(".")?Pp(t,i):()=>t[i];if(At(n)){const s=e[n];Be(s)&&Ls(r,s)}else if(Be(n))Ls(r,n.bind(t));else if(Rt(n))if(Oe(n))n.forEach(s=>Fp(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&Ls(r,s,n)}}function Op(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>co(l,c,a,!0)),co(l,e,a)),s.set(e,l),l}function co(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&co(n,s,t,!0),r&&r.forEach(a=>co(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=wv[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const wv={data:mf,props:Ri,emits:Ri,methods:Ri,computed:Ri,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Ri,directives:Ri,watch:Ev,provide:mf,inject:Sv};function mf(n,e){return e?n?function(){return Ot(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function Sv(n,e){return Ri(lc(n),lc(e))}function lc(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Pt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ri(n,e){return n?Ot(Ot(Object.create(null),n),e):e}function Ev(n,e){if(!n)return e;if(!e)return n;const t=Ot(Object.create(null),n);for(const i in e)t[i]=Pt(n[i],e[i]);return t}function Tv(n,e,t,i=!1){const r={},s={};ao(s,Io,1),n.propsDefaults=Object.create(null),kp(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:G0(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Av(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ke(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];const d=e[h];if(l)if(je(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=_n(h);r[g]=cc(l,o,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{kp(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!je(e,f)&&((u=Kr(f))===f||!je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=cc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!je(e,f)&&!0)&&(delete s[f],c=!0)}c&&On(n,"set","$attrs")}function kp(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Za(l))continue;const c=e[l];let u;r&&je(r,u=_n(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:uu(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ke(t),c=o||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=cc(r,l,f,c[f],n,!je(c,f))}}return a}function cc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Be(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(kr(r),i=c[t]=l.call(null,e),Oi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Kr(t))&&(i=!0))}return i}function Bp(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Be(n)){const u=f=>{l=!0;const[h,d]=Bp(f,e,!0);Ot(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return i.set(n,Pr),Pr;if(Oe(s))for(let u=0;u<s.length;u++){const f=_n(s[u]);gf(f)&&(a[f]=it)}else if(s)for(const u in s){const f=_n(u);if(gf(f)){const h=s[u],d=a[f]=Oe(h)||Be(h)?{type:h}:h;if(d){const g=_f(Boolean,d.type),v=_f(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||je(d,"default"))&&o.push(f)}}}const c=[a,o];return i.set(n,c),c}function gf(n){return n[0]!=="$"}function vf(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function xf(n,e){return vf(n)===vf(e)}function _f(n,e){return Oe(e)?e.findIndex(t=>xf(t,n)):Be(e)&&xf(e,n)?0:-1}const zp=n=>n[0]==="_"||n==="$stable",fu=n=>Oe(n)?n.map(dn):[dn(n)],Rv=(n,e,t)=>{const i=tv((...r)=>fu(e(...r)),t);return i._c=!1,i},Up=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zp(r))continue;const s=n[r];if(Be(s))e[r]=Rv(r,s,i);else if(s!=null){const a=fu(s);e[r]=()=>a}}},Hp=(n,e)=>{const t=fu(e);n.slots.default=()=>t},Cv=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ke(e),ao(e,"_",t)):Up(e,n.slots={})}else n.slots={},e&&Hp(n,e);ao(n.slots,Io,1)},Lv=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Ot(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Up(e,r)),a=e}else e&&(Hp(n,e),a={default:1});if(s)for(const o in r)!zp(o)&&!(o in a)&&delete r[o]};function wi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&($r(),an(l,t,8,[n.el,o,n,e]),Jr())}}function Gp(){return{app:null,config:{isNativeTag:r0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pv=0;function Iv(n,e){return function(i,r=null){r!=null&&!Rt(r)&&(r=null);const s=Gp(),a=new Set;let o=!1;const l=s.app={_uid:Pv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ex,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Be(c.install)?(a.add(c),c.install(l,...u)):Be(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Wt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,pu(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function uc(n,e,t,i,r=!1){if(Oe(n)){n.forEach((h,d)=>uc(h,e&&(Oe(e)?e[d]:e),t,i,r));return}if(ac(i)&&!r)return;const s=i.shapeFlag&4?pu(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,je(f,c)&&(f[c]=null)):wt(c)&&(c.value=null)),Be(l))li(l,o,12,[a,u]);else{const h=At(l),d=wt(l);if(h||d){const g=()=>{if(n.f){const v=h?u[l]:l.value;r?Oe(v)&&Zc(v,s):Oe(v)?v.includes(s)||v.push(s):h?u[l]=[s]:(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,je(f,l)&&(f[l]=a)):wt(l)&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,Bt(g,t)):g()}}}const Bt=ov;function Dv(n){return Nv(n)}function Nv(n,e){const t=p0();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=sn,cloneNode:g,insertStaticContent:v}=n,x=(b,T,P,F=null,X=null,J=null,ie=!1,ae=null,M=!!T.dynamicChildren)=>{if(b===T)return;b&&!ls(b,T)&&(F=fe(b),Ae(b,X,J,!0),b=null),T.patchFlag===-2&&(M=!1,T.dynamicChildren=null);const{type:_,ref:O,shapeFlag:U}=T;switch(_){case hu:p(b,T,P,F);break;case js:m(b,T,P,F);break;case eo:b==null&&S(T,P,F,ie);break;case In:z(b,T,P,F,X,J,ie,ae,M);break;default:U&1?L(b,T,P,F,X,J,ie,ae,M):U&6?q(b,T,P,F,X,J,ie,ae,M):(U&64||U&128)&&_.process(b,T,P,F,X,J,ie,ae,M,me)}O!=null&&X&&uc(O,b&&b.ref,J,T||b,!T)},p=(b,T,P,F)=>{if(b==null)i(T.el=o(T.children),P,F);else{const X=T.el=b.el;T.children!==b.children&&c(X,T.children)}},m=(b,T,P,F)=>{b==null?i(T.el=l(T.children||""),P,F):T.el=b.el},S=(b,T,P,F)=>{[b.el,b.anchor]=v(b.children,T,P,F,b.el,b.anchor)},w=({el:b,anchor:T},P,F)=>{let X;for(;b&&b!==T;)X=h(b),i(b,P,F),b=X;i(T,P,F)},E=({el:b,anchor:T})=>{let P;for(;b&&b!==T;)P=h(b),r(b),b=P;r(T)},L=(b,T,P,F,X,J,ie,ae,M)=>{ie=ie||T.type==="svg",b==null?I(T,P,F,X,J,ie,ae,M):j(b,T,X,J,ie,ae,M)},I=(b,T,P,F,X,J,ie,ae)=>{let M,_;const{type:O,props:U,shapeFlag:ee,transition:re,patchFlag:ge,dirs:Q}=b;if(b.el&&g!==void 0&&ge===-1)M=b.el=g(b.el);else{if(M=b.el=a(b.type,J,U&&U.is,U),ee&8?u(M,b.children):ee&16&&Z(b.children,M,null,F,X,J&&O!=="foreignObject",ie,ae),Q&&wi(b,null,F,"created"),U){for(const we in U)we!=="value"&&!Za(we)&&s(M,we,null,U[we],J,b.children,F,X,se);"value"in U&&s(M,"value",null,U.value),(_=U.onVnodeBeforeMount)&&hn(_,F,b)}K(M,b,b.scopeId,ie,F)}Q&&wi(b,null,F,"beforeMount");const be=(!X||X&&!X.pendingBranch)&&re&&!re.persisted;be&&re.beforeEnter(M),i(M,T,P),((_=U&&U.onVnodeMounted)||be||Q)&&Bt(()=>{_&&hn(_,F,b),be&&re.enter(M),Q&&wi(b,null,F,"mounted")},X)},K=(b,T,P,F,X)=>{if(P&&d(b,P),F)for(let J=0;J<F.length;J++)d(b,F[J]);if(X){let J=X.subTree;if(T===J){const ie=X.vnode;K(b,ie,ie.scopeId,ie.slotScopeIds,X.parent)}}},Z=(b,T,P,F,X,J,ie,ae,M=0)=>{for(let _=M;_<b.length;_++){const O=b[_]=ae?ri(b[_]):dn(b[_]);x(null,O,T,P,F,X,J,ie,ae)}},j=(b,T,P,F,X,J,ie)=>{const ae=T.el=b.el;let{patchFlag:M,dynamicChildren:_,dirs:O}=T;M|=b.patchFlag&16;const U=b.props||it,ee=T.props||it;let re;P&&Si(P,!1),(re=ee.onVnodeBeforeUpdate)&&hn(re,P,T,b),O&&wi(T,b,P,"beforeUpdate"),P&&Si(P,!0);const ge=X&&T.type!=="foreignObject";if(_?y(b.dynamicChildren,_,ae,P,F,ge,J):ie||ne(b,T,ae,null,P,F,ge,J,!1),M>0){if(M&16)C(ae,T,U,ee,P,F,X);else if(M&2&&U.class!==ee.class&&s(ae,"class",null,ee.class,X),M&4&&s(ae,"style",U.style,ee.style,X),M&8){const Q=T.dynamicProps;for(let be=0;be<Q.length;be++){const we=Q[be],Re=U[we],Te=ee[we];(Te!==Re||we==="value")&&s(ae,we,Re,Te,X,b.children,P,F,se)}}M&1&&b.children!==T.children&&u(ae,T.children)}else!ie&&_==null&&C(ae,T,U,ee,P,F,X);((re=ee.onVnodeUpdated)||O)&&Bt(()=>{re&&hn(re,P,T,b),O&&wi(T,b,P,"updated")},F)},y=(b,T,P,F,X,J,ie)=>{for(let ae=0;ae<T.length;ae++){const M=b[ae],_=T[ae],O=M.el&&(M.type===In||!ls(M,_)||M.shapeFlag&70)?f(M.el):P;x(M,_,O,null,F,X,J,ie,!0)}},C=(b,T,P,F,X,J,ie)=>{if(P!==F){for(const ae in F){if(Za(ae))continue;const M=F[ae],_=P[ae];M!==_&&ae!=="value"&&s(b,ae,_,M,ie,T.children,X,J,se)}if(P!==it)for(const ae in P)!Za(ae)&&!(ae in F)&&s(b,ae,P[ae],null,ie,T.children,X,J,se);"value"in F&&s(b,"value",P.value,F.value)}},z=(b,T,P,F,X,J,ie,ae,M)=>{const _=T.el=b?b.el:o(""),O=T.anchor=b?b.anchor:o("");let{patchFlag:U,dynamicChildren:ee,slotScopeIds:re}=T;re&&(ae=ae?ae.concat(re):re),b==null?(i(_,P,F),i(O,P,F),Z(T.children,P,O,X,J,ie,ae,M)):U>0&&U&64&&ee&&b.dynamicChildren?(y(b.dynamicChildren,ee,P,X,J,ie,ae),(T.key!=null||X&&T===X.subTree)&&Vp(b,T,!0)):ne(b,T,P,O,X,J,ie,ae,M)},q=(b,T,P,F,X,J,ie,ae,M)=>{T.slotScopeIds=ae,b==null?T.shapeFlag&512?X.ctx.activate(T,P,F,ie,M):W(T,P,F,X,J,ie,M):G(b,T,M)},W=(b,T,P,F,X,J,ie)=>{const ae=b.component=Xv(b,F,X);if(Ip(b)&&(ae.ctx.renderer=me),Yv(ae),ae.asyncDep){if(X&&X.registerDep(ae,H),!b.el){const M=ae.subTree=Wt(js);m(null,M,T,P)}return}H(ae,b,T,P,X,J,ie)},G=(b,T,P)=>{const F=T.component=b.component;if(rv(b,T,P))if(F.asyncDep&&!F.asyncResolved){D(F,T,P);return}else F.next=T,J0(F.update),F.update();else T.component=b.component,T.el=b.el,F.vnode=T},H=(b,T,P,F,X,J,ie)=>{const ae=()=>{if(b.isMounted){let{next:O,bu:U,u:ee,parent:re,vnode:ge}=b,Q=O,be;Si(b,!1),O?(O.el=ge.el,D(b,O,ie)):O=ge,U&&rl(U),(be=O.props&&O.props.onVnodeBeforeUpdate)&&hn(be,re,O,ge),Si(b,!0);const we=sl(b),Re=b.subTree;b.subTree=we,x(Re,we,f(Re.el),fe(Re),b,X,J),O.el=we.el,Q===null&&sv(b,we.el),ee&&Bt(ee,X),(be=O.props&&O.props.onVnodeUpdated)&&Bt(()=>hn(be,re,O,ge),X)}else{let O;const{el:U,props:ee}=T,{bm:re,m:ge,parent:Q}=b,be=ac(T);if(Si(b,!1),re&&rl(re),!be&&(O=ee&&ee.onVnodeBeforeMount)&&hn(O,Q,T),Si(b,!0),U&&k){const we=()=>{b.subTree=sl(b),k(U,b.subTree,b,X,null)};be?T.type.__asyncLoader().then(()=>!b.isUnmounted&&we()):we()}else{const we=b.subTree=sl(b);x(null,we,P,F,b,X,J),T.el=we.el}if(ge&&Bt(ge,X),!be&&(O=ee&&ee.onVnodeMounted)){const we=T;Bt(()=>hn(O,Q,we),X)}T.shapeFlag&256&&b.a&&Bt(b.a,X),b.isMounted=!0,T=P=F=null}},M=b.effect=new nu(ae,()=>Sp(b.update),b.scope),_=b.update=M.run.bind(M);_.id=b.uid,Si(b,!0),_()},D=(b,T,P)=>{T.component=b;const F=b.vnode.props;b.vnode=T,b.next=null,Av(b,T.props,F,P),Lv(b,T.children,P),$r(),cu(void 0,b.update),Jr()},ne=(b,T,P,F,X,J,ie,ae,M=!1)=>{const _=b&&b.children,O=b?b.shapeFlag:0,U=T.children,{patchFlag:ee,shapeFlag:re}=T;if(ee>0){if(ee&128){le(_,U,P,F,X,J,ie,ae,M);return}else if(ee&256){ue(_,U,P,F,X,J,ie,ae,M);return}}re&8?(O&16&&se(_,X,J),U!==_&&u(P,U)):O&16?re&16?le(_,U,P,F,X,J,ie,ae,M):se(_,X,J,!0):(O&8&&u(P,""),re&16&&Z(U,P,F,X,J,ie,ae,M))},ue=(b,T,P,F,X,J,ie,ae,M)=>{b=b||Pr,T=T||Pr;const _=b.length,O=T.length,U=Math.min(_,O);let ee;for(ee=0;ee<U;ee++){const re=T[ee]=M?ri(T[ee]):dn(T[ee]);x(b[ee],re,P,null,X,J,ie,ae,M)}_>O?se(b,X,J,!0,!1,U):Z(T,P,F,X,J,ie,ae,M,U)},le=(b,T,P,F,X,J,ie,ae,M)=>{let _=0;const O=T.length;let U=b.length-1,ee=O-1;for(;_<=U&&_<=ee;){const re=b[_],ge=T[_]=M?ri(T[_]):dn(T[_]);if(ls(re,ge))x(re,ge,P,null,X,J,ie,ae,M);else break;_++}for(;_<=U&&_<=ee;){const re=b[U],ge=T[ee]=M?ri(T[ee]):dn(T[ee]);if(ls(re,ge))x(re,ge,P,null,X,J,ie,ae,M);else break;U--,ee--}if(_>U){if(_<=ee){const re=ee+1,ge=re<O?T[re].el:F;for(;_<=ee;)x(null,T[_]=M?ri(T[_]):dn(T[_]),P,ge,X,J,ie,ae,M),_++}}else if(_>ee)for(;_<=U;)Ae(b[_],X,J,!0),_++;else{const re=_,ge=_,Q=new Map;for(_=ge;_<=ee;_++){const Le=T[_]=M?ri(T[_]):dn(T[_]);Le.key!=null&&Q.set(Le.key,_)}let be,we=0;const Re=ee-ge+1;let Te=!1,N=0;const Me=new Array(Re);for(_=0;_<Re;_++)Me[_]=0;for(_=re;_<=U;_++){const Le=b[_];if(we>=Re){Ae(Le,X,J,!0);continue}let ve;if(Le.key!=null)ve=Q.get(Le.key);else for(be=ge;be<=ee;be++)if(Me[be-ge]===0&&ls(Le,T[be])){ve=be;break}ve===void 0?Ae(Le,X,J,!0):(Me[ve-ge]=_+1,ve>=N?N=ve:Te=!0,x(Le,T[ve],P,null,X,J,ie,ae,M),we++)}const ye=Te?Fv(Me):Pr;for(be=ye.length-1,_=Re-1;_>=0;_--){const Le=ge+_,ve=T[Le],de=Le+1<O?T[Le+1].el:F;Me[_]===0?x(null,ve,P,de,X,J,ie,ae,M):Te&&(be<0||_!==ye[be]?ce(ve,P,de,2):be--)}}},ce=(b,T,P,F,X=null)=>{const{el:J,type:ie,transition:ae,children:M,shapeFlag:_}=b;if(_&6){ce(b.component.subTree,T,P,F);return}if(_&128){b.suspense.move(T,P,F);return}if(_&64){ie.move(b,T,P,me);return}if(ie===In){i(J,T,P);for(let U=0;U<M.length;U++)ce(M[U],T,P,F);i(b.anchor,T,P);return}if(ie===eo){w(b,T,P);return}if(F!==2&&_&1&&ae)if(F===0)ae.beforeEnter(J),i(J,T,P),Bt(()=>ae.enter(J),X);else{const{leave:U,delayLeave:ee,afterLeave:re}=ae,ge=()=>i(J,T,P),Q=()=>{U(J,()=>{ge(),re&&re()})};ee?ee(J,ge,Q):Q()}else i(J,T,P)},Ae=(b,T,P,F=!1,X=!1)=>{const{type:J,props:ie,ref:ae,children:M,dynamicChildren:_,shapeFlag:O,patchFlag:U,dirs:ee}=b;if(ae!=null&&uc(ae,null,P,b,!0),O&256){T.ctx.deactivate(b);return}const re=O&1&&ee,ge=!ac(b);let Q;if(ge&&(Q=ie&&ie.onVnodeBeforeUnmount)&&hn(Q,T,b),O&6)B(b.component,P,F);else{if(O&128){b.suspense.unmount(P,F);return}re&&wi(b,null,T,"beforeUnmount"),O&64?b.type.remove(b,T,P,X,me,F):_&&(J!==In||U>0&&U&64)?se(_,T,P,!1,!0):(J===In&&U&384||!X&&O&16)&&se(M,T,P),F&&Ue(b)}(ge&&(Q=ie&&ie.onVnodeUnmounted)||re)&&Bt(()=>{Q&&hn(Q,T,b),re&&wi(b,null,T,"unmounted")},P)},Ue=b=>{const{type:T,el:P,anchor:F,transition:X}=b;if(T===In){V(P,F);return}if(T===eo){E(b);return}const J=()=>{r(P),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(b.shapeFlag&1&&X&&!X.persisted){const{leave:ie,delayLeave:ae}=X,M=()=>ie(P,J);ae?ae(b.el,J,M):M()}else J()},V=(b,T)=>{let P;for(;b!==T;)P=h(b),r(b),b=P;r(T)},B=(b,T,P)=>{const{bum:F,scope:X,update:J,subTree:ie,um:ae}=b;F&&rl(F),X.stop(),J&&(J.active=!1,Ae(ie,b,T,P)),ae&&Bt(ae,T),Bt(()=>{b.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},se=(b,T,P,F=!1,X=!1,J=0)=>{for(let ie=J;ie<b.length;ie++)Ae(b[ie],T,P,F,X)},fe=b=>b.shapeFlag&6?fe(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),pe=(b,T,P)=>{b==null?T._vnode&&Ae(T._vnode,null,null,!0):x(T._vnode||null,b,T,null,null,null,P),Ap(),T._vnode=b},me={p:x,um:Ae,m:ce,r:Ue,mt:W,mc:Z,pc:ne,pbc:y,n:fe,o:n};let _e,k;return e&&([_e,k]=e(me)),{render:pe,hydrate:_e,createApp:Iv(pe,_e)}}function Si({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Vp(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ri(r[s]),o.el=a.el),t||Vp(a,o))}}function Fv(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Ov=n=>n.__isTeleport,Wp="components";function h3(n,e){return Bv(Wp,n,!0,e)||n}const kv=Symbol();function Bv(n,e,t=!0,i=!1){const r=gn||Mt;if(r){const s=r.type;if(n===Wp){const o=Zv(s);if(o&&(o===e||o===_n(e)||o===Ao(_n(e))))return s}const a=yf(r[n]||s[n],e)||yf(r.appContext[n],e);return!a&&i?s:a}}function yf(n,e){return n&&(n[e]||n[_n(e)]||n[Ao(_n(e))])}const In=Symbol(void 0),hu=Symbol(void 0),js=Symbol(void 0),eo=Symbol(void 0),Ps=[];let Fi=null;function d3(n=!1){Ps.push(Fi=n?null:[])}function zv(){Ps.pop(),Fi=Ps[Ps.length-1]||null}let uo=1;function bf(n){uo+=n}function jp(n){return n.dynamicChildren=uo>0?Fi||Pr:null,zv(),uo>0&&Fi&&Fi.push(n),n}function p3(n,e,t,i,r,s){return jp(Xp(n,e,t,i,r,s,!0))}function m3(n,e,t,i,r){return jp(Wt(n,e,t,i,r,!0))}function fc(n){return n?n.__v_isVNode===!0:!1}function ls(n,e){return n.type===e.type&&n.key===e.key}const Io="__vInternal",qp=({key:n})=>n!=null?n:null,to=({ref:n,ref_key:e,ref_for:t})=>n!=null?At(n)||wt(n)||Be(n)?{i:gn,r:n,k:e,f:!!t}:n:null;function Xp(n,e=null,t=null,i=0,r=null,s=n===In?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qp(e),ref:e&&to(e),scopeId:Lo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(du(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),uo>0&&!a&&Fi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Fi.push(l),l}const Wt=Uv;function Uv(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===kv)&&(n=js),fc(n)){const o=qs(n,e,!0);return t&&du(o,t),o}if(Qv(n)&&(n=n.__vccOpts),e){e=Hv(e);let{class:o,style:l}=e;o&&!At(o)&&(e.class=$c(o)),Rt(l)&&(gp(l)&&!Oe(l)&&(l=Ot({},l)),e.style=Kc(l))}const a=At(n)?1:av(n)?128:Ov(n)?64:Rt(n)?4:Be(n)?2:0;return Xp(n,e,t,i,r,a,s,!0)}function Hv(n){return n?gp(n)||Io in n?Ot({},n):n:null}function qs(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Vv(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&qp(o),ref:e&&e.ref?t&&r?Oe(r)?r.concat(to(e)):[r,to(e)]:to(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==In?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&qs(n.ssContent),ssFallback:n.ssFallback&&qs(n.ssFallback),el:n.el,anchor:n.anchor}}function Gv(n=" ",e=0){return Wt(hu,null,n,e)}function g3(n,e){const t=Wt(eo,null,n);return t.staticCount=e,t}function dn(n){return n==null||typeof n=="boolean"?Wt(js):Oe(n)?Wt(In,null,n.slice()):typeof n=="object"?ri(n):Wt(hu,null,String(n))}function ri(n){return n.el===null||n.memo?n:qs(n)}function du(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),du(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Io in e)?e._ctx=gn:r===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),i&64?(t=16,e=[Gv(e)]):t=8);n.children=e,n.shapeFlag|=t}function Vv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=$c([e.class,i.class]));else if(r==="style")e.style=Kc([e.style,i.style]);else if(So(r)){const s=e[r],a=i[r];a&&s!==a&&!(Oe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function hn(n,e,t,i=null){an(n,e,7,[t,i])}const hc=n=>n?Yp(n)?pu(n)||n.proxy:hc(n.parent):null,fo=Ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hc(n.parent),$root:n=>hc(n.root),$emit:n=>n.emit,$options:n=>Op(n),$forceUpdate:n=>()=>Sp(n.update),$nextTick:n=>wp.bind(n.proxy),$watch:n=>lv.bind(n)}),Wv={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==it&&je(i,e))return a[e]=1,i[e];if(r!==it&&je(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&je(c,e))return a[e]=3,s[e];if(t!==it&&je(t,e))return a[e]=4,t[e];oc&&(a[e]=0)}}const u=fo[e];let f,h;if(u)return e==="$attrs"&&qt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==it&&je(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,je(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==it&&je(r,e)?(r[e]=t,!0):i!==it&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==it&&je(n,a)||e!==it&&je(e,a)||(o=s[0])&&je(o,a)||je(i,a)||je(fo,a)||je(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?this.set(n,e,t.get(),null):t.value!=null&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},jv=Gp();let qv=0;function Xv(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||jv,s={uid:qv++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new m0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(i,r),emitsOptions:Cp(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ev.bind(null,s),n.ce&&n.ce(s),s}let Mt=null;const kr=n=>{Mt=n,n.scope.on()},Oi=()=>{Mt&&Mt.scope.off(),Mt=null};function Yp(n){return n.vnode.shapeFlag&4}let Xs=!1;function Yv(n,e=!1){Xs=e;const{props:t,children:i}=n.vnode,r=Yp(n);Tv(n,t,r,e),Cv(n,i);const s=r?Kv(n,e):void 0;return Xs=!1,s}function Kv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=vp(new Proxy(n.ctx,Wv));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Jv(n):null;kr(n),$r();const s=li(i,n,0,[n.props,r]);if(Jr(),Oi(),ip(s)){if(s.then(Oi,Oi),e)return s.then(a=>{Mf(n,a,e)}).catch(a=>{Co(a,n,0)});n.asyncDep=s}else Mf(n,s,e)}else Kp(n,e)}function Mf(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Rt(e)&&(n.setupState=bp(e)),Kp(n,t)}let wf;function Kp(n,e,t){const i=n.type;if(!n.render){if(!e&&wf&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Ot(Ot({isCustomElement:s,delimiters:o},a),l);i.render=wf(r,c)}}n.render=i.render||sn}kr(n),$r(),bv(n),Jr(),Oi()}function $v(n){return new Proxy(n.attrs,{get(e,t){return qt(n,"get","$attrs"),e[t]}})}function Jv(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=$v(n))},slots:n.slots,emit:n.emit,expose:e}}function pu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(bp(vp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fo)return fo[t](n)}}))}function Zv(n){return Be(n)&&n.displayName||n.name}function Qv(n){return Be(n)&&"__vccOpts"in n}const ht=(n,e)=>Y0(n,e,Xs);function Do(n,e,t){const i=arguments.length;return i===2?Rt(e)&&!Oe(e)?fc(e)?Wt(n,null,[e]):Wt(n,e):Wt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&fc(t)&&(t=[t]),Wt(n,e,t))}const ex="3.2.31",tx="http://www.w3.org/2000/svg",Pi=typeof document!="undefined"?document:null,Sf=Pi&&Pi.createElement("template"),nx={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Pi.createElementNS(tx,n):Pi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Pi.createTextNode(n),createComment:n=>Pi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Pi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Sf.innerHTML=i?`<svg>${n}</svg>`:n;const o=Sf.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function ix(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function rx(n,e,t){const i=n.style,r=At(t);if(t&&!r){for(const s in t)dc(i,s,t[s]);if(e&&!At(e))for(const s in e)t[s]==null&&dc(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Ef=/\s*!important$/;function dc(n,e,t){if(Oe(t))t.forEach(i=>dc(n,e,i));else if(e.startsWith("--"))n.setProperty(e,t);else{const i=sx(n,e);Ef.test(t)?n.setProperty(Kr(i),t.replace(Ef,""),"important"):n[i]=t}}const Tf=["Webkit","Moz","ms"],al={};function sx(n,e){const t=al[e];if(t)return t;let i=_n(e);if(i!=="filter"&&i in n)return al[e]=i;i=Ao(i);for(let r=0;r<Tf.length;r++){const s=Tf[r]+i;if(s in n)return al[e]=s}return e}const Af="http://www.w3.org/1999/xlink";function ax(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Af,e.slice(6,e.length)):n.setAttributeNS(Af,e,t);else{const s=e0(e);t==null||s&&!np(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function ox(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const o=t==null?"":t;(n.value!==o||n.tagName==="OPTION")&&(n.value=o),t==null&&n.removeAttribute(e);return}if(t===""||t==null){const o=typeof n[e];if(o==="boolean"){n[e]=np(t);return}else if(t==null&&o==="string"){n[e]="",n.removeAttribute(e);return}else if(o==="number"){try{n[e]=0}catch{}n.removeAttribute(e);return}}try{n[e]=t}catch{}}let ho=Date.now,$p=!1;if(typeof window!="undefined"){ho()>document.createEvent("Event").timeStamp&&(ho=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);$p=!!(n&&Number(n[1])<=53)}let pc=0;const lx=Promise.resolve(),cx=()=>{pc=0},ux=()=>pc||(lx.then(cx),pc=ho());function fx(n,e,t,i){n.addEventListener(e,t,i)}function hx(n,e,t,i){n.removeEventListener(e,t,i)}function dx(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=px(e);if(i){const c=s[e]=mx(i,r);fx(n,o,c,l)}else a&&(hx(n,o,a,l),s[e]=void 0)}}const Rf=/(?:Once|Passive|Capture)$/;function px(n){let e;if(Rf.test(n)){e={};let t;for(;t=n.match(Rf);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Kr(n.slice(2)),e]}function mx(n,e){const t=i=>{const r=i.timeStamp||ho();($p||r>=t.attached-1)&&an(gx(i,t.value),e,5,[i])};return t.value=n,t.attached=ux(),t}function gx(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Cf=/^on[a-z]/,vx=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?ix(n,i,r):e==="style"?rx(n,t,i):So(e)?Jc(e)||dx(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xx(n,e,i,r))?ox(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ax(n,e,i,r))};function xx(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Cf.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Cf.test(e)&&At(t)?!1:e in n}const _x=Ot({patchProp:vx},nx);let Lf;function yx(){return Lf||(Lf=Dv(_x))}const v3=(...n)=>{const e=yx().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=bx(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function bx(n){return At(n)?document.querySelector(n):n}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Jp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Zr=n=>Jp?Symbol(n):"_vr_"+n,Mx=Zr("rvlm"),Pf=Zr("rvd"),mu=Zr("r"),Zp=Zr("rl"),mc=Zr("rvl"),Mr=typeof window!="undefined";function wx(n){return n.__esModule||Jp&&n[Symbol.toStringTag]==="Module"}const tt=Object.assign;function ol(n,e){const t={};for(const i in e){const r=e[i];t[i]=Array.isArray(r)?r.map(n):n(r)}return t}const Is=()=>{},Sx=/\/$/,Ex=n=>n.replace(Sx,"");function ll(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("?"),l=e.indexOf("#",o>-1?o:0);return o>-1&&(i=e.slice(0,o),s=e.slice(o+1,l>-1?l:e.length),r=n(s)),l>-1&&(i=i||e.slice(0,l),a=e.slice(l,e.length)),i=Cx(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function Tx(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function If(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Ax(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Br(e.matched[i],t.matched[r])&&Qp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Br(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Qp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Rx(n[t],e[t]))return!1;return!0}function Rx(n,e){return Array.isArray(n)?Df(n,e):Array.isArray(e)?Df(e,n):n===e}function Df(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Cx(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],!(r===1||a==="."))if(a==="..")r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Ys;(function(n){n.pop="pop",n.push="push"})(Ys||(Ys={}));var Ds;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ds||(Ds={}));function Lx(n){if(!n)if(Mr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Ex(n)}const Px=/^[^#]+#/;function Ix(n,e){return n.replace(Px,"#")+e}function Dx(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const No=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nx(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Dx(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nf(n,e){return(history.state?history.state.position-e:-1)+n}const gc=new Map;function Fx(n,e){gc.set(n,e)}function Ox(n){const e=gc.get(n);return gc.delete(n),e}let kx=()=>location.protocol+"//"+location.host;function em(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),If(l,"")}return If(t,n)+i+r}function Bx(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const d=em(n,location),g=t.value,v=e.value;let x=0;if(h){if(t.value=d,e.value=h,a&&a===g){a=null;return}x=v?h.position-v.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:x,type:Ys.pop,direction:x?x>0?Ds.forward:Ds.back:Ds.unknown})})};function l(){a=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;!h.state||h.replaceState(tt({},h.state,{scroll:No()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Ff(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?No():null}}function zx(n){const{history:e,location:t}=window,i={value:em(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:kx()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){const u=tt({},e.state,Ff(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=tt({},r.value,e.state,{forward:l,scroll:No()});s(u.current,u,!0);const f=tt({},Ff(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Ux(n){n=Lx(n);const e=zx(n),t=Bx(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=tt({location:"",base:n,go:i,createHref:Ix.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function x3(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Ux(n)}function Hx(n){return typeof n=="string"||n&&typeof n=="object"}function tm(n){return typeof n=="string"||typeof n=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nm=Zr("nf");var Of;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Of||(Of={}));function zr(n,e){return tt(new Error,{type:n,[nm]:!0},e)}function qn(n,e){return n instanceof Error&&nm in n&&(e==null||!!(n.type&e))}const kf="[^/]+?",Gx={sensitive:!1,strict:!1,start:!0,end:!0},Vx=/[.+*?^${}()[\]/\\]/g;function Wx(n,e){const t=tt({},Gx,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Vx,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:v,optional:x,regexp:p}=h;s.push({name:g,repeatable:v,optional:x});const m=p||kf;if(m!==kf){d+=10;try{new RegExp(`(${m})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${m}): `+w.message)}}let S=v?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;f||(S=x&&c.length<2?`(?:/${S})`:"/"+S),x&&(S+="?"),r+=S,d+=20,x&&(d+=-8),v&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:x}=d,p=g in c?c[g]:"";if(Array.isArray(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const m=Array.isArray(p)?p.join("/"):p;if(!m)if(x)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=m}}return u}return{re:a,score:i,keys:s,parse:o,stringify:l}}function jx(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qx(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=jx(i[t],r[t]);if(s)return s;t++}return r.length-i.length}const Xx={type:0,value:""},Yx=/[a-zA-Z0-9_]/;function Kx(n){if(!n)return[[]];if(n==="/")return[[Xx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Yx.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function $x(n,e,t){const i=Wx(Kx(n.path),t),r=tt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Jx(n,e){const t=[],i=new Map;e=zf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const d=!h,g=Qx(u);g.aliasOf=h&&h.record;const v=zf(e,u),x=[g];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of S)x.push(tt({},g,{components:h?h.record.components:g.components,path:w,aliasOf:h?h.record:g}))}let p,m;for(const S of x){const{path:w}=S;if(f&&w[0]!=="/"){const E=f.record.path,L=E[E.length-1]==="/"?"":"/";S.path=f.record.path+(w&&L+w)}if(p=$x(S,f,v),h?h.alias.push(p):(m=m||p,m!==p&&m.alias.push(p),d&&u.name&&!Bf(p)&&a(u.name)),"children"in g){const E=g.children;for(let L=0;L<E.length;L++)s(E[L],p,h&&h.children[L])}h=h||p,l(p)}return m?()=>{a(m)}:Is}function a(u){if(tm(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&qx(u,t[f])>=0&&(u.record.path!==t[f].record.path||!im(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Bf(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},g,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw zr(1,{location:u});v=h.record.name,d=tt(Zx(f.params,h.keys.filter(m=>!m.optional).map(m=>m.name)),u.params),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(m=>m.re.test(g)),h&&(d=h.parse(g),v=h.record.name);else{if(h=f.name?i.get(f.name):t.find(m=>m.re.test(f.path)),!h)throw zr(1,{location:u,currentLocation:f});v=h.record.name,d=tt({},f.params,u.params),g=h.stringify(d)}const x=[];let p=h;for(;p;)x.unshift(p.record),p=p.parent;return{name:v,path:g,params:d,matched:x,meta:t_(x)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function Zx(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Qx(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:e_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function e_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Bf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function t_(n){return n.reduce((e,t)=>tt(e,t.meta),{})}function zf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function im(n,e){return e.children.some(t=>t===n||im(n,t))}const rm=/#/g,n_=/&/g,i_=/\//g,r_=/=/g,s_=/\?/g,sm=/\+/g,a_=/%5B/g,o_=/%5D/g,am=/%5E/g,l_=/%60/g,om=/%7B/g,c_=/%7C/g,lm=/%7D/g,u_=/%20/g;function gu(n){return encodeURI(""+n).replace(c_,"|").replace(a_,"[").replace(o_,"]")}function f_(n){return gu(n).replace(om,"{").replace(lm,"}").replace(am,"^")}function vc(n){return gu(n).replace(sm,"%2B").replace(u_,"+").replace(rm,"%23").replace(n_,"%26").replace(l_,"`").replace(om,"{").replace(lm,"}").replace(am,"^")}function h_(n){return vc(n).replace(r_,"%3D")}function d_(n){return gu(n).replace(rm,"%23").replace(s_,"%3F")}function p_(n){return n==null?"":d_(n).replace(i_,"%2F")}function po(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function m_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(sm," "),a=s.indexOf("="),o=po(a<0?s:s.slice(0,a)),l=a<0?null:po(s.slice(a+1));if(o in e){let c=e[o];Array.isArray(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Uf(n){let e="";for(let t in n){const i=n[t];if(t=h_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(s=>s&&vc(s)):[i&&vc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function g_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function cs(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function si(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(zr(4,{from:t,to:e})):f instanceof Error?o(f):Hx(f)?o(zr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function cl(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(v_(o)){const c=(o.__vccOpts||o)[e];c&&r.push(si(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=wx(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&si(h,t,i,s,a)()}))}}return r}function v_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Hf(n){const e=ci(mu),t=ci(Zp),i=ht(()=>e.resolve(As(n.to))),r=ht(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Br.bind(null,u));if(h>-1)return h;const d=Gf(l[c-2]);return c>1&&Gf(u)===d&&f[f.length-1].path!==d?f.findIndex(Br.bind(null,l[c-2])):h}),s=ht(()=>r.value>-1&&b_(t.params,i.value.params)),a=ht(()=>r.value>-1&&r.value===t.matched.length-1&&Qp(t.params,i.value.params));function o(l={}){return y_(l)?e[As(n.replace)?"replace":"push"](As(n.to)).catch(Is):Promise.resolve()}return{route:i,href:ht(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const x_=la({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hf,setup(n,{slots:e}){const t=oa(Hf(n)),{options:i}=ci(mu),r=ht(()=>({[Vf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Vf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Do("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),__=x_;function y_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function b_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Gf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Vf=(n,e,t)=>n!=null?n:e!=null?e:t,M_=la({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(n,{attrs:e,slots:t}){const i=ci(mc),r=ht(()=>n.route||i.value),s=ci(Pf,0),a=ht(()=>r.value.matched[s]);Qa(Pf,s+1),Qa(Mx,a),Qa(mc,r);const o=V0();return Ls(()=>[o.value,a.value,n.name],([l,c,u],[f,h,d])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Br(c,h)||!f)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=a.value,u=c&&c.components[n.name],f=n.name;if(!u)return Wf(t.default,{Component:u,route:l});const h=c.props[n.name],d=h?h===!0?l.params:typeof h=="function"?h(l):h:null,v=Do(u,tt({},d,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(c.instances[f]=null)},ref:o}));return Wf(t.default,{Component:v,route:l})||v}}});function Wf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const w_=M_;function _3(n){const e=Jx(n.routes,n),t=n.parseQuery||m_,i=n.stringifyQuery||Uf,r=n.history,s=cs(),a=cs(),o=cs(),l=W0(jn);let c=jn;Mr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ol.bind(null,V=>""+V),f=ol.bind(null,p_),h=ol.bind(null,po);function d(V,B){let se,fe;return tm(V)?(se=e.getRecordMatcher(V),fe=B):fe=V,e.addRoute(fe,se)}function g(V){const B=e.getRecordMatcher(V);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(V=>V.record)}function x(V){return!!e.getRecordMatcher(V)}function p(V,B){if(B=tt({},B||l.value),typeof V=="string"){const k=ll(t,V,B.path),b=e.resolve({path:k.path},B),T=r.createHref(k.fullPath);return tt(k,b,{params:h(b.params),hash:po(k.hash),redirectedFrom:void 0,href:T})}let se;if("path"in V)se=tt({},V,{path:ll(t,V.path,B.path).path});else{const k=tt({},V.params);for(const b in k)k[b]==null&&delete k[b];se=tt({},V,{params:f(V.params)}),B.params=f(B.params)}const fe=e.resolve(se,B),pe=V.hash||"";fe.params=u(h(fe.params));const me=Tx(i,tt({},V,{hash:f_(pe),path:fe.path})),_e=r.createHref(me);return tt({fullPath:me,hash:pe,query:i===Uf?g_(V.query):V.query||{}},fe,{redirectedFrom:void 0,href:_e})}function m(V){return typeof V=="string"?ll(t,V,l.value.path):tt({},V)}function S(V,B){if(c!==V)return zr(8,{from:B,to:V})}function w(V){return I(V)}function E(V){return w(tt(m(V),{replace:!0}))}function L(V){const B=V.matched[V.matched.length-1];if(B&&B.redirect){const{redirect:se}=B;let fe=typeof se=="function"?se(V):se;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=m(fe):{path:fe},fe.params={}),tt({query:V.query,hash:V.hash,params:V.params},fe)}}function I(V,B){const se=c=p(V),fe=l.value,pe=V.state,me=V.force,_e=V.replace===!0,k=L(se);if(k)return I(tt(m(k),{state:pe,force:me,replace:_e}),B||se);const b=se;b.redirectedFrom=B;let T;return!me&&Ax(i,fe,se)&&(T=zr(16,{to:b,from:fe}),ue(fe,fe,!0,!1)),(T?Promise.resolve(T):Z(b,fe)).catch(P=>qn(P)?qn(P,2)?P:ne(P):H(P,b,fe)).then(P=>{if(P){if(qn(P,2))return I(tt(m(P.to),{state:pe,force:me,replace:_e}),B||b)}else P=y(b,fe,!0,_e,pe);return j(b,fe,P),P})}function K(V,B){const se=S(V,B);return se?Promise.reject(se):Promise.resolve()}function Z(V,B){let se;const[fe,pe,me]=S_(V,B);se=cl(fe.reverse(),"beforeRouteLeave",V,B);for(const k of fe)k.leaveGuards.forEach(b=>{se.push(si(b,V,B))});const _e=K.bind(null,V,B);return se.push(_e),Qi(se).then(()=>{se=[];for(const k of s.list())se.push(si(k,V,B));return se.push(_e),Qi(se)}).then(()=>{se=cl(pe,"beforeRouteUpdate",V,B);for(const k of pe)k.updateGuards.forEach(b=>{se.push(si(b,V,B))});return se.push(_e),Qi(se)}).then(()=>{se=[];for(const k of V.matched)if(k.beforeEnter&&!B.matched.includes(k))if(Array.isArray(k.beforeEnter))for(const b of k.beforeEnter)se.push(si(b,V,B));else se.push(si(k.beforeEnter,V,B));return se.push(_e),Qi(se)}).then(()=>(V.matched.forEach(k=>k.enterCallbacks={}),se=cl(me,"beforeRouteEnter",V,B),se.push(_e),Qi(se))).then(()=>{se=[];for(const k of a.list())se.push(si(k,V,B));return se.push(_e),Qi(se)}).catch(k=>qn(k,8)?k:Promise.reject(k))}function j(V,B,se){for(const fe of o.list())fe(V,B,se)}function y(V,B,se,fe,pe){const me=S(V,B);if(me)return me;const _e=B===jn,k=Mr?history.state:{};se&&(fe||_e?r.replace(V.fullPath,tt({scroll:_e&&k&&k.scroll},pe)):r.push(V.fullPath,pe)),l.value=V,ue(V,B,se,_e),ne()}let C;function z(){C=r.listen((V,B,se)=>{const fe=p(V),pe=L(fe);if(pe){I(tt(pe,{replace:!0}),fe).catch(Is);return}c=fe;const me=l.value;Mr&&Fx(Nf(me.fullPath,se.delta),No()),Z(fe,me).catch(_e=>qn(_e,12)?_e:qn(_e,2)?(I(_e.to,fe).then(k=>{qn(k,20)&&!se.delta&&se.type===Ys.pop&&r.go(-1,!1)}).catch(Is),Promise.reject()):(se.delta&&r.go(-se.delta,!1),H(_e,fe,me))).then(_e=>{_e=_e||y(fe,me,!1),_e&&(se.delta?r.go(-se.delta,!1):se.type===Ys.pop&&qn(_e,20)&&r.go(-1,!1)),j(fe,me,_e)}).catch(Is)})}let q=cs(),W=cs(),G;function H(V,B,se){ne(V);const fe=W.list();return fe.length?fe.forEach(pe=>pe(V,B,se)):console.error(V),Promise.reject(V)}function D(){return G&&l.value!==jn?Promise.resolve():new Promise((V,B)=>{q.add([V,B])})}function ne(V){return G||(G=!V,z(),q.list().forEach(([B,se])=>V?se(V):B()),q.reset()),V}function ue(V,B,se,fe){const{scrollBehavior:pe}=n;if(!Mr||!pe)return Promise.resolve();const me=!se&&Ox(Nf(V.fullPath,0))||(fe||!se)&&history.state&&history.state.scroll||null;return wp().then(()=>pe(V,B,me)).then(_e=>_e&&Nx(_e)).catch(_e=>H(_e,V,B))}const le=V=>r.go(V);let ce;const Ae=new Set;return{currentRoute:l,addRoute:d,removeRoute:g,hasRoute:x,getRoutes:v,resolve:p,options:n,push:w,replace:E,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:W.add,isReady:D,install(V){const B=this;V.component("RouterLink",__),V.component("RouterView",w_),V.config.globalProperties.$router=B,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>As(l)}),Mr&&!ce&&l.value===jn&&(ce=!0,w(r.location).catch(pe=>{}));const se={};for(const pe in jn)se[pe]=ht(()=>l.value[pe]);V.provide(mu,B),V.provide(Zp,oa(se)),V.provide(mc,l);const fe=V.unmount;Ae.add(V),V.unmount=function(){Ae.delete(V),Ae.size<1&&(c=jn,C&&C(),l.value=jn,ce=!1,G=!1),fe()}}}}function Qi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function S_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Br(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Br(c,l))||r.push(l))}return[t,i,r]}/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function jf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Se(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?jf(Object(t),!0).forEach(function(i){A_(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):jf(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function mo(n){return mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mo(n)}function E_(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function qf(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function T_(n,e,t){return e&&qf(n.prototype,e),t&&qf(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function A_(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function vu(n,e){return C_(n)||P_(n,e)||cm(n,e)||D_()}function Fo(n){return R_(n)||L_(n)||cm(n)||I_()}function R_(n){if(Array.isArray(n))return xc(n)}function C_(n){if(Array.isArray(n))return n}function L_(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function P_(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,a,o;try{for(t=t.call(n);!(r=(a=t.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw o}}return i}}function cm(n,e){if(!!n){if(typeof n=="string")return xc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xc(n,e)}}function xc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function I_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xf=function(){},xu={},um={},fm=null,hm={mark:Xf,measure:Xf};try{typeof window!="undefined"&&(xu=window),typeof document!="undefined"&&(um=document),typeof MutationObserver!="undefined"&&(fm=MutationObserver),typeof performance!="undefined"&&(hm=performance)}catch{}var N_=xu.navigator||{},Yf=N_.userAgent,Kf=Yf===void 0?"":Yf,gi=xu,st=um,$f=fm,xa=hm;gi.document;var Gn=!!st.documentElement&&!!st.head&&typeof st.addEventListener=="function"&&typeof st.createElement=="function",dm=~Kf.indexOf("MSIE")||~Kf.indexOf("Trident/"),kn="___FONT_AWESOME___",_c=16,pm="fa",mm="svg-inline--fa",Bi="data-fa-i2svg",yc="data-fa-pseudo-element",F_="data-fa-pseudo-element-pending",_u="data-prefix",yu="data-icon",Jf="fontawesome-i2svg",O_="async",k_=["HTML","HEAD","STYLE","SCRIPT"],gm=function(){try{return!0}catch{return!1}}(),bu={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},go={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},vm={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},B_={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},z_=/fa[srltdbk\-\ ]/,xm="fa-layers-text",U_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,H_={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},_m=[1,2,3,4,5,6,7,8,9,10],G_=_m.concat([11,12,13,14,15,16,17,18,19,20]),V_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Di={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},W_=[].concat(Fo(Object.keys(go)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Di.GROUP,Di.SWAP_OPACITY,Di.PRIMARY,Di.SECONDARY]).concat(_m.map(function(n){return"".concat(n,"x")})).concat(G_.map(function(n){return"w-".concat(n)})),ym=gi.FontAwesomeConfig||{};function j_(n){var e=st.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function q_(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(st&&typeof st.querySelector=="function"){var X_=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];X_.forEach(function(n){var e=vu(n,2),t=e[0],i=e[1],r=q_(j_(t));r!=null&&(ym[i]=r)})}var Y_={familyPrefix:pm,styleDefault:"solid",replacementClass:mm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ns=Se(Se({},Y_),ym);Ns.autoReplaceSvg||(Ns.observeMutations=!1);var Pe={};Object.keys(Ns).forEach(function(n){Object.defineProperty(Pe,n,{enumerable:!0,set:function(t){Ns[n]=t,no.forEach(function(i){return i(Pe)})},get:function(){return Ns[n]}})});gi.FontAwesomeConfig=Pe;var no=[];function K_(n){return no.push(n),function(){no.splice(no.indexOf(n),1)}}var Xn=_c,vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $_(n){if(!(!n||!Gn)){var e=st.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=st.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return st.head.insertBefore(e,i),n}}var J_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ks(){for(var n=12,e="";n-- >0;)e+=J_[Math.random()*62|0];return e}function Qr(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Mu(n){return n.classList?Qr(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function bm(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Z_(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(bm(n[t]),'" ')},"").trim()}function Oo(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function wu(n){return n.size!==vn.size||n.x!==vn.x||n.y!==vn.y||n.rotate!==vn.rotate||n.flipX||n.flipY}function Q_(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function ey(n){var e=n.transform,t=n.width,i=t===void 0?_c:t,r=n.height,s=r===void 0?_c:r,a=n.startCentered,o=a===void 0?!1:a,l="";return o&&dm?l+="translate(".concat(e.x/Xn-i/2,"em, ").concat(e.y/Xn-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Xn,"em), calc(-50% + ").concat(e.y/Xn,"em)) "):l+="translate(".concat(e.x/Xn,"em, ").concat(e.y/Xn,"em) "),l+="scale(".concat(e.size/Xn*(e.flipX?-1:1),", ").concat(e.size/Xn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ty=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Mm(){var n=pm,e=mm,t=Pe.familyPrefix,i=Pe.replacementClass,r=ty;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),a=new RegExp("\\--".concat(n,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(i))}return r}var Zf=!1;function ul(){Pe.autoAddCss&&!Zf&&($_(Mm()),Zf=!0)}var ny={mixout:function(){return{dom:{css:Mm,insertCss:ul}}},hooks:function(){return{beforeDOMElementCreation:function(){ul()},beforeI2svg:function(){ul()}}}},Bn=gi||{};Bn[kn]||(Bn[kn]={});Bn[kn].styles||(Bn[kn].styles={});Bn[kn].hooks||(Bn[kn].hooks={});Bn[kn].shims||(Bn[kn].shims=[]);var nn=Bn[kn],wm=[],iy=function n(){st.removeEventListener("DOMContentLoaded",n),vo=1,wm.map(function(e){return e()})},vo=!1;Gn&&(vo=(st.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(st.readyState),vo||st.addEventListener("DOMContentLoaded",iy));function ry(n){!Gn||(vo?setTimeout(n,0):wm.push(n))}function ca(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?bm(n):"<".concat(e," ").concat(Z_(i),">").concat(s.map(ca).join(""),"</").concat(e,">")}function Qf(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var sy=function(e,t){return function(i,r,s,a){return e.call(t,i,r,s,a)}},fl=function(e,t,i,r){var s=Object.keys(e),a=s.length,o=r!==void 0?sy(t,r):t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function ay(n){for(var e=[],t=0,i=n.length;t<i;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){var s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function bc(n){var e=ay(n);return e.length===1?e[0].toString(16):null}function oy(n,e){var t=n.length,i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function eh(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function Mc(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=eh(e);typeof nn.hooks.addPack=="function"&&!r?nn.hooks.addPack(n,eh(e)):nn.styles[n]=Se(Se({},nn.styles[n]||{}),s),n==="fas"&&Mc("fa",e)}var Fs=nn.styles,ly=nn.shims,cy=Object.values(vm),Su=null,Sm={},Em={},Tm={},Am={},Rm={},uy=Object.keys(bu);function fy(n){return~W_.indexOf(n)}function hy(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!fy(r)?r:null}var Cm=function(){var e=function(s){return fl(Fs,function(a,o,l){return a[l]=fl(o,s,{}),a},{})};Sm=e(function(r,s,a){if(s[3]&&(r[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=a})}return r}),Em=e(function(r,s,a){if(r[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=a})}return r}),Rm=e(function(r,s,a){var o=s[2];return r[a]=a,o.forEach(function(l){r[l]=a}),r});var t="far"in Fs||Pe.autoFetchSvg,i=fl(ly,function(r,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Tm=i.names,Am=i.unicodes,Su=ko(Pe.styleDefault)};K_(function(n){Su=ko(n.styleDefault)});Cm();function Eu(n,e){return(Sm[n]||{})[e]}function dy(n,e){return(Em[n]||{})[e]}function Er(n,e){return(Rm[n]||{})[e]}function Lm(n){return Tm[n]||{prefix:null,iconName:null}}function py(n){var e=Am[n],t=Eu("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function vi(){return Su}var Tu=function(){return{prefix:null,iconName:null,rest:[]}};function ko(n){var e=bu[n],t=go[n]||go[e],i=n in nn.styles?n:null;return t||i||null}function Bo(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,i=t===void 0?!1:t,r=null,s=n.reduce(function(a,o){var l=hy(Pe.familyPrefix,o);if(Fs[o]?(o=cy.includes(o)?B_[o]:o,r=o,a.prefix=o):uy.indexOf(o)>-1?(r=o,a.prefix=ko(o)):l?a.iconName=l:o!==Pe.replacementClass&&a.rest.push(o),!i&&a.prefix&&a.iconName){var c=r==="fa"?Lm(a.iconName):{},u=Er(a.prefix,a.iconName);c.prefix&&(r=null),a.iconName=c.iconName||u||a.iconName,a.prefix=c.prefix||a.prefix,a.prefix==="far"&&!Fs.far&&Fs.fas&&!Pe.autoFetchSvg&&(a.prefix="fas")}return a},Tu());return(s.prefix==="fa"||r==="fa")&&(s.prefix=vi()||"fas"),s}var my=function(){function n(){E_(this,n),this.definitions={}}return T_(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=Se(Se({},t.definitions[o]||{}),a[o]),Mc(o,a[o]);var l=vm[o];l&&Mc(l,a[o]),Cm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];t[o]||(t[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(t[o][f]=c)}),t[o][l]=c}),t}}]),n}(),th=[],Tr={},Dr={},gy=Object.keys(Dr);function vy(n,e){var t=e.mixoutsTo;return th=n,Tr={},Object.keys(Dr).forEach(function(i){gy.indexOf(i)===-1&&delete Dr[i]}),th.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(t[a]=r[a]),mo(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){t[a]||(t[a]={}),t[a][o]=r[a][o]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(a){Tr[a]||(Tr[a]=[]),Tr[a].push(s[a])})}i.provides&&i.provides(Dr)}),t}function wc(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var s=Tr[n]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(i))}),e}function zi(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=Tr[n]||[];r.forEach(function(s){s.apply(null,t)})}function zn(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Dr[n]?Dr[n].apply(null,e):void 0}function Sc(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||vi();if(!!e)return e=Er(t,e)||e,Qf(Pm.definitions,t,e)||Qf(nn.styles,t,e)}var Pm=new my,xy=function(){Pe.autoReplaceSvg=!1,Pe.observeMutations=!1,zi("noAuto")},_y={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gn?(zi("beforeI2svg",e),zn("pseudoElements2svg",e),zn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;Pe.autoReplaceSvg===!1&&(Pe.autoReplaceSvg=!0),Pe.observeMutations=!0,ry(function(){by({autoReplaceSvgRoot:t}),zi("watch",e)})}},yy={icon:function(e){if(e===null)return null;if(mo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Er(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=ko(e[0]);return{prefix:i,iconName:Er(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(Pe.familyPrefix,"-"))>-1||e.match(z_))){var r=Bo(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||vi(),iconName:Er(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=vi();return{prefix:s,iconName:Er(s,e)||e}}}},Xt={noAuto:xy,config:Pe,dom:_y,parse:yy,library:Pm,findIconDefinition:Sc,toHtml:ca},by=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?st:t;(Object.keys(nn.styles).length>0||Pe.autoFetchSvg)&&Gn&&Pe.autoReplaceSvg&&Xt.dom.i2svg({node:i})};function zo(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return ca(i)})}}),Object.defineProperty(n,"node",{get:function(){if(!!Gn){var i=st.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function My(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,a=n.transform;if(wu(a)&&t.found&&!i.found){var o=t.width,l=t.height,c={x:o/l/2,y:.5};r.style=Oo(Se(Se({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function wy(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,a=s===!0?"".concat(e,"-").concat(Pe.familyPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Se(Se({},r),{},{id:a}),children:i}]}]}function Au(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,a=n.transform,o=n.symbol,l=n.title,c=n.maskId,u=n.titleId,f=n.extra,h=n.watchable,d=h===void 0?!1:h,g=i.found?i:t,v=g.width,x=g.height,p=r==="fak",m=[Pe.replacementClass,s?"".concat(Pe.familyPrefix,"-").concat(s):""].filter(function(Z){return f.classes.indexOf(Z)===-1}).filter(function(Z){return Z!==""||!!Z}).concat(f.classes).join(" "),S={children:[],attributes:Se(Se({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(x)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/x*16*.0625,"em")}:{};d&&(S.attributes[Bi]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Ks())},children:[l]}),delete S.attributes.title);var E=Se(Se({},S),{},{prefix:r,iconName:s,main:t,mask:i,maskId:c,transform:a,symbol:o,styles:Se(Se({},w),f.styles)}),L=i.found&&t.found?zn("generateAbstractMask",E)||{children:[],attributes:{}}:zn("generateAbstractIcon",E)||{children:[],attributes:{}},I=L.children,K=L.attributes;return E.children=I,E.attributes=K,o?wy(E):My(E)}function nh(n){var e=n.content,t=n.width,i=n.height,r=n.transform,s=n.title,a=n.extra,o=n.watchable,l=o===void 0?!1:o,c=Se(Se(Se({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(c[Bi]="");var u=Se({},a.styles);wu(r)&&(u.transform=ey({transform:r,startCentered:!0,width:t,height:i}),u["-webkit-transform"]=u.transform);var f=Oo(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Sy(n){var e=n.content,t=n.title,i=n.extra,r=Se(Se(Se({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),s=Oo(i.styles);s.length>0&&(r.style=s);var a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}var hl=nn.styles;function Ec(n){var e=n[0],t=n[1],i=n.slice(4),r=vu(i,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(Pe.familyPrefix,"-").concat(Di.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Pe.familyPrefix,"-").concat(Di.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Pe.familyPrefix,"-").concat(Di.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:a}}var Ey={found:!1,width:512,height:512};function Ty(n,e){!gm&&!Pe.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Tc(n,e){var t=e;return e==="fa"&&Pe.styleDefault!==null&&(e=vi()),new Promise(function(i,r){if(zn("missingIconAbstract"),t==="fa"){var s=Lm(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&hl[e]&&hl[e][n]){var a=hl[e][n];return i(Ec(a))}Ty(n,e),i(Se(Se({},Ey),{},{icon:Pe.showMissingIcons&&n?zn("missingIconAbstract")||{}:{}}))})}var ih=function(){},Ac=Pe.measurePerformance&&xa&&xa.mark&&xa.measure?xa:{mark:ih,measure:ih},Ms='FA "6.0.0"',Ay=function(e){return Ac.mark("".concat(Ms," ").concat(e," begins")),function(){return Im(e)}},Im=function(e){Ac.mark("".concat(Ms," ").concat(e," ends")),Ac.measure("".concat(Ms," ").concat(e),"".concat(Ms," ").concat(e," begins"),"".concat(Ms," ").concat(e," ends"))},Ru={begin:Ay,end:Im},io=function(){};function rh(n){var e=n.getAttribute?n.getAttribute(Bi):null;return typeof e=="string"}function Ry(n){var e=n.getAttribute?n.getAttribute(_u):null,t=n.getAttribute?n.getAttribute(yu):null;return e&&t}function Cy(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(Pe.replacementClass)}function Ly(){if(Pe.autoReplaceSvg===!0)return ro.replace;var n=ro[Pe.autoReplaceSvg];return n||ro.replace}function Py(n){return st.createElementNS("http://www.w3.org/2000/svg",n)}function Iy(n){return st.createElement(n)}function Dm(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?Py:Iy:t;if(typeof n=="string")return st.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(a){r.setAttribute(a,n.attributes[a])});var s=n.children||[];return s.forEach(function(a){r.appendChild(Dm(a,{ceFn:i}))}),r}function Dy(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ro={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(Dm(r),t)}),t.getAttribute(Bi)===null&&Pe.keepOriginalSource){var i=st.createComment(Dy(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~Mu(t).indexOf(Pe.replacementClass))return ro.replace(e);var r=new RegExp("".concat(Pe.familyPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(o,l){return l===Pe.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var a=i.map(function(o){return ca(o)}).join(`
`);t.setAttribute(Bi,""),t.innerHTML=a}};function sh(n){n()}function Nm(n,e){var t=typeof e=="function"?e:io;if(n.length===0)t();else{var i=sh;Pe.mutateApproach===O_&&(i=gi.requestAnimationFrame||sh),i(function(){var r=Ly(),s=Ru.begin("mutate");n.map(r),s(),t()})}}var Cu=!1;function Fm(){Cu=!0}function Rc(){Cu=!1}var xo=null;function ah(n){if(!!$f&&!!Pe.observeMutations){var e=n.treeCallback,t=e===void 0?io:e,i=n.nodeCallback,r=i===void 0?io:i,s=n.pseudoElementsCallback,a=s===void 0?io:s,o=n.observeMutationsRoot,l=o===void 0?st:o;xo=new $f(function(c){if(!Cu){var u=vi();Qr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!rh(f.addedNodes[0])&&(Pe.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&Pe.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&rh(f.target)&&~V_.indexOf(f.attributeName))if(f.attributeName==="class"&&Ry(f.target)){var h=Bo(Mu(f.target)),d=h.prefix,g=h.iconName;f.target.setAttribute(_u,d||u),g&&f.target.setAttribute(yu,g)}else Cy(f.target)&&r(f.target)})}}),Gn&&xo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ny(){!xo||xo.disconnect()}function Fy(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),t}function Oy(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=Bo(Mu(n));return r.prefix||(r.prefix=vi()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||r.prefix&&i.length>0&&(r.iconName=dy(r.prefix,n.innerText)||Eu(r.prefix,bc(n.innerText))),r}function ky(n){var e=Qr(n.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return Pe.autoA11y&&(t?e["aria-labelledby"]="".concat(Pe.replacementClass,"-title-").concat(i||Ks()):(e["aria-hidden"]="true",e.focusable="false")),e}function By(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Oy(n),i=t.iconName,r=t.prefix,s=t.rest,a=ky(n),o=wc("parseNodeAttributes",{},n),l=e.styleParser?Fy(n):[];return Se({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var zy=nn.styles;function Om(n){var e=Pe.autoReplaceSvg==="nest"?oh(n,{styleParser:!1}):oh(n);return~e.extra.classes.indexOf(xm)?zn("generateLayersText",n,e):zn("generateSvgReplacementMutation",n,e)}function lh(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gn)return Promise.resolve();var t=st.documentElement.classList,i=function(f){return t.add("".concat(Jf,"-").concat(f))},r=function(f){return t.remove("".concat(Jf,"-").concat(f))},s=Pe.autoFetchSvg?Object.keys(bu):Object.keys(zy),a=[".".concat(xm,":not([").concat(Bi,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Bi,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Qr(n.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Ru.begin("onTree"),c=o.reduce(function(u,f){try{var h=Om(f);h&&u.push(h)}catch(d){gm||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){Nm(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function Uy(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Om(n).then(function(t){t&&Nm([t],e)})}function Hy(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Sc(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Sc(r||{})),n(i,Se(Se({},t),{},{mask:r}))}}var Gy=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?vn:i,s=t.symbol,a=s===void 0?!1:s,o=t.mask,l=o===void 0?null:o,c=t.maskId,u=c===void 0?null:c,f=t.title,h=f===void 0?null:f,d=t.titleId,g=d===void 0?null:d,v=t.classes,x=v===void 0?[]:v,p=t.attributes,m=p===void 0?{}:p,S=t.styles,w=S===void 0?{}:S;if(!!e){var E=e.prefix,L=e.iconName,I=e.icon;return zo(Se({type:"icon"},e),function(){return zi("beforeDOMElementCreation",{iconDefinition:e,params:t}),Pe.autoA11y&&(h?m["aria-labelledby"]="".concat(Pe.replacementClass,"-title-").concat(g||Ks()):(m["aria-hidden"]="true",m.focusable="false")),Au({icons:{main:Ec(I),mask:l?Ec(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:L,transform:Se(Se({},vn),r),symbol:a,title:h,maskId:u,titleId:g,extra:{attributes:m,styles:w,classes:x}})})}},Vy={mixout:function(){return{icon:Hy(Gy)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=lh,t.nodeCallback=Uy,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?st:i,s=t.callback,a=s===void 0?function(){}:s;return lh(r,a)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,s=i.title,a=i.titleId,o=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(d,g){Promise.all([Tc(r,o),u.iconName?Tc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=vu(v,2),p=x[0],m=x[1];d([t,Au({icons:{main:p,mask:m},prefix:o,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:a,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.transform,o=t.styles,l=Oo(o);l.length>0&&(r.style=l);var c;return wu(a)&&(c=zn("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},Wy={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return zo({type:"layer"},function(){zi("beforeDOMElementCreation",{assembler:t,params:i});var a=[];return t(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(Pe.familyPrefix,"-layers")].concat(Fo(s)).join(" ")},children:a}]})}}}},jy={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,a=i.classes,o=a===void 0?[]:a,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return zo({type:"counter",content:t},function(){return zi("beforeDOMElementCreation",{content:t,params:i}),Sy({content:t.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(Pe.familyPrefix,"-layers-counter")].concat(Fo(o))}})})}}}},qy={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?vn:r,a=i.title,o=a===void 0?null:a,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,d=h===void 0?{}:h;return zo({type:"text",content:t},function(){return zi("beforeDOMElementCreation",{content:t,params:i}),nh({content:t,transform:Se(Se({},vn),s),title:o,extra:{attributes:f,styles:d,classes:["".concat(Pe.familyPrefix,"-layers-text")].concat(Fo(c))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.title,s=i.transform,a=i.extra,o=null,l=null;if(dm){var c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/c,l=u.height/c}return Pe.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,nh({content:t.innerHTML,width:o,height:l,transform:s,title:r,extra:a,watchable:!0})])}}},Xy=new RegExp('"',"ug"),ch=[1105920,1112319];function Yy(n){var e=n.replace(Xy,""),t=oy(e,0),i=t>=ch[0]&&t<=ch[1],r=e.length===2?e[0]===e[1]:!1;return{value:bc(r?e[0]:e),isSecondary:i||r}}function uh(n,e){var t="".concat(F_).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var s=Qr(n.children),a=s.filter(function(L){return L.getAttribute(yc)===e})[0],o=gi.getComputedStyle(n,e),l=o.getPropertyValue("font-family").match(U_),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!l)return n.removeChild(a),i();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?go[l[2].toLowerCase()]:H_[c],d=Yy(f),g=d.value,v=d.isSecondary,x=l[0].startsWith("FontAwesome"),p=Eu(h,g),m=p;if(x){var S=py(g);S.iconName&&S.prefix&&(p=S.iconName,h=S.prefix)}if(p&&!v&&(!a||a.getAttribute(_u)!==h||a.getAttribute(yu)!==m)){n.setAttribute(t,m),a&&n.removeChild(a);var w=By(),E=w.extra;E.attributes[yc]=e,Tc(p,h).then(function(L){var I=Au(Se(Se({},w),{},{icons:{main:L,mask:Tu()},prefix:h,iconName:m,extra:E,watchable:!0})),K=st.createElement("svg");e==="::before"?n.insertBefore(K,n.firstChild):n.appendChild(K),K.outerHTML=I.map(function(Z){return ca(Z)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function Ky(n){return Promise.all([uh(n,"::before"),uh(n,"::after")])}function $y(n){return n.parentNode!==document.head&&!~k_.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(yc)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function fh(n){if(!!Gn)return new Promise(function(e,t){var i=Qr(n.querySelectorAll("*")).filter($y).map(Ky),r=Ru.begin("searchPseudoElements");Fm(),Promise.all(i).then(function(){r(),Rc(),e()}).catch(function(){r(),Rc(),t()})})}var Jy={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=fh,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?st:i;Pe.searchPseudoElements&&fh(r)}}},hh=!1,Zy={mixout:function(){return{dom:{unwatch:function(){Fm(),hh=!0}}}},hooks:function(){return{bootstrap:function(){ah(wc("mutationObserverCallbacks",{}))},noAuto:function(){Ny()},watch:function(t){var i=t.observeMutationsRoot;hh?Rc():ah(wc("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},dh=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return i.flipX=!0,i;if(a&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(a){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},t)},Qy={mixout:function(){return{parse:{transform:function(t){return dh(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=dh(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,s=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(a/2*-1," -256)")},d={outer:o,inner:f,path:h};return{tag:"g",attributes:Se({},d.outer),children:[{tag:"g",attributes:Se({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Se(Se({},i.icon.attributes),d.path)}]}]}}}},dl={x:0,y:0,width:"100%",height:"100%"};function ph(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function e1(n){return n.tag==="g"?n.children:[n]}var t1={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),s=r?Bo(r.split(" ").map(function(a){return a.trim()})):Tu();return s.prefix||(s.prefix=vi()),t.mask=s,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,s=t.main,a=t.mask,o=t.maskId,l=t.transform,c=s.width,u=s.icon,f=a.width,h=a.icon,d=Q_({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:Se(Se({},dl),{},{fill:"white"})},v=u.children?{children:u.children.map(ph)}:{},x={tag:"g",attributes:Se({},d.inner),children:[ph(Se({tag:u.tag,attributes:Se(Se({},u.attributes),d.path)},v))]},p={tag:"g",attributes:Se({},d.outer),children:[x]},m="mask-".concat(o||Ks()),S="clip-".concat(o||Ks()),w={tag:"mask",attributes:Se(Se({},dl),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:e1(h)},w]};return i.push(E,{tag:"rect",attributes:Se({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(m,")")},dl)}),{children:i,attributes:r}}}},n1={provides:function(e){var t=!1;gi.matchMedia&&(t=gi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Se(Se({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=Se(Se({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Se(Se({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:Se(Se({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Se(Se({},a),{},{values:"1;0;1;1;0;1;"})}),i.push(o),i.push({tag:"path",attributes:Se(Se({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Se(Se({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:Se(Se({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Se(Se({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},i1={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},r1=[ny,Vy,Wy,jy,qy,Jy,Zy,Qy,t1,n1,i1];vy(r1,{mixoutsTo:Xt});Xt.noAuto;var km=Xt.config,y3=Xt.library;Xt.dom;var Bm=Xt.parse;Xt.findIconDefinition;Xt.toHtml;var s1=Xt.icon;Xt.layer;var a1=Xt.text;Xt.counter;/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var b3={prefix:"fab",iconName:"amazon-pay",icon:[640,512,[],"f42c","M14 325.3c2.3-4.2 5.2-4.9 9.7-2.5 10.4 5.6 20.6 11.4 31.2 16.7a595.9 595.9 0 0 0 127.4 46.3 616.6 616.6 0 0 0 63.2 11.8 603.3 603.3 0 0 0 95 5.2c17.4-.4 34.8-1.8 52.1-3.8a603.7 603.7 0 0 0 163.3-42.8c2.9-1.2 5.9-2 9.1-1.2 6.7 1.8 9 9 4.1 13.9a70 70 0 0 1 -9.6 7.4c-30.7 21.1-64.2 36.4-99.6 47.9a473.3 473.3 0 0 1 -75.1 17.6 431 431 0 0 1 -53.2 4.8 21.3 21.3 0 0 0 -2.5 .3H308a21.3 21.3 0 0 0 -2.5-.3c-3.6-.2-7.2-.3-10.7-.4a426.3 426.3 0 0 1 -50.4-5.3A448.4 448.4 0 0 1 164 420a443.3 443.3 0 0 1 -145.6-87c-1.8-1.6-3-3.8-4.4-5.7zM172 65.1l-4.3 .6a80.92 80.92 0 0 0 -38 15.1c-2.4 1.7-4.6 3.5-7.1 5.4a4.29 4.29 0 0 1 -.4-1.4c-.4-2.7-.8-5.5-1.3-8.2-.7-4.6-3-6.6-7.6-6.6h-11.5c-6.9 0-8.2 1.3-8.2 8.2v209.3c0 1 0 2 .1 3 .2 3 2 4.9 4.9 5 7 .1 14.1 .1 21.1 0 2.9 0 4.7-2 5-5 .1-1 .1-2 .1-3v-72.4c1.1 .9 1.7 1.4 2.2 1.9 17.9 14.9 38.5 19.8 61 15.4 20.4-4 34.6-16.5 43.8-34.9 7-13.9 9.9-28.7 10.3-44.1 .5-17.1-1.2-33.9-8.1-49.8-8.5-19.6-22.6-32.5-43.9-36.9-3.2-.7-6.5-1-9.8-1.5-2.8-.1-5.5-.1-8.3-.1zM124.6 107a3.48 3.48 0 0 1 1.7-3.3c13.7-9.5 28.8-14.5 45.6-13.2 14.9 1.1 27.1 8.4 33.5 25.9 3.9 10.7 4.9 21.8 4.9 33 0 10.4-.8 20.6-4 30.6-6.8 21.3-22.4 29.4-42.6 28.5-14-.6-26.2-6-37.4-13.9a3.57 3.57 0 0 1 -1.7-3.3c.1-14.1 0-28.1 0-42.2s.1-28 0-42.1zm205.7-41.9c-1 .1-2 .3-2.9 .4a148 148 0 0 0 -28.9 4.1c-6.1 1.6-12 3.8-17.9 5.8-3.6 1.2-5.4 3.8-5.3 7.7 .1 3.3-.1 6.6 0 9.9 .1 4.8 2.1 6.1 6.8 4.9 7.8-2 15.6-4.2 23.5-5.7 12.3-2.3 24.7-3.3 37.2-1.4 6.5 1 12.6 2.9 16.8 8.4 3.7 4.8 5.1 10.5 5.3 16.4 .3 8.3 .2 16.6 .3 24.9a7.84 7.84 0 0 1 -.2 1.4c-.5-.1-.9 0-1.3-.1a180.6 180.6 0 0 0 -32-4.9c-11.3-.6-22.5 .1-33.3 3.9-12.9 4.5-23.3 12.3-29.4 24.9-4.7 9.8-5.4 20.2-3.9 30.7 2 14 9 24.8 21.4 31.7 11.9 6.6 24.8 7.4 37.9 5.4 15.1-2.3 28.5-8.7 40.3-18.4a7.36 7.36 0 0 1 1.6-1.1c.6 3.8 1.1 7.4 1.8 11 .6 3.1 2.5 5.1 5.4 5.2 5.4 .1 10.9 .1 16.3 0a4.84 4.84 0 0 0 4.8-4.7 26.2 26.2 0 0 0 .1-2.8v-106a80 80 0 0 0 -.9-12.9c-1.9-12.9-7.4-23.5-19-30.4-6.7-4-14.1-6-21.8-7.1-3.6-.5-7.2-.8-10.8-1.3-3.9 .1-7.9 .1-11.9 .1zm35 127.7a3.33 3.33 0 0 1 -1.5 3c-11.2 8.1-23.5 13.5-37.4 14.9-5.7 .6-11.4 .4-16.8-1.8a20.08 20.08 0 0 1 -12.4-13.3 32.9 32.9 0 0 1 -.1-19.4c2.5-8.3 8.4-13 16.4-15.6a61.33 61.33 0 0 1 24.8-2.2c8.4 .7 16.6 2.3 25 3.4 1.6 .2 2.1 1 2.1 2.6-.1 4.8 0 9.5 0 14.3s-.2 9.4-.1 14.1zm259.9 129.4c-1-5-4.8-6.9-9.1-8.3a88.42 88.42 0 0 0 -21-3.9 147.3 147.3 0 0 0 -39.2 1.9c-14.3 2.7-27.9 7.3-40 15.6a13.75 13.75 0 0 0 -3.7 3.5 5.11 5.11 0 0 0 -.5 4c.4 1.5 2.1 1.9 3.6 1.8a16.2 16.2 0 0 0 2.2-.1c7.8-.8 15.5-1.7 23.3-2.5 11.4-1.1 22.9-1.8 34.3-.9a71.64 71.64 0 0 1 14.4 2.7c5.1 1.4 7.4 5.2 7.6 10.4 .4 8-1.4 15.7-3.5 23.3-4.1 15.4-10 30.3-15.8 45.1a17.6 17.6 0 0 0 -1 3c-.5 2.9 1.2 4.8 4.1 4.1a10.56 10.56 0 0 0 4.8-2.5 145.9 145.9 0 0 0 12.7-13.4c12.8-16.4 20.3-35.3 24.7-55.6 .8-3.6 1.4-7.3 2.1-10.9v-17.3zM493.1 199q-19.35-53.55-38.7-107.2c-2-5.7-4.2-11.3-6.3-16.9-1.1-2.9-3.2-4.8-6.4-4.8-7.6-.1-15.2-.2-22.9-.1-2.5 0-3.7 2-3.2 4.5a43.1 43.1 0 0 0 1.9 6.1q29.4 72.75 59.1 145.5c1.7 4.1 2.1 7.6 .2 11.8-3.3 7.3-5.9 15-9.3 22.3-3 6.5-8 11.4-15.2 13.3a42.13 42.13 0 0 1 -15.4 1.1c-2.5-.2-5-.8-7.5-1-3.4-.2-5.1 1.3-5.2 4.8q-.15 5 0 9.9c.1 5.5 2 8 7.4 8.9a108.2 108.2 0 0 0 16.9 2c17.1 .4 30.7-6.5 39.5-21.4a131.6 131.6 0 0 0 9.2-18.4q35.55-89.7 70.6-179.6a26.62 26.62 0 0 0 1.6-5.5c.4-2.8-.9-4.4-3.7-4.4-6.6-.1-13.3 0-19.9 0a7.54 7.54 0 0 0 -7.7 5.2c-.5 1.4-1.1 2.7-1.6 4.1l-34.8 100c-2.5 7.2-5.1 14.5-7.7 22.2-.4-1.1-.6-1.7-.9-2.4z"]},M3={prefix:"fab",iconName:"apple-pay",icon:[640,512,[],"f415","M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9 .3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5 .1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8 .4 9.3 .7 11.6 .7z"]},w3={prefix:"fab",iconName:"btc",icon:[384,512,[],"f15a","M310.2 242.6c27.73-14.18 45.38-39.39 41.28-81.3-5.358-57.35-52.46-76.57-114.8-81.93V0h-48.53v77.2c-12.6 0-25.52 .315-38.44 .63V0h-48.53v79.41c-17.84 .539-38.62 .276-97.37 0v51.68c38.31-.678 58.42-3.14 63.02 21.43v217.4c-2.925 19.49-18.52 16.68-53.26 16.07L3.765 443.7c88.48 0 97.37 .315 97.37 .315V512h48.53v-67.06c13.23 .315 26.15 .315 38.44 .315V512h48.53v-68c81.3-4.412 135.6-24.89 142.9-101.5 5.671-61.45-23.32-88.86-69.33-99.89zM150.6 134.6c27.42 0 113.1-8.507 113.1 48.53 0 54.51-85.71 48.21-113.1 48.21v-96.74zm0 251.8V279.8c32.77 0 133.1-9.138 133.1 53.26-.001 60.19-100.4 53.25-133.1 53.25z"]},S3={prefix:"fab",iconName:"cc-mastercard",icon:[576,512,[],"f1f1","M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8 .3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3 .3 .5 .3 1.1 0 .3-.3 .5-.3 1.1-.3 .3-.3 .5-.5 .8-.3 .3-.5 .5-1.1 .5-.3 .3-.5 .3-1.1 .3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8 .3-1.1 0-.5 .3-.8 .5-1.1 .3-.3 .5-.3 .8-.5 .5-.3 .8-.3 1.1-.3 .5 0 .8 0 1.1 .3 .5 .3 .8 .3 1.1 .5s.2 .6 .5 1.1zm-2.2 1.4c.5 0 .5-.3 .8-.3 .3-.3 .3-.5 .3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7 .8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8 .3-1.4 .3-.5 .3-.8 .5-1.1 .8-.5 .3-.8 .8-.8 1.1-.3 .5-.3 1.1-.3 1.6 0 .3 0 .8 .3 1.4 0 .3 .3 .8 .8 1.1 .3 .3 .5 .5 1.1 .8 .5 .3 1.1 .3 1.4 .3 .5 0 1.1 0 1.6-.3 .3-.3 .8-.5 1.1-.8 .3-.3 .5-.8 .8-1.1 .3-.6 .3-1.1 .3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4 .1 138.5-61.9 138.5-138.4z"]},E3={prefix:"fab",iconName:"cc-visa",icon:[576,512,[],"f1f0","M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"]},T3={prefix:"fab",iconName:"dhl",icon:[640,512,[],"f790","M238 301.2h58.7L319 271h-58.7L238 301.2zM0 282.9v6.4h81.8l4.7-6.4H0zM172.9 271c-8.7 0-6-3.6-4.6-5.5 2.8-3.8 7.6-10.4 10.4-14.1 2.8-3.7 2.8-5.9-2.8-5.9h-51l-41.1 55.8h100.1c33.1 0 51.5-22.5 57.2-30.3h-68.2zm317.5-6.9l39.3-53.4h-62.2l-39.3 53.4h62.2zM95.3 271H0v6.4h90.6l4.7-6.4zm111-26.6c-2.8 3.8-7.5 10.4-10.3 14.2-1.4 2-4.1 5.5 4.6 5.5h45.6s7.3-10 13.5-18.4c8.4-11.4 .7-35-29.2-35H112.6l-20.4 27.8h111.4c5.6 0 5.5 2.2 2.7 5.9zM0 301.2h73.1l4.7-6.4H0v6.4zm323 0h58.7L404 271h-58.7c-.1 0-22.3 30.2-22.3 30.2zm222 .1h95v-6.4h-90.3l-4.7 6.4zm22.3-30.3l-4.7 6.4H640V271h-72.7zm-13.5 18.3H640v-6.4h-81.5l-4.7 6.4zm-164.2-78.6l-22.5 30.6h-26.2l22.5-30.6h-58.7l-39.3 53.4H409l39.3-53.4h-58.7zm33.5 60.3s-4.3 5.9-6.4 8.7c-7.4 10-.9 21.6 23.2 21.6h94.3l22.3-30.3H423.1z"]},A3={prefix:"fab",iconName:"ethereum",icon:[320,512,[],"f42e","M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"]},R3={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"]},C3={prefix:"fab",iconName:"fedex",icon:[640,512,[],"f797","M586 284.5l53.3-59.9h-62.4l-21.7 24.8-22.5-24.8H414v-16h56.1v-48.1H318.9V236h-.5c-9.6-11-21.5-14.8-35.4-14.8-28.4 0-49.8 19.4-57.3 44.9-18-59.4-97.4-57.6-121.9-14v-24.2H49v-26.2h60v-41.1H0V345h49v-77.5h48.9c-1.5 5.7-2.3 11.8-2.3 18.2 0 73.1 102.6 91.4 130.2 23.7h-42c-14.7 20.9-45.8 8.9-45.8-14.6h85.5c3.7 30.5 27.4 56.9 60.1 56.9 14.1 0 27-6.9 34.9-18.6h.5V345h212.2l22.1-25 22.3 25H640l-54-60.5zm-446.7-16.6c6.1-26.3 41.7-25.6 46.5 0h-46.5zm153.4 48.9c-34.6 0-34-62.8 0-62.8 32.6 0 34.5 62.8 0 62.8zm167.8 19.1h-94.4V169.4h95v30.2H405v33.9h55.5v28.1h-56.1v44.7h56.1v29.6zm-45.9-39.8v-24.4h56.1v-44l50.7 57-50.7 57v-45.6h-56.1zm138.6 10.3l-26.1 29.5H489l45.6-51.2-45.6-51.2h39.7l26.6 29.3 25.6-29.3h38.5l-45.4 51 46 51.4h-40.5l-26.3-29.5z"]},L3={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},P3={prefix:"fab",iconName:"paypal",icon:[384,512,[],"f1ed","M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]},I3={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]},D3={prefix:"fab",iconName:"ups",icon:[384,512,[],"f7e0","M103.2 303c-5.2 3.6-32.6 13.1-32.6-19V180H37.9v102.6c0 74.9 80.2 51.1 97.9 39V180h-32.6zM4 74.82v220.9c0 103.7 74.9 135.2 187.7 184.1 112.4-48.9 187.7-80.2 187.7-184.1V74.82c-116.3-61.6-281.8-49.6-375.4 0zm358.1 220.9c0 86.6-53.2 113.6-170.4 165.3-117.5-51.8-170.5-78.7-170.5-165.3v-126.4c102.3-93.8 231.6-100 340.9-89.8zm-209.6-107.4v212.8h32.7v-68.7c24.4 7.3 71.7-2.6 71.7-78.5 0-97.4-80.7-80.92-104.4-65.6zm32.7 117.3v-100.3c8.4-4.2 38.4-12.7 38.4 49.3 0 67.9-36.4 51.8-38.4 51zm79.1-86.4c.1 47.3 51.6 42.5 52.2 70.4 .6 23.5-30.4 23-50.8 4.9v30.1c36.2 21.5 81.9 8.1 83.2-33.5 1.7-51.5-54.1-46.6-53.4-73.2 .6-20.3 30.6-20.5 48.5-2.2v-28.4c-28.5-22-79.9-9.2-79.7 31.9z"]},N3={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"]},o1=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function l1(n,e){return e={exports:{}},n(e,e.exports),e.exports}var c1=l1(function(n){(function(e){var t=function(p,m,S){if(!c(m)||f(m)||h(m)||d(m)||l(m))return m;var w,E=0,L=0;if(u(m))for(w=[],L=m.length;E<L;E++)w.push(t(p,m[E],S));else{w={};for(var I in m)Object.prototype.hasOwnProperty.call(m,I)&&(w[p(I,S)]=t(p,m[I],S))}return w},i=function(p,m){m=m||{};var S=m.separator||"_",w=m.split||/(?=[A-Z])/;return p.split(w).join(S)},r=function(p){return g(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(m,S){return S?S.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},s=function(p){var m=r(p);return m.substr(0,1).toUpperCase()+m.substr(1)},a=function(p,m){return i(p,m).toLowerCase()},o=Object.prototype.toString,l=function(p){return typeof p=="function"},c=function(p){return p===Object(p)},u=function(p){return o.call(p)=="[object Array]"},f=function(p){return o.call(p)=="[object Date]"},h=function(p){return o.call(p)=="[object RegExp]"},d=function(p){return o.call(p)=="[object Boolean]"},g=function(p){return p=p-0,p===p},v=function(p,m){var S=m&&"process"in m?m.process:m;return typeof S!="function"?p:function(w,E){return S(w,p,E)}},x={camelize:r,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(p,m){return t(v(r,m),p)},decamelizeKeys:function(p,m){return t(v(a,m),p,m)},pascalizeKeys:function(p,m){return t(v(s,m),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=x:e.humps=x})(o1)}),u1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ws=function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n},_o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},f1=function(n,e){var t={};for(var i in n)e.indexOf(i)>=0||!Object.prototype.hasOwnProperty.call(n,i)||(t[i]=n[i]);return t},Cc=function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}else return Array.from(n)};function h1(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=c1.camelize(t.slice(0,i)),s=t.slice(i+1).trim();return e[r]=s,e},{})}function d1(n){return n.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Lu(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var i=(n.children||[]).map(function(l){return Lu(l)}),r=Object.keys(n.attributes||{}).reduce(function(l,c){var u=n.attributes[c];switch(c){case"class":l.class=d1(u);break;case"style":l.style=h1(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});t.class;var s=t.style,a=s===void 0?{}:s,o=f1(t,["class","style"]);return Do(n.tag,_o({},e,{class:r.class,style:_o({},r.style,a)},r.attrs,o),i)}var zm=!1;try{zm=!0}catch{}function p1(){if(!zm&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Os(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ws({},n,e):{}}function m1(n){var e,t=(e={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-border":n.border,"fa-li":n.listItem,"fa-inverse":n.inverse,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both"},ws(e,"fa-"+n.size,n.size!==null),ws(e,"fa-rotate-"+n.rotation,n.rotation!==null),ws(e,"fa-pull-"+n.pull,n.pull!==null),ws(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(t).map(function(i){return t[i]?i:null}).filter(function(i){return i})}function mh(n){if(n===null)return null;if((typeof n=="undefined"?"undefined":u1(n))==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}var F3=la({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,t){var i=t.attrs,r=ht(function(){return mh(e.icon)}),s=ht(function(){return Os("classes",m1(e))}),a=ht(function(){return Os("transform",typeof e.transform=="string"?Bm.transform(e.transform):e.transform)}),o=ht(function(){return Os("mask",mh(e.mask))}),l=ht(function(){return s1(r.value,_o({},s.value,a.value,o.value,{symbol:e.symbol,title:e.title}))});Ls(l,function(u){if(!u)return p1("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var c=ht(function(){return l.value?Lu(l.value.abstract[0],{},i):null});return function(){return c.value}}});la({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var i=t.slots,r=km.familyPrefix,s=ht(function(){return[r+"-layers"].concat(Cc(e.fixedWidth?[r+"-fw"]:[]))});return function(){return Do("div",{class:s.value},i.default?i.default():[])}}});la({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var i=t.attrs,r=km.familyPrefix,s=ht(function(){return Os("classes",[].concat(Cc(e.counter?[r+"-layers-counter"]:[]),Cc(e.position?[r+"-layers-"+e.position]:[])))}),a=ht(function(){return Os("transform",typeof e.transform=="string"?Bm.transform(e.transform):e.transform)}),o=ht(function(){var c=a1(e.value.toString(),_o({},a.value,s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ht(function(){return Lu(o.value,{},i)});return function(){return l.value}}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="138",g1=0,gh=1,v1=2,Um=1,x1=2,Ss=3,Ur=0,vt=1,Ui=2,Hm=1,ui=0,Nr=1,vh=2,xh=3,_h=4,_1=5,wr=100,y1=101,b1=102,yh=103,bh=104,M1=200,w1=201,S1=202,E1=203,Gm=204,Vm=205,T1=206,A1=207,R1=208,C1=209,L1=210,P1=0,I1=1,D1=2,Lc=3,N1=4,F1=5,O1=6,k1=7,Uo=0,B1=1,z1=2,fi=0,U1=1,H1=2,G1=3,V1=4,W1=5,Wm=300,Hr=301,Gr=302,Pc=303,Ic=304,Ho=306,Iu=307,Vr=1e3,Ut=1001,yo=1002,xt=1003,Dc=1004,Nc=1005,rt=1006,jm=1007,Wi=1008,Hi=1009,j1=1010,q1=1011,$s=1012,X1=1013,so=1014,rn=1015,xn=1016,Y1=1017,K1=1018,Fr=1020,$1=1021,J1=1022,Dt=1023,Z1=1024,Q1=1025,ki=1026,Wr=1027,eb=1028,tb=1029,nb=1030,ib=1031,rb=1033,pl=33776,ml=33777,gl=33778,vl=33779,Mh=35840,wh=35841,Sh=35842,Eh=35843,sb=36196,Th=37492,Ah=37496,Rh=37808,Ch=37809,Lh=37810,Ph=37811,Ih=37812,Dh=37813,Nh=37814,Fh=37815,Oh=37816,kh=37817,Bh=37818,zh=37819,Uh=37820,Hh=37821,Gh=36492,ab=2200,ob=2201,lb=2202,Js=2300,jr=2301,xl=2302,Ar=2400,Rr=2401,bo=2402,Du=2500,qm=2501,cb=0,ub=1,Xm=2,yn=3e3,Xe=3001,fb=3200,hb=3201,ji=0,db=1,_l=7680,pb=519,Zs=35044,Mo=35048,Vh="300 es",Fc=1035;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bt=[];for(let n=0;n<256;n++)bt[n]=(n<16?"0":"")+n.toString(16);let _a=1234567;const ks=Math.PI/180,Qs=180/Math.PI;function Kt(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toUpperCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Nu(n,e){return(n%e+e)%e}function mb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function gb(n,e,t){return n!==e?(t-n)/(e-n):0}function Bs(n,e,t){return(1-t)*n+t*e}function vb(n,e,t,i){return Bs(n,e,1-Math.exp(-t*i))}function xb(n,e=1){return e-Math.abs(Nu(n,e*2)-e)}function _b(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mb(n,e){return n+Math.random()*(e-n)}function wb(n){return n*(.5-Math.random())}function Sb(n){return n!==void 0&&(_a=n%2147483647),_a=_a*16807%2147483647,(_a-1)/2147483646}function Eb(n){return n*ks}function Tb(n){return n*Qs}function Oc(n){return(n&n-1)===0&&n!==0}function Ym(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ab(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}var Rb=Object.freeze({__proto__:null,DEG2RAD:ks,RAD2DEG:Qs,generateUUID:Kt,clamp:zt,euclideanModulo:Nu,mapLinear:mb,inverseLerp:gb,lerp:Bs,damp:vb,pingpong:xb,smoothstep:_b,smootherstep:yb,randInt:bb,randFloat:Mb,randFloatSpread:wb,seededRandom:Sb,degToRad:Eb,radToDeg:Tb,isPowerOfTwo:Oc,ceilPowerOfTwo:Ym,floorPowerOfTwo:wo,setQuaternionFromProperEuler:Ab});class he{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}he.prototype.isVector2=!0;class St{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=r[0],x=r[3],p=r[6],m=r[1],S=r[4],w=r[7],E=r[2],L=r[5],I=r[8];return s[0]=a*v+o*m+l*E,s[3]=a*x+o*S+l*L,s[6]=a*p+o*w+l*I,s[1]=c*v+u*m+f*E,s[4]=c*x+u*S+f*L,s[7]=c*p+u*w+f*I,s[2]=h*v+d*m+g*E,s[5]=h*x+d*S+g*L,s[8]=h*p+d*w+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}St.prototype.isMatrix3=!0;function Km(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const $m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={h:0,s:0,l:0},ya={h:0,s:0,l:0};function yl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class Ee{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=Nu(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=yl(s,r,e+1/3),this.g=yl(s,r,e),this.b=yl(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(o,l,c)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=$m[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=bl(e.r),this.g=bl(e.g),this.b=bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),a=Math.min(t,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-t)/u+2;break;case r:o=(t-i)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=i,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(ya);const i=Bs(Qt.h,ya.h,t),r=Bs(Qt.s,ya.s,t),s=Bs(Qt.l,ya.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ee.NAMES=$m;Ee.prototype.isColor=!0;Ee.prototype.r=1;Ee.prototype.g=1;Ee.prototype.b=1;let er;class qi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=ea("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Or(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Or(t[i]/255)*255):t[i]=Or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jm{constructor(e=null){this.uuid=Kt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ml(r[a].image)):s.push(Ml(r[a]))}else s=Ml(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ml(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?qi.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Jm.prototype.isSource=!0;let Cb=0;class gt extends _i{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,i=Ut,r=Ut,s=rt,a=Wi,o=Dt,l=Hi,c=1,u=yn){super();Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Kt(),this.name="",this.source=new Jm(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Wm;gt.prototype.isTexture=!0;class Ze{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,w=(d+1)/2,E=(p+1)/2,L=(u+h)/4,I=(f+v)/4,K=(g+x)/4;return S>w&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=L/i,s=I/i):w>E?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=L/r,s=K/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=I/s,r=K/s),this.set(i,r,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(f-v)/m,this.z=(h-u)/m,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ze.prototype.isVector4=!0;class jt extends _i{constructor(e,t,i={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:rt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}jt.prototype.isWebGLRenderTarget=!0;class Go extends gt{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Go.prototype.isDataArrayTexture=!0;class Lb extends jt{constructor(e,t,i){super(e,t);this.depth=i,this.texture=new Go(null,e,t,i),this.texture.isRenderTargetTexture=!0}}Lb.prototype.isWebGLArrayRenderTarget=!0;class Fu extends gt{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Fu.prototype.isData3DTexture=!0;class Pb extends jt{constructor(e,t,i){super(e,t);this.depth=i,this.texture=new Fu(null,e,t,i),this.texture.isRenderTargetTexture=!0}}Pb.prototype.isWebGL3DRenderTarget=!0;class Ib extends jt{constructor(e,t,i,r={}){super(e,t,r);const s=this.texture;this.texture=[];for(let a=0;a<i;a++)this.texture[a]=s.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone();return this}}Ib.prototype.isWebGLMultipleRenderTargets=!0;class Ft{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let x=1-o;const p=l*h+c*d+u*g+f*v,m=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const E=Math.sqrt(S),L=Math.atan2(E,p*m);x=Math.sin(x*L)/E,o=Math.sin(o*L)/E}const w=o*m;if(l=l*x+h*w,c=c*x+d*w,u=u*x+g*w,f=f*x+v*w,x===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ft.prototype.isQuaternion=!0;class R{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}R.prototype.isVector3=!0;const wl=new R,Wh=new Ft;class Jt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Ei.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ei)}else i.boundingBox===null&&i.computeBoundingBox(),Sl.copy(i.boundingBox),Sl.applyMatrix4(e.matrixWorld),this.union(Sl);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),ba.subVectors(this.max,us),tr.subVectors(e.a,us),nr.subVectors(e.b,us),ir.subVectors(e.c,us),Yn.subVectors(nr,tr),Kn.subVectors(ir,nr),Ti.subVectors(tr,ir);let t=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-Ti.z,Ti.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,Ti.z,0,-Ti.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-Ti.y,Ti.x,0];return!El(t,tr,nr,ir,ba)||(t=[1,0,0,0,1,0,0,0,1],!El(t,tr,nr,ir,ba))?!1:(Ma.crossVectors(Yn,Kn),t=[Ma.x,Ma.y,Ma.z],El(t,tr,nr,ir,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ei.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Jt.prototype.isBox3=!0;const Sn=[new R,new R,new R,new R,new R,new R,new R,new R],Ei=new R,Sl=new Jt,tr=new R,nr=new R,ir=new R,Yn=new R,Kn=new R,Ti=new R,us=new R,ba=new R,Ma=new R,Ai=new R;function El(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ai.fromArray(n,s);const o=r.x*Math.abs(Ai.x)+r.y*Math.abs(Ai.y)+r.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Db=new Jt,jh=new R,wa=new R,Tl=new R;class Xi{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Db.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Tl.subVectors(e,this.center);const t=Tl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Tl.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?wa.set(0,0,1).multiplyScalar(e.radius):wa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(jh.copy(e.center).add(wa)),this.expandByPoint(jh.copy(e.center).sub(wa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new R,Al=new R,Sa=new R,$n=new R,Rl=new R,Ea=new R,Cl=new R;class Yi{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.direction).multiplyScalar(t).add(this.origin),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Al.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Al);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Sa),o=$n.dot(this.direction),l=-$n.dot(Sa),c=$n.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Sa).multiplyScalar(h).add(Al),d}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,r,s){Rl.subVectors(t,e),Ea.subVectors(i,e),Cl.crossVectors(Rl,Ea);let a=this.direction.dot(Cl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const l=o*this.direction.dot(Ea.crossVectors($n,Ea));if(l<0)return null;const c=o*this.direction.dot(Rl.cross($n));if(c<0||l+c>a)return null;const u=-o*$n.dot(Cl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,v,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nb,e,Fb)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Jn.crossVectors(i,Ht),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Jn.crossVectors(i,Ht)),Jn.normalize(),Ta.crossVectors(Ht,Jn),r[0]=Jn.x,r[4]=Ta.x,r[8]=Ht.x,r[1]=Jn.y,r[5]=Ta.y,r[9]=Ht.y,r[2]=Jn.z,r[6]=Ta.z,r[10]=Ht.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],x=i[10],p=i[14],m=i[3],S=i[7],w=i[11],E=i[15],L=r[0],I=r[4],K=r[8],Z=r[12],j=r[1],y=r[5],C=r[9],z=r[13],q=r[2],W=r[6],G=r[10],H=r[14],D=r[3],ne=r[7],ue=r[11],le=r[15];return s[0]=a*L+o*j+l*q+c*D,s[4]=a*I+o*y+l*W+c*ne,s[8]=a*K+o*C+l*G+c*ue,s[12]=a*Z+o*z+l*H+c*le,s[1]=u*L+f*j+h*q+d*D,s[5]=u*I+f*y+h*W+d*ne,s[9]=u*K+f*C+h*G+d*ue,s[13]=u*Z+f*z+h*H+d*le,s[2]=g*L+v*j+x*q+p*D,s[6]=g*I+v*y+x*W+p*ne,s[10]=g*K+v*C+x*G+p*ue,s[14]=g*Z+v*z+x*H+p*le,s[3]=m*L+S*j+w*q+E*D,s[7]=m*I+S*y+w*W+E*ne,s[11]=m*K+S*C+w*G+E*ue,s[15]=m*Z+S*z+w*H+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],x=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+v*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+x*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],x=e[14],p=e[15],m=f*x*c-v*h*c+v*l*d-o*x*d-f*l*p+o*h*p,S=g*h*c-u*x*c-g*l*d+a*x*d+u*l*p-a*h*p,w=u*v*c-g*f*c+g*o*d-a*v*d-u*o*p+a*f*p,E=g*f*l-u*v*l-g*o*h+a*v*h+u*o*x-a*f*x,L=t*m+i*S+r*w+s*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=m*I,e[1]=(v*h*s-f*x*s-v*r*d+i*x*d+f*r*p-i*h*p)*I,e[2]=(o*x*s-v*l*s+v*r*c-i*x*c-o*r*p+i*l*p)*I,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*I,e[4]=S*I,e[5]=(u*x*s-g*h*s+g*r*d-t*x*d-u*r*p+t*h*p)*I,e[6]=(g*l*s-a*x*s-g*r*c+t*x*c+a*r*p-t*l*p)*I,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*I,e[8]=w*I,e[9]=(g*f*s-u*v*s-g*i*d+t*v*d+u*i*p-t*f*p)*I,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*p+t*o*p)*I,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*I,e[12]=E*I,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*x+t*f*x)*I,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*x-t*o*x)*I,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,v=a*u,x=a*f,p=o*f,m=l*c,S=l*u,w=l*f,E=i.x,L=i.y,I=i.z;return r[0]=(1-(v+p))*E,r[1]=(d+w)*E,r[2]=(g-S)*E,r[3]=0,r[4]=(d-w)*L,r[5]=(1-(h+p))*L,r[6]=(x+m)*L,r[7]=0,r[8]=(g+S)*I,r[9]=(x-m)*I,r[10]=(1-(h+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=rr.set(r[0],r[1],r[2]).length();const a=rr.set(r[4],r[5],r[6]).length(),o=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const c=1/s,u=1/a,f=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,d=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}Ce.prototype.isMatrix4=!0;const rr=new R,en=new Ce,Nb=new R(0,0,0),Fb=new R(1,1,1),Jn=new R,Ta=new R,Ht=new R,qh=new Ce,Xh=new Ft;class yi{constructor(e=0,t=0,i=0,r=yi.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}yi.prototype.isEuler=!0;yi.DefaultOrder="XYZ";yi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ob=0;const Yh=new R,sr=new Ft,Tn=new Ce,Aa=new R,fs=new R,kb=new R,Bb=new Ft,Kh=new R(1,0,0),$h=new R(0,1,0),Jh=new R(0,0,1),zb={type:"added"},Zh={type:"removed"};class $e extends _i{constructor(){super();Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DefaultUp.clone();const e=new R,t=new yi,i=new Ft,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new St}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=$e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Aa.copy(e):Aa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(fs,Aa,this.up):Tn.lookAt(Aa,fs,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Tn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,kb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Bb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$e.DefaultUp=new R(0,1,0);$e.DefaultMatrixAutoUpdate=!0;$e.prototype.isObject3D=!0;const tn=new R,An=new R,Ll=new R,Rn=new R,ar=new R,or=new R,Qh=new R,Pl=new R,Il=new R,Dl=new R;class mt{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),An.subVectors(i,t),Ll.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(An),l=tn.dot(Ll),c=An.dot(An),u=An.dot(Ll),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Rn),l.set(0,0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),An.subVectors(e,t),tn.cross(An).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),tn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return mt.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ar.subVectors(r,i),or.subVectors(s,i),Pl.subVectors(e,i);const l=ar.dot(Pl),c=or.dot(Pl);if(l<=0&&c<=0)return t.copy(i);Il.subVectors(e,r);const u=ar.dot(Il),f=or.dot(Il);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ar,a);Dl.subVectors(e,s);const d=ar.dot(Dl),g=or.dot(Dl);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(or,o);const x=u*g-d*f;if(x<=0&&f-u>=0&&d-g>=0)return Qh.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Qh,o);const p=1/(x+v+h);return a=v*p,o=h*p,t.copy(i).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ub=0;class ut extends _i{constructor(){super();Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Kt(),this.name="",this.type="Material",this.fog=!0,this.blending=Nr,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gm,this.blendDst=Vm,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_l,this.stencilZFail=_l,this.stencilZPass=_l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Hm;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ut.prototype.isMaterial=!0;ut.fromType=function(){return null};class Fn extends ut{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Fn.prototype.isMeshBasicMaterial=!0;const nt=new R,Ra=new he;class dt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Zs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new Ee),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new he),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new R),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new Ze),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nt.x=this.getX(t),nt.y=this.getY(t),nt.z=this.getZ(t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nt.x=this.getX(t),nt.y=this.getY(t),nt.z=this.getZ(t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nt.x=this.getX(t),nt.y=this.getY(t),nt.z=this.getZ(t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}dt.prototype.isBufferAttribute=!0;class Zm extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qm extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hb extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}Hb.prototype.isFloat16BufferAttribute=!0;class yt extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gb=0;const Yt=new Ce,Nl=new $e,lr=new R,Gt=new Jt,hs=new Jt,_t=new R;class at extends _i{constructor(){super();Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Kt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?Qm:Zm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new St().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Gt.min,hs.min),Gt.expandByPoint(_t),_t.addVectors(Gt.max,hs.max),Gt.expandByPoint(_t)):(Gt.expandByPoint(hs.min),Gt.expandByPoint(hs.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(e,c),_t.add(lr)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let j=0;j<o;j++)c[j]=new R,u[j]=new R;const f=new R,h=new R,d=new R,g=new he,v=new he,x=new he,p=new R,m=new R;function S(j,y,C){f.fromArray(r,j*3),h.fromArray(r,y*3),d.fromArray(r,C*3),g.fromArray(a,j*2),v.fromArray(a,y*2),x.fromArray(a,C*2),h.sub(f),d.sub(f),v.sub(g),x.sub(g);const z=1/(v.x*x.y-x.x*v.y);!isFinite(z)||(p.copy(h).multiplyScalar(x.y).addScaledVector(d,-v.y).multiplyScalar(z),m.copy(d).multiplyScalar(v.x).addScaledVector(h,-x.x).multiplyScalar(z),c[j].add(p),c[y].add(p),c[C].add(p),u[j].add(m),u[y].add(m),u[C].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let j=0,y=w.length;j<y;++j){const C=w[j],z=C.start,q=C.count;for(let W=z,G=z+q;W<G;W+=3)S(i[W+0],i[W+1],i[W+2])}const E=new R,L=new R,I=new R,K=new R;function Z(j){I.fromArray(s,j*3),K.copy(I);const y=c[j];E.copy(y),E.sub(I.multiplyScalar(I.dot(y))).normalize(),L.crossVectors(K,y);const z=L.dot(u[j])<0?-1:1;l[j*4]=E.x,l[j*4+1]=E.y,l[j*4+2]=E.z,l[j*4+3]=z}for(let j=0,y=w.length;j<y;++j){const C=w[j],z=C.start,q=C.count;for(let W=z,G=z+q;W<G;W+=3)Z(i[W+0]),Z(i[W+1]),Z(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,u=new R,f=new R;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const a=i[r].array,o=e.attributes[r],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let f=0,h=c;f<u;f++,h++)a[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new dt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new at,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}at.prototype.isBufferGeometry=!0;const ed=new Ce,cr=new Yi,Fl=new Xi,Zn=new R,Qn=new R,ei=new R,Ol=new R,kl=new R,Bl=new R,Ca=new R,La=new R,Pa=new R,Ia=new he,Da=new he,Na=new he,zl=new R,Fa=new R;class Nt extends $e{constructor(e=new at,t=new Fn){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),e.ray.intersectsSphere(Fl)===!1)||(ed.copy(s).invert(),cr.copy(e.ray).applyMatrix4(ed),i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1))return;let a;if(i.isBufferGeometry){const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,d=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const p=d[v],m=r[p.materialIndex],S=Math.max(p.start,g.start),w=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=S,L=w;E<L;E+=3){const I=o.getX(E),K=o.getX(E+1),Z=o.getX(E+2);a=Oa(this,m,e,cr,l,c,u,f,h,I,K,Z),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const S=o.getX(p),w=o.getX(p+1),E=o.getX(p+2);a=Oa(this,r,e,cr,l,c,u,f,h,S,w,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const p=d[v],m=r[p.materialIndex],S=Math.max(p.start,g.start),w=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=S,L=w;E<L;E+=3){const I=E,K=E+1,Z=E+2;a=Oa(this,m,e,cr,l,c,u,f,h,I,K,Z),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const S=p,w=p+1,E=p+2;a=Oa(this,r,e,cr,l,c,u,f,h,S,w,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Nt.prototype.isMesh=!0;function Vb(n,e,t,i,r,s,a,o){let l;if(e.side===vt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==Ui,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:n}}function Oa(n,e,t,i,r,s,a,o,l,c,u,f){Zn.fromBufferAttribute(r,c),Qn.fromBufferAttribute(r,u),ei.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){Ca.set(0,0,0),La.set(0,0,0),Pa.set(0,0,0);for(let g=0,v=s.length;g<v;g++){const x=h[g],p=s[g];x!==0&&(Ol.fromBufferAttribute(p,c),kl.fromBufferAttribute(p,u),Bl.fromBufferAttribute(p,f),a?(Ca.addScaledVector(Ol,x),La.addScaledVector(kl,x),Pa.addScaledVector(Bl,x)):(Ca.addScaledVector(Ol.sub(Zn),x),La.addScaledVector(kl.sub(Qn),x),Pa.addScaledVector(Bl.sub(ei),x)))}Zn.add(Ca),Qn.add(La),ei.add(Pa)}n.isSkinnedMesh&&(n.boneTransform(c,Zn),n.boneTransform(u,Qn),n.boneTransform(f,ei));const d=Vb(n,e,t,i,Zn,Qn,ei,zl);if(d){o&&(Ia.fromBufferAttribute(o,c),Da.fromBufferAttribute(o,u),Na.fromBufferAttribute(o,f),d.uv=mt.getUV(zl,Zn,Qn,ei,Ia,Da,Na,new he)),l&&(Ia.fromBufferAttribute(l,c),Da.fromBufferAttribute(l,u),Na.fromBufferAttribute(l,f),d.uv2=mt.getUV(zl,Zn,Qn,ei,Ia,Da,Na,new he));const g={a:c,b:u,c:f,normal:new R,materialIndex:0};mt.getNormal(Zn,Qn,ei,g.normal),d.face=g}return d}class ua extends at{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function g(v,x,p,m,S,w,E,L,I,K,Z){const j=w/I,y=E/K,C=w/2,z=E/2,q=L/2,W=I+1,G=K+1;let H=0,D=0;const ne=new R;for(let ue=0;ue<G;ue++){const le=ue*y-z;for(let ce=0;ce<W;ce++){const Ae=ce*j-C;ne[v]=Ae*m,ne[x]=le*S,ne[p]=q,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[x]=0,ne[p]=L>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(ce/I),f.push(1-ue/K),H+=1}}for(let ue=0;ue<K;ue++)for(let le=0;le<I;le++){const ce=h+le+W*ue,Ae=h+le+W*(ue+1),Ue=h+(le+1)+W*(ue+1),V=h+(le+1)+W*ue;l.push(ce,Ae,V),l.push(Ae,Ue,V),D+=6}o.addGroup(d,D,Z),d+=D,h+=H}}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=qr(n[t]);for(const r in i)e[r]=i[r]}return e}const Wb={clone:qr,merge:Tt};var jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ut{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=jb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}on.prototype.isShaderMaterial=!0;class ku extends $e{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ku.prototype.isCamera=!0;class It extends ku{constructor(e=50,t=1,i=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}It.prototype.isPerspectiveCamera=!0;const ur=90,fr=1;class Bu extends $e{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new It(ur,fr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new It(ur,fr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const a=new It(ur,fr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new R(0,1,0)),this.add(a);const o=new It(ur,fr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new It(ur,fr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new It(ur,fr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.xr.enabled,f=e.getRenderTarget();e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(f),e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class Vo extends gt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hr;super(e,t,i,r,s,a,o,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Vo.prototype.isCubeTexture=!0;class eg extends jt{constructor(e,t={}){super(e,e,t);const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Dt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ua(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vt,blending:ui});s.uniforms.tEquirect.value=t;const a=new Nt(r,s),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=rt),new Bu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}eg.prototype.isWebGLCubeRenderTarget=!0;const Ul=new R,Xb=new R,Yb=new St;class Dn{constructor(e=new R(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ul.subVectors(i,t).cross(Xb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ul),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yb.getNormalMatrix(e),r=this.coplanarPoint(Ul).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Dn.prototype.isPlane=!0;const hr=new Xi,ka=new R;class Wo{constructor(e=new Dn,t=new Dn,i=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],d=i[9],g=i[10],v=i[11],x=i[12],p=i[13],m=i[14],S=i[15];return t[0].setComponents(o-r,f-l,v-h,S-x).normalize(),t[1].setComponents(o+r,f+l,v+h,S+x).normalize(),t[2].setComponents(o+s,f+c,v+d,S+p).normalize(),t[3].setComponents(o-s,f-c,v-d,S-p).normalize(),t[4].setComponents(o-a,f-u,v-g,S-m).normalize(),t[5].setComponents(o+a,f+u,v+g,S+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tg(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Kb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;n.bindBuffer(f,c),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class zu extends at{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],v=[],x=[];for(let p=0;p<u;p++){const m=p*h-a;for(let S=0;S<c;S++){const w=S*f-s;g.push(w,-m,0),v.push(0,0,1),x.push(S/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<o;m++){const S=m+c*p,w=m+c*(p+1),E=m+1+c*(p+1),L=m+1+c*p;d.push(S,w,L),d.push(w,E,L)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(x,2))}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}var $b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM="vec3 transformed = vec3( position );",iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,sM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bM="gl_FragColor = linearToOutputTexel( gl_FragColor );",MM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,DM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,NM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kM=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,BM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,GM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,VM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ew=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]
		#endif
	}
#endif`,rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			float texelIndex = float( vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_w=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ew=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ow=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,kw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Uw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qw=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$w=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_S=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:$b,alphamap_pars_fragment:Jb,alphatest_fragment:Zb,alphatest_pars_fragment:Qb,aomap_fragment:eM,aomap_pars_fragment:tM,begin_vertex:nM,beginnormal_vertex:iM,bsdfs:rM,bumpmap_pars_fragment:sM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:lM,clipping_planes_vertex:cM,color_fragment:uM,color_pars_fragment:fM,color_pars_vertex:hM,color_vertex:dM,common:pM,cube_uv_reflection_fragment:mM,defaultnormal_vertex:gM,displacementmap_pars_vertex:vM,displacementmap_vertex:xM,emissivemap_fragment:_M,emissivemap_pars_fragment:yM,encodings_fragment:bM,encodings_pars_fragment:MM,envmap_fragment:wM,envmap_common_pars_fragment:SM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:kM,envmap_vertex:AM,fog_vertex:RM,fog_pars_vertex:CM,fog_fragment:LM,fog_pars_fragment:PM,gradientmap_pars_fragment:IM,lightmap_fragment:DM,lightmap_pars_fragment:NM,lights_lambert_vertex:FM,lights_pars_begin:OM,lights_toon_fragment:BM,lights_toon_pars_fragment:zM,lights_phong_fragment:UM,lights_phong_pars_fragment:HM,lights_physical_fragment:GM,lights_physical_pars_fragment:VM,lights_fragment_begin:WM,lights_fragment_maps:jM,lights_fragment_end:qM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:KM,logdepthbuf_vertex:$M,map_fragment:JM,map_pars_fragment:ZM,map_particle_fragment:QM,map_particle_pars_fragment:ew,metalnessmap_fragment:tw,metalnessmap_pars_fragment:nw,morphcolor_vertex:iw,morphnormal_vertex:rw,morphtarget_pars_vertex:sw,morphtarget_vertex:aw,normal_fragment_begin:ow,normal_fragment_maps:lw,normal_pars_fragment:cw,normal_pars_vertex:uw,normal_vertex:fw,normalmap_pars_fragment:hw,clearcoat_normal_fragment_begin:dw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,output_fragment:gw,packing:vw,premultiplied_alpha_fragment:xw,project_vertex:_w,dithering_fragment:yw,dithering_pars_fragment:bw,roughnessmap_fragment:Mw,roughnessmap_pars_fragment:ww,shadowmap_pars_fragment:Sw,shadowmap_pars_vertex:Ew,shadowmap_vertex:Tw,shadowmask_pars_fragment:Aw,skinbase_vertex:Rw,skinning_pars_vertex:Cw,skinning_vertex:Lw,skinnormal_vertex:Pw,specularmap_fragment:Iw,specularmap_pars_fragment:Dw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Fw,transmission_fragment:Ow,transmission_pars_fragment:kw,uv_pars_fragment:Bw,uv_pars_vertex:zw,uv_vertex:Uw,uv2_pars_fragment:Hw,uv2_pars_vertex:Gw,uv2_vertex:Vw,worldpos_vertex:Ww,background_vert:jw,background_frag:qw,cube_vert:Xw,cube_frag:Yw,depth_vert:Kw,depth_frag:$w,distanceRGBA_vert:Jw,distanceRGBA_frag:Zw,equirect_vert:Qw,equirect_frag:eS,linedashed_vert:tS,linedashed_frag:nS,meshbasic_vert:iS,meshbasic_frag:rS,meshlambert_vert:sS,meshlambert_frag:aS,meshmatcap_vert:oS,meshmatcap_frag:lS,meshnormal_vert:cS,meshnormal_frag:uS,meshphong_vert:fS,meshphong_frag:hS,meshphysical_vert:dS,meshphysical_frag:pS,meshtoon_vert:mS,meshtoon_frag:gS,points_vert:vS,points_frag:xS,shadow_vert:_S,shadow_frag:yS,sprite_vert:bS,sprite_frag:MS},xe={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new St},uv2Transform:{value:new St},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}}},pn={basic:{uniforms:Tt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Tt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Tt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Tt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Tt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Tt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Tt([xe.points,xe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Tt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Tt([xe.common,xe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Tt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Tt([xe.sprite,xe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:Tt([xe.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Tt([xe.common,xe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Tt([xe.lights,xe.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};pn.physical={uniforms:Tt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new he(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function wS(n,e,t,i,r,s){const a=new Ee(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(v,x){let p=!1,m=x.isScene===!0?x.background:null;m&&m.isTexture&&(m=e.get(m));const S=n.xr,w=S.getSession&&S.getSession();w&&w.environmentBlendMode==="additive"&&(m=null),m===null?g(a,o):m&&m.isColor&&(g(m,1),p=!0),(n.autoClear||p)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Ho)?(c===void 0&&(c=new Nt(new ua(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:qr(pn.cube.uniforms),vertexShader:pn.cube.vertexShader,fragmentShader:pn.cube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(u!==m||f!==m.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=m,f=m.version,h=n.toneMapping),v.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new Nt(new zu(2,2),new on({name:"BackgroundMaterial",uniforms:qr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(u!==m||f!==m.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=m,f=m.version,h=n.toneMapping),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,x){t.buffers.color.setClear(v.r,v.g,v.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),o=x,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:d}}function SS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=v(null);let c=l;function u(z,q,W,G,H){let D=!1;if(a){const ne=g(G,W,q);c!==ne&&(c=ne,h(c.object)),D=x(G,H),D&&p(G,H)}else{const ne=q.wireframe===!0;(c.geometry!==G.id||c.program!==W.id||c.wireframe!==ne)&&(c.geometry=G.id,c.program=W.id,c.wireframe=ne,D=!0)}z.isInstancedMesh===!0&&(D=!0),H!==null&&t.update(H,34963),D&&(I(z,q,W,G),H!==null&&n.bindBuffer(34963,t.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function h(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function d(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function g(z,q,W){const G=W.wireframe===!0;let H=o[z.id];H===void 0&&(H={},o[z.id]=H);let D=H[q.id];D===void 0&&(D={},H[q.id]=D);let ne=D[G];return ne===void 0&&(ne=v(f()),D[G]=ne),ne}function v(z){const q=[],W=[],G=[];for(let H=0;H<r;H++)q[H]=0,W[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:W,attributeDivisors:G,object:z,attributes:{},index:null}}function x(z,q){const W=c.attributes,G=z.attributes;let H=0;for(const D in G){const ne=W[D],ue=G[D];if(ne===void 0||ne.attribute!==ue||ne.data!==ue.data)return!0;H++}return c.attributesNum!==H||c.index!==q}function p(z,q){const W={},G=z.attributes;let H=0;for(const D in G){const ne=G[D],ue={};ue.attribute=ne,ne.data&&(ue.data=ne.data),W[D]=ue,H++}c.attributes=W,c.attributesNum=H,c.index=q}function m(){const z=c.newAttributes;for(let q=0,W=z.length;q<W;q++)z[q]=0}function S(z){w(z,0)}function w(z,q){const W=c.newAttributes,G=c.enabledAttributes,H=c.attributeDivisors;W[z]=1,G[z]===0&&(n.enableVertexAttribArray(z),G[z]=1),H[z]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,q),H[z]=q)}function E(){const z=c.newAttributes,q=c.enabledAttributes;for(let W=0,G=q.length;W<G;W++)q[W]!==z[W]&&(n.disableVertexAttribArray(W),q[W]=0)}function L(z,q,W,G,H,D){i.isWebGL2===!0&&(W===5124||W===5125)?n.vertexAttribIPointer(z,q,W,H,D):n.vertexAttribPointer(z,q,W,G,H,D)}function I(z,q,W,G){if(i.isWebGL2===!1&&(z.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const H=G.attributes,D=W.getAttributes(),ne=q.defaultAttributeValues;for(const ue in D){const le=D[ue];if(le.location>=0){let ce=H[ue];if(ce===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){const Ae=ce.normalized,Ue=ce.itemSize,V=t.get(ce);if(V===void 0)continue;const B=V.buffer,se=V.type,fe=V.bytesPerElement;if(ce.isInterleavedBufferAttribute){const pe=ce.data,me=pe.stride,_e=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let k=0;k<le.locationSize;k++)w(le.location+k,pe.meshPerAttribute);z.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let k=0;k<le.locationSize;k++)S(le.location+k);n.bindBuffer(34962,B);for(let k=0;k<le.locationSize;k++)L(le.location+k,Ue/le.locationSize,se,Ae,me*fe,(_e+Ue/le.locationSize*k)*fe)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<le.locationSize;pe++)w(le.location+pe,ce.meshPerAttribute);z.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<le.locationSize;pe++)S(le.location+pe);n.bindBuffer(34962,B);for(let pe=0;pe<le.locationSize;pe++)L(le.location+pe,Ue/le.locationSize,se,Ae,Ue*fe,Ue/le.locationSize*pe*fe)}}else if(ne!==void 0){const Ae=ne[ue];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(le.location,Ae);break;case 3:n.vertexAttrib3fv(le.location,Ae);break;case 4:n.vertexAttrib4fv(le.location,Ae);break;default:n.vertexAttrib1fv(le.location,Ae)}}}}E()}function K(){y();for(const z in o){const q=o[z];for(const W in q){const G=q[W];for(const H in G)d(G[H].object),delete G[H];delete q[W]}delete o[z]}}function Z(z){if(o[z.id]===void 0)return;const q=o[z.id];for(const W in q){const G=q[W];for(const H in G)d(G[H].object),delete G[H];delete q[W]}delete o[z.id]}function j(z){for(const q in o){const W=o[q];if(W[z.id]===void 0)continue;const G=W[z.id];for(const H in G)d(G[H].object),delete G[H];delete W[z.id]}}function y(){C(),c!==l&&(c=l,h(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:y,resetDefaultState:C,dispose:K,releaseStatesOfGeometry:Z,releaseStatesOfProgram:j,initAttributes:m,enableAttribute:S,disableUnusedAttributes:E}}function ES(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function TS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),v=n.getParameter(34921),x=n.getParameter(36347),p=n.getParameter(36348),m=n.getParameter(36349),S=h>0,w=a||e.has("OES_texture_float"),E=S&&w,L=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:E,maxSamples:L}}function AS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Dn,o=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,d,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!x)s?u(null):c();else{const m=s?0:i,S=m*4;let w=p.clippingState||null;l.value=w,w=u(g,h,S,d);for(let E=0;E!==S;++E)w[E]=t[E];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const p=d+v*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<p)&&(x=new Float32Array(p));for(let S=0,w=d;S!==v;++S,w+=4)a.copy(f[S]).applyMatrix4(m,o),a.normal.toArray(x,w),x[w+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function RS(n){let e=new WeakMap;function t(a,o){return o===Pc?a.mapping=Hr:o===Ic&&(a.mapping=Gr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Pc||o===Ic)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new eg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jo extends ku{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}jo.prototype.isOrthographicCamera=!0;const Cr=4,td=[.125,.215,.35,.446,.526,.582],Ii=20,Hl=new jo,nd=new Ee;let Gl=null;const Ci=(1+Math.sqrt(5))/2,dr=1/Ci,id=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ci,dr),new R(0,Ci,-dr),new R(dr,0,Ci),new R(-dr,0,Ci),new R(Ci,dr,0),new R(-Ci,dr,0)];class rd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Gl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gl),e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,i={magFilter:rt,minFilter:rt,generateMipmaps:!1,type:xn,format:Dt,encoding:yn,depthBuffer:!1},r=sd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CS(s)),this._blurMaterial=LS(s,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,i,r){const o=new It(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(nd),u.toneMapping=fi,u.autoClear=!1;const d=new Fn({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),g=new Nt(new ua,d);let v=!1;const x=e.background;x?x.isColor&&(d.color.copy(x),e.background=null,v=!0):(d.color.copy(nd),v=!0);for(let p=0;p<6;p++){const m=p%3;m===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):m===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;Ba(r,m*S,p>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hr||e.mapping===Gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ba(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Hl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=id[(r-1)%id.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Nt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):Ii;x>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ii}`);const p=[];let m=0;for(let I=0;I<Ii;++I){const K=I/v,Z=Math.exp(-K*K/2);p.push(Z),I===0?m+=Z:I<x&&(m+=2*Z)}for(let I=0;I<p.length;I++)p[I]=p[I]/m;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const w=this._sizeLods[r],E=3*w*(r>S-Cr?r-S+Cr:0),L=4*(this._cubeSize-w);Ba(t,E,L,3*w,2*w),l.setRenderTarget(t),l.render(f,Hl)}}function CS(n){const e=[],t=[],i=[];let r=n;const s=n-Cr+1+td.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Cr?l=td[a-n+Cr-1]:a===0&&(l=0),i.push(l);const c=1/(o-1),u=-c/2,f=1+c/2,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,x=2,p=1,m=new Float32Array(v*g*d),S=new Float32Array(x*g*d),w=new Float32Array(p*g*d);for(let L=0;L<d;L++){const I=L%3*2/3-1,K=L>2?0:-1,Z=[I,K,0,I+2/3,K,0,I+2/3,K+1,0,I,K,0,I+2/3,K+1,0,I,K+1,0];m.set(Z,v*g*L),S.set(h,x*g*L);const j=[L,L,L,L,L,L];w.set(j,p*g*L)}const E=new at;E.setAttribute("position",new dt(m,v)),E.setAttribute("uv",new dt(S,x)),E.setAttribute("faceIndex",new dt(w,p)),e.push(E),r>Cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sd(n,e,t){const i=new jt(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function LS(n,e,t){const i=new Float32Array(Ii),r=new R(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ad(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function od(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pc||l===Ic,u=l===Hr||l===Gr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new rd(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new rd(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function IS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DS(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let x=0,p=v.length;x<p;x++)e.update(v[x],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const m=d.array;v=d.version;for(let S=0,w=m.length;S<w;S+=3){const E=m[S+0],L=m[S+1],I=m[S+2];h.push(E,L,L,I,I,E)}}else{const m=g.array;v=g.version;for(let S=0,w=m.length/3-1;S<w;S+=3){const E=S+0,L=S+1,I=S+2;h.push(E,L,L,I,I,E)}}const x=new(Km(h)?Qm:Zm)(h,1);x.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,x)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function NS(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,d){n.drawElements(s,d,o,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let v,x;if(r)v=n,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,d,o,h*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function FS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function OS(n,e){return n[0]-e[0]}function kS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Vl(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function BS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ze,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(u);if(x===void 0||x.count!==v){let W=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",W)};x!==void 0&&x.texture.dispose();const S=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],K=u.morphAttributes.color||[];let Z=0;S===!0&&(Z=1),w===!0&&(Z=2),E===!0&&(Z=3);let j=u.attributes.position.count*Z,y=1;j>e.maxTextureSize&&(y=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const C=new Float32Array(j*y*4*v),z=new Go(C,j,y,v);z.format=Dt,z.type=rn,z.needsUpdate=!0;const q=Z*4;for(let G=0;G<v;G++){const H=L[G],D=I[G],ne=K[G],ue=j*y*4*G;for(let le=0;le<H.count;le++){const ce=le*q;S===!0&&(a.fromBufferAttribute(H,le),H.normalized===!0&&Vl(a,H),C[ue+ce+0]=a.x,C[ue+ce+1]=a.y,C[ue+ce+2]=a.z,C[ue+ce+3]=0),w===!0&&(a.fromBufferAttribute(D,le),D.normalized===!0&&Vl(a,D),C[ue+ce+4]=a.x,C[ue+ce+5]=a.y,C[ue+ce+6]=a.z,C[ue+ce+7]=0),E===!0&&(a.fromBufferAttribute(ne,le),ne.normalized===!0&&Vl(a,D),C[ue+ce+8]=a.x,C[ue+ce+9]=a.y,C[ue+ce+10]=a.z,C[ue+ce+11]=ne.itemSize===4?a.w:1)}}x={count:v,texture:z,size:new he(j,y)},s.set(u,x),u.addEventListener("dispose",W)}let p=0;for(let S=0;S<d.length;S++)p+=d[S];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",m),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const g=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let w=0;w<g;w++)v[w]=[w,0];i[u.id]=v}for(let w=0;w<g;w++){const E=v[w];E[0]=w,E[1]=d[w]}v.sort(kS);for(let w=0;w<8;w++)w<g&&v[w][1]?(o[w][0]=v[w][0],o[w][1]=v[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(OS);const x=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let w=0;w<8;w++){const E=o[w],L=E[0],I=E[1];L!==Number.MAX_SAFE_INTEGER&&I?(x&&u.getAttribute("morphTarget"+w)!==x[L]&&u.setAttribute("morphTarget"+w,x[L]),p&&u.getAttribute("morphNormal"+w)!==p[L]&&u.setAttribute("morphNormal"+w,p[L]),r[w]=I,m+=I):(x&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),p&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function zS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ng=new gt,ig=new Go,rg=new Fu,sg=new Vo,ld=[],cd=[],ud=new Float32Array(16),fd=new Float32Array(9),hd=new Float32Array(4);function es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ld[r];if(s===void 0&&(s=new Float32Array(r),ld[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function US(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function GS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function VS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function WS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;hd.set(i),n.uniformMatrix2fv(this.addr,!1,hd),Ct(t,i)}}function jS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),Ct(t,i)}}function qS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(kt(t,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),Ct(t,i)}}function XS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function YS(n,e){const t=this.cache;kt(t,e)||(n.uniform2iv(this.addr,e),Ct(t,e))}function KS(n,e){const t=this.cache;kt(t,e)||(n.uniform3iv(this.addr,e),Ct(t,e))}function $S(n,e){const t=this.cache;kt(t,e)||(n.uniform4iv(this.addr,e),Ct(t,e))}function JS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZS(n,e){const t=this.cache;kt(t,e)||(n.uniform2uiv(this.addr,e),Ct(t,e))}function QS(n,e){const t=this.cache;kt(t,e)||(n.uniform3uiv(this.addr,e),Ct(t,e))}function e2(n,e){const t=this.cache;kt(t,e)||(n.uniform4uiv(this.addr,e),Ct(t,e))}function t2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||ng,r)}function n2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rg,r)}function i2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sg,r)}function r2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ig,r)}function s2(n){switch(n){case 5126:return US;case 35664:return HS;case 35665:return GS;case 35666:return VS;case 35674:return WS;case 35675:return jS;case 35676:return qS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return KS;case 35669:case 35673:return $S;case 5125:return JS;case 36294:return ZS;case 36295:return QS;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return r2}}function a2(n,e){n.uniform1fv(this.addr,e)}function o2(n,e){const t=es(e,this.size,2);n.uniform2fv(this.addr,t)}function l2(n,e){const t=es(e,this.size,3);n.uniform3fv(this.addr,t)}function c2(n,e){const t=es(e,this.size,4);n.uniform4fv(this.addr,t)}function u2(n,e){const t=es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function f2(n,e){const t=es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function h2(n,e){const t=es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function d2(n,e){n.uniform1iv(this.addr,e)}function p2(n,e){n.uniform2iv(this.addr,e)}function m2(n,e){n.uniform3iv(this.addr,e)}function g2(n,e){n.uniform4iv(this.addr,e)}function v2(n,e){n.uniform1uiv(this.addr,e)}function x2(n,e){n.uniform2uiv(this.addr,e)}function _2(n,e){n.uniform3uiv(this.addr,e)}function y2(n,e){n.uniform4uiv(this.addr,e)}function b2(n,e,t){const i=e.length,r=qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||ng,r[s])}function M2(n,e,t){const i=e.length,r=qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||rg,r[s])}function w2(n,e,t){const i=e.length,r=qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||sg,r[s])}function S2(n,e,t){const i=e.length,r=qo(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||ig,r[s])}function E2(n){switch(n){case 5126:return a2;case 35664:return o2;case 35665:return l2;case 35666:return c2;case 35674:return u2;case 35675:return f2;case 35676:return h2;case 5124:case 35670:return d2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return v2;case 36294:return x2;case 36295:return _2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return w2;case 36289:case 36303:case 36311:case 36292:return S2}}function T2(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=s2(e.type)}function ag(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=E2(e.type)}ag.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),Ct(e,n)};function og(n){this.id=n,this.seq=[],this.map={}}og.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(n,e[a.id],t)}};const Wl=/(\w+)(\])?(\[|\.)?/g;function dd(n,e){n.seq.push(e),n.map[e.id]=e}function A2(n,e,t){const i=n.name,r=i.length;for(Wl.lastIndex=0;;){const s=Wl.exec(i),a=Wl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){dd(t,c===void 0?new T2(o,n,e):new ag(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new og(o),dd(t,f)),t=f}}}function hi(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);A2(r,s,this)}}hi.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};hi.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};hi.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(n,o.value,i)}};hi.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function pd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let R2=0;function C2(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function L2(n){switch(n){case yn:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function md(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();return i&&r===""?"":t.toUpperCase()+`

`+r+`

`+C2(n.getShaderSource(e))}function P2(n,e){const t=L2(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function I2(n,e){let t;switch(e){case U1:t="Linear";break;case H1:t="Reinhard";break;case G1:t="OptimizedCineon";break;case V1:t="ACESFilmic";break;case W1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function D2(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function N2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F2(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Es(n){return n!==""}function gd(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O2=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(O2,k2)}function k2(n,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return kc(t)}const B2=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(n){return n.replace(z2,lg).replace(B2,U2)}function U2(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),lg(n,e,t,i)}function lg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _d(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===x1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ss&&(e="SHADOWMAP_TYPE_VSM"),e}function G2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hr:case Gr:e="ENVMAP_TYPE_CUBE";break;case Ho:case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gr:case Iu:e="ENVMAP_MODE_REFRACTION";break}return e}function W2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uo:e="ENVMAP_BLENDING_MULTIPLY";break;case B1:e="ENVMAP_BLENDING_MIX";break;case z1:e="ENVMAP_BLENDING_ADD";break}return e}function j2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function q2(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=H2(t),c=G2(t),u=V2(t),f=W2(t),h=j2(t),d=t.isWebGL2?"":D2(t),g=N2(s),v=r.createProgram();let x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(Es).join(`
`),x.length>0&&(x+=`
`),p=[d,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(x=[_d(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[d,_d(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?ze.tonemapping_pars_fragment:"",t.toneMapping!==fi?I2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,P2("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=kc(a),a=gd(a,t),a=vd(a,t),o=kc(o),o=gd(o,t),o=vd(o,t),a=xd(a),o=xd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=m+x+a,w=m+p+o,E=pd(r,35633,S),L=pd(r,35632,w);if(r.attachShader(v,E),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(v).trim(),j=r.getShaderInfoLog(E).trim(),y=r.getShaderInfoLog(L).trim();let C=!0,z=!0;if(r.getProgramParameter(v,35714)===!1){C=!1;const q=md(r,E,"vertex"),W=md(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,35715)+`

Program Info Log: `+Z+`
`+q+`
`+W)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(j===""||y==="")&&(z=!1);z&&(this.diagnostics={runnable:C,programLog:Z,vertexShader:{log:j,prefix:x},fragmentShader:{log:y,prefix:p}})}r.deleteShader(E),r.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new hi(r,v)),I};let K;return this.getAttributes=function(){return K===void 0&&(K=F2(r,v)),K},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=R2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=L,this}let X2=0;class Y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new K2;t.set(e,i)}return t.get(e)}}class K2{constructor(){this.id=X2++,this.usedTimes=0}}function $2(n,e,t,i,r,s,a){const o=new Ou,l=new Y2,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.floatVertexTextures,d=r.maxVertexUniforms,g=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){const z=y.skeleton.bones;if(h)return 1024;{const W=Math.floor((d-20)/4),G=Math.min(W,z.length);return G<z.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+z.length+" bones. This GPU supports "+G+"."),0):G}}function m(y,C,z,q,W){const G=q.fog,H=W.geometry,D=y.isMeshStandardMaterial?q.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||D),ue=!!ne&&(ne.mapping===Ho||ne.mapping===Iu)?ne.image.height:null,le=x[y.type],ce=W.isSkinnedMesh?p(W):0;y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const Ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ue=Ae!==void 0?Ae.length:0;let V=0;H.morphAttributes.position!==void 0&&(V=1),H.morphAttributes.normal!==void 0&&(V=2),H.morphAttributes.color!==void 0&&(V=3);let B,se,fe,pe;if(le){const T=pn[le];B=T.vertexShader,se=T.fragmentShader}else B=y.vertexShader,se=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const me=n.getRenderTarget(),_e=y.alphaTest>0,k=y.clearcoat>0;return{isWebGL2:u,shaderID:le,shaderName:y.type,vertexShader:B,fragmentShader:se,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:g,outputEncoding:me===null?n.outputEncoding:me.isXRRenderTarget===!0?me.texture.encoding:yn,map:!!y.map,matcap:!!y.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:ue,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===db,tangentSpaceNormalMap:y.normalMapType===ji,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Xe,clearcoat:k,clearcoatMap:k&&!!y.clearcoatMap,clearcoatRoughnessMap:k&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:k&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Nr,alphaMap:!!y.alphaMap,alphaTest:_e,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!H.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!G,useFog:y.fog,fogExp2:G&&G.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0&&ce>0,maxBones:ce,useVertexTexture:h,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:V,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:fi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ui,flipSided:y.side===vt,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function S(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)C.push(z),C.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(w(C,y),E(C,y),C.push(n.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function w(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.maxBones),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection)}function E(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.displacementMap&&o.enable(18),C.specularMap&&o.enable(19),C.roughnessMap&&o.enable(20),C.metalnessMap&&o.enable(21),C.gradientMap&&o.enable(22),C.alphaMap&&o.enable(23),C.alphaTest&&o.enable(24),C.vertexColors&&o.enable(25),C.vertexAlphas&&o.enable(26),C.vertexUvs&&o.enable(27),C.vertexTangents&&o.enable(28),C.uvsVertexOnly&&o.enable(29),C.fog&&o.enable(30),y.push(o.mask),o.disableAll(),C.useFog&&o.enable(0),C.flatShading&&o.enable(1),C.logarithmicDepthBuffer&&o.enable(2),C.skinning&&o.enable(3),C.useVertexTexture&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.depthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),y.push(o.mask)}function L(y){const C=x[y.type];let z;if(C){const q=pn[C];z=Wb.clone(q.uniforms)}else z=y.uniforms;return z}function I(y,C){let z;for(let q=0,W=c.length;q<W;q++){const G=c[q];if(G.cacheKey===C){z=G,++z.usedTimes;break}}return z===void 0&&(z=new q2(n,C,y,s),c.push(z)),z}function K(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),y.destroy()}}function Z(y){l.remove(y)}function j(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:L,acquireProgram:I,releaseProgram:K,releaseShaderCache:Z,programs:c,dispose:j}}function J2(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Z2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,g,v,x){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:x},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=x),e++,p}function o(f,h,d,g,v,x){const p=a(f,h,d,g,v,x);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,v,x){const p=a(f,h,d,g,v,x);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Z2),i.length>1&&i.sort(h||yd),r.length>1&&r.sort(h||yd)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Q2(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new bd,n.set(i,[s])):r>=n.get(i).length?(s=new bd,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function eE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ee};break;case"SpotLight":t={position:new R,direction:new R,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function tE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nE=0;function iE(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function rE(n,e){const t=new eE,i=tE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new R);const s=new R,a=new Ce,o=new Ce;function l(u,f){let h=0,d=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let v=0,x=0,p=0,m=0,S=0,w=0,E=0,L=0;u.sort(iE);const I=f!==!0?Math.PI:1;for(let Z=0,j=u.length;Z<j;Z++){const y=u[Z],C=y.color,z=y.intensity,q=y.distance,W=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=C.r*z*I,d+=C.g*z*I,g+=C.b*z*I;else if(y.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(y.sh.coefficients[G],z);else if(y.isDirectionalLight){const G=t.get(y);if(G.color.copy(y.color).multiplyScalar(y.intensity*I),y.castShadow){const H=y.shadow,D=i.get(y);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,r.directionalShadow[v]=D,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=y.shadow.matrix,w++}r.directional[v]=G,v++}else if(y.isSpotLight){const G=t.get(y);if(G.position.setFromMatrixPosition(y.matrixWorld),G.color.copy(C).multiplyScalar(z*I),G.distance=q,G.coneCos=Math.cos(y.angle),G.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),G.decay=y.decay,y.castShadow){const H=y.shadow,D=i.get(y);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,r.spotShadow[p]=D,r.spotShadowMap[p]=W,r.spotShadowMatrix[p]=y.shadow.matrix,L++}r.spot[p]=G,p++}else if(y.isRectAreaLight){const G=t.get(y);G.color.copy(C).multiplyScalar(z),G.halfWidth.set(y.width*.5,0,0),G.halfHeight.set(0,y.height*.5,0),r.rectArea[m]=G,m++}else if(y.isPointLight){const G=t.get(y);if(G.color.copy(y.color).multiplyScalar(y.intensity*I),G.distance=y.distance,G.decay=y.decay,y.castShadow){const H=y.shadow,D=i.get(y);D.shadowBias=H.bias,D.shadowNormalBias=H.normalBias,D.shadowRadius=H.radius,D.shadowMapSize=H.mapSize,D.shadowCameraNear=H.camera.near,D.shadowCameraFar=H.camera.far,r.pointShadow[x]=D,r.pointShadowMap[x]=W,r.pointShadowMatrix[x]=y.shadow.matrix,E++}r.point[x]=G,x++}else if(y.isHemisphereLight){const G=t.get(y);G.skyColor.copy(y.color).multiplyScalar(z*I),G.groundColor.copy(y.groundColor).multiplyScalar(z*I),r.hemi[S]=G,S++}}m>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const K=r.hash;(K.directionalLength!==v||K.pointLength!==x||K.spotLength!==p||K.rectAreaLength!==m||K.hemiLength!==S||K.numDirectionalShadows!==w||K.numPointShadows!==E||K.numSpotShadows!==L)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=m,r.point.length=x,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=L,K.directionalLength=v,K.pointLength=x,K.spotLength=p,K.rectAreaLength=m,K.hemiLength=S,K.numDirectionalShadows=w,K.numPointShadows=E,K.numSpotShadows=L,r.version=nE++)}function c(u,f){let h=0,d=0,g=0,v=0,x=0;const p=f.matrixWorldInverse;for(let m=0,S=u.length;m<S;m++){const w=u[m];if(w.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(w.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(w.isRectAreaLight){const E=r.rectArea[v];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(w.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const E=r.hemi[x];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(p),E.direction.normalize(),x++}}}return{setup:l,setupView:c,state:r}}function Md(n,e){const t=new rE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sE(n,e){let t=new WeakMap;function i(s,a=0){let o;return t.has(s)===!1?(o=new Md(n,e),t.set(s,[o])):a>=t.get(s).length?(o=new Md(n,e),t.get(s).push(o)):o=t.get(s)[a],o}function r(){t=new WeakMap}return{get:i,dispose:r}}class Hu extends ut{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Hu.prototype.isMeshDepthMaterial=!0;class Gu extends ut{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Gu.prototype.isMeshDistanceMaterial=!0;const aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cg(n,e,t){let i=new Wo;const r=new he,s=new he,a=new Ze,o=new Hu({depthPacking:hb}),l=new Gu,c={},u=t.maxTextureSize,f={0:vt,1:Ur,2:Ui},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:aE,fragmentShader:oE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new at;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(g,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um,this.render=function(w,E,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const I=n.getRenderTarget(),K=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),j=n.state;j.setBlending(ui),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);for(let y=0,C=w.length;y<C;y++){const z=w[y],q=z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const W=q.getFrameExtents();if(r.multiply(W),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,q.mapSize.y=s.y)),q.map===null&&!q.isPointLightShadow&&this.type===Ss){const H={minFilter:rt,magFilter:rt,format:Dt};q.map=new jt(r.x,r.y,H),q.map.texture.name=z.name+".shadowMap",q.mapPass=new jt(r.x,r.y,H),q.camera.updateProjectionMatrix()}if(q.map===null){const H={minFilter:xt,magFilter:xt,format:Dt};q.map=new jt(r.x,r.y,H),q.map.texture.name=z.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const G=q.getViewportCount();for(let H=0;H<G;H++){const D=q.getViewport(H);a.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),j.viewport(a),q.updateMatrices(z,H),i=q.getFrustum(),S(E,L,q.camera,z,this.type)}!q.isPointLightShadow&&this.type===Ss&&p(q,L),q.needsUpdate=!1}x.needsUpdate=!1,n.setRenderTarget(I,K,Z)};function p(w,E){const L=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,L,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,L,d,v,null)}function m(w,E,L,I,K,Z){let j=null;const y=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0?j=y:j=L.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const C=j.uuid,z=E.uuid;let q=c[C];q===void 0&&(q={},c[C]=q);let W=q[z];W===void 0&&(W=j.clone(),q[z]=W),j=W}return j.visible=E.visible,j.wireframe=E.wireframe,Z===Ss?j.side=E.shadowSide!==null?E.shadowSide:E.side:j.side=E.shadowSide!==null?E.shadowSide:f[E.side],j.alphaMap=E.alphaMap,j.alphaTest=E.alphaTest,j.clipShadows=E.clipShadows,j.clippingPlanes=E.clippingPlanes,j.clipIntersection=E.clipIntersection,j.displacementMap=E.displacementMap,j.displacementScale=E.displacementScale,j.displacementBias=E.displacementBias,j.wireframeLinewidth=E.wireframeLinewidth,j.linewidth=E.linewidth,L.isPointLight===!0&&j.isMeshDistanceMaterial===!0&&(j.referencePosition.setFromMatrixPosition(L.matrixWorld),j.nearDistance=I,j.farDistance=K),j}function S(w,E,L,I,K){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&K===Ss)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const y=e.update(w),C=w.material;if(Array.isArray(C)){const z=y.groups;for(let q=0,W=z.length;q<W;q++){const G=z[q],H=C[G.materialIndex];if(H&&H.visible){const D=m(w,H,I,L.near,L.far,K);n.renderBufferDirect(L,null,y,D,w,G)}}}else if(C.visible){const z=m(w,C,I,L.near,L.far,K);n.renderBufferDirect(L,null,y,z,w,null)}}const j=w.children;for(let y=0,C=j.length;y<C;y++)S(j[y],E,L,I,K)}}function lE(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const Me=new Ze;let ye=null;const Le=new Ze(0,0,0,0);return{setMask:function(ve){ye!==ve&&!N&&(n.colorMask(ve,ve,ve,ve),ye=ve)},setLocked:function(ve){N=ve},setClear:function(ve,de,De,Ge,Lt){Lt===!0&&(ve*=Ge,de*=Ge,De*=Ge),Me.set(ve,de,De,Ge),Le.equals(Me)===!1&&(n.clearColor(ve,de,De,Ge),Le.copy(Me))},reset:function(){N=!1,ye=null,Le.set(-1,0,0,0)}}}function s(){let N=!1,Me=null,ye=null,Le=null;return{setTest:function(ve){ve?V(2929):B(2929)},setMask:function(ve){Me!==ve&&!N&&(n.depthMask(ve),Me=ve)},setFunc:function(ve){if(ye!==ve){if(ve)switch(ve){case P1:n.depthFunc(512);break;case I1:n.depthFunc(519);break;case D1:n.depthFunc(513);break;case Lc:n.depthFunc(515);break;case N1:n.depthFunc(514);break;case F1:n.depthFunc(518);break;case O1:n.depthFunc(516);break;case k1:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);ye=ve}},setLocked:function(ve){N=ve},setClear:function(ve){Le!==ve&&(n.clearDepth(ve),Le=ve)},reset:function(){N=!1,Me=null,ye=null,Le=null}}}function a(){let N=!1,Me=null,ye=null,Le=null,ve=null,de=null,De=null,Ge=null,Lt=null;return{setTest:function(et){N||(et?V(2960):B(2960))},setMask:function(et){Me!==et&&!N&&(n.stencilMask(et),Me=et)},setFunc:function(et,ln,cn){(ye!==et||Le!==ln||ve!==cn)&&(n.stencilFunc(et,ln,cn),ye=et,Le=ln,ve=cn)},setOp:function(et,ln,cn){(de!==et||De!==ln||Ge!==cn)&&(n.stencilOp(et,ln,cn),de=et,De=ln,Ge=cn)},setLocked:function(et){N=et},setClear:function(et){Lt!==et&&(n.clearStencil(et),Lt=et)},reset:function(){N=!1,Me=null,ye=null,Le=null,ve=null,de=null,De=null,Ge=null,Lt=null}}}const o=new r,l=new s,c=new a;let u={},f={},h=new WeakMap,d=[],g=null,v=!1,x=null,p=null,m=null,S=null,w=null,E=null,L=null,I=!1,K=null,Z=null,j=null,y=null,C=null;const z=n.getParameter(35661);let q=!1,W=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=W>=2);let H=null,D={};const ne=n.getParameter(3088),ue=n.getParameter(2978),le=new Ze().fromArray(ne),ce=new Ze().fromArray(ue);function Ae(N,Me,ye){const Le=new Uint8Array(4),ve=n.createTexture();n.bindTexture(N,ve),n.texParameteri(N,10241,9728),n.texParameteri(N,10240,9728);for(let de=0;de<ye;de++)n.texImage2D(Me+de,0,6408,1,1,0,6408,5121,Le);return ve}const Ue={};Ue[3553]=Ae(3553,3553,1),Ue[34067]=Ae(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),V(2929),l.setFunc(Lc),T(!1),P(gh),V(2884),k(ui);function V(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function B(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function se(N,Me){return f[N]!==Me?(n.bindFramebuffer(N,Me),f[N]=Me,i&&(N===36009&&(f[36160]=Me),N===36160&&(f[36009]=Me)),!0):!1}function fe(N,Me){let ye=d,Le=!1;if(N)if(ye=h.get(Me),ye===void 0&&(ye=[],h.set(Me,ye)),N.isWebGLMultipleRenderTargets){const ve=N.texture;if(ye.length!==ve.length||ye[0]!==36064){for(let de=0,De=ve.length;de<De;de++)ye[de]=36064+de;ye.length=ve.length,Le=!0}}else ye[0]!==36064&&(ye[0]=36064,Le=!0);else ye[0]!==1029&&(ye[0]=1029,Le=!0);Le&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function pe(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const me={[wr]:32774,[y1]:32778,[b1]:32779};if(i)me[yh]=32775,me[bh]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(me[yh]=N.MIN_EXT,me[bh]=N.MAX_EXT)}const _e={[M1]:0,[w1]:1,[S1]:768,[Gm]:770,[L1]:776,[R1]:774,[T1]:772,[E1]:769,[Vm]:771,[C1]:775,[A1]:773};function k(N,Me,ye,Le,ve,de,De,Ge){if(N===ui){v===!0&&(B(3042),v=!1);return}if(v===!1&&(V(3042),v=!0),N!==_1){if(N!==x||Ge!==I){if((p!==wr||w!==wr)&&(n.blendEquation(32774),p=wr,w=wr),Ge)switch(N){case Nr:n.blendFuncSeparate(1,771,1,771);break;case vh:n.blendFunc(1,1);break;case xh:n.blendFuncSeparate(0,769,0,1);break;case _h:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Nr:n.blendFuncSeparate(770,771,1,771);break;case vh:n.blendFunc(770,1);break;case xh:n.blendFuncSeparate(0,769,0,1);break;case _h:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,S=null,E=null,L=null,x=N,I=Ge}return}ve=ve||Me,de=de||ye,De=De||Le,(Me!==p||ve!==w)&&(n.blendEquationSeparate(me[Me],me[ve]),p=Me,w=ve),(ye!==m||Le!==S||de!==E||De!==L)&&(n.blendFuncSeparate(_e[ye],_e[Le],_e[de],_e[De]),m=ye,S=Le,E=de,L=De),x=N,I=null}function b(N,Me){N.side===Ui?B(2884):V(2884);let ye=N.side===vt;Me&&(ye=!ye),T(ye),N.blending===Nr&&N.transparent===!1?k(ui):k(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Le=N.stencilWrite;c.setTest(Le),Le&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),X(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?V(32926):B(32926)}function T(N){K!==N&&(N?n.frontFace(2304):n.frontFace(2305),K=N)}function P(N){N!==g1?(V(2884),N!==Z&&(N===gh?n.cullFace(1029):N===v1?n.cullFace(1028):n.cullFace(1032))):B(2884),Z=N}function F(N){N!==j&&(q&&n.lineWidth(N),j=N)}function X(N,Me,ye){N?(V(32823),(y!==Me||C!==ye)&&(n.polygonOffset(Me,ye),y=Me,C=ye)):B(32823)}function J(N){N?V(3089):B(3089)}function ie(N){N===void 0&&(N=33984+z-1),H!==N&&(n.activeTexture(N),H=N)}function ae(N,Me){H===null&&ie();let ye=D[H];ye===void 0&&(ye={type:void 0,texture:void 0},D[H]=ye),(ye.type!==N||ye.texture!==Me)&&(n.bindTexture(N,Me||Ue[N]),ye.type=N,ye.texture=Me)}function M(){const N=D[H];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){le.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function Re(N){ce.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function Te(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},H=null,D={},f={},h=new WeakMap,d=[],g=null,v=!1,x=null,p=null,m=null,S=null,w=null,E=null,L=null,I=!1,K=null,Z=null,j=null,y=null,C=null,le.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:V,disable:B,bindFramebuffer:se,drawBuffers:fe,useProgram:pe,setBlending:k,setMaterial:b,setFlipSided:T,setCullFace:P,setLineWidth:F,setPolygonOffset:X,setScissorTest:J,activeTexture:ie,bindTexture:ae,unbindTexture:M,compressedTexImage2D:_,texImage2D:Q,texImage3D:be,texStorage2D:re,texStorage3D:ge,texSubImage2D:O,texSubImage3D:U,compressedTexSubImage2D:ee,scissor:we,viewport:Re,reset:Te}}function cE(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(M,_){return x?new OffscreenCanvas(M,_):ea("canvas")}function m(M,_,O,U){let ee=1;if((M.width>U||M.height>U)&&(ee=U/Math.max(M.width,M.height)),ee<1||_===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){const re=_?wo:Math.floor,ge=re(ee*M.width),Q=re(ee*M.height);g===void 0&&(g=p(ge,Q));const be=O?p(ge,Q):g;return be.width=ge,be.height=Q,be.getContext("2d").drawImage(M,0,0,ge,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ge+"x"+Q+")."),be}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function S(M){return Oc(M.width)&&Oc(M.height)}function w(M){return o?!1:M.wrapS!==Ut||M.wrapT!==Ut||M.minFilter!==xt&&M.minFilter!==rt}function E(M,_){return M.generateMipmaps&&_&&M.minFilter!==xt&&M.minFilter!==rt}function L(M){n.generateMipmap(M)}function I(M,_,O,U,ee=!1){if(o===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let re=_;return _===6403&&(O===5126&&(re=33326),O===5131&&(re=33325),O===5121&&(re=33321)),_===33319&&(O===5126&&(re=33328),O===5131&&(re=33327),O===5121&&(re=33323)),_===6408&&(O===5126&&(re=34836),O===5131&&(re=34842),O===5121&&(re=U===Xe&&ee===!1?35907:32856),O===32819&&(re=32854),O===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function K(M,_,O){return E(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==xt&&M.minFilter!==rt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function Z(M){return M===xt||M===Dc||M===Nc?9728:9729}function j(M){const _=M.target;_.removeEventListener("dispose",j),C(_),_.isVideoTexture&&d.delete(_)}function y(M){const _=M.target;_.removeEventListener("dispose",y),q(_)}function C(M){const _=i.get(M);if(_.__webglInit===void 0)return;const O=M.source,U=v.get(O);if(U){const ee=U[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(M),Object.keys(U).length===0&&v.delete(O)}i.remove(M)}function z(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const O=M.source,U=v.get(O);delete U[_.__cacheKey],a.memory.textures--}function q(M){const _=M.texture,O=i.get(M),U=i.get(_);if(U.__webglTexture!==void 0&&(n.deleteTexture(U.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)n.deleteFramebuffer(O.__webglFramebuffer[ee]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ee]);else n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer&&n.deleteRenderbuffer(O.__webglColorRenderbuffer),O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer);if(M.isWebGLMultipleRenderTargets)for(let ee=0,re=_.length;ee<re;ee++){const ge=i.get(_[ee]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(_[ee])}i.remove(_),i.remove(M)}let W=0;function G(){W=0}function H(){const M=W;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),W+=1,M}function D(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.encoding),_.join()}function ne(M,_){const O=i.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const U=M.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,M,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,O.__webglTexture)}function ue(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){se(O,M,_);return}t.activeTexture(33984+_),t.bindTexture(35866,O.__webglTexture)}function le(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){se(O,M,_);return}t.activeTexture(33984+_),t.bindTexture(32879,O.__webglTexture)}function ce(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){fe(O,M,_);return}t.activeTexture(33984+_),t.bindTexture(34067,O.__webglTexture)}const Ae={[Vr]:10497,[Ut]:33071,[yo]:33648},Ue={[xt]:9728,[Dc]:9984,[Nc]:9986,[rt]:9729,[jm]:9985,[Wi]:9987};function V(M,_,O){if(O?(n.texParameteri(M,10242,Ae[_.wrapS]),n.texParameteri(M,10243,Ae[_.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,Ae[_.wrapR]),n.texParameteri(M,10240,Ue[_.magFilter]),n.texParameteri(M,10241,Ue[_.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(_.wrapS!==Ut||_.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,Z(_.magFilter)),n.texParameteri(M,10241,Z(_.minFilter)),_.minFilter!==xt&&_.minFilter!==rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");if(_.type===rn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===xn&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function B(M,_){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",j));const U=_.source;let ee=v.get(U);ee===void 0&&(ee={},v.set(U,ee));const re=D(_);if(re!==M.__cacheKey){ee[re]===void 0&&(ee[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[re].usedTimes++;const ge=ee[M.__cacheKey];ge!==void 0&&(ee[M.__cacheKey].usedTimes--,ge.usedTimes===0&&z(_)),M.__cacheKey=re,M.__webglTexture=ee[re].texture}return O}function se(M,_,O){let U=3553;_.isDataArrayTexture&&(U=35866),_.isData3DTexture&&(U=32879);const ee=B(M,_),re=_.source;if(t.activeTexture(33984+O),t.bindTexture(U,M.__webglTexture),re.version!==re.__currentVersion||ee===!0){n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const ge=w(_)&&S(_.image)===!1;let Q=m(_.image,ge,!1,u);Q=ae(_,Q);const be=S(Q)||o,we=s.convert(_.format,_.encoding);let Re=s.convert(_.type),Te=I(_.internalFormat,we,Re,_.encoding,_.isVideoTexture);V(U,_,be);let N;const Me=_.mipmaps,ye=o&&_.isVideoTexture!==!0,Le=M.__version===void 0,ve=K(_,Q,be);if(_.isDepthTexture)Te=6402,o?_.type===rn?Te=36012:_.type===so?Te=33190:_.type===Fr?Te=35056:Te=33189:_.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ki&&Te===6402&&_.type!==$s&&_.type!==so&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=$s,Re=s.convert(_.type)),_.format===Wr&&Te===6402&&(Te=34041,_.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Fr,Re=s.convert(_.type))),ye&&Le?t.texStorage2D(3553,1,Te,Q.width,Q.height):t.texImage2D(3553,0,Te,Q.width,Q.height,0,we,Re,null);else if(_.isDataTexture)if(Me.length>0&&be){ye&&Le&&t.texStorage2D(3553,ve,Te,Me[0].width,Me[0].height);for(let de=0,De=Me.length;de<De;de++)N=Me[de],ye?t.texSubImage2D(3553,de,0,0,N.width,N.height,we,Re,N.data):t.texImage2D(3553,de,Te,N.width,N.height,0,we,Re,N.data);_.generateMipmaps=!1}else ye?(Le&&t.texStorage2D(3553,ve,Te,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,we,Re,Q.data)):t.texImage2D(3553,0,Te,Q.width,Q.height,0,we,Re,Q.data);else if(_.isCompressedTexture){ye&&Le&&t.texStorage2D(3553,ve,Te,Me[0].width,Me[0].height);for(let de=0,De=Me.length;de<De;de++)N=Me[de],_.format!==Dt?we!==null?ye?t.compressedTexSubImage2D(3553,de,0,0,N.width,N.height,we,N.data):t.compressedTexImage2D(3553,de,Te,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(3553,de,0,0,N.width,N.height,we,Re,N.data):t.texImage2D(3553,de,Te,N.width,N.height,0,we,Re,N.data)}else if(_.isDataArrayTexture)ye?(Le&&t.texStorage3D(35866,ve,Te,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,we,Re,Q.data)):t.texImage3D(35866,0,Te,Q.width,Q.height,Q.depth,0,we,Re,Q.data);else if(_.isData3DTexture)ye?(Le&&t.texStorage3D(32879,ve,Te,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,we,Re,Q.data)):t.texImage3D(32879,0,Te,Q.width,Q.height,Q.depth,0,we,Re,Q.data);else if(_.isFramebufferTexture)ye&&Le?t.texStorage2D(3553,ve,Te,Q.width,Q.height):t.texImage2D(3553,0,Te,Q.width,Q.height,0,we,Re,null);else if(Me.length>0&&be){ye&&Le&&t.texStorage2D(3553,ve,Te,Me[0].width,Me[0].height);for(let de=0,De=Me.length;de<De;de++)N=Me[de],ye?t.texSubImage2D(3553,de,0,0,we,Re,N):t.texImage2D(3553,de,Te,we,Re,N);_.generateMipmaps=!1}else ye?(Le&&t.texStorage2D(3553,ve,Te,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,we,Re,Q)):t.texImage2D(3553,0,Te,we,Re,Q);E(_,be)&&L(U),re.__currentVersion=re.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function fe(M,_,O){if(_.image.length!==6)return;const U=B(M,_),ee=_.source;if(t.activeTexture(33984+O),t.bindTexture(34067,M.__webglTexture),ee.version!==ee.__currentVersion||U===!0){n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const re=_.isCompressedTexture||_.image[0].isCompressedTexture,ge=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let de=0;de<6;de++)!re&&!ge?Q[de]=m(_.image[de],!1,!0,c):Q[de]=ge?_.image[de].image:_.image[de],Q[de]=ae(_,Q[de]);const be=Q[0],we=S(be)||o,Re=s.convert(_.format,_.encoding),Te=s.convert(_.type),N=I(_.internalFormat,Re,Te,_.encoding),Me=o&&_.isVideoTexture!==!0,ye=M.__version===void 0;let Le=K(_,be,we);V(34067,_,we);let ve;if(re){Me&&ye&&t.texStorage2D(34067,Le,N,be.width,be.height);for(let de=0;de<6;de++){ve=Q[de].mipmaps;for(let De=0;De<ve.length;De++){const Ge=ve[De];_.format!==Dt?Re!==null?Me?t.compressedTexSubImage2D(34069+de,De,0,0,Ge.width,Ge.height,Re,Ge.data):t.compressedTexImage2D(34069+de,De,N,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?t.texSubImage2D(34069+de,De,0,0,Ge.width,Ge.height,Re,Te,Ge.data):t.texImage2D(34069+de,De,N,Ge.width,Ge.height,0,Re,Te,Ge.data)}}}else{ve=_.mipmaps,Me&&ye&&(ve.length>0&&Le++,t.texStorage2D(34067,Le,N,Q[0].width,Q[0].height));for(let de=0;de<6;de++)if(ge){Me?t.texSubImage2D(34069+de,0,0,0,Q[de].width,Q[de].height,Re,Te,Q[de].data):t.texImage2D(34069+de,0,N,Q[de].width,Q[de].height,0,Re,Te,Q[de].data);for(let De=0;De<ve.length;De++){const Lt=ve[De].image[de].image;Me?t.texSubImage2D(34069+de,De+1,0,0,Lt.width,Lt.height,Re,Te,Lt.data):t.texImage2D(34069+de,De+1,N,Lt.width,Lt.height,0,Re,Te,Lt.data)}}else{Me?t.texSubImage2D(34069+de,0,0,0,Re,Te,Q[de]):t.texImage2D(34069+de,0,N,Re,Te,Q[de]);for(let De=0;De<ve.length;De++){const Ge=ve[De];Me?t.texSubImage2D(34069+de,De+1,0,0,Re,Te,Ge.image[de]):t.texImage2D(34069+de,De+1,N,Re,Te,Ge.image[de])}}}E(_,we)&&L(34067),ee.__currentVersion=ee.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function pe(M,_,O,U,ee){const re=s.convert(O.format,O.encoding),ge=s.convert(O.type),Q=I(O.internalFormat,re,ge,O.encoding);i.get(_).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,Q,_.width,_.height,_.depth,0,re,ge,null):t.texImage2D(ee,0,Q,_.width,_.height,0,re,ge,null)),t.bindFramebuffer(36160,M),J(_)?h.framebufferTexture2DMultisampleEXT(36160,U,ee,i.get(O).__webglTexture,0,X(_)):n.framebufferTexture2D(36160,U,ee,i.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function me(M,_,O){if(n.bindRenderbuffer(36161,M),_.depthBuffer&&!_.stencilBuffer){let U=33189;if(O||J(_)){const ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===rn?U=36012:ee.type===so&&(U=33190));const re=X(_);J(_)?h.renderbufferStorageMultisampleEXT(36161,re,U,_.width,_.height):n.renderbufferStorageMultisample(36161,re,U,_.width,_.height)}else n.renderbufferStorage(36161,U,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(_.depthBuffer&&_.stencilBuffer){const U=X(_);O&&J(_)===!1?n.renderbufferStorageMultisample(36161,U,35056,_.width,_.height):J(_)?h.renderbufferStorageMultisampleEXT(36161,U,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const U=_.isWebGLMultipleRenderTargets===!0?_.texture[0]:_.texture,ee=s.convert(U.format,U.encoding),re=s.convert(U.type),ge=I(U.internalFormat,ee,re,U.encoding),Q=X(_);O&&J(_)===!1?n.renderbufferStorageMultisample(36161,Q,ge,_.width,_.height):J(_)?h.renderbufferStorageMultisampleEXT(36161,Q,ge,_.width,_.height):n.renderbufferStorage(36161,ge,_.width,_.height)}n.bindRenderbuffer(36161,null)}function _e(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const U=i.get(_.depthTexture).__webglTexture,ee=X(_);if(_.depthTexture.format===ki)J(_)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,U,0,ee):n.framebufferTexture2D(36160,36096,3553,U,0);else if(_.depthTexture.format===Wr)J(_)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,U,0,ee):n.framebufferTexture2D(36160,33306,3553,U,0);else throw new Error("Unknown depthTexture format")}function k(M){const _=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");_e(_.__webglFramebuffer,M)}else if(O){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(36160,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]=n.createRenderbuffer(),me(_.__webglDepthbuffer[U],M,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),me(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function b(M,_,O){const U=i.get(M);_!==void 0&&pe(U.__webglFramebuffer,M,M.texture,36064,3553),O!==void 0&&k(M)}function T(M){const _=M.texture,O=i.get(M),U=i.get(_);M.addEventListener("dispose",y),M.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=_.version,a.memory.textures++);const ee=M.isWebGLCubeRenderTarget===!0,re=M.isWebGLMultipleRenderTargets===!0,ge=S(M)||o;if(ee){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)O.__webglFramebuffer[Q]=n.createFramebuffer()}else if(O.__webglFramebuffer=n.createFramebuffer(),re)if(r.drawBuffers){const Q=M.texture;for(let be=0,we=Q.length;be<we;be++){const Re=i.get(Q[be]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(o&&M.samples>0&&J(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer);const Q=s.convert(_.format,_.encoding),be=s.convert(_.type),we=I(_.internalFormat,Q,be,_.encoding),Re=X(M);n.renderbufferStorageMultisample(36161,Re,we,M.width,M.height),t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,O.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),me(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}if(ee){t.bindTexture(34067,U.__webglTexture),V(34067,_,ge);for(let Q=0;Q<6;Q++)pe(O.__webglFramebuffer[Q],M,_,36064,34069+Q);E(_,ge)&&L(34067),t.unbindTexture()}else if(re){const Q=M.texture;for(let be=0,we=Q.length;be<we;be++){const Re=Q[be],Te=i.get(Re);t.bindTexture(3553,Te.__webglTexture),V(3553,Re,ge),pe(O.__webglFramebuffer,M,Re,36064+be,3553),E(Re,ge)&&L(3553)}t.unbindTexture()}else{let Q=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?Q=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,U.__webglTexture),V(Q,_,ge),pe(O.__webglFramebuffer,M,_,36064,Q),E(_,ge)&&L(Q),t.unbindTexture()}M.depthBuffer&&k(M)}function P(M){const _=S(M)||o,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let U=0,ee=O.length;U<ee;U++){const re=O[U];if(E(re,_)){const ge=M.isWebGLCubeRenderTarget?34067:3553,Q=i.get(re).__webglTexture;t.bindTexture(ge,Q),L(ge),t.unbindTexture()}}}function F(M){if(o&&M.samples>0&&J(M)===!1){const _=M.width,O=M.height;let U=16384;const ee=[36064],re=M.stencilBuffer?33306:36096;M.depthBuffer&&ee.push(re);const ge=i.get(M),Q=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;Q===!1&&(M.depthBuffer&&(U|=256),M.stencilBuffer&&(U|=1024)),t.bindFramebuffer(36008,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ge.__webglFramebuffer),Q===!0&&(n.invalidateFramebuffer(36008,[re]),n.invalidateFramebuffer(36009,[re])),n.blitFramebuffer(0,0,_,O,0,0,_,O,U,9728),n.invalidateFramebuffer(36008,ee),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ge.__webglMultisampledFramebuffer)}}function X(M){return Math.min(f,M.samples)}function J(M){const _=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ie(M){const _=a.render.frame;d.get(M)!==_&&(d.set(M,_),M.update())}function ae(M,_){const O=M.encoding,U=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Fc||O!==yn&&(O===Xe?o===!1?e.has("EXT_sRGB")===!0&&U===Dt?(M.format=Fc,M.minFilter=rt,M.generateMipmaps=!1):_=qi.sRGBToLinear(_):(U!==Dt||ee!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),_}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=ue,this.setTexture3D=le,this.setTextureCube=ce,this.rebindTextures=b,this.setupRenderTarget=T,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=J}function uE(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===Hi)return 5121;if(s===Y1)return 32819;if(s===K1)return 32820;if(s===j1)return 5120;if(s===q1)return 5122;if(s===$s)return 5123;if(s===X1)return 5124;if(s===so)return 5125;if(s===rn)return 5126;if(s===xn)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===$1)return 6406;if(s===Dt)return 6408;if(s===Z1)return 6409;if(s===Q1)return 6410;if(s===ki)return 6402;if(s===Wr)return 34041;if(s===eb)return 6403;if(s===J1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Fc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===tb)return 36244;if(s===nb)return 33319;if(s===ib)return 33320;if(s===rb)return 36249;if(s===pl||s===ml||s===gl||s===vl)if(a===Xe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ml)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mh||s===wh||s===Sh||s===Eh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Mh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Eh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sb)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Th||s===Ah)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Th)return a===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ah)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rh||s===Ch||s===Lh||s===Ph||s===Ih||s===Dh||s===Nh||s===Fh||s===Oh||s===kh||s===Bh||s===zh||s===Uh||s===Hh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Rh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ch)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ph)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ih)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hh)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Gh)return a===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Fr)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class ug extends It{constructor(e=[]){super();this.cameras=e}}ug.prototype.isArrayCamera=!0;class ai extends $e{constructor(){super();this.type="Group"}}ai.prototype.isGroup=!0;const fE={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fE))),c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,i);if(c.joints[v.jointName]===void 0){const m=new ai;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[v.jointName]=m,c.add(m)}const p=c.joints[v.jointName];x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=x.radius),p.visible=x!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class fg extends gt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ki,u!==ki&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ki&&(i=$s),i===void 0&&u===Wr&&(i=Fr);super(null,r,s,a,o,l,u,i,c);this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}}fg.prototype.isDepthTexture=!0;class hE extends _i{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null;const d=t.getContextAttributes();let g=null,v=null;const x=[],p=new Map,m=new It;m.layers.enable(1),m.viewport=new Ze;const S=new It;S.layers.enable(2),S.viewport=new Ze;const w=[m,S],E=new ug;E.layers.enable(1),E.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let ne=x[D];return ne===void 0&&(ne=new jl,x[D]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(D){let ne=x[D];return ne===void 0&&(ne=new jl,x[D]=ne),ne.getGripSpace()},this.getHand=function(D){let ne=x[D];return ne===void 0&&(ne=new jl,x[D]=ne),ne.getHandSpace()};function K(D){const ne=p.get(D.inputSource);ne&&ne.dispatchEvent({type:D.type,data:D.inputSource})}function Z(){p.forEach(function(D,ne){D.disconnect(ne)}),p.clear(),L=null,I=null,e.setRenderTarget(g),f=null,u=null,c=null,r=null,v=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return c},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",j),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:f}),v=new jt(f.framebufferWidth,f.framebufferHeight,{format:Dt,type:Hi,encoding:e.outputEncoding})}else{let ne=null,ue=null,le=null;d.depth&&(le=d.stencil?35056:33190,ne=d.stencil?Wr:ki,ue=d.stencil?Fr:$s);const ce={colorFormat:e.outputEncoding===Xe?35907:32856,depthFormat:le,scaleFactor:s};c=new XRWebGLBinding(r,t),u=c.createProjectionLayer(ce),r.updateRenderState({layers:[u]}),v=new jt(u.textureWidth,u.textureHeight,{format:Dt,type:Hi,depthTexture:new fg(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const Ae=e.properties.get(v);Ae.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),a=await r.requestReferenceSpace(o),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function j(D){const ne=r.inputSources;for(let ue=0;ue<x.length;ue++)p.set(ne[ue],x[ue]);for(let ue=0;ue<D.removed.length;ue++){const le=D.removed[ue],ce=p.get(le);ce&&(ce.dispatchEvent({type:"disconnected",data:le}),p.delete(le))}for(let ue=0;ue<D.added.length;ue++){const le=D.added[ue],ce=p.get(le);ce&&ce.dispatchEvent({type:"connected",data:le})}}const y=new R,C=new R;function z(D,ne,ue){y.setFromMatrixPosition(ne.matrixWorld),C.setFromMatrixPosition(ue.matrixWorld);const le=y.distanceTo(C),ce=ne.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,Ue=ce[14]/(ce[10]-1),V=ce[14]/(ce[10]+1),B=(ce[9]+1)/ce[5],se=(ce[9]-1)/ce[5],fe=(ce[8]-1)/ce[0],pe=(Ae[8]+1)/Ae[0],me=Ue*fe,_e=Ue*pe,k=le/(-fe+pe),b=k*-fe;ne.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(b),D.translateZ(k),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const T=Ue+k,P=V+k,F=me-b,X=_e+(le-b),J=B*V/P*T,ie=se*V/P*T;D.projectionMatrix.makePerspective(F,X,J,ie,T,P)}function q(D,ne){ne===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(ne.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;E.near=S.near=m.near=D.near,E.far=S.far=m.far=D.far,(L!==E.near||I!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,I=E.far);const ne=D.parent,ue=E.cameras;q(E,ne);for(let ce=0;ce<ue.length;ce++)q(ue[ce],ne);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),D.position.copy(E.position),D.quaternion.copy(E.quaternion),D.scale.copy(E.scale),D.matrix.copy(E.matrix),D.matrixWorld.copy(E.matrixWorld);const le=D.children;for(let ce=0,Ae=le.length;ce<Ae;ce++)le[ce].updateMatrixWorld(!0);ue.length===2?z(E,m,S):E.projectionMatrix.copy(m.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(D){u!==null&&(u.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)};let W=null;function G(D,ne){if(l=ne.getViewerPose(a),h=ne,l!==null){const le=l.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ce=!1;le.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let Ae=0;Ae<le.length;Ae++){const Ue=le[Ae];let V=null;if(f!==null)V=f.getViewport(Ue);else{const se=c.getViewSubImage(u,Ue);V=se.viewport,Ae===0&&(e.setRenderTargetTextures(v,se.colorTexture,u.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(v))}const B=w[Ae];B.matrix.fromArray(Ue.transform.matrix),B.projectionMatrix.fromArray(Ue.projectionMatrix),B.viewport.set(V.x,V.y,V.width,V.height),Ae===0&&E.matrix.copy(B.matrix),ce===!0&&E.cameras.push(B)}}const ue=r.inputSources;for(let le=0;le<x.length;le++){const ce=x[le],Ae=ue[le];ce.update(Ae,ne,a)}W&&W(D,ne),h=null}const H=new tg;H.setAnimationLoop(G),this.setAnimationLoop=function(D){W=D},this.dispose=function(){}}}function dE(n){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,S,w,E){m.isMeshBasicMaterial?i(p,m):m.isMeshLambertMaterial?(i(p,m),l(p,m)):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),m.isMeshPhysicalMaterial?h(p,m,E):f(p,m)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?(i(p,m),g(p,m)):m.isMeshDistanceMaterial?(i(p,m),v(p,m)):m.isMeshNormalMaterial?(i(p,m),x(p,m)):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?a(p,m,S,w):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=n.get(m).envMap;S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let w;m.map?w=m.map:m.specularMap?w=m.specularMap:m.displacementMap?w=m.displacementMap:m.normalMap?w=m.normalMap:m.bumpMap?w=m.bumpMap:m.roughnessMap?w=m.roughnessMap:m.metalnessMap?w=m.metalnessMap:m.alphaMap?w=m.alphaMap:m.emissiveMap?w=m.emissiveMap:m.clearcoatMap?w=m.clearcoatMap:m.clearcoatNormalMap?w=m.clearcoatNormalMap:m.clearcoatRoughnessMap?w=m.clearcoatRoughnessMap:m.specularIntensityMap?w=m.specularIntensityMap:m.specularColorMap?w=m.specularColorMap:m.transmissionMap?w=m.transmissionMap:m.thicknessMap?w=m.thicknessMap:m.sheenColorMap?w=m.sheenColorMap:m.sheenRoughnessMap&&(w=m.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,S,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=w*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===vt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===vt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===vt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===vt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===vt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===vt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),n.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,S){f(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===vt&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===vt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===vt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function v(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function x(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===vt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===vt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function pE(){const n=ea("canvas");return n.style.display="block",n}function Qe(n={}){const e=n.canvas!==void 0?n.canvas:pE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;n.context!==void 0?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yn,this.physicallyCorrectLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;const v=this;let x=!1,p=0,m=0,S=null,w=-1,E=null;const L=new Ze,I=new Ze;let K=null,Z=e.width,j=e.height,y=1,C=null,z=null;const q=new Ze(0,0,Z,j),W=new Ze(0,0,Z,j);let G=!1;const H=new Wo;let D=!1,ne=!1,ue=null;const le=new Ce,ce=new he,Ae=new R,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return S===null?y:1}let B=t;function se(A,Y){for(let te=0;te<A.length;te++){const $=A[te],oe=e.getContext($,Y);if(oe!==null)return oe}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pu}`),e.addEventListener("webglcontextlost",N,!1),e.addEventListener("webglcontextrestored",Me,!1),B===null){const Y=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Y.shift(),B=se(Y,A),B===null)throw se(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let fe,pe,me,_e,k,b,T,P,F,X,J,ie,ae,M,_,O,U,ee,re,ge,Q,be,we;function Re(){fe=new IS(B),pe=new TS(B,fe,n),fe.init(pe),be=new uE(B,fe,pe),me=new lE(B,fe,pe),_e=new FS(B),k=new J2,b=new cE(B,fe,me,k,pe,be,_e),T=new RS(v),P=new PS(v),F=new Kb(B,pe),we=new SS(B,fe,F,pe),X=new DS(B,F,_e,we),J=new zS(B,X,F,_e),re=new BS(B,pe,b),O=new AS(k),ie=new $2(v,T,P,fe,pe,we,O),ae=new dE(k),M=new Q2,_=new sE(fe,pe),ee=new wS(v,T,me,J,u,a),U=new cg(v,J,pe),ge=new ES(B,fe,_e,pe),Q=new NS(B,fe,_e,pe),_e.programs=ie.programs,v.capabilities=pe,v.extensions=fe,v.properties=k,v.renderLists=M,v.shadowMap=U,v.state=me,v.info=_e}Re();const Te=new hE(v,B);this.xr=Te,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(A){A!==void 0&&(y=A,this.setSize(Z,j,!1))},this.getSize=function(A){return A.set(Z,j)},this.setSize=function(A,Y,te){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,j=Y,e.width=Math.floor(A*y),e.height=Math.floor(Y*y),te!==!1&&(e.style.width=A+"px",e.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(Z*y,j*y).floor()},this.setDrawingBufferSize=function(A,Y,te){Z=A,j=Y,y=te,e.width=Math.floor(A*te),e.height=Math.floor(Y*te),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,Y,te,$){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,Y,te,$),me.viewport(L.copy(q).multiplyScalar(y).floor())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,Y,te,$){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,Y,te,$),me.scissor(I.copy(W).multiplyScalar(y).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){me.setScissorTest(G=A)},this.setOpaqueSort=function(A){C=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,Y=!0,te=!0){let $=0;A&&($|=16384),Y&&($|=256),te&&($|=1024),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",N,!1),e.removeEventListener("webglcontextrestored",Me,!1),M.dispose(),_.dispose(),k.dispose(),T.dispose(),P.dispose(),J.dispose(),we.dispose(),ie.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ge),Te.removeEventListener("sessionend",Lt),ue&&(ue.dispose(),ue=null),et.stop()};function N(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=_e.autoReset,Y=U.enabled,te=U.autoUpdate,$=U.needsUpdate,oe=U.type;Re(),_e.autoReset=A,U.enabled=Y,U.autoUpdate=te,U.needsUpdate=$,U.type=oe}function ye(A){const Y=A.target;Y.removeEventListener("dispose",ye),Le(Y)}function Le(A){ve(A),k.remove(A)}function ve(A){const Y=k.get(A).programs;Y!==void 0&&(Y.forEach(function(te){ie.releaseProgram(te)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,te,$,oe,Ie){Y===null&&(Y=Ue);const Ne=oe.isMesh&&oe.matrixWorld.determinant()<0,ke=$g(A,Y,te,$,oe);me.setMaterial($,Ne);let Fe=te.index;const Je=te.attributes.position;if(Fe===null){if(Je===void 0||Je.count===0)return}else if(Fe.count===0)return;let Ve=1;$.wireframe===!0&&(Fe=X.getWireframeAttribute(te),Ve=2),we.setup(oe,$,ke,te,Fe);let We,ct=ge;Fe!==null&&(We=F.get(Fe),ct=Q,ct.setIndex(We));const Mi=Fe!==null?Fe.count:Je.count,$i=te.drawRange.start*Ve,Ji=te.drawRange.count*Ve,un=Ie!==null?Ie.start*Ve:0,qe=Ie!==null?Ie.count*Ve:1/0,Zi=Math.max($i,un),pt=Math.min(Mi,$i+Ji,un+qe)-1,fn=Math.max(0,pt-Zi+1);if(fn!==0){if(oe.isMesh)$.wireframe===!0?(me.setLineWidth($.wireframeLinewidth*V()),ct.setMode(1)):ct.setMode(4);else if(oe.isLine){let Vn=$.linewidth;Vn===void 0&&(Vn=1),me.setLineWidth(Vn*V()),oe.isLineSegments?ct.setMode(1):oe.isLineLoop?ct.setMode(2):ct.setMode(3)}else oe.isPoints?ct.setMode(0):oe.isSprite&&ct.setMode(4);if(oe.isInstancedMesh)ct.renderInstances(Zi,fn,oe.count);else if(te.isInstancedBufferGeometry){const Vn=Math.min(te.instanceCount,te._maxInstanceCount);ct.renderInstances(Zi,fn,Vn)}else ct.render(Zi,fn)}},this.compile=function(A,Y){h=_.get(A),h.init(),g.push(h),A.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(h.pushLight(te),te.castShadow&&h.pushShadow(te))}),h.setupLights(v.physicallyCorrectLights),A.traverse(function(te){const $=te.material;if($)if(Array.isArray($))for(let oe=0;oe<$.length;oe++){const Ie=$[oe];el(Ie,A,te)}else el($,A,te)}),g.pop(),h=null};let de=null;function De(A){de&&de(A)}function Ge(){et.stop()}function Lt(){et.start()}const et=new tg;et.setAnimationLoop(De),typeof window!="undefined"&&et.setContext(window),this.setAnimationLoop=function(A){de=A,Te.setAnimationLoop(A),A===null?et.stop():et.start()},Te.addEventListener("sessionstart",Ge),Te.addEventListener("sessionend",Lt),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Y),Y=Te.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,Y,S),h=_.get(A,g.length),h.init(),g.push(h),le.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H.setFromProjectionMatrix(le),ne=this.localClippingEnabled,D=O.init(this.clippingPlanes,ne,Y),f=M.get(A,d.length),f.init(),d.push(f),ln(A,Y,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(C,z),D===!0&&O.beginShadows();const te=h.state.shadowsArray;if(U.render(te,A,Y),D===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,A),h.setupLights(v.physicallyCorrectLights),Y.isArrayCamera){const $=Y.cameras;for(let oe=0,Ie=$.length;oe<Ie;oe++){const Ne=$[oe];cn(f,A,Ne,Ne.viewport)}}else cn(f,A,Y);S!==null&&(b.updateMultisampleRenderTarget(S),b.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(v,A,Y),we.resetDefaultState(),w=-1,E=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function ln(A,Y,te,$){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){$&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const Ne=J.update(A),ke=A.material;ke.visible&&f.push(A,Ne,ke,te,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==_e.render.frame&&(A.skeleton.update(),A.skeleton.frame=_e.render.frame),!A.frustumCulled||H.intersectsObject(A))){$&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const Ne=J.update(A),ke=A.material;if(Array.isArray(ke)){const Fe=Ne.groups;for(let Je=0,Ve=Fe.length;Je<Ve;Je++){const We=Fe[Je],ct=ke[We.materialIndex];ct&&ct.visible&&f.push(A,Ne,ct,te,Ae.z,We)}}else ke.visible&&f.push(A,Ne,ke,te,Ae.z,null)}}const Ie=A.children;for(let Ne=0,ke=Ie.length;Ne<ke;Ne++)ln(Ie[Ne],Y,te,$)}function cn(A,Y,te,$){const oe=A.opaque,Ie=A.transmissive,Ne=A.transparent;h.setupLightsView(te),Ie.length>0&&Yg(oe,Y,te),$&&me.viewport(L.copy($)),oe.length>0&&ha(oe,Y,te),Ie.length>0&&ha(Ie,Y,te),Ne.length>0&&ha(Ne,Y,te),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Yg(A,Y,te){const $=pe.isWebGL2;ue===null&&(ue=new jt(1,1,{generateMipmaps:!0,type:be.convert(xn)!==null?xn:Hi,minFilter:Wi,samples:$&&s===!0?4:0})),v.getDrawingBufferSize(ce),$?ue.setSize(ce.x,ce.y):ue.setSize(wo(ce.x),wo(ce.y));const oe=v.getRenderTarget();v.setRenderTarget(ue),v.clear();const Ie=v.toneMapping;v.toneMapping=fi,ha(A,Y,te),v.toneMapping=Ie,b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue),v.setRenderTarget(oe)}function ha(A,Y,te){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let oe=0,Ie=A.length;oe<Ie;oe++){const Ne=A[oe],ke=Ne.object,Fe=Ne.geometry,Je=$===null?Ne.material:$,Ve=Ne.group;ke.layers.test(te.layers)&&Kg(ke,Y,te,Fe,Je,Ve)}}function Kg(A,Y,te,$,oe,Ie){A.onBeforeRender(v,Y,te,$,oe,Ie),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(v,Y,te,$,A,Ie),oe.transparent===!0&&oe.side===Ui?(oe.side=vt,oe.needsUpdate=!0,v.renderBufferDirect(te,Y,$,oe,A,Ie),oe.side=Ur,oe.needsUpdate=!0,v.renderBufferDirect(te,Y,$,oe,A,Ie),oe.side=Ui):v.renderBufferDirect(te,Y,$,oe,A,Ie),A.onAfterRender(v,Y,te,$,oe,Ie)}function el(A,Y,te){Y.isScene!==!0&&(Y=Ue);const $=k.get(A),oe=h.state.lights,Ie=h.state.shadowsArray,Ne=oe.state.version,ke=ie.getParameters(A,oe.state,Ie,Y,te),Fe=ie.getProgramCacheKey(ke);let Je=$.programs;$.environment=A.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(A.isMeshStandardMaterial?P:T).get(A.envMap||$.environment),Je===void 0&&(A.addEventListener("dispose",ye),Je=new Map,$.programs=Je);let Ve=Je.get(Fe);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Ne)return rf(A,ke),Ve}else ke.uniforms=ie.getUniforms(A),A.onBuild(te,ke,v),A.onBeforeCompile(ke,v),Ve=ie.acquireProgram(ke,Fe),Je.set(Fe,Ve),$.uniforms=ke.uniforms;const We=$.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=O.uniform),rf(A,ke),$.needsLights=Zg(A),$.lightsStateVersion=Ne,$.needsLights&&(We.ambientLightColor.value=oe.state.ambient,We.lightProbe.value=oe.state.probe,We.directionalLights.value=oe.state.directional,We.directionalLightShadows.value=oe.state.directionalShadow,We.spotLights.value=oe.state.spot,We.spotLightShadows.value=oe.state.spotShadow,We.rectAreaLights.value=oe.state.rectArea,We.ltc_1.value=oe.state.rectAreaLTC1,We.ltc_2.value=oe.state.rectAreaLTC2,We.pointLights.value=oe.state.point,We.pointLightShadows.value=oe.state.pointShadow,We.hemisphereLights.value=oe.state.hemi,We.directionalShadowMap.value=oe.state.directionalShadowMap,We.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,We.spotShadowMap.value=oe.state.spotShadowMap,We.spotShadowMatrix.value=oe.state.spotShadowMatrix,We.pointShadowMap.value=oe.state.pointShadowMap,We.pointShadowMatrix.value=oe.state.pointShadowMatrix);const ct=Ve.getUniforms(),Mi=hi.seqWithValue(ct.seq,We);return $.currentProgram=Ve,$.uniformsList=Mi,Ve}function rf(A,Y){const te=k.get(A);te.outputEncoding=Y.outputEncoding,te.instancing=Y.instancing,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function $g(A,Y,te,$,oe){Y.isScene!==!0&&(Y=Ue),b.resetTextureUnits();const Ie=Y.fog,Ne=$.isMeshStandardMaterial?Y.environment:null,ke=S===null?v.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:yn,Fe=($.isMeshStandardMaterial?P:T).get($.envMap||Ne),Je=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ve=!!$.normalMap&&!!te.attributes.tangent,We=!!te.morphAttributes.position,ct=!!te.morphAttributes.normal,Mi=!!te.morphAttributes.color,$i=$.toneMapped?v.toneMapping:fi,Ji=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,un=Ji!==void 0?Ji.length:0,qe=k.get($),Zi=h.state.lights;if(D===!0&&(ne===!0||A!==E)){const Zt=A===E&&$.id===w;O.setState($,A,Zt)}let pt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Zi.state.version||qe.outputEncoding!==ke||oe.isInstancedMesh&&qe.instancing===!1||!oe.isInstancedMesh&&qe.instancing===!0||oe.isSkinnedMesh&&qe.skinning===!1||!oe.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Fe||$.fog&&qe.fog!==Ie||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==O.numPlanes||qe.numIntersection!==O.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==Ve||qe.morphTargets!==We||qe.morphNormals!==ct||qe.morphColors!==Mi||qe.toneMapping!==$i||pe.isWebGL2===!0&&qe.morphTargetsCount!==un)&&(pt=!0):(pt=!0,qe.__version=$.version);let fn=qe.currentProgram;pt===!0&&(fn=el($,Y,oe));let Vn=!1,as=!1,tl=!1;const Et=fn.getUniforms(),os=qe.uniforms;if(me.useProgram(fn.program)&&(Vn=!0,as=!0,tl=!0),$.id!==w&&(w=$.id,as=!0),Vn||E!==A){if(Et.setValue(B,"projectionMatrix",A.projectionMatrix),pe.logarithmicDepthBuffer&&Et.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),E!==A&&(E=A,as=!0,tl=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Zt=Et.map.cameraPosition;Zt!==void 0&&Zt.setValue(B,Ae.setFromMatrixPosition(A.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||oe.isSkinnedMesh)&&Et.setValue(B,"viewMatrix",A.matrixWorldInverse)}if(oe.isSkinnedMesh){Et.setOptional(B,oe,"bindMatrix"),Et.setOptional(B,oe,"bindMatrixInverse");const Zt=oe.skeleton;Zt&&(pe.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Et.setValue(B,"boneTexture",Zt.boneTexture,b),Et.setValue(B,"boneTextureSize",Zt.boneTextureSize)):Et.setOptional(B,Zt,"boneMatrices"))}const nl=te.morphAttributes;return(nl.position!==void 0||nl.normal!==void 0||nl.color!==void 0&&pe.isWebGL2===!0)&&re.update(oe,te,$,fn),(as||qe.receiveShadow!==oe.receiveShadow)&&(qe.receiveShadow=oe.receiveShadow,Et.setValue(B,"receiveShadow",oe.receiveShadow)),as&&(Et.setValue(B,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Jg(os,tl),Ie&&$.fog&&ae.refreshFogUniforms(os,Ie),ae.refreshMaterialUniforms(os,$,y,j,ue),hi.upload(B,qe.uniformsList,os,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hi.upload(B,qe.uniformsList,os,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(B,"center",oe.center),Et.setValue(B,"modelViewMatrix",oe.modelViewMatrix),Et.setValue(B,"normalMatrix",oe.normalMatrix),Et.setValue(B,"modelMatrix",oe.matrixWorld),fn}function Jg(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Zg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,Y,te){k.get(A.texture).__webglTexture=Y,k.get(A.depthTexture).__webglTexture=te;const $=k.get(A);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=te===void 0,$.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,Y){const te=k.get(A);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,te=0){S=A,p=Y,m=te;let $=!0;if(A){const Fe=k.get(A);Fe.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),$=!1):Fe.__webglFramebuffer===void 0?b.setupRenderTarget(A):Fe.__hasExternalTextures&&b.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture)}let oe=null,Ie=!1,Ne=!1;if(A){const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture)&&(Ne=!0);const Je=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(oe=Je[Y],Ie=!0):pe.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?oe=k.get(A).__webglMultisampledFramebuffer:oe=Je,L.copy(A.viewport),I.copy(A.scissor),K=A.scissorTest}else L.copy(q).multiplyScalar(y).floor(),I.copy(W).multiplyScalar(y).floor(),K=G;if(me.bindFramebuffer(36160,oe)&&pe.drawBuffers&&$&&me.drawBuffers(A,oe),me.viewport(L),me.scissor(I),me.setScissorTest(K),Ie){const Fe=k.get(A.texture);B.framebufferTexture2D(36160,36064,34069+Y,Fe.__webglTexture,te)}else if(Ne){const Fe=k.get(A.texture),Je=Y||0;B.framebufferTextureLayer(36160,36064,Fe.__webglTexture,te||0,Je)}w=-1},this.readRenderTargetPixels=function(A,Y,te,$,oe,Ie,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){me.bindFramebuffer(36160,ke);try{const Fe=A.texture,Je=Fe.format,Ve=Fe.type;if(Je!==Dt&&be.convert(Je)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===xn&&(fe.has("EXT_color_buffer_half_float")||pe.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Ve!==Hi&&be.convert(Ve)!==B.getParameter(35738)&&!(Ve===rn&&(pe.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B.checkFramebufferStatus(36160)===36053?Y>=0&&Y<=A.width-$&&te>=0&&te<=A.height-oe&&B.readPixels(Y,te,$,oe,be.convert(Je),be.convert(Ve),Ie):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Fe=S!==null?k.get(S).__webglFramebuffer:null;me.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(A,Y,te=0){if(Y.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const $=Math.pow(2,-te),oe=Math.floor(Y.image.width*$),Ie=Math.floor(Y.image.height*$);b.setTexture2D(Y,0),B.copyTexSubImage2D(3553,te,0,0,A.x,A.y,oe,Ie),me.unbindTexture()},this.copyTextureToTexture=function(A,Y,te,$=0){const oe=Y.image.width,Ie=Y.image.height,Ne=be.convert(te.format),ke=be.convert(te.type);b.setTexture2D(te,0),B.pixelStorei(37440,te.flipY),B.pixelStorei(37441,te.premultiplyAlpha),B.pixelStorei(3317,te.unpackAlignment),Y.isDataTexture?B.texSubImage2D(3553,$,A.x,A.y,oe,Ie,Ne,ke,Y.image.data):Y.isCompressedTexture?B.compressedTexSubImage2D(3553,$,A.x,A.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ne,Y.mipmaps[0].data):B.texSubImage2D(3553,$,A.x,A.y,Ne,ke,Y.image),$===0&&te.generateMipmaps&&B.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,te,$,oe=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=A.max.x-A.min.x+1,Ne=A.max.y-A.min.y+1,ke=A.max.z-A.min.z+1,Fe=be.convert($.format),Je=be.convert($.type);let Ve;if($.isData3DTexture)b.setTexture3D($,0),Ve=32879;else if($.isDataArrayTexture)b.setTexture2DArray($,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,$.flipY),B.pixelStorei(37441,$.premultiplyAlpha),B.pixelStorei(3317,$.unpackAlignment);const We=B.getParameter(3314),ct=B.getParameter(32878),Mi=B.getParameter(3316),$i=B.getParameter(3315),Ji=B.getParameter(32877),un=te.isCompressedTexture?te.mipmaps[0]:te.image;B.pixelStorei(3314,un.width),B.pixelStorei(32878,un.height),B.pixelStorei(3316,A.min.x),B.pixelStorei(3315,A.min.y),B.pixelStorei(32877,A.min.z),te.isDataTexture||te.isData3DTexture?B.texSubImage3D(Ve,oe,Y.x,Y.y,Y.z,Ie,Ne,ke,Fe,Je,un.data):te.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ve,oe,Y.x,Y.y,Y.z,Ie,Ne,ke,Fe,un.data)):B.texSubImage3D(Ve,oe,Y.x,Y.y,Y.z,Ie,Ne,ke,Fe,Je,un),B.pixelStorei(3314,We),B.pixelStorei(32878,ct),B.pixelStorei(3316,Mi),B.pixelStorei(3315,$i),B.pixelStorei(32877,Ji),oe===0&&$.generateMipmaps&&B.generateMipmap(Ve),me.unbindTexture()},this.initTexture=function(A){b.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){p=0,m=0,S=null,me.reset(),we.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Qe.prototype.isWebGLRenderer=!0;class mE extends Qe{}mE.prototype.isWebGL1Renderer=!0;class hg extends $e{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}hg.prototype.isScene=!0;class ts{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ts.prototype.isInterleavedBuffer=!0;const ft=new R;class Xr{constructor(e,t,i,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.x=this.getX(t),ft.y=this.getY(t),ft.z=this.getZ(t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Xr.prototype.isInterleavedBufferAttribute=!0;class Vu extends ut{constructor(e){super();this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Vu.prototype.isSpriteMaterial=!0;let pr;const ds=new R,mr=new R,gr=new R,vr=new he,ps=new he,dg=new Ce,za=new R,ms=new R,Ua=new R,wd=new he,ql=new he,Sd=new he;class gE extends $e{constructor(e){super();if(this.type="Sprite",pr===void 0){pr=new at;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ts(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new Xr(i,3,0,!1)),pr.setAttribute("uv",new Xr(i,2,3,!1))}this.geometry=pr,this.material=e!==void 0?e:new Vu,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),dg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ha(za.set(-.5,-.5,0),gr,a,mr,r,s),Ha(ms.set(.5,-.5,0),gr,a,mr,r,s),Ha(Ua.set(.5,.5,0),gr,a,mr,r,s),wd.set(0,0),ql.set(1,0),Sd.set(1,1);let o=e.ray.intersectTriangle(za,ms,Ua,!1,ds);if(o===null&&(Ha(ms.set(-.5,.5,0),gr,a,mr,r,s),ql.set(0,1),o=e.ray.intersectTriangle(za,Ua,ms,!1,ds),o===null))return;const l=e.ray.origin.distanceTo(ds);l<e.near||l>e.far||t.push({distance:l,point:ds.clone(),uv:mt.getUV(ds,za,ms,Ua,wd,ql,Sd,new he),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}gE.prototype.isSprite=!0;function Ha(n,e,t,i,r,s){vr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ps.x=s*vr.x-r*vr.y,ps.y=r*vr.x+s*vr.y):ps.copy(vr),n.copy(e),n.x+=ps.x,n.y+=ps.y,n.applyMatrix4(dg)}const Ed=new R,Td=new Ze,Ad=new Ze,vE=new R,Rd=new Ce;class Wu extends Nt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;Td.fromBufferAttribute(r.attributes.skinIndex,e),Ad.fromBufferAttribute(r.attributes.skinWeight,e),Ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ad.getComponent(s);if(a!==0){const o=Td.getComponent(s);Rd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(vE.copy(Ed).applyMatrix4(Rd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Wu.prototype.isSkinnedMesh=!0;class ju extends $e{constructor(){super();this.type="Bone"}}ju.prototype.isBone=!0;class qu extends gt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=xt,u=xt,f,h){super(null,a,o,l,c,u,r,s,f,h);this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}qu.prototype.isDataTexture=!0;const Cd=new Ce,xE=new Ce;class Xu{constructor(e=[],t=[]){this.uuid=Kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:xE;Cd.multiplyMatrices(o,t[s]),Cd.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Xu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ym(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new qu(t,e,e,Dt,rn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ju),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Bc extends dt{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,i);this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Bc.prototype.isInstancedBufferAttribute=!0;const Ld=new Ce,Pd=new Ce,Ga=[],gs=new Nt;class _E extends Nt{constructor(e,t,i){super(e,t);this.instanceMatrix=new Bc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Ld),Pd.multiplyMatrices(i,Ld),gs.matrixWorld=Pd,gs.raycast(e,Ga);for(let a=0,o=Ga.length;a<o;a++){const l=Ga[a];l.instanceId=s,l.object=this,t.push(l)}Ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}_E.prototype.isInstancedMesh=!0;class Ki extends ut{constructor(e){super();this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Ki.prototype.isLineBasicMaterial=!0;const Id=new R,Dd=new R,Nd=new Ce,Xl=new Yi,Va=new Xi;class Xo extends $e{constructor(e=new at,t=new Ki){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Id.fromBufferAttribute(t,r-1),Dd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Id.distanceTo(Dd);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Nd.copy(r).invert(),Xl.copy(e.ray).applyMatrix4(Nd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,u=new R,f=new R,h=new R,d=this.isLineSegments?2:1;if(i.isBufferGeometry){const g=i.index,x=i.attributes.position;if(g!==null){const p=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let S=p,w=m-1;S<w;S+=d){const E=g.getX(S),L=g.getX(S+1);if(c.fromBufferAttribute(x,E),u.fromBufferAttribute(x,L),Xl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const K=e.ray.origin.distanceTo(h);K<e.near||K>e.far||t.push({distance:K,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),m=Math.min(x.count,a.start+a.count);for(let S=p,w=m-1;S<w;S+=d){if(c.fromBufferAttribute(x,S),u.fromBufferAttribute(x,S+1),Xl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Xo.prototype.isLine=!0;const Fd=new R,Od=new R;class Yo extends Xo{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Fd.fromBufferAttribute(t,r),Od.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fd.distanceTo(Od);e.setAttribute("lineDistance",new yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Yo.prototype.isLineSegments=!0;class pg extends Xo{constructor(e,t){super(e,t);this.type="LineLoop"}}pg.prototype.isLineLoop=!0;class Ko extends ut{constructor(e){super();this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Ko.prototype.isPointsMaterial=!0;const kd=new Ce,zc=new Yi,Wa=new Xi,ja=new R;class mg extends $e{constructor(e=new at,t=new Ko){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;kd.copy(r).invert(),zc.copy(e.ray).applyMatrix4(kd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(i.isBufferGeometry){const c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,v=d;g<v;g++){const x=c.getX(g);ja.fromBufferAttribute(f,x),Bd(ja,x,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,v=d;g<v;g++)ja.fromBufferAttribute(f,g),Bd(ja,g,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}mg.prototype.isPoints=!0;function Bd(n,e,t,i,r,s,a){const o=zc.distanceSqToPoint(n);if(o<t){const l=new R;zc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class yE extends gt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c);this.minFilter=a!==void 0?a:rt,this.magFilter=s!==void 0?s:rt,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}yE.prototype.isVideoTexture=!0;class bE extends gt{constructor(e,t,i){super({width:e,height:t});this.format=i,this.magFilter=xt,this.minFilter=xt,this.generateMipmaps=!1,this.needsUpdate=!0}}bE.prototype.isFramebufferTexture=!0;class ME extends gt{constructor(e,t,i,r,s,a,o,l,c,u,f,h){super(null,a,o,l,c,u,r,s,f,h);this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}ME.prototype.isCompressedTexture=!0;class wE extends gt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c);this.needsUpdate=!0}}wE.prototype.isCanvasTexture=!0;new R;new R;new R;new mt;class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new he:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,r=[],s=[],a=[],o=new R,l=new Ce;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(zt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(zt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $o extends $t{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new he,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}$o.prototype.isEllipseCurve=!0;class gg extends $o{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a);this.type="ArcCurve"}}gg.prototype.isArcCurve=!0;function Yu(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const qa=new R,Yl=new Yu,Kl=new Yu,$l=new Yu;class vg extends $t{constructor(e=[],t=!1,i="centripetal",r=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(qa.subVectors(r[0],r[1]).add(r[0]),c=qa);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(qa.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=qa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),Yl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,x),Kl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,x),$l.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,x)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Kl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),$l.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Yl.calc(l),Kl.calc(l),$l.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}vg.prototype.isCatmullRomCurve3=!0;function zd(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function SE(n,e){const t=1-n;return t*t*e}function EE(n,e){return 2*(1-n)*n*e}function TE(n,e){return n*n*e}function zs(n,e,t,i){return SE(n,e)+EE(n,t)+TE(n,i)}function AE(n,e){const t=1-n;return t*t*t*e}function RE(n,e){const t=1-n;return 3*t*t*n*e}function CE(n,e){return 3*(1-n)*n*n*e}function LE(n,e){return n*n*n*e}function Us(n,e,t,i,r){return AE(n,e)+RE(n,t)+CE(n,i)+LE(n,r)}class Ku extends $t{constructor(e=new he,t=new he,i=new he,r=new he){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Us(e,r.x,s.x,a.x,o.x),Us(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ku.prototype.isCubicBezierCurve=!0;class xg extends $t{constructor(e=new R,t=new R,i=new R,r=new R){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Us(e,r.x,s.x,a.x,o.x),Us(e,r.y,s.y,a.y,o.y),Us(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}xg.prototype.isCubicBezierCurve3=!0;class Jo extends $t{constructor(e=new he,t=new he){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new he;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Jo.prototype.isLineCurve=!0;class PE extends $t{constructor(e=new R,t=new R){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $u extends $t{constructor(e=new he,t=new he,i=new he){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(zs(e,r.x,s.x,a.x),zs(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}$u.prototype.isQuadraticBezierCurve=!0;class _g extends $t{constructor(e=new R,t=new R,i=new R){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(zs(e,r.x,s.x,a.x),zs(e,r.y,s.y,a.y),zs(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}_g.prototype.isQuadraticBezierCurve3=!0;class Ju extends $t{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(zd(o,l.x,c.x,u.x,f.x),zd(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}Ju.prototype.isSplineCurve=!0;var yg=Object.freeze({__proto__:null,ArcCurve:gg,CatmullRomCurve3:vg,CubicBezierCurve:Ku,CubicBezierCurve3:xg,EllipseCurve:$o,LineCurve:Jo,LineCurve3:PE,QuadraticBezierCurve:$u,QuadraticBezierCurve3:_g,SplineCurve:Ju});class IE extends $t{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Jo(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new yg[r.type]().fromJSON(r))}return this}}class Uc extends IE{constructor(e){super();this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Jo(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new $u(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new Ku(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ju(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new $o(e,t,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fa extends Uc{constructor(e){super(e);this.uuid=Kt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Uc().fromJSON(r))}return this}}const DE={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=bg(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,f,h,d;if(i&&(s=BE(n,e,s,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)f=n[g],h=n[g+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-o,u-l),d=d!==0?1/d:0}return ta(s,a,t,o,l,d),a}};function bg(n,e,t,i,r){let s,a;if(r===KE(n,e,t,i)>0)for(s=e;s<t;s+=i)a=Ud(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=Ud(s,n[s],n[s+1],a);return a&&Zo(a,a.next)&&(ia(a),a=a.next),a}function xi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Zo(t,t.next)||lt(t.prev,t,t.next)===0)){if(ia(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ta(n,e,t,i,r,s,a){if(!n)return;!a&&s&&VE(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?FE(n,i,r,s):NE(n)){e.push(l.i/t),e.push(n.i/t),e.push(c.i/t),ia(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=OE(xi(n),e,t),ta(n,e,t,i,r,s,2)):a===2&&kE(n,e,t,i,r,s):ta(xi(n),e,t,i,r,s,1);break}}}function NE(n){const e=n.prev,t=n,i=n.next;if(lt(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(Lr(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&lt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function FE(n,e,t,i){const r=n.prev,s=n,a=n.next;if(lt(r,s,a)>=0)return!1;const o=r.x<s.x?r.x<a.x?r.x:a.x:s.x<a.x?s.x:a.x,l=r.y<s.y?r.y<a.y?r.y:a.y:s.y<a.y?s.y:a.y,c=r.x>s.x?r.x>a.x?r.x:a.x:s.x>a.x?s.x:a.x,u=r.y>s.y?r.y>a.y?r.y:a.y:s.y>a.y?s.y:a.y,f=Hc(o,l,e,t,i),h=Hc(c,u,e,t,i);let d=n.prevZ,g=n.nextZ;for(;d&&d.z>=f&&g&&g.z<=h;){if(d!==n.prev&&d!==n.next&&Lr(r.x,r.y,s.x,s.y,a.x,a.y,d.x,d.y)&&lt(d.prev,d,d.next)>=0||(d=d.prevZ,g!==n.prev&&g!==n.next&&Lr(r.x,r.y,s.x,s.y,a.x,a.y,g.x,g.y)&&lt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=f;){if(d!==n.prev&&d!==n.next&&Lr(r.x,r.y,s.x,s.y,a.x,a.y,d.x,d.y)&&lt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=h;){if(g!==n.prev&&g!==n.next&&Lr(r.x,r.y,s.x,s.y,a.x,a.y,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function OE(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Zo(r,s)&&Mg(r,i,i.next,s)&&na(r,s)&&na(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),ia(i),ia(i.next),i=n=s),i=i.next}while(i!==n);return xi(i)}function kE(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qE(a,o)){let l=wg(a,o);a=xi(a,a.next),l=xi(l,l.next),ta(a,e,t,i,r,s),ta(l,e,t,i,r,s);return}o=o.next}a=a.next}while(a!==n)}function BE(n,e,t,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=bg(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(jE(c));for(r.sort(zE),s=0;s<r.length;s++)UE(r[s],t),t=xi(t,t.next);return t}function zE(n,e){return n.x-e.x}function UE(n,e){if(e=HE(n,e),e){const t=wg(e,n);xi(e,e.next),xi(t,t.next)}}function HE(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s){if(s=h,h===i){if(r===t.y)return t;if(r===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(i===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,f;t=a;do i>=t.x&&t.x>=l&&i!==t.x&&Lr(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(i-t.x),na(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&GE(a,t)))&&(a=t,u=f)),t=t.next;while(t!==o);return a}function GE(n,e){return lt(n.prev,n,e.prev)<0&&lt(e.next,n,n.next)<0}function VE(n,e,t,i){let r=n;do r.z===null&&(r.z=Hc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,WE(r)}function WE(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function Hc(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function jE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lr(n,e,t,i,r,s,a,o){return(r-a)*(e-o)-(n-a)*(s-o)>=0&&(n-a)*(i-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(r-a)*(i-o)>=0}function qE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!XE(n,e)&&(na(n,e)&&na(e,n)&&YE(n,e)&&(lt(n.prev,n,e.prev)||lt(n,e.prev,e))||Zo(n,e)&&lt(n.prev,n,n.next)>0&&lt(e.prev,e,e.next)>0)}function lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Zo(n,e){return n.x===e.x&&n.y===e.y}function Mg(n,e,t,i){const r=Ya(lt(n,e,t)),s=Ya(lt(n,e,i)),a=Ya(lt(t,i,n)),o=Ya(lt(t,i,e));return!!(r!==s&&a!==o||r===0&&Xa(n,t,e)||s===0&&Xa(n,i,e)||a===0&&Xa(t,n,i)||o===0&&Xa(t,e,i))}function Xa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ya(n){return n>0?1:n<0?-1:0}function XE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Mg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function na(n,e){return lt(n.prev,n,n.next)<0?lt(n,e,n.next)>=0&&lt(n,n.prev,e)>=0:lt(n,e,n.prev)<0||lt(n,n.next,e)<0}function YE(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function wg(n,e){const t=new Gc(n.i,n.x,n.y),i=new Gc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ud(n,e,t,i){const r=new Gc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ia(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function KE(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class di{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Hd(e),Gd(i,e);let a=e.length;t.forEach(Hd);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Gd(i,t[l]);const o=DE.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Hd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Gd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ns extends at{constructor(e=new fa([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new yt(r,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:$E;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),f=t.amount);let S,w=!1,E,L,I,K;p&&(S=p.getSpacedPoints(u),w=!0,h=!1,E=p.computeFrenetFrames(u,!1),L=new R,I=new R,K=new R),h||(x=0,d=0,g=0,v=0);const Z=o.extractPoints(c);let j=Z.shape;const y=Z.holes;if(!di.isClockWise(j)){j=j.reverse();for(let k=0,b=y.length;k<b;k++){const T=y[k];di.isClockWise(T)&&(y[k]=T.reverse())}}const z=di.triangulateShape(j,y),q=j;for(let k=0,b=y.length;k<b;k++){const T=y[k];j=j.concat(T)}function W(k,b,T){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().multiplyScalar(T).add(k)}const G=j.length,H=z.length;function D(k,b,T){let P,F,X;const J=k.x-b.x,ie=k.y-b.y,ae=T.x-k.x,M=T.y-k.y,_=J*J+ie*ie,O=J*M-ie*ae;if(Math.abs(O)>Number.EPSILON){const U=Math.sqrt(_),ee=Math.sqrt(ae*ae+M*M),re=b.x-ie/U,ge=b.y+J/U,Q=T.x-M/ee,be=T.y+ae/ee,we=((Q-re)*M-(be-ge)*ae)/(J*M-ie*ae);P=re+J*we-k.x,F=ge+ie*we-k.y;const Re=P*P+F*F;if(Re<=2)return new he(P,F);X=Math.sqrt(Re/2)}else{let U=!1;J>Number.EPSILON?ae>Number.EPSILON&&(U=!0):J<-Number.EPSILON?ae<-Number.EPSILON&&(U=!0):Math.sign(ie)===Math.sign(M)&&(U=!0),U?(P=-ie,F=J,X=Math.sqrt(_)):(P=J,F=ie,X=Math.sqrt(_/2))}return new he(P/X,F/X)}const ne=[];for(let k=0,b=q.length,T=b-1,P=k+1;k<b;k++,T++,P++)T===b&&(T=0),P===b&&(P=0),ne[k]=D(q[k],q[T],q[P]);const ue=[];let le,ce=ne.concat();for(let k=0,b=y.length;k<b;k++){const T=y[k];le=[];for(let P=0,F=T.length,X=F-1,J=P+1;P<F;P++,X++,J++)X===F&&(X=0),J===F&&(J=0),le[P]=D(T[P],T[X],T[J]);ue.push(le),ce=ce.concat(le)}for(let k=0;k<x;k++){const b=k/x,T=d*Math.cos(b*Math.PI/2),P=g*Math.sin(b*Math.PI/2)+v;for(let F=0,X=q.length;F<X;F++){const J=W(q[F],ne[F],P);se(J.x,J.y,-T)}for(let F=0,X=y.length;F<X;F++){const J=y[F];le=ue[F];for(let ie=0,ae=J.length;ie<ae;ie++){const M=W(J[ie],le[ie],P);se(M.x,M.y,-T)}}}const Ae=g+v;for(let k=0;k<G;k++){const b=h?W(j[k],ce[k],Ae):j[k];w?(I.copy(E.normals[0]).multiplyScalar(b.x),L.copy(E.binormals[0]).multiplyScalar(b.y),K.copy(S[0]).add(I).add(L),se(K.x,K.y,K.z)):se(b.x,b.y,0)}for(let k=1;k<=u;k++)for(let b=0;b<G;b++){const T=h?W(j[b],ce[b],Ae):j[b];w?(I.copy(E.normals[k]).multiplyScalar(T.x),L.copy(E.binormals[k]).multiplyScalar(T.y),K.copy(S[k]).add(I).add(L),se(K.x,K.y,K.z)):se(T.x,T.y,f/u*k)}for(let k=x-1;k>=0;k--){const b=k/x,T=d*Math.cos(b*Math.PI/2),P=g*Math.sin(b*Math.PI/2)+v;for(let F=0,X=q.length;F<X;F++){const J=W(q[F],ne[F],P);se(J.x,J.y,f+T)}for(let F=0,X=y.length;F<X;F++){const J=y[F];le=ue[F];for(let ie=0,ae=J.length;ie<ae;ie++){const M=W(J[ie],le[ie],P);w?se(M.x,M.y+S[u-1].y,S[u-1].x+T):se(M.x,M.y,f+T)}}}Ue(),V();function Ue(){const k=r.length/3;if(h){let b=0,T=G*b;for(let P=0;P<H;P++){const F=z[P];fe(F[2]+T,F[1]+T,F[0]+T)}b=u+x*2,T=G*b;for(let P=0;P<H;P++){const F=z[P];fe(F[0]+T,F[1]+T,F[2]+T)}}else{for(let b=0;b<H;b++){const T=z[b];fe(T[2],T[1],T[0])}for(let b=0;b<H;b++){const T=z[b];fe(T[0]+G*u,T[1]+G*u,T[2]+G*u)}}i.addGroup(k,r.length/3-k,0)}function V(){const k=r.length/3;let b=0;B(q,b),b+=q.length;for(let T=0,P=y.length;T<P;T++){const F=y[T];B(F,b),b+=F.length}i.addGroup(k,r.length/3-k,1)}function B(k,b){let T=k.length;for(;--T>=0;){const P=T;let F=T-1;F<0&&(F=k.length-1);for(let X=0,J=u+x*2;X<J;X++){const ie=G*X,ae=G*(X+1),M=b+P+ie,_=b+F+ie,O=b+F+ae,U=b+P+ae;pe(M,_,O,U)}}}function se(k,b,T){l.push(k),l.push(b),l.push(T)}function fe(k,b,T){me(k),me(b),me(T);const P=r.length/3,F=m.generateTopUV(i,r,P-3,P-2,P-1);_e(F[0]),_e(F[1]),_e(F[2])}function pe(k,b,T,P){me(k),me(b),me(P),me(b),me(T),me(P);const F=r.length/3,X=m.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);_e(X[0]),_e(X[1]),_e(X[3]),_e(X[1]),_e(X[2]),_e(X[3])}function me(k){r.push(l[k*3+0]),r.push(l[k*3+1]),r.push(l[k*3+2])}function _e(k){s.push(k.x),s.push(k.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return JE(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new yg[r.type]().fromJSON(r)),new ns(i,e.options)}}const $E={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new he(s,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],g=e[r*3+2],v=e[s*3],x=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-f),new he(h,1-g),new he(v,1-p)]:[new he(o,1-l),new he(u,1-f),new he(d,1-g),new he(x,1-p)]}};function JE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zu extends at{constructor(e=new fa([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(s,3)),this.setAttribute("uv",new yt(a,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let d=h.shape;const g=h.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,p=g.length;x<p;x++){const m=g[x];di.isClockWise(m)===!0&&(g[x]=m.reverse())}const v=di.triangulateShape(d,g);for(let x=0,p=g.length;x<p;x++){const m=g[x];d=d.concat(m)}for(let x=0,p=d.length;x<p;x++){const m=d[x];r.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let x=0,p=v.length;x<p;x++){const m=v[x],S=m[0]+f,w=m[1]+f,E=m[2]+f;i.push(S,w,E),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ZE(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new Zu(i,e.curveSegments)}}function ZE(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Sg extends ut{constructor(e){super();this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Sg.prototype.isShadowMaterial=!0;class Eg extends on{constructor(e){super(e);this.type="RawShaderMaterial"}}Eg.prototype.isRawShaderMaterial=!0;class is extends ut{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}is.prototype.isMeshStandardMaterial=!0;class bi extends is{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}bi.prototype.isMeshPhysicalMaterial=!0;class Tg extends ut{constructor(e){super();this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Tg.prototype.isMeshPhongMaterial=!0;class Ag extends ut{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ag.prototype.isMeshToonMaterial=!0;class Rg extends ut{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Rg.prototype.isMeshNormalMaterial=!0;class Cg extends ut{constructor(e){super();this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Cg.prototype.isMeshLambertMaterial=!0;class Lg extends ut{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Lg.prototype.isMeshMatcapMaterial=!0;class Pg extends Ki{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Pg.prototype.isLineDashedMaterial=!0;const QE={ShadowMaterial:Sg,SpriteMaterial:Vu,RawShaderMaterial:Eg,ShaderMaterial:on,PointsMaterial:Ko,MeshPhysicalMaterial:bi,MeshStandardMaterial:is,MeshPhongMaterial:Tg,MeshToonMaterial:Ag,MeshNormalMaterial:Rg,MeshLambertMaterial:Cg,MeshDepthMaterial:Hu,MeshDistanceMaterial:Gu,MeshBasicMaterial:Fn,MeshMatcapMaterial:Lg,LineDashedMaterial:Pg,LineBasicMaterial:Ki,Material:ut};ut.fromType=function(n){return new QE[n]};const ot={arraySlice:function(n,e,t){return ot.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){const s=n.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),f=[],h=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*r;if(!(g<t||g>=i)){f.push(c.times[d]);for(let v=0;v<u;++v)h.push(c.values[d*u+v])}}f.length!==0&&(c.times=ot.convertArray(f,c.times.constructor),c.values=ot.convertArray(h,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let a=0;a<r;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=n.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const f=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let h=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);const g=o.times.length-1;let v;if(s<=o.times[0]){const p=u,m=f-u;v=ot.arraySlice(o.values,p,m)}else if(s>=o.times[g]){const p=g*f+u,m=p+f-u;v=ot.arraySlice(o.values,p,m)}else{const p=o.createInterpolant(),m=u,S=f-u;p.evaluate(s),v=ot.arraySlice(p.resultBuffer,m,S)}l==="quaternion"&&new Ft().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let p=0;p<x;++p){const m=p*d+h;if(l==="quaternion")Ft.multiplyQuaternionsFlat(c.values,m,v,0,c.values,m);else{const S=d-h*2;for(let w=0;w<S;++w)c.values[m+w]-=v[w]}}}return n.blendMode=qm,n}};class Un{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,s)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,s,e)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Un.prototype.beforeStart_=Un.prototype.copySampleValue_;Un.prototype.afterEnd_=Un.prototype.copySampleValue_;class eT extends Un{constructor(e,t,i,r){super(e,t,i,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ar,endingEnd:Ar}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rr:s=e,o=2*t-i;break;case bo:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rr:a=e,l=2*i-t;break;case bo:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),v=g*g,x=v*g,p=-h*x+2*h*v-h*g,m=(1+h)*x+(-1.5-2*h)*v+(-.5+h)*g+1,S=(-1-d)*x+(1.5+d)*v+.5*g,w=d*x-d*v;for(let E=0;E!==o;++E)s[E]=p*a[u+E]+m*a[c+E]+S*a[l+E]+w*a[f+E];return s}}class Ig extends Un{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class tT extends Un{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ot.convertArray(t,this.TimeBufferType),this.values=ot.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ot.convertArray(e.times,Array),values:ot.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ig(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=ot.arraySlice(i,s,a),this.values=ot.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&ot.isTypedArray(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ot.arraySlice(this.times),t=ot.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===xl,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const f=o*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const v=t[f+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ot.arraySlice(e,0,a),this.values=ot.arraySlice(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=ot.arraySlice(this.times,0),t=ot.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=jr;class rs extends Mn{}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Js;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Dg extends Mn{}Dg.prototype.ValueTypeName="color";class ra extends Mn{}ra.prototype.ValueTypeName="number";class nT extends Un{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ft.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Gi extends Mn{InterpolantFactoryMethodLinear(e){return new nT(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=jr;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Mn{}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Js;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class sa extends Mn{}sa.prototype.ValueTypeName="vector";class Vc{constructor(e,t=-1,i,r=Du){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Kt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(rT(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Mn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=ot.getKeyframeOrder(l);l=ot.sortedArray(l,1,u),c=ot.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ra(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,v){if(d.length!==0){const x=[],p=[];ot.flattenJSON(d,x,p,g),x.length!==0&&v.push(new f(h,x,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)d[h[g].morphTargets[v]]=-1;for(const v in d){const x=[],p=[];for(let m=0;m!==h[g].morphTargets.length;++m){const S=h[g];x.push(S.time),p.push(S.morphTarget===v?1:0)}r.push(new ra(".morphTargetInfluence["+v+"]",x,p))}l=d.length*a}else{const d=".bones["+t[f].name+"]";i(sa,d+".position",h,"pos",r),i(Gi,d+".quaternion",h,"rot",r),i(sa,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function iT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ra;case"vector":case"vector2":case"vector3":case"vector4":return sa;case"color":return Dg;case"quaternion":return Gi;case"bool":case"boolean":return rs;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function rT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iT(n.type);if(n.times===void 0){const t=[],i=[];ot.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Yr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sT{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const aT=new sT;class wn{constructor(e){this.manager=e!==void 0?e:aT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Cn={};class Qo extends wn{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:i,onError:r});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Cn[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let v=0;const x=new ReadableStream({start(p){m();function m(){f.read().then(({done:S,value:w})=>{if(S)p.close();else{v+=w.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let L=0,I=u.length;L<I;L++){const K=u[L];K.onProgress&&K.onProgress(E)}p.enqueue(w),m()}})}}});return new Response(x)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Yr.add(e,c);const u=Cn[e];delete Cn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ng extends wn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Yr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ea("img");function l(){u(),Yr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class oT extends wn{constructor(e){super(e)}load(e,t,i,r){const s=new Vo,a=new Ng(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class lT extends wn{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new qu,o=new Qo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);!c||(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ut,a.wrapT=c.wrapT!==void 0?c.wrapT:Ut,a.magFilter=c.magFilter!==void 0?c.magFilter:rt,a.minFilter=c.minFilter!==void 0?c.minFilter:rt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Wi),c.mipmapCount===1&&(a.minFilter=rt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},i,r),a}}class Fg extends wn{constructor(e){super(e)}load(e,t,i,r){const s=new gt,a=new Ng(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class bn extends $e{constructor(e,t=1){super();this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}bn.prototype.isLight=!0;class cT extends bn{constructor(e,t,i){super(e,i);this.type="HemisphereLight",this.position.copy($e.DefaultUp),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e){return bn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}cT.prototype.isHemisphereLight=!0;const Vd=new Ce,Wd=new R,jd=new R;class Qu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wd),jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jd),t.updateMatrixWorld(),Vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Og extends Qu{constructor(){super(new It(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,i=Qs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Og.prototype.isSpotLightShadow=!0;class kg extends bn{constructor(e,t,i=0,r=Math.PI/3,s=0,a=1){super(e,t);this.type="SpotLight",this.position.copy($e.DefaultUp),this.updateMatrix(),this.target=new $e,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.shadow=new Og}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}kg.prototype.isSpotLight=!0;const qd=new Ce,vs=new R,Jl=new R;class Bg extends Qu{constructor(){super(new It(90,1,.5,500));this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),vs.setFromMatrixPosition(e.matrixWorld),i.position.copy(vs),Jl.copy(i.position),Jl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jl),i.updateMatrixWorld(),r.makeTranslation(-vs.x,-vs.y,-vs.z),qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd)}}Bg.prototype.isPointLightShadow=!0;class zg extends bn{constructor(e,t,i=0,r=1){super(e,t);this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}zg.prototype.isPointLight=!0;class Ug extends Qu{constructor(){super(new jo(-5,5,5,-5,.5,500))}}Ug.prototype.isDirectionalLightShadow=!0;class Hg extends bn{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy($e.DefaultUp),this.updateMatrix(),this.target=new $e,this.shadow=new Ug}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Hg.prototype.isDirectionalLight=!0;class uT extends bn{constructor(e,t){super(e,t);this.type="AmbientLight"}}uT.prototype.isAmbientLight=!0;class fT extends bn{constructor(e,t,i=10,r=10){super(e,t);this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}fT.prototype.isRectAreaLight=!0;class Gg{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(i*s)),t.addScaledVector(a[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*i*s),t.addScaledVector(a[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}Gg.prototype.isSphericalHarmonics3=!0;class ef extends bn{constructor(e=new Gg,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}ef.prototype.isLightProbe=!0;class pi{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hT extends at{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}hT.prototype.isInstancedBufferGeometry=!0;class Vg extends wn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Yr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Yr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Vg.prototype.isImageBitmapLoader=!0;let Ka;const dT={getContext:function(){return Ka===void 0&&(Ka=new(window.AudioContext||window.webkitAudioContext)),Ka},setContext:function(n){Ka=n}};class pT extends wn{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new Qo(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);dT.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}}class mT extends ef{constructor(e,t,i=1){super(void 0,i);const r=new Ee().set(e),s=new Ee().set(t),a=new R(r.r,r.g,r.b),o=new R(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}mT.prototype.isHemisphereLightProbe=!0;class gT extends ef{constructor(e,t=1){super(void 0,t);const i=new Ee().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}gT.prototype.isAmbientLightProbe=!0;class vT extends $e{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class xT{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)i[s+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,a=r;s!==a;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,r){Ft.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const a=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,a,e,t,e,i),Ft.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,i,r,s){const a=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*r}}_lerpAdditive(e,t,i,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[i+a]*r}}}const tf="\\[\\]\\.:\\/",_T=new RegExp("["+tf+"]","g"),nf="[^"+tf+"]",yT="[^"+tf.replace("\\.","")+"]",bT=/((?:WC+[\/:])*)/.source.replace("WC",nf),MT=/(WCOD+)?/.source.replace("WCOD",yT),wT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nf),ST=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nf),ET=new RegExp("^"+bT+MT+wT+ST+"$"),TT=["material","materials","bones"];class AT{constructor(e,t,i){const r=i||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ye{constructor(e,t,i){this.path=t,this.parsedPath=i||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,i):new Ye(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_T,"")}static parseTrackName(e){const t=ET.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);TT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=AT;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class RT{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Ar,endingEnd:Ar};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ob,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qm:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Du:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(a),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const a=i===lb;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(i===ab){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Rr,r.endingEnd=Rr):(e?r.endingStart=this.zeroSlopeAtStart?Rr:Ar:r.endingStart=bo,t?r.endingEnd=this.zeroSlopeAtEnd?Rr:Ar:r.endingEnd=bo)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}class CT extends _i{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==s;++f){const h=r[f],d=h.name;let g=u[d];if(g!==void 0)++g.referenceCount,a[f]=g;else{if(g=a[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const v=t&&t._propertyBindings[f].binding.parsedPath;g=new xT(Ye.create(i,d,v),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),a[f]=g}o[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Ig(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Vc.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Du),l!==void 0){const f=l.actionByRoot[s];if(f!==void 0&&f.blendMode===i)return f;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new RT(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?Vc.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}CT.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class LT extends ts{constructor(e,t,i=1){super(e,t);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}LT.prototype.isInstancedInterleavedBuffer=!0;class O3{constructor(e,t,i=0,r=1/0){this.ray=new Yi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Wc(e,this,i,t),i.sort(Xd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wc(e[r],this,i,t);return i.sort(Xd),i}}function Xd(n,e){return n.distance-e.distance}function Wc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Wc(r[s],e,t,!0)}}const ti=new R,$a=new Ce,Zl=new Ce;class PT extends Yo{constructor(e){const t=Wg(e),i=new at,r=[],s=[],a=new Ee(0,0,1),o=new Ee(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}i.setAttribute("position",new yt(r,3)),i.setAttribute("color",new yt(s,3));const l=new Ki({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");Zl.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&($a.multiplyMatrices(Zl,o.matrixWorld),ti.setFromMatrixPosition($a),r.setXYZ(a,ti.x,ti.y,ti.z),$a.multiplyMatrices(Zl,o.parent.matrixWorld),ti.setFromMatrixPosition($a),r.setXYZ(a+1,ti.x,ti.y,ti.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Wg(n){const e=[];n.isBone===!0&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,Wg(n.children[t]));return e}class IT extends Yo{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ee(i),r=new Ee(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,d=0,g=-o;h<=t;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=h===s?i:r;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new at;u.setAttribute("position",new yt(l,3)),u.setAttribute("color",new yt(c,3));const f=new Ki({vertexColors:!0,toneMapped:!1});super(u,f);this.type="GridHelper"}}const jg=new Float32Array(1),DT=new Int32Array(jg.buffer);class Ja{static toHalfFloat(e){e>65504&&(console.warn("THREE.DataUtils.toHalfFloat(): value exceeds 65504."),e=65504),jg[0]=e;const t=DT[0];let i=t>>16&32768,r=t>>12&2047;const s=t>>23&255;return s<103?i:s>142?(i|=31744,i|=(s==255?0:1)&&t&8388607,i):s<113?(r|=2048,i|=(r>>114-s)+(r>>113-s&1),i):(i|=s-112<<10|r>>1,i+=r&1,i)}}$t.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create($t.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};Uc.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};IT.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};PT.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};wn.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),pi.extractUrlBase(n)};wn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Jt.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};Jt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Jt.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Jt.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};Jt.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};yi.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Xi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Wo.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};St.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};St.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};St.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};St.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};St.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};St.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Ce.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};Ce.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};Ce.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new R().setFromMatrixColumn(this,3)};Ce.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};Ce.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Ce.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Ce.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Ce.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Ce.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};Ce.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Ce.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Ce.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Ce.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Ce.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Ce.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Ce.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Ce.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Ce.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};Ce.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Dn.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};Ft.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};Ft.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Yi.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Yi.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};Yi.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};mt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};mt.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};mt.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};mt.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};mt.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};mt.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),mt.getBarycoord(n,e,t,i,r)};mt.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),mt.getNormal(n,e,t,i)};fa.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};fa.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ns(this,n)};fa.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Zu(this,n)};he.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};he.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};he.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};R.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};R.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};R.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};R.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};R.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};R.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};R.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};R.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};R.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ze.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};Ze.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};$e.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};$e.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};$e.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};$e.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};$e.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties($e.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Nt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Nt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),cb},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Wu.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};It.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(bn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(dt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Mo},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Mo)}}});dt.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Mo:Zs),this};dt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},dt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};at.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};at.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new dt(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};at.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};at.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};at.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};at.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};at.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(at.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ts.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Mo:Zs),this};ts.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ns.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ns.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ns.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};hg.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ut.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ee}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Hm}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(on.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});Qe.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};Qe.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};Qe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Qe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Qe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Qe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Qe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Qe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Qe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Qe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Qe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Qe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Qe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Qe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Qe.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};Qe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Qe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Qe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Qe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Qe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Qe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Qe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Qe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Qe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Qe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Qe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?Xe:yn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(cg.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(jt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});vT.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new pT().load(n,function(i){e.setBuffer(i)}),this};Bu.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};Bu.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};qi.crossOrigin=void 0;qi.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Fg;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};qi.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new oT;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};qi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};qi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);class k3 extends wn{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new jT(t)})}load(e,t,i,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=pi.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Qo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={};if(typeof e=="string")s=e;else if(pi.decodeText(new Uint8Array(e,0,4))===qg){try{a[He.KHR_BINARY_GLTF]=new qT(e)}catch(f){r&&r(f);return}s=a[He.KHR_BINARY_GLTF].content}else s=pi.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new s3(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);o[f.name]=f,a[f.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const f=l.extensionsUsed[u],h=l.extensionsRequired||[];switch(f){case He.KHR_MATERIALS_UNLIT:a[f]=new OT;break;case He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[f]=new KT;break;case He.KHR_DRACO_MESH_COMPRESSION:a[f]=new XT(l,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[f]=new YT;break;case He.KHR_MESH_QUANTIZATION:a[f]=new $T;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function NT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class FT{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ee(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zg(u),c.distance=f;break;case"spot":c=new kg(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class OT{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Fn}extendParams(e,t,i){const r=[];e.color=new Ee(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(o,o)}return Promise.all(s)}}class BT{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class zT{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class UT{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee(o[0],o[1],o[2]),Promise.all(s)}}class HT{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class GT{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture).then(function(l){l.encoding=Xe})),Promise.all(s)}}class VT{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class WT{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jT{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,a.ready]).then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new ArrayBuffer(u*f),d=new Uint8Array(o[0],l,c);return a.decodeGltfBuffer(new Uint8Array(h),u,f,d,r.mode,r.filter),h})}else return null}}const qg="glTF",xs=12,Yd={JSON:1313821514,BIN:5130562};class qT{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xs);if(this.header={magic:pi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xs,r=new DataView(e,xs);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const o=r.getUint32(s,!0);if(s+=4,o===Yd.JSON){const l=new Uint8Array(e,xs+s,a);this.content=pi.decodeText(l)}else if(o===Yd.BIN){const l=xs+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=qc[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=qc[u]||u.toLowerCase();if(a[u]!==void 0){const h=i.accessors[e.attributes[u]],d=aa[h.componentType];c[f]=d,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const d in h.attributes){const g=h.attributes[d],v=l[d];v!==void 0&&(g.normalized=v)}f(h)},o,c)})})}}class YT{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class jc extends is{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Ee().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class KT{constructor(){this.name=He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return jc}extendParams(e,t,i){const r=t.extensions[this.name];e.color=new Ee(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const a=r.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(r.diffuseTexture!==void 0&&s.push(i.assignTexture(e,"map",r.diffuseTexture)),e.emissive=new Ee(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Ee(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const a=r.specularGlossinessTexture;s.push(i.assignTexture(e,"glossinessMap",a)),s.push(i.assignTexture(e,"specularMap",a))}return Promise.all(s)}createMaterial(e){const t=new jc(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=ji,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class $T{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Vi extends Un{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}}Vi.prototype.beforeStart_=Vi.prototype.copySampleValue_;Vi.prototype.afterEnd_=Vi.prototype.copySampleValue_;Vi.prototype.interpolate_=function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,c=i-e,u=(t-e)/c,f=u*u,h=f*u,d=n*l,g=d-l,v=-2*h+3*f,x=h-f,p=1-v,m=x-f+u;for(let S=0;S!==a;S++){const w=s[g+S+a],E=s[g+S+o]*c,L=s[d+S+a],I=s[d+S]*c;r[S]=p*w+m*E+v*L+x*I}return r};const JT=new Ft;class ZT extends Vi{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return JT.fromArray(s).normalize().toArray(s),s}}const Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},aa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kd={9728:xt,9729:rt,9984:Dc,9985:jm,9986:Nc,9987:Wi},$d={33071:Ut,33648:yo,10497:Vr},Jd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QT={CUBICSPLINE:void 0,LINEAR:jr,STEP:Js},Ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function e3(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new is({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ur})),n.DefaultMaterial}function _s(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Li(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function t3(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;o.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function n3(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function i3(n){const e=n.extensions&&n.extensions[He.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Zd(e.attributes):t=n.indices+":"+Zd(n.attributes)+":"+n.mode,t}function Zd(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Xc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function r3(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class s3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NT,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!1?this.textureLoader=new Vg(this.options.manager):this.textureLoader=new Fg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};_s(s,o,r),Li(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this.loadAnimation(t);break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(pi.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Jd[r.type],c=aa[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,x;if(d&&d!==f){const p=Math.floor(h/d),m="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let S=t.cache.get(m);S||(v=new c(o,p*d,r.count*d/u),S=new ts(v,d/u),t.cache.add(m,S)),x=new Xr(S,l,h%d/u,g)}else o===null?v=new c(r.count*l):v=new c(o,h,r.count*l),x=new dt(v,l,g);if(r.sparse!==void 0){const p=Jd.SCALAR,m=aa[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,E=new m(a[1],S,r.sparse.count*p),L=new c(a[2],w,r.sparse.count*l);o!==null&&(x=new dt(x.array.slice(),x.itemSize,x.normalized));for(let I=0,K=E.length;I<K;I++){const Z=E[I];if(x.setX(Z,L[I*l]),l>=2&&x.setY(Z,L[I*l+1]),l>=3&&x.setZ(Z,L[I*l+2]),l>=4&&x.setW(Z,L[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,a.name&&(u.name=a.name);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Kd[h.magFilter]||rt,u.minFilter=Kd[h.minFilter]||Wi,u.wrapS=$d[h.wrapS]||Vr,u.wrapT=$d[h.wrapT]||Vr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(function(f){return f.clone()}).catch(function(f){throw f});const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){const x=new gt(v);x.needsUpdate=!0,h(x)}),t.load(pi.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),f.userData.mimeType=a.mimeType||r3(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i){const r=this;return this.getDependency("texture",i.index).then(function(s){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=r.associations.get(s);s=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,o)}}return e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ko,ut.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ki,ut.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return is}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const f=r[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else if(l[He.KHR_MATERIALS_UNLIT]){const f=r[He.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ui);const u=s.alphaMode||Ql.OPAQUE;if(u===Ql.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ql.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Fn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&a!==Fn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Fn&&(o.emissive=new Ee().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==Fn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let f;return a===jc?f=r[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):f=new a(o),s.name&&(f.name=s.name),f.map&&(f.map.encoding=Xe),f.emissiveMap&&(f.emissiveMap.encoding=Xe),f.sheenColorMap&&(f.sheenColorMap.encoding=Xe),f.specularColorMap&&(f.specularColorMap.encoding=Xe),f.specularMap&&(f.specularMap.encoding=Xe),Li(f,s),t.associations.set(f,{materials:e}),s.extensions&&_s(r,f,s),f})}createUniqueName(e){const t=Ye.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Qd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=i3(c),f=r[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Qd(new at,c,t),r[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?e3(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],x=a[d];let p;const m=c[d];if(x.mode===Ln.TRIANGLES||x.mode===Ln.TRIANGLE_STRIP||x.mode===Ln.TRIANGLE_FAN||x.mode===void 0)p=s.isSkinnedMesh===!0?new Wu(v,m):new Nt(v,m),p.isSkinnedMesh===!0&&!p.geometry.attributes.skinWeight.normalized&&p.normalizeSkinWeights(),x.mode===Ln.TRIANGLE_STRIP?p.geometry=ep(p.geometry,ub):x.mode===Ln.TRIANGLE_FAN&&(p.geometry=ep(p.geometry,Xm));else if(x.mode===Ln.LINES)p=new Yo(v,m);else if(x.mode===Ln.LINE_STRIP)p=new Xo(v,m);else if(x.mode===Ln.LINE_LOOP)p=new pg(v,m);else if(x.mode===Ln.POINTS)p=new mg(v,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&n3(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Li(p,s),x.extensions&&_s(r,p,x),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return f[0];const h=new ai;t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new It(Rb.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new jo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Li(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return i.inverseBindMatrices=r,i})}loadAnimation(e){const i=this.json.animations[e],r=[],s=[],a=[],o=[],l=[];for(let c=0,u=i.channels.length;c<u;c++){const f=i.channels[c],h=i.samplers[f.sampler],d=f.target,g=d.node!==void 0?d.node:d.id,v=i.parameters!==void 0?i.parameters[h.input]:h.input,x=i.parameters!==void 0?i.parameters[h.output]:h.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",v)),a.push(this.getDependency("accessor",x)),o.push(h),l.push(d)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],d=c[3],g=c[4],v=[];for(let p=0,m=u.length;p<m;p++){const S=u[p],w=f[p],E=h[p],L=d[p],I=g[p];if(S===void 0)continue;S.updateMatrix(),S.matrixAutoUpdate=!0;let K;switch(ni[I.path]){case ni.weights:K=ra;break;case ni.rotation:K=Gi;break;case ni.position:case ni.scale:default:K=sa;break}const Z=S.name?S.name:S.uuid,j=L.interpolation!==void 0?QT[L.interpolation]:jr,y=[];ni[I.path]===ni.weights?S.traverse(function(z){z.morphTargetInfluences&&y.push(z.name?z.name:z.uuid)}):y.push(Z);let C=E.array;if(E.normalized){const z=Xc(C.constructor),q=new Float32Array(C.length);for(let W=0,G=C.length;W<G;W++)q[W]=C[W]*z;C=q}for(let z=0,q=y.length;z<q;z++){const W=new K(y[z]+"."+ni[I.path],w.array,C,j);L.interpolation==="CUBICSPLINE"&&(W.createInterpolant=function(H){const D=this instanceof Gi?ZT:Vi;return new D(this.times,this.values,this.getValueSize()/3,H)},W.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),v.push(W)}}const x=i.name?i.name:"animation_"+e;return new Vc(x,void 0,v)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this.extensions,r=this,s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"";return function(){const o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new ju:o.length>1?l=new ai:o.length===1?l=o[0]:l=new $e,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=a),Li(l,s),s.extensions&&_s(i,l,s),s.matrix!==void 0){const c=new Ce;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,i=this.extensions,r=this.json.scenes[e],s=this,a=new ai;r.name&&(a.name=s.createUniqueName(r.name)),Li(a,r),r.extensions&&_s(i,a,r);const o=r.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(Xg(o[c],a,t,s));return Promise.all(l).then(function(){const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof ut||h instanceof gt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(a),a})}}function Xg(n,e,t,i){const r=t.nodes[n];return i.getDependency("node",n).then(function(s){if(r.skin===void 0)return s;let a;return i.getDependency("skin",r.skin).then(function(o){a=o;const l=[];for(let c=0,u=a.joints.length;c<u;c++)l.push(i.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let f=0,h=o.length;f<h;f++){const d=o[f];if(d){c.push(d);const g=new Ce;a.inverseBindMatrices!==void 0&&g.fromArray(a.inverseBindMatrices.array,f*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[f])}l.bind(new Xu(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const a=[];if(r.children){const o=r.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];a.push(Xg(u,s,t,i))}}return Promise.all(a)})}function a3(n,e,t){const i=e.attributes,r=new Jt;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const u=Xc(aa[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new R,l=new R;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const v=Xc(aa[h.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new Xi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function Qd(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=qc[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Li(n,e),a3(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?t3(n,e.targets,t):n})}function ep(n,e){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Xm)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s}const xr=new yi(0,0,0,"YXZ"),_r=new R,o3={type:"change"},l3={type:"lock"},c3={type:"unlock"},tp=Math.PI/2;class B3 extends _i{constructor(e,t){super();t===void 0&&(console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.'),t=document.body),this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const i=this;function r(o){if(i.isLocked===!1)return;const l=o.movementX||o.mozMovementX||o.webkitMovementX||0,c=o.movementY||o.mozMovementY||o.webkitMovementY||0;xr.setFromQuaternion(e.quaternion),xr.y-=l*.002*i.pointerSpeed,xr.x-=c*.002*i.pointerSpeed,xr.x=Math.max(tp-i.maxPolarAngle,Math.min(tp-i.minPolarAngle,xr.x)),e.quaternion.setFromEuler(xr),i.dispatchEvent(o3)}function s(){i.domElement.ownerDocument.pointerLockElement===i.domElement?(i.dispatchEvent(l3),i.isLocked=!0):(i.dispatchEvent(c3),i.isLocked=!1)}function a(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){i.domElement.ownerDocument.addEventListener("mousemove",r),i.domElement.ownerDocument.addEventListener("pointerlockchange",s),i.domElement.ownerDocument.addEventListener("pointerlockerror",a)},this.disconnect=function(){i.domElement.ownerDocument.removeEventListener("mousemove",r),i.domElement.ownerDocument.removeEventListener("pointerlockchange",s),i.domElement.ownerDocument.removeEventListener("pointerlockerror",a)},this.dispose=function(){this.disconnect()},this.getObject=function(){return e},this.getDirection=function(){const o=new R(0,0,-1);return function(l){return l.copy(o).applyQuaternion(e.quaternion)}}(),this.moveForward=function(o){_r.setFromMatrixColumn(e.matrix,0),_r.crossVectors(e.up,_r),e.position.addScaledVector(_r,o)},this.moveRight=function(o){_r.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(_r,o)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){i.domElement.ownerDocument.exitPointerLock()},this.connect()}}class z3 extends lT{constructor(e){super(e);this.type=xn}parse(e){const o=function(S,w){switch(S){case 1:console.error("THREE.RGBELoader Read Error: "+(w||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(w||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(w||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(w||""))}return-1},f=`
`,h=function(S,w,E){w=w||1024;let I=S.pos,K=-1,Z=0,j="",y=String.fromCharCode.apply(null,new Uint16Array(S.subarray(I,I+128)));for(;0>(K=y.indexOf(f))&&Z<w&&I<S.byteLength;)j+=y,Z+=y.length,I+=128,y+=String.fromCharCode.apply(null,new Uint16Array(S.subarray(I,I+128)));return-1<K?(E!==!1&&(S.pos+=Z+K+1),j+y.slice(0,K)):!1},d=function(S){const w=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,K=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,Z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let j,y;if(S.pos>=S.byteLength||!(j=h(S)))return o(1,"no header found");if(!(y=j.match(w)))return o(3,"bad initial token");for(Z.valid|=1,Z.programtype=y[1],Z.string+=j+`
`;j=h(S),j!==!1;){if(Z.string+=j+`
`,j.charAt(0)==="#"){Z.comments+=j+`
`;continue}if((y=j.match(E))&&(Z.gamma=parseFloat(y[1])),(y=j.match(L))&&(Z.exposure=parseFloat(y[1])),(y=j.match(I))&&(Z.valid|=2,Z.format=y[1]),(y=j.match(K))&&(Z.valid|=4,Z.height=parseInt(y[1],10),Z.width=parseInt(y[2],10)),Z.valid&2&&Z.valid&4)break}return Z.valid&2?Z.valid&4?Z:o(3,"missing image size specifier"):o(3,"missing format specifier")},g=function(S,w,E){const L=w;if(L<8||L>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);if(L!==(S[2]<<8|S[3]))return o(3,"wrong scanline width");const I=new Uint8Array(4*w*E);if(!I.length)return o(4,"unable to allocate buffer space");let K=0,Z=0;const j=4*L,y=new Uint8Array(4),C=new Uint8Array(j);let z=E;for(;z>0&&Z<S.byteLength;){if(Z+4>S.byteLength)return o(1);if(y[0]=S[Z++],y[1]=S[Z++],y[2]=S[Z++],y[3]=S[Z++],y[0]!=2||y[1]!=2||(y[2]<<8|y[3])!=L)return o(3,"bad rgbe scanline format");let q=0,W;for(;q<j&&Z<S.byteLength;){W=S[Z++];const H=W>128;if(H&&(W-=128),W===0||q+W>j)return o(3,"bad scanline data");if(H){const D=S[Z++];for(let ne=0;ne<W;ne++)C[q++]=D}else C.set(S.subarray(Z,Z+W),q),q+=W,Z+=W}const G=L;for(let H=0;H<G;H++){let D=0;I[K]=C[H+D],D+=L,I[K+1]=C[H+D],D+=L,I[K+2]=C[H+D],D+=L,I[K+3]=C[H+D],K+=4}z--}return I},v=function(S,w,E,L){const I=S[w+3],K=Math.pow(2,I-128)/255;E[L+0]=S[w+0]*K,E[L+1]=S[w+1]*K,E[L+2]=S[w+2]*K,E[L+3]=1},x=function(S,w,E,L){const I=S[w+3],K=Math.pow(2,I-128)/255;E[L+0]=Ja.toHalfFloat(Math.min(S[w+0]*K,65504)),E[L+1]=Ja.toHalfFloat(Math.min(S[w+1]*K,65504)),E[L+2]=Ja.toHalfFloat(Math.min(S[w+2]*K,65504)),E[L+3]=Ja.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=d(p);if(m!==-1){const S=m.width,w=m.height,E=g(p.subarray(p.pos),S,w);if(E!==-1){let L,I,K,Z;switch(this.type){case rn:Z=E.length/4;const j=new Float32Array(Z*4);for(let C=0;C<Z;C++)v(E,C*4,j,C*4);L=j,K=rn;break;case xn:Z=E.length/4;const y=new Uint16Array(Z*4);for(let C=0;C<Z;C++)x(E,C*4,y,C*4);L=y,K=xn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:S,height:w,data:L,header:m.string,gamma:m.gamma,exposure:m.exposure,format:I,type:K}}}return null}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(a,o){switch(a.type){case rn:a.encoding=yn,a.minFilter=rt,a.magFilter=rt,a.generateMipmaps=!1,a.flipY=!0;break;case xn:a.encoding=yn,a.minFilter=rt,a.magFilter=rt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,i,r)}}export{uT as A,T3 as B,Yr as C,Hg as D,D3 as E,C3 as F,k3 as G,_3 as H,x3 as I,v3 as J,F3 as K,It as P,O3 as R,hg as S,R as V,Qe as W,p3 as a,g3 as b,m3 as c,he as d,rd as e,B3 as f,z3 as g,Xp as h,f3 as i,Gv as j,L3 as k,y3 as l,R3 as m,I3 as n,d3 as o,u3 as p,N3 as q,h3 as r,Xe as s,w3 as t,P3 as u,M3 as v,b3 as w,E3 as x,S3 as y,A3 as z};
