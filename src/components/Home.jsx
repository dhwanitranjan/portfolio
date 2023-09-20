import React from "react";
import myPic3 from "../assets/myPic3.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row lg:h-screen w-full pt-20 px-6 bg-gradient-to-b from-black via-black to-gray-800"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto items-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a React Developer
          </h2>
          <p className="text-gray-500 py-6">
            I have experience in developing reusable and responsive web apps.
            React, TypeScript, Redux, Bootstrap, TailWind
          </p>
          <div>
            <button className="group flex flex-row w-fit px-4 py-4 rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-340 w-96 mx-auto my-4 md:my-auto items-center sm:px-4 sm:py-6">
        <img className="rounded-2xl mx-auto" src={myPic3} alt="myPic3" />
      </div>
    </div>
  );
};

export default Home;
