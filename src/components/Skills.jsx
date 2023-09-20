import React from "react";
import logo_react from "../assets/logo_react.png";
import logo_bootstrap from "../assets/logo_bootstrap.png";
import logo_git from "../assets/logo_git.png";
import logo_javaScript from "../assets/logo_javaScript.png";
import logo_redux from "../assets/logo_redux.png";
import logo_tailwind from "../assets/logo_tailwind.png";
import logo_typescript from "../assets/logo_typescript.png";
import logo_css from "../assets/logo_css.png";
import logo_html from "../assets/logo_html.png";

const Skills = () => {
  const logos = [
    {
      id: 1,
      title: "React",
      logo: logo_react,
      style: "group-hover:rotate-180 duration-1000",
    },
    { id: 1, title: "Redux", logo: logo_redux },
    { id: 1, title: "JavaScript", logo: logo_javaScript, style: "hover:flip" },
    { id: 1, title: "TypeScript", logo: logo_typescript },
    { id: 1, title: "Git", logo: logo_git, style: "bg-white" },
    { id: 1, title: "CSS", logo: logo_css },
    { id: 1, title: "Tailwind", logo: logo_tailwind },
    { id: 1, title: "BootStrap", logo: logo_bootstrap },
    { id: 1, title: "HTML", logo: logo_html },
  ];
  return (
    <div
      className="flex flex-col md:flex-row w-full pt-20 px-6 bg-gradient-to-b from-black via-black to-gray-800 pb-24"
      name="about"
    >
      <div className="max-w-screen-lg mx-auto items-center px-4 md:flex-row">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0 text-center">
          {logos.map((logo, i) => {
            return (
              <div
                key={i}
                className="group max-h-48 object-fill shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
              >
                <img
                  className={
                    "h-full scale-90 object-scale-down w-full rounded-lg" +
                    " " +
                    logo.style
                  }
                  src={logo.logo}
                  alt="logo_react"
                />
                <div className="text-white text-xl">{logo.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
