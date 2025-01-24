import React from "react";
import { BsChatHeart, BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa6";
import Link from "next/link";

function PostCard({ item }) {
    const userId = localStorage.getItem('userId')

    
    
  return (
    <div>
      <div className="text-white flex items-center justify-between">
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
              Name : <strong>{item.user?.name}</strong>
            </p>
            <p>
              Title : <strong>{item.postTitle}</strong>
            </p>
            <p>
              Description : <strong>{item.description}</strong>
            </p>
            <p className="text-gray-400">1h ago</p>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>
      <div className="py-6">
        <div className="rounded-2xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img src="/posts/post.jpg" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between text-lg text-pink-500 font-bold items-center gap-2 sm:gap-4">
        <button className="w-full sm:w-auto flex-1 rounded-md p-3 sm:p-4 bg-white flex justify-center items-center gap-2 transition hover:bg-pink-50">
          Like <CiHeart /> <span className="text-blue-700">13.45k</span>
        </button>
        <button className="w-full sm:w-auto flex-1 rounded-md p-3 sm:p-4 bg-white flex justify-center items-center gap-2 transition hover:bg-pink-50">
          Comment <FaRegCommentDots /> <span className="text-blue-700">1.3k</span>
        </button>
        <Link href={`/chat/${userId}/resever/${item.user?._id}`} className="w-full sm:w-auto flex-1 rounded-md p-3 sm:p-4 bg-white flex justify-center items-center gap-2 transition hover:bg-pink-50">
          Chat <BsChatHeart /> 
        </Link>
        <button className="w-full sm:w-auto flex-1 rounded-md p-3 sm:p-4 bg-white flex justify-center items-center gap-2 transition hover:bg-pink-50">
          Share <IoMdShareAlt /> <span className="text-blue-700">500</span>
        </button>
      </div>
    </div>
  );
}

export default PostCard;
