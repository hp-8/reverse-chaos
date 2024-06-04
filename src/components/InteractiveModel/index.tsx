import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Ctransformed } from "../C-transformed";
import { Physics } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export const InteractiveModel = () => {
  const colorPool = ['#FF5733', '#33FF57', '#3357FF', '#F33FFF', '#FF33F3']; // Example color pool

  const [numModels] = useState(Math.floor(Math.random() * 10) + 1);
  const [transformations] = useState(() => {
    const transformations = [];
    for (let i = 0; i < numModels; i++) {
      const x = Math.random() * 4 - 2;
      const y = Math.random() * 2 - 1; // Adjusting y to give some vertical variation
      const z = Math.random() * 4 - 2;
      const rotationX = Math.random() * Math.PI;
      const rotationY = Math.random() * Math.PI;
      const rotationZ = Math.random() * Math.PI;
      const color = colorPool[Math.floor(Math.random() * colorPool.length)];
      transformations.push({
        position: [x, y, z],
        rotation: [rotationX, rotationY, rotationZ],
        color,
      });
    }
    return transformations;
  });

  return (
    <Canvas shadows>
      <ambientLight />
      <perspectiveCamera fov={45} position={[0, 2, 5]} />
      <OrbitControls
        autoRotate={true}
        enableDamping={true}
        maxAzimuthAngle={Infinity}
        maxPolarAngle={Infinity}
        rotateSpeed={0.5}
        minDistance={1}
        enableZoom
        zoomSpeed={0.5}
        maxZoom={2}
        minZoom={1}
      />
      <Suspense fallback={null}>
        <Physics gravity={[0, 0, 0]}>
          {transformations.map((transform, index) => (
            <Ctransformed
              key={index}
              position={transform.position}
              rotation={transform.rotation}
              color={transform.color}
              scale={1}
              castShadow={false}
              receiveShadow={false}
              clone
            />
          ))}
        </Physics>
      </Suspense>
    </Canvas>
  );
};
