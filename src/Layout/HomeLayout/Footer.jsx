import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  const links = (
    <>
      <li>
        <Link to={`/`}
          rel="noopener noreferrer"
          href="#"
          className="hover:dark:text-violet-600"
        >
          Home
        </Link>
      </li>
      <li>
        <Link to={`/events`}
          rel="noopener noreferrer"
          href="#"
          className="hover:dark:text-violet-600"
        >
          Events
        </Link>
      </li>
      <li>
        <Link to={`/myprofile`}
          rel="noopener noreferrer"
          href="#"
          className="hover:dark:text-violet-600"
        >
          My Profile
        </Link>
      </li>
    </>
  );
  return (
    <footer className="p-6 bg-[#34495e] dark:text-gray-900">
      <div className="container px-6 mx-auto text-white space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
        <div className="md:flex space-y-2 justify-between">
          <div className=" ">
            <Link to={`/`}
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 md:justify-start"
            >
              <span className="self-center text-2xl font-semibold">
                Event<span className="text-primary">Nest</span>
              </span>
            </Link>
          </div>
          <div className=" text-center md:text-left ">
            <ul className="flex gap-7 justify-center items-center">
				      {links}
            </ul>
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <Link to={'https://www.facebook.com/nurislamhasantonmoyth/'}><FaFacebook size={25}/></Link>
            <Link to={'https://x.com/hasan_tonm58653'}><FaXTwitter size={25}/></Link>
            <Link to={'https://github.com/tonmoyth'}><FaGithub size={25}/></Link>
          </div>
        </div>
        <div className="grid pt-6 justify-center items-center">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2025 All rights reserved</span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>terms and conditions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
