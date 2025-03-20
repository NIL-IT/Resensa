import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { c as cn } from "./Button-ZmIELfDU.js";
function SearchInput({
  className,
  placeholder,
  type = "text",
  handleSearch,
  iconLeft = false,
  handleClose,
  closeIcon
}) {
  const [value, setValue] = React.useState("");
  const handleChange = ({ target: { value: value2 } }) => {
    setValue(value2);
    setTimeout(() => {
      handleSearch(value2);
    }, 200);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      itemProp: "potentialAction",
      itemScope: true,
      itemType: "https://schema.org/SearchAction",
      className: cn(
        "w-full h-[35px] border border-gray-400 border-b-0 p-[9px] flex-center gap-2",
        className
      ),
      onSubmit: handleSubmit,
      children: [
        iconLeft && /* @__PURE__ */ jsx("img", { src: "/icon/search.svg", alt: "search" }),
        /* @__PURE__ */ jsx("meta", { itemProp: "target" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            itemProp: "query-input",
            placeholder,
            className: "w-full placeholder:text-gray-150",
            type,
            value,
            onChange: handleChange
          }
        ),
        closeIcon && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleClose(),
            className: " text-gray-500  hover:text-gray-700",
            children: "✕"
          }
        ),
        !iconLeft && /* @__PURE__ */ jsx("img", { src: "/icon/search.svg", alt: "search" })
      ]
    }
  );
}
export {
  SearchInput as S
};
