import{r as u,j as e}from"./three-vendor-D76XtHXd.js";import{h as x,a as d,u as j,b as f,H as g}from"./index-CfhPxw0f.js";import{E as h}from"./EquipmentBanner-CvLMrDzD.js";import{I as q}from"./ItemsList-BrM8JOHm.js";import{O as w}from"./Objects-Cm8HE33Q.js";import{F as _}from"./Footer-DzeNcs2D.js";import"./react-vendor-C6O4aKhz.js";function H({data:i,bannerImg:r,title:a,text:p,placeholderSrc:m}){const{pathname:n}=x(),{equipment:s,solutions:o}=d(({user:c})=>c);console.log(s,o);const l=j();u.useEffect(()=>{l(f(null)),window.scrollTo({top:0,left:0})},[n]),document.body.style.overflowY="auto";const t=n.split("/")[1]==="equipment";return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx("title",{children:t?s[0].page_title:o[0].page_title}),e.jsx("meta",{name:"description",content:t?s[0].page_description:o[0].page_description}),e.jsx("meta",{name:"keywords",content:t?s[0].page_keywords:o[0].page_keywords}),e.jsx("meta",{property:"og:title",content:t?s[0].page_title:o[0].page_title}),e.jsx("meta",{property:"og:url",content:`https://new.recensa.ru/${t?"equipment":"solutions"}`}),e.jsx("link",{rel:"canonical",href:`https://new.recensa.ru/${t?"equipment":"solutions"}`})]}),e.jsxs("main",{children:[e.jsx(h,{bannerImg:r,title:a,text:p,subtitle:"recensa",isButton:!0,placeholderSrc:m}),e.jsx(q,{equipment:t,list:i,limited:!1}),e.jsx(w,{className:"mt-[20px]"})]}),e.jsx(_,{})]})}export{H as default};
