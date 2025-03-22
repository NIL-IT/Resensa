import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import LocationMarker from "./LocationMarker";
export default function Earth({ index, locations }) {
  console.log("Earth");

  // Используем ref для доступа к 3D объекту
  const earthRef = useRef();

  // Загружаем текстуру земли
  const earthTexture = useLoader(TextureLoader, "/texture_earth.jpg");

  // Состояния для отслеживания выбранной локации и отображения описания
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  // Принудительный рендеринг для обработки изменений
  const [forceRender, setForceRender] = useState(0);

  // Вращение земли (в данном случае скорость 0)
  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() * 0;
  });

  // Обработка клика по локации
  const handleLocationClick = (e, idx) => {
    e?.stopPropagation?.();
    if (selectedIdx === idx) {
      // Если нажимаем ту же локацию снова
      if (showDescription) {
        // Если описание уже показано, сбрасываем всё
        setSelectedIdx(null);
        setShowDescription(false);
      } else {
        // Если описание не показано, показываем его
        setShowDescription(true);
      }
    } else {
      // Нажимаем другую локацию - выбираем её и показываем описание
      setSelectedIdx(idx);
      setShowDescription(true);
    }
  };

  // Обработка клика вне локаций для сброса
  const handleOutsideClick = () => {
    setSelectedIdx(null);
    setShowDescription(false);
  };

  // Добавляем обработчик клика при монтировании компонента
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Добавляем слушатель изменения размера окна для принудительного обновления
  useEffect(() => {
    const handleResize = () => {
      setForceRender((prev) => prev + 1);
    };

    // Вызываем принудительное обновление при монтировании компонента
    // Это обеспечит рендеринг при первой загрузке
    setForceRender((prev) => prev + 1);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Предполагаем, что locations существует в вашем коде
  return (
    <group
      scale={1.2}
      rotation={[0.8, -2.6, 0]}
      onClick={(e) => e.stopPropagation()}
      key={forceRender} // Добавляем key для принудительного обновления
    >
      {/* Освещение */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[200, 200, 200]} intensity={0.7} castShadow />
      <directionalLight
        position={[-200, -200, -200]}
        intensity={0.4}
        castShadow
      />

      {/* Земля */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          metalness={0.05}
          roughness={0.9}
          color="#cccccc"
        />

        {/* Отображение локаций в зависимости от состояния выбора */}
        {locations[index].map((location, idx) => {
          // Показываем все локации, когда ничего не выбрано
          // ИЛИ показываем только выбранную локацию
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

      {/* Атмосфера */}
      <mesh>
        <sphereGeometry args={[1.85, 64, 64]} />
        <meshBasicMaterial color="#3a85ff" transparent opacity={0.03} />
      </mesh>
    </group>
  );
}
