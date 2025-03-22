import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { E as EquipmentBanner } from "./EquipmentBanner-BBTahqeQ.js";
import { A as Advantages } from "./Advantages-CW1EK6O8.js";
import { S as SliderPage, P as Partners } from "./SliderPage-CI8vh2HL.js";
import { T as Title, a as changeItemId, v as SeoBlock, F as Footer } from "../entry-server.js";
import { s as slidesMain, a as slidesSub, b as sliderTextSub } from "./data-C21Hc6VP.js";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { O as Objects } from "./Objects-B9UJOdfR.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "clsx";
import "tailwind-merge";
import "lucide-react";
const list = [
  {
    title: `ПРЕДПРОДАЖНАЯ 
ПОДГОТОВКА`,
    text: `Подтверждаем максимальное соответствие
параметров вентагрегатов проектным значениям.`
  },
  {
    title: `ОКРАСКА В ЛЮБОЙ ЦВЕТ`,
    // subTitle: "В ЛЮБОЙ ЦВЕТ",
    text: `По желанию клиента мы окрашиваем
вентиляционный агрегат в любой цвет
по каталогу RAL. Тип окраски: шагрень, глянец, матовый.`
    // subtext: "Тип окраски: шагрень, глянец, матовый.",
  },
  {
    title: `СЕРТИФИЦИРОВАННЫЙ
ПРОДУКТ`,
    text: `Все выпускаемое оборудование 
имеет сертификаты соответствия
 и другие разрешительные документы.`
  }
];
function Points() {
  return /* @__PURE__ */ jsx("section", { className: "container py-8 md:py-10 lg:py-16  mt-0 px-5 xs:px-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 xl:gap-4", children: list.map((item, i) => /* @__PURE__ */ jsxs("article", { className: "relative xl:w-[300px] 2xl:w-[420px]", children: [
    /* @__PURE__ */ jsx("span", { className: "bg-gray-400 w-3 h-3 md:w-[15px] md:h-[15px] block" }),
    /* @__PURE__ */ jsx(
      Title,
      {
        text: item.title,
        className: `mt-3 md:mt-[15px] font-normal text-xl 
                md:text-2xl leading-[1.3] md:leading-[30.6px] ${item.subTitle ? "mb-0" : "mb-4 md:mb-[30px]"}`
      }
    ),
    item.subTitle && /* @__PURE__ */ jsx(
      Title,
      {
        text: item.subTitle,
        className: "mb-4 md:mb-[30px] font-normal text-xl md:text-2xl leading-[1.3] md:leading-[30.6px]"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-400 whitespace-pre-line max-w-[400px]", children: item.text }),
    item.subtext && /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-400 mt-2", children: item.subtext })
  ] }, i)) }) });
}
function AboutCompany({ company }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  };
  scrollTop();
  useEffect(() => {
    dispatch(changeItemId(null));
  }, [pathname]);
  document.body.style.overflowY = "auto";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SeoBlock,
      {
        title: company.about_page_title,
        description: company.about_hidden_seo_text,
        url: "https://new.recensa.ru/about"
      }
    ),
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: company.about_page_title }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: company.about_page_description }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: company.about_page_keywords }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: company.about_page_title }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://new.recensa.ru/about" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://new.recensa.ru/about" })
    ] }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(
        EquipmentBanner,
        {
          bannerImg: "/img/newbanner_about.png",
          placeholderSrc: "/img/newbanner_about_compress.png",
          title: "о компании",
          subtitle: "recensa",
          text: company.about_main_screen,
          textSize: "text-lg",
          about: true
        }
      ),
      /* @__PURE__ */ jsx(Objects, { about: true }),
      /* @__PURE__ */ jsx(
        SliderPage,
        {
          title: "о компании",
          subTitle: "Recensa: ваш стратегический партнер в реализации масштабных проектов.",
          text: company.about_unique_screen,
          slides: slidesMain
        }
      ),
      /* @__PURE__ */ jsx(
        SliderPage,
        {
          title: "производство",
          subTitle: "СОБСТВЕННОЕ ПРОИЗВОДСТВО",
          text: sliderTextSub,
          slides: slidesSub,
          second: true
        }
      ),
      /* @__PURE__ */ jsx(Points, {}),
      /* @__PURE__ */ jsx(Advantages, {}),
      /* @__PURE__ */ jsx(Partners, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AboutCompany as default
};
