import { useState } from "react";
import Nav from '../component/Nav'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import useAuth from "../customHook/useAuth";

const Navbar = () => {
  const { user } = useAuth()
  return (
    <div className="h-40  animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500">
      <div className="container mx-auto">
        <div className="h-16 ">
          <Nav />
        </div>

        <div className="flex justify-between items-center  mt-4">
          <div className="flex gap-4">
            <FaGithub cursor={'pointer'} size={20} />
            <FaXTwitter cursor={'pointer'} size={20} />
            <FaLinkedin cursor={'pointer'} size={20} />
            <PiInstagramLogoFill cursor={'pointer'} size={20} />
          </div>
          <div className="flex justify-center items-center" style={{ direction: "rtl" }}>

            {
              user ?
                <div>
                  <h1>Welcome! <span className="text-yellow-200">{user?.displayName?.split(" ")[0]}</span></h1>
                  <p className="text-sm">.We're delighted to have you here <br /> Feel free to explore our platform</p>
                </div>
                :
                <div className="flex gap-4">
                  <Link to={"/login"} className="relative text-xs  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                    </span>
                    <span className="relative text-white">Login</span>
                  </Link>
                  <Link to={'/register'} className="relative text-xs  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                    </span>
                    <span className="relative text-white">register</span>
                  </Link>
                </div>
            }



          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
