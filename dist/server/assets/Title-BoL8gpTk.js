import { jsx } from "react/jsx-runtime";
import "react";
import { c as cn } from "./Button-ZmIELfDU.js";
function Title({ text, className = "", itemProp, ref }) {
  return /* @__PURE__ */ jsx(
    "h2",
    {
      ...itemProp ? { itemProp } : {},
      ...ref ? { ref } : {},
      itemProp,
      className: cn("text-[48px] text-gray-400 uppercase", className),
      children: text
    }
  );
}
export {
  Title as T
};
