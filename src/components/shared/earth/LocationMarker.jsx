import React from "react";
import { useState } from "react";

import { Html } from "@react-three/drei";

export default function LocationMarker({
  position,
  title,
  description,
  mapUrl,
  handleLocationClick,
  i,
  groupIndex,
}) {
  const [clickState, setClickState] = useState(0); // 0 = none, 1 = showing description, 2 = go to map
  console.log(groupIndex);
  const handleClickTitle = (e, index) => {
    e.stopPropagation();
    handleLocationClick(e, index);
    if (clickState === 0) {
      // First click - show description
      setClickState(1);
    } else {
      setClickState(0);
    }
  };
  const handleClickCart = (e) => {
    e.stopPropagation();
    handleLocationClick(e, null);
    if (clickState === 1) {
      // Second click - open map in new tab

      setClickState(0);
    }
  };

  // Close description when clicking elsewhere
  const handleOutsideClick = () => {
    if (clickState === 1) {
      setClickState(0);
    }
  };

  // Add event listener for outside clicks
  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [clickState]);

  return (
    <mesh position={position}>
      {/* Small dot marker */}
      <sphereGeometry args={[0.014, 16, 16]} />
      <meshBasicMaterial color="#4a90e2" />

      {/* Label with click functionality */}
      <Html
        position={[0.03, 0.001, 0]}
        className="pointer-events-auto"
        distanceFactor={6}
        occlude
      >
        <div className="flex flex-col items-start pt-1 relative">
          {/* Location name - always visible */}
          <div
            className={`text-white text-opacity-90 text-[8px] xl:text-xs hover:text-[#4a90e2] transition-colors duration-300 cursor-pointer whitespace-nowrap  absolute top-1 left-0 z-30 ${
              title === "Офис Recensa Екатеринбург"
                ? "top-[-32px] left-[-105px] xl:top-[-34px] xl:left-[-160px]"
                : title === "Жилые комплексы"
                ? "top-[-21px] left-[-103px]"
                : title === "Пищевое производство"
                ? "top-[-22px] "
                : title === "Офис Recensa Новосибирск" && groupIndex === 1
                ? "top-[-22px] left-[0px] xl:top-[-23px] xl:left-[0px]"
                : ""
            }`}
            onClick={(e) => handleClickTitle(e, i)}
          >
            {title}
          </div>

          {/* Description - visible after first click */}
          {clickState === 1 && (
            <a
              target="_blank"
              href={mapUrl}
              className={`bg-[#000] absolute  z-50  text-white rounded px-2 py-1 mt-1 w-40 shadow-lg 
                text-xs cursor-pointer hover:bg-[#4a90e2] transition-colors 
                duration-200 ${
                  title === "Офис Recensa Екатеринбург"
                    ? "top-[-16px] left-[-160px]"
                    : title === "Жилые комплексы"
                    ? "top-[0px] left-[-103px]"
                    : title === "Пищевое производство"
                    ? "top-[0px] "
                    : "top-[20px] left-0"
                }`}
              onClick={handleClickCart}
            >
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className="leading-tight"
              />
              <p className="text-blue-300 text-[6px] mt-1">
                Нажмите еще раз для открытия карты
              </p>
            </a>
          )}
        </div>
      </Html>
    </mesh>
  );
}
