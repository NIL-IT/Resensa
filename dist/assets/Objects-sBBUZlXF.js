var w=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var g=(s,e,n)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,f=(s,e)=>{for(var n in e||(e={}))k.call(e,n)&&g(s,n,e[n]);if(u)for(var n of u(e))S.call(e,n)&&g(s,n,e[n]);return s},y=(s,e)=>b(s,v(e));import{j as t,C as N,O as U,r as d,u as C,a as R,R as h,H as E}from"./three-vendor-D76XtHXd.js";import{T as L,B as P}from"./index-DqOqGq_y.js";const T="/assets/texture_earth-DKLT2WuX.jpg",M=[[{position:[.6,1.5,-.9],title:"Уральский экономический колледж",description:"Административное здание",mapUrl:"https://yandex.ru/maps/?text=Уральский+экономический+колледж"},{position:[.05,1.52,-1.05],title:"МФЦ Республика Бурятия",description:"Верхняя Березовка, Иволгинск, Нижняя Иволга, Нижний Саянтуй",mapUrl:"https://yandex.ru/maps/?text=МФЦ+Республика+Бурятия"},{position:[.1,1.28,-1.4],title:"ТРЦ Пионер",description:"г. Улан-Удэ",mapUrl:"https://yandex.ru/maps/?text=ТРЦ+Пионер+Улан-Удэ"},{position:[1,1.4,-.7],title:"Административное здание Министерства обороны",description:"г. Москва",mapUrl:"https://yandex.ru/maps/?text=Министерство+обороны+Москва"},{position:[.45,1.55,-1.1],title:"Жилые комплексы",description:"ЖК Прайм, ЖК Современник, ЖК Сокол - г.Барнаул",mapUrl:"https://yandex.ru/maps/?text=ЖК+Прайм+ЖК+Современник+ЖК+Сокол+Барнаул"},{position:[.5,1.25,-1.3],title:"Офис Recensa Новосибирск",description:"г.Новосибирск ул.Шевченко д.4 офис 509 ",mapUrl:"https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4"},{position:[.75,1.5,-.85],title:"Офис Recensa Екатеринбург",description:"г.Екатеринбург ул. Свердлова д.11 А офис 512",mapUrl:"https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А"}],[{position:[-.1,1.6,-1],title:"Мирнинский Горно-обогатительный комбинат Алроса",description:"г.Мирный",mapUrl:"https://yandex.ru/maps/?text=Мирнинский+Горно-обогатительный+комбинат+Алроса"},{position:[1,1.4,-.7],title:"НИЦ «Курчатовский институт»",description:"г. Москва",mapUrl:"https://yandex.ru/maps/?text=НИЦ+Курчатовский+институт+Москва"},{position:[-.3,1.6,-1],title:"Пищевое производство",description:"г. Якутск",mapUrl:"https://yandex.ru/maps/?text=пищевое+производство+Якутск"},{position:[.1,1.28,-1.4],title:"Производство Абсолют Кэш Энд Кэрри",description:"г. Улан-Удэ",mapUrl:"https://yandex.ru/maps/?text=Абсолют+Кэш+Энд+Кэрри+Улан-Удэ"},{position:[.5,1.25,-1.3],title:"Офис Recensa Новосибирск",description:"г.Новосибирск ул.Шевченко д.4 офис 509 ",mapUrl:"https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4"},{position:[.75,1.5,-.85],title:"Офис Recensa Екатеринбург",description:"г.Екатеринбург ул. Свердлова д.11 А офис 512",mapUrl:"https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А"}],[{position:[.4,1.4,-1.2],title:"Центральная городская больница",description:"Таджикистан, Хатлонская область, Нурек",mapUrl:"https://yandex.ru/maps/?text=Центральная+городская+больница+Нурек+Таджикистан"},{position:[.5,1.25,-1.3],title:"Офис Recensa Новосибирск",description:"г.Новосибирск ул.Шевченко д.4 офис 509 ",mapUrl:"https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4"},{position:[.75,1.5,-.85],title:"Офис Recensa Екатеринбург",description:"г.Екатеринбург ул. Свердлова д.11 А офис 512",mapUrl:"https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А"}]];function O({position:s,title:e,description:n,mapUrl:o,handleLocationClick:x,i:c}){const[i,p]=d.useState(0),m=(a,j)=>{a.stopPropagation(),x(a,j),p(i===0?1:0)},r=a=>{a.stopPropagation(),x(a,null),i===1&&(window.open(o,"_blank"),p(0))},l=()=>{i===1&&p(0)};return h.useEffect(()=>(document.addEventListener("click",l),()=>document.removeEventListener("click",l)),[i]),t.jsxs("mesh",{position:s,children:[t.jsx("sphereGeometry",{args:[.02,16,16]}),t.jsx("meshBasicMaterial",{color:"#4a90e2"}),t.jsx(E,{position:[.03,.001,0],className:"pointer-events-auto",distanceFactor:6,occlude:!0,children:t.jsxs("div",{className:"flex flex-col items-start pt-1 relative",children:[t.jsx("div",{className:`text-white text-opacity-90 text-[8px] xl:text-xs hover:text-[#4a90e2] transition-colors duration-300 cursor-pointer whitespace-nowrap  absolute top-1 left-0 z-30 ${e==="Офис Recensa Екатеринбург"?"top-[-32px] left-[-105px] xl:top-[-34px] xl:left-[-160px]":e==="Жилые комплексы"?"top-[-21px] left-[-103px]":e==="Пищевое производство"?"top-[-22px] ":""}`,onClick:a=>m(a,c),children:e}),i===1&&t.jsxs("div",{className:`bg-[#000] absolute top-[20px] left-0 z-50  text-white rounded px-2 py-1 mt-1 w-40 shadow-lg 
                text-xs cursor-pointer hover:bg-[#4a90e2] transition-colors 
                duration-200 ${e==="Офис Recensa Екатеринбург"?"top-[-10px] left-[-160px]":e==="Жилые комплексы"?"top-[-10px] left-[-103px]":e==="Пищевое производство"?"top-[-10px] ":""}`,onClick:r,children:[t.jsx("p",{className:"leading-tight",children:n}),t.jsx("p",{className:"text-blue-300 text-[6px] mt-1",children:"Нажмите еще раз для открытия карты"})]})]})})]})}function I({index:s}){const e=d.useRef(),n=C(T),[o,x]=d.useState(null),[c,i]=d.useState(!1);R(({clock:r})=>{e.current.rotation.y=r.getElapsedTime()*0});const p=(r,l)=>{var a;(a=r==null?void 0:r.stopPropagation)==null||a.call(r),o===l?c?(x(null),i(!1)):i(!0):(x(l),i(!0))},m=()=>{x(null),i(!1)};return h.useEffect(()=>(document.addEventListener("click",m),()=>document.removeEventListener("click",m)),[]),t.jsxs("group",{scale:1.2,rotation:[.8,-2.6,0],onClick:r=>r.stopPropagation(),children:[t.jsx("ambientLight",{intensity:.8}),t.jsx("directionalLight",{position:[200,200,200],intensity:.7,castShadow:!0}),t.jsx("directionalLight",{position:[-200,-200,-200],intensity:.4,castShadow:!0}),t.jsxs("mesh",{ref:e,children:[t.jsx("sphereGeometry",{args:[1.8,64,64]}),t.jsx("meshStandardMaterial",{map:n,metalness:.05,roughness:.9,color:"#cccccc"}),M[s].map((r,l)=>o===null||o===l?t.jsx(O,y(f({},r),{i:l,handleLocationClick:p,isSelected:o===l,showDescription:c}),l):null)]}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[1.85,64,64]}),t.jsx("meshBasicMaterial",{color:"#3a85ff",transparent:!0,opacity:.03})]})]})}function $({index:s}){return t.jsx("article",{className:`xs:w-[350px] xs:h-[450px] \r
    sm:w-[600px] sm:h-[500px] \r
    md:w-[800px] md:h-[500px] \r
    lg:w-[1000px] lg:h-[600px] \r
    xl:w-[500px] xl:h-[500px] \r
    2xl:w-[1000px] 2xl:h-[660px] select-none`,children:t.jsxs(N,{camera:{position:[0,0,6],fov:45},style:{background:"transparent",width:"100%",height:"100%"},children:[t.jsx(I,{index:s}),t.jsx(U,{enableZoom:!1,enablePan:!0,enableRotate:!0,zoomSpeed:.6,panSpeed:.5,rotateSpeed:.4,minPolarAngle:Math.PI/2,maxPolarAngle:Math.PI/2})]})})}const B=[{name:"Административные объекты",id:1},{name:"Производства",id:2},{name:"Медицина и фармацевтика",id:3}];function F({className:s=null,about:e=!1}){const[n,o]=h.useState(0),x=c=>o(c);return t.jsx("section",{className:`w-full  bg-gray-400 py-12 sm:py-16 md:py-20 lg:py-24 ${e?"mt-[0px] xs:mt-[28px]  md:mt-[160px] lg:mt-[225px] xl:mt-[205px] 2xl:mt-[220px] 3xl:mt-[225px]":""} ${s}`,children:t.jsx("div",{className:"earth_container px-4 sm:px-6 lg:px-8 relative max-w-[full] min-h-[500px] sm:min-h-[550px] md:min-h-[550px] lg:min-h-[602px] xl:min-h-[650px] 2xl:min-h-[702px] flex flex-col justify-center",children:t.jsxs("div",{className:`flex-center flex-col \r
        lg:flex-row lg:items-center lg:justify-between g\r
        ap-20 lg:gap-12`,children:[t.jsxs("div",{className:` w-full  \r
          md:h-[800px] lg:h-[1000px] xl:h-[auto]\r
            \r
          sm:h-[850px] \r
            xs:h-[800px] \r
         h-[800px]`,children:[t.jsx(L,{text:"наши объекты",className:"inline-block text-white text-xl sm:text-2xl lg:text-3xl border-b border-b-white mb-6"}),t.jsxs("article",{className:" max-w-[411px]",children:[t.jsx("div",{className:"text-white border border-white divide-y divide-white w-full  ",children:B.map(({name:c,id:i},p)=>t.jsx("button",{type:"button",className:`select-none px-4 w-full text-left py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl cursor-pointer uppercase ${p===n?"text-gray-400 bg-white":""}`,onClick:()=>x(p),children:c},i))}),t.jsx(P,{target:"_blank",href:"https://2gis.ru/novosibirsk/firm/70000001034795864?m=82.933752%2C55.014709%2F18",icon:!0,text:"построить маршрут до офиса",className:`bg-white text-gray-400 w-full select-none  justify-center xl:justify-normal\r
              mt-6 sm:mt-8 text-sm lg:text-md xl:text-base \r
               font-normal \r
              py-3 xl:py-5  px-4 sm:px-3 xl:px-5\r
 \r
               gap-5 xl:gap-10 xl:text-center 2xl:text-start`,white:!0})]})]}),t.jsx("div",{className:`absolute   \r
            3xl:top-[40px] 3xl:right-[-250px]\r
            2xl:top-[60px] 2xl:right-[-200px]\r
            xl:top-[100px] xl:right-[-50px]\r
            lg:top-[460px] lg:right-[-140px]\r
            md:top-[360px] md:right-[-140px]\r
            sm:top-[400px] sm:right-[-110px]\r
            xs:top-[360px] xs:right-[0]\r
            top-[360px] right-[0] \r
       `,children:t.jsx($,{index:n})})]})})})}export{F as O};
