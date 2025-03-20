import{R as _,j as e,r as i}from"./three-vendor-CsCe7JNW.js";import{u as w,T as y,d as I,Z as N,h as E,E as T,a as q,_ as j,F as $,g as F,H as V}from"./index-BjxaXYoI.js";import{E as k}from"./EquipmentBanner-C9REP3L9.js";import{A as O}from"./Advantages-16T_5Gde.js";import{I as R}from"./ItemsList-WeXvd_K9.js";import{F as A}from"./Footer-DKGuzK-D.js";import{S as B}from"./SeoBlock-DqXokuWA.js";import"./react-vendor-DomL0yj5.js";function C(){const n=w(),[c,s]=_.useState(""),p=({target:{value:x}})=>{s(x)},m=x=>{x.preventDefault(),n(I(!0)),n(N(c))};return e.jsxs("section",{className:"overflow-hidden bg-gray-200 py-[69px] flex-center flex-col justify-center gap-10 mt-[35px] px-5",children:[e.jsx(y,{text:"вы можете проверить статус своего заказа",className:"text-xl font-normal text-gray-400 ml-3 sm:ml-0"}),e.jsxs("form",{onSubmit:m,className:"w-[600px] flex flex-col items-center gap-5   md:flex-row md:flex-center md:justify-center ",children:[e.jsx("input",{placeholder:"Номер заказа",onChange:p,value:c,type:"number",className:"bg-white py-[18px] px-6 w-[300px] sm:w-[370px] text-base font-normal",required:!0}),e.jsxs("button",{type:"submit",className:"group bg-gray-400 text-white font-normal py-[15px] px-[30px] text-xs uppercase flex-center gap-5",children:[e.jsx("img",{className:"group-hover:translate-x-1 transition-all w-[30px]",src:"/icon/arrow.svg",alt:"arrow",title:"Нажмите чтобы посмотреть статус заказа"}),e.jsx("p",{children:"проверить"})]})]})]})}function H({currentProduct:n}){return e.jsxs("section",{className:"container  pt-10 pb-5 lg:pt-20 lg:pb-10",children:[e.jsx(y,{text:"описание",className:"ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"}),e.jsx("div",{className:"flex justify-center px-5 sm:p-0",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:n.extra_description},className:"w-[1160px]"})})]})}function J({list:n}){const c=w(),{pathname:s}=E(),p=T(),{routingToOrders:m,isAdmin:x,itemId:d,equipmentById:a,solutionsById:l}=q(({user:o})=>o),[v,S]=i.useState(s),[f,h]=i.useState(!0),u=!a&&!l?!0:!!a,[t,g]=i.useState(a||l||n[0]);document.body.style.overflowY="auto",i.useEffect(()=>{t||p("/")},[t]);const P=()=>{if(d)return;const o=document.querySelector("body").offsetWidth;let r;o>1600||o>1200?r=0:o>768?r=800:o>640?r=1200:o>420||o>375?r=1300:r=1200,r=document.body.scrollHeight-r,setTimeout(()=>{window.scrollTo({top:r,left:0,behavior:"smooth"})},10)};i.useEffect(()=>{if(!m)return;localStorage.getItem("hasVisitedProduct")?h(!1):(localStorage.setItem("hasVisitedProduct","true"),h(!0)),(m&&!x||f&&!x&&m)&&P(),f&&c(j(!0))},[m,x,f]),i.useEffect(()=>{g(a||l||n[0])},[s,a,l]),i.useEffect(()=>{if(d){window.scrollTo({top:0,left:0,behavior:"smooth"}),c($(null));return}const o=v.split("/"),r=s.split("/");(o[1]!==r[1]||o[2]!==r[2])&&(window.scrollTo({top:0,left:0,behavior:"smooth"}),c(j(!1))),g(a||l||n[0]),S(s)},[s,d]);const b=i.useRef(!1);return i.useEffect(()=>{b.current||(b.current=!0,c(F()))},[]),n.length>0?e.jsxs(e.Fragment,{children:[e.jsx(B,{url:`https://new.recensa.ru/${u?`equipment/${s.split("/")[2]}`:`solutions/${s.split("/")[2]}`}`,title:t.page_title,description:t.hidden_seo_text}),e.jsxs(V,{children:[e.jsx("title",{children:t.page_title}),e.jsx("meta",{name:"description",content:t.page_description}),e.jsx("meta",{name:"keywords",content:t.page_keywords}),e.jsx("meta",{property:"og:title",content:t.page_title}),e.jsx("meta",{property:"og:url",content:`https://new.recensa.ru/${u?`equipment/${s.split("/")[2]}`:`solutions/${s.split("/")[2]}`}`}),e.jsx("link",{rel:"canonical",href:`https://new.recensa.ru/${u?`equipment/${s.split("/")[2]}`:`solutions/${s.split("/")[2]}`}`})]}),e.jsxs("main",{children:[e.jsx(k,{list:n,currentProduct:!0,bannerImg:t.image_banner,cardImg:t.image_card,title:t.sub_header,subtitle:t.name,text:t.header,isButton:!0,width:"w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"}),e.jsx(O,{}),e.jsx(H,{currentProduct:t}),e.jsx(R,{equipment:u,title:"каталог",list:n,limited:!1}),e.jsx(C,{})]}),e.jsx(A,{})]}):e.jsx(e.Fragment,{})}export{J as default};
