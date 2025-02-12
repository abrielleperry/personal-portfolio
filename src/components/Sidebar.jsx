import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="h-screen w-16 bg-black text-gray-300 flex flex-col items-center justify-between py-4">
      {/* Logo */}
      <div className="text-white text-2xl font-bold mt-4">AP</div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-20">
        {["About", "Services", "Stats", "Resume", "Portfolio", "Contact"].map(
          (item, index) => (
            <div
              key={index}
              className="rotate-[-90deg] text-sm cursor-pointer hover:text-white transition"
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center space-y-4">
        <FaLinkedinIn className="text-2xl cursor-pointer hover:text-white transition" />
        <FaGithub className="text-2xl cursor-pointer hover:text-white transition" />
      </div>
    </div>
  );
}
