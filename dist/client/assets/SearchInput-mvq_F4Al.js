import{j as e}from"./three-vendor-C8h5MOQY.js";import{R as h}from"./react-vendor-eEi3D7Xm.js";import{w as x}from"./index-D26IoUlj.js";function j({className:a,placeholder:s,type:o="text",handleSearch:c,iconLeft:r=!1,handleClose:n,closeIcon:i}){const[m,l]=h.useState(""),p=({target:{value:t}})=>{l(t),setTimeout(()=>{c(t)},200)},u=t=>{t.preventDefault()};return e.jsxs("form",{itemProp:"potentialAction",itemScope:!0,itemType:"https://schema.org/SearchAction",className:x("w-full h-[35px] border border-gray-400 border-b-0 p-[9px] flex-center gap-2",a),onSubmit:u,children:[r&&e.jsx("img",{src:"/icon/search.svg",alt:"search"}),e.jsx("meta",{itemProp:"target"}),e.jsx("input",{itemProp:"query-input",placeholder:s,className:"w-full placeholder:text-gray-150",type:o,value:m,onChange:p}),i&&e.jsx("button",{onClick:()=>n(),className:" text-gray-500  hover:text-gray-700",children:"✕"}),!r&&e.jsx("img",{src:"/icon/search.svg",alt:"search"})]})}export{j as S};
