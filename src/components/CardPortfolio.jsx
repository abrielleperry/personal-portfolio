import React from "react";

export default function CardPortfolio({
  imageSrc,
  imageAlt,
  title,
  link,
  description,
  linkText,
}) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {filteredProjects.map((project) => (
        <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.category}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
