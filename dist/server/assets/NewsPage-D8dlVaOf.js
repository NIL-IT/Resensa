import{h as e,y as t,j as s,H as i,z as n}from"./index-BUmeV-AY.js";import{useState as m,useEffect as r}from"react";import{F as a}from"./Footer-D7vvoBAt.js";import{S as o}from"./SeoBlock-DJGecqxK.js";import"react-dom";function c({news:c}){const[p,l]=m(),{pathname:x}=e(),d=x.split("/")[2];r((()=>{if(!d||!c)return;const e=c.filter((({title:e})=>t(e.toLowerCase()).includes(d.toLowerCase())));l(e[0])}),[]);r((()=>{window.scrollTo({top:0,left:0})}),[x]),document.body.style.overflowY="auto";const h=()=>p?`https://new.recensa.ru/news/${d}`:null;return p?s.jsxs(s.Fragment,{children:[s.jsx(o,{url:h(),title:p.page_title,description:p.hidden_seo_text}),s.jsxs(i,{children:[s.jsx("title",{children:p.page_title}),s.jsx("meta",{name:"description",content:p.page_description}),s.jsx("meta",{property:"og:title",content:p.page_title}),s.jsx("meta",{property:"og:url",content:h()}),s.jsx("meta",{name:"keywords",content:p.page_keywords}),s.jsx("link",{rel:"canonical",href:h()})]}),s.jsxs("article",{itemScope:!0,itemType:"http://schema.org/Article",className:"\n              container py-[35px] md:py-[40px] lg:py-[50px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[80px] \n           ",children:[s.jsx("nav",{className:"mb-4 xs:mb-5 sm:mb-6",children:s.jsxs("ul",{itemScope:!0,itemType:"http://schema.org/BreadcrumbList",className:"flex items-center gap-1 xs:gap-2 text-xs xs:text-sm text-gray-400",children:[s.jsx("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem",className:"hover:text-gray-600 transition-colors",children:s.jsxs("a",{title:"Основной раздел",href:"/",children:[s.jsx("span",{itemProp:"name",children:"Главная"}),s.jsx("meta",{itemProp:"position",content:"0"}),s.jsx("meta",{itemProp:"item",content:"https://example.com/"})]})}),s.jsx("span",{children:">"}),s.jsx("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem",className:"cursor-pointer",children:s.jsxs("a",{title:"Подраздел уровня 1",onClick:()=>{n.set("news_nav","1",{expires:1})},href:"/",children:[s.jsx("span",{itemProp:"name",children:"Новости"}),s.jsx("meta",{itemProp:"position",content:"1"}),s.jsx("meta",{itemProp:"item",content:"https://example.com/contacts"})]})}),s.jsx("span",{children:">"}),s.jsx("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem",children:s.jsxs("a",{className:"pointer-events: none",title:"Подраздел уровня 2",children:[s.jsx("span",{itemProp:"name",children:p.title}),s.jsx("meta",{itemProp:"position",content:"1"}),s.jsx("meta",{itemProp:"item",content:"https://example.com/contacts"})]})})]})}),s.jsx("meta",{itemProp:"headline",content:"title"}),s.jsx("h2",{itemProp:"name",className:"text-lg xs:text-xl sm:text-2xl leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[30.6px] text-gray-400 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8",children:p.title}),s.jsx("div",{className:"flex justify-center w-full",children:s.jsxs("div",{className:"w-full flex justify-center   md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1178px]",children:[s.jsx("div",{className:"w-full",children:s.jsxs("div",{className:"w-full",children:[s.jsx("meta",{itemProp:"url",content:`https://new.recensa.ru/${t(p.title)}`}),s.jsx("meta",{itemProp:"description",content:s.jsx("div",{dangerouslySetInnerHTML:{__html:p.text}})}),s.jsx("div",{itemProp:"image",itemScope:!0,itemType:"http://schema.org/ImageObject",className:"flex justify-center w-full",children:s.jsx("img",{style:{backgroundPosition:"center center",backgroundSize:"cover",objectFit:"cover"},itemProp:"url contentUrl",content:p.title,className:"w-[847px] h-[400px]",src:p.image,alt:p.title})}),s.jsx("meta",{itemProp:"datePublished",content:p.date.split("T")[0]}),s.jsx("meta",{itemProp:"dateModified",content:p.date.split("T")[0]}),s.jsx("meta",{itemProp:"inLanguage",content:"ru-RU"}),s.jsx("p",{className:"text-gray-900 text-sm xs:text-base block mt-4",children:p.date.split("T")[0]}),s.jsx("div",{itemProp:"articleBody",className:"space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8",children:s.jsx("div",{className:"text-gray-900 text-sm xs:text-base space-y-4",dangerouslySetInnerHTML:{__html:p.text}})}),s.jsx("div",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"}),s.jsx("meta",{itemProp:"name",content:"Recensa"}),s.jsxs("div",{className:"hidden",itemProp:"publisher",itemScope:!0,itemType:"https://schema.org/Organization",children:[s.jsxs("div",{itemProp:"logo",itemScope:!0,itemType:"https://schema.org/ImageObject",children:[s.jsx("img",{itemProp:"url",src:"/logo.svg",alt:"Recensa"}),s.jsx("meta",{itemProp:"width",content:"200"}),s.jsx("meta",{itemProp:"height",content:"200"})]}),s.jsx("meta",{itemProp:"name",content:"Recensa"}),s.jsx("meta",{itemProp:"url",content:"https://new.recensa.ru/"})]})]})}),s.jsxs("div",{itemScope:"",itemType:"http://schema.org/Organization",children:[s.jsx("meta",{itemProp:"name",content:p.title}),s.jsx("meta",{itemProp:"description",content:"description"}),s.jsx("link",{itemProp:"url",href:"https://new.recensa.ru/"}),s.jsxs("div",{itemProp:"aggregateRating",itemScope:!0,itemType:"https://schema.org/AggregateRating",children:[s.jsx("meta",{itemProp:"worstRating",content:"1"}),s.jsx("meta",{itemProp:"bestRating",content:"5"}),s.jsx("meta",{itemProp:"ratingValue",content:"4.6"}),s.jsx("meta",{itemProp:"ratingCount",content:"8864"})]}),s.jsx("div",{itemProp:"review",itemType:"http://schema.org/Review",itemScope:"",children:s.jsxs("div",{itemProp:"author",itemType:"http://schema.org/Person",itemScope:"",children:[s.jsx("meta",{itemProp:"name",content:"Recensa"}),s.jsx("link",{itemProp:"url",href:`https://new.recensa.ru/${t(p.title)}`})]})})]})]})})]}),s.jsx(a,{})]}):s.jsx(s.Fragment,{children:"Новости нет"})}export{c as default};
