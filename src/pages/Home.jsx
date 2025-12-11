import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <div className="overflow-x-hidden">

      {/* Hero Section */}
      <section className="min-h-[75vh] flex items-center bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 md:px-16">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Lakshmipriya
              </span>
            </h1>

            <p className="mt-5 text-gray-700 text-lg md:text-xl leading-relaxed">
              I'm a <span className="text-purple-600 font-semibold">B.Tech CSBS</span> student
              passionate about <span className="text-pink-500 font-semibold">Web Development</span>,{" "}
              <span className="text-yellow-500 font-semibold">IoT</span>,{" "}
              <span className="text-purple-600 font-semibold">Cloud</span> and{" "}
              <span className="text-pink-500 font-semibold">Automation</span>.
            </p>

            <div className="mt-8 flex gap-5">
             <a
               href={`${BASE}Lakshmipriya-M-Resume.pdf`}
                download
             className="px-7 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 font-semibold"
              >
              Download Resume
                </a>


              {/* Smooth Scroll to Projects */}
              <button
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-7 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold"
              >
                View Projects
              </button>
            </div>
          </div>

         {/* Right Content (Profile Image) */}
     <div className="flex justify-center">
     <div className="w-90 h-90 md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl border-[2px] border-purple-300">
      <img
      src={`${BASE}passport-pic.jpeg`}
      alt="Lakshmipriya"
      className="w-full h-full object-cover object-center"
    />
    </div>
    </div>


        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
