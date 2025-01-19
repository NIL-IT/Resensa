import React from "react";
import { cn } from "../../lib/utils";

export default function SearchInput({
  className,
  placeholder,
  type = "text",
  handleSearch,
  iconLeft = false,
  handleClose,
  closeIcon,
}) {
  const [value, setValue] = React.useState("");
  const handleChange = ({ target: { value } }) => {
    setValue(value);
    setTimeout(() => {
      handleSearch(value);
    }, 200);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={cn(
        "w-full h-[35px] border border-gray-400 border-b-0 p-[9px] flex-center gap-2",
        className
      )}
      onSubmit={handleSubmit}
    >
      {iconLeft && <img src="/icon/search.svg" alt="search" />}
      <input
        placeholder={placeholder}
        className="w-full placeholder:text-gray-150"
        type={type}
        value={value}
        onChange={handleChange}
      />
      {closeIcon && (
        <button
          onClick={() => handleClose()}
          className=" text-gray-500  hover:text-gray-700"
        >
          ✕
        </button>
      )}
      {!iconLeft && <img src="/icon/search.svg" alt="search" />}
    </form>
  );
}
