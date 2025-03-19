import { jsxs, jsx } from "react/jsx-runtime";
import "react";
const SeoBlock = ({ title, description, url }) => {
  return /* @__PURE__ */ jsxs("div", { style: { display: "none" }, children: [
    /* @__PURE__ */ jsx("h1", { children: title }),
    /* @__PURE__ */ jsx("p", { children: description }),
    /* @__PURE__ */ jsx("a", { href: "https://example.com", children: url })
  ] });
};
export {
  SeoBlock as S
};
