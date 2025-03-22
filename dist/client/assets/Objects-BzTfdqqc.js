const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EarthScene-B3DHCmAo.js","assets/three-vendor-BeAgAJS5.js","assets/react-vendor-DomL0yj5.js"])))=>i.map(i=>d[i]);
import{r as s,j as e,_ as h}from"./three-vendor-BeAgAJS5.js";import{T as u,B as f}from"./index-Dzl9849z.js";const g=s.lazy(()=>h(()=>import("./EarthScene-B3DHCmAo.js"),__vite__mapDeps([0,1,2]))),w=[{name:"Административные объекты",id:1},{name:"Производства",id:2},{name:"Медицина и фармацевтика",id:3}];function y({className:a="",about:m=!1}){const[l,p]=s.useState(0),[n,x]=s.useState(!1),[r,c]=s.useState(!1),o=t=>p(t);return s.useEffect(()=>{c(!0),x(!0)},[]),s.useEffect(()=>{if(!r)return;const t=()=>{n||x(!0)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[n,r]),e.jsx("section",{className:`w-full bg-gray-400 py-12 sm:py-16 md:py-20 lg:py-24 ${m?"mt-[0px] xs:mt-[28px] md:mt-[160px] lg:mt-[225px] xl:mt-[205px] 2xl:mt-[220px] 3xl:mt-[225px]":""} ${a}`,children:e.jsx("div",{className:"earth_container relative max-w-[full] min-h-[500px] sm:min-h-[550px] md:min-h-[550px] lg:min-h-[602px] xl:min-h-[650px] 2xl:min-h-[702px] flex flex-col justify-center",children:e.jsxs("div",{className:`flex-center flex-col \r
        lg:flex-row lg:items-center lg:justify-between g\r
        ap-20 lg:gap-12`,children:[e.jsxs("div",{className:` w-full  \r
          md:h-[800px] lg:h-[1000px] xl:h-[auto]\r
            \r
          sm:h-[850px] \r
            xs:h-[800px] \r
         h-[800px] px-4 sm:px-6 lg:px-8`,children:[e.jsx(u,{text:"наши объекты",className:"inline-block text-white text-xl sm:text-2xl lg:text-3xl border-b border-b-white mb-6"}),e.jsxs("article",{className:" max-w-[411px]",children:[e.jsx("div",{className:"text-white border border-white divide-y divide-white w-full",children:w.map(({name:t,id:d},i)=>e.jsx("button",{type:"button",className:`select-none px-4 w-full text-left py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl cursor-pointer uppercase ${i===l?"text-gray-400 bg-white":""}`,onClick:()=>o(i),children:t},d))}),e.jsx(f,{target:"_blank",href:"https://yandex.ru/maps/65/novosibirsk/house/ulitsa_shevchenko_4/bEsYfwRjT0YCQFtvfXxwdXRnZA==/inside/?ll=82.932743%2C55.014572&tab=inside&z=19.71",icon:!0,text:"построить маршрут до офиса",className:`bg-white text-gray-400 w-full select-none justify-center xl:justify-normal\r
              mt-6 sm:mt-8 text-sm lg:text-md xl:text-base \r
               font-normal \r
              py-3 xl:py-5  px-4 sm:px-3 xl:px-5\r
 \r
               gap-5 xl:gap-10 xl:text-center 2xl:text-start`,white:!0})]})]}),e.jsx("div",{children:e.jsx(s.Suspense,{fallback:"...Загрузка",children:e.jsx(g,{index:l})})})]})})})}export{y as O};
