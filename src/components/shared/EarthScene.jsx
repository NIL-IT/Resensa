import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import img from "../../assets/3d/texture_earth.jpg";
const locations = [
  // Административные
  [
    {
      position: [0.12, 1.9, -1],
      spherePosition: [0.5, 1.55, -0.9],
      title: "Уральский экономический колледж",
      description: "Административное здание",
    },
    {
      position: [0.05, 1.9, -1.1],
      spherePosition: [0.1, 1.5, -1.2],
      title: "МФЦ Республика Бурятия",
      description:
        "Верхняя Березовка, Иволгинск, Нижняя Иволга, Нижний Саянтуй",
    },
    {
      position: [-0.1, 1.8, -1.9],
      spherePosition: [0, 1.35, -1.4],
      title: "ТРЦ Пионер",
      description: "г. Улан-Удэ",
    },
    {
      position: [1.4, 1.3, -1],
      spherePosition: [0.9, 1.5, -0.7],
      title: "Административное здание Министерства обороны",
      description: "г. Москва",
    },
    {
      position: [0.55, 1.5, -2.3],
      spherePosition: [0.41, 1.45, -1],
      title: "Жилые комплексы",
      description: "ЖК Прайм, ЖК Современник, ЖК Сокол - г.Барнаул",
    },
    {
      position: [0.45, 1.6, -2.5],
      spherePosition: [0.25, 1.45, -1.2],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
    },
    {
      position: [0.82, 1.2, -1.8],
      spherePosition: [0.7, 1.55, -1],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
    },
  ],
  [
    // производства
    {
      position: [0.05, 2.1, -1.5],
      spherePosition: [0.1, 1.5, -1.2],
      title: "Мирнинский Горно-обогатительный комбинат Алроса",
      description: "г.Мирный",
    },
    {
      position: [1.4, 1.3, -1],
      spherePosition: [0.9, 1.5, -0.7],
      title: "НИЦ «Курчатовский институт»",
      description: "г. Москва",
    },
    {
      position: [-0.3, 2.15, -1.9],
      spherePosition: [-0.35, 1.6, -0.9],
      title: "Пищевое производство",
      description: "г. Якутск",
    },
    {
      position: [-0.14, 2.1, -1.9],
      spherePosition: [0, 1.35, -1.4],
      title: "Производство Абсолют Кэш Энд Кэрри",
      description: "г. Улан-Удэ",
    },
    {
      position: [0.91, 1.4, -2],
      spherePosition: [0.7, 1.55, -1],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
    },
    {
      position: [0.45, 1.6, -2.5],
      spherePosition: [0.25, 1.45, -1.2],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
    },
  ],
  [
    {
      position: [0.3, 2, -1.3],
      spherePosition: [0.5, 1.3, -1.2],
      title: "Центральная городская больница",
      description: "Таджикистан, Хатлонская область, Нурек",
    },
    {
      position: [0.45, 1.6, -2.5],
      spherePosition: [0.25, 1.45, -1.2],
      title: "Офис Recensa Новосибирск",
      description: "г.Новосибирск ул.Шевченко д.4 офис 509 ",
    },
    {
      position: [0.82, 1.2, -1.8],
      spherePosition: [0.7, 1.55, -1],
      title: "Офис Recensa Екатеринбург",
      description: "г.Екатеринбург ул. Свердлова д.11 А офис 512",
    },
  ],
];

function LocationCard({ position, title, description }) {
  return (
    <mesh position={position}>
      {/* Dot marker */}

      <meshBasicMaterial color="#ffffff" />
      {/* Card */}
      <Html
        position={[0.2, 0.1, 1]}
        className="pointer-events-auto select-none"
        distanceFactor={6}
        occlude
      >
        <div className="bg-white rounded-lg shadow-lg relative">
          {title === "Административное здание Министерства обороны" ||
          title === "НИЦ «Курчатовский институт»" ? (
            <div id="triangleTopRight" />
          ) : title === "Жилые комплексы" ||
            title === "Офис Recensa Новосибирск" ? (
            <div id="triangleTopLeft" />
          ) : title === "Офис Recensa Екатеринбург" ? (
            <div id="triangleTopMiddle" />
          ) : (
            <div id="triangle" />
          )}

          <div className="w-[80px]">
            <div className="w-full flex justify-center bg-gray-300 h-[30px]">
              <img
                className="object-contain h-full"
                src="/img/no_img.svg"
                alt="Объект"
                title="Объект"
              />
            </div>
            <div className="py-1 px-1.5">
              <h3 className="text-[8px] font-medium mb-0.5 leading-tight">
                {title}
              </h3>
              <p className="text-[6px] text-gray-500 leading-tight">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Html>
    </mesh>
  );
}
function LocationDote({ spherePosition }) {
  return (
    <mesh position={spherePosition}>
      <sphereGeometry args={[0.02, 16, 16]} />
    </mesh>
  );
}
function Earth({ index }) {
  const earthRef = useRef();
  const cloudRef = useRef();

  // Load Earth texture
  const earthTexture = useTexture(img);

  // Rotate the earth
  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() * 0;
    if (cloudRef.current) {
      cloudRef.current.rotation.y = clock.getElapsedTime() * 0;
    }
  });

  return (
    <group className="" scale={1} rotation={[0.8, -2.6, 0]}>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.3} />

      {/* Directional light to simulate sun */}
      <directionalLight position={[200, 200, 200]} intensity={1} castShadow />
      <directionalLight
        position={[-200, -200, -200]}
        intensity={1}
        castShadow
      />
      <directionalLight position={[150, 150, 250]} intensity={1} castShadow />
      <directionalLight
        position={[-150, -250, -250]}
        intensity={1}
        castShadow
      />

      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          metalness={0.1}
          s
          roughness={0.7}
        />
        {/* Location markers with cards */}
        {locations[index].map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
        {locations[index].map(({ spherePosition }, index) => (
          <LocationDote key={index} spherePosition={spherePosition} />
        ))}
      </mesh>

      {/* Atmosphere glow */}
    </group>
  );
}

export default function EarthScene({ index }) {
  return (
    <article
      className=" *:overflow-hidden xs:w-[350px] xs:h-[450px] 
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
