import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom Button Component
export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${className} hover:opacity-80 focus:ring focus:ring-blue-300`}
    >
      {children}
    </button>
  );
}

// Projects Data (All 10 Projects)
const projects = [
  {
    id: 1,
    title: "BloomHouse",
    category: "APIs, JavaScript, Bootstrap, HTML & CSS",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Reality Check",
    category: "Python, Data Visualization, Dash, API, Flask, JSON, CSV, XML",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Smiling School",
    category: "HTML & CSS, Responsive Design, Bootstrap, JavaScript",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "React and JSX",
    category: "React, JavaScript, JSX, Vite, CSS",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Music Player",
    category: "React, TypeScript, Tailwind, Testing & Automation",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "The Joy of Painting",
    category:
      "NoSQL, APIs, Python, JavaScript, Node.js, CSV, ETL, RESTful API, MongoDB",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 7,
    title: "School Catalog",
    category: "React, Fetch API, useEffect, JavaScript, TypeScript",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 8,
    title: "Step Counter App",
    category: "React Native, TypeScript, Tailwind, Mobile",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 9,
    title: "Festivals Around the World",
    category:
      "JavaScript, Node.js, Express, MongoDB, Logging & Caching, APIs, ETL",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 10,
    title: "Coming Soon",
    category: "TBD",
    image: "https://via.placeholder.com/300",
  },
];

// Category Groupings
const categoryGroups = {
  Frontend: [
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind",
    "HTML & CSS",
    "Bootstrap",
  ],
  Backend: ["Node.js", "Express", "RESTful API", "MongoDB", "NoSQL", "ETL"],
  Fullstack: [
    "APIs",
    "Data Visualization",
    "Logging & Caching",
    "Dashboards",
    "Testing & Automation",
  ],
  "Data & Mobile": ["Python", "CSV", "JSON", "XML", "Mobile"],
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openDropdown, setOpenDropdown] = useState(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) =>
          p.category.split(", ").includes(selectedCategory)
        );

  return (
    <div className="p-8">
      <h2 className="font-publicSans uppercase text-lg font-semibold tracking-widest mb-4">
        Project Portfolio
      </h2>
      <p className="font-dmSerifDisplay text-5xl leading-relaxed">
        Browse projects by category
      </p>

      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {/* "All" Button */}
        <Button
          key="All"
          onClick={() => setSelectedCategory("All")}
          className={`${
            selectedCategory === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          All
        </Button>

        {/* Category Dropdowns */}
        {Object.entries(categoryGroups).map(([group, categories]) => (
          <div key={group} className="relative dropdown-container">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdown(openDropdown === group ? null : group);
              }}
              className="bg-gray-300"
            >
              {group}
            </Button>
            {openDropdown === group && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2 p-2 w-48 z-50">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setOpenDropdown(null); // Close dropdown after selection
                    }}
                    className={`block w-full text-left px-4 py-2 ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.category}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No projects found for this category.
          </p>
        )}
      </motion.div>
    </div>
  );
}
