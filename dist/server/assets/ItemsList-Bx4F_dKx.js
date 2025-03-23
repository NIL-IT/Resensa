import{u as E,h as O,j as e,T as A,B as I,L as D,w as l,a0 as R,a1 as q,a2 as F,a3 as H,b as v,c as M}from"./index-Db2tEebN.js";import{useState as r,useEffect as Y}from"react";function G({limited:h=!0,list:s,href:U,title:g,equipment:p}){const[i,P]=r(h),[u,o]=r([]),[c,y]=r([]),[N,f]=r(!1),a=E(),{pathname:k}=O(),L=k.split("/")[2]==="orders";let w;Y(()=>{s&&(i&&s.length>6?(o(s.slice(0,6)),y(s.slice(6))):(o(s),y([])),!L&&s.length>0&&(w=s[0].hasOwnProperty("max_param")))},[s,h,i]);const S=(t,x)=>{a(M(t)),a(v(x))},T=async t=>{p?(await a(R(t)),a(q(null))):(await a(F(t)),a(H(null))),a(v(t))},C=()=>{f(!0);let t=0;const x=100;c.forEach((n,m)=>{setTimeout(()=>{o(d=>[...d,n]),m===c.length-1&&setTimeout(()=>{f(!1),P(!1)},300)},t),t+=x})},_=(t,x)=>{const{id:n,name:m,description:d,image_card:$,image_card_alt:b}=t,j=x>=6&&N;return e.jsxs(D,{itemScope:!0,itemType:"http://schema.org/Product",to:p?`/equipment/${l(m)}`:`/solutions/${l(m)}`,onClick:()=>T(n),className:`relative sm:min-h-[420px] w-[280px] xs:w-[300px] sm:w-[320px] md:w-[330px]
        lg:w-[340px] xl:w-[345px] 2xl:w-[348px] 3xl:w-[352px] border border-gray-100 p-3 xs:p-3.5 sm:p-4
        transition-all duration-500 ease-in-out ${j?"opacity-0 transform translate-y-8 animate-fadeIn":"opacity-100"}`,style:{animationDelay:j?`${(x-6)*100}ms`:"0ms",animationFillMode:"forwards"},children:[e.jsx("img",{itemProp:"image",className:"object-cover h-[260px] w-[260px] xs:h-[275px] xs:w-[275px] sm:h-[290px] sm:w-[290px] md:h-[300px] md:w-[300px] lg:h-[310px] lg:w-[310px] xl:h-[315px] xl:w-[315px] 2xl:h-[318px] 2xl:w-[318px] 3xl:h-[320px] 3xl:w-[320px]",src:$||"/img/placeholder.svg",alt:b,title:b}),e.jsx("meta",{itemProp:"brand",content:"Recensa"}),e.jsx("meta",{itemProp:"sku",content:n}),e.jsxs("div",{className:"invisible w-0 h-0",itemProp:"offers",itemScope:!0,itemType:"http://schema.org/Offer",children:[e.jsx("meta",{itemProp:"price",content:"5000"}),e.jsx("meta",{itemProp:"priceCurrency",content:"RUB"}),e.jsx("meta",{itemProp:"availability",content:"https://schema.org/InStock"}),e.jsx("link",{itemProp:"url",href:p?`/equipment/${l(m)}`:`/solutions/${l(m)}`})]}),e.jsxs("div",{className:"flex flex-col  mt-2",children:[e.jsx("h3",{itemProp:"name",className:"text-gray-400 text-xs xs:text-xs sm:text-sm uppercase font-normal mb-2",children:m}),e.jsx("div",{itemProp:"description",dangerouslySetInnerHTML:{__html:d},className:`text-[11px] xs:text-[12px] sm:text-[13px]\r
             text-gray-300 pr-[48%] md:pr-[52%] overflow-hidden`}),e.jsx(I,{noLink:!0,onClick:B=>{B.preventDefault(),S(!0,n)},text:"Оставить заявку",className:`absolute right-3 xs:right-3.5 sm:right-4\r
               bottom-3 xs:bottom-3.5 sm:bottom-4 \r
               max-w-[120px] md:max-w-[156px] md:max-h-[48px] \r
               text-[10px] md:text-[12px]\r
               py-[16px] px-[12px] hover:bg-gray-450`})]})]},n)};return u.length>0?e.jsxs("section",{className:"container py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 xl:py-20 2xl:py-20 3xl:py-20",children:[e.jsxs("div",{itemScope:!0,itemType:"https://schema.org/ItemList",children:[e.jsx(A,{itemProp:"name",text:g||(w?"Оборудование":"решения"),className:"ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"}),e.jsx("meta",{itemProp:"numberOfItems",content:s?s.length:0}),e.jsx("div",{className:"flex justify-center w-full transition-all",children:e.jsx("article",{className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8",children:u.map((t,x)=>_(t,x))})})]}),i&&c.length>0&&e.jsx("div",{className:"flex justify-center",children:e.jsx(I,{onClick:()=>C(),text:"смотреть все",className:"bg-white w-[90%] xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1158px] py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] text-gray-400 border border-gray-400 mt-[40px] xs:mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px] xl:mt-[62px] 2xl:mt-[63px] 3xl:mt-[64px] hover:bg-gray-50 hover:border-gray-200"})}),e.jsx("style",{jsx:"true",children:`
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
      `})]}):e.jsx("p",{children:"Загрузка..."})}export{G as I};
