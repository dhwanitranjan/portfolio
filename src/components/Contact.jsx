import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full pt-16 bg-gradient-to-t from-black via-black to-gray-800"
      name="contact"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto items-center p-4 h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Contact
          </p>
        </div>

        <div className="flex justify-center items-center w-96">
          <form
            action="https://getform.io/f/3975efb3-dd77-4f14-bd75-87377298dc83"
            method="POST"
            className="flex flex-col w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              type="email"
              rows={8}
              name="message"
              placeholder="Enter your Message"
              className="py-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:110 duration-300">
              Let's connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
