import{u as e,a,c as t,j as s,s as x,b as m}from"./index-BUmeV-AY.js";import{useState as p,useEffect as l}from"react";import{I as n}from"./Input-CUPmMJ97.js";import"react-dom";const r=()=>{const r=e(),[c,o]=p(!0),{equipmentById:i,solutionsById:d}=a((({user:e})=>e));let h=i?i?.name:d?.name||"Пользователь не указал наименование продукта";const[y,g]=p({company_name:"",name:"",phone:"",email:"",privacy:!1});l((()=>{document.body.style.overflow="hidden"}),[]);const u=e=>{const{name:a,value:t,type:s,checked:x}=e.target;g((e=>({...e,[a]:"checkbox"===s?x:t,product_name:h})))};return l((()=>{r(t(c))}),[c]),s.jsx("article",{className:"fixed inset-0  flex items-center justify-center",children:s.jsxs("div",{className:"bg-white py-[25px] xs:py-[28px] \r\n      sm:py-[30px] md:py-[33px] lg:py-[35px] xl:py-[38px] \r\n      px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg \r\n      w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full \r\n      max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] \r\n      lg:max-w-[500px] xl:max-w-[563px] max-h-[500px]  \r\n      lg:max-h-[520px] xl:max-h-[553px] relative",children:[s.jsx("button",{onClick:()=>o(!1),className:"absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700",children:"✕"}),s.jsx("h2",{className:"text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-6",children:"ОСТАВИТЬ ЗАЯВКУ"}),s.jsxs("form",{onSubmit:async e=>{e.preventDefault();try{const e=y;delete e.privacy,await r(x(e)),o(!1),g({company_name:"",name:"",phone:"",email:"",privacy:!1}),r(t(!1)),r(m(null))}catch(a){alert("Error",a.message)}},className:"space-y-[12px] xs:space-y-[14px] \r\n          sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",children:[s.jsx(n,{type:"text",name:"company_name",placeholder:"Наименование компании",value:y.companyName,onChange:u}),s.jsx(n,{type:"text",name:"name",placeholder:"Имя",value:y.name,onChange:u}),s.jsx(n,{type:"tel",name:"phone",placeholder:"+7 (999) 999-99-99",value:y.phone,onChange:u}),s.jsx(n,{type:"email",name:"email",placeholder:"example@mail.ru",value:y.email,onChange:u}),s.jsxs("div",{className:"flex items-start space-x-1.5 xs:space-x-2",children:[s.jsx("input",{type:"checkbox",name:"privacy",checked:y.privacy,onChange:u,className:"mt-0.5 xs:mt-1",required:!0}),s.jsx("label",{htmlFor:"privacy",className:"text-xs xs:text-sm text-gray-600",children:"Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности"})]}),s.jsx("button",{type:"submit",className:"w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium",children:"ОТПРАВИТЬ"})]})]})})};export{r as default};
