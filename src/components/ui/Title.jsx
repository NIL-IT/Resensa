import React from "react";
import { cn } from "../../lib/utils";

export default function Title({ text, className = "" }) {
  return (
    <h1 className={cn("text-[48px] text-gray-400 uppercase", className)}>
      {text}
    </h1>
  );
}
