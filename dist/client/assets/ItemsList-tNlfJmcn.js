var P=(h,t,o)=>new Promise((g,l)=>{var c=x=>{try{p(o.next(x))}catch(m){l(m)}},y=x=>{try{p(o.throw(x))}catch(m){l(m)}},p=x=>x.done?g(x.value):Promise.resolve(x.value).then(c,y);p((o=o.apply(h,t)).next())});import{r as d,j as e}from"./three-vendor-Ci446NTQ.js";import{u as A,h as D,T as R,B as N,L as q,v as u,_ as F,$ as H,a0 as M,a1 as Y,b as S,c as U}from"./index-_im02xNn.js";function J({limited:h=!0,list:t,href:o,title:g,equipment:l}){const[c,y]=d.useState(h),[p,x]=d.useState([]),[m,w]=d.useState([]),[k,b]=d.useState(!1),n=A(),{pathname:L}=D(),T=L.split("/")[2]==="orders";let j;d.useEffect(()=>{t&&(c&&t.length>6?(x(t.slice(0,6)),w(t.slice(6))):(x(t),w([])),!T&&t.length>0&&(j=t[0].hasOwnProperty("max_param")))},[t,h,c]);const C=(s,a)=>{n(U(s)),n(S(a))},_=s=>P(this,null,function*(){l?(yield n(F(s)),n(H(null))):(yield n(M(s)),n(Y(null))),n(S(s))}),$=()=>{b(!0);let s=0;const a=100;m.forEach((i,r)=>{setTimeout(()=>{x(f=>[...f,i]),r===m.length-1&&setTimeout(()=>{b(!1),y(!1)},300)},s),s+=a})},E=(s,a)=>{const{id:i,name:r,description:f,image_card:B,image_card_alt:I}=s,v=a>=6&&k;return e.jsxs(q,{itemScope:!0,itemType:"http://schema.org/Product",to:l?`/equipment/${u(r)}`:`/solutions/${u(r)}`,onClick:()=>_(i),className:`relative sm:min-h-[420px] w-[280px] xs:w-[300px] sm:w-[320px] md:w-[330px]
        lg:w-[340px] xl:w-[345px] 2xl:w-[348px] 3xl:w-[352px] border border-gray-100 p-3 xs:p-3.5 sm:p-4
        transition-all duration-500 ease-in-out ${v?"opacity-0 transform translate-y-8 animate-fadeIn":"opacity-100"}`,style:{animationDelay:v?`${(a-6)*100}ms`:"0ms",animationFillMode:"forwards"},children:[e.jsx("img",{itemProp:"image",className:"object-cover h-[260px] w-[260px] xs:h-[275px] xs:w-[275px] sm:h-[290px] sm:w-[290px] md:h-[300px] md:w-[300px] lg:h-[310px] lg:w-[310px] xl:h-[315px] xl:w-[315px] 2xl:h-[318px] 2xl:w-[318px] 3xl:h-[320px] 3xl:w-[320px]",src:B||"/img/placeholder.svg",alt:I,title:I}),e.jsx("meta",{itemProp:"brand",content:"Recensa"}),e.jsx("meta",{itemProp:"sku",content:i}),e.jsxs("div",{className:"invisible w-0 h-0",itemProp:"offers",itemScope:!0,itemType:"http://schema.org/Offer",children:[e.jsx("meta",{itemProp:"price",content:"5000"}),e.jsx("meta",{itemProp:"priceCurrency",content:"RUB"}),e.jsx("meta",{itemProp:"availability",content:"https://schema.org/InStock"}),e.jsx("link",{itemProp:"url",href:l?`/equipment/${u(r)}`:`/solutions/${u(r)}`})]}),e.jsxs("div",{className:"flex flex-col  mt-2",children:[e.jsx("h3",{itemProp:"name",className:"text-gray-400 text-xs xs:text-xs sm:text-sm uppercase font-normal mb-2",children:r}),e.jsx("div",{itemProp:"description",dangerouslySetInnerHTML:{__html:f},className:`text-[11px] xs:text-[12px] sm:text-[13px]\r
             text-gray-300 pr-[48%] md:pr-[52%] overflow-hidden`}),e.jsx(N,{noLink:!0,onClick:O=>{O.preventDefault(),C(!0,i)},text:"Оставить заявку",className:`absolute right-3 xs:right-3.5 sm:right-4\r
               bottom-3 xs:bottom-3.5 sm:bottom-4 \r
               max-w-[120px] md:max-w-[156px] md:max-h-[48px] \r
               text-[10px] md:text-[12px]\r
               py-[16px] px-[12px] hover:bg-gray-450`})]})]},i)};return p.length>0?e.jsxs("section",{className:"container py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 xl:py-20 2xl:py-20 3xl:py-20",children:[e.jsxs("div",{itemScope:!0,itemType:"https://schema.org/ItemList",children:[e.jsx(R,{itemProp:"name",text:g||(j?"Оборудование":"решения"),className:"ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"}),e.jsx("meta",{itemProp:"numberOfItems",content:t?t.length:0}),e.jsx("div",{className:"flex justify-center w-full transition-all",children:e.jsx("article",{className:"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8",children:p.map((s,a)=>E(s,a))})})]}),c&&m.length>0&&e.jsx("div",{className:"flex justify-center",children:e.jsx(N,{onClick:()=>$(),text:"смотреть все",className:"bg-white w-[90%] xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1158px] py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] text-gray-400 border border-gray-400 mt-[40px] xs:mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px] xl:mt-[62px] 2xl:mt-[63px] 3xl:mt-[64px] hover:bg-gray-50 hover:border-gray-200"})}),e.jsx("style",{jsx:"true",children:`
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
