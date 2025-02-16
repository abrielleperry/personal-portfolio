import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../styles/aboutMe.css";

export function IphoneModel() {
  const { scene } = useGLTF("/iphone.glb"); // Path from public folder
  const modelRef = useRef(null);
  const timeRef = useRef(0); // Track elapsed time

  useFrame((_, delta) => {
    if (modelRef.current) {
      timeRef.current += delta;

      // Adjust X and Y rotation to face correctly
      modelRef.current.rotation.x = Math.PI / 11; // Rotate 90 degrees on X-axis
      modelRef.current.rotation.y = Math.PI / 0.77; // Rotate 90 degrees on Y-axis

      // Apply hovering effect (smooth up and down motion)
      modelRef.current.position.y = Math.sin(timeRef.current * 2) * 0.2;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} />;
}

export default function AboutMe() {
  return (
    <div className="flex flex-row min-h-screen bg-white text-black p-8">
      <div className="flex-1">
        <Canvas>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} />
          <IphoneModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
      <div className=""></div>
    </div>
  );
}
