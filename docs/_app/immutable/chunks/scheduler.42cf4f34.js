var R=Object.defineProperty;var G=(t,e,n)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function L(){}const _t=t=>t;function z(t,e){for(const n in e)t[n]=e[n];return t}function ht(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function F(t){return t()}function dt(){return Object.create(null)}function I(t){t.forEach(F)}function U(t){return typeof t=="function"}function mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function pt(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function yt(t){return Object.keys(t).length===0}function W(t,...e){if(t==null){for(const i of e)i(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t,e,n){t.$$.on_destroy.push(W(e,n))}function bt(t,e,n,i){if(t){const s=C(t,e,n,i);return t[0](s)}}function C(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Et(t,e,n,i,s,l){if(s){const c=C(e,n,i,l);t.p(c,s)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Nt(t){return t&&U(t.destroy)?t.destroy:L}let y=!1;function At(){y=!0}function vt(){y=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const u=e[r].claim_order,a=(s>0&&e[n[s]].claim_order<=u?s+1:J(1,s,B=>e[n[B]].claim_order,u))-1;i[r]=n[a]+1;const A=a+1;n[A]=r,s=Math.max(A,s)}const l=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(l.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<l.length&&c[r].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[r],a)}}function Q(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=w("style");return e.textContent="/* empty */",X(V(t),e),e.sheet}function X(t,e){return Q(t.head||t,e),e.sheet}function Y(t,e){if(y){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){y&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function D(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function Ht(){return T(" ")}function Lt(){return T("")}function Ct(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function M(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const tt=["width","height"];function et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&tt.indexOf(i)===-1?t[i]=e[i]:M(t,i,e[i])}function nt(t,e){Object.keys(e).forEach(n=>{it(t,n,e[n])})}function it(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:M(t,e,n)}function Dt(t){return/-/.test(t)?nt:et}function Mt(t){return t.dataset.svelteH}function Pt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,s=!1){P(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,e,n,i){return S(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function St(t,e,n){return O(t,e,n,w)}function Ot(t,e,n){return O(t,e,n,D)}function st(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function qt(t){return st(t," ")}function v(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Bt(t,e){const n=v(t,"HTML_TAG_START",0),i=v(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new k(e);P(t);const s=t.splice(n,i-n+1);x(s[0]),x(s[s.length-1]);const l=s.slice(1,s.length-1);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new k(e,l)}function Rt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function zt(t,e,n){t.classList.toggle(e,!!n)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ft(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class rt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=D(n.nodeName):this.e=w(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class k extends rt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function It(t,e){return new t(e)}let p;function g(t){p=t}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function Ut(t){N().$$.on_mount.push(t)}function Wt(t){N().$$.after_update.push(t)}function Jt(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ct(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const d=[],j=[];let h=[];const H=[],q=Promise.resolve();let E=!1;function lt(){E||(E=!0,q.then(ut))}function Kt(){return lt(),q}function ot(t){h.push(t)}const b=new Set;let _=0;function ut(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,g(e),at(e.$$)}}catch(e){throw d.length=0,_=0,e}for(g(null),d.length=0,_=0;j.length;)j.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];b.has(n)||(b.add(n),n())}h.length=0}while(d.length);for(;H.length;)H.pop()();E=!1,b.clear(),g(t)}function at(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}function Qt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{Qt as $,Ft as A,pt as B,bt as C,Et as D,wt as E,xt as F,z as G,Tt as H,Dt as I,zt as J,Nt as K,U as L,k as M,Bt as N,ot as O,ht as P,N as Q,g as R,ut as S,D as T,Ot as U,_t as V,V as W,kt as X,ct as Y,dt as Z,yt as _,Ht as a,p as a0,F as a1,d as a2,lt as a3,At as a4,vt as a5,Jt as a6,Wt as b,qt as c,x as d,Lt as e,w as f,St as g,Pt as h,$ as i,M as j,Gt as k,T as l,st as m,Rt as n,Ut as o,j as p,It as q,Mt as r,mt as s,Kt as t,Y as u,Ct as v,jt as w,I as x,gt as y,L as z};