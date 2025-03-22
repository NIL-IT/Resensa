import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { E as EquipmentBanner } from "./EquipmentBanner-BBTahqeQ.js";
import { I as ItemsList } from "./ItemsList-QUHiM5Dy.js";
import { O as Objects } from "./Objects-CDlL8oTl.js";
import { a as changeItemId, v as SeoBlock, F as Footer } from "../entry-server.js";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "@react-three/fiber";
import "@react-three/drei";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "clsx";
import "tailwind-merge";
import "lucide-react";
function Equipment({
  company,
  data,
  bannerImg,
  title,
  text,
  placeholderSrc
}) {
  const { pathname } = useLocation();
  const { equipment, solutions } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeItemId(null));
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, [pathname]);
  document.body.style.overflowY = "auto";
  const isEquipment = pathname.split("/")[1] === "equipment";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SeoBlock,
      {
        url: company.url,
        title: company.page_title,
        description: company.hidden_seo_text
      }
    ),
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: company.page_title }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: company.page_description }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: company.page_keywords }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: company.page_title }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: company.url }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: company.url })
    ] }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(
        EquipmentBanner,
        {
          bannerImg,
          title,
          text,
          subtitle: "recensa",
          isButton: true,
          placeholderSrc
        }
      ),
      /* @__PURE__ */ jsx(
        ItemsList,
        {
          equipment: isEquipment,
          list: data,
          limited: false,
          title
        }
      ),
      /* @__PURE__ */ jsx(Objects, { className: "mt-[20px]" })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Equipment as default
};
