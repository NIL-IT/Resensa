import React from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
export default function Button({
  text,

  className = "",
  icon = false,
  onClick = null,
  white = false,
  href = "",
  iconWidth,
  type = "button",
  noLink = false,
}) {
  return noLink ? (
    <button
      to={href}
      className={cn(
        "bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase transition-all text-center",

        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  ) : !icon ? (
    <Link
      to={href}
      className={cn(
        "bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase transition-all text-center",

        className
      )}
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <Link to={href}>
      <button
        type={type}
        className={cn(
          "group bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase flex-center gap-5",
          className
        )}
        onClick={onClick}
      >
        {white ? (
          <img
            className={`group-hover:translate-x-1 transition-all ${
              iconWidth ? iconWidth : ""
            }`}
            src="/icon/arrow_right.svg"
            alt="arrow"
          />
        ) : (
          <img
            className={`group-hover:translate-x-1 transition-all ${
              iconWidth ? iconWidth : ""
            }`}
            src="/icon/arrow.svg"
            alt="arrow"
          />
        )}

        <p>{text}</p>
      </button>
    </Link>
  );
}
