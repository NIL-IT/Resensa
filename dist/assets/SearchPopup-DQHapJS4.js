import{r,j as e}from"./three-vendor-D76XtHXd.js";import{S as w}from"./SearchInput-5jKdABAh.js";import{a as y,u as b,L as j,B as S,w as N}from"./index-Dg4eWNDb.js";import"./react-vendor-C6O4aKhz.js";function E(){const{equipment:l,solutions:x}=y(({user:s})=>s),n=b(),[m,i]=r.useState([]),[v,d]=r.useState("");r.useEffect(()=>{i([...l,...x])},[l,x]);const[o,h]=r.useState([...l,...x]),u=s=>{d(s);const t=m.filter(a=>a.name.toLowerCase().includes(s.toLowerCase())||a.description.toLowerCase().includes(s.toLowerCase()));h(t)};r.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const c=()=>{n(N(!1))};return e.jsx("section",{className:"h-[80%] min-w-[80%] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:e.jsxs("div",{className:`bg-white pt-2 xs:pt-3 sm:pt-4 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8\r
       rounded-lg min-w-[100%]\r
        overflow-y-scroll relative max-h-[100%] min-h-[100%]\r
         pb-6 xs:pb-7 sm:pb-8 md:pb-9 lg:pb-10`,children:[e.jsxs("div",{itemScope:!0,itemType:"https://schema.org/WebSite",className:`sticky z-50 flex-center top-[-20px] left-0 bg-white h-[60px]\r
           xs:h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px]`,children:[e.jsx("meta",{itemProp:"url",content:"https://new.recensa.ru/"}),e.jsx(w,{handleSearch:u,handleClose:c,placeholder:"Введите запрос для поиска",closeIcon:!0,iconLeft:!0,className:"border-0 border-b border-b-gray-200 gap-4"})]}),e.jsx("div",{className:"mt-2 xs:mt-3 sm:mt-4 flex justify-center ",children:o.length>0?e.jsx("div",{className:" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-5",children:o.map(({image_card:s,name:t,description:a,id:p,max_param:f},g)=>e.jsxs(j,{onClick:()=>c(),to:f?`/equipment/${p}`:`/solutions/${p}`,className:"flex flex-col justify-between w-full xs:w-[180px] sm:w-[190px] md:w-[195px] lg:w-[200px] border border-gray-100 p-2 xs:p-3 sm:p-4",children:[e.jsxs("div",{children:[e.jsx("img",{className:"w-full h-[120px] xs:h-[130px] sm:h-[140px] md:h-[150px] lg:h-[160px] object-cover",src:s||"/placeholder.svg",alt:t,title:`Продукт ${t}`}),e.jsx("h2",{className:"text-gray-400 text-xs xs:text-sm uppercase font-normal my-1 xs:my-1.5 sm:my-2",children:t}),e.jsx("p",{className:"text-[11px] xs:text-[12px] sm:text-[13px] text-gray-300 line-clamp-3",children:a})]}),e.jsx(S,{noLink:!0,text:"Оставить заявку",className:"w-full py-2 xs:py-3 sm:py-4 px-[8px] xs:px-[10px] sm:px-[8px] hover:bg-gray-450 mt-2 xs:mt-3 sm:mt-4 text-sm xs:text-xs"})]},g))}):e.jsx("div",{className:"w-full h-[60vh] flex-center justify-center ",children:e.jsx("p",{className:"text-gray-400",children:"По вашему запросу ничего не найдено"})})})]})})}export{E as default};
