import{C as n,P as i,i as u,u as l,a as c,b as p}from"./hero-C63fsxgk.js";import{j as s}from"./navbar-BjKwzrLc.js";import{r}from"./vendor-B04UmgXG.js";const x=a=>{const t=r.useRef(),[o]=r.useState(()=>u(new Float32Array(5e3),{radius:1.2}));return l((d,e)=>{t.current.rotation.x-=e/10,t.current.rotation.y-=e/15}),s.jsx("group",{rotation:[0,0,Math.PI/4],children:s.jsx(c,{ref:t,positions:o,stride:3,frustumCulled:!0,...a,children:s.jsx(p,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},j=()=>s.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:s.jsxs(n,{camera:{position:[0,0,1]},children:[s.jsx(r.Suspense,{fallback:null,children:s.jsx(x,{})}),s.jsx(i,{all:!0})]})});export{j as default};
