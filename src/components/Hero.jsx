import "../styles/Hero.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function LaptopModel() {
  const { scene, animations } = useGLTF("/open.glb");
  const mixer = useRef(null);

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      mixer.current.timeScale = 0.5; // Slow down animation

      animations.forEach((clip) => {
        const action = mixer.current?.clipAction(clip);
        if (action) {
          action.setLoop(THREE.LoopOnce, 1);
          action.clampWhenFinished = true;
          action.play();
        }
      });
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <primitive
      object={scene}
      scale={1.5}
      rotation={[0.05, Math.PI / 10, 0]} // Slightly less tilt and rotation
      position={[0, -0.3, 0]} // Raise slightly for balance
    />
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black tracking-wider leading-loose font-climate-crisis">
      <h1 className="gif-text text-[100px] uppercase text-center w-full">
        Abrielle Perry
      </h1>

      <div className="w-25 h-[300px] relative flex flex-col justify-center">
        <div className="role relative w-full h-[30px] flex items-center mt-[-10px]">
          <div className="pink-block block absolute h-full"></div>
          <p className="fullstack-dev-text text-[24px]">Fullstack Developer</p>
        </div>
      </div>

      <Canvas>
        {/* Pull the camera back slightly */}
        <PerspectiveCamera makeDefault position={[4, 2.5, 6]} fov={45} />

        {/* Lighting for natural depth */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, -2, -4]} intensity={0.4} />

        <LaptopModel />

        {/* OrbitControls with limited rotation */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.4}
          minPolarAngle={Math.PI / 3.2}
        />
      </Canvas>
    </div>
  );
}
