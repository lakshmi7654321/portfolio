import React from "react";

export default function ProjectCard({ title, description, image, titleCenter, github }) {
  return (
    <a
      href={github} // GitHub link
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-primary">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}

        {/* Title */}
        <h3
          className={`text-xl md:text-2xl font-semibold mb-2 text-primary ${
            titleCenter ? "text-center" : ""
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </a>
  );
}
