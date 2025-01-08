import React from "react";
import { IoMenu } from "react-icons/io5";
import {FaChevronDown, FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <nav>
      <div className="w-full flex z-50 justify-between p-4 items-center bg-[#391965] shadow-md ">
        <div>
          <Image width={96} height={72} alt="logo" src="./logo/Pixio.svg" />
        </div>
        <div className="flex">
          <ul className="flex space-x-4 text-base items-center font-sans-serif font-sans font-medium text-white ">
            <li className="flex items-center hover:cursor-pointer h-full px-2 hover:text-pink-600 ">
              <Link href="/">Home</Link>
            </li>
            <li className="flex z-50  px-2 gap-1 relative group  hover:cursor-pointer h-full items-center hover:transition-all hover:text-pink-600">
                Posts
                <ul className="hidden group-hover:block absolute  top-9 left-0 mt-2 w-48 bg-white shadow-lg">
                  <li className="px-4 py-2 hover:bg-pink-600  hover:text-white ">Item 1</li>
                  <li className="px-4 py-2 hover:bg-pink-600  hover:text-white">Item 2</li>
                  <li className="px-4 py-2 hover:bg-pink-600 hover:text-white ">Item 3</li>
                </ul>
                <FaChevronDown  className="transition-transform duration-300 group-hover:rotate-180"  />
            </li>
            <li className="flex z-50  px-2 gap-1 relative group hover:cursor-pointer h-full items-center hover:transition-all hover:text-pink-600">
                Pages 
                <ul className="hidden group-hover:block absolute  top-9 left-0 mt-2 w-48 bg-white shadow-lg">
                  <li className="px-4 py-2 hover:bg-pink-600  hover:text-white ">Item 1</li>
                  <li className="px-4 py-2 hover:bg-pink-600  hover:text-white">Item 2</li>
                  <li className="px-4 py-2 hover:bg-pink-600 hover:text-white ">Item 3</li>
                </ul>
                <FaChevronDown  className="transition-transform duration-300 group-hover:rotate-180"  />
            </li>
            <li className="flex items-center h-full hover:cursor-pointer hover:text-pink-600">
              Contect us
            </li>
            <li className="flex items-center px-2 h-full hover:cursor-pointer hover:text-pink-600">
              About Us
            </li>
          </ul>
          <div>
            <div>
              <span className="flex hover:cursor-pointer items-center  justify-end">
                <Link
                  href="/login"
                  className="px-5 flex items-center gap-1 py-2 rounded-md text-pink-600 bg-white mx-2  "
                >
                  <FaUser />
                  login
                </Link>
                <Link
                  href="/signup"
                  className="px-5 flex items-center gap-1 py-2 rounded-md text-white bg-pink-600"
                >
                  <FaUsers size={20} />
                  Register
                </Link>
                <IoMenu className="h-7  lg:hidden md:hidden w-8 m-3 hover:cursor-pointer " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
