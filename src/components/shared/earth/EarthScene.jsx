import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Earth from "./Earth";

export const locations = [
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

export default function EarthScene({ index }) {
  // Состояние, которое гарантирует, что компонент загружен на клиенте
  const [isClient, setIsClient] = useState(false);

  // Устанавливаем флаг isClient при монтировании компонента
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <article
      className="xs:w-[400px] xs:h-[450px]
      sm:w-[600px] sm:h-[500px]
      md:w-[800px] md:h-[500px]
      lg:w-[1000px] lg:h-[600px]
      xl:w-[500px] xl:h-[500px]
      2xl:w-[1000px] 2xl:h-[660px] select-none"
    >
      {isClient && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          style={{ background: "transparent", width: "100%", height: "100%" }}
        >
          <Earth index={index} locations={locations} />
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
      )}
    </article>
  );
}
