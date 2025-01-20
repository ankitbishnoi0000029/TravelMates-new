"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import {
  IoMdHome,
  IoIosContacts,
  IoIosHelpCircle,
  IoIosNotifications,
} from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaUserCircle, FaUsers, FaUser } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiLogoutCircleRFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/redux/reducers/reducer";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const count = useSelector((state) => state.counter.usertoken);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="w-full flex justify-between items-center bg-[#391965] border-b-2 border-pink-600 p-4">
        <div>
          <Link href="/">
            <Image
              width={96}
              height={72}
              alt="logo"
              src="./logo/Pixio.svg"
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-4 text-white">
          <ul className="flex space-x-4 items-center font-medium">
            <li className="hover:text-pink-600">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-pink-600">
              <Link href="/">Create Post</Link>
            </li>
            <li className="hover:text-pink-600">
              <Link href="/">Friends</Link>
            </li>
            <li className="hover:text-pink-600">
              <Link href="/">Notifications</Link>
            </li>
            <li className="hover:text-pink-600">
              <Link href="/">Help</Link>
            </li>

            {count ? (
              <>
                <div className="flex items-center space-x-4">
                  <li>
                    <Link
                      href="/chat"
                      className="px-5 py-2 flex items-center gap-1 rounded-md text-white bg-pink-600"
                    >
                      <IoChatbubbleEllipses size={20} />
                      Chat
                    </Link>
                  </li>
                  <Link
                    href="/userprofile"
                    className="px-5 py-2 flex items-center gap-1 rounded-md text-pink-600 bg-white"
                  >
                    <FaUserCircle size={20} />
                    Profile
                  </Link>

                  <button
                    onClick={() => {
                      dispatch(userLogin(false));
                    }}
                    className="px-5 py-2 flex items-center gap-1 rounded-md bg-pink-600 text-white"
                  >
                    <RiLogoutCircleRFill size={20} />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="px-5 py-2 flex items-center gap-1 rounded-md text-white bg-pink-600"
                >
                  <FaUsers size={20} />
                  Register
                </Link>
                <Link
                  href="/login"
                  className="px-5 py-2 flex items-center gap-1 rounded-md text-pink-600 bg-white"
                >
                  <FaUser size={20} />
                  Login
                </Link>
              </>
            )}
          </ul>
        </div>

        <IoMenu
          className="h-7 w-8 text-white hover:rotate-180 lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#391965] text-white">
          <ul className="flex flex-col space-y-2 p-4 font-medium">
            {count ? (
              <>
                <li className="hover:text-pink-600">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoMdHome className="inline-block mr-2" />
                    Home
                  </Link>
                </li>
                <li className="hover:text-pink-600">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    <MdAddPhotoAlternate className="inline-block mr-2" />
                    Create Post
                  </Link>
                </li>
                <li className="hover:text-pink-600">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoIosContacts className="inline-block mr-2" />
                    Friends
                  </Link>
                </li>
                <li className="hover:text-pink-600">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoIosNotifications className="inline-block mr-2" />
                    Notifications
                  </Link>
                </li>
                <li className="hover:text-pink-600">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoIosHelpCircle className="inline-block mr-2" />
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chat"
                    className="px-5 py-2 flex items-center gap-1 rounded-md text-white bg-pink-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoChatbubbleEllipses size={20} />
                    Chat
                  </Link>
                  <Link
                    href="/userprofile"
                    className="px-5 py-2 flex items-center gap-1 rounded-md text-pink-600 bg-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUserCircle size={20} />
                    Profile
                  </Link>

                  <button
                    onClick={() => {
                      dispatch(userLogin(false));
                      setMenuOpen(false);
                    }}
                    className="px-5 py-2 flex items-center gap-1 rounded-md bg-pink-600 text-white"
                  >
                    <RiLogoutCircleRFill size={20} />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <div className="flex flex-col space-y-2 mt-4">
                <Link
                  href="/signup"
                  className="px-5 py-2 flex items-center gap-1 rounded-md text-white bg-pink-600"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaUsers size={20} />
                  Register
                </Link>
                <Link
                  href="/login"
                  className="px-5 py-2 flex items-center gap-1 rounded-md text-pink-600 bg-white"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaUser size={20} />
                  Login
                </Link>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
