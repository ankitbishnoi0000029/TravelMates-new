import React, { useState, useEffect, useRef } from "react";
import { BsChatHeart, BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { Popper, Box } from "@mui/material";
import Showcomment from "../Comment/Showcomment";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

function PostCard({ item }) {
  const [open, setOpen] = useState(false);
  const [commentdata, setComment] = useState();
  const anchorEl = useRef(null);
  const path = useParams();

  const userId = useSelector((state) => state.MyStore.userId);
  const handlePopoverToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="p-4  shadow-lg   ">
      <div className="text-white flex items-center justify-between py-2">
        <div className="flex items-center">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <img
              src="/posts/woman.jpg"
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-4 text-sm">
            <p className="text-lg">
              <strong>{item.user?.name}</strong>
            </p>
            <p className="text-gray-400">1h ago</p>
          </div>
        </div>
        <div className="relative py-3 px-4 group">
          <BsThreeDots className="hover:text-pink-600 hover:cursor-pointer" />
          <div className="absolute right-0 hidden group-hover:block bg-pink-600 rounded-md shadow-lg">
            <div className="text-white px-4 py-2 text-center text-sm hover:overflow-hidden hover:bg-white hover:text-pink-600 cursor-pointer">
              Edit
            </div>
            <div className="text-white px-4 py-2 text-center text-sm hover:overflow-hidden hover:bg-white hover:text-pink-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="rounded-2xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img src="/posts/post.jpg" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="text-white px-4">
        <p>
          <strong>{item.postTitle}</strong>
        </p>
        <p className="text-[10px] py-2">{item.description}</p>
      </div>

      <div className="flex justify-between w-[30%] font-sans text-pink-500 font-bold items-center gap-2 sm:gap-4 py-1 ">
        <button
          className="flex 
        ">
          <CiHeart />

          <span className="text-gray-600 text-[12px] ">1.3k</span>
        </button>
        <button ref={anchorEl} onClick={handlePopoverToggle} className="flex">
          <FaRegCommentDots />

          <span className="text-gray-600 text-[12px] ">1.3k</span>
        </button>

        <Link
          href={`/chat/${userId}/receiver/${item.user?._id}/reseverName/${item.user?.name}`}
          className=" flex
            ">
          <BsChatHeart className="text-pink-600" />
        </Link>

        <button className="flex">
          <IoMdShareAlt />
          <span className="text-gray-600 text-[12px] ">1.2k</span>
        </button>
      </div>
    
    </div>
  );
}

export default PostCard;
