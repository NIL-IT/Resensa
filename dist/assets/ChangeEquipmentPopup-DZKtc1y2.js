var K=Object.defineProperty,R=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var v=(t,r,l)=>r in t?K(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,k=(t,r)=>{for(var l in r||(r={}))U.call(r,l)&&v(t,l,r[l]);if(N)for(var l of N(r))Y.call(r,l)&&v(t,l,r[l]);return t},F=(t,r)=>R(t,T(r));var C=(t,r,l)=>new Promise((g,m)=>{var h=p=>{try{d(l.next(p))}catch(c){m(c)}},_=p=>{try{d(l.throw(p))}catch(c){m(c)}},d=p=>p.done?g(p.value):Promise.resolve(p.value).then(h,_);d((l=l.apply(t,r)).next())});import{r as u,j as s}from"./three-vendor-D76XtHXd.js";import{I as x}from"./Input-B2dwBdFY.js";import{u as z,h as G,a as H,i as S,b as I,j as J,k as L,l as M}from"./index-DXZ2kRny.js";import{I as E}from"./ImageUploader-D7jMUhMv.js";import"./react-vendor-C6O4aKhz.js";const f=()=>{const t=z(),{pathname:r}=G(),l=r.split("/").at(-1),g=+l==4,m=+l==3;document.body.style.overflowY="hidden";const{itemId:h,equipment:_,solutions:d,news:p}=H(({user:i})=>i),c=g?p:m?d:_,e=h?c==null?void 0:c.find(i=>+i.id==+h):null;console.log(e);const[a,j]=u.useState(()=>{const i=g?{title:(e==null?void 0:e.title)||"",text:(e==null?void 0:e.text)||""}:m?{name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",sub_header:(e==null?void 0:e.sub_header)||"",header:(e==null?void 0:e.header)||"",image_banner_alt:(e==null?void 0:e.image_banner_alt)||"",image_card_alt:(e==null?void 0:e.image_card_alt)||"",page_description:(e==null?void 0:e.page_description)||"",page_title:(e==null?void 0:e.page_title)||"",page_keywords:(e==null?void 0:e.page_keywords)||""}:{name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",min_param:(e==null?void 0:e.min_param)||"",max_param:(e==null?void 0:e.max_param)||"",sub_header:(e==null?void 0:e.sub_header)||"",header:(e==null?void 0:e.header)||"",image_banner_alt:(e==null?void 0:e.image_banner_alt)||"",image_card_alt:(e==null?void 0:e.image_card_alt)||"",page_description:(e==null?void 0:e.page_description)||"",page_title:(e==null?void 0:e.page_title)||"",page_keywords:(e==null?void 0:e.page_keywords)||""};return e!=null&&e.image&&(g?i.news_photo=e.image:m?i.solution_photo=e.image:i.equipment_photo=e.image),i}),[y,q]=u.useState(),[w,B]=u.useState(),n=i=>{const{name:o,value:b}=i.target;j(O=>F(k({},O),{[o]:b}))},A=i=>C(void 0,null,function*(){i.preventDefault();try{if(g){const o=y?{title:a.title,text:a.text,news_photo:y}:{title:a.title,text:a.text};yield t(M({id:e==null?void 0:e.id,data:o})).unwrap(),j({title:(a==null?void 0:a.title)||"",text:(a==null?void 0:a.text)||""})}else if(!m){const b={name:a.name,description:a.description,image_card:y,image_banner:w,min_param:parseInt(a.min_param),max_param:parseInt(a.max_param),sub_header:a==null?void 0:a.sub_header,header:a==null?void 0:a.header,image_banner_alt:a==null?void 0:a.image_banner_alt,image_card_alt:a==null?void 0:a.image_card_alt,page_description:a==null?void 0:a.page_description,page_title:a==null?void 0:a.page_title,page_keywords:a==null?void 0:a.page_keywords};yield t(J({id:e==null?void 0:e.id,data:b})).unwrap()}else if(m){const b={name:a.name,description:a.description,image_card:y,image_banner:w,sub_header:a==null?void 0:a.sub_header,header:a==null?void 0:a.header,image_banner_alt:a==null?void 0:a.image_banner_alt,image_card_alt:a==null?void 0:a.image_card_alt,page_description:a==null?void 0:a.page_description,page_title:a==null?void 0:a.page_title,page_keywords:a==null?void 0:a.page_keywords};yield t(L({id:e==null?void 0:e.id,data:b})).unwrap()}t(S(!1)),t(I(null))}catch(o){alert(o.message||"Не удалось сохранить изменения. Возможно вы уже добавляли фотографию с таким названием, переименуйте и попробуйте снова.")}});return s.jsx("section",{className:"fixed inset-0 flex items-center justify-center",children:s.jsxs("div",{className:`bg-white  h-[80%] py-[38px] px-8 \r
      rounded-lg w-full max-w-[663px]  overflow-scroll  relative`,children:[s.jsx("button",{onClick:()=>{t(S(!1)),t(I(null))},className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700",children:"✕"}),s.jsx("h2",{className:"text-center text-[32px] font-medium leading-[40.8px] text-gray-400 mb-6",children:g?"Изменить новость":m?"Изменить решения":"Изменить оборудование"}),s.jsxs("form",{onSubmit:A,className:"space-y-[18px]",children:[!g&&s.jsxs("div",{children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Изображение для баннера"}),s.jsx(E,{banner:!0,newsBanner:!!g,findProduct:e,onFileSelect:B}),s.jsxs("div",{className:"space-y-2 mt-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Alt-тег для баннера"}),s.jsx(x,{type:"text",name:"image_banner_alt",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.image_banner_alt,onChange:n,placeholder:"Описание изображения баннера"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Изображение для карточки"}),s.jsx(E,{findProduct:e,onFileSelect:q}),!g&&s.jsxs("div",{className:"space-y-2 mt-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Alt-тег для карточки"}),s.jsx(x,{type:"text",name:"image_card_alt",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.image_card_alt,onChange:n,placeholder:"Описание изображения карточки"})]})]}),g?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Название"}),s.jsx(x,{type:"text",name:"title",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.title,onChange:n})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-900",children:"Текст новости"}),s.jsx("textarea",{id:"message",name:"text",rows:"4",onChange:n,className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.text})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Название"}),s.jsx(x,{type:"text",name:"name",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.name,onChange:n})]}),!g&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{htmlFor:"message",className:"block text-sm text-gray-900",children:"Описание"}),s.jsx("textarea",{id:"message",name:"description",rows:"4",onChange:n,className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.description})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Заголовок баннера"}),s.jsx(x,{type:"text",name:"sub_header",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.sub_header,onChange:n})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{htmlFor:"message",className:"block text-sm text-gray-900",children:"Текст баннера"}),s.jsx("textarea",{id:"message",name:"header",rows:"4",onChange:n,className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.header})]})]}),!m&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Минимальный параметр"}),s.jsx(x,{type:"text",name:"min_param",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.min_param,onChange:n})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Максимальный параметр"}),s.jsx(x,{type:"text",name:"max_param",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.max_param,onChange:n})]})]}),s.jsxs("div",{className:"border-t border-gray-200 pt-4 space-y-[18px]",children:[s.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"SEO информация"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Заголовок страницы (Title)"}),s.jsx(x,{type:"text",name:"page_title",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_title,onChange:n,placeholder:"Заголовок для SEO"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Описание страницы (Description)"}),s.jsx("textarea",{name:"page_description",rows:"3",onChange:n,className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_description,placeholder:"Краткое описание для поисковых систем"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Ключевые слова (Keywords)"}),s.jsx(x,{type:"text",name:"page_keywords",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_keywords,onChange:n,placeholder:"Ключевые слова через запятую"})]})]})]}),s.jsx("button",{type:"submit",className:"w-full p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-lg font-medium",children:"ИЗМЕНИТЬ"})]})]})})};export{f as default};
