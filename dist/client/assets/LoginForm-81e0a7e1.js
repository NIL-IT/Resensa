var b=Object.defineProperty,k=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var p=(r,s,o)=>s in r?b(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o,f=(r,s)=>{for(var o in s||(s={}))C.call(s,o)&&p(r,o,s[o]);if(d)for(var o of d(s))D.call(s,o)&&p(r,o,s[o]);return r},x=(r,s)=>k(r,j(s));var N=(r,s,o)=>new Promise((a,m)=>{var l=t=>{try{n(o.next(t))}catch(i){m(i)}},u=t=>{try{n(o.throw(t))}catch(i){m(i)}},n=t=>t.done?a(t.value):Promise.resolve(t.value).then(l,u);n((o=o.apply(r,s)).next())});import{u as v,E as y,a as F,F as c,z as g,j as e,L as E,a3 as h}from"./index-37edddac.js";import{b as L,a as w}from"./react-vendor-b1335c93.js";import"./three-vendor-4093d8f3.js";function S(){const r=v(),s=y(),{error:o}=F(n=>n.user),[a,m]=L.useState({username:"",password:""});w.useEffect(()=>{r(c(!1)),g.get("access_token")&&(r(c(!0)),s("/admin/1"))},[r,s]);const l=n=>{m(x(f({},a),{[n.target.name]:n.target.value}))},u=n=>N(this,null,function*(){n.preventDefault();try{const t=yield r(h(a));if(h.fulfilled.match(t)){const i=t.payload;g.set("access_token",i,{expires:1}),r(c(!0)),s("/admin/1")}}catch(t){console.error("Login failed:",t)}m({username:"",password:""})});return e.jsxDEV("article",{className:"w-screen h-screen",children:e.jsxDEV("div",{className:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8",children:[e.jsxDEV("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxDEV(E,{to:"/",children:e.jsxDEV("img",{className:"mx-auto h-10 w-auto",src:"/icon/logo.svg",alt:"Recensa",title:"Recensa"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:56,columnNumber:13},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:55,columnNumber:11},this),e.jsxDEV("h2",{className:"mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900",children:"Войти в аккаунт"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:63,columnNumber:11},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:54,columnNumber:9},this),e.jsxDEV("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:e.jsxDEV("form",{onSubmit:u,className:"space-y-6",children:[e.jsxDEV("div",{children:[e.jsxDEV("label",{htmlFor:"username",className:"block text-sm/6 font-medium text-gray-900",children:"Имя пользователя"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:71,columnNumber:15},this),e.jsxDEV("div",{className:"mt-2",children:e.jsxDEV("input",{type:"text",name:"username",id:"username",value:a.username,onChange:l,required:!0,className:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:78,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:77,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:70,columnNumber:13},this),e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"flex items-center justify-between",children:e.jsxDEV("label",{htmlFor:"password",className:"block text-sm/6 font-medium text-gray-900",children:"Пароль"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:92,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:91,columnNumber:15},this),e.jsxDEV("div",{className:"mt-2",children:e.jsxDEV("input",{type:"password",name:"password",id:"password",value:a.password,onChange:l,required:!0,className:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 sm:text-sm/6"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:100,columnNumber:17},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:99,columnNumber:15},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:90,columnNumber:13},this),o&&e.jsxDEV("div",{className:"text-red-500 text-sm text-center",children:o},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:113,columnNumber:15},this),e.jsxDEV("div",{children:e.jsxDEV("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors",children:"Войти"},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:117,columnNumber:15},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:116,columnNumber:13},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:69,columnNumber:11},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:68,columnNumber:9},this)]},void 0,!0,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:53,columnNumber:7},this)},void 0,!1,{fileName:"C:/Users/user/Desktop/Code/Work/resensa/src/components/pages/LoginForm.jsx",lineNumber:52,columnNumber:5},this)}export{S as default};
