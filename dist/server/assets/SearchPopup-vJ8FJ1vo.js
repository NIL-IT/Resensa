import{jsx as e,jsxs as o}from"react/jsx-runtime";import{useState as a,useEffect as x}from"react";import{S as w}from"./SearchInput-DvOHA5vx.js";import{B as N,q as v}from"../entry-server.js";import{useSelector as S,useDispatch as C}from"react-redux";import{Link as L}from"react-router-dom";import"react-dom/server";import"react-router-dom/server.mjs";import"react-fast-compare";import"invariant";import"shallowequal";import"clsx";import"tailwind-merge";import"@reduxjs/toolkit";import"axios";import"js-cookie";import"lucide-react";function K(){const{equipment:p,solutions:l}=S(({user:t})=>t),n=C(),[d,h]=a([]),[j,u]=a("");x(()=>{h([...p,...l])},[p,l]);const[m,f]=a([...p,...l]),g=t=>{u(t);const s=d.filter(r=>r.name.toLowerCase().includes(t.toLowerCase())||r.description.toLowerCase().includes(t.toLowerCase()));f(s)};x(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const c=()=>{n(v(!1))};return e("section",{className:"h-[80%] min-w-[80%] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:o("div",{className:`bg-white pt-2 xs:pt-3 sm:pt-4 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8\r
       rounded-lg min-w-[100%]\r
        overflow-y-scroll relative max-h-[100%] min-h-[100%]\r
         pb-6 xs:pb-7 sm:pb-8 md:pb-9 lg:pb-10`,children:[o("div",{itemScope:!0,itemType:"https://schema.org/WebSite",className:`sticky z-50 flex-center top-[-20px] left-0 bg-white h-[60px]\r
           xs:h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px]`,children:[e("meta",{itemProp:"url",content:"https://new.recensa.ru/"}),e(w,{handleSearch:g,handleClose:c,placeholder:"Введите запрос для поиска",closeIcon:!0,iconLeft:!0,className:"border-0 border-b border-b-gray-200 gap-4"})]}),e("div",{className:"mt-2 xs:mt-3 sm:mt-4 flex justify-center ",children:m.length>0?e("div",{className:" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-5",children:m.map(({image_card:t,name:s,description:r,id:i,max_param:y},b)=>o(L,{onClick:()=>c(),to:y?`/equipment/${i}`:`/solutions/${i}`,className:"flex flex-col justify-between w-full xs:w-[180px] sm:w-[190px] md:w-[195px] lg:w-[200px] border border-gray-100 p-2 xs:p-3 sm:p-4",children:[o("div",{children:[e("img",{className:"w-full h-[120px] xs:h-[130px] sm:h-[140px] md:h-[150px] lg:h-[160px] object-cover",src:t||"/placeholder.svg",alt:s,title:`Продукт ${s}`}),e("h2",{className:"text-gray-400 text-xs xs:text-sm uppercase font-normal my-1 xs:my-1.5 sm:my-2",children:s}),e("p",{className:"text-[11px] xs:text-[12px] sm:text-[13px] text-gray-300 line-clamp-3",children:r})]}),e(N,{noLink:!0,text:"Оставить заявку",className:"w-full py-2 xs:py-3 sm:py-4 px-[8px] xs:px-[10px] sm:px-[8px] hover:bg-gray-450 mt-2 xs:mt-3 sm:mt-4 text-sm xs:text-xs"})]},b))}):e("div",{className:"w-full h-[60vh] flex-center justify-center ",children:e("p",{className:"text-gray-400",children:"По вашему запросу ничего не найдено"})})})]})})}export{K as default};
