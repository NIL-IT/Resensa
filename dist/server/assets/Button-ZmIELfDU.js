import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Button({
  text,
  className = "",
  icon = false,
  onClick = null,
  white = false,
  href = "",
  iconWidth,
  type = "button",
  noLink = false,
  target = null
}) {
  return noLink ? /* @__PURE__ */ jsx(
    "button",
    {
      to: href,
      className: cn(
        "bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase transition-all text-center",
        className
      ),
      onClick,
      children: text
    }
  ) : !icon ? /* @__PURE__ */ jsx(
    Link,
    {
      to: href,
      className: cn(
        "bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase transition-all text-center",
        className
      ),
      onClick,
      children: text
    }
  ) : /* @__PURE__ */ jsx(Link, { to: href, target, children: /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      className: cn(
        "group bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase flex-center gap-5",
        className
      ),
      onClick,
      children: [
        white ? /* @__PURE__ */ jsx(
          "img",
          {
            className: `group-hover:translate-x-1 transition-all ${iconWidth ? iconWidth : ""}`,
            src: "/icon/arrow_right.svg",
            alt: "arrow"
          }
        ) : /* @__PURE__ */ jsx(
          "img",
          {
            className: `group-hover:translate-x-1 transition-all ${iconWidth ? iconWidth : ""}`,
            src: "/icon/arrow.svg",
            alt: "arrow"
          }
        ),
        /* @__PURE__ */ jsx("p", { children: text })
      ]
    }
  ) });
}
export {
  Button as B,
  cn as c
};
