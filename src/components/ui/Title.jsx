import React from "react";
import { cn } from "../../lib/utils";

export default function Title({ text, className = "", itemprop = "" }) {
  return (
    <h1
      itemprop={itemprop}
      className={cn("text-[48px] text-gray-400 uppercase", className)}
    >
      {text}
    </h1>
  );
}
