import React from "react";
import { cn } from "../../lib/utils";

export default function MainTitle({ text, className = "", itemProp = "" }) {
  return (
    <h2
      itemProp={itemProp}
      className={cn("text-[48px] text-gray-400 uppercase", className)}
    >
      {text}
    </h2>
  );
}
