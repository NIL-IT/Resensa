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
import { r as reactExports, j as jsxRuntimeExports } from "./three-vendor-CLIGOdvC.js";
import { u as useDispatch, h as useLocation, a as useSelector, B as Button, c as changeShowPopup } from "./index-aArvgGxB.js";
function EquipmentBanner({
  subtitle,
  title,
  text,
  bannerImg,
  isButton = false,
  textSize,
  width = "",
  about = false,
  currentProduct,
  list,
  placeholderSrc,
  cardImg
}) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { equipmentById, solutionsById } = useSelector(({ user }) => user);
  const [loading, isLoading] = reactExports.useState(!currentProduct ? false : true);
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const [product, setProduct] = reactExports.useState(null);
  const [paddingClass, setPaddingClass] = reactExports.useState("");
  const h1Ref = reactExports.useRef(null);
  const [isProduct, setIsProduct] = reactExports.useState(pathname.split("/").length === 3);
  reactExports.useEffect(() => {
    if (!list) return;
    const filterData = list.filter(
      (item) => item.id === (equipmentById == null ? void 0 : equipmentById.id) || (solutionsById == null ? void 0 : solutionsById.id)
    );
    setProduct(filterData[0]);
    isLoading(false);
  }, [equipmentById, solutionsById]);
  let height;
  reactExports.useLayoutEffect(() => {
    if (h1Ref.current) {
      height = h1Ref.current.offsetHeight;
      if (height <= 55) {
        setPaddingClass(`pb-[50px] xs:pb-[40px] sm:pb-[20px] 
           md:pb-[80px] lg:pb-[130px]  
          xl:pb-[190px] 2xl:pb-[240px] 3xl:pb-[286px]`);
      } else {
        setPaddingClass(`pb-[15px] xs:pb-[0px] sm:pb-[20px] 
           md:pb-[65px] lg:pb-[95px]  
          xl:pb-[110px] 2xl:pb-[180px] 3xl:pb-[230px]`);
      }
    }
  }, [product]);
  const [imageSrc, setImageSrc] = reactExports.useState(
    product ? "/img/product_placeholder.png" : placeholderSrc
  );
  reactExports.useEffect(() => {
    const img = new Image();
    if (product) {
      img.src = product.image_banner;
      img.onload = () => {
        setImageSrc(product.image_banner);
      };
    } else {
      img.src = bannerImg;
      img.onload = () => {
        setImageSrc(bannerImg);
      };
    }
  }, [bannerImg]);
  const isEquipment = pathname.split("/")[1] === "equipment";
  const generatePathName = () => {
    const path = pathname.split("/").pop();
    if (path === "equipment") return "Главная—Оборудование";
    if (path === "solutions") return "Главная—Решения";
    if (path === "about") return "Главная—О компании";
    return isEquipment ? `Главная—Оборудование—${subtitle}` : `Главная—Решения—${subtitle}`;
  };
  return loading && !height ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: " bg-white w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] \r\n              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px] flex-center justify-center mt-20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loader" })
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `relative ${!about && !isProduct ? `pb-[50px] xs:pb-[30px] sm:pb-[auto] 
      md:pb-[105px] lg:pb-[160px]  
     xl:pb-[205px] 2xl:pb-[240px] 3xl:pb-[286px]` : isProduct ? paddingClass : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "container relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ul",
          {
            itemScope: true,
            itemType: "http://schema.org/BreadcrumbList",
            className: "absolute flex gap-2 top-[40px] xl:top-[60px]  text-gray-50 px-5 xs:px-0",
            children: generatePathName().split("—").map((el, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                itemProp: "itemListElement",
                itemScope: true,
                itemType: "http://schema.org/ListItem",
                className: "flex gap-2   text-sm ",
                children: [
                  i === generatePathName().split("—").length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { itemProp: "name", children: el }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "position", content: i })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      title: i == 0 ? "Основной раздел" : i == 1 ? "Подраздел уровня 1" : "Подраздел уровня 2",
                      itemProp: "item",
                      className: "pointer",
                      href: el === "Главная" ? "/" : el === "Решения" ? "/solutions" : el === "Оборудование" ? "/equipment" : el === "О компании" ? "/about" : "",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { itemProp: "name", children: [
                          " ",
                          el
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "position", content: i })
                      ]
                    }
                  ),
                  i + 1 < generatePathName().split("—").length && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ">" })
                ]
              },
              i
            ))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          __spreadProps(__spreadValues({}, isProduct ? { itemScope: true, itemType: "http://schema.org/Product" } : {}), {
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "hidden", itemProp: "name", children: [
                " ",
                subtitle || product.name
              ] }),
              isProduct && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  className: "hidden",
                  src: cardImg ? cardImg : "",
                  alt: product ? product.image_card_alt : "Карточка товара",
                  itemProp: "image",
                  title: product ? product.image_card_alt : "Карточка товара"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  className: `absolute  brightness-50 object-cover object-center top-[30px] 
          left-0 w-full    
          z-[-2] ${imageSrc === placeholderSrc ? "loading" : "loaded"} ${isProduct ? `object-contain h-[400px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]` : `
              min-w-[100%] max-w-[1920px] 
              h-[400px] sm:h-[500px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]
              max-h-[900px]`}`,
                  src: imageSrc,
                  alt: product ? product == null ? void 0 : product.image_banner_alt : isEquipment ? "Баннер оборудования" : "Баннер решений",
                  title: product ? product == null ? void 0 : product.image_banner_alt : isEquipment ? "Баннер оборудования" : "Баннер решений"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                __spreadProps(__spreadValues({}, isProduct ? {
                  itemProp: "offers",
                  itemScope: true,
                  itemType: "http://schema.org/Offer"
                } : {}), {
                  children: [
                    isProduct && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "invisible w-0 h-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "price", content: "5000" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "priceCurrency", content: "RUB" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "meta",
                        {
                          itemProp: "availability",
                          content: "https://schema.org/InStock"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `container pl-[20px] xs:pl-[0] ${isProduct && "min-h-[400px]"} ${about ? `pt-[80px] xs:pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[200px] xl:pt-[250px] 2xl:pt-[300px] 3xl:pt-[300px] 3xl:pb-[94px]` : ` ${height <= 76 ? `pt-[120px] 
          md:pt-[140px] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[200px] 3xl:pt-[250px]` : `pt-[100px] xs:pt-[100px] 
          md:pt-[130px] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[200px] 3xl:pt-[250px] `}`}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h2",
                            {
                              itemProp: "name",
                              className: "font-normal text-sm sm:text-lg leading-[22px] sm:leading-[24px] xl:text-[28px] 2xl:text-[32px] text-white md:leading-[41px] pt-[10px] md:pt-[0px]",
                              children: subtitle || product.name
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              ref: h1Ref,
                              className: "font-normal  text-lg leading-[28px] sm:text-xl  md:text-[28px]  mt-3 md:mt-0 sm:leading-[32px]  md:leading-[36px]  \r\n          xl:text-[38px] 2xl:text-[48px] xl:leading-[51px] 2xl:leading-[61px] text-white uppercase",
                              children: title || product.sub_header
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              dangerouslySetInnerHTML: { __html: text },
                              itemProp: "description",
                              className: ` text-white mt-3 mb-8 xs:mb-[40px] xs:mt-[20px] sm:mb-[30px] sm:mt-[30px]  md:mb-[40px] md:mt-[40px] 
            lg:mb-[33px] lg:mt-[20px] xl:mt-[30px] 2xl:mt-[65px] 
            ${about ? "text-sm xl:text-lg" : ""} ${width ? width : "w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"}  ${textSize ? textSize : " text-xs sm:text-sm lg:text-lg xl:text-xl"}`
                            }
                          ),
                          isButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              onClick: () => handleChangeShowPopup(true),
                              icon: true,
                              iconWidth: "w-[24px] sm:w-[30px] md:w-[38px]",
                              white: true,
                              text: "Оформить заказ",
                              className: "py-[5px] px-[10px]  sm:py-[10px]  lg:py-[14px]\r\n              xs:pl-[10px] xl:py-[19px] md:px-6 bg-white\r\n              text-gray-400 text-xs sm:text-base"
                            }
                          )
                        ]
                      }
                    )
                  ]
                })
              )
            ]
          })
        )
      ]
    }
  );
}
export {
  EquipmentBanner as E
};
