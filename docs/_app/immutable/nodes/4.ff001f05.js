import{s as at,a as v,f,l as A,S as lt,z as st,d as c,c as g,g as _,h as x,m as C,r as rt,T as ot,j as r,i as z,u as l,n as G,P as nt,y as et,A as U}from"../chunks/scheduler.8252a539.js";import{S as it,i as ct,f as dt}from"../chunks/index.a3bfa819.js";import{b as mt}from"../chunks/cover.2889fc35.js";import{f as ut}from"../chunks/index.6110e9c7.js";function ft(o){let e,n;return{c(){e=f("img"),this.h()},l(t){e=_(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){r(e,"class","object-cover rounded-lg mb-2 py-1"),U(e.src,n=mt)||r(e,"src",n),r(e,"alt","")},m(t,s){z(t,e,s)},p:et,d(t){t&&c(e)}}}function _t(o){let e,n;return{c(){e=f("img"),this.h()},l(t){e=_(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){r(e,"class","object-cover rounded-lg mb-2 py-1"),U(e.src,n=o[0].post.metadata.cover)||r(e,"src",n),r(e,"alt","")},m(t,s){z(t,e,s)},p(t,s){s&1&&!U(e.src,n=t[0].post.metadata.cover)&&r(e,"src",n)},d(t){t&&c(e)}}}function pt(o){let e,n,t,s,I=o[0].post.title+"",L,N,b,S=o[0].post.description+"",M,B,m,k,j=o[0].post.date_formatted+"",P,F,p,W="·",J,h,q=o[0].post.metadata.readingTime+"",T,K,O,D,y,w,H=o[0].post.content+"",Q;document.title=e=o[0].post.title;function X(a,i){return"cover"in a[0].post.metadata?_t:ft}let V=X(o),d=V(o);return{c(){n=v(),t=f("div"),s=f("h1"),L=A(I),N=v(),b=f("p"),M=A(S),B=v(),m=f("div"),k=f("small"),P=A(j),F=v(),p=f("span"),p.textContent=W,J=v(),h=f("small"),T=A(q),K=A(" mins"),O=v(),d.c(),D=v(),y=f("div"),w=new lt(!1),this.h()},l(a){st("svelte-1qjuskq",document.head).forEach(c),n=g(a),t=_(a,"DIV",{class:!0});var u=x(t);s=_(u,"H1",{class:!0});var Y=x(s);L=C(Y,I),Y.forEach(c),N=g(u),b=_(u,"P",{class:!0});var Z=x(b);M=C(Z,S),Z.forEach(c),B=g(u),m=_(u,"DIV",{class:!0});var E=x(m);k=_(E,"SMALL",{class:!0});var $=x(k);P=C($,j),$.forEach(c),F=g(E),p=_(E,"SPAN",{class:!0,"data-svelte-h":!0}),rt(p)!=="svelte-10lih0p"&&(p.textContent=W),J=g(E),h=_(E,"SMALL",{class:!0});var R=x(h);T=C(R,q),K=C(R," mins"),R.forEach(c),E.forEach(c),O=g(u),d.l(u),D=g(u),y=_(u,"DIV",{class:!0});var tt=x(y);w=ot(tt,!1),tt.forEach(c),u.forEach(c),this.h()},h(){r(s,"class","text-4xl font-bold text-gray-900 place-self-start"),r(b,"class","text-xl my-1 text-neutral-500"),r(k,"class","text-neutral-500 dark:text-neutral-600 my-1"),r(p,"class","text-neutral-700 dark:text-neutral-700 mx-1"),r(h,"class","text-neutral-500 dark:text-neutral-600 my-1"),r(m,"class","flex flex-row"),w.a=null,r(y,"class",""),r(t,"class","flex flex-col max-w-2xl max-[600px]:p-10")},m(a,i){z(a,n,i),z(a,t,i),l(t,s),l(s,L),l(t,N),l(t,b),l(b,M),l(t,B),l(t,m),l(m,k),l(k,P),l(m,F),l(m,p),l(m,J),l(m,h),l(h,T),l(h,K),l(t,O),d.m(t,null),l(t,D),l(t,y),w.m(H,y)},p(a,[i]){i&1&&e!==(e=a[0].post.title)&&(document.title=e),i&1&&I!==(I=a[0].post.title+"")&&G(L,I),i&1&&S!==(S=a[0].post.description+"")&&G(M,S),i&1&&j!==(j=a[0].post.date_formatted+"")&&G(P,j),i&1&&q!==(q=a[0].post.metadata.readingTime+"")&&G(T,q),V===(V=X(a))&&d?d.p(a,i):(d.d(1),d=V(a),d&&(d.c(),d.m(t,D))),i&1&&H!==(H=a[0].post.content+"")&&w.p(H)},i(a){a&&(Q||nt(()=>{Q=dt(t,ut,{delay:250,duration:300}),Q.start()}))},o:et,d(a){a&&(c(n),c(t)),d.d()}}}function ht(o,e,n){let{data:t}=e;return o.$$set=s=>{"data"in s&&n(0,t=s.data)},[t]}class kt extends it{constructor(e){super(),ct(this,e,ht,pt,at,{data:0})}}export{kt as component};
