function c(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}function r(n){const u=n-1;return u*u*u+1}function a(n){return n/=.5,n<1?.5*n*n:(n--,-.5*(n*(n-2)-1))}export{r as a,c,a as q};
