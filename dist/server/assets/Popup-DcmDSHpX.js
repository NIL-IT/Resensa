import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { I as Input } from "./Input-Fzfexiw9.js";
import { useDispatch, useSelector } from "react-redux";
import { c as changeShowPopup, s as submitOrder, a as changeItemId } from "../entry-server.js";
import "react-dom/server";
import "react-router";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "react-helmet-async";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "lucide-react";
const Popup = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const { equipmentById, solutionsById } = useSelector(({ user }) => user);
  let productName = equipmentById ? equipmentById == null ? void 0 : equipmentById.name : (solutionsById == null ? void 0 : solutionsById.name) || "Пользователь не указал наименование продукта";
  const [formData, setFormData] = useState({
    company_name: "",
    name: "",
    phone: "",
    email: "",
    privacy: false
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
      product_name: productName
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = formData;
      delete newData.privacy;
      await dispatch(submitOrder(newData));
      setIsOpen(false);
      setFormData({
        company_name: "",
        name: "",
        phone: "",
        email: "",
        privacy: false
      });
      dispatch(changeShowPopup(false));
      dispatch(changeItemId(null));
    } catch (err) {
      alert("Error", err.message);
    }
  };
  useEffect(() => {
    dispatch(changeShowPopup(isOpen));
  }, [isOpen]);
  return /* @__PURE__ */ jsx("article", { className: "fixed inset-0  flex items-center justify-center", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-white py-[25px] xs:py-[28px] \r\n      sm:py-[30px] md:py-[33px] lg:py-[35px] xl:py-[38px] \r\n      px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg \r\n      w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full \r\n      max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] \r\n      lg:max-w-[500px] xl:max-w-[563px] max-h-[500px]  \r\n      lg:max-h-[520px] xl:max-h-[553px] relative",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700",
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-6", children: "ОСТАВИТЬ ЗАЯВКУ" }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "space-y-[12px] xs:space-y-[14px] \r\n          sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]",
            children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "company_name",
                  placeholder: "Наименование компании",
                  value: formData.companyName,
                  onChange: handleInputChange
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "name",
                  placeholder: "Имя",
                  value: formData.name,
                  onChange: handleInputChange
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "tel",
                  name: "phone",
                  placeholder: "+7 (999) 999-99-99",
                  value: formData.phone,
                  onChange: handleInputChange
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "email",
                  name: "email",
                  placeholder: "example@mail.ru",
                  value: formData.email,
                  onChange: handleInputChange
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-1.5 xs:space-x-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: "privacy",
                    checked: formData.privacy,
                    onChange: handleInputChange,
                    className: "mt-0.5 xs:mt-1",
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "privacy",
                    className: "text-xs xs:text-sm text-gray-600",
                    children: "Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium",
                  children: "ОТПРАВИТЬ"
                }
              )
            ]
          }
        )
      ]
    }
  ) });
};
export {
  Popup as default
};
