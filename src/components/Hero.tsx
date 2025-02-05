import "../styles/Hero.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

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
    </div>
  );
}
