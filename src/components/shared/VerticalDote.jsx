import React, { useState } from "react";

export default function VerticalDote({ list }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="relative">
      <button className="p-2" onClick={() => handleClick()}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </button>
      {active && (
        <div
          className="absolute space-y-4 top-2 right-[30px] py-1 bg-white w-[250px]   z-30 rounded-lg border
       "
        >
          {list.map(({ name, icon }) => (
            <button className="flex-center gap-4 hover:bg-gray-50 p-2 w-full transition-all rounded">
              {icon}
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
