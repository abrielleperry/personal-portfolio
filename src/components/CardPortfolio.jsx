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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href={link}>
        <img className="rounded-t-lg" src={imageSrc} alt={imageAlt} />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}
