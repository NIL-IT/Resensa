import { r as reactExports, j as jsxRuntimeExports } from "./three-vendor-CLIGOdvC.js";
import { h as useLocation, a as useSelector, u as useDispatch, b as changeItemId, H as Helmet } from "./index-aArvgGxB.js";
import { E as EquipmentBanner } from "./EquipmentBanner-DN98hoW7.js";
import { I as ItemsList } from "./ItemsList-BfXoY7ER.js";
import { O as Objects } from "./Objects-Dky-h2Ov.js";
import { F as Footer } from "./Footer-CBWU0J-B.js";
import { S as SeoBlock } from "./SeoBlock-AQ0dFG9k.js";
import "./react-vendor-D_QSeeZk.js";
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
  reactExports.useEffect(() => {
    dispatch(changeItemId(null));
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, [pathname]);
  document.body.style.overflowY = "auto";
  const isEquipment = pathname.split("/")[1] === "equipment";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SeoBlock,
      {
        url: company.url,
        title: company.page_title,
        description: company.hidden_seo_text
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: company.page_title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: company.page_description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: company.page_keywords }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: company.page_title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: company.url }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: company.url })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ItemsList,
        {
          equipment: isEquipment,
          list: data,
          limited: false,
          title
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Objects, { className: "mt-[20px]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Equipment as default
};
