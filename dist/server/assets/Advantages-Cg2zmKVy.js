import{j as s,T as E}from"./index-zwEhfDX7.js";import{useState as o,useRef as i,useEffect as p}from"react";const d=[{title:"высокачественное оборудование",text:"Производим, учитывая специфику эксплуатационных требований<br/>и климатических условий.",img:"/icon/ad_1.svg"},{title:"комплексные решения",text:"Предлагаем решения, повышающие эффективность проектирования, эксплуатации и модернизации объектов.",img:"/icon/ad_2.svg"},{title:"инновации</br>и технологии",text:"Используя передовые технологии, разрабатываем оборудование, которое соответствует мировым стандартам энергоэффективности и надежности.",img:"/icon/ad_3.svg"},{title:"широкий выбор комплектующих",text:"Включая различные типы теплообменников, вентиляторов</br>и фильтров, что позволяет создавать решения для любых условий.",img:"/icon/ad_4.svg"},{title:"наши<br/>инженеры",text:"Помогут вым подобрать идеальное решение, учитывая ваши задачи, требования и условия эксплуатации",img:"/icon/ad_5.svg"},{title:"адаптация под ваши запросы",text:"Оборудование может быть адаптировано под ваши запросы, включая окрасуц</br>и конфигурацию.",img:"/icon/ad_6.svg"}];function A(){const[u,x]=o(!1),[g,h]=o(0),[f,b]=o(0),[a,r]=o(!0),t=i(null);i();const c=i(!0),v=e=>{x(!0),r(!1),t.current&&(h(e.pageX-t.current.offsetLeft),b(t.current.scrollLeft))},w=()=>{x(!1),r(!0)},N=()=>{x(!1),r(!0)},D=e=>{if(u&&(e.preventDefault(),t.current)){const l=(e.pageX-t.current.offsetLeft-g)*2;t.current.scrollLeft=f-l}},j=()=>{r(!1)},k=()=>{r(!0)};p(()=>{const e=t.current;if(!e)return;const n=new IntersectionObserver(m=>{c.current=m[0].isIntersecting},{threshold:.1});n.observe(e);let l;return a&&(l=setInterval(()=>{c.current&&e&&a&&(e.scrollLeft+=1,e.scrollLeft>=e.scrollWidth/2&&(e.scrollLeft=0))},33)),()=>{n.disconnect(),clearInterval(l)}},[a]),p(()=>{const e=()=>{r(!document.hidden)};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},[]);const C=[...d,...d];return s.jsxDEV("section",{className:"overflow-x-hidden w-full bg-gray-400 py-[40px] xs:py-[40px] sm:py-[40px] md:py-[40px] lg:py-[40px] xl:py-[40px] 2xl:py-[40px] ",children:[s.jsxDEV("div",{className:"container",children:s.jsxDEV(E,{text:"наши преимущества",className:"ml-5 xs:ml-0 text-white text-lg xs:text-lg sm:text-xl md:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[25px] xs:mb-[30px] sm:mb-[35px] md:mb-[40px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[50px]"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:135,columnNumber:9},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:134,columnNumber:7},this),s.jsxDEV("div",{ref:t,className:"flex gap-[40px] lg:gap-[45px] xl:gap-[50px] 2xl:gap-[53px] 3xl:gap-[57px] overflow-x-auto w-auto scrollbar-hide cursor-grab active:cursor-grabbing",onMouseDown:v,onMouseLeave:w,onMouseUp:N,onMouseMove:D,onTouchStart:j,onTouchEnd:k,style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:C.map(({title:e,text:n,subtitle:l,img:m},y)=>s.jsxDEV("article",{className:`min-w-[260px] xs:min-w-[270px] sm:min-w-[280px] md:min-w-[400px] lg:min-w-[420px] xl:min-w-[430px]\r
               2xl:min-w-[445px] 3xl:min-w-[485px] select-none space-y-2 sm:space-y-3`,children:[s.jsxDEV("div",{className:"max-w-[130px] max-h-[130px]",children:s.jsxDEV("img",{className:`w-[60px] h-[60px]\r
                  xs:w-[60px] sm:w-[60px] md:h-[60px] md:w-[60px] \r
                  lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px] 2xl:h-[90px] 2xl:w-[90px] 3xl:h-[100px] 3xl:w-[100px]`,src:m,alt:e,title:e},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:158,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:157,columnNumber:13},this),s.jsxDEV("div",{className:`min-h-[44px] sm:min-h-[48px] \r
               md:min-h-[56px] max-w-[180px] md:max-w-[200px] lg:max-w-[220px]`,children:s.jsxDEV("h3",{dangerouslySetInnerHTML:{__html:e},className:"text-base uppercase xs:text-base sm:text-lg md:text-xl text-white max-w-[260px] xs:max-w-[270px] sm:max-w-[280px] md:max-w-[300px]"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:171,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:167,columnNumber:13},this),s.jsxDEV("p",{dangerouslySetInnerHTML:{__html:n},className:"text-gray-100 text-sm xs:text-sm sm:text-base md:text-lg leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[25.5px] lg:leading-[26px] xl:leading-[26.5px] 2xl:leading-[27px] 3xl:leading-[27.5px] max-w-[330px] xs:max-w-[340px] sm:max-w-[350px] md:max-w-[370px]"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:176,columnNumber:13},this)]},y,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:152,columnNumber:11},this))},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:140,columnNumber:7},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/Advantages.jsx",lineNumber:133,columnNumber:5},this)}export{A};
