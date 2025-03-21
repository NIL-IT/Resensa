import{j as x,x as e,u as t,B as s,c as p,T as l,L as m,y as a,h as n,z as r,b as i,A as o,H as c,R as d,F as g}from"./index-BzWKmBy6.js";import{useState as h,useEffect as b}from"react";import{A as j}from"./Advantages-BNBehLpP.js";import{I as w}from"./ItemsList-CtEQtaXh.js";import{s as u}from"./data-6c0gwsFc.js";import{S as f,P as y}from"./SliderPage-DrIExDst.js";import{O as N}from"./Objects-DPOat4-N.js";import"react-dom";import"@react-three/fiber";import"@react-three/drei";const v="/img/banner_main_placeholder.png",_="/img/banner_main.png";function P({text:t,className:s="",itemProp:p=""}){return x.jsx("h2",{itemProp:p,className:e("text-[48px] text-gray-400 uppercase",s),children:t})}function T({banner:e}){const l=t(),[m,a]=h(v);return b((()=>{const x=new Image;x.src=_,x.onload=()=>{a(_)}}),[]),x.jsxs("section",{className:"pl-5 xs:pl-0 container \r\n      pt-[40px] xs:pt-[45px] sm:pt-[50px] md:pt-[90px] lg:pt-[118px] xl:pt-[120px] 2xl:pt-[122px] 3xl:pt-[125px] \r\n    pb-[35px] xs:pb-[40px] sm:pb-[45px] md:pb-[75px] lg:pb-[102px] xl:pb-[105px] 2xl:pb-[108px] 3xl:pb-[110px]\r\n    ",children:[x.jsx(P,{className:"border-b border-gray-400 pb-[20px] xs:pb-[23px] sm:pb-[25px] md:pb-[28px] \r\n        lg:pb-[30px] xl:pb-[31px] 2xl:pb-[32px] 3xl:pb-[33px]\r\n        text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[48px] sm:leading-[40px] md:leading-[50px] lg:leading-[72px]",text:"производство и поставка вентиляционного оборудования высокого класса"}),x.jsxs("div",{className:"flex-center flex-col lg:flex-row justify-between mt-3 xs:mt-3.5 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 3xl:mt-4 gap-6 xs:gap-7 sm:gap-8 lg:gap-4",children:[x.jsxs("div",{className:"flex flex-wrap gap-6 xs:gap-7 sm:gap-8 md:gap-[60px] lg:gap-[70px] xl:gap-[75px] 2xl:gap-[80px] 3xl:gap-[88px]",children:[x.jsxs("div",{className:" xs:gap-5 block md:w-[290px] xl:w-[312px]",children:[x.jsx("span",{className:"text-[28px] xs:text-[30px] sm:text-[32px] md:text-[42px] lg:text-[44px] xl:text-[45px] 2xl:text-[46px] \r\n            3xl:text-[48px] text-gray-400 min-w-[auto] sm:min-w-[300px]",children:e.first_value||"22"}),x.jsx("p",{className:"text-base xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl\r\n             text-gray-300 xs:text-start text-left ",children:e.first_value_string||"года опыта на рынке\nвентиляционного оборудования"})]}),x.jsxs("div",{className:"block xs:gap-5  md:w-[280px] xl:w-[312px]",children:[x.jsx("span",{className:"text-[28px] xs:text-[30px] sm:text-[32px] \r\n            md:text-[42px] lg:text-[44px] xl:text-[45px] 2xl:text-[46px] \r\n            3xl:text-[48px] text-gray-400 xs:w-[34px] sm:w-[36px] md:w-[48px] lg:w-[50px] xl:w-[auto] min-w-[auto] sm:min-w-[300px]",children:e.second_value||"3"}),x.jsx("p",{className:"text-base xs:text-base sm:text-lg md:text-xl lg:text-xl\r\n             xl:text-xl 2xl:text-xl 3xl:text-xl text-gray-300 xs:text-start text-left",children:e.second_value_string||"года гарантии\nна продукцию компании."})]})]}),x.jsx("div",{className:"mr-5 xs:mr-0",children:x.jsx(s,{onClick:()=>l(p(!0)),className:" py-[16px] xs:py-[17px] sm:py-[18px] md:py-[26px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] px-4 xs:px-5 sm:px-6 md:pr-[26px] md:pl-6 w-full xs:w-full sm:w-full md:w-[332px] h-[56px] xs:h-[58px] sm:h-[60px] md:h-[76px] lg:h-[76px] xl:h-[76px] 2xl:h-[76px] 3xl:h-[76px] text-sm xs:text-sm sm:text-base",icon:!0,text:"Получить консультацию"})})]}),x.jsx("div",{className:"mr-5 xs:mr-0 flex justify-center",children:x.jsx("img",{className:(m===v?"loading":"loaded")+"\n          w-[80%] mt-[35px] xs:mt-[40px] sm:mt-[45px] md:mt-[75px] lg:mt-[85px] \n          xl:mt-[95px] 2xl:mt-[100px] 3xl:mt-[105px]\n          ",src:m,alt:"banner",title:"Banner"})})]})}function S({news:e}){t();const[p,n]=h(!0),[r,i]=h(e);b((()=>{i(e)}),[e]),b((()=>{i(p?r.slice(0,6):e)}),[p]);return r.length?x.jsxs("section",{itemScope:!0,itemType:"http://schema.org/Blog",className:"\n        container pt-[35px] md:pt-[40px] lg:pt-[50px] xl:pt-[60px] 2xl:pt-[70px] 3xl:pt-[80px] \n       "+(r.length,"pb-16"),children:[x.jsx(l,{itemProp:"description",text:"новости",className:"ml-5  xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10"}),x.jsx("div",{className:"flex justify-center  w-full",children:x.jsxs("div",{className:"w-full flex-center flex-col mx-auto justify-center   md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1178px]",children:[x.jsx("div",{className:"grid  grid-cols-1  lg:grid-cols-2  2xl:grid-cols-3 gap-8",children:r.map((e=>x.jsxs(m,{to:`/news/${a(e.title)}`,itemProp:"blogPosts",itemScope:!0,itemType:"http://schema.org/BlogPosting",onClick:()=>{e.id},className:"group flex flex-col  w-[300px] xs:w-[320px] sm:w-[340px] md:w-[350px] lg:w-[360px] xl:w-[365px] 2xl:w-[368px] 3xl:w-[370px] \r\n                h-[430px] xs:h-[455px] sm:h-[460px] md:h-[470px] lg:h-[490px] xl:h-[505px] 2xl:h-[510px] 3xl:h-[520px] \r\n                gradient \r\n                mb-[25px] xs:mb-[28px] sm:mb-[30px] md:mb-[32px] lg:mb-[34px] xl:mb-[35px] 2xl:mb-[36px] 3xl:mb-[37px] \r\n                px-[20px] xs:px-[22px] sm:px-[24px] md:px-[26px] lg:px-[27px] xl:px-[28px] 2xl:px-[28px] 3xl:px-[29px] \r\n                py-[15px] xs:py-[16px] sm:py-[17px] md:py-[18px] lg:py-[19px] xl:py-[19px] 2xl:py-[19px] 3xl:py-[20px] \r\n                cursor-pointer",children:[x.jsx("img",{itemProp:"image",className:"object-cover min-h-[250px] w-[260px] xs:min-h-[265px] xs:w-[275px] sm:min-h-[260px] sm:w-[290px] md:min-h-[260px] md:w-[300px] lg:min-h-[270px] lg:w-[310px] xl:h-[280px] xl:w-[315px] 2xl:min-h-[290px] 2xl:w-[318px]  3xl:min-w-[320px] ",src:e.image,alt:e.title,title:e.title}),x.jsxs("div",{className:" flex flex-col justify-between h-full pt-2",children:[x.jsxs("div",{children:[x.jsx("h3",{itemProp:"headline",className:"text-white  text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl leading-[22px] xs:leading-[23px] sm:leading-[24px] md:leading-[25px] lg:leading-[25.5px]",children:e.title}),x.jsx("meta",{itemProp:"datePublished",content:e.date.split("T")[0]}),x.jsx("meta",{itemProp:"description",content:`${e.text.replace(/<[^>]*>/g,"")}`}),x.jsx("meta",{itemProp:"author",content:"Resenca"}),x.jsxs("div",{itemProp:"publisher",itemScope:!0,itemType:"https://schema.org/Organization",className:"hidden",children:[x.jsx("div",{itemProp:"logo",itemScope:!0,itemType:"https://schema.org/ImageObject",children:x.jsx("img",{itemProp:"url image",src:"/logo.svg"})}),x.jsx("meta",{itemProp:"name",content:"Recensa"})]}),x.jsx("meta",{itemProp:"dateModified",content:`${e.date}`}),x.jsx("meta",{itemScope:!0,itemProp:"mainEntityOfPage",itemType:"https://schema.org/WebPage",itemID:"https://new.recensa.ru/"})]}),x.jsxs("div",{children:[x.jsx("div",{className:"pt-[10px] xs:pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] pb-3 xs:pb-3.5 sm:pb-4 md:pb-4.5 lg:pb-5",children:x.jsx("span",{className:"text-gray-800 text-sm xs:text-sm sm:text-base",children:e.date.split("T")[0]})}),x.jsxs("button",{className:"flex-center gap-3 group-hover:gap-4 transition-all",children:[x.jsx("span",{className:"text-white text-base xs:text-base sm:text-lg font-normal",children:"Читать"}),x.jsx("img",{src:"/icon/sm_arrow.svg",alt:"arrow",title:"Нажмите чтобы посмотреть новость"})]})]})]})]},e.id)))}),p&&e.length>6&&x.jsx("div",{className:"flex justify-center w-[300px] sm:w-[350px] lg:w-[756px] xl:w-[766px] 2xl:w-full",children:x.jsx(s,{onClick:()=>(n(!1),void i(e)),text:"смотреть все новости",className:"w-full py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] bg-white border border-gray-400 text-gray-400 text-sm xs:text-sm sm:text-base hover:bg-gray-50 hover:border-gray-200"})})]})})]}):x.jsx(x.Fragment,{})}function k({equipment:e,solutions:s,banner:p,news:l,company:m}){const{pathname:a}=n(),h="1"===r.get("news_nav"),v=t(),_=()=>{h?setTimeout((()=>{const x=document.querySelector("body").offsetWidth;let e;e=x>1600?2500:x>1280?2545:x>768?2927:x>640?3870:x>420?3897:x>375?3973:3900;let t=document.querySelector("body").offsetHeight-e;window.scrollTo({top:t,left:0,behavior:"smooth"}),r.set("news_nav","0",{expires:1})}),30):window.scrollTo({top:0,left:0})};return b((()=>{_(),v(i(null))}),[a]),document.body.style.overflowY="auto",x.jsxs(x.Fragment,{children:[x.jsx(o,{description:m.main_hidden_seo_text,title:m.main_page_title,url:"https://new.recensa.ru/"}),x.jsxs(c,{children:[x.jsx("title",{children:m.main_page_title}),x.jsx("meta",{name:"description",content:m.main_page_description}),x.jsx("meta",{property:"og:title",content:m.main_page_title}),x.jsx("meta",{property:"og:url",content:"https://new.recensa.ru/"}),x.jsx("meta",{name:"keywords",content:m.main_page_keywords}),x.jsx("link",{rel:"canonical",href:"https://new.recensa.ru/"})]}),x.jsxs("main",{children:[x.jsx(T,{banner:p}),x.jsx(j,{}),x.jsx(w,{equipment:!0,title:"Оборудование",list:e,href:d.EQUIPMENT}),x.jsx(w,{equipment:!1,list:s,href:d.SOLUTIONS}),x.jsx(f,{title:"о компании",subTitle:"Recensa: ваш стратегический партнер в реализации масштабных проектов.",text:m.about_unique_screen,slides:u}),x.jsx(S,{news:l}),x.jsx(y,{}),x.jsx(N,{})]}),x.jsx(g,{scrollTop:_})]})}export{k as default};
