import React from "react";

export default function Skills() {
  const skills = [
    { category: "Programming", items: "Java, Python" },
    { category: "Web Technologies", items: "HTML, CSS, JavaScript,  Node.js" },
    { category: "Frameworks", items: "Express.js,React.js ,TailwindCSS" },
    { category: "Databases", items: "MySQL, MongoDB" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
      <div className="w-full px-6 md:px-10 lg:px-20 mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300 w-full"
            >
              <h4 className="font-semibold text-xl md:text-2xl text-purple-600 mb-3">
                {skill.category}
              </h4>
              <p className="text-gray-700 text-lg md:text-xl">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
