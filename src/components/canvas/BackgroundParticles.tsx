import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const BackgroundParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 300;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#FF2E93');
    const color2 = new THREE.Color('#FFFFFF');
    const color3 = new THREE.Color('#6B21A8');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 3;

      // Color variation
      const mix = Math.random();
      const finalColor = mix < 0.5 ? color1 : mix < 0.8 ? color2 : color3;
      col[i * 3] = finalColor.r;
      col[i * 3 + 1] = finalColor.g;
      col[i * 3 + 2] = finalColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group>
      {/* Background Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Subtle Grid plane in background */}
      <gridHelper
        args={[30, 30, '#FF2E93', '#1F1F2E']}
        position={[0, -5, -5]}
        rotation={[Math.PI / 6, 0, 0]}
      />
    </group>
  );
};
