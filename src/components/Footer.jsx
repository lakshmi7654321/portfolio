import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 border-t border-gray-200">
      <div className="section-container py-12 text-center flex flex-col items-center gap-4 px-6 md:px-20">
        {/* Name */}
        <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent hover:tracking-wide transition-all duration-300">
          Lakshmipriya M
        </h3>

        {/* Subtitle */}
        <p className="text-gray-700 text-sm md:text-base">
          <span className="text-primary font-semibold">Web Developer</span> •{" "}
          <span className="text-primary font-semibold">IoT Enthusiast</span> •{" "}
          <span className="text-primary font-semibold">Cloud Learner</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4">
          <a
            href="mailto:lakshmimohandass765@gmail.com"
            className="text-gray-500 hover:text-blue-600 text-2xl md:text-3xl transition-transform transform hover:scale-125"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/lakshmi-priya-m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 text-2xl md:text-3xl transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/lakshmi7654321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 text-2xl md:text-3xl transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm mt-6">
          © {new Date().getFullYear()} Lakshmipriya M — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
