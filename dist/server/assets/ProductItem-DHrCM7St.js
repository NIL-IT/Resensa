import{u as t,j as e,T as s,d as r,a1 as l,h as n,I as o,a,a2 as i,J as x,g as m,A as p,H as c,F as d}from"./index-BzWKmBy6.js";import u,{useState as g,useEffect as h,useRef as f}from"react";import{E as j}from"./EquipmentBanner-qgdmODOb.js";import{A as b}from"./Advantages-BNBehLpP.js";import{I as w}from"./ItemsList-CtEQtaXh.js";import"react-dom";function y(){const n=t(),[o,a]=u.useState("");return e.jsxs("section",{className:"overflow-hidden bg-gray-200 py-[69px] flex-center flex-col justify-center gap-10 mt-[35px] px-5",children:[e.jsx(s,{text:"вы можете проверить статус своего заказа",className:"text-xl font-normal text-gray-400 ml-3 sm:ml-0"}),e.jsxs("form",{onSubmit:t=>{t.preventDefault(),n(r(!0)),n(l(o))},className:"w-[600px] flex flex-col items-center gap-5   md:flex-row md:flex-center md:justify-center ",children:[e.jsx("input",{placeholder:"Номер заказа",onChange:({target:{value:t}})=>{a(t)},value:o,type:"number",className:"bg-white py-[18px] px-6 w-[300px] sm:w-[370px] text-base font-normal",required:!0}),e.jsxs("button",{type:"submit",className:"group bg-gray-400 text-white font-normal py-[15px] px-[30px] text-xs uppercase flex-center gap-5",children:[e.jsx("img",{className:"group-hover:translate-x-1 transition-all w-[30px]",src:"/icon/arrow.svg",alt:"arrow",title:"Нажмите чтобы посмотреть статус заказа"}),e.jsx("p",{children:"проверить"})]})]})]})}function v({currentProduct:t}){return e.jsxs("section",{className:"container  pt-10 pb-5 lg:pt-20 lg:pb-10",children:[e.jsx(s,{text:"описание",className:"ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"}),e.jsx("div",{className:"flex justify-center px-5 sm:p-0",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t.extra_description},className:"w-[1160px]"})})]})}function _({list:s}){const r=t(),{pathname:l}=n(),u=o(),{routingToOrders:_,isAdmin:I,itemId:N,equipmentById:q,solutionsById:T}=a((({user:t})=>t)),[S,$]=g(l),[P,k]=g(!0),A=!q&&!T||!!q,[B,F]=g(q||T||(s&&s.length>0?s[0]:null));console.log(B),document.body.style.overflowY="auto",h((()=>{B||u("/")}),[B]);h((()=>{if(!_)return;localStorage.getItem("hasVisitedProduct")?k(!1):(localStorage.setItem("hasVisitedProduct","true"),k(!0)),(_&&!I||P&&!I&&_)&&(()=>{if(N)return;const t=document.querySelector("body").offsetWidth;let e;e=t>1600||t>1200?0:t>768?800:t>640?1200:t>420||t>375?1300:1200,e=document.body.scrollHeight-e,setTimeout((()=>{window.scrollTo({top:e,left:0,behavior:"smooth"})}),10)})(),P&&r(i(!0))}),[_,I,P]),h((()=>{F(q||(T||s[0]))}),[l,q,T]),h((()=>{if(N)return window.scrollTo({top:0,left:0,behavior:"smooth"}),void r(x(null));const t=S.split("/"),e=l.split("/");t[1]===e[1]&&t[2]===e[2]||(window.scrollTo({top:0,left:0,behavior:"smooth"}),r(i(!1))),F(q||(T||s[0])),$(l)}),[l,N]);const H=f(!1);return h((()=>{H.current||(H.current=!0,r(m()))}),[]),B?e.jsxs(e.Fragment,{children:[e.jsx(p,{url:"https://new.recensa.ru/"+(A?`equipment/${l.split("/")[2]}`:`solutions/${l.split("/")[2]}`),title:B.page_title,description:B.hidden_seo_text}),e.jsxs(c,{children:[e.jsx("title",{children:B.page_title}),e.jsx("meta",{name:"description",content:B.page_description}),e.jsx("meta",{name:"keywords",content:B.page_keywords}),e.jsx("meta",{property:"og:title",content:B.page_title}),e.jsx("meta",{property:"og:url",content:"https://new.recensa.ru/"+(A?`equipment/${l.split("/")[2]}`:`solutions/${l.split("/")[2]}`)}),e.jsx("link",{rel:"canonical",href:"https://new.recensa.ru/"+(A?`equipment/${l.split("/")[2]}`:`solutions/${l.split("/")[2]}`)})]}),e.jsxs("main",{children:[e.jsx(j,{list:s,currentProduct:!0,bannerImg:B.image_banner,cardImg:B.image_card,title:B.sub_header,subtitle:B.name,text:B.header,isButton:!0,width:"w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"}),e.jsx(b,{}),e.jsx(v,{currentProduct:B}),e.jsx(w,{equipment:A,title:"каталог",list:s,limited:!1}),e.jsx(y,{})]}),e.jsx(d,{})]}):e.jsx(e.Fragment,{})}export{_ as default};
