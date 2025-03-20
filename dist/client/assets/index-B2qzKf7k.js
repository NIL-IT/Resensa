import{r as d}from"./three-vendor-CsCe7JNW.js";import{c as b,b as y,u as C,d as L,e as v}from"./index-Dc3QFRw6.js";/**
 * React Router DOM v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},h.apply(this,arguments)}function O(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}function P(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function R(e,t){return e.button===0&&(!t||t==="_self")&&!P(e)}const j=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],E=d.forwardRef(function(t,a){let{onClick:r,relative:n,reloadDocument:l,replace:i,state:s,target:o,to:c,preventScrollReset:u}=t,f=O(t,j),k=b(c,{relative:n}),g=x(c,{replace:i,state:s,target:o,preventScrollReset:u,relative:n});function m(p){r&&r(p),p.defaultPrevented||g(p)}return d.createElement("a",h({},f,{href:k,onClick:l?r:m,ref:a,target:o}))});function x(e,t){let{target:a,replace:r,state:n,preventScrollReset:l,relative:i}=t===void 0?{}:t,s=y(),o=C(),c=L(e,{relative:i});return d.useCallback(u=>{if(R(u,a)){u.preventDefault();let f=r!==void 0?r:v(o)===v(c);s(e,{replace:f,state:n,preventScrollReset:l,relative:i})}},[o,s,c,r,n,a,e,l,i])}export{E as L};
