import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Stats from "./Stats";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const sections = [
  { id: "Hero", component: <Hero /> },
  { id: "AboutMe", component: <AboutMe /> },
  { id: "Services", component: <Services /> },
  { id: "Stats", component: <Stats /> }, // This will receive the isActive prop
  { id: "Resume", component: <Resume /> },
  { id: "Portfolio", component: <Portfolio /> },
  { id: "Contact", component: <Contact /> },
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false); // Ref to control scroll throttling

  const handleScroll = (event: WheelEvent) => {
    if (isScrolling.current) return; // Prevent multiple scrolls during transition

    isScrolling.current = true;

    if (event.deltaY > 0 && current < sections.length - 1) {
      setCurrent((prev) => prev + 1);
    } else if (event.deltaY < 0 && current > 0) {
      setCurrent((prev) => prev - 1);
    }

    // Set timeout to allow scrolling again after the transition ends
    setTimeout(() => {
      isScrolling.current = false;
    }, 1500); // Matches the transition duration
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [current]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <motion.div
        animate={{ y: `-${current * 100}vh` }}
        transition={{ duration: 1.5, ease: "easeInOut" }} // Slower scroll transition
        className="h-full"
      >
        {sections.map((section, index) => (
          <div key={section.id} className="h-screen">
            {section.id === "Stats" ? (
              <Stats isActive={current === index} />
            ) : (
              section.component
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
