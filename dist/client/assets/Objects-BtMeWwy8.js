const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EarthScene-B3DHCmAo.js","assets/three-vendor-BeAgAJS5.js","assets/react-vendor-DomL0yj5.js"])))=>i.map(i=>d[i]);
import{r as s,j as e,_ as g}from"./three-vendor-BeAgAJS5.js";import{T as f,B as b}from"./index-B0g82Bbn.js";const w=s.lazy(()=>g(()=>import("./EarthScene-B3DHCmAo.js"),__vite__mapDeps([0,1,2]))),j=[{name:"Административные объекты",id:1},{name:"Производства",id:2},{name:"Медицина и фармацевтика",id:3}];function _({className:p=null,about:m=!1}){const[l,o]=s.useState(0),[c,h]=s.useState(0),[r,n]=s.useState(!1),[i,d]=s.useState(!1);s.useEffect(()=>{const t=setTimeout(()=>{h(x=>x+1)},2e3);return()=>clearTimeout(t)},[]);const u=t=>o(t);return s.useEffect(()=>{d(!0),n(!0)},[]),s.useEffect(()=>{if(!i)return;const t=()=>{r||n(!0)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[r,i]),c!==0&&e.jsx("section",{className:`w-full bg-gray-400 py-12 sm:py-16 md:py-20 lg:py-24 ${m?"mt-[0px] xs:mt-[28px] md:mt-[160px] lg:mt-[225px] xl:mt-[205px] 2xl:mt-[220px] 3xl:mt-[225px]":""} ${p}`,children:e.jsx("div",{className:"earth_container relative max-w-[full] min-h-[500px] sm:min-h-[550px] md:min-h-[550px] lg:min-h-[602px] xl:min-h-[650px] 2xl:min-h-[702px] flex flex-col justify-center",children:e.jsxs("div",{className:`flex-center flex-col \r
        lg:flex-row lg:items-center lg:justify-between g\r
        ap-20 lg:gap-12`,children:[e.jsxs("div",{className:` w-full  \r
          md:h-[800px] lg:h-[1000px] xl:h-[auto]\r
            \r
          sm:h-[850px] \r
            xs:h-[800px] \r
         h-[800px] px-4 sm:px-6 lg:px-8`,children:[e.jsx(f,{text:"наши объекты",className:"inline-block text-white text-xl sm:text-2xl lg:text-3xl border-b border-b-white mb-6"}),e.jsxs("article",{className:" max-w-[411px]",children:[e.jsx("div",{className:"text-white border border-white divide-y divide-white w-full",children:j.map(({name:t,id:x},a)=>e.jsx("button",{type:"button",className:`select-none px-4 w-full text-left py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl cursor-pointer uppercase ${a===l?"text-gray-400 bg-white":""}`,onClick:()=>u(a),children:t},x))}),e.jsx(b,{target:"_blank",href:"https://yandex.ru/maps/65/novosibirsk/house/ulitsa_shevchenko_4/bEsYfwRjT0YCQFtvfXxwdXRnZA==/inside/?ll=82.932743%2C55.014572&tab=inside&z=19.71",icon:!0,text:"построить маршрут до офиса",className:`bg-white text-gray-400 w-full select-none justify-center xl:justify-normal\r
              mt-6 sm:mt-8 text-sm lg:text-md xl:text-base \r
               font-normal \r
              py-3 xl:py-5  px-4 sm:px-3 xl:px-5\r
 \r
               gap-5 xl:gap-10 xl:text-center 2xl:text-start`,white:!0})]})]}),e.jsx("div",{className:`absolute   \r
            3xl:top-[40px] 3xl:right-[-250px]\r
            2xl:top-[60px] 2xl:right-[-200px]\r
            xl:top-[100px] xl:right-[-50px]\r
            lg:top-[460px] lg:right-[-140px]\r
            md:top-[360px] md:right-[-90px]\r
            sm:top-[400px] sm:right-[-90px]\r
            xs:top-[360px] xs:right-[-20px]\r
            top-[360px] right-[-20px] \r
       `,children:e.jsx(s.Suspense,{fallback:"...Загрузка",children:e.jsx(w,{index:l})})})]})})})}export{_ as O};
