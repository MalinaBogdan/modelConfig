(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function sc(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fp=sc(up);function oh(i){return!!i||i===""}function oc(i){if(He(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Tt(n)?pp(n):oc(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Tt(i))return i;if(ct(i))return i}}const hp=/;(?![^(]*\))/g,dp=/:(.+)/;function pp(i){const e={};return i.split(hp).forEach(t=>{if(t){const n=t.split(dp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function qn(i){let e="";if(Tt(i))e=i;else if(He(i))for(let t=0;t<i.length;t++){const n=qn(i[t]);n&&(e+=n+" ")}else if(ct(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const _a=i=>Tt(i)?i:i==null?"":He(i)||ct(i)&&(i.toString===uh||!Ve(i.toString))?JSON.stringify(i,ah,2):String(i),ah=(i,e)=>e&&e.__v_isRef?ah(i,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:lh(e)?{[`Set(${e.size})`]:[...e.values()]}:ct(e)&&!He(e)&&!fh(e)?String(e):e,at={},Er=[],gn=()=>{},mp=()=>!1,gp=/^on[^a-z]/,qo=i=>gp.test(i),ac=i=>i.startsWith("onUpdate:"),Wt=Object.assign,lc=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},_p=Object.prototype.hasOwnProperty,Ke=(i,e)=>_p.call(i,e),He=Array.isArray,Tr=i=>Yo(i)==="[object Map]",lh=i=>Yo(i)==="[object Set]",Ve=i=>typeof i=="function",Tt=i=>typeof i=="string",cc=i=>typeof i=="symbol",ct=i=>i!==null&&typeof i=="object",ch=i=>ct(i)&&Ve(i.then)&&Ve(i.catch),uh=Object.prototype.toString,Yo=i=>uh.call(i),vp=i=>Yo(i).slice(8,-1),fh=i=>Yo(i)==="[object Object]",uc=i=>Tt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,yo=sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},xp=/-(\w)/g,Cn=Ko(i=>i.replace(xp,(e,t)=>t?t.toUpperCase():"")),Mp=/\B([A-Z])/g,jr=Ko(i=>i.replace(Mp,"-$1").toLowerCase()),$o=Ko(i=>i.charAt(0).toUpperCase()+i.slice(1)),va=Ko(i=>i?`on${$o(i)}`:""),Es=(i,e)=>!Object.is(i,e),xa=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Lo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},yp=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let tu;const Sp=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yn;class Ep{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&yn&&(this.parent=yn,this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){yn=this}off(){yn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Tp(i,e=yn){e&&e.active&&e.effects.push(i)}const fc=i=>{const e=new Set(i);return e.w=0,e.n=0,e},hh=i=>(i.w&yi)>0,dh=i=>(i.n&yi)>0,bp=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=yi},Ap=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];hh(r)&&!dh(r)?r.delete(i):e[t++]=r,r.w&=~yi,r.n&=~yi}e.length=t}},al=new WeakMap;let ps=0,yi=1;const ll=30;let hn;const Gi=Symbol(""),cl=Symbol("");class hc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Tp(this,n)}run(){if(!this.active)return this.fn();let e=hn,t=_i;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hn,hn=this,_i=!0,yi=1<<++ps,ps<=ll?bp(this):nu(this),this.fn()}finally{ps<=ll&&Ap(this),yi=1<<--ps,hn=this.parent,_i=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(nu(this),this.onStop&&this.onStop(),this.active=!1)}}function nu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let _i=!0;const ph=[];function qr(){ph.push(_i),_i=!1}function Yr(){const i=ph.pop();_i=i===void 0?!0:i}function en(i,e,t){if(_i&&hn){let n=al.get(i);n||al.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=fc()),mh(r)}}function mh(i,e){let t=!1;ps<=ll?dh(i)||(i.n|=yi,t=!hh(i)):t=!i.has(hn),t&&(i.add(hn),hn.deps.push(i))}function Zn(i,e,t,n,r,s){const o=al.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&He(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":He(i)?uc(t)&&a.push(o.get("length")):(a.push(o.get(Gi)),Tr(i)&&a.push(o.get(cl)));break;case"delete":He(i)||(a.push(o.get(Gi)),Tr(i)&&a.push(o.get(cl)));break;case"set":Tr(i)&&a.push(o.get(Gi));break}if(a.length===1)a[0]&&ul(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ul(fc(l))}}function ul(i,e){const t=He(i)?i:[...i];for(const n of t)n.computed&&iu(n);for(const n of t)n.computed||iu(n)}function iu(i,e){(i!==hn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const wp=sc("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(cc)),Rp=dc(),Cp=dc(!1,!0),Pp=dc(!0),ru=Lp();function Lp(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=tt(this);for(let s=0,o=this.length;s<o;s++)en(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(tt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){qr();const n=tt(this)[e].apply(this,t);return Yr(),n}}),i}function dc(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?qp:yh:e?Mh:xh).get(n))return n;const o=He(n);if(!i&&o&&Ke(ru,r))return Reflect.get(ru,r,s);const a=Reflect.get(n,r,s);return(cc(r)?gh.has(r):wp(r))||(i||en(n,"get",r),e)?a:Rt(a)?o&&uc(r)?a:a.value:ct(a)?i?Sh(a):Kr(a):a}}const Ip=_h(),Dp=_h(!0);function _h(i=!1){return function(t,n,r,s){let o=t[n];if(Dr(o)&&Rt(o)&&!Rt(r))return!1;if(!i&&(!Io(r)&&!Dr(r)&&(o=tt(o),r=tt(r)),!He(t)&&Rt(o)&&!Rt(r)))return o.value=r,!0;const a=He(t)&&uc(n)?Number(n)<t.length:Ke(t,n),l=Reflect.set(t,n,r,s);return t===tt(s)&&(a?Es(r,o)&&Zn(t,"set",n,r):Zn(t,"add",n,r)),l}}function Np(i,e){const t=Ke(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Zn(i,"delete",e,void 0),n}function Up(i,e){const t=Reflect.has(i,e);return(!cc(e)||!gh.has(e))&&en(i,"has",e),t}function Op(i){return en(i,"iterate",He(i)?"length":Gi),Reflect.ownKeys(i)}const vh={get:Rp,set:Ip,deleteProperty:Np,has:Up,ownKeys:Op},Fp={get:Pp,set(i,e){return!0},deleteProperty(i,e){return!0}},Bp=Wt({},vh,{get:Cp,set:Dp}),pc=i=>i,Zo=i=>Reflect.getPrototypeOf(i);function ks(i,e,t=!1,n=!1){i=i.__v_raw;const r=tt(i),s=tt(e);t||(e!==s&&en(r,"get",e),en(r,"get",s));const{has:o}=Zo(r),a=n?pc:t?_c:Ts;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Hs(i,e=!1){const t=this.__v_raw,n=tt(t),r=tt(i);return e||(i!==r&&en(n,"has",i),en(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Vs(i,e=!1){return i=i.__v_raw,!e&&en(tt(i),"iterate",Gi),Reflect.get(i,"size",i)}function su(i){i=tt(i);const e=tt(this);return Zo(e).has.call(e,i)||(e.add(i),Zn(e,"add",i,i)),this}function ou(i,e){e=tt(e);const t=tt(this),{has:n,get:r}=Zo(t);let s=n.call(t,i);s||(i=tt(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Es(e,o)&&Zn(t,"set",i,e):Zn(t,"add",i,e),this}function au(i){const e=tt(this),{has:t,get:n}=Zo(e);let r=t.call(e,i);r||(i=tt(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Zn(e,"delete",i,void 0),s}function lu(){const i=tt(this),e=i.size!==0,t=i.clear();return e&&Zn(i,"clear",void 0,void 0),t}function Gs(i,e){return function(n,r){const s=this,o=s.__v_raw,a=tt(o),l=e?pc:i?_c:Ts;return!i&&en(a,"iterate",Gi),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Ws(i,e,t){return function(...n){const r=this.__v_raw,s=tt(r),o=Tr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?pc:e?_c:Ts;return!e&&en(s,"iterate",l?cl:Gi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ii(i){return function(...e){return i==="delete"?!1:this}}function zp(){const i={get(s){return ks(this,s)},get size(){return Vs(this)},has:Hs,add:su,set:ou,delete:au,clear:lu,forEach:Gs(!1,!1)},e={get(s){return ks(this,s,!1,!0)},get size(){return Vs(this)},has:Hs,add:su,set:ou,delete:au,clear:lu,forEach:Gs(!1,!0)},t={get(s){return ks(this,s,!0)},get size(){return Vs(this,!0)},has(s){return Hs.call(this,s,!0)},add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear"),forEach:Gs(!0,!1)},n={get(s){return ks(this,s,!0,!0)},get size(){return Vs(this,!0)},has(s){return Hs.call(this,s,!0)},add:ii("add"),set:ii("set"),delete:ii("delete"),clear:ii("clear"),forEach:Gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Ws(s,!1,!1),t[s]=Ws(s,!0,!1),e[s]=Ws(s,!1,!0),n[s]=Ws(s,!0,!0)}),[i,t,e,n]}const[kp,Hp,Vp,Gp]=zp();function mc(i,e){const t=e?i?Gp:Vp:i?Hp:kp;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ke(t,r)&&r in n?t:n,r,s)}const Wp={get:mc(!1,!1)},Xp={get:mc(!1,!0)},jp={get:mc(!0,!1)},xh=new WeakMap,Mh=new WeakMap,yh=new WeakMap,qp=new WeakMap;function Yp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kp(i){return i.__v_skip||!Object.isExtensible(i)?0:Yp(vp(i))}function Kr(i){return Dr(i)?i:gc(i,!1,vh,Wp,xh)}function $p(i){return gc(i,!1,Bp,Xp,Mh)}function Sh(i){return gc(i,!0,Fp,jp,yh)}function gc(i,e,t,n,r){if(!ct(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Kp(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function br(i){return Dr(i)?br(i.__v_raw):!!(i&&i.__v_isReactive)}function Dr(i){return!!(i&&i.__v_isReadonly)}function Io(i){return!!(i&&i.__v_isShallow)}function Eh(i){return br(i)||Dr(i)}function tt(i){const e=i&&i.__v_raw;return e?tt(e):i}function Th(i){return Lo(i,"__v_skip",!0),i}const Ts=i=>ct(i)?Kr(i):i,_c=i=>ct(i)?Sh(i):i;function bh(i){_i&&hn&&(i=tt(i),mh(i.dep||(i.dep=fc())))}function Ah(i,e){i=tt(i),i.dep&&ul(i.dep)}function Rt(i){return!!(i&&i.__v_isRef===!0)}function sn(i){return Zp(i,!1)}function Zp(i,e){return Rt(i)?i:new Jp(i,e)}class Jp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:Ts(e)}get value(){return bh(this),this._value}set value(e){const t=this.__v_isShallow||Io(e)||Dr(e);e=t?e:tt(e),Es(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ts(e),Ah(this))}}function Tn(i){return Rt(i)?i.value:i}const Qp={get:(i,e,t)=>Tn(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function wh(i){return br(i)?i:new Proxy(i,Qp)}var Rh;class em{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Rh]=!1,this._dirty=!0,this.effect=new hc(e,()=>{this._dirty||(this._dirty=!0,Ah(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=tt(this);return bh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rh="__v_isReadonly";function tm(i,e,t=!1){let n,r;const s=Ve(i);return s?(n=i,r=gn):(n=i.get,r=i.set),new em(n,r,s||!r,t)}function vi(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Jo(s,e,t)}return r}function _n(i,e,t,n){if(Ve(i)){const s=vi(i,e,t,n);return s&&ch(s)&&s.catch(o=>{Jo(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(_n(i[s],e,t,n));return r}function Jo(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){vi(l,null,10,[i,o,a]);return}}nm(i,t,r,n)}function nm(i,e,t,n=!0){console.error(i)}let bs=!1,fl=!1;const It=[];let bn=0;const Ar=[];let Xn=null,Oi=0;const Ch=Promise.resolve();let vc=null;function im(i){const e=vc||Ch;return i?e.then(this?i.bind(this):i):e}function rm(i){let e=bn+1,t=It.length;for(;e<t;){const n=e+t>>>1;As(It[n])<i?e=n+1:t=n}return e}function xc(i){(!It.length||!It.includes(i,bs&&i.allowRecurse?bn+1:bn))&&(i.id==null?It.push(i):It.splice(rm(i.id),0,i),Ph())}function Ph(){!bs&&!fl&&(fl=!0,vc=Ch.then(Ih))}function sm(i){const e=It.indexOf(i);e>bn&&It.splice(e,1)}function om(i){He(i)?Ar.push(...i):(!Xn||!Xn.includes(i,i.allowRecurse?Oi+1:Oi))&&Ar.push(i),Ph()}function cu(i,e=bs?bn+1:0){for(;e<It.length;e++){const t=It[e];t&&t.pre&&(It.splice(e,1),e--,t())}}function Lh(i){if(Ar.length){const e=[...new Set(Ar)];if(Ar.length=0,Xn){Xn.push(...e);return}for(Xn=e,Xn.sort((t,n)=>As(t)-As(n)),Oi=0;Oi<Xn.length;Oi++)Xn[Oi]();Xn=null,Oi=0}}const As=i=>i.id==null?1/0:i.id,am=(i,e)=>{const t=As(i)-As(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Ih(i){fl=!1,bs=!0,It.sort(am);const e=gn;try{for(bn=0;bn<It.length;bn++){const t=It[bn];t&&t.active!==!1&&vi(t,null,14)}}finally{bn=0,It.length=0,Lh(),bs=!1,vc=null,(It.length||Ar.length)&&Ih()}}function lm(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||at;h&&(r=t.map(d=>d.trim())),f&&(r=t.map(yp))}let a,l=n[a=va(e)]||n[a=va(Cn(e))];!l&&s&&(l=n[a=va(jr(e))]),l&&_n(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,_n(c,i,6,r)}}function Dh(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ve(i)){const l=c=>{const u=Dh(c,e,!0);u&&(a=!0,Wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ct(i)&&n.set(i,null),null):(He(s)?s.forEach(l=>o[l]=null):Wt(o,s),ct(i)&&n.set(i,o),o)}function Qo(i,e){return!i||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(i,e[0].toLowerCase()+e.slice(1))||Ke(i,jr(e))||Ke(i,e))}let Dt=null,ea=null;function Do(i){const e=Dt;return Dt=i,ea=i&&i.type.__scopeId||null,e}function cm(i){ea=i}function um(){ea=null}function fm(i,e=Dt,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&xu(-1);const s=Do(e),o=i(...r);return Do(s),n._d&&xu(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function Ma(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=i;let m,p;const A=Do(i);try{if(t.shapeFlag&4){const T=r||n;m=Sn(u.call(T,T,f,s,d,h,g)),p=l}else{const T=e;m=Sn(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),p=e.props?l:hm(l)}}catch(T){vs.length=0,Jo(T,i,1),m=Ht(Si)}let M=m;if(p&&v!==!1){const T=Object.keys(p),{shapeFlag:U}=M;T.length&&U&7&&(o&&T.some(ac)&&(p=dm(p,o)),M=Nr(M,p))}return t.dirs&&(M=Nr(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),m=M,Do(A),m}const hm=i=>{let e;for(const t in i)(t==="class"||t==="style"||qo(t))&&((e||(e={}))[t]=i[t]);return e},dm=(i,e)=>{const t={};for(const n in i)(!ac(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function pm(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?uu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Qo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?uu(n,o,c):!0:!!o;return!1}function uu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Qo(t,s))return!0}return!1}function mm({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const gm=i=>i.__isSuspense;function _m(i,e){e&&e.pendingBranch?He(i)?e.effects.push(...i):e.effects.push(i):om(i)}function vm(i,e){if(St){let t=St.provides;const n=St.parent&&St.parent.provides;n===t&&(t=St.provides=Object.create(n)),t[i]=e}}function ya(i,e,t=!1){const n=St||Dt;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ve(e)?e.call(n.proxy):e}}const fu={};function wr(i,e,t){return Nh(i,e,t)}function Nh(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=at){const a=St;let l,c=!1,u=!1;if(Rt(i)?(l=()=>i.value,c=Io(i)):br(i)?(l=()=>i,n=!0):He(i)?(u=!0,c=i.some(p=>br(p)||Io(p)),l=()=>i.map(p=>{if(Rt(p))return p.value;if(br(p))return ki(p);if(Ve(p))return vi(p,a,2)})):Ve(i)?e?l=()=>vi(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),_n(i,a,3,[h])}:l=gn,e&&n){const p=l;l=()=>ki(p())}let f,h=p=>{f=m.onStop=()=>{vi(p,a,4)}};if(Rs)return h=gn,e?t&&_n(e,a,3,[l(),u?[]:void 0,h]):l(),gn;let d=u?[]:fu;const g=()=>{if(!!m.active)if(e){const p=m.run();(n||c||(u?p.some((A,M)=>Es(A,d[M])):Es(p,d)))&&(f&&f(),_n(e,a,3,[p,d===fu?void 0:d,h]),d=p)}else m.run()};g.allowRecurse=!!e;let v;r==="sync"?v=g:r==="post"?v=()=>Xt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),v=()=>xc(g));const m=new hc(l,v);return e?t?g():d=m.run():r==="post"?Xt(m.run.bind(m),a&&a.suspense):m.run(),()=>{m.stop(),a&&a.scope&&lc(a.scope.effects,m)}}function xm(i,e,t){const n=this.proxy,r=Tt(i)?i.includes(".")?Uh(n,i):()=>n[i]:i.bind(n,n);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=St;Ur(this);const a=Nh(r,s.bind(n),t);return o?Ur(o):Wi(),a}function Uh(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function ki(i,e){if(!ct(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Rt(i))ki(i.value,e);else if(He(i))for(let t=0;t<i.length;t++)ki(i[t],e);else if(lh(i)||Tr(i))i.forEach(t=>{ki(t,e)});else if(fh(i))for(const t in i)ki(i[t],e);return i}function ta(i){return Ve(i)?{setup:i,name:i.name}:i}const _s=i=>!!i.type.__asyncLoader,Oh=i=>i.type.__isKeepAlive;function Mm(i,e){Fh(i,"a",e)}function ym(i,e){Fh(i,"da",e)}function Fh(i,e,t=St){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(na(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Oh(r.parent.vnode)&&Sm(n,e,t,r),r=r.parent}}function Sm(i,e,t,n){const r=na(e,i,n,!0);Bh(()=>{lc(n[e],r)},t)}function na(i,e,t=St,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;qr(),Ur(t);const a=_n(e,t,i,o);return Wi(),Yr(),a});return n?r.unshift(s):r.push(s),s}}const ei=i=>(e,t=St)=>(!Rs||i==="sp")&&na(i,e,t),Em=ei("bm"),ia=ei("m"),Tm=ei("bu"),Mc=ei("u"),bm=ei("bum"),Bh=ei("um"),Am=ei("sp"),wm=ei("rtg"),Rm=ei("rtc");function Cm(i,e=St){na("ec",i,e)}function Pm(i,e){const t=Dt;if(t===null)return i;const n=sa(t)||t.proxy,r=i.dirs||(i.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=at]=e[s];Ve(o)&&(o={mounted:o,updated:o}),o.deep&&ki(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c})}return i}function bi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(qr(),_n(l,t,8,[i.el,a,i,e]),Yr())}}const zh="components";function Lm(i,e){return Dm(zh,i,!0,e)||i}const Im=Symbol();function Dm(i,e,t=!0,n=!1){const r=Dt||St;if(r){const s=r.type;if(i===zh){const a=ug(s,!1);if(a&&(a===e||a===Cn(e)||a===$o(Cn(e))))return s}const o=hu(r[i]||s[i],e)||hu(r.appContext[i],e);return!o&&n?s:o}}function hu(i,e){return i&&(i[e]||i[Cn(e)]||i[$o(Cn(e))])}function Sa(i,e,t,n){let r;const s=t&&t[n];if(He(i)||Tt(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ct(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}function Nm(i,e,t={},n,r){if(Dt.isCE||Dt.parent&&_s(Dt.parent)&&Dt.parent.isCE)return Ht("slot",e==="default"?null:{name:e},n&&n());let s=i[e];s&&s._c&&(s._d=!1),fn();const o=s&&kh(s(t)),a=Tc(zt,{key:t.key||o&&o.key||`_${e}`},o||(n?n():[]),o&&i._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function kh(i){return i.some(e=>Oo(e)?!(e.type===Si||e.type===zt&&!kh(e.children)):!0)?i:null}const hl=i=>i?Jh(i)?sa(i)||i.proxy:hl(i.parent):null,No=Wt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>hl(i.parent),$root:i=>hl(i.root),$emit:i=>i.emit,$options:i=>yc(i),$forceUpdate:i=>i.f||(i.f=()=>xc(i.update)),$nextTick:i=>i.n||(i.n=im.bind(i.proxy)),$watch:i=>xm.bind(i)}),Um={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==at&&Ke(n,e))return o[e]=1,n[e];if(r!==at&&Ke(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==at&&Ke(t,e))return o[e]=4,t[e];dl&&(o[e]=0)}}const u=No[e];let f,h;if(u)return e==="$attrs"&&en(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==at&&Ke(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ke(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==at&&Ke(r,e)?(r[e]=t,!0):n!==at&&Ke(n,e)?(n[e]=t,!0):Ke(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==at&&Ke(i,o)||e!==at&&Ke(e,o)||(a=s[0])&&Ke(a,o)||Ke(n,o)||Ke(No,o)||Ke(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ke(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let dl=!0;function Om(i){const e=yc(i),t=i.proxy,n=i.ctx;dl=!1,e.beforeCreate&&du(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:M,unmounted:T,render:U,renderTracked:P,renderTriggered:w,errorCaptured:F,serverPrefetch:b,expose:S,inheritAttrs:D,components:Q,directives:Y,filters:te}=e;if(c&&Fm(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const $ in o){const H=o[$];Ve(H)&&(n[$]=H.bind(t))}if(r){const $=r.call(t,t);ct($)&&(i.data=Kr($))}if(dl=!0,s)for(const $ in s){const H=s[$],he=Ve(H)?H.bind(t,t):Ve(H.get)?H.get.bind(t,t):gn,_e=!Ve(H)&&Ve(H.set)?H.set.bind(t):gn,ye=hg({get:he,set:_e});Object.defineProperty(n,$,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Be=>ye.value=Be})}if(a)for(const $ in a)Hh(a[$],n,t,$);if(l){const $=Ve(l)?l.call(t):l;Reflect.ownKeys($).forEach(H=>{vm(H,$[H])})}u&&du(u,i,"c");function W($,H){He(H)?H.forEach(he=>$(he.bind(t))):H&&$(H.bind(t))}if(W(Em,f),W(ia,h),W(Tm,d),W(Mc,g),W(Mm,v),W(ym,m),W(Cm,F),W(Rm,P),W(wm,w),W(bm,A),W(Bh,T),W(Am,b),He(S))if(S.length){const $=i.exposed||(i.exposed={});S.forEach(H=>{Object.defineProperty($,H,{get:()=>t[H],set:he=>t[H]=he})})}else i.exposed||(i.exposed={});U&&i.render===gn&&(i.render=U),D!=null&&(i.inheritAttrs=D),Q&&(i.components=Q),Y&&(i.directives=Y)}function Fm(i,e,t=gn,n=!1){He(i)&&(i=pl(i));for(const r in i){const s=i[r];let o;ct(s)?"default"in s?o=ya(s.from||r,s.default,!0):o=ya(s.from||r):o=ya(s),Rt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function du(i,e,t){_n(He(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Hh(i,e,t,n){const r=n.includes(".")?Uh(t,n):()=>t[n];if(Tt(i)){const s=e[i];Ve(s)&&wr(r,s)}else if(Ve(i))wr(r,i.bind(t));else if(ct(i))if(He(i))i.forEach(s=>Hh(s,e,t,n));else{const s=Ve(i.handler)?i.handler.bind(t):e[i.handler];Ve(s)&&wr(r,s,i)}}function yc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Uo(l,c,o,!0)),Uo(l,e,o)),ct(e)&&s.set(e,l),l}function Uo(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Uo(i,s,t,!0),r&&r.forEach(o=>Uo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Bm[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Bm={data:pu,props:Ni,emits:Ni,methods:Ni,computed:Ni,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Ni,directives:Ni,watch:km,provide:pu,inject:zm};function pu(i,e){return e?i?function(){return Wt(Ve(i)?i.call(this,this):i,Ve(e)?e.call(this,this):e)}:e:i}function zm(i,e){return Ni(pl(i),pl(e))}function pl(i){if(He(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ut(i,e){return i?[...new Set([].concat(i,e))]:e}function Ni(i,e){return i?Wt(Wt(Object.create(null),i),e):e}function km(i,e){if(!i)return e;if(!e)return i;const t=Wt(Object.create(null),i);for(const n in e)t[n]=Ut(i[n],e[n]);return t}function Hm(i,e,t,n=!1){const r={},s={};Lo(s,ra,1),i.propsDefaults=Object.create(null),Vh(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:$p(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Vm(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=tt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Qo(i.emitsOptions,h))continue;const d=e[h];if(l)if(Ke(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Cn(h);r[g]=ml(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Vh(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=jr(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ml(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f)&&!0)&&(delete s[f],c=!0)}c&&Zn(i,"set","$attrs")}function Vh(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(yo(l))continue;const c=e[l];let u;r&&Ke(r,u=Cn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Qo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=tt(t),c=a||at;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ml(r,l,f,c[f],i,!Ke(c,f))}}return o}function ml(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ke(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ve(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Ur(r),n=c[t]=l.call(null,e),Wi())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===jr(t))&&(n=!0))}return n}function Gh(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ve(i)){const u=f=>{l=!0;const[h,d]=Gh(f,e,!0);Wt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ct(i)&&n.set(i,Er),Er;if(He(s))for(let u=0;u<s.length;u++){const f=Cn(s[u]);mu(f)&&(o[f]=at)}else if(s)for(const u in s){const f=Cn(u);if(mu(f)){const h=s[u],d=o[f]=He(h)||Ve(h)?{type:h}:h;if(d){const g=vu(Boolean,d.type),v=vu(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||Ke(d,"default"))&&a.push(f)}}}const c=[o,a];return ct(i)&&n.set(i,c),c}function mu(i){return i[0]!=="$"}function gu(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function _u(i,e){return gu(i)===gu(e)}function vu(i,e){return He(e)?e.findIndex(t=>_u(t,i)):Ve(e)&&_u(e,i)?0:-1}const Wh=i=>i[0]==="_"||i==="$stable",Sc=i=>He(i)?i.map(Sn):[Sn(i)],Gm=(i,e,t)=>{if(e._n)return e;const n=fm((...r)=>Sc(e(...r)),t);return n._c=!1,n},Xh=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Wh(r))continue;const s=i[r];if(Ve(s))e[r]=Gm(r,s,n);else if(s!=null){const o=Sc(s);e[r]=()=>o}}},jh=(i,e)=>{const t=Sc(e);i.slots.default=()=>t},Wm=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=tt(e),Lo(e,"_",t)):Xh(e,i.slots={})}else i.slots={},e&&jh(i,e);Lo(i.slots,ra,1)},Xm=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=at;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Wt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Xh(e,r)),o=e}else e&&(jh(i,e),o={default:1});if(s)for(const a in r)!Wh(a)&&!(a in o)&&delete r[a]};function qh(){return{app:null,config:{isNativeTag:mp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jm=0;function qm(i,e){return function(n,r=null){Ve(n)||(n=Object.assign({},n)),r!=null&&!ct(r)&&(r=null);const s=qh(),o=new Set;let a=!1;const l=s.app={_uid:jm++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:mg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ve(c.install)?(o.add(c),c.install(l,...u)):Ve(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Ht(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,sa(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function gl(i,e,t,n,r=!1){if(He(i)){i.forEach((h,d)=>gl(h,e&&(He(e)?e[d]:e),t,n,r));return}if(_s(n)&&!r)return;const s=n.shapeFlag&4?sa(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):Rt(c)&&(c.value=null)),Ve(l))vi(l,a,12,[o,u]);else{const h=Tt(l),d=Rt(l);if(h||d){const g=()=>{if(i.f){const v=h?u[l]:l.value;r?He(v)&&lc(v,s):He(v)?v.includes(s)||v.push(s):h?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Ke(f,l)&&(f[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Xt(g,t)):g()}}}const Xt=_m;function Ym(i){return Km(i)}function Km(i,e){const t=Sp();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=gn,cloneNode:g,insertStaticContent:v}=i,m=(R,I,V,z=null,ie=null,ee=null,se=!1,y=null,_=!!I.dynamicChildren)=>{if(R===I)return;R&&!ns(R,I)&&(z=Le(R),Ge(R,ie,ee,!0),R=null),I.patchFlag===-2&&(_=!1,I.dynamicChildren=null);const{type:C,ref:j,shapeFlag:G}=I;switch(C){case Ec:p(R,I,V,z);break;case Si:A(R,I,V,z);break;case Ea:R==null&&M(I,V,z,se);break;case zt:Y(R,I,V,z,ie,ee,se,y,_);break;default:G&1?P(R,I,V,z,ie,ee,se,y,_):G&6?te(R,I,V,z,ie,ee,se,y,_):(G&64||G&128)&&C.process(R,I,V,z,ie,ee,se,y,_,Ne)}j!=null&&ie&&gl(j,R&&R.ref,ee,I||R,!I)},p=(R,I,V,z)=>{if(R==null)n(I.el=a(I.children),V,z);else{const ie=I.el=R.el;I.children!==R.children&&c(ie,I.children)}},A=(R,I,V,z)=>{R==null?n(I.el=l(I.children||""),V,z):I.el=R.el},M=(R,I,V,z)=>{[R.el,R.anchor]=v(R.children,I,V,z,R.el,R.anchor)},T=({el:R,anchor:I},V,z)=>{let ie;for(;R&&R!==I;)ie=h(R),n(R,V,z),R=ie;n(I,V,z)},U=({el:R,anchor:I})=>{let V;for(;R&&R!==I;)V=h(R),r(R),R=V;r(I)},P=(R,I,V,z,ie,ee,se,y,_)=>{se=se||I.type==="svg",R==null?w(I,V,z,ie,ee,se,y,_):S(R,I,ie,ee,se,y,_)},w=(R,I,V,z,ie,ee,se,y)=>{let _,C;const{type:j,props:G,shapeFlag:k,transition:le,patchFlag:ae,dirs:ce}=R;if(R.el&&g!==void 0&&ae===-1)_=R.el=g(R.el);else{if(_=R.el=o(R.type,ee,G&&G.is,G),k&8?u(_,R.children):k&16&&b(R.children,_,null,z,ie,ee&&j!=="foreignObject",se,y),ce&&bi(R,null,z,"created"),G){for(const oe in G)oe!=="value"&&!yo(oe)&&s(_,oe,null,G[oe],ee,R.children,z,ie,me);"value"in G&&s(_,"value",null,G.value),(C=G.onVnodeBeforeMount)&&Mn(C,z,R)}F(_,R,R.scopeId,se,z)}ce&&bi(R,null,z,"beforeMount");const ve=(!ie||ie&&!ie.pendingBranch)&&le&&!le.persisted;ve&&le.beforeEnter(_),n(_,I,V),((C=G&&G.onVnodeMounted)||ve||ce)&&Xt(()=>{C&&Mn(C,z,R),ve&&le.enter(_),ce&&bi(R,null,z,"mounted")},ie)},F=(R,I,V,z,ie)=>{if(V&&d(R,V),z)for(let ee=0;ee<z.length;ee++)d(R,z[ee]);if(ie){let ee=ie.subTree;if(I===ee){const se=ie.vnode;F(R,se,se.scopeId,se.slotScopeIds,ie.parent)}}},b=(R,I,V,z,ie,ee,se,y,_=0)=>{for(let C=_;C<R.length;C++){const j=R[C]=y?hi(R[C]):Sn(R[C]);m(null,j,I,V,z,ie,ee,se,y)}},S=(R,I,V,z,ie,ee,se)=>{const y=I.el=R.el;let{patchFlag:_,dynamicChildren:C,dirs:j}=I;_|=R.patchFlag&16;const G=R.props||at,k=I.props||at;let le;V&&Ai(V,!1),(le=k.onVnodeBeforeUpdate)&&Mn(le,V,I,R),j&&bi(I,R,V,"beforeUpdate"),V&&Ai(V,!0);const ae=ie&&I.type!=="foreignObject";if(C?D(R.dynamicChildren,C,y,V,z,ae,ee):se||he(R,I,y,null,V,z,ae,ee,!1),_>0){if(_&16)Q(y,I,G,k,V,z,ie);else if(_&2&&G.class!==k.class&&s(y,"class",null,k.class,ie),_&4&&s(y,"style",G.style,k.style,ie),_&8){const ce=I.dynamicProps;for(let ve=0;ve<ce.length;ve++){const oe=ce[ve],pe=G[oe],ze=k[oe];(ze!==pe||oe==="value")&&s(y,oe,pe,ze,ie,R.children,V,z,me)}}_&1&&R.children!==I.children&&u(y,I.children)}else!se&&C==null&&Q(y,I,G,k,V,z,ie);((le=k.onVnodeUpdated)||j)&&Xt(()=>{le&&Mn(le,V,I,R),j&&bi(I,R,V,"updated")},z)},D=(R,I,V,z,ie,ee,se)=>{for(let y=0;y<I.length;y++){const _=R[y],C=I[y],j=_.el&&(_.type===zt||!ns(_,C)||_.shapeFlag&70)?f(_.el):V;m(_,C,j,null,z,ie,ee,se,!0)}},Q=(R,I,V,z,ie,ee,se)=>{if(V!==z){for(const y in z){if(yo(y))continue;const _=z[y],C=V[y];_!==C&&y!=="value"&&s(R,y,C,_,se,I.children,ie,ee,me)}if(V!==at)for(const y in V)!yo(y)&&!(y in z)&&s(R,y,V[y],null,se,I.children,ie,ee,me);"value"in z&&s(R,"value",V.value,z.value)}},Y=(R,I,V,z,ie,ee,se,y,_)=>{const C=I.el=R?R.el:a(""),j=I.anchor=R?R.anchor:a("");let{patchFlag:G,dynamicChildren:k,slotScopeIds:le}=I;le&&(y=y?y.concat(le):le),R==null?(n(C,V,z),n(j,V,z),b(I.children,V,j,ie,ee,se,y,_)):G>0&&G&64&&k&&R.dynamicChildren?(D(R.dynamicChildren,k,V,ie,ee,se,y),(I.key!=null||ie&&I===ie.subTree)&&Yh(R,I,!0)):he(R,I,V,j,ie,ee,se,y,_)},te=(R,I,V,z,ie,ee,se,y,_)=>{I.slotScopeIds=y,R==null?I.shapeFlag&512?ie.ctx.activate(I,V,z,se,_):ne(I,V,z,ie,ee,se,_):W(R,I,_)},ne=(R,I,V,z,ie,ee,se)=>{const y=R.component=sg(R,z,ie);if(Oh(R)&&(y.ctx.renderer=Ne),ag(y),y.asyncDep){if(ie&&ie.registerDep(y,$),!R.el){const _=y.subTree=Ht(Si);A(null,_,I,V)}return}$(y,R,I,V,ie,ee,se)},W=(R,I,V)=>{const z=I.component=R.component;if(pm(R,I,V))if(z.asyncDep&&!z.asyncResolved){H(z,I,V);return}else z.next=I,sm(z.update),z.update();else I.el=R.el,z.vnode=I},$=(R,I,V,z,ie,ee,se)=>{const y=()=>{if(R.isMounted){let{next:j,bu:G,u:k,parent:le,vnode:ae}=R,ce=j,ve;Ai(R,!1),j?(j.el=ae.el,H(R,j,se)):j=ae,G&&xa(G),(ve=j.props&&j.props.onVnodeBeforeUpdate)&&Mn(ve,le,j,ae),Ai(R,!0);const oe=Ma(R),pe=R.subTree;R.subTree=oe,m(pe,oe,f(pe.el),Le(pe),R,ie,ee),j.el=oe.el,ce===null&&mm(R,oe.el),k&&Xt(k,ie),(ve=j.props&&j.props.onVnodeUpdated)&&Xt(()=>Mn(ve,le,j,ae),ie)}else{let j;const{el:G,props:k}=I,{bm:le,m:ae,parent:ce}=R,ve=_s(I);if(Ai(R,!1),le&&xa(le),!ve&&(j=k&&k.onVnodeBeforeMount)&&Mn(j,ce,I),Ai(R,!0),G&&L){const oe=()=>{R.subTree=Ma(R),L(G,R.subTree,R,ie,null)};ve?I.type.__asyncLoader().then(()=>!R.isUnmounted&&oe()):oe()}else{const oe=R.subTree=Ma(R);m(null,oe,V,z,R,ie,ee),I.el=oe.el}if(ae&&Xt(ae,ie),!ve&&(j=k&&k.onVnodeMounted)){const oe=I;Xt(()=>Mn(j,ce,oe),ie)}(I.shapeFlag&256||ce&&_s(ce.vnode)&&ce.vnode.shapeFlag&256)&&R.a&&Xt(R.a,ie),R.isMounted=!0,I=V=z=null}},_=R.effect=new hc(y,()=>xc(C),R.scope),C=R.update=()=>_.run();C.id=R.uid,Ai(R,!0),C()},H=(R,I,V)=>{I.component=R;const z=R.vnode.props;R.vnode=I,R.next=null,Vm(R,I.props,z,V),Xm(R,I.children,V),qr(),cu(),Yr()},he=(R,I,V,z,ie,ee,se,y,_=!1)=>{const C=R&&R.children,j=R?R.shapeFlag:0,G=I.children,{patchFlag:k,shapeFlag:le}=I;if(k>0){if(k&128){ye(C,G,V,z,ie,ee,se,y,_);return}else if(k&256){_e(C,G,V,z,ie,ee,se,y,_);return}}le&8?(j&16&&me(C,ie,ee),G!==C&&u(V,G)):j&16?le&16?ye(C,G,V,z,ie,ee,se,y,_):me(C,ie,ee,!0):(j&8&&u(V,""),le&16&&b(G,V,z,ie,ee,se,y,_))},_e=(R,I,V,z,ie,ee,se,y,_)=>{R=R||Er,I=I||Er;const C=R.length,j=I.length,G=Math.min(C,j);let k;for(k=0;k<G;k++){const le=I[k]=_?hi(I[k]):Sn(I[k]);m(R[k],le,V,null,ie,ee,se,y,_)}C>j?me(R,ie,ee,!0,!1,G):b(I,V,z,ie,ee,se,y,_,G)},ye=(R,I,V,z,ie,ee,se,y,_)=>{let C=0;const j=I.length;let G=R.length-1,k=j-1;for(;C<=G&&C<=k;){const le=R[C],ae=I[C]=_?hi(I[C]):Sn(I[C]);if(ns(le,ae))m(le,ae,V,null,ie,ee,se,y,_);else break;C++}for(;C<=G&&C<=k;){const le=R[G],ae=I[k]=_?hi(I[k]):Sn(I[k]);if(ns(le,ae))m(le,ae,V,null,ie,ee,se,y,_);else break;G--,k--}if(C>G){if(C<=k){const le=k+1,ae=le<j?I[le].el:z;for(;C<=k;)m(null,I[C]=_?hi(I[C]):Sn(I[C]),V,ae,ie,ee,se,y,_),C++}}else if(C>k)for(;C<=G;)Ge(R[C],ie,ee,!0),C++;else{const le=C,ae=C,ce=new Map;for(C=ae;C<=k;C++){const be=I[C]=_?hi(I[C]):Sn(I[C]);be.key!=null&&ce.set(be.key,C)}let ve,oe=0;const pe=k-ae+1;let ze=!1,Re=0;const xe=new Array(pe);for(C=0;C<pe;C++)xe[C]=0;for(C=le;C<=G;C++){const be=R[C];if(oe>=pe){Ge(be,ie,ee,!0);continue}let Ye;if(be.key!=null)Ye=ce.get(be.key);else for(ve=ae;ve<=k;ve++)if(xe[ve-ae]===0&&ns(be,I[ve])){Ye=ve;break}Ye===void 0?Ge(be,ie,ee,!0):(xe[Ye-ae]=C+1,Ye>=Re?Re=Ye:ze=!0,m(be,I[Ye],V,null,ie,ee,se,y,_),oe++)}const Pe=ze?$m(xe):Er;for(ve=Pe.length-1,C=pe-1;C>=0;C--){const be=ae+C,Ye=I[be],x=be+1<j?I[be+1].el:z;xe[C]===0?m(null,Ye,V,x,ie,ee,se,y,_):ze&&(ve<0||C!==Pe[ve]?Be(Ye,V,x,2):ve--)}}},Be=(R,I,V,z,ie=null)=>{const{el:ee,type:se,transition:y,children:_,shapeFlag:C}=R;if(C&6){Be(R.component.subTree,I,V,z);return}if(C&128){R.suspense.move(I,V,z);return}if(C&64){se.move(R,I,V,Ne);return}if(se===zt){n(ee,I,V);for(let G=0;G<_.length;G++)Be(_[G],I,V,z);n(R.anchor,I,V);return}if(se===Ea){T(R,I,V);return}if(z!==2&&C&1&&y)if(z===0)y.beforeEnter(ee),n(ee,I,V),Xt(()=>y.enter(ee),ie);else{const{leave:G,delayLeave:k,afterLeave:le}=y,ae=()=>n(ee,I,V),ce=()=>{G(ee,()=>{ae(),le&&le()})};k?k(ee,ae,ce):ce()}else n(ee,I,V)},Ge=(R,I,V,z=!1,ie=!1)=>{const{type:ee,props:se,ref:y,children:_,dynamicChildren:C,shapeFlag:j,patchFlag:G,dirs:k}=R;if(y!=null&&gl(y,null,V,R,!0),j&256){I.ctx.deactivate(R);return}const le=j&1&&k,ae=!_s(R);let ce;if(ae&&(ce=se&&se.onVnodeBeforeUnmount)&&Mn(ce,I,R),j&6)Se(R.component,V,z);else{if(j&128){R.suspense.unmount(V,z);return}le&&bi(R,null,I,"beforeUnmount"),j&64?R.type.remove(R,I,V,ie,Ne,z):C&&(ee!==zt||G>0&&G&64)?me(C,I,V,!1,!0):(ee===zt&&G&384||!ie&&j&16)&&me(_,I,V),z&&re(R)}(ae&&(ce=se&&se.onVnodeUnmounted)||le)&&Xt(()=>{ce&&Mn(ce,I,R),le&&bi(R,null,I,"unmounted")},V)},re=R=>{const{type:I,el:V,anchor:z,transition:ie}=R;if(I===zt){fe(V,z);return}if(I===Ea){U(R);return}const ee=()=>{r(V),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(R.shapeFlag&1&&ie&&!ie.persisted){const{leave:se,delayLeave:y}=ie,_=()=>se(V,ee);y?y(R.el,ee,_):_()}else ee()},fe=(R,I)=>{let V;for(;R!==I;)V=h(R),r(R),R=V;r(I)},Se=(R,I,V)=>{const{bum:z,scope:ie,update:ee,subTree:se,um:y}=R;z&&xa(z),ie.stop(),ee&&(ee.active=!1,Ge(se,R,I,V)),y&&Xt(y,I),Xt(()=>{R.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},me=(R,I,V,z=!1,ie=!1,ee=0)=>{for(let se=ee;se<R.length;se++)Ge(R[se],I,V,z,ie)},Le=R=>R.shapeFlag&6?Le(R.component.subTree):R.shapeFlag&128?R.suspense.next():h(R.anchor||R.el),Fe=(R,I,V)=>{R==null?I._vnode&&Ge(I._vnode,null,null,!0):m(I._vnode||null,R,I,null,null,null,V),cu(),Lh(),I._vnode=R},Ne={p:m,um:Ge,m:Be,r:re,mt:ne,mc:b,pc:he,pbc:D,n:Le,o:i};let nt,L;return e&&([nt,L]=e(Ne)),{render:Fe,hydrate:nt,createApp:qm(Fe,nt)}}function Ai({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Yh(i,e,t=!1){const n=i.children,r=e.children;if(He(n)&&He(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=hi(r[s]),a.el=o.el),t||Yh(o,a))}}function $m(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Zm=i=>i.__isTeleport,zt=Symbol(void 0),Ec=Symbol(void 0),Si=Symbol(void 0),Ea=Symbol(void 0),vs=[];let pn=null;function fn(i=!1){vs.push(pn=i?null:[])}function Jm(){vs.pop(),pn=vs[vs.length-1]||null}let ws=1;function xu(i){ws+=i}function Kh(i){return i.dynamicChildren=ws>0?pn||Er:null,Jm(),ws>0&&pn&&pn.push(i),i}function fi(i,e,t,n,r,s){return Kh(it(i,e,t,n,r,s,!0))}function Tc(i,e,t,n,r){return Kh(Ht(i,e,t,n,r,!0))}function Oo(i){return i?i.__v_isVNode===!0:!1}function ns(i,e){return i.type===e.type&&i.key===e.key}const ra="__vInternal",$h=({key:i})=>i!=null?i:null,So=({ref:i,ref_key:e,ref_for:t})=>i!=null?Tt(i)||Rt(i)||Ve(i)?{i:Dt,r:i,k:e,f:!!t}:i:null;function it(i,e=null,t=null,n=0,r=null,s=i===zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&$h(e),ref:e&&So(e),scopeId:ea,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(bc(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),ws>0&&!o&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const Ht=Qm;function Qm(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Im)&&(i=Si),Oo(i)){const a=Nr(i,e,!0);return t&&bc(a,t),ws>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(i)]=a:pn.push(a)),a.patchFlag|=-2,a}if(fg(i)&&(i=i.__vccOpts),e){e=eg(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=qn(a)),ct(l)&&(Eh(l)&&!He(l)&&(l=Wt({},l)),e.style=oc(l))}const o=Tt(i)?1:gm(i)?128:Zm(i)?64:ct(i)?4:Ve(i)?2:0;return it(i,e,t,n,r,o,s,!0)}function eg(i){return i?Eh(i)||ra in i?Wt({},i):i:null}function Nr(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?ng(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&$h(a),ref:e&&e.ref?t&&r?He(r)?r.concat(So(e)):[r,So(e)]:So(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==zt?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Nr(i.ssContent),ssFallback:i.ssFallback&&Nr(i.ssFallback),el:i.el,anchor:i.anchor}}function tg(i=" ",e=0){return Ht(Ec,null,i,e)}function Zh(i="",e=!1){return e?(fn(),Tc(Si,null,i)):Ht(Si,null,i)}function Sn(i){return i==null||typeof i=="boolean"?Ht(Si):He(i)?Ht(zt,null,i.slice()):typeof i=="object"?hi(i):Ht(Ec,null,String(i))}function hi(i){return i.el===null||i.memo?i:Nr(i)}function bc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),bc(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ra in e)?e._ctx=Dt:r===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),n&64?(t=16,e=[tg(e)]):t=8);i.children=e,i.shapeFlag|=t}function ng(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=qn([e.class,n.class]));else if(r==="style")e.style=oc([e.style,n.style]);else if(qo(r)){const s=e[r],o=n[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Mn(i,e,t,n=null){_n(i,e,7,[t,n])}const ig=qh();let rg=0;function sg(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||ig,s={uid:rg++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gh(n,r),emitsOptions:Dh(n,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:n.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=lm.bind(null,s),i.ce&&i.ce(s),s}let St=null;const og=()=>St||Dt,Ur=i=>{St=i,i.scope.on()},Wi=()=>{St&&St.scope.off(),St=null};function Jh(i){return i.vnode.shapeFlag&4}let Rs=!1;function ag(i,e=!1){Rs=e;const{props:t,children:n}=i.vnode,r=Jh(i);Hm(i,t,r,e),Wm(i,n);const s=r?lg(i,e):void 0;return Rs=!1,s}function lg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Th(new Proxy(i.ctx,Um));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?ed(i):null;Ur(i),qr();const s=vi(n,i,0,[i.props,r]);if(Yr(),Wi(),ch(s)){if(s.then(Wi,Wi),e)return s.then(o=>{Mu(i,o,e)}).catch(o=>{Jo(o,i,0)});i.asyncDep=s}else Mu(i,s,e)}else Qh(i,e)}function Mu(i,e,t){Ve(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ct(e)&&(i.setupState=wh(e)),Qh(i,t)}let yu;function Qh(i,e,t){const n=i.type;if(!i.render){if(!e&&yu&&!n.render){const r=n.template||yc(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Wt(Wt({isCustomElement:s,delimiters:a},o),l);n.render=yu(r,c)}}i.render=n.render||gn}Ur(i),qr(),Om(i),Yr(),Wi()}function cg(i){return new Proxy(i.attrs,{get(e,t){return en(i,"get","$attrs"),e[t]}})}function ed(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=cg(i))},slots:i.slots,emit:i.emit,expose:e}}function sa(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(wh(Th(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in No)return No[t](i)}}))}function ug(i,e=!0){return Ve(i)?i.displayName||i.name:i.name||e&&i.__name}function fg(i){return Ve(i)&&"__vccOpts"in i}const hg=(i,e)=>tm(i,e,Rs);function dg(){return pg().slots}function pg(){const i=og();return i.setupContext||(i.setupContext=ed(i))}function xs(i,e,t){const n=arguments.length;return n===2?ct(e)&&!He(e)?Oo(e)?Ht(i,null,[e]):Ht(i,e):Ht(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Oo(t)&&(t=[t]),Ht(i,e,t))}const mg="3.2.39",gg="http://www.w3.org/2000/svg",Fi=typeof document<"u"?document:null,Su=Fi&&Fi.createElement("template"),_g={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Fi.createElementNS(gg,i):Fi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Fi.createTextNode(i),createComment:i=>Fi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Fi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Su.innerHTML=n?`<svg>${i}</svg>`:i;const a=Su.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function vg(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function xg(i,e,t){const n=i.style,r=Tt(t);if(t&&!r){for(const s in t)_l(n,s,t[s]);if(e&&!Tt(e))for(const s in e)t[s]==null&&_l(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Eu=/\s*!important$/;function _l(i,e,t){if(He(t))t.forEach(n=>_l(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Mg(i,e);Eu.test(t)?i.setProperty(jr(n),t.replace(Eu,""),"important"):i[n]=t}}const Tu=["Webkit","Moz","ms"],Ta={};function Mg(i,e){const t=Ta[e];if(t)return t;let n=Cn(e);if(n!=="filter"&&n in i)return Ta[e]=n;n=$o(n);for(let r=0;r<Tu.length;r++){const s=Tu[r]+n;if(s in i)return Ta[e]=s}return e}const bu="http://www.w3.org/1999/xlink";function yg(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(bu,e.slice(6,e.length)):i.setAttributeNS(bu,e,t);else{const s=fp(e);t==null||s&&!oh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function Sg(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=oh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[td,Eg]=(()=>{let i=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let vl=0;const Tg=Promise.resolve(),bg=()=>{vl=0},Ag=()=>vl||(Tg.then(bg),vl=td());function wg(i,e,t,n){i.addEventListener(e,t,n)}function Rg(i,e,t,n){i.removeEventListener(e,t,n)}function Cg(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Pg(e);if(n){const c=s[e]=Lg(n,r);wg(i,a,c,l)}else o&&(Rg(i,a,o,l),s[e]=void 0)}}const Au=/(?:Once|Passive|Capture)$/;function Pg(i){let e;if(Au.test(i)){e={};let n;for(;n=i.match(Au);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):jr(i.slice(2)),e]}function Lg(i,e){const t=n=>{const r=n.timeStamp||td();(Eg||r>=t.attached-1)&&_n(Ig(n,t.value),e,5,[n])};return t.value=i,t.attached=Ag(),t}function Ig(i,e){if(He(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const wu=/^on[a-z]/,Dg=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?vg(i,n,r):e==="style"?xg(i,t,n):qo(e)?ac(e)||Cg(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ng(i,e,n,r))?Sg(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),yg(i,e,n,r))};function Ng(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&wu.test(e)&&Ve(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||wu.test(e)&&Tt(t)?!1:e in i}const Ug={beforeMount(i,{value:e},{transition:t}){i._vod=i.style.display==="none"?"":i.style.display,t&&e?t.beforeEnter(i):is(i,e)},mounted(i,{value:e},{transition:t}){t&&e&&t.enter(i)},updated(i,{value:e,oldValue:t},{transition:n}){!e!=!t&&(n?e?(n.beforeEnter(i),is(i,!0),n.enter(i)):n.leave(i,()=>{is(i,!1)}):is(i,e))},beforeUnmount(i,{value:e}){is(i,e)}};function is(i,e){i.style.display=e?i._vod:"none"}const Og=Wt({patchProp:Dg},_g);let Ru;function Fg(){return Ru||(Ru=Ym(Og))}const Bg=(...i)=>{const e=Fg().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=zg(n);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function zg(i){return Tt(i)?document.querySelector(i):i}const kg="/modelConfig/assets/arcube.06d9f44c.jpg";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="167",Qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hg=0,Cu=1,Vg=2,nd=1,Gg=2,Wn=3,Jn=0,jt=1,An=2,xi=0,Rr=1,Pu=2,Lu=3,Iu=4,Wg=5,Bi=100,Xg=101,jg=102,qg=103,Yg=104,Kg=200,$g=201,Zg=202,Jg=203,xl=204,Ml=205,Qg=206,e_=207,t_=208,n_=209,i_=210,r_=211,s_=212,o_=213,a_=214,l_=0,c_=1,u_=2,Fo=3,f_=4,h_=5,d_=6,p_=7,id=0,m_=1,g_=2,Mi=0,__=1,v_=2,x_=3,M_=4,y_=5,S_=6,E_=7,Du="attached",T_="detached",rd=300,Or=301,Fr=302,yl=303,Sl=304,oa=306,Br=1e3,mi=1001,Bo=1002,Vt=1003,sd=1004,ms=1005,Jt=1006,Eo=1007,Yn=1008,Qn=1009,od=1010,ad=1011,Cs=1012,wc=1013,ji=1014,mn=1015,Ns=1016,Rc=1017,Cc=1018,zr=1020,ld=35902,cd=1021,ud=1022,on=1023,fd=1024,hd=1025,Cr=1026,kr=1027,Pc=1028,Lc=1029,dd=1030,Ic=1031,Dc=1033,To=33776,bo=33777,Ao=33778,wo=33779,El=35840,Tl=35841,bl=35842,Al=35843,wl=36196,Rl=37492,Cl=37496,Pl=37808,Ll=37809,Il=37810,Dl=37811,Nl=37812,Ul=37813,Ol=37814,Fl=37815,Bl=37816,zl=37817,kl=37818,Hl=37819,Vl=37820,Gl=37821,Ro=36492,Wl=36494,Xl=36495,pd=36283,jl=36284,ql=36285,Yl=36286,Ps=2300,Ls=2301,ba=2302,Nu=2400,Uu=2401,Ou=2402,b_=2500,A_=0,md=1,Kl=2,w_=3200,R_=3201,gd=0,C_=1,pi="",Ft="srgb",Ct="srgb-linear",Nc="display-p3",aa="display-p3-linear",zo="linear",lt="srgb",ko="rec709",Ho="p3",tr=7680,Fu=519,P_=512,L_=513,I_=514,_d=515,D_=516,N_=517,U_=518,O_=519,$l=35044,Bu="300 es",Kn=2e3,Vo=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zu=1234567;const Ms=Math.PI/180,Hr=180/Math.PI;function vn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Uc(i,e){return(i%e+e)%e}function F_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function B_(i,e,t){return i!==e?(t-i)/(e-i):0}function ys(i,e,t){return(1-t)*i+t*e}function z_(i,e,t,n){return ys(i,e,1-Math.exp(-t*n))}function k_(i,e=1){return e-Math.abs(Uc(i,e*2)-e)}function H_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function V_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function G_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function W_(i,e){return i+Math.random()*(e-i)}function X_(i){return i*(.5-Math.random())}function j_(i){i!==void 0&&(zu=i);let e=zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q_(i){return i*Ms}function Y_(i){return i*Hr}function K_(i){return(i&i-1)===0&&i!==0}function $_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Z_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function J_(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vd={DEG2RAD:Ms,RAD2DEG:Hr,generateUUID:vn,clamp:wt,euclideanModulo:Uc,mapLinear:F_,inverseLerp:B_,lerp:ys,damp:z_,pingpong:k_,smoothstep:H_,smootherstep:V_,randInt:G_,randFloat:W_,randFloatSpread:X_,seededRandom:j_,degToRad:q_,radToDeg:Y_,isPowerOfTwo:K_,ceilPowerOfTwo:$_,floorPowerOfTwo:Z_,setQuaternionFromProperEuler:J_,normalize:rt,denormalize:dn};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=r[0],m=r[3],p=r[6],A=r[1],M=r[4],T=r[7],U=r[2],P=r[5],w=r[8];return s[0]=o*v+a*A+l*U,s[3]=o*m+a*M+l*P,s[6]=o*p+a*T+l*w,s[1]=c*v+u*A+f*U,s[4]=c*m+u*M+f*P,s[7]=c*p+u*T+f*w,s[2]=h*v+d*A+g*U,s[5]=h*m+d*M+g*P,s[8]=h*p+d*T+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Xe;function xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Q_(){const i=Is("canvas");return i.style.display="block",i}const ku={};function Pr(i){i in ku||(ku[i]=!0,console.warn(i))}function ev(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Hu=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vu=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rs={[Ct]:{transfer:zo,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ft]:{transfer:lt,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[aa]:{transfer:zo,primaries:Ho,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Vu),fromReference:i=>i.applyMatrix3(Hu)},[Nc]:{transfer:lt,primaries:Ho,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vu),fromReference:i=>i.applyMatrix3(Hu).convertLinearToSRGB()}},tv=new Set([Ct,aa]),Ze={enabled:!0,_workingColorSpace:Ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=rs[e].toReference,r=rs[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return rs[i].primaries},getTransfer:function(i){return i===pi?zo:rs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(rs[e].luminanceCoefficients)}};function Lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let nr;class nv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=Is("canvas")),nr.width=e.width,nr.height=e.height;const n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Lr(t[n]/255)*255):t[n]=Lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iv=0;class Md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ra(r[o].image)):s.push(Ra(r[o]))}else s=Ra(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rv=0;class Et extends Ki{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=mi,r=mi,s=Jt,o=Yn,a=on,l=Qn,c=Et.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=vn(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=rd;Et.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(d+1)/2,U=(p+1)/2,P=(u+h)/4,w=(f+v)/4,F=(g+m)/4;return M>T&&M>U?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=P/n,s=w/n):T>U?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=P/r,s=F/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=w/s,r=F/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sv extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Et(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends sv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yd extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ov extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*v,A=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const U=Math.sqrt(M),P=Math.atan2(U,p*A);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const T=a*A;if(l=l*m+h*T,c=c*m+d*T,u=u*m+g*T,f=f*m+v*T,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new N,Gu=new Pn;class In{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),js.subVectors(this.max,ss),ir.subVectors(e.a,ss),rr.subVectors(e.b,ss),sr.subVectors(e.c,ss),ri.subVectors(rr,ir),si.subVectors(sr,rr),wi.subVectors(ir,sr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-wi.z,wi.y,ri.z,0,-ri.x,si.z,0,-si.x,wi.z,0,-wi.x,-ri.y,ri.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!Pa(t,ir,rr,sr,js)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,ir,rr,sr,js))?!1:(qs.crossVectors(ri,si),t=[qs.x,qs.y,qs.z],Pa(t,ir,rr,sr,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new N,new N,new N,new N,new N,new N,new N,new N],ln=new N,Xs=new In,ir=new N,rr=new N,sr=new N,ri=new N,si=new N,wi=new N,ss=new N,js=new N,qs=new N,Ri=new N;function Pa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ri.fromArray(i,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const av=new In,os=new N,La=new N;class Dn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):av.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(os,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(La)),this.expandByPoint(os.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new N,Ia=new N,Ys=new N,oi=new N,Da=new N,Ks=new N,Na=new N;class Us{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ia.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Ia);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),a=oi.dot(this.direction),l=-oi.dot(Ys),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ia).addScaledVector(Ys,h),d}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,s){Da.subVectors(t,e),Ks.subVectors(n,e),Na.crossVectors(Da,Ks);let o=this.direction.dot(Na),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Ks.crossVectors(oi,Ks));if(l<0)return null;const c=a*this.direction.dot(Da.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(Na);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,g,v,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,v,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lv,e,cv)}lookAt(e,t,n){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ai.crossVectors(n,$t),ai.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ai.crossVectors(n,$t)),ai.normalize(),$s.crossVectors($t,ai),r[0]=ai.x,r[4]=$s.x,r[8]=$t.x,r[1]=ai.y,r[5]=$s.y,r[9]=$t.y,r[2]=ai.z,r[6]=$s.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],A=n[3],M=n[7],T=n[11],U=n[15],P=r[0],w=r[4],F=r[8],b=r[12],S=r[1],D=r[5],Q=r[9],Y=r[13],te=r[2],ne=r[6],W=r[10],$=r[14],H=r[3],he=r[7],_e=r[11],ye=r[15];return s[0]=o*P+a*S+l*te+c*H,s[4]=o*w+a*D+l*ne+c*he,s[8]=o*F+a*Q+l*W+c*_e,s[12]=o*b+a*Y+l*$+c*ye,s[1]=u*P+f*S+h*te+d*H,s[5]=u*w+f*D+h*ne+d*he,s[9]=u*F+f*Q+h*W+d*_e,s[13]=u*b+f*Y+h*$+d*ye,s[2]=g*P+v*S+m*te+p*H,s[6]=g*w+v*D+m*ne+p*he,s[10]=g*F+v*Q+m*W+p*_e,s[14]=g*b+v*Y+m*$+p*ye,s[3]=A*P+M*S+T*te+U*H,s[7]=A*w+M*D+T*ne+U*he,s[11]=A*F+M*Q+T*W+U*_e,s[15]=A*b+M*Y+T*$+U*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+v*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,M=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,T=u*v*c-g*f*c+g*a*d-o*v*d-u*a*p+o*f*p,U=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,P=t*A+n*M+r*T+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=A*w,e[1]=(v*h*s-f*m*s-v*r*d+n*m*d+f*r*p-n*h*p)*w,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*p+n*l*p)*w,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*w,e[4]=M*w,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*w,e[8]=T*w,e[9]=(g*f*s-u*v*s-g*n*d+t*v*d+u*n*p-t*f*p)*w,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*w,e[12]=U*w,e[13]=(u*v*r-g*f*r+g*n*h-t*v*h-u*n*m+t*f*m)*w,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,v=o*u,m=o*f,p=a*f,A=l*c,M=l*u,T=l*f,U=n.x,P=n.y,w=n.z;return r[0]=(1-(v+p))*U,r[1]=(d+T)*U,r[2]=(g-M)*U,r[3]=0,r[4]=(d-T)*P,r[5]=(1-(h+p))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(g+M)*w,r[9]=(m-A)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=or.set(r[0],r[1],r[2]).length();const o=or.set(r[4],r[5],r[6]).length(),a=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/s,u=1/o,f=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Kn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,g;if(a===Kn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Vo)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Kn){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let g,v;if(a===Kn)g=(o+s)*f,v=-2*f;else if(a===Vo)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const or=new N,cn=new je,lv=new N(0,0,0),cv=new N(1,1,1),ai=new N,$s=new N,$t=new N,Wu=new je,Xu=new Pn;class Ln{constructor(e=0,t=0,n=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uv=0;const ju=new N,ar=new Pn,kn=new je,Zs=new N,as=new N,fv=new N,hv=new Pn,qu=new N(1,0,0),Yu=new N(0,1,0),Ku=new N(0,0,1),$u={type:"added"},dv={type:"removed"},lr={type:"childadded",child:null},Ua={type:"childremoved",child:null};class ut extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new N,t=new Ln,n=new Pn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new Xe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(Ku,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(Ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(as,Zs,this.up):kn.lookAt(Zs,as,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(kn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dv),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ut.DEFAULT_UP=new N(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new N,Hn=new N,Oa=new N,Vn=new N,cr=new N,ur=new N,Zu=new N,Fa=new N,Ba=new N,za=new N;class wn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),Hn.subVectors(n,t),Oa.subVectors(e,t);const o=un.dot(un),a=un.dot(Hn),l=un.dot(Oa),c=Hn.dot(Hn),u=Hn.dot(Oa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),Hn.subVectors(e,t),un.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),un.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;cr.subVectors(r,n),ur.subVectors(s,n),Fa.subVectors(e,n);const l=cr.dot(Fa),c=ur.dot(Fa);if(l<=0&&c<=0)return t.copy(n);Ba.subVectors(e,r);const u=cr.dot(Ba),f=ur.dot(Ba);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(cr,o);za.subVectors(e,s);const d=cr.dot(za),g=ur.dot(za);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ur,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Zu.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Zu,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(cr,o).addScaledVector(ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=Uc(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ka(o,s,e+1/3),this.g=ka(o,s,e),this.b=ka(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ze.fromWorkingColorSpace(Lt.copy(this),e),Math.round(wt(Lt.r*255,0,255))*65536+Math.round(wt(Lt.g*255,0,255))*256+Math.round(wt(Lt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ft){Ze.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,r=Lt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Js);const n=ys(li.h,Js.h,t),r=ys(li.s,Js.s,t),s=ys(li.l,Js.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ke;ke.NAMES=Ed;let pv=0;class Rn extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=Rr,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=Ml,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Hi extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new N,Qs=new Ie;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}}class Td extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bd extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $n extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mv=0;const nn=new je,Ha=new ut,fr=new N,Zt=new In,ls=new In,yt=new N;class Nn extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?bd:Td)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Zt.min,ls.min),Zt.expandByPoint(yt),yt.addVectors(Zt.max,ls.max),Zt.expandByPoint(yt)):(Zt.expandByPoint(ls.min),Zt.expandByPoint(ls.max))}Zt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(fr.fromBufferAttribute(e,c),yt.add(fr)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new N,l[F]=new N;const c=new N,u=new N,f=new N,h=new Ie,d=new Ie,g=new Ie,v=new N,m=new N;function p(F,b,S){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,S),h.fromBufferAttribute(s,F),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);!isFinite(D)||(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[F].add(v),a[b].add(v),a[S].add(v),l[F].add(m),l[b].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let F=0,b=A.length;F<b;++F){const S=A[F],D=S.start,Q=S.count;for(let Y=D,te=D+Q;Y<te;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const M=new N,T=new N,U=new N,P=new N;function w(F){U.fromBufferAttribute(r,F),P.copy(U);const b=a[F];M.copy(b),M.sub(U.multiplyScalar(U.dot(b))).normalize(),T.crossVectors(P,b);const D=T.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,D)}for(let F=0,b=A.length;F<b;++F){const S=A[F],D=S.start,Q=S.count;for(let Y=D,te=D+Q;Y<te;Y+=3)w(e.getX(Y+0)),w(e.getX(Y+1)),w(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Gt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new je,Ci=new Us,eo=new Dn,Qu=new N,hr=new N,dr=new N,pr=new N,Va=new N,to=new N,no=new Ie,io=new Ie,ro=new Ie,ef=new N,tf=new N,nf=new N,so=new N,oo=new N;class Qt extends ut{constructor(e=new Nn,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Va.fromBufferAttribute(f,e),o?to.addScaledVector(Va,u):to.addScaledVector(Va.sub(t),u))}t.add(to)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(eo.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(eo,Qu)===null||Ci.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let T=A,U=M;T<U;T+=3){const P=a.getX(T),w=a.getX(T+1),F=a.getX(T+2);r=ao(this,p,e,n,c,u,f,P,w,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=a.getX(m),M=a.getX(m+1),T=a.getX(m+2);r=ao(this,o,e,n,c,u,f,A,M,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=A,U=M;T<U;T+=3){const P=T,w=T+1,F=T+2;r=ao(this,p,e,n,c,u,f,P,w,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=m,M=m+1,T=m+2;r=ao(this,o,e,n,c,u,f,A,M,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function gv(i,e,t,n,r,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Jn,a),l===null)return null;oo.copy(a),oo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:i}}function ao(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,hr),i.getVertexPosition(l,dr),i.getVertexPosition(c,pr);const u=gv(i,e,t,n,hr,dr,pr,so);if(u){r&&(no.fromBufferAttribute(r,a),io.fromBufferAttribute(r,l),ro.fromBufferAttribute(r,c),u.uv=wn.getInterpolation(so,hr,dr,pr,no,io,ro,new Ie)),s&&(no.fromBufferAttribute(s,a),io.fromBufferAttribute(s,l),ro.fromBufferAttribute(s,c),u.uv1=wn.getInterpolation(so,hr,dr,pr,no,io,ro,new Ie)),o&&(ef.fromBufferAttribute(o,a),tf.fromBufferAttribute(o,l),nf.fromBufferAttribute(o,c),u.normal=wn.getInterpolation(so,hr,dr,pr,ef,tf,nf,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};wn.getNormal(hr,dr,pr,f.normal),u.face=f}return u}class Os extends Nn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(f,2));function g(v,m,p,A,M,T,U,P,w,F,b){const S=T/w,D=U/F,Q=T/2,Y=U/2,te=P/2,ne=w+1,W=F+1;let $=0,H=0;const he=new N;for(let _e=0;_e<W;_e++){const ye=_e*D-Y;for(let Be=0;Be<ne;Be++){const Ge=Be*S-Q;he[v]=Ge*A,he[m]=ye*M,he[p]=te,c.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[p]=P>0?1:-1,u.push(he.x,he.y,he.z),f.push(Be/w),f.push(1-_e/F),$+=1}}for(let _e=0;_e<F;_e++)for(let ye=0;ye<w;ye++){const Be=h+ye+ne*_e,Ge=h+ye+ne*(_e+1),re=h+(ye+1)+ne*(_e+1),fe=h+(ye+1)+ne*_e;l.push(Be,Ge,fe),l.push(Ge,re,fe),H+=6}a.addGroup(d,H,b),d+=H,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Vr(i[t]);for(const r in n)e[r]=n[r]}return e}function _v(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const vv={clone:Vr,merge:Ot};var xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wd extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new N,rf=new Ie,sf=new Ie;class kt extends wd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,rf,sf),t.subVectors(sf,rf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class yv extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(mr,gr,e,t);r.layers=this.layers,this.add(r);const s=new kt(mr,gr,e,t);s.layers=this.layers,this.add(s);const o=new kt(mr,gr,e,t);o.layers=this.layers,this.add(o);const a=new kt(mr,gr,e,t);a.layers=this.layers,this.add(a);const l=new kt(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new kt(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rd extends Et{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sv extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Rd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Os(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:xi});s.uniforms.tEquirect.value=t;const o=new Qt(r,s),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Jt),new yv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ga=new N,Ev=new N,Tv=new Xe;class di{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ga.subVectors(n,t).cross(Ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tv.getNormalMatrix(e),r=this.coplanarPoint(Ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Dn,lo=new N;class Oc{constructor(e=new di,t=new di,n=new di,r=new di,s=new di,o=new di){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],A=r[13],M=r[14],T=r[15];if(n[0].setComponents(l-s,h-c,m-d,T-p).normalize(),n[1].setComponents(l+s,h+c,m+d,T+p).normalize(),n[2].setComponents(l+o,h+u,m+g,T+A).normalize(),n[3].setComponents(l-o,h-u,m-g,T-A).normalize(),n[4].setComponents(l-a,h-f,m-v,T-M).normalize(),t===Kn)n[5].setComponents(l+a,h+f,m+v,T+M).normalize();else if(t===Vo)n[5].setComponents(a,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function bv(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),f.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class la extends Nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let M=0;M<c;M++){const T=M*f-s;g.push(T,-A,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const M=A+c*p,T=A+c*(p+1),U=A+1+c*(p+1),P=A+1+c*p;d.push(M,T,P),d.push(T,U,P)}this.setIndex(d),this.setAttribute("position",new $n(g,3)),this.setAttribute("normal",new $n(v,3)),this.setAttribute("uv",new $n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}var Av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kv=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Zv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,v0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,b0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mx=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Ix=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Nx=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Wx=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Yx=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,iM=`uniform float rotation;
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
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Av,alphahash_pars_fragment:wv,alphamap_fragment:Rv,alphamap_pars_fragment:Cv,alphatest_fragment:Pv,alphatest_pars_fragment:Lv,aomap_fragment:Iv,aomap_pars_fragment:Dv,batching_pars_vertex:Nv,batching_vertex:Uv,begin_vertex:Ov,beginnormal_vertex:Fv,bsdfs:Bv,iridescence_fragment:zv,bumpmap_pars_fragment:kv,clipping_planes_fragment:Hv,clipping_planes_pars_fragment:Vv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:Wv,color_fragment:Xv,color_pars_fragment:jv,color_pars_vertex:qv,color_vertex:Yv,common:Kv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:Zv,displacementmap_pars_vertex:Jv,displacementmap_vertex:Qv,emissivemap_fragment:e0,emissivemap_pars_fragment:t0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:r0,envmap_common_pars_fragment:s0,envmap_pars_fragment:o0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:u0,fog_fragment:f0,fog_pars_fragment:h0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:x0,lights_toon_pars_fragment:M0,lights_phong_fragment:y0,lights_phong_pars_fragment:S0,lights_physical_fragment:E0,lights_physical_pars_fragment:T0,lights_fragment_begin:b0,lights_fragment_maps:A0,lights_fragment_end:w0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:N0,map_particle_pars_fragment:U0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:F0,morphinstance_vertex:B0,morphcolor_vertex:z0,morphnormal_vertex:k0,morphtarget_pars_vertex:H0,morphtarget_vertex:V0,normal_fragment_begin:G0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:j0,normal_vertex:q0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:J0,opaque_fragment:Q0,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:rx,roughnessmap_fragment:sx,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:ux,skinbase_vertex:fx,skinning_pars_vertex:hx,skinning_vertex:dx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:xx,transmission_pars_fragment:Mx,uv_pars_fragment:yx,uv_pars_vertex:Sx,uv_vertex:Ex,worldpos_vertex:Tx,background_vert:bx,background_frag:Ax,backgroundCube_vert:wx,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Px,depth_vert:Lx,depth_frag:Ix,distanceRGBA_vert:Dx,distanceRGBA_frag:Nx,equirect_vert:Ux,equirect_frag:Ox,linedashed_vert:Fx,linedashed_frag:Bx,meshbasic_vert:zx,meshbasic_frag:kx,meshlambert_vert:Hx,meshlambert_frag:Vx,meshmatcap_vert:Gx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:jx,meshphong_vert:qx,meshphong_frag:Yx,meshphysical_vert:Kx,meshphysical_frag:$x,meshtoon_vert:Zx,meshtoon_frag:Jx,points_vert:Qx,points_frag:eM,shadow_vert:tM,shadow_frag:nM,sprite_vert:iM,sprite_frag:rM},ge={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},En={basic:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ot([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ot([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ot([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ot([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ot([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ot([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ot([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ot([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ot([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ot([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ot([ge.lights,ge.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};En.physical={uniforms:Ot([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const co={r:0,b:0,g:0},Li=new Ln,sM=new je;function oM(i,e,t,n,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}function v(A){let M=!1;const T=g(A);T===null?p(a,l):T&&T.isColor&&(p(T,1),M=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===oa)?(u===void 0&&(u=new Qt(new Os(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Vr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(M.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler(Li)),u.material.toneMapped=Ze.getTransfer(T.colorSpace)!==lt,(f!==T||h!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,d=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Qt(new la(2,2),new Ei({name:"BackgroundMaterial",uniforms:Vr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(T.colorSpace)!==lt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,d=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,M){A.getRGB(co,Ad(i)),n.buffers.color.setClear(co.r,co.g,co.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(A,M=1){a.set(A),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:v,addToRenderList:m}}function aM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(S,D,Q,Y,te){let ne=!1;const W=f(Y,Q,D);s!==W&&(s=W,c(s.object)),ne=d(S,Y,Q,te),ne&&g(S,Y,Q,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,T(S,D,Q,Y),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,D,Q){const Y=Q.wireframe===!0;let te=n[S.id];te===void 0&&(te={},n[S.id]=te);let ne=te[D.id];ne===void 0&&(ne={},te[D.id]=ne);let W=ne[Y];return W===void 0&&(W=h(l()),ne[Y]=W),W}function h(S){const D=[],Q=[],Y=[];for(let te=0;te<t;te++)D[te]=0,Q[te]=0,Y[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:Y,object:S,attributes:{},index:null}}function d(S,D,Q,Y){const te=s.attributes,ne=D.attributes;let W=0;const $=Q.getAttributes();for(const H in $)if($[H].location>=0){const _e=te[H];let ye=ne[H];if(ye===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),_e===void 0||_e.attribute!==ye||ye&&_e.data!==ye.data)return!0;W++}return s.attributesNum!==W||s.index!==Y}function g(S,D,Q,Y){const te={},ne=D.attributes;let W=0;const $=Q.getAttributes();for(const H in $)if($[H].location>=0){let _e=ne[H];_e===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor));const ye={};ye.attribute=_e,_e&&_e.data&&(ye.data=_e.data),te[H]=ye,W++}s.attributes=te,s.attributesNum=W,s.index=Y}function v(){const S=s.newAttributes;for(let D=0,Q=S.length;D<Q;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const Q=s.newAttributes,Y=s.enabledAttributes,te=s.attributeDivisors;Q[S]=1,Y[S]===0&&(i.enableVertexAttribArray(S),Y[S]=1),te[S]!==D&&(i.vertexAttribDivisor(S,D),te[S]=D)}function A(){const S=s.newAttributes,D=s.enabledAttributes;for(let Q=0,Y=D.length;Q<Y;Q++)D[Q]!==S[Q]&&(i.disableVertexAttribArray(Q),D[Q]=0)}function M(S,D,Q,Y,te,ne,W){W===!0?i.vertexAttribIPointer(S,D,Q,te,ne):i.vertexAttribPointer(S,D,Q,Y,te,ne)}function T(S,D,Q,Y){v();const te=Y.attributes,ne=Q.getAttributes(),W=D.defaultAttributeValues;for(const $ in ne){const H=ne[$];if(H.location>=0){let he=te[$];if(he===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const _e=he.normalized,ye=he.itemSize,Be=e.get(he);if(Be===void 0)continue;const Ge=Be.buffer,re=Be.type,fe=Be.bytesPerElement,Se=re===i.INT||re===i.UNSIGNED_INT||he.gpuType===wc;if(he.isInterleavedBufferAttribute){const me=he.data,Le=me.stride,Fe=he.offset;if(me.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)p(H.location+Ne,me.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)m(H.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Ne=0;Ne<H.locationSize;Ne++)M(H.location+Ne,ye/H.locationSize,re,_e,Le*fe,(Fe+ye/H.locationSize*Ne)*fe,Se)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)p(H.location+me,he.meshPerAttribute);S.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<H.locationSize;me++)m(H.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let me=0;me<H.locationSize;me++)M(H.location+me,ye/H.locationSize,re,_e,ye*fe,ye/H.locationSize*me*fe,Se)}}else if(W!==void 0){const _e=W[$];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(H.location,_e);break;case 3:i.vertexAttrib3fv(H.location,_e);break;case 4:i.vertexAttrib4fv(H.location,_e);break;default:i.vertexAttrib1fv(H.location,_e)}}}}A()}function U(){F();for(const S in n){const D=n[S];for(const Q in D){const Y=D[Q];for(const te in Y)u(Y[te].object),delete Y[te];delete D[Q]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const Q in D){const Y=D[Q];for(const te in Y)u(Y[te].object),delete Y[te];delete D[Q]}delete n[S.id]}function w(S){for(const D in n){const Q=n[D];if(Q[S.id]===void 0)continue;const Y=Q[S.id];for(const te in Y)u(Y[te].object),delete Y[te];delete Q[S.id]}}function F(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function lM(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,n,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==on&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const w=P===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==mn&&!w)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=d>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:T,maxSamples:U}}function uM(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new di,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:n,M=A*4;let T=p.clippingState||null;l.value=T,T=u(g,h,M,d);for(let U=0;U!==M;++U)T[U]=t[U];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,T=d;M!==v;++M,T+=4)o.copy(f[M]).applyMatrix4(A,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function fM(i){let e=new WeakMap;function t(o,a){return a===yl?o.mapping=Or:a===Sl&&(o.mapping=Fr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Sl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sv(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fc extends wd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,of=[.125,.215,.35,.446,.526,.582],zi=20,Wa=new Fc,af=new ke;let Xa=null,ja=0,qa=0,Ya=!1;const Ui=(1+Math.sqrt(5))/2,_r=1/Ui,lf=[new N(-Ui,_r,0),new N(Ui,_r,0),new N(-_r,0,Ui),new N(_r,0,Ui),new N(0,Ui,-_r),new N(0,Ui,_r),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class cf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,ja,qa),this._renderer.xr.enabled=Ya,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Ns,format:on,colorSpace:Ct,depthBuffer:!1},r=uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hM(s)),this._blurMaterial=dM(s,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,r){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(af),u.toneMapping=Mi,u.autoClear=!1;const d=new Hi({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new Qt(new Os,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(af),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;uo(r,A*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Or||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lf[(r-s-1)%lf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Qt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let A=0;for(let w=0;w<zi;++w){const F=w/v,b=Math.exp(-F*F/2);p.push(b),w===0?A+=b:w<m&&(A+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const T=this._sizeLods[r],U=3*T*(r>M-yr?r-M+yr:0),P=4*(this._cubeSize-T);uo(t,U,P,3*T,2*T),l.setRenderTarget(t),l.render(f,Wa)}}function hM(i){const e=[],t=[],n=[];let r=i;const s=i-yr+1+of.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-yr?l=of[o-i+yr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*d),M=new Float32Array(m*g*d),T=new Float32Array(p*g*d);for(let P=0;P<d;P++){const w=P%3*2/3-1,F=P>2?0:-1,b=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];A.set(b,v*g*P),M.set(h,m*g*P);const S=[P,P,P,P,P,P];T.set(S,p*g*P)}const U=new Nn;U.setAttribute("position",new Gt(A,v)),U.setAttribute("uv",new Gt(M,m)),U.setAttribute("faceIndex",new Gt(T,p)),e.push(U),r>yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uf(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dM(i,e,t){const n=new Float32Array(zi),r=new N(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ff(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function hf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function pM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yl||l===Sl,u=l===Or||l===Fr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new cf(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new cf(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Pr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gM(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let M=0,T=A.length;M<T;M+=3){const U=A[M+0],P=A[M+1],w=A[M+2];h.push(U,P,P,w,w,U)}}else if(g!==void 0){const A=g.array;v=g.version;for(let M=0,T=A.length/3-1;M<T;M+=3){const U=M+0,P=M+1,w=M+2;h.push(U,P,P,w,w,U)}}else return;const m=new(xd(h)?bd:Td)(h,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function _M(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A];for(let A=0;A<v.length;A++)t.update(p,n,v[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function vM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xM(i,e,t){const n=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let S=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),v===!0&&(T=2),m===!0&&(T=3);let U=a.attributes.position.count*T,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*P*4*f),F=new yd(w,U,P,f);F.type=mn,F.needsUpdate=!0;const b=T*4;for(let D=0;D<f;D++){const Q=p[D],Y=A[D],te=M[D],ne=U*P*4*D;for(let W=0;W<Q.count;W++){const $=W*b;g===!0&&(r.fromBufferAttribute(Q,W),w[ne+$+0]=r.x,w[ne+$+1]=r.y,w[ne+$+2]=r.z,w[ne+$+3]=0),v===!0&&(r.fromBufferAttribute(Y,W),w[ne+$+4]=r.x,w[ne+$+5]=r.y,w[ne+$+6]=r.z,w[ne+$+7]=0),m===!0&&(r.fromBufferAttribute(te,W),w[ne+$+8]=r.x,w[ne+$+9]=r.y,w[ne+$+10]=r.z,w[ne+$+11]=te.itemSize===4?r.w:1)}}h={count:f,texture:F,size:new Ie(U,P)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function MM(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Pd extends Et{constructor(e,t,n,r,s,o,a,l,c,u=Cr){if(u!==Cr&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cr&&(n=ji),n===void 0&&u===kr&&(n=zr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ld=new Et,df=new Pd(1,1),Id=new yd,Dd=new ov,Nd=new Rd,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),vf=new Float32Array(4);function $r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=pf[r];if(s===void 0&&(s=new Float32Array(r),pf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ca(i,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function SM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function EM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function TM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function bM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;vf.set(n),i.uniformMatrix2fv(this.addr,!1,vf),Mt(t,n)}}function AM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),Mt(t,n)}}function wM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),Mt(t,n)}}function RM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function CM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function PM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function LM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function IM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function NM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function UM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function OM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=_d,s=df):s=Ld,t.setTexture2D(e||s,r)}function FM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dd,r)}function BM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nd,r)}function zM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Id,r)}function kM(i){switch(i){case 5126:return yM;case 35664:return SM;case 35665:return EM;case 35666:return TM;case 35674:return bM;case 35675:return AM;case 35676:return wM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return IM;case 36294:return DM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}function HM(i,e){i.uniform1fv(this.addr,e)}function VM(i,e){const t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function GM(i,e){const t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function WM(i,e){const t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function XM(i,e){const t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jM(i,e){const t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qM(i,e){const t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function YM(i,e){i.uniform1iv(this.addr,e)}function KM(i,e){i.uniform2iv(this.addr,e)}function $M(i,e){i.uniform3iv(this.addr,e)}function ZM(i,e){i.uniform4iv(this.addr,e)}function JM(i,e){i.uniform1uiv(this.addr,e)}function QM(i,e){i.uniform2uiv(this.addr,e)}function ey(i,e){i.uniform3uiv(this.addr,e)}function ty(i,e){i.uniform4uiv(this.addr,e)}function ny(i,e,t){const n=this.cache,r=e.length,s=ca(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ld,s[o])}function iy(i,e,t){const n=this.cache,r=e.length,s=ca(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dd,s[o])}function ry(i,e,t){const n=this.cache,r=e.length,s=ca(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nd,s[o])}function sy(i,e,t){const n=this.cache,r=e.length,s=ca(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Id,s[o])}function oy(i){switch(i){case 5126:return HM;case 35664:return VM;case 35665:return GM;case 35666:return WM;case 35674:return XM;case 35675:return jM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return KM;case 35668:case 35672:return $M;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return sy}}class ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kM(t.type)}}class ly{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}}class cy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function xf(i,e){i.seq.push(e),i.map[e.id]=e}function uy(i,e,t){const n=i.name,r=n.length;for(Ka.lastIndex=0;;){const s=Ka.exec(n),o=Ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xf(t,c===void 0?new ay(a,i,e):new ly(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new cy(a),xf(t,f)),t=f}}}class Co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);uy(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Mf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const fy=37297;let hy=0;function dy(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function py(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Ho&&t===ko?n="LinearDisplayP3ToLinearSRGB":e===ko&&t===Ho&&(n="LinearSRGBToLinearDisplayP3"),i){case Ct:case aa:return[n,"LinearTransferOETF"];case Ft:case Nc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dy(i.getShaderSource(e),o)}else return r}function my(i,e){const t=py(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gy(i,e){let t;switch(e){case __:t="Linear";break;case v_:t="Reinhard";break;case x_:t="OptimizedCineon";break;case M_:t="ACESFilmic";break;case S_:t="AgX";break;case E_:t="Neutral";break;case y_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new N;function _y(){Ze.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function xy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function My(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function gs(i){return i!==""}function Sf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(yy,Ey)}const Sy=new Map;function Ey(i,e){let t=We[e];if(t===void 0){const n=Sy.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(i){return i.replace(Ty,by)}function by(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ay(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function wy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Or:case Fr:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ry(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Cy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case id:e="ENVMAP_BLENDING_MULTIPLY";break;case m_:e="ENVMAP_BLENDING_MIX";break;case g_:e="ENVMAP_BLENDING_ADD";break}return e}function Py(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ly(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ay(t),c=wy(t),u=Ry(t),f=Cy(t),h=Py(t),d=vy(t),g=xy(s),v=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?We.tonemapping_pars_fragment:"",t.toneMapping!==Mi?gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,my("linearToOutputTexel",t.outputColorSpace),_y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),o=Zl(o),o=Sf(o,t),o=Ef(o,t),a=Zl(a),a=Sf(a,t),a=Ef(a,t),o=Tf(o),a=Tf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=A+m+o,T=A+p+a,U=Mf(r,r.VERTEX_SHADER,M),P=Mf(r,r.FRAGMENT_SHADER,T);r.attachShader(v,U),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(D){if(i.debug.checkShaderErrors){const Q=r.getProgramInfoLog(v).trim(),Y=r.getShaderInfoLog(U).trim(),te=r.getShaderInfoLog(P).trim();let ne=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,U,P);else{const $=yf(r,U,"vertex"),H=yf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+$+`
`+H)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Y===""||te==="")&&(W=!1);W&&(D.diagnostics={runnable:ne,programLog:Q,vertexShader:{log:Y,prefix:m},fragmentShader:{log:te,prefix:p}})}r.deleteShader(U),r.deleteShader(P),F=new Co(r,v),b=My(r,v)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,fy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=P,this}let Iy=0;class Dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ny(e),t.set(e,n)),n}}class Ny{constructor(e){this.id=Iy++,this.code=e,this.usedTimes=0}}function Uy(i,e,t,n,r,s,o){const a=new Sd,l=new Dy,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,Q,Y){const te=Q.fog,ne=Y.geometry,W=b.isMeshStandardMaterial?Q.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),H=!!$&&$.mapping===oa?$.image.height:null,he=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const _e=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ye=_e!==void 0?_e.length:0;let Be=0;ne.morphAttributes.position!==void 0&&(Be=1),ne.morphAttributes.normal!==void 0&&(Be=2),ne.morphAttributes.color!==void 0&&(Be=3);let Ge,re,fe,Se;if(he){const $e=En[he];Ge=$e.vertexShader,re=$e.fragmentShader}else Ge=b.vertexShader,re=b.fragmentShader,l.update(b),fe=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);const me=i.getRenderTarget(),Le=Y.isInstancedMesh===!0,Fe=Y.isBatchedMesh===!0,Ne=!!b.map,nt=!!b.matcap,L=!!$,R=!!b.aoMap,I=!!b.lightMap,V=!!b.bumpMap,z=!!b.normalMap,ie=!!b.displacementMap,ee=!!b.emissiveMap,se=!!b.metalnessMap,y=!!b.roughnessMap,_=b.anisotropy>0,C=b.clearcoat>0,j=b.dispersion>0,G=b.iridescence>0,k=b.sheen>0,le=b.transmission>0,ae=_&&!!b.anisotropyMap,ce=C&&!!b.clearcoatMap,ve=C&&!!b.clearcoatNormalMap,oe=C&&!!b.clearcoatRoughnessMap,pe=G&&!!b.iridescenceMap,ze=G&&!!b.iridescenceThicknessMap,Re=k&&!!b.sheenColorMap,xe=k&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,be=!!b.specularColorMap,Ye=!!b.specularIntensityMap,x=le&&!!b.transmissionMap,X=le&&!!b.thicknessMap,q=!!b.gradientMap,J=!!b.alphaMap,ue=b.alphaTest>0,Ae=!!b.alphaHash,Ue=!!b.extensions;let dt=Mi;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(dt=i.toneMapping);const _t={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:Ge,fragmentShader:re,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&Y._colorsTexture!==null,instancing:Le,instancingColor:Le&&Y.instanceColor!==null,instancingMorph:Le&&Y.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ct,alphaToCoverage:!!b.alphaToCoverage,map:Ne,matcap:nt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:I,bumpMap:V,normalMap:z,displacementMap:h&&ie,emissiveMap:ee,normalMapObjectSpace:z&&b.normalMapType===C_,normalMapTangentSpace:z&&b.normalMapType===gd,metalnessMap:se,roughnessMap:y,anisotropy:_,anisotropyMap:ae,clearcoat:C,clearcoatMap:ce,clearcoatNormalMap:ve,clearcoatRoughnessMap:oe,dispersion:j,iridescence:G,iridescenceMap:pe,iridescenceThicknessMap:ze,sheen:k,sheenColorMap:Re,sheenRoughnessMap:xe,specularMap:Pe,specularColorMap:be,specularIntensityMap:Ye,transmission:le,transmissionMap:x,thicknessMap:X,gradientMap:q,opaque:b.transparent===!1&&b.blending===Rr&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ue,alphaHash:Ae,combine:b.combine,mapUv:Ne&&v(b.map.channel),aoMapUv:R&&v(b.aoMap.channel),lightMapUv:I&&v(b.lightMap.channel),bumpMapUv:V&&v(b.bumpMap.channel),normalMapUv:z&&v(b.normalMap.channel),displacementMapUv:ie&&v(b.displacementMap.channel),emissiveMapUv:ee&&v(b.emissiveMap.channel),metalnessMapUv:se&&v(b.metalnessMap.channel),roughnessMapUv:y&&v(b.roughnessMap.channel),anisotropyMapUv:ae&&v(b.anisotropyMap.channel),clearcoatMapUv:ce&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(b.sheenRoughnessMap.channel),specularMapUv:Pe&&v(b.specularMap.channel),specularColorMapUv:be&&v(b.specularColorMap.channel),specularIntensityMapUv:Ye&&v(b.specularIntensityMap.channel),transmissionMapUv:x&&v(b.transmissionMap.channel),thicknessMapUv:X&&v(b.thicknessMap.channel),alphaMapUv:J&&v(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(z||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ne.attributes.uv&&(Ne||J),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ne&&b.map.isVideoTexture===!0&&Ze.getTransfer(b.map.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===An,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(A(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function A(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),b.push(a.mask)}function T(b){const S=g[b.type];let D;if(S){const Q=En[S];D=vv.clone(Q.uniforms)}else D=b.uniforms;return D}function U(b,S){let D;for(let Q=0,Y=u.length;Q<Y;Q++){const te=u[Q];if(te.cacheKey===S){D=te,++D.usedTimes;break}}return D===void 0&&(D=new Ly(i,S,b,s),u.push(D)),D}function P(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:U,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:F}}function Oy(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Fy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,v,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Fy),n.length>1&&n.sort(h||Af),r.length>1&&r.sort(h||Af)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function By(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new wf,i.set(n,[o])):r>=s.length?(o=new wf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ke};break;case"SpotLight":t={position:new N,direction:new N,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function ky(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hy=0;function Vy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gy(i){const e=new zy,t=ky(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new je,o=new je;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,A=0,M=0,T=0,U=0,P=0,w=0;c.sort(Vy);for(let b=0,S=c.length;b<S;b++){const D=c[b],Q=D.color,Y=D.intensity,te=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Q.r*Y,f+=Q.g*Y,h+=Q.b*Y;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],Y);w++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=ne,n.directionalShadowMatrix[d]=D.shadow.matrix,A++}n.directional[d]=W,d++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(Q).multiplyScalar(Y),W.distance=te,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[v]=W;const $=D.shadow;if(D.map&&(n.spotLightMap[U]=D.map,U++,$.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[v]=$.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=ne,T++}v++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(Q).multiplyScalar(Y),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const $=D.shadow,H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(Y),W.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const F=n.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==A||F.numPointShadows!==M||F.numSpotShadows!==T||F.numSpotMaps!==U||F.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,F.directionalLength=d,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=A,F.numPointShadows=M,F.numSpotShadows=T,F.numSpotMaps=U,F.numLightProbes=w,n.version=Hy++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const M=c[p];if(M.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(M.isSpotLight){const T=n.spot[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const T=n.point[h];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const T=n.hemi[v];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Rf(i){const e=new Gy(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Wy(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rf(i),e.set(r,[a])):s>=o.length?(a=new Rf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Xy extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jy extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`;function Ky(i,e,t){let n=new Oc;const r=new Ie,s=new Ie,o=new ot,a=new Xy({depthPacking:R_}),l=new jy,c={},u=t.maxTextureSize,f={[Jn]:jt,[jt]:Jn,[An]:An},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nn;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd;let p=this.type;this.render=function(P,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(xi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=p!==Wn&&this.type===Wn,te=p===Wn&&this.type!==Wn;for(let ne=0,W=P.length;ne<W;ne++){const $=P[ne],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const he=H.getFrameExtents();if(r.multiply(he),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,H.mapSize.y=s.y)),H.map===null||Y===!0||te===!0){const ye=this.type!==Wn?{minFilter:Vt,magFilter:Vt}:{};H.map!==null&&H.map.dispose(),H.map=new qi(r.x,r.y,ye),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const _e=H.getViewportCount();for(let ye=0;ye<_e;ye++){const Be=H.getViewport(ye);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),Q.viewport(o),H.updateMatrices($,ye),n=H.getFrustum(),T(w,F,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Wn&&A(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function A(P,w){const F=e.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qi(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(w,null,F,h,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(w,null,F,d,v,null)}function M(P,w,F,b){let S=null;const D=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=F.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Q=S.uuid,Y=w.uuid;let te=c[Q];te===void 0&&(te={},c[Q]=te);let ne=te[Y];ne===void 0&&(ne=S.clone(),te[Y]=ne,w.addEventListener("dispose",U)),S=ne}if(S.visible=w.visible,S.wireframe=w.wireframe,b===Wn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Q=i.properties.get(S);Q.light=F}return S}function T(P,w,F,b,S){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Wn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const Y=e.update(P),te=P.material;if(Array.isArray(te)){const ne=Y.groups;for(let W=0,$=ne.length;W<$;W++){const H=ne[W],he=te[H.materialIndex];if(he&&he.visible){const _e=M(P,he,b,S);P.onBeforeShadow(i,P,w,F,Y,_e,H),i.renderBufferDirect(F,null,Y,_e,P,H),P.onAfterShadow(i,P,w,F,Y,_e,H)}}}else if(te.visible){const ne=M(P,te,b,S);P.onBeforeShadow(i,P,w,F,Y,ne,null),i.renderBufferDirect(F,null,Y,ne,P,null),P.onAfterShadow(i,P,w,F,Y,ne,null)}}const Q=P.children;for(let Y=0,te=Q.length;Y<te;Y++)T(Q[Y],w,F,b,S)}function U(P){P.target.removeEventListener("dispose",U);for(const F in c){const b=c[F],S=P.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function $y(i){function e(){let x=!1;const X=new ot;let q=null;const J=new ot(0,0,0,0);return{setMask:function(ue){q!==ue&&!x&&(i.colorMask(ue,ue,ue,ue),q=ue)},setLocked:function(ue){x=ue},setClear:function(ue,Ae,Ue,dt,_t){_t===!0&&(ue*=dt,Ae*=dt,Ue*=dt),X.set(ue,Ae,Ue,dt),J.equals(X)===!1&&(i.clearColor(ue,Ae,Ue,dt),J.copy(X))},reset:function(){x=!1,q=null,J.set(-1,0,0,0)}}}function t(){let x=!1,X=null,q=null,J=null;return{setTest:function(ue){ue?Se(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ue){X!==ue&&!x&&(i.depthMask(ue),X=ue)},setFunc:function(ue){if(q!==ue){switch(ue){case l_:i.depthFunc(i.NEVER);break;case c_:i.depthFunc(i.ALWAYS);break;case u_:i.depthFunc(i.LESS);break;case Fo:i.depthFunc(i.LEQUAL);break;case f_:i.depthFunc(i.EQUAL);break;case h_:i.depthFunc(i.GEQUAL);break;case d_:i.depthFunc(i.GREATER);break;case p_:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=ue}},setLocked:function(ue){x=ue},setClear:function(ue){J!==ue&&(i.clearDepth(ue),J=ue)},reset:function(){x=!1,X=null,q=null,J=null}}}function n(){let x=!1,X=null,q=null,J=null,ue=null,Ae=null,Ue=null,dt=null,_t=null;return{setTest:function($e){x||($e?Se(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function($e){X!==$e&&!x&&(i.stencilMask($e),X=$e)},setFunc:function($e,vt,pt){(q!==$e||J!==vt||ue!==pt)&&(i.stencilFunc($e,vt,pt),q=$e,J=vt,ue=pt)},setOp:function($e,vt,pt){(Ae!==$e||Ue!==vt||dt!==pt)&&(i.stencilOp($e,vt,pt),Ae=$e,Ue=vt,dt=pt)},setLocked:function($e){x=$e},setClear:function($e){_t!==$e&&(i.clearStencil($e),_t=$e)},reset:function(){x=!1,X=null,q=null,J=null,ue=null,Ae=null,Ue=null,dt=null,_t=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,v=null,m=null,p=null,A=null,M=null,T=null,U=null,P=new ke(0,0,0),w=0,F=!1,b=null,S=null,D=null,Q=null,Y=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,W=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),ne=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ne=W>=2);let H=null,he={};const _e=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Be=new ot().fromArray(_e),Ge=new ot().fromArray(ye);function re(x,X,q,J){const ue=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(x,Ae),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<q;Ue++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(X+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Ae}const fe={};fe[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),s.setFunc(Fo),V(!1),z(Cu),Se(i.CULL_FACE),R(xi);function Se(x){c[x]!==!0&&(i.enable(x),c[x]=!0)}function me(x){c[x]!==!1&&(i.disable(x),c[x]=!1)}function Le(x,X){return u[x]!==X?(i.bindFramebuffer(x,X),u[x]=X,x===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=X),x===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=X),!0):!1}function Fe(x,X){let q=h,J=!1;if(x){q=f.get(X),q===void 0&&(q=[],f.set(X,q));const ue=x.textures;if(q.length!==ue.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,Ue=ue.length;Ae<Ue;Ae++)q[Ae]=i.COLOR_ATTACHMENT0+Ae;q.length=ue.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function Ne(x){return d!==x?(i.useProgram(x),d=x,!0):!1}const nt={[Bi]:i.FUNC_ADD,[Xg]:i.FUNC_SUBTRACT,[jg]:i.FUNC_REVERSE_SUBTRACT};nt[qg]=i.MIN,nt[Yg]=i.MAX;const L={[Kg]:i.ZERO,[$g]:i.ONE,[Zg]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[i_]:i.SRC_ALPHA_SATURATE,[t_]:i.DST_COLOR,[Qg]:i.DST_ALPHA,[Jg]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[n_]:i.ONE_MINUS_DST_COLOR,[e_]:i.ONE_MINUS_DST_ALPHA,[r_]:i.CONSTANT_COLOR,[s_]:i.ONE_MINUS_CONSTANT_COLOR,[o_]:i.CONSTANT_ALPHA,[a_]:i.ONE_MINUS_CONSTANT_ALPHA};function R(x,X,q,J,ue,Ae,Ue,dt,_t,$e){if(x===xi){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&(Se(i.BLEND),g=!0),x!==Wg){if(x!==v||$e!==F){if((m!==Bi||M!==Bi)&&(i.blendEquation(i.FUNC_ADD),m=Bi,M=Bi),$e)switch(x){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}p=null,A=null,T=null,U=null,P.set(0,0,0),w=0,v=x,F=$e}return}ue=ue||X,Ae=Ae||q,Ue=Ue||J,(X!==m||ue!==M)&&(i.blendEquationSeparate(nt[X],nt[ue]),m=X,M=ue),(q!==p||J!==A||Ae!==T||Ue!==U)&&(i.blendFuncSeparate(L[q],L[J],L[Ae],L[Ue]),p=q,A=J,T=Ae,U=Ue),(dt.equals(P)===!1||_t!==w)&&(i.blendColor(dt.r,dt.g,dt.b,_t),P.copy(dt),w=_t),v=x,F=!1}function I(x,X){x.side===An?me(i.CULL_FACE):Se(i.CULL_FACE);let q=x.side===jt;X&&(q=!q),V(q),x.blending===Rr&&x.transparent===!1?R(xi):R(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),r.setMask(x.colorWrite);const J=x.stencilWrite;o.setTest(J),J&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),ee(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(x){b!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),b=x)}function z(x){x!==Hg?(Se(i.CULL_FACE),x!==S&&(x===Cu?i.cullFace(i.BACK):x===Vg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),S=x}function ie(x){x!==D&&(ne&&i.lineWidth(x),D=x)}function ee(x,X,q){x?(Se(i.POLYGON_OFFSET_FILL),(Q!==X||Y!==q)&&(i.polygonOffset(X,q),Q=X,Y=q)):me(i.POLYGON_OFFSET_FILL)}function se(x){x?Se(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function y(x){x===void 0&&(x=i.TEXTURE0+te-1),H!==x&&(i.activeTexture(x),H=x)}function _(x,X,q){q===void 0&&(H===null?q=i.TEXTURE0+te-1:q=H);let J=he[q];J===void 0&&(J={type:void 0,texture:void 0},he[q]=J),(J.type!==x||J.texture!==X)&&(H!==q&&(i.activeTexture(q),H=q),i.bindTexture(x,X||fe[x]),J.type=x,J.texture=X)}function C(){const x=he[H];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ve(){try{i.texStorage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Re(x){Be.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),Be.copy(x))}function xe(x){Ge.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),Ge.copy(x))}function Pe(x,X){let q=l.get(X);q===void 0&&(q=new WeakMap,l.set(X,q));let J=q.get(x);J===void 0&&(J=i.getUniformBlockIndex(X,x.name),q.set(x,J))}function be(x,X){const J=l.get(X).get(x);a.get(X)!==J&&(i.uniformBlockBinding(X,J,x.__bindingPointIndex),a.set(X,J))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,he={},u={},f=new WeakMap,h=[],d=null,g=!1,v=null,m=null,p=null,A=null,M=null,T=null,U=null,P=new ke(0,0,0),w=0,F=!1,b=null,S=null,D=null,Q=null,Y=null,Be.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Se,disable:me,bindFramebuffer:Le,drawBuffers:Fe,useProgram:Ne,setBlending:R,setMaterial:I,setFlipSided:V,setCullFace:z,setLineWidth:ie,setPolygonOffset:ee,setScissorTest:se,activeTexture:y,bindTexture:_,unbindTexture:C,compressedTexImage2D:j,compressedTexImage3D:G,texImage2D:pe,texImage3D:ze,updateUBOMapping:Pe,uniformBlockBinding:be,texStorage2D:ve,texStorage3D:oe,texSubImage2D:k,texSubImage3D:le,compressedTexSubImage2D:ae,compressedTexSubImage3D:ce,scissor:Re,viewport:xe,reset:Ye}}function Cf(i,e,t,n){const r=Zy(n);switch(t){case cd:return i*e;case fd:return i*e;case hd:return i*e*2;case Pc:return i*e/r.components*r.byteLength;case Lc:return i*e/r.components*r.byteLength;case dd:return i*e*2/r.components*r.byteLength;case Ic:return i*e*2/r.components*r.byteLength;case ud:return i*e*3/r.components*r.byteLength;case on:return i*e*4/r.components*r.byteLength;case Dc:return i*e*4/r.components*r.byteLength;case To:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Al:return Math.max(i,16)*Math.max(e,8)/4;case El:case bl:return Math.max(i,8)*Math.max(e,8)/2;case wl:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pd:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ql:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zy(i){switch(i){case Qn:case od:return{byteLength:1,components:1};case Cs:case ad:case Ns:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case ji:case wc:case mn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jy(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return d?new OffscreenCanvas(y,_):Is("canvas")}function v(y,_,C){let j=1;const G=se(y);if((G.width>C||G.height>C)&&(j=C/Math.max(G.width,G.height)),j<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(j*G.width),le=Math.floor(j*G.height);f===void 0&&(f=g(k,le));const ae=_?g(k,le):f;return ae.width=k,ae.height=le,ae.getContext("2d").drawImage(y,0,0,k,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+k+"x"+le+")."),ae}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),y;return y}function m(y){return y.generateMipmaps&&y.minFilter!==Vt&&y.minFilter!==Jt}function p(y){i.generateMipmap(y)}function A(y,_,C,j,G=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=_;if(_===i.RED&&(C===i.FLOAT&&(k=i.R32F),C===i.HALF_FLOAT&&(k=i.R16F),C===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(k=i.R8UI),C===i.UNSIGNED_SHORT&&(k=i.R16UI),C===i.UNSIGNED_INT&&(k=i.R32UI),C===i.BYTE&&(k=i.R8I),C===i.SHORT&&(k=i.R16I),C===i.INT&&(k=i.R32I)),_===i.RG&&(C===i.FLOAT&&(k=i.RG32F),C===i.HALF_FLOAT&&(k=i.RG16F),C===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(k=i.RG8UI),C===i.UNSIGNED_SHORT&&(k=i.RG16UI),C===i.UNSIGNED_INT&&(k=i.RG32UI),C===i.BYTE&&(k=i.RG8I),C===i.SHORT&&(k=i.RG16I),C===i.INT&&(k=i.RG32I)),_===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),_===i.RGBA){const le=G?zo:Ze.getTransfer(j);C===i.FLOAT&&(k=i.RGBA32F),C===i.HALF_FLOAT&&(k=i.RGBA16F),C===i.UNSIGNED_BYTE&&(k=le===lt?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function M(y,_){let C;return y?_===null||_===ji||_===zr?C=i.DEPTH24_STENCIL8:_===mn?C=i.DEPTH32F_STENCIL8:_===Cs&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ji||_===zr?C=i.DEPTH_COMPONENT24:_===mn?C=i.DEPTH_COMPONENT32F:_===Cs&&(C=i.DEPTH_COMPONENT16),C}function T(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Vt&&y.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function U(y){const _=y.target;_.removeEventListener("dispose",U),w(_),_.isVideoTexture&&u.delete(_)}function P(y){const _=y.target;_.removeEventListener("dispose",P),b(_)}function w(y){const _=n.get(y);if(_.__webglInit===void 0)return;const C=y.source,j=h.get(C);if(j){const G=j[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&F(y),Object.keys(j).length===0&&h.delete(C)}n.remove(y)}function F(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const C=y.source,j=h.get(C);delete j[_.__cacheKey],o.memory.textures--}function b(y){const _=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let G=0;G<_.__webglFramebuffer[j].length;G++)i.deleteFramebuffer(_.__webglFramebuffer[j][G]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const C=y.textures;for(let j=0,G=C.length;j<G;j++){const k=n.get(C[j]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(C[j])}n.remove(y)}let S=0;function D(){S=0}function Q(){const y=S;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),S+=1,y}function Y(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function te(y,_){const C=n.get(y);if(y.isVideoTexture&&ie(y),y.isRenderTargetTexture===!1&&y.version>0&&C.__version!==y.version){const j=y.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(C,y,_);return}}t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+_)}function ne(y,_){const C=n.get(y);if(y.version>0&&C.__version!==y.version){Ge(C,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+_)}function W(y,_){const C=n.get(y);if(y.version>0&&C.__version!==y.version){Ge(C,y,_);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+_)}function $(y,_){const C=n.get(y);if(y.version>0&&C.__version!==y.version){re(C,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+_)}const H={[Br]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},he={[Vt]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},_e={[P_]:i.NEVER,[O_]:i.ALWAYS,[L_]:i.LESS,[_d]:i.LEQUAL,[I_]:i.EQUAL,[U_]:i.GEQUAL,[D_]:i.GREATER,[N_]:i.NOTEQUAL};function ye(y,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===Eo||_.magFilter===ms||_.magFilter===Yn||_.minFilter===Jt||_.minFilter===Eo||_.minFilter===ms||_.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,H[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,H[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,H[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==ms&&_.minFilter!==Yn||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Be(y,_){let C=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",U));const j=_.source;let G=h.get(j);G===void 0&&(G={},h.set(j,G));const k=Y(_);if(k!==y.__cacheKey){G[k]===void 0&&(G[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,C=!0),G[k].usedTimes++;const le=G[y.__cacheKey];le!==void 0&&(G[y.__cacheKey].usedTimes--,le.usedTimes===0&&F(_)),y.__cacheKey=k,y.__webglTexture=G[k].texture}return C}function Ge(y,_,C){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const G=Be(y,_),k=_.source;t.bindTexture(j,y.__webglTexture,i.TEXTURE0+C);const le=n.get(k);if(k.version!==le.__version||G===!0){t.activeTexture(i.TEXTURE0+C);const ae=Ze.getPrimaries(Ze.workingColorSpace),ce=_.colorSpace===pi?null:Ze.getPrimaries(_.colorSpace),ve=_.colorSpace===pi||ae===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let oe=v(_.image,!1,r.maxTextureSize);oe=ee(_,oe);const pe=s.convert(_.format,_.colorSpace),ze=s.convert(_.type);let Re=A(_.internalFormat,pe,ze,_.colorSpace,_.isVideoTexture);ye(j,_);let xe;const Pe=_.mipmaps,be=_.isVideoTexture!==!0,Ye=le.__version===void 0||G===!0,x=k.dataReady,X=T(_,oe);if(_.isDepthTexture)Re=M(_.format===kr,_.type),Ye&&(be?t.texStorage2D(i.TEXTURE_2D,1,Re,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Re,oe.width,oe.height,0,pe,ze,null));else if(_.isDataTexture)if(Pe.length>0){be&&Ye&&t.texStorage2D(i.TEXTURE_2D,X,Re,Pe[0].width,Pe[0].height);for(let q=0,J=Pe.length;q<J;q++)xe=Pe[q],be?x&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,xe.width,xe.height,pe,ze,xe.data):t.texImage2D(i.TEXTURE_2D,q,Re,xe.width,xe.height,0,pe,ze,xe.data);_.generateMipmaps=!1}else be?(Ye&&t.texStorage2D(i.TEXTURE_2D,X,Re,oe.width,oe.height),x&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,pe,ze,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Re,oe.width,oe.height,0,pe,ze,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){be&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,Re,Pe[0].width,Pe[0].height,oe.depth);for(let q=0,J=Pe.length;q<J;q++)if(xe=Pe[q],_.format!==on)if(pe!==null)if(be){if(x)if(_.layerUpdates.size>0){const ue=Cf(xe.width,xe.height,_.format,_.type);for(const Ae of _.layerUpdates){const Ue=xe.data.subarray(Ae*ue/xe.data.BYTES_PER_ELEMENT,(Ae+1)*ue/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Ae,xe.width,xe.height,1,pe,Ue,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,oe.depth,pe,xe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Re,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?x&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,oe.depth,pe,ze,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Re,xe.width,xe.height,oe.depth,0,pe,ze,xe.data)}else{be&&Ye&&t.texStorage2D(i.TEXTURE_2D,X,Re,Pe[0].width,Pe[0].height);for(let q=0,J=Pe.length;q<J;q++)xe=Pe[q],_.format!==on?pe!==null?be?x&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,xe.width,xe.height,pe,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Re,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?x&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,xe.width,xe.height,pe,ze,xe.data):t.texImage2D(i.TEXTURE_2D,q,Re,xe.width,xe.height,0,pe,ze,xe.data)}else if(_.isDataArrayTexture)if(be){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,Re,oe.width,oe.height,oe.depth),x)if(_.layerUpdates.size>0){const q=Cf(oe.width,oe.height,_.format,_.type);for(const J of _.layerUpdates){const ue=oe.data.subarray(J*q/oe.data.BYTES_PER_ELEMENT,(J+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,pe,ze,ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,ze,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,oe.width,oe.height,oe.depth,0,pe,ze,oe.data);else if(_.isData3DTexture)be?(Ye&&t.texStorage3D(i.TEXTURE_3D,X,Re,oe.width,oe.height,oe.depth),x&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,ze,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Re,oe.width,oe.height,oe.depth,0,pe,ze,oe.data);else if(_.isFramebufferTexture){if(Ye)if(be)t.texStorage2D(i.TEXTURE_2D,X,Re,oe.width,oe.height);else{let q=oe.width,J=oe.height;for(let ue=0;ue<X;ue++)t.texImage2D(i.TEXTURE_2D,ue,Re,q,J,0,pe,ze,null),q>>=1,J>>=1}}else if(Pe.length>0){if(be&&Ye){const q=se(Pe[0]);t.texStorage2D(i.TEXTURE_2D,X,Re,q.width,q.height)}for(let q=0,J=Pe.length;q<J;q++)xe=Pe[q],be?x&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe,ze,xe):t.texImage2D(i.TEXTURE_2D,q,Re,pe,ze,xe);_.generateMipmaps=!1}else if(be){if(Ye){const q=se(oe);t.texStorage2D(i.TEXTURE_2D,X,Re,q.width,q.height)}x&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,ze,oe)}else t.texImage2D(i.TEXTURE_2D,0,Re,pe,ze,oe);m(_)&&p(j),le.__version=k.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function re(y,_,C){if(_.image.length!==6)return;const j=Be(y,_),G=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+C);const k=n.get(G);if(G.version!==k.__version||j===!0){t.activeTexture(i.TEXTURE0+C);const le=Ze.getPrimaries(Ze.workingColorSpace),ae=_.colorSpace===pi?null:Ze.getPrimaries(_.colorSpace),ce=_.colorSpace===pi||le===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ve=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!ve&&!oe?pe[J]=v(_.image[J],!0,r.maxCubemapSize):pe[J]=oe?_.image[J].image:_.image[J],pe[J]=ee(_,pe[J]);const ze=pe[0],Re=s.convert(_.format,_.colorSpace),xe=s.convert(_.type),Pe=A(_.internalFormat,Re,xe,_.colorSpace),be=_.isVideoTexture!==!0,Ye=k.__version===void 0||j===!0,x=G.dataReady;let X=T(_,ze);ye(i.TEXTURE_CUBE_MAP,_);let q;if(ve){be&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,X,Pe,ze.width,ze.height);for(let J=0;J<6;J++){q=pe[J].mipmaps;for(let ue=0;ue<q.length;ue++){const Ae=q[ue];_.format!==on?Re!==null?be?x&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Pe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?x&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Ae.width,Ae.height,Re,xe,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Pe,Ae.width,Ae.height,0,Re,xe,Ae.data)}}}else{if(q=_.mipmaps,be&&Ye){q.length>0&&X++;const J=se(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,X,Pe,J.width,J.height)}for(let J=0;J<6;J++)if(oe){be?x&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,Re,xe,pe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Pe,pe[J].width,pe[J].height,0,Re,xe,pe[J].data);for(let ue=0;ue<q.length;ue++){const Ue=q[ue].image[J].image;be?x&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Ue.width,Ue.height,Re,xe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Pe,Ue.width,Ue.height,0,Re,xe,Ue.data)}}else{be?x&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,xe,pe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Pe,Re,xe,pe[J]);for(let ue=0;ue<q.length;ue++){const Ae=q[ue];be?x&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Re,xe,Ae.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Pe,Re,xe,Ae.image[J])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),k.__version=G.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function fe(y,_,C,j,G,k){const le=s.convert(C.format,C.colorSpace),ae=s.convert(C.type),ce=A(C.internalFormat,le,ae,C.colorSpace);if(!n.get(_).__hasExternalTextures){const oe=Math.max(1,_.width>>k),pe=Math.max(1,_.height>>k);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,k,ce,oe,pe,_.depth,0,le,ae,null):t.texImage2D(G,k,ce,oe,pe,0,le,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),z(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,G,n.get(C).__webglTexture,0,V(_)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,G,n.get(C).__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(y,_,C){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const j=_.depthTexture,G=j&&j.isDepthTexture?j.type:null,k=M(_.stencilBuffer,G),le=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=V(_);z(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,k,_.width,_.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,y)}else{const j=_.textures;for(let G=0;G<j.length;G++){const k=j[G],le=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),ce=A(k.internalFormat,le,ae,k.colorSpace),ve=V(_);C&&z(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ce,_.width,_.height):z(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),te(_.depthTexture,0);const j=n.get(_.depthTexture).__webglTexture,G=V(_);if(_.depthTexture.format===Cr)z(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===kr)z(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Le(y){const _=n.get(y),C=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");me(_.__webglFramebuffer,y)}else if(C){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]=i.createRenderbuffer(),Se(_.__webglDepthbuffer[j],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Se(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(y,_,C){const j=n.get(y);_!==void 0&&fe(j.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Le(y)}function Ne(y){const _=y.texture,C=n.get(y),j=n.get(_);y.addEventListener("dispose",P);const G=y.textures,k=y.isWebGLCubeRenderTarget===!0,le=G.length>1;if(le||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++),k){C.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer[ae]=[];for(let ce=0;ce<_.mipmaps.length;ce++)C.__webglFramebuffer[ae][ce]=i.createFramebuffer()}else C.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){C.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)C.__webglFramebuffer[ae]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(le)for(let ae=0,ce=G.length;ae<ce;ae++){const ve=n.get(G[ae]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&z(y)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ae=0;ae<G.length;ae++){const ce=G[ae];C.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[ae]);const ve=s.convert(ce.format,ce.colorSpace),oe=s.convert(ce.type),pe=A(ce.internalFormat,ve,oe,ce.colorSpace,y.isXRRenderTarget===!0),ze=V(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,pe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,C.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ye(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)fe(C.__webglFramebuffer[ae][ce],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else fe(C.__webglFramebuffer[ae],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ae=0,ce=G.length;ae<ce;ae++){const ve=G[ae],oe=n.get(ve);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),ye(i.TEXTURE_2D,ve),fe(C.__webglFramebuffer,y,ve,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(ve)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ae=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),ye(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)fe(C.__webglFramebuffer[ce],y,_,i.COLOR_ATTACHMENT0,ae,ce);else fe(C.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,ae,0);m(_)&&p(ae),t.unbindTexture()}y.depthBuffer&&Le(y)}function nt(y){const _=y.textures;for(let C=0,j=_.length;C<j;C++){const G=_[C];if(m(G)){const k=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(G).__webglTexture;t.bindTexture(k,le),p(k),t.unbindTexture()}}}const L=[],R=[];function I(y){if(y.samples>0){if(z(y)===!1){const _=y.textures,C=y.width,j=y.height;let G=i.COLOR_BUFFER_BIT;const k=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(y),ae=_.length>1;if(ae)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const ve=n.get(_[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,C,j,0,0,C,j,G,i.NEAREST),l===!0&&(L.length=0,R.length=0,L.push(i.COLOR_ATTACHMENT0+ce),y.depthBuffer&&y.resolveDepthBuffer===!1&&(L.push(k),R.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const ve=n.get(_[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function V(y){return Math.min(r.maxSamples,y.samples)}function z(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ie(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function ee(y,_){const C=y.colorSpace,j=y.format,G=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||C!==Ct&&C!==pi&&(Ze.getTransfer(C)===lt?(j!==on||G!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),_}function se(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=D,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=Fe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=z}function Qy(i,e){function t(n,r=pi){let s;const o=Ze.getTransfer(r);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return i.BYTE;if(n===ad)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===wc)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===cd)return i.ALPHA;if(n===ud)return i.RGB;if(n===on)return i.RGBA;if(n===fd)return i.LUMINANCE;if(n===hd)return i.LUMINANCE_ALPHA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===kr)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===dd)return i.RG;if(n===Ic)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===To||n===bo||n===Ao||n===wo)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Tl||n===bl||n===Al)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===El)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Rl||n===Cl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wl||n===Rl)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Wl||n===Xl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ro)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pd||n===jl||n===ql||n===Yl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class eS extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tS={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Et,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ei({vertexShader:nS,fragmentShader:iS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sS extends Ki{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=new rS,m=t.getContextAttributes();let p=null,A=null;const M=[],T=[],U=new Ie;let P=null;const w=new kt;w.layers.enable(1),w.viewport=new ot;const F=new kt;F.layers.enable(2),F.viewport=new ot;const b=[w,F],S=new eS;S.layers.enable(1),S.layers.enable(2);let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=M[re];return fe===void 0&&(fe=new $a,M[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=M[re];return fe===void 0&&(fe=new $a,M[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=M[re];return fe===void 0&&(fe=new $a,M[re]=fe),fe.getHandSpace()};function Y(re){const fe=T.indexOf(re.inputSource);if(fe===-1)return;const Se=M[fe];Se!==void 0&&(Se.update(re.inputSource,re.frame,c||o),Se.dispatchEvent({type:re.type,data:re.inputSource}))}function te(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ne);for(let re=0;re<M.length;re++){const fe=T[re];fe!==null&&(T[re]=null,M[re].disconnect(fe))}D=null,Q=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,A=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new qi(d.framebufferWidth,d.framebufferHeight,{format:on,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Se=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?kr:Cr,Se=m.stencil?zr:ji);const Le={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new qi(h.textureWidth,h.textureHeight,{format:on,type:Qn,depthTexture:new Pd(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(re){for(let fe=0;fe<re.removed.length;fe++){const Se=re.removed[fe],me=T.indexOf(Se);me>=0&&(T[me]=null,M[me].disconnect(Se))}for(let fe=0;fe<re.added.length;fe++){const Se=re.added[fe];let me=T.indexOf(Se);if(me===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=T.length){T.push(Se),me=Fe;break}else if(T[Fe]===null){T[Fe]=Se,me=Fe;break}if(me===-1)break}const Le=M[me];Le&&Le.connect(Se)}}const W=new N,$=new N;function H(re,fe,Se){W.setFromMatrixPosition(fe.matrixWorld),$.setFromMatrixPosition(Se.matrixWorld);const me=W.distanceTo($),Le=fe.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,Ne=Le[14]/(Le[10]-1),nt=Le[14]/(Le[10]+1),L=(Le[9]+1)/Le[5],R=(Le[9]-1)/Le[5],I=(Le[8]-1)/Le[0],V=(Fe[8]+1)/Fe[0],z=Ne*I,ie=Ne*V,ee=me/(-I+V),se=ee*-I;fe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(se),re.translateZ(ee),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const y=Ne+ee,_=nt+ee,C=z-se,j=ie+(me-se),G=L*nt/_*y,k=R*nt/_*y;re.projectionMatrix.makePerspective(C,j,G,k,y,_),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function he(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;v.texture!==null&&(re.near=v.depthNear,re.far=v.depthFar),S.near=F.near=w.near=re.near,S.far=F.far=w.far=re.far,(D!==S.near||Q!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,Q=S.far,w.near=D,w.far=Q,F.near=D,F.far=Q,w.updateProjectionMatrix(),F.updateProjectionMatrix(),re.updateProjectionMatrix());const fe=re.parent,Se=S.cameras;he(S,fe);for(let me=0;me<Se.length;me++)he(Se[me],fe);Se.length===2?H(S,w,F):S.projectionMatrix.copy(w.projectionMatrix),_e(re,S,fe)};function _e(re,fe,Se){Se===null?re.matrix.copy(fe.matrixWorld):(re.matrix.copy(Se.matrixWorld),re.matrix.invert(),re.matrix.multiply(fe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Hr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ye=null;function Be(re,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let me=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let Fe=0;Fe<Se.length;Fe++){const Ne=Se[Fe];let nt=null;if(d!==null)nt=d.getViewport(Ne);else{const R=f.getViewSubImage(h,Ne);nt=R.viewport,Fe===0&&(e.setRenderTargetTextures(A,R.colorTexture,h.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(A))}let L=b[Fe];L===void 0&&(L=new kt,L.layers.enable(Fe),L.viewport=new ot,b[Fe]=L),L.matrix.fromArray(Ne.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ne.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(nt.x,nt.y,nt.width,nt.height),Fe===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(L)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Fe=f.getDepthInformation(Se[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let Se=0;Se<M.length;Se++){const me=T[Se],Le=M[Se];me!==null&&Le!==void 0&&Le.update(me,fe,c||o)}ye&&ye(re,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ge=new Cd;Ge.setAnimationLoop(Be),this.setAnimationLoop=function(re){ye=re},this.dispose=function(){}}}const Ii=new Ln,oS=new je;function aS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ad(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,M,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),M=A.envMap,T=A.envMapRotation;M&&(m.envMap.value=M,Ii.copy(T),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(oS.makeRotationFromEuler(Ii)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lS(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){const T=M.program;n.uniformBlockBinding(A,T)}function c(A,M){let T=r[A.id];T===void 0&&(g(A),T=u(A),r[A.id]=T,A.addEventListener("dispose",m));const U=M.program;n.updateUBOMapping(A,U);const P=e.render.frame;s[A.id]!==P&&(h(A),s[A.id]=P)}function u(A){const M=f();A.__bindingPointIndex=M;const T=i.createBuffer(),U=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const M=r[A.id],T=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,w=T.length;P<w;P++){const F=Array.isArray(T[P])?T[P]:[T[P]];for(let b=0,S=F.length;b<S;b++){const D=F[b];if(d(D,P,b,U)===!0){const Q=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let te=0;for(let ne=0;ne<Y.length;ne++){const W=Y[ne],$=v(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,Q+te,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,te),te+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,M,T,U){const P=A.value,w=M+"_"+T;if(U[w]===void 0)return typeof P=="number"||typeof P=="boolean"?U[w]=P:U[w]=P.clone(),!0;{const F=U[w];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return U[w]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(A){const M=A.uniforms;let T=0;const U=16;for(let w=0,F=M.length;w<F;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,D=b.length;S<D;S++){const Q=b[S],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let te=0,ne=Y.length;te<ne;te++){const W=Y[te],$=v(W),H=T%U,he=H%$.boundary,_e=H+he;T+=he,_e!==0&&U-_e<$.storage&&(T+=U-_e),Q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=$.storage}}}const P=T%U;return P>0&&(T+=U-P),A.__size=T,A.__cache={},this}function v(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function m(A){const M=A.target;M.removeEventListener("dispose",m);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class cS{constructor(e={}){const{canvas:t=Q_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=Mi,this.toneMappingExposure=1;const M=this;let T=!1,U=0,P=0,w=null,F=-1,b=null;const S=new ot,D=new ot;let Q=null;const Y=new ke(0);let te=0,ne=t.width,W=t.height,$=1,H=null,he=null;const _e=new ot(0,0,ne,W),ye=new ot(0,0,ne,W);let Be=!1;const Ge=new Oc;let re=!1,fe=!1;const Se=new je,me=new N,Le=new ot,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function nt(){return w===null?$:1}let L=n;function R(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){const O="webgl2";if(L=R(O,E),L===null)throw R(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let I,V,z,ie,ee,se,y,_,C,j,G,k,le,ae,ce,ve,oe,pe,ze,Re,xe,Pe,be,Ye;function x(){I=new mM(L),I.init(),Pe=new Qy(L,I),V=new cM(L,I,e,Pe),z=new $y(L),ie=new vM(L),ee=new Oy,se=new Jy(L,I,z,ee,V,Pe,ie),y=new fM(M),_=new pM(M),C=new bv(L),be=new aM(L,C),j=new gM(L,C,ie,be),G=new MM(L,j,C,ie),ze=new xM(L,V,se),ve=new uM(ee),k=new Uy(M,y,_,I,V,be,ve),le=new aS(M,ee),ae=new By,ce=new Wy(I),pe=new oM(M,y,_,z,G,h,l),oe=new Ky(M,G,V),Ye=new lS(L,ie,V,z),Re=new lM(L,I,ie),xe=new _M(L,I,ie),ie.programs=k.programs,M.capabilities=V,M.extensions=I,M.properties=ee,M.renderLists=ae,M.shadowMap=oe,M.state=z,M.info=ie}x();const X=new sS(M,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=I.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=I.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(ne,W,!1))},this.getSize=function(E){return E.set(ne,W)},this.setSize=function(E,O,K=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,W=O,t.width=Math.floor(E*$),t.height=Math.floor(O*$),K===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(ne*$,W*$).floor()},this.setDrawingBufferSize=function(E,O,K){ne=E,W=O,$=K,t.width=Math.floor(E*K),t.height=Math.floor(O*K),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,O,K,Z){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,O,K,Z),z.viewport(S.copy(_e).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(ye)},this.setScissor=function(E,O,K,Z){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,O,K,Z),z.scissor(D.copy(ye).multiplyScalar($).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){z.setScissorTest(Be=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,O=!0,K=!0){let Z=0;if(E){let B=!1;if(w!==null){const de=w.texture.format;B=de===Dc||de===Ic||de===Lc}if(B){const de=w.texture.type,Me=de===Qn||de===ji||de===Cs||de===zr||de===Rc||de===Cc,Ee=pe.getClearColor(),Te=pe.getClearAlpha(),De=Ee.r,Oe=Ee.g,Ce=Ee.b;Me?(d[0]=De,d[1]=Oe,d[2]=Ce,d[3]=Te,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=De,g[1]=Oe,g[2]=Ce,g[3]=Te,L.clearBufferiv(L.COLOR,0,g))}else Z|=L.COLOR_BUFFER_BIT}O&&(Z|=L.DEPTH_BUFFER_BIT),K&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ae.dispose(),ce.dispose(),ee.dispose(),y.dispose(),_.dispose(),G.dispose(),be.dispose(),Ye.dispose(),k.dispose(),X.dispose(),X.removeEventListener("sessionstart",pt),X.removeEventListener("sessionend",ti),bt.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=ie.autoReset,O=oe.enabled,K=oe.autoUpdate,Z=oe.needsUpdate,B=oe.type;x(),ie.autoReset=E,oe.enabled=O,oe.autoUpdate=K,oe.needsUpdate=Z,oe.type=B}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ae(E){const O=E.target;O.removeEventListener("dispose",Ae),Ue(O)}function Ue(E){dt(E),ee.remove(E)}function dt(E){const O=ee.get(E).programs;O!==void 0&&(O.forEach(function(K){k.releaseProgram(K)}),E.isShaderMaterial&&k.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,K,Z,B,de){O===null&&(O=Fe);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Ee=op(E,O,K,Z,B);z.setMaterial(Z,Me);let Te=K.index,De=1;if(Z.wireframe===!0){if(Te=j.getWireframeAttribute(K),Te===void 0)return;De=2}const Oe=K.drawRange,Ce=K.attributes.position;let Je=Oe.start*De,ft=(Oe.start+Oe.count)*De;de!==null&&(Je=Math.max(Je,de.start*De),ft=Math.min(ft,(de.start+de.count)*De)),Te!==null?(Je=Math.max(Je,0),ft=Math.min(ft,Te.count)):Ce!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,Ce.count));const ht=ft-Je;if(ht<0||ht===1/0)return;be.setup(B,Z,Ee,K,Te);let Yt,Qe=Re;if(Te!==null&&(Yt=C.get(Te),Qe=xe,Qe.setIndex(Yt)),B.isMesh)Z.wireframe===!0?(z.setLineWidth(Z.wireframeLinewidth*nt()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(B.isLine){let we=Z.linewidth;we===void 0&&(we=1),z.setLineWidth(we*nt()),B.isLineSegments?Qe.setMode(L.LINES):B.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else B.isPoints?Qe.setMode(L.POINTS):B.isSprite&&Qe.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Qe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))Qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const we=B._multiDrawStarts,At=B._multiDrawCounts,et=B._multiDrawCount,an=Te?C.get(Te).bytesPerElement:1,Ji=ee.get(Z).currentProgram.getUniforms();for(let Kt=0;Kt<et;Kt++)Ji.setValue(L,"_gl_DrawID",Kt),Qe.render(we[Kt]/an,At[Kt])}else if(B.isInstancedMesh)Qe.renderInstances(Je,ht,B.count);else if(K.isInstancedBufferGeometry){const we=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,At=Math.min(K.instanceCount,we);Qe.renderInstances(Je,ht,At)}else Qe.render(Je,ht)};function _t(E,O,K){E.transparent===!0&&E.side===An&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,zs(E,O,K),E.side=Jn,E.needsUpdate=!0,zs(E,O,K),E.side=An):zs(E,O,K)}this.compile=function(E,O,K=null){K===null&&(K=E),m=ce.get(K),m.init(O),A.push(m),K.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==K&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const Z=new Set;return E.traverse(function(B){const de=B.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ee=de[Me];_t(Ee,K,B),Z.add(Ee)}else _t(de,K,B),Z.add(de)}),A.pop(),m=null,Z},this.compileAsync=function(E,O,K=null){const Z=this.compile(E,O,K);return new Promise(B=>{function de(){if(Z.forEach(function(Me){ee.get(Me).currentProgram.isReady()&&Z.delete(Me)}),Z.size===0){B(E);return}setTimeout(de,10)}I.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let $e=null;function vt(E){$e&&$e(E)}function pt(){bt.stop()}function ti(){bt.start()}const bt=new Cd;bt.setAnimationLoop(vt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(E){$e=E,X.setAnimationLoop(E),E===null?bt.stop():bt.start()},X.addEventListener("sessionstart",pt),X.addEventListener("sessionend",ti),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,O,w),m=ce.get(E,A.length),m.init(O),A.push(m),Se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ge.setFromProjectionMatrix(Se),fe=this.localClippingEnabled,re=ve.init(this.clippingPlanes,fe),v=ae.get(E,p.length),v.init(),p.push(v),X.enabled===!0&&X.isPresenting===!0){const de=M.xr.getDepthSensingMesh();de!==null&&Fn(de,O,-1/0,M.sortObjects)}Fn(E,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(H,he),Ne=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ne&&pe.addToRenderList(v,E),this.info.render.frame++,re===!0&&ve.beginShadows();const K=m.state.shadowsArray;oe.render(K,E,O),re===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=v.opaque,B=v.transmissive;if(m.setupLights(),O.isArrayCamera){const de=O.cameras;if(B.length>0)for(let Me=0,Ee=de.length;Me<Ee;Me++){const Te=de[Me];ts(Z,B,E,Te)}Ne&&pe.render(E);for(let Me=0,Ee=de.length;Me<Ee;Me++){const Te=de[Me];Ti(v,E,Te,Te.viewport)}}else B.length>0&&ts(Z,B,E,O),Ne&&pe.render(E),Ti(v,E,O);w!==null&&(se.updateMultisampleRenderTarget(w),se.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(M,E,O),be.resetDefaultState(),F=-1,b=null,A.pop(),A.length>0?(m=A[A.length-1],re===!0&&ve.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Fn(E,O,K,Z){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ge.intersectsSprite(E)){Z&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const Me=G.update(E),Ee=E.material;Ee.visible&&v.push(E,Me,Ee,K,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ge.intersectsObject(E))){const Me=G.update(E),Ee=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Le.copy(Me.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(Ee)){const Te=Me.groups;for(let De=0,Oe=Te.length;De<Oe;De++){const Ce=Te[De],Je=Ee[Ce.materialIndex];Je&&Je.visible&&v.push(E,Me,Je,K,Le.z,Ce)}}else Ee.visible&&v.push(E,Me,Ee,K,Le.z,null)}}const de=E.children;for(let Me=0,Ee=de.length;Me<Ee;Me++)Fn(de[Me],O,K,Z)}function Ti(E,O,K,Z){const B=E.opaque,de=E.transmissive,Me=E.transparent;m.setupLightsView(K),re===!0&&ve.setGlobalState(M.clippingPlanes,K),Z&&z.viewport(S.copy(Z)),B.length>0&&Bs(B,O,K),de.length>0&&Bs(de,O,K),Me.length>0&&Bs(Me,O,K),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function ts(E,O,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new qi(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Ns:Qn,minFilter:Yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const de=m.state.transmissionRenderTarget[Z.id],Me=Z.viewport||S;de.setSize(Me.z,Me.w);const Ee=M.getRenderTarget();M.setRenderTarget(de),M.getClearColor(Y),te=M.getClearAlpha(),te<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&pe.render(K);const Te=M.toneMapping;M.toneMapping=Mi;const De=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),re===!0&&ve.setGlobalState(M.clippingPlanes,Z),Bs(E,K,Z),se.updateMultisampleRenderTarget(de),se.updateRenderTargetMipmap(de),I.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ce=0,Je=O.length;Ce<Je;Ce++){const ft=O[Ce],ht=ft.object,Yt=ft.geometry,Qe=ft.material,we=ft.group;if(Qe.side===An&&ht.layers.test(Z.layers)){const At=Qe.side;Qe.side=jt,Qe.needsUpdate=!0,Zc(ht,K,Z,Yt,Qe,we),Qe.side=At,Qe.needsUpdate=!0,Oe=!0}}Oe===!0&&(se.updateMultisampleRenderTarget(de),se.updateRenderTargetMipmap(de))}M.setRenderTarget(Ee),M.setClearColor(Y,te),De!==void 0&&(Z.viewport=De),M.toneMapping=Te}function Bs(E,O,K){const Z=O.isScene===!0?O.overrideMaterial:null;for(let B=0,de=E.length;B<de;B++){const Me=E[B],Ee=Me.object,Te=Me.geometry,De=Z===null?Me.material:Z,Oe=Me.group;Ee.layers.test(K.layers)&&Zc(Ee,O,K,Te,De,Oe)}}function Zc(E,O,K,Z,B,de){E.onBeforeRender(M,O,K,Z,B,de),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.transparent===!0&&B.side===An&&B.forceSinglePass===!1?(B.side=jt,B.needsUpdate=!0,M.renderBufferDirect(K,O,Z,B,E,de),B.side=Jn,B.needsUpdate=!0,M.renderBufferDirect(K,O,Z,B,E,de),B.side=An):M.renderBufferDirect(K,O,Z,B,E,de),E.onAfterRender(M,O,K,Z,B,de)}function zs(E,O,K){O.isScene!==!0&&(O=Fe);const Z=ee.get(E),B=m.state.lights,de=m.state.shadowsArray,Me=B.state.version,Ee=k.getParameters(E,B.state,de,O,K),Te=k.getProgramCacheKey(Ee);let De=Z.programs;Z.environment=E.isMeshStandardMaterial?O.environment:null,Z.fog=O.fog,Z.envMap=(E.isMeshStandardMaterial?_:y).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Ae),De=new Map,Z.programs=De);let Oe=De.get(Te);if(Oe!==void 0){if(Z.currentProgram===Oe&&Z.lightsStateVersion===Me)return Qc(E,Ee),Oe}else Ee.uniforms=k.getUniforms(E),E.onBeforeCompile(Ee,M),Oe=k.acquireProgram(Ee,Te),De.set(Te,Oe),Z.uniforms=Ee.uniforms;const Ce=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ve.uniform),Qc(E,Ee),Z.needsLights=lp(E),Z.lightsStateVersion=Me,Z.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=Oe,Z.uniformsList=null,Oe}function Jc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Co.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Qc(E,O){const K=ee.get(E);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function op(E,O,K,Z,B){O.isScene!==!0&&(O=Fe),se.resetTextureUnits();const de=O.fog,Me=Z.isMeshStandardMaterial?O.environment:null,Ee=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ct,Te=(Z.isMeshStandardMaterial?_:y).get(Z.envMap||Me),De=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Oe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ce=!!K.morphAttributes.position,Je=!!K.morphAttributes.normal,ft=!!K.morphAttributes.color;let ht=Mi;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=M.toneMapping);const Yt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qe=Yt!==void 0?Yt.length:0,we=ee.get(Z),At=m.state.lights;if(re===!0&&(fe===!0||E!==b)){const tn=E===b&&Z.id===F;ve.setState(Z,E,tn)}let et=!1;Z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==At.state.version||we.outputColorSpace!==Ee||B.isBatchedMesh&&we.batching===!1||!B.isBatchedMesh&&we.batching===!0||B.isBatchedMesh&&we.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&we.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&we.instancing===!1||!B.isInstancedMesh&&we.instancing===!0||B.isSkinnedMesh&&we.skinning===!1||!B.isSkinnedMesh&&we.skinning===!0||B.isInstancedMesh&&we.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&we.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&we.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&we.instancingMorph===!1&&B.morphTexture!==null||we.envMap!==Te||Z.fog===!0&&we.fog!==de||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ve.numPlanes||we.numIntersection!==ve.numIntersection)||we.vertexAlphas!==De||we.vertexTangents!==Oe||we.morphTargets!==Ce||we.morphNormals!==Je||we.morphColors!==ft||we.toneMapping!==ht||we.morphTargetsCount!==Qe)&&(et=!0):(et=!0,we.__version=Z.version);let an=we.currentProgram;et===!0&&(an=zs(Z,O,B));let Ji=!1,Kt=!1,pa=!1;const mt=an.getUniforms(),ni=we.uniforms;if(z.useProgram(an.program)&&(Ji=!0,Kt=!0,pa=!0),Z.id!==F&&(F=Z.id,Kt=!0),Ji||b!==E){mt.setValue(L,"projectionMatrix",E.projectionMatrix),mt.setValue(L,"viewMatrix",E.matrixWorldInverse);const tn=mt.map.cameraPosition;tn!==void 0&&tn.setValue(L,me.setFromMatrixPosition(E.matrixWorld)),V.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Kt=!0,pa=!0)}if(B.isSkinnedMesh){mt.setOptional(L,B,"bindMatrix"),mt.setOptional(L,B,"bindMatrixInverse");const tn=B.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),mt.setValue(L,"boneTexture",tn.boneTexture,se))}B.isBatchedMesh&&(mt.setOptional(L,B,"batchingTexture"),mt.setValue(L,"batchingTexture",B._matricesTexture,se),mt.setOptional(L,B,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",B._indirectTexture,se),mt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",B._colorsTexture,se));const ma=K.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0)&&ze.update(B,K,an),(Kt||we.receiveShadow!==B.receiveShadow)&&(we.receiveShadow=B.receiveShadow,mt.setValue(L,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ni.envMap.value=Te,ni.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&O.environment!==null&&(ni.envMapIntensity.value=O.environmentIntensity),Kt&&(mt.setValue(L,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&ap(ni,pa),de&&Z.fog===!0&&le.refreshFogUniforms(ni,de),le.refreshMaterialUniforms(ni,Z,$,W,m.state.transmissionRenderTarget[E.id]),Co.upload(L,Jc(we),ni,se)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Co.upload(L,Jc(we),ni,se),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(L,"center",B.center),mt.setValue(L,"modelViewMatrix",B.modelViewMatrix),mt.setValue(L,"normalMatrix",B.normalMatrix),mt.setValue(L,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const tn=Z.uniformsGroups;for(let ga=0,cp=tn.length;ga<cp;ga++){const eu=tn[ga];Ye.update(eu,an),Ye.bind(eu,an)}}return an}function ap(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function lp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,O,K){ee.get(E.texture).__webglTexture=O,ee.get(E.depthTexture).__webglTexture=K;const Z=ee.get(E);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const K=ee.get(E);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,K=0){w=E,U=O,P=K;let Z=!0,B=null,de=!1,Me=!1;if(E){const Te=ee.get(E);Te.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1):Te.__webglFramebuffer===void 0?se.setupRenderTarget(E):Te.__hasExternalTextures&&se.rebindTextures(E,ee.get(E.texture).__webglTexture,ee.get(E.depthTexture).__webglTexture);const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);const Oe=ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?B=Oe[O][K]:B=Oe[O],de=!0):E.samples>0&&se.useMultisampledRTT(E)===!1?B=ee.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[K]:B=Oe,S.copy(E.viewport),D.copy(E.scissor),Q=E.scissorTest}else S.copy(_e).multiplyScalar($).floor(),D.copy(ye).multiplyScalar($).floor(),Q=Be;if(z.bindFramebuffer(L.FRAMEBUFFER,B)&&Z&&z.drawBuffers(E,B),z.viewport(S),z.scissor(D),z.setScissorTest(Q),de){const Te=ee.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,K)}else if(Me){const Te=ee.get(E.texture),De=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,K||0,De)}F=-1},this.readRenderTargetPixels=function(E,O,K,Z,B,de,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){z.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Te=E.texture,De=Te.format,Oe=Te.type;if(!V.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Z&&K>=0&&K<=E.height-B&&L.readPixels(O,K,Z,B,Pe.convert(De),Pe.convert(Oe),de)}finally{const Te=w!==null?ee.get(w).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,O,K,Z,B,de,Me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){z.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Te=E.texture,De=Te.format,Oe=Te.type;if(!V.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-Z&&K>=0&&K<=E.height-B){const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(O,K,Z,B,Pe.convert(De),Pe.convert(Oe),0),L.flush();const Je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await ev(L,Je,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de)}finally{L.deleteBuffer(Ce),L.deleteSync(Je)}return de}}finally{const Te=w!==null?ee.get(w).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(E,O=null,K=0){E.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const Z=Math.pow(2,-K),B=Math.floor(E.image.width*Z),de=Math.floor(E.image.height*Z),Me=O!==null?O.x:0,Ee=O!==null?O.y:0;se.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Me,Ee,B,de),z.unbindTexture()},this.copyTextureToTexture=function(E,O,K=null,Z=null,B=0){E.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,K=null);let de,Me,Ee,Te,De,Oe;K!==null?(de=K.max.x-K.min.x,Me=K.max.y-K.min.y,Ee=K.min.x,Te=K.min.y):(de=E.image.width,Me=E.image.height,Ee=0,Te=0),Z!==null?(De=Z.x,Oe=Z.y):(De=0,Oe=0);const Ce=Pe.convert(O.format),Je=Pe.convert(O.type);se.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const ft=L.getParameter(L.UNPACK_ROW_LENGTH),ht=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yt=L.getParameter(L.UNPACK_SKIP_PIXELS),Qe=L.getParameter(L.UNPACK_SKIP_ROWS),we=L.getParameter(L.UNPACK_SKIP_IMAGES),At=E.isCompressedTexture?E.mipmaps[B]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,De,Oe,de,Me,Ce,Je,At.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,De,Oe,At.width,At.height,Ce,At.data):L.texSubImage2D(L.TEXTURE_2D,B,De,Oe,de,Me,Ce,Je,At),L.pixelStorei(L.UNPACK_ROW_LENGTH,ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),B===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(E,O,K=null,Z=null,B=0){E.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0);let de,Me,Ee,Te,De,Oe,Ce,Je,ft;const ht=E.isCompressedTexture?E.mipmaps[B]:E.image;K!==null?(de=K.max.x-K.min.x,Me=K.max.y-K.min.y,Ee=K.max.z-K.min.z,Te=K.min.x,De=K.min.y,Oe=K.min.z):(de=ht.width,Me=ht.height,Ee=ht.depth,Te=0,De=0,Oe=0),Z!==null?(Ce=Z.x,Je=Z.y,ft=Z.z):(Ce=0,Je=0,ft=0);const Yt=Pe.convert(O.format),Qe=Pe.convert(O.type);let we;if(O.isData3DTexture)se.setTexture3D(O,0),we=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)se.setTexture2DArray(O,0),we=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const At=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),Ji=L.getParameter(L.UNPACK_SKIP_ROWS),Kt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(we,B,Ce,Je,ft,de,Me,Ee,Yt,Qe,ht.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(we,B,Ce,Je,ft,de,Me,Ee,Yt,ht.data):L.texSubImage3D(we,B,Ce,Je,ft,de,Me,Ee,Yt,Qe,ht),L.pixelStorei(L.UNPACK_ROW_LENGTH,At),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ji),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Kt),B===0&&O.generateMipmaps&&L.generateMipmap(we),z.unbindTexture()},this.initRenderTarget=function(E){ee.get(E).__webglFramebuffer===void 0&&se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),z.unbindTexture()},this.resetState=function(){U=0,P=0,w=null,z.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nc?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===aa?"display-p3":"srgb"}}class uS extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new N;class zc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Pf=new N,Lf=new ot,If=new ot,hS=new N,Df=new je,ho=new N,Za=new Dn,Nf=new je,Ja=new Us;class dS extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Du,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(r),e.ray.intersectsSphere(Za)!==!1&&(Nf.copy(r).invert(),Ja.copy(e.ray).applyMatrix4(Nf),!(this.boundingBox!==null&&Ja.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ja)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Du?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===T_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Lf.fromBufferAttribute(r.attributes.skinIndex,e),If.fromBufferAttribute(r.attributes.skinWeight,e),Pf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=If.getComponent(s);if(o!==0){const a=Lf.getComponent(s);Df.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(hS.copy(Pf).applyMatrix4(Df),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ud extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Od extends Et{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Vt,u=Vt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uf=new je,pS=new je;class kc{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:pS;Uf.multiplyMatrices(a,t[s]),Uf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new kc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Od(t,e,e,on,mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ud),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Jl extends Gt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vr=new je,Of=new je,po=[],Ff=new In,mS=new je,cs=new Qt,us=new Dn;class gS extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,mS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),Ff.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(Ff)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),us.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vr),Of.multiplyMatrices(n,vr),cs.matrixWorld=Of,cs.raycast(e,po);for(let o=0,a=po.length;o<a;o++){const l=po[o];l.instanceId=s,l.object=this,t.push(l)}po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Od(new Float32Array(r*this.count),r,this.count,Pc,mn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fd extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new N,Wo=new N,Bf=new je,fs=new Us,mo=new Dn,Qa=new N,zf=new N;class Hc extends ut{constructor(e=new Nn,t=new Fd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Go.fromBufferAttribute(t,r-1),Wo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Go.distanceTo(Wo);e.setAttribute("lineDistance",new $n(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),mo.radius+=s,e.ray.intersectsSphere(mo)===!1)return;Bf.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Bf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),A=u.getX(v+1),M=go(this,e,fs,l,p,A);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=go(this,e,fs,l,v,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=go(this,e,fs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=go(this,e,fs,l,g-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function go(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(Go.fromBufferAttribute(o,r),Wo.fromBufferAttribute(o,s),t.distanceSqToSegment(Go,Wo,Qa,zf)>n)return;Qa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Qa);if(!(l<e.near||l>e.far))return{distance:l,point:zf.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const kf=new N,Hf=new N;class _S extends Hc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)kf.fromBufferAttribute(t,r),Hf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kf.distanceTo(Hf);e.setAttribute("lineDistance",new $n(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vS extends Hc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bd extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vf=new je,Ql=new Us,_o=new Dn,vo=new N;class xS extends ut{constructor(e=new Nn,t=new Bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;Vf.copy(r).invert(),Ql.copy(e.ray).applyMatrix4(Vf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const m=c.getX(g);vo.fromBufferAttribute(f,m),Gf(vo,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)vo.fromBufferAttribute(f,g),Gf(vo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gf(i,e,t,n,r,s,o){const a=Ql.distanceSqToPoint(i);if(a<t){const l=new N;Ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ds extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gd,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends Ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function xo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function MS(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yS(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Wf(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function zd(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Fs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class SS extends Fs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uu:s=e,a=2*t-n;break;case Ou:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:o=e,l=2*n-t;break;case Ou:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,A=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-d)*m+(1.5+d)*v+.5*g,T=d*m-d*v;for(let U=0;U!==a;++U)s[U]=p*o[u+U]+A*o[c+U]+M*o[l+U]+T*o[f+U];return s}}class ES extends Fs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class TS extends Fs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xo(t,this.TimeBufferType),this.values=xo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xo(e.times,Array),values:xo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new TS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ES(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new SS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&MS(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ba,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){const v=t[f+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Ls;class Zr extends On{constructor(e,t,n){super(e,t,n)}}Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Ps;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class kd extends On{}kd.prototype.ValueTypeName="color";class Gr extends On{}Gr.prototype.ValueTypeName="number";class bS extends Fs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Pn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Wr extends On{InterpolantFactoryMethodLinear(e){return new bS(this.times,this.values,this.getValueSize(),e)}}Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends On{constructor(e,t,n){super(e,t,n)}}Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Ps;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends On{}Xr.prototype.ValueTypeName="vector";class AS{constructor(e="",t=-1,n=[],r=b_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(RS(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(On.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=yS(l);l=Wf(l,1,u),c=Wf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Gr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,g,v){if(d.length!==0){const m=[],p=[];zd(d,m,p,g),m.length!==0&&v.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)d[h[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let A=0;A!==h[g].morphTargets.length;++A){const M=h[g];m.push(M.time),p.push(M.morphTarget===v?1:0)}r.push(new Gr(".morphTargetInfluence["+v+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(Xr,d+".position",h,"pos",r),n(Wr,d+".quaternion",h,"rot",r),n(Xr,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gr;case"vector":case"vector2":case"vector3":case"vector4":return Xr;case"color":return kd;case"quaternion":return Wr;case"bool":case"boolean":return Zr;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function RS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wS(i.type);if(i.times===void 0){const t=[],n=[];zd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class CS{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const PS=new CS;class Qr{constructor(e){this.manager=e!==void 0?e:PS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class LS extends Error{constructor(e,t){super(e),this.response=t}}class Hd extends Qr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=gi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:r});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){A();function A(){f.read().then(({done:M,value:T})=>{if(M)p.close();else{v+=T.byteLength;const U=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let P=0,w=u.length;P<w;P++){const F=u[P];F.onProgress&&F.onProgress(U)}p.enqueue(T),A()}},M=>{p.error(M)})}}});return new Response(m)}else throw new LS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{gi.add(e,c);const u=Gn[e];delete Gn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class IS extends Qr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Is("img");function l(){u(),gi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Po extends Qr{constructor(e){super(e)}load(e,t,n,r){const s=new Et,o=new IS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ua extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const el=new je,Xf=new N,jf=new N;class Vc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xf),jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jf),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DS extends Vc{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class NS extends ua{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new DS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qf=new je,hs=new N,tl=new N;class US extends Vc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(hs),tl.copy(n.position),tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tl),n.updateMatrixWorld(),r.makeTranslation(-hs.x,-hs.y,-hs.z),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf)}}class OS extends ua{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new US}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class FS extends Vc{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vd extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new FS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class BS extends ua{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ss{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zS extends Qr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),gi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});gi.add(e,l),s.manager.itemStart(e)}}const Gc="\\[\\]\\.:\\/",kS=new RegExp("["+Gc+"]","g"),Wc="[^"+Gc+"]",HS="[^"+Gc.replace("\\.","")+"]",VS=/((?:WC+[\/:])*)/.source.replace("WC",Wc),GS=/(WCOD+)?/.source.replace("WCOD",HS),WS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),XS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),jS=new RegExp("^"+VS+GS+WS+XS+"$"),qS=["material","materials","bones","map"];class YS{constructor(e,t,n){const r=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kS,"")}static parseTrackName(e){const t=jS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);qS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=YS;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);function Kf(i,e){if(e===A_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kl||e===md){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Kl)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class KS extends Qr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new hE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new dE(t)}),this.register(function(t){return new pE(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ss.extractUrlBase(e);o=Ss.resolveURL(c,this.path)}else o=Ss.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Hd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gd){try{o[qe.KHR_BINARY_GLTF]=new mE(e)}catch(f){r&&r(f);return}s=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new RE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case qe.KHR_MATERIALS_UNLIT:o[f]=new JS;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[f]=new gE(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[f]=new _E;break;case qe.KHR_MESH_QUANTIZATION:o[f]=new vE;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function $S(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ZS{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ct);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new OS(u),c.distance=f;break;case"spot":c=new NS(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class JS{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Hi}extendParams(e,t,n){const r=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ct),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ft))}return Promise.all(r)}}class QS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class eE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(s)}}class tE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class nE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class iE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ct)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class rE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class sE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],Ct),Promise.all(s)}}class oE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class aE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],Ct),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(s)}}class lE{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class cE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class uE{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class fE{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hE{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dE{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class pE{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==rn.TRIANGLES&&c.mode!==rn.TRIANGLE_STRIP&&c.mode!==rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const v=new je,m=new N,p=new Pn,A=new N(1,1,1),M=new gS(g.geometry,g.material,h);for(let T=0;T<h;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&A.fromBufferAttribute(l.SCALE,T),M.setMatrixAt(T,v.compose(m,p,A));for(const T in l)if(T==="_COLOR_0"){const U=l[T];M.instanceColor=new Jl(U.array,U.itemSize,U.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);ut.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Gd="glTF",ds=12,$f={JSON:1313821514,BIN:5130562};class mE{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ds,s=new DataView(e,ds);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===$f.JSON){const c=new Uint8Array(e,ds+o,a);this.content=n.decode(c)}else if(l===$f.BIN){const c=ds+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=ec[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=ec[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Ir[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const v=d.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}f(d)},a,c,Ct,h)})})}}class _E{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vE{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Wd extends Fs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,g=e*c,v=g-c,m=-2*d+3*h,p=d-h,A=1-m,M=p-h+f;for(let T=0;T!==a;T++){const U=o[v+T+a],P=o[v+T+l]*u,w=o[g+T+a],F=o[g+T]*u;s[T]=A*U+M*P+m*w+p*F}return s}}const xE=new Pn;class ME extends Wd{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return xE.fromArray(s).normalize().toArray(s),s}}const rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zf={9728:Vt,9729:Jt,9984:sd,9985:Eo,9986:ms,9987:Yn},Jf={33071:mi,33648:Bo,10497:Br},nl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ec={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yE={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Ps},il={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function SE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function Di(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function EE(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function TE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bE(i){let e;const t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rl(t.attributes):e=i.indices+":"+rl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+rl(i.targets[n]);return e}function rl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function tc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const wE=new je;class RE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $S,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Po(this.options.manager):this.textureLoader=new zS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Di(s,a,r),jn(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Ss.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=nl[r.type],a=Ir[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Gt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=nl[r.type],c=Ir[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(d&&d!==f){const p=Math.floor(h/d),A="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let M=t.cache.get(A);M||(v=new c(a,p*d,r.count*d/u),M=new fS(v,d/u),t.cache.add(A,M)),m=new zc(M,l,h%d/u,g)}else a===null?v=new c(r.count*l):v=new c(a,h,r.count*l),m=new Gt(v,l,g);if(r.sparse!==void 0){const p=nl.SCALAR,A=Ir[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,T=r.sparse.values.byteOffset||0,U=new A(o[1],M,r.sparse.count*p),P=new c(o[2],T,r.sparse.count*l);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,F=U.length;w<F;w++){const b=U[w];if(m.setX(b,P[w*l]),l>=2&&m.setY(b,P[w*l+1]),l>=3&&m.setZ(b,P[w*l+2]),l>=4&&m.setW(b,P[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Zf[h.magFilter]||Jt,u.minFilter=Zf[h.minFilter]||Yn,u.wrapS=Jf[h.wrapS]||Br,u.wrapT=Jf[h.wrapT]||Br,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Et(v);m.needsUpdate=!0,h(m)}),t.load(Ss.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),jn(f,o),f.userData.mimeType=o.mimeType||AE(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Bd,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Fd,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ds}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const f=r[qe.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Ct),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ft)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=An);const u=s.alphaMode||il.OPAQUE;if(u===il.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===il.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Hi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Hi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Hi){const f=s.emissiveFactor;a.emissive=new ke().setRGB(f[0],f[1],f[2],Ct)}return s.emissiveTexture!==void 0&&o!==Hi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ft)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),jn(f,s),t.associations.set(f,{materials:e}),s.extensions&&Di(r,f,s),f})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Qf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=bE(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Qf(new Nn,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?SE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],m=o[d];let p;const A=c[d];if(m.mode===rn.TRIANGLES||m.mode===rn.TRIANGLE_STRIP||m.mode===rn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new dS(v,A):new Qt(v,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===rn.TRIANGLE_STRIP?p.geometry=Kf(p.geometry,md):m.mode===rn.TRIANGLE_FAN&&(p.geometry=Kf(p.geometry,Kl));else if(m.mode===rn.LINES)p=new _S(v,A);else if(m.mode===rn.LINE_STRIP)p=new Hc(v,A);else if(m.mode===rn.LINE_LOOP)p=new vS(v,A);else if(m.mode===rn.POINTS)p=new xS(v,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&TE(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),jn(p,s),m.extensions&&Di(r,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Di(r,f[0],s),f[0];const h=new Vi;s.extensions&&Di(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(vd.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Fc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new je;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new kc(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],g=r.samplers[d.sampler],v=d.target,m=v.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,A=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],v=f[3],m=f[4],p=[];for(let A=0,M=h.length;A<M;A++){const T=h[A],U=d[A],P=g[A],w=v[A],F=m[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const b=n._createAnimationTracks(T,U,P,w,F);if(b)for(let S=0;S<b.length;S++)p.push(b[S])}return new AS(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){!d.isSkinnedMesh||d.bind(h,wE)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Ud:c.length>1?u=new Vi:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),jn(u,s),s.extensions&&Di(n,u,s),s.matrix!==void 0){const f=new je;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Vi;n.name&&(s.name=r.createUniqueName(n.name)),jn(s,n),n.extensions&&Di(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof Rn||h instanceof Et)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];ui[s.path]===ui.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(ui[s.path]){case ui.weights:c=Gr;break;case ui.rotation:c=Wr;break;case ui.position:case ui.scale:c=Xr;break;default:switch(n.itemSize){case 1:c=Gr;break;case 2:case 3:default:c=Xr;break}break}const u=r.interpolation!==void 0?yE[r.interpolation]:Ls,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+ui[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=tc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Wr?ME:Wd;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function CE(i,e,t){const n=e.attributes,r=new In;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=tc(Ir[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const v=tc(Ir[h.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Dn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Qf(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ec[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Ze.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),jn(i,e),CE(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?EE(i,e.targets,t):i})}const eh={type:"change"},sl={type:"start"},th={type:"end"},Mo=new Us,nh=new di,PE=Math.cos(70*vd.DEG2RAD);class LE extends Ki{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",ce),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(eh),n.update(),s=r.NONE},this.update=function(){const x=new N,X=new Pn().setFromUnitVectors(e.up,new N(0,1,0)),q=X.clone().invert(),J=new N,ue=new Pn,Ae=new N,Ue=2*Math.PI;return function(_t=null){const $e=n.object.position;x.copy($e).sub(n.target),x.applyQuaternion(X),a.setFromVector3(x),n.autoRotate&&s===r.NONE&&Q(S(_t)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let vt=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(vt)&&isFinite(pt)&&(vt<-Math.PI?vt+=Ue:vt>Math.PI&&(vt-=Ue),pt<-Math.PI?pt+=Ue:pt>Math.PI&&(pt-=Ue),vt<=pt?a.theta=Math.max(vt,Math.min(pt,a.theta)):a.theta=a.theta>(vt+pt)/2?Math.max(vt,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ti=!1;if(n.zoomToCursor&&P||n.object.isOrthographicCamera)a.radius=_e(a.radius);else{const bt=a.radius;a.radius=_e(a.radius*c),ti=bt!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(q),$e.copy(n.target).add(x),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&P){let bt=null;if(n.object.isPerspectiveCamera){const Fn=x.length();bt=_e(Fn*c);const Ti=Fn-bt;n.object.position.addScaledVector(T,Ti),n.object.updateMatrixWorld(),ti=!!Ti}else if(n.object.isOrthographicCamera){const Fn=new N(U.x,U.y,0);Fn.unproject(n.object);const Ti=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ti=Ti!==n.object.zoom;const ts=new N(U.x,U.y,0);ts.unproject(n.object),n.object.position.sub(ts).add(Fn),n.object.updateMatrixWorld(),bt=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(bt).add(n.object.position):(Mo.origin.copy(n.object.position),Mo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Mo.direction))<PE?e.lookAt(n.target):(nh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Mo.intersectPlane(nh,n.target))))}else if(n.object.isOrthographicCamera){const bt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),bt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ti=!0)}return c=1,P=!1,ti||J.distanceToSquared(n.object.position)>o||8*(1-ue.dot(n.object.quaternion))>o||Ae.distanceToSquared(n.target)>o?(n.dispatchEvent(eh),J.copy(n.object.position),ue.copy(n.object.quaternion),Ae.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pe),n.domElement.removeEventListener("pointerdown",se),n.domElement.removeEventListener("pointercancel",_),n.domElement.removeEventListener("wheel",G),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",_),n.domElement.getRootNode().removeEventListener("keydown",le,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ce),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Yf,l=new Yf;let c=1;const u=new N,f=new Ie,h=new Ie,d=new Ie,g=new Ie,v=new Ie,m=new Ie,p=new Ie,A=new Ie,M=new Ie,T=new N,U=new Ie;let P=!1;const w=[],F={};let b=!1;function S(x){return x!==null?2*Math.PI/60*n.autoRotateSpeed*x:2*Math.PI/60/60*n.autoRotateSpeed}function D(x){const X=Math.abs(x*.01);return Math.pow(.95,n.zoomSpeed*X)}function Q(x){l.theta-=x}function Y(x){l.phi-=x}const te=function(){const x=new N;return function(q,J){x.setFromMatrixColumn(J,0),x.multiplyScalar(-q),u.add(x)}}(),ne=function(){const x=new N;return function(q,J){n.screenSpacePanning===!0?x.setFromMatrixColumn(J,1):(x.setFromMatrixColumn(J,0),x.crossVectors(n.object.up,x)),x.multiplyScalar(q),u.add(x)}}(),W=function(){const x=new N;return function(q,J){const ue=n.domElement;if(n.object.isPerspectiveCamera){const Ae=n.object.position;x.copy(Ae).sub(n.target);let Ue=x.length();Ue*=Math.tan(n.object.fov/2*Math.PI/180),te(2*q*Ue/ue.clientHeight,n.object.matrix),ne(2*J*Ue/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(te(q*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),ne(J*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function he(x,X){if(!n.zoomToCursor)return;P=!0;const q=n.domElement.getBoundingClientRect(),J=x-q.left,ue=X-q.top,Ae=q.width,Ue=q.height;U.x=J/Ae*2-1,U.y=-(ue/Ue)*2+1,T.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function _e(x){return Math.max(n.minDistance,Math.min(n.maxDistance,x))}function ye(x){f.set(x.clientX,x.clientY)}function Be(x){he(x.clientX,x.clientX),p.set(x.clientX,x.clientY)}function Ge(x){g.set(x.clientX,x.clientY)}function re(x){h.set(x.clientX,x.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const X=n.domElement;Q(2*Math.PI*d.x/X.clientHeight),Y(2*Math.PI*d.y/X.clientHeight),f.copy(h),n.update()}function fe(x){A.set(x.clientX,x.clientY),M.subVectors(A,p),M.y>0?$(D(M.y)):M.y<0&&H(D(M.y)),p.copy(A),n.update()}function Se(x){v.set(x.clientX,x.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),W(m.x,m.y),g.copy(v),n.update()}function me(x){he(x.clientX,x.clientY),x.deltaY<0?H(D(x.deltaY)):x.deltaY>0&&$(D(x.deltaY)),n.update()}function Le(x){let X=!1;switch(x.code){case n.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),X=!0;break}X&&(x.preventDefault(),n.update())}function Fe(x){if(w.length===1)f.set(x.pageX,x.pageY);else{const X=be(x),q=.5*(x.pageX+X.x),J=.5*(x.pageY+X.y);f.set(q,J)}}function Ne(x){if(w.length===1)g.set(x.pageX,x.pageY);else{const X=be(x),q=.5*(x.pageX+X.x),J=.5*(x.pageY+X.y);g.set(q,J)}}function nt(x){const X=be(x),q=x.pageX-X.x,J=x.pageY-X.y,ue=Math.sqrt(q*q+J*J);p.set(0,ue)}function L(x){n.enableZoom&&nt(x),n.enablePan&&Ne(x)}function R(x){n.enableZoom&&nt(x),n.enableRotate&&Fe(x)}function I(x){if(w.length==1)h.set(x.pageX,x.pageY);else{const q=be(x),J=.5*(x.pageX+q.x),ue=.5*(x.pageY+q.y);h.set(J,ue)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const X=n.domElement;Q(2*Math.PI*d.x/X.clientHeight),Y(2*Math.PI*d.y/X.clientHeight),f.copy(h)}function V(x){if(w.length===1)v.set(x.pageX,x.pageY);else{const X=be(x),q=.5*(x.pageX+X.x),J=.5*(x.pageY+X.y);v.set(q,J)}m.subVectors(v,g).multiplyScalar(n.panSpeed),W(m.x,m.y),g.copy(v)}function z(x){const X=be(x),q=x.pageX-X.x,J=x.pageY-X.y,ue=Math.sqrt(q*q+J*J);A.set(0,ue),M.set(0,Math.pow(A.y/p.y,n.zoomSpeed)),$(M.y),p.copy(A);const Ae=(x.pageX+X.x)*.5,Ue=(x.pageY+X.y)*.5;he(Ae,Ue)}function ie(x){n.enableZoom&&z(x),n.enablePan&&V(x)}function ee(x){n.enableZoom&&z(x),n.enableRotate&&I(x)}function se(x){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(x.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",_)),!xe(x)&&(ze(x),x.pointerType==="touch"?ve(x):C(x)))}function y(x){n.enabled!==!1&&(x.pointerType==="touch"?oe(x):j(x))}function _(x){switch(Re(x),w.length){case 0:n.domElement.releasePointerCapture(x.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",_),n.dispatchEvent(th),s=r.NONE;break;case 1:const X=w[0],q=F[X];ve({pointerId:X,pageX:q.x,pageY:q.y});break}}function C(x){let X;switch(x.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Qi.DOLLY:if(n.enableZoom===!1)return;Be(x),s=r.DOLLY;break;case Qi.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enablePan===!1)return;Ge(x),s=r.PAN}else{if(n.enableRotate===!1)return;ye(x),s=r.ROTATE}break;case Qi.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enableRotate===!1)return;ye(x),s=r.ROTATE}else{if(n.enablePan===!1)return;Ge(x),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(sl)}function j(x){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;re(x);break;case r.DOLLY:if(n.enableZoom===!1)return;fe(x);break;case r.PAN:if(n.enablePan===!1)return;Se(x);break}}function G(x){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(x.preventDefault(),n.dispatchEvent(sl),me(k(x)),n.dispatchEvent(th))}function k(x){const X=x.deltaMode,q={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(X){case 1:q.deltaY*=16;break;case 2:q.deltaY*=100;break}return x.ctrlKey&&!b&&(q.deltaY*=10),q}function le(x){x.key==="Control"&&(b=!0,n.domElement.getRootNode().addEventListener("keyup",ae,{passive:!0,capture:!0}))}function ae(x){x.key==="Control"&&(b=!1,n.domElement.getRootNode().removeEventListener("keyup",ae,{passive:!0,capture:!0}))}function ce(x){n.enabled===!1||n.enablePan===!1||Le(x)}function ve(x){switch(Pe(x),w.length){case 1:switch(n.touches.ONE){case er.ROTATE:if(n.enableRotate===!1)return;Fe(x),s=r.TOUCH_ROTATE;break;case er.PAN:if(n.enablePan===!1)return;Ne(x),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case er.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(x),s=r.TOUCH_DOLLY_PAN;break;case er.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(x),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(sl)}function oe(x){switch(Pe(x),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;I(x),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;V(x),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(x),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(x),n.update();break;default:s=r.NONE}}function pe(x){n.enabled!==!1&&x.preventDefault()}function ze(x){w.push(x.pointerId)}function Re(x){delete F[x.pointerId];for(let X=0;X<w.length;X++)if(w[X]==x.pointerId){w.splice(X,1);return}}function xe(x){for(let X=0;X<w.length;X++)if(w[X]==x.pointerId)return!0;return!1}function Pe(x){let X=F[x.pointerId];X===void 0&&(X=new Ie,F[x.pointerId]=X),X.set(x.pageX,x.pageY)}function be(x){const X=x.pointerId===w[0]?w[1]:w[0];return F[X]}n.domElement.addEventListener("contextmenu",pe),n.domElement.addEventListener("pointerdown",se),n.domElement.addEventListener("pointercancel",_),n.domElement.addEventListener("wheel",G,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}class IE{static createButton(e,t={}){const n=document.createElement("button");function r(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width",38),d.setAttribute("height",38),d.style.position="absolute",d.style.right="20px",d.style.top="20px",d.addEventListener("click",function(){c.end()}),h.appendChild(d);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),d.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let c=null;async function u(h){h.addEventListener("end",f),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=h}function f(){c.removeEventListener("end",f),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(h=>{console.warn(h)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var Xo=function(){return Xo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Xo.apply(this,arguments)};var Yi;(function(i){var e=function(){function o(a,l,c,u){if(this.version=a,this.errorCorrectionLevel=l,this.modules=[],this.isFunction=[],a<o.MIN_VERSION||a>o.MAX_VERSION)throw new RangeError("Version value out of range");if(u<-1||u>7)throw new RangeError("Mask value out of range");this.size=a*4+17;for(var f=[],h=0;h<this.size;h++)f.push(!1);for(var h=0;h<this.size;h++)this.modules.push(f.slice()),this.isFunction.push(f.slice());this.drawFunctionPatterns();var d=this.addEccAndInterleave(c);if(this.drawCodewords(d),u==-1)for(var g=1e9,h=0;h<8;h++){this.applyMask(h),this.drawFormatBits(h);var v=this.getPenaltyScore();v<g&&(u=h,g=v),this.applyMask(h)}r(0<=u&&u<=7),this.mask=u,this.applyMask(u),this.drawFormatBits(u),this.isFunction=[]}return o.encodeText=function(a,l){var c=i.QrSegment.makeSegments(a);return o.encodeSegments(c,l)},o.encodeBinary=function(a,l){var c=i.QrSegment.makeBytes(a);return o.encodeSegments([c],l)},o.encodeSegments=function(a,l,c,u,f,h){if(c===void 0&&(c=1),u===void 0&&(u=40),f===void 0&&(f=-1),h===void 0&&(h=!0),!(o.MIN_VERSION<=c&&c<=u&&u<=o.MAX_VERSION)||f<-1||f>7)throw new RangeError("Invalid value");var d,g;for(d=c;;d++){var v=o.getNumDataCodewords(d,l)*8,m=s.getTotalBits(a,d);if(m<=v){g=m;break}if(d>=u)throw new RangeError("Data too long")}for(var p=0,A=[o.Ecc.MEDIUM,o.Ecc.QUARTILE,o.Ecc.HIGH];p<A.length;p++){var M=A[p];h&&g<=o.getNumDataCodewords(d,M)*8&&(l=M)}for(var T=[],U=0,P=a;U<P.length;U++){var w=P[U];t(w.mode.modeBits,4,T),t(w.numChars,w.mode.numCharCountBits(d),T);for(var F=0,b=w.getData();F<b.length;F++){var S=b[F];T.push(S)}}r(T.length==g);var D=o.getNumDataCodewords(d,l)*8;r(T.length<=D),t(0,Math.min(4,D-T.length),T),t(0,(8-T.length%8)%8,T),r(T.length%8==0);for(var Q=236;T.length<D;Q^=253)t(Q,8,T);for(var Y=[];Y.length*8<T.length;)Y.push(0);return T.forEach(function(te,ne){return Y[ne>>>3]|=te<<7-(ne&7)}),new o(d,l,Y,f)},o.prototype.getModule=function(a,l){return 0<=a&&a<this.size&&0<=l&&l<this.size&&this.modules[l][a]},o.prototype.getModules=function(){return this.modules},o.prototype.drawFunctionPatterns=function(){for(var a=0;a<this.size;a++)this.setFunctionModule(6,a,a%2==0),this.setFunctionModule(a,6,a%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var l=this.getAlignmentPatternPositions(),c=l.length,a=0;a<c;a++)for(var u=0;u<c;u++)a==0&&u==0||a==0&&u==c-1||a==c-1&&u==0||this.drawAlignmentPattern(l[a],l[u]);this.drawFormatBits(0),this.drawVersion()},o.prototype.drawFormatBits=function(a){for(var l=this.errorCorrectionLevel.formatBits<<3|a,c=l,u=0;u<10;u++)c=c<<1^(c>>>9)*1335;var f=(l<<10|c)^21522;r(f>>>15==0);for(var u=0;u<=5;u++)this.setFunctionModule(8,u,n(f,u));this.setFunctionModule(8,7,n(f,6)),this.setFunctionModule(8,8,n(f,7)),this.setFunctionModule(7,8,n(f,8));for(var u=9;u<15;u++)this.setFunctionModule(14-u,8,n(f,u));for(var u=0;u<8;u++)this.setFunctionModule(this.size-1-u,8,n(f,u));for(var u=8;u<15;u++)this.setFunctionModule(8,this.size-15+u,n(f,u));this.setFunctionModule(8,this.size-8,!0)},o.prototype.drawVersion=function(){if(!(this.version<7)){for(var a=this.version,l=0;l<12;l++)a=a<<1^(a>>>11)*7973;var c=this.version<<12|a;r(c>>>18==0);for(var l=0;l<18;l++){var u=n(c,l),f=this.size-11+l%3,h=Math.floor(l/3);this.setFunctionModule(f,h,u),this.setFunctionModule(h,f,u)}}},o.prototype.drawFinderPattern=function(a,l){for(var c=-4;c<=4;c++)for(var u=-4;u<=4;u++){var f=Math.max(Math.abs(u),Math.abs(c)),h=a+u,d=l+c;0<=h&&h<this.size&&0<=d&&d<this.size&&this.setFunctionModule(h,d,f!=2&&f!=4)}},o.prototype.drawAlignmentPattern=function(a,l){for(var c=-2;c<=2;c++)for(var u=-2;u<=2;u++)this.setFunctionModule(a+u,l+c,Math.max(Math.abs(u),Math.abs(c))!=1)},o.prototype.setFunctionModule=function(a,l,c){this.modules[l][a]=c,this.isFunction[l][a]=!0},o.prototype.addEccAndInterleave=function(a){var l=this.version,c=this.errorCorrectionLevel;if(a.length!=o.getNumDataCodewords(l,c))throw new RangeError("Invalid argument");for(var u=o.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l],f=o.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l],h=Math.floor(o.getNumRawDataModules(l)/8),d=u-h%u,g=Math.floor(h/u),v=[],m=o.reedSolomonComputeDivisor(f),p=0,A=0;p<u;p++){var M=a.slice(A,A+g-f+(p<d?0:1));A+=M.length;var T=o.reedSolomonComputeRemainder(M,m);p<d&&M.push(0),v.push(M.concat(T))}for(var U=[],P=function(w){v.forEach(function(F,b){(w!=g-f||b>=d)&&U.push(F[w])})},p=0;p<v[0].length;p++)P(p);return r(U.length==h),U},o.prototype.drawCodewords=function(a){if(a.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var l=0,c=this.size-1;c>=1;c-=2){c==6&&(c=5);for(var u=0;u<this.size;u++)for(var f=0;f<2;f++){var h=c-f,d=(c+1&2)==0,g=d?this.size-1-u:u;!this.isFunction[g][h]&&l<a.length*8&&(this.modules[g][h]=n(a[l>>>3],7-(l&7)),l++)}}r(l==a.length*8)},o.prototype.applyMask=function(a){if(a<0||a>7)throw new RangeError("Mask value out of range");for(var l=0;l<this.size;l++)for(var c=0;c<this.size;c++){var u=void 0;switch(a){case 0:u=(c+l)%2==0;break;case 1:u=l%2==0;break;case 2:u=c%3==0;break;case 3:u=(c+l)%3==0;break;case 4:u=(Math.floor(c/3)+Math.floor(l/2))%2==0;break;case 5:u=c*l%2+c*l%3==0;break;case 6:u=(c*l%2+c*l%3)%2==0;break;case 7:u=((c+l)%2+c*l%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[l][c]&&u&&(this.modules[l][c]=!this.modules[l][c])}},o.prototype.getPenaltyScore=function(){for(var a=0,l=0;l<this.size;l++){for(var c=!1,u=0,f=[0,0,0,0,0,0,0],h=0;h<this.size;h++)this.modules[l][h]==c?(u++,u==5?a+=o.PENALTY_N1:u>5&&a++):(this.finderPenaltyAddHistory(u,f),c||(a+=this.finderPenaltyCountPatterns(f)*o.PENALTY_N3),c=this.modules[l][h],u=1);a+=this.finderPenaltyTerminateAndCount(c,u,f)*o.PENALTY_N3}for(var h=0;h<this.size;h++){for(var c=!1,d=0,f=[0,0,0,0,0,0,0],l=0;l<this.size;l++)this.modules[l][h]==c?(d++,d==5?a+=o.PENALTY_N1:d>5&&a++):(this.finderPenaltyAddHistory(d,f),c||(a+=this.finderPenaltyCountPatterns(f)*o.PENALTY_N3),c=this.modules[l][h],d=1);a+=this.finderPenaltyTerminateAndCount(c,d,f)*o.PENALTY_N3}for(var l=0;l<this.size-1;l++)for(var h=0;h<this.size-1;h++){var g=this.modules[l][h];g==this.modules[l][h+1]&&g==this.modules[l+1][h]&&g==this.modules[l+1][h+1]&&(a+=o.PENALTY_N2)}for(var v=0,m=0,p=this.modules;m<p.length;m++){var A=p[m];v=A.reduce(function(U,P){return U+(P?1:0)},v)}var M=this.size*this.size,T=Math.ceil(Math.abs(v*20-M*10)/M)-1;return r(0<=T&&T<=9),a+=T*o.PENALTY_N4,r(0<=a&&a<=2568888),a},o.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var a=Math.floor(this.version/7)+2,l=this.version==32?26:Math.ceil((this.version*4+4)/(a*2-2))*2,c=[6],u=this.size-7;c.length<a;u-=l)c.splice(1,0,u);return c},o.getNumRawDataModules=function(a){if(a<o.MIN_VERSION||a>o.MAX_VERSION)throw new RangeError("Version number out of range");var l=(16*a+128)*a+64;if(a>=2){var c=Math.floor(a/7)+2;l-=(25*c-10)*c-55,a>=7&&(l-=36)}return r(208<=l&&l<=29648),l},o.getNumDataCodewords=function(a,l){return Math.floor(o.getNumRawDataModules(a)/8)-o.ECC_CODEWORDS_PER_BLOCK[l.ordinal][a]*o.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][a]},o.reedSolomonComputeDivisor=function(a){if(a<1||a>255)throw new RangeError("Degree out of range");for(var l=[],c=0;c<a-1;c++)l.push(0);l.push(1);for(var u=1,c=0;c<a;c++){for(var f=0;f<l.length;f++)l[f]=o.reedSolomonMultiply(l[f],u),f+1<l.length&&(l[f]^=l[f+1]);u=o.reedSolomonMultiply(u,2)}return l},o.reedSolomonComputeRemainder=function(a,l){for(var c=l.map(function(g){return 0}),u=function(g){var v=g^c.shift();c.push(0),l.forEach(function(m,p){return c[p]^=o.reedSolomonMultiply(m,v)})},f=0,h=a;f<h.length;f++){var d=h[f];u(d)}return c},o.reedSolomonMultiply=function(a,l){if(a>>>8!=0||l>>>8!=0)throw new RangeError("Byte out of range");for(var c=0,u=7;u>=0;u--)c=c<<1^(c>>>7)*285,c^=(l>>>u&1)*a;return r(c>>>8==0),c},o.prototype.finderPenaltyCountPatterns=function(a){var l=a[1];r(l<=this.size*3);var c=l>0&&a[2]==l&&a[3]==l*3&&a[4]==l&&a[5]==l;return(c&&a[0]>=l*4&&a[6]>=l?1:0)+(c&&a[6]>=l*4&&a[0]>=l?1:0)},o.prototype.finderPenaltyTerminateAndCount=function(a,l,c){return a&&(this.finderPenaltyAddHistory(l,c),l=0),l+=this.size,this.finderPenaltyAddHistory(l,c),this.finderPenaltyCountPatterns(c)},o.prototype.finderPenaltyAddHistory=function(a,l){l[0]==0&&(a+=this.size),l.pop(),l.unshift(a)},o.MIN_VERSION=1,o.MAX_VERSION=40,o.PENALTY_N1=3,o.PENALTY_N2=3,o.PENALTY_N3=40,o.PENALTY_N4=10,o.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],o.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o}();i.QrCode=e;function t(o,a,l){if(a<0||a>31||o>>>a!=0)throw new RangeError("Value out of range");for(var c=a-1;c>=0;c--)l.push(o>>>c&1)}function n(o,a){return(o>>>a&1)!=0}function r(o){if(!o)throw new Error("Assertion error")}var s=function(){function o(a,l,c){if(this.mode=a,this.numChars=l,this.bitData=c,l<0)throw new RangeError("Invalid argument");this.bitData=c.slice()}return o.makeBytes=function(a){for(var l=[],c=0,u=a;c<u.length;c++){var f=u[c];t(f,8,l)}return new o(o.Mode.BYTE,a.length,l)},o.makeNumeric=function(a){if(!o.isNumeric(a))throw new RangeError("String contains non-numeric characters");for(var l=[],c=0;c<a.length;){var u=Math.min(a.length-c,3);t(parseInt(a.substring(c,c+u),10),u*3+1,l),c+=u}return new o(o.Mode.NUMERIC,a.length,l)},o.makeAlphanumeric=function(a){if(!o.isAlphanumeric(a))throw new RangeError("String contains unencodable characters in alphanumeric mode");var l=[],c;for(c=0;c+2<=a.length;c+=2){var u=o.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c))*45;u+=o.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c+1)),t(u,11,l)}return c<a.length&&t(o.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c)),6,l),new o(o.Mode.ALPHANUMERIC,a.length,l)},o.makeSegments=function(a){return a==""?[]:o.isNumeric(a)?[o.makeNumeric(a)]:o.isAlphanumeric(a)?[o.makeAlphanumeric(a)]:[o.makeBytes(o.toUtf8ByteArray(a))]},o.makeEci=function(a){var l=[];if(a<0)throw new RangeError("ECI assignment value out of range");if(a<1<<7)t(a,8,l);else if(a<1<<14)t(2,2,l),t(a,14,l);else if(a<1e6)t(6,3,l),t(a,21,l);else throw new RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,l)},o.isNumeric=function(a){return o.NUMERIC_REGEX.test(a)},o.isAlphanumeric=function(a){return o.ALPHANUMERIC_REGEX.test(a)},o.prototype.getData=function(){return this.bitData.slice()},o.getTotalBits=function(a,l){for(var c=0,u=0,f=a;u<f.length;u++){var h=f[u],d=h.mode.numCharCountBits(l);if(h.numChars>=1<<d)return 1/0;c+=4+d+h.bitData.length}return c},o.toUtf8ByteArray=function(a){a=encodeURI(a);for(var l=[],c=0;c<a.length;c++)a.charAt(c)!="%"?l.push(a.charCodeAt(c)):(l.push(parseInt(a.substring(c+1,c+3),16)),c+=2);return l},o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",o}();i.QrSegment=s})(Yi||(Yi={}));(function(i){(function(e){var t=function(){function n(r,s){this.ordinal=r,this.formatBits=s}return n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),n}();e.Ecc=t})(i.QrCode||(i.QrCode={}))})(Yi||(Yi={}));(function(i){(function(e){var t=function(){function n(r,s){this.modeBits=r,this.numBitsCharCount=s}return n.prototype.numCharCountBits=function(r){return this.numBitsCharCount[Math.floor((r+7)/17)]},n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),n}();e.Mode=t})(i.QrSegment||(i.QrSegment={}))})(Yi||(Yi={}));var Sr=Yi,Xd="H",Xc={L:Sr.QrCode.Ecc.LOW,M:Sr.QrCode.Ecc.MEDIUM,Q:Sr.QrCode.Ecc.QUARTILE,H:Sr.QrCode.Ecc.HIGH},DE=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function jd(i){return i in Xc}function qd(i,e){e===void 0&&(e=0);var t=[];return i.forEach(function(n,r){var s=null;n.forEach(function(o,a){if(!o&&s!==null){t.push("M".concat(s+e," ").concat(r+e,"h").concat(a-s,"v1H").concat(s+e,"z")),s=null;return}if(a===n.length-1){if(!o)return;s===null?t.push("M".concat(a+e,",").concat(r+e," h1v1H").concat(a+e,"z")):t.push("M".concat(s+e,",").concat(r+e," h").concat(a+1-s,"v1H").concat(s+e,"z"));return}o&&s===null&&(s=a)})}),t.join("")}var jc={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:Xd,validator:function(i){return jd(i)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},NE=Xo(Xo({},jc),{renderAs:{type:String,required:!1,default:"canvas",validator:function(i){return["canvas","svg"].indexOf(i)>-1}}}),UE=ta({name:"QRCodeSvg",props:jc,setup:function(i){var e=sn(0),t=sn(""),n=function(){var r=i.value,s=i.level,o=i.margin,a=Sr.QrCode.encodeText(r,Xc[s]).getModules();e.value=a.length+o*2,t.value=qd(a,o)};return n(),Mc(n),function(){return xs("svg",{width:i.size,height:i.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(e.value," ").concat(e.value)},[xs("path",{fill:i.background,d:"M0,0 h".concat(e.value,"v").concat(e.value,"H0z")}),xs("path",{fill:i.foreground,d:t.value})])}}}),OE=ta({name:"QRCodeCanvas",props:jc,setup:function(i){var e=sn(null),t=function(){var n=i.value,r=i.level,s=i.size,o=i.margin,a=i.background,l=i.foreground,c=e.value;if(!!c){var u=c.getContext("2d");if(!!u){var f=Sr.QrCode.encodeText(n,Xc[r]).getModules(),h=f.length+o*2,d=window.devicePixelRatio||1,g=s/h*d;c.height=c.width=s*d,u.scale(g,g),u.fillStyle=a,u.fillRect(0,0,h,h),u.fillStyle=l,DE?u.fill(new Path2D(qd(f,o))):f.forEach(function(v,m){v.forEach(function(p,A){p&&u.fillRect(A+o,m+o,1,1)})})}}};return ia(t),Mc(t),function(){return xs("canvas",{ref:e,style:{width:"".concat(i.size,"px"),height:"".concat(i.size,"px")}})}}}),FE=ta({name:"Qrcode",render:function(){var i=this.$props,e=i.renderAs,t=i.value,n=i.size,r=i.margin,s=i.level,o=i.background,a=i.foreground,l=n>>>0,c=r>>>0,u=jd(s)?s:Xd;return xs(e==="svg"?UE:OE,{value:t,size:l,margin:c,level:u,background:o,foreground:a})},props:NE});const BE="/modelConfig/assets/backpack.3d83b71c.glb",zE="/modelConfig/assets/leather_normal.f6c5c11b.jpg",kE="/modelConfig/assets/metall_baseColor.0d78f3bc.jpg",ih="/modelConfig/assets/leather_baseColor.6a061347.jpg",HE="/modelConfig/assets/fabric_baseColor.bc411da3.jpg",VE="/modelConfig/assets/denim_baseColor.7b3bbc79.jpg",GE="/modelConfig/assets/leather_occlusion.07f2d177.jpg";const Yd=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},$i=i=>(cm("data-v-27e9213d"),i=i(),um(),i),WE=$i(()=>it("img",{src:kg,alt:""},null,-1)),XE=$i(()=>it("p",null,"See In Real Life",-1)),jE=[WE,XE],qE={class:"content"},YE={key:0,class:"popup"},KE=$i(()=>it("path",{d:"m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"},null,-1)),$E=[KE],ZE=$i(()=>it("div",{class:"text"}," Scan the QR code with your phone. Within 1-3 seconds the AR function opens on your phone. ",-1)),JE={class:"qr"},QE={id:"model"},eT={class:"selectors"},tT={class:"wrap body"},nT=$i(()=>it("div",{class:"title"},"BODY COLOR",-1)),iT={class:"item-wrap"},rT=["onClick"],sT={class:"circul-border"},oT={class:"text"},aT={class:"wrap metall"},lT=$i(()=>it("div",{class:"title"},"METAL COLOR",-1)),cT={class:"item-wrap"},uT=["onClick"],fT={class:"circul-border"},hT={class:"text"},dT={class:"wrap material"},pT=$i(()=>it("div",{class:"title"},"MATERIAL",-1)),mT={class:"item-wrap"},gT=["onClick"],_T={__name:"ModelConfig",setup(i){let e,t,n,r,s,o,a,l=sn("Brown"),c=sn("Silver"),u=sn("Leather"),f=sn(!1),h=sn(!1);const d=sn("https://www.linkedin.com/in/malina1337/"),g=sn("M"),v=sn("svg"),m=[{name:"Brown",color:"0xD38149"},{name:"Black",color:"0x373737"},{name:"Blue",color:"0x104D97"}],p=[{name:"Silver",color:"0xFFFFFF"},{name:"Gold",color:"0xE8CF62"},{name:"Black",color:"0x373737"}],A=[{name:"Leather",path:ih},{name:"Fabric",path:HE},{name:"Denim",path:VE}];let M={width:window.screen.width>500?400:200,height:window.screen.width>500?600:300};e=new uS,t=new kt(75,M.width/M.height,.1,1e3),t.position.z=5,n=new cS({antialias:!0,alpha:!0}),n.setSize(M.width,M.height),n.xr.enabled=!0;const T=new Vd(16777215,1);T.position.set(1,1,1).normalize(),e.add(T);const U=new BS(16777215,1);e.add(U),new KS().load(BE,function(te){r=te.scene,console.log(r,"model"),e.add(r),navigator.xr||console.warn("WebXR \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435."),w(r);const ne=new Po,W=ne.load(ih);ne.load(zE),ne.load(GE),s=new Ds({map:W,roughness:.3}),s.color.setHex("0xD38149"),r.traverse($=>{if($.isMesh&&$.name=="Mesh_1"){const he=new Po().load(kE);o=new Ds({map:he,metalness:.9,roughness:0}),o.color.setHex("0xFFFFFF"),$.material=o}else $.material=s})});function w(te){const ne=new In().setFromObject(te),W=ne.getCenter(new N),$=ne.getSize(new N);te.position.sub(W);const H=Math.max($.x,$.y,$.z),he=t.fov*(Math.PI/180);let _e=H/(2*Math.tan(he/2));t.position.z=_e*1.8,t.lookAt(0,0,0)}function F(te){s.color.setHex(te.color),s.needsUpdate=!0,l.value=te.name,console.log(l.value," selectedMainColor.value")}function b(te){o.color.setHex(te.color),o.needsUpdate=!0,c.value=te.name}function S(te){const W=new Po().load(te.path);s.map=W,s.needsUpdate=!0,s.roughness=te.name==="Leather"?.3:1,u.value=te.name}const D=new LE(t,n.domElement);D.enableDamping=!0,D.dampingFactor=.05,D.screenSpacePanning=!1,D.enableZoom=!1;function Q(){window.screen.width<=500?(h.value=!0,a.appendChild(IE.createButton(n))):f.value=!0}function Y(){D.update(),requestAnimationFrame(Y),n.render(e,t)}return ia(()=>{a=document.querySelector("#model"),a&&a.appendChild(n.domElement),Y()}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}),(te,ne)=>(fn(),fi(zt,null,[it("div",{class:"ar",onClick:Q},jE),it("div",qE,[Tn(f)?(fn(),fi("div",YE,[(fn(),fi("svg",{onClick:ne[0]||(ne[0]=W=>Rt(f)?f.value=!1:f=!1),class:"close","clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},$E)),ZE,it("div",JE,[Ht(FE,{value:d.value,level:g.value,"render-as":v.value,foreground:"#3f69e1"},null,8,["value","level","render-as"])])])):Zh("",!0),Pm(it("div",QE,null,512),[[Ug,!Tn(f)]])]),it("div",eT,[it("div",tT,[nT,it("div",iT,[(fn(),fi(zt,null,Sa(m,(W,$)=>it("div",{key:$,class:qn(["item",{selected:W.name==Tn(l)}]),onClick:H=>F(W)},[it("div",sT,[it("div",{class:qn(["circul",W.name.toLowerCase()])},null,2)]),it("div",oT,_a(W.name),1)],10,rT)),64))])]),it("div",aT,[lT,it("div",cT,[(fn(),fi(zt,null,Sa(p,(W,$)=>it("div",{key:$,class:qn(["item",{selected:W.name==Tn(c)}]),onClick:H=>b(W)},[it("div",fT,[it("div",{class:qn(["circul",W.name.toLowerCase()])},null,2)]),it("div",hT,_a(W.name),1)],10,uT)),64))])]),it("div",dT,[pT,it("div",mT,[(fn(),fi(zt,null,Sa(A,(W,$)=>it("div",{key:$,class:qn(["item",{selected:W.name==Tn(u)}]),onClick:H=>S(W)},_a(W.name),11,gT)),64))])])])],64))}},vT=Yd(_T,[["__scopeId","data-v-27e9213d"]]);const xT={components:{ModelConfig:vT},created(){},destroyed(){},methods:{},setup(){}};function MT(i,e,t,n,r,s){const o=Lm("ModelConfig");return fn(),Tc(o)}const yT=Yd(xT,[["render",MT]]);function ST(){return Kd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Kd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const ET=typeof Proxy=="function",TT="devtools-plugin:setup",bT="plugin:settings:set";let xr,nc;function AT(){var i;return xr!==void 0||(typeof window<"u"&&window.performance?(xr=!0,nc=window.performance):typeof global<"u"&&((i=global.perf_hooks)===null||i===void 0?void 0:i.performance)?(xr=!0,nc=global.perf_hooks.performance):xr=!1),xr}function wT(){return AT()?nc.now():Date.now()}class RT{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const a=e.settings[o];n[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return wT()}},t&&t.on(bT,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function CT(i,e){const t=i,n=Kd(),r=ST(),s=ET&&t.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(TT,i,e);else{const o=s?new RT(t,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var PT="store";function es(i,e){Object.keys(i).forEach(function(t){return e(i[t],t)})}function LT(i){return i!==null&&typeof i=="object"}function IT(i){return i&&typeof i.then=="function"}function DT(i,e){return function(){return i(e)}}function $d(i,e,t){return e.indexOf(i)<0&&(t&&t.prepend?e.unshift(i):e.push(i)),function(){var n=e.indexOf(i);n>-1&&e.splice(n,1)}}function Zd(i,e){i._actions=Object.create(null),i._mutations=Object.create(null),i._wrappedGetters=Object.create(null),i._modulesNamespaceMap=Object.create(null);var t=i.state;fa(i,t,[],i._modules.root,!0),qc(i,t,e)}function qc(i,e,t){var n=i._state;i.getters={},i._makeLocalGettersCache=Object.create(null);var r=i._wrappedGetters,s={};es(r,function(o,a){s[a]=DT(o,i),Object.defineProperty(i.getters,a,{get:function(){return s[a]()},enumerable:!0})}),i._state=Kr({data:e}),i.strict&&BT(i),n&&t&&i._withCommit(function(){n.data=null})}function fa(i,e,t,n,r){var s=!t.length,o=i._modules.getNamespace(t);if(n.namespaced&&(i._modulesNamespaceMap[o],i._modulesNamespaceMap[o]=n),!s&&!r){var a=Yc(e,t.slice(0,-1)),l=t[t.length-1];i._withCommit(function(){a[l]=n.state})}var c=n.context=NT(i,o,t);n.forEachMutation(function(u,f){var h=o+f;UT(i,h,u,c)}),n.forEachAction(function(u,f){var h=u.root?f:o+f,d=u.handler||u;OT(i,h,d,c)}),n.forEachGetter(function(u,f){var h=o+f;FT(i,h,u,c)}),n.forEachChild(function(u,f){fa(i,e,t.concat(f),u,r)})}function NT(i,e,t){var n=e==="",r={dispatch:n?i.dispatch:function(s,o,a){var l=jo(s,o,a),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=e+f),i.dispatch(f,c)},commit:n?i.commit:function(s,o,a){var l=jo(s,o,a),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=e+f),i.commit(f,c,u)}};return Object.defineProperties(r,{getters:{get:n?function(){return i.getters}:function(){return Jd(i,e)}},state:{get:function(){return Yc(i.state,t)}}}),r}function Jd(i,e){if(!i._makeLocalGettersCache[e]){var t={},n=e.length;Object.keys(i.getters).forEach(function(r){if(r.slice(0,n)===e){var s=r.slice(n);Object.defineProperty(t,s,{get:function(){return i.getters[r]},enumerable:!0})}}),i._makeLocalGettersCache[e]=t}return i._makeLocalGettersCache[e]}function UT(i,e,t,n){var r=i._mutations[e]||(i._mutations[e]=[]);r.push(function(o){t.call(i,n.state,o)})}function OT(i,e,t,n){var r=i._actions[e]||(i._actions[e]=[]);r.push(function(o){var a=t.call(i,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:i.getters,rootState:i.state},o);return IT(a)||(a=Promise.resolve(a)),i._devtoolHook?a.catch(function(l){throw i._devtoolHook.emit("vuex:error",l),l}):a})}function FT(i,e,t,n){i._wrappedGetters[e]||(i._wrappedGetters[e]=function(s){return t(n.state,n.getters,s.state,s.getters)})}function BT(i){wr(function(){return i._state.data},function(){},{deep:!0,flush:"sync"})}function Yc(i,e){return e.reduce(function(t,n){return t[n]},i)}function jo(i,e,t){return LT(i)&&i.type&&(t=e,e=i,i=i.type),{type:i,payload:e,options:t}}var zT="vuex bindings",rh="vuex:mutations",ol="vuex:actions",Mr="vuex",kT=0;function HT(i,e){CT({id:"org.vuejs.vuex",app:i,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[zT]},function(t){t.addTimelineLayer({id:rh,label:"Vuex Mutations",color:sh}),t.addTimelineLayer({id:ol,label:"Vuex Actions",color:sh}),t.addInspector({id:Mr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(n){if(n.app===i&&n.inspectorId===Mr)if(n.filter){var r=[];np(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[tp(e._modules.root,"")]}),t.on.getInspectorState(function(n){if(n.app===i&&n.inspectorId===Mr){var r=n.nodeId;Jd(e,r),n.state=WT(jT(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),t.on.editInspectorState(function(n){if(n.app===i&&n.inspectorId===Mr){var r=n.nodeId,s=n.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){n.set(e._state.data,s,n.state.value)})}}),e.subscribe(function(n,r){var s={};n.payload&&(s.payload=n.payload),s.state=r,t.notifyComponentUpdate(),t.sendInspectorTree(Mr),t.sendInspectorState(Mr),t.addTimelineEvent({layerId:rh,event:{time:Date.now(),title:n.type,data:s}})}),e.subscribeAction({before:function(n,r){var s={};n.payload&&(s.payload=n.payload),n._id=kT++,n._time=Date.now(),s.state=r,t.addTimelineEvent({layerId:ol,event:{time:n._time,title:n.type,groupId:n._id,subtitle:"start",data:s}})},after:function(n,r){var s={},o=Date.now()-n._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},n.payload&&(s.payload=n.payload),s.state=r,t.addTimelineEvent({layerId:ol,event:{time:Date.now(),title:n.type,groupId:n._id,subtitle:"end",data:s}})}})})}var sh=8702998,VT=6710886,GT=16777215,Qd={label:"namespaced",textColor:GT,backgroundColor:VT};function ep(i){return i&&i!=="root"?i.split("/").slice(-2,-1)[0]:"Root"}function tp(i,e){return{id:e||"root",label:ep(e),tags:i.namespaced?[Qd]:[],children:Object.keys(i._children).map(function(t){return tp(i._children[t],e+t+"/")})}}function np(i,e,t,n){n.includes(t)&&i.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:e.namespaced?[Qd]:[]}),Object.keys(e._children).forEach(function(r){np(i,e._children[r],t,n+r+"/")})}function WT(i,e,t){e=t==="root"?e:e[t];var n=Object.keys(e),r={state:Object.keys(i.state).map(function(o){return{key:o,editable:!0,value:i.state[o]}})};if(n.length){var s=XT(e);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?ep(o):o,editable:!1,value:ic(function(){return s[o]})}})}return r}function XT(i){var e={};return Object.keys(i).forEach(function(t){var n=t.split("/");if(n.length>1){var r=e,s=n.pop();n.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=ic(function(){return i[t]})}else e[t]=ic(function(){return i[t]})}),e}function jT(i,e){var t=e.split("/").filter(function(n){return n});return t.reduce(function(n,r,s){var o=n[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===t.length-1?o:o._children},e==="root"?i:i.root._children)}function ic(i){try{return i()}catch(e){return e}}var xn=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=(typeof n=="function"?n():n)||{}},ip={namespaced:{configurable:!0}};ip.namespaced.get=function(){return!!this._rawModule.namespaced};xn.prototype.addChild=function(e,t){this._children[e]=t};xn.prototype.removeChild=function(e){delete this._children[e]};xn.prototype.getChild=function(e){return this._children[e]};xn.prototype.hasChild=function(e){return e in this._children};xn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};xn.prototype.forEachChild=function(e){es(this._children,e)};xn.prototype.forEachGetter=function(e){this._rawModule.getters&&es(this._rawModule.getters,e)};xn.prototype.forEachAction=function(e){this._rawModule.actions&&es(this._rawModule.actions,e)};xn.prototype.forEachMutation=function(e){this._rawModule.mutations&&es(this._rawModule.mutations,e)};Object.defineProperties(xn.prototype,ip);var Zi=function(e){this.register([],e,!1)};Zi.prototype.get=function(e){return e.reduce(function(t,n){return t.getChild(n)},this.root)};Zi.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(n,r){return t=t.getChild(r),n+(t.namespaced?r+"/":"")},"")};Zi.prototype.update=function(e){rp([],this.root,e)};Zi.prototype.register=function(e,t,n){var r=this;n===void 0&&(n=!0);var s=new xn(t,n);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}t.modules&&es(t.modules,function(a,l){r.register(e.concat(l),a,n)})};Zi.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);!r||!r.runtime||t.removeChild(n)};Zi.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return t?t.hasChild(n):!1};function rp(i,e,t){if(e.update(t),t.modules)for(var n in t.modules){if(!e.getChild(n))return;rp(i.concat(n),e.getChild(n),t.modules[n])}}function qT(i){return new qt(i)}var qt=function(e){var t=this;e===void 0&&(e={});var n=e.plugins;n===void 0&&(n=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Zi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,d){return l.call(o,h,d)},this.commit=function(h,d,g){return c.call(o,h,d,g)},this.strict=r;var u=this._modules.root.state;fa(this,u,[],this._modules.root),qc(this,u),n.forEach(function(f){return f(t)})},Kc={state:{configurable:!0}};qt.prototype.install=function(e,t){e.provide(t||PT,this),e.config.globalProperties.$store=this;var n=this._devtools!==void 0?this._devtools:!1;n&&HT(e,this)};Kc.state.get=function(){return this._state.data};Kc.state.set=function(i){};qt.prototype.commit=function(e,t,n){var r=this,s=jo(e,t,n),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];!c||(this._withCommit(function(){c.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};qt.prototype.dispatch=function(e,t){var n=this,r=jo(e,t),s=r.type,o=r.payload,a={type:s,payload:o},l=this._actions[s];if(!!l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,n.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,f){c.then(function(h){try{n._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,n.state)})}catch{}u(h)},function(h){try{n._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,n.state,h)})}catch{}f(h)})})}};qt.prototype.subscribe=function(e,t){return $d(e,this._subscribers,t)};qt.prototype.subscribeAction=function(e,t){var n=typeof e=="function"?{before:e}:e;return $d(n,this._actionSubscribers,t)};qt.prototype.watch=function(e,t,n){var r=this;return wr(function(){return e(r.state,r.getters)},t,Object.assign({},n))};qt.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};qt.prototype.registerModule=function(e,t,n){n===void 0&&(n={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),fa(this,this.state,e,this._modules.get(e),n.preserveState),qc(this,this.state)};qt.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var n=Yc(t.state,e.slice(0,-1));delete n[e[e.length-1]]}),Zd(this)};qt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};qt.prototype.hotUpdate=function(e){this._modules.update(e),Zd(this,!0)};qt.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(qt.prototype,Kc);const YT=qT({state:{horizOrientation:null},getters:{},actions:{},mutations:{}});Object.freeze({__proto__:null});var ha={library:"https://accounts.google.com/gsi/client",defaultButtonConfig:{theme:"outline",size:"large"},scopes:"email profile openid"};const Bt=Kr({clientId:null,popupType:"CODE",prompt:!1,autoLogin:!1,idConfiguration:null,buttonConfig:ha.defaultButtonConfig,callback:()=>{},error:null}),Xi=Kr({apiLoaded:!1,apiLoadIntitited:!1}),sp=new Promise(i=>{const e=typeof window<"u";if(!Xi.apiLoadIntitited&&e){const t=document.createElement("script");Xi.apiLoadIntitited=!0,t.addEventListener("load",()=>{Xi.apiLoaded=!0,i(window.google)}),t.src=ha.library,t.async=!0,t.defer=!0,document.head.appendChild(t)}}),da=i=>{Xi.apiLoadIntitited?Xi.apiLoaded?i(window.google):wr(()=>Xi.apiLoaded,e=>{e&&i(window.google)}):sp.then(e=>{i(e)})},KT=(i,e,t,n)=>{if(!i.client_id)throw new Error("Prop client id required since plugin is not initialized with a client id");da(()=>{((r,s,o,a,l)=>{if(l){const u=r.callback;r.callback=f=>{f.credential?u&&u(f):l(f)}}window.google.accounts.id.initialize(r);const c=s.value;c&&!a&&window.google.accounts.id.renderButton(c,o)})(i,e,t.buttonConfig,n,t.error),t.prompt&&JT({clientId:t.clientId,callback:t.callback,error:t.error,autoLogin:t.autoLogin})})},$T=i=>new Promise((e,t)=>{da(n=>{if(!(i&&i.clientId||Bt.clientId))throw new Error("clientId is required since the plugin is not initialized with a Client Id");n.accounts.oauth2.initCodeClient({client_id:i&&i.clientId||Bt.clientId||"",scope:ha.scopes,ux_mode:"popup",callback:r=>{r.code?e(r):t(r)}}).requestCode()})}),ZT=i=>new Promise((e,t)=>{da(n=>{if(!(i&&i.clientId||Bt.clientId))throw new Error("clientId is required since the plugin is not initialized with a Client Id");n.accounts.oauth2.initTokenClient({client_id:i&&i.clientId||Bt.clientId||"",scope:ha.scopes,callback:r=>{r.access_token?e(r):t(r)}}).requestAccessToken()})}),JT=i=>{if(!i&&(i={}),!i.clientId&&!Bt.clientId)throw new Error("clientId is required");const e={};return i.clientId&&(e.client_id=i.clientId),!i.clientId&&Bt.clientId&&(e.client_id=Bt.clientId),i.context&&(e.context=i.context),i.autoLogin!=null&&(e.auto_select=i.autoLogin),i.cancelOnTapOutside!=null&&(e.cancel_on_tap_outside=i.cancelOnTapOutside),new Promise((t,n)=>{e.callback=r=>{i&&i.callback&&i.callback(r),r.credential?t(r):n(r)},da(r=>{r.accounts.id.initialize(e),r.accounts.id.prompt(s=>{i&&i.onNotification&&i.onNotification(s),(o=>{const a=o.notification;let l="";a.isNotDisplayed()&&(l=a.getNotDisplayedReason()==="suppressed_by_user"?"Prompt was suppressed by user'. Refer https://developers.google.com/identity/gsi/web/guides/features#exponential_cooldown for more info":`Prompt was not displayed, reason for not displaying: ${a.getNotDisplayedReason()}`),a.isSkippedMoment()&&(l=`Prompt was skipped, reason for skipping: ${a.getSkippedReason()}`),l.length&&(o.error?o.error(l):o.reject(l))})({notification:s,reject:n,error:i&&i.error})})})})};var rc=ta({name:"GoogleLogin",props:{clientId:{type:String,required:!1},prompt:{type:Boolean,required:!1,default:!1},autoLogin:{type:Boolean,required:!1,default:!1},popupType:{type:String,required:!1,default:"CODE"},idConfiguration:{type:Object,required:!1},buttonConfig:{type:Object,required:!1},callback:{type:Function,required:!1},error:{type:Function,required:!1}},setup(i){const e=i,t=!!dg().default,n=((o,a)=>{const l={...o};for(const c in a)a[c]!==void 0&&a[c]!==null&&(l[c]=a[c]);return l})(Bt,e),r={client_id:n.clientId||null,auto_select:n.autoLogin||!1,callback:n.callback,...n.idConfiguration},s=sn();return ia(()=>{KT(r,s,n,t)}),(o,a)=>(fn(),fi("div",{class:qn(["g-btn-wrapper",[!Tn(Xi).apiLoaded&&"api-loading"]]),onClick:a[0]||(a[0]=l=>Tn(t)&&void(Tn(n).popupType==="TOKEN"?ZT({clientId:n.clientId}).then(c=>{n.callback&&n.callback(c)}):$T({clientId:n.clientId}).then(c=>{n.callback&&n.callback(c)})))},[Tn(t)?Zh("v-if",!0):(fn(),fi("span",{key:0,ref_key:"buttonRef",ref:s,class:"g-btn"},null,512)),Nm(o.$slots,"default")],2))}});(function(i,e){e===void 0&&(e={});var t=e.insertAt;if(i&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}})(`
.g-btn-wrapper[data-v-5e610566] {
  display: inline-block;
}
.g-btn-wrapper.api-loading[data-v-5e610566] {
  opacity: 0.5;
  pointer-events: none;
}
`),rc.__scopeId="data-v-5e610566",rc.__file="src/plugin/GoogleLogin.vue";var QT={install:(i,e)=>{e&&(t=>{t.clientId&&(Bt.clientId=t.clientId),t.popupType&&(Bt.popupType=t.popupType),t.prompt!=null&&(Bt.prompt=t.prompt),t.autoLogin!=null&&(Bt.autoLogin=t.autoLogin),t.idConfiguration&&(Bt.idConfiguration=t.idConfiguration),t.buttonConfig&&(Bt.buttonConfig=t.buttonConfig),t.callback&&(Bt.callback=t.callback)})(e),sp.then(()=>{if(e.clientId){const t={client_id:e.clientId,auto_select:e.autoLogin===!0,callback:e.callback,...e.idConfiguration};window.google.accounts.id.initialize(t),e.prompt&&window.google.accounts.id.prompt()}}),i.component("GoogleLogin",rc)}};const $c=Bg(yT);$c.use(QT,{clientId:"884599400137-gf06hcdou1nt44pkv5t8j2nfvg4qn9am.apps.googleusercontent.com"});$c.use(YT);$c.mount("#app");
