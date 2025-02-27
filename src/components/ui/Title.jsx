import React from "react";
import { cn } from "../../lib/utils";

export default function Title({ text, className = "", itemProp, ref }) {
  return (
    <h2
      {...(itemProp ? { itemProp: itemProp } : {})}
      {...(ref ? { ref: ref } : {})}
      itemProp={itemProp}
      className={cn("text-[48px] text-gray-400 uppercase", className)}
    >
      {text}
    </h2>
  );
}
