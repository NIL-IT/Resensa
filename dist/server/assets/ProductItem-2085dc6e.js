import{u as k,j as e,T as j,d as V,Z as E,h as w,E as I,a as W,$ as D,F as U,g as y,H as S}from"./index-a18ae0b1.js";import _,{useState as h,useEffect as c,useRef as O}from"react";import{E as T}from"./EquipmentBanner-78d9ed60.js";import{A as $}from"./Advantages-ea891c43.js";import{I as q}from"./ItemsList-7679e954.js";import{F}from"./Footer-c9d37d62.js";import{S as A}from"./SeoBlock-7ef91bf5.js";import"react-dom";function B(){const o=k(),[a,r]=_.useState(""),p=({target:{value:m}})=>{r(m)},u=m=>{m.preventDefault(),o(V(!0)),o(E(a))};return e.jsxDEV("section",{className:"overflow-hidden bg-gray-200 py-[69px] flex-center flex-col justify-center gap-10 mt-[35px] px-5",children:[e.jsxDEV(j,{text:"вы можете проверить статус своего заказа",className:"text-xl font-normal text-gray-400 ml-3 sm:ml-0"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/OrderStatus.jsx",lineNumber:23,columnNumber:7},this),e.jsxDEV("form",{onSubmit:u,className:"w-[600px] flex flex-col items-center gap-5   md:flex-row md:flex-center md:justify-center ",children:[e.jsxDEV("input",{placeholder:"Номер заказа",onChange:p,value:a,type:"number",className:"bg-white py-[18px] px-6 w-[300px] sm:w-[370px] text-base font-normal",required:!0},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/OrderStatus.jsx",lineNumber:32,columnNumber:9},this),e.jsxDEV("button",{type:"submit",className:"group bg-gray-400 text-white font-normal py-[15px] px-[30px] text-xs uppercase flex-center gap-5",children:[e.jsxDEV("img",{className:"group-hover:translate-x-1 transition-all w-[30px]",src:"/icon/arrow.svg",alt:"arrow",title:"Нажмите чтобы посмотреть статус заказа"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/OrderStatus.jsx",lineNumber:46,columnNumber:11},this),e.jsxDEV("p",{children:"проверить"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/OrderStatus.jsx",lineNumber:53,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/OrderStatus.jsx",lineNumber:40,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/OrderStatus.jsx",lineNumber:28,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/OrderStatus.jsx",lineNumber:22,columnNumber:5},this)}function R({currentProduct:o}){return e.jsxDEV("section",{className:"container  pt-10 pb-5 lg:pt-20 lg:pb-10",children:[e.jsxDEV(j,{text:"описание",className:"ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ProductDescription.jsx",lineNumber:8,columnNumber:7},this),e.jsxDEV("div",{className:"flex justify-center px-5 sm:p-0",children:e.jsxDEV("div",{dangerouslySetInnerHTML:{__html:o.extra_description},className:"w-[1160px]"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ProductDescription.jsx",lineNumber:13,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ProductDescription.jsx",lineNumber:12,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ProductDescription.jsx",lineNumber:7,columnNumber:5},this)}function K({list:o}){const a=k(),{pathname:r}=w(),p=I(),{routingToOrders:u,isAdmin:m,itemId:x,equipmentById:i,solutionsById:l}=W(({user:n})=>n),[C,v]=h(r),[f,N]=h(!0),d=!i&&!l?!0:!!i,[s,b]=h(i||l||(o&&o.length>0?o[0]:null));document.body.style.overflowY="auto",c(()=>{s||p("/")},[s]);const P=()=>{if(x)return;const n=document.querySelector("body").offsetWidth;let t;n>1600||n>1200?t=0:n>768?t=800:n>640?t=1200:n>420||n>375?t=1300:t=1200,t=document.body.scrollHeight-t,setTimeout(()=>{window.scrollTo({top:t,left:0,behavior:"smooth"})},10)};c(()=>{if(!u)return;localStorage.getItem("hasVisitedProduct")?N(!1):(localStorage.setItem("hasVisitedProduct","true"),N(!0)),(u&&!m||f&&!m&&u)&&P(),f&&a(D(!0))},[u,m,f]),c(()=>{b(i||l||o[0])},[r,i,l]),c(()=>{if(x){window.scrollTo({top:0,left:0,behavior:"smooth"}),a(U(null));return}const n=C.split("/"),t=r.split("/");(n[1]!==t[1]||n[2]!==t[2])&&(window.scrollTo({top:0,left:0,behavior:"smooth"}),a(D(!1))),b(i||l||o[0]),v(r)},[r,x]);const g=O(!1);return c(()=>{g.current||(g.current=!0,a(y()))},[]),s?e.jsxDEV(e.Fragment,{children:[e.jsxDEV(A,{url:`https://new.recensa.ru/${d?`equipment/${r.split("/")[2]}`:`solutions/${r.split("/")[2]}`}`,title:s.page_title,description:s.hidden_seo_text},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:126,columnNumber:7},this),e.jsxDEV(S,{children:[e.jsxDEV("title",{children:s.page_title},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:136,columnNumber:9},this),e.jsxDEV("meta",{name:"description",content:s.page_description},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:137,columnNumber:9},this),e.jsxDEV("meta",{name:"keywords",content:s.page_keywords},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:138,columnNumber:9},this),e.jsxDEV("meta",{property:"og:title",content:s.page_title},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:139,columnNumber:9},this),e.jsxDEV("meta",{property:"og:url",content:`https://new.recensa.ru/${d?`equipment/${r.split("/")[2]}`:`solutions/${r.split("/")[2]}`}`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:140,columnNumber:9},this),e.jsxDEV("link",{rel:"canonical",href:`https://new.recensa.ru/${d?`equipment/${r.split("/")[2]}`:`solutions/${r.split("/")[2]}`}`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:148,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:135,columnNumber:7},this),e.jsxDEV("main",{children:[e.jsxDEV(T,{list:o,currentProduct:!0,bannerImg:s.image_banner,cardImg:s.image_card,title:s.sub_header,subtitle:s.name,text:s.header,isButton:!0,width:"w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:158,columnNumber:9},this),e.jsxDEV($,{},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:169,columnNumber:9},this),e.jsxDEV(R,{currentProduct:s},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:170,columnNumber:9},this),e.jsxDEV(q,{equipment:d,title:"каталог",list:o,limited:!1},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:171,columnNumber:9},this),e.jsxDEV(B,{},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:177,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:157,columnNumber:7},this),e.jsxDEV(F,{},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:179,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:125,columnNumber:5},this):e.jsxDEV(e.Fragment,{},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/ProductItem.jsx",lineNumber:182,columnNumber:5},this)}export{K as default};
