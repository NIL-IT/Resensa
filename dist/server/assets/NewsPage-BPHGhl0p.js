import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { u as useLatinFormat, F as Footer } from "./Footer-CueotjOU.js";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet-async";
import { S as SeoBlock } from "./SeoBlock-CuK8FUQ-.js";
import "./Button-ZmIELfDU.js";
import "clsx";
import "tailwind-merge";
import "react-redux";
import "../entry-server.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "@reduxjs/toolkit";
import "axios";
function NewsPage({ news }) {
  const [findNews, setFindNews] = useState();
  const { pathname } = useLocation();
  const newsName = pathname.split("/")[2];
  useEffect(() => {
    if (!newsName || !news) return;
    const findNews2 = news.filter(
      ({ title }) => useLatinFormat(title.toLowerCase()).includes(newsName.toLowerCase())
    );
    setFindNews(findNews2[0]);
  }, []);
  const handleNavigateNews = () => {
    Cookies.set("news_nav", "1", { expires: 1 });
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  };
  useEffect(() => {
    scrollTop();
  }, [pathname]);
  document.body.style.overflowY = "auto";
  const getCanonicalUrl = () => {
    if (!findNews) return null;
    return `https://new.recensa.ru/news/${newsName}`;
  };
  return findNews ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SeoBlock,
      {
        url: getCanonicalUrl(),
        title: findNews.page_title,
        description: findNews.hidden_seo_text
      }
    ),
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: findNews.page_title }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: findNews.page_description }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: findNews.page_title }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: getCanonicalUrl() }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: findNews.page_keywords }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: getCanonicalUrl() })
    ] }),
    /* @__PURE__ */ jsxs(
      "article",
      {
        itemScope: true,
        itemType: "http://schema.org/Article",
        className: `
              container py-[35px] md:py-[40px] lg:py-[50px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[80px] 
           `,
        children: [
          /* @__PURE__ */ jsx("nav", { className: "mb-4 xs:mb-5 sm:mb-6", children: /* @__PURE__ */ jsxs(
            "ul",
            {
              itemScope: true,
              itemType: "http://schema.org/BreadcrumbList",
              className: "flex items-center gap-1 xs:gap-2 text-xs xs:text-sm text-gray-400",
              children: [
                /* @__PURE__ */ jsx(
                  "li",
                  {
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "http://schema.org/ListItem",
                    className: "hover:text-gray-600 transition-colors",
                    children: /* @__PURE__ */ jsxs("a", { title: "Основной раздел", href: "/", children: [
                      /* @__PURE__ */ jsx("span", { itemProp: "name", children: "Главная" }),
                      /* @__PURE__ */ jsx("meta", { itemProp: "position", content: "0" }),
                      /* @__PURE__ */ jsx("meta", { itemProp: "item", content: "https://example.com/" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: ">" }),
                /* @__PURE__ */ jsx(
                  "li",
                  {
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "http://schema.org/ListItem",
                    className: "cursor-pointer",
                    children: /* @__PURE__ */ jsxs(
                      "a",
                      {
                        title: "Подраздел уровня 1",
                        onClick: () => handleNavigateNews(),
                        href: "/",
                        children: [
                          /* @__PURE__ */ jsx("span", { itemProp: "name", children: "Новости" }),
                          /* @__PURE__ */ jsx("meta", { itemProp: "position", content: "1" }),
                          /* @__PURE__ */ jsx("meta", { itemProp: "item", content: "https://example.com/contacts" })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: ">" }),
                /* @__PURE__ */ jsx(
                  "li",
                  {
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "http://schema.org/ListItem",
                    children: /* @__PURE__ */ jsxs("a", { className: "pointer-events: none", title: "Подраздел уровня 2", children: [
                      /* @__PURE__ */ jsx("span", { itemProp: "name", children: findNews.title }),
                      /* @__PURE__ */ jsx("meta", { itemProp: "position", content: "1" }),
                      /* @__PURE__ */ jsx("meta", { itemProp: "item", content: "https://example.com/contacts" })
                    ] })
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("meta", { itemProp: "headline", content: "title" }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              itemProp: "name",
              className: "text-lg xs:text-xl sm:text-2xl leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[30.6px] text-gray-400 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8",
              children: findNews.title
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-center   md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1178px]", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsx(
                "meta",
                {
                  itemProp: "url",
                  content: `https://new.recensa.ru/${useLatinFormat(
                    findNews.title
                  )}`
                }
              ),
              /* @__PURE__ */ jsx(
                "meta",
                {
                  itemProp: "description",
                  content: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: findNews.text } })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  itemProp: "image",
                  itemScope: true,
                  itemType: "http://schema.org/ImageObject",
                  className: "flex justify-center w-full",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      style: {
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        objectFit: "cover"
                      },
                      itemProp: "url contentUrl",
                      content: findNews.title,
                      className: "w-[847px] h-[400px]",
                      src: findNews.image,
                      alt: findNews.title
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "meta",
                {
                  itemProp: "datePublished",
                  content: findNews.date.split("T")[0]
                }
              ),
              /* @__PURE__ */ jsx(
                "meta",
                {
                  itemProp: "dateModified",
                  content: findNews.date.split("T")[0]
                }
              ),
              /* @__PURE__ */ jsx("meta", { itemProp: "inLanguage", content: "ru-RU" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-900 text-sm xs:text-base block mt-4", children: findNews.date.split("T")[0] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  itemProp: "articleBody",
                  className: "space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8",
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "text-gray-900 text-sm xs:text-base space-y-4",
                      dangerouslySetInnerHTML: { __html: findNews.text }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  itemProp: "author",
                  itemScope: true,
                  itemType: "http://schema.org/Person"
                }
              ),
              /* @__PURE__ */ jsx("meta", { itemProp: "name", content: "Recensa" }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "hidden",
                  itemProp: "publisher",
                  itemScope: true,
                  itemType: "https://schema.org/Organization",
                  children: [
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        itemProp: "logo",
                        itemScope: true,
                        itemType: "https://schema.org/ImageObject",
                        children: [
                          /* @__PURE__ */ jsx("img", { itemProp: "url", src: "/logo.svg", alt: "Recensa" }),
                          /* @__PURE__ */ jsx("meta", { itemProp: "width", content: "200" }),
                          /* @__PURE__ */ jsx("meta", { itemProp: "height", content: "200" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("meta", { itemProp: "name", content: "Recensa" }),
                    /* @__PURE__ */ jsx("meta", { itemProp: "url", content: "https://new.recensa.ru/" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("div", { itemScope: "", itemType: "http://schema.org/Organization", children: [
              /* @__PURE__ */ jsx("meta", { itemProp: "name", content: findNews.title }),
              /* @__PURE__ */ jsx("meta", { itemProp: "description", content: "description" }),
              /* @__PURE__ */ jsx("link", { itemProp: "url", href: "https://new.recensa.ru/" }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  itemProp: "aggregateRating",
                  itemScope: true,
                  itemType: "https://schema.org/AggregateRating",
                  children: [
                    /* @__PURE__ */ jsx("meta", { itemProp: "worstRating", content: "1" }),
                    /* @__PURE__ */ jsx("meta", { itemProp: "bestRating", content: "5" }),
                    /* @__PURE__ */ jsx("meta", { itemProp: "ratingValue", content: "4.6" }),
                    /* @__PURE__ */ jsx("meta", { itemProp: "ratingCount", content: "8864" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  itemProp: "review",
                  itemType: "http://schema.org/Review",
                  itemScope: "",
                  children: /* @__PURE__ */ jsxs(
                    "div",
                    {
                      itemProp: "author",
                      itemType: "http://schema.org/Person",
                      itemScope: "",
                      children: [
                        /* @__PURE__ */ jsx("meta", { itemProp: "name", content: "Recensa" }),
                        /* @__PURE__ */ jsx(
                          "link",
                          {
                            itemProp: "url",
                            href: `https://new.recensa.ru/${useLatinFormat(
                              findNews.title
                            )}`
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) : /* @__PURE__ */ jsx(Fragment, { children: "Новости нет" });
}
export {
  NewsPage as default
};
