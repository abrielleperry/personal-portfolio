"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
function IphoneModel() {
  const { scene } = useGLTF("/iphone.glb"); // Path from public folder
  const modelRef = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust speed if needed
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} />;
}

export default function AboutMe() {
  return (
    <div className="flex flex-row h-screen bg-white text-black">
      <div className="flex-1">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <IphoneModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
      <div className="flex-1 rounded-full">
        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Abrielle Perry
          </p>

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Education
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Computer Science and Full Stack Web Development
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Email
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            abrielleperry22@icloud.com
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Phone
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            918-728-5419
          </p>
        </a>

        <p className="font-normal text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          dolorem error quia natus, vitae provident sed quam laudantium facilis
          consequuntur eius maxime sunt quos libero. Amet reprehenderit
          necessitatibus qui tenetur! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi, porro in facere totam nulla placeat quod,
          vel aliquid eum corporis sunt! Molestiae tempore, cupiditate eaque
          explicabo fugit voluptas optio non. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Obcaecati accusamus ea cupiditate amet
          aperiam nostrum, quos quam quis ducimus facere provident saepe
          impedit! Consectetur delectus necessitatibus nostrum fugit incidunt
          nobis.
        </p>
      </div>
    </div>
  );
}
