import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback, Suspense, lazy } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { F as Footer } from "./Footer-CueotjOU.js";
import { T as Title } from "./Title-BoL8gpTk.js";
import { Plus, PencilLine, Trash2, FileSpreadsheet, ChevronDown, X, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { r as changeStatusOrderPopup, a as changeItemId, d as changeAddOrderPopup, g as getAllOrders, t as deleteOrders, v as changeIsAdmin, f as changeEquipmentPopup, w as deleteEquipment, n as getAllEquipment, x as deleteSolutions, p as getAllSolutions, j as changeShowAddNewItemPopup, y as importOrdersExcel, z as getBanner, A as updateBanner, B as deleteNews, l as getAllNews, C as getCompany, D as updateCompany, E as updateHomeSeo, F as updateContactsSeo, G as updateEquipmentSeo, H as updateSolutionSeo, I as exportOrdersExcel } from "../entry-server.js";
import { S as SearchInput } from "./SearchInput-5VkLsXe8.js";
import { B as Button } from "./Button-ZmIELfDU.js";
import Cookies from "js-cookie";
import { I as Input } from "./Input-Fzfexiw9.js";
import { c as config } from "./data-C21Hc6VP.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "@reduxjs/toolkit";
import "axios";
import "react-helmet-async";
import "clsx";
import "tailwind-merge";
function VerticalDote({
  list: list2,
  deleteSelected,
  deleteAll,
  selectedOrders
}) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const handleAction = (action) => {
    switch (action) {
      case "deleteSelected":
        deleteSelected();
        break;
      case "deleteAll":
        deleteAll();
        break;
      case "add":
        dispatch(changeAddOrderPopup(true));
        break;
      case "change":
        if (selectedOrders.length == 1) {
          dispatch(changeStatusOrderPopup(true));
          dispatch(changeItemId(selectedOrders[0]));
        } else {
          alert("Выберите один заказ для изменения статуса.");
        }
        break;
    }
    setActive(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ jsxs("article", { className: "relative", ref: menuRef, children: [
    /* @__PURE__ */ jsx("button", { className: "p-2", onClick: () => setActive(!active), children: /* @__PURE__ */ jsx(
      "svg",
      {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          }
        )
      }
    ) }),
    active && /* @__PURE__ */ jsx("div", { className: "absolute space-y-4 top-2 right-[30px] py-1 bg-white w-[250px] z-30 rounded-lg border", children: list2.map(({ name, icon, action }) => /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex-center justify-between gap-4 hover:bg-gray-50 p-2 w-full transition-all rounded",
        onClick: () => handleAction(action),
        children: [
          /* @__PURE__ */ jsx("p", { children: name }),
          icon
        ]
      },
      name
    )) })
  ] });
}
function formatDate(dateString) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new Error("Input must be in YYYY-MM-DD format");
  }
  const parts = dateString.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  return `${day}.${month}.${year}`;
}
const list = [
  { name: "Добавить новый заказ", icon: /* @__PURE__ */ jsx(Plus, { width: 20 }), action: "add" },
  {
    name: "Изменить статус заказа",
    icon: /* @__PURE__ */ jsx(PencilLine, { width: 20 }),
    action: "change"
  },
  {
    name: "Удалить выбранное",
    icon: /* @__PURE__ */ jsx(Trash2, { width: 20 }),
    action: "deleteSelected"
  },
  {
    name: "Удалить все заказы",
    icon: /* @__PURE__ */ jsx(Trash2, { width: 20 }),
    action: "deleteAll"
  }
];
function AdminOrders({ title }) {
  const { orders, itemId } = useSelector(({ user }) => user);
  const [ordersList, setOrdersList] = useState(orders);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const fetchOrders = async () => {
      await dispatch(getAllOrders());
      return setLoading(false);
    };
    fetchOrders();
  }, [dispatch, itemId]);
  useEffect(() => {
    setOrdersList(orders);
  }, [orders]);
  const handleCheckedAllOrders = () => {
    if (selectedOrders.length === ordersList.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(ordersList.map((order) => order.id));
    }
  };
  const handleCheckedOrder = (orderId) => {
    setSelectedOrders(
      (prev) => prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]
    );
  };
  const isChecked = (orderId) => {
    return selectedOrders.includes(orderId);
  };
  const deleteSelected = async () => {
    for (const orderId of selectedOrders) {
      const filter = ordersList.filter(({ id }) => id !== orderId);
      setOrdersList(filter);
    }
    for (const orderId of selectedOrders) {
      await dispatch(deleteOrders(orderId));
    }
    setSelectedOrders([]);
    await dispatch(getAllOrders());
  };
  const deleteAll = async () => {
    if (!window.confirm("Вы уверены, что хотите удалить все заказы ?")) {
      return;
    }
    setLoading(true);
    for (const order of ordersList) {
      await dispatch(deleteOrders(order.id));
    }
    setSelectedOrders([]);
    setOrdersList([]);
    setLoading(false);
  };
  const handleSearch = (value) => {
    setOrdersList(
      orders.filter((order) => order.number.toString().includes(value))
    );
  };
  const changeOrders = (data) => {
    setOrdersList(data);
  };
  const getColor = (state) => {
    const toLowerCase = state.toLowerCase();
    if (toLowerCase == "отменен") return "bg-red";
    if (toLowerCase == "доставлен") return "bg-green";
    if (toLowerCase == "оплачен") return "bg-blue";
    return "bg-gray-400";
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full relative", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col gap-3 lg:gap-0 lg:flex-row items-start \r\n      lg:items-center justify-between mb-4",
        children: [
          /* @__PURE__ */ jsx(
            Title,
            {
              className: "text-xl font-normal text-gray-400 mb-2 md:mb-0",
              text: title
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex  md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto", children: [
            /* @__PURE__ */ jsx(
              SearchInput,
              {
                handleSearch,
                type: "number",
                placeholder: "Введите номер заказа",
                className: "w-full md:w-[300px] border-0 border-b border-gray-250"
              }
            ),
            /* @__PURE__ */ jsx(
              VerticalDote,
              {
                changeOrders,
                deleteAll,
                deleteSelected,
                list,
                selectedOrders,
                ordersList
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-[500px]  lg:min-h-[auto] max-h-[480px] overflow-x-auto overflow-y-scroll  scrollbar-hide", children: /* @__PURE__ */ jsxs("table", { id: "tableId", className: "min-w-full relative", children: [
      /* @__PURE__ */ jsx("thead", { className: "sticky top-0 left-0 bg-white z-20", children: /* @__PURE__ */ jsxs("tr", { className: "border-b *:text-center font-normal text-[10px] sm:text-sm lg:text-sm xl:text-base text-gray-400", children: [
        /* @__PURE__ */ jsx("th", { className: "w-[15px] py-2 px-1 ", children: /* @__PURE__ */ jsx(
          "input",
          {
            onChange: handleCheckedAllOrders,
            checked: selectedOrders.length === orders.length,
            type: "checkbox",
            className: "rounded border-gray-300 cursor-pointer"
          }
        ) }),
        /* @__PURE__ */ jsx("th", { className: "  px-1 py-1 sm:py-2  xl:px-4", children: "Заказ" }),
        /* @__PURE__ */ jsx("th", { className: " py-1 px-1 sm:py-2   xl:px-4", children: "Номер" }),
        /* @__PURE__ */ jsx("th", { className: " py-1 px-1  sm:py-2  xl:px-4", children: "Дата" }),
        /* @__PURE__ */ jsx("th", { className: " py-1 px-1 sm:py-2   xl:px-4", children: "Данные клиента" }),
        /* @__PURE__ */ jsx("th", { className: "  xl:text-base py-1  px-1 sm:py-2   xl:px-4", children: "Статус" }),
        /* @__PURE__ */ jsx("th", { className: " px-1  sm:py-2  xl:px-4", children: "Сумма" })
      ] }) }),
      loading ? /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { className: "border-b *:text-sm *:font-normal *:text-gray-400", children: /* @__PURE__ */ jsx("td", { colSpan: "7", className: "py-3 px-4 text-center", children: "Загрузка..." }) }) }) : ordersList.length > 0 ? /* @__PURE__ */ jsx("tbody", { children: ordersList.map((order) => {
        let formattedDate = formatDate(order.date);
        return /* @__PURE__ */ jsxs(
          "tr",
          {
            className: "border-b *:text-center *:text-[8px]  lg:*:text-[11px] xl:*:text-sm *:font-normal *:text-gray-400",
            children: [
              /* @__PURE__ */ jsx("td", { className: "text-center py-2 xl:py-3 w-[15px] px-1 xl:px-2", children: /* @__PURE__ */ jsx(
                "input",
                {
                  checked: isChecked(order.id),
                  onChange: () => handleCheckedOrder(order.id),
                  type: "checkbox",
                  className: "rounded border-gray-300 cursor-pointer"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: " py-2 xl:py-3 px-1 xl:px-4", children: order.name }),
              /* @__PURE__ */ jsx("td", { className: " py-2 xl:py-3 px-1 xl:px-4", children: order.number }),
              /* @__PURE__ */ jsx("td", { className: " py-2 xl:py-3 px-1 xl:px-4", children: formattedDate }),
              /* @__PURE__ */ jsx("td", { className: "py-2 lg:py-3 px-1 lg:px-4 ", children: order.client_name }),
              /* @__PURE__ */ jsx("td", { className: "py-2 lg:py-3 px-1 lg:pr-4 ", children: /* @__PURE__ */ jsxs(
                "p",
                {
                  className: `inline-flex items-center text-center gap-1 lg:gap-2 px-1 lg:px-2 py-0.5 lg:py-1 rounded-full text-gray-400 text-[11px] lg:text-sm`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `w-1.5 h-1.5 rounded-full ${getColor(
                          order.state
                        )}`
                      }
                    ),
                    order.state
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs("td", { className: " py-2 lg:py-3 px-1 lg:px-4 text-[8px] lg:text-sm", children: [
                order.order_amount,
                " ₽"
              ] })
            ]
          },
          order.id
        );
      }) }) : /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { className: "border-b *:text-sm *:font-normal *:text-gray-400", children: /* @__PURE__ */ jsx("td", { colSpan: "7", className: "py-3 px-4 text-center", children: "Нет заказов" }) }) })
    ] }) })
  ] });
}
function AdminExit({ title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const exit = () => {
    Cookies.remove("access_token");
    navigate("/auth");
  };
  useEffect(() => {
    dispatch(changeIsAdmin(true));
  }, [dispatch]);
  return /* @__PURE__ */ jsxs("div", { className: "relative pb-5", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" }),
    /* @__PURE__ */ jsx(Title, { text: title, className: "inline-block text-xl font-normal mb-6" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full h-[450px] flex items-center justify-center flex-col gap-5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-center", children: "Вы уверены что хотите выйти?" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-full sm:w-[100px] hover:bg-gray-300 bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase transition-all text-center",
            onClick: () => exit(),
            children: "Да"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            href: "/admin/1",
            text: "Нет",
            className: "w-full sm:w-[100px] hover:bg-gray-300"
          }
        )
      ] })
    ] })
  ] });
}
function AdminCategoryList({ title, category: category2 }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { equipment, solutions, itemId } = useSelector(({ user }) => user);
  const dataCategory = category2 === "equipment" ? equipment : solutions;
  const changeEquipment = (id) => {
    dispatch(changeItemId(id));
    dispatch(changeEquipmentPopup(true));
  };
  const handleDelete = async (id) => {
    try {
      if (category2 === "equipment") {
        await dispatch(deleteEquipment(id)).unwrap();
        await dispatch(getAllEquipment());
      } else if (category2 === "solutions") {
        await dispatch(deleteSolutions(id)).unwrap();
        await dispatch(getAllSolutions());
      }
      dispatch(changeItemId(null));
    } catch (error) {
      console.error(`Failed to delete ${category2}:`, error);
      alert(
        `Не удалось удалить ${category2 === "equipment" ? "оборудование" : "решение"}`
      );
    }
  };
  const addNewItem = () => {
    dispatch(changeShowAddNewItemPopup(true));
  };
  const fetchData = async () => {
    setLoading(true);
    await dispatch(getAllEquipment());
    await dispatch(getAllSolutions());
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [category2, itemId]);
  return /* @__PURE__ */ jsxs("div", { className: "relative pb-5", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 md:mb-9", children: [
      /* @__PURE__ */ jsx(
        Title,
        {
          text: title,
          className: "inline-block text-xl font-normal mb-4 md:mb-0 p-2 lg:p-0"
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => addNewItem(),
          className: "p-2 flex items-center gap-2 md:gap-4 rounded hover:bg-gray-50",
          children: [
            /* @__PURE__ */ jsx("p", { children: `Добавить ${category2 === "equipment" ? "оборудование" : category2 !== "news" ? "решение" : "новость"}` }),
            /* @__PURE__ */ jsx(Plus, { className: "w-5 md:w-6" })
          ]
        }
      )
    ] }),
    loading ? /* @__PURE__ */ jsx("div", { className: "text-center text-gray-400 py-4", children: "Загрузка..." }) : dataCategory.length > 0 ? /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full", children: /* @__PURE__ */ jsx("div", { className: "max-h-[440px] overflow-y-auto grid  grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 pr-5", children: dataCategory.map(
      ({ id, name, description, image_card, date, title: title2 }) => /* @__PURE__ */ jsx(
        "article",
        {
          className: "flex flex-col  justify-between w-full sm:w-[200px] h-[360px] border border-gray-100 p-4 ",
          children: category2 !== "news" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full h-[120px] object-cover",
                  src: image_card || "/img/placeholder.svg",
                  alt: name
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-gray-400 text-sm uppercase font-normal my-2", children: name }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-[13px] max-h-[80px] overflow-hidden text-gray-300",
                  dangerouslySetInnerHTML: { __html: description }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-2", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: () => changeEquipment(id),
                  text: "Изменить",
                  className: "w-full py-2 hover:bg-gray-450 text-center"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: () => handleDelete(id),
                  text: "Удалить",
                  className: "w-full py-2 bg-gray-300 hover:bg-gray-500 text-center"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-full h-[120px] object-cover",
                  src: image || "/img/placeholder.svg",
                  alt: name
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-gray-400 text-sm uppercase font-normal my-2 overflow-hidden", children: title2 }),
              /* @__PURE__ */ jsx("p", { className: "text-[13px] text-gray-300", children: date })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-2", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: () => changeEquipment(id),
                  text: "Изменить",
                  className: "w-full py-2 hover:bg-gray-450 text-center"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: () => handleDelete(id),
                  text: "Удалить",
                  className: "w-full py-2 bg-gray-300 hover:bg-gray-500 text-center"
                }
              )
            ] })
          ] })
        },
        id
      )
    ) }) }) : /* @__PURE__ */ jsx("p", { className: "text-center text-gray-400 py-4", children: category2 === "equipment" ? "Оборудования нет" : "Решений нет" })
  ] });
}
const FileUploader = ({ setActiveUploaderFile }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const allowedTypes = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/sql",
    ".sql",
    ".xls",
    ".xlsx"
  ];
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };
  const handleChange = (e) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const handleFiles = async (files) => {
    var _a, _b;
    const validFiles = files.filter((file) => {
      const fileType = file.type || `.${file.name.split(".").pop()}`;
      return allowedTypes.includes(fileType.toLowerCase());
    });
    if (validFiles.length) {
      setUploading(true);
      setError("");
      for (const file of validFiles) {
        try {
          await dispatch(importOrdersExcel(file));
          setUploadedFiles((prev) => [...prev, file]);
        } catch (err) {
          setError(
            `Failed to upload ${file.name}: ${((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || err.message}`
          );
        }
      }
      setActiveUploaderFile(false);
      setUploading(false);
    }
  };
  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto p-4 w-[600px]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `relative border-2 border-dashed rounded-lg p-8 ${dragActive ? "border-blue-500 bg-blue-50" : "border-blue-300"}`,
        onDragEnter: handleDrag,
        onDragLeave: handleDrag,
        onDragOver: handleDrag,
        onDrop: handleDrop,
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx(FileSpreadsheet, { className: "w-16 h-16 text-blue-500" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  var _a;
                  return (_a = inputRef.current) == null ? void 0 : _a.click();
                },
                className: "flex-center  px-6 py-2.5  bg-white text-gray-700 rounded shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "ВЫБЕРИТЕ ФАЙЛЫ" }),
                  /* @__PURE__ */ jsx(ChevronDown, { className: "ml-2" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "file",
                multiple: true,
                accept: ".sql,.xls,.xlsx",
                onChange: handleChange,
                className: "hidden"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "или перетащите файл сюда" })
        ] })
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mt-2 text-red-500 text-sm", children: error }),
    uploading ? /* @__PURE__ */ jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-blue-500", children: "Загрузка..." }) }) : uploadedFiles.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "Загруженные файлы:" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: uploadedFiles.map((file, index) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: "flex items-center justify-between p-2 bg-gray-50 rounded",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
              file.name,
              " (",
              (file.size / 1024).toFixed(1),
              " KB)"
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => removeFile(index),
                className: "text-red-500 hover:text-red-700",
                children: "✕"
              }
            )
          ]
        },
        index
      )) })
    ] })
  ] });
};
function ChangeBanner({ title }) {
  const dispatch = useDispatch();
  const { experience, guarantee, banner } = useSelector(({ user }) => user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    first_value: banner.first_value,
    first_value_string: banner.first_value_string,
    second_value: banner.second_value,
    second_value_string: banner.second_value_string
  });
  useEffect(() => {
    dispatch(getBanner());
    setData({
      first_value: banner.first_value,
      first_value_string: banner.first_value_string,
      second_value: banner.second_value,
      second_value_string: banner.second_value_string
    });
  }, [dispatch]);
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3e3);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateBanner(formData));
    setFormData({
      first_value: formData.first_value,
      first_value_string: formData.first_value_string,
      second_value: formData.second_value,
      second_value_string: formData.second_value_string
    });
    setShowSuccess(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full relative", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsx(Title, { className: "text-xl font-normal text-gray-400", text: title }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "pt-6 sm:pt-10 w-full space-y-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "block mb-1 text-sm font-medium text-gray-900", children: "Цифра для первого значения" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "border border-gray-200",
              required: false,
              type: "text",
              name: "first_value",
              placeholder: formData.first_value || 0,
              value: formData.first_value,
              onChange: handleInputChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "block mb-1 text-sm font-medium text-gray-900", children: "Текст для первого значения" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "border border-gray-200",
              required: false,
              type: "text",
              name: "first_value_string",
              placeholder: "Введите текст...",
              value: formData.first_value_string,
              onChange: handleInputChange
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "block mb-1 text-sm font-medium text-gray-900", children: "Цифра для второго значения" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "border border-gray-200",
              required: false,
              type: "text",
              name: "second_value",
              placeholder: "Введите цифру...",
              value: formData.second_value,
              onChange: handleInputChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "block mb-1 text-sm font-medium text-gray-900", children: "Текст для второго значения" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "border border-gray-200",
              required: false,
              type: "text",
              name: "second_value_string",
              placeholder: "Введите текст...",
              value: formData.second_value_string,
              onChange: handleInputChange
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "flex w-full  justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0",
            children: "Сохранить"
          }
        ),
        showSuccess && /* @__PURE__ */ jsx("p", { className: "text-green text-sm animate-fade-in mt-2 sm:mt-0", children: "Данные успешно изменены" })
      ] })
    ] })
  ] });
}
function AdminNews() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { news, itemId } = useSelector(({ user }) => user);
  const changeNews = (id) => {
    dispatch(changeItemId(id));
    dispatch(changeEquipmentPopup(true));
  };
  const handlerDeleteNews = async (id) => {
    await dispatch(deleteNews(id));
    dispatch(changeItemId(null));
    fetchData();
  };
  const addNewItem = () => {
    dispatch(changeShowAddNewItemPopup(true));
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      await dispatch(getAllNews());
    } catch (error) {
      console.error(`Failed to fetch ${category}:`, error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [itemId]);
  return /* @__PURE__ */ jsxs("div", { className: "relative pb-5", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-9", children: [
      /* @__PURE__ */ jsx(
        Title,
        {
          text: "Все новости",
          className: "inline-block text-xl font-normal mb-4 md:mb-0"
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => addNewItem(),
          className: "p-2 flex items-center gap-2 md:gap-4 rounded hover:bg-gray-50",
          children: [
            /* @__PURE__ */ jsx("span", { children: `Добавить новость` }),
            /* @__PURE__ */ jsx(Plus, { className: "w-5 md:w-6" })
          ]
        }
      )
    ] }),
    loading ? /* @__PURE__ */ jsx("div", { children: "Загрузка..." }) : /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-center", children: /* @__PURE__ */ jsx("div", { className: "max-h-[550px] overflow-y-auto overflow-x-hidden grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 pr-5", children: news.map(({ id, name, image: image2, date, title }) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "flex flex-col justify-between w-full sm:w-[200px] h-[380px] border border-gray-100 p-4 mb-5",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-full h-[120px] object-cover",
                src: image2,
                alt: name
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-gray-400 text-sm uppercase font-normal my-2 overflow-hidden", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-[13px] text-gray-300", children: date.split("T")[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-2", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => changeNews(id),
                text: "Изменить",
                className: "w-full py-2 hover:bg-gray-450 text-center"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => handlerDeleteNews(id),
                text: "Удалить",
                className: "w-full py-2 bg-gray-300 hover:bg-gray-500 text-center"
              }
            )
          ] })
        ]
      },
      id
    )) }) })
  ] });
}
const JoditEditor = lazy(() => import("jodit-react"));
function ChangeAbout({ title }) {
  const dispatch = useDispatch();
  const { company } = useSelector(({ user }) => user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    about_main_screen: (company == null ? void 0 : company.about_main_screen) || "",
    about_unique_screen: (company == null ? void 0 : company.about_unique_screen) || "",
    about_page_title: (company == null ? void 0 : company.about_page_title) || "",
    about_page_description: (company == null ? void 0 : company.about_page_description) || "",
    about_hidden_seo_text: (company == null ? void 0 : company.about_hidden_seo_text) || "",
    about_page_keywords: (company == null ? void 0 : company.about_page_keywords) || ""
  });
  const bannerEditorRef = useRef(null);
  const aboutEditorRef = useRef(null);
  const formRef = useRef(null);
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);
  useEffect(() => {
    if (company) {
      setFormData({
        about_main_screen: (company == null ? void 0 : company.about_main_screen) || "",
        about_unique_screen: (company == null ? void 0 : company.about_unique_screen) || "",
        about_page_title: (company == null ? void 0 : company.about_page_title) || "",
        about_page_description: (company == null ? void 0 : company.about_page_description) || "",
        about_hidden_seo_text: (company == null ? void 0 : company.about_hidden_seo_text) || "",
        about_page_keywords: (company == null ? void 0 : company.about_page_keywords) || ""
      });
    }
  }, [company]);
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3e3);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);
  const handleEditorChange = useCallback((content, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: content
    }));
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCompany(formData));
    setShowSuccess(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full relative", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsx(Title, { className: "text-xl font-normal text-gray-400", text: title }) }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        ref: formRef,
        onSubmit: handleSubmit,
        className: "pt-6 sm:pt-10 w-full overflow-hidden pb-10",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "about_main_screen",
                  className: "block text-sm font-medium text-gray-900",
                  children: "Текст баннера"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "editor-container", children: /* @__PURE__ */ jsx(
                Suspense,
                {
                  fallback: /* @__PURE__ */ jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                  children: /* @__PURE__ */ jsx(
                    JoditEditor,
                    {
                      ref: bannerEditorRef,
                      value: formData.about_main_screen,
                      config,
                      onBlur: (content) => handleEditorChange(content, "about_main_screen"),
                      tabIndex: 1
                    }
                  )
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 w-full mt-10", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "about_unique_screen",
                  className: "block text-sm font-medium text-gray-900",
                  children: "Текст страницы о компании"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "editor-container", children: /* @__PURE__ */ jsx(
                Suspense,
                {
                  fallback: /* @__PURE__ */ jsx("div", { className: "border border-gray-300 h-[150px] w-full" }),
                  children: /* @__PURE__ */ jsx(
                    JoditEditor,
                    {
                      ref: aboutEditorRef,
                      value: formData.about_unique_screen,
                      config,
                      onBlur: (content) => handleEditorChange(content, "about_unique_screen"),
                      tabIndex: 2
                    }
                  )
                }
              ) })
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
                  name: "about_page_title",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.about_page_title,
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
                  name: "about_page_description",
                  rows: "3",
                  onChange: handleInputChange,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.about_page_description,
                  placeholder: "Краткое описание для поисковых систем"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Текст для поисковых систем" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "about_hidden_seo_text",
                  rows: "3",
                  onChange: handleInputChange,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.about_hidden_seo_text,
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
                  name: "about_page_keywords",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formData.about_page_keywords,
                  onChange: handleInputChange,
                  placeholder: "Ключевые слова через запятую"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col  items-start sm:items-center gap-2 sm:gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "flex w-full  justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0",
                children: "Сохранить"
              }
            ),
            showSuccess && /* @__PURE__ */ jsx("p", { className: "text-green text-sm animate-fade-in mt-2 sm:mt-0", children: "Данные успешно изменены" })
          ] })
        ]
      }
    )
  ] });
}
function SeoPage({ title }) {
  const dispatch = useDispatch();
  const { company } = useSelector(({ user }) => user);
  const [showSuccess, setShowSuccess] = useState({
    main: false,
    contacts: false,
    equipment: false,
    solution: false
  });
  const [formDataMain, setFormDataMain] = useState({
    main_page_title: company.main_page_title || "",
    main_page_description: company.main_page_description || "",
    main_page_keywords: company.main_page_keywords || "",
    main_hidden_seo_text: company.main_hidden_seo_text || ""
  });
  const [formDataContacts, setFormDataContacts] = useState({
    contacts_page_title: company.contacts_page_title || "",
    contacts_page_description: company.contacts_page_description || "",
    contacts_page_keywords: company.contacts_page_keywords || "",
    contacts_hidden_seo_text: company.contacts_hidden_seo_text || ""
  });
  const [formDataEquipment, setFormDataEquipment] = useState({
    equipment_page_title: company.equipment_page_title || "",
    equipment_page_description: company.equipment_page_description || "",
    equipment_page_keywords: company.equipment_page_keywords || "",
    equipment_hidden_seo_text: company.equipment_hidden_seo_text || ""
  });
  const [formDataSolution, setFormDataSolution] = useState({
    solution_page_title: company.solution_page_title || "",
    solution_page_description: company.solution_page_description || "",
    solution_page_keywords: company.solution_page_keywords || "",
    solution_hidden_seo_text: company.solution_hidden_seo_text || ""
  });
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);
  useEffect(() => {
    if (company) {
      setFormDataMain((prevData) => ({
        ...prevData,
        main_page_title: company.main_page_title || "",
        main_page_description: company.main_page_description || "",
        main_page_keywords: company.main_page_keywords || "",
        main_hidden_seo_text: company.main_hidden_seo_text || ""
      }));
      setFormDataContacts((prevData) => ({
        ...prevData,
        contacts_page_title: company.contacts_page_title || "",
        contacts_page_description: company.contacts_page_description || "",
        contacts_page_keywords: company.contacts_page_keywords || "",
        contacts_hidden_seo_text: company.contacts_hidden_seo_text || ""
      }));
      setFormDataEquipment((prevData) => ({
        ...prevData,
        equipment_page_title: company.equipment_page_title || "",
        equipment_page_description: company.equipment_page_description || "",
        equipment_page_keywords: company.equipment_page_keywords || "",
        equipment_hidden_seo_text: company.equipment_hidden_seo_text || ""
      }));
      setFormDataSolution((prevData) => ({
        ...prevData,
        solution_page_title: company.solution_page_title || "",
        solution_page_description: company.solution_page_description || "",
        solution_page_keywords: company.solution_page_keywords || "",
        solution_hidden_seo_text: company.solution_hidden_seo_text || ""
      }));
    }
  }, [company]);
  useEffect(() => {
    let timer;
    if (Object.values(showSuccess).some((value) => value === true)) {
      timer = setTimeout(() => {
        setShowSuccess({
          main: false,
          contacts: false,
          equipment: false,
          solution: false
        });
      }, 3e3);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);
  const handleInputChangeMain = (e) => {
    const { name, value } = e.target;
    setFormDataMain((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleInputChangeContacts = (e) => {
    const { name, value } = e.target;
    setFormDataContacts((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleInputChangeEquipment = (e) => {
    const { name, value } = e.target;
    setFormDataEquipment((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleInputChangeSolution = (e) => {
    const { name, value } = e.target;
    setFormDataSolution((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmitMain = (e) => {
    e.preventDefault();
    dispatch(updateHomeSeo(formDataMain));
    setShowSuccess({ main: true });
  };
  const handleSubmitContacts = (e) => {
    e.preventDefault();
    dispatch(updateContactsSeo(formDataContacts));
    setShowSuccess({ contacts: true });
  };
  const handleSubmitEquipment = (e) => {
    e.preventDefault();
    console.log(formDataEquipment);
    dispatch(updateEquipmentSeo(formDataEquipment));
    setShowSuccess({ equipment: true });
  };
  const handleSubmitSolution = (e) => {
    e.preventDefault();
    dispatch(updateSolutionSeo(formDataSolution));
    setShowSuccess({ solution: true });
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full relative", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsx(Title, { className: "text-xl font-normal text-gray-400", text: title }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmitMain, className: "pt-6 sm:pt-10 w-full ", children: [
      /* @__PURE__ */ jsxs("div", { className: "pt-4 space-y-[18px]", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "SEO информация для главной страницы" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Заголовок страницы (Title)" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              name: "main_page_title",
              className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
              value: formDataMain.main_page_title,
              onChange: handleInputChangeMain,
              placeholder: "Заголовок для SEO"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Описание страницы (Description)" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "main_page_description",
              rows: "3",
              onChange: handleInputChangeMain,
              className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
              value: formDataMain.main_page_description,
              placeholder: "Краткое описание для поисковых систем"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Текст для поисковых систем" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "main_hidden_seo_text",
              rows: "3",
              onChange: handleInputChangeMain,
              className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
              value: formDataMain.main_hidden_seo_text,
              placeholder: "Этот текст предназначен для поисковых систем и не виден пользователям."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Ключевые слова (Keywords)" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              name: "main_page_keywords",
              className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
              value: formDataMain.main_page_keywords,
              onChange: handleInputChangeMain,
              placeholder: "Ключевые слова через запятую"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0",
            children: "Сохранить"
          }
        ),
        showSuccess.main && /* @__PURE__ */ jsx("p", { className: "text-green text-sm animate-fade-in mt-2 sm:mt-0", children: "Данные успешно изменены" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmitContacts,
        className: "pt-6 sm:pt-10 w-full pb-10",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-4 space-y-[18px] mt-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "SEO информация для страницы контакты" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Заголовок страницы (Title)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "contacts_page_title",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataContacts.contacts_page_title,
                  onChange: handleInputChangeContacts,
                  placeholder: "Заголовок для SEO"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Описание страницы (Description)" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "contacts_page_description",
                  rows: "3",
                  onChange: handleInputChangeContacts,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataContacts.contacts_page_description,
                  placeholder: "Краткое описание для поисковых систем"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Текст для поисковых систем" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "contacts_hidden_seo_text",
                  rows: "3",
                  onChange: handleInputChangeContacts,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataContacts.contacts_hidden_seo_text,
                  placeholder: "Этот текст предназначен для поисковых систем и не виден пользователям."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Ключевые слова (Keywords)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "contacts_page_keywords",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataContacts.contacts_page_keywords,
                  onChange: handleInputChangeContacts,
                  placeholder: "Ключевые слова через запятую"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0",
                children: "Сохранить"
              }
            ),
            showSuccess.contacts && /* @__PURE__ */ jsx("p", { className: "text-green text-sm animate-fade-in mt-2 sm:mt-0", children: "Данные успешно изменены" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmitEquipment,
        className: "pt-6 sm:pt-10 w-full pb-10",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-4 space-y-[18px] mt-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "SEO информация для страницы оборудования" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Заголовок страницы (Title)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "equipment_page_title",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataEquipment.equipment_page_title,
                  onChange: handleInputChangeEquipment,
                  placeholder: "Заголовок для SEO"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Описание страницы (Description)" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "equipment_page_description",
                  rows: "3",
                  onChange: handleInputChangeEquipment,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataEquipment.equipment_page_description,
                  placeholder: "Краткое описание для поисковых систем"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Текст для поисковых систем" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "equipment_hidden_seo_text",
                  rows: "3",
                  onChange: handleInputChangeEquipment,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataEquipment.equipment_hidden_seo_text,
                  placeholder: "Этот текст предназначен для поисковых систем и не виден пользователям."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Ключевые слова (Keywords)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "equipment_page_keywords",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataEquipment.equipment_page_keywords,
                  onChange: handleInputChangeEquipment,
                  placeholder: "Ключевые слова через запятую"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0",
                children: "Сохранить"
              }
            ),
            showSuccess.equipment && /* @__PURE__ */ jsx("p", { className: "text-green text-sm animate-fade-in mt-2 sm:mt-0", children: "Данные успешно изменены" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmitSolution,
        className: "pt-6 sm:pt-10 w-full pb-10",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-4 space-y-[18px] mt-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "SEO информация для страницы решений" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Заголовок страницы (Title)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "solution_page_title",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataSolution.solution_page_title,
                  onChange: handleInputChangeSolution,
                  placeholder: "Заголовок для SEO"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Описание страницы (Description)" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "solution_page_description",
                  rows: "3",
                  onChange: handleInputChangeSolution,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataSolution.solution_page_description,
                  placeholder: "Краткое описание для поисковых систем"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Текст для поисковых систем" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "solution_hidden_seo_text",
                  rows: "3",
                  onChange: handleInputChangeSolution,
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataSolution.solution_hidden_seo_text,
                  placeholder: "Этот текст предназначен для поисковых систем и не виден пользователям."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "w-full text-sm text-gray-900", children: "Ключевые слова (Keywords)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "solution_page_keywords",
                  className: "block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300",
                  value: formDataSolution.solution_page_keywords,
                  onChange: handleInputChangeSolution,
                  placeholder: "Ключевые слова через запятую"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0",
                children: "Сохранить"
              }
            ),
            showSuccess.solution && /* @__PURE__ */ jsx("p", { className: "text-green text-sm animate-fade-in mt-2 sm:mt-0", children: "Данные успешно изменены" })
          ] })
        ]
      }
    )
  ] });
}
const navList = [
  {
    id: "1",
    name: "заказы",
    component: (title) => /* @__PURE__ */ jsx(AdminOrders, { title }),
    title: "все заказы"
  },
  {
    id: "2",
    name: "оборудование",
    component: (title) => /* @__PURE__ */ jsx(AdminCategoryList, { title, category: `equipment` }),
    title: "все оборудование"
  },
  {
    id: "3",
    name: "решения",
    component: (title) => /* @__PURE__ */ jsx(AdminCategoryList, { title, category: "solutions" }),
    title: "все решения"
  },
  {
    id: "4",
    name: "новости",
    component: (title) => /* @__PURE__ */ jsx(AdminNews, {}),
    title: "все новости"
  },
  {
    id: "5",
    name: "Баннер",
    component: (title) => /* @__PURE__ */ jsx(ChangeBanner, { title }),
    title: "Изменить баннер"
  },
  {
    id: "6",
    name: "О компании",
    component: (title) => /* @__PURE__ */ jsx(ChangeAbout, { title }),
    title: "Изменить страницу о компании"
  },
  {
    id: "7",
    name: "SEO",
    component: (title) => /* @__PURE__ */ jsx(SeoPage, { title }),
    title: "Редактирование SEO"
  },
  {
    id: "8",
    name: "выйти",
    component: (title) => /* @__PURE__ */ jsx(AdminExit, { title }),
    title: "выйти"
  }
];
function Admin() {
  const [activeLink, setActiveLink] = useState(null);
  const [isActiveUploadFile, setActiveUploaderFile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  document.body.style.overflowY = "auto";
  const changeShowUploadFile = () => {
    setActiveUploaderFile(!isActiveUploadFile);
  };
  const dirs = pathname.split("/");
  const getDirectoryName = (pathname2) => {
    if (+dirs[2] === 1) return "Заказы";
    if (+dirs[2] === 2) return "Оборудование";
    if (+dirs[2] === 3) return "Решения";
    if (+dirs[2] === 4) return "Новости";
    if (+dirs[2] === 5) return "Баннер";
    if (+dirs[2] === 6) return "О компании";
    if (+dirs[2] === 7) return "SEO";
    if (+dirs[2] === 8) return "Выйти";
  };
  useEffect(() => {
    const getId = () => pathname.split("/").at(-1);
    setActiveLink(getId() - 1);
    setActiveUploaderFile(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);
  const exportFile = async () => {
    await exportOrdersExcel(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("main", { className: "min-h-screen flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "w-full md:container mx-auto px-4 pt-[30px] flex-grow", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-900 text-sm", children: [
        "Личный кабинет - ",
        getDirectoryName()
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-6 border-y border-y-gray-400 flex flex-col md:flex-row", children: [
        /* @__PURE__ */ jsxs("nav", { className: "md:w-[220px] border-b md:border-b-0 md:border-r border-gray-400", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:hidden flex justify-between items-center py-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg uppercase", children: "Меню" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6 text-gray-400" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6 text-gray-400" }) })
          ] }),
          /* @__PURE__ */ jsx(
            "ul",
            {
              className: `${isMobileMenuOpen ? "block" : "hidden"} md:block space-y-6 py-[30px] md:py-[105px] md:pb-[200px] pr-[20px]  xl:pr-[81px] `,
              children: navList.map(({ name, id }, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: `/admin/${id}`,
                  className: `text-gray-400 text-sm lg:text-lg uppercase ${i === activeLink ? "border-b border-b-gray-400 font-normal" : ""}`,
                  onClick: () => setIsMobileMenuOpen(false),
                  children: name
                }
              ) }, id))
            }
          )
        ] }),
        !isActiveUploadFile ? /* @__PURE__ */ jsx("div", { className: "pl-[0px] md:pl-[38px] pt-6 md:pt-12 w-full", children: navList.map(({ title, id, component }) => /* @__PURE__ */ jsx("section", { children: pathname.split("/").at(-1) === id && component(title) }, id)) }) : /* @__PURE__ */ jsx("div", { className: "w-full h-[500px] flex-center flex-col justify-center", children: /* @__PURE__ */ jsx(FileUploader, { setActiveUploaderFile }) })
      ] }),
      +dirs[2] === 1 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-center w-full gap-4 mt-6 md:pl-44", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => exportFile(),
            className: "group bg-gray-400 text-white py-[15px] px-[19px] text-base uppercase flex items-center justify-center gap-5",
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-[30px] h-[30px] group-hover:translate-y-1 transition-all",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    }
                  )
                }
              ),
              "ВЫГРУЗИТЬ В EXCEL"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => changeShowUploadFile(),
            className: "group bg-gray-400 text-white py-[15px] px-[19px] text-base uppercase flex items-center justify-center gap-5",
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-[30px] h-[30px] group-hover:translate-y-1 transition-all",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    }
                  )
                }
              ),
              "ЗАГРУЗИТЬ ДАННЫЕ"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Admin as default
};
