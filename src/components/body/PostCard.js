import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa6";

function PostCard() {
  return (
    <div>
      <div className="text-white flex items-center justify-between ">
        <div className="flex  items-center ">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <img
              src="/posts/woman.jpg"
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-4 text-sm">
            <p className="text-lg">Name : <strong>Siea</strong></p>
            <p>
              Age : <strong>12</strong>
            </p>
            <p className="text-gray-400"> 1h ago</p>
          </div>
        </div>

        <div className="">
          <BsThreeDots />
        </div>
      </div>
      <div className="py-6">
        <div className=" rounded-2xl h-[70vh] overflow-hidden ">
          <img src="/posts/post.jpg" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="flex justify-between text-lg text-pink-500 font-bold items-center">
        <button className="  w-full rounded-md pl-4 p-4   bottom-1 bg-white flex justify-center items-center gap-1 ">
          Like <CiHeart />{" "}
        </button>
        <button className=" mx-4 w-full rounded-md px-4 p-4   bottom-1 bg-white flex justify-center items-center gap-2  ">
          Commant <FaRegCommentDots />{" "}
        </button>
        <button className=" w-full rounded-md px-4 p-4   bottom-1 bg-white flex justify-center items-center gap-1 ">
          Share <IoMdShareAlt />{" "}
        </button>
      </div>
    </div>
  );
}

export default PostCard;
