import { h as useLocation, y as useLatinFormat, j as jsxRuntimeExports, H as Helmet, z as api } from "./index-D-mRqp05.js";
import { useState, useEffect } from "react";
import { F as Footer } from "./Footer-Bz--1HgH.js";
import { S as SeoBlock } from "./SeoBlock-CwMq5h3C.js";
import "react-dom";
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
    api.set("news_nav", "1", { expires: 1 });
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
  return findNews ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SeoBlock,
      {
        url: getCanonicalUrl(),
        title: findNews.page_title,
        description: findNews.hidden_seo_text
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: findNews.page_title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: findNews.page_description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: findNews.page_title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: getCanonicalUrl() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: findNews.page_keywords }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: getCanonicalUrl() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        itemScope: true,
        itemType: "http://schema.org/Article",
        className: `
              container py-[35px] md:py-[40px] lg:py-[50px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[80px] 
           `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mb-4 xs:mb-5 sm:mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "ul",
            {
              itemScope: true,
              itemType: "http://schema.org/BreadcrumbList",
              className: "flex items-center gap-1 xs:gap-2 text-xs xs:text-sm text-gray-400",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "li",
                  {
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "http://schema.org/ListItem",
                    className: "hover:text-gray-600 transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { title: "Основной раздел", href: "/", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { itemProp: "name", children: "Главная" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "position", content: "0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "item", content: "https://example.com/" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ">" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "li",
                  {
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "http://schema.org/ListItem",
                    className: "cursor-pointer",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        title: "Подраздел уровня 1",
                        onClick: () => handleNavigateNews(),
                        href: "/",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { itemProp: "name", children: "Новости" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "position", content: "1" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "item", content: "https://example.com/contacts" })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ">" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "li",
                  {
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "http://schema.org/ListItem",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "pointer-events: none", title: "Подраздел уровня 2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { itemProp: "name", children: findNews.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "position", content: "1" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "item", content: "https://example.com/contacts" })
                    ] })
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "headline", content: "title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              itemProp: "name",
              className: "text-lg xs:text-xl sm:text-2xl leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[30.6px] text-gray-400 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8",
              children: findNews.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex justify-center   md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1178px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "meta",
                {
                  itemProp: "url",
                  content: `https://new.recensa.ru/${useLatinFormat(
                    findNews.title
                  )}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "meta",
                {
                  itemProp: "description",
                  content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: { __html: findNews.text } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  itemProp: "image",
                  itemScope: true,
                  itemType: "http://schema.org/ImageObject",
                  className: "flex justify-center w-full",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "meta",
                {
                  itemProp: "datePublished",
                  content: findNews.date.split("T")[0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "meta",
                {
                  itemProp: "dateModified",
                  content: findNews.date.split("T")[0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "inLanguage", content: "ru-RU" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 text-sm xs:text-base block mt-4", children: findNews.date.split("T")[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  itemProp: "articleBody",
                  className: "space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-gray-900 text-sm xs:text-base space-y-4",
                      dangerouslySetInnerHTML: { __html: findNews.text }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  itemProp: "author",
                  itemScope: true,
                  itemType: "http://schema.org/Person"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "name", content: "Recensa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "hidden",
                  itemProp: "publisher",
                  itemScope: true,
                  itemType: "https://schema.org/Organization",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        itemProp: "logo",
                        itemScope: true,
                        itemType: "https://schema.org/ImageObject",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { itemProp: "url", src: "/logo.svg", alt: "Recensa" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "width", content: "200" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "height", content: "200" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "name", content: "Recensa" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "url", content: "https://new.recensa.ru/" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { itemScope: "", itemType: "http://schema.org/Organization", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "name", content: findNews.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "description", content: "description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("link", { itemProp: "url", href: "https://new.recensa.ru/" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  itemProp: "aggregateRating",
                  itemScope: true,
                  itemType: "https://schema.org/AggregateRating",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "worstRating", content: "1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "bestRating", content: "5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "ratingValue", content: "4.6" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "ratingCount", content: "8864" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  itemProp: "review",
                  itemType: "http://schema.org/Review",
                  itemScope: "",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      itemProp: "author",
                      itemType: "http://schema.org/Person",
                      itemScope: "",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "name", content: "Recensa" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Новости нет" });
}
export {
  NewsPage as default
};
