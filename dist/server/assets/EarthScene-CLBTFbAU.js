import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from "react";
import { useLoader, useFrame, Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
function LocationMarker({
  position,
  title,
  description,
  mapUrl,
  handleLocationClick,
  i
}) {
  const [clickState, setClickState] = useState(0);
  const handleClickTitle = (e, index) => {
    e.stopPropagation();
    handleLocationClick(e, index);
    if (clickState === 0) {
      setClickState(1);
    } else {
      setClickState(0);
    }
  };
  const handleClickCart = (e) => {
    e.stopPropagation();
    handleLocationClick(e, null);
    if (clickState === 1) {
      setClickState(0);
    }
  };
  const handleOutsideClick = () => {
    if (clickState === 1) {
      setClickState(0);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [clickState]);
  return /* @__PURE__ */ jsxs("mesh", { position, children: [
    /* @__PURE__ */ jsx("sphereGeometry", { args: [0.014, 16, 16] }),
    /* @__PURE__ */ jsx("meshBasicMaterial", { color: "#4a90e2" }),
    /* @__PURE__ */ jsx(
      Html,
      {
        position: [0.03, 1e-3, 0],
        className: "pointer-events-auto",
        distanceFactor: 6,
        occlude: true,
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start pt-1 relative", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `text-white text-opacity-90 text-[8px] xl:text-xs hover:text-[#4a90e2] transition-colors duration-300 cursor-pointer whitespace-nowrap  absolute top-1 left-0 z-30 ${title === "Офис Recensa Екатеринбург" ? "top-[-32px] left-[-105px] xl:top-[-34px] xl:left-[-160px]" : title === "Жилые комплексы" ? "top-[-21px] left-[-103px]" : title === "Пищевое производство" ? "top-[-22px] " : ""}`,
              onClick: (e) => handleClickTitle(e, i),
              children: title
            }
          ),
          clickState === 1 && /* @__PURE__ */ jsxs(
            "a",
            {
              target: "_blank",
              href: mapUrl,
              className: `bg-[#000] absolute  z-50  text-white rounded px-2 py-1 mt-1 w-40 shadow-lg 
                text-xs cursor-pointer hover:bg-[#4a90e2] transition-colors 
                duration-200 ${title === "Офис Recensa Екатеринбург" ? "top-[-16px] left-[-160px]" : title === "Жилые комплексы" ? "top-[0px] left-[-103px]" : title === "Пищевое производство" ? "top-[0px] " : "top-[20px] left-0"}`,
              onClick: handleClickCart,
              children: [
                /* @__PURE__ */ jsx("p", { className: "leading-tight", children: description }),
                /* @__PURE__ */ jsx("p", { className: "text-blue-300 text-[6px] mt-1", children: "Нажмите еще раз для открытия карты" })
              ]
            }
          )
        ] })
      }
    )
  ] });
}
console.log("Earth");
function Earth({ index, locations: locations2 }) {
  const earthRef = useRef();
  const earthTexture = useLoader(TextureLoader, "/texture_earth.jpg");
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [forceRender, setForceRender] = useState(0);
  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() * 0;
  });
  const handleLocationClick = (e, idx) => {
    var _a;
    (_a = e == null ? void 0 : e.stopPropagation) == null ? void 0 : _a.call(e);
    if (selectedIdx === idx) {
      if (showDescription) {
        setSelectedIdx(null);
        setShowDescription(false);
      } else {
        setShowDescription(true);
      }
    } else {
      setSelectedIdx(idx);
      setShowDescription(true);
    }
  };
  const handleOutsideClick = () => {
    setSelectedIdx(null);
    setShowDescription(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setForceRender((prev) => prev + 1);
    };
    setForceRender((prev) => prev + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ jsxs(
    "group",
    {
      scale: 1.2,
      rotation: [0.8, -2.6, 0],
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsx("ambientLight", { intensity: 0.8 }),
        /* @__PURE__ */ jsx("directionalLight", { position: [200, 200, 200], intensity: 0.7, castShadow: true }),
        /* @__PURE__ */ jsx(
          "directionalLight",
          {
            position: [-200, -200, -200],
            intensity: 0.4,
            castShadow: true
          }
        ),
        /* @__PURE__ */ jsxs("mesh", { ref: earthRef, children: [
          /* @__PURE__ */ jsx("sphereGeometry", { args: [1.8, 64, 64] }),
          /* @__PURE__ */ jsx(
            "meshStandardMaterial",
            {
              map: earthTexture,
              metalness: 0.05,
              roughness: 0.9,
              color: "#cccccc"
            }
          ),
          locations2[index].map((location, idx) => {
            const shouldShow = selectedIdx === null || selectedIdx === idx;
            if (shouldShow) {
              return /* @__PURE__ */ jsx(
                LocationMarker,
                {
                  ...location,
                  i: idx,
                  handleLocationClick,
                  isSelected: selectedIdx === idx,
                  showDescription
                },
                idx
              );
            }
            return null;
          })
        ] }),
        /* @__PURE__ */ jsxs("mesh", { children: [
          /* @__PURE__ */ jsx("sphereGeometry", { args: [1.85, 64, 64] }),
          /* @__PURE__ */ jsx("meshBasicMaterial", { color: "#3a85ff", transparent: true, opacity: 0.03 })
        ] })
      ]
    },
    forceRender
  );
}
const locations = [
  // Административные
  [
    {
      position: [0.6, 1.5, -0.9],
      title: "Уральский экономический колледж",
      description: "Административное здание",
      mapUrl: "https://yandex.ru/maps/?text=Уральский+экономический+колледж"
    },
    {
      position: [0.05, 1.52, -1.05],
      title: "МФЦ Республика Бурятия",
      description: "Верхняя Березовка, Иволгинск, Нижняя Иволга, Нижний Саянтуй",
      mapUrl: "https://yandex.ru/maps/?text=МФЦ+Республика+Бурятия"
    },
    {
      position: [0.1, 1.28, -1.4],
      title: "ТРЦ Пионер",
      description: "г. Улан-Удэ",
      mapUrl: "https://yandex.ru/maps/?text=ТРЦ+Пионер+Улан-Удэ"
    },
    {
      position: [1, 1.4, -0.7],
      title: "Административное здание Министерства обороны",
      description: "г. Москва",
      mapUrl: "https://yandex.ru/maps/?text=Министерство+обороны+Москва"
    },
    {
      position: [0.43, 1.48, -1.04],
      title: "Жилые комплексы",
      description: "ЖК Прайм, ЖК Современник, ЖК Сокол - г.Барнаул",
      mapUrl: "https://yandex.ru/maps/?text=ЖК+Прайм+ЖК+Современник+ЖК+Сокол+Барнаул"
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4"
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А"
    }
  ],
  // Производства
  [
    {
      position: [-0.1, 1.6, -1],
      title: "Мирнинский Горно-обогатительный комбинат Алроса",
      description: "г.Мирный",
      mapUrl: "https://yandex.ru/maps/?text=Мирнинский+Горно-обогатительный+комбинат+Алроса"
    },
    {
      position: [1, 1.4, -0.7],
      title: "НИЦ «Курчатовский институт»",
      description: "г. Москва",
      mapUrl: "https://yandex.ru/maps/?text=НИЦ+Курчатовский+институт+Москва"
    },
    {
      position: [-0.3, 1.6, -1],
      title: "Пищевое производство",
      description: "г. Якутск",
      mapUrl: "https://yandex.ru/maps/?text=пищевое+производство+Якутск"
    },
    {
      position: [0.1, 1.28, -1.4],
      title: "Производство Абсолют Кэш Энд Кэрри",
      description: "г. Улан-Удэ",
      mapUrl: "https://yandex.ru/maps/?text=Абсолют+Кэш+Энд+Кэрри+Улан-Удэ"
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4"
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А"
    }
  ],
  // Медицинские
  [
    {
      position: [0.4, 1.4, -1.2],
      title: "Центральная городская больница",
      description: "Таджикистан, Хатлонская область, Нурек",
      mapUrl: "https://yandex.ru/maps/?text=Центральная+городская+больница+Нурек+Таджикистан"
    },
    {
      position: [0.5, 1.25, -1.3],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
      mapUrl: "https://yandex.ru/maps/?text=Новосибирск+улица+Шевченко+4"
    },
    {
      position: [0.75, 1.5, -0.85],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
      mapUrl: "https://yandex.ru/maps/?text=Екатеринбург+улица+Свердлова+11А"
    }
  ]
];
function EarthScene({ index }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "article",
    {
      className: "xs:w-[400px] xs:h-[450px]\r\n      sm:w-[600px] sm:h-[500px]\r\n      md:w-[800px] md:h-[500px]\r\n      lg:w-[1000px] lg:h-[600px]\r\n      xl:w-[500px] xl:h-[500px]\r\n      2xl:w-[1000px] 2xl:h-[660px] select-none",
      children: isClient && /* @__PURE__ */ jsxs(
        Canvas,
        {
          camera: { position: [0, 0, 6], fov: 45 },
          style: { background: "transparent", width: "100%", height: "100%" },
          children: [
            /* @__PURE__ */ jsx(Earth, { index, locations }),
            /* @__PURE__ */ jsx(
              OrbitControls,
              {
                enableZoom: false,
                enablePan: true,
                enableRotate: true,
                zoomSpeed: 0.6,
                panSpeed: 0.5,
                rotateSpeed: 0.4,
                minPolarAngle: Math.PI / 2,
                maxPolarAngle: Math.PI / 2
              }
            )
          ]
        }
      )
    }
  );
}
export {
  EarthScene as default
};
