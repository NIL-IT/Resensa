const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jodit-react-v2INtMiw.js","assets/react-vendor-DomL0yj5.js"])))=>i.map(i=>d[i]);
var V=Object.defineProperty,Y=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(l,n,r)=>n in l?V(l,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[n]=r,v=(l,n)=>{for(var r in n||(n={}))H.call(n,r)&&C(l,r,n[r]);if(F)for(var r of F(n))M.call(n,r)&&C(l,r,n[r]);return l},k=(l,n)=>Y(l,G(n));var I=(l,n,r)=>new Promise((i,g)=>{var b=o=>{try{h(r.next(o))}catch(_){g(_)}},N=o=>{try{h(r.throw(o))}catch(_){g(_)}},h=o=>o.done?i(o.value):Promise.resolve(o.value).then(b,N);h((r=r.apply(l,n)).next())});import{r as p,j as s,_ as Q}from"./three-vendor-CsCe7JNW.js";import{I as c}from"./Input-D0XREh7A.js";import{u as W,h as X,a as Z,i as R,b as q,j as $,k as f,l as D}from"./index-DWLJoA8g.js";import{I as B}from"./ImageUploader-CICD2gw0.js";import{c as u}from"./data-B0z0wmyU.js";import"./react-vendor-DomL0yj5.js";const w=p.lazy(()=>Q(()=>import("./jodit-react-v2INtMiw.js").then(l=>l.j),__vite__mapDeps([0,1]))),ne=()=>{const l=W(),{pathname:n}=X(),r=n.split("/").at(-1),i=+r==4,g=+r==3;document.body.style.overflowY="hidden";const{itemId:b,equipment:N,solutions:h,news:o}=Z(({user:t})=>t),_=i?o:g?h:N,e=b?_==null?void 0:_.find(t=>+t.id==+b):null,[a,S]=p.useState(()=>{const t=i?{title:(e==null?void 0:e.title)||"",text:(e==null?void 0:e.text)||"",page_description:(e==null?void 0:e.page_description)||"",page_title:(e==null?void 0:e.page_title)||"",page_keywords:(e==null?void 0:e.page_keywords)||"",hidden_seo_text:(e==null?void 0:e.hidden_seo_text)||""}:g?{name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",sub_header:(e==null?void 0:e.sub_header)||"",header:(e==null?void 0:e.header)||"",image_banner_alt:(e==null?void 0:e.image_banner_alt)||"",image_card_alt:(e==null?void 0:e.image_card_alt)||"",page_description:(e==null?void 0:e.page_description)||"",page_title:(e==null?void 0:e.page_title)||"",page_keywords:(e==null?void 0:e.page_keywords)||"",extra_description:(e==null?void 0:e.extra_description)||"",hidden_seo_text:(e==null?void 0:e.hidden_seo_text)||""}:{name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",min_param:(e==null?void 0:e.min_param)||"",max_param:(e==null?void 0:e.max_param)||"",sub_header:(e==null?void 0:e.sub_header)||"",header:(e==null?void 0:e.header)||"",image_banner_alt:(e==null?void 0:e.image_banner_alt)||"",image_card_alt:(e==null?void 0:e.image_card_alt)||"",page_description:(e==null?void 0:e.page_description)||"",page_title:(e==null?void 0:e.page_title)||"",page_keywords:(e==null?void 0:e.page_keywords)||"",extra_description:(e==null?void 0:e.extra_description)||"",hidden_seo_text:(e==null?void 0:e.hidden_seo_text)||""};return e!=null&&e.image&&(i?t.news_photo=e.image:g?t.solution_photo=e.image:t.equipment_photo=e.image),t}),y=(t,m)=>{S(d=>k(v({},d),{[m]:t}))},[j,A]=p.useState(),[E,O]=p.useState(),x=t=>{const{name:m,value:d}=t.target;S(U=>k(v({},U),{[m]:d}))},T=p.useRef(null),z=p.useRef(null),J=p.useRef(null),K=p.useRef(null),L=t=>I(void 0,null,function*(){t.preventDefault();try{if(i){const m=j?{title:a.title,text:a.text,news_photo:j,page_description:a.page_description,page_title:a.page_title,page_keywords:a.page_keywords,hidden_seo_text:a.hidden_seo_text}:{title:a.title,text:a.text,page_description:a.page_description,page_title:a.page_title,page_keywords:a.page_keywords,hidden_seo_text:a.hidden_seo_text};yield l(D({id:e==null?void 0:e.id,data:m})).unwrap()}else if(!g){const d={name:a.name,description:a.description,image_card:j,image_banner:E,min_param:parseInt(a.min_param),max_param:parseInt(a.max_param),sub_header:a==null?void 0:a.sub_header,header:a==null?void 0:a.header,image_banner_alt:a==null?void 0:a.image_banner_alt,image_card_alt:a==null?void 0:a.image_card_alt,extra_description:a==null?void 0:a.extra_description,page_description:a==null?void 0:a.page_description,page_title:a==null?void 0:a.page_title,page_keywords:a==null?void 0:a.page_keywords,hidden_seo_text:a==null?void 0:a.hidden_seo_text};yield l($({id:e==null?void 0:e.id,data:d})).unwrap()}else if(g){const d={name:a.name,description:a.description,image_card:j,image_banner:E,sub_header:a==null?void 0:a.sub_header,header:a==null?void 0:a.header,image_banner_alt:a==null?void 0:a.image_banner_alt,image_card_alt:a==null?void 0:a.image_card_alt,page_description:a==null?void 0:a.page_description,page_title:a==null?void 0:a.page_title,page_keywords:a==null?void 0:a.page_keywords,extra_description:a==null?void 0:a.extra_description,hidden_seo_text:a==null?void 0:a.hidden_seo_text};yield l(f({id:e==null?void 0:e.id,data:d})).unwrap()}l(R(!1)),l(q(null))}catch(m){alert(m.message||"Не удалось сохранить изменения. Возможно вы уже добавляли фотографию с таким названием, переименуйте и попробуйте снова.")}});return s.jsx("section",{className:"fixed inset-0 flex items-center justify-center",children:s.jsxs("div",{className:`bg-white  h-[80%] py-[38px] px-8 \r
      rounded-lg w-full max-w-[663px]  overflow-y-scroll overflow-x-hidden  relative`,children:[s.jsx("button",{onClick:()=>{l(R(!1)),l(q(null))},className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700",children:"✕"}),s.jsx("h2",{className:"text-center text-[32px] font-medium leading-[40.8px] text-gray-400 mb-6",children:i?"Изменить новость":g?"Изменить решения":"Изменить оборудование"}),s.jsxs("form",{onSubmit:L,className:"space-y-[18px]",children:[!i&&s.jsxs("div",{children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Изображение для баннера"}),s.jsx(B,{banner:!0,newsBanner:!!i,findProduct:e,onFileSelect:O}),s.jsxs("div",{className:"space-y-2 mt-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Alt-тег для баннера"}),s.jsx(c,{type:"text",name:"image_banner_alt",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.image_banner_alt,onChange:x,placeholder:"Описание изображения баннера"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Изображение для карточки"}),s.jsx(B,{findProduct:e,onFileSelect:A}),!i&&s.jsxs("div",{className:"space-y-2 mt-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Alt-тег для карточки"}),s.jsx(c,{type:"text",name:"image_card_alt",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.image_card_alt,onChange:x,placeholder:"Описание изображения карточки"})]})]}),i&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Название"}),s.jsx(c,{type:"text",name:"title",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.title,onChange:x})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{htmlFor:"text",className:"block text-sm font-medium text-gray-900",children:"Текст новости"}),s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"border border-gray-300 h-[150px] w-full"}),children:s.jsx(w,{ref:T,value:a.text,config:u,onBlur:t=>y(t,"text")})})]})]}),!i&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Название"}),s.jsx(c,{type:"text",name:"name",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.name,onChange:x})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{htmlFor:"message",className:"block text-sm text-gray-900",children:"Описание"}),s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"border border-gray-300 h-[150px] w-full"}),children:s.jsx(w,{ref:z,value:a.description,config:u,onBlur:t=>y(t,"description")})}),s.jsx("label",{htmlFor:"extra_description",className:"block text-sm text-gray-900 pt-4",children:"Полное описание товара"}),s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"border border-gray-300 h-[150px] w-full"}),children:s.jsx(w,{ref:J,value:a.extra_description,config:u,onBlur:t=>y(t,"extra_description")})})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900 pt-4",children:"Заголовок баннера"}),s.jsx(c,{type:"text",name:"sub_header",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.sub_header,onChange:x})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{htmlFor:"message",className:"block text-sm text-gray-900",children:"Текст баннера"}),s.jsx(p.Suspense,{fallback:s.jsx("div",{className:"border border-gray-300 h-[150px] w-full"}),children:s.jsx(w,{ref:K,value:a.header,config:u,onBlur:t=>y(t,"header")})})]})]}),!g&&!i&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900 pt-4",children:"Минимальный параметр"}),s.jsx(c,{type:"text",name:"min_param",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.min_param,onChange:x})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Максимальный параметр"}),s.jsx(c,{type:"text",name:"max_param",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.max_param,onChange:x})]})]}),s.jsxs("div",{className:"border-t border-gray-200 pt-4 space-y-[18px]",children:[s.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"SEO информация"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Заголовок страницы (Title)"}),s.jsx(c,{type:"text",name:"page_title",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_title,onChange:x,placeholder:"Заголовок для SEO"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Описание страницы (Description)"}),s.jsx("textarea",{name:"page_description",rows:"3",onChange:x,className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_description,placeholder:"Краткое описание для поисковых систем"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Текст для поисковых систем"}),s.jsx("textarea",{name:"hidden_seo_text",rows:"3",onChange:x,className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.hidden_seo_text,placeholder:"Этот текст предназначен для поисковых систем и не виден пользователям. "})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("p",{className:"w-full text-sm text-gray-900",children:"Ключевые слова (Keywords)"}),s.jsx(c,{type:"text",name:"page_keywords",className:"block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",value:a.page_keywords,onChange:x,placeholder:"Ключевые слова через запятую"})]})]}),s.jsx("button",{type:"submit",className:"w-full p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-lg font-medium",children:"ИЗМЕНИТЬ"})]})]})})};export{ne as default};
