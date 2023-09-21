import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      codeLink: "Portfolio 1",
      demoLink: "Portfolio 1",
      image: p1,
    },
    {
      id: 2,
      codeLink: "Portfolio 2",
      demoLink: "Portfolio 2",
      image: p2,
    },
    {
      id: 3,
      codeLink: "Portfolio 3",
      demoLink: "Portfolio 3",
      image: p3,
    },
    {
      id: 4,
      codeLink: "Portfolio 4",
      demoLink: "Portfolio 4",
      image: p4,
    },
    {
      id: 5,
      codeLink: "Portfolio 5",
      demoLink: "Portfolio 5",
      image: p5,
    },
    {
      id: 6,
      codeLink: "Portfolio 6",
      demoLink: "Portfolio 6",
      image: p6,
    },
  ];
  return (
    <div
      className="flex flex-col md:flex-row lg:h-screen w-full pt-16 px-6 bg-gradient-to-b from-black via-black to-gray-800"
      name="portfolio"
    >
      <div className="max-w-screen-lg mx-auto items-center px-4 md:flex-row">
        <div className="py-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
          {portfolios.map((portfolio) => {
            return (
              <div
                key={portfolio.id}
                className="max-h-46 shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
              >
                <img
                  className="max-h-40 w-full rounded-t-lg"
                  src={portfolio.image}
                  alt="p1"
                />
                <div className="flex justify-between px-12 py-2.5 text-white text-xl">
                  <button className="hover:scale-110 duration-300  text-gray-500 hover:text-white">
                    Demo
                  </button>
                  <button className="hover:scale-110 duration-300 text-gray-500 hover:text-white">
                    {"<Code />"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
