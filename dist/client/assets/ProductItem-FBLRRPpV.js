import { a as React, j as jsxRuntimeExports, r as reactExports } from "./three-vendor-CLIGOdvC.js";
import { u as useDispatch, T as Title, d as changeShowStatus, Z as changeOrderNumber, h as useLocation, E as useNavigate, a as useSelector, _ as changeRoutingToOrders, F as changeIsAdmin, g as getAllOrders, H as Helmet } from "./index-aArvgGxB.js";
import { E as EquipmentBanner } from "./EquipmentBanner-DN98hoW7.js";
import { A as Advantages } from "./Advantages-Cg3kL1zR.js";
import { I as ItemsList } from "./ItemsList-BfXoY7ER.js";
import { F as Footer } from "./Footer-CBWU0J-B.js";
import { S as SeoBlock } from "./SeoBlock-AQ0dFG9k.js";
import "./react-vendor-D_QSeeZk.js";
function OrderStatus() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const handleChange = ({ target: { value: value2 } }) => {
    setValue(value2);
  };
  const handleClickStatus = (e) => {
    e.preventDefault();
    dispatch(changeShowStatus(true));
    dispatch(changeOrderNumber(value));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "overflow-hidden bg-gray-200 py-[69px] flex-center flex-col justify-center gap-10 mt-[35px] px-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Title,
      {
        text: "вы можете проверить статус своего заказа",
        className: "text-xl font-normal text-gray-400 ml-3 sm:ml-0"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: handleClickStatus,
        className: "w-[600px] flex flex-col items-center gap-5   md:flex-row md:flex-center md:justify-center ",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              placeholder: "Номер заказа",
              onChange: handleChange,
              value,
              type: "number",
              className: "bg-white py-[18px] px-6 w-[300px] sm:w-[370px] text-base font-normal",
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "group bg-gray-400 text-white font-normal py-[15px] px-[30px] text-xs uppercase flex-center gap-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: `group-hover:translate-x-1 transition-all w-[30px]`,
                    src: "/icon/arrow.svg",
                    alt: "arrow",
                    title: "Нажмите чтобы посмотреть статус заказа"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "проверить" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function ProductDescription({ currentProduct }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container  pt-10 pb-5 lg:pt-20 lg:pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Title,
      {
        text: "описание",
        className: "ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center px-5 sm:p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: currentProduct.extra_description },
        className: "w-[1160px]"
      }
    ) })
  ] });
}
function ProductItem({ list }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { routingToOrders, isAdmin, itemId, equipmentById, solutionsById } = useSelector(({ user }) => user);
  const [prevPathname, setPrevPathname] = reactExports.useState(pathname);
  const [isFirstVisit, setIsFirstVisit] = reactExports.useState(true);
  const isEquipment = !equipmentById && !solutionsById ? true : equipmentById ? true : false;
  const [currentProduct, setCurrentProduct] = reactExports.useState(
    equipmentById ? equipmentById : solutionsById ? solutionsById : list[0]
  );
  document.body.style.overflowY = "auto";
  reactExports.useEffect(() => {
    if (!currentProduct) navigate("/");
  }, [currentProduct]);
  const scrollToOrders = () => {
    if (itemId) return;
    const widthPage = document.querySelector("body").offsetWidth;
    let scrollPosition;
    if (widthPage > 1600) scrollPosition = 0;
    else if (widthPage > 1200) scrollPosition = 0;
    else if (widthPage > 768) scrollPosition = 800;
    else if (widthPage > 640) scrollPosition = 1200;
    else if (widthPage > 420) scrollPosition = 1300;
    else if (widthPage > 375) scrollPosition = 1300;
    else scrollPosition = 1200;
    scrollPosition = document.body.scrollHeight - scrollPosition;
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "smooth"
      });
    }, 10);
  };
  reactExports.useEffect(() => {
    if (!routingToOrders) return;
    const hasVisited = localStorage.getItem("hasVisitedProduct");
    if (!hasVisited) {
      localStorage.setItem("hasVisitedProduct", "true");
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
    if (routingToOrders && !isAdmin || isFirstVisit && !isAdmin && routingToOrders) {
      scrollToOrders();
    }
    if (isFirstVisit) {
      dispatch(changeRoutingToOrders(true));
    }
  }, [routingToOrders, isAdmin, isFirstVisit]);
  reactExports.useEffect(() => {
    setCurrentProduct(
      equipmentById ? equipmentById : solutionsById ? solutionsById : list[0]
    );
  }, [pathname, equipmentById, solutionsById]);
  reactExports.useEffect(() => {
    if (itemId) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      dispatch(changeIsAdmin(null));
      return;
    }
    const prevPath = prevPathname.split("/");
    const currentPath = pathname.split("/");
    if (prevPath[1] !== currentPath[1] || prevPath[2] !== currentPath[2]) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      dispatch(changeRoutingToOrders(false));
    }
    setCurrentProduct(
      equipmentById ? equipmentById : solutionsById ? solutionsById : list[0]
    );
    setPrevPathname(pathname);
  }, [pathname, itemId]);
  const dataFetchedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getAllOrders());
  }, []);
  return list.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SeoBlock,
      {
        url: `https://new.recensa.ru/${isEquipment ? `equipment/${pathname.split("/")[2]}` : `solutions/${pathname.split("/")[2]}`}`,
        title: currentProduct.page_title,
        description: currentProduct.hidden_seo_text
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: currentProduct.page_title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: currentProduct.page_description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: currentProduct.page_keywords }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: currentProduct.page_title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:url",
          content: `https://new.recensa.ru/${isEquipment ? `equipment/${pathname.split("/")[2]}` : `solutions/${pathname.split("/")[2]}`}`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "link",
        {
          rel: "canonical",
          href: `https://new.recensa.ru/${isEquipment ? `equipment/${pathname.split("/")[2]}` : `solutions/${pathname.split("/")[2]}`}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EquipmentBanner,
        {
          list,
          currentProduct: true,
          bannerImg: currentProduct.image_banner,
          cardImg: currentProduct.image_card,
          title: currentProduct.sub_header,
          subtitle: currentProduct.name,
          text: currentProduct.header,
          isButton: true,
          width: "w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Advantages, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDescription, { currentProduct }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ItemsList,
        {
          equipment: isEquipment,
          title: "каталог",
          list,
          limited: false
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrderStatus, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
}
export {
  ProductItem as default
};
