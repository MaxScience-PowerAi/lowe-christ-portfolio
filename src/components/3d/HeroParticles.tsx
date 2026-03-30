'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSphere({ count = 3000 }) {
  const points = useRef<THREE.Points>(null);
  
  // Generate random points in a sphere volume using golden ratio for better distribution
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const r = 2.8 * Math.cbrt(Math.random()); 
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);

  // Generate colors - mix of cyan and violet
  const colors = useMemo(() => {
    const c = new Float32Array(count * 3);
    const color1 = new THREE.Color('#22d3ee'); // cyan-400
    const color2 = new THREE.Color('#8b5cf6'); // violet-500
    
    for (let i = 0; i < count; i++) {
      const mixedColor = color1.clone().lerp(color2, Math.random());
      c[i * 3] = mixedColor.r;
      c[i * 3 + 1] = mixedColor.g;
      c[i * 3 + 2] = mixedColor.b;
    }
    return c;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      // Continuous slow rotation
      points.current.rotation.x -= delta / 20;
      points.current.rotation.y -= delta / 30;
      
      // Interactive parallax based on mouse
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      points.current.rotation.x += 0.02 * (targetY - points.current.rotation.x);
      points.current.rotation.y += 0.02 * (targetX - points.current.rotation.y);
    }
  });

  return (
    <Points ref={points} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}

export function HeroParticles() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full opacity-70">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleSphere count={3500} />
      </Canvas>
    </div>
  );
}
