var P=(h,t,c)=>new Promise((g,a)=>{var p=s=>{try{i(c.next(s))}catch(n){a(n)}},y=s=>{try{i(c.throw(s))}catch(n){a(n)}},i=s=>s.done?g(s.value):Promise.resolve(s.value).then(p,y);i((c=c.apply(h,t)).next())});import{r as d,j as e}from"./three-vendor-Ci446NTQ.js";import{u as A,h as D,T as R,B as N,L as F,v as u,$ as H,a0 as M,a1 as Y,a2 as U,b as S,c as V}from"./index-DjUfqYj6.js";function J({limited:h=!0,list:t,href:c,title:g,equipment:a}){const[p,y]=d.useState(h),[i,s]=d.useState([]),[n,f]=d.useState([]),[k,b]=d.useState(!1),r=A(),{pathname:L}=D(),T=L.split("/")[2]==="orders";let j;d.useEffect(()=>{t&&(p&&t.length>6&&a?(s(t.slice(0,6)),f(t.slice(6))):p&&t.length>3&&!a?(s(t.slice(0,3)),f(t.slice(3))):(s(t),f([])),!T&&t.length>0&&(j=t[0].hasOwnProperty("max_param")))},[t,h,p]);const C=(x,m)=>{r(V(x)),r(S(m))},$=x=>P(this,null,function*(){a?(yield r(H(x)),r(M(null))):(yield r(Y(x)),r(U(null))),r(S(x))}),E=()=>{b(!0);let x=0;const m=100;n.forEach((o,l)=>{setTimeout(()=>{s(w=>[...w,o]),l===n.length-1&&setTimeout(()=>{b(!1),y(!1)},300)},x),x+=m})},_=(x,m)=>{const{id:o,name:l,description:w,image_card:B,image_card_alt:I}=x,v=m>=6&&k;return e.jsxs(F,{itemScope:!0,itemType:"http://schema.org/Product",to:a?`/equipment/${u(l)}`:`/solutions/${u(l)}`,onClick:()=>$(o),className:`relative sm:min-h-[420px] w-[280px] xs:w-[300px] sm:w-[320px] md:w-[330px]
        lg:w-[340px] xl:w-[345px] 2xl:w-[348px] 3xl:w-[352px] border border-gray-100 p-3 xs:p-3.5 sm:p-4
        transition-all duration-500 ease-in-out ${v?"opacity-0 transform translate-y-8 animate-fadeIn":"opacity-100"}`,style:{animationDelay:v?`${(m-6)*100}ms`:"0ms",animationFillMode:"forwards"},children:[e.jsx("img",{itemProp:"image",className:"object-cover h-[260px] w-[260px] xs:h-[275px] xs:w-[275px] sm:h-[290px] sm:w-[290px] md:h-[300px] md:w-[300px] lg:h-[310px] lg:w-[310px] xl:h-[315px] xl:w-[315px] 2xl:h-[318px] 2xl:w-[318px] 3xl:h-[320px] 3xl:w-[320px]",src:B||"/img/placeholder.svg",alt:I,title:I}),e.jsx("meta",{itemProp:"brand",content:"Recensa"}),e.jsx("meta",{itemProp:"sku",content:o}),e.jsxs("div",{className:"invisible w-0 h-0",itemProp:"offers",itemScope:!0,itemType:"http://schema.org/Offer",children:[e.jsx("meta",{itemProp:"price",content:"5000"}),e.jsx("meta",{itemProp:"priceCurrency",content:"RUB"}),e.jsx("meta",{itemProp:"availability",content:"https://schema.org/InStock"}),e.jsx("link",{itemProp:"url",href:a?`/equipment/${u(l)}`:`/solutions/${u(l)}`})]}),e.jsxs("div",{className:"flex flex-col  mt-2",children:[e.jsx("h3",{itemProp:"name",className:"text-gray-400 text-xs xs:text-xs sm:text-sm uppercase font-normal mb-2",children:l}),e.jsx("div",{itemProp:"description",dangerouslySetInnerHTML:{__html:w},className:`text-[11px] xs:text-[12px] sm:text-[13px]\r
             text-gray-300 pr-[48%] md:pr-[52%] overflow-hidden`}),e.jsx(N,{noLink:!0,onClick:O=>{O.preventDefault(),C(!0,o)},text:"Оставить заявку",className:`absolute right-3 xs:right-3.5 sm:right-4\r
               bottom-3 xs:bottom-3.5 sm:bottom-4 \r
               max-w-[120px] md:max-w-[156px] md:max-h-[48px] \r
               text-[10px] md:text-[12px]\r
               py-[16px] px-[12px] hover:bg-gray-450`})]})]},o)};return i.length>0?e.jsxs("section",{className:"container py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 xl:py-20 2xl:py-20 3xl:py-20",children:[e.jsxs("div",{itemScope:!0,itemType:"https://schema.org/ItemList",children:[e.jsx(R,{itemProp:"name",text:g||(j?"Оборудование":"решения"),className:"ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"}),e.jsx("meta",{itemProp:"numberOfItems",content:t?t.length:0}),e.jsx("div",{className:"flex justify-center w-full transition-all",children:e.jsx("article",{className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8",children:i.map((x,m)=>_(x,m))})})]}),p&&n.length>0&&e.jsx("div",{className:"flex justify-center",children:e.jsx(N,{onClick:()=>E(),text:"смотреть все",className:"bg-white w-[90%] xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1158px] py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] text-gray-400 border border-gray-400 mt-[40px] xs:mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px] xl:mt-[62px] 2xl:mt-[63px] 3xl:mt-[64px] hover:bg-gray-50 hover:border-gray-200"})}),e.jsx("style",{jsx:"true",children:`
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
      `})]}):e.jsx("p",{children:"Загрузка..."})}export{J as I};
