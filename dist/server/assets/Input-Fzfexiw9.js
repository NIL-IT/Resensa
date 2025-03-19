import { jsx } from "react/jsx-runtime";
import "react";
function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  className = null,
  required = true
}) {
  return required ? /* @__PURE__ */ jsx(
    "input",
    {
      type,
      name,
      placeholder,
      value,
      onChange,
      className: `w-full p-4 bg-gray-75 rounded focus:outline-none focus:ring-2 font-normal text-base text-gray-400 placeholder:text-gray-150 ${className}`,
      required: true
    }
  ) : /* @__PURE__ */ jsx(
    "input",
    {
      type,
      name,
      placeholder,
      value,
      onChange,
      className: `w-full p-4 bg-gray-75 rounded 
        focus:outline-none focus:ring-2 font-normal 
        text-base text-gray-400 placeholder:text-sm lg:placeholder:text-base  placeholder:text-gray-150 ${className}`
    }
  );
}
export {
  Input as I
};
