import React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import img from "../../assets/3d/texture_earth.jpg";

const locations = [
  // Административные
  [
    {
      position: [0.6, 1.5, -0.9],
      title: "Уральский экономический колледж",
      description: "Административное здание",
      mapUrl: "https://maps.google.com/?q=Уральский+экономический+колледж",
    },
    {
      position: [0.05, 1.52, -1.05],
      title: "МФЦ Республика Бурятия",
      description:
        "Верхняя Березовка, Иволгинск, Нижняя Иволга, Нижний Саянтуй",
      mapUrl: "https://maps.google.com/?q=МФЦ+Республика+Бурятия",
    },
    {
      position: [0.1, 1.28, -1.4],
      title: "ТРЦ Пионер",
      description: "г. Улан-Удэ",
      mapUrl: "https://maps.google.com/?q=ТРЦ+Пионер+Улан-Удэ",
    },
    {
      position: [1, 1.4, -0.7],
      title: "Административное здание Министерства обороны",
      description: "г. Москва",
      mapUrl: "https://maps.google.com/?q=Министерство+обороны+Москва",
    },
    {
      position: [0.45, 1.55, -1.1],
      title: "Жилые комплексы",
      description: "ЖК Прайм, ЖК Современник, ЖК Сокол - г.Барнаул",
      mapUrl:
        "https://2gis.ru/barnaul/search/%D0%96%D0%9A%20%D0%9F%D1%80%D0%B0%D0%B9%D0%BC%2C%20%D0%96%D0%9A%20%D0%A1%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%2C%20%D0%96%D0%9A%20%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%20-%20%D0%B3.%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB?m=84.387886%2C53.198179%2F9.96",
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://maps.google.com/?q=Новосибирск+улица+Шевченко+4",
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://maps.google.com/?q=Екатеринбург+улица+Свердлова+11А",
    },
  ],
  // Производства
  [
    {
      position: [-0.1, 1.6, -1],
      title: "Мирнинский Горно-обогатительный комбинат Алроса",
      description: "г.Мирный",
      mapUrl:
        "https://2gis.ru/mirnyj-yakutia-region/firm/70000001046376138?m=113.968956%2C62.52585%2F16",
    },
    {
      position: [1, 1.4, -0.7],
      title: "НИЦ «Курчатовский институт»",
      description: "г. Москва",
      mapUrl:
        "https://2gis.ru/moscow/branches/4504136498521605?m=37.614234%2C55.794272%2F12.24",
    },
    {
      position: [-0.3, 1.6, -1],
      title: "Пищевое производство",
      description: "г. Якутск",
      mapUrl:
        "https://2gis.ru/yakutsk/search/%D0%BF%D0%B8%D1%89%D0%B5%D0%B2%D0%BE%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE%20%D1%8F%D0%BA%D1%83%D1%82%D1%81%D0%BA?m=130.127847%2C61.87272%2F9.61",
    },
    {
      position: [0.1, 1.28, -1.4],
      title: "Производство Абсолют Кэш Энд Кэрри",
      description: "г. Улан-Удэ",
      mapUrl: "https://maps.google.com/?q=Абсолют+Кэш+Энд+Кэрри+Улан-Удэ",
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://maps.google.com/?q=Новосибирск+улица+Шевченко+4",
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://maps.google.com/?q=Екатеринбург+улица+Свердлова+11А",
    },
  ],
  // Медицинские
  [
    {
      position: [0.4, 1.4, -1.2],
      title: "Центральная городская больница",
      description: "Таджикистан, Хатлонская область, Нурек",
      mapUrl:
        "https://maps.google.com/?q=Центральная+городская+больница+Нурек+Таджикистан",
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://maps.google.com/?q=Новосибирск+улица+Шевченко+4",
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://maps.google.com/?q=Екатеринбург+улица+Свердлова+11А",
    },
  ],
];

function LocationMarker({
  position,
  title,
  description,
  mapUrl,
  handleLocationClick,
  i,
}) {
  const [clickState, setClickState] = useState(0); // 0 = none, 1 = showing description, 2 = go to map

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
      window.open(mapUrl, "_blank");
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
      <sphereGeometry args={[0.02, 16, 16]} />
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
                : ""
            }`}
            onClick={(e) => handleClickTitle(e, i)}
          >
            {title}
          </div>

          {/* Description - visible after first click */}
          {clickState === 1 && (
            <div
              className={`bg-[#000] absolute top-[20px] left-0 z-50  text-white rounded px-2 py-1 mt-1 w-40 shadow-lg 
                text-xs cursor-pointer hover:bg-[#4a90e2] transition-colors 
                duration-200 ${
                  title === "Офис Recensa Екатеринбург"
                    ? "top-[-10px] left-[-160px]"
                    : title === "Жилые комплексы"
                    ? "top-[-10px] left-[-103px]"
                    : title === "Пищевое производство"
                    ? "top-[-10px] "
                    : ""
                }`}
              onClick={handleClickCart}
            >
              <p className="leading-tight">{description}</p>
              <p className="text-blue-300 text-[6px] mt-1">
                Нажмите еще раз для открытия карты
              </p>
            </div>
          )}
        </div>
      </Html>
    </mesh>
  );
}

function Earth({ index }) {
  const earthRef = useRef();
  const earthTexture = useTexture(img);

  // State for tracking which location is selected
  const [selectedIdx, setSelectedIdx] = useState(null);
  // State for tracking if description should be shown
  const [showDescription, setShowDescription] = useState(false);

  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() * 0;
  });

  // Handle location marker click
  const handleLocationClick = (e, idx) => {
    e?.stopPropagation?.();
    if (selectedIdx === idx) {
      // If clicking the same location again
      if (showDescription) {
        // If description is already showing, reset everything (show all locations)
        setSelectedIdx(null);
        setShowDescription(false);
      } else {
        // If description is not showing, show it
        setShowDescription(true);
      }
    } else {
      // Clicking a different location - select it and show description
      setSelectedIdx(idx);
      setShowDescription(true);
    }
  };

  // Handle click outside to reset
  const handleOutsideClick = () => {
    setSelectedIdx(null);
    setShowDescription(false);
  };

  React.useEffect(() => {
    // Add global click handler
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <group
      scale={1.2}
      rotation={[0.8, -2.6, 0]}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[200, 200, 200]} intensity={0.7} castShadow />
      <directionalLight
        position={[-200, -200, -200]}
        intensity={0.4}
        castShadow
      />

      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          metalness={0.05}
          roughness={0.9}
          color="#cccccc"
        />

        {/* Render locations based on selection state */}
        {locations[index].map((location, idx) => {
          // Only show all locations when nothing is selected
          // OR show only the selected location when one is selected
          const shouldShow = selectedIdx === null || selectedIdx === idx;

          if (shouldShow) {
            return (
              <LocationMarker
                key={idx}
                {...location}
                i={idx}
                handleLocationClick={handleLocationClick}
                isSelected={selectedIdx === idx}
                showDescription={showDescription}
              />
            );
          }
          return null;
        })}
      </mesh>

      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[1.85, 64, 64]} />
        <meshBasicMaterial color="#3a85ff" transparent opacity={0.03} />
      </mesh>
    </group>
  );
}

export default function EarthScene({ index }) {
  return (
    <article
      className="xs:w-[350px] xs:h-[450px] 
    sm:w-[600px] sm:h-[500px] 
    md:w-[800px] md:h-[500px] 
    lg:w-[1000px] lg:h-[600px] 
    xl:w-[500px] xl:h-[500px] 
    2xl:w-[1000px] 2xl:h-[660px] select-none"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Earth index={index} />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </article>
  );
}
