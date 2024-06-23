import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { Link } from "react-router-dom";


function Navigation() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
    <div className="w-full h-20  sticky top-0 left-0 z-[9999] border-b-2 border-b-slate-600 bg-slate-900">
      <div className="">
        <div className="text-white w-full h-20 flex justify-between items-center mx-auto px-5 max-w-[1240px] ">
          <h1 className="w-full font-bold uppercase text-3xl text-teal-500">
            <img src="/LogoMain.png" className="h-14" alt="fungrow logo"  />
          </h1>
          <ul className="hidden md:flex items-center">
            <li className="m-4 text-xl cursor-pointer hover:text-yellow-300 transition duration-150 ease-in-out ">
              <Link to="/" smooth={true} duration={500} offset={-80}>
                Home
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-yellow-300 transition duration-150 ease-in-out ">
              <Link to="Loading" smooth={true} duration={500}>
                Loading
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-yellow-300 transition duration-150 ease-in-out ">
              <Link to="Stack" smooth={true} duration={500} offset={-50}>
                Parent
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-yellow-300 transition duration-150 ease-in-out ">
              <Link to="Projects" smooth={true} duration={500} offset={-90}>
              <IoLogoAndroid size={25}/>
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer hover:text-yellow-300 transition duration-150 ease-in-out ">
              <Link to="Projects" smooth={true} duration={500} offset={-90}>
              <FaApple size={25}/>
              </Link>
            </li>
            <li className="m-4 text-xl cursor-pointer  transition duration-150 ease-in-out ">
              <Link to="/Login">
                <button className="py-2  flex w-56 items-center justify-center hover:text-yellow-300 hover:bg-indigo-900 bg-indigo-700 gap-2 rounded-full transition-all duration-300">Company Login <FaArrowRightLong /></button>
              </Link>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="cursor-pointer transition-all ease-in-out  block md:hidden"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-[50%] translate-x-[-50%]  top-[120px] bg-slate-900/[.98] border-[0.5px] overflow-hidden rounded-3xl w-[90%] h-fit transition-all ease-in-out duration-700 z-[189] backdrop-blur-sm shadow-2xl"
            : "fixed left-[150%] translate-x-[-50%]  top-[120px] bg-slate-800  border-[1px] overflow-hidden rounded-3xl w-[90%] h-fit transition-all ease-in-out duration-1000 z-[189] opacity-0"
        }
      >
        <ul className="text-white">
          <Link to="/" >
            <li className="p-4 border-b border-b-gray-700 hover:bg-zinc-950/[.5] transition-all ease-in-out duration-300">
              Home
            </li>
          </Link>
          <Link to="/Loading" smooth={true} >
            <li className="p-4 border-b border-b-gray-700 hover:bg-zinc-950/[.5]  transition-all ease-in-out duration-300">
              Loading
            </li>
          </Link>
          <Link to="Stack" smooth={true} duration={500} offset={-50}>
            <li className="p-4 border-b border-b-gray-700  hover:bg-zinc-950/[.5]  transition-all ease-in-out duration-300">
              Parent
            </li>
          </Link>

          <Link to="/Login" >
            <li className="p-4 border-b border-b-gray-700  hover:bg-zinc-950/[.5]  transition-all ease-in-out duration-300">
              Login
            </li>
          </Link>
        </ul>
      </div>
      <div className={nav ? "w-full h-full opacity-100 fixed bg-black/60 transition-all ease-in-out duration-300" : "opacity-0 transition-all ease-in-out duration-300" }>

      </div>
    </div>
    </>
  );
}

export default Navigation;
