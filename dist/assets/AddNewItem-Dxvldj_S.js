var O=Object.defineProperty,T=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(s,l,t)=>l in s?O(s,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[l]=t,f=(s,l)=>{for(var t in l||(l={}))L.call(l,t)&&k(s,t,l[t]);if(v)for(var t of v(l))P.call(l,t)&&k(s,t,l[t]);return s},w=(s,l)=>T(s,K(l));var S=(s,l,t)=>new Promise((n,u)=>{var j=x=>{try{e(t.next(x))}catch(m){u(m)}},c=x=>{try{e(t.throw(x))}catch(m){u(m)}},e=x=>x.done?n(x.value):Promise.resolve(x.value).then(j,c);e((t=t.apply(s,l)).next())});import{r as p,j as a}from"./three-vendor-D76XtHXd.js";import{I as d}from"./Input-B2dwBdFY.js";import{u as U,h as $,m as F,n as z,o as G,p as H,q as M,r as Q,t as V}from"./index-BmDCM4dm.js";import{J as b}from"./jodit-react-JN_gRDIm.js";import{I as C}from"./ImageUploader-v4Cor4FF.js";import{c as y}from"./data-DNsZWopF.js";import"./react-vendor-C6O4aKhz.js";const re=()=>{const s=U(),{pathname:l}=$(),t=l.split("/").at(-1),n=+t==4,u=+t==3,[j,c]=p.useState(""),[e,x]=p.useState(()=>n?{title:"",text:""}:u?{name:"",description:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:""}:{name:"",description:"",min_param:"",max_param:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:""}),[m,N]=p.useState(null),[_,E]=p.useState(null),o=r=>{const{name:i,value:g}=r.target;x(J=>w(f({},J),{[i]:g}))},h=(r,i)=>{x(g=>w(f({},g),{[r]:i}))},I=r=>S(void 0,null,function*(){r.preventDefault(),c(""),console.log(e);try{if(n){if(!e.title||!e.text||!m){c("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const i={title:e.title,text:e.text,news_photo:m};yield s(z(i)).unwrap(),yield s(G()),x({title:"",text:""})}else if(+t==2){if(console.log(e),!e.name||!e.description||!m||!_||!e.min_param||!e.max_param||!e.header||!e.sub_header||!e.extra_description){c("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const i={name:e.name,description:e.description,image_card:m,image_banner:_,min_param:parseInt(e.min_param),max_param:parseInt(e.max_param),sub_header:e.sub_header,header:e.header,image_banner_alt:e.image_banner_alt,image_card_alt:e.image_card_alt,page_description:e.page_description,page_title:e.page_title,page_keywords:e.page_keywords,extra_description:e.extra_description};yield s(H(i)).unwrap(),yield s(M()),x({name:"",description:"",min_param:"",max_param:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:""})}else if(+t==3){if(!e.name||!e.description||!m||!_||!e.header||!e.sub_header||!e.extra_description){c("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const i={name:e.name,description:e.description,image_card:m,image_banner:_,sub_header:e.sub_header,header:e.header,image_banner_alt:e.image_banner_alt,image_card_alt:e.image_card_alt,page_description:e.page_description,page_title:e.page_title,page_keywords:e.page_keywords,extra_description:e.extra_description};yield s(Q(i)).unwrap(),yield s(V()),x({name:"",description:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:""})}N(null),s(F(!1))}catch(i){console.error("Failed to create item:",i);const g=n?"новость":+t==2?"оборудование":"решение";alert(`Не удалось создать ${g}. Возможно вы уже добавляли фото с таким названием, переименуйте и попробуйте ещё раз`)}}),D=r=>{if(r==2)return"Добавление нового обрудования";if(r==3)return"Добавление нового решения";if(r==4)return"Добавление новой новости"},A=p.useRef(null),q=p.useRef(null),B=p.useRef(null),R=p.useRef(null);return a.jsx("section",{className:`fixed inset-0 flex items-center justify-center px-4 xs:px-5 \r
    sm:px-6 md:px-7 lg:px-8`,children:a.jsxs("div",{className:`bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] \r
      lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 \r
      rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full \r
      max-w-[300px] xs:max-w-[350px] sm:max-w-[450px] md:max-w-[550px] \r
      lg:max-w-[600px] xl:max-w-[663px] relative overflow-y-scroll max-h-[85%]`,children:[a.jsx("button",{onClick:()=>s(F(!1)),className:"absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700",children:"✕"}),a.jsx("h2",{className:"text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-6",children:D(t)}),a.jsxs("form",{onSubmit:I,className:"space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",children:[!n&&a.jsxs("div",{children:[a.jsx("p",{className:"w-full text-sm text-gray-900",children:"Изображение для баннера"}),a.jsx(C,{banner:!0,onFileSelect:E}),a.jsxs("div",{className:"space-y-2 mt-2",children:[a.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Alt-тег для баннера"}),a.jsx(d,{type:"text",name:"image_banner_alt",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:e.image_banner_alt,onChange:o,placeholder:"Описание изображения баннера"})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"w-full text-sm text-gray-900",children:"Изображение для карточки"}),a.jsx(C,{onFileSelect:N}),!n&&a.jsxs("div",{className:"space-y-2 mt-2",children:[a.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Alt-тег для карточки"}),a.jsx(d,{type:"text",name:"image_card_alt",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:e.image_card_alt,onChange:o,placeholder:"Описание изображения карточки"})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Название"}),a.jsx(d,{type:"text",name:n?"title":"name",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:n?e.title:e.name,onChange:o})]}),a.jsx("label",{htmlFor:"message",className:"block w-full text-xs xs:text-sm text-gray-900",children:n?"Текст новости":"Описание"}),n?a.jsx(b,{ref:q,value:e.text||"",config:y,onBlur:r=>h("text",r)}):a.jsx(b,{ref:A,value:e.description||"",config:y,onBlur:r=>h("description",r)}),!n&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"space-y-2 pt-4",children:[a.jsx("label",{htmlFor:"message",className:"block text-sm text-gray-900",children:"Полное описание товара"}),a.jsx(b,{ref:B,value:e.extra_description||"",config:y,onBlur:r=>h("extra_description",r)})]}),a.jsxs("div",{className:"space-y-2 pt-4",children:[a.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Заголовок баннера"}),a.jsx(d,{type:"text",name:"sub_header",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:e.sub_header,onChange:o})]}),a.jsx("label",{htmlFor:"message",className:"block w-full text-xs xs:text-sm text-gray-900",children:"Текст баннера"}),a.jsx(b,{ref:R,value:e.header||"",config:y,onBlur:r=>h("header",r)})]}),+t==2&&a.jsxs("div",{className:"flex w-full justify-between gap-4 pb-5 pt-4",children:[a.jsxs("div",{className:"w-[48%] space-y-2",children:[a.jsx("p",{className:"block w-full text-xs xs:text-sm text-gray-900",children:"От"}),a.jsx(d,{required:!0,type:"number",name:"min_param",value:e.min_param,onChange:o,className:` block p-2 xs:p-2.5 w-[300px]\r
                  text-sm xs:text-base text-gray-400 \r
                  font-normal bg-gray-50 rounded-lg \r
                  border \r
                  border-gray-300`})]}),a.jsxs("div",{className:"w-[48%] space-y-2",children:[a.jsx("p",{className:"block w-full text-xs xs:text-sm text-gray-900",children:"До"}),a.jsx(d,{required:!0,type:"number",name:"max_param",value:e.max_param,className:`block p-2 xs:p-2.5 w-full] \r
                  text-sm xs:text-base text-gray-400 \r
                  font-normal bg-gray-50 rounded-lg border\r
                   border-gray-300`,onChange:o})]})]}),!n&&a.jsxs("div",{className:"border-t border-gray-200 pt-4 space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"SEO информация"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Заголовок страницы (Title)"}),a.jsx(d,{type:"text",name:"page_title",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:e.page_title,onChange:o,placeholder:"Заголовок для SEO"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Описание страницы (Description)"}),a.jsx("textarea",{name:"page_description",rows:"3",onChange:o,className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:e.page_description,placeholder:"Краткое описание для поисковых систем"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Ключевые слова (Keywords)"}),a.jsx(d,{type:"text",name:"page_keywords",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:e.page_keywords,onChange:o,placeholder:"Ключевые слова через запятую"})]})]}),a.jsx("button",{type:"submit",className:"w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium",children:"Добавить"})]})]})})};export{re as default};
