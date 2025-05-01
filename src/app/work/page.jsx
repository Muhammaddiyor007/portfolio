import PageIntro from "@/components/PageIntro";
import React from "react";

// Misol loyihalar
const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    link: "#"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    link: "#"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    link: "#"
  },
  {
    title: "Project 4",
    description: "A brief description of Project 4.",
    link: "#"
  },
];

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      {/* Container bilan o'ralgan loyihalar ro'yxati */}
      <div className="container mx-auto px-4 py-12">
        {/* RESPONSIVE: mobilda vertical, desktopda 2ta qator */}
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* 1-qator (2 ta card) */}
          <div className="flex-1 flex flex-col gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl  font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>

          {/* 2-qator (yana 2 ta card) */}
          <div className="flex-1 flex flex-col gap-8 mt-8 lg:mt-0">
            {projects.slice(2).map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl text-black-100 font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPage;
