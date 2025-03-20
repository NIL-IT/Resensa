var b=Object.defineProperty,x=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var w=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,i=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&w(e,t,r[t]);if(c)for(var t of c(r))f.call(r,t)&&w(e,t,r[t]);return e},h=(e,r)=>x(e,y(r));var u=(e,r)=>{var t={};for(var o in e)p.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&c)for(var o of c(e))r.indexOf(o)<0&&f.call(e,o)&&(t[o]=e[o]);return t};import{r as a}from"./three-vendor-CsCe7JNW.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=(...e)=>e.filter((r,t,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=a.forwardRef((j,g)=>{var d=j,{color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:l="",children:n,iconNode:m}=d,s=u(d,["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"]);return a.createElement("svg",i(h(i({ref:g},E),{width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:C("lucide",l)}),s),[...m.map(([k,v])=>a.createElement(k,v)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(e,r)=>{const t=a.forwardRef((m,n)=>{var s=m,{className:o}=s,l=u(s,["className"]);return a.createElement(L,i({ref:n,iconNode:r,className:C(`lucide-${A(e)}`,o)},l))});return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);export{I as C,$ as c};
