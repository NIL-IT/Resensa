import{u as y,j as e,T as v,d as I,$ as N,h as T,F as $,a as q,a0 as w,G as F,g as V,H as k}from"./index-BbkmkbFc.js";import O,{useState as h,useEffect as m,useRef as A}from"react";import{E as B}from"./EquipmentBanner-UJBaT3OF.js";import{A as E}from"./Advantages-LG8UL3H0.js";import{I as R}from"./ItemsList-CZkgnF9S.js";import{F as C}from"./Footer-Dq-HTdDa.js";import{S as H}from"./SeoBlock-odZpp4Bi.js";import"react-dom";function D(){const n=y(),[l,s]=O.useState(""),u=({target:{value:c}})=>{s(c)},x=c=>{c.preventDefault(),n(I(!0)),n(N(l))};return e.jsxs("section",{className:"overflow-hidden bg-gray-200 py-[69px] flex-center flex-col justify-center gap-10 mt-[35px] px-5",children:[e.jsx(v,{text:"вы можете проверить статус своего заказа",className:"text-xl font-normal text-gray-400 ml-3 sm:ml-0"}),e.jsxs("form",{onSubmit:x,className:"w-[600px] flex flex-col items-center gap-5   md:flex-row md:flex-center md:justify-center ",children:[e.jsx("input",{placeholder:"Номер заказа",onChange:u,value:l,type:"number",className:"bg-white py-[18px] px-6 w-[300px] sm:w-[370px] text-base font-normal",required:!0}),e.jsxs("button",{type:"submit",className:"group bg-gray-400 text-white font-normal py-[15px] px-[30px] text-xs uppercase flex-center gap-5",children:[e.jsx("img",{className:"group-hover:translate-x-1 transition-all w-[30px]",src:"/icon/arrow.svg",alt:"arrow",title:"Нажмите чтобы посмотреть статус заказа"}),e.jsx("p",{children:"проверить"})]})]})]})}function L({currentProduct:n}){return e.jsxs("section",{className:"container  pt-10 pb-5 lg:pt-20 lg:pb-10",children:[e.jsx(v,{text:"описание",className:"ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"}),e.jsx("div",{className:"flex justify-center px-5 sm:p-0",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:n.extra_description},className:"w-[1160px]"})})]})}function U({list:n}){const l=y(),{pathname:s}=T(),u=$(),{routingToOrders:x,isAdmin:c,itemId:d,equipmentById:a,solutionsById:i}=q(({user:o})=>o),[_,P]=h(s),[f,g]=h(!0),p=!a&&!i?!0:!!a,[t,b]=h(a||i||n[0]);document.body.style.overflowY="auto",m(()=>{t||u("/")},[t]);const S=()=>{if(d)return;const o=document.querySelector("body").offsetWidth;let r;o>1600||o>1200?r=0:o>768?r=800:o>640?r=1200:o>420||o>375?r=1300:r=1200,r=document.body.scrollHeight-r,setTimeout(()=>{window.scrollTo({top:r,left:0,behavior:"smooth"})},10)};m(()=>{if(!x)return;localStorage.getItem("hasVisitedProduct")?g(!1):(localStorage.setItem("hasVisitedProduct","true"),g(!0)),(x&&!c||f&&!c&&x)&&S(),f&&l(w(!0))},[x,c,f]),m(()=>{b(a||i||n[0])},[s,a,i]),m(()=>{if(d){window.scrollTo({top:0,left:0,behavior:"smooth"}),l(F(null));return}const o=_.split("/"),r=s.split("/");(o[1]!==r[1]||o[2]!==r[2])&&(window.scrollTo({top:0,left:0,behavior:"smooth"}),l(w(!1))),b(a||i||n[0]),P(s)},[s,d]);const j=A(!1);return m(()=>{j.current||(j.current=!0,l(V()))},[]),n.length>0?e.jsxs(e.Fragment,{children:[e.jsx(H,{url:`https://new.recensa.ru/${p?`equipment/${s.split("/")[2]}`:`solutions/${s.split("/")[2]}`}`,title:t.page_title,description:t.hidden_seo_text}),e.jsxs(k,{children:[e.jsx("title",{children:t.page_title}),e.jsx("meta",{name:"description",content:t.page_description}),e.jsx("meta",{name:"keywords",content:t.page_keywords}),e.jsx("meta",{property:"og:title",content:t.page_title}),e.jsx("meta",{property:"og:url",content:`https://new.recensa.ru/${p?`equipment/${s.split("/")[2]}`:`solutions/${s.split("/")[2]}`}`}),e.jsx("link",{rel:"canonical",href:`https://new.recensa.ru/${p?`equipment/${s.split("/")[2]}`:`solutions/${s.split("/")[2]}`}`})]}),e.jsxs("main",{children:[e.jsx(B,{list:n,currentProduct:!0,bannerImg:t.image_banner,cardImg:t.image_card,title:t.sub_header,subtitle:t.name,text:t.header,isButton:!0,width:"w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"}),e.jsx(E,{}),e.jsx(L,{currentProduct:t}),e.jsx(R,{equipment:p,title:"каталог",list:n,limited:!1}),e.jsx(D,{})]}),e.jsx(C,{})]}):e.jsx(e.Fragment,{})}export{U as default};
