import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { d as changeAddOrderPopup, g as getAllOrders, S as Select, e as createOrders } from "../entry-server.js";
import { I as Input } from "./Input-Fzfexiw9.js";
import "react-dom/server";
import "react-router-dom";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "react-helmet-async";
import "clsx";
import "tailwind-merge";
import "lucide-react";
const options = [
  { label: "Доставлен", value: "Доставлен" },
  { label: "Отменен", value: "Отменен" },
  { label: "Оплачен", value: "Оплачен" }
];
function AddOrderPopup() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.user.orders || []);
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: "",
    client_name: "",
    state: "",
    order_amount: ""
  });
  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      state: value
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      setError("");
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const checkDuplicateOrder = (orderNumber) => {
    return orders.some((order) => order.number === orderNumber);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderNumber = Number(formData.number);
      if (checkDuplicateOrder(orderNumber)) {
        setError("Заказ с таким номером уже существует.");
        return;
      }
      const submitData = {
        ...formData,
        number: orderNumber,
        order_amount: Number(formData.order_amount)
      };
      await dispatch(createOrders(submitData));
      await dispatch(getAllOrders());
      setFormData({
        name: "",
        number: "",
        date: "",
        client_name: "",
        state: "",
        order_amount: ""
      });
      setError("");
      setIsOpen(false);
    } catch (error2) {
      console.error("Failed to create order:", error2);
      setError(
        "Не удалось создать заказ. Пожалуйста, проверьте введенные данные."
      );
    }
  };
  useEffect(() => {
    dispatch(changeAddOrderPopup(isOpen));
  }, [isOpen]);
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "fixed inset-0 flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "md:h-[70%] lg:h-[75%] bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] lg:py-[35px] \r\n      xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] \r\n      md:w-[70%] lg:w-[60%] xl:w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] l\r\n      g:max-w-[500px] xl:max-w-[663px] relative overflow-y-auto",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700",
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-10", children: "Добавить заказ" }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "space-y-[12px] xs:space-y-[14px] sm:space-y-[20px] md:space-y-[24px] lg:space-y-[40px]",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    name: "name",
                    placeholder: "Наименование заказа",
                    value: formData.name,
                    onChange: handleInputChange,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "number",
                      name: "number",
                      placeholder: "Номер заказа",
                      value: formData.number,
                      onChange: handleInputChange,
                      required: true
                    }
                  ),
                  error && /* @__PURE__ */ jsx("p", { className: "text-red text-sm mt-1", children: error })
                ] }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "date",
                    name: "date",
                    value: formData.date,
                    onChange: handleInputChange,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    name: "client_name",
                    placeholder: "Данные клиента",
                    value: formData.client_name,
                    onChange: handleInputChange,
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  Select,
                  {
                    handleSelectChange,
                    options,
                    placeholder: "Статус заказа",
                    border: true,
                    className: "w-full p-2 bg-gray-75 rounded focus:outline-none focus:ring-2 font-normal text-base text-gray-400 placeholder:text-gray-150"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "number",
                    name: "order_amount",
                    placeholder: "Сумма заказа",
                    value: formData.order_amount,
                    onChange: handleInputChange,
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white uppercase rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium",
                  children: "Сохранить"
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
export {
  AddOrderPopup as default
};
