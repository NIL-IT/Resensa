import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { I as Input } from "./Input-Fzfexiw9.js";
import { useDispatch, useSelector } from "react-redux";
import { f as changeEquipmentPopup, a as changeItemId, u as updateEquipment, h as updateSolutions, i as updateNews } from "../entry-server.js";
import { I as ImageUploader } from "./ImageUploader-eWXrU1kH.js";
import { useLocation } from "react-router-dom";
import { c as config } from "./data-C21Hc6VP.js";
import "react-dom/server";
import "react-router";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "react-helmet-async";
import "clsx";
const JoditEditor = lazy(() => import("jodit-react"));
const ChangeEquipmentPopup = () => {
  const dispatch = useDispatch();
  const { path, setPathname } = useState("");
  useEffect(() => {
    const { pathname } = useLocation();
    setPathname(pathname);
  }, []);
  const pathnameId = path.split("/").at(-1);
  const isNews = +pathnameId === 4;
  const isSolutions = +pathnameId === 3;
  document.body.style.overflowY = "hidden";
  const { itemId, equipment, solutions, news } = useSelector(
    ({ user }) => user
  );
  const itemsList = isNews ? news : isSolutions ? solutions : equipment;
  const findProduct = itemId ? itemsList == null ? void 0 : itemsList.find((item) => +item.id === +itemId) : null;
  const [formData, setFormData] = useState(() => {
    const baseData = isNews ? {
      title: (findProduct == null ? void 0 : findProduct.title) || "",
      text: (findProduct == null ? void 0 : findProduct.text) || "",
      page_description: (findProduct == null ? void 0 : findProduct.page_description) || "",
      page_title: (findProduct == null ? void 0 : findProduct.page_title) || "",
      page_keywords: (findProduct == null ? void 0 : findProduct.page_keywords) || "",
      hidden_seo_text: (findProduct == null ? void 0 : findProduct.hidden_seo_text) || ""
    } : isSolutions ? {
      name: (findProduct == null ? void 0 : findProduct.name) || "",
      description: (findProduct == null ? void 0 : findProduct.description) || "",
      sub_header: (findProduct == null ? void 0 : findProduct.sub_header) || "",
      header: (findProduct == null ? void 0 : findProduct.header) || "",
      image_banner_alt: (findProduct == null ? void 0 : findProduct.image_banner_alt) || "",
      image_card_alt: (findProduct == null ? void 0 : findProduct.image_card_alt) || "",
      page_description: (findProduct == null ? void 0 : findProduct.page_description) || "",
      page_title: (findProduct == null ? void 0 : findProduct.page_title) || "",
      page_keywords: (findProduct == null ? void 0 : findProduct.page_keywords) || "",
      extra_description: (findProduct == null ? void 0 : findProduct.extra_description) || "",
      hidden_seo_text: (findProduct == null ? void 0 : findProduct.hidden_seo_text) || ""
    } : {
      name: (findProduct == null ? void 0 : findProduct.name) || "",
      description: (findProduct == null ? void 0 : findProduct.description) || "",
      min_param: (findProduct == null ? void 0 : findProduct.min_param) || "",
      max_param: (findProduct == null ? void 0 : findProduct.max_param) || "",
      sub_header: (findProduct == null ? void 0 : findProduct.sub_header) || "",
      header: (findProduct == null ? void 0 : findProduct.header) || "",
      image_banner_alt: (findProduct == null ? void 0 : findProduct.image_banner_alt) || "",
      image_card_alt: (findProduct == null ? void 0 : findProduct.image_card_alt) || "",
      page_description: (findProduct == null ? void 0 : findProduct.page_description) || "",
      page_title: (findProduct == null ? void 0 : findProduct.page_title) || "",
      page_keywords: (findProduct == null ? void 0 : findProduct.page_keywords) || "",
      extra_description: (findProduct == null ? void 0 : findProduct.extra_description) || "",
      hidden_seo_text: (findProduct == null ? void 0 : findProduct.hidden_seo_text) || ""
    };
    if (findProduct == null ? void 0 : findProduct.image) {
      if (isNews) {
        baseData.news_photo = findProduct.image;
      } else if (isSolutions) {
        baseData.solution_photo = findProduct.image;
      } else {
        baseData.equipment_photo = findProduct.image;
      }
    }
    return baseData;
  });
  const handleEditorChange = (content, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: content
    }));
  };
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileBanner, setSelectedFileBanner] = useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const textEditorRef = useRef(null);
  const descriptionEditorRef = useRef(null);
  const extraDescriptionEditorRef = useRef(null);
  const headerEditorRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isNews) {
        const isEquipment = !isSolutions;
        if (isEquipment) {
          const equipmentData = {
            name: formData.name,
            description: formData.description,
            image_card: selectedFile,
            image_banner: selectedFileBanner,
            min_param: parseInt(formData.min_param),
            max_param: parseInt(formData.max_param),
            sub_header: formData == null ? void 0 : formData.sub_header,
            header: formData == null ? void 0 : formData.header,
            image_banner_alt: formData == null ? void 0 : formData.image_banner_alt,
            image_card_alt: formData == null ? void 0 : formData.image_card_alt,
            extra_description: formData == null ? void 0 : formData.extra_description,
            page_description: formData == null ? void 0 : formData.page_description,
            page_title: formData == null ? void 0 : formData.page_title,
            page_keywords: formData == null ? void 0 : formData.page_keywords,
            hidden_seo_text: formData == null ? void 0 : formData.hidden_seo_text
          };
          await dispatch(
            updateEquipment({ id: findProduct == null ? void 0 : findProduct.id, data: equipmentData })
          ).unwrap();
        } else if (isSolutions) {
          const solutionData = {
            name: formData.name,
            description: formData.description,
            image_card: selectedFile,
            image_banner: selectedFileBanner,
            sub_header: formData == null ? void 0 : formData.sub_header,
            header: formData == null ? void 0 : formData.header,
            image_banner_alt: formData == null ? void 0 : formData.image_banner_alt,
            image_card_alt: formData == null ? void 0 : formData.image_card_alt,
            page_description: formData == null ? void 0 : formData.page_description,
            page_title: formData == null ? void 0 : formData.page_title,
            page_keywords: formData == null ? void 0 : formData.page_keywords,
            extra_description: formData == null ? void 0 : formData.extra_description,
            hidden_seo_text: formData == null ? void 0 : formData.hidden_seo_text
          };
          await dispatch(
            updateSolutions({ id: findProduct == null ? void 0 : findProduct.id, data: solutionData })
          ).unwrap();
        }
      } else {
        const newsData = selectedFile ? {
          title: formData.title,
          text: formData.text,
          news_photo: selectedFile,
          page_description: formData.page_description,
          page_title: formData.page_title,
          page_keywords: formData.page_keywords,
          hidden_seo_text: formData.hidden_seo_text
        } : {
          title: formData.title,
          text: formData.text,
          page_description: formData.page_description,
          page_title: formData.page_title,
          page_keywords: formData.page_keywords,
          hidden_seo_text: formData.hidden_seo_text
        };
        await dispatch(
          updateNews({ id: findProduct == null ? void 0 : findProduct.id, data: newsData })
        ).unwrap();
      }
      dispatch(changeEquipmentPopup(false));
      dispatch(changeItemId(null));
    } catch (error) {
      alert(
        error.message || "Не удалось сохранить изменения. Возможно вы уже добавляли фотографию с таким названием, переименуйте и попробуйте снова."
      );
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "fixed inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-white  h-[80%] py-[38px] px-8 \r\n      rounded-lg w-full max-w-[663px]  overflow-y-scroll overflow-x-hidden  relative",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              dispatch(changeEquipmentPopup(false));
              dispatch(changeItemId(null));
            },
            className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-center text-[32px] font-medium leading-[40.8px] text-gray-400 mb-6", children: isNews ? "Изменить новость" : isSolutions ? "Изменить решения" : "Изменить оборудование" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-[18px]", children: [
          !isNews && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Изображение для баннера" }),
            /* @__PURE__ */ jsx(
              ImageUploader,
              {
                banner: true,
                newsBanner: isNews ? true : false,
                findProduct,
                onFileSelect: setSelectedFileBanner
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 mt-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Alt-тег для баннера" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "image_banner_alt",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.image_banner_alt,
                  onChange: handleInputChange,
                  placeholder: "Описание изображения баннера"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Изображение для карточки" }),
            /* @__PURE__ */ jsx(
              ImageUploader,
              {
                findProduct,
                onFileSelect: setSelectedFile
              }
            ),
            !isNews && /* @__PURE__ */ jsxs("div", { className: "space-y-2 mt-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Alt-тег для карточки" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "image_card_alt",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.image_card_alt,
                  onChange: handleInputChange,
                  placeholder: "Описание изображения карточки"
                }
              )
            ] })
          ] }),
          isNews && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Название" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "title",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.title,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "text",
                  className: "block text-sm font-medium text-gray-900",
                  children: "Текст новости"
                }
              ),
              /* @__PURE__ */ jsx(
                Suspense,
                {
                  fallback: /* @__PURE__ */ jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                  children: /* @__PURE__ */ jsx(
                    JoditEditor,
                    {
                      ref: textEditorRef,
                      value: formData.text,
                      config,
                      onBlur: (content) => handleEditorChange(content, "text")
                    }
                  )
                }
              )
            ] })
          ] }),
          !isNews && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Название" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "name",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.name,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "message",
                  className: "block text-sm text-gray-900",
                  children: "Описание"
                }
              ),
              /* @__PURE__ */ jsx(
                Suspense,
                {
                  fallback: /* @__PURE__ */ jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                  children: /* @__PURE__ */ jsx(
                    JoditEditor,
                    {
                      ref: descriptionEditorRef,
                      value: formData.description,
                      config,
                      onBlur: (content) => handleEditorChange(content, "description")
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "extra_description",
                  className: "block text-sm text-gray-900 pt-4",
                  children: "Полное описание товара"
                }
              ),
              /* @__PURE__ */ jsx(
                Suspense,
                {
                  fallback: /* @__PURE__ */ jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                  children: /* @__PURE__ */ jsx(
                    JoditEditor,
                    {
                      ref: extraDescriptionEditorRef,
                      value: formData.extra_description,
                      config,
                      onBlur: (content) => handleEditorChange(content, "extra_description")
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900 pt-4", children: "Заголовок баннера" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "sub_header",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.sub_header,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "message",
                  className: "block text-sm text-gray-900",
                  children: "Текст баннера"
                }
              ),
              /* @__PURE__ */ jsx(
                Suspense,
                {
                  fallback: /* @__PURE__ */ jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                  children: /* @__PURE__ */ jsx(
                    JoditEditor,
                    {
                      ref: headerEditorRef,
                      value: formData.header,
                      config,
                      onBlur: (content) => handleEditorChange(content, "header")
                    }
                  )
                }
              )
            ] })
          ] }),
          !isSolutions && !isNews && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900 pt-4", children: "Минимальный параметр" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "min_param",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.min_param,
                  onChange: handleInputChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Максимальный параметр" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "max_param",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.max_param,
                  onChange: handleInputChange
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-4 space-y-[18px]", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "SEO информация" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Заголовок страницы (Title)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "page_title",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.page_title,
                  onChange: handleInputChange,
                  placeholder: "Заголовок для SEO"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Описание страницы (Description)" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "page_description",
                  rows: "3",
                  onChange: handleInputChange,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.page_description,
                  placeholder: "Краткое описание для поисковых систем"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Текст для поисковых систем" }),
              /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Ключевые слова (Keywords)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "page_keywords",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.page_keywords,
                  onChange: handleInputChange,
                  placeholder: "Ключевые слова через запятую"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "w-full p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-lg font-medium",
              children: "ИЗМЕНИТЬ"
            }
          )
        ] })
      ]
    }
  ) });
};
export {
  ChangeEquipmentPopup as default
};
