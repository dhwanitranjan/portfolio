import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/dhwanit-ranjan",
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      href: "mailto:dhwanitrranjan@gmail.com",
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 3,
      href: "/resume.pdf",
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => {
          return (
            <li
              className={
                "flex justify-between item-center w-40 py-3 px-3 bg-gray-500 ml-[-104px] hover:ml-[-10px] hover:rounded-md duration-300" +
                " " +
                link.style
              }
            >
              <a
                className="flex justify-between items-center w-full text-white ps-1"
                href={link.href}
                download={link.download}
                target="_blank"
                rel="noreferrer"
              >
                {link.child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
