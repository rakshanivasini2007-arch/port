import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { DigitalCore } from './DigitalCore';
import { BackgroundParticles } from './BackgroundParticles';
import { useMousePosition } from '../../hooks/useMousePosition';

export const HeroCanvas: React.FC = () => {
  const { normalizedX, normalizedY } = useMousePosition();

  return (
    <div className="w-full h-full min-h-[420px] lg:min-h-[550px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFFFF" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#FF2E93" />
        
        <Suspense fallback={null}>
          <DigitalCore mouseNormalized={{ x: normalizedX, y: normalizedY }} />
          <BackgroundParticles />
        </Suspense>
      </Canvas>
    </div>
  );
};
