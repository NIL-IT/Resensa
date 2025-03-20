const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jodit-react-B5rMUq9-.js","assets/index-LtHlWvFZ.js","assets/index-Clibuwr4.css"])))=>i.map(i=>d[i]);
import{u as q,h as B,j as e,n as w,o as O,p as P,q as R,r as T,t as L,v as z,_ as J}from"./index-LtHlWvFZ.js";import{useState as _,useRef as h,Suspense as u,lazy as K}from"react";import{I as x}from"./Input-BkNlKYTy.js";import{I as j}from"./ImageUploader-BtvfZm5z.js";import{c as b}from"./data-B0z0wmyU.js";import"react-dom";const y=K(()=>J(()=>import("./jodit-react-B5rMUq9-.js").then(r=>r.j),__vite__mapDeps([0,1,2]))),W=()=>{const r=q(),{pathname:N}=B(),i=N.split("/").at(-1),l=+i==4,v=+i==3,[U,m]=_(""),[a,o]=_(()=>l?{title:"",text:"",page_description:"",page_title:"",page_keywords:"",hidden_seo_text:""}:v?{name:"",description:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:"",hidden_seo_text:""}:{name:"",description:"",min_param:"",max_param:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:"",hidden_seo_text:""}),[d,f]=_(null),[c,k]=_(null),n=t=>{const{name:s,value:p}=t.target;o(A=>({...A,[s]:p}))},g=(t,s)=>{o(p=>({...p,[t]:s}))},F=async t=>{t.preventDefault(),m(""),console.log(a);try{if(l){if(!a.title||!a.text||!d){m("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const s={title:a.title,text:a.text,news_photo:d,page_description:a.page_description,page_title:a.page_title,page_keywords:a.page_keywords,hidden_seo_text:a.hidden_seo_text};await r(O(s)),await r(P()),o({title:"",text:""})}else if(+i==2){if(console.log(a),!a.name||!a.description||!d||!c||!a.min_param||!a.max_param||!a.header||!a.sub_header||!a.extra_description){m("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const s={name:a.name,description:a.description,image_card:d,image_banner:c,min_param:parseInt(a.min_param),max_param:parseInt(a.max_param),sub_header:a.sub_header,header:a.header,image_banner_alt:a.image_banner_alt,image_card_alt:a.image_card_alt,page_description:a.page_description,page_title:a.page_title,page_keywords:a.page_keywords,extra_description:a.extra_description,hidden_seo_text:a.hidden_seo_text};await r(R(s)).unwrap(),await r(T()),o({name:"",description:"",min_param:"",max_param:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:"",hidden_seo_text:""})}else if(+i==3){if(!a.name||!a.description||!d||!c||!a.header||!a.sub_header||!a.extra_description){m("Пожалуйста, заполните все обязательные поля и загрузите изображение");return}const s={name:a.name,description:a.description,image_card:d,image_banner:c,sub_header:a.sub_header,header:a.header,image_banner_alt:a.image_banner_alt,image_card_alt:a.image_card_alt,page_description:a.page_description,page_title:a.page_title,page_keywords:a.page_keywords,extra_description:a.extra_description,hidden_seo_text:a.hidden_seo_text};await r(L(s)),await r(z()),o({name:"",description:"",sub_header:"",header:"",image_banner_alt:"",image_card_alt:"",page_description:"",page_title:"",page_keywords:"",extra_description:"",hidden_seo_text:""})}f(null),r(w(!1))}catch(s){console.error("Failed to create item:",s);const p=l?"новость":+i==2?"оборудование":"решение";alert(`Не удалось создать ${p}. Возможно вы уже добавляли фото с таким названием, переименуйте и попробуйте ещё раз`)}},S=t=>{if(t==2)return"Добавление нового обрудования";if(t==3)return"Добавление нового решения";if(t==4)return"Добавление новой новости"},C=h(null),E=h(null),I=h(null),D=h(null);return e.jsx("section",{className:`fixed inset-0 flex items-center justify-center px-4 xs:px-5 \r
    sm:px-6 md:px-7 lg:px-8`,children:e.jsxs("div",{className:`bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] \r
      lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 \r
      rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full \r
      max-w-[300px] xs:max-w-[350px] sm:max-w-[450px] md:max-w-[550px] \r
      lg:max-w-[600px] xl:max-w-[663px] relative overflow-y-scroll  overflow-x-hidden max-h-[85%]`,children:[e.jsx("button",{onClick:()=>r(w(!1)),className:"absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700",children:"✕"}),e.jsx("h2",{className:"text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-6",children:S(i)}),e.jsxs("form",{onSubmit:F,className:"space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",children:[!l&&e.jsxs("div",{children:[e.jsx("p",{className:"w-full text-sm text-gray-900",children:"Изображение для баннера"}),e.jsx(j,{banner:!0,onFileSelect:k}),e.jsxs("div",{className:"space-y-2 mt-2",children:[e.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Alt-тег для баннера"}),e.jsx(x,{type:"text",name:"image_banner_alt",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.image_banner_alt,onChange:n,placeholder:"Описание изображения баннера"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"w-full text-sm text-gray-900",children:"Изображение для карточки"}),e.jsx(j,{onFileSelect:f}),!l&&e.jsxs("div",{className:"space-y-2 mt-2",children:[e.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Alt-тег для карточки"}),e.jsx(x,{type:"text",name:"image_card_alt",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.image_card_alt,onChange:n,placeholder:"Описание изображения карточки"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Название"}),e.jsx(x,{type:"text",name:l?"title":"name",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:l?a.title:a.name,onChange:n})]}),e.jsx("label",{htmlFor:"message",className:"block w-full text-xs xs:text-sm text-gray-900",children:l?"Текст новости":"Описание"}),l?e.jsx(u,{fallback:e.jsx("div",{className:"border border-gray-300 h-[150px] w-full"}),children:e.jsx(y,{ref:E,value:a.text||"",config:b,onBlur:t=>g("text",t)})}):e.jsx(u,{fallback:e.jsx("div",{className:"border border-gray-300 h-[150px] w-full"}),children:e.jsx(y,{ref:C,value:a.description||"",config:b,onBlur:t=>g("description",t)})}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-2 pt-4",children:[e.jsx("label",{htmlFor:"message",className:"block text-sm text-gray-900",children:"Полное описание товара"}),e.jsx(u,{fallback:e.jsx("div",{className:"border border-gray-300 h-[150px] w-full"}),children:e.jsx(y,{ref:I,value:a.extra_description||"",config:b,onBlur:t=>g("extra_description",t)})})]}),e.jsxs("div",{className:"space-y-2 pt-4",children:[e.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Заголовок баннера"}),e.jsx(x,{type:"text",name:"sub_header",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.sub_header,onChange:n})]}),e.jsx("label",{htmlFor:"message",className:"block w-full text-xs xs:text-sm text-gray-900",children:"Текст баннера"}),e.jsx(u,{fallback:e.jsx("div",{className:"border border-gray-300 h-[150px] w-full"}),children:e.jsx(y,{ref:D,value:a.header||"",config:b,onBlur:t=>g("header",t)})})]}),+i==2&&e.jsxs("div",{className:"flex w-full justify-between gap-4 pb-5 pt-4",children:[e.jsxs("div",{className:"w-[48%] space-y-2",children:[e.jsx("p",{className:"block w-full text-xs xs:text-sm text-gray-900",children:"От"}),e.jsx(x,{required:!0,type:"number",name:"min_param",value:a.min_param,onChange:n,className:` block p-2 xs:p-2.5 w-[300px]\r
                  text-sm xs:text-base text-gray-400 \r
                  font-normal bg-gray-50 rounded-lg \r
                  border \r
                  border-gray-300`})]}),e.jsxs("div",{className:"w-[48%] space-y-2",children:[e.jsx("p",{className:"block w-full text-xs xs:text-sm text-gray-900",children:"До"}),e.jsx(x,{required:!0,type:"number",name:"max_param",value:a.max_param,className:`block p-2 xs:p-2.5 w-full] \r
                  text-sm xs:text-base text-gray-400 \r
                  font-normal bg-gray-50 rounded-lg border\r
                   border-gray-300`,onChange:n})]})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4 space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"SEO информация"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Заголовок страницы (Title)"}),e.jsx(x,{type:"text",name:"page_title",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_title,onChange:n,placeholder:"Заголовок для SEO"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Описание страницы (Description)"}),e.jsx("textarea",{name:"page_description",rows:"3",onChange:n,className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_description,placeholder:"Краткое описание для поисковых систем"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"w-full text-sm text-gray-900",children:"Текст для поисковых систем"}),e.jsx("textarea",{name:"hidden_seo_text",rows:"3",onChange:n,className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.hidden_seo_text,placeholder:"Этот текст предназначен для поисковых систем и не виден пользователям. "})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"w-full text-xs xs:text-sm text-gray-900",children:"Ключевые слова (Keywords)"}),e.jsx(x,{type:"text",name:"page_keywords",className:"block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_keywords,onChange:n,placeholder:"Ключевые слова через запятую"})]})]}),e.jsx("button",{type:"submit",className:"w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium",children:"Добавить"})]})]})})};export{W as default};
