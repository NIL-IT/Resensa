const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EarthScene-CWkmZD9k.js","assets/index-Deu1w7_j.js","assets/index-DeaRImsw.css"])))=>i.map(i=>d[i]);
import{j as t,T as a,B as m,_ as o}from"./index-Deu1w7_j.js";import{useState as h,Suspense as c,lazy as d}from"react";const g=d(()=>o(()=>import("./EarthScene-CWkmZD9k.js"),__vite__mapDeps([0,1,2]))),u=[{name:"Административные объекты",id:1},{name:"Производства",id:2},{name:"Медицина и фармацевтика",id:3}];function j({className:s="",about:n=!1}){const[x,r]=h(0),p=e=>r(e);return t.jsx("section",{className:`w-full bg-gray-400 py-12 sm:py-16 md:py-20 lg:py-24 ${n?"mt-[0px] xs:mt-[28px] md:mt-[160px] lg:mt-[225px] xl:mt-[205px] 2xl:mt-[220px] 3xl:mt-[225px]":""} ${s}`,children:t.jsx("div",{className:"earth_container relative max-w-[full] min-h-[500px] sm:min-h-[550px] md:min-h-[550px] lg:min-h-[602px] xl:min-h-[650px] 2xl:min-h-[702px] flex flex-col justify-center",children:t.jsxs("div",{className:`flex-center flex-col \r
        lg:flex-row lg:items-center lg:justify-between g\r
        ap-20 lg:gap-12`,children:[t.jsxs("div",{className:` w-full  \r
          md:h-[800px] lg:h-[1000px] xl:h-[auto]\r
            \r
          sm:h-[850px] \r
            xs:h-[800px] \r
         h-[800px] px-4 sm:px-6 lg:px-8`,children:[t.jsx(a,{text:"наши объекты",className:"inline-block text-white text-xl sm:text-2xl lg:text-3xl border-b border-b-white mb-6"}),t.jsxs("article",{className:" max-w-[411px]",children:[t.jsx("div",{className:"text-white border border-white divide-y divide-white w-full",children:u.map(({name:e,id:i},l)=>t.jsx("button",{type:"button",className:`select-none px-4 w-full text-left py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl cursor-pointer uppercase ${l===x?"text-gray-400 bg-white":""}`,onClick:()=>p(l),children:e},i))}),t.jsx(m,{target:"_blank",href:"https://yandex.ru/maps/65/novosibirsk/house/ulitsa_shevchenko_4/bEsYfwRjT0YCQFtvfXxwdXRnZA==/inside/?ll=82.932743%2C55.014572&tab=inside&z=19.71",icon:!0,text:"построить маршрут до офиса",className:`bg-white text-gray-400 w-full select-none justify-center xl:justify-normal\r
              mt-6 sm:mt-8 text-sm lg:text-md xl:text-base \r
               font-normal \r
              py-3 xl:py-5  px-4 sm:px-3 xl:px-5\r
 \r
               gap-5 xl:gap-10 xl:text-center 2xl:text-start`,white:!0})]})]}),t.jsx("div",{className:`absolute   \r
            3xl:top-[40px] 3xl:right-[-250px]\r
            2xl:top-[60px] 2xl:right-[-200px]\r
            xl:top-[100px] xl:right-[-50px]\r
            lg:top-[460px] lg:right-[-140px]\r
            md:top-[360px] md:right-[-90px]\r
            sm:top-[400px] sm:right-[-90px]\r
            xs:top-[360px] xs:right-[-20px]\r
            top-[360px] right-[-20px] z-50\r
       `,children:t.jsx(c,{fallback:null,children:t.jsx(g,{index:x})})})]})})})}export{j as O};
