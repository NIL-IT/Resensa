const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jodit-react-B1tVti37.js","assets/react-vendor-D_QSeeZk.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { r as reactExports, j as jsxRuntimeExports, _ as __vitePreload } from "./three-vendor-CLIGOdvC.js";
import { I as Input } from "./Input-Dv76uNwO.js";
import { u as useDispatch, h as useLocation, m as changeShowAddNewItemPopup, n as createNews, o as getAllNews, p as createEquipment, q as getAllEquipment, r as createSolutions, t as getAllSolutions } from "./index-aArvgGxB.js";
import { I as ImageUploader } from "./ImageUploader-DAPtx20F.js";
import { c as config } from "./data-C21Hc6VP.js";
import "./react-vendor-D_QSeeZk.js";
const JoditEditor = reactExports.lazy(() => __vitePreload(() => import("./jodit-react-B1tVti37.js").then((n) => n.j), true ? __vite__mapDeps([0,1]) : void 0));
const AddNewItem = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);
  const isNews = +pathnameId === 4;
  const isSolutions = +pathnameId === 3;
  const [error, setError] = reactExports.useState("");
  const [formData, setFormData] = reactExports.useState(() => {
    if (isNews) {
      return {
        title: "",
        text: "",
        page_description: "",
        page_title: "",
        page_keywords: "",
        hidden_seo_text: ""
      };
    } else if (isSolutions) {
      return {
        name: "",
        description: "",
        sub_header: "",
        header: "",
        image_banner_alt: "",
        image_card_alt: "",
        page_description: "",
        page_title: "",
        page_keywords: "",
        extra_description: "",
        hidden_seo_text: ""
      };
    } else {
      return {
        name: "",
        description: "",
        min_param: "",
        max_param: "",
        sub_header: "",
        header: "",
        image_banner_alt: "",
        image_card_alt: "",
        page_description: "",
        page_title: "",
        page_keywords: "",
        extra_description: "",
        hidden_seo_text: ""
      };
    }
  });
  const [selectedFile, setSelectedFile] = reactExports.useState(null);
  const [selectedFileBanner, setSelectedFileBanner] = reactExports.useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), {
      [name]: value
    }));
  };
  const handleEditorChange = (name, content) => {
    setFormData((prevData) => __spreadProps(__spreadValues({}, prevData), {
      [name]: content
    }));
  };
  const handleSubmit = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    setError("");
    console.log(formData);
    try {
      if (isNews) {
        if (!formData.title || !formData.text || !selectedFile) {
          setError(
            "Пожалуйста, заполните все обязательные поля и загрузите изображение"
          );
          return;
        }
        const newsData = {
          title: formData.title,
          text: formData.text,
          news_photo: selectedFile,
          page_description: formData.page_description,
          page_title: formData.page_title,
          page_keywords: formData.page_keywords,
          hidden_seo_text: formData.hidden_seo_text
        };
        yield dispatch(createNews(newsData));
        yield dispatch(getAllNews());
        setFormData({ title: "", text: "" });
      } else if (+pathnameId === 2) {
        console.log(formData);
        if (!formData.name || !formData.description || !selectedFile || !selectedFileBanner || !formData.min_param || !formData.max_param || !formData.header || !formData.sub_header || !formData.extra_description) {
          setError(
            "Пожалуйста, заполните все обязательные поля и загрузите изображение"
          );
          return;
        }
        const equipmentData = {
          name: formData.name,
          description: formData.description,
          image_card: selectedFile,
          image_banner: selectedFileBanner,
          min_param: parseInt(formData.min_param),
          max_param: parseInt(formData.max_param),
          sub_header: formData.sub_header,
          header: formData.header,
          image_banner_alt: formData.image_banner_alt,
          image_card_alt: formData.image_card_alt,
          page_description: formData.page_description,
          page_title: formData.page_title,
          page_keywords: formData.page_keywords,
          extra_description: formData.extra_description,
          hidden_seo_text: formData.hidden_seo_text
        };
        yield dispatch(createEquipment(equipmentData)).unwrap();
        yield dispatch(getAllEquipment());
        setFormData({
          name: "",
          description: "",
          min_param: "",
          max_param: "",
          sub_header: "",
          header: "",
          image_banner_alt: "",
          image_card_alt: "",
          page_description: "",
          page_title: "",
          page_keywords: "",
          extra_description: "",
          hidden_seo_text: ""
        });
      } else if (+pathnameId === 3) {
        if (!formData.name || !formData.description || !selectedFile || !selectedFileBanner || !formData.header || !formData.sub_header || !formData.extra_description) {
          setError(
            "Пожалуйста, заполните все обязательные поля и загрузите изображение"
          );
          return;
        }
        const solutionData = {
          name: formData.name,
          description: formData.description,
          image_card: selectedFile,
          image_banner: selectedFileBanner,
          sub_header: formData.sub_header,
          header: formData.header,
          image_banner_alt: formData.image_banner_alt,
          image_card_alt: formData.image_card_alt,
          page_description: formData.page_description,
          page_title: formData.page_title,
          page_keywords: formData.page_keywords,
          extra_description: formData.extra_description,
          hidden_seo_text: formData.hidden_seo_text
        };
        yield dispatch(createSolutions(solutionData));
        yield dispatch(getAllSolutions());
        setFormData({
          name: "",
          description: "",
          sub_header: "",
          header: "",
          image_banner_alt: "",
          image_card_alt: "",
          page_description: "",
          page_title: "",
          page_keywords: "",
          extra_description: "",
          hidden_seo_text: ""
        });
      }
      setSelectedFile(null);
      dispatch(changeShowAddNewItemPopup(false));
    } catch (error2) {
      console.error("Failed to create item:", error2);
      const type = isNews ? "новость" : +pathnameId === 2 ? "оборудование" : "решение";
      alert(
        `Не удалось создать ${type}. Возможно вы уже добавляли фото с таким названием, переименуйте и попробуйте ещё раз`
      );
    }
  });
  const getTitle = (id) => {
    if (id == 2) return "Добавление нового обрудования";
    if (id == 3) return "Добавление нового решения";
    if (id == 4) return "Добавление новой новости";
  };
  const editor = reactExports.useRef(null);
  const textEditor = reactExports.useRef(null);
  const extraDescriptionEditor = reactExports.useRef(null);
  const headerEditor = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "fixed inset-0 flex items-center justify-center px-4 xs:px-5 \r\n    sm:px-6 md:px-7 lg:px-8",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] \r\n      lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 \r\n      rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full \r\n      max-w-[300px] xs:max-w-[350px] sm:max-w-[450px] md:max-w-[550px] \r\n      lg:max-w-[600px] xl:max-w-[663px] relative overflow-y-scroll  overflow-x-hidden max-h-[85%]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => dispatch(changeShowAddNewItemPopup(false)),
                className: "absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700",
                children: "✕"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-6", children: getTitle(pathnameId) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",
                children: [
                  !isNews && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-sm text-gray-900", children: "Изображение для баннера" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ImageUploader,
                      {
                        banner: true,
                        onFileSelect: setSelectedFileBanner
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-xs xs:text-sm text-gray-900", children: "Alt-тег для баннера" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "text",
                          name: "image_banner_alt",
                          className: "block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                          value: formData.image_banner_alt,
                          onChange: handleInputChange,
                          placeholder: "Описание изображения баннера"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-sm text-gray-900", children: "Изображение для карточки" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUploader, { onFileSelect: setSelectedFile }),
                    !isNews && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-xs xs:text-sm text-gray-900", children: "Alt-тег для карточки" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "text",
                          name: "image_card_alt",
                          className: "block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                          value: formData.image_card_alt,
                          onChange: handleInputChange,
                          placeholder: "Описание изображения карточки"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-xs xs:text-sm text-gray-900", children: "Название" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "text",
                        name: !isNews ? "name" : "title",
                        className: "block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                        value: !isNews ? formData.name : formData.title,
                        onChange: handleInputChange
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "message",
                      className: "block w-full text-xs xs:text-sm text-gray-900",
                      children: !isNews ? "Описание" : "Текст новости"
                    }
                  ),
                  isNews ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    reactExports.Suspense,
                    {
                      fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        JoditEditor,
                        {
                          ref: textEditor,
                          value: formData.text || "",
                          config,
                          onBlur: (newContent) => handleEditorChange("text", newContent)
                        }
                      )
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    reactExports.Suspense,
                    {
                      fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        JoditEditor,
                        {
                          ref: editor,
                          value: formData.description || "",
                          config,
                          onBlur: (newContent) => handleEditorChange("description", newContent)
                        }
                      )
                    }
                  ),
                  !isNews && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "message",
                          className: "block text-sm text-gray-900",
                          children: "Полное описание товара"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        reactExports.Suspense,
                        {
                          fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            JoditEditor,
                            {
                              ref: extraDescriptionEditor,
                              value: formData.extra_description || "",
                              config,
                              onBlur: (newContent) => handleEditorChange("extra_description", newContent)
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-xs xs:text-sm text-gray-900", children: "Заголовок баннера" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "text",
                          name: "sub_header",
                          className: "block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                          value: formData.sub_header,
                          onChange: handleInputChange
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "message",
                        className: "block w-full text-xs xs:text-sm text-gray-900",
                        children: "Текст баннера"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      reactExports.Suspense,
                      {
                        fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          JoditEditor,
                          {
                            ref: headerEditor,
                            value: formData.header || "",
                            config,
                            onBlur: (newContent) => handleEditorChange("header", newContent)
                          }
                        )
                      }
                    )
                  ] }),
                  +pathnameId === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full justify-between gap-4 pb-5 pt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[48%] space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "block w-full text-xs xs:text-sm text-gray-900", children: "От" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          required: true,
                          type: "number",
                          name: "min_param",
                          value: formData.min_param,
                          onChange: handleInputChange,
                          className: " block p-2 xs:p-2.5 w-[300px]\r\n                  text-sm xs:text-base text-gray-400 \r\n                  font-normal bg-gray-50 rounded-lg \r\n                  border \r\n                  border-gray-300"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[48%] space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "block w-full text-xs xs:text-sm text-gray-900", children: "До" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          required: true,
                          type: "number",
                          name: "max_param",
                          value: formData.max_param,
                          className: "block p-2 xs:p-2.5 w-full] \r\n                  text-sm xs:text-base text-gray-400 \r\n                  font-normal bg-gray-50 rounded-lg border\r\n                   border-gray-300",
                          onChange: handleInputChange
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-200 pt-4 space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "SEO информация" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-xs xs:text-sm text-gray-900", children: "Заголовок страницы (Title)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "text",
                          name: "page_title",
                          className: "block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                          value: formData.page_title,
                          onChange: handleInputChange,
                          placeholder: "Заголовок для SEO"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-xs xs:text-sm text-gray-900", children: "Описание страницы (Description)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          name: "page_description",
                          rows: "3",
                          onChange: handleInputChange,
                          className: "block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                          value: formData.page_description,
                          placeholder: "Краткое описание для поисковых систем"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-sm text-gray-900", children: "Текст для поисковых систем" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          name: "hidden_seo_text",
                          rows: "3",
                          onChange: handleInputChange,
                          className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                          value: formData.hidden_seo_text,
                          placeholder: "Этот текст предназначен для поисковых систем и не виден пользователям. "
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-xs xs:text-sm text-gray-900", children: "Ключевые слова (Keywords)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          type: "text",
                          name: "page_keywords",
                          className: "block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                          value: formData.page_keywords,
                          onChange: handleInputChange,
                          placeholder: "Ключевые слова через запятую"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium",
                      children: "Добавить"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
};
export {
  AddNewItem as default
};
