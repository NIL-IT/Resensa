import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { useNavigate, Link } from "react-router-dom";
import "js-cookie";
import { B as Button } from "./Button-ZmIELfDU.js";
import { useDispatch, useSelector } from "react-redux";
import { c as changeShowPopup, K as changeRoutingToOrders, O as changeEquipmentId, M as changeSolutionsId } from "../entry-server.js";
const cyrillicToLatin = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
  А: "A",
  Б: "B",
  В: "V",
  Г: "G",
  Д: "D",
  Е: "E",
  Ё: "E",
  Ж: "Zh",
  З: "Z",
  И: "I",
  Й: "Y",
  К: "K",
  Л: "L",
  М: "M",
  Н: "N",
  О: "O",
  П: "P",
  Р: "R",
  С: "S",
  Т: "T",
  У: "U",
  Ф: "F",
  Х: "Kh",
  Ц: "Ts",
  Ч: "Ch",
  Ш: "Sh",
  Щ: "Shch",
  Ъ: "",
  Ы: "Y",
  Ь: "",
  Э: "E",
  Ю: "Yu",
  Я: "Ya"
};
function useLatinFormat(text) {
  return text.split("").map((char) => cyrillicToLatin[char] || char).join("").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
const navList = [
  { name: "Главная", path: "/" },
  { name: "Оборудование", path: "/equipment" },
  { name: "Решения", path: "/solutions" },
  { name: "О компании", path: "/about" },
  { name: "Заказы", path: `/admin/1` },
  { name: "Контакты", path: "/contact" }
];
function Footer({ scrollTop = null }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAdmin, equipment } = useSelector(({ user }) => user);
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const handleClickLink = async (i, path) => {
    if (!isAdmin && +i == 4) {
      await dispatch(changeRoutingToOrders(true));
      dispatch(changeEquipmentId(equipment[0]));
      dispatch(changeSolutionsId(null));
      return navigate(`/equipment/${useLatinFormat(equipment[0].name)}`);
    }
    if (!isAdmin) {
      navigate(path);
      if (scrollTop) scrollTop();
      if (i === 4) {
        dispatch(changeRoutingToOrders(true));
      } else {
        dispatch(changeRoutingToOrders(false));
      }
    }
  };
  return /* @__PURE__ */ jsxs("footer", { className: "pl-5 xs:pl-0 container py-[51px] xs:py-[56px] sm:py-[60px] md:py-[70px] lg:py-[75px] xl:py-[80px] 2xl:py-[82px] 3xl:py-[85px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 relative", children: [
    /* @__PURE__ */ jsxs("span", { itemScope: true, itemType: "https://schema.org/WPFooter", className: "hidden", children: [
      /* @__PURE__ */ jsx("meta", { itemProp: "copyrightYear", content: "2025" }),
      /* @__PURE__ */ jsx("meta", { itemProp: "copyrightHolder", content: "Recensa" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-5 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => {
              if (scrollTop) scrollTop();
            },
            className: "cursor-pointer",
            children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/",
                target: isAdmin ? "_blank" : "_self",
                className: "max-w-[200px] xs:max-w-[210px] sm:max-w-[220px] md:max-w-[230px] lg:max-w-[240px] xl:max-w-[245px] 2xl:max-w-[247px] 3xl:max-w-[249px] max-h-[35px] xs:max-h-[36px] sm:max-h-[38px] md:max-h-[39px] lg:max-h-[40px] xl:max-h-[41px] 2xl:max-h-[41px] 3xl:max-h-[42px] mb-3 xs:mb-3.5 sm:mb-4 md:mb-4.5 lg:mb-5",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/icon/logo.svg",
                    alt: "Логотип",
                    title: "Нажмите, чтобы вернуться на главную страницу"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("h5", { className: "text-gray-900 text-sm xs:text-sm sm:text-base", children: "copyright" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "order-3 lg:order-2", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col sm:flex-row gap-8 xs:gap-10 sm:gap-[40px] md:gap-[45px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[56px] 3xl:gap-[58px]", children: /* @__PURE__ */ jsx(
        "menu",
        {
          itemScope: true,
          itemType: "http://schema.org/SiteNavigationElement",
          className: "flex flex-col gap-3 xs:gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-5 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl",
          children: navList.map(({ name, path }, i) => /* @__PURE__ */ jsx(
            "li",
            {
              className: `text-gray-400 hover:text-gray-300 cursor-pointer ${isAdmin && i === 4 && "hidden"}`,
              onClick: () => handleClickLink(i, path),
              children: isAdmin ? /* @__PURE__ */ jsx(
                Link,
                {
                  target: "_blank",
                  to: `https://new.recensa.ru${path}`,
                  itemProp: "url",
                  children: name
                }
              ) : /* @__PURE__ */ jsx(Link, { itemProp: "url", children: name })
            },
            i
          ))
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: "flex flex-col gap-[15px] xs:gap-[18px] sm:gap-[20px] md:gap-[22px] lg:gap-[24px] xl:gap-[25px] 2xl:gap-[25px] 3xl:gap-[26px] order-2 lg:order-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:justify-end *:flex *:lg:justify-end text-gray-400 text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-normal", children: [
        /* @__PURE__ */ jsx("p", { children: "Адрес" }),
        /* @__PURE__ */ jsx("a", { target: "_blank", href: "mailto:office@recensa.ru", children: "office@recensa.ru" }),
        /* @__PURE__ */ jsx("a", { target: "_blank", href: "tel:+73832092088", children: "+7 383 209 20 88" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-[10px] lg:justify-end", children: [
        /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: "/icon/telegram.svg", alt: "telegram", title: "Телеграмм" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: "/icon/wa.svg", alt: "whatsapp", title: "Ватсап" }) })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          noLink: true,
          onClick: () => handleChangeShowPopup(true),
          text: "заказать звонок",
          className: "bg-white border border-gray-400 text-gray-400 text-xs font-normal py-2.5 xs:py-2.5 sm:py-3 px-[20px] xs:px-[22px] sm:px-[25px] md:px-[27px] lg:px-[30px] flex lg:justify-end hover:border-gray-200 hover:bg-gray-50 w-fit lg:w-auto lg:ml-auto"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 xs:bottom-3.5 sm:bottom-4 md:bottom-4.5 lg:bottom-5 right-0 w-[120px] xs:w-[130px] sm:w-[140px] md:w-[145px] lg:w-[150px] xl:w-[153px] 2xl:w-[154px] 3xl:w-[156px] h-[20px] xs:h-[22px] sm:h-[24px] md:h-[25px] lg:h-[26px] xl:h-[26px] 2xl:h-[26px] 3xl:h-[27px]", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/img/nil.png",
        alt: "nill",
        title: "Компания разработающая сайт"
      }
    ) })
  ] });
}
export {
  Footer as F,
  useLatinFormat as u
};
