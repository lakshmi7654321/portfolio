import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
      <div className="w-full px-6 md:px-10 lg:px-20 mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          About Me
        </h2>

        {/* About Card */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full">
          {/* About Text */}
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            I am a <span className="text-purple-600 font-semibold">CSBS student</span> at{" "}
            <span className="text-purple-600 font-semibold">
              PSNA College of Engineering and Technology (2021–2025)
            </span>. 
            I have experience in <span className="text-pink-500 font-semibold">Web Development</span>,{" "}
            <span className="text-yellow-500 font-semibold">IoT</span>,{" "}
            <span className="text-purple-600 font-semibold">Cloud Technologies</span>, and{" "}
            <span className="text-pink-500 font-semibold">UiPath RPA</span>. Completed internships at{" "}
            <span className="text-purple-600 font-semibold">Pantech Solutions</span> and{" "}
            <span className="text-purple-600 font-semibold">Octanet Services Pvt. Ltd.</span>
          </p>

          {/* Education */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900 text-center md:text-left">
              Education
            </h3>
            <ul className="space-y-6 text-gray-700 text-lg md:text-xl">
              <li>
                <span className="font-semibold text-purple-600">B.Tech - Computer Science and Business Systems</span><br />
                PSNA College of Engineering and Technology, Dindigul | CGPA:{" "}
                <span className="font-semibold text-purple-600">8.35</span> | 2021–2025
              </li>
              <li>
                <span className="font-semibold text-pink-500">12th - Dolphin Matric Hr Sec School</span><br />
                Madurai | Percentage: <span className="font-semibold text-pink-500">88%</span> | 2021
              </li>
              <li>
                <span className="font-semibold text-yellow-500">10th - Dolphin Matric Hr Sec School</span><br />
                Madurai | Percentage: <span className="font-semibold text-yellow-500">88%</span> | 2019
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
