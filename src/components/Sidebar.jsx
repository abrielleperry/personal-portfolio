import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Sidebar() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-16 bg-black text-gray-300 flex flex-col items-center justify-between py-4 fixed">
      {/* Logo */}
      <div className="text-white text-2xl font-bold mt-4">AP</div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-20">
        {["Hero", "AboutMe", "Services", "Resume", "Portfolio", "Contact"].map(
          (item, index) => (
            <button
              key={index}
              className="rotate-[-90deg] text-sm cursor-pointer hover:text-white transition"
              onClick={() => handleScroll(item)}
            >
              {item}
            </button>
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
