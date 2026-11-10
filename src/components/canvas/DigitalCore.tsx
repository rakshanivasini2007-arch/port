import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface DigitalCoreProps {
  mouseNormalized: { x: number; y: number };
}

export const DigitalCore: React.FC<DigitalCoreProps> = ({ mouseNormalized }) => {
  const groupRef = useRef<THREE.Group>(null);
  const outerCoreRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ringsGroupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particle positions
  const particleCount = 120;
  const particlePositions = React.useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const targetX = mouseNormalized.x * 0.4;
    const targetY = mouseNormalized.y * 0.4;

    if (groupRef.current) {
      // Smooth interpolation for mouse parallax
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * delta * 2.5;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * delta * 2.5;
    }

    if (outerCoreRef.current) {
      outerCoreRef.current.rotation.y += delta * 0.3;
      outerCoreRef.current.rotation.x += delta * 0.15;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.6;
      innerCoreRef.current.rotation.z += delta * 0.4;
    }

    if (ringsGroupRef.current) {
      ringsGroupRef.current.rotation.z += delta * 0.2;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={1.1}>
        {/* Central Emissive Core Node */}
        <mesh ref={innerCoreRef}>
          <octahedronGeometry args={[0.85, 0]} />
          <meshStandardMaterial
            color="#FF2E93"
            emissive="#FF1493"
            emissiveIntensity={2.5}
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>

        {/* Inner Glowing Wireframe Cage */}
        <mesh scale={1.05}>
          <octahedronGeometry args={[0.9, 0]} />
          <meshBasicMaterial
            color="#FFFFFF"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Outer Crystalline Glass Shell */}
        <mesh ref={outerCoreRef}>
          <icosahedronGeometry args={[1.65, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            resolution={256}
            transmission={0.92}
            roughness={0.15}
            clearcoat={1}
            clearcoatRoughness={0.1}
            thickness={0.6}
            ior={1.4}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color="#12121A"
          />
        </mesh>

        {/* Outer Crystal Wireframe Accents */}
        <mesh scale={1.68}>
          <icosahedronGeometry args={[1.65, 0]} />
          <meshBasicMaterial
            color="#FF2E93"
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Orbital Futuristic Tech Rings */}
        <group ref={ringsGroupRef}>
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.1, 0.02, 16, 100]} />
            <meshBasicMaterial color="#FF2E93" transparent opacity={0.6} />
          </mesh>
          <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[2.3, 0.015, 16, 100]} />
            <meshBasicMaterial color="#FFFFFF" transparent opacity={0.3} />
          </mesh>
        </group>

        {/* Floating Core Particle Field */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={particlePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            color="#FF85C0"
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* Ambient Lights */}
        <pointLight position={[3, 3, 3]} color="#FF2E93" intensity={8} distance={10} />
        <pointLight position={[-3, -3, -3]} color="#00E5FF" intensity={3} distance={10} />
      </group>
    </Float>
  );
};
