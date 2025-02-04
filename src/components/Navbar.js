"use client";
import React, { useEffect, useState } from "react";
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
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { loginUserToken, logout, userId } from "@/redux/reducers/reducer";
import navbar from "./navbar.css";
import Banner from "./body/Banner";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const tokenTrue = useSelector((state) => state.MyStore.usertoken);
  const [navbarFixed, setNavbarFixed] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname();
  const handleLogout = () => {
    setMenuOpen(false);
    dispatch(logout())
    dispatch(loginUserToken(""))
    dispatch(userId(""))
    router.push('/login')
  };
  const [showPost, setshowPost] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setNavbarFixed(true);
        document.body.style.paddingTop = "120px";
      } else {
        setNavbarFixed(false);
        document.body.style.paddingTop = "0px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <nav
        className={`relative ${
          navbarFixed
            ? "fixed navbar-animation w-full opacity-80  navbar.body"
            : "block"
        } z-50 `}>
        <div
          className={`w-full flex  justify-between items-center bg-[#391965] p-4 px-4`}>
          <Link href="/">
            <Image
              width={96}
              height={72}
              alt="logo"
              src="/logo/Pixio.svg"
              className="cursor-pointer"
            />
          </Link>
          <div className="hidden  lg:flex items-center space-x-4 text-white">
            <ul className="flex space-x-4 items-center font-medium">
              <li className="hover:text-pink-600">
                <Link
                  href="/"
                  className={`${path === "/" ? "text-pink-600" : ""}`}>
                  Home
                </Link>
              </li>
              <li className={`hover:text-pink-600  hover:cursor-pointer`}>
                <div>
                  <Button
                    className=" hover:cursor-pointer"
                    onClick={handleOpen}>
                    <li className="hover:text-pink-600">
                      <Link
                        className="hover:text-pink-600 text-white capitalize font-semibold "
                        href="/">
                        Create post
                      </Link>
                    </li>
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    className="p-0"
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{ p: 0, ...style }} className="p-0">
                      <Banner />
                    </Box>
                  </Modal>
                </div>
              </li>
              <li className="hover:text-pink-600">
                <Link href="/">Friends</Link>
              </li>
              <li className="hover:text-pink-600">
                <Link href="/">Notifications</Link>
              </li>

              {/* <div className="flex items-center space-x-4">
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
                </div>  */}
            </ul>
          </div>
          <div>
            <div className="flex hover:cursor-pointer items-center text-white  space-x-2">
              <Link
                href="/userprofile"
                className=" h-10 w-10 z-10  bg-white rounded-full"></Link>
              <div className="relative group ">
                <div className="flex items-center ">
                  anku
                  <IoMdArrowDropdown className="group-hover:text-pink-600 group-hover:rotate-180  group-hover:cursor-pointer" />
                </div>

                <div className="absolute p-2 right-0 hidden group-hover:block bg-pink-600 rounded-md shadow-lg">
                  <div className="text-white px-4 py-2 text-center text-sm hover:overflow-hidden hover:bg-white hover:rounded-md hover:text-pink-600 cursor-pointer">
                    Profile
                  </div>
                  <div 
                  onClick={handleLogout}
                  className="text-white px-4 py-2 text-center text-sm hover:overflow-hidden hover:bg-white hover:rounded-md hover:text-pink-600 cursor-pointer">
                    logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
