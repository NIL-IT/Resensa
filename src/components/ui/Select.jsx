import { ChevronDown } from "lucide-react";
import React, { useEffect } from "react";
export default function Select({
  handleSelectChange,
  options,
  className,
  border,
  placeholder,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(placeholder);
  useEffect(() => {
    handleSelectChange(selected);
  }, [selected]);
  return (
    <div className={`relative w-[115px] text-gray-400 mt-[13px] ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3 py-2 border border-gray-400 ${
          border ? "border-none" : ""
        }`}
      >
        <span
          className={`${border ? "text-gray-400 font-normal text-base" : ""}`}
        >
          {selected}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute w-full mt-1 border border-gray-200  bg-white shadow-lg `}
        >
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                className="px-3 py-1.5 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
