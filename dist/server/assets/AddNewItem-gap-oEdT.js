const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jodit-react-DNjuHfW7.js","assets/index-DDfR4iPl.js","assets/index-CKUpP5Rb.css"])))=>i.map(i=>d[i]);
import{u as W,h as F,j as e,n as _,o as S,p as q,q as B,r as O,t as P,v as R,_ as T}from"./index-DDfR4iPl.js";import{useState as N,useRef as f,Suspense as b,lazy as L}from"react";import{I as d}from"./Input-CGnlw16w.js";import{I as w}from"./ImageUploader-DvUhmwjt.js";import{c as g}from"./data-B0z0wmyU.js";import"react-dom";const h=L(()=>T(()=>import("./jodit-react-DNjuHfW7.js").then(o=>o.j),__vite__mapDeps([0,1,2]))),Q=()=>{const o=W(),{pathname:C}=F(),m=C.split("/").at(-1),n=+m==4,D=+m==3,[z,u]=N(""),[s,p]=N(()=>n?{title:"",text:"",page_description:"",page_title:"",page_keywords:"",hidden_seo_text:""}:D?{name:"",description:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:"",hidden_seo_text:""}:{name:"",description:"",min_param:"",max_param:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:"",hidden_seo_text:""}),[l,k]=N(null),[c,j]=N(null),t=r=>{const{name:a,value:i}=r.target;p(V=>({...V,[a]:i}))},x=(r,a)=>{p(i=>({...i,[r]:a}))},y=async r=>{r.preventDefault(),u(""),console.log(s);try{if(n){if(!s.title||!s.text||!l){u("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const a={title:s.title,text:s.text,news_photo:l,page_description:s.page_description,page_title:s.page_title,page_keywords:s.page_keywords,hidden_seo_text:s.hidden_seo_text};await o(S(a)),await o(q()),p({title:"",text:""})}else if(+m==2){if(console.log(s),!s.name||!s.description||!l||!c||!s.min_param||!s.max_param||!s.header||!s.sub_header||!s.extra_description){u("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const a={name:s.name,description:s.description,image_card:l,image_banner:c,min_param:parseInt(s.min_param),max_param:parseInt(s.max_param),sub_header:s.sub_header,header:s.header,image_banner_alt:s.image_banner_alt,image_card_alt:s.image_card_alt,page_description:s.page_description,page_title:s.page_title,page_keywords:s.page_keywords,extra_description:s.extra_description,hidden_seo_text:s.hidden_seo_text};await o(B(a)).unwrap(),await o(O()),p({name:"",description:"",min_param:"",max_param:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:"",hidden_seo_text:""})}else if(+m==3){if(!s.name||!s.description||!l||!c||!s.header||!s.sub_header||!s.extra_description){u("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const a={name:s.name,description:s.description,image_card:l,image_banner:c,sub_header:s.sub_header,header:s.header,image_banner_alt:s.image_banner_alt,image_card_alt:s.image_card_alt,page_description:s.page_description,page_title:s.page_title,page_keywords:s.page_keywords,extra_description:s.extra_description,hidden_seo_text:s.hidden_seo_text};await o(P(a)),await o(R()),p({name:"",description:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:"",hidden_seo_text:""})}k(null),o(_(!1))}catch(a){console.error("Failed to create item:",a);const i=n?"новость":+m==2?"оборудование":"решение";alert(`Не удалось создать ${i}. Возможно вы уже добавляли фото с таким названием, переименуйте и попробуйте ещё раз`)}},v=r=>{if(r==2)return"Добавление нового обрудования";if(r==3)return"Добавление нового решения";if(r==4)return"Добавление новой новости"},E=f(null),I=f(null),A=f(null),U=f(null);return e.jsxDEV("section",{className:`fixed inset-0 flex items-center justify-center px-4 xs:px-5 \r
    sm:px-6 md:px-7 lg:px-8`,children:e.jsxDEV("div",{className:`bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] \r
      lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 \r
      rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full \r
      max-w-[300px] xs:max-w-[350px] sm:max-w-[450px] md:max-w-[550px] \r
      lg:max-w-[600px] xl:max-w-[663px] relative overflow-y-scroll  overflow-x-hidden max-h-[85%]`,children:[e.jsxDEV("button",{onClick:()=>o(_(!1)),className:"absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700",children:"✕"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:252,columnNumber:9},void 0),e.jsxDEV("h2",{className:"text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-6",children:v(m)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:258,columnNumber:9},void 0),e.jsxDEV("form",{onSubmit:y,className:"space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",children:[!n&&e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"w-full text-sm text-gray-900",children:"Изображение для баннера"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:267,columnNumber:15},void 0),e.jsxDEV(w,{banner:!0,onFileSelect:j},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:270,columnNumber:15},void 0),e.jsxDEV("div",{className:"space-y-2 mt-2",children:[e.jsxDEV("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Alt-тег для баннера"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:275,columnNumber:17},void 0),e.jsxDEV(d,{type:"text",name:"image_banner_alt",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:s.image_banner_alt,onChange:t,placeholder:"Описание изображения баннера"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:278,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:274,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:266,columnNumber:13},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{className:"w-full text-sm text-gray-900",children:"Изображение для карточки"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:290,columnNumber:13},void 0),e.jsxDEV(w,{onFileSelect:k},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:293,columnNumber:13},void 0),!n&&e.jsxDEV("div",{className:"space-y-2 mt-2",children:[e.jsxDEV("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Alt-тег для карточки"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:296,columnNumber:17},void 0),e.jsxDEV(d,{type:"text",name:"image_card_alt",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:s.image_card_alt,onChange:t,placeholder:"Описание изображения карточки"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:299,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:295,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:289,columnNumber:11},void 0),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Название"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:311,columnNumber:13},void 0),e.jsxDEV(d,{type:"text",name:n?"title":"name",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:n?s.title:s.name,onChange:t},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:312,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:310,columnNumber:11},void 0),e.jsxDEV("label",{htmlFor:"message",className:"block w-full text-xs xs:text-sm text-gray-900",children:n?"Текст новости":"Описание"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:321,columnNumber:11},void 0),n?e.jsxDEV(b,{fallback:e.jsxDEV("div",{className:"border border-gray-300 h-[150px] w-full"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:330,columnNumber:17},void 0),children:e.jsxDEV(h,{ref:I,value:s.text||"",config:g,onBlur:r=>x("text",r)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:333,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:328,columnNumber:13},void 0):e.jsxDEV(b,{fallback:e.jsxDEV("div",{className:"border border-gray-300 h-[150px] w-full"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:343,columnNumber:17},void 0),children:e.jsxDEV(h,{ref:E,value:s.description||"",config:g,onBlur:r=>x("description",r)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:346,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:341,columnNumber:13},void 0),!n&&e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"space-y-2 pt-4",children:[e.jsxDEV("label",{htmlFor:"message",className:"block text-sm text-gray-900",children:"Полное описание товара"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:359,columnNumber:17},void 0),e.jsxDEV(b,{fallback:e.jsxDEV("div",{className:"border border-gray-300 h-[150px] w-full"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:367,columnNumber:21},void 0),children:e.jsxDEV(h,{ref:A,value:s.extra_description||"",config:g,onBlur:r=>x("extra_description",r)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:370,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:365,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:358,columnNumber:15},void 0),e.jsxDEV("div",{className:"space-y-2 pt-4",children:[e.jsxDEV("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Заголовок баннера"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:382,columnNumber:17},void 0),e.jsxDEV(d,{type:"text",name:"sub_header",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:s.sub_header,onChange:t},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:385,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:381,columnNumber:15},void 0),e.jsxDEV("label",{htmlFor:"message",className:"block w-full text-xs xs:text-sm text-gray-900",children:"Текст баннера"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:393,columnNumber:15},void 0),e.jsxDEV(b,{fallback:e.jsxDEV("div",{className:"border border-gray-300 h-[150px] w-full"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:401,columnNumber:19},void 0),children:e.jsxDEV(h,{ref:U,value:s.header||"",config:g,onBlur:r=>x("header",r)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:404,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:399,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:357,columnNumber:13},void 0),+m==2&&e.jsxDEV("div",{className:"flex w-full justify-between gap-4 pb-5 pt-4",children:[e.jsxDEV("div",{className:"w-[48%] space-y-2",children:[e.jsxDEV("p",{className:"block w-full text-xs xs:text-sm text-gray-900",children:"От"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:418,columnNumber:17},void 0),e.jsxDEV(d,{required:!0,type:"number",name:"min_param",value:s.min_param,onChange:t,className:` block p-2 xs:p-2.5 w-[300px]\r
                  text-sm xs:text-base text-gray-400 \r
                  font-normal bg-gray-50 rounded-lg \r
                  border \r
                  border-gray-300`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:421,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:417,columnNumber:15},void 0),e.jsxDEV("div",{className:"w-[48%] space-y-2",children:[e.jsxDEV("p",{className:"block w-full text-xs xs:text-sm text-gray-900",children:"До"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:435,columnNumber:17},void 0),e.jsxDEV(d,{required:!0,type:"number",name:"max_param",value:s.max_param,className:`block p-2 xs:p-2.5 w-full] \r
                  text-sm xs:text-base text-gray-400 \r
                  font-normal bg-gray-50 rounded-lg border\r
                   border-gray-300`,onChange:t},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:438,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:434,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:416,columnNumber:13},void 0),e.jsxDEV("div",{className:"border-t border-gray-200 pt-4 space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",children:[e.jsxDEV("h3",{className:"text-lg font-medium text-gray-900",children:"SEO информация"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:454,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Заголовок страницы (Title)"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:459,columnNumber:15},void 0),e.jsxDEV(d,{type:"text",name:"page_title",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:s.page_title,onChange:t,placeholder:"Заголовок для SEO"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:462,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:458,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Описание страницы (Description)"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:473,columnNumber:15},void 0),e.jsxDEV("textarea",{name:"page_description",rows:"3",onChange:t,className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:s.page_description,placeholder:"Краткое описание для поисковых систем"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:476,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:472,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{className:"w-full text-sm text-gray-900",children:"Текст для поисковых систем"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:486,columnNumber:15},void 0),e.jsxDEV("textarea",{name:"hidden_seo_text",rows:"3",onChange:t,className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:s.hidden_seo_text,placeholder:"Этот текст предназначен для поисковых систем и не виден пользователям. "},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:489,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:485,columnNumber:13},void 0),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Ключевые слова (Keywords)"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:499,columnNumber:15},void 0),e.jsxDEV(d,{type:"text",name:"page_keywords",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:s.page_keywords,onChange:t,placeholder:"Ключевые слова через запятую"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:502,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:498,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:453,columnNumber:11},void 0),e.jsxDEV("button",{type:"submit",className:"w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium",children:"Добавить"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:513,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:261,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:245,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/AddNewItem.jsx",lineNumber:241,columnNumber:5},void 0)};export{Q as default};
