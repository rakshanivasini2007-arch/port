import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const AbstractDashboard: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const chartRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (chartRef.current) {
      chartRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Glass Main Dashboard Panel */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 2.0, 0.1]} />
          <meshStandardMaterial
            color="#141420"
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Emissive Border Glow */}
        <mesh position={[0, 0, -0.01]}>
          <boxGeometry args={[3.25, 2.05, 0.08]} />
          <meshBasicMaterial color="#FF2E93" wireframe />
        </mesh>

        {/* Floating 3D Chart Bars */}
        <group ref={chartRef} position={[-0.8, -0.2, 0.2]}>
          <mesh position={[-0.4, 0.2, 0]}>
            <boxGeometry args={[0.2, 0.8, 0.2]} />
            <meshStandardMaterial color="#FF2E93" emissive="#FF2E93" emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[0.2, 1.2, 0.2]} />
            <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0.4, 0.1, 0]}>
            <boxGeometry args={[0.2, 0.6, 0.2]} />
            <meshStandardMaterial color="#FF85C0" emissive="#FF85C0" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0.8, 0.5, 0]}>
            <boxGeometry args={[0.2, 1.4, 0.2]} />
            <meshStandardMaterial color="#FF1493" emissive="#FF1493" emissiveIntensity={0.8} />
          </mesh>
        </group>

        {/* Floating Expense Card Widget */}
        <mesh position={[0.9, 0.4, 0.3]} rotation={[0, -0.2, 0.1]}>
          <boxGeometry args={[1.0, 0.6, 0.05]} />
          <meshStandardMaterial color="#FF2E93" emissive="#D6006B" emissiveIntensity={0.4} />
        </mesh>
      </Float>
    </group>
  );
};

export const ProjectVisualCanvas: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[260px] relative pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FFFFFF" />
        <directionalLight position={[-5, -5, -2]} intensity={1} color="#FF2E93" />
        <AbstractDashboard />
      </Canvas>
    </div>
  );
};
