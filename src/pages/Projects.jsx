import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const BASE = import.meta.env.BASE_URL; // GitHub Pages base URL

  const projects = [
    {
      title: "Travel Website",
      description:
        "Responsive travel site using React, Vite, and Tailwind with search functionality and interactive UI.",
      image: `${BASE}travel-website.png`,
      github: "https://github.com/lakshmi7654321?tab=repositories",
    },
    {
      title: "Food Delivery Website",
      description:
        "MERN stack food ordering system with authentication, menu, cart, and order tracking functionality.",
      image: `${BASE}food-delivery-website.png`,
      github: "https://github.com/lakshmi7654321?tab=repositories",
    },
    {
      title: "House Landing Page",
      description:
        "A modern landing page for real estate listings with responsive design and call-to-action features.",
      image: `${BASE}home-landing-page.png`,
      github: "https://github.com/lakshmi7654321?tab=repositories",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50">
      <div className="section-container px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              image={p.image}
              titleCenter={true}
              github={p.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
