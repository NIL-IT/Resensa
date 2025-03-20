import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { b as changeShowStatus } from "../entry-server.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "react-helmet-async";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "lucide-react";
function StatusPopup({ orders }) {
  const dispatch = useDispatch();
  const { orderNum } = useSelector(({ user }) => user);
  const [isOpen, setIsOpen] = useState(true);
  const [findOrder, setFindOrder] = useState(null);
  const [updateOrder, setUpdateOrder] = useState(orders);
  document.body.style.overflowY = "hidden";
  useEffect(() => {
    if (!updateOrder) return;
    if (updateOrder.length > 0 && orderNum) {
      setFindOrder(updateOrder.find((order) => +order.number === +orderNum));
    }
  }, [setUpdateOrder, updateOrder]);
  useEffect(() => {
    dispatch(changeShowStatus(isOpen));
  }, [isOpen]);
  const getColor = (state) => {
    const toLowerCase = state.toLowerCase();
    if (toLowerCase == "отменен") return "bg-red";
    if (toLowerCase == "доставлен") return "bg-green";
    if (toLowerCase == "оплачен") return "bg-blue";
    return "bg-gray-400";
  };
  return /* @__PURE__ */ jsx("section", { className: "max-w-[100vw] max-h-[100vh] fixed inset-0  z-50 flex items-center justify-center", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-white py-[38px] px-8 rounded-lg xl:min-h-[200px] xl:h-[auto]  \r\n         w-[80%] xl:max-w-[800px] lg:max-h-[553px] flex flex-col justify-normal xl:justify-center relative",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-center text-lg lg:text-xl font-medium leading-8 lg:leading-[40.8px] text-gray-400 mb-6 uppercase", children: "вы можете проверить статус своего заказа" }),
        findOrder ? /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("table", { className: " xl:w-[80%] ", children: [
          /* @__PURE__ */ jsx(
            "thead",
            {
              className: "border-0 xl:border-b border-gray-400 relative  \r\n              :max-w-[400px]",
              children: /* @__PURE__ */ jsxs(
                "tr",
                {
                  className: "flex xl:*:min-w-[113px]  flex-col font-normal text-base text-gray-400 *:py-4  xl:flex xl:flex-row justify-between \r\n                 w-[280px] sm:w-[300px] md:w-[350px] xl:w-[600px] px-2",
                  children: [
                    /* @__PURE__ */ jsx("th", { className: "text-left xl:text-center  border-b xl:border-b-0 border-b-gray-400 ", children: "Номер" }),
                    /* @__PURE__ */ jsx("th", { className: "text-left xl:text-center     border-b xl:border-b-0 border-b-gray-400", children: "Дата" }),
                    /* @__PURE__ */ jsx("th", { className: "text-left xl:text-center       border-b xl:border-b-0 border-b-gray-400", children: "Статус" }),
                    /* @__PURE__ */ jsx("th", { className: "text-left xl:text-center     border-b xl:border-b-0 border-b-gray-400", children: "Сумма" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsxs("tr", { className: "*:py-4 xl:*:min-w-[113px]   flex flex-col left-[-2vw] top-[132px] sm:left-[5vw] sm:top-[132px] md:top-[105px] md:left-[22vw] text-right xl:text-left absolute xl:static  xl:flex-row justify-between w-[300px]  xl:w-[600px] px-2", children: [
            /* @__PURE__ */ jsx("td", { className: "xl:text-center  text-sm text-gray-400 pl-[5px]", children: findOrder.number }),
            /* @__PURE__ */ jsx("td", { className: "xl:text-center  text-sm text-gray-400 ", children: findOrder.date }),
            /* @__PURE__ */ jsx("td", { className: " xl:text-center  mt-[4px] xl:mt-0  ", children: /* @__PURE__ */ jsxs(
              "p",
              {
                className: `  inline-flex items-center justify-center gap-2 xl:px-2  rounded-full text-gray-400`,
                children: [
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: `w-1.5 h-1.5 rounded-full ${getColor(
                        findOrder.state
                      )}`
                    }
                  ),
                  findOrder.state
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("td", { className: "xl:text-center text-sm text-gray-400  mt-[3px] xl:mt-0", children: [
              findOrder.order_amount,
              " ₽"
            ] })
          ] }) })
        ] }) }) : /* @__PURE__ */ jsx("div", { className: "text-center text-sm text-gray-400", children: /* @__PURE__ */ jsxs("p", { children: [
          "Заказ с номером ",
          orderNum,
          " не найден"
        ] }) })
      ]
    }
  ) });
}
export {
  StatusPopup as default
};
