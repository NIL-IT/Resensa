var c=(l,a,s)=>new Promise((p,m)=>{var i=t=>{try{x(s.next(t))}catch(r){m(r)}},n=t=>{try{x(s.throw(t))}catch(r){m(r)}},x=t=>t.done?p(t.value):Promise.resolve(t.value).then(i,n);x((s=s.apply(l,a)).next())});import{j as e}from"./three-vendor-CsCe7JNW.js";import{L as o}from"./index-B2qzKf7k.js";import{c as h,L as g,P as d,N as f}from"./index-12U_mSTH.js";import{B as u}from"./Button-BoKOcmEm.js";import{u as j,a as y}from"./react-redux-ViurNiLh.js";import{b as w}from"./index-Dc3QFRw6.js";const b={а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"zh",з:"z",и:"i",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",А:"A",Б:"B",В:"V",Г:"G",Д:"D",Е:"E",Ё:"E",Ж:"Zh",З:"Z",И:"I",Й:"Y",К:"K",Л:"L",М:"M",Н:"N",О:"O",П:"P",Р:"R",С:"S",Т:"T",У:"U",Ф:"F",Х:"Kh",Ц:"Ts",Ч:"Ch",Ш:"Sh",Щ:"Shch",Ъ:"",Ы:"Y",Ь:"",Э:"E",Ю:"Yu",Я:"Ya"};function v(l){return l.split("").map(a=>b[a]||a).join("").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}const N=[{name:"Главная",path:"/"},{name:"Оборудование",path:"/equipment"},{name:"Решения",path:"/solutions"},{name:"О компании",path:"/about"},{name:"Заказы",path:"/admin/1"},{name:"Контакты",path:"/contact"}];function Y({scrollTop:l=null}){const a=j(),s=w(),{isAdmin:p,equipment:m}=y(({user:x})=>x),i=x=>a(h(x)),n=(x,t)=>c(this,null,function*(){if(!p&&+x==4)return yield a(g(!0)),a(d(m[0])),a(f(null)),s(`/equipment/${v(m[0].name)}`);p||(s(t),l&&l(),a(x===4?g(!0):g(!1)))});return e.jsxs("footer",{className:"pl-5 xs:pl-0 container py-[51px] xs:py-[56px] sm:py-[60px] md:py-[70px] lg:py-[75px] xl:py-[80px] 2xl:py-[82px] 3xl:py-[85px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 relative",children:[e.jsxs("span",{itemScope:!0,itemType:"https://schema.org/WPFooter",className:"hidden",children:[e.jsx("meta",{itemProp:"copyrightYear",content:"2025"}),e.jsx("meta",{itemProp:"copyrightHolder",content:"Recensa"})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-5 lg:gap-20",children:[e.jsxs("div",{children:[e.jsx("div",{onClick:()=>{l&&l()},className:"cursor-pointer",children:e.jsx(o,{to:"/",target:p?"_blank":"_self",className:"max-w-[200px] xs:max-w-[210px] sm:max-w-[220px] md:max-w-[230px] lg:max-w-[240px] xl:max-w-[245px] 2xl:max-w-[247px] 3xl:max-w-[249px] max-h-[35px] xs:max-h-[36px] sm:max-h-[38px] md:max-h-[39px] lg:max-h-[40px] xl:max-h-[41px] 2xl:max-h-[41px] 3xl:max-h-[42px] mb-3 xs:mb-3.5 sm:mb-4 md:mb-4.5 lg:mb-5",children:e.jsx("img",{src:"/icon/logo.svg",alt:"Логотип",title:"Нажмите, чтобы вернуться на главную страницу"})})}),e.jsx("h5",{className:"text-gray-900 text-sm xs:text-sm sm:text-base",children:"copyright"})]}),e.jsx("div",{className:"order-3 lg:order-2",children:e.jsx("nav",{className:"flex flex-col sm:flex-row gap-8 xs:gap-10 sm:gap-[40px] md:gap-[45px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[56px] 3xl:gap-[58px]",children:e.jsx("menu",{itemScope:!0,itemType:"http://schema.org/SiteNavigationElement",className:"flex flex-col gap-3 xs:gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-5 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl",children:N.map(({name:x,path:t},r)=>e.jsx("li",{className:`text-gray-400 hover:text-gray-300 cursor-pointer ${p&&r===4&&"hidden"}`,onClick:()=>n(r,t),children:p?e.jsx(o,{target:"_blank",to:`https://new.recensa.ru${t}`,itemProp:"url",children:x}):e.jsx(o,{itemProp:"url",children:x})},r))})})})]}),e.jsxs("article",{className:"flex flex-col gap-[15px] xs:gap-[18px] sm:gap-[20px] md:gap-[22px] lg:gap-[24px] xl:gap-[25px] 2xl:gap-[25px] 3xl:gap-[26px] order-2 lg:order-3",children:[e.jsxs("div",{className:"flex flex-col lg:justify-end *:flex *:lg:justify-end text-gray-400 text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-normal",children:[e.jsx("p",{children:"Адрес"}),e.jsx("a",{target:"_blank",href:"mailto:office@recensa.ru",children:"office@recensa.ru"}),e.jsx("a",{target:"_blank",href:"tel:+73832092088",children:"+7 383 209 20 88"})]}),e.jsxs("div",{className:"flex gap-[10px] lg:justify-end",children:[e.jsx("a",{href:"#",children:e.jsx("img",{src:"/icon/telegram.svg",alt:"telegram",title:"Телеграмм"})}),e.jsx("a",{href:"#",children:e.jsx("img",{src:"/icon/wa.svg",alt:"whatsapp",title:"Ватсап"})})]}),e.jsx(u,{noLink:!0,onClick:()=>i(!0),text:"заказать звонок",className:"bg-white border border-gray-400 text-gray-400 text-xs font-normal py-2.5 xs:py-2.5 sm:py-3 px-[20px] xs:px-[22px] sm:px-[25px] md:px-[27px] lg:px-[30px] flex lg:justify-end hover:border-gray-200 hover:bg-gray-50 w-fit lg:w-auto lg:ml-auto"})]}),e.jsx("div",{className:"absolute bottom-3 xs:bottom-3.5 sm:bottom-4 md:bottom-4.5 lg:bottom-5 right-0 w-[120px] xs:w-[130px] sm:w-[140px] md:w-[145px] lg:w-[150px] xl:w-[153px] 2xl:w-[154px] 3xl:w-[156px] h-[20px] xs:h-[22px] sm:h-[24px] md:h-[25px] lg:h-[26px] xl:h-[26px] 2xl:h-[26px] 3xl:h-[27px]",children:e.jsx("img",{src:"/img/nil.png",alt:"nill",title:"Компания разработающая сайт"})})]})}export{Y as F,v as u};
