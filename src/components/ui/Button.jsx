import React from "react";
import { cn } from "../../lib/utils";

export default function Button({
  text,
  className = "",
  icon = false,
  onClick = null,
  white = false,
}) {
  return !icon ? (
    <button
      className={cn(
        "bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase transition-all",

        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  ) : (
    <button
      className={cn(
        "group bg-gray-400 text-white font-normal py-[9px] px-[30px] text-xs uppercase flex-center gap-5",
        className
      )}
      onClick={onClick}
    >
      {white ? (
        <img
          className="group-hover:translate-x-1 transition-all"
          src="/icon/arrow_right.svg"
          alt="arrow"
        />
      ) : (
        <img
          className="group-hover:translate-x-1 transition-all"
          src="/icon/arrow.svg"
          alt="arrow"
        />
      )}

      <p>{text}</p>
    </button>
  );
}
