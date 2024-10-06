import{j as d,s as I,e as L}from"./navbar-BjKwzrLc.js";import{r as g,c as K}from"./vendor-B04UmgXG.js";import{p as F}from"./hero-C63fsxgk.js";import{S as G}from"./about-8KxiTfQ5.js";var N={},q={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function i(){for(var n="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(n=t(n,a(l)))}return n}function a(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return i.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var o="";for(var l in n)r.call(n,l)&&n[l]&&(o=t(o,l));return o}function t(n,o){return o?n?n+" "+o:n+o:n}e.exports?(i.default=i,e.exports=i):window.classNames=i})()})(q);var D=q.exports;N.__esModule=!0;N.default=void 0;var J=C(g),m=C(F),Q=C(D);function C(e){return e&&e.__esModule?e:{default:e}}const U=({animate:e=!0,className:r="",layout:i="2-columns",lineColor:a="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),J.default.createElement("div",{className:(0,Q.default)(r,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":i==="2-columns","vertical-timeline--one-column-left":i==="1-column"||i==="1-column-left","vertical-timeline--one-column-right":i==="1-column-right"})},t));U.propTypes={children:m.default.oneOfType([m.default.arrayOf(m.default.node),m.default.node]).isRequired,className:m.default.string,animate:m.default.bool,layout:m.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:m.default.string};var X=U;N.default=X;var j={};function S(){return S=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},S.apply(this,arguments)}function Y(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,T(e,r)}function T(e,r){return T=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a},T(e,r)}function Z(e,r){if(e==null)return{};var i={},a=Object.keys(e),t,n;for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&(i[t]=e[t]);return i}var M=new Map,V=new WeakMap,P=0,B=void 0;function ee(e){B=e}function te(e){return e?(V.has(e)||(P+=1,V.set(e,P.toString())),V.get(e)):"0"}function ne(e){return Object.keys(e).sort().filter(function(r){return e[r]!==void 0}).map(function(r){return r+"_"+(r==="root"?te(e.root):e[r])}).toString()}function re(e){var r=ne(e),i=M.get(r);if(!i){var a=new Map,t,n=new IntersectionObserver(function(o){o.forEach(function(l){var c,u=l.isIntersecting&&t.some(function(f){return l.intersectionRatio>=f});e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(c=a.get(l.target))==null||c.forEach(function(f){f(u,l)})})},e);t=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:r,observer:n,elements:a},M.set(r,i)}return i}function $(e,r,i,a){if(i===void 0&&(i={}),a===void 0&&(a=B),typeof window.IntersectionObserver>"u"&&a!==void 0){var t=e.getBoundingClientRect();return r(a,{isIntersecting:a,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var n=re(i),o=n.id,l=n.observer,c=n.elements,u=c.get(e)||[];return c.has(e)||c.set(e,u),u.push(r),l.observe(e),function(){u.splice(u.indexOf(r),1),u.length===0&&(c.delete(e),l.unobserve(e)),c.size===0&&(l.disconnect(),M.delete(o))}}var ie=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function W(e){return typeof e.children!="function"}var O=function(e){Y(r,e);function r(a){var t;return t=e.call(this,a)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(n){t.node&&(t.unobserve(),!n&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=n||null,t.observeNode()},t.handleChange=function(n,o){n&&t.props.triggerOnce&&t.unobserve(),W(t.props)||t.setState({inView:n,entry:o}),t.props.onChange&&t.props.onChange(n,o)},t.state={inView:!!a.initialInView,entry:void 0},t}var i=r.prototype;return i.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,n=t.threshold,o=t.root,l=t.rootMargin,c=t.trackVisibility,u=t.delay,f=t.fallbackInView;this._unobserveCb=$(this.node,this.handleChange,{threshold:n,root:o,rootMargin:l,trackVisibility:c,delay:u},f)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!W(this.props)){var t=this.state,n=t.inView,o=t.entry;return this.props.children({inView:n,entry:o,ref:this.handleNode})}var l=this.props,c=l.children,u=l.as,f=Z(l,ie);return g.createElement(u||"div",S({ref:this.handleNode},f),c)},r}(g.Component);O.displayName="InView";O.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ae(e){var r=e===void 0?{}:e,i=r.threshold,a=r.delay,t=r.trackVisibility,n=r.rootMargin,o=r.root,l=r.triggerOnce,c=r.skip,u=r.initialInView,f=r.fallbackInView,h=g.useRef(),b=g.useState({inView:!!u}),x=b[0],_=b[1],E=g.useCallback(function(y){h.current!==void 0&&(h.current(),h.current=void 0),!c&&y&&(h.current=$(y,function(k,A){_({inView:k,entry:A}),A.isIntersecting&&l&&h.current&&(h.current(),h.current=void 0)},{root:o,rootMargin:n,threshold:i,trackVisibility:t,delay:a},f))},[Array.isArray(i)?i.toString():i,o,n,l,c,t,f,a]);g.useEffect(function(){!h.current&&x.entry&&!l&&!c&&_({inView:!!u})});var p=[E,x.inView,x.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const le=Object.freeze(Object.defineProperty({__proto__:null,InView:O,default:O,defaultFallbackInView:ee,observe:$,useInView:ae},Symbol.toStringTag,{value:"Module"})),oe=K(le);j.__esModule=!0;j.default=void 0;var v=R(g),s=R(F),w=R(D),se=oe;function R(e){return e&&e.__esModule?e:{default:e}}const z=({children:e="",className:r="",contentArrowStyle:i=null,contentStyle:a=null,date:t="",dateClassName:n="",icon:o=null,iconClassName:l="",iconOnClick:c=null,onTimelineElementClick:u=null,iconStyle:f=null,id:h="",position:b="",style:x=null,textClassName:_="",intersectionObserverProps:E={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:p=!1})=>v.default.createElement(se.InView,E,({inView:y,ref:k})=>v.default.createElement("div",{ref:k,id:h,className:(0,w.default)(r,"vertical-timeline-element",{"vertical-timeline-element--left":b==="left","vertical-timeline-element--right":b==="right","vertical-timeline-element--no-children":e===""}),style:x},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:f,onClick:c,className:(0,w.default)(l,"vertical-timeline-element-icon",{"bounce-in":y||p,"is-hidden":!(y||p)})},o),v.default.createElement("div",{style:a,onClick:u,className:(0,w.default)(_,"vertical-timeline-element-content",{"bounce-in":y||p,"is-hidden":!(y||p)})},v.default.createElement("div",{style:i,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,w.default)(n,"vertical-timeline-element-date")},t)))));z.propTypes={children:s.default.oneOfType([s.default.arrayOf(s.default.node),s.default.node]),className:s.default.string,contentArrowStyle:s.default.shape({}),contentStyle:s.default.shape({}),date:s.default.node,dateClassName:s.default.string,icon:s.default.element,iconClassName:s.default.string,iconStyle:s.default.shape({}),iconOnClick:s.default.func,onTimelineElementClick:s.default.func,id:s.default.string,position:s.default.string,style:s.default.shape({}),textClassName:s.default.string,visible:s.default.bool,intersectionObserverProps:s.default.shape({root:s.default.object,rootMargin:s.default.string,threshold:s.default.number,triggerOnce:s.default.bool})};var ce=z;j.default=ce;var H={VerticalTimeline:N.default,VerticalTimelineElement:j.default};const ue=({experience:e})=>d.jsxs(H.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:d.jsx("div",{className:"flex justify-center items-center w-full h-full",children:d.jsx("img",{src:e.icon,alt:e.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-white text-[24px] font-bold",children:e.title}),d.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:e.company_name})]}),d.jsx("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map((r,i)=>d.jsx("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:r},`experience-point-${i}`))})]}),de=()=>d.jsxs(d.Fragment,{children:[d.jsxs("div",{children:[d.jsx("p",{className:`${I.sectionSubText} text-center`,children:"What I have done so far"}),d.jsx("h2",{className:`${I.sectionHeadText} text-center`,children:"Projects"}),d.jsx("h3",{className:`${I.sectionHeadText} text-center`,children:"Work Experience."})]}),d.jsx("div",{className:"mt-20 flex flex-col",children:d.jsx(H.VerticalTimeline,{children:L.map((e,r)=>d.jsx(ue,{experience:e},`experience-${r}`))})})]}),ve=G(de,"work");export{ve as default};
