import{u as b,a as h,d as N,j as e}from"./index-a18ae0b1.js";import{useState as p,useEffect as a}from"react";import"react-dom";function D({orders:n}){const m=b(),{orderNum:o}=h(({user:r})=>r),[u,i]=p(!0),[s,x]=p(null),[t,c]=p(n);document.body.style.overflowY="hidden",a(()=>{t&&t.length>0&&o&&x(t.find(r=>+r.number==+o))},[c,t]),a(()=>{m(N(u))},[u]);const d=r=>{const l=r.toLowerCase();return l=="отменен"?"bg-red":l=="доставлен"?"bg-green":l=="оплачен"?"bg-blue":"bg-gray-400"};return e.jsxDEV("section",{className:"max-w-[100vw] max-h-[100vh] fixed inset-0  z-50 flex items-center justify-center",children:e.jsxDEV("div",{className:`bg-white py-[38px] px-8 rounded-lg xl:min-h-[200px] xl:h-[auto]  \r
         w-[80%] xl:max-w-[800px] lg:max-h-[553px] flex flex-col justify-normal xl:justify-center relative`,children:[e.jsxDEV("button",{onClick:()=>i(!1),className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700",children:"✕"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:37,columnNumber:9},this),e.jsxDEV("h2",{className:"text-center text-lg lg:text-xl font-medium leading-8 lg:leading-[40.8px] text-gray-400 mb-6 uppercase",children:"вы можете проверить статус своего заказа"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:43,columnNumber:9},this),s?e.jsxDEV("div",{className:"flex justify-center",children:e.jsxDEV("table",{className:" xl:w-[80%] ",children:[e.jsxDEV("thead",{className:`border-0 xl:border-b border-gray-400 relative  \r
              :max-w-[400px]`,children:e.jsxDEV("tr",{className:`flex xl:*:min-w-[113px]  flex-col font-normal text-base text-gray-400 *:py-4  xl:flex xl:flex-row justify-between \r
                 w-[280px] sm:w-[300px] md:w-[350px] xl:w-[600px] px-2`,children:[e.jsxDEV("th",{className:"text-left xl:text-center  border-b xl:border-b-0 border-b-gray-400 ",children:"Номер"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:57,columnNumber:19},this),e.jsxDEV("th",{className:"text-left xl:text-center     border-b xl:border-b-0 border-b-gray-400",children:"Дата"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:60,columnNumber:19},this),e.jsxDEV("th",{className:"text-left xl:text-center       border-b xl:border-b-0 border-b-gray-400",children:"Статус"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:63,columnNumber:19},this),e.jsxDEV("th",{className:"text-left xl:text-center     border-b xl:border-b-0 border-b-gray-400",children:"Сумма"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:66,columnNumber:19},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:53,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:49,columnNumber:15},this),e.jsxDEV("tbody",{children:e.jsxDEV("tr",{className:"*:py-4 xl:*:min-w-[113px]   flex flex-col left-[-2vw] top-[132px] sm:left-[5vw] sm:top-[132px] md:top-[105px] md:left-[22vw] text-right xl:text-left absolute xl:static  xl:flex-row justify-between w-[300px]  xl:w-[600px] px-2",children:[e.jsxDEV("td",{className:"xl:text-center  text-sm text-gray-400 pl-[5px]",children:s.number},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:73,columnNumber:19},this),e.jsxDEV("td",{className:"xl:text-center  text-sm text-gray-400 ",children:s.date},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:76,columnNumber:19},this),e.jsxDEV("td",{className:" xl:text-center  mt-[4px] xl:mt-0  ",children:e.jsxDEV("p",{className:"  inline-flex items-center justify-center gap-2 xl:px-2  rounded-full text-gray-400",children:[e.jsxDEV("p",{className:`w-1.5 h-1.5 rounded-full ${d(s.state)}`},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:83,columnNumber:23},this),s.state]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:80,columnNumber:21},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:79,columnNumber:19},this),e.jsxDEV("td",{className:"xl:text-center text-sm text-gray-400  mt-[3px] xl:mt-0",children:[s.order_amount," ₽"]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:91,columnNumber:19},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:72,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:71,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:48,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:47,columnNumber:11},this):e.jsxDEV("div",{className:"text-center text-sm text-gray-400",children:e.jsxDEV("p",{children:["Заказ с номером ",o," не найден"]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:100,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:99,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:33,columnNumber:7},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/shared/popup/StatusPopup.jsx",lineNumber:32,columnNumber:5},this)}export{D as default};
