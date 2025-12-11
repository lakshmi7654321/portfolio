import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
      <div className="w-full px-6 md:px-10 lg:px-20 mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Contact
        </h2>

        {/* Contact Card (Wider) */}
        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full max-w-4xl mx-auto">

          {/* Rows */}
          <div className="flex flex-col gap-8 text-2xl">

            {/* Email */}
            <div className="flex items-center">
              <div className="w-1/4 font-bold text-gray-800 text-right pr-6">
                Email:
              </div>
              <div className="w-3/4 text-left text-purple-600 font-semibold break-words">
                lakshmimohandass765@gmail.com
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="w-1/4 font-bold text-gray-800 text-right pr-6">
                Phone:
              </div>
              <div className="w-3/4 text-left text-purple-600 font-semibold">
                9342431309
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <div className="w-1/4 font-bold text-gray-800 text-right pr-6">
                Location:
              </div>
              <div className="w-3/4 text-left text-purple-600 font-semibold">
                Madurai
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center">
              <div className="w-1/4 font-bold text-gray-800 text-right pr-6">
                LinkedIn:
              </div>
              <div className="w-3/4 text-left">
                <a
                  href="https://linkedin.com/in/lakshmi-priya-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline font-semibold break-words"
                >
                  linkedin.com/in/lakshmi-priya-m
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center">
              <div className="w-1/4 font-bold text-gray-800 text-right pr-6">
                GitHub:
              </div>
              <div className="w-3/4 text-left">
                <a
                  href="https://github.com/lakshmi7654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline font-semibold break-words"
                >
                  github.com/lakshmi7654321
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
