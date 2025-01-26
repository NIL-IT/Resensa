import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import img from "../../assets/3d/texture_earth.jpg";
const locations = [
  {
    position: [1.5, 1, 1.2],
    title: "Название",
    description: "Описание",
  },
  {
    position: [-1, 0.5, 0],
    title: "Название",
    description: "Описание",
  },
  {
    position: [2, -1, 0],
    title: "Название",
    description: "Описание",
  },
];
function LocationCard({ position, title, description }) {
  return (
    <mesh position={position}>
      {/* Dot marker */}

      <meshBasicMaterial color="#ffffff" />
      {/* Card */}
      <Html
        position={[0.2, 0.1, 1]}
        className="pointer-events-auto"
        distanceFactor={6}
        occlude
      >
        <div className="bg-white rounded-lg shadow-lg  max-w-[427px] max-h-[356px]  relative ">
          <div id="triangle" />
          <div className="w-[120px]">
            <div className="w-full flex justify-center bg-gray-300 h-[50%]">
              <img className="object-contain " src="/img/no_img.svg" alt="" />
            </div>
            <div className="h-[50%] py-1 px-2">
              <h3 className="text-sm font-medium mb-1">{title}</h3>
              <p className="text-[10px] text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </Html>

      {/* Connection line */}
      <line position={[0.15, -0.9, -0.2]}>
        <sphereGeometry args={[0.02, 16, 16]} />
      </line>
    </mesh>
  );
}

function Earth() {
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
    <group className="" scale={0.9}>
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
          roughness={0.7}
        />
        {/* Location markers with cards */}
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </mesh>

      {/* Atmosphere glow */}
    </group>
  );
}

export default function EarthScene() {
  return (
    <article
      className=" *:overflow-hidden xs:w-[350px] xs:h-[450px] 
    sm:w-[600px] sm:h-[500px] 
    md:w-[800px] md:h-[500px] 
    lg:w-[1000px] lg:h-[600px] 
    xl:w-[500px] xl:h-[500px] 
    2xl:w-[1000px] 2xl:h-[660px]"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Earth />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </Canvas>
    </article>
  );
}
