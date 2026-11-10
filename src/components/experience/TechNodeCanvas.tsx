import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const NetworkNodes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  const nodePositions = [
    [0, 0, 0],
    [1.2, 0.8, -0.5],
    [-1.2, -0.6, 0.5],
    [0.8, -1.0, 0.3],
    [-0.7, 1.1, -0.2],
  ];

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Core Node */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial color="#FF2E93" emissive="#FF1493" emissiveIntensity={1.5} />
        </mesh>

        {/* Outer Connected Nodes */}
        {nodePositions.slice(1).map((pos, idx) => (
          <group key={idx}>
            <mesh position={pos as [number, number, number]}>
              <octahedronGeometry args={[0.25, 0]} />
              <meshStandardMaterial color="#FFFFFF" emissive="#FF85C0" emissiveIntensity={0.8} />
            </mesh>

            {/* Connecting lines */}
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([...nodePositions[0], ...pos])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#FF2E93" opacity={0.6} transparent />
            </line>
          </group>
        ))}

        {/* Database Cylindrical Nodes */}
        <mesh position={[1.5, -0.3, 0.6]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.5, 16]} />
          <meshStandardMaterial color="#1E1E2A" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
};

export const TechNodeCanvas: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[280px] relative pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={3} color="#FF2E93" />
        <pointLight position={[-5, -5, -5]} intensity={2} color="#00E5FF" />
        <NetworkNodes />
      </Canvas>
    </div>
  );
};
