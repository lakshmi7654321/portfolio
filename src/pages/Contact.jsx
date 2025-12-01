import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <span className="text-purple-600 font-semibold">
                lakshmimohandass765@gmail.com
              </span>
            </p>
            <p className="mb-4">
              <strong>Phone:</strong>{" "}
              <span className="text-purple-600 font-semibold">9342431309</span>
            </p>
            <p className="mb-4">
              <strong>Location:</strong>{" "}
              <span className="text-purple-600 font-semibold">Madurai</span>
            </p>
            <p className="mb-4">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/lakshmi-priya-m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-semibold"
              >
                linkedin.com/in/lakshmi-priya-m
              </a>
            </p>
            <p className="mb-4">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/lakshmi7654321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-semibold"
              >
                github.com/lakshmi7654321
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900 text-center">
              Send a Message
            </h4>

            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! (Demo)");
              }}
            >
              <input
                className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition text-gray-700"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition text-gray-700"
                placeholder="Your Email"
                required
              />
              <textarea
                className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition text-gray-700"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 font-semibold"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
