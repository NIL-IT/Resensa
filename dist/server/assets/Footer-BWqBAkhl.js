var h=(s,l,a)=>new Promise((p,i)=>{var n=x=>{try{t(a.next(x))}catch(m){i(m)}},o=x=>{try{t(a.throw(x))}catch(m){i(m)}},t=x=>x.done?p(x.value):Promise.resolve(x.value).then(n,o);t((a=a.apply(s,l)).next())});import{jsxs as r,jsx as e}from"react/jsx-runtime";import"react";import{useNavigate as d,Link as g}from"react-router-dom";import"js-cookie";import{B as f,c as u,O as c,V as y,Q as w,t as b}from"../entry-server.js";import{useDispatch as v,useSelector as N}from"react-redux";const k=[{name:"Главная",path:"/"},{name:"Оборудование",path:"/equipment"},{name:"Решения",path:"/solutions"},{name:"О компании",path:"/about"},{name:"Заказы",path:"/admin/1"},{name:"Контакты",path:"/contact"}];function F({scrollTop:s=null}){const l=v(),a=d(),{isAdmin:p,equipment:i}=N(({user:t})=>t),n=t=>l(u(t)),o=(t,x)=>h(this,null,function*(){if(!p&&+t==4)return yield l(c(!0)),l(y(i[0])),l(w(null)),a(`/equipment/${b(i[0].name)}`);p||(a(x),s&&s(),l(t===4?c(!0):c(!1)))});return r("footer",{className:"pl-5 xs:pl-0 container py-[51px] xs:py-[56px] sm:py-[60px] md:py-[70px] lg:py-[75px] xl:py-[80px] 2xl:py-[82px] 3xl:py-[85px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 relative",children:[r("span",{itemScope:!0,itemType:"https://schema.org/WPFooter",className:"hidden",children:[e("meta",{itemProp:"copyrightYear",content:"2025"}),e("meta",{itemProp:"copyrightHolder",content:"Recensa"})]}),r("div",{className:"flex flex-col lg:flex-row gap-5 lg:gap-20",children:[r("div",{children:[e("div",{onClick:()=>{s&&s()},className:"cursor-pointer",children:e(g,{to:"/",target:p?"_blank":"_self",className:"max-w-[200px] xs:max-w-[210px] sm:max-w-[220px] md:max-w-[230px] lg:max-w-[240px] xl:max-w-[245px] 2xl:max-w-[247px] 3xl:max-w-[249px] max-h-[35px] xs:max-h-[36px] sm:max-h-[38px] md:max-h-[39px] lg:max-h-[40px] xl:max-h-[41px] 2xl:max-h-[41px] 3xl:max-h-[42px] mb-3 xs:mb-3.5 sm:mb-4 md:mb-4.5 lg:mb-5",children:e("img",{src:"/icon/logo.svg",alt:"Логотип",title:"Нажмите, чтобы вернуться на главную страницу"})})}),e("h5",{className:"text-gray-900 text-sm xs:text-sm sm:text-base",children:"copyright"})]}),e("div",{className:"order-3 lg:order-2",children:e("nav",{className:"flex flex-col sm:flex-row gap-8 xs:gap-10 sm:gap-[40px] md:gap-[45px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[56px] 3xl:gap-[58px]",children:e("menu",{itemScope:!0,itemType:"http://schema.org/SiteNavigationElement",className:"flex flex-col gap-3 xs:gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-5 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl",children:k.map(({name:t,path:x},m)=>e("li",{className:`text-gray-400 hover:text-gray-300 cursor-pointer ${p&&m===4&&"hidden"}`,onClick:()=>o(m,x),children:p?e(g,{target:"_blank",to:`https://new.recensa.ru${x}`,itemProp:"url",children:t}):e(g,{itemProp:"url",children:t})},m))})})})]}),r("article",{className:"flex flex-col gap-[15px] xs:gap-[18px] sm:gap-[20px] md:gap-[22px] lg:gap-[24px] xl:gap-[25px] 2xl:gap-[25px] 3xl:gap-[26px] order-2 lg:order-3",children:[r("div",{className:"flex flex-col lg:justify-end *:flex *:lg:justify-end text-gray-400 text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-normal",children:[e("p",{children:"Адрес"}),e("a",{target:"_blank",href:"mailto:office@recensa.ru",children:"office@recensa.ru"}),e("a",{target:"_blank",href:"tel:+73832092088",children:"+7 383 209 20 88"})]}),r("div",{className:"flex gap-[10px] lg:justify-end",children:[e("a",{href:"#",children:e("img",{src:"/icon/telegram.svg",alt:"telegram",title:"Телеграмм"})}),e("a",{href:"#",children:e("img",{src:"/icon/wa.svg",alt:"whatsapp",title:"Ватсап"})})]}),e(f,{noLink:!0,onClick:()=>n(!0),text:"заказать звонок",className:"bg-white border border-gray-400 text-gray-400 text-xs font-normal py-2.5 xs:py-2.5 sm:py-3 px-[20px] xs:px-[22px] sm:px-[25px] md:px-[27px] lg:px-[30px] flex lg:justify-end hover:border-gray-200 hover:bg-gray-50 w-fit lg:w-auto lg:ml-auto"})]}),e("div",{className:"absolute bottom-3 xs:bottom-3.5 sm:bottom-4 md:bottom-4.5 lg:bottom-5 right-0 w-[120px] xs:w-[130px] sm:w-[140px] md:w-[145px] lg:w-[150px] xl:w-[153px] 2xl:w-[154px] 3xl:w-[156px] h-[20px] xs:h-[22px] sm:h-[24px] md:h-[25px] lg:h-[26px] xl:h-[26px] 2xl:h-[26px] 3xl:h-[27px]",children:e("img",{src:"/img/nil.png",alt:"nill",title:"Компания разработающая сайт"})})]})}export{F};
