import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { S as SearchInput } from "./SearchInput-D_mXnIgV.js";
import { B as Button, q as changeShowSearchPopup } from "../entry-server.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "react-dom/server";
import "react-router";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "react-helmet-async";
import "clsx";
import "tailwind-merge";
import "lucide-react";
function SearchPopup() {
  const { equipment, solutions } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const [combinedData, setCombinedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setCombinedData([...equipment, ...solutions]);
  }, [equipment, solutions]);
  const [searchData, setSearchData] = useState([...equipment, ...solutions]);
  const handleSearch = (value) => {
    setSearchValue(value);
    const filteredData = combinedData.filter(
      (item) => item.name.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase())
    );
    setSearchData(filteredData);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleClose = () => {
    dispatch(changeShowSearchPopup(false));
  };
  return /* @__PURE__ */ jsx("section", { className: "h-[80%] min-w-[80%] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-white pt-2 xs:pt-3 sm:pt-4 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8\r\n       rounded-lg min-w-[100%]\r\n        overflow-y-scroll relative max-h-[100%] min-h-[100%]\r\n         pb-6 xs:pb-7 sm:pb-8 md:pb-9 lg:pb-10",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            itemScope: true,
            itemType: "https://schema.org/WebSite",
            className: "sticky z-50 flex-center top-[-20px] left-0 bg-white h-[60px]\r\n           xs:h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px]",
            children: [
              /* @__PURE__ */ jsx("meta", { itemProp: "url", content: "https://new.recensa.ru/" }),
              /* @__PURE__ */ jsx(
                SearchInput,
                {
                  handleSearch,
                  handleClose,
                  placeholder: "Введите запрос для поиска",
                  closeIcon: true,
                  iconLeft: true,
                  className: "border-0 border-b border-b-gray-200 gap-4"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-2 xs:mt-3 sm:mt-4 flex justify-center ", children: searchData.length > 0 ? /* @__PURE__ */ jsx("div", { className: " grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-5", children: searchData.map(
          ({ image_card, name, description, id, max_param }, i) => /* @__PURE__ */ jsxs(
            Link,
            {
              onClick: () => handleClose(),
              to: max_param ? `/equipment/${id}` : `/solutions/${id}`,
              className: "flex flex-col justify-between w-full xs:w-[180px] sm:w-[190px] md:w-[195px] lg:w-[200px] border border-gray-100 p-2 xs:p-3 sm:p-4",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "w-full h-[120px] xs:h-[130px] sm:h-[140px] md:h-[150px] lg:h-[160px] object-cover",
                      src: image_card || "/placeholder.svg",
                      alt: name,
                      title: `Продукт ${name}`
                    }
                  ),
                  /* @__PURE__ */ jsx("h2", { className: "text-gray-400 text-xs xs:text-sm uppercase font-normal my-1 xs:my-1.5 sm:my-2", children: name }),
                  /* @__PURE__ */ jsx("p", { className: "text-[11px] xs:text-[12px] sm:text-[13px] text-gray-300 line-clamp-3", children: description })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    noLink: true,
                    text: "Оставить заявку",
                    className: "w-full py-2 xs:py-3 sm:py-4 px-[8px] xs:px-[10px] sm:px-[8px] hover:bg-gray-450 mt-2 xs:mt-3 sm:mt-4 text-sm xs:text-xs"
                  }
                )
              ]
            },
            i
          )
        ) }) : /* @__PURE__ */ jsx("div", { className: "w-full h-[60vh] flex-center justify-center ", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "По вашему запросу ничего не найдено" }) }) })
      ]
    }
  ) });
}
export {
  SearchPopup as default
};
