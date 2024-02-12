import{a as w}from"./index.73062db0.js";import{_ as q,G as _,L as B}from"./scheduler.97c8b5c4.js";function G(r,{delay:d=0,duration:i=400,easing:a=q}={}){const y=+getComputedStyle(r).opacity;return{delay:d,duration:i,easing:a,css:f=>`opacity: ${f*y}`}}function L(r,{delay:d=0,duration:i=400,easing:a=w,start:y=0,opacity:f=0}={}){const o=getComputedStyle(r),n=+o.opacity,u=o.transform==="none"?"":o.transform,e=1-y,t=n*(1-f);return{delay:d,duration:i,easing:a,css:(l,s)=>`
			transform: ${u} scale(${1-e*s});
			opacity: ${n-t*s}
		`}}function O({fallback:r,...d}){const i=new Map,a=new Map;function y(o,n,u){const{delay:e=0,duration:t=c=>Math.sqrt(c)*30,easing:l=w}=_(_({},d),u),s=o.getBoundingClientRect(),g=n.getBoundingClientRect(),p=s.left-g.left,h=s.top-g.top,C=s.width/g.width,k=s.height/g.height,x=Math.sqrt(p*p+h*h),m=getComputedStyle(n),M=m.transform==="none"?"":m.transform,S=+m.opacity;return{delay:e,duration:B(t)?t(x):t,easing:l,css:(c,$)=>`
				opacity: ${c*S};
				transform-origin: top left;
				transform: ${M} translate(${$*p}px,${$*h}px) scale(${c+(1-c)*C}, ${c+(1-c)*k});
			`}}function f(o,n,u){return(e,t)=>(o.set(t.key,e),()=>{if(n.has(t.key)){const l=n.get(t.key);return n.delete(t.key),y(l,e,t)}return o.delete(t.key),r&&r(e,t,u)})}return[f(a,i,!1),f(i,a,!0)]}export{O as c,G as f,L as s};
