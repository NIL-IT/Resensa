import { j as jsxRuntimeExports, H as Helmet, L as Link, R as ROUTES } from "./index-D-mRqp05.js";
import "react";
import "react-dom";
function NotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-50 top-0 left-0 min-h-screen min-w-[100vw] flex items-center justify-center bg-gray-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "404 - Страница не найдена | Recensa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Запрашиваемая страница не существует или была удалена"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "robots", content: "noindex,follow" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-9xl font-bold text-gray-800", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-600 mt-4", children: "Страница не найдена" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mt-2 mb-8", children: "Запрашиваемая страница не существует или была удалена" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: ROUTES.HOME,
          className: "inline-block px-6 py-3 bg-gray-300 text-white rounded-lg hover:bg-blue-700 transition-colors",
          children: "Вернуться на главную"
        }
      )
    ] })
  ] });
}
export {
  NotFound as default
};
