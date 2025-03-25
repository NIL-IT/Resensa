import{u as S,h as T,j as e,T as _,B as j,L as $,w as a,c as B,b as y,a0 as O,a1 as A,a2 as R,a3 as q}from"./index-a18ae0b1.js";import{useState as i,useEffect as F}from"react";function z({limited:d=!0,list:t,href:H,title:h,equipment:l}){const[x,D]=i(d),[f,p]=i([]),[c,N]=i([]),[I,b]=i(!1),o=S(),{pathname:v}=T(),w=v.split("/")[2]==="orders";let g;F(()=>{t&&(x&&t.length>6?(p(t.slice(0,6)),N(t.slice(6))):(p(t),N([])),!w&&t.length>0&&(g=t[0].hasOwnProperty("max_param")))},[t,d,x]);const L=(s,r)=>{o(B(s)),o(y(r))},E=async s=>{l?(await o(O(s)),o(A(null))):(await o(R(s)),o(q(null))),o(y(s))},U=()=>{b(!0);let s=0;const r=100;c.forEach((n,m)=>{setTimeout(()=>{p(u=>[...u,n]),m===c.length-1&&setTimeout(()=>{b(!1),D(!1)},300)},s),s+=r})},V=(s,r)=>{const{id:n,name:m,description:u,image_card:W,image_card_alt:k}=s,C=r>=6&&I;return e.jsxDEV($,{itemScope:!0,itemType:"http://schema.org/Product",to:l?`/equipment/${a(m)}`:`/solutions/${a(m)}`,onClick:()=>E(n),className:`relative sm:min-h-[420px] w-[280px] xs:w-[300px] sm:w-[320px] md:w-[330px]
        lg:w-[340px] xl:w-[345px] 2xl:w-[348px] 3xl:w-[352px] border border-gray-100 p-3 xs:p-3.5 sm:p-4
        transition-all duration-500 ease-in-out ${C?"opacity-0 transform translate-y-8 animate-fadeIn":"opacity-100"}`,style:{animationDelay:C?`${(r-6)*100}ms`:"0ms",animationFillMode:"forwards"},children:[e.jsxDEV("img",{itemProp:"image",className:"object-cover h-[260px] w-[260px] xs:h-[275px] xs:w-[275px] sm:h-[290px] sm:w-[290px] md:h-[300px] md:w-[300px] lg:h-[310px] lg:w-[310px] xl:h-[315px] xl:w-[315px] 2xl:h-[318px] 2xl:w-[318px] 3xl:h-[320px] 3xl:w-[320px]",src:W||"/img/placeholder.svg",alt:k,title:k},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:116,columnNumber:9},this),e.jsxDEV("meta",{itemProp:"brand",content:"Recensa"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:124,columnNumber:9},this),e.jsxDEV("meta",{itemProp:"sku",content:n},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:125,columnNumber:9},this),e.jsxDEV("div",{className:"invisible w-0 h-0",itemProp:"offers",itemScope:!0,itemType:"http://schema.org/Offer",children:[e.jsxDEV("meta",{itemProp:"price",content:"5000"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:132,columnNumber:11},this),e.jsxDEV("meta",{itemProp:"priceCurrency",content:"RUB"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:133,columnNumber:11},this),e.jsxDEV("meta",{itemProp:"availability",content:"https://schema.org/InStock"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:134,columnNumber:11},this),e.jsxDEV("link",{itemProp:"url",href:l?`/equipment/${a(m)}`:`/solutions/${a(m)}`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:135,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:126,columnNumber:9},this),e.jsxDEV("div",{className:"flex flex-col  mt-2",children:[e.jsxDEV("h3",{itemProp:"name",className:"text-gray-400 text-xs xs:text-xs sm:text-sm uppercase font-normal mb-2",children:m},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:146,columnNumber:11},this),e.jsxDEV("div",{itemProp:"description",dangerouslySetInnerHTML:{__html:u},className:`text-[11px] xs:text-[12px] sm:text-[13px]\r
             text-gray-300 pr-[48%] md:pr-[52%] overflow-hidden`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:153,columnNumber:11},this),e.jsxDEV(j,{noLink:!0,onClick:P=>{P.preventDefault(),L(!0,n)},text:"Оставить заявку",className:`absolute right-3 xs:right-3.5 sm:right-4\r
               bottom-3 xs:bottom-3.5 sm:bottom-4 \r
               max-w-[120px] md:max-w-[156px] md:max-h-[48px] \r
               text-[10px] md:text-[12px]\r
               py-[16px] px-[12px] hover:bg-gray-450`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:160,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:145,columnNumber:9},this)]},n,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:94,columnNumber:7},this)};return f.length>0?e.jsxDEV("section",{className:"container py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 xl:py-20 2xl:py-20 3xl:py-20",children:[e.jsxDEV("div",{itemScope:!0,itemType:"https://schema.org/ItemList",children:[e.jsxDEV(_,{itemProp:"name",text:h||(g?"Оборудование":"решения"),className:"ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:181,columnNumber:9},this),e.jsxDEV("meta",{itemProp:"numberOfItems",content:t?t.length:0},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:186,columnNumber:9},this),e.jsxDEV("div",{className:"flex justify-center w-full transition-all",children:e.jsxDEV("article",{className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8",children:f.map((s,r)=>V(s,r))},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:189,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:188,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:180,columnNumber:7},this),x&&c.length>0&&e.jsxDEV("div",{className:"flex justify-center",children:e.jsxDEV(j,{onClick:()=>U(),text:"смотреть все",className:"bg-white w-[90%] xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1158px] py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] text-gray-400 border border-gray-400 mt-[40px] xs:mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px] xl:mt-[62px] 2xl:mt-[63px] 3xl:mt-[64px] hover:bg-gray-50 hover:border-gray-200"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:196,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:195,columnNumber:9},this),e.jsxDEV("style",{jsx:"true",children:`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation-name: fadeIn;
          animation-duration: 500ms;
          animation-timing-function: ease-out;
        }
      `},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:204,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:179,columnNumber:5},this):e.jsxDEV("p",{children:"Загрузка..."},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/ItemsList.jsx",lineNumber:224,columnNumber:5},this)}export{z as I};
