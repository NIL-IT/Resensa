import React from "react";

export default function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  className = null,
  required = true,
}) {
  return required ? (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-4 bg-gray-75 rounded focus:outline-none focus:ring-2 font-normal text-base text-gray-400 placeholder:text-gray-150 ${className}`}
      required
    />
  ) : (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-4 bg-gray-75 rounded 
        focus:outline-none focus:ring-2 font-normal 
        text-base text-gray-400 placeholder:text-sm lg:placeholder:text-base  placeholder:text-gray-150 ${className}`}
    />
  );
}
