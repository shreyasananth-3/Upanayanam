import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOrbs() {
  return (
    <>
      <Float speed={4} rotationIntensity={0.3} floatIntensity={0.4}>
        <Sphere args={[0.8, 32, 32]} position={[-2, 1, -5]}>
          <meshStandardMaterial
            color="#f7b500"
            emissive="#f7b500"
            emissiveIntensity={0.4}
            metalness={0.3}
            roughness={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={3.5} rotationIntensity={0.25} floatIntensity={0.35}>
        <Sphere args={[0.6, 32, 32]} position={[2.5, 0.5, -4]}>
          <meshStandardMaterial
            color="#d49600"
            emissive="#d49600"
            emissiveIntensity={0.3}
            metalness={0.2}
            roughness={0.3}
          />
        </Sphere>
      </Float>

      <Float speed={4.5} rotationIntensity={0.35} floatIntensity={0.45}>
        <Sphere args={[0.5, 32, 32]} position={[0, -1, -3]}>
          <meshStandardMaterial
            color="#fff8dc"
            emissive="#ffd700"
            emissiveIntensity={0.2}
            metalness={0.4}
            roughness={0.1}
          />
        </Sphere>
      </Float>
    </>
  );
}

function Temple() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central dome */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.4, 2, 32]} />
        <meshStandardMaterial
          color="#fff8dc"
          emissive="#f7b500"
          emissiveIntensity={0.15}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Dome top */}
      <mesh position={[0, 1.1, 0]}>
        <coneGeometry args={[1.2, 0.8, 32]} />
        <meshStandardMaterial
          color="#d49600"
          emissive="#d49600"
          emissiveIntensity={0.2}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Pillars */}
      {[-1, 1].map((x) => (
        <mesh key={x} position={[x * 1.3, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.18, 2.5, 16]} />
          <meshStandardMaterial
            color="#f7b500"
            emissive="#f7b500"
            emissiveIntensity={0.1}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Base platform */}
      <mesh position={[0, -1.3, 0]}>
        <cylinderGeometry args={[2, 2.2, 0.5, 32]} />
        <meshStandardMaterial
          color="#faf8f3"
          emissive="#f7b500"
          emissiveIntensity={0.05}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
}

export function TempleScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#f7b500" />
      <pointLight position={[-10, 5, -10]} intensity={0.8} color="#d49600" />
      <directionalLight position={[0, 10, 5]} intensity={0.8} />

      <Temple />
      <FloatingOrbs />

      <Environment preset="studio" />

      <fog attach="fog" args={['#faf8f3', 2, 15]} />
    </Canvas>
  );
}

export default TempleScene;
