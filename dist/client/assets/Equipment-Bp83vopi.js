import{r as u,j as t}from"./three-vendor-CsCe7JNW.js";import{h as c,a as x,u as d,b as j,H as f}from"./index-RXrTB36n.js";import{E as h}from"./EquipmentBanner-B3hPnI87.js";import{I as g}from"./ItemsList-wfo9jURv.js";import{O as E}from"./Objects-Vd5zgRJ8.js";import{F as _}from"./Footer-C8vAoLHB.js";import{S as q}from"./SeoBlock-DqXokuWA.js";import"./react-vendor-DomL0yj5.js";function v({company:e,data:o,bannerImg:i,title:s,text:n,placeholderSrc:a}){const{pathname:r}=c(),{equipment:w,solutions:b}=x(({user:p})=>p),l=d();u.useEffect(()=>{l(j(null)),window.scrollTo({top:0,left:0})},[r]),document.body.style.overflowY="auto";const m=r.split("/")[1]==="equipment";return t.jsxs(t.Fragment,{children:[t.jsx(q,{url:e.url,title:e.page_title,description:e.hidden_seo_text}),t.jsxs(f,{children:[t.jsx("title",{children:e.page_title}),t.jsx("meta",{name:"description",content:e.page_description}),t.jsx("meta",{name:"keywords",content:e.page_keywords}),t.jsx("meta",{property:"og:title",content:e.page_title}),t.jsx("meta",{property:"og:url",content:e.url}),t.jsx("link",{rel:"canonical",href:e.url})]}),t.jsxs("main",{children:[t.jsx(h,{bannerImg:i,title:s,text:n,subtitle:"recensa",isButton:!0,placeholderSrc:a}),t.jsx(g,{equipment:m,list:o,limited:!1,title:s}),t.jsx(E,{className:"mt-[20px]"})]}),t.jsx(_,{})]})}export{v as default};
