import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, Torus, Sphere, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.08;
    const targetX = mouse.x * 0.3;
    const targetY = mouse.y * 0.2;
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Torus — teal */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <Torus args={[1, 0.32, 24, 80]} position={[-2.4, 0.6, 0]}>
          <meshStandardMaterial
            color="#2DD4BF"
            emissive="#14B8A6"
            emissiveIntensity={0.35}
            metalness={0.7}
            roughness={0.25}
          />
        </Torus>
      </Float>

      {/* Distorted sphere — amber */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[0.9, 48, 48]} position={[2.2, -0.4, -0.5]}>
          <meshStandardMaterial
            color="#F5A623"
            emissive="#E8A33D"
            emissiveIntensity={0.25}
            metalness={0.6}
            roughness={0.3}
          />
        </Sphere>
      </Float>

      {/* Icosahedron wireframe — teal */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[1.1, 0]} position={[0, 0, 1.5]}>
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#2DD4BF"
            emissiveIntensity={0.4}
            wireframe
            metalness={0.5}
            roughness={0.4}
          />
        </Icosahedron>
      </Float>

      {/* Small accent sphere */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere args={[0.28, 32, 32]} position={[1.4, 1.6, 0.8]}>
          <meshStandardMaterial
            color="#5EEAD4"
            emissive="#2DD4BF"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      </Float>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#2DD4BF" />
      <pointLight position={[-5, -3, 2]} intensity={0.8} color="#F5A623" />
      <pointLight position={[0, 3, -4]} intensity={0.5} color="#22D3EE" />
    </>
  );
}

export default function Hero3D() {
  const isMobile = useMemo(
    () => typeof window !== 'undefined' && window.innerWidth < 768,
    []
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Lights />
        <FloatingShapes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Suspense>
    </Canvas>
  );
}
