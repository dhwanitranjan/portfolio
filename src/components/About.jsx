import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row lg:h-screen w-full pt-20 px-6 bg-gradient-to-t from-black via-black to-gray-800"
      name="about"
    >
      <div className="max-w-screen-lg mx-auto items-center px-4 md:flex-row">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            About
          </p>
        </div>
        <p className="text-xl mt-20 text-white">
          Over a year of hands-on experience in building dynamic and performant
          web and mobile applications. Proficient in leveraging the power of
          React JS and React Native to create intuitive user interfaces and
          seamless user experiences. Adept in utilizing TypeScript to enhance
          code quality and catch errors early, ensuring robust and reliable
          software solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
