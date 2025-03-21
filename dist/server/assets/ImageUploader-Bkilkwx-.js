import { a as useSelector, h as useLocation, j as jsxRuntimeExports } from "./index-D-mRqp05.js";
import { useState, useRef } from "react";
const ImageUploader = ({ onFileSelect, findProduct, banner = false }) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const { itemId, addNewItemPopup, news, solutions, equipment } = useSelector(
    ({ user }) => user
  );
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);
  let product = findProduct;
  let isNews = +pathnameId === 4;
  let isSolutions = +pathnameId === 3;
  if (!findProduct) {
    const itemsList = isNews ? news : isSolutions ? solutions : equipment;
    product = itemsList?.find((item) => +item.id === +itemId);
  }
  const [previewUrl, setPreviewUrl] = useState(
    isNews ? product?.image : banner ? product?.image_banner : product?.image_card || null
  );
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };
  const handleFile = (file) => {
    if (["image/svg+xml", "image/png", "image/jpeg"].includes(file.type)) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      if (onFileSelect) {
        onFileSelect(file);
      }
      setError("");
    } else {
      setError("Пожалуйста, загрузите PNG, или JPEG файл.");
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  const onButtonClick = () => {
    inputRef.current?.click();
  };
  const removeImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setError("");
    if (onFileSelect) {
      onFileSelect(null);
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mx-auto", children: [
    previewUrl && !addNewItemPopup && product ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 mt-2 border-2 border-dashed rounded-lg text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: previewUrl,
          alt: "Текущее изображение",
          className: "max-h-[200px] mx-auto rounded-lg"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            removeImage();
          },
          className: "absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900",
          children: "×"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `relative p-8 mt-2 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
            ${dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`,
        onDragEnter: handleDrag,
        onDragLeave: handleDrag,
        onDragOver: handleDrag,
        onDrop: handleDrop,
        onClick: onButtonClick,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: inputRef,
              type: "file",
              accept: ".svg,.png,.jpg,.jpeg",
              onChange: handleChange,
              className: "hidden"
            }
          ),
          previewUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: previewUrl,
                alt: "Предпросмотр",
                className: "max-h-[200px] mx-auto rounded-lg"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeImage();
                },
                className: "absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900",
                children: "×"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Нажмите, чтобы загрузить" }),
              " ",
              "или перетащите"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
              "PNG, JPG",
              " ",
              isNews ? "(Рекомендуемое разрешение 847 x 300 px)" : banner ? "(Рекомендуемое разрешение 1920 x 900 px)" : "(Рекомендуемое разрешение 320 x 320 px)"
            ] })
          ] })
        ]
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-red-500 text-sm", children: error })
  ] });
};
export {
  ImageUploader as I
};
