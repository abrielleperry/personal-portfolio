import { motion } from "framer-motion";
import { useState } from "react";
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
  { id: "Stats", component: <Stats /> },
  { id: "Resume", component: <Resume /> },
  { id: "Portfolio", component: <Portfolio /> },
  { id: "Contact", component: <Contact /> },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && current < sections.length - 1) {
      setCurrent(current + 1);
    } else if (event.deltaY < 0 && current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div onWheel={handleScroll} className="h-screen w-full overflow-hidden">
      <motion.div
        animate={{ y: `-${current * 100}vh` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-full"
      >
        {sections.map((section) => (
          <div key={section.id} className="h-screen">
            {section.component}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
