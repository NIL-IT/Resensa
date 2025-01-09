import React from "react";
import { cn } from "../../lib/utils";

export default function Input({ className }) {
  const [value, setValue] = React.useState("");
  const handleChange = ({ target: { value } }) => {
    setValue(value);
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
      <input
        className="w-full"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <img src="/icon/search.svg" alt="search" />
    </form>
  );
}
