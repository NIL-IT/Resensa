import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useLoader, useTexture } from "@react-three/fiber";
import { TextureLoader } from "three";

const locations = [
  // Административные
  [
    {
      position: [0.6, 1.5, -0.9],
      title: "Уральский экономический колледж",
      description: "Административное здание",
      mapUrl: "https://yandex.ru/maps/?text=Уральский+экономический+колледж",
    },
    {
      position: [0.05, 1.52, -1.05],
      title: "МФЦ Республика Бурятия",
      description:
        "Верхняя Березовка, Иволгинск, Нижняя Иволга, Нижний Саянтуй",
      mapUrl: "https://yandex.ru/maps/?text=МФЦ+Республика+Бурятия",
    },
    {
      position: [0.1, 1.28, -1.4],
      title: "ТРЦ Пионер",
      description: "г. Улан-Удэ",
      mapUrl: "https://yandex.ru/maps/?text=ТРЦ+Пионер+Улан-Удэ",
    },
    {
      position: [1, 1.4, -0.7],
      title: "Административное здание Министерства обороны",
      description: "г. Москва",
      mapUrl: "https://yandex.ru/maps/?text=Министерство+обороны+Москва",
    },
    {
      position: [0.43, 1.48, -1.04],
      title: "Жилые комплексы",
      description: "ЖК Прайм, ЖК Современник, ЖК Сокол - г.Барнаул",
      mapUrl:
        "https://yandex.ru/maps/?text=ЖК+Прайм+ЖК+Современник+ЖК+Сокол+Барнаул",
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4",
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А",
    },
  ],
  // Производства
  [
    {
      position: [-0.1, 1.6, -1],
      title: "Мирнинский Горно-обогатительный комбинат Алроса",
      description: "г.Мирный",
      mapUrl:
        "https://yandex.ru/maps/?text=Мирнинский+Горно-обогатительный+комбинат+Алроса",
    },
    {
      position: [1, 1.4, -0.7],
      title: "НИЦ «Курчатовский институт»",
      description: "г. Москва",
      mapUrl: "https://yandex.ru/maps/?text=НИЦ+Курчатовский+институт+Москва",
    },
    {
      position: [-0.3, 1.6, -1],
      title: "Пищевое производство",
      description: "г. Якутск",
      mapUrl: "https://yandex.ru/maps/?text=пищевое+производство+Якутск",
    },
    {
      position: [0.1, 1.28, -1.4],
      title: "Производство Абсолют Кэш Энд Кэрри",
      description: "г. Улан-Удэ",
      mapUrl: "https://yandex.ru/maps/?text=Абсолют+Кэш+Энд+Кэрри+Улан-Удэ",
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4",
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А",
    },
  ],
  // Медицинские
  [
    {
      position: [0.4, 1.4, -1.2],
      title: "Центральная городская больница",
      description: "Таджикистан, Хатлонская область, Нурек",
      mapUrl:
        "https://yandex.ru/maps/?text=Центральная+городская+больница+Нурек+Таджикистан",
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4",
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А",
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
              <p className="leading-tight">{description}</p>
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

function Earth({ index }) {
  if (typeof window === "undefined") {
    return null;
  }
  const earthRef = useRef();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const textureLoader = new TextureLoader();
    try {
      textureLoader.load(
        "/texture_earth.jpg", // Try absolute path
        (loadedTexture) => {
          setTexture(loadedTexture);
        },
        undefined,
        (error) => {
          console.error("Error loading texture:", error);
          // Could set a fallback texture here
        }
      );
    } catch (error) {
      console.error("Texture loading error:", error);
    }
  }, []);

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
          map={texture}
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
      className="xs:w-[400px] xs:h-[450px] 
    sm:w-[600px] sm:h-[500px] 
    md:w-[800px] md:h-[500px] 
    lg:w-[1000px] lg:h-[600px] 
    xl:w-[500px] xl:h-[500px] 
    2xl:w-[1000px] 2xl:h-[660px] select-none"
    >
      <div>dsadsadsadasd</div>
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
