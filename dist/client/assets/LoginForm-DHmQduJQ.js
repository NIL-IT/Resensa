var j=Object.defineProperty,w=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var x=(a,s,t)=>s in a?j(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,f=(a,s)=>{for(var t in s||(s={}))v.call(s,t)&&x(a,t,s[t]);if(d)for(var t of d(s))N.call(s,t)&&x(a,t,s[t]);return a},h=(a,s)=>w(a,b(s));var p=(a,s,t)=>new Promise((l,r)=>{var c=o=>{try{n(t.next(o))}catch(i){r(i)}},m=o=>{try{n(t.throw(o))}catch(i){r(i)}},n=o=>o.done?l(o.value):Promise.resolve(o.value).then(c,m);n((t=t.apply(a,s)).next())});import{a as k,r as F,j as e}from"./three-vendor-BeAgAJS5.js";import{u as E,E as L,a as R,F as u,y as g,L as S,a3 as y}from"./index-IrHHwbVL.js";import"./react-vendor-DomL0yj5.js";function _(){const a=E(),s=L(),{error:t}=R(n=>n.user),[l,r]=k.useState({username:"",password:""});F.useEffect(()=>{a(u(!1)),g.get("access_token")&&(a(u(!0)),s("/admin/1"))},[a,s]);const c=n=>{r(h(f({},l),{[n.target.name]:n.target.value}))},m=n=>p(this,null,function*(){n.preventDefault();try{const o=yield a(y(l));if(y.fulfilled.match(o)){const i=o.payload;g.set("access_token",i,{expires:1}),a(u(!0)),s("/admin/1")}}catch(o){console.error("Login failed:",o)}r({username:"",password:""})});return e.jsx("article",{className:"w-screen h-screen",children:e.jsxs("div",{className:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsx(S,{to:"/",children:e.jsx("img",{className:"mx-auto h-10 w-auto",src:"/icon/logo.svg",alt:"Recensa",title:"Recensa"})}),e.jsx("h2",{className:"mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900",children:"Войти в аккаунт"})]}),e.jsx("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:e.jsxs("form",{onSubmit:m,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"username",className:"block text-sm/6 font-medium text-gray-900",children:"Имя пользователя"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"text",name:"username",id:"username",value:l.username,onChange:c,required:!0,className:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("label",{htmlFor:"password",className:"block text-sm/6 font-medium text-gray-900",children:"Пароль"})}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{type:"password",name:"password",id:"password",value:l.password,onChange:c,required:!0,className:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 sm:text-sm/6"})})]}),t&&e.jsx("div",{className:"text-red-500 text-sm text-center",children:t}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors",children:"Войти"})})]})})]})})}export{_ as default};
