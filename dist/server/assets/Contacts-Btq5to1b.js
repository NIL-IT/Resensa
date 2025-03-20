import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { a as changeItemId, B as Button, c as changeShowPopup } from "../entry-server.js";
import { F as Footer } from "./Footer-COUjKbhr.js";
import { useDispatch } from "react-redux";
import { S as SeoBlock } from "./SeoBlock-CuK8FUQ-.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "clsx";
import "tailwind-merge";
import "lucide-react";
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
  return /* @__PURE__ */ jsxs("section", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(
      SeoBlock,
      {
        url: "https://new.recensa.ru/contact",
        description: company.contacts_hidden_seo_text,
        title: company.contacts_page_title
      }
    ),
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: company.contacts_page_title }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: company.contacts_page_description }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: company.contacts_page_keywords }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: company.contacts_page_title }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://new.recensa.ru/contact" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://new.recensa.ru/contact" })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        itemScope: true,
        itemType: "http://schema.org/Organization",
        className: "hidden",
        children: [
          /* @__PURE__ */ jsx("meta", { itemProp: "name", content: "ООО РЕСЕНСА" }),
          /* @__PURE__ */ jsx("meta", { itemProp: "telephone", content: "+7 999 999 99 99" }),
          /* @__PURE__ */ jsx("meta", { itemProp: "email", content: "office@recensa.ru" }),
          /* @__PURE__ */ jsx("meta", { itemProp: "address", content: "г. Москва, ул. Примерная, д. 1" }),
          /* @__PURE__ */ jsx("meta", { itemProp: "logo", content: "/icon/logo.svg" }),
          /* @__PURE__ */ jsx("meta", { itemProp: "image", content: "/img/newbanner_about.png" }),
          /* @__PURE__ */ jsx(
            "meta",
            {
              itemProp: "description",
              content: "Бренд RECENSA ориентирован на создание новой производственной базы, а также на поставку вентиляционного оборудования под собственной торговой маркой."
            }
          ),
          /* @__PURE__ */ jsx(
            "meta",
            {
              itemProp: "legalName",
              content: "ООО РЕСЕНСА - производство и поставка вентиляционного оборудования"
            }
          ),
          /* @__PURE__ */ jsx("link", { itemProp: "url", href: "https://new.recensa.ru/api/contact" }),
          /* @__PURE__ */ jsx("meta", { itemProp: "sameAs", content: "#" }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              itemProp: "aggregateRating",
              itemScope: true,
              itemType: "https://schema.org/AggregateRating",
              children: [
                /* @__PURE__ */ jsx("meta", { itemProp: "worstRating", content: "1" }),
                /* @__PURE__ */ jsx("meta", { itemProp: "bestRating", content: "5" }),
                /* @__PURE__ */ jsx("meta", { itemProp: "ratingValue", content: "5" }),
                /* @__PURE__ */ jsx("meta", { itemProp: "ratingCount", content: "1064" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-4 xs:py-5 sm:py-6 flex-grow border-b border-b-gray-400", children: [
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
                children: /* @__PURE__ */ jsxs("a", { className: "pointer-events: none", title: "Подраздел уровня 1", children: [
                  /* @__PURE__ */ jsx("span", { itemProp: "name", children: "Контакты" }),
                  /* @__PURE__ */ jsx("meta", { itemProp: "position", content: "1" }),
                  /* @__PURE__ */ jsx("meta", { itemProp: "item", content: "https://example.com/contacts" })
                ] })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl xs:text-3xl sm:text-4xl font-medium text-gray-400 mb-6 xs:mb-7 sm:mb-8", children: "Контакты" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 xs:space-y-5 sm:space-y-6", children: [
          /* @__PURE__ */ jsx(
            "h3",
            {
              itemProp: "address",
              itemScope: true,
              itemType: "http://schema.org/PostalAddress",
              className: "text-lg xs:text-xl font-medium text-gray-400 mb-3 xs:mb-4",
              children: "Адрес"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 xs:space-y-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                itemProp: "email",
                target: "_blank",
                href: "mailto:office@recensa.ru",
                className: "block text-sm xs:text-base text-gray-400 hover:text-gray-600 transition-colors",
                children: "office@recensa.ru"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                itemProp: "telephone",
                target: "_blank",
                href: "tel:+73832092088",
                className: "block text-sm xs:text-base text-gray-400 hover:text-gray-600 transition-colors",
                children: "+7 383 209 20 88"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 xs:gap-4 py-4 xs:py-5 sm:py-6", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  target: "_blank",
                  href: "#",
                  className: "hover:opacity-80 transition-opacity",
                  children: /* @__PURE__ */ jsx(
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
              /* @__PURE__ */ jsx(
                "a",
                {
                  target: "_blank",
                  href: "#",
                  className: "hover:opacity-80 transition-opacity",
                  children: /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsxs("div", { className: "mt-6 lg:mt-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg xs:text-xl font-medium text-gray-400 mb-3 xs:mb-4", children: "Реквизиты компании:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 xs:space-y-3 text-sm xs:text-base text-gray-400", children: [
            /* @__PURE__ */ jsx("p", { children: 'ООО "РЕСЕНСА"' }),
            /* @__PURE__ */ jsx("p", { children: "ИНН: 1234567890" }),
            /* @__PURE__ */ jsx("p", { children: "КПП: 123456789" }),
            /* @__PURE__ */ jsx("p", { children: "ОГРН: 1234567890123" }),
            /* @__PURE__ */ jsx("p", { className: "break-words", children: "Юридический адрес: г. Москва, ул. Примерная, д. 1" }),
            /* @__PURE__ */ jsx("p", { className: "break-words", children: "Фактический адрес: г. Москва, ул. Примерная, д. 1" }),
            /* @__PURE__ */ jsx("p", { children: "Р/с: 12345678901234567890" }),
            /* @__PURE__ */ jsx("p", { children: "К/с: 12345678901234567890" }),
            /* @__PURE__ */ jsx("p", { children: "БИК: 123456789" }),
            /* @__PURE__ */ jsx("p", { children: 'Банк: ПАО "Примербанк"' })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Contacts as default
};
