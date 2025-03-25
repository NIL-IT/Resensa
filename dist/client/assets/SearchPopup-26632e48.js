import{a as b,u as C,j as e,L as D,w as m,B as j,x as k}from"./index-37edddac.js";import{a as o}from"./react-vendor-b1335c93.js";import{S as g}from"./SearchInput-99ab0943.js";import"./three-vendor-4093d8f3.js";function V(){const{equipment:p,solutions:a}=b(({user:s})=>s),c=C(),[u,i]=o.useState([]),[S,x]=o.useState("");o.useEffect(()=>{i([...p,...a])},[p,a]);const[n,d]=o.useState([...p,...a]),h=s=>{x(s);const r=u.filter(t=>t.name.toLowerCase().includes(s.toLowerCase())||t.description.toLowerCase().includes(s.toLowerCase()));d(r)};o.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const l=()=>{c(k(!1))};return e.jsxDEV("section",{className:"h-[80%] min-w-[80%] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:e.jsxDEV("div",{className:`bg-white pt-2 xs:pt-3 sm:pt-4 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8\r
       rounded-lg min-w-[100%]\r
        overflow-y-scroll relative max-h-[100%] min-h-[100%]\r
         pb-6 xs:pb-7 sm:pb-8 md:pb-9 lg:pb-10`,children:[e.jsxDEV("div",{itemScope:!0,itemType:"https://schema.org/WebSite",className:`sticky z-50 flex-center top-[-20px] left-0 bg-white h-[60px]\r
           xs:h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px]`,children:[e.jsxDEV("meta",{itemProp:"url",content:"https://new.recensa.ru/"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:55,columnNumber:11},this),e.jsxDEV(g,{handleSearch:h,handleClose:l,placeholder:"Введите запрос для поиска",closeIcon:!0,iconLeft:!0,className:"border-0 border-b border-b-gray-200 gap-4"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:56,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:49,columnNumber:9},this),e.jsxDEV("div",{className:"mt-2 xs:mt-3 sm:mt-4 flex justify-center ",children:n.length>0?e.jsxDEV("div",{className:" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-5",children:n.map(({image_card:s,name:r,description:t,id:v,max_param:f},N)=>e.jsxDEV(D,{onClick:()=>l(),to:f?`/equipment/${m(r)}`:`/solutions/${m(r)}`,className:"flex flex-col justify-between w-full xs:w-[180px] sm:w-[190px] md:w-[195px] lg:w-[200px] border border-gray-100 p-2 xs:p-3 sm:p-4",children:[e.jsxDEV("div",{children:[e.jsxDEV("img",{className:"w-full h-[120px] xs:h-[130px] sm:h-[140px] md:h-[150px] lg:h-[160px] object-cover",src:s||"/placeholder.svg",alt:r,title:`Продукт ${r}`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:81,columnNumber:23},this),e.jsxDEV("h2",{className:"text-gray-400 text-xs xs:text-sm uppercase font-normal my-1 xs:my-1.5 sm:my-2",children:r},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:87,columnNumber:23},this),e.jsxDEV("div",{className:"text-[11px] xs:text-[12px] sm:text-[13px] text-gray-300 line-clamp-3",dangerouslySetInnerHTML:{__html:t}},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:90,columnNumber:23},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:80,columnNumber:21},this),e.jsxDEV(j,{noLink:!0,text:"Оставить заявку",className:"w-full py-2 xs:py-3 sm:py-4 px-[8px] xs:px-[10px] sm:px-[8px] hover:bg-gray-450 mt-2 xs:mt-3 sm:mt-4 text-sm xs:text-xs"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:95,columnNumber:21},this)]},N,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:70,columnNumber:19},this))},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:67,columnNumber:13},this):e.jsxDEV("div",{className:"w-full h-[60vh] flex-center justify-center ",children:e.jsxDEV("p",{className:"text-gray-400 text-center",children:"По вашему запросу ничего не найдено"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:106,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:105,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:65,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:43,columnNumber:7},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/SearchPopup.jsx",lineNumber:42,columnNumber:5},this)}export{V as default};
