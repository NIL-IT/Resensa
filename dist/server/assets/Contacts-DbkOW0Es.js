import { u as useDispatch, A as useParams, b as changeItemId, j as jsxRuntimeExports, H as Helmet, B as Button, c as changeShowPopup } from "./index-D-mRqp05.js";
import { useEffect } from "react";
import { F as Footer } from "./Footer-Bz--1HgH.js";
import { S as SeoBlock } from "./SeoBlock-CwMq5h3C.js";
import "react-dom";
const Contacts = ({ company }) => {
  const dispatch = useDispatch();
  document.body.style.overflowY = "auto";
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  };
  scrollTop();
  const { pathname } = useParams();
  useEffect(() => {
    dispatch(changeItemId(null));
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SeoBlock,
      {
        url: "https://new.recensa.ru/contact",
        description: company.contacts_hidden_seo_text,
        title: company.contacts_page_title
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: company.contacts_page_title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: company.contacts_page_description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: company.contacts_page_keywords }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: company.contacts_page_title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://new.recensa.ru/contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://new.recensa.ru/contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        itemScope: true,
        itemType: "http://schema.org/Organization",
        className: "hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "name", content: "ООО РЕСЕНСА" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "telephone", content: "+7 999 999 99 99" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "email", content: "office@recensa.ru" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "address", content: "г. Москва, ул. Примерная, д. 1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "logo", content: "/icon/logo.svg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "image", content: "/img/newbanner_about.png" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "meta",
            {
              itemProp: "description",
              content: "Бренд RECENSA ориентирован на создание новой производственной базы, а также на поставку вентиляционного оборудования под собственной торговой маркой."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "meta",
            {
              itemProp: "legalName",
              content: "ООО РЕСЕНСА - производство и поставка вентиляционного оборудования"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("link", { itemProp: "url", href: "https://new.recensa.ru/api/contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "sameAs", content: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              itemProp: "aggregateRating",
              itemScope: true,
              itemType: "https://schema.org/AggregateRating",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "worstRating", content: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "bestRating", content: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "ratingValue", content: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "ratingCount", content: "1064" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-4 xs:py-5 sm:py-6 flex-grow border-b border-b-gray-400", children: [
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
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "pointer-events: none", title: "Подраздел уровня 1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { itemProp: "name", children: "Контакты" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "position", content: "1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "item", content: "https://example.com/contacts" })
                ] })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-medium text-gray-400 mb-6 xs:mb-7 sm:mb-8", children: "Контакты" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 xs:space-y-5 sm:space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              itemProp: "address",
              itemScope: true,
              itemType: "http://schema.org/PostalAddress",
              className: "text-lg xs:text-xl font-medium text-gray-400 mb-3 xs:mb-4",
              children: "Адрес"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 xs:space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                itemProp: "email",
                target: "_blank",
                href: "mailto:office@recensa.ru",
                className: "block text-sm xs:text-base text-gray-400 hover:text-gray-600 transition-colors",
                children: "office@recensa.ru"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                itemProp: "telephone",
                target: "_blank",
                href: "tel:+73832092088",
                className: "block text-sm xs:text-base text-gray-400 hover:text-gray-600 transition-colors",
                children: "+7 383 209 20 88"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 xs:gap-4 py-4 xs:py-5 sm:py-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  target: "_blank",
                  href: "#",
                  className: "hover:opacity-80 transition-opacity",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/icon/wa.svg",
                      alt: "WhatsApp",
                      title: "WhatsApp",
                      className: "w-6 xs:w-7 sm:w-8"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  target: "_blank",
                  href: "#",
                  className: "hover:opacity-80 transition-opacity",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/icon/telegram.svg",
                      alt: "Telegram",
                      title: "Telegram",
                      className: "w-6 xs:w-7 sm:w-8"
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                noLink: true,
                onClick: () => dispatch(changeShowPopup(true)),
                text: "Заказать звонок",
                className: "w-full sm:w-auto  hover:bg-gray-450"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 lg:mt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg xs:text-xl font-medium text-gray-400 mb-3 xs:mb-4", children: "Реквизиты компании:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 xs:space-y-3 text-sm xs:text-base text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'ООО "РЕСЕНСА"' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ИНН: 1234567890" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "КПП: 123456789" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ОГРН: 1234567890123" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "break-words", children: "Юридический адрес: г. Москва, ул. Примерная, д. 1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "break-words", children: "Фактический адрес: г. Москва, ул. Примерная, д. 1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Р/с: 12345678901234567890" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "К/с: 12345678901234567890" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "БИК: 123456789" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Банк: ПАО "Примербанк"' })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  Contacts as default
};
