import{V as q,G as _,L as B}from"./scheduler.42cf4f34.js";function w(e){const n=e-1;return n*n*n+1}function v(e,{delay:n=0,duration:a=400,easing:f=q}={}){const u=+getComputedStyle(e).opacity;return{delay:n,duration:a,easing:f,css:d=>`opacity: ${d*u}`}}function G(e,{delay:n=0,duration:a=400,easing:f=w,start:u=0,opacity:d=0}={}){const s=getComputedStyle(e),o=+s.opacity,y=s.transform==="none"?"":s.transform,c=1-u,t=o*(1-d);return{delay:n,duration:a,easing:f,css:(l,r)=>`
			transform: ${y} scale(${1-c*r});
			opacity: ${o-t*r}
		`}}function L({fallback:e,...n}){const a=new Map,f=new Map;function u(s,o,y){const{delay:c=0,duration:t=i=>Math.sqrt(i)*30,easing:l=w}=_(_({},n),y),r=s.getBoundingClientRect(),g=o.getBoundingClientRect(),p=r.left-g.left,h=r.top-g.top,C=r.width/g.width,k=r.height/g.height,x=Math.sqrt(p*p+h*h),$=getComputedStyle(o),M=$.transform==="none"?"":$.transform,S=+$.opacity;return{delay:c,duration:B(t)?t(x):t,easing:l,css:(i,m)=>`
				opacity: ${i*S};
				transform-origin: top left;
				transform: ${M} translate(${m*p}px,${m*h}px) scale(${i+(1-i)*C}, ${i+(1-i)*k});
			`}}function d(s,o,y){return(c,t)=>(s.set(t.key,c),()=>{if(o.has(t.key)){const l=o.get(t.key);return o.delete(t.key),u(l,c,t)}return s.delete(t.key),e&&e(c,t,y)})}return[d(f,a,!1),d(a,f,!0)]}export{L as c,v as f,G as s};
