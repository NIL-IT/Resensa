import{r,j as e}from"./three-vendor-Ci446NTQ.js";import{F as d}from"./Footer-DloLmS1w.js";import{h,v as s,H as j,y as g}from"./index-CtaO-_EO.js";import{S as u}from"./SeoBlock-DX6qM0Lg.js";import"./react-vendor-DomL0yj5.js";function N({news:a}){const[t,o]=r.useState(),{pathname:m}=h(),i=m.split("/")[2];r.useEffect(()=>{if(!i||!a)return;const p=a.filter(({title:x})=>s(x.toLowerCase()).includes(i.toLowerCase()));o(p[0])},[]);const c=()=>{g.set("news_nav","1",{expires:1})},l=()=>{window.scrollTo({top:0,left:0})};r.useEffect(()=>{l()},[m]),document.body.style.overflowY="auto";const n=()=>t?`https://new.recensa.ru/news/${i}`:null;return t?e.jsxs(e.Fragment,{children:[e.jsx(u,{url:n(),title:t.page_title,description:t.hidden_seo_text}),e.jsxs(j,{children:[e.jsx("title",{children:t.page_title}),e.jsx("meta",{name:"description",content:t.page_description}),e.jsx("meta",{property:"og:title",content:t.page_title}),e.jsx("meta",{property:"og:url",content:n()}),e.jsx("meta",{name:"keywords",content:t.page_keywords}),e.jsx("link",{rel:"canonical",href:n()})]}),e.jsxs("article",{itemScope:!0,itemType:"http://schema.org/Article",className:`
              container py-[35px] md:py-[40px] lg:py-[50px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[80px] 
           `,children:[e.jsx("nav",{className:"mb-4 xs:mb-5 sm:mb-6",children:e.jsxs("ul",{itemScope:!0,itemType:"http://schema.org/BreadcrumbList",className:"flex items-center gap-1 xs:gap-2 text-xs xs:text-sm text-gray-400",children:[e.jsx("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem",className:"hover:text-gray-600 transition-colors",children:e.jsxs("a",{title:"Основной раздел",href:"/",children:[e.jsx("span",{itemProp:"name",children:"Главная"}),e.jsx("meta",{itemProp:"position",content:"0"}),e.jsx("meta",{itemProp:"item",content:"https://new.recensa.ru/"})]})}),e.jsx("span",{children:">"}),e.jsx("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem",className:"cursor-pointer",children:e.jsxs("a",{title:"Подраздел уровня 1",onClick:()=>c(),href:"/",children:[e.jsx("span",{itemProp:"name",children:"Новости"}),e.jsx("meta",{itemProp:"position",content:"1"}),e.jsx("meta",{itemProp:"item",content:"https://new.recensa.ru/"})]})}),e.jsx("span",{children:">"}),e.jsx("li",{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem",className:"hidden lg:inline",children:e.jsxs("a",{className:"pointer-events: none",title:"Подраздел уровня 2",children:[e.jsx("span",{itemProp:"name",children:t.title}),e.jsx("meta",{itemProp:"position",content:"1"}),e.jsx("meta",{itemProp:"item",content:`https://new.recensa.ru/news/${s(t.title)}`})]})})]})}),e.jsx("meta",{itemProp:"headline",content:"title"}),e.jsx("h2",{itemProp:"name",className:"text-lg xs:text-xl sm:text-2xl leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[30.6px] text-gray-400 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8",children:t.title}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsxs("div",{className:"w-full flex justify-center   md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1178px]",children:[e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"w-full",children:[e.jsx("meta",{itemProp:"url",content:`https://new.recensa.ru/${s(t.title)}`}),e.jsx("meta",{itemProp:"description",content:e.jsx("div",{dangerouslySetInnerHTML:{__html:t.text}})}),e.jsx("div",{itemProp:"image",itemScope:!0,itemType:"http://schema.org/ImageObject",className:"flex justify-center w-full",children:e.jsx("img",{style:{backgroundPosition:"center center",backgroundSize:"cover",objectFit:"cover"},itemProp:"url contentUrl",content:t.title,className:"w-[847px] h-[400px]",src:t.image,alt:t.title})}),e.jsx("meta",{itemProp:"datePublished",content:t.date.replaceAll("/",".")}),e.jsx("meta",{itemProp:"dateModified",content:t.date.replaceAll("/",".")}),e.jsx("meta",{itemProp:"inLanguage",content:"ru-RU"}),e.jsx("p",{className:"text-gray-900 text-sm xs:text-base block mt-4",children:t.date.replaceAll("/",".")}),e.jsx("div",{itemProp:"articleBody",className:"space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8",children:e.jsx("div",{className:"text-gray-900 text-sm xs:text-base space-y-4",dangerouslySetInnerHTML:{__html:t.text}})}),e.jsx("div",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"}),e.jsx("meta",{itemProp:"name",content:"Recensa"}),e.jsxs("div",{className:"hidden",itemProp:"publisher",itemScope:!0,itemType:"https://schema.org/Organization",children:[e.jsxs("div",{itemProp:"logo",itemScope:!0,itemType:"https://schema.org/ImageObject",children:[e.jsx("img",{itemProp:"url",src:"/logo.svg",alt:"Recensa"}),e.jsx("meta",{itemProp:"width",content:"200"}),e.jsx("meta",{itemProp:"height",content:"200"})]}),e.jsx("meta",{itemProp:"name",content:"Recensa"}),e.jsx("meta",{itemProp:"url",content:"https://new.recensa.ru/"})]})]})}),e.jsxs("div",{itemScope:"",itemType:"http://schema.org/Organization",children:[e.jsx("meta",{itemProp:"name",content:t.title}),e.jsx("meta",{itemProp:"description",content:"description"}),e.jsx("link",{itemProp:"url",href:"https://new.recensa.ru/"}),e.jsxs("div",{itemProp:"aggregateRating",itemScope:!0,itemType:"https://schema.org/AggregateRating",children:[e.jsx("meta",{itemProp:"worstRating",content:"1"}),e.jsx("meta",{itemProp:"bestRating",content:"5"}),e.jsx("meta",{itemProp:"ratingValue",content:"4.6"}),e.jsx("meta",{itemProp:"ratingCount",content:"8864"})]}),e.jsx("div",{itemProp:"review",itemType:"http://schema.org/Review",itemScope:"",children:e.jsxs("div",{itemProp:"author",itemType:"http://schema.org/Person",itemScope:"",children:[e.jsx("meta",{itemProp:"name",content:"Recensa"}),e.jsx("link",{itemProp:"url",href:`https://new.recensa.ru/${s(t.title)}`})]})})]})]})})]}),e.jsx(d,{})]}):e.jsx(e.Fragment,{children:"Новости нет"})}export{N as default};
