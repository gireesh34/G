import{j as e,s as r,p as x,g as m}from"./navbar-BjKwzrLc.js";import"./vendor-B04UmgXG.js";import{S as p,t as j,f as i,T as h}from"./about-8KxiTfQ5.js";import{m as t}from"./hero-C63fsxgk.js";const f=({index:a,name:s,description:c,tags:o,image:n,source_code_link:d})=>e.jsx(t.div,{variants:i("up","spring",a*.5,.75),children:e.jsxs(h,{options:{max:45,scale:1,speed:450},className:"bg-black p-5 rounded-2xl sm:w-[360px] w-full",children:[e.jsxs("div",{className:"relative w-full h-[230px]",children:[e.jsx("img",{src:n,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:e.jsx("div",{onClick:()=>window.open(d,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e.jsx("img",{src:m,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-white font-bold text-[24px]",children:s}),e.jsx("p",{className:"mt-2 text-secondary text-[14px]",children:c})]}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:o.map(l=>e.jsxs("p",{className:`text-[14px] ${l.color}`,children:["#",l.name]},`${s}-${l.name}`))})]})}),u=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t.div,{variants:j(),children:[e.jsx("p",{className:`${r.sectionSubText} `,children:"My work"}),e.jsx("h2",{className:`${r.sectionHeadText}`,children:"Projects."})]}),e.jsx("div",{className:"w-full flex",children:e.jsx(t.p,{variants:i("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-7",children:x.map((a,s)=>e.jsx(f,{index:s,...a},`project-${s}`))})]}),b=p(u,"");export{b as default};
