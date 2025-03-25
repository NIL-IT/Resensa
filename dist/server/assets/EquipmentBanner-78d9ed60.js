import{u as $,h as S,a as L,j as e,B as I,c as T}from"./index-a18ae0b1.js";import{useState as p,useRef as R,useEffect as k,useLayoutEffect as H}from"react";function z({subtitle:m,title:v,text:B,bannerImg:i,isButton:q=!1,textSize:d,width:h="",about:a=!1,currentProduct:U,list:N,placeholderSrc:b,cardImg:f}){const W=$(),{pathname:l}=S(),{equipmentById:g,solutionsById:E}=L(({user:s})=>s),[V,P]=p(!!U),w=s=>W(T(s)),[t,y]=p(null),[_,j]=p(""),x=R(null),[n,F]=p(l.split("/").length===3);k(()=>{if(!N)return;const s=N.filter(r=>r.id===g?.id||E?.id);y(s[0]),P(!1)},[g,E]);let o;H(()=>{x.current&&(o=x.current.offsetHeight,o<=55?j(`pb-[50px] xs:pb-[40px] sm:pb-[20px] 
           md:pb-[80px] lg:pb-[130px]  
          xl:pb-[190px] 2xl:pb-[240px] 3xl:pb-[286px]`):j(`pb-[15px] xs:pb-[0px] sm:pb-[20px] 
           md:pb-[65px] lg:pb-[95px]  
          xl:pb-[110px] 2xl:pb-[180px] 3xl:pb-[230px]`))},[t]);const[C,D]=p(t?"/img/product_placeholder.png":b);k(()=>{const s=new Image;t?(s.src=t.image_banner,s.onload=()=>{D(t.image_banner)}):(s.src=i,s.onload=()=>{D(i)})},[i]);const u=l.split("/")[1]==="equipment",c=()=>{const s=l.split("/").pop();return s==="equipment"?"Главная—Оборудование":s==="solutions"?"Главная—Решения":s==="about"?"Главная—О компании":u?`Главная—Оборудование—${m}`:`Главная—Решения—${m}`};return V&&!o?e.jsxDEV("div",{className:` bg-white w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] \r
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px] flex-center justify-center mt-20`,children:e.jsxDEV("div",{className:"loader"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:86,columnNumber:7},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:82,columnNumber:5},this):e.jsxDEV("section",{className:`relative ${!a&&!n?`pb-[50px] xs:pb-[30px] sm:pb-[auto] 
      md:pb-[105px] lg:pb-[160px]  
     xl:pb-[205px] 2xl:pb-[240px] 3xl:pb-[286px]`:n?_:""}`,children:[e.jsxDEV("nav",{className:"container relative",children:e.jsxDEV("ul",{itemScope:!0,itemType:"http://schema.org/BreadcrumbList",className:"absolute flex gap-2 top-[40px] xl:top-[60px]  text-gray-50 px-5 xs:px-0",children:c().split("—").map((s,r)=>e.jsxDEV("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem",className:"flex gap-2   text-sm ",children:[r===c().split("—").length-1?e.jsxDEV(e.Fragment,{children:[e.jsxDEV("span",{itemProp:"name",children:s},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:118,columnNumber:21},this),e.jsxDEV("meta",{itemProp:"position",content:r},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:119,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:117,columnNumber:19},this):e.jsxDEV("a",{title:r==0?"Основной раздел":r==1?"Подраздел уровня 1":"Подраздел уровня 2",itemProp:"item",className:"pointer",href:s==="Главная"?"/":s==="Решения"?"/solutions":s==="Оборудование"?"/equipment":s==="О компании"?"/about":"",children:[e.jsxDEV("span",{itemProp:"name",children:[" ",s]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:144,columnNumber:21},this),e.jsxDEV("meta",{itemProp:"position",content:r},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:145,columnNumber:21},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:122,columnNumber:19},this),r+1<c().split("—").length&&e.jsxDEV("span",{children:">"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:149,columnNumber:19},this)]},r,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:109,columnNumber:15},this))},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:101,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:100,columnNumber:7},this),e.jsxDEV("div",{...n?{itemScope:!0,itemType:"http://schema.org/Product"}:{},children:[e.jsxDEV("h4",{className:"hidden",itemProp:"name",children:[" ",m||t.name]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:160,columnNumber:9},this),n&&e.jsxDEV("img",{className:"hidden",src:f||"",alt:t?t.image_card_alt:"Карточка товара",itemProp:"image",title:t?t.image_card_alt:"Карточка товара"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:165,columnNumber:11},this),e.jsxDEV("img",{className:`absolute  brightness-50 object-cover object-center top-[30px] 
          left-0 w-full    
          z-[-2] ${C===b?"loading":"loaded"} ${n?`object-contain h-[400px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]`:`
              min-w-[100%] max-w-[1920px] 
              h-[400px] sm:h-[500px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]
              max-h-[900px]`}`,src:C,alt:t?t?.image_banner_alt:u?"Баннер оборудования":"Баннер решений",title:t?t?.image_banner_alt:u?"Баннер оборудования":"Баннер решений"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:174,columnNumber:9},this),e.jsxDEV("div",{...n?{itemProp:"offers",itemScope:!0,itemType:"http://schema.org/Offer"}:{},children:[n&&e.jsxDEV("div",{className:"invisible w-0 h-0",children:[e.jsxDEV("meta",{itemProp:"price",content:"5000"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:215,columnNumber:15},this),e.jsxDEV("meta",{itemProp:"priceCurrency",content:"RUB"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:216,columnNumber:15},this),e.jsxDEV("meta",{itemProp:"availability",content:"https://schema.org/InStock"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:217,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:214,columnNumber:13},this),e.jsxDEV("div",{className:`container pl-[20px] xs:pl-[0] ${n&&"min-h-[400px]"} ${a?"pt-[80px] xs:pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[200px] xl:pt-[250px] 2xl:pt-[300px] 3xl:pt-[300px] 3xl:pb-[94px]":` ${o<=76?`pt-[120px] 
          md:pt-[140px] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[200px] 3xl:pt-[250px]`:`pt-[100px] xs:pt-[100px] 
          md:pt-[130px] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[200px] 3xl:pt-[250px] `}`}`,children:[e.jsxDEV("h2",{itemProp:"name",className:"font-normal text-sm sm:text-lg leading-[22px] sm:leading-[24px] xl:text-[28px] 2xl:text-[32px] text-white md:leading-[41px] pt-[10px] md:pt-[0px]",children:m||t.name},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:239,columnNumber:13},this),e.jsxDEV("h3",{ref:x,className:`font-normal  text-lg leading-[28px] sm:text-xl  md:text-[28px]  mt-3 md:mt-0 sm:leading-[32px]  md:leading-[36px]  \r
          xl:text-[38px] 2xl:text-[48px] xl:leading-[51px] 2xl:leading-[61px] text-white uppercase`,children:v||t.sub_header},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:245,columnNumber:13},this),e.jsxDEV("div",{dangerouslySetInnerHTML:{__html:B},itemProp:"description",className:` text-white mt-3 mb-8 xs:mb-[40px] xs:mt-[20px] sm:mb-[30px] sm:mt-[30px]  md:mb-[40px] md:mt-[40px] 
            lg:mb-[33px] lg:mt-[20px] xl:mt-[30px] 2xl:mt-[65px] 
            ${a?"text-sm xl:text-lg":""} ${h||"w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"}  ${d||" text-xs sm:text-sm lg:text-lg xl:text-xl"}`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:252,columnNumber:13},this),q&&e.jsxDEV(I,{onClick:()=>w(!0),icon:!0,iconWidth:"w-[24px] sm:w-[30px] md:w-[38px]",white:!0,text:"Оформить заказ",className:`py-[5px] px-[10px]  sm:py-[10px]  lg:py-[14px]\r
              xs:pl-[10px] xl:py-[19px] md:px-6 bg-white\r
              text-gray-400 text-xs sm:text-base`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:268,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:224,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:204,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:155,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/EquipmentBanner.jsx",lineNumber:89,columnNumber:5},this)}export{z as E};
