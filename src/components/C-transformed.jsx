import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Ctransformed({ color, ...props }) {
  const { nodes } = useGLTF('/c-transformed.glb');
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [velocity] = useState(() => new THREE.Vector3(0, 0, 0));

  // Random rotation speed
  const [rotationSpeed] = useState(() => Math.random() * 0.02 + 0.01);

  useFrame((state, delta) => {
    if (hovered) {
      // Apply a floating effect by adjusting the position
      ref.current.position.x += velocity.x * delta;
      ref.current.position.y += velocity.y * delta;
      ref.current.position.z += velocity.z * delta;

      // Dampen the velocity over time
      velocity.multiplyScalar(0.98);
    } else {
      // Rotate the object when not hovered
      ref.current.rotation.y += rotationSpeed;
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    // Set random velocity to simulate floating away effect
    velocity.set(
      (Math.random() - 0.5) * 0.2,
      (Math.random() - 0.5) * 0.2,
      (Math.random() - 0.5) * 0.2
    );
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <mesh geometry={nodes.connector.geometry} scale={10}>
        <meshStandardMaterial
          attach="material"
          color={hovered ? 'yellow' : color} // Change color on hover
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/c-transformed.glb');
