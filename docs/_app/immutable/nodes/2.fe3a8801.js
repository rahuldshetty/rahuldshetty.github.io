import{F as ke,G as ye,H as te,I as ge,s as F,f as b,g as p,h as A,d as m,j as k,i as h,y as _,w as we,a as M,c as z,u as C,A as me,e as V,J as ae,K as se,B as de,C as _e,D as he,E as ve,r as S,L as Ce,M as ce,N as Ie,O as xe,z as De,P as Ee}from"../chunks/scheduler.8252a539.js";import{g as ne,t as g,c as ie,a as w,S as Q,i as X,b as B,d as K,m as W,e as J,f as Me}from"../chunks/index.a3bfa819.js";import{e as ze}from"../chunks/each.e59479a4.js";import{F as Oe}from"../chunks/fa.3ad55bcb.js";import{f as Ve}from"../chunks/index.6110e9c7.js";import{_ as q}from"../chunks/preload-helper.a4192956.js";function le(i,e){const r=e.token={};function n(t,l,o,a){if(e.token!==r)return;e.resolved=a;let s=e.ctx;o!==void 0&&(s=s.slice(),s[o]=a);const d=t&&(e.current=t)(s);let u=!1;e.block&&(e.blocks?e.blocks.forEach((v,I)=>{I!==l&&v&&(ne(),g(v,1,1,()=>{e.blocks[I]===v&&(e.blocks[I]=null)}),ie())}):e.block.d(1),d.c(),w(d,1),d.m(e.mount(),e.anchor),u=!0),e.block=d,e.blocks&&(e.blocks[l]=d),u&&ge()}if(ke(i)){const t=ye();if(i.then(l=>{te(t),n(e.then,1,e.value,l),te(null)},l=>{if(te(t),n(e.catch,2,e.error,l),te(null),!e.hasCatch)throw l}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,i),!0;e.resolved=i}}function be(i,e,r){const n=e.slice(),{resolved:t}=i;i.current===i.then&&(n[i.value]=t),i.current===i.catch&&(n[i.error]=t),i.block.p(n,r)}const Pe=""+new URL("../assets/me.0c298a21.jpg",import.meta.url).href;var pe={};(function(i){Object.defineProperty(i,"__esModule",{value:!0});var e="fab",r="youtube",n=576,t=512,l=[61802],o="f167",a="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";i.definition={prefix:e,iconName:r,icon:[n,t,l,o,a]},i.faYoutube=i.definition,i.prefix=e,i.iconName=r,i.width=n,i.height=t,i.ligatures=l,i.unicode=o,i.svgPathData=a,i.aliases=l})(pe);var Le={prefix:"fab",iconName:"itch-io",icon:[512,512,[],"f83a","M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"]},Te={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Se={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ne={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Ae={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const Fe=""+new URL("../assets/kofi.ea3793eb.svg",import.meta.url).href,He=[{name:"Github",link:"https://github.com/rahuldshetty",primaryColor:"#000",icon:Ae},{name:"Linked In",link:"https://www.linkedin.com/in/rahul-d-shetty/",primaryColor:"#0a66c2",icon:Te},{name:"Itch.IO",link:"https://rahuldshetty.itch.io",primaryColor:"#C70039",icon:Le},{name:"Ko-fi",link:"https://ko-fi.com/anond3vil",primaryColor:"#C70039",image:Fe},{name:"Youtube",link:"https://www.youtube.com/@AnonymousD3vil",primaryColor:"red",icon:pe.faYoutube},{name:"Instagram",link:"https://www.instagram.com/rahuldshetty",primaryColor:"#E1306C",icon:Se},{name:"Facebook",link:"https://www.facebook.com/anonymousd3vil",primaryColor:"#0a66c2",icon:Ne}];function Re(i,e,r){const n=i.slice();return n[0]=e[r],n}function je(i){let e,r;return{c(){e=b("img"),this.h()},l(n){e=p(n,"IMG",{width:!0,height:!0,src:!0,alt:!0}),this.h()},h(){k(e,"width","32px"),k(e,"height","32px"),me(e.src,r=i[0].image)||k(e,"src",r),k(e,"alt",i[0].name+" Logo")},m(n,t){h(n,e,t)},i:_,o:_,d(n){n&&m(e)}}}function Ge(i){let e,r;return e=new Oe({props:{icon:i[0].icon,color:i[0].primaryColor,size:"2x"}}),{c(){B(e.$$.fragment)},l(n){K(e.$$.fragment,n)},m(n,t){W(e,n,t),r=!0},i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){g(e.$$.fragment,n),r=!1},d(n){J(e,n)}}}function Ue(i){let e,r,n,t,l,o;const a=[Ge,je],s=[];function d(u,v){return"icon"in u[0]?0:"image"in u[0]?1:-1}return~(n=d(i))&&(t=s[n]=a[n](i)),{c(){e=b("div"),r=b("a"),t&&t.c(),l=M(),this.h()},l(u){e=p(u,"DIV",{class:!0});var v=A(e);r=p(v,"A",{target:!0,href:!0});var I=A(r);t&&t.l(I),I.forEach(m),l=z(v),v.forEach(m),this.h()},h(){k(r,"target","_blank"),k(r,"href",i[0].link),k(e,"class","mx-1 my-4")},m(u,v){h(u,e,v),C(e,r),~n&&s[n].m(r,null),C(e,l),o=!0},p:_,i(u){o||(w(t),o=!0)},o(u){g(t),o=!1},d(u){u&&m(e),~n&&s[n].d()}}}function Ye(i){let e,r,n=ze(He),t=[];for(let l=0;l<n.length;l+=1)t[l]=Ue(Re(i,n,l));return{c(){e=b("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var o=A(e);for(let a=0;a<t.length;a+=1)t[a].l(o);o.forEach(m),this.h()},h(){k(e,"class","grid grid-cols-4 my-5 justify-items-center")},m(l,o){h(l,e,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);r=!0},p:_,i(l){if(!r){for(let o=0;o<n.length;o+=1)w(t[o]);r=!0}},o(l){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)g(t[o]);r=!1},d(l){l&&m(e),we(t,l)}}}class qe extends Q{constructor(e){super(),X(this,e,null,Ye,F,{})}}function Be(i){let e,r,n,t={ctx:i,current:null,token:null,hasCatch:!1,pending:$e,then:Je,catch:We,blocks:[,,,]};return le(r=i[6](),t),{c(){e=V(),t.block.c()},l(l){e=V(),t.block.l(l)},m(l,o){h(l,e,o),t.block.m(l,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(l,o){i=l,t.ctx=i,o&64&&r!==(r=i[6]())&&le(r,t)||be(t,i,o)},i(l){n||(w(t.block),n=!0)},o(l){for(let o=0;o<3;o+=1){const a=t.blocks[o];g(a)}n=!1},d(l){l&&m(e),t.block.d(l),t.token=null,t=null}}}function Ke(i){let e,r;const n=i[24].default,t=de(n,i,i[23],null);return{c(){e=b("div"),t&&t.c(),this.h()},l(l){e=p(l,"DIV",{class:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){k(e,"class","typewriter-container svelte-1gv2i7t")},m(l,o){h(l,e,o),t&&t.m(e,null),r=!0},p(l,o){t&&t.p&&(!r||o&8388608)&&_e(t,n,l,l[23],r?ve(n,l[23],o,null):he(l[23]),null)},i(l){r||(w(t,l),r=!0)},o(l){g(t,l),r=!1},d(l){l&&m(e),t&&t.d(l)}}}function We(i){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function Je(i){let e,r,n,t={ctx:i,current:null,token:null,hasCatch:!1,pending:Ze,then:Xe,catch:Qe,value:25,blocks:[,,,]};return le(r=i[7][i[0]](),t),{c(){e=V(),t.block.c()},l(l){e=V(),t.block.l(l)},m(l,o){h(l,e,o),t.block.m(l,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(l,o){i=l,t.ctx=i,o&1&&r!==(r=i[7][i[0]]())&&le(r,t)||be(t,i,o)},i(l){n||(w(t.block),n=!0)},o(l){for(let o=0;o<3;o+=1){const a=t.blocks[o];g(a)}n=!1},d(l){l&&m(e),t.block.d(l),t.token=null,t=null}}}function Qe(i){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function Xe(i){let e=i[4],r,n,t=i[4]&&re(i);return{c(){t&&t.c(),r=V()},l(l){t&&t.l(l),r=V()},m(l,o){t&&t.m(l,o),h(l,r,o),n=!0},p(l,o){l[4]?e?F(e,l[4])?(t.d(1),t=re(l),e=l[4],t.c(),t.m(r.parentNode,r)):t.p(l,o):(t=re(l),e=l[4],t.c(),t.m(r.parentNode,r)):e&&(t.d(1),t=null,e=l[4])},i(l){n||(w(t,l),n=!0)},o(l){g(t,l),n=!1},d(l){l&&m(r),t&&t.d(l)}}}function re(i){let e,r,n,t,l;const o=i[24].default,a=de(o,i,i[23],null);return{c(){e=b(i[4]),a&&a.c(),this.h()},l(s){e=p(s,(i[4]||"null").toUpperCase(),{class:!0});var d=A(e);a&&a.l(d),d.forEach(m),this.h()},h(){Ce(i[4])(e,{class:"typewriter-container svelte-1gv2i7t"}),ce(e,"cursor",i[1])},m(s,d){h(s,e,d),a&&a.m(e,null),n=!0,t||(l=Ie(r=i[25].default(e,i[5])),t=!0)},p(s,d){a&&a.p&&(!n||d&8388608)&&_e(a,o,s,s[23],n?ve(o,s[23],d,null):he(s[23]),null),r&&xe(r.update)&&d&32&&r.update.call(null,s[5]),(!n||d&2)&&ce(e,"cursor",s[1])},i(s){n||(w(a,s),n=!0)},o(s){g(a,s),n=!1},d(s){s&&m(e),a&&a.d(s),t=!1,l()}}}function Ze(i){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function $e(i){let e,r=i[2]&&ue();return{c(){r&&r.c(),e=V()},l(n){r&&r.l(n),e=V()},m(n,t){r&&r.m(n,t),h(n,e,t)},p(n,t){n[2]?r||(r=ue(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:_,o:_,d(n){n&&m(e),r&&r.d(n)}}}function ue(i){let e,r='<p class="typing"></p>';return{c(){e=b("div"),e.innerHTML=r,this.h()},l(n){e=p(n,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1ssf3hl"&&(e.innerHTML=r),this.h()},h(){k(e,"class","typewriter-container cursor svelte-1gv2i7t")},m(n,t){h(n,e,t)},d(n){n&&m(e)}}}function fe(i){let e,r,n,t;const l=[Ke,Be],o=[];function a(s,d){return s[3]?0:1}return e=a(i),r=o[e]=l[e](i),{c(){r.c(),n=V()},l(s){r.l(s),n=V()},m(s,d){o[e].m(s,d),h(s,n,d),t=!0},p(s,d){let u=e;e=a(s),e===u?o[e].p(s,d):(ne(),g(o[u],1,1,()=>{o[u]=null}),ie(),r=o[e],r?r.p(s,d):(r=o[e]=l[e](s),r.c()),w(r,1),r.m(n.parentNode,n))},i(s){t||(w(r),t=!0)},o(s){g(r),t=!1},d(s){s&&m(n),o[e].d(s)}}}function et(i){let e,r=i[8],n,t,l=fe(i);return{c(){e=M(),l.c(),n=V()},l(o){e=z(o),l.l(o),n=V()},m(o,a){h(o,e,a),l.m(o,a),h(o,n,a),t=!0},p(o,[a]){a&256&&F(r,r=o[8])?(ne(),g(l,1,1,_),ie(),l=fe(o),l.c(),w(l,1),l.m(n.parentNode,n)):l.p(o,a)},i(o){t||(w(l),t=!0)},o(o){g(l),t=!1},d(o){o&&(m(e),m(n)),l.d(o)}}}function tt(i,e,r){let n,t,l,o,a,s,d,u,v,{$$slots:I={},$$scope:O}=e,{mode:x="concurrent"}=e,{interval:P=30}=e,{cursor:E=!0}=e,{keepCursorOnFinish:D=!1}=e,{delay:f=0}=e,{showCursorOnDelay:y=!1}=e,{disabled:L=!1}=e,{element:j="div"}=e,{scrambleDuration:H=3e3}=e,{scrambleSlowdown:T=!0}=e,{unwriteInterval:G=30}=e,{wordInterval:R=1500}=e;const U={concurrent:()=>q(()=>import("../chunks/concurrent.41bdd27c.js"),["..\\chunks\\concurrent.41bdd27c.js","..\\chunks\\writeEffect.916d1b0a.js","..\\chunks\\animationSetup.c2dc3a13.js","..\\chunks\\scheduler.8252a539.js"],import.meta.url),cascade:()=>q(()=>import("../chunks/cascade.09f7f271.js"),["..\\chunks\\cascade.09f7f271.js","..\\chunks\\writeEffect.916d1b0a.js","..\\chunks\\animationSetup.c2dc3a13.js","..\\chunks\\scheduler.8252a539.js"],import.meta.url),loop:()=>q(()=>import("../chunks/loop.7dc67594.js"),["..\\chunks\\loop.7dc67594.js","..\\chunks\\writeAndUnwriteText.214ad3ab.js","..\\chunks\\writeEffect.916d1b0a.js","..\\chunks\\animationSetup.c2dc3a13.js","..\\chunks\\scheduler.8252a539.js","..\\chunks\\unwriteEffect.168974be.js"],import.meta.url),loopOnce:()=>q(()=>import("../chunks/loopOnce.bee73612.js"),["..\\chunks\\loopOnce.bee73612.js","..\\chunks\\animationSetup.c2dc3a13.js","..\\chunks\\scheduler.8252a539.js","..\\chunks\\writeEffect.916d1b0a.js","..\\chunks\\unwriteEffect.168974be.js"],import.meta.url),loopRandom:()=>q(()=>import("../chunks/loopRandom.57b650b4.js"),["..\\chunks\\loopRandom.57b650b4.js","..\\chunks\\writeAndUnwriteText.214ad3ab.js","..\\chunks\\writeEffect.916d1b0a.js","..\\chunks\\animationSetup.c2dc3a13.js","..\\chunks\\scheduler.8252a539.js","..\\chunks\\unwriteEffect.168974be.js"],import.meta.url),scramble:()=>q(()=>import("../chunks/scramble.bff94e68.js"),["..\\chunks\\scramble.bff94e68.js","..\\chunks\\animationSetup.c2dc3a13.js","..\\chunks\\scheduler.8252a539.js"],import.meta.url)};return i.$$set=c=>{r(8,e=ae(ae({},e),se(c))),"mode"in c&&r(0,x=c.mode),"interval"in c&&r(9,P=c.interval),"cursor"in c&&r(1,E=c.cursor),"keepCursorOnFinish"in c&&r(10,D=c.keepCursorOnFinish),"delay"in c&&r(11,f=c.delay),"showCursorOnDelay"in c&&r(2,y=c.showCursorOnDelay),"disabled"in c&&r(3,L=c.disabled),"element"in c&&r(4,j=c.element),"scrambleDuration"in c&&r(12,H=c.scrambleDuration),"scrambleSlowdown"in c&&r(13,T=c.scrambleSlowdown),"unwriteInterval"in c&&r(14,G=c.unwriteInterval),"wordInterval"in c&&r(15,R=c.wordInterval),"$$scope"in c&&r(23,O=c.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&r(21,n=/^loop(Once|Random)?$/.test(x)),i.$$.dirty&1&&r(22,t=["concurrent","cascade","loopOnce"].includes(x)),i.$$.dirty&4195328&&r(20,l=!t&&D),i.$$.dirty&2052&&r(19,o=f<1&&y),r(18,a=!n&&(e.unwriteInterval||e.wordInterval)),r(17,s=x!=="scramble"&&(e.scrambleDuration||e.scrambleSlowdown)),i.$$.dirty&1024&&r(16,d=typeof D=="number"&&D<1),i.$$.dirty&1048576&&l&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),i.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),i.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),i.$$.dirty&131072&&s&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),i.$$.dirty&65536&&d&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),i.$$.dirty&2048&&r(6,u=()=>new Promise(c=>setTimeout(()=>c(f),f))),i.$$.dirty&65054&&r(5,v={interval:P,cursor:E,keepCursorOnFinish:D,delay:f,showCursorOnDelay:y,disabled:L,element:j,scrambleDuration:H,scrambleSlowdown:T,unwriteInterval:G,wordInterval:R})},e=se(e),[x,E,y,L,j,v,u,U,e,P,D,f,H,T,G,R,d,s,a,o,l,n,t,O,I]}class lt extends Q{constructor(e){super(),X(this,e,tt,et,F,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function rt(i){let e,r="Software Developer",n,t,l="Web Developer",o,a,s="AI/ML Engineer",d,u,v="DevOps Engineer",I,O,x="Android Application Developer",P,E,D="Game Developer";return{c(){e=b("p"),e.textContent=r,n=M(),t=b("p"),t.textContent=l,o=M(),a=b("p"),a.textContent=s,d=M(),u=b("p"),u.textContent=v,I=M(),O=b("p"),O.textContent=x,P=M(),E=b("p"),E.textContent=D},l(f){e=p(f,"P",{"data-svelte-h":!0}),S(e)!=="svelte-qe6zot"&&(e.textContent=r),n=z(f),t=p(f,"P",{"data-svelte-h":!0}),S(t)!=="svelte-97ztnw"&&(t.textContent=l),o=z(f),a=p(f,"P",{"data-svelte-h":!0}),S(a)!=="svelte-i5id3x"&&(a.textContent=s),d=z(f),u=p(f,"P",{"data-svelte-h":!0}),S(u)!=="svelte-ilj0iu"&&(u.textContent=v),I=z(f),O=p(f,"P",{"data-svelte-h":!0}),S(O)!=="svelte-1tw9u6v"&&(O.textContent=x),P=z(f),E=p(f,"P",{"data-svelte-h":!0}),S(E)!=="svelte-30o8wc"&&(E.textContent=D)},m(f,y){h(f,e,y),h(f,n,y),h(f,t,y),h(f,o,y),h(f,a,y),h(f,d,y),h(f,u,y),h(f,I,y),h(f,O,y),h(f,P,y),h(f,E,y)},p:_,d(f){f&&(m(e),m(n),m(t),m(o),m(a),m(d),m(u),m(I),m(O),m(P),m(E))}}}function nt(i){let e,r,n,t,l,o,a,s,d,u,v,I="Hi There",O,x,P=`I&#39;m
				<span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Rahul D Shetty</span>
				👋`,E,D,f,y,L,j="Welcome to my Portfolio. A little bit about me:",H,T,G=`<li>🤖 Software Engineer specializing in AI/ML domain @
					<a target="_blank" class="font-medium text-sky-500 underline decoration-sky-500 underline-offset-2" href="https://www.vmware.com/in.html">VMware</a></li> <li class="my-2">📓 Studied Computer Science and Engineering (B.E) at
					<a target="_blank" class="font-medium text-sky-500 underline decoration-sky-500 underline-offset-2" href="https://nmamit.nitte.edu.in">N.M.A.M Institute of Technology</a></li> <li class="my-2">🎨 Occassional Hobbyist
					<a target="_blank" class="font-medium text-sky-500 underline decoration-sky-500 underline-offset-2" href="https://www.instagram.com/rahuldshetty">My Gallery</a></li> <li class="my-2">📺 Enjoy Thriller/Mystery/Comedy Shows (in same order)</li>`,R,U;return s=new qe({}),f=new lt({props:{mode:"loop",$$slots:{default:[rt]},$$scope:{ctx:i}}}),{c(){e=M(),r=b("div"),n=b("div"),t=b("div"),l=b("img"),a=M(),B(s.$$.fragment),d=M(),u=b("div"),v=b("h1"),v.textContent=I,O=M(),x=b("h1"),x.innerHTML=P,E=M(),D=b("div"),B(f.$$.fragment),y=M(),L=b("p"),L.textContent=j,H=M(),T=b("ul"),T.innerHTML=G,this.h()},l(c){De("svelte-faixpc",document.head).forEach(m),e=z(c),r=p(c,"DIV",{class:!0});var Z=A(r);n=p(Z,"DIV",{class:!0});var $=A(n);t=p($,"DIV",{class:!0});var ee=A(t);l=p(ee,"IMG",{class:!0,src:!0,alt:!0}),a=z(ee),K(s.$$.fragment,ee),ee.forEach(m),d=z($),u=p($,"DIV",{class:!0});var N=A(u);v=p(N,"H1",{class:!0,"data-svelte-h":!0}),S(v)!=="svelte-ims8si"&&(v.textContent=I),O=z(N),x=p(N,"H1",{class:!0,"data-svelte-h":!0}),S(x)!=="svelte-pbobek"&&(x.innerHTML=P),E=z(N),D=p(N,"DIV",{class:!0});var oe=A(D);K(f.$$.fragment,oe),oe.forEach(m),y=z(N),L=p(N,"P",{class:!0,"data-svelte-h":!0}),S(L)!=="svelte-jx0068"&&(L.textContent=j),H=z(N),T=p(N,"UL",{class:!0,"data-svelte-h":!0}),S(T)!=="svelte-1re29m1"&&(T.innerHTML=G),N.forEach(m),$.forEach(m),Z.forEach(m),this.h()},h(){document.title="Portfolio",k(l,"class","h-64 w-64 rounded-full"),me(l.src,o=Pe)||k(l,"src",o),k(l,"alt","logo"),k(t,"class","flex flex-col items-center md:mx-20"),k(v,"class","my-1 text-2xl font-extrabold self-start text-gray-800"),k(x,"class","text-4xl font-extrabold self-start text-gray-800"),k(D,"class","text-3xl font-extrabold self-start text-gray-800 inline-block bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 "),k(L,"class","my-4 max-w-2xl indent-0 self-start"),k(T,"class","list-none mx-4"),k(u,"class","flex flex-col max-[600px]:px-10"),k(n,"class","flex flex-row max-[600px]:flex-col"),k(r,"class","flex flex-col items-center my-10")},m(c,Y){h(c,e,Y),h(c,r,Y),C(r,n),C(n,t),C(t,l),C(t,a),W(s,t,null),C(n,d),C(n,u),C(u,v),C(u,O),C(u,x),C(u,E),C(u,D),W(f,D,null),C(u,y),C(u,L),C(u,H),C(u,T),U=!0},p(c,[Y]){const Z={};Y&1&&(Z.$$scope={dirty:Y,ctx:c}),f.$set(Z)},i(c){U||(w(s.$$.fragment,c),w(f.$$.fragment,c),c&&(R||Ee(()=>{R=Me(r,Ve,{delay:100,duration:200}),R.start()})),U=!0)},o(c){g(s.$$.fragment,c),g(f.$$.fragment,c),U=!1},d(c){c&&(m(e),m(r)),J(s),J(f)}}}class it extends Q{constructor(e){super(),X(this,e,null,nt,F,{})}}class ot extends Q{constructor(e){super(),X(this,e,null,null,F,{})}}function at(i){let e,r,n,t;return e=new it({}),n=new ot({}),{c(){B(e.$$.fragment),r=M(),B(n.$$.fragment)},l(l){K(e.$$.fragment,l),r=z(l),K(n.$$.fragment,l)},m(l,o){W(e,l,o),h(l,r,o),W(n,l,o),t=!0},p:_,i(l){t||(w(e.$$.fragment,l),w(n.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),g(n.$$.fragment,l),t=!1},d(l){l&&m(r),J(e,l),J(n,l)}}}class st extends Q{constructor(e){super(),X(this,e,null,at,F,{})}}function ct(i){let e,r;return e=new st({}),{c(){B(e.$$.fragment)},l(n){K(e.$$.fragment,n)},m(n,t){W(e,n,t),r=!0},p:_,i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){g(e.$$.fragment,n),r=!1},d(n){J(e,n)}}}class vt extends Q{constructor(e){super(),X(this,e,null,ct,F,{})}}export{vt as component};
