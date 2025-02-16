import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const sections = [
  { id: "Hero", component: <Hero /> },
  { id: "AboutMe", component: <AboutMe /> },
  { id: "Services", component: <Services /> },
  { id: "Resume", component: <Resume /> },
  { id: "Portfolio", component: <Portfolio /> },
  { id: "Contact", component: <Contact /> },
];

export default function Page() {
  return (
    <div className="w-full overflow-y-auto">
      {sections.map((section) => (
        <div key={section.id} className="min-h-screen">
          {section.component}
        </div>
      ))}
    </div>
  );
}
