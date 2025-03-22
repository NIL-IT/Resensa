import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { O as Objects } from "./Objects-CLM3upUK.js";
import { Helmet } from "react-helmet-async";
import "clsx";
import { t as cn, B as Button, c as changeShowPopup, T as Title, q as useLatinFormat, a as changeItemId, v as SeoBlock, R as ROUTES, F as Footer } from "../entry-server.js";
import { useDispatch } from "react-redux";
import { A as Advantages } from "./Advantages-CW1EK6O8.js";
import { I as ItemsList } from "./ItemsList-QUHiM5Dy.js";
import { s as slidesMain } from "./data-C21Hc6VP.js";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { S as SliderPage, P as Partners } from "./SliderPage-CI8vh2HL.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "@reduxjs/toolkit";
import "axios";
import "tailwind-merge";
import "lucide-react";
const imgPlaceholder = "/img/banner_main_placeholder.png";
const imgMain = "/img/banner_main.png";
function MainTitle({ text, className = "", itemProp = "" }) {
  return /* @__PURE__ */ jsx(
    "h2",
    {
      itemProp,
      className: cn("text-[48px] text-gray-400 uppercase", className),
      children: text
    }
  );
}
function Banner({ banner }) {
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const [imageSrc, setImageSrc] = useState(imgPlaceholder);
  useEffect(() => {
    const img = new Image();
    img.src = imgMain;
    img.onload = () => {
      setImageSrc(imgMain);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "pl-5 xs:pl-0 container \r\n      pt-[40px] xs:pt-[45px] sm:pt-[50px] md:pt-[90px] lg:pt-[118px] xl:pt-[120px] 2xl:pt-[122px] 3xl:pt-[125px] \r\n    pb-[35px] xs:pb-[40px] sm:pb-[45px] md:pb-[75px] lg:pb-[102px] xl:pb-[105px] 2xl:pb-[108px] 3xl:pb-[110px]\r\n    ",
      children: [
        /* @__PURE__ */ jsx(
          MainTitle,
          {
            className: "border-b border-gray-400 pb-[20px] xs:pb-[23px] sm:pb-[25px] md:pb-[28px] \r\n        lg:pb-[30px] xl:pb-[31px] 2xl:pb-[32px] 3xl:pb-[33px]\r\n        text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[48px] sm:leading-[40px] md:leading-[50px] lg:leading-[72px]",
            text: "производство и поставка вентиляционного оборудования высокого класса"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-center flex-col lg:flex-row justify-between mt-3 xs:mt-3.5 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 3xl:mt-4 gap-6 xs:gap-7 sm:gap-8 lg:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-6 xs:gap-7 sm:gap-8 md:gap-[60px] lg:gap-[70px] xl:gap-[75px] 2xl:gap-[80px] 3xl:gap-[88px]", children: [
            /* @__PURE__ */ jsxs("div", { className: " xs:gap-5 block md:w-[290px] xl:w-[312px]", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-[28px] xs:text-[30px] sm:text-[32px] md:text-[42px] lg:text-[44px] xl:text-[45px] 2xl:text-[46px] \r\n            3xl:text-[48px] text-gray-400 min-w-[auto] sm:min-w-[300px]",
                  children: banner.first_value || "22"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-base xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl\r\n             text-gray-300 xs:text-start text-left ",
                  children: banner.first_value_string || `года опыта на рынке
вентиляционного оборудования`
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "block xs:gap-5  md:w-[280px] xl:w-[312px]", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-[28px] xs:text-[30px] sm:text-[32px] \r\n            md:text-[42px] lg:text-[44px] xl:text-[45px] 2xl:text-[46px] \r\n            3xl:text-[48px] text-gray-400 xs:w-[34px] sm:w-[36px] md:w-[48px] lg:w-[50px] xl:w-[auto] min-w-[auto] sm:min-w-[300px]",
                  children: banner.second_value || `3`
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-base xs:text-base sm:text-lg md:text-xl lg:text-xl\r\n             xl:text-xl 2xl:text-xl 3xl:text-xl text-gray-300 xs:text-start text-left",
                  children: banner.second_value_string || `года гарантии
на продукцию компании.`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mr-5 xs:mr-0", children: /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => handleChangeShowPopup(true),
              className: " py-[16px] xs:py-[17px] sm:py-[18px] md:py-[26px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] px-4 xs:px-5 sm:px-6 md:pr-[26px] md:pl-6 w-full xs:w-full sm:w-full md:w-[332px] h-[56px] xs:h-[58px] sm:h-[60px] md:h-[76px] lg:h-[76px] xl:h-[76px] 2xl:h-[76px] 3xl:h-[76px] text-sm xs:text-sm sm:text-base",
              icon: true,
              text: "Получить консультацию"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mr-5 xs:mr-0 flex justify-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: `${imageSrc === imgPlaceholder ? "loading" : "loaded"}
          w-[80%] mt-[35px] xs:mt-[40px] sm:mt-[45px] md:mt-[75px] lg:mt-[85px] 
          xl:mt-[95px] 2xl:mt-[100px] 3xl:mt-[105px]
          `,
            src: imageSrc,
            alt: "banner",
            title: "Banner"
          }
        ) })
      ]
    }
  );
}
function News({ news }) {
  useDispatch();
  const [isLimited, setLimited] = useState(true);
  const [newsData, setNewsData] = useState(news);
  useEffect(() => {
    setNewsData(news);
  }, [news]);
  useEffect(() => {
    if (!isLimited) {
      setNewsData(news);
    } else {
      setNewsData(newsData.slice(0, 6));
    }
  }, [isLimited]);
  const showNewsPopup = (id) => {
  };
  const handleClick = () => {
    setLimited(false);
    setNewsData(news);
  };
  return newsData.length ? /* @__PURE__ */ jsxs(
    "section",
    {
      itemScope: true,
      itemType: "http://schema.org/Blog",
      className: `
        container pt-[35px] md:pt-[40px] lg:pt-[50px] xl:pt-[60px] 2xl:pt-[70px] 3xl:pt-[80px] 
       ${newsData.length > 6 ? "pb-16" : "pb-16"}`,
      children: [
        /* @__PURE__ */ jsx(
          Title,
          {
            itemProp: "description",
            text: "новости",
            className: "ml-5  xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center  w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex-center flex-col mx-auto justify-center   md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1178px]", children: [
          /* @__PURE__ */ jsx("div", { className: "grid  grid-cols-1  lg:grid-cols-2  2xl:grid-cols-3 gap-8", children: newsData.map((item) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/news/${useLatinFormat(item.title)}`,
              itemProp: "blogPosts",
              itemScope: true,
              itemType: "http://schema.org/BlogPosting",
              onClick: () => showNewsPopup(item.id),
              className: "group flex flex-col  w-[300px] xs:w-[320px] sm:w-[340px] md:w-[350px] lg:w-[360px] xl:w-[365px] 2xl:w-[368px] 3xl:w-[370px] \r\n                h-[430px] xs:h-[455px] sm:h-[460px] md:h-[470px] lg:h-[490px] xl:h-[505px] 2xl:h-[510px] 3xl:h-[520px] \r\n                gradient \r\n                mb-[25px] xs:mb-[28px] sm:mb-[30px] md:mb-[32px] lg:mb-[34px] xl:mb-[35px] 2xl:mb-[36px] 3xl:mb-[37px] \r\n                px-[20px] xs:px-[22px] sm:px-[24px] md:px-[26px] lg:px-[27px] xl:px-[28px] 2xl:px-[28px] 3xl:px-[29px] \r\n                py-[15px] xs:py-[16px] sm:py-[17px] md:py-[18px] lg:py-[19px] xl:py-[19px] 2xl:py-[19px] 3xl:py-[20px] \r\n                cursor-pointer",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    itemProp: "image",
                    className: "object-cover min-h-[250px] w-[260px] xs:min-h-[265px] xs:w-[275px] sm:min-h-[260px] sm:w-[290px] md:min-h-[260px] md:w-[300px] lg:min-h-[270px] lg:w-[310px] xl:h-[280px] xl:w-[315px] 2xl:min-h-[290px] 2xl:w-[318px]  3xl:min-w-[320px] ",
                    src: item.image,
                    alt: item.title,
                    title: item.title
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: " flex flex-col justify-between h-full pt-2", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        itemProp: "headline",
                        className: "text-white  text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl leading-[22px] xs:leading-[23px] sm:leading-[24px] md:leading-[25px] lg:leading-[25.5px]",
                        children: item.title
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "meta",
                      {
                        itemProp: "datePublished",
                        content: item.date.replaceAll("/", ".")
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "meta",
                      {
                        itemProp: "description",
                        content: `${item.text.replace(/<[^>]*>/g, "")}`
                      }
                    ),
                    /* @__PURE__ */ jsx("meta", { itemProp: "author", content: "Resenca" }),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        itemProp: "publisher",
                        itemScope: true,
                        itemType: "https://schema.org/Organization",
                        className: "hidden",
                        children: [
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              itemProp: "logo",
                              itemScope: true,
                              itemType: "https://schema.org/ImageObject",
                              children: /* @__PURE__ */ jsx("img", { itemProp: "url image", src: "/logo.svg" })
                            }
                          ),
                          /* @__PURE__ */ jsx("meta", { itemProp: "name", content: "Recensa" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "meta",
                      {
                        itemProp: "dateModified",
                        content: `${item.date.replaceAll("/", ".")}`
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "meta",
                      {
                        itemScope: true,
                        itemProp: "mainEntityOfPage",
                        itemType: "https://schema.org/WebPage",
                        itemID: "https://new.recensa.ru/"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "pt-[10px] xs:pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] pb-3 xs:pb-3.5 sm:pb-4 md:pb-4.5 lg:pb-5", children: /* @__PURE__ */ jsx("span", { className: "text-gray-800 text-sm xs:text-sm sm:text-base", children: item.date.replaceAll("/", ".") }) }),
                    /* @__PURE__ */ jsxs("button", { className: "flex-center gap-3 group-hover:gap-4 transition-all", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white text-base xs:text-base sm:text-lg font-normal", children: "Читать" }),
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "/icon/sm_arrow.svg",
                          alt: "arrow",
                          title: "Нажмите чтобы посмотреть новость"
                        }
                      )
                    ] })
                  ] })
                ] })
              ]
            },
            item.id
          )) }),
          isLimited && news.length > 6 && /* @__PURE__ */ jsx("div", { className: "flex justify-center w-[300px] sm:w-[350px] lg:w-[756px] xl:w-[766px] 2xl:w-full", children: /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => handleClick(),
              text: "смотреть все новости",
              className: "w-full py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] bg-white border border-gray-400 text-gray-400 text-sm xs:text-sm sm:text-base hover:bg-gray-50 hover:border-gray-200"
            }
          ) })
        ] }) })
      ]
    }
  ) : /* @__PURE__ */ jsx(Fragment, {});
}
function Home({ equipment, solutions, banner, news, company }) {
  const { pathname } = useLocation();
  const isNavigateNews = Cookies.get("news_nav") === "1";
  const dispatch = useDispatch();
  const scrollToOrders = () => {
    setTimeout(() => {
      const widthPage = document.querySelector("body").offsetWidth;
      const heightPage = document.querySelector("body").offsetHeight;
      let scrollPosition;
      if (widthPage > 1600) scrollPosition = 2500;
      else if (widthPage > 1280) scrollPosition = 2545;
      else if (widthPage > 768) scrollPosition = 2927;
      else if (widthPage > 640) scrollPosition = 3870;
      else if (widthPage > 420) scrollPosition = 3897;
      else if (widthPage > 375) scrollPosition = 3973;
      else scrollPosition = 3900;
      let scroll = heightPage - scrollPosition;
      window.scrollTo({
        top: scroll,
        left: 0,
        behavior: "smooth"
      });
      Cookies.set("news_nav", "0", { expires: 1 });
    }, 30);
  };
  const scrollTop = () => {
    if (isNavigateNews) {
      scrollToOrders();
    } else {
      window.scrollTo({
        top: 0,
        left: 0
      });
    }
  };
  useEffect(() => {
    scrollTop();
    dispatch(changeItemId(null));
  }, [pathname]);
  document.body.style.overflowY = "auto";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SeoBlock,
      {
        description: company.main_hidden_seo_text,
        title: company.main_page_title,
        url: "https://new.recensa.ru/"
      }
    ),
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: company.main_page_title }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: company.main_page_description }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: company.main_page_title }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://new.recensa.ru/" }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: company.main_page_keywords }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://new.recensa.ru/" })
    ] }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Banner, { banner }),
      /* @__PURE__ */ jsx(Advantages, {}),
      /* @__PURE__ */ jsx(
        ItemsList,
        {
          equipment: true,
          title: "Оборудование",
          list: equipment,
          href: ROUTES.EQUIPMENT
        }
      ),
      /* @__PURE__ */ jsx(ItemsList, { equipment: false, list: solutions, href: ROUTES.SOLUTIONS }),
      /* @__PURE__ */ jsx(
        SliderPage,
        {
          title: "о компании",
          subTitle: "Recensa: ваш стратегический партнер в реализации масштабных проектов.",
          text: company.about_unique_screen,
          slides: slidesMain
        }
      ),
      /* @__PURE__ */ jsx(News, { news }),
      /* @__PURE__ */ jsx(Partners, {}),
      /* @__PURE__ */ jsx(Objects, { className: "mt-[0px]" })
    ] }),
    /* @__PURE__ */ jsx(Footer, { scrollTop })
  ] });
}
export {
  Home as default
};
