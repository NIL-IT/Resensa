import{r as o,j as t}from"./three-vendor-D76XtHXd.js";import{a as I,h as E}from"./index-Dg4eWNDb.js";const O=({onFileSelect:s,findProduct:d,banner:p=!1})=>{const[b,m]=o.useState(!1),[u,l]=o.useState(""),n=o.useRef(null),{itemId:j,addNewItemPopup:y,news:N,solutions:D,equipment:w}=I(({user:e})=>e),{pathname:P}=E(),x=P.split("/").at(-1);let r=d,i=+x==4,R=+x==3;if(!d){const e=i?N:R?D:w;r=e==null?void 0:e.find(g=>+g.id==+j)}const[a,f]=o.useState(i?r==null?void 0:r.image:p?r==null?void 0:r.image_banner:(r==null?void 0:r.image_card)||null),c=e=>{e.preventDefault(),e.stopPropagation(),m(e.type==="dragenter"||e.type==="dragover")},h=e=>{if(["image/svg+xml","image/png","image/jpeg"].includes(e.type)){const g=URL.createObjectURL(e);f(g),s&&s(e),l("")}else l("Пожалуйста, загрузите PNG, или JPEG файл.")},U=e=>{e.preventDefault(),e.stopPropagation(),m(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&h(e.dataTransfer.files[0])},k=e=>{e.preventDefault(),e.target.files&&e.target.files[0]&&h(e.target.files[0])},C=()=>{var e;(e=n.current)==null||e.click()},v=()=>{a&&URL.revokeObjectURL(a),f(null),l(""),s&&s(null),n.current&&(n.current.value="")};return t.jsxs("div",{className:"w-full mx-auto",children:[a&&!y&&r?t.jsxs("div",{className:"relative p-8 mt-2 border-2 border-dashed rounded-lg text-center",children:[t.jsx("img",{src:a,alt:"Текущее изображение",className:"max-h-[200px] mx-auto rounded-lg"}),t.jsx("button",{type:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),v()},className:"absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900",children:"×"})]}):t.jsxs("div",{className:`relative p-8 mt-2 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
            ${b?"border-blue-400 bg-blue-50":"border-gray-300 hover:border-gray-400"}`,onDragEnter:c,onDragLeave:c,onDragOver:c,onDrop:U,onClick:C,children:[t.jsx("input",{ref:n,type:"file",accept:".svg,.png,.jpg,.jpeg",onChange:k,className:"hidden"}),a?t.jsxs(t.Fragment,{children:[t.jsx("img",{src:a,alt:"Предпросмотр",className:"max-h-[200px] mx-auto rounded-lg"}),t.jsx("button",{type:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),v()},className:"absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900",children:"×"})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"mb-2 text-sm text-gray-500",children:[t.jsx("span",{className:"font-semibold",children:"Нажмите, чтобы загрузить"})," ","или перетащите"]}),t.jsxs("p",{className:"text-xs text-gray-500",children:["PNG, JPG"," ",i?"(Рекомендуемое разрешение 847 x 300 px)":p?"(Рекомендуемое разрешение 1920 x 900 px)":"(Рекомендуемое разрешение 320 x 320 px)"]})]})]}),u&&t.jsx("p",{className:"mt-2 text-red-500 text-sm",children:u})]})};export{O as I};
