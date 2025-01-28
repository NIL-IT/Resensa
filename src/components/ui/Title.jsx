import React from "react";
import { cn } from "../../lib/utils";

export default function Title({ text, className = "", itemProp = "" }) {
  return (
    <h1
      itemProp={itemProp}
      className={cn("text-[48px] text-gray-400 uppercase", className)}
    >
      {text}
    </h1>
  );
}
